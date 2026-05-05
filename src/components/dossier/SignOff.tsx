"use client";
import { useDossier } from "@/lib/dossier-context";

export function SignOff() {
  const d = useDossier();
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">§13</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">Sign-Off</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <div className="border-t border-white/[0.10] pt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-3">Prepared By</div>
                  <div className="text-white text-[16px] mb-1">{d.signOff.preparedBy}</div>
                  <div className="text-white/85 text-[14px]">{d.signOff.contactName}</div>
                  <div className="text-white/55 text-[13px]">{d.signOff.contactRole}</div>
                  <a href={`mailto:${d.signOff.contactEmail}`} className="inline-block mt-2 text-[13px] font-mono text-accent hover:underline">{d.signOff.contactEmail}</a>
                </div>
                <div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-3">Document Status</div>
                  <div className="text-white/85 text-[13.5px] mb-1 font-mono uppercase tracking-[0.16em]">{d.signOff.classification}</div>
                  <div className="text-white/55 text-[13px] mb-1">Issued {d.signOff.date}</div>
                  <div className="text-white/55 text-[13px]">Document {d.document.number}</div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.10]">
                <p className="text-[13.5px] leading-[1.7] text-white/55 max-w-[760px]">{d.signOff.closing}</p>
              </div>

              <div className="mt-10 flex items-center justify-between text-[10.5px] font-mono uppercase tracking-[0.2em] text-white/35">
                <span>End of Dossier</span>
                <span>{d.document.classification}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
