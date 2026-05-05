import type { ProjectData } from "../project-context";

/**
 * Fearless Records - Catalog Reactivation Pitch
 *
 * Built for the Concord / BMG-Concord meeting. Frames Crowd Control Digital
 * as the outside execution layer that runs catalog reactivation programs
 * across the 30-priority-artist Fearless roster. Grounded in the live Spotify
 * monthly listener pull (May 2026), the Fearless catalog database, and the
 * BMG-Concord merger context (announcement: April 28, 2026; close: H2 2026).
 */
export const fearlessRecords: ProjectData = {
  requireNda: true,
  clientLegalName: "Fearless Records (Concord Music Group, Inc.)",

  accentColor: "#FD3737",

  client: {
    name: "Fearless Records",
    logo: "",
    contactName: "Catalog & Marketing Lead",
    contactRole: "Fearless Records / Concord Music Group",
    contactEmail: "TBD",
    industry: "Recorded Music - Catalog (Pop-punk, Post-hardcore, Metalcore, Alt Rock)",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Fearless Records Catalog Reactivation",
    tagline: "A 90-day pilot to lift the most under-leveraged tracks across Fearless's 78M-listener catalog into their next chapter - vinyl, sync, pop-up, and creator-led.",
    type: "Back-Catalog Reactivation Pilot",
    startDate: "Q3 2026",
    endDate: "Q4 2026",
    duration: "90 days",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The Pitch",
    summary: "Fearless Records sits inside the most consequential indie music transaction of the decade. The April 2026 BMG-Concord merger closes in H2 2026, creating the world's #4 music group on day one. Fearless is one of the cleanest reactivation opportunities in the combined catalog: 78 million combined monthly listeners across the priority 30, 7.3 billion cumulative streams on top tracks, a Billions-Club anchor (Hey There Delilah), an unactivated IP (Punk Goes), and a roster split cleanly across Gen-Z TikTok-driven discovery and millennial nostalgia waves. CCD is proposing a single-quarter pilot focused on the highest-upside tracks: vinyl variant strategy, anniversary IP packaging, sync seeding, pop-up activation, creator drops. Measured against concrete listener and revenue targets, with a clear path to a multi-quarter retainer if the pilot lands.",
    objectives: [
      "Lift S-tier monthly listeners by +20% in 90 days through targeted vinyl drops, sync placements, and creator seeding on the 5 deal-anchor catalog assets",
      "Resurrect Punk Goes as a reactivated IP - anniversary box-set program, brand co-drop, and creator-led re-introduction across 18 volumes / 3M+ albums sold",
      "Secure 3+ marquee sync placements (film, TV, brand, gaming) across Pierce The Veil, Ice Nine Kills, and STARSET - the three highest-ceiling under-synced tracks in the catalog",
      "Run a single proof-point pop-up activation that turns one catalog moment into earned press, owned-channel growth, and a measurable retail uplift",
      "Close the 90-day pilot with a defensible recommendation on a multi-quarter retainer scoped against the full 30-artist priority roster"
    ],
    subtitle: "78M monthly listeners. 7.3B cumulative streams on top tracks. One Billions-Club asset. One unactivated IP. Zero outside execution capacity dedicated to it.",
    imageCaption: "Catalog Reactivation - Fearless Records",
    stats: [
      { value: 78, suffix: "M+", label: "Combined Monthly Listeners", description: "Across the priority 30 active + alumni Fearless artists (Spotify, May 2026)" },
      { value: 7.3, suffix: "B+", label: "Cumulative Streams (top tracks)" },
      { value: 30, label: "Priority Artists Mapped" }
    ],
  },

  discovery: {
    heading: "What We Found in Your Own Catalog",
    summary: "Before proposing a single play, we pulled the priority 30 Fearless roster into a tiered streaming map (data: Spotify monthly listeners, May 2026; cross-referenced against RIAA certifications and label public data). Five findings drive the entire pitch.",
    insights: [
      {
        label: "S-Tier Concentration",
        finding: "5 artists carry 58% of the catalog's monthly listener volume - Chase Atlantic (19.6M), Pierce The Veil (9.8M), Plain White T's (7.5M), I Prevail (4.4M), BOYS LIKE GIRLS (3.8M). 45.1M monthly listeners between them. This is where pilot capital should focus first.",
        source: "Streaming Snapshot, Tier Summary"
      },
      {
        label: "Billions Club Asset, Underleveraged",
        finding: "Plain White T's 'Hey There Delilah' is in the Spotify Billions Club (1.8B+ cumulative streams, 6x Platinum) - yet the catalog isn't being run as a coming-of-age sync engine. Wedding, prom, nostalgia, and Gen-Z first-discovery placements compound annually. One year of dedicated sync seeding here is uncapped.",
        source: "RIAA + Spotify catalog data"
      },
      {
        label: "Punk Goes Is a Sleeping IP",
        finding: "18 volumes. 3M+ albums sold. 20M+ singles. Zero pop-punk / emo IP at this scale operates outside Fearless. Currently dormant as a sustained IP. Anniversary boxes, vinyl variants, brand co-drops, creator re-intro - none of it is running. The 25th anniversary of the series (2025-onward) is a fungible re-launch window.",
        source: "Fearless catalog database (Punk Goes Series sheet)"
      },
      {
        label: "Sync Ceiling Not Hit on PTV / INK / STARSET",
        finding: "Pierce The Veil's 'King for a Day' was already TikTok-reactivated organically - proof the catalog has heat - but film/TV sync work has not followed. Ice Nine Kills (horror-themed metalcore, 2.3M listeners) is a built-in Halloween distribution engine; Stranger Things-tier opportunities exist annually. STARSET's cinematic / sci-fi rock has Gold catalog and obvious trailer-cue potential.",
        source: "Catalog Heat Map (rows 2, 8, 11)"
      },
      {
        label: "TikTok Is Already Pulling Catalog Up Without You",
        finding: "Get Scared (1.3M monthly), The Plot In You (2.58M), Set It Off (3.17M), Motionless In White (4.05M) - all overperform their current activity baseline because TikTok is doing reactivation work organically. Right now Fearless captures the streams; nothing captures the moment for retail or merch lift. Layering an owned-channel + physical drop on top of organic TikTok reactivation is the highest-ROI play in catalog work.",
        source: "Streaming Snapshot strategic notes"
      }
    ],
    marketContext: "The April 28, 2026 BMG-Concord merger closes in H2 2026 - creating the world's #4 music group on day one and doubling catalog volume per catalog manager. Fearless is one of the cleanest reactivation opportunities in the combined entity: defined roster, modern + legacy bridge, no estate complications, and an IP asset (Punk Goes) ready to run. Q3 2026 is the cleanest window before Q4 retail planning and DSP editorial pitching lock for the year. Catalog work that ships now rides the merger press wave; catalog work that waits until Q1 2027 fights for attention against new-release glut."
  },

  audience: {
    heading: "Three Audiences, One Catalog",
    summary: "Fearless's catalog is rare in that it spans two distinct demographic discovery patterns simultaneously - organic Gen-Z TikTok pickup AND millennial nostalgia revival - plus a genre-loyal hard-rock / metalcore base. A reactivation program has to talk to all three, with different motions per audience.",
    demographics: "Gen-Z (16-24): TikTok-driven first discovery (Chase Atlantic, The Plot In You, Get Scared). Millennials (28-42): nostalgia revival and concert-loyal (BOYS LIKE GIRLS, Plain White T's, Mayday Parade, Pierce The Veil's earlier cycles). Genre-loyal hard-rock/metalcore (18-45): tour-and-merch-anchored (I Prevail, Ice Nine Kills, Pierce The Veil current cycle, August Burns Red, Wage War).",
    demographicCards: [
      { label: "Combined Monthly Listeners", value: "78M+", detail: "Priority 30 active + alumni roster" },
      { label: "Top-Track Cumulative Streams", value: "7.3B+", detail: "Across the priority 30" },
      { label: "S-Tier Reach Concentration", value: "58%", detail: "5 artists carry the value" },
      { label: "Billions Club Anchors", value: "1", detail: "Hey There Delilah (1.8B+)" }
    ],
    personas: [
      {
        name: "The TikTok Discoverer",
        ageRange: "16-24",
        description: "Found Chase Atlantic, The Plot In You, or Get Scared via a TikTok sound. Streams the catalog tracks Spotify recommends, follows the artist on Instagram, but rarely buys merch or vinyl. Their value to the label is streaming compounding; their value to a reactivation program is creator-seeding amplification.",
        traits: ["TikTok-native", "Streaming-only", "Algorithmic loyalty", "High share rate"]
      },
      {
        name: "The Y2K Nostalgist",
        ageRange: "28-42",
        description: "Bought Plain White T's, BOYS LIKE GIRLS, Fall Out Boy CDs in 2007. Now buys vinyl reissues, attends When We Were Young Festival, and pays $80+ for tour merch. The single most reliable buyer in the rock-catalog economy right now. Pop-ups, anniversary boxes, and limited variants convert this audience predictably.",
        traits: ["Disposable income", "Vinyl buyer", "Festival attendee", "Nostalgic completist"]
      },
      {
        name: "The Genre-Loyal Lifer",
        ageRange: "18-45",
        description: "Has been a Pierce The Veil / I Prevail / Ice Nine Kills fan for 5-15 years. Owns multiple LP variants, attends every tour, buys the bundle. The base that justifies sustained catalog investment: predictable, deep-pocketed, and primed to amplify any drop within 24 hours of announcement.",
        traits: ["Multi-variant collector", "Tour completist", "Discord + forum active", "Direct-to-fan native"]
      }
    ],
    psychographics: [
      "Fan-loyalty runs deeper than genre-loyalty - buyers stay with artists across album cycles, even as sound evolves",
      "Vinyl variants are the new collectible economy - color, splatter, etched B-sides, and limited counts drive pre-order volume more than the music itself",
      "TikTok-driven discovery is a real channel for catalog tracks but it doesn't convert to merch / vinyl on its own - it needs a layered owned-channel and physical drop to monetize",
      "Concert nostalgia is a multi-decade asset - When We Were Young festival's existence proves that 2000s emo / pop-punk fans will fly cross-country for a one-day catalog showcase"
    ],
    painPoints: [
      "S-tier catalog assets are drifting up 5-15% organically per year via TikTok, yet there's no owned-channel layer capturing the moment for retail or merch lift",
      "Punk Goes IP has been dormant since 2018-2019 despite a clear audience for anniversary editions and brand co-drops",
      "Sync inbox is reactive, not proactive - the team takes calls but isn't actively pitching trailer cuts, gaming placements, or brand campaigns",
      "Catalog managers at most labels are 1-to-many on hundreds of titles. Outside execution capacity is the only way to give priority titles dedicated focus without expanding headcount"
    ],
    purchaseTriggers: [
      "Limited unit count with a defensible reason (anniversary, B-side, alternate cover) - drives presale",
      "Bundle pricing that pairs vinyl with merch, photo book, or live recording - increases AOV by 30-50%",
      "Pop-up activation tied to retail drop - converts FOMO into same-day purchase plus social UGC",
      "Sync moment in a high-profile film / TV / brand campaign - drives both streaming bump and merch demand"
    ],
    platforms: [
      { name: "TikTok (organic)", description: "Primary first-discovery surface for catalog tracks across Chase Atlantic, The Plot In You, Get Scared, Set It Off. Moment-driven, hard to seed but powerful when it hits." },
      { name: "Spotify Editorial + Algorithmic", description: "Where catalog tracks compound after a TikTok pickup. Pre-saves, pitch-to-editorial, and pre-release tactics still apply to legacy catalog drops (anniversary editions, vinyl drops with a single attached)." },
      { name: "Discord + Reddit (genre-loyal)", description: "Where the base lives. Pierce The Veil, I Prevail, Ice Nine Kills, Mayday Parade, Bloodywood all have active forums that move pre-order volume on day one of any drop announcement." },
      { name: "When We Were Young + emo / pop-punk festivals", description: "The IRL distribution channel for the Y2K nostalgist persona. Pop-ups, listening events, and vinyl drops timed to festival weekends compound predictably." }
    ],
    quotes: [
      { text: "Hey There Delilah is the most under-leveraged sync asset in the Concord catalog. There's a wedding, a prom, and a coming-of-age scene every week of every year that song should be in.", source: "CCD internal sync analysis" },
      { text: "Punk Goes was the calling card. Bringing it back as a 25-year vinyl box program, with a brand co-drop, would print money. Nobody is doing it.", source: "Catalog database, Strategic Notes" },
      { text: "King for a Day went TikTok-viral organically. The streams compound. But there's no merch, no pop-up, no sync brief that captures the moment for revenue.", source: "Catalog Heat Map, row 2" }
    ]
  },

  targets: [
    { metric: "S-Tier Monthly Listeners", value: "+20%", context: "Across the 5 deal-anchor catalog assets (Chase Atlantic excluded - 'don't touch, let it run' per heat-map read). Target measured as a 90-day weighted average uplift on Pierce The Veil, Plain White T's, I Prevail, BOYS LIKE GIRLS." },
    { metric: "Marquee Sync Placements", value: "3+", context: "Targets: Pierce The Veil ('King for a Day' / 'Bulletproof Love' for film/TV), Ice Nine Kills (horror IP - Halloween-window film, gaming, or trailer cut), STARSET (sci-fi or cinematic placement). Brief packages built and pitched proactively." },
    { metric: "Punk Goes Anniversary Vinyl Box", value: "15K+", context: "Pre-order units for a 25-year retrospective box program - multi-volume vinyl set with archival ephemera. Comp benchmark: anniversary box presale conversion rates from Run For Cover, Vagrant, and Drive-Thru retrospectives." },
    { metric: "TikTok Sound Creates", value: "5K+", context: "Across catalog seeding programs on Hey There Delilah (wedding / coming-of-age), King for a Day, and 2-3 alumni tracks already pulling organic momentum (Get Scared, The Plot In You, Set It Off). Measured at 60 days." }
  ],

  competitive: {
    summary: "Catalog reactivation has clear comparables across the last 5 years. We've selected the 5 with the cleanest read across to the Fearless catalog: same era, same reactivation mechanic, or same audience demographics. None of these are Fearless's own catalog, so they read as external benchmarks rather than internal precedents.",
    competitors: [
      { name: "Kate Bush - 'Running Up That Hill' - +27,000% streaming bump (2022)", strength: "Stranger Things sync placement caught a 37-year-old recording in a single moment and lifted royalties from sub-$0.5M annual to $2M+/month. The textbook sync-driven catalog reactivation.", gap: "Sync is reactive in most catalog teams. CCD proposes a sync-FORWARD pitch motion: brief packages, target lists, and proactive pitching for PTV / INK / STARSET. Not waiting for the call." },
      { name: "Fleetwood Mac - 'Dreams' - Doggface208 / Ocean Spray TikTok (2020)", strength: "An organic creator moment was met by the catalog team with same-week merch, a Mick Fleetwood TikTok, and a quick-turn vinyl variant. Catalog responded to the moment instead of watching streams compound passively.", gap: "Most catalog teams aren't structurally set up to ship merch in 7 days. CCD's pop-up-and-drop infrastructure compresses lead times so when (not if) Fearless catalog catches a TikTok moment, the upside isn't left on the table." },
      { name: "Avril Lavigne - 'Sk8er Boi' / Y2K nostalgia - When We Were Young (2022-2025)", strength: "Live-festival-anchored Y2K pop-punk reactivation that compounded into vinyl reissues, brand fashion deals, and back-to-back tour cycles. The single most directly adjacent precedent for the BOYS LIKE GIRLS / Plain White T's / Mayday Parade / Real Friends segment of the catalog.", gap: "WWWY proves the buyer is there. Fearless owns more of the catalog that defined this era than any other label outside the majors. CCD turns festival-adjacent timing into vinyl drops, pop-ups, and sync placements that compound around the festival window each year." },
      { name: "Jelly Roll catalog acceleration - TikTok-led catalog seeding into platinum (2022-2024)", strength: "Different lane (country / hip-hop crossover) but the seeding mechanic is identical: layered creator drops, paid amplification on top of organic momentum, and owned-channel infrastructure to capture the listener post-discovery.", gap: "Fearless has at least 4 catalog tracks (Get Scared 'Built for Blame', Set It Off 'Dancing With the Devil', The Plot In You 'Face Me', Motionless In White 'Another Life') that are mid-organic-reactivation right now. CCD layers paid + creator + owned-channel on top - converting passive momentum into measurable revenue." },
      { name: "Sleep Token - back-catalog reactivation via active artist halo (2023-2024)", strength: "Active-cycle releases on Take Me Back to Eden lifted prior catalog (Sundowning, This Place Will Become Your Tomb) into S-tier streaming. Cross-album halo effect that compounded for 18 months.", gap: "Pierce The Veil's 'The Jaws of Life' (2023) was the active cycle - but the prior catalog (Collide with the Sky, Misadventures) didn't get the systematic halo treatment. CCD proposes a halo-program structure that pulls 2-3 prior LPs into the active cycle window using the same creator + DSP + sync motion." }
    ]
  },

  timelineHeading: "90-Day Reactivation Roadmap",
  timelineSubheading: "A single quarter, four phases, ending with a defensible recommendation on a multi-quarter retainer scoped against the full 30-artist priority roster.",
  timelineImageCaption: "Fearless Records × Crowd Control Digital",

  timeline: [
    {
      phase: "Audit & Priority Lock",
      week: "Weeks 1-2",
      date: "Q3 2026 - Month 1",
      status: "upcoming" as const,
      tasks: [
        "Joint kickoff with Fearless catalog + marketing leads - confirm priority 5 lead tracks for the pilot",
        "Clearance Q&A: master scope, sample status, recoupment, partner conflicts (existing pop-up partners, exclusive merch deals, retail co-promo locks)",
        "Punk Goes anniversary program scoping - volume selection, archival asset audit, brand-collab readiness",
        "Sync brief packages drafted for PTV / INK / STARSET - target lists, music supervisor outreach, gaming + brand pipeline",
        "Owned-channel infrastructure audit - Laylo / email / SMS / pre-save tooling state per priority artist"
      ]
    },
    {
      phase: "Manufacturing & Seeding Kickoff",
      week: "Weeks 3-5",
      date: "Q3 2026 - Month 1-2",
      status: "upcoming" as const,
      tasks: [
        "Vinyl pressing partner selection + variant brief (RTI / Furnace / Third Man / GZ depending on lead time)",
        "First-wave merch capsule into production (lyric prints, era-correct apparel, photo zines)",
        "Pop-up venue + city lock - concept brief out to candidate venues for the lead activation",
        "Creator seeding kits shipped - Hey There Delilah weddings / coming-of-age angle, King for a Day TikTok, INK Halloween creators",
        "Sync brief packages out to music supervisors, brand contacts, gaming placement reps",
        "DSP pre-save / editorial pitch infrastructure built for the lead drop"
      ]
    },
    {
      phase: "Drop Wave 1 - Vinyl, Pop-Up, Creator",
      week: "Weeks 6-9",
      date: "Q3 2026 - Month 2-3",
      status: "upcoming" as const,
      tasks: [
        "Lead vinyl variant goes on sale - D2C drop with Spotify pre-save unlock",
        "Pop-up activation weekend - earned press, owned-channel growth, retail uplift measurement",
        "TikTok creator drops live - Hey There Delilah angle and one alumni-track angle running simultaneously",
        "Sync follow-up cadence - placements moving from pitch to negotiation; first confirmed placement targeted",
        "First-30-day performance review with Fearless team - early read on what's converting"
      ]
    },
    {
      phase: "Activation Peak + Q4 Recommendation",
      week: "Weeks 10-12",
      date: "Q4 2026 - Month 3",
      status: "upcoming" as const,
      tasks: [
        "Punk Goes anniversary box presale opens - long-tail revenue tail through holiday quarter",
        "Sync placements live (target: 1-2 confirmed by week 12; remaining in motion)",
        "Second-wave merch capsule and second variant drop on the lead vinyl",
        "Final pilot performance report - listener uplift, sync revenue, vinyl units, creator amplification, press value",
        "Multi-quarter retainer recommendation delivered - scope, pricing, target roster expansion"
      ]
    },
    {
      phase: "Catalog Learning Loop (Ongoing)",
      week: "Weeks 12+",
      date: "Q4 2026 onward",
      status: "upcoming" as const,
      tasks: [
        "Monthly catalog rolling review - what's organically reactivating, what to layer paid / creator / owned on top of",
        "Sync pipeline maintenance - supervisor relationships, target list updates",
        "Quarterly vinyl + merch drop calendar against organic reactivation signals",
        "Annual anniversary calendar maintenance - Punk Goes, era milestones, individual album anniversaries"
      ],
      ongoing: true
    }
  ],

  deliverables: [
    {
      category: "Physical Drops",
      icon: "◆",
      items: [
        { name: "Lead Vinyl Variant Strategy", quantity: "1 drop, 3 variants", description: "180g pressing on a priority S-tier track. Standard black, color variant, and indie-coalition exclusive. Vendor recommendation, pre-order infrastructure, presale conversion tracking." },
        { name: "Punk Goes Anniversary Box Program", quantity: "1 presale", description: "25-year retrospective vinyl box across selected Punk Goes volumes. Archival ephemera, foil packaging, signed-edition tier. Pre-order funded; manufacturing capital sits with Fearless." },
        { name: "Limited-Edition Merch Capsule", quantity: "4-6 SKUs", description: "Lyric-print zines, era-correct apparel pieces, photo books. Tied to the priority track or Punk Goes IP. D2C drop with bundle pricing." },
        { name: "Cassette / 7-inch Reissue (optional add)", quantity: "1 SKU", description: "Indie-store coalition exclusive. Tied to alumni catalog (Get Scared / The Plot In You / Set It Off candidates) where TikTok reactivation is already running." }
      ]
    },
    {
      category: "Experiential",
      icon: "■",
      items: [
        { name: "Pop-Up Activation Weekend", quantity: "1 weekend", description: "Single-city listening installation tied to the lead vinyl drop. Concept, venue selection, production support, press activation, on-site UGC capture. Candidate cities: LA, Brooklyn, Nashville, Chicago. Selected based on artist + audience fit." },
        { name: "Festival Window Co-Activation", quantity: "1", description: "When We Were Young / Furnace Fest / Sad Summer adjacent drop or partnership. Vinyl release, pop-up, or merch capsule timed to a festival weekend with high audience overlap." }
      ]
    },
    {
      category: "Sync & Partnerships",
      icon: "●",
      items: [
        { name: "Pierce The Veil Sync Brief", quantity: "1 package", description: "Target list across film / TV, focused on 'King for a Day' (TikTok-warmed) and 'Bulletproof Love' (cinematic). Music supervisor outreach + creative cue sheet." },
        { name: "Ice Nine Kills Sync Brief", quantity: "1 package", description: "Horror IP angle. Annual Halloween distribution, slasher franchise placements, gaming (Dead by Daylight tier), trailer cuts. Built-in cultural calendar gives this brief 12-month relevance." },
        { name: "STARSET Sync Brief", quantity: "1 package", description: "Sci-fi / cinematic / trailer-cue. 'My Demons' is a Gold-certified anchor underserved in film / TV. Target list across Marvel-tier trailers, gaming campaigns, and cinematic ad placements." },
        { name: "Plain White T's Sync Engine", quantity: "Ongoing", description: "Hey There Delilah as an evergreen wedding / prom / coming-of-age placement engine. Creator seeding + brand pitch + film / TV inbox programmatic outreach." },
        { name: "Brand Co-Drop Outreach", quantity: "2 partners", description: "Y2K-coded fashion (Reformation / UO / Knickerbocker / streetwear) for the BOYS LIKE GIRLS / Plain White T's / Mayday Parade segment. Co-branded merch or activation." }
      ]
    },
    {
      category: "Content & Creator",
      icon: "▶",
      items: [
        { name: "Hey There Delilah Creator Drop", quantity: "1 program", description: "30-day creator seeding wave: wedding videographers, prom-content creators, coming-of-age TikTok accounts. Goal: 2K+ creates with sound, measured streaming bump." },
        { name: "Catalog TikTok Layering Program", quantity: "3 catalog tracks", description: "Layered creator + paid amplification on top of organic momentum already on Get Scared, The Plot In You, Set It Off (or Motionless In White). Convert passive streams to owned-channel growth." },
        { name: "Pop-Up + Drop Content Capture", quantity: "1 weekend", description: "Same-day social content from the pop-up activation. Reels, TikToks, longer-form recap, BTS for owned channels and partner amplification." },
        { name: "Punk Goes Re-Introduction Campaign", quantity: "1 phase", description: "Cross-platform re-launch of the Punk Goes IP. Explainer content, archival reissue announcements, creator nostalgia waves. Prepares the audience for the box presale." }
      ]
    },
    {
      category: "Owned Channels",
      icon: "▲",
      items: [
        { name: "Laylo / Email / SMS Audit + Setup", quantity: "Top 5 artists", description: "Per-artist owned-channel audit. What exists, what's gated by the label CRM, what CCD can stand up cleanly. Build pre-save flows and drop-day SMS waves on the priority 5." },
        { name: "Spotify Pre-Save Infrastructure", quantity: "All catalog drops", description: "Pre-save unlock pages tied to vinyl variants and anniversary releases. Captures the converting audience for direct retargeting." },
        { name: "Catalog Performance Reporting", quantity: "Monthly", description: "Single dashboard tracking listener uplift, sync revenue, vinyl units, creator amplification, and press value across the priority 5 plus the alumni reactivation tracks." }
      ]
    }
  ],

  deliverablesSubheading: "A focused pilot scope across five workstreams: physical drops, experiential, sync, content + creator, and owned channels. Sized to a single quarter and the priority 5 deal-anchor tracks. Designed to prove out before scaling to the full 30-artist priority roster.",

  scope: {
    subheading: "Where the boundary sits between CCD's pilot mandate and Fearless / Concord's existing catalog operations.",
    included: [
      "Priority track strategy and creative direction across the 5 lead tracks for the 90-day pilot",
      "Punk Goes anniversary program plan, presale infrastructure, and creative brief (production capital sits with Fearless)",
      "Sync brief packages for PTV, INK, STARSET, and Plain White T's. Proactive supervisor / brand / gaming outreach",
      "Vinyl variant strategy + vendor recommendations for the lead drop (manufacturing capital sits with Fearless)",
      "Limited-edition merch capsule design direction + vendor sourcing",
      "Pop-up activation concept, venue partnership, on-site press + content capture",
      "Creator seeding programs for Hey There Delilah and 3 alumni catalog tracks",
      "Owned-channel infrastructure audit + setup for the priority 5 (Laylo / email / SMS / pre-save)",
      "Monthly performance reporting + 30 / 60 / 90 strategic reviews",
      "Final pilot recommendation on a multi-quarter retainer scoped against the full 30-artist roster"
    ],
    excluded: [
      "Master licensing, mechanical clearances, and sync rate negotiations (handled by Fearless / Concord rights team)",
      "Vinyl manufacturing capital and physical inventory financing (CCD recommends vendors and budgets; capital sits with Fearless)",
      "Re-recording or remastering (out of scope; available as add-on if requested)",
      "Artist booking fees, talent compensation, or tour logistics",
      "Legal counsel and MSA negotiation between CCD and Fearless / Concord",
      "Paid media spend on creator amplification (proposed as passthrough budget, billed at platform + 15% management)"
    ]
  },

  quote: {
    model: "project" as const,
    currency: "USD",
    lineItems: [
      { name: "Strategy + Priority Lock", description: "Joint kickoff, priority 5 confirmation, sync target list, Punk Goes program scoping, owned-channel audit", price: 12000 },
      { name: "Vinyl + Merch + Punk Goes Direction", description: "Variant strategy, vendor sourcing, merch capsule design direction, Punk Goes anniversary program plan + presale infrastructure", price: 10000 },
      { name: "Sync Brief Packages (4)", description: "Music supervisor outreach + creative cue sheets for PTV, INK, STARSET, and the Plain White T's evergreen engine", price: 9000 },
      { name: "Pop-Up Activation Weekend", description: "Concept, venue partnership, production support, on-site press + content capture for the single proof-point activation", price: 8000 },
      { name: "Creator Seeding Programs (Hey There Delilah + 3 catalog)", description: "Creator outreach, kit production, paid amplification setup (passthrough media budget separate)", price: 4500 },
      { name: "Reporting + 30 / 60 / 90 Reviews", description: "Monthly performance dashboard + strategic check-ins; final retainer recommendation deliverable", price: 1500 }
    ],
    subtotal: 45000,
    setupFee: {
      label: "Onboarding Sprint (Week 1)",
      amount: 0
    },
    discount: {
      label: "Pilot Pricing - locked for 90-day pilot only",
      percentage: 0,
      amount: 0
    },
    mediaBudget: {
      label: "Recommended Passthrough Budgets",
      amount: 25000,
      amountLabel: "$25K + 15% mgmt",
      note: "Creator amplification + paid social + pop-up production passthrough. Billed to platforms / vendors directly with a 15% management uplift. Manufacturing capital (vinyl, merch) sits separately with Fearless and is not included here."
    },
    total: 45000,
    paymentSchedule: [
      { milestone: "Pilot Greenlight (50%)", percentage: 50, amount: 22500, due: "Upon signature - covers weeks 1-6 of the pilot" },
      { milestone: "Mid-Pilot (25%)", percentage: 25, amount: 11250, due: "End of week 6 - drop wave 1 in market" },
      { milestone: "Pilot Close (25%)", percentage: 25, amount: 11250, due: "End of week 12 - final report + retainer recommendation" }
    ],
    paymentTerms: "Net 7 from invoice",
    paymentLink: "#"
  },

  nextSteps: [
    { step: 1, title: "Greenlight the Pilot", description: "Sign the engagement letter and fund the 50% deposit ($22,500) to lock the start date and team allocation. This is the only commitment until end of week 6." },
    { step: 2, title: "Onboarding & Priority Confirmation", description: "Joint session with Fearless catalog + marketing leads. Confirm the 5 priority tracks, walk the clearance Q&A, and lock the Punk Goes anniversary scope. Output: a single-page priority lock document." },
    { step: 3, title: "Vendor + Variant Selection", description: "Vinyl pressing partner, merch vendor, pop-up venue candidates. Sync target lists go live to music supervisors and brand contacts. Owned-channel infrastructure stood up." },
    { step: 4, title: "Drop Calendar Finalized", description: "Lead vinyl drop date, pop-up weekend, creator seeding launch, sync pitch waves, Punk Goes presale opening. All locked on a single calendar shared with Fearless team." },
    { step: 5, title: "30 / 60 / 90 Reviews + Retainer Recommendation", description: "Monthly performance reviews. At week 12: final pilot report and a defensible recommendation on a multi-quarter retainer scoped against the full 30-artist priority roster." }
  ],

  cta: {
    headline: "Run the Pilot. Earn the Roster.",
    body: "Fearless has 78 million monthly listeners and zero outside execution partners dedicated to the catalog. CCD knows the catalog cold, runs the playbook proactively, and prices a single-quarter pilot at a fraction of one good outcome. Greenlight the 90 days. We'll earn the rest of the catalog in front of you.",
    email: "geoff@crowdcontroldigital.com"
  },

  images: {
    hero1: "/images/breaking-benjamin/hero1.png",
    hero2: "/images/breaking-benjamin/hero2.png",
    product: "/images/breaking-benjamin/product.png",
    editorial: "/images/breaking-benjamin/editorial.png",
    texture: "/images/breaking-benjamin/texture.png",
    brutalist: "/images/breaking-benjamin/brutalist.png",
    heroBg: "/images/breaking-benjamin/hero-bg.jpg",
    hero1Caption: "Catalog Reactivation Pilot",
    brutalistCaption: "Fearless Records × Crowd Control Digital",
    ogImage: "/images/breaking-benjamin/og-image.png"
  }
};
