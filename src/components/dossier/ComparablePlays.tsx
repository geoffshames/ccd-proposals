"use client";
import { useDossier } from "@/lib/dossier-context";

export function ComparablePlays() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§10</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Comparables</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.comparablePlays.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.comparablePlays.note}</p>
          </div>
        </div>

        <div className="space-y-12">
          {d.comparablePlays.items.map((c, i) => (
            <article key={c.title} className="grid grid-cols-12 gap-6 border-t border-white/[0.10] pt-10">
              <div className="col-span-12 md:col-span-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45 mb-2">CP-{String(i + 1).padStart(2, "0")} / {c.year}</div>
                <h3 className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.3rem, 2vw, 1.65rem)", lineHeight: 1.15 }}>{c.title}</h3>
              </div>
              <div className="col-span-12 md:col-span-9 space-y-4 max-w-[680px]">
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mr-2">What</span>
                  <span className="text-[14.5px] leading-[1.7] text-white/85">{c.what}</span>
                </div>
                <div className="border-l-2 border-accent/50 pl-4">
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent mr-2">Result</span>
                  <span className="text-[14.5px] leading-[1.7] text-white/95">{c.result}</span>
                </div>
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mr-2">Read-Across</span>
                  <span className="text-[14px] leading-[1.7] text-white/75">{c.takeaway}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
