"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  CircleDot,
  Menu,
  Target,
  X,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
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
  BudgetDial,
  CinematicHero,
  IdentityField,
  KineticRosterBand,
  RoadmapTrack,
  StrategyReveal,
} from "./motion";
import styles from "./proposal.module.css";

const signalScores = [
  { label: "MASTERBRAND PERMISSION", value: 4.5, note: "Strong starting equity" },
  { label: "REP + SERVICE EQUITY", value: 4, note: "Valuable, not yet systematic" },
  { label: "DIGITAL TRUST", value: 1.5, note: "Fragmented public experience" },
  { label: "YOUTH CULTURAL PULL", value: 1.5, note: "Meaningful whitespace" },
] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 48, clipPath: "inset(0 0 18% 0)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.78, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  number,
  eyebrow,
  title,
  body,
  note,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  note?: string;
}) {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.sectionCode}>
        <span>{number}</span>
        <span>{eyebrow}</span>
      </div>
      <div className={styles.sectionHeadline}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {note ? <span className={styles.sectionNote}>{note}</span> : null}
    </div>
  );
}

function ProposalNavigation() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={styles.nav} aria-label="Proposal navigation">
        <a className={styles.wordmark} href="#top" aria-label="Crowd Control Digital, back to top">
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
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </div>
        <a className={styles.navContact} href="#contact">
          CONTACT US <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button
          className={styles.menuButton}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <motion.i className={styles.navProgress} style={{ scaleX: progress }} />
      </nav>

      {open ? (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {proposalNav.map((item, index) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </>
  );
}

function SignalMeter() {
  const reduce = useReducedMotion();

  return (
    <div className={styles.signalMeter}>
      <div className={styles.signalMeterHead}>
        <span>INITIAL ORIENTATION</span>
        <span>SCORE / 5.0</span>
      </div>
      {signalScores.map((signal, index) => (
        <div className={styles.signalMeterRow} key={signal.label}>
          <div>
            <strong>{signal.label}</strong>
            <small>{signal.note}</small>
          </div>
          <div className={styles.signalMeterTrack}>
            <motion.i
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={reduce ? undefined : { scaleX: signal.value / 5 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <b>{signal.value.toFixed(1)}</b>
        </div>
      ))}
      <p>
        Directional signal from the pre-engagement diagnostic. Phase 1 replaces orientation with a new paid, decision-grade audit.
      </p>
    </div>
  );
}

function GrowthSystemFlow() {
  const steps = [
    ["01", "TRUTH", "New paid audit and discovery"],
    ["02", "CHOICES", "Position, audiences and growth priorities"],
    ["03", "SYSTEM", "Channel roles, roadmap and scorecard"],
    ["04", "SIGNAL", "Pilots, learning and scale decisions"],
  ] as const;

  return (
    <div className={styles.systemFlow} aria-label="The proposed growth system from audit through market signal">
      {steps.map(([number, label, copy], index) => (
        <div key={label}>
          <span>{number}</span>
          <strong>{label}</strong>
          <small>{copy}</small>
          {index < steps.length - 1 ? <ChevronRight aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

export function ChampionTeamwearProposalClient() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">Skip to proposal</a>
      <ProposalNavigation />
      <CinematicHero />
      <KineticRosterBand />

      <div id="main-content">
        <section id="opportunity" className={styles.section}>
          <SectionHeader
            number="01"
            eyebrow="THE MANDATE"
            title={<>BUILD THE DECISION SYSTEM <em>BEFORE SCALING THE OUTPUT.</em></>}
            body={engagementPremise.body}
            note="STRATEGY FIRST / EXECUTION BY EVIDENCE"
          />

          <div className={styles.premiseGrid}>
            <Reveal className={styles.premiseStatement}>
              <span>THE ASSIGNMENT</span>
              <h3>{engagementPremise.title}</h3>
              <p>
                Crowd Control will operate as an embedded growth and strategy partner. We will help leadership resolve ambiguity, rank the real opportunities, and translate those choices into a system the business can use.
              </p>
            </Reveal>
            <Reveal className={styles.mandateList} delay={0.08}>
              <span>THE ENGAGEMENT MUST PRODUCE</span>
              {[
                "A distinct Teamwear position inside the broader Champion brand",
                "A ranked portfolio of growth opportunities across audiences, categories and channels",
                "A connected go-to-market system for social, CRM, web, paid, content, partnerships and events",
                "A practical 6 to 12-month roadmap with owners, dependencies and decision gates",
              ].map((item, index) => (
                <div key={item}><b>0{index + 1}</b><p>{item}</p></div>
              ))}
            </Reveal>
          </div>

          <div className={styles.distinctionNote}>
            <span>IMPORTANT DISTINCTION</span>
            <p>{engagementPremise.priorWorkNote}</p>
          </div>
          <GrowthSystemFlow />
        </section>

        <section id="signals" className={`${styles.section} ${styles.sectionRaised}`}>
          <SectionHeader
            number="02"
            eyebrow="STARTING SIGNALS"
            title={<>WHAT WE KNOW. <em>WHAT THE PAID AUDIT MUST PROVE.</em></>}
            body="The initial diagnostic gives us useful hypotheses, not a finished answer. The first month will validate these signals against internal data, direct discovery, current brand materials and operating reality."
            note="ORIENTATION / NOT FINAL AUDIT"
          />

          <div className={styles.signalLead}>
            <Reveal><SignalMeter /></Reveal>
            <Reveal className={styles.signalThesis} delay={0.08}>
              <span>WORKING HYPOTHESIS</span>
              <strong>THE EQUITY EXISTS.<br />THE SYSTEM DOES NOT.</strong>
              <p>
                Recognition, product breadth and rep relationships provide permission. The growth opportunity is to convert that permission into preference, trust and repeatable demand.
              </p>
            </Reveal>
          </div>

          <div className={styles.signalRows}>
            {auditSignals.map((signal, index) => (
              <Reveal className={styles.signalRow} key={signal.code} delay={(index % 2) * 0.04}>
                <div className={styles.signalCode}><span>{signal.code}</span><i /></div>
                <div className={styles.signalRead}>
                  <h3>{signal.title}</h3>
                  <p>{signal.read}</p>
                  <small>{signal.basis}</small>
                </div>
                <div className={styles.signalImplication}>
                  <span>STRATEGIC IMPLICATION</span>
                  <p>{signal.implication}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <IdentityField />
        <StrategyReveal />

        <section id="engagement" className={styles.section}>
          <SectionHeader
            number="05"
            eyebrow="ENGAGEMENT ARCHITECTURE"
            title={<>FIVE WORKSTREAMS. <em>ONE ACCOUNTABLE GROWTH RHYTHM.</em></>}
            body="The core retainer covers the strategic layer connecting brand, growth, channels, activation and measurement. Execution can be added only where the roadmap creates a clear reason to invest."
            note="$10K / MONTH CORE"
          />

          <div className={styles.workstreamStack}>
            {workstreams.map((workstream, index) => (
              <Reveal className={styles.workstreamRow} key={workstream.number}>
                <div className={styles.workstreamIdentity}>
                  <span>{workstream.number}</span>
                  <h3>{workstream.title}</h3>
                  <p>{workstream.role}</p>
                </div>
                <ul>
                  {workstream.deliverables.map((item) => (
                    <li key={item}><Check size={14} aria-hidden="true" />{item}</li>
                  ))}
                </ul>
                <div className={styles.workstreamOutcome}>
                  <span>OUTCOME</span>
                  <p>{workstream.outcome}</p>
                </div>
                <i className={styles.workstreamIndex}>{String(index + 1).padStart(2, "0")}</i>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.phaseSection}`}>
          <SectionHeader
            number="06"
            eyebrow="PHASED DELIVERY"
            title={<>EVERY PHASE ENDS <em>WITH A DECISION.</em></>}
            body="The engagement is designed to move collaboratively without becoming an endless strategy exercise. Each phase produces tangible outputs and a leadership choice that unlocks the next."
            note="PROPOSED 6-MONTH RUNWAY"
          />

          <div className={styles.phaseGrid}>
            {engagementPhases.map((phase, index) => (
              <Reveal className={styles.phaseCard} key={phase.number} delay={(index % 2) * 0.07}>
                <div className={styles.phaseTop}>
                  <span>{phase.number}</span>
                  <time>{phase.window}</time>
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.objective}</p>
                <ul>
                  {phase.outputs.map((output) => <li key={output}>{output}</li>)}
                </ul>
                <div className={styles.phaseDecision}>
                  <Target size={17} aria-hidden="true" />
                  <div><span>DECISION GATE</span><strong>{phase.decision}</strong></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="roadmap" className={`${styles.section} ${styles.roadmapSection}`}>
          <SectionHeader
            number="07"
            eyebrow="FIRST 90 DAYS"
            title={<>TRUTH. CHOICE. <em>SYSTEM.</em></>}
            body="The first quarter builds the strategic foundation without losing sight of the urgent commercial decisions already in motion."
            note="30 / 60 / 90"
          />
          <div className={styles.priorityGrid}>
            {ninetyDayPriorities.map((priority, index) => (
              <Reveal className={styles.priorityColumn} key={priority.window} delay={index * 0.06}>
                <div className={styles.priorityTop}>
                  <span>0{index + 1}</span>
                  <time>{priority.window}</time>
                </div>
                <h3>{priority.title}</h3>
                <p>{priority.focus}</p>
                <ul>{priority.priorities.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className={styles.priorityExit}>
                  <span>EXIT CONDITION</span>
                  <strong>{priority.exitCondition}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <RoadmapTrack />

        <section id="options" className={`${styles.section} ${styles.optionSection}`}>
          <SectionHeader
            number="09"
            eyebrow="OPTIONAL MODULES"
            title={<>ADD CAPABILITY <em>WHEN THE STRATEGY CALLS FOR IT.</em></>}
            body="The core engagement remains focused on direction, prioritization and advisory. Tactical modules can be activated with a separate scope, fee, owner and definition of success."
            note="MODULAR / APPROVAL REQUIRED"
          />

          <div className={styles.optionGrid}>
            {optionalModules.map((module, index) => (
              <Reveal
                className={`${styles.optionCard} ${module.featured ? styles.optionFeatured : ""}`}
                key={module.id}
                delay={(index % 3) * 0.05}
              >
                <div className={styles.optionTop}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time>{module.timing}</time>
                </div>
                <h3>{module.title}</h3>
                <strong>{module.price}</strong>
                <p>{module.description}</p>
                <ul>{module.includes.map((item) => <li key={item}><Check size={13} />{item}</li>)}</ul>
                <div className={styles.optionTrigger}><span>ACTIVATE WHEN</span><p>{module.trigger}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.collaborationSection}`}>
          <SectionHeader
            number="10"
            eyebrow="HOW WE WORK"
            title={<>NO BLACK BOX. <em>ONE SHARED WORKING ROOM.</em></>}
            body="The best version of this engagement is embedded, practical and direct. Crowd Control brings the outside pattern recognition; Champion Teamwear brings the operating truth and decision authority."
            note="COLLABORATIVE / ITERATIVE"
          />
          <div className={styles.collaborationGrid}>
            <div className={styles.cadenceList}>
              {collaborationCadence.map((item, index) => (
                <Reveal className={styles.cadenceRow} key={item.session}>
                  <span>0{index + 1}</span>
                  <time>{item.rhythm}</time>
                  <h3>{item.session}</h3>
                  <p>{item.purpose}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className={styles.responsibilityCard} delay={0.08}>
              <span>OPERATING PRINCIPLE</span>
              <h3>DECISIONS STAY VISIBLE.</h3>
              <p>Every recommendation is connected to evidence, an owner, a deadline and a decision. No silent handoffs. No surprise reveals.</p>
              <div>
                <b>CCD OWNS</b>
                <p>Research, synthesis, strategic recommendations, roadmap management, pilot framing and clear escalation.</p>
              </div>
              <div>
                <b>CHAMPION TEAMWEAR OWNS</b>
                <p>Access, operating context, executive decisions, rights confirmation, budgets and timely approvals.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="investment" className={`${styles.section} ${styles.investmentSection}`}>
          <SectionHeader
            number="11"
            eyebrow="INVESTMENT"
            title={<>A LEAN CORE. <em>FLEXIBLE EXECUTION.</em></>}
            body="One monthly strategy and growth retainer keeps the engagement focused. Media management, creative production and optional modules are visible additions, never hidden inside the fee."
            note="OFFLINE APPROVAL + INVOICING"
          />
          <div className={styles.investmentGrid}>
            <Reveal className={styles.investmentVisual}><BudgetDial /></Reveal>
            <div className={styles.investmentLines}>
              {investment.map((line, index) => (
                <Reveal className={`${styles.investmentLine} ${index === 0 ? styles.investmentPrimary : ""}`} key={line.label} delay={index * 0.04}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{line.label}</h3><p>{line.note}</p></div>
                  <strong>{line.amount}</strong>
                </Reveal>
              ))}
            </div>
          </div>
          <div className={styles.commercialTerms}>
            <div><span>RUNWAY</span><strong>{proposalMeta.initialTerm}</strong></div>
            <div><span>CORE FEE</span><strong>$10K / MONTH</strong></div>
            <div><span>PAYMENT TERMS</span><strong>FINALIZED IN AGREEMENT</strong></div>
            <div><span>APPROVAL</span><strong>CONTACT + AGREEMENT</strong></div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.scopeSection}`}>
          <SectionHeader
            number="12"
            eyebrow="SCOPE GUARDRAILS"
            title={<>CLEAR CORE. <em>CLEAR BOUNDARIES.</em></>}
            body="The strategy retainer is designed to create direction and decision velocity. Production and platform work remain separate so Champion Teamwear can scale deliberately."
            note="WRITTEN APPROVAL BEFORE ADD-ONS"
          />
          <div className={styles.scopeGrid}>
            <Reveal className={styles.scopeColumn}>
              <div className={styles.scopeTop}><Check size={18} /><h3>{coreScope.includedTitle}</h3></div>
              <ul>{coreScope.included.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            </Reveal>
            <Reveal className={`${styles.scopeColumn} ${styles.scopeExcluded}`} delay={0.08}>
              <div className={styles.scopeTop}><X size={18} /><h3>{coreScope.excludedTitle}</h3></div>
              <ul>{coreScope.excluded.map((item) => <li key={item}><CircleDot size={13} />{item}</li>)}</ul>
            </Reveal>
          </div>
          <div className={styles.dependencyBlock}>
            <div className={styles.dependencyHeader}>
              <span>NEEDED TO START STRONG</span>
              <strong>ACCESS, OWNERSHIP AND DECISION RIGHTS</strong>
            </div>
            {dependencies.map((dependency, index) => (
              <div className={styles.dependencyRow} key={dependency.item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <b>{dependency.owner}</b>
                <strong>{dependency.item}</strong>
                <p>{dependency.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.closingSection}>
          <div className={styles.closingField} aria-hidden="true"><i /><i /><i /></div>
          <div className={styles.closingCopy}>
            <span>{proposalCta.eyebrow}</span>
            <h2>{proposalCta.headline}</h2>
            <p>{proposalCta.body}</p>
            <a className={styles.contactButton} href={proposalCta.primaryHref}>
              {proposalCta.primaryLabel}<ArrowUpRight size={20} />
            </a>
          </div>
          <div className={styles.firstSteps}>
            <span>THE FIRST FOUR MOVES</span>
            {proposalCta.firstSteps.map((step, index) => (
              <div key={step}><b>0{index + 1}</b><p>{step}</p>{index < proposalCta.firstSteps.length - 1 ? <ArrowDown size={14} /> : null}</div>
            ))}
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
        <Image src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width={2198} height={307} />
        <div>
          <a href={`mailto:${proposalCta.contact}`}>{proposalCta.contact}</a>
          <a href="#top">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
        <p>{proposalMeta.classification.toUpperCase()} / CHAMPION TEAMWEAR / {proposalMeta.issued.toUpperCase()}</p>
      </footer>
    </main>
  );
}
