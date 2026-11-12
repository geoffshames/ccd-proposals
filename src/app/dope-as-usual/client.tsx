"use client";

/**
 * DOPE AS USUAL x CROWD CONTROL DIGITAL: podcast growth proposal.
 * CCD brand system (#0A0A0A / #FAFAFA / #FD3737, N27 display, Work Sans, Geist Mono).
 * Password gated (sessionStorage). Strategy only, no pricing.
 * Example creative is AI-generated and labeled as such. Episode thumbnails are the show's own.
 */

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties, type FormEvent, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import s from "./dau.module.css";
import {
  PASSWORD,
  EMAIL,
  NAV,
  HERO,
  SHOW_THESIS,
  SHOW_STATS,
  ROLES,
  VIEWS_BY_YEAR,
  TOP_EPISODES,
  PLATFORMS,
  PEERS,
  FINDINGS,
  PILLARS,
  MOMENT,
  PLAN,
  CREATIVE_INTRO,
  CREATIVE,
  CREATIVE_RULES,
  VIDEO,
  SPONSOR_CATS,
  DEALS,
  TARGETS,
  PHASES,
  AGENCY,
  NEXT,
  SOURCES,
} from "@/lib/dope-as-usual/content";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const short = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(n >= 1e7 ? 0 : 1)}M` : n >= 1e3 ? `${Math.round(n / 1e3)}K` : `${n}`);
const MAIL = `mailto:${EMAIL}?subject=${encodeURIComponent("Dope As Usual x Crowd Control")}&body=${encodeURIComponent("Hey Geoff,\n\nLet's set up the working session.\n\n")}`;
const GATE_KEY = "dope-as-usual-unlocked";
const HERO_WALL = ["89WeV5A1xow", "LffWWD3G1P8", "7w4s5MUIeM0", "h_yo27dtxRU", "dHEQa974g64", "RGTz0trC4ug", "3gdcEZrfnwM", "ez5_nFYT0AI", "0Yp_0ruodlQ", "3hqMIx45LtI", "I_fa6a085Uw", "WKD4K2nZ53A", "RSkOrn7wM3Y", "89WeV5A1xow", "LffWWD3G1P8", "7w4s5MUIeM0"];

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

function Grow({ pct, className, axis = "x", delay = 0 }: { pct: number; className?: string; axis?: "x" | "y"; delay?: number }) {
  const reduce = useReduced();
  const style: CSSProperties = axis === "x" ? { width: `${pct}%` } : { height: `${pct}%` };
  const from = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
  const to = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  return <motion.i className={className} style={style} initial={reduce ? to : from} whileInView={to} viewport={{ once: true, margin: "-10% 0px" }} transition={{ duration: 1.1, ease: EASE, delay }} />;
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
        <div className={s.gateTitle}>DOPE AS USUAL</div>
        <div className={s.gateBar} />
        <p className={s.intro} style={{ marginBottom: 26 }}>
          Podcast growth proposal. Enter the password to continue.
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
        Talk To Us
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
        <div className={s.heroWall}>
          {HERO_WALL.map((id, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${id}-${i}`} src={`/images/dope-as-usual/thumbs/${id}.jpg`} alt="" />
          ))}
        </div>
        <div className={s.heroWallShade} />
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
          <span className={s.aiTag}>Strategy proposal</span>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Sections
 * ------------------------------------------------------------------------- */

function Show() {
  return (
    <section className={s.section} id="show">
      <Head n="01" label="The show" title="What you built">
        Independent from day one, weekly for five years, and still charting. Here is the asset as we see it.
      </Head>
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
      <StatRow items={SHOW_STATS} />
      <div className={s.sub}>
        <Reveal>
          <div className={s.roles}>
            {ROLES.map((r) => (
              <div key={r.t}>
                <span className={`${s.mono} ${s.kicker}`}>{r.k}</span>
                <h3>{r.t}</h3>
                <p>{r.b}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function YearChart() {
  const max = Math.max(...VIEWS_BY_YEAR.map((d) => d.median));
  return (
    <div className={s.chartCard}>
      <div className={s.chartTitle}>
        <h3>Median views per full episode</h3>
        <span className={s.mono}>YouTube, by year</span>
      </div>
      <div className={s.cols} style={{ gridTemplateColumns: `repeat(${VIEWS_BY_YEAR.length}, minmax(0, 1fr))` }}>
        {VIEWS_BY_YEAR.map((d, i) => (
          <div key={d.y} className={s.col}>
            <motion.div
              className={`${s.colBar} ${i === 0 ? s.colBarRed : ""}`}
              style={{ height: `${(d.median / max) * 100}%` }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1, ease: EASE, delay: i * 0.06 }}
            >
              <span className={s.colVal}>{short(d.median)}</span>
            </motion.div>
          </div>
        ))}
      </div>
      <div className={s.colAxis} style={{ gridTemplateColumns: `repeat(${VIEWS_BY_YEAR.length}, minmax(0, 1fr))` }}>
        {VIEWS_BY_YEAR.map((d) => (
          <span key={d.y}>
            {d.y}
            <br />
            <span className={s.dim}>{d.eps} eps</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TopEpisodes() {
  const max = TOP_EPISODES[0].v;
  return (
    <div className={s.chartCard}>
      <div className={s.chartTitle}>
        <h3>Ten most watched episodes</h3>
        <span className={s.mono}>All time</span>
      </div>
      <div className={s.topList}>
        {TOP_EPISODES.map((e, i) => (
          <a key={e.id} className={s.topRow} href={`https://www.youtube.com/watch?v=${e.id}`} target="_blank" rel="noreferrer">
            <span>{String(i + 1).padStart(2, "0")}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/dope-as-usual/thumbs/${e.id}.jpg`} alt="" loading="lazy" />
            <span className={s.topMid}>
              <b>{e.t}</b>
              <span className={s.topTrack}>
                <Grow pct={(e.v / max) * 100} className={`${s.topFill} ${i === 0 ? s.topFillHi : ""}`} delay={i * 0.04} />
              </span>
            </span>
            <span className={s.topV}>{short(e.v)}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function PeerChart() {
  const maxP = Math.max(...PEERS.map((p) => p.posts));
  const maxF = Math.max(...PEERS.map((p) => p.followers));
  return (
    <div className={s.chartCard}>
      <div className={s.chartTitle}>
        <h3>TikTok: volume is the gap</h3>
        <span className={s.mono}>Posts and followers</span>
      </div>
      <div className={s.peer}>
        {PEERS.map((p) => (
          <div key={p.k} className={`${s.peerRow} ${p.me ? s.peerMe : ""}`}>
            <div className={s.peerHead}>
              <b>{p.k}</b>
            </div>
            <div className={s.peerBars}>
              <div className={s.peerBar}>
                <span className={s.peerTrack}>
                  <Grow pct={(p.posts / maxP) * 100} />
                </span>
                <em>{fmt(p.posts)} posts</em>
              </div>
              <div className={s.peerBar}>
                <span className={s.peerTrack}>
                  <Grow pct={(p.followers / maxF) * 100} delay={0.1} />
                </span>
                <em>{short(p.followers)} followers</em>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={`${s.note} ${s.after}`}>Comedy podcasts that win on TikTok post daily, often several times a day. The volume comes from clipping the episodes they already record.</p>
    </div>
  );
}

function Found() {
  return (
    <section className={s.section} id="found">
      <Head n="02" label="What we found" title="Where the reach is">
        We audited all 290 episodes, every platform and the full guest list. Six findings shape the plan.
      </Head>
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
      <div className={s.sub}>
        <div className={s.chartGrid}>
          <Reveal>
            <YearChart />
          </Reveal>
          <Reveal delay={0.08}>
            <TopEpisodes />
          </Reveal>
        </div>
      </div>
      <div className={s.sub}>
        <div className={s.grid2c}>
          {FINDINGS.map((x, i) => (
            <Reveal key={x.t} delay={(i % 2) * 0.05} className={s.card}>
              <span className={`${s.mono} ${s.kicker}`}>{x.k}</span>
              <h4>{x.t}</h4>
              <p>{x.b}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={s.sub}>
        <div className={s.chartGrid}>
          <Reveal>
            <PeerChart />
          </Reveal>
          <Reveal delay={0.08}>
            <div className={s.callout}>
              <strong>The opportunity in one line:</strong> the show does not need a new format or a new audience. It needs the moments it already records, from this week and from the last five years, in front of people every single day, and a way to keep those people once they find you.
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <section className={s.section} id="strategy">
      <Head n="03" label="Strategy" title="Five pillars">
        Reach first, then ownership, then money. Each pillar feeds the next, and the episode stays exactly the show you make today.
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
        Nine workstreams across growth, catalog, the list, consulting, sponsorship and partnerships. Start with all of them or start with clipping and add the rest.
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
      </div>
    </section>
  );
}

function CreativeCard({ c, i }: { c: (typeof CREATIVE)[number]; i: number }) {
  const cls = c.w === "half" ? s.crHalf : c.w === "c3" ? s.cr3 : s.cr4;
  return (
    <Reveal delay={(i % 2) * 0.06} className={`${s.crItem} ${cls}`}>
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
}

function Creative() {
  const [vault, reunion, clip, sponsor, poster] = CREATIVE;
  return (
    <section className={s.section} id="creative">
      <Head n="05" label="Example creative" title="First look">
        {CREATIVE_INTRO}
      </Head>
      <div className={s.crGrid}>
        <CreativeCard c={vault} i={0} />
        <CreativeCard c={reunion} i={1} />
        <CreativeCard c={sponsor} i={0} />
        <Reveal delay={0.06} className={`${s.crItem} ${s.crHalf}`}>
          <div className={s.crMedia}>
            <video src={VIDEO.src} poster={VIDEO.poster} autoPlay muted loop playsInline controls preload="metadata" />
            <span className={s.aiBadge}>AI example</span>
          </div>
          <span className={`${s.mono} ${s.kicker}`}>Motion</span>
          <h4>{VIDEO.t}</h4>
          <p>{VIDEO.b}</p>
        </Reveal>
        <CreativeCard c={clip} i={0} />
        <CreativeCard c={poster} i={1} />
        <Reveal delay={0.1} className={`${s.crRules} ${s.cr5}`}>
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
      <p className={`${s.note} ${s.after}`}>All example creative on this page is AI-generated and directional only. Episode thumbnails elsewhere on the page are the show&apos;s own.</p>
    </section>
  );
}

function Deal() {
  return (
    <section className={s.section} id="deal">
      <Head n="06" label="Sponsorship and partnerships" title="Turning reach into revenue">
        A sponsor deck that counts the whole audience, categories that fit the show, and the platform and licensing conversations that open up once the numbers move.
      </Head>
      <div className={s.cats}>
        {SPONSOR_CATS.map((c, i) => (
          <Reveal key={c.t} delay={(i % 3) * 0.05}>
            <b>{c.t}</b>
            <p>{c.b}</p>
          </Reveal>
        ))}
      </div>
      <div className={s.sub}>
        <Reveal className={s.subHead}>
          <h3 className={s.h3}>Platform and network paths</h3>
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

function Timeline() {
  return (
    <section className={s.section} id="timeline">
      <Head n="07" label="Targets and timeline" title="The first 90 days">
        Clips are live inside three weeks. Sponsor and platform conversations start once there is new data to bring into the room.
      </Head>
      <StatRow items={TARGETS} />
      <p className={`${s.note} ${s.after}`}>Directional targets, not guarantees. They depend on posting volume, approval speed and platform changes.</p>
      <div className={s.sub}>
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
      </div>
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
            <a className={s.btn} href={MAIL}>
              Talk To Us
            </a>
          </Reveal>
        </div>
      </div>
      <ul className={s.sources}>
        {SOURCES.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <footer className={s.footer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        <span className={s.mono}>Confidential. Prepared for Dope As Usual, November 2026.</span>
      </footer>
    </>
  );
}

/* ----------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

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
      <Progress />
      <TopBar />
      <Hero />
      <Show />
      <div className={s.rule} />
      <Found />
      <div className={s.rule} />
      <Strategy />
      <div className={s.rule} />
      <Plan />
      <div className={s.rule} />
      <Creative />
      <div className={s.rule} />
      <Deal />
      <div className={s.rule} />
      <Timeline />
      <div className={s.rule} />
      <Agency />
      <Next />
    </main>
  );
}
