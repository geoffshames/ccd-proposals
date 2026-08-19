"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  CostModelSection,
  CostModelSeries,
  CostModelScenario,
} from "@/lib/plan-context";

const CARD_BG = "#141518";
const MUTED = "rgba(163,163,173,0.75)";
const MUTED_SOFT = "rgba(163,163,173,0.45)";
const GRID = "rgba(163,163,173,0.14)";
const AXIS = "rgba(163,163,173,0.30)";
const LABEL = "rgba(228,228,234,0.92)";
const C_LEAN = "rgba(255,255,255,0.34)";
const C_SURGE = "rgba(255,255,255,0.85)";

function seriesColor(s: { emphasis?: boolean; dashed?: boolean }): string {
  if (s.emphasis) return "var(--color-accent)";
  return s.dashed ? C_SURGE : C_LEAN;
}

function fmtK(v: number): string {
  return v >= 1000 ? `${Math.round(v / 1000)}K` : `${v}`;
}

function fmtMoneyK(v: number): string {
  return v >= 1000 ? `$${v / 1000}K` : `$${v}`;
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

function Legend({ items }: { items: { name: string; color: string }[] }) {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="inline-block w-3 h-3" style={{ background: it.color }} />
          <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/70">
            {it.name}
          </span>
        </div>
      ))}
    </div>
  );
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, delay },
});

/** SVG text that knocks out chart lines behind it. */
function ChartText(props: {
  x: number;
  y: number;
  children: string;
  fill?: string;
  size?: number;
  anchor?: "start" | "middle" | "end";
  spacing?: string;
}) {
  return (
    <text
      x={props.x}
      y={props.y}
      textAnchor={props.anchor || "start"}
      fontSize={props.size ?? 11}
      fill={props.fill ?? MUTED}
      fontFamily="monospace"
      letterSpacing={props.spacing}
      stroke={CARD_BG}
      strokeWidth={4}
      paintOrder="stroke"
      strokeLinejoin="round"
    >
      {props.children}
    </text>
  );
}

function GrowthChart({
  points,
  series,
  maxY,
  markers,
  bands,
}: {
  points: { label: string; day: number }[];
  series: CostModelSeries[];
  maxY: number;
  markers?: { day: number; label: string }[];
  bands?: { from: number; to: number; label: string }[];
}) {
  const W = 760;
  const H = 312;
  const L = 56;
  const R = 636;
  const T = 30;
  const B = 262;
  const maxDay = Math.max(...points.map((p) => p.day)) || 1;
  const x = (d: number) => L + (d / maxDay) * (R - L);
  const y = (v: number) => B - (v / maxY) * (B - T);
  const gridSteps = [0.25, 0.5, 0.75, 1];
  const emphasized = series.find((s) => s.emphasis);

  const linePoints = (s: CostModelSeries) =>
    s.values.map((v, i) => `${x(points[i].day).toFixed(1)},${y(v).toFixed(1)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img">
      <defs>
        <linearGradient id="cmGrowthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.24" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* context bands */}
      {bands?.map((b, i) => (
        <g key={i}>
          <rect x={x(b.from)} y={T} width={x(b.to) - x(b.from)} height={B - T} fill="rgba(255,255,255,0.028)" />
          <line x1={x(b.from)} y1={T} x2={x(b.from)} y2={B} stroke={GRID} strokeWidth={1} />
          <line x1={x(b.to)} y1={T} x2={x(b.to)} y2={B} stroke={GRID} strokeWidth={1} />
          <ChartText x={(x(b.from) + x(b.to)) / 2} y={18} anchor="middle" size={9.5} fill={MUTED_SOFT} spacing="0.16em">
            {b.label}
          </ChartText>
        </g>
      ))}

      {/* grid */}
      {gridSteps.map((f, i) => {
        const gv = maxY * f;
        return (
          <g key={i}>
            <line x1={L} y1={y(gv)} x2={R} y2={y(gv)} stroke={GRID} strokeWidth={1} strokeDasharray="2 5" />
            <ChartText x={L - 10} y={y(gv) + 4} anchor="end" size={10.5} fill={MUTED_SOFT}>
              {fmtK(gv)}
            </ChartText>
          </g>
        );
      })}
      <line x1={L} y1={B} x2={R} y2={B} stroke={AXIS} strokeWidth={1} />
      {points.map((p, i) =>
        p.label ? (
          <g key={i}>
            <line x1={x(p.day)} y1={B} x2={x(p.day)} y2={B + 5} stroke={AXIS} strokeWidth={1} />
            <ChartText
              x={x(p.day)}
              y={B + 24}
              anchor={i === 0 ? "start" : "middle"}
              size={10.5}
              fill={MUTED_SOFT}
            >
              {p.label}
            </ChartText>
          </g>
        ) : null
      )}

      {/* event markers */}
      {markers?.map((m, i) => (
        <g key={i}>
          <line x1={x(m.day)} y1={24} x2={x(m.day)} y2={B} stroke="var(--color-accent)" strokeOpacity={0.45} strokeWidth={1} strokeDasharray="3 4" />
          <ChartText x={x(m.day)} y={18} anchor="middle" size={9.5} fill="var(--color-accent)" spacing="0.16em">
            {m.label}
          </ChartText>
        </g>
      ))}

      {/* gradient area under the emphasized series */}
      {emphasized && (
        <polygon
          points={`${linePoints(emphasized)} ${x(points[points.length - 1].day).toFixed(1)},${B} ${x(points[0].day).toFixed(1)},${B}`}
          fill="url(#cmGrowthFill)"
        />
      )}

      {/* glow underlay for the emphasized line */}
      {emphasized && (
        <polyline
          fill="none"
          stroke="var(--color-accent)"
          strokeOpacity={0.22}
          strokeWidth={7}
          strokeLinecap="round"
          points={linePoints(emphasized)}
        />
      )}

      {/* lines, emphasized drawn last */}
      {[...series].sort((a, b) => Number(!!a.emphasis) - Number(!!b.emphasis)).map((s, si) => (
        <polyline
          key={si}
          fill="none"
          stroke={seriesColor(s)}
          strokeWidth={s.emphasis ? 2.5 : 1.6}
          strokeDasharray={s.dashed ? "6 5" : undefined}
          strokeLinecap="round"
          points={linePoints(s)}
        />
      ))}

      {/* per-point markers on the emphasized line */}
      {emphasized &&
        emphasized.values.map((v, i) =>
          i > 0 && i < emphasized.values.length - 1 ? (
            <circle
              key={i}
              cx={x(points[i].day)}
              cy={y(v)}
              r={3}
              fill={CARD_BG}
              stroke="var(--color-accent)"
              strokeWidth={1.6}
            />
          ) : null
        )}

      {/* endpoint dots + labels */}
      {series.map((s, si) => {
        const last = s.values[s.values.length - 1];
        const lx = x(points[points.length - 1].day);
        return (
          <g key={si}>
            <circle cx={lx} cy={y(last)} r={3.5} fill={seriesColor(s)} />
            <ChartText
              x={lx + 12}
              y={y(last) + 4}
              size={11.5}
              fill={s.emphasis ? "var(--color-accent)" : LABEL}
            >
              {`${s.name} ${fmtK(last)}`}
            </ChartText>
          </g>
        );
      })}

      {/* start marker */}
      <circle cx={x(points[0].day)} cy={y(series[0].values[0])} r={4} fill="var(--color-accent)" />
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
  const W = 760;
  const H = 290;
  const L = 64;
  const R = 744;
  const T = 20;
  const B = 234;
  const rawMax = Math.max(...scenarios.flatMap((s) => s.monthly));
  const maxCost = Math.ceil(rawMax / 1000) * 1000 || 1;
  const y = (v: number) => B - (v / maxCost) * (B - T);
  const groupW = (R - L) / months.length;
  const barW = 34;
  const gap = 8;
  const clusterW = scenarios.length * barW + (scenarios.length - 1) * gap;
  const gridCount = maxCost / 1000;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img">
      {Array.from({ length: gridCount }, (_, i) => (i + 1) * 1000).map((gv, i) => (
        <g key={i}>
          <line x1={L} y1={y(gv)} x2={R} y2={y(gv)} stroke={GRID} strokeWidth={1} strokeDasharray="2 5" />
          <ChartText x={L - 10} y={y(gv) + 4} anchor="end" size={10.5} fill={MUTED_SOFT}>
            {fmtMoneyK(gv)}
          </ChartText>
        </g>
      ))}
      {months.map((m, mi) => {
        const gx = L + mi * groupW + (groupW - clusterW) / 2;
        return (
          <g key={mi}>
            {scenarios.map((s, si) => {
              const bx = gx + si * (barW + gap);
              const v = s.monthly[mi];
              const by = y(v);
              return (
                <g key={si}>
                  <rect x={bx} y={by} width={barW} height={B - by} fill={seriesColor(s)} />
                  <ChartText x={bx + barW / 2} y={by - 7} anchor="middle" size={10.5} fill={LABEL}>
                    {s.monthlyDisplay[mi]}
                  </ChartText>
                </g>
              );
            })}
            <ChartText
              x={gx + clusterW / 2}
              y={B + 24}
              anchor="middle"
              size={10.5}
              fill={MUTED_SOFT}
              spacing="0.18em"
            >
              {m.toUpperCase()}
            </ChartText>
          </g>
        );
      })}
      <line x1={L} y1={B} x2={R} y2={B} stroke={AXIS} strokeWidth={1} />
    </svg>
  );
}

export function PlanCostModel({ section }: { section: CostModelSection }) {
  const maxDrop = Math.max(...section.dropBars.map((b) => b.value)) || 1;
  const growthMax = section.growthMax ?? Math.max(...section.growthSeries.flatMap((s) => s.values));
  const legendItems = section.scenarios.map((s) => ({ name: s.name, color: seriesColor(s) }));

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
            <div className="space-y-3 max-w-3xl">
              {section.dropBars.map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-28 md:w-36 flex-shrink-0 text-[11px] font-mono tracking-[0.14em] uppercase text-text-muted/75 text-right">
                    {b.label}
                  </div>
                  <div className="flex-1 h-8 bg-white/[0.045] relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(b.value / maxDrop) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-accent"
                    />
                  </div>
                  <div
                    className="w-14 flex-shrink-0 text-right text-[18px] md:text-[20px] font-bold text-text-primary"
                    style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                  >
                    {b.display}
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
            <div
              className="relative border border-text-muted/15"
              style={{
                background:
                  "radial-gradient(720px 260px at 84% 0%, color-mix(in srgb, var(--color-accent) 7%, transparent), transparent 70%), linear-gradient(165deg, #191a1e 0%, #141518 55%, #101114 100%)",
              }}
            >
              <span className="pointer-events-none absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-accent/50" />
              <span className="pointer-events-none absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-accent/50" />
              <span className="pointer-events-none absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-accent/50" />
              <span className="pointer-events-none absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-accent/50" />

              <div className="flex flex-wrap items-center justify-between gap-3 px-5 md:px-8 pt-6 pb-5 border-b border-text-muted/10">
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/70">
                  {section.growthHeading}
                </div>
                {section.growthChip && (
                  <div className="px-2.5 py-1 border border-accent/40 bg-accent/[0.06] text-[10px] font-mono tracking-[0.16em] uppercase text-accent whitespace-nowrap">
                    {section.growthChip}
                  </div>
                )}
              </div>

              {section.growthStats && section.growthStats.length > 0 && (
                <div className="grid grid-cols-3 border-b border-text-muted/10">
                  {section.growthStats.map((st, i) => (
                    <div key={i} className={"px-5 md:px-8 py-5" + (i > 0 ? " border-l border-text-muted/10" : "")}>
                      <div className="text-[9px] font-mono tracking-[0.2em] uppercase text-text-muted/55">
                        {st.label}
                      </div>
                      <div
                        className={
                          "mt-1.5 text-[19px] md:text-[24px] font-bold leading-none " +
                          (st.accent ? "text-accent" : "text-text-primary")
                        }
                        style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                      >
                        {st.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="px-3 md:px-6 pt-5 pb-4">
                <GrowthChart
                  points={section.growthPoints}
                  series={section.growthSeries}
                  maxY={growthMax}
                  markers={section.growthMarkers}
                  bands={section.growthBands}
                />
              </div>
            </div>
            {section.growthCaption && <Caption>{section.growthCaption}</Caption>}
          </motion.div>

          {/* Monthly cost bars */}
          <motion.div {...reveal(0.04)}>
            {section.costHeading && <Heading>{section.costHeading}</Heading>}
            <div className="border border-text-muted/15 p-4 md:p-8" style={{ background: CARD_BG }}>
              <div className="mb-6">
                <Legend items={legendItems} />
              </div>
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
                    <div className="flex items-center gap-2.5">
                      <span className="inline-block w-3 h-3 flex-shrink-0" style={{ background: seriesColor(s) }} />
                      <div
                        className="text-[20px] font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                      >
                        {s.name}
                      </div>
                    </div>
                    {s.badge && (
                      <div className="px-2 py-1 border border-accent/40 text-[9px] font-mono tracking-[0.16em] uppercase text-accent whitespace-nowrap">
                        {s.badge}
                      </div>
                    )}
                  </div>
                  <p className="mt-3 text-[13px] text-text-muted/85 leading-relaxed md:min-h-[60px]">
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
