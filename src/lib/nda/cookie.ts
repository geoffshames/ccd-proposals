/**
 * Signed-cookie helpers for the NDA gate.
 *
 * We don't trust the cookie alone — every gated page also re-checks against
 * the Supabase nda_signatures table. The cookie just gives a fast path so a
 * signer doesn't have to re-enter their email on every refresh.
 *
 * Format: `${proposal_slug}:${email_normalized}.${hmac}`
 *   - `slug` and `email` are URI-encoded
 *   - `hmac` = base64url(HMAC-SHA256(`${slug}:${email}`, NDA_COOKIE_SECRET))
 */
import { createHmac, timingSafeEqual } from "node:crypto";

export const NDA_COOKIE_NAME = "ccd_nda";
export const NDA_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 * 2; // 2 years

function getSecret(): string {
  const s = process.env.NDA_COOKIE_SECRET;
  if (!s || s.length < 16) {
    throw new Error(
      "NDA_COOKIE_SECRET env var is missing or too short (need 16+ chars)."
    );
  }
  return s;
}

function b64url(buf: Buffer): string {
  return buf
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function fromB64url(s: string): Buffer {
  const padded = s.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((s.length + 3) % 4);
  return Buffer.from(padded, "base64");
}

function sign(payload: string): string {
  const mac = createHmac("sha256", getSecret()).update(payload).digest();
  return b64url(mac);
}

export function buildNdaCookie(slug: string, email: string): string {
  const norm = email.trim().toLowerCase();
  const payload = `${encodeURIComponent(slug)}:${encodeURIComponent(norm)}`;
  return `${payload}.${sign(payload)}`;
}

export type ParsedNdaCookie = { slug: string; email: string };

export function parseNdaCookie(value: string | undefined | null): ParsedNdaCookie | null {
  if (!value) return null;
  const lastDot = value.lastIndexOf(".");
  if (lastDot < 0) return null;
  const payload = value.slice(0, lastDot);
  const provided = value.slice(lastDot + 1);
  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return null;
  }
  const a = fromB64url(provided);
  const b = fromB64url(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  const colon = payload.indexOf(":");
  if (colon < 0) return null;
  const slug = decodeURIComponent(payload.slice(0, colon));
  const email = decodeURIComponent(payload.slice(colon + 1));
  if (!slug || !email) return null;
  return { slug, email };
}
