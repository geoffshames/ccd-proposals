import type { ProjectData } from "../project-context";

export const eightyTwoMajor: ProjectData = {
  accentColor: "#FD3737",
  language: "en",
  languageAlternates: [
    { slug: "82major-ko", label: "한국어", code: "KO" },
  ],

  client: {
    name: "82MAJOR",
    logo: "",
    contactName: "Kevin Nishimura",
    contactRole: "Kakao Entertainment Group / SM US",
    contactEmail: "",
    industry: "K-Pop / Boy Group / Kakao Distribution",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "U.S. Growth Strategy. Through 1H 2027",
    tagline:
      "A long-term U.S. growth framework for 82MAJOR. Built around the SIGN / TROPHY cycle, the September comeback, the November U.S. tour, and the 1H 2027 Japan and Western expansion. Fandom-first, song-agnostic, scalable.",
    type: "U.S. Growth Strategy & Spend Allocation",
    startDate: "May 2026",
    endDate: "June 2027",
    duration: "12 months (rolling)",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "82MAJOR has tier-one infrastructure (SM Entertainment cap-table partnership, HoriPro Japan management, a proven eight-city U.S. tour, FEELM career-high 120K first-week) and tier-three streaming (309K Spotify monthly listeners vs. TWS 2.9M, RIIZE 2.6M, BOYNEXTDOOR 2.7M). The fandom layer is built. The discovery layer is not. The next 12 months either close that gap or entrench the group in tier three with infrastructure they no longer warrant. This deck is the framework for closing it: a fandom-first, song-agnostic, two-tier spend allocation built to scale from the SIGN / TROPHY cycle through the November U.S. tour and into the 1H 2027 Japan launch.",
    objectives: [
      "Frame a scalable U.S. expansion that supports the current SIGN / TROPHY push, the September comeback rollout, the November U.S. tour, and a 1H 2027 Japan-and-West expansion arc.",
      "Stand up always-on fandom infrastructure (U.S. fan-page network, CRM, email and SMS via Laylo, fan engagement mechanics) that survives between releases and compounds across cycles.",
      "Bridge the discovery-layer gap with digital marketing that does not depend on a viral moment: creator participation, DSP partnerships, paid amplification, narrative seeding.",
      "Convert the proven U.S. touring demand into a persistent U.S. channel via IRL activations (listening events, pop-ups, OOH, specialty physical) timed to release windows.",
      "Use PR as amplification of fandom, digital, and IRL momentum, not as a top-of-funnel discovery engine. PR earns when there is something to report.",
    ],
    subtitle:
      "Two-tier model. Tier 1 $50K builds the foundation. Tier 2 $100K accelerates audience growth and adds experiential. Both tiers are all-in costs including CCD execution.",
    imageCaption: "12-Month U.S. Growth Framework",
    stats: [
      { value: 5, label: "Verticals", description: "Fandom, Digital, Experiential, PR, Optional Add-Ons. calibrated for the U.S. market, scalable across release cycles, song-agnostic." },
      { value: 2, label: "Tiers" },
      { value: 12, label: "Month Horizon" },
      { value: 309, suffix: "K → 1M+", label: "Spotify MLs" },
    ],
  },

  discovery: {
    heading: "What the Data Says",
    summary:
      "Three findings shape every spend recommendation in this deck. They come from Chartmetric, Luminate, Hanteo, Circle, and direct platform data as of May 2026.",
    insights: [
      {
        label: "Headline Metric",
        finding:
          "Spotify follower-to-monthly-listener ratio is 0.439. Healthier than TWS at a tenth the scale. The conversion machine works once discovery works. The gap is not motivation. The gap is reach.",
        source: "Chartmetric, May 2026",
      },
      {
        label: "Strategic Tension",
        finding:
          "The biggest streaming track in the catalog is Sure Thing (3.7M streams), a melodic R&B B-side. The hip-hop title track from the same release sits at 1.5M. The brand markets hip-hop. The audience consumes melodic. This is a positioning question, not a creative reset.",
        source: "Spotify ATD, May 2026",
      },
      {
        label: "Infrastructure Gap",
        finding:
          "SM Entertainment took a cap-table position in May 2025. HoriPro signed Japan management in September 2025. The eight-city U.S. tour proved Western demand. None of the infrastructure has a fan-ops layer behind it. The group is built for tier one and ships from tier three.",
        source: "Soompi / Allkpop / Starnews",
      },
      {
        label: "Capture Reality",
        finding:
          "Fan data lives across Kakao distribution channels, Hello82 transactional capture, and one-off pre-save flows. Nothing is consolidated. No U.S.-owned email or SMS list lives in 82MAJOR's stack. The list exists. The sovereignty does not.",
        source: "Walled-garden audit, May 2026",
      },
      {
        label: "Touring As Catalog Activation",
        finding:
          "During the June-July 2025 tour window, dormant catalog re-activated: ON hit a 25K U.S. weekly peak two years post-release. Beat By 82 hit 37K. Silence Syndrome sustained 57K+. Touring is functioning as catalog marketing. The November U.S. tour is a streaming lever, not just a revenue lever.",
        source: "Tour-window streaming analysis, June-July 2025",
      },
    ],
    marketContext:
      "Fifth-generation K-pop boy groups are tiered. Tier one (TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE) is 2.5M+ Spotify MLs and ~150K+ first-week Hanteo. Tier three (82MAJOR, EVNNE, n.SSign) is sub-500K MLs. The mid-tier collapses fast: groups either compound into tier one inside 18 months or stall. 82MAJOR enters the next 12 months with the infrastructure of a tier-one group and the streaming layer of a tier-three group. That gap is the asset and the risk.",
  },

  philosophy: {
    sectionNumber: "02",
    heading: "Fandom Drives Everything. The Rest Amplifies.",
    thesis:
      "PR does not break artists. Strong fandom plus engagement creates moments worth reporting. IRL activations drive digital conversation. Digital momentum strengthens media and partnership opportunities. The hierarchy below is not a sequence. It is a foundation and three amplifiers. The foundation is non-negotiable, continuous, and song-agnostic. The amplifiers turn on around release windows.",
    hierarchy: [
      {
        label: "Fandom (Foundation, Always-On)",
        description:
          "The compounding layer. U.S. fan-page network, CRM and SMS via Laylo, owned-audience capture, fan engagement mechanics. Runs every week regardless of release calendar. Without this layer, every other dollar leaks.",
      },
      {
        label: "Digital (Amplifier)",
        description:
          "Where reach happens. Platform strategy, narrative positioning, creator participation, paid amplification, DSP and editorial partnerships. Calibrated to the fandom layer below it. Spend rises during release windows; the team stays the same.",
      },
      {
        label: "Experiential (Amplifier)",
        description:
          "Where social proof gets manufactured. Listening events, pop-ups, OOH, specialty physical, gaming and XR integrations. IRL creates content. Content creates digital chatter. Digital chatter feeds PR. Skipping this layer means the brand never has a moment worth covering.",
      },
      {
        label: "PR (Amplifier)",
        description:
          "Credibility and narrative extension. Not a top-of-funnel growth engine. PR works when fandom, digital, and IRL are already producing something to point at. Pitched too early, it burns relationships. Pitched at the right moment, it scales every prior dollar.",
      },
    ],
    principles: [
      "The fandom and digital infrastructure is song-agnostic. It supports SIGN / TROPHY, the September comeback, and every release after.",
      "Continuous spend on the foundation. Episodic spend on the amplifiers, calibrated to release windows and tour dates.",
      "Long-term U.S. market-building. Twelve months minimum. No campaign-by-campaign re-buildouts.",
      "Tier framing over impressionistic ranking. Every recommendation references where 82MAJOR sits versus tier-one peers (TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE) and what closing that gap requires.",
    ],
    footnote:
      "This is not a creative deck. This is not a campaign-by-campaign tactical document. This is the strategic framework that governs how budget is allocated across verticals and across the 12-month horizon.",
  },

  audience: {
    heading: "Who We Are Reaching",
    summary:
      "The U.S. audience for 82MAJOR splits four ways. Each segment requires a different acquisition channel, a different language, and a different content cadence. Generic K-pop fan acquisition flattens these into one undifferentiated buy and underperforms.",
    demographics:
      "Core demo skews 16-28, female-leaning (65/35), urban and college-town U.S. concentrated in LA, NYC, Chicago, Dallas, Atlanta, with high diaspora Korean-American overlap. Tertiary international fandom in SEA and LATAM that overlaps with K-pop but reads English-language content first.",
    demographicCards: [
      { label: "Age Range", value: "16-28 core", detail: "18-22 peak engagement" },
      { label: "Gender Skew", value: "65 / 35 F", detail: "Tracks fifth-gen K-pop boy group norm" },
      { label: "U.S. Metro Top 5", value: "LA, NYC, Chicago, Dallas, Atlanta", detail: "NYC absence on Spotify metros reads as touring-driven, not editorial-driven" },
      { label: "Spotify ML (May 2026)", value: "309K", detail: "Tier-three. Tier one is 2.5M+" },
    ],
    personas: [
      {
        name: "The Day One",
        ageRange: "18-26",
        description:
          "Followed 82MAJOR since debut. Lives on Korean fan Twitter, K-pop subreddits, and Discord servers. Buys physical, attends every U.S. tour stop, runs fan accounts. High LTV; low marginal acquisition need.",
        traits: ["Physical Buyer", "Tour Repeat", "Fan-Account Operator", "Bilingual"],
      },
      {
        name: "The U.S. Tour Convert",
        ageRange: "16-24",
        description:
          "First exposure was a friend dragging them to the U.S. tour, or a TikTok clip of the live show. Not yet a Spotify follower. The November tour is the conversion moment. Needs a U.S.-owned channel to land in.",
        traits: ["TikTok-First", "Streams Casually", "No CRM Footprint Yet", "Lives Off-Algorithm"],
      },
      {
        name: "The K-Hip-Hop Crossover",
        ageRange: "18-28",
        description:
          "Came to 82MAJOR through the production-credit narrative or a hip-hop feature (Beenzino / BIG Naughty target). Reads HipHop LE and Crash. Skeptical of K-pop framing. Will follow the brand if the brand earns it.",
        traits: ["Genre-First", "Skeptical of Idol Framing", "Reads Music Press", "Spotify Power User"],
      },
    ],
    psychographics: [
      "Reward authenticity. Will punish a positioning reset that does not match the music.",
      "Move between idol-fandom behaviors (fan armies, physical sales) and genre-fandom behaviors (DSP exploration, music press).",
      "Bilingual content tolerance is high. The U.S. fan-page network must subtitle, not Anglicize.",
      "IRL participation is a status signal. Listening events, pop-ups, and tour dates compound the brand more than digital alone.",
    ],
    painPoints: [
      "U.S. fan communications go through Korean-first channels. Most U.S. fans miss release-day timing, pop-up announcements, and pre-save windows.",
      "No persistent U.S. fan operations layer between tours. The November tour will produce fans the group cannot retarget.",
      "Editorial press positions the group as a hip-hop act while the streaming audience consumes the melodic B-sides. The narrative and the data disagree.",
      "Physical drops route through Korea-first channels. U.S. fans deal with import friction at the moment of highest intent.",
    ],
    purchaseTriggers: [
      "U.S. tour dates and listening-event invites. the single highest-converting trigger for casual-to-core conversion.",
      "Limited-edition physical drops (color variants, signed inserts, photocards) tied to release windows.",
      "Korean hip-hop features that earn co-sign press and crossover playlist coverage.",
      "Hello82 quarterly drops and the partner store ecosystem. the U.S. K-pop fan's default purchase rail.",
    ],
    platforms: [
      { name: "TikTok", description: "Discovery layer for the U.S. tour convert. Where dance challenges and live-clip cuts spread. The platform 82MAJOR is most under-built on." },
      { name: "Spotify", description: "Conversion layer. 0.439 follower-to-monthly-listener ratio is healthy. Pillar 1 is fueling discovery into this funnel." },
      { name: "Instagram", description: "Brand layer. Where Hello82 announcements, OOH receipts, and editorial coverage land. Primary feed for U.S. fans tracking the group between releases." },
      { name: "YouTube", description: "Long-form layer. Studio vlogs, production-credit content, U.S. tour diaries. The native home for the production-as-brand thesis." },
      { name: "Discord / Geneva", description: "Sovereignty layer. Does not exist yet. The U.S. fan ops layer this deck is building." },
    ],
    quotes: [
      { text: "Sure Thing is one of the best K-R&B tracks of the last three years and nobody who only listens to K-pop has heard it.", source: "r/kpop, March 2026" },
      { text: "Went to the Atlanta tour stop with one friend, the venue was sold out and I had no idea who anyone in the crowd was. Where do you find these people online?", source: "Twitter / X, July 2025" },
      { text: "The fact that all six members produce is buried so deep on the artist pages I had to read a Korean fan blog to find it.", source: "HipHop LE comment thread" },
    ],
  },

  targets: [
    { metric: "Spotify Monthly Listeners", value: "1M+", context: "Tier-two arrival by May 2027. Currently 309K. The follower-to-listener ratio is already tier-one healthy." },
    { metric: "Hanteo First-Week (7th Mini)", value: "200K+", context: "Up from 120K career-high on FEELM. Validates the SM and HoriPro infrastructure investment." },
    { metric: "Japan First-Week (Oricon)", value: "30K+", context: "Q1 2027 Japanese-language debut. Top-10 Oricon entry is the bar for a HoriPro-managed launch." },
    { metric: "U.S. Tour Total Attendance", value: "8K", context: "Doubles the August 2025 four-thousand-attendee total. Fewer cities, bigger rooms on the November return." },
    { metric: "U.S.-Owned CRM List", value: "10K+ emails / 5K+ SMS", context: "First-party data captured to Laylo and segmented by city, tour-stop, and engagement tier within six months." },
    { metric: "Editorial Placements", value: "3 anchor playlists + 5 hip-hop press", context: "Pillar 1 unlock. Spotify Equal Asia, Apple Music K-Hits, plus Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea." },
  ],

  competitive: {
    summary:
      "Eight fifth-generation peers in three tiers. 82MAJOR sits at the top of tier three on streaming and at tier-one on infrastructure. The gap to tier two (NCT WISH, NEXZ) is a single high-leverage campaign cycle. The gap to tier one (TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE) is the 12-month horizon this deck addresses.",
    competitors: [
      { name: "TWS. 2.9M Monthly Listeners", strength: "Built clean tier-one streaming despite later debut. Healthy fandom-to-discovery balance.", gap: "Less narrative differentiation than 82MAJOR. No production-credit story, no genre-positioning angle to exploit." },
      { name: "BOYNEXTDOOR. 2.7M Monthly Listeners", strength: "Strong U.S. metro footprint and Western press relationships built early.", gap: "Concept-driven but song-track concentration is fragile. 82MAJOR's catalog depth is the counter-argument." },
      { name: "RIIZE. 2.6M Monthly Listeners", strength: "SM-direct backing, full label support, dominant Korean physical sales.", gap: "82MAJOR's discovery-layer build can use the SM cap-table relationship without the SM operational ceiling." },
      { name: "ZEROBASEONE. 4.8M Monthly Listeners", strength: "Survival-show fandom, locked-in physical pre-orders, tier-one editorial visibility.", gap: "Group-format dependency. 82MAJOR's six-member, members-as-producers framing is the lane ZB1 cannot enter." },
      { name: "NCT WISH. 1.4M Monthly Listeners", strength: "Multi-language strategy, J-pop crossover support.", gap: "82MAJOR's HoriPro management partnership is structurally stronger than NCT WISH's Japan footprint for a sustained Japan launch." },
      { name: "NEXZ. 800K Monthly Listeners", strength: "JYP-style U.S. fan engagement playbook.", gap: "No production-credit identity. 82MAJOR's adult-music press lane (Pitchfork-adjacent, NME Asia, Complex, Mass Appeal Korea) is closed to NEXZ." },
      { name: "EVNNE. 420K Monthly Listeners", strength: "Tight visual identity, healthy active fandom.", gap: "Smaller infrastructure backing. The peer that 82MAJOR most needs to clear quickly to defend the tier-three escape." },
      { name: "n.SSign. 280K Monthly Listeners", strength: "Sub-label backing through F&F Entertainment.", gap: "82MAJOR is already ahead. Comp set is included for tier-stratification rigor, not as an active competitive threat." },
    ],
  },

  tiers: {
    sectionNumber: "06",
    heading: "Two Tiers. One Foundation. One Acceleration.",
    subheading:
      "Tier 1 builds the always-on foundation: U.S. fan-page network, CRM and SMS via Laylo, light digital, baseline PR. Tier 2 keeps the foundation and adds aggressive digital, influencer support, experiential activations, and broader OOH. Both tiers are all-in costs including CCD execution fees (a $2,500/month retainer and a 15% media management fee). Optional add-ons (radio, A&R, additional experiential, additional content production) sit outside both tiers and are scoped separately.",
    footnote:
      "Tiers are six-month deployable windows aligned to the September comeback rollout and the November U.S. tour. Reauthorization happens twice per year, in March and September.",
    tiers: [
      {
        label: "Tier 01: Foundation",
        name: "$50,000",
        tagline: "All-in. Six months. Establishes the U.S. fan ecosystem and sustains engagement between release windows.",
        price: "$50,000",
        priceSuffix: "all-in / 6 mo",
        priceContext: "CCD: $15K retainer ($2,500/mo × 6) + 15% media management ($3.5K) on $23K managed media. Net deployable to vendors and spend: $31.5K.",
        includes: [
          "Always-on U.S. fan-page network (3 channels, K-Pop-Nara-style ops via Infinitize or Beautiful Digital)",
          "CRM and SMS infrastructure stood up on Laylo. owned U.S. capture",
          "Fan engagement mechanics: contests, exclusive unlocks, VIP tier (light)",
          "Baseline digital spend on Meta, TikTok, YouTube. narrative seeding only",
          "DSP pitching and playlist support across the September comeback",
          "PR amplification: media relations on tentpole moments (comeback, U.S. tour)",
          "CCD strategic oversight, monthly reporting, vendor coordination",
        ],
        excludes: [
          "Experiential / IRL activations (listening events, pop-ups, OOH)",
          "Influencer / creator marketing spend",
          "Specialty physical / D2C product",
          "Radio promotion ($25K add-on)",
          "A&R / features strategy",
          "Additional content production",
        ],
        footerNote: "Recommended for a six-month proof window before reauthorizing into Tier 2.",
        featured: false,
      },
      {
        label: "Tier 02: Expansion",
        name: "$100,000",
        tagline: "All-in. Six months. Foundation plus aggressive digital, experiential, and influencer support. Built for the November tour and the 1H 2027 Japan setup.",
        price: "$100,000",
        priceSuffix: "all-in / 6 mo",
        priceContext: "CCD: $15K retainer ($2,500/mo × 6) + 15% media management ($11.1K) on $74K managed media. Net deployable to vendors and spend: $73.9K.",
        includes: [
          "Everything in Tier 1",
          "Expanded U.S. fan-page network (4-5 channels) with localization desk",
          "Aggressive digital spend on Meta, TikTok, YouTube, Spotify Ads. full-funnel",
          "Influencer / creator activations across TikTok and Instagram (Flighthouse-style and tastemaker tiers)",
          "DSP partnership campaigns (Spotify Equal Asia, Apple Music K-Hits) plus platform integrations",
          "Experiential activation: one listening event (Polygon / L-Acoustics style) per tier window",
          "Pop-up footprint timed to the November U.S. tour",
          "Strategic OOH (LA + NYC) timed to release",
          "Press push on the production-credit and hip-hop crossover narratives",
          "CCD strategic oversight, biweekly reporting, full vendor stack",
        ],
        excludes: [
          "Radio promotion ($25K add-on)",
          "A&R / features strategy (scoped separately)",
          "Additional experiential beyond the in-tier event (scoped separately)",
          "Additional content production (scoped separately)",
        ],
        footerNote: "Recommended baseline for the September comeback through the November U.S. tour.",
        featured: true,
      },
    ],
  },

  timelineHeading: "Twelve-Month Horizon",
  timelineSubheading:
    "Calibrated to the SIGN / TROPHY cycle currently in market, the September comeback, the November U.S. tour, and the 1H 2027 Japan launch. Always-on workstreams run through every phase. Episodic workstreams turn on at release windows.",
  timelineImageCaption: "12 Months / 4 Phases / 1 Strategy",
  timeline: [
    {
      phase: "Phase 1: Foundation Build",
      week: "May - Aug 2026",
      date: "Pre-Comeback",
      status: "in-progress",
      tasks: [
        "Stand up U.S. fan-page network (Infinitize or Beautiful Digital). 3 channels minimum",
        "CRM and SMS infrastructure stood up on Laylo, segmented by city and engagement tier",
        "SIGN / TROPHY tail support: DSP pitching, light digital, narrative seeding",
        "Audit and consolidate fan data across Hello82, pre-save flows, partner stores",
        "Comeback narrative architecture locked: title-track positioning + B-side angle resolved",
      ],
      ongoing: false,
    },
    {
      phase: "Phase 2: September Comeback",
      week: "Sept - Oct 2026",
      date: "7th Mini Release",
      status: "upcoming",
      tasks: [
        "Pre-save campaign (TikTok / IG) starting four weeks out",
        "Creator participation campaign (Tier 2 only): 8-15 creators across TikTok and Instagram",
        "Editorial pitches landed: Spotify Equal Asia, Apple Music K-Hits, hip-hop press (Crash, HipHop LE)",
        "Paid digital ramp across Meta, TikTok, YouTube, Spotify",
        "Tier 2 only: listening event (Polygon / L-Acoustics or equivalent), LA or NYC",
        "Hanteo first-week target: 200K+",
      ],
      ongoing: false,
    },
    {
      phase: "Phase 3: November U.S. Tour",
      week: "Nov - Dec 2026",
      date: "Return U.S. Run",
      status: "upcoming",
      tasks: [
        "U.S. tour activation: city-level CRM capture, partner-store routing, Hello82 integration",
        "Pop-ups timed to top-tier markets (LA, NYC, Chicago)",
        "OOH in LA and NYC during release week (Tier 2)",
        "Tour-window catalog reactivation: dormant catalog (Sure Thing, Stuck, ON) gets paid amplification",
        "Press leverage: tour photo content + member features in U.S. publications",
        "U.S. tour total attendance target: 8K",
      ],
      ongoing: false,
    },
    {
      phase: "Phase 4. 1H 2027 Expansion",
      week: "Jan - Jun 2027",
      date: "Japan + Catalog",
      status: "upcoming",
      tasks: [
        "Japan launch staged: Japanese-language single Q1 2027, Oricon top-10 target",
        "HoriPro coordination on J-Wave radio, CD-Japan / Tower Records / HMV retail",
        "Catalog reactivation campaign: Canvas video for top-10 catalog tracks, Spotify metadata fix",
        "U.S. fan ops continues compounding via fan-page network and CRM",
        "Reauthorize tier for the Q3 2027 cycle based on Phase 1-3 KPI delivery",
      ],
      ongoing: false,
    },
  ],

  deliverables: [
    {
      category: "Vertical 1: Fandom (Always-On Foundation)",
      icon: "01",
      items: [
        { name: "U.S. Fan-Page Network", quantity: "3-5 ch", description: "Dedicated U.S.-focused fandom ecosystem run through Infinitize, Beautiful Digital, or equivalent. Repurposes Korean content with subtitles, U.S.-specific edits, and a content-request layer with the agency. Three channels in Tier 1, four to five in Tier 2." },
        { name: "Laylo CRM + SMS", quantity: "Owned", description: "Email capture, SMS list, fan segmentation, retention flows. Owns the relationship outside the algorithm. Targets 10K+ email and 5K+ SMS within six months." },
        { name: "Fan Engagement Mechanics", quantity: "Continuous", description: "Contests, giveaways, exclusive content unlocks, fan rewards, VIP tier. Creates the public social proof of a fandom-first group." },
      ],
    },
    {
      category: "Vertical 2: Digital Marketing",
      icon: "02",
      items: [
        { name: "Platform Spend Allocation", quantity: "Tiered", description: "Meta, TikTok, YouTube, Spotify Ads. Narrative seeding in Tier 1, full-funnel in Tier 2: Pixel data captured to Meta and TikTok for cross-cycle redeployment." },
        { name: "Creator / Influencer Marketing", quantity: "Tier 2", description: "Tastemaker tier plus Flighthouse-style amplification. 8-15 creators per release window across TikTok and Instagram, with organic and paid creator support." },
        { name: "DSP + Streaming Support", quantity: "Per Cycle", description: "Playlist pitching, Spotify Equal Asia, Apple Music K-Hits, platform partnerships. The Pillar 1 discovery-layer unlock from the brand strategy." },
        { name: "Narrative Positioning", quantity: "Always", description: "Title-vs-B-side framing resolved: production-credit content, members-as-producers angle, hip-hop crossover narrative seeded to U.S. press and DSPs." },
      ],
    },
    {
      category: "Vertical 3: Experiential (Tier 2)",
      icon: "03",
      items: [
        { name: "Listening Events", quantity: "1 / cycle", description: "Polygon / L-Acoustics style elevated listening experience, LA or NYC. Partner with a brand or DSP for cross-promotion and cost offset." },
        { name: "Pop-Ups", quantity: "Tour-timed", description: "Standalone or layered onto Hello82 activations. Photo, custom-cup-sleeve, fan-sign formats. Tied to the November U.S. tour." },
        { name: "OOH", quantity: "LA + NYC", description: "Posters, QR-code campaigns, billboards, street snipes. Visible-area strategy near Spotify (DTLA) and PMC / Billboard (Westwood) per BDC-deck reference geometry." },
        { name: "Specialty Physical", quantity: "Drops", description: "Eco-friendly vinyl variants, color-exclusive cassettes, collectible photocard sets. locally produced where math supports it, imported where it does not." },
      ],
    },
    {
      category: "Vertical 4: PR (Amplification)",
      icon: "04",
      items: [
        { name: "Media Relations", quantity: "End-to-end", description: "U.S. growth story, comeback narrative, tour coverage, milestone press. PR as amplification, not as a primary growth engine." },
        { name: "Editorial Push", quantity: "Tiered Targets", description: "Tier 1: BUZZ, Front Row Live, Soompi, Allkpop. Tier 2: EARMILK, Consequence, NME, Pigeons & Planes. Tier 3: Billboard, Rolling Stone, Pitchfork. earned across the 12 months as fandom and digital momentum produces reportable moments." },
        { name: "Hip-Hop Press", quantity: "Cycle-Triggered", description: "Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea. Triggered by Korean hip-hop feature or production-credit content drop." },
        { name: "Tentpole Logistics", quantity: "As Needed", description: "In-market promo support, press junkets, interview coordination. Crisis monitoring included; crisis management at an additional fee." },
      ],
    },
    {
      category: "Vertical 5: Optional Add-Ons",
      icon: "05",
      items: [
        { name: "Radio Strategy", quantity: "+$25K", description: "Not included in Tier 1 or Tier 2: Separate $25K add-on for coordinated U.S. radio push (spins targets, station relationships, on-air premieres)." },
        { name: "A&R / Features Strategy", quantity: "Scoped", description: "Feature strategy, artist compatibility analysis, U.S. collaboration introductions. Beenzino, BIG Naughty, OLNL, Sik-K as the Korean hip-hop credibility unlock." },
        { name: "Additional Experiential", quantity: "Scoped", description: "Multi-event experiential, gaming and XR integrations, sponsored partnership executions beyond the in-tier listening event." },
        { name: "Additional Content Production", quantity: "Scoped", description: "Monthly studio vlog series, production-credit content, live performance recordings, episodic tour-diary content for YouTube." },
      ],
    },
  ],

  scope: {
    included: [
      "Always-on U.S. fan-page network (3 channels in Tier 1, 4-5 in Tier 2)",
      "Laylo CRM and SMS infrastructure, segmented and U.S.-owned",
      "Platform digital spend allocation across Meta, TikTok, YouTube, Spotify Ads",
      "DSP pitching and editorial relationship management",
      "PR amplification on tentpole moments (comeback, U.S. tour, Japan launch)",
      "Strategic oversight, vendor coordination, monthly (Tier 1) or biweekly (Tier 2) reporting",
      "Tier 2: creator marketing, listening event, pop-ups, OOH",
    ],
    excluded: [
      "Radio promotion (available as $25K add-on)",
      "A&R / features strategy (available as add-on. scoped and quoted separately)",
      "Additional experiential beyond the in-tier listening event (available as add-on)",
      "Additional content production beyond standard cycle assets (available as add-on)",
      "Crisis management (monitoring included; active crisis management at an additional fee)",
      "Detailed creative direction or campaign-by-campaign tactical plans. this deck is the strategic framework, not the executional brief",
    ],
    subheading:
      "Two tiers, five verticals, twelve-month horizon. Add-ons are explicitly out of tier and scoped on demand.",
  },

  quote: {
    model: "retainer",
    currency: "USD",
    lineItems: [
      {
        name: "CCD Strategic Retainer",
        description: "$2,500/month execution fee. Strategic oversight, vendor coordination, reporting, and CCD direct labor. Inside the all-in tier budget.",
        price: 2500,
        priceLabel: "/mo",
        recurring: true,
      },
      {
        name: "Media Management Fee",
        description: "15% of managed media spend. Billed only on what is deployed. Covers paid media planning, buying, optimization, and pixel data architecture. Inside the all-in tier budget.",
        price: 0,
        priceLabel: "15% / managed media",
      },
      {
        name: "Tier 1: Foundation",
        description: "$50,000 all-in, six months. CCD retainer + 15% on $23K managed media inside; net deployable to vendors and spend is $31.5K.",
        price: 50000,
        priceLabel: "all-in / 6 mo",
      },
      {
        name: "Tier 2: Expansion (Recommended)",
        description: "$100,000 all-in, six months. CCD retainer + 15% on $74K managed media inside; net deployable to vendors and spend is $73.9K.",
        price: 100000,
        priceLabel: "all-in / 6 mo",
      },
      {
        name: "Optional. Radio Strategy",
        description: "Outside the tier. Coordinated U.S. radio push (spins, station relationships, on-air premieres).",
        price: 25000,
        priceLabel: "add-on",
      },
    ],
    subtotal: 100000,
    discount: { label: "", percentage: 0, amount: 0 },
    total: 100000,
    paymentSchedule: [
      { milestone: "Month 1. Foundation Build kicks off", percentage: 17, amount: 16667, due: "On signature" },
      { milestone: "Month 2", percentage: 17, amount: 16667, due: "Day 30" },
      { milestone: "Month 3. Comeback launch", percentage: 17, amount: 16667, due: "Day 60" },
      { milestone: "Month 4", percentage: 17, amount: 16667, due: "Day 90" },
      { milestone: "Month 5. U.S. Tour", percentage: 17, amount: 16666, due: "Day 120" },
      { milestone: "Month 6", percentage: 16, amount: 16666, due: "Day 150" },
    ],
    paymentTerms: "Net 7 from invoice. Payable to Crowd Control Digital, LLC. Tier 2 example shown; Tier 1 prorates to $8,333/mo on identical structure.",
    paymentLink: "#approve",
  },

  nextSteps: [
    { step: 1, title: "Review", description: "Walk this deck with Kev Nish and the Kakao team. Pressure-test the philosophy, the tier math, and the 12-month sequence." },
    { step: 2, title: "Tier Selection", description: "Lock Tier 1 (Foundation) or Tier 2 (Expansion). Reauthorization happens twice per year." },
    { step: 3, title: "MSA + SOW", description: "Paper the engagement through a Kakao-CCD MSA with a six-month SOW. Optional add-ons scoped separately." },
    { step: 4, title: "Foundation Build", description: "Phase 1 kicks off within two weeks of signature: fan-page network stand-up, Laylo CRM build, narrative architecture lock." },
    { step: 5, title: "September Comeback", description: "Phase 2 launches against the 7th mini. Hanteo first-week target: 200K+. Spotify ML target by end of Phase 3: 600K+." },
  ],

  cta: {
    headline: "Twelve Months. One Decision.",
    body: "82MAJOR has tier-one infrastructure. The streaming layer is the gap. This is the framework that closes it. Approve to start the kickoff conversation. We will follow up within 24 hours.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/82major/hero1.png",
    hero2: "/images/82major/hero2.png",
    product: "/images/82major/product.png",
    editorial: "/images/82major/editorial.png",
    texture: "/images/82major/texture.png",
    brutalist: "/images/82major/brutalist.png",
    hero1Caption: "U.S. Growth Strategy / 12-Month Horizon",
    brutalistCaption: "82MAJOR × Kakao × Crowd Control Digital",
  },

  caseStudies: [
    { client: "MONSTA X", metric: "120K+", description: "TICKETS SOLD" },
    { client: "BBNO$", metric: "1.6B+", description: "SPOTIFY STREAMS" },
    { client: "PESO PLUMA", metric: "40M+", description: "TIKTOK CREATES" },
    { client: "ILLENIUM", metric: "8x", description: "PLATINUM" },
  ],
};
