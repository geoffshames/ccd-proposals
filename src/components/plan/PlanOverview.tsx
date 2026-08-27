"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import { PlanChart } from "./PlanChart";
import type { OverviewSection } from "@/lib/plan-context";

export function PlanOverview({ section }: { section: OverviewSection }) {
  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} subtitle={section.subtitle} />

        <div className="space-y-6 max-w-[68ch]">
          {section.body.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="text-text-primary/90 text-[17px] md:text-[18px] leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {section.supports && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
                {section.supports.heading}
              </div>
              <ul className="space-y-3">
                {section.supports.items.map((it, i) => (
                  <li key={i} className="flex gap-4 items-start text-[15px] md:text-[16px] text-text-primary/90 leading-relaxed">
                    <span className="text-accent text-[11px] font-mono pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          {section.goals && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-text-muted/70 mb-4">
                {section.goals.heading}
              </div>
              <ul className="space-y-3">
                {section.goals.items.map((it, i) => (
                  <li key={i} className="flex gap-4 items-start text-[15px] md:text-[16px] text-text-primary/90 leading-relaxed">
                    <span className="text-accent text-[11px] font-mono pt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {section.charts && section.charts.length > 0 && (
          <div className="mt-14 space-y-6">
            {section.charts.map((c, ci) => (
              <PlanChart key={ci} spec={c} />
            ))}
          </div>
        )}
        {section.footnote && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/75 leading-relaxed max-w-[80ch]"
          >
            {section.footnote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
