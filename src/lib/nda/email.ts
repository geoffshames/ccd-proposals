/**
 * Resend wrappers for the NDA flow.
 *
 * Two emails per signature:
 *   - To the signer:   premium dark-themed transactional email — branded
 *                      header, "Your NDA is countersigned." headline, a
 *                      signature-receipt block showing the typed name in a
 *                      handwriting font, a CTA back to the proposal, audit
 *                      footer, attached executed PDF.
 *   - To Geoff:        a clean ops-flavored notification with the same
 *                      receipt summary + the PDF attached.
 *
 * Design notes:
 *   - All CSS is INLINE — Gmail and Outlook strip <style> blocks aggressively.
 *   - Layout uses tables (not flex/grid). Tables work in every client.
 *   - Background is dark by default. We ALSO embed the Google Font Caveat for
 *     the signature preview; if the client refuses webfonts (some Outlook),
 *     we fall back to "Brush Script MT" → "Lucida Handwriting" → cursive,
 *     which still reads as a signature.
 *   - The whole template is one wide table with a 600px-wide inner table —
 *     the standard transactional email pattern.
 *   - Errors are caught and logged but never thrown back into the API route.
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

  const friendlyDate = formatHumanDate(i.signedAtIso);

  const signerHtml = renderSignerEmail({
    firstName: firstNameOf(i.fullName),
    fullName: i.fullName,
    company: i.company,
    email: i.email,
    proposalTitle: i.proposalTitle,
    proposalUrl: i.proposalUrl,
    signedAtIso: i.signedAtIso,
    signedAtFriendly: friendlyDate,
    ipAddress: i.ipAddress,
  });

  const notifyHtml = renderNotifyEmail({
    fullName: i.fullName,
    company: i.company,
    email: i.email,
    proposalTitle: i.proposalTitle,
    proposalSlug: i.proposalSlug,
    proposalUrl: i.proposalUrl,
    signedAtIso: i.signedAtIso,
    signedAtFriendly: friendlyDate,
    ipAddress: i.ipAddress,
  });

  try {
    await Promise.all([
      r.emails.send({
        from: FROM,
        to: [i.email],
        subject: `Your countersigned NDA — ${i.proposalTitle}`,
        html: signerHtml,
        attachments: [attachment],
        replyTo: NOTIFY_TO,
      }),
      r.emails.send({
        from: FROM,
        to: [NOTIFY_TO],
        subject: `[NDA] ${i.fullName} (${i.company}) signed for ${i.proposalSlug}`,
        html: notifyHtml,
        attachments: [attachment],
        replyTo: i.email,
      }),
    ]);
  } catch (err) {
    console.error("[nda/email] Resend error:", err);
  }
}

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

const ACCENT = "#FD3737";
const BG = "#0A0A0A";
const SURFACE = "#141414";
const SURFACE_2 = "#1B1B1B";
const TEXT = "#F5F5F5";
const TEXT_DIM = "rgba(245,245,245,0.62)";
const TEXT_FAINT = "rgba(245,245,245,0.42)";
const BORDER = "rgba(255,255,255,0.10)";

// Web-safe handwriting fallback chain. We also link Google's Caveat for clients
// that honor webfonts. Most modern clients (Apple Mail, Yahoo, AOL, iOS,
// Outlook for Mac) honor it; Gmail web sometimes does, Gmail mobile usually
// falls back to "Brush Script MT" which still reads as handwriting.
const HANDWRITING_FONT = `'Caveat','Brush Script MT','Lucida Handwriting','Snell Roundhand','Apple Chancery',cursive`;
const SANS_FONT = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`;
const MONO_FONT = `'SF Mono','JetBrains Mono','Menlo','Consolas',ui-monospace,monospace`;

type SignerArgs = {
  firstName: string;
  fullName: string;
  company: string;
  email: string;
  proposalTitle: string;
  proposalUrl: string;
  signedAtIso: string;
  signedAtFriendly: string;
  ipAddress: string | null;
};

function renderSignerEmail(a: SignerArgs): string {
  const preheader = `Your fully executed mutual NDA for ${a.proposalTitle} is attached. Open the proposal any time.`;

  return baseShell({
    preheader,
    body: `
      <!-- Headline block -->
      <tr><td style="padding:48px 40px 0 40px;">
        <div style="font-family:${MONO_FONT};font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:${TEXT_FAINT};margin:0 0 22px 0;">
          Step 01 — Mutual Non-Disclosure
        </div>
        <h1 style="margin:0 0 22px 0;font-family:${SANS_FONT};font-weight:800;font-size:36px;line-height:1.05;letter-spacing:-0.02em;color:${TEXT};">
          Your NDA is<br>countersigned.
        </h1>
        <p style="margin:0 0 12px 0;font-family:${SANS_FONT};font-size:16px;line-height:1.6;color:${TEXT_DIM};">
          Hi ${escapeHtml(a.firstName)},
        </p>
        <p style="margin:0 0 8px 0;font-family:${SANS_FONT};font-size:16px;line-height:1.65;color:${TEXT_DIM};">
          Thanks for signing the mutual NDA for <span style="color:${TEXT};font-weight:600;">${escapeHtml(a.proposalTitle)}</span>. A fully executed PDF is attached for your records, and a copy is on file with Crowd Control Digital, LLC.
        </p>
      </td></tr>

      <!-- Signature receipt -->
      <tr><td style="padding:30px 40px 0 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE};border:1px solid ${BORDER};border-collapse:separate;">
          <tr><td style="padding:24px 26px 18px 26px;">
            <div style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:${TEXT_FAINT};margin:0 0 14px 0;">
              Electronic Signature — On File
            </div>
            <div style="font-family:${HANDWRITING_FONT};font-weight:700;font-size:46px;line-height:1.05;color:${TEXT};letter-spacing:0.005em;">
              ${escapeHtml(a.fullName)}
            </div>
            <div style="height:1px;background:${BORDER};margin:6px 0 14px 0;"></div>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="font-family:${MONO_FONT};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};padding-right:12px;">x — ${escapeHtml(a.email)}</td>
                <td align="right" style="font-family:${MONO_FONT};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};">${escapeHtml(a.signedAtFriendly)}</td>
              </tr>
            </table>
          </td></tr>
        </table>
      </td></tr>

      <!-- CTA -->
      <tr><td style="padding:32px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="background:${ACCENT};">
            <a href="${escapeAttr(a.proposalUrl)}" style="display:inline-block;padding:16px 30px;font-family:${SANS_FONT};font-weight:700;font-size:13px;letter-spacing:.16em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
              Open the proposal →
            </a>
          </td></tr>
        </table>
        <p style="margin:14px 0 0 0;font-family:${MONO_FONT};font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${TEXT_FAINT};">
          You won't need to sign again on this device.
        </p>
      </td></tr>

      <!-- What you signed -->
      <tr><td style="padding:34px 40px 0 40px;">
        <div style="height:1px;background:${BORDER};margin:0 0 22px 0;"></div>
        <div style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:${TEXT_FAINT};margin:0 0 12px 0;">
          What you signed
        </div>
        <p style="margin:0 0 10px 0;font-family:${SANS_FONT};font-size:14.5px;line-height:1.65;color:${TEXT_DIM};">
          A <strong style="color:${TEXT};">mutual non-disclosure agreement</strong> covering both parties — you and Crowd Control Digital, LLC. Confidentiality runs in both directions: nothing in the proposal can be shared, and nothing you share with us in the engagement can be shared either.
        </p>
        <p style="margin:0;font-family:${SANS_FONT};font-size:14.5px;line-height:1.65;color:${TEXT_DIM};">
          Governed by California law. Section 9 defines your typed Full Name and Email above as your legally binding electronic signature, with the same force as a handwritten signature under the U.S. E-SIGN Act and California UETA.
        </p>
      </td></tr>
    `,
    auditFooter: `
      <tr><td style="padding:18px 40px 32px 40px;">
        <div style="height:1px;background:${BORDER};margin:0 0 18px 0;"></div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};line-height:1.7;">
              Signed&nbsp;·&nbsp;${escapeHtml(a.signedAtIso)}<br>
              IP&nbsp;·&nbsp;${escapeHtml(a.ipAddress || "—")}<br>
              Version&nbsp;·&nbsp;${AGREEMENT_VERSION}
            </td>
            <td align="right" valign="top" style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:${TEXT_FAINT};line-height:1.7;">
              Crowd Control<br>Digital, LLC
            </td>
          </tr>
        </table>
      </td></tr>
    `,
  });
}

type NotifyArgs = {
  fullName: string;
  company: string;
  email: string;
  proposalTitle: string;
  proposalSlug: string;
  proposalUrl: string;
  signedAtIso: string;
  signedAtFriendly: string;
  ipAddress: string | null;
};

function renderNotifyEmail(a: NotifyArgs): string {
  const preheader = `${a.fullName} (${a.company}) just signed the NDA for ${a.proposalSlug}.`;

  return baseShell({
    preheader,
    body: `
      <tr><td style="padding:46px 40px 0 40px;">
        <div style="font-family:${MONO_FONT};font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:${ACCENT};margin:0 0 18px 0;">
          New NDA Signed
        </div>
        <h1 style="margin:0 0 18px 0;font-family:${SANS_FONT};font-weight:800;font-size:30px;line-height:1.1;letter-spacing:-0.015em;color:${TEXT};">
          ${escapeHtml(a.fullName)}<br>
          <span style="color:${TEXT_DIM};font-weight:600;font-size:22px;">${escapeHtml(a.company)}</span>
        </h1>
        <p style="margin:0;font-family:${SANS_FONT};font-size:15px;line-height:1.6;color:${TEXT_DIM};">
          Just signed the mutual NDA for <span style="color:${TEXT};font-weight:600;">${escapeHtml(a.proposalTitle)}</span>.
          The executed PDF is attached.
        </p>
      </td></tr>

      <!-- Signature -->
      <tr><td style="padding:26px 40px 0 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SURFACE};border:1px solid ${BORDER};border-collapse:separate;">
          <tr><td style="padding:22px 24px 14px 24px;">
            <div style="font-family:${HANDWRITING_FONT};font-weight:700;font-size:38px;line-height:1.05;color:${TEXT};letter-spacing:0.005em;">
              ${escapeHtml(a.fullName)}
            </div>
            <div style="height:1px;background:${BORDER};margin:5px 0 12px 0;"></div>
            <div style="font-family:${MONO_FONT};font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};">
              x — ${escapeHtml(a.email)} · ${escapeHtml(a.signedAtFriendly)}
            </div>
          </td></tr>
        </table>
      </td></tr>

      <!-- Quick details table -->
      <tr><td style="padding:26px 40px 0 40px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${BORDER};border-collapse:separate;background:${SURFACE_2};">
          ${detailRow("Proposal", `<a href="${escapeAttr(a.proposalUrl)}" style="color:${ACCENT};text-decoration:none;">${escapeHtml(a.proposalSlug)}</a>`)}
          ${detailRow("Email", `<a href="mailto:${escapeAttr(a.email)}" style="color:${TEXT};text-decoration:none;">${escapeHtml(a.email)}</a>`)}
          ${detailRow("Company", escapeHtml(a.company))}
          ${detailRow("Signed at", escapeHtml(a.signedAtIso))}
          ${detailRow("IP address", escapeHtml(a.ipAddress || "—"))}
          ${detailRow("Agreement version", AGREEMENT_VERSION, true)}
        </table>
      </td></tr>

      <!-- CTA -->
      <tr><td style="padding:28px 40px 0 40px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr><td style="background:${ACCENT};">
            <a href="${escapeAttr(a.proposalUrl)}" style="display:inline-block;padding:14px 26px;font-family:${SANS_FONT};font-weight:700;font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:#ffffff;text-decoration:none;">
              View the proposal
            </a>
          </td></tr>
        </table>
      </td></tr>
    `,
    auditFooter: `
      <tr><td style="padding:30px 40px 32px 40px;">
        <div style="height:1px;background:${BORDER};margin:0 0 18px 0;"></div>
        <div style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};line-height:1.7;">
          Notification — Crowd Control Digital, LLC<br>
          Reply to this email to respond directly to ${escapeHtml(a.email)}.
        </div>
      </td></tr>
    `,
  });
}

function detailRow(label: string, value: string, last = false): string {
  const border = last ? "" : `border-bottom:1px solid ${BORDER};`;
  return `
    <tr>
      <td style="padding:11px 18px;${border}font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:${TEXT_FAINT};width:38%;">${label}</td>
      <td style="padding:11px 18px;${border}font-family:${MONO_FONT};font-size:12px;color:${TEXT};">${value}</td>
    </tr>
  `;
}

function baseShell(opts: { preheader: string; body: string; auditFooter: string }): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="dark light">
  <meta name="supported-color-schemes" content="dark light">
  <title>Crowd Control Digital</title>
  <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">
  <style>
    /* Hidden preheader text — shows in the inbox preview but not the email body. */
    .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }
    /* Mobile tweaks */
    @media screen and (max-width: 600px) {
      .container { width:100% !important; }
      .padding-x { padding-left:24px !important; padding-right:24px !important; }
      .signature { font-size:36px !important; }
      .h1 { font-size:30px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${BG};">
  <span class="preheader">${escapeHtml(opts.preheader)}</span>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${BG};">
    <tr><td align="center" style="padding:32px 16px;">
      <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background:${BG};border:1px solid ${BORDER};">

        <!-- Header: accent stripe + wordmark -->
        <tr><td style="height:4px;background:${ACCENT};line-height:4px;font-size:0;">&nbsp;</td></tr>
        <tr><td style="padding:24px 40px 6px 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td valign="middle" style="line-height:0;">
                <a href="https://proposal.crowdcontroldigital.com" style="text-decoration:none;border:0;outline:none;">
                  <img src="https://proposal.crowdcontroldigital.com/brand/CC-LOGO-2024-WHITE.png"
                       alt="Crowd Control Digital"
                       width="170" height="24"
                       style="display:block;width:170px;height:auto;max-width:170px;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" />
                </a>
              </td>
              <td valign="middle" align="right" style="font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:${TEXT_FAINT};">
                Confidential
              </td>
            </tr>
          </table>
        </td></tr>

        ${opts.body}

        ${opts.auditFooter}
      </table>

      <!-- External footer -->
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;margin-top:14px;">
        <tr><td align="center" style="padding:0 16px;font-family:${MONO_FONT};font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:${TEXT_FAINT};line-height:1.7;">
          Crowd Control Digital, LLC · proposal.crowdcontroldigital.com
        </td></tr>
      </table>

    </td></tr>
  </table>
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function firstNameOf(full: string): string {
  return (full.trim().split(/\s+/)[0] || full.trim()).replace(/[^\p{L}\p{N}\-']/giu, "");
}

function formatHumanDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}
