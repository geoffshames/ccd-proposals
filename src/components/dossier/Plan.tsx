"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

export function Plan() {
  const d = useDossier();
  const [hovered, setHovered] = useState<string | null>(null);
  const weeks = Array.from({ length: d.plan.weeks }, (_, i) => i + 1);

  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§06</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Plan</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.plan.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.plan.note}</p>
          </div>
        </div>

        <div className="border border-white/[0.10] overflow-x-auto">
          <div className="min-w-[920px]">
            {/* Header row: workstream + week numbers */}
            <div
              className="grid border-b border-white/[0.10] bg-white/[0.02]"
              style={{ gridTemplateColumns: `240px repeat(${d.plan.weeks}, minmax(0, 1fr))` }}
            >
              <div className="px-5 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 border-r border-white/[0.10]">
                Workstream
              </div>
              {weeks.map((w) => (
                <div
                  key={w}
                  className="px-2 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45 text-center border-r border-white/[0.06] last:border-r-0"
                >
                  W{String(w).padStart(2, "0")}
                </div>
              ))}
            </div>

            {/* Each workstream rendered as: label cell on left + bars stacked vertically on right.
                Each bar gets its own sub-row so labels never overlap. */}
            {d.plan.tracks.map((t) => {
              const rows = t.bars.length;
              return (
                <div
                  key={t.name}
                  className="grid border-b border-white/[0.06] last:border-b-0"
                  style={{ gridTemplateColumns: `240px 1fr` }}
                  onMouseEnter={() => setHovered(t.name)}
                  onMouseLeave={() => setHovered((h) => (h === t.name ? null : h))}
                >
                  {/* Workstream label cell — spans all bar sub-rows */}
                  <div
                    className={`px-5 py-4 text-[13.5px] text-white/90 border-r border-white/[0.10] flex items-center transition-colors ${hovered === t.name ? "bg-white/[0.04] text-white" : ""}`}
                    style={{ minHeight: `${Math.max(48, rows * 40)}px` }}
                  >
                    {t.name}
                  </div>

                  {/* Bar lane: each bar in its own sub-row */}
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: `repeat(${d.plan.weeks}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${rows}, 40px)`,
                    }}
                  >
                    {/* Background grid lines */}
                    {weeks.map((w) => (
                      <div
                        key={`bg-${w}`}
                        className="border-r border-white/[0.04] last:border-r-0"
                        style={{ gridColumn: `${w} / ${w + 1}`, gridRow: `1 / ${rows + 1}` }}
                      />
                    ))}

                    {/* Bars */}
                    {t.bars.map((b, i) => (
                      <div
                        key={i}
                        className="self-center mx-1 my-1 px-3 py-2 bg-accent/20 border border-accent/55 text-[11.5px] font-mono uppercase tracking-[0.1em] text-white whitespace-normal leading-tight"
                        style={{
                          gridColumn: `${b.startWeek} / ${b.endWeek + 1}`,
                          gridRow: `${i + 1} / ${i + 2}`,
                        }}
                        title={b.label}
                      >
                        {b.label}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3 text-[11.5px] text-white/45 font-mono uppercase tracking-[0.16em]">
          Scroll horizontally on smaller screens · Hover a workstream to highlight
        </div>
      </div>
    </section>
  );
}
