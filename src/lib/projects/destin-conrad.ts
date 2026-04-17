import type { ProjectData } from "../project-context";

export const destinConrad: ProjectData = {
  accentColor: "#E63946",

  client: {
    name: "Destin Conrad",
    logo: "",
    contactName: "ABVGRND Management",
    contactRole: "Management",
    contactEmail: "destin@abvgrnd.com",
    industry: "Music / Alternative R&B",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "The Post-Grammy Engine",
    tagline:
      "A Grammy nomination, a 308M-stream catalog, and a sold-out headline tour. The artistry is unassailable — now build the marketing machine that turns every fan into an owned audience, every tour date into a revenue moment, and every Grammy conversation into compounding growth.",
    type: "Full-Service Digital Marketing",
    startDate: "May 1, 2026",
    endDate: "October 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Crowd Control Digital will build and operate the full digital marketing infrastructure around Destin Conrad's post-Grammy moment — the 6-month window that turns a nomination into a ceiling break. From paid media and creator marketing to a Laylo + SMS funnel and a merch drop calendar, CCD creates the system that converts the Love on Digital tour, the Grammy narrative, and every Kehlani-tier collab moment into measurable growth: streams, subscribers, ticket sales, merch revenue, and a fanbase Destin actually owns. He has the songs, the critical consensus, and the cultural weight. What's missing is the engine that captures it all and compounds it past this cycle.",
    objectives: [
      "Build a paid media machine across Meta, TikTok, and YouTube that amplifies every release moment, tour date, and Grammy beat — targeting 3M+ Spotify monthly listeners by end of engagement (from 1.2M)",
      "Upgrade the Squarespace newsletter to a Laylo-powered email + SMS engine with segmented flows for tour cities, album drops, and merch — scaling from passive capture to 25K+ owned subscribers",
      "Execute 3+ creator marketing waves across TikTok, Instagram, and YouTube — targeting queer, R&B, and culture verticals with 100+ pieces of seeded UGC and influencer content",
      "Build out the YouTube channel into a real content engine — closing the 16% gap between 190K YouTube subs and 1.2M Spotify listeners with a production-diary series, Tiny Desk-caliber live captures, and lyric video rollouts",
      "Execute a merch and e-commerce drop calendar tied to the Grammy moment, the Love on Digital tour, and the next era — limited runs, brand collabs, and Laylo-gated presales",
    ],
    subtitle:
      "Six months of full-stack digital marketing built around the Grammy window, the Love on Digital tour, and Destin's next era — paid media, creator campaigns, a Laylo + SMS funnel, and merch infrastructure.",
    imageCaption: "Full-Service Digital Marketing",
    stats: [
      {
        value: 100,
        suffix: "+",
        label: "Creator Content Pieces",
        description:
          "UGC and influencer content seeded across TikTok, Instagram, and YouTube across three coordinated creator waves",
      },
      { value: 3, suffix: "M+", label: "Target Listeners" },
      { value: 25, suffix: "K+", label: "Subscribers Built" },
      { value: 6, label: "Month Campaign" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before proposing a single deliverable, we audited Destin's digital ecosystem, competitive landscape, and audience data. The findings confirm what the Grammy nomination already suggested — this is an artist with elite artistic consensus and a major opportunity to modernize the marketing infrastructure around him.",
    insights: [
      {
        label: "Passive Email Funnel",
        finding:
          "destinconrad.com runs a default Squarespace newsletter form — a static 'Sign up to receive news and updates' capture with no SMS, no segmentation, no automation, no tour-city or release-window flows, and no paid traffic driving signups. The tool is there, but it's a dormant capture box rather than a marketing engine. Kehlani and Ambré's peer set all run Laylo-powered direct-to-fan systems.",
        source: "destinconrad.com audit",
      },
      {
        label: "The YouTube Gap",
        finding:
          "~190K YouTube subscribers on 1.2M Spotify monthly listeners — roughly 16% penetration. Peer R&B artists at Destin's tier (Kiana Ledé, Jhené Aiko) sit at 30–40%+. Fans are searching for KISSING IN PUBLIC visuals, Tiny Desk clips, and longform interviews — but the content cadence isn't there to meet them.",
        source: "YouTube / Spotify cross-check",
      },
      {
        label: "Merch Is Barebones",
        finding:
          "Standard tees, hoodies, and vinyl — no limited drops, no designer or streetwear collabs, no Grammy-nomination commemorative pieces, no Laylo-gated presale exclusives. Every tour stop and narrative beat is a merch moment left on the table.",
        source: "destinconrad.com/shop audit",
      },
      {
        label: "The Grammy Window",
        finding:
          "Best Progressive R&B Album nomination (Jan 2026) created a 90–120 day narrative window that is the highest-ROI period of this entire album cycle. Right now that window is running on press alone — no paid amplification, no owned-audience capture campaign, no Grammy-moment merch drop.",
        source: "Recording Academy / press audit",
      },
      {
        label: "Tour Without a Targeting Layer",
        finding:
          "The Love on Digital North American Headline Tour — Lollapalooza, Outside Lands, Sony Hall NYC, plus independent headline dates — is running without geo-targeted paid campaigns, SMS tour alerts, or ticket retargeting. Sold seats are coming from organic reach and Kehlani-adjacent fan overlap alone.",
        source: "Ticketmaster / paid media audit",
      },
    ],
    marketContext:
      "The alt-R&B and queer R&B lanes in 2026 are experiencing cultural momentum but uneven commercial execution — most artists in Destin's tier rely on playlist placement and organic social with little paid infrastructure behind them. A Grammy-nominated independent artist with a hit album, a jazz companion project, a national tour, and Kehlani's writing credits sits at the front of that pack on artistry — but only marginally ahead on marketing. The window to convert Grammy consensus into sustained infrastructure closes fast. The artists who break out of this tier in the next two years will be the ones who built the systems now.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Destin's audience is Gen Z, queer-dominant, POC-majority, and deeply identity-driven — fiercely loyal to artists who represent them authentically. They're Kehlani-adjacent, genre-curious, and ready to pay for connection, merch, and proximity — but there's no owned channel deepening that connection past algorithm-dependent social.",
    demographics:
      "Core audience is 18–28, predominantly queer + POC, concentrated in LA/NYC/ATL/DMV with emerging UK reach.",
    demographicCards: [
      {
        label: "Age Range",
        value: "18–28 core",
        detail: "21–25 peak engagement",
      },
      {
        label: "Identity",
        value: "Queer + POC-majority",
        detail: "Mirrors Destin's explicit Black queer positioning",
      },
      {
        label: "Geography",
        value: "LA / NYC / ATL / DMV",
        detail: "Emerging UK + London market",
      },
      {
        label: "Behavior",
        value: "TikTok → Spotify",
        detail: "Discovery on TikTok, consumption on Spotify, loyalty on IG",
      },
    ],
    personas: [
      {
        name: "The Kehlani Crossover",
        ageRange: "20–26",
        description:
          "Pop-leaning R&B listener who discovered Destin via Kehlani's writing credits or the BAD BITCHES feature. Values artist authenticity and crew energy. Streams both heavily, attends festivals, buys tour merch when the aesthetic is right.",
        traits: ["Festival-Goer", "Crew Loyalist", "Playlist Sharer", "Casual Merch Buyer"],
      },
      {
        name: "The Queer Anthem Seeker",
        ageRange: "18–28",
        description:
          "Actively seeking Black queer love and identity-affirming R&B in a genre that hasn't always embraced it. Engaged with Destin's narrative on coming out, queer joy, and Black queer love — sees his music as a chosen-family marker. Highest-intent ticket buyer and merch-as-solidarity purchaser.",
        traits: ["Identity-Driven", "High LTV", "Story-Sharer", "Tour-Committed"],
      },
      {
        name: "The Alt-R&B Explorer",
        ageRange: "21–27",
        description:
          "Genre-adventurous tastemaker following Rated R&B, The Fader, Pitchfork. Respected Destin's wHIMSY jazz pivot as courageous. Drives word-of-mouth discovery and cultural legitimacy. Likely to pay for premium product — vinyl, zines, limited runs.",
        traits: ["Tastemaker-Adjacent", "Genre-Curious", "Vinyl Collector", "Longform Reader"],
      },
    ],
    psychographics: [
      "Representation hunger — fans cite the absence of explicit Black queer love stories in R&B. Destin fills a gap competitors don't, which drives loyalty beyond streams into merch, tickets, and word-of-mouth",
      "Authenticity signals matter more than production polish — fans reward transparency, risk-taking (the jazz pivot), and intentional visuals over commercial radio-ready moves",
      "Community belonging — the Kehlani / kwn / Sasha Keable / Ambré crew is read as a chosen-family, and fans engage with it as much as with the music itself",
      "Artistic risk appetite — fans respect the wHIMSY jazz move; they want to follow him across eras, not be sold the same record twice",
    ],
    painPoints: [
      "Discoverability ceiling — outside queer and indie circles, casual R&B listeners still don't know him despite Grammy recognition and 300M+ streams",
      "Between-drop silence — fans complain the gaps between releases create momentum anxiety; no content engine fills the space",
      "No direct channel — fans rely on social algorithms for announcements, which means missed drops, missed tour dates, missed merch windows",
      "Tour pricing and merch access — Gen Z fans are price-sensitive (79% wait for sales); limited-drop and payment-plan options haven't been explored",
    ],
    purchaseTriggers: [
      "Kehlani collab moments — every feature and joint appearance drives a streaming + merch + search spike",
      "Viral TikTok moments — IN THE AIR has 1.3M+ creations; KISSING IN PUBLIC and BAD BITCHES are primed to hit the same tier with paid amplification",
      "Grammy and award show beats — nomination, performance, and red carpet moments are the highest-earned-media days of the cycle",
      "Album drops and deluxe editions — wHIMSY's deluxe re-engaged lapsed listeners; future deluxe and visual-album drops are a proven conversion mechanic",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "239K followers, but the creative economy is larger than his follower count — IN THE AIR has spawned 1.3M+ TikToks. Discovery engine. Sound reuse, thirst edits, lyric edits, and queer-joy posts drive organic reach. Severely under-seeded with paid creator campaigns.",
      },
      {
        name: "Instagram",
        description:
          "422K followers. Loyalty and aesthetic hub — fits, tour BTS, crew moments, personal posts. Story engagement is high. This is the most established channel but Reels remain underutilized relative to feed posts.",
      },
      {
        name: "Spotify",
        description:
          "1.2M monthly listeners, 308M+ total streams. IN THE AIR (52M), EXCITED! (18M), COLORWAY (16M) anchor the catalog. Playlist placement and algorithmic radio are the primary growth levers — paid discovery can accelerate both.",
      },
      {
        name: "YouTube",
        description:
          "190K subs — the single largest growth opportunity across the ecosystem. Official videos perform but the channel lacks a content cadence between them. Production diaries, live captures, Q&As, and lyric videos are the low-hanging fruit.",
      },
    ],
    quotes: [
      {
        text: "Kehlani, kwn, Sasha Keable and Destin Conrad 😩 I'm obsessed with that group of friends man i love being gay",
        source: "X / Twitter",
      },
      {
        text: "The audience was kind and respectful. Destin has such a beautiful stage presence. He interacted with us so much and it just felt like we all knew him.",
        source: "Concert review",
      },
      {
        text: "Vocals smooth like butter — and the fact he dropped a whole jazz album mid-tour? Icon behavior.",
        source: "TikTok comments, paraphrased",
      },
    ],
  },

  targets: [
    {
      metric: "Spotify Monthly Listeners",
      value: "3M+",
      context:
        "From 1.2M to 3M+ — driven by paid discovery across Meta and TikTok, algorithmic pushes from a sustained creator marketing cadence, playlist pitching support, and Grammy-window narrative amplification timed to the 90–120 day post-nomination period.",
    },
    {
      metric: "Email & SMS List",
      value: "25K+",
      context:
        "Upgrade the passive Squarespace newsletter to Laylo + SMS with segmented flows (tour cities, album drops, merch). Build from capture via merch opt-in, paid lead-gen, TikTok bio drivers, tour-stop QR codes, and Grammy-moment landing pages. 25K is the threshold for meaningful direct-to-fan monetization.",
    },
    {
      metric: "YouTube Subscribers",
      value: "400K+",
      context:
        "Close the 16% YouTube-to-Spotify gap toward 33% (peer-tier benchmark). Driven by pre-roll paid, Shorts strategy, production-diary series, Tiny Desk and live-capture content, and metadata/thumbnail optimization across the existing catalog.",
    },
    {
      metric: "Paid Media ROAS",
      value: "4×+",
      context:
        "Industry benchmark for music marketing on Meta and TikTok. Measured across stream-equivalent value, ticket sales attribution, and merch revenue from paid traffic. CCD's artist retainers hold a 4–6× range across comparable engagements.",
    },
  ],

  competitive: {
    summary:
      "Destin sits at 1.2M Spotify monthly listeners with a Grammy nomination, a critically-loved debut album, a jazz companion project, and a headline tour — but with a passive email form as his owned-audience infrastructure. Peers in the alt-R&B and queer R&B lanes have higher streaming floors because they've built the systems around their artistry. The tier above him is within range, but only with the marketing machine to get there.",
    competitors: [
      {
        name: "Kaash Paige — 6.0M Monthly Listeners",
        strength:
          "Houston alt-R&B artist with an established fan-community engine (HBK Club), consistent merch ecosystem, and active creator partnerships across TikTok and Instagram. Leverages organic social momentum across multiple platforms simultaneously.",
        gap: "Kaash has sophisticated community infrastructure but relies heavily on organic virality rather than paid creator seeding or segmented email/SMS funnels. Destin can match her community depth and then outpace her with paid creator waves and Laylo-powered direct-to-fan flows — the infrastructure layer CCD specializes in.",
      },
      {
        name: "Snoh Aalegra — 5.97M Monthly Listeners",
        strength:
          "Iranian-Swedish soul vocalist with deep Spotify playlist penetration, established collaborator roster, and global R&B/contemporary crossover appeal. Sustains a high streaming floor through editorial playlist placement.",
        gap: "Minimal visible fan engagement infrastructure — no Laylo, limited TikTok creator marketing, and no systematic paid amplification on singles. Destin can own the creator marketing and paid social playbook at his tier while Snoh's approach stays passive.",
      },
      {
        name: "UMI — 1.92M Monthly Listeners",
        strength:
          "Genre-defying singer-songwriter with rapid organic growth (234% YoY listener increase March 2026), high-engagement grassroots fanbase, and authentic emerging-artist trajectory.",
        gap: "No visible paid media scaffolding, minimal merchandise strategy, and no sophisticated owned-audience systems. UMI is growing on authenticity alone — Destin can build the systems UMI hasn't (yet) and compound his existing Grammy and tour momentum into the 3M+ tier faster.",
      },
    ],
  },

  timelineHeading: "Campaign Roadmap",
  timelineSubheading:
    "A focused 6-month engagement across three phases — from infrastructure build-out through the Grammy/tour window and into the next-era setup — designed to capture every high-value moment across the back half of the Love on Digital cycle.",
  timelineImageCaption: "6 Months / 3 Phases / 4 Workstreams",

  timeline: [
    {
      phase: "Foundation & Infrastructure",
      week: "Weeks 1–4",
      date: "May 2026",
      status: "upcoming" as const,
      tasks: [
        "Full digital ecosystem audit — social, streaming, merch, YouTube, competitive benchmarking, Meta Ad Library review",
        "Paid media architecture — pixel installation, audience building, campaign structure across Meta, TikTok, and YouTube",
        "Laylo implementation — migrate from Squarespace newsletter, build segmentation (tour cities, album drops, merch buyers), design welcome and abandoned-cart flows, SMS opt-in",
        "Social strategy development — content pillars, posting cadence, platform-specific optimization across IG / TikTok / YT / X",
        "Creator marketing shortlist — identify and vet 50+ creators across queer, R&B, fashion, and culture verticals",
        "Merch audit and drop calendar — inventory, pricing, e-commerce UX review, and a 2026 drop calendar tied to Grammy/tour/album moments",
      ],
    },
    {
      phase: "Grammy Window + Tour Amplification",
      week: "Weeks 5–12",
      date: "Jun – Jul 2026",
      status: "upcoming" as const,
      tasks: [
        "Launch paid media campaigns — awareness, engagement, and stream conversion across Meta, TikTok, and YouTube at $3–5K/mo spend",
        "First creator wave — seed Love on Digital catalog tracks (IN THE AIR, KISSING IN PUBLIC, BAD BITCHES) to 30+ creators across queer/R&B/lifestyle verticals",
        "Laylo + SMS list building — paid lead-gen, tour-stop QR captures, merch bundle opt-ins, TikTok bio drivers",
        "YouTube content launch — production-diary series, lyric video rollout, live-capture content, Shorts strategy, metadata/thumbnail optimization",
        "Geo-targeted tour campaigns — Lollapalooza, Outside Lands, Sony Hall NYC, and every independent headline date with 4–6 week paid ramp-ups",
        "Grammy-moment merch drop — commemorative limited run tied to the nomination narrative, gated via Laylo presale",
        "Daily social management and monthly performance reporting",
      ],
    },
    {
      phase: "Album Era Transition + Next-Cycle Setup",
      week: "Weeks 13–24",
      date: "Aug – Oct 2026",
      status: "upcoming" as const,
      tasks: [
        "Sustain paid media surge — retargeting, lookalike audiences, and always-on ticket retargeting across remaining tour markets",
        "Second and third creator waves — 70+ creators across new singles, deluxe editions, and tour recap content",
        "Next-era tease — coordinated paid media and email/SMS for whatever Destin drops post-Love on Digital (single, visual album, jazz follow-up)",
        "Brand collab merch drop — designer or streetwear partnership coordinated with Laylo presale, paid amplification, and creator seeding",
        "Retention and lifecycle flows — email/SMS nurture sequences, Spotify retargeting, abandoned-cart recovery",
        "Monthly performance reviews and budget reallocation based on what's converting",
        "End-of-engagement impact report — full performance analysis with forward recommendations for the next cycle",
      ],
      ongoing: true,
    },
  ],

  deliverables: [
    {
      category: "Paid Media",
      icon: "●",
      items: [
        {
          name: "Meta Advertising",
          quantity: "6 months",
          description:
            "Instagram and Facebook campaigns — awareness, engagement, stream conversion, ticket sales, and merch retargeting across the Grammy window, tour, and next-era setup",
        },
        {
          name: "TikTok Advertising",
          quantity: "6 months",
          description:
            "In-feed and Spark Ads campaigns targeting music discovery, sound usage, and creator amplification — Destin's discovery engine",
        },
        {
          name: "YouTube Advertising",
          quantity: "6 months",
          description:
            "Pre-roll and discovery campaigns driving music video views, channel growth, and subscriber acquisition — the largest growth opportunity in his ecosystem",
        },
        {
          name: "Retargeting & Lookalikes",
          quantity: "Ongoing",
          description:
            "Cross-platform retargeting of engaged users, website visitors, and email subscribers — plus lookalike audiences built from highest-value fan segments",
        },
      ],
    },
    {
      category: "Social Strategy & Content",
      icon: "▶",
      items: [
        {
          name: "Social Strategy",
          quantity: "1",
          description:
            "Comprehensive platform strategy — content pillars, posting cadence, engagement tactics, and growth levers for Instagram, TikTok, YouTube, and X",
        },
        {
          name: "Content Calendar",
          quantity: "Monthly",
          description:
            "Strategic planning aligned to Grammy window, tour dates, release moments, and cultural beats — with platform-specific formats and copy",
        },
        {
          name: "YouTube Build-Out",
          quantity: "Ongoing",
          description:
            "Channel strategy, production-diary series planning, Shorts rollout, live-capture prep, metadata and thumbnail testing across existing and new content",
        },
        {
          name: "Performance Reporting",
          quantity: "24 reports",
          description:
            "Weekly performance snapshots and monthly deep-dive reports across all platforms with actionable optimization recommendations",
        },
      ],
    },
    {
      category: "Creator Marketing",
      icon: "◆",
      items: [
        {
          name: "Creator Campaign Strategy",
          quantity: "1",
          description:
            "End-to-end influencer strategy — creator identification, vetting, outreach, briefing, and performance tracking across queer, R&B, fashion, and culture verticals",
        },
        {
          name: "Influencer Seeding Waves",
          quantity: "3+",
          description:
            "Coordinated creator campaigns timed to tour dates, Grammy beats, and new releases — each wave 30+ creators with tailored briefs",
        },
        {
          name: "UGC Content Library",
          quantity: "100+ pieces",
          description:
            "Curated library of user-generated and influencer content repurposed for paid media, social, and marketing channels",
        },
        {
          name: "Viral Moment Amplification",
          quantity: "Ongoing",
          description:
            "Real-time monitoring and rapid-response creator activations when organic moments spike — turning virality into sustained campaigns",
        },
      ],
    },
    {
      category: "Email/SMS & E-Commerce",
      icon: "△",
      items: [
        {
          name: "Laylo Migration & Setup",
          quantity: "1",
          description:
            "Full Laylo implementation — migrate off Squarespace's default newsletter form, architect segmentation (tour cities, album drops, merch buyers), welcome and abandoned-cart flows, SMS opt-in, and integration with the merch store",
        },
        {
          name: "Campaign Sends",
          quantity: "8+/mo",
          description:
            "Release announcements, tour updates, Grammy moments, merch drops, exclusive content, and re-engagement sequences — email + SMS coordinated",
        },
        {
          name: "Merch Drop Strategy",
          quantity: "3+ drops",
          description:
            "Timed product releases — Grammy commemorative, tour exclusives, brand collab — with hype sequences, limited editions, and post-drop retargeting",
        },
        {
          name: "E-Commerce Optimization",
          quantity: "Ongoing",
          description:
            "Store UX improvements, conversion rate optimization, upsell/cross-sell strategy, and integration with Laylo + paid media funnels",
        },
      ],
    },
  ],

  deliverablesSubheading:
    "Four workstreams operating in sync — paid media, social and YouTube, creator marketing, and owned-audience infrastructure — everything needed to convert a Grammy-nominated moment into a sustainable career engine.",

  scope: {
    included: [
      "Full-service paid media management across Meta, TikTok, and YouTube for the 6-month engagement",
      "Social media strategy development, content calendar planning, and YouTube channel build-out across all active platforms",
      "Creator marketing — identification, outreach, campaign management, and performance tracking across 3+ waves",
      "Laylo migration, SMS setup, segmented automation flows, and campaign sends",
      "Merch store optimization, drop strategy planning, and e-commerce integration",
      "Geo-targeted tour marketing campaigns for every Love on Digital tour market through October 2026",
      "Weekly performance snapshots and monthly deep-dive reporting with optimization recommendations",
      "Onboarding audit — full digital ecosystem assessment and competitive benchmarking",
    ],
    excluded: [
      "Music production, recording, mixing, or mastering",
      "PR, press relations, or media outreach",
      "Tour logistics, booking, or venue coordination",
      "Graphic design, animation, and music video production (available as add-on — scoped and quoted separately)",
      "Legal counsel, contract negotiation, or rights management",
    ],
    subheading:
      "Everything included in this engagement — and where the boundaries are between CCD's marketing mandate and the creative, press, and business operations workstreams.",
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Paid Media Management",
        description:
          "Campaign strategy, audience targeting, creative direction, optimization, and reporting across Meta, TikTok, and YouTube. Ad spend billed separately at 15% management fee.",
        price: 3500,
        recurring: true,
      },
      {
        name: "Social Strategy & YouTube",
        description:
          "Platform strategy, content calendar, YouTube channel build-out, and weekly/monthly performance reporting",
        price: 2500,
        recurring: true,
      },
      {
        name: "Creator Marketing",
        description:
          "Influencer identification, outreach, campaign management, UGC curation, and viral moment amplification. Creator fees billed separately at 15% management fee.",
        price: 2500,
        recurring: true,
      },
      {
        name: "Email/SMS & E-Commerce",
        description:
          "Laylo migration, SMS setup, list building, campaign sends, merch drop strategy, and store optimization",
        price: 1500,
        recurring: true,
      },
    ],
    subtotal: 10000,
    setupFee: {
      label: "Onboarding & Discovery Sprint",
      amount: 2500,
    },
    mediaBudget: {
      label: "Recommended Media Budget",
      amount: 4000,
      note: "Recommended ad spend across Meta, TikTok, and YouTube — billed to platforms + 15% management fee. Scales up during Grammy window and tour peak.",
    },
    discount: {
      label: "6-Month Commitment",
      percentage: 0,
      amount: 0,
    },
    total: 62500,
    paymentSchedule: [
      {
        milestone: "Month 1 + Setup",
        percentage: 20,
        amount: 12500,
        due: "Upon approval — May 2026",
      },
      { milestone: "Month 2", percentage: 16, amount: 10000, due: "June 1, 2026" },
      { milestone: "Month 3", percentage: 16, amount: 10000, due: "July 1, 2026" },
      { milestone: "Month 4", percentage: 16, amount: 10000, due: "August 1, 2026" },
      { milestone: "Month 5", percentage: 16, amount: 10000, due: "September 1, 2026" },
      { milestone: "Month 6", percentage: 16, amount: 10000, due: "October 1, 2026" },
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Review & Align",
      description:
        "ABVGRND reviews this proposal and schedules a 30-minute strategy call with the CCD team to discuss scope, timing, and priorities.",
    },
    {
      step: 2,
      title: "Kickoff Call",
      description:
        "Strategy alignment session with CCD — we walk through the audit findings, confirm the Grammy and tour timelines, and lock the campaign calendar.",
    },
    {
      step: 3,
      title: "Onboarding Sprint",
      description:
        "One-week intensive — full digital audit, pixel and tracking setup, Laylo migration kick-off, paid media architecture, and creator shortlisting.",
    },
    {
      step: 4,
      title: "Campaigns Go Live",
      description:
        "Paid media, social strategy, YouTube build-out, and creator marketing campaigns launch in market. Laylo + SMS flows begin capturing and nurturing the audience.",
    },
    {
      step: 5,
      title: "Monthly Optimization",
      description:
        "Ongoing performance reviews, budget reallocation, and strategy pivots — plus onboarding questionnaire for deeper platform access and creative assets.",
    },
  ],

  cta: {
    headline: "The Grammy Window Is Open — Don't Let It Pass",
    body: "A Grammy nomination. A debut album that Rated R&B, Pitchfork, and Billboard all called a landmark moment for Black queer R&B. A jazz companion project. A national headline tour. Kehlani on the phone. 308M Spotify streams and climbing. This is the year everything compounds — or the year the infrastructure gap decides the ceiling. CCD builds the digital machine that makes sure every stream, every ticket, and every fan counts. We're ready when you are.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/destin-conrad/hero1.png",
    hero2: "/images/destin-conrad/hero2.png",
    product: "/images/destin-conrad/product.png",
    editorial: "/images/destin-conrad/editorial.png",
    texture: "/images/destin-conrad/texture.png",
    brutalist: "/images/destin-conrad/brutalist.png",
    heroBg: "/images/destin-conrad/hero-bg.jpg",
    ogImage: "/images/destin-conrad/og-image.png",
    hero1Caption: "Full-Service Digital Marketing",
    brutalistCaption: "Destin Conrad × Crowd Control Digital",
  },

  caseStudies: [
    { client: "BBNO$", metric: "150K+", description: "TIKTOK CREATES" },
    { client: "PESO PLUMA", metric: "700M+", description: "SPOTIFY STREAMS" },
    { client: "EMOTIONAL ORANGES", metric: "300M+", description: "SPOTIFY STREAMS" },
    { client: "KRIS WU × TRAVIS SCOTT", metric: "38M+", description: "SPOTIFY STREAMS" },
  ],
};
