export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Morgan St Jean Never Ending Holiday Paid Plan | Crowd Control Digital</title>
<meta name="description" content="Paid media plan for Morgan St Jean's holiday single Never Ending Holiday, out November 20." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="Morgan St Jean Never Ending Holiday Paid Plan" />
<meta property="og:description" content="Prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://proposal.crowdcontroldigital.com/morgan-st-jean-holiday" />
<meta property="og:image" content="https://proposal.crowdcontroldigital.com/images/morgan-st-jean-holiday/og.jpg" />
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
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>
<div class="gate" id="gate">
  <div class="gate-row"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">MORGAN ST JEAN</div>
    <div class="bar"></div>
    <p class="gate-sub">Never Ending Holiday paid plan, prepared for Independent by Crowd Control Digital. Enter the password to continue.</p>
    <form class="gate-form" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="gate-err mono" id="gateErr">Incorrect password</div>
  </div>
  <div class="gate-foot">
    <div><div class="mono dim">Partnership</div><div class="fv">Independent x Crowd Control Digital</div></div>
    <div class="r"><div class="mono dim">Prepared By</div><div class="fv">Crowd Control Digital</div></div>
  </div>
</div>
<div class="shell">
  <section class="cover" id="top">
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">November 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">MORGAN ST JEAN<span class="sm">NEVER ENDING HOLIDAY PAID PLAN</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">A light start on release week, then spend that climbs every week into Christmas, when holiday listening is at its highest.</p>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">Release</div><div class="cv">Friday, November 20</div></div>
      <div><div class="mono dim">Flight</div><div class="cv">November 17 to December 25</div></div>
    </div>
  </section>
  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Morgan St Jean / Never Ending Holiday</a>
      <div class="nb-jump"><a href="#curve">Spend Curve</a><a href="#channels">Channels</a><a href="#flight">Weekly Flight</a><a href="#creative">Creative</a><a href="#needs">Needs</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>The plan at a glance</h2>
    <p class="lead">A holiday song has a hard expiry date, so the money follows the calendar. <b>Release week gets just enough to land the song</b> and feed Release Radar and the algorithm. From Thanksgiving, spend steps up every week, and <b>more than three quarters of the budget runs after December 1</b>, when people are actively building and playing holiday playlists.</p>
    <div class="react-momentum" style="margin-top:8px">
      <div class="rm"><div class="rn">$3,000</div><span class="rl">Total paid media budget</span></div>
      <div class="rm"><div class="rn">77%</div><span class="rl">Of spend runs from December 1</span></div>
      <div class="rm"><div class="rn">5 WEEKS</div><span class="rl">Kickoff this week through Christmas Day</span></div>
      <div class="rm"><div class="rn">DEC 25</div><span class="rl">Final day of spend, everything off December 26</span></div>
    </div>
  </section>

  <section class="sec wrap" id="curve">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>Spend Curve</h2>
      <p class="desc">Weekly spend across the flight. The final stretch carries the most money, because that is when holiday music gets played the most.</p>
    </div>
    <div class="curve">
      <div class="cb"><div class="amt">$250</div><div class="col" style="height:22%"></div></div>
      <div class="cb"><div class="amt">$450</div><div class="col" style="height:39%"></div></div>
      <div class="cb"><div class="amt">$550</div><div class="col" style="height:48%"></div></div>
      <div class="cb"><div class="amt">$600</div><div class="col" style="height:52%"></div></div>
      <div class="cb pk"><div class="amt accent">$1,150</div><div class="col" style="height:100%"></div></div>
    </div>
    <div class="curve-l">
      <div><b>Nov 17–23</b>Release week</div>
      <div><b>Nov 24–30</b>Thanksgiving</div>
      <div><b>Dec 1–7</b>Build</div>
      <div><b>Dec 8–14</b>Build</div>
      <div><b>Dec 15–25</b>Peak</div>
    </div>
  </section>

  <section class="sec wrap" id="channels">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>Budget By Channel</h2>
      <p class="desc">Four channels plus a small reserve. Every ad points to a single smart link, so streams can be traced back to the channel that drove them.</p>
    </div>
    <div class="tablewrap">
      <table class="cal lgr">
        <thead><tr><th>Channel</th><th class="n">Budget</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td class="c">Meta<span class="why">Instagram and Facebook Reels</span></td><td class="n">$1,500</td><td>The main driver. Warm audiences first: Morgan's engagers, past streamers and lookalikes of both. From December 1 we add cold holiday-pop audiences, built from fans of current holiday releases by her peers.</td></tr>
          <tr><td class="c">TikTok Spark Ads</td><td class="n">$700</td><td>We put spend behind Morgan's own posts of the song rather than ads made only for paid. That keeps the ads native and the engagement on her profile, and we move budget toward the posts that pick up organically.</td></tr>
          <tr><td class="c">YouTube</td><td class="n">$400</td><td>An in-feed visualizer or lyric video, plus holiday music search. This runs at a steady level from Thanksgiving to Christmas.</td></tr>
          <tr><td class="c">Spotify Showcase</td><td class="n">$250</td><td>A recommendation on the Spotify home feed, aimed at her existing listeners in the peak window, when holiday listening is at its highest.</td></tr>
          <tr><td class="c">Reserve</td><td class="n">$150</td><td>Held back and released in the peak window into whichever channel is producing the cheapest streams.</td></tr>
          <tr class="tot"><td class="c">Total</td><td class="n">$3,000</td><td></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="flight">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>Weekly Flight</h2>
      <p class="desc">What runs each week and why. We review every Friday and shift money toward what is working, but the weekly totals hold.</p>
    </div>
    <div class="tablewrap">
      <table class="cal">
        <thead><tr><th>Week</th><th class="n">Meta</th><th class="n">TikTok</th><th class="n">YouTube</th><th class="n">Showcase</th><th class="n">Reserve</th><th class="n">Total</th><th>Focus</th></tr></thead>
        <tbody>
          <tr class="key"><td class="d">Nov 17–23</td><td class="n">$150</td><td class="n">$100</td><td class="n"></td><td class="n"></td><td class="n"></td><td class="n">$250</td><td><b>Release week.</b> A teaser to warm audiences Wednesday and Thursday, then the switch to the live track on Friday.</td></tr>
          <tr><td class="d">Nov 24–30</td><td class="n">$250</td><td class="n">$100</td><td class="n">$100</td><td class="n"></td><td class="n"></td><td class="n">$450</td><td><b>Thanksgiving.</b> Holiday listening starts the day after. YouTube goes live and Meta adds a second creative.</td></tr>
          <tr><td class="d">Dec 1–7</td><td class="n">$300</td><td class="n">$150</td><td class="n">$100</td><td class="n"></td><td class="n"></td><td class="n">$550</td><td><b>Build.</b> Cold holiday-pop audiences open on Meta. TikTok budget moves to the posts winning organically.</td></tr>
          <tr><td class="d">Dec 8–14</td><td class="n">$350</td><td class="n">$150</td><td class="n">$100</td><td class="n"></td><td class="n"></td><td class="n">$600</td><td><b>Build.</b> Creative is refreshed on whatever is fatiguing, and the winners from the first three weeks are locked in.</td></tr>
          <tr class="key"><td class="d">Dec 15–25</td><td class="n">$450</td><td class="n">$200</td><td class="n">$100</td><td class="n">$250</td><td class="n">$150</td><td class="n">$1,150</td><td><b>Peak.</b> Spotify Showcase goes live, the reserve goes to the best channel, and spend runs through Christmas Day.</td></tr>
          <tr class="tot"><td class="d">Total</td><td class="n">$1,500</td><td class="n">$700</td><td class="n">$400</td><td class="n">$250</td><td class="n">$150</td><td class="n">$3,000</td><td></td></tr>
        </tbody>
      </table>
    </div>
    <p class="note">Every campaign and ad set is named by artist and track, so spend reports cleanly against Never Ending Holiday.</p>
  </section>

  <section class="sec wrap" id="creative">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Creative</h2>
      <p class="desc">A small set of short videos from Morgan carries the whole flight. They work on TikTok as posts and on Meta as ads.</p>
    </div>
    <div class="gates" style="margin-top:0">
      <div class="gt"><span class="k">Clip 1</span><h4>The hook, performed</h4><p>Morgan singing the hook in a real holiday setting. Shot on a phone, vertical, <b>under 15 seconds</b>.</p></div>
      <div class="gt"><span class="k">Clip 2</span><h4>Lyric on screen</h4><p>The strongest line of the song as on-screen text over a simple holiday visual. This is the cold-audience workhorse.</p></div>
      <div class="gt"><span class="k">Clip 3</span><h4>A casual post</h4><p>Morgan talking to camera about the song, or a candid moment with it playing. It reads as organic, and it is usually the cheapest to run.</p></div>
    </div>
    <div class="gates">
      <div class="gt"><span class="k">YouTube</span><h4>Visualizer</h4><p>An animated version of the cover art, or a simple lyric video, uploaded to her channel.</p></div>
      <div class="gt"><span class="k">Refresh</span><h4>Two more clips by Dec 8</h4><p>A second batch for the build and peak weeks, so the final stretch is not running on tired creative.</p></div>
      <div class="gt"><span class="k">Specs</span><h4>9:16, with 1:1 cuts</h4><p>Vertical for Reels, TikTok and Shorts, with square cuts for Meta feed placements.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="needs">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>What We Need This Week</h2>
      <p class="desc">To start spend on Wednesday, November 18.</p>
    </div>
    <div class="tablewrap">
      <table class="cal needs">
        <thead><tr><th>Item</th><th>From</th><th>Done</th></tr></thead>
        <tbody>
          <tr><td><b>3–5 vertical clips</b> of the song from Morgan</td><td class="o">Morgan</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Smart link</b> for Never Ending Holiday</td><td class="o">Independent</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Ad account</b> to run Meta and TikTok from, with access for Crowd Control</td><td class="o">Independent</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>TikTok Spark codes</b> for Morgan's posts of the song</td><td class="o">Morgan</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Cover art</b> files for the YouTube visualizer</td><td class="o">Independent</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Holiday playlist pitching</b> included in the DSP pitch</td><td class="o">Independent</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
          <tr><td><b>Any other paid activity</b> on Morgan's catalog, so audiences and reporting stay separate</td><td class="o">Independent</td><td><label class="chk"><input type="checkbox" />Done</label></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="wrap">
    <div class="cta">
      <h2>Talk To Us</h2>
      <div><a class="btn" href="mailto:hello@crowdcontroldigital.com?subject=Morgan%20St%20Jean%20Never%20Ending%20Holiday">Email Crowd Control</a><span class="mail">hello@crowdcontroldigital.com</span></div>
    </div>
  </section>
  <footer class="wrap"><p class="fn">Prepared for Independent by Crowd Control Digital, November 2026.</p></footer>
</div>
<script>
(function(){
  var PASS="HOLIDAY";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);try{sessionStorage.setItem('ccd-msj-holiday','1');}catch(e){}}
  try{if(sessionStorage.getItem('ccd-msj-holiday')==='1'){unlock();}}catch(e){}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});
  document.querySelectorAll('.needs input[type=checkbox]').forEach(function(c,i){
    var k='ccd-msj-holiday-need-'+i;
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
