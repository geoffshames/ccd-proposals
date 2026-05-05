"use client";
import { useDossier } from "@/lib/dossier-context";

export function MathSection() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§11</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">The Math</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.math.heading}</h2>
            <p className="mt-4 text-[14.5px] leading-[1.7] text-white/65 max-w-[760px]">{d.math.note}</p>
          </div>
        </div>

        <div className="border border-white/[0.10] overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.10]">
                <th className="text-left px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55">Lever</th>
                {d.math.columns.map((c) => (
                  <th key={c} className="text-right px-4 py-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.math.rows.map((r) => (
                <tr key={r.lever} className="border-b border-white/[0.06]">
                  <td className="px-4 py-3 text-white/85">{r.lever}</td>
                  <td className="px-4 py-3 text-white/65 font-mono text-right whitespace-nowrap">{r.conservative}</td>
                  <td className="px-4 py-3 text-white font-mono text-right whitespace-nowrap">{r.expected}</td>
                  <td className="px-4 py-3 text-accent font-mono text-right whitespace-nowrap">{r.best}</td>
                </tr>
              ))}
              <tr className="bg-white/[0.04]">
                <td className="px-4 py-4 text-white font-bold uppercase tracking-wide text-[13.5px]">{d.math.totalRow.label}</td>
                <td className="px-4 py-4 text-white/85 font-mono text-right font-bold whitespace-nowrap">{d.math.totalRow.conservative}</td>
                <td className="px-4 py-4 text-white font-mono text-right font-bold whitespace-nowrap">{d.math.totalRow.expected}</td>
                <td className="px-4 py-4 text-accent font-mono text-right font-bold whitespace-nowrap">{d.math.totalRow.best}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/45 mb-3">Assumptions</div>
            <ul className="space-y-2 max-w-[720px]">
              {d.math.assumptions.map((a, i) => (
                <li key={i} className="text-[13px] text-white/65 leading-[1.65] flex gap-3">
                  <span className="font-mono text-[11px] text-white/35 shrink-0">A{String(i + 1).padStart(2, "0")}</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
