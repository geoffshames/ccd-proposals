import type { StrategyPlanData } from "../plan-context";

export const ecaderPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/ecader/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "ecader-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "Pre-Debut Hype Strategy",
    title: "ECADER",
    subtitle:
      "A pre-debut hype and audience-acquisition framework. Engineered to manufacture WAYF-level velocity before a single song drops.",
    partnership: "Grid × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "June 2026",
    backgroundImage: "/images/ecader/ecader-hero.jpg",
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
        "A pre-debut campaign that builds hype, engagement, and owned audience for ECADER before any music exists, using the exact playbook that took WAYF BOYS to nearly 1M followers with zero songs released.",
      body: [
        "ECADER has no music until November. The opportunity is the seven months in front of it. A weekly documentary series launches in July, and that content is the fuel for a manufactured-momentum campaign designed to make the group feel inevitable before it ever debuts.",
        "The benchmark is explicit: WAYF BOYS. They built a top-tier 5th-gen launch trajectory before debuting a face, a name, or a song, on essentially zero paid media, by running a finite and replicable playbook. We reverse-engineered that playbook in full. This plan deploys it for ECADER with a tighter, paid-accelerated version: intentional clipping, a fan-page network, paid amplification of the winners, and an experiential layer that converts hype into data, units, and a chart story.",
        "The total program is $62,500 for the pre-debut window (July through September, roughly 12 weeks) leading into the November debut: $50,000 of working media plus $12,500 in CCD fees. There is no music to stream yet, so success is measured the way pre-debut is actually won: follower velocity, engagement rate, impression volume, conversation sentiment, and captured audience. Each subsequent phase (the November single, the debut, the first comeback) authorizes a fresh budget on the same structure.",
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
          "Stand up a fan-page network as owned distribution",
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
        "Pre-debut targeting is concept-and-comp-based, not data-based, because there is no music or pixel history yet. K-pop boy-group fandom is global from day one, and the geography is not US-led: across comparable hard-concept groups (RIIZE, BOYNEXTDOOR, TWS, CORTIS), Southeast Asia and Latin America drive the highest engagement and conversation volume, Korea and Japan anchor credibility and watch-time, and the US is a meaningful but secondary market. The cohort skews very young and overwhelmingly female. These splits set the initial clipping posture, fan-page content direction, and paid-social targeting, and re-weight fast once the July documentary and social accounts generate real pixel data.",
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
          note: "Dual engine: video mirror of TikTok plus lifestyle and concept carousels. Drives member bias culture and the fashion positioning a streetwear concept relies on. The fan-page network operates here and on TikTok; strongest engagement from Japan, Indonesia, and LATAM.",
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
        "The total program for the pre-debut window (July through September) is $62,500: $50,000 of working media plus $12,500 in CCD fees (a flat $5,000 retainer and 15% media management). The working media stands up clipping, two fan pages, the Origin placement buy, paid social, and SWRM in July, scales the winners through August, and sustains the hype into September as the runway to the November debut. CCD fees sit on top of the working media, not inside it. The November single and the debut each authorize a fresh budget on the same structure.",
      tiers: [
        {
          label: "Pre-Debut Window (Jul to Sep)",
          budget: "$62,500",
          name: "Total Program",
          goal:
            "$50,000 working media plus $12,500 CCD fees. Detonate in July alongside the documentary launch, scale the proven winners through August, and sustain hype into September. Twelve weeks of manufactured pre-debut velocity leading into the November single and official debut.",
          featured: true,
          includes: [
            "Clipping and seeding across the managed clipper network (180K-person server)",
            "Two HQ fan pages (IG plus TikTok)",
            "New media placements via Origin (reduced, one to two month test)",
            "Paid social amplification behind proven clips and posts",
            "SWRM comment amplification across all content",
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
          budget: "$10,000 (working media)",
          objective:
            "Make the ECADER documentary the most-clipped pre-debut content of the cycle. Intentional, smart, on-concept clipping, not volume for volume's sake. WAYF proved good clipping beats more clipping.",
          strategy:
            "Deploy the documentary episodes and concept content across the managed clipper network, including CCD's 180K-person clipping server, with tight creative direction: which moments, which hooks, which sounds. Coordinate sound usage so the clips seed a discoverable audio trail (the same way you trace a network by who used a sound). This runs in parallel with Origin, doubling down on the same content from a second angle.",
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
    // 05. Fan Page Network
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Fan Pages",
      title: "Vertical 2 / Fan Page Network",
      philosophy:
        "Priority two. Owned distribution that compounds. Two dedicated pages operating as an extension of the artist team.",
      subBlocks: [
        {
          label: "A",
          title: "Two HQ Fan Pages",
          budget: "$15,000 (2 pages x $2,500/mo x 3 months)",
          timeline: "Launch week 1, run through the pre-debut window",
          objective:
            "Build a credible grassroots footprint from day one and own the distribution rather than waiting for an aggregator fandom to self-organize the way WAYF's did.",
          strategy:
            "Run two dedicated fan pages across Instagram and TikTok, fed with shot lists and content requests in advance so they operate as owned inventory, not fan guesswork. They mirror and remix documentary content, build the everyday-fan narrative, and feed the retargeting pool that paid social draws from. Two pages at $2,500 per month each across the three-month window.",
          components: {
            heading: "What The Pages Do",
            items: [
              "Post on a managed cadence (roughly 3 per week IG, 4 per week TikTok per page)",
              "Remix documentary moments into fan-native formats",
              "Build the 'this group is already loved' perception before debut",
              "Feed retargeting pools for the paid-social layer",
              "Coordinate with the clipper network on shared concepts",
            ],
          },
          kpis: [
            "Combined page follower growth",
            "Engagement rate (saves, shares, comments)",
            "Retargeting pool size contributed to paid",
            "Share of conversation versus comparable pre-debut groups",
          ],
        },
      ],
      footnote:
        "Two pages are the starting point. Performance in the window determines whether the debut cycle scales the network wider.",
    },

    // ===================================================================
    // 06. New Media Placements (Origin)
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Placements",
      title: "Vertical 3 / New Media Placements",
      philosophy:
        "The K-pop-native channel buy. Origin's owned pages, used for what they are actually good at, reduced to a one-to-two-month test and complemented by our clipping rather than relying on them alone.",
      subBlocks: [
        {
          label: "A",
          title: "Origin Channel Network",
          budget: "$10,000 (working media)",
          timeline: "One to two month test, then reassess on performance",
          objective:
            "Use Origin for the one thing they do well: placement on their established K-pop pages. Buy the posts, not the upsell.",
          strategy:
            "Engage Origin on a focused brief: a defined number of posts across their K-pop channels per month, nothing else. Their pitch is that they know K-pop and have the pages, which is genuinely useful for native credibility. We reduce them from the standing 20K-per-month commitment to a one-to-two-month test, measure against follower velocity and conversation lift, and let our own clipping network carry the volume around them.",
          components: {
            heading: "How We Use Origin",
            items: [
              "Defined post volume on Origin's K-pop pages per month",
              "No bundled upsell: placement only, on our creative direction",
              "Reduced to a one-to-two-month test window",
              "Complemented (not replaced) by the managed clipper network",
              "Measured on velocity and conversation, not vanity post counts",
            ],
          },
          kpis: [
            "Follower velocity attributable to placement weeks",
            "Conversation and sentiment lift during the test",
            "Cost per net new follower versus the clipper network",
            "Go or no-go signal for continuation into the debut cycle",
          ],
        },
      ],
      footnote:
        "Origin is a channel buy, not a strategy. The test answers whether their K-pop pages out-perform our own clipping on a cost-per-result basis.",
    },

    // ===================================================================
    // 07. Paid Social & SWRM
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Paid + SWRM",
      title: "Vertical 4 / Paid Social & SWRM Amplification",
      philosophy:
        "The accelerant. Paid rides the winners the clipping and fan pages surface; SWRM drives conversation and social proof on everything. This is the layer WAYF did not need but we use to compress the timeline.",
      subBlocks: [
        {
          label: "A",
          title: "Paid Social Boosting",
          budget: "$12,000 (working media)",
          objective:
            "Put spend behind the clips and posts already proving themselves organically, across every applicable channel (TikTok, IG Reels, YouTube Shorts), to push high-performing assets past their organic ceiling.",
          strategy:
            "No guessing. Paid amplifies what the clipper network and fan pages have already validated. Test light in week one, then scale budget behind the top creative as winners emerge. Build retargeting pools from organic clip viewers and fan-page traffic so spend compounds rather than resets. Targeting starts from the concept-and-comp audience and refines on real pixel data as it accrues.",
          tactics: [
            "Boost proven clips, not untested creative",
            "Scale behind winners as the documentary episodes land",
            "Retarget clip viewers and fan-page traffic",
            "Run across TikTok, IG Reels, and YouTube Shorts",
            "Refine targeting weekly on incoming pixel data",
          ],
        },
        {
          label: "B",
          title: "SWRM Comment Amplification",
          budget: "$3,000 (working media)",
          objective:
            "Drive real-person conversation and social proof across all ECADER content and the clips seeded around it. Comments are where pre-debut hype reads as real.",
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
    // 08. World-Building & Experiential
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "Experiential",
      title: "World-Building & Experiential (Optional)",
      philosophy:
        "Scoped on top of the $50K working budget. The conversion layer that turns hype into data, units, and a chart story. This is where US-style marketing and K-pop marketing combine into something neither does alone.",
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
            "Stand up a bespoke ECADER web experience (an interactive concept site or a lightweight web game) that gives fans something to do, then captures phone numbers and emails at the point of engagement. Pipe captures into a Laylo-style CRM so that by the time the November single drops, ECADER texts an owned list rather than renting attention. This is the long-term business-building asset the budget would otherwise miss.",
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
        "All experiential items sit outside the $50,000 working budget and are scoped and approved individually based on pre-debut performance signals.",
    },

    // ===================================================================
    // 09. Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "09",
      navLabel: "Flight",
      title: "Proposed Media Flight",
      intro:
        "How the $50,000 working budget deploys across the pre-debut window. July detonates alongside the documentary launch (clipping, fan pages, Origin, SWRM all firing on the weekly episodes). August scales paid behind the proven winners and runs the fan pages at full cadence while Origin tapers. September sustains the hype and sets the experiential decision and the runway into the November debut.",
      totalBudget: "$50,000 working media",
      phases: [
        {
          label: "Detonation + Documentary Launch",
          window: "July 2026 / ~4 weeks",
          focus:
            "All engines fire on the weekly documentary episodes. The clipper network and Origin both attack the same content from two angles, the two fan pages launch, SWRM drives conversation density, and paid social tests light to find early winners. Goal: prove the concept travels and build the first follower-velocity curve.",
          budget: "~$20,000",
          tactics: [
            "Clipper network and 180K server attack each weekly episode",
            "Two HQ fan pages launch on IG plus TikTok",
            "Origin placement test begins on K-pop pages",
            "SWRM comment coverage timed to episode drops",
            "Paid social test phase against the concept-and-comp audience",
          ],
        },
        {
          label: "Scale The Winners",
          window: "August 2026 / ~4 weeks",
          focus:
            "Paid social scales behind the clips and posts that proved themselves in July. Fan pages run at full cadence feeding retargeting pools. Origin continues or sunsets based on its cost-per-result. Goal: compound clipping, fan pages, and paid into a single accelerating presence.",
          budget: "~$18,000",
          tactics: [
            "Paid social scales on proven winners across all channels",
            "Fan pages at full cadence, top themes rotated into paid",
            "Origin go or no-go decision on test performance",
            "Clipping continues, prioritizing the highest-velocity concepts",
            "Experiential decision point: greenlight pop-up and web build",
          ],
        },
        {
          label: "Sustain + Debut Runway",
          window: "September 2026 / ~4 weeks",
          focus:
            "Hold the hype at strength and convert it into owned audience ahead of the November single. Paid steps to evergreen plus retargeting, fan pages sustain, and the experiential and CRM layer (if greenlit) captures the audience the rest of the campaign built. Goal: hand the November debut a warm, owned, talked-about audience.",
          budget: "~$12,000",
          tactics: [
            "Paid social to evergreen plus retargeting only",
            "Fan pages sustain on top-performing concepts",
            "CRM capture ramps via owned channels and any web build",
            "November single brief, asset lists, and audience handoff prepared",
          ],
        },
      ],
      footnote:
        "Phase budgets are directional. CCD reallocates weekly across clipping, fan pages, placements, paid, and SWRM based on follower-velocity and conversation signals.",
    },

    // ===================================================================
    // 10. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "10",
      navLabel: "Timeline",
      title: "Execution Timeline",
      intro:
        "Week-by-week deployment across the pre-debut window. The six documentary episodes anchor July and early August (exact dates pending the release and content schedule from Jane). Clipping, fan pages, and SWRM launch in week 1. Origin runs a one-to-two-month test. Paid tests in week 1 and scales from week 3. The experiential decision lands around weeks 6 to 8 and, if greenlit, activates in September. The window is the runway into the November single and debut.",
      weeks: [
        { index: 1, label: "W1", dates: "Jul 6", note: "EP1" },
        { index: 2, label: "W2", dates: "Jul 13", note: "EP2" },
        { index: 3, label: "W3", dates: "Jul 20", note: "EP3" },
        { index: 4, label: "W4", dates: "Jul 27", note: "EP4" },
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
            { weekIndex: 1, intensity: "high", label: "LAUNCH" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
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
          name: "Fan Pages",
          cells: [
            { weekIndex: 1, intensity: "high", label: "LAUNCH" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Origin Placements",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "TEST" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "low" },
          ],
        },
        {
          name: "Paid Social",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "TEST" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "high", label: "SCALE" },
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
          name: "SWRM Comments",
          cells: [
            { weekIndex: 1, intensity: "high", label: "ON" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
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
          title: "Detonation: documentary EP1 + all engines launch",
          items: [
            "Documentary episode 1 drops. Clipper network and 180K server immediately cut it into hook-first verticals and seed across the network.",
            "Both fan pages launch on IG plus TikTok with concept-led launch posts.",
            "SWRM comment coverage goes live across owned posts and seeded clips.",
            "Origin placement test begins. Paid social launches in test mode against the concept-and-comp audience.",
          ],
        },
        {
          weekIndex: 2,
          title: "EP2 + first reads",
          items: [
            "Documentary episode 2 drops, feeding the next clip wave.",
            "First follower-velocity and engagement readouts on owned accounts.",
            "Paid test learnings logged; early winners flagged for scaling.",
            "Fan pages on launch cadence, building the retargeting pool.",
          ],
        },
        {
          weekIndex: 3,
          title: "EP3 + paid scales",
          items: [
            "Documentary episode 3 drops.",
            "Paid social shifts from test to scale behind the top-performing clips.",
            "Origin placement at full test weight; velocity attribution tracked.",
            "Clipping prioritizes the concepts showing the strongest travel.",
          ],
        },
        {
          weekIndex: 4,
          title: "EP4 + mid-run compounding",
          items: [
            "Documentary episode 4 drops.",
            "Paid at scaled budget; retargeting pools now include fan-page traffic.",
            "Fan pages rotate top themes into the paid creative set.",
            "Social listening readout: conversation volume and sentiment trend.",
          ],
        },
        {
          weekIndex: 5,
          title: "EP5 + sustain",
          items: [
            "Documentary episode 5 drops.",
            "All organic and paid engines compounding.",
            "Origin go or no-go signal forming on cost-per-result.",
            "SWRM density timed to the episode moment.",
          ],
        },
        {
          weekIndex: 6,
          title: "EP6 + experiential decision",
          items: [
            "Final documentary episode 6 drops.",
            "Experiential decision point: greenlight the LA and NY pop-up and the web build based on velocity to date.",
            "Origin test concludes; continue or sunset.",
            "Compile the July performance review across all workstreams.",
          ],
        },
        {
          weekIndex: 7,
          title: "Scale winners",
          items: [
            "Paid social at full scale on validated creative across all channels.",
            "Fan pages at full cadence.",
            "Clipping continues on the highest-velocity concepts.",
            "If greenlit, experiential pre-production begins.",
          ],
        },
        {
          weekIndex: 8,
          title: "Scale + experiential build",
          items: [
            "Paid heavy; cycle in fresh creative from best fan-page posts.",
            "Experiential build underway (web experience plus pop-up logistics).",
            "Origin fully sunset or extended on a fresh micro-brief.",
            "CRM infrastructure stood up ahead of capture.",
          ],
        },
        {
          weekIndex: 9,
          title: "Sustain",
          items: [
            "Paid maintains spend; deeper retargeting (video viewers, profile visitors).",
            "Fan pages on concept cuts and fan UGC compilations.",
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
            "Fan pages amplify the activation and its UGC.",
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
        "Documentary dates are illustrative pending the schedule from Jane. Origin runs a one-to-two-month test. Experiential is optional and activates only if greenlit around week 6 to 8. CCD reallocates weekly across all workstreams.",
    },

    // ===================================================================
    // 11. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "11",
      navLabel: "Investment",
      title: "Investment",
      intro:
        "The total program for the pre-debut window (July through September 2026) is $62,500: $50,000 of working media plus $12,500 in CCD fees (a flat $5,000 campaign retainer and 15% media management). The full $50,000 deploys to working media; the fees are billed on top, not deducted from it. The November single and the official debut each authorize a fresh budget on the same structure.",
      tiers: [
        {
          label: "Pre-Debut Window (Jul to Sep)",
          budget: "$62,500",
          name: "Total Program",
          tagline:
            "All-in for the pre-debut window: $50,000 working media plus $12,500 CCD fees. The working media deploys in full; CCD fees (flat $5,000 retainer plus 15% media management, $7,500) are billed on top.",
          featured: true,
          deployable: "$50,000",
          feeBreakdown: {
            retainer: "$5,000",
            retainerDetail: "Flat campaign retainer, full pre-debut window (~3 months)",
            mediaManagement: "$7,500",
            mediaManagementDetail: "15% of $50,000 managed working-media spend",
          },
          breakdown: [
            { vertical: "Clipping & Seeding", amount: "$10,000" },
            { vertical: "Fan Page Network (2 pages)", amount: "$15,000" },
            { vertical: "New Media Placements (Origin)", amount: "$10,000" },
            { vertical: "Paid Social Amplification", amount: "$12,000" },
            { vertical: "SWRM Comment Amplification", amount: "$3,000" },
            { vertical: "CCD Retainer", amount: "$5,000" },
            { vertical: "CCD Media Management (15%)", amount: "$7,500" },
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
        "Total program is $62,500: $50,000 working media (deploys in full) plus $12,500 CCD fees (flat $5,000 retainer plus $7,500 media management at 15%). Experiential add-ons are scoped and approved separately. Each future cycle (November single, debut, first comeback) gets its own authorization on this structure.",
    },
  ],
};
