"use client";
import { useDossier } from "@/lib/dossier-context";

export function SyncBriefs() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§09</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Sync Briefs</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.syncBriefs.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.syncBriefs.note}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.10]">
          {d.syncBriefs.items.map((b, i) => (
            <article key={b.artist} className="border-b border-white/[0.10] py-10 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-2">SB-{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", lineHeight: 1.1 }}>{b.artist}</h3>
                <div className="mt-3 text-[12.5px] text-white/55 leading-[1.55]">{b.angle}</div>
                <div className="mt-4 space-y-1">
                  {b.tracks.map((t) => (
                    <div key={t} className="font-mono text-[11.5px] text-white/70">&rsaquo; {t}</div>
                  ))}
                </div>
              </div>

              <div className="col-span-12 md:col-span-9 space-y-5">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-2">Creative Cue</div>
                  <p className="text-[14.5px] leading-[1.7] text-white/85">{b.creativeCue}</p>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-2">Target List</div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                    {b.targets.map((t) => (
                      <li key={t} className="text-[13.5px] text-white/80 flex gap-2">
                        <span className="text-accent shrink-0">›</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/[0.08] pt-4">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-2">Supervisor Approach</div>
                  <p className="text-[13.5px] leading-[1.65] text-white/75">{b.supervisorApproach}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
