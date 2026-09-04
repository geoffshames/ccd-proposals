"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { MouseEvent } from "react";
import styles from "./nav.module.css";

export interface ProposalNavItem {
  id: string;
  label: string;
}

export interface ProposalNavProps {
  items: ProposalNavItem[];
  label: string;
  scrollHint: string;
  previousLabel: string;
  nextLabel: string;
}

function motionBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function Chevron({ reverse = false }: { reverse?: boolean }) {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
    <path d={reverse ? "M15 6 9 12l6 6" : "m9 6 6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
  </svg>;
}

export default function ProposalNav({ items, label, scrollHint, previousLabel, nextLabel }: ProposalNavProps) {
  const generatedId = useId();
  const stripId = `${generatedId}-strip`;
  const hintId = `${generatedId}-hint`;
  const nav = useRef<HTMLElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const links = useRef(new Map<string, HTMLAnchorElement>());
  const pointerDown = useRef(false);
  const manualUntil = useRef(0);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [edges, setEdges] = useState({ overflow: false, previous: false, next: false });
  // Stable across unrelated parent updates, including the budget switch.
  const itemIds = items.map(item => item.id).join("\u0000");

  useEffect(() => {
    const sections = itemIds.split("\u0000").filter(Boolean).map(id => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;
    let hashFrame = 0;
    let previousId = "";

    const updateSection = () => {
      frame = 0;
      const boundary = (nav.current?.getBoundingClientRect().height ?? 66) + 28;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= boundary) current = section.id;
        else break;
      }
      if (current !== previousId) {
        previousId = current;
        setActiveId(current);
      }
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(updateSection);
    };
    const followHash = () => {
      window.cancelAnimationFrame(hashFrame);
      hashFrame = window.requestAnimationFrame(() => {
        let id: string;
        try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
        const target = id && document.getElementById(id);
        if (!target) return;
        const configuredMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop);
        const margin = configuredMargin || (nav.current?.getBoundingClientRect().height ?? 66) + 24;
        // Hash entry and browser history should land immediately, including reduced motion.
        window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - margin), behavior: "instant" });
        schedule();
      });
    };
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    if (nav.current) observer?.observe(nav.current);
    sections.forEach(section => observer?.observe(section));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", followHash);
    window.addEventListener("popstate", followHash);
    schedule();
    if (window.location.hash) followHash();
    return () => {
      window.cancelAnimationFrame(frame);
      window.cancelAnimationFrame(hashFrame);
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", followHash);
      window.removeEventListener("popstate", followHash);
    };
  }, [itemIds]);

  useEffect(() => {
    const element = strip.current;
    if (!element) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      const max = element.scrollWidth - element.clientWidth;
      const next = { overflow: max > 2, previous: element.scrollLeft > 2, next: element.scrollLeft < max - 2 };
      setEdges(current => current.overflow === next.overflow && current.previous === next.previous && current.next === next.next ? current : next);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(measure);
    };
    const finishGesture = () => {
      if (!pointerDown.current) return;
      pointerDown.current = false;
      manualUntil.current = performance.now() + 1200;
    };
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(schedule) : null;
    observer?.observe(element);
    if (list.current) observer?.observe(list.current);
    element.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("pointerup", finishGesture);
    window.addEventListener("pointercancel", finishGesture);
    schedule();
    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      element.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("pointerup", finishGesture);
      window.removeEventListener("pointercancel", finishGesture);
    };
  }, [itemIds]);

  useEffect(() => {
    const element = strip.current;
    const active = links.current.get(activeId);
    if (!element || !active || pointerDown.current || performance.now() < manualUntil.current) return;
    const viewport = element.getBoundingClientRect();
    const tab = active.getBoundingClientRect();
    const inset = 18;
    const delta = tab.left < viewport.left + inset
      ? tab.left - viewport.left - inset
      : tab.right > viewport.right - inset ? tab.right - viewport.right + inset : 0;
    if (delta) element.scrollTo({ left: element.scrollLeft + delta, behavior: motionBehavior() });
    // Deliberately only follows section changes, never a user's strip scroll.
  }, [activeId]);

  const moveStrip = (direction: -1 | 1) => {
    const element = strip.current;
    if (!element) return;
    manualUntil.current = performance.now() + 1200;
    element.scrollBy({ left: direction * Math.max(160, element.clientWidth * 0.7), behavior: motionBehavior() });
  };

  const visitSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const hash = `#${encodeURIComponent(id)}`;
    if (window.location.hash !== hash) window.history.pushState(null, "", hash);
    const configuredMargin = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop);
    const margin = configuredMargin || (nav.current?.getBoundingClientRect().height ?? 66) + 24;
    window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - margin), behavior: motionBehavior() });
  };

  return <nav ref={nav} className={styles.nav} aria-label={label} data-overflow={edges.overflow}>
    <div className={styles.inner}>
      <div className={styles.hint} id={hintId}><span>{scrollHint}</span><svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true"><path d="m4 2-4 4 4 4M1 6h22m-3-4 4 4-4 4" stroke="currentColor" /></svg></div>
      <div className={styles.row}>
        <button className={styles.arrow} type="button" aria-label={previousLabel} aria-controls={stripId} disabled={!edges.previous} hidden={!edges.overflow} onClick={() => moveStrip(-1)}><Chevron reverse /></button>
        <div className={styles.track} data-previous={edges.previous} data-next={edges.next}>
          <div ref={strip} id={stripId} className={styles.strip} aria-describedby={edges.overflow ? hintId : undefined}
            onPointerDown={() => { pointerDown.current = true; manualUntil.current = performance.now() + 1200; }}
            onWheel={event => { if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) manualUntil.current = performance.now() + 1200; }}>
            <ul ref={list} className={styles.list}>
              {items.map((item, index) => <li key={item.id}><a
                ref={element => { if (element) links.current.set(item.id, element); else links.current.delete(item.id); }}
                className={styles.link} href={`#${encodeURIComponent(item.id)}`} aria-current={activeId === item.id ? "location" : undefined}
                onClick={event => visitSection(event, item.id)}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item.label}</a></li>)}
            </ul>
          </div>
        </div>
        <button className={styles.arrow} type="button" aria-label={nextLabel} aria-controls={stripId} disabled={!edges.next} hidden={!edges.overflow} onClick={() => moveStrip(1)}><Chevron /></button>
      </div>
    </div>
  </nav>;
}
