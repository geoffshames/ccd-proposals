"use client";
import { useDossier } from "@/lib/dossier-context";

const TIER_BAR: Record<string, string> = {
  S: "bg-accent",
  A: "bg-white/80",
  B: "bg-white/45",
  C: "bg-white/20",
};

export function CatalogMap() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§02</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Map</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.catalogMap.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.catalogMap.note}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.10] mb-10 border border-white/[0.10]">
          {d.catalogMap.totals.map((t) => (
            <div key={t.label} className="bg-bg p-5">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">{t.label}</div>
              <div className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>{t.value}</div>
              <div className="mt-1 text-[12px] text-white/55 leading-[1.4]">{t.detail}</div>
            </div>
          ))}
        </div>

        <div className="border border-white/[0.10] overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.10] text-left">
                {d.catalogMap.columns.map((c) => (
                  <th key={c} className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.catalogMap.rows.map((r) => (
                <tr key={r.name} className="border-b border-white/[0.06] hover:bg-white/[0.02]">
                  <td className="px-4 py-3 align-top">
                    <div className="flex items-center gap-2">
                      <span className={`inline-block h-3 w-3 ${TIER_BAR[r.tier]}`} />
                      <span className="font-mono text-[11.5px] text-white/75">{r.tier}-Tier</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-top text-white font-medium whitespace-nowrap">{r.name}</td>
                  <td className="px-4 py-3 align-top text-white/55 text-[12px] whitespace-nowrap">{r.status}</td>
                  <td className="px-4 py-3 align-top text-white font-mono text-[12.5px] whitespace-nowrap">{(r.monthlyListeners / 1_000_000).toFixed(2).replace(/\.00$/, "")}M</td>
                  <td className="px-4 py-3 align-top text-white/85 text-[12.5px]">
                    <div>{r.topTrack}</div>
                    {r.topTrackStreams && (<div className="text-white/45 font-mono text-[11px]">{r.topTrackStreams} streams</div>)}
                  </td>
                  <td className="px-4 py-3 align-top text-white/65 text-[12.5px] leading-[1.55] min-w-[280px]">{r.reactivationRead}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
