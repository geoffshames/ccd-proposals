/**
 * DOPE AS USUAL x CROWD CONTROL DIGITAL: podcast growth proposal.
 * Strategy only, no pricing. Data pulled November 2026 from the show's YouTube,
 * Megaphone RSS, Instagram and TikTok, and a full catalog audit (290 episodes).
 */

export const PASSWORD = "DOPE";
export const EMAIL = "hello@crowdcontroldigital.com";

export const NAV = [
  { id: "show", label: "The show" },
  { id: "found", label: "What we found" },
  { id: "strategy", label: "Strategy" },
  { id: "plan", label: "The plan" },
  { id: "creative", label: "Creative" },
  { id: "deal", label: "Partnerships" },
  { id: "timeline", label: "Timeline" },
];

export const HERO = {
  kicker: "Podcast growth proposal, November 2026",
  title: ["DOPE", "AS", "USUAL"],
  line: "Five years of tape. One system to put it to work.",
  sub: "Prepared for Dope As Yola and Marty O'Neill.",
  body: "You built one of the biggest independent podcasts in comedy with no network behind it. This is how we would turn the catalog, the guest list and the audience you already have into more reach, a list you own, and real sponsor and platform money.",
  stats: [
    { v: 290, suffix: "", l: "Episodes in the catalog, February 2021 to today" },
    { v: 52, suffix: "M+", l: "Full-episode YouTube views we counted, episode by episode" },
    { v: 460, suffix: " hrs", l: "Of long-form conversation on tape" },
  ],
};

/* ---------------------------------------------------------------- 01 the show */

export const SHOW_THESIS = {
  big: "The show built a library.",
  em: "Now it needs a distribution engine.",
  body: "Dope As Usual already has the hard parts: two hosts people come back for, a five-year archive, a guest list most shows would pay for, and a loyal audience across every platform. What it has never had is a dedicated team whose only job is getting every great minute in front of new people and turning those people into fans you can reach directly.",
};

export const SHOW_STATS = [
  { v: "460K", l: "YouTube subscribers on the main channel" },
  { v: "207K", l: "Instagram followers on the show account" },
  { v: "141", l: "Different guests across the catalog" },
  { v: "#79", l: "Apple Podcasts, US Comedy Interviews, November 12" },
];

export const ROLES = [
  {
    k: "Stays with you",
    t: "The show",
    b: "Creative direction, production, booking, the set, the edit of the full episode and the voice of the show. Marty keeps the chair and Yola keeps the mic. Nothing about the episode changes unless you want it to.",
  },
  {
    k: "What we add",
    t: "The engine around it",
    b: "Short-form clipping and distribution, catalog reissues, the email and SMS list, sponsor sales, platform and network conversations, and a weekly read on what is working. We plug into your workflow and your approvals.",
  },
];

/* ---------------------------------------------------------------- 02 found */

export const VIEWS_BY_YEAR = [
  { y: "2021", median: 258000, eps: 47 },
  { y: "2022", median: 203000, eps: 51 },
  { y: "2023", median: 101000, eps: 31 },
  { y: "2024", median: 69000, eps: 21 },
  { y: "2025", median: 45000, eps: 50 },
  { y: "2026", median: 24000, eps: 31 },
];

export const TOP_EPISODES = [
  { id: "89WeV5A1xow", t: "The GOAT Episode w/ Goblin & Erick Khan", d: "Aug 2021", v: 5800000 },
  { id: "ez5_nFYT0AI", t: "Fulcrum's First Interview", d: "Dec 2022", v: 1900000 },
  { id: "7w4s5MUIeM0", t: "The Epic Return of Goblin", d: "May 2022", v: 1500000 },
  { id: "RGTz0trC4ug", t: "DJ Ghost's First Interview", d: "Aug 2022", v: 1300000 },
  { id: "3gdcEZrfnwM", t: "The Goblin Episode", d: "Jun 2021", v: 1300000 },
  { id: "dHEQa974g64", t: "Mushrooms & Mayhem Pt. 2 w/ Josh & Jacob Wolf", d: "Apr 2022", v: 1100000 },
  { id: "3hqMIx45LtI", t: "The Return of Erick Khan", d: "Mar 2022", v: 1100000 },
  { id: "0Yp_0ruodlQ", t: "Highly Recommend w/ Erick Khan", d: "May 2021", v: 1100000 },
  { id: "LffWWD3G1P8", t: "Story Time w/ OGEE: Surviving East LA", d: "Mar 2022", v: 1000000 },
  { id: "h_yo27dtxRU", t: "The Marty Episode", d: "Sep 2021", v: 951000 },
];

export const PLATFORMS = [
  { k: "YouTube", v: "460K", n: "subscribers", note: "About 14K views on a typical new episode, weekly on Tuesdays." },
  { k: "Instagram", v: "207K", n: "followers", note: "One reel past 17.9M views. Recent reels range from 4K to 102K." },
  { k: "TikTok", v: "21.4K", n: "followers", note: "49 videos and 806K likes. The least developed channel the show has." },
  { k: "Owned list", v: "120K", n: "newsletter contacts", note: "Plus 80K site and app members, per the show's own site." },
];

export const PEERS = [
  { k: "Stiff Socks", posts: 2527, followers: 3500000 },
  { k: "Dope As Usual", posts: 49, followers: 21400, me: true },
];

export const FINDINGS = [
  {
    k: "01 Catalog",
    t: "80% of the views live in the archive",
    b: "Episodes from 2021 and 2022 account for roughly 42M of the 52.6M full-episode views we counted. Every one of the ten most watched episodes is from that era. That is the most valuable footage the show owns, and almost none of it has been cut for vertical.",
  },
  {
    k: "02 Attention",
    t: "The audience moved to short form",
    b: "The median full episode drew 258K views in 2021 and 24K in 2026, while a single Instagram reel of the show passed 17.9M. The appetite for the show is still there. It now lives in clips, and long form follows the clips.",
  },
  {
    k: "03 Guests",
    t: "The inner circle beats the press booking",
    b: "Goblin, Erick Khan, OGEE and Josh Wolf drive the biggest numbers in show history. A 39M-follower celebrity booking drew 91K. Yola's mom drew 784K. The chemistry is the product, and the recurring cast is a franchise.",
  },
  {
    k: "04 TikTok",
    t: "The biggest open lane is TikTok",
    b: "Stiff Socks, whose co-host Michael Blaustein sat down with you in July, has posted 2,527 TikToks to 3.5M followers. Dope As Usual has posted 49. The library to close that gap already exists.",
  },
  {
    k: "05 Packaging",
    t: "The old thumbnails named the guest",
    b: "The 2021 and 2022 system put the guest's name in giant type on the orange doodle wall, and it is instantly recognisable in a feed. The current system leads with an episode number. A simple title and thumbnail testing program would tell us which wins now.",
  },
  {
    k: "06 Owned",
    t: "A list this size should be a weekly revenue line",
    b: "120K newsletter contacts and 80K members is a bigger owned audience than most touring comedians have. Pointed at new episodes, live shows, merch and sponsors every week, it becomes the most reliable channel the show has.",
  },
];

/* ---------------------------------------------------------------- 03 strategy */

export const PILLARS = [
  { n: "01", t: "Clip everything", b: "Every new episode cut into 15 to 20 vertical clips the week it drops, on TikTok, Shorts, Reels and X, built from the moments that already make the room laugh." },
  { n: "02", t: "Reopen the vault", b: "Five years of tape relaunched as weekly vault drops, compilations and reunion episodes, so the 2021 and 2022 classics find the audience that missed them." },
  { n: "03", t: "Own the audience", b: "Email and SMS run as a weekly program, so every new follower becomes a contact you can reach without asking an algorithm for permission." },
  { n: "04", t: "Sell the reach", b: "A real media kit, a rate card and active sales, so sponsor money reflects the size of the audience across every platform, not just one download count." },
  { n: "05", t: "Package the show", b: "With the numbers moving, the show is in a position to negotiate distribution, licensing and live deals from strength rather than waiting to be called." },
];

export const MOMENT = {
  k: "The flagship move",
  t: "The Dope As Usual Reunion Series",
  b: "Bring the recurring cast back on purpose. Each reunion episode is promoted with a vault cut of that guest's classic appearance first, so the old audience is reminded and the new audience is introduced in the same week.",
  steps: [
    "Week one: a vault cut of the original episode goes out as vertical clips and a compilation.",
    "Week two: the reunion episode drops with the guest's own collab posts on all platforms.",
    "Same day: an SMS to the list with the first clip and a members-only extended cut.",
    "Every reunion is sponsor inventory with a built-in story, sold as a mini-series.",
  ],
};

/* ---------------------------------------------------------------- 04 plan */

export const PLAN = [
  {
    n: "01",
    tag: "Weekly",
    t: "Clip engine",
    b: "15 to 20 vertical clips per episode with burned-in captions, hooks written for each platform, and Trial Reels to test new audiences. Clips go up within 48 hours of each episode, with a short-form calendar that runs every day of the week.",
  },
  {
    n: "02",
    tag: "Weekly",
    t: "Vault reissues",
    b: "A weekly From The Vault drop: the best moments of the 2021 and 2022 era recut for vertical, plus long-form compilations by guest and by story. One archive, re-released on a schedule.",
  },
  {
    n: "03",
    tag: "Every episode",
    t: "Guest amplification",
    b: "Every guest receives a ready-to-post clip pack and collab invites the day the episode drops. We have already mapped all 141 guests by platform and reach, so reunion bookings and cross-posts start from data.",
  },
  {
    n: "04",
    tag: "Ongoing",
    t: "Searchable archive",
    b: "All 460 hours indexed with video AI, so any story, name or topic can be found in seconds. Compilations, sponsor reels and topical clips stop depending on someone remembering which episode it was.",
  },
  {
    n: "05",
    tag: "Weekly",
    t: "Email and SMS",
    b: "A Tuesday drop text and email for every episode, segments by platform and city, live-show presales, merch drops and sponsor offers. Built on your existing list, with a capture on every clip, page and live show.",
  },
  {
    n: "06",
    tag: "Monthly",
    t: "Social consulting",
    b: "Channel audits, posting cadence, title and thumbnail testing through YouTube's Test and Compare, and a monthly working session with Marty and Yola on what the data says. Your channels, sharper.",
  },
  {
    n: "07",
    tag: "Quarterly",
    t: "Sponsorship sales",
    b: "A media kit and rate card built on real cross-platform reach, outbound sales to categories that fit the show, and integration formats beyond the host read: segments, series sponsors and live-show partners.",
  },
  {
    n: "08",
    tag: "Ongoing",
    t: "Platform and network deals",
    b: "We prepare the show and the catalog for distribution conversations: streaming platforms, live streaming partners, FAST channels and catalog licensing. We bring the numbers, open the doors and sit next to you in the room.",
  },
  {
    n: "09",
    tag: "Monthly",
    t: "Reporting",
    b: "One live dashboard across YouTube, Instagram, TikTok, the list and sponsor delivery, and a monthly read on what to do next. Every number in one place.",
  },
];

/* ---------------------------------------------------------------- 05 creative */

export const CREATIVE_INTRO =
  "Example creative made for this proposal in the show's own visual language: the orange doodle wall, the condensed type and the quoted wordmark. All of it is AI-generated and directional only. Real assets are built from your footage, your hosts and your guests.";

export const CREATIVE = [
  { src: "/images/dope-as-usual/creative/vault-thumb.jpg", w: "half", k: "YouTube", t: "From The Vault series", b: "A recurring thumbnail system for weekly vault drops, so the reissues read as a series rather than reuploads." },
  { src: "/images/dope-as-usual/creative/reunion-thumb.jpg", w: "half", k: "YouTube", t: "Reunion special", b: "Packaging for the flagship reunion episodes, built around the cast rather than an episode number." },
  { src: "/images/dope-as-usual/creative/clip-frame.jpg", w: "c3", k: "TikTok and Reels", t: "Clip caption system", b: "One caption style across every vertical clip: big, outlined and readable on mute." },
  { src: "/images/dope-as-usual/creative/sponsor-frame.jpg", w: "half", k: "Sponsorship", t: "Integration format", b: "A clean lower third for sponsor segments that looks like the show, not a pre-roll." },
  { src: "/images/dope-as-usual/creative/live-poster.jpg", w: "c4", k: "Live", t: "Live episode poster", b: "A full episode recorded in front of an audience, promoted to the list first." },
];

export const CREATIVE_RULES = [
  "The guest's name or the story is the headline, never the episode number.",
  "One caption style on every clip: big, outlined, readable on mute.",
  "The hook lands in the first two seconds, before the setup.",
  "Every clip points back to the full episode and the list.",
  "Vault drops carry their own tag so they read as a series.",
];

export const VIDEO = {
  src: "/images/dope-as-usual/creative/vault-bumper.mp4",
  poster: "/images/dope-as-usual/creative/vault-thumb.jpg",
  t: "Vault intro bumper",
  b: "A five-second open that tags every vault drop so returning viewers know exactly what they are watching.",
};

/* ---------------------------------------------------------------- 06 partnerships */

export const SPONSOR_CATS = [
  { t: "Apparel and streetwear", b: "Already proven on the show. Fits the hosts, the guests and the audience." },
  { t: "Energy and beverage", b: "High-frequency advertisers in comedy and creator podcasts." },
  { t: "Gaming and apps", b: "Young, heavily male audience on YouTube and TikTok, which these brands buy." },
  { t: "Food delivery and snacks", b: "Natural integrations inside the episode, and a running bit waiting to happen." },
  { t: "Fight sports and events", b: "Overlaps with the guest list and the comedy audience." },
  { t: "Hemp and cannabis brands", b: "Where platform rules allow. Our team has bought media in restricted categories for years." },
];

export const DEALS = [
  { k: "Streaming platforms", t: "Distribution and partner programs", b: "Use the cross-platform numbers to negotiate better terms on video podcast programs, and evaluate any exclusivity offer against what the show earns open." },
  { k: "Live streaming", t: "Live episodes and watch-alongs", b: "Live tapings and extended sessions on a live platform, with the audience on camera and a clear revenue split." },
  { k: "FAST and TV", t: "Catalog licensing", b: "Package the archive into themed blocks for free ad-supported streaming channels. The library becomes an asset that earns while you sleep." },
  { k: "Live", t: "Dope As Usual Live", b: "Live episode tapings in the cities the list says want it, presold to SMS subscribers before anyone else hears about them." },
];

/* ---------------------------------------------------------------- 07 targets + timeline */

export const TARGETS = [
  { v: "600+", l: "Vertical clips posted in the first 90 days" },
  { v: "150K", l: "TikTok followers within six months" },
  { v: "25M", l: "Monthly short-form views across platforms by month six" },
  { v: "3", l: "New sponsor categories signed in the first two quarters" },
];

export const PHASES = [
  {
    w: "Weeks 1 to 2",
    t: "Plug in",
    items: ["Access, approvals and a shared calendar", "Archive indexed and the vault shortlist picked", "Media kit draft and list audit", "Caption and thumbnail systems approved"],
  },
  {
    w: "Weeks 3 to 6",
    t: "Launch",
    items: ["Daily clips on every platform", "Weekly From The Vault drops begin", "Tuesday SMS and email program live", "First guest clip packs go out"],
  },
  {
    w: "Weeks 7 to 12",
    t: "Scale",
    items: ["First Reunion Series episode", "Sponsor outreach with the new numbers", "Thumbnail and title tests read out", "First monthly working session"],
  },
  {
    w: "Month 4 onward",
    t: "Package",
    items: ["Platform and licensing conversations", "Live episode taping planned off list data", "Series sponsors for the reunion run", "Quarterly plan reset"],
  },
];

/* ---------------------------------------------------------------- agency + next */

export const AGENCY = {
  body: "A culture-first marketing agency for brands, artists and platforms since 2015. Strategy, creative and paid media under one roof, measured in attention, sales, streams and fans.",
  services: [
    { h: "Strategy & Consulting", b: "Release, launch and growth strategy built on real data, from a single drop to a twelve-month plan.", on: true },
    { h: "Social Listening", b: "Daily sentiment and share-of-voice dashboards across every platform.", on: true },
    { h: "Creative Services", b: "Campaign creative, content and edits made for the feed they will run in.", on: true },
    { h: "Social Media Management", b: "Channels run day to day: the calendar, the posts, the replies and the read on what is working.", on: true },
    { h: "Creator Marketing & Clipping", b: "Creators, clippers and UGC that reach people who would never follow your account.", on: true },
    { h: "Paid Media", b: "Paid social, search and video bought against outcomes: streams, tickets and sales.", on: false },
    { h: "Email & SMS", b: "Programs that turn followers into a list you own, and the list into tickets and streams.", on: true },
    { h: "Billboards & OOH", b: "Out-of-home placements, from a single board to a city takeover.", on: false },
    { h: "Event Production", b: "Launch events, activations and fan experiences.", on: false },
    { h: "World Building & Tech", b: "Custom sites, games and member systems, built and run in house.", on: false },
    { h: "AI-Enablement", b: "Custom AI agents and tools for marketing teams, and getting named when people ask AI.", on: true },
  ],
  clientGroups: [
    { label: "Music", names: ["bbno$", "Peso Pluma", "KSI", "ILLENIUM", "Miguel", "82MAJOR", "FIFTY FIFTY", "Emotional Oranges", "ATLiens", "Dillon Francis"] },
    { label: "Live", names: ["Live Nation", "AEG", "Insomniac Events", "Vibra Urbana", "Brooklyn Mirage", "Avant Gardner"] },
    { label: "Brands", names: ["NBA", "Golden State Warriors", "Apple", "Amazon", "Beats By Dre", "Warner Bros", "Monster Energy", "Foot Locker", "Weedmaps", "Polymarket"] },
  ],
};

export const NEXT = {
  steps: [
    "A working session with Marty and Yola to walk through this plan and hear what we missed.",
    "Agree the scope that fits, from clipping alone to the full program.",
    "Two-week plug-in: access, approvals, the archive index and the first vault picks.",
    "First clips, first vault drop and the first Tuesday SMS go live.",
  ],
};

export const SOURCES = [
  "Episode and view data: Crowd Control audit of the show's YouTube channel and Megaphone RSS feed, 290 episodes, February 2021 to November 2026. Views are full-episode YouTube views at the time of the audit.",
  "Followers and reels: YouTube, Instagram and TikTok public profiles, November 12, 2026. Chart position: Apple Podcasts US Comedy Interviews via Podstatus, November 12, 2026.",
  "List and member counts as published on dopeasusualpodcast.com. Peer benchmark: Stiff Socks public TikTok profile, November 12, 2026.",
  "Targets are directional and depend on posting volume, approvals and platform changes. They are not guarantees.",
];
