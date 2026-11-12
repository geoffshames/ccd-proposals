"use client";

/**
 * DOPE AS USUAL x CROWD CONTROL DIGITAL: podcast growth proposal.
 * Built as an episode: a cold open, nine chapters and a player dock that tracks the read.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). Strategy only, no pricing.
 * Example creative is AI-generated and labeled. Episode thumbnails are the show's own.
 */

import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import s from "./dau.module.css";
import { PASSWORD, EMAIL, SHOW_THESIS, SHOW_STATS, PLATFORMS, PEERS, PILLARS, MOMENT, CREATIVE, CREATIVE_RULES, VIDEO, SPONSOR_CATS, DEALS, TARGETS, AGENCY, NEXT, SOURCES } from "@/lib/dope-as-usual/content";
import { RUNTIME, CHAPTERS, LIFECYCLE, SPLIT, GUEST_COMPARE, ATTENTION, THEN_NOW, FUNNEL, WEEK_ROWS, WEEK, WORKSTREAMS, PLACEMENTS, AD_FORMATS, GANTT_WEEKS, GANTT } from "@/lib/dope-as-usual/bespoke";
import { EPISODES, type Ep } from "@/lib/dope-as-usual/episodes";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const short = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M` : n >= 1e3 ? `${(n / 1e3).toFixed(n < 1e4 ? 1 : 0).replace(/\.0$/, "")}K` : `${n}`);
const mmss = (t: number) => `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(Math.floor(t % 60)).padStart(2, "0")}`;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fmtDate = (d: string) => `${MONTHS[Number(d.slice(5, 7)) - 1]} ${d.slice(0, 4)}`;
const thumb = (id: string) => `/images/dope-as-usual/eps/${id}.jpg`;
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent("Dope As Usual x Crowd Control")}&body=${encodeURIComponent("Hey Geoff,\n\nLet's set up the working session.\n\n")}`;
const GATE_KEY = "dope-as-usual-unlocked";
const chapter = (id: string) => CHAPTERS.find((c) => c.id === id)!;

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

function Grow({ pct, className, delay = 0 }: { pct: number; className?: string; delay?: number }) {
  const reduce = useReduced();
  return <motion.i className={className} style={{ width: `${pct}%` }} initial={reduce ? { scaleX: 1 } : { scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.1, ease: EASE, delay }} />;
}

function Counter({ value, suffix = "", duration = 1.6 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration, ease: EASE, onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value, duration]);
  return (
    <span ref={ref}>
      {fmt(reduce ? value : n)}
      {suffix}
    </span>
  );
}

function go(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - (id === "top" ? 0 : 64), behavior: "smooth" });
}

/* ============================================================================
 * Chrome: gate, top bar, player dock
 * ========================================================================== */

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
        <div className={`${s.mono} ${s.kicker}`} style={{ marginBottom: 18 }}>
          Season one, episode one
        </div>
        <div className={s.gateTitle}>DOPE AS USUAL</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Podcast growth proposal. Enter the password to press play.
        </p>
        <form className={s.gateForm} onSubmit={submit} autoComplete="off">
          <input type="password" placeholder="Password" aria-label="Password" value={v} onChange={(e) => setV(e.target.value)} />
          <button type="submit">Play</button>
        </form>
        <div className={`${s.gateErr} ${s.mono}`} data-show={err ? "" : undefined}>
          Incorrect password
        </div>
      </div>
      <div className={`${s.gateRow} ${s.mono}`}>
        <span>November 2026</span>
        <span>Crowd Control Digital</span>
      </div>
    </div>
  );
}

function TopBar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`${s.topbar} ${solid ? s.topbarSolid : ""}`}>
      <a className={s.brand} href="#top" aria-label="Back to top" onClick={(e) => (e.preventDefault(), go("top"))}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
      </a>
      <span className={s.tbShow}>
        <i className={s.liveDot} aria-hidden="true" />
        Dope As Usual
      </span>
      <a className={s.navCta} href={MAIL}>
        Talk To Us
      </a>
    </header>
  );
}

function PlayerDock() {
  const { scrollYProgress } = useScroll();
  const [t, setT] = useState(0);
  const [cur, setCur] = useState(0);
  const [show, setShow] = useState(false);
  const tv = useSpring(0, { stiffness: 160, damping: 30 });
  const fillX = useTransform(tv, (v) => v / RUNTIME);
  useMotionValueEvent(scrollYProgress, "change", () => {
    const y = window.scrollY + window.innerHeight * 0.45;
    const tops = CHAPTERS.map((c) => {
      const el = document.getElementById(c.id);
      return el ? el.getBoundingClientRect().top + window.scrollY : 0;
    });
    const end = document.documentElement.scrollHeight;
    let i = 0;
    for (let j = 0; j < tops.length; j++) if (y >= tops[j]) i = j;
    const a = CHAPTERS[i].at;
    const b = i + 1 < CHAPTERS.length ? CHAPTERS[i + 1].at : RUNTIME;
    const t0 = tops[i];
    const t1 = i + 1 < tops.length ? tops[i + 1] : end;
    const v = Math.min(RUNTIME, a + Math.max(0, Math.min(1, (y - t0) / Math.max(1, t1 - t0))) * (b - a));
    setT(v);
    tv.set(v);
    setShow(window.scrollY > window.innerHeight * 0.6);
  });
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setCur(Math.max(0, CHAPTERS.findIndex((c) => c.id === e.target.id)))),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  const c = CHAPTERS[cur];
  return (
    <div className={s.dock} data-show={show ? "" : undefined}>
      <div className={s.dockInner}>
        <div className={s.dockNow}>
          <span className={s.eq} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
          <span className={s.dockCh}>
            <b>CH {c.n}</b>
            {c.t}
          </span>
        </div>
        <div className={s.dockTrack}>
          <motion.div className={s.dockFill} style={{ scaleX: fillX }} />
          {CHAPTERS.slice(1).map((ch) => (
            <button key={ch.id} type="button" className={s.dockTick} style={{ left: `${(ch.at / RUNTIME) * 100}%` }} onClick={() => go(ch.id)} aria-label={`Chapter ${ch.n}, ${ch.t}`}>
              <span className={s.dockTip}>
                {ch.n} {ch.t}
              </span>
            </button>
          ))}
        </div>
        <span className={s.dockTime}>
          {mmss(t)} <em>/ {mmss(RUNTIME)}</em>
        </span>
      </div>
    </div>
  );
}

/* ============================================================================
 * Cold open
 * ========================================================================== */

function VaultWall() {
  const reduce = useReduced();
  const cols = useMemo(() => {
    const ids = EPISODES.filter((e) => e.id).map((e) => e.id);
    const out: string[][] = Array.from({ length: 7 }, () => []);
    ids.forEach((id, i) => out[i % 7].push(id));
    return out.map((c) => c.slice(0, 20));
  }, []);
  return (
    <div className={s.vwWrap} aria-hidden="true">
      <div className={s.vw}>
        {cols.map((c, i) => (
          <div key={i}>
            <div className={`${s.vwTrack} ${reduce ? "" : i % 2 ? s.vwDown : s.vwUp}`} style={{ animationDuration: `${80 + (i % 3) * 20}s` }}>
              {[...c, ...c].map((id, j) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={`${id}-${j}`} src={thumb(id)} alt="" loading={j < 5 ? "eager" : "lazy"} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={s.vwShade} />
    </div>
  );
}

function Hero() {
  return (
    <section className={s.hero} id="top">
      <VaultWall />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>Podcast growth proposal, November 2026</div>
          <h1 className={`${s.heroTitle} ${s.heroXL}`}>
            <span className={s.word}>DOPE</span>
            <span className={s.word}>AS</span>
            <span className={s.word}>USUAL</span>
          </h1>
        </Reveal>
        <div className={s.coldRow}>
          <Reveal delay={0.1}>
            <p className={s.heroLine}>Five years of tape. One system to put it to work.</p>
            <p className={s.heroBody}>
              Prepared for Dope As Yola and Marty O&apos;Neill. Two hosts, 290 episodes and 141 guests, built with no network behind it. This is how we turn the catalog, the guest list and the audience you already have into reach, a list you own, and sponsor and platform money.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className={s.epCard}>
              <div className={s.epTop}>
                <span className={s.epBadge}>S1:E1</span>
                <span className={s.mono}>The proposal</span>
                <span className={`${s.mono} ${s.dim}`}>{mmss(RUNTIME)}</span>
              </div>
              <ol className={s.epList}>
                {CHAPTERS.slice(1).map((c) => (
                  <li key={c.id}>
                    <button type="button" onClick={() => go(c.id)}>
                      <span className={s.epAt}>{mmss(c.at)}</span>
                      <span className={s.epName}>{c.t}</span>
                      <span className={s.epGo} aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
      <div className={`${s.heroFoot} ${s.mono}`}>
        <span>Prepared by Geoff Shames, Crowd Control Digital</span>
        <span>Scroll to play</span>
      </div>
    </section>
  );
}

/* ============================================================================
 * Chapter header
 * ========================================================================== */

function ChapterHead({ id, title, strap, children }: { id: string; title: string; strap: string; children?: ReactNode }) {
  const c = chapter(id);
  return (
    <div className={s.chHead}>
      <Reveal>
        <div className={s.chStrip}>
          <span className={s.chBadge}>CH {c.n}</span>
          <span className={s.mono}>{strap}</span>
          <span className={`${s.mono} ${s.chAt}`}>{mmss(c.at)}</span>
        </div>
        <h2 className={s.chTitle}>{title}</h2>
      </Reveal>
      {children && (
        <Reveal delay={0.1}>
          <div className={s.chIntro}>{children}</div>
        </Reveal>
      )}
    </div>
  );
}

/* ============================================================================
 * CH 01 The show
 * ========================================================================== */

function Lifecycle() {
  return (
    <div className={s.life}>
      <div className={s.lifeSide}>
        <span className={`${s.mono} ${s.lifeLabel}`}>Stays with you</span>
        <div className={s.lifeRow}>
          {LIFECYCLE.yours.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.06} className={s.lifeNode}>
              <span className={s.lifeN}>{String(i + 1).padStart(2, "0")}</span>
              <b>{x.t}</b>
              <p>{x.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={s.handoff} aria-hidden="true">
        <span className={s.mono}>The handoff</span>
      </div>
      <div className={`${s.lifeSide} ${s.lifeOurs}`}>
        <span className={`${s.mono} ${s.lifeLabel}`}>What we run</span>
        <div className={s.lifeRow}>
          {LIFECYCLE.ours.map((x, i) => (
            <Reveal key={x.t} delay={0.2 + i * 0.06} className={s.lifeNode}>
              <span className={s.lifeN}>{String(i + 5).padStart(2, "0")}</span>
              <b>{x.t}</b>
              <p>{x.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function Band() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  return (
    <section className={s.band} ref={ref}>
      <motion.div className={s.bandImg} style={{ y }} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/dope-as-usual/creative/studio-wide.jpg" alt="" loading="lazy" />
      </motion.div>
      <div className={s.bandShade} />
      <div className={s.bandInner}>
        <Reveal>
          <span className={`${s.mono} ${s.kicker}`}>The operating model</span>
          <h2 className={s.bandTitle}>
            You make the show. <em>We move it.</em>
          </h2>
          <p className={s.bandSub}>The room, the mic and the edit stay exactly where they are. Everything that happens after the episode ends is ours to run, every day, with your approval on anything that carries your name.</p>
        </Reveal>
      </div>
      <span className={`${s.mono} ${s.bandTag}`}>Studio image: AI example</span>
    </section>
  );
}

function ChShow() {
  return (
    <>
      <section className={s.section} id="show">
        <ChapterHead id="show" title="What you built" strap="Independent since 2021">
          Weekly for five years, still charting, and built by two people betting on themselves. Here is the asset as we see it, and where we come in.
        </ChapterHead>
        <div className={s.thesis}>
          <Reveal>
            <p className={s.thesisBig}>
              {SHOW_THESIS.big} <em>{SHOW_THESIS.em}</em>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={s.intro}>{SHOW_THESIS.body}</p>
          </Reveal>
        </div>
        <Reveal>
          <div className={s.stats}>
            {SHOW_STATS.map((x) => (
              <div key={x.l}>
                <span className={s.statV}>{x.v}</span>
                <span className={s.statL}>{x.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <div className={s.sub}>
          <Reveal className={s.subHead}>
            <h3 className={s.h3}>The life of an episode</h3>
            <span className={`${s.mono} ${s.dim}`}>Who owns each step</span>
          </Reveal>
          <Lifecycle />
        </div>
      </section>
      <Band />
    </>
  );
}

/* ============================================================================
 * CH 02 The vault
 * ========================================================================== */

function Statement() {
  const total = useMemo(() => EPISODES.reduce((a, e) => a + e.v, 0), []);
  return (
    <div className={s.stmt}>
      <span className={`${s.mono} ${s.kicker}`}>Already in the archive</span>
      <div className={s.stmtNum}>
        <Counter value={total} duration={2.4} />
      </div>
      <div className={s.stmtRow}>
        <p className={s.stmtLine}>Full-episode YouTube views across 290 episodes. Every one of them is a moment that can be cut, reissued and sold again.</p>
        <div className={s.stmtFacts}>
          <div>
            <b>5.8M</b>
            <span>The biggest single episode</span>
          </div>
          <div>
            <b>12</b>
            <span>Appearances by OGEE, the most booked guest</span>
          </div>
          <div>
            <b>460</b>
            <span>Hours of long-form conversation on tape</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const eps = EPISODES;
  const max = useMemo(() => Math.max(...eps.map((e) => e.v)), [eps]);
  const top = useMemo(() => new Set([...eps].sort((a, b) => b.v - a.v).slice(0, 10)), [eps]);
  const goat = useMemo(() => eps.reduce((a, e) => (e.v > a.v ? e : a), eps[0]), [eps]);
  const [sel, setSel] = useState<Ep>(goat);
  const years = useMemo(() => {
    const seen = new Map<string, number>();
    eps.forEach((e, i) => {
      const y = e.d.slice(0, 4);
      if (!seen.has(y)) seen.set(y, i);
    });
    return [...seen.entries()];
  }, [eps]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  return (
    <div className={s.tl} ref={ref}>
      <div className={s.tlHead}>
        <div>
          <span className={`${s.mono} ${s.kicker}`}>All 290 episodes</span>
          <h3 className={s.tlTitle}>Every episode, 2021 to today</h3>
        </div>
        <div className={`${s.mono} ${s.tlLegend}`}>
          <span>
            <i className={s.keyRed} />
            Top ten
          </span>
          <span>
            <i className={s.keyWhite} />
            YouTube views
          </span>
          <span>
            <i className={s.keyDim} />
            Audio only
          </span>
        </div>
      </div>
      <div className={s.tlBody}>
        <div className={s.tlScroll}>
          <div className={s.tlBars} onMouseLeave={() => setSel(goat)}>
            {eps.map((e, i) => (
              <button
                key={`${e.d}-${i}`}
                type="button"
                className={`${s.tlBar} ${top.has(e) ? s.tlTop : ""} ${!e.v ? s.tlAudio : ""} ${sel === e ? s.tlSel : ""}`}
                onMouseEnter={() => setSel(e)}
                onFocus={() => setSel(e)}
                onClick={() => setSel(e)}
                aria-label={`${e.t}, ${fmtDate(e.d)}${e.v ? `, ${short(e.v)} views` : ""}`}
              >
                <motion.i
                  style={{ height: `${e.v ? Math.max(2.5, Math.sqrt(e.v / max) * 100) : 1.5}%` }}
                  initial={reduce ? { scaleY: 1 } : { scaleY: 0 }}
                  animate={inView || reduce ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : i * 0.004 }}
                />
              </button>
            ))}
          </div>
          <div className={s.tlAxis}>
            {years.map(([y, i]) => (
              <span key={y} style={{ left: `${(i / eps.length) * 100}%` }}>
                {y}
              </span>
            ))}
          </div>
        </div>
        <div className={s.tlCard}>
          <div className={s.tlThumb}>
            {sel.id ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumb(sel.id)} alt="" />
            ) : (
              <div className={`${s.tlNoThumb} ${s.mono}`}>Audio episode</div>
            )}
          </div>
          <span className={`${s.mono} ${s.dim}`}>{fmtDate(sel.d)}</span>
          <b className={s.tlEpTitle}>{sel.t}</b>
          {sel.g && <span className={s.tlGuest}>{sel.g}</span>}
          <span className={s.tlViews}>{sel.v ? short(sel.v) : "Audio"}</span>
          <span className={`${s.mono} ${s.dim}`}>{sel.v ? "YouTube views" : "Released on audio platforms"}</span>
        </div>
      </div>
      <p className={`${s.note} ${s.after}`}>Hover or tap any bar. Bar height follows the square root of views so the whole catalog stays readable next to the 5.8M peak.</p>
    </div>
  );
}

/* evidence visuals */

function EvArchive() {
  const tot = SPLIT.archive + SPLIT.recent;
  const tops = [...EPISODES].sort((a, b) => b.v - a.v).slice(0, 10);
  return (
    <div className={s.ev}>
      <div className={s.split2}>
        <div style={{ flexBasis: `${(SPLIT.archive / tot) * 100}%` }} className={s.split2A}>
          <b>42M</b>
          <span>2021 and 2022</span>
        </div>
        <div style={{ flexBasis: `${(SPLIT.recent / tot) * 100}%` }} className={s.split2B}>
          <b>10.6M</b>
          <span>2023 on</span>
        </div>
      </div>
      <div className={s.topGrid}>
        {tops.map((e, i) => (
          <a key={e.id} href={`https://www.youtube.com/watch?v=${e.id}`} target="_blank" rel="noreferrer" className={s.topCell}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={thumb(e.id)} alt={e.t} loading="lazy" />
            <span className={s.topRank}>{String(i + 1).padStart(2, "0")}</span>
            <span className={s.topViews}>{short(e.v)}</span>
          </a>
        ))}
      </div>
      <span className={`${s.mono} ${s.dim}`}>The ten most watched episodes. All of them are from 2021 and 2022.</span>
    </div>
  );
}

function EvBars({ rows, logScale = false }: { rows: { k: string; s?: string; v: number; red?: boolean }[]; logScale?: boolean }) {
  const max = Math.max(...rows.map((r) => r.v));
  const pct = (v: number) => (logScale ? (Math.log10(v) / Math.log10(max)) * 100 : (v / max) * 100);
  return (
    <div className={`${s.ev} ${s.evBars}`}>
      {rows.map((r, i) => (
        <div key={r.k} className={s.evRow}>
          <div className={s.evK}>
            <b>{r.k}</b>
            {r.s && <span>{r.s}</span>}
          </div>
          <div className={s.evTrack}>
            <Grow pct={Math.max(1.5, pct(r.v))} className={r.red || i === 0 ? s.evFillRed : s.evFill} delay={i * 0.08} />
          </div>
          <span className={s.evV}>{short(r.v)}</span>
        </div>
      ))}
      {logScale && <span className={`${s.mono} ${s.dim}`}>Log scale, so all three fit on one chart.</span>}
    </div>
  );
}

function EvTikTok() {
  const maxP = Math.max(...PEERS.map((p) => p.posts));
  return (
    <div className={s.ev}>
      <div className={s.ttGrid}>
        {PEERS.map((p) => (
          <div key={p.k} className={`${s.ttCol} ${p.me ? s.ttMe : ""}`}>
            <div className={s.ttDots} aria-hidden="true">
              {Array.from({ length: Math.max(1, Math.round((p.posts / maxP) * 200)) }).map((_, i) => (
                <i key={i} />
              ))}
            </div>
            <b>{fmt(p.posts)}</b>
            <span>{p.k} posts</span>
            <span className={s.dim}>{short(p.followers)} followers</span>
          </div>
        ))}
      </div>
      <span className={`${s.mono} ${s.dim}`}>Each square is roughly 13 posts.</span>
    </div>
  );
}

function EvThenNow() {
  return (
    <div className={`${s.ev} ${s.tn}`}>
      {(["then", "now"] as const).map((k) => (
        <div key={k}>
          <span className={`${s.mono} ${k === "then" ? s.kicker : s.dim}`}>{k === "then" ? "2021 and 2022: the guest is the headline" : "2026: the episode number is the headline"}</span>
          <div className={s.tnRow}>
            {THEN_NOW[k].map((x) => (
              <div key={x.id} className={s.tnCell}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={thumb(x.id)} alt="" loading="lazy" />
                <span>{x.v}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <span className={`${s.mono} ${s.dim}`}>Views also reflect the era. That is exactly why the systems should be tested head to head.</span>
    </div>
  );
}

function EvFunnel() {
  const max = FUNNEL[0].v;
  return (
    <div className={`${s.ev} ${s.evBars}`}>
      {FUNNEL.map((r, i) => (
        <div key={r.k} className={s.evRow}>
          <div className={s.evK}>
            <b>{r.k}</b>
            <span>{r.owned ? "Owned: reachable any day" : "Rented: reachable when the algorithm agrees"}</span>
          </div>
          <div className={s.evTrack}>
            <Grow pct={(r.v / max) * 100} className={r.owned ? s.evFillRed : s.evFill} delay={i * 0.08} />
          </div>
          <span className={s.evV}>{short(r.v)}</span>
        </div>
      ))}
    </div>
  );
}

const FINDINGS = [
  { n: "01", k: "Catalog", t: "80% of the views live in the archive", b: "Episodes from 2021 and 2022 hold about 42M of the 52.6M full-episode views we counted, and every one of the ten most watched episodes is from that era. It is the most valuable footage the show owns, and almost none of it has been cut for vertical.", ev: <EvArchive /> },
  { n: "02", k: "Attention", t: "The audience moved to short form", b: "The median full episode drew 258K views in 2021 and 24K in 2026. Over the same years a single reel of the show passed 17.9M on Instagram. The appetite is still there. It lives in clips now, and long form follows the clips.", ev: <EvBars rows={ATTENTION} logScale /> },
  { n: "03", k: "Guests", t: "The inner circle beats the press booking", b: "The recurring cast drives the biggest numbers in show history. A guest with 39M followers drew 91K. Yola's mom drew 784K. The chemistry is the product, and the recurring cast is a franchise waiting to be programmed.", ev: <EvBars rows={GUEST_COMPARE} /> },
  { n: "04", k: "TikTok", t: "The biggest open lane is TikTok", b: "Stiff Socks, whose co-host Michael Blaustein sat down with you in July, has posted 2,527 TikToks to 3.5M followers. Dope As Usual has posted 49. The library to close that gap already exists.", ev: <EvTikTok /> },
  { n: "05", k: "Packaging", t: "Two packaging systems, one test", b: "The 2021 and 2022 thumbnails put the guest's name in giant type on the orange doodle wall. The current system leads with the episode number. A simple title and thumbnail test will tell us which one wins today.", ev: <EvThenNow /> },
  { n: "06", k: "Owned", t: "A list this size is a weekly revenue line", b: "120K newsletter contacts and 80K members is a bigger owned audience than most touring comedians have. Pointed at new episodes, live shows, merch and sponsors every week, it becomes the most reliable channel the show has.", ev: <EvFunnel /> },
];

function ChVault() {
  return (
    <section className={s.section} id="vault">
      <ChapterHead id="vault" title="The vault" strap="290 episodes audited">
        We pulled every episode from YouTube and the audio feed, every platform and the full guest list. Six findings shape the plan, and each one comes with its evidence.
      </ChapterHead>
      <Reveal>
        <Statement />
      </Reveal>
      <div className={s.sub}>
        <Reveal>
          <div className={s.plat}>
            {PLATFORMS.map((p) => (
              <div key={p.k}>
                <span className={`${s.mono} ${s.kicker}`}>{p.k}</span>
                <span className={s.platV}>{p.v}</span>
                <span className={s.platN}>{p.n}</span>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className={s.sub}>
        <Reveal>
          <Timeline />
        </Reveal>
      </div>
      <div className={s.sub}>
        <div className={s.finds}>
          {FINDINGS.map((f) => (
            <article key={f.n} className={s.find}>
              <Reveal className={s.findText}>
                <span className={s.findN}>{f.n}</span>
                <span className={`${s.mono} ${s.kicker}`}>{f.k}</span>
                <h3 className={s.findT}>{f.t}</h3>
                <p>{f.b}</p>
              </Reveal>
              <Reveal delay={0.1} className={s.findEv}>
                {f.ev}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * CH 03 The format
 * ========================================================================== */

function Week() {
  return (
    <div className={s.weekWrap}>
      <div className={s.week}>
        <div className={s.weekCorner} />
        {WEEK.map((d) => (
          <div key={d.d} className={`${s.weekDay} ${d.hot ? s.weekHot : ""}`}>
            {d.d}
            {d.hot && <em>Episode day</em>}
          </div>
        ))}
        {WEEK_ROWS.map((row, r) => (
          <div key={row} style={{ display: "contents" }}>
            <div className={`${s.mono} ${s.weekRow}`}>{row}</div>
            {WEEK.map((d, c) => (
              <motion.div
                key={d.d + row}
                className={`${s.weekCell} ${d.cells[r] ? s.weekOn : ""} ${d.hot && d.cells[r] ? s.weekCellHot : ""}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, delay: c * 0.05 + r * 0.03 }}
              >
                {d.cells[r]}
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Marquee({ words }: { words: string[] }) {
  const reduce = useReduced();
  const row = words.flatMap((w, i) => [
    <span key={`w${i}`} className={i % 2 ? s.mqOutline : ""}>
      {w}
    </span>,
    <i key={`b${i}`} className={s.mqBar} aria-hidden="true" />,
  ]);
  return (
    <div className={s.mq} aria-hidden="true">
      <div className={`${s.mqTrack} ${reduce ? "" : s.mqRun}`}>
        {row}
        {words.flatMap((w, i) => [
          <span key={`cw${i}`} className={i % 2 ? s.mqOutline : ""}>
            {w}
          </span>,
          <i key={`cb${i}`} className={s.mqBar} />,
        ])}
      </div>
    </div>
  );
}

function ChFormat() {
  return (
    <>
      <section className={s.section} id="format">
        <ChapterHead id="format" title="The format" strap="Five pillars, seven days">
          Reach first, then ownership, then money. Each pillar feeds the next, and the episode stays exactly the show you make today. Here is what a week looks like once it is running.
        </ChapterHead>
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
          <Reveal className={s.subHead}>
            <h3 className={s.h3}>A week of Dope As Usual</h3>
            <span className={`${s.mono} ${s.dim}`}>About 16 clips, two drops and two texts a week</span>
          </Reveal>
          <Reveal>
            <Week />
          </Reveal>
        </div>
      </section>
      <Marquee words={["Clip everything", "Reopen the vault", "Own the audience", "Sell the reach", "Package the show"]} />
    </>
  );
}

/* ============================================================================
 * CH 04 The reunion
 * ========================================================================== */

const CAST = [
  { n: "OGEE", apps: 12, best: 1000000, id: "LffWWD3G1P8", note: "The most booked guest in show history." },
  { n: "Goblin", apps: 10, best: 5800000, id: "89WeV5A1xow", note: "Half of the biggest episode the show has made." },
  { n: "Josh Wolf", apps: 8, best: 1100000, id: "dHEQa974g64", note: "Headline comic with a standing seat at the table." },
  { n: "Erick Khan", apps: 7, best: 5800000, id: "0Yp_0ruodlQ", note: "Three of his episodes passed a million views." },
  { n: "Rosie", apps: 5, best: 427000, id: "jWe4v7nUZYU", note: "Family of the show, back by popular demand." },
  { n: "Yola's Mom", apps: 1, best: 784000, id: "T9qwAIJtcN8", note: "One appearance. Out-drew most celebrity bookings." },
];

const SEQ = [
  { d: "Day 1", t: "Vault cut", b: "The original episode returns as clips and a compilation." },
  { d: "Day 3", t: "The tease", b: "Guest and hosts post the callback. The list gets the date." },
  { d: "Day 8", t: "Reunion drops", b: "New episode with the guest's own collab posts on every platform." },
  { d: "Day 8", t: "The text", b: "SMS to the list with the first clip and a members-only cut." },
  { d: "Day 9 to 14", t: "The tail", b: "Daily clips from the reunion, sold to one series sponsor." },
];

function ChReunion() {
  return (
    <section className={s.section} id="reunion">
      <ChapterHead id="reunion" title="The reunion" strap="The flagship move">
        {MOMENT.b}
      </ChapterHead>
      <div className={s.cast}>
        {CAST.map((c, i) => (
          <motion.div key={c.n} className={s.castCard} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.07 }}>
            <div className={s.castImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={thumb(c.id)} alt="" loading="lazy" />
              <span className={s.castApps}>
                <b>{c.apps}</b>
                {c.apps === 1 ? "episode" : "episodes"}
              </span>
            </div>
            <div className={s.castBody}>
              <h4>{c.n}</h4>
              <p>{c.note}</p>
              <span className={`${s.mono} ${s.dim}`}>Biggest episode {short(c.best)}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={s.sub}>
        <Reveal className={s.subHead}>
          <h3 className={s.h3}>How one reunion runs</h3>
          <span className={`${s.mono} ${s.dim}`}>Two weeks per guest</span>
        </Reveal>
        <div className={s.seq}>
          <div className={s.seqLine} aria-hidden="true" />
          {SEQ.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.08} className={s.seqStep}>
              <span className={s.seqDot} aria-hidden="true" />
              <span className={`${s.mono} ${s.kicker}`}>{x.d}</span>
              <b>{x.t}</b>
              <p>{x.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * CH 05 The engine
 * ========================================================================== */

function ChEngine() {
  const [i, setI] = useState(0);
  const w = WORKSTREAMS[i];
  return (
    <section className={s.section} id="engine">
      <ChapterHead id="engine" title="The engine" strap="Nine workstreams">
        Everything we would run, what ships, and how we measure it. Start with all nine or start with clipping and add the rest. Select a workstream to open it.
      </ChapterHead>
      <Reveal>
        <div className={s.room}>
          <div className={s.roomList} role="tablist" aria-label="Workstreams">
            {WORKSTREAMS.map((x, j) => (
              <button key={x.n} type="button" role="tab" aria-selected={i === j} className={`${s.roomItem} ${i === j ? s.roomOn : ""}`} onClick={() => setI(j)} onMouseEnter={() => setI(j)}>
                <span className={s.roomN}>{x.n}</span>
                <span className={s.roomT}>{x.t}</span>
                <span className={`${s.mono} ${s.roomC}`}>{x.c}</span>
              </button>
            ))}
          </div>
          <motion.div key={w.n} className={s.roomPanel} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, ease: EASE }} role="tabpanel">
            <div className={s.roomBig}>{w.n}</div>
            <span className={`${s.mono} ${s.kicker}`}>{w.c}</span>
            <h3 className={s.roomTitle}>{w.t}</h3>
            <p className={s.roomB}>{w.b}</p>
            <div className={s.roomCols}>
              <div>
                <span className={`${s.mono} ${s.dim}`}>What ships</span>
                <ul className={s.list}>
                  {w.ships.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className={`${s.mono} ${s.dim}`}>Measured by</span>
                <p className={s.roomKpi}>{w.kpi}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================================
 * CH 06 The look
 * ========================================================================== */

const PHONES = [
  { src: "/images/dope-as-usual/creative/clip-frame.jpg", video: "/images/dope-as-usual/creative/clip-1.mp4", handle: "@dope.as.usual.podcast", cap: "The full story is on the pod.", tag: "TikTok" },
  { src: "/images/dope-as-usual/creative/clip-vault.jpg", video: "/images/dope-as-usual/creative/clip-2.mp4", handle: "@dope_as_usual_podcast", cap: "From the vault. Season one.", tag: "Reels" },
  null,
  { src: "/images/dope-as-usual/creative/clip-phone.jpg", video: "/images/dope-as-usual/creative/clip-3.mp4", handle: "@DopeAsUsual", cap: "New episode every Tuesday.", tag: "Shorts" },
];

function PhoneSms() {
  const msgs: { t: string; me?: boolean; k?: string }[] = [
    { t: "New episode just dropped. Goblin is back on the couch. Watch first:", k: "Tue 12:30 PM" },
    { t: "dopeasusual.link/goblin" },
    { t: "Members get the extended cut tonight. Reply VAULT for the original." },
    { t: "VAULT", me: true },
    { t: "The GOAT Episode, S1:E29. Enjoy the time travel." },
  ];
  return (
    <div className={`${s.phScreen} ${s.sms}`}>
      <div className={s.smsTop}>
        <span className={s.smsAv}>DAU</span>
        <b>Dope As Usual</b>
        <span className={s.mono}>Text message</span>
      </div>
      <div className={s.smsBody}>
        {msgs.map((m, i) => (
          <motion.div key={i} className={`${s.smsMsg} ${m.me ? s.smsMe : ""}`} initial={{ opacity: 0, y: 12, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.35 }}>
            {m.k && <em className={s.mono}>{m.k}</em>}
            <span>{m.t}</span>
          </motion.div>
        ))}
      </div>
      <span className={s.phAi}>Example</span>
    </div>
  );
}

function PhoneFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const a = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const b = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  return (
    <div className={s.feed} ref={ref}>
      {PHONES.map((p, i) => (
        <motion.div key={i} className={s.phone} style={{ y: i % 2 ? b : a }}>
          <div className={s.phFrame}>
            <span className={s.phNotch} aria-hidden="true" />
            {p ? (
              <div className={s.phScreen}>
                {p.video ? (
                  <video className={s.phMedia} src={p.video} poster={p.src} autoPlay muted loop playsInline preload="metadata" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className={`${s.phMedia} ${s.phKen}`} src={p.src} alt="" loading="lazy" />
                )}
                <div className={s.phUi}>
                  <span className={`${s.phTag} ${s.mono}`}>{p.tag}</span>
                  <div className={s.phRail} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className={s.phCap}>
                    <b>{p.handle}</b>
                    <span>{p.cap}</span>
                  </div>
                  <div className={s.phProg}>
                    <i />
                  </div>
                </div>
                <span className={s.phAi}>AI example</span>
              </div>
            ) : (
              <PhoneSms />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ChLook() {
  const [vault, reunion, , sponsor, poster] = CREATIVE;
  const card = (c: (typeof CREATIVE)[number], cls: string, d = 0) => (
    <Reveal key={c.src} delay={d} className={`${s.crItem} ${cls}`}>
      <div className={s.crMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.src} alt={`${c.t}, AI example`} loading="lazy" />
        <span className={s.aiBadge}>AI example</span>
      </div>
      <span className={`${s.mono} ${s.kicker}`}>{c.k}</span>
      <h4>{c.t}</h4>
      <p>{c.b}</p>
    </Reveal>
  );
  return (
    <section className={s.section} id="look">
      <ChapterHead id="look" title="The look" strap="Example creative">
        Made for this proposal in the show&apos;s own visual language: the orange doodle wall, the condensed type and the quoted wordmark. All of it is AI-generated and directional. Real assets are cut from your footage.
      </ChapterHead>
      <Reveal className={s.subHead}>
        <h3 className={s.h3}>Every day, on every screen</h3>
        <span className={`${s.mono} ${s.dim}`}>TikTok, Reels, the Tuesday text and Shorts</span>
      </Reveal>
      <PhoneFeed />
      <div className={s.sub}>
        <Reveal className={s.subHead}>
          <h3 className={s.h3}>Packaging systems</h3>
          <span className={`${s.mono} ${s.dim}`}>YouTube, motion, sponsorship and live</span>
        </Reveal>
        <div className={s.crGrid}>
          {card(vault, s.crHalf)}
          {card(reunion, s.crHalf, 0.06)}
          <Reveal className={`${s.crItem} ${s.crHalf}`}>
            <div className={s.crMedia}>
              <video src={VIDEO.src} poster={VIDEO.poster} autoPlay muted loop playsInline controls preload="metadata" />
              <span className={s.aiBadge}>AI example</span>
            </div>
            <span className={`${s.mono} ${s.kicker}`}>Motion</span>
            <h4>{VIDEO.t}</h4>
            <p>{VIDEO.b}</p>
          </Reveal>
          {card(sponsor, s.crHalf, 0.06)}
          {card(poster, s.cr4)}
          <Reveal delay={0.1} className={`${s.crRules} ${s.cr8}`}>
            <span className={`${s.mono} ${s.kicker}`}>The packaging rules</span>
            <h3 className={s.h3}>Five rules for every asset</h3>
            <ol className={s.mSteps}>
              {CREATIVE_RULES.map((x, i) => (
                <li key={x}>
                  <span>0{i + 1}</span>
                  {x}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * CH 07 Ad break
 * ========================================================================== */

function Anatomy() {
  const len = 110;
  return (
    <div className={s.anat}>
      <div className={s.anatHead}>
        <span className={`${s.mono} ${s.dim}`}>A typical episode, 110 minutes</span>
        <span className={`${s.mono} ${s.dim}`}>Plus every clip and every text that week</span>
      </div>
      <div className={s.anatBar}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={s.anatMin} style={{ left: `${((i * 10) / len) * 100}%` }}>
            {i * 10}
          </span>
        ))}
        {PLACEMENTS.map((p, i) => (
          <motion.div key={p.k} className={s.anatSlot} style={{ left: `${(p.at / len) * 100}%`, width: `${(p.w / len) * 100}%` }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: EASE, delay: 0.2 + i * 0.12 }}>
            <span className={`${s.anatLbl} ${i === PLACEMENTS.length - 1 ? s.anatLblR : ""} ${i % 2 ? s.anatLow : ""}`}>
              <b>{p.k}</b>
              {p.b}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ChAd() {
  return (
    <section className={s.adWrap} id="adbreak">
      <div className={s.adBreak}>
        <div className={s.adBreakInner}>
          <span className={`${s.mono} ${s.adBreakK}`}>CH {chapter("adbreak").n}</span>
          <h2 className={s.adBreakT}>Ad break</h2>
          <span className={`${s.mono} ${s.adBreakS}`}>Sponsorship, back after this</span>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.chHead}>
          <Reveal>
            <h3 className={s.h2}>Turning reach into revenue</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={s.chIntro}>A sponsor deck that counts the whole audience, formats that live inside the show instead of interrupting it, and categories that fit the room.</div>
          </Reveal>
        </div>
        <Reveal>
          <Anatomy />
        </Reveal>
        <div className={s.sub}>
          <div className={s.ladder}>
            {AD_FORMATS.map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06} className={s.rung} style={{ minHeight: 200 + i * 40 }}>
                <span className={`${s.mono} ${s.kicker}`}>{f.k}</span>
                <h4>{f.t}</h4>
                <p>{f.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className={s.sub}>
          <Reveal>
            <div className={s.kit}>
              <div className={s.kitImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/dope-as-usual/creative/media-kit.jpg" alt="Dope As Usual media kit, AI example" loading="lazy" />
                <span className={s.aiBadge}>AI example</span>
              </div>
              <div className={s.kitBody}>
                <span className={`${s.mono} ${s.kicker}`}>The media kit</span>
                <h3>One deck that counts the whole audience</h3>
                <p className={s.intro}>YouTube, audio, Instagram, TikTok, the list and the members in one place, with audience data, integration formats and results from every read that already ran.</p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className={s.sub}>
          <Reveal className={s.subHead}>
            <h3 className={s.h3}>Categories that fit the room</h3>
          </Reveal>
          <div className={s.cats}>
            {SPONSOR_CATS.map((c, i) => (
              <Reveal key={c.t} delay={(i % 3) * 0.05}>
                <b>{c.t}</b>
                <p>{c.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * CH 08 The road
 * ========================================================================== */

function Gantt() {
  const n = GANTT_WEEKS.length;
  return (
    <div className={s.ganttWrap}>
      <div className={s.gantt} style={{ gridTemplateColumns: `minmax(150px, 210px) repeat(${n}, minmax(0, 1fr))` }}>
        <div />
        {GANTT_WEEKS.map((w) => (
          <div key={w} className={`${s.mono} ${s.gW}`}>
            {w}
          </div>
        ))}
        {GANTT.map((g, i) => (
          <div key={g.k} style={{ display: "contents" }}>
            <div className={s.gK}>{g.k}</div>
            <div className={s.gLane} style={{ gridColumn: `2 / span ${n}` }}>
              <motion.i
                className={g.red ? s.gBarRed : s.gBar}
                style={{ left: `${(g.s / n) * 100}%`, width: `${((g.e - g.s) / n) * 100}%` }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChRoad() {
  return (
    <section className={s.section} id="road">
      <ChapterHead id="road" title="The road" strap="The first 90 days and beyond">
        Clips are live inside three weeks. The first reunion lands in week seven. Sponsor and platform conversations start once there is new data to bring into the room.
      </ChapterHead>
      <Reveal>
        <div className={s.stats}>
          {TARGETS.map((x) => (
            <div key={x.l}>
              <span className={s.statV}>{x.v}</span>
              <span className={s.statL}>{x.l}</span>
            </div>
          ))}
        </div>
      </Reveal>
      <p className={`${s.note} ${s.after}`}>Directional targets, not guarantees. They depend on posting volume, approval speed and platform changes.</p>
      <div className={s.sub}>
        <Reveal className={s.subHead}>
          <h3 className={s.h3}>Twelve weeks, workstream by workstream</h3>
        </Reveal>
        <Reveal>
          <Gantt />
        </Reveal>
      </div>
      <div className={s.sub}>
        <Reveal className={s.subHead}>
          <h3 className={s.h3}>Platform and network paths</h3>
          <span className={`${s.mono} ${s.dim}`}>From month four</span>
        </Reveal>
        <div className={s.doors}>
          {DEALS.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.04} className={s.door}>
              <div>
                <span className={`${s.mono} ${s.kicker}`}>{d.k}</span>
                <br />
                <b>{d.t}</b>
              </div>
              <p>{d.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * Outro
 * ========================================================================== */

function Outro() {
  return (
    <section id="outro">
      <Marquee words={["Dope as usual", "Every Tuesday", "From the vault", "On every screen"]} />
      <div className={s.section}>
        <Reveal className={s.agencyHead}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
          <p>{AGENCY.body}</p>
        </Reveal>
        <Reveal className={`${s.servicesHead} ${s.mono}`}>
          <span>What we do</span>
          <em>
            <i aria-hidden />
            In this plan
          </em>
        </Reveal>
        <ol className={s.services}>
          {AGENCY.services.map((sv, i) => (
            <li key={sv.h} className={sv.on ? s.serviceOn : ""}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{sv.h}</b>
              <p>{sv.b}</p>
            </li>
          ))}
        </ol>
        <Reveal className={s.clients}>
          {AGENCY.clientGroups.map((g) => (
            <div key={g.label} className={s.clientGroup}>
              <span className={s.mono}>{g.label}</span>
              <div>
                {g.names.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
      <div className={s.nextWrap}>
        <div className={s.nextInner}>
          <Reveal>
            <div className={`${s.label} ${s.mono}`}>
              <b>CH {chapter("outro").n}</b>Next steps
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
              Talk To Us
            </a>
          </Reveal>
        </div>
      </div>
      <div className={s.credits}>
        <span className={`${s.mono} ${s.kicker}`}>Credits and sources</span>
        <ul>
          {SOURCES.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Dope As Usual, November 2026.</span>
      </footer>
    </section>
  );
}

/* ============================================================================
 * Page
 * ========================================================================== */

export default function DopeAsUsualClient() {
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
      <TopBar />
      <PlayerDock />
      <Hero />
      <ChShow />
      <ChVault />
      <ChFormat />
      <ChReunion />
      <div className={s.rule} />
      <ChEngine />
      <div className={s.rule} />
      <ChLook />
      <ChAd />
      <ChRoad />
      <Outro />
    </main>
  );
}
