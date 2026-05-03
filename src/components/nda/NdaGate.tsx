"use client";

/**
 * The full NDA gate — renders the agreement and a working e-signature form.
 *
 * Visual language matches the proposals: black background, mono labels,
 * sharp rectangular edges, accent-color CTA. The whole thing is a single
 * scrollable column so the visitor reads the NDA before signing.
 *
 * Submit flow:
 *   1. Client validates required fields + binding checkbox.
 *   2. POST /api/nda/sign with { slug, fullName, company, email }.
 *   3. On 200, the server has set the ccd_nda cookie and persisted the row,
 *      generated the PDF, and sent the emails. We hard-refresh so the gate
 *      check on /[slug] re-runs server-side and renders the proposal.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { RECITALS, SECTIONS, WITNESS } from "@/lib/nda/agreement";

type Props = {
  slug: string;
  proposalTitle: string;        // e.g. "Wonder × Crowd Control Digital"
  clientLegalName: string;      // [COMPANY]
  companyDefinitionTerm: string; // usually "Client"
  effectiveDate: string;        // human-readable, e.g. "May 3, 2026"
  accentColor: string;          // hex
};

export function NdaGate({
  slug,
  proposalTitle,
  clientLegalName,
  companyDefinitionTerm,
  effectiveDate,
  accentColor,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState(clientLegalName);
  const [email, setEmail] = useState("");
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const tokens = useMemo(
    () => ({
      date: effectiveDate,
      companyName: clientLegalName,
      companyDefinitionTerm,
    }),
    [effectiveDate, clientLegalName, companyDefinitionTerm]
  );

  const sections = useMemo(() => SECTIONS(tokens), [tokens]);
  const recitals = useMemo(() => RECITALS(tokens), [tokens]);

  const formRef = useRef<HTMLFormElement | null>(null);

  function emailValid(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!fullName.trim()) return setError("Please enter your full legal name.");
    if (!company.trim()) return setError("Please enter the company name.");
    if (!emailValid(email)) return setError("Please enter a valid email address.");
    if (!acknowledged) return setError("You must acknowledge the agreement is legally binding.");

    setSubmitting(true);
    try {
      const res = await fetch("/api/nda/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          fullName: fullName.trim(),
          company: company.trim(),
          email: email.trim(),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json?.error || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      setSuccess(true);
      // Brief moment to show the confirmation state, then reload — the cookie
      // is set, the server-side gate check on /[slug] will let us through.
      setTimeout(() => {
        window.location.href = `/${slug}`;
      }, 1400);
    } catch {
      setError("Network error. Please try again.");
      setSubmitting(false);
    }
  }

  // Subtle entrance — the gate should feel deliberate, not flashy.
  useEffect(() => {
    document.documentElement.style.setProperty("--color-accent", accentColor);
  }, [accentColor]);

  return (
    <main className="min-h-screen bg-[#050505] text-white antialiased">
      {/* Top bar — minimal */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-[920px] mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-white/55">
            Confidential Proposal
          </div>
          <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-white/55">
            NDA Required
          </div>
        </div>
      </div>

      <div className="max-w-[920px] mx-auto px-6 sm:px-10 py-14 sm:py-20">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-white/55 mb-6">
            Step 01 — Mutual Non-Disclosure
          </div>
          <h1
            className="font-bold uppercase leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
            }}
          >
            Before we share<br />the proposal.
          </h1>
          <p className="mt-6 max-w-[640px] text-[16px] sm:text-[17px] leading-[1.7] text-white/75">
            The materials behind this gate include strategy, pricing, and creative direction
            built specifically for <strong className="text-white">{proposalTitle}</strong>. Please
            review and sign the mutual NDA below to continue. Both parties — you and Crowd
            Control Digital, LLC — are bound by the same confidentiality obligations.
          </p>
        </motion.div>

        {/* Agreement preamble */}
        <section className="mt-14">
          <div className="border-t border-white/[0.10] pt-10">
            <h2
              className="font-bold uppercase tracking-tight text-[22px] sm:text-[26px] mb-6"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              Non-Disclosure and Confidentiality Agreement
            </h2>
            <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-white/80">
              {recitals}
            </p>
          </div>
        </section>

        {/* Numbered sections */}
        <section className="mt-10 space-y-9">
          {sections.map((s) => (
            <article key={s.n} className="flex gap-5">
              <div className="font-mono text-[13px] text-white/40 pt-[2px] w-8 shrink-0">
                {String(s.n).padStart(2, "0")}
              </div>
              <div className="flex-1 space-y-3 text-[14.5px] leading-[1.75] text-white/80">
                <p>{s.body}</p>
                {s.sub?.map((sub) => (
                  <p key={sub.label} className="pl-4 sm:pl-6 border-l border-white/[0.10]">
                    <span className="font-mono text-[12.5px] text-white/55 mr-2">{sub.label}</span>
                    {sub.body}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 border-t border-white/[0.10] pt-8 text-[14px] uppercase tracking-[0.18em] font-mono text-white/55">
          {WITNESS}
        </section>

        {/* Signature form — this is where the e-signature happens */}
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12">
          <div className="border border-white/[0.12] bg-white/[0.03] p-7 sm:p-10">
            <div className="font-mono uppercase tracking-[0.2em] text-[11px] text-white/55 mb-5">
              Sign — {companyDefinitionTerm}
            </div>
            <p className="text-[13.5px] leading-[1.65] text-white/65 mb-7 max-w-[640px]">
              Per Section 9, your typed Full Name and Email Address below together
              constitute your legally binding electronic signature. The agreement is
              dated <strong className="text-white">{effectiveDate}</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field
                label="Full Legal Name"
                value={fullName}
                onChange={setFullName}
                placeholder="e.g. Jordan Rivera"
                disabled={submitting || success}
                required
                autoComplete="name"
              />
              <Field
                label="Company"
                value={company}
                onChange={setCompany}
                placeholder={clientLegalName}
                disabled={submitting || success}
                required
                autoComplete="organization"
              />
              <Field
                label="Email Address"
                value={email}
                onChange={setEmail}
                placeholder="you@company.com"
                type="email"
                disabled={submitting || success}
                required
                autoComplete="email"
                fullWidth
              />
            </div>

            {/* Live signature preview */}
            <div className="mt-8 border border-dashed border-white/[0.15] p-5 bg-black/40">
              <div className="font-mono uppercase tracking-[0.2em] text-[10.5px] text-white/45 mb-2">
                Electronic Signature Preview
              </div>
              <div
                className="text-white/95"
                style={{
                  fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
                  fontStyle: "italic",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  letterSpacing: "0.01em",
                  minHeight: "1.6em",
                }}
              >
                {fullName.trim() || (
                  <span className="text-white/25 not-italic font-mono text-[14px]">
                    Your typed name will appear here
                  </span>
                )}
              </div>
              <div className="mt-2 font-mono text-[12px] text-white/55">
                {email.trim() || "—"} · {effectiveDate}
              </div>
            </div>

            {/* Binding checkbox */}
            <label className="mt-7 flex items-start gap-3 cursor-pointer select-none group">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                disabled={submitting || success}
                className="mt-[3px] h-[18px] w-[18px] shrink-0 appearance-none border border-white/30 bg-transparent checked:bg-[var(--color-accent)] checked:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 transition-colors"
                style={{ accentColor }}
              />
              <span className="text-[13.5px] leading-[1.6] text-white/80 group-hover:text-white">
                I understand and agree that this Agreement is a binding legal contract,
                that my typed Full Name and Email Address above constitute my legally
                binding electronic signature, and that I am authorized to execute this
                Agreement on behalf of <strong className="text-white">{company.trim() || clientLegalName}</strong>.
              </span>
            </label>

            {error && (
              <div
                className="mt-6 border border-[#ff6b6b]/40 bg-[#ff6b6b]/[0.07] px-4 py-3 text-[13.5px] text-[#ffb3b3]"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="font-mono text-[11.5px] text-white/45 uppercase tracking-[0.18em]">
                Governing law: California
              </div>
              <button
                type="submit"
                disabled={submitting || success}
                className="px-9 py-4 font-semibold text-[14.5px] uppercase tracking-[0.16em] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                style={{
                  backgroundColor: success ? "#1d8a3a" : accentColor,
                  color: "white",
                  borderRadius: 0,
                }}
              >
                {success
                  ? "Signed — Loading proposal…"
                  : submitting
                  ? "Signing…"
                  : "Sign & Continue"}
              </button>
            </div>
          </div>

          <p className="mt-6 text-[12px] leading-[1.6] text-white/50 max-w-[640px] font-mono">
            By submitting, you receive an executed PDF copy at the email address above.
            A copy is retained by Crowd Control Digital, LLC for audit purposes,
            including the timestamp and IP address of your signature.
          </p>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
  autoComplete,
  fullWidth,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  fullWidth?: boolean;
}) {
  return (
    <label className={`block ${fullWidth ? "sm:col-span-2" : ""}`}>
      <div className="font-mono uppercase tracking-[0.18em] text-[10.5px] text-white/55 mb-2">
        {label}
        {required && <span className="text-[var(--color-accent)] ml-1">*</span>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className="w-full bg-black/40 border border-white/[0.15] px-4 py-3.5 text-[15px] text-white placeholder-white/30 focus:outline-none focus:border-[var(--color-accent)]/70 transition-colors"
        style={{ borderRadius: 0 }}
      />
    </label>
  );
}
