"use client";
import { useDossier } from "@/lib/dossier-context";
import { useState } from "react";

const TIER_BAR: Record<string, string> = {
  S: "bg-accent",
  A: "bg-white/80",
  B: "bg-white/45",
  C: "bg-white/20",
};

export function CatalogMap() {
  const d = useDossier();
  const [filter, setFilter] = useState<"All" | "S" | "A" | "B" | "C">("All");
  const [openName, setOpenName] = useState<string | null>(null);

  const tiers: Array<"All" | "S" | "A" | "B" | "C"> = ["All", "S", "A", "B", "C"];
  const counts = {
    All: d.catalogMap.rows.length,
    S: d.catalogMap.rows.filter((r) => r.tier === "S").length,
    A: d.catalogMap.rows.filter((r) => r.tier === "A").length,
    B: d.catalogMap.rows.filter((r) => r.tier === "B").length,
    C: d.catalogMap.rows.filter((r) => r.tier === "C").length,
  };
  const visibleRows = filter === "All" ? d.catalogMap.rows : d.catalogMap.rows.filter((r) => r.tier === filter);

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

        {/* Totals strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.10] mb-8 border border-white/[0.10]">
          {d.catalogMap.totals.map((t) => (
            <div key={t.label} className="bg-bg p-5">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">{t.label}</div>
              <div className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.5rem, 2.8vw, 2.05rem)", lineHeight: 1.05 }}>{t.value}</div>
              <div className="mt-1 text-[12px] text-white/55 leading-[1.4]">{t.detail}</div>
            </div>
          ))}
        </div>

        {/* Tier filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tiers.map((tier) => {
            const active = filter === tier;
            const label = tier === "All" ? "All" : `${tier}-Tier`;
            return (
              <button
                key={tier}
                type="button"
                onClick={() => setFilter(tier)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] border transition-colors ${active ? "bg-accent text-white border-accent" : "bg-transparent text-white/65 border-white/[0.15] hover:border-white/40 hover:text-white"}`}
              >
                {label} <span className="opacity-60 ml-1">{counts[tier]}</span>
              </button>
            );
          })}
        </div>

        {/* Heat table — clickable rows with expandable detail */}
        <div className="border border-white/[0.10] overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.10] text-left bg-white/[0.02]">
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap w-[110px]">Tier</th>
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55">Asset</th>
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">Status</th>
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">Listeners</th>
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">Top Track</th>
                <th className="px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 w-[44px] text-center">+</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((r) => {
                const open = openName === r.name;
                return (
                  <>
                    <tr
                      key={r.name}
                      onClick={() => setOpenName(open ? null : r.name)}
                      className="border-b border-white/[0.06] hover:bg-white/[0.04] cursor-pointer transition-colors"
                    >
                      <td className="px-4 py-3 align-middle whitespace-nowrap">
                        <div className="inline-flex items-center gap-2">
                          <span className={`inline-block h-3 w-3 ${TIER_BAR[r.tier]}`} />
                          <span className="font-mono text-[11.5px] text-white/75">{r.tier}-Tier</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 align-middle text-white font-medium">{r.name}</td>
                      <td className="px-4 py-3 align-middle text-white/55 text-[12px] whitespace-nowrap">{r.status}</td>
                      <td className="px-4 py-3 align-middle text-white font-mono text-[12.5px] whitespace-nowrap">
                        {r.monthlyListeners >= 1_000_000
                          ? `${(r.monthlyListeners / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`
                          : `${(r.monthlyListeners / 1_000).toFixed(0)}K`}
                      </td>
                      <td className="px-4 py-3 align-middle text-white/85 text-[12.5px]">
                        <div>{r.topTrack}</div>
                        {r.topTrackStreams && (
                          <div className="text-white/45 font-mono text-[11px]">{r.topTrackStreams}</div>
                        )}
                      </td>
                      <td className="px-4 py-3 align-middle text-center">
                        <span
                          className={`inline-block font-mono text-[14px] text-accent transition-transform ${open ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </td>
                    </tr>
                    {open && (
                      <tr key={r.name + "-detail"} className="bg-white/[0.03] border-b border-white/[0.10]">
                        <td colSpan={6} className="px-6 py-5">
                          <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-3">
                              <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-2">Reactivation Read</div>
                            </div>
                            <div className="col-span-12 md:col-span-9">
                              <p className="text-[14px] leading-[1.65] text-white/90 max-w-[680px]">{r.reactivationRead}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-[11.5px] text-white/45 font-mono uppercase tracking-[0.16em]">
          Click any row to expand the reactivation read · Filter by tier above
        </div>
      </div>
    </section>
  );
}
