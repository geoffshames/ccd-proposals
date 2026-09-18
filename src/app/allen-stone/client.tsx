"use client";

/**
 * ALLEN STONE × CROWD CONTROL DIGITAL — "Soul, amplified."
 * Bespoke album-rollout proposal in the CCD brand system: #0A0A0A / #FAFAFA /
 * #FD3737, N27 Bold display, Work Sans body, mono labels. Real imagery only
 * (press photos + Allen's actual top live clips). Motion via Framer Motion:
 * letter-rise hero with scroll parallax, velocity marquee, pinned scroll-scrubbed
 * conversion chart, pinned horizontal clip reel, dot-grid cadence, self-drawing
 * system diagram, scroll-filled rollout timeline, and an interactive spend calculator.
 */

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import s from "./allen.module.css";
import { VideoBoxProvider, embedFor, useVideoBox, type VideoItem } from "./video-box";
import {
  IMG,
  HERO,
  NAV,
  GAP,
  CLIPS,
  BRAIN,
  CADENCE,
  ROOM,
  WAVE,
  CAPTURE,
  SYSTEM,
  FANS,
  ROLLOUT,
  TARGETS,
  INVESTMENT,
  SCOPE,
  NEXT,
  SOURCES,
  POSTS,
} from "@/lib/allen-stone/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const usd = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Allen Stone × Crowd Control Digital: intro call")}&body=${encodeURIComponent(
  "Hi Geoff,\n\nWe've read the Allen Stone proposal (proposal.crowdcontroldigital.com/allen-stone) and would like to set up a call.\n\nName / team:\nTimes that work:\n",
)}`;

/* ----------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------- */

/** Hydration-safe reduced-motion flag: false on the server and first client render. */
function useReduced() {
  const pref = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? !!pref : false;
}

function useMedia(query: string) {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return match;
}

/** Glue hyphenated words so "PRE-SAVES" never splits across lines. */
const glue = (str: string) => str.replace(/(\S)-(\S)/g, "$1\u2060-\u2060$2");

function SplitHeading({ text, className }: { text: string; className: string }) {
  const reduce = useReduced();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const [revealed, setRevealed] = useState(false);
  const tokens = text.split(" ");
  return (
    <h2 ref={ref} className={className} aria-label={text.replace(/\*/g, "")} data-revealed={reduce || revealed ? "" : undefined}>
      {tokens.map((tok, i) => {
        const accent = tok.startsWith("*") || tok.endsWith("*");
        const clean = tok.replace(/\*/g, "");
        return (
          <span className={s.word} key={i} aria-hidden="true">
            <motion.span
              className={s.letter}
              initial={reduce ? false : { y: "108%" }}
              animate={reduce || inView ? { y: "0%" } : { y: "108%" }}
              transition={{ duration: 0.95, ease: EASE, delay: i * 0.06 }}
              onAnimationComplete={i === tokens.length - 1 && inView ? () => setRevealed(true) : undefined}
            >
              {accent ? <em>{clean}</em> : clean}
            </motion.span>
          </span>
        );
      })}
    </h2>
  );
}

function Reveal({ children, delay = 0, y = 28, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "", prefix = "", format }: { value: number; suffix?: string; prefix?: string; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(value);
      return;
    }
    const controls = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setN(v) });
    return () => controls.stop();
  }, [inView, reduce, value]);
  return (
    <span ref={ref}>
      {prefix}
      {format ? format(n) : Math.round(n).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

function Label({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className={`${s.label} ${s.mono}`}>
      <b>{n}</b>
      {children}
    </div>
  );
}


/* ----------------------------------------------------------------------------
 * Referenced social posts: one registry, inline {{text|url}} links, shadowbox groups
 * ------------------------------------------------------------------------- */

const REF = /\{\{([^|}]+)\|([^}]+)\}\}/g;

const REGISTRY: Map<string, VideoItem> = (() => {
  const m = new Map<string, VideoItem>();
  CLIPS.forEach((c) =>
    m.set(c.href, {
      href: c.href,
      title: `Allen Stone · “${c.title}”`,
      views: c.views,
      platform: c.platform.replace(/ plays$/, ""),
      metric: /plays$/.test(c.platform) ? "plays" : "views",
      context: c.context,
      poster: `${IMG}/${c.img}`,
      noEmbed: "noEmbed" in c ? !!c.noEmbed : false,
    }),
  );
  BRAIN.findings.forEach((f) =>
    f.clips.forEach((c) => {
      if (!m.has(c.href)) m.set(c.href, { href: c.href, title: c.label, views: c.views, platform: c.platform, low: "low" in c && !!c.low });
    }),
  );
  Object.entries(POSTS).forEach(([href, v]) => m.set(href, { href, ...v }));
  return m;
})();

function postItem(href: string, extra?: Partial<VideoItem>): VideoItem {
  const base = REGISTRY.get(href) ?? { href, title: href, platform: embedFor(href)?.name ?? "Post" };
  return { ...base, ...extra };
}

/** URLs referenced inline in a string, in reading order. */
function refsIn(text: string) {
  return Array.from(text.matchAll(REF), (m) => m[2]);
}

function stripRefs(text: string) {
  return text.replace(REF, "$1");
}

type PostGroup = { label: string; items: VideoItem[] };

function groupFor(label: string, hrefs: string[], extra?: Partial<VideoItem>): PostGroup {
  const seen = new Set<string>();
  const items = hrefs.filter((h) => (seen.has(h) ? false : (seen.add(h), true))).map((h) => postItem(h, extra));
  return { label, items };
}

/** Renders copy with {{text|url}} post references as shadowbox links. */
function RichText({ text, group }: { text: string; group?: PostGroup }) {
  const play = useVideoBox();
  const g = group ?? groupFor("Referenced posts", refsIn(text));
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(REF)) {
    const [whole, label, href] = m;
    if (m.index! > last) parts.push(text.slice(last, m.index));
    const idx = Math.max(0, g.items.findIndex((it) => it.href === href));
    parts.push(
      <a
        key={`${href}-${m.index}`}
        className={s.refLink}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-haspopup="dialog"
        onClick={play(g, idx)}
        title={`Open the ${postItem(href).platform} post`}
      >
        <span className={s.refText}>{label}</span>
      </a>,
    );
    last = m.index! + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/* ----------------------------------------------------------------------------
 * Chrome: progress + topbar
 * ------------------------------------------------------------------------- */

function HeroStatLink({ href, label }: { href: string; label: string }) {
  const play = useVideoBox();
  return (
    <a className={`${s.heroStatLabel} ${s.refLink}`} href={href} target="_blank" rel="noreferrer" aria-haspopup="dialog" onClick={play(groupFor("Allen Stone", [href]), 0)}>
      <span className={s.refText}>{label}</span>
    </a>
  );
}

function Chrome() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const idx = NAV.findIndex((n) => n.id === active);
  return (
    <>
      <motion.div className={s.progress} style={{ scaleX }} />
      <header className={`${s.topbar} ${solid ? s.topbarSolid : ""}`}>
        <a href="#top" aria-label="Crowd Control Digital, back to top">
          <Image unoptimized src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width={150} height={26} priority />
        </a>
        <nav className={s.navLinks} aria-label="Proposal sections">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <span className={s.navNow} aria-hidden="true">
          {idx >= 0 ? (
            <>
              <b>{String(idx + 1).padStart(2, "0")}</b>
              {NAV[idx].label}
            </>
          ) : (
            "Album rollout proposal"
          )}
        </span>
        <a className={s.navCta} href={MAIL}>
          Book the call ↗
        </a>
      </header>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.04, 1.22]);
  const imgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  let letterIndex = 0;
  return (
    <section ref={ref} className={s.hero} id="top" aria-label="Allen Stone album rollout proposal">
      <motion.div className={s.heroMedia} style={{ scale, y: imgY }}>
        <Image unoptimized src={`${IMG}/press-orange.jpg`} alt="Allen Stone press photograph in a velvet jacket against burnt orange" fill priority sizes="100vw" />
      </motion.div>
      <div className={s.heroShade} />
      <motion.div className={`${s.heroInner} ${s.fadeVar}`} style={{ y: textY, ["--o" as string]: fade } as never}>
        <motion.p
          className={`${s.heroKicker} ${s.mono}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
        >
          {HERO.kicker}
        </motion.p>
        <h1 className={s.heroTitle} aria-label="Allen Stone">
          {["ALLEN", "STONE"].map((w) => (
            <span className={s.word} key={w} aria-hidden="true">
              {w.split("").map((ch) => {
                const i = letterIndex++;
                return (
                  <motion.span
                    key={i}
                    className={s.letter}
                    initial={reduce ? false : { y: "105%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.045 }}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>
        <div className={s.heroRow}>
          <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.75 }}>
            <p className={s.heroLine}>{HERO.line}</p>
            <p className={s.heroBody}>{HERO.body}</p>
          </motion.div>
          <motion.div className={s.heroStats} initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.95 }}>
            {HERO.stats.map((st) => (
              <div key={st.label}>
                <span className={s.heroStat}>
                  <Counter value={st.value} suffix={st.suffix} format={st.value % 1 ? (n) => n.toFixed(1) : undefined} />
                </span>
                {"href" in st && st.href ? (
                  <HeroStatLink href={st.href} label={st.label} />
                ) : (
                  <span className={s.heroStatLabel}>{st.label}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>{HERO.prepared}</span>
          <span className={s.scrollCue}>
            <span aria-hidden="true" />
            Scroll · {HERO.date}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Velocity marquee
 * ------------------------------------------------------------------------- */

const wrap = (min: number, max: number, v: number) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};

function Marquee() {
  const reduce = useReduced();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smooth = useSpring(velocity, { damping: 50, stiffness: 400 });
  const factor = useTransform(smooth, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);
  const dir = useRef(-1);
  useAnimationFrame((_, delta) => {
    if (reduce) return;
    let move = dir.current * 1.6 * (delta / 1000);
    const f = factor.get();
    if (f < 0) dir.current = 1;
    else if (f > 0) dir.current = -1;
    move += dir.current * Math.abs(move) * Math.abs(f);
    baseX.set(baseX.get() + move);
  });
  const item = (
    <span className={s.marqueeItem}>
      The voice is the strategy <span className={s.marqueeStar}>✺</span> Live is the <i>product</i> <span className={s.marqueeStar}>✺</span> Point it at the album <span className={s.marqueeStar}>✺</span>
    </span>
  );
  return (
    <div className={s.marquee} aria-hidden="true">
      <motion.div className={s.marqueeTrack} style={{ x }}>
        {item}
        {item}
        {item}
        {item}
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * 01 — The gap (pinned, scroll-scrubbed)
 * ------------------------------------------------------------------------- */

const MAX_RATIO = 20;

function GapRow({ row, i, progress }: { row: (typeof GAP.rows)[number]; i: number; progress: MotionValue<number> }) {
  const start = 0.08 + i * 0.13;
  const end = start + 0.16;
  const scaleX = useTransform(progress, [start, end], [0, row.ratio / MAX_RATIO]);
  const opacity = useTransform(progress, [start - 0.06, start], [0.2, 1]);
  const val = useTransform(progress, [start, end], [0, row.ratio]);
  const label = useTransform(val, (v) => `${v.toFixed(1)}×`);
  return (
    <motion.div className={`${s.gapRow} ${s.fadeVar} ${"self" in row && row.self ? s.gapSelf : ""}`} style={{ ["--o" as string]: opacity } as never}>
      <div className={s.gapName}>
        {row.name}
        <small>
          {row.followers} IG → {row.listeners} listeners
        </small>
      </div>
      <div className={s.gapTrack}>
        <motion.div className={s.gapBar} style={{ scaleX }} />
      </div>
      <motion.div className={s.gapVal}>{label}</motion.div>
    </motion.div>
  );
}

function Gap() {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const mobile = useMedia("(max-width: 900px)");
  const pinned = !mobile && !reduce;
  const one = useMotionValue(1);
  const played = useMotionValue(0);
  const chartInView = useInView(chartRef, { once: true, margin: "0px 0px -20% 0px" });
  useEffect(() => {
    if (pinned || reduce || !chartInView) return;
    const controls = animate(played, 1, { duration: 2.6, ease: "linear" });
    return () => controls.stop();
  }, [pinned, reduce, chartInView, played]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progress = reduce ? one : pinned ? scrollYProgress : played;
  const callout = useTransform(progress, [0.78, 0.9], [0, 1]);
  const calloutY = useTransform(progress, [0.78, 0.9], [20, 0]);
  return (
    <section id="gap" aria-labelledby="gap-title">
      <div ref={ref} className={pinned ? `${s.pin} ${s.pinGap}` : s.pin}>
        <div className={pinned ? s.sticky : s.gapFlow}>
          <div className={s.gapWrap}>
            <div>
              <Label n="01">The gap</Label>
              <div id="gap-title">
                <SplitHeading text={GAP.title} className={s.h2} />
              </div>
              <p className={s.intro} style={{ marginTop: 26 }}>
                {GAP.intro}
              </p>
            </div>
            <div ref={chartRef}>
              <div className={s.gapRows}>
                {GAP.rows.map((row, i) => (
                  <GapRow key={row.name} row={row} i={i} progress={progress} />
                ))}
              </div>
              <div className={`${s.gapAxis} ${s.mono}`} aria-hidden="true">
                <span>0×</span>
                <span>10×</span>
                <span>20×</span>
              </div>
              <motion.p className={`${s.gapCallout} ${s.fadeVar}`} style={{ ["--o" as string]: callout, y: calloutY } as never}>
                Same-size fanbase. <span className={s.rust}>A fraction of the reach.</span>
              </motion.p>
              <p className={s.note} style={{ marginTop: 16 }}>
                {GAP.note}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={s.section} style={{ paddingTop: 20 }}>
        <div className={s.lessons}>
          {GAP.lessons.map((l, i) => (
            <Reveal key={l.who} className={s.lesson} delay={i * 0.1}>
              <div className={s.lessonWho}>
                <h3>{l.who}</h3>
                <span className={`${s.mono} ${s.rust}`}>{l.stat}</span>
              </div>
              <p>
                <RichText text={l.lesson} group={groupFor(`${l.who} · referenced posts`, refsIn(l.lesson))} />
              </p>
              <p className={s.lessonTake}>{l.take}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 02 — Live is the product (pinned horizontal reel)
 * ------------------------------------------------------------------------- */

const LIVE_REEL: VideoItem[] = CLIPS.map((c) => postItem(c.href));

function ClipCard({ clip, i }: { clip: (typeof CLIPS)[number]; i: number }) {
  const play = useVideoBox();
  return (
    <a
      className={s.clip}
      href={clip.href}
      target="_blank"
      rel="noreferrer"
      aria-haspopup="dialog"
      onClick={play({ label: "Live is the product", items: LIVE_REEL }, i)}
      aria-label={`Play “${clip.title}”, ${clip.context}, ${clip.views} ${clip.platform}`}
    >
      <div className={s.clipMedia}>
        <Image unoptimized src={`${IMG}/${clip.img}`} alt="" fill sizes="(max-width: 900px) 82vw, 36vw" />
        <div className={s.clipShade} />
        <div className={s.clipViews}>
          <strong>{clip.views}</strong>
          <span>{clip.platform}</span>
        </div>
        <span className={s.clipPlay} aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 1.5v13l11-6.5z" />
          </svg>
        </span>
      </div>
      <div className={s.clipMeta}>
        <div>
          <h3>{clip.title}</h3>
          <p>{clip.context}</p>
        </div>
        <span className={s.clipIdx}>{String(i + 1).padStart(2, "0")}</span>
      </div>
    </a>
  );
}

function Contrast() {
  return (
    <div className={s.contrast}>
      <span className={`${s.mono} ${s.rust}`}>Meanwhile</span>
      <div>
        <strong>3K–11K</strong>
        <p style={{ marginTop: 18 }}>Plays on ticket and promo posts. The voice sells the show better than the flyer does.</p>
      </div>
      <span className={s.note}>TikTok + Instagram post-level audit, Sept 2026</span>
    </div>
  );
}

function Live() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const mobile = useMedia("(max-width: 900px)");
  const [dist, setDist] = useState(0);
  const [count, setCount] = useState(1);
  const pinned = !mobile && !reduce;

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -Math.min(1, Math.max(0, (v - 0.05) / 0.9)) * dist);
  useMotionValueEvent(scrollYProgress, "change", (v) => setCount(Math.min(CLIPS.length, Math.max(1, Math.ceil(v * CLIPS.length)))));

  const head = (
    <div className={s.liveHead}>
      <div>
        <Label n="02">Live is the product</Label>
        <SplitHeading text="Every breakout is the *voice,* live." className={s.liveTitle} />
      </div>
      {pinned && (
        <div className={s.liveCounter} aria-hidden="true">
          {String(count).padStart(2, "0")}
          <span>/{String(CLIPS.length).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );

  return (
    <section id="live" aria-label="Live is the product">
      <div ref={ref} className={`${s.pin} ${pinned ? s.pinLive : ""}`}>
        <div className={pinned ? s.sticky : undefined} style={pinned ? undefined : { padding: "96px 0 40px" }}>
          <div className={s.liveStage}>
            {head}
            {pinned ? (
              <motion.div ref={trackRef} className={s.reel} style={{ x }}>
                {CLIPS.map((c, i) => (
                  <ClipCard key={c.img} clip={c} i={i} />
                ))}
                <Contrast />
              </motion.div>
            ) : (
              <div ref={trackRef} className={s.liveMobile} style={{ display: "flex" }}>
                {CLIPS.map((c, i) => (
                  <ClipCard key={c.img} clip={c} i={i} />
                ))}
                <Contrast />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 03 — The video brain (TwelveLabs Jockey corpus findings)
 * ------------------------------------------------------------------------- */

function findingGroup(f: (typeof BRAIN.findings)[number] & { i: number }): PostGroup {
  return groupFor(`Finding ${String(f.i + 1).padStart(2, "0")} · referenced posts`, [...refsIn(f.body), ...f.clips.map((c) => c.href)], {
    context: stripRefs(f.headline),
  });
}

function Brain() {
  const play = useVideoBox();
  const [open, setOpen] = useState(0);
  const [filter, setFilter] = useState<string>("All");
  const tags = ["All", ...Array.from(new Set(BRAIN.findings.map((f) => f.tag)))];
  const list = BRAIN.findings.map((f, i) => ({ ...f, i })).filter((f) => filter === "All" || f.tag === filter);
  return (
    <section className={s.section} id="brain" aria-labelledby="brain-title">
      <div className={s.sectionHead}>
        <div id="brain-title">
          <Label n="03">Video AI</Label>
          <SplitHeading text={BRAIN.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{BRAIN.intro}</p>
        </Reveal>
      </div>
      <div className={s.brainStats}>
        {BRAIN.stats.map((st, i) => (
          <Reveal key={st.label} className={s.brainStat} delay={i * 0.06}>
            <strong>{st.value}</strong>
            <span>{st.label}</span>
          </Reveal>
        ))}
        <Reveal className={`${s.brainStat} ${s.brainEngine}`} delay={0.2}>
          <span className={s.mono}>Engine</span>
          <b>TwelveLabs Jockey</b>
          <span>Whole-corpus queries, cited to clips</span>
        </Reveal>
      </div>
      <div className={s.brainFilters} role="group" aria-label="Filter findings">
        {tags.map((t) => (
          <button key={t} type="button" aria-pressed={filter === t} onClick={() => setFilter(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className={s.brainList}>
        {list.map((f) => {
          const isOpen = open === f.i;
          return (
            <motion.article key={f.headline} layout className={`${s.finding} ${isOpen ? s.findingOpen : ""}`}>
              <button type="button" className={s.findingHead} aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : f.i)}>
                <span className={s.findingIdx}>{String(f.i + 1).padStart(2, "0")}</span>
                <span className={s.findingTitle}>
                  <span className={`${s.mono} ${s.findingTag}`}>{f.tag}</span>
                  <span className={s.findingHeadline}>{glue(f.headline)}</span>
                </span>
                <span className={s.findingToggle} aria-hidden="true">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    className={s.findingBody}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                  >
                    <div className={s.findingGrid}>
                      <div>
                        <p className={s.findingText}>
                          <RichText text={f.body} group={findingGroup(f)} />
                        </p>
                        <div className={s.findingImpl}>
                          <span className={`${s.mono} ${s.rust}`}>For the rollout</span>
                          <p>{f.implication}</p>
                        </div>
                      </div>
                      <div className={s.clipChips}>
                        <span className={s.mono} style={{ color: "var(--muted)" }}>
                          Cited clips
                        </span>
                        {f.clips.map((c) => (
                          <a
                            key={c.href}
                            href={c.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-haspopup="dialog"
                            onClick={play(findingGroup(f), findingGroup(f).items.findIndex((x) => x.href === c.href))}
                            className={`${s.chip} ${"low" in c && c.low ? s.chipLow : ""}`}
                          >
                            <strong>{c.views}</strong>
                            <span>
                              {c.label}
                              <em>{c.platform}</em>
                            </span>
                            <b className={s.chipPlay} aria-hidden="true">
                              <svg viewBox="0 0 16 16" fill="currentColor">
                                <path d="M4 2.5v11l9-5.5z" />
                              </svg>
                            </b>
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
      <p className={s.note} style={{ marginTop: 18 }}>
        {BRAIN.method}
      </p>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 — Cadence (dot grids)
 * ------------------------------------------------------------------------- */

const SPORADIC = new Set([2, 9, 15, 22, 27, 33, 40, 45]);

function Dots({ total, lit, plan }: { total: number; lit: (i: number) => boolean; plan?: boolean }) {
  const reduce = useReduced();
  return (
    <motion.div
      className={s.dots}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px" }}
      variants={{ show: { transition: { staggerChildren: reduce ? 0 : plan ? 0.018 : 0.012 } } }}
      aria-hidden="true"
    >
      {Array.from({ length: total }).map((_, i) => (
        <motion.span
          key={i}
          className={`${s.dot} ${lit(i) ? s.dotOn : ""}`}
          variants={{
            hide: reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
            show: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: EASE } },
          }}
        />
      ))}
    </motion.div>
  );
}

function Cadence() {
  return (
    <section className={s.section} id="cadence" aria-labelledby="cadence-title">
      <div className={s.sectionHead}>
        <div id="cadence-title">
          <Label n="04">Cadence</Label>
          <SplitHeading text={CADENCE.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{CADENCE.intro}</p>
        </Reveal>
      </div>
      <div className={s.cadence}>
        <div className={s.cadencePanel}>
          <span className={`${s.mono}`} style={{ color: "var(--muted)" }}>
            Today
          </span>
          <div className={s.cadenceNum} style={{ marginTop: 14 }}>
            <Counter value={CADENCE.today.count} />
          </div>
          <p className={s.cadenceLabel}>{CADENCE.today.label}</p>
          <p className={s.cadenceSub}>{CADENCE.today.median}</p>
          <Dots total={CADENCE.plan.count} lit={(i) => SPORADIC.has(i)} />
        </div>
        <div className={`${s.cadencePanel} ${s.cadencePanelPlan}`}>
          <span className={`${s.mono} ${s.rust}`}>With CCD</span>
          <div className={s.cadenceNum} style={{ marginTop: 14 }}>
            <Counter value={CADENCE.plan.count} suffix="+" />
          </div>
          <p className={s.cadenceLabel}>{CADENCE.plan.label}</p>
          <p className={s.cadenceSub}>{CADENCE.plan.median}</p>
          <Dots total={CADENCE.plan.count} lit={() => true} plan />
        </div>
      </div>
      <div className={s.facts}>
        {CADENCE.facts.map((f, i) => (
          <Reveal key={f.k} delay={i * 0.08}>
            <span className={s.mono} style={{ color: "var(--dim)" }}>
              {f.k}
            </span>
            <b>{f.v}</b>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 — The room
 * ------------------------------------------------------------------------- */

function Room() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const mobile = useMedia("(max-width: 900px)");
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-6%", "6%"]);
  return (
    <section className={s.section} id="room" aria-labelledby="room-title">
      <div className={s.room}>
        <div ref={mediaRef} className={s.roomMedia}>
          <motion.div className={s.roomMediaInner} style={{ y }}>
            <Image unoptimized src={`${IMG}/live-stage.jpg`} alt="Allen Stone performing on a festival main stage with a cream Stratocaster" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </motion.div>
          <div className={`${s.roomCaption} ${s.mono}`}>Allen Stone, live</div>
        </div>
        <div>
          <div id="room-title">
            <Label n="05">The room</Label>
            <SplitHeading text={ROOM.title} className={s.h2} />
          </div>
          <Reveal>
            <p className={s.intro} style={{ marginTop: 28 }}>
              {ROOM.intro}
            </p>
          </Reveal>
          <Reveal>
            <p className={s.quote}>{ROOM.quote}</p>
            <QuoteSource href={ROOM.quoteHref} label={ROOM.quoteSource} quote={ROOM.quote} groupLabel="The room" />
          </Reveal>
          <div className={s.dates}>
            <span className={s.mono} style={{ color: "var(--muted)" }}>
              Opening for Teddy Swims · November 2026
            </span>
            <div style={{ position: "relative", marginTop: 22 }}>
              <motion.div
                className={s.datesLine}
                initial={reduce ? false : mobile ? { scaleY: 0 } : { scaleX: 0 }}
                whileInView={{ scaleX: 1, scaleY: 1 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 1.4, ease: EASE }}
              />
              <div className={s.datesRow}>
                {ROOM.dates.map((d, i) => (
                  <Reveal key={d.day} className={s.date} delay={0.2 + i * 0.12} y={12}>
                    <span className={`${s.mono} ${s.rust}`}>{d.day}</span>
                    <b>{d.city}</b>
                    <span>{d.venue}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          <div className={s.owned}>
            {ROOM.owned.map((o, i) => (
              <Reveal key={o.k} className={s.ownedRow} delay={i * 0.06} y={10}>
                <b>{o.k}</b>
                <span>{o.v}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 05 — The wave (interactive dopamine wave → pre-saves) + capture stack
 * ------------------------------------------------------------------------- */

const WAVE_PATH =
  "M 40 300 C 170 300 260 262 360 236 C 440 214 500 206 540 150 C 566 120 584 72 600 72 C 616 72 636 120 662 158 C 700 222 760 236 840 238 C 940 240 1010 232 1080 214 C 1120 204 1140 176 1160 120";
const PHASE_X = [40, 480, 720, 1060, 1160];
const WAVE_LOOP = 10;
const WAVE_AXIS = [
  { x: 40, t: "D−14" },
  { x: 600, t: "D0 · SHOW" },
  { x: 900, t: "D+4" },
  { x: 1160, t: "RELEASE" },
];
const MARKERS = [
  { x: 300, label: "RSVP drop + live-clip ads" },
  { x: 600, label: "Capture the room" },
  { x: 880, label: "swsh album + pre-save ask" },
  { x: 1160, label: "Release day" },
];

function WavePlayer() {
  const reduce = useReduced();
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const inView = useInView(wrapRef, { margin: "-15% 0px" });
  const [t, setT] = useState(0.52);
  const [playing, setPlaying] = useState(true);
  const [pt, setPt] = useState({ x: 600, y: 72 });
  const start = useRef<number | null>(null);
  const base = useRef(0.52);

  useEffect(() => {
    if (reduce) setPlaying(false);
  }, [reduce]);

  useAnimationFrame((time) => {
    if (!playing || !inView || reduce) {
      start.current = null;
      return;
    }
    if (start.current === null) {
      start.current = time;
      base.current = t;
    }
    const next = (base.current + (time - start.current) / 1000 / WAVE_LOOP) % 1;
    setT(next);
  });

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const p = path.getPointAtLength(t * len);
    setPt({ x: p.x, y: p.y });
  }, [t]);

  const phase = pt.x < PHASE_X[1] ? 0 : pt.x < PHASE_X[2] ? 1 : pt.x < PHASE_X[3] ? 2 : 3;
  const jump = (i: number) => {
    const targets = [0.22, 0.47, 0.72, 0.97];
    setPlaying(false);
    setT(targets[i]);
  };
  const labels = [...WAVE.phases.map((p) => p.name), WAVE.release.name];

  return (
    <div ref={wrapRef} className={s.wave}>
      <div className={s.waveTop}>
        <div className={s.wavePhaseBtns} role="group" aria-label="Choose a phase">
          {labels.map((l, i) => (
            <button key={l} type="button" aria-pressed={phase === i} onClick={() => jump(i)}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {l}
            </button>
          ))}
        </div>
        <button type="button" className={s.wavePlay} onClick={() => setPlaying((v) => !v)} aria-label={playing ? "Pause the wave" : "Play the wave"}>
          {playing ? "❚❚ Pause" : "▶ Play the wave"}
        </button>
      </div>
      <svg className={s.waveSvg} viewBox="0 0 1200 360" role="img" aria-label="The dopamine wave: anticipation before a show, the peak on show day, the glow after, then the build to release day.">
        <defs>
          <linearGradient id="waveFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fd3737" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#fd3737" stopOpacity="0" />
          </linearGradient>
          <clipPath id="waveClip">
            <rect x="0" y="0" width={pt.x} height="360" />
          </clipPath>
        </defs>
        {PHASE_X.slice(1, 4).map((x) => (
          <line key={x} x1={x} x2={x} y1={30} y2={318} stroke="#333333" strokeDasharray="4 6" />
        ))}
        {WAVE_AXIS.map((m) => (
          <text key={m.t} className={s.waveAxisSvg} x={m.x} y={346} fill="#b8b8c0" fontSize={12} textAnchor={m.x === 40 ? "start" : m.x === 1160 ? "end" : "middle"} style={{ fontFamily: "var(--font-geist-mono), monospace", letterSpacing: "0.14em" }}>
            {m.t}
          </text>
        ))}
        <line x1={40} x2={1160} y1={318} y2={318} stroke="#262626" />
        <path d={`${WAVE_PATH} L 1160 318 L 40 318 Z`} fill="url(#waveFill)" clipPath="url(#waveClip)" />
        <path d={WAVE_PATH} fill="none" stroke="#333333" strokeWidth={2} />
        <path ref={pathRef} d={WAVE_PATH} fill="none" stroke="#fd3737" strokeWidth={3} clipPath="url(#waveClip)" />
        {MARKERS.map((m, i) => {
          const passed = pt.x >= m.x - 2;
          return (
            <g key={m.label}>
              <circle cx={m.x} cy={318} r={6} fill={passed ? "#fd3737" : "#0a0a0a"} stroke={passed ? "#fd3737" : "#333333"} strokeWidth={2} />
              <text className={s.waveMarkerLabel} x={m.x} y={24} fill={passed ? "#fafafa" : "#b8b8c0"} fontSize={13} fontWeight={600} textAnchor={m.x === 1160 ? "end" : "middle"} opacity={passed ? 1 : 0.7}>
                {m.label}
              </text>
            </g>
          );
        })}
        <circle cx={pt.x} cy={pt.y} r={18} fill="#fd3737" opacity={0.18} />
        <circle cx={pt.x} cy={pt.y} r={8} fill="#fd3737" />
      </svg>
      <div className={`${s.waveAxisHtml} ${s.mono}`} aria-hidden="true">
        {WAVE_AXIS.map((m) => (
          <span key={m.t} style={{ left: `${(m.x / 1200) * 100}%` }} data-edge={m.x === 40 ? "start" : m.x === 1160 ? "end" : undefined} data-minor={m.x === 900 ? "" : undefined}>
            {m.t}
          </span>
        ))}
      </div>
      <p className={`${s.waveNow} ${s.mono}`} aria-live="polite">
        <b>Now</b> {[...MARKERS].reverse().find((m) => pt.x >= m.x - 2)?.label ?? "Warm the room"}
      </p>
      <input
        className={s.slider}
        type="range"
        min={0}
        max={1000}
        value={Math.round(t * 1000)}
        aria-label="Move through the show cycle"
        style={{ ["--fill" as string]: `${t * 100}%` } as CSSProperties}
        onChange={(e) => {
          setPlaying(false);
          setT(Number(e.target.value) / 1000);
        }}
      />
      <p className={s.note} style={{ marginTop: 10 }}>
        {WAVE.caption}
      </p>
      <div className={s.wavePhases}>
        {WAVE.phases.map((p, i) => (
          <article key={p.key} className={`${s.wavePhase} ${phase === i ? s.wavePhaseOn : ""}`}>
            <div className={`${s.wavePhaseTop} ${s.mono}`}>
              <span className={s.rust}>{String(i + 1).padStart(2, "0")} · {p.name}</span>
              <span>{p.window}</span>
            </div>
            <h3>{glue(p.action)}</h3>
            <ul>
              {p.points.map((pt2) => (
                <li key={pt2}>
                  <RichText text={pt2} group={groupFor(`The wave · ${p.name}`, refsIn(pt2))} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={`${s.waveRelease} ${phase === 3 ? s.wavePhaseOn : ""}`}>
        <span className={`${s.mono} ${s.rust}`}>04 · {WAVE.release.name}</span>
        <p>{WAVE.release.body}</p>
      </div>
    </div>
  );
}

function CaptureStack() {
  const [tab, setTab] = useState(1);
  const opt = CAPTURE.options[tab];
  return (
    <div className={s.capture}>
      <div className={s.captureHead}>
        <div>
          <span className={`${s.mono} ${s.rust}`}>{CAPTURE.title}</span>
          <p className={s.intro} style={{ marginTop: 14 }}>
            {CAPTURE.intro}
          </p>
        </div>
        <div className={s.captureTabs} role="tablist" aria-label="Capture options">
          {CAPTURE.options.map((o, i) => (
            <button key={o.key} type="button" role="tab" aria-selected={tab === i} onClick={() => setTab(i)}>
              {o.tab}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={opt.key}
          className={s.capturePanel}
          role="tabpanel"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div>
            <span className={`${s.captureTag} ${s.mono}`}>{opt.tag}</span>
            <h3>{glue(opt.tab)}</h3>
            <p className={s.captureWhat}>{opt.what}</p>
          </div>
          <div>
            <span className={s.mono} style={{ color: "var(--muted)" }}>
              At Allen&apos;s shows
            </span>
            <ol className={s.captureSteps}>
              {opt.how.map((h, i) => (
                <li key={h}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {h}
                </li>
              ))}
            </ol>
            <div className={s.captureCols}>
              <div>
                <span className={s.mono} style={{ color: "var(--muted)" }}>
                  Why
                </span>
                <p>{opt.why}</p>
              </div>
              <div>
                <span className={s.mono} style={{ color: "var(--muted)" }}>
                  Watch-outs
                </span>
                <p>{opt.watch}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className={s.waveStats}>
        {WAVE.stats.map((st, i) => (
          <Reveal key={st.label} className={s.waveStat} delay={i * 0.08}>
            <strong>{st.value}</strong>
            <b>{st.label}</b>
            <span>{st.source}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Wave() {
  return (
    <section className={s.section} id="wave" aria-labelledby="wave-title">
      <div className={s.sectionHead}>
        <div id="wave-title">
          <Label n="06">The wave</Label>
          <SplitHeading text={WAVE.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{WAVE.intro}</p>
        </Reveal>
      </div>
      <WavePlayer />
      <CaptureStack />
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 06 — The system (self-drawing diagram)
 * ------------------------------------------------------------------------- */

const COL = { inX: 0, inW: 270, enX: 465, enW: 270, outX: 930, outW: 270 };
const IN_Y = [150, 280, 410];
const EN_Y = [118, 226, 334, 442];
const OUT_Y = [118, 226, 334, 442];

const curve = (x1: number, y1: number, x2: number, y2: number) => {
  const mid = (x1 + x2) / 2;
  return `M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`;
};

function SysPath({ d, progress, range, hot }: { d: string; progress: MotionValue<number>; range: [number, number]; hot?: boolean }) {
  const pathLength = useTransform(progress, range, [0, 1]);
  return <motion.path d={d} fill="none" stroke={hot ? "#fd3737" : "#333333"} strokeWidth={hot ? 1.6 : 1.2} style={{ pathLength }} />;
}

function SysNode({ x, y, w, h, title, sub, engine, progress, at }: { x: number; y: number; w: number; h: number; title: string; sub?: string; engine?: boolean; progress: MotionValue<number>; at: number }) {
  const opacity = useTransform(progress, [at, at + 0.12], [0, 1]);
  return (
    <motion.g className={s.fadeVar} style={{ ["--o" as string]: opacity } as never}>
      <rect x={x} y={y - h / 2} width={w} height={h} fill={engine ? "#141414" : "#0a0a0a"} stroke={engine ? "#fd3737" : "#333333"} strokeWidth={engine ? 1.5 : 1} />
      <text x={x + 20} y={sub ? y - 4 : y + 6} fill="#fafafa" fontSize={18} fontWeight={600}>
        {title}
      </text>
      {sub && (
        <text x={x + 20} y={y + 20} fill="#b8b8c0" fontSize={14}>
          {sub}
        </text>
      )}
    </motion.g>
  );
}

function System() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const one = useMotionValue(1);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "center 50%"] });
  const progress = reduce ? one : scrollYProgress;

  const inPaths = IN_Y.flatMap((y1, i) => EN_Y.map((y2, j) => ({ d: curve(COL.inX + COL.inW, y1, COL.enX, y2), hot: (i === 0 && j === 0) || (i === 1 && j === 1) || (i === 2 && j === 2) || (i === 1 && j === 3) })));
  const outPaths = EN_Y.flatMap((y1, i) => OUT_Y.map((y2, j) => ({ d: curve(COL.enX + COL.enW, y1, COL.outX, y2), hot: i === j || (i === 3 && j === 0) })));

  return (
    <section className={s.section} id="system" aria-labelledby="system-title">
      <div className={s.sectionHead}>
        <div id="system-title">
          <Label n="07">The system</Label>
          <SplitHeading text={SYSTEM.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{SYSTEM.intro}</p>
        </Reveal>
      </div>

      <div ref={ref} className={s.systemDesktop}>
        <svg className={s.systemSvg} viewBox="0 0 1200 500" role="img" aria-label="Diagram: live clips, arena crowds, and new singles flow through CCD's native social, retargeting pools, and release flights into Spotify saves and follows, the Text STONE list, vinyl pre-orders, and tickets.">
          {[
            { x: COL.inX, t: "What Allen has" },
            { x: COL.enX, t: "What CCD runs" },
            { x: COL.outX, t: "Where it lands" },
          ].map((h) => (
            <text key={h.t} x={h.x} y={40} fill="#b8b8c0" fontSize={12} letterSpacing="2.2" style={{ textTransform: "uppercase", fontFamily: "var(--font-geist-mono), monospace" }}>
              {h.t.toUpperCase()}
            </text>
          ))}
          {inPaths.map((p, i) => (
            <SysPath key={`i${i}`} d={p.d} hot={p.hot} progress={progress} range={[0.15, 0.55]} />
          ))}
          {outPaths.map((p, i) => (
            <SysPath key={`o${i}`} d={p.d} hot={p.hot} progress={progress} range={[0.5, 0.92]} />
          ))}
          {!reduce && inView &&
            [...inPaths, ...outPaths]
              .filter((p) => p.hot)
              .map((p, i) => (
                <circle key={`f${i}`} r={4} fill="#fd3737">
                  <animateMotion dur="2.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" path={p.d} />
                </circle>
              ))}
          {SYSTEM.inputs.map((n, i) => (
            <SysNode key={n.title} x={COL.inX} y={IN_Y[i]} w={COL.inW} h={76} title={n.title} sub={n.sub} progress={progress} at={0.02 + i * 0.05} />
          ))}
          {SYSTEM.engine.map((n, i) => (
            <SysNode key={n.title} x={COL.enX} y={EN_Y[i]} w={COL.enW} h={78} title={n.title} sub={n.sub} engine progress={progress} at={0.4 + i * 0.04} />
          ))}
          {SYSTEM.outputs.map((t, i) => (
            <SysNode key={t} x={COL.outX} y={OUT_Y[i]} w={COL.outW} h={62} title={t} progress={progress} at={0.78 + i * 0.04} />
          ))}
        </svg>
      </div>

      <div className={s.systemMobile}>
        <Reveal className={s.sysCol}>
          <span className={s.mono} style={{ color: "var(--dim)" }}>
            What Allen has
          </span>
          <ul>
            {SYSTEM.inputs.map((n) => (
              <li key={n.title}>{n.title}</li>
            ))}
          </ul>
        </Reveal>
        <div className={s.sysArrow} aria-hidden="true">
          ↓
        </div>
        <Reveal className={`${s.sysCol} ${s.sysEngine}`}>
          <span className={`${s.mono} ${s.rust}`}>What CCD runs</span>
          <ul>
            {SYSTEM.engine.map((n) => (
              <li key={n.title}>
                {n.title} <span style={{ color: "var(--muted)" }}>· {n.sub}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className={s.sysArrow} aria-hidden="true">
          ↓
        </div>
        <Reveal className={s.sysCol}>
          <span className={s.mono} style={{ color: "var(--dim)" }}>
            Where it lands
          </span>
          <ul>
            {SYSTEM.outputs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 06 — Fans
 * ------------------------------------------------------------------------- */

function QuoteSource({ href, label, quote, groupLabel, group, index = 0 }: { href?: string; label: string; quote: string; groupLabel: string; group?: PostGroup; index?: number }) {
  const play = useVideoBox();
  if (!href) {
    return (
      <span className={s.mono} style={{ color: "var(--dim)" }}>
        {label}
      </span>
    );
  }
  const g = group ?? { label: groupLabel, items: [postItem(href, { quote })] };
  return (
    <a className={`${s.mono} ${s.refSource}`} href={href} target="_blank" rel="noreferrer" aria-haspopup="dialog" onClick={play(g, index)}>
      {label}
    </a>
  );
}

const QUOTE_GROUP: PostGroup = {
  label: "In their words",
  items: FANS.quotes.filter((q) => "href" in q && q.href).map((q) => postItem((q as { href: string }).href, { quote: q.text })),
};

function Quotes() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReduced();
  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % FANS.quotes.length), 5200);
    return () => clearInterval(t);
  }, [paused, reduce]);
  const q = FANS.quotes[i];
  return (
    <div className={s.quoteBox} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className={s.mono} style={{ color: "var(--muted)" }}>
        In their words
      </span>
      <div style={{ marginTop: 18, minHeight: 150 }} aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.55, ease: EASE }}>
            <blockquote>“{q.text}”</blockquote>
            <cite style={{ fontStyle: "normal" }}>
              <QuoteSource
                href={"href" in q ? q.href : undefined}
                label={q.source}
                quote={q.text}
                groupLabel="In their words"
                group={QUOTE_GROUP}
                index={Math.max(0, QUOTE_GROUP.items.findIndex((it) => it.quote === q.text))}
              />
            </cite>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={s.quoteDots}>
        {FANS.quotes.map((_, k) => (
          <button key={k} type="button" aria-label={`Quote ${k + 1}`} aria-pressed={k === i} onClick={() => setI(k)} />
        ))}
      </div>
    </div>
  );
}

function Fans() {
  const reduce = useReduced();
  const max = Math.max(...FANS.cities.map((c) => c.listeners));
  return (
    <section className={s.section} id="fans" aria-labelledby="fans-title">
      <div className={s.sectionHead}>
        <div id="fans-title">
          <Label n="08">The fans</Label>
          <SplitHeading text={FANS.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{FANS.intro}</p>
        </Reveal>
      </div>
      <div className={s.personas}>
        {FANS.personas.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className={s.persona}>
            <div className={s.personaGlow} />
            <div className={s.personaTop}>
              <span className={`${s.mono} ${s.rust}`}>0{i + 1}</span>
              <span className={s.mono} style={{ color: "var(--muted)" }}>
                {p.age}
              </span>
            </div>
            <h3>{p.name}</h3>
            <p>
              <RichText text={p.body} />
            </p>
            <div className={s.traits}>
              {p.traits.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className={s.fansLower}>
        <div>
          <span className={s.mono} style={{ color: "var(--muted)" }}>
            Top Spotify cities · monthly listeners
          </span>
          <div style={{ marginTop: 24 }}>
            {FANS.cities.map((c, i) => (
              <div key={c.city} className={s.cityRow}>
                <div className={s.cityTop}>
                  <b style={{ fontWeight: 500 }}>{c.city}</b>
                  <span>{(c.listeners / 1000).toFixed(1)}K</span>
                </div>
                <div className={s.cityTrack}>
                  <motion.div
                    className={s.cityBar}
                    initial={reduce ? { scaleX: c.listeners / max } : { scaleX: 0 }}
                    whileInView={{ scaleX: c.listeners / max }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 1.2, ease: EASE, delay: i * 0.08 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            Auckland and Sydney lead, and streaming outside the US grew nearly 3× faster than at home in H1 2026. Flights geo-weight to both.
          </p>
        </div>
        <Quotes />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 07 — Rollout (scroll-filled timeline)
 * ------------------------------------------------------------------------- */

function Rollout() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const n = ROLLOUT.phases.length;
  const [active, setActive] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    setActive(v <= 0.01 ? -1 : Math.min(n - 1, Math.floor(v * n + 0.35)));
  });

  return (
    <section className={s.section} id="rollout" aria-labelledby="rollout-title">
      <div className={s.sectionHead}>
        <div id="rollout-title">
          <Label n="09">The rollout</Label>
          <SplitHeading text={ROLLOUT.title} className={s.h2} />
        </div>
        <Reveal>
          <p className={s.intro}>{ROLLOUT.intro}</p>
        </Reveal>
      </div>
      <div ref={ref} className={s.timeline}>
        <div className={s.tlLine} aria-hidden="true">
          <motion.div className={s.tlFill} style={{ scaleY: reduce ? 1 : fill }} />
        </div>
        {ROLLOUT.phases.map((p, i) => {
          const on = reduce || i <= active;
          return (
            <div key={p.name} className={`${s.phase} ${on ? s.phaseOn : ""}`}>
              <span className={s.phaseDot} aria-hidden="true" />
              <div>
                <div className={`${s.phaseWhen} ${s.mono}`}>
                  <span className={s.rust}>{p.when}</span>
                  <span>{p.rel}</span>
                </div>
                <h3>{glue(p.name)}</h3>
                {"release" in p && p.release && <span className={`${s.releaseTag} ${s.mono}`}>Release day</span>}
              </div>
              <ul>
                {p.points.map((pt, k) => (
                  <li key={k}>
                    <span>0{k + 1}</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className={s.targets}>
        {TARGETS.map((t, i) => (
          <Reveal key={t.label} className={s.target} delay={i * 0.08}>
            <strong>{t.value}</strong>
            <b>{t.label}</b>
            <span>{t.context}</span>
          </Reveal>
        ))}
      </div>
      <p className={s.note} style={{ marginTop: 18 }}>
        Directional targets from competitive benchmarks and current baselines, not guarantees.
      </p>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 10 — Scope (+ Investment, hidden for now)
 * ------------------------------------------------------------------------- */

/**
 * PRICING is hidden for now. Flip to true to bring back the retainer, media
 * calculator, six-month media plan, add-ons, and terms (then restore the
 * PRICING lines in content.ts and page.tsx, and og-image-pricing.png).
 */
const SHOW_PRICING = false;

const MIN_SPEND = 1000;
const MAX_SPEND = 25000;

function Investment() {
  const [spend, setSpend] = useState(6000);
  const [picked, setPicked] = useState<number | null>(1);
  const reduce = useReduced();
  const fee = spend * INVESTMENT.fee;
  const toCcd = INVESTMENT.retainer + fee;
  const planMax = Math.max(...INVESTMENT.plan.map((p) => p.spend));
  const planMedia = INVESTMENT.plan.reduce((a, p) => a + p.spend, 0);
  const pct = ((spend - MIN_SPEND) / (MAX_SPEND - MIN_SPEND)) * 100;

  return (
    <section className={s.section} id={SHOW_PRICING ? "investment" : "scope"} aria-labelledby="investment-title">
      <div className={s.sectionHead}>
        <div id="investment-title">
          <Label n="10">{SHOW_PRICING ? "Investment" : "Scope"}</Label>
          <SplitHeading text={SHOW_PRICING ? INVESTMENT.title : "What we *run.*"} className={s.h2} />
        </div>
        <Reveal>
          {SHOW_PRICING ? (
            <p className={s.intro}>One flat retainer for strategy, social, paid, and email + SMS. Media runs on top at 15%, paid straight to the platforms, so every ad dollar stays visible and scalable.</p>
          ) : (
            <p className={s.intro}>One team across strategy, social, paid, and email + SMS, anchored to release day and built with Red Light and ATO.</p>
          )}
        </Reveal>
      </div>
      <div className={`${s.invest} ${SHOW_PRICING ? "" : s.investSolo}`}>
        <div>
          {SHOW_PRICING && (
          <>
          <div className={s.bigPrice}>
            <Counter value={INVESTMENT.retainer} prefix="$" />
            <small>/ month</small>
          </div>
          <div className={`${s.priceSub} ${s.mono}`}>
            <span>
              <b>{INVESTMENT.months} months</b>
            </span>
            <span>
              <b>{usd(INVESTMENT.retainer * INVESTMENT.months)}</b> total retainer
            </span>
            <span>
              <b>+15%</b> of managed spend
            </span>
          </div>
          </>
          )}
          <div className={s.includes}>
            {INVESTMENT.includes.map((inc, i) => (
              <Reveal key={inc.name} className={s.include} delay={i * 0.06} y={12}>
                <span>0{i + 1}</span>
                <div>
                  <b>{inc.name}</b>
                  <p>{inc.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {SHOW_PRICING && (
            <p className={s.note} style={{ marginTop: 20 }}>
              {INVESTMENT.terms}
            </p>
          )}
        </div>

        {SHOW_PRICING && (
        <div className={s.calc}>
          <div className={s.calcHead}>
            <span className={`${s.mono} ${s.rust}`}>Media calculator</span>
            <span className={s.mono} style={{ color: "var(--dim)" }}>
              Drag or pick a month
            </span>
          </div>
          <div className={s.calcSpend}>
            {usd(spend)}
            <span>ad spend / mo</span>
          </div>
          <input
            className={s.slider}
            type="range"
            min={MIN_SPEND}
            max={MAX_SPEND}
            step={500}
            value={spend}
            aria-label="Monthly ad spend"
            style={{ ["--fill" as string]: `${pct}%` } as CSSProperties}
            onChange={(e) => {
              setSpend(Number(e.target.value));
              setPicked(null);
            }}
          />
          <div className={`${s.sliderScale} ${s.mono}`}>
            <span>{usd(MIN_SPEND)}</span>
            <span>{usd(MAX_SPEND)}</span>
          </div>
          <div className={s.calcRows}>
            <div className={s.calcRow}>
              <span>Ad spend, paid to platforms</span>
              <b>{usd(spend)}</b>
            </div>
            <div className={s.calcRow}>
              <span>Management fee (15%)</span>
              <b>{usd(fee)}</b>
            </div>
            <div className={s.calcRow}>
              <span>Retainer</span>
              <b>{usd(INVESTMENT.retainer)}</b>
            </div>
          </div>
          <div className={s.calcTotal}>
            <span>Monthly to CCD</span>
            <b>{usd(toCcd)}</b>
          </div>
          <p className={s.note}>All-in including media: {usd(toCcd + spend)} / month</p>

          <div className={s.plan}>
            <span className={s.mono} style={{ color: "var(--muted)" }}>
              Recommended media plan · {usd(planMedia)} across the cycle
            </span>
            <div className={s.planBars}>
              {INVESTMENT.plan.map((p, i) => (
                <button
                  key={p.month}
                  type="button"
                  className={s.planBar}
                  aria-pressed={picked === i}
                  aria-label={`${p.month} ${p.label}: ${usd(p.spend)}`}
                  onClick={() => {
                    setSpend(p.spend);
                    setPicked(i);
                  }}
                >
                  <em>{usd(p.spend / 1000)}K</em>
                  <motion.span
                    className={s.planFill}
                    style={{ height: `${(p.spend / planMax) * 100}%`, display: "block" }}
                    initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE, delay: i * 0.07 }}
                  />
                </button>
              ))}
            </div>
            <div className={s.planLabels}>
              {INVESTMENT.plan.map((p) => (
                <span key={p.month}>
                  <b>{p.month}</b>
                  {p.label}
                </span>
              ))}
            </div>
            <p className={s.note} style={{ marginTop: 14 }}>
              Six-month view: {usd(INVESTMENT.retainer * INVESTMENT.months)} retainer + {usd(planMedia * INVESTMENT.fee)} management fee on {usd(planMedia)} of recommended media. Scales up or down with results.
            </p>
          </div>
          <div className={s.addOns}>
            <span className={s.mono} style={{ color: "var(--muted)" }}>
              Available as add-ons
            </span>
            {INVESTMENT.addOns.map((a) => (
              <div key={a.name} className={s.addOn}>
                <b style={{ fontWeight: 500 }}>{a.name}</b>
                <span>{a.basis}</span>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>

      <div className={s.scope} style={{ marginTop: "clamp(56px, 8vh, 96px)" }}>
        <div className={`${s.scopeCol} ${s.scopeIn}`}>
          <h3>Included</h3>
          <ul>
            {SCOPE.included.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div className={`${s.scopeCol} ${s.scopeOut}`}>
          <h3>Not included</h3>
          <ul>
            {SCOPE.excluded.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Next + footer
 * ------------------------------------------------------------------------- */

function Next() {
  return (
    <section className={`${s.section} ${s.next}`} id="next" aria-labelledby="next-title">
      <Label n="11">Next steps</Label>
      <Reveal>
        <h2 id="next-title" className={s.nextTitle}>
          The record&apos;s done. Let&apos;s make sure people <em>find it.</em>
        </h2>
      </Reveal>
      <div className={s.steps}>
        {NEXT.steps.map((st, i) => (
          <Reveal key={st.title} className={s.step} delay={i * 0.08}>
            <span>0{i + 1}</span>
            <b>{st.title}</b>
            <p>{st.body}</p>
          </Reveal>
        ))}
      </div>
      <div className={s.ctas}>
        <motion.a className={s.btn} href={MAIL} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
          Book the intro call <span aria-hidden="true">↗</span>
        </motion.a>
        <a className={s.btnGhost} href={`mailto:${NEXT.email}`}>
          {NEXT.email}
        </a>
      </div>
    </section>
  );
}

const SOCIAL_SOURCES: PostGroup = groupFor(
  "Sources · social posts",
  SOURCES.map((x) => x.href).filter((h) => embedFor(h)),
);

function SourceLinks() {
  const play = useVideoBox();
  return (
    <>
      {SOURCES.map((src) => {
        const idx = SOCIAL_SOURCES.items.findIndex((it) => it.href === src.href);
        return (
          <li key={src.href}>
            <a
              href={src.href}
              target="_blank"
              rel="noreferrer"
              {...(idx >= 0 ? { "aria-haspopup": "dialog" as const, onClick: play(SOCIAL_SOURCES, idx) } : {})}
            >
              {src.label} {idx >= 0 ? "▶" : "↗"}
            </a>
          </li>
        );
      })}
    </>
  );
}

export default function AllenStoneClient() {
  return (
    <VideoBoxProvider>
    <main className={s.page}>
      <Chrome />
      <Hero />
      <Marquee />
      <Gap />
      <div className={s.rule} />
      <Live />
      <div className={s.rule} />
      <Brain />
      <div className={s.rule} />
      <Cadence />
      <div className={s.rule} />
      <Room />
      <div className={s.rule} />
      <Wave />
      <div className={s.rule} />
      <System />
      <div className={s.rule} />
      <Fans />
      <div className={s.rule} />
      <Rollout />
      <div className={s.rule} />
      <Investment />
      <div className={s.rule} />
      <Next />
      <div className={s.sources}>
        <details>
          <summary className={s.mono}>Sources + methodology</summary>
          <ol>
            <SourceLinks />
          </ol>
          <p className={s.note} style={{ marginTop: 14 }}>
            Social and streaming figures pulled Sept 15, 2026 from public profiles, kworb, Meta Ad Library, and a post-level audit of Allen&apos;s Instagram, TikTok, and YouTube. Photography and video stills belong to Allen Stone and their original publishers and are shown for proposal purposes only.
          </p>
        </details>
      </div>
      <footer className={`${s.footer} ${s.mono}`}>
        <Image unoptimized src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width={150} height={26} />
        <span>Allen Stone × Crowd Control Digital · Confidential · {HERO.date}</span>
        <a href="#top" style={{ textDecoration: "none" }}>
          Back to top ↑
        </a>
      </footer>
    </main>
    </VideoBoxProvider>
  );
}
