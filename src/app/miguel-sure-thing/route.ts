export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Miguel Sure Thing Content Ideas | Crowd Control Digital</title>
<meta name="description" content="Content ideas and react picks for Miguel while Sure Thing surges, built from live TikTok and streaming data." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Miguel Sure Thing Content Ideas" />
<meta property="og:description" content="Content ideas and react picks, prepared by Crowd Control Digital." />
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
    --success:#FAFAFA; --warning:#FD3737; --gold:#FAFAFA;
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

  /* react-ready live section */
  .react-momentum{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin:0 0 28px}
  @media(max-width:760px){.react-momentum{grid-template-columns:repeat(2,1fr)}}
  .rm{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:15px 16px}
  .rm .rn{font-family:var(--fh);font-size:1.6rem;color:var(--ink);line-height:1}
  .rm .rl{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);margin-top:7px;display:block;line-height:1.4}
  .react-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  @media(max-width:960px){.react-grid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:640px){.react-grid{grid-template-columns:1fr}}
  .rplat{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:3px 8px;border:1px solid var(--line-hover);color:var(--muted)}
  .rmeta{display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin:14px 0 2px}
  .rmeta .rh{font-size:14.5px;color:var(--ink);font-weight:600}
  .rmeta .rv{font-family:var(--fm);font-size:11px;color:var(--accent);white-space:nowrap}
  .rdate{font-family:var(--fm);font-size:10px;color:var(--secondary);letter-spacing:.06em;text-transform:uppercase;margin-bottom:11px}
  .rwhy{margin:0;font-size:14px;color:var(--muted);line-height:1.5}
  .rwhy b{color:var(--ink)}

  footer{margin-top:56px;border-top:1px solid var(--line);padding:26px 0 60px}
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:900px}
  footer .fn b{color:var(--muted)}
  .toppad{padding-top:18px}

  .sec.wrap,.ctx.wrap,footer.wrap{padding-left:28px;padding-right:28px}
  @media(max-width:600px){.sec.wrap,.ctx.wrap,footer.wrap{padding-left:16px;padding-right:16px}}
  .cc-logo{height:22px;width:auto;display:block}
  .gate .cc-logo{height:26px}
  .pri-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
  @media(max-width:960px){.pri-grid{grid-template-columns:1fr}}
  .card.pri .mig{margin-top:14px}
  .effort{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink);border:1px solid var(--line-hover);padding:5px 9px}
  .tier{align-self:flex-start;font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.12em;color:var(--accent);border:1px solid rgba(253,55,55,.4);background:var(--accent-dim);padding:4px 8px;margin-bottom:10px}
  .idea-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
  @media(max-width:900px){.idea-grid{grid-template-columns:1fr}}
  .card.idea .tear{margin-bottom:0}
  .rdate br{display:block;content:"";margin-top:2px}
  .finding{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px;margin:0 0 28px;max-width:900px}
  .finding p{margin:0;color:var(--ink);font-size:16px;line-height:1.55}
  .finding p b{color:var(--accent)}
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>

<div class="gate" id="gate">
  <div class="gate-row"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">MIGUEL</div>
    <div class="bar"></div>
    <p class="gate-sub">"Sure Thing" content ideas and react picks, prepared by Crowd Control Digital. Enter the password to continue.</p>
    <form class="gate-form" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="gate-err mono" id="gateErr">Incorrect password</div>
  </div>
  <div class="gate-foot">
    <div><div class="mono dim">Partnership</div><div class="fv">Miguel x Crowd Control Digital</div></div>
    <div class="r"><div class="mono dim">Prepared By</div><div class="fv">Crowd Control Digital</div></div>
  </div>
</div>

<div class="shell">
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">October 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">MIGUEL<span class="sm">"SURE THING" / CONTENT IDEAS AND REACT PICKS</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">"Sure Thing" is surging again, and the posts driving it are built on his live performance. Below: the three replies to make first, fifteen posts worth reacting to, and eight pieces of content he can make on his own terms.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The moment</div><div class="cv">1.9M Spotify streams a day and 4M new TikTok posts in 30 days</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames, Co-Founder, CCD</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Miguel / Sure Thing</a>
      <div class="nb-jump"><a href="#start">Start Here</a><a href="#react">React</a><a href="#ideas">Ideas</a><a href="#engagement">Data</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>Why this, why now</h2>
    <p class="lead">The song is moving on its own, and this time the fans are clipping <b>present-day Miguel</b>: his Tiny Desk performance from February, strings and all, plus live clips from the road. Singers are covering the live arrangement. The job is to meet it on his terms, quickly, without spending his week on it.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">The situation</span><p>Spotify streams have more than <b>doubled since early August</b>, and new TikTok posts on the song roughly tripled month over month.</p></div>
      <div class="ctx-card"><span class="k">The approach</span><p>Reply to the people already making the content, tell the story of the live version in his own words, and point the attention at what he is building now.</p></div>
      <div class="ctx-card"><span class="k">What it takes from him</span><p><b>About an hour this week.</b> The three replies below, plus one idea from the list if he feels it. We find the posts, write the brief and cut anything that needs cutting.</p></div>
    </div>
    <div class="react-momentum" style="margin-top:28px">
      <div class="rm"><div class="rn">1.9M</div><span class="rl">Spotify streams a day, 7 day average (861K in early August)</span></div>
      <div class="rm"><div class="rn">+54.5M</div><span class="rl">Spotify streams in the last 30 days</span></div>
      <div class="rm"><div class="rn">7.8M</div><span class="rl">TikTok posts using the song, all versions</span></div>
      <div class="rm"><div class="rn">+4.0M</div><span class="rl">New TikTok posts in the last 30 days, about 3x the month before</span></div>
    </div>
  </section>

  <section class="sec wrap" id="start">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>Start Here</h2>
      <p class="desc">If he only does three things, these are the three. Each one is a real post from the last month, picked for reach, for how directly it involves him, and for how little time it takes.</p>
    </div>
    <div class="pri-grid">
      <article class="card pri">
        <div class="card-top"><span class="play-num">01</span><span class="lane-pill lane-catalog">Video reply</span></div>
        <div class="embed" data-id="7687674463898357024"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @fiamarielin</span></div>
        <div class="rmeta"><span class="rh">@fiamarielin</span><span class="rv">4.6M views</span></div>
        <div class="rdate">Posted Sep 20<br>614K likes, 19.7K shares</div>
        <p class="rwhy">FIA, a young singer from The Voice Kids and Junior Eurovision, singing "Sure Thing" with Emilia, with Miguel tagged in the caption. The single biggest post on the song this cycle, with 4,800 comments of people loving it.</p>
        <div class="mig"><span class="ml">The reply</span><p>A short video reply from his phone: him watching, smiling, then singing the next line back to the two of them. No script needed. A singer getting a reply from the artist she is covering is the moment people share.</p></div>
        <div class="card-foot"><span class="effort">About 10 minutes</span><a class="src" href="https://www.tiktok.com/@fiamarielin/video/7687674463898357024" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>
      <article class="card pri">
        <div class="card-top"><span class="play-num">02</span><span class="lane-pill lane-catalog">Duet</span></div>
        <div class="embed" data-id="7682561541622746381"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @josephadamsofficial</span></div>
        <div class="rmeta"><span class="rh">@josephadamsofficial</span><span class="rv">1.8M views</span></div>
        <div class="rdate">Posted Sep 6<br>209K likes, 42.4K shares</div>
        <p class="rwhy">A singer covering the live arrangement specifically, captioned "I'm obsessed with the live version of this song," with Miguel tagged. 42K shares and 1,800 comments, the most shared cover on the song.</p>
        <div class="mig"><span class="ml">The reply</span><p>A duet where Miguel comes in on the harmony, or takes the next line under him. It is the most musician-to-musician move on the board, and it puts his voice on the live arrangement people are already chasing.</p></div>
        <div class="card-foot"><span class="effort">About 15 minutes</span><a class="src" href="https://www.tiktok.com/@josephadamsofficial/video/7682561541622746381" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>
      <article class="card pri">
        <div class="card-top"><span class="play-num">03</span><span class="lane-pill lane-catalog">Stitch</span></div>
        <div class="embed" data-id="7689112035149270279"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @jehnz1e</span></div>
        <div class="rmeta"><span class="rh">@jehnz1e</span><span class="rv">3.1M views</span></div>
        <div class="rdate">Posted Sep 24<br>635K likes, 65.1K shares</div>
        <p class="rwhy">A fan edit cutting Kyrie Irving highlights against his own Tiny Desk performance. 3.1M views and 65K shares. Clips of his performance are the best-performing format on the song (see the data below).</p>
        <div class="mig"><span class="ml">The reply</span><p>A stitch: let the clip play, then 15 seconds straight to camera on why he opened the Tiny Desk with "Sure Thing," what the strings brought to it, and a shout to the band. It turns a fan clip into his story.</p></div>
        <div class="card-foot"><span class="effort">About 10 minutes</span><a class="src" href="https://www.tiktok.com/@jehnz1e/video/7689112035149270279" target="_blank" rel="noopener">View original &#8599;</a></div>
      </article>
    </div>
  </section>

  <section class="sec wrap" id="react">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>React-Ready Posts</h2>
      <p class="desc">Twelve more posts worth a reaction, each tagged with the lightest move that works. Most of these are a comment, not a video. All posted in the last 30 days.</p>
    </div>
    <div class="react-grid">
      <article class="card">
        <div class="embed" data-id="7691193034905537806"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @notskpie</span></div>
        <div class="rmeta"><span class="rh">@notskpie</span><span class="rv">879K views</span></div>
        <div class="rdate">Posted Sep 30<br>183K likes, 19.9K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">Another clip of his Tiny Desk take, with a big "NOW" title on screen. 183K likes and nearly 20K shares in a week. A comment crediting the band and the string players gives the fans the names behind the sound.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7690619198703176982"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @yoashy5</span></div>
        <div class="rmeta"><span class="rh">@yoashy5</span><span class="rv">304K views</span></div>
        <div class="rdate">Posted Sep 28<br>51.7K likes, 11.3K shares</div>
        <span class="tier">Comment or repost</span>
        <p class="rwhy">The Tiny Desk performance cut to the caption "unfortunately you're my favorite person." Posted by an account with almost no followers and still shared 11K times. A repost from Miguel is a huge moment for a small creator.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7685984843875749133"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @povbrianshow</span></div>
        <div class="rmeta"><span class="rh">@povbrianshow</span><span class="rv">307K views</span></div>
        <div class="rdate">Posted Sep 16<br>67.6K likes, 3.4K shares</div>
        <span class="tier">Repost</span>
        <p class="rwhy">A fan's concert clip of him on the big screen, tagged #ctrlaltdelete. Reposting it rewards the core community and keeps the live version front and center.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7686448889636932885"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @lovinqkpopxo</span></div>
        <div class="rmeta"><span class="rh">@lovinqkpopxo</span><span class="rv">994K views</span></div>
        <div class="rdate">Posted Sep 17<br>156K likes, 14.0K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">A fan clip of BLACKPINK members covering "Sure Thing" on a Korean broadcast, captioned "blackpink vocals are so underestimated." Nearly 1M views. One warm comment from Miguel travels a long way in K-pop fandom.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7683657969006808327"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @leethesalvatore</span></div>
        <div class="rmeta"><span class="rh">@leethesalvatore</span><span class="rv">66.3K views</span></div>
        <div class="rdate">Posted Sep 10<br>20.8K likes, 1.4K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">RIIZE's Anton singing "Sure Thing." The highest like-rate in the sample at 31%. Another K-pop crossover where a single comment from Miguel is the whole move.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7682926697758412045"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @aidenrossmusic</span></div>
        <div class="rmeta"><span class="rh">@aidenrossmusic</span><span class="rv">447K views</span></div>
        <div class="rdate">Posted Sep 7<br>69.6K likes, 3.6K shares</div>
        <span class="tier">Video reply</span>
        <p class="rwhy">A piano cover that tagged Miguel, then came back with a part 2. A creator who keeps showing up for the song. A "Replying to" video with Miguel singing a bar over the piano is a natural follow-on.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7691013573748821278"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @marleybleu</span></div>
        <div class="rmeta"><span class="rh">@marleybleu</span><span class="rv">468K views</span></div>
        <div class="rdate">Posted Sep 29<br>83.9K likes, 1.9K shares</div>
        <span class="tier">Duet</span>
        <p class="rwhy">A cover from a 724K-follower singer, captioned "when ur an alto," with nearly 1,000 comments. A strong backup if the Joseph Adams duet does not feel right.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7686710322656185631"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @rzejoshy</span></div>
        <div class="rmeta"><span class="rh">@rzejoshy</span><span class="rv">482K views</span></div>
        <div class="rdate">Posted Sep 18<br>73.0K likes, 2.1K shares</div>
        <span class="tier">Duet</span>
        <p class="rwhy">A young singer with a guitar, eyes shut, all in. 73K likes. The kind of cover where a Miguel duet changes someone's year.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7683476016978824456"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @imgreengrape</span></div>
        <div class="rmeta"><span class="rh">@imgreengrape</span><span class="rv">704K views</span></div>
        <div class="rdate">Posted Sep 9<br>134K likes, 14.7K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">Guitar cover posted as a thank-you for hitting 1K followers, and it went to 704K views. A congratulations comment from Miguel lands on a milestone post.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7683286911338695967"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @moriasings</span></div>
        <div class="rmeta"><span class="rh">@moriasings</span><span class="rv">632K views</span></div>
        <div class="rdate">Posted Sep 8<br>88.2K likes, 2.5K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">Another milestone post: "thank you so much for 40K," sung to "Sure Thing." 88K likes. Same move, a short comment from Miguel.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7685573642134048031"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @jaquelinearagonn</span></div>
        <div class="rmeta"><span class="rh">@jaquelinearagonn</span><span class="rv">854K views</span></div>
        <div class="rdate">Posted Sep 15<br>146K likes, 7.7K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">A 1.5M-follower creator lip-syncing on the official sound. 146K likes. A comment here keeps the official audio moving.</p>
      </article>
      <article class="card">
        <div class="embed" data-id="7690653752709205281"><button class="embed-btn" type="button">&#9654; Load the clip</button><span class="embed-meta">TikTok @seraahr</span></div>
        <div class="rmeta"><span class="rh">@seraahr</span><span class="rv">171K views</span></div>
        <div class="rdate">Posted Sep 28<br>32.8K likes, 10.7K shares</div>
        <span class="tier">Comment</span>
        <p class="rwhy">A 2M-follower creator, lyric on screen. The highest share-rate in the sample at 6.3%, which means people are sending it to someone. A comment rides that.</p>
      </article>
    </div>
  </section>

  <section class="sec wrap" id="ideas">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Content Ideas</h2>
      <p class="desc">Eight things he can make himself, each sized to the time it takes. Phone quality is fine for all of them. We brief, shortlist and edit.</p>
    </div>
    <div class="idea-grid">
      <article class="card idea">
        <div class="card-top"><span class="play-num">01</span><span class="effort">15 min, phone</span></div>
        <h3 class="play-title">The Tiny Desk story</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>Twenty to thirty seconds straight to camera: why he opened the Tiny Desk with "Sure Thing," what the strings changed, what that day felt like. Green-screen the most popular fan clip behind him if he likes.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>The live take is what people are using. His own account of it attaches the whole wave to the artist he is right now.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">02</span><span class="effort">15 min a week</span></div>
        <h3 class="play-title">Duet of the week</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>One duet a week from a shortlist we send every Monday. He sings the harmony or the next line under a cover he likes.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>Covers are the most common post on the song. A duet is a co-sign and a performance at the same time, and it gives the cover community a reason to keep going.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">03</span><span class="effort">20 min</span></div>
        <h3 class="play-title">Handwritten lyric carousel</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>Him writing the lyric out by hand, one photo per verse, posted as a carousel on Instagram and TikTok. A nod to the journal trend built on "Paper, baby, I'll be the pen."</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>Carousels get saved and sent. A lyric post in his own handwriting is personal in a way a lyric template never is.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">04</span><span class="effort">On the stream</span></div>
        <h3 class="play-title">Live on Wildheart Wednesdays</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>Play it with the room on the next S1C livestream. We clip it inside 48 hours and post to TikTok, Reels and Shorts.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>It creates a new live take he owns, and every clip points people back to s1c.la, where the community lives.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">05</span><span class="effort">30 min, studio</span></div>
        <h3 class="play-title">Sure Thing, 2026</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>One take, today, stripped down. Him and a guitar, or him and Ray, in the studio on a phone. No production.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>Gives creators a fresh audio to build on, recorded by the artist he is now, and it lives on his account.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">06</span><span class="effort">5 min from him</span></div>
        <h3 class="play-title">Thank-you montage</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>We cut the best covers, lip-syncs and fan clips from the US to the Philippines to Germany into one video. He adds a ten-second voice note or a caption.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>One post that thanks everyone at once. It is the same fan-montage co-sign PARTYNEXTDOOR used on "TBH," one of the strongest plays in the "Damned" study.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">07</span><span class="effort">10 min</span></div>
        <h3 class="play-title">Comment sweep</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>He replies in text, from his own account, to ten or fifteen posts from the list on this page. We send the links in one message.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>The lowest-lift move there is. Creators screenshot artist comments and post them, which starts the next round of content on its own.</p></div>
        </div>
      </article>
      <article class="card idea">
        <div class="card-top"><span class="play-num">08</span><span class="effort">10 min, studio</span></div>
        <h3 class="play-title">It always comes back around</h3>
        <div class="tear">
          <div class="tblock"><span class="tl">What it is</span><p>Studio footage with one line on screen: "Sure Thing" always seems to come back when he is working on something new.</p></div>
          <div class="tblock why"><span class="tl">Why it works now</span><p>It turns attention on an older record toward what is next, in passing, without a date or a hard sell.</p></div>
        </div>
      </article>
    </div>
  </section>

  <section class="sec wrap" id="slate">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>This Week's Slate</h2>
      <p class="desc">The same plays, sequenced so the first week costs him about an hour.</p>
    </div>
    <div class="slate">
      <h3>Sequenced by lift</h3>
      <p class="sd">Everything here is phone quality and on his terms. We send each piece with the link, the move and a one-line brief.</p>
      <div class="slate-grid">
        <div class="sl"><span class="k">This week</span><ul>
          <li><b>The three Start Here replies</b>: FIA and Emilia, the Joseph Adams duet, the Tiny Desk stitch.</li>
          <li><b>Comment sweep</b>: ten minutes on the React-Ready list.</li>
          <li><b>The Tiny Desk story</b>, if he has fifteen more minutes.</li>
        </ul></div>
        <div class="sl"><span class="k">Next stream</span><ul>
          <li><b>"Sure Thing" live on Wildheart Wednesdays</b>, with the room.</li>
          <li>We clip it inside 48 hours for TikTok, Reels and Shorts.</li>
        </ul></div>
        <div class="sl"><span class="k">Ongoing</span><ul>
          <li><b>Duet of the week</b> from our Monday shortlist.</li>
          <li><b>Thank-you montage</b> once we have twenty strong clips.</li>
          <li><b>Lyric carousel</b> and <b>"Sure Thing, 2026"</b> whenever he is in the studio.</li>
        </ul></div>
      </div>
      <p class="need">What we need from Miguel: <b>about an hour this week.</b> We do the finding, the shortlisting, the briefing and the cutting.</p>
    </div>
  </section>

  <section class="sec wrap" id="engagement">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>What Drives Engagement</h2>
      <p class="desc">28 TikTok posts on "Sure Thing" from the last 30 days, sorted by format.</p>
    </div>
    <div class="finding"><p><b>His own performance is the best-performing content on the song.</b> Fan clips of his live takes earn about 20 likes and 2 shares per 100 views, the highest of any format, and three times the share-rate of lifestyle lip-syncs. That is why two of the three Start Here picks put his performance or his voice at the center.</p></div>
    <div class="statstrip" id="statstrip"></div>
    <div class="board" id="board"></div>
    <div class="tablewrap"><table class="data" id="engtable"></table></div>
    <p class="tbl-note" id="tblnote"></p>
  </section>

  <section class="sec wrap" id="method">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>Methodology</h2>
      <p class="desc">How this was built.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">01 / Streaming</span><h4>Daily platform data</h4><p>Spotify streams and TikTok post counts for "Sure Thing" pulled from Chartmetric daily history through October 6, 2026.</p></div>
      <div class="mcard"><span class="s">02 / Sourcing</span><h4>Real posts, verified live</h4><p>Posts pulled from TikTok search for the song across the last 30 days, ranked by engagement, filtered to posts actually built on "Sure Thing." Every embed was verified live before it went on this page.</p></div>
      <div class="mcard"><span class="s">03 / Review</span><h4>Clips checked</h4><p>Featured posts were reviewed with video AI and a frame check to classify the format and confirm what is on screen, so each reply fits the post it answers.</p></div>
      <div class="mcard"><span class="s">04 / Engagement</span><h4>Live post metrics</h4><p>Plays, likes, comments and shares per post, used to compute like-rate and share-rate by format. Counts drift and are current as of build.</p></div>
      <div class="mcard"><span class="s">05 / Approach</span><h4>Artist-led by design</h4><p>Every recommendation keeps Miguel in frame on his own terms, sized to minutes, with the lightest move that works.</p></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Streaming and post counts are current as of October 6, 2026 and will drift. Every clip was verified live and embeddable at build. Spotify figures are for the original recording; TikTok post counts include every version of the song.</p>
  </footer>
</div>

<script>
(function(){
  var PASS="CAOS";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});
  document.querySelectorAll('.embed').forEach(function(box){
    var btn=box.querySelector('.embed-btn'); if(!btn)return;
    btn.addEventListener('click',function(){
      box.classList.add('loaded');
      box.innerHTML='<iframe src="https://www.tiktok.com/embed/v2/'+box.getAttribute('data-id')+'" allow="encrypted-media;" allowfullscreen loading="lazy"></iframe>';
    });
  });
})();
(function(){
  var DATA=[
    {"a": "FIA", "h": "fiamarielin", "f": "Lifestyle / lip-sync", "p": 4624221, "l": 614383, "c": 4831, "sh": 19655, "d": "2026-09-20"},
    {"a": "jehnz1e", "h": "jehnz1e", "f": "Live clip (his performance)", "p": 3110586, "l": 635037, "c": 390, "sh": 65075, "d": "2026-09-24"},
    {"a": "Joseph Adams", "h": "josephadamsofficial", "f": "Cover", "p": 1787174, "l": 208583, "c": 1771, "sh": 42428, "d": "2026-09-06"},
    {"a": "luvr", "h": "lovinqkpopxo", "f": "K-pop crossover", "p": 993956, "l": 155557, "c": 413, "sh": 13997, "d": "2026-09-17"},
    {"a": "notyro", "h": "notskpie", "f": "Live clip (his performance)", "p": 879090, "l": 182837, "c": 204, "sh": 19851, "d": "2026-09-30"},
    {"a": "jackie", "h": "jaquelinearagonn", "f": "Lifestyle / lip-sync", "p": 854094, "l": 145540, "c": 201, "sh": 7741, "d": "2026-09-15"},
    {"a": "greengrape", "h": "imgreengrape", "f": "Cover", "p": 704277, "l": 134299, "c": 140, "sh": 14658, "d": "2026-09-09"},
    {"a": "moriasings", "h": "moriasings", "f": "Cover", "p": 632363, "l": 88191, "c": 286, "sh": 2500, "d": "2026-09-08"},
    {"a": "vibemusicxs1", "h": "vibemusicxs1", "f": "Lyric video", "p": 541419, "l": 64385, "c": 140, "sh": 2122, "d": "2026-09-11"},
    {"a": "Joshy", "h": "rzejoshy", "f": "Cover", "p": 482218, "l": 73000, "c": 406, "sh": 2107, "d": "2026-09-18"},
    {"a": "marley", "h": "marleybleu", "f": "Cover", "p": 467941, "l": 83855, "c": 968, "sh": 1922, "d": "2026-09-29"},
    {"a": "aiden", "h": "aidenrossmusic", "f": "Cover", "p": 446939, "l": 69632, "c": 223, "sh": 3594, "d": "2026-09-07"},
    {"a": "povbrianshow", "h": "povbrianshow", "f": "Live clip (his performance)", "p": 307199, "l": 67603, "c": 83, "sh": 3353, "d": "2026-09-16"},
    {"a": "yoashy", "h": "yoashy5", "f": "Live clip (his performance)", "p": 303844, "l": 51680, "c": 304, "sh": 11325, "d": "2026-09-28"},
    {"a": "hailey picardi", "h": "officialhaileypicardi", "f": "Cover", "p": 283021, "l": 59548, "c": 271, "sh": 1207, "d": "2026-09-29"},
    {"a": "dhapcil", "h": "kuacigorank", "f": "Cover", "p": 277041, "l": 18489, "c": 1050, "sh": 5880, "d": "2026-09-13"},
    {"a": "jackie", "h": "jaquelinearagonn", "f": "Lifestyle / lip-sync", "p": 286682, "l": 24837, "c": 134, "sh": 699, "d": "2026-09-21"},
    {"a": "ethan", "h": "help.find.ethan", "f": "Cover", "p": 238899, "l": 17513, "c": 290, "sh": 4342, "d": "2026-09-25"},
    {"a": "darchxve", "h": "darchxve", "f": "Live clip (his performance)", "p": 222588, "l": 45540, "c": 288, "sh": 3694, "d": "2026-09-18"},
    {"a": "ser", "h": "seraahr", "f": "Lifestyle / lip-sync", "p": 170622, "l": 32816, "c": 52, "sh": 10674, "d": "2026-09-28"},
    {"a": "Indie Tolentino", "h": "its.indielane", "f": "Cover", "p": 82343, "l": 14397, "c": 441, "sh": 517, "d": "2026-09-28"},
    {"a": "haibytyy_", "h": "haibytyy_", "f": "Lifestyle / lip-sync", "p": 81701, "l": 18032, "c": 35, "sh": 233, "d": "2026-10-02"},
    {"a": "notemfortears", "h": "notemfortears", "f": "Cover", "p": 72928, "l": 2872, "c": 39, "sh": 113, "d": "2026-09-07"},
    {"a": "leethesalvatore", "h": "leethesalvatore", "f": "K-pop crossover", "p": 66335, "l": 20761, "c": 23, "sh": 1418, "d": "2026-09-10"},
    {"a": "Pikachu", "h": "vampy_pika", "f": "Cover", "p": 60251, "l": 10594, "c": 101, "sh": 611, "d": "2026-09-08"},
    {"a": "urs0ngs", "h": "urs0ngs", "f": "Lyric video", "p": 32214, "l": 1171, "c": 6, "sh": 210, "d": "2026-09-29"},
    {"a": "redninja11260", "h": "redninja11260", "f": "Live clip (his performance)", "p": 25475, "l": 3290, "c": 3, "sh": 88, "d": "2026-09-16"},
    {"a": "unico.ak1", "h": "unico.ak1", "f": "Live clip (his performance)", "p": 24105, "l": 1839, "c": 3, "sh": 251, "d": "2026-09-21"}
  ];
  DATA.forEach(function(r){r.lr=r.l/r.p*100;r.sr=r.sh/r.p*100;});
  function fmt(n){if(n>=1e6)return (n/1e6).toFixed(1)+'M';if(n>=1e3)return (n/1e3).toFixed(n>=1e5?0:1)+'K';return ''+n;}
  var tv=0,maxLr=0,maxSr=0,minLr=999;
  DATA.forEach(function(r){tv+=r.p;if(r.lr>maxLr)maxLr=r.lr;if(r.sr>maxSr)maxSr=r.sr;if(r.lr<minLr)minLr=r.lr;});
  document.getElementById('statstrip').innerHTML=
    '<div class="stat"><div class="n">'+DATA.length+'</div><span class="l">Posts analyzed</span></div>'+
    '<div class="stat"><div class="n">'+fmt(tv)+'</div><span class="l">Combined views</span></div>'+
    '<div class="stat"><div class="n">'+maxLr.toFixed(1)+'%</div><span class="l">Top like-rate</span></div>'+
    '<div class="stat"><div class="n">'+maxSr.toFixed(1)+'%</div><span class="l">Top share-rate</span></div>';
  var g={};
  DATA.forEach(function(r){var x=g[r.f]=g[r.f]||{p:0,l:0,sh:0,n:0};x.p+=r.p;x.l+=r.l;x.sh+=r.sh;x.n++;});
  var board=Object.keys(g).map(function(k){var x=g[k];return {k:k,sr:x.sh/x.p*100,lr:x.l/x.p*100,n:x.n};});
  board.sort(function(a,b){return b.sr-a.sr;});
  var bmax=board[0].sr;
  var h='<h3>Formats ranked by share-rate</h3><p class="cap">Shares per 100 views across every post in that format, weighted by views. Like-rate shown alongside. Shares are what move a song to new people.</p>';
  board.forEach(function(b){h+='<div class="brow"><div class="bl">'+b.k+'<span class="bn">'+b.n+' post'+(b.n>1?'s':'')+', '+b.lr.toFixed(1)+'% likes</span></div><div class="bt"><div class="bf" style="width:'+(b.sr/bmax*100).toFixed(1)+'%"></div></div><div class="bv">'+b.sr.toFixed(2)+'%</div></div>';});
  document.getElementById('board').innerHTML=h;
  var cols=[{k:'h',t:'Account',l:1},{k:'f',t:'Format',l:1},{k:'p',t:'Plays'},{k:'l',t:'Likes'},{k:'lr',t:'Like %'},{k:'c',t:'Comments'},{k:'sh',t:'Shares'},{k:'sr',t:'Share %'},{k:'d',t:'Date',l:1}];
  var tbl=document.getElementById('engtable'),sortKey='p',sortDir=-1;
  function draw(){
    var rows=DATA.slice().sort(function(a,b){var x=a[sortKey],y=b[sortKey];if(typeof x==='string')return sortDir*x.localeCompare(y);return sortDir*(x-y);});
    var h='<thead><tr>';
    cols.forEach(function(c){h+='<th class="'+(c.l?'l ':'')+(c.k===sortKey?'sorted':'')+'" data-k="'+c.k+'">'+c.t+(c.k===sortKey?(sortDir<0?' ▼':' ▲'):'')+'</th>';});
    h+='</tr></thead><tbody>';
    rows.forEach(function(r){h+='<tr><td class="l">@'+r.h+'</td><td class="l">'+r.f+'</td><td>'+fmt(r.p)+'</td><td>'+fmt(r.l)+'</td><td class="'+(r.lr===maxLr?'hi':'')+'">'+r.lr.toFixed(1)+'%</td><td>'+fmt(r.c)+'</td><td>'+fmt(r.sh)+'</td><td class="'+(r.sr===maxSr?'hi':'')+'">'+r.sr.toFixed(2)+'%</td><td class="l">'+r.d+'</td></tr>';});
    tbl.innerHTML=h+'</tbody>';
    tbl.querySelectorAll('th').forEach(function(th){th.addEventListener('click',function(){var k=th.getAttribute('data-k');if(k===sortKey)sortDir=-sortDir;else{sortKey=k;sortDir=(k==='h'||k==='f'||k==='d')?1:-1;}draw();});});
  }
  draw();
  document.getElementById('tblnote').textContent='Click any column to sort. Like-rate is likes divided by plays; share-rate is shares divided by plays. Metrics current as of October 6, 2026 and will drift.';
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
