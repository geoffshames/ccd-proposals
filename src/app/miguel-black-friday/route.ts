export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Miguel Black Friday Merch Plan | Crowd Control Digital</title>
<meta name="description" content="Black Friday merch plan for Miguel: S1C.LA early access, email and SMS, and a paid test." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Miguel Black Friday Merch Plan" />
<meta property="og:description" content="Prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://proposal.crowdcontroldigital.com/miguel-black-friday" />
<meta property="og:image" content="https://proposal.crowdcontroldigital.com/images/miguel-black-friday/og.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
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

  /* black friday additions */
  .cover-hero::before{background-image:url('/images/miguel-damned/hero-bg.jpg')}
  .stat .n.r{color:var(--accent)}
  .ev-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  @media(max-width:900px){.ev-grid{grid-template-columns:1fr}}
  .ev{background:var(--card);border:1px solid var(--line-2);padding:22px}
  .ev .evn{font-family:var(--fh);font-size:2.3rem;line-height:1;color:var(--ink)}
  .ev .evl{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.13em;color:var(--secondary);display:block;margin:8px 0 14px}
  .ev h4{text-transform:none;font-size:1.08rem;letter-spacing:-.01em;margin:0 0 6px}
  .ev p{margin:0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ev p b{color:var(--ink)}
  .ev .so{margin-top:14px;border-left:2px solid var(--accent);background:var(--card-2);padding:10px 14px;font-size:14px;color:var(--ink)}
  .ev .so .ml{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.14em;color:var(--accent);display:block;margin-bottom:3px}

  .prod{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:16px}
  @media(max-width:900px){.prod{grid-template-columns:1fr}}
  .pc{background:var(--card);border:1px solid var(--line-2);padding:22px;display:flex;flex-direction:column}
  .pc.hero{border-color:rgba(253,55,55,.5)}
  .pc h3{text-transform:none;font-size:1.3rem;letter-spacing:-.01em;margin:10px 0 8px}
  .pc p{margin:0 0 12px;color:var(--muted);font-size:14.5px;line-height:1.55}
  .pc ul{margin:0 0 12px;padding-left:16px}
  .pc li{color:var(--ink);font-size:14px;margin-bottom:5px}
  .pc .foot{margin-top:auto;border-top:1px solid var(--line-2);padding-top:12px;font-family:var(--fm);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--secondary)}
  .pc .foot b{color:var(--ink);font-weight:500}

  .opts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:8px}
  @media(max-width:900px){.opts{grid-template-columns:1fr}}
  .opt{background:var(--card-2);border:1px solid var(--line-2);padding:22px;cursor:pointer;text-align:left;color:var(--ink);font:inherit;transition:border-color .25s,background .25s;display:flex;flex-direction:column}
  .opt:hover{border-color:var(--line-hover)}
  .opt.sel{border-color:var(--accent);background:rgba(253,55,55,.05)}
  .opt .ol{display:flex;justify-content:space-between;align-items:center;gap:8px}
  .opt .rec{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:#fff;background:var(--accent);padding:4px 8px}
  .opt h4{text-transform:none;font-size:1.15rem;letter-spacing:-.01em;margin:10px 0 8px}
  .opt p{margin:0 0 10px;color:var(--muted);font-size:14px;line-height:1.5}
  .opt ul{margin:0;padding-left:16px}
  .opt li{color:var(--ink);font-size:13.5px;margin-bottom:5px}
  .opt .pick{margin-top:auto;padding-top:14px;font-family:var(--fm);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--secondary)}
  .opt.sel .pick{color:var(--accent)}

  .ladder{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--line-2);margin-top:22px}
  @media(max-width:760px){.ladder{grid-template-columns:1fr}}
  .rung{padding:18px 20px;border-right:1px solid var(--line-2);background:var(--card-2)}
  .rung:last-child{border-right:0}
  @media(max-width:760px){.rung{border-right:0;border-bottom:1px solid var(--line-2)}}
  .rung .t{font-family:var(--fh);font-size:1.6rem;line-height:1}
  .rung .g{color:var(--muted);font-size:14px;margin-top:8px}
  .rung .g b{color:var(--ink)}
  .note{color:var(--secondary);font-size:13px;margin:12px 0 0;line-height:1.55;max-width:900px}

  .flow{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
  @media(max-width:900px){.flow{grid-template-columns:1fr}}
  .fl{background:var(--card);border:1px solid var(--line-2);padding:18px 20px}
  .fl .fh{display:flex;justify-content:space-between;align-items:baseline;gap:10px}
  .fl h4{text-transform:none;font-size:1.04rem;letter-spacing:-.01em;margin:0}
  .fl .tg{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--accent);border:1px solid rgba(253,55,55,.4);padding:3px 7px;white-space:nowrap}
  .fl .tg.w{color:var(--muted);border-color:var(--line-hover)}
  .fl p{margin:8px 0 0;color:var(--muted);font-size:14px;line-height:1.5}
  .fl p b{color:var(--ink)}
  .sub-h{font-family:var(--fh);text-transform:uppercase;font-size:1.15rem;margin:34px 0 14px;letter-spacing:.01em}

  table.cal{width:100%;border-collapse:collapse;font-size:14px;min-width:720px}
  table.cal th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:left;padding:12px;border-bottom:1px solid var(--line-2);background:var(--card-2)}
  table.cal td{padding:12px;border-bottom:1px solid var(--line);vertical-align:top;color:var(--muted)}
  table.cal td.d{color:var(--ink);white-space:nowrap;font-family:var(--fm);font-size:12px;letter-spacing:.06em}
  table.cal td b{color:var(--ink)}
  table.cal tr.key td{background:rgba(253,55,55,.05)}
  table.cal tr.key td.d{color:var(--accent)}
  .ch{display:inline-block;font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.1em;padding:3px 7px;border:1px solid var(--line-hover);color:var(--muted);margin:0 4px 4px 0;white-space:nowrap}
  .ch.r{color:var(--accent);border-color:rgba(253,55,55,.45)}

  .calc{background:var(--card-2);border:1px solid var(--line-2);padding:26px clamp(18px,3vw,32px);margin-top:26px}
  .calc h3{text-transform:none;font-size:1.3rem;letter-spacing:-.01em;margin:0 0 6px}
  .calc .cd{color:var(--muted);font-size:14.5px;margin:0 0 20px;max-width:760px}
  .calc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
  @media(max-width:860px){.calc-grid{grid-template-columns:1fr}}
  .ctrl label{display:flex;justify-content:space-between;font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);margin-bottom:10px}
  .ctrl label b{color:var(--ink);font-weight:500;font-size:13px;letter-spacing:.04em}
  .ctrl input[type=range]{width:100%;accent-color:#FD3737}
  .calc-out{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:24px}
  @media(max-width:760px){.calc-out{grid-template-columns:repeat(2,1fr)}}
  .co{background:var(--card);border:1px solid var(--line-2);padding:16px}
  .co .n{font-family:var(--fh);font-size:1.7rem;line-height:1}
  .co .l{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);display:block;margin-top:8px}
  .co.neg .n{color:var(--accent)}
  .verdict{margin-top:16px;border-left:2px solid var(--accent);padding:10px 14px;background:var(--card);font-size:14.5px;color:var(--ink)}

  .gates{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}
  @media(max-width:900px){.gates{grid-template-columns:1fr}}
  .gt{background:var(--card);border:1px solid var(--line-2);padding:18px 20px}
  .gt .k{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.13em;color:var(--accent)}
  .gt h4{text-transform:none;font-size:1.05rem;letter-spacing:-.01em;margin:7px 0 6px}
  .gt p{margin:0;color:var(--muted);font-size:14px;line-height:1.5}
  .gt p b{color:var(--ink)}

  .needs td.o{white-space:nowrap;color:var(--ink)}
  .chk{display:inline-flex;align-items:center;gap:8px;cursor:pointer;font-family:var(--fm);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--secondary)}
  .chk input{accent-color:#FD3737;width:15px;height:15px}
  tr.done td{opacity:.45}

  .cta{margin:64px 0 0;border-top:1px solid var(--line-2);padding:48px 0 0;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;flex-wrap:wrap}
  .cta h2{font-size:clamp(2.2rem,6vw,4.4rem);line-height:.92}
  .cta a.btn{display:inline-block;background:var(--accent);color:#fff;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.14em;padding:16px 26px}
  .cta a.btn:hover{background:#ff4f4f}
  .cta .mail{font-family:var(--fm);font-size:12px;letter-spacing:.08em;color:var(--muted);margin-top:12px;display:block}

  /* miguel to-do */
  .mg{border:2px solid var(--accent);background:linear-gradient(180deg,rgba(253,55,55,.08),rgba(253,55,55,.02));padding:clamp(24px,4vw,44px)}
  .mg-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap}
  .mg h2{font-size:clamp(2.6rem,7vw,5.2rem);line-height:.9;letter-spacing:-.02em}
  .mg .mg-sub{font-family:var(--fh);text-transform:none;font-size:clamp(1.1rem,2vw,1.45rem);line-height:1.2;margin:18px 0 0;max-width:760px}
  .mg .mg-count{font-family:var(--fm);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#fff;background:var(--accent);padding:8px 12px;white-space:nowrap}
  .mg-list{margin-top:30px;border-top:1px solid rgba(253,55,55,.35)}
  .mg-row{display:grid;grid-template-columns:150px 1fr 120px 44px;gap:18px;align-items:center;padding:20px 0;border-bottom:1px solid rgba(253,55,55,.25)}
  @media(max-width:760px){.mg-row{grid-template-columns:1fr 44px;gap:8px}.mg-row .mg-d{grid-column:1/2}.mg-row .mg-t{grid-column:1/2}.mg-row .mg-m{grid-column:1/2}.mg-row .mg-c{grid-column:2/3;grid-row:1/4}}
  .mg-d{font-family:var(--fh);font-size:1.35rem;color:var(--accent);line-height:1.05}
  .mg-d span{display:block;font-family:var(--fm);font-size:10px;letter-spacing:.14em;color:var(--muted);margin-top:5px}
  .mg-t h4{text-transform:none;font-size:1.22rem;letter-spacing:-.01em;margin:0 0 4px}
  .mg-t p{margin:0;color:var(--muted);font-size:14.5px;line-height:1.5}
  .mg-t p b{color:var(--ink)}
  .mg-m{font-family:var(--fm);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink)}
  .mg-c input{width:26px;height:26px;accent-color:#FD3737;cursor:pointer}
  .mg-row.done{opacity:.4}
  .mg-rule{margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:760px){.mg-rule{grid-template-columns:1fr}}
  .mg-rule div{background:var(--bg);border:1px solid var(--line-2);padding:16px 18px;font-size:14.5px;color:var(--muted);line-height:1.5}
  .mg-rule div b{color:var(--ink)}
  .mg-rule .k{font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);display:block;margin-bottom:6px}
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>

<div class="gate" id="gate">
  <div class="gate-row"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">MIGUEL</div>
    <div class="bar"></div>
    <p class="gate-sub">Black Friday merch plan, prepared by Crowd Control Digital. Enter the password to continue.</p>
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
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">November 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">MIGUEL<span class="sm">BLACK FRIDAY MERCH PLAN</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">The sale opens on Wednesday's livestream, goes public on Black Friday and closes with a Cyber Monday push. The box sets open a waitlist, and every sale is traced to the channel that made it.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">Key dates</div><div class="cv">Livestream Nov 25, public Nov 27, Cyber Monday Nov 30</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames, Co-Founder, CCD</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Miguel / Black Friday</a>
      <div class="nb-jump"><a href="#miguel">Miguel</a><a href="#offer">Offer</a><a href="#early">Early Access</a><a href="#crm">Email + SMS</a><a href="#paid">Paid</a><a href="#calendar">Calendar</a><a href="#needs">Team</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>The plan at a glance</h2>
    <p class="lead">A soft launch on <b>Wednesday's livestream</b>, where the password-protected collection opens to the fans watching and to everyone who signed up for early access. <b>Black Friday opens the sale to everyone</b> with a full email and SMS push, and <b>Cyber Monday</b> brings one more. Archival merch is 30% off, the two box sets sit at full price on a notify-me waitlist, and a $1,000 paid test scales in real time once it clears 5x.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">What we sell</span><p><b>Archival merch at 30% off</b> leads the sale, alongside the current shop. The CAOS and Catalog vinyl box sets open a <b>notify-me waitlist</b> at full price.</p></div>
      <div class="ctx-card"><span class="k">How it reaches fans</span><p><b>The Wednesday livestream, a sign-up call to action on socials, email and SMS on Hive,</b> and a paid layer pointed at the sale collection.</p></div>
      <div class="ctx-card"><span class="k">How we measure it</span><p><b>Tracked links per channel</b>, sign-ups and waitlist counts, a daily read through the sale, and a live report page from Black Friday.</p></div>
    </div>
    <div class="react-momentum" style="margin-top:28px">
      <div class="rm"><div class="rn">WED</div><span class="rl">Soft launch on the livestream, password-protected collection opens</span></div>
      <div class="rm"><div class="rn">30%</div><span class="rl">Off archival merch. Box sets stay full price</span></div>
      <div class="rm"><div class="rn">150</div><span class="rl">Units of each box set. Once they're gone, they're gone</span></div>
      <div class="rm"><div class="rn">5X</div><span class="rl">Return on ad spend that keeps the budget rising</span></div>
    </div>
  </section>

  <section class="sec wrap" id="miguel">
    <div class="mg">
      <div class="mg-top">
        <div><div class="mono" style="color:var(--accent);margin-bottom:14px">Yours to own</div><h2>MIGUEL'S<br/>TO-DO</h2></div>
        <span class="mg-count">8 items, Nov 23–30</span>
      </div>
      <p class="mg-sub">Eight things, each with a date. Every date holds the schedule: if one slips, the sale moves with it.</p>
      <div class="mg-list">
        <div class="mg-row"><div class="mg-d">Mon Nov 23<span>Tonight</span></div><div class="mg-t"><h4>Final notes on the site</h4><p>Anything he wants changed on the store goes in <b>tonight</b>. After that the site is locked through Cyber Monday so it matches the social and email creative.</p></div><div class="mg-m">About 15 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Tue Nov 24<span>Approval</span></div><div class="mg-t"><h4>Sign off on the box set waitlist</h4><p>Both box sets go up as <b>notify me</b>, no deposit, 150 of each, with a clear note that delivery before Christmas is not guaranteed.</p></div><div class="mg-m">About 2 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Tue Nov 24<span>Approval</span></div><div class="mg-t"><h4>Approve the sign-up graphic and the sale copy</h4><p>The early access graphic, plus every email and text from Wednesday to Cyber Monday <b>on one copy sheet</b>.</p></div><div class="mg-m">About 20 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Tue Nov 24<span>Post</span></div><div class="mg-t"><h4>Post "Sign up for early access"</h4><p>Feed post and stories with the sign-up link. <b>Everyone who signs up gets the password</b> when the collection opens on Wednesday. We supply the graphic and copy.</p></div><div class="mg-m">About 5 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Wed Nov 25<span>Film</span></div><div class="mg-t"><h4>Send a 15-second phone clip</h4><p>Vertical, to camera, in his own words: the Black Friday sale is live and archival pieces are 30% off. <b>One take is fine.</b> This becomes the lead ad from Friday.</p></div><div class="mg-m">About 10 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Wed Nov 25<span>Livestream</span></div><div class="mg-t"><h4>Open the sale on the stream</h4><p>Tell viewers the collection is open, <b>share the password</b>, and point them to the box set waitlist. The people watching get first pick.</p></div><div class="mg-m">About 2 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Fri Nov 27<span>Post</span></div><div class="mg-t"><h4>Story: Black Friday is live</h4><p>"If you missed it on Wednesday's stream, the sale is open to everyone now." Link to the shop.</p></div><div class="mg-m">About 2 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
        <div class="mg-row"><div class="mg-d">Mon Nov 30<span>Post</span></div><div class="mg-t"><h4>Story: Cyber Monday</h4><p>One story for the <b>Cyber Monday push</b>. We send the graphic and copy over the weekend.</p></div><div class="mg-m">About 2 min</div><div class="mg-c"><input type="checkbox" aria-label="Done" /></div></div>
      </div>
      <div class="mg-rule">
        <div><span class="k">About an hour, total</span>Spread across the week. Every approval comes as <b>one copy sheet</b> with the date it is needed by.</div>
        <div><span class="k">Everything else is on us</span>Building the creative, the flows and the ads, running the sale, reporting the results. <b>The team checklist below covers the rest.</b></div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="basis">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>What We Are Building On</h2>
      <p class="desc">What Miguel's own numbers say works, and how each one shapes this sale.</p>
    </div>
    <div class="ev-grid">
      <div class="ev">
        <div class="evn">3,860</div><span class="evl">Emails captured in the October 2025 announce week, plus 2,536 in release week</span>
        <h4>Fans sign up around a moment</h4>
        <p>List growth has been strongest when capture was pointed at a live release moment. Outside those windows, capture has been close to flat.</p>
        <div class="so"><span class="ml">So this sale</span>Asks fans to sign up for early access, and turns the box set waitlist into another reason to leave an email or number.</div>
      </div>
      <div class="ev">
        <div class="evn">4–5%</div><span class="evl">Click-through on the spring EU tour flight, at $0.05–$0.06 per click</span>
        <h4>His audience responds to paid</h4>
        <p>That flight ran at two to four times the 1 to 2% music benchmark, and tour paid delivered 7.3M Instagram video views in the first half of the year.</p>
        <div class="so"><span class="ml">So this sale</span>Starts paid on warm audiences first, where response is already proven, and adds prospecting second.</div>
      </div>
      <div class="ev">
        <div class="evn">13</div><span class="evl">Viewers asking for merch, vinyl or a "CAOS kit" on one Oct 28 livestream</span>
        <h4>Fans are asking for physical product</h4>
        <p>The S1C livestreams run at about 18 chat messages a minute, and the requests for product came unprompted.</p>
        <div class="so"><span class="ml">So this sale</span>Opens on the Wednesday stream, where those fans already are, and gives them first pick.</div>
      </div>
      <div class="ev">
        <div class="evn">30K</div><span class="evl">Contacts on the Miguel list in Hive, with good open rates</span>
        <h4>The owned channels are in place</h4>
        <p>Email, SMS and the S1C site now sit in one system, which makes segment-level sends and per-channel attribution possible.</p>
        <div class="so"><span class="ml">So this sale</span>Hits the full list on Black Friday and again on Cyber Monday, with lighter follow-ups to people who have not bought.</div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="offer">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>The Offer</h2>
      <p class="desc">Archival merch on sale, the box sets on a waitlist at full price, and the rest of the shop alongside.</p>
    </div>
    <div class="prod">
      <div class="pc hero">
        <span class="tier">On sale</span>
        <h3>Archival Merch, 30% Off</h3>
        <p>The heart of the sale, and the pieces that lead the ads and emails.</p>
        <ul>
          <li>Archival apparel and accessories</li>
          <li>Wildheart Baja Hoodie</li>
          <li>Script Logo Tee</li>
        </ul>
        <div class="foot">Ships from <b>Oaklandish</b></div>
      </div>
      <div class="pc">
        <span class="tier">Waitlist</span>
        <h3>CAOS + Catalog Vinyl Box Sets</h3>
        <p>Full price, 150 of each. Fans join a notify-me list now and get first access when they are ready to ship.</p>
        <ul>
          <li>CAOS: hand-signed deluxe vinyl, Zine Vol 1, Survival Club Journal, sticker sheet, patch collection</li>
          <li>Catalog vinyl box set, pricing TBC</li>
        </ul>
        <div class="foot">Not guaranteed <b>before Christmas</b></div>
      </div>
      <div class="pc">
        <span class="tier">Also in the shop</span>
        <h3>The Rest of the Store</h3>
        <p>Everything else stays live, so the sale page works as the full shop.</p>
        <ul>
          <li>Current tour merch and CAOS CDs</li>
          <li>New long-sleeve tee, a small first run</li>
        </ul>
        <div class="foot">One <b>catch-all sale page</b> from Friday</div>
      </div>
    </div>

    <h3 class="sub-h">How the box set waitlist works</h3>
    <div class="flow">
      <div class="fl"><div class="fh"><h4>Notify me, no deposit</h4><span class="tg">Email + SMS</span></div><p>Each box set page carries a <b>notify-me sign-up</b> instead of a checkout. No money changes hands until the sets are ready, so there are no refunds or chargebacks to manage.</p></div>
      <div class="fl"><div class="fh"><h4>150 of each</h4><span class="tg">Scarcity</span></div><p>The message is simple: <b>once they're gone, they're gone</b>. The waitlist has no cap, so demand above 150 is captured for a reprint or the next drop.</p></div>
      <div class="fl"><div class="fh"><h4>Clear on timing</h4><span class="tg w">Product page</span></div><p>In bold on both pages: <b>not guaranteed to arrive before Christmas</b>. If they land early, that is a bonus.</p></div>
      <div class="fl"><div class="fh"><h4>Updates all the way</h4><span class="tg w">Email + SMS</span></div><p>Status updates to the waitlist as news comes in, then <b>first access in sign-up order</b> when the sets are ready to ship.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="early">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Early Access</h2>
      <p class="desc">The sale opens first to the people closest to Miguel: the ones on his Wednesday livestream and the ones who sign up for early access.</p>
    </div>
    <div class="gates" style="margin-top:0">
      <div class="gt"><span class="k">Who</span><h4>Livestream viewers and sign-ups</h4><p>Anyone watching Wednesday's stream, plus <b>everyone who signs up</b> through the early access call to action.</p></div>
      <div class="gt"><span class="k">When</span><h4>Wed Nov 25, during the stream</h4><p>The password-protected collection <b>turns on live</b>. It stays gated until the public opening on Black Friday morning.</p></div>
      <div class="gt"><span class="k">How</span><h4>One password</h4><p>Miguel shares it on the stream, and an <b>email and text deliver it</b> to everyone who signed up, the moment the collection opens.</p></div>
    </div>

    <h3 class="sub-h">The sign-up push, Nov 24 to 25</h3>
    <div class="flow">
      <div class="fl"><div class="fh"><h4>Miguel's feed post</h4><span class="tg">Tue Nov 24</span></div><p>"Sign up for early access." The graphic comes from the layered Black Friday file, with a <b>sign-up link in bio</b>.</p></div>
      <div class="fl"><div class="fh"><h4>Stories</h4><span class="tg">Tue Nov 24 + Wed Nov 25</span></div><p>A story when the post goes up and a <b>"tonight on the stream"</b> reminder on Wednesday.</p></div>
      <div class="fl"><div class="fh"><h4>The livestream itself</h4><span class="tg">Wed Nov 25</span></div><p>Viewers are the S1C core. <b>If you're live, you get first pick.</b> The password goes out on stream.</p></div>
      <div class="fl"><div class="fh"><h4>Password delivery</h4><span class="tg w">Email + SMS</span></div><p>Sign-ups get an instant confirmation, then the password <b>automatically</b> when the collection opens.</p></div>
    </div>
    <div class="finding" style="margin-top:22px"><p>Capture target: <b>2,500+ new sign-ups</b> across early access and the box set waitlist, in line with what the October 2025 release week delivered.</p></div>
  </section>

  <section class="sec wrap" id="crm">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Email + SMS</h2>
      <p class="desc">Two parts: the automated flows that run in the background, and the send calendar for the sale itself.</p>
    </div>

    <h3 class="sub-h" style="margin-top:0">Transactional and automated flows</h3>
    <div class="flow">
      <div class="fl"><div class="fh"><h4>Early access sign-up</h4><span class="tg">Email + SMS</span></div><p>Instant confirmation: "You're in. The password lands Wednesday during the stream." Then the <b>password send</b> when the collection opens.</p></div>
      <div class="fl"><div class="fh"><h4>Box set waitlist</h4><span class="tg">Email + SMS</span></div><p>Confirmation on sign-up, <b>status updates</b> as they come in, and a first-access send in sign-up order when the sets ship.</p></div>
      <div class="fl"><div class="fh"><h4>Abandoned checkout</h4><span class="tg">Email + SMS</span></div><p>Email at <b>1 hour</b>, SMS at <b>4 hours</b>, a final email at <b>24 hours</b>. No added discount, so it never trains people to abandon.</p></div>
      <div class="fl"><div class="fh"><h4>Browse abandonment</h4><span class="tg">Email</span></div><p>For anyone who viewed archival pieces without adding to cart. One email at <b>2 hours</b>.</p></div>
      <div class="fl"><div class="fh"><h4>Order confirmation</h4><span class="tg w">Shopify</span></div><p>In S1C branding, with clear shipping times and a prompt to join the list for buyers who are not on it yet.</p></div>
      <div class="fl"><div class="fh"><h4>Shipping and delivery</h4><span class="tg w">Shopify</span></div><p>Branded shipped, out for delivery and delivered notices, so the most-opened emails in the funnel look and sound like S1C.</p></div>
      <div class="fl"><div class="fh"><h4>Post-purchase</h4><span class="tg">Email</span></div><p>Day 3: an invite to the box set waitlist. Day 10: a thank-you and the next S1C livestream date.</p></div>
      <div class="fl"><div class="fh"><h4>Holiday shipping cutoff</h4><span class="tg w">Email + SMS</span></div><p>A last-day-to-order-for-the-holidays send, timed to the carrier cutoff in December.</p></div>
    </div>

    <h3 class="sub-h">Sale send calendar</h3>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>Date</th><th>Audience</th><th>Channel</th><th>Message</th></tr></thead>
        <tbody>
          <tr><td class="d">Tue Nov 24</td><td>Miguel's followers</td><td><span class="ch">Social</span></td><td>"Sign up for early access." Feed post and stories.</td></tr>
          <tr class="key"><td class="d">Wed Nov 25, stream</td><td>Early access sign-ups</td><td><span class="ch r">Email</span><span class="ch r">SMS</span></td><td><b>The collection is open.</b> The password, and a link to the box set waitlist.</td></tr>
          <tr><td class="d">Thu Nov 26</td><td>Nobody</td><td><span class="ch">None</span></td><td>Thanksgiving. No sends.</td></tr>
          <tr class="key"><td class="d">Fri Nov 27, 9am</td><td>Full list, about 30,000</td><td><span class="ch r">Email</span><span class="ch r">SMS</span></td><td><b>Black Friday is live.</b> "If you missed it on Wednesday's stream..." Archival 30% off and the box set waitlist.</td></tr>
          <tr><td class="d">Sat Nov 28</td><td>Engaged, not purchased</td><td><span class="ch">Email</span></td><td>The archival pieces, and the story behind them.</td></tr>
          <tr><td class="d">Sun Nov 29</td><td>Engaged, not purchased</td><td><span class="ch">Email</span></td><td>Gift guide by price point. Cyber Monday tease.</td></tr>
          <tr class="key"><td class="d">Mon Nov 30, 9am</td><td>Full list</td><td><span class="ch r">Email</span><span class="ch r">SMS</span><span class="ch r">Social</span></td><td><b>Cyber Monday push.</b> Last full day of the sale, with a Miguel story and a paid budget push.</td></tr>
          <tr><td class="d">Tue Dec 1, 9am</td><td>Engaged, not purchased</td><td><span class="ch">Email</span><span class="ch">SMS</span></td><td>Last call. Ends tonight at midnight.</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note">Copy is written in Miguel's voice and approved in one batch on Tuesday, so nothing waits on approval mid-sale. Purchasers are suppressed from sale sends the moment they buy.</p>
  </section>

  <section class="sec wrap" id="paid">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Paid Media</h2>
      <p class="desc">A $1,000 test on Meta and Instagram from Black Friday through Cyber Monday, with the budget raised in real time while returns hold above 5x.</p>
    </div>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>Line</th><th>Budget</th><th>Audience</th><th>Creative and destination</th></tr></thead>
        <tbody>
          <tr><td class="d">Retargeting</td><td><b>$600</b></td><td>Store visitors and cart abandoners from the last 30 days, Instagram and Facebook engagers over the last year, video viewers, and the Hive list uploaded as a custom audience</td><td>Product carousel with <b>each card going to its own product page</b>, plus Black Friday graphics going to the sale collection</td></tr>
          <tr><td class="d">Prospecting</td><td><b>$400</b></td><td>Advantage+ shopping seeded with past purchasers and list sign-ups, plus lookalikes of both</td><td>Miguel's 15-second phone clip and the Black Friday graphics, going to the <b>sale collection</b>, not the homepage</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note">The shop homepage becomes the catch-all sale page from Friday, so anyone who clicks the logo still lands on everything in the sale.</p>

    <div class="gates">
      <div class="gt"><span class="k">Scale</span><h4>5x or better</h4><p>Budget goes up <b>in real time</b>, on the day, for as long as returns hold. Cyber Monday gets the biggest push if the weekend clears it.</p></div>
      <div class="gt"><span class="k">Hold</span><h4>3.3x to 5x</h4><p>Profitable at a 30% margin. Keep spend flat and move budget toward the best-performing ads.</p></div>
      <div class="gt"><span class="k">Pull back</span><h4>Under 3.3x</h4><p>Below break-even. Pause prospecting and let email, SMS and social carry the rest of the sale.</p></div>
    </div>

    <div class="calc">
      <h3>What the test returns</h3>
      <p class="cd">Move the sliders to see revenue and profit at different spend and return levels. At a 30% margin, the ads pay for themselves at about 3.3x.</p>
      <div class="calc-grid">
        <div class="ctrl"><label>Ad spend <b id="vSpend">$1,000</b></label><input type="range" id="sSpend" min="500" max="10000" step="250" value="1000" /></div>
        <div class="ctrl"><label>Return on ad spend <b id="vRoas">5.0x</b></label><input type="range" id="sRoas" min="1" max="10" step="0.1" value="5" /></div>
        <div class="ctrl"><label>Net margin <b id="vMargin">30%</b></label><input type="range" id="sMargin" min="15" max="60" step="1" value="30" /></div>
      </div>
      <div class="calc-out">
        <div class="co"><div class="n" id="oRev">$5,000</div><span class="l">Revenue from paid</span></div>
        <div class="co"><div class="n" id="oGp">$1,500</div><span class="l">Margin on that revenue</span></div>
        <div class="co" id="coNet"><div class="n" id="oNet">$500</div><span class="l">Profit after ad spend</span></div>
        <div class="co"><div class="n" id="oBe">3.3x</div><span class="l">Break-even return</span></div>
      </div>
      <div class="verdict" id="verdict">At 5x or better, the budget keeps rising.</div>
    </div>
    <p class="note">Revenue from email, SMS and the livestream sits on top of this and is reported separately, so the paid line is judged on its own.</p>
  </section>

  <section class="sec wrap" id="calendar">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>Calendar</h2>
      <p class="desc">Day by day from tonight's cutoff to the last call.</p>
    </div>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>Date</th><th>What happens</th><th>Channels</th></tr></thead>
        <tbody>
          <tr class="key"><td class="d">Mon Nov 23</td><td><b>Cutoff tonight.</b> All products loaded into the password-protected collection. Final site notes in. Layered Black Friday file and product shots to CCD.</td><td><span class="ch r">Setup</span></td></tr>
          <tr><td class="d">Tue Nov 24</td><td>Site review. Waitlist live on both box set pages. CCD builds the sign-up graphic and all sale creative. Sale copy approved. Miguel posts "Sign up for early access."</td><td><span class="ch">Setup</span><span class="ch">Approval</span><span class="ch">Social</span></td></tr>
          <tr class="key"><td class="d">Wed Nov 25</td><td><b>Livestream soft launch.</b> Collection turns on during the stream, password shared live and sent to sign-ups. Miguel's phone clip in.</td><td><span class="ch r">Livestream</span><span class="ch r">Email</span><span class="ch r">SMS</span></td></tr>
          <tr><td class="d">Thu Nov 26</td><td>Thanksgiving. No sends. Collection stays open to password holders.</td><td><span class="ch">None</span></td></tr>
          <tr class="key"><td class="d">Fri Nov 27</td><td><b>Black Friday, public on sale.</b> Password comes down, catch-all sale page live. Full list email and SMS. Paid goes live. Report page goes live.</td><td><span class="ch r">Email</span><span class="ch r">SMS</span><span class="ch r">Paid</span><span class="ch">Social</span></td></tr>
          <tr><td class="d">Sat Nov 28</td><td>Follow-up email. Paid read, budget up if above 5x.</td><td><span class="ch">Email</span><span class="ch">Paid</span></td></tr>
          <tr><td class="d">Sun Nov 29</td><td>Gift guide email and Cyber Monday tease. Cyber Monday graphic to Miguel.</td><td><span class="ch">Email</span><span class="ch">Social</span></td></tr>
          <tr class="key"><td class="d">Mon Nov 30</td><td><b>Cyber Monday push.</b> Full list email and SMS, Miguel story, paid budget push.</td><td><span class="ch r">Email</span><span class="ch r">SMS</span><span class="ch r">Social</span><span class="ch r">Paid</span></td></tr>
          <tr><td class="d">Tue Dec 1</td><td>Last call. Sale ends at midnight PT.</td><td><span class="ch">Email</span><span class="ch">SMS</span><span class="ch">Paid</span></td></tr>
          <tr><td class="d">Fri Dec 4</td><td>Sale recap with revenue by channel, new sign-ups, waitlist size and what carries into the holiday push.</td><td><span class="ch">Report</span></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="needs">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>Team Checklist</h2>
      <p class="desc">Everything else the plan depends on, with an owner and a date. Miguel's items sit in his own list above. Tick items off as they land.</p>
    </div>
    <div class="tablewrap">
      <table class="cal needs">
        <thead><tr><th>Item</th><th>Owner</th><th>By</th><th>Done</th></tr></thead>
        <tbody>
          <tr><td><b>All products loaded</b> into the password-protected collection, archival merch priced at 30% off</td><td class="o">Tommy</td><td class="d">Nov 23</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Layered Black Friday file</b> with fonts, one square Black Friday asset, and product shots for the Wildheart Baja Hoodie, Script Logo Tee and catalog vinyl box set</td><td class="o">Sophie, Christian</td><td class="d">Nov 23</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Miguel's sign-off</b> on the box set waitlist approach</td><td class="o">Sophie, Bruce</td><td class="d">Nov 23</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Sign-up graphic and all sale creative</b> in every size, back for approval</td><td class="o">CCD</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Notify-me waitlist</b> on both box set pages, with the not-before-Christmas line in bold</td><td class="o">Tommy</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Sale copy sheet</b> to Miguel: sign-up post, password send, Black Friday, follow-ups, Cyber Monday, last call</td><td class="o">CCD</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Livestream and newsletter language</b> finalized with Miguel's team</td><td class="o">Sophie</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Catalog vinyl box set pricing:</b> costs resent, price set</td><td class="o">Libby, Mitch, Bruce</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>UPCs</b> for the catalog and CAOS box sets</td><td class="o">Libby</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Flows live:</b> early access sign-up and password send, waitlist, abandoned checkout, browse, confirmation</td><td class="o">CCD</td><td class="d">Nov 24</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Meta:</b> pixel and conversions API on the store, product catalog connected, ads built and in review</td><td class="o">CCD, Tommy</td><td class="d">Nov 25</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Tech cover</b> during the livestream in case anything glitches when the collection turns on</td><td class="o">Tommy</td><td class="d">Nov 25</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>Catch-all sale page</b> as the shop homepage once the password comes down</td><td class="o">Tommy</td><td class="d">Nov 27</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
          <tr><td><b>New long-sleeve tee:</b> order the printer minimum and list it</td><td class="o">Sophie, Marika</td><td class="d">TBC</td><td><label class="chk"><input type="checkbox" /></label></td></tr>
        </tbody>
      </table>
    </div>
    <p class="note">Fulfillment: all non-box inventory ships from Oaklandish. The CAOS box set goes to Oaklandish once every piece arrives, then to Music Today for fulfillment.</p>
  </section>

  <section class="sec wrap" id="report">
    <div class="sec-head">
      <div class="row"><span class="num">08</span><span class="ln"></span></div>
      <h2>Measurement + Reporting</h2>
      <p class="desc">Every order is tagged at the source, so results can be tied to the action that produced them.</p>
    </div>
    <div class="method">
      <div class="mcard"><span class="s">Livestream</span><h4>Password window</h4><p>Orders placed while the collection is gated count as the <b>livestream and early access</b> result.</p></div>
      <div class="mcard"><span class="s">Email</span><h4>Tracked links per send</h4><p>Each send has its own link tags, so revenue is reported <b>per email</b>, not as a lump.</p></div>
      <div class="mcard"><span class="s">SMS</span><h4>Tracked links per text</h4><p>Reported apart from email, so we learn which channel this audience buys from.</p></div>
      <div class="mcard"><span class="s">Flows</span><h4>Recovered revenue</h4><p>Abandoned checkout and browse revenue reported as its <b>own line</b>, since it keeps running after the sale.</p></div>
      <div class="mcard"><span class="s">Paid</span><h4>Pixel plus tagged links</h4><p>Spend, revenue and return on ad spend daily, read against the 5x scale line and 3.3x break-even.</p></div>
      <div class="mcard"><span class="s">Reporting</span><h4>Live page plus daily read</h4><p>A report page from Black Friday, a short daily read through Dec 1, and a <b>full recap on Dec 4</b>.</p></div>
    </div>
    <div class="statstrip" style="margin-top:26px">
      <div class="stat"><div class="n">Revenue</div><span class="l">Total and by channel</span></div>
      <div class="stat"><div class="n">Orders + AOV</div><span class="l">Archival and full price</span></div>
      <div class="stat"><div class="n">ROAS</div><span class="l">Paid line, against 5x</span></div>
      <div class="stat"><div class="n r">Sign-ups</div><span class="l">Early access and box set waitlist</span></div>
    </div>
  </section>

  <section class="sec wrap" id="yearend">
    <div class="sec-head">
      <div class="row"><span class="num">09</span><span class="ln"></span></div>
      <h2>Through Year End</h2>
      <p class="desc">The same channels and the same tracking carry straight into December and set up the January single.</p>
    </div>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>When</th><th>Initiative</th><th>What we run</th></tr></thead>
        <tbody>
          <tr><td class="d">Dec 2–14</td><td><b>Holiday gifting</b></td><td>Gift guide email, the carrier-cutoff send by email and SMS, and paid retargeting if the sale clears 5x.</td></tr>
          <tr><td class="d">As news lands</td><td><b>Box set waitlist</b></td><td>Status updates by email and SMS, then first access in sign-up order when the sets are ready to ship.</td></tr>
          <tr><td class="d">Dec 18 (proposed)</td><td><b>Wildheart reissue</b></td><td>Pre-order and release-day emails to vinyl buyers and the waitlist, plus a release-day story from Miguel.</td></tr>
          <tr><td class="d">Weekly</td><td><b>S1C livestreams</b></td><td>Clips out within 48 hours, and a store link on every stream that has product to show.</td></tr>
          <tr><td class="d">TBC</td><td><b>Mexico show fan campaign</b></td><td>Fans upload videos and Miguel picks the top three, run through a fan-content partner.</td></tr>
          <tr><td class="d">From January</td><td><b>Always-on merch</b></td><td>If the sale clears 5x, a standing daily merch budget year-round, so the shop sells between tours and drops rather than only around them.</td></tr>
          <tr><td class="d">Before the single</td><td><b>Have You Heard setup</b></td><td>Pre-save and sign-up capture live before the announce, so new fans from the single are counted from the first day.</td></tr>
        </tbody>
      </table>
    </div>

    <div class="cta">
      <div><div class="mono" style="margin-bottom:14px">Next step</div><h2>TALK TO US</h2></div>
      <div style="text-align:right"><a class="btn" href="mailto:hello@crowdcontroldigital.com?subject=Miguel%20Black%20Friday%20Plan">Email Us</a><span class="mail">hello@crowdcontroldigital.com</span></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Historical figures come from Miguel's 2026 digital report and CCD campaign data. Product details, quantities, prices and dates are confirmed with the S1C team, the label and the merch partner before launch. Return-on-ad-spend scenarios are illustrative.</p>
  </footer>
</div>

<script>
(function(){
  var PASS="CAOS";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);try{sessionStorage.setItem('ccd-miguel-bf','1');}catch(e){}}
  try{if(sessionStorage.getItem('ccd-miguel-bf')==='1'){unlock();}}catch(e){}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});

  var notes={
    "1":"No markdowns anywhere. The gift ladder and first access carry the value, which keeps Black Friday consistent with how S1C drops have been framed.",
    "2":"Discount depth on merch gets set against landed cost per SKU once we have it from the merch partner. On stock that is already paid for, recovering cash matters more than holding margin.",
    "3":"A site-wide 20% cuts into a 30% margin hard, so paid break-even rises with it. Best used only if clearing stock fast is the priority."
  };
  var opts=document.querySelectorAll('.opt'), note=document.getElementById('optnote');
  opts.forEach(function(b){b.addEventListener('click',function(){
    opts.forEach(function(x){x.classList.remove('sel');x.querySelector('.pick').textContent='Select';});
    b.classList.add('sel');b.querySelector('.pick').textContent='Selected';note.textContent=notes[b.getAttribute('data-o')];
  });});

  function money(n){var s=Math.round(Math.abs(n)).toLocaleString('en-US');return (n<0?'-$':'$')+s;}
  var sS=document.getElementById('sSpend'), sR=document.getElementById('sRoas'), sM=document.getElementById('sMargin');
  function calc(){
    var sp=+sS.value, ro=+sR.value, m=+sM.value/100;
    var rev=sp*ro, gp=rev*m, net=gp-sp, be=1/m;
    document.getElementById('vSpend').textContent=money(sp);
    document.getElementById('vRoas').textContent=ro.toFixed(1)+'x';
    document.getElementById('vMargin').textContent=Math.round(m*100)+'%';
    document.getElementById('oRev').textContent=money(rev);
    document.getElementById('oGp').textContent=money(gp);
    document.getElementById('oNet').textContent=money(net);
    document.getElementById('oBe').textContent=be.toFixed(1)+'x';
    document.getElementById('coNet').classList.toggle('neg',net<0);
    var v=document.getElementById('verdict');
    if(ro>=5){v.textContent='At 5x or better, the budget keeps rising.';}
    else if(ro>=be){v.textContent='Profitable. Hold spend and move budget to the best ads.';}
    else{v.textContent='Below break-even. Pause prospecting and let owned channels carry the sale.';}
  }
  [sS,sR,sM].forEach(function(el){el.addEventListener('input',calc);});calc();

  document.querySelectorAll('.mg-c input').forEach(function(c,i){
    var k='ccd-miguel-bf2-mg-'+i, row=c.closest('.mg-row');
    try{if(localStorage.getItem(k)==='1'){c.checked=true;row.classList.add('done');}}catch(e){}
    c.addEventListener('change',function(){row.classList.toggle('done',c.checked);try{localStorage.setItem(k,c.checked?'1':'0');}catch(e){}});
  });
  document.querySelectorAll('.needs input[type=checkbox]').forEach(function(c,i){
    var k='ccd-miguel-bf2-need-'+i;
    try{if(localStorage.getItem(k)==='1'){c.checked=true;c.closest('tr').classList.add('done');}}catch(e){}
    c.addEventListener('change',function(){c.closest('tr').classList.toggle('done',c.checked);try{localStorage.setItem(k,c.checked?'1':'0');}catch(e){}});
  });
})();
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
