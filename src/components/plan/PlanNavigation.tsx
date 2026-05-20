"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePlan } from "@/lib/plan-context";

function deriveNavLabel(section: { navLabel?: string; title: string }): string {
  if (section.navLabel) return section.navLabel;
  // Heuristic: strip "Vertical N / " prefix, then take up to the first delimiter.
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

      // Find the section nearest to a point ~25% down the viewport
      const probe = window.innerHeight * 0.25;
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between gap-3 pr-20 md:pr-32 lg:pr-36">
            {/* Brand label */}
            <a
              href="#cover"
              className="text-[11px] font-mono tracking-[0.18em] text-text-muted hover:text-text-primary uppercase whitespace-nowrap transition-colors"
            >
              {PLAN.cover.title}{" "}
              <span className="text-text-muted/30">×</span>{" "}
              <span className="hidden sm:inline">{PLAN.cover.label}</span>
              <span className="sm:hidden">Plan</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5 overflow-x-auto">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative px-2.5 py-1.5 text-[11px] font-mono tracking-[0.05em] uppercase transition-colors whitespace-nowrap ${
                    active === item.href
                      ? "text-accent"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                  onClick={() => setActive(item.href)}
                >
                  <span className="text-text-muted/50 mr-1.5">{item.number}</span>
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right-side CTA + Mobile hamburger */}
            <div className="flex items-center gap-2">
              <a
                href="#approve"
                className="hidden md:inline-flex text-[11px] font-mono tracking-[0.12em] uppercase text-white bg-accent px-4 py-2 hover:bg-accent/90 transition-colors"
              >
                Approve
              </a>
              <button
                className="lg:hidden p-2"
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
            </div>
          </div>

          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden border-t border-text-muted/15 overflow-hidden"
              >
                <div className="p-3 max-w-7xl mx-auto grid grid-cols-2 gap-1">
                  {items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2.5 text-[12px] font-mono uppercase tracking-[0.08em] transition-colors ${
                        active === item.href
                          ? "text-accent bg-white/[0.04]"
                          : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-text-muted/50">{item.number}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                  <a
                    href="#approve"
                    className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 px-3 py-3 text-[12px] font-mono uppercase tracking-[0.12em] text-white bg-accent"
                    onClick={() => setMobileOpen(false)}
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
