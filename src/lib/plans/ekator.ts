import type { StrategyPlanData } from "../plan-context";

export const ekatorPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/ekator/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "ekator-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Pre-Debut Hype Strategy",
    title: "EKATOR",
    subtitle:
      "A pre-debut hype and audience-acquisition framework. Engineered to manufacture WAYF-level velocity before a single song drops.",
    partnership: "Grid × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "June 2026",
    backgroundImage: "/images/ekator/ekator-hero.jpg",
    logo: "/brand/CC-LOGO-2024-WHITE.png",
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
      subtitle:
        "A pre-debut campaign that builds hype, engagement, and owned audience for EKATOR before any music exists, using the exact playbook that took WAYF BOYS to nearly 1M followers with zero songs released.",
      body: [
        "EKATOR has no music until November. The opportunity is the seven months in front of it. A weekly documentary series launches in July, and that content is the fuel for a manufactured-momentum campaign designed to make the group feel inevitable before it ever debuts.",
        "The benchmark is explicit: WAYF BOYS. They built a top-tier 5th-gen launch trajectory before debuting a face, a name, or a song, on essentially zero paid media, by running a finite and replicable playbook. We reverse-engineered that playbook in full. This plan deploys it for EKATOR with a tighter, paid-accelerated version: intentional clipping, timed paid media, SWRM conversation support, and an experiential layer that converts hype into data, units, and a chart story.",
        "The total program is $50,000 for the pre-debut window (July through September, roughly 12 weeks) leading into the November debut: $39,000 deployable across paid social, YouTube, SWRM, clipping, and discretionary optimization, plus $11,000 in CCD retainer and fees. There is no music to stream yet, so success is measured the way pre-debut is actually won: follower velocity, engagement rate, impression volume, conversation sentiment, and captured audience. Each subsequent phase (the November single, the debut, the first comeback) authorizes a fresh budget on the same structure.",
      ],
      supports: {
        heading: "What This Campaign Supports",
        items: [
          "The July weekly documentary series (six-episode rollout)",
          "Pre-debut social account launch and follower acquisition",
          "The runway into the November single and official debut",
          "Owned-audience capture (CRM) that compounds into the debut cycle",
        ],
      },
      goals: {
        heading: "Key Goals",
        items: [
          "Manufacture WAYF-level velocity: visible, everywhere, talked about, before the music",
          "Make the documentary the most-clipped pre-debut content of the cycle",
          "Build owned retargeting and CRM pathways before debut",
          "Capture phone numbers and emails now, while attention is cheap",
          "Create one experiential moment fans fight to attend and clip",
        ],
      },
      footnote:
        "Pre-debut is won on velocity, engagement, and captured audience, not streams. There is no music to measure until November.",
    },

    // ===================================================================
    // 02. Audience & Positioning
    // ===================================================================
    {
      type: "audience",
      number: "02",
      navLabel: "Audience",
      title: "Audience & Positioning",
      metrosLabel: "Top Global Markets",
      intro:
        "Pre-debut targeting is concept-and-comp-based, not data-based, because there is no music or pixel history yet. K-pop boy-group fandom is global from day one, and the geography is not US-led: across comparable hard-concept groups (RIIZE, BOYNEXTDOOR, TWS, CORTIS), Southeast Asia and Latin America drive the highest engagement and conversation volume, Korea and Japan anchor credibility and watch-time, and the US is a meaningful but secondary market. The cohort skews very young and overwhelmingly female. These splits set the initial clipping posture, paid creative direction, and paid-social targeting, and re-weight fast once the July documentary and social accounts generate real pixel data.",
      metros: [
        { name: "Jakarta, Indonesia" },
        { name: "Bangkok, Thailand" },
        { name: "Manila, Philippines" },
        { name: "Seoul, South Korea" },
        { name: "Tokyo, Japan" },
        { name: "Mexico City, Mexico" },
        { name: "Sao Paulo, Brazil", tier: "secondary" },
        { name: "Kuala Lumpur, Malaysia", tier: "secondary" },
        { name: "Ho Chi Minh City, Vietnam", tier: "secondary" },
        { name: "Taipei, Taiwan", tier: "secondary" },
        { name: "Los Angeles, USA", tier: "secondary" },
        { name: "Lima, Peru", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "16-24", weight: 55 },
        { bracket: "25-34", weight: 30 },
        { bracket: "35-44", weight: 10 },
        { bracket: "45+", weight: 5 },
      ],
      genderDistribution: { female: 88, male: 12 },
      similarArtists: [
        "WAYF BOYS",
        "LNGSHOT",
        "CORTIS",
        "RIIZE",
        "BOYNEXTDOOR",
        "TWS",
        "ZEROBASEONE",
        "ENHYPEN",
        "&TEAM",
        "NCT WISH",
      ],
      genres: [
        "K-Pop",
        "K-Hip-Hop / Pop-Rap",
        "Streetwear Culture",
        "Alt / Hard Concept",
      ],
      platformSignals: [
        {
          platform: "TikTok",
          note: "Primary global acquisition engine and the home of edit and fancam culture. Where the documentary clips live and where WAYF-style velocity is won. Highest reshare velocity comes from SEA (Indonesia, Philippines, Thailand) and LATAM (Mexico, Brazil), where hard streetwear concepts over-index.",
        },
        {
          platform: "YouTube Shorts",
          note: "Documentary home plus Shorts arbitrage (the lever that trended Kiss of Life 25 of 30 days in Korea). Korea and SEA dominate watch-time; Latin American comment sections are among the most active for boy groups.",
        },
        {
          platform: "Instagram Reels",
          note: "Dual engine: video mirror of TikTok plus lifestyle and concept carousels. Drives member bias culture and the fashion positioning a streetwear concept relies on. Paid and owned content should use this lane alongside TikTok; strongest engagement comes from Japan, Indonesia, and LATAM.",
        },
        {
          platform: "X / Aggregators",
          note: "Real-time fan-account organizing, streaming parties, and hashtag pushes, led by Filipino, Indonesian, and Brazilian fanbases. SWRM seeds it; the aggregator network (WAYF-style) amplifies it across Korea, SEA, and the West.",
        },
      ],
      footnote:
        "Concept-and-comp-based directional estimates drawn from comparable groups' public Spotify listener geography and K-pop fandom demographics (RIIZE top Spotify cities run Bangkok over Kuala Lumpur over Seoul, with no US city leading). CCD recalibrates against first-party pixel data once July content launches.",
    },

    // ===================================================================
    // 03. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "03",
      navLabel: "Structure",
      title: "Proposal Structure",
      intro:
        "The total program for the pre-debut window (July through September) is $50,000 all-in: $39,000 deployable across the active channels plus $11,000 in CCD retainer and fees. The deployable budget concentrates on clipping, paid social, YouTube, SWRM, and a discretionary optimization pool that can move into creator/community tests or emergency boosts as performance data comes in. The November single and the debut each authorize a fresh budget on the same structure.",
      tiers: [
        {
          label: "Pre-Debut Window (Jul to Sep)",
          budget: "$50,000",
          name: "Total Program",
          goal:
            "$39,000 deployable channel budget plus $11,000 CCD retainer and fees. Detonate in July alongside the documentary launch, scale the proven winners through August, and sustain hype into September. Twelve weeks of manufactured pre-debut velocity leading into the November single and official debut.",
          featured: true,
          includes: [
            "Clipping and seeding across the managed clipper network (180K-person server)",
            "Paid social amplification behind proven clips and posts",
            "YouTube and Shorts amplification around documentary moments",
            "SWRM comment amplification across all content",
            "Discretionary pool for creator/community tests, rapid boosts, and reallocations",
            "CCD strategic oversight and weekly reallocation",
          ],
        },
      ],
    },

    // ===================================================================
    // 04. Clipping & Seeding
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Clipping",
      title: "Vertical 1 / Clipping & Seeding",
      philosophy:
        "Priority one. The single most impactful pre-debut lever and the engine behind WAYF feeling everywhere. Always-on, peaks on documentary episode weeks.",
      subBlocks: [
        {
          label: "A",
          title: "Managed Clipper Network",
          budget: "$15,000 (deployable channel budget)",
          objective:
            "Make the EKATOR documentary the most-clipped pre-debut content of the cycle. Intentional, smart, on-concept clipping, not volume for volume's sake. WAYF proved good clipping beats more clipping.",
          strategy:
            "Deploy the documentary episodes and concept content across the managed clipper network, including CCD's 180K-person clipping server, with tight creative direction: which moments, which hooks, which sounds. Coordinate sound usage so the clips seed a discoverable audio trail (the same way you trace a network by who used a sound). Clipping becomes the primary native-distribution engine, supported by paid social and YouTube amplification around the strongest moments.",
          components: {
            heading: "What The Network Does",
            items: [
              "Cuts each weekly episode into dozens of hook-first vertical clips",
              "Seeds clips through the 180K-person server on a managed cadence",
              "Coordinates a shared sound or audio trail for discoverability",
              "Prioritizes the candid, concept-defining moments that travel",
              "Feeds the best-performing clips to the paid-social layer",
            ],
          },
          kpis: [
            "Short-form view volume (target compounding week over week)",
            "Clip-to-follow conversion on owned accounts",
            "Sustained For You and Shorts surfacing",
            "Sound or hashtag adoption across non-owned accounts",
          ],
        },
        {
          label: "B",
          title: "Effectiveness & Measurement",
          objective:
            "Pre-debut clipping is quantifiable even without streams. We measure what WAYF could only feel.",
          components: {
            heading: "How We Quantify It",
            items: [
              "Impression volume driven across the clip network, week over week",
              "Follower velocity on owned accounts (the WAYF headline metric)",
              "Conversation volume and sentiment via social listening",
              "Velocity trend: is the rate of growth accelerating or decaying",
            ],
          },
        },
      ],
      footnote:
        "Clipping runs every week the campaign is live and peaks on the six documentary episode weeks in July.",
    },

    // ===================================================================
    // 05. Paid Social, YouTube & SWRM
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Paid + YouTube + SWRM",
      title: "Vertical 2 / Paid Social, YouTube & SWRM Amplification",
      philosophy:
        "The accelerant. Paid social and YouTube ride the winners that clipping, documentary engagement, and platform signals surface; SWRM drives conversation and social proof on everything. This is the layer WAYF did not need but we use to compress the timeline.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social Boosting",
          budget: "$10,000 (deployable channel budget)",
          objective:
            "Put spend behind the clips and posts already proving themselves organically, across every applicable channel (TikTok, IG Reels, YouTube Shorts), to push high-performing assets past their organic ceiling.",
          strategy:
            "No guessing. Paid media launches on July 21 and amplifies the documentary moments, owned posts, and early engagement signals already proving themselves. Start with a clean test, then scale budget behind the top creative as winners emerge. Build retargeting pools from video viewers, profile engagers, and clip viewers once clipping launches the following week so spend compounds rather than resets. Targeting starts from the concept-and-comp audience and refines on real pixel data as it accrues.",
          tactics: [
            "Launch paid media on July 21 across the concept-and-comp audience",
            "Scale behind winners as the documentary episodes land",
            "Retarget video viewers, profile engagers, and clip viewers",
            "Run across TikTok, IG Reels, and YouTube Shorts",
            "Refine targeting weekly on incoming pixel data",
          ],
        },
        {
          label: "B",
          title: "YouTube Amplification",
          budget: "$5,000 (deployable channel budget)",
          objective:
            "Give the documentary and Shorts ecosystem dedicated support on YouTube so the campaign is not dependent on TikTok and Reels alone.",
          strategy:
            "Use YouTube budget to support documentary-adjacent Shorts, hero moments, and retargeting audiences built from viewers. Prioritize the moments with the clearest member identity, concept clarity, and comment velocity, then push them into Shorts and skippable inventory where the audience is already consuming K-pop discovery content.",
          tactics: [
            "Boost top documentary moments into YouTube Shorts",
            "Build viewer and engager pools for November retargeting",
            "Support hero clips with lightweight YouTube inventory",
            "Measure watch-through and subscriber/follower conversion signals",
          ],
        },
        {
          label: "C",
          title: "SWRM Comment Amplification",
          budget: "$3,000 (deployable channel budget)",
          objective:
            "Drive real-person conversation and social proof across all EKATOR content and the clips seeded around it. Comments are where pre-debut hype reads as real.",
          strategy:
            "Deploy SWRM to comment across owned posts and the broader clip footprint, manufacturing the conversation density that signals a group is popping. Operators agree to platform guardrails to keep it credible. SWRM is suited to a hard-concept group like this where the commentary is about the music and the look, unlike a campaign where comment content carries brand risk.",
          components: {
            heading: "Scope",
            items: [
              "Comment coverage across owned posts and seeded clips",
              "Conversation density timed to documentary episode drops",
              "Guardrailed operators to keep commentary credible",
              "Sentiment shaping that reinforces the concept narrative",
            ],
          },
        },
      ],
      footnote:
        "Paid spend rides validated winners. SWRM makes the hype legible. Both are calibrated to the documentary cadence.",
    },

    // ===================================================================
    // 06. World-Building & Experiential
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Experiential",
      title: "World-Building & Experiential (Optional)",
      philosophy:
        "Scoped on top of the $50,000 total program. The conversion layer that turns hype into data, units, and a chart story. This is where US-style marketing and K-pop marketing combine into something neither does alone.",
      intro:
        "Once hype exists, experiential is what moves the needle and captures the value WAYF left on the table. Each item below is optional, priced separately, and deployable on demand based on how the July and August signals perform.",
      subBlocks: [
        {
          label: "A",
          title: "Custom Interactive Website / Web Game",
          budget: "Scoped on request (additional)",
          objective:
            "Build the world and capture the audience. A custom interactive site or web-based game that does the data capture WAYF never built, pulling phone numbers and emails while attention is cheapest.",
          strategy:
            "Stand up a bespoke EKATOR web experience (an interactive concept site or a lightweight web game) that gives fans something to do, then captures phone numbers and emails at the point of engagement. Pipe captures into a Laylo-style CRM so that by the time the November single drops, EKATOR texts an owned list rather than renting attention. This is the long-term business-building asset the budget would otherwise miss.",
          components: {
            heading: "What It Delivers",
            items: [
              "Interactive concept site or web-based game",
              "Phone and email capture at the point of engagement",
              "CRM pipe (email plus SMS) for the November debut",
              "An owned list that compounds into every future cycle",
            ],
          },
        },
        {
          label: "B",
          title: "IRL Pop-Up Activations (LA + NY)",
          budget: "Scoped on request (additional)",
          objective:
            "One event fans fight to attend becomes the most clippable asset of the campaign. Drive fan-created content, merch sales, data capture, and a US Billboard chart story through physical unit sales.",
          strategy:
            "Run a two-day pop-up in LA and a two-day pop-up in New York around a limited-edition physical drop (for example a picture-disc vinyl or collectible). Every attendee creates content, so one event yields thousands of fan-shot clips that feed the entire clip and paid machine. Sell physical units on-site: in the US, moving roughly 20,000 units creates Billboard Hot 100 eligibility and a real revenue moment. Capture data at the door. A Kiss of Life activation, if it proceeds, can share infrastructure and cost.",
          components: {
            heading: "What One Pop-Up Produces",
            items: [
              "Thousands of pieces of fan-shot content to clip and boost",
              "Merch and limited-edition physical unit sales",
              "Door-level data capture into the CRM",
              "US Billboard chart eligibility via physical unit volume",
              "A world-building moment that makes the group feel real",
            ],
          },
        },
      ],
      footnote:
        "All experiential items sit outside the $50,000 total program and are scoped and approved individually based on pre-debut performance signals.",
    },

    // ===================================================================
    // 07. Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "07",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro:
        "How the $39,000 deployable channel budget works inside the $50,000 total program. July now starts with setup and signal gathering, then paid media plus SWRM launch on July 21 and clipping launches the following week on July 28. August scales the strongest paid, YouTube, SWRM, and clipping signals while the discretionary pool moves toward creator/community tests or incremental boosts. September sustains the hype and sets the experiential decision and the runway into the November debut.",
      totalBudget: "$39,000 deployable",
      phases: [
        {
          label: "Detonation + Documentary Launch",
          window: "July 2026 / ~4 weeks",
          focus:
            "The first two July weeks are setup and signal gathering. Paid media and SWRM launch together on July 21, then clipping and seeding launch the following week on July 28. Goal: prove the concept travels, build the first follower-velocity curve, and avoid spending before the content system is ready.",
          budget: "~$17,000",
          tactics: [
            "Paid media and SWRM launch on July 21 against the concept-and-comp audience",
            "YouTube support goes live with paid media on July 21",
            "Clipper network and 180K server launch clipping on July 28",
            "Discretionary pool held for creator/community tests or incremental boosts",
          ],
        },
        {
          label: "Scale The Winners",
          window: "August 2026 / ~4 weeks",
          focus:
            "Paid social and YouTube scale behind the clips and posts that proved themselves after the July 21 and July 28 launches. Discretionary support shifts toward the highest-signal channel, whether that is creator/community tests or additional boosts. Goal: compound clipping, paid, YouTube, and SWRM into a single accelerating presence.",
          budget: "~$14,000",
          tactics: [
            "Paid social scales on proven winners across all channels",
            "YouTube boosts the strongest Shorts and documentary moments",
            "Discretionary pool reallocates to the highest-signal support",
            "Clipping continues, prioritizing the highest-velocity concepts",
            "Experiential decision point: greenlight pop-up and web build",
          ],
        },
        {
          label: "Sustain + Debut Runway",
          window: "September 2026 / ~4 weeks",
          focus:
            "Hold the hype at strength and convert it into owned audience ahead of the November single. Paid steps to evergreen plus retargeting, clipping sustains around the strongest concepts, and the experiential and CRM layer (if greenlit) captures the audience the rest of the campaign built. Goal: hand the November debut a warm, owned, talked-about audience.",
          budget: "~$8,000",
          tactics: [
            "Paid social to evergreen plus retargeting only",
            "Clipping sustains on top-performing concepts",
            "CRM capture ramps via owned channels and any web build",
            "November single brief, asset lists, and audience handoff prepared",
          ],
        },
      ],
      footnote:
        "Phase budgets are directional and refer to the $39,000 deployable channel budget. CCD reallocates weekly across clipping, paid social, YouTube, SWRM, and discretionary support based on follower-velocity and conversation signals.",
    },

    // ===================================================================
    // 08. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro:
        "Week-by-week deployment across the pre-debut window. The first two July weeks are setup, signal gathering, and creative QA. Paid media plus SWRM launch on July 21. Clipping and seeding launch the following week on July 28. No separate page network is included, so the discretionary pool stays reserved for creator/community tests or boost reallocations as performance reads come in. The experiential decision lands around weeks 6 to 8 and, if greenlit, activates in September. The window is the runway into the November single and debut.",
      weeks: [
        { index: 1, label: "W1", dates: "Jul 6", note: "EP1" },
        { index: 2, label: "W2", dates: "Jul 13", note: "EP2" },
        { index: 3, label: "W3", dates: "Jul 21", note: "PAID + SWRM" },
        { index: 4, label: "W4", dates: "Jul 28", note: "CLIPPING" },
        { index: 5, label: "W5", dates: "Aug 3", note: "EP5" },
        { index: 6, label: "W6", dates: "Aug 10", note: "EP6" },
        { index: 7, label: "W7", dates: "Aug 17" },
        { index: 8, label: "W8", dates: "Aug 24" },
        { index: 9, label: "W9", dates: "Aug 31" },
        { index: 10, label: "W10", dates: "Sep 7" },
        { index: 11, label: "W11", dates: "Sep 14" },
        { index: 12, label: "W12", dates: "Sep 21", highlight: true, note: "DEBUT RUNWAY" },
      ],
      workstreams: [
        {
          name: "Documentary Drops",
          cells: [
            { weekIndex: 1, intensity: "high", label: "EP1" },
            { weekIndex: 2, intensity: "high", label: "EP2" },
            { weekIndex: 3, intensity: "high", label: "EP3" },
            { weekIndex: 4, intensity: "high", label: "EP4" },
            { weekIndex: 5, intensity: "high", label: "EP5" },
            { weekIndex: 6, intensity: "high", label: "EP6" },
          ],
        },
        {
          name: "Clipping & Seeding",
          cells: [
            { weekIndex: 4, intensity: "high", label: "JUL 28" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 3, intensity: "high", label: "JUL 21" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "YouTube",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "JUL 21" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "low" },
            { weekIndex: 11, intensity: "low" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "SWRM Comments",
          cells: [
            { weekIndex: 3, intensity: "high", label: "JUL 21" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Experiential (Opt)",
          cells: [
            { weekIndex: 6, intensity: "low", label: "DECIDE" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "medium", label: "BUILD" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "POPUP" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Setup: documentary EP1 + launch prep",
          items: [
            "Documentary episode 1 drops and becomes the first signal source for creative selection.",
            "Finalize paid media audiences, tracking, pixels, UTMs, and creative QA for the July 21 launch.",
            "Finalize SWRM guardrails, comment themes, and escalation rules for the July 21 launch.",
            "Prepare the clipper brief and source-asset system for the July 28 clipping launch.",
          ],
        },
        {
          weekIndex: 2,
          title: "EP2 + final launch QA",
          items: [
            "Documentary episode 2 drops, feeding the next round of paid and clipping candidates.",
            "First follower-velocity and engagement readouts on owned accounts.",
            "Lock the launch creative set for paid media and YouTube.",
            "Finalize clipper assignments, hooks, sound direction, and content requests before the next-week clipping launch.",
          ],
        },
        {
          weekIndex: 3,
          title: "EP3 + July 21 paid media/SWRM launch",
          items: [
            "Documentary episode 3 drops around the first paid and SWRM activation moment.",
            "Paid Social launches on July 21 against the concept-and-comp audience.",
            "YouTube support launches on July 21 behind documentary-adjacent Shorts and hero moments.",
            "SWRM comment coverage launches on July 21 across owned posts and the broader content footprint.",
          ],
        },
        {
          weekIndex: 4,
          title: "EP4 + July 28 clipping launch",
          items: [
            "Documentary episode 4 drops.",
            "Clipping and seeding launch on July 28 through the managed clipper network and 180K server.",
            "Paid media begins retargeting video viewers, profile engagers, and early clip viewers as pools form.",
            "Social listening readout: conversation volume and sentiment trend.",
          ],
        },
        {
          weekIndex: 5,
          title: "EP5 + sustain",
          items: [
            "Documentary episode 5 drops.",
            "Paid media, YouTube, SWRM, and clipping begin compounding together.",
            "Discretionary allocation readout: decide whether creator/community tests or incremental boosts deserve the next dollars.",
            "SWRM density timed to the episode moment.",
          ],
        },
        {
          weekIndex: 6,
          title: "EP6 + experiential decision",
          items: [
            "Final documentary episode 6 drops.",
            "Experiential decision point: greenlight the LA and NY pop-up and the web build based on velocity to date.",
            "Discretionary pool review: continue creator/community support or incremental boosts only where the signal justifies it.",
            "Compile the July performance review across all workstreams.",
          ],
        },
        {
          weekIndex: 7,
          title: "Scale winners",
          items: [
            "Paid social at full scale on validated creative across all channels.",
            "Clipping continues on the highest-velocity concepts.",
            "SWRM density follows the best-performing content pockets.",
            "If greenlit, experiential pre-production begins.",
          ],
        },
        {
          weekIndex: 8,
          title: "Scale + experiential build",
          items: [
            "Paid heavy; cycle in fresh creative from the strongest documentary and clipping signals.",
            "Experiential build underway (web experience plus pop-up logistics).",
            "Discretionary pool fully reallocated to the highest-signal support lane.",
            "CRM infrastructure stood up ahead of capture.",
          ],
        },
        {
          weekIndex: 9,
          title: "Sustain",
          items: [
            "Paid maintains spend; deeper retargeting (video viewers, profile visitors).",
            "Clipping and owned channels focus on concept cuts and fan UGC compilations.",
            "Experiential build continues toward the pop-up window.",
          ],
        },
        {
          weekIndex: 10,
          title: "Pop-up activation (if greenlit)",
          items: [
            "LA and NY pop-ups run with a limited-edition physical drop.",
            "Door-level data capture into the CRM; on-site unit sales.",
            "Capture and clip thousands of pieces of fan-shot content.",
            "Feed the pop-up footage straight into the clip and paid machine.",
          ],
        },
        {
          weekIndex: 11,
          title: "Pop-up amplification",
          items: [
            "Boost the best pop-up content across all channels.",
            "Paid steps toward evergreen plus retargeting.",
            "Owned channels, clipping, and paid amplify the activation and its UGC.",
          ],
        },
        {
          weekIndex: 12,
          title: "Debut runway + handoff",
          items: [
            "Lock the November single marketing plan: media flight, creative briefs, asset lists.",
            "Hand the debut a warm, owned, talked-about audience plus the captured CRM list.",
            "Full pre-debut performance review: velocity, engagement, conversation, captured audience.",
            "Recommendations file delivered to inform the November debut budget.",
          ],
        },
      ],
      footnote:
        "Documentary dates are illustrative pending the schedule from Jane. Experiential is optional and activates only if greenlit around week 6 to 8. CCD reallocates weekly across all workstreams.",
    },

    // ===================================================================
    // 09. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "09",
      navLabel: "Investment",
      title: "Investment",
      intro:
        "The total program for the pre-debut window (July through September 2026) is $50,000 all-in. The active channel budget is $39,000 across paid social, YouTube, SWRM, clipping, and discretionary optimization. The remaining $11,000 covers the CCD retainer and fees. The November single and the official debut each authorize a fresh budget on the same structure.",
      tiers: [
        {
          label: "Pre-Debut Window (Jul to Sep)",
          budget: "$50,000",
          name: "Total Program",
          tagline:
            "All-in for the pre-debut window: $39,000 deployable across active channels plus $11,000 in CCD retainer and fees. The channel mix concentrates on clipping, paid social, YouTube, SWRM, and a discretionary optimization pool.",
          featured: true,
          deployable: "$39,000",
          feeBreakdown: {
            retainer: "$5,000",
            retainerDetail: "Flat campaign retainer, full pre-debut window (~3 months)",
            mediaManagementLabel: "Fees",
            mediaManagement: "$6,000",
            mediaManagementDetail: "Campaign fees across the pre-debut window",
          },
          breakdown: [
            { vertical: "Paid Social", amount: "$10,000" },
            { vertical: "YouTube", amount: "$5,000" },
            { vertical: "SWRM", amount: "$3,000" },
            { vertical: "Clipping", amount: "$15,000" },
            { vertical: "Discretionary", amount: "$6,000" },
            { vertical: "Retainer", amount: "$5,000" },
            { vertical: "Fees", amount: "$6,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "Custom Interactive Site / Web Game",
          budget: "Scoped on request",
          description:
            "Bespoke web experience with phone and email capture, piped to CRM for the November debut. The data-capture layer WAYF never built.",
        },
        {
          name: "IRL Pop-Up (LA + NY)",
          budget: "Scoped on request",
          description:
            "Two-day pop-ups around a limited-edition physical drop. Fan-shot content, merch and unit sales, door-level data capture, and US Billboard chart eligibility.",
        },
      ],
      footnote:
        "Total program is $50,000: $39,000 deployable channel budget plus $11,000 CCD retainer and fees. The breakdown totals exactly $50,000. Experiential add-ons are scoped and approved separately. Each future cycle (November single, debut, first comeback) gets its own authorization on this structure.",
    },
  ],
};
