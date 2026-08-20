export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>82MAJOR / HEAT / Pre-Release Audio On TikTok / Crowd Control Digital</title>
<meta name="description" content="Eighteen cases where a major act let the audio go public before the formal announcement, what each one put out first, how long the gap was, and what it produced." />
<meta property="og:title" content="82MAJOR / HEAT / Pre-Release Audio On TikTok" />
<meta property="og:description" content="What the biggest acts in Korea and the West put out before they announced. Prepared by Crowd Control Digital." />
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

  /* cover */
  .cover{position:relative;min-height:84vh;display:flex;flex-direction:column;justify-content:space-between;padding:80px clamp(24px,5vw,96px) 56px;max-width:1340px;margin:0 auto;overflow:hidden}
  .cover-hero{position:absolute;inset:0;z-index:0;pointer-events:none}
  .cover-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--bg) 0%,transparent 20%,transparent 60%,var(--bg) 100%),radial-gradient(120% 85% at 82% 42%,rgba(253,55,55,.12),transparent 60%)}
  .cover-top,.cover-mid,.cover-foot{position:relative;z-index:1}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:44px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(3.2rem,12vw,10.5rem);line-height:.9;letter-spacing:-.02em}
  .cover-title .sm{display:block;font-size:clamp(1.05rem,2.8vw,2rem);color:var(--accent);letter-spacing:.02em;margin-top:12px}
  .cover-subwrap{margin-top:28px;max-width:860px}
  .cover-subwrap .bar{margin-bottom:22px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-weight:700;font-size:clamp(1.3rem,2.5vw,2rem);line-height:1.14;letter-spacing:-.01em;margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin-top:34px}
  .cover-foot .cv{font-size:15px;color:var(--ink);margin-top:7px}

  /* nav */
  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.85);backdrop-filter:blur(14px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:var(--max);margin:0 auto;padding:12px 28px;display:flex;align-items:center;gap:18px;flex-wrap:wrap}
  .nb-brand{font-family:var(--fh);text-transform:uppercase;letter-spacing:.02em;font-size:15px}
  .nb-jump{display:flex;gap:16px;margin-left:18px}
  .nb-jump a{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
  .nb-jump a:hover{color:var(--accent)}
  @media(max-width:760px){.nb-jump{display:none}}
  .nb-lang{display:flex;gap:10px;margin-left:16px}
  .nb-lang a{font-family:var(--fm);font-size:11px;letter-spacing:.12em;color:var(--secondary);border-bottom:1px solid transparent}
  .nb-lang a:hover{color:var(--ink)}
  .nb-lang a.on{color:var(--accent);border-bottom-color:var(--accent)}
  .nb-filters{display:flex;gap:8px;flex-wrap:wrap;margin-left:auto}
  .chip{background:transparent;border:1px solid var(--line-2);color:var(--muted);font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding:8px 13px;cursor:pointer;transition:all .2s}
  .chip:hover{border-color:var(--line-hover);color:var(--ink)}
  .chip.active{background:var(--accent);border-color:var(--accent);color:#fff}

  /* context */
  .ctx{padding:56px 0 8px}
  .ctx h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px}
  .ctx .lead{color:var(--ink);font-size:18px;max-width:880px;margin:0 0 26px}
  .ctx .lead b{color:var(--accent)}
  .ctx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ctx-card{background:var(--card-2);border:1px solid var(--line-2);padding:20px 20px 22px}
  .ctx-card .k{font-family:var(--fm);text-transform:uppercase;letter-spacing:.14em;font-size:10px;color:var(--accent)}
  .ctx-card p{margin:8px 0 0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ctx-card p b{color:var(--ink)}
  .rule-line{margin:34px 0 0;border-top:1px solid var(--line-2);padding-top:16px;color:var(--muted);font-size:14px}
  .rule-line b{color:var(--ink)}

  /* stat strip */
  .statstrip{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:30px 0 0}
  @media(max-width:760px){.statstrip{grid-template-columns:repeat(2,1fr)}}
  .stat{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px}
  .stat .n{font-family:var(--fh);font-size:1.9rem;color:var(--ink);line-height:1}
  .stat .l{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;color:var(--secondary);margin-top:9px;display:block;line-height:1.45}

  /* section head */
  .sec{padding:52px 0 8px}
  .sec-head{display:flex;flex-direction:column;gap:8px;margin-bottom:26px}
  .sec-head .row{display:flex;align-items:center;gap:16px}
  .sec-head .num{font-family:var(--fm);font-size:13px;color:var(--accent);letter-spacing:.14em}
  .sec-head .ln{flex:1;height:1px;background:var(--line-2)}
  .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.4rem)}
  .sec-head .desc{color:var(--muted);font-size:15.5px;max-width:880px;margin:4px 0 0}

  /* cards */
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
  .play-title{font-size:1.28rem;margin-bottom:8px;text-transform:none;letter-spacing:-.01em}
  .play-sub{font-size:13.5px;color:var(--muted);margin:0 0 6px}
  .play-sub b{color:var(--ink)}
  .gapline{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}
  .gp{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.11em;padding:5px 9px;border:1px solid var(--line-hover);color:var(--muted)}
  .gp b{color:var(--accent);font-weight:500}

  /* embed */
  .embed{position:relative;background:#000;border:1px solid var(--line-2);min-height:170px;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:16px}
  .embed.loaded{display:block;min-height:0;border:0;background:transparent;overflow:visible}
  .embed-btn{background:rgba(253,55,55,.12);border:1px solid rgba(253,55,55,.5);color:#fff;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.12em;padding:12px 18px;cursor:pointer;transition:background .2s;display:inline-flex;align-items:center;gap:9px}
  .embed-btn:hover{background:rgba(253,55,55,.24)}
  .embed-meta{position:absolute;bottom:8px;left:10px;font-family:var(--fm);font-size:9.5px;letter-spacing:.1em;color:var(--muted);text-transform:uppercase}
  .embed iframe.tt{display:block;width:100%;max-width:325px;height:750px;margin:0 auto;border:0;background:#000}
  .embed iframe.yt{display:block;width:100%;aspect-ratio:16/9;height:auto;border:0;background:#000}

  /* teardown blocks */
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

  /* hero card */
  .hero-card{background:var(--card);border:1px solid rgba(253,55,55,.35);padding:26px clamp(20px,3vw,32px);display:grid;grid-template-columns:340px 1fr;gap:28px}
  @media(max-width:900px){.hero-card{grid-template-columns:1fr}}
  .hero-card .hc-r h3{font-size:1.6rem;text-transform:none;letter-spacing:-.01em;margin-bottom:8px}
  .hero-card .hc-r .play-sub{font-size:14.5px}
  .hero-embeds{display:flex;flex-direction:column;gap:12px}

  /* compact strip */
  .strip{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:20px}
  @media(max-width:900px){.strip{grid-template-columns:1fr}}
  .st{background:var(--card-2);border:1px solid var(--line-2);padding:18px}
  .st .k{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent)}
  .st h4{text-transform:none;font-size:1.05rem;letter-spacing:-.01em;margin:7px 0 6px}
  .st p{margin:0;color:var(--muted);font-size:14px;line-height:1.52}
  .st p b{color:var(--ink)}

  /* table */
  .tablewrap{border:1px solid var(--line-2);overflow-x:auto;background:var(--card-2)}
  table.data{width:100%;border-collapse:collapse;font-size:13.5px;min-width:900px}
  table.data th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:right;padding:12px;border-bottom:1px solid var(--line-2);cursor:pointer;white-space:nowrap;user-select:none;position:sticky;top:0;background:var(--card-2);z-index:2}
  table.data th.l{text-align:left}
  table.data th:hover{color:var(--ink)}
  table.data th.sorted{color:var(--accent)}
  table.data td{padding:11px 12px;border-bottom:1px solid var(--line);text-align:right;white-space:nowrap;color:var(--muted)}
  table.data td.l{text-align:left;color:var(--ink);white-space:normal}
  table.data tr:hover td{background:rgba(255,255,255,.02)}
  table.data td.hi{color:var(--accent);font-weight:600}
  .tbl-note{color:var(--secondary);font-size:12px;margin:12px 0 0;line-height:1.5}

  /* play slate */
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
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:940px}
  footer .fn b{color:var(--muted)}
</style>
</head>
<body>
<div class="tex"></div><div class="glow"></div>

<div class="shell">
  <!-- COVER -->
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><span class="mono">Reference Teardown / Pre-Release Audio</span><span class="mono">August 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">82MAJOR<span class="sm">HEAT / PRE-RELEASE AUDIO ON TIKTOK</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">Eighteen cases where a major act let the record be heard before the announcement. What each one put out first, how long the gap was, and what it produced on the charts.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The window</div><div class="cv">HEAT releases September 1, 6:00 PM KST</div></div>
      <div><div class="mono dim">Prepared by</div><div class="cv">Geoff Shames / Co-Founder, Crowd Control Digital</div></div>
    </div>
  </section>

  <!-- NAV -->
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">82MAJOR / HEAT</a>
      <div class="nb-lang"><a href="/82major-heat-teardown" class="on">EN</a><a href="/82major-heat-teardown-ko">KO</a></div>
      <div class="nb-jump"><a href="#tiktok">TikTok First</a><a href="#korea">Korean Majors</a><a href="#now">Running Now</a><a href="#west">Western Pop</a><a href="#table">The Gaps</a><a href="#play">The Play</a></div>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">All cases</button>
        <button class="chip" data-f="kr">Korea</button>
        <button class="chip" data-f="west">West</button>
      </div>
    </div>
  </div>

  <!-- CONTEXT -->
  <section class="ctx wrap">
    <h2>What this is</h2>
    <p class="lead">A reference set of acts at the top of their market who put the music into the world <b>before</b> they announced it, assembled so the September decision on HEAT can be made against precedent instead of instinct. Every clip below is a real, live post or performance. Nothing here is a mockup.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">The pattern</span><p>The audio goes public with <b>no title, no date, no artwork</b>. The audience hears it, reacts, and starts asking for it. The formal announcement then lands into demand that already exists.</p></div>
      <div class="ctx-card"><span class="k">Where it comes from</span><p>This is not a Western import. <b>YG, SM, JYP, Starship, Pledis, BELIFT and BigHit</b> all run a version of it, and two of them are running it this month.</p></div>
      <div class="ctx-card"><span class="k">What it costs</span><p>In most cases, nothing. The strongest examples used <b>a phone video, a stage the act was already on, or a song the act already had</b>. No new asset was produced for the tease.</p></div>
    </div>
    <div class="statstrip">
      <div class="stat"><div class="n">133.2M</div><span class="l">Plays on LISA's first post, a 13 second clip over an unreleased, unnamed track</span></div>
      <div class="stat"><div class="n">20 days</div><span class="l">Between that post and the first time the song was called ROCKSTAR</span></div>
      <div class="stat"><div class="n">83 days</div><span class="l">Stray Kids gap between the live premieres and the HOP announcement</span></div>
      <div class="stat"><div class="n">2 days</div><span class="l">BLACKPINK gap between the JUMP premiere and the title going public</span></div>
    </div>
    <p class="rule-line">Every case is stated with three dates: when the audio became public, when the release was formally announced, and when it came out. The <b>gap</b> is the number that matters.</p>
  </section>

  <!-- 01 TIKTOK FIRST -->
  <section class="sec wrap" id="tiktok">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>TikTok First</h2>
      <p class="desc">Two cases where the unreleased audio went out on TikTok itself, with nothing attached to identify it.</p>
    </div>

    <div class="hero-card" data-lane="kr">
      <div class="hero-embeds">
        <div class="embed" data-platform="tt" data-id="7377360398812450091"><button class="embed-btn" type="button">&#9654; Load the June 6 post</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
        <div class="embed" data-platform="tt" data-id="7379957213126888750"><button class="embed-btn" type="button">&#9654; Load the June 13 post</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
      </div>
      <div class="hc-r">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-kr">Closest case</span></div>
        <h3>Post the song with no name on it</h3>
        <p class="play-sub"><b>LISA, ROCKSTAR.</b> She opened a brand new TikTok account and used it, first, to put an unreleased and untitled record in front of the world.</p>
        <div class="gapline"><span class="gp">Audio public <b>Jun 6, 2024</b></span><span class="gp">Titled <b>Jun 26</b></span><span class="gp">Released <b>Jun 27</b></span><span class="gp">Gap <b>20 days</b></span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Thirteen seconds of her dancing to a gritty synth beat nobody had heard. The caption was two emoji. No song title, no release date, no artwork, no label mark. A second post followed a week later, fourteen seconds, caption one emoji. The song was not named until June 26, the day before it came out.</p></div>
          <div class="tblock"><span class="tl">What it produced</span><p>The two untitled posts hold <b>133.2 million</b> and <b>90.2 million</b> plays. ROCKSTAR then opened at number one on the Billboard Global Excl. US chart with 94.2 million streams, her first, number four on the Global 200, and number 70 on the Hot 100, a personal best at the time. It entered Spotify Thailand at number one with 2.57 million single day streams.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Withholding the title turns the post into a question instead of an advertisement. The comment section fills with people trying to identify it, and that guessing is what the algorithm rewards. By the time the name appears, the sound is already familiar.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>This is the exact shape available to 82MAJOR right now: one member-shot vertical video with HEAT as the original sound, posted from the official account, caption written as a question. It requires no new asset and no label announcement.</p></div>
        <div class="card-foot"><span class="also">The first post naming the song came <a href="https://www.tiktok.com/@lalalalisa_m/video/7384612210393222442" target="_blank" rel="noopener">20 days later</a></span><a class="src" href="https://www.tiktok.com/@lalalalisa_m/video/7377360398812450091" target="_blank" rel="noopener">View original &#8599;</a></div>
      </div>
    </div>

    <div class="grid" style="margin-top:18px">
      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-kr">TikTok first</span></div>
        <h3 class="play-title">Let the record live on TikTok before it belongs to anyone</h3>
        <p class="play-sub"><b>KATSEYE, Gnarly.</b> The demo sat publicly on TikTok for two years before the group was attached to it.</p>
        <div class="gapline"><span class="gp">Audio public <b>Apr 6, 2023</b></span><span class="gp">Released <b>Apr 30, 2025</b></span><span class="gp">Gap <b>2 years</b></span></div>
        <div class="embed" data-platform="tt" data-id="7218729393932209450"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok / @thechainsmokers</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>The Chainsmokers posted the demo to their own account with Alice Longyu Gao on the vocal, captioned "everythings gnarly". It read as a producer sharing a work in progress. Nobody knew it was a KATSEYE record.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The hook had two years of public life and a built-in audience of people who already knew the phrase before the group ever sang it. The record arrived recognisable, and it became the group's first Billboard Hot 100 entry at number 52 and number six on the Global 200.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Audio does not have to leave the official account to be useful. A producer, a choreographer or a dance studio posting the hook first gives it a life of its own before the group claims it.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@thechainsmokers/video/7218729393932209450" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-west">Demand proof</span></div>
        <h3 class="play-title">Audio already in the world converts on release day</h3>
        <p class="play-sub"><b>Doechii, Anxiety.</b> A 2019 session recording that had been public the whole time became the biggest first week of her career.</p>
        <div class="gapline"><span class="gp">Audio public <b>Nov 10, 2019</b></span><span class="gp">Announced <b>Feb 28, 2025</b></span><span class="gp">Released <b>Mar 4, 2025</b></span></div>
        <div class="embed" data-platform="yt" data-id="4a8pHjLkkz8"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">YouTube / Doechii</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>She uploaded the song to her own channel as a Coven Music Session in 2019 and left it there. In February 2025 the audio became a TikTok trend on its own. She announced the studio version on TikTok on February 28 and released it four days later.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It is the cleanest measurement of what pre-existing familiarity is worth. The record debuted at number 13 on the Hot 100 with <b>20.6 million US streams</b>, up 289 percent week over week, peaked at number nine, and later went number one on Pop Airplay.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Familiarity is the asset. Every play banked before September 1 is an audience that recognises the record on release day rather than meeting it for the first time.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=4a8pHjLkkz8" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>
    </div>
  </section>

  <!-- 02 KOREAN MAJORS -->
  <section class="sec wrap" id="korea">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>Korean Majors</h2>
      <p class="desc">The four biggest agencies in Korea plus Starship, each letting a title track be heard in public before the title was public. In every case the company controlled the room, and the audience did the distributing.</p>
    </div>
    <div class="grid" id="grid-kr">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">04</span><span class="lane-pill lane-kr">YG Entertainment</span></div>
        <h3 class="play-title">Announce that a song exists, then withhold the song</h3>
        <p class="play-sub"><b>BLACKPINK, JUMP.</b> YG said only that a new song would be heard at the tour opener. No title, no date, no artwork.</p>
        <div class="gapline"><span class="gp">Audio public <b>Jul 5, 2025</b></span><span class="gp">Announced <b>Jul 7</b></span><span class="gp">Released <b>Jul 11</b></span><span class="gp">Gap <b>2 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="Dnlagc5oj4Y"><button class="embed-btn" type="button">&#9654; Load the premiere</button><span class="embed-meta">YouTube / fancam, Goyang Stadium</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>The group performed the unreleased song fifteenth in a twenty one song set at Goyang Stadium on July 5. Fan footage was on TikTok and X within hours. Two days later NME was still writing that the song was "seemingly titled JUMP", which is the proof that the title had not been released yet. The MV teaser confirmed the name and the date on July 7.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The company never publishes unreleased audio itself. It stages one controlled moment and lets the stadium carry the record out. The song then entered at <b>number one on the Billboard Global 200</b> with 123 million streams, number one on Global Excl. US, and number 28 on the Hot 100.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The transferable part is the sequence, not the stadium: put the record in front of people first, name it second. The announcement then has something to land on.</p></div>
        <div class="card-foot"><span class="also">Official version of the same performance <a href="https://www.youtube.com/watch?v=P169hsXjYQs" target="_blank" rel="noopener">here</a></span><a class="src" href="https://www.youtube.com/watch?v=Dnlagc5oj4Y" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">05</span><span class="lane-pill lane-kr">JYP Entertainment</span></div>
        <h3 class="play-title">Premiere the songs three months before you announce them</h3>
        <p class="play-sub"><b>Stray Kids, HOP.</b> All eight members performed unreleased solo songs live at the tour opener, and the release was not announced for another eleven weeks.</p>
        <div class="gapline"><span class="gp">Audio public <b>Aug 24, 2024</b></span><span class="gp">Announced <b>Nov 15</b></span><span class="gp">Released <b>Dec 13</b></span><span class="gp">Gap <b>83 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="a8qxAMkv5x4"><button class="embed-btn" type="button">&#9654; Load the premiere</button><span class="embed-meta">YouTube / fancam, KSPO Dome</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Every member debuted an unreleased solo across the opening run at KSPO Dome from August 24. The clips lived on YouTube and TikTok for almost three months with no release attached to them. Bang Chan's solo alone holds 1.19 million views on fan footage.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Eighty three days is long enough for the songs to be learned, ranked and argued about before there is anything to buy. HOP then entered at <b>number one on the Billboard 200</b> with 187,000 units and sold <b>1,989,508 copies</b> on the Circle Album Chart.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The longest gap in this set produced the largest sales result in it. Time in public is the mechanism, not a side effect of it.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=a8qxAMkv5x4" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">06</span><span class="lane-pill lane-kr">SM Entertainment</span></div>
        <h3 class="play-title">Debut it in a market that is not yours yet</h3>
        <p class="play-sub"><b>aespa, Life's Too Short.</b> World premiere at Coachella, billed in advance only as an unreleased new song.</p>
        <div class="gapline"><span class="gp">Audio public <b>Apr 23, 2022</b></span><span class="gp">Announced <b>Jun 1</b></span><span class="gp">Released <b>Jun 24</b></span><span class="gp">Gap <b>39 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="O26XBLe0i-E"><button class="embed-btn" type="button">&#9654; Load the premiere</button><span class="embed-meta">YouTube / fancam, Coachella</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>The group performed the full unreleased English song on the 88rising stage. The advance billing said only that a new song would be premiered. Fancams carried the audio out of the desert the same weekend, five weeks before SM announced anything.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It puts the first hearing in the market the record is aimed at rather than the home market, which is the same reason a US-facing tease matters for a group whose fastest growth is happening outside Korea.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>SM Entertainment ran a 39 day pre-announcement window on a title track and premiered it outside Korea, in the market the record was aimed at.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=O26XBLe0i-E" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">07</span><span class="lane-pill lane-kr">EDAM / Kakao Entertainment</span></div>
        <h3 class="play-title">Let an unreleased song run for a year</h3>
        <p class="play-sub"><b>IU, Bye, Summer.</b> Performed at Seoul World Cup Stadium with no release plan attached, and left in public for roughly twelve months.</p>
        <div class="gapline"><span class="gp">Audio public <b>Sep 21, 2024</b></span><span class="gp">Released <b>Sep 10, 2025</b></span><span class="gp">Gap <b>~12 months</b></span></div>
        <div class="embed" data-platform="yt" data-id="pDvBiB1waBk"><button class="embed-btn" type="button">&#9654; Load the live clip</button><span class="embed-meta">YouTube / IU Official</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>She debuted the song live and her own channel published the live clip. It has <b>11,429,316 views</b> on a song that did not exist commercially. Fans learned it, covered it and asked for it for a year.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The demand was measurable long before the release, so the release was scheduled into a known audience. It went to number one on the Melon Hot 100.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Eleven million views of unreleased audio, published by the artist's own channel. The precedent for putting unreleased music out deliberately already exists inside the Kakao ecosystem.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=pDvBiB1waBk" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>

    <div class="strip">
      <div class="st"><span class="k">Starship / IVE</span><h4>Run the same play twice</h4><p>Unreleased songs performed at <b>The Prom Queens</b> in February 2023, album announced 33 days later, and 1.3 million copies sold in the first week. The identical structure ran again at the <b>SHOW WHAT I AM</b> tour opener in October 2025, announced 77 days later.</p></div>
      <div class="st"><span class="k">Pledis / SEVENTEEN</span><h4>Two days out</h4><p><b>Maestro</b> was premiered live at Seoul World Cup Stadium on April 27 and 28, 2024, two days before release. It went number one on Circle Digital and took six music show wins.</p></div>
      <div class="st"><span class="k">Source Music / LE SSERAFIM</span><h4>One day out, 300 people</h4><p>An invite-only listening event on May 21, 2026 played two songs live for the first time, one day before release. Spotify turned the night into published performance videos. The album went number one on Circle.</p></div>
    </div>
  </section>

  <!-- 03 RUNNING NOW -->
  <section class="sec wrap" id="now">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Running Right Now</h2>
      <p class="desc">Two HYBE labels are executing this in the same release window as HEAT. Both clips below were uploaded this month.</p>
    </div>
    <div class="grid">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">08</span><span class="lane-pill lane-live">This month</span></div>
        <h3 class="play-title">Debut the choreography with the audio, thirteen days early</h3>
        <p class="play-sub"><b>ENHYPEN, Bloody Paradise.</b> Full group stage in Busan on August 8, for a single that does not come out until August 21.</p>
        <div class="gapline"><span class="gp">Audio public <b>Aug 8, 2026</b></span><span class="gp">Releases <b>Aug 21, 2026</b></span><span class="gp">Gap <b>13 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="U4NbrNBKtUs"><button class="embed-btn" type="button">&#9654; Load the premiere</button><span class="embed-meta">YouTube / fancam, Busan Sajik</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>The unreleased title track performed with full choreography at Busan Sajik Gymnasium across two nights, confirmed by the agency. Fan footage went up the same day and the clip embedded here already carries 582,000 views on a song nobody can stream yet.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>Releasing the choreography at the same time as the audio is what makes it short form fuel rather than only a concert moment. Every fancam is a template a creator can copy before the record is out.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>This is a current, same-tier company running a thirteen day pre-release window in the exact release month HEAT is landing in.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=U4NbrNBKtUs" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">09</span><span class="lane-pill lane-live">This month</span></div>
        <h3 class="play-title">Play the record in public with no artist present</h3>
        <p class="play-sub"><b>TOMORROW X TOGETHER, Setsuna Hanabi.</b> The title track was played over a fireworks display in Tokyo nine days before release.</p>
        <div class="gapline"><span class="gp">Audio public <b>Aug 8, 2026</b></span><span class="gp">Released <b>Aug 17, 2026</b></span><span class="gp">Gap <b>9 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="lfPtJ106lIY"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">YouTube / Jingu Gaien, Tokyo</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>Recorded audio, no live vocal, no members on site. The song was synced to the shells at the Jingu Gaien fireworks festival and every phone in the crowd filmed it. The clips were on YouTube and short form the same night.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It proves the tease does not require the group's time at all. It went to <b>number one on the Oricon Daily Digital Single chart</b> on release day and number one on iTunes Japan.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The lowest-lift version in the whole set. The only thing that left the building was the audio, attached to an event the label did not have to build.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=lfPtJ106lIY" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 04 WESTERN -->
  <section class="sec wrap" id="west">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Western Pop</h2>
      <p class="desc">The same structure in the market HEAT is being marketed into, including the two biggest breakout singles of the last two years.</p>
    </div>
    <div class="grid" id="grid-west">

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">10</span><span class="lane-pill lane-west">Island Records</span></div>
        <h3 class="play-title">Perform it once, then wait fourteen months</h3>
        <p class="play-sub"><b>Chappell Roan, The Subway.</b> Debuted live and unreleased at Governors Ball, then held back for over a year while fans demanded it.</p>
        <div class="gapline"><span class="gp">Audio public <b>Jun 9, 2024</b></span><span class="gp">Released <b>Jul 31, 2025</b></span><span class="gp">Gap <b>417 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="iM17c6YaqcE"><button class="embed-btn" type="button">&#9654; Load the debut</button><span class="embed-meta">YouTube / Governors Ball, NYC</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An untitled, unreleased song performed in full at a festival. She did not post it. Crowd footage and full-set rips carried it to TikTok and YouTube, where it stayed and grew for fourteen months.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It became the highest charting single of her career: <b>number three on the Hot 100</b>, number one in the UK, and more than 3.9 million US Spotify streams on its first full day. The audience had been asking for it for a year.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Nothing was published by the artist or the label. The only decision made was to let it be heard.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=iM17c6YaqcE" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">11</span><span class="lane-pill lane-west">Island Records</span></div>
        <h3 class="play-title">Use a television slot as the drop</h3>
        <p class="play-sub"><b>Chappell Roan, The Giver.</b> World premiered on Saturday Night Live four months before there was a single to announce.</p>
        <div class="gapline"><span class="gp">Audio public <b>Nov 2, 2024</b></span><span class="gp">Released <b>Mar 13, 2025</b></span><span class="gp">Gap <b>131 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="9nFIqtf3XN4"><button class="embed-btn" type="button">&#9654; Load the premiere</button><span class="embed-meta">YouTube / Saturday Night Live</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>A finished, unreleased country song performed on network television. No artwork existed, no date existed, no announcement had been made. The performance itself was the campaign.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>It debuted at <b>number five on the Hot 100</b>, her first ever top ten debut, entered at number one on Hot Country Songs, and did 22.3 million US streams in its first week.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>One controlled public moment, held for four months, outperformed a conventional announcement cycle by a wide margin.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=9nFIqtf3XN4" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">12</span><span class="lane-pill lane-west">Atlantic Records</span></div>
        <h3 class="play-title">Play the unfinished album to a room full of phones</h3>
        <p class="play-sub"><b>Charli XCX, brat.</b> Snippets of an unannounced album played at a Boiler Room set six days before the album existed publicly.</p>
        <div class="gapline"><span class="gp">Audio public <b>Feb 22, 2024</b></span><span class="gp">Announced <b>Feb 28</b></span><span class="gp">Released <b>Feb 29</b></span><span class="gp">Gap <b>6 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="rKPBq_j4buQ"><button class="embed-btn" type="button">&#9654; Load the set</button><span class="embed-meta">YouTube / Boiler Room, Brooklyn</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>She DJed her own unreleased material to a crowd that filmed all of it. The show took 25,000 RSVPs within hours of being announced, the largest in Boiler Room's history. Fans were naming unreleased tracks before the album had a title in public.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The audience was given the job of decoding the record, which turned the announcement six days later into a confirmation rather than a reveal.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The tease does not have to be polished. Unfinished audio played in an unglamorous setting was the entire launch of the biggest pop album of that year.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=rKPBq_j4buQ" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">13</span><span class="lane-pill lane-west">Interscope</span></div>
        <h3 class="play-title">Teach the room the song before you sell it</h3>
        <p class="play-sub"><b>Gracie Abrams, That's So True.</b> An acoustic version circulated on TikTok and entered the tour setlist while still unreleased.</p>
        <div class="gapline"><span class="gp">Audio public <b>Sep 9, 2024</b></span><span class="gp">Announced <b>Oct 15</b></span><span class="gp">Released <b>Nov 6</b></span><span class="gp">Gap <b>36 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="uVKyevivEME"><button class="embed-btn" type="button">&#9654; Load the debut</button><span class="embed-meta">YouTube / Los Angeles</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An informal acoustic performance with her co-writer, including an improvised dance move that fans copied. It spread on TikTok fast enough that she added the unreleased song to her own tour setlist in response.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>By Radio City, still days before release, the crowd sang every word and reproduced the dance from the original clip. The record went to <b>number six on the Hot 100</b>, her first top ten, number one in the UK, and number one on Pop Airplay.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>The lowest quality asset in this entire set produced a number one at pop radio. Production value is not what makes the tease work.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=uVKyevivEME" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">14</span><span class="lane-pill lane-west">Geffen</span></div>
        <h3 class="play-title">Put the unreleased song in the setlist on opening night</h3>
        <p class="play-sub"><b>Olivia Rodrigo, obsessed.</b> Debuted at the GUTS tour opener almost four weeks before the deluxe edition was announced.</p>
        <div class="gapline"><span class="gp">Audio public <b>Feb 23, 2024</b></span><span class="gp">Announced <b>Mar 19</b></span><span class="gp">Released <b>Mar 22</b></span><span class="gp">Gap <b>25 days</b></span></div>
        <div class="embed" data-platform="yt" data-id="wgm9b8u0ELE"><button class="embed-btn" type="button">&#9654; Load the debut</button><span class="embed-meta">YouTube / Palm Springs</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">What actually went out</span><p>An unreleased song placed in the setlist on the first night of the tour. Fifteen thousand phones did the seeding, and creator clips were on TikTok the same night.</p></div>
          <div class="tblock why"><span class="tl">Why it works</span><p>The tour was already happening, so the tease cost nothing to produce. The song debuted at number 14 on the Hot 100.</p></div>
        </div>
        <div class="mig"><span class="ml">For HEAT</span><p>Where a stage already exists, the cheapest tease is a setlist decision. 82MAJOR's tour window in the fall is the same opportunity for the next release.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=wgm9b8u0ELE" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 05 TABLE -->
  <section class="sec wrap" id="table">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Every Case, Side By Side</h2>
      <p class="desc">Sorted by the gap between the audio going public and the release. Click any column header to re-sort.</p>
    </div>
    <div class="tablewrap"><table class="data" id="gaptable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
  </section>

  <!-- 06 THE PLAY -->
  <section class="sec wrap" id="play">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>The Play For HEAT</h2>
      <p class="desc">The version of this available to 82MAJOR before September 1, using assets that already exist.</p>
    </div>
    <div class="slate">
      <h3>Sequenced against the release</h3>
      <p class="sd">With no live date inside the release window, the version available before September 1 is the one LISA used rather than the one BLACKPINK used. That version needs one video and no new production.</p>
      <div class="steps">
        <div class="step">
          <div class="sw">Step 01<br />This week</div>
          <div><h4>One video, HEAT as the original sound</h4><p>A single member-shot vertical posted from the official account with the record playing as the original sound. <b>No title on screen, no release date, no artwork, no label mark.</b> The caption is written as a question rather than an announcement, so the comment section does the work.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 02<br />Same week</div>
          <div><h4>The members carry it outward</h4><p>Each member posts once from their own account using the same audio in a different setting. Five surfaces, one recording, no additional shoot. This is what turns a single post into a sound with momentum behind it.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 03<br />Automatic</div>
          <div><h4>The sound consolidates at release</h4><p>Because the release is distributed through Kakao, the pre-release original sound merges into the official track sound when HEAT goes live. <b>Every play, save and creation banked before September 1 lands on the official song</b> rather than being stranded on a separate audio page.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 04<br />Same asset</div>
          <div><h4>Three more surfaces at no extra cost</h4><p>The same clip runs as an Instagram trial reel, which is served only to accounts that do not already follow the group, plus YouTube Shorts and Spotify Clips. One asset, four platforms, four separate audiences.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 05<br />At announcement</div>
          <div><h4>The announcement lands on something</h4><p>When the label announcement runs on schedule, the hook is already familiar and the sound already has creations attached to it. The announcement converts an existing audience instead of introducing the record to a cold one.</p></div>
        </div>
      </div>
      <p class="need">What this asks for: <b>one video and permission.</b> No new shoot, no new asset, no change to the label's announcement calendar.</p>
    </div>
  </section>

  <!-- 07 METHOD -->
  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>Methodology</h2>
      <p class="desc">How this set was assembled, so the reasoning is auditable rather than a taste call.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / Selection rule</span><h4>Audio before announcement</h4><p>A case qualifies only if the recording was publicly audible <b>before</b> the release was formally announced, or before it was released where no separate announcement existed. Conventional teaser assets published after an announcement were excluded.</p></div>
      <div class="mcard"><span class="s">02 / Scope</span><h4>Korea and the West</h4><p>The set covers YG, SM, JYP, Starship, Pledis, BELIFT, BigHit, Source Music and EDAM on the Korean side, and Island, Atlantic, Interscope, Geffen, Capitol and RCA on the Western side, so the pattern is not read off one market.</p></div>
      <div class="mcard"><span class="s">03 / Sourcing</span><h4>Every clip verified live</h4><p>Each embedded clip was checked against the platform's own oEmbed endpoint at build. Titles, channels and handles were confirmed to match the moment described. There are no mockups and no dead links on this page.</p></div>
      <div class="mcard"><span class="s">04 / Dates</span><h4>Three dates per case</h4><p>Every case carries the date the audio became public, the date of the formal announcement, and the release date, taken from published reporting and platform timestamps. The gap is calculated from those, not estimated.</p></div>
      <div class="mcard"><span class="s">05 / Outcomes</span><h4>Published chart figures only</h4><p>Chart positions, unit counts and stream figures are as published by Billboard, Circle, Oricon, Melon and IFPI. Where a figure was not published, the cell is left empty rather than filled with an estimate.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> View counts and chart figures are current as of August 19, 2026 and will drift. Every clip was verified live and embeddable at build. Where a live premiere was captured by an audience member rather than published officially, the fan recording is shown, because that recording is the artifact the case is about. Prepared by Crowd Control Digital.</p>
  </footer>
</div>

<script>
(function(){
  // click to load embeds
  document.querySelectorAll('.embed').forEach(function(box){
    var btn=box.querySelector('.embed-btn');
    if(!btn)return;
    btn.addEventListener('click',function(){
      var plat=box.getAttribute('data-platform')||'tt';
      var id=box.getAttribute('data-id');
      if(plat==='yt'){
        box.innerHTML='<iframe class="yt" src="https://www.youtube-nocookie.com/embed/'+id+'?rel=0" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe>';
      }else{
        box.innerHTML='<iframe class="tt" src="https://www.tiktok.com/embed/v2/'+id+'" allow="encrypted-media;" allowfullscreen loading="lazy"></iframe>';
      }
      box.classList.add('loaded');
    });
  });

  // filters
  var chips=document.querySelectorAll('#filter .chip');
  var cards=document.querySelectorAll('.card[data-lane], .hero-card[data-lane]');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('active');});c.classList.add('active');
    var f=c.getAttribute('data-f');
    cards.forEach(function(card){card.classList.toggle('hide', f!=='all' && card.getAttribute('data-lane')!==f);});
  });});

  // gap table
  var ROWS=[
    {a:"LISA, ROCKSTAR",co:"LLOUD / RCA",w:"Untitled TikTok post, 13 seconds",ga:20,gr:21,gad:"20",grd:"21",r:"No. 1 Billboard Global Excl. US, 94.2M streams"},
    {a:"KATSEYE, Gnarly",co:"HYBE x Geffen",w:"Producer posted the demo publicly",ga:null,gr:755,gad:"",grd:"755",r:"No. 52 Hot 100, No. 6 Global 200, first Hot 100 entry"},
    {a:"Doechii, Anxiety",co:"TDE / Capitol",w:"Session recording left public on YouTube",ga:1937,gr:1941,gad:"1,937",grd:"1,941",r:"No. 9 Hot 100 peak, 20.6M first week US streams"},
    {a:"BLACKPINK, JUMP",co:"YG Entertainment",w:"Live premiere, song still untitled",ga:2,gr:6,gad:"2",grd:"6",r:"No. 1 Billboard Global 200, 123M streams"},
    {a:"Stray Kids, HOP",co:"JYP Entertainment",w:"Eight unreleased solos premiered live",ga:83,gr:111,gad:"83",grd:"111",r:"No. 1 Billboard 200, 1,989,508 copies on Circle"},
    {a:"aespa, Life's Too Short",co:"SM Entertainment",w:"Coachella premiere, billed as unreleased",ga:39,gr:62,gad:"39",grd:"62",r:"US festival debut of an unreleased title"},
    {a:"IU, Bye, Summer",co:"EDAM / Kakao",w:"Live clip published on her own channel",ga:null,gr:354,gad:"",grd:"354",r:"11,429,316 views unreleased, then No. 1 Melon Hot 100"},
    {a:"SEVENTEEN, Maestro",co:"Pledis",w:"Live premiere at Seoul World Cup Stadium",ga:null,gr:2,gad:"",grd:"2",r:"No. 1 Circle Digital, six music show wins"},
    {a:"IVE, I've IVE",co:"Starship",w:"Unreleased tracks premiered at a concert",ga:33,gr:58,gad:"33",grd:"58",r:"No. 1 Circle, 1.3M+ first week"},
    {a:"IVE, Revive+",co:"Starship",w:"Six unreleased solos at the tour opener",ga:77,gr:115,gad:"77",grd:"115",r:"Same structure repeated two years later"},
    {a:"LE SSERAFIM, PUREFLOW",co:"Source Music",w:"300 fan listening event, two songs live",ga:null,gr:1,gad:"",grd:"1",r:"No. 1 Circle, Spotify published the performances"},
    {a:"ENHYPEN, Bloody Paradise",co:"BELIFT LAB",w:"Live premiere with full choreography",ga:null,gr:13,gad:"",grd:"13",r:"582,000 views on fan footage before release"},
    {a:"TOMORROW X TOGETHER, Setsuna Hanabi",co:"BigHit Music",w:"Audio played at a public fireworks display",ga:null,gr:9,gad:"",grd:"9",r:"No. 1 Oricon Daily Digital Single, No. 1 iTunes Japan"},
    {a:"Chappell Roan, The Subway",co:"Island Records",w:"Untitled festival debut, fan captured",ga:null,gr:417,gad:"",grd:"417",r:"No. 3 Hot 100, No. 1 UK, 3.9M first day US streams"},
    {a:"Chappell Roan, The Giver",co:"Island Records",w:"World premiere on Saturday Night Live",ga:null,gr:131,gad:"",grd:"131",r:"No. 5 Hot 100 debut, No. 1 Hot Country Songs debut"},
    {a:"Charli XCX, brat",co:"Atlantic Records",w:"Unannounced album snippets DJed live",ga:6,gr:7,gad:"6",grd:"7",r:"25,000 RSVPs, largest in Boiler Room history"},
    {a:"Gracie Abrams, That's So True",co:"Interscope",w:"Acoustic clip on TikTok, then the setlist",ga:36,gr:58,gad:"36",grd:"58",r:"No. 6 Hot 100, No. 1 UK, No. 1 Pop Airplay"},
    {a:"Olivia Rodrigo, obsessed",co:"Geffen",w:"Unreleased song in the tour opener setlist",ga:25,gr:28,gad:"25",grd:"28",r:"No. 14 Hot 100 debut"}
  ];
  var tbl=document.getElementById('gaptable');
  var sortKey='gr', sortDir=-1;
  function cmp(x,y){ if(x===null)return 1; if(y===null)return -1; return x<y?-1:(x>y?1:0); }
  function draw(){
    if(!tbl)return;
    var rows=ROWS.slice().sort(function(p,q){
      var x=p[sortKey],y=q[sortKey];
      if(typeof x==='string'){return sortDir*x.localeCompare(y);}
      return sortDir*cmp(x,y);
    });
    var cols=[['a','Artist and song','l'],['co','Company','l'],['w','What went public first','l'],['gad','Days before announcement',''],['grd','Days before release',''],['r','Result','l']];
    var h='<thead><tr>';
    cols.forEach(function(c){h+='<th class="'+c[2]+(sortKey===c[0]||(sortKey==='ga'&&c[0]==='gad')||(sortKey==='gr'&&c[0]==='grd')?' sorted':'')+'" data-k="'+c[0]+'">'+c[1]+'</th>';});
    h+='</tr></thead><tbody>';
    rows.forEach(function(r){
      h+='<tr>'+
        '<td class="l">'+r.a+'</td>'+
        '<td class="l">'+r.co+'</td>'+
        '<td class="l">'+r.w+'</td>'+
        '<td>'+(r.gad||'')+'</td>'+
        '<td class="hi">'+r.grd+'</td>'+
        '<td class="l">'+r.r+'</td>'+
      '</tr>';});
    h+='</tbody>';
    tbl.innerHTML=h;
    tbl.querySelectorAll('th').forEach(function(th){th.addEventListener('click',function(){
      var k=th.getAttribute('data-k');
      if(k==='gad')k='ga'; if(k==='grd')k='gr';
      if(k===sortKey){sortDir=-sortDir;}else{sortKey=k;sortDir=(k==='a'||k==='co'||k==='w'||k==='r')?1:-1;}
      draw();
    });});
  }
  draw();
  var note=document.getElementById('tblnote');
  if(note){note.innerHTML='Gaps are calendar days, calculated from the published dates in each case. An empty announcement column means no separate announcement preceded the release. Chart figures are as published and current as of August 19, 2026.';}
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
