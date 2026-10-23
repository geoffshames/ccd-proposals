export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Liza Soberano KILLSHOT Rollout Plan | Crowd Control Digital</title>
<meta name="description" content="Rollout plan for Liza Soberano's single KILLSHOT, built around the Todd McFarlane cover reveal at LA Comic Con." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Liza Soberano KILLSHOT Rollout Plan" />
<meta property="og:description" content="The LA Comic Con cover reveal and the road to release, prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://proposal.crowdcontroldigital.com/images/liza-killshot/og.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://proposal.crowdcontroldigital.com/images/liza-killshot/og.jpg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  @font-face{ font-family:N27; src:url('/brand/N27-Bold.otf') format('opentype'); font-weight:700;font-style:normal;font-display:swap; }
  :root{
    --bg:#0A0A0A; --card:#1A1A1A; --card-2:#141414;
    --accent:#FD3737; --accent-dim:rgba(253,55,55,.10);
    --ink:#FAFAFA; --secondary:#777; --muted:rgba(255,255,255,.58);
    --line:#1e1e1e; --line-2:#2a2a2a; --line-hover:#333;
    --fh:'N27','Work Sans',sans-serif; --fs:'Work Sans',system-ui,-apple-system,sans-serif;
    --fm:'Geist Mono',ui-monospace,SFMono-Regular,Menlo,monospace; --max:1200px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--fs);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  body.locked{overflow:hidden;height:100vh}
  a{color:inherit;text-decoration:none}
  h1,h2,h3,h4{font-family:var(--fh);font-weight:700;text-transform:uppercase;letter-spacing:-.01em;margin:0;line-height:1.03}
  ::selection{background:rgba(253,55,55,.25);color:#fff}
  .tex,.glow{position:fixed;inset:0;pointer-events:none;z-index:0}
  .tex{background-image:linear-gradient(rgba(51,51,51,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(51,51,51,.08) 1px,transparent 1px);background-size:80px 80px}
  .glow{background:radial-gradient(120% 75% at 50% -8%, rgba(253,55,55,.10), transparent 58%)}
  .mono{font-family:var(--fm);text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--muted)}
  .mono.dim{color:rgba(255,255,255,.42);font-size:10px}
  .bar{height:2px;width:64px;background:var(--accent)}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 28px}
  .cc-logo{height:22px;width:auto;display:block}
  .gate .cc-logo{height:26px}

  /* gate */
  .gate{position:fixed;inset:0;z-index:90;display:flex;flex-direction:column;justify-content:space-between;padding:40px clamp(20px,6vw,90px);background:var(--bg);transition:opacity .6s ease, visibility .6s ease}
  .gate.open{opacity:0;visibility:hidden}
  .gate-row{display:flex;justify-content:space-between;gap:12px}
  .gate-center{flex:1;display:flex;flex-direction:column;justify-content:center;max-width:860px}
  .gate-title{font-family:var(--fh);font-size:clamp(3rem,11vw,9rem);line-height:.9;letter-spacing:-.02em}
  .gate-center .bar{margin:26px 0 22px}
  .gate-sub{color:var(--muted);font-size:16px;margin:0 0 26px;max-width:540px}
  .gate-form{display:flex;gap:10px}
  .gate-form input{flex:1;max-width:260px;min-width:0;background:rgba(255,255,255,.04);border:1px solid var(--line-hover);color:var(--ink);padding:14px 18px;font-family:var(--fm);font-size:13px;letter-spacing:.28em;text-transform:uppercase;outline:none}
  .gate-form input:focus{border-color:var(--accent)}
  .gate-form button{background:var(--accent);color:#fff;border:0;padding:0 26px;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.14em;cursor:pointer}
  .gate-err{height:16px;margin-top:14px;color:var(--accent);opacity:0;transition:opacity .2s}
  .gate-err.show{opacity:1}
  .gate-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .gate-foot .fv{font-size:14px;margin-top:6px}
  .gate-foot .r{text-align:right}
  .shell{position:relative;z-index:1;opacity:0;transition:opacity .8s ease}
  body.unlocked .shell{opacity:1}

  /* cover */
  .cover{position:relative;min-height:90vh;display:flex;flex-direction:column;justify-content:space-between;padding:72px clamp(20px,5vw,96px) 56px;max-width:1340px;margin:0 auto;overflow:hidden}
  .cover-hero{position:absolute;inset:0;z-index:0;pointer-events:none}
  .cover-hero::before{content:"";position:absolute;inset:0;background:url('/images/liza-killshot/hero-bg.jpg') right center/cover no-repeat;filter:grayscale(.25) contrast(1.05) brightness(.9);opacity:.34;-webkit-mask-image:linear-gradient(90deg,transparent 0%,transparent 30%,rgba(0,0,0,.6) 62%,#000 100%);mask-image:linear-gradient(90deg,transparent 0%,transparent 30%,rgba(0,0,0,.6) 62%,#000 100%)}
  .cover-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--bg) 0%,transparent 20%,transparent 60%,var(--bg) 100%)}
  .cover-top,.cover-mid,.cover-foot{position:relative;z-index:1}
  @media(max-width:700px){.cover-hero::before{opacity:.2}}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:44px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(3rem,11vw,9.5rem);line-height:.9;letter-spacing:-.02em}
  .cover-title .sm{display:block;font-size:clamp(1.05rem,2.8vw,2rem);color:var(--accent);letter-spacing:.02em;margin-top:12px}
  .cover-subwrap{margin-top:28px;max-width:820px}
  .cover-subwrap .bar{margin-bottom:22px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-size:clamp(1.3rem,2.5vw,2rem);line-height:1.15;letter-spacing:-.01em;margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin-top:34px}
  .cover-foot .cv{font-size:15px;margin-top:7px}
  @media(max-width:600px){.cover-foot{grid-template-columns:1fr}}

  /* nav */
  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.88);backdrop-filter:blur(14px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:var(--max);margin:0 auto;padding:12px 28px;display:flex;align-items:center;gap:18px}
  .nb-brand{font-family:var(--fh);text-transform:uppercase;letter-spacing:.02em;font-size:15px;white-space:nowrap}
  .nb-jump{display:flex;gap:16px;margin-left:auto;flex-wrap:wrap;justify-content:flex-end}
  .nb-jump a{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
  .nb-jump a:hover{color:var(--accent)}
  @media(max-width:860px){.nb-jump{display:none}}

  /* context */
  .ctx{padding:56px 0 8px}
  .ctx h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px}
  .lead{font-size:18px;max-width:860px;margin:0 0 26px}
  .lead b{color:var(--accent)}
  .ctx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ctx-card{background:var(--card-2);border:1px solid var(--line-2);padding:20px 20px 22px}
  .k{font-family:var(--fm);text-transform:uppercase;letter-spacing:.14em;font-size:10px;color:var(--accent)}
  .ctx-card p{margin:8px 0 0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ctx-card p b{color:var(--ink)}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:28px}
  .st{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:15px 16px}
  .st .n{font-family:var(--fh);font-size:1.7rem;line-height:1}
  .st .l{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);margin-top:8px;display:block;line-height:1.45}
  @media(max-width:900px){.ctx-grid{grid-template-columns:1fr}.stats{grid-template-columns:repeat(2,1fr)}}

  /* section */
  .sec{padding:60px 0 8px}
  .sec-head{display:flex;flex-direction:column;gap:8px;margin-bottom:26px}
  .sec-head .row{display:flex;align-items:center;gap:16px}
  .sec-head .num{font-family:var(--fm);font-size:13px;color:var(--accent);letter-spacing:.14em}
  .sec-head .ln{flex:1;height:1px;background:var(--line-2)}
  .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.4rem)}
  .sec-head .desc{color:var(--muted);font-size:15.5px;max-width:840px;margin:4px 0 0}
  .finding{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px;margin:0 0 26px;max-width:920px}
  .finding p{margin:0;font-size:16px;line-height:1.55}
  .finding p b{color:var(--accent)}

  /* phases */
  .phases{display:grid;gap:14px}
  .phase{display:grid;grid-template-columns:230px 1fr;background:var(--card);border:1px solid var(--line-2);transition:border-color .3s}
  .phase:hover{border-color:rgba(253,55,55,.45)}
  .ph-l{padding:22px;border-right:1px solid var(--line-2);background:var(--card-2)}
  .ph-l .pn{font-family:var(--fm);font-size:11px;letter-spacing:.14em;color:var(--accent)}
  .ph-l h3{font-size:1.5rem;margin:8px 0 8px}
  .ph-l .when{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink)}
  .ph-l .goal{color:var(--muted);font-size:13.5px;margin:12px 0 0;line-height:1.5}
  .ph-r{padding:20px 22px}
  .ph-r ul{list-style:none;margin:0;padding:0;display:grid;gap:11px}
  .ph-r li{display:grid;grid-template-columns:86px 1fr;gap:14px;align-items:start;font-size:14.5px;color:var(--muted);line-height:1.52}
  .ph-r li b{color:var(--ink)}
  .lane{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:4px 7px;border:1px solid var(--line-hover);color:var(--ink);text-align:center;margin-top:2px}
  .lane.red{color:var(--accent);border-color:rgba(253,55,55,.45);background:var(--accent-dim)}
  @media(max-width:820px){.phase{grid-template-columns:1fr}.ph-l{border-right:0;border-bottom:1px solid var(--line-2)}.ph-r li{grid-template-columns:1fr;gap:5px}.lane{justify-self:start}}

  /* tables */
  .tablewrap{border:1px solid var(--line-2);overflow-x:auto;background:var(--card-2)}
  table.data{width:100%;border-collapse:collapse;font-size:14px;min-width:720px}
  table.data th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:left;padding:13px 14px;border-bottom:1px solid var(--line-2);white-space:nowrap}
  table.data td{padding:13px 14px;border-bottom:1px solid var(--line);color:var(--muted);vertical-align:top;line-height:1.5}
  table.data td.h{color:var(--ink);font-weight:600;white-space:nowrap}
  table.data td.r,table.data th.r{text-align:right;white-space:nowrap}
  table.data tr.tot td{color:var(--ink);font-weight:600;border-top:1px solid var(--line-hover)}
  .tbl-note{color:var(--secondary);font-size:12.5px;margin:12px 0 0;line-height:1.55}

  /* cards */
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  @media(max-width:960px){.grid3{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:680px){.grid3,.grid2{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line-2);padding:20px 20px 22px;display:flex;flex-direction:column;transition:border-color .3s,transform .3s}
  .card:hover{border-color:rgba(253,55,55,.45);transform:translateY(-2px)}
  .card .top{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
  .card .cn{font-family:var(--fm);font-size:12px;color:var(--secondary);letter-spacing:.14em}
  .card h4{font-size:1.12rem;text-transform:none;letter-spacing:-.01em;margin:0 0 8px}
  .card p{margin:0;color:var(--muted);font-size:14.2px;line-height:1.55}
  .card p b{color:var(--ink)}
  .card .who{margin-top:auto;padding-top:14px;font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink)}
  .tag{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:4px 8px;border:1px solid rgba(253,55,55,.45);color:var(--accent);background:var(--accent-dim)}

  /* mechanics */
  .mech{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px}
  .mech h4{font-size:1.08rem;text-transform:none;letter-spacing:-.01em;margin:6px 0 6px}
  .mech p{margin:0;color:var(--muted);font-size:14.3px;line-height:1.55}
  .mech p b{color:var(--ink)}

  /* creative */
  .cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  @media(max-width:960px){.cgrid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:600px){.cgrid{grid-template-columns:1fr}}
  .cr{background:var(--card);border:1px solid var(--line-2);display:flex;flex-direction:column}
  .cr .media{background:#000;display:flex;align-items:center;justify-content:center;aspect-ratio:4/5;overflow:hidden;cursor:zoom-in}
  .cr .media img,.cr .media video{width:100%;height:100%;object-fit:contain;display:block}
  .cr .body{padding:16px 16px 18px}
  .cr h4{font-size:1rem;text-transform:none;letter-spacing:-.01em;margin:8px 0 6px}
  .cr p{margin:0;color:var(--muted);font-size:13.8px;line-height:1.5}
  .cr.wide{grid-column:span 2}
  .cr.wide .media{aspect-ratio:16/9}
  @media(max-width:600px){.cr.wide{grid-column:auto}}
  .disclaim{font-family:var(--fm);font-size:10.5px;text-transform:uppercase;letter-spacing:.12em;color:var(--accent);margin:0 0 18px}
  .lb{position:fixed;inset:0;z-index:95;background:rgba(0,0,0,.92);display:none;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
  .lb.show{display:flex}
  .lb img{max-width:100%;max-height:100%;object-fit:contain}

  /* needs */
  .needs{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
  @media(max-width:760px){.needs{grid-template-columns:1fr}}
  .nd{display:grid;grid-template-columns:34px 1fr;gap:12px;background:var(--card-2);border:1px solid var(--line-2);padding:16px 18px;cursor:pointer;user-select:none;transition:border-color .2s}
  .nd:hover{border-color:var(--line-hover)}
  .nd .bx{width:22px;height:22px;border:1px solid var(--line-hover);display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;margin-top:2px}
  .nd.done .bx{background:var(--accent);border-color:var(--accent)}
  .nd.done h4{text-decoration:line-through;color:var(--secondary)}
  .nd h4{font-size:1rem;text-transform:none;letter-spacing:-.01em;margin:0 0 4px}
  .nd p{margin:0;color:var(--muted);font-size:13.8px;line-height:1.5}
  .nd .due{font-family:var(--fm);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-top:8px;display:block}

  .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  @media(max-width:860px){.kpis{grid-template-columns:1fr}}

  footer{margin-top:64px;border-top:1px solid var(--line);padding:26px 0 60px}
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:900px}
  footer .fn b{color:var(--muted)}
  @media(max-width:600px){.wrap,.navbar-in{padding-left:16px;padding-right:16px}}
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>

<div class="gate" id="gate">
  <div class="gate-row"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">LIZA SOBERANO</div>
    <div class="bar"></div>
    <p class="gate-sub">KILLSHOT rollout plan, prepared by Crowd Control Digital. Enter the password to continue.</p>
    <form class="gate-form" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="gate-err mono" id="gateErr">Incorrect password</div>
  </div>
  <div class="gate-foot">
    <div><div class="mono dim">Single</div><div class="fv">KILLSHOT</div></div>
    <div class="r"><div class="mono dim">Prepared By</div><div class="fv">Crowd Control Digital</div></div>
  </div>
</div>

<div class="shell">
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">October 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">LIZA SOBERANO<span class="sm">KILLSHOT ROLLOUT PLAN</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">A Todd McFarlane cover, unveiled by Liza and Todd in front of LA Comic Con. The plan below turns that weekend into pre-saves, a direct fan list and a launch audience that is still there on release day.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The moment</div><div class="cv">LA Comic Con, October 30 to November 1, Los Angeles Convention Center</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames, Crowd Control Digital</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Liza / KILLSHOT</a>
      <div class="nb-jump"><a href="#plan">Plan</a><a href="#con">Con Weekend</a><a href="#content">Content</a><a href="#paid">Paid</a><a href="#creative">Creative</a><a href="#needs">Next Steps</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>Why this, why now</h2>
    <p class="lead">Music almost never gets a cover drawn by the creator of Spawn. KILLSHOT does, and the art debuts with both of them in the room at one of the biggest fan conventions in the country. That is a story comics press, Filipino press and music press will all want. <b>The job of this rollout is to bank that attention</b> into things we can reach again: pre-saves, phone numbers, NFC taps and an audience the ads can find on release day.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">The asset</span><p>An original <b>Todd McFarlane cover</b> for a pop single. It gives Liza a crossover into a collector audience music rarely reaches, and gives every post a reason to exist beyond "new song coming."</p></div>
      <div class="ctx-card"><span class="k">The room</span><p>LA Comic Con drew <b>more than 130,000 fans</b> last year. This year's guest list includes the KPop Demon Hunters cast, which puts an Asian-led action story and its fans in the same building. Los Angeles is also home to one of the largest Filipino communities outside the Philippines.</p></div>
      <div class="ctx-card"><span class="k">The bridge</span><p>The Con is the peak of attention and release day comes later. <b>Every tactic below captures something at the Con</b> that we spend again in release week, so the hype carries instead of resetting.</p></div>
    </div>
    <div class="stats">
      <div class="st"><div class="n">17.6M</div><span class="l">Instagram followers</span></div>
      <div class="st"><div class="n">6.7M</div><span class="l">TikTok followers</span></div>
      <div class="st"><div class="n">1.2M</div><span class="l">Median views on her Forgotten Island TikToks</span></div>
      <div class="st"><div class="n">130K+</div><span class="l">LA Comic Con attendance, 2025</span></div>
    </div>
  </section>

  <section class="sec wrap" id="plan">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>The Plan</h2>
      <p class="desc">Five phases from announcement to album. Lanes are tagged: organic social, paid media, clipping, press, the Con floor and direct-to-fan (pre-save, list, NFC).</p>
    </div>
    <div class="finding"><p><b>Recommended release date: Friday, November 13</b>, with Friday, November 20 as the latest date that still clears Thanksgiving week. Announce the date from the stage on Sunday, November 1. Two weeks from reveal to release keeps the Con audience warm; a longer gap means paying to rebuild it.</p></div>
    <div class="phases">
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 01</span><h3>Announce</h3><span class="when">Oct 26 to Oct 29</span><p class="goal">Make the collaboration the news and fill the signing line before the doors open.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Co-announcement post</b> on Liza's and Todd's accounts as a collab post: ten seconds of Todd's hand inking a crop of the cover, Liza's voice over it. Only a sliver of the art is shown.</span></li>
          <li><span class="lane">Press</span><span><b>Three exclusives, one per lane:</b> a comics outlet gets the first-look crop, a Philippine entertainment outlet gets Liza on the collaboration, a music outlet gets the single.</span></li>
          <li><span class="lane red">Direct</span><span><b>Pre-save and signing RSVP live on day one.</b> RSVP through a phone and email drop that reserves a spot in the signing line. Every RSVP becomes a contact we can text on release day.</span></li>
          <li><span class="lane red">Organic</span><span><b>Piece-by-piece reveal on stories</b>, one new crop a day. Fans assemble the cover themselves before it is unveiled.</span></li>
          <li><span class="lane">Paid</span><span><b>Meta only, concentrated:</b> Los Angeles plus the Filipino diaspora markets, optimized to RSVP and pre-save.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 02</span><h3>Reveal</h3><span class="when">Oct 30 to Nov 1</span><p class="goal">Unveil the cover in front of the biggest possible room and capture enough footage to feed the next three weeks.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Con</span><span><b>The drape pull.</b> The full cover is unveiled by Liza and Todd together, filmed from four angles including the crowd's phones. Run of show in section 02.</span></li>
          <li><span class="lane red">Direct</span><span><b>Signed, numbered NFC prints.</b> Each print carries a tap-to-listen tag that opens a private page: a first listen before anyone else, the pre-save and the sign-up.</span></li>
          <li><span class="lane red">Con</span><span><b>Halloween cosplay call</b> on Saturday: come as the KILLSHOT heroine. Best costume gets a signed artist proof and a photo with Liza.</span></li>
          <li><span class="lane">Clipping</span><span><b>Raw footage to clippers within hours</b>: the reveal, Todd's walkthrough, signing reactions, the date announcement.</span></li>
          <li><span class="lane">Paid</span><span><b>Same-night boosts</b> of the best-performing post each day, plus a geofence around the convention center during show hours to send people to the booth.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 03</span><h3>Bridge</h3><span class="when">Nov 2 to Nov 12</span><p class="goal">Keep the cover in feeds every day until release, and start the sound before the song is out.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Cover breakdown series</b>, three short episodes: pencils, inks, color. Todd talks through the choices; Liza reacts to seeing herself as a comic heroine.</span></li>
          <li><span class="lane red">Organic</span><span><b>Fan art challenge</b> with downloadable line art. Todd picks winners on camera; the winners are printed and signed.</span></li>
          <li><span class="lane">Clipping</span><span><b>Clipping campaign live</b> on Con footage and a 15-second official snippet, so creators are already posting the sound when the song lands.</span></li>
          <li><span class="lane red">Direct</span><span><b>Online drop of the remaining prints</b> with shipping to the Philippines, so the fanbase outside LA gets the same collectible.</span></li>
          <li><span class="lane">Paid</span><span><b>TikTok Spark Ads and Meta</b> on the strongest organic posts, building the retargeting pool for release week.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 04</span><h3>Release</h3><span class="when">Week of Nov 13</span><p class="goal">Convert everyone we captured into day-one streams.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Direct</span><span><b>Text and email the full list at release</b>: RSVPs, NFC taps and pre-savers. Print holders get the song 24 hours early through their tag.</span></li>
          <li><span class="lane red">Organic</span><span><b>Official video premiere</b>, the animated cover as Spotify Canvas and YouTube visualizer, and a listening live on TikTok.</span></li>
          <li><span class="lane">Paid</span><span><b>Heaviest flight of the campaign</b> across Meta, TikTok and YouTube: retargeting Con engagers and pre-savers first, then lookalikes and the diaspora markets.</span></li>
          <li><span class="lane">Clipping</span><span><b>Clippers switch to the released track</b> and the video.</span></li>
          <li><span class="lane red">Organic</span><span><b>Creator seeding</b> with cosplay, comics and Filipino creators who posted during the Con.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 05</span><h3>Sustain</h3><span class="when">Nov 16 onward</span><p class="goal">Hand the audience to the next chapter: the Killer Queens comic and the album.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Fan reposts and cut-downs</b> for three weeks: best covers, cosplays and fan art from the challenge.</span></li>
          <li><span class="lane red">Direct</span><span><b>Killer Queens comic preorder</b> opens to the list first. Under Billboard's smart media rules, an NFC comic that unlocks the album counts as an album sale, so the Con list becomes the first audience for a chart-eligible collectible.</span></li>
          <li><span class="lane">Paid</span><span><b>Retargeting into the preorder</b>: everyone who engaged with the Con, the print or the single.</span></li>
        </ul></div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="con">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>Con Weekend</h2>
      <p class="desc">Recommended run of show, built around the busiest day of the show. Final times follow the panel and signing schedule.</p>
    </div>
    <div class="tablewrap">
      <table class="data">
        <thead><tr><th>Day</th><th>On the floor</th><th>What we post</th></tr></thead>
        <tbody>
          <tr><td class="h">Fri, Oct 30<br><span class="mono dim">3 PM to 9 PM</span></td><td>Preview night. The booth is up with the art still under the drape and the animated teaser on screen. Signing RSVPs check in for wristbands. Crew films fans guessing what is under the drape.</td><td>"Tomorrow" story set. Fan guesses cut into one post.</td></tr>
          <tr><td class="h">Sat, Oct 31<br><span class="mono dim">Halloween</span></td><td><b>The reveal</b>, timed to peak floor traffic in the early afternoon: Liza and Todd pull the drape together. Signing follows. Cosplay call runs all day. Reaction station plays the first 15 seconds of the song on headphones.</td><td>Drape pull within the hour, from the crowd angle. Signing POVs and cosplay roundup that night. Same-night boost on the winner.</td></tr>
          <tr><td class="h">Sun, Nov 1</td><td>Release date announced from the stage or booth, followed by the first public play of the snippet. Final allocation of signed prints.</td><td>Date announcement post. Weekend recap edit that night with the pre-save in the first frame.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="grid2" style="margin-top:18px">
      <div class="mech"><span class="k">Mechanic 01</span><h4>Tap-to-listen prints</h4><p>A numbered run of 1,000, signed by Liza and Todd. The tag opens a private page with the first listen, the pre-save and the sign-up. <b>Every print is a superfan we can reach directly</b>, and every tap is counted.</p></div>
      <div class="mech"><span class="k">Mechanic 02</span><h4>Signing line by RSVP</h4><p>Line spots are reserved online in the week before. It controls the crowd, and it turns the line itself into a contact list of the most committed fans in Los Angeles.</p></div>
      <div class="mech"><span class="k">Mechanic 03</span><h4>Reaction station</h4><p>Headphones at the booth with the first 15 seconds of KILLSHOT. Fans who opt in are filmed hearing it for the first time, which gives the clippers authentic reaction footage on day one.</p></div>
      <div class="mech"><span class="k">Mechanic 04</span><h4>Halloween cosplay call</h4><p>The Con lands on Halloween. A call to come as the KILLSHOT heroine turns the cover into a costume, and costumes into posts that keep coming long after the weekend.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="content">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Content</h2>
      <p class="desc">Nine formats, each with an owner, so three days on the floor feed three weeks of posting.</p>
    </div>
    <div class="grid3">
      <div class="card"><div class="top"><span class="cn">01</span><span class="tag">Announce</span></div><h4>Ink to collab post</h4><p>Todd's hand laying ink on a crop of the cover, Liza's voice over it. The first thing anyone sees.</p><span class="who">Todd's studio, CCD edit</span></div>
      <div class="card"><div class="top"><span class="cn">02</span><span class="tag">Reveal</span></div><h4>The drape pull</h4><p>Four angles, cut three ways: the crowd's view, Liza's reaction and Todd's. Posted within the hour.</p><span class="who">CCD crew</span></div>
      <div class="card"><div class="top"><span class="cn">03</span><span class="tag">Bridge</span></div><h4>Cover breakdown</h4><p>Todd walks through the pencils, inks and color. Comics fans love a process breakdown, and it explains why this cover matters to people who have never read Spawn.</p><span class="who">Todd, CCD edit</span></div>
      <div class="card"><div class="top"><span class="cn">04</span><span class="tag">Con</span></div><h4>Liza's POV</h4><p>Her own phone, all weekend: green room, the floor, the moment she sees the crowd. The unpolished layer that makes the polished one believable.</p><span class="who">Liza</span></div>
      <div class="card"><div class="top"><span class="cn">05</span><span class="tag">Con</span></div><h4>First listen reactions</h4><p>Fans hearing the first 15 seconds at the reaction station. Built for clipping and for paid hooks.</p><span class="who">CCD crew</span></div>
      <div class="card"><div class="top"><span class="cn">06</span><span class="tag">Con</span></div><h4>Cosplay roundup</h4><p>The best KILLSHOT costumes of the weekend, reposted from the fans who made them.</p><span class="who">CCD social</span></div>
      <div class="card"><div class="top"><span class="cn">07</span><span class="tag">Bridge</span></div><h4>Animated cover</h4><p>The cover in motion: rain, scarf, the crosshair locking. One asset for Spotify Canvas, the YouTube visualizer and the paid units.</p><span class="who">CCD motion</span></div>
      <div class="card"><div class="top"><span class="cn">08</span><span class="tag">Bridge</span></div><h4>Fan art challenge</h4><p>Downloadable line art, a hashtag and Todd as judge. Winners printed, signed and shown on camera.</p><span class="who">CCD social, Todd</span></div>
      <div class="card"><div class="top"><span class="cn">09</span><span class="tag">Release</span></div><h4>Countdown set</h4><p>Seven days of cover crops and snippet cuts, each ending on the date and the pre-save.</p><span class="who">CCD design</span></div>
    </div>
  </section>

  <section class="sec wrap" id="paid">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Paid Media</h2>
      <p class="desc">Two budget options, weighted to release week. Each phase runs on as few channels as it needs so every dollar of spend produces a readable result.</p>
    </div>
    <div class="grid3" style="margin-bottom:20px">
      <div class="card"><span class="k">Audience 01</span><h4 style="margin-top:8px">Liza's existing fans</h4><p>Engagers on Instagram and TikTok, Forgotten Island viewers and the pre-save list. Retargeted first in every phase.</p></div>
      <div class="card"><span class="k">Audience 02</span><h4 style="margin-top:8px">Filipino diaspora</h4><p>The Philippines plus the U.S. markets where her search interest runs highest: California, Hawaii, Nevada and Guam.</p></div>
      <div class="card"><span class="k">Audience 03</span><h4 style="margin-top:8px">The collector crossover</h4><p>Comics, collectibles, anime and K-pop interest, plus fans of Todd McFarlane and Spawn. The new audience this cover opens.</p></div>
    </div>
    <div class="tablewrap">
      <table class="data">
        <thead><tr><th>Phase</th><th>Objective</th><th>Channels</th><th class="r">Core</th><th class="r">Full</th></tr></thead>
        <tbody>
          <tr><td class="h">01 Announce</td><td>RSVPs and pre-saves</td><td>Meta</td><td class="r">$3,000</td><td class="r">$5,000</td></tr>
          <tr><td class="h">02 Reveal</td><td>Booth traffic and reach on the reveal</td><td>Meta geofence, same-night boosts</td><td class="r">$2,500</td><td class="r">$5,000</td></tr>
          <tr><td class="h">03 Bridge</td><td>Video views and the retargeting pool</td><td>TikTok Spark Ads, Meta</td><td class="r">$4,500</td><td class="r">$9,000</td></tr>
          <tr><td class="h">04 Release</td><td>Day-one streams</td><td>Meta, TikTok, YouTube</td><td class="r">$7,000</td><td class="r">$14,000</td></tr>
          <tr><td class="h">05 Sustain</td><td>Streams and comic preorders</td><td>Meta and TikTok retargeting</td><td class="r">$3,000</td><td class="r">$7,000</td></tr>
          <tr class="tot"><td>Total media</td><td></td><td></td><td class="r">$20,000</td><td class="r">$40,000</td></tr>
        </tbody>
      </table>
    </div>
    <p class="tbl-note">Media spend only. The Full option adds a Philippines heavy-up and YouTube in the bridge. Paid units lead with the art, Liza and Todd; frames that feature a weapon stay in organic, since Meta and TikTok restrict ads that show firearms.</p>
    <div class="finding" style="margin-top:26px"><p><b>Clipping runs alongside paid.</b> The clipping campaign planned for KILLSHOT gets its best raw material at the Con: the reveal, reactions, Todd's walkthrough and the snippet. Clippers receive footage the same day, paid on verified views, and switch to the released track in release week.</p></div>
  </section>

  <section class="sec wrap" id="creative">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Example Creative</h2>
      <p class="desc">Generated examples of the formats above. They show the direction; the final versions use Todd's real cover and approved photography of Liza.</p>
    </div>
    <p class="disclaim">Examples, directional only</p>
    <div class="cgrid">
      <div class="cr wide"><div class="media"><img src="/images/liza-killshot/con-reveal.jpg" alt="Example: the drape pull at the booth" /></div><div class="body"><span class="k">Con</span><h4>The drape pull</h4><p>The reveal moment the whole weekend is built around, shot from the crowd's side.</p></div></div>
      <div class="cr"><div class="media"><video src="/images/liza-killshot/cover-loop.mp4" poster="/images/liza-killshot/nfc-print.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Bridge</span><h4>Animated cover</h4><p>Canvas, visualizer and paid unit from one asset.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/nfc-print.jpg" alt="Example: signed numbered print with NFC tag" /></div><div class="body"><span class="k">Direct</span><h4>Tap-to-listen print</h4><p>Signed, numbered, with the NFC tag that opens the first listen.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/story-teaser.jpg" alt="Example: cover reveal story teaser" /></div><div class="body"><span class="k">Announce</span><h4>Cover reveal teaser</h4><p>Story frame for announce week, showing only a crop of the art.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/presave-tile.jpg" alt="Example: pre-save tile" /></div><div class="body"><span class="k">Direct</span><h4>Pre-save tile</h4><p>The torn-paper reveal, carried from the Con into every pre-save ask.</p></div></div>
      <div class="cr wide"><div class="media"><video src="/images/liza-killshot/ink-process.mp4" poster="/images/liza-killshot/ink-process.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Announce</span><h4>Ink to collab post</h4><p>The opening announcement: the cover being inked, with Liza's voice over it.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/cosplay-call.jpg" alt="Example: Halloween cosplay call" /></div><div class="body"><span class="k">Con</span><h4>Halloween cosplay call</h4><p>The heroine as a costume, for the reposts that follow the weekend.</p></div></div>
    </div>
  </section>

  <section class="sec wrap" id="measure">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>Measurement</h2>
      <p class="desc">What we report, and when. Baselines are set at kickoff.</p>
    </div>
    <div class="kpis">
      <div class="mech"><span class="k">Capture</span><h4>Before release</h4><p>Pre-saves, signing RSVPs, list size, prints sold and NFC taps, reported daily through the Con.</p></div>
      <div class="mech"><span class="k">Attention</span><h4>Reveal and bridge</h4><p>Views and shares on Con content, press pickups, posts using the snippet sound, fan art and cosplay entries.</p></div>
      <div class="mech"><span class="k">Conversion</span><h4>Release and after</h4><p>First-week streams by market, saves, list click-through and comic preorders from the list.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="needs">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>Next Steps</h2>
      <p class="desc">What it takes to start announce week on Monday, October 26. Tap an item to mark it done.</p>
    </div>
    <div class="needs" id="needs-list">
      <div class="nd"><span class="bx"></span><div><h4>Release date</h4><p>Confirm November 13 (or November 20) so it can be announced at the Con.</p><span class="due">By Oct 24</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Con schedule</h4><p>Panel or booth slot, signing windows, and the hours Liza and Todd are on site.</p><span class="due">By Oct 24</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Cover files</h4><p>Layered art, crops and line art, with Todd's approval for motion, prints and the fan art challenge.</p><span class="due">By Oct 25</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Snippet</h4><p>A cleared 15 to 30 second cut for the booth, the NFC page and the official TikTok sound.</p><span class="due">By Oct 25</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Pre-save and RSVP</h4><p>Pre-save link from the label; we build the RSVP drop and the NFC landing page.</p><span class="due">Live Oct 26</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Print run</h4><p>Quantity, price, paper and NFC tags ordered in time for the Con.</p><span class="due">Order by Oct 26</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Ad access</h4><p>Partner access to Liza's Meta and TikTok accounts, and Spark codes on the posts we boost.</p><span class="due">By Oct 26</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Video delivery</h4><p>Final delivery date for the official video, so release week can be built around it.</p><span class="due">By Oct 30</span></div></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Follower counts are from third-party trackers and current as of October 2026. Forgotten Island TikTok figures are from Crowd Control Digital's social listening on the film. LA Comic Con dates, hours and 2025 attendance are from the Los Angeles Convention Center listing; the guest list is subject to change. Creative on this page is generated for direction only. Smart media album eligibility follows Billboard and Luminate rules as published in September 2026 and should be confirmed with the label before any chart-facing plan is set.</p>
  </footer>
</div>

<div class="lb" id="lb"><img id="lbimg" alt="" /></div>

<script>
(function(){
  var PASS="HOPE";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);
    document.querySelectorAll('video').forEach(function(v){v.preload='auto';var p=v.play();if(p&&p.catch)p.catch(function(){});});}
  try{if(sessionStorage.getItem('lk-unlocked')==='1')unlock();}catch(e){}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){try{sessionStorage.setItem('lk-unlocked','1');}catch(x){}unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});
  var lb=document.getElementById('lb'), lbimg=document.getElementById('lbimg');
  document.querySelectorAll('.cr .media img').forEach(function(im){im.addEventListener('click',function(){lbimg.src=im.src;lb.classList.add('show');});});
  lb.addEventListener('click',function(){lb.classList.remove('show');});
  document.querySelectorAll('#needs-list .nd').forEach(function(nd,i){
    var key='lk-need-'+i;
    try{if(localStorage.getItem(key)==='1'){nd.classList.add('done');nd.querySelector('.bx').textContent='\\u2713';}}catch(e){}
    nd.addEventListener('click',function(){var on=!nd.classList.contains('done');nd.classList.toggle('done',on);nd.querySelector('.bx').textContent=on?'\\u2713':'';try{localStorage.setItem(key,on?'1':'0');}catch(e){}});
  });
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
