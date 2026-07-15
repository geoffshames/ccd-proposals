"use client";

import { motion } from "framer-motion";
import type { TargetsSection } from "@/lib/plan-context";
import { PlanSectionHeader } from "./PlanSectionHeader";

export function PlanTargets({ section }: { section: TargetsSection }) {
  return (
    <section
      id={`section-${section.number}`}
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number={section.number}
          title={section.title}
          intro={section.intro}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {section.targets.map((target, i) => (
            <motion.article
              key={`${target.metric}-${i}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className={`relative border p-7 md:p-8 ${
                target.featured
                  ? "border-white/[0.16] bg-white/[0.045]"
                  : "border-text-muted/15 bg-bg-card"
              }`}
            >
              {target.featured && (
                <div className="absolute top-0 right-0 bg-accent text-white px-3 py-1.5 text-[10px] font-mono tracking-[0.18em] uppercase">
                  Lead KPI
                </div>
              )}

              <div className="flex items-start justify-between gap-5 pr-16">
                <div>
                  <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
                    {target.window}
                  </div>
                  <h3
                    className="mt-3 text-[20px] md:text-[23px] font-bold leading-tight text-text-primary"
                    style={{
                      fontFamily:
                        "var(--font-heading), var(--font-sans), sans-serif",
                    }}
                  >
                    {target.metric}
                  </h3>
                </div>
                <div className="text-[11px] font-mono tabular-nums text-text-muted/65 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-4 items-center">
                <div className="min-w-0">
                  <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65">
                    Baseline
                  </div>
                  <div
                    className="mt-2 text-[clamp(1.35rem,3vw,2.25rem)] font-bold leading-tight text-text-muted break-words"
                    style={{
                      fontFamily:
                        "var(--font-heading), var(--font-sans), sans-serif",
                    }}
                  >
                    {target.baseline}
                  </div>
                </div>
                <div className="text-accent text-[18px] rotate-90 sm:rotate-0 justify-self-start sm:justify-self-auto" aria-hidden="true">
                  →
                </div>
                <div className="min-w-0 text-left sm:text-right">
                  <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-accent/90">
                    Directional target
                  </div>
                  <div
                    className="mt-2 text-[clamp(1.35rem,3vw,2.25rem)] font-bold leading-tight text-accent break-words"
                    style={{
                      fontFamily:
                        "var(--font-heading), var(--font-sans), sans-serif",
                    }}
                  >
                    {target.target}
                  </div>
                </div>
              </div>

              {target.rationale && (
                <p className="mt-7 text-[14px] leading-relaxed text-text-primary/85">
                  {target.rationale}
                </p>
              )}

              <div className="mt-6 pt-5 border-t border-text-muted/15">
                <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/65">
                  Measurement
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-text-muted">
                  {target.measurement}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {section.measurementPrinciples &&
          section.measurementPrinciples.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="mt-10 border border-text-muted/15 bg-bg-card p-7 md:p-9"
            >
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-6">
                Measurement principles
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                {section.measurementPrinciples.map((principle, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-[11px] font-mono text-accent pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] leading-relaxed text-text-primary/85">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        {section.disclaimer && (
          <p className="mt-8 text-[12px] font-mono tracking-[0.12em] uppercase text-text-muted/70 leading-relaxed max-w-4xl">
            {section.disclaimer}
          </p>
        )}

        {section.footnote && (
          <p className="mt-6 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/70 leading-relaxed max-w-4xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
