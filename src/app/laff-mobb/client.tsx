"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CursorGlow } from "@/components/CursorGlow";
import styles from "./laff-mobb.module.css";

const IMG = {
  hero: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/mcJtmTI2Jm0WTYY4VLdbI.png",
  reel: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/n_5x2lqVOrcnuakCHvVPc.png",
  filmStill:
    "https://cdn.gamma.app/w9o8gu9elbl53rf/ffdd308f9c944b6ca91017b3bfe80164/original/04_TFH-MARKETING_PUBLICITY-STILLS-FINAL-MOVIE_021325.01_23_52_03.Still278-1--standard-v2-1000h.jpeg",
  studio: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/HnRAJZHisly5Y77_AjeZn.png",
  frat: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/AdAYDyDFOEsaNqaC4HwH5.png",
  map: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/rAoLhUwyRrn8MqI1Fw0gU.png",
  regal: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/2t_BlQPJJRt22CP-fjIPx.png",
  bar: "https://cdn.gamma.app/w9o8gu9elbl53rf/generated-images/N1FlG0n6ARjKycdY0SYuW.png",
  dean: "https://static.wixstatic.com/media/860f60_ffe78599020f484894a47523c46c81a5~mv2.jpg/v1/fill/w_900,h_1120,al_c,q_80,enc_auto/file.jpg",
} as const;

const NAV: [string, string][] = [
  ["The Void", "#void"],
  ["Movement", "#movement"],
  ["Film", "#film"],
  ["University", "#university"],
  ["Audience", "#audience"],
  ["Reach", "#reach"],
  ["Partners", "#partners"],
  ["For Brands", "#brands"],
  ["Team", "#team"],
];

const STATS: { v: number; s: string; l: string }[] = [
  { v: 50, s: "+", l: "College markets" },
  { v: 7000, s: "+", l: "Regal screens" },
  { v: 20, s: "M+", l: "Regal loyalty members" },
  { v: 25, s: "+", l: "Improv clubs" },
  { v: 1, s: "M+", l: "Live comedy fans / yr" },
];

const ECOSYSTEM: { t: string; d: string }[] = [
  { t: "Feature Films", d: "The core engine. FKD UP! first, then a three-picture Laff Mobb Presents slate." },
  { t: "Comedy Clubs", d: "The Improv network: raw talent, live audiences, and a built-in comedian roster." },
  { t: "Theaters", d: "A Regal partnership built for theatrical distribution beside major universities." },
  { t: "Newsletters", d: "Direct, owned audience. No algorithm tax between us and the fan." },
  { t: "Podcasts", d: "Audio-first reach that develops the next comedic voices in the ecosystem." },
  { t: "Merch", d: "Identity people wear. A brand extension the tribe pays to represent." },
  { t: "Comedy Specials", d: "High-production stand-up and sketch that showcases the whole roster." },
  { t: "Viral Content", d: "Shareable moments that discover talent and feed the top of the funnel daily." },
];

const FLYWHEEL: { n: string; t: string; d: string }[] = [
  { n: "01", t: "Discover", d: "The Improv stages and a daily social engine surface the next comedic voices. It is how Laff Mobb found Tiffany Haddish, Lil Rel, and Karlous Miller, and how we build the next roster." },
  { n: "02", t: "Build", d: "FKD UP University, podcasts, and social turn that talent into a daily habit and an owned tribe, captured on email, SMS, and the story portal. The Dean is the engine." },
  { n: "03", t: "Convert", d: "The tribe we built online shows up in seats. FKD UP! releases across Regal's college markets, fans request the showings, and word of mouth does the marketing." },
  { n: "04", t: "Extend", d: "Improv live tie-ins, merch the tribe wears, specials, and podcast spin-offs deepen the moment and throw off more fans than we started with." },
  { n: "05", t: "Compound", d: "Revenue and audience roll straight into the next film and the next comedian. The ambassadors, lists, and partnerships are reusable, so film two starts where film one peaked." },
];

const UNI: { code: string; v: string; d: string }[] = [
  { code: "LIVE / JUL 2026", v: "In session", d: "The University went live in July with daily content, an AR filter, and an owned story-submission portal." },
  { code: "DAY ONE", v: "~1,500", d: "New Instagram followers from a single post by the Dean on launch day." },
  { code: "OWNED AUDIENCE", v: "~100", d: "Phone numbers captured into a direct SMS channel on that same day." },
  { code: "CADENCE", v: "3 to 4 / wk", d: "Posts plus stories from a full content team, and the number is climbing." },
];

const MARKETS: { c: string; d: string; i: boolean }[] = [
  { c: "San Jose", d: "997K", i: true },
  { c: "New York", d: "290K", i: true },
  { c: "Chicago", d: "220K", i: true },
  { c: "Los Angeles", d: "183K", i: true },
  { c: "Houston", d: "175K", i: true },
  { c: "Tempe", d: "172K", i: true },
  { c: "San Diego", d: "161K", i: false },
  { c: "Boston", d: "150K", i: false },
  { c: "Gainesville", d: "150K", i: false },
  { c: "Phoenix", d: "150K", i: true },
  { c: "Philadelphia", d: "150K", i: false },
  { c: "Miami", d: "131K", i: true },
  { c: "Orlando", d: "130K", i: false },
  { c: "Austin", d: "106K", i: false },
  { c: "Baltimore", d: "100K", i: true },
  { c: "Washington DC", d: "98K", i: true },
  { c: "Dallas", d: "95K", i: true },
  { c: "Denver", d: "92K", i: true },
  { c: "San Francisco", d: "90K", i: true },
  { c: "Raleigh", d: "70K", i: true },
  { c: "Nashville", d: "64K", i: false },
  { c: "Seattle", d: "58K", i: false },
];

const BRANDS: { t: string; d: string }[] = [
  { t: "Live inside the movement", d: "Show up as part of the culture, not an ad running next to it. The tribe treats trusted brands like they treat the Dean: as one of their own." },
  { t: "An experiential canvas", d: "Campus survival kits, bar takeovers, vending machines, festival pop-ups, confession booths, and the tour. Dozens of real-world surfaces to own." },
  { t: "An owned audience", d: "Email and SMS lists, the submission portal, and co-created content. Direct access to a Gen Z that opted in, not one we rented." },
  { t: "The theatrical tentpole", d: "On-screen, in-lobby, and afterparty presence around a Q4 2026 wide release across 50 college markets and Regal's national footprint." },
  { t: "A content machine", d: "The Dean, UGC clip campaigns, and a 3-to-4-post-a-week cadence built for the exact platforms your customers actually live on." },
  { t: "Co-marketing muscle", d: "Regal's 20M-member database and the Improv's comedian network amplify every activation far past what the check pays for." },
];

const PHASES: { when: string; flag: string; done?: boolean; title: string; body: string; tags: string[] }[] = [
  {
    when: "Summer 2026",
    flag: "Live now",
    done: true,
    title: "Phase 1: Brand and infrastructure",
    body: "Make Laff Mobb a recognizable comedy brand before the film is ever marketed. Social dominance on TikTok and Instagram, FKD UP University with the Dean, campus ambassadors across 20 markets, an AR face filter, weekly meme challenges, and an owned email and SMS list.",
    tags: ["University live", "20-market ambassadors", "AR filter", "Owned SMS"],
  },
  {
    when: "Late Summer to Early Fall 2026",
    flag: "Next up",
    title: "Phase 2: Community activation",
    body: "Turn online energy into an offline movement. Campus survival kits to dorms, FKD UP vending machines in bars and venues, themed bar takeovers with photo zones and confession booths, dorm door hangers with QR codes, and street teams where the chaos actually happens.",
    tags: ["Survival kits", "Vending machines", "Bar takeovers", "Street teams"],
  },
  {
    when: "Fall 2026",
    flag: "Brand runway",
    title: "Phase 3: Cultural extensions",
    body: "The brand becomes an identity, not a movie. Limited content drops, festival and pool-party pop-ups, collabs, and a 12 Days of FKD UP! series building straight into premiere week. This is the natural home for a brand partner to plug an activation in.",
    tags: ["Limited drops", "Festival pop-ups", "Collabs", "Premiere runway"],
  },
  {
    when: "Q4 2026, October to December",
    flag: "Theatrical",
    title: "Phase 4: Film launch and full blitz",
    body: "Everything converges. A four-week exclusive window in 50 college markets to build word of mouth, multi-cut trailers tuned per platform, the FKD UP AR challenge wired to ticket sales, directional-audio billboards, in-theater confession booths, afterparty partnerships, and a press blitz across Vice, Complex, Barstool, Rolling Stone, and college media. Then we expand to 1,000 to 1,500 theaters, followed by PVOD and streaming.",
    tags: ["50 markets first", "Multi-cut trailers", "Press blitz", "Scale to 1,500 theaters"],
  },
];

const STUNTS: { n: string; t: string; d: string }[] = [
  { n: "01", t: "The FKD UP Experience", d: "Frats versus sororities compete for the Ultimate Party title. Winner takes premiere tickets and glory. Loser gets roasted on our socials." },
  { n: "02", t: "The Donkey Run", d: "Mascots in unicorn horns racing through Spring Break destinations. Absurd, viral, and impossible to look away from." },
  { n: "03", t: "Directional Billboards", d: "Proximity audio that fires a comedy bit the second you walk past. The billboard talks to you. Pure street theater." },
  { n: "04", t: "Beer-Catch AR Game", d: "A mobile AR activation where high scores unlock ticket discount codes. Gamification wired straight into conversion." },
  { n: "05", t: "Confession Booths", d: "Physical booths at festivals and in theater lobbies. Share your story, watch it get animated, watch it go viral." },
  { n: "06", t: "Campus Survival Kits", d: "Practical and hilarious care packages delivered to dorms. Utility becomes a branded moment students keep." },
];

const TEAM: { nm: string; rl: string; li: string[] }[] = [
  {
    nm: "Arthur Spivak",
    rl: "Co-Founder, Laff Mobb",
    li: [
      "Entertainment executive, producer, and personal manager",
      "Produced hit TV including Mad About You and numerous comedy specials",
      "Managed iconic artists from Prince to Tori Amos, plus top comedians",
    ],
  },
  {
    nm: "Jeff Pollack",
    rl: "CEO, Pollack Music & Media",
    li: [
      "Emmy-nominated producer and music executive",
      "Music supervision on 50+ films, including the Oscar-winning Crazy Heart",
      "Produced McCartney 3,2,1 and NAACP Image Award-winning Rhythm + Flow",
    ],
  },
  {
    nm: "Geoff Shames",
    rl: "Co-Founder & CMO, Crowd Control Digital",
    li: [
      "$350M+ in attributable revenue generated",
      "10M+ tickets sold across live events and entertainment",
      "Past work for Live Nation, AEG, NBA, NFL, Formula 1, Apple, and Amazon",
    ],
  },
];

function Photo({ src, className = "", ratio = "aspect-[4/3]" }: { src: string; className?: string; ratio?: string }) {
  return (
    <div
      className={`${styles.photo} ${ratio} w-full overflow-hidden rounded-lg border border-border ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      aria-hidden
    />
  );
}

function SectionHead({ code, label, title, lede }: { code: string; label: string; title: ReactNode; lede?: ReactNode }) {
  return (
    <div className="mb-12 md:mb-1