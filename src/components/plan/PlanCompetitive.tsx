"use client";

import { motion } from "framer-motion";
import type { CompetitiveSection } from "@/lib/plan-context";
import { PlanSectionHeader } from "./PlanSectionHeader";

export function PlanCompetitive({ section }: { section: CompetitiveSection }) {
  return (
    <section
      id={`section-${section.number}`}
      className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number={section.number}
          title={section.title}
          intro={section.intro}
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.65 }}
          className="max-w-5xl border-l-2 border-accent pl-7 md:pl-9 mb-14"
        >
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70">
            Landscape thesis
          </div>
          <p
            className="mt-4 text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.3] font-bold text-text-primary"
            style={{
              fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
            }}
          >
            {section.thesis}
          </p>
        </motion.blockquote>

        <div className="mb-14 md:mb-18">
          <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
            Reference set
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {section.competitors.map((competitor, i) => (
              <motion.article
                key={`${competitor.name}-${i}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="border border-text-muted/15 bg-bg-card p-7 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {competitor.lane && (
                      <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-3">
                        {competitor.lane}
                      </div>
                    )}
                    <h3
                      className="text-[24px] md:text-[28px] leading-[1.12] font-bold text-text-primary"
                      style={{
                        fontFamily:
                          "var(--font-heading), var(--font-sans), sans-serif",
                      }}
                    >
                      {competitor.name}
                    </h3>
                    {competitor.metric && (
                      <div className="mt-2.5 text-[13px] font-mono tabular-nums text-accent tracking-[0.04em]">
                        {competitor.metric}
                      </div>
                    )}
                  </div>
                  <span className="text-[11px] font-mono tabular-nums text-text-muted/50 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {competitor.stats && competitor.stats.length > 0 && (
                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-4 pb-6 border-b border-text-muted/12">
                    {competitor.stats.map((stat, si) => (
                      <div key={si} className="min-w-0">
                        <dt className="text-[9.5px] font-mono tracking-[0.16em] uppercase text-text-muted/60">
                          {stat.label}
                        </dt>
                        <dd className="mt-1 text-[15px] font-bold tabular-nums text-text-primary/90">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {!competitor.stats && competitor.proof && (
                  <p className="mt-5 text-[13.5px] leading-relaxed text-text-muted pb-6 border-b border-text-muted/12">
                    {competitor.proof}
                  </p>
                )}

                <dl className="mt-6 space-y-5">
                  <div>
                    <dt className="text-[9.5px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-1.5">
                      Strength
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-text-primary/85 max-w-[62ch]">
                      {competitor.strength}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[9.5px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-1.5">
                      Gap
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-text-muted max-w-[62ch]">
                      {competitor.gap}
                    </dd>
                  </div>
                  <div className="pt-5 border-t border-text-muted/15">
                    <dt className="text-[9.5px] font-mono tracking-[0.18em] uppercase text-text-muted/60 mb-1.5">
                      Implication
                    </dt>
                    <dd className="text-[14px] leading-relaxed text-text-primary border-l-2 border-accent pl-4 max-w-[62ch]">
                      {competitor.implication}
                    </dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
        </div>

        {section.whitespace && section.whitespace.length > 0 && (
          <div className="mb-14 md:mb-18">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
              White-space opportunities
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-text-muted/15 border border-text-muted/15">
              {section.whitespace.map((item, i) => (
                <motion.div
                  key={`${item.title}-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-bg p-6 md:p-7"
                >
                  <div className="text-[11px] font-mono tracking-[0.16em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-[18px] font-bold text-text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {section.principles && section.principles.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="border border-white/[0.14] bg-white/[0.035] p-7 md:p-9"
          >
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-6">
              How the brand wins
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
              {section.principles.map((principle, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[11px] font-mono text-accent pt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-relaxed text-text-primary/90">
                    {principle}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {section.footnote && (
          <p className="mt-12 text-[12px] font-mono tracking-[0.15em] uppercase text-text-muted/70 leading-relaxed max-w-[80ch]">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
