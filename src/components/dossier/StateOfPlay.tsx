"use client";
import { useDossier } from "@/lib/dossier-context";

export function StateOfPlay() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§03</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">State of Play</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.stateOfPlay.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2" />
          <div className="col-span-12 md:col-span-10 max-w-[760px]">
            {d.stateOfPlay.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] sm:text-[17px] leading-[1.75] text-white/80 mb-6 last:mb-0">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35 mr-3 align-baseline">¶ {String(i + 1).padStart(2, "0")}</span>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
