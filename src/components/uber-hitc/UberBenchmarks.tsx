"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlanSectionHeader } from "@/components/plan/PlanSectionHeader";
import { BENCHMARKS } from "@/lib/uber-hitc";

export function UberBenchmarks() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="benchmarks" className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-text-muted/10">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number="06"
          title="What Great Looks Like"
          intro="Four precedents that matter, chosen from a wider review because each teaches something specific. None of them is a template. Each has a weakness this campaign is designed to avoid."
        />

        <div className="space-y-px bg-text-muted/15 border border-text-muted/15">
          {BENCHMARKS.map((b, i) => {
            const isOpen = open === i;
            return (
              <motion.article
                key={b.brand}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-bg"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 md:px-10 py-6 md:py-8 flex items-center gap-5 md:gap-8 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="text-[11px] font-mono text-text-muted/50 w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 min-w-0">
                    <span className="block text-[17px] md:text-[21px] font-bold text-text-primary leading-tight group-hover:text-accent transition-colors">
                      {b.brand}
                    </span>
                    <span className="block mt-1 text-[12px] font-mono tracking-[0.12em] uppercase text-text-muted/70">
                      {b.event} · {b.year}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 text-accent text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-10 pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 md:pl-[72px]">
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">What happened</div>
                          <p className="text-[14px] text-text-muted leading-relaxed">{b.what}</p>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-accent mb-2">What we borrow</div>
                          <p className="text-[14px] text-text-primary/85 leading-relaxed">{b.borrow}</p>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60 mb-2">What we avoid</div>
                          <p className="text-[14px] text-text-muted leading-relaxed">{b.avoid}</p>
                        </div>
                        <div className="md:col-span-3">
                          <a
                            href={b.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] uppercase text-text-muted/70 hover:text-accent underline underline-offset-4 decoration-text-muted/30 hover:decoration-accent transition-colors"
                          >
                            Source: {b.source} ↗
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
