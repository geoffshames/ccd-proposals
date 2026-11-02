"use client";

/**
 * COLIN x CROWD CONTROL DIGITAL: phased lead gen proposal (Charleston real estate).
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). Prices are CCD-proposed figures.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./colin.module.css";
import {
  PASSWORD,
  NAV,
  HERO,
  MARQUEE,
  HEARD_THESIS,
  GOALS,
  PHASE1,
  HOUSING_NOTE,
  PHASE2,
  PHASE2_TRIGGER,
  PHASES,
  PRICING_INTRO,
  PRICING,
  PHASE2_PRICE,
  FINE_PRINT,
  NEXT,
} from "@/lib/colin-charleston/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Colin x Crowd Control: next steps")}&body=${encodeURIComponent("Hey Geoff,\n\nWe're in. Brand files attached.\n\n")}`;

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

function Cards({ items, cols = 3 }: { items: { t: string; b: string; k?: string }[]; cols?: 2 | 3 | 4 }) {
  const cls = cols === 2 ? s.grid2c : cols === 4 ? s.grid4 : s.grid3;
  return (
    <div className={cls}>
      {items.map((x, i) => (
        <Reveal key={x.t} delay={(i % 4) * 0.05} className={s.card}>
          {x.k && <span className={`${s.mono} ${s.kicker}`}>{x.k}</span>}
          <h4>{x.t}</h4>
          <p>{x.b}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ----------------------------------------------------------------------------
 * Gate and chrome
 * ------------------------------------------------------------------------- */

const GATE_KEY = "colin-charleston-unlocked";

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
        <div className={s.gateTitle}>CHARLESTON</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Lead gen proposal for Colin. Enter the password to continue.
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
        <span>November 2026</span>
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
        <span className={s.mono}>Colin proposal</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={MAIL}>
        Get started
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
                    <Counter value={x.v} decimals={x.d} />
                  </span>
                  <span className={s.heroStatLabel}>{x.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>Prepared by Geoff Shames, Crowd Control Digital</span>
          <span>Charleston, SC</span>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const reduce = useReduced();
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className={s.marquee} aria-hidden="true">
      <motion.div className={s.marqueeTrack} animate={reduce ? undefined : { x: ["0%", "-33.333%"] }} transition={{ duration: 40, ease: "linear", repeat: Infinity }}>
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

function Heard() {
  return (
    <section className={s.section} id="heard">
      <Head n="01" label="What we heard" title="Where Colin is today">
        From our call on November 2. What is slowing Colin down, and what we agreed would fix it fastest.
      </Head>
      <div className={s.thesis}>
        <Reveal>
          <p className={s.thesisBig}>
            {HEARD_THESIS.big} <em>{HEARD_THESIS.em}</em>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={s.intro}>{HEARD_THESIS.body}</p>
        </Reveal>
      </div>
      <Cards items={GOALS} cols={4} />
    </section>
  );
}

function Modules({ items }: { items: { n: string; tag: string; t: string; b: string }[] }) {
  return (
    <div className={s.modGrid}>
      {items.map((m, i) => (
        <Reveal key={m.n} delay={(i % 3) * 0.05} className={s.mod}>
          <div className={s.modTop}>
            <span className={s.modN}>{m.n}</span>
            <span className={`${s.mono} ${s.dim}`}>{m.tag}</span>
          </div>
          <h3>{m.t}</h3>
          <p>{m.b}</p>
        </Reveal>
      ))}
    </div>
  );
}

function Phase1() {
  return (
    <section className={s.section} id="phase1">
      <Head n="02" label="Phase 1" title="Paid lead gen">
        Everything Colin needs to start getting real buyers and sellers on the phone. Almost all early traffic will be paid, so this is where the money should go first.
      </Head>
      <Modules items={PHASE1} />
      <div className={s.sub}>
        <Reveal>
          <div className={s.callout}>
            <strong>Built for the housing rules.</strong> {HOUSING_NOTE}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Phase2() {
  return (
    <section className={s.section} id="phase2">
      <Head n="03" label="Phase 2" title="Colin's own platform">
        Once the volume is there, it becomes a retention and value game: get more out of every lead and build an asset Colin owns.
      </Head>
      <Cards items={PHASE2} />
      <div className={s.sub}>
        <Reveal>
          <div className={s.callout}>
            <strong>When it starts.</strong> {PHASE2_TRIGGER}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className={s.section} id="timeline">
      <Head n="04" label="Timeline" title="Live in about four weeks">
        Week counts start once we have Colin&apos;s brand files and account access.
      </Head>
      <div className={s.phases4}>
        {PHASES.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05} className={s.phase}>
            <span className={`${s.mono} ${s.phaseW}`}>{p.w}</span>
            <h4>{p.t}</h4>
            <ul className={s.list}>
              {p.items.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section className={s.section} id="investment">
      <Head n="05" label="Investment" title="Investment">
        {PRICING_INTRO}
      </Head>
      <div className={s.priceGrid}>
        {PRICING.map((p, i) => (
          <Reveal key={p.t} delay={i * 0.05} className={`${s.price} ${i === 0 ? s.priceFeat : ""}`}>
            <span className={`${s.mono} ${s.kicker}`}>{p.k}</span>
            <h3>{p.t}</h3>
            <div className={s.priceV}>
              <span>{p.price}</span>
              {p.per && <small>{p.per}</small>}
            </div>
            <p>{p.b}</p>
            <span className={`${s.mono} ${s.bill}`}>{p.bill}</span>
          </Reveal>
        ))}
      </div>
      <div className={s.sub}>
        <Reveal>
          <div className={s.callout}>
            <strong>
              {PHASE2_PRICE.t}, {PHASE2_PRICE.price}.
            </strong>{" "}
            {PHASE2_PRICE.b}
          </div>
        </Reveal>
      </div>
      <p className={`${s.note} ${s.after}`}>{FINE_PRINT}</p>
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
              <b>06</b>Next steps
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
              Get started
            </a>
          </Reveal>
        </div>
      </div>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Colin and Sam, November 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function ColinClient() {
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
      <Heard />
      <div className={s.rule} />
      <Phase1 />
      <div className={s.rule} />
      <Phase2 />
      <div className={s.rule} />
      <Timeline />
      <div className={s.rule} />
      <Investment />
      <Next />
    </main>
  );
}
