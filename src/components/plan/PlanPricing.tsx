"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { PricingSection } from "@/lib/plan-context";

// Literal class strings so the Tailwind JIT can see them.
const TIER_COLS: Record<1 | 2 | 3 | 4, string> = {
  1: "",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

export function PlanPricing({ section }: { section: PricingSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        <div
          className={`grid grid-cols-1 gap-4 ${
            TIER_COLS[Math.min(section.tiers.length, 4) as 1 | 2 | 3 | 4]
          }`}
        >
          {section.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative p-8 md:p-10 border ${tier.featured ? "border-accent/40 bg-white/[0.06]" : "border-text-muted/20 bg-bg-card"}`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                  Recommended
                </div>
              )}

              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-2">
                {tier.label}
              </div>
              <h3 className="text-[40px] md:text-[52px] font-bold leading-none text-text-primary"
                  style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                {tier.budget}
              </h3>
              <div className="text-[13px] font-mono tracking-[0.15em] uppercase text-text-muted/70 mt-2">
                {tier.name}
              </div>
              {tier.tagline && (
                <p className="mt-4 text-text-primary/80 text-[14px] md:text-[15px] leading-relaxed">
                  {tier.tagline}
                </p>
              )}

              {tier.feeBreakdown && (
                <div className="mt-8 grid grid-cols-2 gap-px bg-text-muted/15 border border-text-muted/15">
                  <div className="bg-bg-card p-4">
                    <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-2">
                      Crowd Control Retainer
                    </div>
                    <div className="text-[22px] md:text-[26px] font-bold text-text-primary leading-none"
                         style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                      {tier.feeBreakdown.retainer}
                    </div>
                    <div className="text-[11px] font-mono text-text-muted/70 mt-2 leading-snug">
                      {tier.feeBreakdown.retainerDetail}
                    </div>
                  </div>
                  <div className="bg-bg-card p-4">
                    <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-2">
                      {tier.feeBreakdown.mediaManagementLabel ?? "Media Mgmt"}
                    </div>
                    <div className="text-[22px] md:text-[26px] font-bold text-text-primary leading-none"
                         style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                      {tier.feeBreakdown.mediaManagement}
                    </div>
                    <div className="text-[11px] font-mono text-text-muted/70 mt-2 leading-snug">
                      {tier.feeBreakdown.mediaManagementDetail}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-text-muted/15">
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
                  {section.breakdownLabel ?? "Breakdown By Vertical"}
                </div>
                <div className="space-y-2">
                  {tier.breakdown.map((b, j) => (
                    <div key={j} className="flex items-baseline justify-between gap-4 text-[14px] md:text-[15px] py-2 border-b border-text-muted/10 last:border-b-0">
                      <span className="text-text-primary/90">{b.vertical}</span>
                      <span className="font-mono tabular-nums text-text-primary">{b.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-text-muted/15">
                <div className="flex items-baseline justify-between gap-4 text-[13px]">
                  <span className="text-text-muted/70 uppercase tracking-[0.12em] font-mono">{section.deployableLabel ?? "Deployable Net of Agency Fee"}</span>
                  <span className="font-mono tabular-nums text-accent font-bold">{tier.deployable}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {section.addOns && section.addOns.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
              Optional Add-Ons (Outside The Tier)
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${
                TIER_COLS[Math.max(2, Math.min(section.addOns.length, 4)) as 2 | 3 | 4]
              }`}
            >
              {section.addOns.map((a, i) => (
                <div
                  key={i}
                  className="flex h-full flex-col border border-text-muted/20 bg-bg-card p-6"
                >
                  <h4 className="text-[15px] md:text-[16px] font-bold text-text-primary leading-snug tracking-tight">
                    {a.name}
                  </h4>
                  {a.subtitle && (
                    <div className="mt-1.5 text-[13px] md:text-[14px] font-medium text-text-muted leading-snug">
                      {a.subtitle}
                    </div>
                  )}
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-[15px] md:text-[17px] font-mono tabular-nums font-bold text-accent whitespace-nowrap">
                      {a.budget}
                    </span>
                    <span aria-hidden className="h-px flex-1 bg-text-muted/15" />
                  </div>
                  <p className="mt-4 text-text-muted text-[13px] leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {section.footnote && (
          <p className="mt-16 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
