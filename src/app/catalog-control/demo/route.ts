export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>CATALOG CONTROL · Halcyon Catalog Partners · Q2 2026</title>
<meta name="description" content="CATALOG CONTROL portfolio dashboard demo. Illustrative data." />
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
    --green: #4FB286;
    --amber: #D9A441;
    --red: #D26A5C;
    --font-display: "Space Grotesk", sans-serif;
    --font-mono: "IBM Plex Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-display); -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--gold); color: #0B0B0C; }
  .mono { font-family: var(--font-mono); }
  .num { font-family: var(--font-mono); font-variant-numeric: tabular-nums; }
  .wrap { max-width: 1280px; margin: 0 auto; padding: 0 28px; }

  .demo-ribbon {
    background: var(--gold); color: #0B0B0C; text-align: center;
    font-family: var(--font-mono); font-size: 10px; font-weight: 600;
    letter-spacing: 0.3em; text-transform: uppercase; padding: 7px 12px;
  }

  /* Top bar */
  .topbar { border-bottom: 1px solid var(--line); background: rgba(11,11,12,0.9); }
  .topbar-inner {
    max-width: 1280px; margin: 0 auto; padding: 0 28px; height: 60px;
    display: flex; align-items: center; justify-content: space-between; gap: 20px;
  }
  .wordmark { display: flex; align-items: baseline; gap: 12px; text-decoration: none; }
  .wordmark .name { font-family: var(--font-mono); font-weight: 600; font-size: 13px; letter-spacing: 0.22em; color: var(--text); }
  .wordmark .name b { color: var(--gold); font-weight: 600; }
  .topbar-right { display: flex; align-items: center; gap: 22px; }
  .topbar-right .stamp { font-family: var(--font-mono); font-size: 11px; color: var(--dim); letter-spacing: 0.06em; }
  .topbar-right a { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); text-decoration: none; border: 1px solid var(--line-strong); padding: 8px 14px; border-radius: 2px; }
  .topbar-right a:hover { border-color: var(--gold); }

  /* Portfolio header */
  .port-head { padding: 40px 0 32px; display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
  .port-head .eyebrow { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--dim); margin-bottom: 12px; }
  .port-head h1 { font-size: clamp(26px, 3vw, 38px); font-weight: 600; letter-spacing: -0.015em; }
  .port-head h1 span { color: var(--dim); font-weight: 400; }
  .period { font-family: var(--font-mono); font-size: 12px; color: var(--muted); display: flex; gap: 18px; align-items: center; }
  .period .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); display: inline-block; margin-right: 8px; animation: pulse 2.4s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }

  /* KPI row */
  .kpis { display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--line); border-radius: 3px; overflow: hidden; margin-bottom: 28px; }
  .kpi { background: var(--panel); padding: 22px 24px; }
  .kpi + .kpi { border-left: 1px solid var(--line); }
  .kpi .l { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--dim); }
  .kpi .v { margin-top: 12px; font-family: var(--font-mono); font-size: 24px; font-weight: 600; letter-spacing: -0.01em; }
  .kpi .d { margin-top: 8px; font-family: var(--font-mono); font-size: 11px; }
  .up { color: var(--green); } .down { color: var(--red); } .gold-t { color: var(--gold); } .mut { color: var(--muted); }

  /* Panels */
  .panel { border: 1px solid var(--line); border-radius: 3px; background: var(--panel); margin-bottom: 28px; overflow: hidden; }
  .panel-head { padding: 20px 26px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  .panel-head h2 { font-size: 16px; font-weight: 600; letter-spacing: 0.01em; display: flex; align-items: center; gap: 12px; }
  .panel-head h2 .code { font-family: var(--font-mono); font-size: 10px; color: var(--gold); letter-spacing: 0.14em; }
  .panel-head .sub { font-family: var(--font-mono); font-size: 11px; color: var(--dim); }
  .panel-body { padding: 26px; }

  /* Chart */
  .chart-legend { display: flex; gap: 24px; flex-wrap: wrap; }
  .lg { display: flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.06em; color: var(--muted); }
  .lg .sw { width: 18px; height: 2px; }
  .lg .sw.actual { background: var(--gold); }
  .lg .sw.pre { background: #6E6B63; }
  .lg .sw.base { background: var(--dim); border-top: 2px dashed var(--dim); height: 0; }
  .lg .sw.alpha { width: 12px; height: 12px; background: rgba(79,178,134,0.18); border: 1px solid rgba(79,178,134,0.5); }
  #revchart { width: 100%; height: auto; display: block; }
  .chart-note { margin-top: 14px; font-size: 12.5px; color: var(--dim); line-height: 1.55; }
  .chart-note b { color: var(--green); font-weight: 500; font-family: var(--font-mono); }

  /* Table */
  table { width: 100%; border-collapse: collapse; }
  th { font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--dim); text-align: left; padding: 14px 26px; border-bottom: 1px solid var(--line); font-weight: 500; white-space: nowrap; }
  td { padding: 16px 26px; border-bottom: 1px solid var(--line); font-size: 13.5px; vertical-align: middle; }
  tr:last-child td { border-bottom: none; }
  tbody tr { transition: background 0.15s; }
  tbody tr:hover { background: var(--panel2); }
  td.r, th.r { text-align: right; }
  .asset-name { font-weight: 600; font-size: 14px; }
  .asset-meta { margin-top: 4px; font-family: var(--font-mono); font-size: 10.5px; color: var(--dim); letter-spacing: 0.04em; }
  .chip { display: inline-flex; align-items: center; gap: 7px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; padding: 5px 10px; border-radius: 2px; white-space: nowrap; }
  .chip::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
  .chip.outperf { color: var(--green); background: rgba(79,178,134,0.09); }
  .chip.ontrack { color: var(--gold); background: rgba(200,169,110,0.09); }
  .chip.watch { color: var(--amber); background: rgba(217,164,65,0.09); }
  .chip.risk { color: var(--red); background: rgba(210,106,92,0.09); }

  /* Two-col zone */
  .two-col { display: grid; grid-template-columns: 7fr 5fr; gap: 28px; align-items: start; }

  /* Opportunity queue */
  .opp { padding: 22px 26px; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 44px 1fr auto; gap: 20px; align-items: start; transition: background 0.15s; }
  .opp:last-child { border-bottom: none; }
  .opp:hover { background: var(--panel2); }
  .opp .rank { font-family: var(--font-mono); font-size: 18px; font-weight: 600; color: var(--dim); padding-top: 2px; }
  .opp .tagrow { display: flex; gap: 10px; align-items: center; margin-bottom: 8px; flex-wrap: wrap; }
  .opp .sig { font-family: var(--font-mono); font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold); border: 1px solid rgba(200,169,110,0.35); padding: 3px 8px; border-radius: 2px; }
  .opp .asset-ref { font-family: var(--font-mono); font-size: 10px; color: var(--dim); }
  .opp h3 { font-size: 14.5px; font-weight: 600; line-height: 1.4; }
  .opp p { margin-top: 6px; font-size: 12.5px; line-height: 1.6; color: var(--muted); max-width: 560px; }
  .opp .numbers { text-align: right; white-space: nowrap; }
  .opp .uplift { font-family: var(--font-mono); font-size: 17px; font-weight: 600; color: var(--green); }
  .opp .uplift small { font-size: 10px; color: var(--dim); display: block; margin-top: 3px; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 400; }
  .opp .conf { margin-top: 10px; font-family: var(--font-mono); font-size: 10px; color: var(--muted); letter-spacing: 0.06em; }

  /* Risk list */
  .riskitem { padding: 20px 26px; border-bottom: 1px solid var(--line); display: flex; gap: 16px; align-items: flex-start; }
  .riskitem:last-child { border-bottom: none; }
  .risk-ind { width: 8px; height: 8px; border-radius: 50%; margin-top: 6px; flex-shrink: 0; }
  .risk-ind.hi { background: var(--red); box-shadow: 0 0 0 4px rgba(210,106,92,0.12); }
  .risk-ind.med { background: var(--amber); box-shadow: 0 0 0 4px rgba(217,164,65,0.12); }
  .riskitem h4 { font-size: 13.5px; font-weight: 600; }
  .riskitem p { margin-top: 5px; font-size: 12px; line-height: 1.6; color: var(--muted); }
  .riskitem .stat-line { margin-top: 8px; font-family: var(--font-mono); font-size: 10.5px; color: var(--dim); letter-spacing: 0.04em; }
  .riskitem .stat-line b { color: var(--red); font-weight: 500; }
  .riskitem .stat-line b.amber { color: var(--amber); }

  /* Campaigns */
  .roi-pill { font-family: var(--font-mono); font-weight: 600; color: var(--green); }
  .cstat { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
  .cstat.live { color: var(--green); } .cstat.scaling { color: var(--gold); } .cstat.wrap { color: var(--dim); }

  /* Footer */
  .demo-foot { border: 1px solid var(--line-strong); border-radius: 3px; background: linear-gradient(180deg, rgba(200,169,110,0.07), var(--panel) 60%); padding: 40px; text-align: center; margin: 12px 0 48px; }
  .demo-foot h2 { font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
  .demo-foot p { margin: 12px auto 0; max-width: 540px; color: var(--muted); font-size: 14px; line-height: 1.65; }
  .demo-foot .btns { margin-top: 26px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; font-family: var(--font-mono); font-size: 11.5px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; text-decoration: none; padding: 12px 22px; border-radius: 2px; transition: all 0.2s; border: 1px solid transparent; }
  .btn-gold { background: var(--gold); color: #0B0B0C; }
  .btn-gold:hover { background: #D9BC85; }
  .btn-ghost { border-color: var(--line-strong); color: var(--text); }
  .btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
  .colophon { text-align: center; padding-bottom: 40px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--dim); }

  .reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .reveal.in { opacity: 1; transform: none; }

  @media (max-width: 1080px) {
    .kpis { grid-template-columns: repeat(2, 1fr); }
    .kpi + .kpi { border-left: none; }
    .kpi { border-bottom: 1px solid var(--line); }
    .kpis .kpi:nth-child(even) { border-left: 1px solid var(--line); }
    .two-col { grid-template-columns: 1fr; }
  }
  @media (max-width: 760px) {
    .opp { grid-template-columns: 1fr; }
    .opp .numbers { text-align: left; }
    th:nth-child(3), td:nth-child(3) { display: none; }
  }
</style>
</head>
<body>

<div class="demo-ribbon">Demo Portfolio · Illustrative Data · CATALOG CONTROL by Crowd Control Digital</div>

<div class="topbar">
  <div class="topbar-inner">
    <a class="wordmark" href="/catalog-control">
      <span class="name">CATALOG<b>CONTROL</b></span>
    </a>
    <div class="topbar-right">
      <span class="stamp">Updated Jun 11, 2026 · 06:00 PT</span>
      <a href="/catalog-control">About the desk</a>
    </div>
  </div>
</div>

<div class="wrap">

  <div class="port-head">
    <div>
      <div class="eyebrow">Portfolio</div>
      <h1>Halcyon Catalog Partners <span>/ Q2 2026</span></h1>
    </div>
    <div class="period">
      <span><span class="dot"></span>Monitoring 771 masters</span>
      <span>Onboarded Oct 2025</span>
    </div>
  </div>

  <!-- KPIs -->
  <div class="kpis reveal">
    <div class="kpi">
      <div class="l">Est. Portfolio Value</div>
      <div class="v num">$153.7M</div>
      <div class="d num up">+4.8% QoQ · 16.6x blended</div>
    </div>
    <div class="kpi">
      <div class="l">T12M Royalty Revenue</div>
      <div class="v num">$9.26M</div>
      <div class="d num up">+4.0% YoY · first 9 mo managed</div>
    </div>
    <div class="kpi">
      <div class="l">Alpha vs Passive Baseline</div>
      <div class="v num up">+$862k</div>
      <div class="d num mut">captured since onboarding</div>
    </div>
    <div class="kpi">
      <div class="l">Open Opportunities</div>
      <div class="v num">14</div>
      <div class="d num gold-t">$1.05M est. annual value</div>
    </div>
    <div class="kpi">
      <div class="l">Blended Campaign ROI</div>
      <div class="v num">3.0x</div>
      <div class="d num mut">$85k spend · $255k attributed</div>
    </div>
  </div>

  <!-- Revenue chart -->
  <div class="panel reveal">
    <div class="panel-head">
      <h2><span class="code">CC-R1</span>Monthly Royalty Revenue · Managed vs Passive Baseline</h2>
      <div class="chart-legend">
        <span class="lg"><span class="sw pre"></span>Pre-engagement</span>
        <span class="lg"><span class="sw actual"></span>Managed actual</span>
        <span class="lg"><span class="sw base"></span>Passive baseline</span>
        <span class="lg"><span class="sw alpha"></span>Managed alpha</span>
      </div>
    </div>
    <div class="panel-body">
      <svg id="revchart" viewBox="0 0 1040 340" xmlns="http://www.w3.org/2000/svg"></svg>
      <p class="chart-note">Passive baseline models the portfolio's pre-engagement decay trajectory, set at onboarding from 14 months of trailing statements. Gap between managed actual and baseline is <b>+$862k</b> over 9 months, an annualized run rate of <b>+$1.15M</b>. June actual is running <b>+23.7%</b> above baseline.</p>
    </div>
  </div>

  <!-- Asset table -->
  <div class="panel reveal">
    <div class="panel-head">
      <h2><span class="code">CC-A1</span>Assets Under Management</h2>
      <span class="sub">7 holdings · 771 masters</span>
    </div>
    <table>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Era / Lane</th>
          <th class="r">Masters</th>
          <th class="r">T12M Revenue</th>
          <th class="r">Pacing 90d</th>
          <th class="r">vs Cohort Baseline</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="asset-name">Midnight Interstate</div><div class="asset-meta">Sync halo capture in flight</div></td>
          <td>1974&ndash;82 · Heartland rock</td>
          <td class="r num">142</td>
          <td class="r num">$2.34M</td>
          <td class="r num up">+9.2%</td>
          <td class="r num up">+11.4 pts</td>
          <td><span class="chip outperf">Outperforming</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">Delta Crown Recordings</div><div class="asset-meta">Label bundle · sample clearance inbound</div></td>
          <td>1968&ndash;74 · Southern soul</td>
          <td class="r num">311</td>
          <td class="r num">$1.88M</td>
          <td class="r num up">+6.4%</td>
          <td class="r num up">+8.1 pts</td>
          <td><span class="chip ontrack">On Track</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">Velour</div><div class="asset-meta">LatAm creator program scaling</div></td>
          <td>1994&ndash;99 · R&amp;B</td>
          <td class="r num">68</td>
          <td class="r num">$1.65M</td>
          <td class="r num up">+14.6%</td>
          <td class="r num up">+17.2 pts</td>
          <td><span class="chip outperf">Outperforming</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">The Glass Parade</div><div class="asset-meta">25th anniversary window · Mar 2027</div></td>
          <td>2002&ndash;08 · Pop-punk</td>
          <td class="r num">54</td>
          <td class="r num">$1.18M</td>
          <td class="r num up">+3.1%</td>
          <td class="r num up">+5.0 pts</td>
          <td><span class="chip ontrack">On Track</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">Mirror Motel</div><div class="asset-meta">Editorial playlist gap identified</div></td>
          <td>2015&ndash;19 · Alt-pop</td>
          <td class="r num">47</td>
          <td class="r num">$860k</td>
          <td class="r num up">+2.2%</td>
          <td class="r num up">+3.8 pts</td>
          <td><span class="chip ontrack">On Track</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">Saint Aurelia</div><div class="asset-meta">Decay review scheduled · catalysts queued</div></td>
          <td>2010&ndash;14 · Indie electronic</td>
          <td class="r num">61</td>
          <td class="r num">$740k</td>
          <td class="r num down">-1.8%</td>
          <td class="r num down">-2.9 pts</td>
          <td><span class="chip watch">Watch</span></td>
        </tr>
        <tr>
          <td><div class="asset-name">Northbound</div><div class="asset-meta">Playlist removals · AU/NZ spike play queued</div></td>
          <td>1987&ndash;93 · Country</td>
          <td class="r num">88</td>
          <td class="r num">$610k</td>
          <td class="r num down">-4.9%</td>
          <td class="r num down">-6.2 pts</td>
          <td><span class="chip risk">At Risk</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="two-col">
    <!-- Opportunity queue -->
    <div class="panel reveal">
      <div class="panel-head">
        <h2><span class="code">CC-O1</span>Opportunity Queue</h2>
        <span class="sub">Ranked by est. annual uplift · top 6 of 14</span>
      </div>
      <div class="opp">
        <div class="rank num">01</div>
        <div>
          <div class="tagrow"><span class="sig">Sync Brief Match</span><span class="asset-ref">Midnight Interstate</span></div>
          <h3>A24 period drama scoring brief fits "Westbound Lights" profile</h3>
          <p>Supervisor brief seeking 1970s Americana, melancholic, non-obvious. Deep cut matches tempo, era, and tone. Packet built; routing through the catalog's licensing rep before the brief closes.</p>
          <div class="conf">Confidence: High · Effort: Low · Owner: Sync Readiness</div>
        </div>
        <div class="numbers"><div class="uplift num">$310k<small>est. annual uplift</small></div></div>
      </div>
      <div class="opp">
        <div class="rank num">02</div>
        <div>
          <div class="tagrow"><span class="sig">Anniversary Window</span><span class="asset-ref">The Glass Parade</span></div>
          <h3>Debut LP turns 25 in March 2027: vinyl box + festival tie-in</h3>
          <p>Clean anniversary year on the catalog's biggest record. Emo-nostalgia festival circuit alignment, variant vinyl program, and a creator nostalgia push. 9-month runway starts now.</p>
          <div class="conf">Confidence: Medium · Effort: High · Owner: Reactivation</div>
        </div>
        <div class="numbers"><div class="uplift num">$240k<small>est. annual uplift</small></div></div>
      </div>
      <div class="opp">
        <div class="rank num">03</div>
        <div>
          <div class="tagrow"><span class="sig">Creator Velocity</span><span class="asset-ref">Velour</span></div>
          <h3>"Slow Honey" creates up 212% in 30 days, concentrated Brazil + Mexico</h3>
          <p>Organic creator adoption with zero spend behind it. Scale the existing LatAm seeding program onto this sound and pitch DSP editorial in both markets while velocity holds.</p>
          <div class="conf">Confidence: High · Effort: Medium · Owner: Reactivation</div>
        </div>
        <div class="numbers"><div class="uplift num">$185k<small>est. annual uplift</small></div></div>
      </div>
      <div class="opp">
        <div class="rank num">04</div>
        <div>
          <div class="tagrow"><span class="sig">Sample Clearance</span><span class="asset-ref">Delta Crown Recordings</span></div>
          <h3>Major-label hip-hop act requesting horn loop from "Crown Street Strut"</h3>
          <p>Inbound clearance request on a 1971 master. Negotiate points over flat fee, and prepare a release-day content package to capture the discovery halo on the original.</p>
          <div class="conf">Confidence: High · Effort: Low · Owner: Strategist</div>
        </div>
        <div class="numbers"><div class="uplift num">$150k<small>est. annual uplift</small></div></div>
      </div>
      <div class="opp">
        <div class="rank num">05</div>
        <div>
          <div class="tagrow"><span class="sig">Playlist Gap</span><span class="asset-ref">Mirror Motel</span></div>
          <h3>Absent from 4 high-fit editorial playlists despite audience overlap</h3>
          <p>Listener profile overlaps 60%+ with four major editorial playlists the catalog has never charted on. Momentum data from the Q2 uptick supports a coordinated DSP pitch.</p>
          <div class="conf">Confidence: Medium · Effort: Low · Owner: Strategist</div>
        </div>
        <div class="numbers"><div class="uplift num">$95k<small>est. annual uplift</small></div></div>
      </div>
      <div class="opp">
        <div class="rank num">06</div>
        <div>
          <div class="tagrow"><span class="sig">Territory Spike</span><span class="asset-ref">Northbound</span></div>
          <h3>Streams up 38% in AU/NZ off regional radio adds</h3>
          <p>Two networks added "Long Way Home" to recurrent rotation. Localized catalog push timed against the spike, plus tour-adjacent placement if the AU country festival window confirms.</p>
          <div class="conf">Confidence: Medium · Effort: Medium · Owner: Reactivation</div>
        </div>
        <div class="numbers"><div class="uplift num">$70k<small>est. annual uplift</small></div></div>
      </div>
    </div>

    <!-- Right column: campaigns + risk -->
    <div>
      <div class="panel reveal">
        <div class="panel-head">
          <h2><span class="code">CC-C1</span>Active Campaigns</h2>
          <span class="sub">Q2 2026</span>
        </div>
        <table>
          <thead>
            <tr><th>Campaign</th><th class="r">Spend</th><th class="r">Attributed Rev</th><th class="r">ROI</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="asset-name" style="font-size:13px;">LatAm Creator Program</div><div class="asset-meta">Velour · <span class="cstat scaling">Scaling</span></div></td>
              <td class="r num">$42k</td>
              <td class="r num">$118k</td>
              <td class="r num roi-pill">2.8x</td>
            </tr>
            <tr>
              <td><div class="asset-name" style="font-size:13px;">Sync Halo Capture</div><div class="asset-meta">Midnight Interstate · <span class="cstat live">Live</span></div></td>
              <td class="r num">$28k</td>
              <td class="r num">$96k</td>
              <td class="r num roi-pill">3.4x</td>
            </tr>
            <tr>
              <td><div class="asset-name" style="font-size:13px;">Anniversary Digital Repack</div><div class="asset-meta">Delta Crown · <span class="cstat wrap">Wrapped</span></div></td>
              <td class="r num">$15k</td>
              <td class="r num">$41k</td>
              <td class="r num roi-pill">2.7x</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="panel reveal">
        <div class="panel-head">
          <h2><span class="code">CC-X1</span>Risk &amp; Leakage</h2>
          <span class="sub">3 open</span>
        </div>
        <div class="riskitem">
          <div class="risk-ind hi"></div>
          <div>
            <h4>Decay acceleration: Saint Aurelia</h4>
            <p>Catalog streams decaying 2.3x faster than the indie-electronic cohort expectation. No negative catalyst identified; likely algorithmic playlist rotation loss.</p>
            <div class="stat-line">Impact: <b>-$4.2k/mo</b> · Catalyst review scheduled Jun 17</div>
          </div>
        </div>
        <div class="riskitem">
          <div class="risk-ind hi"></div>
          <div>
            <h4>Unlicensed usage: Northbound masters on YouTube</h4>
            <p>14 third-party uploads using full masters, 4.2M combined views, unclaimed. Claims filed; monetization redirect in progress.</p>
            <div class="stat-line">Recoverable: <b>~$18k/yr</b> · 9 of 14 claims processed</div>
          </div>
        </div>
        <div class="riskitem">
          <div class="risk-ind med"></div>
          <div>
            <h4>Editorial removal: Northbound off two country playlists</h4>
            <p>Dropped in the June editorial refresh. Re-pitch packaged with the AU/NZ momentum story for the Q3 cycle.</p>
            <div class="stat-line">Impact: <b class="amber">-$3.1k/mo</b> · Re-pitch submitted</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer CTA -->
  <div class="demo-foot reveal">
    <h2>This is what your catalog looks like under management.</h2>
    <p>The demo above is illustrative. Your portfolio review replaces it with your actual masters, your actual pacing, and the first three sprints we would run.</p>
    <div class="btns">
      <a class="btn btn-gold" href="mailto:geoff@crowdcontroldigital.com?subject=CATALOG%20CONTROL%20Portfolio%20Review">Request portfolio review</a>
      <a class="btn btn-ghost" href="/catalog-control">About the desk</a>
    </div>
  </div>

  <div class="colophon">CATALOG CONTROL · A Crowd Control Digital Product · Demo data is illustrative</div>
</div>

<script>
(function () {
  // ---- Data: monthly royalty revenue ($k), Jul 2024 - Jun 2026 ----
  const labels = ["Jul 24","Aug 24","Sep 24","Oct 24","Nov 24","Dec 24","Jan 25","Feb 25","Mar 25","Apr 25","May 25","Jun 25","Jul 25","Aug 25","Sep 25","Oct 25","Nov 25","Dec 25","Jan 26","Feb 26","Mar 26","Apr 26","May 26","Jun 26"];
  const actual = [768,761,757,749,752,758,738,729,731,722,718,715,709,706,712,731,752,781,778,792,815,808,829,845];
  const mgmtStart = 14; // Sep 25 = last pre-managed point; baseline diverges after
  // Passive baseline projection from Sep 25 onward
  const baseline = [712,708,703,706,699,694,697,691,688,683]; // indices 14..23

  const svg = document.getElementById("revchart");
  const W = 1040, H = 340, padL = 64, padR = 24, padT = 26, padB = 44;
  const yMin = 640, yMax = 880;
  const x = (i) => padL + (i / (actual.length - 1)) * (W - padL - padR);
  const y = (v) => padT + (1 - (v - yMin) / (yMax - yMin)) * (H - padT - padB);
  const NS = "http://www.w3.org/2000/svg";
  const el = (tag, attrs) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };

  // defs: gradient under actual line
  const defs = el("defs", {});
  defs.innerHTML = '<linearGradient id="goldfade" x1="0" y1="0" x2="0" y2="1">' +
    '<stop offset="0%" stop-color="#C8A96E" stop-opacity="0.22"/>' +
    '<stop offset="100%" stop-color="#C8A96E" stop-opacity="0"/></linearGradient>';
  svg.appendChild(defs);

  // gridlines + y labels
  [650, 700, 750, 800, 850].forEach((v) => {
    svg.appendChild(el("line", { x1: padL, x2: W - padR, y1: y(v), y2: y(v), stroke: "rgba(237,234,227,0.06)", "stroke-width": 1 }));
    const t = el("text", { x: padL - 12, y: y(v) + 4, "text-anchor": "end", fill: "#5D5B55", "font-size": 10.5, "font-family": "IBM Plex Mono, monospace" });
    t.textContent = "$" + v + "k";
    svg.appendChild(t);
  });

  // x labels quarterly
  [0, 3, 6, 9, 12, 15, 18, 21, 23].forEach((i) => {
    const t = el("text", { x: x(i), y: H - 14, "text-anchor": "middle", fill: "#5D5B55", "font-size": 10, "font-family": "IBM Plex Mono, monospace" });
    t.textContent = labels[i];
    svg.appendChild(t);
  });

  // alpha region between actual and baseline (post mgmt start)
  let alphaPath = "M " + x(mgmtStart) + " " + y(actual[mgmtStart]);
  for (let i = mgmtStart + 1; i < actual.length; i++) alphaPath += " L " + x(i) + " " + y(actual[i]);
  for (let i = actual.length - 1; i >= mgmtStart; i--) alphaPath += " L " + x(i) + " " + y(baseline[i - mgmtStart]);
  alphaPath += " Z";
  svg.appendChild(el("path", { d: alphaPath, fill: "rgba(79,178,134,0.13)", stroke: "none" }));

  // area fill under actual (managed segment only)
  let areaPath = "M " + x(mgmtStart) + " " + y(actual[mgmtStart]);
  for (let i = mgmtStart + 1; i < actual.length; i++) areaPath += " L " + x(i) + " " + y(actual[i]);
  areaPath += " L " + x(actual.length - 1) + " " + (H - padB) + " L " + x(mgmtStart) + " " + (H - padB) + " Z";
  svg.appendChild(el("path", { d: areaPath, fill: "url(#goldfade)" }));

  // baseline dashed
  let basePath = "M " + x(mgmtStart) + " " + y(baseline[0]);
  for (let i = 1; i < baseline.length; i++) basePath += " L " + x(mgmtStart + i) + " " + y(baseline[i]);
  svg.appendChild(el("path", { d: basePath, fill: "none", stroke: "#6E6B63", "stroke-width": 1.6, "stroke-dasharray": "5 5" }));

  // pre-engagement line
  let prePath = "M " + x(0) + " " + y(actual[0]);
  for (let i = 1; i <= mgmtStart; i++) prePath += " L " + x(i) + " " + y(actual[i]);
  svg.appendChild(el("path", { d: prePath, fill: "none", stroke: "#6E6B63", "stroke-width": 2 }));

  // managed actual line
  let actPath = "M " + x(mgmtStart) + " " + y(actual[mgmtStart]);
  for (let i = mgmtStart + 1; i < actual.length; i++) actPath += " L " + x(i) + " " + y(actual[i]);
  const actLine = el("path", { d: actPath, fill: "none", stroke: "#C8A96E", "stroke-width": 2.4, "stroke-linecap": "round" });
  svg.appendChild(actLine);

  // mgmt start marker
  svg.appendChild(el("line", { x1: x(mgmtStart + 1), x2: x(mgmtStart + 1), y1: padT, y2: H - padB, stroke: "rgba(200,169,110,0.4)", "stroke-width": 1, "stroke-dasharray": "3 4" }));
  const mk = el("text", { x: x(mgmtStart + 1) + 8, y: padT + 12, fill: "#C8A96E", "font-size": 10, "font-family": "IBM Plex Mono, monospace", "letter-spacing": "1.5" });
  mk.textContent = "ONBOARDED OCT 2025";
  svg.appendChild(mk);

  // end dot + value
  const lastX = x(actual.length - 1), lastY = y(actual[actual.length - 1]);
  svg.appendChild(el("circle", { cx: lastX, cy: lastY, r: 4, fill: "#C8A96E" }));
  const endLabel = el("text", { x: lastX - 8, y: lastY - 12, "text-anchor": "end", fill: "#EDEAE3", "font-size": 12, "font-weight": "600", "font-family": "IBM Plex Mono, monospace" });
  endLabel.textContent = "$845k/mo";
  svg.appendChild(endLabel);

  // baseline end label
  const bX = x(23), bY = y(baseline[baseline.length - 1]);
  const bLabel = el("text", { x: bX - 8, y: bY + 18, "text-anchor": "end", fill: "#5D5B55", "font-size": 10.5, "font-family": "IBM Plex Mono, monospace" });
  bLabel.textContent = "baseline $683k";
  svg.appendChild(bLabel);

  // line draw animation
  const len = actLine.getTotalLength();
  actLine.style.strokeDasharray = len;
  actLine.style.strokeDashoffset = len;
  requestAnimationFrame(() => {
    actLine.style.transition = "stroke-dashoffset 1.6s ease";
    actLine.style.strokeDashoffset = "0";
  });

  // reveals
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
})();
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
