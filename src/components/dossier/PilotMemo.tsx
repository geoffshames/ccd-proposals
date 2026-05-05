"use client";
import { useDossier } from "@/lib/dossier-context";

export function PilotMemo() {
  const d = useDossier();
  return (
    <section className="border-b border-white/[0.10] py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§12</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Pilot</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="font-bold uppercase leading-[1.05] text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)" }}>{d.pilot.heading}</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2" />
          <div className="col-span-12 md:col-span-10">
            <div className="border border-white/[0.10] bg-bg p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8 mb-8 pb-8 border-b border-white/[0.10]">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">Pilot Fee</div>
                  <div className="font-bold text-white" style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", lineHeight: 1 }}>${d.pilot.feeUsd.toLocaleString()}</div>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">Term</div>
                  <div className="text-white text-[16px]">{d.pilot.duration}</div>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">Payment Terms</div>
                  <div className="text-white text-[16px]">{d.pilot.paymentTerms}</div>
                </div>
              </div>

              <div className="mb-8">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-3">Payment Schedule</div>
                <ul className="space-y-2">
                  {d.pilot.paymentSchedule.map((p, i) => (
                    <li key={i} className="text-[14px] text-white/85 flex gap-3">
                      <span className="font-mono text-[11px] text-accent shrink-0 mt-[3px]">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">Passthrough Budgets</div>
                <p className="text-[13.5px] leading-[1.65] text-white/75">{d.pilot.passthroughNote}</p>
              </div>

              <div className="border-t border-white/[0.10] pt-6">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-accent mb-2">What Comes After</div>
                <p className="text-[14px] leading-[1.7] text-white/85">{d.pilot.nextStepsNote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
