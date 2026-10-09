/**
 * DILLON FRANCIS: social media and content audit (Crowd Control Digital).
 * Every figure below was pulled October 9, 2026 from a scrape, API, ad library,
 * Lighthouse run, video AI query or fetched page. Sources are listed in SOURCES.
 * Sentiment figures are analytical estimates.
 */

export const IMG = "/images/dillon-francis";
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
 "kicker": "Prepared for Dillon Francis and team",
 "title": "DILLON FRANCIS",
 "line": "Social Media and Content Audit",
 "sub": "Artist, brand, social, peers, fans, video AI, funnel, a content direction and a social plan.",
 "body": "We measured everything public about Dillon Francis: 43 release covers since 2014, more than 800 of his own posts across Instagram, TikTok, YouTube and X, 800 posts from ten peer artists, 6,262 fan comments, 40 videos run through video AI, and every link a fan can tap. The short version: the funniest personality in dance music, an audience that still answers every time he is funny, and a fall release run that stopped giving them the joke.",
 "stats": [
  {
   "value": 81,
   "suffix": "%",
   "label": "drop in median Instagram reel plays since mid-August, 247,501 to 46,156"
  },
  {
   "value": 586107,
   "label": "median plays on his 14 skit and stunt posts, against 27,591 on the Fall release posts"
  },
  {
   "value": 0.004,
   "decimals": 3,
   "label": "TikTok plays per follower, 11th of the 11 artists benchmarked"
  }
 ],
 "date": "Audit date: October 9, 2026"
};

export const MARQUEE = [
 "Get Low",
 "Money Sucks, Friends Rule",
 "IDGAFOS",
 "DJ Hanzel",
 "Coming Over",
 "Say Less",
 "This Mixtape Is Fire",
 "Wut Wut",
 "Goodies",
 "Catchy Song",
 "Dillstradamus",
 "Bun Up The Dance",
 "Fall"
];

export const SUMMARY = {
 "intro": "Dillon Francis has the rarest asset in dance music: a sense of humor his audience will follow anywhere. Every number in this audit points the same way. When the post is a bit, reach shows up. When the post is a plain release clip, it doesn't. The direction is simple to say and specific to execute: put the songs back inside the jokes, give the jokes a recurring home, and build the links so the attention lands somewhere Dillon owns.",
 "items": [
  {
   "n": "01",
   "to": "social",
   "head": "The audience didn't leave. Reach did",
   "body": "Median Instagram reel plays fell from 247,501 (June 1 to August 15) to 46,156 (August 16 to October 8). TikTok organic fell from 8,456 to 2,995. Posting held at about 3 a week on each."
  },
  {
   "n": "02",
   "to": "video",
   "head": "The joke carries the song",
   "body": "His 14 skit and stunt posts earn a median 586,107 plays. The 7 Fall release posts earn 27,591. When the song is the punchline of a bit, the median is 528,118."
  },
  {
   "n": "03",
   "to": "peers",
   "head": "A big audience, the lowest reach per follower",
   "body": "5th of 11 artists on TikTok followers, 11th on plays per follower at 0.004. John Summit, FISHER and Dom Dolla run 0.32 to 0.37 on personality-led feeds."
  },
  {
   "n": "04",
   "to": "brand",
   "head": "A famous personality with no fixed look",
   "body": "43 covers since 2014 score 4.2 out of 10 for consistency. The name is set differently almost every time. The thread is a hand-drawn smiley that has never been made the mark."
  },
  {
   "n": "05",
   "to": "fans",
   "head": "Fans want the bits, and to hear back",
   "body": "98.5% of 6,262 fan comments with a clear tone are positive, and comedy is a fifth of the whole conversation. He replies to 1.2% of comments on Instagram and none on recent YouTube uploads."
  },
  {
   "n": "06",
   "to": "funnel",
   "head": "The links build other people's audiences",
   "body": "The bio smart link carries the label's pixels, the site, store and smart link fire three different Meta pixels, sign-up is SMS only, and all 16 Meta ads this year sell tickets. None promote Fall."
  }
 ]
};

export const ARTIST_INTRO = "Dillon Francis is a Los Angeles producer, DJ and comedian who helped take moombahton from Mad Decent blog culture to the Beatport number one, then built a decade of dance hits on Columbia, his own IDGAFOS imprint and Astralwerks. His Spotify catalog has passed 2.05 billion streams, but monthly listeners have roughly halved since January 2024, and the 2026 Monstercat x broke singles are being asked to reverse that while a new management team (The Shalizi Group with Canopy) settles in.";

export const TIMELINE = [
 {
  "y": "2012",
  "h": "Moombahton breakout",
  "b": "Discovered through Diplo and Mad Decent (\"Que Que\" with Maluca). Something, Something, Awesome. on OWSLA becomes the first moombahton release to top the Beatport releases chart in February 2012."
 },
 {
  "y": "2013",
  "h": "DJ Hanzel is born",
  "b": "Creates DJ Hanzel, a parody of the jaded German underground DJ, first through short social clips. Enters the DJ Mag Top 100 at number 73."
 },
 {
  "y": "2014",
  "h": "Get Low and a major label debut",
  "b": "\"Get Low\" with DJ Snake (February) becomes his biggest record, now 224.7M Spotify streams. Money Sucks, Friends Rule arrives on Columbia in October."
 },
 {
  "y": "2015",
  "h": "Peak Columbia run",
  "b": "This Mixtape Is Fire reaches number one on Billboard's Top Dance/Electronic Albums. \"Coming Over\" with Kygo (2016) is his second largest song at 163.9M streams."
 },
 {
  "y": "2017",
  "h": "IDGAFOS and genre swings",
  "b": "Launches his own label IDGAFOS with \"Say Less\" ft. G-Eazy, then releases Wut Wut (2018), a Spanish-language LP, \"Catchy Song\" for The Lego Movie 2, and the Magic Is Real mixtape (2019)."
 },
 {
  "y": "2021",
  "h": "Happy Machine to Astralwerks",
  "b": "Happy Machine (2021, IDGAFOS / Mad Decent), then a licensing run with Astralwerks that produces \"Goodies\", \"Don't Let Me Let Go\" with ILLENIUM and This Mixtape Is Fire TOO (December 2023)."
 },
 {
  "y": "2026",
  "h": "A new chapter",
  "b": "MSFR 10 year remix album, pop-punk side project Sorry My Love with Albert Hype (2025), singles on Monstercat x broke, the Dillstradamus co-headline tour with Flosstradamus, the 2026 EDM Awards Impact Award and a June 2026 move to The Shalizi Group with Canopy."
 }
];

export const LISTENERS = {
 "months": [
  "Jan 24",
  "Feb 24",
  "Mar 24",
  "Apr 24",
  "May 24",
  "Jun 24",
  "Jul 24",
  "Aug 24",
  "Sep 24",
  "Oct 24",
  "Nov 24",
  "Dec 24",
  "Jan 25",
  "Feb 25",
  "Mar 25",
  "Apr 25",
  "May 25",
  "Jun 25",
  "Jul 25",
  "Aug 25",
  "Sep 25",
  "Oct 25",
  "Nov 25",
  "Dec 25",
  "Jan 26",
  "Feb 26",
  "Mar 26",
  "Apr 26",
  "May 26",
  "Jun 26",
  "Jul 26",
  "Aug 26",
  "Sep 26",
  "Oct 26"
 ],
 "values": [
  4994460,
  4890737,
  4806194,
  5255356,
  4454356,
  4328577,
  4469934,
  4218011,
  4056771,
  3832551,
  3966434,
  3601379,
  3735965,
  3733377,
  3506804,
  3582073,
  3496513,
  3360464,
  3322933,
  3500349,
  3522241,
  3543427,
  3391688,
  3093525,
  2897028,
  2989399,
  2956220,
  2869777,
  2963670,
  2864962,
  2693652,
  2653177,
  2602481,
  2534853
 ],
 "marks": [
  {
   "i": 9,
   "l": "MSFR 10 Year"
  },
  {
   "i": 21,
   "l": "Bring The House Down"
  },
  {
   "i": 27,
   "l": "Make You Move"
  },
  {
   "i": 32,
   "l": "Cry Myself To Sleep"
  }
 ]
};

export const ARTIST_STATS = [
 {
  "v": "2.05B",
  "l": "Spotify streams across all credits (kworb, Oct 7 2026)"
 },
 {
  "v": "2.53M",
  "l": "Monthly listeners, down 49% from 4.99M in Jan 2024 (Chartmetric)"
 },
 {
  "v": "182.5K",
  "l": "Spotify streams per day, 27% from just three songs"
 },
 {
  "v": "3.25M",
  "l": "Instagram followers, plus 2.52M YouTube and 1.72M TikTok"
 }
];

export const CATALOG = [
 {
  "k": "Get Low (w DJ Snake)",
  "y": "2014",
  "v": 224.7
 },
 {
  "k": "Coming Over (w Kygo ft. James Hersey)",
  "y": "2016",
  "v": 163.9
 },
 {
  "k": "Say Less (ft. G-Eazy)",
  "y": "2017",
  "v": 63.2
 },
 {
  "k": "Anywhere (ft. Will Heard)",
  "y": "2016",
  "v": 51.9
 },
 {
  "k": "Goodies",
  "y": "2022",
  "v": 48.6
 },
 {
  "k": "Bun Up the Dance (w Skrillex)",
  "y": "2015",
  "v": 46.3
 },
 {
  "k": "Catchy Song (ft. T-Pain & That Girl Lay Lay)",
  "y": "2019",
  "v": 43.9
 },
 {
  "k": "Don't Let Me Let Go (w ILLENIUM & Evan Giia)",
  "y": "2022",
  "v": 41.4
 }
];

export const RECENT = [
 {
  "k": "B2U (w Marten Hørger, Jul 2025)",
  "v": 3.32
 },
 {
  "k": "Bring The House Down (DJ Snake x TRXGGX, Oct 2025)",
  "v": 1.99
 },
 {
  "k": "Make You Move (Apr 2026)",
  "v": 0.73
 },
 {
  "k": "What It Feels Like (w Daya, Feb 2026)",
  "v": 0.69
 },
 {
  "k": "RIDDEM (w Allenora & America Foster, May 2026)",
  "v": 0.27
 },
 {
  "k": "Cry Myself To Sleep (w Lizzy Land, Sep 2026)",
  "v": 0.19
 }
];

export const ARTIST_NOTES = {
 "catalog": "The catalog is doing the work. Get Low still pulls 25,966 streams a day twelve years on, and Get Low, Goodies and Catchy Song together are 27% of all daily plays. Every 2025 to 2026 release with a Dillon credit adds up to about 12.9M streams, less than 6% of Get Low alone. Remixes and features are another 627M streams (31% of the total), so the name travels well on other people's records. The one live signal: Cry Myself To Sleep is already at 5,252 a day, the best daily rate of any new song, four weeks after release (kworb, Oct 7 2026; Fall had not posted yet).",
 "tier": "At 2.53M monthly listeners he sits far below the peers he came up with or plays beside: DJ Snake 47.2M, Diplo 45.8M, Zedd 21.1M, FISHER 16.9M and John Summit 11.8M. He is about ten times his Dillstradamus partner Flosstradamus (0.27M). Chartmetric still rates him career stage mainstream with steady momentum and an artist score of 91.4, so the reputation is intact while the Spotify audience has halved since January 2024. Followers actually grew 3.8% over the same period (1.13M to 1.17M), which reads as loyal fans who are not being served new music they keep playing.",
 "listen": "The United States is about a third of listeners (821K). Germany is a surprising second at 334K (13%), ahead of Australia (151K), Italy (145K), Mexico (140K), Poland (136K) and the UK (126K). The top cities are Los Angeles (38.2K) and Mexico City (38.1K), virtually tied, then Sydney, Chicago, New York, London, Melbourne, Toronto, Denver and Seattle (Chartmetric, Oct 2026). Mexico City's rank is consistent with the Latin catalog (Wut Wut, Sexo with Residente)."
};

export const BRAND_INTRO = "Dillon Francis has one of the most recognizable personalities in dance music and almost no fixed visual identity. Across 43 covers since 2014 the name is set in a different typeface almost every time, the colors reset with every label, and the strongest systems (the fire over the mouth, the burning house) each last about two years before being dropped. The constants are his face, his jokes and a hand-drawn smiley that keeps surfacing without ever being formally made the mark.";

export const ERAS = [
 {
  "k": "Face on fire",
  "when": "2014-2016",
  "label": "Columbia",
  "covers": [
   "2014-get-low",
   "2014-when-we-were-young",
   "2014-money-sucks-friends-rule",
   "2015-bun-up-the-dance",
   "2015-this-mixtape-is-fire",
   "2016-coming-over-remixes",
   "2016-need-you",
   "2016-candy",
   "2016-anywhere"
  ],
  "read": "The first real system. MSFR puts his gurning face in neon bands of pink, yellow and green, then Bun Up the Dance, This Mixtape Is Fire and the Coming Over remixes repeat one photo with a box of flame over his mouth, recolored per release. It is funny, ownable and instantly his. By 2016 it gives way to single objects on pastel grounds (piñata, globe, a signed CD) that are tidy but could belong to anyone."
 },
 {
  "k": "IDGAFOS maximalism",
  "when": "2017-2021",
  "label": "IDGAFOS / Mad Decent",
  "covers": [
   "2017-say-less",
   "2017-no-diga-mas",
   "2017-hello-there",
   "2018-we-the-funk",
   "2018-look-at-that-butt",
   "2018-wut-wut",
   "2018-lfgd",
   "2019-catchy-song",
   "2019-lost-my-mind",
   "2019-change-your-mind",
   "2019-magic-is-real",
   "2020-you-do-you",
   "2020-be-somebody",
   "2021-very-important-music",
   "2021-love-me-better",
   "2021-reaching-out",
   "2021-happy-machine"
  ],
  "read": "Owning the label meant owning the chaos. Say Less and No Diga Más share a strong black and white stencil lockup that is never used again; Wut Wut, We The Funk and Look At That Butt are glitch-collage overload; elsewhere there is a stock-photo meme (Hello There), a unicorn (Magic Is Real), a urinal (You Do You) and a Lego Movie tie-in. Happy Machine closes the era with his face back on the cover between hot type bars, the template Love Me Better and Reaching Out also use. Highest humor, lowest recognizability."
 },
 {
  "k": "The burning house",
  "when": "2022-2024",
  "label": "Astralwerks, then free agent",
  "covers": [
   "2022-once-again",
   "2022-dont-let-me-let-go",
   "2022-goodies",
   "2023-pretty-people",
   "2023-la-on-acid",
   "2023-im-my-only-friend",
   "2023-this-mixtape-is-fire-too",
   "2024-pero-like",
   "2024-jet-setter",
   "2024-msfr-10-year-remix",
   "2024-caught-in-a-moment"
  ],
  "read": "The most disciplined run of his career. From Don't Let Me Let Go through This Mixtape Is Fire TOO, every Astralwerks cover is the same suburban house in flames with a new absurd scene on the lawn and heavy white type knocked across the photo. Six releases, one world, and it pays off the 2015 mixtape's fire. Once Astralwerks ends, so does the system: 2024 covers come from each partner label and share nothing."
 },
 {
  "k": "Monstercat x broke",
  "when": "2025-2026",
  "label": "Monstercat x broke (plus partner labels)",
  "covers": [
   "2025-b2u-ep",
   "2026-what-it-feels-like",
   "2026-make-you-move",
   "2026-riddem",
   "2026-cry-myself-to-sleep",
   "2026-fall"
  ],
  "read": "Two looks inside one campaign. What It Feels Like, Make You Move and RIDDEM shoot the back of a dyed head (red, yellow, purple) with a face drawn into the hair and hand-scrawled titles, a clever echo of his merch smiley. Then Cry Myself To Sleep and Fall switch to dark, blurred neon figures that fit Monstercat's catalog more than his. The concept is strong but was abandoned after three singles."
 }
];

export const CONSISTENCY = [
 {
  "k": "Face and character",
  "v": 7,
  "n": "His face leads his most recognizable covers, from MSFR to the burning house"
 },
 {
  "k": "Series discipline",
  "v": 6,
  "n": "Strong runs (fire over the mouth, the burning house) dropped at each label change"
 },
 {
  "k": "Color",
  "v": 3,
  "n": "No owned palette; it resets with every label"
 },
 {
  "k": "Cover to tour to merch",
  "v": 3,
  "n": "Admat, merch, covers and site share no type, color or motif"
 },
 {
  "k": "Wordmark",
  "v": 2,
  "n": "Set differently on nearly every cover; no lockup outlived an era"
 }
];

export const CONSISTENCY_SUMMARY = {
 "overall": 4.2,
 "note": "A personality brand without a visual system. The fixes are cheap because the raw material already exists: one wordmark, the smiley as the mark, and his face as the photographic rule, held for longer than one label deal."
};

export const ASSETS = [
 {
  "k": "The face and the bit",
  "v": "FACE",
  "b": "Few dance acts can put their own face on a cover and make it the joke. His covers that lead with his face (MSFR, This Mixtape Is Fire, Happy Machine, the burning house) are his most recognizable, and the comedy track record gives it range beyond music.",
  "proof": "DJ Hanzel since 2013 with a headline One Deeper show (Exchange LA, Dec 2016) and releases on One Deeper Records (2022-23); Funny Or Die's Like and Subscribe and Viceland's What Would Diplo Do?; the 2026 Dillstradamus admat is a bobblehead caricature of him and Flosstradamus."
 },
 {
  "k": "IDGAFOS",
  "v": "IDGAFOS",
  "b": "A phrase that has been a song (2011), a label (2017 onward) and a fan rallying cry. It is the closest thing he has to a creed and it is still in circulation.",
  "proof": "\"I.D.G.A.F.O.S.\" single on Mad Decent (Oct 2011, 12.2M Spotify streams); IDGAFOS label launched with \"Say Less\" ft. G-Eazy (2017) and carried releases through Happy Machine (2021); his 2026 Dillstradamus admat jersey reads IDGAFOS 69 and IDGAFOS foam fingers appear in the tour merch photos."
 },
 {
  "k": "The catalog",
  "v": "2.05B",
  "b": "A deep, still-earning catalog spanning moombahton, festival trap, house and Latin, plus remix credits that keep his name on other artists' hits.",
  "proof": "Get Low 224.7M and Coming Over 163.9M streams; first moombahton number one on Beatport (2012); This Mixtape Is Fire number one on Billboard Top Dance/Electronic Albums; 627M streams as featured or remix artist (kworb)."
 }
];

export const WORDMARKS = {
 "intro": "Four marks in use right now across the website, the store and the tour. They share no typeface, no color and no motif. The two strongest, the hand-drawn wordmark and the smiley, live only on merch.",
 "items": [
  {
   "img": "df-wordmark-site",
   "png": true,
   "k": "Website wordmark",
   "d": "\"DILLON FRANCIS\" stacked on two lines in a heavy geometric sans, white on transparent. Header logo of dillonfrancis.com (uploaded March 2024). Clean and legible, but generic: it carries none of his humor."
  },
  {
   "img": "df-handdrawn-wordmark",
   "png": false,
   "k": "Hand-drawn merch wordmark",
   "d": "\"DILLON FRANCIS\" in hand-lettered black capitals with a white sticker outline, taken from the Plurtober merch post (Oct 2025). Friendlier and more on-voice than the site logo."
  },
  {
   "img": "face-mark-merch",
   "png": false,
   "k": "Smiley face mark",
   "d": "A single-line drawn head with ears and an open grin, in glowing green, from the back of the \"DILLON LOGO\" tee (store item named DILLON LOGO, Nov 2024). The same face appears on the merch store entry button and is echoed in the 2026 dyed-hair covers."
  },
  {
   "img": "dillstradamus-admat-a",
   "png": false,
   "k": "Dillstradamus 2026 admat",
   "d": "Video-game arena poster: chrome and gold \"DILLSTRADAMUS\" title, \"Dillon Francis B2B Flosstradamus\", big-head caricatures in basketball jerseys (his reads IDGAFOS 69, Floss reads 420), \"World Grand Championship Global Tour\" and \"Press Start\". Official admat via Sacks & Co."
  }
 ],
 "note": "The smiley is the strongest candidate for a unifying mark: it is already on the merch, the store entry button and older covers, and it is echoed by the 2026 dyed-hair series."
};

export const VOICE = [
 {
  "k": "Mock-heroic hype",
  "e": "“I will not let the algorithm gatekeep this song from you. I will prevail 😤”"
 },
 {
  "k": "Studio diary",
  "e": "“Idk, it just needs words”"
 },
 {
  "k": "Absurd one-liners",
  "e": "“New song made my car explode”"
 },
 {
  "k": "Sincere friend",
  "e": "“I will cherish this weekend forever.”"
 }
];

export const CHANNELS = [
 {
  "name": "Instagram",
  "handle": "@dillonfrancis",
  "followers": "3,250,121",
  "last": "Oct 8, 2026",
  "state": "Still posting about 3 times a week, but the median reel fell from 247.5K to 46.2K plays once the feed turned into song teasers."
 },
 {
  "name": "TikTok",
  "handle": "@dillonfrancis",
  "followers": "1,700,000",
  "last": "Oct 8, 2026",
  "state": "Mostly the same clips as Instagram; median organic plays dropped from 8.5K to 3K, and the 5 Fall teaser and release videos since Oct 1 drew 1,219 to 2,360 plays each."
 },
 {
  "name": "YouTube",
  "handle": "@DillonFrancis",
  "followers": "2,520,000",
  "last": "Oct 7, 2026",
  "state": "Shorts only since Oct 10, 2025; the median Short reaches 0.138% of subscribers and there is no long-form for the new songs."
 },
 {
  "name": "X",
  "handle": "@DillonFrancis",
  "followers": "896,060",
  "last": "Oct 7, 2026",
  "state": "Caption cross-posts drawing a median 18.3K views; personal posts are the only ones that travel."
 },
 {
  "name": "Spotify",
  "handle": "Dillon Francis",
  "followers": "1,174,087",
  "last": null,
  "state": "2,536,664 monthly listeners, more than double the 1,174,087 followers, so most of his listeners do not follow him."
 }
];

export const CADENCE = {
 "months": [
  "2025-10",
  "2025-11",
  "2025-12",
  "2026-01",
  "2026-02",
  "2026-03",
  "2026-04",
  "2026-05",
  "2026-06",
  "2026-07",
  "2026-08",
  "2026-09",
  "2026-10"
 ],
 "ig": [
  14,
  12,
  4,
  10,
  13,
  9,
  15,
  13,
  12,
  6,
  5,
  17,
  9
 ],
 "tt": [
  12,
  14,
  3,
  13,
  7,
  16,
  15,
  15,
  9,
  8,
  5,
  14,
  6
 ],
 "igPlays": [
  120955,
  135851,
  231572,
  85599,
  116155,
  168038,
  185798,
  119024,
  213464,
  288718,
  215973,
  49250,
  37692
 ],
 "ttPlays": [
  17900,
  13900,
  69800,
  8292,
  9489,
  16050,
  16700,
  9676,
  4994,
  18300,
  11300,
  5091,
  1574
 ],
 "note": "September 2026 was his busiest Instagram month of the year (17 posts) and his weakest full month for reach: a median 49,250 plays per reel, against 288,718 in July on 6 posts. Output did not cause the drop. What he posted did: September and October were almost entirely song teases and release clips for Cry Myself To Sleep and Fall."
};

export const FORMATS = [
 {
  "k": "Creator or DJ collab",
  "n": "6 posts",
  "v": 360994
 },
 {
  "k": "Comedy skit / bit",
  "n": "33 posts",
  "v": 207657
 },
 {
  "k": "Lifestyle and personal",
  "n": "4 posts",
  "v": 133204
 },
 {
  "k": "Trend or meme",
  "n": "3 posts",
  "v": 131087
 },
 {
  "k": "Podcast or interview clip",
  "n": "6 posts",
  "v": 113950
 },
 {
  "k": "Live and crowd",
  "n": "22 posts",
  "v": 104113
 },
 {
  "k": "Studio work in progress",
  "n": "15 posts",
  "v": 76721
 },
 {
  "k": "Release promo",
  "n": "19 posts",
  "v": 57580
 }
];

export const FORMATS_TT = [
 {
  "k": "Comedy skit / bit",
  "n": "53 posts",
  "v": 19800
 },
 {
  "k": "Creator or DJ collab",
  "n": "5 posts",
  "v": 19800
 },
 {
  "k": "Trend or meme",
  "n": "15 posts",
  "v": 12400
 },
 {
  "k": "Live and crowd",
  "n": "30 posts",
  "v": 8963
 },
 {
  "k": "Studio work in progress",
  "n": "18 posts",
  "v": 8959
 },
 {
  "k": "Lifestyle and personal",
  "n": "3 posts",
  "v": 4595
 },
 {
  "k": "Release promo",
  "n": "12 posts",
  "v": 4527
 }
];

export const RELEASE = [
 {
  "k": "Instagram, median likes",
  "rel": 3830,
  "non": 7240,
  "fmt": "n"
 },
 {
  "k": "TikTok organic, median plays",
  "rel": 10147,
  "non": 12500,
  "fmt": "n"
 },
 {
  "k": "YouTube Shorts, median views",
  "rel": 4542,
  "non": 5119,
  "fmt": "n"
 }
];

export const PAID = {
 "organic": {
  "er": 7.14,
  "plays": 24000,
  "n": 292
 },
 "promoted": {
  "er": 1.12,
  "plays": 243800,
  "n": 8
 },
 "note": "Only one TikTok has been promoted in the last twelve months: the January 30 Dillstradamus ticket video, 613,700 plays at 0.49% engagement. Nothing was put behind Cry Myself To Sleep or Fall, and no organic winner has ever been boosted. Promoted posts across the full history reach about ten times the plays of organic ones, at about a sixth of the engagement."
};

export const HOOKS = [
 {
  "k": "Comment, tag or rate ask",
  "v": 164,
  "n": "15 posts"
 },
 {
  "k": "Statement or joke line",
  "v": 127,
  "n": "101 posts"
 },
 {
  "k": "Release announcement",
  "v": 122,
  "n": "12 posts"
 },
 {
  "k": "Question",
  "v": 93,
  "n": "9 posts"
 },
 {
  "k": "Emoji only",
  "v": 46,
  "n": "2 posts"
 }
];

export const RARE = [
 {
  "k": "Creator and DJ collabs",
  "v": "3.0x",
  "l": "his typical reel, at a 361K median. Posts made with another creator or DJ (Mosimann's Dreamtrack, the Red Bull street challenge, Isaac's Best of LA, Bert Kreischer, the DJ Snake crash) borrow a second audience and are his highest-reaching format, yet he runs one about every two months.",
  "n": "6 of 108 posts"
 },
 {
  "k": "Ring-cam and fake livestream skits",
  "v": "2.8x",
  "l": "his typical reel, at a 329.9K median. The doorbell-camera panic bits and the fake stream 'to 100k viewers' are fixed, repeatable formats that put a new song in the background of a joke. Five Instagram posts between Jun 29 and Aug 6, then none.",
  "n": "5 of 108 posts"
 },
 {
  "k": "'Did they steal my song?' bits",
  "v": "7.8x",
  "l": "his typical reel, at a 927.6K median. Playing a chart hit next to his own record and asking if Benson Boone or Sombr stole it turned a catalog flex into a debate. Two posts in March and April, the third and fifth biggest reels of his last 12 months, never repeated.",
  "n": "2 of 108 posts"
 }
];

export const TOP_POSTS = [
 {
  "href": "https://www.instagram.com/reel/DVZB6e5j1tW/",
  "img": "DVZB6e5j1tW",
  "who": "Instagram reel",
  "metric": "2,047,466 plays",
  "note": "this is what peak male performance looks like",
  "date": "2026-03-02",
  "fmt": "Comedy skit / bit",
  "owner": "dillonfrancis"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7597309387882925325",
  "img": "7597309387882925325",
  "who": "TikTok",
  "metric": "1,300,000 plays",
  "note": "I hope fetty wap can see this one day",
  "date": "2026-01-20",
  "fmt": "Comedy skit / bit"
 },
 {
  "href": "https://www.instagram.com/reel/DXkaU52EiUv/",
  "img": "DXkaU52EiUv",
  "who": "Instagram reel",
  "metric": "1,432,026 plays",
  "note": "riding the rail from his couch",
  "date": "2026-04-25",
  "fmt": "Comedy skit / bit",
  "owner": "dillonfrancis"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7571602003437178167",
  "img": "7571602003437178167",
  "who": "TikTok",
  "metric": "628,400 plays",
  "note": "Worth every penny",
  "date": "2025-11-11",
  "fmt": "Comedy skit / bit"
 },
 {
  "href": "https://www.instagram.com/reel/DWjmKQ9j96S/",
  "img": "DWjmKQ9j96S",
  "who": "Instagram reel",
  "metric": "1,174,650 plays",
  "note": "am I right or am I right",
  "date": "2026-03-31",
  "fmt": "Comedy skit / bit",
  "owner": "dillonfrancis"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7630940075366419743",
  "img": "7630940075366419743",
  "who": "TikTok",
  "metric": "320,800 plays",
  "note": "He said he recently started producing",
  "date": "2026-04-20",
  "fmt": "Comedy skit / bit"
 },
 {
  "href": "https://www.instagram.com/reel/DXxrvDqBjMg/",
  "img": "DXxrvDqBjMg",
  "who": "Instagram reel",
  "metric": "883,791 plays",
  "note": "A classical rock challenge with @dillonfrancis and @redbullusa",
  "date": "2026-05-01",
  "fmt": "Creator or DJ collab",
  "owner": "chris_stocks_"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7571617264139603255",
  "img": "7571617264139603255",
  "who": "TikTok",
  "metric": "314,400 plays",
  "note": "Dillatradamus? @Flosstradamus",
  "date": "2025-11-11",
  "fmt": "Live and crowd"
 }
];

export const LOW_POSTS = [
 {
  "href": "https://www.instagram.com/reel/DeNYd7uvZzF/",
  "img": "DeNYd7uvZzF",
  "who": "Instagram reel",
  "metric": "27,591 plays",
  "note": "Fall out now everywhere",
  "date": "2026-10-07",
  "fmt": "Release promo",
  "owner": "dillonfrancis"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7694092210882579725",
  "img": "7694092210882579725",
  "who": "TikTok",
  "metric": "1,474 plays",
  "note": "It’s out everywhere",
  "date": "2026-10-08",
  "fmt": "Release promo"
 },
 {
  "href": "https://www.instagram.com/reel/DeAKfzGPmH1/",
  "img": "DeAKfzGPmH1",
  "who": "Instagram reel",
  "metric": "26,995 plays",
  "note": "it is the one",
  "date": "2026-10-02",
  "fmt": "Release promo",
  "owner": "dillonfrancis"
 },
 {
  "href": "https://www.tiktok.com/@dillonfrancis/video/7692147256845208846",
  "img": "7692147256845208846",
  "who": "TikTok",
  "metric": "1,219 plays",
  "note": "It is the one",
  "date": "2026-10-02",
  "fmt": "Release promo"
 }
];

export const SOCIAL_NOTES = {
 "youtube": "YouTube is a 2.52M-subscriber channel with 1.15B lifetime views and no long-form upload since the Bring The House Down visualizer on October 10, 2025. Nothing long-form exists for Cry Myself To Sleep or Fall. Shorts mirror the Instagram feed: 66 in the last twelve months at a median 4,844 views, 0.19% of subscribers. The best recent Shorts are bits: “Pls don’t feed the dj” (24,158) and “disgusting. just disgusting.” (21,215). The subscribers are there; nothing is being made for them.",
 "x": "X has 896,060 followers and works as a caption cross-post: originals earn a median 18,319 views. The two standouts were personal, not promotional: the Alesso wedding post (265,648 views, 1,586 likes) and the long Zedd in the Park note (47,539 views, 1,267 likes, 15 times the median). Ticket tweets were the floor of the account at under 5,000 views."
};

export type Peer = { k: string; igF: number; igPw: number; igReel: number; igEr: number; ttF: number; ttPw: number; ttPlays: number; ttPpf: number; self?: boolean };

export const PEERS: Peer[] = [
 {
  "k": "Dillon Francis",
  "igF": 3250121,
  "igPw": 2.56,
  "igReel": 70714,
  "igEr": 0.1,
  "ttF": 1700000,
  "ttPw": 2.48,
  "ttPlays": 7382,
  "ttPpf": 0.004,
  "self": true
 },
 {
  "k": "DJ Snake",
  "igF": 10230890,
  "igPw": 1.47,
  "igReel": 1497952,
  "igEr": 1.5,
  "ttF": 3900000,
  "ttPw": 0.62,
  "ttPlays": 172750,
  "ttPpf": 0.044
 },
 {
  "k": "Diplo",
  "igF": 6574143,
  "igPw": 2.79,
  "igReel": 583238,
  "igEr": 0.4,
  "ttF": 2900000,
  "ttPw": 2.95,
  "ttPlays": 54300,
  "ttPpf": 0.019
 },
 {
  "k": "Steve Aoki",
  "igF": 11321340,
  "igPw": 3.02,
  "igReel": 418828,
  "igEr": 0.1,
  "ttF": 4000000,
  "ttPw": 2.87,
  "ttPlays": 53150,
  "ttPpf": 0.013
 },
 {
  "k": "Zedd",
  "igF": 8030990,
  "igPw": 1.86,
  "igReel": 262271,
  "igEr": -1,
  "ttF": 1300000,
  "ttPw": 1.47,
  "ttPlays": 48600,
  "ttPpf": 0.037
 },
 {
  "k": "Marshmello",
  "igF": 27876660,
  "igPw": 1.32,
  "igReel": 843955,
  "igEr": 0.5,
  "ttF": 25500000,
  "ttPw": 1.55,
  "ttPlays": 395500,
  "ttPpf": 0.016
 },
 {
  "k": "FISHER",
  "igF": 2642626,
  "igPw": 2.87,
  "igReel": 1313472,
  "igEr": 2.0,
  "ttF": 1100000,
  "ttPw": 0.7,
  "ttPlays": 359800,
  "ttPpf": 0.327
 },
 {
  "k": "John Summit",
  "igF": 1972106,
  "igPw": 2.48,
  "igReel": 1834060,
  "igEr": 5.1,
  "ttF": 1200000,
  "ttPw": 3.02,
  "ttPlays": 440650,
  "ttPpf": 0.367
 },
 {
  "k": "Dom Dolla",
  "igF": 1604982,
  "igPw": 2.71,
  "igReel": 1134884,
  "igEr": 4.0,
  "ttF": 928200,
  "ttPw": 2.95,
  "ttPlays": 294200,
  "ttPpf": 0.317
 },
 {
  "k": "Flosstradamus",
  "igF": 400592,
  "igPw": 0.54,
  "igReel": 19272,
  "igEr": 0.3,
  "ttF": 2881,
  "ttPw": 0.54,
  "ttPlays": 2207,
  "ttPpf": 0.766
 },
 {
  "k": "Two Friends",
  "igF": 553552,
  "igPw": 3.02,
  "igReel": 161324,
  "igEr": 1.1,
  "ttF": 400400,
  "ttPw": 3.02,
  "ttPlays": 6521,
  "ttPpf": 0.016
 }
];

export const METRICS = [
  { id: "ttPpf", k: "TikTok plays per follower", fmt: "dec3", note: "Median plays on the last 40 videos over current followers. Flosstradamus's TikTok has 2,881 followers, so his ratio is not comparable." },
  { id: "igReel", k: "IG reel plays", fmt: "num", note: "Median plays on reels in the last 40 posts." },
  { id: "ttPlays", k: "TikTok plays", fmt: "num", note: "Median plays on the last 40 videos, pinned videos included." },
  { id: "igEr", k: "IG engagement", fmt: "pct1", note: "Median (likes + comments) per post over current followers, last 40 posts with visible likes. Zedd hides likes on most posts." },
  { id: "igF", k: "IG followers", fmt: "num", note: "Followers on the pull date." },
  { id: "ttF", k: "TikTok followers", fmt: "num", note: "Followers on the pull date. TikTok rounds large counts." },
  { id: "igPw", k: "IG posts a week", fmt: "dec", note: "Posts dated July 10 to October 8, 2026, divided by 12.9 weeks." },
  { id: "ttPw", k: "TikTok posts a week", fmt: "dec", note: "Posts dated July 10 to October 8, 2026, divided by 12.9 weeks." },
] as const;

export const PEER_INTRO = "Ten peers: the dance stars Dillon came up alongside (DJ Snake, Diplo, Steve Aoki, Zedd, Marshmello), the personality-led house wave (FISHER, John Summit, Dom Dolla), his Dillstradamus partner Flosstradamus and Two Friends. Dillon has the 6th biggest Instagram and 5th biggest TikTok in the set, yet ranks 10th on median reel plays and last on TikTok plays per follower. Since September 1, while the grid has been mostly song teases, his median TikTok fell to 2,678 plays from 13,800 over June to August.";

export const PEER_READ = [
 {
  "v": "5th",
  "l": "of 11 on TikTok followers. The audience is already there."
 },
 {
  "v": "11th",
  "l": "of 11 on TikTok plays per follower. 7,382 median plays on 1.7M followers."
 },
 {
  "v": "10th",
  "l": "of 11 on Instagram reel plays. Only Flosstradamus is lower."
 },
 {
  "v": "6th",
  "l": "of 11 on Instagram posting, at 2.56 a week. Volume is not the gap."
 }
];

export const WORLDS = [
 {
  "k": "Marshmello",
  "w": "The helmet",
  "b": "One faceless icon carries every post, stage and collab, so the character is the brand."
 },
 {
  "k": "John Summit",
  "w": "Experts Only",
  "b": "A label turned festival that drew 60,000 over two days in 2026, wrapped around his failed-accountant origin story."
 },
 {
  "k": "FISHER",
  "w": "Follow the fish",
  "b": "The handle, the hat and glasses, and a fishing vocabulary for every show, with his family as recurring cast."
 },
 {
  "k": "Diplo",
  "w": "Diplo's Run Club",
  "b": "A touring 5K and party that turns fans into a community outside the club, plus Major Lazer as a second world."
 },
 {
  "k": "Steve Aoki",
  "w": "The cake and Dim Mak",
  "b": "A 30-year label and a signature stunt fans film from the crowd; his 11 cake TikToks run a 161,900 median vs 46,200 for the rest."
 },
 {
  "k": "Dillon Francis",
  "w": "Characters without a hub",
  "b": "DJ Hanzel, the Dillstradamus run and years of skits, but no named recurring bit on the grid since September.",
  "self": true
 }
];

export const BREAKOUTS = [
 {
  "href": "https://www.tiktok.com/@steveaoki/video/7666885045914799373",
  "img": "7666885045914799373",
  "who": "Steve Aoki",
  "metric": "25.4M plays",
  "x": "478x his median",
  "note": "\"HEADSHOT!!\" The cake throw, a bit he owns, filmed like a sports highlight"
 },
 {
  "href": "https://www.tiktok.com/@domdolla/video/7681408810828713246",
  "img": "7681408810828713246",
  "who": "Dom Dolla",
  "metric": "10M plays",
  "x": "34x his median",
  "note": "\"went scuba diving for the first time but no one taught me the hand signals\". A talking-head skit, no music promo"
 },
 {
  "href": "https://www.instagram.com/p/DYr7K8uJ4ux/",
  "img": "DYr7K8uJ4ux",
  "who": "Diplo",
  "metric": "13.3M plays",
  "x": "23x his median",
  "note": "His son's kindergarten graduation as \"one of the most important sets of my career\". The star as the joke"
 },
 {
  "href": "https://www.tiktok.com/@johnsummit/video/7692217908830817566",
  "img": "7692217908830817566",
  "who": "John Summit",
  "metric": "4.9M plays",
  "x": "11x his median",
  "note": "\"first time back on campus in 9 years\". An origin story his fans already know"
 }
];

export const PEER_PATTERNS = [
 {
  "h": "The breakouts are bits, not drops",
  "b": "Outside release posts, the biggest jumps since April are a cake throw (478x), a scuba skit (34x), a kindergarten-graduation joke (23x) and a campus return (11x). Steve Aoki's cake TikToks run 3.5x his other videos."
 },
 {
  "h": "Personality accounts keep their reach",
  "b": "John Summit, FISHER and Dom Dolla earn 0.32 to 0.37 TikTok plays per follower. The legacy stars in the set sit between 0.013 and 0.044. Dillon is at 0.004."
 },
 {
  "h": "Family and friends are recurring cast",
  "b": "FISHER's reels with his daughter and family run a 2.87M median vs 1.13M for the rest. Dillon's three co-authored reels ran a 371,467 median vs 64,764 solo."
 },
 {
  "h": "Volume alone does not buy reach",
  "b": "Two Friends post 3 TikToks a week for 0.016 plays per follower; FISHER posts 0.7 a week for 0.327. Dillon posts 2.48 a week, and his 20 TikToks since September 1, mostly song teases, hold a 2,678 median."
 }
];

export const FAN_INTRO = "We read 6,262 fan comments across Dillon's Instagram, TikTok, YouTube and Reddit, pulled on October 9, 2026, two days after Fall came out. The room is overwhelmingly warm: 98.5% of comments with a clear tone are positive, and the two biggest conversations are the music itself and his comedy. What fans ask for most is more of the Dillon they grew up with, the bits, the characters and the moombahton-era sound, and they rarely hear back from him.";

export const FANS = {
 "collected": 6521,
 "analyzed": 6262,
 "sources": [
  {
   "k": "Instagram",
   "v": 3570
  },
  {
   "k": "YouTube",
   "v": 1551
  },
  {
   "k": "TikTok",
   "v": 1169
  },
  {
   "k": "Reddit",
   "v": 231
  }
 ],
 "positive": 98.5,
 "themes": [
  {
   "k": "New music and the song itself",
   "share": 25.9,
   "pos": 69,
   "neg": 1
  },
  {
   "k": "His comedy and skits",
   "share": 19.8,
   "pos": 84,
   "neg": 1
  },
  {
   "k": "The live show and sets",
   "share": 4.7,
   "pos": 44,
   "neg": 3
  },
  {
   "k": "Collabs (DJ Snake, Flosstradamus, Skrillex and others)",
   "share": 4.4,
   "pos": 44,
   "neg": 1
  },
  {
   "k": "Nostalgia for the moombahton and Money Sucks, Friends Rule era",
   "share": 3.8,
   "pos": 38,
   "neg": 2
  },
  {
   "k": "Personal life (birthday, wedding, friends)",
   "share": 2.1,
   "pos": 58,
   "neg": 2
  },
  {
   "k": "Spanish-language comments",
   "share": 1.1,
   "pos": 43,
   "neg": 0
  },
  {
   "k": "DJ Hanzel, Gerald and other characters",
   "share": 0.8,
   "pos": 23,
   "neg": 2
  },
  {
   "k": "Criticism of the sound or the comedy",
   "share": 0.6,
   "pos": 0,
   "neg": 100
  },
  {
   "k": "Tour and city requests",
   "share": 0.5,
   "pos": 45,
   "neg": 0
  }
 ],
 "questions": [
  {
   "k": "Joking or rhetorical questions about the bit",
   "n": 404
  },
  {
   "k": "Track ID and song name",
   "n": 33
  },
  {
   "k": "Who is the featured singer or person on screen",
   "n": 20
  },
  {
   "k": "Shows, tour dates and tickets",
   "n": 18
  },
  {
   "k": "When is it out and where to stream",
   "n": 13
  }
 ],
 "replies": [
  {
   "k": "Instagram",
   "v": "1.2%",
   "n": "@dillonfrancis replied to 24 of 2,032 fan comments on his 30 most recent posts, and to 1 of 760 on his top reels of the past year. Replies are short and in his comedic voice, a few of them roasting critics."
  },
  {
   "k": "TikTok",
   "v": "2.9%",
   "n": "24 replies across 821 top-level comments on 22 videos (6 of 249 on his 14 most recent uploads); he also hearted 46. Most replies sit on 2020 to 2023 viral videos. Counts include up to five replies per thread, so this is a floor."
  },
  {
   "k": "YouTube",
   "v": "0.4%",
   "n": "3 replies and 9 creator hearts across 704 top-level comments, all on 2017 and 2018 music video premieres. None of the 405 comments on 2024 to 2026 uploads (visualizers, Sorry My Love, Shorts) got a reply."
  },
  {
   "k": "Reddit",
   "v": "n/a",
   "n": "No artist account takes part. Reddit talk is fan to fan: Dillstradamus tickets and set times, live reviews, and debates about his early albums."
  }
 ],
 "places": [
  "Los Angeles",
  "Las Vegas",
  "Austin",
  "India",
  "New York",
  "Seattle",
  "Portland",
  "Houston",
  "San Antonio",
  "Toronto",
  "Boston",
  "Atlanta",
  "Mexico",
  "France"
 ]
};

export const QUOTES = [
 {
  "q": "Fox News has just reported that Dillon Francis refuses to fall off and has released yet another banger",
  "who": "Instagram, Fall release reel",
  "href": "https://www.instagram.com/p/DeNYd7uvZzF/",
  "tone": "pos"
 },
 {
  "q": "I miss this Dillon so much I’m so glad he’s back",
  "who": "TikTok, Bring The House Down teaser (658 likes)",
  "href": "https://www.tiktok.com/@dillonfrancis/video/7525552536925867319",
  "tone": "pos"
 },
 {
  "q": "We need Dj Hanzel back 🔥",
  "who": "TikTok, Bring The House Down teaser (260 likes)",
  "href": "https://www.tiktok.com/@dillonfrancis/video/7525552536925867319",
  "tone": "pos"
 },
 {
  "q": "Hell yeah Dillon! Been my favorite since day one. Hard Summer 2014 you changed the trajectory of my life.",
  "who": "Instagram, Fall teaser",
  "href": "https://www.instagram.com/p/DePhWkqvVfV/",
  "tone": "pos"
 },
 {
  "q": "Best group: Dillstradamus 2026 Everyone was so kind and friendly. No one was on their phone!",
  "who": "Reddit, r/aves thread on best and worst crowds",
  "href": "https://www.reddit.com/r/aves/comments/1wlydfi/what_has_been_the_best_and_worst_crowds_you_have/pb4ru3d/",
  "tone": "pos"
 },
 {
  "q": "Esta canción merece más vistas 🔝🔥",
  "who": "YouTube, We The Funk music video (259 likes)",
  "href": "https://www.youtube.com/watch?v=stVq_JJ_bVQ",
  "tone": "pos"
 },
 {
  "q": "Instagram has been doing that hardcore I’ve noticed with my posts too. They’re like actively suppressing artists posts",
  "who": "Instagram, \"algorithm gatekeep\" Fall reel",
  "href": "https://www.instagram.com/p/DeCuLhAP509/",
  "tone": "mix"
 },
 {
  "q": "I think it Fell off on the drop but good build up",
  "who": "Instagram, \"we still need words\" song teaser",
  "href": "https://www.instagram.com/p/Dc_5NZsSZRH/",
  "tone": "mix"
 }
];

export const FAN_BRIEF = [
 {
  "h": "Lead with the bit, let the song ride inside it",
  "b": "Comedy drives 19.8% of all comments and is the most positive theme. Most of his biggest reels of the past year were bits (2.0M, 1.4M and 1.2M plays), while the song-teaser reels posted since September sit at a median of about 47K. Every release post should carry a joke with the track as its soundtrack or punchline, not a bare teaser."
 },
 {
  "h": "Bring the characters and the old sound back on purpose",
  "b": "Some of the most liked comments ask for DJ Hanzel and Gerald (\"Should get DJ Hanzel in there instead\" has 880 likes, \"Bring Gerald back\" 411), and nostalgia comments keep naming moombahton, Get Low and the 2012 to 2016 era. A recurring Hanzel or Gerald slot, plus nods to moombahton in the Dillstradamus run, gives long-time fans a reason to share."
 },
 {
  "h": "Answer the comments that ask for something",
  "b": "He replies to about 1.2% of fan comments on recent Instagram posts and to none on recent YouTube uploads. Most questions are jokes, but real ones go unanswered: track IDs, who sings on Fall, where to stream and when he is playing nearby. Pin the link and credit on each release, and reply in his voice to the top comment on every post."
 },
 {
  "h": "Treat TikTok and the tour cities as their own channels",
  "b": "The same Fall teasers that reach 27K to 53K plays on Instagram are getting about 1K to 3K on TikTok, where the comment sections are still dominated by his 2020 to 2023 viral videos. Native TikTok edits built around a bit, plus city-specific posts for Dillstradamus stops (Reddit chatter is mostly tickets and set times in LA, Austin, Atlanta, Chicago, New York and the Bay Area), would meet fans where they already are."
 }
];

export const BRAIN = {
 "intro": "We indexed 40 videos in a TwelveLabs Jockey knowledge store: 30 of Dillon's best, worst and most telling posts from the last 12 months and 10 peer breakouts, each labeled with its real plays, likes and comments. Then we asked it what separates the winners from the losers, and checked every claim about the first seconds against frames we pulled ourselves. Every video referenced on this page also opens with a full TwelveLabs Pegasus teardown: the hook, every beat, the on-screen text, audio, pacing and what to repeat.",
 "total": 40,
 "corpus": [
  {
   "k": "Dillon top performers",
   "v": 8
  },
  {
   "k": "Dillon low performers",
   "v": 4
  },
  {
   "k": "Dillon series, teasers and collabs",
   "v": 18
  },
  {
   "k": "Peer breakouts and benchmarks",
   "v": 10
  }
 ],
 "findings": [
  {
   "h": "Comedy premise wins. Release clips lose.",
   "b": "His 14 skit and stunt posts have a median of 586,107 plays. The 7 Fall posts from the last ten days have a median of 27,591, about 21 times lower. Of the 15 Dillon videos over 250,000 plays, 12 open on a comedy premise or story line in the first frame (Jockey counted 11). The Fall posts open on a particle visualizer, a backyard wide shot and a lyric dance, and nothing in them is a joke.",
   "take": "Release the song inside a bit, not instead of one. The audience follows Dillon the comedian; the song has to ride in with him.",
   "clips": [
    {
     "href": "https://www.instagram.com/reel/DVZB6e5j1tW/",
     "label": "\"My spin instructor can't be serious\"",
     "views": "2.05M plays"
    },
    {
     "href": "https://www.instagram.com/reel/DXkaU52EiUv/",
     "label": "\"We stole his phone but didn't realize...\"",
     "views": "1.43M plays"
    },
    {
     "href": "https://www.instagram.com/reel/DeNYd7uvZzF/",
     "label": "Fall visualizer, release day",
     "views": "27,591 plays",
     "low": true
    },
    {
     "href": "https://www.tiktok.com/@dillonfrancis/video/7694092210882579725",
     "label": "\"This one's called Fall\", TikTok",
     "views": "1,474 plays",
     "low": true
    }
   ]
  },
  {
   "h": "The song works as the punchline, not as the subject",
   "b": "In 6 Dillon posts the music is the payoff of the joke: the mariachi band that replaced a no-show closer, \"Did Benson Boone steal my song?\", both ring-cam wake-ups and both fake-stream rants that end in a drop. Their median is 528,118 plays. When the song is the whole post, as in the \"this could be the one\" backyard clip, it lands between 1,219 and 26,995. Diplo's biggest reel of the summer is the same move: diners dancing to his song without knowing he made it.",
   "take": "Write the setup so Fall is the answer. The ring-cam template already does this; point it at the single.",
   "clips": [
    {
     "href": "https://www.tiktok.com/@dillonfrancis/video/7571602003437178167",
     "label": "The 12-piece mariachi band",
     "views": "628,400 plays"
    },
    {
     "href": "https://www.instagram.com/reel/DWjmKQ9j96S/",
     "label": "\"Did Benson Boone steal my song?\"",
     "views": "1.17M plays, 1,949 comments"
    },
    {
     "href": "https://www.instagram.com/p/DaDn9zJvIAh/",
     "label": "Diplo, \"nobody ... knows we made this song\"",
     "views": "16.0M plays"
    },
    {
     "href": "https://www.instagram.com/reel/DeAKfzGPmH1/",
     "label": "\"this could be the one\"",
     "views": "26,995 plays",
     "low": true
    }
   ]
  },
  {
   "h": "The first second is a premise line. The Fall posts open on a label.",
   "b": "6 of his 8 top posts open with a one-line setup burned in at second zero, most in the fan-POV caption-bar style (\"My TA can't be serious, this school is 80k/yr\"). 0 of the 4 low performers do: two say \"this could be the one\", one says \"This one's called Fall\" and one has no text at all. Peers do the same thing: 3 of the 4 peer breakouts open on a premise line.",
   "take": "One line, first frame, written as a story someone in the room would tell: \"my TA can't be serious\", not \"this could be the one\".",
   "clips": [
    {
     "href": "https://www.tiktok.com/@dillonfrancis/video/7597309387882925325",
     "label": "\"We'll never get another opportunity like this... (wait for it)\"",
     "views": "1.30M plays, 15,200 shares"
    },
    {
     "href": "https://www.tiktok.com/@dillonfrancis/video/7630940075366419743",
     "label": "\"My TA can't be serious, this school is 80k/yr\"",
     "views": "320,800 plays"
    },
    {
     "href": "https://www.tiktok.com/@domdolla/video/7681408810828713246",
     "label": "Dom Dolla, \"no one taught me the hand signals\"",
     "views": "10.0M plays"
    },
    {
     "href": "https://www.tiktok.com/@dillonfrancis/video/7692147256845208846",
     "label": "\"this could be the one\", TikTok",
     "views": "1,219 plays",
     "low": true
    }
   ]
  },
  {
   "h": "His face hooks when it plays a character",
   "b": "When Dillon plays someone, a spin instructor, a college TA, a streamer to \"100k viewers\" or a sleeper caught on a Ring camera, the 7 posts have a median of 512,421 plays. When he is just himself on a selfie cam with a studio update, 3 posts run 26,900 to 86,348. In the Fall posts he is a small dancer in a letterboxed wide shot or replaced by a particle figure. Dom Dolla's 10M-play breakout is his face, a premise line and a story, the lane Dillon already owns.",
   "take": "Cast Dillon as a character in the release content. Full frame, first second, mid-sentence.",
   "clips": [
    {
     "href": "https://www.instagram.com/reel/Dax7SA5xtkz/",
     "label": "Fake stream, \"spitting the truth\"",
     "views": "543,815 plays"
    },
    {
     "href": "https://www.instagram.com/reel/DXZqpv-j4QD/",
     "label": "The TA, Instagram cut",
     "views": "658,084 plays"
    },
    {
     "href": "https://www.instagram.com/reel/DcwE-F_vu85/",
     "label": "Studio update, \"it took all night\"",
     "views": "86,348 plays",
     "low": true
    },
    {
     "href": "https://www.instagram.com/reel/DePhWkqvVfV/",
     "label": "Fall teaser, a small figure by a fountain",
     "views": "39,485 plays",
     "low": true
    }
   ]
  },
  {
   "h": "His series hit once, then decay. Peers own one bit.",
   "b": "Every recurring format in the set loses ground on the second try: ring-cam skits fell from 512,421 to 329,936, fake streams from 543,815 to 143,552, and the needs-words studio run from 86,348 to 26,900. Day 4 of bringing back moombahton (249,592) was a mission fans cared about; day 17 of the Fall push (53,056) repeated one dance. Steve Aoki's cake throw is one bit, owned for years, and it just did 25.4M.",
   "take": "Pick one bit to own and escalate each entry. Never post the same clip twice with a new number.",
   "clips": [
    {
     "href": "https://www.instagram.com/reel/DYF1IyhyWFA/",
     "label": "\"Day 4 of bringing back moombahton\"",
     "views": "249,592 plays"
    },
    {
     "href": "https://www.instagram.com/reel/DbtI5BEPeDa/",
     "label": "Fake stream, second entry",
     "views": "143,552 plays",
     "low": true
    },
    {
     "href": "https://www.instagram.com/reel/DeFf-S7yoqN/",
     "label": "\"day 17 of not letting the algorithm gatekeep this song\"",
     "views": "53,056 plays",
     "low": true
    },
    {
     "href": "https://www.tiktok.com/@steveaoki/video/7666885045914799373",
     "label": "Steve Aoki, the cake throw",
     "views": "25.4M plays"
    }
   ]
  },
  {
   "h": "Other people carry his reach. Fall went out alone.",
   "b": "The collab and cast posts reach audiences beyond his own: the Red Bull street quiz with @chris_stocks_ (883,790), the Mosimann dream-track post (458,763 and 1,232 comments), the podcast confrontation over his Grammys outfit (371,467) and crashing DJ Snake's set (275,712 on Instagram, 43,300 for the solo TikTok cut). All 7 Fall posts feature Dillon alone or no one. Among peers, FISHER's daughter (10.2M) and Diplo's son (13.3M) are two of the biggest posts in the set.",
   "take": "Give Fall a cast: the feature, a creator format, a peer DJ, a fan. Post it as a collab so it reaches their audience too.",
   "clips": [
    {
     "href": "https://www.instagram.com/reel/DXxrvDqBjMg/",
     "label": "Red Bull classic rock quiz",
     "views": "883,790 plays"
    },
    {
     "href": "https://www.instagram.com/reel/Db4ygByI6X5/",
     "label": "Mosimann, \"producing your dream track\"",
     "views": "458,763 plays"
    },
    {
     "href": "https://www.instagram.com/p/DUUroKJiQmQ/",
     "label": "FISHER, \"BRING YOUR DAUGHTER TO WORK DAY\"",
     "views": "10.2M plays"
    },
    {
     "href": "https://www.instagram.com/reel/Dd9bMzgRBOU/",
     "label": "\"Fall ft. ????\", solo dance",
     "views": "37,692 plays",
     "low": true
    }
   ]
  },
  {
   "h": "The ask never makes it onto the screen",
   "b": "None of Dillon's 30 videos puts \"stream\", \"pre-save\" or \"link in bio\" on screen, and none of the 7 Fall posts does; \"out now\" lives only in captions. The one on-screen ask in his set is Mosimann's \"if people are commenting ... we can release it\", and that post drew 1,232 comments. The only peer clip with an on-screen ask is Two Friends' \"sign up in bio\" after \"tour news coming soon\", at 36 times their median.",
   "take": "End every release clip on one burned-in line that gives a reason and a place: \"Fall is out, link in bio\". Use the comment-gated ask for the next unreleased song.",
   "clips": [
    {
     "href": "https://www.instagram.com/reel/Db4ygByI6X5/",
     "label": "\"IF PEOPLE ARE COMMENTING ... WE CAN RELEASE IT\"",
     "views": "458,763 plays"
    },
    {
     "href": "https://www.tiktok.com/@twofriends/video/7686593702604573966",
     "label": "Two Friends, \"sign up in bio\"",
     "views": "235,500 plays"
    },
    {
     "href": "https://www.instagram.com/reel/DeNYd7uvZzF/",
     "label": "\"Fall out now\", caption only",
     "views": "27,591 plays",
     "low": true
    }
   ]
  }
 ]
};

export const FUNNEL = {
 "intro": "A fan who taps through from a clip mostly lands on someone else's page: a label smart link, a ticketing site or a store with its own tracking. Every door below was opened and checked on October 9, 2026.",
 "doors": [
  {
   "where": "Instagram bio",
   "says": "\"FALL out now\", linking broke.ffm.to/fall-single. The Feature.fm page names Create Music Group as its data controller, so the Meta, TikTok and Snap pixels on it build the label's audiences, not Dillon's. The biggest door, 3.25M followers, opens onto someone else's data.",
   "state": "away"
  },
  {
   "where": "TikTok bio",
   "says": "\"Fall - Out Now\", now linking dillonfrancis.com. It pointed at the Fall smart link in the earlier check, so this is the one bio that sends 1.7M followers home.",
   "state": "own"
  },
  {
   "where": "X bio",
   "says": "\"FALL out now\", with dillonfrancis.com in the website field. The October 7 release post sends fans to the label smart link instead.",
   "state": "own"
  },
  {
   "where": "YouTube header",
   "says": "The description says \"FALL out now\" with the Fall link, but the first header link is still CRY MYSELF TO SLEEP (broke.ffm.to/cry-myself-to-sleep). The other five go to subscribe, Facebook, Twitter, Instagram and TikTok. Nothing points to the website, the store or sign-up.",
   "state": "stale"
  },
  {
   "where": "dillonfrancis.com",
   "says": "WordPress and Elementor, built by 9/9: four buttons (Tour, Music, Merch, Sign up), a Seated widget with seven dates, an 18-video YouTube playlist and a Laylo embed. The featured Fall video plays from Monstercat Instinct's channel, so those views count for Monstercat.",
   "state": "own"
  },
  {
   "where": "Fan sign-up",
   "says": "Laylo, SMS only: \"SIGN UP FOR SHIT\", first name and phone number, with email turned off. A Community text line still sits on an old Linktree from the Mad Decent era. No email list on the site, and no Discord or fan club found.",
   "state": "thin"
  },
  {
   "where": "Merch store",
   "says": "Shopify on thedillonfrancisstore.myshopify.com, with no custom domain (idgafos.com redirects to it). Linked from the site's Merch button and from no bio. It holds the only email capture anywhere, a newsletter block and a 10%-off email and SMS pop-up, behind its own separate Meta pixel and no Google Analytics.",
   "state": "away"
  },
  {
   "where": "Spotify profile",
   "says": "2,536,664 monthly listeners. The Artist Pick is current (\"FALL out now!\", pointing to the Every Dillon Francis Song Ever playlist) and nine concerts are listed. The bio opens \"Music is my passion\".",
   "state": "own"
  },
  {
   "where": "Apple Music",
   "says": "Fall is listed as the latest release (October 7), with eight upcoming concerts and the 2025 Forget video with Albert Hype at the top of the music videos. Like Spotify, it is current, and like Spotify it leads nowhere he owns.",
   "state": "own"
  },
  {
   "where": "Sorry My Love",
   "says": "Instagram (2,529 followers) says \"'Hate Me' out now\" but links Bendito. sorrymylove.com is a parked domain listed for sale at $15,000. The real site, sorrymylovemusic.com, is a one-page Wix site whose footer Spotify and Apple Music icons still point to Wix's own X and LinkedIn. The @sorrymylove YouTube handle belongs to an unrelated account.",
   "state": "stale"
  }
 ],
 "scores": [
  {
   "k": "Performance",
   "v": 21,
   "note": "Largest contentful paint 24.2 seconds on mobile, a 9 MB page led by a background video and a 2,006 px logo image. A second run scored 24"
  },
  {
   "k": "Accessibility",
   "v": 93,
   "note": "One unlabeled link, the Sorry My Love Instagram icon"
  },
  {
   "k": "Best practices",
   "v": 75,
   "note": "Third-party cookies, stretched images and browser issues"
  },
  {
   "k": "SEO",
   "v": 92,
   "note": "Meta description and social tags present. Five links search engines cannot follow"
  }
 ],
 "pixels": [
  {
   "k": "Meta Pixel",
   "ok": true,
   "note": "Installed on dillonfrancis.com"
  },
  {
   "k": "Google Analytics or Tag Manager",
   "ok": true,
   "note": "GA4 through a WordPress plugin. No Tag Manager"
  },
  {
   "k": "TikTok Pixel",
   "ok": false,
   "note": "Not on the site itself. One fires only inside the Laylo sign-up embed"
  },
  {
   "k": "Snap pixel",
   "ok": false,
   "note": "Only on the label's smart link"
  },
  {
   "k": "Email capture",
   "ok": false,
   "note": "None on dillonfrancis.com. The only email field is on the store"
  },
  {
   "k": "One audience",
   "ok": false,
   "note": "Site, store and smart link each fire a different Meta pixel"
  }
 ],
 "ads": [
  {
   "k": "Exchange LA, Halloween, October 31",
   "n": "6 ads",
   "d": "5 live since September 2, 1 since October 1"
  },
  {
   "k": "Church Nightclub Denver, December 26",
   "n": "4 ads",
   "d": "Live since October 6"
  },
  {
   "k": "Toronto October 16 and Winnipeg October 24",
   "n": "3 ads",
   "d": "Live since October 2 and 6, Canada only"
  },
  {
   "k": "Marquee New York, August 15",
   "n": "2 ads",
   "d": "July 27 to August 16"
  },
  {
   "k": "TAO Chicago, October 29",
   "n": "1 ad",
   "d": "Live since October 1"
  },
  {
   "k": "Fall, Cry Myself to Sleep, the store, sign-up",
   "n": "None found",
   "d": ""
  }
 ],
 "autocomplete": [
  {
   "q": "dillon francis",
   "a": [
    "songs",
    "fall",
    "tour",
    "flosstradamus",
    "net worth",
    "seattle",
    "boise",
    "nyc",
    "mission ballroom"
   ]
  },
  {
   "q": "dillon francis t",
   "a": [
    "tour",
    "tickets",
    "tour dates",
    "top songs",
    "turn your head and cough",
    "tour 2026",
    "tonight"
   ]
  },
  {
   "q": "dillon francis f",
   "a": [
    "fall",
    "flosstradamus",
    "famous songs",
    "flosstradamus tour",
    "fart with reverb",
    "fit social"
   ]
  },
  {
   "q": "dillon francis s",
   "a": [
    "songs",
    "seattle",
    "san diego",
    "san antonio",
    "shows",
    "setlist",
    "say less",
    "spotify",
    "shirt"
   ]
  },
  {
   "q": "dj hanzel",
   "a": [
    "one deeper",
    "academy",
    "san diego",
    "vs dillon francis",
    "genre",
    "dillon francis",
    "los angeles"
   ]
  }
 ],
 "search": "The name is clean. Every Google suggestion for “dillon francis” is about him, and two days after release “fall” already sits in the top three. Fans search for songs, tours, cities and the Flosstradamus pairing, which fills six of the ten “f” suggestions, and DJ Hanzel still searches as its own act. Page one is Wikipedia, dillonfrancis.com, Instagram, YouTube, the discography, IMDb and Bandsintown. No other artist or brand competes for the name, so the work is not winning the search back. It is catching the people who already arrive."
};

export const DIRECTION = {
 "intro": "The research points to one move: stop running the comedy and the music as two feeds. Make every release an episode of the show he already runs, with Dillon as the host, the bits as the segments and the smiley as the mark. Everything below is a starting point for the conversation, not a finished identity.",
 "position": {
  "pre": "The ",
  "em": "funniest",
  "post": " person in dance music.",
  "b": "Dillon is the producer who made the joke part of the record. Fans treat it that way already: comedy is a fifth of all fan conversation, and the songs that land hardest arrive as a punchline. Nobody else in the peer set owns written, character-driven comedy. FISHER is spontaneous, Steve Aoki is stunts, Diplo is provocation. Dillon writes the bit."
 },
 "world": [
  {
   "k": "Dillon",
   "r": "The host",
   "b": "The person in the frame and the writer of every bit. Mock-heroic captions, the studio diary voice, sincere about friends."
  },
  {
   "k": "The Show",
   "r": "The franchise",
   "b": "Recurring bits become segments: Ring Cam, Chat, Stop The Show, Did They Steal My Song. Peers and creators are guests. Every new single is the musical guest."
  },
  {
   "k": "The smiley",
   "r": "The mark",
   "b": "Promoted from a merch doodle to the logo. Locked with the hand-drawn wordmark on every cover, end card, stage screen, pass and avatar."
  }
 ],
 "era": {
  "k": "THE DILLON FRANCIS SHOW",
  "tag": "Working frame for the next twelve months",
  "b": "Treat the feed as a late-night show he hosts. Bits are segments, peers and creators are guests, DJ Hanzel gets a recurring slot, and every new song is the performance at the end. It matches what already wins on his grid, gives YouTube a reason to exist again, and turns a release week into an episode instead of an announcement."
 },
 "system": [
  {
   "k": "Wordmark",
   "b": "The hand-drawn merch wordmark becomes the primary lockup. It is already his most on-voice mark. The heavy sans on the website retires."
  },
  {
   "k": "The mark",
   "b": "The smiley becomes the logo: covers, end cards, stage screens, the store button and the avatar on every channel."
  },
  {
   "k": "Palette",
   "b": "Black, white and the smiley's acid green as the one owned accent. Release art can change every single; the lockup and the accent stay."
  },
  {
   "k": "Type on video",
   "b": "One typeface, one color and one position for every premise line, so a clip reads as Dillon before the caption loads."
  },
  {
   "k": "Characters",
   "b": "DJ Hanzel keeps his own look, black and red with the sunglasses, as a recurring guest of the show rather than a separate account to feed."
  },
  {
   "k": "Fan identity",
   "b": "Give the people in on the joke a name. IDGAFOS has been a song, a label and a rallying cry since 2011, and it is still on the merch."
  }
 ],
 "pillars": [
  {
   "k": "The Bit",
   "b": "The song as the punchline. A premise line in the first frame, the track as the payoff, 15 to 30 seconds."
  },
  {
   "k": "The Cast",
   "b": "Peers, creators, fans and friends in the frame, posted as collabs so both audiences receive it. Fall gets a cast too."
  },
  {
   "k": "The Room",
   "b": "Live with stakes: one Stop The Show moment per date, crowd-made moments, the payoff post the next day."
  },
  {
   "k": "The Studio",
   "b": "Needs Words: the work in progress, fans writing and naming it in the comments, a visible road from studio clip to release."
  }
 ],
 "platforms": [
  {
   "k": "Instagram",
   "r": "Home",
   "b": "Keep about 3 posts a week and swap teasers for premise-led bits. One collab post every week."
  },
  {
   "k": "TikTok",
   "r": "Growth",
   "b": "Native cuts, reply-to-comment videos and stitches with fans. Promote only posts that already won organically."
  },
  {
   "k": "YouTube",
   "r": "The show",
   "b": "One long-form episode or full set a month, Shorts cut from the episode, a Hanzel slot."
  },
  {
   "k": "X",
   "r": "The writers' room",
   "b": "Long personal posts and live commentary. The Alesso and Zedd posts show it works."
  }
 ]
};

export const PLAN = {
 "intro": "A social plan built on the dates already on the calendar, so the fall run feeds the show and the show is ready for 2027.",
 "phases": [
  {
   "k": "Foundation",
   "when": "Weeks 1 to 2",
   "items": [
    "Five premises written for Fall, each ending on the hook of the song",
    "Lock the wordmark, the smiley, on-screen type and the end card",
    "One owned link hub with email and SMS capture and Dillon's own pixels",
    "Refresh the YouTube header links and every bio"
   ]
  },
  {
   "k": "The fall run",
   "when": "October 16 to December 26",
   "items": [
    "Toronto, Montreal, Winnipeg, Exchange LA, Ember Shores, SILO Dallas, The Church Denver: one Stop The Show moment per date",
    "Halloween at Exchange LA as a DJ Hanzel takeover",
    "Ring Cam and Chat return weekly, one collab post a week",
    "Put budget only behind posts that already won organically"
   ]
  },
  {
   "k": "The show",
   "when": "January to March 2027",
   "items": [
    "Episode one of the show on YouTube, Shorts cut from it",
    "Name the fanbase and give it a list to join",
    "The next single launched as an episode, with an ID to release road",
    "Peer guests booked around shared bills"
   ]
  },
  {
   "k": "The season",
   "when": "Spring and summer 2027",
   "items": [
    "Festival season and the Wynn residency shot as episodes",
    "A smiley capsule on his own store, sold at shows and online",
    "A Spanish-language segment for Mexico City and US Latin fans",
    "Quarterly format review against the peer set"
   ]
  }
 ],
 "series": [
  {
   "k": "Ring Cam",
   "b": "Night-vision doorbell skits where the new song is the punchline. The first two reached 512,421 and 329,936 plays, then the series stopped."
  },
  {
   "k": "Chat",
   "b": "The fake stream “to 100k viewers”, his best post of the summer at 543,815 plays. Made weekly, and a real monthly live stream behind it."
  },
  {
   "k": "Did They Steal My Song?",
   "b": "A chart hit next to his own record. Two posts, a median 927,627 plays, 7.8 times his typical reel. Never repeated."
  },
  {
   "k": "Stop The Show",
   "b": "A stakes moment at every date, filmed from the booth, with the payoff the next day. A fan's basketball shot reached 409,851 plays."
  }
 ],
 "kpis": [
  {
   "k": "Instagram median reel plays",
   "now": "46,156",
   "to": "200,000",
   "when": "90 days, near the summer baseline"
  },
  {
   "k": "TikTok organic median plays",
   "now": "2,995",
   "to": "25,000",
   "when": "90 days"
  },
  {
   "k": "TikTok plays per follower",
   "now": "0.004",
   "to": "0.02",
   "when": "6 months, the legacy-star range"
  },
  {
   "k": "YouTube long-form",
   "now": "None since Oct 2025",
   "to": "1 episode a month",
   "when": "From January 2027"
  },
  {
   "k": "Owned list",
   "now": "SMS only",
   "to": "25,000 email and SMS",
   "when": "6 months"
  },
  {
   "k": "Instagram reply rate",
   "now": "1.2%",
   "to": "5%",
   "when": "90 days"
  }
 ],
 "measure": [
  "Reach and engagement by platform, against the ten peers",
  "Median plays by series and by hook, so formats earn their slot",
  "Organic and promoted reported separately",
  "List sign-ups by source: link hub, shows, drops",
  "Spotify listeners, saves and streams around every release",
  "Fan comments read and tagged weekly, questions answered"
 ]
};

export const CREATIVE = {
 "intro": "What the direction could look like, made for this audit: three short videos and six stills built on his real hand-drawn wordmark and smiley. No likeness of Dillon was generated.",
 "label": "AI-generated examples, directional only. Not final artwork",
 "videos": [
  {
   "k": "Ring Cam",
   "fmt": "TikTok and Reels, 9:16",
   "video": "ring-cam.mp4",
   "poster": "ring-cam-frame",
   "top": "RING CAM, EP. 3",
   "big": "3:04am and I forgot to play you the new one",
   "cta": "Fall is out: link in bio",
   "why": "The format that already won, pointed at the single. Premise line in frame one, the song as the payoff, the ask on screen."
  },
  {
   "k": "Stop The Show",
   "fmt": "TikTok and Reels, 9:16",
   "video": "stop-the-show.mp4",
   "poster": "stop-the-show-frame",
   "top": "STOP THE SHOW",
   "big": "if he makes this shot we play Fall twice",
   "cta": "Next: Exchange LA, 10.31",
   "why": "One stakes moment per date, shot from the booth, with the date and the next show on screen."
  },
  {
   "k": "The show open",
   "fmt": "YouTube, 16:9",
   "video": "show-open.mp4",
   "poster": "show-key-art",
   "wide": true,
   "why": "The smiley as the set, the decks as the host desk. The open for a monthly long-form episode."
  }
 ],
 "stills": [
  {
   "img": "show-key-art",
   "k": "The show",
   "line": "The smiley as the set",
   "why": "Key art for a monthly long-form show, with the decks built into the host desk."
  },
  {
   "img": "cover-system",
   "k": "Cover system",
   "line": "The last three singles, one system",
   "why": "Fall, Cry Myself To Sleep and Make You Move with the hand-drawn wordmark top left, the title bottom left and the smiley bottom right. Built from the real covers and marks."
  },
  {
   "img": "hanzel-poster",
   "k": "DJ Hanzel takeover",
   "line": "Halloween at Exchange LA",
   "why": "The character returns as a guest of the show, on a date already on the calendar."
  },
  {
   "img": "merch-capsule",
   "k": "Capsule",
   "line": "The smiley you can wear",
   "why": "The mark and the wordmark on a black and acid green capsule, whoopee cushion included."
  },
  {
   "img": "studio-needs-words",
   "k": "Needs Words",
   "line": "The studio series, recurring",
   "why": "His highest-conversation format, made into a named series fans help finish."
  },
  {
   "img": "chat-set",
   "k": "Chat",
   "line": "The fake stream gets a set",
   "why": "A fixed, recognizable room for the format that won the summer."
  }
 ]
};

export const WHY = {
 "intro": "Crowd Control is a culture-first marketing agency. We run social, paid, creative and data for artists, labels, tours and the brands around them, and we build research like this for every client before we spend a dollar.",
 "points": [
  {
   "h": "Comedy and music under one roof",
   "b": "Writers, editors and strategists who build the bit and the release plan together, so the joke and the song ship as one post."
  },
  {
   "h": "Tour content as a system",
   "b": "We plan every date as a content shoot and turn a run of shows into a run of episodes, with per-market media where tickets need it."
  },
  {
   "h": "Listening before posting",
   "b": "Video AI, social listening and peer teardowns decide what we make, the way this audit was built."
  },
  {
   "h": "Reporting you can open",
   "b": "A live report page refreshed every week, for Dillon, management and the label."
  }
 ],
 "clients": [
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
  "Prima"
 ]
};

export const NEXT = {
 "steps": [
  {
   "h": "Walk-through call",
   "b": "We take the team through this audit and hear where Dillon is headed in 2027."
  },
  {
   "h": "Two-week foundation",
   "b": "Five Fall premises, the locked lockup and end card, the link hub and the tracking, in place before Exchange LA on Halloween."
  },
  {
   "h": "The fall run, on social",
   "b": "Ring Cam and Chat back weekly, one Stop The Show moment per date through The Church Denver on December 26."
  }
 ],
 "need": [
  "Instagram, TikTok and YouTube access",
  "Meta Business Manager and TikTok Ads access",
  "Laylo and Shopify access",
  "Set, crowd and studio footage archive",
  "Release and show calendar into 2027",
  "Label and partner contacts for collab posts"
 ],
 "book": "https://app.reclaim.ai/m/team-leads",
 "email": "geoff@crowdcontroldigital.com",
 "name": "Geoff Shames",
 "role": "Crowd Control Digital"
};

export const SOURCES = [
 "Instagram: Apify instagram-scraper, 260 profile posts (September 2024 to October 8, 2026) and 200 reels with play counts, plus the 40 most recent posts for each of ten peer artists, pulled October 9, 2026",
 "TikTok: Apify clockworks TikTok scraper and Tokscript, 300 @dillonfrancis videos (May 2024 to October 8, 2026) with TikTok's promoted flags, and the 40 most recent per peer",
 "YouTube: Apify YouTube scraper, 80 long-form videos, 200 Shorts and 20 streams. X: Apify tweet scraper, the 60 most recent items",
 "Streaming: Chartmetric API (artist 3920), Spotify listener and follower history and where people listen; kworb.net catalog streams, updated October 7, 2026",
 "Fans: 6,521 items (3,570 Instagram comments, 1,551 YouTube comments, 1,169 TikTok comments, 231 Reddit posts and comments), 6,262 analyzed. Theme and tone scored with rules checked against 250 hand-read comments. Sentiment is an analytical estimate",
 "Video AI: TwelveLabs Jockey knowledge store “Dillon Francis + peers (CCD)”, 40 videos, and a Pegasus 1.6 teardown of every video, each checked against frames we pulled",
 "Brand: 43 release covers since 2014 from the iTunes Search API and MusicBrainz Cover Art Archive; marks from dillonfrancis.com, the official store and official tour artwork",
 "Funnel: dillonfrancis.com, the store and smart link HTML and network capture, two Lighthouse mobile lab runs, Meta Ad Library, Google autocomplete and page one search results, October 9, 2026",
 "Career facts: Wikipedia, Mixmag, EDMTunes, EDM.com, Sacks & Co., bookingagentinfo and official posts",
 "Photography: Dillon Francis official Instagram. Peer thumbnails link to the original posts"
];

