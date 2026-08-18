"use client";

/**
 * PONZI BOT × CROWD CONTROL DIGITAL
 * "Ponzi Takes Wall Street" — bespoke campaign prospectus.
 *
 * Design language mirrors ponzi.bot: financial-prospectus serif, terminal mono
 * labels, caution-tape yellow (#EAFF00) on near-black, hazard stripes,
 * `// SECTION 001/010` numbering. Everything animates with Framer Motion —
 * scroll-scrubbed thesis, LED-truck creative demo, drop-sequence timeline,
 * rolling counters, magnetic CTA, marquee bands.
 */

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
} from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/* ----------------------------------------------------------------------------
 * Tokens
 * ------------------------------------------------------------------------- */

const YELLOW = "#EAFF00";
const INK = "#0a0a0a";
const SERIF = '"Times New Roman", Times, Georgia, serif';
const MONO = "var(--font-geist-mono), ui-monospace, monospace";

const EASE = [0.16, 1, 0.3, 1] as const;

const hazard = (size = 12) => ({
  backgroundImage: `repeating-linear-gradient(45deg, ${YELLOW} 0 ${size}px, ${INK} ${size}px ${size * 2}px)`,
});

/* ----------------------------------------------------------------------------
 * Content
 * ------------------------------------------------------------------------- */

const TICKER_TOP =
  "CAMPAIGN PROSPECTUS ▲ $100K WORKING BUDGET ▲ 6 TRUCK DOMINATION DAYS ▲ 20 CAB TOPS ▲ 20+ KOL VOICES ▲ 50M+ EARNED TARGET ▲ GENESIS WEEK ▲ EXPECT NOTHING. PLAN EVERYTHING. ▲ ";

const TICKER_MID =
  "ADVERTISE THE JOKE. NOT THE OFFER. ▲ IF IT DOESN'T SCREENSHOT, IT DIDN'T HAPPEN ▲ EARNED IS THE PRODUCT. PAID IS THE INSURANCE. ▲ ";

const FINDINGS = [
  {
    n: "F-01",
    label: "THE THESIS",
    title: "The name is the distribution.",
    body: "Projects spend millions engineering a viral moment; Ponzi Bot's ticker does it for free. “Someone is running PONZI ads outside the New York Stock Exchange” is a headline that writes itself in every language, on every platform, without a media dollar behind it. The stunt isn't decoration on the strategy — it is the strategy.",
    src: "CATEGORY ANALYSIS",
  },
  {
    n: "F-02",
    label: "FOUND CREATIVE",
    title: "The site already wrote the ads.",
    body: "“Lock $ponzi. Expect nothing.” “REWARDS MAY BE ZERO.” “Never your loss.” The most aggressive risk language in crypto is also the funniest copy in crypto. We don't invent a campaign voice — we blow the existing one up to billboard scale, hazard stripes and all.",
    src: "PONZI.BOT TEARDOWN",
  },
  {
    n: "F-03",
    label: "THE WINDOW",
    title: "Genesis is a one-shot moment.",
    body: "The program sits at Epoch 000 with the token marked “soon” — and memecoin attention half-life is measured in hours, not weeks. The launch moment has to be engineered in advance and captured on camera, because there is no second first-week.",
    src: "LAUNCH-CYCLE ANALYSIS",
  },
  {
    n: "F-04",
    label: "THE POSTURE",
    title: "The forbidden fruit is the gag.",
    body: "The program is not available to U.S. persons — so we don't advertise the offer, we advertise the joke. Creative carries the project's own disclaimers, sells nothing, and points at the spectacle. Forbidden fruit staged thirty feet from the NYSE is a stronger hook than any CTA we could write.",
    src: "PONZI.BOT PROGRAM TERMS",
  },
  {
    n: "F-05",
    label: "THE PRECEDENT",
    title: "OOH is crypto's screenshot machine.",
    body: "From Coinbase's bouncing QR code to memecoin Times Square buys, physical media in iconic financial locations consistently out-earns its cost in reposts, quote-tweets, and press coverage. $25K buys the photograph; the internet buys the reach.",
    src: "CRYPTO OOH CASE HISTORY",
  },
];

const THESIS =
  "We don't buy reach. We manufacture one unmissable moment — caution tape circling the New York Stock Exchange on genesis week — capture it beautifully, and tax every repost, screenshot, and news hit that follows.";

const LED_LINES = [
  "LOCK $PONZI. EXPECT NOTHING.",
  "REWARDS MAY BE ZERO.",
  "THE MOST HONEST TICKER ON THIS STREET.",
  "NOT AVAILABLE TO U.S. PERSONS. YOU'RE WELCOME.",
  "THIS AD SELLS NOTHING.",
];

const STUNT_BEATS = [
  {
    k: "STEEL",
    title: "6 LED truck domination days",
    body: "Full-wrap digital billboard trucks circling the NYSE, Wall Street, and Broad Street during market hours — routed for maximum screenshot density, timed to genesis week.",
  },
  {
    k: "AMBIENT",
    title: "20 taxi tops × 4 weeks",
    body: "TLC-permitted rooftop units running citywide with FiDi weighting — the layer that keeps the joke in frame long after launch week.",
  },
  {
    k: "CAPTURE",
    title: "2 production shoot days",
    body: "Photo + video crew treating the stunt as a content shoot. The master assets every KOL, press outlet, and paid placement runs on — cut same-day.",
  },
  {
    k: "CREATIVE",
    title: "8 hazard-stripe executions",
    body: "Caution-tape yellow, bold prospectus serif, the project's own risk language at billboard scale. Built for the photo of the ad, not just the ad.",
  },
];

const DROPS = [
  {
    t: "T-0H",
    who: "PRESS EXCLUSIVES",
    body: "Embargo lifts. Crypto trades run the story with capture-crew assets — the stunt is the press release.",
  },
  {
    t: "T+2H",
    who: "ANCHOR VOICES ×3",
    body: "Authority accounts post the sighting. The timeline decides this is real, and that it is funny.",
  },
  {
    t: "T+6H",
    who: "MID TIER ×8",
    body: "Velocity wave. Quote-tweet chains, reaction takes, first memes of the memes.",
  },
  {
    t: "T+24H",
    who: "MICRO FLOOD ×12+",
    body: "Ubiquity wave plus Telegram alpha groups. The moment now looks organic everywhere at once — because by this point, it is.",
  },
];

const PAID = [
  {
    name: "X ADS TAKEOVER",
    amount: 12000,
    pct: 48,
    body: "Promoted stunt content against CT, fintwit, and finance-adjacent audiences — the platform where the narrative actually trades.",
  },
  {
    name: "PROGRAMMATIC + REDDIT",
    amount: 8000,
    pct: 32,
    body: "Nexxen-run video and display plus natives into r/solana and r/CryptoCurrency. Reach beyond the timeline — arguments included.",
  },
  {
    name: "CRYPTO-NATIVE PLACEMENTS",
    amount: 5000,
    pct: 20,
    body: "Dexscreener and CoinGecko inventory catching watchlist traffic at the exact moment curiosity becomes a chart tab.",
  },
];

const WEEKS = [
  { w: "W1", phase: "LOAD", hot: false },
  { w: "W2", phase: "LOAD", hot: false },
  { w: "W3", phase: "DETONATE", hot: true },
  { w: "W4", phase: "TAX", hot: false },
  { w: "W5", phase: "TAX", hot: false },
  { w: "W6", phase: "TAX", hot: false },
  { w: "W7", phase: "COMPOUND", hot: false },
  { w: "W8", phase: "COMPOUND", hot: false },
];

const PHASES = [
  {
    n: "P-01",
    name: "LOAD THE CANNON",
    date: "SEP 1 – SEP 11",
    body: "Hazard-stripe suite to full production. Steel booked and routed. 20+ voices contracted under embargo. Press exclusives offered. Pixels, UTMs, and the counsel sign-off loop live.",
  },
  {
    n: "P-02",
    name: "DETONATE",
    date: "SEP 14 – SEP 18",
    body: "Trucks circle the NYSE Monday–Friday, open to close. Capture crew rolls. Exclusives and KOL waves drop in sequence. Daily war room steers the narrative in real time.",
  },
  {
    n: "P-03",
    name: "TAX THE COVERAGE",
    date: "SEP 21 – OCT 9",
    body: "Reactive meme wave, X Spaces, community bounty. Paid scales proven hooks; FiDi geo-audiences and stunt engagers move into retargeting.",
  },
  {
    n: "P-04",
    name: "COMPOUND + REPORT",
    date: "OCT 12 – OCT 23",
    body: "Third creative flight counters fatigue. Epoch-beat system templatized into a Monday ritual. Full wrap: earned valuation, paid performance, always-on roadmap.",
  },
];

const TARGETS: { value: number; suffix: string; label: string; note: string; prefix?: string }[] = [
  { value: 50, suffix: "M+", label: "EARNED IMPRESSIONS", note: "X, TikTok, Reddit + press — benchmarked vs. comparable crypto OOH moments" },
  { value: 15, suffix: "+", label: "PRESS PICKUPS", note: "Crypto trades + business desks drawn by the NYSE optics" },
  { value: 10, suffix: "×", label: "@PONZIBOTWTF GROWTH", note: "The owned asset that compounds after the campaign ends" },
  { value: 5, prefix: "<$", suffix: "", label: "BLENDED PAID CPM", note: "Earned momentum drives paid efficiency under cold-traffic benchmarks" },
];

const PROCEEDS = [
  {
    name: "THE WALL STREET TAKEOVER",
    desc: "LED truck domination, taxi-top flight, hazard-stripe creative suite, stunt capture. Pass-through at cost.",
    amount: 25000,
    pct: 21.7,
  },
  {
    name: "THE SOCIAL PR MACHINE",
    desc: "Contracted KOL network, crypto + business press, launch war room, X Spaces, $5K meme bounty pool. Pass-through at cost.",
    amount: 50000,
    pct: 43.5,
  },
  {
    name: "PAID AMPLIFICATION",
    desc: "X Ads, Nexxen programmatic, Reddit, crypto-native placements, full retargeting stack. Billed at cost.",
    amount: 25000,
    pct: 21.7,
  },
  {
    name: "CCD CAMPAIGN COMMAND",
    desc: "Strategy, creative direction, buying, trafficking, compliance guardrails, war room, reporting. Flat fee — 15% of working.",
    amount: 15000,
    pct: 13.0,
  },
];

const FOOTNOTES = [
  ["1", "Incremental media beyond the committed $100K working budget scales at cost + 15% management."],
  ["2", "Anchor voices above the committed pool are optioned transparently and contracted only on client approval."],
  ["3", "Second-market flights (Miami, Austin, London) bolt on using the same creative system and vendor stack, at cost + 15%."],
  ["4", "Unspent working budget is credited or rolled at client's option. No hidden margin on media, talent, or steel."],
];

const RISKS = [
  {
    n: "RF-01",
    title: "Attention is volatile.",
    body: "Memecoin cycles compress without warning; a competing narrative can eat the week. Mitigation: the $25K paid layer makes reach a floor, not a prayer — and the drop sequence is built to peak inside 24 hours, not across a month.",
  },
  {
    n: "RF-02",
    title: "Platforms are moody about crypto.",
    body: "Meta and Google are largely closed to memecoins; policies shift mid-flight. Mitigation: the channel mix is built entirely from venues that want this money — X, programmatic, Reddit, and crypto-native inventory.",
  },
  {
    n: "RF-03",
    title: "The gag requires discipline.",
    body: "One asset that reads as solicitation breaks the posture. Mitigation: every execution carries the project's own disclaimers, sells nothing, and clears client counsel before it ships. We advertise the joke. Only the joke.",
  },
  {
    n: "RF-04",
    title: "Weather, permits, and New York.",
    body: "Steel is physical; the city is the city. Mitigation: TLC-permitted vendors, backup domination days built into the booking, and creative that photographs even better in the rain.",
  },
];

const NEXT_STEPS = [
  ["01", "APPROVE THE SCOPE", "Green-light the plan, lock the genesis-aligned window. The 8-week clock starts on mobilization."],
  ["02", "CREATIVE SPRINT + COUNSEL LOOP", "Hazard-stripe suite to full production in week one; every execution through client counsel."],
  ["03", "BOOK THE STEEL, CONTRACT THE VOICES", "Trucks, cabs, and 20+ voices locked under embargo — sequenced to the hour."],
  ["04", "DETONATE ON GENESIS WEEK", "Trucks circle the NYSE. Capture rolls. Exclusives drop. The war room runs daily."],
  ["05", "TAX, COMPOUND, REPORT", "Five weeks of amplification and retargeting, then a wrap with earned-media valuation."],
];

const CASES = [
  ["BBNO$", "1.4B+", "TIKTOK VIEWS"],
  ["PESO PLUMA", "8.5B+", "SPOTIFY STREAMS"],
  ["KSI", "125M+", "CAMPAIGN REACH"],
  ["ILLENIUM", "70K+", "TICKETS SOLD"],
];

/* ----------------------------------------------------------------------------
 * Primitives
 * ------------------------------------------------------------------------- */

function MonoTag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`text-[10px] tracking-[0.28em] uppercase ${className}`}
      style={{ fontFamily: MONO }}
    >
      {children}
    </span>
  );
}

function SectionHead({
  index,
  total = "010",
  title,
  right,
}: {
  index: string;
  total?: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[#1e1e1e] pb-4">
        <MonoTag className="text-[#EAFF00] whitespace-nowrap">
          {"// "}
          {index} / {total}
        </MonoTag>
        <MonoTag className="text-white/35">{right ?? "ALL TIMES EST · MARKET HOURS ONLY"}</MonoTag>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mt-8 text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[0.95] font-bold text-white"
        style={{ fontFamily: SERIF, letterSpacing: "-0.02em" }}
      >
        {title}
      </motion.h2>
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Infinite marquee band. */
function Marquee({
  text,
  dark = false,
  duration = 28,
}: {
  text: string;
  dark?: boolean;
  duration?: number;
}) {
  return (
    <div
      className={`overflow-hidden border-y ${dark ? "border-[#1e1e1e] bg-[#0a0a0a]" : "border-transparent"} py-3`}
      style={dark ? undefined : { background: YELLOW }}
      aria-hidden
    >
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-[13px] font-bold tracking-[0.22em] pr-4"
            style={{
              fontFamily: MONO,
              color: dark ? "transparent" : INK,
              WebkitTextStroke: dark ? `1px ${YELLOW}` : undefined,
            }}
          >
            {text.repeat(3)}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Rolls a number up when scrolled into view. */
function Counter({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/** One word of the scroll-scrubbed thesis. */
function ScrubWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.13, 1]);
  const color = useTransform(progress, range, ["#3a3a3a", "#ffffff"]);
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

/** Magnetic CTA button. */
function MagneticButton({
  href,
  children,
  invert = false,
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  invert?: boolean;
  arrow?: boolean;
}) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const onMove = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        x,
        y,
        fontFamily: MONO,
        letterSpacing: "0.12em",
        background: invert ? "transparent" : YELLOW,
        color: invert ? YELLOW : INK,
      }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex h-14 w-full sm:w-auto items-center justify-center gap-3 px-8 text-[12px] font-bold uppercase whitespace-nowrap leading-none transition-[filter,background-color] duration-300 ${
        invert
          ? "border border-[#EAFF00] hover:bg-[#EAFF00]/10"
          : "hover:brightness-110"
      }`}
    >
      <span className="pt-px">{children}</span>
      {arrow && (
        <span aria-hidden className="text-[14px] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </motion.a>
  );
}

/* ----------------------------------------------------------------------------
 * Hero
 * ------------------------------------------------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const title = ["PONZI", "TAKES", "WALL", "STREET."];

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* backdrop */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ponzi-bot/hero-bg.jpg"
          alt=""
          className="w-full h-[120%] object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/30" />
      </motion.div>

      {/* hazard top border */}
      <div className="relative h-[14px] w-full" style={hazard()} />

      {/* masthead */}
      <div className="relative flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1e1e1e]">
        <MonoTag className="text-white/70">CROWD CONTROL DIGITAL</MonoTag>
        <MonoTag className="hidden md:block text-white/40">
          CAMPAIGN PROSPECTUS · CONFIDENTIAL · AUG 2026
        </MonoTag>
        <a href="#execute" className="group">
          <MonoTag className="text-[#EAFF00] group-hover:text-white transition-colors">
            EXECUTE →
          </MonoTag>
        </a>
      </div>

      {/* title block */}
      <motion.div style={{ opacity: fade }} className="relative flex-1 flex flex-col justify-center px-6 md:px-12 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5" style={{ background: YELLOW }} />
          <MonoTag className="text-white/60">
            PREPARED FOR PONZI BOT · $PONZI · SOLANA · EPOCH 000 → 001
          </MonoTag>
        </motion.div>

        <h1
          className="font-bold leading-[0.88] text-[clamp(3.4rem,12.5vw,11.5rem)]"
          style={{ fontFamily: SERIF, letterSpacing: "-0.03em" }}
        >
          {title.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 90 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.11, duration: 1, ease: EASE }}
              className="inline-block mr-[0.22em]"
              style={
                i >= 2
                  ? { background: YELLOW, color: INK, padding: "0 0.08em", marginTop: "0.04em" }
                  : { color: "#ffffff" }
              }
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: EASE }}
          className="mt-10 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-white/65"
        >
          A $100,000 working budget, one genesis week, and the most honest ticker in crypto —
          staged thirty feet from the New York Stock Exchange. An 8-week launch campaign where
          the internet does the advertising.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-12 flex flex-wrap gap-x-12 gap-y-4"
        >
          {[
            ["WORKING BUDGET", "$100,000"],
            ["CCD COMMAND FEE", "$15,000"],
            ["FLIGHT", "8 WEEKS · SEP–OCT 2026"],
            ["STATUS", "AWAITING APPROVAL"],
          ].map(([k, v]) => (
            <div key={k}>
              <MonoTag className="text-white/35 block mb-1.5">{k}</MonoTag>
              <span className="text-[15px] font-bold text-white" style={{ fontFamily: MONO }}>
                {v}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* bottom ticker */}
      <div className="relative">
        <Marquee text={TICKER_TOP} duration={34} />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 001 — The Situation
 * ------------------------------------------------------------------------- */

function Situation() {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="001" title="The Situation" right="FIVE FINDINGS · NO FLUFF" />

      {/* lede finding */}
      <Reveal className="border border-[#1e1e1e] bg-[#0d0d0d] p-8 md:p-14 mb-6">
        <div className="flex items-center justify-between mb-8">
          <MonoTag className="text-[#EAFF00]">{FINDINGS[0].n} · {FINDINGS[0].label}</MonoTag>
          <MonoTag className="text-white/30">{FINDINGS[0].src}</MonoTag>
        </div>
        <p
          className="text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.08] font-bold text-white max-w-4xl"
          style={{ fontFamily: SERIF, letterSpacing: "-0.015em" }}
        >
          {FINDINGS[0].title}
        </p>
        <p className="mt-8 max-w-3xl text-[16px] md:text-[17px] leading-relaxed text-white/60">
          {FINDINGS[0].body}
        </p>
      </Reveal>

      {/* remaining findings */}
      <div className="grid md:grid-cols-2 gap-6">
        {FINDINGS.slice(1).map((f, i) => (
          <Reveal key={f.n} delay={i * 0.07} className="border border-[#1e1e1e] bg-[#0d0d0d] p-8 md:p-10 group hover:border-[#333] transition-colors">
            <div className="flex items-center justify-between mb-6">
              <MonoTag className="text-[#EAFF00]">{f.n} · {f.label}</MonoTag>
              <MonoTag className="text-white/30">{f.src}</MonoTag>
            </div>
            <h3 className="text-[24px] md:text-[28px] font-bold text-white leading-tight" style={{ fontFamily: SERIF }}>
              {f.title}
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-white/60">{f.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-6">
        <div className="border-l-2 pl-6 py-2" style={{ borderColor: YELLOW }}>
        <p className="text-[15px] leading-relaxed text-white/50 max-w-3xl">
          <span className="text-white/80 font-bold">Why now:</span> the memecoin market has rotated
          into the honesty meta — tokens that say the quiet part loud are outperforming utility
          cosplay. Ponzi Bot is the terminal expression of that trade, and it arrives with something
          the lane has never had: a real on-chain mechanism (non-custodial Streamflow locks, weekly
          epochs, buyback-and-burn) that gives media something to cover after the laugh. First
          honest joke to Wall Street wins the lane.
        </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 002 — The Thesis (scroll-scrubbed)
 * ------------------------------------------------------------------------- */

function Thesis() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = THESIS.split(" ");

  return (
    <section className="relative border-y border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-[0.1] pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/ponzi-bot/editorial.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div ref={ref} className="px-6 md:px-12 py-24 md:py-32 max-w-[1400px] mx-auto relative">
        <div className="flex items-baseline justify-between mb-14">
          <MonoTag className="text-[#EAFF00]">{"// 002 / 010"}</MonoTag>
          <MonoTag className="text-white/35">OPERATING THESIS</MonoTag>
        </div>
        <p
          className="text-[clamp(2rem,5.2vw,4.6rem)] leading-[1.12] font-bold max-w-5xl"
          style={{ fontFamily: SERIF, letterSpacing: "-0.015em" }}
        >
          {words.map((w, i) => (
            <ScrubWord
              key={i}
              word={w}
              progress={scrollYProgress}
              range={[i / words.length, Math.min(1, (i + 1.6) / words.length)]}
            />
          ))}
        </p>
        <div className="mt-16 grid md:grid-cols-4 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
          {["MOMENT", "CAPTURE", "DISTRIBUTION", "AMPLIFICATION"].map((s, i) => (
            <Reveal key={s} delay={i * 0.08} className="bg-[#0a0a0a] p-6">
              <MonoTag className="text-[#EAFF00] block mb-3">0{i + 1}</MonoTag>
              <span className="text-[15px] font-bold text-white tracking-wide" style={{ fontFamily: MONO }}>
                {s}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 003 — The Stunt
 * ------------------------------------------------------------------------- */

function LedTruck() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % LED_LINES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="select-none">
      <MonoTag className="text-white/40 block mb-4">
        LIVE CREATIVE DEMO · TERRITORIES 001–005 · SUBJECT TO COUNSEL SIGN-OFF
      </MonoTag>
      {/* truck body */}
      <div className="border border-[#2a2a2a] bg-[#0d0d0d] p-3 md:p-4">
        <div
          className="relative h-[150px] md:h-[210px] flex items-center justify-center overflow-hidden border border-[#2a2a2a]"
          style={{ background: "#050505", boxShadow: `inset 0 0 80px rgba(234,255,0,0.08)` }}
        >
          {/* scanlines */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent 0 3px, rgba(0,0,0,0.55) 3px 4px)",
            }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -26, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: EASE }}
              className="px-6 text-center font-bold leading-tight text-[clamp(1.25rem,3.4vw,2.6rem)]"
              style={{ fontFamily: SERIF, color: YELLOW, textShadow: `0 0 26px rgba(234,255,0,0.5)` }}
            >
              {LED_LINES[i]}
            </motion.span>
          </AnimatePresence>
          {/* hazard strip inside screen bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[8px]" style={hazard(7)} />
        </div>
        {/* undercarriage */}
        <div className="flex items-center justify-between px-2 pt-3">
          <div className="flex gap-3 shrink-0">
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-[#2a2a2a] bg-[#111]" />
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-[#2a2a2a] bg-[#111]" />
          </div>
          <MonoTag className="text-white/30 flex-1 text-center px-3 hidden sm:block">
            MOBILE UNIT 01 · NYSE LOOP · MKT HOURS
          </MonoTag>
          <div className="flex gap-3 shrink-0">
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-[#2a2a2a] bg-[#111]" />
            <span className="w-8 h-8 md:w-10 md:h-10 rounded-full border-[3px] border-[#2a2a2a] bg-[#111]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Stunt() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const routeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: routeProg } = useScroll({ target: routeRef, offset: ["start 0.9", "start 0.35"] });
  const pathLength = useSpring(routeProg, { stiffness: 90, damping: 24 });

  return (
    <section className="py-28 md:py-40">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <SectionHead index="003" title="The Stunt" right="$25,000 · GENESIS WEEK · FIDI" />
      </div>

      {/* full-bleed parallax image */}
      <div ref={imgRef} className="relative h-[54vh] md:h-[74vh] overflow-hidden border-y border-[#1e1e1e]">
        <motion.div style={{ y }} className="absolute inset-[-10%_0]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ponzi-bot/hero1.png"
            alt="LED billboard truck in the Financial District"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(1.25) contrast(1.02)" }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12">
          <MonoTag className="text-white/70">FIG. 01 — THE PHOTOGRAPH THE INTERNET TAKES FOR US</MonoTag>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mt-20 grid lg:grid-cols-2 gap-16 items-start">
        {/* left: route + beats */}
        <div ref={routeRef}>
          <div className="border border-[#1e1e1e] bg-[#0d0d0d] p-8 mb-10">
            <MonoTag className="text-white/40 block mb-6">DOMINATION LOOP · MARKET HOURS ONLY</MonoTag>
            <svg viewBox="0 0 400 200" className="w-full">
              {/* faint street grid */}
              {[40, 96, 152].map((gy) => (
                <line key={gy} x1="0" y1={gy} x2="400" y2={gy} stroke="#1a1a1a" strokeWidth="1" />
              ))}
              {[110, 220, 330].map((gx) => (
                <line key={gx} x1={gx} y1="0" x2={gx} y2="200" stroke="#1a1a1a" strokeWidth="1" />
              ))}
              <motion.path
                d="M 30 160 L 150 160 L 150 96 L 260 96 L 260 40 L 372 40"
                fill="none"
                stroke={YELLOW}
                strokeWidth="2.5"
                style={{ pathLength }}
              />
              {/* waypoints — labels placed in quadrants the path never enters */}
              {(
                [
                  { x: 30, y: 160, label: "BOWLING GREEN", tx: 30, ty: 184, anchor: "start" },
                  { x: 150, y: 96, label: "NYSE · 11 WALL ST", tx: 142, ty: 84, anchor: "end" },
                  { x: 260, y: 96, label: "FEDERAL HALL", tx: 268, ty: 118, anchor: "start" },
                  { x: 372, y: 40, label: "WATER ST", tx: 372, ty: 24, anchor: "end" },
                ] as const
              ).map((p) => (
                <g key={p.label}>
                  <rect x={p.x - 4} y={p.y - 4} width="8" height="8" fill={YELLOW} />
                  <text
                    x={p.tx}
                    y={p.ty}
                    textAnchor={p.anchor}
                    fill="rgba(255,255,255,0.55)"
                    fontSize="9"
                    fontFamily="monospace"
                    letterSpacing="1.5"
                  >
                    {p.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-px bg-[#1e1e1e] border border-[#1e1e1e]">
            {STUNT_BEATS.map((b, i) => (
              <Reveal key={b.k} delay={i * 0.06} className="bg-[#0a0a0a] p-7 flex gap-6">
                <MonoTag className="text-[#EAFF00] pt-1 shrink-0 w-[74px]">{b.k}</MonoTag>
                <div>
                  <h4 className="text-[19px] font-bold text-white" style={{ fontFamily: SERIF }}>
                    {b.title}
                  </h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/55">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* right: LED demo + taxi image */}
        <div className="space-y-10">
          <Reveal>
            <LedTruck />
          </Reveal>
          <Reveal delay={0.1} className="relative border border-[#1e1e1e] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ponzi-bot/hero2.png" alt="NYC taxi with glowing rooftop unit" className="w-full h-[280px] md:h-[340px] object-cover" />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-3 bg-[#0a0a0a]/85 backdrop-blur-sm">
              <MonoTag className="text-white/60">FIG. 02 — AMBIENT LAYER · 20 UNITS · 4 WEEKS</MonoTag>
              <MonoTag className="text-[#EAFF00]">TLC PERMITTED</MonoTag>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 004 — The Machine (drop sequence)
 * ------------------------------------------------------------------------- */

function Machine() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });
  const lineScale = useTransform(line, [0, 1], [0, 1]);

  return (
    <section className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="004" title="The Machine" right="$50,000 · SOCIAL PR" />
      <div className="grid lg:grid-cols-[1fr_360px] gap-16">
        <div ref={ref} className="relative">
          {/* progress spine */}
          <motion.div
            className="absolute left-[7px] top-2 bottom-2 w-[2px] origin-top"
            style={{ background: YELLOW, scaleY: lineScale }}
          />
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[#1e1e1e] -z-10" />

          <div className="space-y-14 pl-12">
            {DROPS.map((d, i) => (
              <Reveal key={d.t} delay={i * 0.05} className="relative">
                <span className="absolute -left-[48px] top-1.5 w-4 h-4" style={{ background: i === 0 ? YELLOW : "#1e1e1e", outline: `1px solid ${i === 0 ? YELLOW : "#333"}` }} />
                <div className="flex items-baseline gap-5 mb-2">
                  <span className="text-[26px] md:text-[34px] font-bold" style={{ fontFamily: SERIF, color: YELLOW }}>
                    {d.t}
                  </span>
                  <MonoTag className="text-white/80">{d.who}</MonoTag>
                </div>
                <p className="text-[15px] leading-relaxed text-white/55 max-w-xl">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {[
            ["20+", "CONTRACTED VOICES", "Anchor ×3 · Mid ×8 · Micro ×12+ — tiered, embargoed, sequenced to the hour."],
            ["15+", "PRESS TARGETS", "Cointelegraph / Decrypt / The Block tier, plus business desks who can't resist the optics."],
            ["5", "WAR ROOM DAYS", "Daily command cycle across client, KOLs, press, and paid while the moment is live."],
            ["$5K", "MEME BOUNTY", "The timeline gets paid to out-create the agency. It will."],
          ].map(([v, k, d2], i) => (
            <Reveal key={k} delay={i * 0.06} className="border border-[#1e1e1e] bg-[#0d0d0d] p-7">
              <span className="text-[40px] font-bold leading-none" style={{ fontFamily: SERIF, color: YELLOW }}>
                {v}
              </span>
              <MonoTag className="block mt-3 mb-2 text-white/70">{k}</MonoTag>
              <p className="text-[13.5px] leading-relaxed text-white/50">{d2}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 005 — The Amplifier
 * ------------------------------------------------------------------------- */

function Amplifier() {
  return (
    <section className="border-y border-[#1e1e1e] bg-[#0d0d0d]">
      <div className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
        <SectionHead index="005" title="The Amplifier" right="$25,000 · PAID MEDIA" />
        <div className="space-y-px bg-[#1e1e1e] border border-[#1e1e1e]">
          {PAID.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06} className="bg-[#0a0a0a] p-8 md:p-10 grid md:grid-cols-[220px_1fr_140px] gap-6 items-center">
              <div>
                <MonoTag className="text-white/80 block">{p.name}</MonoTag>
                <span className="text-[30px] font-bold" style={{ fontFamily: SERIF, color: YELLOW }}>
                  ${(p.amount / 1000).toFixed(0)}K
                </span>
              </div>
              <div>
                <div className="h-[10px] bg-[#161616] relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${p.pct}%` }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
                    className="absolute inset-y-0 left-0"
                    style={hazard(6)}
                  />
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-white/55">{p.body}</p>
              </div>
              <MonoTag className="text-white/40 md:text-right">{p.pct}% OF PAID</MonoTag>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-6 flex items-start gap-4 border border-[#1e1e1e] p-6">
          <span className="w-2 h-2 mt-2 shrink-0" style={{ background: YELLOW }} />
          <p className="text-[14px] leading-relaxed text-white/50">
            <span className="text-white/80 font-bold" style={{ fontFamily: MONO }}>RETARGETING STACK · INCLUDED —</span>{" "}
            FiDi device IDs and stunt-content engagers roll into retargeting pools across every
            channel. Nobody who touched the moment gets to forget it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 006 — The Calendar
 * ------------------------------------------------------------------------- */

function Calendar() {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="006" title="The Calendar" right="SEP 1 – OCT 23 · 2026" />

      {/* week strip — mirrors ponzi.bot's epoch bar */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-px bg-[#1e1e1e] border border-[#1e1e1e] mb-16">
        {WEEKS.map((w, i) => (
          <motion.div
            key={w.w}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: EASE }}
            className="p-3 md:p-5 text-center relative overflow-hidden"
            style={{ background: w.hot ? YELLOW : "#0a0a0a" }}
          >
            <MonoTag className={w.hot ? "text-black/60" : "text-white/35"}>{w.w}</MonoTag>
            <div
              className="mt-2 text-[9px] md:text-[13px] font-bold tracking-[0.04em] md:tracking-[0.12em]"
              style={{ fontFamily: MONO, color: w.hot ? INK : "rgba(255,255,255,0.75)" }}
            >
              {w.phase}
            </div>
            {w.hot && (
              <motion.div
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-black"
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PHASES.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.06} className="border border-[#1e1e1e] bg-[#0d0d0d] p-8 md:p-10">
            <div className="flex items-baseline justify-between mb-5">
              <MonoTag className="text-[#EAFF00]">{p.n}</MonoTag>
              <MonoTag className="text-white/35">{p.date}</MonoTag>
            </div>
            <h3 className="text-[24px] md:text-[27px] font-bold text-white" style={{ fontFamily: SERIF }}>
              {p.name}
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/55">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 007 — Targets
 * ------------------------------------------------------------------------- */

function Targets() {
  return (
    <section className="border-y border-[#1e1e1e]" style={{ background: "#0d0d0d" }}>
      <div className="px-6 md:px-12 py-28 md:py-36 max-w-[1400px] mx-auto">
        <SectionHead index="007" title="The Targets" right="DIRECTIONAL · NOT GUARANTEES" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
          {TARGETS.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.07} className="bg-[#0a0a0a] p-9">
              <span
                className="block text-[clamp(3rem,5vw,4.6rem)] font-bold leading-none"
                style={{ fontFamily: SERIF, color: YELLOW }}
              >
                <Counter value={t.value} prefix={t.prefix ?? ""} suffix={t.suffix} />
              </span>
              <MonoTag className="block mt-5 mb-3 text-white/80">{t.label}</MonoTag>
              <p className="text-[13px] leading-relaxed text-white/45">{t.note}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mt-6 text-[12px] text-white/35" style={{ fontFamily: MONO }}>
            Targets are strategic benchmarks based on comparable campaigns — directional, not promised.
            (The client, of all clients, will appreciate the disclaimer.)
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 008 — Use of Proceeds
 * ------------------------------------------------------------------------- */

function Proceeds() {
  return (
    <section className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
      <SectionHead index="008" title="Use of Proceeds" right="USD · PASS-THROUGH AT COST" />

      <div className="border border-[#1e1e1e]">
        {PROCEEDS.map((r, i) => (
          <Reveal
            key={r.name}
            delay={i * 0.05}
            className="grid md:grid-cols-[1fr_repeat(2,170px)] gap-4 md:gap-8 items-center px-7 md:px-10 py-8 border-b border-[#1e1e1e] bg-[#0d0d0d] hover:bg-[#101010] transition-colors"
          >
            <div>
              <div className="flex items-center gap-4">
                <MonoTag className="text-[#EAFF00]">{String(i + 1).padStart(2, "0")}</MonoTag>
                <h4 className="text-[18px] md:text-[20px] font-bold text-white" style={{ fontFamily: SERIF }}>
                  {r.name}
                </h4>
              </div>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/50 md:pr-10">{r.desc}</p>
              <div className="mt-4 h-[6px] bg-[#161616] relative overflow-hidden max-w-md">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${r.pct * 2}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
                  className="absolute inset-y-0 left-0"
                  style={{ background: YELLOW }}
                />
              </div>
            </div>
            <MonoTag className="text-white/40 md:text-right">{r.pct}% OF TOTAL</MonoTag>
            <span className="text-[24px] md:text-[28px] font-bold md:text-right" style={{ fontFamily: SERIF, color: "#fff" }}>
              $<Counter value={r.amount} />
            </span>
          </Reveal>
        ))}

        {/* total row */}
        <Reveal>
          <div
            className="flex flex-col md:flex-row md:items-center justify-between gap-3 px-7 md:px-10 py-9"
            style={{ background: YELLOW }}
          >
            <span className="text-[13px] font-bold tracking-[0.24em] uppercase" style={{ fontFamily: MONO, color: INK }}>
              TOTAL — WORKING BUDGET + FEE
            </span>
            <span className="text-[34px] md:text-[40px] font-bold leading-none" style={{ fontFamily: SERIF, color: INK }}>
              $<Counter value={115000} />
            </span>
          </div>
        </Reveal>
      </div>

      {/* payment + footnotes */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <Reveal className="border border-[#1e1e1e] bg-[#0d0d0d] p-8">
          <MonoTag className="text-white/40 block mb-6">PAYMENT SCHEDULE</MonoTag>
          {[
            ["50%", "$57,500", "MOBILIZATION", "On approval — creative sprint begins, steel + talent booked"],
            ["50%", "$57,500", "DETONATION", "Before launch week — trucks roll, wave one drops"],
          ].map(([pct, amt, k, d]) => (
            <div key={k} className="flex items-start gap-5 py-4 border-b border-[#1a1a1a] last:border-0">
              <span className="text-[26px] font-bold shrink-0" style={{ fontFamily: SERIF, color: YELLOW }}>
                {pct}
              </span>
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-[16px] font-bold text-white" style={{ fontFamily: MONO }}>{amt}</span>
                  <MonoTag className="text-white/50">{k}</MonoTag>
                </div>
                <p className="mt-1 text-[13px] text-white/45 leading-relaxed">{d}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.08} className="border border-[#1e1e1e] bg-[#0d0d0d] p-8">
          <MonoTag className="text-white/40 block mb-6">FOOTNOTES — SCALING, PRE-PRICED</MonoTag>
          <div className="space-y-4">
            {FOOTNOTES.map(([n, t]) => (
              <p key={n} className="text-[13px] leading-relaxed text-white/50 flex gap-3">
                <sup className="text-[#EAFF00] font-bold shrink-0" style={{ fontFamily: MONO }}>
                  {n}
                </sup>
                {t}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 009 — Risk Factors
 * ------------------------------------------------------------------------- */

function Risks() {
  return (
    <section className="relative border-y border-[#1e1e1e] overflow-hidden" style={{ background: "#0d0d0d" }}>
      <div className="absolute left-0 top-0 bottom-0 w-[14px]" style={hazard(10)} />
      <div className="px-6 md:px-12 py-28 md:py-40 max-w-[1400px] mx-auto">
        <SectionHead index="009" title="Risk Factors" right="READ LIKE THE CLIENT WOULD WRITE IT" />
        <div className="grid md:grid-cols-2 gap-6">
          {RISKS.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06} className="border border-[#1e1e1e] bg-[#0a0a0a] p-8 md:p-10">
              <MonoTag className="text-[#EAFF00] block mb-5">{r.n}</MonoTag>
              <h3 className="text-[22px] md:text-[25px] font-bold text-white" style={{ fontFamily: SERIF }}>
                {r.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-white/55">{r.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p
            className="mt-14 text-center text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-[0.08em]"
            style={{ fontFamily: SERIF, color: YELLOW }}
          >
            EXPECT NOTHING. PLAN EVERYTHING.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * 010 — Execute
 * ------------------------------------------------------------------------- */

function Execute() {
  return (
    <section id="execute" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.2] pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/ponzi-bot/brutalist.png"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(1.3)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]" />
      </div>

      <div className="relative px-6 md:px-12 py-24 md:py-36 max-w-[1400px] mx-auto">
        <SectionHead index="010" title="Execution" right="FIVE STEPS · ONE SIGNATURE" />

        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
          <div className="space-y-px bg-[#1e1e1e] border border-[#1e1e1e]">
            {NEXT_STEPS.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.05} className="bg-[#0a0a0a] p-7 md:p-8 flex gap-7 group hover:bg-[#0f0f0f] transition-colors">
                <span
                  className="text-[30px] font-bold shrink-0 leading-none pt-1 transition-colors group-hover:text-[#EAFF00] text-white/25"
                  style={{ fontFamily: SERIF }}
                >
                  {n}
                </span>
                <div>
                  <span className="text-[14px] font-bold tracking-[0.14em] text-white" style={{ fontFamily: MONO }}>
                    {t}
                  </span>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/50">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:sticky lg:top-24">
            {/* stamp */}
            <motion.div
              initial={{ opacity: 0, scale: 2.6, rotate: -22 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.2 }}
              className="inline-block border-[3px] px-7 py-4 mb-12"
              style={{ borderColor: YELLOW }}
            >
              <span className="text-[20px] font-bold tracking-[0.24em]" style={{ fontFamily: MONO, color: YELLOW }}>
                AWAITING APPROVAL
              </span>
            </motion.div>

            <h3
              className="text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1] font-bold text-white mb-8"
              style={{ fontFamily: SERIF, letterSpacing: "-0.02em" }}
            >
              Put PONZI on Wall&nbsp;Street.
            </h3>
            <p className="text-[15.5px] leading-relaxed text-white/60 mb-12 max-w-md">
              The token is called Ponzi. The site says expect nothing. The program pays weekly only
              if the bot wins. That's the most honest pitch in crypto — and it deserves to be heard
              from the sidewalk outside the New York Stock Exchange.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton
                href="mailto:geoff@crowdcontroldigital.com?subject=APPROVED%3A%20Ponzi%20Takes%20Wall%20Street%20(%24115K)&body=Trucks%20roll.%20Send%20the%20mobilization%20invoice."
                arrow
              >
                Approve · Trucks Roll
              </MagneticButton>
              <MagneticButton href="mailto:geoff@crowdcontroldigital.com?subject=Ponzi%20Takes%20Wall%20Street%20—%20Questions" invert>
                Talk First
              </MagneticButton>
            </div>
            <MonoTag className="block mt-8 text-white/35">
              50% MOBILIZES · BALANCE BEFORE LAUNCH WEEK
            </MonoTag>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------------
 * Credentials + Footer
 * ------------------------------------------------------------------------- */

function Credentials() {
  return (
    <section className="border-t border-[#1e1e1e]">
      <div className="px-6 md:px-12 py-20 max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-10">
          <MonoTag className="text-white/40">THE HOUSE — CROWD CONTROL DIGITAL</MonoTag>
          <MonoTag className="text-white/30">10 YEARS BREAKING THROUGH THE NOISE</MonoTag>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1e1e1e] border border-[#1e1e1e]">
          {CASES.map(([who, num, what], i) => (
            <Reveal key={who} delay={i * 0.05} className="bg-[#0a0a0a] p-7">
              <MonoTag className="text-[#EAFF00] block mb-4">{who}</MonoTag>
              <span className="text-[30px] font-bold text-white leading-none" style={{ fontFamily: SERIF }}>
                {num}
              </span>
              <MonoTag className="block mt-2 text-white/40">{what}</MonoTag>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e]">
      <div className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="text-[15px] font-bold text-white tracking-wide" style={{ fontFamily: MONO }}>
            CROWD CONTROL DIGITAL
          </span>
          <MonoTag className="block mt-2 text-white/40">
            PREPARED BY GEOFF SHAMES / CO-FOUNDER · GEOFF@CROWDCONTROLDIGITAL.COM
          </MonoTag>
        </div>
        <MonoTag className="text-white/30 max-w-md md:text-right leading-relaxed">
          THIS IS A MARKETING PROPOSAL, NOT AN OFFERING DOCUMENT. NOTHING HEREIN IS FINANCIAL
          ADVICE — OBVIOUSLY.
        </MonoTag>
      </div>
      <div className="h-[14px] w-full" style={hazard()} />
    </footer>
  );
}

/* ----------------------------------------------------------------------------
 * Page chrome + assembly
 * ------------------------------------------------------------------------- */

export default function PonziProspectusClient() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <main className="min-h-screen text-white antialiased" style={{ background: INK }}>
      {/* scroll progress — hazard bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[5px] origin-left z-50"
        style={{ scaleX: progress, background: YELLOW }}
      />

      {/* grain / scanline wash */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 2px, rgba(255,255,255,0.5) 2px 3px)",
          mixBlendMode: "overlay",
        }}
        aria-hidden
      />

      {/* fixed side label */}
      <div className="fixed left-5 bottom-8 z-40 hidden xl:block" style={{ writingMode: "vertical-rl" }}>
        <MonoTag className="text-white/25">CCD × PONZI BOT · CAMPAIGN PROSPECTUS · 2026</MonoTag>
      </div>

      <Hero />
      <Situation />
      <Thesis />
      <Stunt />
      <Marquee text={TICKER_MID} dark duration={30} />
      <Machine />
      <Amplifier />
      <Calendar />
      <Targets />
      <Proceeds />
      <Risks />
      <Execute />
      <Credentials />
      <Footer />
    </main>
  );
}
