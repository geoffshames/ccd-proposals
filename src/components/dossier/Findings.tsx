"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

export function Findings() {
  const d = useDossier();
  // Default first finding expanded; clicking toggles.
  const [openCode, setOpenCode] = useState<string | null>(d.findings[0]?.code ?? null);

  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§04</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Findings</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>Five Findings That Drive the Recommendation</h2>
            <p className="mt-3 text-[12.5px] text-white/45 font-mono uppercase tracking-[0.16em]">Click any finding to expand</p>
          </div>
        </div>

        <div className="border-t border-white/[0.10]">
          {d.findings.map((f) => {
            const open = openCode === f.code;
            return (
              <div key={f.code} className="border-b border-white/[0.10]">
                <button
                  type="button"
                  onClick={() => setOpenCode(open ? null : f.code)}
                  className="w-full text-left grid grid-cols-12 gap-6 py-7 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="col-span-12 md:col-span-2 flex flex-col gap-2">
                    <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-accent">{f.code}</div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">{f.label}</div>
                  </div>
                  <div className="col-span-12 md:col-span-9 max-w-[680px]">
                    <p className="text-[15.5px] leading-[1.65] text-white/85">{f.finding}</p>
                  </div>
                  <div className="col-span-12 md:col-span-1 flex items-start justify-end pt-1">
                    <span className={`inline-block font-mono text-[16px] text-accent transition-transform ${open ? "rotate-45" : ""}`}>+</span>
                  </div>
                </button>
                {open && (
                  <div className="grid grid-cols-12 gap-6 pb-9 -mt-2">
                    <div className="hidden md:block md:col-span-2" />
                    <div className="col-span-12 md:col-span-9 max-w-[680px] grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
                      <div className="pl-4 border-l-2 border-accent/60">
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-1">So What</div>
                        <p className="text-[14px] leading-[1.65] text-white">{f.soWhat}</p>
                      </div>
                      <div>
                        <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-1">Source</div>
                        <p className="text-[12.5px] text-white/65 leading-[1.55]">{f.source}</p>
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
