"use client";

/**
 * ROD WAVE x CROWD CONTROL DIGITAL: artist audit for the incoming management team.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). AI example creative is labeled as such.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./rod-wave.module.css";
import { TEARDOWNS, type Teardown } from "@/lib/rod-wave/teardowns";
import {
  IMG,
  PASSWORD,
  NAV,
  HERO,
  MARQUEE,
  THESIS,
  SUMMARY,
  STREAM_STATS,
  LISTENERS,
  RELEASE_MARKS,
  ALBUMS,
  LIFT,
  CATALOG_SPLIT,
  TOP_TRACKS,
  NOW_PLAYING,
  PEERS_CHANGE,
  CITIES,
  STREAM_FINDINGS,
  TOUR_STATS,
  TOURS,
  TOUR_FINDINGS,
  ORG,
  RISKS,
  MONEY,
  MERCH,
  MERCH_MATH,
  CHANNELS,
  TT_PEERS,
  CADENCE_MONTHS,
  CADENCE_TT,
  CADENCE_YT,
  FORMATS,
  SOCIAL_FINDINGS,
  PATTERNS,
  FAN_STATS,
  THEMES,
  QUOTES,
  QUESTIONS,
  DOORS,
  TRACKING,
  ADS,
  TRENDS,
  STATES,
  WIKI,
  SEARCH_NOTE,
  LATERAL_NOW,
  COMPS,
  BRAND_MAP,
  LATERAL_PLAN,
  REPRESENTATION,
  PILLARS,
  PHASES,
  UPSIDE,
  CREATIVE,
  WHY,
  NEXT,
  SOURCES,
} from "@/lib/rod-wave/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}K` : `${n}`);
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Rod Wave audit: walk-through")}&body=${encodeURIComponent("Hey Geoff,\n\nWe've read the Rod Wave audit and want to talk it through.\n\nTimes that work:\n")}`;

const noopSub = () => () => {};
function useReduced() {
  const pref = useReducedMotion();
  const mounted = useSyncExternalStore(noopSub, () => true, () => false);
  return mounted ? !!pref : false;
}

function Reveal({ children, delay = 0, y = 24, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.85, ease: EASE, delay }}>
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
    const c = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: setN });
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
  const seen = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });
  const key = axis === "x" ? "scaleX" : "scaleY";
  const show = reduce || seen;
  return (
    <motion.span ref={ref} className={className} style={{ display: "block", ...style }} initial={{ [key]: reduce ? to : 0 }} animate={{ [key]: show ? to : 0 }} transition={{ duration: reduce ? 0 : 1.1, ease: EASE, delay: reduce ? 0 : delay }}>
      {children}
    </motion.span>
  );
}

function Head({ n, label, title, children }: { n: string; label: string; title: string; children?: ReactNode }) {
  return (
    <div className={s.sectionHead}>
      <Reveal>
        <div className={`${s.label} ${s.mono}`}>
          <b>{n}</b>
          {label}
        </div>
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

function Stats({ items }: { items: { v: string; l: string }[] }) {
  return (
    <div className={s.stats}>
      {items.map((x) => (
        <div key={x.l}>
          <span className={s.statV}>{x.v}</span>
          <span className={s.statL}>{x.l}</span>
        </div>
      ))}
    </div>
  );
}

function Cards({ items, cols = 3 }: { items: { t: string; b: string; k?: string }[]; cols?: 2 | 3 }) {
  return (
    <div className={cols === 2 ? s.grid2c : s.grid3}>
      {items.map((x, i) => (
        <Reveal key={x.t} delay={(i % 3) * 0.05} className={s.card}>
          {x.k && <span className={`${s.mono} ${s.kicker}`}>{x.k}</span>}
          <h4>{x.t}</h4>
          <p>{x.b}</p>
        </Reveal>
      ))}
    </div>
  );
}

function HBars({ rows, max, fmtV }: { rows: { k: string; v: number; me?: boolean }[]; max: number; fmtV: (v: number) => string }) {
  return (
    <div className={s.hb}>
      {rows.map((r, i) => (
        <div key={r.k} className={`${s.hbRow} ${r.me ? s.hbRowMe : ""}`}>
          <span className={s.hbK}>{r.k}</span>
          <span className={s.hbTrack}>
            <Grow to={Math.max(0.004, r.v / max)} className={`${s.hbFill} ${r.me ? s.hbFillMe : ""}`} style={{ width: "100%" }} delay={i * 0.04} />
          </span>
          <span className={s.hbV}>{fmtV(r.v)}</span>
        </div>
      ))}
    </div>
  );
}

function Diverge({ rows, max }: { rows: { n: string; v: number; me?: boolean }[]; max: number }) {
  return (
    <div className={s.dv}>
      {rows.map((r, i) => (
        <div key={r.n} className={`${s.dvRow} ${r.me ? s.dvMe : ""}`}>
          <span className={s.hbK}>{r.n}</span>
          <span className={s.dvTrack}>
            {r.v >= 0 ? (
              <Grow to={1} className={s.dvPos} style={{ width: `${(Math.min(r.v, max) / max) * 50}%` }} delay={i * 0.04} />
            ) : (
              <Grow to={1} className={s.dvNeg} style={{ width: `${(Math.min(-r.v, max) / max) * 50}%` }} delay={i * 0.04} />
            )}
          </span>
          <span className={s.hbV}>
            {r.v > 0 ? "+" : ""}
            {r.v.toFixed(1)}%
          </span>
        </div>
      ))}
    </div>
  );
}

function Columns({ rows, max, red }: { rows: { k: string; v: number; lbl: string; sub?: string }[]; max: number; red?: (i: number) => boolean }) {
  const tpl = { gridTemplateColumns: `repeat(${rows.length}, minmax(0, 1fr))` };
  return (
    <div>
      <div className={s.cols} style={tpl}>
        {rows.map((r, i) => (
          <div key={r.k} className={s.col}>
            <Grow to={1} axis="y" className={`${s.colBar} ${red?.(i) ? s.colBarRed : ""}`} style={{ height: `${(r.v / max) * 100}%` }} delay={i * 0.05}>
              <span className={s.colVal}>{r.lbl}</span>
            </Grow>
          </div>
        ))}
      </div>
      <div className={s.colAxis} style={tpl}>
        {rows.map((r) => (
          <span key={r.k}>
            {r.k}
            {r.sub && (
              <>
                <br />
                <span className={s.dim}>{r.sub}</span>
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Line chart: Spotify monthly listeners
 * ------------------------------------------------------------------------- */

function ListenersChart() {
  const W = 1200;
  const H = 360;
  const pad = { l: 40, r: 16, t: 34, b: 30 };
  const max = 13;
  const n = LISTENERS.length;
  const x = (i: number) => pad.l + (i / (n - 1)) * (W - pad.l - pad.r);
  const y = (v: number) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const d = LISTENERS.map(([, v], i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${d} L${x(n - 1)},${y(0)} L${x(0)},${y(0)} Z`;
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const idx = (m: string) => LISTENERS.findIndex(([dd]) => dd === m);
  return (
    <svg ref={ref} className={s.lineSvg} viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Spotify monthly listeners, 2019 to 2026">
      {[0, 3, 6, 9, 12].map((v) => (
        <g key={v}>
          <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke="#262626" />
          <text x={0} y={y(v) + 3}>{v}M</text>
        </g>
      ))}
      {["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"].map((yr) => {
        const i = LISTENERS.findIndex(([dd]) => dd.startsWith(yr));
        return (
          <text key={yr} x={x(i)} y={H - 8}>
            {yr}
          </text>
        );
      })}
      <path d={area} fill="rgba(253,55,55,0.10)" />
      <motion.path d={d} fill="none" stroke="#fd3737" strokeWidth={2.4} initial={{ pathLength: reduce ? 1 : 0 }} animate={{ pathLength: inView || reduce ? 1 : 0 }} transition={{ duration: reduce ? 0 : 2.2, ease: EASE }} />
      {RELEASE_MARKS.map((m, k) => {
        const i = idx(m.d);
        if (i < 0) return null;
        const v = LISTENERS[i][1];
        return (
          <g key={m.t}>
            <line x1={x(i)} x2={x(i)} y1={y(v) - 6} y2={pad.t - 4 + (k % 2) * 12} stroke="#5a5a60" strokeDasharray="2 3" />
            <circle cx={x(i)} cy={y(v)} r={4} fill="#fafafa" />
            <text className={s.lbl} x={x(i)} y={pad.t - 8 + (k % 2) * 12} textAnchor="middle">
              {m.t}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ----------------------------------------------------------------------------
 * Gate and chrome
 * ------------------------------------------------------------------------- */

const GATE_KEY = "rodwave-unlocked";

function Gate({ open, onOpen }: { open: boolean; onOpen: () => void }) {
  const [v, setV] = useState("");
  const [err, setErr] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (v.trim().toUpperCase() === PASSWORD) {
      try {
        sessionStorage.setItem(GATE_KEY, "1");
      } catch {}
      onOpen();
    } else {
      setErr(true);
      setV("");
      setTimeout(() => setErr(false), 1800);
    }
  };
  return (
    <div className={s.gate} data-open={open ? "" : undefined} aria-hidden={open}>
      <div className={`${s.gateRow} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Private</span>
      </div>
      <div className={s.gateMid}>
        <div className={s.gateTitle}>ROD WAVE</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Artist audit. Enter the password to continue.
        </p>
        <form className={s.gateForm} onSubmit={submit} autoComplete="off">
          <input type="password" placeholder="Password" aria-label="Password" value={v} onChange={(e) => setV(e.target.value)} />
          <button type="submit">Enter</button>
        </form>
        <div className={`${s.gateErr} ${s.mono}`} data-show={err ? "" : undefined}>
          Incorrect password
        </div>
      </div>
      <div className={`${s.gateRow} ${s.mono}`}>
        <span>October 2026</span>
        <span>Crowd Control Digital</span>
      </div>
    </div>
  );
}

function Progress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div className={s.progress} style={{ scaleX: x }} />;
}

function TopBar() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    const io = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", on);
      io.disconnect();
    };
  }, []);
  return (
    <header className={`${s.topbar} ${solid ? s.topbarSolid : ""}`}>
      <a className={s.brand} href="#top" aria-label="Back to top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Rod Wave audit</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={MAIL}>
        Talk it through
      </a>
    </header>
  );
}

/* ----------------------------------------------------------------------------
 * Hero + marquee
 * ------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className={`${s.hero} ${s.heroPlain}`} id="top">
      <div className={s.heroGrid} aria-hidden="true" />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
          <h1 className={s.heroTitle}>
            {HERO.title.map((w) => (
              <span key={w} className={s.word}>
                {w}
              </span>
            ))}
          </h1>
        </Reveal>
        <div className={s.heroRow}>
          <Reveal delay={0.1}>
            <p className={s.heroLine}>{HERO.line}</p>
            <p className={s.heroSub}>{HERO.sub}</p>
            <p className={s.heroBody}>{HERO.body}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className={s.heroStats}>
              {HERO.stats.map((x) => (
                <div key={x.l}>
                  <span className={s.heroStat}>
                    <Counter value={x.v} decimals={x.d} prefix={"pre" in x ? x.pre : ""} suffix={"suf" in x ? x.suf : ""} />
                  </span>
                  <span className={s.heroStatLabel}>{x.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>Crowd Control Digital</span>
          <span>Data as of Oct 28, 2026</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const reduce = useReduced();
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className={s.marquee} aria-hidden="true">
      <motion.div className={s.marqueeTrack} animate={reduce ? undefined : { x: ["0%", "-50%"] }} transition={{ duration: 46, ease: "linear", repeat: Infinity }}>
        {items.map((m, i) => (
          <span key={i} className={s.marqueeItem}>
            {m}
            <span className={s.marqueeDot} />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Sections
 * ------------------------------------------------------------------------- */

function Summary() {
  return (
    <section className={s.section} id="summary">
      <Head n="01" label="Summary" title="Summary">
        Seven data lanes, read together: Chartmetric and kworb for streaming, Pollstar and trade press for touring, both stores, every owned channel, 6,600 fan comments, video AI on 15 posts, the site, the pixels and the ads.
      </Head>
      <div className={s.thesis}>
        <Reveal>
          <p className={s.thesisBig}>
            Rod Wave does not need saving. <em>He needs a front office.</em>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={s.intro}>{THESIS.body}</p>
        </Reveal>
      </div>
      <div className={s.sumGrid}>
        {SUMMARY.map((x, i) => (
          <Reveal key={x.id} delay={(i % 3) * 0.05} style={{ display: "contents" }}>
            <a className={s.sumCard} href={`#${x.id}`}>
              <span className={s.sumN}>{x.n}</span>
              <h3>{x.t}</h3>
              <p>{x.b}</p>
              <span className={`${s.sumGo} ${s.mono}`}>Read the section</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Streaming() {
  return (
    <section className={s.section} id="streaming">
      <Head n="02" label="Streaming and catalog" title="Streaming">
        He peaked in 2020 and has held a 6.8M to 7.5M yearly average ever since. The catalog carries the business, each album finds fewer new listeners than the last, and the lane he came up in is shrinking faster than he is.
      </Head>
      <Reveal>
        <Stats items={STREAM_STATS} />
      </Reveal>

      <div className={s.sub}>
        <SubHead title="Spotify monthly listeners" aside="Millions, monthly, Chartmetric" />
        <Reveal className={s.panel}>
          <ListenersChart />
        </Reveal>
      </div>

      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="First-week units" aside="Thousands, Billboard 200" />
          <Reveal className={s.panel}>
            <Columns rows={ALBUMS.map((a) => ({ k: a.t, v: a.fw, lbl: `${a.fw}K`, sub: `No. ${a.peak}` }))} max={150} red={(i) => i === ALBUMS.length - 1} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Don&apos;t Look Down: 99K, of which 90K streaming and 9K pure sales; 95.07M first-week streams against about 173M for Last Lap. His fourth No. 1.
          </p>
        </div>
        <div>
          <SubHead title="New listeners per album" aside="Spotify listener gain after release" />
          <Reveal className={s.panel}>
            <Columns rows={LIFT.map((a) => ({ k: a.t, v: a.v, lbl: `+${a.v}M`, sub: a.p }))} max={3} red={(i) => i === LIFT.length - 1} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            14-day pre-release median against the 60-day post-release max. New music still brings existing fans back; it no longer finds many new ones. The gap before Don&apos;t Look Down was 686 days, the longest of his career.
          </p>
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Daily streams by era" aside="3.82M Spotify streams a day" />
        <Reveal>
          <div className={s.split}>
            <div className={s.splitA} style={{ width: `${CATALOG_SPLIT.early}%` }}>2019 to 2021: {CATALOG_SPLIT.early}%</div>
            <div className={s.splitB} style={{ width: `${CATALOG_SPLIT.catalog - CATALOG_SPLIT.early}%` }}>2022 to Apr 2025: {(CATALOG_SPLIT.catalog - CATALOG_SPLIT.early).toFixed(1)}%</div>
            <div className={s.splitC} style={{ width: `${CATALOG_SPLIT.recent}%` }}>Last 18 months: {CATALOG_SPLIT.recent}%</div>
          </div>
        </Reveal>
      </div>

      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Top catalog songs" aside="Lifetime Spotify streams, millions" />
          <div className={s.tableWrap}>
            <table className={s.table} style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Year</th>
                  <th>Total</th>
                  <th>Per day</th>
                  <th>TikTok videos</th>
                </tr>
              </thead>
              <tbody>
                {TOP_TRACKS.map((t) => (
                  <tr key={t.t}>
                    <td>
                      <strong>{t.t}</strong>
                    </td>
                    <td className={s.num}>{t.y}</td>
                    <td className={s.num}>{t.total.toFixed(1)}M</td>
                    <td className={s.num}>{t.daily.toFixed(1)}K</td>
                    <td className={s.num}>{compact(t.tt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <SubHead title="Top songs today" aside="Spotify streams per day, thousands" />
          <Reveal className={s.panel}>
            <HBars rows={NOW_PLAYING.map((t) => ({ k: `${t.t} (${t.y})`, v: t.daily, me: t.isNew }))} max={140} fmtV={(v) => `${v.toFixed(1)}K`} />
            <div className={`${s.legend} ${s.mono}`} style={{ marginTop: 18, marginBottom: 0 }}>
              <span>
                <i style={{ background: "#fd3737" }} />
                Don&apos;t Look Down era
              </span>
              <span>
                <i style={{ background: "#fafafa", opacity: 0.8 }} />
                Catalog
              </span>
            </div>
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Dope Girl is now his biggest daily song and has gone from 6.5K to 295K TikTok videos in two months. &quot;25&quot; is the only durable catalog song added since 2023.
          </p>
        </div>
      </div>

      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Peer listener change" aside="Avg listeners, 2026 YTD vs 2024" />
          <Reveal className={s.panel}>
            <Diverge rows={PEERS_CHANGE} max={60} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>Fredo Bang (+142%) runs off the scale. Chartmetric, 13 artists in his lane.</p>
        </div>
        <div>
          <SubHead title="Top cities" aside="Spotify, exact, last 28 days" />
          <Reveal className={s.panel}>
            <HBars rows={CITIES.map((c) => ({ k: c.c, v: c.v, me: c.c === "Lagos" }))} max={260000} fmtV={(v) => compact(v)} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Audience: Instagram models 66% African American and 56/44 male to female. Core ages are 18 to 24 on TikTok (61%) and 25 to 34 on Instagram and YouTube.
          </p>
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Findings" />
        <Cards items={STREAM_FINDINGS} />
      </div>
    </section>
  );
}

function Touring() {
  return (
    <section className={s.section} id="touring">
      <Head n="03" label="Touring" title="Touring">
        Touring is most of the business. It went from promoter-led to a public collapse to a self-promoted rebuild in eighteen months, and the 2026 run is the strongest demand signal in this audit.
      </Head>
      <Reveal>
        <Stats items={TOUR_STATS} />
      </Reveal>
      <div className={s.sub}>
        <SubHead title="Headline tours" aside="Grosses only where reported" />
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Tour</th>
                <th>When</th>
                <th>Shows</th>
                <th>Rooms</th>
                <th>Promoter</th>
                <th>Gross</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {TOURS.map((t) => (
                <tr key={t.t}>
                  <td>
                    <strong>{t.t}</strong>
                  </td>
                  <td className={s.num}>{t.y}</td>
                  <td className={s.num}>{t.shows}</td>
                  <td>{t.tier}</td>
                  <td>{t.promo}</td>
                  <td>{t.gross}</td>
                  <td>{t.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={s.sub}>
        <SubHead title="Findings" />
        <Cards items={TOUR_FINDINGS} />
      </div>
    </section>
  );
}

function Business() {
  return (
    <section className={s.section} id="business">
      <Head n="04" label="Business, team and risk" title="Business and team">
        Mainstay is a real company now: touring, film, distribution, publishing and a sports agency. Around it, the seats a manager would normally fill are either held by family or empty.
      </Head>
      <SubHead title="Team map" aside="Red marks an open seat" />
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Function</th>
              <th>Who</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {ORG.map((o) => (
              <tr key={o.k}>
                <td>
                  <span className={`${s.dot} ${o.state === "gap" ? s.dotGap : s.dotOk}`} />
                  <strong>{o.k}</strong>
                </td>
                <td>{o.who}</td>
                <td>{o.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Reveal className={s.callout} style={{ marginTop: 24 }}>
        <strong>The client has chosen ownership.</strong>{" "}Rod on intermediaries: &quot;the fewer people with their hands in the pot, the better the show it could be.&quot; Uncle Dee managed him without a standard commission. A team that arrives as an operating partner to Mainstay, adding the functions that are missing, fits that. A team that arrives to take control does not.
      </Reveal>

      <div className={s.sub}>
        <SubHead title="Revenue mix" aside="Shares are estimates" />
        <div className={s.grid4} style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          {MONEY.map((m) => (
            <div key={m.k} className={s.card}>
              <span className={`${s.mono} ${s.dim}`}>{m.k}</span>
              <h4 className={m.v === "$0" ? s.red : undefined}>{m.v}</h4>
              <p>{m.b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Risk register" aside="Status as publicly reported to Oct 28, 2026" />
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Risk</th>
                <th>Level</th>
                <th>What we know</th>
              </tr>
            </thead>
            <tbody>
              {RISKS.map((r) => (
                <tr key={r.r}>
                  <td>
                    <strong>{r.r}</strong>
                  </td>
                  <td>
                    <span className={`${s.sev} ${r.s === "High" ? s.sevHigh : ""}`}>{r.s}</span>
                  </td>
                  <td>{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Merch() {
  return (
    <section className={s.section} id="merch">
      <Head n="05" label="Merch and direct to fan" title="Merch">
        Rod says merch went from $200K to $14M when he took it in house. Online, it is two thin stores run by two different parties, and most of what fans want is sold out in the middle of an arena tour.
      </Head>
      <div className={s.grid2c}>
        {MERCH.map((m) => (
          <Reveal key={m.k} className={s.card}>
            <span className={`${s.mono} ${s.kicker}`}>
              {m.who}, {m.items} items
            </span>
            <h4>{m.k}</h4>
            <p>{m.b}</p>
          </Reveal>
        ))}
      </div>
      <div className={s.sub}>
        <Reveal className={s.callout}>
          <strong>The size of the gap.</strong> This tour plays to {MERCH_MATH.attendees} people. At a typical arena rap per-head of {MERCH_MATH.perHead}, venue merch alone is worth {MERCH_MATH.range}. {MERCH_MATH.note}
        </Reveal>
      </div>
    </section>
  );
}

function CadRow({ lbl, data }: { lbl: string; data: number[] }) {
  return (
    <>
      <span className={s.cadLbl}>{lbl}</span>
      {data.map((v, i) => (
        <div key={i} className={`${s.cadCell} ${v === 0 ? s.cadZero : ""}`} title={`${CADENCE_MONTHS[i]}: ${v}`}>
          <Grow to={1} axis="y" className={s.cadFill} style={{ height: `${(Math.min(v, 13) / 13) * 100}%`, width: "100%" }} delay={i * 0.02} />
        </div>
      ))}
    </>
  );
}

function Social() {
  return (
    <section className={s.section} id="social">
      <Head n="06" label="Social" title="Social">
        On TikTok he out-performs every peer in his lane. Everywhere else the channels are dormant, archived or gone, and the posting rhythm follows the release calendar rather than the audience.
      </Head>
      <div className={s.tableWrap}>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Handle</th>
              <th>Size</th>
              <th>12 months</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {CHANNELS.map((c) => (
              <tr key={c.p}>
                <td>
                  <strong>{c.p}</strong>
                </td>
                <td className={s.num}>{c.h}</td>
                <td className={s.num}>{c.size}</td>
                <td className={s.num}>{c.trend}</td>
                <td>{c.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="TikTok median views" aside="Millions, last 180 days" />
          <Reveal className={s.panel}>
            <HBars rows={TT_PEERS.map((p) => ({ k: p.n, v: p.v, me: p.me }))} max={2.2} fmtV={(v) => (v >= 1 ? `${v.toFixed(2)}M` : `${Math.round(v * 1000)}K`)} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Engagement: 18.3% of views, the highest of the nine. TikTok followers +735K in 12 months.
          </p>
        </div>
        <div>
          <SubHead title="TikTok by format" aside="Median views, millions, 12 months" />
          <Reveal className={s.panel}>
            <HBars rows={FORMATS.map((f) => ({ k: `${f.k} (${f.n})`, v: f.v }))} max={2.4} fmtV={(v) => `${v.toFixed(2)}M`} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Six of his bottom ten posts are captionless slideshows on sounds that were not moving. Commerce-only posts (vinyl 450K, Spotify 525K, merch 800K) trail everything.
          </p>
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Posts per month" aside="Nov 2024 to Oct 2026; dashed means none" />
        <Reveal className={s.panel}>
          <div className={s.cadGrid}>
            <CadRow lbl="TikTok" data={CADENCE_TT} />
            <CadRow lbl="YouTube" data={CADENCE_YT} />
            <span />
            {CADENCE_MONTHS.map((m, i) => (
              <span key={i} className={s.cadAxis}>
                {m}
              </span>
            ))}
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            Bars cap at 13 posts. YouTube in August 2026 was 20 uploads on one day.
          </p>
        </Reveal>
      </div>

      <div className={s.sub}>
        <SubHead title="Findings" />
        <Cards items={SOCIAL_FINDINGS} />
      </div>
    </section>
  );
}

function asText(v: string | string[] | undefined) {
  if (!v) return "";
  return Array.isArray(v) ? v.join(" ") : v;
}

function TeardownModal({ td, onClose }: { td: Teardown; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", k);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const ok = (v: string) => v && !/^not verified/i.test(v);
  const blocks: [string, string][] = [
    ["Hook", td.hook],
    ["Audio", td.audio],
    ["On-screen text", asText(td.onscreen_text)],
    ["Who and where", [asText(td.people).replace(/\.+$/, ""), td.setting].filter(Boolean).join(". ")],
    ["Pacing", td.pacing],
    ["Call to action", td.cta],
    ["What worked", asText(td.what_worked)],
    ["What to change", asText(td.what_to_change)],
  ];
  return (
    <div className={s.modal} role="dialog" aria-modal="true" aria-label={td.title} onClick={onClose}>
      <button className={s.modalClose} onClick={onClose}>
        Close
      </button>
      <div className={s.modalBody} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalImg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/thumbs/${td.thumb}`} alt={td.title} />
          <a className={s.btnLink} href={td.url} target="_blank" rel="noreferrer">
            Watch on {td.platform === "youtube" ? "YouTube" : td.platform === "instagram" ? "Instagram" : "TikTok"}
          </a>
        </div>
        <div>
          <span className={`${s.mono} ${s.kicker}`}>{td.role}</span>
          <h3 className={s.h3} style={{ marginTop: 8 }}>
            {td.title}
          </h3>
          <div className={s.mStats}>
            <div>
              <strong>{compact(td.views)}</strong>
              <span>Views</span>
            </div>
            <div>
              <strong>{compact(td.likes)}</strong>
              <span>Likes</span>
            </div>
            <div>
              <strong>{compact(td.comments)}</strong>
              <span>Comments</span>
            </div>
            <div>
              <strong>{td.multiple_of_median.toFixed(1)}x</strong>
              <span>Vs median</span>
            </div>
          </div>
          {ok(td.verdict) && (
            <div className={s.callout} style={{ fontSize: 15 }}>
              {td.verdict}
            </div>
          )}
          {blocks
            .filter(([, v]) => ok(v))
            .map(([k, v]) => (
              <div key={k} className={s.mBlock}>
                <h5>{k}</h5>
                <p>{v}</p>
              </div>
            ))}
          {td.beats?.length > 0 && !td.beats.every((b) => !ok(b.desc)) && (
            <div className={s.mBlock}>
              <h5>Beats</h5>
              <ul className={s.mBeats}>
                {td.beats
                  .filter((b) => ok(b.desc))
                  .map((b, i) => (
                    <li key={i}>
                      <span>{b.t}</span>
                      {b.desc}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Teardowns() {
  const [open, setOpen] = useState<Teardown | null>(null);
  return (
    <section className={s.section} id="teardowns">
      <Head n="07" label="Content teardowns" title="Teardowns">
        Fifteen posts run through video AI and checked frame by frame: his five best TikToks, his three worst, his biggest Instagram and YouTube assets, and the best recent video from five peers. Tap any card for the full teardown.
      </Head>
      <div className={s.tdCards}>
        {TEARDOWNS.map((t) => (
          <button key={t.id} className={s.tdCard} onClick={() => setOpen(t)}>
            <span className={s.tdThumb}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/thumbs/${t.thumb}`} alt="" loading="lazy" />
              <span className={`${s.tdMult} ${t.multiple_of_median >= 2 ? s.tdMultHi : ""}`}>{t.multiple_of_median.toFixed(1)}x median</span>
            </span>
            <span className={s.tdMeta}>
              <span>{t.role.replace(/\s*\(.*\)$/, "")}</span>
              <b>{t.title}</b>
              <span>{compact(t.views)} views</span>
            </span>
          </button>
        ))}
      </div>
      <div className={s.sub}>
        <SubHead title="Patterns" />
        <Cards items={PATTERNS} />
      </div>
      {open && <TeardownModal td={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

function Fans() {
  return (
    <section className={s.section} id="fans">
      <Head n="08" label="Fans and sentiment" title="Fans">
        The comment sections read like a support group that also wants tour dates. Love dominates; real criticism is small. The doubt that exists is about whether a show will happen and whether his city is on the list.
      </Head>
      <Reveal>
        <Stats items={FAN_STATS} />
      </Reveal>
      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Share of comments" aside="Percent of 6,600" />
          <Reveal className={s.panel}>
            <HBars rows={THEMES.map((t) => ({ k: t.k, v: t.share }))} max={20} fmtV={(v) => `${v.toFixed(1)}%`} />
          </Reveal>
        </div>
        <div>
          <SubHead title="Likes by theme" aside="What the crowd agrees with" />
          <Reveal className={s.panel}>
            <HBars rows={THEMES.map((t) => ({ k: t.k, v: t.likes, me: t.k.startsWith("His personality") || t.k.startsWith("Affectionate") }))} max={205000} fmtV={(v) => compact(v)} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            Comments about his personality are 5% of volume and the most-liked theme of all. The body jokes are affectionate (&quot;He&apos;s not fat he&apos;s full of lyrics&quot;, 24K likes), and in his hands they are an asset.
          </p>
        </div>
      </div>
      <div className={s.sub}>
        <SubHead title="Fan quotes" aside="Usernames removed" />
        <div className={s.quotes}>
          {QUOTES.map((q) => (
            <Reveal key={q.q} className={s.quote}>
              <p>{q.q}</p>
              <span className={`${s.mono} ${s.dim}`}>{q.m}</span>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Top fan questions" aside="Question comments, counted" />
          <Reveal className={s.panel}>
            <HBars rows={QUESTIONS.map((q) => ({ k: q.k, v: q.v }))} max={80} fmtV={(v) => `${v}`} />
          </Reveal>
        </div>
        <Reveal className={s.callout} style={{ alignSelf: "end" }}>
          <strong>Trust is the issue, not taste.</strong> Legal trouble is 0.4% of comments and lateness or cancellations 0.7%, but they cluster on tour announcements, where the money is. Every on-time show, every city named on show day and every old song played back to the city that asked for it pays that down.
        </Reveal>
      </div>
    </section>
  );
}

function Funnel() {
  const max = 100;
  return (
    <section className={s.section} id="funnel">
      <Head n="09" label="Funnel, paid and demand" title="Funnel">
        The intent is good: a voice-note wall, a setlist vote, an SMS popup, a Discord. None of it is joined up, none of it records where a fan lives, and the tracking underneath would mislead any paid campaign that relied on it.
      </Head>
      <SubHead title="Sign-up doors" aside="Crawled Oct 28, 2026" />
      <div className={s.doors}>
        {DOORS.map((d) => (
          <div key={d.k} className={s.door}>
            <b>
              <span className={`${s.dot} ${d.state === "bad" ? s.dotGap : d.state === "warn" ? s.dotWarn : s.dotOk}`} />
              {d.k}
            </b>
            <p>{d.b}</p>
          </div>
        ))}
      </div>
      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Tracking" aside="official-rodwave.com" />
          <ul className={s.list}>
            {TRACKING.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <SubHead title="Paid" aside="Meta Ad Library" />
          <Reveal className={s.callout}>
            <strong>
              {ADS.count} active ads, {ADS.window}, {ADS.markets} markets.
            </strong>{" "}
            {ADS.b}
          </Reveal>
        </div>
      </div>
      <div className={s.sub}>
        <SubHead title="Search demand" aside="Google Trends, US, peak Nov 2023 = 100" />
        <Reveal className={s.panel}>
          <div className={s.cols} style={{ gridTemplateColumns: `repeat(${TRENDS.length}, minmax(0, 1fr))`, height: 200 }}>
            {TRENDS.map(([d, v], i) => (
              <div key={d} className={s.col} title={`${d}: ${v}`}>
                <Grow to={1} axis="y" className={`${s.colBar} ${v >= 80 ? s.colBarRed : ""}`} style={{ height: `${(v / max) * 100}%`, width: "80%" }} delay={i * 0.015} />
              </div>
            ))}
          </div>
          <div className={s.colAxis} style={{ gridTemplateColumns: `repeat(${TRENDS.length}, minmax(0, 1fr))` }}>
            {TRENDS.map(([d], i) => (
              <span key={d}>{i === 0 || TRENDS[i - 1][0].slice(0, 4) !== d.slice(0, 4) ? d.slice(0, 4) : ""}</span>
            ))}
          </div>
        </Reveal>
        <p className={s.note} style={{ marginTop: 12 }}>
          Search spikes with releases and tours and falls back to about a third of peak in between: the 2025 average was 33. Sampled months shown.
        </p>
      </div>
      <div className={`${s.sub} ${s.grid2}`}>
        <div>
          <SubHead title="Search by state" aside="State index" />
          <Reveal className={s.panel}>
            <HBars rows={STATES.map((x) => ({ k: x.k, v: x.v, me: x.v >= 68 }))} max={100} fmtV={(v) => `${v}`} />
          </Reveal>
        </div>
        <div>
          <SubHead title="Wikipedia views" aside="Last 12 months vs prior 12" />
          <Reveal className={s.panel}>
            <Diverge rows={WIKI} max={60} />
          </Reveal>
          <p className={s.note} style={{ marginTop: 12 }}>
            {SEARCH_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}

function Lateral() {
  return (
    <section className={s.section} id="lateral">
      <Head n="10" label="Beyond music" title="Beyond music">
        He is already a businessman, a promoter and a director. He has no endorsements, no acting credits and no representation outside music. The lane is real; the order matters, because the Georgia cases are still open.
      </Head>
      <SubHead title="Current activity" />
      <Cards items={LATERAL_NOW.map((x) => ({ k: x.v, t: x.k, b: x.b }))} />

      <div className={s.sub}>
        <SubHead title="Comparable artists" />
        <div className={s.grid3} style={{ gridTemplateColumns: "repeat(5, minmax(0, 1fr))" }}>
          {COMPS.map((c) => (
            <div key={c.n} className={s.card}>
              <h4>{c.n}</h4>
              <p>{c.b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Brand fit" aside="Audience affinity, precedent and timing" />
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Partner or category</th>
                <th>When</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              {BRAND_MAP.map((b) => (
                <tr key={b.k}>
                  <td>
                    <strong>{b.k}</strong>
                  </td>
                  <td>
                    <span className={`${s.sev} ${b.when === "Now" ? s.sevHigh : ""}`}>{b.when}</span>
                  </td>
                  <td>{b.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Lateral sequence" />
        <div className={s.phases3}>
          {LATERAL_PLAN.map((p) => (
            <div key={p.p} className={s.phase}>
              <span className={`${s.mono} ${s.phaseW}`}>{p.w}</span>
              <h4>{p.p}</h4>
              <ul className={s.list}>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={s.sub}>
        <SubHead title="Representation outside music" />
        <Cards items={REPRESENTATION.map((r) => ({ t: r.k, b: r.b }))} cols={2} />
      </div>
    </section>
  );
}

function Plan() {
  return (
    <section className={s.section} id="plan">
      <Head n="11" label="The path forward" title="The plan">
        Stabilize first, then own the fan, then widen the map and go lateral. Nothing here asks Rod to give up what he has built; all of it adds the functions around it.
      </Head>
      <div className={s.pillars}>
        {PILLARS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05} className={s.pillar}>
            <span className={s.pillarN}>{p.n}</span>
            <h4>{p.t}</h4>
            <p>{p.b}</p>
          </Reveal>
        ))}
      </div>
      <div className={s.sub}>
        <SubHead title="First twelve months" />
        <div className={s.phases4}>
          {PHASES.map((p) => (
            <div key={p.w} className={s.phase}>
              <span className={`${s.mono} ${s.phaseW}`}>{p.w}</span>
              <h4>{p.t}</h4>
              <ul className={s.list}>
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={s.sub}>
        <SubHead title="Upside" aside="Directional estimates" />
        <div className={s.upside}>
          {UPSIDE.map((u) => (
            <div key={u.k} className={s.upRow}>
              <strong>{u.k}</strong>
              <span className={s.upV}>{u.v}</span>
              <p>{u.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Creative() {
  const reduce = useReduced();
  return (
    <section className={s.section} id="creative">
      <Head n="12" label="Example creative" title="Example creative">
        Directional examples generated for this audit in the Don&apos;t Look Down world: walnut, gold script, 1970s grade. They show the formats the plan calls for. None of them uses his likeness, and none is final.
      </Head>
      <div className={s.cGrid}>
        {CREATIVE.map((c) => (
          <Reveal key={c.t} className={`${s.cItem} ${c.ratio === "16:9" ? s.cWide : s.cTall}`}>
            <div className={s.cMedia}>
              {"video" in c && c.video && !reduce ? (
                <video src={`${IMG}/creative/${c.video}`} poster={`${IMG}/creative/${c.video.replace(".mp4", "-v.jpg")}`} autoPlay muted loop playsInline preload="metadata" />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src={`${IMG}/creative/${c.src}`} alt={c.t} loading="lazy" />
              )}
              <span className={s.aiBadge}>AI example, directional</span>
            </div>
            <h4>{c.t}</h4>
            <p>{c.b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className={s.section} id="why">
      <Head n="13" label="Crowd Control" title="Why Crowd Control" />
      <Cards items={WHY.map((w) => ({ t: w.k, b: w.b }))} cols={2} />
    </section>
  );
}

function Next() {
  return (
    <>
      <div className={s.nextWrap}>
        <div className={s.nextInner}>
          <Reveal>
            <div className={`${s.label} ${s.mono}`}>
              <b>14</b>Next steps
            </div>
            <h2 className={s.nextTitle}>Next steps</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className={s.steps}>
              {NEXT.steps.map((x, i) => (
                <li key={x}>
                  <span>0{i + 1}</span>
                  {x}
                </li>
              ))}
            </ol>
            <a className={s.btn} href={MAIL}>
              Book the walk-through
            </a>
          </Reveal>
        </div>
      </div>
      <ul className={s.sources}>
        <li className={s.mono} style={{ color: "#b8b8c0" }}>
          Sources
        </li>
        {SOURCES.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared October 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function RodWaveClient() {
  const stored = useSyncExternalStore(
    noopSub,
    () => {
      try {
        return sessionStorage.getItem(GATE_KEY) === "1";
      } catch {
        return false;
      }
    },
    () => false,
  );
  const [unlocked, setOpen] = useState(false);
  const open = stored || unlocked;
  useEffect(() => {
    document.body.style.overflow = open ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <main className={s.page}>
      <Gate open={open} onOpen={() => setOpen(true)} />
      <Progress />
      <TopBar />
      <Hero />
      <Marquee />
      <Summary />
      <div className={s.rule} />
      <Streaming />
      <div className={s.rule} />
      <Touring />
      <div className={s.rule} />
      <Business />
      <div className={s.rule} />
      <Merch />
      <div className={s.rule} />
      <Social />
      <div className={s.rule} />
      <Teardowns />
      <div className={s.rule} />
      <Fans />
      <div className={s.rule} />
      <Funnel />
      <div className={s.rule} />
      <Lateral />
      <div className={s.rule} />
      <Plan />
      <div className={s.rule} />
      <Creative />
      <div className={s.rule} />
      <Why />
      <Next />
    </main>
  );
}
