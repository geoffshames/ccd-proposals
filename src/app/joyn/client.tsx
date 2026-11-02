"use client";

/**
 * JOYN x CROWD CONTROL DIGITAL: customer acquisition proposal.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Example creative is AI-generated and labeled as such.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./joyn.module.css";
import {
  STRIPE,
  NAV,
  HERO,
  MARQUEE,
  HEARD_THESIS,
  GOALS,
  RESEARCH_STATS,
  FINDINGS,
  COMPETITORS,
  PLAN,
  AI_NOTE,
  CREATIVE_INTRO,
  CREATIVE,
  TARGETS,
  PHASES,
  PRICING_INTRO,
  PRICING,
  FINE_PRINT,
  NEXT,
} from "@/lib/joyn/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("JOYN x Crowd Control: next steps")}&body=${encodeURIComponent("Hey Geoff,\n\nWe're in.\n\n")}`;

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

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value]);
  return <span ref={ref}>{fmt(reduce ? value : n)}</span>;
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

function StatRow({ items }: { items: { v: string; l: string }[] }) {
  return (
    <Reveal>
      <div className={s.stats}>
        {items.map((x) => (
          <div key={x.l}>
            <span className={s.statV}>{x.v}</span>
            <span className={s.statL}>{x.l}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

/* ----------------------------------------------------------------------------
 * Chrome
 * ------------------------------------------------------------------------- */

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
        <span className={s.mono}>JOYN proposal</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={STRIPE} target="_blank" rel="noopener noreferrer">
        Approve
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
                    <Counter value={x.v} />
                  </span>
                  <span className={s.heroStatLabel}>{x.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>Prepared by Geoff Shames, Crowd Control Digital</span>
          <span>South Florida</span>
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
      <Head n="01" label="What we heard" title="Where JOYN is today">
        From our call on November 2. What is working, what is holding growth back, and the goal we agreed on.
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

function Research() {
  return (
    <section className={s.section} id="research">
      <Head n="02" label="Research" title="What we found">
        We audited joynpro.com, pulled the complaints South Florida pool owners repeat about pool service, and mapped who else is competing for them.
      </Head>
      <StatRow items={RESEARCH_STATS} />
      <div className={s.sub}>
        <Cards items={FINDINGS} cols={4} />
      </div>
      <div className={s.sub}>
        <Reveal>
          <div className={s.tableWrap}>
            <table className={s.table}>
              <thead>
                <tr>
                  <th>Competitor</th>
                  <th>What they do well</th>
                  <th>Where JOYN wins</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c) => (
                  <tr key={c.n}>
                    <td>
                      <strong>{c.n}</strong>
                    </td>
                    <td>{c.good}</td>
                    <td>{c.win}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
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

function Plan() {
  return (
    <section className={s.section} id="plan">
      <Head n="03" label="The plan" title="Pages, ads, offer">
        Every ad and page says one thing end to end. The person who clicks because their pool guy ghosted them lands on a page about exactly that, and downloads JOYN to book.
      </Head>
      <Modules items={PLAN} />
      <div className={s.sub}>
        <Reveal>
          <div className={s.callout}>
            <strong>The creative is AI-made.</strong> {AI_NOTE}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Creative() {
  return (
    <section className={s.section} id="creative">
      <Head n="04" label="Example creative" title="Example Creative">
        {CREATIVE_INTRO}
      </Head>
      <div className={s.cGrid}>
        {CREATIVE.map((c, i) => (
          <Reveal key={c.img} delay={i * 0.06} className={`${s.cItem} ${s.cTall}`}>
            <div className={s.cMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={`${c.t} example ad`} loading="lazy" />
            </div>
            <span className={`${s.mono} ${s.kicker}`}>
              {c.k} <span className={s.dim}>/ AI example</span>
            </span>
            <h4>{c.t}</h4>
            <p>{c.b}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Targets() {
  return (
    <section className={s.section} id="targets">
      <Head n="05" label="Targets" title="What we're aiming at">
        A recurring weekly customer is worth about $11 a week to JOYN, roughly $570 a year at 2% churn. These targets keep acquisition well inside that.
      </Head>
      <StatRow items={TARGETS} />
      <p className={`${s.note} ${s.after}`}>Directional targets based on JOYN&apos;s unit economics and category benchmarks, not guarantees.</p>
    </section>
  );
}

function Timeline() {
  return (
    <section className={s.section} id="timeline">
      <Head n="06" label="Timeline" title="Live in two weeks">
        Week counts start once we have Meta Business access and the offer is agreed.
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
      <Head n="07" label="Investment" title="Investment">
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
          <a className={s.btn} href={STRIPE} target="_blank" rel="noopener noreferrer">
            Approve and pay $5,000 setup
          </a>
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
              <b>08</b>Next steps
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
            <a className={s.btn} href={STRIPE} target="_blank" rel="noopener noreferrer">
              Approve and pay
            </a>{" "}
            <a className={s.btnLink} href={MAIL}>
              Questions? Email Geoff
            </a>
          </Reveal>
        </div>
      </div>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Jaqueline and Sam, November 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function JoynClient() {
  return (
    <main className={s.page}>
      <Progress />
      <TopBar />
      <Hero />
      <Marquee />
      <Heard />
      <div className={s.rule} />
      <Research />
      <div className={s.rule} />
      <Plan />
      <div className={s.rule} />
      <Creative />
      <div className={s.rule} />
      <Targets />
      <div className={s.rule} />
      <Timeline />
      <div className={s.rule} />
      <Investment />
      <Next />
    </main>
  );
}
