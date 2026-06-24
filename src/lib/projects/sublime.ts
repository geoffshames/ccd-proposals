import type { ProjectData } from "../project-context";

export const sublime: ProjectData = {
  accentColor: "#F5A623",

  client: {
    name: "Sublime",
    logo: "",
    contactName: "Regime Inc",
    contactRole: "Management",
    contactEmail: "info@regimeinc.com",
    industry: "Music / Reggae-Rock / Ska Punk / Touring",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "THE FOURTH ERA",
    tagline:
      "14.7 million people listen to Sublime every month. Almost none of them are yours yet. A full-service tour and streaming engine that turns three decades of catalog gravity — and the biggest comeback in the band's history — into an owned, activated fanbase the band controls forever.",
    type: "Full-Service Tour + Streaming Growth",
    startDate: "July 15, 2026",
    endDate: "January 15, 2027",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Crowd Control Digital will run a full-service growth engine across Sublime's touring and streaming business during the most important window in the band's modern history — the Until the Sun Explodes album cycle on Atlantic and the 2026 amphitheater run. Sublime sits at 14.7M Spotify monthly listeners but only 3.8M followers: a 0.3 follower-to-listener ratio that means the overwhelming majority of the audience is passive, anonymous, and re-rentable by the algorithm every month. The catalog does the discovery work for free — the gap is conversion and ownership. CCD closes it: a unified fan-data layer that consolidates the existing Laylo, Shopify, Atlantic, and ticketing data into one activatable audience; full-funnel paid media that drives ticket velocity across the tour and amphitheater dates; and a streaming + content engine that turns the Gen-Z TikTok discovery wave into followers, pre-saves, and owned fans. The result is a fan engine that compounds across every future tour, festival, cruise, and release — owned by the band, not the label or the platforms.",
    objectives: [
      "Build the sovereign fan layer — consolidate the existing Laylo (laylo.com/sublime), Shopify store, Atlantic pre-save data, and ticketing records into one unified, segmentable, band-owned audience that can be activated independently of any single platform",
      "Close the 0.3 follower-to-listener gap — convert passive catalog streamers into owned email/SMS subscribers and Spotify followers during the album cycle, when discovery attention is at a 30-year peak",
      "Drive ticket velocity across the 2026 tour — geo-targeted full-funnel paid media for the amphitheater run, festival dates, and owned IP (Sublime Festival + Sublime Cruise), with retargeting of high-intent non-buyers in soft markets",
      "Compound the TikTok-to-streaming engine — turn the evergreen 'Santeria' / 'What I Got' discovery wave and the new Until the Sun Explodes singles into pre-saves, playlist adds, and catalog conversion",
      "Bridge legacy and new era — paid and content strategy that honors the original fanbase and Bradley's legacy while winning the next generation, defusing the authenticity tension rather than ignoring it",
    ],
    subtitle:
      "Fan-data consolidation, full-funnel paid media, and a streaming + content engine — built around the Until the Sun Explodes cycle and the 2026 tour by the agency that runs this exact playbook for touring artists.",
    imageCaption: "Full-Service Tour + Streaming Growth",
    stats: [
      {
        value: 14.7,
        suffix: "M",
        label: "Monthly Listeners To Convert",
        description:
          "Sublime's Spotify monthly audience — 4.7B lifetime streams of catalog gravity — currently passive, anonymous, and largely unowned. The entire engine is built to convert it.",
      },
      { value: 50, suffix: "K+", label: "Owned Fan Target" },
      { value: 6, label: "Month Campaign" },
      { value: 5, label: "Revenue Streams" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited Sublime's full digital ecosystem — the sublimelbc.com site, the Shopify store, the Laylo setup, the socials, the Atlantic album rollout, the 2026 tour routing, the owned festival and cruise IP, and the Cali reggae-rock competitive landscape. The finding is unusually clean: the demand is enormous and at a 30-year high, the catalog generates discovery for free, and the band even owns infrastructure most legacy acts never build. What's missing is the connective tissue — the layer that turns 14.7M passive listeners into a fanbase the band can actually see, segment, and activate. This proposal builds exactly that, around the single biggest cultural moment in the band's modern history.",
    insights: [
      {
        label: "The 0.3 Ratio",
        finding:
          "Sublime has 14.7M Spotify monthly listeners but only 3.8M followers — a 0.3 follower-to-listener ratio. That means the catalog re-acquires a huge anonymous audience every month that never converts into a followed, owned, or addressable fan. 'Santeria' alone has 1.15B streams and 'What I Got' 670M — that's the most valuable evergreen discovery funnel in the genre, leaking almost entirely at the conversion step.",
        source: "Spotify / ChartMasters / Chartmetric audit",
      },
      {
        label: "Fragmented Capture (Laylo Exists)",
        finding:
          "Sublime already runs Laylo (laylo.com/sublime) for SMS drops and ticket alerts — good. But it's one capture point among several disconnected systems: the Shopify store (sublimelbc.store) holds purchase data, Atlantic owns the pre-save and album-cycle data, ticketing partners hold the buyers, and smart-links (lnk.to / ffm.to) sit in between. Nothing talks to each other. There's no unified audience the band can segment and activate on its own cadence — the data exists, it's just scattered across five walled gardens.",
        source: "sublimelbc.com / Laylo / Shopify infrastructure audit",
      },
      {
        label: "Peak-Attention Window",
        finding:
          "Until the Sun Explodes (Atlantic, June 12, 2026) is the first new Sublime album in 30 years, and the title track is #1 for a third consecutive week on Billboard's Alternative Airplay chart — the band's first alt-radio dominance since the '90s. 'Feel Like That' (ft. Stick Figure, with Bradley Nowell's archival vocals) marked their first Alternative Airplay appearance in 26 years. Discovery attention is at a generational high right now — and the window to convert it into owned fans is finite.",
        source: "Billboard Alternative Airplay / Variety / Rock Cellar",
      },
      {
        label: "Owned IP, Under-Leveraged",
        finding:
          "Unlike almost every legacy act, Sublime already owns live IP most artists would kill for: the Sublime Festival (sublimefest.com) and the Sublime Cruise / 'Reef Madness' (sublimecruise.com), plus a Shopify merch business and a Sublime × PRISM accessories line. These are the highest-margin, most-ownable revenue streams in the business — and they're being marketed as one-off announcements rather than as a year-round, data-driven fan funnel.",
        source: "sublimefest.com / sublimecruise.com / store audit",
      },
      {
        label: "TikTok Discovery Without Capture",
        finding:
          "'Santeria' and 'What I Got' are permanent sound-beds on TikTok — evergreen Gen-Z discovery formats, guitar covers, '90s nostalgia edits, and sync moments running every week. A whole new generation is finding Sublime constantly. None of that discovery is being captured into a list, retargeted, or converted into a follow or a ticket. The top of the funnel is the strongest in the genre and it's leaking.",
        source: "TikTok audit: #sublime, @sublimeofficial, sound usage",
      },
    ],
    marketContext:
      "The 2026 Cali reggae-rock touring market is dense and loyalty-driven — Slightly Stoopid, 311, Dirty Heads, Rebelution, and Iration all run competing amphitheater and festival cycles. Sublime's edge is genuinely overwhelming: 14.7M monthly listeners is 6x the field, the first new album in 30 years is on Atlantic and dominating alt-radio, there's a GRAMMY Museum exhibit ('Sublime: Straight From Long Beach'), and the band owns its own festival and cruise. But scale without infrastructure is squandered scale. The catalog will keep doing the discovery work — the question is whether the band captures and owns the audience it produces, or keeps renting it from the algorithm. This is the most leveraged moment in the band's modern history, and the album cycle window is now.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Sublime's audience is two generations stacked on top of each other: the original-era fans who made the band 5x platinum, and a Gen-Z wave discovering 'Santeria' and 'What I Got' on TikTok as if they were new. Both are enormous. Neither is owned. The job is to recognize, capture, and activate both without alienating either.",
    demographics:
      "16–55, national with a heavy SoCal and beach-market concentration. Split between 35–55 original-era millennials/Gen-X with high disposable income and nostalgia loyalty, and a 16–28 Gen-Z wave discovering the catalog through TikTok and sync.",
    demographicCards: [
      {
        label: "Age Range",
        value: "16–55 split",
        detail: "35–55 nostalgia core + 16–28 TikTok wave",
      },
      {
        label: "Geography",
        value: "National, SoCal-heavy",
        detail: "Long Beach / LA, beach + festival markets nationwide",
      },
      {
        label: "Identity",
        value: "Beach / skate / weed culture",
        detail: "Lifestyle fandom, not just music fandom",
      },
      {
        label: "Behavior",
        value: "High passive reach, low ownership",
        detail: "14.7M listeners, 0.3 follower ratio — the core gap",
      },
    ],
    personas: [
      {
        name: "The Day One",
        ageRange: "40–58",
        description:
          "Was there for 40oz. to Freedom and the self-titled record. Owns the CDs, the vintage Skunk Records tee, and an opinion about whether Jakob can carry the name. High disposable income, deep nostalgia loyalty, and willing to spend big on vinyl, the cruise, and reunion-era live shows — but emotionally invested in the legacy being honored, not exploited.",
        traits: ["Nostalgia Loyal", "Vinyl + Cruise Buyer", "Legacy Guardian", "High Spend"],
      },
      {
        name: "The TikTok Discoverer",
        ageRange: "16–24",
        description:
          "Found 'Santeria' or 'What I Got' as a TikTok sound and is now streaming the catalog backwards with no idea Sublime is a 'reunion.' To them it's just great music that's always existed. No owned relationship yet — discovered by the algorithm, captured by no one. The single biggest conversion opportunity in the entire engine if captured during the album cycle.",
        traits: ["TikTok-Native", "Catalog Streamer", "Gen Z", "Ungated Audience"],
      },
      {
        name: "The Festival Lifer",
        ageRange: "25–40",
        description:
          "Lives the Cali reggae-rock scene — Cali Vibes, the Sublime Festival, the Sublime Cruise, Slightly Stoopid and 311 co-bills. Treats live music as lifestyle and identity, buys merch every cycle, and travels for shows. The highest-LTV segment and the natural anchor for the owned festival and cruise IP.",
        traits: ["Festival Regular", "Lifestyle Fan", "Travels For Shows", "Merch Buyer"],
      },
    ],
    psychographics: [
      "Lifestyle-driven fandom — Sublime is identity (beach, skate, weed culture, Long Beach pride), not just a playlist. Fans wear the band, not just stream it",
      "Authenticity-obsessed — the loud r/sublime debate over whether Jakob should carry the name proves how much the core cares who holds the legacy. This is a feature to honor, not a bug to ignore",
      "Communal and live-ritual oriented — the value is in the show, the festival, the cruise, the shared experience, far more than in passive listening",
      "Multi-generational handoff in progress — original fans are bringing their kids, and the kids are arriving independently via TikTok. The brand sits at a rare moment where both generations are active at once",
    ],
    painPoints: [
      "Original fans fear the reunion dilutes the legacy — and have no direct channel from the band reassuring them or bringing them in on the story",
      "New TikTok fans have no clear 'front door' beyond passive streaming — no obvious path from a viral sound to a follow, a pre-save, or a ticket",
      "Tour, festival, and cruise news arrives as scattered one-off announcements across Instagram, Laylo, and ticketing — fans miss on-sales and drops they'd have paid for",
      "The audience is enormous but the band can't see it — no unified view of who the 14.7M actually are, where they live, or what they buy",
    ],
    purchaseTriggers: [
      "First new album in 30 years — Until the Sun Explodes is once-in-a-generation urgency across streams, vinyl, tickets, and merch",
      "Live experiences as the core product — amphitheater tour, the Sublime Festival, and the Sublime Cruise are the highest-intent, highest-margin conversion moments",
      "Limited drops and collabs — the Sublime × PRISM line and tour-exclusive merch convert the lifestyle fanbase when clearly communicated and gated",
      "Nostalgia + FOMO around the historic comeback — the GRAMMY Museum moment, the Atlantic deal, and the alt-radio #1 create a cultural-event halo that drives participation",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "The strongest top-of-funnel in the genre. 'Santeria' and 'What I Got' run as evergreen sounds, with constant Gen-Z discovery, covers, and nostalgia edits. Massive untapped fan-acquisition channel — currently captured by no one, retargeted by no one.",
      },
      {
        name: "Spotify",
        description:
          "14.7M monthly listeners, 3.8M followers, 4.7B lifetime streams, 7 tracks over 100M. The catalog is the discovery engine — but the 0.3 follower ratio means most of that audience is rented, not owned. The single biggest conversion target.",
      },
      {
        name: "Instagram + Facebook",
        description:
          "1M Instagram followers and 4.78M Facebook likes — skews to the original nostalgia audience. Facebook in particular is where the Day One fanbase actually lives. Underused for direct-to-fan capture relative to its reach.",
      },
      {
        name: "Laylo + Owned Channels",
        description:
          "Laylo (laylo.com/sublime) already runs SMS drops and ticket alerts — the foundation of the owned layer exists. The opportunity is to make it the hub that consolidates Shopify, smart-link, and ticketing data instead of one isolated capture point.",
      },
    ],
    quotes: [
      {
        text: "He kept Sublime alive for so many people. That legacy means everything to fans like me.",
        source: "Reddit / r/sublime",
      },
      {
        text: "As a huge Sublime fan from the beginning, I needed to hear Jakob carry it — and most original fans I've talked to feel the same way about getting it right.",
        source: "Reddit / r/sublime",
      },
      {
        text: "Santeria is having a permanent TikTok moment and my teenager just discovered the band that got me through high school. Full circle.",
        source: "TikTok / Facebook fan comment",
      },
    ],
  },

  targets: [
    {
      metric: "Owned Fan Database",
      value: "50K+",
      context:
        "Capture 50,000+ new email/SMS fan records across the cycle — TikTok-driven sign-ups, ticket buyers, merch customers, festival and cruise registrants — consolidated into one band-owned, segmentable audience independent of Atlantic and ticketing.",
    },
    {
      metric: "Follower-to-Listener Ratio",
      value: "0.3 → 0.5",
      context:
        "Lift the Spotify follower-to-listener ratio from 0.3 toward 0.5 during the album cycle by converting passive catalog streamers into followers and owned subscribers — the single clearest measure of turning rented reach into owned audience.",
    },
    {
      metric: "Tour + Live ROAS",
      value: "4x+",
      context:
        "Drive a 4x+ blended return on ad spend across the amphitheater run, Sublime Festival, and Sublime Cruise through geo-targeted full-funnel paid media and high-intent retargeting — directional target, not a guarantee.",
    },
    {
      metric: "Catalog → Owned Conversion",
      value: "+40%",
      context:
        "Increase the rate at which catalog and new-single streamers convert into owned fans (follow, pre-save, or list opt-in) by 40% vs. baseline, capturing the TikTok discovery wave while attention peaks around the album.",
    },
  ],

  competitive: {
    summary:
      "Sublime competes for the same Cali reggae-rock touring and festival audience as Slightly Stoopid, 311, Dirty Heads, Rebelution, and Iration — but it isn't really a fair fight on reach. Sublime sits at 14.7M monthly listeners; most of the field is at 1–3M. The catalog gravity, the alt-radio #1, and the Atlantic comeback are advantages none of them can match. What the strongest competitors do have is tighter fan infrastructure — more disciplined owned-audience capture and activation around their tours and festivals. The Sublime opportunity is to pair the genre's biggest reach with best-in-class infrastructure and put real distance between itself and the field. Note: Slightly Stoopid and 311 are 2026 touring partners and Stick Figure is a collaborator on 'Feel Like That' — allies, not competitors — and are framed accordingly.",
    competitors: [
      {
        name: "Dirty Heads — ~2.2M Monthly Listeners",
        strength:
          "Strong owned-fan engagement, consistent release cadence, and disciplined co-headline touring (the Slightly Dirty Summer Tour) with tight merch and email funnels",
        gap: "Dirty Heads punch above their streaming weight through infrastructure. Sublime has 6x the passive reach and almost none of the capture — closing that gap turns a reach advantage into an ownership advantage.",
      },
      {
        name: "Rebelution — ~2.2M Monthly Listeners",
        strength:
          "Owns its own festival brand (Good Vibes), runs a loyal touring economy, and maintains steady direct-to-fan communication across cycles",
        gap: "Rebelution monetizes a smaller, niche audience extremely well. Sublime has mainstream alt-radio crossover Rebelution can't reach — but lacks the year-round owned-festival funnel Rebelution has built. CCD builds that around the Sublime Festival + Cruise.",
      },
      {
        name: "Iration / Pepper — ~1–1.5M Monthly Listeners",
        strength:
          "Deeply embedded in the Cali reggae scene with loyal cult fanbases and consistent festival presence",
        gap: "No cultural-moment catalyst to ride. Sublime's reunion, Atlantic deal, and alt-radio #1 are a once-in-a-generation tide — the job is to convert that wave into owned fans before it crests, something the mid-tier of the genre simply can't replicate.",
      },
      {
        name: "Slightly Stoopid + 311 — Touring Partners (Not Competitors)",
        strength:
          "Elite live draws and loyal lifestyle fanbases, co-billing the 2026 amphitheater dates (Summer Greens, festival runs) alongside Sublime",
        gap: "These are allies on the same stages, not rivals. The opportunity is co-marketing and shared-audience capture across the joint dates — cross-pollinating the owned-fan layer at every co-headline show rather than competing for the same ticket.",
      },
    ],
  },

  timelineSubheading:
    "A focused 6-month engagement from infrastructure build through full tour, festival, and cruise execution — every phase designed to convert catalog reach into owned, activated fans across the Until the Sun Explodes cycle.",
  timelineImageCaption: "6 Months / 4 Phases / 14.7M Listeners",

  timeline: [
    {
      phase: "Audit & Infrastructure",
      week: "Weeks 1–3",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Consolidate the fan-data layer — audit and unify the existing Laylo (laylo.com/sublime), Shopify store, Atlantic pre-save data, smart-links, and ticketing feeds into one segmentation architecture (by market, era, persona, purchase behavior, new vs. legacy)",
        "Stand up paid media infrastructure — Meta, TikTok, YouTube, and Google ad accounts, pixel/CAPI tracking, conversion events, and seed audiences built from Spotify for Artists, Shopify, and ticketing data",
        "Map the owned-IP funnels — Sublime Festival and Sublime Cruise capture flows, merch drop architecture, and a unified opt-in incentive strategy gated to email/SMS",
        "Audience and creative kickoff — define the legacy-vs-new content strategy that honors the original fanbase while activating the TikTok wave, and lock the measurement framework",
      ],
    },
    {
      phase: "Paid Launch & Tour Activation",
      week: "Weeks 4–10",
      date: "August – September 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch full-funnel paid media for the amphitheater run — geo-targeted Meta and TikTok campaigns driving ticket velocity across tour markets, prioritizing soft dates and co-headline shows with Slightly Stoopid + 311",
        "Activate fan-capture campaigns — Laylo drop pages per market, SMS keyword campaigns, and social-to-list conversion funnels capturing data at the highest-intent moments",
        "Drive the owned IP — paid + lifecycle campaigns for the Sublime Festival and Sublime Cruise, the highest-margin conversion moments in the business",
        "Retarget high-intent non-buyers — engaged-but-unconverted audiences across tour markets, with lookalike expansion seeded from captured first-party data",
      ],
    },
    {
      phase: "Streaming & Content Engine",
      week: "Weeks 8–16",
      date: "September – November 2026",
      status: "upcoming" as const,
      tasks: [
        "Convert the TikTok discovery wave — paid + organic creator strategy turning 'Santeria' / 'What I Got' and the new Until the Sun Explodes singles into follows, pre-saves, and playlist adds",
        "Spotify growth push — paid listener acquisition, lookalike targeting off the captured audience, playlist pitching support, and catalog-to-follower conversion campaigns to move the 0.3 ratio",
        "Content system for legacy + new — a steady cadence of short-form built around the comeback narrative, the GRAMMY Museum moment, and Bradley's legacy, defusing the authenticity tension head-on",
        "Cross-pollinate co-headline audiences — shared-audience capture at Slightly Stoopid / 311 joint dates and festival appearances",
      ],
    },
    {
      phase: "Owned-IP Scale & Optimization",
      week: "Weeks 14–24",
      date: "November 2026 – January 2027",
      status: "upcoming" as const,
      tasks: [
        "Scale the winners — reallocate spend to the highest-ROAS markets, creatives, and funnels; kill the underperformers; compound what works",
        "Activate the owned database — holiday merch drops, vinyl bundles, Sublime × PRISM pushes, and cruise / festival pre-registration driven entirely from captured first-party data",
        "Full-cycle reporting — owned-fan growth, follower-ratio lift, tour/festival/cruise ROAS, catalog conversion rate, and persona-segment performance",
        "2027 readiness plan — owned-audience presale architecture, festival + cruise funnel blueprints, and the lifecycle playbook for the next release and tour cycle",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable is designed to convert catalog reach into owned fans, drive ticket and live-experience revenue, or compound the streaming engine across the Until the Sun Explodes cycle.",

  deliverables: [
    {
      category: "Fan Data & CRM",
      icon: "◆",
      items: [
        {
          name: "Unified Fan-Data Layer (Laylo)",
          quantity: "1 build",
          description:
            "Consolidate the existing Laylo, Shopify store, Atlantic pre-save data, smart-links, and ticketing feeds into one segmentable, band-owned audience — segmentation by market, era, persona, and purchase behavior, with welcome and post-show flows",
        },
        {
          name: "Capture Campaigns & Drop Pages",
          quantity: "Ongoing",
          description:
            "Market-specific Laylo drop pages, SMS keyword campaigns, and social-to-list funnels capturing email/SMS at the highest-intent moments — on-sales, drops, festival, and cruise registration",
        },
        {
          name: "Lifecycle & Automation Flows",
          quantity: "Full cycle",
          description:
            "Pre-show, day-of, and post-show sequences plus reactivation and win-back flows — personalized by city, era, and persona to turn one-time buyers into long-term owned fans",
        },
      ],
    },
    {
      category: "Paid Media",
      icon: "▶",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Geo-targeted Facebook and Instagram campaigns — ticket sales across the amphitheater run, festival + cruise conversion, merch, and retargeting of engaged fans. Facebook is where the Day One fanbase lives — we lean in. Ad spend billed separately at a 15% management rate",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads riding the evergreen 'Santeria' / 'What I Got' discovery wave — capturing the Gen-Z audience and converting it to follows, pre-saves, streams, and ticket sales. Ad spend billed separately at a 15% management rate",
        },
        {
          name: "YouTube + Google",
          quantity: "6 months",
          description:
            "Pre-roll, discovery, and search campaigns targeting reggae-rock and tour-market audiences — album promotion, lyric-video distribution, and demand capture around the comeback narrative. Ad spend billed separately at a 15% management rate",
        },
        {
          name: "Spotify Growth Strategy",
          quantity: "6 months",
          description:
            "Paid listener acquisition, lookalike targeting off the captured first-party audience, and catalog-to-follower conversion campaigns to lift the 0.3 follower-to-listener ratio during the album cycle. Ad spend billed separately at a 15% management rate",
        },
      ],
    },
    {
      category: "Streaming & Content",
      icon: "◇",
      items: [
        {
          name: "Creator & TikTok Strategy",
          quantity: "6 months",
          description:
            "Paid + organic creator activations converting the TikTok discovery wave into measurable follows, pre-saves, and playlist adds — built around both the evergreen catalog and the new Until the Sun Explodes singles",
        },
        {
          name: "Content Engine (Legacy + New)",
          quantity: "Ongoing",
          description:
            "A steady short-form cadence built around the comeback narrative, the GRAMMY Museum moment, and Bradley's legacy — designed to honor the original fanbase while activating the next generation. Creative production billed as-needed at $125/hr",
        },
        {
          name: "Pre-Save & Playlist Support",
          quantity: "Per release",
          description:
            "Pre-save campaign architecture and editorial / algorithmic playlist pitching coordination around each single and the album cycle, all feeding the owned-fan layer",
        },
      ],
    },
    {
      category: "Tour & Live Activation",
      icon: "●",
      items: [
        {
          name: "Tour Marketing Campaigns",
          quantity: "Full run",
          description:
            "Geo-targeted ticket-driving campaigns across the 2026 amphitheater dates and co-headline shows — pre-on-sale hype, on-sale push, and soft-market retargeting to drive sell-through",
        },
        {
          name: "Sublime Festival + Cruise Funnels",
          quantity: "Both IP",
          description:
            "Dedicated paid + lifecycle funnels for the owned festival and the Sublime Cruise ('Reef Madness') — the highest-margin, most-ownable revenue streams in the business, marketed as a year-round funnel rather than one-off drops",
        },
        {
          name: "Merch & Drop Marketing",
          quantity: "Ongoing",
          description:
            "Marketing and data-gated drop strategy for the Shopify store and the Sublime × PRISM line — tour-exclusive and limited releases tied to the captured audience. Production and fulfillment handled by existing merch partners",
        },
      ],
    },
    {
      category: "Reporting & Strategy",
      icon: "■",
      items: [
        {
          name: "Monthly Performance Reporting",
          quantity: "6 reports",
          description:
            "Owned-fan growth, follower-ratio lift, tour / festival / cruise ROAS, catalog conversion rate, and persona-segment performance — with clear read-outs and next-cycle recommendations",
        },
        {
          name: "Weekly Strategy Calls",
          quantity: "Weekly",
          description:
            "Standing strategy and optimization cadence with the Regime team throughout the 6-month engagement — spend reallocation, creative direction, and campaign decisions in real time",
        },
        {
          name: "2027 Readiness Plan",
          quantity: "1",
          description:
            "End-of-cycle blueprint — owned-audience presale architecture, festival + cruise funnel playbooks, and the lifecycle plan for the next release and tour cycle using the database built this cycle",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in this full-service engagement — and where the boundaries are. This is a tour and streaming growth scope built around the Until the Sun Explodes cycle and the 2026 live run.",
    included: [
      "Unified fan-data layer — consolidation of Laylo, Shopify, Atlantic pre-save, smart-link, and ticketing data into one segmentable, band-owned audience with automation flows",
      "Full-funnel paid media strategy, creative direction, and campaign management across Meta, TikTok, YouTube/Google, and Spotify Growth",
      "Streaming + content engine — creator/TikTok strategy, pre-save and playlist support, and a legacy-plus-new content cadence",
      "Tour, festival, and cruise marketing — ticket-driving campaigns, owned-IP funnels, and data-gated merch / drop strategy across the full 2026 run",
      "Lifecycle campaigns — pre-show, day-of, post-show, and reactivation sequences personalized by market, era, and persona",
      "Monthly performance reporting, weekly strategy calls, and a 2027 readiness plan",
      "Creative production available as-needed, billed hourly at $125/hr (design, edits, campaign assets)",
      "Ongoing optimization — spend reallocation, creative iteration, and audience expansion throughout the engagement",
    ],
    excluded: [
      "Ad spend — media budgets are billed directly to the platforms; CCD's campaign management and optimization is covered by the retainer plus a 15% management fee on spend",
      "Music video production and large-scale creative (available as add-on — scoped and quoted separately, or via the as-needed $125/hr creative line)",
      "Press / publicity / radio promotion — coordinated alongside but managed by existing Atlantic and label-side teams",
      "Physical merch production and fulfillment — CCD provides drop strategy, data integration, and marketing; manufacturing and shipping handled by existing merch partners",
      "Festival and cruise operations / talent buying — CCD handles marketing and fan capture, not event production",
      "Website or e-commerce platform rebuild (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Tour & Streaming Strategy",
        description:
          "End-to-end campaign strategy and execution across the tour, festival, cruise, and album cycle — including the streaming + content engine and creator strategy",
        price: 2000,
        recurring: true,
      },
      {
        name: "Fan Data Infrastructure (Laylo)",
        description:
          "Unified fan-data layer — Laylo, Shopify, Atlantic, smart-link, and ticketing consolidation, segmentation architecture, capture campaigns, and lifecycle automation",
        price: 1500,
        recurring: true,
      },
      {
        name: "Paid Media Management",
        description:
          "Campaign management and optimization across Meta, TikTok, YouTube/Google, and Spotify Growth. Ad spend billed separately to platforms at a 15% management rate",
        price: 2000,
        recurring: true,
      },
      {
        name: "Creative Production (as-needed)",
        description:
          "Design, edits, and campaign assets produced on-demand, billed hourly at $125/hr — only when used, never part of the monthly retainer",
        price: 125,
        recurring: false,
      },
    ],
    subtotal: 5500,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Ad Spend",
      amount: 20000,
      note: "Recommended starting media budget across Meta, TikTok, YouTube/Google, and Spotify Growth — billed directly to the platforms and scalable up or down by the band. CCD manages and optimizes all campaigns at a 15% management fee on spend.",
    },
    total: 33000,
    paymentSchedule: [
      {
        milestone: "Month 1 (July)",
        percentage: 16.67,
        amount: 5500,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (August)",
        percentage: 16.67,
        amount: 5500,
        due: "August 15, 2026",
      },
      {
        milestone: "Month 3 (September)",
        percentage: 16.67,
        amount: 5500,
        due: "September 15, 2026",
      },
      {
        milestone: "Month 4 (October)",
        percentage: 16.67,
        amount: 5500,
        due: "October 15, 2026",
      },
      {
        milestone: "Month 5 (November)",
        percentage: 16.66,
        amount: 5500,
        due: "November 15, 2026",
      },
      {
        milestone: "Month 6 (December)",
        percentage: 16.66,
        amount: 5500,
        due: "December 15, 2026",
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
        "Review the proposal, ask any questions, and sign off. We'll send a formal agreement and the first month's invoice.",
    },
    {
      step: 2,
      title: "Onboarding Questionnaire",
      description:
        "A short intake covering current ad accounts, Laylo + Shopify access, Atlantic and ticketing data feeds, Spotify for Artists access, and team contacts.",
    },
    {
      step: 3,
      title: "Fan-Data Consolidation",
      description:
        "We unify Laylo, Shopify, Atlantic, smart-link, and ticketing data into one segmentable, band-owned audience within the first two weeks — the foundation everything else runs on.",
    },
    {
      step: 4,
      title: "Paid + Capture Go Live",
      description:
        "Full-funnel paid media and fan-capture campaigns launch by Week 4, driving tickets across the tour and converting the catalog + TikTok discovery wave into owned fans.",
    },
    {
      step: 5,
      title: "Scale The Engine",
      description:
        "From there we compound — reallocating to the highest-ROAS markets, activating the owned database for festival, cruise, and merch, and lifting the follower ratio through the full album cycle.",
    },
  ],

  cta: {
    headline: "14.7 million listeners. The biggest comeback in 30 years. Let's make the audience yours.",
    body: "Until the Sun Explodes is a once-in-a-generation moment — first album in 30 years, #1 on alt-radio, a Gen-Z TikTok wave, and a tour, festival, and cruise the band actually owns. The catalog already does the discovery. Crowd Control Digital builds the engine that captures it — turning rented reach into an owned fanbase that compounds across every future tour and release. Let's build it during the window that matters most.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/sublime/hero1.png",
    heroBg: "/images/sublime/hero-bg.jpg",
    hero2: "/images/sublime/hero2.png",
    product: "/images/sublime/product.png",
    editorial: "/images/sublime/editorial.png",
    texture: "/images/sublime/texture.png",
    brutalist: "/images/sublime/brutalist.png",
    hero1Caption: "Full-Service Tour + Streaming Growth",
    brutalistCaption: "Sublime × Crowd Control Digital",
    ogImage: "/images/sublime/og-image.png",
  },
};
