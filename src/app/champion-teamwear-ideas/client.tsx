"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  closing,
  disclaimer,
  facts,
  ideas,
  ideasIntro,
  ideasMeta,
  ideasNav,
  known,
  plays,
  premise,
  sequenceIntro,
  sources,
  tensions,
} from "@/lib/champion-teamwear-ideas";
import {
  ArrowUpRight,
  CinematicHero,
  KineticRosterBand,
  Magnetic,
  Reveal,
} from "./motion";
import styles from "./ideas.module.css";

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

function IdeasNavigation() {
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
    const sections = ideasNav
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
      <nav className={styles.nav} aria-label="Page navigation">
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
          {ideasNav.slice(0, 4).map((item) => (
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
          {ideasNav.map((item, index) => (
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

export function ChampionTeamwearIdeasClient() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to ideas
      </a>
      <div className={styles.grain} aria-hidden="true" />
      <IdeasNavigation />
      <CinematicHero />
      <KineticRosterBand />

      <div id="main-content">
        {/* PLATFORM ---------------------------------------------------- */}
        <section id="premise" className={styles.platform}>
          <div className={styles.platformInner}>
            <Reveal>
              <p className={styles.platformLine}>
                Two buyers.
                <br />
                <em>One order.</em>
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className={styles.platformBody}>{premise.body}</p>
            </Reveal>
          </div>
        </section>

        {/* 01 — PREMISE ------------------------------------------------ */}
        <section className={styles.section}>
          <SectionHead
            index="01"
            eyebrow={premise.eyebrow}
            note={premise.note}
            title={
              <>
                Whoever removes the most friction{" "}
                <em>wins the order.</em>
              </>
            }
            body="Three things are true at once about every youth team, club and school order. The ideas on this page are built to hold all three."
          />

          <Reveal>
            <div className={styles.tensionGrid}>
              {tensions.map((item) => (
                <article className={styles.tensionCard} key={item.label}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className={styles.facts}>
              {facts.map((fact) => (
                <div className={styles.factCell} key={fact.label}>
                  <strong>{fact.value}</strong>
                  <p>{fact.label}</p>
                  <small>{fact.source}</small>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.known}>
              <div className={styles.knownHead}>
                <span>{known.eyebrow}</span>
                <span>{known.note}</span>
              </div>
              <div className={styles.knownGrid}>
                {known.signals.map((signal) => (
                  <div className={styles.knownCell} key={signal.code}>
                    <b>{signal.code}</b>
                    <h3>{signal.title}</h3>
                    <p>{signal.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* 02 — IDEAS -------------------------------------------------- */}
        <section className={`${styles.section} ${styles.ideasIntro}`}>
          <SectionHead
            index="02"
            eyebrow={ideasIntro.eyebrow}
            note={ideasIntro.note}
            title={
              <>
                Six ways to <em>earn the order.</em>
              </>
            }
            body={ideasIntro.body}
          />
        </section>

        <div id="ideas" className={styles.ideas}>
          {ideas.map((idea) => (
            <article key={idea.id} id={idea.id} className={styles.idea}>
              <div className={styles.ideaTop}>
                <Reveal className={styles.ideaFigure}>
                  <div className={styles.figureTag}>
                    <b>{idea.number}</b>
                    <span>{idea.scale}</span>
                  </div>
                  <Image
                    src={idea.image}
                    alt={idea.imageAlt}
                    fill
                    sizes="(max-width: 1000px) 100vw, 45vw"
                  />
                  <div className={styles.figureNote}>Concept visual / AI-generated</div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className={styles.ideaNumber}>{idea.number}</div>
                  <h3 className={styles.ideaName}>{idea.name}</h3>
                  <p className={styles.ideaHook}>{idea.hook}</p>
                  <p className={styles.ideaLogline}>{idea.logline}</p>
                  <div className={styles.ideaSpecs}>
                    <div>
                      <span>Format</span>
                      <strong>{idea.format}</strong>
                    </div>
                    <div>
                      <span>Window</span>
                      <strong>{idea.window}</strong>
                    </div>
                    <div>
                      <span>Who it wins</span>
                      <strong>{idea.wins}</strong>
                    </div>
                    <div>
                      <span>What we read</span>
                      <strong>{idea.signal}</strong>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className={styles.ideaBody}>
                <Reveal>
                  <span className={styles.blockLabel}>How it works</span>
                  <ol className={styles.mechanic}>
                    {idea.mechanic.map((step, index) => (
                      <li key={step}>
                        <b>{String(index + 1).padStart(2, "0")}</b>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <span className={styles.blockLabel}>Why it works</span>
                  <p className={styles.why}>{idea.why}</p>

                  <div className={styles.compounding}>
                    <strong>Compounding logic. </strong>
                    {idea.compounding}
                  </div>

                  <div className={styles.proof}>
                    <p>{idea.proof.claim}</p>
                    <small>Source / {idea.proof.source}</small>
                  </div>
                </Reveal>

                <Reveal delay={0.08}>
                  <div className={styles.sideCard}>
                    <div className={styles.sideHead}>
                      <span>What we build</span>
                      <b>Crowd Control</b>
                    </div>
                    <ul className={styles.buildList}>
                      {idea.build.map((item) => (
                        <li key={item}>
                          <i>+</i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.sideHead}>
                      <span>Built client-side</span>
                      <b>Champion Teamwear</b>
                    </div>
                    <ul className={styles.clientList}>
                      {idea.clientSide.map((item) => (
                        <li key={item}>
                          <i>/</i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.watchNote}>
                    <i>Watch</i>
                    <span>{idea.watch}</span>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        {/* 03 — SEQUENCE ----------------------------------------------- */}
        <section id="sequence" className={styles.section}>
          <SectionHead
            index="03"
            eyebrow={sequenceIntro.eyebrow}
            note={sequenceIntro.note}
            title={
              <>
                Three ways to run <em>the year.</em>
              </>
            }
            body={sequenceIntro.body}
          />

          <div className={styles.moduleGrid}>
            {plays.map((play, index) => (
              <Reveal
                className={`${styles.moduleCard} ${styles.playCard}`}
                key={play.code}
                delay={(index % 3) * 0.06}
              >
                <div className={styles.moduleTop}>
                  <span>{play.code}</span>
                  <span>{play.horizon}</span>
                </div>
                <h3>{play.name}</h3>
                <div className={styles.playHorizon}>Three ideas / one rhythm</div>
                <ul className={styles.playPicks}>
                  {play.picks.map((pick) => (
                    <li key={pick}>{pick}</li>
                  ))}
                </ul>
                <p>{play.rationale}</p>
                <div className={styles.moduleTrigger}>
                  <span>The trade-off</span>
                  <p>{play.tradeoff}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 04 — SOURCES ------------------------------------------------ */}
        <section id="sources" className={styles.section}>
          <SectionHead
            index="04"
            eyebrow="Evidence"
            note="Public sources / July diagnostic"
            title={
              <>
                Every number has <em>a receipt.</em>
              </>
            }
            body="Participation data, family spending, competitor claims and conversion research used to build the ideas on this page."
          />
          <Reveal>
            <div className={styles.sourceGrid}>
              {sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{source.title}</strong>
                  <small>
                    {source.publisher} <ArrowUpRight size={11} />
                  </small>
                </a>
              ))}
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
                {closing.eyebrow}
              </p>
              <h2>
                Pick the ideas with legs.{" "}
                <em>We will build the season around them.</em>
              </h2>
              <p className={styles.closingBody}>{closing.body}</p>
              <Magnetic>
                <a className={styles.btn} href={closing.primaryHref}>
                  {closing.primaryLabel}
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
                {closing.firstSteps.map((step, index) => (
                  <div key={step}>
                    <b>0{index + 1}</b>
                    <p>{step}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <p className={styles.disclaimer}>{disclaimer}</p>
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
            <a href={`mailto:${ideasMeta.contact}`}>{ideasMeta.contact}</a>
            <a href="#top">
              Back to top <ArrowUpRight size={11} />
            </a>
          </div>
        </div>
        <div className={styles.footLine}>
          <span>
            {ideasMeta.classification} / Champion Teamwear / {ideasMeta.issued}
          </span>
          <span>Crowd Control Digital, LLC</span>
        </div>
      </footer>
    </main>
  );
}
