"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { PhilosophySection } from "@/lib/plan-context";

export function PlanPhilosophy({ section }: { section: PhilosophySection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-bg-card/30">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} />

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-l-2 border-accent pl-8 max-w-4xl mb-16 md:mb-20"
        >
          <p
            className="text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.25] text-text-primary font-bold"
            style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
          >
            {section.thesis}
          </p>
        </motion.blockquote>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
          {section.hierarchy.map((layer, i) => {
            const isAnchor = i === 0;
            const spans = [
              "lg:col-span-12",
              "lg:col-span-10 lg:col-start-2",
              "lg:col-span-8 lg:col-start-3",
              "lg:col-span-6 lg:col-start-4",
            ];
            const span = spans[Math.min(i, spans.length - 1)];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`${span} relative border ${isAnchor ? "border-white/[0.18] bg-white/[0.05]" : "border-text-muted/20 bg-bg-card"} p-7 md:p-9`}
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className={`text-[11px] font-mono tracking-[0.22em] uppercase pt-1 flex-shrink-0 ${isAnchor ? "text-accent" : "text-text-muted/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[22px] md:text-[26px] font-bold text-text-primary leading-tight"
                        style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
                      {layer.label}
                    </h3>
                    <p className={`mt-3 text-[15px] md:text-[16px] leading-relaxed ${isAnchor ? "text-text-primary/85" : "text-text-muted"}`}>
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {section.messaging && section.messaging.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl"
          >
            {section.messaging.map((m, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="text-accent text-[11px] font-mono tracking-[0.22em] pt-1 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text-primary/90 text-[15px] md:text-[16px] leading-relaxed">{m}</p>
              </div>
            ))}
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
