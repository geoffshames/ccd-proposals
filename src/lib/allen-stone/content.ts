/**
 * Allen Stone × Crowd Control Digital: album rollout proposal content.
 * Research pulled Sept 15, 2026 (Spotify/kworb, Instagram, TikTok, YouTube,
 * Meta Ad Library, allenstone.com stack audit, tour routing, Reddit/YouTube comments).
 */

export const IMG = "/images/allen-stone";

export const HERO = {
  kicker: "Album rollout · Social + paid media · 6 months",
  prepared: "Prepared for Red Light Management × ATO Records",
  date: "September 2026",
  line: "Soul, amplified.",
  body:
    "The record is finished. The fans are already here. This is the system that points the attention Allen's voice earns every week straight at the album.",
  stats: [
    { value: 527, suffix: "K", label: "Instagram followers" },
    { value: 597, suffix: "K", label: "Spotify monthly listeners" },
    { value: 17, suffix: "M", label: "Views on a living-room video" },
  ],
};

export const NAV = [
  { id: "gap", label: "The gap" },
  { id: "live", label: "Live" },
  { id: "cadence", label: "Cadence" },
  { id: "room", label: "The room" },
  { id: "wave", label: "The wave" },
  { id: "system", label: "The system" },
  { id: "fans", label: "Fans" },
  { id: "rollout", label: "Rollout" },
  { id: "investment", label: "Investment" },
] as const;

/** Spotify monthly listeners (kworb, 9/15/26) per Instagram follower (Tokscript/profile, 9/15/26). */
export const GAP = {
  title: "More fans than *listeners.*",
  intro:
    "For four modern-soul peers, every Instagram follower maps to 11 to 19 Spotify monthly listeners. For Allen it's about one. The fanbase isn't the problem. Reach and conversion are, and that's exactly what paid media and platform-native content are built to fix.",
  rows: [
    { name: "Thee Sacred Souls", followers: "475K", listeners: "9.2M", ratio: 19.4 },
    { name: "Leon Bridges", followers: "1.07M", listeners: "14.9M", ratio: 13.9 },
    { name: "Jalen Ngonda", followers: "343K", listeners: "4.2M", ratio: 12.2 },
    { name: "Durand Jones & The Indications", followers: "356K", listeners: "4.0M", ratio: 11.2 },
    { name: "Allen Stone", followers: "527K", listeners: "597K", ratio: 1.13, self: true },
  ],
  note: "Listeners per Instagram follower. Spotify monthly listeners via kworb and Instagram followers via profile data, both pulled Sept 15, 2026. Allen peaked at 1.02M monthly listeners.",
  lessons: [
    {
      who: "Myles Smith",
      stat: "18.8M listeners",
      lesson: "Built “Stargazing” in public on TikTok: hook snippet, demo, sound upload, then release.",
      take: "Allen can run the same snippet-to-release funnel with a voice fans already know.",
    },
    {
      who: "Jalen Ngonda",
      stat: "4.2M listeners",
      lesson: "Pre-album performance clips hit 2.2M–2.8M views, but the account sits near 100K TikTok followers.",
      take: "Views without capture leak. A retargeting layer is what keeps them.",
    },
    {
      who: "Leon Bridges",
      stat: "14.9M listeners",
      lesson: "Staged the new album in two EP parts with signed vinyl, but short-form feels distant.",
      take: "Allen's warmth and humor on camera are the edge the lane can't copy.",
    },
  ],
};

export const CLIPS = [
  {
    title: "Unaware",
    context: "Live from his mother's living room",
    views: "17M",
    platform: "YouTube",
    img: "clip-unaware.jpg",
    href: "https://www.youtube.com/watch?v=z4Hy6kp5kIs",
  },
  {
    title: "Brown Eyed Lover",
    context: "Live at Sound Emporium",
    views: "9.2M",
    platform: "YouTube",
    img: "clip-brown-eyed-lover.jpg",
    href: "https://www.youtube.com/watch?v=ZrZv3JpOr2g",
  },
  {
    title: "Give You Blue",
    context: "Live performance · Vevo",
    views: "3.8M",
    platform: "YouTube",
    img: "clip-give-you-blue.jpg",
    href: "https://www.youtube.com/watch?v=SRzvkKb-JRI",
  },
  {
    title: "Sara Smile",
    context: "With Teddy Swims · Live at the Lodge",
    views: "1.8M",
    platform: "YouTube",
    img: "clip-sara-smile.jpg",
    href: "https://www.youtube.com/watch?v=XT2bVe3o2P0",
  },
  {
    title: "Sweet Little Rainbows",
    context: "Official live session · plus 1.3M plays on TikTok",
    views: "557K",
    platform: "YouTube",
    img: "clip-sweet-little-rainbows.jpg",
    href: "https://www.youtube.com/watch?v=_0jJnBNbitk",
  },
  {
    title: "Give You Blue",
    context: "With Nu Deco Ensemble · Allen's best TikTok of the past year",
    views: "356K",
    platform: "TikTok plays",
    img: "clip-nu-deco.jpg",
    href: "https://www.youtube.com/watch?v=FsLhPuWi0Fs",
  },
];

export const CADENCE = {
  title: "The summer went *quiet.*",
  intro:
    "Completely understandable in a stadium-tour summer. But the months before an album are when cadence matters most, and right now most posts are the same Reel with the same caption on every app.",
  today: { count: 8, label: "TikToks posted May 8 – Aug 24", median: "~18K median plays on a 366K following" },
  plan: { count: 48, label: "Native TikToks at 3 a week, same 16 weeks", median: "Plus Reels, Shorts, and Facebook cuts: 20+ posts a month overall" },
  facts: [
    { k: "YouTube Shorts", v: "Dormant ~2 years" },
    { k: "Long-form uploads", v: "Every 2–3 months" },
    { k: "TikTok formats", v: "Cross-posted Reels" },
  ],
};

export const ROOM = {
  title: "A stadium-sized *warm* audience.",
  intro:
    "In a year without an album, Allen played Chris Stapleton's All-American Road Show stadiums and opens five Teddy Swims arena dates in November. Those are the highest-intent new fans he'll ever meet. With no TikTok pixel on the site and no always-on retargeting in the ad history, many of them walk out uncaptured.",
  quote: "I had no idea who he was and I was loving it, loving it so much that I didn't take any videos.",
  quoteSource: "r/bottlerock",
  dates: [
    { day: "Nov 1", city: "Denver", venue: "Ball Arena" },
    { day: "Nov 3", city: "Salt Lake City", venue: "Delta Center" },
    { day: "Nov 5", city: "Seattle", venue: "Climate Pledge Arena" },
    { day: "Nov 6", city: "Vancouver", venue: "Rogers Arena" },
    { day: "Nov 8", city: "Portland", venue: "Moda Center" },
  ],
  owned: [
    { k: "Text STONE", v: "Klaviyo email + SMS list on allenstone.com, already artist-side" },
    { k: "Presale passwords", v: "Worked for the Stapleton run" },
    { k: "Bandsintown", v: "223K followers" },
    { k: "Meta ads", v: "20 short single-goal bursts, Oct 2025 – Jul 2026" },
  ],
};

export const SYSTEM = {
  title: "The *system.*",
  intro:
    "Three inputs Allen already has, one layer CCD runs every day, and four places the attention lands. Every post and every dollar is built to move someone one step right.",
  inputs: [
    { title: "Live vocal clips", sub: "The proven format" },
    { title: "Arena + stadium crowds", sub: "Stapleton, Teddy Swims" },
    { title: "New singles", sub: "The next album" },
  ],
  engine: [
    { title: "Native social", sub: "Every week, every platform" },
    { title: "Retargeting pools", sub: "Viewers, visitors, crowds" },
    { title: "Release flights", sub: "Singles + album week" },
  ],
  outputs: ["Pre-saves + Spotify follows", "Owned fan list", "Vinyl pre-orders", "Tickets"],
};

export const WAVE = {
  title: "Turn every show into *pre-saves.*",
  intro:
    "CCD's dopamine wave: the anticipation before a show, the peak in the room, and the glow the morning after. Every city Allen plays builds one. We capture fans at the top of it and ride the glow into the album, so each market becomes a block of pre-saves before release day.",
  caption: "Conceptual campaign rhythm. Not to scale; the curve and dots don't represent data.",
  phases: [
    {
      key: "before",
      name: "Before",
      window: "D−14 → D−1",
      action: "Warm the room",
      points: [
        "Geo-targeted live clips (“Unaware,” “Give You Blue”) to soul and headliner fans in the market",
        "An RSVP drop for set-time alerts and a first listen of the new single",
        "Artist Stories counting down the city",
      ],
    },
    {
      key: "live",
      name: "Show day",
      window: "D0",
      action: "Capture the peak",
      points: [
        "A from-stage call at the biggest moment of the set, plus a QR on screens and the merch table where the headliner and venue allow",
        "A reason to join right then: signed vinyl, the setlist, or the new single before anyone else",
        "The city's swsh album opens so fans can drop their angles of the night",
      ],
    },
    {
      key: "after",
      name: "After",
      window: "D+1 → D+4",
      action: "Point the glow at the record",
      points: [
        "Everyone captured gets the night's swsh album and “the song you heard last night”",
        "The ask is a pre-save: Spotify Countdown Page or a Laylo pre-save drop",
        "Paid retargeting hits the market's video viewers and visitors with the live clip, pointed at the pre-save",
      ],
    },
  ],
  release: {
    name: "Release day",
    body: "Every captured city lands at once. Each fan gets the release-day text or DM, and pre-saves turn into day-one streams right when the algorithm is paying attention.",
  },
  stats: [
    { value: "40%", label: "Tour RSVPs that became album pre-saves", source: "Japanese Breakfast on Laylo (Laylo case study)" },
    { value: "1 in 7", label: "Pre-savers who become super listeners by release week", source: "Spotify Countdown Pages" },
    { value: "D0", label: "Capture in the room: the cheapest fan data you'll collect, and the highest converting", source: "AndR music CRM guide, 2026" },
  ],
};

export const CAPTURE = {
  title: "The capture stack",
  intro:
    "Right now capture lives online: a Klaviyo popup on allenstone.com and the Text STONE number. Nothing is built for the moment in the room. Two ways to fix that, plus one add-on that turns every show into content.",
  options: [
    {
      key: "setlive",
      tab: "SET.Live",
      tag: "Fastest to launch · keep Klaviyo",
      what: "App-free, web-based in-show experiences, like giveaways and voting, that capture name, phone, and email while the room is at its peak. Used by Black Pumas, Jelly Roll, John Legend, Alicia Keys, and Miranda Lambert.",
      how: [
        "A from-stage call and a QR on screens or the merch table open a SET.Live page",
        "“Enter to win the signed vinyl” or “hear the new single first”",
        "Fans land on the existing Text STONE list and get the post-show pre-save ask",
      ],
      why: "The lightest lift. Nothing to migrate, Klaviyo and the Shopify store stay exactly as they are, and a free account is enough to pilot on the November dates.",
      watch: "Confirm how SET.Live contacts sync into Klaviyo before launch, and clear screen and stage placements with the headliner, promoter, and venue on support dates.",
    },
    {
      key: "laylo",
      tab: "Laylo swap",
      tag: "Best path to pre-saves",
      what: "Move fan capture onto Laylo, the drop platform built for artists: SMS, email, and Instagram DM, with native Spotify pre-save and auto-follow, plus Seated, Bandsintown, and Shopify sync.",
      how: [
        "The QR in the room opens a Laylo drop: “Get the new song the second it's out”",
        "That same RSVP becomes the pre-save and the release-day text, with no second ask",
        "Seated and Bandsintown fans (223K followers) flow into the same list",
      ],
      why: "It connects the room to the record in one system. Allen already lists dates on Seated, Laylo already powers the Stone Family Field Trip drop, and Laylo reports Japanese Breakfast turned 40% of tour RSVPs into album pre-saves.",
      watch: "Plan the Text STONE migration and SMS consent carefully. Klaviyo can stay on the store for cart and order flows, or retire fully. Laylo's platform fees are billed at cost.",
    },
    {
      key: "swsh",
      tab: "swsh",
      tag: "Add-on · tour content engine",
      what: "Shared photo and video albums fans join from a QR, no app required. Built-in moderation, approval before publishing, and face filtering. Growth adds fan CRM collection and video clipping.",
      how: [
        "One album per city opens during the set",
        "Fans drop their own angles of the show, and the team approves what goes live",
        "The next morning, “see the night” goes out with a link to hear it again and pre-save",
      ],
      why: "Every show turns into a library of real fan footage for Reels, TikTok, and ads, and the After phase gets a reason fans actually want to open.",
      watch: "Starter is $100/mo (500 participants), Growth $250/mo (2,000), and arena-scale volume needs Enterprise. Joining an album isn't ad-usage rights or marketing consent, so get those separately. Pilot on two headline shows first.",
    },
  ],
};

export const FANS = {
  title: "Who we're *reaching.*",
  intro:
    "Loyal, musically literate, multi-generational. Fans who come back show after show, singers who study his runs, and a fresh wave of arena crowds who met him opening for someone else.",
  personas: [
    {
      name: "The Day One",
      age: "30–50",
      body: "Found Allen through the living-room “Unaware” video or the Radius era and never left. Buys the ticket every time he comes through, and probably has a “Consider Me” story.",
      traits: ["Repeat ticket buyer", "Vinyl collector", "On the text list"],
    },
    {
      name: "The Vocal Nerd",
      age: "18–35",
      body: "Singers and musicians who watch the clips for the runs and post covers “in the style of Allen Stone.” The most likely to duet, stitch, save, and share.",
      traits: ["Duets + stitches", "Saves live clips", "Shares performances"],
    },
    {
      name: "The New Ear",
      age: "22–55",
      body: "Heard him opening for Chris Stapleton or Teddy Swims, or caught a festival set, and loved it without knowing his name. High intent, not yet following.",
      traits: ["Arena + festival goer", "Country × soul crossover", "Not yet following"],
    },
  ],
  cities: [
    { city: "Auckland", listeners: 13600 },
    { city: "Sydney", listeners: 9900 },
    { city: "Brisbane", listeners: 8400 },
    { city: "Los Angeles", listeners: 8300 },
    { city: "Chicago", listeners: 7700 },
  ],
  quotes: [
    { text: "I wonder why this guy isn't getting enough recognition in the music industry.", source: "YouTube, “Unaware”" },
    { text: "4th time seeing Allen, 3rd time he's headlined. Always a beautiful and uplifting experience.", source: "r/roanoke" },
    { text: "His vocal range is wider than my future.", source: "YouTube, “Unaware”" },
    { text: "He was my intro to modern soul music.", source: "r/ratemysinging" },
  ],
};

export const ROLLOUT = {
  title: "Six months, anchored to *release day.*",
  intro:
    "The album is finished and undated, which is the rare window where strategy shapes the plan instead of reacting to it. Phases lock to real dates once ATO sets the release.",
  phases: [
    {
      when: "Month 1",
      rel: "Release −20 to −16 wks",
      name: "Foundation",
      points: [
        "Access, baseline audit, TikTok pixel + Meta Conversions API",
        "Retargeting pools from video viewers, site visitors, list lookalikes, tour markets",
        "Tour capture live for the Nov 1–8 arena dates: SET.Live or Laylo, plus a swsh pilot",
      ],
    },
    {
      when: "Months 2–3",
      rel: "Release −16 to −8 wks",
      name: "Single one + reveal",
      points: [
        "Snippet-to-release sequence: hook tease, studio moment, live take, sound upload",
        "Single-one flight across Meta, TikTok, YouTube, optimized to streams + saves",
        "Captured fans from every city get the first listen and the pre-save ask",
      ],
    },
    {
      when: "Month 4",
      rel: "Release −8 to −1 wks",
      name: "Single two + pre-order",
      points: [
        "A duet-and-stitch vocal prompt built for the singer community",
        "Vinyl + D2C pre-order campaigns to the Shopify store",
        "Geo-weighted flights: LA, PNW, Denver, NYC, Chicago, Auckland, Sydney, Brisbane",
      ],
    },
    {
      when: "Month 5",
      rel: "Release week → +4 wks",
      name: "Album week",
      release: true,
      points: [
        "Release-day surge driving streams, saves, and follows",
        "Daily community management and reactive content",
        "72-hour and day-10 readouts that move spend to the songs the algorithm picks",
      ],
    },
    {
      when: "Month 6",
      rel: "+4 to +8 wks",
      name: "Sustain + tour bridge",
      points: [
        "Always-on album + catalog retargeting at efficient spend",
        "Tour announce and on-sale support",
        "Full-cycle report and the plan for deluxe, second-wave singles, and touring",
      ],
    },
  ],
};

export const TARGETS = [
  { value: "1M+", label: "Monthly listeners by album week", context: "Back past the 1.02M peak." },
  { value: "2×", label: "Instagram Reel median", context: "From 49.9K views today." },
  { value: "3×", label: "TikTok median plays", context: "From ~18K per post." },
  { value: "<$0.40", label: "Cost per Spotify conversion", context: "Under $0.30 is strong on Meta for music." },
];

export const INVESTMENT = {
  title: "The *investment.*",
  retainer: 5000,
  months: 6,
  includes: [
    { name: "Album rollout strategy", body: "Release-anchored playbook, content system, monthly calendars, weekly syncs with Red Light + ATO." },
    { name: "Social media management", body: "Instagram, TikTok, YouTube (incl. Shorts), Facebook. Platform-native publishing and daily community management." },
    { name: "Paid media + tour capture", body: "Tracking, audience architecture, three release flights, always-on retargeting, and the capture-to-pre-save flow around every show." },
    { name: "Reporting + optimization", body: "Monthly reports against targets, weekly pacing notes in release weeks." },
  ],
  fee: 0.15,
  plan: [
    { month: "M1", label: "Foundation", spend: 3000 },
    { month: "M2", label: "Single one", spend: 6000 },
    { month: "M3", label: "Reveal", spend: 7000 },
    { month: "M4", label: "Single two", spend: 8000 },
    { month: "M5", label: "Album", spend: 15000 },
    { month: "M6", label: "Sustain", spend: 6000 },
  ],
  addOns: [
    { name: "Content capture + editing", basis: "Scoped per shoot" },
    { name: "Creator seeding", basis: "Per single, fees at cost + 15%" },
    { name: "Email + SMS campaigns", basis: "Scoped as add-on" },
    { name: "SET.Live, Laylo, swsh platform fees", basis: "Billed at cost" },
  ],
  terms:
    "Retainer invoiced monthly in advance, net 15. Ad spend is paid directly to the platforms from ATO's or management's budget; the 15% management fee is invoiced monthly in arrears.",
};

export const SCOPE = {
  included: [
    "Release-anchored rollout strategy, built with Red Light and ATO",
    "Day-to-day management of Instagram, TikTok, YouTube (incl. Shorts), Facebook",
    "Calendars, captions, and platform-native formatting of supplied assets",
    "Daily community management and reactive content in release windows",
    "Paid strategy, build, and optimization on Meta, TikTok, YouTube",
    "TikTok pixel, Meta Conversions API, retargeting architecture",
    "Tour capture setup (SET.Live or Laylo) and post-show pre-save drops",
    "Paid support for owned-list sign-ups, pre-saves, and vinyl pre-orders",
    "Monthly performance reporting",
  ],
  excluded: [
    "Ad spend (paid to platforms, plus 15%)",
    "Capture and content platform fees (SET.Live, Laylo, swsh), billed at cost",
    "Shoots and short-form editing beyond formatting (add-on)",
    "Creator seeding (add-on)",
    "Email + SMS campaign writing (add-on)",
    "Music videos, photography, graphic design (add-on)",
    "Playlist pitching, PR, radio (ATO + partners)",
  ],
};

export const NEXT = {
  title: "The record's done. Let's make sure people find it.",
  steps: [
    { title: "Intro call with Red Light + ATO", body: "Walk the audit, confirm the release window and single plan, and settle who owns what." },
    { title: "Decide on the November arena run", body: "If we're aligned by late October, Month 1 starts Nov 1 and those five arena crowds go straight into retargeting." },
    { title: "Approve scope + starting media", body: "Confirm the $5K/mo retainer, a starting ad budget, and whether spend runs from ATO or management." },
    { title: "Access + foundation sprint", body: "Channel, ad account, Spotify for Artists, and Klaviyo access. Pixels, audiences, and warm-up tests live within 30 days." },
  ],
  email: "geoff@crowdcontroldigital.com",
};

export const SOURCES = [
  { label: "Spotify monthly listeners (kworb)", href: "https://kworb.net/spotify/listeners.html" },
  { label: "Allen Stone on Spotify", href: "https://open.spotify.com/artist/536osqBGKzeozje8BfcGsa" },
  { label: "“Unaware” (Live From His Mother's Living Room)", href: "https://www.youtube.com/watch?v=z4Hy6kp5kIs" },
  { label: "Teddy Swims, The Ugly Tour support dates", href: "https://envertmedia.com/teddy-swims-2026-the-ugly-tour-dates-indie-support/" },
  { label: "Chris Stapleton 2026 All-American Road Show", href: "https://chrisstapleton.com/chris-stapleton-confirms-2026-all-american-road-show-dates/" },
  { label: "Spotify Countdown Pages", href: "https://newsroom.spotify.com/2025-05-21/upcoming-releases-hub-countdown-pages-charts-discovery" },
  { label: "TikTok Add to Music App: 6B saves", href: "https://newsroom.tiktok.com/6-billion-tracks-saved-w-tt-add-to-music-app?lang=en" },
  { label: "Album in progress (CT Examiner)", href: "https://ctexaminer.com/2025/09/05/allen-stone-talks-new-single-and-the-future-ahead-of-show-at-toads-place/" },
  { label: "SET.Live (A2IM member spotlight)", href: "https://a2im.org/ams-set-live/" },
  { label: "Laylo pre-saves + Japanese Breakfast case", href: "https://laylo.com/tools/presaves" },
  { label: "Laylo integrations", href: "https://laylo.com/integrations" },
  { label: "swsh pricing", href: "https://www.joinswsh.com/pricing" },
  { label: "AndR: best CRM platforms for musicians (2026)", href: "https://learn.andrmusic.co/en/articles/13557994-best-crm-platforms-for-musicians-laylo-openstage-set-live-2026" },
  { label: "r/bottlerock", href: "https://www.reddit.com/r/bottlerock/comments/1lw1iqq/allen_stone_videos/" },
  { label: "r/roanoke", href: "https://www.reddit.com/r/roanoke/comments/1ub50hn/allen_stone_the_exchange/" },
];
