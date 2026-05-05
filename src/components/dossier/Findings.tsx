"use client";
import { useDossier } from "@/lib/dossier-context";

export function Findings() {
  const d = useDossier();
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
          </div>
        </div>

        <div className="border-t border-white/[0.10]">
          {d.findings.map((f) => (
            <div key={f.code} className="border-b border-white/[0.10] py-10 grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-[14px] uppercase tracking-[0.18em] text-accent">{f.code}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">{f.label}</div>
              </div>
              <div className="col-span-12 md:col-span-7 max-w-[640px]">
                <p className="text-[15.5px] leading-[1.7] text-white/85">{f.finding}</p>
                <div className="mt-4 pl-4 border-l-2 border-accent/60">
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-1">So What</div>
                  <p className="text-[14.5px] leading-[1.65] text-white">{f.soWhat}</p>
                </div>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-2">Source</div>
                <div className="text-[12.5px] text-white/65 leading-[1.55]">{f.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
