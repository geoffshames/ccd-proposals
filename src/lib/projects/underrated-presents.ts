import type { ProjectData } from "../project-context";

export const underratedPresents: ProjectData = {
  accentColor: "#8A4FFF",

  client: {
    name: "Underrated Presents",
    logo: "",
    contactName: "Underrated Presents",
    contactRole: "Founder / Talent & Brand",
    contactEmail: "hello@underratedpresents.com",
    industry: "Live Events / Electronic Music Promotion",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "SIX BRANDS, ONE ENGINE",
    tagline:
      "FLOAT is live. The Maze is locked for Halloween. Clinic Wednesdays, Minimal Effort, Resolutions NYE and Origin are all in motion. One always-on media-and-data engine across the portfolio, built project-by-project — starting with the two on the clock and scaling whenever it makes sense. The most under-marketed name in LA's underground, finally amplified like the headliner it already is.",
    type: "Portfolio Event Marketing + Paid Media",
    startDate: "July 1, 2026",
    endDate: "June 30, 2027",
    duration: "Flexible · Per-Project or Monthly",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Strategy",
    summary:
      "Underrated has spent 14 years building the taste — the LA debuts (Lane 8, Claptone, Rampa), the 12-year Clinic Wednesdays institution, the Minimal Effort name that pulls Louie Vega and Guy Gerber to town. What it has never had is a media-and-data engine that matches the cultural weight. Crowd Control Digital builds that engine. We unify the ticket-buyer data that's currently scattered across DICE, go-out, RA and the email list into one segmented, retargetable audience layer. We run portfolio paid media that moves budget to whichever event needs the floor filled — not where a flat monthly says to spend. And we run disciplined paid efficiency against every on-sale, trafficking your creative through templated campaign structures so a launch goes live same-day. Because you run separate P&Ls per event, this is built project-by-project: the two on the clock — FLOAT (live now through mid-September) and The Maze (4,000-cap, Halloween) — get activated immediately as one combined campaign, and everything else compounds on the audience that activation builds.",
    objectives: [
      "Activate the two pressing properties now — FLOAT's on-sale push through mid-September and The Maze's 4-month Halloween campaign, run as one combined effort on a phased spend that scales toward the Oct 31 close",
      "Unify the first-party data that already exists but lives in silos — ticket-buyer records across DICE, go-out and RA, plus the email list — into one segmented audience layer that retargets and seeds lookalikes across every brand",
      "Run portfolio paid media as one always-learning system across Meta, Instagram, TikTok and Google — shared retargeting pools so a FLOAT buyer sees The Maze early, and budget that flows to the event with the softest floor",
      "Run disciplined paid efficiency against every on-sale — templated campaign structures and conversion tracking so a new event launches same-day from your supplied assets and every dollar traces back to ticket velocity",
      "Close the reporting loop — pixels, conversion events, per-event post-mortems, and a monthly portfolio review that tells Underrated which brands, lineups and price tiers are actually media-responsive",
      "Stand up Origin Venue's launch and its independent-promoter / private-rental pipeline as the portfolio's owned home base",
    ],
    subtitle:
      "One media-and-data engine across all six Underrated brands — built project-by-project, starting with FLOAT and The Maze.",
    imageCaption: "Portfolio Event Marketing + Paid Media",
    stats: [
      {
        value: 6,
        label: "Brands, One Engine",
        description:
          "FLOAT, The Maze, Clinic Wednesdays, Minimal Effort, Resolutions NYE and Origin Venue — one unified media-and-data system across the portfolio instead of six disconnected promo efforts",
      },
      { value: 4000, label: "The Maze — Capacity Target" },
      { value: 4, label: "Ticketing Platforms Unified" },
      { value: 15, suffix: "+", label: "Minimal Effort Shows / Year" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before pricing this, we audited the full Underrated footprint — the dot-com, the DICE and go-out event surfaces, the RA promoter pages for Underrated Presents and Minimal Effort LA, the Instagram, and the competitive context against Framework and Insomniac's Factory 93. Two findings shaped the entire proposal: the brand's cultural reputation runs far ahead of its marketing reach, and the first-party data that should power that reach is real but fragmented across ticketing platforms instead of unified into one activation layer.",
    insights: [
      {
        label: "The Name Is the Irony",
        finding:
          "Underrated has hosted the LA debuts of Lane 8, Claptone and Rampa, and pulls Louie Vega, Miguel Migs and Guy Gerber for Minimal Effort — booking weight that sits at the top of the city's underground. Yet the promotion engine behind it operates boutique: organic-first, show-by-show, under-amplified. The brand is literally named for the gap. Closing it is the whole opportunity.",
        source: "RA promoter pages + Underrated/Minimal Effort booking history",
      },
      {
        label: "Fragmented Data, Not Missing Data",
        finding:
          "The audience exists and is being captured — FLOAT ticketing runs through DICE, The Maze sold through go-out, events list on RA, and the site runs an email-capture CTA. The problem is that each platform owns its slice. Nobody can see a unified ticket-buyer audience across the six brands, segment it, or retarget a FLOAT buyer into The Maze. The leverage is consolidation into one segmented, retargetable layer — not building from zero.",
        source: "DICE + go-out + RA event-surface audit / underratedpresents.com",
      },
      {
        label: "Well-Funded Machines Are Moving In",
        finding:
          "Framework just opened re:frame Studios in Atwater — a purpose-built mid-size room — on top of Sound and The Spotlight, and runs a serious paid + booking machine (MK, CamelPhat, Martinez Brothers). Insomniac's Factory 93 brings warehouse-scale productions and Insomniac's data reach. Both out-spend and out-market Underrated today. Underrated out-curates them — but taste without reach loses the on-sale.",
        source: "EDM.com / Beatportal re:frame coverage + Factory 93 Skyline LA",
      },
      {
        label: "The Maze Runway Is a Pacing Problem, Not a Budget Problem",
        finding:
          "A 4,000-cap Halloween block party (~$320K gross at ~$80 tickets) supports roughly a 10%-of-gross marketing budget, the bulk of it into paid digital. The mistake would be spending it flat across a 4-month runway — same in July as in the final two weeks. A phased combined campaign that scales toward Oct 31, as Halloween plans lock in, matches how the buying decision actually forms.",
        source: "Underrated call (Jun 23) / event-pacing benchmarks",
      },
      {
        label: "Origin Turns a Calendar Into Real Estate",
        finding:
          "Taking over the old Lot 613 space gives Underrated something the competitors monetize hard: an owned indoor/outdoor room for in-house programming 1–2 nights a week plus independent-promoter and private rentals. Marketed as the portfolio's home base — not a seventh one-off — Origin becomes a recurring revenue and first-party-data flywheel, not just another venue.",
        source: "Brief context / LA venue-economics landscape",
      },
    ],
    marketContext:
      "LA's underground is consolidating around operators with capital and infrastructure — Framework's new venue and Insomniac's warehouse machine are both scaling their reach right now. The next 18 months reward the promoters who pair real curation with disciplined paid efficiency and owned audience data. Underrated has the curation and, with Origin, the real estate. This partnership supplies the missing third leg — the media-and-data engine — before the FLOAT season closes and The Maze runway gets short.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Underrated's crowd is LA's taste-forward electronic audience — the melodic, deep, organic and Afro-house listeners who follow the artist and the room, not the algorithm. They're older and higher-spending than the EDM-festival crowd, and they show up for discovery and a vibe, not a drop.",
    demographics:
      "Greater Los Angeles, age 24–40 core, skewing 27–35 for Minimal Effort and The Maze, a touch younger for FLOAT and Clinic Wednesdays. Higher disposable income, design- and experience-driven, deeply online about music discovery. The Keinemusik / All Day I Dream / Crosstown Rebels / Defected listener.",
    demographicCards: [
      { label: "Geographic Core", value: "Greater LA", detail: "DTLA, Arts District, Hollywood, Eastside + SoCal day-trip radius" },
      { label: "Age Range", value: "24–40 core", detail: "27–35 peak for Minimal Effort & The Maze; younger for FLOAT & Clinic" },
      { label: "Taste Profile", value: "Melodic / Deep / Afro House", detail: "Keinemusik, All Day I Dream, Crosstown Rebels, Defected adjacent" },
      { label: "Buying Behavior", value: "Discovery-driven", detail: "Buys for the artist debut and the room — not the headline" },
    ],
    personas: [
      {
        name: "The Scene Loyalist",
        ageRange: "28–38",
        description:
          "Has been to Clinic Wednesdays more times than they can count and treats a Minimal Effort lineup drop as a calendar event. Follows the promoter, the artists and the venues on Instagram, buys early, and brings the group. Their loyalty is the retargeting backbone of the whole portfolio.",
        traits: ["Multi-Event Repeat Buyer", "Early Buyer", "IG-Native", "Brings the Group"],
      },
      {
        name: "The Taste Discoverer",
        ageRange: "24–32",
        description:
          "Lives on RA, Resident Advisor saved events and DJ-set TikToks, and prides themselves on catching an artist's LA debut before it's obvious. Price-tolerant when the lineup is right, allergic to anything that feels corporate or EDM-festival. The audience Underrated wins on curation and competitors can't fake.",
        traits: ["RA Power User", "Set-Clip Watcher", "Lineup-First", "Anti-Corporate"],
      },
      {
        name: "The Experience Seeker",
        ageRange: "25–40",
        description:
          "Comes for FLOAT's golden-hour pool vibe and The Maze's production as much as the music — the aesthetic, the venue and the crowd are the point. High day-of and FOMO conversion, very shareable, and the easiest segment to expand via lookalikes off the core.",
        traits: ["Aesthetic-Driven", "Day-of Converter", "Highly Shareable", "FOMO-Sensitive"],
      },
    ],
    psychographics: [
      "Discovery as identity — being early to an artist or a room is social currency",
      "Experience over spectacle — production, venue and crowd matter as much as the lineup",
      "Scene loyalty — they buy from promoters they trust to curate, repeatedly",
      "Anti-corporate instinct — the more a competitor feels like a machine, the more they want the intimate room",
    ],
    painPoints: [
      "Finding out a show sold out before they even saw it announced",
      "Great lineups they'd have bought — if the promo had ever reached them",
      "Generic, algorithm-chasing event marketing that doesn't speak the scene's language",
      "Fragmented ticketing accounts — no single place that knows they're a regular",
    ],
    purchaseTriggers: [
      "An artist's LA or US debut on the lineup — scarcity of the moment, not just the ticket",
      "A trusted promoter's co-sign and a lineup that signals taste",
      "Day-of and final-release urgency once Halloween / NYE / weekend plans lock in",
      "Friends going + a shareable, aesthetic-forward announce that travels on Stories",
    ],
    platforms: [
      { name: "Instagram", description: "Primary channel — lineup announces, Stories, Reels of past events, and the visual identity that carries the brands. Where the scene lives and shares." },
      { name: "Resident Advisor (RA)", description: "Discovery, credibility and ticketing for the deeper end of the audience — promoter pages, saved events, and editorial signal." },
      { name: "TikTok", description: "Rising channel for set clips, venue reveals and FOMO content — the most efficient top-of-funnel for the younger and Experience-Seeker segments." },
      { name: "Email / SMS", description: "The owned layer — first-access drops and presale codes that don't depend on a feed. Currently under-built relative to its value." },
    ],
    quotes: [
      { text: "Underrated / Minimal Effort consistently books the artists everyone else gets a year later — their LA debuts are the ones to catch.", source: "RA + LA underground community sentiment" },
      { text: "I'd have bought tickets if I'd known it was happening — half these shows I only hear about after they sell out.", source: "Paraphrased fan sentiment, LA electronic scene" },
      { text: "The lineups are unreal, the marketing just doesn't match how good the parties are.", source: "Instagram comment sentiment" },
    ],
  },

  targets: [
    {
      metric: "The Maze — Sell-Through",
      value: "4,000 tickets",
      context:
        "Full-funnel paid campaign to fill the Arts District to its 4,000-cap target by Oct 31, with spend weighted to the final Halloween push.",
    },
    {
      metric: "Maze Cost per Ticket",
      value: "~$17 @ 5× ROAS",
      context:
        "Target cost per acquisition on ~$80 tickets — the paid efficiency the combined campaign is engineered to hit. Directional, not a guarantee.",
    },
    {
      metric: "Blended Cost per Ticket",
      value: "↓ 25–40%",
      context:
        "Portfolio retargeting plus lookalikes seeded from unified ticket-buyer data typically cut paid CPA versus siloed, per-event ad buys.",
    },
    {
      metric: "Owned Audience Growth",
      value: "+25K / yr",
      context:
        "Consolidating DICE, go-out and email capture into one segmented list across all six brands — first-access drops that convert without paying the algorithm twice.",
    },
  ],

  competitive: {
    summary:
      "Underrated competes against operators with more capital and infrastructure — but none of them own its curation or its 14-year local credibility. The gap to close is reach and data, not taste. Scale lives with the machines; the cultural co-sign lives with Underrated.",
    competitors: [
      {
        name: "Framework / re:frame Studios",
        strength:
          "Just opened a purpose-built mid-size venue (re:frame, Atwater) on top of Sound and The Spotlight; deep Hollywood venue control and a serious paid + booking machine (MK, CamelPhat, Martinez Brothers).",
        gap:
          "Venue-first and scaling corporate — their marketing sells rooms, not a curated cultural identity. Underrated's intimate-discovery brand and artist-debut reputation is exactly what their machine can't manufacture; it just needs equal reach.",
      },
      {
        name: "Factory 93 (Insomniac)",
        strength:
          "Warehouse-scale productions (Skyline LA, Ace Mission) backed by Insomniac's data, reach and ticketing apparatus.",
        gap:
          "It's big-brand EDM infrastructure — the more it scales, the more the taste-forward audience craves the un-corporate room. Underrated owns that room and the 12-year Clinic Wednesdays credibility Insomniac can't buy.",
      },
      {
        name: "A Club Called Rhonda",
        strength:
          "Iconic, queer-forward LA house institution with deep cultural cachet and fierce loyalty.",
        gap:
          "Single-brand and niche by design — it doesn't span pool-party to Halloween to NYE to a weekly to an owned venue. Underrated's portfolio breadth is a structural advantage no single-night brand can match.",
      },
      {
        name: "Venue-led club nights (Sound / Academy circuit)",
        strength:
          "Prime real estate and steady, high-frequency programming in Hollywood.",
        gap:
          "Booking is venue-led, not a curated promoter identity, so cross-event audience ownership is weak. A unified first-party data engine lets Underrated own the relationship the venues rent.",
      },
    ],
  },

  tiers: {
    sectionNumber: "08",
    heading: "Start With Two. Scale to the Floor.",
    subheading:
      "You run separate P&Ls per event, so this is built project-by-project — not a forced all-in retainer. Start with the two on the clock: FLOAT + The Maze, combined at a discounted rate that scales toward Halloween. Add brands one at a time, or take the whole portfolio whenever it makes sense.",
    footnote:
      "Every option: ad spend is billed directly to the platforms plus a 15% management fee. Month-to-month with 30-day notice. Creative production stays with your team or creative partner — CCD handles strategy, media buying, data and reporting.",
    tiers: [
      {
        label: "À La Carte",
        name: "Single Property",
        tagline: "One brand at a time. The standard rate.",
        price: "$5,000",
        priceSuffix: "/mo",
        priceContext: "per property · + 15% of ad spend",
        includes: [
          "Dedicated paid media (Meta, Instagram, TikTok, Google) for one property",
          "Audience building + retargeting on that brand's ticket buyers",
          "Conversion tracking + pixel setup on the event's ticketing",
          "Weekly pacing check-ins + a post-event performance report",
          "Month-to-month — scale up or pause around your calendar",
        ],
        excludes: [
          "Cross-property data + shared retargeting between brands",
          "Portfolio rate — each added property is another $5K/mo",
        ],
        footerNote:
          "Best to prove the partnership on one brand before committing more.",
      },
      {
        label: "Start Here",
        name: "FLOAT + The Maze",
        tagline: "The two on the clock — combined at a discounted rate, ramping to Halloween.",
        price: "$4,000",
        priceSuffix: "/mo to start",
        priceContext: "both events combined · $20K total to Halloween",
        includes: [
          "Both events run as one combined campaign — discounted vs. $5K/mo per property à la carte",
          "July — $4,000: awareness seeding for FLOAT + The Maze",
          "August — $4,500: FLOAT on-sale push + The Maze building",
          "September — $5,000: FLOAT close + The Maze momentum",
          "October — $6,500: The Maze Halloween final push to the 4,000 cap",
          "Shared retargeting so FLOAT buyers see The Maze early",
        ],
        featured: true,
        footerNote:
          "$20,000 total across both for the full run to Halloween — a discounted combined rate that scales with the calendar: lighter early, heavier into the final push. Ad spend billed separately at 15%. Roll into more brands or the Full Portfolio anytime.",
      },
      {
        label: "Full Portfolio",
        name: "All Six Brands",
        tagline: "Every property, one engine. The whole gamut.",
        price: "$15,000",
        priceSuffix: "/mo",
        priceContext: "all 6 brands · + 15% of ad spend",
        includes: [
          "FLOAT, The Maze, Clinic Wednesdays, Minimal Effort, Resolutions NYE and Origin Venue — all covered",
          "One unified first-party data engine across DICE, go-out and RA + email/SMS",
          "Portfolio paid media — budget flows to whichever event needs the floor filled",
          "Origin Venue launch support + independent-promoter / private-rental pipeline",
          "Priority calendar planning + monthly portfolio review",
        ],
        footerNote:
          "Six brands for the cost of three. À la carte, these six would run ~$30K/mo — the portfolio rate is $15K/mo flat, and any new property or one-off folds in at no extra retainer.",
      },
    ],
  },

  timelineHeading: "The Calendar",
  timelineSubheading:
    "Mapped to Underrated's actual event calendar — FLOAT live now, The Maze ramping to Halloween, Resolutions over NYE, and Origin's launch — with the two pressing properties activated in week one and everything else compounding on the audience that activation builds.",
  timelineImageCaption: "6 Brands · One Calendar",
  timeline: [
    {
      phase: "Immediate Activation — FLOAT + Maze Combined",
      week: "Weeks 1–4",
      date: "July 2026",
      status: "in-progress" as const,
      tasks: [
        "FLOAT live promo on day one — on-sale push and weekly lineup pushes across Meta, Instagram and TikTok through the mid-September close, trafficking your supplied assets",
        "The Maze awareness seeding begins at the light end of the ramp ($4K combined) — early Halloween save-the-date audience building while CPMs are cheap",
        "Stand up the data foundation — pixels and conversion events across DICE, go-out and RA event surfaces; begin unifying ticket-buyer records into one segmented layer",
        "Clinic Wednesdays always-on engine — keep the 12-year weekly filling rooms while it doubles as a top-of-funnel for the whole portfolio",
      ],
    },
    {
      phase: "Summer Peak + The Maze Builds",
      week: "Weeks 5–13",
      date: "Aug – Sep 2026",
      status: "upcoming" as const,
      tasks: [
        "FLOAT series final pushes through mid-September + Minimal Effort summer shows run on shared retargeting pools",
        "The Maze momentum — combined spend steps up the ramp ($4.5K → $5K) as lineup reveals land and retargeting pools mature",
        "Retargeting matures — FLOAT and Clinic buyers become the seed audience The Maze and Minimal Effort prospect against via lookalikes",
        "Campaign templates v1 — prospecting, retargeting and day-of ad-set structures per property so a new on-sale launches same-day from your supplied creative",
      ],
    },
    {
      phase: "The Maze — Halloween Final Push",
      week: "Weeks 14–17",
      date: "October 2026",
      status: "upcoming" as const,
      tasks: [
        "Heavy paid push to the 4,000 cap — the top of the ramp ($6.5K combined) as Halloween plans lock in",
        "Creator + influencer seeding and day-of urgency campaigns built for the day-of converter",
        "Final-release and day-of urgency campaigns engineered to close the floor to capacity by Oct 31",
        "Live pacing against the cap with daily budget reallocation across ad sets, holding the ~$17 CPA target",
      ],
    },
    {
      phase: "Resolutions NYE + Origin Pre-Launch",
      week: "Weeks 18–26",
      date: "Nov – Dec 2026",
      status: "upcoming" as const,
      tasks: [
        "Resolutions NYE campaign — early-bird to final-release price ladder, venue reveal, and the year's highest-intent retargeting pool from a full season of buyers",
        "Origin Venue pre-launch teasers — build anticipation for the Lot 613 takeover and rebrand",
        "Year-end portfolio review — which brands, lineups and price tiers proved most media-responsive across the season",
        "Holiday-season owned-audience push — convert the year's accumulated list into first-access NYE sales",
      ],
    },
    {
      phase: "Origin Launch + Always-On Portfolio",
      week: "Weeks 27–52",
      date: "Jan – Jun 2027",
      status: "upcoming" as const,
      tasks: [
        "Origin Venue launch — rebrand rollout, in-house programming 1–2 nights/week, and the independent-promoter + private-rental pipeline as the portfolio's home base",
        "Always-on engine across Minimal Effort, Clinic Wednesdays and the next FLOAT season on a single unified audience",
        "Quarterly campaign refresh + expansion as new properties and one-offs come online",
        "Monthly portfolio reporting — per-event post-mortems and the cross-brand view of what's actually working",
      ],
      ongoing: true,
    },
  ],

  deliverablesSubheading:
    "Everything in the engagement — portfolio paid media, a unified first-party data engine, and the closed-loop reporting that makes every media dollar traceable to ticket velocity. Creative production stays with your team; CCD runs the media and the data.",
  deliverables: [
    {
      category: "Paid Media",
      icon: "◆",
      items: [
        { name: "Portfolio Campaign Management", quantity: "All 6 brands", description: "Always-on management across Meta, Instagram, TikTok and Google for every property — one system that moves budget to whichever event needs the floor filled. Ad spend billed separately to platforms at a 15% management fee." },
        { name: "Per-Event Ad-Set Architecture", quantity: "Every on-sale", description: "Prospecting, retargeting and day-of urgency ad sets built per event and launched same-day from a templated structure, trafficking and testing your supplied creative." },
        { name: "Shared Retargeting + Lookalikes", quantity: "Cross-portfolio", description: "Unified ticket-buyer pools so a FLOAT buyer sees The Maze early, plus lookalikes seeded by brand and lineup off the highest-intent segments." },
        { name: "FLOAT + The Maze — Combined Campaign", quantity: "4-month ramp", description: "The two on the clock run as one combined campaign with spend ramping $4K → $6.5K toward Oct 31 ($20K total), managed live against the 4,000 cap and a ~$17 CPA target." },
      ],
    },
    {
      category: "First-Party Data + CRM",
      icon: "◇",
      items: [
        { name: "Ticketing Data Unification", quantity: "DICE · go-out · RA", description: "Consolidate ticket-buyer records scattered across platforms into one segmented, retargetable audience layer spanning all six brands." },
        { name: "Email / SMS Lifecycle", quantity: "Always-on", description: "First-access drops, presale codes and lifecycle flows on the owned list — the layer that converts without paying the algorithm twice." },
        { name: "Audience Segmentation", quantity: "Cross-brand", description: "Segment by brand affinity, recency and spend so the right buyers see the right event first — the backbone of the retargeting engine." },
      ],
    },
    {
      category: "Strategy & Reporting",
      icon: "●",
      items: [
        { name: "Portfolio Calendar Planning", quantity: "Monthly", description: "Cross-brand calendar so spend and announces are sequenced — no two on-sales cannibalizing the same audience in the same week." },
        { name: "Weekly Pacing Reviews", quantity: "Weekly", description: "Per-event sell-through tracking with budget reallocation toward the events with the softest floor." },
        { name: "Per-Event Post-Mortems + Portfolio Review", quantity: "Every event + monthly", description: "Every event gets a post-mortem; every month gets a portfolio view tracing media spend back to ticket velocity across the brands." },
      ],
    },
  ],

  scope: {
    subheading:
      "What's included across the engagement — and where the lines are. À la carte and the FLOAT + The Maze combined start are scoped proportionally; the lines below describe the full engagement.",
    included: [
      "Portfolio paid media management across Meta, Instagram, TikTok and Google for all six brands",
      "Per-event ad-set architecture + trafficking, testing and optimizing your supplied creative",
      "First-party data unification across DICE, go-out and RA + email/SMS lifecycle",
      "Shared retargeting pools and lookalike audiences across the portfolio",
      "FLOAT + The Maze run as one combined campaign managed to the 4,000 cap",
      "Weekly pacing reviews, per-event post-mortems and a monthly portfolio review",
      "Origin Venue launch support + independent-promoter / private-rental pipeline",
      "Portfolio calendar planning across all six brands",
    ],
    excluded: [
      "Creative production and asset design — handled by your team or creative partner",
      "Ad spend itself — billed directly to the platforms, managed at a 15% fee",
      "Talent buying, booking fees and artist guarantees",
      "Ticketing platform fees and venue / production costs",
      "PR and press outreach (available as an add-on — scoped separately)",
    ],
  },

  nextSteps: [
    { step: 1, title: "Pick the Entry Point", description: "Choose the lane: the FLOAT + The Maze combined start ($4K/mo scaling to $20K by Halloween), à la carte on a single brand, or the Full Portfolio. It's project-by-project — scale or add brands whenever it makes sense." },
    { step: 2, title: "Confirm & Kick Off This Week", description: "FLOAT is live and The Maze runway is already running. Reply to confirm scope and we activate both immediately as one combined campaign — there's promo time being left on the table every week we wait." },
    { step: 3, title: "Data + Access Onboarding", description: "We get access to the ad accounts, DICE / go-out / RA event surfaces and the email platform, and start unifying ticket-buyer data into one segmented layer in week one." },
    { step: 4, title: "Activate FLOAT + Seed The Maze", description: "FLOAT on-sale push goes live and The Maze awareness seeding begins at the light end of the ramp while CPMs are cheap, building the retargeting pool the Halloween push will need." },
    { step: 5, title: "Onboarding Questionnaire", description: "A short questionnaire once we're confirmed — current spend, list size and platforms, what's worked and what hasn't — to tune the first 30 days." },
  ],

  cta: {
    headline: "Let's make Underrated impossible to ignore.",
    body:
      "The bookings already belong at the top of LA's underground. The marketing should too. FLOAT is live and The Maze runway is short — reply and let's start with the two on the clock this week, then scale from there.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/underrated-presents/hero1.png",
    hero2: "/images/underrated-presents/hero2.png",
    product: "/images/underrated-presents/product.png",
    editorial: "/images/underrated-presents/editorial.png",
    texture: "/images/underrated-presents/texture.png",
    brutalist: "/images/underrated-presents/brutalist.png",
    heroBg: "/images/underrated-presents/hero1.png",
    ogImage: "/images/underrated-presents/og-image.png",
    hero1Caption: "Portfolio Event Marketing + Paid Media",
    brutalistCaption: "Underrated Presents × Crowd Control Digital",
  },
};
