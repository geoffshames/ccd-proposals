/**
 * Server-side check: has this email signed the NDA for this proposal slug?
 *
 * Two layers of trust:
 *   1. Signed cookie (ccd_nda) gives a fast path — HMAC-verified email + slug.
 *   2. The Supabase nda_signatures table is the canonical source of truth.
 *      A cookie alone is not enough; we always re-check the DB.
 */
import "server-only";
import { cookies, headers } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase";
import { NDA_COOKIE_NAME, parseNdaCookie } from "./cookie";

export type NdaCheckResult =
  | { signed: true; email: string }
  | { signed: false };

export async function isNdaSignedForSlug(slug: string): Promise<NdaCheckResult> {
  const jar = await cookies();
  const raw = jar.get(NDA_COOKIE_NAME)?.value;
  const parsed = parseNdaCookie(raw);
  if (!parsed) return { signed: false };
  if (parsed.slug !== slug) return { signed: false };

  // The cookie is HMAC-valid, but the DB is the source of truth — re-check it.
  let admin;
  try {
    admin = supabaseAdmin();
  } catch {
    // No Supabase configured — fail closed if a proposal requires NDA but the
    // env vars are missing. This forces the operator to provision properly.
    return { signed: false };
  }

  const { data, error } = await admin
    .from("nda_signatures")
    .select("email_normalized")
    .eq("proposal_slug", slug)
    .eq("email_normalized", parsed.email.trim().toLowerCase())
    .limit(1);

  if (error || !data || data.length === 0) return { signed: false };
  return { signed: true, email: parsed.email };
}

/** Best-effort IP capture for audit logs. Falls back to "unknown" silently. */
export async function getRequestIp(): Promise<string | null> {
  const h = await headers();
  const fwd = h.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return h.get("x-real-ip") || null;
}

export async function getRequestUserAgent(): Promise<string | null> {
  const h = await headers();
  return h.get("user-agent");
}
