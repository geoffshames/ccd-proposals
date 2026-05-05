"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

export function Plan() {
  const d = useDossier();
  const phases = d.plan.phases;

  // If no phases, show a minimal fallback (legacy tracks). Most dossiers should use phases.
  if (!phases || phases.length === 0) {
    return (
      <section className="border-b border-white/[0.10] py-20 sm:py-28">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.plan.heading}</h2>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.plan.note}</p>
          <p className="mt-6 text-[12.5px] text-white/45 font-mono uppercase tracking-[0.16em]">Phase data missing for this dossier.</p>
        </div>
      </section>
    );
  }

  return <PhaseTimeline />;
}

function PhaseTimeline() {
  const d = useDossier();
  const phases = d.plan.phases!;
  const totalWeeks = d.plan.weeks;
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [openPhase, setOpenPhase] = useState<string | null>(phases[0]?.code ?? null);

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

        {/* 12-week glance strip */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45">12-Week Glance</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45">{phases.length} Phases</div>
          </div>
          <div className="relative h-12 border border-white/[0.10] bg-white/[0.02] overflow-hidden">
            {/* week grid lines */}
            <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
              {Array.from({ length: totalWeeks }, (_, i) => (
                <div key={i} className="border-r border-white/[0.05] last:border-r-0 flex items-end justify-center pb-1.5">
                  <span className="font-mono text-[9.5px] text-white/35 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
            {/* phase bars */}
            <div className="absolute inset-x-0 top-0 grid h-7" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
              {phases.map((p, i) => {
                const isActive = activePhase === p.code || openPhase === p.code;
                return (
                  <button
                    key={p.code}
                    type="button"
                    onMouseEnter={() => setActivePhase(p.code)}
                    onMouseLeave={() => setActivePhase((a) => (a === p.code ? null : a))}
                    onClick={() => {
                      setOpenPhase(p.code);
                      const target = document.getElementById(`phase-${p.code}`);
                      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`mx-px my-1 px-2 flex items-center justify-start text-left transition-all ${isActive ? "bg-accent text-white" : "bg-accent/25 text-white/85 hover:bg-accent/45"}`}
                    style={{
                      gridColumn: `${p.startWeek} / ${p.endWeek + 1}`,
                      opacity: i % 2 === 0 ? 1 : 0.92,
                    }}
                    title={`${p.code} — ${p.name}`}
                  >
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] truncate">{p.code} · {p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="mt-3 font-mono text-[10.5px] text-white/35 uppercase tracking-[0.16em]">Click any phase to jump · hover to highlight</p>
        </div>

        {/* Phase cards: vertical timeline with left rail */}
        <div className="relative">
          {/* left rail */}
          <div className="absolute left-[24px] sm:left-[28px] top-2 bottom-2 w-px bg-white/[0.10]" aria-hidden />

          {phases.map((p, i) => {
            const open = openPhase === p.code;
            return (
              <div
                key={p.code}
                id={`phase-${p.code}`}
                className="relative pl-16 sm:pl-20 pb-12 last:pb-0 scroll-mt-24"
                onMouseEnter={() => setActivePhase(p.code)}
                onMouseLeave={() => setActivePhase((a) => (a === p.code ? null : a))}
              >
                {/* node dot */}
                <div className="absolute left-0 top-2 flex items-center">
                  <div
                    className={`relative h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center border transition-colors ${
                      activePhase === p.code || open
                        ? "border-accent bg-accent text-white"
                        : "border-white/[0.18] bg-bg text-white/85 hover:border-accent/60"
                    }`}
                  >
                    <span className="font-bold" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "16px", letterSpacing: "0.04em" }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenPhase(open ? null : p.code)}
                  className={`block w-full text-left border transition-all ${open ? "border-accent/40 bg-white/[0.04]" : "border-white/[0.10] bg-white/[0.02] hover:border-white/[0.20]"}`}
                >
                  <div className="px-6 sm:px-8 py-6 grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-12 md:col-span-3">
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent mb-1">
                        {p.code}
                      </div>
                      <div className="font-mono text-[12px] text-white/55">
                        Weeks {p.startWeek}-{p.endWeek}
                      </div>
                      {p.dateLabel && (
                        <div className="font-mono text-[11px] text-white/40 mt-0.5">{p.dateLabel}</div>
                      )}
                    </div>
                    <div className="col-span-12 md:col-span-8">
                      <div className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.25rem, 2vw, 1.65rem)", lineHeight: 1.15 }}>
                        {p.name}
                      </div>
                      <div className="mt-1 text-[13px] text-white/55">
                        {p.activities.length} activities
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-1 flex items-center justify-end">
                      <span className={`inline-block font-mono text-[18px] text-accent transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                    </div>
                  </div>

                  {open && (
                    <div className="px-6 sm:px-8 pb-7 -mt-1 grid grid-cols-12 gap-4">
                      <div className="hidden md:block md:col-span-3" />
                      <div className="col-span-12 md:col-span-9 max-w-[680px]">
                        <ul className="space-y-2.5 border-t border-white/[0.10] pt-5">
                          {p.activities.map((a, ai) => (
                            <li key={ai} className="flex gap-3 text-[14px] leading-[1.6] text-white/85">
                              <span className="font-mono text-[10.5px] text-accent shrink-0 mt-[5px] tracking-[0.18em]">
                                {String(ai + 1).padStart(2, "0")}
                              </span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
