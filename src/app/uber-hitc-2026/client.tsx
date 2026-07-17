"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  CarFront,
  Check,
  ChevronRight,
  ExternalLink,
  Eye,
  Info,
  MapPin,
  Menu,
  Route,
  Target,
  X,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  type MotionValue,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from "react";
import {
  activationSteps,
  audienceSignals,
  flight,
  investment,
  officialArt,
  pillars,
  platforms,
  precedents,
  scenarios,
  sources,
} from "@/lib/uber-hitc-2026";
import styles from "./uber-hitc.module.css";

const navItems = [
  ["Idea", "#idea"],
  ["Experience", "#experience"],
  ["Audience", "#audience"],
  ["Media", "#media"],
  ["Forecast", "#forecast"],
  ["Investment", "#investment"],
] as const;

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

function SectionHeader({
  number,
  eyebrow,
  title,
  body,
  children,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionCode}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2>{title}</h2>
        {body ? <p>{body}</p> : null}
      </div>
      {children}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SourceButton({ id, open }: { id: string; open: (id: string) => void }) {
  return (
    <button type="button" className={styles.sourceButton} onClick={() => open(id)} aria-label="Open supporting source">
      <Info size={12} aria-hidden="true" /> Source
    </button>
  );
}

function RouteRail({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className={styles.routeRail} aria-hidden="true">
      <div className={styles.routeRailTrack}>
        <motion.span style={{ scaleY: progress }} />
        <i className={styles.railNodeOne} />
        <i className={styles.railNodeTwo} />
        <i className={styles.railNodeThree} />
      </div>
      <span>RIDE</span>
      <span>ARRIVE</span>
    </div>
  );
}

function HeroRoad() {
  const reduce = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const move = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const box = event.currentTarget.getBoundingClientRect();
    setPosition({
      x: ((event.clientX - box.left) / box.width - 0.5) * 2,
      y: ((event.clientY - box.top) / box.height - 0.5) * 2,
    });
  };

  const heroStyle = {
    "--road-x": `${position.x * 7}deg`,
    "--road-y": `${position.y * -4}deg`,
    "--hitc-art": `url(${officialArt.background})`,
    "--hitc-clouds": `url(${officialArt.clouds})`,
  } as CSSProperties;

  return (
    <div className={styles.heroScene} onMouseMove={move} onMouseLeave={() => setPosition({ x: 0, y: 0 })} style={heroStyle}>
      <div className={styles.heroSky} />
      <div className={styles.heroClouds} />
      <div className={styles.horizonGlow} />
      <div className={styles.roadPlane}>
        <div className={styles.roadAsphalt}>
          <span className={styles.roadEdgeLeft} />
          <span className={styles.roadEdgeRight} />
          <span className={styles.roadDash} />
          <span className={`${styles.roadStop} ${styles.roadStopOne}`}>
            <b>01</b><small>PAID SOCIAL</small>
          </span>
          <span className={`${styles.roadStop} ${styles.roadStopTwo}`}>
            <b>02</b><small>BRANDED FLEET</small>
          </span>
          <span className={`${styles.roadStop} ${styles.roadStopThree}`}>
            <b>03</b><small>LOT H</small>
          </span>
          <span className={styles.roadCar}>
            <CarFront size={24} strokeWidth={1.5} />
          </span>
        </div>
      </div>
      <div className={styles.sceneLabel}>INTERACTIVE ROUTE / MOVE POINTER</div>
    </div>
  );
}

function PudoDiagram() {
  return (
    <div className={styles.pudoDiagram} aria-label="Conceptual Lot H pickup and dropoff flow diagram">
      <div className={styles.mapGrid} />
      <div className={styles.mapRoseBowl}>ROSE BOWL</div>
      <div className={styles.mapVenue}>FESTIVAL</div>
      <div className={styles.mapLot}>
        <MapPin size={20} />
        <span>LOT H</span>
        <small>DESIGNATED RIDESHARE</small>
      </div>
      <svg viewBox="0 0 600 390" role="img" aria-label="Path from the festival to the Lot H rideshare zone">
        <path d="M365 88 C470 120 435 210 334 226 C248 240 216 286 154 328" />
      </svg>
      <div className={styles.mapStepOne}>01 / EXIT</div>
      <div className={styles.mapStepTwo}>02 / FOLLOW ROUTE</div>
      <div className={styles.mapStepThree}>03 / MATCH</div>
    </div>
  );
}

function VehicleConcept() {
  return (
    <div className={styles.vehicleStage} aria-label="Conceptual branded vehicle visualization">
      <div className={styles.vehicleNote}>CONCEPTUAL VISUALIZATION / FINAL LOCKUP PENDING</div>
      <div className={styles.vehicleShadow} />
      <div className={styles.vehicleBody}>
        <span className={styles.windshield} />
        <span className={styles.vehicleWindow} />
        <span className={styles.vehicleGraphic}>THE FIRST STAGE</span>
        <span className={styles.vehicleGraphicTwo}>IS THE RIDE.</span>
        <span className={`${styles.wheel} ${styles.frontWheel}`} />
        <span className={`${styles.wheel} ${styles.backWheel}`} />
      </div>
      <div className={styles.vehicleRoute}>
        <span>LA</span>
        <i />
        <Route size={18} />
        <i />
        <span>LOT H</span>
      </div>
    </div>
  );
}

function SocialMockup({ platform }: { platform: "Meta" | "TikTok" }) {
  const isMeta = platform === "Meta";

  return (
    <div className={styles.socialMockup}>
      <div className={styles.socialTop}>
        <span>{isMeta ? "INSTAGRAM REELS" : "TIKTOK FOR YOU"}</span>
        <span>9:16</span>
      </div>
      <div className={styles.socialCanvas} style={{ "--lineup-art": `url(${officialArt.lineup})` } as CSSProperties}>
        <div className={styles.socialArt} />
        <div className={styles.socialShade} />
        <span className={styles.socialKicker}>LA → LOT H</span>
        <strong>THE FIRST<br />STAGE IS<br /><em>THE RIDE.</em></strong>
        <div className={styles.socialCode}>
          <span>USE</span>
          <b>[EVENT CODE]</b>
          <small>[OFFER DETAILS]</small>
        </div>
      </div>
      <div className={styles.socialCaption}>
        <span>{isMeta ? "Save the plan before festival day." : "POV: your festival starts before the gates."}</span>
        <span>00:08</span>
      </div>
    </div>
  );
}

function SourceDrawer({ open, focusId, close }: { open: boolean; focusId: string; close: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div className={styles.drawerOverlay} role="presentation" onMouseDown={(event) => event.target === event.currentTarget && close()}>
      <aside className={styles.sourceDrawer} role="dialog" aria-modal="true" aria-labelledby="source-title">
        <div className={styles.drawerHeader}>
          <div>
            <span className={styles.monoLabel}>EVIDENCE LEDGER</span>
            <h2 id="source-title">Sources and assumptions</h2>
          </div>
          <button ref={closeRef} type="button" onClick={close} aria-label="Close sources">
            <X size={20} />
          </button>
        </div>
        <p className={styles.drawerIntro}>
          Official event and platform sources are prioritized. Planning ranges are labeled as CCD estimates, not guaranteed outcomes.
        </p>
        <div className={styles.sourceList}>
          {sources.map((source) => (
            <a
              key={source.id}
              id={`source-${source.id}`}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              className={focusId === source.id ? styles.sourceActive : undefined}
            >
              <span>{source.group}</span>
              <strong>{source.title}</strong>
              <small>{source.publisher}</small>
              <p>{source.note}</p>
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className={styles.assumptionBlock}>
          <strong>Planning assumptions</strong>
          <p>
            CPM and frequency ranges are CCD planning inputs informed by public benchmarks and adjusted for a short, geographically concentrated Southern California entertainment flight. Reach is gross platform reach and is not deduplicated across Meta and TikTok.
          </p>
        </div>
      </aside>
    </div>
  );
}

export function UberHitcClient() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const routeProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sourceFocus, setSourceFocus] = useState("");
  const [platform, setPlatform] = useState<"Meta" | "TikTok">("Meta");
  const [days] = useState(() => {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.map((part) => [part.type, Number(part.value)]));
    const today = Date.UTC(values.year, values.month - 1, values.day);
    const eventDay = Date.UTC(2026, 7, 8);
    return Math.max(0, Math.round((eventDay - today) / 86_400_000));
  });

  const openSources = (id = "") => {
    setSourceFocus(id);
    setDrawerOpen(true);
    window.setTimeout(() => document.getElementById(`source-${id}`)?.scrollIntoView({ block: "center" }), 80);
  };

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to proposal</a>
      {!reduce ? <RouteRail progress={routeProgress} /> : null}

      <nav className={styles.nav} aria-label="Proposal navigation">
        <a href="#top" className={styles.wordmark} aria-label="Crowd Control Digital, back to top">
          <Image src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width={2198} height={307} priority />
        </a>
        <div className={styles.navLinks}>
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <button className={styles.evidenceButton} type="button" onClick={() => openSources()}>
          Evidence <span>{sources.length}</span>
        </button>
        <button className={styles.menuButton} type="button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        {menuOpen ? (
          <div className={styles.mobileMenu}>
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
            <button type="button" onClick={() => { setMenuOpen(false); openSources(); }}>Evidence ledger</button>
          </div>
        ) : null}
      </nav>

      <header id="top" className={styles.hero}>
        <HeroRoad />
        <div className={styles.heroContent}>
          <Reveal>
            <div className={styles.heroMeta}>
              <span>UBER × HEAD IN THE CLOUDS 2026</span>
              <span>PAID MEDIA + PARTNERSHIP CAMPAIGN</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1>THE FIRST STAGE<br />IS <span>THE RIDE.</span></h1>
          </Reveal>
          <Reveal delay={0.16}>
            <div className={styles.heroLede}>
              <p>
                A movement-first campaign that connects the street, the screen, and the designated rideshare lot before one artist takes the stage.
              </p>
              <a href="#idea">Enter the route <ArrowDown size={18} /></a>
            </div>
          </Reveal>
        </div>
        <div className={styles.heroStats}>
          <div><strong>{days}</strong><span>days to event</span></div>
          <div><strong>AUG 08</strong><span>Brookside at The Rose Bowl</span></div>
          <div><strong>LOT H</strong><span>designated rideshare</span></div>
          <div><strong>$15K</strong><span>paid media</span></div>
        </div>
      </header>

      <div id="main-content">
        <section id="idea" className={styles.section}>
          <SectionHeader
            number="01"
            eyebrow="THE PREMISE"
            title={<>THE FESTIVAL STARTS <span className={styles.red}>BEFORE THE GATES.</span></>}
            body="For fans, arrival is not a footnote. It is the first shared decision, the first group chat plan, and the first place a mobility partner can add real value."
          />
          <div className={styles.premiseGrid}>
            <Reveal className={styles.situationCard}>
              <span className={styles.cardIndex}>SITUATION / 01</span>
              <h3>A cultural tentpole with a transport decision built in.</h3>
              <p>
                Head In The Clouds returns to Pasadena for one day. The site identifies Lot H as the designated rideshare lot, while parking, Metro, and shuttle choices compete for attention.
              </p>
              <SourceButton id="hitc-getting-here" open={openSources} />
            </Reveal>
            <Reveal delay={0.08} className={styles.situationCard}>
              <span className={styles.cardIndex}>STRATEGY / 02</span>
              <h3>Own the journey, not only the offer.</h3>
              <p>
                Lead with culture. Repeat useful Lot H guidance. Introduce [EVENT CODE] only when it can help a fan act, always with [OFFER DETAILS] present.
              </p>
              <SourceButton id="uber-guidelines" open={openSources} />
            </Reveal>
            <Reveal delay={0.16} className={`${styles.situationCard} ${styles.situationOutcome}`}>
              <span className={styles.cardIndex}>OUTCOME / 03</span>
              <h3>Uber becomes part of how the day begins.</h3>
              <p>
                One platform line links the vehicle fleet, paid social, and PUDO utility without requiring paid Uber app inventory inside the $15,000 media plan.
              </p>
              <div className={styles.includedFlag}>INCLUDED: META + TIKTOK ONLY</div>
            </Reveal>
          </div>
          <div className={styles.frictionRail} aria-label="Fan journey friction and campaign response">
            <div className={styles.frictionHeader}><span>FAN JOURNEY</span><span>CAMPAIGN RESPONSE</span></div>
            {[
              ["Plans forming", "What is the easiest route?", "Culture-led reveal"],
              ["Arrival", "Where does the ride end?", "Lot H made explicit"],
              ["Festival day", "Where is the code?", "Simple offer reminder"],
              ["Exit", "Where do we meet?", "Repeated pickup guidance"],
            ].map(([stage, friction, response], index) => (
              <div key={stage} className={styles.frictionRow}>
                <span>0{index + 1}</span><strong>{stage}</strong><p>{friction}</p><ChevronRight /><b>{response}</b>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className={`${styles.section} ${styles.sectionDark}`}>
          <SectionHeader
            number="02"
            eyebrow="THE EXPERIENCE"
            title={<>ONE IDEA. <span className={styles.red}>THREE SURFACES.</span></>}
            body="Each pillar has a distinct job, but all three read as one connected route from Los Angeles to Lot H."
          />
          <div className={styles.pillarStack}>
            {pillars.map((pillar, index) => (
              <article key={pillar.number} className={styles.pillar}>
                <Reveal className={styles.pillarCopy}>
                  <div className={styles.pillarNumber}>{pillar.number}</div>
                  <span className={styles.monoLabel}>{pillar.eyebrow}</span>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                  <ul>{pillar.deliverables.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                </Reveal>
                <Reveal delay={0.08} className={styles.pillarVisual}>
                  {index === 0 ? <PudoDiagram /> : null}
                  {index === 1 ? <VehicleConcept /> : null}
                  {index === 2 ? <SocialMockup platform="TikTok" /> : null}
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        <section id="audience" className={styles.section}>
          <SectionHeader
            number="03"
            eyebrow="AUDIENCE + GEO"
            title={<>MEET CULTURE <span className={styles.red}>WHERE IT MOVES.</span></>}
            body="The plan prioritizes concentrated Southern California relevance, young-adult platform behavior, and simple audience architecture that can learn inside an 18-day flight."
          >
            <SourceButton id="pew-2025" open={openSources} />
          </SectionHeader>
          <div className={styles.signalGrid}>
            {audienceSignals.map((signal) => (
              <Reveal key={signal.value} className={styles.signalCard}>
                <strong>{signal.value}</strong>
                <p>{signal.label}</p>
                <SourceButton id={signal.source} open={openSources} />
              </Reveal>
            ))}
          </div>
          <div className={styles.audienceGrid}>
            <Reveal className={styles.geoMap}>
              <div className={styles.geoGrid} />
              <span className={`${styles.geoPoint} ${styles.pointLa}`}>LOS ANGELES</span>
              <span className={`${styles.geoPoint} ${styles.pointPasadena}`}>PASADENA / VENUE</span>
              <span className={`${styles.geoPoint} ${styles.pointOc}`}>ORANGE COUNTY</span>
              <span className={`${styles.geoPoint} ${styles.pointIe}`}>INLAND EMPIRE</span>
              <div className={styles.geoOrbitOne} />
              <div className={styles.geoOrbitTwo} />
              <div className={styles.geoLegend}>CONCEPTUAL GEO PRIORITY / FINAL RADIUS SET IN PLATFORM</div>
            </Reveal>
            <Reveal delay={0.08} className={styles.audiencePlan}>
              <div>
                <span>CORE</span>
                <h3>LA County + Pasadena</h3>
                <p>Broad age-appropriate reach with venue-proximate weighting and cultural relevance signals.</p>
              </div>
              <div>
                <span>FEEDER</span>
                <h3>High-intent SoCal markets</h3>
                <p>Orange County, Inland Empire, and adjacent travel corridors where scale supports delivery.</p>
              </div>
              <div>
                <span>WARM</span>
                <h3>Engagers and viewers</h3>
                <p>Retarget video viewers, social engagers, and site visitors only when audience size remains healthy.</p>
              </div>
              <div className={styles.guardrail}>
                <Info size={18} />
                <p>No attendance claim. No fragile micro-audiences. Final targeting is subject to partner data permissions and platform availability.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="creative" className={`${styles.section} ${styles.creativeSection}`}>
          <SectionHeader
            number="04"
            eyebrow="CREATIVE SYSTEM"
            title={<>BUILT FOR THE FEED. <span className={styles.red}>USEFUL IN THE WORLD.</span></>}
            body="The platform turns one strategic idea into culture edits, transport utility, and offer reminders without forcing identical executions across Meta and TikTok."
          />
          <div className={styles.creativeGrid}>
            <div className={styles.creativeControls}>
              <div className={styles.platformToggle} aria-label="Choose creative platform">
                {(["Meta", "TikTok"] as const).map((name) => (
                  <button key={name} type="button" className={platform === name ? styles.activeToggle : undefined} onClick={() => setPlatform(name)}>
                    {name}
                  </button>
                ))}
              </div>
              <SocialMockup platform={platform} />
            </div>
            <div className={styles.territories}>
              {[
                ["01", "THE FIRST STAGE IS THE RIDE.", "Master platform", "Hero film, vehicle system, partnership reveal"],
                ["02", "YOUR RIDE TO THE CLOUDS.", "Festival-world extension", "Creator POV, fan edit, cloud-forward transition"],
                ["03", "LA TO LOT H.", "Utility line", "Map card, final-day story, code reminder"],
              ].map(([number, line, role, use]) => (
                <div key={number}>
                  <span>{number}</span>
                  <h3>{line}</h3>
                  <p><b>{role}</b>{use}</p>
                </div>
              ))}
              <div className={styles.copyRules}>
                <strong>Creative rules</strong>
                <ul>
                  <li>Sentence case in ad copy and readable offer terms.</li>
                  <li>9:16 motion-first edits with safe-zone discipline.</li>
                  <li>Approved advertiser and partner lockups only.</li>
                  <li>No claim that Uber is an official partner until title language is authorized.</li>
                </ul>
                <SourceButton id="tiktok-practice" open={openSources} />
                <SourceButton id="uber-guidelines" open={openSources} />
              </div>
            </div>
          </div>
          <div className={styles.assetMatrix}>
            <div className={styles.matrixHead}><span>ASSET</span><span>ROLE</span><span>RATIO</span><span>VARIANTS</span></div>
            {[
              ["Hero motion", "Reveal + platform", "9:16 / 4:5", "3 hooks × 2 endings"],
              ["Creator POV", "Culture + context", "9:16", "3 creator structures"],
              ["Lot H utility", "Arrival + exit", "9:16 / 1:1", "Day / event day"],
              ["Code reminder", "Action cue", "9:16 / 4:5", "Meta / TikTok"],
              ["Fleet capture", "Proof in motion", "9:16", "Exterior / rider POV"],
            ].map((row) => <div key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
          </div>
        </section>

        <section id="media" className={styles.section}>
          <SectionHeader
            number="05"
            eyebrow="MEDIA FLIGHT"
            title={<>$15K. TWO PLATFORMS. <span className={styles.red}>ONE JOB.</span></>}
            body="Maximize qualified awareness around the event and make the code and Lot H easier to remember as plans lock."
          />
          <div className={styles.splitGrid}>
            <Reveal className={styles.splitVisual}>
              <div className={styles.donut} role="img" aria-label="Media budget: 55 percent Meta and 45 percent TikTok">
                <div><strong>$15K</strong><span>MEDIA</span></div>
              </div>
              <div className={styles.splitLegend}>
                {platforms.map((item) => (
                  <div key={item.name}>
                    <i />
                    <span>{item.name}</span>
                    <strong>{item.share}%</strong>
                    <small>{money.format(item.spend)}</small>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08} className={styles.platformRoles}>
              {platforms.map((item) => (
                <article key={item.id}>
                  <div><span>{item.name}</span><strong>{money.format(item.spend)}</strong></div>
                  <p>{item.role}</p>
                  <ul>{item.formats.map((format) => <li key={format}>{format}</li>)}</ul>
                  <small>Primary KPIs: {item.kpis.join(" · ")}</small>
                </article>
              ))}
            </Reveal>
          </div>
          <div className={styles.flightHeader}>
            <span>JUL 22</span><div /><span>AUG 08</span>
          </div>
          <div className={styles.flightGrid}>
            {flight.map((phase) => (
              <Reveal key={phase.phase} className={styles.phaseCard}>
                <div className={styles.phaseTop}><span>{phase.phase}</span><b>{phase.share}%</b></div>
                <h3>{phase.name}</h3>
                <time>{phase.dates}</time>
                <strong>{money.format(phase.total)}</strong>
                <p>{phase.job}</p>
                <div className={styles.phaseSplit}>
                  <span style={{ width: "55%" }}>META {money.format(phase.meta)}</span>
                  <span style={{ width: "45%" }}>TIKTOK {money.format(phase.tiktok)}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className={styles.mediaNote}>
            <Eye size={18} />
            <p><strong>Awareness first.</strong> Optimize to reach and video attention, then monitor frequency and creative fatigue daily. The event code is the CTA, not the optimization objective.</p>
            <SourceButton id="meta-awareness" open={openSources} />
          </div>
        </section>

        <section id="forecast" className={`${styles.section} ${styles.sectionDark}`}>
          <SectionHeader
            number="06"
            eyebrow="DELIVERY FORECAST"
            title={<>A RANGE, <span className={styles.red}>NOT A PROMISE.</span></>}
            body="Three scenarios expose the assumptions behind delivery. The centerline uses $11.50 Meta CPM, $7.50 TikTok CPM, and 2.3 gross platform frequency."
          >
            <SourceButton id="gupta-benchmarks" open={openSources} />
          </SectionHeader>
          <div className={styles.scenarioGrid}>
            {scenarios.map((scenario, index) => (
              <Reveal key={scenario.name} delay={index * 0.07} className={`${styles.scenarioCard} ${index === 1 ? styles.expectedScenario : ""}`}>
                <div className={styles.scenarioName}>
                  <span>0{index + 1}</span>
                  <div><strong>{scenario.name}</strong><small>{scenario.label}</small></div>
                </div>
                <div className={styles.scenarioMetric}><span>Impressions</span><strong>{compact.format(scenario.impressions)}</strong></div>
                <div className={styles.scenarioMetric}><span>Gross platform reach</span><strong>{compact.format(scenario.reach)}</strong></div>
                <div className={styles.scenarioMetric}><span>Frequency</span><strong>{scenario.frequency.toFixed(1)}×</strong></div>
                <div className={styles.cpmPair}>
                  <span>META CPM <b>${scenario.metaCpm.toFixed(2)}</b></span>
                  <span>TIKTOK CPM <b>${scenario.tiktokCpm.toFixed(2)}</b></span>
                </div>
                <div className={styles.scenarioBar}><span style={{ width: `${scenario.impressions / 2_197_861 * 100}%` }} /></div>
              </Reveal>
            ))}
          </div>
          <div className={styles.formulaRow}>
            <div><span>FORMULA 01</span><strong>Spend ÷ CPM × 1,000 = impressions</strong></div>
            <div><span>FORMULA 02</span><strong>Impressions ÷ frequency = gross platform reach</strong></div>
            <div><span>IMPORTANT</span><strong>Cross-platform deduplication requires post-campaign reporting.</strong></div>
          </div>
        </section>

        <section id="precedents" className={styles.section}>
          <SectionHeader
            number="07"
            eyebrow="CATEGORY PRECEDENTS"
            title={<>WHAT THE BEST <span className={styles.red}>MAKE EASIER.</span></>}
            body="The strongest festival mobility programs pair a clear physical route with useful waiting conditions, repeatable instructions, and an offer that does not obscure the utility."
          />
          <div className={styles.precedentGrid}>
            {precedents.map((precedent, index) => (
              <Reveal key={precedent.name} delay={index * 0.06} className={styles.precedentCard}>
                <div><span>0{index + 1}</span><h3>{precedent.name}</h3></div>
                <p>{precedent.behavior}</p>
                <div className={styles.takeLine}><Check size={15} /><span><b>TAKE</b>{precedent.take}</span></div>
                <div className={styles.avoidLine}><X size={15} /><span><b>AVOID</b>{precedent.avoid}</span></div>
                <SourceButton id={precedent.source} open={openSources} />
              </Reveal>
            ))}
          </div>
          <div className={styles.optionalInventory}>
            <div>
              <span className={styles.monoLabel}>OPTIONAL EXPANSION / NOT IN $15K</span>
              <h3>UBER-OWNED INVENTORY CAN EXTEND THE ROUTE LATER.</h3>
            </div>
            <p>
              Current Journey Takeover capability shows how branded maps, moving icons, and destination context can create a full-trip story. This is a future negotiation path, not a line item in the included paid-social plan.
            </p>
            <SourceButton id="uber-takeover" open={openSources} />
          </div>
        </section>

        <section id="measurement" className={`${styles.section} ${styles.measurementSection}`}>
          <SectionHeader
            number="08"
            eyebrow="MEASUREMENT"
            title={<>KNOW WHAT MOVED. <span className={styles.red}>KNOW WHAT TO DO NEXT.</span></>}
            body="The framework separates paid delivery, creative attention, code behavior, and operational signals so one metric never carries more meaning than it should."
          />
          <div className={styles.measureGrid}>
            {[
              ["01", "DELIVERY", "Reach, impressions, frequency, CPM", "Did the campaign create enough qualified exposure?"],
              ["02", "ATTENTION", "ThruPlays, 6-second views, completion", "Which hooks and formats held attention?"],
              ["03", "ACTION", "Code uses, clicks if available, saves", "Did the offer and utility prompt a next step?"],
              ["04", "OPERATIONS", "PUDO observations, FAQs, issue log", "Did the information reduce confusion on the ground?"],
            ].map(([number, label, metrics, question]) => (
              <Reveal key={number} className={styles.measureCard}>
                <span>{number}</span><Target size={20} />
                <h3>{label}</h3><strong>{metrics}</strong><p>{question}</p>
              </Reveal>
            ))}
          </div>
          <div className={styles.reportingFlow}>
            <span>PLATFORM EXPORTS</span><ChevronRight /><span>CODE REPORT</span><ChevronRight /><span>OPERATIONS NOTES</span><ChevronRight /><strong>POST-EVENT READOUT</strong>
          </div>
        </section>

        <section id="activation" className={styles.section}>
          <SectionHeader
            number="09"
            eyebrow="ACTIVATION PLAN"
            title={<>FAST ENOUGH TO MOVE. <span className={styles.red}>CONTROLLED ENOUGH TO TRUST.</span></>}
            body="The compressed runway requires one approval chain, one claims owner, and a daily creative and media rhythm after launch."
          />
          <div className={styles.timeline}>
            {activationSteps.map((step, index) => (
              <Reveal key={`${step.date}-${step.title}`} className={styles.timelineRow}>
                <span>0{index + 1}</span>
                <time>{step.date}</time>
                <h3>{step.title}</h3>
                <p>{step.owner}</p>
                <b>{step.status}</b>
              </Reveal>
            ))}
          </div>
          <div className={styles.dependencyGrid}>
            <div>
              <span className={styles.monoLabel}>NEEDED FROM UBER</span>
              <ul>
                <li>Approved logo files and partnership-title language</li>
                <li>Final [EVENT CODE] and [OFFER DETAILS]</li>
                <li>Vehicle models, wrap specs, and production owner</li>
                <li>Code redemption reporting path</li>
              </ul>
            </div>
            <div>
              <span className={styles.monoLabel}>NEEDED FROM 88RISING</span>
              <ul>
                <li>Current 2026 brand kit and approved artist assets</li>
                <li>Lot H operations map and guest-facing language</li>
                <li>Social handle and collaboration permissions</li>
                <li>One consolidated approval owner</li>
              </ul>
            </div>
            <div>
              <span className={styles.monoLabel}>CCD OWNS</span>
              <ul>
                <li>Media plan, build, trafficking, and optimization</li>
                <li>Creative system and platform adaptations</li>
                <li>Daily pacing and issue escalation</li>
                <li>Post-event reporting and recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="investment" className={`${styles.section} ${styles.investmentSection}`}>
          <SectionHeader
            number="10"
            eyebrow="INVESTMENT"
            title={<>A FOCUSED PLAN FOR <span className={styles.red}>A FIXED MOMENT.</span></>}
            body="Paid media is held to the approved $15,000. CCD management is calculated at 15 percent."
          />
          <div className={styles.investmentGrid}>
            <Reveal className={styles.investmentMath}>
              <div><span>PAID MEDIA</span><strong>{money.format(investment.media)}</strong></div>
              <div><span>CCD MANAGEMENT / 15%</span><strong>{money.format(investment.management)}</strong></div>
              <div className={styles.totalLine}><span>TOTAL INVESTMENT</span><strong>{money.format(investment.total)}</strong></div>
            </Reveal>
            <Reveal delay={0.08} className={styles.scopeCard}>
              <span className={styles.monoLabel}>SCOPE GUARDRAILS</span>
              <ul>
                <li><Check size={15} />Meta and TikTok paid media included</li>
                <li><Check size={15} />Strategy, trafficking, optimization, and reporting included</li>
                <li><Check size={15} />Creative system and agreed platform variants included</li>
                <li><X size={15} />Media production, vehicle fabrication, talent, and Uber-owned inventory excluded unless added</li>
              </ul>
              <div className={styles.nextStep}>
                <span>NEXT WORKING SESSION</span>
                <strong>Lock assets, offer terms, operations language, and approval ownership.</strong>
              </div>
            </Reveal>
          </div>
          <div className={styles.finalStatement}>
            <span>LOS ANGELES → PASADENA → LOT H</span>
            <h2>THE FIRST STAGE<br />IS THE RIDE.</h2>
            <p>Prepared by Crowd Control Digital for the 88rising team. July 17, 2026.</p>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <Image src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width={2198} height={307} />
        <div>
          <button type="button" onClick={() => openSources()}>Open evidence ledger <ArrowUpRight size={15} /></button>
          <a href="#top">Back to top <ArrowUpRight size={15} /></a>
        </div>
        <p>CONFIDENTIAL PROPOSAL / UBER × HEAD IN THE CLOUDS 2026</p>
      </footer>

      <SourceDrawer open={drawerOpen} focusId={sourceFocus} close={() => setDrawerOpen(false)} />
    </main>
  );
}
