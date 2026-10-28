/**
 * Liza Soberano KILLSHOT: chapter 02 launch plan (single, video, film).
 * Example creative is AI-generated (Higgsfield) and hosted on the Higgsfield CDN.
 * Every figure here is sourced in SOURCES.
 */

export const CDN = "https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB";

export const A = {
  hero: `${CDN}/97fdc9ab-0fcc-4305-9313-83dc943f8383.jpg`,
  editA: `${CDN}/57e40ad9-bf19-4f3b-ab7c-d4ba5bb41e5c.jpg`,
  editB: `${CDN}/45eca533-2485-417e-a6dd-303239185173.jpg`,
  ph: `${CDN}/a57ec9c1-ad0f-4b88-ae96-1a776f1c948d.jpg`,
  reaction: `${CDN}/f061fd08-af31-4a4d-b60a-ae0c8abdf5ce.jpg`,
  premiere: `${CDN}/7cab369b-b12e-479c-b1cc-4b3b72b9fda3.jpg`,
  film: `${CDN}/1b6f5f66-db2c-4e47-83b2-396e8f3d8f02.jpg`,
  metaAd: `${CDN}/755675b8-7f0f-4f89-b1eb-30ef07c973aa.jpg`,
  actionVid: `${CDN}/c5f100ec-4a23-44b4-a77b-ec10eb16def5.mp4`,
  actionPoster: `${CDN}/80a93c0a-ac63-4e07-9630-297a3af572d4.jpg`,
  rooftopVid: `${CDN}/6909602b-9485-4878-a531-49c7258f71e4.mp4`,
  rooftopPoster: `${CDN}/3dd0d81c-6abd-4ce1-9f47-db6f18f4ec96.jpg`,
  og: `${CDN}/7eb5349c-3c57-4b12-af61-cf4da4ef65d3.jpg`,
};

export const PASSWORD = "HOPE";

export const NAV = [
  { id: "moments", label: "Moments" },
  { id: "plan", label: "Plan" },
  { id: "clipping", label: "Clipping" },
  { id: "philippines", label: "Philippines" },
  { id: "reactions", label: "Reactions" },
  { id: "paid", label: "Paid" },
  { id: "film", label: "New IP" },
  { id: "target", label: "Target" },
  { id: "creative", label: "Creative" },
  { id: "next", label: "Next" },
];

export const HERO = {
  kicker: "Chapter 02 / The launch plan",
  title: "KILLSHOT",
  line: "Four dates. One story.",
  sub: "Liza Soberano: the reveal, the single, the shoot and the premiere.",
  stats: [
    { value: 18, suffix: "M+", label: "Instagram followers" },
    { value: 64, suffix: "M", label: "Adults TikTok ads reach in the Philippines" },
    { value: 4.6, decimals: 1, suffix: "M", label: "Filipino Americans in the U.S." },
  ],
  date: "October 2026",
};

export const MARQUEE = ["Reveal Nov 1", "Single Nov 6", "Shoot Nov 9–10", "Video Dec 1", "New IP", "Clipping", "Philippines", "Reactions"];

export const MOMENTS = [
  { n: "01", when: "Sun Nov 1", head: "The reveal", body: "Todd McFarlane's art, with Todd and Larry Jackson at LA Comic Con.", goal: "Countdown" },
  { n: "02", when: "Fri Nov 6", head: "The single", body: "Out everywhere, with the release party and a DJ hero moment.", goal: "Streams" },
  { n: "03", when: "Nov 9–10", head: "The shoot", body: "Set visits from the creators of Spawn and John Wick.", goal: "Content" },
  { n: "04", when: "Tue Dec 1", head: "The premiere", body: "The video and the new IP news land the same day.", goal: "Views" },
];

/** Timeline: day offsets from Nov 1 across a 36-day window. */
export const TIMELINE = {
  days: 36,
  marks: [
    { d: 0, k: "Reveal", sub: "Nov 1", kind: "on", pos: "up" },
    { d: 5, k: "Single", sub: "Nov 6", kind: "on", pos: "down" },
    { d: 8.5, k: "Shoot", sub: "Nov 9–10", kind: "ghost", pos: "up" },
    { d: 30, k: "Video + IP", sub: "Dec 1", kind: "on", pos: "up" },
  ],
  hold: { from: 25, to: 29, k: "Holiday hold", sub: "Nov 26 to 30" },
  ticks: ["Nov 1", "Nov 10", "Nov 19", "Nov 28", "Dec 7"],
  why: [
    { k: "Three weeks", v: "Single to video: time to build the edit trend" },
    { k: "After Cyber Monday", v: "Premiere lands as the holiday ad rush ends" },
    { k: "One news day", v: "Video and the Deadline/Variety story together" },
  ],
};

export const PHASES = [
  { k: "Reveal", when: "Nov 1 to 5", items: ["Comic Con reveal with Todd and Larry", "Countdown post", "PR teases the collaboration", "Pre-save ads on Meta"] },
  { k: "Drop", when: "Nov 6 to 8", items: ["Single on all platforms", "Release party and fundraiser", "DJ hero moment", "Clipping wave 1 and PH creators open", "Meta ads to Spotify"] },
  { k: "Shoot", when: "Nov 9 to 15", items: ["Video shoot, Nov 9–10", "BTS: Abigail Thorn, Todd McFarlane, Derek Kolstad on set", "BTS cut for socials and clippers", "First song reactions"] },
  { k: "Build", when: "Nov 16 to 30", items: ["Scale the best edits", "Bigger PH creators", "Premiere page live", "Paid light over the holiday"] },
  { k: "Premiere", when: "Dec 1 on", items: ["YouTube Premiere", "Deadline/Variety IP news", "Heaviest paid flight", "Clipping wave 2: the swap", "Tier-one reaction"] },
];

export const LEVERS = [
  { k: "Clipping", items: ["Action edits", "Paid per view", "Swap to video"] },
  { k: "PH creators", items: ["Three tiers", "Diaspora", "Taglish formats"] },
  { k: "Reactions", items: ["Song wave", "BTS wave", "Premiere wave"] },
  { k: "Paid", items: ["Meta to Spotify", "YouTube views", "Spark Ads"] },
  { k: "New IP", items: ["React to the news", "Film audiences", "Comic tie-in"] },
];

export const CLIPPING = {
  intro: "Make KILLSHOT the audio for female-led action edits before the video exists. Then swap in the video.",
  waves: [
    { n: "Wave 1", when: "From Nov 6", head: "Found footage", line: "KILLSHOT over iconic action scenes", vid: "action" as const },
    { n: "Wave 2", when: "From Dec 1", head: "The swap", line: "Same format, official video", vid: "rooftop" as const },
  ],
  terms: ["Paid per verified view", "Capped per creator", "Boosts only on official footage"],
  proof: [
    { v: 4, suffix: "M", label: "TikToks used \"Bloody Mary\" over a Wednesday scene", note: "Hot 100 debut, 12 years after release", src: "Billboard" },
    { v: 8700, suffix: "%", prefix: "+", label: "Kate Bush streams in a day after a Stranger Things scene", note: "No. 8 on the Hot 100", src: "Billboard" },
    { v: 22, suffix: " yrs", label: "Until \"Murder on the Dancefloor\" first hit the Hot 100", note: "After a Saltburn scene spread to 200K+ TikToks", src: "Official Charts" },
  ],
};

export const PH = {
  intro: "One of the most online countries on earth, and Liza's home market.",
  reach: [
    { k: "Facebook", v: 95.8 },
    { k: "TikTok", v: 64.0, hi: true },
    { k: "YouTube", v: 59.6, hi: true },
    { k: "Instagram", v: 26.9 },
  ],
  diaspora: [
    { k: "Los Angeles", v: 500 },
    { k: "San Francisco", v: 290 },
    { k: "New York", v: 250 },
  ],
  tiers: [
    { k: "Tier A", h: "Friends and macro names", b: "Posts that read as news" },
    { k: "Tier B", h: "Format creators", b: "Lip-sync, dance, comedy" },
    { k: "Tier C", h: "Volume", b: "Micro-creators everywhere at once" },
    { k: "Diaspora", h: "Filipino Americans", b: "L.A., Bay Area, New York" },
  ],
  pantropiko: { from: 0.2, to: 3, label: "BINI \"Pantropiko\": monthly listeners", note: "No. 173 to No. 1 on Spotify PH in about two months" },
  stats: [
    { v: 54, suffix: " hrs", label: "A week on digital media, second in the world" },
    { v: 97.2, decimals: 1, prefix: "₱", suffix: "M", label: "Forgotten Island PH opening, DreamWorks Animation's biggest there" },
  ],
};

export const REACTIONS = {
  intro: "The Philippines' sweetheart, singing about a killshot. The contrast is the hook.",
  waves: [
    { k: "Song", when: "Nov 6", b: "PH and U.S. music reactors" },
    { k: "BTS", when: "Nov 9–10", b: "Set visits from the creators of Spawn and John Wick" },
    { k: "Premiere", when: "Dec 1", b: "One tier-one YouTuber, a PH round, and the IP news" },
    { k: "Fans", when: "Dec 1 on", b: "Open call: film your reaction" },
  ],
  proof: [
    { v: 1100, prefix: "+", suffix: "%", label: "\"In the Air Tonight\" sales after one reaction video", src: "Rolling Stone" },
    { v: 114, suffix: "M", label: "\"APT.\" YouTube views in six days, with 400K+ fan TikToks", src: "JoongAng Daily" },
  ],
  note: "Reactions drive attention more than streams, so every wave is paired with retargeting to Spotify.",
};

export const PAID = {
  jobs: [
    { k: "Meta", v: "Streams", b: "Conversion ads to Spotify around the single" },
    { k: "YouTube", v: "Views", b: "In-stream and in-feed around the premiere" },
    { k: "TikTok", v: "Reach", b: "Spark Ads on organic posts already working" },
  ],
  split: [
    { k: "Philippines", v: 67 },
    { k: "U.S.", v: 33 },
  ],
  cpm: { before: 6.5, after: 8.83, label: "Median Meta CPM, Black Friday week 2025 (EUR)", src: "PPC Land" },
  notLikeUs: { label: "\"Not Like Us\" went back to No. 1 when its video landed two months after the song", v: 53.8, src: "Hypebeast" },
  rules: ["Front-load from Dec 1", "Light over the holiday", "No weapons in paid frames"],
};

export const FILM = {
  intro: "Dec 1: Liza with the creators of Spawn and John Wick, launching original new IP, with gamma as music and producing partner.",
  plays: ["KILLSHOT was the trailer", "React to the news", "Video to film fans", "Comic tie-in"],
  golden: { label: "\"Golden\" from KPop Demon Hunters", stats: [{ v: "No. 1", k: "Billboard Hot 100" }, { v: "10 wks", k: "No. 1 in the UK" }] },
};

export const TARGETS = [
  { v: "3M", h: "Proof of concept", org: 33, ph: 45, us: 22, items: ["Focused Philippines flight", "PH reactor round", "Smaller wave 2"] },
  { v: "10M", h: "A statement", org: 10, ph: 60, us: 30, items: ["Full YouTube flight", "Tier-one YouTuber", "Clipping at full scale"] },
  { v: "20M", h: "An event", org: 5, ph: 60, us: 35, items: ["Longer flight, more U.S.", "Two or three tier-one YouTubers", "Every wave, IP news included"] },
];

export const CREATIVE = {
  phones: [
    { k: "Action edit", fmt: "Clipping / Wave 1", vid: A.actionVid, poster: A.actionPoster },
    { k: "Edit as posted", fmt: "Clipping / Wave 1", img: A.editA },
    { k: "The swap", fmt: "Clipping / Wave 2", vid: A.rooftopVid, poster: A.rooftopPoster },
    { k: "Liza said KILLSHOT??", fmt: "PH creators", img: A.ph },
  ],
  stills: [
    { k: "YouTube", line: "Premiere page, live a week out", img: A.premiere, ratio: "16 / 9", fr: "16fr" },
    { k: "Paid / Meta", line: "Out-now feed ad, no weapon in frame", img: A.metaAd, ratio: "3 / 4", fr: "6.75fr" },
  ],
};

export const NEXT = {
  steps: [
    { h: "Set the target", b: "Agree the view goal and the media budget behind it." },
    { h: "Shoot for the feed", b: "A vertical BTS shot list for Nov 9–10 and the set visits." },
    { h: "Go Nov 1", b: "Countdown and pre-save at the reveal, everything live Nov 6." },
  ],
  need: [
    "Ad access: Meta, TikTok, YouTube",
    "Pre-save link for the Nov 1 countdown",
    "KILLSHOT live as the official sound, Nov 6",
    "Creator and reactor list sign-off",
    "Video selects for clippers before Dec 1",
    "Deadline/Variety embargo time for Dec 1",
  ],
  email: "geoff@crowdcontroldigital.com",
  name: "Geoff Shames",
  role: "Founder, Crowd Control Digital",
};

export const SOURCES = [
  { t: "Billboard: Lady Gaga \"Bloody Mary\" Hot 100 debut via Wednesday, Jan 2023", u: "https://www.billboard.com/music/chart-beat/lady-gaga-bloody-mary-hot-100-wednesday-1235196057/" },
  { t: "Billboard: Kate Bush \"Running Up That Hill\" in the Hot 100 top 10, Jun 2022", u: "https://www.billboard.com/music/chart-beat/harry-styles-kate-bush-hot-100-top-10-1235082217/" },
  { t: "Official Charts: \"Murder on the Dancefloor\" and Saltburn, Jan 2024", u: "https://officialcharts.com/chart-news/sophie-ellis-bextor-murder-on-the-dancefloor-saltburn-billboard" },
  { t: "Digiday: WTF is clipping, May 2025", u: "https://digiday.com/media/wtf-is-clipping/" },
  { t: "DataReportal: Digital 2026, The Philippines", u: "https://datareportal.com/reports/digital-2026-philippines" },
  { t: "GMA News: Filipinos lead in video streaming, Digital 2026", u: "https://gmanetwork.com/news/scitech/technology/963273/filipinos-lead-in-online-shopping-video-streaming-global-report/story/" },
  { t: "Pew Research Center: Filipinos in the U.S., May 2025", u: "https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-filipinos-in-the-u-s/" },
  { t: "Rappler: BINI \"Pantropiko\", Apr 2024", u: "https://www.rappler.com/entertainment/music/summer-pantropiko-the-bini-craze-continues/" },
  { t: "Philstar: Forgotten Island, biggest DreamWorks Animation opening in the Philippines, Sep 2026", u: "https://interaksyon.philstar.com/hobbies-interests/2026/09/29/319853/forgotten-island-scores-biggest-dreamworks-animation-opening-in-philippines/" },
  { t: "Rolling Stone: Phil Collins \"In the Air Tonight\" sales after a reaction video, Aug 2020", u: "https://www.rollingstone.com/pro/news/phil-collins-in-air-tonight-sales-1042139/" },
  { t: "Korea JoongAng Daily: \"APT.\" tops Spotify Global, 114M YouTube views, Oct 2024", u: "https://www.koreajoongangdaily.com/entertainment/rose-and-bruno-mars-apt-tops-spotify-global-chart-hits-114-million-views-on-youtube/12459130" },
  { t: "Hypebeast: \"Not Like Us\" returns to No. 1 after its video, Jul 2024", u: "https://hypebeast.com/2024/7/kendrick-lamar-not-like-us-returns-no-1-billboard-hot-100" },
  { t: "PPC Land: Black Friday week 2025 Meta CPMs (Billy Grace vendor data), Dec 2025", u: "https://ppc.land/cost-per-order-drops-18-in-2025-black-friday-week-billy-grace-finds/" },
  { t: "NPR: \"Golden\" reaches No. 1 on the Hot 100, Aug 2025", u: "https://www.npr.org/2025/08/13/g-s1-82371/golden-huntr-x-k-pop-demon-hunters-billboard-charts" },
  { t: "Official Charts: \"Golden\" ten weeks at No. 1, Nov 2025", u: "https://www.officialcharts.com/chart-news/huntrx-golden-number-1-single-ten-weeks" },
];
