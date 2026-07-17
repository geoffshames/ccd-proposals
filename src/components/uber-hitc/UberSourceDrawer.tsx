"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOURCES } from "@/lib/uber-hitc";

/** Floating source ledger trigger + drawer. Every claim on the page traces here. */
export function UberSourceDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="fixed bottom-6 right-6 z-50 border border-text-muted/30 bg-bg/90 backdrop-blur px-4 py-2.5 text-[10px] font-mono tracking-[0.2em] uppercase text-text-muted hover:text-accent hover:border-accent/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Sources ({SOURCES.length})
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-bg/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Source ledger"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-xl bg-bg-card border-l border-text-muted/20 overflow-y-auto"
            >
              <div className="sticky top-0 bg-bg-card border-b border-text-muted/15 px-6 md:px-8 py-5 flex items-center justify-between">
                <div>
                  <h2 className="text-[16px] font-bold text-text-primary">Source ledger</h2>
                  <p className="text-[11px] font-mono text-text-muted/70 mt-0.5">Every claim, traced. Estimates labeled.</p>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close sources"
                  className="text-text-muted hover:text-accent text-2xl leading-none px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  ×
                </button>
              </div>
              <ul className="px-6 md:px-8 py-6 space-y-6">
                {SOURCES.map((s, i) => (
                  <li key={i} className="border-b border-text-muted/10 pb-5 last:border-0">
                    <p className="text-[14px] text-text-primary/90 leading-snug">{s.claim}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-mono text-text-muted/70">
                      <span className={`px-1.5 py-0.5 border ${s.type.includes("Estimate") ? "border-accent/40 text-accent" : "border-text-muted/30"}`}>
                        {s.type}
                      </span>
                      <span>{s.date}</span>
                    </div>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-block text-[11.5px] font-mono text-text-muted hover:text-accent underline underline-offset-4 decoration-text-muted/30 hover:decoration-accent transition-colors break-all"
                    >
                      {s.source} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
