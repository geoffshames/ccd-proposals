import type { ProjectData } from "../project-context";

export const alexWarren: ProjectData = {
  accentColor: "#E8732B",

  client: {
    name: "Alex Warren",
    logo: "",
    contactName: "Brian Sokolik",
    contactRole: "Management — Odd Projects",
    contactEmail: "",
    industry: "Music / Folk-Pop / Arena Touring",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "LITTLE ORPHAN ALEX : DATA ENGINE",
    tagline:
      "20+ arenas. 6 months. One system that turns every ticket scan, merch swipe, and TikTok click into an owned audience that compounds across every future tour and release — powered by TOUR CONTROL, built by the team doing this for the biggest tours in the game.",
    type: "Arena Tour Data Capture + Revenue Intelligence",
    startDate: "April 20, 2026",
    endDate: "October 20, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will deploy a full data capture and revenue intelligence layer around the LITTLE ORPHAN ALEX LIVE North American arena tour. CCD's proprietary TOUR CONTROL platform delivers real-time ticket pacing intelligence across every arena date (Bridgestone → MSG), while a purpose-built fan data system converts 29M+ of social reach and 54M Spotify monthly listeners into an owned Warreners database — captured at every touchpoint: ticket purchase, merch transaction, VIP registration, on-site QR scan, and TikTok-to-Laylo bridge funnel. Paid media campaigns sustain streaming velocity, activate album catalog beyond 'Ordinary,' and keep ticket sell-through healthy in every market. The result: the owned fan infrastructure Alex Warren doesn't have yet — one that makes every future tour cycle, release, and international expansion exponentially more profitable.",
    objectives: [
      "Deploy TOUR CONTROL across all 20+ North American arena markets — real-time sell-through pacing, risk-tier classification, and dynamic media allocation so budget lands on the dates that actually need support",
      "Build a first-party fan data system (Warreners database) — capturing email, SMS, and behavioral data from ticket buyers, merch customers, VIP attendees, and TikTok-to-Laylo funnels",
      "Launch album-deep-cut campaigns to mitigate one-hit dependency — drive streaming on 'On My Mind,' 'Bloodline,' and other catalog before and during the tour window",
      "Execute paid media campaigns across Meta, TikTok, and YouTube for ticket sales support, streaming sustain, merch promotion, and international market warm-up (UK / AUS / EU)",
      "Create data-gated exclusives — city-edition merch, early VIP access, attendee-only content — turning every exclusive into both a capture moment and an incremental revenue driver",
    ],
    subtitle:
      "Data capture, real-time tour intelligence, and paid media — built for an artist with 54M monthly listeners and zero owned fan infrastructure.",
    imageCaption: "Arena Tour Data Capture + Revenue Intelligence",
    stats: [
      {
        value: 20,
        suffix: "+",
        label: "Arena Markets",
        description:
          "Real-time ticket pacing and sell-through intelligence via TOUR CONTROL across every LITTLE ORPHAN ALEX LIVE date from Bridgestone to MSG",
      },
      { value: 100, suffix: "K+", label: "Fan Data Target" },
      { value: 6, label: "Month Campaign" },
      { value: 4, label: "Revenue Streams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited Alex Warren's full digital ecosystem — website, socials, streaming, merch, and the competitive emotional-Americana touring landscape. The findings are striking. Warren has one of the most valuable audiences in music right now — 54M Spotify monthly listeners, 19.9M TikTok followers, a 10-week #1 in 30+ countries. And almost none of it is owned. The gap isn't awareness. It's infrastructure. The data layer that captures, segments, and monetizes this audience doesn't exist yet — and the arena tour is the last window to build it before the moment passes.",
    insights: [
      {
        label: "Uncaptured Audience",
        finding:
          "54M Spotify monthly listeners. 19.9M TikTok followers. 5.2M Instagram. 20+ arena dates selling on Ticketmaster. Zero documented email list, no SMS opt-in, no fan club, no Laylo. Every ticket buyer, every TikTok liker, every merch customer is a ghost after the transaction. The audience is built — the capture system isn't.",
        source: "Ticketmaster audit / social platform analysis",
      },
      {
        label: "Album-to-Tour Conversion Leak",
        finding:
          "'You'll Be Alright, Kid' (July 2025) is a 21-track album featuring ROSÉ and Jelly Roll — but 'Ordinary' drives 90%+ of streaming. No strategic deep-cut rollout sustained post-release. Tour starts May 2026, 10 months after drop. The peak curiosity window is closing right now, and the back catalog is still underactivated.",
        source: "Spotify / Chartmetric catalog audit",
      },
      {
        label: "Arena Scale-Up Risk",
        finding:
          "First North American arena headline tour ever. 6–8x capacity jump from 2024 theaters. Bridgestone (20K), MSG (20K), Crypto.com (19K), Climate Pledge (17K) — 2026 arena shows are selling but not at the instant-sellout velocity of 2025 theater stops. TOUR CONTROL market intelligence becomes essential — not optional.",
        source: "Ticketmaster pacing review / 2025 tour comp",
      },
      {
        label: "'Ordinary' Fatigue Risk",
        finding:
          "Grammy Best New Artist loss to Olivia Dean despite 'Ordinary' dominating the year signaled industry skepticism about depth. Reddit critics: 'the musical equivalent of Cornflakes.' Defenders: 'I will defend Alex Warren with my LIFE.' The polarization is real — 2026 positioning needs to lock in 'serious album artist' identity before the one-hit narrative solidifies.",
        source: "Reddit / Resetera / music press sentiment analysis",
      },
      {
        label: "International Unlock",
        finding:
          "'Ordinary' was #1 for 13 weeks in the UK, bestselling song of 2025 in Australia, New Zealand, UK, Iceland, Netherlands, Switzerland. European arena dates launched April 2026. AUS/NZ arena tour announced for Aug–Sept 2026. North America is only the first leg — the data captured here seeds every international market that follows.",
        source: "IFPI / Official Charts / Billboard international",
      },
    ],
    marketContext:
      "The emotional-Americana wave is still cresting — but showing early maturation signals. Teddy Swims (50.8M monthly listeners) and Benson Boone (40.6M) established the archetype. Warren arrived with the most dominant single of any of them (10-week #1, 4th-bestselling song globally in 2025). The 2026 tour is the window to convert commercial dominance into owned audience before the category consolidates further. Every month without a data capture system is streaming velocity and ticket revenue that can never be retargeted.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Warreners are a cross-generational audience built on emotional authenticity — Gen Z TikTok discoverers, millennial emotional-Americana fans, and a notable faith-adjacent segment drawn to Warren's spiritual undertones. The audience is 29M+ across platforms, loyal, polarized in public discourse, and almost entirely unowned as a marketing asset.",
    demographics:
      "18–34 core, ~60% female, North America dominant with strong UK, Australia, and New Zealand secondary markets.",
    demographicCards: [
      {
        label: "Age Range",
        value: "18–34 core",
        detail: "18–24 TikTok peak, 25–34 radio/streaming",
      },
      {
        label: "Gender",
        value: "~60% female",
        detail: "Strong male crossover (unusual for the genre)",
      },
      {
        label: "Geography",
        value: "NA + UK + AUS",
        detail: "Nashville, NYC, LA, Atlanta, Dallas top NA",
      },
      {
        label: "Behavior",
        value: "Multi-platform",
        detail: "TikTok for discovery, Spotify for loyalty, IG for lifestyle",
      },
    ],
    personas: [
      {
        name: "The Ordinary Convert",
        ageRange: "18–24",
        description:
          "Discovered Warren through 'Ordinary' going viral on TikTok or the Love Is Blind Season 8 reunion moment. High streaming intent, casual relationship with the rest of the catalog. First arena show of their life is the pull — not the artist's discography.",
        traits: ["TikTok-Native", "Love Is Blind Crossover", "First-Time Concert", "Spotify-Casual"],
      },
      {
        name: "The Emotional-Americana Fan",
        ageRange: "24–32",
        description:
          "Lives in the Noah Kahan / Benson Boone / Teddy Swims overlap zone. Treats folk-pop vulnerability as a genre, not a moment. Owns vinyl, buys tour merch, follows artists across multiple releases. Values album depth over viral singles.",
        traits: ["Album Streamer", "Vinyl Buyer", "Kahan/Boone Overlap", "Deep-Cut Advocate"],
      },
      {
        name: "The Faith-Adjacent Listener",
        ageRange: "22–40",
        description:
          "Hears 'Ordinary' as spiritual devotion as much as love song. Responds to the grief narrative (Warren's father's passing), the scriptural imagery, the emotional earnestness. Quieter demographic — less loud on TikTok, heavier on Spotify and Apple Music catalog depth.",
        traits: ["Spotify Heavy", "Catalog Streamer", "Shares With Family", "Attends with Partner"],
      },
    ],
    psychographics: [
      "Emotional authenticity over polish — Warren's willingness to be vulnerable about grief, faith, and perseverance is the core draw. Fans want realness, not performance.",
      "Defender energy — the Warreners who love him love him hard. They've seen the Hype House origin criticism, the 'AI slop' takes, the Grammy loss, and they close ranks. This is a fandom that mobilizes when prompted.",
      "Cross-platform loyalty — the TikTok discoverer doesn't stay on TikTok. They follow to IG, they stream on Spotify, they show up to the arena. The infrastructure to capture that journey is what's missing.",
      "Dual-reading comfort — fans who read 'Ordinary' as romance and fans who read it as devotional both claim the song. The tent is bigger than most emo-folk acts. Any segmentation strategy has to honor both.",
    ],
    painPoints: [
      "No fan club, no presale tier, no priority access — every Warrener competes with the general queue, so the 'Ordinary' Convert and the Day One both hit the same Ticketmaster wall at the same second",
      "No direct communication channel — fans rely on TikTok's algorithm and Instagram's decaying feed to find out about drops, shows, and releases",
      "Arena ticket prices ($273 average) with zero bundled value from the artist side — no merch bundles, no exclusive content, no VIP acknowledgment",
      "Album catalog (21 tracks) is treated as background — no strategic deep-cut marketing means fans who want more than 'Ordinary' don't get fed",
    ],
    purchaseTriggers: [
      "Arena-scale FOMO — first NA arena headline tour ever, 20+ dates, finite capacity; the 'Ordinary' Convert and the Americana fan are both chasing the same seats",
      "City-edition and tour-exclusive merch — scarcity + geography creates the exact conditions that drive data opt-in and impulse spend",
      "Catalog breadth reveals — when fans realize 'Bloodline' with Jelly Roll and 'On My Mind' with ROSÉ exist, streaming depth expands; the conversion trigger is awareness, not taste",
      "Faith and grief narrative moments — interview clips, acoustic performances of 'One More I Love You,' tour journal content unlock the emotional-core fans who don't live on TikTok",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "19.9M followers, 1.2B likes. The platform that broke 'Ordinary' and broke Warren. Discovery engine. Underutilized for data capture — no Laylo bridge, no bio funnel, no comment-to-SMS plays running.",
      },
      {
        name: "Instagram",
        description:
          "5.2M followers. Lifestyle and tour content hub. Stories and Reels drive the highest engagement. Currently no linked email capture, no story-to-SMS flows, no retargeting infrastructure.",
      },
      {
        name: "Spotify",
        description:
          "54M monthly listeners. Chartmetric Rank #58 globally. 'Ordinary' drives the majority of streams — album catalog depth is a dormant asset. No pre-save campaigns running, no playlist retargeting, no merchandising integration.",
      },
      {
        name: "YouTube",
        description:
          "4.1M subscribers. Official videos + Shorts. Tour trailer and behind-the-scenes content are the most underutilized opportunity — YouTube subscribers are high-intent but aren't being converted into owned email/SMS.",
      },
    ],
    quotes: [
      {
        text: "girl i will defend alex warren with my LIFE i've been following for years and he is so nice and has worked so hard for his music and his literal LIFE",
        source: "TikTok / Resetera fan thread",
      },
      {
        text: "imagine dragons with vocals like hozier",
        source: "Resetera user / cross-listen analysis",
      },
      {
        text: "Love both songs. He's such a good person fr — like you can feel the faith in it.",
        source: "Reddit r/popheads sentiment",
      },
    ],
  },

  targets: [
    {
      metric: "Fan Database Size",
      value: "100K+",
      context:
        "Capture email/SMS data from 100,000+ Warreners across every tour touchpoint — ticket buyers, merch customers, VIP attendees, and TikTok/IG-to-Laylo funnels. This becomes the owned audience for every future cycle, every release, and every international leg.",
    },
    {
      metric: "Data Capture Rate",
      value: "35%+",
      context:
        "Target 35% opt-in rate from ticket holders across all 20+ arena markets — achievable through city-edition merch drops, VIP tier registration, and post-show digital bundles gated behind SMS/email capture.",
    },
    {
      metric: "Incremental Merch Revenue",
      value: "+25%",
      context:
        "Lift per-head merch revenue through pre-tour drops, city-exclusive designs, arena-specific bundles, and post-show digital content packages — vs. a no-intervention baseline. Arena tours typically drive 3–5x per-show merch vs. theater stops.",
    },
    {
      metric: "Catalog Streaming Lift",
      value: "+40% non-Ordinary",
      context:
        "Drive streaming on non-'Ordinary' album tracks (ROSÉ collab 'On My Mind,' Jelly Roll collab 'Bloodline,' 'Eternity,' 'Everything') through paid media, playlist pitching support, and tour-setlist-driven catalog campaigns. Mitigates one-hit perception risk.",
    },
  ],

  competitive: {
    summary:
      "Alex Warren competes for the same emotional-Americana / earnest-bro audience as Teddy Swims, Benson Boone, and Noah Kahan — all with established tour infrastructures, fan clubs, and owned data stacks. Warren arrived with the most dominant single in the category (10-week #1, 4th-bestselling song globally in 2025) but without the marketing infrastructure to compound that dominance. The 2026 arena tour is the inflection point to close the infrastructure gap — because the commercial gap is already closed.",
    competitors: [
      {
        name: "Teddy Swims — 50.8M Monthly Listeners",
        strength:
          "Established lane as the current earnest-bro archetype post-'Lose Control' (2024). Atlantic's highest-played record of 2024. Proven arena draw with mature tour infrastructure and recurring merch drops.",
        gap: "Swims 2025 releases did not replicate 'Lose Control' impact. Warren caught the category momentum on the way up. The gap to exploit: Swims has the brand maturity but his single-to-single gap is widening. Warren's back catalog plus 'Ordinary' sustain, if marketed right, can consolidate the lane.",
      },
      {
        name: "Benson Boone — 46.4M Monthly Listeners",
        strength:
          "Consistent chart presence ('Beautiful Things,' 'Fireworks'). The Voice pedigree. Cleaner pop-vocal lane with younger Gen Z skew. Grammy Best New Artist nominee in 2025 (lost to Chappell Roan) — institutional credibility.",
        gap: "Has not generated a 10-week #1 or the viral sync moment Warren got (Love Is Blind catalyzed 'Ordinary'). Boone's audience is established; Warren's is still forming — which means it's still moldable, if the capture infrastructure exists right now.",
      },
      {
        name: "Noah Kahan — 29.2M Monthly Listeners",
        strength:
          "Category founder of the 'earnest indie-folk breakout' playbook. 'Stick Season' is the cultural reference point. Mature touring operation, strong international presence, established fan club and merch ecosystem.",
        gap: "'Stick Season' was 2022–2023. Kahan has not matched that momentum in 2024–2025. Warren arriving now with a 10-week #1 and a freshly Grammy-nominated narrative has the 'new guard' advantage — but only if he builds the Kahan-tier fan infrastructure during this tour cycle, not after it.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through arena tour execution and post-tour monetization — every phase designed to maximize data capture and incremental revenue across the LITTLE ORPHAN ALEX LIVE tour window.",
  timelineImageCaption: "6 Months / 6 Phases / 20+ Arenas",

  timeline: [
    {
      phase: "Infrastructure Build",
      week: "Weeks 1–4",
      date: "April 2026",
      status: "upcoming" as const,
      tasks: [
        "Deploy TOUR CONTROL platform — ingest ticket pacing data across all 20+ North American arena dates, configure sell-through prediction, risk-tier alert thresholds",
        "Build Laylo fan data infrastructure — SMS/email capture flows, segmentation architecture (market, fan age, TikTok vs streaming origin, merch buyer vs VIP), welcome sequences",
        "Set up paid media architecture — Meta, TikTok, and YouTube ad accounts, pixel/CAPI tracking, seed audiences from Spotify/socials, conversion events wired to ticket and merch funnels",
        "Design data-gated exclusive strategy — city-edition merch, early VIP access tiers, post-show digital bundles, all tied to email/SMS opt-in",
      ],
    },
    {
      phase: "Pre-Tour Launch",
      week: "Weeks 5–8",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch pre-sale data capture campaigns — Laylo drop pages for each arena market, SMS keyword campaigns, TikTok-to-list conversion funnels leveraging 19.9M follower base",
        "Activate paid media for ticket sales support — geo-targeted Meta and TikTok campaigns on underperforming or slower-pacing markets",
        "Begin TOUR CONTROL market monitoring — weekly pacing reports, risk classification, and budget reallocation as Bridgestone opens May 25",
        "First data-gated album deep-cut campaign — 'On My Mind' (ROSÉ) or 'Bloodline' (Jelly Roll) promo sequence rewarding SMS/email subscribers with exclusive content",
      ],
    },
    {
      phase: "Tour Execution",
      week: "Weeks 9–16",
      date: "June – July 2026",
      status: "upcoming" as const,
      tasks: [
        "Run TOUR CONTROL in real-time — daily pacing dashboards, dynamic media shifts to markets below sell-through threshold, velocity alerts through the MSG closer July 15",
        "Execute city-by-city lifecycle campaigns — pre-show hype (3 days out), day-of push, post-show exclusive drop (24hr window) for every arena date",
        "On-site data capture at every arena — QR-to-Laylo at entry, SMS keyword signage, merch booth opt-in incentives, VIP registration data sync with Ticketmaster",
        "Paid media sustain — retargeting engaged non-buyers, lookalike expansion from captured opt-ins, catalog deep-cut promotion in tour markets",
      ],
    },
    {
      phase: "Post-Tour Capture & Monetization",
      week: "Weeks 17–20",
      date: "August 2026",
      status: "upcoming" as const,
      tasks: [
        "Full tour data analysis — capture rates by market, Warreners database composition, revenue attribution across ticket / merch / streaming touchpoints",
        "Launch post-tour merch drops to the captured database — tour recap exclusives, city-edition restocks, tour film tease bundles",
        "Spotify catalog sustain campaigns — paid media behind album deep cuts to beat the 'post-tour streaming cliff' competitors consistently hit",
        "TOUR CONTROL season report — pacing accuracy audit, media efficiency analysis, market intelligence brief for 2027 / international leg planning",
      ],
    },
    {
      phase: "International Leg Warm-Up",
      week: "Weeks 21–24",
      date: "September 2026",
      status: "upcoming" as const,
      tasks: [
        "Activate Laylo for AUS / NZ arena tour (Aug–Sept 2026) — localized landing pages, presale tiers, SMS capture in international format",
        "UK / EU sustain campaigns — paid media behind 'Ordinary' and album catalog in markets where 'Ordinary' was #1 for 13+ weeks",
        "Cross-leg retargeting — NA tour attendees become lookalike seeds for international market expansion campaigns",
        "First international data-gated merch drop — AUS/NZ exclusive design capturing fan data in markets Warren hasn't had infrastructure for",
      ],
    },
    {
      phase: "Data Activation & 2027 Readiness",
      week: "Weeks 25–28",
      date: "October 2026",
      status: "upcoming" as const,
      tasks: [
        "Year-end fan database health report — list size, engagement rates, revenue per subscriber, segment performance, TikTok-to-owned conversion rates",
        "Deliver 2027 readiness plan — pre-sale architecture using the owned Warreners database, TOUR CONTROL calibration for next cycle, lifecycle campaign blueprints for next album release",
        "Launch holiday / Q4 merch campaign — gift-oriented drops, bundle pricing, fan-to-fan gifting promotions entirely driven from the captured database",
        "Handoff documentation — full platform access, process documentation, and recommended next steps for ongoing fan data activation and next release cycle",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable is designed to capture fan data, drive incremental revenue, or provide real-time market intelligence across the LITTLE ORPHAN ALEX LIVE arena tour cycle.",

  deliverables: [
    {
      category: "TOUR CONTROL Platform",
      icon: "●",
      items: [
        {
          name: "TOUR CONTROL Deployment",
          quantity: "20+ markets",
          description:
            "CCD's proprietary tour intelligence platform — real-time ticket pacing dashboards, sell-through prediction models, risk-tier market classification, and dynamic media budget recommendations across every LITTLE ORPHAN ALEX LIVE North American arena date",
        },
        {
          name: "Weekly Pacing Reports",
          quantity: "24 reports",
          description:
            "Market-by-market sell-through analysis with trend lines, velocity indicators, and actionable media allocation recommendations — delivered weekly across pre-tour, tour, and post-tour phases",
        },
        {
          name: "Season Intelligence Report",
          quantity: "1",
          description:
            "Comprehensive post-tour analysis — pacing model accuracy audit, market performance rankings, media efficiency metrics, and data-driven planning brief for 2027 touring and international legs",
        },
      ],
    },
    {
      category: "Fan Data Capture",
      icon: "◆",
      items: [
        {
          name: "Laylo Infrastructure",
          quantity: "1 build",
          description:
            "Full Laylo implementation — Warreners database architecture, SMS/email capture flows, segmentation schema (market, age, TikTok vs streaming origin, merch buyer vs VIP), welcome sequences, and TikTok/IG bridge strategy",
        },
        {
          name: "Market Landing Pages",
          quantity: "20+ pages",
          description:
            "City-specific Laylo drop pages for every North American arena date — localized pre-sale access, city-edition merch previews, and SMS/email opt-in tied to each show",
        },
        {
          name: "On-Site Capture Kit",
          quantity: "20+ activations",
          description:
            "QR codes, SMS keyword signage, and merch booth opt-in incentives designed for every arena — capturing attendee data at the point of maximum engagement",
        },
        {
          name: "Lifecycle Campaigns",
          quantity: "60+ sends",
          description:
            "Pre-show hype, day-of push, and post-show exclusive drop sequences for every market — 3+ touchpoints per show, personalized by city and fan segment via Laylo",
        },
      ],
    },
    {
      category: "Paid Media & Growth",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Instagram and Facebook campaigns — ticket sales support in underperforming markets, merch promotion, album catalog deep-cut pushes, and retargeting engaged fans across all tour cities",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads targeting LITTLE ORPHAN ALEX LIVE markets — concert hype content, city-edition merch drops, and TikTok-to-Laylo fan capture funnels leveraging the 19.9M follower base that broke 'Ordinary'",
        },
        {
          name: "YouTube Campaigns",
          quantity: "6 months",
          description:
            "Pre-roll and discovery ads targeting emotional-Americana audiences in tour markets — tour trailer distribution, acoustic performance promotion, and subscriber-to-Warreners-database conversion",
        },
        {
          name: "Spotify Growth Strategy",
          quantity: "6 months",
          description:
            "Paid listener acquisition campaigns, playlist pitching coordination, album deep-cut promotion to beat one-hit perception, and sustain monthly listener velocity across the tour window",
        },
      ],
    },
    {
      category: "Revenue Optimization",
      icon: "■",
      items: [
        {
          name: "VIP Upsell Funnels",
          quantity: "20+ markets",
          description:
            "Targeted campaigns to standard ticket holders promoting VIP tier upgrades — early entry, soundcheck, exclusive merch, meet-and-greet bundles as conversion incentives across every arena",
        },
        {
          name: "Data-Gated Merch Drops",
          quantity: "6 drops",
          description:
            "Exclusive merch releases available only to email/SMS subscribers — pre-tour, mid-tour, post-tour, holiday, and two international leg warm-up drops with city-edition and tour-exclusive variants",
        },
        {
          name: "Post-Show Digital Bundles",
          quantity: "20+ bundles",
          description:
            "City-specific digital content packages (exclusive photos, behind-the-scenes footage, setlist playlists, acoustic clips) delivered to attendees post-show via Laylo — each gated behind data opt-in",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this engagement — and where the boundaries are. This is a focused data capture and revenue intelligence scope built around the LITTLE ORPHAN ALEX LIVE tour cycle.",
    included: [
      "TOUR CONTROL platform deployment, configuration, and ongoing monitoring across all 20+ North American arena markets",
      "Laylo fan data infrastructure build — SMS/email capture, segmentation, automation flows, and TikTok/IG bridge strategy",
      "Paid media strategy, creative direction, and campaign management across Meta, TikTok, YouTube, and Spotify growth",
      "Market-by-market lifecycle campaigns — pre-show, day-of, and post-show sequences for every arena date",
      "On-site data capture kit design and production for all 20+ venues (QR codes, signage, opt-in incentives)",
      "VIP upsell funnel strategy and execution — tier upgrade campaigns to standard ticket holders",
      "Post-tour data analysis, season intelligence report, and international leg warm-up (AUS/NZ/UK/EU)",
      "Weekly strategy calls and monthly performance reporting throughout the 6-month engagement",
    ],
    excluded: [
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Social media management and day-to-day content posting (available as add-on)",
      "Physical merch production and fulfillment — CCD provides the drop strategy, data capture integration, and marketing. Manufacturing and shipping is handled by existing merch partners",
      "Ad spend — media budgets are billed directly to platforms. CCD manages campaigns and optimization included in the retainer",
      "Ticketing platform operations — CCD integrates with Ticketmaster/Live Nation data feeds but does not manage pricing, on-sale operations, or promoter relationships",
      "Publicity, PR, and press outreach (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Tour Marketing Strategy & Execution",
        description:
          "End-to-end campaign strategy, market-by-market lifecycle campaigns, VIP upsell funnels, and data-gated merch drop planning across all 20+ arena dates",
        price: 1700,
        recurring: true,
      },
      {
        name: "TOUR CONTROL Platform",
        description:
          "CCD's proprietary tour intelligence system — real-time ticket pacing, sell-through prediction, risk-tier classification, and dynamic media allocation across all markets",
        price: 1300,
        recurring: true,
      },
      {
        name: "Fan Data Infrastructure (Laylo)",
        description:
          "Full Laylo implementation, SMS/email capture flows, segmentation architecture, automation sequences, TikTok/IG bridge strategy, and on-site capture kit design",
        price: 1000,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign management and optimization across Meta, TikTok, YouTube, and Spotify growth — ad spend billed separately to platforms",
        price: 1000,
        recurring: true,
      },
    ],
    subtotal: 5000,
    setupFee: {
      label: "Onboarding & Platform Build (Waived)",
      amount: 0,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    total: 30000,
    paymentSchedule: [
      {
        milestone: "Month 1 (April) — setup waived",
        percentage: 16.67,
        amount: 5000,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (May)",
        percentage: 16.67,
        amount: 5000,
        due: "May 1, 2026",
      },
      {
        milestone: "Month 3 (June)",
        percentage: 16.67,
        amount: 5000,
        due: "June 1, 2026",
      },
      {
        milestone: "Month 4 (July)",
        percentage: 16.67,
        amount: 5000,
        due: "July 1, 2026",
      },
      {
        milestone: "Month 5 (August)",
        percentage: 16.67,
        amount: 5000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 6 (September)",
        percentage: 16.65,
        amount: 5000,
        due: "September 1, 2026",
      },
    ],
    paymentTerms: "7 days from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve & Sign",
      description:
        "Review the proposal, ask any questions, and sign off. We'll send a formal agreement and invoice for Month 1. Setup is waived.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering current ad accounts, Ticketmaster / promoter data feeds, merch platform access, social logins, and team contact info.",
    },
    {
      step: 3,
      title: "TOUR CONTROL Activation",
      description:
        "We ingest ticket pacing data from Live Nation and configure TOUR CONTROL for all 20+ North American arena markets within the first week.",
    },
    {
      step: 4,
      title: "Laylo Build & Data Architecture",
      description:
        "Full Laylo setup, Warreners segmentation schema, capture flows, and TikTok/IG bridge strategy — live and capturing fans within 2 weeks of kickoff, well before Bridgestone on May 25.",
    },
    {
      step: 5,
      title: "Campaigns Go Live",
      description:
        "Pre-tour paid media and data capture campaigns launch by Week 4. From here, TOUR CONTROL runs real-time and every touchpoint captures data.",
    },
  ],

  cta: {
    headline: "54M monthly listeners. 20+ arenas. Let's make sure every Warrener counts.",
    body: "LITTLE ORPHAN ALEX LIVE is the biggest moment of Alex Warren's career. Crowd Control Digital has the live-music expertise, the proprietary tour intelligence platform, and the data capture infrastructure to turn 20+ arena shows into a permanent fan engine that compounds across every future release, tour, and international leg. Let's build it — setup fee waived.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/alex-warren/hero1.png",
    heroBg: "/images/alex-warren/hero-bg.jpg",
    hero2: "/images/alex-warren/hero2.png",
    product: "/images/alex-warren/product.png",
    editorial: "/images/alex-warren/editorial.png",
    texture: "/images/alex-warren/texture.png",
    brutalist: "/images/alex-warren/brutalist.png",
    hero1Caption: "Arena Tour Data Capture + Revenue Intelligence",
    brutalistCaption: "Alex Warren × Crowd Control Digital",
    ogImage: "/images/alex-warren/og-image.png",
  },
};
