"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import styles from "./proposal.module.css";

const tunnelLines = [0, 1, 2, 3, 4, 5, 6];

export function CinematicHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const worldScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const worldY = useTransform(scrollYProgress, [0, 1], [0, -54]);
  const openingY = useTransform(scrollYProgress, [0, 0.48], [0, -64]);
  const openingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 1, 0]);
  const arrivalY = useTransform(scrollYProgress, [0.34, 0.68], [68, 0]);
  const arrivalOpacity = useTransform(scrollYProgress, [0.34, 0.6], [0, 1]);
  const permissionY = useTransform(scrollYProgress, [0.1, 0.5], [0, -28]);
  const permissionOpacity = useTransform(scrollYProgress, [0.12, 0.48], [1, 0.18]);
  const momentumY = useTransform(scrollYProgress, [0.28, 0.65], [30, 0]);
  const momentumOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0.18, 1]);
  const timecodeX = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const laneX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <header id="top" ref={ref} className={styles.heroScroll}>
      <div className={styles.heroSticky} data-reduced-motion={reduce ? "true" : "false"}>
        <motion.div
          className={styles.heroField}
          style={reduce ? undefined : { scale: worldScale, y: worldY }}
          aria-hidden="true"
        >
          <div className={styles.heroNoise} />
          <motion.div className={styles.heroGrid} style={reduce ? undefined : { x: laneX }} />
          <svg className={styles.heroTunnel} viewBox="0 0 1200 760" preserveAspectRatio="none">
            <path className={styles.tunnelLine} d="M0 760 L486 392 L714 392 L1200 760" />
            <path className={styles.tunnelLine} d="M0 0 L486 368 L714 368 L1200 0" />
            {tunnelLines.map((line) => {
              const inset = line * 58;
              return (
                <motion.rect
                  key={line}
                  className={styles.tunnelLine}
                  x={inset}
                  y={inset * 0.58}
                  width={1200 - inset * 2}
                  height={760 - inset * 1.16}
                  initial={false}
                  animate={reduce ? undefined : { opacity: [0.08, 0.2, 0.08] }}
                  transition={{
                    duration: 3.8,
                    delay: line * 0.18,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </svg>
          <div className={styles.heroCenterLine} />
        </motion.div>

        <motion.div className={styles.heroTimecode} style={reduce ? undefined : { x: timecodeX }}>
          <span>CTW / CCD</span>
          <strong>00:00:<b>01</b></strong>
          <motion.i
            animate={reduce ? undefined : { opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <small>PARTNERSHIP PROPOSAL / CONFIDENTIAL</small>
        </motion.div>

        <div className={styles.heroScoreboard} aria-label="The strategic move from brand permission to Teamwear momentum">
          <div className={styles.heroScoreTop}>
            <span>STRATEGIC POSITION</span>
            <b>01 / 02</b>
          </div>
          <motion.div
            className={`${styles.heroScoreState} ${styles.heroScorePermission}`}
            style={reduce ? undefined : { y: permissionY, opacity: permissionOpacity }}
          >
            <span className={styles.heroScoreValue}>01</span>
            <p><strong>BRAND PERMISSION</strong><small>RECOGNITION ALREADY EXISTS</small></p>
          </motion.div>
          <motion.div
            className={`${styles.heroScoreState} ${styles.heroScoreMomentum}`}
            style={reduce ? undefined : { y: momentumY, opacity: momentumOpacity }}
          >
            <span className={styles.heroScoreValue}>02</span>
            <p><strong>TEAMWEAR MOMENTUM</strong><small>THE SYSTEM WE BUILD NEXT</small></p>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroOpening}
          style={reduce ? undefined : { y: openingY, opacity: openingOpacity }}
        >
          <p className={styles.heroEyebrow}><span />CHAMPION TEAMWEAR × CROWD CONTROL</p>
          <h1 className={styles.heroTitle}>
            <span>TURN BRAND</span>
            <strong>PERMISSION</strong>
            <em>INTO MOMENTUM.</em>
          </h1>
          <p className={styles.heroLead}>
            A growth and creative operating system built for every team, every season and every moment that makes belonging visible.
          </p>
        </motion.div>

        <motion.div
          className={styles.heroArrival}
          style={reduce ? undefined : { y: arrivalY, opacity: arrivalOpacity }}
        >
          <span className={styles.heroArrivalLabel}>THE PROPOSAL / 2026</span>
          <h2 className={styles.heroArrivalTitle}>
            THE UNIFORM<br />IS THE <em>BEGINNING.</em>
          </h2>
          <p className={styles.heroArrivalCopy}>
            We will connect demand, storytelling and conversion so Champion Teamwear can show up with one clear voice from first impression to repeat order.
          </p>
          <div className={styles.heroArrivalFacts}>
            <div><strong>06</strong><span>MONTH PROPOSED RUNWAY</span></div>
            <div><strong>$10K</strong><span>MONTHLY RETAINER</span></div>
            <div><strong>15%</strong><span>OF MANAGED MEDIA</span></div>
          </div>
        </motion.div>

        <div className={styles.heroPrepared}>
          <span>PREPARED FOR CHAMPION TEAMWEAR</span>
          <span>A PROPOSAL BY CROWD CONTROL DIGITAL</span>
          <span>PRIVATE AND CONFIDENTIAL / 2026</span>
        </div>
        <a className={styles.heroScrollCue} href="#opportunity">
          <span>SCROLL TO ENTER</span><i><b /></i>
        </a>
        <motion.div className={styles.heroProgress} style={{ scaleX: progressScale }} />
      </div>
    </header>
  );
}

const rosterPhrase = "GAME DAY / PRACTICE / TRAVEL / FANDOM / ONE TEAMWEAR SYSTEM / ";

export function KineticRosterBand() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.rosterBand} aria-label="Game day, practice, travel and fandom are one Teamwear system">
      <motion.div
        className={styles.rosterTrack}
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <span>{rosterPhrase.repeat(4)}</span>
        <span aria-hidden="true">{rosterPhrase.repeat(4)}</span>
      </motion.div>
    </div>
  );
}

const identityMoments = [
  {
    number: "01",
    signal: "PERFORM",
    name: "GAME DAY",
    copy: "The highest-stakes expression of team identity.",
    tone: "red",
  },
  {
    number: "02",
    signal: "PREPARE",
    name: "PRACTICE",
    copy: "Where repetition turns standards into culture.",
    tone: "black",
  },
  {
    number: "03",
    signal: "REPRESENT",
    name: "TRAVEL",
    copy: "The team stays visible beyond the field of play.",
    tone: "graphite",
  },
  {
    number: "04",
    signal: "BELONG",
    name: "FANDOM",
    copy: "The audience carries the identity into the world.",
    tone: "outline",
  },
] as const;

function IdentityMoment({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const reduce = useReducedMotion();
  const moment = identityMoments[index];
  const center = 0.16 + index * 0.22;
  const opacity = useTransform(
    progress,
    [center - 0.16, center - 0.06, center + 0.08, center + 0.18],
    [0.38, 1, 1, 0.48],
  );
  const scale = useTransform(
    progress,
    [center - 0.16, center - 0.06, center + 0.08, center + 0.18],
    [0.965, 1, 1, 0.975],
  );
  const y = useTransform(
    progress,
    [center - 0.16, center - 0.06, center + 0.08, center + 0.18],
    [18, 0, 0, -10],
  );
  const signalScale = useTransform(
    progress,
    [center - 0.13, center - 0.02, center + 0.12],
    [0, 1, 1],
  );
  const toneClass = {
    red: styles.identityMomentRed,
    black: styles.identityMomentBlack,
    graphite: styles.identityMomentGraphite,
    outline: styles.identityMomentOutline,
  }[moment.tone];

  return (
    <motion.article
      className={`${styles.identityMoment} ${toneClass}`}
      style={reduce ? undefined : { opacity, scale, y }}
    >
      <div className={styles.identityMomentTop}>
        <span className={styles.identityNumber}>{moment.number}</span>
        <span className={styles.identitySignal}>{moment.signal}</span>
      </div>
      <div>
        <strong className={styles.identityMomentName}>{moment.name}</strong>
        <p className={styles.identityMomentCopy}>{moment.copy}</p>
      </div>
      <motion.i className={styles.identityMomentRule} style={reduce ? undefined : { scaleX: signalScale }} />
    </motion.article>
  );
}

export function IdentityField() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const progressScale = useTransform(scrollYProgress, [0.04, 0.96], [0, 1]);
  const introY = useTransform(scrollYProgress, [0, 0.72], [0, -22]);

  return (
    <section id="identity" ref={ref} className={styles.identityField}>
      <div className={styles.identitySticky}>
        <motion.div className={styles.identityIntro} style={reduce ? undefined : { y: introY }}>
          <span>03 / THE IDENTITY FIELD</span>
          <h2>ONE BRAND.<br /><em>FOUR TEAM MOMENTS.</em></h2>
          <p>
            Champion Teamwear does not need four disconnected campaigns. It needs one recognizable system that flexes with the moment.
          </p>
        </motion.div>
        <div className={styles.identityGrid}>
          {identityMoments.map((moment, index) => (
            <IdentityMoment key={moment.name} progress={scrollYProgress} index={index} />
          ))}
        </div>
        <div className={styles.identityProgress} aria-hidden="true">
          <span>IDENTITY</span>
          <i><motion.b style={reduce ? undefined : { scaleX: progressScale }} /></i>
          <span>MOMENTUM</span>
        </div>
      </div>
    </section>
  );
}

export function StrategyReveal() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const leftX = useTransform(scrollYProgress, [0.1, 0.62], ["0%", "-102%"]);
  const rightX = useTransform(scrollYProgress, [0.1, 0.62], ["0%", "102%"]);
  const frameScale = useTransform(scrollYProgress, [0.28, 0.72], [0.92, 1]);
  const frameOpacity = useTransform(scrollYProgress, [0.22, 0.52], [0, 1]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="operating-system" ref={ref} className={styles.strategyReveal}>
      <div className={styles.strategySticky}>
        <div className={styles.strategyUnderlay}>
          <motion.div
            className={styles.strategyFrame}
            style={reduce ? undefined : { scale: frameScale, opacity: frameOpacity }}
          >
            <span className={styles.strategyKicker}>04 / THE OPERATING SYSTEM</span>
            <h2 className={styles.strategyTitle}>
              ONE TEAM.<br />ONE SIGNAL.<br /><em>ALWAYS MOVING.</em>
            </h2>
            <p className={styles.strategyCopy}>
              Crowd Control connects strategy, media, creative and measurement into one accountable growth rhythm.
            </p>
            <ul className={styles.strategyPillars}>
              <li><span>01</span><strong>DEMAND</strong><small>FIND and convert the right buyers</small></li>
              <li><span>02</span><strong>STORY</strong><small>Make the brand distinct in motion</small></li>
              <li><span>03</span><strong>SYSTEM</strong><small>Learn, adapt and compound</small></li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className={`${styles.revealCurtain} ${styles.revealCurtainLeft}`}
          style={reduce ? { x: "-102%" } : { x: leftX }}
        >
          <span>FROM</span>
          <strong>DISCONNECTED<br />ACTIVITY</strong>
          <small>CAMPAIGNS / CHANNELS / HANDOFFS</small>
        </motion.div>
        <motion.div
          className={`${styles.revealCurtain} ${styles.revealCurtainRight}`}
          style={reduce ? { x: "102%" } : { x: rightX }}
        >
          <span>TO</span>
          <strong>ONE GROWTH<br />RHYTHM</strong>
          <small>STRATEGY / CREATIVE / MEDIA / LEARNING</small>
        </motion.div>
        <div className={styles.revealProgress} aria-hidden="true">
          <motion.span style={{ scaleX: progressScale }} />
        </div>
      </div>
    </section>
  );
}

const roadmap = [
  { meta: "WEEKS 01-04", phase: "DISCOVER", copy: "Full brand audit, stakeholder input, audience validation and business evidence." },
  { meta: "WEEKS 05-08", phase: "DEFINE", copy: "Positioning, messaging, priority audiences and the growth opportunity map." },
  { meta: "WEEKS 09-12", phase: "PRIORITIZE", copy: "Channel plans, activation territories and the sequenced 6 to 12-month roadmap." },
  { meta: "MONTHS 04-06", phase: "EMBED", copy: "Strategic advisory, priority initiatives and continuous system refinement." },
] as const;

export function RoadmapTrack() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 82%", "end 25%"],
  });
  const lineScale = useTransform(scrollYProgress, [0.04, 0.9], [0, 1]);

  return (
    <section ref={ref} className={styles.roadmapTrack}>
      <div className={styles.roadmapHeader}>
        <span>08 / SIX-MONTH FLIGHT PLAN</span>
        <h2>MOVE FAST.<br /><em>BUILD MEMORY.</em></h2>
        <p>Every phase ships something useful while strengthening the system behind it.</p>
      </div>
      <div className={styles.roadmapLine} aria-hidden="true">
        <motion.i className={styles.roadmapLineFill} style={reduce ? undefined : { scaleX: lineScale }} />
      </div>
      <ol className={styles.roadmapStops}>
        {roadmap.map((stop, index) => (
          <motion.li
            key={stop.phase}
            className={styles.roadmapStop}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <i className={styles.roadmapMarker}><span>{String(index + 1).padStart(2, "0")}</span></i>
            <span className={styles.roadmapMeta}>{stop.meta}</span>
            <strong className={styles.roadmapPhase}>{stop.phase}</strong>
            <p className={styles.roadmapCopy}>{stop.copy}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

export function BudgetDial() {
  const reduce = useReducedMotion();

  return (
    <div
      className={styles.budgetDial}
      role="img"
      aria-label="Core engagement: ten thousand dollars per month, plus fifteen percent of managed media spend and scoped creative fees"
    >
      <svg className={styles.budgetDialGraphic} viewBox="0 0 300 300" aria-hidden="true">
        <circle className={styles.budgetDialTrack} cx="150" cy="150" r="118" />
        <motion.circle
          className={styles.budgetDialRetainer}
          cx="150"
          cy="150"
          r="118"
          transform="rotate(-90 150 150)"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reduce ? undefined : { pathLength: 0.68, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          className={styles.budgetDialMedia}
          cx="150"
          cy="150"
          r="98"
          transform="rotate(-90 150 150)"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reduce ? undefined : { pathLength: 0.48, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.05, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className={styles.budgetDialCenter}>
        <small>CORE RETAINER</small>
        <strong>$10K</strong>
        <span>PER MONTH</span>
      </div>
      <div className={styles.budgetDialTerms}>
        <span><b>15%</b> OF MANAGED MEDIA</span>
        <span><b>+</b> CREATIVE FEES BY SCOPE</span>
      </div>
    </div>
  );
}
