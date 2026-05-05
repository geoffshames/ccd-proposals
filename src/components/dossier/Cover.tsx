"use client";
import { useDossier } from "@/lib/dossier-context";

export function Cover() {
  const d = useDossier();
  const heroBg = d.images?.heroBg;
  return (
    <section className="relative border-b border-white/[0.10] min-h-[88vh] flex flex-col overflow-hidden">
      {heroBg && (
        <>
          <div className="absolute inset-0 -z-10" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} aria-hidden />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg via-bg/85 to-bg/55" aria-hidden />
        </>
      )}
      <div className="border-b border-white/[0.10]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 py-5 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-white/55">
          <span>{d.document.classification}</span>
          <span>Dossier {d.document.number}</span>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 py-16 sm:py-24 w-full">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent mb-8">
            Catalog Reactivation Dossier
          </div>
          <h1
            className="font-bold uppercase leading-[0.92] tracking-tight text-white"
            style={{
              fontFamily: "var(--font-heading), var(--font-sans), sans-serif",
              fontSize: "clamp(3rem, 9vw, 7.5rem)",
            }}
          >
            {d.subject.name}
          </h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 max-w-[920px] border-t border-white/[0.10] pt-8">
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Subject
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5]">
                {d.subject.kind === "label" ? "Label catalog" : d.subject.kind}
                <br />
                <span className="text-white/55">{d.subject.coverage}</span>
              </div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Parent Entity
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5]">
                {d.subject.parentEntity}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Issued
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5]">
                {d.document.date}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Prepared By
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5]">
                {d.document.preparedBy}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Prepared For
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5]">
                {d.document.preparedFor}
              </div>
            </div>
            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-white/45 mb-2">
                Document Number
              </div>
              <div className="text-[15px] text-white/85 leading-[1.5] font-mono">
                {d.document.number}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.10]">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 py-5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/45 flex justify-between">
          <span>Page 01 of 14</span>
          <span>{d.document.classification}</span>
        </div>
      </div>
    </section>
  );
}
