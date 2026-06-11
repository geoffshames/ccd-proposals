export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>CATALOG CONTROL · Active Management for Music IP</title>
<meta name="description" content="A flat-fee management desk for music catalog owners: monitoring, reactivation, sync exploitation, and quarterly wealth-grade reporting. By Crowd Control Digital." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --bg: #0B0B0C;
    --panel: #121214;
    --panel2: #16161A;
    --line: rgba(237, 234, 227, 0.08);
    --line-strong: rgba(237, 234, 227, 0.16);
    --text: #EDEAE3;
    --muted: #8E8B84;
    --dim: #5D5B55;
    --gold: #C8A96E;
    --gold-soft: rgba(200, 169, 110, 0.12);
    --green: #4FB286;
    --red: #D26A5C;
    --font-display: "Space Grotesk", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-display);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  ::selection { background: var(--gold); color: #0B0B0C; }

  .mono { font-family: var(--font-mono); }
  .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }

  .wrap { max-width: 1180px; margin: 0 auto; padding: 0 32px; }

  /* ---------- Nav ---------- */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 50;
    background: rgba(11, 11, 12, 0.82);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
  }
  .nav-inner {
    max-width: 1180px; margin: 0 auto; padding: 0 32px;
    height: 64px; display: flex; align-items: center; justify-content: space-between;
  }
  .wordmark { display: flex; align-items: baseline; gap: 12px; text-decoration: none; }
  .wordmark .name {
    font-family: var(--font-mono); font-weight: 600; font-size: 14px;
    letter-spacing: 0.22em; color: var(--text);
  }
  .wordmark .name b { color: var(--gold); font-weight: 600; }
  .wordmark .by {
    font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.18em;
    color: var(--dim); text-transform: uppercase;
  }
  .nav-links { display: flex; align-items: center; gap: 28px; }
  .nav-links a {
    color: var(--muted); text-decoration: none; font-size: 13px; letter-spacing: 0.04em;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }
  .btn {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-mono); font-size: 12px; font-weight: 500;
    letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none;
    padding: 12px 22px; border-radius: 2px; transition: all 0.2s ease;
    cursor: pointer; border: 1px solid transparent;
  }
  .btn-gold { background: var(--gold); color: #0B0B0C; }
  .btn-gold:hover { background: #D9BC85; transform: translateY(-1px); }
  .btn-ghost { border-color: var(--line-strong); color: var(--text); background: transparent; }
  .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  .nav-links .btn { padding: 9px 18px; }

  /* ---------- Hero ---------- */
  header {
    position: relative;
    padding: 180px 0 96px;
    border-bottom: 1px solid var(--line);
    background:
      radial-gradient(ellipse 900px 480px at 75% -10%, rgba(200, 169, 110, 0.07), transparent 60%),
      radial-gradient(ellipse 700px 400px at 10% 110%, rgba(79, 178, 134, 0.04), transparent 60%);
  }
  .kicker {
    font-family: var(--font-mono); font-size: 11px; font-weight: 500;
    letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold);
    display: flex; align-items: center; gap: 14px; margin-bottom: 28px;
  }
  .kicker::before { content: ""; width: 36px; height: 1px; background: var(--gold); }
  h1 {
    font-size: clamp(40px, 5.6vw, 72px); font-weight: 600; line-height: 1.04;
    letter-spacing: -0.02em; max-width: 880px;
  }
  h1 .gold { color: var(--gold); }
  .hero-sub {
    margin-top: 28px; max-width: 640px; font-size: 18px; line-height: 1.65;
    color: var(--muted);
  }
  .hero-ctas { margin-top: 44px; display: flex; gap: 16px; flex-wrap: wrap; }

  .statstrip {
    margin-top: 80px; display: grid; grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--line); border-radius: 3px; overflow: hidden;
  }
  .stat { padding: 28px 32px; background: var(--panel); }
  .stat + .stat { border-left: 1px solid var(--line); }
  .stat .v { font-family: var(--font-mono); font-size: 30px; font-weight: 600; color: var(--text); }
  .stat .v span { color: var(--gold); }
  .stat .l { margin-top: 8px; font-size: 13px; color: var(--muted); line-height: 1.5; }

  /* ---------- Sections ---------- */
  section { padding: 104px 0; border-bottom: 1px solid var(--line); }
  .sec-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 56px; gap: 24px; flex-wrap: wrap; }
  .sec-label {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.28em;
    text-transform: uppercase; color: var(--dim); margin-bottom: 16px;
  }
  h2 { font-size: clamp(28px, 3.4vw, 42px); font-weight: 600; letter-spacing: -0.015em; line-height: 1.12; max-width: 640px; }

  /* Thesis */
  .thesis-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .thesis-copy p { font-size: 16.5px; line-height: 1.75; color: var(--muted); }
  .thesis-copy p + p { margin-top: 22px; }
  .thesis-copy p b { color: var(--text); font-weight: 500; }
  .pull {
    border-left: 2px solid var(--gold); padding: 8px 0 8px 28px; margin-top: 8px;
  }
  .pull .q { font-size: 23px; line-height: 1.45; font-weight: 500; letter-spacing: -0.01em; }
  .pull .q em { color: var(--gold); font-style: normal; }
  .pull .a { margin-top: 18px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--dim); }

  /* Desk cards */
  .desk-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 3px; overflow: hidden; }
  .desk-card { background: var(--panel); padding: 36px 32px; transition: background 0.25s; }
  .desk-card:hover { background: var(--panel2); }
  .desk-card .idx { font-family: var(--font-mono); font-size: 11px; color: var(--gold); letter-spacing: 0.14em; }
  .desk-card h3 { margin-top: 18px; font-size: 19px; font-weight: 600; letter-spacing: -0.01em; }
  .desk-card p { margin-top: 12px; font-size: 14px; line-height: 1.65; color: var(--muted); }

  /* Math */
  .math-table { border: 1px solid var(--line); border-radius: 3px; overflow: hidden; }
  .math-row { display: grid; grid-template-columns: 240px 1fr 1fr 1fr; }
  .math-row > div { padding: 22px 26px; border-bottom: 1px solid var(--line); font-size: 14px; line-height: 1.55; }
  .math-row:last-child > div { border-bottom: none; }
  .math-row .rowlab { color: var(--dim); font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; padding-top: 26px; }
  .math-row.head > div {
    background: var(--panel); font-family: var(--font-mono); font-size: 12px;
    letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); font-weight: 500;
  }
  .math-row.head .cc { color: var(--gold); }
  .math-col-cc { background: rgba(200, 169, 110, 0.04); }
  .math-row > div b { color: var(--text); font-weight: 500; }
  .math-note { margin-top: 24px; font-size: 13px; color: var(--dim); line-height: 1.6; max-width: 720px; }
  .exit-line {
    margin-top: 56px; padding: 36px 40px; border: 1px solid var(--line-strong); border-radius: 3px;
    background: linear-gradient(180deg, var(--gold-soft), transparent 140%);
    display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
  }
  .exit-line .big { font-size: 21px; font-weight: 500; line-height: 1.5; max-width: 680px; }
  .exit-line .big em { color: var(--gold); font-style: normal; }

  /* Infrastructure */
  .infra-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .infra-list { display: flex; flex-direction: column; }
  .infra-item { display: flex; gap: 20px; padding: 22px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
  .infra-item:last-child { border-bottom: none; }
  .infra-item .tag { font-family: var(--font-mono); font-size: 11px; color: var(--gold); letter-spacing: 0.1em; white-space: nowrap; min-width: 130px; }
  .infra-item .desc { font-size: 14.5px; color: var(--muted); line-height: 1.6; }
  .infra-item .desc b { color: var(--text); font-weight: 500; }

  /* Pricing */
  .price-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .price-card { border: 1px solid var(--line-strong); border-radius: 3px; padding: 44px 40px; background: var(--panel); position: relative; }
  .price-card.feat { border-color: var(--gold); background: linear-gradient(180deg, rgba(200, 169, 110, 0.06), var(--panel) 35%); }
  .price-card .plan { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--muted); }
  .price-card.feat .plan { color: var(--gold); }
  .price-card .price { margin-top: 22px; font-family: var(--font-mono); font-size: 44px; font-weight: 600; letter-spacing: -0.02em; }
  .price-card .per { font-size: 14px; color: var(--dim); font-family: var(--font-mono); }
  .price-card .pdesc { margin-top: 14px; font-size: 14px; color: var(--muted); line-height: 1.6; }
  .price-card ul { margin-top: 30px; list-style: none; }
  .price-card li { padding: 11px 0; border-top: 1px solid var(--line); font-size: 14px; color: var(--muted); display: flex; gap: 12px; line-height: 1.5; }
  .price-card li::before { content: "+"; color: var(--gold); font-family: var(--font-mono); }
  .price-card li b { color: var(--text); font-weight: 500; }
  .elig {
    margin-top: 28px; display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap;
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.06em; color: var(--dim);
  }
  .elig span b { color: var(--gold); font-weight: 500; }

  /* CTA */
  .cta-box { text-align: center; padding: 20px 0; }
  .cta-box h2 { margin: 0 auto; max-width: 760px; }
  .cta-box p { margin: 24px auto 0; max-width: 560px; color: var(--muted); font-size: 16px; line-height: 1.7; }
  .cta-box .hero-ctas { justify-content: center; }
  .seats { margin-top: 36px; font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--gold); }

  footer { padding: 48px 0 64px; }
  .foot-inner { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
  .foot-inner .l { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em; color: var(--dim); text-transform: uppercase; }
  .foot-inner a { color: var(--muted); text-decoration: none; font-size: 13px; }
  .foot-inner a:hover { color: var(--gold); }

  /* Reveal */
  .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.in { opacity: 1; transform: none; }

  @media (max-width: 920px) {
    .statstrip, .desk-grid, .price-grid, .thesis-grid, .infra-grid { grid-template-columns: 1fr; }
    .stat + .stat { border-left: none; border-top: 1px solid var(--line); }
    .math-row { grid-template-columns: 1fr; }
    .math-row .rowlab { padding-bottom: 0; }
    .nav-links a:not(.btn) { display: none; }
    header { padding-top: 140px; }
  }
</style>
</head>
<body>

<nav>
  <div class="nav-inner">
    <a class="wordmark" href="#">
      <span class="name">CATALOG<b>CONTROL</b></span>
      <span class="by">Crowd Control Digital</span>
    </a>
    <div class="nav-links">
      <a href="#thesis">Thesis</a>
      <a href="#desk">The Desk</a>
      <a href="#math">The Math</a>
      <a href="#pricing">Pricing</a>
      <a href="/catalog-control/demo" class="btn btn-ghost">Live Demo</a>
      <a href="mailto:geoff@crowdcontroldigital.com?subject=CATALOG%20CONTROL%20Portfolio%20Review" class="btn btn-gold">Request Review</a>
    </div>
  </div>
</nav>

<header>
  <div class="wrap">
    <div class="kicker">Active Management for Music IP</div>
    <h1>Your catalog is a nine-figure asset.<br /><span class="gold">Stop running it like a filing cabinet.</span></h1>
    <p class="hero-sub">CATALOG CONTROL is a flat-fee management desk for catalog funds, estates, and artist-owners. Continuous monitoring, monthly reactivation sprints, proactive sync exploitation, and quarterly wealth-grade reporting on every master you own.</p>
    <div class="hero-ctas">
      <a href="/catalog-control/demo" class="btn btn-gold">View the live demo</a>
      <a href="#math" class="btn btn-ghost">See the math</a>
    </div>

    <div class="statstrip reveal">
      <div class="stat">
        <div class="v num">15<span>&ndash;</span>20x</div>
        <div class="l">The revenue multiple quality catalogs trade at. Every dollar of durable royalty growth is worth many more at exit.</div>
      </div>
      <div class="stat">
        <div class="v num">10<span>&ndash;</span>15%</div>
        <div class="l">What a typical admin deal takes off your gross, whether or not anyone actively works the catalog.</div>
      </div>
      <div class="stat">
        <div class="v num"><span>$</span>0</div>
        <div class="l">Our share of your upside on the flat-fee plan. The revenue we create stays on your statement.</div>
      </div>
    </div>
  </div>
</header>

<section id="thesis">
  <div class="wrap">
    <div class="sec-label">01 / Thesis</div>
    <div class="thesis-grid">
      <div>
        <h2>Billions went into buying catalogs. Almost nothing goes into working them.</h2>
        <div class="pull" style="margin-top:40px;">
          <div class="q">Every other $100M asset class has active management as the default. <em>Music IP is the exception.</em> That is the gap we charge for.</div>
          <div class="a">The Catalog Control thesis</div>
        </div>
      </div>
      <div class="thesis-copy">
        <p>The last decade of catalog M&amp;A moved tens of billions of dollars into master and publishing rights. The deals got sophisticated. What happens after close mostly did not: <b>quarterly royalty statements, passive distribution, and a spreadsheet someone updates when they remember.</b></p>
        <p>Meanwhile the asset moves every day. Streams decay when nothing feeds them. TikTok pulls forty-year-old songs into nine-figure view counts without asking permission. Sync briefs go out and get answered by whoever showed up. <b>Unworked catalogs leak value in both directions: revenue they lose, and revenue they never capture.</b></p>
        <p>CATALOG CONTROL exists to be the management layer those assets never had. One desk that watches every signal on your masters, executes one reactivation campaign every month, hunts sync proactively, and reports to you the way a private bank reports on a portfolio. <b>Flat fee. Your upside stays yours.</b></p>
      </div>
    </div>
  </div>
</section>

<section id="desk">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="sec-label">02 / The Desk</div>
        <h2>What $50k a month buys.</h2>
      </div>
    </div>
    <div class="desk-grid reveal">
      <div class="desk-card">
        <div class="idx">CC-01</div>
        <h3>Monitoring Desk</h3>
        <p>Continuous signal detection across DSPs, TikTok, YouTube, radio, and sync markets for every asset in the portfolio. Velocity spikes, territory anomalies, creator adoption, and decay acceleration surface within days, not quarters.</p>
      </div>
      <div class="desk-card">
        <div class="idx">CC-02</div>
        <h3>Monthly Reactivation Sprint</h3>
        <p>One fully executed campaign per month against the highest-ranked opportunity in your queue: creator seeding, DSP editorial pitches, anniversary programs, territory pushes. Executed by the team, attributed on your dashboard.</p>
      </div>
      <div class="desk-card">
        <div class="idx">CC-03</div>
        <h3>Sync Desk</h3>
        <p>Proactive brief targeting across film, TV, trailer houses, gaming, and brand campaigns. We package and pitch your masters to supervisors before the brief closes, instead of waiting for inbound.</p>
      </div>
      <div class="desk-card">
        <div class="idx">CC-04</div>
        <h3>Risk &amp; Leakage</h3>
        <p>Unlicensed usage detection and claim filing, playlist removal alerts, decay flags against cohort baselines. Money leaking out of the portfolio gets found and recovered.</p>
      </div>
      <div class="desk-card">
        <div class="idx">CC-05</div>
        <h3>Quarterly Portfolio Review</h3>
        <p>A wealth-statement-grade report: revenue pacing against your passive baseline, estimated portfolio valuation movement, campaign attribution, and the forward opportunity queue. Built for IC meetings and LP updates.</p>
      </div>
      <div class="desk-card">
        <div class="idx">CC-06</div>
        <h3>Dedicated Strategist + Dashboard</h3>
        <p>A named senior strategist who knows your portfolio, plus 24/7 access to CATALOG CONTROL: live pacing, ranked opportunities, campaign ROI, and risk alerts in one place.</p>
      </div>
    </div>
  </div>
</section>

<section id="math">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="sec-label">03 / The Math</div>
        <h2>Cheaper than an admin deal. More active than a wealth manager.</h2>
      </div>
    </div>
    <div class="math-table reveal">
      <div class="math-row head">
        <div></div>
        <div>Admin / Label Services Deal</div>
        <div>Wealth Manager</div>
        <div class="cc math-col-cc">Catalog Control</div>
      </div>
      <div class="math-row">
        <div class="rowlab">Fee Structure</div>
        <div>10&ndash;15% of <b>gross</b> revenue, in perpetuity of term</div>
        <div>~1% of AUM annually</div>
        <div class="math-col-cc"><b>$600k/yr flat</b>, 12-month term</div>
      </div>
      <div class="math-row">
        <div class="rowlab">On $9M/yr royalties</div>
        <div class="num">$900k&ndash;$1.35M per year</div>
        <div class="num">~$1.5M on a $150M portfolio</div>
        <div class="math-col-cc num"><b>$600k. Full stop.</b></div>
      </div>
      <div class="math-row">
        <div class="rowlab">Actually works the asset</div>
        <div>Passive distribution and accounting. Marketing is an upcharge.</div>
        <div>Does not touch revenue at all. Reports on what already happened.</div>
        <div class="math-col-cc"><b>12 executed campaigns a year</b>, sync desk, monitoring, recovery.</div>
      </div>
      <div class="math-row">
        <div class="rowlab">Who keeps the upside</div>
        <div>They skim it off gross forever</div>
        <div>You, minus the AUM drag</div>
        <div class="math-col-cc"><b>You. 100% of it on the flat plan.</b></div>
      </div>
    </div>
    <p class="math-note">Figures shown are representative market ranges for comparison. Your portfolio review includes the actual math on your catalog: current pacing, modeled passive baseline, and the opportunity queue we would execute against.</p>

    <div class="exit-line reveal">
      <div class="big">At a 15&ndash;20x revenue multiple, every <em>$100k of durable annual royalty growth</em> is roughly <em>$1.5&ndash;2M of enterprise value</em> at exit. One landed sync or one reactivated territory can carry the fee for years.</div>
      <a href="/catalog-control/demo" class="btn btn-ghost" style="white-space:nowrap;">See it on a portfolio</a>
    </div>
  </div>
</section>

<section id="infra">
  <div class="wrap">
    <div class="infra-grid">
      <div>
        <div class="sec-label">04 / Infrastructure</div>
        <h2>This desk is not a deck. It already runs.</h2>
        <p style="margin-top:24px; color:var(--muted); font-size:16px; line-height:1.7; max-width:480px;">CATALOG CONTROL sits on the operating stack Crowd Control Digital runs across ~20 active engagements a month. The tooling is live; your portfolio plugs into it.</p>
      </div>
      <div class="infra-list reveal">
        <div class="infra-item">
          <span class="tag">CHART CONTROL</span>
          <span class="desc"><b>Chart prediction models</b> calibrated weekly against Billboard and consumption data. We see momentum before it prints.</span>
        </div>
        <div class="infra-item">
          <span class="tag">SOUND CONTROL</span>
          <span class="desc"><b>Weekly genre intelligence pipeline</b> that reverse-engineers what is working on the Hot 100 down to the post level.</span>
        </div>
        <div class="infra-item">
          <span class="tag">VIDEO AI</span>
          <span class="desc"><b>Frame-level video analysis</b> to identify sync-friendly moments and creative cues across your catalog's visual assets.</span>
        </div>
        <div class="infra-item">
          <span class="tag">CREATOR NETWORK</span>
          <span class="desc"><b>Seeding infrastructure</b> for creator campaigns across TikTok and Reels, with attribution back to the asset.</span>
        </div>
        <div class="infra-item">
          <span class="tag">REACTIVATION ENGINE</span>
          <span class="desc"><b>The dossier system</b> behind our catalog reactivation work for labels and estates: research, planning, and execution in one pipeline.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pricing">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <div class="sec-label">05 / Pricing</div>
        <h2>Two ways in. Both are simple.</h2>
      </div>
    </div>
    <div class="price-grid reveal">
      <div class="price-card feat">
        <div class="plan">Flat / Full Desk</div>
        <div class="price num">$50,000<span class="per"> /mo</span></div>
        <p class="pdesc">Twelve-month term. Every desk function, full dashboard access, quarterly reviews. You keep 100% of the upside we create.</p>
        <ul>
          <li><b>Monitoring desk</b> across the full portfolio</li>
          <li><b>12 executed reactivation sprints</b> per year</li>
          <li><b>Sync desk</b> with proactive brief targeting</li>
          <li><b>Risk, leakage detection and recovery</b></li>
          <li><b>Quarterly wealth-grade portfolio reviews</b></li>
          <li><b>Dedicated senior strategist</b></li>
        </ul>
      </div>
      <div class="price-card">
        <div class="plan">Performance</div>
        <div class="price num">$35,000<span class="per"> /mo</span></div>
        <p class="pdesc">Plus 10% of verified incremental royalty revenue above your trailing 12-month baseline. Same desk, shared risk. Baseline set independently at onboarding.</p>
        <ul>
          <li><b>Identical desk coverage</b> to the flat plan</li>
          <li><b>Baseline modeled from your own statements</b>, agreed before start</li>
          <li><b>Incremental revenue verified quarterly</b> against the baseline</li>
          <li><b>Cap available</b> on the performance share for larger portfolios</li>
        </ul>
      </div>
    </div>
    <div class="elig">
      <span>Eligibility: portfolios with <b>$25M+ estimated value</b> or <b>$2M+ annual royalty revenue</b></span>
      <span>Capacity: <b>maximum 8 portfolios</b> under management</span>
    </div>
  </div>
</section>

<section id="cta" style="border-bottom:none;">
  <div class="wrap cta-box">
    <div class="sec-label" style="text-align:center;">06 / Start</div>
    <h2>Request a portfolio review.</h2>
    <p>Send us your catalog. We run it through the full desk: current pacing, modeled passive baseline, ranked opportunity queue, and the first three sprints we would execute. You see the alpha before you sign anything.</p>
    <div class="hero-ctas">
      <a href="mailto:geoff@crowdcontroldigital.com?subject=CATALOG%20CONTROL%20Portfolio%20Review&body=Portfolio%20name%3A%0AEstimated%20value%20or%20annual%20royalty%20revenue%3A%0APrimary%20genres%20%2F%20eras%3A%0A" class="btn btn-gold">Request portfolio review</a>
      <a href="/catalog-control/demo" class="btn btn-ghost">Tour the dashboard first</a>
    </div>
    <div class="seats">Q3 2026 · Two review slots open</div>
  </div>
</section>

<footer>
  <div class="wrap foot-inner">
    <span class="l">CATALOG CONTROL · A Crowd Control Digital Product</span>
    <a href="mailto:geoff@crowdcontroldigital.com">geoff@crowdcontroldigital.com</a>
  </div>
</footer>

<script>
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
