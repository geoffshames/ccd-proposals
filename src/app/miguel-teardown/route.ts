export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Miguel · "Damned" Competitive Teardown · Crowd Control Digital</title>
<meta name="description" content="What Miguel's peers are doing to turn a catalog moment into a movement, torn down frame by frame, with the exact shape of the content we want to make for Damned." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Miguel · Damned Competitive Teardown" />
<meta property="og:description" content="Peer song-promo, torn down frame by frame. Built by Crowd Control Digital." />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  @font-face{ font-family:N27; src:url('/brand/N27-Bold.otf') format('opentype'); font-weight:700;font-style:normal;font-display:swap; }
  :root{
    --bg:#0A0A0A; --card:#1A1A1A; --card-2:#141414; --elevated:#111111;
    --accent:#FD3737; --accent-dim:rgba(253,55,55,.10);
    --ink:#FAFAFA; --secondary:#777; --muted:rgba(255,255,255,.55);
    --line:#1e1e1e; --line-2:#2a2a2a; --line-hover:#333;
    --success:#4ADE80; --warning:#FBBF24; --gold:#E9C46A;
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
  *{scrollbar-width:thin;scrollbar-color:#1a1a1a transparent}
  .tex,.noise,.glow{position:fixed;inset:0;pointer-events:none;z-index:0}
  .tex{background-image:linear-gradient(rgba(51,51,51,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(51,51,51,.08) 1px,transparent 1px);background-size:80px 80px}
  .glow{background:radial-gradient(120% 75% at 50% -8%, rgba(253,55,55,.10), transparent 58%)}
  .mono{font-family:var(--fm);text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--muted)}
  .mono.dim{color:rgba(255,255,255,.42);font-size:10px}
  .accent{color:var(--accent)}
  .bar{height:2px;width:64px;background:var(--accent)}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 28px}

  /* gate */
  .gate{position:fixed;inset:0;z-index:90;display:flex;flex-direction:column;justify-content:space-between;padding:40px clamp(24px,6vw,90px);background:var(--bg);transition:opacity .6s ease, visibility .6s ease}
  .gate.open{opacity:0;visibility:hidden}
  .gate-row{display:flex;justify-content:space-between;gap:12px}
  .gate-center{flex:1;display:flex;flex-direction:column;justify-content:center;max-width:820px}
  .gate-title{font-family:var(--fh);font-size:clamp(3.4rem,13vw,10rem);line-height:.9;letter-spacing:-.02em;color:var(--ink)}
  .gate-center .bar{margin:26px 0 22px}
  .gate-sub{color:var(--muted);font-size:16px;margin:0 0 26px;max-width:520px}
  .gate-form{display:flex;gap:10px}
  .gate-form input{flex:1;max-width:260px;background:rgba(255,255,255,.04);border:1px solid var(--line-hover);color:var(--ink);padding:14px 18px;font-family:var(--fm);font-size:13px;letter-spacing:.28em;text-transform:uppercase;outline:none;transition:border-color .2s}
  .gate-form input:focus{border-color:var(--accent)}
  .gate-form button{background:var(--accent);color:#fff;border:0;padding:0 26px;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:background .2s}
  .gate-form button:hover{background:#ff4f4f}
  .gate-err{height:16px;margin-top:14px;color:var(--accent);opacity:0;transition:opacity .2s}
  .gate-err.show{opacity:1}
  .gate-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .gate-foot .fv{font-size:14px;color:var(--ink);margin-top:6px}
  .gate-foot .r{text-align:right}

  .shell{position:relative;z-index:1;opacity:0;transition:opacity .8s ease}
  body.unlocked .shell{opacity:1}

  /* cover */
  .cover{position:relative;min-height:88vh;display:flex;flex-direction:column;justify-content:space-between;padding:80px clamp(24px,5vw,96px) 56px;max-width:1340px;margin:0 auto;overflow:hidden}
  .cover-hero{position:absolute;inset:0;z-index:0;pointer-events:none}
  .cover-hero::before{content:"";position:absolute;inset:0;background:url('/images/miguel-damned/hero-bg.jpg') right center/cover no-repeat;filter:grayscale(.4) contrast(1.05) brightness(.92);opacity:.30;-webkit-mask-image:linear-gradient(90deg,transparent 0%,transparent 34%,rgba(0,0,0,.55) 64%,#000 100%);mask-image:linear-gradient(90deg,transparent 0%,transparent 34%,rgba(0,0,0,.55) 64%,#000 100%)}
  .cover-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--bg) 0%,transparent 20%,transparent 60%,var(--bg) 100%),radial-gradient(120% 85% at 82% 42%,rgba(253,55,55,.12),transparent 60%)}
  .cover-top,.cover-mid,.cover-foot{position:relative;z-index:1}
  @media(max-width:700px){.cover-hero::before{opacity:.18}}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:44px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(3.2rem,12vw,10.5rem);line-height:.9;letter-spacing:-.02em}
  .cover-title .sm{display:block;font-size:clamp(1.1rem,3vw,2.1rem);color:var(--accent);letter-spacing:.02em;margin-top:10px}
  .cover-subwrap{margin-top:28px;max-width:820px}
  .cover-subwrap .bar{margin-bottom:22px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-weight:700;font-size:clamp(1.35rem,2.6vw,2.05rem);line-height:1.14;letter-spacing:-.01em;margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin-top:34px}
  .cover-foot .cv{font-size:15px;color:var(--ink);margin-top:7px}

  /* nav */
  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.85);backdrop-filter:blur(14px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:var(--max);margin:0 auto;padding:12px 28px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
  .nb-brand{font-family:var(--fh);text-transform:uppercase;letter-spacing:.02em;font-size:15px}
  .nb-filters{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto}
  .chip{background:transparent;border:1px solid var(--line-2);color:var(--muted);font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding:8px 13px;cursor:pointer;transition:all .2s}
  .chip:hover{border-color:var(--line-hover);color:var(--ink)}
  .chip.active{background:var(--accent);border-color:var(--accent);color:#fff}

  /* context */
  .ctx{padding:56px 0 8px}
  .ctx h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px}
  .ctx .lead{color:var(--ink);font-size:18px;max-width:820px;margin:0 0 26px}
  .ctx .lead b{color:var(--accent)}
  .ctx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ctx-card{background:var(--card-2);border:1px solid var(--line-2);padding:20px 20px 22px}
  .ctx-card .k{font-family:var(--fm);text-transform:uppercase;letter-spacing:.14em;font-size:10px;color:var(--accent)}
  .ctx-card p{margin:8px 0 0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ctx-card p b{color:var(--ink)}
  .rule-line{margin:34px 0 0;border-top:1px solid var(--line-2);padding-top:16px;color:var(--muted);font-size:14px}
  .rule-line b{color:var(--ink)}

  /* section head */
  .sec{padding:52px 0 8px}
  .sec-head{display:flex;flex-direction:column;gap:8px;margin-bottom:26px}
  .sec-head .row{display:flex;align-items:center;gap:16px}
  .sec-head .num{font-family:var(--fm);font-size:13px;color:var(--accent);letter-spacing:.14em}
  .sec-head .ln{flex:1;height:1px;background:var(--line-2)}
  .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.4rem)}
  .sec-head .desc{color:var(--muted);font-size:15.5px;max-width:820px;margin:4px 0 0}

  /* cards */
  .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
  @media(max-width:900px){.grid{grid-template-columns:1fr}.ctx-grid{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line-2);padding:22px 22px 24px;display:flex;flex-direction:column;transition:border-color .3s,transform .3s,box-shadow .3s}
  .card:hover{border-color:rgba(253,55,55,.5);transform:translateY(-2px);box-shadow:0 10px 30px rgba(253,55,55,.07),0 2px 8px rgba(0,0,0,.4)}
  .card.hide{display:none}
  .card-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
  .play-num{font-family:var(--fm);font-size:12px;color:var(--secondary);letter-spacing:.14em}
  .lane-pill{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;padding:5px 9px;border:1px solid}
  .lane-catalog{color:var(--accent);border-color:rgba(253,55,55,.4);background:var(--accent-dim)}
  .lane-format{color:var(--gold);border-color:rgba(233,196,106,.35);background:rgba(233,196,106,.08)}
  .play-title{font-size:1.28rem;margin-bottom:8px;text-transform:none;letter-spacing:-.01em}
  .play-sub{font-size:13.5px;color:var(--muted);margin:0 0 16px}
  .play-sub b{color:var(--ink)}

  /* embed */
  .embed{position:relative;background:#000;border:1px solid var(--line-2);border-radius:2px;min-height:170px;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:16px}
  .embed.loaded{display:block;min-height:0;border:0;background:transparent;overflow:visible}
  .embed-btn{background:rgba(253,55,55,.12);border:1px solid rgba(253,55,55,.5);color:#fff;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.12em;padding:12px 18px;cursor:pointer;transition:background .2s;display:inline-flex;align-items:center;gap:9px}
  .embed-btn:hover{background:rgba(253,55,55,.24)}
  .embed-meta{position:absolute;bottom:8px;left:10px;font-family:var(--fm);font-size:9.5px;letter-spacing:.1em;color:var(--muted);text-transform:uppercase}
  .embed iframe{display:block;width:100%;max-width:325px;height:750px;margin:0 auto;border:0;background:#000;border-radius:2px}
  @media(max-width:360px){.embed iframe{height:720px}}

  /* teardown */
  .tear{display:flex;flex-direction:column;gap:12px;margin-bottom:16px}
  .tblock .tl{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--secondary);display:block;margin-bottom:3px}
  .tblock p{margin:0;font-size:14.5px;color:var(--ink);line-height:1.52}
  .tblock.why p{color:var(--muted)}

  .mig{margin-top:auto;background:var(--card-2);border-left:2px solid var(--accent);padding:14px 16px}
  .mig .ml{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--accent);display:block;margin-bottom:5px}
  .mig p{margin:0;font-size:14.5px;color:var(--ink);line-height:1.54}
  .card-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px}
  .also{font-size:12.5px;color:var(--secondary)}
  .also a{color:var(--muted);border-bottom:1px solid var(--line-hover)}
  .src{font-family:var(--fm);font-size:10.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted)}
  .src:hover{color:var(--accent)}

  /* slate */
  .slate{background:var(--card-2);border:1px solid var(--line-2);padding:30px clamp(20px,4vw,40px);margin-top:8px}
  .slate h3{font-size:1.5rem;text-transform:none;letter-spacing:-.01em;margin-bottom:6px}
  .slate .sd{color:var(--muted);font-size:15px;margin:0 0 22px;max-width:760px}
  .slate-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  @media(max-width:900px){.slate-grid{grid-template-columns:1fr}}
  .sl{background:var(--card);border:1px solid var(--line-2);padding:18px}
  .sl .k{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent)}
  .sl ul{margin:10px 0 0;padding-left:16px}
  .sl li{color:var(--muted);font-size:14px;line-height:1.5;margin-bottom:7px}
  .sl li b{color:var(--ink)}
  .slate .need{margin-top:20px;border-top:1px solid var(--line-2);padding-top:16px;color:var(--ink);font-size:15px}
  .slate .need b{color:var(--accent)}

  /* nav jump links */
  .nb-jump{display:flex;gap:16px;margin-left:18px}
  .nb-jump a{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
  .nb-jump a:hover{color:var(--accent)}
  @media(max-width:620px){.nb-jump{display:none}}

  /* engagement + data feature */
  .eng-intro{color:var(--ink);font-size:18px;max-width:880px;margin:0 0 24px;line-height:1.55}
  .eng-intro b{color:var(--accent)}
  .statstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 32px}
  @media(max-width:760px){.statstrip{grid-template-columns:repeat(2,1fr)}}
  .stat{background:var(--card-2);border:1px solid var(--line-2);padding:18px 18px}
  .stat .n{font-family:var(--fh);font-size:1.95rem;color:var(--ink);line-height:1}
  .stat .l{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;color:var(--secondary);margin-top:8px;display:block}
  .board{margin:0 0 36px}
  .board h3{font-size:1.2rem;text-transform:none;letter-spacing:-.01em;margin-bottom:4px}
  .board .cap{color:var(--muted);font-size:14px;margin:0 0 18px}
  .brow{display:grid;grid-template-columns:220px 1fr 58px;align-items:center;gap:14px;padding:10px 0;border-bottom:1px solid var(--line)}
  .brow .bl{font-size:14px;color:var(--ink)}
  .brow .bl .bn{font-family:var(--fm);font-size:9px;color:var(--secondary);letter-spacing:.06em;margin-left:6px}
  .brow .bt{position:relative;height:22px;background:rgba(255,255,255,.04);border:1px solid var(--line-2)}
  .brow .bf{position:absolute;top:0;bottom:0;left:0;background:linear-gradient(90deg,rgba(253,55,55,.9),rgba(253,55,55,.4))}
  .brow .bv{font-family:var(--fm);font-size:12.5px;color:var(--ink);text-align:right}
  @media(max-width:600px){.brow{grid-template-columns:120px 1fr 46px;gap:8px}.brow .bl .bn{display:none}}
  .tbl-controls{display:flex;gap:8px;margin:0 0 12px;align-items:center}
  .tablewrap{border:1px solid var(--line-2);overflow-x:auto;background:var(--card-2)}
  table.data{width:100%;border-collapse:collapse;font-size:13.5px;min-width:760px}
  table.data th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:right;padding:12px 12px;border-bottom:1px solid var(--line-2);cursor:pointer;white-space:nowrap;user-select:none;position:sticky;top:0;background:var(--card-2);z-index:2}
  table.data th.l{text-align:left}
  table.data th:hover{color:var(--ink)}
  table.data th.sorted{color:var(--accent)}
  table.data td{padding:11px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;color:var(--muted)}
  table.data td.l{text-align:left;color:var(--ink)}
  table.data tr:hover td{background:rgba(255,255,255,.02)}
  table.data td.hi{color:var(--success);font-weight:600}
  table.data td.lo{color:var(--accent);font-weight:600}
  .tbl-note{color:var(--secondary);font-size:12px;margin:12px 0 0;line-height:1.5}
  .principles{margin:36px 0 0;display:grid;gap:12px}
  .pr{background:var(--card);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:16px 18px}
  .pr .pn{font-family:var(--fm);font-size:10px;letter-spacing:.13em;color:var(--accent);text-transform:uppercase}
  .pr h4{text-transform:none;font-size:1.06rem;letter-spacing:-.01em;margin:5px 0 5px}
  .pr p{margin:0;color:var(--muted);font-size:14.5px;line-height:1.52}
  .pr p b{color:var(--ink)}
  /* methodology */
  .method{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  @media(max-width:900px){.method{grid-template-columns:1fr 1fr}}
  @media(max-width:600px){.method{grid-template-columns:1fr}}
  .mcard{background:var(--card-2);border:1px solid var(--line-2);padding:20px}
  .mcard .s{font-family:var(--fm);font-size:10px;letter-spacing:.13em;color:var(--accent);text-transform:uppercase}
  .mcard h4{text-transform:none;font-size:1.06rem;letter-spacing:-.01em;margin:7px 0 7px}
  .mcard p{margin:0;color:var(--muted);font-size:14px;line-height:1.55}
  .mcard p b{color:var(--ink)}

  footer{margin-top:56px;border-top:1px solid var(--line);padding:26px 0 60px}
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:900px}
  footer .fn b{color:var(--muted)}
  .toppad{padding-top:18px}
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>

<!-- GATE -->
<div class="gate" id="gate">
  <div class="gate-row"><span class="mono">Competitive Teardown</span><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">MIGUEL</div>
    <div class="bar"></div>
    <p class="gate-sub">"Damned" peer teardown, prepared by Crowd Control Digital. Enter the password to continue.</p>
    <form class="gate-form" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="gate-err mono" id="gateErr">Incorrect password</div>
  </div>
  <div class="gate-foot">
    <div><div class="mono dim">Partnership</div><div class="fv">Miguel × Crowd Control Digital</div></div>
    <div class="r"><div class="mono dim">Prepared By</div><div class="fv">Crowd Control Digital</div></div>
  </div>
</div>

<div class="shell">
  <!-- COVER -->
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><span class="mono">Competitive Teardown / Content References</span><span class="mono">July 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">MIGUEL<span class="sm">"DAMNED" / WHAT YOUR PEERS ARE DOING</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">Nine real posts where an artist put their own face on their own song, torn down frame by frame, each mapped to the exact content we want to make while "Damned" is surging.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The moment</div><div class="cv">"Damned" is doing roughly 650K streams a day, organically</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames / Co-Founder, CCD</div></div>
    </div>
  </section>

  <!-- NAV -->
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Miguel · Damned</a>
      <div class="nb-jump"><a href="#engagement">Engagement</a><a href="#method">Method</a></div>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">All 9</button>
        <button class="chip" data-f="catalog">Catalog plays</button>
        <button class="chip" data-f="format">Format steals</button>
      </div>
    </div>
  </div>

  <!-- CONTEXT -->
  <section class="ctx wrap">
    <h2>Why this, why now</h2>
    <p class="lead">"Damned" caught fire on its own. That is rare and it is <b>perishable</b>. The job is to get Miguel's face on the surge before fan edits own the moment, and to point that attention back at the catalog and the owned list. Everything below is a peer doing exactly that with one of their own records.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">The situation</span><p>An older Miguel record is outstreaming his new work, unpushed. The window to act like it is a moment, not an accident, is short.</p></div>
      <div class="ctx-card"><span class="k">The approach</span><p>Every reference here is an artist leaning into <b>their own</b> song, <b>their own</b> way: a reaction, a story, a live take, a milestone. Artist-led and authentic, not a polished ad.</p></div>
      <div class="ctx-card"><span class="k">What it takes from him</span><p>Mostly himself. Phone quality. Reaction and archival first. We brief and edit; he shoots light.</p></div>
    </div>
    <p class="rule-line">Each teardown below is grounded in <b>frame-level video AI</b> run on the actual clip: what literally happens in the first three seconds, how it is built, and why it works. View counts are current as of build.</p>
  </section>

  <!-- SECTION 1: CATALOG PLAYS -->
  <section class="sec wrap" id="catalog">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>Catalog Resurgence Plays</h2>
      <p class="desc">The closest matches to Miguel's situation: an artist leaning into an older record on purpose. Start here.</p>
    </div>
    <div class="grid" id="grid-catalog">

      <!-- Kehlani -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">Lead with the reaction</h3>
        <p class="play-sub">Kehlani · reacting to her own old record cycling her feed · <b>1.9M views</b> · Nov 2025</p>
        <div class="embed" data-id="7575755364767976718"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @kehlani</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>A close, phone-lit car selfie at night. She looks dead into the lens, half-smiles, lifts a ringed hand. No graphics. Her old record is already playing. Caption: "seen this sound on my timeline over and over... memories."</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>One continuous take. No cuts, no B-roll. The whole video is her lip-syncing her own catalog record straight to camera, close enough to read as a voice note.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It sells closeness, not polish. The caption frames it as genuine surprise, so it reads as the artist reacting to the moment, not pushing it. Lowest effort, highest trust format on this board.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>Miguel's first move should be exactly this: one phone-lit take, close, honest. "Y'all really brought this one back." No edit, no gloss, just him and the record he wrote. The most believable way to put his face on the surge.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@kehlani/video/7575755364767976718" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- PARTYNEXTDOOR -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">Let the fans carry it, then co-sign</h3>
        <p class="play-sub">PARTYNEXTDOOR · fan reactions to his 2013 catalog cut "TBH" · <b>16.8M views</b> · Jan 2026</p>
        <div class="embed" data-id="7591974224479194399"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @partynextdoor</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>Opens on a woman crying in a bathroom selfie, singing along. His vocal is already under it. No title card. You are inside someone's feeling before you know what the song is.</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>A fast montage of strangers reacting to the same song: a guy laughing and covering his face, a woman singing to camera with Arabic text on screen, someone twirling in a living room. Different faces, rooms, languages, one record.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It is proof-of-impact, not "here is my song." A 2013 catalog cut resurged, and instead of watching, he posted the evidence that it moves people. The artist co-signing the fan wave is what legitimizes the trend.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>"Damned" already has fans posting. We cut the best of them into one reaction montage and Miguel reposts it, plus a "Replying to" stitch of a standout clip. Cheap, and every fan featured reactivates their own audience.</p></div>
        <div class="card-foot"><span class="also">Also: his <a href="https://www.tiktok.com/@partynextdoor/video/7601246067522374942" target="_blank" rel="noopener">"Replying to" fan duet</a> (1.4M)</span><a class="src" href="https://www.tiktok.com/@partynextdoor/video/7591974224479194399" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Kali Uchis -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">Perform it live, let the room prove it</h3>
        <p class="play-sub">Kali Uchis · her 2023 catalog single "I Wish You Roses" live · <b>2.1M views</b> · Oct 2025</p>
        <div class="embed" data-id="7559286786921483550"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @kaliuchis</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>Full star image on frame one: white dress, glitter mic, saturated red backdrop, a giant flower stage. She is already singing the hook. Nothing to set up.</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>Close-up on her face, then the camera widens to reveal the flower stage and dancers, then pushes back in. Intimate to spectacle to intimate, all cut to the studio audio so the record stays the star.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>A live crowd singing an older single back is social proof you cannot fake. It reframes a catalog cut as a current moment, not a throwback.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>Miguel performing "Damned" live, or a one-take vocal-booth version, cut to the surging audio and captioned to name the song. He is touring grade. The room does the convincing.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@kaliuchis/video/7559286786921483550" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Leon Thomas throwback -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">04</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">Recontextualize your own lore</h3>
        <p class="play-sub">Leon Thomas · leaning on his old identity to pull fans into the catalog · <b>3.9M views</b> · May 2026</p>
        <div class="embed" data-id="7645322302078323982"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @leonthomas</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>A low, handheld club shot, sunglasses and beanie, he is just vibing. A full-screen caption does the work: "when they keep yelling andrew why are you in the TV but my name is Leon so I keep vibing."</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>A single punchline clip. The song rides under a caption-led joke about being recognized from his old Nickelodeon run. No performance, pure personality.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It collides two eras so new fans get a discovery jolt and dig backward. The song attaches to a personality beat people want to repost.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>Miguel has lore: the era, the album, the version of himself who made "Damned." A caption-led "wait, this is the same guy who..." beat turns new listeners into catalog spelunkers. His story, his terms, no nostalgia gimmick.</p></div>
        <div class="card-foot"><span class="also">Also: his <a href="https://www.tiktok.com/@leonthomas/video/7661385457036512525" target="_blank" rel="noopener">hit-into-deep-cut live mashup</a></span><a class="src" href="https://www.tiktok.com/@leonthomas/video/7645322302078323982" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Leon Thomas gold -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">05</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">Turn the milestone into the content</h3>
        <p class="play-sub">Leon Thomas · announcing his catalog single "Yes It Is" went gold · <b>258K views</b> · May 2026</p>
        <div class="embed" data-id="7636818542003866894"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @leonthomas</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>Onstage in a red suit, mic up. Caption and vocal land together: "this next record just went gold yesterday, and that's all because of y'all."</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>Announcement, then proof: crowd clapping, phones up, selfies, then a warm backstage coda. The claim is immediately backed by the room.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It makes the song an achievement event and implicates fans in the win. Not "stream this," but "this already matters and you did it."</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>When "Damned" crosses a line (a chart entry, a certification, a stream milestone), Miguel films the on-camera "I can't believe this old one just did THIS." A repeatable beat every time it clears a threshold, not a one-off.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@leonthomas/video/7636818542003866894" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Ari Lennox -->
      <article class="card" data-lane="catalog">
        <div class="card-top"><span class="play-num">06</span><span class="lane-pill lane-catalog">Catalog play</span></div>
        <h3 class="play-title">The anniversary receipts reel</h3>
        <p class="play-sub">Ari Lennox · 7 years of her catalog debut "Shea Butter Baby" · <b>legacy-tone reference</b> · May 2026</p>
        <div class="embed" data-id="7637279494226595085"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @arilennox</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>Ari to camera: "what's up, it's your girl Ari Lennox," with "7 YEARS OF SHEA BUTTER BABY" on screen, then a hard cut to Fallon holding up the album cover.</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>A receipts reel: her intro, third-party validation (Fallon), RIAA cert graphics, video moments, personality, all stacked fast over the catalog.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It sells the legacy around the song, not just the song. An anniversary gives a reason to repost older work and credits the fans who kept it alive. Lower reach here, included for the tone.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>A "story behind Damned," sincere and to camera, crediting the fans who brought it back. Tonally exact for a legacy artist reactivating a catalog record, and it doubles as an owned-audience ask.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@arilennox/video/7637279494226595085" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- SECTION 2: FORMAT STEALS -->
  <section class="sec wrap" id="format">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>Format Steals</h2>
      <p class="desc">Best-in-class artist-in-frame formats worth adapting, even though these clips are not strictly catalog. The structure is the takeaway.</p>
    </div>
    <div class="grid" id="grid-format">

      <!-- SZA -->
      <article class="card" data-lane="format">
        <div class="card-top"><span class="play-num">07</span><span class="lane-pill lane-format">Format steal</span></div>
        <h3 class="play-title">Answer the internet on camera</h3>
        <p class="play-sub">SZA · answering a viral trend prompt with her own archive · <b>1.2M views</b> · Mar 2026</p>
        <div class="embed" data-id="7619854402848918814"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @sza</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>A tight, windblown boat selfie, she is laughing. Top text: "SOS, what were u like in the 90s?" The song is already carrying underneath. No spoken answer.</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>The prompt hooks, then she answers with hyper-specific childhood photos (snorkel mask, witch costume, family shots). The record does the branding in the background.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The song rides under a format people already want to watch and share. She looks meme-literate and personal, and the track gets the reach of the trend.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>Miguel answers the "Damned" moment with his own archive: a trend prompt over old footage from that era, his record underneath. He looks in on the joke and the song travels on a native format. Adapt the format, not the cover itself.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@sza/video/7619854402848918814" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Steve Lacy -->
      <article class="card" data-lane="format">
        <div class="card-top"><span class="play-num">08</span><span class="lane-pill lane-format">Format steal</span></div>
        <h3 class="play-title">The lo-fi confessional</h3>
        <p class="play-sub">Steve Lacy · unfiltered talk-to-camera · <b>1.7M views</b> · Jul 2026</p>
        <div class="embed" data-id="7663677262784384287"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @steve.lacy</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>One dim, handheld close-up. He looks straight into the lens and just says his music is out, over and over, gesturing at his head. No text, no concept.</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>A single short take. The whole asset is his presence and eye contact. Zero production, on purpose.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Impossible to misread, and it reads as native, not marketing. The artist whose catalog broke on TikTok off-cycle uses the same voice to convert attention. His presence is the asset.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>A no-glam, phone-in-hand Miguel on "Damned" resurfacing: real surprise, a line about writing it, why it still hits. The opposite of a label asset, and the most likely to be believed.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@steve.lacy/video/7663677262784384287" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <!-- Daniel Caesar -->
      <article class="card" data-lane="format">
        <div class="card-top"><span class="play-num">09</span><span class="lane-pill lane-format">Format steal</span></div>
        <h3 class="play-title">Make it feel discovered</h3>
        <p class="play-sub">Daniel Caesar · a raw street pop-up performance · <b>19.9M views</b> · Jan 2026</p>
        <div class="embed" data-id="7599679434286746911"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok · @danielcaesar</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">First 3 seconds</span><p>Opens not on him but on the crowd: a packed street, phones up, someone climbing a lamppost to film. The live vocal is already going ("yesterday was feeling so good, now it's gone").</p></div>
          <div class="tblock"><span class="tl">How it is built</span><p>Proof of demand first, performer second. The camera pans across the crowd before it finds the small stage and the acoustic performance, so the song feels stumbled upon.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Leading with the crowd makes the song feel bigger than an ad. Once the stage is revealed it plays as discovered, not presented. Highest reach on the board.</p></div>
        </div>
        <div class="mig"><span class="ml">Make it "Damned"</span><p>A stripped "Damned" caught somewhere real (the studio session with Happy Perez, a backyard, an acoustic take) and shot so it feels caught, not staged. Just the voice and the room.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@danielcaesar/video/7599679434286746911" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- SECTION: WHAT DRIVES ENGAGEMENT -->
  <section class="sec wrap" id="engagement">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>What drives engagement</h2>
      <p class="desc">We widened the study to 21 verified artist-in-frame posts and pulled the live engagement on each. The pattern is blunt: format beats reach, and being a person beats selling.</p>
    </div>
    <p class="eng-intro">The most-viewed post in the whole set, a polished "link in bio" launch teaser at 6.3M views, had the <b>lowest</b> like-rate of all 21 at 2.6 percent. An intimate phone lip-sync at a tenth of the reach hit <b>23.5 percent</b> and a 4.5 percent share-rate. Reach without engagement is paid distribution. Engagement rate is whether anyone actually cared.</p>
    <div class="statstrip" id="statstrip"></div>
    <div class="board" id="board"></div>
    <div class="tbl-controls"><span class="mono">The full 21-post sample</span></div>
    <div class="tablewrap"><table class="data" id="engtable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
    <div class="principles">
      <div class="pr"><span class="pn">Principle 01</span><h4>Lead with a face and a premise in the first second</h4><p>Every high-like-rate clip opens on the artist plus an instantly legible idea: a reaction, a joke caption, a confession, an intimate lip-sync. The mid clips open on spectacle or a crowd that delays the reveal. <b>Leon Thomas (27%) and Steve Lacy (23%) both put a face and a hook on frame one.</b></p></div>
      <div class="pr"><span class="pn">Principle 02</span><h4>Raw out-engages polished; polish only pays once emotion or status is the story</h4><p>Selfie, car, dim-room, phone-shot content beats glossy assets for engagement. Polish works when it packages proof (a live crowd, a gold plaque, an anniversary), not when it is the whole pitch. <b>The one pure "sell" clip is dead last at 2.6%.</b></p></div>
      <div class="pr"><span class="pn">Principle 03</span><h4>Shares come from emotion, status, or a copyable template</h4><p>The biggest share-rates are intimate emotional lip-syncs people send to someone (Muni Long, 4.5%), shareable skits (Giveon, 1.8%), and simple copyable formats. Proud-repost status moments (milestones, anniversaries) add a second share engine.</p></div>
      <div class="pr"><span class="pn">Principle 04</span><h4>Catalog works when it is personal or participatory</h4><p>An older song travels when the artist embodies the rediscovery, reconnects it to their lore, or turns it into a format fans can join. <b>PARTYNEXTDOOR's 2013 catalog cut did 16.8M because he jumped into the trend himself.</b></p></div>
    </div>
  </section>

  <!-- SLATE -->
  <section class="sec wrap" id="slate">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>The slate we would shoot</h2>
      <p class="desc">The same nine plays, sequenced by how easy they are to capture. Reaction and archival first, everything light.</p>
    </div>
    <div class="slate">
      <h3>Sequenced by lift</h3>
      <p class="sd">Miguel self-produces and we brief and edit, so this is built around what he can grab on a phone or in an easy session, not a shoot day.</p>
      <div class="slate-grid">
        <div class="sl"><span class="k">This week · phone, no crew</span><ul>
          <li><b>The reaction take</b> (Kehlani): the honest "y'all brought this back" selfie. Post it first.</li>
          <li><b>Fan-montage repost</b> (PARTYNEXTDOOR): we cut the fan clips, he reposts plus one "Replying to" stitch.</li>
          <li><b>Lo-fi confessional</b> (Steve Lacy): 15 seconds, straight to camera, the story of the song.</li>
        </ul></div>
        <div class="sl"><span class="k">Next capture · easy session</span><ul>
          <li><b>One-take "Damned"</b> (Kali Uchis / Daniel Caesar): live or booth, cut to the surging audio.</li>
          <li><b>Archive trend answer</b> (SZA): a native trend prompt over old footage from the era.</li>
        </ul></div>
        <div class="sl"><span class="k">On a trigger</span><ul>
          <li><b>Milestone reaction</b> (Leon gold): filmed when "Damned" clears a chart or cert line.</li>
          <li><b>Lore / origin beat</b> (Leon throwback): the era and album "Damned" came from.</li>
          <li><b>Anniversary / story</b> (Ari Lennox): sincere, fan-credited, doubles as an owned-audience ask.</li>
        </ul></div>
      </div>
      <p class="need">What we need from Miguel: <b>himself, mostly.</b> We write the brief and cut the edit. He shoots light, on his own terms, on his own record.</p>
    </div>
  </section>

  <!-- SECTION: METHODOLOGY -->
  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Methodology</h2>
      <p class="desc">How this was built, so the reasoning is auditable and repeatable, not a taste call.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / Comp set</span><h4>Three peer lanes</h4><p>We sampled across core alt-R&B contemporaries, bigger crossover acts, and pure catalog-resurgence cases, so the read is not skewed to one tier. Artists were chosen for lane fit and for being active with artist-in-frame promo.</p></div>
      <div class="mcard"><span class="s">02 / Sourcing</span><h4>Real posts, verified live</h4><p>Every clip is a real post pulled from the artist's official account with its live stats. Each URL was verified embeddable before it went on this page. Nothing here is a mockup or a dead link.</p></div>
      <div class="mcard"><span class="s">03 / Frame-level analysis</span><h4>Video AI on the actual footage</h4><p>The featured clips were downloaded and run through TwelveLabs video AI (Pegasus and Marengo), so the first-three-seconds, beat structure, and why-it-works reads describe what literally happens on screen, not captions or guesswork.</p></div>
      <div class="mcard"><span class="s">04 / Engagement data</span><h4>Live platform metrics</h4><p>Plays, likes, comments, and shares were pulled from each post and used to compute like-rate and share-rate. The 21-post sample is the basis for the engagement ranking above. Counts drift; they are current as of build.</p></div>
      <div class="mcard"><span class="s">05 / Approach</span><h4>Artist-led by design</h4><p>Every recommendation keeps Miguel in frame on his own terms, reaction and archival first, and light to shoot. We brief and edit; he shoots.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> View counts are current as of July 21, 2026 and will drift. Every clip was verified live and embeddable at build. Frame-level teardowns were produced with TwelveLabs video AI (Pegasus and Marengo) run on the downloaded clips, not on captions alone. Format-steal examples are not strictly catalog records; they are included because the structure travels.</p>
  </footer>
</div>

<script>
(function(){
  var PASS="CAOS";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});

  // filters
  var chips=document.querySelectorAll('#filter .chip');
  var cards=document.querySelectorAll('.card');
  var secCat=document.getElementById('catalog'), secFmt=document.getElementById('format');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('active');});c.classList.add('active');
    var f=c.getAttribute('data-f');
    cards.forEach(function(card){card.classList.toggle('hide', f!=='all' && card.getAttribute('data-lane')!==f);});
    secCat.style.display=(f==='format')?'none':'';
    secFmt.style.display=(f==='catalog')?'none':'';
  });});

  // click-to-load TikTok embeds
  document.querySelectorAll('.embed').forEach(function(box){
    var btn=box.querySelector('.embed-btn');
    if(!btn)return;
    btn.addEventListener('click',function(){
      var id=box.getAttribute('data-id');
      box.classList.add('loaded');
      box.innerHTML='<iframe src="https://www.tiktok.com/embed/v2/'+id+'" allow="encrypted-media;" allowfullscreen loading="lazy"></iframe>';
    });
  });
})();

(function(){
  var DATA=[
    {a:"Kehlani",f:"Reaction / talk-to-camera",lane:"Catalog",p:1917432,l:255300,c:3516,sh:3573,d:"2025-11-23",on:1},
    {a:"PARTYNEXTDOOR",f:"Trend / fan repost",lane:"Catalog",p:16792236,l:1938554,c:4025,sh:49900,d:"2026-01-05",on:1},
    {a:"Kali Uchis",f:"Live performance",lane:"Catalog",p:2079466,l:221358,c:710,sh:6835,d:"2025-10-09",on:1},
    {a:"Leon Thomas",f:"Reaction / talk-to-camera",lane:"Catalog",p:3885806,l:1065048,c:1735,sh:37681,d:"2026-05-29",on:1},
    {a:"Leon Thomas",f:"Milestone / anniversary",lane:"Catalog",p:257932,l:32170,c:356,sh:568,d:"2026-05-06",on:1},
    {a:"Ari Lennox",f:"Milestone / anniversary",lane:"Catalog",p:13106,l:1358,c:59,sh:36,d:"2026-05-07",on:1},
    {a:"SZA",f:"Trend / fan repost",lane:"New",p:1244164,l:143759,c:976,sh:2085,d:"2026-03-21",on:1},
    {a:"Steve Lacy",f:"Reaction / talk-to-camera",lane:"New",p:1771755,l:401469,c:5619,sh:27754,d:"2026-07-18",on:1},
    {a:"Daniel Caesar",f:"Live performance",lane:"New",p:19860311,l:2423231,c:3740,sh:230664,d:"2026-01-26",on:1},
    {a:"PARTYNEXTDOOR",f:"Intimate lip-sync",lane:"Catalog",p:13182839,l:2147049,c:2627,sh:41027,d:"2026-03-17",on:0},
    {a:"Tyla",f:"Intimate lip-sync",lane:"New",p:3831487,l:640450,c:3642,sh:41014,d:"2026-07-12",on:0},
    {a:"Giveon",f:"Skit / story",lane:"New",p:2804977,l:440734,c:1645,sh:26093,d:"2026-04-10",on:0},
    {a:"Giveon",f:"Skit / story",lane:"New",p:2250047,l:417812,c:2116,sh:41479,d:"2026-05-01",on:0},
    {a:"Coco Jones",f:"Intimate lip-sync",lane:"New",p:1784401,l:356731,c:518,sh:31051,d:"2026-03-26",on:0},
    {a:"Muni Long",f:"Reaction / talk-to-camera",lane:"New",p:1732286,l:282104,c:1095,sh:13856,d:"2026-07-11",on:0},
    {a:"PARTYNEXTDOOR",f:"Intimate lip-sync",lane:"New",p:1728779,l:193896,c:1216,sh:13069,d:"2025-12-16",on:0},
    {a:"PARTYNEXTDOOR",f:"Trend / fan repost",lane:"Catalog",p:1423066,l:182143,c:408,sh:2151,d:"2026-01-30",on:0},
    {a:"Muni Long",f:"Intimate lip-sync",lane:"New",p:711607,l:167272,c:3741,sh:31934,d:"2026-07-13",on:0},
    {a:"Coco Jones",f:"Polished launch teaser",lane:"New",p:6269073,l:161570,c:704,sh:1564,d:"2026-02-18",on:0},
    {a:"Leon Thomas",f:"Reaction / talk-to-camera",lane:"New",p:754002,l:121568,c:870,sh:4809,d:"2026-05-02",on:0},
    {a:"Victoria Monet",f:"Live performance",lane:"Catalog",p:627447,l:114466,c:1029,sh:3851,d:"2026-06-30",on:0}
  ];
  DATA.forEach(function(r){r.lr=r.p?r.l/r.p*100:0;r.sr=r.p?r.sh/r.p*100:0;});
  function fmt(n){if(n>=1e6)return (n/1e6).toFixed(1)+'M';if(n>=1e3)return (n/1e3).toFixed(n>=1e5?0:1)+'K';return ''+n;}
  function pct1(n){return n.toFixed(1)+'%';}

  var totalViews=0,maxLr=0,maxSr=0,minLr=999;
  DATA.forEach(function(r){totalViews+=r.p;if(r.lr>maxLr)maxLr=r.lr;if(r.sr>maxSr)maxSr=r.sr;if(r.lr<minLr)minLr=r.lr;});
  var ss=document.getElementById('statstrip');
  if(ss){ss.innerHTML=
    '<div class="stat"><div class="n">21</div><span class="l">Posts analyzed</span></div>'+
    '<div class="stat"><div class="n">'+fmt(totalViews)+'</div><span class="l">Combined views</span></div>'+
    '<div class="stat"><div class="n">'+pct1(maxLr)+'</div><span class="l">Top like-rate</span></div>'+
    '<div class="stat"><div class="n">'+maxSr.toFixed(1)+'%</div><span class="l">Top share-rate</span></div>';}

  var groups={};
  DATA.forEach(function(r){(groups[r.f]=groups[r.f]||[]).push(r.lr);});
  var board=Object.keys(groups).map(function(k){var arr=groups[k];var avg=arr.reduce(function(a,b){return a+b;},0)/arr.length;return {k:k,avg:avg,n:arr.length};});
  board.sort(function(a,b){return b.avg-a.avg;});
  var bmax=board.length?board[0].avg:1;
  var bd=document.getElementById('board');
  if(bd){var h='<h3>Formats ranked by average like-rate</h3><p class="cap">Average likes-per-view across every post in that format bucket. Personality and lip-sync formats lead; the pure launch teaser is last.</p>';
    board.forEach(function(g){var w=(g.avg/bmax*100).toFixed(1);
      h+='<div class="brow"><div class="bl">'+g.k+'<span class="bn">'+g.n+' post'+(g.n>1?'s':'')+'</span></div><div class="bt"><div class="bf" style="width:'+w+'%"></div></div><div class="bv">'+g.avg.toFixed(1)+'%</div></div>';});
    bd.innerHTML=h;}

  var cols=[{k:'a',t:'Artist',l:1},{k:'f',t:'Format',l:1},{k:'lane',t:'Lane',l:1},{k:'p',t:'Plays'},{k:'l',t:'Likes'},{k:'lr',t:'Like %'},{k:'sh',t:'Shares'},{k:'sr',t:'Share %'},{k:'d',t:'Date',l:1}];
  var tbl=document.getElementById('engtable');
  var sortKey='lr',sortDir=-1;
  function draw(){
    var rows=DATA.slice().sort(function(a,b){var x=a[sortKey],y=b[sortKey];if(typeof x==='string'){return sortDir*x.localeCompare(y);}return sortDir*(x-y);});
    var h='<thead><tr>';
    cols.forEach(function(c){h+='<th class="'+(c.l?'l ':'')+(c.k===sortKey?'sorted':'')+'" data-k="'+c.k+'">'+c.t+(c.k===sortKey?(sortDir<0?' \\u25BC':' \\u25B2'):'')+'</th>';});
    h+='</tr></thead><tbody>';
    rows.forEach(function(r){
      h+='<tr>'+
        '<td class="l">'+(r.on?'<span style="color:var(--accent)">\\u25CF</span> ':'')+r.a+'</td>'+
        '<td class="l">'+r.f+'</td>'+
        '<td class="l">'+r.lane+'</td>'+
        '<td>'+fmt(r.p)+'</td>'+
        '<td>'+fmt(r.l)+'</td>'+
        '<td class="'+(r.lr===maxLr?'hi':(r.lr===minLr?'lo':''))+'">'+r.lr.toFixed(1)+'%</td>'+
        '<td>'+fmt(r.sh)+'</td>'+
        '<td class="'+(r.sr===maxSr?'hi':'')+'">'+r.sr.toFixed(2)+'%</td>'+
        '<td>'+r.d+'</td>'+
      '</tr>';});
    h+='</tbody>';
    tbl.innerHTML=h;
    tbl.querySelectorAll('th').forEach(function(th){th.addEventListener('click',function(){var k=th.getAttribute('data-k');if(k===sortKey){sortDir=-sortDir;}else{sortKey=k;sortDir=(k==='a'||k==='f'||k==='lane'||k==='d')?1:-1;}draw();});});
  }
  if(tbl)draw();
  var note=document.getElementById('tblnote');
  if(note){note.innerHTML='\\u25CF marks the nine clips featured in the teardown above. Click any column to sort. Like-rate = likes / plays; share-rate = shares / plays. Metrics current as of build (July 2026) and will drift.';}
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
