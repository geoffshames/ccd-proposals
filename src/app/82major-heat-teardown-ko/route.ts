export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>82MAJOR / HEAT / TikTok 선공개 오디오 / Crowd Control Digital</title>
<meta name="description" content="주요 아티스트가 공식 발표 전에 음원을 공개한 18가지 사례. 각 사례에서 무엇이 먼저 공개되었는지, 그 간격이 얼마나 길었는지, 그리고 어떤 결과를 냈는지." />
<meta property="og:title" content="82MAJOR / HEAT / TikTok 선공개 오디오" />
<meta property="og:description" content="한국과 서구권의 주요 아티스트들이 발표 전에 공개한 것들. Crowd Control Digital 준비." />
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
    <div class="cover-top"><span class="mono">레퍼런스 티어다운 / 선공개 오디오</span><span class="mono">2026년 8월</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">82MAJOR<span class="sm">HEAT / TikTok 선공개 오디오</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">주요 아티스트가 발표 전에 음원을 공개한 18가지 사례. 각 사례에서 무엇이 먼저 공개되었는지, 그 간격이 얼마나 길었는지, 그리고 차트에서 어떤 결과를 냈는지.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">기간</div><div class="cv">HEAT 9월 1일 오후 6시 KST 발매</div></div>
      <div><div class="mono dim">작성자</div><div class="cv">Geoff Shames / 공동 창립자, Crowd Control Digital</div></div>
    </div>
  </section>

  <!-- NAV -->
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">82MAJOR / HEAT</a>
      <div class="nb-lang"><a href="/82major-heat-teardown">EN</a><a href="/82major-heat-teardown-ko" class="on">KO</a></div>
      <div class="nb-jump"><a href="#tiktok">TikTok 우선</a><a href="#korea">국내 주요 기획사</a><a href="#now">현재 진행 중</a><a href="#west">서양 팝</a><a href="#table">더 갭스</a><a href="#play">더 플레이</a></div>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">모든 사례</button>
        <button class="chip" data-f="kr">한국</button>
        <button class="chip" data-f="west">서부</button>
      </div>
    </div>
  </div>

  <!-- CONTEXT -->
  <section class="ctx wrap">
    <h2>내용</h2>
    <p class="lead">시장 정상에 있는 아티스트들이 음악을 발표하기 <b>전에</b> 세상에 공개한 사례들을 모아, HEAT에 대한 9월 결정을 직감이 아닌 선례에 따라 내릴 수 있도록 했다. 아래의 모든 클립은 실제 라이브 게시물 또는 공연이다. 여기에는 목업이 없다.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">패턴</span><p>음원은 <b>제목, 날짜, 아트워크 없이</b> 공개된다. 청중은 이를 듣고 반응하며 요청하기 시작한다. 공식 발표는 이미 존재하는 수요에 맞춰 이루어진다.</p></div>
      <div class="ctx-card"><span class="k">출처</span><p>이것은 서양에서 수입된 것이 아니다. <b>YG, SM, JYP, Starship, Pledis, BELIFT, BigHit</b> 모두 이 방식의 한 버전을 운영하고 있으며, 그 중 두 곳은 이번 달에 이를 실행하고 있다.</p></div>
      <div class="ctx-card"><span class="k">비용</span><p>대부분의 경우, 아무것도 아니다. 가장 강력한 사례들은 <b>휴대폰 영상, 이미 공연 중이던 무대, 또는 이미 가지고 있던 곡</b>을 활용했다. 티징을 위해 새로운 콘텐츠가 제작되지 않았다.</p></div>
    </div>
    <div class="statstrip">
      <div class="stat"><div class="n">1억 3,320만</div><span class="l">LISA의 첫 게시물에 미공개, 무명 트랙에 맞춰 재생된 13초 클립</span></div>
      <div class="stat"><div class="n">20일</div><span class="l">해당 게시물과 그 곡이 처음으로 ROCKSTAR라고 불린 시점 사이</span></div>
      <div class="stat"><div class="n">83일</div><span class="l">Stray Kids의 라이브 프리미어와 HOP 발표 사이의 간격</span></div>
      <div class="stat"><div class="n">2일</div><span class="l">BLACKPINK의 JUMP 프리미어와 타이틀 공개 사이의 간격</span></div>
    </div>
    <p class="rule-line">모든 사례는 음원이 공개된 시점, 발매가 공식적으로 발표된 시점, 그리고 발매된 시점이라는 세 가지 날짜와 함께 명시된다. 중요한 것은 <b>그 간격</b>이다.</p>
  </section>

  <!-- 01 TIKTOK FIRST -->
  <section class="sec wrap" id="tiktok">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>TikTok 우선</h2>
      <p class="desc">미공개 음원이 TikTok 자체에 공개된 두 가지 사례, 이를 식별할 수 있는 아무것도 첨부되지 않은 채.</p>
    </div>

    <div class="hero-card" data-lane="kr">
      <div class="hero-embeds">
        <div class="embed" data-platform="tt" data-id="7377360398812450091"><button class="embed-btn" type="button">&#9654; 6월 6일 게시물 불러오기</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
        <div class="embed" data-platform="tt" data-id="7379957213126888750"><button class="embed-btn" type="button">&#9654; 6월 13일 게시물 불러오기</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
      </div>
      <div class="hc-r">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-kr">가장 유사한 사례</span></div>
        <h3>제목 없이 곡을 게시하세요.</h3>
        <p class="play-sub"><b>LISA, ROCKSTAR.</b> 그녀는 새로운 TikTok 계정을 개설하여 미발매 및 무제한 음원을 세상에 처음 공개하는 데 사용했다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 6월 6일</b></span><span class="gp">제목 <b>6월 26일</b></span><span class="gp"><b>6월 27일</b> 발매</span><span class="gp">간격 <b>20일</b></span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>아무도 들어본 적 없는 거친 신스 비트에 맞춰 춤추는 13초 분량의 영상. 캡션은 이모지 두 개였다. 곡 제목, 발매일, 아트워크, 레이블 마크는 없었다. 일주일 후 14초 분량의 두 번째 게시물이 올라왔고, 캡션은 이모지 한 개였다. 이 곡은 발매 전날인 6월 26일까지 제목이 공개되지 않았다.</p></div>
          <div class="tblock"><span class="tl">결과물</span><p>두 개의 제목 없는 게시물은 <b>1억 3,320만</b> 회와 <b>9,020만</b> 회의 재생수를 기록했다. ROCKSTAR는 9,420만 스트림으로 Billboard Global Excl. US 차트에서 1위(본인 첫 기록), Global 200에서 4위, Hot 100에서 70위(당시 개인 최고 기록)로 진입했다. Spotify Thailand에서는 하루 만에 257만 스트림을 기록하며 1위로 진입했다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>제목을 공개하지 않으면 게시물은 광고가 아닌 질문이 된다. 댓글 섹션은 곡을 알아내려는 사람들로 가득 차고, 이러한 추측이 알고리즘이 보상하는 요소이다. 이름이 공개될 때쯤이면 그 사운드는 이미 익숙해져 있다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>현재 82MAJOR에게 가능한 정확한 형태는 다음과 같습니다: 공식 계정에서 게시된, HEAT를 원본 사운드로 사용하고 질문 형식의 캡션이 달린 멤버 촬영 세로 영상 하나입니다. 새로운 자료나 레이블 발표는 필요하지 않습니다.</p></div>
        <div class="card-foot"><span class="also">곡의 이름을 언급한 첫 게시물은 <a href="https://www.tiktok.com/@lalalalisa_m/video/7384612210393222442" target="_blank" rel="noopener">20일 후에</a> 올라왔다.</span><a class="src" href="https://www.tiktok.com/@lalalalisa_m/video/7377360398812450091" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </div>
    </div>

    <div class="grid" style="margin-top:18px">
      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-kr">TikTok 우선</span></div>
        <h3 class="play-title">공식 발매 전에 TikTok에서 음원을 공개하다</h3>
        <p class="play-sub"><b>KATSEYE, Gnarly.</b> 데모는 그룹이 이 곡에 연결되기 전까지 2년 동안 TikTok에 공개되어 있었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2023년 4월 6일</b></span><span class="gp"><b>2025년 4월 30일</b> 발매</span><span class="gp">간격 <b>2년</b></span></div>
        <div class="embed" data-platform="tt" data-id="7218729393932209450"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @thechainsmokers</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>The Chainsmokers는 Alice Longyu Gao가 보컬로 참여한 데모를 "everythings gnarly"라는 캡션과 함께 자신들의 계정에 게시했다. 이는 프로듀서가 작업 중인 곡을 공유하는 것처럼 보였다. 아무도 이 곡이 KATSEYE의 음반이라는 것을 알지 못했다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이 훅은 2년간 대중에게 알려져 있었고, 그룹이 부르기 전부터 이미 그 문구를 알고 있는 고정 팬층이 있었다. 이 음원은 인지도를 가지고 발매되었고, 그룹의 첫 Billboard Hot 100 차트 진입(52위)과 Global 200에서 6위를 기록했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>음원이 유용하기 위해 반드시 공식 계정을 통해 공개될 필요는 없다. 프로듀서, 안무가 또는 댄스 스튜디오가 먼저 훅을 게시하면 그룹이 이를 공식화하기 전에 자체적인 생명력을 얻게 된다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@thechainsmokers/video/7218729393932209450" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-west">증명 요구</span></div>
        <h3 class="play-title">이미 공개된 오디오가 발매일에 정식으로 전환되다</h3>
        <p class="play-sub"><b>Doechii, Anxiety.</b> 2019년 세션 녹음본으로, 줄곧 공개 상태였던 것이 그녀의 경력 중 가장 큰 첫 주 판매량을 기록했다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2019년 11월 10일</b></span><span class="gp"><b>2025년 2월 28일</b> 발표</span><span class="gp"><b>2025년 3월 4일</b> 발매</span></div>
        <div class="embed" data-platform="yt" data-id="4a8pHjLkkz8"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">YouTube / Doechii</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그녀는 2019년 Coven Music Session으로 자신의 채널에 이 곡을 업로드했고, 그대로 두었습니다. 2025년 2월, 이 음원은 자체적으로 TikTok 트렌드가 되었습니다. 그녀는 2월 28일 TikTok에서 스튜디오 버전을 발표했고, 4일 후 발매했습니다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이는 기존 인지도의 가치를 가장 명확하게 측정하는 방법이다. 이 음원은 Hot 100에서 13위로 데뷔했으며, <b>미국 내 2,060만 스트림</b>을 기록하며 주간 289% 상승했고, 최고 9위를 기록한 후 Pop Airplay에서 1위에 올랐다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>친숙함이 자산이다. 9월 1일 이전에 축적된 모든 재생은 발매일에 음원을 처음 접하는 것이 아니라 이미 인지하고 있는 청중을 의미한다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=4a8pHjLkkz8" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>
    </div>
  </section>

  <!-- 02 KOREAN MAJORS -->
  <section class="sec wrap" id="korea">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>국내 주요 기획사</h2>
      <p class="desc">한국의 4대 대형 기획사와 Starship은, 각각 타이틀이 공개되기 전에 타이틀곡을 대중에게 들려주었습니다. 모든 경우에 회사가 상황을 통제했고, 청중이 유통을 담당했습니다.</p>
    </div>
    <div class="grid" id="grid-kr">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">04</span><span class="lane-pill lane-kr">YG Entertainment</span></div>
        <h3 class="play-title">곡이 존재한다고 발표한 후, 곡 공개를 보류하다</h3>
        <p class="play-sub"><b>BLACKPINK, JUMP.</b> YG는 투어 오프닝에서 신곡이 공개될 것이라고만 밝혔다. 제목, 날짜, 아트워크는 없었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2025년 7월 5일</b></span><span class="gp"><b>7월 7일</b> 발표</span><span class="gp"><b>7월 11일</b> 발매</span><span class="gp"><b>2일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="Dnlagc5oj4Y"><button class="embed-btn" type="button">&#9654; 프리미어 로드</button><span class="embed-meta">YouTube / 직캠, 고양 스타디움</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그룹은 7월 5일 고양 스타디움에서 21곡 중 15번째 곡으로 미공개 곡을 공연했다. 팬 촬영 영상은 몇 시간 내에 TikTok과 X에 올라왔다. 이틀 후 NME는 여전히 이 곡이 "JUMP라는 제목으로 추정된다"고 보도했는데, 이는 제목이 아직 공개되지 않았다는 증거이다. 뮤직비디오 티저는 7월 7일에 제목과 날짜를 확정했다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>회사는 미공개 음원을 직접 게시하지 않는다. 통제된 한 순간을 연출하고 경기장이 음원을 퍼뜨리도록 한다. 이 곡은 1억 2,300만 스트림으로 <b>Billboard Global 200에서 1위</b>, Global Excl. US에서 1위, Hot 100에서 28위로 진입했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>전이 가능한 부분은 스타디움이 아니라 순서이다. 음원을 먼저 대중에게 공개하고, 그 다음에 이름을 붙인다. 그러면 발표는 착륙할 지점을 갖게 된다.</p></div>
        <div class="card-foot"><span class="also">동일한 공연의 공식 버전은 <a href="https://www.youtube.com/watch?v=P169hsXjYQs" target="_blank" rel="noopener">여기</a>에서 확인할 수 있습니다.</span><a class="src" href="https://www.youtube.com/watch?v=Dnlagc5oj4Y" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">05</span><span class="lane-pill lane-kr">JYP Entertainment</span></div>
        <h3 class="play-title">곡들을 발표하기 3개월 전에 선공개하다</h3>
        <p class="play-sub"><b>Stray Kids, HOP.</b> 여덟 멤버 전원이 투어 오프닝에서 미발매 솔로곡을 라이브로 선보였다. 그리고 발매는 11주 동안 발표되지 않았다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 8월 24일</b></span><span class="gp"><b>11월 15일</b> 발표</span><span class="gp"><b>12월 13일</b> 발매</span><span class="gp"><b>83일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="a8qxAMkv5x4"><button class="embed-btn" type="button">&#9654; 프리미어 로드</button><span class="embed-meta">YouTube / 팬캠, KSPO Dome</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>8월 24일부터 KSPO Dome에서 열린 오프닝 공연에서 모든 멤버가 미공개 솔로곡을 선보였다. 이 클립들은 약 3개월 동안 YouTube와 TikTok에 공개되었지만, 어떤 발매와도 연결되지 않았다. Bang Chan의 솔로곡만 해도 팬 촬영 영상에서 119만 회의 조회수를 기록하고 있다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>83일은 구매할 것이 나오기 전에 곡들을 배우고, 순위를 매기고, 논쟁하기에 충분한 시간이다. HOP는 187,000 유닛으로 <b>Billboard 200에서 1위</b>로 진입했고, Circle Album Chart에서 <b>1,989,508장</b>을 판매했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>이 세트에서 가장 긴 간격이 가장 높은 판매 실적을 기록했다. 대중 노출 시간은 핵심 메커니즘이며, 부수적인 효과가 아니다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=a8qxAMkv5x4" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">06</span><span class="lane-pill lane-kr">SM Entertainment</span></div>
        <h3 class="play-title">아직 당신의 시장이 아닌 곳에서 데뷔시키세요.</h3>
        <p class="play-sub"><b>aespa, Life's Too Short.</b> Coachella에서 전 세계 최초 공개, 사전에 미공개 신곡으로만 소개되었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2022년 4월 23일</b></span><span class="gp"><b>6월 1일</b> 발표</span><span class="gp"><b>6월 24일</b> 발매</span><span class="gp"><b>39일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="O26XBLe0i-E"><button class="embed-btn" type="button">&#9654; 프리미어 로드</button><span class="embed-meta">YouTube / 팬캠, Coachella</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그룹은 88rising 무대에서 미공개 영어곡 전체를 공연했습니다. 사전 홍보에는 신곡이 최초 공개될 것이라고만 명시되어 있었습니다. 팬캠은 같은 주말 사막에서 음원을 담아냈고, 이는 SM이 어떤 발표를 하기 5주 전이었습니다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이는 음반의 첫 공개를 본국 시장이 아닌 목표 시장에서 진행하는 것이다. 이는 한국 외 지역에서 가장 빠르게 성장하는 그룹에게 미국 시장을 겨냥한 티징이 중요한 것과 같은 이유이다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>SM Entertainment는 타이틀곡에 대해 39일간의 사전 발표 기간을 운영했으며, 해당 음반이 목표로 하는 한국 외 시장에서 첫 선을 보였다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=O26XBLe0i-E" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">07</span><span class="lane-pill lane-kr">EDAM / Kakao Entertainment</span></div>
        <h3 class="play-title">미발매곡을 1년 동안 운영하세요.</h3>
        <p class="play-sub"><b>IU, Bye, Summer.</b> 발매 계획 없이 서울월드컵경기장에서 공연되었으며, 약 12개월 동안 대중에게 공개된 상태로 유지되었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 9월 21일</b></span><span class="gp"><b>2025년 9월 10일</b> 발매</span><span class="gp">간격 <b>~12개월</b></span></div>
        <div class="embed" data-platform="yt" data-id="pDvBiB1waBk"><button class="embed-btn" type="button">&#9654; 라이브 클립 로드</button><span class="embed-meta">YouTube / IU Official</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그녀는 이 곡을 라이브로 처음 선보였고, 그녀의 채널에서 라이브 클립을 공개했다. 상업적으로 존재하지 않던 곡임에도 불구하고 <b>11,429,316회</b>의 조회수를 기록했다. 팬들은 이 곡을 배우고 커버하며 1년 동안 발매를 요청했다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>발매 훨씬 이전부터 수요가 측정 가능했으며, 이미 알려진 잠재 고객층을 대상으로 발매가 계획되었다. Melon Hot 100 차트 1위를 기록했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>아티스트 본인 채널에서 공개된 미발매 음원이 천만 회 이상의 조회수를 기록했다. 미발매 음악을 의도적으로 공개하는 선례는 이미 Kakao 생태계 내에 존재한다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=pDvBiB1waBk" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

    </div>

    <div class="strip">
      <div class="st"><span class="k">Starship / IVE</span><h4>동일한 플레이 두 번 실행</h4><p>2023년 2월 <b>The Prom Queens</b>에서 미공개 곡들이 공연되었고, 33일 후 앨범이 발표되었으며, 첫 주에 130만 장이 판매되었다. 동일한 구조가 2025년 10월 <b>SHOW WHAT I AM</b> 투어 오프닝에서 다시 진행되었고, 77일 후 발표되었다.</p></div>
      <div class="st"><span class="k">Pledis / SEVENTEEN</span><h4>이틀 전</h4><p><b>Maestro</b>는 발매 이틀 전인 2024년 4월 27일과 28일 서울월드컵경기장에서 라이브로 첫 공개되었다. 이 곡은 Circle Digital 차트 1위를 차지했으며 음악 방송 6관왕을 달성했다.</p></div>
      <div class="st"><span class="k">Source Music / LE SSERAFIM</span><h4>하루 남음, 300명</h4><p>2026년 5월 21일 비공개 리스닝 이벤트에서 발매 하루 전 두 곡을 라이브로 최초 공개했다. Spotify는 이 이벤트를 퍼포먼스 영상으로 제작해 공개했다. 앨범은 Circle 차트 1위를 기록했다.</p></div>
    </div>
  </section>

  <!-- 03 RUNNING NOW -->
  <section class="sec wrap" id="now">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>현재 진행 중</h2>
      <p class="desc">두 HYBE 레이블은 HEAT와 동일한 발매 기간에 이를 실행하고 있다. 아래 두 클립은 이번 달에 업로드되었다.</p>
    </div>
    <div class="grid">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">08</span><span class="lane-pill lane-live">이번 달</span></div>
        <h3 class="play-title">오디오와 함께 안무를 13일 일찍 공개</h3>
        <p class="play-sub"><b>ENHYPEN, Bloody Paradise.</b> 8월 8일 부산에서 완전체 무대, 8월 21일에 발매될 싱글을 위해.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2026년 8월 8일</b></span><span class="gp"><b>2026년 8월 21일</b> 발매</span><span class="gp"><b>13일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="U4NbrNBKtUs"><button class="embed-btn" type="button">&#9654; 프리미어 로드</button><span class="embed-meta">YouTube / fancam, 부산 사직</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>미공개 타이틀곡은 소속사 확인에 따라 부산 사직 실내체육관에서 이틀 밤 동안 풀 안무로 공연되었다. 팬 촬영 영상은 같은 날 올라왔고, 여기에 임베드된 클립은 아직 아무도 스트리밍할 수 없는 곡임에도 불구하고 이미 582,000회의 조회수를 기록하고 있다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>음원과 동시에 안무를 공개하는 것은 단순히 콘서트 순간이 아닌 숏폼 콘텐츠의 동력이 된다. 모든 팬캠은 음반 발매 전 크리에이터가 따라 할 수 있는 템플릿이 된다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>이는 현재 HEAT가 발매되는 달에 13일의 사전 발매 기간을 운영하는 동일한 등급의 회사이다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=U4NbrNBKtUs" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">09</span><span class="lane-pill lane-live">이번 달</span></div>
        <h3 class="play-title">아티스트 없이 대중 앞에서 음원을 재생하다</h3>
        <p class="play-sub"><b>TOMORROW X TOGETHER, Setsuna Hanabi.</b> 타이틀곡은 도쿄 불꽃놀이 행사에서 재생되었으며, 이는 발매 9일 전이었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2026년 8월 8일</b></span><span class="gp"><b>2026년 8월 17일</b> 발매</span><span class="gp"><b>9일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="lfPtJ106lIY"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">YouTube / Jingu Gaien, Tokyo</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>녹음된 음원, 라이브 보컬 없음, 현장 멤버 없음. 이 곡은 진구 가이엔 불꽃놀이 축제의 불꽃에 맞춰 동기화되었고, 관중의 모든 휴대폰이 이를 촬영했습니다. 클립들은 같은 날 밤 YouTube와 숏폼 플랫폼에 올라왔습니다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이는 티징이 그룹의 시간을 전혀 필요로 하지 않음을 증명한다. 발매 당일 <b>Oricon Daily Digital Single 차트 1위</b>와 iTunes Japan 1위를 기록했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>전체 세트 중 가장 적은 노력이 들어간 버전. 건물 밖으로 나간 유일한 것은 레이블이 만들 필요가 없었던 이벤트에 첨부된 음원이었다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=lfPtJ106lIY" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 04 WESTERN -->
  <section class="sec wrap" id="west">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>서양 팝</h2>
      <p class="desc">HEAT가 마케팅되는 시장과 동일한 구조이며, 지난 2년간 가장 큰 성공을 거둔 두 개의 히트 싱글을 포함한다.</p>
    </div>
    <div class="grid" id="grid-west">

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">10</span><span class="lane-pill lane-west">Island Records</span></div>
        <h3 class="play-title">한 번 공연한 후 14개월을 기다리세요.</h3>
        <p class="play-sub"><b>Chappell Roan, The Subway.</b> Governors Ball에서 라이브로 미발매 상태로 첫선을 보였고, 팬들의 요청에도 불구하고 1년 이상 공개되지 않았다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 6월 9일</b></span><span class="gp"><b>2025년 7월 31일</b> 발매</span><span class="gp">간격 <b>417일</b></span></div>
        <div class="embed" data-platform="yt" data-id="iM17c6YaqcE"><button class="embed-btn" type="button">&#9654; 데뷔 로드</button><span class="embed-meta">YouTube / Governors Ball, NYC</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>페스티벌에서 무제, 미발매 곡이 완곡으로 공연되었다. 그녀는 이를 게시하지 않았다. 관객 영상과 풀셋 리핑 영상이 TikTok과 YouTube로 퍼져나가 14개월 동안 인기를 유지하며 성장했다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이 곡은 그녀의 경력에서 가장 높은 차트 순위를 기록한 싱글이 되었습니다: <b>Hot 100 차트 3위</b>, 영국 차트 1위, 그리고 발매 첫날 390만 회 이상의 미국 Spotify 스트리밍을 기록했습니다. 청중은 1년 동안 이 곡을 요청해왔습니다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>아티스트나 레이블에 의해 아무것도 게시되지 않았다. 유일한 결정은 들리게 하는 것이었다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=iM17c6YaqcE" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">11</span><span class="lane-pill lane-west">Island Records</span></div>
        <h3 class="play-title">TV 슬롯을 공개 시점으로 활용하세요.</h3>
        <p class="play-sub"><b>Chappell Roan, The Giver.</b> 발표할 싱글이 나오기 4개월 전, Saturday Night Live에서 전 세계 최초 공개.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 11월 2일</b></span><span class="gp"><b>2025년 3월 13일</b> 발매</span><span class="gp">간격 <b>131일</b></span></div>
        <div class="embed" data-platform="yt" data-id="9nFIqtf3XN4"><button class="embed-btn" type="button">&#9654; 프리미어 로드</button><span class="embed-meta">YouTube / Saturday Night Live</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>완성되었지만 미발매된 컨트리 곡이 지상파 TV에서 공연되었다. 아트워크도, 발매일도, 발표도 없었다. 그 공연 자체가 캠페인이었다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>이 곡은 <b>Hot 100 차트 5위</b>로 데뷔했으며, 그녀의 첫 톱 10 데뷔였다. Hot Country Songs 차트 1위에 올랐고, 첫 주에 미국 내 2,230만 스트리밍을 기록했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>4개월 동안 통제된 한 번의 공개는 기존의 발표 주기보다 훨씬 뛰어난 성과를 보였다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=9nFIqtf3XN4" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">12</span><span class="lane-pill lane-west">Atlantic Records</span></div>
        <h3 class="play-title">휴대폰으로 가득 찬 방에서 미완성 앨범을 들려주다</h3>
        <p class="play-sub"><b>Charli XCX, brat.</b> 미발표 앨범의 일부가 Boiler Room 세트에서 재생되었으며, 이는 앨범이 대중에게 공개되기 6일 전이었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 2월 22일</b></span><span class="gp"><b>2월 28일</b> 발표</span><span class="gp"><b>2월 29일</b> 발매</span><span class="gp"><b>6일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="rKPBq_j4buQ"><button class="embed-btn" type="button">&#9654; 세트 로드</button><span class="embed-meta">YouTube / Boiler Room, 브루클린</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그녀는 자신의 미공개 곡들을 모든 것을 촬영하는 관중 앞에서 DJing했습니다. 이 공연은 발표 몇 시간 만에 25,000건의 RSVP를 기록하며 Boiler Room 역사상 가장 큰 규모였습니다. 팬들은 앨범이 공식적으로 제목을 갖기 전부터 미공개 트랙들의 이름을 붙이고 있었습니다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>청중은 해당 음원을 해독하는 임무를 부여받았고, 이는 6일 후의 발표를 단순한 공개가 아닌 확인으로 만들었다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>티징은 다듬어질 필요가 없다. 화려하지 않은 환경에서 재생된 미완성 음원이 그 해 가장 큰 팝 앨범의 전체 론칭이었다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=rKPBq_j4buQ" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">13</span><span class="lane-pill lane-west">인터스코프</span></div>
        <h3 class="play-title">곡을 판매하기 전에 대중에게 익숙하게 하세요.</h3>
        <p class="play-sub"><b>Gracie Abrams, That's So True.</b> 어쿠스틱 버전이 TikTok에서 유포되었고 미발매 상태임에도 불구하고 투어 세트리스트에 포함되었다.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 9월 9일</b></span><span class="gp"><b>10월 15일</b> 발표</span><span class="gp"><b>11월 6일</b> 발매</span><span class="gp"><b>36일</b> 차이</span></div>
        <div class="embed" data-platform="yt" data-id="uVKyevivEME"><button class="embed-btn" type="button">&#9654; 데뷔 로드</button><span class="embed-meta">YouTube / Los Angeles</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>그녀의 공동 작곡가와 함께한 비공식 어쿠스틱 공연으로, 팬들이 따라 한 즉흥적인 춤 동작이 포함되어 있었습니다. 이것은 TikTok에서 빠르게 확산되어, 그녀는 이에 대한 반응으로 미공개 곡을 자신의 투어 세트리스트에 추가했습니다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>Radio City 공연 당시, 발매까지 아직 며칠 남았음에도 불구하고 관중은 모든 가사를 따라 불렀고 원본 클립의 춤을 재현했습니다. 이 음반은 <b>Hot 100 차트 6위</b>에 올랐고, 그녀의 첫 Top 10 진입이자 영국 차트 1위, Pop Airplay 차트 1위를 기록했습니다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>이 모든 자료 중 가장 낮은 품질의 자료가 팝 라디오에서 1위를 차지했다. 티저의 성공은 제작 가치에 달려있지 않다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=uVKyevivEME" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">14</span><span class="lane-pill lane-west">Geffen</span></div>
        <h3 class="play-title">오프닝 나이트 세트리스트에 미공개 곡을 포함시키다</h3>
        <p class="play-sub"><b>Olivia Rodrigo, obsessed.</b> 디럭스 에디션 발표 약 4주 전, GUTS 투어 오프닝에서 첫 공개.</p>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 2월 23일</b></span><span class="gp"><b>3월 19일</b> 발표</span><span class="gp"><b>3월 22일</b> 발매</span><span class="gp">간격 <b>25일</b></span></div>
        <div class="embed" data-platform="yt" data-id="wgm9b8u0ELE"><button class="embed-btn" type="button">&#9654; 데뷔 로드</button><span class="embed-meta">YouTube / Palm Springs</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개 내용</span><p>투어 첫날 세트리스트에 미발매곡이 포함되었다. 15,000대의 휴대폰이 시딩(seeding) 역할을 했고, 같은 날 밤 TikTok에 크리에이터 클립이 올라왔다.</p></div>
          <div class="tblock why"><span class="tl">작동 원리</span><p>투어는 이미 진행 중이었으므로, 티저 제작 비용은 들지 않았다. 이 곡은 Hot 100 차트 14위로 데뷔했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>이미 무대가 존재하는 경우, 가장 저렴한 티징은 세트리스트 결정이다. 82MAJOR의 가을 투어 기간은 다음 발매를 위한 동일한 기회이다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.youtube.com/watch?v=wgm9b8u0ELE" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 05 TABLE -->
  <section class="sec wrap" id="table">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>모든 케이스, 나란히</h2>
      <p class="desc">음원 공개와 발매 사이의 간격으로 정렬. 재정렬하려면 아무 열 헤더나 클릭하십시오.</p>
    </div>
    <div class="tablewrap"><table class="data" id="gaptable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
  </section>

  <!-- 06 THE PLAY -->
  <section class="sec wrap" id="play">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>The Play For HEAT</h2>
      <p class="desc">9월 1일 이전에 82MAJOR에게 제공된 이 버전은 이미 존재하는 자산을 사용한다.</p>
    </div>
    <div class="slate">
      <h3>발매 순서대로 정렬</h3>
      <p class="sd">발매 기간 내 라이브 일정이 없는 상황에서 9월 1일 이전에 사용 가능한 버전은 BLACKPINK가 사용한 버전이 아닌 LISA가 사용한 버전이다. 해당 버전은 하나의 영상만 필요하며 새로운 제작이 필요 없다.</p>
      <div class="steps">
        <div class="step">
          <div class="sw">스텝 01<br />이번 주</div>
          <div><h4>하나의 영상, HEAT를 오리지널 사운드로</h4><p>공식 계정에서 멤버 단독 촬영 세로형 영상을 게시하고 음원을 오리지널 사운드로 활용한다. <b>화면 내 제목, 발매일, 아트워크, 레이블 마크를 넣지 않는다.</b> 캡션은 공지보다는 질문 형식으로 작성하여 댓글 섹션이 그 역할을 수행하도록 한다.</p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 02<br />동일 주</div>
          <div><h4>멤버들이 외부로 확장한다</h4><p>각 멤버는 본인 계정에서 동일한 음원을 다른 설정으로 한 번씩 게시한다. 5개의 게시물, 1개의 음원, 추가 촬영은 없다. 이는 단일 게시물을 모멘텀을 가진 사운드로 전환시킨다.</p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 03<br />자동</div>
          <div><h4>사운드는 발매 시점에 통합됩니다.</h4><p>발매가 Kakao를 통해 유통되므로, HEAT가 라이브될 때 사전 공개 오리지널 사운드는 공식 트랙 사운드와 병합된다. <b>9월 1일 이전에 축적된 모든 재생, 저장 및 생성은 별도의 오디오 페이지에 고립되지 않고 공식 곡으로 집계된다.</b></p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 04<br />동일 자산</div>
          <div><h4>추가 비용 없이 세 가지 추가 노출</h4><p>동일한 클립을 Instagram 시험 릴스로 운영하며, 이는 그룹을 아직 팔로우하지 않는 계정에만 제공된다. 또한 YouTube Shorts 및 Spotify Clips로도 운영한다. 1개의 에셋, 4개의 플랫폼, 4개의 개별 오디언스를 확보한다.</p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 05<br />발표 시</div>
          <div><h4>발표는 어떤 것을 기반으로 합니다.</h4><p>레이블 공지가 예정대로 진행될 때, 훅은 이미 익숙해져 있고 사운드에는 이미 창작물이 생성되어 있다. 공지는 새로운 오디언스에게 음원을 소개하는 대신 기존 오디언스를 전환시킨다.</p></div>
        </div>
      </div>
      <p class="need">필요한 것은: <b>하나의 영상과 허가.</b> 새로운 촬영, 새로운 자료, 레이블의 발표 일정 변경은 없다.</p>
    </div>
  </section>

  <!-- 07 METHOD -->
  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>방법론</h2>
      <p class="desc">이 세트가 어떻게 구성되었는지, 따라서 그 이유는 취향의 문제가 아닌 감사 가능한 것이다.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / 선택 규칙</span><h4>발표 전 오디오</h4><p>해당 사례는 음원이 발매가 공식적으로 발표되기 <b>전</b>, 또는 별도의 발표 없이 발매된 경우 발매되기 전 대중에게 공개적으로 들렸을 때에만 인정됩니다. 발표 후 공개된 일반적인 티저 자료는 제외되었습니다.</p></div>
      <div class="mcard"><span class="s">02 / 범위</span><h4>한국과 서구</h4><p>이 세트는 한국 측에서는 YG, SM, JYP, Starship, Pledis, BELIFT, BigHit, Source Music, EDAM을, 서구권 측에서는 Island, Atlantic, Interscope, Geffen, Capitol, RCA를 다루므로, 이러한 패턴은 단일 시장으로만 해석되지 않습니다.</p></div>
      <div class="mcard"><span class="s">03 / 소싱</span><h4>모든 클립 라이브 검증 완료</h4><p>각 임베디드 클립은 빌드 시 플랫폼 자체의 oEmbed 엔드포인트와 대조하여 확인되었습니다. 제목, 채널, 핸들은 설명된 순간과 일치하는 것으로 확인되었습니다. 이 페이지에는 목업이나 끊어진 링크가 없습니다.</p></div>
      <div class="mcard"><span class="s">04 / 날짜</span><h4>건당 날짜 3개</h4><p>모든 사례는 음원이 대중에게 공개된 날짜, 공식 발표 날짜, 그리고 발매 날짜를 포함합니다. 이는 공개된 보도 자료와 플랫폼 타임스탬프에서 가져온 것입니다. 이 간격은 추정치가 아닌 해당 날짜들을 기반으로 계산됩니다.</p></div>
      <div class="mcard"><span class="s">05 / 결과</span><h4>공개된 차트 수치만</h4><p>차트 순위, 판매량, 스트리밍 수치는 Billboard, Circle, Oricon, Melon, IFPI에서 발표한 자료를 따른다. 수치가 공개되지 않은 경우, 추정치로 채우는 대신 해당 칸을 비워둔다.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>참고.</b> 조회수 및 차트 수치는 2026년 8월 19일 기준이며 변동될 수 있다. 모든 클립은 제작 시점에 라이브 및 임베드 가능 여부가 확인되었다. 라이브 프리미어가 공식적으로 게시되지 않고 관객에 의해 촬영된 경우, 해당 녹화본이 본 사례의 증거 자료이므로 팬 녹화본을 사용했다. Crowd Control Digital 제작.</p>
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
    {a:"LISA, ROCKSTAR",co:"LLOUD / RCA",w:"무제 TikTok 게시물, 13초",ga:20,gr:21,gad:"20",grd:"21",r:"Billboard Global Excl. US 1위, 스트리밍 9,420만 회"},
    {a:"KATSEYE, Gnarly",co:"HYBE x Geffen",w:"프로듀서 데모 공개",ga:null,gr:755,gad:"",grd:"755",r:"Hot 100 52위, Global 200 6위, Hot 100 첫 진입"},
    {a:"Doechii, Anxiety",co:"TDE / Capitol",w:"YouTube에 공개된 세션 녹음본",ga:1937,gr:1941,gad:"1,937",grd:"1,941",r:"Hot 100 최고 9위, 미국 첫 주 스트리밍 2,060만 회"},
    {a:"BLACKPINK, JUMP",co:"YG Entertainment",w:"라이브 최초 공개, 곡명 비공개",ga:2,gr:6,gad:"2",grd:"6",r:"Billboard Global 200 1위, 1억 2,300만 스트리밍"},
    {a:"Stray Kids, HOP",co:"JYP Entertainment",w:"미공개 솔로곡 8곡 라이브 최초 공개",ga:83,gr:111,gad:"83",grd:"111",r:"Billboard 200 1위, Circle 1,989,508장"},
    {a:"aespa, Life's Too Short",co:"SM Entertainment",w:"Coachella 최초 공개, 미공개곡으로 소개",ga:39,gr:62,gad:"39",grd:"62",r:"미국 페스티벌 미공개곡 데뷔"},
    {a:"IU, Bye, Summer",co:"EDAM / Kakao",w:"라이브 클립 본인 채널에 공개",ga:null,gr:354,gad:"",grd:"354",r:"발매 전 11,429,316회 조회수, 이후 Melon Hot 100 1위"},
    {a:"SEVENTEEN, Maestro",co:"Pledis",w:"서울월드컵경기장에서 라이브 최초 공개",ga:null,gr:2,gad:"",grd:"2",r:"Circle Digital 1위, 음악방송 6관왕"},
    {a:"IVE, I've IVE",co:"Starship",w:"콘서트에서 최초 공개된 미공개곡",ga:33,gr:58,gad:"33",grd:"58",r:"Circle 1위, 첫 주 130만+"},
    {a:"IVE, Revive+",co:"Starship",w:"투어 오프닝에서 미공개 솔로곡 6곡 공개",ga:77,gr:115,gad:"77",grd:"115",r:"동일한 구성 2년 후 반복"},
    {a:"LE SSERAFIM, PUREFLOW",co:"Source Music",w:"300명 팬 리스닝 이벤트, 두 곡 라이브",ga:null,gr:1,gad:"",grd:"1",r:"Circle 1위, Spotify에서 공연 공개"},
    {a:"ENHYPEN, Bloody Paradise",co:"BELIFT LAB",w:"풀 안무 라이브 최초 공개",ga:null,gr:13,gad:"",grd:"13",r:"발매 전 팬 영상 조회수 582,000회"},
    {a:"TOMORROW X TOGETHER, Setsuna Hanabi",co:"BigHit Music",w:"공개 불꽃놀이 행사 음원 송출",ga:null,gr:9,gad:"",grd:"9",r:"Oricon Daily Digital Single 1위, iTunes Japan 1위"},
    {a:"Chappell Roan, The Subway",co:"Island Records",w:"곡명 비공개 페스티벌 데뷔, 팬 촬영",ga:null,gr:417,gad:"",grd:"417",r:"Hot 100 3위, 영국 1위, 미국 첫날 스트리밍 390만 회"},
    {a:"Chappell Roan, The Giver",co:"Island Records",w:"Saturday Night Live 월드 프리미어",ga:null,gr:131,gad:"",grd:"131",r:"Hot 100 5위 데뷔, Hot Country Songs 1위 데뷔"},
    {a:"Charli XCX, brat",co:"Atlantic Records",w:"미발표 앨범 스니펫 라이브 DJing",ga:6,gr:7,gad:"6",grd:"7",r:"RSVP 25,000명, Boiler Room 역사상 최대 규모"},
    {a:"Gracie Abrams, That's So True",co:"Interscope",w:"TikTok 어쿠스틱 클립, 세트리스트 추가",ga:36,gr:58,gad:"36",grd:"58",r:"Hot 100 6위, UK 1위, Pop Airplay 1위"},
    {a:"Olivia Rodrigo, obsessed",co:"Geffen",w:"투어 오프닝 세트리스트 미공개곡",ga:25,gr:28,gad:"25",grd:"28",r:"Hot 100 14위 데뷔"}
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
    var cols=[['a','아티스트 및 곡명','l'],['co','회사','l'],['w','최초 공개 내용','l'],['gad','발표 전 일수',''],['grd','발매 전 일수',''],['r','결과','l']];
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
  if(note){note.innerHTML='간격은 각 경우의 공개일로부터 계산된 역일입니다. 공지 열이 비어 있으면 발매 전 별도의 공지가 없었음을 의미합니다. 차트 수치는 2026년 8월 19일 현재 게시된 내용과 같습니다.';}
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
