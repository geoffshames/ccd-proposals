export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="너비=기기 너비, 초기 배율=1.0" />
<title>82MAJOR / HEAT / 미공개 음원을 오리지널 사운드로 / Crowd Control Digital</title>
<meta name="description" content="아티스트가 싱글 발표 전에 미발매곡을 자신의 original sound로 TikTok에 올린 13건의 검증된 사례가 있으며, 각 사례마다 사운드 이름, 사운드 소유자, 재생 횟수가 명시되어 있다." />
<meta property="og:title" content="82MAJOR / HEAT / 미공개 음원을 오리지널 사운드로" />
<meta property="og:description" content="13개의 검증된 사전 발표 게시물에서 사운드 열에 실제로 표시된 내용. Crowd Control Digital 준비." />
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
    <div class="cover-top"><span class="mono">레퍼런스 세트 / TikTok 사전 공개 오디오</span><span class="mono">2026년 8월</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">82MAJOR<span class="sm">HEAT / UNRELEASED AUDIO AS AN ORIGINAL SOUND</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">발표 전에 미발매곡을 자신의 사운드로 TikTok에 올린 아티스트 13명. 각 카드에는 사운드 행에 실제로 무엇이 적혀 있었는지, 그리고 노래가 이름 없이 얼마나 오래 지속되었는지가 표시된다.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">기간</div><div class="cv">HEAT은 9월 1일 오후 6시 KST에 발매된다</div></div>
      <div><div class="mono dim">작성자</div><div class="cv">Geoff Shames / Crowd Control Digital 공동 설립자</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">82MAJOR / HEAT</a>
      <div class="nb-lang"><a href="/82major-heat-teardown">EN</a><a href="/82major-heat-teardown-ko" class="on">KO</a></div>
      <div class="nb-jump"><a href="#asia">한국과 일본</a><a href="#west">서구 메이저</a><a href="#table">사운드</a><a href="#play">더 플레이</a></div>
      <div class="nb-filters" id="filter">
        <button class="chip active" data-f="all">총 13개</button>
        <button class="chip" data-f="kr">아시아</button>
        <button class="chip" data-f="west">서부</button>
      </div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>이것은 무엇인가</h2>
    <p class="lead">여기 모든 사례는 동일한 특정 움직임을 보여줍니다. 아티스트가 싱글 발표 전에 미공개 곡을 <b>자신의 사운드</b>로 첨부하여 TikTok에 영상을 게시하는 것입니다. 타이틀 카드, 발매일, 아트워크는 없습니다. 이 곡은 스트리밍 서비스에 없으며, 사운드는 발매된 트랙이 아닌 아티스트의 게시물에 속합니다.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">나가는 내용</span><p>보통 휴대폰 화질의 짧은 세로형 영상으로, 아래에 음원이 재생된다. 캡션은 <b>질문이거나 아무것도 없다</b>. 곡명은 어디에도 나타나지 않는다.</p></div>
      <div class="ctx-card"><span class="k">담당자</span><p>BLACKPINK 멤버 2명, 한국 솔로 아티스트 1명, Billboard Japan 1위를 차지한 일본 십대 아티스트 1명, Universal Music Japan 계약 아티스트 1명, <b>Sony Music Philippines</b>, 그리고 서구 메이저 레이블 소속 아티스트 6명.</p></div>
      <div class="ctx-card"><span class="k">생산되는 결과물</span><p>음원은 미스터리인 상태에서 재생, 저장, 생성 횟수를 축적하므로, 발표는 <b>이미 훅을 알고 있는</b> 청중에게 도달한다.</p></div>
    </div>
    <div class="readme">
      <h4>각 카드 읽는 방법</h4>
      <p>모든 카드에는 빨간색 <b>SOUND</b> 행이 있습니다. 이는 TikTok이 자체적으로 보고하는 사운드입니다. 왼쪽에는 사운드 이름이, 오른쪽에는 소유 계정이 표시됩니다. 이것이 전체 증거입니다. 사운드가 <b>LISA의 "COMING SOON"</b> 또는 <b>JENNIE의 "JENNIE untitled"</b>로 표시될 경우, 해당 오디오는 아티스트 소유이며 미공개 상태입니다. 발매된 트랙은 대신 아티스트에게 음악 엔티티로 크레딧된 곡명으로 표시되는데, 이는 다른 것이며 이 페이지에서 다루는 내용이 아닙니다.</p>
      <p>각 카드에는 게시된 캡션과 오디오가 공개된 시점과 곡이 이름을 얻은 시점 사이의 일수 차이가 포함된다.</p>
    </div>
    <div class="statstrip">
      <div class="stat"><div class="n">133.2M</div><span class="l">사운드가 COMING SOON으로 명명된 한 게시물에서의 재생수.</span></div>
      <div class="stat"><div class="n">20일</div><span class="l">그 곡이 대중적으로 ROCKSTAR라고 불리기 전에</span></div>
      <div class="stat"><div class="n">113일</div><span class="l">JENNIE untitled는 발매 전까지 제목 없이 유지되었다.</span></div>
      <div class="stat"><div class="n">13</div><span class="l">검증된 사례로, 모든 사운드는 TikTok 자체와 대조하여 확인한다.</span></div>
    </div>
  </section>

  <!-- 01 ASIA -->
  <section class="sec wrap" id="asia">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>한국과 일본</h2>
      <p class="desc">BLACKPINK 멤버 2명과 일본 메이저 레이블 계약 아티스트 2명을 포함한 6개의 아시아 아티스트가 각자 발표 전에 자신만의 TikTok 사운드로 미공개 곡을 운영했다.</p>
    </div>

    <div class="hero-card" data-lane="kr">
      <div class="hero-embeds">
        <div class="embed" data-id="7377360398812450091"><button class="embed-btn" type="button">&#9654; 6월 6일 게시물을 로드한다</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
        <div class="embed" data-id="7379957213126888750"><button class="embed-btn" type="button">&#9654; 6월 13일 게시물을 로드한다</button><span class="embed-meta">TikTok / @lalalalisa_m</span></div>
      </div>
      <div class="hc-r">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-kr">가장 명확한 사례</span></div>
        <h3>사운드 이름을 곡이 아닌 티저에 맞춰 짓는다.</h3>
        <p class="play-sub"><b>LISA, ROCKSTAR.</b> 그녀는 새로운 TikTok 계정을 개설하고, 이를 통해 처음으로 COMING SOON이라는 사운드 아래에서 미공개 음원을 세상에 공개했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">COMING SOON</span><span class="sa">LISA</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>&#11088;&#65039;&#128171;</div>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 6월 6일</b></span><span class="gp">이름 <b>Jun 26</b></span><span class="gp"><b>6월 27일</b> 발매</span><span class="gp"><b>20일</b>간 무제</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>아무도 들어본 적 없는 비트에 맞춰 춤추는 13초짜리 영상이 이모티콘 두 개와 함께 게시되었습니다. 일주일 후, 14초짜리 두 번째 게시물이 이모티콘 한 개와 함께 <b>TEASER</b>라는 두 번째 커스텀 사운드로 올라왔습니다. 둘 다 곡명은 언급하지 않습니다. ROCKSTAR라는 곡명이 언급된 첫 게시물은 발매 하루 전인 6월 26일에 올라옵니다.</p></div>
          <div class="tblock"><span class="tl">사운드의 성과</span><p><b>COMING SOON</b>은 <b>1억 3,320만 회 재생</b>을, <b>TEASER</b>는 <b>9,020만 회 재생</b>을 기록했으며, 둘 다 어디에서도 스트리밍할 수 없는 오디오였습니다. ROCKSTAR는 이후 Billboard Global Excl. US 차트에서 9,420만 스트림으로 1위(그녀의 첫 1위)를 차지했으며, Global 200 차트에서는 4위를 기록했습니다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>사운드 이름이 마케팅 역할을 한다. COMING SOON은 무엇인지 알려주지 않고 기다릴 것이 있음을 청중에게 알리므로, 댓글 섹션은 이를 식별하려는 사람들로 가득 찬다. 플랫폼은 이러한 추측을 보상한다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>즉시 사용 가능하며 새로운 것이 필요하지 않다: 멤버가 촬영한 세로 영상 하나, 사운드는 HEAT, 그리고 사운드 이름은 HEAT 대신 COMING SOON과 같은 것으로 한다.</p></div>
        <div class="card-foot"><span class="also">곡의 이름을 명시한 첫 게시물은 <a href="https://www.tiktok.com/@lalalalisa_m/video/7384612210393222442" target="_blank" rel="noopener">20일 후에</a> 나왔다.</span><a class="src" href="https://www.tiktok.com/@lalalalisa_m/video/7377360398812450091" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </div>
    </div>

    <div class="grid" style="margin-top:18px">

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-kr">한국</span></div>
        <h3 class="play-title">사운드 이름에 untitled 단어를 포함한다</h3>
        <p class="play-sub"><b>JENNIE, Mantra.</b> 이 사운드는 문자 그대로 JENNIE untitled라고 불리며, 거의 4개월 동안 그 상태를 유지했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">JENNIE untitled</span><span class="sa">JENNIE</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>Future was written @Beats by Dre</div>
        <div class="gapline"><span class="gp">오디오 공개일 <b>2024년 6월 20일</b></span><span class="gp">발매 <b>2024년 10월 11일</b></span><span class="gp"><b>113일</b>간 무제</span></div>
        <div class="embed" data-id="7382569452581162282"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @jennierubyjane</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>그녀의 계정에서 게시된 브랜드 필름 안에 그녀가 소유하고 이름 붙인 사운드에 30초 분량의 미공개 음악이 담겨 있다. 제목 없는 곡임에도 <b>3,930만 회 재생</b>되었다. 이 음원은 결국 10월 11일 Mantra로 발매되었다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>사운드를 "untitled"라고 부르는 것은 유출이 아닌 초대이다. 이는 의도적인 보류를 나타내며, 자신감으로 해석되고, 실제 이름이 아직 비공개인 동안 청중에게 검색할 이름을 제공한다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>두 번째 BLACKPINK 멤버가 발매 4개월 전에 자신의 계정으로. 이러한 움직임은 K-pop 정상에서는 이례적인 일이 아니다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@jennierubyjane/video/7382569452581162282" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-kr">한국</span></div>
        <h3 class="play-title">기다려준 팬들에게 감사 인사를 전하고, 미공개 곡을 재생한다.</h3>
        <p class="play-sub"><b>JINI.</b> 싱글 발표 12일 전, 그녀의 계정이 사용한 최초의 아티스트 소유 사운드로.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">&#50724;&#47532;&#51648;&#45560; &#49324;&#50868;&#46300; - jiniyxxn</span><span class="sa">jiniyxxn</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>&#44592;&#45796;&#47140;&#51452;&#49436; &#44256;&#47560;&#50892; #JINI</div>
        <div class="gapline"><span class="gp">오디오 공개 <b>2023년 9월 2일</b></span><span class="gp"><b>9월 14일</b> 발표</span><span class="gp"><b>10월 11일</b> 발매</span><span class="gp">간격 <b>12일</b></span></div>
        <div class="embed" data-id="7274243533240896770"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @jiniyxxn</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>한국어 사운드 행에는 그녀의 핸들이 소유한 "original sound"라고 표시됩니다. 그 이전의 12개 게시물은 모두 다른 사람의 오디오를 사용했습니다. 이 게시물은 그녀의 계정이 자신의 음악을 사용하기 시작한 시점이며, 발매가 공개되기 전에 이루어졌습니다. <b>150만 회 재생.</b></p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>캡션은 네 단어로 모든 역할을 해낸다. 이는 미발매 음원을 마케팅 수단이 아닌 팬덤을 위한 보상으로 구성하며, 이것이 홍보성 대신 관대하게 읽히는 이유이다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>한국어 캡션, 한국어 사운드 열, 한국인 솔로 아티스트. 이것이 직접적으로 번역되는 버전이다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@jiniyxxn/video/7274243533240896770" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">04</span><span class="lane-pill lane-kr">일본</span></div>
        <h3 class="play-title">전체 캠페인을 자체 사운드로 진행한다.</h3>
        <p class="play-sub"><b>tuki., Bansanka.</b> 15세 아티스트가 이름 없는 오리지널 곡의 1절을 게시했고, 자신만의 사운드를 계속 사용하며 Billboard Japan 1위까지 올랐다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">&#12458;&#12522;&#12472;&#12490;&#12523;&#26989;&#26354;</span><span class="sa">tuki.</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>&#12458;&#12522;&#12472;&#12490;&#12523;&#26354;&#12398;&#65297;&#30058;&#12391;&#12377;&#65281;&#65281;</div>
        <div class="gapline"><span class="gp">오디오 공개일 <b>2023년 7월 17일</b></span><span class="gp">제목 <b>Aug 16</b></span><span class="gp"><b>9월 29일</b> 발매</span><span class="gp"><b>30일</b>간 무제</span></div>
        <div class="embed" data-id="7256680694166916353"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @tuki.music</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>제목 없이 한 구절을 부르는 침실 공연 영상이 일반적인 아티스트 소유 사운드로 게시되었습니다. <b>480만 회 재생.</b> 한 달 후, 그녀의 자체 사운드로 제목이 공개되었고, 9월 8일의 최고 게시물은 곡이 아직 미공개 상태임에도 불구하고 <b>1,280만 회</b>를 기록했습니다. 공식 상업용 사운드는 9월 25일까지 생성되지 않았습니다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>대중은 곡이 만들어지는 과정을 지켜보았다. 발매 시점에 음원은 대중에게 알려진 역사를 가지게 되었는데, 이는 인지도와는 다른 자산이며 구매하기 훨씬 더 어렵다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>그 10주 동안 축적된 모든 재생, 저장, 생성은 마케팅 계정이 아닌 아티스트 소유의 사운드에 귀속되었다.</p></div>
        <div class="card-foot"><span class="also">미공개 상태에서 1,280만 조회수를 기록한 게시물은 <a href="https://www.tiktok.com/@tuki.music/video/7276392763783007495" target="_blank" rel="noopener">여기에</a> 있다.</span><a class="src" href="https://www.tiktok.com/@tuki.music/video/7256680694166916353" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">05</span><span class="lane-pill lane-kr">Universal Music Japan</span></div>
        <h3 class="play-title">곡을 부분별로, 한 번에 한 섹션씩 공개한다.</h3>
        <p class="play-sub"><b>imase, NIGHT DANCER.</b> 사운드는 발매 발표 88일 전부터 TikTok에 존재했으며, 그는 별도의 커스텀 사운드를 통해 곡을 조금씩 공개했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">NIGHT DANCER</span><span class="sa">imase</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>&#12300;NIGHT DANCER&#12301;&#27468;&#12387;&#12390;&#12415;&#12414;&#12375;&#12383;</div>
        <div class="gapline"><span class="gp">사운드 생성일 <b>2022년 5월 9일</b></span><span class="gp"><b>8월 5일</b> 발표</span><span class="gp"><b>8월 19일</b> 발매</span><span class="gp">간격 <b>88일</b></span></div>
        <div class="embed" data-id="7111259546634456322"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @imase119</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>곡이 스트리밍되기 전에 아티스트 소유 사운드로 13개의 게시물이 올라왔으며, 이 중 하나는 <b>640만 회 재생</b>을 기록했습니다. 그는 이어서 곡의 각 부분을 자체 사운드로 게시했는데, 하나는 A 멜로디, 다른 하나는 B 멜로디로 명명되었으며, 두 번째 사운드에는 첫 공개 방송이라는 캡션이 달렸습니다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>이는 메이저 레이블이 이를 허용하지 않을 것이라는 반론에 대한 답이 된다. Universal Music Japan 소속 아티스트는 계약 전부터 이를 실행했고, 이후에도 상시적인 관행으로 계속 실행했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>곡 전체를 한 번에 공개할 필요는 없다. 자체 사운드로 공개된 한 부분만으로도 시작하기에 충분하다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@imase119/video/7111259546634456322" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="kr">
        <div class="card-top"><span class="play-num">06</span><span class="lane-pill lane-kr">Sony Music Philippines</span></div>
        <h3 class="play-title">사운드를 프리뷰라고 부르고 다른 말은 하지 않는다.</h3>
        <p class="play-sub"><b>SB19, VISA.</b> 메이저 소속 보이 그룹이 싱글 발표 26일 전에 미리보기 사운드를 게시했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">VISA Preview SB19</span><span class="sa">SB19 Official</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>eh na-deny</div>
        <div class="gapline"><span class="gp">오디오 공개일 <b>2026년 1월 17일</b></span><span class="gp"><b>2월 12일</b> 발표</span><span class="gp"><b>2월 20일</b> 발매</span><span class="gp">간격 <b>26일</b></span></div>
        <div class="embed" data-id="7596325204503170322"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @officialsb19</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>타갈로그어 세 단어 캡션과 그룹 자체 계정이 소유한 미리보기로 명명된 사운드. 그들은 발표 전에 2월에 같은 사운드를 두 번 더 재사용했다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>이는 이 세트에서 82MAJOR와 가장 유사한 구조적 일치 사례이다. 메이저 레이블과 계약한 아시아 보이그룹이 공식 그룹 계정에서 게시하고, 레이블의 발매 일정은 그대로 유지된다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>사운드를 숨기는 대신 "preview"라고 명명하는 것이 보수적인 방식이다. 레이블은 프레이밍을 유지하고, 대중은 여전히 곡을 가장 먼저 접한다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@officialsb19/video/7596325204503170322" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 02 WEST -->
  <section class="sec wrap" id="west">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>서구 메이저</h2>
      <p class="desc">이번 주에 라이브로 진행되는 것을 포함하여 시장의 다른 쪽에서도 동일한 움직임이 있다.</p>
    </div>
    <div class="grid" id="grid-west">

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">07</span><span class="lane-pill lane-west">Columbia</span></div>
        <h3 class="play-title">사운드 공개 9개월차</h3>
        <p class="play-sub"><b>Lil Nas X, LIGHT AGAIN!</b> 사운드는 2월에 올라왔지만 음반은 11월이 되어서야 발매되었다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">LIGHT AGAIN</span><span class="sa">dreamboy.</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>No caption</div>
        <div class="gapline"><span class="gp">오디오 공개 <b>2024년 2월 2일</b></span><span class="gp">발매 <b>2024년 11월 15일</b></span><span class="gp">간격 <b>287 days</b></span></div>
        <div class="embed" data-id="7330866236458274090"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @lilnasx</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>레이블 음악 엔티티가 아닌 자신의 계정이 소유한 사운드로 캡션 없는 게시물이 13일 동안 10개의 게시물에 걸쳐 약 1,570만 회의 총 재생수를 기록했습니다. 같은 달에 이미 발매된 싱글에 대한 그의 게시물은 Lil Nas X에게 크레딧된 상업용 음악 엔티티라는 정반대의 특징을 가집니다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>이 세트에서 가장 긴 간격이다. 청중은 가질 수 없는 곡에 9개월 동안 애착을 가질 수 있었고, 음원은 구매 가능하기 전에 이미 익숙해졌다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>사운드에는 만료 기한이 없다. 지금 공개된 오디오는 9월 내내 그리고 투어 기간까지 계속 작동한다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@lilnasx/video/7330866236458274090" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">08</span><span class="lane-pill lane-west">RCA</span></div>
        <h3 class="play-title">청중에게 발매할지 여부를 묻는다</h3>
        <p class="play-sub"><b>Tate McRae.</b> 자신의 사운드로 미공개 곡을, 팬덤에게 결정을 맡기는 캡션.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">original sound</span><span class="sa">tate mcrae</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>oh shit&#129323; u guys want this one ?</div>
        <div class="gapline"><span class="gp"><b>2023년 8월 4일</b> 게시</span><span class="gp">재생 수 <b>19.4M</b></span><span class="gp">게시 시점 미발매</span></div>
        <div class="embed" data-id="7263547556947414315"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @tatemcrae</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>어디에도 제목이 없는 아티스트 소유 사운드에 미공개 음악이 담겨 있으며, 캡션은 질문 형식으로 작성되었다. <b>1,940만 회 재생.</b> 다음 날 캠페인의 이름이 지정된 사운드가 공개되었으며, 해당 싱글이 스트리밍에 도달하기 41일 전이었다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>캡션은 수동적인 시청자를 지지층으로 전환한다. 무언가를 발매할지 묻는 것은 청중이 발매에 대한 책임감을 느끼게 하고, 이는 단순한 발표로는 얻을 수 없는 댓글 참여율을 이끌어낸다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>이것은 캡션 모델이다. 질문은 공지보다 더 나은 성과를 내며, 작성하는 데 비용이 들지 않는다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@tatemcrae/video/7263547556947414315" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">09</span><span class="lane-pill lane-west">Warner</span></div>
        <h3 class="play-title">미공개 음악을 이벤트가 아닌 습관처럼 게시한다.</h3>
        <p class="play-sub"><b>PinkPantheress.</b> 자신의 사운드로 미공개 오디오를, 곡이 발매되기 10개월 전에.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">original sound</span><span class="sa">@pinkpantheress</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>let it all go #newmusic #fyp</div>
        <div class="gapline"><span class="gp">오디오 공개일 <b>2024년 7월 12일</b></span><span class="gp"><b>2025년 5월 9일</b> 발매</span><span class="gp">간격 <b>301일</b></span></div>
        <div class="embed" data-id="7390893383566314784"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @pinkpantheress</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>미공개 음악을 담고 있으며, 새 음악으로만 태그된 아티스트 소유 사운드가 <b>590만 회 재생</b>되었다. 이 곡은 다음 5월에 상업적으로 공개되었다. 그녀의 계정은 일회성 캠페인이 아닌 이 패턴을 반복적으로 사용했다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>미공개 음원이 계정에서 일반적일 때, 단일 게시물이 발표 압력을 받지 않는다. 청중은 그 계정을 새로운 음악이 가장 먼저 등장하는 곳으로 인식하게 된다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>첫 번째가 가장 어렵다. 그 후에는 레이블이 매번 승인해야 하는 결정이 아니라 채널의 행동 양식이 된다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@pinkpantheress/video/7390893383566314784" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">10</span><span class="lane-pill lane-west">Interscope</span></div>
        <h3 class="play-title">보조 계정에서 시드하고, 그 다음 확산시킨다.</h3>
        <p class="play-sub"><b>Role Model, High Hopes 3000.</b> 이 사운드는 6개의 영상과 함께 부계정에서 시작되었고, 이후 본계정에서 동일한 사운드로 게시했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">original sound</span><span class="sa">Chuck Timely</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>No caption</div>
        <div class="gapline"><span class="gp">오디오 공개 <b>2026년 5월 22일</b></span><span class="gp"><b>6월 3일</b> 발표</span><span class="gp">간격 <b>12일</b></span></div>
        <div class="embed" data-id="7642746442880175391"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @chucktimely</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>작은 서브 계정의 이름 없는 사운드가 <b>140만 회 재생</b>되었다. 3일 후 아티스트의 메인 계정에서 복사본이 아닌 <b>동일한 사운드 객체</b>로 게시하여 260만 회를 기록했다. 공식 소개는 6월 3일에 이루어졌다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>서브 계정은 티저가 실패한 발표로 읽힐 수 있는 모든 위험을 흡수하고, 메인 계정은 반응이 확인되면 이를 전환한다. 두 게시물 모두 하나의 사운드를 사용한다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>공식 계정에서 게시하는 것이 걸림돌이라면, 사운드는 더 작은 곳에서 시작하여 성과를 보이면 채택될 수 있다.</p></div>
        <div class="card-foot"><span class="also">동일한 사운드를 사용한 본계정, <a href="https://www.tiktok.com/@rolemodel/video/7643866589372108063" target="_blank" rel="noopener">2.6M</a></span><a class="src" href="https://www.tiktok.com/@chucktimely/video/7642746442880175391" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">11</span><span class="lane-pill lane-west">Def Jam</span></div>
        <h3 class="play-title">사운드를 스니펫으로 명명하고 한 달 동안 운영한다.</h3>
        <p class="play-sub"><b>Coco Jones, Luvagirl.</b> 스니펫 사운드는 2월 18일에 생성되었고 싱글은 3월 20일에 발매되었다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">LUVAGIRL Snippet</span><span class="sa">cocojones</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>y&#8217;all ready for me to drop this &#128105;&#127998;&#8205;&#128187;</div>
        <div class="gapline"><span class="gp">사운드 생성일 <b>2026년 2월 18일</b></span><span class="gp"><b>3월 20일</b> 발매</span><span class="gp">간격 <b>30일</b></span></div>
        <div class="embed" data-id="7614956633856281869"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @cocojones</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>스니펫으로 명시적으로 이름이 지정된 아티스트 소유 사운드가 한 달 내내 재사용되었다. 2월 게시물은 <b>630만 회</b>, 질문 형식의 캡션이 달린 3월 게시물은 <b>290만 회</b>를 기록했으며, 두 게시물 모두 음원이 공개되기 전이었다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>이를 스니펫이라고 부르는 것은 기대를 솔직하게 설정하고 여전히 발매를 유지한다. 이는 가장 공격적이지 않은 프레이밍이며 한 달간의 홍보 기간을 확보했다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>제목 없는 사운드가 너무 과하다고 생각될 경우, 또 다른 보수적인 명명 옵션이다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@cocojones/video/7614956633856281869" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">12</span><span class="lane-pill lane-live">이번 주 진행 중</span></div>
        <h3 class="play-title">팬들이 날짜를 문의하도록 유도한다</h3>
        <p class="play-sub"><b>BossMan Dlow.</b> 7월 1일에 시드되었고 아직 미공개된 이름 없는 사운드로, 이번 주 금요일에 공개될 예정으로 티저가 나왔다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">original sound</span><span class="sa">BossMan Dlow</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>Gimme A Date Big Za Back &#8252;&#65039;&#8252;&#65039;</div>
        <div class="gapline"><span class="gp">사운드 생성 <b>2026년 7월 1일</b></span><span class="gp"><b>8월 19일</b>로 날짜 지정</span><span class="gp">간격 <b>49일</b></span></div>
        <div class="embed" data-id="7675529128841399566"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @bossmandlow</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>이름 없는 아티스트 소유 사운드에 미공개 음원이 담겨 있으며, 언제 공개될지 아무도 알기 7주 전에 배포되었다. 여기에 인용된 캡션은 청중에게 날짜를 요청하도록 유도하는 내용이다. 같은 날 두 번째 게시물에서 금요일을 언급한다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>발매에 대한 수요가 콘텐츠가 된다. 날짜가 정해질 무렵, 청중은 이미 몇 주 동안 발매를 요청해왔고, 발표는 요청이 아닌 보상이다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>오늘 현재 미발매 음원에 대해 주요 유통사 소속 아티스트의 경우 라이브 상태이다. 이 카드의 재생 수는 이 글을 읽을 때쯤이면 변동되었을 것이다.</p></div>
        <div class="card-foot"><span class="also">동일한 사운드로 <a href="https://www.tiktok.com/@bossmandlow/video/7674376578473725198" target="_blank" rel="noopener">Aug 15</a>에 시드되었다.</span><a class="src" href="https://www.tiktok.com/@bossmandlow/video/7675529128841399566" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

      <article class="card" data-lane="west">
        <div class="card-top"><span class="play-num">13</span><span class="lane-pill lane-west">프로듀서 측</span></div>
        <h3 class="play-title">아티스트가 아닌 프로듀서가 공개하게 한다.</h3>
        <p class="play-sub"><b>The Chainsmokers, later KATSEYE Gnarly.</b> 이 데모는 그룹이 연결되기 전 TikTok에서 2년간 존재했다.</p>
        <div class="sound"><span class="sk">사운드</span><span class="st">original sound</span><span class="sa">The Chainsmokers</span></div>
        <div class="capq"><span class="ck">게시된 캡션</span>everythings gnarly @alicelongyugao #NewMusic</div>
        <div class="gapline"><span class="gp">오디오 공개 <b>2023년 4월 6일</b></span><span class="gp">발매 <b>2025년 4월 30일</b></span><span class="gp">간격 <b>755일</b></span></div>
        <div class="embed" data-id="7218729393932209450"><button class="embed-btn" type="button">&#9654; 클립 로드</button><span class="embed-meta">TikTok / @thechainsmokers</span></div>
        <div class="tear">
          <div class="tblock"><span class="tl">실제 공개분</span><p>프로듀서 듀오가 자신들의 사운드로 작업 중인 곡을 게스트 보컬과 함께 게시했으며, 그룹이 녹음할 것이라는 어떤 암시도 없었습니다. <b>950만 회 재생.</b> 2년 후, 이 곡은 KATSEYE의 첫 Billboard Hot 100 차트 52위, Global 200 차트 6위 진입곡이 되었습니다.</p></div>
          <div class="tblock why"><span class="tl">효과적인 이유</span><p>이 후렴구는 특정인에게 귀속되지 않은 채 수년간 대중에게 익숙했다. 따라서 그룹은 인지도를 새로 구축할 필요 없이 물려받았다.</p></div>
        </div>
        <div class="mig"><span class="ml">HEAT를 위해</span><p>오디오가 작업을 수행하기 위해 그룹 계정을 벗어날 필요는 없다. 대신 프로듀서나 안무가가 사운드를 소유할 수 있다.</p></div>
        <div class="card-foot"><span class="also"></span><a class="src" href="https://www.tiktok.com/@thechainsmokers/video/7218729393932209450" target="_blank" rel="noopener">원본 보기 &#8599;</a></div>
      </article>

    </div>
  </section>

  <!-- 03 TABLE -->
  <section class="sec wrap" id="table">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>사운드, 나란히</h2>
      <p class="desc">TikTok이 보고하는 그대로의 사운드를 가진 모든 사례. 정렬을 다시 하려면 아무 열 헤더나 클릭한다.</p>
    </div>
    <div class="tablewrap"><table class="data" id="gaptable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
  </section>

  <!-- 04 OTHER ROUTE -->
  <section class="sec wrap" id="stage">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>다른 경로</h2>
      <p class="desc">소유 계정에서 사운드를 게시하는 것이 적절하지 않다면, 한국의 주요 기획사들은 무대에서 동일한 결과를 얻는다. 음원은 발표 전에 공개되지만, 회사는 이를 게시하지 않는다.</p>
    </div>
    <div class="strip">
      <div class="st2"><span class="k">YG / BLACKPINK</span><h4>이틀</h4><p>YG는 신곡이 존재한다고만 발표하고 2025년 7월 5일 고양 투어 오프닝에서 공연했으며, <b>이틀 후</b> 제목을 확정했다. 팬들이 촬영한 영상에 음원이 담겼다. 이 곡은 1억 2,300만 스트림으로 Billboard Global 200 차트 1위에 진입했다.</p></div>
      <div class="st2"><span class="k">JYP / Stray Kids</span><h4>83일</h4><p>2024년 8월 24일부터 미발매 솔로곡 8곡이 라이브로 공개되었다. 발매는 11월 15일까지 발표되지 않았다. 이 앨범은 Billboard 200에서 1위를 차지했으며, Circle 차트에서 1,989,508장의 판매고를 올렸다.</p></div>
      <div class="st2"><span class="k">BELIFT와 BigHit</span><h4>이번 달 진행 중</h4><p>ENHYPEN은 2026년 8월 8일 부산에서 미공개 타이틀곡을 공연했으며, 8월 21일 발매 예정이다. TXT는 같은 날 도쿄 불꽃놀이 행사에서 발매 9일 전 타이틀곡을 선보였고, Oricon Daily Digital Single 차트에서 1위를 차지했다.</p></div>
    </div>
    <p class="tbl-note">Kakao 산하 EDAM도 사내에 동일한 선례가 있다. IU는 2024년 9월 서울월드컵경기장에서 발매 없이 'Bye, Summer'를 라이브로 선보였으며, 그녀의 채널에서 해당 클립을 게시했다. 상업적으로 존재하지 않던 곡임에도 11,429,316회의 조회수를 기록했다.</p>
  </section>

  <!-- 05 PLAY -->
  <section class="sec wrap" id="play">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>The Play For HEAT</h2>
      <p class="desc">9월 1일 이전에 사용 가능한 버전으로, 이미 존재하는 자산을 활용한다.</p>
    </div>
    <div class="slate">
      <h3>하나의 영상, 하나의 사운드, 새로운 제작 없음</h3>
      <p class="sd">아래의 모든 내용은 위에 언급된 13개 사례가 실제로 실행한 것에서 도출되었다. 유일하게 요청되는 결정은 음원이 이름이 붙여지기 전에 들려질 수 있는지 여부이다.</p>
      <div class="steps">
        <div class="step">
          <div class="sw">스텝 01<br />이번 주</div>
          <div><h4>HEAT를 사운드로 사용하여 멤버가 촬영한 세로형 영상 하나를 게시한다.</h4><p>여기서는 휴대폰 화질이 정확하며, 타협의 결과가 아니다. <b>화면에는 제목, 발매일, 아트워크, 레이블 마크가 없다.</b> 캡션은 질문 형식이다. Tate McRae의 "u guys want this one ?"은 1,940만 회 재생되었고 BossMan Dlow는 현재 "gimme a date"를 진행 중이다.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 02<br />같은 게시물</div>
          <div><h4>사운드 이름을 지정하고, HEAT으로 지정하지 않는다</h4><p>이는 위 사례들을 일반적인 롤아웃 게시물과 구분하는 세부 사항입니다. LISA는 <b>COMING SOON</b>과 <b>TEASER</b>를 사용했습니다. JENNIE는 <b>JENNIE untitled</b>를 사용했습니다. 완전히 블라인드 처리된 사운드가 너무 과하다고 생각된다면, SB19는 <b>VISA Preview</b>를, Coco Jones는 <b>LUVAGIRL Snippet</b>을 사용했는데, 이 둘 모두 레이블의 틀을 유지하면서 티저 효과를 줍니다.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 03<br />같은 주</div>
          <div><h4>멤버들이 동일한 사운드로 게시한다.</h4><p>각 멤버는 다른 설정에서 동일한 사운드 객체를 사용하여 자신의 계정에서 한 번씩 게시합니다. Role Model은 교차 계정 버전이 효과가 있음을 입증했습니다. 보조 계정이 사운드를 생성하고 메인 계정이 3일 후 동일한 사운드로 게시하여 거의 두 배의 재생수를 기록했습니다.</p></div>
        </div>
        <div class="step">
          <div class="sw">Step 04<br />자동</div>
          <div><h4>사운드는 발매 시점에 통합된다</h4><p>발매가 Kakao를 통해 유통되므로, HEAT가 공개될 때 사전 발매 사운드는 공식 트랙 사운드와 병합됩니다. <b>9월 1일 이전에 기록된 모든 재생, 저장 및 생성은 별도의 오디오 페이지에 고립되지 않고 공식 곡에 반영됩니다.</b></p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 05<br />동일 자산</div>
          <div><h4>추가 비용 없이 3개의 추가 표면</h4><p>동일한 클립이 Instagram 시험용 릴스로 게시되며, 그룹을 아직 팔로우하지 않는 계정에만 제공된다. 또한 YouTube Shorts와 Spotify Clips에도 게시된다. 하나의 자산, 네 개의 플랫폼, 네 개의 개별 청중.</p></div>
        </div>
        <div class="step">
          <div class="sw">스텝 06<br />발표 시</div>
          <div><h4>발표는 ~에 게시된다</h4><p>레이블 발표가 예정대로 진행될 때, 훅은 이미 익숙하고 사운드에는 이미 창작물이 붙어 있다. 이를 위해 발매 일정에서 어떤 것도 변경할 필요가 없다.</p></div>
        </div>
      </div>
      <p class="need">이것이 요구하는 것은: <b>하나의 영상과 허가이다.</b> 새로운 촬영, 새로운 자산, 레이블의 발표 일정 변경은 없다.</p>
    </div>
  </section>

  <!-- 06 METHOD -->
  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>방법론</h2>
      <p class="desc">각 사례가 어떻게 확인되었는지, 이 페이지의 사운드 행은 신뢰하기보다는 직접 확인할 수 있도록 한다.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / 선택 규칙</span><h4>아티스트 소유의 사운드, 발표 전에</h4><p>미공개 오디오가 <b>아티스트 소유 사운드</b>로 게시물에 첨부되어 싱글 발표 전에 공개된 경우에만 사례로 인정됩니다. 발매된 트랙을 상업용 음악 엔티티로 사용한 게시물은 제외되었으며, 라이브 공연, TV 출연, 팬 영상도 마찬가지입니다.</p></div>
      <div class="mcard"><span class="s">02 / 사운드 확인</span><h4>TikTok에서 직접 확인</h4><p>이 페이지의 모든 사운드 이름과 사운드 소유자는 언론 보도가 아닌 TikTok 자체 비디오 페이로드에서 직접 읽어온 것이다. 그렇기 때문에 사운드 행에는 한국어 및 일본어 사운드 이름을 포함하여 플랫폼이 보고하는 내용이 정확히 표시된다.</p></div>
      <div class="mcard"><span class="s">03 / 데이팅</span><h4>추정치가 아닌 타임스탬프</h4><p>TikTok 비디오 및 사운드 식별자는 자체 생성 시간을 인코딩하므로, 사운드가 생성된 날짜와 처음 게시된 날짜는 모두 정확하다. 이것이 기사 발행일로부터 추론하는 대신 간격을 측정한 방법이다.</p></div>
      <div class="mcard"><span class="s">04 / 캡션</span><h4>게시된 대로 인용</h4><p>이 페이지의 모든 캡션은 이모지, 구두점, 원본 언어를 포함하여 게시된 그대로 재현한다. 번역은 제공된 경우 표시한다.</p></div>
      <div class="mcard"><span class="s">05 / 결과</span><h4>공개된 수치만</h4><p>재생 횟수는 빌드 시점에 실시간이며 변동될 수 있다. 차트 순위 및 스트림 수치는 Billboard, Circle, Oricon에서 발표한 내용과 동일하다. 수치가 발표되지 않은 경우, 셀은 추정치로 채우는 대신 비워둔다.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>참고.</b> 재생수는 2026년 8월 19일 기준이며, 특히 현재 진행 중인 사례의 경우 변동될 수 있습니다. 모든 클립은 제작 시점에 라이브 및 임베드 가능 여부가 확인되었으며, 모든 사운드 이름과 사운드 소유자는 해당 영상에 대한 TikTok 자체 데이터에서 읽어왔습니다. Crowd Control Digital 제작.</p>
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
    {a:"LISA, ROCKSTAR",m:"한국",s:"COMING SOON",o:"LISA",d:"2024-06-06",p:133200000,g:20,gd:"20"},
    {a:"LISA, ROCKSTAR",m:"한국",s:"TEASER",o:"LISA",d:"2024-06-13",p:90200000,g:13,gd:"13"},
    {a:"JENNIE, Mantra",m:"한국",s:"JENNIE untitled",o:"JENNIE",d:"2024-06-20",p:39300000,g:113,gd:"113"},
    {a:"JINI",m:"한국",s:"오리지널 사운드 - jiniyxxn",o:"jiniyxxn",d:"2023-09-02",p:1500000,g:12,gd:"12"},
    {a:"tuki., Bansanka",m:"일본",s:"オリジナル楽曲",o:"tuki.",d:"2023-07-17",p:4800000,g:30,gd:"30"},
    {a:"imase, NIGHT DANCER",m:"일본, Universal",s:"NIGHT DANCER",o:"imase",d:"2022-06-20",p:6400000,g:88,gd:"88"},
    {a:"SB19, VISA",m:"필리핀, Sony",s:"VISA Preview SB19",o:"SB19 Official",d:"2026-01-17",p:435900,g:26,gd:"26"},
    {a:"Lil Nas X, LIGHT AGAIN!",m:"미국, Columbia",s:"LIGHT AGAIN",o:"dreamboy.",d:"2024-02-02",p:2300000,g:287,gd:"287"},
    {a:"Tate McRae",m:"미국, RCA",s:"original sound",o:"tate mcrae",d:"2023-08-04",p:19400000,g:null,gd:""},
    {a:"PinkPantheress",m:"영국, Warner",s:"original sound",o:"@pinkpantheress",d:"2024-07-12",p:5900000,g:301,gd:"301"},
    {a:"Role Model, High Hopes 3000",m:"미국, Interscope",s:"original sound",o:"Chuck Timely",d:"2026-05-22",p:1400000,g:12,gd:"12"},
    {a:"Coco Jones, Luvagirl",m:"미국, Def Jam",s:"LUVAGIRL Snippet",o:"cocojones",d:"2026-02-18",p:6300000,g:30,gd:"30"},
    {a:"BossMan Dlow",m:"미국, Alamo",s:"original sound",o:"BossMan Dlow",d:"2026-08-19",p:303800,g:49,gd:"49"},
    {a:"The Chainsmokers, later KATSEYE Gnarly",m:"미국",s:"original sound",o:"The Chainsmokers",d:"2023-04-06",p:9500000,g:755,gd:"755"}
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
    var cols=[['a','아티스트 및 곡','l'],['m','시장 및 레이블','l'],['s','사운드 이름','l'],['o','사운드 소유자','l'],['d','오디오 공개',''],['p','재생수',''],['gd','이름 공개 전 일수','']];
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
  if(note){note.innerHTML='사운드 이름은 틱톡이 각 영상에 대해 보고하는 대로 한국어 및 일본어를 포함하여 정확하게 재현됩니다. "이름 공개 전 일수"는 오디오가 공개된 시점부터 곡이 공식적으로 명명되거나 발표될 때까지의 실제 일수를 계산합니다. 재생 횟수는 빌드 시점에 실시간이며 변동될 수 있습니다.';}
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
