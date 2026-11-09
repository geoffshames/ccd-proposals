/**
 * POST /api/approve
 *
 * Lightweight "Approve" CTA handler for proposals that don't take Stripe.
 * Captures visitor metadata (IP, UA, referer) and emails geoff@crowdcontroldigital.com
 * via Resend. No persistence, no signature, no PDF. Just a notification.
 *
 * Triggered by the Investment CTA when project.quote.paymentLink === "#approve".
 */
import "server-only";
import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  slug?: string;
  clientName?: string;
  projectName?: string;
  tier?: string;
  name?: string;
  email?: string;
  company?: string;
};

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const FROM = process.env.NDA_EMAIL_FROM || "Crowd Control Digital <hello@crowdcontroldigital.com>";
const TO = process.env.NDA_NOTIFY_TO || "geoff@crowdcontroldigital.com";

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const slug = (body.slug || "").trim();
  const clientName = esc((body.clientName || "Unknown client").trim());
  const projectName = esc((body.projectName || "Untitled proposal").trim());
  const tier = esc((body.tier || "").trim().slice(0, 120));
  const name = esc((body.name || "").trim().slice(0, 120));
  const rawEmail = (body.email || "").trim().slice(0, 200);
  const email = EMAIL_RE.test(rawEmail) ? rawEmail : "";
  const company = esc((body.company || "").trim().slice(0, 160));

  if (!slug) {
    return NextResponse.json({ error: "Missing proposal slug." }, { status: 400 });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent") || "unknown";
  const referer = req.headers.get("referer") || "unknown";
  const at = new Date().toISOString();
  const proposalUrl = `https://proposal.crowdcontroldigital.com/${slug}`;

  const subject = `[Proposal Approved] ${(body.clientName || "Unknown client").trim()}${body.name ? ` by ${body.name.trim().slice(0, 120)}` : ""}${body.tier ? ` (${body.tier.trim().slice(0, 120)})` : ""}`.replace(/[\r\n]+/g, " ");
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; color: #0a0a0a;">
      <h2 style="margin: 0 0 8px; font-size: 22px;">Proposal approved</h2>
      <p style="margin: 0 0 24px; color: #555;">${name ? `<strong>${name}</strong>${company ? ` (${company})` : ""} approved` : "Someone just clicked Approve on"} the ${clientName} proposal.</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 6px 0; color: #777; width: 140px;">Client</td><td style="padding: 6px 0;"><strong>${clientName}</strong></td></tr>
        <tr><td style="padding: 6px 0; color: #777;">Project</td><td style="padding: 6px 0;">${projectName}</td></tr>
        ${name ? `<tr><td style="padding: 6px 0; color: #777;">Approved by</td><td style="padding: 6px 0;"><strong>${name}</strong></td></tr>` : ""}
        ${email ? `<tr><td style="padding: 6px 0; color: #777;">Email</td><td style="padding: 6px 0;"><a href="mailto:${esc(email)}" style="color: #FD3737; text-decoration: none;">${esc(email)}</a></td></tr>` : ""}
        ${company ? `<tr><td style="padding: 6px 0; color: #777;">Company</td><td style="padding: 6px 0;">${company}</td></tr>` : ""}
        ${tier ? `<tr><td style="padding: 6px 0; color: #777;">Tier selected</td><td style="padding: 6px 0;">${tier}</td></tr>` : ""}
        <tr><td style="padding: 6px 0; color: #777;">Proposal</td><td style="padding: 6px 0;"><a href="${proposalUrl}" style="color: #FD3737; text-decoration: none;">${proposalUrl}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #777;">Approved at</td><td style="padding: 6px 0;">${at}</td></tr>
        <tr><td style="padding: 6px 0; color: #777;">IP</td><td style="padding: 6px 0; font-family: monospace; font-size: 12px;">${esc(ip)}</td></tr>
        <tr><td style="padding: 6px 0; color: #777;">Referer</td><td style="padding: 6px 0; font-family: monospace; font-size: 12px;">${esc(referer)}</td></tr>
        <tr><td style="padding: 6px 0; color: #777;">User agent</td><td style="padding: 6px 0; font-family: monospace; font-size: 11px;">${esc(ua)}</td></tr>
      </table>
      <p style="margin: 24px 0 0; color: #999; font-size: 12px;">Sent automatically when the Approve CTA is clicked on a proposal where paymentLink === "#approve".</p>
    </div>
  `;

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[approve] Missing RESEND_API_KEY");
      return NextResponse.json({ ok: true, sent: false });
    }
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject,
      html,
      ...(email ? { replyTo: email } : {}),
    });
  } catch (err) {
    console.error("[approve] Resend send failed", err);
    return NextResponse.json({ ok: true, sent: false });
  }

  return NextResponse.json({ ok: true, sent: true });
}
