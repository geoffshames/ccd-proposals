"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { VerticalSection, VerticalSubBlock } from "@/lib/plan-context";

function SubBlock({ block, idx }: { block: VerticalSubBlock; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: idx * 0.04 }}
      className="border-t border-text-muted/15 pt-10 first:border-t-0 first:pt-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-3">
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent mb-2">
            {block.label}
          </div>
          <h3 className="text-[24px] md:text-[28px] font-bold text-text-primary leading-tight"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
            {block.title}
          </h3>
          {block.budget && (
            <div className="mt-4 inline-block px-3 py-2 border border-accent/30 bg-accent/[0.05] text-[12px] font-mono text-accent tracking-[0.08em]">
              {block.budget}
            </div>
          )}
          {block.timeline && (
            <div className="mt-3 text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
              {block.timeline}
            </div>
          )}
        </div>

        <div className="lg:col-span-9 space-y-6">
          {block.objective && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Objective</div>
              <p className="text-text-primary/90 text-[15px] md:text-[16px] leading-relaxed">{block.objective}</p>
            </div>
          )}
          {block.strategy && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Strategy</div>
              <p className="text-text-primary/90 text-[15px] md:text-[16px] leading-relaxed">{block.strategy}</p>
            </div>
          )}
          {block.components && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">
                {block.components.heading || "Components"}
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {block.components.items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.tactics && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Tactics</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {block.tactics.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.examples && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">Examples</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {block.examples.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.kpis && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-2">KPIs</div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {block.kpis.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {block.featureTiers && block.featureTiers.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
                {block.featureTiersHeading || "Feature Artist Candidates"}
              </div>
              <div className="space-y-8">
                {block.featureTiers.map((tier, ti) => (
                  <div key={ti}>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-accent">
                        {tier.label}
                      </span>
                      <div className="flex-1 h-px bg-text-muted/15" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {tier.artists.map((a, ai) => (
                        <div key={ai} className="border border-text-muted/15 bg-bg-card p-5">
                          <div className="text-[15px] md:text-[17px] font-bold text-text-primary leading-tight"
                               style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                            {a.name}
                          </div>
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-text-muted/70 tracking-[0.05em]">
                            <span>{a.monthlyListeners}</span>
                            <span>{a.instagram}</span>
                          </div>
                          <div className="mt-3 text-[11px] font-mono text-text-muted/60 tracking-[0.05em]">
                            REF:{" "}
                            {a.referenceUrl ? (
                              <a
                                href={a.referenceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-text-primary underline-offset-2 hover:underline transition-colors"
                              >
                                {a.reference}
                              </a>
                            ) : (
                              <span className="text-text-muted/85">{a.reference}</span>
                            )}
                          </div>
                          <p className="mt-3 text-[13px] md:text-[14px] text-text-primary/85 leading-relaxed">
                            {a.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {block.links && block.links.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">
                {block.linksHeading || "References"}
              </div>
              <ul className="space-y-2">
                {block.links.map((l, i) => (
                  <li key={i} className="text-[13px] md:text-[14px] leading-relaxed">
                    <span className="text-text-muted/70 mr-2">▸</span>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-text-primary underline-offset-2 hover:underline transition-colors break-all"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function PlanVertical({ section }: { section: VerticalSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} subtitle={section.philosophy} intro={section.intro} />

        <div className="space-y-10 mt-8">
          {section.subBlocks.map((block, i) => (
            <SubBlock key={i} block={block} idx={i} />
          ))}
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
