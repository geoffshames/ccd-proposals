"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { FlightSection } from "@/lib/plan-context";

export function PlanFlight({ section }: { section: FlightSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        {section.totalBudget && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-l-2 border-accent pl-6 max-w-3xl"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-2">
              Deployable Across Flight
            </div>
            <div className="text-[28px] md:text-[34px] font-bold text-text-primary leading-none"
                 style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
              {section.totalBudget}
            </div>
          </motion.div>
        )}

        <div className="space-y-4">
          {section.phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-text-muted/15 bg-bg-card p-7 md:p-9"
            >
              {/* Phase number + label */}
              <div className="lg:col-span-3">
                <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-2">
                  Phase {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary leading-tight"
                    style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                  {phase.label}
                </h3>
                <div className="mt-3 text-[12px] font-mono tracking-[0.12em] uppercase text-text-muted/80">
                  {phase.window}
                </div>
                {phase.budget && (
                  <div className="mt-4 inline-block px-3 py-2 border border-accent/30 bg-accent/[0.05] text-[13px] font-mono text-accent tracking-[0.05em]">
                    {phase.budget}
                  </div>
                )}
              </div>

              {/* Focus + tactics */}
              <div className="lg:col-span-9 space-y-5">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Focus</div>
                  <p className="text-text-primary/90 text-[15px] md:text-[16px] leading-relaxed">{phase.focus}</p>
                </div>
                {phase.tactics && phase.tactics.length > 0 && (
                  <div>
                    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Tactics</div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                      {phase.tactics.map((t, j) => (
                        <li key={j} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                          <span className="text-accent/60 flex-shrink-0">▸</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {section.footnote && (
          <p className="mt-12 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
