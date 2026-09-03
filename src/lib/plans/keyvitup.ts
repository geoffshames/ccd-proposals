import type { StrategyPlanData } from "../plan-context";

export const keyvitupPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/keyvitup/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "keyvitup-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Brand Audit & Growth Strategy",
    title: "KEYVITUP",
    subtitle: "An audit of the first five months, and the plan to convert a launch audience that arrived from markets nobody promoted to.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/keyvitup/keyvitup-group.jpg",
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
      subtitle: "The debut worked. The audience it produced came from four countries that received no promotion, and it is still reachable.",
      body: [
        "KEYVITUP debuted on April 8, 2026 with a self-titled EP and moved 84,882 copies in the first week, which placed 83rd across every release of the year by any artist at any career stage, and reached No. 5 on the Circle weekly album chart. The title track has passed a million Spotify streams, the three music videos have passed 13 million YouTube views between them, and the group closed August with the highest median TikTok engagement rate of the six peers analysed here, at 28.96 percent.",
        "The interesting part is where the listening came from. Monthly listeners peaked globally at 265,562 on May 9. Measured market by market, each on its own peak date, Indonesia reached 140,221, Malaysia 102,330, Taiwan 31,994 and Thailand 22,477, against a Korean peak of 11,665. No appearance, fan event, showcase or media day in any of those four markets appears in any source reviewed for this audit. The audience assembled itself.",
        "It then dispersed, because nothing was built to hold it. Spotify playlist support was concentrated in the launch window and the two largest placements both ended inside seven weeks. Monthly listeners fell 72.3 percent over the hundred days that followed. There is no email list, no SMS list, no membership, no fan club to join, no store and no lightstick. The fandom has a name, KEYPER, and nowhere to register it.",
        "This document audits that gap in detail and then closes it. The order of work is deliberate: capture first, because it is the cheapest and most durable, then the markets that already raised their hands, then the content system that turns reach into repeat. Nothing here asks the group to change what it is. Every recommendation is built on something the group has already proven it can do.",
      ],
      supports: {
        heading: "What this document covers",
        items: [
          "A tiered market position against thirteen peers, on live consumption rather than reputation",
          "The editorial dependency analysis: what was added, when it was removed, and what it cost",
          "Where the audience actually is, across streaming, short form and organised fandom",
          "A frame-by-frame read of 123 videos through video AI, performance data joined on every one",
          "A surface-by-surface infrastructure audit of every owned property, verified rather than assumed",
          "Four execution verticals and a twelve-week timeline",
        ],
      },
      goals: {
        heading: "Twelve-month objectives",
        items: [
          "A first-party audience of owned contacts, starting from zero, captured in the markets where demand already exists",
          "Spotify followers to 120,000, against an unaided trajectory of roughly 87,000, with at least half of net adds attributable to owned capture rather than to playlist traffic",
          "A follower-to-listener ratio at or above 0.40 measured on a monthly-listener base of at least 150,000, so that the number cannot be reached by attrition",
          "Monthly listeners tracked weekly against baseline and reported rather than promised, with the May peak of 265,562 as the reference line",
          "First promoted market entry in Southeast Asia, and a second-EP first week above 160,000",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Monthly Listeners Since Debut",
          subtitle: "The full daily series from the first tracked day. The two markers are the dates Spotify removed the group from its two largest editorial playlists.",
          unit: "monthly listeners",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "Apr 12", y: 28347 },
                { x: "Apr 20", y: 110587 },
                { x: "Apr 26", y: 158978 },
                { x: "May 3", y: 223389 },
                { x: "May 9", y: 265562 },
                { x: "May 17", y: 256506 },
                { x: "May 27", y: 248207 },
                { x: "May 31", y: 242953 },
                { x: "Jun 7", y: 223208 },
                { x: "Jun 14", y: 209261 },
                { x: "Jun 21", y: 180898 },
                { x: "Jun 28", y: 149018 },
                { x: "Jul 5", y: 123055 },
                { x: "Jul 12", y: 97548 },
                { x: "Jul 19", y: 90047 },
                { x: "Jul 26", y: 81986 },
                { x: "Aug 2", y: 76343 },
                { x: "Aug 9", y: 74967 },
                { x: "Aug 17", y: 73638 },
                { x: "Aug 23", y: 77715 },
                { x: "Aug 31", y: 83749 },
              ],
            },
          ],
          markers: [
            { x: "Apr 20", label: "BIASBOYS out" },
            { x: "May 27", label: "K-Pop Rising out" },
          ],
          note: "Peak 265,562 on May 9. Trough 73,638 on August 17, a fall of 72.3 percent in 100 days. The line has turned up 13.7 percent since the trough, which is the KCON LA effect arriving.",
          source: "Chartmetric, September 3 2026",
        },
      ],
      footnote: "All streaming figures in this document are pulled from Chartmetric on September 3, 2026 unless stated otherwise. Sales figures are Hanteo and Circle. Video findings are drawn from a dedicated 123-video intelligence store built for this audit.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Position is only defensible when it is tiered on live consumption. Fourteen peers, one metric spine, three tiers, and an honest placement.",
      intro: "The comparison set runs from the class ceiling down to the groups that debuted in the same ninety-day window. Spotify monthly listeners is the spine and the follower-to-listener ratio is the second axis, because at this stage of a career the second number predicts the first. The placement is straightforward: KEYVITUP sits at the bottom of the set on scale and at the top of its own debut cohort on conversion.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          featureTiersHeading: "The Comparison Set, Tiered by Scale and Conversion",
          featureTiers: [
            {
              label: "Tier 1 / The Ceiling",
              artists: [
                {
                  name: "CORTIS",
                  monthlyListeners: "12.9M Monthly Listeners",
                  instagram: "5.4M Spotify Followers",
                  reference: "Ratio 0.422, debuted August 2025",
                  note: "The class breakout and the content benchmark. Hashtag data across its catalog shows eight separately named content series running in parallel, each one a franchise a fan can follow on its own. That system, not the label behind it, is what a rookie group can actually copy.",
                },
                {
                  name: "BOYNEXTDOOR",
                  monthlyListeners: "3.3M Monthly Listeners",
                  instagram: "2.6M Spotify Followers",
                  reference: "Ratio 0.798, debuted May 2023",
                  note: "The conversion model for this format: a mid-size listener base with a follower base almost as large. Three years of consistent capture is what the gap between 0.798 and 0.362 actually measures.",
                },
                {
                  name: "RIIZE",
                  monthlyListeners: "2.8M Monthly Listeners",
                  instagram: "1.8M Spotify Followers",
                  reference: "Ratio 0.663, debuted September 2023",
                  note: "Built a global touring business off a comparable debut footprint in under two years. The proof that the ceiling for a five-member group in this lane is not a Korean-domestic ceiling.",
                },
                {
                  name: "TWS",
                  monthlyListeners: "2.4M Monthly Listeners",
                  instagram: "1.4M Spotify Followers",
                  reference: "Ratio 0.582, debuted January 2024",
                  note: "Rode a bright, accessible pop identity into a durable streaming base. The nearest tonal neighbour to what KEYVITUP does well when the content is loose rather than choreographed.",
                },
              ],
            },
            {
              label: "Tier 2 / Converted Fandoms",
              artists: [
                {
                  name: "KickFlip",
                  monthlyListeners: "457K Monthly Listeners",
                  instagram: "570K Spotify Followers",
                  reference: "Ratio 1.246, debuted January 2025",
                  note: "More followers than listeners, which is what a fully captured fandom looks like on this metric. Reach is their open problem; retention is solved. The mirror image of KEYVITUP.",
                },
                {
                  name: "ZEROBASEONE",
                  monthlyListeners: "1.2M Monthly Listeners",
                  instagram: "1.5M Spotify Followers",
                  reference: "Ratio 1.237, debuted July 2023",
                  note: "A survival-show fandom converted almost completely. Demonstrates that the follower base outlives any single cycle once capture exists.",
                },
                {
                  name: "NCT WISH",
                  monthlyListeners: "763K Monthly Listeners",
                  instagram: "918K Spotify Followers",
                  reference: "Ratio 1.203, debuted February 2024",
                  note: "A second follower base that has outgrown current listening. Included so the ratios above 1.0 in the charts read correctly: they belong to established fandoms, not to a benchmark a five-month-old group should be measured against.",
                },
                {
                  name: "AHOF",
                  monthlyListeners: "191K Monthly Listeners",
                  instagram: "154K Spotify Followers",
                  reference: "Ratio 0.808, debuted July 2025",
                  note: "The most instructive comparison in the set. Roughly twice KEYVITUP's listeners and more than twice the conversion, from a mid-size agency, one year further along. This is the realistic twelve-month destination.",
                },
                {
                  name: "IDID",
                  monthlyListeners: "142K Monthly Listeners",
                  instagram: "110K Spotify Followers",
                  reference: "Ratio 0.776, debuted February 2025",
                  note: "Nearly identical scale to KEYVITUP with more than double the conversion, nineteen months into its run. The difference between the two is not audience size, it is whether anything was built to catch the audience.",
                },
              ],
            },
            {
              label: "Tier 3 / The 2026 Debut Field",
              artists: [
                {
                  name: "ALPHA DRIVE ONE",
                  monthlyListeners: "737K Monthly Listeners",
                  instagram: "334K Spotify Followers",
                  reference: "Ratio 0.453, 1.44M first week",
                  note: "The outlier of the cohort on every axis. Useful as the class ceiling rather than as a like-for-like comparison.",
                },
                {
                  name: "MODYSSEY",
                  monthlyListeners: "140K Monthly Listeners",
                  instagram: "53K Spotify Followers",
                  reference: "Ratio 0.379, 302K first week",
                  note: "Debuted five days after KEYVITUP and drew the cohort's strongest Korean trade coverage. Runs two named content franchises where KEYVITUP runs none, and it shows in reach rather than in conversion.",
                },
                {
                  name: "hrtz.wav",
                  monthlyListeners: "121K Monthly Listeners",
                  instagram: "30K Spotify Followers",
                  reference: "Ratio 0.246, 27K first week",
                  note: "Debuted the same day, April 8. Sold a third of KEYVITUP's first week and now carries 45 percent more listeners on almost exactly the same follower count. Reach and conversion are separable, and these two groups separate them in opposite directions.",
                },
                {
                  name: "VAYONN",
                  monthlyListeners: "91K Monthly Listeners",
                  instagram: "12K Spotify Followers",
                  reference: "Ratio 0.138, 161K first week",
                  note: "The same label, three months later, with nearly twice the first-week sales and less than half the conversion. The internal benchmark that matters most, and the one this plan draws on directly.",
                },
                {
                  name: "KEYVITUP",
                  monthlyListeners: "84K Monthly Listeners",
                  instagram: "30K Spotify Followers",
                  reference: "Ratio 0.362, 85K first week",
                  note: "Last in the set on listeners and first in its own debut cohort on conversion. The strategic read is that the machine for keeping people works better than the machine for reaching them, and only one of those two is expensive to fix.",
                },
              ],
            },
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "CORTIS", y: 12873814 },
                    { x: "BOYNEXTDOOR", y: 3255897 },
                    { x: "RIIZE", y: 2751835 },
                    { x: "TWS", y: 2398217 },
                    { x: "ZEROBASEONE", y: 1200784 },
                    { x: "NCT WISH", y: 763292 },
                    { x: "ALPHA DRIVE ONE", y: 737023 },
                    { x: "KickFlip", y: 457320 },
                    { x: "AHOF", y: 190640 },
                    { x: "IDID", y: 141541 },
                    { x: "MODYSSEY", y: 140297 },
                    { x: "hrtz.wav", y: 121468 },
                    { x: "VAYONN", y: 90708 },
                    { x: "KEYVITUP", y: 83811 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "Scale is the honest weakness. KEYVITUP is last in a fourteen-artist set, and 1.7 times below the next-lowest 2025 debut.",
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "hbars",
              title: "Fandom Conversion: Spotify Followers per Monthly Listener",
              subtitle: "The second axis, and the more predictive one this early. Anything above 0.75 is a fandom that outlives a release cycle. KEYVITUP leads its own debut cohort and trails the groups one year ahead of it.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "KickFlip", y: 1.246 },
                    { x: "ZEROBASEONE", y: 1.237 },
                    { x: "NCT WISH", y: 1.203 },
                    { x: "AHOF", y: 0.808 },
                    { x: "BOYNEXTDOOR", y: 0.798 },
                    { x: "IDID", y: 0.776 },
                    { x: "RIIZE", y: 0.663 },
                    { x: "TWS", y: 0.582 },
                    { x: "ALPHA DRIVE ONE", y: 0.453 },
                    { x: "CORTIS", y: 0.422 },
                    { x: "MODYSSEY", y: 0.379 },
                    { x: "KEYVITUP", y: 0.362 },
                    { x: "hrtz.wav", y: 0.246 },
                    { x: "VAYONN", y: 0.138 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "grouped",
              title: "The 2026 Debut Cohort, Listeners against Followers",
              subtitle: "Four groups that debuted within ninety days of each other. KEYVITUP holds the smallest listener base and the second-largest follower base in the group.",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "MODYSSEY", y: 140297 },
                    { x: "hrtz.wav", y: 121468 },
                    { x: "VAYONN", y: 90708 },
                    { x: "KEYVITUP", y: 83811 },
                  ],
                },
                {
                  name: "Spotify followers",
                  points: [
                    { x: "MODYSSEY", y: 53154 },
                    { x: "hrtz.wav", y: 29890 },
                    { x: "VAYONN", y: 12486 },
                    { x: "KEYVITUP", y: 30304 },
                  ],
                },
              ],
              note: "KEYVITUP carries more followers than hrtz.wav on 31 percent fewer listeners, and 2.4 times VAYONN's followers on a comparable base. The people who arrive are staying. Far too few arrive.",
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "bars",
              title: "First-Week Album Sales, 2026 Debut Class",
              subtitle: "Hanteo first-week figures for the 2026 boy-group debuts that entered the year's first-week top 100. KEYVITUP's 84,882 placed 83rd across every release of the year, by any artist at any career stage.",
              unit: "copies, first week",
              series: [
                {
                  name: "First week",
                  points: [
                    { x: "ALPHA DRIVE ONE", y: 1441270 },
                    { x: "AND2BLE", y: 731673 },
                    { x: "MODYSSEY", y: 302064 },
                    { x: "FLARE U", y: 186825 },
                    { x: "VAYONN", y: 160872 },
                    { x: "NAZE", y: 130427 },
                    { x: "KEYVITUP", y: 84882 },
                    { x: "TUNEXX", y: 73865 },
                    { x: "hrtz.wav", y: 26622 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "A genuinely solid debut number. The gap worth closing is internal: VAYONN's first day alone, 104,019 copies, exceeded KEYVITUP's entire first week.",
              source: "Hanteo, 2026",
            },
          ],
        },
        {
          label: "B",
          title: "Reading the Position",
          strategy: "Two numbers describe the whole problem, and they point in opposite directions. On reach, KEYVITUP is last in a fourteen-artist set and behind every group that debuted alongside it. On conversion, it leads that same debut cohort and sits within four hundredths of MODYSSEY, the best-selling debut of the cohort after ALPHA DRIVE ONE. A group that keeps a higher share of the people it reaches, and reaches the fewest people, has a distribution problem rather than an appeal problem. Distribution is the cheaper of the two to fix, and the one an outside partner can actually move.",
          components: {
            heading: "The three gaps, in order of cost to close",
            items: [
              "No owned capture. Every listener acquired to date has been rented from a platform. Closing this costs a form and a decision, not a budget.",
              "No promoted presence in the four markets that produced the launch audience. Closing this costs a targeted media programme, not a tour.",
              "No repeatable content franchise, against peers running between one and eight each. Closing this costs a format decision and consistency, not production spend.",
            ],
          },
          kpis: [
            "Ratio held above 0.40 while monthly listeners rise, not while they fall",
            "Monthly listeners above the 265,562 May peak within twelve months",
            "Second-EP first week above 160,000, which is the internal VAYONN benchmark",
            "Conversion ranking held at or above MODYSSEY through the next cycle",
          ],
        },
      ],
      footnote: "Monthly listeners, followers and ratios: Chartmetric, September 3 2026. First-week sales: Hanteo. Debut dates are the official group debut, not the earliest catalog release date. Ratios move with both numerator and denominator, so section 03 separates the two before drawing conclusions from this one.",
    },

    // ===================================================================
    // 03. Editorial Dependency Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Dependency",
      title: "Editorial Dependency Analysis",
      philosophy: "Every listener acquired so far has been rented. The lease ran seven weeks and the group owns nothing that survived it.",
      intro: "This section separates the two numbers that get read as one. Spotify placed KEYVITUP on two of its largest programmed K-pop playlists in the release window, carrying a combined 1.73 million followers, and removed the group from both inside seven weeks. Monthly listeners tracked that support almost exactly. Followers did not move with it in either direction, which is the finding that reframes the whole audit: the group has never lost a follower, and has never had a way to gain one that did not depend on a playlist.",
      subBlocks: [
        {
          label: "A",
          title: "Playlist Support Timeline",
          objective: "Establish what editorial support existed, for how long, and what it was worth.",
          strategy: "The EP entered BIASBOYS on release day and K-Pop Rising the following day, two Spotify-programmed playlists carrying 844,268 and 883,640 followers, peaking at positions 1 and 5 respectively. BIASBOYS dropped the group after twelve days, on April 20. K-Pop Rising held for forty-eight and dropped it on May 27. A third placement, Boy in the Moon at 78,689 followers, ran to August 11. Alongside those, large third-party playlists that had picked the record up at launch also cycled it out, including TikTok Music 2026 at 1.49 million followers and a Filtr Indonesia trending list at 350,192. The May 9 listener peak falls between the two removals, nineteen days after the first and eighteen days before the second.",
          components: {
            heading: "What the group holds today, and what it is worth",
            items: [
              "206 current Spotify playlists carrying 602,175 followers of combined reach, against 2.17 million across Spotify-owned playlists alone in the launch window",
              "Eight of those 206 are Spotify-owned and account for 498,745 of the reach, which is 83 percent of everything",
              "The remaining 198 playlists carry 103,430 between them, and 194 of them have fewer than 1,000 followers",
              "Only one Apple Music placement exists, added on release day, now sitting at position 101 after peaking at 1",
              "Four of the eight Spotify-owned placements are algorithmic artist radio lists rather than programmed editorial, which means they can vanish without a human decision",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Spotify-Programmed Playlist Reach Held, by Week Since Debut",
              subtitle: "Combined follower reach of every Spotify-owned playlist carrying the record. The two largest placements both ended inside seven weeks.",
              unit: "followers of reach",
              series: [
                {
                  name: "Reach held",
                  points: [
                    { x: "W1", y: 2165621 },
                    { x: "W2", y: 1441290 },
                    { x: "W3", y: 1441290 },
                    { x: "W5", y: 1441290 },
                    { x: "W7", y: 1441290 },
                    { x: "W8", y: 557650 },
                    { x: "W12", y: 557650 },
                    { x: "W16", y: 557650 },
                    { x: "W18", y: 480579 },
                    { x: "W21", y: 498745 },
                  ],
                },
              ],
              note: "Reach fell from 2.17 million in the launch window to 498,745 today, a drop of 77 percent. Of what remains, 359,024 sits in a single playlist.",
              source: "Chartmetric playlist history, September 3 2026",
            },
            {
              kind: "line",
              title: "Listeners against Followers, the Full Series",
              subtitle: "Both series on one axis, at true scale. The listener line traces the editorial support. The follower line has never had a down day and has never had a spike either.",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "Apr 12", y: 28347 },
                    { x: "Apr 26", y: 158978 },
                    { x: "May 9", y: 265562 },
                    { x: "May 24", y: 252186 },
                    { x: "Jun 7", y: 223208 },
                    { x: "Jun 21", y: 180898 },
                    { x: "Jul 5", y: 123055 },
                    { x: "Jul 19", y: 90047 },
                    { x: "Aug 2", y: 76343 },
                    { x: "Aug 17", y: 73638 },
                    { x: "Aug 31", y: 83749 },
                  ],
                },
                {
                  name: "Spotify followers",
                  points: [
                    { x: "Apr 12", y: 8336 },
                    { x: "Apr 26", y: 14024 },
                    { x: "May 9", y: 16802 },
                    { x: "May 24", y: 19370 },
                    { x: "Jun 7", y: 21049 },
                    { x: "Jun 21", y: 22363 },
                    { x: "Jul 5", y: 23641 },
                    { x: "Jul 19", y: 25005 },
                    { x: "Aug 2", y: 26482 },
                    { x: "Aug 17", y: 28126 },
                    { x: "Aug 31", y: 30142 },
                  ],
                },
              ],
              note: "Followers grew 261 percent across the window, from 8,336 to 30,142, without a single down day. The conversion engine works. It has simply never been fed anything but playlist traffic.",
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "line",
              title: "Follower-to-Listener Ratio, Weekly",
              subtitle: "The line rises from 0.065 to 0.362, and most of that rise is the denominator falling rather than the numerator climbing.",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "Apr 19", y: 0.107 },
                    { x: "Apr 26", y: 0.088 },
                    { x: "May 3", y: 0.071 },
                    { x: "May 10", y: 0.065 },
                    { x: "May 17", y: 0.071 },
                    { x: "May 24", y: 0.077 },
                    { x: "May 31", y: 0.083 },
                    { x: "Jun 7", y: 0.094 },
                    { x: "Jun 14", y: 0.103 },
                    { x: "Jun 21", y: 0.124 },
                    { x: "Jun 28", y: 0.155 },
                    { x: "Jul 5", y: 0.192 },
                    { x: "Jul 12", y: 0.249 },
                    { x: "Jul 19", y: 0.278 },
                    { x: "Jul 26", y: 0.315 },
                    { x: "Aug 2", y: 0.347 },
                    { x: "Aug 9", y: 0.361 },
                    { x: "Aug 16", y: 0.379 },
                    { x: "Aug 23", y: 0.374 },
                    { x: "Aug 30", y: 0.359 },
                  ],
                },
              ],
              note: "The honest arithmetic: net follower growth across the window was roughly 22,000 against a peak of 265,562 monthly listeners, an implied ceiling of about 8 percent. The target for this plan is a ratio above 0.40 achieved while listeners rise, which is a different and much harder result than the one this line shows.",
              source: "Chartmetric, September 3 2026",
            },
          ],
        },
        {
          label: "B",
          title: "Listening by Market",
          objective: "Locate the audience geographically, because the answer changes what the plan should spend money on.",
          strategy: "Through April and May the record was a Southeast Asian hit. Measured at each market's own peak, Indonesia reached 140,221 monthly listeners, Malaysia 102,330, Taiwan 31,994 and Thailand 22,477. Korea peaked at 11,665, and the home market sits twentieth of twenty-eight tracked countries today. No appearance, fan event, showcase or media day in any of those four markets appears in any source reviewed for this audit. The entire international promotional budget went to the United States and Japan, both of which were smaller markets than Malaysia alone at the time. That audience has now fallen back by 93 to 95 percent, and it fell back without ever being asked for an email address.",
          components: {
            heading: "The promotional footprint, against the listening footprint",
            items: [
              "Countries physically visited since debut: four, being Korea, Japan, the United States and China",
              "KCON LA across August 14 and 15, a fan meet on August 13 and a hello82 event on August 12, which is the single largest international investment made to date",
              "KCON Japan across May 8 and 10, and a Shanghai fan sign for 100 attendees on July 4",
              "Southeast Asia: two label-serviced press placements, one written and one remote video, and nothing else",
              "Latin America: no press, interview or Spanish-language coverage located in this review, against Lima ranking fifth among all listener cities",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "Peak against Current Monthly Listeners, by Market",
              subtitle: "The six markets tracked since debut, each shown at its own peak date rather than at a single shared moment. None has a promotional presence.",
              series: [
                {
                  name: "Peak, Apr to May 2026",
                  points: [
                    { x: "Indonesia", y: 140221 },
                    { x: "Malaysia", y: 102330 },
                    { x: "Taiwan", y: 31994 },
                    { x: "Thailand", y: 22477 },
                    { x: "South Korea", y: 11665 },
                    { x: "Singapore", y: 6904 },
                  ],
                },
                {
                  name: "Current",
                  points: [
                    { x: "Indonesia", y: 7011 },
                    { x: "Malaysia", y: 7421 },
                    { x: "Taiwan", y: 1825 },
                    { x: "Thailand", y: 1327 },
                    { x: "South Korea", y: 1377 },
                    { x: "Singapore", y: 1015 },
                  ],
                },
              ],
              note: "Indonesia fell 95 percent and Malaysia 93 percent. Both were larger at peak than any market the group has ever promoted in.",
              source: "Chartmetric, September 3 2026",
            },
            {
              kind: "hbars",
              title: "Current Playlist Reach, Spotify-Owned against Everything Else",
              subtitle: "Eight Spotify-owned playlists out of 206 carry 83 percent of the reach, grouped into four bars below. The long tail is 198 lists averaging 522 followers each.",
              series: [
                {
                  name: "Followers of reach",
                  points: [
                    { x: "All New K-Pop", y: 359024 },
                    { x: "K-Pop Dance Driving", y: 119937 },
                    { x: "198 other lists", y: 103430 },
                    { x: "MU:CON 2026", y: 10668 },
                    { x: "Artist radio (5)", y: 9116 },
                  ],
                },
              ],
              source: "Chartmetric, September 3 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Catalog Performance",
          objective: "Establish what the songs are doing independently of the promotion around them.",
          strategy: "Five tracks, 2.39 million cumulative Spotify streams, and a run rate that has flattened rather than continued falling. The last seven days and the last twenty-eight days now imply almost exactly the same daily rate, which means the decay has bottomed. The title track carries 43 percent of EP streams and has fallen 87 percent from its launch week, from 156,271 streams in the week to April 21 down to 20,410 now. The most interesting line is the least promoted one: POLAROID, an album track with no video and no campaign, is running 24 percent above its own twenty-eight-day rate after an algorithmic playlist picked it up in late August, the clearest acceleration on the record.",
          components: {
            heading: "What this says about the next release",
            items: [
              "The catalog has a floor and the floor is real, at roughly 7,900 streams a day across the EP with no active promotion",
              "The title track did the work a title track should do, and nothing was built to catch the traffic it generated",
              "POLAROID accelerating on algorithmic placement alone is evidence the music travels without a campaign behind it",
              "One EP and one era means there is no decay curve to compare against yet, which is the single largest analytical gap in this audit and closes with the second release",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "EP Tracks by Cumulative Spotify Streams",
              unit: "cumulative streams",
              series: [
                {
                  name: "Cumulative streams",
                  points: [
                    { x: "KEYVITUP", y: 1034621 },
                    { x: "LEGENDARY", y: 501037 },
                    { x: "BEST ONE", y: 399694 },
                    { x: "SHOW ME SOMETHING", y: 228696 },
                    { x: "POLAROID", y: 224901 },
                  ],
                },
              ],
              source: "Chartmetric, September 2 2026",
            },
            {
              kind: "grouped",
              title: "Current Daily Stream Rate against the Trailing Month",
              subtitle: "Where the seven-day bar exceeds the twenty-eight-day bar, the track is accelerating. Three do; POLAROID is the widest margin by some distance, and it is the track with no promotion attached.",
              unit: "streams per day",
              series: [
                {
                  name: "Last 7 days",
                  points: [
                    { x: "KEYVITUP", y: 2916 },
                    { x: "BEST ONE", y: 1687 },
                    { x: "POLAROID", y: 1558 },
                    { x: "SHOW ME SOMETHING", y: 1000 },
                    { x: "LEGENDARY", y: 860 },
                  ],
                },
                {
                  name: "Last 28 days",
                  points: [
                    { x: "KEYVITUP", y: 2814 },
                    { x: "BEST ONE", y: 1570 },
                    { x: "POLAROID", y: 1259 },
                    { x: "SHOW ME SOMETHING", y: 1095 },
                    { x: "LEGENDARY", y: 1138 },
                  ],
                },
              ],
              source: "Chartmetric daily stream series, September 2 2026",
            },
          ],
        },
      ],
      footnote: "Playlist add and remove dates, follower reach and peak positions: Chartmetric playlist history. Listener and follower series: Chartmetric daily series, of which a minority of points are interpolated. The May 9 peak and the August 17 trough are both direct readings. Country-level figures are Chartmetric estimates. Six markets carry history back to April. The remaining tracked countries, including the United States, entered the tracked set on August 26, so no peak comparison is available for them.",
    },

    // ===================================================================
    // 04. Audience & Market Fit
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "Audience & Market Fit",
      intro: "Two audiences exist and they are not the same shape. The streaming audience built itself in Southeast Asia at launch and has largely dispersed. The short-form audience is younger, larger, still fully intact, and weighted to the United States and Latin America. The plan below treats short form as the acquisition surface and streaming as the destination, because that is the direction the data already runs.",
      thesis: "A 172,000-strong short-form audience, seven in ten of them aged 18 to 24, spread across markets that have never been sold to. The targeting question is not who, it is which of the three groups to buy first.",
      metrosLabel: "Top Listener Cities",
      metros: [
        { name: "Kuala Lumpur, MY" },
        { name: "Bangkok, TH" },
        { name: "Singapore, SG" },
        { name: "Bandung, ID" },
        { name: "Lima, PE" },
        { name: "Jakarta, ID" },
        { name: "Taipei, TW", tier: "secondary" },
        { name: "Quezon City, PH", tier: "secondary" },
        { name: "Mexico City, MX", tier: "secondary" },
        { name: "Los Angeles, US", tier: "secondary" },
        { name: "Sao Paulo, BR", tier: "secondary" },
        { name: "Manila, PH", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 10 },
        { bracket: "18-24", weight: 71 },
        { bracket: "25-34", weight: 18 },
        { bracket: "35+", weight: 1 },
      ],
      genderDistribution: { female: 67, male: 33 },
      personas: [
        {
          name: "The Southeast Asian Discovery Core",
          label: "Indonesia, Malaysia, Philippines, Thailand, Singapore",
          priority: "primary",
          profile: "The audience that made the launch work. At peak this group represented over 270,000 monthly listeners across four countries, arriving entirely through playlist placement and short-form circulation with no promotion of any kind behind it. It has since fallen back by more than 90 percent, but the same people are still on TikTok, where Indonesia is the second-largest follower country at 11.08 percent.",
          psychographics: [
            "Early-adopter K-pop listeners who find groups before the groups arrive",
            "High playlist and algorithmic dependency, low label-relationship dependency",
            "Multi-fandom, comfortable holding several groups at once",
            "Accustomed to being reached last by Korean labels and quick to reward anyone who reaches them first",
          ],
          motivations: [
            "Being early to a group before it is claimed",
            "Direct access, which almost no rookie group offers this market",
            "Content that does not require Korean to enjoy",
          ],
          behaviors: [
            "Streams on Spotify free tier, discovers on TikTok",
            "Organises on X rather than on official platforms",
            "Buys physical when a local retailer or a group order exists, rarely otherwise",
          ],
          platforms: [
            { name: "TikTok", role: "Discovery and the primary acquisition surface" },
            { name: "Spotify", role: "Consumption, currently the only place they are counted" },
            { name: "X", role: "Where the fanbase self-organises, entirely unsupported today" },
          ],
          barriers: [
            "No official account, capture surface or content in any Southeast Asian language",
            "Two Indonesian fanbase accounts were created and abandoned with zero posts",
          ],
          triggers: [
            "Any first-party signal that the group knows this audience exists",
            "A local-language content beat, however small",
          ],
          conversionGoal: "Move from anonymous listener to owned contact, then to Spotify follower, in that order.",
        },
        {
          name: "The Latin American Short-Form Audience",
          label: "Mexico, Brazil, Peru, Colombia, Argentina, Chile",
          priority: "expansion",
          profile: "Mexico and Brazil alone account for 11.3 percent of TikTok followers, at 6.11 and 5.19 percent, and Lima ranks fifth among all listener cities worldwide. This audience has received nothing: no press, no interview, no Spanish-language coverage anywhere on earth, and no official account in any language they speak.",
          psychographics: [
            "Short-form native, extremely high save and share behaviour",
            "Fandom culture organised around translation accounts and group chats",
            "Strong live-event demand relative to market income, historically underserved by K-pop touring",
          ],
          motivations: [
            "Recognition from a group that has never acknowledged the region",
            "Translated content, which is currently the entire unmet need",
          ],
          behaviors: [
            "Discovers through TikTok and YouTube Shorts, converts on Spotify",
            "Organises fan projects on X and Instagram with no label involvement",
          ],
          platforms: [
            { name: "TikTok", role: "The whole relationship today" },
            { name: "YouTube Shorts", role: "Secondary discovery, already producing results post-KCON" },
          ],
          barriers: [
            "Zero Spanish or Portuguese content across 504 owned posts",
            "One dormant Brazilian fan account at 119 followers is the entire organised presence",
          ],
          triggers: [
            "Spanish and Portuguese subtitles on existing content, which costs nothing to produce",
            "A single acknowledgment post, which is the cheapest market-entry signal available",
          ],
          conversionGoal: "Convert existing short-form reach into streaming and owned contacts before any competitor claims the region.",
        },
        {
          name: "The United States K-pop Native",
          label: "Los Angeles, New York, Chicago, Dallas, Atlanta",
          priority: "secondary",
          profile: "The market that received the promotional investment. KCON LA, a fan meet, a hello82 activation and a full media run in August produced a measurable result: the United States is now the largest single tracked listener market at 18,777, a Top 20 YouTube Shorts placement, and the largest TikTok follower country at 22.56 percent. This is the one market where spend and outcome are connected, which is what makes it the proof case rather than the priority.",
          psychographics: [
            "Deep K-pop literacy, follows multiple groups, attends conventions",
            "Buys physical, collects photocards, participates in streaming projects",
            "Responds to member personality far more than to choreography",
          ],
          motivations: [
            "Access and repeat contact after a first in-person meeting",
            "Being part of a group's story early enough to matter",
          ],
          behaviors: [
            "Converted in person in August and has had no follow-up contact since",
            "Buys through third-party resellers because no first-party retail exists",
          ],
          platforms: [
            { name: "TikTok", role: "Largest single follower country at 22.56 percent" },
            { name: "Instagram", role: "Consistently outperforms TikTok on identical content" },
            { name: "YouTube", role: "Shorts placement already proven post-KCON" },
          ],
          barriers: [
            "Every attendee of the August activations left without giving a contact detail, because nothing was there to collect one",
            "No first-party retail, no membership, nothing to join",
          ],
          triggers: [
            "A reason to return that arrives in an inbox rather than in an algorithm",
          ],
          conversionGoal: "Retroactively capture the August audience and hold it through the next release.",
        },
      ],
      behaviorSignals: [
        {
          behavior: "Highest median engagement rate of the six peers analysed, at 28.96 percent",
          platforms: ["TikTok"],
          implication: "The people who see the content respond to it more strongly than they respond to any competitor. Holding power is not the problem. Reach is.",
        },
        {
          behavior: "Identical same-day posts earn more on Instagram than on TikTok in 28 of 33 matched pairs",
          platforms: ["Instagram", "TikTok"],
          implication: "Instagram delivers a 1.56x median advantage on 19 percent fewer followers, and it is currently unmanaged. This is free reach sitting on the table.",
        },
        {
          behavior: "Organised fan network totals roughly 2,350 accounts across twelve handles",
          platforms: ["X"],
          implication: "That is 1.4 percent of the TikTok following. The fandom is almost entirely unorganised, which is a risk today and an opportunity for whoever organises it first.",
        },
        {
          behavior: "Zero fan-run accounts exist on TikTok, the group's largest platform",
          platforms: ["TikTok"],
          implication: "The audience with the most people has the least structure. A seeded fan-page network has nothing to compete with.",
        },
      ],
      barriers: [
        {
          barrier: "The fandom is named KEYPER and there is no place to register as one",
          response: "Stand up a membership and capture surface first, before any media spend, so that everything bought afterwards has somewhere to land.",
        },
        {
          barrier: "The only fan platform in use has membership, messaging, live, polls and translation all switched off",
          response: "Turn the existing features on before building anything new. The platform is already paid for and already activated.",
        },
        {
          barrier: "No content exists in any language spoken in the group's four largest launch markets",
          response: "Subtitle the existing library rather than shooting new content. Three quarters of it already works with no Korean at all.",
        },
        {
          barrier: "No physical retail relationship in any market outside Korea",
          response: "Route the next release through a retail partner in at least one Southeast Asian market and one US account, with pre-order capture attached.",
        },
      ],
      triggers: [
        {
          trigger: "An in-person event, proven in Los Angeles in August",
          implication: "The one activation the group has run produced the largest listener market it now has. Repeat it where the audience already is.",
        },
        {
          trigger: "Algorithmic playlist pickup, proven by POLAROID in late August",
          implication: "The music travels without a campaign, which means paid discovery has a real chance of compounding rather than renting.",
        },
        {
          trigger: "Release-cycle content, which outperforms everything else by 2.9 times",
          implication: "The account has posted 110 consecutive videos with no campaign asset in them. The highest-performing lane is simply switched off.",
        },
      ],
      similarArtists: ["VAYONN", "MODYSSEY", "hrtz.wav", "IDID", "AHOF", "KickFlip", "TWS", "CORTIS"],
      genres: ["K-Pop", "Hip-Hop", "Dance-Pop", "Trap", "R&B"],
      platformSignals: [
        {
          platform: "TikTok",
          note: "172,600 followers, 3.4 million likes across 199 videos. Ranks 16,513 globally against a Spotify listener rank of 112,215, which is roughly a sevenfold gap and the clearest signal in the audit that the short-form audience is far ahead of the streaming audience. Followers are 22.56 percent United States, 11.08 percent Indonesia, 6.72 percent Cambodia, 6.11 percent Mexico and 5.19 percent Brazil.",
        },
        {
          platform: "Instagram",
          note: "139,970 followers. The quiet overperformer: 33 of 50 analysed reels are same-day twins of TikTok posts and Instagram won 28 of those 33, at a median pairwise advantage of 1.56 times, on 19 percent fewer followers. Comparing account medians rather than pairs, Instagram runs 51,379 against TikTok's 40,100.",
        },
        {
          platform: "Spotify",
          note: "83,811 monthly listeners and 30,304 followers. Artist Pick is set and the biography is complete, which confirms the profile is claimed and actively managed. Eight Spotify-owned playlists carry 83 percent of all current reach.",
        },
        {
          platform: "YouTube",
          note: "43,000 subscribers across 272 videos with an Official Artist Channel, a live Shorts tab and an active Community tab. Channel memberships are not enabled. The three music videos carry roughly 13 million views between them, which is roughly 300 times the subscriber count and the largest unconverted asset the group owns.",
        },
      ],
      footnote: "Age, gender and follower-country splits: TikTok audience statistics via Chartmetric, September 3 2026. Follower counts for TikTok, Instagram, YouTube and X are read from the live profiles on September 3 2026, and the Chartmetric platform rank is from the same date. Listener city figures below the top five sit in a narrow band, so the secondary cities above are directional and are to be validated against pixel data in the first paid flight.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Content",
      title: "Video Intelligence / 123 Videos, Frame by Frame",
      intro: "Crowd Control Digital indexed 123 videos into a dedicated KEYVITUP intelligence store on TwelveLabs video AI: 73 of the group's own posts across TikTok, YouTube and Instagram including all three music videos, plus 50 posts from VAYONN, MODYSSEY, CORTIS, AHOF and IDID. Selection was drawn from a full enumeration of 3,860 posts across nine accounts, stratified so that top and bottom performers are both represented, with real performance data joined to every item. Every finding below is joined to the performance band it holds in, and carries the counter-evidence found against it.",
      clientQuestion: {
        attribution: "The question this analysis answers",
        question: "The group holds the highest engagement rate of the six peers analysed here and the smallest audience among them. What is in the content that keeps people, and what is missing that would bring more of them?",
      },
      methodology: [
        {
          label: "Corpus pull",
          value: "73 owned videos: 38 from TikTok, 23 from YouTube including all three music videos, and 12 Instagram reels indexed as video. Instagram platform comparisons draw on a wider set of 50 reels enumerated with engagement data. Stratified across four performance bands so that top-versus-bottom questions have both ends genuinely represented. Competitor set: 50 videos across VAYONN, MODYSSEY, CORTIS, AHOF and IDID, every handle verified as official before pulling.",
        },
        {
          label: "Video intelligence",
          value: "All 123 videos indexed as watchable video into a dedicated KEYVITUP knowledge store, 70.9 minutes of footage, making hooks, on-screen text, headcount, staging, language and recurring formats queryable across the whole corpus at once.",
        },
        {
          label: "Performance join",
          value: "Every item carries views, likes, comments, shares and engagement rate at pull time, plus its band within the account. No claim in this section is made without the performance tier it holds in.",
        },
        {
          label: "Adversarial cross-check",
          value: "Each conclusion was re-run across independent scopes and, where possible, tested against a caption-only pass and a raw on-screen-text pass. Caption-based reads were overturned twice and the corrections are stated in the findings.",
        },
        {
          label: "Honest limits",
          value: "Member-level claims are not made, because the model cannot reliably identify individuals and returned incorrect names when asked. Competitor corpora are their stronger posts, so competitor medians are a winners' benchmark rather than an account average. One franchise comparison rests on hashtag metadata across 881 posts rather than on video content.",
        },
      ],
      corpusStats: [
        {
          label: "Videos analysed",
          value: "123",
          detail: "73 owned and 50 competitor, 70.9 minutes, selected from a full enumeration of 3,860 posts across nine accounts",
        },
        {
          label: "Calls to action found",
          value: "2 of 73",
          detail: "Zero in the top decile. Zero URLs anywhere in the entire corpus",
        },
        {
          label: "Median engagement rate",
          value: "28.96%",
          detail: "Highest of the six peers analysed, ahead of IDID at 24.95 and CORTIS at 23.06",
        },
        {
          label: "Posts since last campaign asset",
          value: "110",
          detail: "Consecutive TikToks with no release content since April 28, in the lane that outperforms by 2.9 times",
        },
      ],
      mixColumnLabel: "KEYVITUP today",
      benchmarkColumnLabel: "Peer benchmark",
      mixHeading: "What the Output Is Spent On, against What Earns",
      mixIntro: "Volume is not the issue and quality is not the issue. The corpus shows a well-made account pointed at nothing in particular. Each row below is a lane where the group's own performance data already says which way to move.",
      mixRows: [
        {
          metric: "Content addressing an audience outside Korea",
          lolaAmour: "1 video of 73, addressing the United States",
          benchmark: "Zero mentions of Indonesia, Malaysia, Taiwan or Thailand across 504 owned posts",
          read: "behind",
          note: "The four markets that produced the launch audience appear nowhere in the group's own content. No greeting, no caption, no on-screen text.",
        },
        {
          metric: "Calls to action",
          lolaAmour: "2 in 73 videos, 1 in 198 TikTok captions",
          benchmark: "Zero CTAs in the top decile; zero URLs corpus-wide",
          read: "behind",
          note: "The single cheapest fix in the audit. Reach exists and is currently pointed nowhere.",
        },
        {
          metric: "Full-group content in the top band",
          lolaAmour: "14 of 32 top-band videos show five or more members",
          benchmark: "3 of 24 bottom-band videos do, and 12 of 24 are solo",
          read: "ahead",
          note: "The account's own data has already answered the format question. The winning shape is the full group somewhere real, not one member against a studio wall.",
        },
        {
          metric: "Personality-led content",
          lolaAmour: "2 of 42 non-top videos, roughly 5 percent",
          benchmark: "VAYONN runs 31 to 38 percent, and 8 of their 11 best are personality-led",
          read: "behind",
          note: "The gap holds when measured on KEYVITUP's mid, bottom and Instagram content alone, with its top performers excluded.",
        },
        {
          metric: "Named, repeatable content series",
          lolaAmour: "Zero",
          benchmark: "CORTIS runs 8, MODYSSEY 2, VAYONN 1",
          read: "behind",
          note: "The only recurring tags in the account are release titles. There is nothing for a new follower to follow.",
        },
        {
          metric: "Release-cycle content",
          lolaAmour: "None since April 28, across 110 consecutive posts",
          benchmark: "Campaign content is the account's own best lane by 2.9 times",
          read: "behind",
          note: "Overturns the usual assumption that organic outperforms campaign for a rookie group. It does not here, and it is not close.",
        },
        {
          metric: "Platform-native mechanics on TikTok",
          lolaAmour: "Zero confirmed duets, stitches, native text treatments, filters or trending audio",
          benchmark: "Standard practice across the peer set",
          read: "behind",
          note: "The largest owned audience is being served content that would work identically on any platform.",
        },
        {
          metric: "Content that survives translation",
          lolaAmour: "55 of 73 fully, with no Korean required",
          benchmark: "Strong, and better than most rookie accounts",
          read: "ahead",
          note: "A genuine asset. The catch in finding 6: the lane that travels is dance, and the lane that does not is the personality content the group most needs to build.",
        },
      ],
      charts: [
        {
          kind: "grouped",
          title: "Median Views by Lane, TikTok",
          subtitle: "The account's own performance data, split by whether a post carried release content.",
          unit: "median views",
          series: [
            {
              name: "Campaign content",
              points: [
                { x: "Whole account", y: 114300 },
                { x: "April only", y: 115200 },
              ],
            },
            {
              name: "Organic content",
              points: [
                { x: "Whole account", y: 40100 },
                { x: "April only", y: 46900 },
              ],
            },
          ],
          note: "The April-only column controls for debut novelty and the gap holds at 2.5 times. This is not a launch-window artefact.",
          source: "CREATIVE CONTROL corpus, September 2026",
        },
        {
          kind: "grouped",
          title: "Composition of the Top Band against the Bottom Band",
          subtitle: "Share of videos in each band carrying each attribute. Two variables separate the account's best content from its worst, and neither is production quality.",
          unit: "percent of band",
          series: [
            {
              name: "Top band",
              points: [
                { x: "Solo member", y: 6 },
                { x: "Five or more members", y: 44 },
                { x: "Shot outside a studio", y: 50 },
              ],
            },
            {
              name: "Bottom band",
              points: [
                { x: "Solo member", y: 50 },
                { x: "Five or more members", y: 13 },
                { x: "Shot outside a studio", y: 29 },
              ],
            },
          ],
          note: "Top band median 216,900 views, bottom band median 17,400. Video length separates the two by one second and was discarded as a variable.",
          source: "CREATIVE CONTROL corpus, September 2026",
        },
        {
          kind: "bars",
          title: "Median TikTok Views by Month",
          subtitle: "The account is not fatigued. August was its second-best month of the year.",
          unit: "median views",
          series: [
            {
              name: "Median views",
              points: [
                { x: "Mar", y: 34500 },
                { x: "Apr", y: 50000 },
                { x: "May", y: 41800 },
                { x: "Jun", y: 35600 },
                { x: "Jul", y: 32600 },
                { x: "Aug", y: 43200 },
              ],
            },
          ],
          highlightX: ["Aug"],
          source: "CREATIVE CONTROL corpus, September 2026",
        },
        {
          kind: "hbars",
          title: "Median TikTok Engagement Rate, Peer Class",
          subtitle: "The reason this plan is about reach rather than about creative.",
          unit: "percent",
          series: [
            {
              name: "Engagement rate",
              points: [
                { x: "KEYVITUP", y: 28.96 },
                { x: "IDID", y: 24.95 },
                { x: "MODYSSEY", y: 24.56 },
                { x: "AHOF", y: 24.3 },
                { x: "CORTIS", y: 23.06 },
                { x: "VAYONN", y: 18.69 },
              ],
            },
          ],
          highlightX: ["KEYVITUP"],
          source: "CREATIVE CONTROL corpus, September 2026",
        },
      ],
      findingsHeading: "Seven Findings",
      findingsIntro: "Each finding states the claim, the evidence behind it, the performance band it holds in, and the change it implies. Counter-evidence is printed alongside the claim it qualifies.",
      findings: [
        {
          id: "f1",
          title: "The content acknowledges one overseas market, and it is not one of the group's biggest",
          verdict: "confirmed",
          confidence: "High, unanimous across five independent passes",
          summary: "Across all 73 owned videos, exactly one addresses an audience outside Korea directly, and the audience it addresses is in the United States. Zero videos contain a greeting, address or thanks to fans in any language other than Korean, English or Japanese. Widening to all 504 enumerated owned posts, captions carry 267 Korean, 9 Japanese and 1 Chinese-only, and zero Thai, Spanish, Portuguese, Indonesian or Tagalog. Indonesia, Malaysia, Taiwan and Thailand appear zero times.",
          evidence: [
            "1 of 73 videos addresses an overseas audience, and that video sits at 57,597 views, roughly the Instagram median",
            "Zero non-Korean, non-English, non-Japanese communicative content in the entire corpus",
            "504 owned posts enumerated, zero mentions of the four launch markets",
            "Indonesia peaked at 140,221 monthly listeners and Malaysia at 102,330 during the window these posts were published",
          ],
          counterEvidence: [
            "Early automated passes flagged Portuguese, Vietnamese, Hindi and Russian audio. A raw on-screen-text pass showed these were speech-recognition errors running on sung and rapped audio. The correction strengthens the finding rather than weakening it.",
          ],
          pivot: {
            title: "Speak to the markets that already showed up",
            actions: [
              "Subtitle the existing library in Bahasa Indonesia, Thai and Spanish before producing anything new; 75 percent of it already works without Korean",
              "Run one acknowledgment beat per market, which is the cheapest market-entry signal that exists",
              "Turn on translation in the fan platform, where it is currently switched off",
              "Add Bahasa Indonesia, Thai, Malay and Spanish to the platform language list, which currently stops at Chinese",
            ],
          },
        },
        {
          id: "f2",
          title: "Two calls to action in 73 videos, and neither is in the top decile",
          verdict: "confirmed",
          confidence: "High, cross-checked against an independent raw-text pass",
          summary: "A strict count finds two. One is the hello82 Los Angeles announcement reel, which carries three separate spoken and on-screen instructions in English. The other is a YouTube outro. A third candidate was in-content dialogue between members rather than a viewer instruction and was discarded. There are no URLs anywhere in the corpus, and no calls to action at all in the account's best-performing content.",
          evidence: [
            "2 explicit calls to action across 73 videos",
            "1 of the 198 TikTok captions enumerated for this analysis, and 1 of 50 Instagram captions, carry an instruction",
            "Zero URLs in the entire corpus",
            "Zero calls to action in the top decile, which is where roughly 216,900 median views sit",
          ],
          pivot: {
            title: "Point the reach somewhere",
            actions: [
              "Add a one-second end card to every release-adjacent post carrying the title, the date and a destination",
              "Put a capture link in every bio and every caption of the top-performing content, which currently carries none",
              "Treat the top decile as inventory: those posts already reach the audience the plan needs to convert",
            ],
          },
        },
        {
          id: "f3",
          title: "The winners are the full group somewhere real; the losers are one member in a practice room",
          verdict: "confirmed",
          confidence: "High, from a headcount and setting audit over 56 videos",
          summary: "Two variables separate the account's best content from its worst, and neither is production value or length. In the top band, 44 percent of videos show five or more members and only 6 percent are solo. In the bottom band, 50 percent are solo and only 13 percent show the full group. Half the top band was shot somewhere other than a practice room; 71 percent of the bottom band was not.",
          evidence: [
            "Top band: 2 of 32 solo, 14 of 32 with five or more members, 16 of 32 shot on location",
            "Bottom band: 12 of 24 solo, 3 of 24 with five or more members, 17 of 24 in a practice room or plain studio",
            "Top band median 216,900 views against a bottom band median of 17,400",
            "Best performers include a full-group piece at 445,000 and the Los Angeles performance clip at 272,400 on TikTok and 310,900 on Instagram",
          ],
          counterEvidence: [
            "A caption-only pass suggested member count barely mattered, showing a 9 percent gap. On screen the gap is more than twelve-fold. Hashtags label who is featured, not who is visible, and the caption read was wrong.",
          ],
          pivot: {
            title: "Make the winning shape the default, not the exception",
            actions: [
              "Set a floor on full-group content as a share of weekly output",
              "Move the camera out of the practice room; location is doing more work than any production variable measured",
              "Keep solo content, but attach it to a named series rather than posting it loose",
            ],
          },
        },
        {
          id: "f4",
          title: "The label's other group sells members; this group sells choreography",
          verdict: "confirmed",
          confidence: "High, and stress-tested against sampling bias",
          summary: "Head to head at their best, VAYONN runs 8 of 11 personality-led posts against KEYVITUP's 0 of 9, which are 9 of 9 choreography-led. Re-running the classification on KEYVITUP's mid, bottom and Instagram content only, deliberately excluding their top performers, puts fan-service gesture as main content at 2 of 42, or 5 percent, against VAYONN's 31 to 38 percent. VAYONN also posts far more, at 199 TikToks across July and August against 50.",
          evidence: [
            "VAYONN 8 of 11 personality-led at their best; KEYVITUP 0 of 9",
            "KEYVITUP fan-service-as-main-content: 2 of 42, tested on a deliberately unfavourable sample",
            "Direct-to-camera fan interaction is VAYONN's single largest recurring format at 6 of 16",
            "Posting volume: 134 VAYONN TikToks in July against 28",
          ],
          counterEvidence: [
            "VAYONN's TikTok median across 335 posts is 36,900, which is below KEYVITUP's 40,100 across the 198 posts enumerated here. VAYONN's advantage is lane and volume, not per-post performance. The album-sales gap between the two groups is not a content-performance gap.",
          ],
          pivot: {
            title: "Add the lane rather than replacing the one that works",
            actions: [
              "Build a direct-to-camera fan-interaction format and run it on a fixed weekly slot",
              "Raise posting volume toward the internal benchmark set on the same roster",
              "Keep the choreography output intact; it is the half that already travels across languages",
            ],
          },
        },
        {
          id: "f5",
          title: "There is no repeatable content franchise, while every peer above them runs at least one",
          verdict: "confirmed",
          confidence: "High, five independent passes returned the same verdict",
          summary: "Asked across all 73 owned videos in five separate chunks, every pass returned the same answer: no named repeatable series, no recurring title card, no intro graphic appearing across three or more videos. The only branding in the corpus is the KEYVITUP and iNKODE wordmarks. Hashtag data corroborates: the only recurring non-member tags are release titles.",
          evidence: [
            "Zero named series across 73 videos, confirmed independently five times",
            "Only recurring tags are release titles, at 10 and 5 uses",
            "CORTIS runs eight separately named series, the largest at 74 posts",
            "MODYSSEY runs two and VAYONN one",
          ],
          counterEvidence: [
            "The CORTIS franchise count rests on hashtag metadata across 881 posts rather than on the eight CORTIS videos held in the store, which is too small a sample to observe repetition directly.",
          ],
          pivot: {
            title: "Build two franchises and run them on a fixed cadence",
            actions: [
              "One personality franchise, direct to camera, addressing the gap in finding 4",
              "One performance franchise that carries the choreography strength into a repeatable, followable shape",
              "Name both, hashtag both, and hold the slot even in weeks with nothing to promote",
            ],
          },
        },
        {
          id: "f6",
          title: "The account's best lane has been switched off since April",
          verdict: "confirmed",
          confidence: "High, with the underlying assumption tested and overturned",
          summary: "The last release asset posted to TikTok was the LEGENDARY music video on April 28. There have been 110 consecutive posts since with no campaign content in them. Campaign content is the account's strongest lane by a wide margin: a 114,300 median against 40,100 for organic, and within April alone, controlling for debut novelty, 115,200 against 46,900. This overturns the usual assumption that organic content outperforms campaign content for a rookie group.",
          evidence: [
            "110 consecutive TikTok posts with zero campaign content since April 28",
            "Campaign median 114,300 against organic 40,100, a 2.9 times gap",
            "April-only comparison holds the gap at 2.5 times, so it is not a launch-window effect",
            "The music video reel on Instagram sits at 9,437,858 against an Instagram median of 51,379",
          ],
          counterEvidence: [
            "The account is not decaying and the finding should not be read as fatigue. Monthly medians run 34,500 in March, 50,000 in April, 41,800 in May, 35,600 in June, 32,600 in July and 43,200 in August, which makes August the second-best month of the year.",
          ],
          pivot: {
            title: "Never run a gap this long again",
            actions: [
              "Treat the release calendar as the content calendar, with campaign assets running continuously rather than in a four-week burst",
              "Recut existing release assets into new campaign content during the gaps between releases",
              "Bring the next cycle forward, because the account is performing well with nothing to promote",
            ],
          },
        },
        {
          id: "f7",
          title: "The content already travels, but the lane that travels is not the lane that needs building",
          verdict: "partial",
          confidence: "Medium to high, with a real tension inside it",
          summary: "55 of 73 videos, or 75 percent, fully survive translation with no Korean required. That is genuinely strong and better than most rookie accounts. The complication is what falls into each group: the surviving set is almost entirely dance, and the failures are precisely the personality pieces, five of which depend on Korean on-screen cards to explain the premise. So the one lane the peer comparison says to build is currently produced in a form that cannot cross a border.",
          evidence: [
            "55 of 73 fully survive translation, 15 partially, 3 not at all",
            "Dance was the most common fully-surviving format across all five passes",
            "The failures are the subway game, the personality test, the conversation piece, the profile interview and the props gag",
            "Median engagement of 28.96 percent, the highest of the six peers analysed, says holding power is not the constraint",
          ],
          pivot: {
            title: "Build the personality lane translation-first",
            actions: [
              "Design every new personality format so the premise is visual and the Korean is decorative rather than load-bearing",
              "Subtitle the five existing personality pieces and re-release them into the launch markets as a test",
              "Use the dance output as the acquisition layer and the personality output as the retention layer, rather than treating them as one feed",
            ],
          },
        },
      ],
      footnote: "Store built September 2026, 123 items, 70.9 minutes, all indexed and performance-joined. Video length was tested as a variable and separates nothing between performance bands. No member-level performance claims are made, because the corpus cannot support them.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      philosophy: "Every surface was checked rather than assumed, with a working control tested against each one. The good news is that most of what is needed already exists and is switched off.",
      intro: "This is a surface-by-surface verification of every owned property: website, link-in-bio, fan platform, fandom, commerce, retail, lightstick and DSP profiles. The headline is not that nothing was built. It is that a capture programme was provisioned, on a platform the label already uses successfully for another group on its own roster, and then left unpublished.",
      subBlocks: [
        {
          label: "A",
          title: "First-Party Data Capture",
          objective: "Establish, with evidence, whether any first-party data capture exists on any owned surface.",
          strategy: "The official smart link for the release declares a fan-data campaign on the distributor's CRM platform as its origin URL. That campaign address resolves and is recognised by the platform, which distinguishes it from an address that was never created, and it renders a page saying it no longer exists, carrying zero input fields. The equivalent address for another group on the same label roster returns a live capture form with fifteen inputs, including mailing-list assignment, triggered sends, newsletter opt-ins and a pre-save. Whatever was provisioned for KEYVITUP is not collecting, on tooling the label already operates successfully elsewhere.",
          components: {
            heading: "Verified absent across every owned surface",
            items: [
              "Any working email or SMS capture, anywhere. The provisioned campaign renders zero input fields against a control that renders fifteen",
              "Any CRM script on any label web property. Seven platforms were scanned for and none is present",
              "Any analytics or advertising pixel on the label site. No Google Analytics, no Tag Manager, no Meta pixel",
              "A real official website. The registered group domain serves a 497-byte frame of the Instagram profile and answers on unsecured HTTP only",
              "Any paid membership on any platform, and any fan club to join",
              "An official lightstick, at 148 days past debut",
              "An official store, and any merchandise at all beyond album variants, checked across roughly seventeen retail surfaces",
            ],
          },
          tactics: [
            "Republish the provisioned capture campaign using the roster template that already works, which is a configuration task rather than a build",
            "Add a capture block to the link-in-bio, which supports email and SMS natively and currently uses neither",
            "Put a pixel on every owned surface before any media spend, so the first flight builds an audience rather than only buying impressions",
            "Attach capture to the next pre-order rather than routing it straight to a checkout",
          ],
        },
        {
          label: "B",
          title: "Fan Platform Configuration",
          objective: "Establish what fan-communication infrastructure exists and what it is configured to do.",
          strategy: "The group has one fan-platform presence and it is live and activated. Its own configuration shows what it is permitted to do: membership disabled, donations disabled, phone verification disabled, private messaging hidden, group messaging hidden, live shows hidden, listening parties hidden, ranking polls off, and the translation service disabled. The supported language list runs Korean, English, Japanese and two Chinese variants, which excludes every language spoken in the four markets that produced the launch audience. The fandom name, KEYPER, was formally announced on this platform. A fan who wants to join KEYPER has nowhere to do it.",
          components: {
            heading: "What is switched off that could be switched on this quarter",
            items: [
              "Membership, which is the fan club the fandom name currently has no home for",
              "Phone verification, which is the only SMS-adjacent capture available on the platform today",
              "Private and group messaging, the retention product the peer set operates",
              "Live shows and listening parties, which are the cheapest recurring contact a rookie group can run",
              "Ranking polls, which convert passive followers into a countable, addressable fandom",
              "Translation, on a platform whose language list already excludes the group's biggest markets",
            ],
          },
          kpis: [
            "Membership live with a registered member count by end of quarter one",
            "First measurable owned-contact base, from zero",
            "Translation on, with the launch-market languages added",
          ],
        },
        {
          label: "C",
          title: "Commerce and Retail",
          objective: "Establish where a fan outside Korea can actually buy something, and who captures the data when they do.",
          strategy: "Physical distribution exists and is broad: the album is carried across Korean retail, two United States-domiciled specialist retailers, and third-party marketplace listings on the major American platforms. What does not exist is a first-party relationship anywhere. Every United States surface reviewed is a reseller, one national chain lists a catalog entry alongside peer titles that carry retailer exclusives, and one major national chain returned no result for the record. The official smart link lists fifteen streaming destinations and not a single place to buy the physical. There is no official store, and no merchandise line of any kind.",
          components: {
            heading: "The gaps between demand and a transaction",
            items: [
              "No buy link on the official smart link, which is the one asset every campaign drives to",
              "No retail exclusive anywhere, against direct peers holding them at the same accounts",
              "No presence at the largest fandom-commerce platform in the category, where another group on the same roster is already listed",
              "No merchandise beyond album version variants across roughly seventeen surfaces",
              "No lightstick at 4.9 months, which is the standard second-cycle fandom purchase",
            ],
          },
          tactics: [
            "Add physical buy links to the smart link before the next release, which costs nothing and captures existing traffic",
            "Negotiate one retail exclusive per priority market for the second EP, with pre-order capture attached to each",
            "Open the fandom-commerce listing that the roster already has a relationship with",
            "Scope the lightstick to land with the second cycle rather than the third",
          ],
        },
        {
          label: "D",
          title: "Assets Already in Place",
          objective: "Separate what is missing from what is present and simply unexploited, because the two need different responses.",
          strategy: "The audit found real, well-maintained assets. The Spotify profile is claimed and actively managed, with the Artist Pick set and a complete biography, which proves the tooling is in the label's hands and is being used. The YouTube presence is an Official Artist Channel with 272 videos, a live Shorts tab and an active Community tab. Physical distribution reaches globally. Eight official social accounts are live. Two of them, on Chinese platforms with roughly 15,700 combined followers, are label-run and verified and are linked from nowhere at all, which is free audience sitting behind a door with no handle.",
          components: {
            heading: "Assets present and under-used",
            items: [
              "Spotify profile actively managed, Artist Pick set, biography complete",
              "Official Artist Channel on YouTube with Shorts and Community both live, and memberships not yet enabled",
              "Three music videos carrying roughly 13 million combined views, roughly three hundred times the subscriber count",
              "Two verified Chinese-platform accounts, roughly 15,700 followers, unlinked from any other property",
              "An Apple Music profile live since release day, carrying no editorial biography prose",
              "A Philippine fan account and a Brazilian fan account already organising with no support",
            ],
          },
          kpis: [
            "Every owned surface cross-linked, which is a one-day task currently undone",
            "YouTube memberships enabled",
            "Apple Music editorial biography submitted",
          ],
        },
      ],
      footnote: "Every surface above was checked on September 3, 2026 against a working control. Two items remain unverified in either direction and are not counted above: Spotify Canvas, which renders only in the mobile app, and Instagram fan-account presence, which sits behind a login wall.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "Philosophy",
      title: "Core Strategy & Philosophy",
      thesis: "Stop renting the audience. The group already keeps a higher share of the people it reaches than any of its debut peers. Give it somewhere to put them, then go and get more of them from the four countries that raised their hands first.",
      hierarchy: [
        {
          label: "Foundation / Owned Capture",
          description: "Everything else compounds on this or it does not compound at all. Republish the provisioned capture campaign, switch on the fan platform features that are already paid for, put a pixel on every surface, and give KEYPER somewhere to register. This is the cheapest work in the plan and the only work that makes the next release worth more than this one. Until it exists, every listener is rented from a playlist and every dollar spent buys a rental.",
        },
        {
          label: "Amplifier 1 / The Markets That Already Answered",
          description: "Indonesia, Malaysia, Thailand, the Philippines and Latin America produced the launch audience with zero promotional support and have received nothing since. Enter them properly: translated content first because it costs almost nothing, then targeted paid against the short-form audience that is still intact, then a seeded fan-page network in the places where the fandom has already tried twice to organise itself and found nothing to join.",
        },
        {
          label: "Amplifier 2 / The Content System",
          description: "The account is well made and pointed nowhere. Two named franchises, one personality and one performance, on fixed weekly slots. The full group, on location, as the default shape rather than the exception. A call to action on the content that already reaches people. Release assets running continuously instead of in a four-week burst. None of this requires a bigger production budget; all of it requires a decision.",
        },
        {
          label: "Amplifier 3 / Conversion Moments",
          description: "Physical buy links on the smart link, one retail exclusive per priority market with pre-order capture attached, a lightstick scoped to the second cycle, and in-person activation repeated where the audience actually is rather than only where the industry gathers. The August Los Angeles run proved this works. It produced the largest listener market the group now has and captured not one contact detail.",
        },
      ],
      messaging: [
        "Say it plainly: the debut worked, and the machine to hold what it produced was never switched on.",
        "Lead with conversion, not with scale. This group keeps people better than every act that debuted alongside it, and that is the fact worth building a story around.",
        "Never promise streaming numbers. Streams follow from reach and capture and cannot be forecast honestly at this scale, so the committed metrics here are owned contacts, followers, and units.",
        "Treat the launch markets as an advantage rather than an accident. An audience that assembled itself with no help is the cheapest audience anyone will ever sell to.",
      ],
      footnote: "The order matters more than any single item in it. Capture before reach, reach before conversion moments. Running these in parallel is how the first cycle ended: a large audience, briefly, and nothing left over.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Fandom",
      title: "Vertical 1 / Fandom & Conversion Infrastructure",
      philosophy: "The foundation. Everything in this vertical exists to turn rented listeners into owned contacts, starting from a base of zero.",
      intro: "This vertical runs first and runs alone for the first three weeks, because every other line in the plan is worth more once it exists. Nothing here requires new tooling. The capture platform is already provisioned, the fan platform is already activated, and the label already operates both successfully for another group on its own roster.",
      subBlocks: [
        {
          label: "A",
          title: "Republish the Capture Programme",
          objective: "A working first-party email and SMS capture surface, live in every market, inside three weeks.",
          strategy: "The fan-data campaign provisioned on the distributor's CRM platform is republished using the template already running for another group on the roster, rather than built from scratch. Consent language is written per market so that the Korean and non-Korean flows are separated, since Korean data law forbids bundling a signup with anything else and requires Korean-language notices and explicit opt-outs. Non-Korean fans are captured directly; Korean fans continue through the fan platform, which is where the law puts them.",
          components: {
            heading: "Build order",
            items: [
              "Republish the provisioned campaign with the roster template, market-separated consent",
              "Capture block added to the link-in-bio, which supports email and SMS natively and uses neither today",
              "Pixel deployed to every owned surface before any media runs",
              "Capture attached to the next pre-order rather than routing straight to checkout",
              "A single destination page that the content in vertical 2 can actually point at",
            ],
          },
          kpis: [
            "First owned contacts recorded, from a base of zero",
            "Capture live in five languages including Bahasa Indonesia, Thai and Spanish",
            "Pixel firing on every owned surface before the first paid dollar",
            "Opt-in rate measured per market rather than in aggregate",
          ],
          timeline: "Weeks 1 to 3",
        },
        {
          label: "B",
          title: "Switch On the Fan Platform",
          objective: "Give KEYPER somewhere to exist, using features that are already paid for and currently disabled.",
          strategy: "The existing fan-platform space has membership, donations, phone verification, private and group messaging, live shows, listening parties, ranking polls and translation all switched off. Each one is a configuration change rather than a build. Membership goes first because the fandom already has a name and no home. Translation and the four missing launch-market languages go alongside it, because a membership that only speaks Korean, English, Japanese and Chinese excludes every market that produced the launch audience.",
          components: {
            heading: "Sequence",
            items: [
              "Membership enabled and priced, with a free tier so the first cohort is measurable",
              "Translation enabled, and Bahasa Indonesia, Thai, Malay and Spanish added to the language list",
              "Private messaging enabled as the retention product the peer set operates",
              "Ranking polls enabled, which convert passive followers into a countable, addressable fandom",
              "A recurring live slot, which is the cheapest repeat contact available to a rookie group",
            ],
          },
          kpis: [
            "Registered members, from zero",
            "Weekly active share of registered members",
            "Non-Korean membership share, which is the number that proves the market thesis",
          ],
          timeline: "Weeks 2 to 6",
        },
        {
          label: "C",
          title: "Fan-Page Network Seeding",
          objective: "Give the organised fandom something to attach to in the markets where it has already attempted to form.",
          strategy: "The entire organised fan network totals roughly 2,350 accounts across twelve handles, which is 1.4 percent of the TikTok following, and there are zero fan-run accounts on TikTok, the group's largest platform. Two Indonesian fanbase accounts were created and abandoned with zero posts, which is demand looking for something to join and finding nothing. The network is seeded in the launch markets first, in local language, and connected to the capture surface built in block A.",
          components: {
            heading: "Priority markets, in order",
            items: [
              "Indonesia, where two accounts were created and abandoned and the peak listener figure was 140,221",
              "Malaysia, at a 102,330 peak with no organised presence at all",
              "The Philippines, where a fan account already exists and is active with no support",
              "Spanish-language Latin America, where there is currently no account of any kind against Lima ranking fourth among listener cities",
              "Thailand, at a 22,477 peak and no presence",
            ],
          },
          kpis: [
            "Network reach as a multiple of the current 2,350 baseline",
            "First TikTok fan presence, against a current base of zero",
            "Contacts captured through network posts rather than owned posts",
          ],
          timeline: "Weeks 4 to 12",
        },
      ],
      footnote: "Korean data law forbids bundling signups with other actions, requires Korean-language notices and requires explicit opt-outs, and double opt-in flows do not complete reliably on Korean mobile numbers. The design above captures non-Korean fans directly and leaves Korean fans on the fan platform by intent, not by omission.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "Digital",
      title: "Vertical 2 / Digital Marketing",
      philosophy: "Reach is the constraint, not creative. The content already holds the highest engagement rate in its class; it simply reaches too few people and points them nowhere.",
      intro: "Paid begins only once the capture surface in vertical 1 is live, so that the audience it buys lands somewhere permanent. Everything here starts small and deliberately, is measured against a market-level baseline, and scales only where it moves. No line in this vertical promises a streaming number.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social, Staged by Market",
          objective: "Rebuild reach in the markets that already proved appetite, at a cost per follower that justifies scaling.",
          strategy: "Markets enter in sequence rather than all at once, so that each one produces a readable result instead of an averaged one. Indonesia and Malaysia go first because they were the largest launch markets and are the cheapest media in the set. Spanish-language Latin America follows, because the short-form audience is already there and no competitor has claimed it. The United States runs last and smallest, because it is the only market where a promotional investment has already been made and the follow-up is a retargeting job rather than an acquisition one. Creative is drawn from the account's proven shapes: full group, on location, with an end card.",
          components: {
            heading: "Test structure",
            items: [
              "One market live at a time with the rest dark, so attribution is readable rather than blended",
              "Creative built only from top-decile-shaped content: full group, on location, with a destination",
              "Every ad points at the capture surface, not at a streaming link",
              "A weekly scale-or-stop rule per market with a stated floor below which spend buys noise",
              "Retargeting pool built from the August in-person audience and the existing short-form engagers",
            ],
          },
          kpis: [
            "Cost per captured contact by market, which is the only committed efficiency metric here",
            "Cost per Spotify follower by market",
            "Follower-to-listener ratio held above 0.40 while listeners rise",
            "Baseline against actual, measured weekly per market rather than at campaign level",
          ],
          timeline: "Weeks 4 to 12",
        },
        {
          label: "B",
          title: "Two Content Franchises on Fixed Slots",
          objective: "Give a new follower something to follow, which is the single largest structural gap the video analysis found.",
          strategy: "One personality franchise and one performance franchise, each named, each hashtagged, each running on a fixed weekly slot held even in weeks with nothing to promote. The personality format is designed translation-first, so the premise is visual and any Korean is decorative rather than load-bearing, which fixes the tension identified in finding 7. The performance franchise carries the choreography strength the group already has into a shape that repeats. The comparison point is on the label's own roster, where the other group runs the personality lane at roughly seven times the rate.",
          components: {
            heading: "Format rules, drawn from the account's own data",
            items: [
              "Full group as the default shape, since 44 percent of the top band shows five or more members against 13 percent of the bottom",
              "Shot on location by default, since half the top band was and 71 percent of the bottom band was not",
              "Every release-adjacent post closes on a one-second end card with title, date and destination",
              "Solo content continues, but attached to a named series rather than posted loose",
              "Platform-native mechanics introduced on TikTok, where the corpus currently shows none",
            ],
          },
          kpis: [
            "Median views per franchise post against the 40,100 account baseline",
            "Share of weekly output carrying a call to action, from a base of roughly 1 percent",
            "Follower growth attributable to franchise slots",
          ],
          timeline: "Weeks 3 to 12, ongoing",
        },
        {
          label: "C",
          title: "Unmanaged Reach",
          objective: "Capture the reach the account is already earning and currently leaves unmanaged.",
          strategy: "Three items cost nothing and are worth doing before any media spend. Instagram beats TikTok on 28 of 33 identical same-day posts, at a median pairwise advantage of 1.56 times on 19 percent fewer followers, and it is currently treated as a mirror rather than a channel. The two verified Chinese-platform accounts carrying roughly 15,700 followers are linked from nowhere. And the three music videos hold roughly 13 million views against 43,000 YouTube subscribers, which is roughly three hundred views per subscriber and the largest unconverted asset the group owns.",
          components: {
            heading: "Immediate, zero-cost items",
            items: [
              "Treat Instagram as a primary channel with its own posting decisions rather than as a TikTok mirror",
              "Cross-link every owned surface, including the two unlinked Chinese-platform accounts",
              "Enable YouTube channel memberships and add end screens to the three music videos",
              "Subtitle the existing library, of which 75 percent already works with no Korean",
              "Re-release the five Korean-dependent personality pieces subtitled, as a launch-market test",
            ],
          },
          kpis: [
            "YouTube subscriber conversion rate against music video views",
            "Instagram treated as primary, measured by non-mirrored post share",
            "Subtitled library share, from a base of zero",
          ],
          timeline: "Weeks 1 to 5",
        },
      ],
      footnote: "Every market line carries a worst, expected and best case and a test-then-scale rule. Streaming volume is reported weekly against a baseline and is explicitly not a committed metric, because it cannot be forecast honestly at this scale and any agency that puts a number on it is guessing.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "Vertical 3 / DSP Strategy",
      philosophy: "The first cycle proved the group can be placed. It also proved that placement without capture is a lease. This vertical treats editorial as an accelerant, never as the plan.",
      intro: "Two facts frame this work. Editorial support carrying 1.73 million followers was granted at launch and withdrawn inside seven weeks, and monthly listeners tracked it almost exactly. Separately, an album track with no video and no campaign is the only song on the EP currently accelerating, after an algorithmic list picked it up in late August. The music travels on its own. The job is to build enough owned demand that the next editorial decision is a bonus rather than a dependency.",
      subBlocks: [
        {
          label: "A",
          title: "Placement Case for the Next Release",
          objective: "Enter the next cycle with a stronger editorial argument than the debut had, built on evidence rather than novelty.",
          strategy: "A debut gets placed on potential. A second release gets placed on evidence. The evidence a Spotify editor responds to is save rate, completion, follower conversion and market-level traction, all of which the plan generates in verticals 1 and 2 before the pitch is made. The pitch is prepared per market rather than centrally, because the group's strongest markets are not the ones a Korean-centred pitch would lead with. Malaysian, Indonesian and Latin American editorial teams are approached with their own market data, which is a materially different conversation from the one the debut had.",
          components: {
            heading: "Pitch inputs to build first",
            items: [
              "Follower conversion evidence, which the debut cycle never generated because nothing captured it",
              "Market-level traction data for Indonesia, Malaysia, the Philippines and Latin America",
              "The catalog floor, at roughly 7,900 streams a day with no active promotion",
              "The algorithmic pickup on the non-single track, as evidence the music holds without a campaign",
              "The engagement rate, highest of the six peers analysed here, which is a genuine differentiator in a pitch",
            ],
          },
          kpis: [
            "Editorial placements held at day 30 and day 60 after the next release, rather than at day 1",
            "Share of total playlist reach that is not Spotify-owned, from a current 17 percent",
            "Save rate and completion against the debut cycle",
          ],
          timeline: "Weeks 5 to 12, into the next cycle",
        },
        {
          label: "B",
          title: "Reduce the Concentration Risk",
          objective: "Stop 83 percent of playlist reach sitting in eight lists the group does not control.",
          strategy: "Of 206 current Spotify playlists, eight are Spotify-owned and carry 498,745 of the 602,175 total reach. Four of those eight are algorithmic artist radio lists that can disappear without a human decision. The remaining 198 lists carry 103,430 between them and 194 of them have fewer than 1,000 followers. The counterweight is a deliberate independent and curator programme in the launch markets, plus the owned surfaces from vertical 1, so that the next removal costs the group a smaller share of its reach than the last one did.",
          components: {
            heading: "Diversification",
            items: [
              "Independent and market-native curator programme in Indonesia, Malaysia and Latin America",
              "Apple Music editorial biography submitted, which is currently absent",
              "Second-largest DSP relationships opened in the launch markets rather than only in Korea and the United States",
              "Owned surfaces carrying pre-save and follow prompts so that reach converts into a permanent follower rather than a monthly listener",
            ],
          },
          kpis: [
            "Non-Spotify-owned share of reach, from 17 percent today",
            "Playlist reach concentration in the top eight lists, from 83 percent today",
            "Pre-saves captured on the next release, from a base of zero",
          ],
          timeline: "Weeks 6 to 12",
        },
      ],
      footnote: "Playlist history, follower reach and peak positions: Chartmetric, September 3 2026. No editorial outcome is guaranteed anywhere in this vertical; editorial is treated as an accelerant on owned demand, which is the only posture that survives another removal.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Market Entry
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "PR",
      title: "Vertical 4 / PR & Market Entry",
      philosophy: "The press programme has been well executed and aimed at one market. The opportunity is to aim the same machine at the markets that already answered.",
      intro: "The group has run a real international press programme: eleven English-language interviews, an in-person United States run around KCON Los Angeles, a fan meet, and a partner activation, with interviews scheduled at Korean midnight to hit American business hours. That work produced a measurable result and the United States is now the largest single tracked listener market. The gap is that the same effort has never been pointed at Southeast Asia or Latin America, where two label-serviced placements represent the entire programme to date.",
      subBlocks: [
        {
          label: "A",
          title: "Market Entry Sequence",
          objective: "First promoted presence in the markets that produced the launch audience.",
          strategy: "Entry is staged and it starts with the cheapest possible signal rather than with a showcase. Translated content and a local-language acknowledgment beat come first, because they cost almost nothing and they test whether the dormant audience responds before anyone books a flight. Local press and creator relationships follow in the markets that respond. Only then does an in-person activation get scoped, and it gets scoped where the response was strongest rather than where the industry calendar happens to run.",
          components: {
            heading: "Entry sequence per market",
            items: [
              "Translated content and one acknowledgment beat, at near-zero cost",
              "Local music and youth press, which the group has never approached in these markets",
              "Creator and fan-network seeding, connected to the capture surface",
              "Radio and DSP market teams approached with their own market data",
              "In-person activation scoped only where the earlier steps produced a measurable response",
            ],
          },
          kpis: [
            "First local-language coverage per market, from a base of zero in five markets",
            "Contacts captured per market",
            "Listener movement against the May peak, by market, reported rather than committed",
          ],
          timeline: "Weeks 3 to 12",
        },
        {
          label: "B",
          title: "Converting Work Already Done",
          objective: "Retroactively capture the audience the August activations produced and never collected.",
          strategy: "Three activations ran in Los Angeles across four days in August, produced a Top 20 YouTube Shorts placement and a measurable listener result, and captured no contact details because nothing existed to capture them. That audience is still reachable through retargeting and through the platforms it engaged on. The same is true of every music video viewer: roughly 13 million views against 43,000 subscribers. This block treats the last five months of work as inventory rather than as history.",
          components: {
            heading: "Recovery items",
            items: [
              "Retarget the August engagement pools into the capture surface",
              "End screens and subscribe prompts on the three music videos, currently absent",
              "A follow-up contact to everyone who attended in person, which requires the capture surface to exist first",
              "A consistent public narrative, since the group name currently carries four different official meanings across label statements, member interviews and album copy",
            ],
          },
          kpis: [
            "Contacts recovered from existing engagement pools",
            "Subscriber conversion on music video traffic",
            "One agreed public account of the group name and story",
          ],
          timeline: "Weeks 1 to 6",
        },
      ],
      footnote: "Press coverage reviewed across eleven English-language interviews and Korean trade press, September 2026. The brand-consistency item in block B costs nothing to resolve and compounds every other line on this page.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "Partners",
      title: "Partner-Led Workstreams",
      philosophy: "The work below sits with the label and its partners. Crowd Control Digital provides the strategy, the data and the coordination, and does not execute these lines.",
      intro: "Several of the highest-value items in this plan are decisions rather than campaigns, and they belong to the people who already hold the relationships. They are set out here so that ownership is explicit and nothing falls between two parties.",
      subBlocks: [
        {
          label: "A",
          title: "Label-Owned Decisions",
          objective: "The items that unlock the rest of the plan and cannot be bought.",
          components: {
            heading: "Held by iNKODE",
            items: [
              "Republishing the provisioned capture campaign, which requires a decision from the distributor relationship rather than a build",
              "Enabling the disabled fan-platform features, which is a configuration change on an already-active space",
              "The release calendar for the second EP, which every timeline in this document is written against",
              "Lightstick scoping and the merchandise line, both absent at 4.9 months",
              "A single agreed public account of the group name and origin story",
            ],
          },
        },
        {
          label: "B",
          title: "Distribution and Retail",
          objective: "The commercial surfaces that convert demand into units and data.",
          components: {
            heading: "Held by the distributor and retail partners",
            items: [
              "Physical buy links added to the official smart link, which currently lists fifteen streaming destinations and no retail",
              "One retail exclusive per priority market for the second EP, with pre-order capture attached",
              "A fandom-commerce listing, where another group on the same roster already has a relationship",
              "Territory-level DSP relationships in the launch markets rather than only in Korea and the United States",
            ],
          },
        },
        {
          label: "C",
          title: "Transparent Arts",
          objective: "Relationship, positioning and market access outside Korea.",
          components: {
            heading: "Held by Transparent Arts",
            items: [
              "United States go-to-market relationships and the retail and showcase path",
              "Regional partner introductions in Southeast Asia and Latin America",
              "Press and creative positioning outside Korea",
              "On-the-ground coordination for any in-person activation scoped in vertical 4",
            ],
          },
        },
      ],
      footnote: "Crowd Control Digital provides strategy, measurement and coordination across all three blocks and executes none of them. Where a line in verticals 1 through 4 depends on an item above, that dependency is called out in the timeline.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve weeks, sequenced so that capture exists before any media is bought and the free reach is fixed before anything is paid for. The first three weeks contain no spend at all. Market entry is staged one at a time rather than in parallel, so each market produces a readable result. The grid assumes a second release lands around week ten; the cells around it are illustrative and move with the actual date.",
      weeks: [
        { index: 1, label: "W1", dates: "Week 1" },
        { index: 2, label: "W2", dates: "Week 2" },
        { index: 3, label: "W3", dates: "Week 3" },
        { index: 4, label: "W4", dates: "Week 4" },
        { index: 5, label: "W5", dates: "Week 5" },
        { index: 6, label: "W6", dates: "Week 6" },
        { index: 7, label: "W7", dates: "Week 7" },
        { index: 8, label: "W8", dates: "Week 8" },
        { index: 9, label: "W9", dates: "Week 9" },
        { index: 10, label: "W10", dates: "Week 10", highlight: true, note: "RELEASE (TBD)" },
        { index: 11, label: "W11", dates: "Week 11" },
        { index: 12, label: "W12", dates: "Week 12" },
      ],
      workstreams: [
        {
          name: "Owned Capture",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "high", label: "LAUNCH" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "PRESAVE" },
            { weekIndex: 10, intensity: "high", label: "PEAK" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Fan Platform",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "SETUP" },
            { weekIndex: 3, intensity: "high", label: "MEMBER" },
            { weekIndex: 4, intensity: "high", label: "LANG" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "LIVE" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "LIVE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Free Reach Fixes",
          cells: [
            { weekIndex: 1, intensity: "high", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "LINKS" },
            { weekIndex: 3, intensity: "high", label: "SUBS" },
            { weekIndex: 4, intensity: "medium", label: "SUBS" },
            { weekIndex: 5, intensity: "medium", label: "DONE" },
          ],
        },
        {
          name: "Content Franchises",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "DESIGN" },
            { weekIndex: 4, intensity: "high", label: "LAUNCH" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 4, intensity: "low", label: "TEST" },
            { weekIndex: 5, intensity: "medium", label: "ID/MY" },
            { weekIndex: 6, intensity: "medium", label: "ID/MY" },
            { weekIndex: 7, intensity: "medium", label: "LATAM" },
            { weekIndex: 8, intensity: "medium", label: "LATAM" },
            { weekIndex: 9, intensity: "high", label: "SCALE" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high", label: "SCALE" },
            { weekIndex: 12, intensity: "medium", label: "READ" },
          ],
        },
        {
          name: "Fan Page Network",
          cells: [
            { weekIndex: 4, intensity: "medium", label: "SEED" },
            { weekIndex: 5, intensity: "medium", label: "SEED" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "DSP & Playlist",
          cells: [
            { weekIndex: 5, intensity: "low", label: "BUILD" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium", label: "CURATE" },
            { weekIndex: 8, intensity: "high", label: "PITCH" },
            { weekIndex: 9, intensity: "high", label: "PITCH" },
            { weekIndex: 10, intensity: "high", label: "LIVE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium", label: "HOLD" },
          ],
        },
        {
          name: "PR & Market Entry",
          cells: [
            { weekIndex: 3, intensity: "low", label: "PREP" },
            { weekIndex: 4, intensity: "medium", label: "SEA" },
            { weekIndex: 5, intensity: "medium", label: "SEA" },
            { weekIndex: 6, intensity: "medium", label: "LATAM" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "ANNCE" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "Retail & Physical",
          cells: [
            { weekIndex: 6, intensity: "low", label: "SCOPE" },
            { weekIndex: 7, intensity: "medium", label: "DEALS" },
            { weekIndex: 8, intensity: "medium", label: "DEALS" },
            { weekIndex: 9, intensity: "high", label: "PREORD" },
            { weekIndex: 10, intensity: "high", label: "ONSALE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Audit close and capture build, no spend",
          items: [
            "Republish request submitted for the provisioned capture campaign, with market-separated consent copy",
            "Pixel deployed to every owned surface so that later spend builds an audience rather than only buying impressions",
            "Cross-link every owned property, including the two verified Chinese-platform accounts currently linked from nowhere",
            "YouTube memberships enabled and end screens added to the three music videos",
          ],
        },
        {
          weekIndex: 3,
          title: "Capture goes live and the franchises are designed",
          items: [
            "Capture surface live in five languages, with the first owned contacts recorded from a base of zero",
            "Fan-platform membership enabled so KEYPER has somewhere to register",
            "Subtitled library shipped, starting with the five Korean-dependent personality pieces",
            "Both content franchises designed, named and slotted, translation-first by construction",
          ],
        },
        {
          weekIndex: 5,
          title: "First market live, everything else dark",
          items: [
            "Indonesia and Malaysia paid live, with every other market held dark so attribution is readable",
            "Fan-page network seeded in Indonesia, where two accounts were created and abandoned",
            "Fan-platform translation on, with Bahasa Indonesia, Thai, Malay and Spanish added",
            "First weekly baseline-against-actual read published per market",
          ],
        },
        {
          weekIndex: 8,
          title: "Second market live and the editorial pitch goes out",
          items: [
            "Spanish-language Latin America live, with the first Spanish content the group has ever published",
            "Editorial pitch prepared per market rather than centrally, carrying market-level traction data",
            "Retail conversations opened for one exclusive per priority market with pre-order capture attached",
            "Scale-or-stop decision taken on Indonesia and Malaysia against the stated floor",
          ],
        },
        {
          weekIndex: 10,
          title: "Release week, with somewhere for the traffic to land",
          items: [
            "All markets live simultaneously for the first time, into a capture surface that now exists",
            "Physical buy links live on the smart link, which carried none through the entire debut cycle",
            "Fan-platform live session and a ranking poll, converting followers into a countable fandom",
            "Release assets running continuously rather than in a four-week burst, closing the gap that ran 110 posts long",
          ],
        },
        {
          weekIndex: 12,
          title: "Read the cycle honestly",
          items: [
            "Owned contacts, followers and units reported as committed metrics",
            "Listeners and streams reported against the weekly baseline and explicitly not as promises",
            "Follower-to-listener ratio read against a rising listener base, which is the real test",
            "Market-by-market cost per contact published, with the next cycle scoped only against what moved",
          ],
        },
      ],
      footnote: "The release date in week ten is a placeholder and every cell around it moves with the actual date. The first three weeks carry no media spend by design, because buying reach into a surface that cannot hold it is what the debut cycle already tested.",
    },
  ],
};
