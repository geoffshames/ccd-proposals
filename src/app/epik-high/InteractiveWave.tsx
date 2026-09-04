"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import styles from "./wave.module.css";

export interface InteractiveWavePhase {
  name: string;
  action: string;
  detail: string;
}

export interface InteractiveWaveLabels {
  eyebrow: string;
  caption: string;
  play: string;
  pause: string;
  scrub: string;
  selectPhase: string;
  reducedMotion: string;
  phases: [InteractiveWavePhase, InteractiveWavePhase, InteractiveWavePhase];
}

export interface InteractiveWaveProps {
  labels: InteractiveWaveLabels;
}

const MARKS = ["D−14", "D0", "D+4"] as const;
const PHASE_STOPS = [0.24, 0.52, 0.79] as const;
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const LOOP_SECONDS = 18;

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(MOTION_QUERY);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
function readMotion() { return window.matchMedia(MOTION_QUERY).matches; }
function reducedOnServer() { return true; }
function subscribeVisibility(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
function readVisibility() { return document.visibilityState === "visible"; }
function hiddenOnServer() { return false; }

function phaseAt(progress: number) {
  return progress < 0.43 ? 0 : progress < 0.61 ? 1 : 2;
}
function localProgress(progress: number, phase: number) {
  if (phase === 0) return progress / 0.43;
  if (phase === 1) return (progress - 0.43) / 0.18;
  return (progress - 0.61) / 0.39;
}

// The curves describe the campaign rhythm only; neither height nor dots encode data.
function pointAt(phase: number, position: number) {
  const t = Math.max(0, Math.min(1, position));
  if (phase === 0) return { x: 44 + t * 406, y: 230 - 132 * Math.pow(Math.sin(Math.PI * t), 1.55) };
  if (phase === 1) return { x: 440 + t * 120, y: 230 - 187 * Math.exp(-Math.pow((t - 0.5) / 0.21, 2)) };
  return { x: 550 + t * 406, y: 230 - 107 * Math.pow(Math.sin(Math.PI * t), 1.8) };
}

const PATHS = [0, 1, 2].map(phase => Array.from({ length: 91 }, (_, index) => {
  const { x, y } = pointAt(phase, index / 90);
  return `${index ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
}).join(" "));

const DOTS = [0, 1, 2].flatMap(phase => Array.from({ length: phase === 1 ? 17 : 27 }, (_, index) => ({
  phase,
  index,
  count: phase === 1 ? 17 : 27,
  offset: Math.sin(index * 2.71 + phase * 1.83) * 19,
  radius: 1.35 + (index % 4) * 0.42,
})));

export default function InteractiveWave({ labels }: InteractiveWaveProps) {
  const id = useId();
  const container = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState<number>(0.18);
  const [playing, setPlaying] = useState(true);
  const [inView, setInView] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeMotion, readMotion, reducedOnServer);
  const pageVisible = useSyncExternalStore(subscribeVisibility, readVisibility, hiddenOnServer);
  const phase = phaseAt(progress);
  const local = localProgress(progress, phase);
  const selected = labels.phases[phase];
  const running = playing && !reducedMotion && inView && pageVisible;
  const marker = pointAt(phase, local);
  const progressStyle = { "--wave-progress": `${progress * 100}%` } as CSSProperties;

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    let frame = 0;
    let last = 0;
    const tick = (now: number) => {
      if (!last) last = now;
      const elapsed = now - last;
      // A small SVG scene at ~30fps keeps the interaction inexpensive on phones.
      if (elapsed >= 32) {
        const step = Math.min(elapsed, 80) / (LOOP_SECONDS * 1000);
        setProgress(previous => (previous + step) % 1);
        last = now;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [running]);

  const selectPhase = (index: number) => {
    setPlaying(false);
    setProgress(PHASE_STOPS[index]);
  };

  return (
    <figure ref={container} className={styles.wave} aria-describedby={`${id}-caption`} data-phase={phase}>
      <div className={styles.heading}>
        <div className={styles.headingCopy}>
          <p className={styles.eyebrow}>{labels.eyebrow}</p>
          <h3 id={`${id}-title`} className={styles.action}>{selected.action}</h3>
          <p className={styles.detail} id={`${id}-detail`}>{selected.detail}</p>
        </div>
        <button
          type="button"
          className={styles.play}
          onClick={() => setPlaying(value => !value)}
          disabled={reducedMotion}
          aria-label={playing && !reducedMotion ? labels.pause : labels.play}
          aria-describedby={reducedMotion ? `${id}-motion` : undefined}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            {playing && !reducedMotion ? <><path d="M8 6v12M16 6v12" fill="none" stroke="currentColor" strokeWidth="3" /></> : <path d="m8 5 11 7-11 7z" fill="currentColor" />}
          </svg>
          <span>{playing && !reducedMotion ? labels.pause : labels.play}</span>
        </button>
      </div>

      <div className={styles.stage} aria-hidden="true">
        <svg className={styles.visual} viewBox="0 0 1000 305" focusable="false">
          <path d="M44 247H956" className={styles.baseline} />
          <path d="M500 17V260" className={styles.showGuide} />
          <path d="M44 259v7m456-7v7m456-7v7" className={styles.ticks} />
          {[0, 1, 2].map(index => (
            <g key={index} className={index === phase ? styles.activePath : styles.quietPath}>
              <path d={PATHS[index]} className={index === 1 ? styles.whiteTrail : styles.redTrail} />
              <path d={PATHS[index]} transform={`translate(0 ${index === 1 ? -9 : 14})`} className={styles.echoTrail} />
            </g>
          ))}
          {DOTS.map(dot => {
            const active = dot.phase === phase;
            const position = (dot.index / dot.count + (active ? local * 0.46 : 0)) % 1;
            const point = pointAt(dot.phase, position);
            const drift = active ? Math.sin(local * Math.PI * 2 + dot.index) * 3 : 0;
            return <circle
              key={`${dot.phase}-${dot.index}`}
              className={styles.particle}
              cx={point.x.toFixed(4)}
              cy={(point.y + dot.offset + drift).toFixed(4)}
              r={dot.radius.toFixed(4)}
              fill={dot.phase === 1 ? "#FAFAFA" : "#FD3737"}
              opacity={(active ? 0.38 + (dot.index % 5) * 0.13 : 0.16).toFixed(4)}
            />;
          })}
          <g opacity={phase === 1 ? 1 : 0.2}>
            {[0, 1].map(index => {
              const pulse = phase === 1 ? (local * 1.2 + index * 0.5) % 1 : 0.3 + index * 0.4;
              return <circle key={index} cx="500" cy="43" r={(12 + pulse * 35).toFixed(4)} fill="none" stroke="#FAFAFA" strokeWidth="1" opacity={((1 - pulse) * 0.5).toFixed(4)} />;
            })}
            <path d="M500 31v24m-12-12h24m-20.5-8.5 17 17m0-17-17 17" className={styles.star} />
          </g>
          <circle cx={marker.x.toFixed(4)} cy={marker.y.toFixed(4)} r="15" className={styles.markerHalo} />
          <circle cx={marker.x.toFixed(4)} cy={marker.y.toFixed(4)} r="5.5" fill={phase === 1 ? "#FAFAFA" : "#FD3737"} />
          <circle cx={marker.x.toFixed(4)} cy={marker.y.toFixed(4)} r="2" fill="#0A0A0A" />
          <text x="44" y="290" className={styles.date}>{MARKS[0]}</text>
          <text x="500" y="290" textAnchor="middle" className={styles.date}>{MARKS[1]}</text>
          <text x="956" y="290" textAnchor="end" className={styles.date}>{MARKS[2]}</text>
        </svg>
      </div>

      <div className={styles.phaseControls} role="group" aria-label={labels.selectPhase}>
        {labels.phases.map((item, index) => (
          <button key={index} type="button" className={styles.phaseButton} aria-pressed={phase === index} onClick={() => selectPhase(index)}>
            <span className={styles.phaseNumber} aria-hidden="true">0{index + 1}</span>
            <span className={styles.phaseName}>{item.name}</span>
            <span className={styles.phaseMark}>{MARKS[index]}</span>
          </button>
        ))}
      </div>

      <div className={styles.scrubber} style={progressStyle}>
        <label htmlFor={`${id}-scrub`}>{labels.scrub}</label>
        <input
          id={`${id}-scrub`}
          type="range"
          min="0"
          max="1000"
          step="1"
          value={Math.round(progress * 1000)}
          aria-valuetext={`${selected.name} · ${selected.detail}`}
          aria-describedby={`${id}-caption`}
          onFocus={() => setPlaying(false)}
          onChange={event => { setPlaying(false); setProgress(Number(event.target.value) / 1000); }}
          className={styles.range}
        />
      </div>
      {reducedMotion && <p id={`${id}-motion`} className={styles.motionNote}>{labels.reducedMotion}</p>}
      <figcaption id={`${id}-caption`} className={styles.caption}>{labels.caption}</figcaption>
    </figure>
  );
}
