"use client";

/**
 * LIZA SOBERANO / KILLSHOT x CROWD CONTROL DIGITAL: chapter 02, the launch plan.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono),
 * built on the Miami Concours page structure. All creative is AI-generated and labeled.
 */

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import s from "./ks.module.css";
import {
  A,
  PASSWORD,
  NAV,
  HERO,
  MARQUEE,
  MOMENTS,
  TIMELINE,
  PHASES,
  LEVERS,
  CLIPPING,
  PH,
  REACTIONS,
  PAID,
  FILM,
  TARGETS,
  CREATIVE,
  NEXT,
  SOURCES,
} from "@/lib/liza-killshot-launch/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("KILLSHOT launch plan")}`;
const pct = (d: number) => `${(d / TIMELINE.days) * 100}%`;

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
  const v = reduce ? value : n;
  return (
    <span ref={ref}>
      {prefix}
      {decimals ? v.toFixed(decimals) : fmt(v)}
      {suffix}
    </span>
  );
}

/** Scale-in bar: grows from 0 to `to` (0..1) when its track scrolls into view. */
function Grow({ to, axis = "x", className, style, delay = 0 }: { to: number; axis?: "x" | "y"; className?: string; style?: CSSProperties; delay?: number }) {
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
    />
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

function HBars({ rows, max, unit = "" }: { rows: { k: string; v: number; hi?: boolean }[]; max: number; unit?: string }) {
  return (
    <div className={s.hbars}>
      {rows.map((r, i) => (
        <div className={s.hbar} key={r.k} data-self={r.hi ? "" : undefined}>
          <div className={s.hbarK}>{r.k}</div>
          <div className={s.hbarT}>
            <Grow to={Math.max(0.004, r.v / max)} className={s.hbarF} delay={i * 0.06} />
          </div>
          <div className={s.hbarV}>
            {r.v}
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

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

function Phone({ vid, poster, img, alt }: { vid?: string; poster?: string; img?: string; alt?: string }) {
  return (
    <div className={s.phone}>
      <div className={s.screen} data-r="916">
        {vid ? (
          <AutoVideo src={vid} poster={poster} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={img} alt={alt ?? ""} loading="lazy" />
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Gate and chrome
 * ------------------------------------------------------------------------- */

const GATE_KEY = "ks2-unlocked";

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
        <div className={s.gateTitle}>KILLSHOT</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Liza Soberano launch plan. Enter the password to continue.
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
        <span>Chapter 02 / The launch</span>
        <span>Crowd Control Digital</span>
      </div>
    </div>
  );
}

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
        <span className={s.mono}>for Liza Soberano</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <Link className={s.navCta} href="/liza-killshot">
        Chapter 01
      </Link>
    </header>
  );
}

function Progress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div className={s.progress} style={{ scaleX: x }} />;
}

function Hero() {
  const reduce = useReduced();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.14]);
  return (
    <section className={s.hero} ref={ref} id="top">
      <motion.div className={s.heroMedia} style={{ y, scale }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={s.heroImg} src={A.hero} alt="Example key art: a woman in a black bodysuit and red scarf on a rooftop above Manila at night" />
      </motion.div>
      <div className={s.heroShade} />
      <div className={s.heroInner}>
        <Reveal>
          <div className={`${s.heroKicker} ${s.mono}`}>{HERO.kicker}</div>
        </Reveal>
        <h1 className={s.heroTitle} aria-label={HERO.title}>
          <span className={s.word} aria-hidden="true">
            <motion.span className={s.letter} initial={reduce ? false : { y: "108%" }} animate={{ y: "0%" }} transition={{ duration: 1.05, ease: EASE, delay: 0.15 }}>
              {HERO.title}
            </motion.span>
          </span>
        </h1>
        <div className={s.heroRow}>
          <Reveal delay={0.35}>
            <div className={s.heroLine}>{HERO.line}</div>
            <p className={s.heroSub}>{HERO.sub}</p>
            <Link className={`${s.chapLink} ${s.mono}`} href="/liza-killshot">
              Chapter 01: <b>The cover reveal plan</b> <span aria-hidden="true">→</span>
            </Link>
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
          <span className={s.photoCredit}>AI example key art, directional only</span>
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

function Band({ imgs }: { imgs: { src: string; alt: string }[] }) {
  return (
    <div className={s.band}>
      {imgs.map((im) => (
        <div key={im.src}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={im.src} alt={im.alt} loading="lazy" style={{ objectPosition: "50% 30%" }} />
        </div>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * 01 Moments
 * ------------------------------------------------------------------------- */

function Moments() {
  return (
    <section className={s.section} id="moments">
      <Head n="01" label="Four dates" title="Four Dates">
        Reveal, single, shoot, premiere. Each date feeds the next.
      </Head>
      <div className={`${s.sumGrid} ${s.sumGrid4}`}>
        {MOMENTS.map((m, i) => (
          <Reveal key={m.n} delay={i * 0.08} style={{ display: "flex" }}>
            <div className={s.sumCard} style={{ width: "100%", minHeight: 260 }}>
              <span className={s.mBig}>{m.n}</span>
              <span className={s.mWhen}>{m.when}</span>
              <h3>{m.head}</h3>
              <p>{m.body}</p>
              <span className={s.mGoal}>{m.goal}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>The calendar</h3>
          <span className={`${s.mono} ${s.dim}`}>Video and IP news: Tuesday, December 1</span>
        </div>
        <div className={s.tl}>
          <div className={s.tlTrack}>
            <Grow to={TIMELINE.marks[TIMELINE.marks.length - 1].d / TIMELINE.days} className={s.tlFill} style={{ right: 0 }} />
            <div className={s.tlHold} style={{ left: pct(TIMELINE.hold.from), width: pct(TIMELINE.hold.to - TIMELINE.hold.from) }} />
            {TIMELINE.marks.map((m) => (
              <div key={m.k} className={s.tlMark} data-kind={m.kind} style={{ left: pct(m.d) }} />
            ))}
            {TIMELINE.marks.map((m, i) => (
              <div
                key={`l-${m.k}`}
                className={s.tlLab}
                data-kind={m.kind}
                data-pos={m.pos}
                style={{ left: pct(m.d), transform: i === 0 ? "translateX(-10px)" : undefined, textAlign: i === 0 ? "left" : "center" }}
              >
                <b>{m.k}</b>
                <span className={s.mono}>{m.sub}</span>
              </div>
            ))}
            <div className={s.tlLab} data-kind="hold" data-pos="down" style={{ left: pct((TIMELINE.hold.from + TIMELINE.hold.to) / 2) }}>
              <b>{TIMELINE.hold.k}</b>
              <span className={s.mono}>{TIMELINE.hold.sub}</span>
            </div>
          </div>
          <div className={`${s.tlTicks} ${s.mono}`}>
            {TIMELINE.ticks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className={`${s.stats} ${s.stats3}`}>
          {TIMELINE.why.map((w) => (
            <div key={w.k}>
              <span className={s.statV}>{w.k}</span>
              <span className={s.statL}>{w.v}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 02 Plan
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
      <Head n="02" label="The plan" title="The Plan">
        Five levers, five phases. Real views from real people.
      </Head>
      <Reveal>
        <div className={s.flow} style={{ gridTemplateColumns: `repeat(${LEVERS.length}, minmax(0, 1fr))` }}>
          {LEVERS.map((n, i) => (
            <div className={s.flowNode} key={n.k}>
              <div className={s.flowHead}>
                <span className={s.flowDot} />
                {i < LEVERS.length - 1 && (
                  <span className={s.flowLine} style={{ left: 14 }}>
                    <Grow to={1} className={s.flowLineFill} delay={0.2 + i * 0.18} />
                  </span>
                )}
              </div>
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
      <div className={s.sub}>
        <Reveal>
          <div className={s.subHead}>
            <h3 className={s.h3}>Week by week</h3>
            <span className={`${s.mono} ${s.dim}`}>November 1 to December</span>
          </div>
        </Reveal>
        <div className={s.phases} ref={phasesRef} style={{ gridTemplateColumns: `repeat(${PHASES.length}, minmax(0, 1fr))` }}>
          {PHASES.map((p, i) => (
            <div className={s.phase} key={p.k} data-on={on >= i ? "" : undefined}>
              <span className={s.phaseN}>Phase {String(i + 1).padStart(2, "0")}</span>
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
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Proof row
 * ------------------------------------------------------------------------- */

function ProofRow({ items }: { items: { v: number; prefix?: string; suffix?: string; decimals?: number; label: string; note?: string; src: string }[] }) {
  return (
    <Reveal className={s.sub}>
      <div className={`${s.proofK} ${s.mono}`}>The proof</div>
      <div className={s.proofStats} style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map((p) => (
          <div key={p.label}>
            <span className={s.statV}>
              <Counter value={p.v} prefix={p.prefix} suffix={p.suffix} decimals={p.decimals} />
            </span>
            <span className={s.statL}>{p.label}</span>
            {p.note && <span className={s.pNote}>{p.note}</span>}
            <span className={`${s.pSrc} ${s.mono}`}>{p.src}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ----------------------------------------------------------------------------
 * 03 Clipping
 * ------------------------------------------------------------------------- */

function Clipping() {
  return (
    <section className={s.section} id="clipping">
      <Head n="03" label="Lever 01" title="Clipping">
        {CLIPPING.intro}
      </Head>
      <div className={s.split}>
        <Reveal>
          <div className={s.swap}>
            {CLIPPING.waves.map((w, i) => (
              <div key={w.n} style={{ display: "contents" }}>
                {i === 1 && (
                  <div className={s.swapArrow} aria-hidden="true">
                    <svg viewBox="0 0 56 56">
                      <path d="M8 28h36M34 16l12 12-12 12" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                    <span className={s.mono}>The swap</span>
                  </div>
                )}
                <div>
                  <Phone vid={w.vid === "action" ? A.actionVid : A.rooftopVid} poster={w.vid === "action" ? A.actionPoster : A.rooftopPoster} />
                  <div className={s.swapCap}>
                    <span className={`${s.mono} ${s.red}`}>
                      {w.n} / {w.when}
                    </span>
                    <h4>{w.head}</h4>
                    <p>{w.line}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className={s.h3} style={{ marginBottom: 18 }}>
            How it pays
          </h3>
          <div className={s.pills}>
            {CLIPPING.terms.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className={s.callout} style={{ marginTop: 28 }}>
            <strong>By December 1, KILLSHOT is already the action-edit song.</strong> The video gives every clipper the footage to finish the story.
          </div>
        </Reveal>
      </div>
      <ProofRow items={CLIPPING.proof} />
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 04 Philippines
 * ------------------------------------------------------------------------- */

function Philippines() {
  const p = PH.pantropiko;
  return (
    <section className={s.section} id="philippines">
      <Head n="04" label="Lever 02" title="Philippines">
        {PH.intro}
      </Head>
      <div className={s.grid2}>
        <Reveal className={s.panel}>
          <div className={s.panelHead}>
            <h4>Ad reach in the Philippines</h4>
            <span className={`${s.mono} ${s.dim}`}>Millions, 2026</span>
          </div>
          <HBars rows={PH.reach} max={100} unit="M" />
        </Reveal>
        <Reveal className={s.panel} delay={0.1}>
          <div className={s.panelHead}>
            <h4>Filipino Americans</h4>
            <span className={`${s.mono} ${s.dim}`}>Thousands, by metro</span>
          </div>
          <HBars rows={PH.diaspora.map((d, i) => ({ ...d, hi: i === 0 }))} max={520} unit="K" />
        </Reveal>
      </div>
      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Who posts</h3>
        </div>
        <div className={s.aud} style={{ gridTemplateColumns: `repeat(${PH.tiers.length}, minmax(0, 1fr))` }}>
          {PH.tiers.map((t) => (
            <div key={t.k}>
              <span className={`${s.mono} ${s.red}`}>{t.k}</span>
              <h4 style={{ marginTop: 10 }}>{t.h}</h4>
              <p>{t.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal className={s.panel}>
          <div className={`${s.proofK} ${s.mono}`}>The proof</div>
          <div className={s.panelHead}>
            <h4>{p.label}</h4>
          </div>
          <div className={s.grow2}>
            <div>
              <span className={s.grow2V}>200K</span>
              <Grow to={p.from / p.to} axis="y" className={s.grow2Bar} style={{ height: "100%" }} />
            </div>
            <div>
              <span className={`${s.grow2V} ${s.red}`}>3M+</span>
              <Grow to={1} axis="y" className={s.grow2Bar} style={{ height: "100%" }} delay={0.2} />
            </div>
          </div>
          <div className={`${s.grow2Lab} ${s.mono}`}>
            <span>January 2024</span>
            <span>April 2024</span>
          </div>
          <p className={s.note} style={{ marginTop: 14 }}>
            {p.note}. Rappler.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.stats} style={{ gridTemplateColumns: "1fr", borderBlock: 0 }}>
            {PH.stats.map((st) => (
              <div key={st.label} style={{ padding: "6px 0 26px", borderLeft: 0, borderBottom: "1px solid var(--line)" }}>
                <span className={s.statV} style={{ fontSize: "clamp(3rem, 6vw, 5.4rem)" }}>
                  <Counter value={st.v} prefix={st.prefix} suffix={st.suffix} decimals={st.decimals} />
                </span>
                <span className={s.statL}>{st.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 05 Reactions
 * ------------------------------------------------------------------------- */

function Reactions() {
  return (
    <section className={s.section} id="reactions">
      <Head n="05" label="Lever 03" title="Reactions">
        {REACTIONS.intro}
      </Head>
      <div className={s.react}>
        <Reveal>
          <div className={s.reactImg}>
            <span className={s.aiBadge}>AI example</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.reaction} alt="Example reaction video thumbnail" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={s.cal}>
            {REACTIONS.waves.map((w, i) => (
              <div className={s.calRow} key={w.k} data-self={i === 1 ? "" : undefined}>
                <b>{w.when}</b>
                <div>
                  <h4>{w.k} wave</h4>
                  <p>{w.b}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <ProofRow items={REACTIONS.proof} />
      <Reveal>
        <p className={s.note} style={{ marginTop: 16 }}>
          {REACTIONS.note}
        </p>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 06 Paid
 * ------------------------------------------------------------------------- */

function Paid() {
  const c = PAID.cpm;
  return (
    <section className={s.section} id="paid">
      <Head n="06" label="Lever 04" title="Paid Media">
        One job per platform. Paid always runs behind what is already working.
      </Head>
      <Reveal>
        <div className={s.jobs}>
          {PAID.jobs.map((j) => (
            <div key={j.k}>
              <b>{j.k}</b>
              <strong>{j.v}</strong>
              <p>{j.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <Reveal className={s.sub}>
        <div className={s.subHead}>
          <h3 className={s.h3}>Market mix</h3>
          <span className={`${s.mono} ${s.dim}`}>Video flight</span>
        </div>
        <div className={s.mix}>
          {PAID.split.map((m) => (
            <span key={m.k} style={{ width: `${m.v}%` }}>
              {m.k} {m.v}%
            </span>
          ))}
        </div>
        <div className={s.pills} style={{ marginTop: 22 }}>
          {PAID.rules.map((r) => (
            <span key={r}>{r}</span>
          ))}
        </div>
      </Reveal>
      <div className={`${s.grid2} ${s.sub}`}>
        <Reveal>
          <div className={`${s.proofK} ${s.mono}`}>Why paid stays light over the holiday</div>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>+45%</span>
              <span className={s.statL}>{c.label}</span>
            </div>
            <div>
              <span className={s.duelV}>
                €{c.before.toFixed(2)} → €{c.after.toFixed(2)}
              </span>
              <span className={s.statL}>Fall baseline to Black Friday week. {c.src}</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className={`${s.proofK} ${s.mono}`}>Why a late video works</div>
          <div className={s.duel}>
            <div>
              <span className={s.duelV}>No. 1</span>
              <span className={s.statL}>{PAID.notLikeUs.label}</span>
            </div>
            <div>
              <span className={s.duelV}>
                <Counter value={PAID.notLikeUs.v} decimals={1} suffix="M" />
              </span>
              <span className={s.statL}>Weekly streams that week. {PAID.notLikeUs.src}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 07 Film
 * ------------------------------------------------------------------------- */

function Film() {
  return (
    <section className={s.section} id="film">
      <Head n="07" label="Lever 05" title="The New IP">
        {FILM.intro}
      </Head>
      <div className={s.film}>
        <Reveal>
          <div className={s.filmImg}>
            <span className={s.aiBadge}>AI example</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={A.film} alt="Example: a creator stitching the Killer Queens announcement" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className={s.proof} style={{ marginBottom: 40 }}>
            {FILM.plays.map((x) => (
              <li key={x} style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)", fontFamily: "var(--display)", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                {x}
              </li>
            ))}
          </ul>
          <div className={`${s.proofK} ${s.mono}`}>The proof: {FILM.golden.label}</div>
          <div className={s.duel}>
            {FILM.golden.stats.map((g) => (
              <div key={g.k}>
                <span className={s.duelV}>{g.v}</span>
                <span className={s.statL}>{g.k}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 08 Target
 * ------------------------------------------------------------------------- */

function Target() {
  const [i, setI] = useState(1);
  const t = TARGETS[i];
  return (
    <section className={s.section} id="target">
      <Head n="08" label="Set the target" title="Set the Target">
        Pick the YouTube goal for the video. Liza brings about 1M on her own; the plan scales to the rest.
      </Head>
      <Reveal className={s.panel}>
        <div className={s.tgtTabs}>
          {TARGETS.map((x, j) => (
            <button key={x.v} type="button" aria-pressed={i === j} onClick={() => setI(j)}>
              {x.v} views
            </button>
          ))}
        </div>
        <div className={s.grid2} style={{ alignItems: "end" }}>
          <div>
            <div className={s.tgtV}>{t.v}</div>
            <div className={`${s.mono} ${s.dim}`} style={{ marginTop: 12 }}>
              YouTube views, first 30 days
            </div>
            <div className={s.tgtBar}>
              <span style={{ width: `${t.org}%`, background: "var(--paper)" }} />
              <span style={{ width: `${t.ph}%`, background: "var(--red)" }} />
              <span style={{ width: `${t.us}%`, background: "rgba(253,55,55,0.45)" }} />
            </div>
            <div className={`${s.tgtLeg} ${s.mono}`}>
              <span>
                <i style={{ background: "var(--paper)" }} />
                Organic
              </span>
              <span>
                <i style={{ background: "var(--red)" }} />
                Paid PH
              </span>
              <span>
                <i style={{ background: "rgba(253,55,55,0.45)" }} />
                Paid U.S.
              </span>
            </div>
          </div>
          <div>
            <h3 className={s.h3} style={{ marginBottom: 18 }}>
              {t.h}
            </h3>
            <ul className={s.need} style={{ gridTemplateColumns: "1fr" }}>
              {t.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <p className={s.note} style={{ marginTop: 16 }}>
          Planning shapes, not forecasts. Media is sized once the goal is agreed.
        </p>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 09 Creative
 * ------------------------------------------------------------------------- */

function Creative() {
  return (
    <section className={s.section} id="creative">
      <Head n="09" label="Example creative" title="Example Creative">
        The formats in this plan, in the KILLSHOT look.
      </Head>
      <Reveal>
        <div className={`${s.aiLabel} ${s.mono}`} style={{ marginBottom: 34 }}>
          <i />
          AI-generated examples, directional only
        </div>
      </Reveal>
      <div className={s.phones}>
        {CREATIVE.phones.map((ph, i) => (
          <Reveal key={ph.k} delay={i * 0.08}>
            <div className={s.phoneWrap}>
              <Phone vid={ph.vid} poster={ph.poster} img={ph.img} alt={ph.k} />
              <div className={s.phoneMeta}>
                <span className={`${s.mono} ${s.red}`}>{ph.fmt}</span>
                <h4>{ph.k}</h4>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className={`${s.stills} ${s.sub}`} style={{ gridTemplateColumns: CREATIVE.stills.map((x) => `minmax(0, ${x.fr})`).join(" ") }}>
        {CREATIVE.stills.map((st, i) => (
          <Reveal key={st.img} delay={i * 0.08}>
            <div className={s.still}>
              <div className={s.stillMedia} style={{ aspectRatio: st.ratio }}>
                <span className={s.aiBadge}>AI example</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={st.img} alt={st.line} loading="lazy" />
              </div>
              <div className={s.phoneMeta}>
                <span className={`${s.mono} ${s.red}`}>{st.k}</span>
                <h4>{st.line}</h4>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Next
 * ------------------------------------------------------------------------- */

function Next() {
  return (
    <>
      <div className={s.nextWrap} id="next">
        <div className={s.nextBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={A.rooftopPoster} alt="" />
        </div>
        <section className={`${s.section} ${s.nextInner}`}>
          <Reveal>
            <Label n="10">Next steps</Label>
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
                What we need this week
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
                {NEXT.name}, {NEXT.role}.
              </p>
              <div className={s.btns}>
                <a className={s.btn} href={MAIL}>
                  Email Geoff <span aria-hidden="true">→</span>
                </a>
                <Link className={s.btnGhost} href="/liza-killshot">
                  Chapter 01
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <section className={s.section} style={{ paddingTop: 40 }}>
        <details className={s.sources}>
          <summary className={s.mono}>Sources</summary>
          <ol>
            {SOURCES.map((x) => (
              <li key={x.u}>
                <a className={s.refLink} href={x.u} target="_blank" rel="noreferrer">
                  {x.t}
                </a>
              </li>
            ))}
          </ol>
          <p className={s.note} style={{ marginTop: 18 }}>
            Instagram follower count from a third-party tracker, October 2026. The Black Friday CPM figure is vendor data. Tier-one reactor scale refers to channels like MoistCr1TiKaL (about 18M subscribers); no booking is implied. Example creative was generated with AI for this plan and is directional only.
          </p>
        </details>
      </section>
      <footer className={`${s.footer} ${s.mono}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span>Prepared for Liza Soberano by Crowd Control Digital</span>
        <span>October 2026</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function KillshotLaunchClient() {
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
      <Moments />
      <Band
        imgs={[
          { src: A.hero, alt: "Example key art: rooftop above Manila" },
          { src: A.actionPoster, alt: "Example wave 1 action scene" },
          { src: A.rooftopPoster, alt: "Example official-video frame" },
          { src: A.metaAd, alt: "Example out-now feed ad" },
        ]}
      />
      <Plan />
      <div className={s.rule} />
      <Clipping />
      <div className={s.rule} />
      <Philippines />
      <div className={s.rule} />
      <Reactions />
      <div className={s.rule} />
      <Paid />
      <div className={s.rule} />
      <Film />
      <div className={s.rule} />
      <Target />
      <div className={s.rule} />
      <Creative />
      <Next />
    </main>
  );
}
