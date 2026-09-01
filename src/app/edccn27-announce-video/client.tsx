"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import styles from "./proposal.module.css";

const rate = 100;

const pricing = [
  {
    service: "Creative direction and kickoff",
    hours: 5,
    detail: "Creative alignment, asset review and technical kickoff.",
  },
  {
    service: "Editorial development and first cut",
    hours: 20,
    detail: "Narrative structure, editorial build and first-cut delivery.",
  },
  {
    service: "Motion design and finishing",
    hours: 18,
    detail: "Motion design, audio balance, polish and finishing.",
  },
  {
    service: "Format adaptation for three sizes",
    hours: 7,
    detail: "One approved master adapted across three client-specified sizes.",
  },
  {
    service: "Two revision rounds",
    hours: 8,
    detail: "Two rounds of consolidated, timecoded client feedback.",
  },
  {
    service: "Final QC, exports and delivery",
    hours: 3,
    detail: "Quality control and final delivery exports.",
  },
  {
    service: "Project management and client communication",
    hours: 4,
    detail: "Production coordination and client communication throughout.",
  },
] as const;

const phases = [
  {
    name: "Kickoff",
    action: "Align the inputs",
    description: "Review approved assets, creative references, final copy, audio and delivery specifications.",
  },
  {
    name: "Editorial",
    action: "Build the story",
    description: "Shape the 60-second edit, establish pacing and carry one clear announce idea through the piece.",
  },
  {
    name: "Finish",
    action: "Make motion lead",
    description: "Develop motion graphics, balance audio and finish the approved editorial direction.",
  },
  {
    name: "Adapt",
    action: "Translate the master",
    description: "Adapt the approved core creative into three client-specified sizes and check every output.",
  },
  {
    name: "Refine",
    action: "Consolidate feedback",
    description: "Apply two rounds of consolidated, timecoded notes without fragmenting the production path.",
  },
  {
    name: "Deliver",
    action: "Complete by September 25",
    description: "Run final quality control and deliver the complete output package on the accelerated schedule.",
  },
] as const;

const schedule = [
  { date: "Sep 8", item: "Approved materials received" },
  { date: "Sep 9", item: "Kickoff" },
  { date: "Sep 15", item: "First cut" },
  { date: "Sep 17", item: "Consolidated round-one notes" },
  { date: "Sep 20", item: "Second cut" },
  { date: "Sep 22", item: "Consolidated round-two notes" },
  { date: "Sep 25", item: "Final delivery" },
] as const;

const specs = [
  { index: "01", label: "Runtime", value: "60 seconds" },
  { index: "02", label: "Outputs", value: "Three client-specified sizes" },
  { index: "03", label: "Review", value: "Two consolidated rounds" },
  { index: "04", label: "Delivery", value: "September 25" },
] as const;

const totalHours = pricing.reduce((sum, item) => sum + item.hours, 0);
const totalPrice = totalHours * rate;
const formattedTotalPrice = `$${totalPrice.toLocaleString("en-US")}`;
const approvalHref =
  "mailto:hello@crowdcontroldigital.com?subject=EDC%20China%202027%20Announce%20Video%20Approval";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <p className={styles.sectionKicker}>
      <span>{index}</span>
      {label}
    </p>
  );
}

function ProgressRail() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className={styles.progressRail} aria-hidden="true">
      <span>Proposal progress</span>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          style={{ scaleY: reduce ? 1 : progress }}
        />
      </div>
    </div>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number, y = 20) => ({
    initial: reduce ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <section className={styles.hero} aria-labelledby="proposal-title">
      <div className={styles.heroCopy}>
        <motion.p className={styles.kicker} {...enter(0.05)}>
          Prepared for Insomniac
        </motion.p>
        <h1 id="proposal-title" className={styles.heroTitle}>
          <span className={styles.titleClip}>
            <motion.span {...enter(0.14, 56)}>EDC China 2027</motion.span>
          </span>
          <span className={styles.titleClip}>
            <motion.span className={styles.titleAccent} {...enter(0.26, 56)}>
              60-Second Announce Video
            </motion.span>
          </span>
        </h1>
        <motion.p className={styles.intro} {...enter(0.42)}>
          Crowd Control will create a bespoke, motion-led 60-second announce video for EDC China 2027, delivered in three client-specified sizes with two revision rounds.
        </motion.p>
      </div>

      <motion.div
        className={styles.specPanel}
        role="group"
        aria-label="Production spec: 60-second video delivered in three sizes by September 25 with two review rounds"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease }}
      >
        <p className={styles.specPanelLabel}>Production spec</p>
        <dl>
          {specs.map((spec, index) => (
            <motion.div
              key={spec.index}
              className={styles.specRow}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.46 + index * 0.09, ease }}
            >
              <span className={styles.specIndex}>{spec.index}</span>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </motion.div>
          ))}
        </dl>
        <p className={styles.specNote}>Exact sizes confirmed at kickoff.</p>
      </motion.div>
    </section>
  );
}

function ApproachStory() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className={styles.approachSection} aria-labelledby="approach-title">
      <div className={styles.approachStage}>
        <SectionKicker index="01" label="Production approach" />
        <h2 id="approach-title">One continuous production path</h2>
        <div className={styles.stageWindow} aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.name}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 1 } : { opacity: 0, y: -14 }}
              transition={{ duration: 0.36, ease }}
            >
              <span>{current.name}</span>
              <strong>{String(active + 1).padStart(2, "0")}</strong>
            </motion.div>
          </AnimatePresence>
          <div className={styles.phaseMeter}>
            <motion.i
              animate={{ transform: `scaleX(${(active + 1) / phases.length})` }}
              transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 25 }}
            />
          </div>
          <small>Phase {active + 1} of {phases.length}</small>
        </div>
      </div>

      <ol className={styles.phasePanels}>
        {phases.map((phase, index) => (
          <motion.li
            key={phase.name}
            className={active === index ? styles.activePhase : undefined}
            onViewportEnter={() => setActive(index)}
            viewport={{ amount: 0.55 }}
            initial={reduce ? false : { opacity: 0.4 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease }}
          >
            <span className={styles.phaseLabel}>
              <i>{String(index + 1).padStart(2, "0")}</i>
              {phase.name}
            </span>
            <h3>{phase.action}</h3>
            <p>{phase.description}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}

function Deliverables() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.deliverablesSection} aria-labelledby="deliverables-title">
      <Reveal className={styles.deliverablesCopy}>
        <SectionKicker index="02" label="Deliverables" />
        <h2 id="deliverables-title">One idea, built to travel.</h2>
        <p>One 60-second master creative becomes three client-specified outputs after the direction is approved.</p>
        <a
          className={styles.referenceLink}
          href="https://www.dropbox.com/scl/fo/bixxolaijjq763iikplya/AG7DiX_Gg2orVXtwj9KVovg?rlkey=x4x6p1d38j3a31mlnporv2aj2&dl=0"
          target="_blank"
          rel="noreferrer"
        >
          View reference folder
        </a>
      </Reveal>

      <div className={styles.outputComposition} aria-label="One 60-second master adapted to three client-specified sizes">
        <Reveal className={styles.masterOutput}>
          <span>Master creative</span>
          <strong>60 seconds</strong>
          <small>Approved direction</small>
        </Reveal>
        <div className={styles.outputConnector} aria-hidden="true">
          <motion.i
            initial={reduce ? false : { transform: "scaleX(0)" }}
            whileInView={{ transform: "scaleX(1)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          />
        </div>
        <div className={styles.outputStack}>
          {["Output 01", "Output 02", "Output 03"].map((label, index) => (
            <motion.div
              key={label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: 0.4 + index * 0.1, ease }}
            >
              <span>{label}</span>
              <strong>Client-specified size</strong>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal className={styles.revisionBoundary} delay={0.08}>
        <div>
          <strong>Two</strong>
          <span>Consolidated revision rounds</span>
        </div>
        <p>Two rounds cover refinements to the approved direction, edit, timing, graphics, copy, audio balance and formatting.</p>
        <p>A new concept, major structural change after first-cut approval, new runtime, additional sizes, or extra revision rounds are out of scope and quoted at $100/hour after written approval.</p>
      </Reveal>
    </section>
  );
}

function Estimate() {
  return (
    <section className={styles.investmentSection} aria-labelledby="investment-title">
      <Reveal className={styles.investmentLead}>
        <SectionKicker index="03" label="Investment" />
        <h2 id="investment-title">Project investment</h2>
        <p>Fixed project price based on {totalHours} planned hours at ${rate}/hour.</p>
        <div className={styles.priceLockup}>
          <span>Fixed price</span>
          <strong>{formattedTotalPrice}</strong>
        </div>
      </Reveal>

      <Reveal className={styles.estimate} delay={0.08}>
        <div className={styles.estimateHeading}>
          <span>Estimate detail</span>
          <span>{totalHours} hours</span>
        </div>
        {pricing.map((item, index) => (
          <details key={item.service} open className={styles.estimateRow}>
            <summary>
              <span>{item.service}</span>
              <span>{item.hours}h</span>
              <strong>${(item.hours * rate).toLocaleString("en-US")}</strong>
            </summary>
            <p>{item.detail}</p>
          </details>
        ))}
        <div className={styles.estimateTotal}>
          <span>Total</span>
          <span>{totalHours}h</span>
          <strong>{formattedTotalPrice}</strong>
        </div>
      </Reveal>
    </section>
  );
}

function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.scheduleSection} aria-labelledby="schedule-title">
      <Reveal className={styles.scheduleHead}>
        <SectionKicker index="04" label="Schedule" />
        <h2 id="schedule-title">Accelerated schedule</h2>
        <p>Seven clear handoffs move the production from approved inputs to final delivery.</p>
      </Reveal>

      <div className={styles.timelineWrap}>
        <div className={styles.timelineLine} aria-hidden="true">
          <motion.i
            initial={reduce ? false : { transform: "scaleY(0)" }}
            whileInView={{ transform: "scaleY(1)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease }}
          />
        </div>
        <ol className={styles.timeline}>
          {schedule.map((milestone, index) => (
            <motion.li
              key={milestone.date}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease }}
            >
              <time>{milestone.date}</time>
              <span>{milestone.item}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      <Reveal className={styles.scheduleDependency}>
        Final delivery is scheduled for September 25, provided approved materials arrive by September 8 and consolidated feedback is returned on the dates above.
      </Reveal>
    </section>
  );
}

function Terms() {
  return (
    <section className={styles.termsSection} aria-labelledby="assumptions-title">
      <Reveal className={styles.assumptions}>
        <SectionKicker index="05" label="Terms" />
        <h2 id="assumptions-title">Working assumptions</h2>
        <ul>
          <li>Insomniac supplies approved source assets, final copy, brand guidance, approved and cleared audio, and technical delivery specs by September 8.</li>
          <li>The exact three sizes are confirmed at kickoff.</li>
          <li>One core creative direction is adapted to the other two sizes.</li>
          <li>One designated contact provides one consolidated timecoded feedback set per revision round.</li>
          <li>Runtime and core message remain consistent across sizes.</li>
        </ul>
      </Reveal>

      <div className={styles.boundaries}>
        <Reveal>
          <h3>Not included</h3>
          <p>Original live-action production or shooting, talent, licensing fees, stock purchases, 3D character animation, original music composition, voiceover recording, translation, source project files, and deliverables beyond three sizes, unless added in writing.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h3>Proposal terms</h3>
          <p>Project fees are invoiced on final delivery and payable Net 30.</p>
        </Reveal>
      </div>
    </section>
  );
}

function Approval() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.ctaSection} aria-labelledby="approval-title">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease }}
      >
        <p>Ready to schedule production?</p>
        <h2 id="approval-title">Approve the scope by email.</h2>
      </motion.div>
      <motion.a
        className={styles.cta}
        href={approvalHref}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.12, ease }}
      >
        Approve scope
      </motion.a>
    </section>
  );
}

export default function ProposalExperience() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#proposal-content">Skip to proposal</a>
      <ProgressRail />

      <header className={styles.header}>
        <Image
          className={styles.logo}
          src="/brand/CC-LOGO-2024-WHITE.png"
          width={220}
          height={31}
          alt="Crowd Control"
          priority
        />
        <p>Creative production proposal</p>
      </header>

      <div id="proposal-content">
        <Hero />
        <ApproachStory />
        <Deliverables />
        <Estimate />
        <Timeline />
        <Terms />
        <Approval />
      </div>

      <footer className={styles.footer}>
        <Image
          src="/brand/CC-LOGO-2024-WHITE.png"
          width={176}
          height={25}
          alt="Crowd Control"
        />
        <p>EDC China 2027 Announce Video proposal</p>
      </footer>
    </main>
  );
}
