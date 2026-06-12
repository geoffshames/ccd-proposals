export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FOUNDER CONTROL · The Media Company Around You</title>
<meta name="description" content="A capacity-limited desk that builds the media company around a founder: editorial desk, short-form studio, engineered distribution, and an attention P&L your board will respect. By Crowd Control Digital." />
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --paper: #F5F1E9;
    --card: #FFFDF8;
    --ink: #17150F;
    --soft: #5C5749;
    --faint: rgba(23, 21, 15, 0.13);
    --hair: rgba(23, 21, 15, 0.08);
    --coral: #E0502E;
    --coral-soft: rgba(224, 80, 46, 0.10);
    --fh: "Cabinet Grotesk", sans-serif;
    --fb: "Satoshi", sans-serif;
    --fm: "JetBrains Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background: var(--paper); color: var(--ink); font-family: var(--fb); -webkit-font-smoothing: antialiased; overflow-x: hidden; }
  ::selection { background: var(--coral); color: var(--paper); }
  .wrap { max-width: 1240px; margin: 0 auto; padding: 0 32px; }
  h1, h2, h3, .display { font-family: var(--fh); }

  /* ---------- Tickers ---------- */
  .ticker { background: var(--ink); color: var(--paper); overflow: hidden; white-space: nowrap; padding: 9px 0; }
  .ticker-inner { display: inline-block; animation: tick 32s linear infinite; will-change: transform; }
  .ticker span { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.26em; text-transform: uppercase; padding: 0 18px; }
  .ticker b { color: var(--coral); font-weight: 400; }
  @keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .band { background: var(--coral); color: var(--paper); overflow: hidden; white-space: nowrap; padding: 12px 0; border-top: 1px solid var(--ink); border-bottom: 1px solid var(--ink); }
  .band .ticker-inner { animation-duration: 26s; }
  .band span { font-family: var(--fh); font-weight: 700; font-size: 17px; letter-spacing: 0.01em; padding: 0 26px; }

  /* ---------- Nav ---------- */
  nav { position: sticky; top: 0; z-index: 50; background: rgba(245, 241, 233, 0.88); backdrop-filter: blur(12px); border-bottom: 1px solid var(--faint); }
  .nav-inner { max-width: 1240px; margin: 0 auto; padding: 0 32px; height: 66px; display: flex; align-items: center; justify-content: space-between; }
  .wordmark { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }
  .wordmark .star { color: var(--coral); font-size: 15px; }
  .wordmark .name { font-family: var(--fm); font-weight: 600; font-size: 13.5px; letter-spacing: 0.18em; }
  .nav-links { display: flex; align-items: center; gap: 26px; }
  .nav-links a:not(.btn) { color: var(--soft); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; }
  .nav-links a:not(.btn):hover { color: var(--ink); }
  .btn { display: inline-flex; align-items: center; gap: 10px; font-family: var(--fm); font-size: 11.5px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 13px 26px; border-radius: 999px; transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s, color 0.2s; cursor: pointer; border: 1px solid var(--ink); }
  .btn:active { transform: translateY(0) scale(0.97); }
  .btn-ink { background: var(--ink); color: var(--paper); }
  .btn-ink:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(23,21,15,0.18); }
  .btn-coral { background: var(--coral); color: var(--paper); border-color: var(--coral); }
  .btn-coral:hover { transform: translateY(-2px); box-shadow: 0 12px 28px rgba(224,80,46,0.30); }
  .btn-line { background: transparent; color: var(--ink); }
  .btn-line:hover { background: var(--ink); color: var(--paper); }
  .nav-links .btn { padding: 10px 20px; }

  /* ---------- Hero ---------- */
  header { position: relative; padding: 96px 0 0; }
  .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 48px; align-items: center; }
  .kicker { font-family: var(--fm); font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--coral); display: flex; align-items: center; gap: 12px; margin-bottom: 30px; }
  h1 { font-size: clamp(40px, 5.8vw, 76px); line-height: 0.98; letter-spacing: -0.03em; font-weight: 800; }
  h1 .accent { color: var(--coral); font-weight: 500; }
  .hero-sub { margin-top: 28px; max-width: 600px; font-size: 18px; line-height: 1.65; color: var(--soft); }
  .hero-sub b { color: var(--ink); font-weight: 700; }
  .hero-ctas { margin-top: 40px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center; }
  .hero-note { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }

  /* Floating dashboard chip (hero right) */
  .hero-right { position: relative; min-height: 360px; }
  .dots { position: absolute; inset: 0; background-image: radial-gradient(rgba(23,21,15,0.13) 1px, transparent 1px); background-size: 22px 22px; border-radius: 28px; pointer-events: none; }
  .float-card { position: relative; background: var(--card); border: 1px solid var(--faint); border-radius: 22px; padding: 26px 28px; width: min(360px, 100%); margin: 38px auto 0; box-shadow: 0 30px 60px -20px rgba(23,21,15,0.18); transform: rotate(-2.5deg); animation: floaty 6s ease-in-out infinite; will-change: transform; }
  @keyframes floaty { 0%, 100% { transform: rotate(-2.5deg) translateY(0); } 50% { transform: rotate(-2.5deg) translateY(-10px); } }
  .float-card .fc-top { display: flex; justify-content: space-between; align-items: center; font-family: var(--fm); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--soft); }
  .float-card .live { display: flex; align-items: center; gap: 7px; color: var(--coral); }
  .float-card .live::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--coral); animation: pulse 2.2s infinite; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
  .float-card .big-num { margin-top: 16px; font-family: var(--fh); font-weight: 800; font-size: 58px; line-height: 1; letter-spacing: -0.02em; }
  .float-card .big-num small { font-family: var(--fm); font-size: 12px; font-weight: 400; color: var(--soft); letter-spacing: 0.04em; }
  .float-card .delta { margin-top: 6px; font-family: var(--fm); font-size: 11.5px; color: #1E7A4F; }
  .float-card svg { display: block; width: 100%; height: 64px; margin-top: 16px; }
  .float-card .spark { stroke: var(--coral); stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-dasharray: 320; stroke-dashoffset: 320; animation: draw 2s ease forwards 0.5s; }
  @keyframes draw { to { stroke-dashoffset: 0; } }
  .float-card .fc-foot { margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--hair); display: flex; justify-content: space-between; font-family: var(--fm); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--soft); }
  .float-card .fc-foot b { color: var(--ink); font-weight: 600; }

  /* Divided stat band (no cards) */
  .statband { margin-top: 84px; border-top: 1px solid var(--faint); border-bottom: 1px solid var(--faint); display: grid; grid-template-columns: 1fr 1.2fr 1fr; }
  .statcell { padding: 38px 36px; }
  .statcell + .statcell { border-left: 1px solid var(--faint); }
  .statcell .n { font-family: var(--fh); font-weight: 800; font-size: 46px; line-height: 1; letter-spacing: -0.02em; }
  .statcell .n span { color: var(--coral); }
  .statcell p { margin-top: 10px; font-size: 14px; line-height: 1.55; color: var(--soft); max-width: 34ch; }

  /* ---------- Sections ---------- */
  section { padding: 104px 0; }
  section + section { border-top: 1px solid var(--faint); }
  .sec-label { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--soft); margin-bottom: 18px; display: flex; align-items: center; gap: 10px; }
  .sec-label .s { color: var(--coral); }
  h2 { font-size: clamp(30px, 3.6vw, 46px); font-weight: 800; letter-spacing: -0.025em; line-height: 1.05; max-width: 720px; }
  h2 .accent { color: var(--coral); font-weight: 500; }

  /* Comparison */
  .vs-grid { margin-top: 60px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; position: relative; }
  .vs-card { border-radius: 24px; padding: 44px 42px; }
  .vs-card.them { background: transparent; border: 1px dashed var(--faint); }
  .vs-card.us { background: var(--ink); color: var(--paper); box-shadow: 0 30px 60px -18px rgba(23,21,15,0.28); }
  .vs-card .vs-head { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; margin-bottom: 24px; }
  .vs-card.them .vs-head { color: var(--soft); }
  .vs-card.us .vs-head { color: #FF9377; }
  .vs-card ul { list-style: none; }
  .vs-card li { display: flex; gap: 14px; padding: 15px 0; font-size: 15.5px; line-height: 1.5; border-top: 1px solid var(--hair); }
  .vs-card.us li { border-top: 1px solid rgba(245,241,233,0.14); }
  .vs-card.them li { color: var(--soft); }
  .vs-card .mark { font-family: var(--fm); flex-shrink: 0; }
  .vs-card.them .mark { color: #A8542F; opacity: 0.5; }
  .vs-card.us .mark { color: #FF9377; }
  .vs-badge { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%) rotate(-7deg); background: var(--paper); border: 1px solid var(--ink); border-radius: 999px; font-family: var(--fh); font-weight: 700; font-size: 18px; padding: 10px 22px; z-index: 2; box-shadow: 0 10px 24px rgba(23,21,15,0.16); }

  /* Desk bento: zig-zag 12-col */
  .bento { margin-top: 60px; display: grid; grid-template-columns: repeat(12, 1fr); gap: 18px; }
  .mod { background: var(--card); border: 1px solid var(--hair); border-radius: 24px; padding: 38px 36px; position: relative; overflow: hidden; transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
  .mod:hover { transform: translateY(-5px); box-shadow: 0 24px 48px -16px rgba(23,21,15,0.14); }
  .mod.w7 { grid-column: span 7; }
  .mod.w5 { grid-column: span 5; }
  .mod .idx { font-family: var(--fm); font-size: 10px; letter-spacing: 0.2em; color: var(--coral); }
  .mod h3 { margin-top: 14px; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
  .mod p { margin-top: 11px; font-size: 14.5px; line-height: 1.65; color: var(--soft); max-width: 58ch; }
  .mod p b { color: var(--ink); font-weight: 700; }
  .mod .shimmer { margin-top: 20px; height: 8px; border-radius: 999px; background: linear-gradient(90deg, var(--hair) 0%, var(--hair) 35%, var(--coral-soft) 50%, var(--hair) 65%, var(--hair) 100%); background-size: 220% 100%; animation: shim 2.8s linear infinite; }
  @keyframes shim { from { background-position: 120% 0; } to { background-position: -120% 0; } }
  .mod .chiprow { margin-top: 18px; display: flex; gap: 8px; flex-wrap: wrap; }
  .mod .chip { font-family: var(--fm); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; border: 1px solid var(--faint); border-radius: 999px; padding: 6px 12px; color: var(--soft); }

  /* Audit */
  .audit-grid { margin-top: 60px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; align-items: stretch; }
  .audit-copy { background: var(--card); border: 1px solid var(--hair); border-radius: 24px; padding: 46px 44px; display: flex; flex-direction: column; justify-content: space-between; }
  .audit-copy p { font-size: 16.5px; line-height: 1.7; color: var(--soft); max-width: 56ch; }
  .audit-copy p b { color: var(--ink); font-weight: 700; }
  .audit-copy .price-line { margin-top: 30px; font-family: var(--fm); font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink); }
  .audit-copy .price-line b { color: var(--coral); }
  .audit-list { background: var(--ink); color: var(--paper); border-radius: 24px; padding: 44px 42px; }
  .audit-list .h { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: #FF9377; margin-bottom: 22px; }
  .audit-list ol { list-style: none; counter-reset: a; }
  .audit-list li { counter-increment: a; display: flex; gap: 16px; padding: 14px 0; border-top: 1px solid rgba(245,241,233,0.14); font-size: 15px; line-height: 1.5; }
  .audit-list li::before { content: counter(a, decimal-leading-zero); font-family: var(--fm); font-size: 11px; color: #FF9377; padding-top: 4px; }
  .audit-ctas { margin-top: 34px; display: flex; gap: 14px; flex-wrap: wrap; }

  /* Report */
  .kpi-row { margin-top: 56px; display: flex; flex-wrap: wrap; gap: 12px; max-width: 880px; }
  .kpi-chip { font-family: var(--fm); font-size: 12px; letter-spacing: 0.03em; border: 1px solid var(--ink); border-radius: 999px; padding: 11px 20px; background: var(--card); transition: background 0.2s, color 0.2s, transform 0.25s cubic-bezier(0.16,1,0.3,1); }
  .kpi-chip:hover { background: var(--ink); color: var(--paper); transform: translateY(-2px); }
  .kpi-chip.no { border-style: dashed; border-color: var(--faint); color: var(--soft); text-decoration: line-through; background: transparent; }
  .report-line { margin-top: 36px; font-family: var(--fh); font-weight: 700; font-size: clamp(20px, 2.4vw, 28px); line-height: 1.4; max-width: 740px; letter-spacing: -0.01em; }
  .report-line em { color: var(--coral); font-style: normal; font-weight: 500; }
  .report-line a { color: var(--ink); text-decoration: underline; text-decoration-color: var(--coral); text-underline-offset: 4px; }

  /* Wedge */
  .wedge-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 64px; align-items: start; }
  .wedge-list { display: flex; flex-direction: column; }
  .wedge-item { display: flex; gap: 22px; padding: 23px 0; border-bottom: 1px solid var(--hair); align-items: baseline; }
  .wedge-item:last-child { border-bottom: none; }
  .wedge-item .tag { font-family: var(--fm); font-size: 10.5px; color: var(--coral); letter-spacing: 0.12em; white-space: nowrap; min-width: 150px; }
  .wedge-item .desc { font-size: 15px; color: var(--soft); line-height: 1.6; }
  .wedge-item .desc b { color: var(--ink); font-weight: 700; }

  /* Pricing + border beam */
  .price-grid { margin-top: 60px; display: grid; grid-template-columns: 1fr 1.1fr; gap: 24px; align-items: stretch; }
  .pcard { border-radius: 26px; padding: 48px 44px; border: 1px solid var(--hair); background: var(--card); position: relative; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1); }
  .pcard:hover { transform: translateY(-4px); box-shadow: 0 24px 52px -18px rgba(23,21,15,0.14); }
  .pcard.feat { background: var(--ink); color: var(--paper); box-shadow: 0 32px 64px -20px rgba(23,21,15,0.30); }
  @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
  .pcard.feat::before { content: ""; position: absolute; inset: -1px; border-radius: 27px; padding: 1.5px; background: conic-gradient(from var(--angle), transparent 0%, transparent 72%, #FF9377 86%, transparent 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; animation: beam 5s linear infinite; pointer-events: none; }
  @keyframes beam { to { --angle: 360deg; } }
  .pcard .plan { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.24em; text-transform: uppercase; color: var(--soft); }
  .pcard.feat .plan { color: #FF9377; }
  .pcard .price { margin-top: 22px; font-family: var(--fh); font-weight: 800; font-size: 50px; line-height: 1; letter-spacing: -0.02em; }
  .pcard .price .per { font-family: var(--fm); font-size: 12.5px; font-weight: 400; color: var(--soft); letter-spacing: 0.04em; }
  .pcard.feat .price .per { color: rgba(245,241,233,0.6); }
  .pcard .pdesc { margin-top: 16px; font-size: 14.5px; line-height: 1.6; color: var(--soft); }
  .pcard.feat .pdesc { color: rgba(245,241,233,0.78); }
  .pcard ul { margin-top: 28px; list-style: none; }
  .pcard li { padding: 12px 0; border-top: 1px solid var(--hair); font-size: 14.5px; display: flex; gap: 12px; line-height: 1.5; color: var(--soft); }
  .pcard.feat li { border-top: 1px solid rgba(245,241,233,0.14); color: rgba(245,241,233,0.82); }
  .pcard li::before { content: "✦"; color: var(--coral); font-size: 10px; padding-top: 4px; }
  .pcard.feat li::before { color: #FF9377; }
  .pcard li b { color: var(--ink); font-weight: 700; }
  .pcard.feat li b { color: var(--paper); }
  .elig { margin-top: 30px; display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; font-family: var(--fm); font-size: 11.5px; letter-spacing: 0.04em; color: var(--soft); }
  .elig b { color: var(--coral); font-weight: 500; }

  /* CTA (asymmetric) */
  .cta-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 56px; align-items: center; }
  .cta-line { font-family: var(--fh); font-weight: 800; font-size: clamp(30px, 4.2vw, 54px); line-height: 1.05; letter-spacing: -0.025em; }
  .cta-line em { color: var(--coral); font-style: normal; font-weight: 500; }
  .cta-right p { color: var(--soft); font-size: 15.5px; line-height: 1.7; }
  .cta-right .hero-ctas { margin-top: 28px; }
  .seats { margin-top: 26px; font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--coral); }

  footer { padding: 44px 0 60px; border-top: 1px solid var(--faint); }
  .foot { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }
  .foot a { color: var(--ink); text-decoration: none; }
  .foot a:hover { color: var(--coral); }

  .reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1); }
  .reveal.in { opacity: 1; transform: none; }
  .bento.in .mod { opacity: 0; transform: translateY(18px); animation: rise 0.7s cubic-bezier(0.16,1,0.3,1) forwards; }
  .bento.in .mod:nth-child(1) { animation-delay: 0ms; }
  .bento.in .mod:nth-child(2) { animation-delay: 80ms; }
  .bento.in .mod:nth-child(3) { animation-delay: 160ms; }
  .bento.in .mod:nth-child(4) { animation-delay: 240ms; }
  .bento.in .mod:nth-child(5) { animation-delay: 320ms; }
  .bento.in .mod:nth-child(6) { animation-delay: 400ms; }
  @keyframes rise { to { opacity: 1; transform: none; } }

  @media (max-width: 940px) {
    .hero-grid, .vs-grid, .audit-grid, .wedge-grid, .price-grid, .cta-grid { grid-template-columns: 1fr; }
    .statband { grid-template-columns: 1fr; }
    .statcell + .statcell { border-left: none; border-top: 1px solid var(--faint); }
    .mod.w7, .mod.w5 { grid-column: span 12; }
    .vs-badge { display: none; }
    .nav-links a:not(.btn) { display: none; }
    .hero-right { min-height: 0; margin-top: 10px; }
    header { padding-top: 64px; }
  }
</style>
</head>
<body>

<div class="ticker">
  <div class="ticker-inner">
    <span>FOUNDER CONTROL <b>✦</b> THE BOARD ROOM <b>✦</b> THE MEDIA COMPANY AROUND YOU <b>✦</b> A CROWD CONTROL DIGITAL PRODUCT <b>✦</b> ATTENTION, REPORTED LIKE A FUND <b>✦</b> EIGHT SEATS, THAT IS THE WHOLE ROSTER <b>✦</b> </span><span>FOUNDER CONTROL <b>✦</b> THE BOARD ROOM <b>✦</b> THE MEDIA COMPANY AROUND YOU <b>✦</b> A CROWD CONTROL DIGITAL PRODUCT <b>✦</b> ATTENTION, REPORTED LIKE A FUND <b>✦</b> EIGHT SEATS, THAT IS THE WHOLE ROSTER <b>✦</b> </span>
  </div>
</div>

<nav>
  <div class="nav-inner">
    <a class="wordmark" href="#"><span class="star">✦</span><span class="name">FOUNDER CONTROL</span></a>
    <div class="nav-links">
      <a href="#vs">The Difference</a>
      <a href="#desk">The Board Room</a>
      <a href="#audit">The Audit</a>
      <a href="#pricing">Pricing</a>
      <a href="/founder-control/demo" class="btn btn-line">Live Demo</a>
      <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit" class="btn btn-coral">Request Audit</a>
    </div>
  </div>
</nav>

<header>
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <div class="kicker">✦ For founders with something at stake</div>
        <h1>You don't need a ghostwriter. <span class="accent">You need a media company.</span></h1>
        <p class="hero-sub">FOUNDER CONTROL is <b>The Board Room</b>: a capacity-limited operation that builds the media company around you: an editorial desk for your voice, a short-form studio that makes you watchable, a distribution engine that puts creator seeding and paid behind every winner, and an <b>attention P&amp;L your board will actually respect</b>.</p>
        <div class="hero-ctas">
          <a href="/founder-control/audit" class="btn btn-ink">See a sample audit</a>
          <a href="/founder-control/demo" class="btn btn-line">Tour the attention P&amp;L</a>
          <span class="hero-note">By Crowd Control Digital</span>
        </div>
      </div>
      <div class="hero-right">
        <div class="dots"></div>
        <div class="float-card">
          <div class="fc-top"><span>Attention Index</span><span class="live">Desk live</span></div>
          <div class="big-num">74 <small>/100</small></div>
          <div class="delta">+47 vs passive baseline</div>
          <svg viewBox="0 0 300 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path class="spark" d="M4 50 L30 51 L56 48 L82 52 L108 49 L134 53 L160 44 L186 36 L212 28 L238 20 L264 13 L296 7" />
          </svg>
          <div class="fc-foot"><span>Qualified inbound</span><b>23/mo · 4x</b></div>
        </div>
      </div>
    </div>

    <div class="statband reveal">
      <div class="statcell">
        <div class="n">8<span>✦</span></div>
        <p>Seats in the Board Room, total. You are not client #41 on an agency roster. When it's full, it's full.</p>
      </div>
      <div class="statcell">
        <div class="n"><span>0</span></div>
        <p>Pieces that ship naked. Creator seeding, cross-promos, and paid amplification put muscle behind every winner.</p>
      </div>
      <div class="statcell">
        <div class="n">P<span>&amp;</span>L</div>
        <p>Attention reported like a fund reports returns: baseline, alpha, attributed pipeline. Not a screenshot of impressions.</p>
      </div>
    </div>
  </div>
</header>

<div class="band" style="margin-top:96px;">
  <div class="ticker-inner">
    <span>Personal branding is a commodity. A media company is an asset.</span><span>✦</span><span>Trained in the hardest attention market on earth.</span><span>✦</span><span>Personal branding is a commodity. A media company is an asset.</span><span>✦</span><span>Trained in the hardest attention market on earth.</span><span>✦</span>
  </div>
</div>

<section id="vs" style="border-top:none;">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 01 / The Difference</div>
    <h2>The category is a writing vendor wearing a strategy hat. <span class="accent">We're not in the category.</span></h2>
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
          <li><span class="mark">✦</span>Distribution engineered: creator seeding, cross-promos, and engagement ops on every piece</li>
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
    <div class="sec-label"><span class="s">✦</span> 02 / The Board Room</div>
    <h2>Six functions. One media company. <span class="accent">Yours.</span></h2>
    <div class="bento reveal">
      <div class="mod w7">
        <div class="idx">FC-01</div>
        <h3>Editorial Desk</h3>
        <p>A named editorial lead who owns your voice system and POV map. Ghostwriting is table stakes; <b>the desk also decides what you never post.</b> Weekly editorial meetings, a standing backlog of POV territory, and a kill list for anything that smells like filler.</p>
        <div class="chiprow"><span class="chip">Voice system</span><span class="chip">POV map</span><span class="chip">Kill list</span></div>
      </div>
      <div class="mod w5">
        <div class="idx">FC-02</div>
        <h3>Short-Form Studio</h3>
        <p>Formats engineered from what's winning in entertainment right now: hooks, cuts, captions, pacing. <b>You, watchable.</b> Corporate LinkedIn energy is banned on sight.</p>
      </div>
      <div class="mod w5">
        <div class="idx">FC-03</div>
        <h3>Distribution Engineering</h3>
        <p>Nothing ships naked. Creator seeding through the entertainment network we already run for artists, negotiated cross-promos, and first-hour engagement ops. <b>Winners get pushed, not posted.</b></p>
      </div>
      <div class="mod w7">
        <div class="idx">FC-04</div>
        <h3>Paid Amplification</h3>
        <p>Performance buyers turn organic winners into reach. <b>Spend follows signal</b>, not a flat boost budget. The same paid muscle we run for entertainment clients, with creative-level attribution on every dollar.</p>
        <div class="shimmer" aria-hidden="true"></div>
      </div>
      <div class="mod w7">
        <div class="idx">FC-05</div>
        <h3>Access Engineering</h3>
        <p>Podcasts, stages, and press targeted with fit scores, then packaged, pitched, and prepped. <b>Your calendar fills with rooms that matter</b>, not webinars. Every appearance gets a halo-capture plan before you walk in.</p>
        <div class="chiprow"><span class="chip">Fit scores</span><span class="chip">Warm paths</span><span class="chip">Halo capture</span></div>
      </div>
      <div class="mod w5">
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
    <h2>We don't pitch. <span class="accent">We audit.</span></h2>
    <div class="audit-grid reveal">
      <div class="audit-copy">
        <div>
          <p>Before anyone signs anything, we run the <b>Founder Attention Audit</b>: your current presence scored against five comparable founders across ten dimensions, with every gap converted into a ranked list of <b>alpha opportunities</b> and a 90-day plan to capture them.</p>
          <p style="margin-top:18px;">It's the same instrument we use to run the Board Room. If the audit doesn't make the case on its own, you'll know in twenty minutes and we part friends.</p>
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
    <h2>Metrics your board respects. <span class="accent">Vanity left at the door.</span></h2>
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
    <p class="report-line reveal">Every quarter you get an attention statement: where you started, <em>what the desk created above baseline</em>, and what it touched in revenue, talent, and access. <a href="/founder-control/demo">See the live demo</a></p>
  </div>
</section>

<section id="wedge">
  <div class="wrap">
    <div class="wedge-grid">
      <div>
        <div class="sec-label"><span class="s">✦</span> 05 / Why Us</div>
        <h2>Our other desks chart records. <span class="accent">Literally.</span></h2>
        <p style="margin-top:24px; color:var(--soft); font-size:16px; line-height:1.7;">Crowd Control Digital runs 100+ entertainment engagements a month. Music is the most brutal attention market that exists: no product demo, no whitepaper, just whether people watch. That's the muscle the Board Room runs on.</p>
      </div>
      <div class="wedge-list reveal">
        <div class="wedge-item">
          <span class="tag">TREND INTELLIGENCE</span>
          <span class="desc"><b>A weekly pipeline</b> that reverse-engineers what's charting in entertainment down to the post level. Your formats come from what's working this week, not last year's playbook.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">VIDEO SCIENCE</span>
          <span class="desc"><b>Frame-level hook analysis and virality prediction</b> on every cut before it ships. We grade content the way labels grade singles.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">CREATOR SEEDING</span>
          <span class="desc"><b>Seeding infrastructure</b> built to move songs up the charts, pointed at your content.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">PERFORMANCE PAID</span>
          <span class="desc"><b>Full-stack paid media</b> across Meta, TikTok, YouTube, and Google, run against measurable outcomes for releases and tours.</span>
        </div>
        <div class="wedge-item">
          <span class="tag">MEASUREMENT</span>
          <span class="desc"><b>Baseline, prediction, and attribution systems</b> built to call ticket sales and chart positions before they happen. Now pointed at your name.</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="pricing">
  <div class="wrap">
    <div class="sec-label"><span class="s">✦</span> 06 / Pricing</div>
    <h2>Two ways in. <span class="accent">Both are simple.</span></h2>
    <div class="price-grid reveal">
      <div class="pcard">
        <div class="plan">Launch Sprint</div>
        <div class="price">$25,000 <span class="per">/mo · 90 days</span></div>
        <p class="pdesc">The launch system. Audit baseline, voice system, first formats proven, distribution attached, first 12 pieces shipped. Graduate to the Board Room or walk with the system.</p>
        <ul>
          <li><b>Founder Attention Audit</b> and baseline setting</li>
          <li><b>Voice system + POV map</b> built with your editorial lead</li>
          <li><b>First formats tested</b> through the studio and creator seeding</li>
          <li><b>Weekly ship cadence</b> from week two</li>
        </ul>
      </div>
      <div class="pcard feat">
        <div class="plan">The Board Room</div>
        <div class="price">$50,000 <span class="per">/mo · annual</span></div>
        <p class="pdesc">Every function on this page, full amplification, quarterly attention statements. One of eight seats.</p>
        <ul>
          <li><b>Editorial desk</b> with named lead, full ship cadence</li>
          <li><b>Short-form studio</b> with entertainment-grade production</li>
          <li><b>Creator seeding + engagement ops</b> on every release</li>
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

<section id="start">
  <div class="wrap cta-grid">
    <div>
      <div class="sec-label"><span class="s">✦</span> 07 / Start</div>
      <div class="cta-line">The founders winning your category aren't smarter. <em>They're louder, on purpose.</em></div>
    </div>
    <div class="cta-right">
      <p>Start with the audit. Twenty minutes after you read it, you'll know exactly where the attention in your category is sitting unclaimed.</p>
      <div class="hero-ctas">
        <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit&body=Name%3A%0ACompany%20%2F%20fund%3A%0AWhat%27s%20at%20stake%20this%20year%3A%0A" class="btn btn-coral">Request your audit</a>
        <a href="/founder-control/demo" class="btn btn-ink">Tour the P&amp;L</a>
      </div>
      <div class="seats">Q3 2026 · Two seats open</div>
    </div>
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
  document.querySelectorAll(".reveal, .bento").forEach(function (el) { io.observe(el); });
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
