"use client";
import { useEffect, useState } from "react";
import { PlanChart } from "./PlanChart";
import { motion, AnimatePresence } from "framer-motion";
import { PlanSectionHeader } from "./PlanSectionHeader";
import type {
  ContentAnalysisSection,
  ContentFinding,
  ContentExample,
} from "@/lib/plan-context";

const VERDICT_META: Record<
  ContentFinding["verdict"],
  { label: string; chip: string; dot: string }
> = {
  confirmed: {
    label: "Confirmed driver",
    chip: "border-accent/50 text-accent bg-accent/[0.08]",
    dot: "bg-accent",
  },
  partial: {
    label: "Contributing factor",
    chip: "border-warning/50 text-warning bg-warning/[0.08]",
    dot: "bg-warning",
  },
  refuted: {
    label: "Ruled out",
    chip: "border-success/50 text-success bg-success/[0.08]",
    dot: "bg-success",
  },
};

const READ_META: Record<string, { label: string; cls: string }> = {
  ahead: { label: "Ahead", cls: "border-success/50 text-success" },
  inline: { label: "In line", cls: "border-text-muted/40 text-text-muted" },
  behind: { label: "Behind", cls: "border-accent/50 text-accent" },
  neutral: { label: "Note", cls: "border-text-muted/40 text-text-muted" },
};

function ExampleEmbed({ ex }: { ex: ContentExample }) {
  const [loaded, setLoaded] = useState(false);
  const isTikTok = ex.platform === "tiktok";
  const src = isTikTok
    ? `https://www.tiktok.com/embed/v2/${ex.id}`
    : `https://www.instagram.com/reel/${ex.id}/embed/`;
  const href = isTikTok
    ? `https://www.tiktok.com/@lolaamourmusic/video/${ex.id}`
    : `https://www.instagram.com/reel/${ex.id}/`;

  return (
    <div className="flex-shrink-0 w-[300px] md:w-[325px] border border-text-muted/15 bg-bg overflow-hidden">
      <div className={`relative ${isTikTok ? "h-[575px]" : "h-[480px]"}`}>
        {loaded ? (
          <iframe
            src={src}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            scrolling="no"
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 bg-bg-card hover:bg-bg-card-hover transition-colors group cursor-pointer"
            aria-label={`Load post: ${ex.label}`}
          >
            <span className="w-12 h-12 rounded-full border border-accent/60 flex items-center justify-center group-hover:bg-accent/15 transition-colors">
              <span className="ml-1 text-accent text-[16px]">▶</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/80 px-4 text-center">
              {isTikTok ? "Load TikTok" : "Load Reel"}
            </span>
            {ex.stat && (
              <span className="text-[11px] font-mono text-accent/90 px-4 text-center">
                {ex.stat}
              </span>
            )}
          </button>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-3">
          <div
            className="text-[12px] font-bold text-text-primary leading-snug"
            style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
          >
            {ex.label}
          </div>
          {ex.date && (
            <div className="text-[10px] font-mono text-text-muted/60 whitespace-nowrap">
              {ex.date}
            </div>
          )}
        </div>
        <div className="mt-1 text-[10.5px] font-mono tracking-[0.08em] uppercase text-text-muted/70">
          {isTikTok ? "TikTok" : "Instagram"}
          {ex.stat ? ` / ${ex.stat}` : ""}
        </div>
        {ex.note && (
          <p className="mt-2 text-[12px] text-text-primary/75 leading-relaxed">{ex.note}</p>
        )}
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-[10px] font-mono tracking-[0.15em] uppercase text-text-muted/60 hover:text-accent transition-colors"
        >
          Open original ↗
        </a>
      </div>
    </div>
  );
}

function FindingModal({
  finding,
  onClose,
}: {
  finding: ContentFinding;
  onClose: () => void;
}) {
  const meta = VERDICT_META[finding.verdict];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[90] flex items-start md:items-center justify-center p-0 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={finding.title}
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full md:max-w-4xl max-h-full md:max-h-[88vh] overflow-y-auto bg-bg-elevated border border-text-muted/20"
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 px-6 md:px-10 pt-6 md:pt-8 pb-4 bg-bg-elevated/95 backdrop-blur-xl border-b border-text-muted/15">
          <div>
            <span
              className={`inline-flex items-center gap-2 px-2.5 py-1 border text-[10px] font-mono tracking-[0.18em] uppercase ${meta.chip}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
              {meta.label}
              {finding.confidence ? ` / ${finding.confidence}` : ""}
            </span>
            <h3
              className="mt-3 text-[22px] md:text-[28px] font-bold text-text-primary leading-tight pr-4"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              {finding.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 w-9 h-9 border border-text-muted/30 text-text-muted hover:text-text-primary hover:border-text-primary/60 transition-colors text-[16px] leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="px-6 md:px-10 py-6 md:py-8 space-y-8">
          <p className="text-[15px] md:text-[16px] text-text-primary/90 leading-relaxed max-w-3xl">
            {finding.summary}
          </p>

          <div>
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">
              What the corpus shows
            </div>
            <ul className="space-y-2.5">
              {finding.evidence.map((e, i) => (
                <li key={i} className="flex gap-3 text-[13.5px] text-text-primary/80 leading-relaxed">
                  <span className="text-accent/70 flex-shrink-0 mt-[2px]">▸</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>

          {finding.counterEvidence && finding.counterEvidence.length > 0 && (
            <div className="border border-text-muted/15 bg-bg p-5 md:p-6">
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-1">
                Adversarial check
              </div>
              <p className="text-[12px] text-text-muted/80 mb-3">
                Before keeping this finding, we tried to break it. This is what pushed back.
              </p>
              <ul className="space-y-2.5">
                {finding.counterEvidence.map((e, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-text-primary/75 leading-relaxed">
                    <span className="text-text-muted/50 flex-shrink-0 mt-[2px]">▹</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {finding.examples && finding.examples.length > 0 && (
            <div>
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60 mb-3">
                See it in the content
              </div>
              <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1">
                {finding.examples.map((ex, i) => (
                  <ExampleEmbed key={i} ex={ex} />
                ))}
              </div>
            </div>
          )}

          <div className="border border-accent/30 bg-accent/[0.05] p-5 md:p-6">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-accent mb-2">
              The pivot
            </div>
            <h4
              className="text-[17px] md:text-[19px] font-bold text-text-primary leading-tight"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              {finding.pivot.title}
            </h4>
            <ol className="mt-4 space-y-2.5">
              {finding.pivot.actions.map((a, i) => (
                <li key={i} className="flex gap-3 text-[13.5px] text-text-primary/85 leading-relaxed">
                  <span className="text-accent font-mono text-[11px] flex-shrink-0 mt-[3px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex items-center justify-between pt-2 pb-2">
            <img
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              className="h-4 w-auto opacity-50 select-none pointer-events-none"
            />
            <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-text-muted/50">
              Content Intelligence
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PlanContentAnalysis({ section }: { section: ContentAnalysisSection }) {
  const [open, setOpen] = useState<ContentFinding | null>(null);

  return (
    <section id={`section-${section.number}`} className="px-6 md:px-12 lg:px-24 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <PlanSectionHeader
          number={section.number}
          title={section.title}
          intro={section.intro}
        />

        {section.clientQuestion && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-l-2 border-accent pl-6 md:pl-8 py-2"
          >
            <p
              className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold text-text-primary leading-snug max-w-3xl"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              &ldquo;{section.clientQuestion.question}&rdquo;
            </p>
            <p className="mt-3 text-[11px] font-mono tracking-[0.2em] uppercase text-text-muted/70">
              {section.clientQuestion.attribution}
            </p>
          </motion.div>
        )}

        {section.methodology && section.methodology.length > 0 && (
          <div className="mb-12 border border-text-muted/15 bg-bg-card">
            <div className="flex items-center justify-between gap-4 px-5 md:px-7 pt-5">
              <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-text-muted/60">
                How this analysis was built
              </div>
              <img
                src="/brand/CC-LOGO-2024-WHITE.png"
                alt="Crowd Control Digital"
                className="h-4 w-auto opacity-60 select-none pointer-events-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 px-5 md:px-7 py-5">
              {section.methodology.map((m, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[10px] font-mono text-accent mt-[3px] flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-[12px] font-mono tracking-[0.08em] uppercase text-text-primary/90">
                      {m.label}
                    </div>
                    <div className="mt-1 text-[12.5px] text-text-muted leading-relaxed">
                      {m.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section.corpusStats && section.corpusStats.length > 0 && (
          <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-3">
            {section.corpusStats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border border-text-muted/15 bg-bg-card p-5"
              >
                <div className="display text-[26px] md:text-[32px] text-text-primary leading-none">
                  {s.value}
                </div>
                <div className="mt-2 text-[10.5px] font-mono tracking-[0.14em] uppercase text-text-muted/70">
                  {s.label}
                </div>
                {s.detail && (
                  <div className="mt-1.5 text-[11.5px] text-text-muted/80 leading-snug">
                    {s.detail}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {section.mixRows && section.mixRows.length > 0 && (
          <div className="mb-16">
            {section.mixHeading && (
              <h3
                className="text-[22px] md:text-[26px] font-bold text-text-primary leading-tight"
                style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
              >
                {section.mixHeading}
              </h3>
            )}
            {section.mixIntro && (
              <p className="mt-3 mb-6 text-[14px] md:text-[15px] text-text-muted leading-relaxed max-w-3xl">
                {section.mixIntro}
              </p>
            )}
            <div className="border border-text-muted/15 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead>
                  <tr className="border-b border-text-muted/15 bg-bg-card">
                    <th className="px-5 py-3 text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70 font-normal">
                      Behavior
                    </th>
                    <th className="px-5 py-3 text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70 font-normal">
                      {section.mixColumnLabel ?? "Lola Amour today"}
                    </th>
                    <th className="px-5 py-3 text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70 font-normal">
                      2026 benchmark
                    </th>
                    <th className="px-5 py-3 text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted/70 font-normal">
                      Read
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {section.mixRows.map((r, i) => (
                    <tr key={i} className="border-b border-text-muted/10 last:border-b-0">
                      <td className="px-5 py-4 text-[13px] text-text-primary/90 leading-snug align-top">
                        {r.metric}
                        {r.note && (
                          <div className="mt-1 text-[11.5px] text-text-muted/70 leading-snug">
                            {r.note}
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-text-primary/80 leading-snug align-top">
                        {r.lolaAmour}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-text-muted leading-snug align-top">
                        {r.benchmark}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span
                          className={`inline-block px-2 py-1 border text-[10px] font-mono tracking-[0.14em] uppercase whitespace-nowrap ${
                            READ_META[r.read]?.cls ?? READ_META.neutral.cls
                          }`}
                        >
                          {READ_META[r.read]?.label ?? r.read}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {section.mixFootnote && (
              <p className="mt-4 text-[12px] font-mono text-text-muted/70 leading-relaxed">
                {section.mixFootnote}
              </p>
            )}
          </div>
        )}

        <div>
          {section.charts && section.charts.length > 0 && (
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {section.charts.map((c, ci) => (
                <PlanChart key={ci} spec={c} />
              ))}
            </div>
          )}
          {section.findingsHeading && (
            <h3
              className="text-[22px] md:text-[26px] font-bold text-text-primary leading-tight"
              style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
            >
              {section.findingsHeading}
            </h3>
          )}
          {section.findingsIntro && (
            <p className="mt-3 text-[14px] md:text-[15px] text-text-muted leading-relaxed max-w-3xl">
              {section.findingsIntro}
            </p>
          )}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.findings.map((f, i) => {
              const meta = VERDICT_META[f.verdict];
              return (
                <motion.button
                  key={f.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
                  onClick={() => setOpen(f)}
                  className="group text-left border border-text-muted/15 bg-bg-card hover:border-accent/50 transition-colors p-6 md:p-7 cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`inline-flex items-center gap-2 px-2.5 py-1 border text-[10px] font-mono tracking-[0.18em] uppercase ${meta.chip}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${meta.dot}`} />
                      {meta.label}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4
                    className="mt-4 text-[18px] md:text-[20px] font-bold text-text-primary leading-tight"
                    style={{ fontFamily: "var(--font-heading), var(--font-sans), sans-serif" }}
                  >
                    {f.title}
                  </h4>
                  <p className="mt-3 text-[13px] text-text-primary/70 leading-relaxed">
                    {f.summary}
                  </p>
                  <div className="mt-5 text-[11px] font-mono tracking-[0.18em] uppercase text-text-muted/60 group-hover:text-accent transition-colors">
                    Evidence + pivot ↗
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {section.footnote && (
          <p className="mt-12 text-[12.5px] font-mono text-text-muted/70 leading-relaxed border-l-2 border-accent/40 pl-4">
            {section.footnote}
          </p>
        )}
      </div>

      <AnimatePresence>
        {open && <FindingModal finding={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
