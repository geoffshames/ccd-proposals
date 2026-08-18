"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  CostModelSection,
  CostModelSeries,
  CostModelScenario,
} from "@/lib/plan-context";

const MUTED = "rgba(163,163,173,0.75)";
const GRID = "rgba(163,163,173,0.18)";
const WHITE_SOFT = "rgba(255,255,255,0.30)";
const WHITE_MID = "rgba(255,255,255,0.60)";

function seriesColor(s: { emphasis?: boolean; dashed?: boolean }): string {
  if (s.emphasis) return "var(--color-accent)";
  return s.dashed ? WHITE_MID : WHITE_SOFT;
}

function fmtK(v: number): string {
  return v >= 1000 ? `${Math.round(v / 1000)}K` : `${v}`;
}

function Heading({ children }: { children: string }) {
  return (
    <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-4">
      {children}
    </div>
  );
}

function Caption({ children }: { children: string }) {
  return (
    <p className="mt-4 text-[13px] text-text-muted/80 leading-relaxed max-w-3xl">
      {children}
    </p>
  );
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, delay },
});

function GrowthChart({
  points,
  series,
  maxY,
}: {
  points: { label: string; day: number }[];
  series: CostModelSeries[];
  maxY: number;
}) {
  const W = 760;
  const H = 300;
  const L = 56;
  const R = 640;
  const T = 16;
  const B = 252;
  const maxDay = Math.max(...points.map((p) => p.day)) || 1;
  const x = (d: number) => L + (d / maxDay) * (R - L);
  const y = (v: number) => B - (v / maxY) * (B - T);
  const gridSteps = [0.25, 0.5, 0.75, 1];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img">
      {gridSteps.map((f, i) => {
        const gv = maxY * f;
        return (
          <g key={i}>
            <line x1={L} y1={y(gv)} x2={R} y2={y(gv)} stroke={GRID} strokeWidth={1} />
            <text x={L - 8} y={y(gv) + 4} textAnchor="end" fontSize={11} fill={MUTED} fontFamily="monospace">
              {fmtK(gv)}
            </text>
          </g>
        );
      })}
      <line x1={L} y1={B} x2={R} y2={B} stroke={GRID} strokeWidth={1} />
      {points.map((p, i) =>
        p.label ? (
          <text
            key={i}
            x={x(p.day)}
            y={B + 22}
            textAnchor={i === 0 ? "start" : "middle"}
            fontSize={11}
            fill={MUTED}
            fontFamily="monospace"
          >
            {p.label}
          </text>
        ) : null
      )}
      {series.map((s, si) => (
        <polyline
          key={si}
          fill="none"
          stroke={seriesColor(s)}
          strokeWidth={s.emphasis ? 2.5 : 1.5}
          strokeDasharray={s.dashed ? "5 5" : undefined}
          points={s.values.map((v, i) => `${x(points[i].day).toFixed(1)},${y(v).toFixed(1)}`).join(" ")}
        />
      ))}
      {series.map((s, si) => {
        const last = s.values[s.values.length - 1];
        return (
          <text
            key={si}
            x={R + 10}
            y={y(last) + 4}
            fontSize={11.5}
            fill={s.emphasis ? "var(--color-accent)" : MUTED}
            fontFamily="monospace"
          >
            {s.name} {fmtK(last)}
          </text>
        );
      })}
      <circle cx={x(points[0].day)} cy={y(series[0].values[0])} r={3.5} fill="var(--color-accent)" />
      <text x={x(points[0].day) + 10} y={y(series[0].values[0]) - 14} fontSize={11} fill={MUTED} fontFamily="monospace">
        Today {series[0].values[0].toLocaleString("en-US")}
      </text>
    </svg>
  );
}

function MonthlyBars({
  months,
  scenarios,
}: {
  months: string[];
  scenarios: CostModelScenario[];
}) {
  const maxCost = Math.max(...scenarios.flatMap((s) => s.monthly)) || 1;
  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
        {scenarios.map((s, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="inline-block w-3 h-3" style={{ background: seriesColor(s) }} />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
              {s.name}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-4 md:gap-10">
        {months.map((m, mi) => (
          <div key={mi} className="flex-1 flex flex-col items-center gap-3">
            <div className="flex items-end gap-1.5 md:gap-2.5">
              {scenarios.map((s, si) => (
                <div key={si} className="flex flex-col items-center justify-end">
                  <div className="text-[9px] md:text-[10px] font-mono text-text-muted/75 mb-1.5 whitespace-nowrap">
                    {s.monthlyDisplay[mi]}
                  </div>
                  <div
                    className="w-4 md:w-8"
                    style={{
                      height: `${Math.max(4, (s.monthly[mi] / maxCost) * 150)}px`,
                      background: seriesColor(s),
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/60">
              {m}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PlanCostModel({ section }: { section: CostModelSection }) {
  const maxDrop = Math.max(...section.dropBars.map((b) => b.value)) || 1;
  const growthMax = section.growthMax ?? Math.max(...section.growthSeries.flatMap((s) => s.values));

  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader number={section.number} title={section.title} intro={section.intro} />

        <div className="space-y-16 mt-8">
          {/* Published rates */}
          <motion.div {...reveal(0)}>
            {section.rateHeading && <Heading>{section.rateHeading}</Heading>}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {section.rateCards.map((c, i) => (
                <div key={i} className="border border-text-muted/15 bg-bg-card p-5">
                  <div className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/60">
                    {c.label}
                  </div>
                  <div
                    className="mt-3 text-[26px] font-bold text-text-primary leading-none"
                    style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                  >
                    {c.value}
                  </div>
                  {c.unit && (
                    <div className="mt-2 text-[10px] font-mono text-text-muted/60 leading-snug">
                      {c.unit}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {section.rateCaption && <Caption>{section.rateCaption}</Caption>}
          </motion.div>

          {/* Cost per drop bars */}
          <motion.div {...reveal(0.04)}>
            {section.dropHeading && <Heading>{section.dropHeading}</Heading>}
            <div className="space-y-4 max-w-3xl">
              {section.dropBars.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-28 md:w-36 flex-shrink-0 text-[11px] font-mono tracking-[0.14em] uppercase text-text-muted/75 text-right">
                    {b.label}
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(b.value / maxDrop) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.08 }}
                      className="h-7 bg-accent/80 min-w-[6px]"
                    />
                    <div
                      className="text-[18px] md:text-[20px] font-bold text-text-primary whitespace-nowrap"
                      style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                    >
                      {b.display}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {section.dropCaption && <Caption>{section.dropCaption}</Caption>}
          </motion.div>

          {/* Formula strip */}
          {section.formulaParts && section.formulaParts.length > 0 && (
            <motion.div {...reveal(0.04)}>
              {section.formulaHeading && <Heading>{section.formulaHeading}</Heading>}
              <div className="flex flex-wrap items-stretch gap-2 md:gap-3">
                {section.formulaParts.map((p, i) => (
                  <Fragment key={i}>
                    <div className="px-4 py-3 border border-text-muted/25 bg-bg-card text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-text-primary/85 flex items-center">
                      {p}
                    </div>
                    {i < (section.formulaParts?.length ?? 0) - 1 && (
                      <div className="flex items-center text-accent text-[18px] font-mono">×</div>
                    )}
                  </Fragment>
                ))}
                <div className="flex items-center text-accent text-[18px] font-mono">=</div>
                <div className="px-4 py-3 border border-accent/50 bg-accent/[0.06] text-[11px] md:text-[12px] font-mono tracking-[0.16em] uppercase text-accent flex items-center">
                  {section.formulaResult}
                </div>
              </div>
            </motion.div>
          )}

          {/* List growth projection */}
          <motion.div {...reveal(0.04)}>
            {section.growthHeading && <Heading>{section.growthHeading}</Heading>}
            <div className="border border-text-muted/15 bg-bg-card p-4 md:p-8">
              <GrowthChart points={section.growthPoints} series={section.growthSeries} maxY={growthMax} />
            </div>
            {section.growthCaption && <Caption>{section.growthCaption}</Caption>}
          </motion.div>

          {/* Monthly cost bars */}
          <motion.div {...reveal(0.04)}>
            {section.costHeading && <Heading>{section.costHeading}</Heading>}
            <div className="border border-text-muted/15 bg-bg-card p-6 md:p-8">
              <MonthlyBars months={section.costMonths} scenarios={section.scenarios} />
            </div>
            {section.costCaption && <Caption>{section.costCaption}</Caption>}
          </motion.div>

          {/* Scenario cards */}
          <motion.div {...reveal(0.04)}>
            {section.scenarioHeading && <Heading>{section.scenarioHeading}</Heading>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.scenarios.map((s, i) => (
                <div
                  key={i}
                  className={
                    s.emphasis
                      ? "border border-accent/50 bg-accent/[0.04] p-6"
                      : "border border-text-muted/15 bg-bg-card p-6"
                  }
                >
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className="text-[20px] font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                    >
                      {s.name}
                    </div>
                    {s.badge && (
                      <div className="px-2 py-1 border border-accent/40 text-[9px] font-mono tracking-[0.16em] uppercase text-accent whitespace-nowrap">
                        {s.badge}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-[13px] text-text-muted/85 leading-relaxed min-h-[60px]">
                    {s.assumption}
                  </p>
                  <div className="mt-5 pt-5 border-t border-text-muted/15">
                    <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/60">
                      Sept through Dec
                    </div>
                    <div
                      className="mt-1 text-[30px] font-bold text-text-primary leading-none"
                      style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                    >
                      {s.total}
                    </div>
                    {s.subscriptionTotal && (
                      <div className="mt-2 text-[10px] font-mono tracking-[0.12em] uppercase text-text-muted/70">
                        {s.subscriptionTotal}
                      </div>
                    )}
                    <div className="mt-1 text-[10px] font-mono tracking-[0.12em] uppercase text-text-muted/70">
                      {s.listEnd}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Levers */}
          {section.levers && section.levers.length > 0 && (
            <motion.div {...reveal(0.04)}>
              {section.leversHeading && <Heading>{section.leversHeading}</Heading>}
              <ul className="space-y-2 max-w-3xl">
                {section.levers.map((it, i) => (
                  <li key={i} className="flex gap-3 text-[14px] md:text-[15px] text-text-primary/85 leading-relaxed">
                    <span className="text-accent/60 flex-shrink-0">▸</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
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
