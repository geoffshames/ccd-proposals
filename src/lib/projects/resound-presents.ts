import type { ProjectData } from "../project-context";

export const resoundPresents: ProjectData = {
  accentColor: "#1570FF",

  client: {
    name: "Resound Presents",
    logo: "",
    contactName: "Graham Williams",
    contactRole: "CEO / Executive Talent Buyer",
    contactEmail: "graham@resoundpresents.com",
    industry: "Live Music / Independent Concert Promotion",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "PORTFOLIO INTELLIGENCE : 3-MONTH PILOT",
    tagline:
      "Three months. ~150 ticketed shows across Mohawk, Empire Control Room, The Garage, The Parish, 29th Street Ballroom, Far Out Lounge, and Paper Tiger. CCD's proprietary pacing system turns every See Tickets sale, every Etix scan, and every Eventim transaction into a portfolio-wide intelligence layer — and a per-show paid media budget that flows where the floor needs filling, not where the spreadsheet says to spend.",
    type: "Portfolio Pacing Intelligence + Paid Media",
    startDate: "June 1, 2026",
    endDate: "August 31, 2026",
    duration: "3 Months",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "The System",
    summary:
      "Crowd Control Digital will layer our proprietary pacing system — the same intelligence engine CCD runs for arena and amphitheater tours, adapted to a venue-portfolio promoter — on top of the paid media, ticketing, and CRM infrastructure Resound already runs. We ingest daily ticket counts from See Tickets, Etix, and Eventim into a unified, always-learning pacing model that gets sharper every week the pilot runs. Paid media on Meta and Google compounds under shared retargeting pools, lookalikes seeded from existing CRM segments (Hive newsletter, Laylo, post-merger Heard data), and a templated creative kit that takes hours to launch a new show, not days. Reporting calibrates against what's already in place — every show gets a post-mortem, every venue gets a monthly view, and every dollar Resound spends on media gets traced back to ticket velocity. This is a 3-month pilot designed to prove the always-learning model on a live venue portfolio before scaling.",
    objectives: [
      "Layer CCD's always-learning pacing system on top of Resound's existing ticketing infrastructure — daily ingest across See Tickets, Etix, and Eventim, sell-through prediction per show, and dynamic media-budget recommendations that get sharper every week of the pilot",
      "Compound Resound's existing paid media operation into a portfolio system — shared retargeting pools, lookalike audiences seeded from existing CRM segments (Hive, Laylo, Heard), and per-show campaigns that ship in hours via a templated creative kit",
      "Build a per-venue / per-genre creative kit — Indie at Mohawk, hip-hop at Empire, alt-Latin at Paper Tiger, legacy rock at The Parish — so a new show launch is a 30-minute production, not a 3-day one",
      "Close the reporting loop — pixels, custom conversion events, weekly per-show post-mortems, and a monthly portfolio review that tells Resound which markets, genres, and talent radii are actually media-responsive",
      "Compound the activation that already exists against Resound's first-party data — Hive newsletter, Laylo, and the segmented CRM Heard brought to the merger are real and operational. Whatever audience activation is already wired into Meta + Google, we audit, extend, and layer an always-learning recommendation model on top — never rebuild what already works",
    ],
    subtitle:
      "A 3-month pilot of CCD's portfolio pacing system on Resound's live Austin and San Antonio book — the same intelligence layer CCD runs for arena and amphitheater tours, adapted to a venue-portfolio promoter.",
    imageCaption: "Portfolio Pacing Intelligence + Paid Media",
    stats: [
      {
        value: 150,
        suffix: "+",
        label: "Shows Monitored",
        description:
          "Estimated ticketed shows across Resound's Austin + San Antonio portfolio over the 3-month pilot — every one tracked in our pacing system, every one eligible for dynamic media reallocation",
      },
      { value: 7, label: "Venues" },
      { value: 3, label: "Ticketing Platforms" },
      { value: 3, label: "Month Pilot" },
    ],
  },

  discovery: {
    heading: "What We Found",
    summary:
      "Before pricing this engagement, we audited the full Resound stack — the public-facing dot-com, the See Tickets / Etix / Eventim event surfaces, the Austin and San Antonio venue portfolio post-Heard merger, and the competitive context against C3 / Live Nation. Two findings drove the entire scope of this proposal: paid media across the show portfolio is currently a black box, and the fan-data infrastructure that exists (thanks to Heard) is genre-segmented but not yet leveraged as a retargeting + lookalike layer for paid social. CCD's pacing system plus a templated paid media system addresses both in 90 days.",
    insights: [
      {
        label: "Fragmented Ticketing, No Unified Pacing",
        finding:
          "Resound's shows ticket through at least three platforms depending on venue partner — See Tickets (wl.seetickets.us, primary for Resound-direct shows), Etix (e.g. Fishbone 40th Anniversary), and Eventim (wl.eventim.us, used at Paper Tiger). Each platform reports its own pacing inside its own marketing tools. The opportunity is a single always-learning model that ingests from all three, normalizes across them, and gives the talent + marketing team one portfolio-wide view of which shows are running ahead and which need air cover — sharper every week the pilot runs.",
        source: "resoundpresents.com event-listing audit / homepage event tabs",
      },
      {
        label: "Paid Media Runs Show-by-Show, Not Portfolio-Wide",
        finding:
          "Resound is already running paid media across Meta and Google. The compounding opportunity is treating fifty monthly campaigns as one always-learning portfolio instead of fifty separate ones — shared retargeting pools, shared learnings across genre and venue, and a model that recommends shifting budget from a show that's about to sell out to one three weeks away that needs air cover. Indie promoters typically over-spend on shows where intent signal is loud and under-spend on the ones quietly sliding toward 60% capacity; a portfolio model reverses that.",
        source: "Indie-promoter media-management benchmarks / CCD operating data",
      },
      {
        label: "Existing CRM Is Real — Always-Learning Layer Compounds It",
        finding:
          "Heard Presents brought a segmented fan database to the merger, and Hive and Laylo lifecycle flows are running. We don't presume how deeply that data is already activated against Meta and Google audiences — that's a Week 1 audit conversation, not an assumption. The leverage we're confident about is the always-learning layer on top: portfolio-level audience math, lookalike seeding by genre and venue, and a single learning model that improves the value of whatever activation is already in place.",
        source: "Conversation with Resound team / Heard Presents CRM context",
      },
      {
        label: "Repeat Venue Formats Beg for a Templated Creative Kit",
        finding:
          "The same five or six show formats repeat every month across the venue portfolio — Indie headliner at Mohawk, hip-hop at Empire, alt-Latin at Paper Tiger, legacy rock at The Parish, comedy at Empire Control Room, jam-band at Far Out Lounge. Today every show is built creative-from-scratch. A per-format kit (vertical hero card, Reels storyboard, Stories template, retargeting copy block, day-of urgency variant) collapses launch time from 3 days to 30 minutes and produces media-platform-native creative that actually runs.",
        source: "resoundpresents.com show-mix audit / venue partner mapping",
      },
      {
        label: "The Independent Story Is the Brand Asset",
        finding:
          "Post-Heard merger Resound is meaningfully the largest truly independent concert promoter in Central Texas. C3 Presents has been Live Nation-owned since 2014. Transmission is smaller and more single-genre. The 'independent or indie' identifier is a buying signal among Austin/SA music fans — Reddit and CultureMap commentary repeatedly contrasts indie-venue ticket experiences favorably against the C3/Live Nation pricing playbook. Paid media creative should lean into that positioning, not avoid it.",
        source: "Austin Chronicle merger announcement / CultureMap Austin / Axios Austin Dec 2025",
      },
    ],
    marketContext:
      "Austin's independent venue economics tightened materially in 2025 — Axios Austin reported that indie venues 'face rising costs despite outsized cultural impact,' and CultureMap covered Live Nation deploying a $30 promotional ticket program to apply price pressure across the market. The strategic implication for Resound is straightforward: the next 18 months reward the indie promoters who move from artisanal, show-by-show marketing to portfolio-wide intelligence and disciplined paid efficiency. This pilot is designed to prove that out on the live book before SXSW 2027 planning starts.",
  },

  audience: {
    heading: "Who We're Reaching",
    summary:
      "Resound's audience is Central Texas music fans who explicitly reject the Live Nation pricing playbook — they buy from indie promoters because indie venues feel like home, indie bills feel curated, and indie fees don't ambush them at checkout. This pilot is built to capture them more efficiently, not to redefine who they are.",
    demographics:
      "Austin + San Antonio, age 21–44 core, mix of UT students, tech transplants, lifelong Austinites, Mexican-American culture in San Antonio. Skews 25–35 for indie/alt headliners, older for legacy/Americana, younger for hip-hop and rap shows at Empire and Paper Tiger.",
    demographicCards: [
      { label: "Geographic Core", value: "Austin + San Antonio", detail: "+ pull radius into Houston, San Marcos, Round Rock, Cedar Park" },
      { label: "Age Range", value: "21–44 core", detail: "25–35 peak for indie/alt; 18–28 for hip-hop at Empire/Paper Tiger" },
      { label: "Identifier", value: "Indie-loyal", detail: "'Independent' is a positive buying signal vs. C3/Live Nation" },
      { label: "Show Cadence", value: "1–3/month", detail: "Recurring repeat-buyers anchor portfolio retargeting" },
    ],
    personas: [
      {
        name: "The Mohawk Regular",
        ageRange: "26–38",
        description:
          "Lives east of I-35, has a Mohawk patio show on the calendar most weekends, follows the venue and the promoter on Instagram, and discovers shows through do512 or a friend's story. Buys 1–3 tickets a month and treats indie show-going as identity, not entertainment.",
        traits: ["Multi-Show Repeat Buyer", "IG-Native", "Indie Loyal", "Patio-First"],
      },
      {
        name: "The Paper Tiger Heavy",
        ageRange: "21–32",
        description:
          "San Antonio core, Mexican-American culture-fluent, equally at home with alt-Latin, post-hardcore, and underground hip-hop. Discovers shows on Instagram and TikTok, drives in from outside SA proper, and is the primary growth audience for the SA leg of the pilot.",
        traits: ["TikTok-Native", "SA Local", "Genre-Fluid", "Drives To Shows"],
      },
      {
        name: "The Returner",
        ageRange: "32–44",
        description:
          "Was at every Margin Walker show 10 years ago, has kids now, but still picks 6–10 shows a year — usually legacy bills (Fishbone 40th, indie reunions, Americana headliners at The Parish). High purchase intent, low frequency, almost never targeted with the right creative because the system treats every show like a new acquisition campaign.",
        traits: ["Legacy Fan", "High-Intent / Low-Frequency", "Email Reachable", "Underserved"],
      },
    ],
    psychographics: [
      "Indie-loyal as identity — being an 'independent music' person is a positive social marker, not just a music-taste signal",
      "Cynical about Ticketmaster / Live Nation fees — 'the $25 ticket becomes $42 at checkout' is a known and resented experience",
      "Loyal to specific venues — Mohawk patio, Empire backyard, Paper Tiger SA function as third places, not just rooms",
      "Discover via word-of-mouth and IG before they discover via paid ads — ads work, but they work better when they reinforce signal the audience is already getting socially",
    ],
    painPoints: [
      "Junk fees at checkout — fans repeatedly express that posted ticket prices and final purchase prices feel deceptive",
      "Show announcement fatigue — fans only find out a show sold out from a friend, not from an alert from the venue or promoter they already buy from",
      "Multiple ticketing accounts to navigate the same scene — having to maintain a See Tickets account, an Etix account, and an AXS account just to attend Texas indie shows",
      "Parking, downtown access, and gentrification of venue districts — not problems Resound creates, but problems the marketing has to acknowledge to feel honest",
    ],
    purchaseTriggers: [
      "A friend going to the same show — peer-confirmed buying intent is the single strongest trigger; retargeting and social-proof creative leverage this directly",
      "A strong support act on the bill — the support act often closes the sale, and creative that surfaces support acts (not just headliner) converts harder",
      "A 'last time in Austin / SA' framing — scarcity language around tour routing closes returners",
      "Presale window with a code — even a low-friction presale gate creates a loyalty signal the audience interprets as access",
    ],
    platforms: [
      { name: "Instagram", description: "Primary discovery channel. Venue accounts (@mohawkaustin, @empirecontrolroom, @papertigersatx) and promoter accounts work as parallel signal layers. Reels and Stories are where show announcements actually land — feed posts are secondary." },
      { name: "TikTok", description: "Fastest-growing top-of-funnel for hip-hop, alt-Latin, and viral indie acts. Underutilized as a paid surface for Resound's portfolio today — paid creative built TikTok-native (not Reels-cross-posted) is one of the highest-leverage media bets in this pilot." },
      { name: "do512 / NowPlayingAustin", description: "City-level event aggregators with their own search and email behavior. Resound shows already syndicate here — the marketing job is to shape how they're presented and to capture click-through traffic into Resound-owned audiences." },
      { name: "Reddit (r/Austin, r/SanAntonio)", description: "Community sanity-check and authentic word-of-mouth layer. Not a paid surface — but the sentiment Resound earns here shapes whether word-of-mouth carries the show to sellout or stalls at 70%." },
    ],
    quotes: [
      { text: "Austin's indie venues are getting squeezed, but the shows are still the best in the country.", source: "Axios Austin / December 2025" },
      { text: "If C3 books it I assume it's overpriced. Resound and the venues are where I actually go.", source: "Paraphrased r/Austin sentiment / 2025" },
      { text: "I'd rather see five 200-cap club shows than one ACL set. The bills are better and you can actually hear.", source: "Paraphrased r/Austin sentiment / 2025" },
    ],
  },

  targets: [
    { metric: "Cost Per Ticket Sold (Paid Media)", value: "−25%", context: "Reduce blended paid-media cost per ticket sold across the portfolio by 25% vs. baseline by the end of the pilot — driven by always-learning budget reallocation, retargeting against existing CRM audiences, and shared learnings across the portfolio." },
    { metric: "Soft-Show Sell-Through Lift", value: "+15%", context: "Lift end-of-cycle sell-through on shows flagged 'risk' by the pacing system by 15% vs. matched-prior baseline, by reallocating media budget into them inside the prediction window." },
    { metric: "Owned-Audience Growth", value: "+20%", context: "Grow the Resound-side owned audience (Hive newsletter + Laylo subscribers + post-merger Heard segments) by 20% over the pilot window — driven by paid-social capture surfaces, post-purchase activation, and lookalike-seeded prospecting that compounds whatever flows are already running." },
    { metric: "Creative Production Time", value: "10× faster", context: "Per-show paid creative production time drops from days to under an hour via the templated per-format kit — measured against Resound's current production benchmark." },
  ],

  competitive: {
    summary:
      "Resound is the largest truly independent concert promoter in Central Texas — the only credible alternative to Live Nation-owned C3 in the Austin/SA market. The book is real, the venue partnerships are real, the talent buying is best-in-class. Where the operation can leapfrog the field is on portfolio-level marketing infrastructure: pacing intelligence across the full book, paid media as a unified system rather than show-by-show campaigns, and creative production speed. None of the named competitors are running this stack today.",
    competitors: [
      { name: "C3 Presents — Austin / Live Nation-owned", strength: "Massive scale, ACL Festival pipeline, full Live Nation media + ticketing infrastructure, deep talent buying budgets", gap: "The Live Nation playbook — premium pricing, generic activation, no local indie credibility. Resound's brand asset is being the not-C3 promoter; the marketing job is to lean into that identity instead of competing on it." },
      { name: "Transmission Events — Austin / Independent", strength: "Established Mohawk relationship via co-owner James Moody, indie cred, focused genre lane", gap: "Smaller staff, no San Antonio footprint, narrower genre coverage. Resound out-scales Transmission across the full Texas indie market — but only if portfolio efficiency catches up to portfolio breadth." },
      { name: "Stubb's Bar-B-Q (in-house promotions) — Austin", strength: "Iconic outdoor amphitheater, strong national booking, direct venue-to-audience marketing", gap: "Single-venue, single-format leverage. No multi-venue pacing, no portfolio-wide retargeting pool. Resound's structural advantage is the venue spread itself — the pilot turns that spread into a media advantage." },
      { name: "Pegstar Concerts — Houston / Independent", strength: "Dominant Houston indie promoter, frequent co-promoter on touring routes through Texas", gap: "Not a direct Austin/SA competitor — more often a partner. The opportunity Pegstar's existence highlights is the whitespace for a 'Texas-wide indie' marketing layer, which Resound is positioned to claim first." },
    ],
  },

  tiers: {
    sectionNumber: "07",
    heading: "Scope Flexibility",
    subheading: "The pilot ships at three scope tiers. The Standard tier is the recommended path; the Light tier is a tighter pilot focused on a sub-portfolio of venues; the Plus tier folds in email/SMS infrastructure and heavier creative production from day one.",
    footnote: "All three tiers share the same pacing-system deployment and reporting commitments. Pricing is monthly retainer; ad spend is billed separately to platforms.",
    tiers: [
      { label: "Light Pilot", name: "Sub-Portfolio Focus", tagline: "Prove the model on a focused slice of the book.", price: "$5,000", priceSuffix: "/mo", priceContext: "× 3 months · $15,000 total", includes: ["Pacing system across 1–2 lead venues (e.g. Mohawk + Paper Tiger)", "Meta paid media management on the focused slice", "Top 3 per-format creative kits", "Bi-weekly portfolio review + per-show post-mortems", "Final pilot performance audit + scale readout"] },
      { label: "Standard Pilot", name: "Full Portfolio", tagline: "The recommended path — full pacing-system coverage and portfolio paid media.", price: "$7,500", priceSuffix: "/mo", priceContext: "× 3 months · $22,500 total", includes: ["Pacing system across the full Resound venue portfolio", "Meta + Google paid media management on every show", "Top 6 per-format creative kits", "Weekly portfolio reviews + per-show post-mortems", "Mid-pilot half-day on-site strategy review", "Monthly portfolio review + final pilot performance audit"], featured: true },
      { label: "Plus Pilot", name: "Full Portfolio + Email/SMS", tagline: "Adds the owned-audience layer — Klaviyo + Attentive build inside the pilot window.", price: "$10,000", priceSuffix: "/mo", priceContext: "× 3 months · $30,000 total", includes: ["Everything in Standard", "Klaviyo or Attentive build — capture surfaces on resoundpresents.com + post-purchase flows", "Heavier creative production (additional formats, custom variants)", "TikTok paid layer added to Meta + Google", "Weekly executive readout to Graham + ops lead"] },
    ],
  },

  timelineHeading: "Pilot Roadmap",
  timelineSubheading: "A focused 3-month pilot from infrastructure stand-up through full portfolio execution and a credible go/no-go readout for scaling — every phase designed to prove the model on live Resound shows, not on slideware.",
  timelineImageCaption: "3 Months / 4 Phases / 7+ Venues",

  timeline: [
    { phase: "Stand-Up & Integration", week: "Weeks 1–3", date: "June 2026", status: "upcoming" as const, tasks: ["Integrate CCD's pacing system on top of Resound's existing ticketing infrastructure — ingest daily ticket counts from See Tickets (wl.seetickets.us), Etix, and Eventim (wl.eventim.us / Paper Tiger), normalize across platforms, calibrate the always-learning sell-through prediction model and risk-tier alert thresholds against historical data", "Audit the existing CRM activation (Hive newsletter + Laylo + Heard segments) — document what's already wired into Meta + Google, identify gaps, extend custom-audience and lookalike coverage by genre and venue where useful, and audit retargeting pixel coverage across resoundpresents.com and the See Tickets event pages without disturbing what already works", "Calibrate the existing paid media architecture — audit Meta and Google ad accounts, augment pixel + CAPI / GA4 server-side tracking where coverage is partial, normalize conversion events across ticketing platforms, and build the baseline reporting dashboards the pacing system feeds into", "Per-format creative kit v1 — first templated kits for the top 4 recurring formats (Indie at Mohawk, hip-hop at Empire, alt-Latin at Paper Tiger, legacy rock at The Parish): vertical hero, Reels storyboard, Stories template, retargeting copy block, day-of urgency variant"] },
    { phase: "Live Portfolio Run — Month 1", week: "Weeks 4–6", date: "Mid June – Early July 2026", status: "upcoming" as const, tasks: ["Pacing system goes live across the full active book — daily pacing reports, weekly portfolio review with Resound talent buying + marketing team, first round of dynamic media reallocation recommendations", "Paid media campaigns running on every show — Meta + Google, templated creative kits, retargeting against CRM-seeded audiences; soft shows get budget surge, runaway shows get spend trimmed", "Per-show post-mortems begin — 1-page debrief on every show that closes inside the pilot window: pacing-vs-actual, media spend efficiency, which creative formats moved tickets, what to keep / cut next month", "Creative kit expansion — add the next 2 formats (comedy at Empire Control Room, jam-band at Far Out Lounge) based on the portfolio mix the talent team is actually booking"] },
    { phase: "Live Portfolio Run — Month 2", week: "Weeks 7–9", date: "July 2026", status: "upcoming" as const, tasks: ["Calibration pass — by end of Month 2 the pacing system has 4–6 weeks of live data; we recalibrate the prediction model against actual sell-through and tighten the risk-tier thresholds", "Retargeting layer matures — the in-pilot pixel + CRM audience pool is now large enough to drive prospecting via lookalikes; new shows launching in Month 2 ride on top of an audience base that didn't exist at the start of the pilot", "First mid-pilot strategy review — half-day on-site with Resound team. What's working, what's not, what changes for the final month, and what the post-pilot scale plan should look like", "Reporting matures into a per-venue view — Mohawk vs Empire vs Paper Tiger month-1 efficiency comparison, talent-radius response curves, genre-level paid efficiency benchmarks"] },
    { phase: "Live Run + Scale Readout", week: "Weeks 10–13", date: "August 2026", status: "upcoming" as const, tasks: ["Final live month with full pacing-system + portfolio paid media + retargeting + templated creative kits running at steady state", "Pilot performance audit — paid media efficiency vs Month 1 baseline, soft-show sell-through lift, pacing-system prediction-vs-actual accuracy, time-to-launch metrics on creative production", "Scale readout — formal go / no-go and cost-to-scale recommendation for the full Resound book, including SXSW 2027 implications, venue-coverage expansion options, and recommended paid-media ramp curve", "Handoff package — full pacing-system access for Resound staff, documentation, dashboards, and recommended next-quarter SOWs at the higher and lower scope tiers"], ongoing: true },
  ],

  deliverablesSubheading: "Every deliverable is built to prove portfolio efficiency on live Resound shows in a 3-month window — pacing intelligence, paid media management, a templated creative system, and the closed-loop reporting that makes the model defensible at scale.",

  deliverables: [
    { category: "Pacing System", icon: "●", items: [
      { name: "Always-Learning Pacing Layer", quantity: "Full portfolio", description: "CCD's proprietary internal pacing platform layered on top of Resound's existing ticketing infrastructure — ingesting daily counts from See Tickets, Etix, and Eventim across all 7+ venue partners, with sell-through prediction, risk-tier classification, and dynamic media-allocation recommendations that get sharper every week of the pilot" },
      { name: "Weekly Portfolio Review", quantity: "12 reviews", description: "Weekly 30-minute call with Resound's talent buying + marketing team — pacing report walkthrough, soft-show flagging, media reallocation decisions, and any market-level intelligence relevant to the upcoming on-sales" },
      { name: "Pilot Calibration + Scale Readout", quantity: "1", description: "End-of-pilot prediction-vs-actual audit, paid-media efficiency review, and a formal cost-to-scale recommendation with SOW options at higher and lower scope tiers for ongoing engagement post-August" },
    ] },
    { category: "Paid Media Management", icon: "▶", items: [
      { name: "Meta Advertising (Facebook + Instagram)", quantity: "3 months", description: "Per-show paid campaigns across Facebook and Instagram — retargeting against CRM-seeded audiences, lookalike prospecting by genre and venue, dynamic budget reallocation driven by pacing-system flags. Ad spend billed directly to Meta" },
      { name: "Google Ads (Search + YouTube)", quantity: "3 months", description: "Brand and competitor search capture (e.g. 'Mohawk Austin shows', 'Paper Tiger SA tickets'), YouTube discovery campaigns for high-priority shows, and remarketing across the Display network. Ad spend billed directly to Google" },
      { name: "Per-Show Campaign Setup", quantity: "150+ campaigns", description: "Every Resound show in the pilot window gets a dedicated Meta + Google campaign — templated structure, audience layers, conversion tracking, and pacing-driven budget logic. Campaigns ship in hours via the per-format creative kit" },
    ] },
    { category: "Creative System", icon: "◆", items: [
      { name: "Per-Format Creative Kits", quantity: "6 formats", description: "Templated creative kits for the recurring show formats — Indie / Mohawk, hip-hop / Empire, alt-Latin / Paper Tiger, legacy rock / The Parish, comedy / Empire Control Room, jam-band / Far Out Lounge. Each kit includes vertical hero card, Reels storyboard, Stories template, retargeting copy block, and a day-of urgency variant" },
      { name: "Per-Show Creative Production", quantity: "150+ shows", description: "Every show in the pilot window gets a paid-media-ready creative pack assembled from the format kit — usually under an hour of production per show vs the current days-long benchmark" },
      { name: "Format Kit Expansion", quantity: "Ongoing", description: "New formats added to the kit library as the talent team books outside the existing 6 templates — the kit library is a living asset Resound owns at the end of the pilot" },
    ] },
    { category: "Reporting & Analytics", icon: "■", items: [
      { name: "Pixel + Conversion Calibration", quantity: "1 build", description: "Audit and augment Meta Pixel + CAPI, Google tag + GA4, and server-side conversion event mapping across resoundpresents.com and partner ticketing event pages — closing gaps where coverage is partial so every paid dollar gets attributed to ticket velocity, not vibes" },
      { name: "Per-Show Post-Mortems", quantity: "150+ debriefs", description: "1-page debrief on every show that closes inside the pilot — pacing-vs-actual, paid-media efficiency, which creative format moved tickets, recommendations for the next show in the same lane" },
      { name: "Monthly Portfolio Reviews", quantity: "3 reviews", description: "End-of-month portfolio readout — venue-by-venue efficiency, genre-level paid response, talent-radius curves, and which dollars Resound should keep, cut, or reallocate next month" },
      { name: "Pilot Performance Audit", quantity: "1", description: "Final cross-pilot review with the full data set — pacing-system prediction accuracy, paid-media efficiency lift, soft-show sell-through movement, and creative production time deltas vs baseline" },
    ] },
  ],

  scope: {
    subheading: "Everything included in this 3-month pilot — and where the boundaries are. Scope is intentionally tight so the model is provable on live shows in 90 days; a heavier scope tier (email/SMS infrastructure, deeper creative production) is available for the post-pilot scale phase.",
    included: [
      "Always-learning pacing-system deployment layered on top of existing ticketing infrastructure, with daily monitoring across See Tickets, Etix, and Eventim throughout the pilot",
      "Paid media strategy, campaign setup, and ongoing optimization across Meta (Facebook + Instagram) and Google (Search + YouTube + Display) for every show in the pilot window",
      "Templated creative kits for the top 6 recurring show formats, plus per-show creative production assembled from the kits",
      "Calibration of pixel + GA4 + server-side conversion infrastructure across resoundpresents.com and partner ticketing event pages — augmenting what exists rather than replacing it",
      "Weekly portfolio reviews, per-show post-mortems, monthly venue-level reports, and a final cross-pilot performance audit with scale recommendations",
      "Audit and extension of custom-audience and lookalike configuration in Meta + Google sourced from existing Hive newsletter, Laylo, and Heard CRM segments — we extend whatever activation is already running, never rebuild it",
      "Direct collaboration with Resound's talent buying + marketing team, including a mid-pilot half-day on-site strategy review",
    ],
    excluded: [
      "Email and SMS marketing build-out (Klaviyo / Attentive flows, on-site capture surfaces) — available as a Month-2+ add-on or in the post-pilot scale phase",
      "Music video, original photo / video shoots, and band-supplied creative re-edits beyond the per-format kit (available as add-on — scoped and quoted separately)",
      "Influencer and creator marketing campaigns (available as add-on)",
      "Press / publicity / radio promotion — coordinated alongside but managed by Resound's existing teams",
      "Ad spend — Meta and Google budgets are billed directly to platforms. CCD manages campaigns and optimization included in the retainer",
      "Ticketing platform changes or migrations — the pacing system works on top of See Tickets, Etix, and Eventim as they exist; ticketing-stack consolidation is out of scope",
    ],
  },

  quote: {
    model: "retainer" as const,
    currency: "USD",
    lineItems: [
      { name: "Pacing System (Portfolio Pacing + Weekly Reviews)", description: "Daily ticket pacing across See Tickets, Etix, and Eventim, sell-through prediction, risk-tier flagging, and weekly portfolio review", price: 2750, recurring: true },
      { name: "Paid Media Management (Meta + Google)", description: "Campaign management and optimization across Meta and Google for every show in the pilot window — ad spend billed separately to platforms", price: 2500, recurring: true },
      { name: "Creative System (Per-Format Kits + Per-Show Production)", description: "Templated creative kits for the top 6 recurring show formats plus per-show paid creative assembled from the kits", price: 1500, recurring: true },
      { name: "Reporting & Analytics", description: "Pixel + GA4 + server-side conversion infrastructure, per-show post-mortems, monthly portfolio review, and final pilot performance audit", price: 750, recurring: true },
    ],
    subtotal: 7500,
    discount: { label: "", percentage: 0, amount: 0 },
    total: 22500,
    paymentSchedule: [
      { milestone: "Month 1 (June)", percentage: 33.33, amount: 7500, due: "Upon approval" },
      { milestone: "Month 2 (July)", percentage: 33.33, amount: 7500, due: "July 1, 2026" },
      { milestone: "Month 3 (August)", percentage: 33.34, amount: 7500, due: "August 1, 2026" },
    ],
    paymentTerms: "7 days from invoice. No setup fee on this pilot.",
    paymentLink: "#",
  },

  nextSteps: [
    { step: 1, title: "Approve & Sign", description: "Pick a scope tier (Light / Standard / Plus), countersign, and we send a formal agreement and the Month 1 invoice." },
    { step: 2, title: "Onboarding Questionnaire", description: "Short intake covering See Tickets / Etix / Eventim API or report access, Meta + Google ad account permissions, GA4 access, and the Heard CRM connection details." },
    { step: 3, title: "Pacing System Activation", description: "Inside the first 2 weeks the pacing system is ingesting from all three ticketing platforms with full venue coverage and the prediction model is calibrated on the in-window book." },
    { step: 4, title: "Creative Kits + Campaigns Go Live", description: "Per-format kits land in Week 2; the first wave of paid campaigns is in-flight by Week 3 with retargeting and lookalikes seeded from the existing CRM." },
    { step: 5, title: "Mid-Pilot Strategy Review", description: "Half-day on-site with the Resound team at Week 6 — what's working, what's not, what changes in the final month, and what the post-pilot scale plan should look like." },
  ],

  cta: {
    headline: "Three months. The full venue portfolio. One pacing engine that turns ~150 shows into a single intelligence layer.",
    body: "Resound is the largest truly independent concert promoter in Central Texas. The book is real, the venues are unmatched outside C3, the talent buying is best-in-class, and the marketing infrastructure (Hive, Laylo, paid media accounts, segmented CRM post-merger) is already running. What CCD adds is the always-learning portfolio layer that compounds those assets — pacing intelligence across the full book, smarter audience math against the data Resound already owns, and creative production speed. This pilot is the cheapest, fastest way to prove the layer pays for itself on a live book.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/resound-presents/hero1.png",
    heroBg: "/images/resound-presents/hero-bg.jpg",
    hero2: "/images/resound-presents/hero2.png",
    product: "/images/resound-presents/product.png",
    editorial: "/images/resound-presents/editorial.png",
    texture: "/images/resound-presents/texture.png",
    brutalist: "/images/resound-presents/brutalist.png",
    hero1Caption: "Portfolio Pacing Intelligence + Paid Media",
    brutalistCaption: "Resound Presents × Crowd Control Digital",
    ogImage: "/images/resound-presents/og-image.png",
  },
};
