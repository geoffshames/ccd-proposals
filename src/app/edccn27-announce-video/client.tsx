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
import { useEffect, useState } from "react";
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

const scopeFacts = [
  "Bespoke motion-led 60-second master creative",
  "Adaptation to three client-specified sizes",
  "Two consolidated revision rounds",
  "Final exports",
  "Client coordination",
] as const;

const ratios = [
  { label: "16:9 planning frame", box: "100%", height: "56.25%" },
  { label: "9:16 planning frame", box: "31.64%", height: "100%" },
  { label: "1:1 planning frame", box: "70.7%", height: "70.7%" },
] as const;

const dockFacts = ["$6,500 fixed", "September 25 delivery", "One master, three sizes"] as const;

const totalHours = pricing.reduce((sum, item) => sum + item.hours, 0);
const totalPrice = totalHours * rate;
const formattedTotalPrice = `$${totalPrice.toLocaleString("en-US")}`;

const approvalSubject = "EDC China 2027 Announce Video Approval";
const approvalBody = [
  "Hi Crowd Control,",
  "",
  "Approved: EDC China 2027 60-Second Announce Video.",
  "",
  "Scope: one bespoke motion-led 60-second master creative, adapted to three",
  "client-specified sizes, two consolidated revision rounds, final exports,",
  "client coordination.",
  `Price: ${formattedTotalPrice} fixed, ${totalHours} planned hours at $${rate}/hour.`,
  "Delivery: September 25.",
  "",
  "Approved materials will be with you by September 8.",
  "",
  "Thanks,",
  "[Name]",
  "Insomniac",
].join("\n");
const approvalHref = `mailto:hello@crowdcontroldigital.com?subject=${encodeURIComponent(approvalSubject)}&body=${encodeURIComponent(approvalBody)}`;

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
          A bespoke, motion-led 60-second announce video for EDC China 2027. One master creative, three client-specified sizes, two consolidated revision rounds, delivered September 25 for a fixed {formattedTotalPrice}.
        </motion.p>
      </div>

      <motion.ul className={styles.anchorStrip} {...enter(0.56)}>
        <li>
          <span>Fixed price</span>
          <strong>{formattedTotalPrice}</strong>
        </li>
        <li>
          <span>Delivery</span>
          <strong>September 25</strong>
        </li>
        <li>
          <span>Scope</span>
          <strong>One master, three sizes</strong>
        </li>
      </motion.ul>
    </section>
  );
}

function Deliverable() {
  return (
    <section className={styles.deliverableSection} aria-labelledby="deliverable-title">
      <div className={styles.deliverableCopy}>
        <Reveal>
          <SectionKicker index="01" label="The deliverable" />
          <h2 id="deliverable-title">One master. Three sizes.</h2>
          <p>
            Crowd Control builds one bespoke, motion-led 60-second master creative, then adapts the approved direction into three client-specified sizes. Exact sizes are confirmed at kickoff.
          </p>
        </Reveal>
        <Reveal delay={0.08} className={styles.scopeList}>
          <ul>
            {scopeFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <a
            className={styles.referenceLink}
            href="https://www.dropbox.com/scl/fo/bixxolaijjq763iikplya/AG7DiX_Gg2orVXtwj9KVovg?rlkey=x4x6p1d38j3a31mlnporv2aj2&dl=0"
            target="_blank"
            rel="noreferrer"
          >
            View reference folder
          </a>
        </Reveal>
      </div>

      <Reveal className={styles.outputComposition} delay={0.05}>
        <div className={styles.masterOutput}>
          <span>Master creative</span>
          <strong>60 seconds</strong>
          <small>Approved direction</small>
        </div>
        <div className={styles.outputStack}>
          {["Output 01", "Output 02", "Output 03"].map((label) => (
            <div key={label}>
              <span>{label}</span>
              <strong>Client-specified size</strong>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function Storyboard() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className={styles.planSection} aria-labelledby="plan-title">
      <div className={styles.planStage}>
        <Reveal>
          <SectionKicker index="02" label="The production plan" />
          <h2 id="plan-title">Built as one continuous path</h2>
          <p>
            Six phases, two consolidated review points, one production spine. Feedback is consolidated, never fragmented. Walk the plan.
          </p>
        </Reveal>

        <Reveal className={styles.editSuite} delay={0.08}>
          <div className={styles.suiteHeader}>
            <span>Pre-production framing spec</span>
            <output className={styles.suiteTimecode}>
              {String(active + 1).padStart(2, "0")}:{String(Math.round(((active + 1) / phases.length) * 60)).padStart(2, "0")}
            </output>
          </div>

          <div className={styles.framingStage} aria-hidden="true">
            <div className={styles.framingBoard}>
              {ratios.map((ratio) => (
                <div key={ratio.label} className={styles.framingCell}>
                  <div className={styles.framingFrame}>
                    <span className={styles.framingRatio}>{ratio.label}</span>
                    <i className={styles.framingOutline} style={{ width: ratio.box, paddingBottom: ratio.height }} />
                    <i className={styles.framingCenter} />
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.framingNote}>Editorial direction developed at kickoff</p>
          </div>

          <p className={styles.framingCaption}>
            Final client-specified sizes confirmed at kickoff.
          </p>

          <div className={styles.suiteControls}>
            <div className={styles.phaseMeter} aria-hidden="true">
              <motion.i
                animate={{ transform: `scaleX(${(active + 1) / phases.length})` }}
                transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 140, damping: 25 }}
              />
            </div>
            <small>Phase {active + 1} of {phases.length}</small>
          </div>
        </Reveal>
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

function Timeline() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.scheduleSection} aria-labelledby="schedule-title">
      <Reveal className={styles.scheduleHead}>
        <SectionKicker index="03" label="The schedule" />
        <h2 id="schedule-title">Final delivery September 25</h2>
        <p>
          Sixteen days from kickoff to delivery, across seven dated handoffs. September 25 holds when approved materials arrive by September 8 and consolidated feedback returns on September 17 and September 22.
        </p>
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
    </section>
  );
}

function Estimate() {
  return (
    <section className={styles.investmentSection} aria-labelledby="investment-title">
      <Reveal className={styles.investmentLead}>
        <SectionKicker index="04" label="The investment" />
        <h2 id="investment-title">One fixed price</h2>
        <p>
          {formattedTotalPrice} fixed, based on {totalHours} planned hours at ${rate}/hour. The only way the number moves is with your written approval.
        </p>
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
        {pricing.map((item) => (
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
        <p className={styles.scopeBoundary}>
          A new concept, major structural change after first-cut approval, new runtime, additional sizes, or extra revision rounds are out of scope and quoted at $100/hour after written approval.
        </p>
      </Reveal>
    </section>
  );
}

function Terms() {
  return (
    <section className={styles.termsSection} aria-labelledby="agreement-title">
      <Reveal className={styles.assumptions}>
        <SectionKicker index="05" label="The agreement" />
        <h2 id="agreement-title">What we agree on</h2>
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

function DecisionDock() {
  const [dockVisible, setDockVisible] = useState(false);

  useEffect(() => {
    const investment = document.getElementById("investment-title");
    if (!investment) return;
    const observer = new IntersectionObserver(
      ([entry]) => setDockVisible(entry.isIntersecting || entry.boundingClientRect.top < 0),
      { threshold: 0.1 }
    );
    observer.observe(investment);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={dockVisible ? `${styles.dock} ${styles.dockActive}` : styles.dock} aria-hidden={!dockVisible}>
      <ul className={styles.dockFacts}>
        {dockFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <a
        className={styles.dockCta}
        href={approvalHref}
        tabIndex={dockVisible ? 0 : -1}
        aria-hidden={!dockVisible}
      >
        Approve by email
      </a>
      <p className={styles.dockNote}>Opens your mail app. Nothing is submitted here.</p>
    </div>
  );
}

function Decision() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.ctaSection} aria-labelledby="decision-title">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, ease }}
      >
        <SectionKicker index="06" label="The decision" />
        <h2 id="decision-title">Approve the scope by email</h2>
        <p className={styles.decisionLead}>
          One email starts production. Approve the scope and Crowd Control schedules the September 9 kickoff.
        </p>
      </motion.div>
      <div className={styles.decisionBlock}>
        <motion.a
          className={styles.cta}
          href={approvalHref}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
        >
          Approve by email
        </motion.a>
        <p className={styles.transparencyNote}>
          Opens a prefilled email to hello@crowdcontroldigital.com in your mail app. This page sends nothing and records nothing.
        </p>
      </div>
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
        <Deliverable />
        <Storyboard />
        <Timeline />
        <Estimate />
        <Terms />
        <Decision />
      </div>

      <DecisionDock />

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
