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
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
<style>
  :root{
    --bg:#0a090c;
    --bg-2:#100e13;
    --card:#161419;
    --card-2:#1c1a21;
    --line:rgba(255,255,255,.09);
    --line-strong:rgba(255,255,255,.16);
    --ink:#f5f1ea;
    --ink-dim:#cfc9c0;
    --muted:#948f88;
    --accent:#ff4a1f;
    --accent-2:#ffb24a;
    --maxw:1180px;
    --r:18px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    margin:0;
    background:var(--bg);
    color:var(--ink);
    font-family:'Inter',system-ui,sans-serif;
    font-size:17px;
    line-height:1.6;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
  }
  body.locked{overflow:hidden;height:100vh}
  a{color:inherit;text-decoration:none}
  ::selection{background:var(--accent);color:#fff}

  /* ===== background texture ===== */
  .grain{
    position:fixed;inset:0;z-index:0;pointer-events:none;opacity:.05;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  .glow{
    position:fixed;z-index:0;pointer-events:none;filter:blur(90px);opacity:.5;
  }
  .glow.a{top:-180px;right:-120px;width:560px;height:560px;background:radial-gradient(circle,rgba(255,74,31,.55),transparent 62%)}
  .glow.b{bottom:-220px;left:-160px;width:620px;height:620px;background:radial-gradient(circle,rgba(255,178,74,.30),transparent 64%)}

  /* ===== password gate ===== */
  .gate{
    position:fixed;inset:0;z-index:90;display:flex;align-items:center;justify-content:center;
    background:radial-gradient(120% 120% at 50% 0%, #1a1014 0%, #0a090c 60%);
    transition:opacity .6s ease, visibility .6s ease;
  }
  .gate.open{opacity:0;visibility:hidden}
  .gate-inner{width:min(440px,90vw);text-align:center;padding:0 22px}
  .gate-mark{font-family:'Archivo';font-weight:800;letter-spacing:.34em;font-size:12px;color:var(--accent);text-transform:uppercase;margin-bottom:28px}
  .gate h1{font-family:'Archivo';font-weight:900;font-size:clamp(34px,8vw,58px);line-height:.98;margin:0 0 6px;letter-spacing:-.01em}
  .gate p{color:var(--muted);font-size:15px;margin:0 0 30px}
  .gate-row{display:flex;gap:10px;justify-content:center}
  .gate input{
    flex:1;max-width:240px;background:rgba(255,255,255,.04);border:1px solid var(--line-strong);
    color:var(--ink);padding:15px 18px;border-radius:12px;font-size:16px;font-family:'Archivo';
    letter-spacing:.32em;text-transform:uppercase;text-align:center;outline:none;transition:border-color .2s;
  }
  .gate input:focus{border-color:var(--accent)}
  .gate button{
    background:var(--accent);color:#fff;border:0;padding:0 22px;border-radius:12px;
    font-family:'Archivo';font-weight:700;font-size:15px;cursor:pointer;transition:transform .15s, background .2s;
  }
  .gate button:hover{transform:translateY(-1px);background:#ff5e36}
  .gate .err{color:var(--accent);font-size:13px;height:18px;margin-top:14px;opacity:0;transition:opacity .2s}
  .gate .err.show{opacity:1}

  /* ===== shell reveal ===== */
  .shell{position:relative;z-index:1;opacity:0;transition:opacity .8s ease .1s}
  body.unlocked .shell{opacity:1}

  /* ===== top nav ===== */
  header.nav{
    position:sticky;top:0;z-index:40;backdrop-filter:blur(12px);
    background:rgba(10,9,12,.72);border-bottom:1px solid var(--line);
  }
  .nav-in{max-width:var(--maxw);margin:0 auto;padding:15px 26px;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .brand{display:flex;align-items:center;gap:12px;font-family:'Archivo';font-weight:800;font-size:14px;letter-spacing:.04em}
  .brand .dot{width:9px;height:9px;border-radius:50%;background:var(--accent);box-shadow:0 0 14px var(--accent)}
  .brand .sub{color:var(--muted);font-weight:500;letter-spacing:.16em;font-size:11px;text-transform:uppercase}
  .nav-cta{font-family:'Archivo';font-weight:700;font-size:13px;color:var(--ink);border:1px solid var(--line-strong);padding:9px 16px;border-radius:999px;transition:border-color .2s,color .2s}
  .nav-cta:hover{border-color:var(--accent);color:var(--accent)}

  .wrap{max-width:var(--maxw);margin:0 auto;padding:0 26px}

  /* ===== hero ===== */
  .hero{padding:104px 0 64px;position:relative}
  .eyebrow{font-family:'Archivo';font-weight:700;letter-spacing:.3em;text-transform:uppercase;font-size:12px;color:var(--accent);margin-bottom:24px}
  .hero h1{
    font-family:'Archivo';font-weight:900;font-size:clamp(46px,9.5vw,128px);line-height:.9;
    letter-spacing:-.02em;margin:0 0 26px;text-transform:uppercase;
  }
  .hero h1 .it{font-family:'Instrument Serif';font-weight:400;font-style:italic;text-transform:none;letter-spacing:0;color:var(--accent-2)}
  .lede{max-width:640px;font-size:clamp(18px,2.4vw,22px);color:var(--ink-dim);line-height:1.5}
  .lede b{color:var(--ink);font-weight:600}
  .hero-meta{display:flex;flex-wrap:wrap;gap:26px;margin-top:42px;padding-top:30px;border-top:1px solid var(--line)}
  .hero-meta div{min-width:120px}
  .hero-meta .k{font-family:'Archivo';font-weight:800;font-size:26px;line-height:1}
  .hero-meta .v{color:var(--muted);font-size:13px;margin-top:7px;letter-spacing:.02em}

  /* ===== legend / how to read ===== */
  .legend{margin:18px 0 6px;padding:30px;border:1px solid var(--line);border-radius:var(--r);background:linear-gradient(180deg,var(--bg-2),transparent)}
  .legend h2{font-family:'Archivo';font-weight:800;font-size:15px;letter-spacing:.04em;margin:0 0 8px;text-transform:uppercase;color:var(--ink)}
  .legend p{margin:0 0 22px;color:var(--ink-dim);max-width:760px;font-size:15.5px}
  .legend-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}
  .legend-grid .lg{display:flex;gap:11px;align-items:flex-start}
  .legend-grid .ic{font-family:'Archivo';font-weight:800;font-size:11px;letter-spacing:.06em;padding:4px 9px;border-radius:6px;white-space:nowrap;margin-top:2px}
  .legend-grid .lg span.t{font-size:13.5px;color:var(--muted)}
  .legend-grid .lg span.t b{color:var(--ink-dim);font-weight:600}

  /* ===== filter bar ===== */
  .filter{position:sticky;top:60px;z-index:30;padding:14px 0 12px;margin-top:46px;background:linear-gradient(180deg,var(--bg) 70%,transparent)}
  .filter-in{display:flex;flex-wrap:wrap;gap:9px;align-items:center}
  .filter .fl{font-family:'Archivo';font-weight:700;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-right:6px}
  .chip{
    font-family:'Archivo';font-weight:600;font-size:13px;color:var(--ink-dim);
    background:rgba(255,255,255,.03);border:1px solid var(--line);padding:8px 15px;border-radius:999px;
    cursor:pointer;transition:all .18s;user-select:none;
  }
  .chip:hover{border-color:var(--line-strong);color:var(--ink)}
  .chip.active{background:var(--ink);color:#0a090c;border-color:var(--ink)}

  /* ===== tiers ===== */
  .tier{padding:42px 0 8px}
  .tier-head{display:flex;align-items:baseline;gap:18px;margin-bottom:6px;flex-wrap:wrap}
  .tier-head h2{font-family:'Archivo';font-weight:900;font-size:clamp(26px,4vw,40px);margin:0;letter-spacing:-.01em}
  .tier-head .tag-lift{font-family:'Archivo';font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase;padding:5px 11px;border-radius:7px}
  .tier-head p{width:100%;color:var(--muted);margin:8px 0 0;font-size:15px;max-width:680px}

  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:18px;margin-top:26px}

  .card{
    position:relative;background:var(--card);border:1px solid var(--line);border-radius:var(--r);
    padding:26px 24px 24px;display:flex;flex-direction:column;gap:15px;
    opacity:0;transform:translateY(22px);transition:opacity .6s ease, transform .6s ease, border-color .25s, background .25s;
  }
  .card.in{opacity:1;transform:none}
  .card.hide{display:none}
  .card:hover{border-color:var(--line-strong);background:var(--card-2)}
  .card:before{content:"";position:absolute;left:0;top:24px;bottom:24px;width:3px;border-radius:3px;background:var(--accent);opacity:0;transition:opacity .25s}
  .card:hover:before{opacity:1}
  .card-top{display:flex;align-items:center;justify-content:space-between}
  .num{font-family:'Archivo';font-weight:900;font-size:13px;color:var(--muted);letter-spacing:.1em}
  .lift{font-family:'Archivo';font-weight:700;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;padding:4px 9px;border-radius:6px}
  .lift-low{background:rgba(124,255,178,.12);color:#82e8ad}
  .lift-med{background:rgba(255,178,74,.14);color:var(--accent-2)}
  .lift-high{background:rgba(255,74,31,.16);color:#ff7a55}
  .card h3{font-family:'Archivo';font-weight:800;font-size:22px;line-height:1.1;margin:-2px 0 0;letter-spacing:-.01em}
  .concept{margin:0;color:var(--ink-dim);font-size:15px}
  .block .label{display:block;font-family:'Archivo';font-weight:700;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:7px}
  .block ol{margin:0;padding-left:18px;color:var(--ink-dim);font-size:14px;line-height:1.5}
  .block ol li{margin-bottom:5px}
  .block ol li::marker{color:var(--muted);font-family:'Archivo';font-weight:700}
  .moves p{margin:0;color:var(--ink-dim);font-size:14px}
  .tags{display:flex;flex-wrap:wrap;gap:6px}
  .tag{font-family:'Archivo';font-weight:600;font-size:11px;letter-spacing:.02em;padding:4px 9px;border-radius:6px;border:1px solid var(--line)}
  .t-stream{color:#82e8ad;border-color:rgba(124,255,178,.25)}
  .t-tour{color:var(--accent-2);border-color:rgba(255,178,74,.28)}
  .t-merch{color:#ff86b0;border-color:rgba(255,134,176,.28)}
  .t-crm{color:#74c4ff;border-color:rgba(116,196,255,.28)}
  .t-brand{color:#e7c777;border-color:rgba(231,199,119,.3)}
  .t-social{color:#c9a9ff;border-color:rgba(201,169,255,.28)}
  .refs{display:flex;flex-direction:column;gap:8px;margin-top:2px;padding-top:15px;border-top:1px solid var(--line)}
  .refs .rl{font-family:'Archivo';font-weight:700;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
  .ref{display:flex;align-items:center;gap:11px;padding:7px;border-radius:11px;transition:background .2s}
  .ref:hover{background:rgba(255,255,255,.04)}
  .ref img{width:74px;height:42px;object-fit:cover;border-radius:7px;background:#000;flex-shrink:0}
  .ref .ri{display:flex;flex-direction:column;line-height:1.25;min-width:0}
  .ref .rt{font-size:13.5px;color:var(--ink);font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .ref .rs{font-size:11.5px;color:var(--muted)}
  .ref .badge{width:74px;height:42px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-family:'Archivo';font-weight:800;font-size:10px;letter-spacing:.05em;flex-shrink:0;background:rgba(255,255,255,.05);border:1px solid var(--line);color:var(--muted);text-align:center;padding:4px}
  .ref .arr{margin-left:auto;color:var(--muted);font-size:15px;flex-shrink:0}
  .note{margin:0;font-size:12.5px;color:var(--muted);background:rgba(255,74,31,.06);border:1px solid rgba(255,74,31,.16);border-radius:10px;padding:10px 13px;line-height:1.45}
  .note b{color:#ff7a55;font-weight:700}

  /* ===== closing ===== */
  .close{margin:80px 0 0;padding:56px 40px;border:1px solid var(--line);border-radius:24px;text-align:center;background:radial-gradient(120% 140% at 50% 0%, rgba(255,74,31,.12), transparent 60%)}
  .close .eyebrow{margin-bottom:18px}
  .close h2{font-family:'Archivo';font-weight:900;font-size:clamp(30px,5vw,52px);line-height:.98;margin:0 auto 18px;max-width:720px;letter-spacing:-.01em}
  .close p{color:var(--ink-dim);max-width:560px;margin:0 auto 30px;font-size:16.5px}
  .btn{display:inline-flex;align-items:center;gap:10px;background:var(--accent);color:#fff;font-family:'Archivo';font-weight:700;font-size:16px;padding:16px 30px;border-radius:999px;transition:transform .15s,background .2s}
  .btn:hover{transform:translateY(-2px);background:#ff5e36}

  footer{margin-top:70px;border-top:1px solid var(--line);padding:34px 0 60px}
  .foot-in{max-width:var(--maxw);margin:0 auto;padding:0 26px;display:flex;flex-wrap:wrap;gap:14px;justify-content:space-between;align-items:center;color:var(--muted);font-size:12.5px}
  .foot-in b{color:var(--ink-dim);font-family:'Archivo';font-weight:700;letter-spacing:.04em}

  @media(max-width:640px){
    body{font-size:16px}
    .nav-cta{display:none}
    .hero{padding:72px 0 44px}
    .filter{top:58px}
    .legend{padding:22px}
    .close{padding:40px 22px}
    .grid{grid-template-columns:1fr}
  }
</style>
</head>
<body class="locked">
<div class="grain"></div>
<div class="glow a"></div>
<div class="glow b"></div>

<!-- ============ PASSWORD GATE ============ -->
<div class="gate" id="gate">
  <div class="gate-inner">
    <div class="gate-mark">Crowd Control Digital</div>
    <h1>CAOS</h1>
    <p>Private board for Miguel and team. Enter the password to continue.</p>
    <form class="gate-row" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="err" id="gateErr">Not quite. Try again.</div>
  </div>
</div>

<!-- ============ SITE ============ -->
<div class="shell">

  <header class="nav">
    <div class="nav-in">
      <div class="brand">
        <span class="dot"></span>
        MIGUEL <span class="sub">× Crowd Control Digital</span>
      </div>
      <a class="nav-cta" href="#greenlight">Greenlight a wave</a>
    </div>
  </header>

  <!-- HERO -->
  <section class="hero wrap">
    <div class="eyebrow">Marketing &amp; Content Ideas</div>
    <h1>Ideas that<br><span class="it">earn</span> the algorithm.</h1>
    <p class="lede">A living board of content concepts for Miguel. Every idea below comes with three ways to make it <b>unmistakably his</b>, a read on what it actually moves (streams, tour, merch, owned fans), and a real-world reference so you can see the shape of it.</p>
    <div class="hero-meta">
      <div><div class="k">15</div><div class="v">concepts, tiered by lift</div></div>
      <div><div class="k">3×</div><div class="v">"make it Miguel" angles each</div></div>
      <div><div class="k">Live</div><div class="v">board grows as we go</div></div>
    </div>
  </section>

  <!-- LEGEND -->
  <section class="wrap">
    <div class="legend">
      <h2>How to read this</h2>
      <p>Concepts are grouped by lift: quick wins you can fire this week, mid-lift builds, and tentpole swings. Tags show the business lever each idea pulls. Filter the whole board by lever below.</p>
      <div class="legend-grid">
        <div class="lg"><span class="ic t-stream">STREAMING</span><span class="t"><b>Streaming / catalog.</b> Plays, watch-time, catalog reactivation.</span></div>
        <div class="lg"><span class="ic t-tour">TOURING</span><span class="t"><b>Live / tour.</b> Demand, urgency, ticket pull.</span></div>
        <div class="lg"><span class="ic t-merch">MERCH</span><span class="t"><b>Merch / product.</b> Direct revenue and margin.</span></div>
        <div class="lg"><span class="ic t-crm">FAN CRM</span><span class="t"><b>Owned audience.</b> Email / SMS capture into S1C and Hive.</span></div>
        <div class="lg"><span class="ic t-brand">BRAND $</span><span class="t"><b>Partnerships.</b> Outside budget, new reach.</span></div>
        <div class="lg"><span class="ic t-social">SOCIAL</span><span class="t"><b>Reach.</b> Clips, discovery, top-of-funnel.</span></div>
      </div>
    </div>
  </section>

  <!-- FILTER -->
  <div class="filter wrap">
    <div class="filter-in" id="filter">
      <span class="fl">Filter</span>
      <span class="chip active" data-f="all">All</span>
      <span class="chip" data-f="streaming">Streaming</span>
      <span class="chip" data-f="tour">Touring</span>
      <span class="chip" data-f="merch">Merch</span>
      <span class="chip" data-f="crm">Fan CRM</span>
      <span class="chip" data-f="brand">Brand $</span>
      <span class="chip" data-f="social">Social</span>
    </div>
  </div>

  <!-- ============ TIER 1: QUICK WINS ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <h2>Quick wins</h2>
      <span class="tag-lift lift-low">Low lift · fire this week</span>
      <p>Cheap, fast, mostly AI or single-shoot. The point is volume and presence while the bigger swings get built.</p>
    </div>
    <div class="grid">

      <!-- 24hr stream -->
      <article class="card" data-levers="streaming crm social">
        <div class="card-top"><span class="num">01</span><span class="lift lift-low">Low lift</span></div>
        <h3>The 24-Hour CAOS Stream</h3>
        <p class="concept">A looping visualizer livestream on YouTube: the album and catalog on repeat for 24 hours, launched on a keynote date (a holiday, summer break, the week of college finals).</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>Not a fireplace. A slow-burn "CAOS world" loop built off his stage-head asset.</li>
            <li>Drop it on a date he can own (NYE, Dia de los Muertos) so it reads as a moment, not wallpaper.</li>
            <li>Pin a join-S1C overlay so 24 hours of watch-time quietly becomes signups.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Always-on streams and watch-time for near-zero cost, evergreen catalog surfacing, and a passive funnel into the owned list.</p></div>
        <div class="tags"><span class="tag t-stream">Streaming</span><span class="tag t-crm">Fan CRM</span><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=Rik8YhvH09M" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/Rik8YhvH09M/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Cozy Fireplace Ambiance &amp; Lofi</span><span class="rs">YouTube · Lofi Fireplace</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=Tq7523sJc6I" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/Tq7523sJc6I/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Study With Me 24 Hours</span><span class="rs">YouTube · Mimi Lofi Chill</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- AI stadium portraits -->
      <article class="card" data-levers="social tour">
        <div class="card-top"><span class="num">02</span><span class="lift lift-low">Low lift</span></div>
        <h3>AI Stadium Portraits</h3>
        <p class="concept">AI-rendered portraits that place Miguel inside the biggest rooms in the world, built from his existing stage-head asset. We can render these immediately.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A series headlining iconic stadiums (SoFi, Estadio Azteca, Wembley).</li>
            <li>One a week as a "manifesting it" tease that quietly sets a stadium-headliner frame.</li>
            <li>Let fans request the next city in comments and render the winners.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Premium social content at almost no cost, an ambition signal that primes tour demand, and a repeatable weekly post.</p></div>
        <div class="tags"><span class="tag t-social">Social</span><span class="tag t-tour">Touring</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">CCD ON HIGGSFIELD</span><span class="ri"><span class="rt">Rendered in-house</span><span class="rs">Off Miguel's stage-head asset</span></span></div>
        </div>
      </article>

      <!-- CAOS dropbox -->
      <article class="card" data-levers="crm social">
        <div class="card-top"><span class="num">03</span><span class="lift lift-low">Low lift</span></div>
        <h3>The CAOS Dropbox</h3>
        <p class="concept">A shared gallery where fans upload their own photos and video from the night. Same mechanic as the event photo-share apps couples use at weddings.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A QR at every tour stop: "Upload your CAOS night" straight into a live gallery.</li>
            <li>Every upload asks for an email or number first, so the gallery is a capture tool.</li>
            <li>Best fan clips get reposted and featured, which feeds the next round of uploads.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Direct fan capture at the scale we want (the 23K-emails goal), a stream of authentic UGC, and a deeper sense of community.</p></div>
        <div class="tags"><span class="tag t-crm">Fan CRM</span><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <a class="ref" href="https://www.wedding.studio/" target="_blank" rel="noopener"><span class="badge">PHOTO SHARE</span><span class="ri"><span class="rt">wedding.studio</span><span class="rs">Guest upload gallery model</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- Street reaction -->
      <article class="card" data-levers="social streaming">
        <div class="card-top"><span class="num">04</span><span class="lift lift-low">Low lift</span></div>
        <h3>Street Reactions</h3>
        <p class="concept">Man-on-the-street segments where strangers react to and try to name Miguel songs on a mic, filmed for short form. The "Track Star" format.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>Run it as a produced series about his music with a host, so it never reads as him busking.</li>
            <li>Feature deep cuts in tour cities to reactivate the catalog, not just the hits.</li>
            <li>Seed a few superfans for the emotional moments, end cards point to S1C.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>A cheap recurring social series, catalog rediscovery, and discovery among people who do not follow him yet.</p></div>
        <div class="tags"><span class="tag t-social">Social</span><span class="tag t-stream">Streaming</span></div>
        <div class="refs"><span class="rl">References</span>
          <a class="ref" href="https://www.youtube.com/shorts/g9AhQvz_ABc" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/g9AhQvz_ABc/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Track Star street format</span><span class="rs">YouTube · Public Opinion NYC</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.instagram.com/p/DY8REAZphqm/" target="_blank" rel="noopener"><span class="badge">REELS</span><span class="ri"><span class="rt">Street listening clip</span><span class="rs">Instagram</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Scale check:</b> the host carries the bit, not Miguel. We own the format and feature his catalog, we do not put him on a corner.</p>
      </article>

      <!-- Family man post -->
      <article class="card" data-levers="social">
        <div class="card-top"><span class="num">05</span><span class="lift lift-low">Low lift</span></div>
        <h3>The "Family Man" Easter Egg</h3>
        <p class="concept">A single oversized-prop stunt post (think the Travis Scott inflatable-head moment) flipped into a warm, human beat that cuts against the chaos of the era.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A giant CAOS-head prop dropped into a calm domestic setting (kitchen, backyard, couch).</li>
            <li>Play the contrast: the chaos persona, off duty, being a person.</li>
            <li>One post, low production, high reshare.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Humanizes the brand, breaks up the feed, and tends to overperform on shares because the contrast is the joke.</p></div>
        <div class="tags"><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">STUNT POST</span><span class="ri"><span class="rt">Travis Scott inflatable head</span><span class="rs">Oversized-prop social moment</span></span></div>
        </div>
      </article>

      <!-- Fake copyright tiktok -->
      <article class="card" data-levers="social streaming">
        <div class="card-top"><span class="num">06</span><span class="lift lift-low">Low lift</span></div>
        <h3>The Fake Copyright Bit</h3>
        <p class="concept">A tongue-in-cheek "I just got copyright struck" TikTok that is actually a stealth tease for an unreleased song. The Dylan Francis style of cheeky meta-bit.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>Miguel gets "struck" by his own unreleased record.</li>
            <li>Lean it into the chaos persona so it feels native, not like an ad.</li>
            <li>The punchline drives curiosity straight at the real release date.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Native-feeling TikTok reach, song discovery ahead of a drop, and personality that platforms reward.</p></div>
        <div class="tags"><span class="tag t-social">Social</span><span class="tag t-stream">Streaming</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">TIKTOK BIT</span><span class="ri"><span class="rt">Dylan Francis style</span><span class="rs">Cheeky fake-copyright format</span></span></div>
        </div>
        <p class="note"><b>Voice check:</b> only ships if it lands in Miguel's voice. A copy of someone else's bit reads as a copy.</p>
      </article>

      <!-- Plush speaker -->
      <article class="card" data-levers="merch social">
        <div class="card-top"><span class="num">07</span><span class="lift lift-low">Low lift</span></div>
        <h3>The Miguel Plush (with a speaker)</h3>
        <p class="concept">A plush of Miguel with a built-in Bluetooth speaker that plays his songs. A novelty drop that knows it is funny.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A CAOS-branded plush as a limited superfan drop, not a core line.</li>
            <li>Let the meme be the meme. The absurdity is the marketing.</li>
            <li>Unboxing and ASMR content plus a little influencer seeding.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Novelty merch revenue, strong giftability and virality, and the kind of oddity that earns press on its own.</p></div>
        <div class="tags"><span class="tag t-merch">Merch</span><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <a class="ref" href="https://www.oddgifts.com/products/boyfriend-pillow" target="_blank" rel="noopener"><span class="badge">NOVELTY · $24.95</span><span class="ri"><span class="rt">Boyfriend Pillow</span><span class="rs">OddGifts · plush-with-personality</span></span><span class="arr">↗</span></a>
        </div>
      </article>

    </div>
  </section>

  <!-- ============ TIER 2: BUILDS ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <h2>Builds</h2>
      <span class="tag-lift lift-med">Medium lift · plan and produce</span>
      <p>A real shoot, a partner, or an ongoing operation. Higher payoff, worth scheduling against the priority window.</p>
    </div>
    <div class="grid">

      <!-- Box truck set -->
      <article class="card" data-levers="tour social streaming">
        <div class="card-top"><span class="num">08</span><span class="lift lift-med">Medium lift</span></div>
        <h3>The Rolling Stage</h3>
        <p class="concept">A surprise live set staged from a moving vehicle or a clear-sided box truck that rolls through a city, livestreamed and cut into clips.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A clear-side box truck as a rolling CAOS stage, parked outside the venue pre-show in tour markets.</li>
            <li>A stripped, candle-lit "in transit" version for a single, where the audio doubles as the visualizer.</li>
            <li>Tie the route to a release: the truck appears in LA, fans track it through an S1C drop.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Pre-show FOMO and ticket urgency in live markets, a pile of vertical clips, and a reason for fans to join S1C for the location.</p></div>
        <div class="tags"><span class="tag t-tour">Touring</span><span class="tag t-social">Social</span><span class="tag t-stream">Streaming</span></div>
        <div class="refs"><span class="rl">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=-1hbtTolzCE" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/-1hbtTolzCE/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">carRADIO set in a car</span><span class="rs">YouTube · heds</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=H_Z0Kv-LWkU" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/H_Z0Kv-LWkU/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Five Past Three visualizer</span><span class="rs">YouTube · The Chainsmokers</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Originality gate:</b> the DJ-in-a-car / U-Haul format is well-worn. We only ship if the Miguel version has its own visual signature (the CAOS world), not a remake of someone else's.</p>
      </article>

      <!-- Fan built MV -->
      <article class="card" data-levers="crm social streaming">
        <div class="card-top"><span class="num">09</span><span class="lift lift-med">Medium lift</span></div>
        <h3>The Fan-Built Music Video</h3>
        <p class="concept">A pop-up, physical or digital, where fans create and design scenes that become part of an official video. Everything tracked through a custom hashtag.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>Fan-drawn frames over a CAOS track, crowdsourced the way the "Where Are Ü Now" video was.</li>
            <li>A physical green-screen booth at the LA show for in-person submissions.</li>
            <li>Submissions run through S1C, so every entry is also a captured contact.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Deep fan investment and UGC at scale, a built-in capture mechanic, and owned content that drives streams when the video lands.</p></div>
        <div class="tags"><span class="tag t-crm">Fan CRM</span><span class="tag t-social">Social</span><span class="tag t-stream">Streaming</span></div>
        <div class="refs"><span class="rl">References</span>
          <a class="ref" href="https://www.youtube.com/watch?v=nntGTK2Fhb0" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/nntGTK2Fhb0/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Where Are Ü Now (fan art)</span><span class="rs">YouTube · Jack Ü</span></span><span class="arr">↗</span></a>
          <a class="ref" href="https://www.youtube.com/watch?v=lY_0mkYDZDU" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/lY_0mkYDZDU/hqdefault.jpg" alt="" loading="lazy"/><span class="ri"><span class="rt">Sit Next to Me</span><span class="rs">YouTube · Foster The People</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- AI brand film -->
      <article class="card" data-levers="brand social">
        <div class="card-top"><span class="num">10</span><span class="lift lift-med">Medium lift</span></div>
        <h3>The AI Brand Film</h3>
        <p class="concept">An AI-generated story piece tied to a brand partner (a fashion or beauty house, in the YSL Beauty vein), rendered in the CAOS aesthetic.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>An AI "CAOS origin" short co-branded with a fashion or beauty partner.</li>
            <li>Build a recurring AI visual series so the look becomes a recognizable Miguel signature.</li>
            <li>Use the partner's channels to double the reach at no extra media cost.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Unlocks brand co-marketing budget, positions Miguel as an AI-native artist, and produces highly shareable visuals.</p></div>
        <div class="tags"><span class="tag t-brand">Brand $</span><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <a class="ref" href="https://www.instagram.com/reels/DZp-sKiCSvr/" target="_blank" rel="noopener"><span class="badge">AI REEL</span><span class="ri"><span class="rt">AI brand story timeline</span><span class="rs">Instagram · YSL Beauty style</span></span><span class="arr">↗</span></a>
        </div>
      </article>

      <!-- HQ account -->
      <article class="card" data-levers="crm social">
        <div class="card-top"><span class="num">11</span><span class="lift lift-med">Medium lift</span></div>
        <h3>The "HQ" Account</h3>
        <p class="concept">A team-run account with a personal, behind-the-curtain vibe, run on the K-pop "HQ" playbook. It exists to feed discovery, not to replace the personal feed.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A "CAOS HQ" account of team-curated, behind-the-scenes moments.</li>
            <li>Every bio and CTA funnels to S1C. It is a feeder, full stop.</li>
            <li>A daily cadence the team owns, so Miguel never has to touch it.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Discovery and algorithmic surface area without adding to Miguel's plate, all funneling into the owned audience.</p></div>
        <div class="tags"><span class="tag t-crm">Fan CRM</span><span class="tag t-social">Social</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">K-POP HQ</span><span class="ri"><span class="rt">Team-run HQ account model</span><span class="rs">Discovery feeder, not a personal feed</span></span></div>
        </div>
        <p class="note"><b>Guardrail:</b> the personal stays on S1C. The HQ account points to it and never competes with it.</p>
      </article>

      <!-- Hidden track -->
      <article class="card" data-levers="streaming merch crm">
        <div class="card-top"><span class="num">12</span><span class="lift lift-med">Medium lift</span></div>
        <h3>Hidden Track + Collector Vinyl</h3>
        <p class="concept">A hidden track inside a reissue, plus a limited vinyl pressing that carries an exclusive cut from the new album.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A CAOS deluxe reissue with a hidden B-side, framed as new energy, not nostalgia.</li>
            <li>Numbered limited vinyl with an exclusive track, sold through S1C and Hive to capture superfans.</li>
            <li>A "find the hidden track" social hunt to drive the search.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Reactivates catalog streams, sells high-margin collector merch, and captures the highest-intent fans with their data.</p></div>
        <div class="tags"><span class="tag t-stream">Streaming</span><span class="tag t-merch">Merch</span><span class="tag t-crm">Fan CRM</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <a class="ref" href="https://pitchfork.com/news/72360-gorillaz-announce-new-demon-days-reissue/" target="_blank" rel="noopener"><span class="badge">REISSUE</span><span class="ri"><span class="rt">Gorillaz, Demon Days reissue</span><span class="rs">Pitchfork · deluxe + collector vinyl</span></span><span class="arr">↗</span></a>
        </div>
      </article>

    </div>
  </section>

  <!-- ============ TIER 3: TENTPOLES ============ -->
  <section class="tier wrap">
    <div class="tier-head">
      <h2>Tentpoles</h2>
      <span class="tag-lift lift-high">High lift · the big swings</span>
      <p>Budget, partners, and lead time required. These are the moments a quarter gets built around.</p>
    </div>
    <div class="grid">

      <!-- F&B partnership -->
      <article class="card" data-levers="brand social tour">
        <div class="card-top"><span class="num">13</span><span class="lift lift-high">High lift</span></div>
        <h3>The Drink Deal</h3>
        <p class="concept">A beverage or food partnership with Miguel as the face, in the lineage of artist-x-soda deals like Biz Markie and Zevia. Jarritos is the obvious first call.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A culture-forward partnership built on taste and craft, not heritage or identity.</li>
            <li>A limited co-branded flavor or can in the CAOS palette.</li>
            <li>The deal funds content and sampling at tour stops.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>Non-music revenue, new reach (including Latino audiences) through the brand's distribution, and a content budget that is not ours to carry.</p></div>
        <div class="tags"><span class="tag t-brand">Brand $</span><span class="tag t-social">Social</span><span class="tag t-tour">Touring</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <a class="ref" href="https://www.fastcompany.com/3027309/80s-rapper-biz-markie-tapped-as-the-face-of-natural-soda-brand-zevia" target="_blank" rel="noopener"><span class="badge">ARTIST × F&amp;B</span><span class="ri"><span class="rt">Biz Markie, face of Zevia</span><span class="rs">Fast Company</span></span><span class="arr">↗</span></a>
        </div>
        <p class="note"><b>Framing:</b> the brand carries the cultural connection, Miguel carries the taste. We build it on craft, not on a "we love Mexico" lean.</p>
      </article>

      <!-- Sports moments -->
      <article class="card" data-levers="social tour brand">
        <div class="card-top"><span class="num">14</span><span class="lift lift-high">High lift</span></div>
        <h3>Marquee Sports Moments</h3>
        <p class="concept">Honorary and anthem moments at major sporting events: an LAFC honorary kickoff, a National Anthem at a marquee NFL game.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>National Anthem at a tentpole NFL game for the broadcast reach and the "timeless artist" frame.</li>
            <li>An LAFC moment in his home city, leaning into the LA story.</li>
            <li>Capture every broadcast moment as owned content with a release tie-in.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>A single shot of enormous TV reach and prestige, hometown LA positioning, and a natural bridge into sports and culture crossovers.</p></div>
        <div class="tags"><span class="tag t-social">Social</span><span class="tag t-tour">Touring</span><span class="tag t-brand">Brand $</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">BOOKING · PR-LED</span><span class="ri"><span class="rt">Anthem / honorary kickoff</span><span class="rs">Run with Chamber Group</span></span></div>
        </div>
      </article>

      <!-- Flying stage -->
      <article class="card" data-levers="tour social brand">
        <div class="card-top"><span class="num">15</span><span class="lift lift-high">High lift</span></div>
        <h3>The Flying Stage, Mexico City</h3>
        <p class="concept">A suspended, flying-stage spectacle built around Miguel's October Mexico City Vogue moment.</p>
        <div class="block"><span class="label">Make it Miguel</span>
          <ol>
            <li>A CAOS flying-stage reveal as the centerpiece of the Vogue moment.</li>
            <li>Cinematic capture engineered for one global content drop.</li>
            <li>Co-funded by a brand partner to share the cost.</li>
          </ol>
        </div>
        <div class="block moves"><span class="label">What it moves</span><p>A tentpole spectacle that generates outsized PR and clip volume, and anchors the entire Q4 push.</p></div>
        <div class="tags"><span class="tag t-tour">Touring</span><span class="tag t-social">Social</span><span class="tag t-brand">Brand $</span></div>
        <div class="refs"><span class="rl">Reference</span>
          <div class="ref"><span class="badge">LIVE PRODUCTION</span><span class="ri"><span class="rt">Large-scale flying stage</span><span class="rs">Spectacle live moment</span></span></div>
        </div>
        <p class="note"><b>Heads up:</b> high cost and dependent on a local production partner. Concept stage only until a partner is on board.</p>
      </article>

    </div>
  </section>

  <!-- CLOSING -->
  <section class="wrap" id="greenlight">
    <div class="close">
      <div class="eyebrow">Your move</div>
      <h2>Tell us the first three to build.</h2>
      <p>Pick the concepts you want live and we will turn them into shoot briefs, render decks, and a build schedule. The rest stay on the board, and we keep adding to it.</p>
      <a class="btn" href="mailto:geoff@crowdcontroldigital.com?subject=Miguel%20ideas%3A%20greenlight&body=The%20three%20we%20want%20first%3A%0A1.%20%0A2.%20%0A3.%20%0A%0ANotes%3A">Greenlight a wave ↗</a>
    </div>
  </section>

  <footer>
    <div class="foot-in">
      <span><b>CROWD CONTROL DIGITAL</b> · Marketing &amp; Content Ideas for Miguel</span>
      <span id="stamp">Private and confidential</span>
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
      setTimeout(function(){ if(gate && gate.parentNode){ gate.style.display='none'; } }, 650);
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
    var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));
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
      // hide empty tiers
      document.querySelectorAll('.tier').forEach(function(t){
        var visible = t.querySelectorAll('.card:not(.hide)').length;
        t.style.display = visible ? '' : 'none';
      });
    });
  })();

  // ===== scroll reveal =====
  function initReveal(){
    var cards = document.querySelectorAll('.card');
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
