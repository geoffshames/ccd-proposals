/**
 * R&B Love Festival (formerly Lovers & Friends): digital audit (Crowd Control Digital).
 * Every figure below was pulled September 30 to October 1, 2026 from a scrape, API,
 * ad library, Keyword Planner export, Lighthouse run, video AI query or fetched page.
 * Sources are listed in SOURCES. Sentiment figures are analytical estimates.
 */

export const IMG = "/images/lovers-and-friends";
export const P = (id: string) => `${IMG}/posts/${id}.webp`;
export const PH = (f: string) => `${IMG}/photos/${f}.webp`;

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "record", label: "Track record" },
  { id: "market", label: "Market" },
  { id: "social", label: "Social" },
  { id: "sentiment", label: "Sentiment" },
  { id: "demand", label: "Demand" },
  { id: "video", label: "Video AI" },
  { id: "funnel", label: "Funnel" },
  { id: "plan", label: "Plan" },
  { id: "creative", label: "Creative" },
  { id: "pricing", label: "Pricing" },
  { id: "next", label: "Next" },
] as const;

export const HERO = {
  kicker: "Prepared for the R&B Love Festival team",
  title: "R&B Love Festival",
  line: "Digital Audit",
  sub: "Formerly Lovers & Friends. Brand, market, social, sentiment, search, video AI and a relaunch plan.",
  body: "Two Las Vegas editions, a third that sold out on presale day and was cancelled for wind the night before, and 28 months of silence. We measured everything public about Lovers & Friends against ten peer festivals: 494 Instagram posts, 19,635 fan comments and posts, 24 months of search demand and every ad library entry, and reviewed 61 videos, 30 of them with video AI. The audience never left. This is the evidence, and the plan to bring it back.",
  stats: [
    { value: 448885, label: "Instagram followers, 3rd of 11 festivals benchmarked" },
    { value: 879, label: "days since the last post on any channel" },
    { value: 19635, label: "fan comments and posts analyzed" },
  ],
  date: "Audit date: September 30, 2026",
};

export const MARQUEE = [
  "Ms. Lauryn Hill",
  "Usher",
  "Missy Elliott",
  "Mariah Carey",
  "Janet Jackson",
  "TLC",
  "Lil Wayne",
  "Ciara",
  "Nelly",
  "Christina Aguilera",
  "Chris Brown",
  "Alicia Keys",
  "Backstreet Boys",
  "50 Cent",
  "Ashanti",
  "Busta Rhymes",
];

export const SUMMARY = {
  intro:
    "Lovers & Friends built one of the strongest audiences in the festival category in three years, then stopped talking to it. Every finding below points the same way: the demand is intact, the trust is not, and the owned channels that could fix it have been frozen since May 2024.",
  items: [
    {
      n: "01",
      to: "record",
      head: "Demand was never the problem",
      body: "The 2022 presale sold out in about an hour and forced a second day. 2023 sold out. GA rose 86% from 2022 to 2024 and 2024 still sold out on presale day.",
    },
    {
      n: "02",
      to: "social",
      head: "A top-three audience, gone quiet",
      body: "448,885 Instagram followers, 2.2x the peer median. Median TikTok plays 11x the peer median. Zero posts since May 4, 2024, the longest silence of any festival in the set.",
    },
    {
      n: "03",
      to: "sentiment",
      head: "Fans love the show, not the operation",
      body: "Performance and nostalgia talk runs 86% positive. Refunds run 77% negative, cancellation trust 73%, weather 60%. Cancellation trust is the single biggest theme at 15.7% of on-topic conversation.",
    },
    {
      n: "04",
      to: "sentiment",
      head: "Silence is doing the damage",
      body: "2 official replies to 1,853 fan questions under brand posts. Refund status, set times and \"is it coming back\" are the top unanswered questions, and fans are still asking for 2027 this month.",
    },
    {
      n: "05",
      to: "demand",
      head: "Search interest is leaking away",
      body: "12,400 searches for the festival in January 2025 with no edition announced. By August 2026 it was 1,320. The official site they find still leads with the 2024 cancellation notice.",
    },
    {
      n: "06",
      to: "funnel",
      head: "Every door still says 2024",
      body: "Homepage, bios, help center and schema all still describe 2024. The pixels still fire, the Ad Library shows no ads, and other brands are already advertising \"Lovers & Friends 2027.\"",
    },
  ],
};

/* ----------------------------------------------------------------------------
 * 02 Track record
 * ------------------------------------------------------------------------- */

export const EDITIONS = [
  {
    y: "2020",
    state: "cancelled",
    place: "Carson, CA",
    head: "The idea, in Los Angeles",
    names: "Lauryn Hill, Usher, Ludacris, Lil Jon, TLC",
    body: "Announced for May 8, a second date added on demand, both reported sold out, then cancelled for COVID-19. Ticket holders refunded automatically.",
    stat: "2 dates",
    statL: "sold out before cancellation",
  },
  {
    y: "2022",
    state: "held",
    place: "Las Vegas Festival Grounds",
    head: "Vegas, two days",
    names: "Lauryn Hill, Usher, Ludacris, Lil Jon, TLC",
    body: "May 14 to 15. The first presale sold out in about an hour and a second day was added. Extreme heat, and a false alarm late on day one caused a crowd rush that paused the show for about an hour.",
    stat: "~60,000",
    statL: "crowd cited by local press",
  },
  {
    y: "2023",
    state: "held",
    place: "Las Vegas Festival Grounds",
    head: "One day, four stages",
    names: "Missy Elliott, Usher, Mariah Carey",
    body: "May 6, moved a week earlier for cooler temperatures. Shade, misting stations and free water added. Sold out, with a small extra GA release in April. The brand's best year online.",
    stat: "~70,000",
    statL: "attendance, sold out",
  },
  {
    y: "2024",
    state: "cancelled",
    place: "Las Vegas Festival Grounds",
    head: "Sold out, then the wind",
    names: "Usher, Janet Jackson, Backstreet Boys, Lil Wayne",
    body: "May 4, five stages, 79 acts. Sold out on presale day. Cancelled the night before under a High Wind Warning with gusts above 60 mph. Ticket refunds through Front Gate; travel not covered.",
    stat: "79",
    statL: "acts on the poster",
  },
  {
    y: "2025 to 2026",
    state: "dark",
    place: "",
    head: "No edition, no update",
    names: "",
    body: "No lineup, dates or statement on any owned channel. The homepage still leads with the 2024 cancellation notice.",
    stat: "0",
    statL: "posts in 28 months",
  },
];

export const PRICES = [
  { y: "2022", ga: 175, vip: 300 },
  { y: "2023", ga: 250, gaPlus: 465, vip: 565 },
  { y: "2024", ga: 325, gaPlus: 595, vip: 695 },
];

export const GENRES = {
  keys: ["R&B", "Hip-hop", "Caribbean", "Latin and Chicano", "Pop"],
  years: [
    { y: "2022", n: 56, v: [57.1, 33.9, 5.4, 3.6, 0] },
    { y: "2023", n: 49, v: [36.7, 40.8, 10.2, 10.2, 2.0] },
    { y: "2024", n: 79, v: [54.4, 34.2, 2.5, 1.3, 7.6] },
  ],
  note: "Acts classified by primary genre at their peak era. 2022 from the original 56-act poster, 2023 compiled from Stereogum and Rolling Stone, 2024 from the 79-act poster.",
};

export const RECORD_STATS = [
  { v: "+86%", l: "GA price, 2022 to 2024, with every edition still selling out" },
  { v: "49%", l: "of the 2024 poster had already played 2022 (39 of 79 acts)" },
  { v: "5", l: "acts on every Vegas bill: Usher, Eve, Ginuwine, Next, Sean Paul" },
  { v: "7 of 10", l: "2024 sponsors were alcohol brands" },
];

export const RECORD_NOTES = [
  {
    h: "The format is proven",
    b: "A deep, era-specific bill at a single price sold out at three rising price points. Lineup depth is the product.",
  },
  {
    h: "The identity drifted in 2024",
    b: "2023 leaned hip-hop and added a Chicano and Caribbean block. 2024 added a pop lane (Backstreet Boys, Gwen Stefani, Nelly Furtado). Fans did not object to repeats: \"same lineup\" complaints are 0.2% of conversation.",
  },
  {
    h: "The calendar carries risk",
    b: "Every edition has sat in the windiest stretch of the Las Vegas year: April to June average the highest wind speeds (National Weather Service). When We Were Young lost a day to wind at the same grounds.",
  },
];

/* ----------------------------------------------------------------------------
 * 03 Market
 * ------------------------------------------------------------------------- */

export const MARKET = {
  intro:
    "The nostalgia category is thinning out. Of the ten peers we benchmarked, at least four did not run in 2026. The R&B and hip-hop festivals still running are East and South (Roots Picnic, Essence) or current rap (Rolling Loud). The 90s and 2000s R&B and hip-hop lane in the West has nobody in it.",
  peers: [
    { k: "Rolling Loud", lane: "Current hip-hop", where: "Orlando", s: "held", note: "May 8 to 10, 2026. Already selling 2027." },
    { k: "Roots Picnic", lane: "Hip-hop, R&B, soul", where: "Philadelphia", s: "held", note: "May 30 to 31, 2026." },
    { k: "Essence Fest", lane: "R&B, Black culture", where: "New Orleans", s: "held", note: "July 3 to 5, 2026." },
    { k: "Sueños", lane: "Latin, reggaeton", where: "Chicago", s: "held", note: "May 23 to 24, 2026. 80,000+ in 2025." },
    { k: "Just Like Heaven", lane: "Indie nostalgia", where: "Pasadena", s: "held", note: "Moved from May to August 22, 2026." },
    { k: "When We Were Young", lane: "Emo nostalgia", where: "Las Vegas", s: "paused", note: "Took 2026 off. Returning October 2027." },
    { k: "ONE Musicfest", lane: "Hip-hop, R&B", where: "Atlanta", s: "paused", note: "Skipping 2026 to reinvent." },
    { k: "Dreamville", lane: "Hip-hop", where: "Raleigh", s: "ended", note: "Final edition April 2025." },
    { k: "Bésame Mucho", lane: "Latin nostalgia", where: "Los Angeles", s: "paused", note: "LA 2024 cancelled. Last edition: Austin, April 2025." },
    { k: "Cruel World", lane: "New wave, goth", where: "Pasadena", s: "paused", note: "No 2026 edition found." },
    { k: "Lovers & Friends", lane: "90s and 2000s R&B, hip-hop", where: "Las Vegas", s: "dark", note: "No edition since May 2023.", self: true },
  ],
  stats: [
    { v: "118", l: "festival cancellations in 2026 counted by Music Festival Wizard" },
    { v: "-7.5%", l: "Las Vegas visitation in 2025 (38.5M), with average room rates down 5%" },
    { v: "83%", l: "Essence 2025 hotel occupancy, down from 91% in 2024" },
    { v: "$249", l: "Rolling Loud California 2027 3-day pass, all-in, the price anchor fans will compare against" },
  ],
  window: [
    { d: "May 8 to 10", k: "Rolling Loud", where: "Orlando" },
    { d: "May 15 to 17", k: "EDC Las Vegas", where: "Las Vegas Motor Speedway" },
    { d: "May 23 to 24", k: "Sueños", where: "Chicago" },
    { d: "May 30 to 31", k: "Roots Picnic", where: "Philadelphia" },
    { d: "July 3 to 5", k: "Essence Fest", where: "New Orleans" },
    { d: "October", k: "When We Were Young", where: "Las Vegas. Off in 2026, back in 2027" },
  ],
  windowNote:
    "The 2026 spring and summer calendar for the category. The early-May Vegas slot sits between Rolling Loud and EDC; the 2022 to 2024 editions ran May 4 to 15.",
  callout:
    "R&B Love Festival inherits a position nobody else holds: the definitive 90s and 2000s R&B and hip-hop festival, west of the Mississippi, in a destination city. Its closest peers are paused or gone. The opening is real, and it is time-boxed: When We Were Young returns to the same grounds in October 2027.",
};

/* ----------------------------------------------------------------------------
 * 04 Social
 * ------------------------------------------------------------------------- */

export type Peer = {
  k: string;
  ig: number;
  er: number;
  reel: number;
  tt: number | null;
  ttPlays: number | null;
  wk: number;
  dark: number;
  collab: number;
  self?: boolean;
};

export const PEERS: Peer[] = [
  { k: "Lovers & Friends", ig: 448885, er: 1.56, reel: 185558, tt: 52600, ttPlays: 34000, wk: 0, dark: 879, collab: 2, self: true },
  { k: "Rolling Loud", ig: 2385526, er: 0.97, reel: 387662, tt: 3800000, ttPlays: 23200, wk: 3.81, dark: 0, collab: 52 },
  { k: "When We Were Young", ig: 1273523, er: 1.58, reel: 364773, tt: 117300, ttPlays: 18850, wk: 0, dark: 215, collab: 19 },
  { k: "Bésame Mucho", ig: 384409, er: 0.74, reel: 103384, tt: 37400, ttPlays: 16100, wk: 0, dark: 524, collab: 5 },
  { k: "Essence Fest", ig: 364565, er: 0.31, reel: 40893, tt: 12200, ttPlays: 990, wk: 7.78, dark: 13, collab: 83 },
  { k: "ONE Musicfest", ig: 201696, er: 0.54, reel: 29016, tt: 10600, ttPlays: 3042, wk: 0.39, dark: 2, collab: 42 },
  { k: "Roots Picnic", ig: 197359, er: 1.08, reel: 48137, tt: 5702, ttPlays: 1785, wk: 4.12, dark: 49, collab: 96 },
  { k: "Dreamville", ig: 184481, er: 2.58, reel: 106197, tt: null, ttPlays: null, wk: 0, dark: 406, collab: 67 },
  { k: "Sueños", ig: 182768, er: 1.76, reel: 43361, tt: 115400, ttPlays: 9719, wk: 1.79, dark: 0, collab: 20 },
  { k: "Cruel World", ig: 86256, er: 1.51, reel: 31064, tt: 7448, ttPlays: 1386, wk: 0, dark: 496, collab: 30 },
  { k: "Just Like Heaven", ig: 67955, er: 1.0, reel: 18280, tt: 3272, ttPlays: 1357, wk: 7.7, dark: 33, collab: 26 },
];

export const METRICS = [
  { id: "ig", k: "Instagram followers", fmt: "n", note: "Current follower count." },
  { id: "reel", k: "Median reel plays", fmt: "n", note: "Median plays across each account's 100 most recent posts that are reels." },
  { id: "ttPlays", k: "Median TikTok plays", fmt: "n", note: "Median plays across each account's 100 most recent TikToks. Dreamville has no usable TikTok." },
  { id: "er", k: "Instagram engagement rate", fmt: "pct", note: "Median of likes plus comments over current followers, last 100 posts." },
  { id: "dark", k: "Days since last Instagram post", fmt: "n", note: "As of September 30, 2026." },
  { id: "collab", k: "Collab post share", fmt: "pct0", note: "Share of the last 100 Instagram posts co-authored with another account." },
] as const;

export const CHANNELS = [
  { name: "Instagram", handle: "@loversandfriendsfest", followers: "448,885", last: "May 4, 2024", state: "Bio still reads \"May 4th, 2024\" with a waitlist link" },
  { name: "TikTok", handle: "@loversandfriendsfest", followers: "52,600", last: "May 1, 2024", state: "No cancellation post was made here" },
  { name: "Facebook", handle: "LoversAndFriendsFest", followers: "69,465", last: "May 2024", state: "About section reads \"Lovers & Friends 2024\"" },
  { name: "X", handle: "@lvrsnfrndsfest", followers: "12,777", last: "May 4, 2024", state: "Cancellation post: 3.7M views, 3,435 quotes" },
  { name: "YouTube", handle: "None", followers: "0", last: "", state: "No official channel with videos" },
];

export const CADENCE = {
  months: [
    "2021-07", "2021-08", "2021-09", "2021-10", "2021-11", "2021-12",
    "2022-01", "2022-02", "2022-03", "2022-04", "2022-05", "2022-06", "2022-07", "2022-08", "2022-09", "2022-10", "2022-11", "2022-12",
    "2023-01", "2023-02", "2023-03", "2023-04", "2023-05", "2023-06", "2023-07", "2023-08", "2023-09", "2023-10", "2023-11", "2023-12",
    "2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12",
    "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12",
    "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09",
  ],
  counts: [
    3, 7, 3, 3, 2, 0,
    1, 3, 5, 7, 93, 0, 0, 0, 0, 0, 0, 0,
    8, 16, 18, 22, 80, 19, 23, 23, 20, 7, 9, 0,
    9, 36, 30, 32, 15, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
  years: [
    { y: "2022", posts: 109, er: "0.69%", reels: "1", one: true, note: "85% of posts in May, then seven dark months" },
    { y: "2023", posts: 245, er: "2.10%", reels: "41", note: "Always on: posted every month but December" },
    { y: "2024", posts: 122, er: "1.90%", reels: "12", note: "A February to April sprint, then nothing" },
  ],
  note: "Instagram posts per month, full history (494 of 505 posts). 2023, the only always-on year, produced 41 reels over one million plays and the best median engagement.",
};

export const CATEGORY = [
  { k: "Creator and fan reposts", n: "213 posts", v: 2.4 },
  { k: "Ticket and presale posts", n: "33 posts", v: 2.2 },
  { k: "Memes and nostalgia", n: "31 posts", v: 1.9 },
  { k: "Lineup announcements", n: "5 posts", v: 1.43 },
  { k: "Info and logistics", n: "26 posts", v: 1.41 },
  { k: "Artist performance", n: "123 posts", v: 1.1 },
  { k: "Sponsor posts", n: "18 posts", v: 0.25 },
];

export const TOP_POSTS = [
  { href: "https://www.instagram.com/p/CseaoD3AzuB/", img: "CseaoD3AzuB", who: "Instagram reel, May 2023", metric: "18.8M plays", note: "\"I feel attacked.\" Creator repost." },
  { href: "https://www.instagram.com/p/CzrvYTFvt3a/", img: "CzrvYTFvt3a", who: "Instagram reel, Nov 2023", metric: "10.1M plays", note: "The T-Pain lyric debate. Creator repost." },
  { href: "https://www.instagram.com/p/CwdYpKxA6lJ/", img: "CwdYpKxA6lJ", who: "Instagram reel, Aug 2023", metric: "8.1M plays", note: "\"ZOINKS.\" 928,741 likes, the account's biggest post." },
  { href: "https://www.instagram.com/p/Co3TtVzg3Ri/", img: "Co3TtVzg3Ri", who: "Instagram reel, Feb 2023", metric: "7.5M plays", note: "\"2000s hits are my therapy.\"" },
  { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230293123505737003", img: "7230293123505737003", who: "TikTok, May 2023", metric: "3.2M plays", note: "Shot at the festival: \"Comment your favorite Breezy song.\"" },
  { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230210293320715562", img: "7230210293320715562", who: "TikTok, May 2023", metric: "2.1M plays", note: "Lil' Kim, from the pit." },
  { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230172445775400238", img: "7230172445775400238", who: "TikTok, May 2023", metric: "1.9M plays", note: "Lil Rob and his son. 11.2% engagement per view." },
  { href: "https://www.tiktok.com/@loversandfriendsfest/video/7221955155304942894", img: "7221955155304942894", who: "TikTok, April 2023", metric: "1.7M plays", note: "Ashanti and Ja Rule, \"Mesmerize.\"" },
];

export const LOW_POSTS = [
  { href: "https://www.instagram.com/p/Cr6uScjynhF/", img: "Cr6uScjynhF", who: "Sponsor post, 2023", metric: "806 likes and comments", note: "Hydration sponsor, static image." },
  { href: "https://www.instagram.com/p/Cr4Wk6RP4_W/", img: "Cr4Wk6RP4_W", who: "Sponsor post, 2023", metric: "741 likes and comments", note: "Spirits booth announcement." },
  { href: "https://www.instagram.com/p/CdjqsbdvOvn/", img: "CdjqsbdvOvn", who: "Sponsor post, 2022", metric: "517 likes and comments", note: "Auto sponsor activation." },
  { href: "https://www.instagram.com/p/CdjXTeFvA-d/", img: "CdjXTeFvA-d", who: "Sponsor post, 2022", metric: "756 likes and comments", note: "Hydration sponsor, 2022." },
];

export const SOCIAL_NOTES = {
  collab:
    "Collab posts are 2% of Lovers & Friends' recent posts against a 36% peer median. Across peers, co-authored posts beat solo posts by a median 1.93x. Dreamville's artist collabs run 4.17x its solo posts.",
  sponsor:
    "Seven of the ten lowest-engagement posts in the account's history are sponsor integrations. A relaunch with sponsors needs sponsor content built in the formats that work, not booth announcements.",
};

/* ----------------------------------------------------------------------------
 * 05 Sentiment
 * ------------------------------------------------------------------------- */

export const SENTIMENT = {
  collected: 19635,
  analyzed: 18021,
  handCoded: 1130,
  overall: { pos: 26.3, neu: 42.8, neg: 27.9, mix: 2.9 },
  platforms: [
    { k: "Instagram comments", n: 9922, pos: 22.7, neg: 31.1 },
    { k: "TikTok", n: 4644, pos: 27.4, neg: 24.3 },
    { k: "YouTube", n: 2323, pos: 42.2, neg: 19.9 },
    { k: "Reddit", n: 759, pos: 20.1, neg: 29.3 },
    { k: "X", n: 373, pos: 25.5, neg: 33.4 },
  ],
  cycles: [
    { k: "2022", note: "Heat, water, crowd rush", n: 2570, pos: 20.5, neg: 32.4, hp: 14.1, hn: 34.8, hnN: 92 },
    { k: "2023", note: "Shade and water fixed", n: 5265, pos: 34.7, neg: 20.8, hp: 43.3, hn: 11.9, hnN: 270 },
    { k: "2024 lead-up", note: "Lineup and sellout", n: 4994, pos: 31.3, neg: 22.1, hp: 44.3, hn: 11.9, hnN: 194 },
    { k: "2024 cancellation", note: "The night before", n: 3930, pos: 13.3, neg: 40.3, hp: 6.8, hn: 55.9, hnN: 177 },
    { k: "2025", note: "No edition", n: 765, pos: 26.0, neg: 31.7, hp: 24.5, hn: 42.5, hnN: 106 },
    { k: "2026", note: "No edition", n: 313, pos: 27.0, neg: 27.4, hp: 28.9, hn: 35.6, hnN: 45 },
  ],
  themes: [
    { k: "Cancellation trust", share: 15.7, pos: 2.2, neg: 73.3 },
    { k: "Artist performance praise", share: 12.6, pos: 85.5, neg: 11.5 },
    { k: "Heat, wind and weather", share: 10.2, pos: 4.1, neg: 59.5 },
    { k: "Lineup excitement", share: 9.4, pos: 77.1, neg: 2.4 },
    { k: "Resale", share: 7.3, pos: 0, neg: 9.7 },
    { k: "Nostalgia and vibes", share: 6.5, pos: 85.5, neg: 0 },
    { k: "Refunds", share: 6.5, pos: 0, neg: 77.1 },
    { k: "Crowd safety", share: 6.3, pos: 12.2, neg: 48.8 },
    { k: "Vegas trip and hotels", share: 6.3, pos: 21.2, neg: 30.8 },
    { k: "Communication gaps", share: 5.3, pos: 3.2, neg: 48.4 },
    { k: "Lines and entry", share: 4.4, pos: 0, neg: 31.8 },
    { k: "Ticket access", share: 4.1, pos: 22.7, neg: 31.8 },
    { k: "One-day format, stage hopping", share: 3.6, pos: 7.9, neg: 26.3 },
    { k: "Set-time overlaps", share: 3.2, pos: 0, neg: 26.7 },
    { k: "Price and fees", share: 3.2, pos: 23.5, neg: 35.3 },
    { k: "Water, food and bar", share: 3.2, pos: 6.2, neg: 43.8 },
  ],
  reply: { asked: 1853, answered: 2 },
  unanswered: [
    { k: "Refund status and timing", n: 143, q: "Where the money at. I'm need y'all to refund the money, as quick as y'all took it.", likes: 168 },
    { k: "Set times", n: 123, q: "Can we get a schedule?", likes: 82 },
    { k: "Will it return", n: 119, q: "Who else keeps coming back here for updates?", likes: 104 },
    { k: "Entry policy", n: 100, q: "The people who came yesterday, are they allowed to attend today?", likes: 40 },
    { k: "Is it real, is it still on", n: 95, q: "", likes: 0 },
    { k: "Lineup additions", n: 88, q: "It's bout that time to drop a lineup or nah?", likes: 82 },
    { k: "Payment plans and fees", n: 69, q: "", likes: 0 },
    { k: "Resale and wristband transfer", n: 63, q: "", likes: 0 },
    { k: "Presale and waitlist", n: 62, q: "", likes: 0 },
    { k: "Seating, VIP and accessibility", n: 16, q: "Advocating for my elders, are there going to be seats or what?", likes: 125 },
  ],
  artists: [
    { k: "Usher", v: 439 },
    { k: "Mariah Carey", v: 199 },
    { k: "Chris Brown", v: 190 },
    { k: "Christina Aguilera", v: 104 },
  ],
  quotes: [
    { q: "I'll never get over this performance at the first Lovers & Friends!!!", who: "TikTok creator, 274,200 likes", href: "https://www.tiktok.com/@kaylareee/video/7327790910656531758", tone: "pos" },
    { q: "This might be the most amazing concert lineup I've ever seen... And the price isn't all that ridiculous considering the number of acts.", who: "Reddit, r/Xennials", href: "https://www.reddit.com/r/Xennials/comments/19e367m/lovers_friends_fest/", tone: "pos" },
    { q: "Cancelling a festival the night before after everyone's flown into Vegas is diabolical.", who: "TikTok, May 4, 2024", href: "https://www.tiktok.com/@whoisadiv/video/7365031752089488686", tone: "neg" },
    { q: "As I'm rereading this, I'm realizing y'all didn't even apologize.", who: "Instagram, under the cancellation post", href: "https://www.instagram.com/p/C6iKW9OuU8_/", tone: "neg" },
    { q: "The festival was dope but it needs to be a two day event next time. So we not fighting for our lives going back and forth to diff stages.", who: "TikTok, May 2023", href: "https://www.tiktok.com/@loversandfriendsfest/video/7230659136554372398", tone: "mix" },
    { q: "How the heck you got Usher, BSB, Mya, Timbo, and Method Man/Redman going on all at the same time?!", who: "Instagram, 2024 set times post", href: "https://www.instagram.com/p/C6aT1XAreP9/", tone: "mix" },
    { q: "I got an email a couple months ago with a survey asking about what I would like to see in the future. I thought that meant y'all were coming back this year but I don't see no movement.", who: "Instagram, January 2026", href: "https://www.instagram.com/p/C6iKW9OuU8_/", tone: "q" },
    { q: "Begging you to do this again, I'll pay double.", who: "Instagram, February 2026", href: "https://www.instagram.com/p/C6iKW9OuU8_/", tone: "pos" },
    { q: "If y'all broke just say that! This lineup is worth every penny of the $450 general admission. I had the best time last year and saw so many of my faves.", who: "Instagram, January 2024", href: "https://www.instagram.com/p/C2krpHGvk2P/", tone: "pos" },
    { q: "Spent $65 on water alone yesterday for just 2 ppl. By 8pm almost all stands were out of water.", who: "Instagram, May 2022", href: "https://www.instagram.com/p/CdlkRmiprf6/", tone: "neg" },
    { q: "I'd go to the Lovers and Friends Festival if they bring it to another city. Las Vegas during afternoon heat will never see me.", who: "X, May 2022, 283 likes", href: "https://x.com/DollarBeKnowing/status/1525923431807700992", tone: "mix" },
    { q: "Patiently waiting for 2027 announcement.", who: "Instagram, September 27, 2026", href: "https://www.instagram.com/p/C6iKW9OuU8_/", tone: "q" },
  ],
  trust: [
    { v: "91", l: "comments compare the 2024 cancellation to Fyre Festival" },
    { v: "345", l: "comments collected on the cancellation post in 2025 and 2026, none answered" },
    { v: "73%", l: "of hand-coded 2025 and 2026 comments under brand posts ask whether it is coming back (n=75)" },
  ],
  brief: [
    { h: "Say what happened, once, properly", b: "The cancellation post never got a follow-up. Fans read silence as a cover story. A direct, human return message that names the 2024 night ends the speculation." },
    { h: "Put the weather plan in writing", b: "Heat and wind are 10.2% of on-topic conversation and 60% negative. Publish what happens if the wind comes: the threshold, the backup plan and what ticket holders get." },
    { h: "Give the day more room", b: "108 comments ask for more than one day. Set-time overlap and stage-hopping together are about 7% of on-topic talk." },
    { h: "Answer the questions", b: "Refunds, set times, entry policy and transfers are asked hundreds of times. An FAQ, a pinned comment and a reply desk during on-sale cover most of it." },
    { h: "Fix the basics fans remember", b: "Water, shade and lines drove 2022's negativity. 2023 fixed most of it and sentiment flipped from 14% positive to 43%. Say so." },
    { h: "Make resale official", b: "Resale and transfer are 7.3% of conversation. An official exchange protects buyers and keeps the secondary market inside the funnel." },
  ],
};

/* ----------------------------------------------------------------------------
 * 06 Demand: search + share of voice
 * ------------------------------------------------------------------------- */

export const SEARCH = {
  months: ["S", "O", "N", "D", "J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D", "J", "F", "M", "A", "M", "J", "J", "A"],
  ym: ["2024-09", "2024-10", "2024-11", "2024-12", "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08"],
  fest: [1900, 1900, 1900, 1900, 2400, 1900, 1900, 1600, 1300, 880, 1000, 1000, 880, 1000, 720, 720, 1000, 1000, 1300, 1600, 1000, 720, 590, 720],
  year: [1690, 2990, 3620, 4480, 10000, 8530, 7030, 7160, 4800, 2420, 2150, 1720, 1730, 1940, 1730, 1260, 2510, 1810, 1830, 2370, 1220, 700, 620, 600],
  stats: [
    { v: "12,400", l: "festival searches in January 2025, with nothing announced" },
    { v: "1,320", l: "in August 2026, down 89%" },
    { v: "121,900", l: "US searches for festival terms in 24 months, all landing on a cancellation notice" },
    { v: "Under $1.35", l: "top-of-page bids on the year terms. Competition: low." },
  ],
  asks: [
    { q: "lovers and friends festival", a: ["2026", "2027", "2027 tickets price", "las vegas", "2025"] },
    { q: "lovers and friends 2026", a: ["tickets", "lineup", "las vegas", "dates", "schedule", "reddit"] },
    { q: "is lovers and friends festival", a: ["happening in 2026"] },
    { q: "will lovers and friends", a: ["be rescheduled"] },
    { q: "lovers and friends 2027", a: ["lineup", "vegas 2027", "festival 2027 tickets price"] },
  ],
  peers: [
    { k: "Rolling Loud", v: 2522000 },
    { k: "Roots Picnic", v: 507670 },
    { k: "Essence Fest", v: 447200 },
    { k: "When We Were Young", v: 327400 },
    { k: "ONE Musicfest", v: 315900 },
    { k: "Dreamville", v: 314600 },
    { k: "Just Like Heaven", v: 157300 },
    { k: "Bésame Mucho", v: 140760 },
    { k: "Cruel World", v: 50740 },
    { k: "Lovers & Friends", v: 30830, self: true },
  ],
  peersNote: "US searches for each festival's name plus \"festival\" or its common form, September 2024 to August 2026. The bare phrase \"lovers and friends\" (27,100 a month) is mostly the Usher song and a clothing label, so it is excluded.",
  collision:
    "Another event brand is running a Meta ad right now that reads \"BOOK LOVERS & FRIENDS 2027 IS HEADED TO ANTIGUA!\" An R&B party ran as \"Lovers & Friends Valentine's Day\" in January. A parked domain, loversandfriends2026.com, shows up in search titled \"The Festival Returns this Spring!\"",
};

export const SOV = {
  rows: [
    { k: "Rolling Loud", x: 27000, tt: 15.0, ttAll: 24.1 },
    { k: "When We Were Young", x: 316, tt: 9.0, ttAll: 14.8 },
    { k: "Just Like Heaven", x: 217, tt: 1.6, ttAll: 1.7 },
    { k: "Dreamville", x: 470, tt: 0.9, ttAll: 5.8 },
    { k: "Lovers & Friends", x: 9, tt: 0.21, ttAll: 4.4, self: true },
  ],
  note: "X: posts mentioning each festival in the last 365 days (When We Were Young, Dreamville and Rolling Loud annualized from 300-post samples). TikTok: plays on on-topic videos among the top 50 search results for each festival name, in millions.",
  creators: [
    { handle: "kaylareee", href: "https://www.tiktok.com/@kaylareee/video/7327790910656531758", img: "7327790910656531758", reach: "2.3M", note: "Full-set upload from a past edition, posted in the 2024 lineup week. \"I did not care. It was a risk I was taking for such a stacked lineup.\"" },
    { handle: "annabelleklinee", href: "https://www.tiktok.com/@annabelleklinee/video/7327401954412432682", img: "7327401954412432682", reach: "205K", note: "Greenscreen over the 2024 poster: \"I'm booking my flight to Vegas right now.\" 11x the brand's lineup-day meme." },
    { handle: "loweryaf", href: "https://www.tiktok.com/@loweryaf/video/7230370807162146090", img: "7230370807162146090", reach: "9.0M", note: "Busta Rhymes from the crowd, 2023. The biggest crowd clip of the festival is a fan's." },
    { handle: "cathymekondo", href: "https://www.tiktok.com/@cathymekondo/video/7366011584285805870", img: "7366011584285805870", reach: "926K", note: "A theory video about the cancellation, 16.7K shares. The loudest voice on the festival since May 2024." },
    { handle: "tyikelb", href: "https://www.tiktok.com/@tyikelb/video/7327543452688731435", img: "7327543452688731435", reach: "18K likes", note: "\"VIP ticket is the way to go trust me.\" Unprompted upsell from a past buyer." },
    { handle: "crystalkungminkoff", href: "https://www.tiktok.com/@crystalkungminkoff/video/7365927437651217706", img: "7365927437651217706", reach: "11.7K likes", note: "Two days after the cancellation: \"I'm still coming back for Lovers and Friends in 2025.\"" },
  ],
};

/* ----------------------------------------------------------------------------
 * 07 Video AI
 * ------------------------------------------------------------------------- */

export const BRAIN = {
  total: 61,
  ingested: 30,
  intro:
    "We built a TwelveLabs Jockey knowledge store of Lovers & Friends' top and bottom performers alongside Rolling Loud, When We Were Young, Essence and the creators who posted about the festival, then asked it what separates the winners. Thirty videos were indexed for frame-level search; the rest were reviewed from transcripts and frame strips.",
  corpus: [
    { k: "Lovers & Friends reels and TikToks", v: "30" },
    { k: "Peer festival videos", v: "24" },
    { k: "Creator and fan videos", v: "7" },
    { k: "Transcripts pulled", v: "30" },
  ],
  findings: [
    {
      h: "Instagram grew on memes that never mention the festival",
      b: "12 of the 13 top Instagram reels (median 1.05M views) were not shot at Lovers & Friends. In the ten openers compared, none show a logo, lineup, date or festival footage in the first two seconds. The reach was real, but it built a nostalgia page, not a festival brand.",
      take: "Keep the meme engine, but anchor every clip to the festival: the lineup artist, the date, or footage from the grounds.",
      clips: [
        { href: "https://www.instagram.com/p/C4_Nx1Qvnkj/", label: "Story-led overlay opener", views: "3.8M views" },
        { href: "https://www.instagram.com/p/C6WTyySrEvO/", label: "\"POV\" premise opener", views: "2.0M views" },
        { href: "https://www.instagram.com/p/C4gPnkcp_6J/", label: "Generic reaction opener", views: "63K views", low: true },
      ],
    },
    {
      h: "On TikTok, footage from the grounds wins",
      b: "The same meme assets did 22x to 130x fewer views on TikTok. The Nelly Furtado meme did 839K on Instagram and 6.5K on TikTok. 5 of the 7 top TikToks were shot at the festival, against none of the bottom six. A seven-second Saweetie backstage clip did 1.06M views.",
      take: "Split the content plan by platform. TikTok gets artist-first festival footage from frame one.",
      clips: [
        { href: "https://www.instagram.com/p/C5TnJ96RkNu/", label: "Nelly Furtado meme on Instagram", views: "839K views" },
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7353703193391402282", label: "Same meme on TikTok", views: "6.5K views", low: true },
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230469504101272874", label: "Saweetie backstage", views: "1.06M views" },
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230659136554372398", label: "Chris Brown, 9.2% engagement", views: "655K views" },
      ],
    },
    {
      h: "Nobody says the offer",
      b: "0 of 30 owned clips speak a price, date or presale. Two show a date on screen, both static posters. \"$19.99 down\" only ever appeared in captions. Rolling Loud's 2027 on-sale TikTok puts the whole offer on screen in eleven seconds: 2027 at 1.5s, PRESALE at 2s, 3-DAY PASSES at 4.5s, $10 DEPOSIT at 5.5s, LOCK IN EARLY at 9.5s. It did 1.48M views at 10.1% engagement.",
      take: "Every sales cut says the year, the presale and the payment plan inside six seconds, on screen.",
      clips: [
        { href: "https://www.tiktok.com/@rollingloud/video/7689182115442904334", label: "Rolling Loud Cali 2027 on-sale", views: "1.48M views" },
        { href: "https://www.instagram.com/p/DdZOXX6JddJ/", label: "Rolling Loud Orlando presale", views: "Instagram reel" },
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7327400743000935722", label: "Lovers & Friends 2024 poster hold, likely paid", views: "2.3M views" },
      ],
    },
    {
      h: "A creator beat the brand's lineup-day meme",
      b: "The brand's lineup-day tease, a six-second meme, did 18K. A creator posted a greenscreen reaction over the same poster seven seconds later and did 205K at 8.2% engagement, naming acts aloud and ending on \"I'm booking my flight to Vegas right now.\" Creator full-set uploads in the same week did 2.3M and 2.9M.",
      take: "Seed the poster to reaction creators under embargo so the first wave of lineup content is theirs, on day one.",
      clips: [
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7327401950939581739", label: "Brand lineup tease", views: "18K views", low: true },
        { href: "https://www.tiktok.com/@annabelleklinee/video/7327401954412432682", label: "Creator greenscreen reaction", views: "205K views" },
        { href: "https://www.tiktok.com/@kaylareee/video/7327790910656531758", label: "Creator full-set upload", views: "2.3M views" },
      ],
    },
    {
      h: "The crowd is missing from the festival's own footage",
      b: "None of the five owned live-performance TikToks show a crowd shot; they are pit-level medium shots of the artist. The only wide crowd shot the brand owns is a sponsor reel. Rolling Loud shoots from the stage looking out, phone lights filling the frame from 0:00. The biggest crowd clip of Lovers & Friends is a fan's, at 9.0M views.",
      take: "Brief the content team for scale: stage-out wides, the crowd singing, the skyline behind it.",
      clips: [
        { href: "https://www.tiktok.com/@loversandfriendsfest/video/7230335036904672558", label: "Owned live clip, no crowd", views: "350K views" },
        { href: "https://www.instagram.com/p/Ddt1eQwOhbE/", label: "Rolling Loud, stage-out crowd", views: "Instagram reel" },
        { href: "https://www.tiktok.com/@loweryaf/video/7230370807162146090", label: "Fan crowd clip, Busta Rhymes", views: "9.0M views" },
      ],
    },
    {
      h: "Peers run nostalgia all year and tie it to their own history",
      b: "When We Were Young's off-season reels have a median of 1.39M views at 8.9% engagement, all in its own genre lane. Rolling Loud posts \"4 years ago today\" with its own footage and sells a 10-year anniversary. Lovers & Friends owns two editions of set footage and has never posted an \"on this day.\"",
      take: "Build an anniversary calendar from the archive: every big set gets its day, every year.",
      clips: [
        { href: "https://www.instagram.com/p/DS2zxY9gWY5/", label: "WWWY off-season nostalgia", views: "909K views" },
        { href: "https://www.instagram.com/p/Ddpbm4tOcMC/", label: "Rolling Loud \"years ago today\"", views: "Instagram reel" },
      ],
    },
    {
      h: "Short and loopable, unless it is the whole set",
      b: "The top Instagram memes run 7 to 10 seconds. Peer sales cuts run 8 to 11. Four of the six bottom TikToks run 29 to 61 seconds. The exception is full-set fan uploads, which still did 2M to 3M views: length works when the content is the performance.",
      take: "Two lengths only: under 11 seconds for hooks and offers, full sets for the archive.",
      clips: [
        { href: "https://www.instagram.com/p/C5ds2ctLTEy/", label: "7.4 second meme", views: "Top 10 reel" },
        { href: "https://www.tiktok.com/@kaylareee/video/7327790910656531758", label: "196 second full set", views: "2.3M views" },
      ],
    },
  ],
};

/* ----------------------------------------------------------------------------
 * 08 Funnel
 * ------------------------------------------------------------------------- */

export const FUNNEL = {
  intro:
    "Every path a fan takes toward Lovers & Friends today ends at the same place: a May 2024 cancellation notice. The tracking still works, which means the audience can be rebuilt quickly once there is somewhere to send it.",
  doors: [
    { where: "Homepage", says: "H1 \"FESTIVAL CANCELED.\" Title and meta: \"May 4, 2024.\"", state: "stale" },
    { where: "Event schema", says: "May 4, 2024, still marked EventScheduled.", state: "broken" },
    { where: "Help center", says: "\"Tickets to Lovers & Friends 2024 are sold out.\" Dates article says it \"took place.\"", state: "stale" },
    { where: "Instagram, TikTok, X bios", says: "\"LOVERS & FRIENDS 2024, May 4th, 2024\" with a waitlist link.", state: "stale" },
    { where: "Ticket store", says: "The Front Gate festival store redirects to the generic Front Gate homepage.", state: "broken" },
    { where: "App link", says: "The homepage app link opens a sponsor's dating app, not a festival app.", state: "broken" },
    { where: "Travel package", says: "The 2024 hotel package page is still live.", state: "stale" },
    { where: "/lineup, /tickets, /faq, /2027", says: "All return 404.", state: "broken" },
    { where: "/signup", says: "Email and SMS capture with consent. Works, but nothing on the homepage links to it.", state: "current" },
  ],
  scores: [
    { k: "Performance", v: 54, note: "Mobile. 2.5s of main-thread blocking, 2.3MB." },
    { k: "Accessibility", v: 97, note: "Strong. Two images missing alt text." },
    { k: "Best practices", v: 77, note: "Third-party cookies and browser issues logged." },
    { k: "SEO", v: 100, note: "Technically clean, with the wrong date in every tag." },
  ],
  vitals: [
    { v: "2.9s", l: "Largest contentful paint, mobile" },
    { v: "88", l: "Desktop performance score" },
    { v: "79", l: "network requests on the homepage" },
  ],
  pixels: [
    { k: "Meta Pixel", ok: true, note: "Firing PageView on every page. Build retargeting pools now." },
    { k: "TikTok Pixel", ok: true, note: "Firing on every page." },
    { k: "Google Analytics 4 and Tag Manager", ok: true, note: "Live on every page." },
    { k: "Microsoft Clarity", ok: true, note: "Session recording on every page." },
    { k: "Email and SMS capture", ok: true, note: "Mailchimp lists on the footer and /signup. SMS only on /signup." },
    { k: "Snap, Reddit, Pinterest pixels", ok: false, note: "Not installed." },
    { k: "Event CRM (Laylo, Community, Klaviyo)", ok: false, note: "None. No presale-code or drop tooling." },
    { k: "Spanish-language pages", ok: false, note: "English only." },
  ],
  pixelNote:
    "Programmatic ID syncs (Quantcast, LiveRamp, PubMatic, Magnite, Index Exchange) also load on every page of a dormant site. They load from the shared ticketing and ad stack and can be paused while the site is dormant.",
  ads: [
      { k: "Rolling Loud", total: "95+", active: "24 of 25 sampled active" },
    { k: "When We Were Young", total: "0", active: "None active" },
    { k: "Just Like Heaven", total: "17", active: "None active" },
    { k: "Roots Picnic", total: "13", active: "None active" },
    { k: "Essence Fest", total: "9", active: "None active" },
    { k: "Lovers & Friends", total: "0", active: "None in the library, active or retained", self: true },
  ],
  adsNote: "Meta Ad Library, all statuses, September 30, 2026. \"+\" means the library scrape stopped before the end. US non-political ads show no spend data.",
  rl: [
    "\"RL CALIFORNIA 2027. 10-YEAR ANNIVERSARY. LIMITED 3-DAY PASSES STARTING AT $249 ALL-IN.\"",
    "\"CALI, DEC 10 to 12, 2027: LOCK IN EARLY. EXCLUSIVE PRESALE TEE INCLUDED. LIMITED AVAILABILITY.\"",
    "\"ROUND 2 IN ORLANDO. EXCLUSIVE TEE INCLUDED. LIMITED AVAILABILITY.\"",
  ],
  rlNote: "Rolling Loud is already selling May and December 2027, seven to fourteen months out, with price anchoring, a presale bundle and scarcity in every line.",
};

/* ----------------------------------------------------------------------------
 * 09 Plan
 * ------------------------------------------------------------------------- */

export const PLAN = {
  intro:
    "A relaunch plan built from the evidence above. It runs on the festival's own clock: Phase 0 starts now, and everything after it is timed from the day R&B Love Festival is announced.",
  rename: {
    intro:
      "A new name on a festival with 583,727 followers and 121,900 searches for the old one in two years. The audience has to find the new name without losing the old one.",
    points: [
      { h: "Rename, don't restart", b: "Rename the existing accounts (448,885 on Instagram, 52,600 on TikTok, 69,465 on Facebook, 12,777 on X) so followers, history and ad audiences carry over. New accounts start at zero." },
      { h: "\"Formerly Lovers & Friends\"", b: "In every bio, ad, email subject and press line for the first cycle. People will keep searching the old name for a year or more." },
      { h: "Keep the old doors open", b: "Redirect loversandfriendsfest.com to the new site and keep bidding on the Lovers & Friends terms. Other events are already borrowing the old name." },
      { h: "Secure the new one", b: "rnblovefestival.com is already used by a separate R&B event in Orlando. Lock handles, domains and branded search before the reveal, not after." },
    ],
  },
  pillars: [
    { k: "Repair", b: "Close the 2024 story in public, answer the questions, and put the weather and refund terms in writing." },
    { k: "Reignite", b: "Turn 449K dormant followers and the nostalgia engine back on, anchored to the festival this time." },
    { k: "Convert", b: "Waitlist-first presale with the payment plan said out loud, retargeting from pixels that never stopped firing." },
    { k: "Retain", b: "An always-on calendar, a reply desk and a list the festival owns, so the next quiet year never happens." },
  ],
  phases: [
    {
      k: "Reopen the doors",
      when: "Now, two weeks",
      items: [
        "Replace the cancellation homepage with a 2027 list page (email plus SMS)",
        "Update bios, Facebook About, help center and Event schema",
        "Retargeting pools from the live Meta and TikTok pixels",
        "Lock R&B Love Festival handles, domains and search terms before the reveal",
        "Pinned comment and a reply desk on the cancellation post",
      ],
    },
    {
      k: "The return",
      when: "Announce day",
      items: [
        "One direct, human message: the 2024 night, what changed, and why the new name",
        "The weather plan and refund terms, published in plain language",
        "Paid support behind the announcement to the full past-buyer and follower pool",
        "Branded search live on the new name and every Lovers & Friends term",
      ],
    },
    {
      k: "Build the lineup with them",
      when: "Announce to lineup",
      items: [
        "A fan lineup ballot: \"burn your 2027 mixtape\"",
        "\"On this day\" archive drops from the 2022 and 2023 sets",
        "Reaction creators seeded with the poster under embargo",
        "Artist collab posts for every name on the bill",
      ],
    },
    {
      k: "Presale",
      when: "Lineup to sellout",
      items: [
        "List-only presale with unique codes",
        "Offer cuts that say year, presale and \"$19.99 down\" in six seconds",
        "Meta and TikTok retargeting, lookalikes from past buyers",
        "Vegas travel bundles to fly-in markets",
      ],
    },
    {
      k: "Always on",
      when: "Sellout to show",
      items: [
        "Three to five posts a week across Instagram and TikTok",
        "Set times early, an FAQ that answers the top ten questions",
        "Official resale and transfer, promoted",
        "Sponsor content built in the formats that work",
      ],
    },
    {
      k: "Show week and after",
      when: "Show week plus 30 days",
      items: [
        "Live updates on every channel, weather included",
        "Stage-out crowd footage, recap within 24 hours",
        "Full-set uploads to a new YouTube channel",
        "The 2028 list opens the night of the show",
      ],
    },
  ],
  audiences: [
    { k: "Past buyers", b: "Every 2022 to 2024 ticket holder and refunded 2024 buyer from the Front Gate and Mailchimp lists. First to hear, first to buy." },
    { k: "The 500K", b: "Instagram (449K) and TikTok (53K) followers and engagers, reachable organically and as custom audiences the day ads go live." },
    { k: "Site visitors", b: "Everyone still searching and landing on the site. The pixels are still firing, so the last 180 days of visitors are ready to target." },
    { k: "Lookalikes and fly-in markets", b: "Modeled on past buyers, weighted to the SoCal drive market and the fly-in cities buyers came from." },
    { k: "Artist fan bases", b: "Interest and engagement audiences for every act on the bill, layered with the 1980 to 1995 birth-year band." },
    { k: "Spanish-speaking fans", b: "Spanish-language creative and landing pages, for the audience the 2023 Chicano block spoke to." },
  ],
  measure: [
    "List size: email and SMS signups, by source",
    "Presale conversion rate and cost per ticket, by audience",
    "Search demand for the year terms, and branded search share",
    "Share of voice against When We Were Young and Rolling Loud",
    "Sentiment: the cancellation-trust share of conversation, tracked monthly",
    "Reply rate on fan questions during on-sale weeks",
  ],
};

/* ----------------------------------------------------------------------------
 * 10 Creative
 * ------------------------------------------------------------------------- */

export const CREATIVE = {
  intro:
    "Example creative for the return, generated with AI for this audit in the festival's existing visual language: the lavender sky, chrome type and butterflies. Each one comes from a finding above. These are directional only.",
  label: "AI-generated examples. Directional only, not final creative.",
  ads: [
    {
      k: "The list is open",
      fmt: "9:16 Story and Reel",
      video: "rnb-poster-loop.mp4",
      poster: "rnb-poster-2027.webp",
      top: "",
      big: "",
      small: [] as string[],
      cta: "Join the list",
      clean: true,
      why: "Phase 0 and the announcement. The brand's own poster language, animated, with one job: get the list back.",
    },
    {
      k: "1 new message",
      fmt: "9:16 TikTok",
      video: "rnb-flip-phone.mp4",
      poster: "rnb-flip-phone.webp",
      top: "R&B Love Festival",
      big: "We're back.",
      small: ["2027", "Las Vegas", "Presale from $19.99 down"],
      cta: "Get presale access",
      why: "Nostalgia anchored to the festival, with the year and offer on screen inside six seconds.",
    },
    {
      k: "Wristband POV",
      fmt: "9:16 Reel",
      video: "rnb-wristband.mp4",
      poster: "rnb-wristband.webp",
      top: "Presale",
      big: "Lock in 2027.",
      small: ["List-only presale", "Payment plans available"],
      cta: "Sign up for presale",
      why: "The Rolling Loud lesson: the offer, the year and the urgency said out loud, over the feeling of being there.",
    },
  ],
  stills: [
    { img: "creative/rnb-mixtape.webp", ai: true, k: "Fan lineup ballot", line: "Burn your 2027 mixtape.", why: "Phase 2. Fans pick the lineup with you. It answers the most-asked question and builds the list at the same time." },
    { img: "creative/suite.webp", ai: true, k: "Vegas travel bundle", line: "The suite. The squad. The setlist.", why: "Fly-in markets. Sells the trip, not only the ticket, for buyers already planning around Vegas." },
    { img: "photos/missy-fire.webp", ai: false, k: "On this day archive", line: "Three years ago today.", why: "Phase 2. Every big set gets its anniversary, every year. Real footage from the archive, no AI needed." },
  ],
};

/* ----------------------------------------------------------------------------
 * 11 Why + 12 Next
 * ------------------------------------------------------------------------- */

export const PRICING = {
  intro:
    "Three ways to work together. Each is a monthly retainer plus a management fee on paid media, with creative billed by the hour against an estimate you approve each month. Full Marketing covers the plan on this page end to end.",
  tiers: [
    {
      k: "Paid Media",
      retainer: 6000,
      hours: [10, 20] as [number, number],
      lead: "The paid engine: presale, on-sale and always-on flights.",
      items: [
        "Paid strategy and buying on Meta, TikTok, Google Search and YouTube",
        "Tracking, pixel and audience setup",
        "Retargeting pools from the live pixels and past-buyer lists",
        "Presale, on-sale and last-call flights",
        "Live reporting page, updated daily, with a weekly readout",
      ],
    },
    {
      k: "Full Marketing",
      retainer: 10000,
      hours: [30, 50] as [number, number],
      rec: true,
      lead: "The plan on this page, run end to end by one team.",
      items: [
        "Everything in Paid Media",
        "Organic social on Instagram, TikTok, X and Facebook, three to five posts a week",
        "Community management and the reply desk",
        "Email and SMS list program, presale codes and drops",
        "Creator and reaction-creator seeding",
        "Site and funnel fixes, and the move to the new name",
        "Monthly sentiment and share-of-voice tracking",
        "A dedicated strategy lead and biweekly calls",
      ],
    },
    {
      k: "Full Season",
      retainer: 15000,
      hours: [50, 80] as [number, number],
      lead: "Full Marketing plus the people on the ground at show week.",
      items: [
        "Everything in Full Marketing",
        "On-site content team at show week: stage-out crowd, artist moments, 24-hour recap",
        "Artist and partner collab coordination",
        "Sponsor content packages built in the formats that perform",
        "Show-week command center: live updates, weather and entry comms",
        "Spanish-language program",
        "Full-set YouTube channel build and archive programming",
      ],
    },
  ],
  fee: 15,
  rate: 100,
  terms: [
    { h: "Six-month minimum", b: "Month to month after the first six months." },
    { h: "Media billed direct", b: "Ad spend is paid by the festival directly to the platforms. The 15% management fee applies to the spend we manage." },
    { h: "Creative at $100 an hour", b: "Ad cutdowns, statics, motion, AI-generated assets and copy. Billed monthly against an hours estimate you approve in advance." },
    { h: "Retainer billed monthly", b: "Covers strategy, management, social, community and reporting for the tier you choose." },
  ],
};

export const WHY = {
  intro:
    "Crowd Control is a culture-first marketing agency. We run paid, social, creative and data for music, festivals, tours and the brands around them, and we build the research you just read for every client we work with.",
  points: [
    { h: "Festivals and tours are the core", b: "Paid media with a hard date and a room to fill. We run live ticket pacing dashboards for festivals and tours, and plan media against them." },
    { h: "Listening before spending", b: "Social listening, video AI and competitor teardowns decide what we make before we make it, the way this audit was built." },
    { h: "Music marketing every week", b: "Artist, label, catalog and tour campaigns every week. We know how these fans find music, because we market to them." },
    { h: "Reporting your partners can see", b: "Live report pages, refreshed daily, for the festival, its sponsors and its artists." },
  ],
  clients: [
    "NBA",
    "Golden State Warriors",
    "Apple",
    "Amazon",
    "Beats By Dre",
    "Warner Bros",
    "Monster Energy",
    "Foot Locker",
    "Porsche",
    "Edition Hotels",
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
    { h: "Walk-through call", b: "We take the team through this audit and hear where R&B Love Festival is headed." },
    { h: "Two-week foundation sprint", b: "Reopen the doors: site, bios, schema, list page, retargeting pools and the reply desk." },
    { h: "Return-ready", b: "Announcement creative, the presale system and the always-on calendar, ready for the day you say go." },
  ],
  need: [
    "Meta Business Manager and TikTok Ads access",
    "GA4, Tag Manager and Webflow access",
    "Mailchimp email and SMS lists",
    "2022 to 2024 buyer exports from Front Gate",
    "Photo and video archive, with usage rights",
    "Artist and sponsor contacts for collabs",
  ],
  book: "https://app.reclaim.ai/m/team-leads",
  email: "geoff@crowdcontroldigital.com",
  name: "Geoff Shames",
  role: "Crowd Control Digital",
};

export const SOURCES = [
  "Instagram: Apify instagram-scraper, 494 of 505 @loversandfriendsfest posts (full history) and the 100 most recent posts for each of ten peer festivals, pulled October 1, 2026 (UTC)",
  "TikTok: Apify clockworks TikTok scraper and Tokscript, 100 most recent videos per account; TikTok oEmbed",
  "X, Facebook, YouTube: Apify scrapers and public profile pages",
  "Social listening: 19,635 items (11,049 Instagram comments, 4,527 TikTok comments, 364 creator TikToks, 2,462 YouTube comments, 859 Reddit posts and comments, 374 X posts). 1,130 items hand-coded; keyword classifier calibrated against the hand-coded set. Sentiment is an analytical estimate",
  "Video AI: TwelveLabs Jockey knowledge store \"Lovers & Friends + peers,\" 30 videos indexed, 61 videos reviewed with Tokscript transcripts and frame strips",
  "Search: Google Ads Keyword Planner, US, English, September 2024 to August 2026; Google autocomplete, September 30, 2026",
  "Ads: Meta Ad Library, all statuses, all countries, September 30, 2026",
  "Website: Lighthouse mobile and desktop lab runs; network capture of loversandfriendsfest.com, /guide, /signup and the help center",
  "Event history: Rolling Stone, Billboard, Variety, Las Vegas Review-Journal, KTNV, News 3 LV, Vibe, Stereogum, Brooklyn Vegan, Grimy Goods, Rated R&B, CelebrityAccess, the official site and help center",
  "Market: Music Festival Wizard, Pollstar, NME, Axios, WUNC, Consequence, organizer sites, Las Vegas Convention and Visitors Authority reporting",
  "Photography: Lovers & Friends official Instagram, 2022 and 2023 editions",
  "Quotes are verbatim excerpts; trims are marked with an ellipsis. Creators are credited by public handle; commenters are not named",
];
