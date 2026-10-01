"use client";

/**
 * MILES MORETTI: internal creator audit for Geoff Shames and Eric Tu.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono),
 * built on the Miami Concours component set. Every referenced post opens in the
 * shadowbox (video-box.tsx). Password gated client-side; noindex in page.tsx.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type MouseEvent, type ReactNode } from "react";
import { AnimatePresence, animate, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import s from "./mm.module.css";
import { VideoBoxProvider, useVideoBox, type VideoItem } from "./video-box";
import {
  IMG,
  P,
  THUMB_IDS,
  PASS_HASH,
  NAV,
  HERO,
  MARQUEE,
  SUMMARY,
  CHINA,
  CHANNELS,
  MONTHS,
  LEAK,
  INTERLUDES,
  FORMATS,
  CLIP,
  TOP_POSTS,
  LOW_POSTS,
  GAP,
  TEARDOWNS,
  BRAIN,
  LISTEN,
  PEERS,
  FORMAT24,
  COLLECTIVE,
  MUSIC,
  PLAN,
  CREATIVE,
  DILIGENCE,
  SOURCES,
  METHOD,
  NEXT,
} from "@/lib/miles-moretti/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const RED = "#fd3737";
const PAPER = "#fafafa";
const LINE = "#262626";
const DIM = "#8d8d96";
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

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
    <motion.div
      className={className}
      style={style}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
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
  return (
    <span ref={ref}>
      {prefix}
      {decimals ? (reduce ? value : n).toFixed(decimals) : fmt(reduce ? value : n)}
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
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ [key]: reduce ? to : 0 }}
      animate={{ [key]: show ? to : 0 }}
      transition={{ duration: reduce ? 0 : 1.2, ease: EASE, delay: reduce ? 0 : delay }}
    >
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

const platformOf = (href: string) => (/tiktok/.test(href) ? "TikTok" : /youtube|youtu\.be/.test(href) ? "YouTube" : /instagram/.test(href) ? "Instagram" : /reddit/.test(href) ? "Reddit" : "Web");

const idOf = (href: string) => {
  const ig = href.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
  if (ig) return ig[1];
  const tt = href.match(/video\/(\d+)/);
  if (tt) return tt[1];
  return "";
};

const THUMBS = new Set<string>(THUMB_IDS);
const posterOf = (href: string) => {
  const yt = href.match(/v=([\w-]{11})/);
  if (yt) return `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg`;
  const id = idOf(href);
  return id && THUMBS.has(id) ? P(id) : undefined;
};

function item(href: string, title: string, views?: string, context?: string, extra?: Partial<VideoItem>): VideoItem {
  const metric = views && /likes/.test(views) ? "likes" : "views";
  return { href, title, views: views?.replace(/ (likes|views)$/, ""), platform: platformOf(href), metric, context, poster: posterOf(href), ...extra };
}

const igUrl = (id: string) => `https://www.instagram.com/reel/${id}/`;
const toSec = (t: string) => {
  const [m, x] = t.split(":").map(Number);
  return m * 60 + (x || 0);
};

/* ----------------------------------------------------------------------------
 * Password gate
 * ------------------------------------------------------------------------- */

const KEY = "mm-audit";
function readKey() {
  try {
    return sessionStorage.getItem(KEY) ?? "";
  } catch {
    return "";
  }
}

function Gate({ children }: { children: ReactNode }) {
  const stored = useSyncExternalStore(noopSub, readKey, () => "pending");
  const [unlocked, setUnlocked] = useState(false);
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);
  if (stored === "pending") return <div className={`${s.page} ${s.gate}`} />;
  if (unlocked || stored === PASS_HASH) return <>{children}</>;
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = String(new FormData(e.currentTarget).get("pw") ?? "").trim().toLowerCase();
    setBusy(true);
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(v));
    const hex = Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    setBusy(false);
    if (hex === PASS_HASH) {
      try {
        sessionStorage.setItem(KEY, hex);
      } catch {}
      setUnlocked(true);
    } else setErr(true);
  };
  return (
    <div className={`${s.page} ${s.gate}`}>
      <form className={s.gateBox} onSubmit={submit}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <div className={`${s.mono} ${s.dim}`}>Internal. Not for Miles or his team</div>
        <h1 className={s.gateTitle}>Miles Moretti audit</h1>
        <label className={`${s.mono} ${s.dim}`} htmlFor="pw">
          Password
        </label>
        <input id="pw" name="pw" type="password" autoComplete="current-password" autoFocus onChange={() => setErr(false)} />
        {err && <span className={`${s.mono} ${s.red}`}>That password is not right</span>}
        <button className={s.btn} type="submit" disabled={busy}>
          Open the audit <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
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
        <span className={s.mono}>Miles Moretti audit</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href="#diligence">
        Internal
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

function FilmCol({ f, i, progress, reduce, onOpen }: { f: { id: string; label: string }; i: number; progress: MotionValue<number>; reduce: boolean; onOpen: (e: MouseEvent<HTMLAnchorElement>) => void }) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : (i % 2 ? -1 : 1) * (60 + i * 14)]);
  return (
    <motion.a href={igUrl(f.id)} target="_blank" rel="noreferrer" onClick={onOpen} aria-label={`Watch the ${f.label} reel`} style={{ y }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.08 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={P(f.id)} alt="" />
      <span className={s.filmV}>
        {f.label}
        <small className={s.mono}>views</small>
      </span>
    </motion.a>
  );
}

function Hero() {
  const reduce = useReduced();
  const open = useVideoBox();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const words = HERO.title.split(" ");
  const group = { label: "Five reels that explain him", items: HERO.film.map((f) => item(igUrl(f.id), "Miles Moretti", `${f.label} views`)) };
  return (
    <section className={s.hero} ref={ref} id="top">
      <div className={s.heroFilm}>
        {HERO.film.map((f, i) => (
          <FilmCol key={f.id} f={f} i={i} progress={scrollYProgress} reduce={reduce} onOpen={open(group, i)} />
        ))}
      </div>
      <div className={s.heroShade} />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
        </Reveal>
        <h1 className={s.heroTitle} aria-label={HERO.title}>
          {words.map((w, i) => (
            <span className={s.word} key={w} aria-hidden="true">
              <motion.span className={s.letter} initial={reduce ? false : { y: "108%" }} animate={{ y: "0%" }} transition={{ duration: 1.05, ease: EASE, delay: 0.15 + i * 0.09 }}>
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
                    <Counter value={st.value} decimals={st.decimals} suffix={st.suffix} />
                  </span>
                  <span className={s.heroStatLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>{HERO.date}</span>
          <span className={s.photoCredit}>Covers: his own reels. Tap to watch</span>
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

/* ----------------------------------------------------------------------------
 * 01 The read
 * ------------------------------------------------------------------------- */

function Summary() {
  return (
    <section className={s.section} id="summary">
      <Head n="01" label="The read" title="Back Him, US First">
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
 * 02 China
 * ------------------------------------------------------------------------- */

function DouyinChart() {
  const W = 720, H = 300, l = 52, r = 24, t = 20, b = 40;
  const d0 = Date.UTC(2023, 8, 1), d1 = Date.UTC(2026, 11, 1);
  const X = (d: string | number) => l + ((W - l - r) * ((typeof d === "string" ? Date.parse(d) : d) - d0)) / (d1 - d0);
  const Y = (v: number) => t + (H - t - b) * (1 - (v - 5) / 3);
  const pts = CHINA.douyin;
  const path = pts.map((p, i) => `${i ? "L" : "M"}${X(p.d).toFixed(1)},${Y(p.v).toFixed(1)}`).join(" ");
  const xa = X("2025-01-20"), xb = X("2026-09-30"), xc = X("2025-04-05");
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Douyin followers for 李美越, November 2023 to September 2026" className={s.svg}>
      <defs>
        <linearGradient id="dyg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={PAPER} stopOpacity="0.22" />
          <stop offset="100%" stopColor={PAPER} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[5, 6, 7, 8].map((v) => (
        <g key={v}>
          <line x1={l} x2={W - r} y1={Y(v)} y2={Y(v)} stroke={LINE} />
          <text x={l - 8} y={Y(v) + 4} fill={DIM} fontSize="11" textAnchor="end">
            {v}M
          </text>
        </g>
      ))}
      {[2024, 2025, 2026].map((yr) => (
        <text key={yr} x={X(Date.UTC(yr, 0, 1))} y={H - 12} fill={DIM} fontSize="11" textAnchor="middle">
          {yr}
        </text>
      ))}
      <rect x={xa} y={t} width={xb - xa} height={H - t - b} fill={RED} opacity="0.08" />
      <text x={xb - 8} y={H - b - 10} fill={DIM} fontSize="11" textAnchor="end">
        No Douyin posts since Jan 20, 2025
      </text>
      <line x1={xc} x2={xc} y1={t} y2={H - b} stroke={RED} strokeDasharray="4 4" />
      <text x={xc + 8} y={t + 14} fill={RED} fontSize="11">
        Apr 5, 2025: CCTV blurs his face
      </text>
      <motion.path d={`${path} L${X(pts[pts.length - 1].d).toFixed(1)},${H - b} L${X(pts[0].d).toFixed(1)},${H - b} Z`} fill="url(#dyg)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.6 }} />
      <motion.path d={path} fill="none" stroke={PAPER} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: EASE }} />
      {pts.map((p) => (
        <g key={p.d}>
          {p.kind === "measured" && <circle cx={X(p.d)} cy={Y(p.v)} r="12" fill={RED} opacity="0.22" className={s.pulse} />}
          <circle cx={X(p.d)} cy={Y(p.v)} r="5" fill={p.kind === "measured" ? RED : PAPER} stroke="#0a0a0a" strokeWidth="2" />
        </g>
      ))}
      <text x={X(pts[1].d)} y={Y(pts[1].v) - 12} fill={PAPER} fontSize="12" textAnchor="middle">
        6.75M
      </text>
      <text x={X(pts[2].d) - 10} y={Y(pts[2].v) + 4} fill={PAPER} fontSize="12" textAnchor="end">
        7.70M peak
      </text>
      <text x={X(pts[4].d)} y={Y(pts[4].v) + 22} fill={RED} fontSize="12" textAnchor="end">
        5.70M today
      </text>
    </svg>
  );
}

function ExtLinks({ items }: { items: { point: string; url: string }[] }) {
  return (
    <ul className={s.links}>
      {items.map((p) => (
        <li key={p.url}>
          <p>{p.point}</p>
          <a className={`${s.mono} ${s.red}`} href={p.url} target="_blank" rel="noreferrer">
            Source ↗
          </a>
        </li>
      ))}
    </ul>
  );
}

function China() {
  return (
    <section className={s.section} id="china">
      <Head n="02" label="The China side" title="A Career That Stalled">
        {CHINA.intro}
      </Head>
      <div className={s.grid2}>
        <Reveal>
          <div className={s.story}>
            {CHINA.story.map((r) => (
              <div className={s.storyRow} key={r.k} style={{ gridTemplateColumns: "100px minmax(0,1fr) 80px" }}>
                <b>{r.k}</b>
                <p>{r.b}</p>
                <span className={s.tag} data-s={r.s === "peak" ? "current" : r.s}>
                  {r.s === "peak" ? "Peak" : r.s === "broken" ? "Fall" : "Now"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.chart}>
            <div className={`${s.chartLegend} ${s.mono}`}>
              <span>
                <i style={{ background: PAPER, borderRadius: "50%" }} />
                Press-reported
              </span>
              <span>
                <i style={{ background: RED, borderRadius: "50%" }} />
                Measured Sept 30, 2026
              </span>
            </div>
            <DouyinChart />
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            {CHINA.douyinNote}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="What the China career proved commercially" aside="Xingtu and live commerce enabled" />
        <div className={s.stats}>
          {CHINA.rate.map((r) => (
            <div key={r.l}>
              <span className={s.statV}>{r.v}</span>
              <span className={s.statL}>{r.l}</span>
            </div>
          ))}
        </div>
        <div className={s.clients} style={{ marginTop: 26 }}>
          {CHINA.partners.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
        <p className={s.note} style={{ marginTop: 14 }}>
          {CHINA.partnersNote}
        </p>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <SubHead title="How it was covered" />
          <ExtLinks items={CHINA.press} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className={s.callout}>{CHINA.callout}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 03 US engine
 * ------------------------------------------------------------------------- */

function MonthlyViews() {
  const open = useVideoBox();
  const rows = MONTHS.rows;
  const max = Math.max(...rows.map((r) => r.main + r.clip));
  const peaks = rows.filter((r) => "peak" in r && r.peak);
  const group = { label: "Peak months", items: peaks.map((r) => item(igUrl(r.peak!.id), r.peak!.l, `${r.peak!.v}M views`, r.m)) };
  return (
    <div className={s.mv}>
      <div className={s.mvYears}>
        {MONTHS.years.map((y) => {
          const tot = y.main + y.clip;
          return (
            <div key={y.y}>
              <span className={`${s.mono} ${s.dim}`}>{y.y}</span>
              <b>
                <Counter value={tot} suffix="M" />
              </b>
              <span className={s.mvSplit}>
                <Grow to={1} style={{ width: `${(y.main / tot) * 100}%`, background: PAPER }} />
                <Grow to={1} style={{ width: `${(y.clip / tot) * 100}%`, background: RED }} delay={0.2} />
              </span>
              <small>{y.clip ? `${Math.round((y.clip / tot) * 100)}% from the clip account` : "Main account only"}</small>
            </div>
          );
        })}
      </div>
      <div className={s.mvPlot}>
        <div className={s.mvArea}>
        {[20, 40, 60, 80].map((g) => (
          <span key={g} className={s.mvGrid} style={{ bottom: `${(g / max) * 100}%` }}>
            <em className={s.mono}>{g}M</em>
          </span>
        ))}
        {rows.map((r, i) => {
          const tot = r.main + r.clip;
          const h = (tot / max) * 100;
          const pk = "peak" in r ? r.peak : undefined;
          const pi = peaks.findIndex((x) => x.m === r.m);
          return (
            <div className={s.mvCol} key={r.m} data-empty={tot ? undefined : ""}>
              <Grow axis="y" to={1} className={s.mvStack} style={{ height: `${h}%`, transformOrigin: "50% 100%" }} delay={0.1 + i * 0.03}>
                {r.clip > 0 && <i className={s.mvClip} style={{ flexGrow: r.clip }} />}
                {r.main > 0 && <i className={s.mvMain} style={{ flexGrow: r.main }} />}
              </Grow>
              {tot > 0 && <span className={`${s.mvTip} ${s.mono}`}>{tot.toFixed(1)}M</span>}
              {pk && (
                <motion.a
                  className={s.mvPeak}
                  data-m={r.m}
                  href={igUrl(pk.id)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={open(group, pi)}
                  style={{ bottom: `calc(${h}% + 14px)`, x: "-50%" }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.9 + pi * 0.12 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={P(pk.id)} alt="" />
                  <span>
                    <b>{pk.v}M</b>
                    {pk.l}
                  </span>
                </motion.a>
              )}
              {(i === 0 || r.m.endsWith("-01")) && <span className={`${s.mvYear} ${s.mono}`}>{r.m.slice(0, 4)}</span>}
            </div>
          );
        })}
        </div>
      </div>
      <div className={`${s.chartLegend} ${s.mono}`} style={{ margin: "34px 0 0" }}>
        <span>
          <i style={{ background: PAPER }} />
          @the0.5bloodprince (main, 1.24M)
        </span>
        <span>
          <i style={{ background: RED }} />
          @youngchinaaaa (clips, 762K)
        </span>
      </div>
    </div>
  );
}

function PostGrid({ posts, label, low }: { posts: typeof TOP_POSTS; label: string; low?: boolean }) {
  const open = useVideoBox();
  const group = { label, items: posts.map((p) => item(p.href, p.who, p.metric, p.note, { low })) };
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
              <span className={s.postNote}>{p.note}</span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

type Row = { k: string; v: number; n?: string; self?: boolean; hi?: boolean; note?: string };
function HBars({ rows, max, fmtV, unit = "" }: { rows: Row[]; max: number; fmtV?: (v: number) => string; unit?: string }) {
  return (
    <div className={s.hbars}>
      {rows.map((r, i) => (
        <div className={s.hbar} key={r.k} data-self={r.self ? "" : undefined} data-hi={r.hi ? "" : undefined}>
          <div className={s.hbarK}>
            {r.k}
            {(r.n || r.note) && <small>{r.n ?? r.note}</small>}
          </div>
          <div className={s.hbarT}>
            <Grow to={Math.max(0.004, Math.min(1, r.v / max))} className={s.hbarF} delay={i * 0.05} />
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

function US() {
  return (
    <section className={s.section} id="us">
      <Head n="03" label="The US side" title="A Clip Machine">
        He pivoted West in 2024 and it is working. 93 Instagram reels since April 2024 have done 644M views, a median of 3.4M. What is less obvious is where that reach now comes from.
      </Head>

      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Handle</th>
                <th>Followers</th>
                <th>Median</th>
                <th>Cadence</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {CHANNELS.map((c) => (
                <tr key={c.name} data-hot={"hot" in c && c.hot ? "" : undefined}>
                  <td>{c.name}</td>
                  <td className={s.muted} data-l="Handle">
                    <a href={c.href} target="_blank" rel="noreferrer">
                      {c.handle}
                    </a>
                  </td>
                  <td data-l="Followers">
                    <span className={s.tableNum}>{c.followers}</span>
                  </td>
                  <td className={s.muted} data-l="Median">
                    {c.median}
                  </td>
                  <td className={s.muted} data-l="Cadence">
                    {c.cadence}
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
        <SubHead title="Where the views come from" aside="Monthly Instagram views. Tap a cover to watch" />
        <MonthlyViews />
        <p className={s.note} style={{ marginTop: 12 }}>
          {MONTHS.note}
        </p>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            The clip account carries 2026
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            March to September 2026
          </p>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>
                <Counter value={CLIP.clipViews} suffix="M" />
              </span>
              <span className={s.statL}>views on {CLIP.clipReels} reels from @youngchinaaaa</span>
            </div>
            <div>
              <span className={s.duelV}>
                <Counter value={CLIP.mainReels} />
              </span>
              <span className={s.statL}>reels on the main account in 2026, almost all live-stream promos</span>
            </div>
          </div>
          <p className={s.callout} style={{ marginTop: 22 }}>
            {CLIP.body}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Western audiences want the people, not the print
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            {FORMATS.note}
          </p>
          <HBars rows={FORMATS.rows} max={6} fmtV={(v) => v.toFixed(2)} unit="M" />
          <p className={s.note} style={{ marginTop: 16 }}>
            The 东北大花 floral series made him in China and is his weakest format in the West.
          </p>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="Top performers" aside="Tap to watch" />
        </Reveal>
        <PostGrid posts={TOP_POSTS} label="Top performers" />
      </div>
      <div className={s.sub}>
        <Reveal>
          <SubHead title="Low performers" aside="Shown for contrast" />
        </Reveal>
        <PostGrid posts={LOW_POSTS} label="Low performers" low />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 The gap
 * ------------------------------------------------------------------------- */

function Gap() {
  const top = Math.log10(1.02e8) - 2;
  const val = (r: (typeof LEAK.rows)[number]) => r.v * (r.unit === "M" ? 1e6 : r.unit === "K" ? 1e3 : 1);
  return (
    <section className={s.section} id="gap">
      <Head n="04" label="The gap" title="Rented Reach">
        Short-form followers are rented. What a creator owns is the audience that comes to him. Follow one clip down to the people who stay.
      </Head>
      <div className={s.leak}>
        {LEAK.rows.map((r, i) => (
          <Reveal key={r.k} delay={i * 0.08}>
            {"ratio" in r && r.ratio && <div className={`${s.leakRatio} ${s.mono}`}>{r.ratio}</div>}
            <div className={s.leakRow} data-last={i === LEAK.rows.length - 1 ? "" : undefined}>
              <Grow to={(Math.log10(val(r)) - 2) / top} className={s.leakBar} delay={0.15 + i * 0.12} />
              <div className={s.leakIn}>
                <span className={s.leakV}>
                  <Counter value={r.v} decimals={r.v < 10 ? 1 : 0} suffix={r.unit} />
                </span>
                <span className={s.leakK}>
                  <b>{r.k}</b>
                  <small>{r.s}</small>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
        <p className={s.note} style={{ marginTop: 14 }}>
          Bar widths on a log scale. Ratios are each step against the one above.
        </p>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The fix is infrastructure, not reach" />
        <div className={s.fixCards}>
          {LEAK.fix.map((f, i) => (
            <div key={f.h}>
              <span className={s.mono}>{String(i + 1).padStart(2, "0")}</span>
              <h4>{f.h}</h4>
              <p>{f.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Against peers" aside="Short-form followers per YouTube subscriber" />
        <HBars rows={GAP.ratio} max={70} fmtV={(v) => (v < 1 ? v.toFixed(2) : v.toFixed(1))} unit="x" />
        <p className={s.note} style={{ marginTop: 16 }}>
          {GAP.ratioNote}
        </p>
      </Reveal>
      <Reveal className={s.sub}>
        <div className={s.stats} style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {GAP.stats.map((st) => (
            <div key={st.l}>
              <span className={s.statV}>
                <Counter value={st.v} decimals={"decimals" in st ? st.decimals : 0} suffix={st.suffix} />
              </span>
              <span className={s.statL}>{st.l}</span>
            </div>
          ))}
        </div>
        <p className={s.note} style={{ marginTop: 16 }}>
          {LEAK.kick}
        </p>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 05 Content teardowns + video AI
 * ------------------------------------------------------------------------- */

function Tear({ t, i }: { t: (typeof TEARDOWNS)[number]; i: number }) {
  const open = useVideoBox();
  const low = i === TEARDOWNS.length - 1;
  const group = { label: "Teardowns", items: TEARDOWNS.map((x) => item(igUrl(x.id), `${x.who}: ${x.title}`, `${x.views} views`, x.verdict)) };
  return (
    <Reveal>
      <article className={s.tear} data-low={low ? "" : undefined}>
        <a className={s.tearMedia} href={igUrl(t.id)} target="_blank" rel="noreferrer" onClick={open(group, i)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={P(t.id)} alt="" loading="lazy" />
          <span className={s.postPlay}>
            <PlayIcon />
          </span>
        </a>
        <div>
          <div className={s.tearHead}>
            <div>
              <span className={`${s.mono} ${s.dim}`}>
                T{String(i + 1).padStart(2, "0")} · {t.who} · {t.len}
              </span>
              <h3 className={s.h3} style={{ marginTop: 8 }}>
                {t.title}
              </h3>
            </div>
            <span className={s.tearViews}>{t.views}</span>
          </div>
          <div className={s.beatMap} aria-hidden="true">
            <span className={s.beatTrack}>
              <Grow to={1} className={s.beatFill} delay={0.2} />
            </span>
            {t.beats.map((b, j) => {
              const pos = Math.min(1, (b.t === "End" ? toSec(t.len) : toSec(b.t)) / toSec(t.len));
              return (
                <motion.i
                  key={b.t + b.k}
                  data-tone={b.tone || undefined}
                  style={{ left: `${pos * 100}%` }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.4 + j * 0.08 }}
                  title={`${b.t} ${b.k}`}
                />
              );
            })}
          </div>
          <ol className={s.beats}>
            {t.beats.map((b) => (
              <li className={s.beat} key={b.t + b.k}>
                <time className={s.mono}>{b.t}</time>
                <span className={s.beatTag} data-tone={b.tone || undefined}>
                  {b.k}
                </span>
                <div>
                  <b>{b.line}</b>
                  <small>{b.why}</small>
                </div>
              </li>
            ))}
          </ol>
          <p className={s.verdict}>{t.verdict}</p>
        </div>
      </article>
    </Reveal>
  );
}

type FindingT = { h: string; b: string; takeK: string; take: string; clips: { href: string; label: string; views: string; self?: boolean }[] };
function Finding({ f, i, openIdx, setOpen, prefix = "F" }: { f: FindingT; i: number; openIdx: number; setOpen: (n: number) => void; prefix?: string }) {
  const open = useVideoBox();
  const isOpen = openIdx === i;
  const group = { label: f.h, items: f.clips.map((c) => item(c.href, c.label, c.views)) };
  return (
    <div className={s.finding} data-open={isOpen ? "" : undefined}>
      <button className={s.findingBtn} onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
        <span>
          {prefix}
          {String(i + 1).padStart(2, "0")}
        </span>
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
                  <span>{f.takeK}</span>
                  {f.take}
                </p>
              </div>
              <div className={s.chips}>
                {f.clips.map((c, j) => {
                  const poster = posterOf(c.href);
                  return (
                    <a key={c.href + j} className={s.chip} href={c.href} target="_blank" rel="noreferrer" onClick={open(group, j)}>
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

function Teardowns() {
  const [openIdx, setOpen] = useState(0);
  return (
    <section className={s.section} id="teardowns">
      <Head n="05" label="Content teardowns" title="Shot by Shot">
        Six reels broken down beat by beat from their transcripts: the three 24 Hours in China episodes that best show the format working and not, his two biggest non-China reels, and the floor of the clip account. Timestamps are from the posted cut.
      </Head>
      <div className={s.tears}>
        {TEARDOWNS.map((t, i) => (
          <Tear key={t.id} t={t} i={i} />
        ))}
      </div>

      <div className={s.sub}>
        <Reveal>
          <div className={s.brainHead}>
            <div className={s.brainNum}>
              {BRAIN.total}
              <small>reels in one TwelveLabs Jockey store, searched and queried together</small>
            </div>
            <div>
              <p className={s.intro} style={{ marginBottom: 22 }}>
                {BRAIN.intro}
              </p>
              <div className={s.brainMix}>
                {BRAIN.corpus.map((c) => (
                  <div key={c.k}>
                    <b>{c.v}</b>
                    <span>{c.k}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <SubHead title="What the videos themselves show" aside="Video AI findings, Miles's reels" />
        </Reveal>
        <div className={s.findings}>
          {BRAIN.findings.map((f, i) => (
            <Finding key={f.h} f={f} i={i} openIdx={openIdx} setOpen={setOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 06 Social listening
 * ------------------------------------------------------------------------- */

function Stack({ pos, neu, neg, q }: { pos: number; neu?: number; neg: number; q: number }) {
  const n = neu ?? Math.max(0, 100 - pos - neg - q);
  const parts = [
    { c: s.sPos, v: pos, l: "Positive" },
    { c: s.sNeu, v: n, l: "Neutral" },
    { c: s.sNeg, v: neg, l: "Negative" },
    { c: s.sQ, v: q, l: "Question" },
  ];
  return (
    <div className={s.stack}>
      {parts.map((p, i) => (
        <Grow key={p.l} to={1} className={p.c} style={{ width: `${p.v}%` }} delay={i * 0.12}>
          {p.v >= 7 ? `${p.v.toFixed(1)}%` : ""}
        </Grow>
      ))}
    </div>
  );
}

function Legend() {
  return (
    <div className={`${s.stackLegend} ${s.mono}`}>
      <span>
        <i style={{ background: "var(--paper)" }} />
        Positive
      </span>
      <span>
        <i style={{ background: "#3a3a40" }} />
        Neutral
      </span>
      <span>
        <i style={{ background: "var(--red)" }} />
        Negative
      </span>
      <span>
        <i style={{ background: "#6b6b73" }} />
        Question
      </span>
    </div>
  );
}

function Listening() {
  const open = useVideoBox();
  const quoteGroup = { label: "In their words", items: LISTEN.quotes.map((q) => item(q.href, q.who, undefined, undefined, { quote: q.q })) };
  const tmax = Math.max(...LISTEN.themes.map((t) => t.share));
  const w = LISTEN.weighted;
  return (
    <section className={s.section} id="listening">
      <Head n="06" label="Social listening" title="What People Say">
        We scraped {fmt(LISTEN.total)} comments across 11 Instagram reels and 8 TikToks, and classified the {fmt(LISTEN.n)} with text by sentiment, theme and language. People like him. What they ask for is the ending, and what they worry about is safety.
      </Head>

      <Reveal>
        <SubHead title="Overall" aside={`${fmt(LISTEN.n)} comments with text`} />
        <Stack pos={LISTEN.overall.pos} neu={LISTEN.overall.neu} neg={LISTEN.overall.neg} q={LISTEN.overall.q} />
        <Legend />
        <div className={s.cycle} style={{ marginTop: 24, borderTop: "1px solid var(--line)" }}>
          <div>
            <b>Weighted by likes</b>
            <small>{fmt(w.totalLikes)} comment likes. The negatives that exist get liked.</small>
          </div>
          <Stack pos={w.pos} neu={w.neu} neg={w.neg} q={w.q} />
        </div>
        {LISTEN.platforms.map((p) => (
          <div className={s.cycle} key={p.k}>
            <div>
              <b>{p.k}</b>
              <small>
                {p.note}, {fmt(p.n)} comments.
              </small>
            </div>
            <Stack pos={p.pos} neu={p.neu} neg={p.neg} q={p.q} />
          </div>
        ))}
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="By series" />
        {LISTEN.series.map((c) => (
          <div className={s.cycle} key={c.k}>
            <div>
              <b>{c.k}</b>
              <small>{fmt(c.n)} comments.</small>
            </div>
            <Stack pos={c.pos} neu={c.neu} neg={c.neg} q={c.q} />
          </div>
        ))}
        <div className={s.grid2} style={{ marginTop: 30, alignItems: "end" }}>
          <div>
            <div className={s.bigNeg}>7.4%</div>
            <p className={s.statL}>of 24 Hours in China comments are questions, the most of any series: visas, where to watch, whether it is real</p>
          </div>
          <p className={s.callout}>{LISTEN.seriesNote.flower}</p>
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Themes
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Share of comments per theme (multi-label). Red figure: that theme&apos;s share of all comment likes.
          </p>
          <div className={s.hbars}>
            {LISTEN.themes.map((t, i) => (
              <div className={s.hbar} key={t.k} data-hi={t.likes >= 10 ? "" : undefined}>
                <div className={s.hbarK}>
                  {t.k}
                  <small>&ldquo;{t.ex}&rdquo;</small>
                </div>
                <div className={s.hbarT}>
                  <Grow to={t.share / tmax} className={s.hbarF} delay={i * 0.04} />
                </div>
                <div className={s.hbarV}>
                  {t.share}%<small className={s.red}> {t.likes}% likes</small>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Demand signals
          </h3>
          <div className={s.gaps}>
            {LISTEN.demand.map((d) => (
              <div className={s.gap} key={d.l} style={{ gridTemplateColumns: "90px minmax(0,1fr)" }}>
                <b className={s.red}>{d.v}</b>
                <span>{d.l}</span>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            {LISTEN.demandNote}
          </p>
          <div className={s.duel} style={{ marginTop: 30 }}>
            <div>
              <span className={s.duelV}>25.5%</span>
              <span className={s.statL}>of all comment likes go to shipping the pair: &ldquo;now get married&rdquo; (434K likes)</span>
            </div>
            <div>
              <span className={s.duelV}>15.4%</span>
              <span className={s.statL}>go to safety fears, from just 1.1% of comments: &ldquo;an easy way to get trafficked&rdquo; (604K likes)</span>
            </div>
          </div>
          <p className={s.bigLine}>The audience wants the ending, and it wants to know she got home.</p>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="In their words" aside="Tap a quote to see it in context" />
        </Reveal>
        <div className={s.quotes}>
          {LISTEN.quotes.map((q, i) => (
            <a key={q.q} className={s.quote} data-tone={q.tone} href={q.href} target="_blank" rel="noreferrer" onClick={open(quoteGroup, i)}>
              <blockquote>{/^[“"]/.test(q.q) ? q.q : `“${q.q}”`}</blockquote>
              <footer className={s.mono}>
                <span>
                  {"orig" in q && q.orig ? `${q.orig} · ` : ""}
                  {q.who}
                </span>
                <span className={s.red}>View</span>
              </footer>
            </a>
          ))}
        </div>
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Comments in Chinese
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            0.8% of comments (33). Most are hostile or suspicious. 86.4% are in English.
          </p>
          <ul className={s.asks}>
            {LISTEN.chinese.map((c) => (
              <li key={c.zh}>
                <span>{c.en}</span>
                <span>{c.zh}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Off-platform
          </h3>
          <ExtLinks items={LISTEN.off} />
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <details className={s.sources}>
          <summary className={s.mono}>How the comments were classified</summary>
          <p className={s.note} style={{ marginTop: 14, maxWidth: "100ch" }}>
            {LISTEN.method}
          </p>
        </details>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 07 Peers
 * ------------------------------------------------------------------------- */

function Peers() {
  const [openIdx, setOpen] = useState(0);
  return (
    <section className={s.section} id="peers">
      <Head n="07" label="Peer comparison" title="Against the Field">
        {PEERS.intro}
      </Head>
      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Creator</th>
                <th>Account</th>
                <th>Followers</th>
                <th>Median views</th>
                <th>Views / follower</th>
                <th>Engagement</th>
                <th>Posts / wk</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              {PEERS.rows.map((r) => (
                <tr key={r.h + r.p} data-self={r.self ? "" : undefined}>
                  <td>{r.k}</td>
                  <td className={s.muted} data-l="Account">
                    {r.p} {r.h}
                  </td>
                  <td data-l="Followers">{r.f}</td>
                  <td data-l="Median views">
                    <span className={s.tableNum}>{r.med}</span>
                  </td>
                  <td data-l="Views / follower">{r.vpf < 0.1 ? r.vpf.toFixed(3) : r.vpf.toFixed(2)}x</td>
                  <td className={s.muted} data-l="Engagement">
                    {r.er}%
                  </td>
                  <td className={s.muted} data-l="Posts / wk">
                    {r.ppw}
                  </td>
                  <td className={s.muted} data-l="Length">
                    {r.dur ? `${r.dur}s` : "n/a"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={s.note} style={{ marginTop: 14 }}>
          Latest 20 to 40 posts per account, pinned posts excluded. Engagement is the median of (likes + comments) / views. Speed&apos;s and Trahan&apos;s TikToks are low-frequency samples covering years of posts.
        </p>
      </Reveal>
      <Reveal className={s.sub}>
        <SubHead title="Median views per follower" aside="Reach is not his problem" />
        <HBars rows={PEERS.vpf} max={5.5} fmtV={(v) => (v < 0.1 ? v.toFixed(3) : v.toFixed(2))} unit="x" />
      </Reveal>
      <div className={s.sub}>
        <Reveal>
          <SubHead title="What the peers do differently" aside="Every claim cites the clips" />
        </Reveal>
        <div className={s.findings}>
          {PEERS.findings.map((f, i) => (
            <Finding key={f.h} f={f} i={i} openIdx={openIdx} setOpen={setOpen} prefix="P" />
          ))}
        </div>
      </div>
      <Reveal className={s.sub}>
        <details className={s.sources}>
          <summary className={s.mono}>Peer method</summary>
          <p className={s.note} style={{ marginTop: 14, maxWidth: "100ch" }}>
            {PEERS.method}
          </p>
        </details>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 08 24 Hours in China
 * ------------------------------------------------------------------------- */

function Format24() {
  return (
    <section className={s.section} id="format">
      <Head n="08" label="24 Hours in China" title="Best Asset, Riskiest">
        A complete format: a hook that works in five seconds, a built-in cliffhanger, a travel payoff and a reason to watch live. It is also the cleanest expression of the &ldquo;China is not what you were told&rdquo; mood.
      </Head>
      <Reveal>
        <div className={s.flow} style={{ gridTemplateColumns: `repeat(${FORMAT24.beats.length}, minmax(0, 1fr))` }}>
          {FORMAT24.beats.map((n, i) => (
            <div className={s.flowNode} key={n.k} data-px={i === FORMAT24.beats.length - 1 ? "" : undefined}>
              <div className={s.flowHead}>
                <span className={s.flowDot} />
                {i < FORMAT24.beats.length - 1 && (
                  <span className={s.flowLine} style={{ left: 14 }}>
                    <Grow to={1} className={s.flowLineFill} delay={0.2 + i * 0.18} />
                  </span>
                )}
              </div>
              {i === FORMAT24.beats.length - 1 && <span className={s.flowPx}>Missing from shorts</span>}
              <h4>{n.k}</h4>
              <ul>
                <li>{n.b}</li>
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className={s.sub}>
        <SubHead title="The window" aside={FORMAT24.moodNote} />
        <div className={s.stats} style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          {FORMAT24.mood.map((m) => (
            <div key={m.l}>
              <span className={s.statV}>{m.v}</span>
              <span className={s.statL}>{m.l}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className={s.sub}>
        <SubHead title="Things that can break it" />
        <ol className={s.fixes}>
          {FORMAT24.risks.map((r) => (
            <li className={s.fix} key={r.h}>
              <div>
                <b>{r.h}.</b>{" "}
                <p className={s.muted} style={{ display: "inline" }}>
                  {r.b}
                </p>
              </div>
              <span>{r.tag}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 09 Collective + 10 Music
 * ------------------------------------------------------------------------- */

function Collective() {
  return (
    <section className={s.section} id="collective">
      <Head n="09" label="The collective" title="88rising for China?">
        {COLLECTIVE.intro}
      </Head>
      <Reveal>
        <div className={s.obs}>
          {COLLECTIVE.cases.map((c) => (
            <div key={c.k}>
              <span className={`${s.mono} ${s.red}`}>{c.k}</span>
              <h4>{c.h}</h4>
              <p>{c.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className={s.sub}>
        <SubHead title="What we would change" />
        <ul className={s.proof}>
          {COLLECTIVE.change.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Reveal>

      <div className={s.sub} id="music">
        <Reveal>
          <Label n="10">Music</Label>
          <SubHead title="A lane to structure, not yet to judge" />
          <p className={s.intro} style={{ marginBottom: 26 }}>
            {MUSIC.intro}
          </p>
        </Reveal>
        <Reveal>
          <div className={s.obs} style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {MUSIC.routes.map((r) => (
              <div key={r.k}>
                <span className={`${s.mono} ${s.red}`}>{r.k}</span>
                <h4>{r.h}</h4>
                <p>{r.b}</p>
              </div>
            ))}
          </div>
          <p className={s.callout} style={{ marginTop: 26 }}>
            {MUSIC.precedent}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 11 Plan
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
      <Head n="11" label="What CCD would run" title="The First 90 Days">
        {PLAN.intro}
      </Head>
      <Reveal>
        <div className={s.why}>
          {PLAN.tracks.map((t) => (
            <div key={t.k}>
              <h4>{t.k}</h4>
              <ul className={s.trackList}>
                {t.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
      <div className={s.sub}>
        <Reveal>
          <SubHead title="Sequence" aside="October 2026 to January 2027" />
        </Reveal>
        <div className={s.phases} ref={phasesRef} style={{ gridTemplateColumns: `repeat(${PLAN.phases.length}, minmax(0, 1fr))` }}>
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
      </div>
      <Reveal className={s.sub}>
        <SubHead title="What we would report" />
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
 * 12 Creative
 * ------------------------------------------------------------------------- */

function Creative() {
  return (
    <section className={s.section} id="creative">
      <Head n="12" label="Example creative" title="What It Could Look Like">
        {CREATIVE.intro}
      </Head>
      <Reveal>
        <div className={`${s.aiLabel} ${s.mono}`} style={{ marginBottom: 34 }}>
          <i />
          {CREATIVE.label}
        </div>
      </Reveal>
      <div className={s.stills} style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
        {CREATIVE.stills.map((st, i) => (
          <Reveal key={st.img} delay={(i % 3) * 0.08} style={st.w > st.h ? { gridColumn: "1 / -1" } : undefined}>
            <div className={s.still}>
              <div className={s.stillMedia} style={{ aspectRatio: `${st.w} / ${st.h}` }}>
                <span className={s.aiBadge}>AI example</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/creative/${st.img}`} alt={st.line} loading="lazy" />
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
 * 13 Diligence + sources
 * ------------------------------------------------------------------------- */

function Diligence() {
  return (
    <>
      <section className={s.section} id="diligence">
        <Head n="13" label="Diligence" title="Before Anything Is Signed">
          The questions to answer in the first conversations with Miles and his team. None of them is a reason not to proceed; all of them change the structure.
        </Head>
        <Reveal>
          <ul className={s.need}>
            {DILIGENCE.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal className={s.sub}>
          <div className={s.btns}>
            <a className={s.btn} href={`mailto:${NEXT.email}?subject=${encodeURIComponent("Miles Moretti audit")}`}>
              Questions to {NEXT.name} <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </section>
      <section className={s.section} style={{ paddingTop: 40 }}>
        <details className={s.sources}>
          <summary className={s.mono}>Sources and method</summary>
          <ol>
            {SOURCES.map((x) => (
              <li key={x.u}>
                <a href={x.u} target="_blank" rel="noreferrer">
                  {x.t}
                </a>
              </li>
            ))}
          </ol>
          <p className={s.note} style={{ marginTop: 18 }}>
            {METHOD}
          </p>
        </details>
      </section>
      <footer className={`${s.footer} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Internal working document. Crowd Control Digital</span>
        <span>September 30, 2026</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Interludes
 * ------------------------------------------------------------------------- */

function Interlude({ n }: { n: number }) {
  const it = INTERLUDES[n];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-8%", "8%"]);
  const words = it.q.split(" ");
  return (
    <div className={s.inter} ref={ref}>
      <motion.div className={s.interBg} style={{ y }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={P(it.img)} alt="" />
      </motion.div>
      <div className={s.interInner}>
        <Reveal>
          <span className={`${s.mono} ${s.red}`}>{it.who}</span>
        </Reveal>
        <blockquote className={s.interQ}>
          {words.map((w, i) => (
            <span className={s.word} key={i}>
              <motion.span className={s.letter} initial={reduce ? false : { y: "110%" }} whileInView={{ y: "0%" }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}>
                {w}
              </motion.span>
            </span>
          ))}
        </blockquote>
        <Reveal delay={0.3}>
          {"href" in it && it.href ? (
            <a className={`${s.mono} ${s.dim}`} href={it.href} target="_blank" rel="noreferrer">
              {it.n} ↗
            </a>
          ) : (
            <span className={`${s.mono} ${s.dim}`}>{it.n}</span>
          )}
        </Reveal>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function MilesMorettiClient() {
  return (
    <Gate>
      <VideoBoxProvider>
        <main className={s.page}>
          <Progress />
          <TopBar />
          <Hero />
          <Marquee />
          <Summary />
          <div className={s.rule} />
          <China />
          <div className={s.rule} />
          <US />
          <div className={s.rule} />
          <Gap />
          <div className={s.rule} />
          <Teardowns />
          <Interlude n={0} />
          <Listening />
          <div className={s.rule} />
          <Peers />
          <div className={s.rule} />
          <Format24 />
          <Interlude n={1} />
          <Collective />
          <div className={s.rule} />
          <Plan />
          <div className={s.rule} />
          <Creative />
          <div className={s.rule} />
          <Diligence />
        </main>
      </VideoBoxProvider>
    </Gate>
  );
}
