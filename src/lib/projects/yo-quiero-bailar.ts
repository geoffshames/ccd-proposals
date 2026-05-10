import type { ProjectData } from "../project-context";

export const yoQuieroBailar: ProjectData = {
  requireNda: true,
  clientLegalName: "Yo Quiero Bailar Fest",
  accentColor: "#E91E63",

  client: {
    name: "Yo Quiero Bailar",
    logo: "",
    contactName: "George Sosa",
    contactRole: "Founder / Operator",
    contactEmail: "george@yoquierobailarfest.com",
    industry: "Live Events / Touring / Latin Nightlife",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "YO QUIERO BAILAR // TOURING AMPLIFIER",
    tagline:
      "A 90-day pilot to rebuild the Meta engine, tighten the email/SMS lifecycle, support a ticketing platform decision, stand up a per-market influencer network, and open the sponsorship pipeline — built on top of an audit that already exposed where the leaks are. The goal is simple: turn a 1.15X return into a 2.5X engine that can scale without burning cash on every door.",
    type: "Touring Marketing Retainer + Paid Media Overhaul",
    startDate: "May 15, 2026",
    endDate: "August 15, 2026",
    duration: "3 Months (Pilot)",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Yo Quiero Bailar built a touring brand that is doing 6 to 8 reggaeton mega-events a month across the US — Mayan in LA, Karamba in SLC, Decca in Jacksonville, Uptown Theater in Kansas City, BarCode in Jersey, soon Houston, Tampa, San Antonio, OKC, Springdale — at a scale that almost no independent promoter is matching. The engine pulls Ivy Queen, Angel y Khriz, Dani Flow, El Cherry into rooms of 1,200 to 1,500 with the resident DJ network anchored by J-Star. The marketing under the hood is what hasn't caught up. Our 48-hour audit confirmed what George already suspected: a 1.15X overall ROAS, no dedicated remarketing, ad copy too long for the format, no per-event custom conversions, and an email/SMS layer captive to TicketSpice's stock flows. This pilot is engineered to fix the four highest-leverage problems first, build out the next two layers (per-market creators + sponsorship pipeline), and have the whole stack ready to scale through the back half of 2026.",
    objectives: [
      "Rebuild Meta from the ground up — per-event custom conversions, dedicated remarketing campaigns, surgically short copy variants, lookalike audiences seeded off real ticket-buyer data — moving the overall return from 1.15X toward the 2.5X industry benchmark",
      "Audit the existing TicketSpice email + SMS drip and win-back flows; rewrite or rebuild what's leaking; design the segmentation schema that survives whichever ticketing platform comes out of the migration",
      "Run point on the ticketing platform decision — Tixr, Eventim / See Tickets, Vivenu, TicketSauce — RFP, integration scoping, fee modeling, and migration project management against the Posh courtship pressure",
      "Stand up a per-market influencer network — Latin nightlife creators in every active YQB city (Reno, SLC, Lawrence, Danbury, Portland, West Palm, Jacksonville, OKC, Springdale, San Antonio, Jersey, Tampa, Fort Lauderdale, Orlando, Houston, Kansas City) — feeding paid ads with high-trust UGC and seeding pre-event hype",
      "Open the sponsorship lane — leveraging the Eric Schneider relationship that delivered Bahia Mundo and Story Jalisco, plus YQB's currently zero-sponsor inventory, into a real Latin-brand sponsorship pipeline",
    ],
    subtitle:
      "Post-audit. Real account access. Real data. The diagnostic is done — this is the rebuild plan and the 90-day pilot to prove it.",
    imageCaption: "Touring Marketing Retainer + Paid Media Overhaul",
    stats: [
      {
        value: 17,
        suffix: "+",
        label: "Active Markets",
        description:
          "Every YQB city — LA, SLC, Lawrence, Danbury, Portland, Reno, West Palm, Jacksonville, OKC, Springdale, San Antonio, Jersey, Tampa, Fort Lauderdale, Orlando, Houston, Kansas City — gets dedicated paid media architecture, custom conversions, and a per-market creator pod",
      },
      { value: 90, label: "Day Pilot" },
      { value: 5, label: "Workstreams" },
      { value: 24, suffix: "+", label: "Events In-Window" },
    ],
  },

  discovery: {
    heading: "What The Audit Found",
    summary:
      "George and J-Star pulled us into the Meta accounts and TicketSpice for a 48-hour audit before this writeup. The findings below aren't speculation — they're pulled directly from the live ad accounts, the existing automation flows, and a structural read on where YQB sits in the Latin touring landscape. The good news: every single one of these is a fixable infrastructure problem, not a brand or product problem. The brand is winning. The infrastructure is just leaking margin out the back.",
    insights: [
      {
        label: "1.15X Return — Not A Creative Problem",
        finding:
          "Overall Meta return since inception sits at 1.15X — well below the 2.5X to 3X industry benchmark for Latin event ticketing on Meta. This isn't a creative problem; it's a structural one. There are no dedicated remarketing campaigns capturing the audience that engaged but didn't buy. Cold prospecting carries the entire load. The single highest-leverage fix on day one is splitting the funnel — cold prospecting, warm retargeting from page engagers and add-to-cart drop-offs, and a hot audience layer pulling from past ticket buyers. Industry data has retargeting consistently delivering 3 to 5X the prospecting return; standing this up alone should move the blended number meaningfully.",
        source: "Meta Ads Manager audit — full account history",
      },
      {
        label: "No Custom Conversions Per Event",
        finding:
          "The pixel is firing standard purchase events across every show on TicketSpice, with no per-event custom conversions defined. That means the algorithm is optimizing across the wrong unit — it can't distinguish a Reno ticket sale from a Kansas City Ivy Queen ticket sale, and it can't optimize a campaign for the specific conversion that matters to that specific show. Custom conversions per event with proper deduplication is table stakes for multi-event paid media, and it's the second-largest lever after remarketing. We expect this fix alone to drive meaningful CPM and CPA efficiency once the algorithm has clean per-event signal.",
        source: "Meta Events Manager + TicketSpice pixel configuration",
      },
      {
        label: "Ad Copy Is 4× Too Long For The Format",
        finding:
          "Active ad copy across the account runs 80 to 150+ words. Meta's own creative best practices and our internal benchmarks across Latin touring accounts cap effective primary text at 30 to 60 words for in-feed and Reels formats — anything longer gets truncated, suppresses thumb-stop rate, and underperforms on cost per add-to-cart. The fix is a copy compression pass and a structured testing framework — short hook, urgency line, ticket CTA — with at least 3 to 4 variants per event tested simultaneously instead of one over-written block.",
        source: "Active campaign creative review — May 2026",
      },
      {
        label: "Email + SMS Is Captive To TicketSpice",
        finding:
          "The current drip, post-purchase, and win-back flows live inside TicketSpice — fine for low-friction transactional touchpoints, limited as a real lifecycle marketing layer. There is segmentation by event but no segmentation by market or buyer behavior across events, and SMS sits underleveraged given that the audience is overwhelmingly mobile-first. Whichever direction the ticketing migration goes, the email/SMS infrastructure needs to graduate to a dedicated platform (Klaviyo or Attentive on the brand side) so the buyer database compounds across every show, every market, every year — independently of which ticketing rail any given event runs on.",
        source: "TicketSpice flow audit + post-purchase journey trace",
      },
      {
        label: "Ad Spend At ~28% Of Gross — Should Be 10–15%",
        finding:
          "Current spend runs $8K to $12K per event against a 1,200 to 1,500 cap room at $25–$33 average ticket — putting ad spend at roughly 25 to 35 percent of gross. The Latin touring industry benchmark is 10 to 15 percent. Closing that gap is the compounding outcome of every other fix in this proposal: better remarketing recovers buyers cold prospecting can't reach, custom conversions cut wasted impressions, shorter copy improves CTR and lowers CPM, and lifecycle email/SMS pulls repeat buyers off the paid bill entirely. Our pilot target is moving spend efficiency from 28 percent toward 15 percent of gross by end of pilot.",
        source: "Cross-reference: George's call notes + Meta spend data + venue cap math",
      },
    ],
    marketContext:
      "The Latin touring market is in a structural moment — reggaeton, dembow, and Latin trap are running parallel chart waves with Bad Bunny, Karol G, Peso Pluma, and the Sech / El Alfa / El Cherry layer beneath them, while Cumbiatón, BESÁ, TBT, and a handful of regional perreo brands are scaling club-tour formats nationally. YQB has positioned itself in the same lane but with sharper booking discipline — Ivy Queen, Angel y Khriz, Dani Flow, El Cherry are real legacy and current draws — and a tour cadence (6 to 8 events a month, every Friday and Saturday) that none of those competitors are running at. The infrastructure leaks below are the only thing keeping the ROI from compounding. Posh's aggressive ticketing acquisition push and the Eventim US expansion are simultaneously creating the right window to make a clean ticketing migration with leverage. The pilot is timed to finish ahead of Q4 — historically the strongest reggaeton ticketing window — so YQB enters the holiday season with a rebuilt engine.",
  },

  audience: {
    heading: "Who's In The Room",
    summary:
      "The YQB audience is sharply defined and currently overserved on cold acquisition, underserved on lifecycle. Our brief and the Reddit / IG / TikTok scan agreed on the same picture: 18–32 Latin and Latin-diaspora, mobile-first, group-driven, FOMO-driven. The brand's own copy already speaks the language: 'lock your fit in', 'tickets will move FAST', 'no VIP sections, no egos, just pure energy'. The marketing layer needs to match that voice across every paid impression and every Laylo / SMS drop.",
    demographics:
      "18–32 Latin and Latin-diaspora core, with a heavy 21–28 club-going peak. Strongest in Florida, Texas, Northeast Latin corridors (NJ / MA / CT), and Southwest (CA / NV / UT). Mobile-first to an extreme — Instagram and TikTok are the discovery surfaces, not Facebook.",
    demographicCards: [
      {
        label: "Age Range",
        value: "18–32 core",
        detail: "21–28 peak ticket-buying window — older skew on Ivy Queen / legacy headliner shows",
      },
      {
        label: "Identity",
        value: "Latin / Diaspora",
        detail: "Mexican, Dominican, Puerto Rican, Colombian, Cuban — bilingual default, Spanglish-native",
      },
      {
        label: "Geography",
        value: "Multi-corridor",
        detail: "FL, TX, Northeast Latin corridor, SW US — the cities YQB is already touring",
      },
      {
        label: "Behavior",
        value: "Group-driven",
        detail: "Buys in crews of 2–6, decision driven by 'who else is going', high FOMO sensitivity",
      },
    ],
    personas: [
      {
        name: "The Crew Captain",
        ageRange: "23–28",
        description:
          "Plans the night for her or his friend group. Sees a YQB announcement in the FYP, screenshots it, drops it in the group chat, and pushes a 4–6 ticket bulk buy. The single highest-leverage persona in the funnel — every YQB ticket sold to this person likely brings 3–5 more, and our remarketing build is engineered specifically to surface the announcement to this segment first.",
        traits: ["Group Buyer", "Group Chat Anchor", "Repeat Attender", "Mobile-First"],
      },
      {
        name: "The Latin Nightlife Regular",
        ageRange: "21–32",
        description:
          "Already going out every Friday or Saturday in their market. Knows which clubs run which sounds. YQB is on their radar already because the venue partners (The Mayan, Karamba, Diamond Club, Trio, Decca, BarCode, Uptown) are venues they go to anyway. The job here is to surface the YQB-specific show against the regular weekly noise. Lifecycle email/SMS plus per-market creator content is the right toolkit — paid media alone gets crowded out.",
        traits: ["Venue Native", "Genre Loyal", "High Frequency", "Social Proof Sensitive"],
      },
      {
        name: "The Legacy Headliner Fan",
        ageRange: "26–40",
        description:
          "Bought their ticket the moment Ivy Queen, Angel y Khriz, or El Cherry got announced. Older skew, more mature spend, more likely to buy bottle service or upgraded ticketing tiers. This is the persona to layer sponsorship activations onto — Latin spirits, beauty, mobile carriers, and apparel brands all want this exact buyer. The lifecycle play here is reactivation: turn a one-show buyer into a repeat YQB buyer across multiple cities and tours.",
        traits: ["Headliner-Driven", "Premium Spend", "Reactivation Target", "Sponsor-Friendly"],
      },
    ],
    psychographics: [
      "Treats reggaeton and perreo as cultural identity, not just genre — the audience reads the difference between a YQB-style operator and a corporate Latin night instantly, and rewards the former",
      "FOMO is the dominant purchase driver — 'sold out' is the most powerful word in the YQB copy library, and our paid media should weaponize it through scarcity messaging on the warm retargeting layer",
      "Group-first decision-making — the 'who else is going' signal converts harder than any creative we can write, which is why per-market creator UGC is the single most important seed in the paid media stack",
      "Bilingual fluency in marketing copy is non-negotiable — Spanish-only excludes diaspora, English-only excludes recent immigrants and reads as inauthentic. Spanglish-native copy is the unlock",
    ],
    painPoints: [
      "Tickets routinely sell out before casual fans see the announcement — there's a real waitlist / pre-sale opportunity sitting on the table",
      "Ticketing checkout friction on TicketSpice (multiple form fields, abandoned-cart drop-off) is leaking buyers we already paid to acquire on Meta",
      "Inconsistent door experience across cities — some venues run tighter than others, and the audience reads that variance and posts about it",
      "Reggaeton-night oversaturation in some cities (LA, Miami, Houston) — YQB has to be visibly differentiated from the regular Friday club night, not just a flyer drop",
    ],
    purchaseTriggers: [
      "Headliner announcement moment — Ivy Queen, Angel y Khriz, Dani Flow, El Cherry drops convert at 5–8X the baseline rate",
      "Friend in the group chat says 'I'm going' — every paid creative we run should be designed for screenshot-and-share back to a group thread",
      "Last-call urgency — '<48 hours' / 'final tickets' creative on the warm retargeting layer is the highest-converting placement on Latin events",
      "Local venue trust — 'this is at The Mayan / Karamba / Decca' lands harder than abstract event branding alone",
    ],
    platforms: [
      {
        name: "Instagram",
        description:
          "@yoquierobailarfest is the flagship — every event drop, every recap, every headliner announcement lives here. Strongest organic engagement on event-poster carousels and recap reels. The paid layer is currently working hard but inefficiently; with proper retargeting and custom conversions, the existing creative library can do 2–3X the work it's doing now.",
      },
      {
        name: "TikTok",
        description:
          "@yoquierobailarfest is testing TikTok actively but the per-market creator layer isn't built. This is the single biggest unlock in the discovery funnel — YQB has the recap footage, the venue partnerships, the headliner stacking — and dropping that into the right Latin nightlife creators in each city would change the cold-acquisition cost meaningfully.",
      },
      {
        name: "Email + SMS (currently TicketSpice)",
        description:
          "Drip and win-back flows exist but live inside TicketSpice's stock infrastructure — limited segmentation, no proper lifecycle, no SMS depth. The migration to a dedicated platform (Klaviyo or Attentive brand-side) is a strategic call on the call, not just a tooling decision — it's the difference between renting buyer data per-show and owning a multi-tour database.",
      },
      {
        name: "Per-Market Latin Nightlife Creators",
        description:
          "Every active YQB city has 5 to 15 creators with 50K–500K followers covering Latin nightlife, perreo culture, and reggaeton. None of them are currently activated for YQB. Standing up a per-market creator pod — local talent in every tour city posting hype content the week of the show — is the single fastest path to lower cost-per-buyer in soft markets.",
      },
    ],
    quotes: [
      {
        text: "Yo Quiero Bailar Fest is more than a party — it's an experience. No VIP sections, no egos — just pure energy, unity, and good vibes from start to finish.",
        source: "yoquierobailarfest.com — brand manifesto",
      },
      {
        text: "The #1 Reggaeton Mega Festival in the World — Old School vs. New School Reggaeton with a splash of Dembow, Latin EDM, and Latin Trap for the perfect formula.",
        source: "yoquierobailarfest.com — recurring event positioning",
      },
      {
        text: "Tickets will move FAST. Don't be the one texting 'who's going?' when it's already SOLD OUT. Lock your crew in. Plan your fit. Get ready for a night that turns into a MOVIE.",
        source: "@yoquierobailarfest event copy — voice the paid creative should match",
      },
    ],
  },

  targets: [
    {
      metric: "Blended ROAS",
      value: "Target 2.5X",
      context:
        "Industry benchmark for Latin touring on Meta. Current account is 1.15X. We're not committing to a number — variance per market and per headliner is real — but the directional target across the 90-day pilot is closing the gap to 2.5X+ blended through the remarketing build, custom conversions, copy compression, and creative volume increase.",
    },
    {
      metric: "Ad Spend % Of Gross",
      value: "From ~28% → 15%",
      context:
        "Current run rate is ~28 to 35 percent of gross going to ad spend. Industry healthy is 10 to 15 percent. Closing that gap is the compounding effect of every fix in the pilot — better targeting, lifecycle reactivation, and per-market creator content lowering CPMs in soft markets.",
    },
    {
      metric: "Per-Market Creator Pods",
      value: "17+ markets",
      context:
        "Stand up a 3 to 5-creator pod in every active YQB city across the pilot — Latin nightlife and perreo creators producing UGC in the week before each show, fed into both organic feed and as paid creative. The objective is to make the cost-per-buyer in 'soft' markets converge with 'strong' markets.",
    },
    {
      metric: "Sponsorship Pipeline",
      value: "3+ active conversations",
      context:
        "Open the sponsorship lane that currently has zero presence on the YQB site or in any event activation. Leveraging the Eric Schneider relationship (Bahia Mundo, Story Jalisco) plus inbound, the goal across the pilot is 3+ active conversations with Latin spirits, beauty, mobile carrier, or apparel brands fitting the YQB audience.",
    },
  ],

  competitive: {
    summary:
      "YQB sits in a competitive lane that has gotten more crowded in 18 months — Cumbiatón, BESÁ, TBT, DESVELADO, and a wave of regional perreo brands are scaling club-tour formats. None of them are matching the YQB cadence (6 to 8 events a month, every weekend, in 17+ cities) or the legacy-headliner stacking (Ivy Queen, Angel y Khriz, El Cherry, Dani Flow). The opportunity inside this 90-day pilot is to leapfrog the entire competitive set on marketing infrastructure — paid media discipline, lifecycle, per-market creator depth, and sponsorship pipeline — while everyone else is still figuring out their flyer template.",
    competitors: [
      {
        name: "Cumbiatón — LA / National Tour",
        strength:
          "Strongest brand identity in the perreo touring lane — the 'Cumbiatón' word itself has become the genre tag. Heavy IG-native presence, sold-out residencies, deep Mexican-American cultural anchoring. Massive earned-media tailwind from being the most editorially-covered project in the space.",
        gap: "Lower event cadence (~2 to 4 events/month nationally vs. YQB's 6 to 8). Headliner programming is comparatively conservative — mostly DJ-led, fewer marquee live-talent bookings. YQB already has the operational tour-cadence advantage; the marketing infrastructure rebuild is what closes the brand-recognition gap.",
      },
      {
        name: "BESÁ — LA-Based Perreo Brand",
        strength:
          "Tight visual identity, strong club residency footprint in LA, premium positioning. Loyal repeat-attender base in the LA market specifically.",
        gap: "Single-market depth, not multi-market scale. YQB is already running the multi-market network BESÁ would need 18+ months to build. The pilot just needs to make sure YQB's national-scale advantage is visible in the marketing — currently it isn't, because the per-market creative is undifferentiated city-to-city.",
      },
      {
        name: "TBT — Throwback Thursday",
        strength:
          "National scale in the throwback / 2000s Latin-pop lane. Dialed-in paid media — disciplined, well-segmented, retargeting-led — exactly the architecture YQB needs to match.",
        gap: "Different sound (more 2000s pop / club anthem skew, less core reggaeton / dembow). Doesn't compete directly on the YQB headliner ladder. But TBT's marketing discipline is the operational benchmark — bringing YQB's paid media stack to TBT-level rigor is the closest analog.",
      },
      {
        name: "Sueños Festival / Calibash — Single-Tentpole Latin Operators",
        strength:
          "Single-weekend / single-night operators that own the marquee Latin festival moment in their respective cities (Chicago and LA). Heavy corporate marketing budgets, deep platform partnerships.",
        gap: "Once-a-year ceiling. Cannot match YQB's year-round, 17-city cadence. The structural play here is to use Sueños / Calibash announcements as YQB tailwind — when the genre is in the news, YQB's weekly tour benefits, and the lifecycle / creator layer is the surface that captures that overflow audience.",
      },
    ],
  },

  timelineSubheading:
    "A 90-day pilot from full audit handoff through to a rebuilt Meta engine, a migrated ticketing platform, an activated lifecycle layer, and an open sponsorship pipeline — every phase designed to leave the YQB infrastructure permanently better than we found it.",
  timelineImageCaption: "3 Months / 4 Phases / 90-Day Rebuild",

  timeline: [
    {
      phase: "Audit Handoff + Foundation",
      week: "Weeks 1–3",
      date: "May 15 – June 5, 2026",
      status: "upcoming" as const,
      tasks: [
        "Full audit handoff — written diagnostic of every leak found in the Meta accounts, the TicketSpice flows, the pixel configuration, and the per-event tracking — delivered Day 1 alongside the 90-day execution plan",
        "Stand up custom conversions per event in Meta Events Manager — TicketSpice pixel reconfigured, deduplication rules, per-event optimization events live across the active onsale calendar",
        "Build dedicated remarketing campaigns — page engagers, video viewers, IG/FB profile interactors, add-to-cart drop-offs, past ticket buyers — segmented audience layers each running their own creative pool",
        "Ticketing migration RFP — formal scoping conversation with Tixr, Eventim / See Tickets, Vivenu, and TicketSauce. Fee modeling, integration depth, email/SMS portability, and a recommendation memo to George + J-Star by end of Week 3",
      ],
    },
    {
      phase: "Meta Rebuild + Ticketing Decision",
      week: "Weeks 4–7",
      date: "June 6 – July 3, 2026",
      status: "upcoming" as const,
      tasks: [
        "Copy compression sprint — every active campaign rewritten to 30–60 word primary text variants, structured testing framework deployed (3–4 hooks per event, urgency line, ticket CTA), creative refresh cadence locked at every 5 days per market",
        "Lookalike audience build — seeded off the past-ticket-buyer database, layered against Latin-event audience signals on Meta, scaled per active tour city for cold prospecting",
        "Ticketing platform decision finalized — chosen partner (Tixr / Eventim / Vivenu / TicketSauce or 'stay-and-optimize on TicketSpice') signed off by George + J-Star. Migration project plan locked",
        "Email + SMS lifecycle audit — every existing TicketSpice flow mapped, gaps identified, replacement schema designed in the new platform (Klaviyo or Attentive on the brand side). Initial post-purchase, win-back, pre-show hype, and headliner-drop flows queued for build",
      ],
    },
    {
      phase: "Lifecycle Build + Per-Market Creators",
      week: "Weeks 8–10",
      date: "July 4 – July 24, 2026",
      status: "upcoming" as const,
      tasks: [
        "Lifecycle layer live — segmented post-purchase, pre-show hype (5 days out), day-of, and win-back flows running on the new platform across the active tour calendar. SMS prioritized for high-intent windows, email for headliner-drop announcements",
        "Per-market creator network deployment — 3 to 5 Latin nightlife / perreo creators activated in every active YQB city, weekly content tied to upcoming shows, output fed into both organic and paid creative pools",
        "Mid-pilot Meta performance review — blended ROAS measured against the 2.5X target, ad-spend-as-percent-of-gross measured against the 15% target, soft markets surfaced and budget reallocated against the data",
        "Sponsorship pipeline kickoff — 5 to 10 introductory conversations opened across Latin spirits, beauty, mobile carrier, and apparel categories. Eric Schneider intro coordination on the highest-fit prospects",
      ],
    },
    {
      phase: "Pilot Wrap + Year-Two Plan",
      week: "Weeks 11–13",
      date: "July 25 – August 15, 2026",
      status: "upcoming" as const,
      tasks: [
        "Final 90-day performance audit — full Meta breakdown by market, headliner, creative variant, and audience layer. Ad spend efficiency vs. baseline, lifecycle revenue contribution, creator-driven buyer attribution, sponsorship pipeline status",
        "Ticketing migration on track to launch (or relaunch on TicketSpice with optimized flows) heading into Q4 — fee delta, integration coverage, and email/SMS portability all measured against the May baseline",
        "Year-two scope — recommended retainer structure for the back half of 2026 and the full 2027 tour cycle, including ad-spend efficiency targets, sponsorship category lock-ins, and creator network expansion",
        "Knowledge handoff doc — every dashboard, audience layer, lifecycle flow, custom conversion, and creator contact captured in a single internal playbook YQB owns regardless of any future agency relationship",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Everything CCD ships across the 90-day pilot — the diagnostic, the rebuild, the lifecycle layer, the per-market creator network, and the sponsorship pipeline. Designed so YQB owns every audience, every dashboard, and every relationship at the end of the pilot.",

  deliverables: [
    {
      category: "Meta Advertising Overhaul",
      icon: "▶",
      items: [
        {
          name: "Meta Account Rebuild",
          quantity: "Full account",
          description:
            "Custom conversions per event, dedicated remarketing campaigns (page engagers, video viewers, profile interactors, add-to-cart drop-offs, past ticket buyers), lookalike audience builds seeded off the buyer database, copy compression to 30–60 word variants, structured 3–4 hook testing framework per event. Ad spend billed separately at 15% management fee.",
        },
        {
          name: "Per-Event Campaign Architecture",
          quantity: "24+ events",
          description:
            "Every event in the 90-day window gets its own campaign structure — cold prospecting, warm retargeting, hot retargeting layers — with creative tested against custom-conversion-optimized objectives. Retired the 'one big campaign' approach for surgical per-event budget control.",
        },
        {
          name: "Weekly Performance Reports",
          quantity: "13 reports",
          description:
            "Per-market sell-through reports, ROAS and CPA tracking against pilot targets, soft-market alerts in week 1 of onsale, dynamic media-budget recommendations every Friday across the active tour calendar.",
        },
      ],
    },
    {
      category: "Email + SMS Lifecycle",
      icon: "◆",
      items: [
        {
          name: "TicketSpice Flow Audit",
          quantity: "Full audit",
          description:
            "Every existing drip, post-purchase, and win-back flow mapped, gaps surfaced, replacement architecture designed. Survival schema for the buyer database regardless of which ticketing platform comes out of the migration.",
        },
        {
          name: "Lifecycle Platform Migration",
          quantity: "Klaviyo or Attentive",
          description:
            "Brand-side email and SMS infrastructure stood up on a dedicated platform (recommended: Klaviyo for email, Attentive for SMS, or a unified Klaviyo + Klaviyo SMS stack). Database migrated, segmentation schema rebuilt by market and behavior, multi-tour buyer data architecture in place.",
        },
        {
          name: "Lifecycle Flow Build",
          quantity: "8–12 flows",
          description:
            "Pre-show hype (5 days out), day-of push, post-show reactivation, win-back at 30/60/90 days, headliner-drop announcement, multi-event repeat-buyer reward, abandoned-cart recovery. Segmented by market, persona, and buyer history.",
        },
      ],
    },
    {
      category: "Ticketing Platform Decision",
      icon: "●",
      items: [
        {
          name: "Vendor RFP + Recommendation Memo",
          quantity: "1 process",
          description:
            "Formal scoping with Tixr, Eventim / See Tickets, Vivenu, and TicketSauce — fees, integrations, email/SMS portability, marketing API depth, contractual flexibility. Comparison memo with CCD recommendation, delivered by end of Week 3.",
        },
        {
          name: "Migration Project Management",
          quantity: "Full migration",
          description:
            "Vendor contract negotiation support, integration scoping with Meta pixel + new lifecycle platform, buyer database export and import plan, change-management for J-Star and the operations team, parallel-run on a single test event before full cutover.",
        },
      ],
    },
    {
      category: "Per-Market Creator Network",
      icon: "◐",
      items: [
        {
          name: "Latin Nightlife Creator Sourcing",
          quantity: "17+ markets",
          description:
            "3 to 5 vetted creators per active YQB city — Latin nightlife, perreo culture, reggaeton creators with 50K–500K followers in the local market. Creator fees billed separately at 15% management rate.",
        },
        {
          name: "Pre-Event Content Drops",
          quantity: "Per-event",
          description:
            "Weekly creator content cycles tied to the upcoming show in each market — IG Reels and TikTok posts featuring lineup, venue, headliner highlights — output fed directly into the paid creative pool for that market.",
        },
        {
          name: "Recap Capture + Repurpose",
          quantity: "All markets",
          description:
            "Post-event creator recap content captured at the venue, edited inside 48 hours, repurposed across organic and paid for the next event in that market. Building a compounding library of city-specific YQB social proof.",
        },
      ],
    },
    {
      category: "Sponsorship Pipeline",
      icon: "■",
      items: [
        {
          name: "Sponsorship Strategy + Deck",
          quantity: "1 deck",
          description:
            "Audience composition, market footprint, headliner stack, and impressions — packaged into a sponsorship sales deck targeting Latin spirits, beauty, mobile carrier, and apparel categories. Tier structure (presenting / category / activation) and pricing benchmarked against comparable Latin tours.",
        },
        {
          name: "Active Pipeline Build",
          quantity: "10+ conversations",
          description:
            "Eric Schneider relationship coordination (the contact who delivered Bahia Mundo and Story Jalisco), CCD outbound to fit-prospect brands, intro calls scheduled, term sheets shaped. Goal: 3+ active conversations by end of pilot, with at least 1 signed for the back half of 2026.",
        },
      ],
    },
  ],

  scope: {
    subheading:
      "Everything included in the 90-day pilot — and where the boundaries are. This is a focused scope built on top of the audit findings, with clear paths to expand into a full retainer once the pilot proves the model.",
    included: [
      "Full Meta account rebuild (custom conversions, remarketing campaigns, lookalikes, copy compression, structured creative testing, weekly performance reporting)",
      "TicketSpice email + SMS audit and migration to a brand-side lifecycle platform (Klaviyo / Attentive), with 8–12 segmented flows live by end of pilot",
      "Ticketing platform RFP, vendor selection, and migration project management — Tixr, Eventim, Vivenu, TicketSauce, or optimized stay on TicketSpice",
      "Per-market creator network deployment — 3 to 5 Latin nightlife creators in every active YQB city, with weekly content cycles tied to upcoming shows",
      "Sponsorship pipeline build — strategy deck, active pipeline development, Eric Schneider intro coordination, 10+ conversations opened",
      "Weekly strategy calls with George + J-Star, monthly performance review against pilot targets",
      "Knowledge handoff doc at pilot wrap — every dashboard, audience, flow, conversion, and contact captured in a YQB-owned playbook",
      "Year-two recommended scope and retainer structure for the back half of 2026 and the full 2027 tour cycle",
    ],
    excluded: [
      "Ad spend itself — billed directly to Meta, managed by CCD at 15% management fee included on the spend (not on the retainer)",
      "Creator fees — billed direct to creators, managed by CCD at 15% management fee on creator placements",
      "Talent booking, venue contracts, and event production — owned in full by the YQB operations team and J-Star's resident DJ network; CCD operates exclusively on the marketing layer",
      "Graphic design, motion graphics, and music video production for marketing creative (available as add-on — scoped and quoted separately)",
      "Public relations and earned-media outreach (available as add-on)",
      "Website rebuild or replatform off Wix (available as add-on — scoped and quoted separately)",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      {
        name: "Meta Advertising Management",
        description:
          "Full account rebuild, per-event campaign architecture, custom conversions, remarketing campaigns, lookalike builds, copy compression, structured creative testing, weekly performance reporting. Ad spend billed separately at 15% management fee.",
        price: 2000,
        recurring: true,
      },
      {
        name: "Email + SMS Lifecycle + Ticketing Migration",
        description:
          "TicketSpice audit, lifecycle platform migration (Klaviyo or Attentive), 8–12 segmented flow build, ticketing platform RFP and migration project management (Tixr / Eventim / Vivenu / TicketSauce).",
        price: 1500,
        recurring: true,
      },
      {
        name: "Per-Market Creators + Sponsorship Pipeline",
        description:
          "17+ market creator pod sourcing and management, weekly pre-event content cycles, recap capture, sponsorship strategy deck, and active pipeline development. Creator placement fees billed separately at 15% management fee.",
        price: 1500,
        recurring: true,
      },
    ],
    subtotal: 5000,
    discount: {
      label: "",
      percentage: 0,
      amount: 0,
    },
    mediaBudget: {
      label: "Recommended Media + Creator Budget",
      amount: 35000,
      note: "Recommended ad spend across Meta plus per-market creator placements — billed directly to Meta and creators, managed by CCD at the 15% management fee. Right-sized down from the current ~$8K–$12K-per-event run rate as efficiency improves through the pilot. Final budget calibrated weekly against pacing.",
    },
    total: 15000,
    paymentSchedule: [
      {
        milestone: "Month 1",
        percentage: 33.33,
        amount: 5000,
        due: "Upon approval — kickoff May 15, 2026",
      },
      {
        milestone: "Month 2",
        percentage: 33.33,
        amount: 5000,
        due: "June 15, 2026",
      },
      {
        milestone: "Month 3",
        percentage: 33.34,
        amount: 5000,
        due: "July 15, 2026",
      },
    ],
    paymentTerms: "Net 7 from invoice. Ad spend and creator fees invoiced separately at 15% management rate.",
    paymentLink: "https://buy.stripe.com/9B65kC1Hmgzf5aNdjXa7C0f",
  },

  nextSteps: [
    {
      step: 1,
      title: "Mutual NDA Executed",
      description:
        "Already executed by virtue of the gate on this page — countersigned PDF returned to George and J-Star within 24 hours. Standard CCD mutual NDA, governed by California law, covering the audit findings, ad account data, and any pricing in this proposal.",
    },
    {
      step: 2,
      title: "Approve & Pay Month 1",
      description:
        "Approve the pilot via the Stripe link below. Month 1 retainer of $5,000 invoices on approval; we kick off May 15, 2026 with the audit handoff doc and the Day 1 custom conversions push. Full Meta rebuild begins inside Week 1.",
    },
    {
      step: 3,
      title: "Onboarding Sprint (Days 1–3)",
      description:
        "Onboarding intake covers: full Meta business manager access (already granted for audit), TicketSpice admin, the buyer database export, current creator and influencer contacts, the Eric Schneider intro for sponsorship, and YQB's preferred Slack channel for daily ops with CCD.",
    },
    {
      step: 4,
      title: "Weekly Cadence Locked",
      description:
        "Weekly Friday strategy call with George + J-Star, per-event pacing reports every Monday, monthly full performance review with revenue impact and pilot-target tracking. No surprises, no quiet weeks.",
    },
    {
      step: 5,
      title: "90-Day Pilot Wrap → Year-Two Scope",
      description:
        "August 15, 2026 — full pilot performance audit, ROI measurement against the 2.5X / 15%-of-gross targets, year-two recommended scope for the back half of 2026 and the 2027 tour cycle, including ad-spend efficiency targets, sponsorship lock-ins, and creator network expansion.",
    },
  ],

  cta: {
    headline: "The brand is already winning. The infrastructure just needs to catch up.",
    body:
      "Yo Quiero Bailar built the hardest part — the cadence, the headliners, the venues, the brand voice — in 18 months. The Meta engine, the lifecycle layer, the ticketing rail, the per-market creator network, and the sponsorship pipeline are infrastructure problems, and infrastructure problems are the kind we run at every day. The audit is done. The plan is on this page. The next step is approving Month 1 below. Reply to Geoff with any questions before you click — happy to walk through any section live with George and J-Star.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/yo-quiero-bailar/hero1.jpg",
    heroBg: "/images/yo-quiero-bailar/hero-bg.jpg",
    hero2: "/images/yo-quiero-bailar/hero2.jpg",
    product: "/images/yo-quiero-bailar/product.jpg",
    editorial: "/images/yo-quiero-bailar/editorial.jpg",
    texture: "/images/yo-quiero-bailar/texture.jpg",
    brutalist: "/images/yo-quiero-bailar/brutalist.jpg",
    hero1Caption: "Touring Marketing Retainer + Paid Media Overhaul",
    brutalistCaption: "Yo Quiero Bailar × Crowd Control Digital",
    ogImage: "/images/yo-quiero-bailar/og-image.png",
  },

  caseStudies: [
    { client: "BBNO$", metric: "100M+", description: "TIKTOK CREATES" },
    { client: "PESO PLUMA", metric: "5B+", description: "SPOTIFY STREAMS" },
    { client: "KSI", metric: "1M+", description: "TICKETS SOLD" },
    { client: "ILLENIUM", metric: "750K+", description: "EVENT TICKETS" },
  ],
};
