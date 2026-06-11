export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FOUNDER CONTROL · The Media Company Around You</title>
<meta name="description" content="A capacity-limited desk that builds the media company around a founder: editorial desk, short-form studio, owned distribution, and an attention P&L your board will respect. By Crowd Control Digital." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --paper: #F4EFE6;
    --card: #FFFCF5;
    --ink: #16140F;
    --soft: #5A554A;
    --faint: rgba(22, 20, 15, 0.12);
    --hair: rgba(22, 20, 15, 0.08);
    --coral: #FF4A1F;
    --cobalt: #2742F5;
    --fd: "Space Grotesk", sans-serif;
    --fs: "Instrument Serif", serif;
    --fm: "IBM Plex Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--paper); color: var(--ink); font-family: var(--fd); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  ::selection { background: var(--coral); color: var(--paper); }
  .mono { font-family: var(--fm); }
  .wrap { max-width: 1220px; margin: 0 auto; padding: 0 32px; }

  /* ---------- Ticker ---------- */
  .ticker { background: var(--ink); color: var(--paper); overflow: hidden; white-space: nowrap; padding: 9px 0; }
  .ticker-inner { display: inline-block; animation: tick 30s linear infinite; }
  .ticker span { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; padding: 0 18px; }
  .ticker b { color: var(--coral); font-weight: 400; }
  @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ---------- Nav ---------- */
  nav { position: sticky; top: 0; z-index: 50; background: rgba(244, 239, 230, 0.88); backdrop-filter: blur(12px); border-bottom: 1px solid var(--faint); }
  .nav-inner { max-width: 1220px; margin: 0 auto; padding: 0 32px; height: 68px; display: flex; align-items: center; justify-content: space-between; }
  .wordmark { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }
  .wordmark .star { color: var(--coral); font-size: 15px; }
  .wordmark .name { font-family: var(--fm); font-weight: 600; font-size: 14px; letter-spacing: 0.2em; }
  .nav-links { display: flex; align-items: center; gap: 26px; }
  .nav-links a { color: var(--soft); text-decoration: none; font-size: 13.5px; letter-spacing: 0.02em; transition: color 0.2s; }
  .nav-links a:hover { color: var(--ink); }
  .btn { display: inline-flex; align-items: center; gap: 10px; font-family: var(--fm); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 13px 26px; border-radius: 999px; transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s; cursor: pointer; border: 1px solid var(--ink); }
  .btn-ink { background: var(--ink); color: var(--paper); }
  .btn-ink:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(22,20,15,0.22); }
  .btn-coral { background: var(--coral); color: var(--paper); border-color: var(--coral); }
  .btn-coral:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(255,74,31,0.35); }
  .btn-line { background: transparent; color: var(--ink); }
  .btn-line:hover { background: var(--ink); color: var(--paper); }
  .nav-links .btn { padding: 10px 20px; }

  /* ---------- Hero ---------- */
  header { position: relative; padding: 110px 0 90px; border-bottom: 1px solid var(--faint); }
  .kicker { font-family: var(--fm); font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--coral); display: flex; align-items: center; gap: 12px; margin-bottom: 34px; }
  h1 { font-size: clamp(46px, 7.2vw, 96px); line-height: 0.98; letter-spacing: -0.03em; font-weight: 600; max-width: 1020px; }
  h1 .serif { font-family: var(--fs); font-style: italic; font-weight: 400; color: var(--coral); letter-spacing: -0.01em; }
  .hero-sub { margin-top: 34px; max-width: 660px; font-size: 18.5px; line-height: 1.65; color: var(--soft); }
  .hero-sub b { color: var(--ink); font-weight: 600; }
  .hero-ctas { margin-top: 44px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
  .hero-note { font-family: var(--fm); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }

  .strip { margin-top: 76px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .strip-card { background: var(--card); border: 1px solid var(--hair); border-radius: 18px; padding: 30px 32px; box-shadow: 0 1px 0 rgba(22,20,15,0.04); transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .strip-card:hover { transform: translateY(-4px); box-shadow: 0 18px 44px rgba(22,20,15,0.10); }
  .strip-card .big { font-family: var(--fs); font-style: italic; font-size: 44px; line-height: 1; }
  .strip-card .big sup { font-size: 18px; color: var(--coral); }
  .strip-card p { margin-top: 12px; font-size: 13.5px; line-height: 1.55; color: var(--soft); }

  /* ---------- Coral band ---------- */
  .band { background: var(--coral); color: var(--paper); overflow: hidden; white-space: nowrap; padding: 13px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
  .band .ticker-inner { animation-duration: 24s; }
  .band span { font-family: var(--fs); font-style: italic; font-size: 19px; letter-spacing: 0.02em; padding: 0 26px; text-transform: none; }

  /* ---------- Sections ---------- */
  section { padding: 108px 0; border-bottom: 1px solid var(--faint); }
  .sec-label { font-family: var(--fm); font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--soft); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
  .sec-label .s { color: var(--coral); }
  h2 { font-size: clamp(32px, 4.2vw, 54px); font-weight: 600; letter-spacing: -0.025em; line-height: 1.04; max-width: 760px; }
  h2 .serif { font-family: var(--fs); font-style: italic; font-weight: 400; color: var(--coral); }

  /* Comparison */
  .vs-grid { margin-top: 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; position: relative; }
  .vs-card { border-radius: 20px; padding: 44px 42px; }
  .vs-card.them { background: transparent; border: 1px dashed var(--faint); }
  .vs-card.us { background: var(--ink); color: var(--paper); box-shadow: 0 24px 60px rgba(22,20,15,0.18); }
  .vs-card .vs-head { font-family: var(--fm); font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; margin-bottom: 26px; }
  .vs-card.them .vs-head { color: var(--soft); }
  .vs-card.us .vs-head { color: var(--coral); }
  .vs-card ul { list-style: none; }
  .vs-card li { display: flex; gap: 14px; padding: 15px 0; font-size: 15.5px; line-height: 1.5; border-top: 1px solid var(--hair); }
  .vs-card.us li { border-top: 1px solid rgba(244,239,230,0.14); }
  .vs-card.them li { color: var(--soft); }
  .vs-card .mark { font-family: var(--fm); flex-shrink: 0; }
  .vs-card.them .mark { color: #B4471F; opacity: 0.55; }
  .vs-card.us .mark { color: var(--coral); }
  .vs-badge { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-8deg); background: var(--paper); border: 1px solid var(--ink); border-radius: 999px; font-family: var(--fs); font-style: italic; font-size: 20px; padding: 10px 22px; z-index: 2; box-shadow: 0 8px 22px rgba(22,20,15,0.16); }

  /* Desk modules */
  .desk-grid { margin-top: 64px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .mod { background: var(--card); border: 1px solid var(--hair); border-radius: 20px; padding: 36px 32px; position: relative; overflow: hidden; transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .mod:hover { transform: translateY(-5px); box-shadow: 0 22px 50px rgba(22,20,15,0.11); }
  .mod .idx { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.2em; color: var(--coral); }
  .mod .ghost { position: absolute; right: 14px; top: 2px; font-family: var(--fs); font-style: italic; font-size: 88px; color: rgba(22,20,15,0.06); line-height: 1; }
  .mod h3 { margin-top: 16px; font-size: 21px; font-weight: 600; letter-spacing: -0.01em; }
  .mod p { margin-top: 12px; font-size: 14px; line-height: 1.65; color: var(--soft); }
  .mod p b { color: var(--ink); font-weight: 600; }

  /* Audit */
  .audit-grid { margin-top: 64px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; align-items: stretch; }
  .audit-copy { background: var(--card); border: 1px solid var(--hair); border-radius: 20px; padding: 46px 44px; display: flex; flex-direction: column; justify-content: space-between; }
  .audit-copy p { font-size: 16.5px; line-height: 1.7; color: var(--soft); max-width: 520px; }
  .audit-copy p b { color: var(--ink); font-weight: 600; }
  .audit-copy .price-line { margin-top: 30px; font-family: var(--fm); font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink); }
  .audit-copy .price-line b { color: var(--coral); }
  .audit-list { background: var(--ink); color: var(--paper); border-radius: 20px; padding: 44px 42px; }
  .audit-list .h { font-family: var(--fm); font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--coral); margin-bottom: 22px; }
  .audit-list ol { list-style: none; counter-reset: a; }
  .audit-list li { counter-increment: a; display: flex; gap: 16px; padding: 14px 0; border-top: 1px solid rgba(244,239,230,0.14); font-size: 15px; line-height: 1.5; }
  .audit-list li::before { content: counter(a, decimal-leading-zero); font-family: var(--fm); font-size: 11px; color: var(--coral); padding-top: 4px; }
  .audit-ctas { margin-top: 34px; display: flex; gap: 14px; flex-wrap: wrap; }

  /* Report */
  .kpi-row { margin-top: 60px; display: flex; flex-wrap: wrap; gap: 12px; }
  .kpi-chip { font-family: var(--fm); font-size: 12.5px; letter-spacing: 0.04em; border: 1px solid var(--ink); border-radius: 999px; padding: 11px 20px; background: var(--card); transition: background 0.2s, color 0.2s; }
  .kpi-chip:hover { background: var(--ink); color: var(--paper); }
  .kpi-chip.no { border-style: dashed; border-color: var(--faint); color: var(--soft); text-decoration: line-through; background: transparent; }
  .report-line { margin-top: 38px; font-family: var(--fs); font-style: italic; font-size: clamp(22px, 2.6vw, 30px); line-height: 1.4; max-width: 760px; }
  .report-line em { color: var(--coral); font-style: italic; }

  /* Wedge */
  .wedge-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: start; }
  .wedge-list { display: flex; flex-direction: column; }
  .wedge-item { display: flex; gap: 22px; padding: 24px 0; border-bottom: 1px solid var(--hair); align-items: baseline; }
  .wedge-item:last-child { border-bottom: none; }
  .wedge-item .tag { font-family: var(--fm); font-size: 11px; color: var(--coral); letter-spacing: 0.12em; white-space: nowrap; min-width: 150px; }
  .wedge-item .desc { font-size: 15px; color: var(--soft); line-height: 1.6; }
  .wedge-item .desc b { color: var(--ink); font-weight: 600; }

  /* Pricing */
  .price-grid { margin-top: 64px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .pcard { border-radius: 22px; padding: 48px 44px; border: 1px solid var(--hair); background: var(--card); transition: transform 0.25s ease, box-shadow 0.25s ease; }
  .pcard:hover { transform: translateY(-4px); box-shadow: 0 22px 54px rgba(22,20,15,0.10); }
  .pcard.feat { background: var(--ink); color: var(--paper); box-shadow: 0 26px 64px rgba(22,20,15,0.22); }
  .pcard .plan { font-family: var(--fm); font-size: 11px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--soft); }
  .pcard.feat .plan { color: var(--coral); }
  .pcard .price { margin-top: 24px; font-family: var(--fs); font-size: 56px; line-height: 1; letter-spacing: -0.01em; }
  .pcard .price .per { font-family: var(--fm); font-size: 13px; color: var(--soft); letter-spacing: 0.04em; }
  .pcard.feat .price .per { color: rgba(244,239,230,0.6); }
  .pcard .pdesc { margin-top: 16px; font-size: 14.5px; line-height: 1.6; color: var(--soft); }
  .pcard.feat .pdesc { color: rgba(244,239,230,0.78); }
  .pcard ul { margin-top: 30px; list-style: none; }
  .pcard li { padding: 12px 0; border-top: 1px solid var(--hair); font-size: 14.5px; display: flex; gap: 12px; line-height: 1.5; color: var(--soft); }
  .pcard.feat li { border-top: 1px solid rgba(244,239,230,0.14); color: rgba(244,239,230,0.82); }
  .pcard li::before { content: "✦"; color: var(--coral); font-size: 11px; padding-top: 3px; }
  .pcard li b { color: var(--ink); font-weight: 600; }
  .pcard.feat li b { color: var(--paper); }
  .elig { margin-top: 30px; display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; font-family: var(--fm); font-size: 12px; letter-spacing: 0.05em; color: var(--soft); }
  .elig b { color: var(--coral); font-weight: 500; }

  /* CTA */
  .cta-sec { text-align: center; border-bottom: none; }
  .cta-sec .serif-line { font-family: var(--fs); font-style: italic; font-size: clamp(34px, 5vw, 64px); line-height: 1.1; letter-spacing: -0.01em; max-width: 900px; margin: 0 auto; }
  .cta-sec .serif-line em { color: var(--coral); font-style: italic; }
  .cta-sec p { margin: 28px auto 0; max-width: 540px; color: var(--soft); font-size: 16px; line-height: 1.7; }
  .cta-sec .hero-ctas { justify-content: center; }
  .seats { margin-top: 36px; font-family: var(--fm); font-size: 11px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--coral); }

  footer { padding: 44px 0 60px; }
  .foot { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; font-family: var(--fm); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }
  .foot a { color: var(--ink); text-decoration: none; }
  .foot a:hover { color: var(--coral); }

  .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .reveal.in { opacity: 1; transform: none; }

  @media (max-width: 940px) {
    .strip, .desk-grid, .price-grid, .vs-grid, .audit-grid, .wedge-grid { grid-template-columns: 1fr; }
    .vs-badge { display: none; }
    .nav-links a:not(.btn) { display: none; }
    header { padding-top: 70px; }
  }
</style>
</head>
<body>

<div class="ticker">
  <div class="ticker-inner">
    <span>FOUNDER CONTROL <b>✦</b> THE MEDIA COMPANY AROUND YOU <b>✦</b> A CROWD CONTROL DIGITAL PRODUCT <b>✦</b> ATTENTION, REPORTED LIKE A FUND <b>✦</b> EIGHT SEATS, THAT IS THE WHOLE ROSTER <b>✦</b> </span><span>FOUNDER CONTROL <b>✦</b> THE MEDIA COMPANY AROUND YOU <b>✦</b> A CROWD CONTROL DIGITAL PRODUCT <b>✦</b> ATTENTION, REPORTED LIKE A FUND <b>✦</b> EIGHT SEATS, THAT IS THE WHOLE ROSTER <b>✦</b> </span>
  </div>
</div>

<nav>
  <div class="nav-inner">
    <a class="wordmark" href="#"><span class="star">✦</span><span class="name">FOUNDER CONTROL</span></a>
    <div class="nav-links">
      <a href="#vs">The Difference</a>
      <a href="#desk">The Desk</a>
      <a href="#audit">The Audit</a>
      <a href="#pricing">Pricing</a>
      <a href="/founder-control/demo" class="btn btn-line">Live Demo</a>
      <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit" class="btn btn-coral">Request Audit</a>
    </div>
  </div>
</nav>

<header>
  <div class="wrap">
    <div class="kicker">✦ For founders with something at stake</div>
    <h1>Every founder has a ghostwriter.<br /><span class="serif">Almost none have distribution.</span></h1>
    <p class="hero-sub">FOUNDER CONTROL is a capacity-limited desk that builds <b>the media company around you</b>: an editorial desk for your voice, a short-form studio that makes you watchable, an owned distribution network that gives you reach on day one, and an <b>attention P&amp;L your board will actually respect</b>.</p>
    <div class="hero-ctas">
      <a href="/founder-control/audit" class="btn btn-ink">See a sample audit</a>
      <a href="/founder-control/demo" class="btn btn-line">Tour the attention P&amp;L</a>
      <span class="hero-note">By Crowd Control Digital</span>
    </div>

    <div class="strip reveal">
      <div class="strip-card">
        <div class="big">8<sup>✦</sup></div>
        <p>Seats on the desk, total. You are not client #41 on an agency roster. When it's full, it's full.</p>
      </div>
      <div class="strip-card">
        <div class="big">Day one</div>
        <p>Reach through an owned network of pages, clip channels, and newsletter rails we operate. No cold-start, no praying to the algorithm.</p>
      </div>
      <div class="strip-card">
        <div class="big">P&amp;L</div>
        <p>Attention reported like a fund reports returns: baseline, alpha, attributed pipeline. Not a screenshot of impressions.</p>
      </div>
    </div>
  </div>
</header>

<div class="band">
  <div class="ticker-inner">
    <span>Personal branding is a commodity. Being programming is not.</span><span>✦</span><span>Trained in the hardest attention market on earth.</span><span>✦</span><span>Personal branding is a commodity. Being programming is not.</span><span>✦</span><span>Trained in the hardest attention market on earth.</span><span>✦</span>
  </div>
</div>

<section id="vs">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 01 / The Difference</div>
    <h2>The category is a writing vendor wearing a strategy hat. <span class="serif">We're not in the category.</span></h2>
    <div class="vs-grid reveal">
      <div class="vs-card them">
        <div class="vs-head">What you've been sold</div>
        <ul>
          <li><span class="mark">✗</span>A ghostwriter and a posting calendar</li>
          <li><span class="mark">✗</span>Impressions screenshots in a monthly deck</li>
          <li><span class="mark">✗</span>"Thought leadership" nobody finishes reading</li>
          <li><span class="mark">✗</span>Rented reach: the algorithm decides if you exist this week</li>
          <li><span class="mark">✗</span>An agency roster where you're one logo of forty</li>
        </ul>
      </div>
      <div class="vs-badge">vs.</div>
      <div class="vs-card us">
        <div class="vs-head">What we build</div>
        <ul>
          <li><span class="mark">✦</span>An editorial desk plus an entertainment-grade short-form studio</li>
          <li><span class="mark">✦</span>An owned network of pages, clip channels, and newsletters amplifying you from day one</li>
          <li><span class="mark">✦</span>Attention reported as a P&amp;L: qualified inbound, share of voice, pipeline attributed</li>
          <li><span class="mark">✦</span>Paid amplification run by performance buyers, not interns</li>
          <li><span class="mark">✦</span>Eight seats. That is the whole roster.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="desk">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 02 / The Desk</div>
    <h2>Six functions. One media company. <span class="serif">Yours.</span></h2>
    <div class="desk-grid reveal">
      <div class="mod">
        <div class="ghost">01</div>
        <div class="idx">FC-01</div>
        <h3>Editorial Desk</h3>
        <p>A named editorial lead who owns your voice system and POV map. Ghostwriting is table stakes; <b>the desk also decides what you never post.</b></p>
      </div>
      <div class="mod">
        <div class="ghost">02</div>
        <div class="idx">FC-02</div>
        <h3>Short-Form Studio</h3>
        <p>Formats engineered from what's winning in entertainment right now: hooks, cuts, captions, pacing. <b>You, watchable.</b> Corporate LinkedIn energy is banned on sight.</p>
      </div>
      <div class="mod">
        <div class="ghost">03</div>
        <div class="idx">FC-03</div>
        <h3>Distribution Network</h3>
        <p>Owned rails: niche industry pages, clip channels, and newsletter swaps we operate across the desk. <b>New seats inherit reach</b> instead of earning it from zero.</p>
      </div>
      <div class="mod">
        <div class="ghost">04</div>
        <div class="idx">FC-04</div>
        <h3>Paid Amplification</h3>
        <p>Performance buyers turn organic winners into reach. <b>Spend follows signal</b>, not a flat boost budget. The same paid muscle we run for entertainment clients.</p>
      </div>
      <div class="mod">
        <div class="ghost">05</div>
        <div class="idx">FC-05</div>
        <h3>Access Engineering</h3>
        <p>Podcasts, stages, and press targeted with fit scores, then packaged, pitched, and prepped. <b>Your calendar fills with rooms that matter</b>, not webinars.</p>
      </div>
      <div class="mod">
        <div class="ghost">06</div>
        <div class="idx">FC-06</div>
        <h3>Attention P&amp;L</h3>
        <p>A live dashboard and quarterly statement: baseline, managed alpha, attributed pipeline, share of voice. <b>The report your board can read in four minutes.</b></p>
      </div>
    </div>
  </div>
</section>

<section id="audit">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 03 / The Audit</div>
    <h2>We don't pitch. <span class="serif">We audit.</span></h2>
    <div class="audit-grid reveal">
      <div class="audit-copy">
        <div>
          <p>Before anyone signs anything, we run the <b>Founder Attention Audit</b>: your current presence scored against five comparable founders across ten dimensions, with every gap converted into a ranked list of <b>alpha opportunities</b> and a 90-day plan to capture them.</p>
          <p style="margin-top:18px;">It's the same instrument we use to run the desk. If the audit doesn't make the case on its own, you'll know in twenty minutes and we part friends.</p>
          <div class="price-line">$7,500 · <b>credited in full</b> against your first month</div>
        </div>
        <div class="audit-ctas">
          <a href="/founder-control/audit" class="btn btn-coral">View a sample audit</a>
          <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit&body=Name%3A%0ACompany%20%2F%20fund%3A%0AWhat%27s%20at%20stake%20this%20year%3A%0A" class="btn btn-line">Request yours</a>
        </div>
      </div>
      <div class="audit-list">
        <div class="h">Inside every audit</div>
        <ol>
          <li>Attention Index score vs five comparable founders</li>
          <li>Ten-dimension scorecard: voice, POV, watchability, velocity, distribution, capture</li>
          <li>Alpha opportunities ranked by estimated value</li>
          <li>Category POV vacancies you could own outright</li>
          <li>Podcast, stage, and press targets with fit scores</li>
          <li>The 90-day plan, week by week</li>
        </ol>
      </div>
    </div>
  </div>
</section>

<section id="report">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 04 / Reporting</div>
    <h2>Metrics your board respects. <span class="serif">Vanity left at the door.</span></h2>
    <div class="kpi-row reveal">
      <span class="kpi-chip">Qualified inbound / mo</span>
      <span class="kpi-chip">Pipeline attributed ($)</span>
      <span class="kpi-chip">Share of voice in category</span>
      <span class="kpi-chip">Podcast + stage invites</span>
      <span class="kpi-chip">Talent funnel lift</span>
      <span class="kpi-chip">Owned audience growth</span>
      <span class="kpi-chip no">Impressions</span>
      <span class="kpi-chip no">Follower count</span>
      <span class="kpi-chip no">"Engagement rate"</span>
    </div>
    <p class="report-line reveal">Every quarter you get an attention statement: where you started, <em>what the desk created above baseline</em>, and what it touched in revenue, talent, and access. <a href="/founder-control/demo" style="color:var(--cobalt);">See the live demo →</a></p>
  </div>
</section>

<section id="wedge">
  <div class="wrap">
    <div class="wedge-grid">
      <div>
        <div class="sec-label"><span class="s">✦</span> 05 / Why Us</div>
        <h2>Our other desks chart records. <span class="serif">Literally.</span></h2>
        <p style="margin-top:24px; color:var(--soft); font-size:16px; line-height:1.7;">Crowd Control Digital runs ~20 entertainment engagements a month. Music is the most brutal attention market that exists: no product demo, no whitepaper, just whether people watch. That's the muscle this desk runs on.</p>
      </div>
      <div class="wedge-list reveal">
        <div class="wedge-item">
          <span class="tag">SOUND CONTROL</span>
          <span class="desc"><b>Weekly trend intelligence</b> that reverse-engineers the Billboard Hot 100 down to the post level. Your formats come from what's working now, not last year's playbook.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">VIDEO AI</span>
          <span class="desc"><b>Frame-level hook analysis and virality prediction</b> on every cut before it ships. We grade content the way labels grade singles.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">CREATOR NETWORK</span>
          <span class="desc"><b>Seeding and page-network infrastructure</b> built for artists, repurposed as your distribution rails.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">PERFORMANCE PAID</span>
          <span class="desc"><b>Full-stack paid media</b> across Meta, TikTok, YouTube, and Google, run against measurable outcomes for releases and tours.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">CONTROL SYSTEMS</span>
          <span class="desc"><b>The dashboard discipline</b> behind TOUR CONTROL and CHART CONTROL: baselines, predictions, attribution. Now pointed at your name.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pricing">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 06 / Pricing</div>
    <h2>Two ways in. <span class="serif">Both are simple.</span></h2>
    <div class="price-grid reveal">
      <div class="pcard">
        <div class="plan">Launch Sprint</div>
        <div class="price">$25,000 <span class="per">/mo · 90 days</span></div>
        <p class="pdesc">The launch system. Audit baseline, voice system, first formats proven, network attached, first 12 pieces shipped. Graduate to the desk or walk with the system.</p>
        <ul>
          <li><b>Founder Attention Audit</b> and baseline setting</li>
          <li><b>Voice system + POV map</b> built with your editorial lead</li>
          <li><b>First formats tested</b> through the studio and network</li>
          <li><b>Weekly ship cadence</b> from week two</li>
        </ul>
      </div>
      <div class="pcard feat">
        <div class="plan">The Desk</div>
        <div class="price">$50,000 <span class="per">/mo · annual</span></div>
        <p class="pdesc">Every desk function, full network amplification, quarterly attention statements. One of eight seats.</p>
        <ul>
          <li><b>Editorial desk</b> with named lead, full ship cadence</li>
          <li><b>Short-form studio</b> with entertainment-grade production</li>
          <li><b>Owned network amplification</b> on every release</li>
          <li><b>Paid amplification</b> with spend-follows-signal rules</li>
          <li><b>Access engineering</b>: podcasts, stages, press</li>
          <li><b>Attention P&amp;L</b> dashboard + quarterly statement</li>
        </ul>
      </div>
    </div>
    <div class="elig">
      <span>For founders with stakes: <b>a raise, a category fight, a hiring war, an exit window</b></span>
      <span>Capacity: <b>eight seats</b>, full stop</span>
    </div>
  </div>
</section>

<section class="cta-sec">
  <div class="wrap">
    <div class="sec-label" style="justify-content:center;"><span class="s">✦</span> 07 / Start</div>
    <div class="serif-line">The founders winning your category aren't smarter. <em>They're louder, on purpose.</em></div>
    <p>Start with the audit. Twenty minutes after you read it, you'll know exactly where the attention in your category is sitting unclaimed.</p>
    <div class="hero-ctas">
      <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit&body=Name%3A%0ACompany%20%2F%20fund%3A%0AWhat%27s%20at%20stake%20this%20year%3A%0A" class="btn btn-coral">Request your audit</a>
      <a href="/founder-control/demo" class="btn btn-ink">Tour the attention P&amp;L</a>
    </div>
    <div class="seats">Q3 2026 · Two seats open</div>
  </div>
</section>

<footer>
  <div class="wrap foot">
    <span>✦ FOUNDER CONTROL · A Crowd Control Digital Product</span>
    <a href="mailto:geoff@crowdcontroldigital.com">geoff@crowdcontroldigital.com</a>
  </div>
</footer>

<script>
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
