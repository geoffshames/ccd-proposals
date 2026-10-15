/**
 * MARSHMELLO: social media and content audit (Crowd Control Digital).
 * Every figure below was pulled October 15, 2026 from a scrape, API, ad library,
 * Lighthouse run, video AI query or fetched page. Sources are listed in SOURCES.
 * Sentiment figures are analytical estimates.
 */

export const IMG = "/images/marshmello";
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
  { id: "pricing", label: "Pricing" },
  { id: "next", label: "Next" },
] as const;

export const HERO = {
  kicker: "Prepared for Marshmello and The Shalizi Group",
  title: "MARSHMELLO",
  line: "Social Media and Content Audit",
  sub: "Artist, brand, social, peers, fans, video AI, funnel, a content direction and a social plan.",
  body: "We measured everything public about Marshmello: 69 release covers since 2015, more than 500 of his own posts across Instagram, TikTok, YouTube and X, 400 posts from ten peer artists, 6,459 fan comments, 40 videos run through video AI, and every link a fan can tap. The short version: the biggest audience in dance music, a catalog fans still ask for by name, and a helmet that does far less work on screen than it could.",
  stats: [
    { value: 69, suffix: "%", label: "drop in median TikTok plays, 780,250 from October to February to 241,900 since July" },
    { value: 8.4, decimals: 1, suffix: "x", label: "the reach of his 2016 to 2019 nostalgia and catalog TikToks against his new release promo posts" },
    { value: 0.016, decimals: 3, label: "TikTok plays per follower, 9th of the 11 artists benchmarked, on the biggest following in the set" },
  ],
  date: "Audit date: October 15, 2026",
};

export const MARQUEE = ["Alone", "Silence", "Happier", "FRIENDS", "Joytime", "Mellogang", "Here With Me", "Come & Go", "El Merengue", "Shockwave", "Miles On It", "Melloween", "Close My Eyes"];

export const SUMMARY = {
  intro: "Marshmello has the largest following of any artist in this benchmark, a catalog that still earns six million Spotify streams a day, and the most recognizable character in dance music. Where there is room to grow is in how that audience is reached. The posts that travel furthest are about the helmet and the records fans grew up with; the release clips that now fill the feed travel least, and the people they reach end up on four different lists. The direction for 2027 puts the character back on screen, lets the catalog carry the new music, and gathers the Mellogang in one place Marshmello owns.",
  items: [
    { n: "01", to: "social", head: "The biggest audience, a shrinking reach", body: "Median TikTok plays fell from 780,250 (October to February) to 241,900 (July to October 15) on 25.5M followers. Instagram carried 32 of his own posts in twelve months, 22 of them photos and carousels, and none since September 23." },
    { n: "02", to: "video", head: "The helmet as a story outperforms the helmet at the decks", body: "His two biggest videos since early 2025 are about the mask itself: the first DIY helmet (17.8M plays) and a helmet bit tagged @martin (29.0M). Release clips filmed from behind at the decks land between 120,700 and 289,390." },
    { n: "03", to: "peers", head: "First on followers, 8th and 9th on reach", body: "1st of 11 artists on Instagram and TikTok followers. 8th on median reel plays (406,473 on 27.9M, against Martin Garrix's 1,774,552 on 15.3M) and 9th on TikTok plays per follower. Alan Walker, also masked, posts 4.4 TikToks a week at a 871,650 median." },
    { n: "04", to: "fans", head: "Fans are asking for 2016, and for an answer", body: "Nostalgia is 12.3% of 6,459 fan comments and holds 63.3% of all comment likes. The most liked comment in the set is \"2016 come back\" (79,784 likes). He replies to 0.4% of fan comments on Instagram and TikTok and none on YouTube." },
    { n: "05", to: "brand", head: "A world class symbol with no system around it", body: "69 covers since 2015 score 5.0 out of 10 for consistency: 8 for the helmet, 3 for the wordmark. Two different wordmarks are in use, and the 2020 to 2023 collab covers often leave the helmet out." },
    { n: "06", to: "funnel", head: "Four lists, two audiences, no website", body: "marshmello.com does not load. Fans sign up in four places that do not talk to each other, the store and the bio link fire different Meta pixels, all 25 live ads sell one San Francisco show, and release ads send fans to more Reels." },
  ],
};

export const ARTIST_INTRO = "Marshmello is a masked DJ and producer who runs his career through his own label, Joytime Collective, and licenses singles one at a time to Interscope, Mercury, Republic and others. In 2026 one character is spread across dance, country, hip-hop and rock singles, a Wynn Las Vegas season, Pokemon 30th anniversary arena shows, and businesses outside music such as the Burn Boot Camp partnership and Cooking with Marshmello. His Spotify catalog has passed 24.2 billion streams; monthly listeners fell from 67.9M to 48.2M between January 2024 and January 2026, and the 2026 singles have brought them back to about 55M.";

export const TIMELINE = [
  { y: "2016", h: "Joytime and Alone", b: "The debut album Joytime arrives in January on his own Joytime Collective. Alone, released on Monstercat in May, becomes his first Billboard Hot 100 entry (No. 28) and goes 5x Platinum." },
  { y: "2018", h: "Silence, FRIENDS and Happier", b: "Silence with Khalid (August 2017) tops dance charts in the US, UK and Australia. Happier with Bastille reaches No. 2 on the Hot 100 and a record 69 weeks at No. 1 on Dance/Electronic Songs; it is still his biggest song at 2.71B Spotify streams." },
  { y: "2019", h: "The Fortnite concert", b: "On February 2 he plays the first live concert inside Fortnite, reported at 10.7 million attendees. Forbes ranks him the second highest paid DJ of the year." },
  { y: "2020", h: "Juice WRLD and Shockwave", b: "Come & Go with Juice WRLD reaches No. 2 on the Hot 100. The 2021 album Shockwave, released independently on Joytime Collective, earns his first Grammy nomination." },
  { y: "2023", h: "Sugar Papi", b: "His Latin album with Anuel AA, Nicky Jam, Young Miko, Farruko and Manuel Turizo. El Merengue tops Billboard's Tropical Airplay chart and passes 1 billion Spotify streams." },
  { y: "2024", h: "Miles On It and The Roots", b: "Miles On It with Kane Brown debuts at No. 1 on both Billboard's dance and country song charts and goes 4x Platinum. Mellodeath Tapes Vol. I and The Roots album lean into the heavy side." },
  { y: "2026", h: "Five genres in one year", b: "Seven singles with Juice WRLD, Portugal. The Man, Thomas Rhett, Kelsea Ballerini, Viperactive, Cameron Whitcomb, and ILLENIUM and SACHA, plus the Wynn season and the Pokemon Night Out arena shows." },
];

export const LISTENERS = {
  months: ["Jan 24", "Feb 24", "Mar 24", "Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25", "Apr 25", "May 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Oct 25", "Nov 25", "Dec 25", "Jan 26", "Feb 26", "Mar 26", "Apr 26", "May 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26", "Oct 26"],
  values: [67886980, 68232980, 67099316, 67686550, 61710010, 63486884, 62023228, 60974210, 60895564, 58427850, 58479300, 57266604, 55320690, 53883500, 52540050, 50918070, 51460730, 51808610, 53878210, 53504492, 54310050, 51318450, 50486924, 49236212, 48169730, 48905504, 48644084, 49174096, 52504420, 52922976, 53075332, 53606452, 56149000, 56248324],
  lo: 45e6,
  hi: 70e6,
  grid: [45e6, 50e6, 55e6, 60e6, 65e6, 70e6],
  aria: "Spotify monthly listeners from 67.9M in January 2024 to a low of 48.2M in January 2026 and 56.2M in October 2026",
  marks: [
    { i: 17, l: "Save My Love" },
    { i: 26, l: "We Don't Get Along" },
    { i: 32, l: "Close My Eyes" },
  ],
};

export const ARTIST_STATS = [
  { v: "24.2B", l: "Spotify streams across all credits (kworb, October 14, 2026)" },
  { v: "54.8M", l: "Monthly listeners, down from 67.9M in January 2024, up from 48.2M in January 2026 (Chartmetric)" },
  { v: "6.04M", l: "Spotify streams per day, 41% from five songs released 2017 to 2023" },
  { v: "27.9M", l: "Instagram followers, plus 58.7M on YouTube and 25.5M on TikTok" },
];

/** Lifetime Spotify streams, billions. */
export const CATALOG = [
  { k: "Happier (with Bastille)", y: "2018", v: 2.71 },
  { k: "Silence (with Khalid)", y: "2017", v: 1.99 },
  { k: "FRIENDS (with Anne-Marie)", y: "2018", v: 1.71 },
  { k: "Wolves (Selena Gomez with Marshmello)", y: "2017", v: 1.58 },
  { k: "Leave Before You Love Me (with Jonas Brothers)", y: "2021", v: 1.21 },
  { k: "Come & Go (Juice WRLD with Marshmello)", y: "2020", v: 1.18 },
  { k: "El Merengue (with Manuel Turizo)", y: "2023", v: 1.04 },
  { k: "Here With Me (with CHVRCHES)", y: "2019", v: 0.82 },
];

/** Lifetime Spotify streams, millions. */
export const RECENT = [
  { k: "Save My Love (with Ellie Goulding and AVAION, Jun 2025)", v: 41.76 },
  { k: "Holy Water (with Jelly Roll, Aug 2025)", v: 37.88 },
  { k: "Another Drink (with Kelsea Ballerini, Jun 2026)", v: 25.6 },
  { k: "We Don't Get Along (with Juice WRLD, Mar 2026)", v: 19.29 },
  { k: "Phoenix (with Portugal. The Man, Mar 2026)", v: 9.93 },
  { k: "Hollow (with Cameron Whitcomb, Aug 2026)", v: 6.31 },
  { k: "Kissin My Friends (with INJI, Dec 2025)", v: 4.64 },
  { k: "Close My Eyes (with ILLENIUM and SACHA, Sep 2026)", v: 3.72 },
  { k: "How I Feel (with Viperactive, Aug 2026)", v: 1.48 },
];

export const ARTIST_NOTES = {
  catalog: "The catalog does the daily work. Happier still draws 650,927 streams a day eight years on, and Happier, Silence, El Merengue, Leave Before You Love Me and FRIENDS together are 41% of all daily plays. Every release since June 2025 in the chart adds up to about 150.6M streams, less than 6% of Happier alone. The live signals: Another Drink is at 218,748 a day, Hollow at 82,511 and Close My Eyes at 51,893 five weeks after release (kworb, October 14, 2026).",
  tier: "At about 55M monthly listeners he is No. 48 in the world on Spotify, and Chartmetric rates his career stage superstar with a steady trend and an artist score of 97.0. Listeners fell by 29% from January 2024 to January 2026, then the 2026 singles lifted them 17% to 56.2M in early October. Spotify followers kept growing the whole time, from 34.6M to 35.4M, which reads as a loyal audience that returns when it is given a reason.",
  listen: "The United States leads with 8.72M monthly listeners, then Germany (7.70M), Mexico (3.89M), Italy (3.68M), Poland (3.12M), the UK (2.49M) and Australia (2.47M); India read 7.76M at its last update in September. The top city is Mexico City at 919,235, ahead of Sydney, London, Sao Paulo and Santiago, with Chicago the first US city at 292,127 (Chartmetric, October 2026). Spanish and Portuguese speakers are a large share of the audience and of the comments.",
};

export const BRAND_INTRO = "The helmet is one of the most recognizable icons in music. Across 69 covers since 2015, the system around it has reset many times: SoundCloud collage, then the helmet as a character, then covers styled to each partner's world, a separate heavy bass track, and now a quieter type led look. The constant is the helmet face, the two X eyes and the smile, which carries recognition on its own even when nothing else holds.";

export const ERAS = [
  { k: "Helmet glyph over photo collage", when: "2015-2017", label: "Self-released, Joytime Collective, Monstercat, OWSLA", covers: ["2015-blocks", "2015-keep-it-mello", "2015-summer", "2015-wavez", "2016-alone", "2016-colour", "2016-joytime", "2016-ritual", "2017-chasing-colors", "2017-moving-on"], read: "The SoundCloud years run on one move: the white helmet glyph dropped in the center of a saturated stock photo or watercolor wash, with the title in a loose display face underneath. The glyph is the only constant, while type, palette and image source change on every release. It reads as a fan made template more than a designed system, but the helmet is so simple that it carries recognition on its own. Monstercat's Alone is the one outlier, built inside the label's house style." },
  { k: "The helmet becomes a character", when: "2017-2019", label: "Joytime Collective, with RCA, Interscope and Astralwerks partners", covers: ["2017-love-u", "2017-silence", "2017-wolves", "2017-you-me", "2018-bayen-habeit", "2018-fly", "2018-friends", "2018-happier", "2018-joytime-ii", "2018-project-dreams", "2018-spotlight", "2019-biba", "2019-here-with-me", "2019-joytime-iii", "2019-one-thing-right", "2019-rescue-me", "2019-roll-the-dice", "2019-tongue-tied"], read: "The peak era and the most coherent one. The helmet stops being a stamp and starts acting: a doodle in love on Love U, a stitched doll on FRIENDS, a deflated yellow smiley on Happier, a drip on Here With Me, a cartoon castaway on Rescue Me. A small helmet glyph sits bottom center on most covers as a sign off, which ties very different art styles together. Backgrounds and type still change every time, so the system lives in the character, not in a grid." },
  { k: "Feature first, genre matched singles", when: "2020-2023", label: "Joytime Collective with Interscope, Island, Republic, RCA, Columbia, Sony Music Latin", covers: ["2020-be-kind", "2020-been-thru-this-before", "2020-come-go", "2020-ok-not-to-be-ok", "2020-too-much", "2021-leave-before-you-love-me", "2022-american-psycho", "2022-before-u", "2022-bye-bye", "2022-estilazo", "2022-numb", "2023-el-merengue", "2023-esta-vida", "2023-fell-in-love", "2023-mellokillaz", "2023-other-boys", "2023-party-jumpin", "2023-sugar-papi"], read: "As the catalog spread into pop, hip-hop and Latin, each cover was styled to the partner's world instead of Marshmello's: a line drawn flower for Halsey, gothic type for Southside, lips and a sugar cube for Sugar Papi. The bottom center sign off mostly disappears, and on several covers (Be Kind, Too Much, Leave Before You Love Me, American Psycho) the helmet is absent or reduced to a silhouette. Individually many are strong; side by side they read as eighteen different artists. This is where recognizability drops most." },
  { k: "The heavy side: dubstep, Mellodeath and riddim", when: "2020-2024", label: "Joytime Collective", covers: ["2020-crusade", "2021-house-party", "2021-shockwave", "2024-ceremony", "2024-it-s-riddim-time", "2024-mellodeath-tapes-vol-i", "2024-no-man-s-land", "2024-rave-repeater"], read: "The bass releases run on a separate visual track of dark metal illustration, gothic frames and blackletter type, most fully realized on Ceremony and Mellodeath Tapes Vol. I with Svdden Death. Shockwave is the bridge, a clean 3D render of the helmet in liquid white and one of the strongest single images in the catalog. The heavy covers speak fluently to the dubstep audience, but outside Shockwave and It's Riddim Time the helmet is hard to find." },
  { k: "Type first minimalism and the country crossover", when: "2024-2026", label: "Joytime Collective with Big Loud and Mercury, Republic, Interscope and Polydor", covers: ["2024-miles-on-it", "2024-the-roots", "2025-better-man-than-me", "2025-fale-entao", "2025-holy-water", "2025-kissin-my-friends", "2025-save-my-love", "2025-slow-motion", "2026-another-drink", "2026-close-my-eyes", "2026-hollow", "2026-how-i-feel", "2026-phoenix", "2026-we-don-t-get-along", "2026-where-we-go"], read: "The current run is quieter and more editorial: big black or red type on paper textures (Holy Water, Save My Love, Where We Go, Hollow), black and white photography (The Roots, Slow Motion, Another Drink), and one conceptual still life (How I Feel, a helmet half buried in sand). A red, black and off white palette is starting to repeat across the country singles, the closest the catalog has come to a color system. Close My Eyes and Phoenix break the pattern, so it is still a habit rather than a rule." },
];

export const CONSISTENCY = [
  { k: "Helmet and character", v: 8, n: "One of the most recognizable silhouettes in music; it anchors the 2015 to 2019 covers but drops off most 2020 to 2023 collab art" },
  { k: "Series discipline", v: 6, n: "Joytime I to III share a lockup, but there is no Joytime IV and Mellodeath stops at Vol. I" },
  { k: "Color", v: 4, n: "No fixed palette in eleven years; only the 2025 to 2026 red, black and off white singles start to repeat" },
  { k: "Cover to tour to merch", v: 4, n: "The current admat sets his name in the promoter's type with no helmet; the store sells catalog tees rather than current era art" },
  { k: "Wordmark", v: 3, n: "A bubble wordmark in the store header, a different geometric caps wordmark in its share image, and almost no cover uses either" },
];

export const CONSISTENCY_SUMMARY = {
  overall: 5.0,
  top: 8,
  topLabel: "for the helmet, the asset that does all the brand work",
  note: "A world class symbol and a weak system around it. The newest type first covers and the red, black and white country run show the start of a discipline that can be formalized across covers, admats and merch.",
};

export const ASSETS = [
  { k: "The helmet", v: "HELMET", b: "A faceless white helmet anyone can wear, so the character works as a toy, a costume, a Fortnite skin, a cookbook cover and a gym playlist without depending on one face.", proof: "Once the best selling Halloween costume at Spirit Halloween (Rolling Stone); Coca-Cola and Burn Boot Camp both built packaging and programs around the look; fans wear light up helmets in the crowd at his shows." },
  { k: "Dance chart dominance", v: "143 WKS", b: "More cumulative weeks at No. 1 on Billboard's Hot Dance/Electronic Songs chart than any other act, and he keeps adding to it by crossing into other genres.", proof: "Happier spent a record 69 weeks at No. 1; Miles On It with Kane Brown held No. 1 for a full year and also topped Country Airplay." },
  { k: "Gaming and youth reach", v: "10.7M", b: "The first artist to prove a concert inside a video game could work at scale, with a young audience that arrives through games, kids content and licensed IP.", proof: "Fortnite concert attendance of 10.7 million (2019); he headlines the 2026 Pokemon 30th anniversary arena shows at Intuit Dome and The O2." },
];

export const WORDMARKS = {
  intro: "The marks in active use in October 2026, from his store, his label's site and a current show listing. They show three different typographic voices for one artist, and the strongest mark of all, the helmet face, appears in none of the wordmarks except as two eyes.",
  items: [
    { img: "marshmello-wordmark", png: true, k: "Bubble wordmark", d: "Rounded, hand cut capitals spelling MARSHMELLO, served as the logo in the header of marshmellomusic.com, the official store. Rendered here from that file." },
    { img: "marshmello-bar-logo", png: true, k: "Helmet eyes with block wordmark", d: "The two X shaped helmet eyes stacked over MARSHMELLO in a heavy geometric sans, in gray. This is the share image set on marshmellomusic.com, a second wordmark that competes with the first." },
    { img: "joytime-collective-logo", png: true, k: "Joytime Collective logo", d: "Stacked JOYTIME COLLECTIVE logotype with a 3D smiley in place of the O, from the header of joytimecollective.com. The store sells Joytime tees and hoodies with this mark." },
    { img: "lost-in-dreams-sf-admat", png: false, k: "Lost In Dreams admat, October 30, 2026", d: "Official admat for the Lost In Dreams Midway Block Party in San Francisco, from Insomniac's event page. Marshmello headlines in the festival's type, with no helmet and no Marshmello wordmark." },
  ],
  note: "The strongest unifying mark is the helmet face itself, the two X eyes and the smile. It works at favicon size, on covers, on stage and on merch, while the two wordmarks compete with each other and rarely appear outside the store.",
};

export const VOICE = [
  { k: "Self-aware humor", e: "“We tried to get rid of this song but it rose from the ashes. Phoenix with @portugaltheman this Friday.”" },
  { k: "Playing with the helmet myth", e: "“It’s always been just me under the helmet but Ryan Reynolds is always welcome to audition”" },
  { k: "The DJ's point of view", e: "“I kick off my set with this song and it goes hard every time.”" },
  { k: "Tribute and loyalty", e: "“I know this one got leaked a minute ago, but here it is official. LLJW.”" },
];

export const VOICE_NOTE = {
  strong: "The voice is there. It rarely reaches the screen.",
  body: "The captions are funny, dry and in on the joke, and his most personal X post of the year, about listening to frost children and underscores, reached 420,902 views against 37K to 114K for release posts. Almost none of that voice appears as text inside the videos, where peers put their best lines.",
};

export const CHANNELS = [
  { name: "Instagram", handle: "@marshmello", followers: "27,858,653", last: "Sep 23, 2026", state: "32 posts of his own in twelve months, 22 of them photo carousels. Median reel 406,473 plays. Nothing posted since September 23." },
  { name: "TikTok", handle: "@marshmello", followers: "25,500,000", last: "Oct 8, 2026", state: "About 1.1 posts a week. Median plays fell from 780,250 (October to February) to 515,000 (March to June) and 241,900 (July to October)." },
  { name: "YouTube", handle: "@marshmello", followers: "58,700,000", last: "Sep 23, 2026", state: "18.2B lifetime views. 12 long-form uploads in twelve months, all visualizers, lyric or live videos, at a 382,610 median (0.65% of subscribers). Shorts median 115,770." },
  { name: "X", handle: "@marshmello", followers: "2,254,651", last: "Sep 9, 2026", state: "Release posts draw 37K to 114K views. The personal ones travel: the frost children and underscores post reached 420,902 views and LLJW 328,173." },
  { name: "Spotify", handle: "Marshmello", followers: "35,400,310", last: null, state: "54.8M monthly listeners on October 14. The Artist Pick is current (Close My Eyes); the About text is a third party bio that stops at December 2025." },
];

export const CADENCE = {
  months: ["2025-10", "2025-11", "2025-12", "2026-01", "2026-02", "2026-03", "2026-04", "2026-05", "2026-06", "2026-07", "2026-08", "2026-09", "2026-10"],
  ig: [1, 3, 1, 3, 2, 4, 0, 1, 0, 3, 8, 6, 0],
  tt: [4, 7, 5, 4, 3, 8, 2, 4, 1, 2, 8, 8, 2],
  ttPlays: [1204600, 586700, 614200, 1600000, 746600, 595000, 768100, 469000, 317400, 357500, 346350, 208500, 129350],
  note: "August and September 2026 were his busiest months of the year on both platforms, 14 Instagram posts and 16 TikToks, mostly How I Feel, Hollow and Close My Eyes promotion. They were also his weakest for TikTok reach: a 208,500 median in September against 1.6M in January. Volume came back; the reach did not, because of what was posted. Instagram has been quiet since September 23.",
};

/** TikTok, last 12 months, median plays by format. */
export const FORMATS = [
  { k: "2016 to 2019 nostalgia and catalog", n: "4 posts", v: 3150000 },
  { k: "Trend or bit", n: "5 posts", v: 1100000 },
  { k: "B2B and peer DJs", n: "6 posts", v: 583500 },
  { k: "Personal, travel and studio", n: "6 posts", v: 545950 },
  { k: "Live and crowd", n: "7 posts", v: 514800 },
  { k: "New release promo", n: "27 posts", v: 374100 },
];

export const RELEASE = [
  { k: "TikTok organic, median plays", rel: 370100, non: 577450, fmt: "n" },
  { k: "TikTok organic, median shares", rel: 252, non: 640, fmt: "n" },
  { k: "TikTok organic, median comments", rel: 249, non: 449, fmt: "n" },
];

export const RELEASE_NOTE = "Release posts trail on every measure. They are also 27 of his 57 TikToks in the last twelve months, the single biggest format on the account.";

export const PAID = {
  organic: { er: 6.68, plays: 628500, n: 253 },
  promoted: { er: 4.95, plays: 2400000, n: 47 },
  window: "since 2022",
  note: "Only two TikToks were promoted in the last twelve months, both for Hollow (762,100 and 952,600 plays). On Instagram, the Hollow release reel reached 61.9M plays with 310 comments, fewer than the 1,073 on the We Don't Get Along reel at 932,766 plays; Hollow is at 82,511 Spotify streams a day. Paid has bought views, but it has not been pointed at posts that already won organically or at anything that builds the list.",
};

/** Median comments per TikTok, last 12 months, by the caption's first line. */
export const HOOKS = [
  { k: "Question", v: 720, n: "2 posts" },
  { k: "Statement or joke line", v: 352, n: "35 posts" },
  { k: "Tag a collaborator", v: 342, n: "8 posts" },
  { k: "Release announcement", v: 230, n: "12 posts" },
];

export const HOOKS_NOTE = "A question doubles the comments of a statement, and he asked two in a year. Release announcements draw the fewest replies of any caption type.";

export const RARE = [
  { k: "Helmet lore", v: "44x", l: "his typical reel, using the 17.8M plays on \"The OG mask that started it all\". The first DIY helmet and the @martin helmet bit (29.0M on TikTok) are his two biggest videos since early 2025.", n: "2 posts since April 2025" },
  { k: "Catalog sound on TikTok", v: "3.7x", l: "his twelve month TikTok median, at 1.8M. Three posts set to Alone and Happier (9.6M, 1.8M and 1.7M) out-reached every new release post in the same window.", n: "3 of 57 TikToks" },
  { k: "Internet moments", v: "2.3x", l: "his twelve month TikTok median, at 1.1M. \"peak cinema\" (6.2M), \"y'all better get with the movement\" (1.5M) and \"Been in the studio too much, had to step outside\" (1.1M) joined a conversation already happening online.", n: "5 of 57 TikToks" },
];

export const TOP_POSTS = [
  { href: "https://www.tiktok.com/@marshmello/video/7562274993267019063", img: "7562274993267019063", who: "TikTok", metric: "9,600,000 plays", note: "this one feels good (set to Alone)", date: "2025-10-17", fmt: "Catalog" },
  { href: "https://www.instagram.com/reel/DImB4BppYP4/", img: "DImB4BppYP4", who: "Instagram reel", metric: "17,833,756 plays", note: "The OG mask that started it all.", date: "2025-04-18", fmt: "Helmet lore" },
  { href: "https://www.tiktok.com/@marshmello/video/7587138531567488287", img: "7587138531567488287", who: "TikTok", metric: "6,200,000 plays", note: "peak cinema", date: "2025-12-23", fmt: "Internet moment" },
  { href: "https://www.tiktok.com/@marshmello/video/7595701363183471886", img: "7595701363183471886", who: "TikTok", metric: "4,600,000 plays", note: "It's 2016 and the mannequin challenge is peak internet", date: "2026-01-15", fmt: "Nostalgia" },
  { href: "https://www.tiktok.com/@marshmello/video/7564800624307604750", img: "7564800624307604750", who: "TikTok", metric: "1,800,000 plays", note: "Legendary night @Martin Garrix (set to Alone)", date: "2025-10-24", fmt: "B2B" },
  { href: "https://www.tiktok.com/@marshmello/video/7590573656233790775", img: "7590573656233790775", who: "TikTok", metric: "1,700,000 plays", note: "2026 lets go (set to Happier)", date: "2026-01-02", fmt: "Catalog" },
  { href: "https://www.tiktok.com/@marshmello/video/7613114088293535007", img: "7613114088293535007", who: "TikTok", metric: "957,300 plays", note: "how he met Juice WRLD, told before We Don't Get Along", date: "2026-03-03", fmt: "Story" },
  { href: "https://www.instagram.com/reel/Da3yumQvn0S/", img: "Da3yumQvn0S", who: "Instagram reel", metric: "609,567 plays", note: "who let us behind that bar lol", date: "2026-07-16", fmt: "Personal" },
];

export const LOW_POSTS = [
  { href: "https://www.tiktok.com/@marshmello/video/7693316683875847438", img: "7693316683875847438", who: "TikTok", metric: "120,700 plays", note: "lights on in philly", date: "2026-10-05", fmt: "Live" },
  { href: "https://www.tiktok.com/@marshmello/video/7683222796167548173", img: "7683222796167548173", who: "TikTok", metric: "122,500 plays", note: "that feeling when the song finally drops at midnight", date: "2026-09-08", fmt: "Release promo" },
  { href: "https://www.instagram.com/reel/DdZiLJQvQCU/", img: "DdZiLJQvQCU", who: "Instagram reel", metric: "255,367 plays", note: "close my eyes @breakaway", date: "2026-09-17", fmt: "Release promo" },
  { href: "https://www.instagram.com/reel/Ddo1yO3yREa/", img: "Ddo1yO3yREa", who: "Instagram reel", metric: "289,390 plays", note: "Close My Eyes (live from red rocks) is now playing on YouTube", date: "2026-09-23", fmt: "Release promo" },
];

export const SOCIAL_NOTES = {
  youtube: "YouTube is the biggest channel he has: 58.7M subscribers and 18.2B lifetime views. In the last twelve months it carried 12 long-form uploads, every one a visualizer, lyric video or live clip of a new single, at a median 382,610 views, 0.65% of subscribers. Phoenix's official video (3.6M) and the Save My Love visualizer (9.4M) show the ceiling when a release gets real treatment. The livestreams stopped in 2020 and the Cooking with Marshmello channel (3.66M subscribers) has not posted in six years. Shorts mirror TikTok at a 115,770 median.",
  x: "X has 2,254,651 followers and works mostly as release and retweet traffic, 37K to 114K views per release post. The posts that travel are personal: the note about listening to frost children and underscores (420,902 views, 17,602 likes), LLJW on the Juice WRLD release night (328,173) and the Ryan Reynolds helmet reply (172,688). The voice that works on X rarely makes it into the videos.",
};

export type Peer = { k: string; igF: number; igPw: number; igReel: number; igEr: number; ttF: number; ttPw: number; ttPlays: number; ttPpf: number; self?: boolean };

export const PEERS: Peer[] = [
  { k: "Marshmello", igF: 27858653, igPw: 1.19, igReel: 406473, igEr: 0.52, ttF: 25500000, ttPw: 1.4, ttPlays: 395950, ttPpf: 0.016, self: true },
  { k: "DJ Snake", igF: 10223673, igPw: 1.47, igReel: 1381110, igEr: 1.48, ttF: 3900000, ttPw: 0.77, ttPlays: 188400, ttPpf: 0.048 },
  { k: "Diplo", igF: 6574097, igPw: 1.89, igReel: 632221, igEr: 0.52, ttF: 2900000, ttPw: 5.49, ttPlays: 132450, ttPpf: 0.046 },
  { k: "Steve Aoki", igF: 11318589, igPw: 3.64, igReel: 235232, igEr: 0.06, ttF: 4000000, ttPw: 2.59, ttPlays: 45400, ttPpf: 0.011 },
  { k: "Martin Garrix", igF: 15317785, igPw: 1.89, igReel: 1774552, igEr: 0.77, ttF: 2700000, ttPw: 1.4, ttPlays: 617150, ttPpf: 0.229 },
  { k: "David Guetta", igF: 12439583, igPw: 4.58, igReel: 993195, igEr: 0.26, ttF: 7000000, ttPw: 5.49, ttPlays: 158850, ttPpf: 0.023 },
  { k: "Alan Walker", igF: 10716527, igPw: 2.31, igReel: 702004, igEr: 0.56, ttF: 16400000, ttPw: 4.44, ttPlays: 871650, ttPpf: 0.053 },
  { k: "Kygo", igF: 5532300, igPw: 1.89, igReel: 653465, igEr: 0.47, ttF: 888300, ttPw: 2.52, ttPlays: 98800, ttPpf: 0.111 },
  { k: "Zedd", igF: 8029873, igPw: 1.54, igReel: 263477, igEr: -1, ttF: 1300000, ttPw: 1.47, ttPlays: 48650, ttPpf: 0.037 },
  { k: "John Summit", igF: 1979454, igPw: 1.96, igReel: 1972448, igEr: 5.92, ttF: 1200000, ttPw: 2.92, ttPlays: 471050, ttPpf: 0.393 },
  { k: "Dillon Francis", igF: 3248245, igPw: 2.38, igReel: 64277, igEr: 0.09, ttF: 1700000, ttPw: 2.45, ttPlays: 7295, ttPpf: 0.004 },
];

export const METRICS = [
  { id: "ttPpf", k: "TikTok plays per follower", fmt: "dec3", note: "Median plays on the last 40 videos over current followers." },
  { id: "igReel", k: "IG reel plays", fmt: "num", note: "Median plays on reels among the last 40 posts. For Marshmello, his own posts since September 2025." },
  { id: "ttPlays", k: "TikTok plays", fmt: "num", note: "Median plays on the last 40 videos, pinned videos included." },
  { id: "igEr", k: "IG engagement", fmt: "pct1", note: "Median (likes + comments) per post over current followers, last 40 posts with visible likes. Zedd hides likes on most posts." },
  { id: "igF", k: "IG followers", fmt: "num", note: "Followers on the pull date." },
  { id: "ttF", k: "TikTok followers", fmt: "num", note: "Followers on the pull date. TikTok rounds large counts." },
  { id: "igPw", k: "IG posts a week", fmt: "dec", note: "Own posts dated July 7 to October 15, 2026, per week. Marshmello averaged 0.6 a week across the full year." },
  { id: "ttPw", k: "TikTok posts a week", fmt: "dec", note: "Posts dated July 7 to October 15, 2026, per week." },
] as const;

export const PEER_INTRO = "Ten peers: the stadium names he came up with (DJ Snake, Diplo, Steve Aoki, Martin Garrix, David Guetta, Kygo and Zedd), Alan Walker as the other masked act, John Summit from the personality led house wave, and Dillon Francis. Marshmello has the biggest Instagram and TikTok in the set by a distance, yet ranks 8th on median reel plays, 9th on TikTok plays per follower and last on how often he posts to Instagram.";

export const PEER_READ = [
  { v: "1st", l: "of 11 on Instagram and TikTok followers. The audience is already there." },
  { v: "8th", l: "of 11 on Instagram reel plays. 406,473 on 27.9M followers; Martin Garrix gets 1,774,552 on 15.3M." },
  { v: "9th", l: "of 11 on TikTok plays per follower, at 0.016. Alan Walker, also masked, runs 0.053." },
  { v: "11th", l: "of 11 on Instagram posting, at 1.19 a week since July and 0.6 across the year." },
];

export const WORLDS = [
  { k: "Alan Walker", w: "The masked act who talks", b: "Running bits (\"my biggest music video has only 48 views\"), fan replies and 4.4 TikToks a week. The mask is the start of the joke, not the end of it." },
  { k: "Steve Aoki", w: "The cake", b: "One signature stunt fans film from the crowd, owned for years. The latest cake throw reached 25.5M plays." },
  { k: "Kygo", w: "2016, on purpose", b: "Catalog anniversaries and the Erling Haaland storyline turned a 2016 joke song into 18.0M plays and a release." },
  { k: "Diplo", w: "Diplo's Run Club", b: "A touring 5K and party that turns fans into a community outside the club, plus Major Lazer as a second world." },
  { k: "John Summit", w: "Experts Only", b: "A label turned festival wrapped around a failed accountant origin story his fans can retell." },
  { k: "Marshmello", w: "The helmet, mostly from behind", b: "The most recognizable icon in the set, shown at the decks in most posts and rarely given a storyline since 2021.", self: true },
];

export const BREAKOUTS = [
  { href: "https://www.tiktok.com/@alanwalkermusic/video/7675272860172176662", img: "7675272860172176662", who: "Alan Walker", metric: "55.2M plays", x: "63x his median", note: "\"Everyone tells me Faded is their favourite song...\" A masked artist joking about his own catalog" },
  { href: "https://www.tiktok.com/@steveaoki/video/7666885045914799373", img: "7666885045914799373", who: "Steve Aoki", metric: "25.5M plays", x: "562x his median", note: "\"This could be top 3 all time hits...\" The cake throw, a bit he owns" },
  { href: "https://www.instagram.com/reel/DaX7lJfoGFL/", img: "DaX7lJfoGFL", who: "Kygo", metric: "18.0M plays", x: "28x his median", note: "\"in 2016 Haaland made a song called 'Kygo Jo'\" A 2016 callback with a storyline" },
  { href: "https://www.instagram.com/reel/DaDn9zJvIAh/", img: "DaDn9zJvIAh", who: "Diplo", metric: "16.0M plays", x: "25x his median", note: "\"Nobody dancing at the tables around us knows we made this song\" The song as the punchline" },
];

export const BREAKOUTS_ASIDE = "Peer posts at 25x to 562x their own median";

export const PEER_PATTERNS = [
  { h: "The breakouts are bits about the artist's own legend", b: "Alan Walker joking that everyone's favorite song is Faded (55.2M), Kygo's 2016 Haaland song (18.0M), David Guetta's I'm Good 2022 against 2026 (2.6M) and Steve Aoki's cake (25.5M). Each one plays with something fans already know about the artist." },
  { h: "A mask does not stop a personality", b: "Alan Walker posts 4.4 TikToks a week, runs recurring bits and replies to fans, for a 871,650 median on 16.4M followers. Marshmello posts 1.4 a week for 395,950 on 25.5M. The helmet can carry more personality than it does today." },
  { h: "The premise is written on screen", b: "8 of the 10 peer breakouts we analyzed put a line of text on screen within the first second. 2 of Marshmello's 12 top performers do, and his strongest captions stay in the caption." },
  { h: "Volume alone does not buy reach", b: "David Guetta and Diplo post 5.5 TikToks a week for 0.023 and 0.046 plays per follower. Martin Garrix posts 1.4 a week, the same as Marshmello, for 0.229, fourteen times his reach per follower. What gets posted matters more than how often." },
];

export const FAN_INTRO = "We pulled 9,277 comments and posts on October 15, 2026: Instagram comments on 37 posts, TikTok comments on 35 videos, YouTube comments on 11 uploads and 250 Reddit items. After cleaning, 6,459 remain, and 94.1% of those with a clear tone are positive. The biggest signal is longing: nostalgia comments are 12.3% of the set and hold 63.3% of all comment likes. Fans ask for the 2016 sound, a face reveal, release dates and IDs for songs he plays live, and shows in Brazil, Mexico, Indonesia and India.";

export const FANS = {
  collected: 9277,
  analyzed: 6459,
  sources: [
    { k: "Instagram", v: 2630 },
    { k: "TikTok", v: 1868 },
    { k: "YouTube", v: 1935 },
    { k: "Reddit", v: 26 },
  ],
  positive: 94.1,
  themes: [
    { k: "New songs and how they sound", share: 14.4, pos: 59.3, neg: 1.9 },
    { k: "Nostalgia for the 2016 to 2019 era (Alone, Happier, the Fortnite set)", share: 12.3, pos: 37.8, neg: 1.6 },
    { k: "Love for Mello and shoutout requests", share: 9.3, pos: 79.6, neg: 0.3 },
    { k: "Collabs and features (ILLENIUM, SACHA, Ellie Goulding, Alan Walker asks)", share: 8.8, pos: 52.7, neg: 1.6 },
    { k: "Helmet, face reveal and identity jokes", share: 7.8, pos: 23.1, neg: 2.0 },
    { k: "Live shows, sets and come to my city asks", share: 6.5, pos: 49.5, neg: 2.2 },
    { k: "Spanish and Portuguese comments", share: 4.4, pos: 33.2, neg: 0.7 },
    { k: "Release requests (Joytime IV, IDs, full sets)", share: 1.7, pos: 39.8, neg: 3.5 },
    { k: "Juice WRLD and LLJW", share: 1.3, pos: 31.8, neg: 0.0 },
    { k: "Criticism (missing the old sound, country, too safe)", share: 1.0, pos: 3.0, neg: 55.2 },
  ],
  questions: [
    { k: "Face reveal and who is under the helmet", n: 99 },
    { k: "When is it out, ID requests and full sets", n: 77 },
    { k: "Collab and remix requests", n: 31 },
    { k: "Will you come to my city or country", n: 30 },
    { k: "Shoutout, reply and follow requests", n: 25 },
  ],
  replies: [
    { k: "Instagram", v: "0.4%", n: "21 comments from his account across 4,836 fan comments on 37 posts. Only 4 are top level, among them \"what other designs should i do?\" on the OG mask reel, which drew 14,942 likes and a thread of helmet ideas. The rest tag collaborators or reply to other accounts." },
    { k: "TikTok", v: "0.4%", n: "8 replies to fans across 2,090 fan comments on 35 videos. The replies stay in character and land (\"*touches grass*\", \"I do sing on some songs but not this one\"). He liked 26 fan comments and pinned none." },
    { k: "YouTube", v: "0.0%", n: "No replies to 2,066 fan comments on 11 uploads. The channel hearted 116 comments, all on three uploads (How I Feel, Kissin My Friends and Phoenix), led by \"I'm glad I was born in your era\" (515 likes)." },
    { k: "Reddit", v: "n/a", n: "No artist or team account takes part. r/marshmello is small and asks for Joytime IV, Mellodeath Vol. II and another Mellodeath b2b; wider threads cover the Subtronics b2b plans and FRIENDS passing 1 billion YouTube views." },
  ],
  places: ["Brazil", "Mexico", "Peru", "Colombia", "Indonesia", "India", "Japan", "Thailand", "Miami", "Toronto", "London", "Seattle", "Australia"],
};

export const QUOTES = [
  { q: "2016 come back✨😩", who: "TikTok, \"peak cinema\" (79,784 likes)", href: "https://www.tiktok.com/@marshmello/video/7587138531567488287", tone: "pos" },
  { q: "Los top globales regresaron", who: "TikTok, \"2026 lets go\" (17,097 likes)", href: "https://www.tiktok.com/@marshmello/video/7590573656233790775", tone: "pos" },
  { q: "Finally a song that got 2016 ish vibe. Been missing this type of EDM for so long", who: "YouTube, Another Drink visualizer (895 likes)", href: "https://www.youtube.com/watch?v=UW1UKhrQphI", tone: "pos" },
  { q: "Whoever decided these two needed to collab deserves a raise 💀🔥", who: "YouTube, Close My Eyes visualizer (515 likes)", href: "https://www.youtube.com/watch?v=Mkk9-CVu1qg", tone: "pos" },
  { q: "Até hj nunca vi o rosto dele 💔", who: "TikTok, \"peak cinema\" (4,117 likes)", href: "https://www.tiktok.com/@marshmello/video/7587138531567488287", tone: "mix" },
  { q: "Sooooo like Joytime 4???? 😩", who: "Instagram, \"Ready for a great year\" post", href: "https://www.instagram.com/p/DU_YGDTEt-4/", tone: "mix" },
  { q: "I miss the old marshmello😭🥹", who: "Instagram, Untold recap with SACHA and ILLENIUM", href: "https://www.instagram.com/p/DbyhlkyGRsn/", tone: "mix" },
  { q: "Finally, enough of country songs!!!!", who: "Instagram, How I Feel with Viperactive announcement", href: "https://www.instagram.com/p/DbllemmGmBd/", tone: "neg" },
];

export const FAN_BRIEF = [
  { h: "Use the 2016 era on purpose", b: "Nostalgia is 12.3% of comments but 63.3% of all comment likes, and the two most liked comments in the set are \"2016 come back\" (79,784) and \"Bring back 2016\" (69,982). Every new song post should carry a callback fans can name, Alone, Happier, the Fortnite set or the old school mello sound, instead of a plain out now caption." },
  { h: "Make the helmet the recurring bit", b: "The face reveal is the most common question (99 of 649) and helmet talk is 7.8% of comments. The one time he asked fans for helmet designs, the reply drew 14,942 likes and hundreds of ideas. Run it as a series: fan designs, a vote, the winner worn on stage." },
  { h: "Answer the release and city questions", b: "He replied to 0.4% of fan comments on Instagram and TikTok and none on YouTube, while 77 questions ask when a song is out, for an ID or for the full Red Rocks set. Pin dates and IDs on every post, and reply in Spanish and Portuguese, which lead the come to my country asks." },
  { h: "Lead crossovers with his own sound", b: "Criticism is small (1.0% of comments) and mostly says the old sound is missed. Only 21 comments in the whole set discuss country as a genre, and 4 push back. Country, partner and brand content lands best when it opens on the drop and the helmet, then brings the partner in." },
];

export const BRAIN = {
  intro: "We indexed 40 videos in a TwelveLabs Jockey knowledge store: 30 of Marshmello's best, weakest and most telling posts and 10 peer breakouts, each labeled with its real plays, likes and comments. Then we asked it what separates the winners from the rest, and checked every claim about the first seconds against frames we pulled ourselves. Every video referenced on this page also opens with a full TwelveLabs Pegasus teardown: the hook, every beat, the on screen text, audio, pacing and what to repeat.",
  total: 40,
  corpus: [
    { k: "Marshmello top performers", v: 12 },
    { k: "Marshmello low performers", v: 8 },
    { k: "Marshmello release and series posts", v: 10 },
    { k: "Peer breakouts", v: 10 },
  ],
  findings: [
    {
      h: "The helmet as a story beats the helmet at the decks",
      b: "His two biggest videos since early 2025 are about the mask itself: the first DIY helmet held up to camera (17.8M plays) and a helmet bit tagged @martin (29.0M). 5 of his 12 top performers open with the helmet seen from behind at the decks; that framing carries big festival moments, but on mid-week release clips the same shot lands between 120,700 and 289,390.",
      take: "Put the helmet in the story, not only in the booth: its history, the helmet in places it should not be, who gets to paint it.",
      clips: [
        { href: "https://www.instagram.com/reel/DImB4BppYP4/", label: "\"The OG mask that started it all\"", views: "17.8M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7541494831168654623", label: "\"@martin\", the helmet bit", views: "29.0M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7693316683875847438", label: "\"lights on in philly\", from behind", views: "120,700 plays", low: true },
        { href: "https://www.instagram.com/reel/DdZiLJQvQCU/", label: "\"close my eyes @breakaway\"", views: "255,367 plays", low: true },
      ],
    },
    {
      h: "The catalog carries the reach",
      b: "The three TikToks set to Alone and Happier in the last twelve months earned 9.6M, 1.8M and 1.7M plays. The 25 set to a new release sound earned a median 374,100. Peers do the same thing on purpose: Alan Walker's joke about everyone's favorite song being Faded reached 55.2M, and David Guetta's I'm Good 2022 against 2026 reached 2.6M.",
      take: "Let the old records open the door for the new ones: the 2016 callback first, the new song as the payoff.",
      clips: [
        { href: "https://www.tiktok.com/@marshmello/video/7562274993267019063", label: "\"this one feels good\", set to Alone", views: "9.6M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7590573656233790775", label: "\"2026 lets go\", set to Happier", views: "1.7M plays" },
        { href: "https://www.tiktok.com/@alanwalkermusic/video/7675272860172176662", label: "Alan Walker, \"Everyone tells me Faded is their favourite song\"", views: "55.2M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7683222796167548173", label: "\"that feeling when the song finally drops\"", views: "122,500 plays", low: true },
      ],
    },
    {
      h: "Peers write the premise on screen. Marshmello almost never does.",
      b: "1 of his 12 top performers and 1 of his 8 low performers show any text in the first frame. 6 of the 10 peer breakouts do, and 8 of 10 by the first second: \"My biggest music video has only 48 views\", \"Nobody dancing at the tables around us knows we made this song\". The one Marshmello post built on burned in captions, the Juice WRLD story, reached 957,300 with 112,300 likes.",
      take: "One line, first frame, in his voice: the joke or the story, then the drop.",
      clips: [
        { href: "https://www.instagram.com/reel/DaDn9zJvIAh/", label: "Diplo, \"Nobody dancing at the tables around us knows we made this song\"", views: "16.0M plays" },
        { href: "https://www.tiktok.com/@alanwalkermusic/video/7683080103638715670", label: "Alan Walker, \"My biggest music video has only 48 views\"", views: "8.7M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7613114088293535007", label: "How he met Juice WRLD, captioned", views: "957,300 plays" },
        { href: "https://www.instagram.com/reel/Ddo1yO3yREa/", label: "Red Rocks clip, no line on screen", views: "289,390 plays", low: true },
      ],
    },
    {
      h: "Release clips are the weakest format, and the most common",
      b: "27 of his 57 TikToks in the last twelve months promote a new release, at a median 374,100 plays. Nostalgia and catalog posts run 3.15M and bits run 1.1M. When a new song rides under a bit, it works: Phoenix as the soundtrack to \"how a sweet treat finds us\" reached 713,000, against 177,400 for \"Close My Eyes coming 9/9\".",
      take: "Half as many plain release posts, twice as many bits with the new song underneath.",
      clips: [
        { href: "https://www.tiktok.com/@marshmello/video/7595701363183471886", label: "\"It's 2016 and the mannequin challenge is peak internet\"", views: "4.6M plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7639085644345625870", label: "Phoenix under \"how a sweet treat finds us\"", views: "713,000 plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7683576906217803022", label: "\"CLOSE MY EYES OUT EVERYWHERE\"", views: "283,400 plays", low: true },
        { href: "https://www.tiktok.com/@marshmello/video/7681411085584338190", label: "\"Close My Eyes coming 9/9\"", views: "177,400 plays", low: true },
      ],
    },
    {
      h: "Paid bought views, not conversation",
      b: "The Hollow release reel reached 61.9M Instagram plays with 310 comments, fewer than the 1,073 on the We Don't Get Along reel at 932,766. The two promoted Hollow TikToks reached 762,100 and 952,600. Hollow sits at 82,511 Spotify streams a day. The organic Juice WRLD story drew 112,300 likes, more than both promoted Hollow TikToks combined.",
      take: "Put paid behind posts that already won organically, and point it at the song or the list rather than more Reels views.",
      clips: [
        { href: "https://www.instagram.com/reel/Dcl3GK3yJqk/", label: "\"Hollow\" out now, Instagram", views: "61.9M plays, 310 comments" },
        { href: "https://www.tiktok.com/@marshmello/video/7679132061294267662", label: "\"Hollow\" out now, promoted TikTok", views: "762,100 plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7678418899603311886", label: "\"Cooking something up\", promoted TikTok", views: "952,600 plays" },
        { href: "https://www.tiktok.com/@marshmello/video/7613114088293535007", label: "The Juice WRLD story, organic", views: "957,300 plays, 112,300 likes" },
      ],
    },
    {
      h: "The ask only shows up on the weakest posts",
      b: "Across all 40 videos only three put an ask on screen (X Games tickets, \"out now\" and \"See you at Camp on Monday?\"), and all three are low performers. No top performer and no peer breakout has one. His best ask lived in the comments: \"what other designs should i do?\" under the OG mask reel drew 14,942 likes.",
      take: "Earn the attention first, then ask for one thing at the end, and make it something he owns: text the Mellogang.",
      clips: [
        { href: "https://www.instagram.com/reel/DImB4BppYP4/", label: "\"what other designs should i do?\", in the comments", views: "14,942 likes on the reply" },
        { href: "https://www.tiktok.com/@marshmello/video/7685812083262262542", label: "X Games tickets on screen", views: "149,800 plays", low: true },
        { href: "https://www.tiktok.com/@marshmello/video/7694281968678178062", label: "\"See you at Camp on Monday?\"", views: "138,000 plays", low: true },
      ],
    },
  ],
};

export const FUNNEL = {
  intro: "Every bio sends fans to one Linktree, and from there they scatter: a store, a management smart link, an app, a Discord and four separate sign-up lists, while marshmello.com itself does not load. Every door below was opened and checked on October 15, 2026.",
  doors: [
    { where: "Instagram bio", says: "No bio text, one link: linktr.ee/marshmello. The Linktree lists the Close My Eyes Red Rocks video, the Close My Eyes smart link, the store, shows, a pre-save sign-up, Discord and the Mellogang app, and its newsletter box saves emails into a Google Sheet. The biggest door, 27.9M followers, works, but it says nothing.", state: "own" },
    { where: "TikTok bio", says: "\"CLOSE MY EYES\" OUT NOW\", linking the same Linktree. 25.5M followers. No TikTok pixel on the Linktree, so TikTok traffic is only measured once it reaches the store.", state: "own" },
    { where: "X bio", says: "\"Close My Eyes w ILLENIUM ft. SACHA OUT NOW\" with the Linktree in the website field. 2.25M followers.", state: "own" },
    { where: "YouTube header", says: "58.7M subscribers. The description is one line, \"Marshmello's Official YouTube Channel\". Ten header links cover the store, streaming and socials, tour dates and the app. Nothing for the current single and no sign-up.", state: "thin" },
    { where: "marshmello.com", says: "Does not load. The bare domain has no DNS address and www.marshmello.com returns a Cloudflare origin error, from two separate checks. It does not appear on Google page one and no bio links to it.", state: "stale" },
    { where: "Store (marshmellomusic.com)", says: "A Shopify store called Mellogang that Google lists as \"The official website for everything Marshmello\". It is the real home today: shop, kids line, cookbook, music and a tour page with nine dates. It runs the fullest tracking anywhere, on its own Meta pixel.", state: "own" },
    { where: "Fan sign-up", says: "Four lists that do not talk to each other: the Linktree newsletter (a Google Sheet), the store email and \"Text MELLO to 63556\" SMS (Klaviyo), a pre-save page, and a separate Klaviyo account on the Joytime Collective site.", state: "thin" },
    { where: "Smart links (ffm.to)", says: "marshmello.ffm.to links name The Shalizi Group as data controller, so the data stays with the team. They share the Linktree's Meta pixel, but conversion tracking is off, there is no TikTok, Snap or Google Ads pixel, and analytics points at a Universal Analytics ID that stopped collecting in 2024.", state: "own" },
    { where: "Spotify profile", says: "About 54.4M monthly listeners, No. 48 in the world. The Artist Pick is current (Close My Eyes) and six concerts are listed. The About text is a third party bio that stops at December 2025.", state: "own" },
    { where: "Apple Music", says: "Close My Eyes at the top, eight upcoming concert cities listed, the Hollow lyric video leading Music Videos. Current, and like Spotify it leads nowhere he owns.", state: "own" },
    { where: "Mellogang app and Discord", says: "The Mellogang app is the Shopify store in app form, so it is a shop, not a fan club: 50K+ Android downloads. Discord shows 7,334 members, against 27.9M on Instagram.", state: "thin" },
    { where: "Cooking with Marshmello and partner pages", says: "Cooking with Marshmello still has 3.66M YouTube subscribers but its newest videos are six years old. The Burn Boot Camp partnership page collects sign-ups into Burn's own form, which is right for the partner, and links back to the store and Spotify.", state: "away" },
  ],
  scores: [
    { k: "Performance", v: 38, note: "Tested on marshmellomusic.com because marshmello.com would not load. Largest contentful paint 5.5 seconds on mobile, a 5.3 MB page with 440 requests led by 1.2 MB of tag scripts. A second run also scored 38" },
    { k: "Accessibility", v: 82, note: "Low contrast text, images without alt text, unlabeled links and small tap targets" },
    { k: "Best practices", v: 73, note: "Six third-party cookies, console errors and browser issues" },
    { k: "SEO", v: 92, note: "Images without alt text. Otherwise indexable, and Google already treats the store as the official site" },
  ],
  lighthouse: "Lighthouse, marshmellomusic.com",
  pixels: [
    { k: "Meta Pixel", ok: true, note: "On the store, the Linktree and the smart links, but not the same one" },
    { k: "Google Analytics or Tag Manager", ok: true, note: "GA4 and Google Ads on the store, a different GA4 property on the Linktree, a retired Universal Analytics ID on the smart links" },
    { k: "TikTok Pixel", ok: true, note: "Store only. Not on the Linktree or the smart links, where TikTok traffic lands first" },
    { k: "Snap pixel", ok: true, note: "Store only" },
    { k: "Email capture", ok: true, note: "Four places: store, Linktree, pre-save page and the label site. No single list" },
    { k: "One audience", ok: false, note: "The Linktree and smart links share one Meta pixel, the store fires another, so bio traffic and buyers build two different audiences" },
  ],
  ads: [
    { k: "Lost In Dreams Block Party, The Midway SF, October 30", n: "25 ads", d: "All live, first on July 29, newest October 13" },
    { k: "Holika festival", n: "3 ads", d: "January 22 to June 30" },
    { k: "Peligro Fest, July 25", n: "3 ads", d: "March 3 to July 25" },
    { k: "Breakaway Philadelphia", n: "1 ad", d: "May 24 to July 10" },
    { k: "Releases: Better Man Than Me, Another Drink, Hollow", n: "7 ads", d: "One to two week bursts, all sending fans to Instagram Reels, none to streaming" },
    { k: "Close My Eyes, How I Feel, Intuit Dome, The O2, NYE, the store, the app, sign-up", n: "None found", d: "" },
  ],
  adsNote: "Meta Ad Library, all statuses, October 15, 2026. 39 ads on his page; all 25 live ads sell one San Francisco show.",
  autocomplete: [
    { q: "marshmello", a: ["face", "marshmallow", "face reveal", "songs", "marshmallow root", "marshmallow comforter", "marshmallow fluff", "dj", "tour"] },
    { q: "marshmello t", a: ["tour", "tour 2026", "the singer", "tickets", "top songs", "marshmallow test", "the dj", "tour dates", "marshmallow treats", "tattoos"] },
    { q: "marshmello s", a: ["songs", "silence", "squishy", "singer", "sf", "shockwave", "syrup", "songs list a to z", "setlist", "silence lyrics"] },
    { q: "marshmello f", a: ["face", "face reveal", "food", "fortnite", "marshmallow fluff", "fortnite concert", "friends song lyrics", "friends", "fly", "fortnite skin"] },
    { q: "who is marshmello", a: ["under the mask", "face", "the singer", "dj", "real name", "really", "shawn mendes", "dating", "in real life"] },
  ],
  hot: ["face", "face reveal", "under the mask"],
  autoNote: "Google autocomplete, US, October 15, 2026. Highlighted: the helmet questions, which lead the name.",
  search: "The name owns its search, and the helmet owns the name. Two of the first three suggestions for \"marshmello\" are about his face, and \"who is marshmello\" fills with under the mask, real name and in real life. Fans search for tour 2026, tickets, the SF date and the setlist, and Fortnite still fills three of the ten \"f\" suggestions seven years after the in-game concert. No current single appears in any stem: the songs people type are Silence, FRIENDS and Shockwave. Page one is Wikipedia, YouTube, Instagram, Spotify, the store and X, and People Also Ask leads with \"What happened to Marshmello now?\". marshmello.com is nowhere, so the store is doing the website's job.",
};

export const DIRECTION = {
  intro: "The research points one way: the helmet is the most valuable thing Marshmello owns, and right now it is mostly seen from behind. The direction for 2027 puts the character back at the center of the feed, lets the catalog fans keep asking for carry the new music, and gathers the Mellogang into one list Marshmello owns. Everything below is a starting point for the conversation, not a finished identity.",
  position: {
    pre: "The most recognizable ",
    em: "character",
    post: " in dance music, back on screen.",
    b: "From 2019 to 2021 the helmet was the content: the Fortnite set, the face reveal bits and reels that reached 7M to 43M plays. Today it mostly appears at the decks while release clips carry the feed. Fans still ask who is under it more than anything else, and the two biggest videos since early 2025 are about the mask itself. No other artist can make one object the joke, the story and the logo at once, and no other artist has his catalog to soundtrack it.",
  },
  world: [
    { k: "The helmet", r: "The character", b: "Bits, lore and the helmet in places it should not be. The subject of the feed again, not only the costume." },
    { k: "The catalog", r: "The bridge", b: "Alone, Silence, Happier and FRIENDS, 24.2B streams of records fans grew up with. The new songs ride in on them." },
    { k: "The Mellogang", r: "The community", b: "One name for the list, the store, the app, Discord and the fan pages. Everyone who shows up ends up somewhere he owns." },
  ],
  era: {
    k: "MELLOGANG",
    tag: "Working frame for 2027",
    img: "helmet-designs",
    imgAlt: "Six white helmets on a black shelf, each painted in a different fan design",
    b: "A name fans, the store, the app and the Discord already share. In 2027 it becomes the frame for everything: the text line fans join, the fan pages that clip every set, the helmet design series, and Silence turning ten in August. Every post invites people in, and the list is where they hear first.",
  },
  system: [
    { k: "Wordmark", b: "The bubble wordmark from the store becomes the only lockup. The geometric caps wordmark in the share image retires." },
    { k: "The mark", b: "The helmet face, two X eyes and the smile, as the end card on every video, the avatar on every channel and fan page, and a sign off on every cover." },
    { k: "Covers", b: "The bottom center helmet sign off from the 2018 covers returns on every single, whoever the partner is and whatever the genre." },
    { k: "Palette", b: "White, black and the red already repeating across the 2025 to 2026 singles. Release art can change; the lockup and the accent stay." },
    { k: "Type on video", b: "One typeface, one color and one position for every premise line and track title, so a clip reads as his before the caption loads." },
    { k: "Home", b: "marshmello.com back online as the one home: tour, music, store and sign-up, on one pixel and one list." },
  ],
  pillars: [
    { k: "The Helmet", b: "Character bits and mask lore. The helmet at airport security, the first DIY mask, the helmet a fan painted. A premise line in the first frame." },
    { k: "The Set", b: "B2B culture, crowd moments and IDs. Cut the same night for the main feed and the fan pages, with the ID and the date on screen." },
    { k: "The Catalog", b: "Alone, Silence, Happier and FRIENDS in today's rooms. Then and now cuts where the new song is the payoff." },
    { k: "The Gang", b: "Fan designs, replies, duets and city requests, in English, Spanish and Portuguese. The audience on screen, not only in the crowd." },
  ],
  platforms: [
    { k: "Instagram", r: "Home", b: "Three posts a week, reels led by the helmet, one collab post a week with peers on shared bills." },
    { k: "TikTok", r: "Discovery", b: "Four a week: native bits, catalog moments and reply videos. Promote only posts that already won organically." },
    { k: "YouTube", r: "The sets and the series", b: "58.7M subscribers: full B2B sets, a mini doc series around the helmet, and Shorts cut from both." },
    { k: "Fan pages", r: "The reach", b: "Instagram and TikTok pairs clipping every set, B2B and catalog moment daily, each pointing back to the main feed." },
    { k: "SMS and email", r: "The list", b: "Text the Mellogang: one list across the store, the Linktree, pre-saves and shows, for first listens, presales and drops." },
    { k: "X", r: "The voice", b: "Personal posts and live commentary. The frost children post reached 420,902 views; release links do not." },
  ],
};

export const PLAN = {
  intro: "A social plan built on the 2027 calendar: the fall arena and NYE shows, the helmet series in the new year, festival season and Wynn, then Silence turning ten in August.",
  phases: [
    { k: "Foundation", when: "November to December 2026", items: ["marshmello.com back online as the home, on one pixel", "Text the Mellogang: one list across bios, store, pre-saves and shows", "The four existing lists merged and cleaned", "Replies on every post in English, Spanish and Portuguese", "Fan pages launched: Instagram and TikTok pairs", "Pokemon Night Out at The O2, Decadance and Countdown NYE shot as content"] },
    { k: "The Helmet", when: "January to March 2027", items: ["Helmet series launch: Helmet Cam and the first mask lore episodes", "Design My Helmet opens to the list first", "Aspen, January 29 and 30, shot as content", "B2B series with the peers on shared bills", "Catalog series starts: Then and Now"] },
    { k: "The Gang", when: "April to July 2027", items: ["Festival season cut within 24 hours for the main feed and the fan pages", "Design My Helmet winner worn on stage", "City presales by SMS, Wynn season as a weekly series", "Paid behind organic winners, pointed at the song or the list"] },
    { k: "Silence 10", when: "August to December 2027", items: ["Silence turns ten on August 11: anniversary content and live moments", "Melloween 2027 as the year's biggest helmet moment", "Presales and drops through the list", "Year-end review and the 2028 plan"] },
  ],
  series: [
    { k: "Helmet Cam", b: "The helmet in ordinary places: airport security, a drive-thru, the gym, a school pickup. One premise line, a new song under the punchline." },
    { k: "Design My Helmet", b: "Fans paint the helmet, the list votes, the winner is worn on stage. The one time he asked for designs, the reply drew 14,942 likes." },
    { k: "B2B", b: "The B2B culture he already loves, shot from the booth. The DJ Snake and Martin Garrix b2b posts reached 363,000 to 1.8M plays." },
    { k: "Then and Now", b: "2016 footage cut against today's crowd, the new song as the payoff. The 2016 mannequin challenge post reached 4.6M." },
  ],
  kpis: [
    { k: "TikTok median plays", now: "241,900", to: "750,000", when: "90 days, back to the winter level" },
    { k: "TikTok plays per follower", now: "0.016", to: "0.04", when: "6 months, toward Alan Walker's 0.053" },
    { k: "Instagram median reel plays", now: "406,473", to: "1,000,000", when: "6 months" },
    { k: "Instagram posts a week", now: "0.6", to: "3", when: "From December 2026" },
    { k: "Fan sign-up lists", now: "4 separate", to: "1 Mellogang list", when: "60 days" },
    { k: "marshmello.com", now: "Not loading", to: "Live, one pixel", when: "30 days" },
  ],
  measure: ["Reach and engagement by platform, against the ten peers", "Median plays by series, so formats earn their slot", "Fan page reach and follows sent to the main feed", "Mellogang sign-ups by source, click rate and opt-outs per send", "Spotify listeners, saves and streams around every release", "Organic and promoted reported separately"],
};

export const CREATIVE = {
  intro: "What the direction could look like, made for this audit with the helmet taken from his own photography: two short videos, one YouTube cut and six stills. Two of the stills are mockups built from real photos.",
  label: "AI-generated examples and mockups, directional only. Not final artwork",
  videos: [
    { k: "Then and Now", fmt: "TikTok and Reels, 9:16", video: "then-now.mp4", poster: "then-now-frame", top: "THEN AND NOW", big: "same song, ten years apart", cta: "Text the Mellogang", why: "The catalog as the door. A 2016 room cut against today's crowd, the new song as the payoff, the ask at the end." },
    { k: "B2B", fmt: "TikTok and Reels, 9:16", video: "b2b.mp4", poster: "b2b-frame", top: "B2B, EP. 1", big: "who should I go b2b with next?", cta: "Comment and we'll book it", why: "The B2B culture he already posts about, as a named series with a question on screen. Questions draw twice the comments of statements." },
    { k: "Design My Helmet", fmt: "YouTube, 16:9", video: "helmet-design.mp4", poster: "helmet-design-frame", wide: true, why: "The mini doc series: a fan's design painted onto a helmet, then worn on stage. Built for the 58.7M YouTube subscribers and cut into Shorts." },
  ],
  stills: [
    { img: "helmet-designs", k: "Design My Helmet", line: "Fans paint the helmet", why: "Six fan designs on one shelf. The list votes, the winner is worn on stage." },
    { img: "helmet-cam", k: "Helmet Cam", line: "The helmet in the wrong place", why: "Airport security, the drive-thru, the gym. The character back in everyday life, with a new song under the punchline." },
    { img: "silence-10", k: "Silence 10", line: "Silence turns ten, August 2027", why: "An anniversary cover with the helmet back at the center: one lockup, black and white, the year as the story.", fit: "contain" },
    { img: "fan-mock", k: "Fan pages", line: "Every set, every b2b, every throwback", why: "A clip page built from his own photography, posting daily and pointing back to the main feed.", ai: false },
    { img: "sms-mock", k: "Text the Mellogang", line: "First listens to the list", why: "The new song 24 hours early and the helmet contest opening first, to one list he owns.", ai: false },
    { img: "merch-capsule", k: "Mellogang capsule", line: "The helmet face you can wear", why: "A capsule built on the helmet face and the Mellogang name, sold to the list first." },
  ],
};

export const PRICING = {
  intro: "One base package at $6,000 a month, with fan pages, media and creative added on top as needed. Creative is billed by the hour against an estimate you approve each month.",
  base: {
    k: "Base package",
    retainer: 6000,
    lead: "Social, strategy and the list, run by one team.",
    items: ["Strategy and the 2027 content plan around the helmet, the catalog and the Mellogang", "Main feed on Instagram, TikTok, YouTube and X", "Posting, community management and replies", "Email and SMS: one Mellogang list across the store, Linktree, pre-saves and shows", "Presale, drop and store-access sends with the merch team", "Weekly reporting page and biweekly calls"],
  },
  fee: 15,
  rate: 125,
  fans: [
    { k: "No fan pages", v: 0 },
    { k: "2 pages, 4 accounts", v: 3000 },
    { k: "5 pages, 10 accounts", v: 5000 },
  ],
  addons: [
    { g: "Fan pages", k: "2 pages, 4 accounts", price: "$3,000", unit: "/mo", b: "Two fan pages, each an Instagram and TikTok pair: 4 accounts posting daily." },
    { g: "Fan pages", k: "5 pages, 10 accounts", price: "$5,000", unit: "/mo", b: "Five fan pages, each an Instagram and TikTok pair: 10 accounts posting daily." },
    { g: "Media", k: "Paid media", price: "15%", unit: "of spend", b: "Strategy, buying and reporting on Meta, TikTok and YouTube. Spend is paid directly to the platforms." },
    { g: "Media", k: "Creator programs", price: "15%", unit: "of spend", b: "Creator seeding and paid creator deals. Creator fees pass through at cost." },
    { g: "Hourly", k: "Creative services", price: "$125", unit: "/hr", b: "Set and B2B edits, cutdowns, statics, motion, cover and merch design, AI-generated assets and copy." },
  ],
  terms: [
    { h: "Six-month minimum", b: "Month to month after the first six months." },
    { h: "Media billed direct", b: "Ad and creator spend is paid by Marshmello's team directly. The 15% fee applies to any media we manage, paid or creator." },
    { h: "Creative at $125 an hour", b: "Billed monthly against an hours estimate you approve in advance. Nothing is billed beyond the estimate without sign-off." },
  ],
};

export const WHY = {
  intro: "Crowd Control is a culture-first marketing agency. We run social, paid, creative and data for artists, labels, tours and the brands around them, and we build research like this for every client before we spend a dollar.",
  points: [
    { h: "The character and the records, together", b: "Strategists, editors and writers who build every post around the helmet and the music, so the character carries the song instead of standing next to it." },
    { h: "One network, not one feed", b: "We run the main feed, fan pages and the list as one system, so every clip has more than one door and every fan ends up somewhere Marshmello owns." },
    { h: "Listening before posting", b: "Video AI, social listening and peer teardowns decide what we make, the way this audit was built." },
    { h: "Reporting you can open", b: "A live report page refreshed every week, for Marshmello, management and partners." },
  ],
  clients: ["NBA", "Golden State Warriors", "Apple", "Amazon", "Beats By Dre", "Warner Bros", "Monster Energy", "Foot Locker", "Porsche", "Edition Hotels", "Malbon Golf", "Polymarket", "Weedmaps", "Barker Wellness", "Aplós", "Prima"],
};

export const NEXT = {
  steps: [
    { h: "Confirm scope", b: "The base package plus any add-ons: fan pages, paid media or creators. We set the creative estimate and a start date." },
    { h: "Foundation, November and December", b: "marshmello.com back online, one Mellogang list, replies on every post, fan pages live, and the O2 and NYE shows shot as content." },
    { h: "January: the helmet", b: "The helmet series launches and Design My Helmet opens to the list, with the network ready to carry it." },
  ],
  need: ["Instagram, TikTok and YouTube access", "Fan page logins", "Meta Business Manager and TikTok Ads access", "Linktree, Klaviyo, Shopify and Feature.fm access", "marshmello.com domain and hosting access", "Set, crowd and archive footage, including 2015 to 2019", "Release and show calendar into 2027", "Label and partner contacts for collab posts"],
  book: "https://app.reclaim.ai/m/team-leads",
  email: "geoff@crowdcontroldigital.com",
  name: "Geoff Shames",
  role: "Crowd Control Digital",
};

export const SOURCES = [
  "Instagram: Apify instagram-scraper and reel scraper, 42 grid posts since September 2025 and 157 reels with play counts, plus the 40 most recent posts for each of ten peer artists and follower counts from the profile scraper, pulled October 15, 2026",
  "TikTok: Apify clockworks TikTok scraper, 300 @marshmello videos (March 2022 to October 8, 2026) with TikTok's promoted flags and sounds, and the 40 most recent per peer",
  "YouTube: Apify YouTube scraper, 80 long-form videos, 141 Shorts and 10 streams. X: Apify tweet scraper, the 60 most recent items",
  "Streaming: Chartmetric API (artist 3907), Spotify listener and follower history and where people listen; kworb.net catalog streams, updated October 14, 2026",
  "Fans: 9,277 items (Instagram comments on 37 posts, TikTok comments on 35 videos, YouTube comments on 11 uploads, 250 Reddit items), 6,459 analyzed. Theme and tone scored with keyword rules checked against 394 hand read comments. Sentiment is an analytical estimate",
  "Video AI: TwelveLabs Jockey knowledge store \"Marshmello + peers (CCD)\", 40 videos, and a Pegasus 1.6 teardown of every video, each checked against frames we pulled",
  "Brand: 69 release covers since 2015 from the iTunes Search API and MusicBrainz Cover Art Archive; marks from marshmellomusic.com, joytimecollective.com and official show artwork",
  "Funnel: bios, Linktree, store, smart link and label site HTML and network capture, two Lighthouse mobile lab runs, Meta Ad Library, Google autocomplete and page one search results, October 15, 2026",
  "Career facts: Wikipedia, Billboard, Rolling Stone, DJ Mag, Music Business Worldwide, Pollstar, Wynn Nightlife, Insomniac and official posts",
  "Photography: Marshmello official Instagram. Peer thumbnails link to the original posts",
];
