"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { usePlan } from "@/lib/plan-context";
import { useT } from "@/lib/plan-i18n";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function PlanApprove() {
  const t = useT();
  const PLAN = usePlan();
  const cta = PLAN.approveCta;
  const pathname = usePathname();
  const slug = (pathname || "").split("/").filter(Boolean).pop() || "";
  const [state, setState] = useState<"idle" | "form" | "loading" | "sent" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [tier, setTier] = useState("");
  const [invalid, setInvalid] = useState(false);

  if (!cta) return null;

  const pricing = PLAN.sections.find((s) => s.type === "pricing") as
    | { type: "pricing"; tiers: { label: string; budget: string }[] }
    | undefined;
  const tierOptions = (pricing?.tiers ?? []).map((x) => `${x.label} (${x.budget})`);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "loading" || state === "sent") return;
    if (!name.trim() || !EMAIL_RE.test(email.trim())) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    setState("loading");
    try {
      const res = await fetch("/api/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          clientName: PLAN.cover.title,
          projectName: `${PLAN.cover.label} - ${PLAN.cover.subtitle}`,
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          tier: tier || (tierOptions.length ? t("approveTierUnsure") : ""),
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
    } catch {
      setState("error");
    }
  }

  const done = state === "sent";
  const showForm = state === "form" || state === "loading" || state === "error";
  const field =
    "w-full bg-white/[0.04] border border-white/[0.12] px-4 py-3 text-[14px] text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <section id="approve" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        {PLAN.cover.partnerLogos && PLAN.cover.partnerLogos.length > 0 && (
          <div className="flex items-center justify-center gap-5 md:gap-7 mb-12">
            {PLAN.cover.partnerLogos.map((l, i) => (
              <div key={l.src} className="flex items-center gap-5 md:gap-7">
                {i > 0 && <span className="text-text-muted/50 text-[18px] font-light leading-none select-none">×</span>}
                <img src={l.src} alt={l.alt} style={{ height: l.height ?? 24 }} className="w-auto select-none pointer-events-none" />
              </div>
            ))}
          </div>
        )}

        {!showForm && (
          <motion.button
            onClick={() => !done && setState("form")}
            disabled={done}
            whileHover={!done ? { scale: 1.02 } : undefined}
            whileTap={!done ? { scale: 0.98 } : undefined}
            className={`inline-block px-16 py-5 text-[14px] font-semibold tracking-[0.05em] transition-colors ${
              done ? "bg-white/[0.08] text-text-primary cursor-default" : "bg-accent text-white"
            }`}
          >
            {done ? cta.sentLabel : cta.label}
          </motion.button>
        )}

        <AnimatePresence>
          {showForm && (
            <motion.form
              key="approve-form"
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto text-left space-y-3"
              noValidate
            >
              <input className={field} placeholder={t("approveName")} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
              <input className={field} type="email" placeholder={t("approveEmail")} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
              <input className={field} placeholder={t("approveCompany")} value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
              {tierOptions.length > 0 && (
                <select className={`${field} appearance-none`} value={tier} onChange={(e) => setTier(e.target.value)} aria-label={t("approveTier")}>
                  <option value="">{t("approveTier")}: {t("approveTierUnsure")}</option>
                  {tierOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              )}
              {invalid && <p className="text-[12px] text-accent">{t("approveInvalid")}</p>}
              {state === "error" && <p className="text-[12px] text-accent">{t("sendError")}</p>}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="flex-1 px-6 py-4 text-[14px] font-semibold tracking-[0.05em] bg-accent text-white"
                >
                  {state === "loading" ? t("sending") : t("approveSubmit")}
                </button>
                <button
                  type="button"
                  onClick={() => { setState("idle"); setInvalid(false); }}
                  className="px-6 py-4 text-[14px] text-text-muted border border-white/[0.12]"
                >
                  {t("approveCancel")}
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-[11px] text-text-muted/60 mt-6 font-mono tracking-[0.15em] uppercase">
          {cta.caption}
        </p>
      </div>
    </section>
  );
}
