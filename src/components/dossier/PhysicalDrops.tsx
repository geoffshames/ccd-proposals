"use client";
import { useDossier } from "@/lib/dossier-context";

export function PhysicalDrops() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§07</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Physical Drops</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.physicalDrops.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.physicalDrops.note}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.10] border border-white/[0.10]">
          {d.physicalDrops.items.map((item) => (
            <article key={item.code} className="bg-bg p-7 sm:p-8">
              <div className="flex items-baseline justify-between mb-4 gap-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">{item.code}</div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 text-right">{item.format}</div>
              </div>
              <h3 className="font-bold text-white mb-5" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)", lineHeight: 1.15 }}>{item.title}</h3>
              <dl className="grid grid-cols-3 gap-x-4 gap-y-3 mb-5 text-[12.5px]">
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Variants</dt>
                <dd className="col-span-2 text-white/85">{item.variants}</dd>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Vendor</dt>
                <dd className="col-span-2 text-white/85">{item.vendor}</dd>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">MSRP</dt>
                <dd className="col-span-2 text-white/85 font-mono">{item.msrp}</dd>
                <dt className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45">Margin</dt>
                <dd className="col-span-2 text-white/85 font-mono">{item.margin}</dd>
              </dl>
              <p className="text-[13.5px] leading-[1.65] text-white/70 border-t border-white/[0.08] pt-4">{item.narrative}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
