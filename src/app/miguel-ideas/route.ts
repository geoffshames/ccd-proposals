export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Miguel · Marketing &amp; Content Ideas · Crowd Control Digital</title>
<meta name="description" content="A living board of content concepts for Miguel. Each idea: what it is, how we make it unmistakably Miguel, what it moves, and a reference." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Miguel · Marketing & Content Ideas" />
<meta property="og:description" content="A living board of content concepts. Built by Crowd Control Digital." />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  /* ===== CCD brand system (matches ccd-proposals globals.css) ===== */
  @font-face{
    font-family:N27;
    src:url('/brand/N27-Bold.otf') format('opentype');
    font-weight:700;font-style:normal;font-display:swap;
  }
  :root{
    --bg:#0A0A0A;
    --card:#1A1A1A;
    --card-hover:#2A2A2A;
    --elevated:#111111;
    --accent:#FD3737;
    --accent-dim:rgba(253,55,55,.10);
    --ink:#FAFAFA;
    --secondary:#777777;
    --muted:rgba(255,255,255,.55);
    --line:#1e1e1e;
    --line-2:#2a2a2a;
    --line-hover:#333333;
    --success:#4ADE80;
    --warning:#FBBF24;
    --fh:'N27','Work Sans',sans-serif;
    --fs:'Work Sans',system-ui,-apple-system,sans-serif;
    --fm:'Geist Mono',ui-monospace,SFMono-Regular,Menlo,monospace;
    --max:1160px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    margin:0;background-color:var(--bg);color:var(--ink);
    font-family:var(--fs);font-size:17px;line-height:1.6;
    -webkit-font-smoothing:antialiased;overflow-x:hidden;
  }
  body.locked{overflow:hidden;height:100vh}
  a{color:inherit;text-decoration:none}
  h1,h2,h3,h4{font-family:var(--fh);font-weight:700;text-transform:uppercase;letter-spacing:-.01em;margin:0;line-height:1.02}
  ::selection{background:rgba(253,55,55,.25);color:#fff}
  *{scrollbar-width:thin;scrollbar-color:#1a1a1a transparent}

  /* texture layers */
  .tex,.noise,.glow{position:fixed;inset:0;pointer-events:none;z-index:0}
  .tex{background-image:linear-gradient(rgba(51,51,51,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(51,51,51,.08) 1px,transparent 1px);background-size:80px 80px}
  .noise{z-index:9999;opacity:.9;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.02'/%3E%3C/svg%3E");background-size:256px}
  .glow{background:radial-gradient(120% 75% at 50% -8%, rgba(253,55,55,.10), transparent 58%)}

  .mono{font-family:var(--fm);text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--muted)}
  .mono.dim{color:rgba(255,255,255,.42);font-size:10px}
  .accent{color:var(--accent)}
  .bar{height:2px;width:64px;background:var(--accent)}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 28px}

  /* ccd-card */
  .ccd-card{background:var(--card);border:1px solid var(--line-2);transition:all .3s cubic-bezier(.22,1,.36,1)}
  .ccd-card:hover{border-color:rgba(253,55,55,.55);box-shadow:0 8px 24px rgba(253,55,55,.08),0 2px 8px rgba(0,0,0,.4);transform:translateY(-2px)}
  /* corner frame */
  .frame{position:relative}
  .frame::before,.frame::after{content:"";position:absolute;width:18px;height:18px;border-color:var(--line-2);border-style:solid;pointer-events:none;transition:border-color .5s}
  .frame::before{top:-1px;left:-1px;border-width:1px 0 0 1px}
  .frame::after{bottom:-1px;right:-1px;border-width:0 1px 1px 0}
  .frame:hover::before,.frame:hover::after{border-color:var(--accent)}

  /* ===== password gate ===== */
  .gate{position:fixed;inset:0;z-index:90;display:flex;flex-direction:column;justify-content:space-between;
    padding:40px clamp(24px,6vw,90px);background:var(--bg);
    transition:opacity .6s ease, visibility .6s ease}
  .gate.open{opacity:0;visibility:hidden}
  .gate-row{display:flex;justify-content:space-between;gap:12px}
  .gate-center{flex:1;display:flex;flex-direction:column;justify-content:center;max-width:760px}
  .gate-title{font-family:var(--fh);font-size:clamp(4rem,15vw,11rem);line-height:.9;letter-spacing:-.02em;color:var(--ink)}
  .gate-center .bar{margin:26px 0 22px}
  .gate-sub{color:var(--muted);font-size:16px;margin:0 0 26px;max-width:460px}
  .gate-form{display:flex;gap:10px}
  .gate-form input{flex:1;max-width:260px;background:rgba(255,255,255,.04);border:1px solid var(--line-hover);color:var(--ink);
    padding:14px 18px;font-family:var(--fm);font-size:13px;letter-spacing:.28em;text-transform:uppercase;outline:none;transition:border-color .2s}
  .gate-form input:focus{border-color:var(--accent)}
  .gate-form button{background:var(--accent);color:#fff;border:0;padding:0 26px;font-family:var(--fm);font-size:12px;
    text-transform:uppercase;letter-spacing:.14em;cursor:pointer;transition:background .2s}
  .gate-form button:hover{background:#ff4f4f}
  .gate-err{height:16px;margin-top:14px;color:var(--accent);opacity:0;transition:opacity .2s}
  .gate-err.show{opacity:1}
  .gate-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .gate-foot .fv{font-size:14px;color:var(--ink);margin-top:6px}
  .gate-foot .r{text-align:right}

  /* ===== shell reveal ===== */
  .shell{position:relative;z-index:1;opacity:0;transition:opacity .8s ease}
  body.unlocked .shell{opacity:1}

  /* ===== cover ===== */
  .cover{position:relative;min-height:92vh;display:flex;flex-direction:column;justify-content:space-between;
    padding:84px clamp(24px,5vw,96px) 64px;max-width:1320px;margin:0 auto}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:48px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(4rem,14vw,12rem);line-height:.9;letter-spacing:-.02em}
  .cover-subwrap{margin-top:30px;max-width:780px}
  .cover-subwrap .bar{margin-bottom:24px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-weight:700;font-size:clamp(1.5rem,3vw,2.25rem);line-height:1.12;letter-spacing:-.01em;color:var(--ink);margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:780px}
  .cover-foot .cv{font-size:15px;color:var(--ink);margin-top:7px}

  /* ===== sticky nav + filters ===== */
  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.85);backdrop-filter:blur(14px);
    border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:1320px;margin:0 auto;padding:0 clamp(16px,4vw,40px);height:56px;display:flex;align-items:center;gap:16px}
  .nb-brand{font-family:var(--fm);font-size:12px;letter-spacing:.18em;color:var(--muted);text-transform:uppercase;flex-shrink:0;transition:color .2s}
  .nb-brand:hover{color:var(--ink)}
  .nb-filters{display:flex;gap:7px;align-items:center;overflow-x:auto;flex:1;justify-content:center;scrollbar-width:none}
  .nb-filters::-webkit-scrollbar{display:none}
  .chip{font-family:var(--fm);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);
    background:transparent;border:1px solid var(--line-2);padding:7px 13px;cursor:pointer;white-space:nowrap;transition:all .18s}
  .chip:hover{border-color:var(--line-hover);color:var(--ink)}
  .chip.active{background:var(--accent);color:#fff;border-color:var(--accent)}
  .nb-cta{flex-shrink:0;font-family:var(--fm);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#fff;
    background:var(--accent);padding:9px 16px;transition:background .2s}
  .nb-cta:hover{background:#ff4f4f}

  /* ===== legend ===== */
  .legend{margin:64px auto 0;border:1px solid var(--line-2);background:var(--elevated);padding:30px clamp(22px,3vw,38px)}
  .legend h2{font-family:var(--fm);font-weight:600;font-size:12px;letter-spacing:.22em;color:var(--secondary);text-transform:uppercase;margin-bottom:10px}
  .legend p{margin:0 0 24px;color:var(--muted);max-width:780px;font-size:15.5px}
  .legend-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
  .lg{display:flex;gap:11px;align-items:flex-start}
  .lg .k{font-family:var(--fm);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);white-space:nowrap;margin-top:3px}
  .lg .t{font-size:13.5px;color:var(--muted)}
  .lg .t b{color:var(--ink);font-weight:600}

  /* ===== tiers ===== */
  .tier{padding:72px 0 8px}
  .tier-head{margin-bottom:8px}
  .tier-head .row{display:flex;align-items:baseline;gap:22px;margin-bottom:18px}
  .tier-head .num{font-family:var(--fm);font-size:12px;letter-spacing:.25em;color:var(--accent);text-transform:uppercase}
  .tier-head .rule{flex:1;height:1px;background:rgba(255,255,255,.16)}
  .tier-head h2{font-size:clamp(2.1rem,5vw,3.6rem)}
  .tier-head .desc{margin:14px 0 0;color:var(--muted);font-size:15.5px;max-width:680px}
  .tier-head .lift-pill{display:inline-block;font-family:var(--fm);font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:5px 11px;margin-left:2px}

  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(335px,1fr));gap:16px;margin-top:28px}

  /* ===== idea card ===== */
  .idea{padding:26px 24px 24px;display:flex;flex-direction:column;gap:15px;
    opacity:0;transform:translateY(20px);transition:opacity .6s cubic-bezier(.22,1,.36,1),transform .6s cubic-bezier(.22,1,.36,1),border-color .3s,box-shadow .3s}
  .idea.in{opacity:1;transform:none}
  .idea.hide{display:none}
  .idea-hero{position:relative;margin:-26px -24px 4px;overflow:hidden}
  .idea-hero img{width:100%;height:auto;display:block}
  .idea-hero .tagr{position:absolute;left:10px;bottom:10px;font-family:var(--fm);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.55);border:1px solid rgba(255,255,255,.18);padding:4px 8px;backdrop-filter:blur(4px)}
  .idea-top{display:flex;align-items:center;justify-content:space-between}
  .idea-num{font-family:var(--fm);font-size:12px;letter-spacing:.1em;color:var(--secondary)}
  .lift{font-family:var(--fm);font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:4px 9px}
  .lift-low{color:var(--success);background:rgba(74,222,128,.10)}
  .lift-med{color:var(--warning);background:rgba(251,191,36,.12)}
  .lift-high{color:var(--accent);background:rgba(253,55,55,.14)}
  .idea-title{font-size:21px;line-height:1.08}
  .concept{margin:0;color:var(--muted);font-size:14.5px}
  .seg-label{display:block;font-family:var(--fm);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);margin-bottom:8px}
  ol.mig{list-style:none;margin:0;padding:0;counter-reset:m}
  ol.mig li{counter-increment:m;position:relative;padding-left:26px;margin-bottom:7px;font-size:14px;color:var(--muted);line-height:1.5}
  ol.mig li::before{content:counter(m,decimal-leading-zero);position:absolute;left:0;top:2px;font-family:var(--fm);font-size:10px;letter-spacing:.06em;color:var(--accent)}
  .moves{margin:0;color:var(--muted);font-size:14px}
  .moves b,.concept b,ol.mig li b{color:var(--ink);font-weight:600}
  .tags{display:flex;flex-wrap:wrap;gap:6px}
  .tag{font-family:var(--fm);font-size:10px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);border:1px solid var(--line-2);padding:4px 9px}
  .refs{display:flex;flex-direction:column;gap:8px;margin-top:2px;padding-top:15px;border-top:1px solid var(--line)}
  .refs-label{font-family:var(--fm);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--secondary)}
  .ref{display:flex;align-items:center;gap:11px;padding:7px;transition:background .2s}
  .ref:hover{background:rgba(255,255,255,.03)}
  .ref img{width:74px;height:42px;object-fit:cover;background:#000;flex-shrink:0;filter:grayscale(1) contrast(1.05);opacity:.78;transition:filter .3s,opacity .3s}
  .ref:hover img{filter:grayscale(0);opacity:1}
  .ref .ri{display:flex;flex-direction:column;line-height:1.3;min-width:0}
  .ref .rt{font-size:13.5px;color:var(--ink);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ref .rs{font-family:var(--fm);font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--secondary)}
  .ref .badge{width:74px;height:42px;display:flex;align-items:center;justify-content:center;text-align:center;padding:4px;
    font-family:var(--fm);font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:var(--secondary);background:rgba(255,255,255,.03);border:1px solid var(--line-2);flex-shrink:0}
  .ref .arr{margin-left:auto;color:var(--secondary);flex-shrink:0;transition:color .2s}
  .ref:hover .arr{color:var(--accent)}
  .note{margin:0;font-size:12.5px;color:var(--muted);border-left:2px solid var(--accent);background:var(--accent-dim);padding:10px 13px;line-height:1.5}
  .note b{color:#ff6a4d;font-weight:700}

  /* ===== close / CTA ===== */
  .close-wrap{padding:84px 0 0}
  .close{padding:56px clamp(26px,4vw,48px);text-align:center}
  .close .eyebrow{font-family:var(--fm);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);display:block;margin-bottom:18px}
  .close h2{font-size:clamp(1.9rem,4.4vw,3.1rem);max-width:720px;margin:0 auto 18px;line-height:1.04}
  .close p{color:var(--muted);max-width:560px;margin:0 auto 30px;font-size:16px}
  .approve{display:inline-block;background:var(--accent);color:#fff;font-family:var(--fm);font-size:13px;letter-spacing:.12em;
    text-transform:uppercase;padding:16px 32px;transition:background .2s,transform .15s}
  .approve:hover{background:#ff4f4f;transform:translateY(-2px)}
  .close .cap{margin-top:18px}

  footer{margin-top:70px;border-top:1px solid var(--line);padding:30px 0 60px}
  .foot-in{max-width:var(--max);margin:0 auto;padding:0 28px;display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center}
  .foot-in span{font-family:var(--fm);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--secondary)}

  @media(max-width:640px){
    body{font-size:16px}
    .cover{min-height:auto;padding-top:64px}
    .nb-brand{display:none}
    .cover-foot{grid-template-columns:1fr;gap:18px}
    .grid{grid-template-columns:1fr}
  }
</style>
</head>
<body class="locked">
<div class="tex"></div>
<div class="glow"></div>
<div class="noise"></div>

<!-- ============ PASSWORD GATE ============ -->
<div class="gate" id="gate">
  <div class="gate-row">
    <span class="mono">Marketing &amp; Content Ideas</span>
    <span class="mono">Private</span>
  </div>
  <div class="gate-center">
    <div class="gate-title">MIGUEL</div>
    <div class="bar"></div>
    <p class="gate-sub">Concept board, prepared by Crowd Control Digital. Enter the password to continue.</p>
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

<!-- ============ SITE ============ -->
<div class="shell">

  <!-- COVER -->
  <section class="cover" id="cover">
    <div class="cover-top">
      <span class="mono">Marketing &amp; Content Ideas / Concept Board</span>
      <span class="mono">June 2026</span>
    </div>
    <div class="cover-mid">
      <h1 class="cover-title">MIGUEL</h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">A living board of content concepts. Every idea below comes with three ways to make it unmistakably his, a read on what it moves, and a real reference so you can see the shape of it.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">Partnership</div><div class="cv">Miguel × Crowd Control Digital</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames / Co-Founder, CCD</div></div>
    </div>
  </section>

  <!-- STICKY NAV + FILTERS -->
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#cover">Miguel</a>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">All</button>
        <button class="chip" data-f="streaming">Streaming</button>
        <button class="chip" data-f="tour">Touring</button>
        <button class="chip" data-f="merch">Merch</button>
        <button class="chip" data-f="crm">Fan CRM</button>
        <button class="chip" data-f="brand">Brand $</button>
        <button class="chip" data-f="social">Social</button>
      </div>
      <a class="nb-cta" href="#greenlight">Approve</a>
    </div>
  </div>

  <!-- LEGEND -->
  <div class="wrap">
    <div class="legend">
      <h2>How to read this</h2>
      <p>Concepts are grouped by lift: quick wins you can fire this week, mid-lift builds, and tentpole swings. Tags show the business lever each idea pulls. Filter the whole board by lever in the bar above. Every idea is backed by a real, clickable reference.</p>
      <div class="legend-grid">
        <div class="lg"><span class="k">Streaming</span><span class="t"><b>Streaming / catalog.</b> Plays, watch-time, catalog reactivation.</span></div>
        <div class="lg"><span class="k">Touring</span><span class="t"><b>Live / tour.</b> Demand, urgency, ticket pull.</span></div>
        <div class="lg"><span class="k">Merch</span><span class="t"><b>Merch / product.</b> Direct revenue and margin.</span></div>
        <div class="lg"><span class="k">Fan CRM</span><span class="t"><b>Owned audience.</b> Email and SMS capture into S1C and Hive.</span></div>
        <div class="lg"><span class="k">Brand $</span><span class="t"><b>Partnerships.</b> Outside budget, new reach.</span></div>
        <div class="lg"><span class="k">Social</span><span class="t"><b>Reach.</b> Clips, discovery, top of funnel.</span></div>
      </div>
    </div>
  </div>

  <!-- ============ TIER 1: QUICK WINS ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <div class="row"><span class="num">01</span><span class="rule"></span></div>
      <h2>Quick Wins</h2>
      <span class="tier-head lift-pill lift-low">Low lift / fire this week</span>
      <p class="desc">Cheap, fast, mostly AI or a single shoot. The point is volume and presence while the bigger swings get built.</p>
    </div>
    <div class="grid">

      <!-- 24hr stream -->
      <article class="ccd-card idea" data-levers="streaming crm social">
        <div class="idea-hero"><img src="/images/miguel-ideas/visualizer.jpg" alt="Concept render: a CAOS-styled 24-hour visualizer still" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">01</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The 24-Hour CAOS Stream</h3>
        <p class="concept">A looping visualizer livestream on YouTube: the album and catalog on repeat for 24 hours, launched on a keynote date (a holiday, summer break, the week of college finals).</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>Not a fireplace. A slow-burn "CAOS world" loop built off his stage-head asset.</li>
            <li>Drop it on a date he can own (NYE, Dia de los Muertos) so it reads as a moment, not wallpaper.</li>
            <li>Pin a join-S1C overlay so 24 hours of watch-time quietly becomes signups.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Always-on streams and watch-time for near-zero cost, evergreen catalog surfacing, and a passive funnel into the owned list.</p></div>
        <div class="tags"><span class="tag">Streaming</span><span class="tag">Fan CRM</span><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=Rik8YhvH09M" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/Rik8YhvH09M/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Cozy Fireplace Ambiance &amp; Lofi</span><span class="rs">YouTube · Lofi Fireplace</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=Tq7523sJc6I" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/Tq7523sJc6I/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Study With Me 24 Hours</span><span class="rs">YouTube · Mimi Lofi Chill</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- Obviously-fake AI bit -->
      <article class="ccd-card idea" data-levers="social">
        <div class="idea-hero"><img src="/images/miguel-ideas/ai-bit.jpg" alt="Concept render: the CAOS head headlining on the Moon" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">02</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The Obviously-Fake AI Bit</h3>
        <p class="concept">Cheeky, plainly-AI images of Miguel that everyone is in on. Not aspirational stadium shots (he already headlines those), but absurd, clearly-fake scenarios played for the joke.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>Put him somewhere impossible: headlining the Moon, performing inside a giant soda can, opening for himself in 1850.</li>
            <li>Lean into the AI-slop look on purpose, with a visible wink (a "100% real" caption, a sixth finger left in) so no one mistakes it for real.</li>
            <li>Let fans request the next absurd scene and render the winners.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Near-zero-cost social content with built-in shareability, personality, and a running bit fans start to anticipate.</p></div>
        <div class="tags"><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.instagram.com/hey_reilly/" target="_blank" rel="noopener"><span class="badge">AI Parody</span><span class="ri"><span class="rt">Hey Reilly</span><span class="rs">Instagram · clearly-a-joke AI edits</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- CAOS dropbox -->
      <article class="ccd-card idea" data-levers="crm social">
        <div class="idea-top"><span class="idea-num">03</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The CAOS Dropbox</h3>
        <p class="concept">A shared gallery where fans upload their own photos and video from the night, and Miguel keeps the content plus the contact info that comes with it.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A QR at every tour stop: "Upload your CAOS night" straight into a live gallery.</li>
            <li>Run it on FanVids, a standalone site, or an S1C.LA landing page, with email or phone capture on every upload.</li>
            <li>Best fan clips get reposted and featured, which feeds the next round of uploads.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Direct fan capture at the scale we want (the 23K-emails goal), a stream of authentic UGC, and a deeper sense of community.</p></div>
        <div class="tags"><span class="tag">Fan CRM</span><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.fanvids.io/" target="_blank" rel="noopener"><span class="badge">Fan UGC</span><span class="ri"><span class="rt">FanVids.io</span><span class="rs">Artist upload + first-party data</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- Street reaction -->
      <article class="ccd-card idea" data-levers="social streaming">
        <div class="idea-top"><span class="idea-num">04</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">Street Reactions</h3>
        <p class="concept">Man-on-the-street segments where strangers react to and try to name Miguel songs on a mic, filmed for short form. The "Track Star" format.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>Run it as a produced series about his music with a host, so it never reads as him busking.</li>
            <li>Feature deep cuts in tour cities to reactivate the catalog, not just the hits.</li>
            <li>Seed a few superfans for the emotional moments, end cards point to S1C.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">A cheap recurring social series, catalog rediscovery, and discovery among people who do not follow him yet.</p></div>
        <div class="tags"><span class="tag">Social</span><span class="tag">Streaming</span></div>
        <div class="refs"><span class="refs-label">References</span>
          <a class="ref" href="https://www.youtube.com/shorts/g9AhQvz_ABc" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/g9AhQvz_ABc/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Track Star street format</span><span class="rs">YouTube · Public Opinion NYC</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.instagram.com/p/DY8REAZphqm/" target="_blank" rel="noopener"><span class="badge">Reels</span><span class="ri"><span class="rt">Street listening clip</span><span class="rs">Instagram</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Scale check:</b> the host carries the bit, not Miguel. We own the format and feature his catalog, we do not put him on a corner.</p>
      </article>

      <!-- Family man post -->
      <article class="ccd-card idea" data-levers="social">
        <div class="idea-top"><span class="idea-num">05</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The "Family Man" Easter Egg</h3>
        <p class="concept">A single oversized-prop stunt post (think the Travis Scott giant-head moment) flipped into a warm, human beat that cuts against the chaos of the era.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A giant CAOS-head prop dropped into a calm domestic setting (kitchen, backyard, couch).</li>
            <li>Play the contrast: the chaos persona, off duty, being a person.</li>
            <li>One post, low production, high reshare.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Humanizes the brand, breaks up the feed, and tends to overperform on shares because the contrast is the joke.</p></div>
        <div class="tags"><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.billboard.com/music/music-news/travis-scott-knocked-over-during-concert-giant-head-prop-1235562734/" target="_blank" rel="noopener"><span class="badge">Stunt Prop</span><span class="ri"><span class="rt">Travis Scott giant head</span><span class="rs">Billboard · oversized-prop moment</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- Comedy tease tiktok -->
      <article class="ccd-card idea" data-levers="social streaming">
        <div class="idea-top"><span class="idea-num">06</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The Comedy Tease</h3>
        <p class="concept">A cheeky, deadpan comedy skit in the Dillon Francis vein that is secretly a stealth tease for an unreleased song.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>Miguel plays the joke straight: the chaos persona, deadpan, doing a dumb-funny bit.</li>
            <li>The punchline is the unreleased record, hiding in plain sight.</li>
            <li>Keep it native to TikTok, never an ad read.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Native-feeling TikTok reach, song discovery ahead of a drop, and personality that platforms reward.</p></div>
        <div class="tags"><span class="tag">Social</span><span class="tag">Streaming</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.tiktok.com/@dillonfrancis" target="_blank" rel="noopener"><span class="badge">Comedy DJ</span><span class="ri"><span class="rt">Dillon Francis</span><span class="rs">TikTok · deadpan musician bits</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Voice check:</b> only ships if it lands in Miguel's voice. A copy of someone else's bit reads as a copy.</p>
      </article>

      <!-- Plush speaker -->
      <article class="ccd-card idea" data-levers="merch social">
        <div class="idea-hero"><img src="/images/miguel-ideas/plush.jpg" alt="Concept render: a Miguel plush with a built-in speaker" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">07</span><span class="lift lift-low">Low lift</span></div>
        <h3 class="idea-title">The Miguel Plush (with a Speaker)</h3>
        <p class="concept">A plush of Miguel with a built-in Bluetooth speaker that plays his songs. A novelty drop that knows it is funny.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A CAOS-branded plush as a limited superfan drop, not a core line.</li>
            <li>Let the meme be the meme. The absurdity is the marketing.</li>
            <li>Unboxing and ASMR content plus a little influencer seeding.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Novelty merch revenue, strong giftability and virality, and the kind of oddity that earns press on its own.</p></div>
        <div class="tags"><span class="tag">Merch</span><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.oddgifts.com/products/boyfriend-pillow" target="_blank" rel="noopener"><span class="badge">Novelty · $24.95</span><span class="ri"><span class="rt">Boyfriend Pillow</span><span class="rs">OddGifts · plush with personality</span></span><span class="arr">↗</span></a>
        </div>
      </article>

    </div>
  </section>

  <!-- ============ TIER 2: BUILDS ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <div class="row"><span class="num">02</span><span class="rule"></span></div>
      <h2>Builds</h2>
      <span class="tier-head lift-pill lift-med">Medium lift / plan and produce</span>
      <p class="desc">A real shoot, a partner, or an ongoing operation. Higher payoff, worth scheduling against the priority window.</p>
    </div>
    <div class="grid">

      <!-- Box truck set -->
      <article class="ccd-card idea" data-levers="tour social streaming">
        <div class="idea-hero"><img src="/images/miguel-ideas/rolling-stage.jpg" alt="Concept render: a CAOS box-truck stage on an LA street at night" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">08</span><span class="lift lift-med">Medium lift</span></div>
        <h3 class="idea-title">The Rolling Stage</h3>
        <p class="concept">A surprise live set staged from a moving vehicle or a clear-sided box truck that rolls through a city, livestreamed and cut into clips.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A clear-side box truck as a rolling CAOS stage, parked outside the venue pre-show in tour markets.</li>
            <li>A stripped, candle-lit "in transit" version for a single, where the audio doubles as the visualizer.</li>
            <li>Tie the route to a release: the truck appears in LA, fans track it through an S1C drop.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Pre-show FOMO and ticket urgency in live markets, a pile of vertical clips, and a reason for fans to join S1C for the location.</p></div>
        <div class="tags"><span class="tag">Touring</span><span class="tag">Social</span><span class="tag">Streaming</span></div>
        <div class="refs"><span class="refs-label">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=-1hbtTolzCE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/-1hbtTolzCE/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">carRADIO set in a car</span><span class="rs">YouTube · heds</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=H_Z0Kv-LWkU" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/H_Z0Kv-LWkU/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Five Past Three visualizer</span><span class="rs">YouTube · The Chainsmokers</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Originality gate:</b> the DJ-in-a-car / U-Haul format is well-worn. We only ship if the Miguel version has its own visual signature (the CAOS world), not a remake of someone else's.</p>
      </article>

      <!-- Fan built MV -->
      <article class="ccd-card idea" data-levers="crm social streaming">
        <div class="idea-hero"><img src="/images/miguel-ideas/fan-mv.jpg" alt="Concept render: a CAOS green-screen submission booth at a show" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">09</span><span class="lift lift-med">Medium lift</span></div>
        <h3 class="idea-title">The Fan-Built Music Video</h3>
        <p class="concept">A pop-up, physical or digital, where fans create and design scenes that become part of an official video. Everything tracked through a custom hashtag.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>Fan-drawn frames over a CAOS track, crowdsourced the way the "Where Are Ü Now" video was.</li>
            <li>A physical green-screen booth at the LA show for in-person submissions.</li>
            <li>Submissions run through S1C, so every entry is also a captured contact.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Deep fan investment and UGC at scale, a built-in capture mechanic, and owned content that drives streams when the video lands.</p></div>
        <div class="tags"><span class="tag">Fan CRM</span><span class="tag">Social</span><span class="tag">Streaming</span></div>
        <div class="refs"><span class="refs-label">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=nntGTK2Fhb0" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/nntGTK2Fhb0/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Where Are Ü Now (fan art)</span><span class="rs">YouTube · Jack Ü</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=lY_0mkYDZDU" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/lY_0mkYDZDU/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Sit Next to Me</span><span class="rs">YouTube · Foster The People</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- AI brand film -->
      <article class="ccd-card idea" data-levers="brand social">
        <div class="idea-top"><span class="idea-num">10</span><span class="lift lift-med">Medium lift</span></div>
        <h3 class="idea-title">The AI Brand Film</h3>
        <p class="concept">An AI-generated story piece tied to a brand partner (a fashion or beauty house, in the YSL Beauty vein), rendered in the CAOS aesthetic.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>An AI "CAOS origin" short co-branded with a fashion or beauty partner.</li>
            <li>Build a recurring AI visual series so the look becomes a recognizable Miguel signature.</li>
            <li>Use the partner's channels to double the reach at no extra media cost.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Unlocks brand co-marketing budget, positions Miguel as an AI-native artist, and produces highly shareable visuals.</p></div>
        <div class="tags"><span class="tag">Brand $</span><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://www.instagram.com/reels/DZp-sKiCSvr/" target="_blank" rel="noopener"><span class="badge">AI Reel</span><span class="ri"><span class="rt">AI brand story timeline</span><span class="rs">Instagram · YSL Beauty style</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- HQ / fan page -->
      <article class="ccd-card idea" data-levers="crm social">
        <div class="idea-top"><span class="idea-num">11</span><span class="lift lift-med">Medium lift</span></div>
        <h3 class="idea-title">The "HQ" Account</h3>
        <p class="concept">A team-run fan/HQ-style page that lives in the culture and exists to feed discovery, not to replace Miguel's personal feed. The format that powers pages like the ones below.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A "CAOS HQ" page of team-curated clips, edits, and behind-the-curtain moments.</li>
            <li>Every bio and CTA funnels to S1C. It is a feeder, full stop.</li>
            <li>A daily cadence the team owns, so Miguel never has to touch it.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Discovery and algorithmic surface area without adding to Miguel's plate, all funneling into the owned audience.</p></div>
        <div class="tags"><span class="tag">Fan CRM</span><span class="tag">Social</span></div>
        <div class="refs"><span class="refs-label">References</span>
          <a class="ref" href="https://www.tiktok.com/@asapnorocky" target="_blank" rel="noopener"><span class="badge">Fan / HQ</span><span class="ri"><span class="rt">@asapnorocky</span><span class="rs">TikTok · fan / HQ page</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.tiktok.com/@howtfwefeelin" target="_blank" rel="noopener"><span class="badge">Fan / HQ</span><span class="ri"><span class="rt">@howtfwefeelin</span><span class="rs">TikTok · fan / HQ page</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.tiktok.com/@shes_a_hurricane" target="_blank" rel="noopener"><span class="badge">Fan / HQ</span><span class="ri"><span class="rt">@shes_a_hurricane</span><span class="rs">TikTok · fan / HQ page</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Guardrail:</b> the personal stays on S1C. The HQ page points to it and never competes with it.</p>
      </article>

      <!-- Hidden track -->
      <article class="ccd-card idea" data-levers="streaming merch crm">
        <div class="idea-hero"><img src="/images/miguel-ideas/vinyl.jpg" alt="Concept render: a numbered CAOS collector vinyl with the album cover" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">12</span><span class="lift lift-med">Medium lift</span></div>
        <h3 class="idea-title">Hidden Track + Collector Vinyl</h3>
        <p class="concept">A hidden track inside a reissue, plus a limited vinyl pressing that carries an exclusive cut from the new album.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A CAOS deluxe reissue with a hidden B-side, framed as new energy, not nostalgia.</li>
            <li>Numbered limited vinyl with an exclusive track, sold through S1C and Hive to capture superfans.</li>
            <li>A "find the hidden track" social hunt to drive the search.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Reactivates catalog streams, sells high-margin collector merch, and captures the highest-intent fans with their data.</p></div>
        <div class="tags"><span class="tag">Streaming</span><span class="tag">Merch</span><span class="tag">Fan CRM</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://pitchfork.com/news/72360-gorillaz-announce-new-demon-days-reissue/" target="_blank" rel="noopener"><span class="badge">Reissue</span><span class="ri"><span class="rt">Gorillaz, Demon Days reissue</span><span class="rs">Pitchfork · deluxe + collector vinyl</span></span><span class="arr">↗</span></a>
        </div>
      </article>

    </div>
  </section>

  <!-- ============ TIER 3: TENTPOLES ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <div class="row"><span class="num">03</span><span class="rule"></span></div>
      <h2>Tentpoles</h2>
      <span class="tier-head lift-pill lift-high">High lift / the big swings</span>
      <p class="desc">Budget, partners, and lead time required. These are the moments a quarter gets built around.</p>
    </div>
    <div class="grid">

      <!-- F&B partnership -->
      <article class="ccd-card idea" data-levers="brand social tour">
        <div class="idea-hero"><img src="/images/miguel-ideas/drink-can.jpg" alt="Concept render: a CAOS-palette co-branded soda can" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">13</span><span class="lift lift-high">High lift</span></div>
        <h3 class="idea-title">The Drink Deal</h3>
        <p class="concept">A beverage or food partnership with Miguel as the face, in the lineage of artist-and-brand deals like Travis Scott x McDonald's.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A culture-forward partner built on taste and craft, the kind of brand Miguel actually uses.</li>
            <li>A limited co-branded flavor or can in the CAOS palette.</li>
            <li>The deal funds content and sampling at tour stops.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">Non-music revenue, a new audience through the brand's distribution, and a content budget that is not ours to carry.</p></div>
        <div class="tags"><span class="tag">Brand $</span><span class="tag">Social</span><span class="tag">Touring</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://corporate.mcdonalds.com/corpmcd/our-stories/article/travis-scott-launch.html" target="_blank" rel="noopener"><span class="badge">Artist × F&amp;B</span><span class="ri"><span class="rt">Travis Scott × McDonald's</span><span class="rs">McDonald's · Cactus Jack Meal</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- Flying stage -->
      <article class="ccd-card idea" data-levers="tour social brand">
        <div class="idea-hero"><img src="/images/miguel-ideas/flying-stage.jpg" alt="Concept render: a flying CAOS stage above a Mexico City crowd" loading="lazy"/><span class="tagr">CCD concept render</span></div>
        <div class="idea-top"><span class="idea-num">14</span><span class="lift lift-high">High lift</span></div>
        <h3 class="idea-title">The Flying Stage, Mexico City</h3>
        <p class="concept">A suspended, flying-stage spectacle built around Miguel's October Mexico City Vogue moment.</p>
        <div><span class="seg-label">Make it Miguel</span>
          <ol class="mig">
            <li>A CAOS flying-stage reveal as the centerpiece of the Vogue moment.</li>
            <li>Cinematic capture engineered for one global content drop.</li>
            <li>Co-funded by a brand partner to share the cost.</li>
          </ol>
        </div>
        <div><span class="seg-label">What it moves</span><p class="moves">A tentpole spectacle that generates outsized PR and clip volume, and anchors the entire Q4 push.</p></div>
        <div class="tags"><span class="tag">Touring</span><span class="tag">Social</span><span class="tag">Brand $</span></div>
        <div class="refs"><span class="refs-label">Reference</span>
          <a class="ref" href="https://edm.com/music-releases/watch-footage-isoxo-knock2-dj-suspended-shipping-container-north-coast-festival/" target="_blank" rel="noopener"><span class="badge">Suspended Set</span><span class="ri"><span class="rt">ISOxo &amp; Knock2, crane-suspended booth</span><span class="rs">EDM.com · North Coast Festival</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Heads up:</b> high cost and dependent on a local production partner. Concept stage only until a partner is on board.</p>
      </article>

    </div>
  </section>

  <!-- CLOSING -->
  <section class="wrap close-wrap" id="greenlight">
    <div class="close ccd-card frame">
      <span class="eyebrow">Your move</span>
      <h2>Tell us the first three to build.</h2>
      <p>Pick the concepts you want live and we will turn them into shoot briefs, render decks, and a build schedule. The rest stay on the board, and we keep adding to it.</p>
      <a class="approve" href="mailto:geoff@crowdcontroldigital.com?subject=Miguel%20ideas%3A%20greenlight&body=The%20three%20we%20want%20first%3A%0A1.%20%0A2.%20%0A3.%20%0A%0ANotes%3A">Greenlight the first wave</a>
      <div class="mono dim cap">Replies notify Crowd Control Digital</div>
    </div>
  </section>

  <footer>
    <div class="foot-in">
      <span>Miguel × Crowd Control Digital · Marketing &amp; Content Ideas</span>
      <span>Private &amp; confidential</span>
    </div>
  </footer>

</div><!-- /shell -->

<script>
  // ===== password gate =====
  (function(){
    var PASS = "caos";
    var gate = document.getElementById('gate');
    var form = document.getElementById('gateForm');
    var input = document.getElementById('gateInput');
    var err = document.getElementById('gateErr');
    function unlock(){
      gate.classList.add('open');
      document.body.classList.remove('locked');
      document.body.classList.add('unlocked');
      setTimeout(function(){ if(gate){ gate.style.display='none'; } }, 650);
      initReveal();
    }
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(input.value.trim().toLowerCase() === PASS){ unlock(); }
      else { err.classList.add('show'); input.value=''; input.focus(); }
    });
    setTimeout(function(){ input.focus(); }, 400);
  })();

  // ===== filter =====
  (function(){
    var filter = document.getElementById('filter');
    var cards = Array.prototype.slice.call(document.querySelectorAll('.idea'));
    filter.addEventListener('click', function(e){
      var chip = e.target.closest('.chip');
      if(!chip) return;
      filter.querySelectorAll('.chip').forEach(function(c){ c.classList.remove('active'); });
      chip.classList.add('active');
      var f = chip.getAttribute('data-f');
      cards.forEach(function(card){
        var levers = card.getAttribute('data-levers') || '';
        var show = (f === 'all') || levers.indexOf(f) !== -1;
        card.classList.toggle('hide', !show);
      });
      document.querySelectorAll('.tier').forEach(function(t){
        var visible = t.querySelectorAll('.idea:not(.hide)').length;
        t.style.display = visible ? '' : 'none';
      });
    });
  })();

  // ===== scroll reveal =====
  function initReveal(){
    var cards = document.querySelectorAll('.idea');
    if(!('IntersectionObserver' in window)){
      cards.forEach(function(c){ c.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    cards.forEach(function(c){ io.observe(c); });
  }
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
