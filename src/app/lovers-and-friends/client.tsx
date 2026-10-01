"use client";

/**
 * LOVERS & FRIENDS x CROWD CONTROL DIGITAL: digital audit.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Event photography from the festival's official channels; AI example creative is
 * labeled as such. Every referenced social post opens in the shadowbox (video-box.tsx).
 */

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
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
import s from "./lnf.module.css";
import { VideoBoxProvider, useVideoBox, type VideoItem } from "./video-box";
import {
  IMG,
  P,
  PH,
  NAV,
  HERO,
  MARQUEE,
  SUMMARY,
  EDITIONS,
  PRICES,
  GENRES,
  RECORD_STATS,
  RECORD_NOTES,
  MARKET,
  PEERS,
  METRICS,
  CHANNELS,
  CADENCE,
  CATEGORY,
  TOP_POSTS,
  LOW_POSTS,
  SOCIAL_NOTES,
  SENTIMENT,
  SEARCH,
  SOV,
  BRAIN,
  FUNNEL,
  PLAN,
  CREATIVE,
  WHY,
  NEXT,
  SOURCES,
  type Peer,
} from "@/lib/lovers-and-friends/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2)}M` : n >= 1e4 ? `${Math.round(n / 1e3)}K` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : `${n}`);
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Lovers & Friends x Crowd Control: audit walk-through")}&body=${encodeURIComponent(
  "Hi Geoff,\n\nWe've read the Lovers & Friends audit and would like to set up a walk-through.\n\nName and team:\nTimes that work:\n",
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

/** Scale-in bar: grows from 0 to `to` (0..1) on the X or Y axis when its parent scrolls into view. */
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

const platformOf = (href: string) =>
  /tiktok/.test(href) ? "TikTok" : /youtube|youtu\.be/.test(href) ? "YouTube" : /instagram/.test(href) ? "Instagram" : /reddit/.test(href) ? "Reddit" : /x\.com|twitter/.test(href) ? "X" : "Web";

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
  ...SOV.creators.map((c) => c.img),
  "C4_Nx1Qvnkj", "C6WTyySrEvO", "C4gPnkcp_6J", "C5TnJ96RkNu", "7353703193391402282", "7230469504101272874", "7230659136554372398",
  "7689182115442904334", "DdZOXX6JddJ", "7327400743000935722", "7327401950939581739", "7230335036904672558", "Ddt1eQwOhbE",
  "DS2zxY9gWY5", "Ddpbm4tOcMC", "C5ds2ctLTEy", "C6higSMP5TR", "7491728813840207135", "7365006995641945386", "7230350614067203354", "CdjXTeFvA-d",
]);
const posterOf = (href: string) => {
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
        <span className={s.mono}>for Lovers &amp; Friends</span>
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
        <Image src={PH("hero-nelly")} alt="Nelly throws his hat to the Lovers & Friends crowd, Las Vegas, 2023" fill priority sizes="100vw" style={{ objectPosition: "50% 45%" }} />
      </motion.div>
      <div className={s.heroShade} />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
        </Reveal>
        <h1 className={s.heroTitle} aria-label={HERO.title} data-revealed={reduce || revealed ? "" : undefined}>
          {words.map((w, i) => (
            <span className={s.word} key={w + i} aria-hidden="true">
              <motion.span
                className={`${s.letter} ${w === "&" ? s.amp : ""}`}
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
                    <Counter value={st.value} />
                  </span>
                  <span className={s.heroStatLabel}>{st.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>{HERO.date}</span>
          <span className={s.photoCredit}>Photography: Lovers &amp; Friends 2022 and 2023</span>
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

function PhotoBand({ imgs }: { imgs: { src: string; alt: string }[] }) {
  return (
    <div className={s.band}>
      {imgs.map((im) => (
        <div key={im.src}>
          <Image src={PH(im.src)} alt={im.alt} fill sizes="(max-width: 1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
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
 * 02 Track record
 * ------------------------------------------------------------------------- */

function Record() {
  const pmax = 720;
  const gColors = ["var(--paper)", "var(--red)", "#6b6b73", "#b8b8c0", "#3a3a40"];
  const gText = ["var(--ink)", "var(--ink)", "var(--paper)", "var(--ink)", "var(--paper)"];
  return (
    <section className={s.section} id="record">
      <Head n="02" label="Track record" title="Track Record">
        Five years, two editions held, two cancelled. Every edition that went on sale sold out.
      </Head>
      <div className={s.tl}>
        {EDITIONS.map((e, i) => (
          <Reveal key={e.y} delay={i * 0.06} style={{ display: "flex" }}>
            <div className={s.tlItem} data-s={e.state} style={{ width: "100%" }}>
              <span className={s.tlY}>{e.y}</span>
              <span className={s.tlTag}>{e.state === "held" ? "Held" : e.state === "cancelled" ? "Cancelled" : "Dark"}</span>
              <h4>{e.head}</h4>
              {e.names && <span className={s.tlNames}>{e.names}</span>}
              <p>{e.body}</p>
              <div className={s.tlStat}>
                <b>{e.stat}</b>
                <span>{e.statL}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className={s.stats} style={{ marginTop: 1 }}>
        {RECORD_STATS.map((st, i) => (
          <Reveal key={st.l} delay={i * 0.06}>
            <span className={s.statV}>{st.v}</span>
            <span className={s.statL}>{st.l}</span>
          </Reveal>
        ))}
      </div>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <SubHead title="Price, edition by edition" aside="Face value, before fees" />
          <div className={s.chart}>
            <div className={`${s.chartLegend} ${s.mono}`}>
              <span>
                <i style={{ background: "var(--red)" }} />
                GA
              </span>
              <span>
                <i style={{ background: "#6b6b73" }} />
                GA+
              </span>
              <span>
                <i style={{ background: "var(--paper)" }} />
                VIP
              </span>
            </div>
            <div className={s.price}>
              {PRICES.map((p, i) => (
                <div className={s.priceCol} key={p.y}>
                  {(["ga", "gaPlus", "vip"] as const).map((k, j) => {
                    const v = (p as Record<string, number | string>)[k] as number | undefined;
                    if (!v) return <span key={k} style={{ width: "30%" }} />;
                    return (
                      <Grow key={k} axis="y" to={1} className={s.priceBar} style={{ height: `${(v / pmax) * 100}%`, background: ["var(--red)", "#6b6b73", "var(--paper)"][j] }} delay={i * 0.12 + j * 0.06}>
                        <span>${v}</span>
                      </Grow>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className={`${s.priceAxis} ${s.mono}`}>
              {PRICES.map((p) => (
                <span key={p.y}>{p.y}</span>
              ))}
            </div>
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            A payment plan from $19.99 down was offered in 2022 and 2024.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <SubHead title="Lineup DNA" aside="Share of acts by genre" />
          <div className={s.genre}>
            {GENRES.years.map((y) => (
              <div className={s.genreRow} key={y.y}>
                <b>
                  {y.y}
                  <small>{y.n} acts</small>
                </b>
                <div className={s.genreBar}>
                  {y.v.map((v, i) => (
                    <Grow key={i} to={1} style={{ width: `${v}%`, background: gColors[i], color: gText[i] }} delay={i * 0.1}>
                      {v >= 9 ? `${Math.round(v)}%` : ""}
                    </Grow>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className={`${s.stackLegend} ${s.mono}`} style={{ marginTop: 18 }}>
            {GENRES.keys.map((k, i) => (
              <span key={k}>
                <i style={{ background: gColors[i], border: "1px solid var(--line2)" }} />
                {k}
              </span>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            {GENRES.note}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The posters" aside="2023, 2024, the sellout and the night before" />
        <div className={s.posters}>
          {[
            { f: "poster-2023", c: "2023 lineup" },
            { f: "poster-2024", c: "2024 lineup" },
            { f: "soldout-2024", c: "2024 sold out, January 26" },
            { f: "cancel-2024", c: "May 3, 2024, 9:51 PM" },
          ].map((p) => (
            <figure className={s.posterCard} key={p.f}>
              <Image src={PH(p.f)} alt={`Lovers & Friends ${p.c}`} fill sizes="(max-width: 1000px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <figcaption>{p.c}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={`${s.why} ${s.notes3}`}>
          {RECORD_NOTES.map((n) => (
            <div key={n.h}>
              <h4>{n.h}</h4>
              <p>{n.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 03 Market
 * ------------------------------------------------------------------------- */

function Market() {
  return (
    <section className={s.section} id="market">
      <Head n="03" label="Market position" title="Market">
        {MARKET.intro}
      </Head>
      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Festival</th>
                <th>Lane</th>
                <th>City</th>
                <th>2026</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MARKET.peers.map((p) => (
                <tr key={p.k} data-self={"self" in p && p.self ? "" : undefined}>
                  <td style={{ color: "self" in p && p.self ? "var(--red)" : undefined }}>{p.k}</td>
                  <td className={s.muted} data-l="Lane">
                    {p.lane}
                  </td>
                  <td className={s.muted} data-l="City">
                    {p.where}
                  </td>
                  <td className={s.muted} data-l="State">
                    {p.note}
                  </td>
                  <td data-l="Status">
                    <span className={s.status} data-s={p.s}>
                      {p.s}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <div className={s.stats} style={{ marginTop: 40 }}>
        {MARKET.stats.map((st, i) => (
          <Reveal key={st.l} delay={i * 0.06}>
            <span className={s.statV}>{st.v}</span>
            <span className={s.statL}>{st.l}</span>
          </Reveal>
        ))}
      </div>
      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <SubHead title="The 2026 calendar" />
          <div className={s.cal}>
            {MARKET.window.map((w) => (
              <div className={s.calRow} key={w.k} data-hot={/Las Vegas/.test(w.where) ? "" : undefined}>
                <b>{w.d}</b>
                <div>
                  <h4>{w.k}</h4>
                  <p>{w.where}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            {MARKET.windowNote}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={s.bigCallout} style={{ marginBottom: 22 }}>
            The position is open.
          </p>
          <p className={s.callout}>{MARKET.callout}</p>
        </Reveal>
      </div>
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

function Explorer() {
  const [m, setM] = useState<(typeof METRICS)[number]["id"]>("ig");
  const meta = METRICS.find((x) => x.id === m)!;
  const rows = useMemo(() => {
    const val = (p: Peer) => (p[m as keyof Peer] as number | null) ?? -1;
    return [...PEERS].sort((a, b) => val(b) - val(a));
  }, [m]);
  const max = Math.max(...PEERS.map((p) => (p[m as keyof Peer] as number | null) ?? 0));
  const show = (v: number | null) => (v == null || v < 0 ? "n/a" : meta.fmt === "pct" ? `${v.toFixed(2)}%` : meta.fmt === "pct0" ? `${v}%` : compact(v));
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
          const v = p[m as keyof Peer] as number | null;
          return (
            <motion.div layout transition={{ duration: 0.6, ease: EASE }} className={s.exRow} key={p.k} data-self={p.self ? "" : undefined}>
              <span className={s.exK}>{p.k}</span>
              <span className={s.exT}>
                <span className={s.exF} style={{ width: `${v == null ? 0 : Math.max(0.6, (v / max) * 100)}%` }} />
              </span>
              <span className={s.exV}>{show(v)}</span>
            </motion.div>
          );
        })}
      </div>
      <p className={s.note} style={{ marginTop: 16 }}>
        {meta.note} Pulled October 1, 2026 (UTC).
      </p>
    </div>
  );
}

function Social() {
  const cmax = Math.max(...CADENCE.counts);
  return (
    <section className={s.section} id="social">
      <Head n="04" label="Social benchmark" title="Social">
        Benchmarked against ten peer festivals, Lovers &amp; Friends has a top-three audience and the best TikTok reach per follower in the set. It has also been silent longer than any of them.
      </Head>

      <Reveal>
        <Explorer />
      </Reveal>

      <Reveal className={s.sub}>
        <SubHead title="Owned channels today" />
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
                    {c.last || "None"}
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
        <SubHead title="Instagram posts per month" aside="July 2021 to September 2026" />
        <div className={s.cad}>
          <div className={s.cadBars} style={{ gridTemplateColumns: `repeat(${CADENCE.counts.length}, minmax(0, 1fr))` }}>
            {CADENCE.counts.map((v, i) => (
              <motion.span
                key={i}
                className={s.cadBar}
                title={`${CADENCE.months[i]}: ${v} posts`}
                data-feb={CADENCE.months[i].endsWith("-05") && v ? "" : undefined}
                data-zero={v ? undefined : ""}
                style={{ height: v ? `${(v / cmax) * 100}%` : undefined, transformOrigin: "50% 100%" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.012 }}
              />
            ))}
          </div>
          <div className={`${s.cadYears} ${s.mono}`} style={{ gridTemplateColumns: "6fr 12fr 12fr 12fr 12fr 9fr" }}>
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
            <span>2024</span>
            <span>2025</span>
            <span>2026</span>
          </div>
        </div>
        <p className={s.note} style={{ marginTop: 14, maxWidth: "90ch" }}>
          {CADENCE.note} Festival months in red.
        </p>
        <div className={s.grid3} style={{ marginTop: 22 }}>
          {CADENCE.years.map((y) => (
            <div className={s.cell} key={y.y}>
              <span className={`${s.mono} ${s.red}`}>{y.y}</span>
              <span className={s.statV} style={{ marginTop: 10 }}>
                {y.posts} posts
              </span>
              <span className={s.statL}>
                {y.er} median engagement, {y.reels} {"one" in y && y.one ? "reel" : "reels"} over 1M plays. {y.note}.
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            What worked, by content type
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Median engagement rate across the full Instagram history, by category.
          </p>
          <HBars rows={CATEGORY.map((c, i) => ({ k: c.k, n: c.n, v: c.v, hi: i < 2, self: i === CATEGORY.length - 1 }))} max={2.6} fmtV={(v) => v.toFixed(2)} unit="%" />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Collabs and sponsors
          </h3>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>2%</span>
              <span className={s.statL}>of Lovers &amp; Friends posts are collabs</span>
            </div>
            <div>
              <span className={s.duelV}>36%</span>
              <span className={s.statL}>peer median collab share</span>
            </div>
            <div>
              <span className={s.duelV}>0.25%</span>
              <span className={s.statL}>median engagement on sponsor posts</span>
            </div>
            <div>
              <span className={s.duelV}>2.40%</span>
              <span className={s.statL}>on creator reposts, 9.6x the rate</span>
            </div>
          </div>
          <p className={s.callout} style={{ marginTop: 22 }}>
            {SOCIAL_NOTES.collab}
          </p>
          <p className={s.note} style={{ marginTop: 14 }}>
            {SOCIAL_NOTES.sponsor}
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
 * 05 Sentiment
 * ------------------------------------------------------------------------- */

function Stack({ pos, neu, neg, mix }: { pos: number; neu?: number; neg: number; mix?: number }) {
  const m = mix ?? 0;
  const n = neu ?? Math.max(0, 100 - pos - neg - m);
  const parts = [
    { c: s.sPos, v: pos, l: "Positive" },
    { c: s.sNeu, v: n, l: "Neutral" },
    { c: s.sNeg, v: neg, l: "Negative" },
    { c: s.sQ, v: m, l: "Mixed" },
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
  const [mode, setMode] = useState<"full" | "hand">("full");
  const quoteGroup = { label: "In their words", items: SENTIMENT.quotes.map((q) => item(q.href, q.who, undefined, undefined, { quote: q.q })) };
  const tmax = Math.max(...SENTIMENT.themes.map((t) => t.share));
  const dots = Array.from({ length: SENTIMENT.reply.asked }, (_, i) => i === 400 || i === 1300);
  return (
    <section className={s.section} id="sentiment">
      <Head n="05" label="Social listening and sentiment" title="Sentiment">
        We collected {fmt(SENTIMENT.collected)} comments and posts about Lovers &amp; Friends across Instagram, TikTok, YouTube, Reddit and X, removed name collisions with the song and the clothing label, hand-coded {fmt(SENTIMENT.handCoded)} of them, and calibrated a classifier on the rest. People love the show. What they distrust is the organization behind it.
      </Head>

      <Reveal>
        <SubHead title="Overall" aside={`${fmt(SENTIMENT.analyzed)} items analyzed`} />
        <Stack pos={SENTIMENT.overall.pos} neu={SENTIMENT.overall.neu} neg={SENTIMENT.overall.neg} mix={SENTIMENT.overall.mix} />
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
            Mixed
          </span>
        </div>
      </Reveal>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Sentiment by festival cycle</h3>
          <div className={s.toggle} role="group" aria-label="Choose a method">
            <button aria-pressed={mode === "full"} onClick={() => setMode("full")}>
              Full corpus
            </button>
            <button aria-pressed={mode === "hand"} onClick={() => setMode("hand")}>
              Hand-coded
            </button>
          </div>
        </div>
        {SENTIMENT.cycles.map((c) => (
          <div className={s.cycle} key={c.k}>
            <div>
              <b>{c.k}</b>
              <small>
                {c.note}. {mode === "full" ? fmt(c.n) : c.hnN} items.
              </small>
            </div>
            <div key={mode}>
              <Stack pos={mode === "full" ? c.pos : c.hp} neg={mode === "full" ? c.neg : c.hn} />
            </div>
          </div>
        ))}
        <div className={s.grid2} style={{ marginTop: 30, alignItems: "end" }}>
          <div>
            <div className={s.bigNeg} style={{ marginBottom: 14 }}>7% positive</div>
            <p className={s.statL}>hand-coded sentiment in the cancellation period, against 44% in the 2024 lead-up</p>
          </div>
          <p className={s.callout}>
            2023 proves the audience forgives. After the heat, water and crowd problems of 2022, the fixes in 2023 flipped hand-coded sentiment from 14% positive to 43%. The cancellation reset it, and two years of silence have kept it from recovering: still 36% negative in 2026, against 12% before the cancellation.
          </p>
        </div>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Themes
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Share of on-topic conversation. The red part of each bar is the negative share of that theme.
          </p>
          <div className={s.hbars}>
            {SENTIMENT.themes.map((t, i) => (
              <div className={s.hbar} key={t.k}>
                <div className={s.hbarK}>
                  {t.k}
                  <small>{t.pos >= 50 ? `${Math.round(t.pos)}% positive` : `${Math.round(t.neg)}% negative`}</small>
                </div>
                <div className={s.hbarT}>
                  <Grow to={t.share / tmax} className={s.hbarF} delay={i * 0.03} />
                  <Grow to={((t.share * t.neg) / 100) / tmax} className={s.hbarNeg} delay={i * 0.03 + 0.2} style={{ right: 0 }} />
                </div>
                <div className={s.hbarV}>{t.share}%</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 8 }}>
            Who answers
          </h3>
          <p className={s.note} style={{ marginBottom: 22 }}>
            Every fan question found under official posts, one square each. White squares got an official reply.
          </p>
          <div className={s.dots} aria-label={`${SENTIMENT.reply.answered} of ${fmt(SENTIMENT.reply.asked)} fan questions answered`}>
            {dots.map((a, i) => (
              <i key={i} data-a={a ? "" : undefined} />
            ))}
          </div>
          <div className={s.duel} style={{ marginTop: 22 }}>
            <div>
              <span className={s.duelV}>
                <Counter value={SENTIMENT.reply.asked} />
              </span>
              <span className={s.statL}>fan questions under official posts</span>
            </div>
            <div>
              <span className={s.duelV} style={{ color: "var(--paper)" }}>
                {SENTIMENT.reply.answered}
              </span>
              <span className={s.statL}>answered by the festival, 0.1%</span>
            </div>
          </div>
          <div className={s.qlist} style={{ marginTop: 26 }}>
            {SENTIMENT.unanswered.map((q) => (
              <div className={s.qrow} key={q.k}>
                <b>{q.k}</b>
                <span>{q.n}</span>
                {q.q && <em>&ldquo;{q.q}&rdquo;</em>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The trust gap" />
        <div className={s.trio}>
          {SENTIMENT.trust.map((t) => (
            <div key={t.l}>
              <b>{t.v}</b>
              <span>{t.l}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="In their words" aside="Tap a quote to see it in context" />
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
            The names people say
          </h3>
          <HBars rows={SENTIMENT.artists.map((a, i) => ({ k: a.k, v: a.v, hi: i === 0 }))} max={460} />
          <p className={s.note} style={{ marginTop: 14 }}>
            Mentions in any context across the corpus.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            What fans want next
          </h3>
          <p className={s.callout}>
            Explicit artist requests are rare and split two ways: older soul (Earth, Wind &amp; Fire, Anita Baker, Sade, Maze, Babyface, After 7) and 2000s pop crossover (Fergie, Gwen Stefani, Craig David, Jason Derulo). Almost nobody complains about repeat acts. The request that does repeat is the festival itself: &ldquo;bring it back&rdquo; and &ldquo;same lineup please.&rdquo;
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The fan brief for a return" />
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
 * 06 Demand: search + share of voice
 * ------------------------------------------------------------------------- */

function Demand() {
  const open = useVideoBox();
  const totals = SEARCH.fest.map((f, i) => f + SEARCH.year[i]);
  const max = Math.max(...totals);
  const pmax = SEARCH.peers[0].v;
  const group = { label: "Creators carrying the festival", items: SOV.creators.map((c) => item(c.href, `${c.handle} on TikTok`, c.reach.includes("likes") ? c.reach : `${c.reach} views`, c.note)) };
  return (
    <section className={s.section} id="demand">
      <Head n="06" label="Search and share of voice" title="Demand">
        People are still looking for Lovers &amp; Friends. They search for it by year, they ask Google whether it is coming back, and they land on a cancellation notice. Every month without an answer, fewer of them search.
      </Head>
      <Reveal>
        <div className={s.chart}>
          <div className={`${s.chartLegend} ${s.mono}`}>
            <span>
              <i style={{ background: "var(--red)" }} />
              Year searches (&quot;lovers and friends 2025&quot;, &quot;2026&quot;, &quot;2027&quot;)
            </span>
            <span>
              <i style={{ background: "var(--paper)" }} />
              &quot;lovers and friends festival&quot;
            </span>
            <span>US monthly searches, Sep 2024 to Aug 2026</span>
          </div>
          <div className={s.bars} style={{ gridTemplateColumns: `repeat(${totals.length}, minmax(0, 1fr))`, gap: "clamp(2px, 0.5vw, 8px)" }}>
            {totals.map((t, i) => (
              <div className={s.barCol} key={i} title={`${SEARCH.ym[i]}: ${fmt(t)}`}>
                <Grow axis="y" to={1} className={s.sbar} style={{ height: `${(t / max) * 100}%` }} delay={i * 0.03}>
                  <i style={{ height: `${(SEARCH.year[i] / t) * 100}%` }} />
                  <i style={{ height: `${(SEARCH.fest[i] / t) * 100}%` }} />
                  {(i === 4 || i === totals.length - 1) && <span className={s.barVal}>{compact(t)}</span>}
                </Grow>
              </div>
            ))}
          </div>
          <div className={`${s.barAxis} ${s.mono}`} style={{ gridTemplateColumns: `repeat(${totals.length}, minmax(0, 1fr))`, gap: "clamp(2px, 0.5vw, 8px)", fontSize: 9 }}>
            {SEARCH.months.map((m, i) => (
              <span key={i}>{m}</span>
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
            What people ask Google
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
                <div className={s.searchA}>
                  {a.a.map((x) => (
                    <span key={x} data-hot={/2027|coming back|rescheduled|happening|cancelled/.test(x) ? "" : undefined}>
                      {x}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            Google autocomplete, September 30, 2026. Highlighted terms are return and 2027 signals.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Search against peers
          </h3>
          <HBars rows={SEARCH.peers.map((p) => ({ k: p.k, v: p.v, self: "self" in p && p.self }))} max={pmax} fmtV={compact} />
          <p className={s.note} style={{ marginTop: 14 }}>
            {SEARCH.peersNote}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <p className={s.callout}>
          <strong>The name is up for grabs.</strong> {SEARCH.collision}
        </p>
      </Reveal>

      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <h3 className={s.h3} style={{ marginBottom: 22 }}>
            Share of voice, last 12 months
          </h3>
          <HBars rows={SOV.rows.map((r) => ({ k: r.k, v: r.tt, self: r.self, n: `${fmt(r.x)} X posts` }))} max={15} fmtV={(v) => `${v}M`} />
          <p className={s.note} style={{ marginTop: 14 }}>
            {SOV.note}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.sovBig}>
            4.4M
            <small>all-time TikTok plays on the top festival videos, in Dreamville's range (5.8M). In the last 12 months: 0.21M.</small>
          </div>
        </Reveal>
      </div>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="Creators carrying the festival" aside="Posting about it on their own" />
        </Reveal>
        <div className={`${s.creators} ${s.creators3}`}>
          {SOV.creators.map((c, i) => (
            <Reveal key={c.handle} delay={(i % 3) * 0.05} style={{ display: "flex" }}>
              <a className={s.creator} href={c.href} target="_blank" rel="noreferrer" onClick={open(group, i)} style={{ width: "100%" }}>
                <div className={s.creatorImg}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={P(c.img)} alt="" loading="lazy" />
                </div>
                <div>
                  <b>@{c.handle}</b>
                  <span className={s.creatorReach}>{c.reach}</span>
                  <p>{c.note}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
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
                  <span>For the return</span>
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
            <small>videos reviewed, {BRAIN.ingested} indexed in TwelveLabs Jockey</small>
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

function Funnel() {
  return (
    <section className={s.section} id="funnel">
      <Head n="08" label="Website, tracking and paid" title="Funnel">
        {FUNNEL.intro}
      </Head>

      <div className={s.doorsWrap}>
        <Reveal>
          <div className={s.shots}>
            <figure className={s.shot}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/shots/home-mobile.webp`} alt="loversandfriendsfest.com on mobile, showing the festival canceled notice" loading="lazy" />
              <figcaption>Homepage, today</figcaption>
            </figure>
            <figure className={s.shot}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/shots/signup-mobile.webp`} alt="The /signup page with email and SMS capture" loading="lazy" />
              <figcaption>/signup, not linked</figcaption>
            </figure>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Every door, today
          </h3>
          <div className={s.story}>
            {FUNNEL.doors.map((r) => (
              <div className={s.storyRow} key={r.where}>
                <b>{r.where}</b>
                <p>{r.says}</p>
                <span className={s.tag} data-s={r.state}>
                  {r.state === "current" ? "Works" : r.state === "stale" ? "2024" : "Broken"}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="Lighthouse, homepage" aside="Mobile lab run, September 30, 2026" />
        <div className={s.rings}>
          {FUNNEL.scores.map((sc) => (
            <div className={s.ring} key={sc.k}>
              <Ring v={sc.v} />
              <h4>{sc.k}</h4>
              <p>{sc.note}</p>
            </div>
          ))}
        </div>
        <div className={s.vitals}>
          {FUNNEL.vitals.map((v) => (
            <div className={s.cell} key={v.l}>
              <span className={s.statV}>{v.v}</span>
              <span className={s.statL}>{v.l}</span>
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
          <p className={s.note} style={{ marginTop: 14 }}>
            {FUNNEL.pixelNote}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            Meta ads, festival pages
          </h3>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Page</th>
                  <th>Ads in library</th>
                  <th>Now</th>
                </tr>
              </thead>
              <tbody>
                {FUNNEL.ads.map((a) => (
                  <tr key={a.k} data-self={"self" in a && a.self ? "" : undefined}>
                    <td style={{ color: "self" in a && a.self ? "var(--red)" : undefined }}>{a.k}</td>
                    <td data-l="Ads in library">
                      <span className={s.tableNum}>{a.total}</span>
                    </td>
                    <td className={s.muted} data-l="State">
                      {a.active}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={s.note} style={{ marginTop: 12 }}>
            {FUNNEL.adsNote}
          </p>
        </Reveal>
      </div>

      <Reveal className={s.sub}>
        <SubHead title="The peer playbook, live today" aside="Rolling Loud, Meta Ad Library" />
        <div className={s.quotes}>
          {FUNNEL.rl.map((q) => (
            <div className={s.quote} key={q} data-tone="pos">
              <blockquote>{q}</blockquote>
              <footer className={s.mono}>
                <span>Active Meta ad, September 2026</span>
              </footer>
            </div>
          ))}
          <div className={s.quote} data-tone="neg">
            <blockquote>{FUNNEL.rlNote}</blockquote>
            <footer className={s.mono}>
              <span>Lovers &amp; Friends: 0 ads</span>
            </footer>
          </div>
        </div>
      </Reveal>
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
      if (i >= PLAN.phases.length - 1) clearInterval(t);
    }, 260);
    return () => clearInterval(t);
  }, [inView]);
  return (
    <section className={s.section} id="plan">
      <Head n="09" label="Relaunch plan" title="The Plan">
        {PLAN.intro}
      </Head>
      <Reveal>
        <div className={s.pillars}>
          {PLAN.pillars.map((p, i) => (
            <div key={p.k}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <h4>{p.k}</h4>
              <p>{p.b}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className={s.sub}>
        <Reveal>
          <SubHead title="Phases" aside="Timed from the announcement" />
        </Reveal>
        <div className={s.phases} ref={phasesRef}>
          {PLAN.phases.map((p, i) => (
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
        <SubHead title="Audiences" />
        <div className={s.aud}>
          {PLAN.audiences.map((a) => (
            <div key={a.k}>
              <h4>{a.k}</h4>
              <p>{a.b}</p>
            </div>
          ))}
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
  return (
    <div className={s.phone}>
      <div className={s.screen} data-r="916">
        <AutoVideo src={vsrc} poster={poster} />
        {"clean" in ad && ad.clean ? (
          <div className={s.ov} style={{ background: "none", justifyContent: "flex-end" }}>
            <div className={s.ovCta}>{ad.cta}</div>
          </div>
        ) : (
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
        )}
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
                {st.ai ? <span className={s.aiBadge}>AI example</span> : <span className={s.aiBadge} style={{ borderStyle: "solid", borderColor: "var(--line2)" }}>Real footage</span>}
                <Image src={`${IMG}/${st.img}`} alt={st.line} fill sizes="(max-width: 700px) 100vw, 33vw" style={{ objectFit: "cover" }} />
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
 * 11 Why + 12 Next
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
          <Image src={PH("lovers-stage")} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
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
            Figures pulled September 30 to October 1, 2026. Engagement rates use likes plus comments over current followers, so dormant accounts are measured on older posts. Instagram shares, saves and reach are not public. Sentiment figures are analytical estimates. Example creative in section 10 was generated with AI for this audit and is directional only. Event photography from the Lovers &amp; Friends official channels.
          </p>
        </details>
      </section>
      <footer className={`${s.footer} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Prepared for Lovers &amp; Friends by Crowd Control Digital</span>
        <span>September 2026</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function LoversAndFriendsClient() {
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
            { src: "crowd-rail", alt: "Fans singing at the front rail, Lovers & Friends 2022" },
            { src: "usher-busta", alt: "Usher and Busta Rhymes backstage, 2023" },
            { src: "fit-2002", alt: "A fan in a 2002 top on the purple carpet, 2023" },
            { src: "lauryn", alt: "Ms. Lauryn Hill on stage, 2022" },
          ]}
        />
        <Record />
        <Break src="crowd-wide" alt="The Lovers & Friends crowd at the Las Vegas Festival Grounds, 2022" line="Demand was never the problem." sub="Las Vegas Festival Grounds, May 2022" pos="50% 60%" />
        <Market />
        <div className={s.rule} />
        <Social />
        <PhotoBand
          imgs={[
            { src: "doors-open", alt: "Fans at the entrance arch, 2023" },
            { src: "missy-fire", alt: "Missy Elliott closes Lovers & Friends 2023" },
            { src: "squad", alt: "A group of friends at the festival, 2022" },
            { src: "eve", alt: "Eve on stage, 2023" },
          ]}
        />
        <Sentiment />
        <div className={s.rule} />
        <Demand />
        <div className={s.rule} />
        <Video />
        <Break src="nelly-crowd" alt="Nelly performing to the crowd, 2023" line="The audience is still out there. It needs somewhere to go." pos="50% 40%" />
        <Funnel />
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
