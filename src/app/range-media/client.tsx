"use client";

/**
 * RANGE MEDIA PARTNERS x CROWD CONTROL DIGITAL: content intelligence build proposal.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). Scope and pricing are placeholders until Range's wishlist lands.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./range.module.css";
import {
  PASSWORD,
  NAV,
  HERO,
  MARQUEE,
  HEARD_THESIS,
  GOALS,
  QUOTES,
  MODULES,
  ADDONS,
  PROOF,
  VIEWS,
  DATA,
  HONEST,
  SCOPE_INTRO,
  SCOPE_ROWS,
  NEED,
  INCLUDED,
  EXCLUDED,
  PHASES,
  AFTER,
  PRICING_INTRO,
  PRICING,
  WHY,
  NEXT,
} from "@/lib/range-media/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${NEXT.email}?subject=${encodeURIComponent("Range OS: wishlist and next steps")}&body=${encodeURIComponent("Hey Geoff,\n\nHere's our wishlist for the build.\n\n")}`;

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

function SubHead({ title, aside }: { title: string; aside?: string }) {
  return (
    <div className={s.subHead}>
      <h3 className={s.h3}>{title}</h3>
      {aside && <span className={`${s.mono} ${s.dim}`}>{aside}</span>}
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

const GATE_KEY = "range-media-unlocked";

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
        <div className={s.gateTitle}>RANGE</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Content intelligence proposal. Enter the password to continue.
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
        <span className={s.mono}>Range proposal</span>
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={MAIL}>
        Send the wishlist
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
                    <Counter value={x.v} decimals={x.d} suffix={"suf" in x ? x.suf : ""} />
                  </span>
                  <span className={s.heroStatLabel}>{x.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>Prepared by Geoff Shames, Crowd Control Digital</span>
          <span>Draft. Scope and pricing follow Range&apos;s wishlist</span>
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
      <Head n="01" label="What we heard" title="What you asked for">
        From our call on October 30 with Stephanie, Federico and Angelo. Four goals, in your words as close as we could keep them.
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
      <div className={s.sub}>
        <div className={s.quotes}>
          {QUOTES.map((x) => (
            <Reveal key={x.q} className={s.quote}>
              <p>{x.q}</p>
              <span className={`${s.mono} ${s.dim}`}>{x.by}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Build() {
  return (
    <section className={s.section} id="build">
      <Head n="02" label="The build" title="What we build">
        Six modules in one Range-specific system. Each artist is switched on or off, and every module feeds the same corpus, so the system gets smarter the longer it runs.
      </Head>
      <div className={s.modGrid}>
        {MODULES.map((m, i) => (
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
      <div className={s.sub}>
        <SubHead title="Optional add-ons" aside="Quoted separately if outside V1" />
        <Cards items={ADDONS} />
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className={s.section} id="proof">
      <Head n="03" label="Proof" title="The Shaboozey teardown">
        {PROOF.intro}
      </Head>
      <div className={s.stats}>
        {PROOF.stats.map((x) => (
          <div key={x.v}>
            <span className={s.statV}>{x.v}</span>
            <span className={s.statL}>{x.l}</span>
          </div>
        ))}
      </div>
      <div className={s.sub}>
        <Cards items={PROOF.takeaways} />
        <Reveal>
          <a className={s.proofLink} href={PROOF.url} target="_blank" rel="noreferrer">
            <b>Open the full teardown</b>
            <span className={s.mono}>
              Password <span className={s.red}>{PROOF.password}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function How() {
  return (
    <section className={s.section} id="how">
      <Head n="04" label="How it works" title="Three ways in">
        One system, three ways to use it, from a head-of-digital view across the roster down to a ping in Slack.
      </Head>
      <Cards items={VIEWS} />
      <div className={s.sub}>
        <SubHead title="What it reads" aside="Sources" />
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Source</th>
                <th>What it adds</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((d) => (
                <tr key={d.src}>
                  <td>
                    <strong>{d.src}</strong>
                  </td>
                  <td>{d.what}</td>
                  <td className={s.num}>{d.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={s.sub}>
        <SubHead title="Where we are honest about limits" />
        <Cards items={HONEST} />
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section className={s.section} id="scope">
      <Head n="05" label="Scope" title="Artists and genres">
        {SCOPE_INTRO}
      </Head>
      <Reveal>
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Genre</th>
                <th>Affinity set</th>
                <th>Who sees it</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {SCOPE_ROWS.map((r, i) => {
                const pend = r.status === "Pending";
                return (
                  <tr key={i}>
                    <td className={pend ? s.pending : undefined}>{pend ? r.artist : <strong>{r.artist}</strong>}</td>
                    <td className={pend ? s.pending : undefined}>{r.genre}</td>
                    <td className={pend ? s.pending : undefined}>{r.affinity}</td>
                    <td className={pend ? s.pending : undefined}>{r.view}</td>
                    <td>{pend ? <span className={s.tbd}>Wishlist</span> : <span className={s.sev}>{r.status}</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>
      <div className={s.sub}>
        <div className={s.grid2}>
          <Reveal>
            <SubHead title="What we need from Range" />
            <ul className={s.list}>
              {NEED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className={s.callout}>
              <strong>Napkin is fine.</strong> A dream list by artist and genre, plus what you want artist teams to see, is enough for us to come back with what is V1, what is V2, and anything that cannot be done and why.
            </div>
          </Reveal>
        </div>
      </div>
      <div className={s.sub}>
        <div className={s.inEx}>
          <Reveal>
            <h3 className={s.h3}>Included</h3>
            <ul className={s.list}>
              {INCLUDED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className={s.h3}>Not included</h3>
            <ul className={`${s.list} ${s.listX}`}>
              {EXCLUDED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className={s.section} id="timeline">
      <Head n="06" label="Timeline" title="Twelve weeks to V1">
        Much of the tooling already runs for our own clients, so the time goes into fitting it to Range, not building from zero. Week counts start at kickoff and assume the wishlist and access land in the first two weeks.
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
      <p className={`${s.note} ${s.after}`}>{AFTER}</p>
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
              <span className={s.tbd}>{p.price}</span>
              {p.per && <small>{p.per}</small>}
            </div>
            <p>{p.b}</p>
            <span className={`${s.mono} ${s.bill}`}>{p.bill}</span>
          </Reveal>
        ))}
      </div>
      <p className={`${s.note} ${s.after}`}>Third-party data and video AI usage at Range&apos;s scale is either included in the monthly fee or passed through at cost, to be confirmed with the final numbers.</p>
    </section>
  );
}

function Why() {
  return (
    <section className={s.section} id="why">
      <Head n="08" label="Crowd Control" title="Why Crowd Control" />
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
              <b>09</b>Next steps
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
              Send the wishlist
            </a>
          </Reveal>
        </div>
      </div>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Range Media Partners, October 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function RangeMediaClient() {
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
      <Build />
      <div className={s.rule} />
      <Proof />
      <div className={s.rule} />
      <How />
      <div className={s.rule} />
      <Scope />
      <div className={s.rule} />
      <Timeline />
      <div className={s.rule} />
      <Investment />
      <div className={s.rule} />
      <Why />
      <Next />
    </main>
  );
}
