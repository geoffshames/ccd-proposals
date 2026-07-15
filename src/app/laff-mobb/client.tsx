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
    <div className="mb-12 md:mb-16">
      <SectionLabel number={code} label={label} />
      <h2 className="text-[clamp(2rem,5vw,4.25rem)] leading-[0.95] max-w-[20ch]">{title}</h2>
      {lede && (
        <p className="mt-6 max-w-[64ch] text-text-muted text-[clamp(1rem,1.35vw,1.2rem)] leading-relaxed">{lede}</p>
      )}
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.12em] text-text-muted border border-border rounded px-2.5 py-1">
      {children}
    </span>
  );
}

export function LaffMobbClient() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative">
      {!reduce && <CursorGlow />}

      {/* NAV */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3.5 md:px-10">
          <a href="https://crowdcontroldigital.com" aria-label="Crowd Control Digital" className="shrink-0">
            <Image
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={2198}
              height={307}
              className="h-3.5 w-auto opacity-90"
              priority
            />
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-text-primary"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-accent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-black transition-transform hover:-translate-y-0.5"
          >
            Partner with us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-24 md:px-10">
        <div
          className={`${styles.heroImg} absolute inset-0`}
          style={{ "--hero": `url(${IMG.hero})` } as React.CSSProperties}
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <ScrollReveal variant="fadeIn">
            <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-text-primary/85 md:text-[13px]">
              Laff Mobb Studios &nbsp;×&nbsp; Crowd Control Digital
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h1 className="mt-5 text-[clamp(4.5rem,17vw,15rem)] leading-[0.82]">
              FKD <span className={`text-accent ${styles.glow}`}>UP</span>
              <span className="text-accent">!</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <p className="mt-8 max-w-[30ch] text-[clamp(1.2rem,2.6vw,2rem)] font-medium leading-[1.15]">
              Comedy culture is back. And it is <span className="text-accent">FKD UP.</span> We are not launching a
              film. We are building a movement, and the audience Hollywood forgot is already enrolling.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.24}>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Scroll to enter the ecosystem
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* STAT BAND */}
      <section className="border-y border-border bg-bg-elevated px-5 py-14 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p className="mb-10 max-w-[60ch] font-mono text-[11px] uppercase tracking-[0.22em] text-text-muted">
              The reach a brand partner plugs into on day one
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
            {STATS.map((s) => (
              <ScrollReveal key={s.l} variant="fadeUp">
                <div className="border-l-2 border-accent pl-4">
                  <div className="display text-[clamp(2.5rem,5vw,4rem)] text-text-primary">
                    <AnimatedCounter value={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-2 text-sm text-text-muted">{s.l}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 01 THE VOID */}
      <section id="void" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="01"
            label="The opening"
            title={<>Hollywood abandoned the <span className="text-accent">funniest</span> audience in America.</>}
            lede="Studios traded R-rated comedy for superhero franchises and billion-dollar tentpoles. The 18-to-24 crowd grew up on Superbad and Project X, then got left in the dust. Streaming has comedies, but none of them come with the communal high of laughing your ass off in a packed theater with your friends. The audience never left. The industry did."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["$102M", "Project X box office, on a $12M budget"],
              ["$170M", "Superbad box office, on a $20M budget"],
              ["$236M", "American Pie box office, on an $11M budget"],
            ].map(([big, small]) => (
              <ScrollReveal key={big} variant="fadeUp">
                <div className="frame-full ccd-card h-full rounded-lg p-7">
                  <div className="display text-[clamp(2.4rem,4.5vw,3.4rem)] text-accent">{big}</div>
                  <div className="mt-3 text-text-muted">{small}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-10 max-w-[62ch] text-[clamp(1.05rem,1.5vw,1.35rem)] leading-relaxed">
              The market is starving for outrageous, relatable comedy, and the box office proves it every time
              someone bothers to make it. That gap is our opening. It is also wide open for the brands smart enough
              to own it with us.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 02 MOVEMENT */}
      <section id="movement" className="bg-bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionHead
                code="02"
                label="The thesis"
                title={<>Not a film. <span className="text-accent">A movement.</span></>}
                lede="We are not building a film studio. We are building a brand: a multi-platform comedy ecosystem that engages an audience and develops talent across every comedic medium. The film is one product. The movement is the asset. Every activation, partnership, and piece of content compounds into infrastructure that serves the whole slate for years."
              />
              <p className="max-w-[60ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed">
                Blumhouse did it to horror. Tyler Perry did it to faith-based film. We are running that playbook at
                the audience nobody else is serving. Brands do not buy movies anymore. They buy into culture, and we
                are culture with a distribution engine bolted on.
              </p>
            </div>
            <ScrollReveal variant="scaleIn">
              <Photo src={IMG.reel} ratio="aspect-[3/4]" />
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {ECOSYSTEM.map((e) => (
              <ScrollReveal key={e.t} variant="fadeUp">
                <div className="ccd-card h-full rounded-lg p-5">
                  <div className="display text-lg text-text-primary">{e.t}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{e.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* THE FLYWHEEL */}
          <div className="mt-20">
            <ScrollReveal>
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">The flywheel</div>
                  <h3 className="mt-3 max-w-[18ch] text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.02]">
                    Every piece feeds the <span className="text-accent">next.</span>
                  </h3>
                </div>
                <p className="max-w-[44ch] text-[14px] leading-relaxed text-text-muted md:text-right">
                  The ecosystem is not a list of products. It is a loop. Each turn builds the audience, the talent, and
                  the infrastructure that the next turn runs on.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-4 md:grid-cols-5">
              {FLYWHEEL.map((f, i) => (
                <ScrollReveal key={f.n} variant="fadeUp" delay={i * 0.06}>
                  <div className="ccd-card h-full rounded-lg p-5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12px] text-accent">{f.n}</span>
                      {i < FLYWHEEL.length - 1 ? (
                        <span className="text-accent/40" aria-hidden>
                          {"→"}
                        </span>
                      ) : (
                        <span
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent/70"
                          aria-hidden
                        >
                          {"↺ back to 01"}
                        </span>
                      )}
                    </div>
                    <div className="display mt-3 text-lg text-text-primary">{f.t}</div>
                    <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{f.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <p className="mt-8 max-w-[68ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed">
                That is the flywheel. A brand partner does not buy one spin of it. They take a seat inside a machine
                that keeps turning between films, and every turn makes the next one bigger.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 03 FILM */}
      <section id="film" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <ScrollReveal variant="scaleIn">
            <Photo src={IMG.filmStill} />
          </ScrollReveal>
          <div>
            <SectionHead
              code="03"
              label="The flagship"
              title={<>Our first film: FKD <span className="text-accent">UP!</span></>}
              lede="A Rashomon-style, music-driven Gen Z comedy that captures the chaos, humor, and cultural references of the college experience as it actually is today. The film is already produced. It is the inaugural entry in a three-picture slate from Laff Mobb Presents, a branded comedy pipeline engineered to deliver low-cost, high-return comedies to a global audience."
            />
            <p className="mb-6 max-w-[56ch] text-[clamp(1.02rem,1.4vw,1.2rem)] leading-relaxed text-text-muted">
              A brand does not just sponsor the film. It rides the tentpole moment the entire movement has been
              building toward.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {["Already in the can", "Gen Z ensemble", "Music-driven", "Theatrical Q4 2026", "3-picture slate"].map(
                (p, idx) => (
                  <span
                    key={p}
                    className={`rounded-full border px-4 py-2 font-mono text-[12px] ${
                      idx === 0 ? "border-accent text-accent" : "border-border text-text-primary"
                    }`}
                  >
                    {p}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 04 UNIVERSITY */}
      <section id="university" className="bg-bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="04"
            label="The engine"
            title={<>FKD UP University: the movement is already <span className="text-accent">in session.</span></>}
            lede={
              'FKD UP University is the media arm that builds the audience the film converts. It runs as its own cultural world: a counterculture for a Gen Z rewriting party culture on its own terms, led by rising comedian Thomas "Dope As Yola" as the Dean. Real people submit their wildest stories through an owned portal, the best get animated and amplified, and the tribe grows itself. This is pull, not push.'
            }
          />
          <div className="grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ScrollReveal variant="scaleIn">
              <Photo src={IMG.frat} ratio="aspect-[4/5] lg:aspect-auto lg:h-full" />
            </ScrollReveal>
            <div className="grid grid-cols-2 gap-4">
              {UNI.map((u) => (
                <ScrollReveal key={u.code} variant="fadeUp">
                  <div className="ccd-card flex h-full flex-col rounded-lg p-5">
                    <div className="font-mono text-[11px] tracking-[0.12em] text-accent">{u.code}</div>
                    <div className="display mt-3 text-[clamp(1.6rem,2.4vw,2.1rem)] text-text-primary">{u.v}</div>
                    <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{u.d}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal>
            <p className="mt-10 max-w-[64ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed">
              This is the always-on channel a brand lives inside between films: a tribe that opts in, not an audience
              you rent by the impression.
            </p>
          </ScrollReveal>

          {/* THE DEAN */}
          <ScrollReveal variant="fadeUp">
            <div className="mt-12 overflow-hidden rounded-lg border border-accent/30 bg-bg-card">
              <div className="grid gap-8 p-7 md:grid-cols-[0.85fr_1.15fr] md:p-9">
                <div className="flex flex-col justify-between gap-6 border-b border-border pb-7 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      The Dean · Professor Yola
                    </div>
                    <div className="display mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[0.95]">
                      Thomas <span className="text-accent">{'"Dope As Yola"'}</span>
                    </div>
                    <div className="mt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-text-muted">
                      Comedian. Podcaster. The face of the movement.
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "A multi-format talent: stand-up, podcast, and screen, not a single-platform creator.",
                      "Native credibility with Gen Z that no media buy can manufacture.",
                      "The integration surface brands want: the tribe treats a brand he stands with as one of their own.",
                    ].map((l) => (
                      <li key={l} className="flex gap-3 text-[14px] leading-relaxed text-text-muted">
                        <span className="font-mono text-[13px] text-accent">//</span>
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center gap-5">
                  <p className="text-[clamp(1.05rem,1.5vw,1.28rem)] leading-relaxed">
                    Every movement needs a face. Ours is Thomas, better known as Dope As Yola: the rising comedian who
                    runs FKD UP University as its Dean. He is not a spokesperson we hired. He is the content engine the
                    tribe orbits, the voice they show up for, and the reason the University feels like a place instead of
                    a campaign.
                  </p>
                  <p className="text-[15px] leading-relaxed text-text-muted">
                    He speaks the exact language of the audience we are building, because he is of it. His stories set
                    the tone, his cadence sets the calendar, and his following is the seed the movement grows from. As
                    FKD UP! moves toward theaters, he is the one who carries the audience from the phone to the seat.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 05 AUDIENCE */}
      <section id="audience" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              code="05"
              label="The audience"
              title={<>The <span className="text-accent">18-to-29</span> tribe that moves culture.</>}
              lede="College students and early-career professionals. Roughly a 60/40 male-female split. High nightlife participation, digitally native, and natural social amplifiers who live for shareable moments. For this audience, memes beat billboards and social proof beats trailers. They trust a friend's story over any TV spot."
            />
            <div className="flex flex-wrap gap-2.5">
              {[
                "Core: 18 to 24",
                "Secondary: 30 to 40, 2000s nostalgia",
                "College towns and major metros",
                '"I want to laugh at my own bad decisions"',
              ].map((p, idx) => (
                <span
                  key={p}
                  className={`rounded-full border px-4 py-2 font-mono text-[12px] ${
                    idx === 0 ? "border-accent text-accent" : "border-border text-text-primary"
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <ScrollReveal variant="scaleIn">
            <Photo src={IMG.bar} />
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className={`${styles.marquee} border-y border-border bg-bg-elevated py-6`} aria-hidden>
        <div className={styles.track}>
          {[0, 1].map((rep) => (
            <span key={rep} className="display text-[clamp(1.4rem,3vw,2.2rem)] text-text-primary/50">
              {MARKETS.map((m) => (
                <span key={m.c}>
                  {m.c}
                  <span className="mx-6 text-accent">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 06 REACH / MARKETS */}
      <section id="reach" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="06"
            label="The footprint"
            title={<>50+ college markets, <span className="text-accent">pre-wired.</span></>}
            lede="Our marketing is laser-focused on the markets with the densest concentrations of college students, and in most of them our partners already own the screens and the stages. A brand shows up across all of them at once."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MARKETS.map((m) => (
              <ScrollReveal key={m.c} variant="fadeUp">
                <div className="flex items-center justify-between rounded-lg border border-border bg-bg-card px-4 py-3.5">
                  <div>
                    <div className="text-[15px] font-semibold text-text-primary">{m.c}</div>
                    <div className="font-mono text-[11px] tracking-[0.08em] text-text-muted">{m.d} target demo</div>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-accent">
                      REGAL
                    </span>
                    {m.i && (
                      <span className="rounded border border-border px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-text-muted">
                        IMPROV
                      </span>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
            A representative slice. The full plan spans 50+ markets from New York to Bowling Green.
          </p>
        </div>
      </section>

      {/* 07 PARTNERS */}
      <section id="partners" className="bg-bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="07"
            label="The unfair advantage"
            title={<>Two partners no other indie comedy can <span className="text-accent">buy.</span></>}
            lede="The film launches on infrastructure normally reserved for studio tentpoles, secured at a fraction of the cost. It is how a lean comedy punches far above its weight, and it is the surface a brand partner plugs straight into."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                name: "Regal",
                role: "Theatrical distribution machine",
                img: IMG.regal,
                li: [
                  "7,000+ screens across 400+ locations beside major universities",
                  "Guaranteed screens in 50 college markets",
                  "A loyalty database of 20M+ active members",
                  "Custom student screenings: texting-allowed, late-night, retro comedy nights",
                  "In-theater marketing usually reserved for studio tentpoles",
                ],
              },
              {
                name: "The Improv",
                role: "The most iconic comedy brand worldwide",
                img: null,
                li: [
                  "25+ clubs nationwide with a combined 1M+ live audience each year",
                  "Digital, newsletter, and in-venue reach worth an estimated $2M to $3M in media",
                  "Live tie-ins: pre-release screenings, cast drop-ins, afterparties",
                  "Hundreds of working comedians who double as creators and influencers",
                  "Cultural credibility that cannot be manufactured",
                ],
              },
            ].map((p) => (
              <ScrollReveal key={p.name} variant="fadeUp">
                <div className="ccd-card h-full overflow-hidden rounded-lg">
                  <div className="p-7 pb-4">
                    <div className="display text-[clamp(2rem,4vw,3rem)]">{p.name}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{p.role}</div>
                  </div>
                  <ul className="px-7 pb-7">
                    {p.li.map((line) => (
                      <li key={line} className="flex gap-3 border-t border-border py-3 text-[15px] text-text-muted">
                        <span className="font-mono text-[13px] text-accent">//</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="mt-8 max-w-[60ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-relaxed">
              Studio-level reach at indie cost: screens, stages, comedians, and a 20-million-person loyalty database,
              all pre-wired and waiting for a brand to activate against.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 08 FOR BRANDS */}
      <section id="brands" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="08"
            label="The opportunity"
            title={<>Where a brand <span className="text-accent">plugs in.</span></>}
            lede="We are not selling ad units. We are inviting a small set of founding brand partners to build the movement with us, across every surface the ecosystem touches. Here is what that looks like."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((b, i) => (
              <ScrollReveal key={b.t} variant="fadeUp">
                <div className="frame-full ccd-card h-full rounded-lg p-6">
                  <div className="font-mono text-[12px] text-accent">0{i + 1}</div>
                  <h3 className="mt-3 text-xl">{b.t}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-text-muted">{b.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-10 rounded-lg border border-border bg-bg-card p-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Brand categories we are built for
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {[
                  "Energy & functional drinks",
                  "Non-alc & new-wave beverage",
                  "Streetwear & apparel",
                  "Apps & platforms",
                  "Food & QSR",
                  "Lifestyle & CPG",
                  "Cannabis-adjacent",
                ].map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 09 ROLLOUT */}
      <section id="rollout" className="bg-bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="09"
            label="The rollout"
            title={<>Four phases to a <span className="text-accent">Q4 2026</span> launch.</>}
            lede="A cultural takeover disguised as a movie launch. Each phase builds momentum for the next, and builds reusable infrastructure that serves the whole Laff Mobb slate. Phase 1 is live right now."
          />
          <div className="relative ml-1 pl-8">
            <div className={styles.rail} />
            {PHASES.map((p) => (
              <ScrollReveal key={p.title} variant="fadeUp">
                <div className="relative pb-12 last:pb-0">
                  <span
                    className={`absolute -left-[33px] top-1.5 h-3 w-3 rounded-full border-2 ${
                      p.done ? "border-success bg-success/30" : "border-accent bg-accent/25"
                    }`}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[12px] tracking-[0.1em] text-text-muted">{p.when}</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
                        p.done
                          ? "border-success/40 bg-success/10 text-success"
                          : "border-accent/40 bg-accent/10 text-accent"
                      }`}
                    >
                      {p.flag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-[clamp(1.5rem,3vw,2.3rem)]">{p.title}</h3>
                  <p className="mt-3 max-w-[72ch] leading-relaxed text-text-muted">{p.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10 STUNTS */}
      <section id="stunts" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="10"
            label="The buzz engine"
            title={<>Photographable. Shareable. <span className="text-accent">Impossible to ignore.</span></>}
            lede="Each stunt is designed to be impossible to explain without seeing it. That is the moment word of mouth becomes unstoppable, and every one of these is a canvas a brand can own outright."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {STUNTS.map((s) => (
              <ScrollReveal key={s.t} variant="fadeUp">
                <div className="ccd-card h-full rounded-lg p-6">
                  <div className="font-mono text-[12px] text-accent">{s.n}</div>
                  <h3 className="mt-3 text-xl">{s.t}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-text-muted">{s.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11 WHY NOW */}
      <section className="bg-bg-elevated px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead
              code="11"
              label="Why now"
              title={<>Audience first. Then the <span className="text-accent">blitz.</span></>}
              lede="Markiplier's Iron Lung proves the model. Made for roughly $3M, it grossed $20M to $25M globally in its first week by mobilizing a community built before the marketing ever started. Fans requested the showings. We are architecting FKD UP! the same way: build the tribe first, then let the Regal and Improv networks multiply it."
            />
            <div className="flex flex-wrap gap-2.5">
              {[
                "R-rated comedy is due for a comeback",
                "Laff Mobb has the comedy DNA",
                "We own a lane nobody is playing in",
                "Lean, direct, and disruptive by design",
              ].map((p, idx) => (
                <span
                  key={p}
                  className={`rounded-full border px-4 py-2 font-mono text-[12px] ${
                    idx === 0 ? "border-accent text-accent" : "border-border text-text-primary"
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <ScrollReveal variant="scaleIn">
            <Photo src={IMG.map} />
          </ScrollReveal>
        </div>
      </section>

      {/* 12 TEAM */}
      <section id="team" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <SectionHead
            code="12"
            label="The people"
            title={<>Decades of <span className="text-accent">building brands.</span></>}
            lede="Since 2012, Laff Mobb has produced Laff Mobb Presents specials for Showtime, BET, Dish, Vubiquity, and InDemand, and executive produced We Got Next on Aspire (24 episodes) and Laff Tracks on truTV (three seasons, 36 episodes). It helped bring urban stand-up back to national cable and developed talent including Tiffany Haddish, Karlous Miller, Lil Rel Howery, and Red Grant."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {TEAM.map((t) => (
              <ScrollReveal key={t.nm} variant="fadeUp">
                <div className="ccd-card h-full rounded-lg p-6">
                  <div className="display text-2xl">{t.nm}</div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{t.rl}</div>
                  <ul className="mt-5 space-y-3">
                    {t.li.map((l) => (
                      <li key={l} className="border-t border-border/60 pt-3 text-[14px] leading-relaxed text-text-muted">
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1000px] text-center">
          <ScrollReveal variant="clipUp">
            <blockquote className="display text-[clamp(2rem,6vw,4.75rem)] leading-[1.02]">
              We are not building a film. We are building a medium and a <span className="text-accent">movement.</span>
            </blockquote>
          </ScrollReveal>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-text-muted">
            The idea behind the whole ecosystem
          </p>
        </div>
      </section>

      {/* CLOSING / CONTACT */}
      <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-10 md:py-40">
        <div
          className={`${styles.photo} absolute inset-0 opacity-25`}
          style={{ backgroundImage: `url(${IMG.regal})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 50% 55%, rgba(10,10,10,0.55), #0a0a0a 72%)" }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1000px] text-center">
          <SectionLabel number="13" label="The future of comedy" />
          <h2 className="mx-auto text-[clamp(2.5rem,8vw,7rem)] leading-[0.9]">
            The future of comedy is <span className="text-accent">FKD UP!</span>
          </h2>
          <p className="mx-auto mt-7 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-relaxed text-text-muted">
            Let us bring the funny back to theaters. Laff Mobb Studios is building a self-sustaining comedy machine, and
            the door is open for a small group of founding brand partners to build it with us.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:aspivak@spivakmgmt.com"
              className="rounded-lg border border-border bg-bg-card px-6 py-4 text-left transition-colors hover:border-accent"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Laff Mobb Studios</div>
              <div className="mt-1 text-[15px] text-text-primary">Arthur Spivak &nbsp;·&nbsp; aspivak@spivakmgmt.com</div>
            </a>
            <a
              href="https://crowdcontroldigital.com"
              className="rounded-lg border border-border bg-bg-card px-6 py-4 text-left transition-colors hover:border-accent"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-text-muted">Marketing & brand</div>
              <div className="mt-1 text-[15px] text-text-primary">Crowd Control Digital</div>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-10 md:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.08em] text-text-muted">
          <span>FKD UP! · A Laff Mobb Studios movement</span>
          <span>Confidential · Prepared for brand partnership review · 2026</span>
        </div>
      </footer>
    </main>
  );
}
