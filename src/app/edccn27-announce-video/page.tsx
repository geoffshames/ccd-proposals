import type { Metadata } from "next";
import Image from "next/image";
import styles from "./proposal.module.css";

const rate = 100;

const pricing = [
  { service: "Creative direction and kickoff", hours: 3 },
  { service: "Editorial development and first cut", hours: 12 },
  { service: "Motion graphics and finishing", hours: 8 },
  { service: "Format adaptation for three sizes", hours: 4 },
  { service: "Two revision rounds", hours: 6 },
  { service: "Final QC, exports and delivery", hours: 2 },
  { service: "Project management and client communication", hours: 3 },
] as const;

const schedule = [
  { date: "Sep 8", item: "Assets, copy, brand guidance, approved audio and technical specs received" },
  { date: "Sep 9", item: "Kickoff and asset review" },
  { date: "Sep 18", item: "First cut delivered" },
  { date: "Sep 21", item: "Consolidated round-one notes received" },
  { date: "Sep 23", item: "Second cut delivered" },
  { date: "Sep 25", item: "Consolidated round-two notes received" },
  { date: "Sep 28 to Sep 30", item: "Final approvals and master preparation" },
  { date: "Oct 1", item: "Final delivery" },
] as const;

const totalHours = pricing.reduce((sum, item) => sum + item.hours, 0);
const totalPrice = totalHours * rate;
const approvalHref =
  "mailto:geoff@crowdcontroldigital.com?subject=EDCCN27%20Announce%20Video%20Approval";

export const metadata: Metadata = {
  metadataBase: new URL("https://proposal.crowdcontroldigital.com"),
  title: "EDCCN27 60-Second Announce Video | Crowd Control",
  description:
    "Creative production proposal for the EDCCN27 60-second announce video, prepared by Crowd Control.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "EDCCN27 60-Second Announce Video",
    description: "Creative production proposal from Crowd Control.",
    type: "website",
    siteName: "Crowd Control",
    url: "https://proposal.crowdcontroldigital.com/edccn27-announce-video",
  },
  twitter: {
    card: "summary_large_image",
    title: "EDCCN27 60-Second Announce Video",
    description: "Creative production proposal from Crowd Control.",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

export default function Edccn27AnnounceVideoPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#proposal-content">
        Skip to proposal
      </a>

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
        <section className={styles.hero} aria-labelledby="proposal-title">
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Prepared for Insomniac</p>
            <h1 id="proposal-title">
              <span>EDCCN27 60-Second</span>
              <span>Announce Video</span>
            </h1>
            <p className={styles.intro}>
              Crowd Control will produce a 60-second EDCCN27 announcement video, using Insomniac-supplied creative materials and the referenced prior announce package as the working quality and delivery benchmark. The same core creative is adapted across three client-specified sizes.
            </p>
          </div>

          <div className={styles.formatSlate} aria-label="Delivery summary">
            <div className={styles.slateHead}>
              <span>Output package</span>
              <strong>Final</strong>
            </div>
            <div className={styles.masterFrame}>
              <span>Master creative</span>
              <strong>60 SEC</strong>
            </div>
            <div className={styles.sizeRow}>
              <div><span>Size</span><strong>A</strong></div>
              <div><span>Size</span><strong>B</strong></div>
              <div><span>Size</span><strong>C</strong></div>
            </div>
            <p>Technical specs confirmed by Insomniac at kickoff.</p>
          </div>

          <dl className={styles.heroFacts}>
            <div><dt>Runtime</dt><dd>60 seconds</dd></div>
            <div><dt>Formats</dt><dd>Three sizes</dd></div>
            <div><dt>Revisions</dt><dd>Two rounds</dd></div>
            <div><dt>Final delivery</dt><dd>October 1, 2026</dd></div>
          </dl>
        </section>

        <section className={styles.approachSection}>
          <div>
            <SectionTitle>Production approach</SectionTitle>
            <p className={styles.lead}>
              One focused production path carries the approved direction from source review through final exports.
            </p>
          </div>
          <ol className={styles.approachList}>
            <li><span>Kickoff</span><p>Asset review and technical alignment</p></li>
            <li><span>Editorial</span><p>Edit structure and creative direction</p></li>
            <li><span>Finish</span><p>Motion graphics, audio balance and finishing</p></li>
            <li><span>Adapt</span><p>Adaptation and QC across three sizes</p></li>
            <li><span>Refine</span><p>Two consolidated revision rounds</p></li>
            <li><span>Deliver</span><p>Final masters delivered by October 1</p></li>
          </ol>
        </section>

        <section className={styles.scopeSection}>
          <div className={styles.scopePrimary}>
            <SectionTitle>Deliverables</SectionTitle>
            <ul className={styles.deliverableGrid}>
              <li><strong>One</strong><span>60-second master creative</span></li>
              <li><strong>Three</strong><span>Final client-specified sizes</span></li>
              <li><strong>Two</strong><span>Consolidated revision rounds</span></li>
              <li><strong>Final</strong><span>Delivery exports</span></li>
            </ul>
            <a
              className={styles.referenceLink}
              href="https://www.dropbox.com/scl/fo/bixxolaijjq763iikplya/AG7DiX_Gg2orVXtwj9KVovg?rlkey=x4x6p1d38j3a31mlnporv2aj2&dl=0"
              target="_blank"
              rel="noreferrer"
            >
              View reference folder
            </a>
          </div>

          <aside className={styles.boundary}>
            <h3>Revision boundary</h3>
            <p>
              Two rounds cover refinements to the approved direction, edit, timing, graphics, copy, audio balance and formatting.
            </p>
            <p>
              A new concept, major structural change after first-cut approval, new runtime, additional sizes, or extra revision rounds are out of scope and quoted at $100/hour after written approval.
            </p>
          </aside>
        </section>

        <section className={styles.investmentSection}>
          <div className={styles.investmentHead}>
            <div>
              <SectionTitle>Project investment</SectionTitle>
              <p>Fixed project price based on {totalHours} planned hours at exactly ${rate}/hour.</p>
            </div>
            <div className={styles.totalPrice}>
              <span>Fixed price</span>
              <strong>${totalPrice.toLocaleString("en-US")}</strong>
            </div>
          </div>

          <div className={styles.priceTable} role="table" aria-label="Planned hour breakdown">
            <div className={styles.priceHeader} role="row">
              <span role="columnheader">Workstream</span>
              <span role="columnheader">Hours</span>
              <span role="columnheader">Fee</span>
            </div>
            {pricing.map((item) => (
              <div className={styles.priceRow} role="row" key={item.service}>
                <span role="cell">{item.service}</span>
                <span role="cell">{item.hours}h</span>
                <span role="cell">${(item.hours * rate).toLocaleString("en-US")}</span>
              </div>
            ))}
            <div className={styles.priceTotal} role="row">
              <strong role="cell">Total</strong>
              <strong role="cell">{totalHours}h</strong>
              <strong role="cell">${totalPrice.toLocaleString("en-US")}</strong>
            </div>
          </div>
        </section>

        <section className={styles.scheduleSection}>
          <div className={styles.scheduleHead}>
            <SectionTitle>Proposed schedule</SectionTitle>
            <p>
              The October 1 deadline depends on the listed asset handoff and consolidated feedback dates.
            </p>
          </div>
          <ol className={styles.timeline}>
            {schedule.map((milestone) => (
              <li key={milestone.date}>
                <time>{milestone.date}</time>
                <span>{milestone.item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.termsSection}>
          <div className={styles.assumptions}>
            <SectionTitle>Working assumptions</SectionTitle>
            <ul>
              <li>Insomniac supplies approved source assets, final copy, brand guidance, approved and cleared audio, and technical delivery specs by September 8.</li>
              <li>The exact three sizes are confirmed at kickoff.</li>
              <li>One core creative direction is adapted to the other two sizes.</li>
              <li>One designated contact provides one consolidated timecoded feedback set per revision round.</li>
              <li>Runtime and core message remain consistent across sizes.</li>
            </ul>
          </div>
          <div className={styles.exclusions}>
            <h3>Not included</h3>
            <p>
              Original live-action production or shooting, talent, licensing fees, stock purchases, 3D character animation, original music composition, voiceover recording, translation, source project files, and deliverables beyond three sizes, unless added in writing.
            </p>
            <h3>Proposal terms</h3>
            <p>
              50% to schedule and begin. 50% on final delivery. Invoices are due within 15 days.
            </p>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div>
            <p>Ready to schedule production?</p>
            <h2>Approve the scope by email.</h2>
          </div>
          <a className={styles.cta} href={approvalHref}>Approve scope</a>
        </section>
      </div>

      <footer className={styles.footer}>
        <Image
          src="/brand/CC-LOGO-2024-WHITE.png"
          width={176}
          height={25}
          alt="Crowd Control"
        />
        <p>EDCCN27 Announce Video proposal</p>
      </footer>
    </main>
  );
}
