"use client";

/**
 * HASS DENIRO x CROWD CONTROL DIGITAL: personal brand proposal.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). Example imagery is AI-generated and labeled as such.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./hass.module.css";
import {
  PASSWORD,
  EMAIL,
  NAV,
  HERO,
  HEARD_THESIS,
  GOALS,
  FOUND_STATS,
  FINDINGS,
  PILLARS,
  MOMENT,
  PLAN,
  PHOTO_NOTE,
  PREVIEW,
  TARGETS,
  PHASES,
  PRICING_INTRO,
  PRICING,
  TOTAL,
  FINE_PRINT,
  NEXT,
  AGENCY,
} from "@/lib/hass-deniro/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent("Hass DeNiro x Crowd Control: approved")}&body=${encodeURIComponent("Hey Geoff,\n\nLet's go.\n\n")}`;
const GATE_KEY = "hass-deniro-unlocked";

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

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReduced();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.6, ease: EASE, onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value]);
  return (
    <span ref={ref}>
      {fmt(reduce ? value : n)}
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

function Cards({ items, cols = 4 }: { items: { t: string; b: string; k?: string }[]; cols?: 2 | 4 }) {
  return (
    <div className={cols === 2 ? s.grid2c : s.grid4}>
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
 * Gate and chrome
 * ------------------------------------------------------------------------- */

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
        <div className={s.gateTitle}>HASS DENIRO</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Personal brand proposal. Enter the password to continue.
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
      </a>
      <nav className={s.navLinks} aria-label="Sections">
        {NAV.map((n) => (
          <a key={n.id} href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className={s.navCta} href={MAIL}>
        Approve
      </a>
    </header>
  );
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className={s.hero} id="top">
      <div className={s.heroMedia} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hass-deniro/hero.jpg" alt="" />
        <div className={s.heroImgShade} />
      </div>
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
                    <Counter value={x.v} suffix={x.suffix} />
                  </span>
                  <span className={s.heroStatLabel}>{x.l}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className={`${s.heroMeta} ${s.mono}`}>
          <span>Prepared by Geoff Shames, Crowd Control Digital</span>
          <span className={s.aiTag}>Imagery: AI examples</span>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Sections
 * ------------------------------------------------------------------------- */

function Heard() {
  return (
    <section className={s.section} id="heard">
      <Head n="01" label="What we heard" title="Where you are today">
        From our call on November 10: why now, what the brand should feel like, and the line it should never cross.
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
      <Cards items={GOALS} />
    </section>
  );
}

function Found() {
  return (
    <section className={s.section} id="found">
      <Head n="02" label="What we found" title="What people find today">
        We searched your name the way an agent, venue partner or journalist would before a first call, and looked at every place your story could live.
      </Head>
      <StatRow items={FOUND_STATS} />
      <div className={s.sub}>
        <Cards items={FINDINGS} cols={2} />
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <section className={s.section} id="strategy">
      <Head n="03" label="Strategy" title="Four pillars">
        Findable first, then credible, then present. Every piece points back to one site, one spelling and one story.
      </Head>
      <Cards items={PILLARS} />
      <div className={s.sub}>
        <Reveal>
          <div className={s.moment}>
            <div>
              <span className={`${s.mono} ${s.kicker}`}>{MOMENT.k}</span>
              <h3 className={s.momentT}>{MOMENT.t}</h3>
              <p className={s.momentB}>{MOMENT.b}</p>
            </div>
            <div>
              <ol className={s.mSteps}>
                {MOMENT.steps.map((x, i) => (
                  <li key={x}>
                    <span>0{i + 1}</span>
                    {x}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Plan() {
  return (
    <section className={s.section} id="plan">
      <Head n="04" label="The plan" title="What we deliver">
        We act as your brand manager: we build the foundation, then run it every week. You send us the moments; we turn them into the profile.
      </Head>
      <div className={s.modGrid}>
        {PLAN.map((m, i) => (
          <Reveal key={m.n} delay={(i % 3) * 0.05} className={s.mod}>
            <div className={s.modTop}>
              <span className={s.modN}>{m.n}</span>
              <span className={`${s.mono} ${s.dim}`}>{m.tag}</span>
            </div>
            <h3>{m.t}</h3>
            <p>{m.b}</p>
          </Reveal>
        ))}
        <Reveal delay={0.1} className={s.mod}>
          <div className={s.modTop}>
            <span className={s.modN}>09</span>
            <span className={`${s.mono} ${s.dim}`}>Shoot</span>
          </div>
          <h3>Photo direction</h3>
          <p>{PHOTO_NOTE}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Preview() {
  const site = PREVIEW.site;
  return (
    <section className={s.section} id="preview">
      <Head n="05" label="First look" title="Site and feed">
        {PREVIEW.intro}
      </Head>
      <Reveal>
        <div className={s.browser}>
          <div className={s.browserBar}>
            <div className={s.browserDots} aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className={s.browserUrl}>hassdeniro.com</div>
          </div>
          <div className={s.site}>
            <div className={s.siteBg} aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hass-deniro/hero.jpg" alt="" loading="lazy" />
            </div>
            <div className={s.siteTop}>
              <span className={s.siteMark}>
                Hass DeNiro<b>.</b>
              </span>
              <div className={s.siteNav}>
                {site.nav.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
            <div className={s.siteMid}>
              <div className={`${s.mono} ${s.siteKicker}`}>{site.kicker}</div>
              <div className={s.siteName}>Hass DeNiro</div>
              <p className={s.siteLine}>{site.line}</p>
            </div>
            <div className={s.siteCols}>
              {site.cols.map((c) => (
                <div key={c.k}>
                  <span className={s.mono}>{c.k}</span>
                  <b>{c.t}</b>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
      <div className={s.sub}>
        <div className={s.posts}>
          {PREVIEW.posts.map((p, i) => (
            <Reveal key={p.img} delay={i * 0.06} className={s.post}>
              <div className={s.postHead}>
                <span className={s.postAvatar}>HD</span>
                <b>hassdeniro</b>
              </div>
              <div className={s.postImg}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={`${p.t} example post`} loading="lazy" />
              </div>
              <div className={s.postBody}>
                <span className={`${s.mono} ${s.kicker}`}>
                  {p.k} <span className={s.dim}>/ AI example</span>
                </span>
                <h4>{p.t}</h4>
                <p>{p.cap}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className={`${s.note} ${s.after}`}>Images on this page are AI-generated examples of the mood and format. Real posts use your own photos and moments.</p>
      </div>
    </section>
  );
}

function Targets() {
  return (
    <section className={s.section} id="targets">
      <Head n="06" label="Targets" title="What success looks like">
        Measured monthly and shown in a simple report: search results, AI answers, appearances, followers and list growth.
      </Head>
      <StatRow items={TARGETS} />
      <p className={`${s.note} ${s.after}`}>Directional targets, not guarantees. Press placements depend on the news cycle and the publicist&apos;s pitch.</p>
    </section>
  );
}

function Timeline() {
  return (
    <section className={s.section} id="timeline">
      <Head n="07" label="Timeline" title="Live in four weeks">
        Week one starts with the story session. The interview is timed to land after the site is live and before the festival announcement.
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
      <Head n="08" label="Investment" title="Investment">
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
      <Reveal>
        <div className={s.total}>
          <span className={`${s.mono} ${s.dim}`}>{TOTAL.k}</span>
          <b>{TOTAL.v}</b>
          <p>{TOTAL.b}</p>
        </div>
      </Reveal>
      <div className={s.sub}>
        <Reveal>
          <a className={s.btn} href={MAIL}>
            Approve the plan
          </a>
        </Reveal>
      </div>
      <p className={`${s.note} ${s.after}`}>{FINE_PRINT}</p>
    </section>
  );
}

function Agency() {
  return (
    <section className={s.section} id="agency">
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
              Talk To Us
            </a>
          </Reveal>
        </div>
      </div>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Hass DeNiro, November 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

export default function HassDeniroClient() {
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
      <Heard />
      <div className={s.rule} />
      <Found />
      <div className={s.rule} />
      <Strategy />
      <div className={s.rule} />
      <Plan />
      <div className={s.rule} />
      <Preview />
      <div className={s.rule} />
      <Targets />
      <div className={s.rule} />
      <Timeline />
      <div className={s.rule} />
      <Investment />
      <div className={s.rule} />
      <Agency />
      <Next />
    </main>
  );
}
