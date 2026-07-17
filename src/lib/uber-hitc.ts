// ─────────────────────────────────────────────────────────────────────────────
// UBER × HEAD IN THE CLOUDS LA 2026 — single source of truth
// Every dollar figure, date, phase, source, and copy block lives here.
// Components must not hardcode numbers; read from this module.
// ─────────────────────────────────────────────────────────────────────────────

export const META = {
  slug: "hitc-la-uber-26",
  title: "Uber × Head In The Clouds — Partnership Awareness Campaign",
  client: "88rising",
  partner: "Uber",
  festival: "Head In The Clouds Los Angeles 2026",
  festivalDateISO: "2026-08-08T12:00:00-07:00",
  festivalDateLabel: "August 8, 2026",
  venue: "Brookside at the Rose Bowl, Pasadena, CA",
  proposalDate: "July 17, 2026",
  preparedBy: "Geoff Shames, Co-Founder",
  agency: "Crowd Control Digital",
  agencyEmail: "geoff@crowdcontroldigital.com",
  canonical: "https://proposal.crowdcontroldigital.com/hitc-la-uber-26",
  ogImage: "/images/uber-hitc-2026/og-image.png",
  eventCode: "[EVENT CODE]",
  offerDetails: "[OFFER DETAILS]",
  thesis:
    "The festival does not start at the gates. It starts when the door closes and the city starts moving.",
} as const;

// Money ──────────────────────────────────────────────────────────────────────
export const MONEY = {
  media: 15000,
  feeRate: 0.15,
  fee: 2250,
  total: 17250,
} as const;

// Campaign platform ──────────────────────────────────────────────────────────
export const PLATFORM = {
  name: "THE RIDE IS THE FIRST STAGE",
  idea: "Make the journey to Brookside part of the show: cloud-wrapped Ubers, an arrival that feels like a stage entrance, and a code that makes the smart choice the easy one.",
  rationale: [
    "The most documented pain point of the HITC day is not the music. It is the approach and the exit. The partnership fixes the worst moment and brands the fix.",
    "Both brands already speak the same language: movement, discovery, arrival. The word stage belongs to both of them.",
    "A code turns awareness into action and action into a readable signal, without pretending a $15,000 flight can attribute every ride.",
  ],
  hierarchy: [
    "Uber and Head In The Clouds are moving together.",
    `Use ${META.eventCode} for ${META.offerDetails} on your ride to or from the festival.`,
    "Follow the clouds. The pickup experience is part of the festival.",
  ],
  territoriesConsidered: [
    { name: "The festival starts when you get in", verdict: "Close, but passive. The car is a container, not a stage." },
    { name: "Your ride to the clouds", verdict: "Pretty, but leans on the festival name and gives Uber no role." },
    { name: "The ride is the first stage", verdict: "WINNER. Owns both brands, turns transit into programming, survives every format from a 6-second cut to a vehicle wrap." },
  ],
} as const;

// Media flight ───────────────────────────────────────────────────────────────
export type Platform = "Meta" | "TikTok";
export const SPLIT: { platform: Platform; spend: number; pct: number; role: string }[] = [
  { platform: "Meta", spend: 8250, pct: 55, role: "Event discovery, retargeting pools, older end of the fandom, link-driven code detail views." },
  { platform: "TikTok", spend: 6750, pct: 45, role: "Fandom-native creative, music discovery reach, KATSEYE and XG community adjacency." },
];

export const PHASES = [
  {
    id: "p1",
    name: "Partnership Reveal",
    dates: "Jul 20 – Jul 27",
    objective: "Announce the partnership. Put the code in hand early.",
    audience: "LA metro music-festival interest stacks, 88rising and artist-adjacent engagers, 16–34.",
    formats: "Meta: Reels + Stories reveal units. TikTok: Spark-style vertical announcement cut.",
    message: "Uber and Head In The Clouds are moving together.",
    cta: `Code detail view: ${META.eventCode}`,
    metaSpend: 2062.5,
    tiktokSpend: 1687.5,
    pct: 25,
    kpi: "Reach + 3s video views",
    kpi2: "Code detail page views",
    rationale: "Front-load the news while ticket urgency is live. Broad prospecting, frequency cap 2/wk.",
  },
  {
    id: "p2",
    name: "Culture + Utility",
    dates: "Jul 28 – Aug 4",
    objective: "Make the ride feel like part of the festival. Teach the plan.",
    audience: "Retarget P1 viewers and engagers; lookalikes on festival site visitors; K-pop and Asian pop interest clusters.",
    formats: "Meta: feed carousels (the plan: code, pickup, exit). TikTok: POV 'ride to the clouds' creative.",
    message: "The ride is the first stage.",
    cta: `Save the code: ${META.eventCode}`,
    metaSpend: 3300,
    tiktokSpend: 2700,
    pct: 40,
    kpi: "ThruPlay / 6s views",
    kpi2: "Engagement rate",
    rationale: "Heaviest weight while planning behavior peaks. Rotate 3–4 creatives to hold frequency under 4.",
  },
  {
    id: "p3",
    name: "Final Push + Day-Of",
    dates: "Aug 5 – Aug 8",
    objective: "Convert intent into used codes. Own arrival and departure day.",
    audience: "Warm retargeting, ticket-interest engagers, geo-fenced Pasadena day-of expansion.",
    formats: "Meta: Stories reminders + countdown. TikTok: day-of 'how to find us' vertical.",
    message: "Follow the clouds. Your ride is ready.",
    cta: `Ride with ${META.eventCode}`,
    metaSpend: 2887.5,
    tiktokSpend: 2362.5,
    pct: 35,
    kpi: "Code saves / link clicks",
    kpi2: "Frequency-managed reach",
    rationale: "Compressed burst with day-of geo layer. Stop-loss pacing so the final 48 hours do not starve.",
  },
] as const;

export const FLIGHT_NOTES = [
  "Geography: LA metro core with SoCal drive-market layering; Pasadena radius tightened in Phase 3.",
  "Prospecting vs retargeting: roughly 70/30 opening, inverting toward warm pools by Phase 3.",
  "Frequency: planned average 3.5 across the flight; caps 2/wk prospecting, 4/wk warm.",
  "Learning period: awareness objectives clear Meta's learning phase comfortably at this budget; TikTok minimums ($50/day campaign) are trivially met.",
  "Pacing: daily checks, creative swap when CTR decays past 30% from launch baseline.",
] as const;

// Reach scenarios — formula shown on site: impressions = spend ÷ CPM × 1000
export const REACH = {
  frequency: 3.5,
  scenarios: [
    { label: "Low", cpm: 14, note: "Conservative: premium-season competitive pressure." },
    { label: "Expected", cpm: 9, note: "Blended tracker midpoint for July/August awareness buying." },
    { label: "High", cpm: 6, note: "Efficient: matches Gupta tracker lows for summer CPMs." },
  ],
} as const;

// Benchmarks ─────────────────────────────────────────────────────────────────
export const BENCHMARKS = [
  {
    brand: "Uber One presents All Points East",
    event: "All Points East, London",
    year: "2024–present",
    what: "Uber moved from vendor to festival co-author: presenting partnership of an AEG festival with member access and benefits baked in.",
    borrow: "Treat Uber as an experience layer with a point of view, not a logo in the footer.",
    avoid: "Naming-rights language. This partnership is approved, but its title is not public.",
    source: "aegeurope.com press centre",
    url: "https://aegeurope.com/press-centre/uber-one-takes-to-the-main-stage-for-all-points-east-as-new-presenting-partner/",
  },
  {
    brand: "Lyft × Lollapalooza ride credits",
    event: "Lollapalooza, Chicago",
    year: "2025",
    what: "$10 ride credit for trips departing Grant Park, distributed as a simple festival code.",
    borrow: "The code as the campaign's handshake: simple, useful, measurable.",
    avoid: "A code with no physical presence. Credit alone is invisible at the venue.",
    source: "Lollapalooza support + campaign socials",
    url: "https://support.lollapalooza.com/hc/en-us/articles/4402078175636-How-do-I-get-to-the-festival",
  },
  {
    brand: "Uber Zone at Rolling Loud",
    event: "Rolling Loud",
    year: "2018",
    what: "Dedicated branded pickup zone built for reliability under post-headliner surge conditions.",
    borrow: "A recognizable, staffed, wayfinding-lit pickup point is the product. Reliability is the message.",
    avoid: "Passing costs to fans. The 2018 zone carried a $3.50 surcharge; this campaign should remove friction, not toll it.",
    source: "Uber newsroom blog",
    url: "https://www.uber.com/us/en/blog/ride-rolling-loud-2018/",
  },
  {
    brand: "Coachella rideshare operations",
    event: "Coachella, Indio",
    year: "Annual",
    what: "Codified rideshare zone (Ave 49 & Monroe, 11am–3am) with published hours and peak-wait warnings.",
    borrow: "Publish the plan like a lineup: zone maps, hours, and honest peak guidance inside creative.",
    avoid: "Anonymous operations. A zone nobody can find is a zone that fails at 12:30am.",
    source: "coachella.com/getting-here",
    url: "https://www.coachella.com/getting-here",
  },
] as const;

// Friction map ───────────────────────────────────────────────────────────────
export const JOURNEY = [
  { stage: "Discovery", friction: "Fans find the lineup; logistics are an afterthought.", role: "Reveal the partnership inside the announcement moment.", heat: 1 },
  { stage: "Ticket purchase", friction: "Pass bought. The 'how do we get there' thread starts in group chats.", role: "Code enters the conversation early: save it now.", heat: 2 },
  { stage: "Planning", friction: "Parking costs $45–$95. Reddit debates rideshare vs drive. Uncertainty spikes.", role: "Utility creative answers the question before it is asked.", heat: 3 },
  { stage: "Booking", friction: "Surge anxiety and zone confusion are the documented norm at Rose Bowl area shows.", role: "The code plus a published pickup plan replaces guesswork.", heat: 3 },
  { stage: "Pickup", friction: "Old Town drop zones and shuttle transfers are the status quo for major events here.", role: "A branded, findable pickup experience, subject to final venue ops approval.", heat: 2 },
  { stage: "Arrival", friction: "85–90°F heat, long walks, gate funneling were 2025's top complaints.", role: "Arrival becomes a stage entrance: shaded, signed, unmistakably Uber × HITC.", heat: 3 },
  { stage: "Festival", friction: "Inside the gates, the day delivers.", role: "Branded vehicles and content keep the partnership visible all day.", heat: 0 },
  { stage: "Exit + return", friction: "Post-headliner crush: the single worst moment of the 2025 edition.", role: "The departure is the campaign's closing scene: clear, lit, coded, calm.", heat: 3 },
] as const;

// Sources ledger (site-facing; estimates labeled) ────────────────────────────
export const SOURCES = [
  { claim: "Festival date, venue, lineup, pass pricing, parking add-ons", source: "la.hitcfestival.com (official)", url: "https://la.hitcfestival.com/", date: "Retrieved Jul 17, 2026", type: "Fact" },
  { claim: "KATSEYE headlines; first HITC performance; on-sale March 26", source: "Rolling Stone", url: "https://www.rollingstone.com/music/music-news/head-in-the-clouds-music-festival-2026-katseye-headliner-1235536031/", date: "Mar 23, 2026", type: "Fact" },
  { claim: "2025 edition: exit congestion, heat, shade and experience gaps", source: "Grimy Goods review", url: "https://www.grimygoods.com/2025/06/04/5-things-i-loved-about-the-head-in-the-clouds-music-festival-and-5-things-that-need-improvement/", date: "Jun 4, 2025", type: "Fact (press review)" },
  { claim: "75,000+ attendance across 2025's two days", source: "Grimy Goods review", url: "https://www.grimygoods.com/2025/06/04/5-things-i-loved-about-the-head-in-the-clouds-music-festival-and-5-things-that-need-improvement/", date: "Jun 4, 2025", type: "Press-reported figure" },
  { claim: "Rose Bowl area events route rideshare to Old Town Pasadena zones; Parsons shuttle", source: "Foothill Transit + venue guides", url: "https://www.foothilltransit.org/articles/rose-bowl-shuttle-service", date: "Retrieved Jul 17, 2026", type: "Fact" },
  { claim: "Uber Advertising: 199M+ monthly consumers, Creative Studio, Journey Ads, JourneyTV", source: "uber.com/us/en/advertising", url: "https://www.uber.com/us/en/advertising/", date: "Retrieved Jul 17, 2026", type: "Fact (vendor-reported)" },
  { claim: "JourneyTV ~98% completion, ~120s average view", source: "Uber blog", url: "https://www.uber.com/us/en/blog/uber-advertising-launches-journeytv-presents-with-premium-content-partners/", date: "Retrieved Jul 17, 2026", type: "Vendor-reported metric" },
  { claim: "TikTok users 74% more likely to discover and share new music on short-form video", source: "TikTok × Luminate Music Impact Report", url: "https://newsroom.tiktok.com/en-us/tiktok-and-luminate-release-latest-music-impact-report", date: "Feb 13, 2025", type: "Fact (platform study)" },
  { claim: "45% of US TikTok users pay to attend live music events", source: "Business Insider on TikTok-commissioned study", url: "https://www.businessinsider.com/tiktok-music-survey-users-more-likely-to-attend-concerts-stream-2023-11", date: "Nov 2023", type: "Fact (press on study)" },
  { claim: "Meta CPM band $6–$14 for this plan", source: "Gupta Media CPM tracker + 2026 aggregators", url: "https://www.guptamedia.com/social-media-ads-cost", date: "Jun 27, 2025", type: "Estimate" },
  { claim: "TikTok CPM band $6–$14 for this plan", source: "Gupta Media tracker; Digital Applied 2026", url: "https://www.digitalapplied.com/blog/tiktok-ads-benchmarks-2026-cpc-cpm-cvr-industry", date: "2026", type: "Estimate" },
  { claim: "TikTok minimums: $50/day campaign, $20/day ad group", source: "TikTok Ads Help", url: "https://ads.tiktok.com/help/article/budget", date: "Retrieved Jul 17, 2026", type: "Fact" },
  { claim: "Uber One presents All Points East (presenting partner since 2024)", source: "AEG Europe press centre", url: "https://aegeurope.com/press-centre/uber-one-takes-to-the-main-stage-for-all-points-east-as-new-presenting-partner/", date: "2023–2024", type: "Fact" },
  { claim: "Uber Zone at Rolling Loud 2018 with $3.50 surcharge", source: "Uber newsroom", url: "https://www.uber.com/us/en/blog/ride-rolling-loud-2018/", date: "2018", type: "Fact" },
  { claim: "Coachella rideshare zone location and hours", source: "coachella.com/getting-here", url: "https://www.coachella.com/getting-here", date: "Retrieved Jul 17, 2026", type: "Fact" },
] as const;

// Scope ──────────────────────────────────────────────────────────────────────
export const SCOPE = {
  included: [
    "Paid-media strategy and campaign architecture across Meta and TikTok",
    "Audience planning, budget allocation, and flight design",
    "Campaign setup, trafficking, launch, pacing, and optimization",
    "Promo-code measurement framework",
    "Media-ready copy and platform specification matrix",
    "Weekly and post-campaign reporting with creative learnings",
  ],
  excluded: [
    "$15,000 paid-media spend (billed at cost)",
    "Promo-code subsidy or ride-credit value",
    "Vehicle rental, wrapping, and installation",
    "Pickup and drop-off infrastructure, fabrication, signage production",
    "Venue permits, staffing, and security",
    "Artist licensing and talent fees",
    "Photography, video, or large-scale creative production",
    "Uber-owned media inventory and third-party measurement fees",
  ],
} as const;

// Measurement framework ──────────────────────────────────────────────────────
export const MEASUREMENT = [
  { tier: "Media delivery", metrics: "Reach, impressions, frequency, CPM", note: "Platform-reported. The accountability floor." },
  { tier: "Attention", metrics: "3s/6s views, ThruPlay, completion rate", note: "Tells us which creative earns the first stage." },
  { tier: "Partnership engagement", metrics: "Code detail views, saves, profile taps, shares", note: "Reads intent before a single ride is booked." },
  { tier: "Code action", metrics: "Redemptions, if Uber attribution access is confirmed", note: "Never guaranteed. Reported only if data access exists." },
  { tier: "Partner-supplied", metrics: "Pickup-zone throughput, ride counts, brand-lift options", note: "Requires Uber or 88rising operational data sharing." },
] as const;

// Execution timeline ─────────────────────────────────────────────────────────
export const TIMELINE = [
  { phase: "Approval + strategy lock", window: "Jul 17–18", note: "Direction confirmed, measurement framework agreed." },
  { phase: "Asset acquisition + creative lock", window: "Jul 19–21", note: "Official assets delivered, concepts approved." },
  { phase: "Production + partner review", window: "Jul 21–23", note: "Formats built; Uber/88rising review window. Non-negotiable." },
  { phase: "Platform build + code validation", window: "Jul 23–24", note: "Campaigns constructed, code links tested end to end." },
  { phase: "Phase 1 live", window: "Jul 20–27", note: "Reveal flight launches as assets clear review." },
  { phase: "Daily pacing + optimization", window: "Jul 20–Aug 8", note: "Creative rotation, frequency management, budget shifts." },
  { phase: "Final push", window: "Aug 5–8", note: "Geo-tightened burst through festival day." },
  { phase: "Post-event reporting", window: "Aug 10–14", note: "Full delivery, attention, and code-signal readout." },
] as const;

// Mailto CTA ─────────────────────────────────────────────────────────────────
export const CTA_MAILTO = `mailto:${META.agencyEmail}?subject=${encodeURIComponent(
  "Uber × Head In The Clouds 2026 — campaign direction"
)}&body=${encodeURIComponent(
  `Hi Geoff,\n\nWe've reviewed the Uber × Head In The Clouds partnership awareness proposal.\n\nNext steps from our side:\n\n\n\nTotal proposed investment: $17,250 ($15,000 media + $2,250 management fee).\n\nThanks.`
)}`;
