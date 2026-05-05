"use client";
import { useDossier } from "@/lib/dossier-context";

export function Experiential() {
  const d = useDossier();
  const mockups = d.images?.experientialMockups ?? [];
  const mockupFor = (code: string) => mockups.find((m) => m.code === code);
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§08</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Experiential</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.experiential.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.experiential.note}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {d.experiential.items.map((item) => (
            <article key={item.code} className="border border-white/[0.10] bg-bg overflow-hidden">
              {(() => { const m = mockupFor(item.code); return m ? (
                <div className="relative aspect-[16/10] border-b border-white/[0.10] bg-black/40">
                  <img src={m.url} alt={m.caption ?? item.city} className="w-full h-full object-cover" />
                  {m.caption && (
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/65 bg-gradient-to-t from-black/80 to-transparent">{m.caption}</div>
                  )}
                </div>
              ) : null; })()}
              <div className="p-7 sm:p-8">
              <div className="flex items-baseline justify-between mb-4 gap-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{item.code}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">{item.format}</div>
              </div>
              <h3 className="font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)", lineHeight: 1.1 }}>{item.city}</h3>
              <div className="text-white/55 text-[13px] mb-5">{item.venueType}</div>

              <dl className="grid grid-cols-3 gap-x-4 gap-y-3 mb-5 text-[12.5px]">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Partners</dt>
                <dd className="col-span-2 text-white/85">{item.partnerCandidates}</dd>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Lead Time</dt>
                <dd className="col-span-2 text-white/85 font-mono">{item.leadTime}</dd>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Production</dt>
                <dd className="col-span-2 text-white/85 font-mono">{item.productionBand}</dd>
              </dl>
              <p className="text-[13.5px] leading-[1.65] text-white/70 border-t border-white/[0.08] pt-4">{item.narrative}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
