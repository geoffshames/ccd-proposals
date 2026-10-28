/**
 * ROD WAVE: artist audit. Crowd Control Digital, October 2026.
 * Every figure on the page lives here, with its source in SOURCES or inline.
 * Data pulled 2026-10-28 unless stated. Estimates are labeled as estimates.
 */

export const IMG = "/images/rod-wave";
export const PASSWORD = "WAVE";

export const NAV = [
  { id: "summary", label: "Summary" },
  { id: "streaming", label: "Streaming" },
  { id: "touring", label: "Touring" },
  { id: "business", label: "Business" },
  { id: "merch", label: "Merch" },
  { id: "social", label: "Social" },
  { id: "teardowns", label: "Teardowns" },
  { id: "fans", label: "Fans" },
  { id: "funnel", label: "Funnel" },
  { id: "lateral", label: "Beyond music" },
  { id: "plan", label: "Plan" },
  { id: "creative", label: "Creative" },
];

export const HERO = {
  kicker: "Artist audit, October 2026",
  title: ["ROD", "WAVE"],
  line: "Streaming, touring, merch, social, fans, funnel and the business around them.",
  sub: "Prepared for the incoming management team.",
  body: "Four No. 1 albums, a 34-date arena tour he promotes himself, and the most-watched TikTok in his lane. Also: no manager of record since July 2024, no brand partner, two open Georgia cases, a $27.2M promoter suit, and a fan stack split across four Meta pixels. This audit maps all of it and ends with a plan.",
  stats: [
    { v: 8.56, d: 2, suf: "B", l: "Lifetime Spotify streams as lead and feature" },
    { v: 98.7, d: 1, pre: "$", suf: "M", l: "Reported touring gross since 2019 (Pollstar, Sept 2025)" },
    { v: 0, d: 0, l: "Brand partnerships found, 2019 to 2026" },
  ],
};

export const MARQUEE = ["Heart On Ice", "Street Runner", "Rags2Riches", "Tombstone", "Great Gatsby", "25", "Dope Girl", "Fight The Feeling", "Boyz Don't Cry", "Mainstay"];

/* -------------------------------------------------------------------------- */
/* 01 Summary                                                                  */
/* -------------------------------------------------------------------------- */

export const THESIS = {
  big: "Rod Wave does not need saving. He needs a front office.",
  body: "The music still works and the live business is growing under his own company. What is missing is everything a manager normally holds: one owner for the release calendar, the fan data, the brand book, the legal calendar and the international map. Since Uncle Dee died in July 2024 those jobs have been split between family, the label, the agent and Mainstay, or left empty. The opportunity is to become the operating partner to Mainstay, not to replace it.",
};

export const SUMMARY = [
  { id: "streaming", n: "01", t: "A plateau, not a collapse", b: "Spotify listeners sit at 56% of the 2020 peak but have averaged 6.8M to 7.5M every year since 2020. 73% of daily streams come from songs older than 18 months. Each album now adds fewer new listeners: +2.75M, then +1.67M, then +0.70M." },
  { id: "touring", n: "02", t: "Touring is the business", b: "$98.7M career gross. The 2025 Last Lap collapse turned into a self-promoted rebuild: a sold-out Tampa test, an 11-date holiday run, then 34 arena dates with nine second nights added before launch. Touring is likely 60 to 75% of his economics." },
  { id: "business", n: "03", t: "A company without a front office", b: "No third-party manager since July 2024. Booking via MAC Agency, label Alamo/Sony, publishing Sony. Mainstay now spans touring, film, distribution, publishing and a sports agency. Legal: two Georgia cases and the Grizzly suit." },
  { id: "merch", n: "04", t: "Merch is sold out mid-tour", b: "Two Shopify stores run by two parties. Every signed vinyl variant is sold out. The artist store is a 9-item embed with 5 sold out and still carries the last tour's branding. No catalog vinyl, no bundles, no SMS drop list." },
  { id: "social", n: "05", t: "TikTok leads the lane, YouTube sleeps", b: "2.1M median TikTok views, the highest of nine peers, and 18.3% engagement. But 18 of the last 24 months had no YouTube upload, zero Shorts, an archived Instagram grid and a deactivated X account." },
  { id: "fans", n: "06", t: "The fans love him and doubt the dates", b: "6,600 comments: 3% genuinely critical. The trust gap is live: \"scared to buy a ticket you might cancel again\" and \"only 7 states\". His most-commented format is him talking, which he almost never does." },
  { id: "funnel", n: "07", t: "The data is scattered and dirty", b: "Five different sign-up doors, none of which records the fan's city. Four Meta pixels, two GA4 properties, a Google Ads conversion firing on every page view, and a broken privacy policy link on a page collecting SMS consent." },
  { id: "lateral", n: "08", t: "Nothing outside music, yet", b: "No endorsement, no acting credit, no doc. He already directs his own videos and Mainstay Films exists. The lateral lane is real, but it runs through owned film and endemic partners first, while the Georgia cases are open." },
  { id: "plan", n: "09", t: "The path forward", b: "Stabilize, own the fan, then go lateral. A 90-day front-office build, a 12-month plan with a deluxe, a YouTube engine, an owned fan stack, an international test and a Mainstay Films doc shot on this tour." },
];

/* -------------------------------------------------------------------------- */
/* 02 Streaming                                                                */
/* -------------------------------------------------------------------------- */

export const STREAM_STATS = [
  { v: "6.79M", l: "Spotify monthly listeners (Oct 26, 2026)" },
  { v: "12.1M", l: "Peak monthly listeners (Sept 1, 2020)" },
  { v: "3.82M", l: "Spotify streams per day across the catalog" },
  { v: "107", l: "Hot 100 entries, none in the top 10" },
];

/** Monthly Spotify listeners in millions, Chartmetric despiked monthly points. */
export const LISTENERS: [string, number][] = [
  ["2019-01", 0.11], ["2019-04", 0.11], ["2019-07", 0.18], ["2019-10", 0.46], ["2019-11", 1.11], ["2019-12", 2.65],
  ["2020-01", 3.34], ["2020-02", 3.61], ["2020-03", 4.0], ["2020-04", 5.82], ["2020-05", 5.84], ["2020-06", 5.09], ["2020-07", 6.55], ["2020-08", 11.56], ["2020-09", 10.95], ["2020-10", 9.45], ["2020-11", 8.65], ["2020-12", 7.28],
  ["2021-01", 6.58], ["2021-02", 6.21], ["2021-03", 6.48], ["2021-04", 9.43], ["2021-05", 8.07], ["2021-06", 8.17], ["2021-07", 6.8], ["2021-08", 6.48], ["2021-09", 7.5], ["2021-10", 6.47], ["2021-11", 6.09], ["2021-12", 7.14],
  ["2022-01", 7.83], ["2022-02", 8.48], ["2022-03", 7.45], ["2022-04", 6.5], ["2022-05", 5.99], ["2022-06", 5.85], ["2022-07", 5.6], ["2022-08", 7.15], ["2022-09", 8.36], ["2022-10", 6.65], ["2022-11", 6.38], ["2022-12", 6.99],
  ["2023-01", 6.85], ["2023-02", 6.78], ["2023-03", 6.36], ["2023-04", 7.73], ["2023-05", 7.53], ["2023-06", 6.96], ["2023-07", 6.43], ["2023-08", 6.36], ["2023-09", 7.6], ["2023-10", 9.52], ["2023-11", 8.94], ["2023-12", 9.16],
  ["2024-01", 8.87], ["2024-02", 8.62], ["2024-03", 8.4], ["2024-04", 7.71], ["2024-05", 6.81], ["2024-06", 6.48], ["2024-07", 6.22], ["2024-08", 6.27], ["2024-09", 6.27], ["2024-10", 7.28], ["2024-11", 8.08], ["2024-12", 7.56],
  ["2025-01", 7.58], ["2025-02", 7.46], ["2025-03", 6.8], ["2025-04", 6.91], ["2025-05", 6.99], ["2025-06", 6.52], ["2025-07", 6.32], ["2025-08", 6.2], ["2025-09", 6.22], ["2025-10", 6.3], ["2025-11", 7.35], ["2025-12", 7.33],
  ["2026-01", 7.39], ["2026-02", 7.56], ["2026-03", 7.09], ["2026-04", 6.78], ["2026-05", 6.79], ["2026-06", 6.38], ["2026-07", 6.69], ["2026-08", 6.79], ["2026-09", 7.36], ["2026-10", 6.89],
];

export const RELEASE_MARKS = [
  { d: "2019-11", t: "Ghetto Gospel" },
  { d: "2020-04", t: "Pray 4 Love" },
  { d: "2021-03", t: "SoulFly" },
  { d: "2022-08", t: "Beautiful Mind" },
  { d: "2023-09", t: "Nostalgia" },
  { d: "2024-10", t: "Last Lap" },
  { d: "2026-08", t: "Don't Look Down" },
];

export const ALBUMS = [
  { t: "Ghetto Gospel", y: "Nov 2019", peak: 10, fw: 20, streams: 901 },
  { t: "Pray 4 Love", y: "Apr 2020", peak: 2, fw: 72, streams: 1011 },
  { t: "SoulFly", y: "Mar 2021", peak: 1, fw: 130, streams: 1169 },
  { t: "Beautiful Mind", y: "Aug 2022", peak: 1, fw: 115, streams: 867 },
  { t: "Nostalgia", y: "Sep 2023", peak: 1, fw: 137, streams: 1105 },
  { t: "Last Lap", y: "Oct 2024", peak: 2, fw: 127, streams: 597 },
  { t: "Don't Look Down", y: "Aug 2026", peak: 1, fw: 99, streams: 126 },
];

export const LIFT = [
  { t: "Nostalgia", v: 2.75, p: "+37%" },
  { t: "Last Lap", v: 1.67, p: "+25%" },
  { t: "Don't Look Down", v: 0.7, p: "+10%" },
];

export const CATALOG_SPLIT = { catalog: 72.8, early: 36.3, recent: 27.2 };

export const TOP_TRACKS = [
  { t: "Heart On Ice", y: 2019, total: 399.3, daily: 69.6, tt: 372627 },
  { t: "Rags2Riches 2 (feat. Lil Baby)", y: 2020, total: 282.3, daily: 36.9, tt: 2211822 },
  { t: "Street Runner", y: 2021, total: 276.3, daily: 113.7, tt: 314200 },
  { t: "By Your Side", y: 2021, total: 218.6, daily: 46.7, tt: 135108 },
  { t: "Tombstone", y: 2021, total: 204.8, daily: 51.9, tt: 108150 },
  { t: "Girl Of My Dreams", y: 2020, total: 187.3, daily: 37.4, tt: 195875 },
  { t: "Rags2Riches (feat. ATR Son Son)", y: 2020, total: 173.4, daily: 7.8, tt: 3687666 },
  { t: "Turks & Caicos (feat. 21 Savage)", y: 2023, total: 170.7, daily: 69.4, tt: 240946 },
  { t: "Letter From Houston", y: 2020, total: 158.8, daily: 53.9, tt: 36492 },
  { t: "Richer (feat. Polo G)", y: 2021, total: 153.8, daily: 16.1, tt: 22936 },
  { t: "Great Gatsby", y: 2023, total: 151.2, daily: 64.7, tt: 775149 },
  { t: "25", y: 2024, total: 137.8, daily: 125.5, tt: 220905 },
];

export const NOW_PLAYING = [
  { t: "Dope Girl", y: "2026", daily: 133.4, isNew: true },
  { t: "25", y: "2024", daily: 125.5, isNew: false },
  { t: "Street Runner", y: "2021", daily: 113.7, isNew: false },
  { t: "Piece Of Your Love", y: "2026", daily: 100.2, isNew: true },
  { t: "Kiss Me Interlude", y: "2026", daily: 89.6, isNew: true },
  { t: "Hustle", y: "2026", daily: 75.7, isNew: true },
  { t: "Heart On Ice", y: "2019", daily: 69.6, isNew: false },
  { t: "Turks & Caicos", y: "2023", daily: 69.4, isNew: false },
];

/** Avg Spotify listeners, 2026 year to date vs 2024. Chartmetric. */
export const PEERS_CHANGE = [
  { n: "Fredo Bang", v: 142.0 },
  { n: "Kevin Gates", v: 54.1 },
  { n: "Rylo Rodriguez", v: 47.4 },
  { n: "NoCap", v: 38.3 },
  { n: "YoungBoy", v: 18.1 },
  { n: "Hunxho", v: 17.0 },
  { n: "Rod Wave", v: -5.0, me: true },
  { n: "Lil Baby", v: -5.0 },
  { n: "Lil Durk", v: -14.8 },
  { n: "Yung Bleu", v: -16.3 },
  { n: "Lil Tjay", v: -20.9 },
  { n: "Toosii", v: -23.0 },
  { n: "Polo G", v: -27.6 },
];

export const CITIES = [
  { c: "Lagos", v: 250873 },
  { c: "Chicago", v: 178413 },
  { c: "Atlanta", v: 170665 },
  { c: "Dallas", v: 166148 },
  { c: "Charlotte", v: 148666 },
];

export const STREAM_FINDINGS = [
  { k: "The ratio", t: "11.05M followers, 6.79M listeners", b: "A followers-to-listeners ratio of 0.62 is the lowest of the 13 artists compared; peers run 0.96 to 3.32. Roughly 4M people follow him and do not play him in a given month. That is the cheapest audience in music to win back." },
  { k: "The lane", t: "His generation fell further", b: "The melodic pain-music class of 2019 to 2021 shrank harder than he did: Polo G -28%, Toosii -23%, Lil Tjay -21%. Rod is -5%. Meanwhile Southern street acts grew: Kevin Gates +54%, Rylo +47%, Fredo Bang +142%. His cities match that lane and he is not sharing in its growth." },
  { k: "Singles", t: "Between albums, nothing stuck", b: "The 2025 singles average about 20.7M lifetime Spotify streams each. Fight The Feeling from 2023 has 135.5M. Sinners earned a Grammy nomination and does 9.4K streams a day." },
  { k: "The sleeper", t: "Rags2Riches is a TikTok giant", b: "3.69M TikTok videos use Rags2Riches, more than any other song he has, yet it does 7.8K Spotify streams a day. The conversion from sound to stream is broken on the song culture uses most." },
  { k: "Pandora", t: "Stronger off Spotify than on it", b: "No. 169 on Pandora (2.27M listeners over 28 days) against No. 2,160 on Spotify. Apple Music is pushing Dope Girl to No. 1 on Street Gospel in 38 storefronts. Radio-style listening is a strength nobody is working." },
  { k: "Abroad", t: "Lagos is the No. 1 city", b: "Lagos tops his exact Spotify city list (251K), as it does for 8 of 13 peers. Chartmetric estimates the UK fell from about 625K listeners to 224K in two years. About 70% of listeners are in the US and there has been one international show ever (Toronto, 2023)." },
];

/* -------------------------------------------------------------------------- */
/* 03 Touring                                                                  */
/* -------------------------------------------------------------------------- */

export const TOUR_STATS = [
  { v: "$98.7M", l: "Career gross, 833,670 tickets (Pollstar, Sept 2025)" },
  { v: "$1.39M", l: "Average gross per show" },
  { v: "$2.56M", l: "Best reported night: Capital One Arena, Nov 25, 2024" },
  { v: "34", l: "Don't Look Down Tour dates, 9 second nights added" },
];

export const TOURS = [
  { t: "SoulFly Tour", y: "2021", shows: "36", tier: "Theaters, amphitheaters", promo: "Rolling Loud + Live Nation", gross: "Not reported", note: "First promoter-led national run" },
  { t: "Beautiful Mind Tour", y: "2022", shows: "25", tier: "Arenas", promo: "AG Entertainment + Mammoth", gross: "Not reported", note: "First arena run. Crowd Control ran the Meta campaigns for St. Louis, Oakland, Cleveland and Charlotte." },
  { t: "Nostalgia Tour", y: "2023", shows: "35", tier: "Arenas", promo: "Grizzly Touring", gross: "$26.1M on 18 reported shows", note: "13 of 18 reported shows sold out; $1.45M per reported show" },
  { t: "Last Lap Tour", y: "2024 to 2025", shows: "26 to 28 of 35", tier: "Arenas", promo: "Grizzly Touring", gross: "$29.9M earned against a $40.25M guarantee", note: "Last 13 dates cancelled Jan 2025; Nashville about an hour before doors" },
  { t: "Intro to the Redemption Experience", y: "Aug 2025", shows: "1", tier: "Arena, Tampa", promo: "Self-promoted", gross: "Not reported", note: "19,000+ sold out, 360 stage" },
  { t: "The Redemption Experience", y: "Dec 2025 to Jan 2026", shows: "11", tier: "Arenas, 4 doubles", promo: "Mainstay Touring", gross: "Not reported", note: "Sold out every date per the promoter" },
  { t: "Don't Look Down Tour", y: "Sep to Nov 2026", shows: "34", tier: "Arenas incl. Intuit Dome, Chase Center, Barclays x2", promo: "Mainstay Touring", gross: "In progress, est. $50M to $68M", note: "No cancellations through Oct 28; ends in Atlanta Nov 18 to 19" },
];

export const TOUR_FINDINGS = [
  { t: "The model changed, and so did the risk", b: "Under Grizzly he took a guarantee of about $1.15M a show. As his own promoter he keeps the margin, the ticketing and the VIP upside, and he carries production, insurance, marketing and cancellation risk directly. A no-show now costs him, not a promoter." },
  { t: "Demand is not the problem", b: "Nine markets doubled before the tour started: Philadelphia, Houston, Dallas, Detroit, Brooklyn, Chicago, Orlando, Sunrise and Atlanta. Secondary 'from' prices on TickPick ran $85 to $211 in October and November." },
  { t: "Nobody is publishing the numbers", b: "No Boxscore has been reported for any Mainstay show. The agent says about $2M a show. Unreported grosses cannot be used in a stadium conversation with YoungBoy, a sponsor deck or a festival negotiation." },
  { t: "The map is small", b: "One Canadian show ever, no UK, no Australia, no visible festival strategy since 2023. Fans notice: \"only 7 states tho!?!?!\" has 13,657 likes." },
  { t: "The live operation is already professional", b: "VIP through Please & Thank You, Crowdsync light-up wristbands, Spotify Reserved and a Live Nation account-based presale. The show business has vendors and systems; what it lacks is reporting, routing beyond the US and a marketing plan that starts at announce." },
  { t: "Reliability is the brand", b: "Last Lap ended with a cancellation an hour before showtime, a $13M+ production he says was 'not built right', and a $27.2M suit. The 2026 run has been clean so far. Every on-time, full-length show is rebuilding the asset that matters most." },
];

/* -------------------------------------------------------------------------- */
/* 04 Business and team                                                        */
/* -------------------------------------------------------------------------- */

export const ORG = [
  { k: "Management", who: "Hit House Management (family) since Uncle Dee's death, Jul 2024", state: "gap", note: "No named head. Touring manager Beau Williams, operations Lorenzo Biddines, father Rodney \"Fatz\" Green." },
  { k: "Booking", who: "Andrew Lieber, MAC Agency (since 2020)", state: "ok", note: "Also represents NBA YoungBoy and Kodak Black. Champions the self-promotion model." },
  { k: "Label", who: "Alamo Records (Todd Moscowitz), Sony majority since 2021", state: "ok", note: "Contract term not public. Alamo brought the Sinners placement." },
  { k: "Publishing", who: "Sony Music Publishing (since 2020)", state: "ok", note: "Mainstay now also signs co-publishing (Kallie Rock, Aug 2026)." },
  { k: "Promoter", who: "Mainstay Touring (since Aug 2025)", state: "ok", note: "Rod calls it his best investment. Says it promoted Ye's two SoFi shows in Apr 2026." },
  { k: "Film", who: "Mainstay Films", state: "ok", note: "Made the Don't Look Down trailer; partnered with a producer named Brett." },
  { k: "Brand partnerships", who: "Nobody", state: "gap", note: "Zero endorsements found, 2019 to 2026." },
  { k: "Publicist and crisis", who: "Not public", state: "gap", note: "Two 2025 arrests handled by attorney statements only." },
  { k: "Business management", who: "Not public", state: "gap", note: "Grizzly alleges advances went to jets and second homes (allegation)." },
  { k: "Fan data and D2C", who: "Split: Sony store, Mainstay store, Klaviyo, Laylo, Discord", state: "gap", note: "No single owner of the customer file." },
];

export const RISKS = [
  { r: "Milton, GA case (Apr 2025 incident)", s: "High", b: "Not-guilty plea (Aug 2026). One August report, not yet confirmed against court records, says the aggravated assault and firearm counts were not presented to the grand jury, leaving criminal damage, reckless conduct, evidence tampering and false-statement counts. Prosecutors moved to revoke his $50K bond; the outcome of the Sept 28 hearing was not publicly reported, and he kept touring." },
  { r: "Atlanta arrest (Nov 7, 2025)", s: "High", b: "Firearm and drug counts, released on $8K bond, not indicted as of June 2026. The tour closes in Atlanta, Nov 18 to 19." },
  { r: "Grizzly Touring suit", s: "High", b: "$27.2M claim in federal court (M.D. Fla. 8:25-cv-02645). He countersued, alleging a $1.8M kickback to a former agent. Grizzly also claims exclusivity over future tours, which matters for any concert film or tour sponsor." },
  { r: "Key person and health", s: "Medium", b: "A hiatus announcement in Jan 2025, a foot and ankle injury cited for cancellations, and a public history with depression. Everything runs through one person." },
  { r: "Self-promotion exposure", s: "Medium", b: "Production, insurance and cancellation risk now sit with Mainstay. One bad night costs real money." },
  { r: "Brand safety", s: "Medium", b: "Blue-chip CPG, national QSR, auto, banks and family brands will say no until the Georgia cases resolve. Culture-native and endemic partners will listen." },
  { r: "Smaller matters", s: "Low", b: "A copyright suit over the Last Lap cover (Dec 2025) and the Boosie sampling dispute, which resurfaced on X on Oct 26 to 27." },
];

export const MONEY = [
  { k: "Touring", v: "60 to 75%", b: "Self-promoted arenas; 2026 run estimated $50M to $68M gross." },
  { k: "Recorded music", v: "Large, label-split", b: "3.82M Spotify streams a day plus YouTube's ~97M monthly views." },
  { k: "Merch", v: "$14M claimed", b: "Rod's own figure, unaudited, period unclear. Up from $200K." },
  { k: "Publishing", v: "Sony", b: "Co-publishing through Mainstay starting." },
  { k: "Brand", v: "$0", b: "The whitespace." },
];

/* -------------------------------------------------------------------------- */
/* 05 Merch and D2C                                                            */
/* -------------------------------------------------------------------------- */

export const MERCH = [
  { k: "Music store", who: "Sony-run Shopify (handle rod-wave-sony)", items: "6", b: "Don't Look Down CDs and vinyl only. Every signed variant sold out. No catalog vinyl: no Heart On Ice era, no SoulFly, no Nostalgia." },
  { k: "Merch store", who: "Mainstay-run embed", items: "9", b: "Apparel at $40 to $120, 5 of 9 sold out with no restock mid-tour, still branded for the last tour. No product pages that search can find." },
  { k: "Hit House store", who: "Family label", items: "4", b: "All Nostalgia 2023 merch." },
  { k: "Tour merch online", who: "None", items: "0", b: "No city-dated tees, no bundles with tickets, and a fan report of tour merch unshipped after 14 days." },
];

export const MERCH_MATH = {
  attendees: "about 450,000 to 510,000",
  perHead: "$15 to $25",
  range: "$7M to $13M",
  note: "Estimate: 34 shows at roughly 13,000 to 15,000 tickets, times a typical arena rap per-head. Every sold-out size and design is money left on the table at that scale.",
};

/* -------------------------------------------------------------------------- */
/* 06 Social                                                                   */
/* -------------------------------------------------------------------------- */

export const CHANNELS = [
  { p: "TikTok", h: "@rodwave", size: "6.64M", trend: "+12.5% in 12 months", state: "Active, his strongest channel" },
  { p: "YouTube", h: "Rod Wave", size: "7.37M subs, 8.28B views", trend: "+6.3% subs, +1.16B views", state: "Uploads only on release days; 2 Shorts ever" },
  { p: "Instagram", h: "@rodwave", size: "7.81M", trend: "-1.3% (-104K)", state: "Grid archived, 4 posts visible" },
  { p: "Snapchat", h: "@therealrodwave", size: "1.0M", trend: "n/a", state: "Profile still promotes Last Lap (2024)" },
  { p: "Facebook", h: "/rodwave", size: "884K", trend: "n/a", state: "Runs the current Meta ads" },
  { p: "X", h: "@Rod_Wave1", size: "Gone", trend: "n/a", state: "Deactivated Jan 2025 at the tour cancellation" },
];

export const TT_PEERS = [
  { n: "Rod Wave", v: 2.1, me: true },
  { n: "NBA YoungBoy", v: 1.45 },
  { n: "Lil Durk", v: 0.667 },
  { n: "Lil Tjay", v: 0.587 },
  { n: "Toosii", v: 0.529 },
  { n: "Hunxho", v: 0.464 },
  { n: "Polo G", v: 0.443 },
  { n: "Kevin Gates", v: 0.27 },
  { n: "Rylo Rodriguez", v: 0.093 },
];

export const CADENCE_MONTHS = ["N24", "D", "J25", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D", "J26", "F", "M", "A", "M", "J", "J", "A", "S", "O"];
export const CADENCE_TT = [5, 0, 2, 0, 0, 2, 1, 5, 8, 12, 0, 13, 5, 8, 4, 2, 0, 3, 0, 8, 11, 8, 3, 5];
export const CADENCE_YT = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 20, 0, 0];

export const FORMATS = [
  { k: "Release promos", v: 2.3, n: 10 },
  { k: "Tour and live", v: 2.1, n: 7 },
  { k: "Personality and cameos", v: 1.58, n: 2 },
  { k: "Photo slideshows", v: 1.3, n: 15 },
  { k: "Unlabeled clips", v: 1.25, n: 20 },
  { k: "Official-sound snippets", v: 0.84, n: 4 },
];

export const SOCIAL_FINDINGS = [
  { t: "Captions do no work", b: "53% of captions are emoji or hashtags only, the median is 21 characters, none ask a question and 24% carry any call to action. Collaborators are almost never tagged." },
  { t: "Release-shaped, then silent", b: "4.8 TikToks a month on average, with 6 empty months in 24 and silences of 84, 48 and 47 days. Only 3 TikToks in September 2026, the month after a No. 1 album." },
  { t: "YouTube is a filing cabinet", b: "20 of 23 uploads in the last 12 months went up on Aug 28, 2026. Music videos earn a 10.4M median, official audios 1.6M. Leavin (28.5M) is 14.6x the channel median and has no vertical cutdowns. Kevin Gates posted 15 Shorts in 90 days; Rod has posted 2 ever." },
  { t: "Fan pages are doing the job", b: "@rodwaveroom (600.9K followers, 23.7M likes) and @rod_wave_unofficial (380K) post interviews, acapellas, behind-the-scenes and unreleased snippets. Fan lyric uploads on YouTube pull 23.2M views (\"25\") and a leaked song 10.1M." },
  { t: "The sound engine is real", b: "Rags2Riches 3.69M videos, Rags2Riches 2 2.21M, Believe Me 1.55M, Great Gatsby 775K (+262K in September 2026 alone). Dope Girl went from 6.5K to 295K videos in two months." },
  { t: "The R&B blend lane is open", b: "A 9K-follower DJ account named rodwavehairline uploaded a Miguel x Brent Faiyaz blend in May 2026. It became a 460K-video sound and helped push Miguel's Damned from about 23K to 924K Spotify streams a day. Rod's name rode the trend; no Rod vocal was in it, and none of the upside reached him." },
];

/* -------------------------------------------------------------------------- */
/* 07 Teardowns (thumbs in /images/rod-wave/thumbs)                            */
/* -------------------------------------------------------------------------- */

export const PATTERNS = [
  { t: "His face is the dividing line", b: "All five of his top TikToks show Rod (2.4x to 6.8x his 1.35M median). All three bottom performers have no live Rod: a screening poster (0.35x), a spinning vinyl test pressing (0.33x), a still waveform with lyrics (0.19x)." },
  { t: "Unreleased song plus a near date wins", b: "\"August 28th\": 9.2M views, 85.5K saves, 101K shares. \"Hustler.. This Friday\": 111K saves, his most saved post. The waveform post used an unreleased verse with no Rod and got 3K saves." },
  { t: "Production value does not predict reach", b: "A cinematic studio take did 9.2M. A fixed phone in the vocal booth did 5.6M. Every winner is one take or 0 to 4 cuts." },
  { t: "Talking is his rarest and most-commented format", b: "The Oct 23 rumor clip drew 10.9K comments, led by \"Now he just so talkative\" (78K likes)." },
  { t: "Every peer's best video is a selfie talk", b: "Toosii 16.6x his median, Kevin Gates 14.4x, Lil Tjay 8.9x, Hunxho 7.8x, YoungBoy 3.8x. Four have no music; three are 15 to 23 seconds. Rod's 59-second talk clip had no text hook." },
  { t: "The two biggest assets are stuck on one platform", b: "The Don't Look Down trailer (27.7M Instagram plays) is horizontal and 110 seconds. Leavin (28.5M YouTube views) has no vertical cutdowns. The trailer holds at least three stand-alone vertical moments." },
];

/* -------------------------------------------------------------------------- */
/* 08 Fans                                                                     */
/* -------------------------------------------------------------------------- */

export const FAN_STATS = [
  { v: "6,600", l: "Comments read across TikTok, YouTube and Instagram" },
  { v: "41%", l: "Clearly positive in a hand-coded random sample of 200" },
  { v: "3%", l: "Critical of Rod or his music in the same sample" },
  { v: "3.5%", l: "Disappointed their city was skipped" },
];

export const THEMES = [
  { k: "Praise and GOAT talk", share: 20.0, likes: 63747 },
  { k: "Love and affection", share: 17.6, likes: 130164 },
  { k: "When does it drop", share: 8.0, likes: 88977 },
  { k: "Tour and city requests", share: 7.5, likes: 120017 },
  { k: "His personality, his voice", share: 5.3, likes: 202080 },
  { k: "Faith and prayer", share: 4.5, likes: 45039 },
  { k: "Specific songs", share: 3.1, likes: 14020 },
  { k: "Family and crew", share: 2.0, likes: 76515 },
  { k: "Old Rod, longtime fans", share: 1.8, likes: 47018 },
  { k: "Mental health support", share: 1.7, likes: 26379 },
  { k: "Affectionate body jokes", share: 0.9, likes: 140069 },
  { k: "Lateness and cancellations", share: 0.7, likes: 1873 },
  { k: "Legal trouble", share: 0.4, likes: 1186 },
];

export const QUOTES = [
  { q: "Now he just so talkative", m: "TikTok, 78,066 likes" },
  { q: "i love you my big cheese ball", m: "TikTok, 58,569 likes" },
  { q: "Real Rod fans means this gon drop in October", m: "TikTok, 21,043 likes" },
  { q: "only 7 states tho!?!?!", m: "TikTok, 13,657 likes" },
  { q: "Bro been singing bout the same exact sht for over 7 years now", m: "TikTok, 6,281 likes" },
  { q: "Who's else been a ROD WAVE fan for over 8 + years ????", m: "YouTube, 4,800 likes" },
  { q: "Can you perform 2019 in atl for me thank you", m: "TikTok, 4,252 likes" },
  { q: "You helped me fight depression Rod", m: "YouTube, 1,000 likes" },
  { q: "i'm scared to buy a ticket you might cancel again", m: "Instagram" },
  { q: "Yo can you come back to Houston but come early and leave late this time", m: "TikTok" },
  { q: "Now he is indie he needs to be seriously protected", m: "YouTube" },
  { q: "Only artist I know that apologized to the fans in a song", m: "YouTube" },
];

export const QUESTIONS = [
  { k: "When does it drop", v: 77 },
  { k: "Is my city on the tour", v: 46 },
  { k: "Is he okay", v: 33 },
  { k: "What's the song called", v: 29 },
  { k: "Will he do the old songs", v: 29 },
];

/* -------------------------------------------------------------------------- */
/* 09 Funnel, paid, demand                                                     */
/* -------------------------------------------------------------------------- */

export const DOORS = [
  { k: "official-rodwave.com", b: "The live site (rodwave.com does not resolve). Tour list is current and drops past dates. Hosts the store embed, VIP links and sign-ups.", state: "ok" },
  { k: "Klaviyo email form", b: "Email only. Does not ask for ZIP or city.", state: "warn" },
  { k: "Klaviyo SMS popup", b: "Collects phone and SMS consent while the Privacy Policy link returns page not found.", state: "bad" },
  { k: "Laylo", b: "Phone only, not linked from the main bios.", state: "warn" },
  { k: "Discord", b: "12,147 members. No data capture tied to the CRM.", state: "warn" },
  { k: "THE WALL and Rod Wave Radio", b: "Fan voice notes feed a station that had 0 listeners at check time. No phone or email required to post.", state: "warn" },
  { k: "Setlist vote", b: "Fans search for it by name. Anonymous: no phone, no email.", state: "warn" },
  { k: "DLD Artist Presale form", b: "The one form that captured ZIP and show picks. Dead code that throws an error on every page load.", state: "bad" },
];

export const TRACKING = [
  "4 Meta pixels and 2 GA4 properties on one site, 6.2 MB across 253 requests",
  "A $55 Google Ads conversion fires on every page view",
  "TikTok fires purchase events with placeholder values; Spotify fires a purchase on load",
  "The X tag is missing its base code",
  "A public /test page, a /thevault page loaded from a third-party host, and mobile zoom disabled",
];

export const ADS = {
  count: 24,
  window: "Oct 12 to 22, 2026",
  markets: 6,
  b: "All 24 active Meta ads come from the Rod Wave page, launched six to seven weeks after the album, for six back-half markets that already had second shows. One copy template across 13 videos, 6 images and 5 dynamic ads. Every click goes straight to Ticketmaster or SeatGeek. No album, merch or sign-up ads, and no promoter ads surfaced.",
};

/** Google Trends, US, "Rod Wave", monthly (peak Nov 2023 = 100). */
export const TRENDS: [string, number][] = [
  ["2019-11", 33], ["2020-04", 40], ["2020-08", 33], ["2021-03", 43], ["2021-12", 49], ["2022-05", 39], ["2022-08", 40], ["2022-11", 57],
  ["2023-01", 26], ["2023-05", 19], ["2023-09", 90], ["2023-10", 86], ["2023-11", 100], ["2023-12", 58], ["2024-03", 20], ["2024-06", 21],
  ["2024-09", 58], ["2024-10", 93], ["2024-11", 80], ["2024-12", 66], ["2025-01", 57], ["2025-03", 26], ["2025-06", 20], ["2025-09", 25],
  ["2025-10", 49], ["2025-12", 49], ["2026-02", 22], ["2026-04", 30], ["2026-06", 34], ["2026-08", 51], ["2026-09", 67], ["2026-10", 66],
];

export const STATES = [
  { k: "Mississippi", v: 100 },
  { k: "Louisiana", v: 90 },
  { k: "Alabama", v: 71 },
  { k: "South Carolina", v: 68 },
  { k: "New York", v: 14 },
  { k: "California", v: 12 },
];

export const WIKI = [
  { n: "Toosii", v: 47.8 },
  { n: "YoungBoy", v: -3.9 },
  { n: "Lil Durk", v: -27.1 },
  { n: "Polo G", v: -42.0 },
  { n: "Rod Wave", v: -49.6, me: true },
];

export const SEARCH_NOTE = "23 of 394 Google autocomplete suggestions and 16 of 398 YouTube suggestions are legal topics. A re-uploaded bodycam video drew 259K views in about nine days. Search is a narrative surface, and right now the court calendar writes part of it.";

/* -------------------------------------------------------------------------- */
/* 10 Beyond music                                                             */
/* -------------------------------------------------------------------------- */

export const LATERAL_NOW = [
  { k: "Endorsements", v: "None", b: "No paid endorsement, ambassador deal or national campaign found 2019 to 2026. Fashion Nova (2.84x), NBA (2.26x) and Beats (1.89x) are audience affinities only." },
  { k: "Platform and endemic", v: "Small", b: "Audiomack's first #UPNow artist (2020), an Amazon Music Original (2020), a Street Runner arcade game with Krool Toys (2021), the Madden 22 soundtrack (2021), and the lead single for Sinners (2025), Grammy-nominated." },
  { k: "Sports", v: "Emerging", b: "\"Rod Wave Elite\" is an Overtime Elite basketball team with a 59-item merch line on Overtime's shop (his role and terms are not public). Mainstay announced a sports agency on Club Shay Shay." },
  { k: "Film and TV", v: "Behind camera", b: "No acting credits. He co-directed Street Runner and Alone and directed Piece Of Your Love himself (June 2026). Mainstay Films made the Don't Look Down trailer." },
  { k: "On camera", v: "Opening up", b: "Breakfast Club (2021), Billboard on depression (2023) and Mainstay (2025), and a two-part Club Shay Shay (Aug 2026). In 2022 he said \"I hate attention\". In 2026 his talking clips are his most-commented content." },
  { k: "Giving", v: "Unpackaged", b: "$25K of free gas in St. Pete (2022), an Easter giveaway, a second gas giveaway (2023), turkeys in Atlanta's West End (2025). No foundation." },
];

export const COMPS = [
  { n: "Jelly Roll", b: "The closest story: pain, faith, recovery, weight. Hulu doc (2023), Senate testimony (2024), a Zevia campaign built on body humor (2025), a guest arc on CBS's Fire Country (2025)." },
  { n: "NBA YoungBoy", b: "His own company made a concert documentary that opened in 583 theaters in April 2026, then went to Prime Video in July." },
  { n: "Lil Baby", b: "Untrapped premiered at Tribeca, then Prime Video (2022)." },
  { n: "Lil Durk", b: "His Alamo labelmate took a guest role on Power Book II: Ghost while under a legal cloud." },
  { n: "50 Cent", b: "G-Unit Film and TV, Starz overall deal reported up to $150M. The long-run ceiling for a Mainstay Films." },
];

export const BRAND_MAP = [
  { k: "Overtime / Rod Wave Elite", when: "Now", b: "Formalize as equity or licensing plus a content series." },
  { k: "Fashion Nova Men", when: "Now", b: "His strongest affinity at 2.84x; size-inclusive menswear." },
  { k: "Fanatics or an NBA team collab", when: "Now", b: "2.26x NBA affinity; Magic, Hawks or Pelicans." },
  { k: "EA Madden, College Football, 2K", when: "Now", b: "Already on Madden 22; built his own arcade game." },
  { k: "Streaming platform originals", when: "Now", b: "Amazon and Audiomack history; music-endemic and low risk." },
  { k: "Clinical mental-health partner", when: "Now", b: "Cause-led, Logic x BetterHelp structure, ideally a Black-focused provider." },
  { k: "St. Pete and Tampa Bay partners", when: "Now", b: "Rays, Bucs community, the Sunoco giveaways, Lakewood High." },
  { k: "Big-and-tall and comfort apparel", when: "Now", b: "The fans' affectionate body humor is an asset when he owns it." },
  { k: "Prepaid telecom", when: "Now to later", b: "Value-tier, Southern audience; Boost just signed Mike Tyson." },
  { k: "Beats", when: "Later", b: "1.89x affinity; music as therapy, listened to alone." },
  { k: "Challenger beverage", when: "Later", b: "The Jelly Roll x Zevia template." },
  { k: "Popeyes, Wingstop", when: "Later", b: "Deep South, Louisiana roots; Megan Thee Stallion and Migos precedent." },
  { k: "Sports betting", when: "No", b: "Florida and Georgia legality plus open cases. Not worth it." },
];

export const LATERAL_PLAN = [
  { p: "Phase 1", w: "Now, while the Georgia cases are open", items: ["Shoot a Mainstay Films documentary on this tour. The footage does not come back.", "Cut a Don't Look Down concert film as the faster, lower-risk asset.", "Formalize Rod Wave Elite with Overtime; pursue a Madden or 2K placement and a streaming-platform original.", "Stand up a Mainstay Foundation in St. Pete so brands can fund the giving without endorsing a person.", "A cause-led mental-health partnership with a clinical platform."] },
  { p: "Phase 2", w: "After resolution or a clean year", items: ["Culture-native and challenger brands: Fashion Nova Men, Beats, a challenger beverage, prepaid telecom, a Fanatics or team collab.", "One scripted guest arc chosen for authenticity, not size: the Durk and Jelly Roll template.", "Directing and executive-producer credits before any lead role."] },
  { p: "Phase 3", w: "With a clean record period", items: ["National QSR and consumer brands.", "A first-look or overall deal for Mainstay Films."] },
];

export const REPRESENTATION = [
  { k: "Multi-platform agency", b: "A big-three agency with a hip-hop crossover desk covering unscripted, scripted, brand and speaking. Ask for a doc packager, a brand agent with experience placing talent with legal exposure, and a sports-marketing desk for the agency launch." },
  { k: "Brand partnerships specialist", b: "A culture-specialist shop that can sell to Fashion Nova, Fanatics, Overtime and challenger brands and structure equity." },
  { k: "Entertainment attorney", b: "Morals clauses, and the Grizzly exclusivity claim over future tours before any tour-linked sponsor or concert film is signed." },
  { k: "Crisis communications", b: "In place before the first brand call, not after the next headline." },
];

/* -------------------------------------------------------------------------- */
/* 11 Plan                                                                     */
/* -------------------------------------------------------------------------- */

export const PILLARS = [
  { n: "01", t: "Stabilize", b: "A front office around Mainstay: one calendar for releases, shows, court dates and press; a publicist and crisis plan; published Boxscores; a production and settlement review after Last Lap." },
  { n: "02", t: "Own the fan", b: "One phone-first sign-up behind every bio, tagged by city. Setlist votes, THE WALL and presales all require a number. Merge the pixels, fix the privacy page, retire the page-view conversion." },
  { n: "03", t: "Feed the engine", b: "A weekly cadence that does not depend on release day: Rod Talks, Shorts from every music video, city posts on show days, catalog moments, and a sanctioned fan-page network." },
  { n: "04", t: "Widen the map", b: "A UK and Canada test, a festival plan, and the YoungBoy stadium conversation backed by real grosses." },
  { n: "05", t: "Go lateral", b: "Mainstay Films doc and concert film now, endemic partners now, representation outside music, brands in sequence with the court calendar." },
];

export const PHASES = [
  { w: "Days 1 to 30", t: "Front office", items: ["Map every contract, account, pixel and login in one place", "Legal and press calendar through the Atlanta closing nights", "Restock and reprice the merch store for the last 11 dates", "Tour docs crew on the road for the final run", "Publish grosses for completed Mainstay shows"] },
  { w: "Days 31 to 90", t: "Owned fan stack", items: ["One sign-up door, phone first, city-tagged", "Pixel and tag cleanup; privacy and consent fixed", "Catalog vinyl and signed bundles with Sony", "Rod Talks pilot: 4 episodes", "Don't Look Down deluxe inside 60 to 90 days of release"] },
  { w: "Months 4 to 6", t: "Engine", items: ["Weekly YouTube: Shorts, lyric videos, tour diary", "Fan-page partnership with controlled snippets", "Catalog pushes on Rags2Riches, Street Runner, Heart On Ice and 25", "Features with the growing Southern acts", "Representation outside music signed"] },
  { w: "Months 7 to 12", t: "Expansion", items: ["UK and Canada test dates", "Festival offers for 2027", "Concert film release; doc in edit", "Phase 1 brand and Overtime deals", "2027 tour routed with the stadium question answered"] },
];

export const UPSIDE = [
  { k: "Win back followers who stopped listening", v: "+1.4M monthly listeners", b: "Raising the listener-to-follower ratio from 0.62 to 0.75. Owned fan data and a steady cadence are the levers." },
  { k: "Catalog", v: "+52M streams a year", b: "A 10% lift on the top 20 catalog songs. Rags2Riches alone has 3.69M TikTok videos and 7.8K streams a day." },
  { k: "Merch at the venue and online", v: "$7M to $13M a tour", b: "Estimated tour merch at full stock; online drops and catalog vinyl on top." },
  { k: "Brand and film, Phase 1", v: "Six to seven figures", b: "Endemic and cause deals in the low-to-mid six figures each; a documentary in the low-to-mid seven figures or a self-distributed theatrical run in the YoungBoy range. Directional estimates." },
  { k: "International and festivals", v: "New revenue", b: "Zero today outside one Toronto show in 2023." },
];

/* -------------------------------------------------------------------------- */
/* 12 Example creative                                                         */
/* -------------------------------------------------------------------------- */

export const CREATIVE = [
  { src: "st-pete.jpg", video: "st-pete.mp4", ratio: "16:9", t: "St. Pete", b: "Key art and opener for a Mainstay Films documentary shot on this tour: hometown, Uncle Dee, music as therapy, building Mainstay." },
  { src: "rod-talks.jpg", video: "rod-talks.mp4", ratio: "9:16", t: "Rod Talks", b: "A weekly vertical series built on the format fans comment on most. Him, a chair, one question." },
  { src: "atlanta.jpg", video: "atlanta.mp4", ratio: "9:16", t: "City card", b: "One post per show day naming the city, in the Don't Look Down world, with a fan-requested old song teased." },
  { src: "the-wall.jpg", ratio: "9:16", t: "The Wall, phone first", b: "The setlist vote and THE WALL behind one phone number, captured at the venue and tagged by city." },
  { src: "tour-tee.jpg", ratio: "4:5", t: "City-dated tour tee", b: "The merch the store does not have: a dated back print listing the doubled markets." },
];

/* -------------------------------------------------------------------------- */
/* Why CCD, next steps, sources                                                */
/* -------------------------------------------------------------------------- */

export const WHY = [
  { k: "We have run his tour before", b: "Crowd Control ran the Meta campaigns for the 2022 Beautiful Mind Tour: St. Louis, Oakland, Cleveland and Charlotte." },
  { k: "Live and touring", b: "Campaigns for Live Nation, AEG, Insomniac Events, Vibra Urbana, Brooklyn Mirage and Avant Gardner. TOUR CONTROL, our tour pacing and media-flight product, reads ticket counts across platforms and sets per-market spend." },
  { k: "Artists and brands", b: "Select clients: NBA, Golden State Warriors, Foot Locker, Monster Energy, Beats By Dre, Apple, Amazon, Warner Bros, Porsche, Edition Hotels, Malbon Golf and Polymarket." },
  { k: "The machine behind this page", b: "Chartmetric, social scraping, 6,600 comments, video AI teardowns and a funnel crawl in one pass. The same stack runs weekly once we are in." },
];

export const NEXT = {
  email: "geoff@crowdcontroldigital.com",
  steps: [
    "Walk through this audit with the management team",
    "Agree the operating model with Mainstay and the family",
    "Start the 30-day front-office build before the Atlanta closing nights",
  ],
};

export const SOURCES = [
  "Chartmetric API, artist 1009958: Spotify, YouTube, TikTok, Instagram, playlists, audience and where-people-listen, pulled Oct 28, 2026",
  "kworb.net Spotify totals and daily streams, Oct 26, 2026",
  "Billboard, Wikipedia discography, Rockum (Luminate) and RatingsGameMusic for chart peaks and first weeks",
  "Pollstar, Sept 25, 2025, The Redemption Experience case study; Billboard, Complex, Consequence and venue releases for tours",
  "Complex, Billboard, Rolling Stone, AJC, TMZ, Atlanta News First and Law360 for legal matters",
  "Apify and Tokscript pulls of TikTok, Instagram, YouTube and X; 6,600 comments; TwelveLabs Pegasus 1.6 video analysis",
  "Meta Ad Library (page 511456452398202), Google Trends, Google and YouTube autocomplete, Wikimedia pageviews, Lighthouse 12.2.1",
  "Revolt, Afrotech, Black Enterprise, Dancehall Mag, Club Shay Shay coverage and Hit House for team and company details",
];
