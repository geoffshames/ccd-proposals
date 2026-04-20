import type { ProjectData } from "../project-context";

export const wonder: ProjectData = {
  accentColor: "#FD3737",

  client: {
    name: "WONDER",
    logo: "",
    contactName: "Lee",
    contactRole: "Founder, WONDER",
    contactEmail: "",
    industry: "K-Pop Management / Global Services / Distribution",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "THE AMERICA LAYER",
    tagline:
      "Two mandates, one operator. CCD stands up the US marketing, data, creator, and physical-infrastructure layer WONDER needs to (1) close the Kiss of Life rebrand through Q3 and (2) build the services blueprint YG Plus needs to hit its three 2027 KPIs — without WONDER having to staff an in-house execution team in Los Angeles.",
    type: "Strategic Quarterback + US Services Infrastructure",
    startDate: "July 1, 2026",
    endDate: "December 31, 2026",
    duration: "6 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Mandate",
    summary:
      "This engagement is structured on two tracks running in parallel. Track 1 is the Kiss of Life rebrand flagship — CCD takes the quarterback seat alongside S2 Entertainment, Cacao, and Origin to run the US marketing against the July comeback: creator and edit-community mobilization, narrative-driven comment ops, experiential pop-ups, SMS/D2C capture, and proper physical-album distribution. Track 2 is the YG Plus services infrastructure — CCD builds the marketing, merch, D2C, and data-capture blueprint that becomes YGP's productized offering to its 600+ partner-label catalog, so YGP can hit its 2027 KPIs (Billboard entry, infrastructure stand-up, marketing services delivery) the same way Cacao International delivers for Cacao Entertainment. WONDER sits in the orchestration seat. CCD owns execution, vendor audit, data sovereignty, and US-side supply chain — so every dollar WONDER routes through YGP's advance money or KOL's marketing budget comes back as owned infrastructure instead of disposable spend.",
    objectives: [
      "Quarterback the Kiss of Life US rebrand — align S2, Cacao, Origin, and any retained vendors under one execution plan, audit every invoice, and make sure KOL's July comeback lands with proper creator marketing, cultural tie-ins, and physical-album distribution for the first time in the US",
      "Build an owned fan-data layer for WONDER's roster — SMS/email capture targeting 100K+ US phone numbers across KOL and catalog acts, independent of Berriz/Weverse/Cacao's walled gardens, so WONDER can activate a release or tour without needing permission from a label CRM",
      "Deploy the creator marketing + comment-intelligence system — real strategy tied to cultural IP (Euphoria/Tim Burton-style tie-ins), paid deployment against the top 10% of creators, and the comment-seeding tool CCD is already operating for other artists",
      "Stand up the three-pillar physical / merch / D2C supply chain — tour fulfillment, Target/Walmart/record-store album distribution, and a branded D2C layer with Philippines-based CS that fixes the $14-vs-$4 US-merch-cost problem and the zero-US-physicals problem in one move",
      "Productize the YG Plus services layer — package the KOL playbook into $10K / $30K / $50K per-release tiers, plus experiential pop-ups through CCD's events partner, so YGP can offer real services against its advance money instead of burning it as straight cash to labels that don't know how to deploy it",
    ],
    subtitle:
      "Strategic quarterback. Infrastructure build. US-side execution. Priced so every release turns WONDER's marketing spend into owned assets — not disposable creative.",
    imageCaption: "Strategic Quarterback + US Services Infrastructure",
    stats: [
      {
        value: 2,
        label: "Parallel Tracks",
        description:
          "Kiss of Life rebrand flagship + YG Plus US services infrastructure — executed simultaneously on a single retainer",
      },
      { value: 100, suffix: "K+", label: "US SMS Target" },
      { value: 3, label: "Per-Release Tiers" },
      { value: 6, label: "Month Engagement" },
    ],
  },

  discovery: {
    heading: "What The Audit Turned Up",
    summary:
      "Before writing a single line of this proposal, CCD audited the full WONDER-adjacent stack: Kiss of Life's US digital footprint, the S2/Cacao distribution chain, Origin's influencer-network play, the competitive Hot 100 landscape, and YG Plus's post-HYBE-divestment positioning. The findings below are the specific gaps — and the specific white space — we'd be hired to close.",
    insights: [
      {
        label: "Zero US Physicals",
        finding:
          "Kiss of Life has moved zero physical units in the US year-to-date per Luminate. For context: Stray Kids (#2 US CD seller) moved 149K copies in 2025, Enhypen moved 145K, Ateez moved 116K — all on the same Target/Walmart/record-store infrastructure WONDER hasn't been plugged into. The US is the biggest physical-sales market in the world, and KOL is currently not competing in it. Physicals aren't a vanity metric — 20K US units charts you on the Billboard 200, which unlocks US editorial, US radio, and a whole second wave of organic pickup.",
        source: "Luminate 2025 Year-End Music Report + midyear CD sales data",
      },
      {
        label: "Creator Adoption Flatline",
        finding:
          "KOL's last single has near-zero sound usage on TikTok/Reels relative to fandom size (3.8M TikTok followers). There's no protracted creator strategy, no cultural tie-in, and no narrative hook — the last clipping vendor engagement produced volume without resonance. Dominic Fike's team ran ~600K Euphoria-tied creates and landed #10 on the Hot 100 the same month. Young Blood's team did Corpse Bride edits for 'Zombies' and 10x'd daily streams. That playbook — cultural IP + strong visual + paid deployment on the top 10% of creators — is currently not being run on KOL.",
        source: "TikTok/IG creator audit + Hot 100 case-study analysis",
      },
      {
        label: "Walled-Garden Data",
        finding:
          "Fan data is getting captured — but mostly by Cacao (distributor) and S2 (label). The US fan list lives inside someone else's CRM. WONDER can't segment it, can't retarget independently, can't run a pre-save-to-SMS funnel on its own cadence, and can't text 100K US fans the day a KOL single drops to pull in day-one streams. The audience exists — it's just behind a wall that isn't yours. This is a sovereignty gap, not an existence gap, and it's exactly the pattern CCD built around Cacao International for Kev's team.",
        source: "S2 / Cacao distribution contract context + Berriz platform analysis",
      },
      {
        label: "US Merch Cost Bleed",
        finding:
          "Last US physical production (Opening Ceremony, ~10K units) ran $14/unit. Korea domestic production runs $3–4/unit for comparable CD+photocard packages. That's a $100K+ margin leak per release cycle before shipping, and it's the reason most Korean labels simply don't send albums into the US. The fix isn't one vendor — it's a three-pillar supply chain: tour fulfillment, album retail distribution (Target/Walmart/record stores), and a branded D2C layer with real customer service. CCD has the partner operators for each pillar already active on Monsta X, Logic, Whiz Khalifa, Lana Del Rey, and Backstreet Boys tours.",
        source: "WONDER merch cost disclosure + CCD merch-partner network audit",
      },
      {
        label: "YGP White Space",
        finding:
          "YG Plus divested from HYBE in September 2025 (~$27M) and is actively rebuilding its distribution network across 600+ partner labels. Their advance model is straight-cash to labels who don't know how to deploy it. The US-style alternative — route advance money through productized marketing services — is the exact blueprint Cacao International runs for Cacao Entertainment, and it's the gap WONDER is sitting in front of. There is no competitor currently offering YGP a pre-built three-tier services stack (Catalog / Priority / Flagship) with a Billboard-entry playbook. This is the window.",
        source: "Music Business Worldwide (HYBE/YGP divestment) + YGP partner-network data",
      },
    ],
    marketContext:
      "The competitive window is real and narrow. HYBE's YGP stake sale closes in 2025. YGP's HYBE distribution catalog deal expires in 2028 — meaning 2026 and 2027 are the years YGP has to prove a services offering that brings in non-HYBE business. Kiss of Life's July comeback is the flagship case study WONDER can use to sell YGP on the model. Get KOL's numbers right between July and December, and YGP signs the full services deal heading into 2027 against the three KPIs they've already articulated. Miss the KOL window and WONDER is selling an unproven pitch.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "This engagement serves two audience layers: the end-consumer audience (Kiss of Life's US fandom and the broader 4th-gen K-pop ticket/physical-buyer) and the institutional audience WONDER is selling into (YG Plus leadership). The consumer layer drives the creative and media work. The institutional layer drives the services productization.",
    demographics:
      "Consumer: 16–28 US core, ~85% female, multi-platform (X for coordination, TikTok for discovery, IG for content, Berriz for community). Institutional: YGP executive, S2 management, Cacao US operations.",
    demographicCards: [
      {
        label: "Age Range",
        value: "16–28 core",
        detail: "18–24 peak TikTok + physical-album spend",
      },
      {
        label: "Gender",
        value: "~85% female",
        detail: "Consistent across KOL, Ateez, SKZ, SVT comp sets",
      },
      {
        label: "Geography",
        value: "US + SEA + LATAM",
        detail: "LA, NYC, Dallas, Houston top US markets",
      },
      {
        label: "Behavior",
        value: "Multi-platform",
        detail: "X coordinates, TikTok discovers, Berriz engages, Target/Walmart converts",
      },
    ],
    personas: [
      {
        name: "The Edit Kid",
        ageRange: "16–22",
        description:
          "Lives on TikTok and Instagram Reels. Already makes or reposts K-pop edits daily — this is the audience we mobilize with cultural tie-in campaigns (Euphoria edits, K-drama crossovers, fashion-brand cameos) and the 10% of them who are paid creators are the ones we deploy budget against.",
        traits: ["Edit Maker", "Sound-Usage Driver", "Trend Adopter", "Paid Creator Funnel"],
      },
      {
        name: "The Physical Collector",
        ageRange: "18–28",
        description:
          "Buys CDs, photocards, and album versions as identity — the reason Stray Kids and Enhypen move 100K+ US physicals per drop. Walks into Target on release day. Rebuys multiple copies to pull rare photocards. Currently has nothing KOL-branded to buy in the US.",
        traits: ["Target / Walmart Buyer", "Photocard Chaser", "Multi-Copy Purchaser", "D2C Convertible"],
      },
      {
        name: "The Tour-Driven Convert",
        ageRange: "18–26",
        description:
          "Discovered K-pop through a friend, a viral moment, or a Netflix show, then converted hard at their first concert. Prime target for SMS capture, tour-merch drops, and D2C holiday bundles. Every tour date is their onboarding moment into the fandom.",
        traits: ["Concert-First", "SMS-Opt-In", "Merch Spender", "Casual-to-Stan Pipeline"],
      },
    ],
    psychographics: [
      "Narrative-driven — the edit community responds to stories and visual universes (Corpse Bride / Euphoria / Y2K) more than to asset drops, so every campaign needs IP tie-in, not just hashtag deployment",
      "Fandom-organized — US K-pop fans coordinate streaming pushes, chart strategy, and merch purchases across Discord/X, so we win by giving them coordination infrastructure (pre-save links, SMS drops, stream-tracking pages), not by trying to replace their energy",
      "Platform-native — they can smell a clipping farm, a botted comment section, or AI-generated slop with two followers instantly, so CCD's comment-intelligence tool only works if every comment carries a narrative and every creator is legit",
      "Physically invested — photocards, poster inclusions, album variants, and city-edition merch drive real revenue, which means the physical/D2C track isn't a 'nice-to-have' alongside digital, it's the primary monetization surface",
    ],
    painPoints: [
      "KOL releases drop in the US with no physicals, no creator campaign, no SMS list to text, and no D2C store — so the fans who want to spend money on the comeback have nowhere to spend it",
      "Berriz is a walled garden — fan data stays with Kakao, and the WONDER/S2 side can't retarget, segment, or run independent flows off of it",
      "US merch that does exist costs 3–4x what Korean merch costs to produce, eating margin before it ever ships",
      "There is no centralized US fan-communication channel — every touchpoint (Ticketmaster queue, Target checkout, Spotify pre-save, tour-venue merch booth) is a capture moment that isn't being captured",
    ],
    purchaseTriggers: [
      "Cultural tie-in moments — a Euphoria edit, a Corpse Bride crossover, a K-drama OST placement — create discovery urgency the way a straight asset drop can't",
      "Scarcity drops — city-edition photocards, tour-only variants, SMS-gated exclusives — convert casual fans to repeat spenders at the highest rates in K-pop",
      "Physical-retail visibility — a KOL album in Target/Walmart is itself a discovery moment for the casual shopper and a chart event for the core fandom",
      "SMS-triggered streaming and D2C — one text to 100K fans on release day can move half a million streams and sell out a drop before paid media even spins up",
    ],
    platforms: [
      {
        name: "TikTok",
        description:
          "Where KOL's discovery problem lives. 3.8M followers on the official account, but sound-usage and creates per song are underperforming fandom size. This is the primary creator-marketing surface and the first KPI we move against in the KOL rebrand track.",
      },
      {
        name: "Instagram",
        description:
          "Fandom hub. Reels are the edit surface (where the Euphoria / Corpse Bride-style tie-in campaigns deploy), feed is brand surface, Stories drive capture. Comment ops deploy here and on X simultaneously.",
      },
      {
        name: "X / Twitter",
        description:
          "K-pop coordination backbone. Streaming parties, chart campaigns, and narrative comment ops live here. The comment-intelligence tool (CCD's partner build) onboards editors and clippers into a paid comment network that operates primarily across IG, TikTok, and X.",
      },
      {
        name: "Berriz (Kakao)",
        description:
          "Official fan community — high engagement, walled-garden data. CCD bridges Berriz engagement to owned Laylo/SMS infrastructure so WONDER can run its own flows without relying on Cacao's CRM.",
      },
    ],
    quotes: [
      {
        text: "I love KOL but I literally can't buy their album anywhere in America. I had to import it off Kpoptown and it took three weeks.",
        source: "Reddit / r/kpop thread",
      },
      {
        text: "The Euphoria Dominic Fike edits are why I'm even listening to him right now. Why aren't any K-pop groups doing that?",
        source: "TikTok comment / creator-community signal",
      },
      {
        text: "Y'all don't understand how many of us would buy a proper D2C bundle if the label would just sell it to us instead of making us go through eight Korean reseller sites.",
        source: "X / K-pop fandom community post",
      },
    ],
  },

  targets: [
    {
      metric: "US Physical Units (KOL)",
      value: "20K+",
      context:
        "Move Kiss of Life's July US physical sales from zero to 20K+ units through Target/Walmart/independent-record-store distribution and D2C bundle drops — the Billboard 200 chart threshold and the single most credible case-study metric to sell YGP on the full services deal.",
    },
    {
      metric: "US SMS Database",
      value: "100K+",
      context:
        "Build an owned US SMS + email list of 100K+ fans across KOL and YGP catalog acts, captured through pre-save flows, tour-venue QR, D2C checkout, and data-gated exclusives — independent of Berriz, Cacao, and any third-party CRM.",
    },
    {
      metric: "Creator Campaign Output",
      value: "50K+ creates",
      context:
        "Drive 50K+ organic creates on KOL sounds through the cultural tie-in campaign (Euphoria / Y2K / K-drama-edit angles) with paid deployment on the top 10% of edit-community creators — benchmarked against the Dominic Fike / Young Blood playbook.",
    },
    {
      metric: "YGP Services Blueprint",
      value: "3 tiers live",
      context:
        "Deliver YG Plus a fully productized three-tier marketing services stack (Catalog $10K / Priority $30K / Flagship $50K) with a documented Billboard-entry playbook, so YGP's advance money converts into recoupable services revenue instead of disposable cash to labels.",
    },
  ],

  competitive: {
    summary:
      "WONDER is building the US services layer for YG Plus at the exact moment three competitive groups are chasing the same seat. Cacao International (Kev Nish's team) is the obvious comparable — CCD already knows that operation cold and its structural blind spots. Transparent Arts and 88rising play adjacent but different games — management + label services, not pure distribution services. Origin is influencer-network-only and can't deliver physicals, D2C, or data. The WONDER × CCD structure out-positions all of them on full-stack delivery.",
    competitors: [
      {
        name: "Cacao International (US services arm of Cacao Entertainment)",
        strength:
          "Kev Nish's operation is the existing US-services benchmark for a Korean distributor — active on roster, embedded with US labels, has a sitting seat at Capitol/Virgin/RCA-style vendor reviews.",
        gap: "Cacao International serves one distributor (Cacao) and one roster. YG Plus needs the equivalent operation built from scratch for a catalog that's 10x bigger (600+ partner labels). CCD has already run the same quarterback model Cacao International runs — same playbook, different catalog.",
      },
      {
        name: "Transparent Arts",
        strength:
          "Strong K-pop / Asian-diaspora management and event-production capabilities; solid relationships with US-facing Asian creative talent and moderate touring infrastructure.",
        gap: "Transparent Arts is a management firm, not a distribution-services operator. They don't stand up D2C infrastructure, Target/Walmart physical supply chain, or the productized marketing services tiers YGP actually needs to productize its advance model.",
      },
      {
        name: "88rising",
        strength:
          "Label + media brand with established cultural credibility and a functional physicals/merch program for its own signed roster.",
        gap: "88rising is a label competing with YGP's partners for deals — not a services operator selling into YGP. There is no universe in which YGP hires 88rising to stand up services. This is a competitive reference, not an actual bidder.",
      },
      {
        name: "Origin (influencer network)",
        strength:
          "Owns a wide network of US influencer accounts and can deploy narrative-at-scale through account-layer plays — already being used on KOL's rebrand.",
        gap: "Origin is a tactic, not an operator. They can't quarterback a rebrand, audit label spend, build D2C infrastructure, run a creator-comment intelligence system, or productize services for YGP. CCD operates the full stack with Origin as one tool inside it.",
      },
    ],
  },

  timelineHeading: "Engagement Roadmap",
  timelineSubheading:
    "A two-track 6-month engagement: the Kiss of Life rebrand runs front-and-center on the consumer side, while the YG Plus services infrastructure gets built in parallel on the institutional side — both delivering by December so WONDER walks into 2027 with a signed YGP services deal and a proven flagship case study.",
  timelineImageCaption: "6 Months / 4 Phases / 2 Tracks",

  timeline: [
    {
      phase: "Audit + Infrastructure Build",
      week: "Weeks 1–4",
      date: "July 2026",
      status: "upcoming" as const,
      tasks: [
        "Quarterback kickoff — align WONDER, S2, Cacao, Origin, and any retained vendors under a single execution plan with clear deliverable, spend, and accountability ownership on every line",
        "Vendor + spend audit across the existing KOL budget — invoice-level review (this is the audit that caught Capitol's missing $100K and the $300K Sunset-billboard overspend on prior CCD engagements)",
        "Build the Laylo / SMS fan-data layer, tour-venue QR capture kits, D2C checkout stack (with Philippines-based CS team pre-onboarded), and the first creator-marketing comment-intelligence deployment for the July KOL comeback",
        "Paul / events portfolio delivered to WONDER in the first 10 days so YG Plus pop-up locks move before their in-house stall vendor does",
      ],
    },
    {
      phase: "Kiss of Life Rebrand Flagship",
      week: "Weeks 5–12",
      date: "August – September 2026",
      status: "upcoming" as const,
      tasks: [
        "Execute the full cultural tie-in creator campaign against the KOL July release — Euphoria / Y2K / K-drama-adjacent edit campaigns deployed through paid creators at the top 10% of the edit community, not through clipping farms",
        "Narrative comment ops live across TikTok, IG, and X — seeded through CCD's paid comment-intelligence network so every comment carries a story, not three flame emojis",
        "Physical album distribution live in Target, Walmart, and independent record stores (via CCD's retail-partner network) + D2C bundles shipping out of the Manila-CS-backed store",
        "Experiential pop-up (Paul-led) in LA or NYC tied to the comeback, with SMS capture as the gating mechanism for photocard pulls and merch exclusives",
      ],
    },
    {
      phase: "YGP Services Productization",
      week: "Weeks 13–18",
      date: "October – November 2026",
      status: "upcoming" as const,
      tasks: [
        "Translate the KOL playbook into three productized YGP tiers — Catalog ($10K), Priority ($30K), Flagship ($50K) — with documented deliverable schedules, expected outcomes, and creative / data / physical checklists for each tier",
        "Run the first two YGP catalog pilot releases through the Tier 1 ($10K) package to prove the unit economics before the full services deal signs",
        "Deliver the YGP Billboard-entry playbook — a step-by-step blueprint mapping their advance money to physical-sales threshold, creator spend, paid media, and D2C capture, tuned to the 20K-unit chart entry threshold",
        "Merch and physical supply-chain MOUs signed with tour-fulfillment partner, Target/Walmart distribution partner, and EU-side production partner (Adidas-grade facility) — so YGP can activate without CCD re-sourcing per release",
      ],
    },
    {
      phase: "Activation + 2027 Planning",
      week: "Weeks 19–24",
      date: "November – December 2026",
      status: "upcoming" as const,
      tasks: [
        "Post-KOL-comeback data analysis — capture rates, physical sales, creator campaign attribution, D2C revenue per capture — packaged as the WONDER case-study deck for the YGP signing meeting",
        "Launch the holiday D2C campaign against the captured database — gift bundles, city-edition restocks, and fan-to-fan gifting — pulling the first direct-to-consumer revenue the SMS list is capable of driving",
        "Deliver WONDER a 2027 roadmap — full YGP services calendar, KOL follow-up campaign plan, proposed per-release cadence, and the data-asset handover documentation for what we've built",
        "Handoff — full platform admin, process docs, vendor contracts, SOPs, and a clear on-ramp for either renewal or expansion into a multi-roster retainer across WONDER's broader artist management book",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Every deliverable below is priced against a specific objective — no 'strategy documents' that sit in a Drive folder. Retainer work is month-over-month execution. Per-release work is tier-priced and discrete so WONDER can activate catalog acts á la carte once the model is proven.",

  deliverables: [
    {
      category: "Strategic Quarterback (Retainer)",
      icon: "●",
      items: [
        {
          name: "Vendor + Spend Audit",
          quantity: "Monthly",
          description:
            "Invoice-level review across every US marketing vendor touching WONDER's roster — the same audit model that caught a $100K misplaced Capitol spend and a $300K-vs-$150K billboard overspend on prior CCD engagements. One rep representing WONDER's interest in every label / agency / vendor meeting.",
        },
        {
          name: "Alignment + Orchestration",
          quantity: "Weekly",
          description:
            "Weekly standing with WONDER, S2, Cacao, Origin, and whoever else is on a release — CCD quarterbacks the plan so WONDER isn't in four meetings with four vendors chasing four overlapping narratives. Single accountable operator on the US side.",
        },
        {
          name: "YGP Services Productization",
          quantity: "Ongoing",
          description:
            "Tiered-package development, Billboard-entry playbook, and services-deck delivery for the YG Plus signing meeting. Builds the three-tier ($10K / $30K / $50K) catalog productization that becomes YGP's operating model for its 600+ partner labels.",
        },
      ],
    },
    {
      category: "Per-Release Investment Menu",
      icon: "◆",
      items: [
        {
          name: "Tier 1 — Catalog",
          quantity: "$10,000 / release",
          description:
            "The YGP bread-and-butter tier. Cultural tie-in creator campaign (5–10 paid creators), narrative comment ops deployment, SMS drop coordination, and pre-save-to-D2C funnel setup. Designed to make a catalog release punch above its weight without a full flagship spend.",
        },
        {
          name: "Tier 2 — Priority",
          quantity: "$30,000 / release",
          description:
            "The KOL rebrand-flagship tier. Full cultural tie-in campaign (20+ paid creators), comment-ops network deployment, experiential pop-up activation, data-gated merch drop, physical-retail coordination (Target / Walmart / indie), and pre-save-to-SMS-to-D2C full funnel.",
        },
        {
          name: "Tier 3 — Flagship / Global",
          quantity: "$50,000 / release",
          description:
            "The full McKinsey-grade release. Everything in Tier 2, plus paid media architecture across Meta / TikTok / YouTube / Spotify, multi-city experiential tour, full creator intelligence deployment (50+ creators), narrative PR / culture-press coordination, and a Billboard-entry-targeted release strategy.",
        },
      ],
    },
    {
      category: "Data, Fan Ops & D2C Infrastructure",
      icon: "▶",
      items: [
        {
          name: "Laylo / SMS Stack Build",
          quantity: "1 build",
          description:
            "Full Laylo deployment — fan database architecture, SMS/email capture flows, segmentation (by act, market, purchase history), welcome sequences, and Berriz-to-Laylo bridge strategy. Targets 100K+ US phone numbers across KOL and YGP catalog inside the engagement window.",
        },
        {
          name: "D2C Store + CS Ops",
          quantity: "1 build + ongoing",
          description:
            "Shopify D2C storefront with data capture hooks, 30+ Philippines-based CS team pre-onboarded through CCD's partner vendors, monthly capsule-drop calendar, and refund/shipping SOPs — solves the K-pop-CS-hate problem WONDER flagged from the prior BI and Alibaba experiments.",
        },
        {
          name: "Tour Capture Kits",
          quantity: "Per show",
          description:
            "QR codes, SMS keyword signage, merch-booth opt-in incentives, and venue-specific Laylo landing pages for every WONDER-roster tour date — so ticket buyers, merch customers, and VIP attendees all convert into owned data.",
        },
        {
          name: "Pre-Save + Data-Gated Drops",
          quantity: "Per release",
          description:
            "Pre-save-to-SMS funnels, attendee-only photocard drops, and SMS-gated merch exclusives that convert engagement into capture moments on every release cycle. Every drop is a capture event.",
        },
      ],
    },
    {
      category: "Creator Marketing & Comment Intelligence",
      icon: "■",
      items: [
        {
          name: "Cultural Tie-In Campaign",
          quantity: "Per release",
          description:
            "Strategy + execution for the Dominic Fike / Young Blood-style tie-in — find the cultural IP that matches the song's visual and tonal universe (Euphoria, Corpse Bride, Y2K, K-drama cross-overs), then recruit and deploy the edit community that's already making that content.",
        },
        {
          name: "Top-10% Creator Paid Deployment",
          quantity: "Monthly",
          description:
            "Paid deployment against the top 10% of K-pop edit community creators — not a clipping farm. Managed through CCD's partner-operated creator network (same tech layer that ran the Dominic Fike / Euphoria campaign). Creator fees billed separately at 15% management rate.",
        },
        {
          name: "Comment-Intelligence Network",
          quantity: "Monthly",
          description:
            "CCD's partner-operated editor and clipper network — onboarded into a tool where they get paid to comment the specific narrative we tell them to (the 'political psyops' layer, deployed through real accounts with real followings, not bots).",
        },
      ],
    },
    {
      category: "Merch, Physical & Experiential",
      icon: "◇",
      items: [
        {
          name: "Three-Pillar Supply Chain",
          quantity: "1 build",
          description:
            "Pillar 1: Tour merch with real-time fulfillment (CCD's Monsta-X / Logic / Whiz Khalifa / Backstreet Boys operator). Pillar 2: Album physicals via Target / Walmart / indie-record-store distribution (CCD's Lana Del Rey operator). Pillar 3: Branded D2C with Manila CS.",
        },
        {
          name: "EU Production Line",
          quantity: "1 partnership",
          description:
            "Partnership activation with CCD's Adidas-grade EU production facility — solves the $14-vs-$4 US-merch-cost bleed on European runs and plugs the Europe fulfillment gap.",
        },
        {
          name: "Experiential Pop-Ups (Paul)",
          quantity: "Per release",
          description:
            "Paul Aufdermaur's events team (Lana Del Rey, Backstreet Boys, Logic, Whiz Khalifa) delivers the KOL rebrand pop-up and the YGP pop-up-store infrastructure. Full portfolio in WONDER's hands in the first 10 days of engagement.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "What the $13K/mo retainer + per-release tiers cover — and what sits outside this engagement. CCD is built to quarterback and execute the US-side stack. Anything that belongs to Korea-side operations or to WONDER's existing contracted vendors stays where it is.",
    included: [
      "Strategic quarterback role across S2, Cacao, Origin, and all US-side vendors — weekly alignment and single-point-of-accountability for the Kiss of Life rebrand and the YGP build-out",
      "Monthly vendor + spend audits on US marketing invoices, including negotiated rate reviews and line-item recovery of misallocated spend",
      "Laylo / SMS / email fan-data infrastructure and the Berriz bridge — independent of Cacao and Weverse-adjacent CRMs",
      "D2C Shopify build and Philippines-based CS partnership activation for customer service, returns, and shipping ops",
      "Creator marketing + comment-intelligence program — strategy, creator sourcing, cultural tie-in concepting, and campaign QA",
      "Three-pillar merch / physicals / D2C supply-chain build — tour partner, Target/Walmart/indie-retail partner, EU production partner",
      "Experiential pop-up activation through CCD's events partner (Paul) — KOL comeback event + YGP pop-up-store sites",
      "YGP services productization — three-tier package architecture, Billboard-entry playbook, and signing-meeting deck",
    ],
    excluded: [
      "Media and creator fees — ad spend and creator payouts are billed separately to platforms / creators at a 15% management fee, not bundled into the retainer",
      "Graphic design, music-video production, and hero brand creative (available as add-on through CCD's in-house AI creative studio — scoped and quoted separately)",
      "Korea-side label operations, Korea-side physical production, and Cacao-exclusive distribution channels (stays with S2 / Cacao where it lives today)",
      "Day-to-day social-media content posting and community reply management (available as add-on if WONDER wants CCD to absorb that)",
      "Day-to-day Berriz content management — CCD builds the bridge, but Berriz posting remains with the existing S2 team",
      "Artist management, publishing administration, and sync licensing (WONDER's existing scope — untouched)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Strategic Quarterback",
        description:
          "Weekly alignment across S2, Cacao, Origin, and all retained US vendors. Monthly invoice-level spend audit. Single accountable operator representing WONDER's interest in every US label and agency conversation.",
        price: 4500,
        recurring: true,
      },
      {
        name: "Data, Fan Ops & D2C Infrastructure",
        description:
          "Laylo / SMS / email build and ongoing operation, Berriz bridge strategy, D2C Shopify store, and the Manila-based CS partnership. Targets 100K+ captured US fans across KOL + YGP catalog during the engagement.",
        price: 3500,
        recurring: true,
      },
      {
        name: "Creator Marketing & Comment Ops",
        description:
          "Cultural tie-in strategy, top-10% creator paid deployment network, and the comment-intelligence tool. Creator fees and paid media spend are billed separately at a 15% management rate — retainer covers program management only.",
        price: 2500,
        recurring: true,
      },
      {
        name: "Merch / Physical / D2C Oversight + YGP Productization",
        description:
          "Three-pillar supply-chain partner management (tour fulfillment, Target/Walmart/indie retail, EU production), experiential coordination with Paul's events team, and the YG Plus services productization — three-tier package architecture + Billboard-entry playbook.",
        price: 2500,
        recurring: true,
      },
    ],
    subtotal: 13000,
    setupFee: {
      label: "Onboarding + Infrastructure Build",
      amount: 12500,
    },
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Per-Release Investment (Stacks on Retainer)",
      amount: 10000,
      note:
        "Per-release fees are billed on top of the monthly retainer at the tier the release requires — $10K Catalog / $30K Priority / $50K Flagship. Ad spend and creator fees are billed separately to platforms/creators + 15% management. July 2026 KOL comeback is scoped at the $30K Priority tier.",
    },
    total: 90500,
    paymentSchedule: [
      {
        milestone: "Month 1 (July — includes setup + KOL Priority release)",
        percentage: 61.3,
        amount: 55500,
        due: "Upon approval",
      },
      {
        milestone: "Month 2 (August)",
        percentage: 14.4,
        amount: 13000,
        due: "August 1, 2026",
      },
      {
        milestone: "Month 3 (September)",
        percentage: 14.4,
        amount: 13000,
        due: "September 1, 2026",
      },
      {
        milestone: "Month 4 (October)",
        percentage: 14.4,
        amount: 13000,
        due: "October 1, 2026",
      },
      {
        milestone: "Month 5 (November)",
        percentage: 14.4,
        amount: 13000,
        due: "November 1, 2026",
      },
      {
        milestone: "Month 6 (December)",
        percentage: 14.4,
        amount: 13000,
        due: "December 1, 2026",
      },
    ],
    paymentTerms: "7 days from invoice",
    paymentLink: "#",
  },

  nextSteps: [
    {
      step: 1,
      title: "Approve + Lock In",
      description:
        "Sign off on the retainer structure and the first per-release tier for the KOL July comeback ($30K Priority). CCD sends the agreement and the Month 1 invoice covering retainer + setup + the KOL release.",
    },
    {
      step: 2,
      title: "10-Day Onboarding Sprint",
      description:
        "Paul's events portfolio to WONDER. Vendor audit on the existing KOL budget. Berriz + Cacao data-pull access. D2C store spec kickoff. All inside the first 10 days so the YGP pop-up locks don't slip to their current vendor.",
    },
    {
      step: 3,
      title: "Infrastructure Go-Live",
      description:
        "Laylo stack live, creator / comment-intelligence network onboarded, three-pillar supply-chain partners MOU'd, and the Philippines CS team staffed — all by end of Week 4 so KOL's July push lands on real infrastructure.",
    },
    {
      step: 4,
      title: "Kiss of Life Flagship Execution",
      description:
        "July comeback runs on the full Tier 2 playbook. Cultural tie-in campaign, physical-retail distribution, pop-up activation, and the data-capture funnel deployed end-to-end. This is the case-study asset WONDER walks into the YGP signing meeting with.",
    },
    {
      step: 5,
      title: "YGP Services Signing",
      description:
        "Deliver YGP the productized three-tier stack, the Billboard-entry playbook, and a live case study. WONDER walks out with the services deal signed ahead of the 2028 HYBE-catalog expiration window — which is when this window closes.",
    },
  ],

  cta: {
    headline: "Two mandates. One operator. Six months to lock them both.",
    body: "The KOL rebrand window and the YGP services window are the same window — and they close at the same time. CCD is already half-built for both of these jobs. Sign off on the retainer, slot KOL as the July flagship, and we close the YGP deal with a live case study instead of a pitch deck. Text or email when you're ready.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/wonder/hero1.png",
    heroBg: "/images/wonder/hero-bg.jpg",
    hero2: "/images/wonder/hero2.png",
    product: "/images/wonder/product.png",
    editorial: "/images/wonder/editorial.png",
    texture: "/images/wonder/texture.png",
    brutalist: "/images/wonder/brutalist.png",
    hero1Caption: "Strategic Quarterback + US Services Infrastructure",
    brutalistCaption: "WONDER × Crowd Control Digital",
    ogImage: "/images/wonder/og-image.png",
  },
};
