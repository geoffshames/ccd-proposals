"use client";
import { useDossier } from "@/lib/dossier-context";

export function Thesis() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-10">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§05</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Thesis</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.thesis.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 max-w-[680px]">
                {d.thesis.paragraphs.map((p, i) => (
                  <p key={i} className="text-[16.5px] leading-[1.75] text-white/85 mb-6 last:mb-0">{p}</p>
                ))}
              </div>
              {d.thesis.pullQuote && (
                <aside className="lg:col-span-5 lg:pt-6">
                  <div className="border-l-2 border-accent pl-6 py-2">
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-accent mb-3">The Take</div>
                    <blockquote className="text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.4rem, 2.4vw, 1.95rem)", lineHeight: 1.2, fontWeight: 700 }}>
                      &ldquo;{d.thesis.pullQuote}&rdquo;
                    </blockquote>
                  </div>
                </aside>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
