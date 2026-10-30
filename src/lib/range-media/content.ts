/**
 * RANGE MEDIA PARTNERS x CROWD CONTROL DIGITAL: content intelligence build proposal.
 * Skeleton, Oct 30, 2026. Built from the Oct 30 content analytics call.
 * Artist and genre scope waits on Range's wishlist; pricing numbers are TBD.
 */

export const PASSWORD = "SIGNAL";

export const NAV = [
  { id: "heard", label: "What we heard" },
  { id: "build", label: "The build" },
  { id: "proof", label: "Proof" },
  { id: "how", label: "How it works" },
  { id: "scope", label: "Scope" },
  { id: "timeline", label: "Timeline" },
  { id: "investment", label: "Investment" },
];

export const HERO = {
  kicker: "Proposal, October 2026",
  title: ["RANGE", "OS"],
  line: "A content intelligence build for Range Media Partners.",
  sub: "Prepared for Stephanie Marks, Federico Morris and Angelo Cecco.",
  body: "One Range-specific system that reads your own content and your affinity artists, flags what is spiking before it hits the mainstream, and pulls the organic signal out of every seeding campaign. Bespoke, not SaaS. V1 in two to three months.",
  stats: [
    { v: 2, d: 0, suf: " to 3", l: "Months to a working V1" },
    { v: 572, d: 0, l: "Reels read in the Shaboozey proof, across 12 artists" },
    { v: 17, d: 0, suf: "%", l: "Of Shaboozey reels clearing 3x the median" },
  ],
};

export const MARQUEE = ["Own content", "Affinity artists", "Spike alerts", "Organic vs paid", "Streaming context", "Creative brain"];

/* -------------------------------------------------------------------------- */
/* 01 What we heard                                                            */
/* -------------------------------------------------------------------------- */

export const HEARD_THESIS = {
  big: "The window is small.",
  em: "The system should catch it for you.",
  body: "Range runs content at the level of a label and a management company at once, across roughly 50 clients. The team already tests formats on TikTok and Instagram every week. What is missing is a fast, reliable read on why something worked, what is working next door, and when something starts to move, before a person has time to go looking.",
};

export const GOALS = [
  { k: "Goal 01", t: "Know why our content works", b: "Which formats, text on screen and trends drive our over-performers, and whether a hit rode the zeitgeist or opened its own lane." },
  { k: "Goal 02", t: "Learn from affinity artists", b: "Run the same read across each client's affinity set, find what is over-indexing there, and translate it into formats our artists can test." },
  { k: "Goal 03", t: "Get the alert early", b: "A signal the moment watch time, shares or creates start to spike on something, so the team can test or spend while it still matters." },
  { k: "Goal 04", t: "Find the organic in a seeding run", b: "Separate paid seeding posts from organic creates on a sound, then surface any organic trend worth putting money behind." },
];

export const QUOTES = [
  { q: "What is working and why of what we're already doing, and what is working via our affinity artists, and how can we translate that to ours?", by: "Stephanie Marks" },
  { q: "I want a place where it's super easy for me to inform content and be 12 steps ahead.", by: "Stephanie Marks" },
  { q: "Like an alert system of like, this is happening right now.", by: "Stephanie Marks" },
];

/* -------------------------------------------------------------------------- */
/* 02 The build                                                                */
/* -------------------------------------------------------------------------- */

export const MODULES = [
  { n: "01", t: "Own-content intelligence", b: "Every post from every Range artist you switch on goes into one corpus. Video AI tags format, hook, text on screen, framing, sound and trend, then ranks what over-indexes against each artist's own median.", tag: "Goal 01" },
  { n: "02", t: "Affinity radar", b: "Each artist gets an affinity set you define. The same read runs across that set, the two datasets are harmonized, and the output is a short list of formats to test, with examples.", tag: "Goal 02" },
  { n: "03", t: "Spike alerts", b: "Watches views, shares, creates and streams for every artist and affinity account, and pings a Slack channel when something breaks pattern, with the posts most likely behind it.", tag: "Goal 03" },
  { n: "04", t: "Seeding filter", b: "Load the paid creator list for a campaign and the system splits paid posts from organic creates on the sound, then clusters the organic ones by format so a trend shows up in minutes, not days.", tag: "Goal 04" },
  { n: "05", t: "Streaming context", b: "Chartmetric streaming data sits next to the content data, with room for Range's own data team feeds. Ask \"streams jumped 30% yesterday, why?\" and get the creates and posts that moved with it.", tag: "Goals 01 and 03" },
  { n: "06", t: "Creative brain", b: "Every new post and every test result trains it. Log a test that did not move the needle and the system marks it as a false positive, so suggestions get sharper over time.", tag: "All goals" },
];

export const ADDONS = [
  { t: "Brand-in-content search", b: "Ask the corpus which clips feature a product or brand, for partnership pitches and tour brand-affinity reads." },
  { t: "Owned-account depth", b: "Connect artists' own Meta and TikTok accounts to add watch time, retention and private engagement to the public read." },
  { t: "Range data harmonization", b: "A shared schema so your data team's sources sit in the same system as the content and streaming data." },
];

/* -------------------------------------------------------------------------- */
/* 03 Proof                                                                    */
/* -------------------------------------------------------------------------- */

export const PROOF = {
  url: "https://lab.crowdcontroldigital.com/shaboozey",
  password: "OUTLAW",
  intro: "One Range client, one pass of the system we already run, no filter. It pulled Shaboozey and 11 country and crossover peers, ran a siloed analysis on each side, then harmonized the two to show where he over- and under-indexes.",
  stats: [
    { v: "572", l: "Instagram Reels from Shaboozey and 11 peers, including Warren Zeiders, Lainey Wilson and Kane Brown" },
    { v: "17%", l: "Of his reels clear 3x his median, level with Warren Zeiders. He posts far less often." },
    { v: "17.7M", l: "Plays on the VMA High Noon reel, 27x his median. His best regular reel was a TV moment." },
    { v: "0.20%", l: "Like rate on an 18.1M-play Trial Reel, against his usual 5.7%. Reach from strangers who moved on." },
  ],
  takeaways: [
    { t: "What it showed", b: "A peer table across 12 artists, seven Reels formats to run next with playable examples, and a four-week plan." },
    { t: "What it could not see", b: "Everything app-only. Public data has no watch time or retention. Connecting owned accounts adds that layer." },
    { t: "What changes at scale", b: "Run for every Range artist, all the time, the corpus grows with each post and the read gets better instead of starting over." },
  ],
};

/* -------------------------------------------------------------------------- */
/* 04 How it works                                                             */
/* -------------------------------------------------------------------------- */

export const VIEWS = [
  { k: "Head of digital", t: "The Range view", b: "Every switched-on artist in one place, broken down by artist and by genre, with the week's over-performers, new formats and open alerts." },
  { k: "Artist teams", t: "The artist view", b: "Each team sees only their artist: what is working, what the affinity set is doing, and the formats queued to test." },
  { k: "In Slack", t: "The alert feed", b: "Spike alerts and a weekly digest land in Range's Slack, with a way to ask the system a question right from the alert." },
];

export const DATA = [
  { src: "Instagram, TikTok, YouTube (public)", what: "Posts, views, likes, comments, shares, creates on a sound", when: "V1" },
  { src: "Video AI corpus (TwelveLabs Jockey)", what: "Format, hook, text on screen, framing, objects and moments inside every video", when: "V1" },
  { src: "Chartmetric", what: "Streams, playlist adds, listeners, by artist and track", when: "V1" },
  { src: "Owned Meta and TikTok accounts", what: "Watch time, retention, private engagement", when: "V1 or add-on, per artist" },
  { src: "Range data team", what: "Whatever Range wants in: app, commerce or audience data", when: "Scoped with your team" },
];

export const HONEST = [
  { t: "Streams and content", b: "We show what moved together and when. That is correlation, not proof a post caused streams. Repeated patterns, like the same creator lifting streams five times, get flagged as stronger signal." },
  { t: "Add to Spotify clicks", b: "TikTok does not seem to expose the click from a sound to Spotify or Apple Music in its API today. We will check, and ask TikTok directly for Range-owned profiles." },
  { t: "Meta depth", b: "Meta keeps watch time private unless the account is connected. Without that, the read runs on public metrics, as it did for Shaboozey." },
];

/* -------------------------------------------------------------------------- */
/* 05 Scope                                                                    */
/* -------------------------------------------------------------------------- */

export const SCOPE_INTRO =
  "Stephanie and Federico are pulling together a wishlist by artist and genre. It drops in here and sets the size of V1. Until then, this is the shape it will take.";

export const SCOPE_ROWS = [
  { artist: "Shaboozey", genre: "Country", affinity: "11 peers from the case study", view: "Range + artist team", status: "Example" },
  { artist: "From wishlist", genre: "From wishlist", affinity: "To define with Range", view: "To define", status: "Pending" },
  { artist: "From wishlist", genre: "From wishlist", affinity: "To define with Range", view: "To define", status: "Pending" },
  { artist: "From wishlist", genre: "From wishlist", affinity: "To define with Range", view: "To define", status: "Pending" },
];

export const NEED = [
  "The artists to switch on for V1, and their genre",
  "Each artist's affinity set, or a starting list we build out",
  "Who sees what: the Range view and each artist team's view",
  "One live or upcoming seeding campaign to use as the first test",
  "Which Range data team sources should sit in the system",
  "The Slack channel or channels the alerts should go to",
];

export const INCLUDED = [
  "Discovery and architecture with Range's digital and data teams",
  "The six modules above, built for Range and switched on per artist",
  "Range view and artist views, by artist and by genre",
  "Slack alerts and a weekly digest",
  "Chartmetric streaming data alongside the content data",
  "Training for the digital team and artist managers",
];

export const EXCLUDED = [
  "Paid media and creator spend (available from Crowd Control, scoped separately)",
  "Content production for Range artists (available as an add-on)",
  "Third-party data licenses Range already holds or buys directly",
  "Attribution claims beyond what the data can support",
];

/* -------------------------------------------------------------------------- */
/* 06 Timeline                                                                 */
/* -------------------------------------------------------------------------- */

export const PHASES = [
  { w: "Weeks 1 to 2", t: "Scope and architecture", items: ["Review Range's wishlist and lock the V1 artist list", "Data schema with Range's data team", "Range view and artist view wireframes", "Slack and account access set up"] },
  { w: "Weeks 3 to 6", t: "Intelligence core", items: ["Ingest own content and affinity sets", "Video AI tagging and the creative brain", "Over-index ranking by artist and genre", "First readouts to the digital team"] },
  { w: "Weeks 7 to 10", t: "Signals", items: ["Spike alerts into Slack", "Seeding filter on a live campaign", "Chartmetric and Range data alongside content", "Ask-a-question on alerts and reports"] },
  { w: "Weeks 11 to 12", t: "V1 live", items: ["Full roll-out to the V1 artists", "Training for the team and managers", "Feedback loop switched on", "V2 roadmap from what the team uses most"] },
];

export const AFTER = "After V1: new artists and affinity sets switch on as Range needs them, and the system keeps learning from every post and test.";

/* -------------------------------------------------------------------------- */
/* 07 Investment                                                               */
/* -------------------------------------------------------------------------- */

export const PRICING_INTRO =
  "Final numbers follow the wishlist, since the artist count and data sources set the size of the build. Here is how the investment is structured.";

export const PRICING = [
  { k: "One time", t: "V1 build", price: "TBD", per: "", b: "Discovery, architecture, the six modules, both views, Slack alerts and training.", bill: "Billed in milestones: kickoff, intelligence core, V1 live" },
  { k: "Monthly", t: "Run and evolve", price: "TBD", per: "/mo", b: "Hosting, ongoing ingestion, model and video AI costs, support, and new artists or affinity sets as Range adds them.", bill: "Starts at V1 launch" },
  { k: "As needed", t: "Add-ons", price: "TBD", per: "", b: "Brand-in-content search, owned-account depth and Range data harmonization, if they sit outside V1.", bill: "Quoted per add-on" },
];

/* -------------------------------------------------------------------------- */
/* 08 Why + next                                                               */
/* -------------------------------------------------------------------------- */

export const WHY = [
  { k: "The tooling is half built", b: "We have been building this stack for our own clients for six months. Corpus search, video AI tagging and report chat already run, so Range pays for a build, not research." },
  { k: "A marketing agency first", b: "Crowd Control runs paid, social and release campaigns for artists and labels, so the system is built around the decisions a digital team actually makes." },
  { k: "Live and touring", b: "Campaigns for Live Nation, AEG, Insomniac Events, Vibra Urbana, Brooklyn Mirage and Avant Gardner." },
  { k: "Artists and brands", b: "Select clients: NBA, Golden State Warriors, Foot Locker, Monster Energy, Beats By Dre, Apple, Amazon, Warner Bros, Porsche, Edition Hotels, Malbon Golf and Polymarket." },
];

export const NEXT = {
  email: "geoff@crowdcontroldigital.com",
  steps: [
    "Range sends the wishlist by artist and genre",
    "We size V1 and send final pricing",
    "Architecture session with Range's digital and data teams",
    "Kickoff, with V1 live two to three months later",
  ],
};
