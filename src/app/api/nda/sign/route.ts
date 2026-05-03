/**
 * POST /api/nda/sign
 *
 * Validates the gate form, persists the signature in Supabase, generates the
 * executed PDF, uploads it to Supabase Storage, sends emails to the signer
 * and to Geoff, and sets a long-lived signed cookie so the visitor doesn't
 * have to re-sign on subsequent visits.
 *
 * The PDF and email steps are best-effort — if they fail, we still return 200
 * because the signature row is the legal source of truth. We log errors and
 * the operator can re-send the PDF from the Supabase row if needed.
 */
import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import { getProject } from "@/lib/projects";
import { supabaseAdmin } from "@/lib/supabase";
import { generateExecutedNdaPdf } from "@/lib/nda/pdf";
import { sendNdaEmails } from "@/lib/nda/email";
import { AGREEMENT_VERSION } from "@/lib/nda/agreement";
import { NDA_COOKIE_NAME, NDA_COOKIE_MAX_AGE, buildNdaCookie } from "@/lib/nda/cookie";

export const runtime = "nodejs";

type Body = {
  slug?: string;
  fullName?: string;
  company?: string;
  email?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const slug = (body.slug || "").trim();
  const fullName = (body.fullName || "").trim();
  const company = (body.company || "").trim();
  const email = (body.email || "").trim();

  if (!slug) return NextResponse.json({ error: "Missing proposal slug." }, { status: 400 });
  if (!fullName) return NextResponse.json({ error: "Full name is required." }, { status: 400 });
  if (!company) return NextResponse.json({ error: "Company is required." }, { status: 400 });
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Invalid email." }, { status: 400 });

  const project = getProject(slug);
  if (!project) return NextResponse.json({ error: "Unknown proposal." }, { status: 404 });
  if (!project.requireNda) {
    return NextResponse.json({ error: "This proposal does not require an NDA." }, { status: 400 });
  }

  const ipAddress =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    null;
  const userAgent = req.headers.get("user-agent");

  const signedAt = new Date();
  const effectiveDate = signedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 1) Write the signature row first — it's the legal record.
  let admin;
  try {
    admin = supabaseAdmin();
  } catch (err) {
    console.error("[nda/sign] supabase init failed:", err);
    return NextResponse.json({ error: "Server misconfigured. Contact the proposal owner." }, { status: 500 });
  }

  const { data: row, error: insertErr } = await admin
    .from("nda_signatures")
    .insert({
      proposal_slug: slug,
      full_name: fullName,
      company,
      email,
      acknowledged_binding: true,
      signed_at: signedAt.toISOString(),
      ip_address: ipAddress,
      user_agent: userAgent,
      agreement_version: AGREEMENT_VERSION,
      governing_law: "California",
      client_legal_name: project.clientLegalName ?? project.client.name,
    })
    .select("id")
    .single();

  if (insertErr || !row) {
    console.error("[nda/sign] supabase insert failed:", insertErr);
    return NextResponse.json({ error: "Could not record signature." }, { status: 500 });
  }

  // 2) Generate the executed PDF.
  let pdf: Uint8Array | null = null;
  try {
    pdf = await generateExecutedNdaPdf({
      slug,
      fullName,
      company,
      email,
      signedAt,
      ipAddress,
      userAgent,
      effectiveDate,
      companyDefinitionTerm: "Client",
    });
  } catch (err) {
    console.error("[nda/sign] PDF generation failed:", err);
  }

  // 3) Upload the PDF (best-effort; record the URL on the row if it works).
  let pdfUrl: string | null = null;
  if (pdf) {
    const path = `${slug}/${row.id}.pdf`;
    const upload = await admin.storage
      .from("nda-signed")
      .upload(path, pdf, { contentType: "application/pdf", upsert: true });
    if (upload.error) {
      console.error("[nda/sign] storage upload failed:", upload.error);
    } else {
      // Signed URL valid for 1 year — embed in the row for easy re-fetch.
      const signed = await admin.storage
        .from("nda-signed")
        .createSignedUrl(path, 60 * 60 * 24 * 365);
      if (signed.data?.signedUrl) {
        pdfUrl = signed.data.signedUrl;
        await admin.from("nda_signatures").update({ pdf_url: pdfUrl }).eq("id", row.id);
      }
    }
  }

  // 4) Send the emails (best-effort).
  if (pdf) {
    const proposalUrl = `https://proposal.crowdcontroldigital.com/${slug}`;
    const proposalTitle = `${project.client.name} × ${project.studio.name}`;
    sendNdaEmails({
      pdf,
      fullName,
      company,
      email,
      proposalSlug: slug,
      proposalTitle,
      signedAtIso: signedAt.toISOString(),
      ipAddress,
      proposalUrl,
    }).catch((err) => console.error("[nda/sign] email send failed:", err));
  }

  // 5) Set the signed cookie + return success.
  const res = NextResponse.json({ ok: true, id: row.id });
  res.cookies.set({
    name: NDA_COOKIE_NAME,
    value: buildNdaCookie(slug, email),
    maxAge: NDA_COOKIE_MAX_AGE,
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    path: "/",
  });
  return res;
}
