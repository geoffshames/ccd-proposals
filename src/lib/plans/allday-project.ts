import type { StrategyPlanData } from "../plan-context";

export const alldayProjectPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/allday-project/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "allday-project-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Brand Audit & Growth Strategy",
    title: "ALLDAY PROJECT",
    subtitle: "An audit of a following that has never stopped growing, the infrastructure already built to serve it, and the plan that connects the two.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/allday-project/allday-project-group.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview & Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Objective",
      subtitle: "ALLDAY PROJECT has added Spotify followers every single week since debut, including through nine months without a comeback. The opportunity is that almost nothing in the current setup lets those followers do anything next.",
      body: [
        "Fourteen months after debut, ALLDAY PROJECT holds a follower-to-listener ratio of 0.468, the highest of the 2025 rookie class. Spotify followers stand at 908,927 and have never declined in a single reading since debut, still adding roughly 509 a day at the date of this audit and through nine months with no comeback in market. On the format the industry said could not sell albums, the first EP moved 250,071 copies in its opening week. The commitment is real, it is measurable, and it is compounding on its own.",
        "The infrastructure to serve that commitment already exists and was paid for. DAY ONE was named the day before debut. The DAY OFF app took 40,000 signups in its first 24 hours across 156 countries. A paid membership launched and sold out. What has not been built is the connective layer between the two: the owned channels route nowhere, the membership gates nothing, there is no lightstick, and the group has not yet played a headline show in any market. The audit half of this document measures each of those gaps precisely across consumption, decay behavior, audience, video, and infrastructure. The strategy half connects what is already standing, and points it at the United States, which is this group's number one listening market and has never been worked.",
      ],
      supports: {
        heading: "What This Document Covers",
        items: [
          "Market position against the 2024-2026 rookie class and the co-ed format precedent, tiered on live consumption data",
          "Consumption and decay analysis: per-release retention curves, launch-day index, ceiling and floor economics",
          "U.S. audience and targeting, built from platform audience data across three owned channels",
          "Video intelligence: a 106-video corpus of owned and competitor posts with performance data joined",
          "Infrastructure audit: 34 owned surfaces checked one by one, from CRM to retail to ticketing",
          "The growth strategy: four execution verticals, partner-led workstreams, and a 12-week timeline",
        ],
      },
      goals: {
        heading: "12-Month Targets",
        items: [
          "Spotify monthly listeners recovering from 1.94M toward the 4.20M the group reached in December 2025",
          "Editorial reach rebuilt from 146,625 live toward the 12.45M the catalog held as recently as March 2026",
          "First-party capture standing up from zero to a measurable owned list across email and SMS in the U.S.",
          "Short form restarted to a sustained 4+ posts per week, the cadence every group in the comp set runs",
          "A first headline room and a lightstick, giving the sold-out membership something to actually gate",
          "First U.S. retail program and a named U.S. partner structure, converting the group's largest market",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "14 Months of Spotify Consumption",
          subtitle: "Monthly-listener and follower readings since debut. The two lines move in opposite directions: followers have never fallen in a single reading, while listeners peaked at 4.20M on December 20 2025 and are down roughly 54% from there.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "6/25/25", y: 156612 }, { x: "7/1/25", y: 881795 }, { x: "8/1/25", y: 3558809 }, { x: "9/1/25", y: 3048881 }, { x: "10/1/25", y: 2731824 }, { x: "11/1/25", y: 2341639 }, { x: "12/1/25", y: 3263035 }, { x: "12/20/25", y: 4195113 }, { x: "1/1/26", y: 4036593 }, { x: "2/1/26", y: 3690893 }, { x: "3/1/26", y: 3076390 }, { x: "4/1/26", y: 3012497 }, { x: "5/1/26", y: 2581395 }, { x: "6/1/26", y: 2553854 }, { x: "7/1/26", y: 2204568 }, { x: "8/1/26", y: 1990176 }, { x: "8/31/26", y: 1951884 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "6/25/25", y: 46559 }, { x: "7/1/25", y: 125931 }, { x: "8/1/25", y: 270952 }, { x: "9/1/25", y: 369070 }, { x: "10/1/25", y: 424242 }, { x: "11/1/25", y: 461394 }, { x: "12/1/25", y: 516130 }, { x: "12/20/25", y: 569294 }, { x: "1/1/26", y: 596469 }, { x: "2/1/26", y: 672386 }, { x: "3/1/26", y: 723276 }, { x: "4/1/26", y: 773837 }, { x: "5/1/26", y: 814269 }, { x: "6/1/26", y: 849748 }, { x: "7/1/26", y: 873859 }, { x: "8/1/26", y: 892294 }, { x: "8/31/26", y: 907611 },
              ],
            },
          ],
          markers: [
            { x: "6/25/25", label: "DEBUT" },
            { x: "12/20/25", label: "PEAK" },
            { x: "3/1/26", label: "PUBG" },
          ],
          tall: true,
          source: "Chartmetric, Jun 25 2025 to Aug 31 2026",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify daily and weekly chart archives, Hanteo and Circle published tallies, platform audience data, a 34-surface owned-infrastructure audit, and a dedicated ALLDAY PROJECT video intelligence store. Instagram audience geography, age, gender and affinity figures are platform-panel estimates built on a sample of roughly 72 to 78 profiles and are labelled as estimates wherever they appear. Cover photograph: 티비텐 TV10, CC BY 3.0, via Wikimedia Commons.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Positioning is only defensible when it is tiered on live consumption, not reputation. Eleven artists, one metric spine, three tiers.",
      intro: "The comparison set spans the acts ALLDAY PROJECT is measured against commercially and creatively: the 2024-2025 rookie class, the established fourth-generation groups, the global-format outlier, and the one co-ed precedent with a full career behind it. Spotify monthly listeners (Chartmetric, September 2026) is the spine. The notes carry what each peer does well and what ALLDAY PROJECT can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          strategy: "Two clean breaks define the tiers: 12.87M down to 7.96M, and 4.18M down to 1.94M. ALLDAY PROJECT sits at the top of tier three. The gap to tier two is KiiiKiii at 4,179,465, which is 2.15x the current base. That is the number the plan is built to close, and the follower base underneath it is already sized for the tier above.",
          components: {
            heading: "Tier One / Global Scale, 12M+ Monthly Listeners",
            items: [
              "KATSEYE, 37.7M monthly listeners. The only act in the set that solved the United States as a home market rather than an export market: 8.62M U.S. listeners, U.S. ranked No. 1. Built as a global pop act with K-pop production, so it never had to convert anyone. The contrast is instructive rather than discouraging, because their scale forces broad positioning that ALLDAY PROJECT does not have to adopt.",
              "ILLIT, 21.4M monthly listeners. The strongest discovery engine in the set. A 0.359 ratio on 21.4M listeners means an enormous casual layer that keeps refilling. Their lane is deliberately easy-listening, which is the lane ALLDAY PROJECT chose not to occupy.",
              "CORTIS, 12.9M monthly listeners. Shared the Golden Disc rookie award with ALLDAY PROJECT in January and is now 6.63x the size. Same award, same cycle, and the difference between the two trajectories is release cadence, not format or talent.",
            ],
          },
          kpis: [
            "Tier two, established scale, 4M to 8M: Hearts2Hearts 7.96M, BABYMONSTER 7.69M, MEOVV 4.96M, KiiiKiii 4.18M",
            "Tier three, sub-2M: ALLDAY PROJECT 1.94M at the top of the tier, JEON SOMI 1.82M, izna 1.56M, KARD 1.03M",
            "Gap to tier two: +2,238,576 listeners, or 2.15x, measured against KiiiKiii",
            "Ratio 0.468 leads the 2025 rookie class and sits below the 1.14 to 2.05 range the established acts reach",
            "Gap to tier one: +10.9M listeners, or 6.63x, measured against CORTIS",
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              subtitle: "Eleven acts, one metric. ALLDAY PROJECT sits at the top of tier three with a follower base sized for the tier above.",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "KATSEYE", y: 37714478 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "CORTIS", y: 12873814 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "BABYMONSTER", y: 7685700 },
                    { x: "MEOVV", y: 4962135 },
                    { x: "KiiiKiii", y: 4179465 },
                    { x: "ALLDAY PROJECT", y: 1940889 },
                    { x: "JEON SOMI", y: 1817500 },
                    { x: "izna", y: 1559098 },
                    { x: "KARD", y: 1032993 },
                  ],
                },
              ],
              highlightX: ["ALLDAY PROJECT"],
              tall: true,
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "hbars",
              title: "Fandom Conversion: Followers per Monthly Listener",
              subtitle: "ALLDAY PROJECT ranks 4th of 11 and first among the 2025 rookie class. The three acts above them carry more Spotify followers than monthly listeners, a signature of an established fandom rather than a rookie one, and mark the range this plan is aiming at.",
              series: [
                {
                  name: "Follower-to-listener ratio",
                  points: [
                    { x: "KARD", y: 2.046 },
                    { x: "JEON SOMI", y: 1.825 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "ALLDAY PROJECT", y: 0.468 },
                    { x: "izna", y: 0.423 },
                    { x: "CORTIS", y: 0.422 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KiiiKiii", y: 0.239 },
                  ],
                },
              ],
              highlightX: ["ALLDAY PROJECT"],
              tall: true,
              note: "Ratio is Spotify followers divided by monthly listeners. BABYMONSTER at 1.14, JEON SOMI at 1.83 and KARD at 2.05 all carry more followers than listeners, which is the range an established fandom reaches and the direction this plan is pointed.",
              source: "Chartmetric, September 3 2026",
            },
          ],
        },
        {
          label: "B",
          title: "How the Set Splits",
          strategy: "The set divides on where each act's audience was built, and ALLDAY PROJECT belongs to a split that no peer occupies cleanly. Their consumption is Asia-weighted and their following is United States-weighted, which is unusual and is the single most exploitable fact in this section.",
          components: {
            heading: "Three Readings",
            items: [
              "The U.S.-first lane: KATSEYE, ILLIT and CORTIS all rank the United States as their number one country and hold U.S. listener bases larger than ALLDAY PROJECT's entire global base. ALLDAY PROJECT also ranks U.S. number one, at 384,259, and is the only act in that lane without a single U.S.-facing structure behind it.",
              "The domestic and regional lane: Hearts2Hearts leads on Indonesia, MEOVV on Malaysia, BABYMONSTER on fandom-first conversion. These are the acts building depth market by market. ALLDAY PROJECT's Korea position is small at 93,271 but it is the only market in their top twenty that grew over the last six months.",
              "The established-fandom band: BABYMONSTER, JEON SOMI and KARD all hold more followers than listeners. KARD is also the only act to sustain a decade-long co-ed touring career, and it capped out at roughly 2,000-capacity rooms with one full-length album in ten years. ALLDAY PROJECT's single EP week already outsells KARD's career-best album week by 12.1x, which means the format ceiling KARD hit was a distribution ceiling, not an audience one.",
            ],
          },
          kpis: [
            "ALLDAY PROJECT holds 91% of KiiiKiii's follower count on 46% of their monthly listeners",
            "Instagram follower panel estimates the United States at 26% and Korea at 18%, the most U.S.-weighted follower estimate in the tier",
            "Korea, at 93,271 listeners, is the only market in the top twenty growing over six months",
            "Luxury goods audience affinity indexes at 7.2x, the strongest brand signal in the comp set",
          ],
        },
      ],
      footnote: "All comparison figures pulled from the Chartmetric API on September 3, 2026, so the set is measured on a single date and is directly comparable. Career and touring history for the co-ed precedent from published tour routings and Hanteo tallies.",
    },

    // ===================================================================
    // 03. Consumption & Decay Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption & Decay Analysis",
      philosophy: "Peak position tells you how a release opened. Retention tells you what the audience does when nobody is promoting. This section reads the second one.",
      intro: "Every figure below is built from Spotify daily and weekly chart archives, indexed from each release date and normalized for the fact that a debut chart week contains four days while every subsequent week contains seven. Chart-coverage gaps are treated as gaps, never as zeros: when a track falls below the top-200 cutoff it is recorded as below cutoff, because the catalog is still doing 229,340 streams a day globally.",
      subBlocks: [
        {
          label: "A",
          title: "Fandom Conversion, Month by Month",
          strategy: "The ratio has climbed from 0.076 in August 2025 to 0.465, a 6.1x improvement, with three flat-to-down months along the way and an unbroken run of gains since January 2026. Decomposing it matters, because the two halves are not equally durable: the listener collapse contributes roughly twice what follower growth does. The follower half is the durable one, and it is remarkable on its own. Followers grew 59.7% from the December peak and have never once declined, through nine months with no comeback in market.",
          charts: [
            {
              kind: "line",
              title: "Follower-to-Listener Ratio by Month",
              subtitle: "From 0.076 in August 2025 to 0.465 at the end of August 2026. Three readings dip along the way; every month since January 2026 is an improvement on the one before it.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "Jul 25", y: 0.143 }, { x: "Aug 25", y: 0.076 }, { x: "Sep 25", y: 0.121 }, { x: "Oct 25", y: 0.155 }, { x: "Nov 25", y: 0.197 }, { x: "Dec 25", y: 0.158 }, { x: "Jan 26", y: 0.148 }, { x: "Feb 26", y: 0.182 }, { x: "Mar 26", y: 0.235 }, { x: "Apr 26", y: 0.257 }, { x: "May 26", y: 0.315 }, { x: "Jun 26", y: 0.333 }, { x: "Jul 26", y: 0.396 }, { x: "Aug 26", y: 0.448 }, { x: "Aug 31 26", y: 0.465 },
                  ],
                },
              ],
              note: "Ratio is Spotify followers divided by monthly listeners, read at each month start.",
              source: "Chartmetric daily series, Jun 2025 to Aug 2026",
            },
          ],
          kpis: [
            "Followers +339,633 since the December listener peak, a 59.7% gain with zero declining readings",
            "Follower adds still running at roughly 509 a day with no product in market",
            "Ratio 0.468 as of September 3, first of the 2025 rookie class and 4th of the 11-act set",
            "Monthly listener decline runs as a sawtooth, not a glide: -2.7% in March, -13.8% in April, -2.0% in May, -11.7% in June, -11.3% in July, -2.1% in August, month-end to month-end",
          ],
        },
        {
          label: "B",
          title: "Catalog Health and the Retention Winner",
          strategy: "The catalog carries roughly 1.60M Spotify streams a week fourteen months after debut, and the composition of that number contains the most actionable finding in this section. Read the third column, not the first: the track holding the highest share of its own peak is LOOK AT ME, an EP cut, at 15.1%. It is now out-streaming both the lead single that preceded it and the debut B-side globally. The audience returns to a song the promotion never centered.",
          charts: [
            {
              kind: "bars",
              title: "Current Weekly Stream Rate by Track",
              subtitle: "Seven-day Spotify rate as of September 3 2026. FAMOUS is a genuine evergreen at 484K a week, fourteen months out.",
              unit: "streams/wk",
              series: [
                {
                  name: "7-day rate",
                  points: [
                    { x: "FAMOUS", y: 484056 },
                    { x: "LOOK AT ME", y: 325997 },
                    { x: "ONE MORE TIME", y: 280138 },
                    { x: "WICKED", y: 213960 },
                    { x: "WHERE YOU AT", y: 105283 },
                    { x: "I DON'T BARGAIN", y: 67824 },
                    { x: "HOT", y: 52526 },
                    { x: "YOU AND I", y: 47073 },
                    { x: "MEDUSA", y: 15236 },
                  ],
                },
              ],
              source: "Chartmetric track statistics, September 3 2026",
            },
            {
              kind: "bars",
              title: "Retention: Current Rate as a Share of Peak Week",
              subtitle: "The retention ranking is not the promotion ranking. LOOK AT ME, an EP cut, holds a higher share of its own peak than any title track.",
              unit: "%",
              series: [
                {
                  name: "% of peak week",
                  points: [
                    { x: "LOOK AT ME", y: 15.1 },
                    { x: "WHERE YOU AT", y: 12.6 },
                    { x: "HOT", y: 12.5 },
                    { x: "I DON'T BARGAIN", y: 11.4 },
                    { x: "FAMOUS", y: 8.7 },
                    { x: "YOU AND I", y: 6.8 },
                    { x: "ONE MORE TIME", y: 6.1 },
                    { x: "WICKED", y: 5.8 },
                    { x: "MEDUSA", y: 5.0 },
                  ],
                },
              ],
              highlightX: ["LOOK AT ME"],
              source: "Chartmetric track statistics, September 3 2026",
            },
          ],
          kpis: [
            "Total current catalog rate: roughly 1.60M Spotify streams per week, 229,340 per day globally",
            "FAMOUS holds 484,056 a week at fourteen months, about 30% of all weekly catalog volume",
            "LOOK AT ME now out-streams ONE MORE TIME and WICKED globally despite never being the promotional centre",
            "Catalog total to date: 245.5M streams across ten tracks, nine of which are charted above",
          ],
        },
        {
          label: "C",
          title: "Launch Curves and the Consumption Signature",
          strategy: "Normalized per day, no ALLDAY PROJECT release has exceeded 1.21x its own launch rate, while every comparison act exceeds 1.9x and the best reaches 3.38x. Their releases reach maximum daily rate within two to four days and then settle. This is a launch-driven signature: day-one mobilization is excellent, and the post-launch discovery layer that carries a song into week four is the piece that has not been built. It is a marketing gap, not a music gap, and it is the specific thing sections 08 through 11 are designed to fix.",
          charts: [
            {
              kind: "bars",
              title: "Peak Week as a Multiple of Launch Week",
              subtitle: "Per-day normalized, so a four-day debut chart week is compared fairly against a seven-day week. Comparison acts multiply after launch. ALLDAY PROJECT releases peak at launch.",
              unit: "x",
              series: [
                {
                  name: "Peak / launch week, per day",
                  points: [
                    { x: "CORTIS REDRED", y: 3.38 },
                    { x: "KiiiKiii 404", y: 2.75 },
                    { x: "H2H The Chase", y: 2.24 },
                    { x: "BABYMONSTER SHEESH", y: 2.19 },
                    { x: "ILLIT Magnetic", y: 1.92 },
                    { x: "LOOK AT ME", y: 1.21 },
                    { x: "WICKED", y: 1.16 },
                    { x: "ONE MORE TIME", y: 1.03 },
                    { x: "FAMOUS", y: 1.00 },
                  ],
                },
              ],
              highlightX: ["LOOK AT ME", "WICKED", "ONE MORE TIME", "FAMOUS"],
              tall: true,
              note: "Launch week normalized to a per-day rate because every release in the set dropped on a Monday inside a Friday-to-Thursday chart week.",
              source: "Spotify Korea weekly chart archives, indexed from each release date",
            },
            {
              kind: "bars",
              title: "Weeks on the Korea Weekly Chart by Release",
              subtitle: "Chart durability by release order. The debut single held for 51 consecutive weeks.",
              unit: "weeks",
              series: [
                {
                  name: "Weeks charted",
                  points: [
                    { x: "FAMOUS", y: 51 },
                    { x: "WICKED", y: 31 },
                    { x: "ONE MORE TIME", y: 20 },
                    { x: "LOOK AT ME", y: 12 },
                    { x: "WHERE YOU AT", y: 6 },
                    { x: "YOU AND I", y: 1 },
                    { x: "I DON'T BARGAIN", y: 1 },
                  ],
                },
              ],
              source: "Spotify Korea weekly chart archives, September 3 2026",
            },
          ],
          kpis: [
            "Every release reaches its maximum daily rate between day two and day four",
            "Best post-launch multiple achieved to date: 1.21x, on LOOK AT ME",
            "Comparison range across the rookie class: 1.92x to 3.38x",
            "FAMOUS charted in Korea for 51 consecutive weeks, from June 2025 to June 2026, the longest run in the catalog",
          ],
        },
        {
          label: "D",
          title: "Ceiling and Floor Economics",
          strategy: "Two numbers frame the whole opportunity. The artist-level weekly ceiling was 932,447 in the debut era and 935,330 in the EP era, a 0.31% change across three times the charting inventory, which says added catalog alone does not lift the ceiling. Decay on the debut track between eras did slow, from -6.96% a week across the 15 weeks to November 2025 to roughly -1% a week across its final plateau, and that plateau was genuine. Monthly listeners overall have not stabilized, and section 03A states that plainly. The lever that does move the number is a real comeback: the November 2025 release lifted the debut catalog 42.0% over the two weeks that followed. The March brand single moved it -13.8% over the same two-week window. Releases lift the catalog. Brand tie-ins do not.",
          charts: [
            {
              kind: "bars",
              title: "Weekly Listener Decay Between Releases",
              subtitle: "Weekly stream decay on the debut single across each quiet window between releases. The track itself became progressively harder to lose. Monthly listeners across the whole catalog have not followed the same path.",
              unit: "%/wk",
              series: [
                {
                  name: "Weekly decay rate",
                  points: [
                    { x: "Era 1 gap", y: 6.96 },
                    { x: "Era 2 gap", y: 4.03 },
                    { x: "Era 3 gap", y: 1.01 },
                  ],
                },
              ],
              source: "Spotify Korea weekly archives, measured on the debut single across 51 charting weeks",
            },
            {
              kind: "grouped",
              title: "Catalog Response: Comeback vs Brand Single",
              subtitle: "Change in the debut single's weekly Korea streams across the two weeks following each event.",
              unit: "%",
              series: [
                {
                  name: "Catalog change",
                  points: [
                    { x: "Nov 2025 comeback", y: 42.0 },
                    { x: "Mar 2026 brand single", y: -13.8 },
                  ],
                },
              ],
              note: "A proper release pulls the back catalog with it. A brand-funded collaboration did not.",
              source: "Spotify Korea weekly archives, Nov 2025 and Mar 2026 windows",
            },
          ],
          kpis: [
            "Artist weekly ceiling: 932,447 in the debut era, 935,330 in the EP era, on 3x the charting tracks",
            "Per-track efficiency fell from 466,224 to 155,888 across the same two eras",
            "Debut-track decay improved from -6.96% a week (Jul to Nov 2025) to roughly -1% a week (Apr to Jun 2026)",
            "Catalog plateau held between 84,921 and 94,543 weekly across the final ten charting weeks",
          ],
        },
        {
          label: "E",
          title: "Editorial Reach and Physical Sales",
          strategy: "Two more findings close the section, and they point in opposite directions. Editorial support has almost entirely lapsed, and the timing is exact. Peak support was 27 editorial playlists live at once on March 12 2026, reaching a combined 12.45M followers. Five are live today, reaching 146,625. That 98.8% fall between March and August is the clearest single explanation for the listener curve over the same months, and it is recoverable, because all 42 of those placements were earned once already. Physical sales run the other way. The EP moved 250,071 copies in week one, 5.2x the debut single, in the same window that streaming fell. The two halves of this audience behave completely differently, and only one of them has ever been sold to properly.",
          charts: [
            {
              kind: "grouped",
              title: "Editorial Playlist Reach, Historical vs Live",
              subtitle: "Peak simultaneous support was 27 editorial playlists on March 12 2026. K-Pop ON! (6.13M followers) came off on April 8, K-Pop Rising on April 14, KimBops! on May 13, Hot Hits Korea on June 24.",
              unit: "reach",
              series: [
                {
                  name: "Reach",
                  points: [
                    { x: "Peak, Mar 12 2026", y: 12451383 },
                    { x: "Live today", y: 146625 },
                  ],
                },
              ],
              note: "42 distinct editorial playlists have carried the catalog at some point, reaching 13.80M followers in total. Roughly 1.4M of that sat on non-K-pop editorial, including a pop mood list that peaked at position 6 and a hip-hop and R&B list that peaked at 18.",
              source: "Chartmetric playlist endpoint, September 3 2026",
            },
            {
              kind: "grouped",
              title: "First-Week Physical Sales by Release",
              subtitle: "The EP sold 5.2x the debut single in its opening week, and 12.1x the career-best week of the only comparable co-ed act.",
              unit: "copies",
              series: [
                {
                  name: "First week",
                  points: [
                    { x: "FAMOUS", y: 48468 },
                    { x: "1st EP", y: 250071 },
                  ],
                },
              ],
              source: "Hanteo first-week tallies",
            },
          ],
          kpis: [
            "42 editorial playlists held at some point, 27 live simultaneously at the March 2026 peak, 5 live today",
            "Non-K-pop editorial delivered outsized peak positions and is currently unused",
            "EP first week 250,071, in the same range as peers at 2x to 4x the streaming scale",
            "First day of EP sales alone: 85,531, above the debut single's entire first week",
          ],
        },
      ],
      footnote: "Methodology: releases are indexed from their own release date, launch weeks are normalized to a per-day rate, and chart-coverage gaps are recorded as gaps rather than zeros. Comparison-act multiples are computed on the identical basis so the set is directly comparable.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "U.S. Audience & Targeting",
      intro: "The profile below is built from Chartmetric platform audience data across all three owned channels, pulled September 3, 2026. Two source types sit underneath it and they are not equally strong. Spotify listener geography is measured. Instagram follower demographics are panel estimates on a sample of roughly 72 to 78 profiles and are treated as directional only. Instagram engagement geography, computed on actual like volume across 156 cities, is the strongest signal available and is reported alongside the others because it disagrees with them.",
      thesis: "Where this group is streamed and where it is engaged are two different maps. Spotify listening is United States first at 384,259. Instagram engagement, measured on real like volume, is Greater China first: Taiwan 22.4%, then Indonesia, Korea, Japan and China, with the United States sixth at 5.7%. Neither map is wrong. The plan treats the U.S. as the streaming, retail and paid priority, and treats Asia as where live demand is already demonstrable.",
      metrosLabel: "Opening U.S. Paid Markets",
      metros: [
        { name: "Los Angeles, CA" },
        { name: "New York, NY" },
        { name: "Chicago, IL" },
        { name: "San Francisco Bay Area", tier: "secondary" },
        { name: "Dallas-Fort Worth, TX", tier: "secondary" },
        { name: "Seattle, WA", tier: "secondary" },
        { name: "Atlanta, GA", tier: "secondary" },
        { name: "Houston, TX", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 7 },
        { bracket: "18-24", weight: 30 },
        { bracket: "25-34", weight: 49 },
        { bracket: "35+", weight: 14 },
      ],
      genderDistribution: { female: 52, male: 48 },
      similarArtists: [
        "MEOVV",
        "KISS OF LIFE",
        "BADVILLAIN",
        "VVUP",
        "ZICO",
        "Lee Young Ji",
        "KATSEYE",
        "izna",
        "Zior Park",
        "hannah bahng",
      ],
      genres: ["K-Pop", "Korean Pop", "Korean Hip-Hop", "Dance-Pop", "Pop"],
      psychographics: [
        {
          label: "What This Audience Buys",
          items: [
            "Luxury goods indexes at 7.2x against the platform baseline, the strongest brand signal in the comp set",
            "Christian Dior indexes at 12.7x, Chanel 12.9x, Prada 12.7x, Louis Vuitton 11.3x",
            "Clothing and accessories, music, and beauty are the three leading stated interests",
            "Affinity indices are drawn from a panel sample of roughly 74 to 78 profiles and are directional, not a headcount",
          ],
        },
        {
          label: "Where the Two Maps Disagree",
          items: [
            "Spotify listening ranks the United States first at 384,259, ahead of Indonesia, the Philippines, Taiwan and Malaysia",
            "Instagram engagement, measured on real like volume, ranks Taiwan first at 22.4% with the United States sixth at 5.7%",
            "Hong Kong, Taipei and Seoul lead engagement by city; Los Angeles ranks 22nd on the same measure",
            "The practical read: the U.S. audience streams and does not yet interact, while the Asia audience interacts heavily. Both are real and they call for different tactics",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "Following the act without consuming the catalog",
          platforms: ["Spotify", "Instagram"],
          implication: "Followers grew 59.7% across a window with no new music. The commitment is not release dependent, so it can be activated between eras rather than only inside them.",
        },
        {
          behavior: "Returning to an album cut over the promoted single",
          platforms: ["Spotify"],
          implication: "LOOK AT ME holds 15.1% of its peak week against the lead single's 6.1%. The audience is choosing depth over the promoted surface, which should inform what gets pushed next.",
        },
        {
          behavior: "Engaging harder on Instagram than on TikTok for identical content",
          platforms: ["Instagram", "TikTok"],
          implication: "Instagram wins 18 of 21 paired posts. Reach currently being left on the table is free and requires no additional production.",
        },
        {
          behavior: "Subscribing on YouTube without watching short form there",
          platforms: ["YouTube"],
          implication: "4.31M subscribers, which is 2.6x the TikTok following, converting at a median of 0.27x on the same video. The largest single gap between audience size and audience use.",
        },
        {
          behavior: "Engaging heavily in Asia while streaming heavily in the United States",
          platforms: ["Instagram", "Spotify"],
          implication: "Taiwan drives 22.4% of Instagram like volume against 5.7% from the United States, while the U.S. leads Spotify listening. Live demand is provable in Asia today; the U.S. is a streaming and retail market that has not been asked to do anything yet.",
        },
      ],
      platformSignals: [
        {
          platform: "Spotify",
          note: "1.94M monthly listeners with the United States at No. 1 on 384,259, or 19.8% of the total, ahead of Indonesia, the Philippines, Taiwan and Malaysia. Follower base 908,927 and rising. The U.S. footprint is broad and flat rather than metro concentrated, which reads as algorithmic reach that has never been worked on the ground.",
        },
        {
          platform: "Instagram",
          note: "1.69M followers, 3.52% engagement, roughly 59.7K average likes. Follower panel estimates skew United States and Korea, aged 25 to 34, and close to evenly split by gender, which is unusual in this class. Engagement measured on real like volume tells a different story: Taiwan 22.4%, Indonesia 8.3%, Korea 8.0%, Japan 6.9%, China 6.5%, United States 5.7%. Treat the panel as directional and the like volume as the reliable read.",
        },
        {
          platform: "TikTok",
          note: "1.63M followers with a 10.49% engagement rate, the highest of the three channels. Audience is 77.2% female and 70.5% aged 18 to 24, weighted to the United States 10.4%, Brazil 9.8% and Southeast Asia. Follower growth has been flat since April 2026.",
        },
        {
          platform: "YouTube",
          note: "4.31M subscribers and 756M channel views. Audience 71.7% female, 56.4% aged 25 to 34, subscribers led by Korea 23.9% and the United States 10.0%. The commenting core is 43.1% Korean, so the vocal audience and the subscribing audience are different populations.",
        },
      ],
      footnote: "Age and gender shown are Instagram audience panel estimates via Chartmetric, September 3, 2026, computed on a sample of roughly 72 to 78 profiles. They are directional and should not be read as a headcount. Instagram engagement geography is computed on actual like volume across 156 cities and is the stronger measure. TikTok's distribution differs materially from both and is described in the platform notes. U.S. metros are ordered on Spotify city listener data and are the opening paid set, to be validated against pixel data in the first flight rather than treated as settled.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Content",
      title: "Video Intelligence / 106 Videos",
      intro: "Crowd Control Digital built a dedicated ALLDAY PROJECT intelligence store on TwelveLabs video AI: 48 of the group's own posts across TikTok, Instagram and YouTube, plus 58 top posts from seven comparison acts. Every video carries its own performance data. The store is persistent and grows with every refresh, so the analysis below is the opening read on an asset that compounds rather than a one-time scan.",
      clientQuestion: {
        attribution: "The question this analysis answers",
        question: "The following kept growing through a quiet period. What did the content do to earn that, and what is the fastest way to put the channels back to work?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "Two layers. The full catalog of every owned account was enumerated with per-post engagement, 293 TikTok posts plus Instagram and YouTube, and all medians and cadence figures are computed on that full enumeration. A 106-video subset was then indexed into the video store: 48 owned (34 TikTok, 11 Instagram, 3 YouTube) and 58 competitor, drawn from the top performers of MEOVV, CORTIS, KiiiKiii, KATSEYE, Hearts2Hearts, BABYMONSTER and izna.",
        },
        {
          label: "Video intelligence store",
          value: "All 106 subset videos indexed into a dedicated persistent ALLDAY PROJECT knowledge store, making hooks, on-screen text, staging and recurring formats queryable across the whole corpus at once. Each file carries its performance tier in its own name, so the store remains readable independent of any external registry.",
        },
        {
          label: "Performance join",
          value: "Every item is bound to its platform metrics: views, likes, comments, shares, engagement rate, post date and within-account percentile. Content is read against outcomes rather than in isolation.",
        },
        {
          label: "Cadence measurement",
          value: "Posting frequency measured across every account in the set over the same June 1 to September 3, 2026 window, so cadence comparisons are like for like.",
        },
        {
          label: "Honest limits",
          value: "Findings below are grounded in full-catalog enumeration and joined performance data, with the 106-video indexed subset behind the format and content reads. Frame-level query results against the store extend this analysis and are reported in a follow-up pass. Comparison corpora are each act's top posts, so competitor medians are a winners' benchmark by construction, not an account average. Member-level reads are grounded in captions and official tags, not facial identification.",
        },
      ],
      corpusStats: [
        {
          label: "Videos analyzed",
          value: "106",
          detail: "48 owned + 58 competitor indexed, drawn from a fully enumerated catalog of 293 owned TikTok posts",
        },
        {
          label: "Owned TikTok median, debut era",
          value: "3.01M",
          detail: "Across 76 posts in June and July 2025, from the full catalog enumeration. All-time single-post peak is 14.47M",
        },
        {
          label: "Owned TikTok median, most recent era",
          value: "822K",
          detail: "Across 8 posts in May and June 2026, the last posts before the account went quiet",
        },
        {
          label: "Days since last post",
          value: "72 / 55 / 45",
          detail: "TikTok, YouTube and Instagram respectively, as of September 3 2026. Instagram's last organic post was 62 days ago; the more recent one is a brand campaign post",
        },
      ],
      mixColumnLabel: "ALLDAY PROJECT today",
      benchmarkColumnLabel: "The comparison set",
      mixHeading: "Where the Output Sits vs What the Set Runs",
      mixIntro: "The rows below compare current practice against what the seven comparison accounts do, measured over the same window. Cadence is the row that carries the others.",
      mixRows: [
        {
          metric: "Posting cadence, Jun 1 to Sep 3 2026",
          subject: "8 TikTok posts on a single day in June, then 0 in the final 72 days of the window",
          benchmark: "KiiiKiii ~21/wk, Hearts2Hearts ~21/wk, CORTIS ~20/wk, izna ~13/wk, KATSEYE ~6.8/wk, MEOVV ~4.5/wk, BABYMONSTER ~2.5/wk",
          read: "behind",
          note: "Every one of the seven comparison accounts posted on September 3. This is the single largest and cheapest gap in the audit.",
        },
        {
          metric: "Calls to action",
          subject: "5 explicit calls to action across 48 posts, none of them in 2026",
          benchmark: "Standard practice across the set is a recurring end card or a caption ask on release assets",
          read: "behind",
          note: "The most recent call to action of any kind was 271 days ago. With the U.S. as listening market No. 1, this is the cheapest fix in the document.",
        },
        {
          metric: "Platform allocation",
          subject: "TikTok treated as primary; Instagram as a mirror; YouTube Shorts as an afterthought",
          benchmark: "Peers weight to whichever surface their own data rewards, and manage the crossover deliberately",
          read: "behind",
          note: "Instagram beats TikTok on 18 of 21 paired posts at a 1.47x median, while a 4.31M-subscriber YouTube channel returns 0.27x. The allocation is inverted against the evidence.",
        },
        {
          metric: "Member-named content",
          subject: "12 of 48 posts name a member (25%)",
          benchmark: "MEOVV names a member in 42% of ingested captions",
          read: "behind",
          note: "Posts naming two or more members median 8.74M against 2.92M for posts naming none. The format works and is under-supplied.",
        },
        {
          metric: "U.S.-addressed content",
          subject: "Korean hashtags on nearly every post; English appears as lyric fragments",
          benchmark: "KATSEYE runs 100% English captions with U.S.-native idiom, U.S. brand partners and an English fandom name",
          read: "behind",
          note: "Against a No. 1 market of 384,259 U.S. listeners, the corpus contains no asset addressed to a U.S. viewer.",
        },
        {
          metric: "Engagement quality",
          subject: "10.49% TikTok engagement rate; final post before the pause hit a 17.7% like rate",
          benchmark: "Comfortably at or above the set on a per-post basis",
          read: "ahead",
          note: "This is the row that says the content itself is not the problem. Efficiency was rising at the exact point output stopped.",
        },
      ],
      mixFootnote: "Owned mix measured on the 48-video analyzed corpus and the full June to September posting window. Comparison columns describe each account's top posts and same-window cadence.",
      charts: [
        {
          kind: "bars",
          title: "Median TikTok Views by Era",
          subtitle: "The decline begins with the brand-single window in February and March 2026, four months before the account went quiet.",
          unit: "views",
          series: [
            {
              name: "Median views",
              points: [
                { x: "Debut, Jun-Jul 25", y: 3014982 },
                { x: "Comeback, Nov-Dec 25", y: 2752716 },
                { x: "Jan 26", y: 2281674 },
                { x: "Brand single, Feb-Mar 26", y: 381812 },
                { x: "May-Jun 26", y: 822954 },
              ],
            },
          ],
          source: "Owned TikTok corpus, per-post view counts joined by post date",
        },
        {
          kind: "bars",
          title: "Weekly Posting Cadence, Jun 1 to Sep 3 2026",
          subtitle: "Measured across the same window for every account in the set. ALLDAY PROJECT posted on June 23 and not once in the 72 days since.",
          unit: "posts/wk",
          series: [
            {
              name: "Posts per week",
              points: [
                { x: "KiiiKiii", y: 21 },
                { x: "Hearts2Hearts", y: 21 },
                { x: "CORTIS", y: 20 },
                { x: "izna", y: 13 },
                { x: "KATSEYE", y: 6.8 },
                { x: "MEOVV", y: 4.5 },
                { x: "BABYMONSTER", y: 2.5 },
                { x: "ALLDAY PROJECT", y: 0.6 },
              ],
            },
          ],
          highlightX: ["ALLDAY PROJECT"],
          tall: true,
          source: "Account enumeration across all eight handles, September 3 2026",
        },
        {
          kind: "grouped",
          title: "Same Post, Three Platforms",
          subtitle: "Median performance of identical videos posted across all three owned channels, indexed to the TikTok number.",
          unit: "x TikTok",
          series: [
            {
              name: "Relative performance",
              points: [
                { x: "TikTok", y: 1.0 },
                { x: "Instagram", y: 1.47 },
                { x: "YouTube Shorts", y: 0.27 },
              ],
            },
          ],
          note: "Instagram wins 18 of 21 paired posts. YouTube Shorts returns roughly a quarter of the TikTok number on a channel with 2.6x the followers.",
          source: "21 paired posts and 15 three-way twins across the owned corpus",
        },
      ],
      findingsHeading: "Seven Findings",
      findingsIntro: "Each card carries the verdict, the evidence with real posts and their numbers, the counter-case where one exists, and the pivot.",
      findings: [
        {
          id: "stopped-at-strength",
          title: "The channels went quiet while engagement efficiency was at its best.",
          verdict: "confirmed",
          confidence: "High",
          summary: "TikTok has not posted in 72 days, YouTube in 55, and Instagram's last organic reel was 45 days ago. The last TikTok before the pause returned 4,745,315 plays against 839,797 likes, a 17.7% like rate and the strongest ratio the account has recorded since debut week. Output stopped at the point the content was working hardest per post.",
          evidence: [
            "Final TikTok post, June 23 2026: 4,745,315 plays, 839,797 likes, a 17.7% like rate",
            "That like rate is the account's best since its debut window, on a post ranking roughly 30th of 293 by reach",
            "Instagram's last organic reel, July 3 2026, took 934,654 views with no promotion behind it. The only post since is a brand campaign reel on July 20",
            "Spotify followers continued adding roughly 509 a day through the entire quiet window",
          ],
          counterEvidence: [
            "The final post is not the account's reach peak. That remains a July 2025 post at 14,472,560 plays, so the pause came at peak efficiency rather than peak reach",
          ],
          pivot: {
            title: "Restart before rebuilding",
            actions: [
              "Resume posting on a fixed weekly cadence before commissioning any new production",
              "Open with the formats the corpus already ranks highest rather than a new creative direction",
              "Treat the follower growth through the quiet window as proof the audience is still present and waiting",
            ],
          },
        },
        {
          id: "brand-single-dip",
          title: "The reach decline starts with the brand single, four months before the pause.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Median TikTok views fell from 3,014,982 in the debut era to 381,812 across the February and March 2026 brand-collaboration window, a drop of 87%. Six of the ten lowest-performing posts in the whole corpus carry brand-collaboration tagging. The catalog agreed: the same release moved back-catalog streams by -9.8%, where the November comeback moved them +42.0%.",
          evidence: [
            "Debut era median 3,014,982 across 76 posts; brand-single era median 381,812 across 10 posts",
            "The brand-single music video itself sits at 368,717, in the 2.2nd percentile of the corpus",
            "Six of the ten worst-performing posts in the corpus are brand-collaboration tagged",
            "Catalog response: -9.8% for the brand single against +42.0% for the November comeback",
          ],
          counterEvidence: [
            "The May and June 2026 posts recovered to a median of 822,954, so the effect is tied to the campaign rather than a permanent reset of the account",
          ],
          pivot: {
            title: "Separate the brand lane from the artist lane",
            actions: [
              "Run partner campaigns as their own content stream rather than through the main release grammar",
              "Hold the main feed for artist-owned formats, so partner work does not set the account's median",
              "Anchor every partner activation to an artist release so the catalog gets the lift too",
            ],
          },
        },
        {
          id: "platform-allocation",
          title: "Platform allocation is inverted against the group's own data.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Identical videos perform better on Instagram than TikTok in 18 of 21 paired cases, at a 1.47x median. YouTube Shorts returns a 0.27x median on a channel carrying 4.31M subscribers, which is 2.6x the TikTok following. The largest owned audience is being served the least, and the surface that wins is treated as a mirror.",
          evidence: [
            "Instagram beats TikTok on 18 of 21 paired posts, median 1.47x, mean 1.90x",
            "The three widest gaps all sit on brand-campaign content, at 3.81x, 4.02x and 4.22x",
            "YouTube Shorts median 0.27x across 15 three-way twins; the final post read 4,745,315 TikTok, 5,395,176 Instagram, 741,000 YouTube",
            "The YouTube channel holds 4.31M subscribers and 756M lifetime views, the largest owned audience on any platform",
          ],
          counterEvidence: [
            "One YouTube Short outperformed its TikTok twin at 1.20x, so the channel is capable when the format fits it",
          ],
          pivot: {
            title: "Manage the crossover instead of mirroring it",
            actions: [
              "Treat Instagram as a primary surface with its own posting decisions, not a duplicate feed",
              "Build YouTube Shorts around the formats that channel's audience already subscribes for, then measure again in 60 days",
              "Cross-post winners that never crossed over; that inventory already exists and costs nothing to ship",
            ],
          },
        },
        {
          id: "cta-desert",
          title: "Five release calls to action, all of them in 2025, and one app prompt since.",
          verdict: "confirmed",
          confidence: "High",
          summary: "Across the owned corpus there are five explicit release calls to action, all between June and December 2025, a 10% rate. Since then there has been exactly one ask of any kind: a single app-download prompt on TikTok in March 2026, which was the lowest-performing post in the sampled set. No release, ticket, membership or capture ask has run in over nine months.",
          evidence: [
            "Five release calls to action total, in a corpus of 48 posts, a 10% rate",
            "Last release ask: December 6 2025, a pre-save and pre-order prompt on the EP",
            "One app-download prompt in March 2026, the lowest-performing post in the sampled set at 318K plays against a 4.75M ceiling",
            "The bio link on 1.69M Instagram followers resolves to a music video published in March",
          ],
          pivot: {
            title: "Point the reach somewhere",
            actions: [
              "Standardize a one to two second end card on every release asset carrying title and date",
              "Rotate the bio link on a fixed schedule against whatever the current priority is",
              "Add a single recurring destination that captures a name and an email, so reach becomes a list",
            ],
          },
        },
        {
          id: "cadence-gap",
          title: "Cadence, not creative, is the whole distance to the labelmate.",
          verdict: "confirmed",
          confidence: "High",
          summary: "MEOVV posted 60 times between June 1 and September 3, roughly 4.5 a week, and posted again on the day of this audit. ALLDAY PROJECT posted zero times in the final 72 days of the same window. MEOVV now carries 3.2M TikTok followers against ALLDAY PROJECT's 1.6M, on a per-post engagement rate that ALLDAY PROJECT exceeds.",
          evidence: [
            "MEOVV: 60 posts in the window, 811 lifetime, active on September 3 2026",
            "ALLDAY PROJECT: 0 posts in the final 72 days of the same window",
            "Every one of the seven comparison accounts posted on September 3 2026",
            "MEOVV names a member in 42% of captions against ALLDAY PROJECT's 25%",
          ],
          counterEvidence: [
            "ALLDAY PROJECT's 10.49% TikTok engagement rate is at the top of the set, so the per-post product is competitive. The gap is frequency, not quality",
          ],
          pivot: {
            title: "Set a floor and hold it",
            actions: [
              "Establish a minimum of four posts a week that holds regardless of release calendar",
              "Build a between-eras format bank so cadence does not depend on having new music",
              "Book outside creators and trends the way the labelmate does, rather than only idol-facing collaborations",
            ],
          },
        },
        {
          id: "member-pairs",
          title: "Member pairings are the most reliable format and the most under-supplied.",
          verdict: "partial",
          confidence: "Medium",
          summary: "Posts naming two or more members return a median of 8,744,382 against 2,923,775 for posts naming none, and 1,367,382 for single-member posts. Only 12 of 48 posts name a member at all. Solo content is bimodal: the account's third-largest post ever is a single-member clip at 13,133,176, but the median solo post sits well below the account average.",
          evidence: [
            "Two or more members named: median 8,744,382 across 6 posts",
            "One member named: median 1,367,382 across 6 posts",
            "No member named: median 2,923,775 across 36 posts",
            "The largest single-member post in the catalog returned 13,133,176",
          ],
          counterEvidence: [
            "The corpus is the top quintile by construction, so these medians are directional rather than a full-account average. Solo variance is wide enough that the format needs testing rather than scaling on this evidence alone",
          ],
          pivot: {
            title: "Build the pairing franchise, test the solos",
            actions: [
              "Name and schedule a recurring two-member format rather than leaving pairings to chance",
              "Run solos as a tested lane with a defined rotation across all five members",
              "Use the co-ed roster deliberately; mixed pairings are a format no comparison act in the set can run",
            ],
          },
        },
        {
          id: "no-us-address",
          title: "Nothing in the corpus is addressed to a U.S. viewer.",
          verdict: "confirmed",
          confidence: "Medium",
          summary: "Korean hashtags appear on nearly every owned post and the English that does appear is song-lyric fragments rather than address to a viewer. Across 64 KATSEYE posts pulled for comparison, captions are 100% English with U.S.-native idiom, U.S. brand partners and an English fandom name. Against a No. 1 listening market of 384,259 U.S. listeners, there is no asset built for that audience.",
          evidence: [
            "Owned captions carry Korean hashtags on nearly every post in the corpus",
            "KATSEYE comparison set: 100% English captions, zero Korean characters, zero Korean hashtags across 64 posts",
            "U.S. is the No. 1 Spotify market at 384,259 listeners and 19.8% of the global total",
            "Instagram engagement, measured on real like volume, ranks the United States 6th at 5.7%, so the U.S. audience streams far more than it interacts",
          ],
          counterEvidence: [
            "The most U.S.-legible assets in the catalog, a U.S. dance-crew collaboration at 5,374,230 and a Western remix at 2,069,143, did not outperform Korea-native dance content. Adding English alone is not the fix; the fix is a channel that posts at all, then a U.S. layer on top of it",
          ],
          pivot: {
            title: "Add a U.S. layer, do not replace the house style",
            actions: [
              "Run English captions and English on-screen text as a parallel layer on release assets",
              "Anchor a small number of formats to U.S. context rather than translating everything",
              "Sequence this after cadence is restored, so the U.S. layer lands on an active channel",
            ],
          },
        },
      ],
      footnote: "The video intelligence store is persistent and grows on every refresh, so the corpus and its findings compound across the engagement rather than resetting. Comparison corpora are each account's top posts by views and function as a winners' benchmark by construction.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "The question is not whether infrastructure exists. It does, and some of it is genuinely strong. The question is what connects to what.",
      intro: "Thirty-four owned surfaces were checked individually on September 3, 2026: the label site, the store and its page source, every link in every bio, the app landing page, the membership product, five U.S. retailers, four U.S. specialty retailers, the ticketing category, and the copyright lines on all six releases. Findings are recorded per surface. The pattern that emerges is consistent: the collection layer was built well and early, and the conversion layer between it and the audience was never wired up.",
      subBlocks: [
        {
          label: "A",
          title: "What Is Already Built",
          strategy: "This is a group that invested in owned fan infrastructure faster than most acts at its stage, and the results validated the decision. The prescription in this document is not to start building. It is to connect what has already been paid for.",
          components: {
            heading: "Standing Assets",
            items: [
              "DAY ONE, the official fandom name, announced on June 22 2025, the day before debut, rather than months later",
              "DAY OFF, a proprietary label fan app launched July 7 2025, which took 40,000 signups in its first 24 hours across 156 countries and reached No. 1 in Social Networking on iOS in Korea",
              "A paid membership product launched November 24 2025 at 20.83 USD, currently sold out",
              "A second stacked paid tier inside the app, member direct messaging at 3.99 to 17.99 USD a month, added June 2026",
              "An official store that ships to the United States, prices in USD, and carries 30 or more items across three pages",
              "Deep U.S. specialty retail distribution across five importers, all actively restocking",
              "Owned audiences of 4.31M on YouTube, 1.69M on Instagram and 1.63M on TikTok",
            ],
          },
          kpis: [
            "40,000 app signups in 24 hours, across 156 countries",
            "Membership sold out at its current price point",
            "Two stacked paid tiers already proven with this audience",
            "Fandom named the day before debut, ahead of the first release",
          ],
        },
        {
          label: "B",
          title: "First-Party Data Capture",
          strategy: "Every owned surface was checked for email or SMS capture, including page source. There is no artist-level list. The label store does run a newsletter signup and an account registration, but both capture at label level across the whole roster, so the resulting data is not addressable to this audience specifically. This is the highest-leverage gap in the document because it is inexpensive to close and it gates every other fix.",
          components: {
            heading: "Surface by Surface",
            items: [
              "A standalone artist website has never existed on the expected domain, and the label site carries no artist page",
              "The label store runs a roster-wide newsletter signup and an account registration. Neither is artist-specific, and no third-party email platform appears in the page source",
              "The Instagram bio link on 1.69M followers resolves to a music video published in March 2026",
              "The YouTube channel carrying 4.31M subscribers lists seven links: six social platforms plus one managed smart link. The smart link routes to streaming services only, so the largest owned audience is never offered the store, the app, or any capture",
              "The app landing page offers store buttons only, with no email or SMS capture ahead of the download",
              "No SMS program was found on any surface",
            ],
          },
          kpis: [
            "Zero artist-level email capture across every owned surface checked",
            "Zero SMS capture",
            "No link from any owned social channel reaches the store, the app, or any capture destination",
            "One app-download prompt recorded in the sampled content, in March 2026, and nothing since",
          ],
        },
        {
          label: "C",
          title: "The Live Business and What the Membership Gates",
          strategy: "The membership sold out with no ticketing entitlement attached, because there is nothing yet to gate. The group has not headlined a ticketed concert or solo showcase in any market, confirmed across three independent sources. Promotional fan-signings ran around the debut single, but no headline room has been sold. Three third-party festival bookings sit on the autumn calendar and none of them are the group's own. Meanwhile the label operates a working direct-ticketing category on the same storefront for another artist, so the rails exist and have simply never been pointed here.",
          components: {
            heading: "Current Position",
            items: [
              "No headline ticketed concert or solo showcase to date in any market",
              "Autumn 2026 calendar carries three third-party bookings: a music awards show in September and two festivals in October",
              "Two United States appearances to date, both festival slots on a shared bill at the same venue",
              "The label's storefront runs a working direct-booking category, currently carrying 14 timed-entry slots for another artist's album exhibition and nothing for this group",
              "No lightstick released or announced, fourteen months after debut, while three labelmates sell one on the same store",
              "No Japan debut, showcase or Japanese-language release",
            ],
          },
          kpis: [
            "A first headline room and a first lightstick are the two products the sold-out membership currently has nothing to attach to",
            "Direct-booking rails already exist at label level and require extending, not building",
            "Two U.S. appearances to date, both on shared festival bills",
          ],
        },
        {
          label: "D",
          title: "U.S. Market Structure and Retail",
          strategy: "The United States is this group's number one listening market and is served entirely through the import channel. Physical product reaches U.S. buyers through five specialty importers plus general marketplace listings, with no bespoke U.S. retail program, no exclusive editions and no U.S. pop-up. The structural piece is the same story. Distribution reaches the U.S. through the label's own smart-link and distribution chain, but the copyright line on all six releases reads the label alone, while labelmates carry named U.S. label-services partners on their releases.",
          components: {
            heading: "What the Check Found",
            items: [
              "U.S. mass retail: present on two general marketplaces through importers; absent from the two dedicated music retailers where a labelmate sells three retailer-exclusive editions",
              "No U.S.-exclusive versions, retailer exclusives, or signed editions anywhere in the catalog",
              "Three pop-up activations executed to date, two in Seoul and one in Tokyo. None in the United States",
              "Copyright lines on all six releases read the label only. Distribution into the U.S. runs through the label's existing chain, but no U.S. label-services partner is named on any release, while labelmates carry Capitol, Atlantic and Interscope",
              "No U.S. booking agent, publicist, or management structure identified",
              "No U.S. radio, sync placement, or television appearance recorded",
            ],
          },
          kpis: [
            "384,259 U.S. monthly listeners served through the import channel alone",
            "Zero U.S. retail exclusives against a labelmate's three at a single retailer",
            "Zero U.S. pop-ups against three executed in Asia",
            "The label's U.S. profile is at an all-time high and has not yet been extended to this group in the form of a named U.S. services partner",
          ],
        },
      ],
      footnote: "Thirty-four surfaces were checked individually on September 3, 2026 and recorded per surface. Where a platform could not be reached, the result is recorded as unverified rather than inferred. Five surfaces could not be checked and are excluded from every claim above.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "The hardest thing in this business is already done. This audience converts at the highest rate in its class and kept growing through nine months with no product in market. Nothing in this plan asks the music or the identity to change. It restarts the channels, connects the infrastructure that already exists, gives the sold-out membership something to gate, and points all of it at the market that is already number one on the map.",
      hierarchy: [
        {
          label: "Channel Restart (Foundation, Immediate)",
          description: "The cheapest and fastest lever in the document. A held weekly cadence, the format mix the corpus already ranks highest, and a recurring call to action on every release asset. This requires no new strategy and no new production budget, and every week it is delayed is a week the comparison set spends compounding.",
        },
        {
          label: "Conversion Infrastructure (Foundation, Always-On)",
          description: "Wire the collection layer to the audience: first-party email and SMS capture in the United States, a live link graph across every owned channel, and the app pointed at from the surfaces that carry the largest audiences. This is song-agnostic. It supports the next comeback, the first tour, and every release after.",
        },
        {
          label: "DSP Recovery (Amplifier)",
          description: "Rebuild the editorial footprint the catalog previously held, including the non-K-pop placements that delivered outsized peak positions, and build the week-two-through-six sustain mechanics the launch curves show are missing. This is where the listener number comes back.",
        },
        {
          label: "The Live Business and U.S. Structure (Amplifier, Highest Ceiling)",
          description: "A first headline moment, a lightstick, a membership that gates a presale, and the U.S. structure to support all three. This is the layer with no ceiling yet established, and the layer the fandom has already proven it will pay for.",
        },
      ],
      messaging: [
        "Audit before prescription: every recommendation in sections 08 through 11 traces to a measured gap in sections 02 through 06.",
        "Restart first, rebuild second. Cadence is the precondition for everything downstream of it.",
        "Connect before building. Most of what this plan needs was already paid for and is standing.",
        "The United States is promoted like the number one market it already is, not like a future expansion.",
        "Every line carries a worst, expected and best case, and every tactic is tested before it is scaled.",
      ],
      footnote: "Foundational workstreams run every week regardless of release calendar. Amplifier intensity follows the release and live calendar.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fan Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Conversion",
      title: "Vertical 1 / Fan Conversion Infrastructure",
      philosophy: "Connect the layer that already exists before building anything new.",
      intro: "Section 06 found a strong collection layer and no wiring between it and the audience. This vertical closes that gap. It is the cheapest work in the plan, it runs every week regardless of release calendar, and every later vertical depends on it being in place.",
      subBlocks: [
        {
          label: "A",
          title: "First-Party Capture in the U.S.",
          objective: "Stand up an addressable owned list for the group's largest listening market, where none currently exists.",
          strategy: "A single U.S. destination that captures an email and a mobile number against a real incentive, then routes into the existing app rather than competing with it. Korean consent law restricts bundled signup, so the U.S. list is built as its own compliant program rather than as an extension of a domestic flow. Double opt-in flows that fail on Korean numbers are avoided by scoping the SMS program to U.S. numbers from the start.",
          components: {
            heading: "Build",
            items: [
              "A U.S. capture destination with email and SMS, live at a stable URL that never changes",
              "Incentive tied to something the audience has already proven it wants: presale access, drop notification, and first look at physical product",
              "Routing into the DAY OFF app after capture, so the app gains installs and the list stays owned",
              "Consent and preference handling scoped to U.S. numbers, kept separate from domestic flows",
              "Reporting on list growth, source attribution, and downstream conversion from week one",
            ],
          },
          kpis: [
            "A measurable owned U.S. list where the baseline is currently zero",
            "Capture rate per thousand reach, tracked per channel and per campaign",
            "App install attribution from the capture flow",
            "Cost per captured contact, established as a benchmark in the first flight",
          ],
        },
        {
          label: "B",
          title: "The Link Graph",
          objective: "Make every owned surface route somewhere that can be measured.",
          strategy: "A managed smart link already exists and is already on the YouTube channel, but it routes to streaming services only, and the Instagram bio on 1.69M followers points at a months-old music video. The work is not building a hub. It is repointing the hub that exists so it also carries the store, the app and a capture destination, then instrumenting it so the traffic is readable. No production budget, no approvals beyond channel access.",
          components: {
            heading: "Execute",
            items: [
              "The existing managed smart link extended past streaming to carry the store, the app and the capture destination, then deployed across every bio and updated on a fixed schedule",
              "The YouTube link panel rebuilt so the largest owned audience is offered something beyond six social platforms",
              "Store, membership and app surfaced from the channels that carry the largest audiences rather than only from each other",
              "A recurring end card on release assets carrying title and date, standardized at one to two seconds",
              "UTM and attribution discipline applied from the first link, so the traffic is readable",
            ],
          },
          kpis: [
            "Click-through from each owned channel to an owned destination, currently unmeasured",
            "Share of posts carrying a call to action, from the current 10% toward a sustained majority on release assets",
            "Traffic from social to store and app, attributed by source",
          ],
        },
        {
          label: "C",
          title: "Membership, Product and What It Gates",
          objective: "Give the sold-out membership a reason to renew and a ladder to climb.",
          strategy: "A membership that sold out with no entitlement attached is a demand signal, not a finished product. The work is attaching value the audience has already shown it will pay for, and closing the single most conspicuous product gap in the catalog.",
          components: {
            heading: "Program",
            items: [
              "Presale entitlement attached to membership, activated the moment a live date exists",
              "A lightstick program, the standard fandom product this group does not yet have while three labelmates do",
              "A published membership term and renewal path, so the product has a lifecycle rather than a single sale",
              "Member-only drops timed to release and live moments rather than run at random",
              "U.S. shipping and pricing reviewed against the U.S. share of the audience",
            ],
          },
          kpis: [
            "Membership renewal rate, currently unestablished",
            "Attach rate between membership and physical product",
            "Revenue per member across membership, direct messaging tier and merchandise",
          ],
        },
      ],
      footnote: "This vertical runs continuously and is not tied to a release window. It is the precondition for the paid, DSP and live work in sections 09 through 11.",
    },

    // ===================================================================
    // 09. Vertical 2 / Short-Form Restart
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Short Form",
      title: "Vertical 2 / Short-Form Restart",
      philosophy: "Restart on the formats the corpus already ranks highest. Reallocation before production.",
      intro: "Section 05 measured a 10.49% TikTok engagement rate at the top of the comparison set and zero posts in 72 days. The per-post product is competitive. The gap is frequency and allocation, both of which are fixable without new creative direction or additional production spend.",
      subBlocks: [
        {
          label: "A",
          title: "Cadence Floor",
          objective: "Return to a held weekly posting rhythm that does not depend on having new music.",
          strategy: "Every comparison account posted on the day of this audit, at cadences from 2.5 to 21 posts a week. The first move is a floor that holds through quiet periods, supplied by a format bank built for between-eras use.",
          components: {
            heading: "Build",
            items: [
              "A minimum weekly posting floor of four posts, held regardless of release calendar",
              "A between-eras format bank so cadence never depends on a comeback being in market",
              "Opening mix weighted to the lanes the corpus already ranks highest rather than a new direction",
              "A named two-member pairing franchise, the format returning the highest medians and currently the most under-supplied",
              "A tested solo rotation across all five members, run as an experiment rather than scaled on current evidence",
            ],
          },
          kpis: [
            "Posts per week, from 0 to a sustained 4 or more",
            "Median views per post against the account's own pre-pause baseline",
            "Engagement rate held at or above the current 10.49%",
            "Share of output carrying a named member, from 25% upward",
          ],
        },
        {
          label: "B",
          title: "Platform Reallocation",
          objective: "Serve the largest owned audience the most, rather than the least.",
          strategy: "Instagram wins 18 of 21 paired posts at a 1.47x median, and YouTube Shorts returns 0.27x on a channel carrying 2.6x the TikTok following. Reallocation captures reach that already exists and requires no incremental production.",
          components: {
            heading: "Execute",
            items: [
              "Instagram managed as a primary surface with its own posting decisions, not as a mirror feed",
              "A YouTube Shorts format test built for that channel's subscriber base, measured over 60 days before any scaling decision",
              "Back-catalog winners that never crossed platforms shipped to the surfaces that never saw them",
              "A U.S.-addressed content layer added on top of house style once cadence is restored, never in place of it",
            ],
          },
          kpis: [
            "Instagram to TikTok performance ratio, tracked per paired post",
            "YouTube Shorts median against its own baseline of 0.27x",
            "Reach recovered from cross-posting existing inventory, at zero production cost",
          ],
        },
        {
          label: "C",
          title: "Paid Social, U.S. Flight",
          objective: "Put measured spend behind the content that the organic data already identifies as working.",
          strategy: "Paid runs only after cadence is restored and capture is live, so spend lands on an active channel and converts into an owned list rather than into views alone. Targeting keys on the Instagram audience profile, which is the U.S.-weighted one. Every line is tested at low spend before scaling, with worst, expected and best cases stated in advance.",
          components: {
            heading: "Program",
            items: [
              "Creative sourced from proven organic performers rather than purpose-built ads in the first flight",
              "Targeting built on the Instagram audience profile: U.S. metros, 25 to 34 primary, gender balanced",
              "A second audience built on the TikTok profile for Southeast Asia and Latin America, run separately",
              "Conversion objective pointed at the capture destination, not at profile visits",
              "Test then scale discipline on every line, with results reported against pre-stated cases",
            ],
          },
          kpis: [
            "Cost per captured contact",
            "Cost per thousand reach by market and by creative",
            "Follower and list growth attributable to paid, separated from organic",
          ],
        },
      ],
      footnote: "Paid activity in this vertical is deliberately sequenced after the cadence floor and the capture destination are live. Spending into a dark channel is the one thing this section is designed to avoid.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Recovery
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Recovery",
      philosophy: "The editorial footprint was earned once. Rebuilding it is a known path, not a speculative one.",
      intro: "Section 03 measured 12.45M of editorial reach live as recently as March 2026 against 146,625 today, and launch curves that peak within four days and never multiply. Those are two different problems with two different fixes, and both are addressable with the catalog as it stands.",
      subBlocks: [
        {
          label: "A",
          title: "Editorial Rebuild",
          objective: "Recover the placements the catalog has already proven it can hold.",
          strategy: "Forty-two editorial playlists have carried this catalog, including flagship K-pop lists at peak positions of 1 and 3, with 27 live simultaneously as recently as March 2026. Five are live today. The pitch case is unusually strong because the placements are precedent rather than aspiration, and because the retention data gives editorial a reason to re-add.",
          components: {
            heading: "Program",
            items: [
              "A structured pitch cycle against the flagship lists the catalog previously held",
              "Retention data led in every pitch: the catalog holds roughly 1.60M streams a week with no promotion behind it",
              "The album cut holding 15.1% of its peak positioned as the priority track rather than the promoted single",
              "Playlist performance tracked weekly so adds and drops are visible rather than discovered late",
            ],
          },
          kpis: [
            "Live editorial reach, from 146,625 toward the 12.45M held in March 2026",
            "Editorial playlist count, from 5 live toward the 27 live at the March 2026 peak",
            "Share of weekly streams attributable to editorial placement",
          ],
        },
        {
          label: "B",
          title: "Non-K-Pop Editorial Expansion",
          objective: "Reopen the crossover lane that delivered the catalog's strongest peak positions.",
          strategy: "Roughly 1.4M of historical editorial reach sat outside the K-pop shelf, on pop mood lists, a hip-hop and R&B vertical, general pop lists and gaming verticals. Those placements delivered peak positions of 5, 6, 8, 9 and 18, better than most of the K-pop placements. The lane is proven and currently unused.",
          components: {
            heading: "Targets",
            items: [
              "Pop and mood lists, where the catalog previously peaked at position 6",
              "Hip-hop and R&B verticals, where a deep cut previously peaked at 18",
              "Gaming verticals, which reached an audience entirely outside music discovery",
              "New Music Friday across the eight territories that previously carried the catalog",
              "Editorial framing built on the group's production identity rather than on genre category",
            ],
          },
          kpis: [
            "Non-K-pop placements secured, against a current baseline of one live placement",
            "Listener growth in markets where crossover placements previously landed",
            "Peak position achieved on non-genre lists",
          ],
        },
        {
          label: "C",
          title: "Post-Launch Sustain",
          objective: "Extend the window where a release is still being discovered, past day four.",
          strategy: "Every release to date peaks between day two and day four and settles. Comparison acts peak in week two through week nine and multiply between 1.9x and 3.4x. The difference is a sustain layer running from week two onward, which this group has not yet operated on any release.",
          components: {
            heading: "Mechanics",
            items: [
              "A week-two through week-six content and paid sustain plan committed before any release ships",
              "Catalog activation around the release, using the evergreen debut track that still carries 484,056 streams a week",
              "Pre-save and pre-add programs run against the owned list once it exists",
              "Release timing coordinated with the live and retail calendar so the three reinforce rather than compete",
            ],
          },
          kpis: [
            "Peak-week to launch-week multiple, from the current best of 1.21x toward the class range",
            "Weeks on chart per release, against the current downward series",
            "Catalog lift in the two weeks following a release, benchmarked against the +42.0% the November comeback delivered",
          ],
        },
      ],
      footnote: "No streaming outcome is guaranteed in this plan. Every line in this vertical is scoped as a tested program with worst, expected and best cases stated before it runs.",
    },

    // ===================================================================
    // 11. Vertical 4 / Live Business & U.S. Structure
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "Live & U.S.",
      title: "Vertical 4 / Live Business & U.S. Structure",
      philosophy: "The layer with no ceiling yet established, serving the market that is already number one.",
      intro: "This is the highest-ceiling work in the document and the least explored. The group has never headlined anywhere, its largest listening market has no structure behind it, and the fandom has already demonstrated it will pay for access. Nothing here is speculative demand: it is a fanbase that bought out a membership with no entitlement attached.",
      subBlocks: [
        {
          label: "A",
          title: "First Headline Moment",
          objective: "Establish the group's own live product, at a scale sized to verified demand rather than ambition.",
          strategy: "The first headline moment is deliberately scoped small and sold out rather than large and papered, and it goes where demand is already demonstrable. Engagement data puts that in Asia: Taiwan drives 22.4% of Instagram like volume, with Hong Kong, Taipei and Seoul the top three cities, while the United States sits sixth on the same measure. Seoul and Taipei are therefore the low-risk first rooms. The United States is the streaming, retail and paid priority in parallel, and earns its own room once the owned list built in section 08 produces real ticket-demand data rather than an inference. Festival slots continue as reach; they are not a substitute for an owned room.",
          components: {
            heading: "Sequence",
            items: [
              "A first headline room in Seoul or Taipei, the two markets where engagement data already demonstrates demand",
              "Membership presale as the first entitlement the membership has ever carried, and the cleanest test of what the sold-out membership is worth",
              "Capture running on every ticket transaction, so the live audience becomes an owned list",
              "A U.S. date sized from that owned list rather than from a follower panel estimate, once the list exists",
              "Existing autumn festival bookings used as promotion for the owned date rather than treated as the live plan",
            ],
          },
          kpis: [
            "Sell-through rate and time to sell out on the first owned date",
            "Presale conversion rate among members",
            "Contacts captured per ticket sold",
            "Geographic demand map from ticket buyer data, which replaces panel estimates as the basis for U.S. routing",
          ],
        },
        {
          label: "B",
          title: "U.S. Retail and Physical",
          objective: "Convert a 250,071-copy opening week into a U.S. retail program.",
          strategy: "Physical is this group's proven strength and the one the debut-era industry commentary predicted they would not have. It currently reaches U.S. buyers only through importers. A dedicated U.S. retail program with exclusive editions is a standard, low-risk play that a labelmate is already running successfully at a retailer this group is absent from.",
          components: {
            heading: "Program",
            items: [
              "Dedicated U.S. retail placement at the two music retailers where the catalog is currently absent",
              "U.S.-exclusive and signed editions, of which the catalog currently has none",
              "A first U.S. pop-up, timed against the retail program, following the model of the three already executed in Asia",
              "Pre-order programs run against the owned list, with capture at the point of purchase",
            ],
          },
          kpis: [
            "U.S. retail doors secured, from the current baseline of importer channels only",
            "Pre-order volume attributable to the owned list",
            "First-week U.S. share of physical sales, currently unmeasured",
          ],
        },
        {
          label: "C",
          title: "Press and Narrative",
          objective: "Convert an unusually strong award record into U.S. editorial coverage.",
          strategy: "The award record is substantial and the U.S. press footprint is thin. The narrative that travels is the format story: the first serious co-ed act in eight years, with an audience that is genuinely gender balanced and a physical business that outperforms what the format was predicted to deliver. That is a story with a natural U.S. hook and it has not yet been told there.",
          components: {
            heading: "Angles",
            items: [
              "The co-ed format story, grounded in an audience that skews far less female than any comparison act in the set",
              "The physical result against the format prediction, a specific and verifiable counter-narrative",
              "Production identity and the label's current U.S. profile, which is at an all-time high",
              "Long-lead U.S. music and culture press timed to the retail and live calendar rather than run continuously",
            ],
          },
          kpis: [
            "U.S. tier-one and tier-two placements secured",
            "Share of coverage carrying the format narrative rather than a launch recap",
            "Search and social lift in the U.S. around each placement",
          ],
        },
      ],
      footnote: "Live scoping is deliberately conservative. The first room is sized to sell out on verified demand, and every subsequent routing decision is made on data from the room before it.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Partners",
      title: "Partner-Led Workstreams",
      philosophy: "Clear division of labor. Crowd Control Digital does not touch A&R, artist relationships, or creative direction.",
      intro: "The workstreams below sit with the label and its partners. They are listed because the plan in sections 08 through 11 depends on them and because the sequencing matters, not because they are in scope for Crowd Control Digital.",
      subBlocks: [
        {
          label: "A",
          title: "Release Calendar",
          strategy: "Everything in this document performs better against a release. The consumption data is unambiguous: a proper comeback lifted the back catalog 42.0% while a brand-funded single moved it -9.8%. The single highest-value decision available is a confirmed release date, because it converts the foundation work from maintenance into launch.",
          components: {
            heading: "Held by the label",
            items: [
              "Release date and campaign scope for the next era",
              "Track selection, with the retention data in section 03 available as an input",
              "Asset delivery windows, which set the timeline in section 13",
            ],
          },
        },
        {
          label: "B",
          title: "Fan Platform and Product",
          strategy: "The app, the membership and the merchandise range are label-owned and already operating. The work in section 08 connects to them rather than replacing them.",
          components: {
            heading: "Held by the label",
            items: [
              "App roadmap and membership tier structure",
              "Lightstick development and production timeline",
              "Merchandise range, pricing and international fulfilment",
            ],
          },
        },
        {
          label: "C",
          title: "Brand Partnerships",
          strategy: "The existing partnership roster is substantial and the audience data supports expansion, particularly given a luxury goods affinity running at a 7.2x index. Section 05 recommends only that partner content run as its own stream rather than through the main release grammar.",
          components: {
            heading: "Held by the label and Transparent Arts",
            items: [
              "Partner selection, negotiation and contracting",
              "Campaign creative direction and approvals",
              "U.S. brand introductions, where Transparent Arts holds the relationships",
            ],
          },
        },
        {
          label: "D",
          title: "U.S. Structure and Relationships",
          strategy: "Transparent Arts holds U.S. management, press and relationship infrastructure. Crowd Control Digital contributes the performance marketing, the measurement and the spend discipline. The two are complementary and there is no overlap.",
          components: {
            heading: "Held by Transparent Arts",
            items: [
              "U.S. management and on-the-ground representation",
              "U.S. press relationships and long-lead publicity",
              "Live booking, venue relationships and promoter introductions",
              "Retail relationships for the U.S. physical program",
            ],
          },
        },
      ],
      footnote: "Crowd Control Digital does no A&R and does not direct creative. The division above reflects how the partnership operates on existing engagements.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "A 12-week opening window. The sequencing is deliberate: the channel restart and the capture destination come first because everything downstream lands better on an active channel and an owned list. Paid does not run into a dark feed. Live sizing waits for real demand data. Weeks are indicative and re-anchor to a confirmed release date once one exists.",
      weeks: [
        { index: 1, label: "W1", dates: "Sep 14" },
        { index: 2, label: "W2", dates: "Sep 21" },
        { index: 3, label: "W3", dates: "Sep 28" },
        { index: 4, label: "W4", dates: "Oct 5" },
        { index: 5, label: "W5", dates: "Oct 12" },
        { index: 6, label: "W6", dates: "Oct 19", highlight: true, note: "MID-WINDOW REVIEW" },
        { index: 7, label: "W7", dates: "Oct 26" },
        { index: 8, label: "W8", dates: "Nov 2" },
        { index: 9, label: "W9", dates: "Nov 9" },
        { index: 10, label: "W10", dates: "Nov 16" },
        { index: 11, label: "W11", dates: "Nov 23", highlight: true, note: "FIRST HEADLINE ROOM (TBD)" },
        { index: 12, label: "W12", dates: "Nov 30" },
      ],
      workstreams: [
        {
          name: "Channel Restart",
          cells: [
            { weekIndex: 1, intensity: "high", label: "RESTART" },
            { weekIndex: 2, intensity: "high", label: "FLOOR" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "Conversion Layer",
          cells: [
            { weekIndex: 1, intensity: "high", label: "WIRE" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "high", label: "LIVE" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 4, intensity: "medium", label: "TEST" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "SCALE" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "DSP Recovery",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "PITCH" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high", label: "ADDS" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Live & Retail",
          cells: [
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "SIZING" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "PRESALE" },
            { weekIndex: 8, intensity: "high", label: "ONSALE" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "RETAIL" },
            { weekIndex: 11, intensity: "high", label: "SHOW" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Press",
          cells: [
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "LONG" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "PUSH" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Restart and rewire",
          items: [
            "Posting resumes across all three owned channels on a committed weekly floor",
            "Link graph rebuilt: bios, YouTube channel links, and store and app surfaced from every channel",
            "Attribution and UTM discipline applied before any traffic is driven",
            "Baseline measurement captured on every metric this plan will be judged against",
          ],
        },
        {
          weekIndex: 2,
          title: "Capture build and editorial pitch",
          items: [
            "U.S. capture destination built, with email and SMS and routing into the existing app",
            "Format bank assembled from the corpus lanes ranking highest, so cadence holds without new music",
            "Editorial pitch cycle opens against the flagship lists the catalog previously held",
            "Two-member pairing franchise named and scheduled",
          ],
        },
        {
          weekIndex: 3,
          title: "Capture goes live",
          items: [
            "U.S. capture destination live at a stable URL, linked from every owned surface",
            "End card standardized on release assets at one to two seconds, carrying title and date",
            "Paid account structure and pixel validation completed ahead of the first test",
            "Instagram moved to primary-surface management rather than mirroring",
          ],
        },
        {
          weekIndex: 4,
          title: "Paid test opens",
          items: [
            "First paid flight opens at test spend, creative sourced from proven organic performers",
            "Two audiences run separately: the U.S.-weighted Instagram profile and the Southeast Asia and Latin America TikTok profile",
            "Conversion objective pointed at the capture destination, not at profile visits",
            "Live sizing work begins against ticket demand signals and audience geography",
          ],
        },
        {
          weekIndex: 5,
          title: "Editorial adds and live sizing",
          items: [
            "First editorial adds tracked and reported, including non-K-pop targets",
            "YouTube Shorts format test ships, with a 60-day measurement window opened",
            "Venue options in Seoul and Taipei sized against verified engagement and ticket demand rather than ambition",
            "Cost per captured contact established as the working benchmark",
          ],
        },
        {
          weekIndex: 6,
          title: "Mid-window review",
          items: [
            "Full review against every baseline captured in week one",
            "Paid lines that cleared their expected case are held; lines that did not are cut, not scaled",
            "Cadence floor audited: held or not held, with the reason either way",
            "Press long-lead planning opens against the retail and live calendar",
          ],
        },
        {
          weekIndex: 7,
          title: "Paid scales, presale opens",
          items: [
            "Paid scales onto the lines that cleared test, with worst, expected and best cases restated",
            "Membership presale opens as the first entitlement the membership has carried",
            "Long-lead U.S. press outreach begins on the format narrative, timed to the retail program",
            "Lightstick program timeline confirmed with the label",
          ],
        },
        {
          weekIndex: 8,
          title: "General on-sale",
          items: [
            "General on-sale, with capture running on every ticket transaction",
            "Sell-through and time-to-sell-out tracked against the presale benchmark",
            "U.S. retail conversations opened for exclusive and signed editions",
            "Owned list activated for the first time against a real product",
          ],
        },
        {
          weekIndex: 9,
          title: "Press push",
          items: [
            "U.S. press push lands against the retail program and the format narrative",
            "Sustain content plan runs against any confirmed release window",
            "Geographic demand map assembled from ticket buyer data",
            "Second editorial pitch wave, informed by the first wave's results",
          ],
        },
        {
          weekIndex: 10,
          title: "Retail and pop-up",
          items: [
            "U.S. retail program confirmed, with exclusive editions where doors were secured",
            "First U.S. pop-up prepared, timed to the U.S. retail program",
            "Pre-order program runs against the owned list built in weeks three through nine",
            "Paid weighted toward the live and retail conversion window",
          ],
        },
        {
          weekIndex: 11,
          title: "First headline room",
          items: [
            "First owned headline room, with capture at every touchpoint",
            "Pop-up runs alongside, converting attendance into list and into physical sales",
            "Content captured on site becomes the format bank for the following quarter",
            "Full-funnel measurement from paid impression through ticket and physical purchase",
          ],
        },
        {
          weekIndex: 12,
          title: "Close-out and next cycle",
          items: [
            "Full-window reporting against every baseline and every pre-stated case",
            "Demand data from the first room used to size the second and to inform routing",
            "Video intelligence store refreshed with the quarter's content, so the corpus compounds",
            "Next-cycle scope proposed against a confirmed release date",
          ],
        },
      ],
      footnote: "Weeks are indicative and re-anchor to a confirmed release date once one exists. The showcase week is marked tentative because it depends on venue availability and label approval, both of which sit outside this scope.",
    },
  ],
};
