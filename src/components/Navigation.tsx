"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProject } from "@/lib/project-context";
import { useScrolled } from "@/lib/use-scrolled";
import { LanguageSwitch } from "@/components/LanguageSwitch";

const BASE_NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Timeline", href: "#timeline" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Scope", href: "#scope" },
];

const PRICING_NAV_ITEM = { label: "Pricing", href: "#tiers" };
const FLIGHT_PRICING_NAV_ITEM = { label: "Pricing", href: "#media-flight" };
const INVESTMENT_NAV_ITEM = { label: "Investment", href: "#investment" };

export function Navigation() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(100);
  const PROJECT = useProject();
  const hasOverview =
    !!PROJECT.overview?.summary || (PROJECT.overview?.objectives?.length ?? 0) > 0;
  const NAV_ITEMS = [
    ...(hasOverview ? [BASE_NAV_ITEMS[0]] : []),
    ...(PROJECT.tiers?.tiers?.length
      ? [PRICING_NAV_ITEM]
      : PROJECT.mediaFlight
        ? [FLIGHT_PRICING_NAV_ITEM]
        : []),
    ...BASE_NAV_ITEMS.slice(1).filter((item) => {
      if (item.href === "#deliverables") return !!PROJECT.deliverables?.length;
      if (item.href === "#timeline") return !!PROJECT.timeline?.length;
      if (item.href === "#scope")
        return (
          (PROJECT.scope?.included?.length ?? 0) > 0 ||
          (PROJECT.scope?.excluded?.length ?? 0) > 0
        );
      return true;
    }),
    ...(PROJECT.quote ? [INVESTMENT_NAV_ITEM] : []),
  ];
  const hasAlternates = !!PROJECT.languageAlternates?.length;

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, top: 0 };
        return { id: item.href, top: el.getBoundingClientRect().top };
      });

      const current = sections.reduce((closest, section) => {
        if (section.top <= 200 && section.top > closest.top) return section;
        return closest;
      }, { id: "", top: -Infinity });

      setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-border"
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 h-14 flex items-center justify-between gap-3 md:gap-4">
            <span className="min-w-0 truncate text-[12px] font-mono tracking-[0.15em] text-text-muted uppercase">
              {PROJECT.client.name} <span className="text-text-muted/30">×</span> {PROJECT.studio.name}
            </span>

            {/* Right cluster: desktop nav + language toggle + CTA, always spaced via gap */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              {/* Desktop section nav */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 text-[11px] font-mono tracking-[0.05em] uppercase transition-all duration-300 ${
                      active === item.href
                        ? "text-accent"
                        : "text-text-muted hover:text-text-secondary"
                    }`}
                    onClick={() => setActive(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Language toggle: inline flex child, never overlaps the CTA */}
              {hasAlternates && <LanguageSwitch compact />}

              {!PROJECT.internal && (
                <a
                  href="#next-steps"
                  className="hidden md:block text-[11px] font-mono tracking-[0.1em] uppercase text-bg bg-accent px-5 py-2 hover:bg-accent/90 transition-colors whitespace-nowrap"
                >
                  Contact
                </a>
              )}

              {/* Mobile hamburger */}
              <button
                className="md:hidden p-2 -mr-2"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
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
                className="md:hidden border-t border-border overflow-hidden"
              >
                <div className="p-4 space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-[12px] font-mono text-text-secondary hover:text-text-primary uppercase tracking-[0.1em]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#next-steps"
                    className="block mt-2 text-center text-[12px] font-mono tracking-[0.1em] uppercase text-bg bg-accent px-5 py-2.5 hover:bg-accent/90 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact
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
