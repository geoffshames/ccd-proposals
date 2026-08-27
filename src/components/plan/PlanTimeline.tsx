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

        {/* Mobile scroll hint */}
        <div className="md:hidden flex items-center gap-2 mb-3 text-[10px] font-mono tracking-[0.2em] uppercase text-accent/80">
          <span aria-hidden="true">←</span>
          <span>Swipe to see full timeline</span>
          <span aria-hidden="true">→</span>
        </div>

        {/* Desktop / tablet: scrollable Gantt grid */}
        <div className="relative">
          <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
            <div className="min-w-[920px]">
            {/* Header row: workstream label cell + week columns */}
            <div
              className="grid items-end gap-x-px text-[10px] font-mono tracking-[0.08em] uppercase text-text-muted/70"
              style={{ gridTemplateColumns: `160px repeat(${weekCount}, minmax(60px, 1fr))` }}
            >
              <div className="pb-3"></div>
              {section.weeks.map((w) => (
                <div
                  key={w.index}
                  className={`pb-3 px-1 text-center border-b overflow-hidden ${
                    w.highlight ? "border-accent text-accent" : "border-text-muted/15"
                  }`}
                >
                  <div className={`font-bold ${w.highlight ? "text-accent" : "text-text-primary"}`}>{w.label}</div>
                  <div className="text-[9px] tracking-[0.04em] text-text-muted/60 mt-0.5 truncate">{w.dates}</div>
                  {w.note && (
                    <div className="text-[8px] font-bold tracking-[0.04em] text-accent mt-1 leading-tight break-words">
                      {w.note}
                    </div>
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
                style={{ gridTemplateColumns: `160px repeat(${weekCount}, minmax(60px, 1fr))` }}
              >
                {/* Workstream name */}
                <div className="py-3 pr-3 text-[12px] md:text-[13px] font-mono tracking-[0.02em] text-text-primary border-b border-text-muted/10 flex items-center min-w-0">
                  <span className="truncate">{ws.name}</span>
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
                      className={`py-3 border-b border-text-muted/10 min-w-0 ${w.highlight ? "bg-accent/[0.04]" : ""}`}
                    >
                      <div
                        className={`h-7 ${intensityClass} flex items-center justify-center px-1 overflow-hidden`}
                      >
                        {cell?.label && (
                          <span className="block w-full text-[8px] font-mono tracking-[0.02em] uppercase text-white font-bold truncate text-center">
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
          {/* Right-edge fade overlay, mobile only, signals more content */}
          <div
            aria-hidden="true"
            className="md:hidden pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-bg-primary to-transparent"
          ></div>
        </div>

        {section.weekBreakdowns && section.weekBreakdowns.length > 0 && (
          <div className="mt-20">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-6">
              Week-by-week breakdown
            </div>
            <div className="grid gap-px bg-text-muted/10 border border-text-muted/15">
              {section.weekBreakdowns.map((wb) => {
                const wk = section.weeks.find((w) => w.index === wb.weekIndex);
                return (
                  <motion.div
                    key={wb.weekIndex}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35 }}
                    className="bg-bg-primary p-5 md:p-6 grid grid-cols-[80px_1fr] md:grid-cols-[110px_1fr] gap-4 md:gap-6"
                  >
                    <div>
                      <div className="text-[18px] md:text-[20px] font-bold text-text-primary leading-none">
                        {wk?.label ?? `W${wb.weekIndex}`}
                      </div>
                      <div className="text-[10px] font-mono tracking-[0.12em] uppercase text-text-muted/60 mt-1">
                        {wk?.dates ?? ""}
                      </div>
                    </div>
                    <div>
                      <div className="text-[13px] md:text-[14px] font-semibold tracking-[0.02em] text-text-primary leading-snug mb-2.5">
                        {wb.title}
                      </div>
                      <ul className="space-y-1.5">
                        {wb.items.map((it, idx) => (
                          <li key={idx} className="text-[12.5px] md:text-[13px] text-text-secondary leading-relaxed pl-4 relative">
                            <span className="absolute left-0 top-[0.55em] w-1.5 h-1.5 bg-accent/60"></span>
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {section.footnote && (
          <p className="mt-10 text-[12px] font-mono tracking-[0.18em] uppercase text-text-muted/75 leading-relaxed max-w-[80ch]">
            {section.footnote}
          </p>
        )}
      </div>
    </section>
  );
}
