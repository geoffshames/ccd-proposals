"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import { usePlan } from "@/lib/plan-context";
import type { StructureSection, PricingSection } from "@/lib/plan-context";

export function PlanStructure({ section }: { section: StructureSection }) {
  const PLAN = usePlan();
  // Locate the pricing section so the anchor button knows where to jump.
  const pricing = PLAN.sections.find(
    (s): s is PricingSection => s.type === "pricing"
  );
  const pricingHref = pricing ? `#section-${pricing.number}` : "";

  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          {section.tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative p-8 md:p-10 border ${tier.featured ? "border-accent/40 bg-white/[0.06]" : "border-text-muted/20 bg-bg-card"} flex flex-col`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                  Recommended
                </div>
              )}

              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-3">
                {tier.label}
              </div>
              <h3 className="text-[34px] md:text-[42px] font-bold leading-none text-text-primary"
                  style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                {tier.budget}
              </h3>
              <div className="text-[13px] font-mono tracking-[0.15em] uppercase text-text-muted/70 mt-2">
                {tier.name}
              </div>
              <p className="mt-6 text-text-primary/85 text-[15px] md:text-[16px] leading-relaxed">
                {tier.goal}
              </p>

              <div className="mt-8 pt-6 border-t border-text-muted/15 flex-1">
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
                  Includes
                </div>
                <ul className="space-y-3">
                  {tier.includes.map((it, j) => (
                    <li key={j} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/90 leading-relaxed">
                      <span className="text-accent mt-1 flex-shrink-0">▸</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pricingHref && (
                <a
                  href={pricingHref}
                  className="mt-8 inline-flex items-center justify-between gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-accent hover:text-text-primary transition-colors border-t border-text-muted/15 pt-5"
                >
                  <span>View Full Breakdown</span>
                  <span aria-hidden="true">↓</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
