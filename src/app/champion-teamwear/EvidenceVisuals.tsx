import type { CSSProperties } from "react";
import { championTeamwearReport as report } from "@/lib/reports/champion-teamwear";
import styles from "./evidence-visuals.module.css";

type StyleWithVariables = CSSProperties & Record<`--${string}`, string | number>;

export interface PermissionGapDatum {
  dimension: string;
  score: number;
  confidence: string;
  read?: string;
}

export interface PermissionGapPlotProps {
  items?: readonly PermissionGapDatum[];
  className?: string;
}

export interface SentimentTierDatum {
  tier: string;
  label: string;
  positive: number;
  neutral: number;
  negative: number;
  confidence: string;
}

export interface SentimentTierBarsProps {
  tiers?: readonly SentimentTierDatum[];
  className?: string;
}

export interface UrlEstateStripsProps {
  totalUrls?: number;
  productUrls?: number;
  sharedTimestampUrls?: number;
  sharedTimestamp?: string;
  observedDate?: string;
  className?: string;
}

export interface RoadmapPhase {
  window: string;
  name: string;
  startDay: number;
  endDay: number;
  operating: readonly string[];
  brand: readonly string[];
}

export interface TwoTrackRoadmapProps {
  phases?: readonly RoadmapPhase[];
  className?: string;
}

const defaultSentimentTiers: readonly SentimentTierDatum[] = [
  {
    tier: "A",
    label: "Direct use",
    positive: 4,
    neutral: 0,
    negative: 1,
    confidence: "Best available organic signal",
  },
  {
    tier: "B",
    label: "Local review archive",
    positive: 6,
    neutral: 0,
    negative: 8,
    confidence: "Third-party archive; identities not independently verified",
  },
  {
    tier: "C",
    label: "Complaint channel",
    positive: 0,
    neutral: 0,
    negative: 3,
    confidence: "Very small and structurally negative-skewed",
  },
  {
    tier: "D",
    label: "Review aggregator",
    positive: 12,
    neutral: 3,
    negative: 8,
    confidence: "Low-confidence theme finder; source headline says 25",
  },
] as const;

const defaultRoadmapPhases: readonly RoadmapPhase[] = report.roadmap.map(
  (phase, index) => {
    const bounds = [
      [0, 15],
      [15, 45],
      [45, 75],
      [75, 90],
    ] as const;
    const [startDay, endDay] = bounds[index] ?? [index * 15, (index + 1) * 15];

    return {
      ...phase,
      startDay,
      endDay,
    };
  },
);

const numberFormatter = new Intl.NumberFormat("en-US");

function cx(base: string, className?: string) {
  return className ? `${base} ${className}` : base;
}

function clampPercentage(value: number) {
  return Math.min(100, Math.max(0, value));
}

function percentage(value: number, total: number) {
  return total > 0 ? clampPercentage((value / total) * 100) : 0;
}

function formatPercentage(value: number) {
  return `${value.toFixed(1)}%`;
}

function FigureHeader({
  eyebrow,
  title,
  subtitle,
  value,
  valueLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  value?: string;
  valueLabel?: string;
}) {
  return (
    <figcaption className={styles.figureHeader}>
      <div className={styles.figureHeading}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      {value && (
        <div className={styles.headerMetric}>
          <strong>{value}</strong>
          {valueLabel && <span>{valueLabel}</span>}
        </div>
      )}
    </figcaption>
  );
}

export function PermissionGapPlot({
  items = report.diagnosis,
  className,
}: PermissionGapPlotProps) {
  const scores = items.map((item) => item.score);
  const high = scores.length > 0 ? Math.max(...scores) : 0;
  const low = scores.length > 0 ? Math.min(...scores) : 0;
  const spread = high - low;

  return (
    <figure className={cx(styles.figure, className)}>
      <FigureHeader
        eyebrow="Brand health / evidence profile"
        title="Permission-to-delivery score gap"
        subtitle="Evidence-weighted analyst judgments on a five-point scale, not survey results. Confidence reflects the quality and volume of supporting evidence."
        value={spread.toFixed(1)}
        valueLabel="point top-to-bottom spread"
      />

      <div className={styles.axis} aria-hidden="true">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      <ul className={styles.dotPlot}>
        {items.map((item) => {
          const score = Math.min(5, Math.max(0, item.score));
          const band = score >= 4 ? "asset" : score <= 2 ? "gap" : "mixed";
          const plotStyle = {
            "--score-position": `${(score / 5) * 100}%`,
          } as StyleWithVariables;

          return (
            <li key={item.dimension} className={styles.dotRow}>
              <div className={styles.dotLabel}>
                <strong>{item.dimension}</strong>
                <span>Confidence · {item.confidence}</span>
                {item.read && <p>{item.read}</p>}
              </div>
              <div
                className={styles.dotTrack}
                style={plotStyle}
                role="img"
                aria-label={`${item.dimension}: ${score.toFixed(1)} out of 5; ${item.confidence} confidence`}
              >
                <span className={styles.dotFill} data-band={band} aria-hidden="true" />
                <span className={styles.dot} data-band={band} aria-hidden="true" />
              </div>
              <strong className={styles.dotValue}>{score.toFixed(1)}</strong>
            </li>
          );
        })}
      </ul>

      <p className={styles.takeaway}>
        <span>Read</span>
        The strongest inherited asset is masterbrand permission; the lowest-scoring
        dimensions are the digital and cultural systems needed to convert it.
      </p>
    </figure>
  );
}

export function SentimentTierBars({
  tiers = defaultSentimentTiers,
  className,
}: SentimentTierBarsProps) {
  return (
    <figure className={cx(styles.figure, className)}>
      <FigureHeader
        eyebrow="Customer voice / source separation"
        title="Sentiment mix by evidence tier"
        subtitle="Within-source composition using separate denominators. The four source frames have different biases and must not be pooled into one headline score."
        value="4"
        valueLabel="independent source tiers"
      />

      <ul className={styles.sentimentRows}>
        {tiers.map((tier) => {
          const total = tier.positive + tier.neutral + tier.negative;
          const positiveShare = percentage(tier.positive, total);
          const neutralShare = percentage(tier.neutral, total);
          const negativeShare = percentage(tier.negative, total);

          return (
            <li key={tier.tier} className={styles.sentimentRow}>
              <div className={styles.tierLabel}>
                <span>Tier {tier.tier}</span>
                <strong>{tier.label}</strong>
                <small>n={numberFormatter.format(total)}</small>
              </div>

              <div>
                <div
                  className={styles.stackedBar}
                  role="img"
                  aria-label={`${tier.label}, ${total} observations: ${tier.positive} positive, ${tier.neutral} neutral, ${tier.negative} negative`}
                >
                  {positiveShare > 0 && (
                    <span
                      className={styles.positiveSegment}
                      style={{ width: `${positiveShare}%` }}
                      aria-hidden="true"
                    />
                  )}
                  {neutralShare > 0 && (
                    <span
                      className={styles.neutralSegment}
                      style={{ width: `${neutralShare}%` }}
                      aria-hidden="true"
                    />
                  )}
                  {negativeShare > 0 && (
                    <span
                      className={styles.negativeSegment}
                      style={{ width: `${negativeShare}%` }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className={styles.tierConfidence}>{tier.confidence}</p>
              </div>

              <div className={styles.sentimentCounts} aria-hidden="true">
                <span data-sentiment="positive">+ {tier.positive}</span>
                <span data-sentiment="neutral">= {tier.neutral}</span>
                <span data-sentiment="negative">− {tier.negative}</span>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.legend} aria-label="Sentiment key">
        <span data-sentiment="positive">+ Positive</span>
        <span data-sentiment="neutral">= Neutral</span>
        <span data-sentiment="negative">− Negative</span>
      </div>
    </figure>
  );
}

export function UrlEstateStrips({
  totalUrls = 2_286,
  productUrls = 2_154,
  sharedTimestampUrls = 2_286,
  sharedTimestamp = "May 15, 2019",
  observedDate = "July 14, 2026",
  className,
}: UrlEstateStripsProps) {
  const safeTotal = Math.max(0, totalUrls);
  const safeProduct = Math.min(safeTotal, Math.max(0, productUrls));
  const safeSharedTimestamp = Math.min(
    safeTotal,
    Math.max(0, sharedTimestampUrls),
  );
  const otherUrls = safeTotal - safeProduct;
  const productShare = percentage(safeProduct, safeTotal);
  const otherShare = percentage(otherUrls, safeTotal);
  const timestampShare = percentage(safeSharedTimestamp, safeTotal);

  return (
    <figure className={cx(styles.figure, className)}>
      <FigureHeader
        eyebrow="Digital truth / sitemap composition"
        title="Public URL estate"
        subtitle={`championteamwear.com sitemap observed ${observedDate}; n=${numberFormatter.format(safeTotal)} public URLs.`}
        value={numberFormatter.format(safeTotal)}
        valueLabel="URLs in one inherited estate"
      />

      <div className={styles.estateRows}>
        <section className={styles.estateRow} aria-label="URL mix">
          <div className={styles.estateLabel}>
            <h4>URL mix</h4>
            <p>
              <strong>{numberFormatter.format(safeProduct)}</strong> product ·{" "}
              <strong>{numberFormatter.format(otherUrls)}</strong> other
            </p>
          </div>
          <div
            className={styles.estateBar}
            role="img"
            aria-label={`${numberFormatter.format(safeProduct)} product URLs, ${formatPercentage(productShare)} of the estate; ${numberFormatter.format(otherUrls)} other URLs, ${formatPercentage(otherShare)}`}
          >
            <span
              className={styles.productSegment}
              style={{ width: `${productShare}%` }}
              aria-hidden="true"
            />
            <span
              className={styles.otherSegment}
              style={{ width: `${otherShare}%` }}
              aria-hidden="true"
            />
          </div>
          <div className={styles.estateValues} aria-hidden="true">
            <strong>{formatPercentage(productShare)} product</strong>
            <span>{formatPercentage(otherShare)} other</span>
          </div>
        </section>

        <section className={styles.estateRow} aria-label="Last-modified field">
          <div className={styles.estateLabel}>
            <h4>Last-modified field</h4>
            <p>
              <strong>{numberFormatter.format(safeSharedTimestamp)}</strong> carry the same
              date
            </p>
          </div>
          <div
            className={styles.estateBar}
            role="img"
            aria-label={`${numberFormatter.format(safeSharedTimestamp)} of ${numberFormatter.format(safeTotal)} URLs carry the same ${sharedTimestamp} last-modified date, ${formatPercentage(timestampShare)}`}
          >
            <span
              className={styles.timestampSegment}
              style={{ width: `${timestampShare}%` }}
              aria-hidden="true"
            />
          </div>
          <div className={styles.estateValues} aria-hidden="true">
            <strong>{formatPercentage(timestampShare)} same timestamp</strong>
            <span>{sharedTimestamp}</span>
          </div>
        </section>
      </div>

      <p className={styles.takeaway}>
        <span>Read</span>
        Migration risk is concentrated in the product catalog, while the universal stale
        timestamp suppresses freshness across the entire public estate.
      </p>
    </figure>
  );
}

export function TwoTrackRoadmap({
  phases = defaultRoadmapPhases,
  className,
}: TwoTrackRoadmapProps) {
  const totalDays = phases.reduce(
    (maximum, phase) => Math.max(maximum, phase.endDay),
    0,
  );

  return (
    <figure className={cx(styles.figure, className)}>
      <FigureHeader
        eyebrow="Delivery plan / parallel workstreams"
        title="Two-track 90-day roadmap"
        subtitle="Phase windows are scheduled; individual tasks are grouped within phases and are not presented as separately timed work packages."
        value={numberFormatter.format(totalDays)}
        valueLabel="days across two tracks"
      />

      <ol className={styles.roadmapPhases}>
        {phases.map((phase, index) => {
          const duration = Math.max(1, phase.endDay - phase.startDay);
          const phaseStyle = {
            "--phase-weight": duration,
          } as StyleWithVariables;

          return (
            <li
              key={`${phase.window}-${phase.name}`}
              className={styles.roadmapPhase}
              style={phaseStyle}
            >
              <header className={styles.phaseHeader}>
                <span>0{index + 1} · {phase.window}</span>
                <h4>{phase.name}</h4>
              </header>

              <section className={styles.roadmapLane} aria-label={`${phase.name}: operating track`}>
                <span>Operating track</span>
                <ul>
                  {phase.operating.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>

              <section
                className={`${styles.roadmapLane} ${styles.brandLane}`}
                aria-label={`${phase.name}: brand track`}
              >
                <span>Brand track</span>
                <ul>
                  {phase.brand.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            </li>
          );
        })}
      </ol>

      <div className={styles.roadmapKey}>
        <span>Operating track · urgent commercial continuity</span>
        <span>Brand track · durable decision system</span>
      </div>
    </figure>
  );
}
