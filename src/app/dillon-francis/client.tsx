"use client";

/**
 * DILLON FRANCIS x CROWD CONTROL DIGITAL: social media and content audit.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Photography from Dillon Francis's official Instagram; AI example creative is labeled as such.
 * Every referenced social post opens in the shadowbox (video-box.tsx).
 */

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, animate, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import s from "./df.module.css";
import { VideoBoxProvider, useVideoBox, type VideoItem } from "./video-box";
import { THUMB_IDS } from "@/lib/dillon-francis/thumbs";
import { TEARDOWNS } from "@/lib/dillon-francis/teardowns";
import {
  IMG,
  P,
  PH,
  ART,
  CR,
  NAV,
  HERO,
  MARQUEE,
  SUMMARY,
  TIMELINE,
  ARTIST_INTRO,
  LISTENERS,
  ARTIST_STATS,
  CATALOG,
  RECENT,
  ARTIST_NOTES,
  ERAS,
  BRAND_INTRO,

  CONSISTENCY,
  ASSETS,
  WORDMARKS,
  VOICE,
  CHANNELS,
  CADENCE,
  FORMATS,
  CONSISTENCY_SUMMARY,
  PEER_INTRO,
  FAN_INTRO,
  RELEASE,
  PAID,
  HOOKS,
  RARE,
  TOP_POSTS,
  LOW_POSTS,
  SOCIAL_NOTES,
  PEERS,
  METRICS,
  PEER_READ,
  WORLDS,
  BREAKOUTS,
  PEER_PATTERNS,
  FANS,
  QUOTES,
  FAN_BRIEF,
  BRAIN,
  FUNNEL,
  DIRECTION,
  PLAN,
  CREATIVE,
  WHY,
  NEXT,
  SOURCES,
  type Peer,
} from "@/lib/dillon-francis/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2)}M` : n >= 1e4 ? `${Math.round(n / 1e3)}K` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : `${n}`);
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Dillon Francis x Crowd Control: audit walk-through")}&body=${encodeURIComponent("Hi Geoff,\n\nWe've read the Dillon Francis audit and would like to talk it through.\n\nName and team:\nTimes that work:\n")}`;

/* ----------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------- */

const noopSub = () => () => {};
function useReduced() {
  const pref = useReducedMotion();
  const mounted = useSyncExternalStore(noopSub, () => true, () => false);
  return mounted ? !!pref : false;
}

function Reveal({ children, delay = 0, y = 26, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.9, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value]);
  const v = reduce ? value : n;
  return (
    <span ref={ref}>
      {prefix}
      {decimals ? v.toFixed(decimals) : fmt(v)}
      {suffix}
    </span>
  );
}

function Grow({ to, axis = "x", className, style, delay = 0, children }: { to: number; axis?: "x" | "y"; className?: string; style?: CSSProperties; delay?: number; children?: ReactNode }) {
  const reduce = useReduced();
  const ref = useRef<HTMLSpanElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const key = axis === "x" ? "scaleX" : "scaleY";
  const show = reduce || seen;
  return (
    <motion.span ref={ref} className={className} style={style} initial={{ [key]: reduce ? to : 0 }} animate={{ [key]: show ? to : 0 }} transition={{ duration: reduce ? 0 : 1.2, ease: EASE, delay: reduce ? 0 : delay }}>
      {children}
    </motion.span>
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

function Head({ n, label, title, children }: { n: string; label: string; title: string; children?: ReactNode }) {
  return (
    <div className={s.sectionHead}>
      <Reveal>
        <Label n={n}>{label}</Label>
        <h2 className={s.h2}>{title}</h2>
      </Reveal>
      {children && (
        <Reveal delay={0.1}>
          <div className={s.intro}>{children}</div>
        </Reveal>
      )}
    </div>
  );
}

function SubHead({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className={s.subHead}>
      <h3 className={s.h3}>{title}</h3>
      {aside && <span className={`${s.mono} ${s.dim}`}>{aside}</span>}
    </div>
  );
}

const PlayIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path fill="currentColor" d="M4 2.5v11l9-5.5z" />
  </svg>
);

/* ----------------------------------------------------------------------------
 * Shadowbox registry
 * ------------------------------------------------------------------------- */

const platformOf = (href: string) =>
  /tiktok/.test(href) ? "TikTok" : /youtube|youtu\.be/.test(href) ? "YouTube" : /instagram/.test(href) ? "Instagram" : /reddit/.test(href) ? "Reddit" : /x\.com|twitter/.test(href) ? "X" : "Web";

const idOf = (href: string) => {
  const ig = href.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
  if (ig) return ig[1];
  const tt = href.match(/video\/(\d+)/);
  if (tt) return tt[1];
  return "";
};

const THUMBS = new Set<string>(THUMB_IDS);
const posterOf = (href: string) => {
  const id = idOf(href);
  return id && THUMBS.has(id) ? P(id) : undefined;
};

function item(href: string, title: string, views?: string, context?: string, extra?: Partial<VideoItem>): VideoItem {
  const metric = views && /plays/.test(views) ? "plays" : views && /likes/.test(views) ? "likes" : views && /comments/.test(views) ? "comments" : "views";
  return {
    href,
    title,
    views: views?.replace(/ (plays|likes|views|comments)$/, ""),
    platform: platformOf(href),
    metric,
    context,
    poster: posterOf(href),
    teardown: TEARDOWNS[idOf(href)],
    ...extra,
  };
}

/* ----------------------------------------------------------------------------
 * Chrome
 * ------------------------------------------------------------------------- */

function TopBar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);
  return (
    <header className={`${s.topbar} ${solid ? s.topbarSolid : ""}`}>
      <a className={s.brand} href="#top" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>for Dillon Francis</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={NEXT.book} target="_blank" rel="noreferrer">
        Book a call
      </a>
    </header>
  );
}

function Progress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className={s.progress} style={{ scaleX: x }} />;
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const reduce = useReduced();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.14]);
  const words = HERO.title.split(" ");
  const [revealed, setRevealed] = useState(false);
  return (
    <section className={s.hero} ref={ref} id="top">
      <motion.div className={s.heroMedia} style={{ y, scale }}>
        <Image src={PH("DO6h5MyEnvM-8")} alt="Dillon Francis at the decks facing a huge festival crowd, smiley on the back of his shirt" fill priority sizes="100vw" style={{ objectPosition: "50% 38%" }} />
      </motion.div>
      <div className={s.heroShade} />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
        </Reveal>
        <h1 className={s.heroTitle} aria-label={HERO.title} data-revealed={reduce || revealed ? "" : undefined}>
          {words.map((w, i) => (
            <span className={s.word} key={w + i} aria-hidden="true">
              <motion.span className={s.letter} initial={reduce ? false : { y: "108%" }} animate={{ y: "0%" }} transition={{ duration: 1.05, ease: EASE, delay: 0.15 + i * 0.09 }} onAnimationComplete={i === words.length - 1 ? () => setRevealed(true) : undefined}>
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className={s.heroRow}>
          <Reveal delay={0.35}>
            <div className={s.heroLine}>{HERO.line}</div>
            <p className={s.heroSub}>{HERO.sub}</p>
            <p className={s.heroBody}>{HERO.body}</p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className={s.heroStats}>
              {HERO.stats.map((st) => (
                <div key={st.label}>
                  <span className={s.heroStat}>
                    <Counter value={st.value} decimals={"decimals" in st ? st.decimals : 0} suffix={"suffix" in st ? st.suffix : ""} />
                  </span>
                  <span className={s.heroStatLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>{HERO.date}</span>
          <span className={s.photoCredit}>Photography: Dillon Francis official Instagram</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const reduce = useReduced();
  const x = useMotionValue(0);
  const track = useRef<HTMLDivElement>(null);
  useAnimationFrame((_, delta) => {
    if (reduce || !track.current) return;
    const half = track.current.scrollWidth / 2;
    let next = x.get() - delta * 0.05;
    if (-next >= half) next += half;
    x.set(next);
  });
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className={s.marquee} aria-hidden="true">
      <motion.div className={s.marqueeTrack} ref={track} style={{ x }}>
        {[...row, ...row].map((t, i) => (
          <span className={s.marqueeItem} key={i}>
            {t}
            <i className={s.marqueeDot} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function PhotoBand({ imgs }: { imgs: { src: string; alt: string; pos?: string }[] }) {
  return (
    <div className={s.band}>
      {imgs.map((im) => (
        <div key={im.src}>
          <Image src={PH(im.src)} alt={im.alt} fill sizes="(max-width: 1000px) 50vw, 25vw" style={{ objectFit: "cover", objectPosition: im.pos || "50% 40%" }} />
        </div>
      ))}
    </div>
  );
}

function Break({ src, alt, line, sub, pos = "50% 50%" }: { src: string; alt: string; line: string; sub?: string; pos?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  return (
    <div className={s.breakImg} ref={ref}>
      <motion.div style={{ position: "absolute", inset: "-10% 0", y }}>
        <Image src={PH(src)} alt={alt} fill sizes="100vw" style={{ objectFit: "cover", objectPosition: pos }} />
      </motion.div>
      <div className={s.breakText}>
        <Reveal>
          <p>{line}</p>
          {sub && <span className={`${s.mono} ${s.muted}`}>{sub}</span>}
        </Reveal>
      </div>
    </div>
  );
}

function HBars({ rows, max, fmtV, unit = "" }: { rows: { k: string; v: number; n?: string; self?: boolean; hi?: boolean }[]; max: number; fmtV?: (v: number) => string; unit?: string }) {
  return (
    <div className={s.hbars}>
      {rows.map((r, i) => (
        <div className={s.hbar} key={r.k} data-self={r.self ? "" : undefined} data-hi={r.hi ? "" : undefined}>
          <div className={s.hbarK}>
            {r.k}
            {r.n && <small>{r.n}</small>}
          </div>
          <div className={s.hbarT}>
            <Grow to={Math.max(0.004, r.v / max)} className={s.hbarF} delay={i * 0.05} />
          </div>
          <div className={s.hbarV}>
            {fmtV ? fmtV(r.v) : r.v}
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

type PostT = { href: string; img: string; who: string; metric: string; note: string; x?: string };

function PostGrid({ posts, label, low }: { posts: readonly PostT[]; label: string; low?: boolean }) {
  const open = useVideoBox();
  const group = { label, items: posts.map((p) => item(p.href, p.x ? p.who : "Dillon Francis", p.metric, p.note, { low })) };
  return (
    <div className={s.posts}>
      {posts.map((p, i) => (
        <Reveal key={p.href} delay={(i % 4) * 0.06} style={{ display: "flex" }}>
          <a className={s.post} href={p.href} target="_blank" rel="noreferrer" onClick={open(group, i)} data-low={low ? "" : undefined} style={{ width: "100%" }}>
            <div className={s.postMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={P(p.img)} alt="" loading="lazy" />
              {low && <span className={`${s.lowTag} ${s.mono}`}>Low performer</span>}
              <span className={s.postPlay}>
                <PlayIcon />
              </span>
            </div>
            <div className={s.postBody}>
              <span className={`${s.postWho} ${s.mono}`}>{p.who}</span>
              <span className={s.postMetric}>{p.metric}</span>
              {p.x && <span className={s.postX}>{p.x}</span>}
              {TEARDOWNS[idOf(p.href)] && <span className={s.tdFlag}>Full teardown</span>}
              <span className={s.postNote}>{p.note}</span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * 01 Summary
 * ------------------------------------------------------------------------- */

function Summary() {
  return (
    <section className={s.section} id="summary">
      <Head n="01" label="Summary" title="Summary">
        {SUMMARY.intro}
      </Head>
      <div className={s.sumGrid}>
        {SUMMARY.items.map((it, i) => (
          <Reveal key={it.n} delay={(i % 3) * 0.08} style={{ display: "flex" }}>
            <a className={s.sumCard} href={`#${it.to}`} style={{ width: "100%" }}>
              <span className={s.sumN}>{it.n}</span>
              <h3>{it.head}</h3>
              <p>{it.body}</p>
              <span className={`${s.sumGo} ${s.mono}`}>See the data</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 02 Artist
 * ------------------------------------------------------------------------- */

function ListenerChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const W = 1000;
  const H = 300;
  const vals = LISTENERS.values;
  const lo = 2.2e6;
  const hi = 5.5e6;
  const xs = (i: number) => (i / (vals.length - 1)) * W;
  const ys = (v: number) => H - ((v - lo) / (hi - lo)) * H;
  const d = vals.map((v, i) => `${i ? "L" : "M"}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(" ");
  const area = `${d} L${W},${H} L0,${H} Z`;
  const grid = [2.5e6, 3.5e6, 4.5e6, 5.5e6];
  return (
    <div className={s.line}>
      <div className={`${s.chartLegend} ${s.mono}`}>
        <span>
          <i style={{ background: "var(--red)" }} />
          Spotify monthly listeners, by month
        </span>
        <span>January 2024 to October 2026</span>
      </div>
      <svg ref={ref} className={s.lineSvg} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" role="img" aria-label="Spotify monthly listeners from 4.99M in January 2024 to 2.53M in October 2026">
        {grid.map((g) => (
          <g key={g}>
            <line x1="0" x2={W} y1={ys(g)} y2={ys(g)} stroke="var(--line2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <text x="4" y={ys(g) - 6} fill="var(--dim)" style={{ font: "10px var(--mono)" }}>
              {(g / 1e6).toFixed(1)}M
            </text>
          </g>
        ))}
        <motion.path d={area} fill="rgba(253,55,55,0.08)" initial={{ opacity: reduce ? 1 : 0 }} animate={{ opacity: inView || reduce ? 1 : 0 }} transition={{ duration: 1.2, delay: 0.6 }} />
        <motion.path d={d} fill="none" stroke="var(--red)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: inView || reduce ? 1 : 0 }} transition={{ duration: reduce ? 0 : 2, ease: EASE }} />
        {LISTENERS.marks.map((m) => (
          <g key={m.l}>
            <line x1={xs(m.i)} x2={xs(m.i)} y1={ys(vals[m.i])} y2={H} stroke="var(--paper)" strokeDasharray="3 4" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.45" />
            <circle cx={xs(m.i)} cy={ys(vals[m.i])} r="4" fill="var(--paper)" />
          </g>
        ))}
      </svg>
      <div className={`${s.lineAxis} ${s.mono}`}>
        <span>Jan 2024</span>
        <span>Oct 2026</span>
      </div>
      <div className={`${s.lineMarks} ${s.mono}`}>
        {LISTENERS.marks.map((m) => (
          <span key={m.l} style={{ left: `${(m.i / (vals.length - 1)) * 100}%` }}>
            {m.l}
          </span>
        ))}
      </div>
    </div>
  );
}

function Artist() {
  return (
    <section className={s.section} id="artist">
      <Head n="02" label="Where Dillon stands" title="The Artist">
        {ARTIST_INTRO}
      </Head>
      <Reveal>
        <div className={`${s.tl} ${s.tl7}`}>
          {TIMELINE.map((t) => (
            <div className={s.tlItem} key={t.y} data-s="held">
              <span className={s.tlY}>{t.y}</span>
              <h4>{t.h}</h4>
              <p>{t.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className={s.sub}>
        <ListenerChart />
      </Reveal>
      <div className={s.stats} style={{ marginTop: 1 }}>
        {ARTIST_STATS.map((st, i) => (
          <Reveal key={st.l} delay={i * 0.06}>
            <span className={s.statV}>{st.v}</span>
            <span className={s.statL}>{st.l}</span>
          </Reveal>
        ))}
      </div>
      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            The catalog does the daily work
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Lifetime Spotify streams, millions.
          </p>
          <HBars rows={CATALOG.map((c, i) => ({ k: c.k, n: c.y, v: c.v, hi: i < 2 }))} max={230} fmtV={(v) => `${v.toFixed(1)}M`} />
          <p className={s.callout} style={{ marginTop: 22 }}>
            {ARTIST_NOTES.catalog}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Releases since July 2025
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Lifetime Spotify streams to October 7, millions.
          </p>
          <HBars rows={RECENT.map((c) => ({ k: c.k, v: c.v }))} max={3.5} fmtV={(v) => `${v.toFixed(2)}M`} />
          <p className={s.note} style={{ marginTop: 22 }}>
            {ARTIST_NOTES.tier}
          </p>
          <p className={s.note} style={{ marginTop: 10 }}>
            {ARTIST_NOTES.listen}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 03 Brand
 * ------------------------------------------------------------------------- */

function Brand() {
  return (
    <section className={s.section} id="brand">
      <Head n="03" label="Brand audit" title="The Brand">
        {BRAND_INTRO}
      </Head>

      <Reveal>
        <SubHead title="Four eras in twelve years" aside="Release covers, 2014 to 2026" />
      </Reveal>
      <div className={s.eras}>
        {ERAS.map((e, i) => (
          <Reveal key={e.k} delay={0.04 * i}>
            <div className={s.era} data-sys={e.k === "Face on fire" ? "" : undefined}>
              <div>
                <h4>{e.k}</h4>
                <small className={`${s.mono} ${s.muted}`}>
                  {e.when}
                  <br />
                  {e.label}
                </small>
              </div>
              <div className={s.eraCovers}>
                {e.covers.map((c) => (
                  <div key={c}>
                    <Image src={ART(c)} alt="" fill sizes="120px" />
                  </div>
                ))}
              </div>
              <p>{e.read}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Brand consistency
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Scored 0 to 10 across all 43 covers, the marks in use and the tour artwork.
          </p>
          <HBars rows={CONSISTENCY.map((c) => ({ k: c.k, n: c.n, v: c.v, self: c.v <= 3 }))} max={10} fmtV={(v) => `${v}`} unit="/10" />
          <div className={s.duel} style={{ marginTop: 26 }}>
            <div>
              <span className={s.duelV}>{CONSISTENCY_SUMMARY.overall}</span>
              <span className={s.statL}>overall, out of 10</span>
            </div>
            <div>
              <span className={s.duelV}>7</span>
              <span className={s.statL}>for his face and characters, the one steady asset</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Every cover since 2014
          </h3>
          <div className={s.coverGrid}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/art/covers-grid.webp`} alt="Contact sheet of all 43 Dillon Francis release covers from 2014 to 2026 in date order" loading="lazy" />
          </div>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="Three assets" aside="What the brand already owns" />
        <div className={s.assets}>
          {ASSETS.map((a) => (
            <div key={a.k}>
              <span className={`${s.mono} ${s.red}`}>{a.k}</span>
              <span className={s.assetBig}>{a.v}</span>
              <p>{a.b}</p>
              <footer className={s.mono}>{a.proof}</footer>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="The marks in use" aside="Website, store and tour" />
        <p className={s.intro} style={{ marginBottom: 26, maxWidth: "80ch" }}>
          {WORDMARKS.intro}
        </p>
        <div className={s.marks}>
          {WORDMARKS.items.map((w) => (
            <div className={s.mark} key={w.k}>
              <div className={s.markImg} data-png={"png" in w && w.png ? "" : undefined}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/logos/${w.img}.${"png" in w && w.png ? "png" : "webp"}`} alt={w.k} loading="lazy" />
              </div>
              <div>
                <b>{w.k}</b>
                <span>{w.d}</span>
              </div>
            </div>
          ))}
        </div>
        <p className={s.note} style={{ marginTop: 16, maxWidth: "90ch" }}>
          {WORDMARKS.note}
        </p>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="The voice" aside="From 2026 captions" />
        <div className={s.gaps}>
          {VOICE.map((v) => (
            <div className={s.gap} key={v.k}>
              <b>{v.k}</b>
              <span>{v.e}</span>
            </div>
          ))}
        </div>
        <p className={s.callout} style={{ marginTop: 26 }}>
          <strong>The voice is intact. The distribution is not.</strong> The Fall and Cry Myself To Sleep rollout posts drew 27K to 86K views on Instagram against 3.25M followers, while his five biggest summer posts reached 248K to 544K.
        </p>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 Social
 * ------------------------------------------------------------------------- */

function CadBars({ counts, max }: { counts: number[]; max: number }) {
  return (
    <div className={s.cadBars}>
      {counts.map((v, i) => (
        <motion.span
          key={i}
          className={s.cadBar}
          title={`${CADENCE.months[i]}: ${v} posts`}
          data-zero={v ? undefined : ""}
          style={{ height: v ? `${(v / max) * 100}%` : undefined, transformOrigin: "50% 100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE, delay: i * 0.015 }}
        />
      ))}
    </div>
  );
}

function Social() {
  const max = Math.max(...CADENCE.tt, ...CADENCE.ig);
  const rmax = Math.max(...RELEASE.map((r) => Math.max(r.rel, r.non)));
  return (
    <section className={s.section} id="social">
      <Head n="04" label="Owned social" title="Social">
        Two years of public posts on Instagram, TikTok, YouTube and X: 260 Instagram posts and 200 reels, 300 TikToks, 280 YouTube uploads and 60 X posts. Volume is steady. What changes the result is whether the post is a bit.
      </Head>

      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Handle</th>
                <th>Followers</th>
                <th>Last post</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {CHANNELS.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td className={s.muted} data-l="Handle">
                    {c.handle}
                  </td>
                  <td data-l="Followers">
                    <span className={s.tableNum}>{c.followers}</span>
                  </td>
                  <td className={s.muted} style={{ whiteSpace: "nowrap" }} data-l="Last post">
                    {c.last || "n/a"}
                  </td>
                  <td className={s.muted} data-l="State">
                    {c.state}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Posts per month" aside="October 2025 to October 2026" />
        <div className={s.cad}>
          <div className={s.cad2}>
            <div className={s.cadRow}>
              <span>Instagram</span>
              <CadBars counts={CADENCE.ig} max={max} />
            </div>
            <div className={s.cadRow} data-tt="">
              <span>TikTok</span>
              <CadBars counts={CADENCE.tt} max={max} />
            </div>
            <div className={`${s.cadMonths} ${s.mono}`}>
              <span />
              <div>
                <span>2025</span>
                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
        <p className={s.callout} style={{ marginTop: 22 }}>
          {CADENCE.note}
        </p>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            What works, by format
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Median plays, Instagram video posts since October 2025.
          </p>
          <HBars rows={FORMATS.map((f, i) => ({ k: f.k, n: f.n, v: f.v, hi: i < 2, self: f.k.startsWith("Release") }))} max={Math.max(...FORMATS.map((x) => x.v))} fmtV={compact} />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Release posts, against everything else
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Posts that name a track or use release language, against posts that don&apos;t.
          </p>
          <div className={s.vs}>
            {RELEASE.map((r) => (
              <div className={s.vsRow} key={r.k}>
                <h5>{r.k}</h5>
                <div className={s.vsBars}>
                  <div className={s.vsBar} data-rel="">
                    <span>Release</span>
                    <div>
                      <Grow to={r.rel / rmax} className={s.hbarNeg} />
                    </div>
                    <b>{fmt(r.rel)}</b>
                  </div>
                  <div className={s.vsBar}>
                    <span>Everything else</span>
                    <div>
                      <Grow to={r.non / rmax} className={s.hbarF} style={{ background: "var(--paper)" }} delay={0.1} />
                    </div>
                    <b>{fmt(r.non)}</b>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 18 }}>
            Release posts lose on every platform. On TikTok the same pattern holds by format: comedy and collabs lead at a median 19,800 plays, release promo trails at 4,527.
          </p>
        </Reveal>
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Promoted against organic
          </h3>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>{PAID.promoted.er}%</span>
              <span className={s.statL}>engagement on {PAID.promoted.n} promoted TikToks since 2024, median {fmt(PAID.promoted.plays)} plays</span>
            </div>
            <div>
              <span className={s.duelV}>{PAID.organic.er}%</span>
              <span className={s.statL}>engagement on {PAID.organic.n} organic TikToks, median {fmt(PAID.organic.plays)} plays</span>
            </div>
          </div>
          <p className={s.callout} style={{ marginTop: 22 }}>
            {PAID.note}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            What the caption asks for
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Median comments per Instagram post, by the caption&apos;s first line.
          </p>
          <HBars rows={HOOKS.map((h, i) => ({ k: h.k, n: h.n, v: h.v, hi: i === 0 }))} max={Math.max(...HOOKS.map((x) => x.v))} fmtV={(v) => fmt(v)} />
          <p className={s.note} style={{ marginTop: 14 }}>
            A direct ask lifts comments, but no post in the sample puts the ask on screen. It lives only in the caption.
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="Rare formats that over-deliver" aside="Used least, earn most" />
        <div className={s.trio}>
          {RARE.map((r) => (
            <div key={r.k}>
              <span className={`${s.mono} ${s.muted}`}>
                {r.k}, {r.n}
              </span>
              <b style={{ marginTop: 12 }}>{r.v}</b>
              <span>{r.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="Top performers" aside="Tap for the video and its full teardown" />
        </Reveal>
        <PostGrid posts={TOP_POSTS} label="Top performers" />
      </div>
      <div className={s.sub}>
        <Reveal>
          <SubHead title="Low performers" aside="Shown for contrast" />
        </Reveal>
        <PostGrid posts={LOW_POSTS} label="Low performers" low />
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 14 }}>
            YouTube
          </h3>
          <p className={s.intro} style={{ fontSize: 16 }}>
            {SOCIAL_NOTES.youtube}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 14 }}>
            X
          </h3>
          <p className={s.intro} style={{ fontSize: 16 }}>
            {SOCIAL_NOTES.x}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 05 Peers
 * ------------------------------------------------------------------------- */

function Explorer() {
  const [m, setM] = useState<(typeof METRICS)[number]["id"]>("ttPpf");
  const meta = METRICS.find((x) => x.id === m)!;
  const rows = useMemo(() => [...PEERS].sort((a, b) => (b[m as keyof Peer] as number) - (a[m as keyof Peer] as number)), [m]);
  const vals = PEERS.map((p) => p[m as keyof Peer] as number);
  const max = Math.max(...vals);
  const show = (v: number) => (v < 0 ? "hidden" : meta.fmt === "pct1" ? `${v.toFixed(2)}%` : meta.fmt === "dec3" ? v.toFixed(3) : meta.fmt === "dec" ? v.toFixed(2) : compact(v));
  return (
    <div className={s.explorer}>
      <div className={s.tabs} role="group" aria-label="Choose a metric">
        {METRICS.map((x) => (
          <button key={x.id} aria-pressed={m === x.id} onClick={() => setM(x.id)}>
            {x.k}
          </button>
        ))}
      </div>
      <div>
        {rows.map((p) => {
          const v = p[m as keyof Peer] as number;
          return (
            <motion.div layout transition={{ duration: 0.6, ease: EASE }} className={s.exRow} key={p.k} data-self={p.self ? "" : undefined}>
              <span className={s.exK}>{p.k}</span>
              <span className={s.exT}>
                <span className={s.exF} style={{ width: `${v < 0 ? 0 : Math.max(0.6, (v / max) * 100)}%` }} />
              </span>
              <span className={s.exV}>{show(v)}</span>
            </motion.div>
          );
        })}
      </div>
      <p className={s.note} style={{ marginTop: 16 }}>
        {meta.note} Pulled October 9, 2026.
      </p>
    </div>
  );
}

function Peers() {
  return (
    <section className={s.section} id="peers">
      <Head n="05" label="Peer benchmark" title="Peers">
        {PEER_INTRO}
      </Head>
      <Reveal>
        <Explorer />
      </Reveal>
      <Reveal className={s.sub}>
        <div className={`${s.trio} ${s.trio4}`}>
          {PEER_READ.map((r) => (
            <div key={r.l}>
              <b>{r.v}</b>
              <span>{r.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="What breaks out" aside="Peer posts at 11x to 478x their own median" />
        </Reveal>
        <PostGrid posts={BREAKOUTS} label="Peer breakouts" />
      </div>

      <Reveal className={s.sub}>
        <div className={s.why}>
          {PEER_PATTERNS.map((p) => (
            <div key={p.h}>
              <h4>{p.h}</h4>
              <p>{p.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Every peer at the top has a named world" />
        <div className={s.worlds}>
          {WORLDS.map((w) => (
            <div key={w.k} data-self={"self" in w && w.self ? "" : undefined}>
              <small className={s.mono}>{w.k}</small>
              <h4>{w.w}</h4>
              <p>{w.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 06 Fans
 * ------------------------------------------------------------------------- */

function Fans() {
  const open = useVideoBox();
  const quoteGroup = { label: "In their words", items: QUOTES.map((q) => item(q.href, q.who, undefined, undefined, { quote: q.q })) };
  const tmax = Math.max(...FANS.themes.map((t) => t.share));
  return (
    <section className={s.section} id="fans">
      <Head n="06" label="Social listening" title="The Fans">
        {FAN_INTRO}
      </Head>

      <Reveal>
        <div className={s.stats}>
          <div>
            <span className={s.statV} style={{ color: "var(--red)" }}>
              <Counter value={FANS.positive} decimals={1} suffix="%" />
            </span>
            <span className={s.statL}>positive, among comments with a clear tone</span>
          </div>
          {FANS.sources.slice(0, 3).map((x) => (
            <div key={x.k}>
              <span className={s.statV}>
                <Counter value={x.v} />
              </span>
              <span className={s.statL}>{x.k} items</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Themes
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Share of all fan items. The red part of each bar is that theme&apos;s negative share.
          </p>
          <div className={s.hbars}>
            {FANS.themes.map((t, i) => (
              <div className={s.hbar} key={t.k}>
                <div className={s.hbarK}>
                  {t.k}
                  <small>{t.neg >= 20 ? `${Math.round(t.neg)}% negative` : `${Math.round(t.pos)}% positive`}</small>
                </div>
                <div className={s.hbarT}>
                  <Grow to={t.share / tmax} className={s.hbarF} delay={i * 0.03} />
                  <Grow to={(t.share * t.neg) / 100 / tmax} className={s.hbarNeg} delay={i * 0.03 + 0.2} />
                </div>
                <div className={s.hbarV}>{t.share}%</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            What fans ask
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            {fmt(FANS.questions.reduce((t, q) => t + q.n, 0))} question comments, top five types.
          </p>
          <div className={s.qlist}>
            {FANS.questions.map((q) => (
              <div className={s.qrow} key={q.k}>
                <b>{q.k}</b>
                <span>{q.n}</span>
              </div>
            ))}
          </div>
          <h3 className={s.h3} style={{ margin: "40px 0 18px" }}>
            How often Dillon replies
          </h3>
          <div className={s.qlist}>
            {FANS.replies.map((r) => (
              <div className={s.qrow} key={r.k}>
                <b>{r.k}</b>
                <span>{r.v}</span>
                <em>{r.n}</em>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            Places fans name most: {FANS.places.join(", ")}.
          </p>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="In their words" aside="Tap a quote to see it in context" />
        </Reveal>
        <div className={s.quotes}>
          {QUOTES.map((q, i) => (
            <a key={q.q} className={s.quote} data-tone={q.tone === "mix" ? "q" : q.tone} href={q.href} target="_blank" rel="noreferrer" onClick={open(quoteGroup, i)}>
              <blockquote>&ldquo;{q.q}&rdquo;</blockquote>
              <footer className={s.mono}>
                <span>{q.who}</span>
                <span className={s.red}>View</span>
              </footer>
            </a>
          ))}
        </div>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The fan brief" aside="What the comments ask for" />
        <div className={s.why}>
          {FAN_BRIEF.map((b) => (
            <div key={b.h}>
              <h4>{b.h}</h4>
              <p>{b.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 07 Video AI
 * ------------------------------------------------------------------------- */

function Finding({ f, i, openIdx, setOpen }: { f: (typeof BRAIN.findings)[number]; i: number; openIdx: number; setOpen: (n: number) => void }) {
  const open = useVideoBox();
  const isOpen = openIdx === i;
  const group = { label: f.h, items: f.clips.map((c) => item(c.href, c.label, c.views, undefined, { low: "low" in c && !!c.low })) };
  return (
    <div className={s.finding} data-open={isOpen ? "" : undefined}>
      <button className={s.findingBtn} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
        <span>F{String(i + 1).padStart(2, "0")}</span>
        <h3>{f.h}</h3>
        <span className={s.findingPlus} aria-hidden="true">
          <svg viewBox="0 0 16 16">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div className={s.findingBody} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.55, ease: EASE }}>
            <div className={s.findingGrid}>
              <div>
                <p>{f.b}</p>
                <p className={s.take}>
                  <span>For Dillon</span>
                  {f.take}
                </p>
              </div>
              <div className={s.chips}>
                {f.clips.map((c, j) => {
                  const poster = posterOf(c.href);
                  return (
                    <a key={c.href + j} className={s.chip} href={c.href} target="_blank" rel="noreferrer" onClick={open(group, j)} data-low={"low" in c && c.low ? "" : undefined}>
                      <span className={s.chipImg}>
                        {poster ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={poster} alt="" loading="lazy" />
                        ) : (
                          <span className={s.noThumb} />
                        )}
                      </span>
                      <span>
                        <b>{c.label}</b>
                        <small>
                          {platformOf(c.href)}, {c.views}
                          {TEARDOWNS[idOf(c.href)] ? ", full teardown" : ""}
                        </small>
                      </span>
                      <span className={s.chipPlay}>
                        <PlayIcon />
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Video() {
  const [openIdx, setOpen] = useState(0);
  return (
    <section className={s.section} id="video">
      <Head n="07" label="Video intelligence" title="Video AI">
        {BRAIN.intro}
      </Head>
      <Reveal>
        <div className={s.brainHead}>
          <div className={s.brainNum}>
            {BRAIN.total}
            <small>videos indexed in TwelveLabs Jockey</small>
          </div>
          <div className={s.brainMix}>
            {BRAIN.corpus.map((c) => (
              <div key={c.k}>
                <b>{c.v}</b>
                <span>{c.k}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <div className={s.findings}>
        {BRAIN.findings.map((f, i) => (
          <Finding key={f.h} f={f} i={i} openIdx={openIdx} setOpen={setOpen} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 08 Funnel
 * ------------------------------------------------------------------------- */

function Ring({ v }: { v: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const reduce = useReduced();
  const col = v < 60 ? "var(--red)" : v < 90 ? "#b8b8c0" : "var(--paper)";
  return (
    <svg className={s.ringSvg} viewBox="0 0 104 104" aria-hidden="true">
      <circle cx="52" cy="52" r={r} fill="none" stroke="var(--line2)" strokeWidth="6" />
      <motion.circle cx="52" cy="52" r={r} fill="none" stroke={col} strokeWidth="6" strokeDasharray={c} transform="rotate(-90 52 52)" initial={{ strokeDashoffset: reduce ? c * (1 - v / 100) : c }} whileInView={{ strokeDashoffset: c * (1 - v / 100) }} viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE }} />
      <text x="52" y="60" textAnchor="middle" fill="var(--paper)" style={{ font: "700 26px N27, sans-serif" }}>
        {v}
      </text>
    </svg>
  );
}

function Funnel() {
  return (
    <section className={s.section} id="funnel">
      <Head n="08" label="Links, site, search and ads" title="Funnel">
        {FUNNEL.intro}
      </Head>

      <Reveal>
        <h3 className={s.h3} style={{ marginBottom: 18 }}>
          Every door, today
        </h3>
        <div className={s.story}>
          {FUNNEL.doors.map((r) => (
            <div className={s.storyRow} key={r.where}>
              <b>{r.where}</b>
              <p>{r.says}</p>
              <span className={s.tag} data-s={r.state === "away" ? "broken" : r.state === "stale" ? "stale" : r.state === "own" ? "own" : undefined}>
                {r.state === "away" ? "Points away" : r.state === "stale" ? "Out of date" : r.state === "own" ? "Owned" : "Thin"}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Lighthouse, dillonfrancis.com" aside="Mobile lab run, October 9, 2026" />
        <div className={s.rings}>
          {FUNNEL.scores.map((sc) => (
            <div className={s.ring} key={sc.k}>
              <Ring v={sc.v} />
              <h4>{sc.k}</h4>
              <p>{sc.note}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Tracking and capture
          </h3>
          <div className={s.checks}>
            {FUNNEL.pixels.map((t) => (
              <div className={s.check} key={t.k}>
                <span className={t.ok ? s.tick : s.cross} aria-label={t.ok ? "In place" : "Missing"}>
                  {t.ok ? "✓" : "✕"}
                </span>
                <b>{t.k}</b>
                <span>{t.note}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Meta ads, Dillon Francis page
          </h3>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Campaign</th>
                  <th>Ads</th>
                  <th>When</th>
                </tr>
              </thead>
              <tbody>
                {FUNNEL.ads.map((a) => (
                  <tr key={a.k} data-hot={a.n === "None found" ? "" : undefined}>
                    <td>{a.k}</td>
                    <td className={s.muted}>{a.n}</td>
                    <td className={s.muted}>{a.d || "n/a"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            Meta Ad Library, all statuses, October 9, 2026. 16 ads in 2026, every one a ticket ad landing on a venue or promoter page.
          </p>
        </Reveal>
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            What Google suggests
          </h3>
          <div className={s.searchBox}>
            {FUNNEL.autocomplete.map((a) => (
              <div className={s.searchRow} key={a.q}>
                <div className={s.searchQ}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {a.q}
                </div>
                <div className={s.searchA}>
                  {a.a.map((x) => (
                    <span key={x} data-hot={x === "fall" ? "" : undefined}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            Google autocomplete, US, October 9, 2026. Highlighted: the new single, already in the top three.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            The name in search
          </h3>
          <p className={s.callout}>{FUNNEL.search}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 09 Direction
 * ------------------------------------------------------------------------- */

function Direction() {
  return (
    <section className={s.section} id="direction">
      <Head n="09" label="Brand direction" title="Brand Direction">
        {DIRECTION.intro}
      </Head>

      <Reveal>
        <span className={`${s.mono} ${s.muted}`}>Positioning</span>
        <h3 className={s.posLine} style={{ marginTop: 18 }}>
          {DIRECTION.position.pre}<em>{DIRECTION.position.em}</em>{DIRECTION.position.post}
        </h3>
        <p className={s.intro} style={{ marginTop: 26, maxWidth: "78ch" }}>
          {DIRECTION.position.b}
        </p>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="One show, three parts" />
        <div className={s.world}>
          {DIRECTION.world.map((w) => (
            <div key={w.k}>
              <span className={`${s.mono} ${s.red}`}>{w.r}</span>
              <b>{w.k}</b>
              <p>{w.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.eraBlock}>
          <div className={s.eraMedia}>
            <span className={s.aiBadge}>AI example</span>
            <Image src={CR("show-key-art")} alt="An empty late-night talk show set with DJ decks in the host desk and a giant acid green neon smiley on the back wall" fill sizes="(max-width: 1000px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          </div>
          <div className={s.eraText}>
            <span className={`${s.mono} ${s.red}`}>{DIRECTION.era.tag}</span>
            <span className={s.eraName}>{DIRECTION.era.k}</span>
            <p>{DIRECTION.era.b}</p>
          </div>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="The system" aside="What gets locked" />
        <div className={s.sys}>
          {DIRECTION.system.map((x) => (
            <div key={x.k}>
              <h4>{x.k}</h4>
              <p>{x.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Content pillars" />
        <div className={s.pillars}>
          {DIRECTION.pillars.map((p, i) => (
            <div key={p.k}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <h4>{p.k}</h4>
              <p>{p.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Platform roles" />
        <div className={s.platforms}>
          {DIRECTION.platforms.map((p) => (
            <div className={s.platform} key={p.k}>
              <b>{p.k}</b>
              <span>{p.r}</span>
              <p>{p.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 10 Plan
 * ------------------------------------------------------------------------- */

function Plan() {
  const phasesRef = useRef<HTMLDivElement>(null);
  const inView = useInView(phasesRef, { once: true, margin: "-15% 0px" });
  const [on, setOn] = useState(-1);
  useEffect(() => {
    if (!inView) return;
    let i = -1;
    const t = setInterval(() => {
      i += 1;
      setOn(i);
      if (i >= PLAN.phases.length - 1) clearInterval(t);
    }, 260);
    return () => clearInterval(t);
  }, [inView]);
  return (
    <section className={s.section} id="plan">
      <Head n="10" label="Social plan" title="The Plan">
        {PLAN.intro}
      </Head>
      <div className={`${s.phases} ${s.phases4}`} ref={phasesRef}>
        {PLAN.phases.map((p, i) => (
          <div className={s.phase} key={p.k} data-on={on >= i ? "" : undefined}>
            <span className={s.phaseN}>Phase {i + 1}</span>
            <h4>{p.k}</h4>
            <span className={s.phaseWhen}>{p.when}</span>
            <ul>
              {p.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Reveal className={s.sub}>
        <SubHead title="Recurring series" aside="Built from formats that already work" />
        <div className={s.why}>
          {PLAN.series.map((x) => (
            <div key={x.k}>
              <h4>{x.k}</h4>
              <p>{x.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Targets" aside="Set against the peer benchmark" />
        <div className={s.tableWrap}>
          <table className={`${s.table} ${s.kpis}`}>
            <thead>
              <tr>
                <th>Measure</th>
                <th>Today</th>
                <th>Target</th>
                <th>By</th>
              </tr>
            </thead>
            <tbody>
              {PLAN.kpis.map((k) => (
                <tr key={k.k}>
                  <td>{k.k}</td>
                  <td>
                    <span className={s.tableNum}>{k.now}</span>
                  </td>
                  <td>
                    <span className={s.tableNum}>{k.to}</span>
                  </td>
                  <td className={s.muted}>{k.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="What we report, weekly" />
        <ol className={s.measure}>
          {PLAN.measure.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 11 Creative
 * ------------------------------------------------------------------------- */

function AutoVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const reduce = useReduced();
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (inView && !reduce) v.play().catch(() => {});
    else v.pause();
  }, [inView, reduce]);
  return <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" aria-hidden="true" />;
}

function Creative() {
  return (
    <section className={s.section} id="creative">
      <Head n="11" label="Example creative" title="Example Creative">
        {CREATIVE.intro}
      </Head>
      <Reveal>
        <div className={`${s.aiLabel} ${s.mono}`} style={{ marginBottom: 34 }}>
          <i />
          {CREATIVE.label}
        </div>
      </Reveal>
      <div className={`${s.phones} ${s.phones3}`}>
        {CREATIVE.videos.map((v, i) => (
          <Reveal key={v.k} delay={i * 0.08}>
            <div className={s.phoneWrap}>
              <div className={`${s.phone} ${"wide" in v && v.wide ? s.phoneWide : ""}`}>
                <div className={s.screen} data-r={"wide" in v && v.wide ? "169" : "916"}>
                  <AutoVideo src={`${IMG}/video/${v.video}`} poster={CR(v.poster)} />
                  {"big" in v && v.big && (
                    <div className={s.ov}>
                      <span className={s.ovTop}>{v.top}</span>
                      <div>
                        <div className={s.ovBig}>{v.big}</div>
                        <div className={s.ovCta}>{v.cta}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={s.phoneMeta}>
                <span className={`${s.mono} ${s.red}`}>{v.fmt}</span>
                <h4>{v.k}</h4>
                <p>{v.why}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className={`${s.stills} ${s.sub}`}>
        {CREATIVE.stills.map((st, i) => (
          <Reveal key={st.img} delay={(i % 3) * 0.08}>
            <div className={s.still}>
              <div className={s.stillMedia} data-contain={st.img === "cover-system" ? "" : undefined}>
                {st.img !== "cover-system" && <span className={s.aiBadge}>AI example</span>}
                <Image src={CR(st.img)} alt={st.line} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: st.img === "cover-system" ? "contain" : "cover" }} />
                <span className={s.stillLine}>{st.line}</span>
              </div>
              <div className={s.phoneMeta}>
                <span className={`${s.mono} ${s.red}`}>{st.k}</span>
                <p>{st.why}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 12 Why and next
 * ------------------------------------------------------------------------- */

function Next() {
  return (
    <>
      <section className={s.section} id="why">
        <Head n="12" label="Crowd Control" title="Why Crowd Control">
          {WHY.intro}
        </Head>
        <Reveal>
          <div className={s.why}>
            {WHY.points.map((p) => (
              <div key={p.h}>
                <h4>{p.h}</h4>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className={s.sub}>
          <div className={`${s.mono} ${s.dim}`} style={{ marginBottom: 16 }}>
            Select clients
          </div>
          <div className={s.clients}>
            {WHY.clients.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </Reveal>
      </section>

      <div className={s.nextWrap} id="next">
        <div className={s.nextBg}>
          <Image src={PH("DO6h5MyEnvM-8")} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <section className={`${s.section} ${s.nextInner}`}>
          <Reveal>
            <Label n="13">Next steps</Label>
            <h2 className={s.nextTitle}>Next Steps</h2>
          </Reveal>
          <Reveal className={s.sub} style={{ marginTop: 44 }}>
            <div className={s.steps}>
              {NEXT.steps.map((st, i) => (
                <div key={st.h}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h4>{st.h}</h4>
                  <p>{st.b}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <div className={`${s.grid2} ${s.sub}`} style={{ marginTop: 56 }}>
            <Reveal>
              <h3 className={s.h3} style={{ marginBottom: 18 }}>
                What we&apos;d need to start
              </h3>
              <ul className={s.need}>
                {NEXT.need.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className={s.h3} style={{ marginBottom: 18 }}>
                Talk to us
              </h3>
              <p className={s.intro} style={{ marginBottom: 26 }}>
                {NEXT.name}, {NEXT.role}. Pick a time that works for the team, or reply by email.
              </p>
              <div className={s.btns}>
                <a className={s.btn} href={NEXT.book} target="_blank" rel="noreferrer">
                  Book a call <span aria-hidden="true">→</span>
                </a>
                <a className={s.btnGhost} href={MAIL}>
                  {NEXT.email}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <section className={s.section} style={{ paddingTop: 40 }}>
        <details className={s.sources}>
          <summary className={s.mono}>Sources and method</summary>
          <ol>
            {SOURCES.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ol>
          <p className={s.note} style={{ marginTop: 18 }}>
            Figures pulled October 9, 2026. Instagram engagement uses likes plus comments over current followers; Instagram shares, saves and reach are not public. TikTok organic and promoted posts are reported separately. Content formats were classified from captions and checked against thumbnails. Sentiment figures are analytical estimates. Example creative in section 11 was generated with AI for this audit and is directional only; the cover system is a composite of real covers and marks.
          </p>
        </details>
      </section>
      <footer className={`${s.footer} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Prepared for Dillon Francis by Crowd Control Digital</span>
        <span>October 2026</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function DillonFrancisClient() {
  return (
    <VideoBoxProvider>
      <main className={s.page}>
        <Progress />
        <TopBar />
        <Hero />
        <Marquee />
        <Summary />
        <PhotoBand
          imgs={[
            { src: "DdUY4axlPMC-1", alt: "Dillon Francis in a light blue hoodie behind a wall of flame" },
            { src: "DXXbPd_FEb3-6", alt: "Dillon from behind in a Dillon walked so Diplo could run shirt, facing a theater crowd" },
            { src: "DQm16N9ktka-3", alt: "Dillon on the mic at the decks, laughing" },
            { src: "DO6h5MyEnvM-1", alt: "Dillon with a suitcase in front of a jet marked Dillon's Walk Club" },
          ]}
        />
        <Artist />
        <Break src="DXsA_4yFCNk-15" alt="View from behind the booth at Stagecoach over a dense night crowd" line="The audience is still in the room." sub="Stagecoach, April 2026" pos="50% 45%" />
        <Brand />
        <div className={s.rule} />
        <Social />
        <PhotoBand
          imgs={[
            { src: "DXsA_4yFCNk-8", alt: "Black and white live shot of Dillon pointing out from the stage at Stagecoach" },
            { src: "DcJxKcSFC4K-7", alt: "Dillon from behind, arms up over a packed daytime crowd at Zedd in the Park" },
            { src: "DdUY4axlPMC-12", alt: "From behind the decks at an outdoor daytime party, hands up under red umbrellas" },
            { src: "DXXbPd_FEb3-3", alt: "Dillon backstage at the decks with neon hair" },
          ]}
        />
        <Peers />
        <div className={s.rule} />
        <Fans />
        <div className={s.rule} />
        <Video />
        <Break src="DdUY4axlPMC-5" alt="Dillon at the decks of an outdoor garden party, crowd packed in under hanging greenery" line="The jokes already work. They need a home." sub="Outdoor day party, September 2026" pos="50% 40%" />
        <Funnel />
        <div className={s.rule} />
        <Direction />
        <div className={s.rule} />
        <Plan />
        <div className={s.rule} />
        <Creative />
        <div className={s.rule} />
        <Next />
      </main>
    </VideoBoxProvider>
  );
}
