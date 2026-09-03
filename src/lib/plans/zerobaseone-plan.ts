import type { StrategyPlanData } from "../plan-context";

export const zerobaseonePlanProposal: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/zerobaseone/og-image-plan.png",
  partSwitch: {
    currentCode: "PLAN",
    slug: "zerobaseone",
    code: "AUDIT",
    label: "the brand audit",
    eyebrow: "Part One",
    endTitle: "The Brand Audit",
    endBlurb: "The evidence this plan is built on: market position against fourteen peers, two years of consumption and decay era by era, the market and city distribution, 169 videos analysed frame by frame, and every owned surface inspected live.",
    endCta: "Read the audit",
  },

  cover: {
    label: "Part Two / Growth Plan",
    title: "The Growth Plan",
    subtitle: "Three workstreams built on the audit findings: a first-party capture layer for the United States, a comeback-ready system that drops onto whatever date is set, and a Japan defence. The audit this plan is built on sits in Part One.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/zerobaseone/zerobaseone-hero.jpg",
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview and Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview and Objective",
      subtitle: "The audience is already acquired. Three workstreams to own it, hold Japan, and be ready the day a comeback date exists.",
      body: [
        "Part One measured five things. The Spotify follower base reached an all-time high of 1,485,177 and rose without interruption through the roster change, taking the ratio from 0.547 to 1.232. Ascend- returned a 1.93x listener multiple, the largest response to any release in two years, off the lowest base in two years. The United States is the number one listening market at 182,833 monthly listeners and South Korea does not appear in the country table at all. Across 169 analysed videos, the four departed members have drawn level on TikTok within the top-performing band of each account, though ZEROBASEONE still leads on full-inventory medians, one of 59 posts carries a Japan signal at caption level while the Japanese first week has fallen 65 percent, and the group's own posts ask for things nineteen percent of the time while the asks that were itemised all point at a platform somebody else owns. And on every owned surface inspected, there is no United States email address, no advertising pixel on the group's own commerce, and no membership tier on 2.12 million YouTube subscribers.",
        "What follows is not a campaign. Two of these three workstreams run whether or not a comeback is announced, because the audit's central finding is that the audience has already been paid for and simply is not owned. Workstream one builds the United States capture layer and the measurement that makes every future dollar cheaper. Workstream two is a comeback system written relative to release week, ready to drop onto a calendar the moment WAKEONE sets one. Workstream three defends Japan, where the first week is falling faster than Korea and where the fix costs almost nothing because the content already exists and simply never reaches the global accounts. Section 06 lists what the artist team should do directly, at no cost and with no involvement from us.",
      ],
      supports: {
        heading: "The Three Workstreams",
        items: [
          "First-party capture and measurement, United States. Always-on, release-independent, and the prerequisite for everything else.",
          "Comeback readiness. A paid, creator and content system written relative to release week and held ready.",
          "Japan defence. Language, distribution and calendar work against a first week down 65 percent in nineteen months.",
        ],
      },
      goals: {
        heading: "What This Plan Does Not Promise",
        items: [
          "No streaming guarantee. Nobody can separate a paid stream from one the record earns anyway, and at any realistic budget the lift can sit inside normal weekly variance.",
          "No live or touring line. Crowd Control Digital does not book, promote or sell live, and the audit's live findings sit in Part One as evidence rather than as a service.",
          "No claim on the Korean physical business. The 66 percent album correction is arithmetic on a five-member lineup and is not a marketing problem to solve.",
          "Every line carries a worst, expected and best case, a test spend, and a rule for scaling or stopping.",
        ],
      },
      footnote: "This plan is strategy only. Scope, fees and media weight are set separately once the direction is agreed. Data as of 3 September 2026; the audit behind every figure is in Part One.",
    },

    // ===================================================================
    // 02. Core Strategy and Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "Philosophy",
      title: "Core Strategy and Philosophy",
      thesis: "The expensive part is already done. Roughly 13.2 million followers, a billion YouTube views, 831 million cumulative Spotify streams and full United States retail distribution were all bought and paid for. What was never built is the layer that turns any of it into something the artist owns.",
      hierarchy: [
        {
          label: "1. Own before you grow",
          description: "There is no free way for any fan anywhere to identify themselves to this artist. The only owned identity surface costs 22 dollars and sits behind a Korean application. Until a United States fan can raise their hand for free, every dollar of media spent on them is rented reach that has to be bought again next cycle.",
        },
        {
          label: "2. Measure before you spend",
          description: "The membership and merchandise checkout carries no advertising tracking of any kind. Every person who has ever paid this group directly is currently unusable as a seed audience. A pixel is a one-line change that retroactively values an audience already acquired, and it makes every subsequent buy cheaper.",
        },
        {
          label: "3. Build for the market that is actually there",
          description: "The United States is the largest listening market and it is being run under Korean rules by default. Korean privacy practice constrains the Korean side for good reasons. Those constraints do not apply in the United States and should not be inherited there.",
        },
        {
          label: "4. Fund what is already winning",
          description: "Eighty-six percent of output is self-generated and that is where the top-performing posts are. Release assets index at 0.83. Three or more members on screen indexes at 1.22 while the account makes more solo posts than group posts. The corrections here are free.",
        },
        {
          label: "5. Defend before you expand",
          description: "The Japanese first week has fallen from 257,157 to 90,640 across three EPs. That is a faster decline than Korea and it is happening in the second-largest commercial market for the group. One of 59 global posts carries a Japan signal. Defence is cheaper than recovery.",
        },
      ],
      messaging: [
        "The fandom did not leave. It is the only metric that never fell.",
        "The record worked. The largest streaming response in two years came from the smallest base in two years.",
        "The gap is ownership, not attention.",
      ],
      footnote: "This cascade is the order the workstreams run in, not a ranking of importance. Capture and measurement come first because everything downstream is cheaper once they exist.",
    },

    // ===================================================================
    // 03. Workstream One
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Capture",
      title: "Workstream One: First-Party Capture, United States",
      philosophy: "Always-on and release-independent. This runs whether or not a comeback is announced, because the audience it captures already exists and is currently walking past.",
      intro: "The United States is 182,833 monthly listeners, the largest single market, with zero owned contact records. Six United States appearances in three years, all third-party festival and showcase slots, so no ticketing file exists. Album buyers sit with Target, Walmart and Barnes & Noble. Store buyers sit with a fulfilment service. Smart-link signups sit with a distribution partner. This workstream builds the parallel path, and it does not require renegotiating any existing agreement or changing any Korean-side practice.",
      subBlocks: [
        {
          label: "A",
          title: "The Capture Surface",
          objective: "Give a United States fan a free way to identify themselves, for the first time in 38 months.",
          strategy: "One artist-controlled destination that every campaign, release link, social bio and retail insert can point at. It runs alongside the existing smart link rather than replacing it, so no current arrangement is disturbed and nothing about the Korean side changes. Capture is United States only, with the Korean and Japanese audiences left on the platforms they already use.",
          components: {
            heading: "What Gets Built",
            items: [
              "A single owned destination the plan, the releases and the paid media all point at. The obvious domain for the group name currently resolves to a parked page.",
              "Email capture with a United States geo condition, sitting alongside the existing release smart link rather than replacing it.",
              "A capture tile on the global link-in-bio. The service already used natively supports contact capture with direct sync to standard email platforms, and it is currently switched off. This is a settings change under 13.2 million followers.",
              "A free membership or follow tier that does not require an app install or a payment, positioned beneath the existing paid global fan club rather than competing with it.",
              "Retail and physical insert paths, so United States album buyers have a route back to an owned surface.",
            ],
          },
          kpis: [
            "United States contact records captured, from a baseline of zero",
            "Capture rate per thousand sessions on the owned destination",
            "Share of United States listeners with an owned relationship, reported monthly",
          ],
          timeline: "Weeks 1 to 6, then permanent",
        },
        {
          label: "B",
          title: "Measurement and Audience Recovery",
          objective: "Make the audience already acquired usable, and make every future dollar cheaper.",
          strategy: "The membership and merchandise checkout returns undefined for every advertising global and carries an empty data layer. Every person who has ever paid this group directly is invisible to any advertising platform. Fixing that is a one-line change with a compounding return, because it converts an existing paying population into a seed for lookalike targeting at no acquisition cost.",
          components: {
            heading: "What Gets Instrumented",
            items: [
              "Advertising pixels on the owned commerce and membership surfaces, so paying members become an addressable and modellable audience.",
              "Pixels on the owned capture destination, so campaign traffic can be retargeted and modelled instead of bought fresh each cycle.",
              "Conversion events defined against the outcomes that matter here: capture, membership, retail click, DSP follow.",
              "A single reporting view joining paid delivery, owned capture growth and the platform metrics, reconciled weekly against the ad accounts.",
            ],
          },
          kpis: [
            "Seed audience size available for lookalike modelling, from a baseline of zero",
            "Cost per captured contact, by channel, reconciled weekly",
            "Retargetable audience size, tracked monthly",
          ],
          timeline: "Weeks 1 to 4, then permanent",
        },
        {
          label: "C",
          title: "YouTube Memberships",
          objective: "Switch on an identity and revenue surface that is already built and already populated.",
          strategy: "2.12 million subscribers, 1,093,406,213 cumulative views, 3,023 videos and 28 playlists carrying named recurring formats. Channel memberships are disabled, verified against the channel's own initial data on both the main and about surfaces. This is the single largest owned audience the group has on a platform it already dominates, and it is the one place a fan can be identified without installing anything.",
          components: {
            heading: "What Changes",
            items: [
              "Enable channel memberships, with the existing recurring formats as the perk spine rather than as new production.",
              "Position the lowest tier as free-adjacent and global, so it does not compete with the 22 dollar paid fan club.",
              "Route the members-only content from formats that already exist. The audit found production capability is not the constraint anywhere.",
            ],
          },
          kpis: [
            "Members enrolled against the 2.12 million subscriber base",
            "Members-only view rate against public view rate on the same formats",
          ],
          timeline: "Weeks 3 to 6",
        },
        {
          label: "D",
          title: "Paid Support, Tested Then Scaled",
          objective: "Buy reach against the capture layer, not against a vanity metric, and stop anything that does not move.",
          strategy: "Paid media runs against the owned destination and the capture events, in the United States first because it is the largest market and the audience is dispersed rather than concentrated in one metro, which makes it a media problem rather than a live problem. Every channel starts at test weight. Anything below its floor of efficacy is killed rather than nursed. Instagram is weighted at roughly twice TikTok on the evidence in Part One, which found a 1.83x gap across the full post inventory and 2.09x within the top-performing band, on all content rather than only on cross-posts.",
          components: {
            heading: "How the Spend Behaves",
            items: [
              "Every line carries a worst, expected and best case before it runs.",
              "Every channel starts low and scales only on measured movement. Below a channel's minimum, spend buys noise rather than outcomes.",
              "Committed and directly measured: delivery, cost per captured contact, cost per view and cost per engagement, all reconciled to the ad accounts weekly.",
              "Expected and partly attributable: Spotify follower growth, United States social follower growth, capture volume.",
              "Reported and not promised: monthly listeners and streams, plotted weekly against the unaided baseline rather than claimed as lift.",
            ],
          },
          kpis: [
            "Cost per captured United States contact",
            "Cost per thousand and cost per view by channel, weekly",
            "Spotify follower growth against the trailing unaided rate",
          ],
          timeline: "Weeks 5 onward, continuous",
        },
      ],
      footnote: "None of this workstream depends on a release date, a comeback announcement or a touring plan. It is the only part of this plan that would still be worth doing if nothing else in the group's calendar changed.",
    },

    // ===================================================================
    // 04. Workstream Two
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Comeback",
      title: "Workstream Two: Comeback Readiness",
      philosophy: "No seventh Korean release is announced and nothing is on sale. This workstream is built relative to release week and held ready, so the day a date exists the system drops onto it rather than starting from zero.",
      intro: "The forward calendar as of 3 September 2026 carries one confirmed booking, a Japanese radio appearance on 27 September. That is the whole of it. The right response is not to wait, it is to build the system now and key it to release week, because the audit found the two things that most need changing about a ZEROBASEONE release cycle are both content decisions that take lead time.",
      subBlocks: [
        {
          label: "A",
          title: "The Content Corrections",
          objective: "Fix the two measured content problems before the next cycle rather than during it.",
          strategy: "Part One found that release assets are the weakest lane the account runs, at a 0.83 view index and 21 percent below the engagement baseline, while 86 percent of output is self-generated and holds the winners. It also found that three or more members on screen indexes at 1.22 while a solo member indexes at 0.99 and a duo at 0.88, and that the account currently makes 25 solo posts against 20 group posts. Both corrections are free and both need to be in place before a comeback, not after.",
          components: {
            heading: "What Changes in the Content Plan",
            items: [
              "Invert the cast ratio. Full-group configurations index 23 percent above solo and are the one thing a five-member lineup can field that a four-member competitor cannot.",
              "Do not build the cycle around release assets. Fund the self-generated lane as a standing production line and let the release assets sit inside it rather than replace it.",
              "Build one recurring member-address format. The nearest competitor runs direct address as a standing format and this account has none. Within the analysed band, posts opening on direct address index about a quarter higher on reach, on a field two analysis passes measured differently, so treat it as a direction to test rather than a settled number.",
              "Weight Instagram at roughly twice TikTok in creative volume and paid support, on all content rather than only on cross-posts.",
              "Move the existing asks to Instagram, where they cost nothing, and drop them from TikTok, where they run 30 percent below the engagement baseline.",
              "Point every ask at the owned destination from workstream one. The behaviour already happens nineteen percent of the time; only the destination changes.",
            ],
          },
          kpis: [
            "Share of output at three or more members on screen, against the current 20 of 57",
            "Median view index of the self-generated lane against the release lane",
            "Captured contacts attributable to on-post asks",
          ],
          timeline: "Begins immediately, independent of a release date",
        },
        {
          label: "B",
          title: "The Competitive Position",
          objective: "Treat the roster split as a live contest rather than a closed event, because the numbers say it is one.",
          strategy: "Within the analysed top band, the four departed members post a median 1,454,514 TikTok views against 1,459,310 for the five who kept the name, a ratio of 1.00x three months after their debut. They lead on engagement rate on both platforms and their post-debut engagement is rising while their views settle. They also outsold Ascend- on debut. This is not a footnote to the audit, it is the competitive condition the next comeback launches into.",
          components: {
            heading: "What This Means for the Cycle",
            items: [
              "Production scale is currently producing parity rather than separation. 15 of 59 ZEROBASEONE posts were classified as polished performance, cinematic or event production against 8 of 50 for the other side, and the medians are level.",
              "The structural advantage a quintet holds is ensemble. Three or more on screen is the configuration that indexes highest, and a five-member lineup can field it more often and at larger scale than a four-member one can.",
              "The gap on the other side is production. On this side, direct address is a measured gap and English-forward audio is an open question: the spoken-language pass did not complete, and at caption level this account runs 52 to 57 percent latin-word against a HYBE peer at 75 to 87 percent. Both are cheap to close and the audio one should be measured before it is briefed.",
              "Plan the cycle assuming a contested fandom and a competing release window rather than an open field.",
            ],
          },
          kpis: [
            "Median views and engagement rate against the comparison account, tracked monthly on both platforms",
            "Share of voice across the two accounts through the release window",
          ],
          timeline: "Continuous, reported monthly",
        },
        {
          label: "C",
          title: "The Release System",
          objective: "A paid, creator and DSP system written relative to release week, ready to deploy.",
          strategy: "Ascend- returned a 1.93x listener multiple off the lowest base in two years, which is the strongest single argument in this document for what a funded cycle could return. The system below is written in release-relative weeks and converts to calendar dates the day WAKEONE sets one. Paid runs against the capture layer built in workstream one, so the cycle produces an owned asset rather than only a chart week.",
          components: {
            heading: "The Shape of a Cycle",
            items: [
              "Pre-release: creative briefs against the corrected content plan, creator sourcing, capture surface live and instrumented, DSP pitch material prepared.",
              "Release week: paid at test weight across channels, creator wave one, every asset pointing at the owned destination.",
              "Post-release: scale only what moved, kill what did not, creator wave two on the winning format, sustain through the window where this artist's eras actually peak.",
              "Editorial: the catalogue currently sits in eight placement rows across five playlists reaching 236,366, every one of them K-pop. A general-pop pitch is the single largest untapped editorial move available and the catalogue has never had one.",
            ],
          },
          kpis: [
            "Listener multiple against the pre-release base, benchmarked against the 1.93x Ascend- result",
            "Post-cycle floor against the pre-release floor, which is the least confounded number in the plan",
            "Editorial placements outside K-pop programming, from a baseline of zero",
          ],
          timeline: "Release week minus two to release week plus three",
        },
      ],
      footnote: "The headline test for any cycle run here is the post-cycle floor rather than the peak. Listeners bottomed at 1,018,904 immediately before Ascend- and sit at 1,205,605 four months later, 18.3 percent higher. The floor is measured months after the release event, which makes it the hardest number to flatter and the only one that compounds into the next cycle.",
    },

    // ===================================================================
    // 05. Workstream Three
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Japan",
      title: "Workstream Three: Japan Defence",
      philosophy: "Japan is falling faster than Korea, in the second-largest commercial market for the group, and the cause is visible in the content. This is a defence line rather than a growth line, and it is the cheapest work in the plan.",
      intro: "Oricon first weeks across three Japanese EPs: 257,157 in January 2025, 179,648 in October 2025, 90,640 in August 2026. A 65 percent decline in nineteen months, on a curve that began well before the roster change. Over the same period exactly one of 59 analysed global posts carried any Japan signal at caption and visual-description level, and it was a Korean transliteration rather than Japanese. The spoken-audio pass did not complete, so this is a caption-level count. Not one kana character appears across five months of captions on the main accounts.",
      subBlocks: [
        {
          label: "A",
          title: "The Distribution Problem",
          objective: "Establish what is actually broken, because it is not the Japanese work.",
          strategy: "The Japan infrastructure is the best-built part of this artist's whole operation. There is a dedicated Japanese site, a fan club on a real membership platform, a Japanese store, and a Japanese social account whose bio links to a capture surface rather than to another social platform. That is the template the United States does not have. The problem is that all of it is firewalled behind an account with 337,800 followers while the main global accounts, carrying 13.2 million, never mention Japan at all.",
          components: {
            heading: "What Changes",
            items: [
              "Japanese-language posting on the main global accounts. The content already exists, the translation cost is negligible, and the audience is already buying.",
              "Route the global accounts to the Japanese capture surface for Japanese-market traffic, the same way the Japanese account already does.",
              "A comparison peer runs Japanese on three of 25 analysed posts, including a Japanese platform partnership at 31.2 million views. The format is proven in the lane.",
              "Japan sits seventh in the Spotify country table at 40,956 listeners, well below its commercial weight, which suggests the streaming audience there has never been built at all.",
            ],
          },
          kpis: [
            "Share of global-account posts carrying a Japanese-language element, from a baseline of one in 59",
            "Japanese fan club enrolment rate against the global accounts",
            "Japan monthly listeners against the current 40,956",
          ],
          timeline: "Weeks 2 to 12, then permanent",
        },
        {
          label: "B",
          title: "Holding the First Week",
          objective: "Stabilise the Japanese physical business before the next Japanese release.",
          strategy: "The most recent Japanese EP took the Oricon weekly No. 1 on 90,640, while the previous one lost the No. 1 while selling nearly twice as much. Chart position and demand have decoupled in this market, which means chart rank is no longer a usable health signal and absolute first week is the number to defend. The lever is the same one as everywhere else in this plan: an owned relationship with the buyer, ahead of the release rather than during it.",
          components: {
            heading: "The Defence",
            items: [
              "Pre-release capture on the Japanese surfaces, activated from the global accounts rather than only from the Japanese one.",
              "Paid support in Japan keyed to the Japanese release calendar, which currently runs on a separate schedule from the Korean one.",
              "The Japanese fan club as the retention layer, promoted globally rather than only to the 337,800 who already found it.",
              "Track the absolute first week rather than the chart position, and report against the 257,157 to 90,640 curve.",
            ],
          },
          kpis: [
            "Oricon first week against the trailing three-release curve",
            "Japanese fan club enrolment ahead of release week",
            "Japan share of global monthly listeners",
          ],
          timeline: "Keyed to the next Japanese release",
        },
      ],
      footnote: "Japan is the one market where this artist already owns the capture layer. That makes it the fastest place to prove the thesis in workstream one, and the strongest internal argument for extending the same structure to the United States.",
    },

    // ===================================================================
    // 06. Recommendations for the Artist Team
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Team",
      title: "Recommendations for the Artist Team",
      philosophy: "These items cost no money and Crowd Control Digital does not bill for them. They are listed in full because they are among the highest-return items the audit found.",
      intro: "Several of the highest-return findings in Part One are settings changes and internal decisions rather than services. They belong to WAKEONE and the artist team, they are listed here in full, and they are not part of any scope.",
      subBlocks: [
        {
          label: "A",
          title: "Free Fixes, Ranked by Return",
          objective: "The cheapest items in the audit, in order.",
          strategy: "Each of these was verified on the live surface during the audit. None requires budget, agency involvement or a change to any existing agreement.",
          components: {
            heading: "The List",
            items: [
              "Put an advertising pixel on the membership and merchandise checkout. It currently has none, and every paying member is unusable as a seed audience until it does. Highest return of anything in this document relative to effort.",
              "Turn on the contact tile on the global link-in-bio. The service already supports it natively with sync to standard email platforms, and it is switched off under 13.2 million followers.",
              "Enable YouTube channel memberships on 2.12 million subscribers and a billion cumulative views.",
              "Point the primary domain for the group name at an artist-controlled destination. It currently resolves to a parked page.",
              "Add a Japanese-language element to the main global accounts. One of 59 posts currently carries a Japan signal while the Japanese first week falls 65 percent.",
              "Invert the solo-to-group content ratio. Group configurations index 23 percent higher and the account currently makes more solo posts than group posts.",
            ],
          },
          timeline: "Any time. None of these depends on anything else in this plan.",
        },
        {
          label: "B",
          title: "Decisions That Sit With WAKEONE",
          objective: "Name the open questions rather than assume answers to them.",
          strategy: "Four things in the audit are governance rather than marketing, and this plan does not assume a position on any of them.",
          components: {
            heading: "Open Questions",
            items: [
              "Whether a United States capture layer sits with the artist, the label, or a joint structure. This plan assumes an artist-controlled destination and can be rebuilt around any answer.",
              "Whether the Korean-side data posture should continue to govern United States practice by default.",
              "Whether the group's global expansion route runs through the existing partner structure or a new one. The label's announced global partnership covers two other acts on the roster.",
              "Whether a general-pop editorial pitch is acceptable positioning. The catalogue has never had a placement outside K-pop programming and this is the largest untapped editorial move available.",
            ],
          },
          timeline: "Before scope is agreed",
        },
      ],
      footnote: "Production, localisation, press outreach and any live activity sit with the artist team and its partners and carry no charge from Crowd Control Digital.",
    },

    // ===================================================================
    // 07. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "07",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro: "Twelve weeks, split into two phases. Weeks 1 to 6 are release-independent and build the capture and measurement layer, so they can start immediately. Weeks 7 to 12 are written relative to release week and convert to calendar dates the day a comeback is set. Japan runs across the whole window on its own release schedule.",
      weeks: [
        { index: 1, label: "W1", dates: "Always-on" },
        { index: 2, label: "W2", dates: "Always-on" },
        { index: 3, label: "W3", dates: "Always-on" },
        { index: 4, label: "W4", dates: "Always-on" },
        { index: 5, label: "W5", dates: "Always-on" },
        { index: 6, label: "W6", dates: "Always-on", note: "CAPTURE LIVE" },
        { index: 7, label: "R-2", dates: "2 weeks out" },
        { index: 8, label: "R-1", dates: "1 week out" },
        { index: 9, label: "R", dates: "Release week", highlight: true, note: "RELEASE" },
        { index: 10, label: "R+1", dates: "Week 2" },
        { index: 11, label: "R+2", dates: "Week 3", note: "WAVE 2" },
        { index: 12, label: "R+3", dates: "Week 4" },
      ],
      workstreams: [
        {
          name: "Capture Surface",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", milestone: true, label: "LIVE" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "low" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Measurement",
          cells: [
            { weekIndex: 1, intensity: "high", label: "PIXELS" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "SEED" },
            { weekIndex: 5, intensity: "low" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "Content Corrections",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "BRIEF" },
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
          name: "Paid Media",
          cells: [
            { weekIndex: 5, intensity: "low", label: "TEST" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium", label: "WARM" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", label: "SCALE" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Japan",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "LANG" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Reporting",
          cells: [
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "low" },
            { weekIndex: 6, intensity: "medium", label: "WEEK 1" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "REVIEW" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Weeks 1 to 2, Instrument and Build",
          items: [
            "Advertising pixels on the membership and merchandise surfaces. The highest-return item in the plan and the fastest.",
            "Owned capture destination stood up and pointed at from the release links.",
            "Contact tile enabled on the global link-in-bio.",
            "Japanese-language element introduced on the main global accounts.",
            "Content briefs written against the corrected cast ratio and the direct-address format.",
          ],
        },
        {
          weekIndex: 4,
          title: "Weeks 3 to 6, Capture Live and Seeded",
          items: [
            "Capture surface live with a United States geo condition, running alongside the existing smart link.",
            "Seed audiences built from the instrumented commerce and membership population, from a baseline of zero.",
            "YouTube channel memberships enabled, perks routed from the existing recurring formats.",
            "Paid at test weight against the capture events. Anything below its floor of efficacy is stopped rather than nursed.",
            "First weekly reporting cycle, reconciled to the ad accounts.",
          ],
        },
        {
          weekIndex: 7,
          title: "Weeks 7 to 8, Comeback Warm-Up",
          items: [
            "Converts to calendar dates as soon as a release date exists.",
            "Creator sourcing and briefing against the winning self-generated formats rather than release assets.",
            "General-pop editorial pitch prepared. The catalogue has never held a placement outside K-pop programming.",
            "Paid warmed on the retargetable audience built in the always-on phase, which is the point of having built it.",
          ],
        },
        {
          weekIndex: 9,
          title: "Weeks 9 to 12, Release and Sustain",
          items: [
            "Paid scales only on measured movement, against the 1.93x Ascend- listener multiple as the benchmark.",
            "Creator wave two on the format that actually moved, not the format that was planned.",
            "Every asset points at the owned destination, so the cycle produces a captured audience rather than only a chart week.",
            "Twelve-week review against the post-cycle floor, which is the number that compounds into the next cycle.",
          ],
        },
      ],
      footnote: "Cell labels are shortened for the grid. Weeks 1 to 6 can begin without a release date. Weeks 7 to 12 are release-relative and lock to the calendar the day WAKEONE sets a comeback. Japan runs on its own release schedule across the whole window.",
    },
  ],

  language: "en",
  languageAlternates: [
    { slug: "zerobaseone-plan", label: "English", code: "EN" },
    { slug: "zerobaseone-plan-ko", label: "한국어", code: "KO" },
  ],
};
