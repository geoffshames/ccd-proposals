"use client";

import Image from "next/image";
import { ArrowUpRight, Check, Info } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  concepts,
  facts,
  lanes,
  platformIdea,
  sources,
  tension,
} from "@/lib/crownrips";
import styles from "./crownrips.module.css";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const navItems = [
  ["Premise", "#premise"],
  ["Concepts", "#concepts"],
  ["The Chase", "#chase"],
  ["Spend", "#spend"],
  ["Sources", "#sources"],
] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 48 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHead({
  number,
  eyebrow,
  title,
  body,
}: {
  number: string;
  eyebrow: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <div className={styles.sectionHead}>
      <div className={styles.sectionCode}>
        <b>{number}</b>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

export function CrownRipsClient() {
  const reduce = useReducedMotion();

  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#premise">
        Skip to content
      </a>

      <nav className={styles.nav} aria-label="Page navigation">
        <a href="#top" className={styles.wordmark} aria-label="Crowd Control Digital">
          <Image
            src="/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width={2198}
            height={307}
            priority
          />
        </a>
        <div className={styles.navLinks}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <span className={styles.navBudget}>$250K–500K / US LAUNCH</span>
      </nav>

      {/* HERO */}
      <header id="top" className={styles.hero}>
        <div className={styles.heroMedia}>
          <Image
            src="/images/crownrips/hero.jpg"
            alt="A figure in darkness holding an open foil wrapper erupting with white light"
            fill
            sizes="100vw"
            priority
          />
          <div className={styles.heroShade} />
        </div>
        <div className={styles.heroInner}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroEyebrow}>
              <b>CROWNRIPS</b>
              <i />
              <span>EXPERIENTIAL LAUNCH CONCEPTS</span>
              <i />
              <span>PREPARED BY CROWD CONTROL DIGITAL</span>
            </div>
            <h1>
              THE PULL
              <br />
              IS <em>REAL.</em>
            </h1>
            <p className={styles.heroBody}>
              Eight experiential concepts for the CrownRips launch — each one built to
              make a digital rip produce a physical, witnessable consequence in the real
              world. Costed, scoped, and ready to greenlight one at a time.
            </p>
            <div className={styles.heroMeta}>
              <div>
                <span>Concepts</span>
                <strong>8 BUILDS</strong>
              </div>
              <div>
                <span>Investment range</span>
                <strong>$185K — $385K</strong>
              </div>
              <div>
                <span>Market</span>
                <strong>UNITED STATES</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>AWAITING DIRECTION</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* PLATFORM */}
      <section className={styles.platform} id="premise">
        <div className={styles.platformInner}>
          <Reveal>
            <p className={styles.platformLine}>
              THE PULL
              <br />
              IS <em>REAL.</em>
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={styles.platformBody}>{platformIdea.body}</p>
          </Reveal>
        </div>
      </section>

      {/* TENSION */}
      <section className={styles.section}>
        <SectionHead
          number="01"
          eyebrow="THE PREMISE"
          title={
            <>
              THREE THINGS ARE TRUE <em>AT ONCE.</em>
            </>
          }
          body="The brief is not 'make a stunt'. It is: launch a digital pack product into a community that is culturally primed to love it and structurally primed to distrust it — in a category where nobody has ever built anything physical."
        />
        <div className={styles.tensionGrid}>
          {tension.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className={styles.tensionCard}>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </Reveal>
          ))}
        </div>
        <div className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.factCell}>
              <strong>{fact.value}</strong>
              <p>{fact.label}</p>
              <small>{fact.source}</small>
            </div>
          ))}
        </div>
      </section>

      {/* CONCEPTS */}
      <div id="concepts" className={styles.concepts}>
        <section className={styles.section} style={{ paddingBottom: 0 }}>
          <SectionHead
            number="02"
            eyebrow="THE MENU"
            title={
              <>
                EIGHT WAYS TO MAKE IT <em>PHYSICAL.</em>
              </>
            }
            body="Each concept stands alone and can be greenlit independently. Costs are CCD planning estimates built from current market rates and quoted vendor bands — not fixed quotes. Every image is an AI-generated concept visual, not a photograph of an existing build."
          />
        </section>

        {concepts.map((concept) => (
          <article key={concept.id} id={concept.id} className={styles.concept}>
            <div className={styles.conceptInner}>
              <div className={styles.conceptTop}>
                <Reveal className={styles.conceptFigure}>
                  <div className={styles.figureTag}>
                    <b>{concept.number}</b>
                    <span>{concept.scale}</span>
                  </div>
                  <Image
                    src={concept.image}
                    alt={concept.imageAlt}
                    fill
                    sizes="(max-width: 1000px) 100vw, 45vw"
                  />
                  <div className={styles.figureNote}>CONCEPT VISUAL / AI-GENERATED</div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className={styles.conceptNumber}>{concept.number}</div>
                  <h3 className={styles.conceptName}>{concept.name}</h3>
                  <p className={styles.conceptHook}>{concept.hook}</p>
                  <p className={styles.conceptLogline}>{concept.logline}</p>
                  <div className={styles.conceptSpecs}>
                    <div>
                      <span>Format</span>
                      <strong>{concept.format}</strong>
                    </div>
                    <div>
                      <span>Window</span>
                      <strong>{concept.window}</strong>
                    </div>
                    <div>
                      <span>Footprint</span>
                      <strong>{concept.markets}</strong>
                    </div>
                    <div>
                      <span>{concept.media ? "Production" : "All-in"}</span>
                      <strong>{money.format(concept.total)}</strong>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className={styles.conceptBody}>
                <Reveal>
                  <span className={styles.blockLabel}>HOW IT WORKS</span>
                  <ul className={styles.mechanic}>
                    {concept.mechanic.map((step, i) => (
                      <li key={step}>
                        <b>{String(i + 1).padStart(2, "0")}</b>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>

                  {concept.setList ? (
                    <>
                      <span className={styles.blockLabel}>THE SET LIST</span>
                      <div className={styles.setTable}>
                        {concept.setList.map((row) => (
                          <div key={row.tier}>
                            <b>{row.tier}</b>
                            <em>{row.count}</em>
                            <p>{row.behaviour}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}

                  <span className={styles.blockLabel}>WHY IT WORKS</span>
                  <p className={styles.why}>{concept.why}</p>

                  <div className={styles.earned}>
                    <strong>Earned media logic. </strong>
                    {concept.earned}
                  </div>

                  <div className={styles.proof}>
                    <p>{concept.proof.claim}</p>
                    <small>Source — {concept.proof.source}</small>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className={styles.budgetCard}>
                    <div className={styles.budgetHead}>
                      <span>Estimated budget</span>
                      <b>CCD PLANNING ESTIMATE</b>
                    </div>
                    {concept.budget.map((line) => (
                      <div key={line.item} className={styles.budgetRow}>
                        <p>{line.item}</p>
                        <strong>{money.format(line.amount)}</strong>
                      </div>
                    ))}
                    <div className={styles.budgetTotal}>
                      <span>{concept.totalLabel ?? "All-in"}</span>
                      <strong>{money.format(concept.total)}</strong>
                    </div>
                  </div>

                  {concept.media ? (
                    <div className={styles.mediaCard}>
                      <div className={styles.mediaHead}>
                        <span>{concept.media.headline}</span>
                        <b>$8 CPM</b>
                      </div>
                      {concept.media.rows.map((row) => (
                        <div
                          key={row.label}
                          className={
                            row.tag ? `${styles.mediaRow} ${styles.mediaRowFlag}` : styles.mediaRow
                          }
                        >
                          <div>
                            <strong>{row.label}</strong>
                            <small>{row.impressions}</small>
                          </div>
                          <div className={styles.mediaSpend}>
                            <b>{row.spend}</b>
                            {row.tag ? <i>{row.tag}</i> : null}
                          </div>
                        </div>
                      ))}
                      <p className={styles.mediaNote}>{concept.media.note}</p>
                    </div>
                  ) : null}

                  <span className={styles.blockLabel} style={{ marginTop: 34, display: "block" }}>
                    WHAT WE BUILD
                  </span>
                  <ul className={styles.buildList}>
                    {concept.build.map((b) => (
                      <li key={b}>
                        <Check size={14} aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.riskNote}>
                    <Info size={15} aria-hidden="true" />
                    <span>
                      <strong>Watch item. </strong>
                      {concept.risk}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* LANES */}
      <section className={styles.lanes} id="spend">
        <div className={styles.section}>
          <SectionHead
            number="03"
            eyebrow="HOW WE'D SPEND IT"
            title={
              <>
                THREE WAYS TO PLAY <em>THE BUDGET.</em>
              </>
            }
            body="Given $250K–500K to start, these are the three combinations we would actually recommend — and the trade-off each one makes."
          />
          <div className={styles.laneGrid}>
            {lanes.map((lane, i) => (
              <Reveal key={lane.code} delay={i * 0.08} className={styles.laneCard}>
                <span>{lane.code}</span>
                <h3>{lane.name}</h3>
                <div className={styles.lanePrice}>{lane.spend}</div>
                <ul className={styles.lanePicks}>
                  {lane.picks.map((pick) => (
                    <li key={pick}>{pick}</li>
                  ))}
                </ul>
                <p>{lane.rationale}</p>
                {lane.note ? <div className={styles.laneNote}>{lane.note}</div> : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className={styles.section} id="sources">
        <SectionHead
          number="04"
          eyebrow="EVIDENCE"
          title={
            <>
              EVERY NUMBER HAS <em>A RECEIPT.</em>
            </>
          }
          body="Market data, attendance figures, auction results, and production cost bands used to build the estimates on this page."
        />
        <div className={styles.sourceGrid}>
          {sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer">
              <strong>{source.title}</strong>
              <small>
                {source.publisher} <ArrowUpRight size={11} style={{ display: "inline" }} />
              </small>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <span>NEXT STEP</span>
        <h2>
          PICK ONE.
          <br />
          WE&apos;LL <em>BUILD IT.</em>
        </h2>
        <p>
          Each concept can be greenlit on its own. Tell us which direction has legs and
          we&apos;ll come back with a hard production quote, a vendor list, and a build
          calendar inside a week.
        </p>
        <a
          className={styles.ctaButton}
          href="mailto:geoff@crowdcontroldigital.com?subject=CrownRips%20activation%20concepts&body=Direction%20we%20want%20to%20explore%3A%20"
        >
          START A BUILD <ArrowUpRight size={16} />
        </a>
      </section>

      <p className={styles.disclaimer}>
        All figures on this page are Crowd Control Digital planning estimates built from
        published 2026 vendor pricing bands and comparable production benchmarks. They are
        directional, not quotes, and will move with site selection, dates, inventory
        pricing, and vendor availability. All concept imagery is AI-generated for
        illustration and does not depict an existing build, product, or partnership. Third
        party brands, properties, venues, and events referenced are illustrative of the
        cultural context only and imply no endorsement, license, or partnership.
      </p>

      <footer className={styles.footer}>
        <Image
          src="/brand/CC-LOGO-2024-WHITE.png"
          alt="Crowd Control Digital"
          width={2198}
          height={307}
        />
        <p>CONFIDENTIAL / CROWNRIPS EXPERIENTIAL CONCEPTS / 2026</p>
      </footer>
    </main>
  );
}
