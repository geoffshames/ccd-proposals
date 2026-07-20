"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import styles from "./proposal.module.css";

/* ------------------------------------------------------------------ */
/* Shared micro-motion                                                 */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Custom arrows — 1.5px stroke, replaces stock icon sets */

export function ArrowUpRight({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11L11 3M11 3H4.6M11 3V9.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArrowDown({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 2V12M7 12L2.8 7.8M7 12L11.2 7.8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArrowRight({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 15 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1.5 7H13M13 7L8.6 2.6M13 7L8.6 11.4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* Magnetic wrapper — subtle pull toward the cursor */

export function Magnetic({
  children,
  strength = 0.22,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(event) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * strength);
        y.set((event.clientY - bounds.top - bounds.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero — the single scroll set piece                                  */
/* ------------------------------------------------------------------ */

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const copyY = useTransform(scrollYProgress, [0, 0.9], [0, -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [1, 1, 0.3]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <header id="top" ref={ref} className={styles.heroScroll}>
      <div className={styles.heroSticky}>
        <motion.div
          className={styles.heroCopy}
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <p className={styles.heroEyebrow}>
            <i aria-hidden="true" />
            Champion Teamwear × Crowd Control
          </p>
          <h1 className={styles.heroTitle}>
            <span>Turn brand</span>
            <span>permission</span>
            <span>
              into <em className={styles.heroRed}>momentum.</em>
            </span>
          </h1>
          <p className={styles.heroLead}>
            A growth and creative operating system built for every team, every
            season and every moment that makes belonging visible.
          </p>
          <div className={styles.heroStats}>
            <div>
              <strong>06</strong>
              <span>Month proposed runway</span>
            </div>
            <div>
              <strong>$10K</strong>
              <span>Monthly core retainer</span>
            </div>
            <div>
              <strong>15%</strong>
              <span>Of managed media</span>
            </div>
          </div>
        </motion.div>

        <div className={styles.heroMedia} aria-hidden="true">
          <motion.div
            className={styles.heroMediaInner}
            style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
          >
            <Image
              src="/champion-proposal/hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </motion.div>
          <span className={styles.heroMediaTag}>
            <i />
            Jersey / interlock knit / detail 01
          </span>
        </div>

        <div className={styles.heroBase}>
          <span>Prepared for Champion Teamwear</span>
          <a className={styles.heroCue} href="#opportunity">
            Scroll to enter <ArrowDown />
          </a>
          <span>Private and confidential / 2026</span>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee                                                             */
/* ------------------------------------------------------------------ */

const phraseParts = ["Game day", "Practice", "Travel", "Fandom", "One teamwear system"];

function MarqueePhrase() {
  return (
    <span>
      {phraseParts.map((part) => (
        <span key={part}>
          {part} <b>/</b>{" "}
        </span>
      ))}
    </span>
  );
}

export function KineticRosterBand() {
  const reduce = useReducedMotion();

  return (
    <div
      className={styles.marquee}
      aria-label="Game day, practice, travel and fandom are one teamwear system"
    >
      <motion.div
        className={styles.marqueeTrack}
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      >
        <span>
          <MarqueePhrase />
          <MarqueePhrase />
          <MarqueePhrase />
        </span>
        <span aria-hidden="true">
          <MarqueePhrase />
          <MarqueePhrase />
          <MarqueePhrase />
        </span>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Roadmap spine — scroll-linked fill                                  */
/* ------------------------------------------------------------------ */

export function RoadSpine({ target }: { target: React.RefObject<HTMLDivElement | null> }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start 70%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.3,
  });

  return (
    <div className={styles.roadSpine} aria-hidden="true">
      <motion.i
        className={styles.roadSpineFill}
        style={reduce ? { scaleY: 1 } : { scaleY }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Fee architecture bar                                                */
/* ------------------------------------------------------------------ */

export function FeeBar() {
  const reduce = useReducedMotion();

  const segments = [
    {
      className: styles.feeCore,
      amount: "$10,000",
      label: "Core strategy retainer / month",
    },
    {
      className: styles.feeMedia,
      amount: "15%",
      label: "Of managed media spend",
    },
    {
      className: styles.feeCreative,
      amount: "By scope",
      label: "Creative + optional modules",
    },
  ];

  return (
    <div>
      <div
        className={styles.feeBar}
        role="img"
        aria-label="Fee architecture: ten thousand dollars per month core retainer, fifteen percent of managed media spend, creative and optional modules scoped separately"
      >
        {segments.map((segment, index) => (
          <motion.div
            key={segment.amount}
            className={`${styles.feeSeg} ${segment.className}`}
            initial={reduce ? false : { scaleX: 0.4, opacity: 0 }}
            whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.85,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <strong>{segment.amount}</strong>
            <span>{segment.label}</span>
          </motion.div>
        ))}
      </div>
      <p className={styles.feeCaption}>
        Fee architecture / media spend funded separately / no hidden margins
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Signal meter bars                                                   */
/* ------------------------------------------------------------------ */

export function MeterFill({ value, index }: { value: number; index: number }) {
  const reduce = useReducedMotion();

  return (
    <div className={styles.meterTrack}>
      <motion.i
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: value / 5 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{
          duration: 1,
          delay: 0.15 + index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={reduce ? { scaleX: value / 5 } : undefined}
      />
    </div>
  );
}
