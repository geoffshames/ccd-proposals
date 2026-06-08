"use client";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type { TimelineSection } from "@/lib/plan-context";

export function PlanTimeline({ section }: { section: TimelineSection }) {
  const weekCount = section.weeks.length;
  // Build a map keyed by `${row}-${weekIndex}` for fast lookup.
  const cellMap = new Map<string, ReturnType<typeof Object.assign>>();
  section.workstreams.forEach((ws, ri) => {
    ws.cells.forEach((c) => cellMap.set(`${ri}-${c.weekIndex}`, c));
  });

  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        {/* Desktop / tablet: scrollable Gantt grid */}
        <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <div className="min-w-[760px]">
            {/* Header row: workstream label cell + week columns */}
            <div
              className="grid items-end gap-x-px text-[10px] font-mono tracking-[0.12em] uppercase text-text-muted/70"
              style={{ gridTemplateColumns: `180px repeat(${weekCount}, minmax(60px, 1fr))` }}
            >
              <div className="pb-3"></div>
              {section.weeks.map((w) => (
                <div
                  key={w.index}
                  className={`pb-3 px-2 text-center border-b ${
                    w.highlight ? "border-accent text-accent" : "border-text-muted/15"
                  }`}
                >
                  <div className={`font-bold ${w.highlight ? "text-accent" : "text-text-primary"}`}>{w.label}</div>
                  <div className="text-[9px] tracking-[0.08em] text-text-muted/60 mt-0.5">{w.dates}</div>
                  {w.note && (
                    <div className="text-[9px] font-bold tracking-[0.18em] text-accent mt-1">{w.note}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Workstream rows */}
            {section.workstreams.map((ws, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: ri * 0.05 }}
                className="grid items-stretch gap-x-px"
                style={{ gridTemplateColumns: `180px repeat(${weekCount}, minmax(60px, 1fr))` }}
              >
                {/* Workstream name */}
                <div className="py-3 pr-3 text-[12px] md:text-[13px] font-mono tracking-[0.05em] text-text-primary border-b border-text-muted/10 flex items-center">
                  {ws.name}
                </div>
                {/* Week cells */}
                {section.weeks.map((w) => {
                  const cell = cellMap.get(`${ri}-${w.index}`);
                  const intensityClass = cell
                    ? cell.intensity === "high"
                      ? "bg-accent"
                      : cell.intensity === "medium"
                      ? "bg-accent/55"
                      : "bg-accent/25"
                    : "bg-transparent";
                  return (
                    <div
                      key={w.index}
                      className={`py-3 border-b border-text-muted/10 ${w.highlight ? "bg-accent/[0.04]" : ""}`}
                    >
                      <div
                        className={`h-7 ${intensityClass} ${
                          cell?.milestone ? "ring-2 ring-accent" : ""
                        } flex items-center justify-center px-1`}
                      >
                        {cell?.label && (
                          <span className="text-[9px] font-mono tracking-[0.12em] uppercase text-white font-bold truncate">
                            {cell.label}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            ))}

            {/* Intensity legend */}
            <div className="mt-6 flex items-center gap-5 text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted/60">
              <div className="flex items-center gap-2">
                <span className="w-5 h-3 bg-accent/25 inline-block"></span>
                <span>Light</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-3 bg-accent/55 inline-block"></span>
                <span>Active</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-3 bg-accent inline-block"></span>
                <span>Heavy</span>
              </div>
            </div>
          </div>
        </div>

        {section.footnote && (
          <p className="mt-10 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/60 leading-relaxed max-w-3xl">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
