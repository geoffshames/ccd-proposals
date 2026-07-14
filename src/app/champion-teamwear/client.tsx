"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CursorGlow } from "@/components/CursorGlow";
import { championTeamwearReport as report } from "@/lib/reports/champion-teamwear";
import {
  PermissionGapPlot,
  SentimentTierBars,
  TwoTrackRoadmap,
  UrlEstateStrips,
} from "./EvidenceVisuals";
import { MobileSectionsNav } from "./MobileSectionsNav";
import styles from "./report.module.css";

const navItems = [
  ["Read", "#read"],
  ["Diagnosis", "#diagnosis"],
  ["Sentiment", "#sentiment"],
  ["Landscape", "#landscape"],
  ["Strategy", "#strategy"],
  ["90 Days", "#roadmap"],
  ["Paths", "#paths"],
  ["Contact Us", "#contact"],
] as const;

function SectionHead({
  code,
  label,
  title,
  lede,
  feature = false,
}: {
  code: string;
  label: string;
  title: string;
  lede?: string;
  feature?: boolean;
}) {
  return (
    <ScrollReveal className={styles.sectionHead}>
      <div className={styles.sectionCode}>
        {code}
        <span>{label}</span>
      </div>
      <div>
        <h2
          className={`${styles.sectionTitle} ${feature ? styles.sectionTitleFeature : ""}`}
        >
          {title}
        </h2>
        {lede && <p className={styles.sectionLede}>{lede}</p>}
      </div>
    </ScrollReveal>
  );
}

function SubsectionHead({
  code,
  title,
  takeaway,
}: {
  code: string;
  title: string;
  takeaway?: string;
}) {
  return (
    <div className={styles.subsectionHead}>
      <span>{code}</span>
      <div>
        <h3>{title}</h3>
        {takeaway && <p>{takeaway}</p>}
      </div>
    </div>
  );
}

function MapPoint({
  label,
  breadth,
  identity,
  champion = false,
  target = false,
}: {
  label: string;
  breadth: number;
  identity: number;
  champion?: boolean;
  target?: boolean;
}) {
  const left = 4 + ((breadth - 1) / 4) * 92;
  const bottom = 5 + ((identity - 1) / 4) * 90;
  return (
    <div
      className={styles.mapPoint}
      data-champion={champion || undefined}
      data-target={target || undefined}
      style={{ left: `${left}%`, bottom: `${bottom}%` }}
    >
      <div className={styles.pointDot} />
      <div className={styles.pointLabel}>{label}</div>
    </div>
  );
}

function MobileCompetitiveSummary() {
  const competitors = [...report.competitors].sort(
    (a, b) => b.identity - a.identity,
  );

  return (
    <div
      className={styles.mobileMapSummary}
      role="group"
      aria-label="Directional competitive positioning, ranked by teamwear-owned identity"
    >
      <div className={styles.mobileMapLegend}>
        <span>Identity rank</span>
        <span>Breadth / identity</span>
      </div>
      {competitors.map((competitor, index) => (
        <article
          key={competitor.name}
          className={styles.mobileMapRow}
          data-champion={competitor.name === "Champion Teamwear" || undefined}
        >
          <span className={styles.mobileMapRank}>0{index + 1}</span>
          <div>
            <h3>{competitor.name}</h3>
            <p>{competitor.faces}</p>
          </div>
          <div
            className={styles.mobileMapScores}
            aria-label={`Breadth ${competitor.breadth.toFixed(1)} of 5; identity ${competitor.identity.toFixed(1)} of 5`}
          >
            <strong>{competitor.breadth.toFixed(1)}</strong>
            <span aria-hidden="true">/</span>
            <strong>{competitor.identity.toFixed(1)}</strong>
          </div>
        </article>
      ))}
      <div className={styles.mobileMapOpportunity}>
        <span>CTW opportunity</span>
        <strong>5.0 breadth / 4.5 identity</strong>
      </div>
    </div>
  );
}

export function ChampionTeamwearClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className={styles.page}>
      {!shouldReduceMotion && <CursorGlow />}

      <header className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden />
        <div className={styles.heroGlow} aria-hidden />

        <div className={styles.topline}>
          <a
            className={styles.topLogo}
            href="https://crowdcontroldigital.com"
            aria-label="Crowd Control Digital"
          >
            <Image
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={2198}
              height={307}
              priority
            />
          </a>
          <span>{report.classification} · CTW / 2026-07</span>
        </div>

        <motion.div
          className={styles.heroContent}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>Brand and sentiment analysis</div>
            <h1 className={styles.title}>
              Champion
              <span>Teamwear</span>
            </h1>
            <p className={styles.subtitle}>
              A Teamwear-specific diagnostic. Champion retail equity is treated as halo, not as
              evidence of Teamwear performance.
            </p>

            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span>Prepared for</span>
                <strong>{report.preparedFor}</strong>
              </div>
              <div className={styles.heroMetaItem}>
                <span>Issued</span>
                <strong>{report.issued}</strong>
              </div>
              <div className={styles.heroMetaItem}>
                <span>Scope</span>
                <strong>Brand · customer voice · competition · 90-day path</strong>
              </div>
            </div>
          </div>

          <div className={styles.heroSystem} aria-hidden>
            <div className={styles.systemTopline}>
              <span>CCD / INTELLIGENCE UNIT</span>
              <span>CTW / 01</span>
            </div>
            <div className={styles.systemMark}>CTW</div>
            <div className={styles.systemAxis}>
              <span>Brand permission</span>
              <span>Operating friction</span>
            </div>
            <div className={styles.systemReadout}>
              <span>Signal</span>
              <strong>Equity leakage</strong>
            </div>
          </div>
        </motion.div>

        <div className={styles.heroFooter}>
          <span>Good product-market permission. Inconsistent trust delivery.</span>
          <span>Scroll to read ↓</span>
        </div>
      </header>

      <nav className={styles.nav} aria-label="Report sections">
        <div className={styles.navInner}>
          <a
            className={styles.navLogo}
            href="https://crowdcontroldigital.com"
            aria-label="Crowd Control Digital"
          >
            <Image
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={2198}
              height={307}
            />
          </a>
          <div className={styles.navLinks}>
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <MobileSectionsNav />
        </div>
      </nav>

      <section id="read" className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§01"
            label="Executive read"
            feature
            title="The brand is not the bottleneck. The system around it is."
            lede="Champion Teamwear already has a viable commercial core: recognition, breadth, customization, smart value, and relationships. The task is to stop those assets from leaking at every digital and operational handoff."
          />

          <div className={styles.executiveGrid}>
            <ScrollReveal className={styles.executiveThesis}>
              <div className={styles.thesisKicker}>
                <span>Core diagnosis</span>
                <span>Permission exceeds delivery</span>
              </div>
              <h3>{report.executiveRead.headline}</h3>
              <p>{report.executiveRead.body}</p>
            </ScrollReveal>
            <ScrollReveal className={styles.decisionCard} delay={0.12}>
              <span>Decision in one sentence</span>
              <p>{report.executiveRead.decision}</p>
            </ScrollReveal>
          </div>

          <div className={styles.factGrid}>
            {report.facts.map((fact, index) => (
              <ScrollReveal key={fact.label} delay={index * 0.06}>
                <div className={styles.factCard} data-tone={fact.tone}>
                  <div className={styles.factValue}>{fact.value}</div>
                  <div>
                    <div className={styles.factLabel}>{fact.label}</div>
                    <div className={styles.factDetail}>{fact.detail}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnosis" className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§02"
            label="Brand health"
            title="Human equity is strong. System equity is weak."
            lede="Scores are evidence-weighted analyst judgments on a five-point scale, not survey results. Confidence indicates the quality and volume of the underlying evidence."
          />

          <ScrollReveal>
            <PermissionGapPlot items={report.diagnosis} />
          </ScrollReveal>

          <div className={styles.flow} aria-label="Equity conversion chain">
            {report.equityLeak.map((item, index) => (
              <div key={item.stage} className={styles.flowItem} data-status={item.status}>
                <div className={styles.flowStage}>0{index + 1} · {item.stage}</div>
                <strong className={styles.flowStatus}>{item.status}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§03"
            label="Digital truth"
            title="The public footprint still carries every legacy operator."
            lede="The Shopware rebuild is necessary, but a new front end alone will not solve duplicate authority, customer-path confusion, legacy policies, or inconsistent ownership signals."
          />

          <div className={styles.findingList}>
            {report.digitalTruths.map((finding) => (
              <ScrollReveal key={finding.code}>
                <article className={styles.finding}>
                  <div className={styles.findingCode}>{finding.code}</div>
                  <div>
                    <h3>{finding.title}</h3>
                    <p>{finding.finding}</p>
                    <span className={styles.evidenceLabel}>{finding.evidence}</span>
                  </div>
                  <div className={styles.implication}>
                    <strong>So what</strong>
                    <p>{finding.implication}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.identityStrip} aria-label="Public identity layers">
            {report.publicIdentity.map((item) => (
              <div key={item.label} className={styles.identityItem}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.signalBand} aria-label="Digital estate signal">
        <div className={styles.container}>
          <UrlEstateStrips
            totalUrls={report.urlEstate.total}
            productUrls={report.urlEstate.product}
            sharedTimestampUrls={report.urlEstate.repeatedLastModified}
            sharedTimestamp={report.urlEstate.lastModifiedDate}
          />
        </div>
      </section>

      <section id="sentiment" className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§04"
            label="Customer voice"
            title="Consideration is healthy. Confidence is fragile."
            lede={report.sentiment.sampleNote}
          />

          <SubsectionHead
            code="04.1 / Evidence model"
            title="Consideration and retention are different jobs."
          />

          <div className={styles.modelEquation}>
            <div className={styles.equationSide}>
              <span>What wins consideration</span>
              <ul className={styles.equationList}>
                {report.sentiment.model.consideration.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
            <div className={styles.equationMark}>≠</div>
            <div className={styles.equationSide}>
              <span>What wins retention</span>
              <ul className={styles.equationList}>
                {report.sentiment.model.retention.map((signal) => (
                  <li key={signal}>{signal}</li>
                ))}
              </ul>
            </div>
          </div>

          <SubsectionHead
            code="04.2 / Evidence by source"
            title="Channel context changes the meaning of the sentiment."
            takeaway="Each tier remains separate because its sample frame and selection bias are materially different."
          />

          <ScrollReveal>
            <SentimentTierBars tiers={report.sentiment.sourceTiers} />
          </ScrollReveal>

          <SubsectionHead
            code="04.3 / Coded themes"
            title="The strongest pattern is operating inconsistency, not broad brand rejection."
          />

          <div className={styles.themeGrid}>
            {report.sentiment.themes.map((theme, index) => (
              <ScrollReveal key={theme.theme} delay={(index % 3) * 0.05}>
                <article className={styles.themeCard}>
                  <div className={styles.themeDirection}>{theme.direction}</div>
                  <h3>{theme.theme}</h3>
                  <p>{theme.evidence}</p>
                  <p className={styles.themeAction}>{theme.action}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <SubsectionHead
            code="04.4 / Direct voices"
            title="Relationship equity is real but vulnerable to a single bad handoff."
          />

          <div className={styles.voices}>
            {report.sentiment.voices.map((voice) => (
              <ScrollReveal key={voice.quote}>
                <figure className={styles.voice} data-tone={voice.tone}>
                  <blockquote>{voice.quote}</blockquote>
                  <a href={voice.href} target="_blank" rel="noreferrer">
                    {voice.source} ↗
                  </a>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§05"
            label="Owned attention"
            title="Team stories win. The future audience rarely sees them."
            lede="Public channel metrics were observed July 14, 2026 and will change. The strategic pattern matters more than the precise count: community proof works, while TikTok and durable video remain materially underbuilt."
          />

          <div className={styles.socialGrid}>
            {report.social.map((item) => (
              <ScrollReveal key={item.channel}>
                <article className={styles.socialCard}>
                  <span>{item.channel}</span>
                  <strong>{item.scale}</strong>
                  <em>{item.activity}</em>
                  <p>{item.read}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="landscape" className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§06"
            label="Competitive system"
            title="Eight brands. Five control groups."
            lede="Parent-company consolidation changes the strategic read. Varsity Spirit and BSN are different faces of one threat; Augusta, Alleson, Russell, and Under Armour Team share infrastructure through Momentec."
          />

          <div className={styles.landscapeLayout}>
            <ScrollReveal>
              <div className={styles.mapWrap}>
                <div className={styles.map} aria-label="Competitive positioning map">
                  {report.competitors.map((competitor) => (
                    <MapPoint
                      key={competitor.name}
                      label={competitor.name}
                      breadth={competitor.breadth}
                      identity={competitor.identity}
                      champion={competitor.name === "Champion Teamwear"}
                    />
                  ))}
                  <MapPoint
                    label="CTW opportunity"
                    breadth={5}
                    identity={4.5}
                    target
                  />
                </div>
                <p className={styles.mapNote}>
                  Directional analyst positioning on a five-point scale; not measured
                  market share or survey data.
                </p>
              </div>
              <MobileCompetitiveSummary />
            </ScrollReveal>

            <div className={styles.competitorStack}>
              {report.competitors.map((competitor) => (
                <ScrollReveal key={competitor.name}>
                  <article className={styles.competitorCard}>
                    <div>
                      <h3>{competitor.name}</h3>
                      <span>{competitor.faces}</span>
                    </div>
                    <div>
                      <p>{competitor.owns}</p>
                      <p>Gap: {competitor.gap}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="strategy" className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§07"
            label="Strategic choice"
            feature
            title="Do not become Champion retail with jerseys. Own a category no one has assembled."
            lede="Champion Teamwear can combine the expression of a specialist, the breadth of a major performance brand, and the operational ease of a distributor without asking one of those systems to impersonate the other."
          />

          <ScrollReveal className={styles.strategyHero}>
            <div className={styles.strategyCopy}>
              <span>White-space position</span>
              <h3>{report.strategy.whitespace}</h3>
            </div>
            <div className={styles.strategyPromise}>
              <p>{report.strategy.promise}</p>
            </div>
          </ScrollReveal>

          <div className={styles.architectureGrid}>
            {report.strategy.architecture.map((item) => (
              <ScrollReveal key={item.lens}>
                <article className={styles.architectureCard}>
                  <span>One vision · two lenses</span>
                  <h3>{item.lens}</h3>
                  <strong>{item.job}</strong>
                  <p>{item.proof}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.principles}>
            {report.strategy.principles.map((principle, index) => (
              <div key={principle} className={styles.principle}>
                <span>0{index + 1}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§08"
            label="Audience system"
            title="Four people have to say yes."
            lede="Brand work that speaks only to coaches becomes sales operations. Brand work that speaks only to athletes becomes expensive theater. The system has to make all four roles say yes."
          />

          <div className={styles.audienceGrid}>
            {report.audiences.map((audience) => (
              <ScrollReveal key={audience.role}>
                <article className={styles.audienceCard}>
                  <span>{audience.role}</span>
                  <h3>{audience.people}</h3>
                  <div className={styles.audienceQuestion}>{audience.asks}</div>
                  <p className={styles.audienceWin}>{audience.win}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.journey} aria-label="Recommended customer journey">
            {report.futureJourney.map((step, index) => (
              <div key={step} className={styles.journeyStep}>
                <span>0{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.signalBand} ${styles.identityBand}`} aria-label="Team identity system">
        <div className={styles.identitySystem}>
          <aside className={styles.identityRail}>
            <div className={styles.identityRailLabel}>Strategic system / 02</div>
            <div className={styles.identityRailMetrics} aria-label="One system across four team moments">
              <div>
                <strong>01</strong>
                <span>System</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Team moments</span>
              </div>
            </div>
          </aside>

          <div className={styles.identityIntro}>
            <span>System mandate</span>
            <h2>The product already has expression.</h2>
            <p>
              The identity system must make that expression visible and recognizable across every
              team moment.
            </p>
            <div className={styles.identityScope} aria-label="Identity system scope">
              <span>One visual language</span>
              <span>Four distinct expressions</span>
            </div>
          </div>

          <div className={styles.identityModes}>
            {[
              { mode: "Game day", role: "Uniform reveal and competition" },
              { mode: "Practice", role: "Daily utility and team rhythm" },
              { mode: "Travel", role: "Arrival layers and public presence" },
              { mode: "Fandom", role: "Supporter wear and social proof" },
            ].map(({ mode, role }, index) => (
              <article key={mode}>
                <div className={styles.identityModeTop}>
                  <span>0{index + 1}</span>
                  <i aria-hidden />
                </div>
                <div>
                  <strong>{mode}</strong>
                  <p>{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roadmap" className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§09"
            label="90-day path"
            title="Run urgent and foundational work in parallel."
            lede="The catalog cannot wait for the final brand bible. The website cannot responsibly launch without one. A two-track plan creates safe interim guardrails while the durable system is researched and approved."
          />

          <ScrollReveal>
            <TwoTrackRoadmap />
          </ScrollReveal>
        </div>
      </section>

      <section id="paths" className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§10"
            label="Ways to engage"
            title="Three ways in. Designed to stack, not compete."
            lede="Start with the fire, the foundation, or the operating partnership. Each path preserves the work beneath it so ABA is building reusable capability rather than buying a new one-off every quarter."
          />

          <div className={styles.optionsGrid}>
            {report.engagementPaths.map((path, index) => (
              <ScrollReveal key={path.number} delay={index * 0.08}>
                <article className={styles.optionCard} data-recommended={path.recommended || undefined}>
                  {path.recommended && <div className={styles.recommendedBadge}>Recommended</div>}
                  <div className={styles.optionNumber}>{path.number}</div>
                  <h3>{path.title}</h3>
                  <div className={styles.optionDuration}>{path.duration}</div>
                  <p className={styles.optionFit}>{path.fit}</p>
                  <p className={styles.optionOutcome}>{path.outcome}</p>
                  <ul>
                    {path.includes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <div className={styles.commercialNote}>
            Commercial terms are intentionally held until the 6–12 month “dirty napkin”
            roadmap arrives. That one input determines whether these are fixed-fee sprints,
            a phased program, or a fractional operating pod. It also prevents false precision in
            a proposal built before scope ownership is known.
          </div>
        </div>
      </section>

      <section id="contact" className={styles.sectionAlt}>
        <div className={styles.container}>
          <SectionHead
            code="§11"
            label="Inputs and gates"
            title="Six inputs turn this diagnostic into a fixed scope."
            lede="None requires a polished deck. A source folder, product grid, account access, and named decision owners are enough to move."
          />

          <div className={styles.decisionLayout}>
            <ul className={styles.decisionList}>
              {report.decisionsNeeded.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <aside className={styles.ctaCard}>
              <span>Recommended next move</span>
              <p>
                Lock a 45-minute working session when the roadmap and ABG asset package are
                in hand. Leave with one chosen path, owners, dates, and a fixed commercial scope.
              </p>
              <a href="mailto:geoff@crowdcontroldigital.com?subject=Champion%20Teamwear%20working%20session">
                CONTACT US
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <SectionHead
            code="§12"
            label="Method and sources"
            title="Each source proves something different."
            lede="The audit combines internal operating context, owned digital surfaces, technical checks, directly attributable Teamwear customer voice, category context, and primary competitor sources."
          />

          <div className={styles.sourcesGrid}>
            {report.sources.map((source) => (
              <a
                key={source.id}
                className={styles.sourceLink}
                href={source.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>{source.id}</span>
                <strong>{source.label}</strong>
                <em>{source.type}</em>
              </a>
            ))}
          </div>

          <div className={styles.methodNote}>
            <p>
              <strong>Scope rule.</strong> Champion retail conversation was excluded from
              Teamwear sentiment. Retail equity appears only as an expectation halo.
            </p>
            <p>
              <strong>Sentiment rule.</strong> Reddit, review archives, BBB, and aggregators
              were not pooled. Their sample frames and selection biases are materially different.
            </p>
            <p>
              <strong>Competition rule.</strong> Customer-facing brands were mapped to their
              control groups so one parent was not counted as several independent threats.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Image
            className={styles.footerLogo}
            src="/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width={2198}
            height={307}
          />
          <span>{report.issued}</span>
          <span>{report.classification} · Champion Teamwear only</span>
        </div>
      </footer>
    </main>
  );
}
