export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>82MAJOR / HEAT / Unreleased Audio As An Original Sound / Crowd Control Digital</title>
<meta name="description" content="Thirteen verified cases where an artist put an unreleased song on TikTok as their own original sound before the single was announced, with the sound name, the sound owner and the play count on every one." />
<meta property="og:title" content="82MAJOR / HEAT / Unreleased Audio As An Original Sound" />
<meta property="og:description" content="What the sound row actually said, on thirteen verified pre-announcement posts. Prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  @font-face{ font-family:N27; src:url('/brand/N27-Bold.otf') format('opentype'); font-weight:700;font-style:normal;font-display:swap; }
  :root{
    --bg:#0A0A0A; --card:#1A1A1A; --card-2:#141414;
    --accent:#FD3737; --accent-dim:rgba(253,55,55,.10);
    --ink:#FAFAFA; --secondary:#777; --muted:rgba(255,255,255,.55);
    --line:#1e1e1e; --line-2:#2a2a2a; --line-hover:#333;
    --success:#4ADE80; --gold:#E9C46A; --cyan:#5EEAD4;
    --fh:'N27','Work Sans',sans-serif; --fs:'Work Sans',system-ui,-apple-system,sans-serif;
    --fm:'Geist Mono',ui-monospace,SFMono-Regular,Menlo,monospace; --max:1200px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--ink);font-family:var(--fs);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
  a{color:inherit;text-decoration:none}
  h1,h2,h3,h4{font-family:var(--fh);font-weight:700;text-transform:uppercase;letter-spacing:-.01em;margin:0;line-height:1.03}
  ::selection{background:rgba(253,55,55,.25);color:#fff}
  *{scrollbar-width:thin;scrollbar-color:#1a1a1a transparent}
  .tex,.glow{position:fixed;inset:0;pointer-events:none;z-index:0}
  .tex{background-image:linear-gradient(rgba(51,51,51,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(51,51,51,.08) 1px,transparent 1px);background-size:80px 80px}
  .glow{background:radial-gradient(120% 75% at 50% -8%, rgba(253,55,55,.10), transparent 58%)}
  .mono{font-family:var(--fm);text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--muted)}
  .mono.dim{color:rgba(255,255,255,.42);font-size:10px}
  .bar{height:2px;width:64px;background:var(--accent)}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 28px}
  .shell{position:relative;z-index:1}

  .cover{position:relative;min-height:84vh;display:flex;flex-direction:column;justify-content:space-between;padding:80px clamp(24px,5vw,96px) 56px;max-width:1340px;margin:0 auto;overflow:hidden}
  .cover-hero{position:absolute;inset:0;z-index:0;pointer-events:none}
  .cover-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--bg) 0%,transparent 20%,transparent 60%,var(--bg) 100%),radial-gradient(120% 85% at 82% 42%,rgba(253,55,55,.12),transparent 60%)}
  .cover-top,.cover-mid,.cover-foot{position:relative;z-index:1}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:44px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(3.2rem,12vw,10.5rem);line-height:.9;letter-spacing:-.02em}
  .cover-title .sm{display:block;font-size:clamp(1rem,2.6vw,1.85rem);color:var(--accent);letter-spacing:.02em;margin-top:12px}
  .cover-subwrap{margin-top:28px;max-width:880px}
  .cover-subwrap .bar{margin-bottom:22px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-weight:700;font-size:clamp(1.3rem,2.5vw,2rem);line-height:1.14;letter-spacing:-.01em;margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin-top:34px}
  .cover-foot .cv{font-size:15px;color:var(--ink);margin-top:7px}

  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.85);backdrop-filter:blur(14px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:var(--max);margin:0 auto;padding:12px 28px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
  .nb-brand{font-family:var(--fh);text-transform:uppercase;letter-spacing:.02em;font-size:15px}
  .nb-lang{display:flex;gap:10px;margin-left:16px}
  .nb-lang a{font-family:var(--fm);font-size:11px;letter-spacing:.12em;color:var(--secondary);border-bottom:1px solid transparent}
  .nb-lang a:hover{color:var(--ink)}
  .nb-lang a.on{color:var(--accent);border-bottom-color:var(--accent)}
  .nb-jump{display:flex;gap:16px;margin-left:18px}
  .nb-jump a{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
  .nb-jump a:hover{color:var(--accent)}
  @media(max-width:820px){.nb-jump{display:none}}
  .nb-filters{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto}
  .chip{background:transparent;border:1px solid var(--line-2);color:var(--muted);font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding:8px 13px;cursor:pointer;transition:all .2s}
  .chip:hover{border-color:var(--line-hover);color:var(--ink)}
  .chip.active{background:var(--accent);border-color:var(--accent);color:#fff}

  .ctx{padding:56px 0 8px}
  .ctx h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px}
  .ctx .lead{color:var(--ink);font-size:18px;max-width:880px;margin:0 0 26px}
  .ctx .lead b{color:var(--accent)}
  .ctx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ctx-card{background:var(--card-2);border:1px solid var(--line-2);padding:20px 20px 22px}
  .ctx-card .k{font-family:var(--fm);text-transform:uppercase;letter-spacing:.14em;font-size:10px;color:var(--accent)}
  .ctx-card p{margin:8px 0 0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ctx-card p b{color:var(--ink)}
  .readme{margin:26px 0 0;background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:20px 22px}
  .readme h4{text-transform:none;font-size:1.05rem;letter-spacing:-.01em;margin:0 0 8px}
  .readme p{margin:0 0 12px;color:var(--muted);font-size:14.5px;line-height:1.55}
  .readme p:last-child{margin:0}
  .readme b{color:var(--ink)}

  .statstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:30px 0 0}
  @media(max-width:760px){.statstrip{grid-template-columns:repeat(2,1fr)}}
  .stat{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px}
  .stat .n{font-family:var(--fh);font-size:1.9rem;color:var(--ink);line-height:1}
  .stat .l{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;color:var(--secondary);margin-top:9px;display:block;line-height:1.45}

  .sec{padding:52px 0 8px}
  .sec-head{display:flex;flex-direction:column;gap:8px;margin-bottom:26px}
  .sec-head .row{display:flex;align-items:center;gap:16px}
  .sec-head .num{font-family:var(--fm);font-size:13px;color:var(--accent);letter-spacing:.14em}
  .sec-head .ln{flex:1;height:1px;background:var(--line-2)}
  .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.4rem)}
  .sec-head .desc{color:var(--muted);font-size:15.5px;max-width:880px;margin:4px 0 0}

  .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
  @media(max-width:900px){.grid{grid-template-columns:1fr}.ctx-grid{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line-2);padding:22px 22px 24px;display:flex;flex-direction:column;transition:border-color .3s,transform .3s,box-shadow .3s}
  .card:hover{border-color:rgba(253,55,55,.5);transform:translateY(-2px);box-shadow:0 10px 30px rgba(253,55,55,.07),0 2px 8px rgba(0,0,0,.4)}
  .card.hide{display:none}
  .card-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:12px}
  .play-num{font-family:var(--fm);font-size:12px;color:var(--secondary);letter-spacing:.14em}
  .lane-pill{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;padding:5px 9px;border:1px solid}
  .lane-kr{color:var(--accent);border-color:rgba(253,55,55,.4);background:var(--accent-dim)}
  .lane-west{color:var(--gold);border-color:rgba(233,196,106,.35);background:rgba(233,196,106,.08)}
  .lane-live{color:var(--cyan);border-color:rgba(94,234,212,.35);background:rgba(94,234,212,.07)}
  .play-title{font-size:1.24rem;margin-bottom:8px;text-transform:none;letter-spacing:-.01em}
  .play-sub{font-size:13.5px;color:var(--muted);margin:0 0 14px}
  .play-sub b{color:var(--ink)}

  /* the sound row, the proof element */
  .sound{display:flex;align-items:center;gap:0;border:1px solid rgba(253,55,55,.45);background:rgba(253,55,55,.07);margin:0 0 14px;flex-wrap:wrap}
  .sound .sk{font-family:var(--fm);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);padding:9px 10px;border-right:1px solid rgba(253,55,55,.3);white-space:nowrap}
  .sound .st{font-family:var(--fm);font-size:12.5px;color:var(--ink);padding:9px 11px;font-weight:500}
  .sound .sa{font-family:var(--fm);font-size:11px;color:var(--muted);padding:9px 11px 9px 0}
  .sound .sa::before{content:"by ";color:var(--secondary)}
  .capq{font-size:14px;color:var(--ink);background:var(--card-2);border-left:2px solid var(--line-hover);padding:10px 14px;margin:0 0 14px;font-style:normal}
  .capq .ck{font-family:var(--fm);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--secondary);display:block;margin-bottom:4px}

  .gapline{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}
  .gp{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.11em;padding:5px 9px;border:1px solid var(--line-hover);color:var(--muted)}
  .gp b{color:var(--accent);font-weight:500}

  .embed{position:relative;background:#000;border:1px solid var(--line-2);min-height:170px;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:16px}
  .embed.loaded{display:block;min-height:0;border:0;background:transparent;overflow:visible}
  .embed-btn{background:rgba(253,55,55,.12);border:1px solid rgba(253,55,55,.5);color:#fff;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.12em;padding:12px 18px;cursor:pointer;transition:background .2s;display:inline-flex;align-items:center;gap:9px}
  .embed-btn:hover{background:rgba(253,55,55,.24)}
  .embed-meta{position:absolute;bottom:8px;left:10px;font-family:var(--fm);font-size:9.5px;letter-spacing:.1em;color:var(--muted);text-transform:uppercase}
  .embed iframe.tt{display:block;width:100%;max-width:325px;height:750px;margin:0 auto;border:0;background:#000}

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

  .hero-card{background:var(--card);border:1px solid rgba(253,55,55,.35);padding:26px clamp(20px,3vw,32px);display:grid;grid-template-columns:340px 1fr;gap:28px}
  @media(max-width:900px){.hero-card{grid-template-columns:1fr}}
  .hero-card .hc-r h3{font-size:1.55rem;text-transform:none;letter-spacing:-.01em;margin-bottom:8px}
  .hero-embeds{display:flex;flex-direction:column;gap:12px}

  .strip{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}
  @media(max-width:900px){.strip{grid-template-columns:1fr}}
  .st2{background:var(--card-2);border:1px solid var(--line-2);padding:18px}
  .st2 .k{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent)}
  .st2 h4{text-transform:none;font-size:1.05rem;letter-spacing:-.01em;margin:7px 0 6px}
  .st2 p{margin:0;color:var(--muted);font-size:14px;line-height:1.52}
  .st2 p b{color:var(--ink)}

  .tablewrap{border:1px solid var(--line-2);overflow-x:auto;background:var(--card-2)}
  table.data{width:100%;border-collapse:collapse;font-size:13.5px;min-width:960px}
  table.data th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:right;padding:12px;border-bottom:1px solid var(--line-2);cursor:pointer;white-space:nowrap;user-select:none;position:sticky;top:0;background:var(--card-2);z-index:2}
  table.data th.l{text-align:left}
  table.data th:hover{color:var(--ink)}
  table.data th.sorted{color:var(--accent)}
  table.data td{padding:11px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;color:var(--muted)}
  table.data td.l{text-align:left;color:var(--ink);white-space:normal}
  table.data td.snd{font-family:var(--fm);font-size:12px;color:var(--accent);text-align:left;white-space:normal}
  table.data tr:hover td{background:rgba(255,255,255,.02)}
  table.data td.hi{color:var(--ink);font-weight:600}
  .tbl-note{color:var(--secondary);font-size:12px;margin:12px 0 0;line-height:1.5}

  .slate{background:var(--card-2);border:1px solid var(--line-2);padding:30px clamp(20px,4vw,40px);margin-top:8px}
  .slate h3{font-size:1.5rem;text-transform:none;letter-spacing:-.01em;margin-bottom:6px}
  .slate .sd{color:var(--muted);font-size:15px;margin:0 0 22px;max-width:800px}
  .steps{display:grid;gap:12px}
  .step{background:var(--card);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px;display:grid;grid-template-columns:120px 1fr;gap:20px}
  @media(max-width:760px){.step{grid-template-columns:1fr;gap:8px}}
  .step .sw{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent);line-height:1.5}
  .step h4{text-transform:none;font-size:1.08rem;letter-spacing:-.01em;margin:0 0 6px}
  .step p{margin:0;color:var(--muted);font-size:14.5px;line-height:1.54}
  .step p b{color:var(--ink)}
  .slate .need{margin-top:22px;border-top:1px solid var(--line-2);padding-top:16px;color:var(--ink);font-size:15px}
  .slate .need b{color:var(--accent)}

  .method{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  @media(max-width:900px){.method{grid-template-columns:1fr 1fr}}
  @media(max-width:600px){.method{grid-template-columns:1fr}}
  .mcard{background:var(--card-2);border:1px solid var(--line-2);padding:20px}
  .mcard .s{font-family:var(--fm);font-size:10px;letter-spacing:.13em;color:var(--accent);text-transform:uppercase}
  .mcard h4{text-transform:none;font-size:1.06rem;letter-spacing:-.01em;margin:7px 0 7px}
  .mcard p{margin:0;color:var(--muted);font-size:14px;line-height:1.55}
  .mcard p b{color:var(--ink)}

  footer{margin-top:56px;border-top:1px solid var(--line);padding:26px 0 60px}
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:940px}
  footer .fn b{color:var(--muted)}
</style>
</head>
<body>
<div class="tex"></div><div class="glow"></div>

<div class="shell">
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><span class="mono">Reference Set / Pre-Release Audio On TikTok</span><span class="mono">August 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">82MAJOR<span class="sm">HEAT / UNRELEASED AUDIO AS AN ORIGINAL SOUND</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">Thirteen artists who put an unreleased song on TikTok as their own sound before announcing it. Every card shows what the sound row actually said, and how long the song went without a name.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The window</div><div class="cv">HEAT releases September 1, 6:00 PM KST</div></div>
      <div><div class="mono dim">Prepared by</div><div class="cv">Geoff Shames / Co-Founder, Crowd Control Digital</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">82MAJOR / HEAT</a>
      <div class="nb-lang"><a href="/82major-heat-teardown" class="on">EN</a><a href="/82major-heat-teardown-ko">KO</a></div>
      <div class="nb-jump"><a href="#asia">Korea and Japan</a><a href="#west">Western Majors</a><a href="#table">The Sounds</a><a href="#play">The Play</a></div>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">All 13</button>
        <button class="chip" data-f="kr">Asia</button>
        <button class="chip" data-f="west">West</button>
      </div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>What this is</h2>
    <p class="lead">Every case here is the same specific move: the artist posts a video on TikTok with an unreleased song attached as <b>their own sound</b>, before the single has been announced. No title card, no release date, no artwork. The song is not on streaming, and the sound belongs to the artist's post rather than to a released track.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">What goes out</span><p>A short vertical video, usually phone quality, with the record playing underneath. The caption is <b>a question or nothing at all</b>. The name of the song appears nowhere.</p></div>
      <div class="ctx-card"><span class="k">Who does it</span><p>Two BLACKPINK members, a Korean soloist, a Japanese teenager who went on to a Billboard Japan number one, a Universal Music Japan signing, <b>Sony Music Philippines</b>, and six Western major-label acts.</p></div>
      <div class="ctx-card"><span class="k">What it produces</span><p>The audio accumulates plays, saves and creations while it is still a mystery, so the announcement lands on an audience that <b>already knows the hook</b>.</p></div>
    </div>
    <div class="readme">
      <h4>How to read each card</h4>
      <p>Every card carries a red <b>SOUND</b> row. That is the sound as TikTok itself reports it: the sound name on the left, the account that owns it on the right. It is the whole proof. When the sound reads <b>"COMING SOON" by LISA</b> or <b>"JENNIE untitled" by JENNIE</b>, the audio is artist-owned and unreleased. A released track instead shows as the song title credited to the artist as a music entity, which is a different thing and is not what this page is about.</p>
      <p>Each card also carries the caption as posted, and the gap in calendar days between the audio going public and the song getting a name.</p>
    </div>
    <div class="statstrip">
      <div class="stat"><div class="n">133.2M</div><span class="l">Plays on one post whose sound was called COMING SOON</span></div>
      <div class="stat"><div class="n">20 days</div><span class="l">Before that song was publicly called ROCKSTAR</span></div>
      <div class="stat"><div class="n">113 days</div><span class="l">JENNIE untitled stayed untitled before the release</span></div>
      <div class="stat"><div class="n">13</div><span class="l">Verified cases, every sound checked against TikTok itself</span></div>
    </div>
  </section>

  <!-- 01 ASIA -->
  <section class="sec wrap" id="asia">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>Korea and Japan</h2>
      <p class="desc">Six Asian acts, including two BLACKPINK members and two Japanese major-label signings, each running an unreleased song on their own TikTok sound before the announcement.</p>
    </div>

    <div class="hero-card" data-lane="kr">
      <div class="hero-embeds">
        <div class="embed" data-id="7377360398812450091"><button class="embed-btn" type="button">&#9654; Load the June 6 post</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
        <div class="embed" data-id="7379957213126888750"><button class="embed-btn" type="button">&#9654; Load the June 13 post</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
      </div>
      <div class="hc-r">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-kr">The clearest case</span></div>
        <h3>Name the sound after the tease, not the song</h3>
        <p class="play-sub"><b>LISA, ROCKSTAR.</b> She opened a brand new TikTok account and used it, first, to put an unreleased record in front of the world under a sound called COMING SOON.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">COMING SOON</span><span class="sa">LISA</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>&#11088;&#65039;&#128171;</div>
        <div class="gapline"><span class="gp">Audio public <b>Jun 6, 2024</b></span><span class="gp">Named <b>Jun 26</b></span><span class="gp">Released <b>Jun 27</b></span><span class="gp">Untitled for <b>20 days</b></span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Thirteen seconds of her dancing to a beat nobody had heard, captioned with two emoji. A week later a second post, fourteen seconds, one emoji, on a second custom sound called <b>TEASER</b>. Neither names a song. The first post that says ROCKSTAR arrives on June 26, the day before release.</p></div>
          <div class="tblock"><span class="tl">What the sounds did</span><p>COMING SOON holds <b>133.2 million plays</b> and TEASER holds <b>90.2 million</b>, both on audio that could not be streamed anywhere. ROCKSTAR then opened at number one on Billboard Global Excl. US with 94.2 million streams, her first, and number four on the Global 200.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The sound name is doing the marketing. COMING SOON tells the audience there is something to wait for without telling them what, so the comment section fills with people trying to identify it. That guessing is what the platform rewards.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Available immediately and requires nothing new: one member-shot vertical, HEAT as the sound, and the sound named something like COMING SOON rather than HEAT.</p></div>
        <div class="card-foot"><span class="also">The first post naming the song came <a href="https://www.tiktok.com/@lalalalisa_m/video/7384612210393222442" target="_blank" rel="noopener">20 days later</a></span><a class="src" href="https://www.tiktok.com/@lalalalisa_m/video/7377360398812450091" target="_blank" rel="noopener">View original &#8599;</a></div>
      </div>
    </div>

    <div class="grid" style="margin-top:18px">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-kr">Korea</span></div>
        <h3 class="play-title">Put the word untitled in the sound name</h3>
        <p class="play-sub"><b>JENNIE, Mantra.</b> The sound is literally called JENNIE untitled, and it stayed that way for nearly four months.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">JENNIE untitled</span><span class="sa">JENNIE</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>Future was written @Beats by Dre</div>
        <div class="gapline"><span class="gp">Audio public <b>Jun 20, 2024</b></span><span class="gp">Released <b>Oct 11, 2024</b></span><span class="gp">Untitled for <b>113 days</b></span></div>
        <div class="embed" data-id="7382569452581162282"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @jennierubyjane</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Thirty seconds of unreleased music inside a brand film, posted from her own account, on a sound she owns and named. <b>39.3 million plays</b> on a song with no title. The record eventually arrived as Mantra on October 11.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Calling the sound "untitled" is an invitation rather than a leak. It signals deliberate withholding, which reads as confidence, and it gives the audience a name to search for while the real one is still private.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>A second BLACKPINK member, on her own account, four months ahead of release. The move is not exotic at the top of K-pop.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@jennierubyjane/video/7382569452581162282" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-kr">Korea</span></div>
        <h3 class="play-title">Thank the fans for waiting, play the unreleased song</h3>
        <p class="play-sub"><b>JINI.</b> Twelve days before the single was announced, on the first artist-owned sound her account had ever used.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">&#50724;&#47532;&#51648;&#45560; &#49324;&#50868;&#46300; - jiniyxxn</span><span class="sa">jiniyxxn</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>&#44592;&#45796;&#47140;&#51452;&#49436; &#44256;&#47560;&#50892; #JINI</div>
        <div class="gapline"><span class="gp">Audio public <b>Sep 2, 2023</b></span><span class="gp">Announced <b>Sep 14</b></span><span class="gp">Released <b>Oct 11</b></span><span class="gp">Gap <b>12 days</b></span></div>
        <div class="embed" data-id="7274243533240896770"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @jiniyxxn</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>The Korean sound row reads "original sound", owned by her handle. Every one of the twelve posts before it used somebody else's audio. This is the post where her account starts carrying her own music, and it does so before the release is public. <b>1.5 million plays.</b></p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The caption does the whole job in four words. It frames the unreleased audio as a reward for the fanbase rather than a marketing beat, which is why it reads as generous instead of promotional.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>A Korean-language caption, a Korean sound row, a Korean soloist. This is the version that translates directly.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@jiniyxxn/video/7274243533240896770" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">04</span><span class="lane-pill lane-kr">Japan</span></div>
        <h3 class="play-title">Run the whole campaign on your own sound</h3>
        <p class="play-sub"><b>tuki., Bansanka.</b> A fifteen year old posted verse one of an unnamed original song and never left her own sound, all the way to a Billboard Japan number one.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">&#12458;&#12522;&#12472;&#12490;&#12523;&#26989;&#26354;</span><span class="sa">tuki.</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>&#12458;&#12522;&#12472;&#12490;&#12523;&#26354;&#12398;&#65297;&#30058;&#12391;&#12377;&#65281;&#65281; (verse one of my original song)</div>
        <div class="gapline"><span class="gp">Audio public <b>Jul 17, 2023</b></span><span class="gp">Titled <b>Aug 16</b></span><span class="gp">Released <b>Sep 29</b></span><span class="gp">Untitled for <b>30 days</b></span></div>
        <div class="embed" data-id="7256680694166916353"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @tuki.music</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>A bedroom performance of one verse, no title, on a generic artist-owned sound. <b>4.8 million plays.</b> The title reveal came a month later, also on her own sound, and the peak post on September 8 did <b>12.8 million</b> while the song was still unreleased. The official commercial sound was not created until September 25.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The audience watched the song get built. By release the record had a public history, which is a different asset from awareness and much harder to buy.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Every play, save and creation banked in those ten weeks accrued to a sound the artist owned, not to a marketing account.</p></div>
        <div class="card-foot"><span class="also">The 12.8M post while still unreleased is <a href="https://www.tiktok.com/@tuki.music/video/7276392763783007495" target="_blank" rel="noopener">here</a></span><a class="src" href="https://www.tiktok.com/@tuki.music/video/7256680694166916353" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">05</span><span class="lane-pill lane-kr">Universal Music Japan</span></div>
        <h3 class="play-title">Release the song in pieces, one section at a time</h3>
        <p class="play-sub"><b>imase, NIGHT DANCER.</b> The sound existed on TikTok 88 days before the release was announced, and he drip-fed the song across separate custom sounds.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">NIGHT DANCER</span><span class="sa">imase</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>&#12300;NIGHT DANCER&#12301;&#27468;&#12387;&#12390;&#12415;&#12414;&#12375;&#12383; (I tried singing NIGHT DANCER)</div>
        <div class="gapline"><span class="gp">Sound created <b>May 9, 2022</b></span><span class="gp">Announced <b>Aug 5</b></span><span class="gp">Released <b>Aug 19</b></span><span class="gp">Gap <b>88 days</b></span></div>
        <div class="embed" data-id="7111259546634456322"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @imase119</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Thirteen posts on the artist-owned sound before the song could be streamed, this one at <b>6.4 million plays</b>. He then published the song's sections as their own sounds, one named for the A melody and one for the B melody, the second captioned as a first public airing.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It answers the objection that a major label will not allow this. A Universal Music Japan artist ran it before signing and kept running it afterwards as standing practice.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The song does not have to go out in one piece. A single section, released on its own sound, is enough to start the clock.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@imase119/video/7111259546634456322" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">06</span><span class="lane-pill lane-kr">Sony Music Philippines</span></div>
        <h3 class="play-title">Call the sound a preview and say nothing else</h3>
        <p class="play-sub"><b>SB19, VISA.</b> A boy group on a major, posting a preview sound 26 days before the single was announced.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">VISA Preview SB19</span><span class="sa">SB19 Official</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>eh na-deny</div>
        <div class="gapline"><span class="gp">Audio public <b>Jan 17, 2026</b></span><span class="gp">Announced <b>Feb 12</b></span><span class="gp">Released <b>Feb 20</b></span><span class="gp">Gap <b>26 days</b></span></div>
        <div class="embed" data-id="7596325204503170322"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @officialsb19</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>A three word caption in Tagalog and a sound named as a preview, owned by the group's own account. They then reused the same sound twice more in February, before the announcement.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>This is the closest structural match to 82MAJOR in the set: an Asian boy group signed to a major, posting from the official group account, with the label's release calendar still intact behind it.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Naming the sound as a preview keeps the label's own framing intact and still puts the record in front of the audience first.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@officialsb19/video/7596325204503170322" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 02 WEST -->
  <section class="sec wrap" id="west">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>Western Majors</h2>
      <p class="desc">The same move on the other side of the market, including one running live this week.</p>
    </div>
    <div class="grid" id="grid-west">

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">07</span><span class="lane-pill lane-west">Columbia</span></div>
        <h3 class="play-title">Sit on the sound for nine months</h3>
        <p class="play-sub"><b>Lil Nas X, LIGHT AGAIN!</b> The sound went up in February and the record did not arrive until November.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">LIGHT AGAIN</span><span class="sa">dreamboy.</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>No caption</div>
        <div class="gapline"><span class="gp">Audio public <b>Feb 2, 2024</b></span><span class="gp">Released <b>Nov 15, 2024</b></span><span class="gp">Gap <b>287 days</b></span></div>
        <div class="embed" data-id="7330866236458274090"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @lilnasx</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>A captionless post on a sound owned by his own account rather than by a label music entity, run across ten posts in thirteen days for roughly 15.7 million combined plays. His posts for an already-released single that same month carry the opposite signature, a commercial music entity credited to Lil Nas X.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The longest gap in this set. The audience had nine months to attach to a song they could not have, and the record was familiar before it was purchasable.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>There is no expiry on a sound. Audio put out now keeps working through September and into the tour window.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@lilnasx/video/7330866236458274090" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">08</span><span class="lane-pill lane-west">RCA</span></div>
        <h3 class="play-title">Ask the audience whether to release it</h3>
        <p class="play-sub"><b>Tate McRae.</b> An unreleased song on her own sound, and a caption that hands the decision to the fanbase.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">original sound</span><span class="sa">tate mcrae</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>oh shit&#129323; u guys want this one ?</div>
        <div class="gapline"><span class="gp">Posted <b>Aug 4, 2023</b></span><span class="gp">Plays <b>19.4M</b></span><span class="gp">Unreleased at post time</span></div>
        <div class="embed" data-id="7263547556947414315"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @tatemcrae</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Unreleased music on an artist-owned sound with no title anywhere, and a caption written as a question. <b>19.4 million plays.</b> The following day the campaign's named sound went live, 41 days before that single reached streaming.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The caption converts passive viewers into a constituency. Asking whether to release something makes the audience feel responsible for the release, and they answer in the comments at a rate a statement never gets.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>This is the caption model. A question outperforms an announcement, and it costs nothing to write.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@tatemcrae/video/7263547556947414315" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">09</span><span class="lane-pill lane-west">Warner</span></div>
        <h3 class="play-title">Post unreleased music as a habit, not an event</h3>
        <p class="play-sub"><b>PinkPantheress.</b> Unreleased audio on her own sound, ten months before the song reached a release.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">original sound</span><span class="sa">@pinkpantheress</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>let it all go #newmusic #fyp</div>
        <div class="gapline"><span class="gp">Audio public <b>Jul 12, 2024</b></span><span class="gp">Released <b>May 9, 2025</b></span><span class="gp">Gap <b>301 days</b></span></div>
        <div class="embed" data-id="7390893383566314784"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @pinkpantheress</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An artist-owned sound carrying unreleased music, tagged only as new music, at <b>5.9 million plays</b>. The song surfaced commercially the following May. Her account has run this pattern repeatedly rather than as a one-off campaign beat.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>When unreleased audio is normal on an account, no single post carries announcement pressure. The audience learns to treat the account as the place new music appears first.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The first one is the hardest. After that it becomes a channel behaviour rather than a decision the label has to approve each time.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@pinkpantheress/video/7390893383566314784" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">10</span><span class="lane-pill lane-west">Interscope</span></div>
        <h3 class="play-title">Seed it from a second account, then amplify</h3>
        <p class="play-sub"><b>Role Model, High Hopes 3000.</b> The sound was born on an alter-ego account with six videos, then the main account posted on the identical sound.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">original sound</span><span class="sa">Chuck Timely</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>No caption</div>
        <div class="gapline"><span class="gp">Audio public <b>May 22, 2026</b></span><span class="gp">Announced <b>Jun 3</b></span><span class="gp">Gap <b>12 days</b></span></div>
        <div class="embed" data-id="7642746442880175391"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @chucktimely</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An unnamed sound on a small side account, <b>1.4 million plays</b>. Three days later the artist's main account posted on the <b>same sound object</b>, not a copy, at 2.6 million. The official introduction came on June 3.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The side account carries the first post and the main account joins once the reaction is known. Both posts feed the same sound.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>If posting from the official account is the sticking point, the sound can start somewhere smaller and be adopted once it performs.</p></div>
        <div class="card-foot"><span class="also">Main account on the same sound, <a href="https://www.tiktok.com/@rolemodel/video/7643866589372108063" target="_blank" rel="noopener">2.6M</a></span><a class="src" href="https://www.tiktok.com/@chucktimely/video/7642746442880175391" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">11</span><span class="lane-pill lane-west">Def Jam</span></div>
        <h3 class="play-title">Label the sound a snippet and let it run for a month</h3>
        <p class="play-sub"><b>Coco Jones, Luvagirl.</b> The snippet sound was created on February 18 and the single arrived on March 20.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">LUVAGIRL Snippet</span><span class="sa">cocojones</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>y&#8217;all ready for me to drop this &#128105;&#127998;&#8205;&#128187;</div>
        <div class="gapline"><span class="gp">Sound created <b>Feb 18, 2026</b></span><span class="gp">Released <b>Mar 20</b></span><span class="gp">Gap <b>30 days</b></span></div>
        <div class="embed" data-id="7614956633856281869"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @cocojones</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An artist-owned sound explicitly named as a snippet, reused across the month. The February post did <b>6.3 million</b> and this March post, captioned as a question, did <b>2.9 million</b>, both before the record was available.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Calling it a snippet sets expectations honestly and still holds the release. It is the least aggressive framing available and it kept a full month of runway.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>A second naming option: the sound says snippet, the release date stays private.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@cocojones/video/7614956633856281869" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">12</span><span class="lane-pill lane-live">Running this week</span></div>
        <h3 class="play-title">Make the fans ask for the date</h3>
        <p class="play-sub"><b>BossMan Dlow.</b> An unnamed sound seeded on July 1 and still unreleased, with the drop teased for this Friday.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">original sound</span><span class="sa">BossMan Dlow</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>Gimme A Date Big Za Back &#8252;&#65039;&#8252;&#65039;</div>
        <div class="gapline"><span class="gp">Sound created <b>Jul 1, 2026</b></span><span class="gp">Date named <b>Aug 19</b></span><span class="gp">Gap <b>49 days</b></span></div>
        <div class="embed" data-id="7675529128841399566"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @bossmandlow</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An unreleased record on an unnamed artist-owned sound, seeded seven weeks before anyone was told when it was coming. The caption quoted here is the audience being told to ask for a date. A second post the same day names Friday.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The demand for the release becomes the content. By the time a date exists, the audience has already spent weeks asking for one, and the announcement is a payoff rather than an ask.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>This is live as of today, on an unreleased record, on a major-distributed artist. The play counts on this card will have moved by the time you read it.</p></div>
        <div class="card-foot"><span class="also">Seeded on <a href="https://www.tiktok.com/@bossmandlow/video/7674376578473725198" target="_blank" rel="noopener">Aug 15</a> on the same sound</span><a class="src" href="https://www.tiktok.com/@bossmandlow/video/7675529128841399566" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">13</span><span class="lane-pill lane-west">Producer side</span></div>
        <h3 class="play-title">Let the producer put it out, not the artist</h3>
        <p class="play-sub"><b>The Chainsmokers, later KATSEYE Gnarly.</b> The demo lived on TikTok for two years before the group was attached to it.</p>
        <div class="sound"><span class="sk">Sound</span><span class="st">original sound</span><span class="sa">The Chainsmokers</span></div>
        <div class="capq"><span class="ck">Caption as posted</span>everythings gnarly @alicelongyugao #NewMusic</div>
        <div class="gapline"><span class="gp">Audio public <b>Apr 6, 2023</b></span><span class="gp">Released <b>Apr 30, 2025</b></span><span class="gp">Gap <b>755 days</b></span></div>
        <div class="embed" data-id="7218729393932209450"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @thechainsmokers</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>A producer duo posting a work in progress on their own sound, <b>9.5 million plays</b>, with a guest vocal and no indication that a group would ever record it. Two years later the record became KATSEYE's first Billboard Hot 100 entry at number 52 and number six on the Global 200.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The hook had years of public familiarity attached to nobody in particular, so the group inherited recognition rather than having to build it.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The audio does not have to leave the group's account to do the work. A producer or choreographer can own the sound instead.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@thechainsmokers/video/7218729393932209450" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 03 TABLE -->
  <section class="sec wrap" id="table">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>The Sounds, Side By Side</h2>
      <p class="desc">Every case with the sound exactly as TikTok reports it. Click any column header to re-sort.</p>
    </div>
    <div class="tablewrap"><table class="data" id="gaptable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
  </section>

  <!-- 04 OTHER ROUTE -->
  <section class="sec wrap" id="stage">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>The Other Route</h2>
      <p class="desc">If publishing the sound from an owned account is not where this lands, the Korean majors reach the same outcome from a stage. The audio still goes public before the announcement, but the company never posts it.</p>
    </div>
    <div class="strip">
      <div class="st2"><span class="k">YG / BLACKPINK</span><h4>Two days</h4><p>YG announced only that a new song existed, performed it at the Goyang tour opener on July 5, 2025, and confirmed the title <b>two days later</b>. Fan footage carried the audio. It entered at number one on the Billboard Global 200 with 123 million streams.</p></div>
      <div class="st2"><span class="k">JYP / Stray Kids</span><h4>Eighty three days</h4><p>Eight unreleased solo songs premiered live from August 24, 2024. The release was not announced until November 15. The album took number one on the Billboard 200 and 1,989,508 Circle copies.</p></div>
      <div class="st2"><span class="k">BELIFT and BigHit</span><h4>Running this month</h4><p>ENHYPEN performed an unreleased title track in Busan on August 8, 2026 for an August 21 release. TXT played their title track over a Tokyo fireworks display the same day, nine days before release, and it went number one on the Oricon Daily Digital Single chart.</p></div>
    </div>
    <p class="tbl-note">EDAM under Kakao has the same precedent in house. IU debuted Bye, Summer live at Seoul World Cup Stadium in September 2024 with no release attached, and her own channel published the clip. It carries 11,429,316 views on a song that did not exist commercially.</p>
  </section>

  <!-- 05 PLAY -->
  <section class="sec wrap" id="play">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>The Play For HEAT</h2>
      <p class="desc">The version available before September 1, using assets that already exist.</p>
    </div>
    <div class="slate">
      <h3>One video, one sound, no new production</h3>
      <p class="sd">Everything below is drawn from what the thirteen cases above actually did. The only decision being asked for is whether the record can be heard before it is named.</p>
      <div class="steps">
        <div class="step">
          <div class="sw">Step 01<br />This week</div>
          <div><h4>Post one member-shot vertical with HEAT as the sound</h4><p>Phone quality is correct here, not a compromise. <b>No title on screen, no release date, no artwork, no label mark.</b> The caption is a question. Tate McRae's "u guys want this one ?" did 19.4 million plays and BossMan Dlow is running "gimme a date" right now.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 02<br />Same post</div>
          <div><h4>Name the sound, and do not name it HEAT</h4><p>This is the detail that separates the cases above from an ordinary rollout post. LISA used <b>COMING SOON</b> and <b>TEASER</b>. JENNIE used <b>JENNIE untitled</b>. If a fully blind sound is too far, SB19 used <b>VISA Preview</b> and Coco Jones used <b>LUVAGIRL Snippet</b>, both of which hold the tease while keeping the label's framing.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 03<br />Same week</div>
          <div><h4>The members post on the identical sound</h4><p>Each member posts once from their own account using the same sound object, in a different setting. Role Model proved the cross-account version works: a side account created the sound and the main account posted on the same one three days later, at nearly twice the plays.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 04<br />Automatic</div>
          <div><h4>The sound consolidates at release</h4><p>Because the release is distributed through Kakao, the pre-release sound merges into the official track sound when HEAT goes live. <b>Every play, save and creation banked before September 1 lands on the official song</b> rather than being stranded on a separate audio page.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 05<br />Same asset</div>
          <div><h4>Three more surfaces at no extra cost</h4><p>The same clip runs as an Instagram trial reel, served only to accounts that do not already follow the group, plus YouTube Shorts and Spotify Clips. One asset, four platforms, four separate audiences.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 06<br />At announcement</div>
          <div><h4>The announcement lands on something</h4><p>When the label announcement runs on schedule, the hook is already familiar and the sound already has creations attached to it. Nothing in the release calendar has to move for this to work.</p></div>
        </div>
      </div>
      <p class="need">What this asks for: <b>one video and permission.</b> No new shoot, no new asset, no change to the label's announcement calendar.</p>
    </div>
  </section>

  <!-- 06 METHOD -->
  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>Methodology</h2>
      <p class="desc">How each case was confirmed, so the sound rows on this page can be checked rather than taken on trust.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / Selection rule</span><h4>Artist-owned sound, before the announcement</h4><p>A case qualifies only if the unreleased audio was attached to the post as an <b>artist-owned sound</b> and went public before the single was announced. Posts using a released track as a commercial music entity were excluded, as were live performances, television slots and fan footage.</p></div>
      <div class="mcard"><span class="s">02 / Sound verification</span><h4>Read from TikTok itself</h4><p>Every sound name and sound owner on this page was read directly from TikTok's own payload for that video, not from press coverage. That is why the sound rows show exactly what the platform reports, including the Korean and Japanese sound names.</p></div>
      <div class="mcard"><span class="s">03 / Dating</span><h4>Timestamps, not estimates</h4><p>TikTok video and sound identifiers encode their own creation time, so the date a sound was created and the date it was first posted are both exact. That is how the gaps were measured rather than inferred from article publication dates.</p></div>
      <div class="mcard"><span class="s">04 / Captions</span><h4>Quoted as posted</h4><p>Every caption on this page is reproduced as published, including emoji, punctuation and the original language. Translations are marked where given.</p></div>
      <div class="mcard"><span class="s">05 / Outcomes</span><h4>Published figures only</h4><p>Play counts are live at build and will drift. Chart positions and stream figures are as published by Billboard, Circle and Oricon. Where a figure was not published, the cell is left empty rather than filled with an estimate.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Play counts are current as of August 19, 2026 and will drift, particularly on the case that is still running. Every clip was verified live and embeddable at build, and every sound name and sound owner was read from TikTok's own data for that video. Prepared by Crowd Control Digital.</p>
  </footer>
</div>

<script>
(function(){
  document.querySelectorAll('.embed').forEach(function(box){
    var btn=box.querySelector('.embed-btn');
    if(!btn)return;
    btn.addEventListener('click',function(){
      var id=box.getAttribute('data-id');
      box.innerHTML='<iframe class="tt" src="https://www.tiktok.com/embed/v2/'+id+'" allow="encrypted-media;" allowfullscreen loading="lazy"></iframe>';
      box.classList.add('loaded');
    });
  });

  var chips=document.querySelectorAll('#filter .chip');
  var cards=document.querySelectorAll('.card[data-lane], .hero-card[data-lane]');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('active');});c.classList.add('active');
    var f=c.getAttribute('data-f');
    cards.forEach(function(card){card.classList.toggle('hide', f!=='all' && card.getAttribute('data-lane')!==f);});
  });});

  var ROWS=[
    {a:"LISA, ROCKSTAR",m:"Korea",s:"COMING SOON",o:"LISA",d:"2024-06-06",p:133200000,g:20,gd:"20"},
    {a:"LISA, ROCKSTAR",m:"Korea",s:"TEASER",o:"LISA",d:"2024-06-13",p:90200000,g:13,gd:"13"},
    {a:"JENNIE, Mantra",m:"Korea",s:"JENNIE untitled",o:"JENNIE",d:"2024-06-20",p:39300000,g:113,gd:"113"},
    {a:"JINI",m:"Korea",s:"오리지널 사운드 - jiniyxxn",o:"jiniyxxn",d:"2023-09-02",p:1500000,g:12,gd:"12"},
    {a:"tuki., Bansanka",m:"Japan",s:"オリジナル楽曲",o:"tuki.",d:"2023-07-17",p:4800000,g:30,gd:"30"},
    {a:"imase, NIGHT DANCER",m:"Japan, Universal",s:"NIGHT DANCER",o:"imase",d:"2022-06-20",p:6400000,g:88,gd:"88"},
    {a:"SB19, VISA",m:"Philippines, Sony",s:"VISA Preview SB19",o:"SB19 Official",d:"2026-01-17",p:435900,g:26,gd:"26"},
    {a:"Lil Nas X, LIGHT AGAIN!",m:"US, Columbia",s:"LIGHT AGAIN",o:"dreamboy.",d:"2024-02-02",p:2300000,g:287,gd:"287"},
    {a:"Tate McRae",m:"US, RCA",s:"original sound",o:"tate mcrae",d:"2023-08-04",p:19400000,g:null,gd:""},
    {a:"PinkPantheress",m:"UK, Warner",s:"original sound",o:"@pinkpantheress",d:"2024-07-12",p:5900000,g:301,gd:"301"},
    {a:"Role Model, High Hopes 3000",m:"US, Interscope",s:"original sound",o:"Chuck Timely",d:"2026-05-22",p:1400000,g:12,gd:"12"},
    {a:"Coco Jones, Luvagirl",m:"US, Def Jam",s:"LUVAGIRL Snippet",o:"cocojones",d:"2026-02-18",p:6300000,g:30,gd:"30"},
    {a:"BossMan Dlow",m:"US, Alamo",s:"original sound",o:"BossMan Dlow",d:"2026-08-19",p:303800,g:49,gd:"49"},
    {a:"The Chainsmokers, later KATSEYE Gnarly",m:"US",s:"original sound",o:"The Chainsmokers",d:"2023-04-06",p:9500000,g:755,gd:"755"}
  ];
  function fmt(n){ if(n>=1000000){return (n/1000000).toFixed(1).replace(/\\.0$/,'')+'M';} if(n>=1000){return Math.round(n/1000)+'K';} return String(n); }
  var tbl=document.getElementById('gaptable');
  var sortKey='p', sortDir=-1;
  function cmp(x,y){ if(x===null)return 1; if(y===null)return -1; return x<y?-1:(x>y?1:0); }
  function draw(){
    if(!tbl)return;
    var rows=ROWS.slice().sort(function(p,q){
      var x=p[sortKey],y=q[sortKey];
      if(typeof x==='string'){return sortDir*x.localeCompare(y);}
      return sortDir*cmp(x,y);
    });
    var cols=[['a','Artist and song','l'],['m','Market and label','l'],['s','Sound name','l'],['o','Sound owner','l'],['d','Audio public',''],['p','Plays',''],['gd','Days before the name','']];
    var h='<thead><tr>';
    cols.forEach(function(c){
      var k=c[0]==='gd'?'g':c[0];
      h+='<th class="'+c[2]+(sortKey===k?' sorted':'')+'" data-k="'+c[0]+'">'+c[1]+'</th>';
    });
    h+='</tr></thead><tbody>';
    rows.forEach(function(r){
      h+='<tr>'+
        '<td class="l">'+r.a+'</td>'+
        '<td class="l">'+r.m+'</td>'+
        '<td class="snd">'+r.s+'</td>'+
        '<td class="l">'+r.o+'</td>'+
        '<td>'+r.d+'</td>'+
        '<td class="hi">'+fmt(r.p)+'</td>'+
        '<td>'+(r.gd||'')+'</td>'+
      '</tr>';});
    h+='</tbody>';
    tbl.innerHTML=h;
    tbl.querySelectorAll('th').forEach(function(th){th.addEventListener('click',function(){
      var k=th.getAttribute('data-k'); if(k==='gd')k='g';
      if(k===sortKey){sortDir=-sortDir;}else{sortKey=k;sortDir=(k==='a'||k==='m'||k==='s'||k==='o'||k==='d')?1:-1;}
      draw();
    });});
  }
  draw();
  var note=document.getElementById('tblnote');
  if(note){note.innerHTML='Sound names are reproduced exactly as TikTok reports them for each video, including Korean and Japanese. "Days before the name" counts calendar days from the audio going public to the song being publicly named or announced. Play counts are live at build and will drift.';}
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
