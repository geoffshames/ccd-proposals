export type Source = {
  id: string;
  group: "Event" | "Audience" | "Platforms" | "Precedents" | "Planning";
  title: string;
  publisher: string;
  url: string;
  note: string;
};

export const event = {
  date: "August 8, 2026",
  isoDate: "2026-08-08T13:00:00-07:00",
  venue: "Brookside at The Rose Bowl",
  city: "Pasadena, California",
  address: "1001 Rose Bowl Drive, Pasadena, CA",
  doors: "1:00 PM",
  curfew: "11:00 PM",
  rideshare: "Designated rideshare lot: Lot H",
} as const;

export const investment = {
  media: 15_000,
  managementRate: 0.15,
  management: 2_250,
  total: 17_250,
} as const;

export const platforms = [
  {
    id: "meta",
    name: "Meta",
    spend: 8_250,
    share: 55,
    role: "Build broad, locally concentrated awareness and efficient repeat exposure across Instagram and Facebook.",
    formats: ["Reels", "Stories", "Feed video", "Static utility card"],
    kpis: ["Reach", "Impressions", "Frequency", "ThruPlays"],
  },
  {
    id: "tiktok",
    name: "TikTok",
    spend: 6_750,
    share: 45,
    role: "Make the partnership feel native to festival culture through sound-led, creator-forward vertical video.",
    formats: ["Spark-style cut", "Creator POV", "9:16 utility edit", "Final-day reminder"],
    kpis: ["Reach", "Impressions", "6-second views", "Video completion"],
  },
] as const;

export const flight = [
  {
    phase: "01",
    name: "Partnership reveal",
    dates: "July 22 to July 26",
    total: 3_000,
    meta: 1_650,
    tiktok: 1_350,
    share: 20,
    job: "Introduce the collaboration and establish the ride as part of the festival story.",
  },
  {
    phase: "02",
    name: "Culture plus utility",
    dates: "July 27 to August 3",
    total: 6_000,
    meta: 3_300,
    tiktok: 2_700,
    share: 40,
    job: "Rotate social-first culture edits with practical Lot H and event-code information.",
  },
  {
    phase: "03",
    name: "Final awareness push",
    dates: "August 4 to August 8",
    total: 6_000,
    meta: 3_300,
    tiktok: 2_700,
    share: 40,
    job: "Concentrate frequency as plans lock, then reinforce arrival and departure utility on event day.",
  },
] as const;

export const scenarios = [
  {
    name: "Conservative",
    label: "Higher clearing costs",
    metaCpm: 15,
    tiktokCpm: 10,
    impressions: 1_225_000,
    frequency: 2.8,
    reach: 437_500,
  },
  {
    name: "Expected",
    label: "Planning centerline",
    metaCpm: 11.5,
    tiktokCpm: 7.5,
    impressions: 1_617_391,
    frequency: 2.3,
    reach: 703_213,
  },
  {
    name: "Efficient",
    label: "Lower clearing costs",
    metaCpm: 8.5,
    tiktokCpm: 5.5,
    impressions: 2_197_861,
    frequency: 1.9,
    reach: 1_156_769,
  },
] as const;

export const pillars = [
  {
    number: "01",
    title: "Make Lot H feel obvious",
    eyebrow: "PUDO",
    body: "Turn the designated rideshare lot into a named, repeated destination across creative, event information, and the final-day reminder. The media promise stays simple: know where the ride begins and ends.",
    deliverables: ["Lot H utility card", "Arrival and exit edit", "Event-day story frame", "Operations-aligned language"],
  },
  {
    number: "02",
    title: "Put the platform in motion",
    eyebrow: "Branded vehicles",
    body: "Treat the vehicle fleet as moving campaign media. A modular graphic system carries the platform line, festival color, and approved partner lockup without fighting the car's geometry.",
    deliverables: ["Exterior wrap system", "Driver-side read", "Rear-quarter read", "Capture guide for social"],
  },
  {
    number: "03",
    title: "Make the ride the first stage",
    eyebrow: "Partnership campaign",
    body: "Connect paid social, vehicle content, and transport utility under one idea. The campaign earns attention with culture first, then makes [EVENT CODE] and [OFFER DETAILS] easy to find when intent peaks.",
    deliverables: ["Meta and TikTok system", "Three content territories", "Phased media flight", "Measurement framework"],
  },
] as const;

export const audienceSignals = [
  { value: "80%", label: "of US adults 18 to 29 use Instagram", source: "pew-2025" },
  { value: "63%", label: "of US adults 18 to 29 use TikTok", source: "pew-2025" },
  { value: "Lot H", label: "is the festival's designated rideshare lot", source: "hitc-getting-here" },
] as const;

export const precedents = [
  {
    name: "Coachella 2026",
    behavior: "A dedicated rideshare lot adds shade, phone charging, a marked path, and honest peak-wait guidance.",
    take: "Design the waiting experience and set expectations before the crowd reaches it.",
    avoid: "Do not imply a frictionless exit when late-night demand will still compress supply.",
    source: "coachella-2026",
  },
  {
    name: "Lollapalooza 2026",
    behavior: "Festival guidance links riders into the Uber app and directs them to walk beyond the tightest closure zone.",
    take: "Repeat one actionable route across app, signage, staff language, and social creative.",
    avoid: "Do not rely on a vague rideshare label without a last-mile instruction.",
    source: "lolla-2026",
  },
  {
    name: "Rolling Loud Orlando 2026",
    behavior: "A rideshare partner combines named pickup nodes with an event-specific promotional code.",
    take: "Pair utility with the offer, and publish the terms wherever the code appears.",
    avoid: "Do not create multiple nodes unless operations can make each one distinct and legible.",
    source: "rolling-loud-2026",
  },
  {
    name: "Uber and Live Nation",
    behavior: "An early category precedent connected designated PUDO, preloaded destinations, and unique event codes across venues and festivals.",
    take: "The strongest partnership makes the transport layer useful, consistent, and measurable.",
    avoid: "Do not borrow an old partnership title or expired offer structure for the current program.",
    source: "uber-live-nation",
  },
] as const;

export const activationSteps = [
  { date: "July 17", title: "Proposal and research", owner: "CCD", status: "Complete" },
  { date: "July 18 to 19", title: "Asset intake and creative lock", owner: "CCD + partners", status: "Next" },
  { date: "July 20", title: "Operations and claims review", owner: "88rising + Uber", status: "Review" },
  { date: "July 21", title: "Build, tracking, and code validation", owner: "CCD", status: "Production" },
  { date: "July 22", title: "Paid social launch", owner: "CCD", status: "Launch" },
  { date: "July 22 to August 3", title: "Optimize and rotate", owner: "CCD", status: "Live" },
  { date: "August 4 to 8", title: "Final awareness push", owner: "CCD", status: "Live" },
  { date: "After August 8", title: "Reporting and readout", owner: "CCD", status: "Report" },
] as const;

export const sources: Source[] = [
  {
    id: "hitc-info",
    group: "Event",
    title: "Festival information",
    publisher: "Head In The Clouds LA",
    url: "https://la.hitcfestival.com/info/",
    note: "Confirms August 8, 2026, Brookside at The Rose Bowl, 1 PM doors, 11 PM curfew, all ages, and rain or shine.",
  },
  {
    id: "hitc-getting-here",
    group: "Event",
    title: "Getting here",
    publisher: "Head In The Clouds LA",
    url: "https://la.hitcfestival.com/getting-here/",
    note: "Confirms the designated rideshare lot at Lot H and documents parking, Metro, and shuttle options.",
  },
  {
    id: "hitc-passes",
    group: "Event",
    title: "2026 passes",
    publisher: "Head In The Clouds LA",
    url: "https://la.hitcfestival.com/passes/",
    note: "Current public pass and parking context for the 2026 event.",
  },
  {
    id: "hitc-partners",
    group: "Event",
    title: "Festival partners",
    publisher: "Head In The Clouds LA",
    url: "https://la.hitcfestival.com/partners/",
    note: "Used as a public-language check. Uber is not named on the current public partner page, so this proposal avoids an unauthorized partnership title.",
  },
  {
    id: "goldenvoice-hitc",
    group: "Event",
    title: "Head In The Clouds 2026",
    publisher: "Goldenvoice",
    url: "https://www.goldenvoice.com/",
    note: "Confirms Goldenvoice's festival relationship with 88rising and the current event listing.",
  },
  {
    id: "pew-2025",
    group: "Audience",
    title: "Americans' social media use 2025",
    publisher: "Pew Research Center",
    url: "https://www.pewresearch.org/internet/2025/11/20/americans-social-media-use-2025/",
    note: "Reports Instagram use at 80% and TikTok use at 63% among US adults ages 18 to 29.",
  },
  {
    id: "meta-awareness",
    group: "Platforms",
    title: "Meta awareness objective",
    publisher: "Meta for Business",
    url: "https://www.facebook.com/business/ads/ad-objectives/awareness",
    note: "Supports optimizing an awareness campaign toward reach, impressions, ad recall, ThruPlay, or two-second continuous video views.",
  },
  {
    id: "tiktok-practice",
    group: "Platforms",
    title: "Creative best practices",
    publisher: "TikTok for Business",
    url: "https://ads.tiktok.com/help/article/creative-best-practices?lang=en&redirected=1",
    note: "Supports TikTok-first vertical creative, sound, safe zones, people-forward content, multiple variations, and creative refresh.",
  },
  {
    id: "tiktok-views",
    group: "Platforms",
    title: "Video views objective",
    publisher: "TikTok for Business",
    url: "https://ads.tiktok.com/help/article/video-views-objective?lang=en&redirected=1",
    note: "Defines the platform's video-view optimization context and focused-view measurement.",
  },
  {
    id: "uber-advertising",
    group: "Platforms",
    title: "Advertising on Uber",
    publisher: "Uber",
    url: "https://www.uber.com/us/en/advertising/",
    note: "Provides the strategic context for connecting advertising with moments of movement and intent.",
  },
  {
    id: "uber-takeover",
    group: "Platforms",
    title: "Introducing Journey Takeovers",
    publisher: "Uber Advertising",
    url: "https://www.uber.com/us/en/blog/introducing-journey-takeovers/",
    note: "Current 2026 precedent for destination-aware storytelling across the trip. Any Uber-owned inventory remains optional and outside this paid-social budget.",
  },
  {
    id: "uber-guidelines",
    group: "Platforms",
    title: "Advertising creative guidelines",
    publisher: "Uber Advertising",
    url: "https://www.uber.com/us/en/advertising/specs/guidelines/",
    note: "Used to frame offer disclosure, co-brand approval, sentence case, embedded-text, and format-native requirements.",
  },
  {
    id: "uber-pickups",
    group: "Platforms",
    title: "Pickups at festivals and busy venues",
    publisher: "Uber",
    url: "https://www.uber.com/us/en/ride/how-it-works/pickups/",
    note: "Explains venue-designated pickup spots, specific meeting-location selection, and in-app rider-driver connection tools.",
  },
  {
    id: "gupta-benchmarks",
    group: "Planning",
    title: "Social media advertising cost benchmarks",
    publisher: "Gupta Media",
    url: "https://www.guptamedia.com/social-media-ads-cost",
    note: "Market benchmark reference only. CCD planning CPMs are intentionally more conservative for a short, geographically concentrated entertainment flight.",
  },
  {
    id: "coachella-2026",
    group: "Precedents",
    title: "2026 getting here",
    publisher: "Coachella",
    url: "https://coachella.com/getting-here",
    note: "Documents a dedicated rideshare lot, marked path, shade, phone charging, and the expected peak wait window.",
  },
  {
    id: "lolla-2026",
    group: "Precedents",
    title: "Rideshare",
    publisher: "Lollapalooza",
    url: "https://support.lollapalooza.com/hc/en-us/articles/49411308530452-Rideshare",
    note: "Documents Uber app routing and a walk-away pickup instruction for the downtown festival environment.",
  },
  {
    id: "rolling-loud-2026",
    group: "Precedents",
    title: "Travel and rideshare",
    publisher: "Rolling Loud Orlando",
    url: "https://2026.rollingloud.com/travel/",
    note: "Current festival example combining named rideshare nodes with a public promotional code and terms.",
  },
  {
    id: "uber-live-nation",
    group: "Precedents",
    title: "Uber and Live Nation",
    publisher: "Uber Newsroom",
    url: "https://www.uber.com/us/en/newsroom/getting-to-the-show-is-easy-with-uber-live-nation/",
    note: "Historical category precedent for designated PUDO, preloaded destinations, and festival-specific promotional codes. The old offer is expired.",
  },
];

export const officialArt = {
  lineup: "https://aegwebprod.blob.core.windows.net/content/hitc/la/2026/hitc-lineup-sign.png",
  clouds: "https://aegwebprod.blob.core.windows.net/content/hitc/la/2026/clouds-transparent.png",
  background: "https://aegwebprod.blob.core.windows.net/content/hitc/la/2026/hitc-la-2026-background.jpg",
} as const;
