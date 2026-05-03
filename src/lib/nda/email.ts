/**
 * Resend wrappers for the NDA flow.
 *
 * Two emails per signature:
 *   - To the signer: their executed PDF copy + a friendly confirmation.
 *   - To Geoff: notification with the same PDF + the signer's metadata.
 *
 * Errors are caught and logged but never thrown back into the API route —
 * the signature itself is already persisted, and the user shouldn't be
 * blocked from accessing the proposal because Resend hiccupped.
 */
import "server-only";
import { Resend } from "resend";
import { AGREEMENT_VERSION } from "./agreement";

const FROM = process.env.NDA_EMAIL_FROM || "Crowd Control Digital <hello@crowdcontroldigital.com>";
const NOTIFY_TO = process.env.NDA_NOTIFY_TO || "geoff@crowdcontroldigital.com";

let _client: Resend | null = null;
function client(): Resend | null {
  if (_client) return _client;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn("[nda/email] RESEND_API_KEY missing — emails will be skipped.");
    return null;
  }
  _client = new Resend(key);
  return _client;
}

export type SendNdaEmailsInput = {
  pdf: Uint8Array;
  fullName: string;
  company: string;
  email: string;
  proposalSlug: string;
  proposalTitle: string;
  signedAtIso: string;
  ipAddress: string | null;
  proposalUrl: string;
};

export async function sendNdaEmails(i: SendNdaEmailsInput) {
  const r = client();
  if (!r) return;

  const filename = `CCD-NDA-${i.proposalSlug}-${i.fullName.replace(/[^a-z0-9]+/gi, "-")}.pdf`;
  const attachment = {
    filename,
    content: Buffer.from(i.pdf).toString("base64"),
  };

  // Signer's confirmation copy.
  const signerSubject = `Your countersigned NDA — ${i.proposalTitle}`;
  const signerHtml = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #111;">
      <p style="font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase; color: #777; margin: 0 0 12px;">Crowd Control Digital</p>
      <h1 style="font-size: 22px; font-weight: 700; margin: 0 0 16px;">Your NDA is countersigned.</h1>
      <p style="font-size: 15px; line-height: 1.55; color: #222;">Hi ${escapeHtml(i.fullName.split(" ")[0])},</p>
      <p style="font-size: 15px; line-height: 1.55; color: #222;">Thanks for signing the mutual NDA for <strong>${escapeHtml(i.proposalTitle)}</strong>. A fully executed copy is attached for your records.</p>
      <p style="font-size: 15px; line-height: 1.55; color: #222;">You can pick up where you left off any time:</p>
      <p style="margin: 22px 0;"><a href="${i.proposalUrl}" style="background:#000; color:#fff; padding:12px 22px; font-size:13px; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; display:inline-block;">Open the proposal</a></p>
      <hr style="border:none; border-top:1px solid #eee; margin: 28px 0;">
      <p style="font-size: 12px; color: #888; line-height: 1.5;">Signed: ${escapeHtml(i.signedAtIso)} · IP: ${escapeHtml(i.ipAddress || "—")}<br>Agreement version: ${AGREEMENT_VERSION}</p>
    </div>
  `;

  // Geoff's notification.
  const notifySubject = `[NDA] ${i.fullName} (${i.company}) signed for ${i.proposalSlug}`;
  const notifyHtml = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; padding: 16px; color: #111;">
      <h2 style="font-size: 18px; margin: 0 0 16px;">New NDA signed</h2>
      <table style="border-collapse: collapse; font-size: 14px; line-height: 1.5;">
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Proposal</td><td><a href="${i.proposalUrl}">${escapeHtml(i.proposalSlug)}</a></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Name</td><td>${escapeHtml(i.fullName)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Email</td><td><a href="mailto:${i.email}">${escapeHtml(i.email)}</a></td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Company</td><td>${escapeHtml(i.company)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Signed at</td><td>${escapeHtml(i.signedAtIso)}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">IP</td><td>${escapeHtml(i.ipAddress || "—")}</td></tr>
        <tr><td style="padding: 4px 12px 4px 0; color:#666;">Version</td><td>${AGREEMENT_VERSION}</td></tr>
      </table>
      <p style="font-size: 13px; color: #666; margin-top: 22px;">Executed PDF attached.</p>
    </div>
  `;

  try {
    await Promise.all([
      r.emails.send({
        from: FROM,
        to: [i.email],
        subject: signerSubject,
        html: signerHtml,
        attachments: [attachment],
        replyTo: NOTIFY_TO,
      }),
      r.emails.send({
        from: FROM,
        to: [NOTIFY_TO],
        subject: notifySubject,
        html: notifyHtml,
        attachments: [attachment],
        replyTo: i.email,
      }),
    ]);
  } catch (err) {
    console.error("[nda/email] Resend error:", err);
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}
