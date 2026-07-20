"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  auditSignals,
  collaborationCadence,
  coreScope,
  dependencies,
  engagementPhases,
  engagementPremise,
  investment,
  ninetyDayPriorities,
  optionalModules,
  proposalCta,
  proposalMeta,
  proposalNav,
  workstreams,
} from "@/lib/champion-teamwear-proposal";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CinematicHero,
  FeeBar,
  KineticRosterBand,
  Magnetic,
  MeterFill,
  Reveal,
  RoadSpine,
} from "./motion";
import styles from "./proposal.module.css";

/* ------------------------------------------------------------------ */
/* Content constants                                                   */
/* ------------------------------------------------------------------ */

const signalScores = [
  { label: "Masterbrand permission", value: 4.5, note: "Strong starting equity", low: false },
  { label: "Rep + service equity", value: 4.0, note: "Valuable, not yet systematic", low: false },
  { label: "Digital trust", value: 1.5, note: "Fragmented public experience", low: true },
  { label: "Youth cultural pull", value: 1.5, note: "Meaningful whitespace", low: true },
] as const;

const flowSteps = [
  ["01", "Truth", "New paid audit and discovery"],
  ["02", "Choices", "Position, audiences and growth priorities"],
  ["03", "System", "Channel roles, roadmap and scorecard"],
  ["04", "Signal", "Pilots, learning and scale decisions"],
] as const;

const identityMoments = [
  {
    signal: "Perform",
    name: "Game day",
    copy: "The highest-stakes expression of team identity.",
    img: "/champion-proposal/gameday.jpg",
  },
  {
    signal: "Prepare",
    name: "Practice",
    copy: "Where repetition turns standards into culture.",
    img: "/champion-proposal/practice.jpg",
  },
  {
    signal: "Represent",
    name: "Travel",
    copy: "The team stays visible beyond the field of play.",
    img: "/champion-proposal/travel.jpg",
  },
  {
    signal: "Belong",
    name: "Fandom",
    copy: "The audience carries the identity into the world.",
    img: "/champion-proposal/fandom.jpg",
  },
] as const;

const pillars = [
  ["01", "Demand", "Find and convert the right buyers"],
  ["02", "Story", "Make the brand distinct in motion"],
  ["03", "System", "Learn, adapt and compound"],
] as const;

/* ------------------------------------------------------------------ */
/* Section header                                                      */
/* ------------------------------------------------------------------ */

function SectionHead({
  index,
  eyebrow,
  note,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  note?: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <div className={styles.head}>
      <Reveal>
        <div className={styles.headRule}>
          <span className={styles.headIndex}>
            <b>{index}</b>
            {eyebrow}
          </span>
          {note ? <span className={styles.headNote}>{note}</span> : null}
        </div>
        <div className={styles.headGrid}>
          <h2>{title}</h2>
          {body ? <p className={styles.headBody}>{body}</p> : null}
        </div>
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

function ProposalNavigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const sections = proposalNav
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className={styles.nav} aria-label="Proposal navigation">
        <a
          className={styles.wordmark}
          href="#top"
          aria-label="Crowd Control Digital, back to top"
        >
          <Image
            src="/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width={2198}
            height={307}
            priority
          />
        </a>
        <div className={styles.navLinks}>
          {proposalNav.slice(0, 6).map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? styles.navActive : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a className={styles.navContact} href="#contact">
          Contact <ArrowUpRight size={12} />
        </a>
        <button
          className={`${styles.menuButton} ${open ? styles.menuOpen : ""}`}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <i />
          <i />
        </button>
        <motion.i className={styles.navProgress} style={{ scaleX: progress }} />
      </nav>

      {open ? (
        <div className={styles.mobileMenu}>
          {proposalNav.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.06 + index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item.label}
            </motion.a>
          ))}
        </div>
      ) : null}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export function ChampionTeamwearProposalClient() {
  const roadRef = useRef<HTMLDivElement>(null);
  const featured = optionalModules.find((module) => module.featured);
  const standardModules = optionalModules.filter((module) => !module.featured);

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to proposal
      </a>
      <div className={styles.grain} aria-hidden="true" />
      <ProposalNavigation />
      <CinematicHero />
      <KineticRosterBand />

      <div id="main-content">
        {/* 01 — MANDATE ---------------------------------------------- */}
        <section id="opportunity" className={styles.section}>
          <SectionHead
            index="01"
            eyebrow="The mandate"
            note="Strategy first / execution by evidence"
            title={
              <>
                Build the decision system{" "}
                <em>before scaling the output.</em>
              </>
            }
            body={engagementPremise.body}
          />

          <div className={styles.mandateGrid}>
            <Reveal className={styles.mandateStatement}>
              <span className={styles.miniLabel}>The assignment</span>
              <h3>{engagementPremise.title}</h3>
              <p>
                Crowd Control will operate as an embedded growth and strategy
                partner. We will help leadership resolve ambiguity, rank the
                real opportunities, and translate those choices into a system
                the business can use.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <span className={styles.miniLabel}>
                The engagement must produce
              </span>
              <div className={styles.mustList}>
                {[
                  "A distinct Teamwear position inside the broader Champion brand",
                  "A ranked portfolio of growth opportunities across audiences, categories and channels",
                  "A connected go-to-market system for social, CRM, web, paid, content, partnerships and events",
                  "A practical 6 to 12-month roadmap with owners, dependencies and decision gates",
                ].map((item, index) => (
                  <div key={item}>
                    <b>0{index + 1}</b>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className={styles.flowStrip}>
              {flowSteps.map(([number, label, copy], index) => (
                <div key={label}>
                  <span>{number}</span>
                  <strong>{label}</strong>
                  <small>{copy}</small>
                  {index < flowSteps.length - 1 ? <ArrowRight /> : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.distinction}>
              <span>Important distinction</span>
              <p>{engagementPremise.priorWorkNote}</p>
            </div>
          </Reveal>
        </section>

        {/* 02 — SIGNALS ---------------------------------------------- */}
        <section id="signals" className={styles.section}>
          <SectionHead
            index="02"
            eyebrow="Starting signals"
            note="Orientation / not final audit"
            title={
              <>
                What we know. <em>What the audit must prove.</em>
              </>
            }
            body="The initial diagnostic gives us useful hypotheses, not a finished answer. The first month validates these signals against internal data, direct discovery, current brand materials and operating reality."
          />

          <div className={styles.signalLayout}>
            <Reveal>
              <div className={styles.meterWrap}>
                <div className={styles.meter}>
                  <div className={styles.meterHead}>
                    <span>Initial orientation</span>
                    <span>Score / 5.0</span>
                  </div>
                  {signalScores.map((signal, index) => (
                    <div
                      className={`${styles.meterRow} ${signal.low ? styles.meterLow : ""}`}
                      key={signal.label}
                    >
                      <div>
                        <strong>{signal.label}</strong>
                        <small>{signal.note}</small>
                        <MeterFill value={signal.value} index={index} />
                      </div>
                      <b>{signal.value.toFixed(1)}</b>
                    </div>
                  ))}
                  <p className={styles.meterFoot}>
                    Directional signal from the pre-engagement diagnostic.
                    Phase 1 replaces orientation with a paid, decision-grade
                    audit.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal className={styles.hypothesis} delay={0.08}>
              <span className={styles.miniLabel}>Working hypothesis</span>
              <strong>
                The equity exists.
                <br />
                <em>The system does not.</em>
              </strong>
              <p>
                Recognition, product breadth and rep relationships provide
                permission. The growth opportunity is to convert that
                permission into preference, trust and repeatable demand.
              </p>
            </Reveal>
          </div>

          <div className={styles.signalRows}>
            {auditSignals.map((signal) => (
              <Reveal className={styles.signalRow} key={signal.code}>
                <span className={styles.signalNum}>{signal.code}</span>
                <div className={styles.signalMain}>
                  <h3>{signal.title}</h3>
                  <p>{signal.read}</p>
                  <small>{signal.basis}</small>
                </div>
                <div className={styles.signalSo}>
                  <span>Strategic implication</span>
                  <p>{signal.implication}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 03 — IDENTITY FIELD --------------------------------------- */}
        <section id="identity" className={`${styles.section} ${styles.identitySection}`}>
          <div className={styles.identityHead}>
            <SectionHead
              index="03"
              eyebrow="The identity field"
              note="One system / four moments"
              title={
                <>
                  One brand. <em>Four team moments.</em>
                </>
              }
              body="Champion Teamwear does not need four disconnected campaigns. It needs one recognizable system that flexes with the moment."
            />
          </div>
          <Reveal>
            <div className={styles.identityGrid}>
              {identityMoments.map((moment, index) => (
                <article className={styles.identityPanel} key={moment.name}>
                  <div className={styles.identityImg}>
                    <Image
                      src={moment.img}
                      alt={`${moment.name} textile detail`}
                      fill
                      sizes="(max-width: 620px) 100vw, (max-width: 1180px) 50vw, 25vw"
                    />
                  </div>
                  <div className={styles.identityTop}>
                    <span>0{index + 1}</span>
                    <span>{moment.signal}</span>
                  </div>
                  <div className={styles.identityBody}>
                    <strong>{moment.name}</strong>
                    <p>{moment.copy}</p>
                  </div>
                  <i className={styles.identityRule} aria-hidden="true" />
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 04 — ENGAGEMENT ------------------------------------------- */}
        <section id="engagement" className={styles.section}>
          <SectionHead
            index="04"
            eyebrow="Engagement architecture"
            note="$10K / month core"
            title={
              <>
                Six workstreams. <em>One accountable rhythm.</em>
              </>
            }
            body="The core retainer pairs the strategic layer with hands-on social and CRM execution. Paid media, production and platform work are added only where the roadmap creates a clear reason to invest."
          />

          <Reveal>
            <div className={styles.shiftStrip}>
              <div className={styles.shiftCell}>
                <span>From</span>
                <strong>Disconnected activity</strong>
                <small>Campaigns / channels / handoffs</small>
              </div>
              <span className={styles.shiftArrow} aria-hidden="true">
                <ArrowRight size={26} />
              </span>
              <div className={`${styles.shiftCell} ${styles.shiftTo}`}>
                <span>To</span>
                <strong>One growth rhythm</strong>
                <small>
                  {pillars.map(([, label]) => label).join(" / ")} / learning
                </small>
              </div>
            </div>
          </Reveal>

          <div className={styles.workRows}>
            {workstreams.map((workstream) => (
              <Reveal className={styles.workRow} key={workstream.number}>
                <span className={styles.workNum}>{workstream.number}</span>
                <div className={styles.workId}>
                  <h3>{workstream.title}</h3>
                  <p>{workstream.role}</p>
                </div>
                <div className={styles.workList}>
                  {workstream.deliverables.map((item) => (
                    <div key={item}>
                      <i>+</i>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={styles.workOutcome}>
                  <span>Outcome</span>
                  <p>{workstream.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 — ROADMAP ---------------------------------------------- */}
        <section id="roadmap" className={styles.section}>
          <SectionHead
            index="05"
            eyebrow="Six-month flight plan"
            note="Proposed 6-month runway"
            title={
              <>
                Every phase ends <em>with a decision.</em>
              </>
            }
            body="The engagement moves collaboratively without becoming an endless strategy exercise. Each phase produces tangible outputs and a leadership choice that unlocks the next."
          />

          <div className={styles.roadWrap} ref={roadRef}>
            <RoadSpine target={roadRef} />
            {engagementPhases.map((phase) => (
              <Reveal className={styles.phase} key={phase.number}>
                <i className={styles.phaseMark} aria-hidden="true" />
                <div className={styles.phaseTop}>
                  <h3>
                    <span>{phase.number}</span>
                    {phase.title}
                  </h3>
                  <time>{phase.window}</time>
                </div>
                <p>{phase.objective}</p>
                <div className={styles.phaseOutputs}>
                  {phase.outputs.map((output) => (
                    <div key={output}>
                      <i>+</i>
                      {output}
                    </div>
                  ))}
                </div>
                <div className={styles.phaseGate}>
                  <i aria-hidden="true" />
                  <span>Decision gate</span>
                  <p>{phase.decision}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.exitStrip}>
              {ninetyDayPriorities.map((priority) => (
                <div key={priority.window}>
                  <span>
                    Exit condition <b>/ {priority.window}</b>
                  </span>
                  <p>{priority.exitCondition}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 06 — OPTIONAL MODULES ------------------------------------- */}
        <section id="options" className={styles.section}>
          <SectionHead
            index="06"
            eyebrow="Optional modules"
            note="Modular / approval required"
            title={
              <>
                Add capability <em>when the strategy calls for it.</em>
              </>
            }
            body="The core engagement covers strategy plus social and CRM operations. Additional tactical modules activate with a separate scope, fee, owner and definition of success."
          />

          {featured ? (
            <Reveal>
              <div className={styles.featuredModule}>
                <div className={styles.featuredInner}>
                  <span className={styles.featuredTag}>
                    <i aria-hidden="true" />
                    Recommended first module
                  </span>
                  <h3>{featured.title}</h3>
                  <p>{featured.description}</p>
                  <div className={styles.featuredIncludes}>
                    {featured.includes.map((item) => (
                      <div key={item}>
                        <i>+</i>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.featuredSide}>
                  <div className={styles.featuredPrice}>
                    <strong>$7,500</strong>
                    <span>Fixed fee / {featured.timing}</span>
                  </div>
                  <div className={styles.featuredTrigger}>
                    <span>Activate when</span>
                    <p>{featured.trigger}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ) : null}

          <div className={styles.moduleGrid}>
            {standardModules.map((module, index) => (
              <Reveal
                className={styles.moduleCard}
                key={module.id}
                delay={(index % 3) * 0.06}
              >
                <div className={styles.moduleTop}>
                  <span>0{index + 2}</span>
                  <span>{module.timing}</span>
                </div>
                <h3>{module.title}</h3>
                <div className={styles.modulePrice}>{module.price}</div>
                <p>{module.description}</p>
                <div className={styles.moduleList}>
                  {module.includes.map((item) => (
                    <div key={item}>
                      <i>+</i>
                      {item}
                    </div>
                  ))}
                </div>
                <div className={styles.moduleTrigger}>
                  <span>Activate when</span>
                  <p>{module.trigger}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className={styles.moduleNote} delay={0.12}>
              <span>Activation rule</span>
              <p>
                No optional module begins without an approved scope, fee,
                timeline and owner. Every module reports into the same shared
                scorecard and decision log as the core engagement.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 07 — PARTNERSHIP ------------------------------------------ */}
        <section id="partnership" className={styles.section}>
          <SectionHead
            index="07"
            eyebrow="How we work"
            note="Collaborative / iterative"
            title={
              <>
                No black box. <em>One shared working room.</em>
              </>
            }
            body="The best version of this engagement is embedded, practical and direct. Crowd Control brings the outside pattern recognition; Champion Teamwear brings the operating truth and decision authority."
          />

          <Reveal>
            <div className={styles.cadenceGrid}>
              {collaborationCadence.map((item) => (
                <div key={item.session}>
                  <time>{item.rhythm}</time>
                  <h3>{item.session}</h3>
                  <p>{item.purpose}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className={styles.principleSplit}>
            <Reveal>
              <div className={styles.principleCard}>
                <span>Operating principle</span>
                <h3>Decisions stay visible.</h3>
                <p>
                  Every recommendation is connected to evidence, an owner, a
                  deadline and a decision. No silent handoffs. No surprise
                  reveals.
                </p>
                <div className={styles.ownRow}>
                  <b>Crowd Control owns</b>
                  <p>
                    Research, synthesis, strategic recommendations, roadmap
                    management, pilot framing and clear escalation.
                  </p>
                </div>
                <div className={styles.ownRow}>
                  <b>Champion Teamwear owns</b>
                  <p>
                    Access, operating context, executive decisions, rights
                    confirmation, budgets and timely approvals.
                  </p>
                </div>
              </div>
            </Reveal>
            <div className={styles.scopeCols}>
              <Reveal className={styles.scopeCol} delay={0.06}>
                <h3>
                  <i>+</i>
                  {coreScope.includedTitle}
                </h3>
                {coreScope.included.map((item) => (
                  <div key={item}>
                    <i>+</i>
                    {item}
                  </div>
                ))}
              </Reveal>
              <Reveal
                className={`${styles.scopeCol} ${styles.scopeExcluded}`}
                delay={0.1}
              >
                <h3>
                  <i>−</i>
                  {coreScope.excludedTitle}
                </h3>
                {coreScope.excluded.map((item) => (
                  <div key={item}>
                    <i>−</i>
                    {item}
                  </div>
                ))}
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className={styles.depsBlock}>
              <div className={styles.depsHead}>
                <span>Needed to start strong</span>
                <strong>Access, ownership and decision rights</strong>
              </div>
              {dependencies.map((dependency, index) => (
                <div
                  className={`${styles.depRow} ${dependency.owner === "Joint" ? styles.depJoint : ""}`}
                  key={dependency.item}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{dependency.owner}</b>
                  <strong>{dependency.item}</strong>
                  <p>{dependency.why}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* 08 — INVESTMENT ------------------------------------------- */}
        <section id="investment" className={styles.section}>
          <SectionHead
            index="08"
            eyebrow="Investment"
            note="Offline approval + invoicing"
            title={
              <>
                A lean core. <em>Flexible execution.</em>
              </>
            }
            body="One monthly retainer covers strategy, social and CRM. Media management, creative production and optional modules are visible additions, never hidden inside the fee."
          />

          <Reveal>
            <FeeBar />
          </Reveal>

          <div className={styles.ledger}>
            {investment.map((line, index) => (
              <Reveal
                className={`${styles.ledgerRow} ${index === 0 ? styles.ledgerPrimary : ""}`}
                key={line.label}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{line.label}</h3>
                  <p>{line.note}</p>
                </div>
                <strong>{line.amount}</strong>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.termsStrip}>
              <div>
                <span>Runway</span>
                <strong>{proposalMeta.initialTerm}</strong>
              </div>
              <div>
                <span>Core fee</span>
                <strong>$10K / month</strong>
              </div>
              <div>
                <span>Payment terms</span>
                <strong>Finalized in agreement</strong>
              </div>
              <div>
                <span>Approval</span>
                <strong>Contact + agreement</strong>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CLOSING ---------------------------------------------------- */}
        <section id="contact" className={styles.closing}>
          <div className={styles.closingImg} aria-hidden="true">
            <Image
              src="/champion-proposal/closing.jpg"
              alt=""
              fill
              sizes="100vw"
            />
          </div>
          <div className={styles.closingInner}>
            <Reveal>
              <p className={styles.closingEyebrow}>
                <i aria-hidden="true" />
                {proposalCta.eyebrow}
              </p>
              <h2>
                Start with the core partnership.{" "}
                <em>Scale execution where the evidence earns it.</em>
              </h2>
              <p className={styles.closingBody}>{proposalCta.body}</p>
              <Magnetic>
                <a className={styles.btn} href={proposalCta.primaryHref}>
                  {proposalCta.primaryLabel}
                  <span className={styles.btnIcon}>
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </Magnetic>
            </Reveal>
          </div>
          <div className={styles.movesWrap}>
            <Reveal>
              <span className={styles.movesLabel}>The first four moves</span>
              <div className={styles.moves}>
                {proposalCta.firstSteps.map((step, index) => (
                  <div key={step}>
                    <b>0{index + 1}</b>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footTop}>
          <Image
            src="/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width={2198}
            height={307}
          />
          <div className={styles.footLinks}>
            <a href={`mailto:${proposalCta.contact}`}>{proposalCta.contact}</a>
            <a href="#top">
              Back to top <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
        <div className={styles.footLine}>
          <span>
            {proposalMeta.classification} / Champion Teamwear /{" "}
            {proposalMeta.issued}
          </span>
          <span>Crowd Control Digital, LLC</span>
        </div>
      </footer>
    </main>
  );
}
