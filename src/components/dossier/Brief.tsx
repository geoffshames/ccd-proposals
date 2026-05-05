"use client";
import { useDossier } from "@/lib/dossier-context";

export function Brief() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              §01
            </div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              Brief
            </div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2
              className="font-bold uppercase leading-[1.05] text-white max-w-[780px]"
              style={{
                fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
                fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)",
              }}
            >
              {d.brief.headline}
            </h2>
            <p className="mt-8 text-[16.5px] sm:text-[17.5px] leading-[1.7] text-white/80 max-w-[760px]">
              {d.brief.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
