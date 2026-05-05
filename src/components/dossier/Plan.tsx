"use client";
import { useDossier } from "@/lib/dossier-context";

export function Plan() {
  const d = useDossier();
  const weeks = Array.from({ length: d.plan.weeks }, (_, i) => i + 1);
  const cols = `220px repeat(${d.plan.weeks}, minmax(0, 1fr))`;

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
          <div className="min-w-[860px]">
            {/* Header row */}
            <div className="grid border-b border-white/[0.10]" style={{ gridTemplateColumns: cols }}>
              <div className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 border-r border-white/[0.10]">Workstream</div>
              {weeks.map((w) => (
                <div key={w} className="px-2 py-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/45 text-center border-r border-white/[0.06] last:border-r-0">W{String(w).padStart(2, "0")}</div>
              ))}
            </div>

            {/* Each workstream row */}
            {d.plan.tracks.map((t) => (
              <div key={t.name} className="grid border-b border-white/[0.06] last:border-b-0 min-h-[56px]" style={{ gridTemplateColumns: cols }}>
                <div className="px-4 py-3 text-[13px] text-white/85 border-r border-white/[0.10] flex items-center">{t.name}</div>
                {/* Empty cells for grid lines */}
                {weeks.map((w) => (
                  <div key={`cell-${w}`} className="border-r border-white/[0.04] last:border-r-0" />
                ))}
                {/* Bars overlaid via absolute-positioned wrapper using a second grid */}
                <div className="contents" />
                <div
                  className="grid items-center px-1 py-2"
                  style={{
                    gridColumn: `2 / ${d.plan.weeks + 2}`,
                    gridRow: "1",
                    gridTemplateColumns: `repeat(${d.plan.weeks}, minmax(0, 1fr))`,
                  }}
                >
                  {t.bars.map((b, i) => (
                    <div
                      key={i}
                      className="bg-accent/15 border border-accent/45 px-2 py-1.5 text-[10.5px] font-mono uppercase tracking-[0.12em] text-white truncate"
                      style={{ gridColumn: `${b.startWeek} / ${b.endWeek + 1}`, gridRow: 1 }}
                      title={b.label}
                    >
                      {b.label}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
