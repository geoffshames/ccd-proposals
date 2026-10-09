/**
 * AUDIEN: brand direction and social audit (Crowd Control Digital).
 * Every figure below was pulled October 8, 2026 from a scrape, API, ad library,
 * Lighthouse run, video AI query or fetched page. Sources are listed in SOURCES.
 * Sentiment figures are analytical estimates.
 */

export const IMG = "/images/audien";
export const P = (id: string) => `${IMG}/posts/${id}.webp`;
export const PH = (f: string) => `${IMG}/photos/${f}.webp`;
export const ART = (f: string) => `${IMG}/art/${f}.webp`;
export const CR = (f: string) => `${IMG}/creative/${f}.webp`;

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "artist", label: "Artist" },
  { id: "brand", label: "Brand" },
  { id: "social", label: "Social" },
  { id: "peers", label: "Peers" },
  { id: "fans", label: "Fans" },
  { id: "video", label: "Video AI" },
  { id: "funnel", label: "Funnel" },
  { id: "direction", label: "Direction" },
  { id: "plan", label: "Plan" },
  { id: "creative", label: "Creative" },
  { id: "next", label: "Next" },
] as const;

export const HERO = {
  kicker: "Prepared for AUDIEN and Prodigy Artists",
  title: "AUDIEN",
  line: "Brand Direction and Social Audit",
  sub: "Brand, social, peers, fans, video AI, funnel, a brand direction and a social plan.",
  body: "We measured everything public about AUDIEN: 43 release covers since 2019, every public post on Instagram, TikTok, YouTube and X, nearly 800 posts from ten peer artists, 5,034 fan comments, 49 videos run through video AI, and every link a fan can tap. The short version: the most loyal audience in the set, an owned live brand most artists would trade for, and a brand system that never quite joins the two.",
  stats: [
    { value: 5.3, decimals: 1, suffix: "%", label: "median Instagram engagement, the highest of 11 artists benchmarked" },
    { value: 0.47, decimals: 2, label: "Instagram posts a week, against a peer median of 1.3" },
    { value: 823001, label: "TikTok videos use his music. 7,906 people follow his account" },
  ],
  date: "Audit date: October 8, 2026",
};

export const MARQUEE = [
  "Progressive House Never Died",
  "Something Better",
  "Wayfarer",
  "First Love",
  "Pompeii",
  "Wish It Was You",
  "One Last Dance",
  "Sacrifice",
  "High Hopes",
  "7 Miles High",
  "The Torch",
  "Brooklyn Mirage",
  "Red Rocks",
  "Sphere",
  "Pier 17",
];

export const SUMMARY = {
  intro:
    "AUDIEN has three strong brand assets: a name with fifteen years of catalog behind it, a live brand fans treat as a scene, and a symbol, the chrome heart, that already lives on covers, stages and merch. Each one works on its own. The brand direction joins them into one world, and the social plan feeds that world to the audience that already loves it.",
  items: [
    {
      n: "01",
      to: "brand",
      head: "Three assets, not yet one brand",
      body: "Four visual eras in seven years. The last eight covers score 5.5 out of 10 for consistency, and at least four versions of the wordmark are in use today. The chrome heart and the PHND lockup are the parts that hold.",
    },
    {
      n: "02",
      to: "social",
      head: "The most loyal audience, posted to least",
      body: "5.3% median Instagram engagement, above every peer in the set, including ILLENIUM. Yet 0.47 posts a week, and no reel since July 30. The 109,223 people who engage most hear from him least.",
    },
    {
      n: "03",
      to: "social",
      head: "The room beats the release",
      body: "Live clips earn a median 7,140 TikTok plays. Promo posts earn 2,023. Posts framed around a release are the weakest performers on Instagram, TikTok and YouTube alike.",
    },
    {
      n: "04",
      to: "social",
      head: "Promotion backs the weakest posts",
      body: "15 promoted TikToks: a median 1.8% engagement against 9.1% organic. 10 of the 15 are release posts. None of the live clips that won organically were promoted.",
    },
    {
      n: "05",
      to: "fans",
      head: "Fans love the show and the person",
      body: "Among 5,034 fan comments with a clear tone, 98% are positive. PHND is the identity fans repeat. The most common question, 160 of 393, is what the song is and when it comes out.",
    },
    {
      n: "06",
      to: "funnel",
      head: "Every link points away from AUDIEN",
      body: "Both bio links go to a partner store, the website has no email capture and one pixel, and Google autocompletes the bare name to a hearing aid brand 10 times out of 10.",
    },
  ],
};

/* ----------------------------------------------------------------------------
 * 02 Artist
 * ------------------------------------------------------------------------- */

export const TIMELINE = [
  { y: "2009", h: "Signed at 17", b: "First release on Ferry Corsten's Flashover Recordings, after learning production from A State of Trance." },
  { y: "2013", h: "Wayfarer", b: "Anjunabeats, premiered by Above & Beyond. Still one of the songs fans name most." },
  { y: "2015", h: "Something Better", b: "With Lady Antebellum, #1 on Billboard Dance Club Songs. The Bastille \"Pompeii\" remix earned a Grammy nomination." },
  { y: "2019", h: "Escapism", b: "Debut album, self-released, after the Astralwerks pop-dance years." },
  { y: "2022", h: "PHND begins", b: "Progressive House Never Died launches as a show brand. A sold-out tour, Hollywood Palladium included." },
  { y: "2025", h: "The Torch and First Love", b: "10,000 capacity at the LA Coliseum's Torch in June. Second album First Love on Armada in October." },
  { y: "2026", h: "A new label, bigger rooms", b: "Four singles on Enhanced. Opening for ILLENIUM at Sphere, Red Rocks, seven PHND cities, a Playboy capsule." },
];

export const LISTENERS = {
  months: ["2024-01", "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07", "2024-08", "2024-09", "2024-10", "2024-11", "2024-12", "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09", "2026-10"],
  values: [1537497, 1585325, 1495354, 1405188, 1343780, 1296410, 1230001, 1282972, 1217717, 1216255, 1223454, 1167213, 1395385, 1608603, 1487940, 1520761, 1497565, 1677756, 1618067, 1598074, 1726451, 1648562, 1479097, 1433572, 1427088, 1499531, 1502965, 1579872, 1470780, 1453322, 1574820, 1507744, 1385640, 1399982],
  marks: [
    { i: 12, l: "Bittersweet" },
    { i: 21, l: "First Love" },
    { i: 27, l: "Sacrifice" },
    { i: 30, l: "High Hopes" },
  ],
};

export const ARTIST_STATS = [
  { v: "1.40M", l: "Spotify monthly listeners, down 19.9% on a year ago and 20% below the First Love peak of 1.76M" },
  { v: "216,197", l: "Spotify followers, up every single month since January 2024 (+16.7%)" },
  { v: "555M", l: "lifetime Spotify streams across 68 credited songs" },
  { v: "54 to 9", l: "Chartmetric momentum score, August 2 to October 7. A Q4 moment matters" },
];

export const CATALOG = [
  { k: "Kill The Lights (Audien Remix)", y: "2016", v: 96.2 },
  { k: "Colors (Audien Remix)", y: "2016", v: 81.8 },
  { k: "Something Better", y: "2015", v: 57.2 },
  { k: "Pompeii (Audien Remix)", y: "2014", v: 47.8 },
  { k: "Crazy Love", y: "2016", v: 42.2 },
  { k: "One Last Dance", y: "2022", v: 38.6 },
  { k: "One More Weekend", y: "2017", v: 37.7 },
  { k: "Wish It Was You", y: "2021", v: 33.1 },
];

export const RECENT = [
  { k: "Love Again", v: 3.54 },
  { k: "Sacrifice", v: 3.05 },
  { k: "Make Me Forget", v: 1.66 },
  { k: "In Every Life", v: 1.49 },
  { k: "High Hopes", v: 1.22 },
  { k: "7 Miles High", v: 0.17 },
];

export const ARTIST_NOTES = {
  catalog:
    "The four biggest records are 2014 to 2016 remixes and originals, and the catalog still does the daily work: the Pompeii remix alone runs about 11,000 streams a day. Sacrifice is the new record closest to that pace, at about 9,300 a day.",
  tier:
    "On listeners AUDIEN sits with Seven Lions (1.43M) and Said The Sky (1.29M). On TikTok he has 7,906 followers against their 52,221 and 175,454.",
  listen:
    "49% of listeners are in the US. The UK, Australia and Germany hold about 100,000 each, and fans in all three ask when he is coming.",
};

/* ----------------------------------------------------------------------------
 * 03 Brand
 * ------------------------------------------------------------------------- */

export const ERAS = [
  {
    k: "Escapism",
    when: "2019 to 2020",
    label: "Self-released, then Armada",
    covers: ["2019-favorite-sound", "2019-escapism", "2020-escapism-remixes", "2020-craving"],
    read: "Synthwave magenta and indigo, a vanishing-point road and a tiny lone figure. The first appearance of a motif that keeps coming back.",
  },
  {
    k: "Armada singles",
    when: "2021 to 2024",
    label: "21 covers, no system",
    covers: ["2021-wish-it-was-you", "2022-one-last-dance", "2023-antidote", "2023-superhero", "2024-21", "2024-cold"],
    read: "Pastel risograph, Y2K collage, liquid chrome, film blur. A new type treatment almost every release. Scores about 2 out of 10 for consistency.",
  },
  {
    k: "First Love",
    when: "2025",
    label: "Armada, the one real system",
    covers: ["2025-bittersweet", "2025-one-more-thing", "2025-slide-away", "2025-first-love"],
    read: "The chrome heart balloon on sky blue, with an acid green accent. Carried onto stage production, flyers, a Times Square pop-up and a fan billboard on Sunset Blvd.",
  },
  {
    k: "Enhanced",
    when: "2026",
    label: "Four singles, a new mood",
    covers: ["2026-in-every-life", "2026-sacrifice", "2026-high-hopes", "2026-7-miles-high"],
    read: "Muted cinematic teal and dusk. Saturation falls from 0.42 to 0.22. The heart is still there, but as a cameo, and the type now follows the label's house style.",
  },
];

export const CONSISTENCY = [
  { k: "Recurring motif", v: 7, n: "The chrome heart appears on 5 of the last 8 covers" },
  { k: "Photography and rendering", v: 6, n: "Each half is coherent: 2025 is CGI chrome on sky, 2026 is film photography" },
  { k: "Palette", v: 5, n: "Two palettes and one outlier across eight covers" },
  { k: "Reads as one artist on a grid", v: 5, n: "Across the label change, the grid reads as two artists linked only by the heart" },
  { k: "Typography and layout", v: 3, n: "No wordmark on the 2025 covers, a label-style top row on 2 of 4 in 2026" },
];

export const ASSETS = [
  {
    k: "The name",
    v: "AUDIEN",
    b: "Fifteen years of catalog and 555M streams. But it is a common word in search and shares page one with a hearing aid brand, so on its own it carries the least.",
    proof: "10 of 10 autocomplete suggestions for \"audien\" are hearing aids",
  },
  {
    k: "The scene",
    v: "PHND",
    b: "Progressive House Never Died is the identity fans repeat, the presale code, and the most consistent design system he has: one heart-shaped type lockup, recolored for each city since January 2025.",
    proof: "Posts naming PHND or a city outperform; fans write \"PHND forever\"",
  },
  {
    k: "The symbol",
    v: "The heart",
    b: "The chrome heart balloon is the strongest visual he has ever owned. It has been album art, an LED wall, a balloon over the decks, a locket and a merch graphic, but never the logo.",
    proof: "On 5 of the last 8 covers, used as a cameo on 3",
  },
];

export const WORDMARKS = [
  { img: "audiendj-site_audien-wordmark_2024-04", png: true, k: "Website", d: "2024. Extended heavy sans. The closest thing to a master." },
  { img: "2025-09_TimesSquare-billboard_AUDIEN-chrome_DOok1E5jipO", k: "Times Square", d: "2025. Condensed heavy, acid green." },
  { img: "2026-03_tour-poster_AUDIEN-wordmark-chrome-heart_DVzPz5sDgAv", k: "Tour admat", d: "2026. Extra-wide extended, khaki." },
  { img: "2026-02_PHND-DC-flyer_heart-type-lockup_DUlU-9fDmms", k: "PHND lockup", d: "2025 to 2026. The heart-shaped type, recolored per city." },
];

export const VOICE = [
  { k: "Lowercase and self-deprecating", e: "\"still trying to figure out what an audien is..\"" },
  { k: "Sincere about the genre", e: "\"Raise your hand if you still love progressive house in 2026..\"" },
  { k: "Generous with access", e: "Stage and backstage invites for comments on most show posts" },
  { k: "One sign-off", e: "The white heart closes most captions and is his whole TikTok bio" },
];

/* ----------------------------------------------------------------------------
 * 04 Social
 * ------------------------------------------------------------------------- */

export const CHANNELS = [
  { name: "Instagram", handle: "@audien", followers: "109,223", last: "Oct 6, 2026", state: "Most loyal audience, under 3 posts a month. No reel since July 30" },
  { name: "TikTok", handle: "@audien", followers: "7,906", last: "Oct 6, 2026", state: "Public history starts Sep 2025. Up 23% in the last month" },
  { name: "YouTube", handle: "AudienTV", followers: "81,400", last: "Apr 10, 2026", state: "48.9M lifetime views. 4 long-form uploads since 2024. @audien handle unclaimed" },
  { name: "X", handle: "@Audien", followers: "85,758", last: "Retweets only", state: "40 most recent items are all retweets, back to May 2024" },
  { name: "SoundCloud", handle: "audien", followers: "188,557", last: "", state: "Largest follower count of any channel" },
];

export const CADENCE = {
  months: ["2024-10", "2024-11", "2024-12", "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09", "2026-10"],
  ig: [1, 1, 0, 4, 3, 1, 1, 1, 1, 4, 3, 4, 5, 0, 1, 3, 2, 3, 1, 1, 1, 4, 2, 0, 1],
  tt: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 9, 1, 3, 1, 4, 6, 11, 1, 4, 19, 18, 9, 4],
  note: "In August and September 2026, TikTok got 27 posts and Instagram got 2. The live clips that reached 37,000 to 55,300 organic TikTok plays never went to the 109,223 people on Instagram, where comparable live reels earn a median 48,907 plays. October 2026 runs to October 6.",
};

export const FORMATS = [
  { k: "Fan reply videos", n: "2 posts", v: 16947 },
  { k: "Live and festival footage", n: "41 posts", v: 7140 },
  { k: "Brand partnership", n: "2 posts", v: 6532 },
  { k: "Behind the scenes", n: "1 post", v: 4013 },
  { k: "Release and show promo", n: "24 posts", v: 2023 },
  { k: "Trend and meme", n: "5 posts", v: 2011 },
];

export const RELEASE = [
  { k: "Instagram, median likes", rel: 4424, non: 6049, fmt: "n" },
  { k: "TikTok organic, median plays", rel: 2654, non: 6187, fmt: "n" },
  { k: "YouTube Shorts, median views", rel: 1801, non: 1862, fmt: "n" },
];

export const PAID = {
  organic: { er: 9.1, plays: 5125, n: 76 },
  promoted: { er: 1.8, plays: 17100, n: 15 },
  note: "Promotion was spent almost entirely on release and album posts. The album announcement reached 75,600 plays and 129 likes. The Sacrifice drop reached 155,600 plays at a 0.63% like rate. The organic winners, live clips with a thank-you or emotional caption, run near 10%.",
};

export const HOOKS = [
  { k: "Comment, tag or rate ask", v: 256.5, n: "10 posts" },
  { k: "Question", v: 192.5, n: "14 posts" },
  { k: "Thank-you or recap", v: 116, n: "6 posts" },
  { k: "Announcement", v: 119, n: "6 posts" },
  { k: "Statement or lyric line", v: 93, n: "31 posts" },
];

export const RARE = [
  { k: "Studio teases", v: "76,696", l: "plays on \"I wonder what a Martin Garrix collab would sound like\". \"comment YES if I should finish this\" drew 499 comments", n: "2 of 68 posts" },
  { k: "Personal milestones", v: "7,827", l: "median likes on birthday and portrait carousels, above every other format on Instagram", n: "7 of 68 posts" },
  { k: "Fan as the hero", v: "29,200", l: "plays and 3,520 likes on \"did we find NYC's top hype man?\", the best like count of any 2025 TikTok", n: "1 of 91 videos" },
];

export const TOP_POSTS = [
  { href: "https://www.instagram.com/p/C62FEAGuZ9G/", img: "C62FEAGuZ9G", who: "Instagram reel", metric: "103,801 plays", note: "\"pretty sure last night was the best night of my life\" Brooklyn Mirage" },
  { href: "https://www.instagram.com/p/Cuxfk7eAXYJ/", img: "Cuxfk7eAXYJ", who: "Instagram reel", metric: "93,183 plays", note: "\"STAY TRUE LA .. who was there!?\" Coliseum, 2023" },
  { href: "https://www.instagram.com/p/C6ueBu9OLAw/", img: "C6ueBu9OLAw", who: "Instagram reel", metric: "76,696 plays", note: "\"I wonder what a @martingarrix collab would sound like\"" },
  { href: "https://www.instagram.com/p/C7hoinnuCC1/", img: "C7hoinnuCC1", who: "Instagram reel", metric: "75,081 plays", note: "\"the progressive house police have arrived\"" },
  { href: "https://www.tiktok.com/@audien/video/7672770085693492494", img: "7672770085693492494", who: "TikTok", metric: "55,300 plays", note: "PHND at Pier 17, the neon heart and the skyline. 1,380 saves" },
  { href: "https://www.tiktok.com/@audien/video/7649031640869539086", img: "7649031640869539086", who: "TikTok", metric: "46,300 plays", note: "\"Rate my intro out of 10\" Red Rocks" },
  { href: "https://www.tiktok.com/@audien/video/7673916134357273870", img: "7673916134357273870", who: "TikTok", metric: "37,000 plays", note: "An Avicii moment, 611 shares" },
  { href: "https://www.tiktok.com/@audien/video/7567930803972263223", img: "7567930803972263223", who: "TikTok", metric: "29,200 plays", note: "\"did we find NYCs top hype man?\" A fan as the hero" },
];

export const LOW_POSTS = [
  { href: "https://www.tiktok.com/@audien/video/7693650879651646734", img: "7693650879651646734", who: "TikTok", metric: "664 plays", note: "Partner product close-up, October 6" },
  { href: "https://www.tiktok.com/@audien/video/7689171898223054111", img: "7689171898223054111", who: "TikTok", metric: "747 plays", note: "7 Miles High lyric card over festival footage" },
  { href: "https://www.tiktok.com/@audien/video/7689571632041479437", img: "7689571632041479437", who: "TikTok", metric: "855 plays", note: "The same lyric card template, a second time" },
  { href: "https://www.instagram.com/p/DbbbUO8vvst/", img: "DbbbUO8vvst", who: "Instagram reel", metric: "11,282 plays", note: "PHND NYC announce, 20 seconds before the venue appears" },
];

export const SOCIAL_NOTES = {
  youtube:
    "YouTube is a catalog archive with 81,400 subscribers: a 1,139-day gap in long-form uploads ended in July 2025, Shorts reach about 2% of subscribers, and the most engaged recent uploads are the Summer Mix (112 comments) and the EDC 2022 full set (341,222 views). The 2026 lyric videos have 322,101 and 332,860 views at 0.58% and 0.25% engagement.",
  x: "X has 85,758 followers and no original post in the 40 most recent items, which reach back to May 2024.",
};

/* ----------------------------------------------------------------------------
 * 05 Peers
 * ------------------------------------------------------------------------- */

export type Peer = {
  k: string;
  igF: number;
  igPw: number;
  igReel: number;
  igEr: number;
  ttF: number;
  ttPw: number;
  ttPlays: number;
  ttPpf: number;
  self?: boolean;
};

export const PEERS: Peer[] = [
  { k: "AUDIEN", igF: 109223, igPw: 0.47, igReel: 42914, igEr: 5.3, ttF: 7906, ttPw: 3.73, ttPlays: 5721, ttPpf: 0.72, self: true },
  { k: "ILLENIUM", igF: 1206717, igPw: 1.4, igReel: 1448150, igEr: 4.2, ttF: 590800, ttPw: 1.56, ttPlays: 1950000, ttPpf: 3.301 },
  { k: "Gryffin", igF: 430707, igPw: 1.4, igReel: 231962, igEr: 2.7, ttF: 318900, ttPw: 2.88, ttPlays: 19300, ttPpf: 0.061 },
  { k: "Said The Sky", igF: 216166, igPw: 2.26, igReel: 51845, igEr: 1.5, ttF: 175400, ttPw: 0.86, ttPlays: 14000, ttPpf: 0.08 },
  { k: "Seven Lions", igF: 342406, igPw: 1.17, igReel: 259396, igEr: 2.1, ttF: 52200, ttPw: 1.56, ttPlays: 10000, ttPpf: 0.192 },
  { k: "Dabin", igF: 164846, igPw: 1.01, igReel: 140861, igEr: 4.4, ttF: 113500, ttPw: 0.23, ttPlays: 38200, ttPpf: 0.337 },
  { k: "William Black", igF: 156265, igPw: 0.93, igReel: 185002, igEr: 4.7, ttF: 32500, ttPw: 1.01, ttPlays: 20200, ttPpf: 0.622 },
  { k: "Jason Ross", igF: 86228, igPw: 0.93, igReel: 27698, igEr: 1.8, ttF: 9163, ttPw: 0.7, ttPlays: 3299, ttPpf: 0.36 },
  { k: "MitiS", igF: 67320, igPw: 0.31, igReel: 13550, igEr: 2.0, ttF: 9099, ttPw: 0.08, ttPlays: 3573, ttPpf: 0.393 },
  { k: "Nurko", igF: 74722, igPw: 2.88, igReel: 8577, igEr: 0.7, ttF: 21200, ttPw: 2.33, ttPlays: 593, ttPpf: 0.028 },
  { k: "Kaskade", igF: 1240777, igPw: 2.72, igReel: 89163, igEr: 0.3, ttF: 204700, ttPw: 2.1, ttPlays: 4761, ttPpf: 0.023 },
];

export const METRICS = [
  { id: "igEr", k: "IG engagement", fmt: "pct1", note: "Median (likes + comments) per post over current followers, last 40 posts." },
  { id: "igPw", k: "IG posts a week", fmt: "dec", note: "Posts dated July 10 to October 8, 2026, divided by 12.9 weeks." },
  { id: "igReel", k: "IG reel plays", fmt: "num", note: "Median plays on reels in the last 40 posts." },
  { id: "igF", k: "IG followers", fmt: "num", note: "Followers on the pull date." },
  { id: "ttF", k: "TikTok followers", fmt: "num", note: "Followers on the pull date." },
  { id: "ttPpf", k: "TikTok plays per follower", fmt: "dec", note: "Median plays on the last 40 videos over current followers. ILLENIUM's reflects sustained paid support." },
  { id: "ttPlays", k: "TikTok plays", fmt: "num", note: "Median plays on the last 40 videos, promoted included." },
  { id: "ttPw", k: "TikTok posts a week", fmt: "dec", note: "Posts dated July 10 to October 8, 2026, divided by 12.9 weeks." },
] as const;

export const PEER_READ = [
  { v: "1st", l: "of 11 on Instagram engagement. The audience is there." },
  { v: "10th", l: "of 11 on Instagram posting. Only MitiS posts less." },
  { v: "1st", l: "of 11 on TikTok posting, and 2nd on plays per follower." },
  { v: "11th", l: "of 11 on TikTok followers. The account is a year old." },
];

export const WORLDS = [
  { k: "ILLENIUM", w: "The phoenix", b: "One symbol across logo, stage, merch and emoji. Each album extends the same mythology." },
  { k: "Seven Lions", w: "Dark fantasy chapters", b: "Consistent illustrators, every EP a chapter of one dream, a label world around it." },
  { k: "Dabin", w: "Stay In Bloom", b: "Pastel florals, a named fanbase (Bloomers), a community account and his own festival." },
  { k: "Said The Sky", w: "Icarus", b: "Sky blue and sun gold, wing hoodies, an emoji system. The closest palette to First Love." },
  { k: "William Black", w: "The Shadow Realm", b: "Anime and game culture on the LED wall, voted on by fans in the comments." },
  { k: "AUDIEN", w: "PHND and the heart", b: "An owned show brand and an owned symbol. Not yet one named world.", self: true },
];

export const BREAKOUTS = [
  { href: "https://www.instagram.com/p/DXiWdFGDgeB/", img: "DXiWdFGDgeB", who: "Said The Sky", metric: "3.54M plays", x: "68x his median", note: "\"being the first person to arrive at my own show\". The artist as the joke" },
  { href: "https://www.instagram.com/p/DWCQwQfCZ8T/", img: "DWCQwQfCZ8T", who: "William Black", metric: "4.44M plays", x: "24x his median", note: "\"ALMOST FIRED MY VJ BECAUSE OF THIS\". Minecraft and anime on the wall" },
  { href: "https://www.instagram.com/p/DZLO8grSMcF/", img: "DZLO8grSMcF", who: "Jason Ross", metric: "2.18M plays", x: "79x his median", note: "His local news clip at age 12. An origin story, from a smaller account than AUDIEN's" },
  { href: "https://www.tiktok.com/@dabinmusic/video/7642394533791075614", img: "7642394533791075614", who: "Dabin", metric: "590,500 plays", x: "15x his median", note: "Kingdom Hearts at EDC. Something fans already love, named on screen" },
];

export const PEER_PATTERNS = [
  { h: "Live is the default, not the breakout", b: "About 58% of peer posts are live clips. The posts that run 20x to 80x a peer's median are skits and origin stories, with the artist as the subject." },
  { h: "Co-authored posts carry reach", b: "All three of Kaskade's top reels are collab posts. Gryffin's and Dabin's top reels too. Every festival, vocalist and b2b clip can reach both fanbases." },
  { h: "Nostalgia beats new-music promo", b: "Dabin's Kingdom Hearts edit, Jason Ross's Angels & Airwaves remix, Seven Lions playing Led Zeppelin. AUDIEN's remix catalog lives in this lane." },
  { h: "Volume alone does not buy reach", b: "Nurko posts most and earns 0.03 TikTok plays per follower. What moves reach is the first second, not the count." },
];

/* ----------------------------------------------------------------------------
 * 06 Fans
 * ------------------------------------------------------------------------- */

export const FANS = {
  collected: 5430,
  analyzed: 5034,
  sources: [
    { k: "Instagram", v: 3159 },
    { k: "YouTube", v: 1581 },
    { k: "TikTok", v: 358 },
    { k: "Reddit", v: 332 },
  ],
  positive: 98,
  themes: [
    { k: "Live show and set experience", share: 10.4, pos: 49, neg: 2.1 },
    { k: "Nate himself: gratitude, \"brother\", the dogs", share: 9.0, pos: 48, neg: 0.7 },
    { k: "The music's emotional impact", share: 6.9, pos: 63, neg: 0.6 },
    { k: "Wanting new music and unreleased IDs", share: 4.1, pos: 41, neg: 1.0 },
    { k: "Nostalgia for 2012 to 2016 records", share: 3.8, pos: 38, neg: 2.1 },
    { k: "Vocals and features", share: 3.4, pos: 47, neg: 1.2 },
    { k: "PHND identity", share: 2.6, pos: 45, neg: 0 },
    { k: "Tour and city requests", share: 1.2, pos: 32, neg: 1.7 },
    { k: "Merch and vinyl", share: 0.6, pos: 42, neg: 0 },
    { k: "Genre, sound or edit criticism", share: 0.5, pos: 12, neg: 44 },
  ],
  questions: [
    { k: "What is this song, and when is it out?", n: 160 },
    { k: "When does it release?", n: 23 },
    { k: "When are you coming to my city or country?", n: 19 },
    { k: "Collab questions", n: 8 },
    { k: "Set times, tickets, afters", n: 5 },
  ],
  replies: [
    { k: "Instagram", v: "5.1%", n: "154 replies across 28 of 30 posts" },
    { k: "TikTok", v: "6.5%", n: "22 replies plus 42 liked fan comments" },
    { k: "YouTube", v: "0.5%", n: "8 owner comments on his own channel" },
  ],
  places: ["Miami", "Chicago", "Los Angeles", "Denver", "London", "Tampa", "New York", "Brazil", "Minneapolis", "Manila"],
};

export const QUOTES = [
  { q: "Progressive house never died it just waited for Audien", who: "Instagram, Sphere reel", href: "https://www.instagram.com/p/DWDAkApDumN/", tone: "pos" },
  { q: "i listen to you from + a decade when i was young and you always deliver, now married with a baby and you produce the same feeling, thank you", who: "YouTube, Summer Mix 2025", href: "https://www.youtube.com/watch?v=7EMwUA6I0Jk", tone: "pos" },
  { q: "Changed my life at this set. Patiently waiting for this release.", who: "YouTube, EDC Las Vegas 2022 set", href: "https://www.youtube.com/watch?v=c6XL8XKjemU", tone: "pos" },
  { q: "I have been waiting for this ID, How It Was, for years. Pls Nate, let him be free.", who: "YouTube, Summer Mix 2021", href: "https://www.youtube.com/watch?v=-9cP5elKZis", tone: "mix" },
  { q: "When is this song coming out dude I'm sick of the gatekeeping", who: "TikTok, PHND at Pier 17", href: "https://www.tiktok.com/@audien/video/7672770085693492494", tone: "mix" },
  { q: "Feels like his old school stuff, I've had this on repeat!", who: "YouTube, High Hopes", href: "https://www.youtube.com/watch?v=lIUVZhfr4lg", tone: "pos" },
  { q: "heartbroken about the london show getting canceled", who: "Instagram, February 2026", href: "https://www.instagram.com/p/DVRnOl-jvf-/", tone: "neg" },
  { q: "Just got a shirt now please release more of your regular ones on your website", who: "Instagram, October 2026", href: "https://www.instagram.com/p/DeKmEVGkiIa/", tone: "mix" },
  { q: "Man when would you come to India we need PHND", who: "Instagram, August 2026", href: "https://www.instagram.com/p/Db_oDffEk5A/", tone: "pos" },
  { q: "sphere was made for progressive house", who: "Instagram, Sphere reel", href: "https://www.instagram.com/p/DWDAkApDumN/", tone: "pos" },
];

export const FAN_BRIEF = [
  { h: "Give the IDs a road to release", b: "The top question is about songs he already plays. A visible path from set clip to pre-save turns the frustration into a countdown." },
  { h: "Make PHND the thing you join", b: "Fans already use it like a membership. Give it a name for the people in it, a list to join and something to wear." },
  { h: "Let Nate be in the frame", b: "9% of all conversation is about him personally. The personal posts earn the most likes per post on Instagram." },
  { h: "Honor the classics", b: "Something Better, Leaving You, Wayfarer. New songs get the warmest reaction when they \"feel like his old school stuff\"." },
];

/* ----------------------------------------------------------------------------
 * 07 Video AI
 * ------------------------------------------------------------------------- */

export const BRAIN = {
  intro:
    "We indexed 49 videos in a TwelveLabs Jockey knowledge store: 26 of AUDIEN's best, worst and promoted posts and 23 peer breakouts. Then we asked it what separates them, and checked every claim about the first seconds against a frame we pulled ourselves.",
  total: 49,
  corpus: [
    { k: "AUDIEN organic winners", v: 14 },
    { k: "AUDIEN low performers", v: 8 },
    { k: "AUDIEN promoted", v: 4 },
    { k: "Peer breakouts", v: 23 },
  ],
  findings: [
    {
      h: "Live crowd proof wins. Packaged promo loses.",
      b: "13 of 14 top organic videos are live crowd clips, against 2 of 8 low performers. The winners show the room in the first frame: Brooklyn Mirage, the Pier 17 heart, the Red Rocks intro. The losers are a product close-up, an airport bit, and one lyric card template used three times.",
      take: "Lead with the room, every time. Footage that already exists is the best creative AUDIEN has.",
      clips: [
        { href: "https://www.instagram.com/p/C62FEAGuZ9G/", label: "Brooklyn Mirage recap", views: "103,801 plays" },
        { href: "https://www.tiktok.com/@audien/video/7672770085693492494", label: "Pier 17, the neon heart", views: "55,300 plays" },
        { href: "https://www.tiktok.com/@audien/video/7693650879651646734", label: "Partner product close-up", views: "664 plays", low: true },
        { href: "https://www.tiktok.com/@audien/video/7689171898223054111", label: "Lyric card template", views: "747 plays", low: true },
      ],
    },
    {
      h: "Peers open on a one-line premise. AUDIEN opens on a label.",
      b: "14 of 23 peer videos open with a burned-in story or boast line. 6 of 26 AUDIEN videos do. He actually puts text on screen more often than peers, but it is a lyric, a venue or a date, which labels the clip without giving a reason to keep watching. When he does open on a premise, it works.",
      take: "One line, first second, a story not a label: \"my full red rocks intro\", not \"RED ROCKS\".",
      clips: [
        { href: "https://www.instagram.com/p/DVrW_awEdIT/", label: "ILLENIUM, \"I BROUGHT DUBSTEP TO SPHERE\"", views: "16.0M plays" },
        { href: "https://www.instagram.com/p/DXiWdFGDgeB/", label: "Said The Sky, first to arrive at his own show", views: "3.54M plays" },
        { href: "https://www.tiktok.com/@audien/video/7649031640869539086", label: "AUDIEN, \"my full 2026 red rocks intro\"", views: "46,300 plays" },
        { href: "https://www.tiktok.com/@audien/video/7567930803972263223", label: "AUDIEN, NYC's top hype man", views: "29,200 plays" },
      ],
    },
    {
      h: "The biggest outliers borrow something fans already love. His versions already work.",
      b: "Dabin's Kingdom Hearts edit, Jason Ross at 12 on the local news, William Black's anime wall. AUDIEN's Avicii tribute (70,803) and Garrix tease (76,696) are among his best posts, and his Red Rocks intro is built on The 1975. He just never names the reference on screen.",
      take: "Name the reference in the first second. \"I played Avicii at PHND\" travels further than the clip alone.",
      clips: [
        { href: "https://www.tiktok.com/@dabinmusic/video/7642394533791075614", label: "Dabin, Kingdom Hearts at EDC", views: "590,500 plays" },
        { href: "https://www.instagram.com/p/DZLO8grSMcF/", label: "Jason Ross, local news at 12", views: "2.18M plays" },
        { href: "https://www.instagram.com/p/C7Csp7TOu49/", label: "AUDIEN, \"for you…. @avicii\"", views: "70,803 plays" },
        { href: "https://www.instagram.com/p/C6ueBu9OLAw/", label: "AUDIEN, the Martin Garrix tease", views: "76,696 plays" },
      ],
    },
    {
      h: "He is in the frame, but rarely the hook",
      b: "His face appears in 18 of 25 videos checked, yet only 1 of 26 opens on it. Most of the time he is a small figure behind the decks. Jockey reads him as earnest, polished and proud of PHND, occasionally goofy, rarely vulnerable. His one real talking-to-camera story, how a video game soundtrack led him to melodic music, is buried inside a 60-second show promo.",
      take: "Cut the origin story into a 20-second standalone. Make him the character, not the silhouette.",
      clips: [
        { href: "https://www.tiktok.com/@audien/video/7667808320278842637", label: "\"always you\", the one face-first open", views: "23,600 plays" },
        { href: "https://www.instagram.com/p/DP4jBPpDv_4/", label: "The origin story, inside a promo", views: "27,103 plays" },
        { href: "https://www.instagram.com/p/DXiWdFGDgeB/", label: "Said The Sky, the artist as the subject", views: "3.54M plays" },
      ],
    },
    {
      h: "The visual world is half-built",
      b: "PHND branding shows up in at least 7 of 25 videos and the heart in about 4. In the same weeks, one-off devices compete with them: a recycled green lyric card, partner marks, equipment integrations. Jockey found no consistent AUDIEN color, typeface or wardrobe. Peers are recognizable before you read the caption.",
      take: "Two recurring marks only, PHND and the heart. One typeface and one color for every burned-in line.",
      clips: [
        { href: "https://www.tiktok.com/@audien/video/7672770085693492494", label: "The heart at Pier 17", views: "55,300 plays" },
        { href: "https://www.tiktok.com/@audien/video/7557784224733023501", label: "The chrome heart, album spot", views: "75,600 plays, promoted" },
        { href: "https://www.tiktok.com/@mitismusic/video/7611617003371040014", label: "MitiS, a world you can recognize", views: "109,000 plays" },
      ],
    },
    {
      h: "Announcements are cut like trailers, so the payoff comes late",
      b: "Show and release promos open on logos, city shots and campaign copy and save the crowd for the back half. Low-performing reels run a median 35.4 seconds against 23.9 for the winners. The AUDIEN PRESENTS reel spends more than 20 seconds before the venue appears.",
      take: "Crowd moment in the first 3 seconds, date and city as a short overlay, the PHND lockup last.",
      clips: [
        { href: "https://www.instagram.com/p/DbbbUO8vvst/", label: "PHND NYC announce", views: "11,282 plays", low: true },
        { href: "https://www.tiktok.com/@kaskade/video/7636475425878854926", label: "Kaskade, the song sung live first", views: "3.1M plays" },
        { href: "https://www.tiktok.com/@audien/video/7626878481632169230", label: "Sacrifice drop, promoted", views: "155,600 plays, 0.63% likes" },
      ],
    },
    {
      h: "The ask lives only in the caption, and it still nearly triples comments",
      b: "No video in the set, AUDIEN or peer, puts a call to action on screen. On Instagram, reels whose caption asks for something earn a median 5.11 comments per 1,000 views, against 1.88 without. Stage invites and free tickets are the strongest asks: one \"tag a friend\" post drew 572 comments.",
      take: "An on-screen end card tied to PHND access. None of the 49 videos does it yet.",
      clips: [
        { href: "https://www.tiktok.com/@audien/video/7649031640869539086", label: "\"Rate my intro out of 10\"", views: "46,300 plays, 121 comments" },
        { href: "https://www.tiktok.com/@audien/video/7581515159932275982", label: "\"which of these clips hit the hardest?? 1-5\"", views: "17,600 plays" },
        { href: "https://www.instagram.com/p/Cuxfk7eAXYJ/", label: "\"STAY TRUE LA .. who was there!?\"", views: "93,183 plays" },
      ],
    },
  ],
};

/* ----------------------------------------------------------------------------
 * 08 Funnel
 * ------------------------------------------------------------------------- */

export const FUNNEL = {
  intro:
    "A fan who loves a clip has nowhere of AUDIEN's own to go. Every door below was opened and checked on October 8.",
  doors: [
    { where: "Instagram bio", says: "Links to the Playboy x AUDIEN store on shop.playboy.com. Sign-ups and tracking there belong to the store, not to AUDIEN.", state: "away" },
    { where: "TikTok bio", says: "The same store link. The bio itself is a single white heart.", state: "away" },
    { where: "audiendj.com", says: "One Squarespace page: a photo, a Bandsintown widget, contact emails. No music, no PHND, no store, no email capture, no meta description.", state: "thin" },
    { where: "PHND site", says: "A separate site for the show brand, with no tracking pixel installed.", state: "thin" },
    { where: "Fan sign-up", says: "Laylo, SMS only: \"Something big is coming\". No email list, no Discord.", state: "thin" },
    { where: "Spotify profile", says: "Artist Pick is 7 Miles High. The bio stops at the 2019 album and the profile photo is from 2023.", state: "stale" },
    { where: "YouTube", says: "AudienTV. The @audien handle does not exist, and the last long-form upload was April 10.", state: "stale" },
    { where: "His own store", says: "Exists on Shopify, linked from no bio.", state: "away" },
  ],
  scores: [
    { k: "Performance", v: 36, note: "Largest contentful paint 12.7 seconds on mobile" },
    { k: "Accessibility", v: 96, note: "Clean" },
    { k: "Best practices", v: 79, note: "Below the 90 benchmark" },
    { k: "SEO", v: 85, note: "No meta description" },
  ],
  pixels: [
    { k: "Meta Pixel", ok: true, note: "Installed on audiendj.com" },
    { k: "Google Analytics or Tag Manager", ok: false, note: "Not installed" },
    { k: "TikTok Pixel", ok: false, note: "Not installed, with TikTok the fastest-growing channel" },
    { k: "Email capture", ok: false, note: "None on any owned page" },
    { k: "PHND site tracking", ok: false, note: "No pixel at all" },
  ],
  ads: [
    { k: "SF Midway show, October 9", n: "About 10 ads", d: "Live since August 14" },
    { k: "In Every Life", n: "About 2 weeks", d: "February 2026" },
    { k: "Sacrifice", n: "About 2 weeks", d: "April 2026" },
    { k: "High Hopes, 7 Miles High, the capsule", n: "None found", d: "" },
  ],
  autocomplete: [
    { q: "audien", a: ["hearing aids", "hearing aids reviews", "atom pro 2", "atom x", "ion pro 2", "walmart"] },
    { q: "audien t", a: ["tour", "tickets", "tour 2026", "top songs", "tracklist", "the midway"] },
    { q: "audien s", a: ["seattle", "silo", "something better", "sacrifice", "shields"] },
    { q: "audien f", a: ["first love vinyl", "first love", "favorite sound"] },
  ],
  search:
    "On the bare name, he still holds 7 of the top 10 Google results, but the hearing aid brand owns the suggestions, the \"People also ask\" box and most of the ad library. Fans have to add \"tour\", a venue or a song title to find him, and on \"audien dj\" neither audiendj.com nor his Instagram reaches page one. His own US search interest, measured as an artist topic, has been flat since 2023 and peaks every July with the Summer Mix.",
};

/* ----------------------------------------------------------------------------
 * 09 Direction
 * ------------------------------------------------------------------------- */

export const DIRECTION = {
  intro:
    "The research points to one move: stop running AUDIEN, PHND and the heart as three things, and build one world where PHND is the franchise, the heart is the mark, and Nate is the voice. Everything below is a starting point for the conversation, not a finished identity.",
  position: {
    line: "The heart of progressive house.",
    b: "AUDIEN is the artist who kept a genre alive and built a room for the people who never stopped loving it. Not a revival act, the keeper. It is what fans already say (\"progressive house never died, it just waited for Audien\"), it is what the press already calls him (\"standard-bearer for progressive house\"), and no peer in the set owns it.",
  },
  world: [
    { k: "AUDIEN", r: "The artist", b: "The name on the records and the person in the frame. Lowercase, sincere, a little self-deprecating, signed with the white heart." },
    { k: "PHND", r: "The franchise", b: "The shows, the community and the name for the people in it. The heart-shaped lockup becomes the sub-brand mark, every city, every year." },
    { k: "The heart", r: "The mark", b: "Promoted from album art to logo. Locked with the wordmark, on every cover, every stage, every end card and every piece of merch." },
  ],
  era: {
    k: "HEARTLAND",
    tag: "Working title for the next era",
    b: "The lone figure in a vast American landscape has run through his covers since 2019. The heart has run through them since 2025. Put them together: one figure, one heart, wide open country at dusk. It carries the nostalgia fans ask for, the cinematic mood of the 2026 covers, and a story that scales from a single cover to a stage.",
  },
  system: [
    { k: "Wordmark", b: "Lock the 2024 extended sans as the master and set it in a fixed position on every cover. Retire the other treatments." },
    { k: "Lockup", b: "Wordmark plus chrome heart as the primary logo. The PHND heart type stays as the show mark." },
    { k: "Palette", b: "Chrome, dusk teal (#273128 to #588993) and peach (#FDE8DE), with one owned accent. We recommend bringing back the First Love acid green (#1AFE13): it is already his, and it keeps the sky-and-heart look clear of Said The Sky's." },
    { k: "Type on video", b: "One typeface and one color for every burned-in line, so a clip reads as AUDIEN before the caption loads." },
    { k: "Photography", b: "One photographer or 3D artist per season, so covers, press photos, the Spotify header and Canvas share one hand. Refresh the Spotify photo and bio." },
    { k: "Partnerships", b: "Brand work runs through the show: partner moments filmed at PHND, in the world, rather than as standalone product posts." },
  ],
  pillars: [
    { k: "The Room", b: "Live proof, premise first. The crowd in the first frame, one line of story, 15 to 25 seconds, the heart in shot." },
    { k: "The Keeper", b: "The genre and its history: named-reference moments, the classics reworked, \"the progressive house police\", the ID to release road." },
    { k: "Nate", b: "The person: the origin story, studio teases, birthdays and the dogs, fans as the heroes of their own clips." },
    { k: "The Heart", b: "The world made physical: the capsule, vinyl, the fan billboard, PHND passes, a fanbase with a name." },
  ],
  platforms: [
    { k: "Instagram", r: "Home", b: "From 0.47 to 4 posts a week. Every TikTok winner becomes a reel within 48 hours. Carousels for milestones." },
    { k: "TikTok", r: "Growth", b: "Daily on tour, 4 a week off it. Organic first, then promote the posts that already won." },
    { k: "YouTube", r: "The archive, reopened", b: "A full PHND set every month, the Summer Mix as a tentpole, Shorts cut for YouTube. Claim @audien." },
    { k: "X", r: "Announcements", b: "Clips and PHND news only, or park it with a pinned link. Retweets alone read as absent." },
  ],
};

/* ----------------------------------------------------------------------------
 * 10 Plan
 * ------------------------------------------------------------------------- */

export const PLAN = {
  intro: "A social plan built around the dates already on the calendar, so the fall run feeds the brand work and the brand work is ready for 2027.",
  phases: [
    {
      k: "Foundation",
      when: "Weeks 1 to 3",
      items: [
        "Footage bank: every set, crowd angle and studio clip in one tagged library",
        "Lock the wordmark, heart lockup, on-screen type and end card",
        "One owned link hub with email and SMS capture, Meta and TikTok pixels",
        "Spotify photo, bio and Canvas refresh. Claim YouTube @audien",
      ],
    },
    {
      k: "The fall run",
      when: "October 17 to December 19",
      items: [
        "Minneapolis, Portland, NYC, San Diego, Denver, Edmonton, Vancouver, Houston: shot for content, not just played",
        "Daily TikTok, 4 reels a week, premise-first",
        "Weekly series launch: \"Rate my intro\", \"Should I finish this\", PHND origins",
        "Promote organic winners only, with a small always-on budget",
      ],
    },
    {
      k: "The world",
      when: "January to March 2027",
      items: [
        "Name the era and the fanbase. The heart becomes the logo everywhere",
        "ID to release road: set clip, countdown, pre-save, drop",
        "First collab posts with peers and vocalists",
        "Build to Miami Music Week, where PHND began",
      ],
    },
    {
      k: "The tentpole",
      when: "Spring and summer 2027",
      items: [
        "One PHND flagship, documented as a series",
        "Capsule two on his own store, sold at shows and online",
        "The Summer Mix as YouTube's biggest week",
        "International cuts for the UK, Australia and Germany",
      ],
    },
  ],
  series: [
    { k: "Rate my intro", b: "Every new intro, posted the morning after, rated in the comments. Already his format: 46,300 plays and 121 comments." },
    { k: "Should I finish this", b: "Studio teases with a yes or no ask. 63,700 to 76,696 plays and up to 499 comments." },
    { k: "PHND origins", b: "Two minutes with a fan about how they found progressive house, cut to 20 seconds. The hype man format, on purpose." },
    { k: "The classics, live", b: "Something Better, Wayfarer, Leaving You, named in the first second, filmed from the crowd." },
  ],
  kpis: [
    { k: "Instagram posts a week", now: "0.47", to: "4", when: "From week 3" },
    { k: "TikTok followers", now: "7,906", to: "50,000", when: "6 months, Seven Lions' level" },
    { k: "TikTok organic median plays", now: "5,125", to: "10,000", when: "90 days, the peer mid-tier median" },
    { k: "Instagram median reel plays", now: "42,914", to: "60,000", when: "90 days" },
    { k: "Owned list (email and SMS)", now: "SMS only", to: "25,000", when: "6 months" },
    { k: "Promoted post engagement", now: "1.8%", to: "6%", when: "By promoting proven posts" },
  ],
  measure: [
    "Followers, reach and engagement by platform, against the ten peers",
    "Median plays by series and by hook, so formats earn their slot",
    "Organic versus promoted, reported separately",
    "List sign-ups by source: link hub, shows, drops",
    "Spotify listeners, saves and pre-saves around every release",
    "Fan comments read and tagged weekly, questions answered",
  ],
};

/* ----------------------------------------------------------------------------
 * 11 Creative
 * ------------------------------------------------------------------------- */

export const CREATIVE = {
  intro:
    "What the direction could look like, made for this audit. Three short videos and six stills in the HEARTLAND direction, using the heart, PHND and the lone figure. No likeness of Nate was generated.",
  label: "AI-generated examples, directional only. Not final artwork",
  videos: [
    { k: "Spotify Canvas", fmt: "Loop, 9:16", video: "canvas-loop.mp4", poster: "canvas-frame", why: "The era in eight seconds, built to sit behind every track on his profile." },
    { k: "Premise-first live clip", fmt: "TikTok and Reels, 9:16", video: "premise-clip.mp4", poster: "premise-clip-frame", top: "PHND NYC", big: "the moment the whole rooftop stopped filming and jumped", cta: "Next PHND: link in bio", why: "The crowd in frame one, one line of story, the ask on screen." },
    { k: "The heart on stage", fmt: "Stage and trailer, 16:9", video: "stage-heart.mp4", poster: "stage-heart", wide: true, why: "The mark promoted to the stage centerpiece, so every crowd clip carries it." },
  ],
  stills: [
    { img: "heartland-key-art", k: "Era key art", line: "One figure, one heart, open country", why: "The cover world for the next era, ready to stretch to billboards and stage screens." },
    { img: "cover-system", k: "Cover system", line: "The last three singles, one system", why: "High Hopes, Sacrifice and 7 Miles High in a locked layout: wordmark top left, title bottom left, the accent square, the heart." },
    { img: "phnd-sf-poster", k: "PHND city poster", line: "The lockup, chrome, every city", why: "The template he already owns, upgraded to the chrome system." },
    { img: "merch-capsule", k: "Capsule", line: "The world you can wear", why: "Heart lockup, sleeve wordmark, a PHND pass. Sold at shows and on his own store." },
    { img: "studio-series-frame", k: "Should I finish this", line: "The studio series, with the heart in the room", why: "His best rare format, made recurring." },
    { img: "premise-clip-frame", k: "The Room", line: "Premise-first, crowd in frame one", why: "The frame every live clip should open on." },
  ],
};

/* ----------------------------------------------------------------------------
 * 12 Why and next
 * ------------------------------------------------------------------------- */

export const WHY = {
  intro:
    "Crowd Control is a culture-first marketing agency. We run social, paid, creative and data for artists, labels, tours and the brands around them, and we build research like this for every client before we spend a dollar.",
  points: [
    { h: "Brand and social under one roof", b: "Creative direction, the visual system, editing, posting and community, run by one team so the brand and the feed never drift apart." },
    { h: "Tour content as a system", b: "We plan every date as a content shoot and turn a run of shows into a run of posts, with per-market media where tickets need it." },
    { h: "Listening before posting", b: "Video AI, social listening and peer teardowns decide what we make, the way this audit was built." },
    { h: "Reporting you can open", b: "A live report page refreshed every week, for you, the label and the team." },
  ],
  clients: ["NBA", "Golden State Warriors", "Apple", "Amazon", "Beats By Dre", "Warner Bros", "Monster Energy", "Foot Locker", "Porsche", "Edition Hotels", "Malbon Golf", "Polymarket", "Weedmaps", "Barker Wellness", "Aplós", "Prima"],
};

export const NEXT = {
  steps: [
    { h: "Walk-through call", b: "We take the team through this audit on Tuesday and hear where AUDIEN is headed in 2027." },
    { h: "Three-week foundation", b: "Footage bank, the locked identity, the link hub and the tracking, in place before the Minneapolis show." },
    { h: "The fall run, on social", b: "Daily content from every date through Houston on December 19, and the first named series." },
  ],
  need: [
    "Instagram, TikTok and YouTube access",
    "Meta Business Manager and TikTok Ads access",
    "Laylo and Shopify access",
    "Set, crowd and studio footage archive",
    "Upcoming release and show calendar",
    "Label and partner contacts for collab posts",
  ],
  book: "https://app.reclaim.ai/m/team-leads",
  email: "geoff@crowdcontroldigital.com",
  name: "Geoff Shames",
  role: "Crowd Control Digital",
};

export const SOURCES = [
  "Instagram: Apify instagram-scraper, all 68 public @audien posts (grid and Reels tab) and the 40 most recent posts for each of ten peer artists, pulled October 8, 2026",
  "TikTok: Apify clockworks TikTok scraper and Tokscript, all 91 public @audien videos and the 40 most recent per peer. Promoted status from TikTok's ad flag",
  "YouTube: Apify YouTube scraper, the full AudienTV channel (46 long-form, 33 Shorts). X: Apify tweet scraper, 40 most recent items",
  "Streaming: Chartmetric API (artist 3717), Spotify listener and follower history, where people listen, tracks, playlists and career score, pulled October 8, 2026. kworb.net daily streams, updated September 14, 2026",
  "Fans: 5,430 items (3,159 Instagram comments, 1,581 YouTube comments, 358 TikTok comments, 332 Reddit posts and comments), 5,034 analyzed. Theme and tone scored with rules checked against about 250 hand-read comments. Sentiment is an analytical estimate",
  "Video AI: TwelveLabs Jockey knowledge store \"Audien + peers (CCD)\", 49 videos indexed, every first-second claim checked against pulled frames",
  "Brand: 43 release covers since 2019 from the iTunes Search API, palettes by median-cut quantization; wordmarks from audiendj.com, the PHND site and official posts",
  "Funnel: audiendj.com and PHND site HTML and network capture, Lighthouse mobile lab run, Meta Ad Library, Google autocomplete and Google Trends topic data, October 8, 2026",
  "Career facts: Wikipedia, EDMTunes, EDM.com, EDM Identity, Beatportal, Magnetic Magazine, Laylo, Songkick and official posts",
  "Photography: AUDIEN official Instagram. Peer thumbnails link to the original posts",
];
