"use client";

import {
  type MouseEvent as ReactMouseEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./mobile-sections-nav.module.css";

export type MobileSectionItem = Readonly<{
  label: string;
  href: `#${string}`;
}>;

export const championTeamwearSections = [
  { label: "Read", href: "#read" },
  { label: "Diagnosis", href: "#diagnosis" },
  { label: "Sentiment", href: "#sentiment" },
  { label: "Landscape", href: "#landscape" },
  { label: "Strategy", href: "#strategy" },
  { label: "90 Days", href: "#roadmap" },
  { label: "Paths", href: "#paths" },
] as const satisfies readonly MobileSectionItem[];

type MobileSectionsNavProps = Readonly<{
  className?: string;
  items?: readonly MobileSectionItem[];
}>;

export function MobileSectionsNav({
  className,
  items = championTeamwearSections,
}: MobileSectionsNavProps) {
  const drawerId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeHref, setActiveHref] = useState<`#${string}`>(
    items[0]?.href ?? "#read",
  );

  const hrefs = useMemo(() => new Set(items.map((item) => item.href)), [items]);
  const activeLabel =
    items.find((item) => item.href === activeHref)?.label ?? items[0]?.label ?? "Read";

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 620px)");

    const updateMotionPreference = () => setPrefersReducedMotion(motionQuery.matches);
    const closeAboveMobile = () => {
      if (!mobileQuery.matches) setOpen(false);
    };

    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);
    mobileQuery.addEventListener("change", closeAboveMobile);

    return () => {
      motionQuery.removeEventListener("change", updateMotionPreference);
      mobileQuery.removeEventListener("change", closeAboveMobile);
    };
  }, []);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash as `#${string}`;
      if (hrefs.has(hash)) setActiveHref(hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [hrefs]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const targets = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((target): target is HTMLElement => target !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - 72) -
              Math.abs(b.boundingClientRect.top - 72),
          );

        const current = visible[0]?.target as HTMLElement | undefined;
        if (current?.id) setActiveHref(`#${current.id}`);
      },
      {
        // Track the section occupying the reading zone immediately below the sticky nav.
        rootMargin: "-72px 0px -75% 0px",
        threshold: [0, 0.01],
      },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    const closeOnOutsidePointer = (event: PointerEvent) => {
      const target = event.target;
      if (target instanceof Node && !rootRef.current?.contains(target)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [open]);

  const handleSectionClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    href: `#${string}`,
  ) => {
    setOpen(false);
    setActiveHref(href);

    if (!prefersReducedMotion) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "auto", block: "start" });
    if (window.location.hash !== href) window.history.pushState(null, "", href);
  };

  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <div ref={rootRef} className={rootClassName}>
      <button
        ref={triggerRef}
        className={styles.trigger}
        type="button"
        aria-expanded={open}
        aria-controls={drawerId}
        onClick={() => setOpen((current) => !current)}
      >
        <span className={styles.triggerLabel}>Sections</span>
        <span className={styles.activeLabel}>{activeLabel}</span>
        <span className={styles.triggerState} aria-hidden="true">
          {open ? "Close" : "Open"}
        </span>
      </button>

      {open && (
        <div
          id={drawerId}
          className={styles.drawer}
          role="group"
          aria-label="Report sections"
        >
          <ul className={styles.list}>
            {items.map((item) => {
              const active = item.href === activeHref;
              return (
                <li key={item.href}>
                  <a
                    className={styles.link}
                    href={item.href}
                    aria-current={active ? "location" : undefined}
                    onClick={(event) => handleSectionClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
