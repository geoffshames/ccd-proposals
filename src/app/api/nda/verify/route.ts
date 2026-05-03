/**
 * POST /api/nda/verify
 *
 * Lets a returning visitor unlock the proposal by email alone — without
 * re-signing — provided they've previously signed for this slug. Useful when
 * they switched browsers/devices and don't have the cookie any more.
 *
 * For now this endpoint is intentionally not exposed in the UI (it would
 * leak which emails have signed). It's wired up so we can add an "I've
 * already signed — send me a magic link" UX later without another deploy.
 */
import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { NDA_COOKIE_NAME, NDA_COOKIE_MAX_AGE, buildNdaCookie } from "@/lib/nda/cookie";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const slug = String(body.slug || "").trim();
  const email = String(body.email || "").trim();
  if (!slug || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const admin = supabaseAdmin();
  const { data, error } = await admin
    .from("nda_signatures")
    .select("id")
    .eq("proposal_slug", slug)
    .eq("email_normalized", email.toLowerCase())
    .limit(1);

  if (error || !data || data.length === 0) {
    // Always return 200 with ok:false to avoid leaking timing info.
    return NextResponse.json({ ok: false });
  }

  const res = NextResponse.json({ ok: true });
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
