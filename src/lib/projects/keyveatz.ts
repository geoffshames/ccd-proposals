import type { ProjectData } from "../project-context";

export const keyveatz: ProjectData = {
  accentColor: "#FD3737",
  language: "en",
  languageAlternate: { slug: "keyveatz-korean", label: "한국어 버전", code: "KO" },

  client: {
    name: "KEYVEATZ",
    logo: "",
    contactName: "Brian Kim",
    contactRole: "Management — AOMG / H1GHR MUSIC",
    contactEmail: "brian@aomgofficial.com",
    industry: "Music / K-Pop / Girl Group",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "KEYVEATZ : EP 2 RELEASE CAMPAIGN",
    tagline:
      "A focused per-release campaign engineered around the June 29 EP 2 drop. Three calibrated tiers built on a proven 5th-gen K-pop release marketing architecture.",
    type: "K-Pop Release Campaign — EP 2 (June 29, 2026)",
    startDate: "May 5, 2026",
    endDate: "August 31, 2026",
    duration: "~16 Weeks",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Generate DSP traffic, music video views, social trending, and Spotify monthly listener velocity surrounding the EP 2 release on June 29, 2026 — the first major-budget moment for the first-ever AOMG × H1GHR girl group. Three calibrated tiers ($150K / $175K / $200K all-in) deploy a full-stack 5th-gen K-pop release architecture: paid media + Influencer + Twitter + Clipping Support + Fan Pages + Strive.fm + Apple Music Sales + Shazam. Influencer + Twitter + Clipping + Fan Pages form the social compounding engine; YouTube + TikTok + Strive.fm carry streaming and discovery weight; Apple Music Sales + Shazam force chart positions. Every channel earns its line by pulling on at least one of four KPIs: Spotify monthly listener growth, MV view velocity, social chart positions, or owned audience capture.",
    objectives: [
      "Force MV view velocity through the EP 2 launch window — YouTube In-Stream + In-Feed advertising sized to compete with the BABYMONSTER / ILLIT debut benchmarks (10M+ views in 30 days)",
      "Hit Spotify monthly listener inflection — Spotify Showcase + Strive.fm in-rideshare playlisting + similar-artist conquesting flighted around the June 29 drop, calibrated against 5th-gen girl group benchmarks of 2.7M (MEOVV) to 4.7M (peer comps)",
      "Force chart positions through Apple Music Sales + Shazam — coordinated single sales windows and attributable Shazam usage to signal Apple's algorithms and force Korean and global K-Pop chart entries",
      "Build the social trending engine — heavy Influencer Campaign on TikTok + Reels, scaled Clipping Support / Edits distribution, owned-and-operated Fan Pages, and Stan Twitter activation across the launch window",
      "Capture social-data signal in Meta + TikTok pixels for retargeting through Q3 — every paid touchpoint feeds the audience graph we'll re-deploy on EP 3",
    ],
    subtitle:
      "Three calibrated tiers across paid media, Influencer, Twitter, Fan Pages, and chart-forcing channels — calibrated for a $150–$200K range.",
    imageCaption: "K-Pop Release Campaign — EP 2",
    stats: [
      {
        value: 12,
        label: "Channels Activated",
        description:
          "Full per-channel paid + creator + chart-force stack — Influencer, Fan Pages, YouTube, TikTok, Twitter, Spotify Playlisting, Clipping/Edits, Meta, Strive.fm, Spotify Advertising, Apple Music Sales, Shazam",
      },
      { value: 80, suffix: "+", label: "Influencer Activations" },
      { value: 14, label: "Regional Markets" },
      { value: 16, label: "Week Campaign Window" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before pricing a single line item we audited KEYVEATZ's full digital footprint, the AOMG / H1GHR roster context, and every 5th-gen girl group debut from 2023 to today. The findings point to one thing: KEYVEATZ has the rarest asset in 5th-gen K-pop right now — institutional hip-hop credibility from the labels that broke Korean rap globally. That credibility is the wedge. What's missing is the per-channel paid + creator + chart-position stack that turns wedges into monthly listeners and chart positions.",
    insights: [
      {
        label: "Inflection Window",
        finding:
          "The pre-release 'Key Beats' (April 29) and EP 2 (June 29) bracket a 60-day window that is statistically the highest-leverage period of any K-pop girl group's first 12 months. ILLIT cleared 10M Spotify monthly listeners in 20 days post-debut. MEOVV cleared 2.7M in 8 months. KEYVEATZ is currently sitting in this window with no paid amplification engine, no Strive.fm playlisting, no Apple Music Sales push, and no Shazam coordination. Every day this window stays open without coordinated activation is opportunity cost.",
        source: "Spotify monthly listener velocity analysis (ILLIT, MEOVV, KISS OF LIFE, BABYMONSTER) — public Spotify + kworb / Chartmetric data feed, May 2026",
      },
      {
        label: "The Subculture Wedge",
        finding:
          "AOMG × H1GHR is the first major K-pop label umbrella to launch a girl group from a hip-hop pedigree (Jay Park, GRAY, pH-1, Sik-K). MEOVV (2.7M monthly listeners) leveraged TBL/Teddy's BLACKPINK lineage to land in the same niche. YOUNG POSSE attempted hip-hop positioning under DSP without label credibility infrastructure and stalled at 448K. KEYVEATZ has the credibility MEOVV had at launch, but is being marketed at YOUNG POSSE budgets. Closing that delta is the entire thesis.",
        source: "Competitive landscape analysis — Spotify, IG, TikTok metrics across 5 peer girl groups (May 2026)",
      },
      {
        label: "Chart-Position Gap",
        finding:
          "Apple Music Sales + Shazam Campaign function as the chart-forcing layer in 5th-gen K-pop release cycles — coordinated single sales windows and attributable Shazam plays to signal both the Apple algorithm and Korean radio. None of that infrastructure is currently active for KEYVEATZ. Without it, a strong streaming campaign still gets buried below institutional HYBE / YG releases on the public scoreboards Korean fans actually check.",
        source: "Apple Music chart mechanics analysis; 5th-gen K-pop release-cycle benchmarking",
      },
      {
        label: "Influencer Engine Vacuum",
        finding:
          "ILLIT hit 10M monthly listeners in 20 days because HYBE pre-seeded Stan Twitter / TikTok / Reels with hundreds of coordinated creator activations 4-6 weeks pre-debut. KEYVEATZ has zero paid creator activations identifiable on TikTok or Reels at audit time. Korean creators (10K-200K follower fancam pages) cost less than $200/post and are the single highest-ROI channel for new girl group fancam culture. Major-budget 5th-gen rollouts routinely allocate 50–60%+ of paid spend to influencer for this exact reason — and KEYVEATZ currently has zero of it active.",
        source: "TikTok Creative Center / Reels marketplace audit; 5th-gen K-pop release-cycle budget benchmarks",
      },
      {
        label: "First-Mover Story Asset",
        finding:
          "'First-ever AOMG / H1GHR girl group' is a press hook every K-pop outlet (Soompi, Allkpop, Korea JoongAng, Billboard K, Rolling Stone Korea) will run with — once. The Bias List has already published a positive song review on debut day. That narrative capital expires fast. A coordinated paid + Influencer + Twitter + Fan Pages push timed to EP 2 is the only way to convert the press window into permanent fandom infrastructure before the news cycle moves on.",
        source: "The Bias List song review (April 29, 2026); Soompi / Allkpop debut coverage analysis",
      },
    ],
    marketContext:
      "May 2026 is a structurally favorable moment for a hip-hop-credible girl group debut. The HYBE-NewJeans aftermath has fragmented the 4th-gen audience, ILLIT's velocity has peaked, BABYMONSTER's narrative has stabilized, and the 'next thing' search behavior on Stan Twitter and r/kpop is at a 12-month high. No 5th-gen group currently owns the AOMG-credibility lane. KEYVEATZ either claims it in the next 90 days or watches it close.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "K-pop's 5th-gen audience is younger, more globally distributed, more genre-curious, and more skeptical of label manufacturing than any prior generation — which is exactly why a hip-hop-credible group from AOMG has unique unlock potential.",
    demographics:
      "13–34, female-skewed, US largest international market with strong concentration in Korea, Japan, Indonesia, Philippines, Singapore, Thailand, Malaysia, Australia, Canada, UK, Netherlands, Germany, and Taiwan.",
    demographicCards: [
      { label: "Age Tier 1", value: "13–17", detail: "Broad targeting (interest unavailable <18)" },
      { label: "Age Tier 2", value: "18–24", detail: "Peak Spotify save + UGC demo" },
      { label: "Age Tier 3", value: "25–34", detail: "Highest LTV — vinyl, fan-club, ticketing" },
      { label: "Geo split", value: "14 markets", detail: "US, KR, JP, ID, PH, SG, TH, MY, AU, CA, UK, NL, DE, TW" },
    ],
    personas: [
      {
        name: "The Subculture Stan",
        ageRange: "19–25",
        description:
          "Already follows the AOMG / H1GHR / Hi-Lite ecosystem. Listens to GRAY, pH-1, Sik-K, and the H1GHR Music posse cuts. Was waiting for AOMG to drop a girl group and is treating KEYVEATZ as a subculture insider's pick they want to put others onto. High-intent for merch, vinyl, and fan projects.",
        traits: ["AOMG Native", "Vinyl Buyer", "Playlist Curator", "Early Adopter"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "16–22",
        description:
          "Found 'Key Beats' through a fancam edit, a dance challenge, or a Reels duet. Doesn't yet know the label DNA — they just know the song hits. High-volume Spotify saves, follows on TikTok before any other platform, and is the most likely to push the song into a viral moment if the creative seeds it correctly.",
        traits: ["Sound-First", "Fancam Engager", "Save-Heavy", "Algorithm Native"],
      },
      {
        name: "The Stan Twitter Organizer",
        ageRange: "18–28",
        description:
          "Runs (or actively contributes to) a stan account on X. Coordinates streaming parties, voting blocs, hashtag campaigns, and fan projects across timezones. Treats KEYVEATZ as a multi-year investment. Wants infrastructure — fan club tiers, voting tools, exclusive drops — and is the highest-LTV fan in the database.",
        traits: ["Streaming Organizer", "Hashtag Wrangler", "Fan Project Lead", "Multi-Group Stan"],
      },
    ],
    psychographics: [
      "Skeptical of 'manufactured' debuts — credibility signals (label DNA, real producers, real instruments, real stage presence) carry more weight than they did for 4th-gen audiences",
      "Genre-curious and cross-pollinating — a girl group with hip-hop credibility unlocks listeners who don't normally engage with K-pop and converts them on the music alone",
      "Community-coordinated — streaming parties, voting blocs, fan projects, and Twitter hashtag campaigns are treated as identity expression, not just fan service",
      "Authenticity over polish — sincere member moments, behind-the-scenes content, and unscripted fancams outperform high-production label content on every platform that matters for compounding fandom",
    ],
    painPoints: [
      "5th-gen launches saturate fast — without a real creator engine, even strong music gets buried in algorithmic noise within 2 weeks",
      "Label-owned data infrastructure means the artist team can't run their own retargeting, segmentation, or independent SMS/email cadence",
      "Stan Twitter + TikTok cultures move at different speeds and require different creative — most label rollouts treat them as one channel and fail at both",
      "Korean local creator activation is high-ROI but operationally complex — most international agencies skip it, ceding the home market to label-led activations",
    ],
    purchaseTriggers: [
      "Coordinated viral moments — fancam edits, dance challenges, and reaction content that create urgency and FOMO across Stan Twitter and TikTok in the same 48-hour window",
      "Limited drops — vinyl, photocard sets, lightstick presales, and fan-club-exclusive content gated behind email/SMS opt-in",
      "The first 14 days post-release decide the trajectory — paid amplification velocity in this window matters more than at any other point in the campaign",
      "Press cycle moments — coordinated launch coverage, magazine features, photo shoot drops timed to release day produce content that compounds for weeks after",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "Primary discovery engine for 5th-gen girl groups. Sound usage, fancam edits, and dance challenges drive Spotify saves at 10x the rate of any other platform. Korea + global creator seeding is non-negotiable.",
      },
      {
        name: "Instagram Reels",
        description:
          "Where Korean local fan culture lives. Reels has eclipsed TikTok inside Korea for K-pop fancams. An IG creator program targeting 10K–200K follower fancam pages is the most underutilized channel in 5th-gen marketing.",
      },
      {
        name: "Stan Twitter / X",
        description:
          "Coordination hub. Streaming parties, voting blocs, hashtag campaigns. Lower follower counts than TikTok but the highest-intent communication channel. KEYVEATZ Central (@AOMGirls) already exists organically.",
      },
      {
        name: "YouTube",
        description:
          "MV view counts are the public scoreboard everyone watches. Plus shorts now functions as a fancam clip distribution layer. YouTube In-Stream + In-Feed ads timed to the EP 2 drop window are essential.",
      },
      {
        name: "Spotify",
        description:
          "Where the campaign is judged. Monthly listeners and save rate are the lagging indicators every other channel feeds into. Strive.fm in-rideshare playlisting + similar-artist conquesting are the levers we actually pull.",
      },
    ],
    quotes: [
      { text: "AOMG making a girl group is exactly the kind of thing kpop needed in 2026. Pop has gotten too safe.", source: "r/kpop discussion thread, April 2026" },
      { text: "Key Beats genuinely hits. You can hear the H1GHR fingerprints all over the production — this isn't just another bubblegum debut.", source: "The Bias List — song review, April 29, 2026" },
      { text: "I'll stan whoever AOMG puts out, full stop. Trust earned over years.", source: "Stan Twitter sentiment, May 2026" },
    ],
  },

  targets: [
    { metric: "Spotify Monthly Listeners", value: "2M+", context: "Conservative recommended-tier target post-campaign window. MEOVV reached 2.7M from a similar 'subculture-credible' launch posture without coordinated paid + Strive.fm + Apple Music Sales infrastructure. KEYVEATZ has the engine MEOVV didn't." },
    { metric: "EP 2 MV View Velocity", value: "10M+ in 30 days", context: "Conservative benchmark for a 5th-gen girl group with paid YouTube In-Stream + In-Feed + influencer pre-seeding. ILLIT cleared 30M in 14 days. MEOVV cleared 12M in 30 days. The gap is paid amplification — which we close." },
    { metric: "Apple Music + Shazam Position", value: "Top 50 Korea", context: "Coordinated Apple Music Sales windows + Shazam Campaign target a Top 50 Korea album chart entry post-release. Multiple major-label 5th-gen releases have charted via the same architecture." },
    { metric: "Organic UGC Volume", value: "5K+ posts", context: "Total fancam edits, dance challenges, and reaction content across TikTok + Reels in the EP 2 release window. Influencer Campaign + Clipping Support seed it; genuine fans sustain it." },
  ],

  competitive: {
    summary:
      "KEYVEATZ launches into the most concentrated 5th-gen girl group market K-pop has ever seen. ILLIT and BABYMONSTER own the institutional lane. KISS OF LIFE consolidated the R&B / hip-hop-adjacent niche from S2. MEOVV claimed the subculture-credible lane via TBL / Teddy. YOUNG POSSE shows what happens when hip-hop credibility lacks marketing infrastructure. KEYVEATZ has stronger label DNA than MEOVV had at launch, but is currently being marketed at YOUNG POSSE budgets — that mismatch is the entire opportunity. Numbers verified from Spotify-direct + kworb (Chartmetric data pipeline), May 2026.",
    competitors: [
      { name: "ILLIT — 12.5M Monthly Listeners", strength: "HYBE infrastructure, BELIFT marketing engine, Weverse data stack, fastest K-pop group to 10M monthly listeners (20 days post-debut)", gap: "ILLIT owns the easy-listening / HYBE-pop lane completely. KEYVEATZ doesn't compete here — but every dollar HYBE spends pulls from the same total addressable 5th-gen audience, which means KEYVEATZ needs creator volume to break through." },
      { name: "BABYMONSTER — 7.2M Monthly Listeners", strength: "YG global marketing machine, multilingual member composition, 2B+ total Spotify streams, big-budget MV production", gap: "BABYMONSTER is institutional and polished. KEYVEATZ can position as the credibility alternative — the group your friend who hates manufactured K-pop will actually listen to." },
      { name: "KISS OF LIFE — 4.7M Monthly Listeners", strength: "S2 Entertainment R&B / hip-hop positioning, 1B+ total streams, deep fan loyalty, multilingual appeal across 4 members", gap: "KISS OF LIFE landed in the niche KEYVEATZ should occupy. They got there with strong music + concept clarity but limited paid amplification. KEYVEATZ has stronger label-DNA story and the right paid stack to clear them by year-end." },
      { name: "MEOVV — 2.7M Monthly Listeners", strength: "Teddy / TBL pedigree (BLACKPINK production lineage), distinct virtual / subculture aesthetic", gap: "MEOVV is the closest direct comp — both groups leverage label-prestige hip-hop DNA in a 5-member format. MEOVV got to 2.7M without a coordinated US/SEA influencer program or Strive.fm. KEYVEATZ with that program added should clear them by Q3." },
      { name: "YOUNG POSSE — 448K Monthly Listeners", strength: "Strong hip-hop-positioning clarity, dedicated fan base, critical respect, real bars from real members", gap: "YOUNG POSSE is the cautionary tale: the right music, the right concept, the wrong marketing infrastructure. DSP didn't have AOMG's budget or H1GHR's creator network. KEYVEATZ has both — the failure pattern here is solved by exactly the engagement this proposal scopes." },
    ],
  },

  tiers: {
    sectionNumber: "06",
    heading: "Three Tiers. One Drop.",
    subheading:
      "A plan that moves the needle without putting CJ on tilt. The same proven 5th-gen K-pop release architecture, calibrated three ways for the EP 2 release window. Each tier shows the per-channel paid spend, $10K campaign retainer, and 15% agency fees on top.",
    footnote:
      "All tiers are all-in totals (paid spend + retainer + 15% agency fees). Numbers reflect the EP 2 campaign window: pre-release runway through 14-day post-release sustain. CJ / AOMG / H1GHR retains creative approval.",
    tiers: [
      {
        label: "Tier 01 — Lean",
        name: "$150K",
        tagline: "Real activation. Tight scope. The minimum that still clears YOUNG POSSE pace and approaches MEOVV territory.",
        price: "$150,300",
        priceSuffix: "all-in",
        priceContext: "$122K paid + $10K retainer + 15% agency fees",
        includes: [
          "Influencer Campaign — $31K (heavy paid creator volume on TikTok + Reels, mix of Korean + global tiers via LV8)",
          "Fan Pages — $20K ($10K/mo × 3 owned channels for the lean campaign window)",
          "YouTube Advertising — $15K (In-Stream + In-Feed)",
          "TikTok Advertising — $10K (Spark Ads + In-Feed)",
          "Spotify Playlisting — $10K (paid third-party playlist placements via curator network)",
          "Twitter / X Advertising — $9K (Stan Twitter activation, hashtag campaigns, coordinated drops)",
          "Clipping Support / Edits — $9K (scaled bulk UGC distribution + fancam edit seeding)",
          "Meta Advertising — $6K",
          "Strive.fm — $5K (in-rideshare playlisting, 2 weeks — caps at $5K)",
          "Spotify Advertising — $3K (Showcase)",
          "Apple Music Sales — $2K",
          "Shazam Campaign — $2K",
        ],
        excludes: [
          "TikTok AR Effect / CapCut Template",
          "OOH / DOOH",
        ],
        footerNote:
          "The minimum that still clears YOUNG POSSE pace. Heavy on Influencer + Fan Pages + Twitter + Clipping/Edits + Spotify Playlisting — the K-pop core, no fat.",
      },
      {
        label: "Tier 02 — Recommended",
        name: "$175K",
        tagline: "Heavy on the K-pop core — Influencer, Fan Pages, Twitter, Clipping/Edits — at meaningful scale. The number we'd pitch to any team serious about a Top-3 5th-gen girl group outcome.",
        price: "$174,450",
        priceSuffix: "all-in",
        priceContext: "$143K paid + $10K retainer + 15% agency fees",
        featured: true,
        includes: [
          "Influencer Campaign — $35K (heavy paid creator volume on TikTok + Reels, mix of Korean + global tiers via LV8)",
          "Fan Pages — $30K ($10K/mo × 3 owned channels for the core campaign window)",
          "YouTube Advertising — $14K (In-Stream + In-Feed + Engagement)",
          "TikTok Advertising — $12K (Spark Ads + In-Feed + TopView)",
          "Twitter / X Advertising — $12K (Stan Twitter activation, hashtag campaigns, Spark Ads, coordinated drops)",
          "Spotify Playlisting — $10K (paid third-party playlist placements via curator network)",
          "Clipping Support / Edits — $9K (scaled bulk UGC distribution + fancam edit seeding, 2x typical 5th-gen volume)",
          "Meta Advertising — $8K",
          "Strive.fm — $5K (in-rideshare playlisting, 2 weeks — caps at $5K)",
          "Spotify Advertising — $4K (Showcase + Audio Liner)",
          "Apple Music Sales — $2K",
          "Shazam Campaign — $2K",
        ],
        excludes: [
          "TikTok AR Effect / CapCut Template (available as add-on, $5K)",
          "OOH / DOOH",
        ],
        footerNote:
          "Real money on every channel that matters, no fat anywhere — this is the tier that delivers a defensible Top-3 5th-gen outcome.",
      },
      {
        label: "Tier 03 — Full Court Press",
        name: "$200K",
        tagline: "No corners cut. Every chart-forcing lever pulled. The plan if CJ wants this to be the AOMG headline of 2026.",
        price: "$199,750",
        priceSuffix: "all-in",
        priceContext: "$165K paid + $10K retainer + 15% agency fees",
        includes: [
          "Influencer Campaign — $35K (highest-volume paid creator program on TikTok + Reels, mix of Korean + global tiers via LV8)",
          "Fan Pages — $30K ($10K/mo × 3 owned channels for the core campaign window)",
          "Clipping Support / Edits — $20K (highest-tier scaled bulk UGC distribution + fancam edit seeding)",
          "YouTube Advertising — $18K",
          "Twitter / X Advertising — $18K (Stan Twitter activation, hashtag campaigns, Spark Ads, takeover units, coordinated drops)",
          "TikTok Advertising — $12K",
          "Spotify Playlisting — $10K (paid third-party playlist placements via curator network)",
          "Meta Advertising — $8K",
          "Strive.fm — $5K (in-rideshare playlisting — caps at $5K)",
          "Spotify Advertising — $4K",
          "Apple Music Sales — $3K",
          "Shazam Campaign — $2K",
          "Bonus: TikTok AR Effect / CapCut Template included for sound usage acceleration",
        ],
        footerNote:
          "If KEYVEATZ is the priority signing of the year, this is the tier that backs the claim. Engineered for chart-readable scale by August.",
      },
    ],
  },

  timelineSubheading:
    "A focused 16-week engagement built around the June 29 EP 2 drop — pre-release runway, launch window, and post-release sustain. Phases calibrated to a different KPI each.",
  timelineImageCaption: "16 Weeks / 4 Phases / 1 Drop",

  timeline: [
    {
      phase: "Pre-Release Build",
      week: "Weeks 1–4",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Set up paid media architecture — Meta, TikTok, YouTube, Twitter, Spotify ad accounts; pixel/CAPI tracking; conversion events; seed audiences",
        "Brief and contract Influencer Campaign — Korea + global creator pool, sound seeding for 'Key Beats' continued plus EP 2 lead single setup",
        "Activate Strive.fm in-rideshare playlisting in target US markets to start building Spotify monthly listener velocity",
        "Coordinate Apple Music Sales windows + Shazam Campaign infrastructure for the EP 2 launch",
      ],
    },
    {
      phase: "EP 2 Pre-Launch Window",
      week: "Weeks 5–8",
      date: "June 1–28, 2026",
      status: "upcoming" as const,
      tasks: [
        "Teaser content paid push across YouTube, TikTok, Reels, Twitter — concept teasers, member spotlights, behind-the-scenes",
        "First Influencer Campaign wave (40–60% of program) — focused on sound seeding for EP 2 lead single, Korea + global in parallel",
        "Pre-save campaign with email/SMS capture; Stan Twitter activation begins; Fan Pages publishing daily",
        "Spotify Playlisting goes live with paid third-party playlist placements; Apple Music Sales coordination begins for chart-force layer",
      ],
    },
    {
      phase: "EP 2 Launch + 14-Day Critical Window",
      week: "Weeks 9–10",
      date: "June 29 – July 12, 2026",
      status: "upcoming" as const,
      tasks: [
        "EP 2 release day — full paid media surge across YT, Meta, TikTok, Twitter, Spotify; Fan Pages + Clipping flow at peak; Stan Twitter activation peaks",
        "Influencer Campaign peak activation — 60–70% of program runs in this 14-day window post-release",
        "Apple Music Sales coordinated windows + Shazam Campaign attributable plays force chart positions",
        "Spotify Showcase + Audio Liner placements running through the launch window",
        "Clipping Support distributing UGC across TikTok / Reels at scale",
      ],
    },
    {
      phase: "Post-Release Sustain + Read",
      week: "Weeks 11–16",
      date: "July–August 2026",
      status: "upcoming" as const,
      tasks: [
        "Sustained paid flighting — keep top-performing creative in market, expand audiences, retarget engaged non-converters",
        "Second Influencer Campaign wave — focused on UGC compounding, dance challenge sustaining, narrative deepening",
        "Strive.fm continues through August (Tier 02+); Spotify monthly listener growth through similar-artist conquesting",
        "Full campaign attribution analysis — what drove monthly listener growth, MV velocity, chart positions, UGC volume; EP 3 readiness brief",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Channel-by-channel breakdown of the EP 2 campaign — a proven 5th-gen K-pop release marketing architecture, scaled to fit a $150–$200K range. Numbers below show the Tier 02 (Recommended) per-channel allocation.",

  deliverables: [
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        { name: "YouTube Advertising", quantity: "$14K", description: "In-Stream (TrueView) for low-cost MV view velocity, In-Feed (Discovery) for channel growth, Engagement campaigns for K-pop and similar-artist conquesting audiences" },
        { name: "Meta Advertising", quantity: "$8K", description: "IG + FB Feed/Stories/Reels traffic and DSP campaigns; social proofing on member-direct CTAs; geo-split across US, KR, JP, ID, PH, SG, TH, MY, AU, CA, UK, NL, DE, TW" },
        { name: "TikTok Advertising", quantity: "$12K", description: "Spark Ads boosting top-performing organic and influencer content; In-Feed creative; TopView units flighted to release day" },
        { name: "Twitter / X Advertising", quantity: "$12K", description: "Stan Twitter activation layer — coordinated content drops, hashtag campaign support, conversion to Spotify and YouTube" },
        { name: "Spotify Advertising", quantity: "$4K", description: "Showcase + Audio Liner placements driving discovery via similar-artist and broad genre conquesting on-platform" },
      ],
    },
    {
      category: "Influencer & UGC",
      icon: "◆",
      items: [
        { name: "Influencer Campaign", quantity: "$35K", description: "Paid creator activations across TikTok + Reels — fancam edits, dance challenges, reactions, discovery niches; sourced and managed via LV8 with a mix of Korean and global creator tiers" },
        { name: "Clipping Support / Edits", quantity: "$9K", description: "Scaled bulk UGC distribution — coordinated content packaging, seeding to micro-creators and stan accounts, daily clipping flow through the launch window at 2x typical 5th-gen volume" },
        { name: "Fan Pages", quantity: "$30K", description: "Owned-and-operated fan pages across 3 channels (TikTok, Instagram, X) — daily content publishing, audience growth, comment-section management, fancam reposts, news + lyric drops. $10K/mo for the 3-month core campaign window" },
      ],
    },
    {
      category: "Streaming + Chart Force",
      icon: "■",
      items: [
        { name: "Spotify Playlisting", quantity: "$10K", description: "Paid third-party playlist placements via curator network — K-pop, hip-hop adjacent, and broader discovery tiers; targets save rate and follower conversion through genuine listening sessions" },
        { name: "Strive.fm", quantity: "$5K", description: "In-rideshare playlisting in target US markets (LA, NYC, Dallas, Atlanta) — captive-audience Spotify follow + save mechanics, 2-week run flighted around EP 2 (caps at $5K — does not scale further)" },
        { name: "Apple Music Sales", quantity: "$2K", description: "Coordinated single sales windows to force Apple Music Korea + global K-pop chart positions" },
        { name: "Shazam Campaign", quantity: "$2K", description: "Attributable Shazams to signal Apple Music algorithms and Korean radio rotation" },
      ],
    },
    {
      category: "Targeting & Audiences",
      icon: "▲",
      items: [
        { name: "Regional Targets", quantity: "14 markets", description: "US, KR, JP, ID, PH, SG, TH, MY, AU, CA, UK, NL, DE, TW — geo-split to prevent over-servicing any single region; common K-pop campaign learning shows Indonesia + PH can over-service without breakouts" },
        { name: "Similar-Artist Targeting", quantity: "Chartmetric-driven", description: "GRAY, pH-1, Sik-K, BamBam, MEOVV, KISS OF LIFE, Stray Kids, BTS, ENHYPEN, NCT 127 plus broader K-pop genre and feature-specific lookalikes" },
        { name: "Lifestyle Targeting", quantity: "K-pop publishers", description: "allkpop, Soompi, Koreaboo audience targeting plus engagement audiences from social media data, website visitors, past purchasers, and KCON / K-pop event geofence data" },
        { name: "Age Tiers", quantity: "13–34", description: "13–17 broad targeting (interest unavailable <18), 18–24 peak save demo, 25–34 highest LTV" },
      ],
    },
    {
      category: "Reporting + Intelligence",
      icon: "●",
      items: [
        { name: "Weekly Pacing Dashboard", quantity: "16 weeks", description: "Live dashboard tracking Spotify monthly listeners, save rate, MV velocity, social follower growth, paid efficiency, influencer ROI; accessible to KEYVEATZ + AOMG / H1GHR" },
        { name: "Bi-Weekly Performance Reviews", quantity: "8 reviews", description: "Per-channel deep dives — what's working, what's fatiguing, where to redeploy; written and shared with the team" },
        { name: "Final Campaign Brief", quantity: "1 brief", description: "Post-release attribution, channel-by-channel ROI analysis, EP 3 readiness recommendations, and full handoff documentation" },
      ],
    },
  ],

  scope: {
    subheading:
      "What's included in the recommended Tier 02 ($175K) campaign. Tier 01 trims and Tier 03 adds, as outlined above. Pop-up events (Korea + US) sit just outside this scope as the highest-leverage post-launch add-on for a debut group — see Not Included.",
    included: [
      "Full per-channel campaign management — strategy, creative direction, optimization, reporting across all 11 channels in the recommended tier",
      "Influencer Campaign sourcing, contracting, content review, and distribution via LV8 — 100–120 paid creator activations across Korea + global",
      "Strive.fm in-rideshare playlisting setup and management across target US markets",
      "Apple Music Sales coordination + Shazam Campaign infrastructure to force chart positions",
      "Spotify Showcase + Audio Liner placements running through the launch window",
      "Weekly pacing dashboard, bi-weekly performance reviews, final campaign brief with EP 3 readiness recommendations",
      "Coordination with AOMG / H1GHR creative teams on shared deliverables (MV launches, photo shoots, press timing)",
    ],
    excluded: [
      "Pop-up activations (Korea + US) — IRL pop-up events, fan meet-ups, branded retail experiences in the post-EP-2 sustain phase. Available as additional-budget add-on; for a debut girl group, two pop-ups (one Seoul + one LA / NYC) is among the highest-impact IRL levers we know of for converting digital momentum into permanent fandom — scoped and quoted separately",
      "Music video production, photo shoots, and styling — handled by AOMG / H1GHR creative teams (CCD coordinates, does not produce)",
      "Music production, mixing, mastering, A&R (handled by AOMG / H1GHR)",
      "Direct fan-club platform management on Weverse / Bubble / Berriz (CCD focuses on owned-stack growth)",
      "Touring and live event production (available as add-on via TOUR CONTROL — scoped and quoted separately)",
      "OOH / DOOH activations — available as add-on (scoped and quoted separately, e.g., Times Square, Hongdae wild-postings)",
      "TikTok AR Effect House Filter, CapCut Template, Web-based UGC microsite — Tier 03 includes; Tier 01 / 02 available as add-ons",
    ],
  },

  quote: {
    model: "project" as const,
    currency: "USD",
    lineItems: [
      { name: "Influencer Campaign", description: "Heavy paid creator program on TikTok + Reels — fancam edits, dance challenges, reactions, discovery niches; mix of Korean and global creator tiers sourced and managed via LV8 (largest single line in the recommended tier)", price: 35000 },
      { name: "Fan Pages", description: "Owned-and-operated fan pages across 3 channels (TikTok, Instagram, X) — daily content publishing, audience growth, comment-section management, fancam reposts, news + lyric drops. $10K/mo for the 3-month core campaign window", price: 30000 },
      { name: "YouTube Advertising", description: "In-Stream (TrueView) + In-Feed (Discovery) + Engagement campaigns flighted around the EP 2 release window across all 14 regional markets", price: 14000 },
      { name: "TikTok Advertising", description: "Spark Ads + In-Feed + TopView units flighted to the release day window", price: 12000 },
      { name: "Twitter / X Advertising", description: "Stan Twitter activation layer — coordinated content drops, hashtag campaign support, Spark Ads on top-performing organic tweets, conversion to Spotify and YouTube. Designed to activate the existing organic stan account network without replacing it", price: 12000 },
      { name: "Spotify Playlisting", description: "Paid third-party playlist placements via curator network — K-pop, hip-hop adjacent, and broader discovery playlist tiers; targets save rate and follower conversion via genuine listening sessions, not editorial pitching", price: 10000 },
      { name: "Clipping Support / Edits", description: "Scaled bulk UGC distribution + fancam edit seeding to micro-creators and stan accounts; daily clipping flow through the launch window at 2x typical 5th-gen volume", price: 9000 },
      { name: "Meta Advertising", description: "IG + FB Feed/Stories/Reels — traffic + DSP + social proofing campaigns across all 14 regional markets", price: 8000 },
      { name: "Strive.fm", description: "In-rideshare playlisting in target US markets — caps at $5K (channel doesn't scale beyond a 2-week run)", price: 5000 },
      { name: "Spotify Advertising", description: "Showcase + Audio Liner placements driving discovery via similar-artist and genre conquesting", price: 4000 },
      { name: "Apple Music Sales", description: "Coordinated single sales windows to force Apple Music Korea + global K-pop chart positions", price: 2000 },
      { name: "Shazam Campaign", description: "Attributable Shazams to signal Apple Music algorithms and Korean radio", price: 2000 },
    ],
    subtotal: 143000,
    setupFee: { label: "Campaign Retainer + Agency Fees (15% on paid spend)", amount: 31450 },
    discount: { label: "", percentage: 0, amount: 0 },
    total: 174450,
    paymentSchedule: [
      { milestone: "50% on approval", percentage: 50, amount: 87225, due: "Upon approval" },
      { milestone: "50% pre-launch", percentage: 50, amount: 87225, due: "June 1, 2026" },
    ],
    paymentTerms: "7 days from invoice. Agency fees (15% on $143K paid spend = $21,450) included in the total above and billed across the two milestones.",
    paymentLink: "#",
  },

  nextSteps: [
    { step: 1, title: "Approve Tier + Sign", description: "CJ leadership picks a tier ($150K / $175K / $200K) and signs off. CCD sends a formal agreement and the first invoice." },
    { step: 2, title: "Onboarding Questionnaire", description: "Short intake — current ad accounts, Spotify For Artists access, AOMG label CRM bridge needs, KEYVEATZ team contacts, creator network blacklist." },
    { step: 3, title: "Channel Build (Week 1–2)", description: "Set up Meta, TikTok, YouTube, Twitter, Spotify ad accounts; activate Spotify Playlisting + Strive.fm; install pixels; brief and contract first Influencer Campaign wave." },
    { step: 4, title: "Pre-Release Activation (Week 3–8)", description: "First teaser content paid push goes live, first influencer wave activates, Apple Music Sales + Shazam infrastructure coordinated. Pacing dashboard live." },
    { step: 5, title: "EP 2 Launch + 14-Day Critical Window", description: "Full paid surge, peak Influencer activation, peak Fan Pages publishing, Stan Twitter coordination, Clipping flow at 2x volume, MV view velocity push." },
  ],

  cta: {
    headline: "First-ever AOMG × H1GHR girl group. Once-in-a-decade window. Let's not miss it.",
    body: "The first-ever AOMG × H1GHR girl group only debuts once. Three tiers, one drop, June 29 — let's build the engine that turns the press cycle into compounding monthly listeners and chart positions.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/keyveatz/hero1.jpg",
    heroBg: "/images/keyveatz/hero-bg.jpg",
    hero2: "/images/keyveatz/hero2.jpg",
    product: "/images/keyveatz/product.jpg",
    editorial: "/images/keyveatz/editorial.jpg",
    texture: "/images/keyveatz/texture.jpg",
    brutalist: "/images/keyveatz/brutalist.jpg",
    hero1Caption: "K-Pop Release Campaign — EP 2",
    brutalistCaption: "KEYVEATZ × Crowd Control Digital",
    ogImage: "/images/keyveatz/og-image.png",
  },
};
