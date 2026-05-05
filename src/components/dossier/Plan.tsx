"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

export function Plan() {
  const d = useDossier();
  const phases = d.plan.phases;

  if (!phases || phases.length === 0) {
    return (
      <section className="border-b border-white/[0.10] py-20 sm:py-28">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
          <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.plan.heading}</h2>
          <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.plan.note}</p>
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

  // Split phases: in-window vs ongoing (start at or past final week, or zero-width).
  const inWindow = phases.filter((p) => p.startWeek <= totalWeeks && p.endWeek > p.startWeek);
  const ongoing = phases.filter((p) => p.startWeek >= totalWeeks || p.endWeek === p.startWeek);

  // Phase order indices for "Phase N of M" framing.
  const orderIndex = (code: string) => phases.findIndex((x) => x.code === code) + 1;

  const onJump = (code: string) => {
    setOpenPhase(code);
    const target = document.getElementById(`phase-${code}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

        {/* 12-week glance: phase code + week range only. No name truncation. Ongoing phases sit OUTSIDE the frame. */}
        <div className="mb-14">
          <div className="flex items-baseline justify-between mb-4">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45">12-Week Glance</div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45">
              {inWindow.length} Phase{inWindow.length === 1 ? "" : "s"}{ongoing.length > 0 ? ` + ${ongoing.length} Ongoing` : ""}
            </div>
          </div>

          <div className="flex items-stretch gap-3">
            {/* In-window phases */}
            <div
              className="flex-1 grid gap-2 border border-white/[0.10] bg-white/[0.02] p-2"
              style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}
            >
              {inWindow.map((p) => {
                const isActive = activePhase === p.code || openPhase === p.code;
                return (
                  <button
                    key={p.code}
                    type="button"
                    onMouseEnter={() => setActivePhase(p.code)}
                    onMouseLeave={() => setActivePhase((a) => (a === p.code ? null : a))}
                    onClick={() => onJump(p.code)}
                    className={`min-h-[88px] flex flex-col items-start justify-between p-3 text-left border transition-all ${
                      isActive
                        ? "bg-accent border-accent text-white"
                        : "bg-accent/15 border-accent/35 text-white/85 hover:bg-accent/30 hover:border-accent/55"
                    }`}
                    style={{ gridColumn: `${p.startWeek} / ${p.endWeek + 1}` }}
                    title={`${p.code} — ${p.name}`}
                  >
                    <div className="font-mono text-[11.5px] uppercase tracking-[0.18em]">{p.code}</div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                        Phase {orderIndex(p.code)} of {phases.length}
                      </div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-90 mt-1">
                        W{String(p.startWeek).padStart(2, "0")}–W{String(p.endWeek).padStart(2, "0")}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Ongoing column (outside the 12-week frame) */}
            {ongoing.length > 0 && (
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-white/35 mb-1 text-center">After</div>
                {ongoing.map((p) => {
                  const isActive = activePhase === p.code || openPhase === p.code;
                  return (
                    <button
                      key={p.code}
                      type="button"
                      onMouseEnter={() => setActivePhase(p.code)}
                      onMouseLeave={() => setActivePhase((a) => (a === p.code ? null : a))}
                      onClick={() => onJump(p.code)}
                      className={`min-h-[88px] w-[120px] flex flex-col items-start justify-between p-3 text-left border border-dashed transition-all ${
                        isActive
                          ? "bg-white/[0.10] border-white/50 text-white"
                          : "bg-white/[0.03] border-white/[0.20] text-white/70 hover:bg-white/[0.06] hover:border-white/40"
                      }`}
                      title={`${p.code} — ${p.name}`}
                    >
                      <div className="font-mono text-[11.5px] uppercase tracking-[0.18em]">{p.code}</div>
                      <div>
                        <div className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70">
                          Phase {orderIndex(p.code)} of {phases.length}
                        </div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.16em] opacity-90 mt-1">Ongoing</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Week ruler */}
          <div className="mt-2">
            <div className="grid font-mono text-[9.5px] text-white/35 tracking-[0.1em]" style={{ gridTemplateColumns: `repeat(${totalWeeks}, minmax(0, 1fr))` }}>
              {Array.from({ length: totalWeeks }, (_, i) => (
                <div key={i} className="text-center">W{String(i + 1).padStart(2, "0")}</div>
              ))}
            </div>
          </div>

          <p className="mt-4 font-mono text-[10.5px] text-white/35 uppercase tracking-[0.16em]">Click any phase to jump to its detail · hover to highlight</p>
        </div>

        {/* Phase cards (vertical timeline) */}
        <div className="relative">
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
                        {p.startWeek === p.endWeek
                          ? `Week ${p.startWeek}+`
                          : `Weeks ${p.startWeek}–${p.endWeek}`}
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
