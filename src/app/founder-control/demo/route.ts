export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FOUNDER CONTROL · Attention P&L · Maya Reyes / Tidewater · Q2 2026</title>
<meta name="description" content="FOUNDER CONTROL attention P&L dashboard demo. Illustrative data." />
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
    --green: #1E7A4F;
    --amber: #B07816;
    --fd: "Space Grotesk", sans-serif;
    --fs: "Instrument Serif", serif;
    --fm: "IBM Plex Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: var(--paper); color: var(--ink); font-family: var(--fd); -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--coral); color: var(--paper); }
  .num { font-family: var(--fm); font-variant-numeric: tabular-nums; }
  .wrap { max-width: 1300px; margin: 0 auto; padding: 0 28px; }

  .ribbon { background: var(--ink); color: var(--paper); text-align: center; font-family: var(--fm); font-size: 10px; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; padding: 8px 12px; }
  .ribbon b { color: var(--coral); font-weight: 500; }

  .topbar { border-bottom: 1px solid var(--faint); background: rgba(244,239,230,0.92); position: sticky; top: 0; z-index: 40; backdrop-filter: blur(10px); }
  .topbar-inner { max-width: 1300px; margin: 0 auto; padding: 0 28px; height: 62px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .wordmark { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }
  .wordmark .star { color: var(--coral); font-size: 14px; }
  .wordmark .name { font-family: var(--fm); font-weight: 600; font-size: 13px; letter-spacing: 0.2em; }
  .topbar-right { display: flex; align-items: center; gap: 20px; }
  .topbar-right .stamp { font-family: var(--fm); font-size: 11px; color: var(--soft); letter-spacing: 0.05em; }
  .topbar-right a { font-family: var(--fm); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); text-decoration: none; border: 1px solid var(--ink); padding: 8px 16px; border-radius: 999px; transition: background 0.2s, color 0.2s; }
  .topbar-right a:hover { background: var(--ink); color: var(--paper); }

  .head { padding: 38px 0 30px; display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .head .eyebrow { font-family: var(--fm); font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--soft); margin-bottom: 10px; }
  .head h1 { font-size: clamp(26px, 3vw, 40px); font-weight: 600; letter-spacing: -0.02em; }
  .head h1 .co { font-family: var(--fs); font-style: italic; font-weight: 400; color: var(--coral); }
  .head h1 .qtr { color: var(--soft); font-weight: 400; font-size: 0.6em; }
  .period { font-family: var(--fm); font-size: 12px; color: var(--soft); display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
  .period .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--coral); display: inline-block; margin-right: 8px; animation: pulse 2.2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }

  .kpis { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-bottom: 24px; }
  .kpi { background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 22px 24px; box-shadow: 0 1px 0 rgba(22,20,15,0.04); transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .kpi:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(22,20,15,0.09); }
  .kpi .l { font-family: var(--fm); font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--soft); }
  .kpi .v { margin-top: 12px; font-family: var(--fs); font-size: 34px; line-height: 1; letter-spacing: -0.01em; }
  .kpi .v small { font-family: var(--fm); font-size: 12px; color: var(--soft); }
  .kpi .d { margin-top: 10px; font-family: var(--fm); font-size: 11px; }
  .up { color: var(--green); } .down { color: var(--coral); } .blue { color: var(--cobalt); } .mut { color: var(--soft); }

  .panel { background: var(--card); border: 1px solid var(--hair); border-radius: 18px; margin-bottom: 24px; overflow: hidden; box-shadow: 0 1px 0 rgba(22,20,15,0.04); }
  .panel-head { padding: 20px 26px; border-bottom: 1px solid var(--hair); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  .panel-head h2 { font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 12px; }
  .panel-head h2 .code { font-family: var(--fm); font-size: 10px; color: var(--coral); letter-spacing: 0.16em; }
  .panel-head .sub { font-family: var(--fm); font-size: 11px; color: var(--soft); }
  .panel-body { padding: 26px; }

  .legend { display: flex; gap: 22px; flex-wrap: wrap; }
  .lg { display: flex; align-items: center; gap: 8px; font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.05em; color: var(--soft); }
  .lg .sw { width: 18px; height: 3px; border-radius: 2px; }
  .lg .sw.pre { background: #A39C8C; }
  .lg .sw.act { background: var(--coral); }
  .lg .sw.base { height: 0; border-top: 2px dashed #A39C8C; border-radius: 0; }
  .lg .sw.alpha { width: 12px; height: 12px; background: rgba(255,74,31,0.12); border: 1px solid rgba(255,74,31,0.45); }
  #idxchart { width: 100%; height: auto; display: block; }
  .chart-note { margin-top: 14px; font-size: 12.5px; color: var(--soft); line-height: 1.6; }
  .chart-note b { color: var(--coral); font-family: var(--fm); font-weight: 500; }

  table { width: 100%; border-collapse: collapse; }
  th { font-family: var(--fm); font-size: 9.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); text-align: left; padding: 14px 26px; border-bottom: 1px solid var(--faint); font-weight: 500; white-space: nowrap; }
  td { padding: 16px 26px; border-bottom: 1px solid var(--hair); font-size: 13.5px; vertical-align: middle; }
  tr:last-child td { border-bottom: none; }
  tbody tr { transition: background 0.15s; }
  tbody tr:hover { background: rgba(22,20,15,0.025); }
  td.r, th.r { text-align: right; }
  .piece { font-weight: 600; font-size: 14px; }
  .meta { margin-top: 4px; font-family: var(--fm); font-size: 10.5px; color: var(--soft); letter-spacing: 0.03em; }
  .outcome { font-family: var(--fm); font-size: 11px; color: var(--cobalt); letter-spacing: 0.02em; }

  .two-col { display: grid; grid-template-columns: 7fr 5fr; gap: 24px; align-items: start; }

  .opp { padding: 20px 26px; border-bottom: 1px solid var(--hair); display: grid; grid-template-columns: 42px 1fr auto; gap: 18px; align-items: start; transition: background 0.15s; }
  .opp:last-child { border-bottom: none; }
  .opp:hover { background: rgba(22,20,15,0.025); }
  .opp .rank { font-family: var(--fs); font-style: italic; font-size: 22px; color: var(--coral); }
  .opp .tagrow { display: flex; gap: 10px; align-items: center; margin-bottom: 7px; flex-wrap: wrap; }
  .opp .sig { font-family: var(--fm); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--coral); border: 1px solid rgba(255,74,31,0.4); padding: 3px 9px; border-radius: 999px; }
  .opp h3 { font-size: 14.5px; font-weight: 600; line-height: 1.4; }
  .opp p { margin-top: 6px; font-size: 12.5px; line-height: 1.6; color: var(--soft); max-width: 520px; }
  .opp .est { text-align: right; white-space: nowrap; font-family: var(--fm); font-size: 12px; color: var(--ink); }
  .opp .est b { display: block; font-size: 15px; color: var(--green); font-weight: 600; }
  .opp .est small { display: block; margin-top: 3px; font-size: 9.5px; color: var(--soft); letter-spacing: 0.08em; text-transform: uppercase; }

  .rail { padding: 16px 26px; border-bottom: 1px solid var(--hair); display: flex; justify-content: space-between; align-items: baseline; gap: 14px; }
  .rail:last-child { border-bottom: none; }
  .rail .h { font-family: var(--fm); font-size: 12.5px; font-weight: 600; }
  .rail .r-meta { font-family: var(--fm); font-size: 10.5px; color: var(--soft); }
  .rail .reach { font-family: var(--fm); font-size: 13px; font-weight: 600; color: var(--cobalt); white-space: nowrap; }

  .watch { padding: 18px 26px; border-bottom: 1px solid var(--hair); display: flex; gap: 14px; align-items: flex-start; }
  .watch:last-child { border-bottom: none; }
  .w-ind { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
  .w-ind.hi { background: var(--coral); box-shadow: 0 0 0 4px rgba(255,74,31,0.14); }
  .w-ind.med { background: var(--amber); box-shadow: 0 0 0 4px rgba(176,120,22,0.14); }
  .watch h4 { font-size: 13px; font-weight: 600; }
  .watch p { margin-top: 4px; font-size: 12px; line-height: 1.55; color: var(--soft); }

  .foot-cta { background: var(--ink); color: var(--paper); border-radius: 20px; padding: 44px; text-align: center; margin: 8px 0 48px; }
  .foot-cta h2 { font-family: var(--fs); font-style: italic; font-weight: 400; font-size: clamp(24px, 3vw, 34px); letter-spacing: -0.01em; }
  .foot-cta h2 em { color: var(--coral); font-style: italic; }
  .foot-cta p { margin: 14px auto 0; max-width: 560px; color: rgba(244,239,230,0.75); font-size: 14px; line-height: 1.65; }
  .btns { margin-top: 26px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; font-family: var(--fm); font-size: 11.5px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 13px 26px; border-radius: 999px; transition: transform 0.2s, box-shadow 0.2s; border: 1px solid transparent; }
  .btn-coral { background: var(--coral); color: var(--paper); }
  .btn-coral:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(255,74,31,0.4); }
  .btn-paper { background: transparent; color: var(--paper); border-color: rgba(244,239,230,0.4); }
  .btn-paper:hover { border-color: var(--paper); }
  .colophon { text-align: center; padding-bottom: 40px; font-family: var(--fm); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }

  .reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.in { opacity: 1; transform: none; }

  @media (max-width: 1100px) {
    .kpis { grid-template-columns: repeat(2, 1fr); }
    .two-col { grid-template-columns: 1fr; }
  }
  @media (max-width: 760px) {
    .opp { grid-template-columns: 1fr; }
    .opp .est { text-align: left; }
    th:nth-child(2), td:nth-child(2) { display: none; }
  }
</style>
</head>
<body>

<div class="ribbon">Demo · Illustrative data · <b>✦</b> Founder Control by Crowd Control Digital</div>

<div class="topbar">
  <div class="topbar-inner">
    <a class="wordmark" href="/founder-control"><span class="star">✦</span><span class="name">FOUNDER CONTROL</span></a>
    <div class="topbar-right">
      <span class="stamp">Updated Jun 11, 2026 · 06:00 PT</span>
      <a href="/founder-control">About the desk</a>
    </div>
  </div>
</div>

<div class="wrap">

  <div class="head">
    <div>
      <div class="eyebrow">Attention P&amp;L</div>
      <h1>Maya Reyes <span class="co">/ Tidewater</span> <span class="qtr">· Q2 2026</span></h1>
    </div>
    <div class="period">
      <span><span class="dot"></span>Desk live</span>
      <span>Onboarded Jan 2026</span>
      <span>Seat 3 of 8</span>
    </div>
  </div>

  <div class="kpis reveal">
    <div class="kpi">
      <div class="l">Attention Index</div>
      <div class="v num">74<small>/100</small></div>
      <div class="d num up">+24 QoQ · baseline 27</div>
    </div>
    <div class="kpi">
      <div class="l">Qualified Inbound</div>
      <div class="v num">23<small>/mo</small></div>
      <div class="d num up">4x pre-desk avg (6/mo)</div>
    </div>
    <div class="kpi">
      <div class="l">Pipeline Attributed</div>
      <div class="v num">$4.1M</div>
      <div class="d num mut">QTD · reply + DM sourced</div>
    </div>
    <div class="kpi">
      <div class="l">Share of Voice</div>
      <div class="v num">31%</div>
      <div class="d num blue">#2 of 6 tracked · was #5 at 9%</div>
    </div>
    <div class="kpi">
      <div class="l">Owned Audience</div>
      <div class="v num">218k</div>
      <div class="d num up">+41k QoQ · incl. newsletter</div>
    </div>
  </div>

  <div class="panel reveal">
    <div class="panel-head">
      <h2><span class="code">FC-R1</span>Attention Index · Managed vs Pre-Desk Baseline</h2>
      <div class="legend">
        <span class="lg"><span class="sw pre"></span>Pre-desk</span>
        <span class="lg"><span class="sw act"></span>Managed</span>
        <span class="lg"><span class="sw base"></span>Baseline projection</span>
        <span class="lg"><span class="sw alpha"></span>Attention alpha</span>
      </div>
    </div>
    <div class="panel-body">
      <svg id="idxchart" viewBox="0 0 1060 330" xmlns="http://www.w3.org/2000/svg"></svg>
      <p class="chart-note">Attention Index is a composite of reach, engaged view-through, search volume, and qualified inbound, indexed 0-100 against the tracked comp set. Baseline projects the pre-desk trajectory. Current alpha: <b>+47 points</b> over baseline, the gap between being posted and being programmed.</p>
    </div>
  </div>

  <div class="panel reveal">
    <div class="panel-head">
      <h2><span class="code">FC-C1</span>Content Performance · Top Pieces</h2>
      <span class="sub">Q2 2026 · 38 pieces shipped</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>Piece</th>
          <th>Format / Platform</th>
          <th class="r">Views</th>
          <th class="r">Qualified Replies</th>
          <th>Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="piece">"Why we killed our best feature"</div><div class="meta">Studio cut · network amplified</div></td>
          <td>Talking-head + caption cut · LI + Reels</td>
          <td class="r num">2.4M</td>
          <td class="r num">41</td>
          <td><span class="outcome">3 enterprise intros · $1.8M</span></td>
        </tr>
        <tr>
          <td><div class="piece">"Desk setup, but honest"</div><div class="meta">Brainrot edit · trend format</div></td>
          <td>Meme edit · TikTok</td>
          <td class="r num">1.6M</td>
          <td class="r num">6</td>
          <td><span class="outcome">Memed by 3 network pages (ours)</span></td>
        </tr>
        <tr>
          <td><div class="piece">"The fee transparency rant"</div><div class="meta">Cold-open POV format</div></td>
          <td>Duet stitch · TikTok + X</td>
          <td class="r num">1.1M</td>
          <td class="r num">17</td>
          <td><span class="outcome">Tier-1 fintech pod invite</span></td>
        </tr>
        <tr>
          <td><div class="piece">"Board week, unfiltered"</div><div class="meta">Vlog cut · access narrative</div></td>
          <td>Vlog · Shorts + LI</td>
          <td class="r num">890k</td>
          <td class="r num">12</td>
          <td><span class="outcome">LP meeting booked</span></td>
        </tr>
        <tr>
          <td><div class="piece">"Hiring manifesto"</div><div class="meta">Talent funnel lane</div></td>
          <td>Carousel + thread · LI + X</td>
          <td class="r num">480k</td>
          <td class="r num">9</td>
          <td><span class="outcome">212 applicants · 2 senior hires</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="two-col">
    <div class="panel reveal">
      <div class="panel-head">
        <h2><span class="code">FC-O1</span>Opportunity Queue</h2>
        <span class="sub">Ranked · top 5 of 11</span>
      </div>
      <div class="opp">
        <div class="rank">01</div>
        <div>
          <div class="tagrow"><span class="sig">Trend Format</span></div>
          <h3>"Cold-open POV" format up 180% in the business niche</h3>
          <p>SOUND CONTROL flagged the format inflecting across entertainment first; business creators are 3 weeks behind. Produce four cuts this sprint while the window is open.</p>
        </div>
        <div class="est"><b>+6 pts</b>est. index lift<small>this sprint</small></div>
      </div>
      <div class="opp">
        <div class="rank">02</div>
        <div>
          <div class="tagrow"><span class="sig">Access Target</span></div>
          <h3>Two tier-1 business pods, fit scores 94 and 91, warm paths mapped</h3>
          <p>Both shows over-index on enterprise buyers and LPs. Packets prepped; the Operators Pod appearance already returned $2.3M in qualified leads as proof of pattern.</p>
        </div>
        <div class="est"><b>$1M+</b>pipeline halo<small>per appearance</small></div>
      </div>
      <div class="opp">
        <div class="rank">03</div>
        <div>
          <div class="tagrow"><span class="sig">Newsjack Window</span></div>
          <h3>Interchange-fee ruling expected this month: POV pre-drafted</h3>
          <p>Maya owns the fee-transparency lane. Statement cut and thread are staged to ship within two hours of the ruling, ahead of every comms-approved competitor.</p>
        </div>
        <div class="est"><b>SOV spike</b>category-wide<small>48h window</small></div>
      </div>
      <div class="opp">
        <div class="rank">04</div>
        <div>
          <div class="tagrow"><span class="sig">Owned Channel Gap</span></div>
          <h3>Comp set averages 28k newsletter subs. Maya has zero.</h3>
          <p>Launch a monthly newsletter on payments infrastructure; seed through the network's 96k-sub rail and convert episodic reach into an owned list.</p>
        </div>
        <div class="est"><b>+9k</b>owned subs<small>per quarter</small></div>
      </div>
      <div class="opp">
        <div class="rank">05</div>
        <div>
          <div class="tagrow"><span class="sig">Talent Narrative</span></div>
          <h3>Eng hiring-war lane is unclaimed across fintech founders</h3>
          <p>Three-piece series on how Tidewater hires senior engineers. The hiring manifesto already proved the funnel: this scales it into a recurring lane.</p>
        </div>
        <div class="est"><b>80+</b>senior applicants<small>per series</small></div>
      </div>
    </div>

    <div>
      <div class="panel reveal">
        <div class="panel-head">
          <h2><span class="code">FC-N1</span>Distribution Network</h2>
          <span class="sub">Owned rails · 38 amplifications QTD</span>
        </div>
        <div class="rail"><div><div class="h">fintech.memes.daily</div><div class="r-meta">IG + TikTok · meme page</div></div><div class="reach">412k</div></div>
        <div class="rail"><div><div class="h">founderclips.tv</div><div class="r-meta">TikTok + Shorts · clip channel</div></div><div class="reach">380k</div></div>
        <div class="rail"><div><div class="h">b2b.brainrot</div><div class="r-meta">TikTok · format lab</div></div><div class="reach">240k</div></div>
        <div class="rail"><div><div class="h">money.moves.clips</div><div class="r-meta">IG Reels · finance clips</div></div><div class="reach">188k</div></div>
        <div class="rail"><div><div class="h">The Ops Room</div><div class="r-meta">Newsletter · swap rail</div></div><div class="reach">96k</div></div>
        <div style="padding:16px 26px; font-family:var(--fm); font-size:11px; color:var(--soft);">Network lift: <span style="color:var(--green); font-weight:600;">2.6x</span> avg first-hour velocity on amplified pieces</div>
      </div>

      <div class="panel reveal">
        <div class="panel-head">
          <h2><span class="code">FC-P1</span>Pipeline Attribution</h2>
          <span class="sub">QTD</span>
        </div>
        <table>
          <tbody>
            <tr>
              <td><div class="piece" style="font-size:13px;">Enterprise partnership</div><div class="meta">Sourced: reply on "killed our best feature"</div></td>
              <td class="r num" style="white-space:nowrap;">$1.8M<div class="meta">in contract</div></td>
            </tr>
            <tr>
              <td><div class="piece" style="font-size:13px;">3 enterprise leads</div><div class="meta">Sourced: Operators Pod appearance</div></td>
              <td class="r num" style="white-space:nowrap;">$2.3M<div class="meta">qualified</div></td>
            </tr>
            <tr>
              <td><div class="piece" style="font-size:13px;">2 fund partner intros</div><div class="meta">Sourced: inbound DMs · Series B context</div></td>
              <td class="r num" style="white-space:nowrap;">&mdash;<div class="meta">meetings held</div></td>
            </tr>
            <tr>
              <td><div class="piece" style="font-size:13px;">2 senior AE hires</div><div class="meta">Sourced: hiring manifesto funnel</div></td>
              <td class="r num" style="white-space:nowrap;">&mdash;<div class="meta">closed</div></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="panel reveal">
        <div class="panel-head">
          <h2><span class="code">FC-W1</span>Watchouts</h2>
          <span class="sub">3 open</span>
        </div>
        <div class="watch">
          <div class="w-ind hi"></div>
          <div>
            <h4>Rival founder velocity 2.1x on TikTok</h4>
            <p>Closest tracked competitor doubled short-form output in 30 days. Format response queued in opportunity 01; do not cede the lane.</p>
          </div>
        </div>
        <div class="watch">
          <div class="w-ind med"></div>
          <div>
            <h4>Compliance queue: 2 posts with counsel</h4>
            <p>Fintech claims review adding 3-4 days of latency on money-adjacent POV pieces. Pre-clearance template proposed to legal.</p>
          </div>
        </div>
        <div class="watch">
          <div class="w-ind med"></div>
          <div>
            <h4>X audience decaying -8%</h4>
            <p>Deprioritized platform per strategy; decay expected and accepted. Revisit only if newsjack windows underperform there.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="foot-cta reveal">
    <h2>This is what a founder looks like <em>under management.</em></h2>
    <p>The demo is illustrative. Your audit replaces it with your name, your comp set, and the alpha sitting unclaimed in your category.</p>
    <div class="btns">
      <a class="btn btn-coral" href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit">Request your audit</a>
      <a class="btn btn-paper" href="/founder-control/audit">See a sample audit</a>
    </div>
  </div>

  <div class="colophon">✦ Founder Control · A Crowd Control Digital Product · Demo data is illustrative</div>
</div>

<script>
(function () {
  var labels = ["Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"];
  var actual = [31,30,32,29,30,28,34,41,50,58,67,74];
  var deskStart = 5; // Dec 25 = last pre-desk point
  var baseline = [28,29,28,29,27,28,27]; // indices 5..11

  var svg = document.getElementById("idxchart");
  var W = 1060, H = 330, padL = 56, padR = 26, padT = 28, padB = 44;
  var yMin = 0, yMax = 100;
  function x(i) { return padL + (i / (actual.length - 1)) * (W - padL - padR); }
  function y(v) { return padT + (1 - (v - yMin) / (yMax - yMin)) * (H - padT - padB); }
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs) { var n = document.createElementNS(NS, tag); for (var k in attrs) n.setAttribute(k, attrs[k]); return n; }

  var defs = el("defs", {});
  defs.innerHTML = '<linearGradient id="coralfade" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#FF4A1F" stop-opacity="0.16"/>' +
    '<stop offset="100%" stop-color="#FF4A1F" stop-opacity="0"/></linearGradient>';
  svg.appendChild(defs);

  [20, 40, 60, 80, 100].forEach(function (v) {
    svg.appendChild(el("line", { x1: padL, x2: W - padR, y1: y(v), y2: y(v), stroke: "rgba(22,20,15,0.07)", "stroke-width": 1 }));
    var t = el("text", { x: padL - 12, y: y(v) + 4, "text-anchor": "end", fill: "#8B8578", "font-size": 10.5, "font-family": "IBM Plex Mono, monospace" });
    t.textContent = v;
    svg.appendChild(t);
  });

  labels.forEach(function (lab, i) {
    if (i % 2 === 0 || i === labels.length - 1) {
      var t = el("text", { x: x(i), y: H - 14, "text-anchor": "middle", fill: "#8B8578", "font-size": 10, "font-family": "IBM Plex Mono, monospace" });
      t.textContent = lab;
      svg.appendChild(t);
    }
  });

  var alphaPath = "M " + x(deskStart) + " " + y(actual[deskStart]);
  for (var i = deskStart + 1; i < actual.length; i++) alphaPath += " L " + x(i) + " " + y(actual[i]);
  for (var j = actual.length - 1; j >= deskStart; j--) alphaPath += " L " + x(j) + " " + y(baseline[j - deskStart]);
  alphaPath += " Z";
  svg.appendChild(el("path", { d: alphaPath, fill: "rgba(255,74,31,0.10)", stroke: "none" }));

  var areaPath = "M " + x(deskStart) + " " + y(actual[deskStart]);
  for (var i2 = deskStart + 1; i2 < actual.length; i2++) areaPath += " L " + x(i2) + " " + y(actual[i2]);
  areaPath += " L " + x(actual.length - 1) + " " + (H - padB) + " L " + x(deskStart) + " " + (H - padB) + " Z";
  svg.appendChild(el("path", { d: areaPath, fill: "url(#coralfade)" }));

  var basePath = "M " + x(deskStart) + " " + y(baseline[0]);
  for (var b = 1; b < baseline.length; b++) basePath += " L " + x(deskStart + b) + " " + y(baseline[b]);
  svg.appendChild(el("path", { d: basePath, fill: "none", stroke: "#A39C8C", "stroke-width": 1.6, "stroke-dasharray": "5 5" }));

  var prePath = "M " + x(0) + " " + y(actual[0]);
  for (var p = 1; p <= deskStart; p++) prePath += " L " + x(p) + " " + y(actual[p]);
  svg.appendChild(el("path", { d: prePath, fill: "none", stroke: "#A39C8C", "stroke-width": 2 }));

  var actPath = "M " + x(deskStart) + " " + y(actual[deskStart]);
  for (var a = deskStart + 1; a < actual.length; a++) actPath += " L " + x(a) + " " + y(actual[a]);
  var actLine = el("path", { d: actPath, fill: "none", stroke: "#FF4A1F", "stroke-width": 2.8, "stroke-linecap": "round" });
  svg.appendChild(actLine);

  svg.appendChild(el("line", { x1: x(deskStart + 1), x2: x(deskStart + 1), y1: padT, y2: H - padB, stroke: "rgba(22,20,15,0.25)", "stroke-width": 1, "stroke-dasharray": "3 4" }));
  var mk = el("text", { x: x(deskStart + 1) + 8, y: padT + 12, fill: "#16140F", "font-size": 10, "font-family": "IBM Plex Mono, monospace", "letter-spacing": "1.5" });
  mk.textContent = "DESK LIVE · JAN 2026";
  svg.appendChild(mk);

  var lastX = x(actual.length - 1), lastY = y(actual[actual.length - 1]);
  svg.appendChild(el("circle", { cx: lastX, cy: lastY, r: 4.5, fill: "#FF4A1F" }));
  var endLabel = el("text", { x: lastX - 10, y: lastY - 12, "text-anchor": "end", fill: "#16140F", "font-size": 13, "font-weight": "600", "font-family": "IBM Plex Mono, monospace" });
  endLabel.textContent = "74";
  svg.appendChild(endLabel);

  var bX = x(actual.length - 1), bY = y(baseline[baseline.length - 1]);
  var bLabel = el("text", { x: bX - 10, y: bY + 18, "text-anchor": "end", fill: "#8B8578", "font-size": 10.5, "font-family": "IBM Plex Mono, monospace" });
  bLabel.textContent = "baseline 27";
  svg.appendChild(bLabel);

  var len = actLine.getTotalLength();
  actLine.style.strokeDasharray = len;
  actLine.style.strokeDashoffset = len;
  requestAnimationFrame(function () {
    actLine.style.transition = "stroke-dashoffset 1.5s ease";
    actLine.style.strokeDashoffset = "0";
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(function (n) { io.observe(n); });
})();
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
