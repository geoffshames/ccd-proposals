"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

export function EngagementEngine() {
  const d = useDossier();
  const [openCode, setOpenCode] = useState<string | null>(d.engagementEngine.channels[0]?.code ?? null);

  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§09</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Engagement Engine</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.engagementEngine.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.engagementEngine.note}</p>
          </div>
        </div>

        <div className="border-t border-white/[0.10]">
          {d.engagementEngine.channels.map((c) => {
            const open = openCode === c.code;
            return (
              <div key={c.code} className="border-b border-white/[0.10]">
                <button
                  type="button"
                  onClick={() => setOpenCode(open ? null : c.code)}
                  className="w-full text-left grid grid-cols-12 gap-6 py-7 group hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-12 md:col-span-3 flex flex-col gap-2">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{c.code}</div>
                    <div className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", lineHeight: 1.15 }}>{c.name}</div>
                  </div>
                  <div className="col-span-12 md:col-span-7 max-w-[640px] flex items-center">
                    <p className="text-[14.5px] leading-[1.6] text-white/75">{c.role}</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">{c.cadence}</span>
                    <span className={`inline-block font-mono text-[15px] text-accent transition-transform ${open ? "rotate-90" : ""}`}>›</span>
                  </div>
                </button>

                {open && (
                  <div className="grid grid-cols-12 gap-6 pb-9 -mt-1">
                    <div className="hidden md:block md:col-span-3" />
                    <div className="col-span-12 md:col-span-9 max-w-[680px] grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                      <div>
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-3">Plays</div>
                        <ul className="space-y-2">
                          {c.plays.map((p, i) => (
                            <li key={i} className="text-[13.5px] leading-[1.6] text-white/85 flex gap-2">
                              <span className="text-accent shrink-0">›</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-3">Deliverables</div>
                        <ul className="space-y-2">
                          {c.deliverables.map((p, i) => (
                            <li key={i} className="text-[13.5px] leading-[1.6] text-white/85 flex gap-2">
                              <span className="text-accent shrink-0">›</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
