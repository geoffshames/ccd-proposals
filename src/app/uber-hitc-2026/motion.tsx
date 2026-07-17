"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { officialArt } from "@/lib/uber-hitc-2026";
import styles from "./uber-hitc.module.css";

const routePath = "M 70 610 C 210 530, 238 480, 338 462 C 472 438, 500 314, 608 306 C 724 298, 750 212, 876 148";

export function CinematicHero({ days }: { days: number }) {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 80, damping: 24 });
  const springY = useSpring(pointerY, { stiffness: 80, damping: 24 });
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);
  const rotateX = useTransform(springY, [-1, 1], [3, -3]);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });
  const sceneScale = useTransform(scrollYProgress, [0, 0.58, 1], [1, 1.08, 1.42]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, -84]);
  const openingX = useTransform(scrollYProgress, [0.24, 0.5], [0, -1450]);
  const openingY = useTransform(scrollYProgress, [0, 0.42], [0, -90]);
  const arrivalX = useTransform(scrollYProgress, [0.42, 0.64], [1450, 0]);
  const arrivalY = useTransform(scrollYProgress, [0.42, 0.7], [70, 0]);
  const pathLength = useTransform(scrollYProgress, [0.03, 0.86], [0.02, 1]);
  const markerDistance = useTransform(scrollYProgress, [0.03, 0.86], ["2%", "100%"]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const artStyle = {
    "--hero-art": `url(${officialArt.background})`,
    "--hero-clouds": `url(${officialArt.clouds})`,
  } as CSSProperties;

  return (
    <header id="top" ref={heroRef} className={styles.heroScroll} style={artStyle}>
      <div className={styles.heroSticky}>
        <motion.div
          className={styles.heroWorld}
          style={reduce ? undefined : { scale: sceneScale, y: sceneY, rotateX, rotateY }}
          onPointerMove={(event) => {
            if (reduce) return;
            const bounds = event.currentTarget.getBoundingClientRect();
            pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
            pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
          }}
          onPointerLeave={() => {
            pointerX.set(0);
            pointerY.set(0);
          }}
        >
          <div className={styles.heroAtmosphere} />
          <motion.div
            className={styles.cloudSheetOne}
            animate={reduce ? undefined : { x: ["-3%", "3%", "-3%"], y: [0, -12, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={styles.cloudSheetTwo}
            animate={reduce ? undefined : { x: ["4%", "-4%", "4%"], y: [-8, 8, -8] }}
            transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg className={styles.topographicField} viewBox="0 0 1000 700" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((ring) => (
              <motion.ellipse
                key={ring}
                cx="840"
                cy="150"
                rx={90 + ring * 40}
                ry={58 + ring * 27}
                initial={false}
                animate={reduce ? undefined : { opacity: [0.12, 0.28, 0.12], scale: [1, 1.025, 1] }}
                transition={{ duration: 4.5 + ring * 0.7, repeat: Infinity, ease: "easeInOut", delay: ring * 0.18 }}
              />
            ))}
          </svg>
          <svg className={styles.heroRouteSvg} viewBox="0 0 1000 700" role="img" aria-label="Abstract route moving from Los Angeles toward Pasadena">
            <path className={styles.heroRouteGhost} d={routePath} />
            <motion.path className={styles.heroRouteActive} d={routePath} style={{ pathLength }} />
          </svg>
          <motion.span className={styles.routeTraveler} style={{ offsetDistance: markerDistance }}>
            <i />
          </motion.span>
          <span className={styles.originMarker}><b>LA</b><small>ORIGIN</small></span>
          <motion.span
            className={styles.destinationMarker}
            animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <i /><b>PASADENA</b><small>LOT H / DESTINATION</small>
          </motion.span>
        </motion.div>

        <motion.div className={styles.heroOpening} style={reduce ? undefined : { x: openingX, y: openingY }}>
          <div className={styles.heroOverline}>
            <span>PARTNERSHIP AWARENESS CAMPAIGN</span>
            <span>LOS ANGELES / 2026</span>
          </div>
          <h1>
            <span>UBER ×</span>
            <strong>HEAD IN THE CLOUDS</strong>
          </h1>
          <div className={styles.heroThesis}>
            <span>01 / THESIS</span>
            <p>The audience&apos;s relationship with the festival begins before they reach the gates.</p>
          </div>
        </motion.div>

        <motion.div className={styles.heroArrival} style={reduce ? { opacity: 0, pointerEvents: "none" } : { x: arrivalX, y: arrivalY }}>
          <span className={styles.heroArrivalCode}>LA → PASADENA / 08.08.26</span>
          <p>THE JOURNEY IS NOT<br />THE LOGISTICS.</p>
          <h2>IT IS THE <span>OPENING ACT.</span></h2>
          <div className={styles.arrivalFacts}>
            <div><strong>{days}</strong><span>DAYS TO EVENT</span></div>
            <div><strong>LOT H</strong><span>DESIGNATED RIDESHARE</span></div>
            <div><strong>$15K</strong><span>META + TIKTOK</span></div>
          </div>
        </motion.div>

        <div className={styles.heroPrepared}>
          <span>PREPARED FOR 88RISING</span>
          <span>A PROPOSAL BY CROWD CONTROL DIGITAL</span>
          <span>GEOFF SHAMES / CO-FOUNDER / JULY 17, 2026</span>
        </div>
        <a className={styles.scrollEnter} href="#opportunity">
          <span>SCROLL TO ENTER</span><i><b /></i>
        </a>
        <motion.div className={styles.heroScrollProgress} style={{ scaleX: progressScale }} />
      </div>
    </header>
  );
}

export function BrandIntersection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const uberX = useTransform(scrollYProgress, [0.14, 0.48], [-120, 0]);
  const cultureX = useTransform(scrollYProgress, [0.14, 0.48], [120, 0]);
  const axisScale = useTransform(scrollYProgress, [0.28, 0.66], [0, 1]);

  return (
    <section ref={ref} className={styles.brandIntersection}>
      <div className={styles.intersectionIntro}>
        <span>02 / TWO BRANDS, ONE MOVEMENT</span>
        <p>One owns movement at the moment of intent. The other turns Asian music and culture into a global destination.</p>
      </div>
      <div className={styles.intersectionStage}>
        <motion.div className={styles.intersectionSide} style={reduce ? undefined : { x: uberX }}>
          <span>UBER BRINGS</span>
          <strong>MOVEMENT</strong>
          <ul><li>Utility</li><li>Access</li><li>Destination</li><li>Real-world presence</li></ul>
        </motion.div>
        <div className={styles.intersectionCenter}>
          <motion.i style={reduce ? undefined : { scaleY: axisScale }} />
          <b>THE<br />SHARED<br />ROUTE</b>
          <span>MOVEMENT + CULTURE + ANTICIPATION</span>
        </div>
        <motion.div className={`${styles.intersectionSide} ${styles.intersectionCulture}`} style={reduce ? undefined : { x: cultureX }}>
          <span>88RISING BRINGS</span>
          <strong>CULTURE</strong>
          <ul><li>Discovery</li><li>Community</li><li>Identity</li><li>Festival-world energy</li></ul>
        </motion.div>
      </div>
    </section>
  );
}

const journeySteps = [
  ["DISCOVER", "Is this for me?", "Culture-led reveal"],
  ["COMMIT", "Who is going?", "Social proof"],
  ["PLAN", "How do we get there?", "Lot H utility"],
  ["BOOK", "Where does the ride end?", "Destination cue"],
  ["PICKUP", "Will the group connect?", "Code reminder"],
  ["ARRIVE", "Which way to the gates?", "Recognizable zone"],
  ["EXPERIENCE", "What is worth sharing?", "Fleet content"],
  ["RETURN", "Where do we meet?", "Repeated guidance"],
] as const;

function JourneyNode({ progress, index }: { progress: MotionValue<number>; index: number }) {
  const reduce = useReducedMotion();
  const center = index / (journeySteps.length - 1);
  const before = center - 0.085;
  const enter = center - 0.04;
  const leave = center + 0.04;
  const after = center + 0.085;
  const scale = useTransform(progress, [before, enter, leave, after], [1, 1.035, 1.035, 1]);
  const y = useTransform(progress, [before, enter, leave, after], [0, -18, -18, 0]);
  const isActive = (value: number) => Math.round(value * (journeySteps.length - 1)) === index;
  const backgroundColor = useTransform(progress, (value) => isActive(value) ? "#fd3737" : "#111111");
  const color = useTransform(progress, (value) => isActive(value) ? "#050505" : "#f4f1e9");
  const markerBackground = useTransform(progress, (value) => isActive(value) ? "#050505" : "#252525");
  const step = journeySteps[index];

  return (
    <motion.li style={reduce ? undefined : { scale, y, backgroundColor, color }}>
      <motion.span style={reduce ? undefined : { backgroundColor: markerBackground }}>{String(index + 1).padStart(2, "0")}</motion.span>
      <div><small>FAN MOMENT</small><strong>{step[0]}</strong><p>{step[1]}</p><b>{step[2]}</b></div>
    </motion.li>
  );
}

export function FrictionJourney() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineScale = useTransform(scrollYProgress, [0.04, 0.92], [0, 1]);
  const trackX = useTransform(scrollYProgress, [0.02, 0.98], ["0vw", "-154vw"]);

  return (
    <section id="journey" ref={ref} className={styles.frictionStory}>
      <div className={styles.frictionSticky}>
        <div className={styles.frictionStoryHead}>
          <span>04 / THE FRICTION MAP</span>
          <h2><span>8 MOMENTS.</span><em>ONE ROUTE.</em></h2>
          <p>Transportation uncertainty starts long before booking and returns at the exact moment demand peaks.</p>
        </div>
        <div className={styles.journeyCanvas}>
          <motion.ol style={reduce ? undefined : { x: trackX }}>{journeySteps.map((step, index) => <JourneyNode key={step[0]} progress={scrollYProgress} index={index} />)}</motion.ol>
        </div>
        <div className={styles.journeyProgress}><span>DISCOVER</span><motion.i style={reduce ? undefined : { scaleX: lineScale }} /><span>RETURN</span></div>
      </div>
    </section>
  );
}

export function CampaignReveal() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const leftX = useTransform(scrollYProgress, [0.08, 0.56], ["0%", "-102%"]);
  const rightX = useTransform(scrollYProgress, [0.08, 0.56], ["0%", "102%"]);
  const titleScale = useTransform(scrollYProgress, [0.32, 0.72], [0.84, 1]);
  const titleOpacity = useTransform(scrollYProgress, [0.28, 0.52], [0, 1]);
  const lineScale = useTransform(scrollYProgress, [0.5, 0.84], [0, 1]);

  return (
    <section id="platform" ref={ref} className={styles.campaignReveal}>
      <div className={styles.campaignSticky}>
        <div className={styles.campaignUnderlay}>
          <motion.div style={reduce ? undefined : { scale: titleScale, opacity: titleOpacity }}>
            <span>THE RECOMMENDED CAMPAIGN PLATFORM</span>
            <h2>THE FIRST STAGE<br />IS THE <em>RIDE.</em></h2>
            <motion.i style={reduce ? undefined : { scaleX: lineScale }} />
            <p>Make the ride feel like the first chapter of Head In The Clouds, then make Lot H and [EVENT CODE] impossible to miss when intent peaks.</p>
            <ul><li>PAID SOCIAL</li><li>BRANDED FLEET</li><li>LOT H</li></ul>
          </motion.div>
        </div>
        <motion.div className={`${styles.revealCurtain} ${styles.revealCurtainLeft}`} style={reduce ? { x: "-102%" } : { x: leftX }}>
          <span>RESEARCH</span><strong>THE JOURNEY<br />BEGINS BEFORE<br />THE GATES.</strong>
        </motion.div>
        <motion.div className={`${styles.revealCurtain} ${styles.revealCurtainRight}`} style={reduce ? { x: "102%" } : { x: rightX }}>
          <span>RECOMMENDATION</span><strong>MAKE THE<br />MOVEMENT<br />MEMORABLE.</strong>
        </motion.div>
        <div className={styles.revealProgress}><motion.span style={{ scaleX: scrollYProgress }} /></div>
      </div>
    </section>
  );
}

export function BudgetRing() {
  const reduce = useReducedMotion();
  return (
    <div className={styles.budgetRing} role="img" aria-label="Media budget: 55 percent Meta and 45 percent TikTok">
      <svg viewBox="0 0 240 240" aria-hidden="true">
        <circle className={styles.ringTrack} cx="120" cy="120" r="91" />
        <motion.circle
          className={styles.ringMeta}
          cx="120" cy="120" r="91"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 0.55 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          className={styles.ringTikTok}
          cx="120" cy="120" r="91"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 0.45 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.15, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div><strong>$15K</strong><span>MEDIA</span></div>
    </div>
  );
}

export function KineticBand() {
  const reduce = useReducedMotion();
  const phrase = "THE FIRST STAGE IS THE RIDE / LA TO LOT H / ";
  return (
    <div className={styles.kineticBand} aria-hidden="true">
      <motion.div
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <span>{phrase.repeat(5)}</span><span>{phrase.repeat(5)}</span>
      </motion.div>
    </div>
  );
}
