export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Liza Soberano KILLSHOT Rollout Plan | Crowd Control Digital</title>
<meta name="description" content="Rollout plan for Liza Soberano's single KILLSHOT, built around the Todd McFarlane cover reveal on LA Comic Con weekend." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Liza Soberano KILLSHOT Rollout Plan" />
<meta property="og:description" content="The Todd McFarlane cover reveal and the road to release, prepared by Crowd Control Digital." />
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
        <p class="cover-sub">A Todd McFarlane cover for Liza's single, revealed over LA Comic Con weekend while comics culture owns the feed. The plan puts the art and the two of them together everywhere that conversation is happening, then carries the attention to release day.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The moment</div><div class="cv">LA Comic Con weekend, October 30 to November 1</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames, Crowd Control Digital</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Liza / KILLSHOT</a>
      <div class="nb-jump"><a href="#plan">Plan</a><a href="#shoot">Shoot</a><a href="#amplify">Amplify</a><a href="#plays">Comic Plays</a><a href="#paid">Paid</a><a href="#creative">Creative</a><a href="#needs">Next Steps</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>Why this, why now</h2>
    <p class="lead">Music almost never gets a cover drawn by the creator of Spawn. KILLSHOT does, and it lands on the weekend LA Comic Con and Halloween put comics, cosplay and collectors at the top of everyone's feed. <b>The job is amplification:</b> the cover and the footage of Liza and Todd together, pushed through clipping, social PR, creators and paid media, with a pre-save at the end of every post.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">The asset</span><p>An original <b>Todd McFarlane cover</b> and one session of the two of them together. That is enough to feed three weeks of content if the shoot is planned for it (section 02).</p></div>
      <div class="ctx-card"><span class="k">The timing</span><p>LA Comic Con drew <b>more than 130,000 fans</b> last year, and this year's guest list includes the KPop Demon Hunters cast. The whole weekend is a pop culture news cycle. We ride it online instead of competing for floor space.</p></div>
      <div class="ctx-card"><span class="k">The bridge</span><p>The reveal is the peak of attention and release day comes later. <b>Every post asks for the pre-save</b>, so the reveal audience is still reachable when the song lands.</p></div>
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
      <p class="desc">Five phases from tease to album. Lanes are tagged: organic social, social PR, creators, clipping, paid media and direct-to-fan (pre-save and list).</p>
    </div>
    <div class="finding"><p><b>Recommended release date: Friday, November 13</b>, with Friday, November 20 as the latest date that still clears Thanksgiving week. Put the date in the reveal post on Saturday, October 31. Two weeks from reveal to release keeps the audience warm; a longer gap means paying to rebuild it.</p></div>
    <div class="phases">
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 01</span><h3>Tease</h3><span class="when">Oct 26 to Oct 29</span><p class="goal">Make the collaboration the news before anyone sees the full cover.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Collab post on Liza's and Todd's accounts:</b> Todd inking a crop of the cover, Liza's voice over it. Only a sliver of the art is shown.</span></li>
          <li><span class="lane red">Organic</span><span><b>Piece-by-piece crops on stories</b>, one a day. Fans assemble the cover themselves before Saturday.</span></li>
          <li><span class="lane">Social PR</span><span><b>Pages briefed under embargo</b> for the Saturday drop wave: comics news, pop culture, anime and K-pop, and Filipino entertainment pages.</span></li>
          <li><span class="lane">Creators</span><span><b>Halloween costume creators</b> get the look (black bodysuit, red scarf) and post "last-minute Halloween costume" videos tagged to the single.</span></li>
          <li><span class="lane red">Direct</span><span><b>Pre-save live on day one</b>, plus a free phone wallpaper of the line art in exchange for a number or email.</span></li>
          <li><span class="lane">Paid</span><span><b>Meta only, concentrated:</b> Liza's fans and the Filipino diaspora markets, optimized to pre-save.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 02</span><h3>Reveal</h3><span class="when">Oct 30 to Nov 1</span><p class="goal">Own the comics conversation for one weekend.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Full cover reveal on Saturday, October 31</b> as a collab post on both accounts, cut from the shoot: Liza seeing the cover for the first time. The release date is in the caption.</span></li>
          <li><span class="lane">Social PR</span><span><b>Drop wave:</b> the briefed pages post the cover inside the same two hours, so the story shows up across comics, pop culture and Filipino feeds at once.</span></li>
          <li><span class="lane">Press</span><span><b>One comics exclusive</b> on the collaboration that morning, with Philippine entertainment outlets the same day.</span></li>
          <li><span class="lane">Creators</span><span><b>Reaction creators post the reveal:</b> comics creators, Filipino creators and cosplayers already at the Con, who wear the look on the floor and post from their own accounts.</span></li>
          <li><span class="lane">Clipping</span><span><b>Shoot footage to clippers before the reveal</b>, so the first wave of clips lands the same day.</span></li>
          <li><span class="lane">Paid</span><span><b>Boost the reveal</b> on Meta and TikTok Spark Ads across Los Angeles and the diaspora markets, with comics and collectibles interest layered in for the weekend.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 03</span><h3>Bridge</h3><span class="when">Nov 2 to Nov 12</span><p class="goal">Keep the cover in feeds every day and start the sound before the song is out.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>#KILLSHOTREDRAW</b>: line art released for artists to draw the cover in their own style. Todd stitches his favorites; the best get a signed print.</span></li>
          <li><span class="lane red">Organic</span><span><b>Cover breakdown cuts</b> from the shoot: pencils, inks, color, in Todd's words.</span></li>
          <li><span class="lane">Clipping</span><span><b>Clipping campaign on the 15-second snippet</b> and the interview, so creators are already posting the sound when the song lands.</span></li>
          <li><span class="lane">Social PR</span><span><b>Second wave on art pages:</b> illustration and comic-art accounts share the best redraws.</span></li>
          <li><span class="lane">Paid</span><span><b>TikTok Spark Ads and Meta</b> on the strongest organic posts, building the retargeting pool for release week.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 04</span><h3>Release</h3><span class="when">Week of Nov 13</span><p class="goal">Convert everyone we reached into day-one streams.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Direct</span><span><b>Text and email the full list at release</b>: pre-savers and wallpaper sign-ups.</span></li>
          <li><span class="lane red">Organic</span><span><b>Official video premiere</b>, the motion-comic lyric video, the animated cover as Spotify Canvas, and a listening live on TikTok.</span></li>
          <li><span class="lane">Paid</span><span><b>Heaviest flight of the campaign</b> across Meta, TikTok and YouTube: retargeting reveal engagers and pre-savers first, then lookalikes and the diaspora markets.</span></li>
          <li><span class="lane">Clipping</span><span><b>Clippers switch to the released track</b> and the video.</span></li>
          <li><span class="lane">Creators</span><span><b>Second creator round</b> with the creators who posted the reveal, now on the song.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 05</span><h3>Sustain</h3><span class="when">Nov 16 onward</span><p class="goal">Hand the audience to the next chapter: the Killer Queens comic and the album.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>Fan reposts and cut-downs</b> for three weeks: covers, redraws and costumes.</span></li>
          <li><span class="lane red">Direct</span><span><b>Killer Queens comic preorder</b> opens to the list first. Under Billboard's smart media rules, an NFC comic that unlocks the album counts as an album sale, so this audience becomes the first buyers of a chart-eligible collectible.</span></li>
          <li><span class="lane">Paid</span><span><b>Retargeting into the preorder</b>: everyone who engaged with the reveal or the single.</span></li>
        </ul></div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="shoot">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>The Shoot</h2>
      <p class="desc">One session with Liza and Todd, planned so it feeds every lane. Shoot vertical, two cameras, lav mics on both, and the song on a speaker for the reaction moments.</p>
    </div>
    <div class="tablewrap">
      <table class="data">
        <thead><tr><th>#</th><th>Shot</th><th>What to capture</th><th>Becomes</th></tr></thead>
        <tbody>
          <tr><td class="h">01</td><td class="h">First look</td><td>Liza sees the finished cover for the first time. One take, no warning, both cameras on her face.</td><td>The reveal post, the strongest paid hook, clip one</td></tr>
          <tr><td class="h">02</td><td class="h">Todd at the board</td><td>Todd inking a detail of the cover, Liza watching over his shoulder. Tight on the brush.</td><td>Tease collab post, Canvas loop, B-roll</td></tr>
          <tr><td class="h">03</td><td class="h">The sit-down</td><td>Six to eight questions each: why he said yes, who the heroine is, what KILLSHOT is about, what she thought of Spawn, what he hears in the song.</td><td>The clipping library, 20 to 40 clips</td></tr>
          <tr><td class="h">04</td><td class="h">Cover walkthrough</td><td>Todd explains the cover from pencils to color, pointing at the art.</td><td>Cover breakdown series, comics press</td></tr>
          <tr><td class="h">05</td><td class="h">Todd hears the song</td><td>Liza plays him KILLSHOT. Capture his reaction start to finish.</td><td>Reaction hook, snippet launch</td></tr>
          <tr><td class="h">06</td><td class="h">60-second sketch swap</td><td>Todd sketches Liza in a minute; Liza sketches Todd. Show both drawings side by side.</td><td>The most shareable clip of the set</td></tr>
          <tr><td class="h">07</td><td class="h">Signing prints</td><td>Both signing a small run of prints at the table.</td><td>Redraw challenge prizes, giveaways</td></tr>
          <tr><td class="h">08</td><td class="h">Phone B-roll</td><td>Liza's own phone throughout: arrival, the studio, the two of them laughing.</td><td>Stories, the unpolished layer</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="amplify">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Amplification</h2>
      <p class="desc">Four lanes, all fed by the cover and the shoot.</p>
    </div>
    <div class="grid2">
      <div class="mech"><span class="k">Lane 01</span><h4>Clipping</h4><p>The shoot is cut into a library of 20 to 40 clips and handed to clippers before the reveal: the first look, Todd on drawing her, the sketch swap, his reaction to the song. <b>Clippers are paid on verified views</b> and move to the released track in release week.</p></div>
      <div class="mech"><span class="k">Lane 02</span><h4>Social PR</h4><p>Pages, not just press. Comics news, pop culture, anime and K-pop, Filipino entertainment and illustration accounts post the cover in a <b>coordinated two-hour drop wave</b> on Saturday, with a second wave on the best redraws.</p></div>
      <div class="mech"><span class="k">Lane 03</span><h4>Creators and reactions</h4><p>Three groups: <b>comics creators</b> reacting to Todd drawing a pop star, <b>Filipino creators</b> reacting to Liza getting a Spawn-creator cover, and <b>cosplay creators</b> who wear the look at the Con and on Halloween.</p></div>
      <div class="mech"><span class="k">Lane 04</span><h4>Paid media</h4><p>Boosts the best organic posts instead of making separate ads, so paid always runs behind proof. Weighted to release week. Detail in section 05.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="plays">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Comic Culture Plays</h2>
      <p class="desc">Low-lift ideas that work because the cover is real comic art. Each one uses assets we already have.</p>
    </div>
    <div class="grid3">
      <div class="card"><div class="top"><span class="cn">01</span><span class="tag">Highest upside</span></div><h4>#KILLSHOTREDRAW</h4><p>"Draw this in your style" is one of the most reliable formats in the art community. Release the line art, invite artists to redraw it, and let Todd stitch his favorites. <b>Every redraw is a new post about the single</b> from an account we did not have to pay.</p></div>
      <div class="card"><div class="top"><span class="cn">02</span><span class="tag">Timing</span></div><h4>The Halloween costume</h4><p>Con weekend is Halloween weekend. A simple, buildable look (black, red scarf) turns the cover into a costume, and costume videos keep posting after the weekend ends.</p></div>
      <div class="card"><div class="top"><span class="cn">03</span><span class="tag">Collector language</span></div><h4>Variant covers</h4><p>Comics fans collect variants. Release a sketch variant and an ink variant of the cover as wallpapers and swap the streaming artwork on release week. Same art, three moments.</p></div>
      <div class="card"><div class="top"><span class="cn">04</span><span class="tag">Release week</span></div><h4>Motion-comic lyric video</h4><p>The lyrics told in comic panels, built from the cover art. Cheap to make, native to both audiences, and a second video for release week.</p></div>
      <div class="card"><div class="top"><span class="cn">05</span><span class="tag">List building</span></div><h4>Line art for a number</h4><p>Free phone wallpapers and a printable coloring page of the line art, unlocked with a phone number or email. The list we text on release day.</p></div>
      <div class="card"><div class="top"><span class="cn">06</span><span class="tag">Todd's audience</span></div><h4>Collab posts with Todd</h4><p>Every key post goes up as a collab on both accounts, so it reaches Todd's followers and the Spawn fan pages that repost him, without buying that audience.</p></div>
      <div class="card"><div class="top"><span class="cn">07</span><span class="tag">Community</span></div><h4>Fan communities</h4><p>The story posted natively where comics and Filipino fans already talk, including Reddit, framed as the crossover it is. The most interesting angle wins there, not the most promotional one.</p></div>
      <div class="card"><div class="top"><span class="cn">08</span><span class="tag">Optional</span></div><h4>LED truck downtown</h4><p>A mobile LED billboard with the cover and the pre-save on the streets around the convention center Saturday and Sunday. Visible to Con traffic without involving the Con, and it photographs well.</p></div>
      <div class="card"><div class="top"><span class="cn">09</span><span class="tag">Press angle</span></div><h4>The interview as the story</h4><p>"Todd McFarlane on drawing Liza Soberano" is a headline comics press will run. One exclusive with the best quotes from the sit-down, timed to the reveal.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="paid">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
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
          <tr><td class="h">01 Tease</td><td>Pre-saves and sign-ups</td><td>Meta</td><td class="r">$3,000</td><td class="r">$5,000</td></tr>
          <tr><td class="h">02 Reveal</td><td>Reach on the reveal</td><td>Meta, TikTok Spark Ads</td><td class="r">$2,500</td><td class="r">$5,000</td></tr>
          <tr><td class="h">03 Bridge</td><td>Video views and the retargeting pool</td><td>TikTok Spark Ads, Meta</td><td class="r">$4,500</td><td class="r">$9,000</td></tr>
          <tr><td class="h">04 Release</td><td>Day-one streams</td><td>Meta, TikTok, YouTube</td><td class="r">$7,000</td><td class="r">$14,000</td></tr>
          <tr><td class="h">05 Sustain</td><td>Streams and comic preorders</td><td>Meta and TikTok retargeting</td><td class="r">$3,000</td><td class="r">$7,000</td></tr>
          <tr class="tot"><td>Total media</td><td></td><td></td><td class="r">$20,000</td><td class="r">$40,000</td></tr>
        </tbody>
      </table>
    </div>
    <p class="tbl-note">Media spend only; clipping, social PR and creator fees are scoped separately. The Full option adds a Philippines heavy-up and YouTube in the bridge. Paid units lead with the art, Liza and Todd; frames that feature a weapon stay in organic, since Meta and TikTok restrict ads that show firearms.</p>
  </section>

  <section class="sec wrap" id="creative">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>Example Creative</h2>
      <p class="desc">Generated examples of the formats above. They show the direction; the final versions use Todd's real cover and the footage from the shoot.</p>
    </div>
    <p class="disclaim">Examples, directional only</p>
    <div class="cgrid">
      <div class="cr wide"><div class="media"><video src="/images/liza-killshot/ink-process.mp4" poster="/images/liza-killshot/ink-process.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Tease</span><h4>Ink to collab post</h4><p>The opening announcement: the cover being inked, with Liza's voice over it.</p></div></div>
      <div class="cr"><div class="media"><video src="/images/liza-killshot/cover-loop.mp4" poster="/images/liza-killshot/nfc-print.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Bridge</span><h4>Animated cover</h4><p>Canvas, visualizer and paid unit from one asset.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/redraw.jpg" alt="Example: KILLSHOT redraw challenge" /></div><div class="body"><span class="k">Comic play</span><h4>#KILLSHOTREDRAW</h4><p>Line art on top, a fan artist's version underneath.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/reaction-creator.jpg" alt="Example: creator reaction post" /></div><div class="body"><span class="k">Creators</span><h4>Reaction creator</h4><p>The hook every reaction post can lead with.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/motion-comic.jpg" alt="Example: motion-comic lyric video frame" /></div><div class="body"><span class="k">Release</span><h4>Motion-comic lyric video</h4><p>The lyrics in panels, built from the cover art.</p></div></div>
      <div class="cr wide"><div class="media"><img src="/images/liza-killshot/led-truck.jpg" alt="Example: mobile LED billboard downtown" /></div><div class="body"><span class="k">Optional</span><h4>LED truck downtown</h4><p>The cover and the pre-save on the streets around the Con.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/cosplay-call.jpg" alt="Example: Halloween costume creators" /></div><div class="body"><span class="k">Creators</span><h4>Halloween costume</h4><p>Cosplay creators in the look, at the Con and on Halloween.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/presave-tile.jpg" alt="Example: pre-save tile" /></div><div class="body"><span class="k">Direct</span><h4>Pre-save tile</h4><p>The torn-paper reveal, carried into every pre-save ask.</p></div></div>
      <div class="cr"><div class="media"><img src="/images/liza-killshot/nfc-print.jpg" alt="Example: signed numbered print" /></div><div class="body"><span class="k">Comic play</span><h4>Signed print</h4><p>The prize for the best redraws and giveaways.</p></div></div>
    </div>
  </section>

  <section class="sec wrap" id="measure">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>Measurement</h2>
      <p class="desc">What we report, and when. Baselines are set at kickoff.</p>
    </div>
    <div class="kpis">
      <div class="mech"><span class="k">Capture</span><h4>Before release</h4><p>Pre-saves and list sign-ups, reported daily from the tease through the reveal weekend.</p></div>
      <div class="mech"><span class="k">Attention</span><h4>Reveal and bridge</h4><p>Views and shares on the reveal, page and press pickups, clip views, creator posts, redraw entries and posts using the snippet sound.</p></div>
      <div class="mech"><span class="k">Conversion</span><h4>Release and after</h4><p>First-week streams by market, saves, list click-through and comic preorders from the list.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="needs">
    <div class="sec-head">
      <div class="row"><span class="num">08</span><span class="ln"></span></div>
      <h2>Next Steps</h2>
      <p class="desc">What it takes to start the tease on Monday, October 26. Tap an item to mark it done.</p>
    </div>
    <div class="needs" id="needs-list">
      <div class="nd"><span class="bx"></span><div><h4>Release date</h4><p>Confirm November 13 (or November 20) so it can go in the reveal post.</p><span class="due">By Oct 24</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Shoot slot</h4><p>When Liza and Todd are together, and how long we have. Two hours covers the full shot list.</p><span class="due">By Oct 24</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Cover files</h4><p>Layered art, crops and line art, with Todd's approval for wallpapers, motion and the redraw challenge.</p><span class="due">By Oct 25</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Snippet</h4><p>A cleared 15 to 30 second cut for clipping and the official TikTok sound.</p><span class="due">By Oct 25</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Pre-save</h4><p>Pre-save link from the label; we build the wallpaper sign-up page.</p><span class="due">Live Oct 26</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Pages and creators</h4><p>Approve the drop-wave page list and the creator shortlist we send.</p><span class="due">By Oct 27</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Ad access</h4><p>Partner access to Liza's Meta and TikTok accounts, and Spark codes on the posts we boost.</p><span class="due">By Oct 27</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Video delivery</h4><p>Final delivery date for the official video, so release week can be built around it.</p><span class="due">By Oct 30</span></div></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Follower counts are from third-party trackers and current as of October 2026. Forgotten Island TikTok figures are from Crowd Control Digital's social listening on the film. LA Comic Con dates and 2025 attendance are from the Los Angeles Convention Center listing; the guest list is subject to change. Creative on this page is generated for direction only. Smart media album eligibility follows Billboard and Luminate rules as published in September 2026 and should be confirmed with the label before any chart-facing plan is set.</p>
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
