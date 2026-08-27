"use client";
import { motion } from "framer-motion";
import type { PlanChartSpec, ChartSeries } from "@/lib/plan-context";

const PALETTE = [
  "#FD3737",
  "rgba(255,255,255,0.88)",
  "rgba(255,255,255,0.48)",
  "rgba(255,255,255,0.26)",
  "#E8B44F",
];

function seriesColor(s: ChartSeries, i: number): string {
  return s.color || PALETTE[i % PALETTE.length];
}

function fmt(v: number, unit?: string): string {
  if (unit === "%") return `${v % 1 === 0 ? v : v.toFixed(1)}%`;
  if (unit === "x") return `${v.toFixed(2)}x`;
  if (unit === "K") return v >= 1000 ? `${(v / 1000).toFixed(1)}M` : `${Math.round(v)}K`;
  const a = Math.abs(v);
  if (a >= 1e9) return `${(v / 1e9).toFixed(2)}B`;
  if (a >= 1e6) return `${(v / 1e6).toFixed(1)}M`;
  if (a >= 1e3) return `${Math.round(v / 1e3)}K`;
  if (a > 0 && a < 10 && v % 1 !== 0) return v.toFixed(2);
  return `${Math.round(v)}`;
}

function niceMax(v: number): number {
  if (v <= 0) return 1;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / p;
  const m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 4 ? 4 : n <= 5 ? 5 : n <= 8 ? 8 : 10;
  return m * p;
}

const W = 720;
const GRID = "rgba(255,255,255,0.07)";
const AXIS = "rgba(255,255,255,0.38)";

function LineChart({ spec }: { spec: PlanChartSpec }) {
  const H = spec.tall ? 300 : 240;
  const padL = 46;
  const padR = 16;
  const padT = 14;
  const padB = 30;
  const iw = W - padL - padR;
  const ih = H - padT - padB;
  const labels = spec.series[0].points.map((p) => p.x);
  const n = labels.length;
  const allVals = spec.series.flatMap((s) => s.points.map((p) => p.y)).filter((v): v is number => v !== null && v !== undefined);
  const yMax = spec.yMax ?? niceMax(Math.max(...allVals) * 1.06);
  const xAt = (i: number) => padL + (n <= 1 ? 0 : (i / (n - 1)) * iw);
  const yAt = (v: number) => padT + ih - (v / yMax) * ih;
  const tickEvery = Math.max(1, Math.ceil(n / 7));
  const gridLines = [0.25, 0.5, 0.75, 1];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={spec.title}>
      {gridLines.map((g) => (
        <g key={g}>
          <line x1={padL} x2={W - padR} y1={yAt(yMax * g)} y2={yAt(yMax * g)} stroke={GRID} strokeWidth={1} />
          <text x={padL - 6} y={yAt(yMax * g) + 3} textAnchor="end" fontSize={9} fill={AXIS} fontFamily="var(--font-mono), monospace">
            {fmt(yMax * g, spec.unit)}
          </text>
        </g>
      ))}
      <line x1={padL} x2={W - padR} y1={padT + ih} y2={padT + ih} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      {labels.map((l, i) =>
        i % tickEvery === 0 || i === n - 1 ? (
          <text key={i} x={xAt(i)} y={H - 10} textAnchor="middle" fontSize={9} fill={AXIS} fontFamily="var(--font-mono), monospace">
            {l}
          </text>
        ) : null
      )}
      {spec.markers?.map((m, mi) => {
        const idx = labels.indexOf(m.x);
        if (idx < 0) return null;
        return (
          <g key={mi}>
            <line x1={xAt(idx)} x2={xAt(idx)} y1={padT} y2={padT + ih} stroke="rgba(253,55,55,0.35)" strokeWidth={1} strokeDasharray="3 4" />
            <text x={xAt(idx) + 4} y={padT + 10 + mi * 11} fontSize={8.5} fill="rgba(253,55,55,0.85)" fontFamily="var(--font-mono), monospace" letterSpacing="0.08em">
              {m.label}
            </text>
          </g>
        );
      })}
      {spec.series.map((s, si) => {
        const color = seriesColor(s, si);
        const segs: string[][] = [];
        let cur: string[] = [];
        s.points.forEach((p, i) => {
          if (p.y === null || p.y === undefined) {
            if (cur.length) segs.push(cur);
            cur = [];
          } else {
            cur.push(`${xAt(i)},${yAt(p.y)}`);
          }
        });
        if (cur.length) segs.push(cur);
        const lastIdx = (() => {
          for (let i = s.points.length - 1; i >= 0; i--) if (s.points[i].y !== null && s.points[i].y !== undefined) return i;
          return -1;
        })();
        return (
          <g key={si}>
            {spec.kind === "area" && si === 0 && segs.map((seg, gi) => {
              const first = seg[0].split(",")[0];
              const last = seg[seg.length - 1].split(",")[0];
              return (
                <motion.polygon
                  key={gi}
                  points={`${first},${padT + ih} ${seg.join(" ")} ${last},${padT + ih}`}
                  fill={color}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.09 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.3 }}
                />
              );
            })}
            {segs.map((seg, gi) => (
              <motion.polyline
                key={gi}
                points={seg.join(" ")}
                fill="none"
                stroke={color}
                strokeWidth={si === 0 ? 2.2 : 1.6}
                strokeLinejoin="round"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.1, delay: 0.15 + si * 0.18, ease: "easeInOut" }}
              />
            ))}
            {lastIdx >= 0 && (
              <motion.circle
                cx={xAt(lastIdx)}
                cy={yAt(s.points[lastIdx].y as number)}
                r={3}
                fill={color}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + si * 0.18 }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function BarChart({ spec }: { spec: PlanChartSpec }) {
  const H = spec.tall ? 300 : 240;
  const padL = 46;
  const padR = 12;
  const padT = 18;
  const padB = 42;
  const iw = W - padL - padR;
  const ih = H - padT - padB;
  const grouped = spec.kind === "grouped" && spec.series.length > 1;
  const cats = spec.series[0].points.map((p) => p.x);
  const n = cats.length;
  const allVals = spec.series.flatMap((s) => s.points.map((p) => p.y ?? 0));
  const yMax = spec.yMax ?? niceMax(Math.max(...allVals) * 1.12);
  const yAt = (v: number) => padT + ih - (v / yMax) * ih;
  const slot = iw / n;
  const groupW = slot * 0.62;
  const barW = grouped ? groupW / spec.series.length : groupW;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={spec.title}>
      {[0.5, 1].map((g) => (
        <line key={g} x1={padL} x2={W - padR} y1={yAt(yMax * g)} y2={yAt(yMax * g)} stroke={GRID} strokeWidth={1} />
      ))}
      <line x1={padL} x2={W - padR} y1={padT + ih} y2={padT + ih} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      {cats.map((c, ci) => {
        const cx = padL + slot * ci + slot / 2;
        const lines = c.split("\n");
        return (
          <text key={ci} x={cx} y={H - 26} textAnchor="middle" fontSize={9.5} fill={AXIS} fontFamily="var(--font-mono), monospace">
            {lines.map((ln, li) => (
              <tspan key={li} x={cx} dy={li === 0 ? 0 : 11}>
                {ln}
              </tspan>
            ))}
          </text>
        );
      })}
      {spec.series.map((s, si) =>
        s.points.map((p, pi) => {
          if (p.y === null || p.y === undefined) return null;
          const cx = padL + slot * pi + slot / 2;
          const x = grouped ? cx - groupW / 2 + si * barW : cx - barW / 2;
          const hl = spec.highlightX?.includes(p.x) && !grouped;
          const color = hl ? "#FD3737" : seriesColor(s, si === 0 && !grouped && spec.series.length === 1 ? (spec.highlightX ? 2 : 0) : si);
          const barH = Math.max(1.5, (p.y / yMax) * ih);
          return (
            <g key={`${si}-${pi}`}>
              <motion.rect
                x={x}
                width={barW - (grouped ? 3 : 0)}
                y={padT + ih - barH}
                height={barH}
                fill={color}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 + pi * 0.06 + si * 0.05, ease: "easeOut" }}
                style={{ transformOrigin: `${x + barW / 2}px ${padT + ih}px` }}
              />
              <motion.text
                x={x + (barW - (grouped ? 3 : 0)) / 2}
                y={padT + ih - barH - 5}
                textAnchor="middle"
                fontSize={9}
                fill={hl ? "#FD3737" : "rgba(255,255,255,0.75)"}
                fontFamily="var(--font-mono), monospace"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 + pi * 0.06 }}
              >
                {fmt(p.y, spec.unit)}
              </motion.text>
            </g>
          );
        })
      )}
    </svg>
  );
}

function HBarChart({ spec }: { spec: PlanChartSpec }) {
  const s = spec.series[0];
  const rows = s.points;
  const rowH = 30;
  const H = rows.length * rowH + 18;
  const padL = 150;
  const padR = 62;
  const iw = W - padL - padR;
  const vMax = spec.yMax ?? niceMax(Math.max(...rows.map((p) => p.y ?? 0)));
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={spec.title}>
      {rows.map((p, i) => {
        if (p.y === null || p.y === undefined) return null;
        const y = 8 + i * rowH;
        const hl = spec.highlightX?.includes(p.x);
        const color = hl ? "#FD3737" : "rgba(255,255,255,0.32)";
        const w = Math.max(2, (p.y / vMax) * iw);
        return (
          <g key={i}>
            <text x={padL - 10} y={y + 15} textAnchor="end" fontSize={10.5} fill={hl ? "#FD3737" : "rgba(255,255,255,0.72)"} fontFamily="var(--font-mono), monospace" fontWeight={hl ? 700 : 400}>
              {p.x}
            </text>
            <rect x={padL} y={y + 4} width={iw} height={16} fill="rgba(255,255,255,0.04)" />
            <motion.rect
              x={padL}
              y={y + 4}
              height={16}
              fill={color}
              initial={{ width: 0 }}
              whileInView={{ width: w }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.08 + i * 0.05, ease: "easeOut" }}
            />
            <motion.text
              x={padL + w + 8}
              y={y + 16}
              fontSize={10}
              fill={hl ? "#FD3737" : "rgba(255,255,255,0.65)"}
              fontFamily="var(--font-mono), monospace"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.05 }}
            >
              {fmt(p.y, spec.unit)}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

export function PlanChart({ spec }: { spec: PlanChartSpec }) {
  const multi = spec.series.length > 1;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="border border-text-muted/15 bg-bg-card/60 p-5 md:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <div className="text-[13.5px] md:text-[14.5px] font-bold text-text-primary leading-snug" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}>
            {spec.title}
          </div>
          {spec.subtitle && <div className="mt-1 text-[11.5px] text-text-muted leading-snug max-w-xl">{spec.subtitle}</div>}
        </div>
        {multi && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {spec.series.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="inline-block w-2.5 h-2.5" style={{ background: seriesColor(s, i) }} />
                <span className="text-[10px] font-mono tracking-[0.08em] uppercase text-text-muted">{s.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {spec.kind === "hbars" ? <HBarChart spec={spec} /> : spec.kind === "bars" || spec.kind === "grouped" ? <BarChart spec={spec} /> : <LineChart spec={spec} />}
      {(spec.note || spec.source) && (
        <figcaption className="mt-3 space-y-1">
          {spec.note && <div className="text-[11px] text-text-muted/85 leading-snug">{spec.note}</div>}
          {spec.source && <div className="text-[9.5px] font-mono tracking-[0.14em] uppercase text-text-muted/55">{spec.source}</div>}
        </figcaption>
      )}
    </motion.figure>
  );
}
