"use client";

/**
 * MIAMI CONCOURS x CROWD CONTROL DIGITAL: digital audit and paid media plan.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Real event photography from the Miami Concours gallery; AI example creative is
 * labeled as such. Every referenced social post opens in the shadowbox (video-box.tsx).
 */

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import s from "./mc.module.css";
import { VideoBoxProvider, useVideoBox, type VideoItem } from "./video-box";
import {
  IMG,
  P,
  NAV,
  HERO,
  MARQUEE,
  SUMMARY,
  SEARCH,
  WEBSITE,
  CHANNELS,
  CADENCE,
  FORMATS,
  TOP_POSTS,
  LOW_POSTS,
  SENTIMENT,
  VOICE,
  BRAIN,
  PARTNERS,
  FIELD,
  CALENDAR,
  CALENDAR_NOTE,
  SPONSORS,
  SYSTEM,
  PROMOTIX,
  AUDIENCES,
  PHASES,
  MEASURE,
  CREATIVE,
  WHY,
  NEXT,
  SOURCES,
} from "@/lib/miami-concours/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Miami Concours x Crowd Control: audit walk-through")}&body=${encodeURIComponent(
  "Hi Geoff,\n\nWe've read the Miami Concours audit and would like to set up a walk-through.\n\nName and team:\nTimes that work:\n",
)}`;

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

/** Scale-in bar: grows from 0 to `to` (0..1) on the X or Y axis when its track scrolls into view. */
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

const PlayIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path fill="currentColor" d="M4 2.5v11l9-5.5z" />
  </svg>
);

/* ----------------------------------------------------------------------------
 * Shadowbox registry
 * ------------------------------------------------------------------------- */

const platformOf = (href: string) =>
  /tiktok/.test(href) ? "TikTok" : /youtube|youtu\.be/.test(href) ? "YouTube" : /instagram/.test(href) ? "Instagram" : /facebook/.test(href) ? "Meta Ad Library" : "Web";

const idOf = (href: string) => {
  const ig = href.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
  if (ig) return ig[1];
  const tt = href.match(/video\/(\d+)/);
  if (tt) return tt[1];
  return "";
};

const THUMBS = new Set<string>([
  ...TOP_POSTS.map((p) => p.img),
  ...LOW_POSTS.map((p) => p.img),
  ...VOICE.creators.map((c) => c.img ?? ""),
  "C3JJuojrT0c", "C3Y4WOZrvvK", "DDZ46JOukGe", "DFvU2ynp1f9", "DGEQ3JsN2UN", "DUtCeO1joY4", "DUYjDTTDYF3", "DT8pxuYkkF2",
  "DZDvavZhFqr", "DbqhIwdoe6e", "DUyu1YjEpEk", "7604939548577123597", "7622688981636926751", "7607284969739685133",
  "DU1Cjd_kfHV", "DGGAvlzNmEM", "DRmr6MLj_Fw", "DU1QjMhFQx6", "7606123953735683341", "7471763620590816543", "DUa3l3NjdG7",
]);
const posterOf = (href: string) => {
  const yt = href.match(/v=([\w-]{11})/);
  if (yt) return `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg`;
  const id = idOf(href);
  return id && THUMBS.has(id) ? P(id) : undefined;
};

function item(href: string, title: string, views?: string, context?: string, extra?: Partial<VideoItem>): VideoItem {
  const metric = views && /plays/.test(views) ? "plays" : views && /likes/.test(views) ? "likes" : views && /comments/.test(views) ? "comments" : "views";
  return {
    href,
    title,
    views: views?.replace(/ (plays|likes|views|comments|likes and comments)$/, ""),
    platform: platformOf(href),
    metric,
    context,
    poster: posterOf(href),
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
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
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
        <span className={s.mono}>for Miami Concours</span>
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
        <Image src={`${IMG}/photos/overhead.webp`} alt="Hypercars parked on the red carpet at Miami Concours 2026, seen from above" fill priority sizes="100vw" />
      </motion.div>
      <div className={s.heroShade} />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
        </Reveal>
        <h1 className={s.heroTitle} aria-label={HERO.title} data-revealed={reduce || revealed ? "" : undefined}>
          {words.map((w, i) => (
            <span className={s.word} key={w} aria-hidden="true">
              <motion.span
                className={s.letter}
                initial={reduce ? false : { y: "108%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.05, ease: EASE, delay: 0.15 + i * 0.09 }}
                onAnimationComplete={i === words.length - 1 ? () => setRevealed(true) : undefined}
              >
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
          <span className={s.photoCredit}>Photography: Miami Concours gallery</span>
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

function PhotoBand({ imgs }: { imgs: { src: string; alt: string }[] }) {
  return (
    <div className={s.band}>
      {imgs.map((im) => (
        <div key={im.src}>
          <Image src={`${IMG}/photos/${im.src}`} alt={im.alt} fill sizes="(max-width: 1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * 02 Search
 * ------------------------------------------------------------------------- */

function Search() {
  const max = Math.max(...SEARCH.brand);
  return (
    <section className={s.section} id="search">
      <Head n="02" label="Search demand" title="Search Demand">
        People search for Miami Concours by name every winter, in rising numbers from December. The event doesn&apos;t bid on its own name, and neither does anyone else.
      </Head>
      <Reveal>
        <div className={s.chart}>
          <div className={`${s.chartLegend} ${s.mono}`}>
            <span>
              <i style={{ background: "var(--red)" }} />
              &quot;miami concours&quot;
            </span>
            <span>
              <i style={{ background: "var(--paper)" }} />
              &quot;miami concours tickets&quot;
            </span>
            <span>US monthly searches, Sep 2025 to Aug 2026</span>
          </div>
          <div className={s.bars}>
            {SEARCH.brand.map((v, i) => (
              <div className={s.barCol} key={i}>
                <Grow axis="y" to={1} className={s.bar} style={{ height: `${(v / max) * 100}%` }} delay={i * 0.04}>
                  <span className={s.barVal}>{v >= 1000 ? `${(v / 1000).toFixed(1)}K` : v}</span>
                </Grow>
                <Grow axis="y" to={1} className={s.bar2} style={{ height: `${(SEARCH.tickets[i] / max) * 100}%` }} delay={i * 0.04 + 0.1} />
              </div>
            ))}
          </div>
          <div className={`${s.barAxis} ${s.mono}`}>
            {SEARCH.months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <div className={s.stats} style={{ marginTop: 1 }}>
        {SEARCH.stats.map((st, i) => (
          <Reveal key={st.l} delay={i * 0.06}>
            <span className={s.statV}>{st.v}</span>
            <span className={s.statL}>{st.l}</span>
          </Reveal>
        ))}
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            What people type
          </h3>
          <div className={s.searchBox}>
            {SEARCH.asks.map((a) => (
              <div className={s.searchRow} key={a.q}>
                <div className={s.searchQ}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M15.5 15.5L21 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {a.q}
                </div>
                {a.a.length > 0 && (
                  <div className={s.searchA}>
                    {a.a.map((x) => (
                      <span key={x} data-hot={/free|price|promo|parking|concourse|dates/.test(x) ? "" : undefined}>
                        {x}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            Google autocomplete, September 30, 2026. Highlighted terms are price, format, date and airport-collision signals.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p className={s.callout}>
              <strong>The airport problem.</strong> {SEARCH.collision}
            </p>
            <p className={s.callout}>
              <strong>The planning window.</strong> {SEARCH.window}
            </p>
            <div>
              <div className={`${s.mono} ${s.dim}`} style={{ marginBottom: 12 }}>
                Branded search ad, example
              </div>
              <div className={s.gad}>
                <span className={s.gadSp}>Sponsored</span>
                <div className={s.gadTop}>
                  <span className={s.gadFav}>MC</span>
                  <span>
                    Miami Concours
                    <small>https://{SEARCH.ad.url}</small>
                  </span>
                </div>
                <div className={s.gadTitle}>{SEARCH.ad.title}</div>
                <p className={s.gadDesc}>{SEARCH.ad.desc}</p>
                <div className={s.gadLinks}>
                  {SEARCH.ad.links.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 03 Website
 * ------------------------------------------------------------------------- */

function Ring({ v }: { v: number }) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const reduce = useReduced();
  const col = v < 50 ? "var(--red)" : v < 90 ? "#b8b8c0" : "var(--paper)";
  return (
    <svg className={s.ringSvg} viewBox="0 0 104 104" aria-hidden="true">
      <circle cx="52" cy="52" r={r} fill="none" stroke="var(--line2)" strokeWidth="6" />
      <motion.circle
        cx="52"
        cy="52"
        r={r}
        fill="none"
        stroke={col}
        strokeWidth="6"
        strokeDasharray={c}
        transform="rotate(-90 52 52)"
        initial={{ strokeDashoffset: reduce ? c * (1 - v / 100) : c }}
        whileInView={{ strokeDashoffset: c * (1 - v / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE }}
      />
      <text x="52" y="60" textAnchor="middle" fill="var(--paper)" style={{ font: "700 26px N27, sans-serif" }}>
        {v}
      </text>
    </svg>
  );
}

function Website() {
  return (
    <section className={s.section} id="website">
      <Head n="03" label="Website audit" title="Website">
        miamiconcours.com is where every ad, bio link and search result lands. Today it tells three different stories, loads slowly on phones, and can&apos;t report a single conversion back to an ad platform.
      </Head>
      <Reveal>
        <div className={s.rings}>
          {WEBSITE.scores.map((sc) => (
            <div className={s.ring} key={sc.k}>
              <Ring v={sc.v} />
              <h4>{sc.k}</h4>
              <p>{sc.note}</p>
            </div>
          ))}
        </div>
        <div className={s.vitals}>
          {WEBSITE.vitals.map((v) => (
            <div className={s.cell} key={v.v}>
              <span className={s.statV}>{v.v}</span>
              <span className={s.statL}>{v.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Tracking
          </h3>
          <div className={s.checks}>
            {WEBSITE.tracking.map((t) => (
              <div className={s.check} key={t.k}>
                <span className={t.ok ? s.tick : s.cross} aria-label={t.ok ? "In place" : "Missing"}>
                  {t.ok ? "✓" : "✕"}
                </span>
                <b>{t.k}</b>
                <span>{t.note}</span>
              </div>
            ))}
          </div>
          <p className={s.callout} style={{ marginTop: 22 }}>
            {WEBSITE.trackingNote}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            One event, three stories
          </h3>
          <div className={s.story}>
            {WEBSITE.story.map((r) => (
              <div className={s.storyRow} key={r.where}>
                <b>{r.where}</b>
                <p>{r.says}</p>
                <span className={s.tag} data-s={r.state}>
                  {r.state === "current" ? "2027" : r.state === "stale" ? "2026" : "Broken"}
                </span>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            {WEBSITE.storyNote}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Fix list, before a dollar is spent</h3>
          <span className={`${s.mono} ${s.dim}`}>Crowd Control handles all of it in the first two weeks</span>
        </div>
        <ol className={s.fixes}>
          {WEBSITE.fixes.map((f) => (
            <li className={s.fix} key={f.t}>
              <span>{f.t}</span>
              <span>{f.w}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 Social
 * ------------------------------------------------------------------------- */

function PostGrid({ posts, label, low }: { posts: typeof TOP_POSTS; label: string; low?: boolean }) {
  const open = useVideoBox();
  const group = { label, items: posts.map((p) => item(p.href, `${p.who}`, p.metric, p.note, { low })) };
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

function HBars({ rows, max, fmtV, unit = "" }: { rows: { k: string; v: number; n?: string; self?: boolean; hi?: boolean; note?: string }[]; max: number; fmtV?: (v: number) => string; unit?: string }) {
  return (
    <div className={s.hbars}>
      {rows.map((r, i) => (
        <div className={s.hbar} key={r.k} data-self={r.self ? "" : undefined} data-hi={r.hi ? "" : undefined}>
          <div className={s.hbarK}>
            {r.k}
            {(r.n || r.note) && <small>{r.n ?? r.note}</small>}
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

function Social() {
  const cmax = Math.max(...CADENCE.counts);
  return (
    <section className={s.section} id="social">
      <Head n="04" label="Social audit" title="Social Channels">
        Instagram is the only channel with an audience, and it posts in bursts around February. TikTok and YouTube, where the event actually travels, have no official presence.
      </Head>

      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Channel</th>
                <th>Handle</th>
                <th>Followers</th>
                <th>Posts</th>
                <th>Last post</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {CHANNELS.map((c) => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td className={s.muted} data-l="Handle">{c.handle}</td>
                  <td data-l="Followers">
                    <span className={s.tableNum}>{c.followers}</span>
                  </td>
                  <td className={s.muted} data-l="Posts">{c.posts}</td>
                  <td className={s.muted} style={{ whiteSpace: "nowrap" }} data-l="Last post">
                    {c.last}
                  </td>
                  <td className={s.muted} data-l="State">{c.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Instagram posts per month</h3>
          <span className={`${s.mono} ${s.dim}`}>January 2024 to September 2026</span>
        </div>
        <div className={s.cad}>
          <div className={s.cadBars}>
            {CADENCE.counts.map((v, i) => (
              <motion.span
                key={i}
                className={s.cadBar}
                data-feb={i % 12 === 1 && v ? "" : undefined}
                data-zero={v ? undefined : ""}
                style={{ height: v ? `${(v / cmax) * 100}%` : undefined, transformOrigin: "50% 100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.02 }}
              />
            ))}
          </div>
          <div className={`${s.cadYears} ${s.mono}`}>
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
          </div>
        </div>
        <p className={s.note} style={{ marginTop: 14, maxWidth: "90ch" }}>
          {CADENCE.note}
        </p>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            What&apos;s in the frame
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            {FORMATS.note}
          </p>
          <HBars rows={FORMATS.subject.map((r) => ({ ...r, hi: !r.self && r.v > 3 }))} max={4.5} fmtV={(v) => v.toFixed(2)} unit="%" />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Partners and calls to action
          </h3>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>
                <Counter value={FORMATS.collab.collab} />
              </span>
              <span className={s.statL}>median engagement on collab posts, 2026 cycle</span>
            </div>
            <div>
              <span className={s.duelV}>
                <Counter value={FORMATS.collab.solo} />
              </span>
              <span className={s.statL}>median engagement on solo posts, same cycle</span>
            </div>
            <div>
              <span className={s.duelV}>
                <Counter value={FORMATS.cta.withCta} />
              </span>
              <span className={s.statL}>median plays when the caption has a call to action</span>
            </div>
            <div>
              <span className={s.duelV}>
                <Counter value={FORMATS.cta.noCta} />
              </span>
              <span className={s.statL}>median plays without one</span>
            </div>
          </div>
          <div style={{ marginTop: 26 }}>
            <HBars rows={FORMATS.format} max={3} fmtV={(v) => v.toFixed(2)} unit="%" />
          </div>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>Top performers</h3>
            <span className={`${s.mono} ${s.dim}`}>Tap to watch</span>
          </div>
        </Reveal>
        <PostGrid posts={TOP_POSTS} label="Top performers" />
      </div>
      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>Low performers</h3>
            <span className={`${s.mono} ${s.dim}`}>Shown for contrast</span>
          </div>
        </Reveal>
        <PostGrid posts={LOW_POSTS} label="Low performers" low />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 05 Sentiment
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

function Sentiment() {
  const open = useVideoBox();
  const quoteGroup = {
    label: "What people said",
    items: SENTIMENT.quotes.map((q) => item(q.href, q.who, undefined, undefined, { quote: q.q })),
  };
  const r = SENTIMENT.response;
  const cells = Array.from({ length: r.asked }, (_, i) => (i < r.brand ? "b" : i < r.asked - r.none ? "c" : "n"));
  const tmax = Math.max(...SENTIMENT.themes.map((t) => t.n));
  return (
    <section className={s.section} id="sentiment">
      <Head n="05" label="Social listening and sentiment" title="Sentiment">
        We collected {fmt(SENTIMENT.total)} comments and posts about Miami Concours across Instagram, TikTok, YouTube and Reddit, removed spam and brand replies, and read every text comment. People love the cars. What they complain about is logistics, and logistics is solvable.
      </Head>

      <Reveal>
        <div className={s.subHead}>
          <h3 className={s.h3}>Overall</h3>
          <span className={`${s.mono} ${s.dim}`}>{SENTIMENT.overall.n}</span>
        </div>
        <Stack pos={SENTIMENT.overall.pos} neu={SENTIMENT.overall.neu} neg={SENTIMENT.overall.neg} q={SENTIMENT.overall.q} />
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
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Instagram comments by event cycle</h3>
        </div>
        {SENTIMENT.cycles.map((c) => (
          <div className={s.cycle} key={c.k}>
            <div>
              <b>{c.k}</b>
              <small>
                {c.note} {c.n} text comments.
              </small>
            </div>
            <Stack pos={c.pos} neg={c.neg} q={c.q} />
          </div>
        ))}
        <div className={s.grid2} style={{ marginTop: 30, alignItems: "end" }}>
          <div>
            <div className={s.bigNeg}>24.9% to 8.2%</div>
            <p className={s.statL}>negative share of Instagram comments, 2025 cycle to 2026 cycle</p>
          </div>
          <p className={s.callout}>
            Ticketing calmed the crowds and the comments. It also raised price and access objections. With free general admission back for 2027, the job is to keep the 2026 calm without the 2026 price, and that is a planning and communication problem, not a capacity problem.
          </p>
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Themes
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Mentions per theme. The red part of each bar is the negative share.
          </p>
          <div className={s.hbars}>
            {SENTIMENT.themes.map((t, i) => (
              <div className={s.hbar} key={t.k}>
                <div className={s.hbarK}>{t.k}</div>
                <div className={s.hbarT}>
                  <Grow to={t.n / tmax} className={s.hbarF} delay={i * 0.04} />
                  <Grow to={t.neg / tmax} className={s.hbarNeg} delay={i * 0.04 + 0.2} style={{ right: 0 }} />
                </div>
                <div className={s.hbarV}>{t.n}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Who answers
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            {r.asked} top-level questions sampled on the event&apos;s Instagram grid, November 2024 to February 2026.
          </p>
          <div className={s.meter} aria-label={`${r.brand} answered by the brand, ${r.asked - r.brand - r.none} by others, ${r.none} unanswered`}>
            {cells.map((c, i) => (
              <motion.i
                key={i}
                data-b={c === "b" ? "" : undefined}
                data-c={c === "c" ? "" : undefined}
                data-n={c === "n" ? "" : undefined}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.008 }}
              />
            ))}
          </div>
          <div className={`${s.stackLegend} ${s.mono}`}>
            <span>
              <i style={{ background: "var(--paper)" }} />
              Brand replied: {r.brand}
            </span>
            <span>
              <i style={{ background: "#6b6b73" }} />
              Another user or partner: {r.asked - r.brand - r.none}
            </span>
            <span>
              <i style={{ border: "1px solid var(--red)" }} />
              No reply: {r.none}
            </span>
          </div>
          <ul className={s.asks} style={{ marginTop: 26 }}>
            {SENTIMENT.unanswered.map((q) => (
              <li key={q}>
                <span>&ldquo;{q}&rdquo;</span>
                <span>No brand reply</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>In their words</h3>
            <span className={`${s.mono} ${s.dim}`}>Tap a quote to see it in context</span>
          </div>
        </Reveal>
        <div className={s.quotes}>
          {SENTIMENT.quotes.map((q, i) => (
            <a key={q.q} className={s.quote} data-tone={q.tone} href={q.href} target="_blank" rel="noreferrer" onClick={open(quoteGroup, i)}>
              <blockquote>&ldquo;{q.q}&rdquo;</blockquote>
              <footer className={s.mono}>
                <span>{q.who}</span>
                <span className={s.red}>View</span>
              </footer>
            </a>
          ))}
        </div>
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            The cars people name
          </h3>
          <HBars rows={SENTIMENT.brands.map((b, i) => ({ ...b, hi: i < 4 }))} max={90} />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            How people describe it
          </h3>
          <p className={s.callout}>{SENTIMENT.words.note}</p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>The brief for a free 2027</h3>
        </div>
        <div className={s.briefGrid}>
          {SENTIMENT.brief.map((b, i) => (
            <div className={s.brief} key={b.h}>
              <span className={s.mono}>{String(i + 1).padStart(2, "0")}</span>
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
 * 06 Share of voice
 * ------------------------------------------------------------------------- */

function Voice() {
  const open = useVideoBox();
  const group = { label: "The creator bench", items: VOICE.creators.map((c) => item(c.href, `${c.handle} on ${c.platform}`, `${c.reach} views`, c.note)) };
  const colors = ["var(--paper)", "#b8b8c0", "#6b6b73", "#4a4a50", "#3a3a40", "var(--red)"];
  return (
    <section className={s.section} id="voice">
      <Head n="06" label="Share of voice" title="Share of Voice">
        Miami Concours is one of the most-filmed car events in the country. Almost all of that footage lives on other people&apos;s accounts.
      </Head>
      <div className={s.sov}>
        <Reveal>
          <div className={s.sovBig}>
            <Counter value={327} />
            <small>TikTok views on the two videos the event posted, out of {VOICE.total} across {VOICE.videos} Miami Concours videos</small>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.sovBar}>
            {VOICE.tiktok.map((v, i) => (
              <Grow key={v.k} to={1} style={{ width: `${Math.max(v.pct, v.self ? 0.4 : 0)}%`, background: colors[i] }} delay={i * 0.1} />
            ))}
          </div>
          <div className={s.hbars} style={{ marginTop: 22 }}>
            {VOICE.tiktok.map((v, i) => (
              <div key={v.k} className={s.check} style={{ gridTemplateColumns: "18px minmax(0,1fr) auto", padding: "10px 0" }}>
                <i style={{ width: 12, height: 12, display: "block", background: colors[i], transform: "translateY(3px)" }} />
                <b style={{ fontWeight: v.self ? 700 : 500, color: v.self ? "var(--red)" : undefined }}>{v.k}</b>
                <span className={s.mono} style={{ color: v.self ? "var(--red)" : undefined }}>
                  {fmt(v.v)} views, {v.pct < 0.1 ? "<0.1" : v.pct.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 16 }}>
            {VOICE.youtube}
          </p>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>The creator bench</h3>
            <span className={`${s.mono} ${s.dim}`}>Already posting about the event, unpaid</span>
          </div>
        </Reveal>
        <div className={s.creators}>
          {VOICE.creators.map((c, i) => (
            <Reveal key={c.handle} delay={(i % 4) * 0.05} style={{ display: "flex" }}>
              <a className={s.creator} href={c.href} target="_blank" rel="noreferrer" onClick={open(group, i)} style={{ width: "100%" }}>
                <div className={s.creatorImg}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img ? P(c.img) : "https://i.ytimg.com/vi/H0rVXl4MSQw/hqdefault.jpg"} alt="" loading="lazy" />
                </div>
                <div>
                  <b>{c.handle}</b>
                  <span className={`${s.mono} ${s.dim}`}>
                    {c.platform}, {c.followers} followers
                  </span>
                  <span className={s.creatorReach}>{c.reach}</span>
                  <p>{c.note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className={s.callout} style={{ marginTop: 26 }}>
            {VOICE.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 07 Video intelligence
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
                  <span>For 2027</span>
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
                          <span className={s.noThumb}>
                            <span className={`${s.mono} ${s.red}`} style={{ fontSize: 9 }}>
                              Ad
                            </span>
                          </span>
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

function Video() {
  const [openIdx, setOpen] = useState(0);
  const open = useVideoBox();
  const cutGroup = { label: "Cutdowns from existing footage", items: BRAIN.cutdowns.map((c) => item(c.href, c.m, undefined, `${c.tc}. Source: ${c.src}.`)) };
  return (
    <section className={s.section} id="video">
      <Head n="07" label="Video intelligence" title="Video AI">
        {BRAIN.intro}
      </Head>
      <Reveal>
        <div className={s.brainHead}>
          <div className={s.brainNum}>
            {BRAIN.total}
            <small>videos, {BRAIN.minutes} minutes, queried together</small>
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
      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Ad cutdowns from footage you already own</h3>
          <span className={`${s.mono} ${s.dim}`}>Partner footage needs sign-off before paid use</span>
        </div>
        <div className={s.cuts}>
          {BRAIN.cutdowns.map((c, i) => (
            <a key={c.href + c.tc} className={s.cut} href={c.href} target="_blank" rel="noreferrer" onClick={open(cutGroup, i)}>
              <span>{c.tc}</span>
              <span>{c.m}</span>
              <span>{c.src}</span>
              <span className={s.chipPlay}>
                <PlayIcon />
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 08 Partners + competition + calendar + sponsors
 * ------------------------------------------------------------------------- */

function Partners() {
  const max = PARTNERS.list[0].v;
  return (
    <div className={s.sub} id="partners">
      <Reveal>
        <div className={s.subHead}>
          <h3 className={s.h3}>Partner reach</h3>
          <span className={`${s.mono} ${s.dim}`}>Instagram followers</span>
        </div>
      </Reveal>
      <div className={s.grid2}>
        <Reveal>
          <div className={s.pBars}>
            {PARTNERS.list.map((p, i) => (
              <div className={`${s.pBar} ${s.hbar}`} key={p.k} data-self={p.self ? "" : undefined} data-hi={!p.self ? "" : undefined}>
                <div className={s.hbarK}>
                  {p.k}
                  {p.note && <small>{p.note}</small>}
                </div>
                <div className={s.hbarT}>
                  <Grow to={Math.max(0.005, p.v / max)} className={s.hbarF} delay={i * 0.05} />
                </div>
                <div className={s.hbarV} style={{ fontSize: "1.1rem" }}>
                  {fmt(p.v)}
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            {PARTNERS.tiktok}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.hbars}>
            {PARTNERS.facts.map((f) => (
              <div key={f.v} style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                <span className={s.statV}>{f.v}</span>
                <span className={s.statL}>{f.l}</span>
              </div>
            ))}
          </div>
          <p className={s.callout} style={{ marginTop: 24 }}>
            {PARTNERS.note}
          </p>
        </Reveal>
      </div>
    </div>
  );
}

function Field() {
  return (
    <section className={s.section} id="field">
      <Head n="08" label="Competitive landscape" title="Competition">
        {FIELD.white}
      </Head>
      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Event</th>
                <th>Next dates</th>
                <th>Ticket model</th>
                <th>Instagram</th>
                <th>TikTok</th>
                <th>Meta ads now</th>
              </tr>
            </thead>
            <tbody>
              {FIELD.rows.map((r) => (
                <tr key={r.k} data-self={r.self ? "" : undefined} data-hot={r.hot ? "" : undefined}>
                  <td>{r.k}</td>
                  <td className={s.muted} style={{ whiteSpace: "nowrap" }} data-l="Dates">
                    {r.date}
                  </td>
                  <td className={s.muted} data-l="Tickets">{r.price}</td>
                  <td data-l="Instagram">
                    <span className={s.tableNum}>{r.ig}</span>
                  </td>
                  <td className={s.muted} data-l="TikTok">{r.tt}</td>
                  <td data-l="Meta ads now">{r.ads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Positioning
          </h3>
          <div className={s.map}>
            <div className={`${s.mapAxis} ${s.mapAxisY}`}>Paid, exclusive</div>
            <div className={s.mapCell}>
              {FIELD.map.tl.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <div className={s.mapCell}>
              {FIELD.map.tr.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <div className={`${s.mapAxis} ${s.mapAxisY}`}>Open, free</div>
            <div className={s.mapCell}>
              {FIELD.map.bl.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <div className={s.mapCell} data-self="">
              {FIELD.map.br.map((x, i) => (
                <span key={x} data-self={i === 0 ? "" : undefined}>
                  {x}
                </span>
              ))}
            </div>
            <div className={s.mapAxis} />
            <div className={s.mapAxis}>Heritage, judged</div>
            <div className={s.mapAxis}>Lifestyle, street</div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            February 2027
          </h3>
          <div className={s.cal}>
            {CALENDAR.map((c) => (
              <div className={s.calRow} key={c.k} data-self={c.self ? "" : undefined} data-hot={c.hot ? "" : undefined}>
                <b>{c.d}</b>
                <div>
                  <h4>{c.k}</h4>
                  {c.note && <p>{c.note}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className={s.callout} style={{ marginTop: 22 }}>
            {CALENDAR_NOTE}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <div className={s.obs}>
          {FIELD.obs.map((o) => (
            <div key={o.h}>
              <h4>{o.h}</h4>
              <p>{o.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Partners />

      <div className={s.sub} id="sponsors">
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>Sponsor value</h3>
          </div>
          <p className={s.intro} style={{ marginBottom: 30 }}>
            {SPONSORS.intro}
          </p>
        </Reveal>
        <div className={s.grid2}>
          <Reveal>
            <div className={s.stats} style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))", marginBottom: 26 }}>
              {SPONSORS.wealth.map((w) => (
                <div key={w.l}>
                  <span className={s.statV}>{w.v}</span>
                  <span className={s.statL}>{w.l}</span>
                </div>
              ))}
            </div>
            <div className={s.gaps}>
              {SPONSORS.gaps.map((g) => (
                <div className={s.gap} key={g.k}>
                  <b>{g.k}</b>
                  <span>{g.peer}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h4 className={s.h3} style={{ fontSize: "1.4rem", marginBottom: 18 }}>
              What sponsors get from us
            </h4>
            <ul className={s.proof}>
              {SPONSORS.proof.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className={s.callout} style={{ marginTop: 24 }}>
              {SPONSORS.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 09 Plan
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
      if (i >= PHASES.length - 1) clearInterval(t);
    }, 260);
    return () => clearInterval(t);
  }, [inView]);
  return (
    <section className={s.section} id="plan">
      <Head n="09" label="The plan" title="The Plan">
        {SYSTEM.intro}
      </Head>

      <Reveal>
        <div className={s.flow}>
          {SYSTEM.nodes.map((n, i) => (
            <div className={s.flowNode} key={n.k} data-px={i === 1 ? "" : undefined}>
              <div className={s.flowHead}>
                <span className={s.flowDot} />
                {i < SYSTEM.nodes.length - 1 && (
                  <span className={s.flowLine} style={{ left: 14 }}>
                    <Grow to={1} className={s.flowLineFill} delay={0.2 + i * 0.18} />
                  </span>
                )}
              </div>
              {i === 1 && <span className={s.flowPx}>PromoTix</span>}
              <h4>{n.k}</h4>
              <ul>
                {n.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.px}>
          <div>
            <div className={s.pxLogos}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
              <i>+</i>
              <span>PromoTix</span>
            </div>
            <h3 className={s.h3}>Built with PromoTix</h3>
            <p className={s.intro} style={{ marginTop: 16, fontSize: "1.02rem" }}>
              {PROMOTIX.intro}
            </p>
          </div>
          <div className={s.pxGrid}>
            {PROMOTIX.items.map((p) => (
              <div key={p.h}>
                <h4>{p.h}</h4>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Audiences</h3>
        </div>
        <div className={s.aud}>
          {AUDIENCES.map((a) => (
            <div key={a.k}>
              <h4>{a.k}</h4>
              <p>{a.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>Flight plan</h3>
            <span className={`${s.mono} ${s.dim}`}>October 2026 to February 2027</span>
          </div>
        </Reveal>
        <div className={s.phases} ref={phasesRef}>
          {PHASES.map((p, i) => (
            <div className={s.phase} key={p.k} data-on={on >= i ? "" : undefined}>
              <span className={s.phaseN}>Phase {i}</span>
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
        <div className={s.subHead}>
          <h3 className={s.h3}>What we report, weekly</h3>
        </div>
        <ol className={s.measure}>
          {MEASURE.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 10 Creative
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

function Phone({ ad }: { ad: (typeof CREATIVE.ads)[number] }) {
  const vsrc = `${IMG}/video/${ad.video}`;
  const poster = `${IMG}/video/${ad.video.replace(".mp4", ".webp")}`;
  if (ad.ratio === "34") {
    return (
      <div className={s.phone}>
        <div className={s.screen} data-r="34">
          <div className={s.feedTop}>
            <span className={s.feedAvatar}>MC</span>
            <span className={s.feedName}>
              miamiconcours
              <small>Sponsored</small>
            </span>
          </div>
          <div className={s.feedMedia}>
            <AutoVideo src={vsrc} poster={poster} />
            <div className={s.ov}>
              <span className={s.ovTop}>{ad.top}</span>
              <div>
                <div className={s.ovBig}>{ad.big}</div>
                <div className={s.ovSmall}>
                  {ad.small.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={s.feedCta}>
            <span>{ad.cta}</span>
            <span aria-hidden="true">›</span>
          </div>
          <div className={s.feedIcons}>
            <i />
            <i />
            <i />
          </div>
          <p className={s.feedCopy}>
            <b>miamiconcours</b> The tenth Miami Concours. February 19 to 21, Miami Design District.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={s.phone}>
      <div className={s.screen} data-r="916">
        <AutoVideo src={vsrc} poster={poster} />
        <div className={s.ov}>
          {ad.top ? <span className={s.ovTop}>{ad.top}</span> : <span />}
          <div>
            <div className={s.ovBig}>{ad.big}</div>
            <div className={s.ovSmall}>
              {ad.small.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <div className={s.ovCta}>{ad.cta}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Creative() {
  return (
    <section className={s.section} id="creative">
      <Head n="10" label="Example creative" title="Example Creative">
        {CREATIVE.intro}
      </Head>
      <Reveal>
        <div className={`${s.aiLabel} ${s.mono}`} style={{ marginBottom: 34 }}>
          <i />
          {CREATIVE.label}
        </div>
      </Reveal>
      <div className={s.phones}>
        {CREATIVE.ads.map((ad, i) => (
          <Reveal key={ad.k} delay={i * 0.08}>
            <div className={s.phoneWrap}>
              <Phone ad={ad} />
              <div className={s.phoneMeta}>
                <span className={`${s.mono} ${s.red}`}>{ad.fmt}</span>
                <h4>{ad.k}</h4>
                <p>{ad.why}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className={`${s.stills} ${s.sub}`}>
        {CREATIVE.stills.map((st, i) => (
          <Reveal key={st.img} delay={i * 0.08}>
            <div className={s.still}>
              <div className={s.stillMedia}>
                <span className={s.aiBadge}>AI example</span>
                <Image src={`${IMG}/creative/${st.img}`} alt={st.line} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: "cover" }} />
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
 * 11 Next
 * ------------------------------------------------------------------------- */

function Next() {
  return (
    <>
      <section className={s.section} id="why">
        <Head n="11" label="Crowd Control" title="Why Crowd Control">
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
          <Image src={`${IMG}/photos/street.webp`} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
        </div>
        <section className={`${s.section} ${s.nextInner}`}>
          <Reveal>
            <Label n="12">Next steps</Label>
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
            Figures pulled September 30, 2026. Engagement rates use likes plus comments over current followers. Instagram shares, saves and reach are not public. Example creative in section 10 was generated with AI for this audit and is directional only. Event photography from the Miami Concours gallery.
          </p>
        </details>
      </section>
      <footer className={`${s.footer} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Prepared for Miami Concours by Crowd Control Digital</span>
        <span>September 2026</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function MiamiConcoursClient() {
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
            { src: "p45.webp", alt: "Ferrari P4/5 on the red carpet, Miami Concours 2026" },
            { src: "fashion-roadster.webp", alt: "Guest seated in a vintage roadster outside a Design District boutique" },
            { src: "family.webp", alt: "A father and two sons on the red carpet" },
            { src: "storefront.webp", alt: "Koenigsegg parked outside David Yurman in the Design District" },
          ]}
        />
        <Search />
        <div className={s.rule} />
        <Website />
        <PhotoBand
          imgs={[
            { src: "crowd-unveil.webp", alt: "Crowd filming a Pagani on the red carpet" },
            { src: "doors-up.webp", alt: "McLaren F1 with doors up, surrounded by spectators" },
            { src: "night-portrait.webp", alt: "Guests posing in front of hypercar taillights at night" },
            { src: "entry-gate.webp", alt: "Guests entering through the Miami Concours gate" },
          ]}
        />
        <Social />
        <div className={s.rule} />
        <Sentiment />
        <div className={s.rule} />
        <Voice />
        <div className={s.rule} />
        <Video />
        <div className={s.rule} />
        <Field />
        <PhotoBand
          imgs={[
            { src: "panel.webp", alt: "Design Driven panel talk at Miami Concours 2026" },
            { src: "screening.webp", alt: "The Screening drive-in, seen from above" },
            { src: "petals.webp", alt: "Porsche covered in pink roses for Porsche and Petals" },
            { src: "martini.webp", alt: "Porsche 918 in Martini livery" },
          ]}
        />
        <Plan />
        <div className={s.rule} />
        <Creative />
        <div className={s.rule} />
        <Next />
      </main>
    </VideoBoxProvider>
  );
}
