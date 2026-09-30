/**
 * Miami Concours: digital audit + paid media plan (Crowd Control Digital).
 * Every figure below was pulled on 2026-09-30 from a scrape, API, ad library,
 * Keyword Planner export, Lighthouse run or fetched page. Sources are listed in SOURCES.
 */

export const IMG = "/images/miami-concours";
export const P = (id: string) => `${IMG}/posts/${id}.webp`;

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "search", label: "Search" },
  { id: "website", label: "Website" },
  { id: "social", label: "Social" },
  { id: "sentiment", label: "Sentiment" },
  { id: "voice", label: "Voice" },
  { id: "video", label: "Video AI" },
  { id: "field", label: "Competition" },
  { id: "plan", label: "Plan" },
  { id: "creative", label: "Creative" },
  { id: "next", label: "Next" },
] as const;

export const HERO = {
  kicker: "Prepared for the Miami Concours team",
  title: "Miami Concours",
  line: "Digital Audit",
  sub: "Tenth edition. February 19 to 21, 2027. Miami Design District.",
  body: "We audited every public signal around Miami Concours: the website, six social channels, 3,246 posts and comments, 67 videos run through video AI, search demand, and the events competing for the same collectors in February. This is what we found, and how we would turn it into free RSVPs, VIP revenue and sponsor value for the tenth edition.",
  stats: [
    { value: 17.1, suffix: "M", decimals: 1, label: "views on #miamiconcours on TikTok, almost all from other people's accounts" },
    { value: 4.97, suffix: "M", decimals: 2, label: "Instagram followers across the partners already around the event" },
    { value: 0, suffix: "", decimals: 0, label: "Meta ads running for Miami Concours today, five months out" },
  ],
  date: "Audit date: September 30, 2026",
};

export const MARQUEE = [
  "Ten years on the red carpet",
  "125+ rare and hyper cars",
  "Free general admission",
  "Miami Design District",
  "February 19 to 21, 2027",
];

/* ------------------------------------------------------------------ summary */

export const SUMMARY = {
  intro:
    "Miami Concours is the most talked-about car weekend in Miami. Almost none of that attention is captured, owned or bought. Six findings shape everything that follows.",
  items: [
    {
      n: "01",
      head: "Demand is there, and nobody is buying it",
      body: "\"miami concours\" drew 12,400 US searches in the last 12 months, 79% of them between December and February. Google rates competition on the term at zero. The Meta Ad Library shows no active Miami Concours ads, and the site carries no Meta, TikTok or Google Ads tag.",
      to: "search",
    },
    {
      n: "02",
      head: "The conversation belongs to other accounts",
      body: "157 TikToks about the event drew 13.07M views. Creators with 10,000+ followers produced 92% of those views. The official TikTok has 46 followers.",
      to: "voice",
    },
    {
      n: "03",
      head: "Partners carry the reach",
      body: "In the 2026 cycle, collab posts earned 5.4x the median engagement of solo posts. Two Miami Design District reels beat the event account's best reel ever, and none of the District's nine Concours posts were co-authored with it.",
      to: "social",
    },
    {
      n: "04",
      head: "The audience told you what it needs",
      body: "Across 3,246 comments and posts: 92 mentions of crowding, 59 of parking, 124 of price, 106 logistics questions. The brand replied to 17 of 87 questions sampled. Free GA returns in 2027, so these comments are the brief.",
      to: "sentiment",
    },
    {
      n: "05",
      head: "People beat cars",
      body: "70% of the feed is cars alone, at a 1.02% median engagement rate. Posts with a person as the subject run at 4.14%. Video AI found the same thing in the first two seconds of every winning reel.",
      to: "video",
    },
    {
      n: "06",
      head: "February is contested",
      body: "Cavallino Classic Palm Beach runs the exact same dates an hour up the coast, and already has 81 active Meta ads selling February 2027. ModaMiami and an RM Sotheby's sale follow one week later.",
      to: "field",
    },
  ],
};

/* ------------------------------------------------------------------ search */

export const SEARCH = {
  months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
  brand: [320, 390, 590, 1300, 1900, 6600, 480, 260, 140, 140, 110, 170],
  tickets: [880, 40, 50, 140, 390, 1600, 170, 210, 110, 20, 70, 40],
  stats: [
    { v: "12,400", l: "US searches for \"miami concours\", Sep 2025 to Aug 2026" },
    { v: "79%", l: "of that demand lands December to February" },
    { v: "1,600", l: "searches for \"miami concours tickets\" in February 2026 alone" },
    { v: "0", l: "Google's competition index on the brand terms. No one is bidding." },
  ],
  asks: [
    { q: "miami concours 2026", a: ["tickets", "promo code", "schedule", "dates", "location", "tickets price", "time", "free"] },
    { q: "miami concours 2027", a: ["dates", "upcoming conventions in miami"] },
    { q: "miami concours", a: ["concourse d food", "concourse h food", "concourse d map", "concours club", "2027"] },
    { q: "is miami concours free", a: [] },
    { q: "miami concours parking", a: [] },
  ],
  collision:
    "\"miami concours\" autocompletes into Miami International Airport searches (\"concourse D food\", \"concourse H\"). Branded search needs a negative keyword list on day one, or airport travelers eat the budget.",
  window:
    "\"things to do miami february\" peaks in January (880 searches) with high competition, a month before \"miami concours\" does. That is when out-of-town visitors plan, and when the out-of-town flight should run.",
  ad: {
    url: "miamiconcours.com",
    title: "Miami Concours 2027 | Free Entry, Feb 19 to 21",
    desc: "The tenth Miami Concours returns to the Miami Design District. RSVP free and pick your arrival time, or upgrade to VIP.",
    links: ["RSVP Free", "VIP Experience", "Schedule", "Parking and Arrival"],
  },
};

/* ------------------------------------------------------------------ website */

export const WEBSITE = {
  scores: [
    { k: "Mobile performance", v: 35, note: "Lighthouse, mobile lab run" },
    { k: "Desktop performance", v: 78, note: "Lighthouse, desktop lab run" },
    { k: "SEO", v: 92, note: "Basics are in place" },
    { k: "Accessibility", v: 82, note: "44 of 49 homepage images have no alt text" },
  ],
  vitals: [
    { v: "21.3s", l: "Largest contentful paint on mobile (lab). The hero video is the heaviest thing on the page." },
    { v: "6.1MB", l: "Homepage weight on mobile. Modern image formats alone would save 2.0MB." },
    { v: "2x", l: "jQuery and the slick carousel are each loaded twice, from two different sources." },
  ],
  tracking: [
    { k: "Google Analytics 4", ok: true, note: "Installed through Site Kit" },
    { k: "Meta pixel and Conversions API", ok: false, note: "None found" },
    { k: "TikTok pixel", ok: false, note: "None found" },
    { k: "Google Ads conversion tag", ok: false, note: "None found" },
    { k: "Event structured data", ok: false, note: "No Event schema, so no event rich results in Google" },
    { k: "One email list", ok: false, note: "Two newsletter plugins plus a WPForms form collect sign-ups" },
  ],
  trackingNote:
    "Paid media can only optimize toward what it can see. Today a Meta or TikTok campaign would be buying clicks, not RSVPs or VIP sales.",
  story: [
    { where: "Homepage", says: "\"The Tenth Annual Miami Concours. February 19-21. General admission is free and open to the public.\"", state: "current" },
    { where: "Google listing (meta description)", says: "\"Join the 9th Annual Miami Concours in February 2026\"", state: "stale" },
    { where: "FAQ", says: "\"The Miami Concours is now a ticketed event\" and \"over 250 curated\" cars", state: "stale" },
    { where: "Ticketing, Programming, Schedule pages", says: "The 9th edition, February 13 to 15, 2026", state: "stale" },
    { where: "Instagram link in bio (Linktree)", says: "\"9th Annual Event set for February 13th to 15th, 2026\", linking to the 2026 ticket page", state: "stale" },
    { where: "Instagram bio", says: "\"10th Annual Miami Concours returns in 2027 on Sunday, February 21st\"", state: "current" },
    { where: "YouTube link in the site footer", says: "Returns a 404. There is no official channel.", state: "broken" },
  ],
  storyNote:
    "Every paid click lands somewhere. Right now a person who finds the event on Google, Instagram and the homepage gets three different years, two different formats and two different date ranges.",
  fixes: [
    { t: "Rewrite the meta description, FAQ, Ticketing, Programming and Schedule pages for the tenth edition", w: "Week 1" },
    { t: "Update the Linktree and Instagram bio to one date line and one RSVP link", w: "Day 1" },
    { t: "Install Meta pixel with Conversions API, TikTok pixel with Events API, and Google Ads conversion tracking through GTM", w: "Week 1" },
    { t: "Pass RSVP, contest entry and VIP purchase events from PromoTix server-side", w: "Week 1" },
    { t: "Add Event structured data for each day of the weekend", w: "Week 1" },
    { t: "Compress the hero video, serve WebP or AVIF, lazy-load the gallery, remove the duplicate scripts", w: "Week 2" },
    { t: "Consolidate sign-ups into one list with SMS opt-in", w: "Week 2" },
    { t: "Add a Parking and Arrival page, and a What GA Includes page", w: "Week 2" },
  ],
};

/* ------------------------------------------------------------------ social */

export const CHANNELS = [
  { name: "Instagram", handle: "@miamiconcours", followers: "30,784", posts: "371", last: "Feb 26, 2026", state: "Main channel. No new grid posts in 216 days." },
  { name: "TikTok", handle: "@miamiconcours", followers: "46", posts: "8", last: "May 6, 2025", state: "Dormant through the entire 2026 cycle. Best video: 910 plays." },
  { name: "Facebook", handle: "MiamiConcours", followers: "194", posts: "Median 2 likes", last: "Jan 13, 2025", state: "Mirrors Instagram captions. No ads running." },
  { name: "YouTube", handle: "@miamiconcours", followers: "None", posts: "None", last: "None", state: "Footer link returns 404. Recaps live on the District's channel." },
  { name: "X", handle: "@Miamiconcours", followers: "8", posts: "5", last: "May 6, 2025", state: "Inactive." },
  { name: "LinkedIn", handle: "None", followers: "None", posts: "None", last: "None", state: "No page, which matters for sponsor sales." },
];

/** Instagram posts per month, Jan 2024 to Sep 2026. */
export const CADENCE = {
  start: { y: 2024, m: 0 },
  counts: [0, 52, 0, 0, 17, 9, 0, 0, 0, 0, 1, 2, 1, 17, 2, 1, 2, 0, 0, 5, 11, 0, 3, 7, 8, 22, 0, 0, 0, 0, 0, 0, 0],
  note:
    "Output spikes in event month (52 posts in February 2024, 17 in 2025, 22 in 2026) and falls to zero after. The tenth-edition date was announced on the District's Instagram on June 1. The event's own account has said nothing since February.",
};

export const FORMATS = {
  subject: [
    { k: "Person as the subject", v: 4.14, n: "13 posts" },
    { k: "Crowd as the subject", v: 3.84, n: "12 posts" },
    { k: "Designed graphic", v: 2.72, n: "18 posts" },
    { k: "Venue or sponsor", v: 1.49, n: "5 posts" },
    { k: "Cars only", v: 1.02, n: "112 posts, 70% of the feed", self: true },
  ],
  format: [
    { k: "Reels", v: 2.72 },
    { k: "Carousels", v: 1.35 },
    { k: "Single images", v: 0.94 },
  ],
  collab: { collab: 1966, solo: 362, collabPlays: 46426, soloPlays: 19102 },
  cta: { withCta: 42416, noCta: 11804 },
  note: "Median engagement rate: likes plus comments over current followers, 160 posts from February 2024 to February 2026.",
};

export const TOP_POSTS = [
  { href: "https://www.instagram.com/reel/DUv_To5kQhQ/", img: "DUv_To5kQhQ", who: "@prestigeimports collab", metric: "100,349 plays", note: "Opens on a crew rolling out the red carpet at night. Most-played reel of the 2026 cycle." },
  { href: "https://www.instagram.com/reel/DGA9IKcNzHb/", img: "DGA9IKcNzHb", who: "@miamiconcours", metric: "100,383 plays", note: "The account's best reel ever: the crowd filming a Pagani unveil on the carpet." },
  { href: "https://www.instagram.com/reel/DU1VxKOEV0R/", img: "DU1VxKOEV0R", who: "@carswithoutlimits collab", metric: "88,602 plays", note: "A person walks into frame and pulls a cover off. 3.3M-follower partner." },
  { href: "https://www.instagram.com/p/DUiuRmbkUmJ/", img: "DUiuRmbkUmJ", who: "@therealabd collab", metric: "11,087 likes", note: "Top post of the window, from a car creator's account. \"I got my ticket.\"" },
  { href: "https://www.instagram.com/p/DU5vlbVjlAo/", img: "DU5vlbVjlAo", who: "@lamborghinimiami collab", metric: "8,855 likes", note: "A dealer partner's 2.9M-follower audience doing the lifting." },
  { href: "https://www.instagram.com/reel/DURgiAOCDj-/", img: "DURgiAOCDj-", who: "@wearecurated collab", metric: "612 comments", note: "Ticket giveaway with John Temerian on camera. Most comments in the window." },
  { href: "https://www.instagram.com/reel/DUBys5Dj4oG/", img: "DUBys5Dj4oG", who: "@miamiconcours", metric: "52,846 plays", note: "Brett David and John Temerian invite people in. The one 2026 reel that says the offer out loud." },
  { href: "https://www.instagram.com/reel/DSx5lopkVBA/", img: "DSx5lopkVBA", who: "@miamidesigndistrict", metric: "187,216 plays", note: "The District's own Concours reel. Bigger than any reel on the event account, and not a collab." },
];

export const LOW_POSTS = [
  { href: "https://www.instagram.com/reel/DUa3l3NjdG7/", img: "DUa3l3NjdG7", who: "@miamiconcours", metric: "19,102 plays", note: "Static \"PURCHASE TICKETS NOW\" card in the first frame." },
  { href: "https://www.instagram.com/reel/DUYjDTTDYF3/", img: "DUYjDTTDYF3", who: "@miamiconcours", metric: "6,211 plays", note: "65-second explainer of the ticketed format. Lowest owned reel of the cycle." },
  { href: "https://www.instagram.com/p/DOY1sWRjV3u/", img: "DOY1sWRjV3u", who: "@miamiconcours", metric: "86 likes and comments", note: "Off-season single-car spec post. The format that fills the quiet months." },
];

/* ------------------------------------------------------------------ sentiment */

export const SENTIMENT = {
  corpus: [
    { k: "Instagram comments", v: 1783 },
    { k: "TikTok comments", v: 780 },
    { k: "YouTube comments", v: 383 },
    { k: "Instagram hashtag posts", v: 150 },
    { k: "Reddit posts and comments", v: 150 },
  ],
  total: 3246,
  overall: { pos: 40.2, neu: 43.9, neg: 8.4, q: 7.6, n: "2,056 text comments" },
  cycles: [
    { k: "2025 event cycle", pos: 41.4, neg: 24.9, q: 12.8, n: 273, note: "Free GA. Crowds, parking and safety." },
    { k: "2026 event cycle", pos: 55.1, neg: 8.2, q: 9.0, n: 512, note: "Ticketed. Price and VIP-gating complaints, calmer crowds." },
  ],
  themes: [
    { k: "Praise for the cars", n: 291, neg: 8, tone: "pos" },
    { k: "Free-to-paid switch and price", n: 124, neg: 50, tone: "mix" },
    { k: "Logistics questions", n: 106, neg: 26, tone: "q" },
    { k: "Overcrowding", n: 92, neg: 63, tone: "neg" },
    { k: "Personalities and access moments", n: 83, neg: 0, tone: "pos" },
    { k: "Parking and traffic", n: 59, neg: 35, tone: "neg" },
    { k: "Scheduling conflicts and awareness", n: 52, neg: 5, tone: "q" },
    { k: "Car safety and crowd behavior", n: 33, neg: 23, tone: "neg" },
    { k: "Hero cars behind the VIP rope", n: 31, neg: 11, tone: "mix" },
    { k: "Fewer or repeat cars", n: 20, neg: 12, tone: "neg" },
  ],
  quotes: [
    { q: "It's crazy, I've only missed 2 (or 3?), and think each can't possibly get better than the year before, but it does! So worth my 8 hours of driving.", who: "Instagram, repeat attendee, Feb 2026", href: "https://www.instagram.com/p/DU1Cjd_kfHV/", tone: "pos" },
    { q: "The best car show in Miami, unfortunately it's a victim of its own success.", who: "Dan, Instagram, photographer, Feb 2025", href: "https://www.instagram.com/p/DGGAvlzNmEM/", tone: "neg" },
    { q: "It being ticketed made it so much better. Didn't have to be there at 6am to actually see stuff.", who: "Benny, TikTok, Feb 2026", href: "https://www.tiktok.com/@jared_carphotovideo/video/7606123953735683341", tone: "pos" },
    { q: "Nothing like advertising the hell out of the P4/5, a car I have been wanting to see for the longest, only to have it roped off in the VIP section.", who: "Instagram, visiting from Texas, Feb 2026", href: "https://www.instagram.com/p/DUv_To5kQhQ/", tone: "neg" },
    { q: "The website details and FAQ section are extremely vague and lack any detail as to what the entire days look like.", who: "Steven, Instagram, Jan 2026", href: "https://www.instagram.com/p/DRmr6MLj_Fw/", tone: "q" },
    { q: "That's my poster he signed!!! So grateful for the opportunity to meet such an icon in the car community.", who: "Instagram attendee, Feb 2026", href: "https://www.instagram.com/p/DU1QjMhFQx6/", tone: "pos" },
    { q: "Why do I always see this stuff AFTER the fact?", who: "TikTok, Feb 2025", href: "https://www.tiktok.com/@wearecurated/video/7471763620590816543", tone: "q" },
    { q: "Was super excited to go. But after two hours of trying to park had to leave.", who: "Instagram, Feb 2025", href: "https://www.instagram.com/p/DGGAvlzNmEM/", tone: "neg" },
  ],
  response: { asked: 87, brand: 17, none: 52, negTotal: 102, negReplied: 8 },
  unanswered: [
    "Does general access for free mean you can see the cars?",
    "Will he be in the VIP area only or will GA people get to meet him?",
    "How is the spectator parking?",
    "How do I submit my car?",
    "Is any of the days free?",
  ],
  brands: [
    { k: "Pagani", v: 88 },
    { k: "Koenigsegg", v: 87 },
    { k: "Lamborghini", v: 84 },
    { k: "Ferrari", v: 72 },
    { k: "Bugatti", v: 61 },
    { k: "Porsche", v: 39 },
    { k: "Mercedes-AMG", v: 32 },
    { k: "McLaren", v: 26 },
    { k: "Czinger", v: 25 },
    { k: "Glickenhaus", v: 20 },
  ],
  words: {
    note: "In their own words, people call it a \"car show\" (77 mentions). Fashion, art and lifestyle language shows up in 44, mostly in captions and press. The \"auto, art and fashion\" position is real on camera, but the audience talks about cars and people.",
  },
  brief: [
    { h: "Free has to mean something specific", b: "Say what GA sees, which day, which hours, and that kids under 14 are welcome. The 2025 and 2026 comments are full of people who could not tell." },
    { h: "RSVP is crowd control", b: "A free RSVP with a chosen arrival window spreads the day out, gives the team a headcount a week early, and builds an audience to retarget for VIP." },
    { h: "Parking is content", b: "Parking and traffic drew 59 mentions, most of them negative. A pinned post, an SMS the morning of, and geo-targeted ads around the District solve most of it." },
    { h: "Show VIP, don't hide cars", b: "When the best car is behind a rope, tell people before they buy. Sell VIP on what it adds, not on what GA loses." },
    { h: "Someone answers", b: "Every question in event month gets a reply the same day. 52 of 87 sampled questions got no answer from anyone." },
  ],
};

/* ------------------------------------------------------------------ share of voice */

export const VOICE = {
  tiktok: [
    { k: "Creators with 10K+ followers", v: 12001584, pct: 91.9 },
    { k: "Organizers and partners", v: 647159, pct: 5.0 },
    { k: "Attendees with small accounts", v: 200645, pct: 1.5 },
    { k: "Sponsors and exhibitors", v: 147100, pct: 1.1 },
    { k: "Press", v: 69098, pct: 0.5 },
    { k: "@miamiconcours", v: 327, pct: 0.003, self: true },
  ],
  total: "13.07M",
  videos: 157,
  youtube: "Creators drove 84% of the 893,518 YouTube views on Miami Concours videos. The District's own 2026 recap has 50 views.",
  creators: [
    { handle: "@carsimping", platform: "TikTok", followers: "69.9K", reach: "7.5M", note: "2023 edition, still the biggest video tagged to the event", href: "https://www.tiktok.com/@carsimping/video/7202314643417599274", img: "7202314643417599274" },
    { handle: "@mattsv8", platform: "TikTok", followers: "29.1K", reach: "2.9M", note: "Glickenhaus SCG 004 door clip, 2026", href: "https://www.tiktok.com/@mattsv8/video/7607696545898614029", img: "7607696545898614029" },
    { handle: "@enzoedits812", platform: "TikTok", followers: "177K", reach: "2.3M", note: "Fan edit of the Lamborghini lineup", href: "https://www.tiktok.com/@enzoedits812/video/7484354176806341943", img: "7484354176806341943" },
    { handle: "@jessiicabergmann", platform: "TikTok", followers: "325.6K", reach: "541.7K", note: "Miami lifestyle guide. 13,500 shares, the most in the sample.", href: "https://www.tiktok.com/@jessiicabergmann/video/7469146179020934446", img: "7469146179020934446" },
    { handle: "@dailykellyp", platform: "TikTok", followers: "34.4K", reach: "438.2K", note: "Fashion fan account covering a guest's outfit", href: "https://www.tiktok.com/@dailykellyp/video/7472881076738837815", img: "7472881076738837815" },
    { handle: "@chl0ebean", platform: "TikTok", followers: "3M", reach: "203.1K", note: "The 2025 crowd thread lives in these comments", href: "https://www.tiktok.com/@chl0ebean/video/7472479344435170602", img: "7472479344435170602" },
    { handle: "@juancardzsa", platform: "TikTok", followers: "130.4K", reach: "125.4K", note: "Spanish-language hypercar walk", href: "https://www.tiktok.com/@juancardzsa/video/7607889223911345438", img: "7607889223911345438" },
    { handle: "Bistrighini", platform: "YouTube", followers: "7.2K", reach: "67.8K", note: "Full 2026 walkthrough. \"Comprehensive coverage as always.\"", href: "https://www.youtube.com/watch?v=H0rVXl4MSQw" },
  ],
  note: "This is the creator bench that already shows up unpaid. A structured program (early access, owner intros, a creator lane on the carpet, whitelisting rights) turns it into paid reach at organic prices.",
};

/* ------------------------------------------------------------------ video intelligence */

export const BRAIN = {
  corpus: [
    { k: "Miami Concours owned and collab reels", v: 34 },
    { k: "Peer concours reels (Cavallino, Amelia, Audrain, Pebble Beach)", v: 16 },
    { k: "Active peer Meta ads", v: 7 },
    { k: "Miami Design District reels", v: 6 },
    { k: "Creator TikToks", v: 4 },
  ],
  total: 67,
  minutes: "37.3",
  intro:
    "We loaded 67 videos into a TwelveLabs video-AI knowledge store (the event's own reels, the District's, creators', and the best reels and live ads from four peer concours) and questioned the whole library at once. Every finding below is tied to specific videos and timestamps. Click any of them to watch.",
  findings: [
    {
      h: "Winners open on a person. Ticket cards open dead.",
      b: "All four 2026 countdown reels open on the same static \"PURCHASE TICKETS NOW\" card and sit at 6,211 to 23,290 plays. Six of the seven most-played Concours reels checked have a person in frame in the first two seconds. The two cards that did win carried news: a weather date change (88,356 plays) and \"General admission is free\" (70,383).",
      take: "The first frame of every ad is a person or a moving car. A card only when it carries news.",
      clips: [
        { href: "https://www.instagram.com/reel/DSx5lopkVBA/", label: "Woman in white walks the carpet, 0:00", views: "187,216 plays" },
        { href: "https://www.instagram.com/reel/DUv_To5kQhQ/", label: "Crew kneels on the carpet at night, 0:00", views: "100,349 plays" },
        { href: "https://www.instagram.com/reel/DGEQ3JsN2UN/", label: "\"General admission is free\" card, 0:00", views: "70,383 plays" },
        { href: "https://www.instagram.com/reel/DUa3l3NjdG7/", label: "\"PURCHASE TICKETS NOW\" card, 0:00", views: "19,102 plays", low: true },
      ],
    },
    {
      h: "The best-performing 2026 reel is 2023 footage",
      b: "The most-played reel of the 2026 cycle shares its shots with the 2024 \"Flashback Friday\" reel, and both carry a burned-in \"JOIN US FEB 19\" graphic from 2023 at 0:30. The archive is working as ad material without anyone treating it as ad material.",
      take: "Nine editions of footage are a paid asset. Recut the best of it with 2027 end cards before new footage exists.",
      clips: [
        { href: "https://www.instagram.com/reel/DUv_To5kQhQ/", label: "\"JOIN US FEB 19\" at 0:30", views: "100,349 plays" },
        { href: "https://www.instagram.com/reel/C3JJuojrT0c/", label: "Same graphic, 2024 reel, 0:30", views: "64,331 plays" },
      ],
    },
    {
      h: "The offer is almost never said out loud",
      b: "In 16 reels from the 2026 cycle, a ticket call to action appears inside the video five times: four static cards and one spoken line from Brett David (tickets, kids free, date, place). No official reel ever shows a price. The most complete practical information came from a Spanish-language creator: hours, prices, kids free and the URL.",
      take: "\"Free. February 19 to 21. Miami Design District.\" spoken and on screen in every GA ad. VIP as its own message.",
      clips: [
        { href: "https://www.instagram.com/reel/DUBys5Dj4oG/", label: "Spoken CTA, 0:17 to 0:27", views: "52,846 plays" },
        { href: "https://www.tiktok.com/@miamifamilytime/video/7604939548577123597", label: "Creator states every detail, in Spanish", views: "60,900 plays" },
      ],
    },
    {
      h: "Cavallino sells tiers with one repeatable 23-second ad",
      b: "Every live Cavallino ad opens on the date and venue in the first second, runs a hospitality montage, and closes on a solid red card listing what the tier includes above \"SECURE YOUR PLACE\". No price. A second variant is a guest testimonial: \"If you like Ferraris, you have to come to this event.\"",
      take: "Build the VIP ad the same way, in Miami terms: date and place first, then what VIP adds on the carpet.",
      clips: [
        { href: "https://www.facebook.com/ads/library/?id=901168189436698", label: "Cavallino Patron ad, dated open and tier card", views: "Active Meta ad" },
        { href: "https://www.instagram.com/reel/DbqhIwdoe6e/", label: "Cavallino testimonial, 0:20", views: "33,626 plays" },
      ],
    },
    {
      h: "VIP is only ever shown as a room",
      b: "Where VIP appears in Concours footage it is a lounge, a bar, a \"COLLECTORS' LOUNGE\" sign. Nothing shows what a VIP ticket buys on the red carpet itself, and the one on-camera explanation of the ticketed format was the weakest owned reel of the cycle.",
      take: "Film VIP as access: the carpet before the crowd, a door opened for you, an owner talking to you.",
      clips: [
        { href: "https://www.instagram.com/reel/DFvU2ynp1f9/", label: "VIP pitch over lounge and bar, 0:19", views: "57,417 plays" },
        { href: "https://www.instagram.com/reel/DUYjDTTDYF3/", label: "Format explainer", views: "6,211 plays", low: true },
      ],
    },
    {
      h: "Fashion is on screen. Art mostly isn't.",
      b: "The District's reels and partner reels show storefronts constantly (Dior, Chanel, Louis Vuitton, Cartier, Bottega Veneta) and styled guests on the carpet. Art is thin: a statue and a mural in archive footage, one installation. The District's June reel announcing 2027 shows no date on screen.",
      take: "Auto plus fashion is proven. If art stays in the line, 2027 needs a filmed art moment.",
      clips: [
        { href: "https://www.instagram.com/reel/DT8pxuYkkF2/", label: "Storefront run, 0:00 to 0:12", views: "161,502 plays" },
        { href: "https://www.instagram.com/reel/DZDvavZhFqr/", label: "2027 announcement, no date on screen", views: "30,200 plays" },
      ],
    },
    {
      h: "Winners run on music or a voice, not engine sound",
      b: "None of the six top Concours reels checked has audible engine sound as the bed. The District's best reel is carried by a voiceover: \"These are the dream cars of our times.\" Cavallino uses engine sound only under driving shots.",
      take: "Lead with a voice over music. Use an engine start as a sting, not the soundtrack.",
      clips: [
        { href: "https://www.instagram.com/reel/DSx5lopkVBA/", label: "Voiceover, 0:00 to 0:20", views: "187,216 plays" },
        { href: "https://www.instagram.com/reel/DU1VxKOEV0R/", label: "Music bed, no engine", views: "88,602 plays" },
      ],
    },
    {
      h: "Crowds read as scale from above and as a crush from the ground",
      b: "Drone shots of the carpet read as spectacle. Ground shots of unveilings show people blocking the car. The creators with the biggest reach film owners and walk-and-talks, and Amelia's attendee vox-pop (\"so make sure you come next year\") is a format the Concours feed has never run.",
      take: "Crowds from above, individuals from the ground. Book owners and attendees on camera.",
      clips: [
        { href: "https://www.instagram.com/reel/DGA9IKcNzHb/", label: "Crowd blocks the unveil, 0:00", views: "100,383 plays" },
        { href: "https://www.tiktok.com/@flasupercars/video/7622688981636926751", label: "Owner walkthrough, 84 seconds", views: "13,000 plays" },
        { href: "https://www.instagram.com/reel/DVmBK4FlHHG/", label: "Amelia attendee vox-pop", views: "44,077 plays" },
      ],
    },
  ],
  cutdowns: [
    { href: "https://www.instagram.com/reel/DGA9IKcNzHb/", tc: "0:00 to 0:15", m: "Pagani unveiled on the carpet, crowd filming", src: "Owned" },
    { href: "https://www.instagram.com/reel/DU1VxKOEV0R/", tc: "0:08 to 0:14", m: "Cover pulled off a green Porsche, crowd photographing", src: "Partner" },
    { href: "https://www.instagram.com/reel/DSx5lopkVBA/", tc: "0:00 to 0:06", m: "Woman in white walks the carpet past a classic", src: "District" },
    { href: "https://www.instagram.com/reel/DUBys5Dj4oG/", tc: "0:08 to 0:17", m: "Aerial over the carpet into a Pagani and a McLaren F1 GTR", src: "Owned" },
    { href: "https://www.instagram.com/reel/DUtCeO1joY4/", tc: "0:00 to 0:08", m: "High-angle move over people and cars, reveals Armani", src: "Partner" },
    { href: "https://www.instagram.com/reel/DDZ46JOukGe/", tc: "0:00 to 0:06", m: "McLaren drives at camera during Art Week Cars and Coffee", src: "Owned" },
  ],
};

/* ------------------------------------------------------------------ partners */

export const PARTNERS = {
  owned: 30784,
  list: [
    { k: "Lamborghini Miami", v: 2917412 },
    { k: "Christian von Koenigsegg", v: 1578518, note: "2026 Guest of Honor. Never a collab." },
    { k: "duPont REGISTRY", v: 1022601 },
    { k: "Miami Design District", v: 423791 },
    { k: "Prestige Imports", v: 358139 },
    { k: "CURATED", v: 198044 },
    { k: "The Concours Club", v: 31214 },
    { k: "@miamiconcours", v: 30784, self: true },
  ],
  tiktok: "On TikTok the same partners add about 918K followers: duPont REGISTRY 602.3K, Miami Design District 285.8K, Prestige Imports 30.2K.",
  facts: [
    { v: "5.4x", l: "median engagement on collab posts versus solo posts, 2026 cycle" },
    { v: "187,216", l: "plays on the District's best Concours reel. The event account's best ever: 100,383." },
    { v: "0 of 9", l: "District Concours posts co-authored with @miamiconcours" },
  ],
  note: "The media plan should run through these accounts: Instagram collabs on every hero post, and partnership ads (whitelisting) so paid budget runs from the handles people already follow.",
};

/* ------------------------------------------------------------------ competition */

export const FIELD = {
  rows: [
    { k: "Miami Concours", date: "Feb 19 to 21, 2027", price: "Free GA, paid VIP", ig: "30.8K", tt: "46", ads: "0", self: true },
    { k: "Cavallino Classic Palm Beach", date: "Feb 19 to 21, 2027", price: "$495 GA to $14,000", ig: "122.7K", tt: "None", ads: "81 active", hot: true },
    { k: "ModaMiami (Miami Car Week)", date: "Feb 26 to 28, 2027", price: "$275 to $2,985", ig: "n/a", tt: "n/a", ads: "Not found" },
    { k: "The Amelia", date: "Mar 2027", price: "From $126 (2026 sale)", ig: "31.7K", tt: "None", ads: "Not found" },
    { k: "Audrain Newport", date: "Oct 1 to 4, 2026", price: "$250 GA, $500 VIP", ig: "22.5K", tt: "8", ads: "92 active", hot: true },
    { k: "Pebble Beach", date: "Aug 15, 2027", price: "$650 to $5,000", ig: "138.5K", tt: "None", ads: "0 active" },
    { k: "Greenwich", date: "May 2026", price: "From $75", ig: "27.2K", tt: "None", ads: "Not found" },
    { k: "Rodeo Drive Concours", date: "June 2026", price: "Free, street show", ig: "114.4K (Rodeo Drive)", tt: "n/a", ads: "4 (June)" },
  ],
  map: {
    tl: ["Pebble Beach", "Cavallino", "Audrain"],
    tr: ["The Quail", "ModaMiami", "Boca Raton gala"],
    bl: ["Greenwich", "The Amelia"],
    br: ["Miami Concours", "Rodeo Drive (June, LA)"],
  },
  white:
    "Miami Concours is the only free, street-format concours set in a luxury design district during South Florida's peak season. Every February neighbor is gated and priced. The closest analog, Rodeo Drive, runs in June in Los Angeles.",
  obs: [
    { h: "Cavallino is already buying your weekend", b: "Same dates, an hour up the coast, 81 active Meta ads including \"Reserve Your Place. Feb 2027\". It also appears on Miami Concours' sponsor wall. The collector audience will hear from Cavallino for five months before it hears from Miami Concours." },
    { h: "Audrain is the paid template", b: "92 active ads, one per ticket tier or sub-event (GA, two-day, VIP, kids day), each tracked to its own ticket link. Miami Concours has the same building blocks: The Screening, Collectors Dinner, Porsche and Petals, Red Carpet Day, VIP." },
    { h: "TikTok is open ground", b: "No major concours has a real TikTok presence. A free street show with fashion and hypercars is TikTok-native in a way a judged lawn show is not." },
  ],
};

export const CALENDAR = [
  { d: "Feb 10 to 14", k: "Miami International Boat Show", note: "49,500 searches in Feb 2026" },
  { d: "Feb 13 to 15", k: "Presidents Day weekend", note: "Coconut Grove Arts Festival" },
  { d: "Feb 19 to 21", k: "Miami Concours, tenth edition", self: true },
  { d: "Feb 19 to 21", k: "Cavallino Classic Palm Beach", note: "Same weekend, 81 active ads", hot: true },
  { d: "Feb 21", k: "Daytona 500", note: "Same Sunday" },
  { d: "Feb 25 to 28", k: "South Beach Wine and Food Festival", note: "25th edition" },
  { d: "Feb 26 to 28", k: "ModaMiami and RM Sotheby's", note: "8,000+ guests and a $74M sale in 2026" },
];

export const CALENDAR_NOTE =
  "February is now a three-weekend car month in Miami. The strongest position is the one only Miami Concours can hold: the free, public opening of Miami's car season, a week before the gated events.";

/* ------------------------------------------------------------------ sponsors */

export const SPONSORS = {
  intro:
    "Peer concours sell categories Miami Concours has not sold yet, in the US city with the highest concentration of millionaires.",
  wealth: [
    { v: "38,800", l: "millionaires in Miami" },
    { v: "180", l: "centi-millionaires" },
    { v: "17", l: "billionaires" },
  ],
  gaps: [
    { k: "Presenting partner for the tenth edition", peer: "A. Lange & Sohne presents Audrain" },
    { k: "Luxury watch", peer: "Rolex at Pebble Beach" },
    { k: "Private aviation", peer: "Flexjet at Pebble, Airbus Corporate Jets at Amelia" },
    { k: "Champagne house", peer: "Dom Perignon and Ruinart at Pebble" },
    { k: "Collector insurance and finance", peer: "Hagerty owns Amelia and Greenwich" },
    { k: "Private bank or wealth manager", peer: "Unclaimed at Miami Concours today" },
  ],
  proof: [
    "Verified reach and frequency by sponsor, by platform",
    "Audience composition from RSVP and VIP data",
    "Sponsor-tagged content performance and creator deliveries",
    "A post-event report page per sponsor, live the week after",
  ],
  note: "Every dollar of paid media we run doubles as sponsor inventory. Measured reach is what turns a logo on a wall into a renewal and a bigger ask next year.",
};

/* ------------------------------------------------------------------ plan */

export const SYSTEM = {
  intro:
    "Free GA changes the job. The goal is not to sell a ticket to everyone; it is to know who is coming, spread them across the weekend, and turn the right ones into VIP buyers and sponsor audiences.",
  nodes: [
    { k: "Reach", items: ["Meta and Instagram", "TikTok", "YouTube", "Partner and creator whitelisting", "Branded search"] },
    { k: "Free RSVP", items: ["PromoTix registration", "Arrival window and day", "Parking or rideshare choice", "Referral contest"] },
    { k: "Audiences", items: ["RSVP list", "Contest entrants and referrals", "Video viewers", "Site visitors via pixel and CAPI"] },
    { k: "VIP and revenue", items: ["VIP retargeting", "Collectors Dinner and Screening", "Out-of-town packages", "SMS and email"] },
    { k: "Event weekend", items: ["Arrival reminders", "Geo-targeted parking messages", "Live content and creators", "People's Choice vote"] },
    { k: "After", items: ["Sponsor reports", "UGC and recap", "Tenth anniversary archive", "2028 save the date"] },
  ],
};

export const PROMOTIX = {
  intro:
    "PromoTix introduced us, and the two systems fit together cleanly: PromoTix runs registration, ticketing and the referral contest, and Crowd Control runs the media and measurement on top of it.",
  items: [
    { h: "Conversion tracking", b: "RSVP, contest entry, referral and VIP purchase sent server-side to Meta, TikTok and Google, so every platform optimizes to real outcomes." },
    { h: "Paid push on the viral contest", b: "Ads drive the first entrants; every entrant brings friends. Referral entries lower the blended cost per RSVP the longer the contest runs." },
    { h: "Audiences from contest data", b: "Entrants, top referrers and their friends become custom and lookalike audiences, then the pool we retarget for VIP." },
    { h: "One view of the funnel", b: "RSVPs, arrival windows, VIP revenue and spend in one weekly report, so the team sees pacing, not surprises." },
  ],
};

export const AUDIENCES = [
  { k: "Collectors and owners", b: "High-net-worth car owners, dealer and auction audiences, lookalikes of past VIP buyers. The VIP and Collectors Dinner audience." },
  { k: "Miami lifestyle", b: "Design District shoppers, fashion, art and dining audiences within 25 miles. The reason the event is more than a car show." },
  { k: "Enthusiasts and families", b: "Car culture, cars and coffee regulars, families with kids. The free GA audience that creates the energy, managed with arrival windows." },
  { k: "Out-of-town visitors", b: "Travelers planning Miami in February from the Northeast, Canada and Latin America, reached in December and January when trips get booked." },
  { k: "Spanish-language Miami", b: "The most complete explanation of the 2026 event came from a Spanish-language creator. Ads and captions in both languages." },
];

export const PHASES = [
  { k: "Foundations", when: "October", items: ["Fix list and tracking", "PromoTix RSVP, contest and server-side events", "One date line everywhere", "Creator and partner outreach"] },
  { k: "Tenth announcement", when: "November to mid-December", items: ["Anniversary content from the archive", "Partner collabs and whitelisting", "Art Week moment in early December", "First-party audience building"] },
  { k: "Out of town", when: "Mid-December to January", items: ["Travel-intent audiences in feeder markets", "Branded and category search", "VIP and hotel packages", "Creator previews"] },
  { k: "RSVP and VIP push", when: "January to February 18", items: ["Referral contest live", "VIP tier ads, one per product", "Arrival window reminders", "Guest of honor and car reveals"] },
  { k: "Event weekend", when: "February 19 to 21", items: ["Live content and creator lane", "Parking and arrival messages by SMS and geo-targeting", "Community management all day", "People's Choice vote"] },
  { k: "After", when: "February 22 onward", items: ["Sponsor report pages", "Recap and UGC", "Retain RSVPs for 2028", "Always-on monthly content"] },
];

export const MEASURE = [
  "RSVPs and cost per RSVP, by channel and audience",
  "Arrival window mix against the capacity plan",
  "VIP revenue and return on ad spend",
  "Contest entries and referrals per entrant",
  "Sponsor impressions delivered and audience quality",
  "Share of voice and comment response time",
];

/* ------------------------------------------------------------------ creative */

export const CREATIVE = {
  label: "Example creative. Generated with AI for this audit. Directional only.",
  intro:
    "Concepts built from the findings above: a person in the first frame, the offer on screen, VIP shown as access, the District on camera. Final assets would be shot at the event, cut from the archive, and filmed with partners and creators.",
  ads: [
    {
      k: "Free RSVP",
      fmt: "Reels and Stories, 9:16",
      video: "ga-walk.mp4",
      img: "ga-walk.webp",
      top: "The tenth Miami Concours",
      big: "Free. Pick your arrival time.",
      small: ["February 19 to 21, 2027", "Miami Design District"],
      cta: "RSVP Free",
      why: "Person in frame one, offer said on screen, arrival windows spread the crowd.",
      ratio: "916",
    },
    {
      k: "VIP",
      fmt: "Feed, 3:4",
      video: "vip-door.mp4",
      img: "vip-door.webp",
      top: "Miami Concours VIP",
      big: "The carpet before the crowd.",
      small: ["Early carpet access", "Chef-led hospitality", "Complimentary valet"],
      cta: "Secure VIP",
      why: "Sells VIP as access on the carpet. Tier card in the Cavallino structure.",
      ratio: "34",
    },
    {
      k: "Tenth anniversary",
      fmt: "Feed, 3:4",
      video: "first-light.mp4",
      img: "first-light.webp",
      top: "2018 to 2027",
      big: "Ten years on the red carpet.",
      small: ["February 19 to 21", "Miami Design District"],
      cta: "Learn More",
      why: "Crowds from above read as spectacle. A clean opener for the announcement phase.",
      ratio: "34",
    },
    {
      k: "Carpet roll-out",
      fmt: "Reels and TikTok, 9:16",
      video: "carpet-roll.mp4",
      img: "",
      top: "",
      big: "The street becomes a runway.",
      small: ["Free RSVP now open"],
      cta: "RSVP Free",
      why: "Recreates the opening of the most-played 2026 reel with new footage.",
      ratio: "916",
    },
  ],
  stills: [
    { img: "fashion.webp", k: "Out of town", line: "Miami's car season opens in the Design District.", why: "Fashion-first creative for lifestyle and travel audiences." },
    { img: "owner-ugc.webp", k: "Owner stories", line: "Meet the owners on the carpet.", why: "The creator format with the biggest reach: owners talking, not car lists." },
    { img: "ten-wallscape.webp", k: "Presenting partner", line: "A tenth-edition campaign a presenting partner can own.", why: "Out-of-home in the District, sold as sponsor inventory." },
  ],
};

/* ------------------------------------------------------------------ next */

export const WHY = {
  intro:
    "Crowd Control is a culture-first agency. We run event-specific paid digital, social and creative for brands, venues, tours and festivals, and we build the reporting our clients' partners see.",
  points: [
    { h: "Events are the core of what we do", b: "Tours, festivals, venues and brand activations, where paid media has a hard date and a room to fill." },
    { h: "Crowd control, literally", b: "RSVP-first funnels with arrival windows and live comms, built for free events that need a headcount before the day." },
    { h: "Measurement partners can see", b: "Live report pages per client and per sponsor, refreshed daily, not a PDF a month later." },
    { h: "Creative from data", b: "Video AI, social listening and competitor teardowns decide what we make before we make it." },
  ],
  clients: [
    "Porsche",
    "NBA",
    "Golden State Warriors",
    "Apple",
    "Amazon",
    "Beats By Dre",
    "Warner Bros",
    "Foot Locker",
    "Edition Hotels",
    "Monster Energy",
    "Malbon Golf",
    "Polymarket",
    "Weedmaps",
    "Barker Wellness",
    "Aplós",
    "Prima",
  ],
};

export const NEXT = {
  steps: [
    { h: "Walk-through call", b: "We take the team through this audit and hear what the tenth edition needs to do." },
    { h: "Foundation sprint", b: "Two weeks: tracking, PromoTix events, the fix list, audiences and the creative plan." },
    { h: "Launch", b: "The tenth-edition announcement goes out with paid support behind it in November." },
  ],
  need: [
    "Meta Business Manager and ad account access",
    "GA4 and website (WordPress) access",
    "PromoTix dashboard access",
    "2025 and 2026 attendee and ticket buyer exports",
    "Photo and video archive, with usage rights",
    "Partner and sponsor contacts for collabs and whitelisting",
  ],
  book: "https://app.reclaim.ai/m/team-leads",
  email: "geoff@crowdcontroldigital.com",
  name: "Geoff Shames",
  role: "Crowd Control Digital",
};

export const SOURCES = [
  "Instagram: Apify instagram-profile-scraper and instagram-scraper, 369 of 371 @miamiconcours posts, 306 @miamidesigndistrict posts, 1,783 comments, pulled Sep 30, 2026",
  "TikTok: Apify clockworks/tiktok-scraper (#miamiconcours, 200 results, 157 confirmed Concours videos), Tokscript user and video data, TikTok oEmbed",
  "YouTube: channel and search pages, 125 relevant videos, 383 comments",
  "Facebook and X: Apify facebook-pages and facebook-posts scrapers, fxtwitter API",
  "Reddit: 16 posts and 134 comments mentioning Miami Concours",
  "Sentiment: rule-based labeling with a manual read of every text comment and about 200 corrections",
  "Video AI: TwelveLabs Jockey knowledge store, 67 videos, 37.3 minutes",
  "Search: Google Ads Keyword Planner, US, Sep 2025 to Aug 2026; Google autocomplete, Sep 30, 2026",
  "Ads: Meta Ad Library (US, active and inactive), Sep 30, 2026",
  "Website: Lighthouse 12.8 mobile and desktop lab runs; page source of 12 miamiconcours.com pages; linktr.ee/miamiconcours",
  "Competitors and calendar: organizer sites, Meta Ad Library, Instagram profile data, Miami Boat Show, Daytona International Speedway, SOBEWFF, RM Sotheby's press release on ModaMiami 2026",
  "Wealth: Henley and Partners via Miami New Times, Jan 20, 2026. Tourism: Greater Miami Convention and Visitors Bureau, 2025 results",
  "Press: duPont REGISTRY, Robb Report, Haute Living, Hypebeast, Elite Traveler, Resident, Cigar Aficionado, PROFILEmiami, Community Newspapers, Time Out Miami",
  "Photography: miamiconcours.com gallery",
];

/** Shadowbox metadata for posts referenced inline or in grids. */
export const POSTS: Record<string, { title: string; views?: string; platform: string; metric?: string; context?: string; poster?: string }> = {};
