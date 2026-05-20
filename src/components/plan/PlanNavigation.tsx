"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePlan } from "@/lib/plan-context";

function deriveNavLabel(section: { navLabel?: string; title: string }): string {
  if (section.navLabel) return section.navLabel;
  let t = section.title.replace(/^Vertical\s+\d+\s*\/\s*/i, "").trim();
  t = t.replace(/\s+&\s+.*$/, "").trim();
  return t;
}

export function PlanNavigation() {
  const PLAN = usePlan();
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = useMemo(
    () =>
      PLAN.sections.map((s) => ({
        number: s.number,
        label: deriveNavLabel(s),
        href: `#section-${s.number}`,
      })),
    [PLAN.sections]
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 600);
      const probe = window.innerHeight * 0.28;
      let current = "";
      let bestDist = Infinity;
      for (const item of items) {
        const el = document.querySelector(item.href);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe) {
          const dist = probe - rect.top;
          if (dist < bestDist) {
            bestDist = dist;
            current = item.href;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items]);

  const activeItem = items.find((i) => i.href === active);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/85 border-b border-text-muted/15"
          aria-label="Plan sections"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center gap-3 md:gap-4 pr-16 md:pr-28 lg:pr-36">
            {/* Mobile hamburger - LEFT side so it clears the floating language toggle */}
            <button
              className="md:hidden p-2 -ml-2 flex-shrink-0 relative z-[70]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle sections menu"
              aria-expanded={mobileOpen}
            >
              <div className="space-y-1.5">
                <div className={`w-5 h-px bg-text-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
                <div className={`w-5 h-px bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
                <div className={`w-5 h-px bg-text-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
              </div>
            </button>

            {/* Brand label - very compact */}
            <a
              href="#cover"
              className="text-[10px] md:text-[11px] font-mono tracking-[0.18em] text-text-muted hover:text-text-primary uppercase whitespace-nowrap transition-colors flex-shrink-0"
            >
              {PLAN.cover.title}
            </a>

            {/* === Desktop nav (xl+): full labels with dot separators === */}
            <div className="hidden xl:flex items-center flex-1 justify-center gap-0">
              {items.map((item, i) => (
                <div key={item.href} className="flex items-center">
                  <a
                    href={item.href}
                    className={`px-2 py-1 text-[10px] font-mono tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                      active === item.href
                        ? "text-accent font-bold"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                    onClick={() => setActive(item.href)}
                  >
                    {item.label}
                  </a>
                  {i < items.length - 1 && (
                    <span className="text-text-muted/25 text-[10px] select-none" aria-hidden="true">
                      ·
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* === Mid nav (md to xl): numbers only + active label reveal === */}
            <div className="hidden md:flex xl:hidden items-center flex-1 justify-center gap-0">
              {items.map((item, i) => (
                <div key={item.href} className="flex items-center">
                  <a
                    href={item.href}
                    title={item.label}
                    className={`px-2 py-1 text-[10px] font-mono tracking-[0.12em] transition-colors whitespace-nowrap ${
                      active === item.href
                        ? "text-accent font-bold"
                        : "text-text-muted/70 hover:text-text-primary"
                    }`}
                    onClick={() => setActive(item.href)}
                  >
                    {item.number}
                  </a>
                  {i < items.length - 1 && (
                    <span className="text-text-muted/20 text-[10px] select-none" aria-hidden="true">
                      ·
                    </span>
                  )}
                </div>
              ))}
              {activeItem && (
                <span className="ml-3 text-[10px] font-mono tracking-[0.15em] uppercase text-accent whitespace-nowrap">
                  / {activeItem.label}
                </span>
              )}
            </div>

            {/* Right: Approve CTA (desktop only). Mobile hamburger lives on the left. */}
            <a
              href="#approve"
              className="hidden md:inline-flex ml-auto flex-shrink-0 text-[10px] md:text-[11px] font-mono tracking-[0.14em] uppercase text-white bg-accent px-3 md:px-4 py-1.5 md:py-2 hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Approve
            </a>
          </div>

          {/* Mobile menu drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden border-t border-text-muted/15 overflow-hidden bg-bg/95 backdrop-blur-xl"
              >
                <div className="max-w-7xl mx-auto px-4 py-3 space-y-1">
                  {items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-baseline gap-3 px-3 py-3 text-[13px] font-mono uppercase tracking-[0.1em] transition-colors border-b border-text-muted/10 last:border-b-0 ${
                        active === item.href
                          ? "text-accent"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-text-muted/50 text-[11px] tabular-nums w-6">{item.number}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                  <a
                    href="#approve"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 flex items-center justify-center px-3 py-3.5 text-[12px] font-mono uppercase tracking-[0.18em] text-white bg-accent"
                  >
                    Approve
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
