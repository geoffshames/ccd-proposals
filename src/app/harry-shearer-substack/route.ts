export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Harry Shearer Substack Growth Plan | Crowd Control Digital</title>
<meta name="description" content="Substack growth plan for Harry Shearer, prepared by Crowd Control Digital." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Harry Shearer Substack Growth Plan" />
<meta property="og:description" content="Prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://proposal.crowdcontroldigital.com/harry-shearer-substack" />
<meta property="og:image" content="https://proposal.crowdcontroldigital.com/images/harry-shearer-substack/og.png" />
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
  .cover-hero::before{content:"";position:absolute;inset:0;filter:grayscale(.4) contrast(1.05) brightness(.92);opacity:.30;-webkit-mask-image:linear-gradient(90deg,transparent 0%,transparent 34%,rgba(0,0,0,.55) 64%,#000 100%);mask-image:linear-gradient(90deg,transparent 0%,transparent 34%,rgba(0,0,0,.55) 64%,#000 100%)}
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

  .curve{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;align-items:end;height:260px;border-bottom:1px solid var(--line-2);padding:0 4px}
  .cb{display:flex;flex-direction:column;justify-content:flex-end;height:100%}
  .cb .amt{font-family:var(--fh);font-size:1.35rem;margin-bottom:8px}
  .cb .col{background:linear-gradient(180deg,rgba(253,55,55,.95),rgba(253,55,55,.35));min-height:6px}
  .cb.pk .col{background:var(--accent)}
  .curve-l{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;padding:12px 4px 0}
  .curve-l div{font-family:var(--fm);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--secondary);line-height:1.5}
  .curve-l div b{display:block;color:var(--ink);font-weight:500}
  @media(max-width:600px){.cb .amt{font-size:1rem}.curve{gap:6px}.curve-l{gap:6px}.curve-l div{font-size:8.5px}}
  table.cal td.n{text-align:right;font-family:var(--fm);font-size:12.5px;color:var(--ink);white-space:nowrap}
  table.cal th.n{text-align:right}
  table.cal tr.tot td{border-top:1px solid var(--line-2);color:var(--ink);font-weight:600}
  table.cal td .why{display:block;color:var(--muted);font-size:13.5px;margin-top:4px;line-height:1.5;font-weight:400}
  .lgr td.c{color:var(--ink);font-weight:600;min-width:170px}
  .gate-title{font-size:clamp(3rem,10vw,8rem)}
  .opt ul{flex:0 0 auto}
  .cover-foot .cv{max-width:380px}
</style>
</head>
<body>
<div class="tex"></div><div class="glow"></div>
<div class="shell" style="opacity:1">
  <section class="cover" id="top">
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">November 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">HARRY SHEARER<span class="sm">SUBSTACK GROWTH PLAN</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">Le Show has spent more than forty years proving the bits work. This plan gives them a home Harry owns, a look that matches the writing, and a way to reach people who have never heard the show.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">Prepared For</div><div class="cv">Harry Shearer and Spivak Management</div></div>
      <div><div class="mono dim">Engagement</div><div class="cv">Monthly retainer, 3-month initial term</div></div>
    </div>
  </section>
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Harry Shearer / Substack</a>
      <div class="nb-jump"><a href="#found">Findings</a><a href="#plan">Plan</a><a href="#shallowfakes">Shallowfakes</a><a href="#tiers">Tiers</a><a href="#paid">Paid</a><a href="#start">First 30 Days</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>The plan at a glance</h2>
    <p class="lead">Harry already makes a week of satire every week. The Substack becomes the <b>one place all of it lives</b>: the writing, the Shallowfakes, and the best moments from Le Show. Crowd Control produces the video, cuts every piece for short-form platforms, and points all of it back to the Substack so the audience Harry builds is one he owns.</p>
    <div class="react-momentum" style="margin-top:8px">
      <div class="rm"><div class="rn">1983</div><span class="rl">Le Show on the air since, with recurring segments ready to adapt</span></div>
      <div class="rm"><div class="rn">1,000+</div><span class="rl">Substack subscribers before the first post</span></div>
      <div class="rm"><div class="rn">618K+</div><span class="rl">The Borowitz Report on Substack, the model for independent satire</span></div>
      <div class="rm"><div class="rn">$5,000</div><span class="rl">Recommended Growth tier, per month</span></div>
    </div>
  </section>

  <section class="sec wrap" id="found">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>What We Found</h2>
      <p class="desc">Where the Substack, the video and the audience stand today.</p>
    </div>
    <div class="ev-grid">
      <div class="ev"><span class="evl">The Substack</span><h4>An audience is waiting on an empty page</h4><p>The Substack has more than 1,000 subscribers and a single Coming Soon post. <b>Those subscribers signed up for Harry by name.</b> The first job is to give them a reason to open every week and a reason to forward it.</p></div>
      <div class="ev"><span class="evl">The Content Engine</span><h4>Le Show is already a weekly calendar</h4><p>Truth Social Audio, News of A.I., News of Musk Love, The Apologies of the Week. <b>These are recurring formats with years of proof behind them</b>, and each one translates directly to a written post, a video, or both.</p></div>
      <div class="ev"><span class="evl">The Asset</span><h4>The voice is the performance</h4><p>Mr. Burns, Ned Flanders, Derek Smalls, a Nixon that people still quote. Very few satirists can voice the people they are satirizing. <b>The video should be built around Harry's recorded performance</b>, with the visuals there to carry it, never to replace it.</p></div>
      <div class="ev"><span class="evl">The Gap</span><h4>The video is not reaching new people yet</h4><p>The early Shallowfakes uploads are drawing likes in the single digits on YouTube, posted as standalone videos without short-form cuts. <b>The audience for political satire now finds it on TikTok, Reels, Shorts and X</b>, then follows it home to a newsletter.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="plan">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>The Plan</h2>
      <p class="desc">Five workstreams that run together every week.</p>
    </div>
    <div class="principles" style="margin-top:0">
      <div class="pr"><span class="pn">Workstream 1</span><h4>The Substack as home base</h4><p>Design, about page, welcome email and a fixed weekly rhythm: <b>a free written dispatch built on Le Show segments, a midweek Shallowfake video post, and short Notes in between.</b> Most posts stay free so they travel. A paid tier opens once the free list has momentum, with the archive, bonus voices and live sessions behind it.</p></div>
      <div class="pr"><span class="pn">Workstream 2</span><h4>Shallowfakes, produced by Crowd Control</h4><p>Harry writes and records. Crowd Control builds the picture on the current generation of video models, then handles lip sync, compositing, edit, captions and sound. <b>Every piece goes to Harry for approval before anything publishes.</b></p></div>
      <div class="pr"><span class="pn">Workstream 3</span><h4>Short-form distribution</h4><p>Every Shallowfake and every strong Le Show moment is cut to vertical for TikTok, Instagram Reels, YouTube Shorts and X. <b>Each post ends by pointing to the Substack</b>, so views turn into subscribers.</p></div>
      <div class="pr"><span class="pn">Workstream 4</span><h4>The Substack network</h4><p>Substack grows writers through other writers. We set up recommendation swaps, guest pieces and joint live sessions with satire, politics and comedy writers whose readers fit Harry's, <b>which is the fastest free growth channel the platform has.</b></p></div>
      <div class="pr"><span class="pn">Workstream 5</span><h4>Trial Reels arbitrage</h4><p>Instagram Trial Reels show a clip to people who do not follow the account, and every trial reaches a fresh audience. We run each Shallowfake and Le Show clip through Trial Reels many times, <b>changing the opening hook, caption and on-screen text on each pass</b>, so one piece of video earns repeated rounds of new reach instead of one. The same approach runs on TikTok. The hooks that win go to the main feed, and into paid if the add-on is active.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="shallowfakes">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Shallowfakes Production</h2>
      <p class="desc">How a piece goes from Harry's script to every platform, usually inside 48 hours.</p>
    </div>
    <div class="flow">
      <div class="fl"><div class="fh"><h4>1. Script and record</h4><span class="tg w">Harry</span></div><p>Harry writes the bit and records the voices, the same way he does for Le Show. <b>His audio is the master</b> and nothing replaces it.</p></div>
      <div class="fl"><div class="fh"><h4>2. Build the picture</h4><span class="tg">Crowd Control</span></div><p>We generate and composite the visuals on higher-end video models, match the mouth to Harry's read, and grade the shots so they hold up next to real footage.</p></div>
      <div class="fl"><div class="fh"><h4>3. Edit and package</h4><span class="tg">Crowd Control</span></div><p>Edit, captions, sound design and a consistent Shallowfakes title card, delivered as a full-length cut for the Substack and vertical cuts for each platform.</p></div>
      <div class="fl"><div class="fh"><h4>4. Approve</h4><span class="tg w">Harry</span></div><p>Harry signs off on every piece. <b>Nothing goes live without his approval.</b></p></div>
      <div class="fl"><div class="fh"><h4>5. Substack first</h4><span class="tg">Crowd Control</span></div><p>The full piece publishes on the Substack with a short written setup, so subscribers see it first and it lives in Harry's archive.</p></div>
      <div class="fl"><div class="fh"><h4>6. Cut down and post</h4><span class="tg">Crowd Control</span></div><p>Vertical cuts go to each platform over the next few days, timed to that platform's peak hours, with the Substack link on every post.</p></div>
    </div>
    <div class="finding" style="margin-top:22px"><p><b>Labeled satire, every time.</b> Each piece carries an on-screen Shallowfakes mark and the AI disclosure labels that YouTube, TikTok and Meta ask for on realistic generated video. The joke lands harder when nobody is confused about what they are watching, and it keeps every account in good standing.</p></div>
  </section>

  <section class="sec wrap" id="tiers">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Tiers</h2>
      <p class="desc">Three monthly levels, all with Crowd Control producing the video. Select a tier to approve it. 3-month initial term, billed monthly.</p>
    </div>
    <div class="opts" id="opts">
      <button class="opt" data-tier="Starter" data-price="$3,000">
        <div class="ol"><span class="mono">Starter</span></div>
        <h4>$3,000 / month</h4>
        <p>A steady weekly presence with a full Substack setup.</p>
        <ul>
          <li>2 Shallowfakes per week, about 8 per month</li>
          <li>Substack design, about page and welcome email</li>
          <li>Vertical cuts to TikTok, Reels, Shorts and X</li>
          <li>Trial Reels on every clip</li>
          <li>Substack link and post copy on every piece</li>
          <li>Monthly performance report</li>
        </ul>
        <span class="pick">Select Starter</span>
      </button>
      <button class="opt sel" data-tier="Growth" data-price="$5,000">
        <div class="ol"><span class="mono">Growth</span><span class="rec">Recommended</span></div>
        <h4>$5,000 / month</h4>
        <p>Everything in Starter, at the volume and reach that grows a list.</p>
        <ul>
          <li>4 Shallowfakes per week, about 16 per month</li>
          <li>2 Le Show segment clips per week from the broadcast audio</li>
          <li>Trial Reels arbitrage with multiple hook variants per clip</li>
          <li>Weekly written dispatch formatted and scheduled</li>
          <li>Substack Notes several times a week</li>
          <li>Recommendation swaps and collab outreach</li>
          <li>Comment and community management</li>
          <li>Report every two weeks</li>
        </ul>
        <span class="pick">Selected</span>
      </button>
      <button class="opt" data-tier="Full" data-price="$8,000">
        <div class="ol"><span class="mono">Full</span></div>
        <h4>$8,000 / month</h4>
        <p>Everything in Growth, plus the paid tier and a weekly long-form show.</p>
        <ul>
          <li>5 Shallowfakes per week, about 20 per month</li>
          <li>Weekly long-form video edition for YouTube and the Substack</li>
          <li>Trial Reels arbitrage at full volume, with hook testing reported weekly</li>
          <li>Paid tier launch, pricing and ongoing management</li>
          <li>Monthly Substack live session, produced and promoted</li>
          <li>24-hour turnaround on news-driven pieces</li>
          <li>Weekly report and strategy call</li>
        </ul>
        <span class="pick">Select Full</span>
      </button>
    </div>
    <div class="cta" style="margin-top:28px;padding-top:28px">
      <div><div class="mono dim">Selected</div><div class="cv" id="selLabel" style="font-family:var(--fh);font-size:1.6rem;text-transform:uppercase;margin-top:6px">Growth, $5,000 / month</div></div>
      <div><a class="btn" id="approveBtn" href="#">Approve Growth</a><span class="mail">Approval goes to hello@crowdcontroldigital.com</span></div>
    </div>
    <p class="note">Fees cover strategy, production, editing, distribution and management. Video generation costs are included up to the volume in each tier.</p>
  </section>

  <section class="sec wrap" id="paid">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Paid Promotion Add-On</h2>
      <p class="desc">Optional, and available with any tier. Organic growth carries the plan; paid speeds up the pieces that are already working.</p>
    </div>
    <div class="tablewrap">
      <table class="cal lgr">
        <thead><tr><th>Channel</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td class="c">Meta<span class="why">Instagram and Facebook</span></td><td>The main paid channel. We put spend behind the Shallowfakes and Le Show clips that are already outperforming organically, aimed at readers of political satire and fans of Harry's work, and send them to a Substack signup.</td></tr>
          <tr><td class="c">YouTube</td><td>In-feed promotion of the long-form edition and the strongest Shorts, to grow the channel alongside the list.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="gates">
      <div class="gt"><span class="k">Budget</span><h4>$1,500 to $3,000 a month to start</h4><p>Ad spend is billed to the platforms, <b>plus a 15% management fee</b>. We scale only once the cost per subscriber is proven.</p></div>
      <div class="gt"><span class="k">Setup</span><h4>Political ad authorization</h4><p>Meta requires anyone running ads about social issues or politics to verify their identity and run a <b>Paid for by</b> disclaimer. Harry completes the verification once, and we handle everything after it.</p></div>
      <div class="gt"><span class="k">Platform Rules</span><h4>TikTok stays organic</h4><p>TikTok does not accept political ads, so TikTok growth comes entirely from posting, which the core plan already covers.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="targets">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>What We Measure</h2>
      <p class="desc">Directional targets for the first 90 days on the Growth tier. These guide the work and the reporting; they are not guarantees.</p>
    </div>
    <div class="statstrip">
      <div class="stat"><div class="n r">5X</div><span class="l">Free subscribers by day 90</span></div>
      <div class="stat"><div class="n">100K</div><span class="l">Views on the best Shallowfake each month</span></div>
      <div class="stat"><div class="n">45%+</div><span class="l">Email open rate held through growth</span></div>
      <div class="stat"><div class="n">10</div><span class="l">Recommendation partners on Substack</span></div>
    </div>
  </section>

  <section class="sec wrap" id="start">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>First 30 Days</h2>
      <p class="desc">From approval to a full weekly rhythm.</p>
    </div>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>Week</th><th>Focus</th></tr></thead>
        <tbody>
          <tr class="key"><td class="d">Week 1</td><td><b>Setup.</b> Substack design, about page and welcome email. Shallowfakes title card and visual style agreed with Harry. Account access across platforms.</td></tr>
          <tr><td class="d">Week 2</td><td><b>Launch.</b> First written dispatch and first produced Shallowfake go out to the existing subscribers. Short-form accounts begin posting.</td></tr>
          <tr><td class="d">Week 3</td><td><b>Rhythm.</b> Full weekly volume for the selected tier. Le Show segment clips start. Recommendation outreach begins.</td></tr>
          <tr class="key"><td class="d">Week 4</td><td><b>Read and adjust.</b> First report. We double down on the formats and platforms bringing in subscribers, and set the plan for month two.</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="needs">
    <div class="sec-head">
      <div class="row"><span class="num">08</span><span class="ln"></span></div>
      <h2>What We Need</h2>
      <p class="desc">To start production in week one.</p>
    </div>
    <div class="tablewrap">
      <table class="cal needs">
        <thead><tr><th>Item</th><th>From</th><th>Done</th></tr></thead>
        <tbody>
          <tr><td><b>Substack access</b> for Crowd Control as an admin or editor</td><td class="o">Harry</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Social account access</b> for YouTube, Instagram, Facebook, X and TikTok, or approval to open new ones</td><td class="o">Harry</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Recorded audio</b> for the first two Shallowfakes, with scripts</td><td class="o">Harry</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Le Show audio</b> files, and confirmation that segments can be clipped for social</td><td class="o">Harry</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Approval contact</b> and the fastest way to get sign-off on a piece</td><td class="o">Spivak Management</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Paid add-on decision</b> and, if yes, Meta political ad verification</td><td class="o">Harry</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="about">
    <div class="sec-head">
      <div class="row"><span class="num">09</span><span class="ln"></span></div>
      <h2>About Crowd Control</h2>
      <p class="desc">Crowd Control Digital is a Los Angeles agency working across entertainment, music, comedy and brands, with more than 20 active clients.</p>
    </div>
    <div class="slate" style="margin-top:0">
      <div class="slate-grid">
        <div class="sl"><span class="k">Services</span><ul><li><b>Paid media</b> across Meta, Google, YouTube, TikTok and Spotify</li><li><b>Content production</b>, including AI video</li><li><b>Social strategy</b> and channel management</li><li><b>Brand strategy</b> and creative direction</li><li><b>Web design</b> and development</li><li><b>Email and SMS</b></li><li><b>Release, tour and event marketing</b></li></ul></div>
        <div class="sl"><span class="k">Select Clients</span><ul><li>Warner Bros</li><li>NBA</li><li>Golden State Warriors</li><li>Apple</li><li>Amazon</li><li>Beats By Dre</li><li>Porsche</li><li>Monster Energy</li></ul></div>
        <div class="sl"><span class="k">More Clients</span><ul><li>Live Nation</li><li>AEG</li><li>Insomniac Events</li><li>Edition Hotels</li><li>Foot Locker</li><li>Polymarket</li><li>Malbon Golf</li></ul></div>
      </div>
    </div>
  </section>

  <section class="wrap">
    <div class="cta">
      <h2>Talk To Us</h2>
      <div><a class="btn" href="mailto:hello@crowdcontroldigital.com?subject=Harry%20Shearer%20Substack">Email Crowd Control</a><span class="mail">hello@crowdcontroldigital.com</span></div>
    </div>
  </section>
  <footer class="wrap" style="margin-top:72px"><p class="fn">Prepared for Harry Shearer and Spivak Management by Crowd Control Digital, November 2026.</p></footer>
</div>
<script>
(function(){
  var STRIPE={};
  var opts=document.querySelectorAll('#opts .opt'), lab=document.getElementById('selLabel'), btn=document.getElementById('approveBtn');
  function setTier(o){
    opts.forEach(function(x){x.classList.remove('sel');var p=x.querySelector('.pick');p.textContent='Select '+x.dataset.tier;});
    o.classList.add('sel');o.querySelector('.pick').textContent='Selected';
    var t=o.dataset.tier, pr=o.dataset.price;
    lab.textContent=t+', '+pr+' / month';
    btn.textContent='Approve '+t;
    btn.href=STRIPE[t]||('mailto:hello@crowdcontroldigital.com?subject='+encodeURIComponent('Approved: Harry Shearer Substack, '+t+' tier')+'&body='+encodeURIComponent('Approving the '+t+' tier at '+pr+' per month, 3-month initial term.'));
    if(STRIPE[t]){btn.target='_blank';}else{btn.removeAttribute('target');}
  }
  opts.forEach(function(o){o.addEventListener('click',function(){setTier(o);});});
  setTier(document.querySelector('#opts .opt.sel'));
  document.querySelectorAll('.needs input[type=checkbox]').forEach(function(c,i){
    var k='ccd-shearer-need-'+i;
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
