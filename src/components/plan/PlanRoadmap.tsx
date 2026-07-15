"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { RoadmapSection } from "@/lib/plan-context";

export function PlanRoadmap({ section }: { section: RoadmapSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        <div className="relative mt-10">
          {/* Vertical rail connecting the campaign nodes */}
          <div
            className="absolute left-[11px] md:left-[15px] top-4 bottom-4 w-px bg-text-muted/25"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {section.campaigns.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative pl-10 md:pl-14"
              >
                {/* Rail node */}
                <div
                  className={`absolute left-0 md:left-1 top-8 w-[23px] h-[23px] rounded-full border-2 flex items-center justify-center ${
                    c.featured
                      ? "border-accent bg-accent/20"
                      : "border-text-muted/40 bg-bg-card"
                  }`}
                  aria-hidden="true"
                >
                  <div
                    className={`w-[7px] h-[7px] rounded-full ${
                      c.featured ? "bg-accent" : "bg-text-muted/50"
                    }`}
                  />
                </div>

                {/* Campaign card */}
                <div
                  className={`relative p-7 md:p-9 border ${
                    c.featured
                      ? "border-accent/40 bg-white/[0.06]"
                      : "border-text-muted/20 bg-bg-card"
                  }`}
                >
                  {c.badge && (
                    <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                      {c.badge}
                    </div>
                  )}

                  <div className="flex flex-wrap items-baseline justify-between gap-2 pr-24 md:pr-28">
                    <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent">
                      {c.label}
                    </div>
                    <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
                      {c.window}
                    </div>
                  </div>

                  <h3
                    className="mt-3 text-[24px] md:text-[30px] font-bold leading-tight text-text-primary"
                    style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                  >
                    {c.name}
                  </h3>

                  {c.budget && (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span
                        className={`inline-block px-3 py-1.5 text-[12px] font-mono tracking-[0.12em] uppercase ${
                          c.featured
                            ? "bg-accent text-white font-bold"
                            : "border border-text-muted/30 text-text-primary/85"
                        }`}
                      >
                        {c.budget}
                      </span>
                      {c.budgetNote && (
                        <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-text-muted/70">
                          {c.budgetNote}
                        </span>
                      )}
                    </div>
                  )}

                  <p className="mt-5 text-text-primary/85 text-[15px] md:text-[16px] leading-relaxed">
                    {c.objective}
                  </p>

                  {c.compounds && c.compounds.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-text-muted/15">
                      <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">
                        {section.compoundsLabel ?? "What Carries Forward"}
                      </div>
                      <ul className="space-y-2">
                        {c.compounds.map((x, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/90 leading-relaxed"
                          >
                            <span className="text-accent mt-1 flex-shrink-0">▸</span>
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {c.detailAnchor && (
                    <a
                      href={c.detailAnchor}
                      className="mt-6 inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-accent hover:text-text-primary transition-colors"
                    >
                      <span>{c.detailLabel ?? "View Detail"}</span>
                      <span aria-hidden="true">↓</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {section.footnote && (
          <p className="mt-16 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
