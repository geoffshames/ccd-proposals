/**
 * DOPE AS USUAL: data for the bespoke "episode" layout. Every number is from the
 * November 2026 catalog audit or the show's public profiles.
 */

export const RUNTIME = 18 * 60;

export const CHAPTERS = [
  { id: "top", n: "00", t: "Cold open", at: 0 },
  { id: "show", n: "01", t: "The show", at: 75 },
  { id: "vault", n: "02", t: "The vault", at: 190 },
  { id: "format", n: "03", t: "The format", at: 420 },
  { id: "reunion", n: "04", t: "The reunion", at: 560 },
  { id: "engine", n: "05", t: "The engine", at: 660 },
  { id: "look", n: "06", t: "The look", at: 800 },
  { id: "adbreak", n: "07", t: "Ad break", at: 900 },
  { id: "road", n: "08", t: "The road", at: 980 },
  { id: "outro", n: "09", t: "Outro", at: 1040 },
];

export const LIFECYCLE = {
  yours: [
    { t: "Book", b: "The guest list and the relationships." },
    { t: "Record", b: "The room, the chemistry, the stories." },
    { t: "Edit", b: "The full episode and the show's voice." },
    { t: "Publish", b: "Tuesday at 12:30, every week." },
  ],
  ours: [
    { t: "Clip", b: "15 to 20 vertical cuts per episode." },
    { t: "Distribute", b: "TikTok, Reels, Shorts and X, daily." },
    { t: "Capture", b: "Every viewer offered the list." },
    { t: "Monetize", b: "Sponsors, platforms and live." },
  ],
};

export const SPLIT = { archive: 42.0, recent: 10.6 };

export const GUEST_COMPARE = [
  { k: "Goblin and Erick Khan", s: "Recurring cast", v: 5800000 },
  { k: "Yola's mom", s: "Family of the show", v: 784000 },
  { k: "Steve-O", s: "Celebrity booking, 7.4M on Instagram", v: 887000 },
  { k: "Wiz Khalifa", s: "Celebrity booking, 39M on Instagram", v: 91000 },
];

export const ATTENTION = [
  { k: "Median full episode, 2021", v: 258000 },
  { k: "Median full episode, 2026", v: 24000 },
  { k: "One show reel on Instagram", v: 17954086, red: true },
];

export const THEN_NOW = {
  then: [
    { id: "89WeV5A1xow", v: "5.8M", y: "2021" },
    { id: "7w4s5MUIeM0", v: "1.5M", y: "2022" },
    { id: "LffWWD3G1P8", v: "1.0M", y: "2022" },
  ],
  now: [
    { id: "I_fa6a085Uw", v: "28K", y: "2026" },
    { id: "WKD4K2nZ53A", v: "22K", y: "2026" },
    { id: "RSkOrn7wM3Y", v: "9.3K", y: "2026" },
  ],
};

export const FUNNEL = [
  { k: "YouTube subscribers", v: 460000, owned: false },
  { k: "Instagram followers", v: 207400, owned: false },
  { k: "Newsletter contacts", v: 120000, owned: true },
  { k: "Site and app members", v: 80000, owned: true },
  { k: "TikTok followers", v: 21400, owned: false },
];

export const WEEK_ROWS = ["Long form", "Clips", "Vault", "The list", "Guests"];
export const WEEK = [
  { d: "Mon", cells: ["", "3 clips from last week's episode", "", "", ""] },
  { d: "Tue", hot: true, cells: ["New episode, 12:30 PM", "Launch clip on every platform", "", "Drop text and email", "Clip pack to the guest"] },
  { d: "Wed", cells: ["", "3 clips, Trial Reels test", "", "", "Guest collab posts"] },
  { d: "Thu", cells: ["", "2 clips", "From The Vault drop", "Vault text to members", ""] },
  { d: "Fri", cells: ["", "3 clips, weekend hooks", "", "", ""] },
  { d: "Sat", cells: ["Vault compilation on YouTube", "2 clips", "", "", ""] },
  { d: "Sun", cells: ["", "2 clips, best of week", "", "Next episode teaser", "Next guest announced"] },
];

export const WORKSTREAMS = [
  {
    n: "01", t: "Clip engine", c: "Weekly",
    b: "Every episode becomes 15 to 20 vertical clips within 48 hours, captioned, hooked for each platform and tested with Trial Reels before the winners get pushed.",
    ships: ["15 to 20 clips per episode", "Platform-specific hooks and captions", "Trial Reels testing on Instagram", "A daily posting calendar"],
    kpi: "Short-form views, followers gained, clicks to the full episode",
  },
  {
    n: "02", t: "Vault reissues", c: "Weekly",
    b: "The 2021 and 2022 era relaunched as a weekly series: recut moments, compilations by guest and by story, and anniversary drops for the classics.",
    ships: ["A weekly From The Vault drop", "Monthly long-form compilations", "Series packaging and an intro open", "A ranked shortlist of 100 vault moments"],
    kpi: "Views on archive footage, catalog watch time",
  },
  {
    n: "03", t: "Guest amplification", c: "Every episode",
    b: "Every guest leaves with a clip pack and collab invites. The 141-guest database turns into a booking and cross-posting plan.",
    ships: ["Guest clip packs on release day", "Collab posts with every guest", "Reunion booking shortlist", "Guest reach tracked per episode"],
    kpi: "Guest reposts, collab reach, new followers per guest",
  },
  {
    n: "04", t: "Searchable archive", c: "Ongoing",
    b: "All 460 hours indexed with video AI, so any story, name or topic is a search away. Compilations, sponsor reels and topical clips are made in minutes.",
    ships: ["Full catalog indexed", "Story and guest search", "Topical clip pulls on demand", "Sponsor reel builds"],
    kpi: "Turnaround time on topical and compilation edits",
  },
  {
    n: "05", t: "Email and SMS", c: "Weekly",
    b: "The list becomes a weekly program: Tuesday drop text, Thursday vault text, presales, merch and sponsor offers, with a capture point on every clip and page.",
    ships: ["Tuesday drop text and email", "Segments by platform and city", "Live-show presales", "Capture on every clip and page"],
    kpi: "List growth, open and click rates, presale conversion",
  },
  {
    n: "06", t: "Social consulting", c: "Monthly",
    b: "A monthly working session with both hosts. Channel audits, cadence, title and thumbnail tests through YouTube's Test and Compare, and the read on what is working.",
    ships: ["Monthly working session", "Title and thumbnail tests", "Channel audits", "A written read on what to change"],
    kpi: "Click-through rate, average view duration",
  },
  {
    n: "07", t: "Sponsorship sales", c: "Quarterly",
    b: "A media kit that counts the whole audience, a rate card, outbound sales to categories that fit, and formats beyond the host read.",
    ships: ["Cross-platform media kit", "Rate card and formats", "Outbound category sales", "Delivery reports for every sponsor"],
    kpi: "Sponsor revenue, renewals, categories signed",
  },
  {
    n: "08", t: "Platform and network deals", c: "Ongoing",
    b: "The show and the catalog packaged for distribution conversations: streaming platforms, live streaming, FAST channels and licensing. We bring the numbers and sit in the room.",
    ships: ["Distribution deck", "Catalog licensing package", "Platform outreach", "Deal support in the room"],
    kpi: "Deals opened, terms improved, licensing revenue",
  },
  {
    n: "09", t: "Reporting", c: "Monthly",
    b: "One live dashboard across YouTube, Instagram, TikTok, the list and sponsor delivery, with a monthly read on what to do next.",
    ships: ["Live dashboard", "Monthly report", "Sponsor delivery reporting", "Quarterly plan reset"],
    kpi: "Every number in one place",
  },
];

export const PLACEMENTS = [
  { at: 0, w: 2, k: "Series open", b: "Presented by, said in the cold open." },
  { at: 6, w: 3, k: "Host read", b: "In the host's words, early in the episode." },
  { at: 48, w: 6, k: "Segment sponsor", b: "A recurring bit with the brand built in." },
  { at: 104, w: 3, k: "Close", b: "Offer code and the last word." },
];

export const AD_FORMATS = [
  { k: "Tier one", t: "Host read", b: "The read the show already does, priced on the whole audience, not one platform." },
  { k: "Tier two", t: "Segment sponsor", b: "A named recurring segment the brand owns for a quarter, clipped and posted every week." },
  { k: "Tier three", t: "Series sponsor", b: "Presenting partner on the Reunion Series or the vault, across episodes, clips and the list." },
  { k: "Tier four", t: "Live partner", b: "Presenting partner on Dope As Usual Live, onsite and across the presale texts." },
];

export const GANTT_WEEKS = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12", "M4+"];
export const GANTT = [
  { k: "Plug in", s: 0, e: 2, red: true },
  { k: "Clip engine", s: 2, e: 13 },
  { k: "Vault reissues", s: 2, e: 13 },
  { k: "Email and SMS", s: 2, e: 13 },
  { k: "Guest amplification", s: 3, e: 13 },
  { k: "Reunion Series", s: 6, e: 13, red: true },
  { k: "Sponsorship sales", s: 6, e: 13 },
  { k: "Platform conversations", s: 12, e: 13 },
];
