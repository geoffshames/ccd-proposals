export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>KILLSHOT Launch Plan | Liza Soberano | Crowd Control Digital</title>
<meta name="description" content="The launch plan for Liza Soberano's KILLSHOT: the single, the music video and the film announcement as three connected moments." />
<meta name="robots" content="noindex, nofollow" />
<meta property="og:title" content="KILLSHOT: The Launch Plan" />
<meta property="og:description" content="Single, video, film: three moments, one story. Prepared by Crowd Control Digital." />
<meta property="og:type" content="website" />
<meta property="og:image" content="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/7eb5349c-3c57-4b12-af61-cf4da4ef65d3.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/7eb5349c-3c57-4b12-af61-cf4da4ef65d3.jpg" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  @font-face{ font-family:N27; src:url('/brand/N27-Bold.otf') format('opentype'); font-weight:700;font-style:normal;font-display:swap; }
  :root{
    --bg:#0A0A0A; --card:#1A1A1A; --card-2:#141414;
    --accent:#FD3737; --accent-dim:rgba(253,55,55,.10);
    --ink:#FAFAFA; --secondary:#777; --muted:rgba(255,255,255,.58);
    --line:#1e1e1e; --line-2:#2a2a2a; --line-hover:#333;
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
  .tex,.glow{position:fixed;inset:0;pointer-events:none;z-index:0}
  .tex{background-image:linear-gradient(rgba(51,51,51,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(51,51,51,.08) 1px,transparent 1px);background-size:80px 80px}
  .glow{background:radial-gradient(120% 75% at 50% -8%, rgba(253,55,55,.10), transparent 58%)}
  .mono{font-family:var(--fm);text-transform:uppercase;letter-spacing:.22em;font-size:11px;color:var(--muted)}
  .mono.dim{color:rgba(255,255,255,.42);font-size:10px}
  .bar{height:2px;width:64px;background:var(--accent)}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 28px}
  .cc-logo{height:22px;width:auto;display:block}
  .gate .cc-logo{height:26px}

  /* gate */
  .gate{position:fixed;inset:0;z-index:90;display:flex;flex-direction:column;justify-content:space-between;padding:40px clamp(20px,6vw,90px);background:var(--bg);transition:opacity .6s ease, visibility .6s ease}
  .gate.open{opacity:0;visibility:hidden}
  .gate-row{display:flex;justify-content:space-between;gap:12px}
  .gate-center{flex:1;display:flex;flex-direction:column;justify-content:center;max-width:860px}
  .gate-title{font-family:var(--fh);font-size:clamp(3rem,11vw,9rem);line-height:.9;letter-spacing:-.02em}
  .gate-center .bar{margin:26px 0 22px}
  .gate-sub{color:var(--muted);font-size:16px;margin:0 0 26px;max-width:540px}
  .gate-form{display:flex;gap:10px}
  .gate-form input{flex:1;max-width:260px;min-width:0;background:rgba(255,255,255,.04);border:1px solid var(--line-hover);color:var(--ink);padding:14px 18px;font-family:var(--fm);font-size:13px;letter-spacing:.28em;text-transform:uppercase;outline:none}
  .gate-form input:focus{border-color:var(--accent)}
  .gate-form button{background:var(--accent);color:#fff;border:0;padding:0 26px;font-family:var(--fm);font-size:12px;text-transform:uppercase;letter-spacing:.14em;cursor:pointer}
  .gate-err{height:16px;margin-top:14px;color:var(--accent);opacity:0;transition:opacity .2s}
  .gate-err.show{opacity:1}
  .gate-foot{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}
  .gate-foot .fv{font-size:14px;margin-top:6px}
  .gate-foot .r{text-align:right}
  .shell{position:relative;z-index:1;opacity:0;transition:opacity .8s ease}
  body.unlocked .shell{opacity:1}

  /* cover */
  .cover{position:relative;min-height:90vh;display:flex;flex-direction:column;justify-content:space-between;padding:72px clamp(20px,5vw,96px) 56px;max-width:1340px;margin:0 auto;overflow:hidden}
  .cover-hero{position:absolute;inset:0;z-index:0;pointer-events:none}
  .cover-hero::before{content:"";position:absolute;inset:0;background:url('https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/97fdc9ab-0fcc-4305-9313-83dc943f8383.jpg') right center/cover no-repeat;filter:grayscale(.25) contrast(1.05) brightness(.9);opacity:.34;-webkit-mask-image:linear-gradient(90deg,transparent 0%,transparent 30%,rgba(0,0,0,.6) 62%,#000 100%);mask-image:linear-gradient(90deg,transparent 0%,transparent 30%,rgba(0,0,0,.6) 62%,#000 100%)}
  .cover-hero::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,var(--bg) 0%,transparent 20%,transparent 60%,var(--bg) 100%)}
  .cover-top,.cover-mid,.cover-foot{position:relative;z-index:1}
  @media(max-width:700px){.cover-hero::before{opacity:.2}}
  .cover-top{display:flex;justify-content:space-between;gap:18px}
  .cover-mid{flex:1;display:flex;flex-direction:column;justify-content:center;padding:44px 0}
  .cover-title{font-family:var(--fh);font-size:clamp(3rem,11vw,9.5rem);line-height:.9;letter-spacing:-.02em}
  .cover-title .sm{display:block;font-size:clamp(1.05rem,2.8vw,2rem);color:var(--accent);letter-spacing:.02em;margin-top:12px}
  .cover-subwrap{margin-top:28px;max-width:820px}
  .cover-subwrap .bar{margin-bottom:22px}
  .cover-sub{font-family:var(--fh);text-transform:none;font-size:clamp(1.3rem,2.5vw,2rem);line-height:1.15;letter-spacing:-.01em;margin:0}
  .cover-foot{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:820px;margin-top:34px}
  .cover-foot .cv{font-size:15px;margin-top:7px}
  @media(max-width:600px){.cover-foot{grid-template-columns:1fr}}

  /* nav */
  .navbar{position:sticky;top:0;z-index:40;background:rgba(10,10,10,.88);backdrop-filter:blur(14px);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
  .navbar-in{max-width:var(--max);margin:0 auto;padding:12px 28px;display:flex;align-items:center;gap:18px}
  .nb-brand{font-family:var(--fh);text-transform:uppercase;letter-spacing:.02em;font-size:15px;white-space:nowrap}
  .nb-jump{display:flex;gap:16px;margin-left:auto;flex-wrap:wrap;justify-content:flex-end}
  .nb-jump a{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted)}
  .nb-jump a:hover{color:var(--accent)}
  @media(max-width:860px){.nb-jump{display:none}}

  /* context */
  .ctx{padding:56px 0 8px}
  .ctx h2{font-size:clamp(1.5rem,3vw,2.1rem);margin-bottom:14px}
  .lead{font-size:18px;max-width:860px;margin:0 0 26px}
  .lead b{color:var(--accent)}
  .ctx-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
  .ctx-card{background:var(--card-2);border:1px solid var(--line-2);padding:20px 20px 22px}
  .k{font-family:var(--fm);text-transform:uppercase;letter-spacing:.14em;font-size:10px;color:var(--accent)}
  .ctx-card p{margin:8px 0 0;color:var(--muted);font-size:14.5px;line-height:1.55}
  .ctx-card p b{color:var(--ink)}
  .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:28px}
  .st{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:15px 16px}
  .st .n{font-family:var(--fh);font-size:1.7rem;line-height:1}
  .st .l{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);margin-top:8px;display:block;line-height:1.45}
  @media(max-width:900px){.ctx-grid{grid-template-columns:1fr}.stats{grid-template-columns:repeat(2,1fr)}}

  /* section */
  .sec{padding:60px 0 8px}
  .sec-head{display:flex;flex-direction:column;gap:8px;margin-bottom:26px}
  .sec-head .row{display:flex;align-items:center;gap:16px}
  .sec-head .num{font-family:var(--fm);font-size:13px;color:var(--accent);letter-spacing:.14em}
  .sec-head .ln{flex:1;height:1px;background:var(--line-2)}
  .sec-head h2{font-size:clamp(1.7rem,3.4vw,2.4rem)}
  .sec-head .desc{color:var(--muted);font-size:15.5px;max-width:840px;margin:4px 0 0}
  .finding{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px;margin:0 0 26px;max-width:920px}
  .finding p{margin:0;font-size:16px;line-height:1.55}
  .finding p b{color:var(--accent)}

  /* phases */
  .phases{display:grid;gap:14px}
  .phase{display:grid;grid-template-columns:230px 1fr;background:var(--card);border:1px solid var(--line-2);transition:border-color .3s}
  .phase:hover{border-color:rgba(253,55,55,.45)}
  .ph-l{padding:22px;border-right:1px solid var(--line-2);background:var(--card-2)}
  .ph-l .pn{font-family:var(--fm);font-size:11px;letter-spacing:.14em;color:var(--accent)}
  .ph-l h3{font-size:1.5rem;margin:8px 0 8px}
  .ph-l .when{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink)}
  .ph-l .goal{color:var(--muted);font-size:13.5px;margin:12px 0 0;line-height:1.5}
  .ph-r{padding:20px 22px}
  .ph-r ul{list-style:none;margin:0;padding:0;display:grid;gap:11px}
  .ph-r li{display:grid;grid-template-columns:86px 1fr;gap:14px;align-items:start;font-size:14.5px;color:var(--muted);line-height:1.52}
  .ph-r li b{color:var(--ink)}
  .lane{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:4px 7px;border:1px solid var(--line-hover);color:var(--ink);text-align:center;margin-top:2px}
  .lane.red{color:var(--accent);border-color:rgba(253,55,55,.45);background:var(--accent-dim)}
  @media(max-width:820px){.phase{grid-template-columns:1fr}.ph-l{border-right:0;border-bottom:1px solid var(--line-2)}.ph-r li{grid-template-columns:1fr;gap:5px}.lane{justify-self:start}}

  /* tables */
  .tablewrap{border:1px solid var(--line-2);overflow-x:auto;background:var(--card-2)}
  table.data{width:100%;border-collapse:collapse;font-size:14px;min-width:720px}
  table.data th{font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.1em;color:var(--secondary);text-align:left;padding:13px 14px;border-bottom:1px solid var(--line-2);white-space:nowrap}
  table.data td{padding:13px 14px;border-bottom:1px solid var(--line);color:var(--muted);vertical-align:top;line-height:1.5}
  table.data td.h{color:var(--ink);font-weight:600;white-space:nowrap}
  table.data td.r,table.data th.r{text-align:right;white-space:nowrap}
  table.data tr.tot td{color:var(--ink);font-weight:600;border-top:1px solid var(--line-hover)}
  .tbl-note{color:var(--secondary);font-size:12.5px;margin:12px 0 0;line-height:1.55}

  /* cards */
  .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  .grid2{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
  @media(max-width:960px){.grid3{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:680px){.grid3,.grid2{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line-2);padding:20px 20px 22px;display:flex;flex-direction:column;transition:border-color .3s,transform .3s}
  .card:hover{border-color:rgba(253,55,55,.45);transform:translateY(-2px)}
  .card .top{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
  .card .cn{font-family:var(--fm);font-size:12px;color:var(--secondary);letter-spacing:.14em}
  .card h4{font-size:1.12rem;text-transform:none;letter-spacing:-.01em;margin:0 0 8px}
  .card p{margin:0;color:var(--muted);font-size:14.2px;line-height:1.55}
  .card p b{color:var(--ink)}
  .card .who{margin-top:auto;padding-top:14px;font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.12em;color:var(--ink)}
  .tag{font-family:var(--fm);font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:4px 8px;border:1px solid rgba(253,55,55,.45);color:var(--accent);background:var(--accent-dim)}

  /* mechanics */
  .mech{background:var(--card-2);border:1px solid var(--line-2);border-left:2px solid var(--accent);padding:18px 20px}
  .mech h4{font-size:1.08rem;text-transform:none;letter-spacing:-.01em;margin:6px 0 6px}
  .mech p{margin:0;color:var(--muted);font-size:14.3px;line-height:1.55}
  .mech p b{color:var(--ink)}

  /* creative */
  .cgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
  @media(max-width:960px){.cgrid{grid-template-columns:repeat(2,1fr)}}
  @media(max-width:600px){.cgrid{grid-template-columns:1fr}}
  .cr{background:var(--card);border:1px solid var(--line-2);display:flex;flex-direction:column}
  .cr .media{background:#000;display:flex;align-items:center;justify-content:center;aspect-ratio:4/5;overflow:hidden;cursor:zoom-in}
  .cr .media img,.cr .media video{width:100%;height:100%;object-fit:contain;display:block}
  .cr .body{padding:16px 16px 18px}
  .cr h4{font-size:1rem;text-transform:none;letter-spacing:-.01em;margin:8px 0 6px}
  .cr p{margin:0;color:var(--muted);font-size:13.8px;line-height:1.5}
  .cr.wide{grid-column:span 2}
  .cr.wide .media{aspect-ratio:16/9}
  @media(max-width:600px){.cr.wide{grid-column:auto}}
  .disclaim{font-family:var(--fm);font-size:10.5px;text-transform:uppercase;letter-spacing:.12em;color:var(--accent);margin:0 0 18px}
  .lb{position:fixed;inset:0;z-index:95;background:rgba(0,0,0,.92);display:none;align-items:center;justify-content:center;padding:24px;cursor:zoom-out}
  .lb.show{display:flex}
  .lb img{max-width:100%;max-height:100%;object-fit:contain}

  /* needs */
  .needs{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
  @media(max-width:760px){.needs{grid-template-columns:1fr}}
  .nd{display:grid;grid-template-columns:34px 1fr;gap:12px;background:var(--card-2);border:1px solid var(--line-2);padding:16px 18px;cursor:pointer;user-select:none;transition:border-color .2s}
  .nd:hover{border-color:var(--line-hover)}
  .nd .bx{width:22px;height:22px;border:1px solid var(--line-hover);display:flex;align-items:center;justify-content:center;font-size:13px;color:#fff;margin-top:2px}
  .nd.done .bx{background:var(--accent);border-color:var(--accent)}
  .nd.done h4{text-decoration:line-through;color:var(--secondary)}
  .nd h4{font-size:1rem;text-transform:none;letter-spacing:-.01em;margin:0 0 4px}
  .nd p{margin:0;color:var(--muted);font-size:13.8px;line-height:1.5}
  .nd .due{font-family:var(--fm);font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-top:8px;display:block}

  .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
  @media(max-width:860px){.kpis{grid-template-columns:1fr}}

  footer{margin-top:64px;border-top:1px solid var(--line);padding:26px 0 60px}
  footer .fn{color:var(--secondary);font-size:12.5px;line-height:1.6;max-width:900px}
  footer .fn b{color:var(--muted)}
  @media(max-width:600px){.wrap,.navbar-in{padding-left:16px;padding-right:16px}}

  /* chapter link */
  .chap{display:inline-flex;align-items:center;gap:10px;margin-top:22px;font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:var(--muted);border:1px solid var(--line-hover);padding:9px 14px;transition:border-color .2s,color .2s}
  .chap:hover{border-color:var(--accent);color:var(--ink)}
  .chap b{color:var(--accent);font-weight:500}

  /* timeline */
  .tl{position:relative;margin:34px 0 8px;padding:0 0 4px}
  .tl-track{position:relative;height:2px;background:var(--line-2);margin:64px 0 0}
  .tl-fill{position:absolute;left:0;top:0;height:2px;background:linear-gradient(90deg,var(--accent),rgba(253,55,55,.35))}
  .tl-hold{position:absolute;top:-10px;height:22px;background:repeating-linear-gradient(135deg,rgba(255,255,255,.08) 0 6px,transparent 6px 12px);border:1px dashed var(--line-hover)}
  .tl-m{position:absolute;top:-7px;width:16px;height:16px;margin-left:-8px;background:var(--bg);border:2px solid var(--accent);transform:rotate(45deg)}
  .tl-m.solid{background:var(--accent)}
  .tl-m.ghost{border-color:var(--secondary)}
  .tl-lab{position:absolute;bottom:22px;transform:translateX(-50%);text-align:center;white-space:nowrap}
  .tl-lab .d{font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--accent)}
  .tl-lab .t{font-family:var(--fh);text-transform:uppercase;font-size:1.05rem;margin-top:4px}
  .tl-lab.hold .d{color:var(--secondary)}
  .tl-lab.hold .t{color:var(--secondary);font-size:.9rem}
  .tl-ticks{display:flex;justify-content:space-between;margin-top:14px;font-family:var(--fm);font-size:9.5px;letter-spacing:.12em;color:var(--secondary);text-transform:uppercase}
  @media(max-width:760px){.tl{display:none}}
  .moments{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}
  .mo{background:var(--card);border:1px solid var(--line-2);padding:22px 22px 24px;position:relative;overflow:hidden}
  .mo .big{font-family:var(--fh);font-size:4.4rem;line-height:.8;color:rgba(253,55,55,.14);position:absolute;right:14px;top:14px}
  .mo h3{font-size:1.45rem;margin:10px 0 6px}
  .mo .when{font-family:var(--fm);font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:var(--ink)}
  .mo p{color:var(--muted);font-size:14.3px;line-height:1.55;margin:12px 0 0}
  .mo p b{color:var(--ink)}
  @media(max-width:900px){.moments{grid-template-columns:1fr}}

  /* levers */
  .lever{display:grid;grid-template-columns:1.15fr .85fr;gap:0;background:var(--card);border:1px solid var(--line-2);margin-bottom:16px}
  .lever .lv-l{padding:24px 24px 26px}
  .lever .lv-r{padding:22px 22px 24px;background:var(--card-2);border-left:1px solid var(--line-2)}
  .lever h3{font-size:1.6rem;margin:8px 0 10px}
  .lever p{color:var(--muted);font-size:14.6px;line-height:1.58;margin:0 0 12px}
  .lever p b{color:var(--ink)}
  .lever ul{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:9px}
  .lever li{position:relative;padding-left:18px;color:var(--muted);font-size:14.2px;line-height:1.52}
  .lever li::before{content:"";position:absolute;left:0;top:9px;width:7px;height:2px;background:var(--accent)}
  .lever li b{color:var(--ink)}
  .proof-k{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.16em;color:var(--accent);display:block;margin-bottom:12px}
  .pf{border-top:1px solid var(--line-2);padding:12px 0 2px}
  .pf:first-of-type{border-top:0;padding-top:0}
  .pf .n{font-family:var(--fh);font-size:1.55rem;line-height:1;color:var(--ink)}
  .pf .w{font-size:13.4px;color:var(--muted);line-height:1.5;margin-top:6px}
  .pf .w b{color:var(--ink)}
  .pf a.src{display:inline-block;margin-top:6px;font-family:var(--fm);font-size:9.5px;text-transform:uppercase;letter-spacing:.12em;color:var(--secondary);border-bottom:1px solid var(--line-hover)}
  .pf a.src:hover{color:var(--accent);border-color:var(--accent)}
  .honest{margin-top:12px;font-size:12.6px;color:var(--secondary);line-height:1.5;border-left:2px solid var(--line-hover);padding-left:10px}
  @media(max-width:900px){.lever{grid-template-columns:1fr}.lever .lv-r{border-left:0;border-top:1px solid var(--line-2)}}

  /* waves */
  .waves{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 4px}
  .wv{border:1px solid var(--line-2);padding:14px 14px 15px;background:var(--card-2)}
  .wv .k{display:block}
  .wv h4{font-size:1rem;text-transform:none;letter-spacing:-.01em;margin:6px 0 4px}
  .wv p{font-size:13.4px;margin:0}
  @media(max-width:600px){.waves{grid-template-columns:1fr}}

  /* target */
  .tgt{background:var(--card);border:1px solid var(--line-2);padding:24px}
  .tgt-tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px}
  .tgt-tabs button{background:transparent;border:1px solid var(--line-hover);color:var(--muted);font-family:var(--fm);font-size:12px;letter-spacing:.14em;text-transform:uppercase;padding:12px 18px;cursor:pointer;transition:all .2s}
  .tgt-tabs button:hover{color:var(--ink);border-color:var(--ink)}
  .tgt-tabs button.on{background:var(--accent);border-color:var(--accent);color:#fff}
  .tgt-body{display:grid;grid-template-columns:280px 1fr;gap:26px;align-items:start}
  .tgt-num .v{font-family:var(--fh);font-size:clamp(3.4rem,8vw,5.4rem);line-height:.85}
  .tgt-num .l{font-family:var(--fm);font-size:10px;text-transform:uppercase;letter-spacing:.14em;color:var(--secondary);margin-top:10px;display:block}
  .tgt-bar{margin-top:20px;height:10px;background:var(--line);position:relative;display:flex}
  .tgt-bar span{display:block;height:100%}
  .tgt-bar .org{background:#fff}
  .tgt-bar .ph{background:var(--accent)}
  .tgt-bar .us{background:rgba(253,55,55,.45)}
  .tgt-leg{display:flex;flex-wrap:wrap;gap:12px;margin-top:10px;font-family:var(--fm);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
  .tgt-leg i{display:inline-block;width:9px;height:9px;margin-right:6px;vertical-align:-1px}
  .tgt-desc h4{font-size:1.3rem;margin:0 0 8px}
  .tgt-desc p{color:var(--muted);font-size:14.6px;line-height:1.58;margin:0 0 12px}
  .tgt-desc ul{list-style:none;margin:0;padding:0;display:grid;gap:8px}
  .tgt-desc li{position:relative;padding-left:18px;color:var(--muted);font-size:14px;line-height:1.5}
  .tgt-desc li::before{content:"";position:absolute;left:0;top:9px;width:7px;height:2px;background:var(--accent)}
  .tgt-desc li b{color:var(--ink)}
  @media(max-width:820px){.tgt-body{grid-template-columns:1fr}}

  /* receipts */
  table.data td a{color:var(--ink);border-bottom:1px solid var(--line-hover)}
  table.data td a:hover{color:var(--accent);border-color:var(--accent)}
  .cr .media.tall{aspect-ratio:9/16}
  .cr .media.wide169{aspect-ratio:16/9}
</style>
</head>
<body class="locked">
<div class="tex"></div><div class="glow"></div>

<div class="gate" id="gate">
  <div class="gate-row"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">Private</span></div>
  <div class="gate-center">
    <div class="gate-title">KILLSHOT</div>
    <div class="bar"></div>
    <p class="gate-sub">Liza Soberano launch plan, prepared by Crowd Control Digital. Enter the password to continue.</p>
    <form class="gate-form" id="gateForm" autocomplete="off">
      <input id="gateInput" type="password" placeholder="Password" aria-label="Password" />
      <button type="submit">Enter</button>
    </form>
    <div class="gate-err mono" id="gateErr">Incorrect password</div>
  </div>
  <div class="gate-foot">
    <div><div class="mono dim">Chapter</div><div class="fv">02 / The Launch</div></div>
    <div class="r"><div class="mono dim">Prepared By</div><div class="fv">Crowd Control Digital</div></div>
  </div>
</div>

<div class="shell">
  <section class="cover" id="top">
    <div class="cover-hero" aria-hidden="true"></div>
    <div class="cover-top"><img class="cc-logo" src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" /><span class="mono">October 2026</span></div>
    <div class="cover-mid">
      <h1 class="cover-title">KILLSHOT<span class="sm">LIZA SOBERANO / THE LAUNCH PLAN</span></h1>
      <div class="cover-subwrap">
        <div class="bar"></div>
        <p class="cover-sub">The single lands Friday. The video lands three weeks later. Then the film. Instead of one release day, KILLSHOT gets three moments, and each one is built to make the next one bigger.</p>
        <a class="chap" href="/liza-killshot">Chapter 01: <b>The cover reveal plan</b> &rarr;</a>
      </div>
    </div>
    <div class="cover-foot">
      <div><div class="mono dim">The moments</div><div class="cv">Single Oct 30 / Video week of Nov 16 / Film announcement</div></div>
      <div><div class="mono dim">Prepared By</div><div class="cv">Geoff Shames, Crowd Control Digital</div></div>
    </div>
  </section>

  <div class="navbar">
    <div class="navbar-in">
      <a class="nb-brand" href="#top">Liza / KILLSHOT</a>
      <div class="nb-jump"><a href="#moments">Moments</a><a href="#plan">Plan</a><a href="#levers">Levers</a><a href="#target">Target</a><a href="#creative">Creative</a><a href="#receipts">Receipts</a><a href="#next">Next Steps</a></div>
    </div>
  </div>

  <section class="ctx wrap">
    <h2>What changed since chapter 01</h2>
    <p class="lead">The rollout plan was built around one release day. The dates are now set differently: <b>the single drops Friday, October 30</b>, the same weekend as the LA Comic Con reveal, and <b>the music video follows the week of November 16</b>. Day-and-date is the usual best practice, so a staggered video has to earn its second launch. This plan does that by giving every moment its own push and making each one feed the next.</p>
    <div class="ctx-grid">
      <div class="ctx-card"><span class="k">Moment 01 / The single</span><p>Song, cover and Comic Con land together. The job is <b>streams and a sound people use</b>: Meta, clipping and Philippines creators from day one.</p></div>
      <div class="ctx-card"><span class="k">Moment 02 / The video</span><p>A midweek premiere with no competition. The job is <b>YouTube views and the reaction wave</b>, with the clipping campaign switching to the real footage.</p></div>
      <div class="ctx-card"><span class="k">Moment 03 / The film</span><p>The Killer Queens announcement turns a music story into a film story. The job is <b>a new audience</b>: film fans, and everyone reacting to the news.</p></div>
    </div>
    <div class="stats">
      <div class="st"><div class="n">18M+</div><span class="l">Instagram followers</span></div>
      <div class="st"><div class="n">64M</div><span class="l">Adults TikTok ads can reach in the Philippines</span></div>
      <div class="st"><div class="n">&#8369;97.2M</div><span class="l">Forgotten Island PH opening, DreamWorks Animation's biggest there</span></div>
      <div class="st"><div class="n">4.6M</div><span class="l">Filipino Americans, 500K of them in Los Angeles</span></div>
    </div>
  </section>

  <section class="sec wrap" id="moments">
    <div class="sec-head">
      <div class="row"><span class="num">01</span><span class="ln"></span></div>
      <h2>Three Moments</h2>
      <p class="desc">The calendar, with the dates we recommend and the window we stay out of.</p>
    </div>
    <div class="finding"><p><b>Recommended video premiere: Wednesday, November 18.</b> Labels release on Fridays, so a midweek premiere has the feed to itself and gives YouTube a clean week to get behind it. Thanksgiving week is out: people are offline on the day, and Black Friday week pushed Meta CPMs up about 45% last year. If the video slips, the fallback is Monday, November 30 or Tuesday, December 1.</p></div>
    <div class="tl" aria-hidden="true">
      <div class="tl-track">
        <div class="tl-fill" style="width:52.8%"></div>
        <div class="tl-hold" style="left:75%;width:11%"></div>
        <div class="tl-m solid" style="left:0%"></div>
        <div class="tl-m solid" style="left:52.8%"></div>
        <div class="tl-m ghost" style="left:95%"></div>
        <div class="tl-lab" style="left:0%;transform:none;text-align:left"><div class="d">Fri Oct 30</div><div class="t">Single + Comic Con</div></div>
        <div class="tl-lab" style="left:52.8%"><div class="d">Wed Nov 18</div><div class="t">Video premiere</div></div>
        <div class="tl-lab hold" style="left:80.5%"><div class="d">Nov 26 to 30</div><div class="t">Holiday hold</div></div>
        <div class="tl-lab" style="left:95%;transform:translateX(-80%)"><div class="d">Date TBC</div><div class="t">Film news</div></div>
      </div>
      <div class="tl-ticks"><span>Oct 30</span><span>Nov 8</span><span>Nov 17</span><span>Nov 26</span><span>Dec 5</span></div>
    </div>
    <div class="moments">
      <div class="mo"><span class="big">01</span><span class="k">The single</span><h3>Make it a sound</h3><span class="when">Fri Oct 30 to Nov 15</span><p>Out on every DSP with the <b>animated cover as the official visualizer on YouTube</b>, so the space is claimed before the video. Clipping, Philippines creators and Meta conversion ads drive streams while the action-edit narrative builds.</p></div>
      <div class="mo"><span class="big">02</span><span class="k">The video</span><h3>Make it an event</h3><span class="when">Wed Nov 18 to Nov 25</span><p>A YouTube Premiere, <b>the heaviest paid flight of the campaign</b>, a reaction wave led by one tier-one YouTuber, and clippers moving to the real footage.</p></div>
      <div class="mo"><span class="big">03</span><span class="k">The film</span><h3>Make it a story</h3><span class="when">Date set with the film team</span><p>The Killer Queens announcement becomes a <b>"react to this" moment</b> and a reason to put the video in front of film fans. Every reaction to the news drives back to the song.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="plan">
    <div class="sec-head">
      <div class="row"><span class="num">02</span><span class="ln"></span></div>
      <h2>The Plan</h2>
      <p class="desc">Five phases, week by week. Lanes are tagged: organic, clipping, Philippines creators, reactions, paid media and YouTube.</p>
    </div>
    <div class="phases">
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 01</span><h3>Drop</h3><span class="when">Oct 30 to Nov 5</span><p class="goal">Turn release weekend and the Comic Con reveal into first-week streams.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">YouTube</span><span><b>Official visualizer live Friday</b>: the animated cover on Liza's channel, so search and the algorithm have something to serve before the video exists.</span></li>
          <li><span class="lane red">Organic</span><span><b>The Comic Con reveal from chapter 01 carries the release</b>: the cover, Liza and Todd together, with "out now" in every caption.</span></li>
          <li><span class="lane">Clipping</span><span><b>Wave 1 opens Friday</b>: KILLSHOT over female-led action scenes. Clippers are paid on verified views with a cap per creator.</span></li>
          <li><span class="lane">PH Creators</span><span><b>Seeding wave 1</b>: lip-sync and reaction formats with Filipino creators in Manila and the diaspora, posting inside the first 72 hours.</span></li>
          <li><span class="lane">Paid</span><span><b>Meta conversion ads to Spotify</b>, the most reliable way to turn attention into streams, across the Philippines, Liza's U.S. fan base and the Filipino diaspora markets.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 02</span><h3>Build</h3><span class="when">Nov 6 to Nov 15</span><p class="goal">Grow the sound and plant the story the video pays off.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane">Clipping</span><span><b>Scale what works</b>: the top edits get more clippers on the same format. By the premiere, KILLSHOT should already be "the action-edit song."</span></li>
          <li><span class="lane">PH Creators</span><span><b>Seeding wave 2 with bigger names</b>: macro creators and celebrity friends, plus a duet-able hook from Liza's own account.</span></li>
          <li><span class="lane">Reactions</span><span><b>First reactions to the song</b> from Philippine reaction channels and U.S. music reactors: "the sweetheart said what?"</span></li>
          <li><span class="lane red">YouTube</span><span><b>Premiere page live</b> with the reminder button, teased by stills and behind-the-scenes cuts from the shoot.</span></li>
          <li><span class="lane">Paid</span><span><b>TikTok Spark Ads on the best organic posts</b>, building the retargeting pool for premiere week.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 03</span><h3>Premiere</h3><span class="when">Nov 16 to Nov 25</span><p class="goal">Make the video the biggest moment of the campaign.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">YouTube</span><span><b>YouTube Premiere on Wednesday, November 18</b>, with Liza in the live chat and gamma asking YouTube for placement support.</span></li>
          <li><span class="lane">Paid</span><span><b>The heaviest flight</b>: YouTube in-stream and in-feed weighted two-thirds Philippines and one-third U.S., plus Meta retargeting of everyone who watched, back to Spotify.</span></li>
          <li><span class="lane">Clipping</span><span><b>Wave 2: the swap.</b> Clippers move from third-party action footage to the official video. Same format, now with Liza in it.</span></li>
          <li><span class="lane">Reactions</span><span><b>The reaction wave</b>: one tier-one YouTuber on the video, a coordinated round of Filipino reaction channels, and an open call for fans to film their own.</span></li>
          <li><span class="lane">PH Creators</span><span><b>Seeding wave 3</b> on the video: recreations of the look and the key scenes.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 04</span><h3>Hold</h3><span class="when">Nov 26 to Nov 30</span><p class="goal">Stay visible without paying holiday prices.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane">Paid</span><span><b>Paid drops to retargeting only</b> through Thanksgiving and Black Friday, when ad prices peak and attention goes to shopping.</span></li>
          <li><span class="lane">Clipping</span><span><b>Clips keep posting</b>: organic edits cost nothing extra to keep running.</span></li>
          <li><span class="lane red">Organic</span><span><b>Fan reposts</b>: the best edits, reactions and recreations on Liza's stories.</span></li>
        </ul></div>
      </div>
      <div class="phase">
        <div class="ph-l"><span class="pn">PHASE 05</span><h3>The Film</h3><span class="when">Date set with the film team</span><p class="goal">Turn the announcement into a third launch for the song.</p></div>
        <div class="ph-r"><ul>
          <li><span class="lane red">Organic</span><span><b>The announcement cut with the video</b>: "KILLSHOT was the trailer."</span></li>
          <li><span class="lane">Reactions</span><span><b>"React to this" campaign</b>: creators stitch the announcement. Film, comics and Filipino pages get the news under embargo.</span></li>
          <li><span class="lane">Paid</span><span><b>The video in front of film fans</b>: action, comics and thriller audiences who have never heard Liza sing.</span></li>
          <li><span class="lane">Clipping</span><span><b>Wave 3</b>: edits of the video framed as the film's first look.</span></li>
        </ul></div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="levers">
    <div class="sec-head">
      <div class="row"><span class="num">03</span><span class="ln"></span></div>
      <h2>The Levers</h2>
      <p class="desc">Five levers, each with the evidence that it works. Everything here is real views from real people.</p>
    </div>

    <div class="lever">
      <div class="lv-l">
        <span class="k">Lever 01</span>
        <h3>Clipping and edits</h3>
        <p>Edit culture already does this for free. People put songs over film scenes that fit the mood, and the song goes with the clip. We pay clippers per verified view to <b>make KILLSHOT the go-to audio for female-led action edits</b> before the video exists. When the video lands, the same narrative pays off with Liza in it.</p>
        <div class="waves">
          <div class="wv"><span class="k">Wave 1 / Oct 30</span><h4>Found footage</h4><p>KILLSHOT over the action heroines people already love. Clippers source their own scenes, as in any edit trend.</p></div>
          <div class="wv"><span class="k">Wave 2 / Nov 18</span><h4>The swap</h4><p>The same format with the official video. Paid boosts run only on this footage, which we hold the rights to.</p></div>
        </div>
        <ul>
          <li><b>Paid on results:</b> per thousand verified views, with a cap per creator, so a viral clip never blows the budget.</li>
          <li><b>Hundreds of posts</b> across TikTok, Reels and Shorts, each one a fresh entry point to the song.</li>
        </ul>
      </div>
      <div class="lv-r">
        <span class="proof-k">The proof</span>
        <div class="pf"><div class="n">Hot 100, 12 years later</div><div class="w">Fans set Lady Gaga's 2011 "Bloody Mary" to a Wednesday dance scene. <b>Nearly 4M TikTok videos</b> later, it debuted on the Hot 100.</div><a class="src" href="https://www.billboard.com/music/chart-beat/lady-gaga-bloody-mary-hot-100-wednesday-1235196057/" target="_blank" rel="noopener">Billboard, Jan 2023</a></div>
        <div class="pf"><div class="n">+8,700%</div><div class="w">Kate Bush's Spotify streams in a day after "Running Up That Hill" played over a Stranger Things scene. It hit <b>No. 8 on the Hot 100</b>, higher than in 1985.</div><a class="src" href="https://www.billboard.com/music/chart-beat/harry-styles-kate-bush-hot-100-top-10-1235082217/" target="_blank" rel="noopener">Billboard, Jun 2022</a></div>
        <div class="pf"><div class="n">22 years</div><div class="w">"Murder on the Dancefloor" got its first-ever Hot 100 entry after a Saltburn scene spread to <b>200K+ TikToks</b>.</div><a class="src" href="https://officialcharts.com/chart-news/sophie-ellis-bextor-murder-on-the-dancefloor-saltburn-billboard" target="_blank" rel="noopener">Official Charts, Jan 2024</a></div>
        <p class="honest">These were placements and organic fan edits. Paid clipping recreates the same audio-over-film mechanic on purpose, on our timeline.</p>
      </div>
    </div>

    <div class="lever">
      <div class="lv-l">
        <span class="k">Lever 02</span>
        <h3>Philippines creator seeding</h3>
        <p>The Philippines is one of the most online countries on earth, and Liza is one of its biggest stars. Creator seeding there buys <b>volume at a fraction of U.S. rates</b>, and it travels: the Filipino diaspora carries it into Los Angeles, the Bay Area and New York feeds.</p>
        <ul>
          <li><b>Tier A, friends and macro names:</b> celebrity friends and top creators who make a post feel like news.</li>
          <li><b>Tier B, format creators:</b> lip-sync, dance and comedy creators who turn the hook into a trend people copy.</li>
          <li><b>Tier C, volume:</b> micro-creators through local networks, so the sound shows up everywhere at once.</li>
          <li><b>Diaspora:</b> Filipino-American creators in L.A., San Francisco and New York, bridging the two markets.</li>
          <li><b>Formats:</b> "Liza said KILLSHOT??", the sweetheart-to-assassin transformation, and recreating the cover look.</li>
        </ul>
      </div>
      <div class="lv-r">
        <span class="proof-k">The proof</span>
        <div class="pf"><div class="n">54 hrs / week</div><div class="w">Time Filipinos spend on digital media, second in the world. The Philippines is <b>the No. 1 YouTube-using country</b>.</div><a class="src" href="https://gmanetwork.com/news/scitech/technology/963273/filipinos-lead-in-online-shopping-video-streaming-global-report/story/" target="_blank" rel="noopener">GMA / Digital 2026</a></div>
        <div class="pf"><div class="n">No. 173 to No. 1</div><div class="w">BINI's "Pantropiko" climbed the Spotify PH chart in about two months as monthly listeners went from <b>200K to 3M+</b>.</div><a class="src" href="https://www.rappler.com/entertainment/music/summer-pantropiko-the-bini-craze-continues/" target="_blank" rel="noopener">Rappler, Apr 2024</a></div>
        <div class="pf"><div class="n">15+ idols</div><div class="w">SB19's "GENTO" dance challenge was picked up by K-pop and J-pop stars, including ENHYPEN's Jungwon with <b>4M+ likes</b>.</div><a class="src" href="https://rappler.com/entertainment/music/gento-international-celebs-sb19-dance-challenge" target="_blank" rel="noopener">Rappler, 2023</a></div>
        <div class="pf"><div class="n">&#8369;97.2M</div><div class="w">Forgotten Island's opening in the Philippines, <b>the biggest DreamWorks Animation opening there</b>. Liza's home audience shows up.</div><a class="src" href="https://interaksyon.philstar.com/hobbies-interests/2026/09/29/319853/forgotten-island-scores-biggest-dreamworks-animation-opening-in-philippines/" target="_blank" rel="noopener">Philstar, Sep 2026</a></div>
      </div>
    </div>

    <div class="lever">
      <div class="lv-l">
        <span class="k">Lever 03</span>
        <h3>Reactions</h3>
        <p>The contrast is the hook. <b>The Philippines' sweetheart singing about a killshot</b> is a reaction video waiting to happen. Liza's superpower is acting on camera, so the biggest reactions are saved for the video, where they can react to her performance and not just the audio.</p>
        <ul>
          <li><b>Song wave, Nov 6 onward:</b> Philippine reaction channels and U.S. music reactors on the single.</li>
          <li><b>Video wave, Nov 18:</b> one tier-one YouTuber on the video (the MoistCr1TiKaL tier, about 18M subscribers), plus a coordinated Filipino reactor round the same day.</li>
          <li><b>Fan wave:</b> an open "film your reaction" call, with the best reposted by Liza.</li>
          <li><b>Film wave:</b> reactions to the Killer Queens news, stitched to the video.</li>
        </ul>
      </div>
      <div class="lv-r">
        <span class="proof-k">The proof</span>
        <div class="pf"><div class="n">+1,100%</div><div class="w">Digital sales of Phil Collins' "In the Air Tonight" in the days after <b>one reaction video</b> by TwinsTheNewTrend went viral.</div><a class="src" href="https://www.rollingstone.com/pro/news/phil-collins-in-air-tonight-sales-1042139/" target="_blank" rel="noopener">Rolling Stone, Aug 2020</a></div>
        <div class="pf"><div class="n">400K+</div><div class="w">TikToks under #apt in the first week of ROSÉ and Bruno Mars' "APT.", as fans explained and reacted to it. <b>114M YouTube views</b> in six days.</div><a class="src" href="https://www.koreajoongangdaily.com/entertainment/rose-and-bruno-mars-apt-tops-spotify-global-chart-hits-114-million-views-on-youtube/12459130" target="_blank" rel="noopener">JoongAng Daily, Oct 2024</a></div>
        <p class="honest">Rolling Stone noted the Phil Collins reaction lifted sales and attention more than streams. That is why reactions are paired with paid retargeting to Spotify, not counted on alone.</p>
      </div>
    </div>

    <div class="lever">
      <div class="lv-l">
        <span class="k">Lever 04</span>
        <h3>Paid media</h3>
        <p>Each platform does one job. <b>Meta converts attention into streams</b> around the single. <b>YouTube buys video views</b> around the premiere. <b>TikTok Spark Ads</b> put money behind organic posts that are already working, so paid always runs behind proof.</p>
        <ul>
          <li><b>Markets:</b> about two-thirds Philippines and one-third U.S., where Liza's fan base and the diaspora are concentrated.</li>
          <li><b>Views versus streams:</b> big view counts and streams never match one to one. We close the gap by buying engaged-view placements and retargeting every video viewer to Spotify.</li>
          <li><b>Timing:</b> spend is front-loaded around Nov 18 and pulled back for the holiday week, when prices spike.</li>
          <li><b>Policy:</b> paid units lead with Liza and the art. Frames that show a weapon stay organic, since Meta and TikTok restrict them in ads.</li>
        </ul>
      </div>
      <div class="lv-r">
        <span class="proof-k">The proof</span>
        <div class="pf"><div class="n">Back to No. 1</div><div class="w">Kendrick Lamar's "Not Like Us" video arrived two months after the song and sent it <b>back to No. 1 on the Hot 100</b>, on 53.8M weekly streams. A late video can be a second launch.</div><a class="src" href="https://hypebeast.com/2024/7/kendrick-lamar-not-like-us-returns-no-1-billboard-hot-100" target="_blank" rel="noopener">Hypebeast, Jul 2024</a></div>
        <div class="pf"><div class="n">+45%</div><div class="w">Median Meta CPM in Black Friday week 2025 against the fall baseline. <b>Same budget, fewer impressions</b>, which is why the premiere comes first.</div><a class="src" href="https://ppc.land/cost-per-order-drops-18-in-2025-black-friday-week-billy-grace-finds/" target="_blank" rel="noopener">PPC Land, Dec 2025</a></div>
        <div class="pf"><div class="n">59.6M</div><div class="w">People YouTube ads can reach in the Philippines, where <b>video views cost a fraction of U.S. prices</b>.</div><a class="src" href="https://datareportal.com/reports/digital-2026-philippines" target="_blank" rel="noopener">DataReportal, Digital 2026</a></div>
      </div>
    </div>

    <div class="lever">
      <div class="lv-l">
        <span class="k">Lever 05</span>
        <h3>The film moment</h3>
        <p>Most singles get one news cycle. KILLSHOT has a film behind it. The Killer Queens announcement <b>reframes the song as part of a bigger world</b>, and gives everyone a second reason to watch the video.</p>
        <ul>
          <li><b>"KILLSHOT was the trailer":</b> the announcement cut together with the video.</li>
          <li><b>React to the news:</b> creators stitch the announcement; film, comics and Filipino pages run it together.</li>
          <li><b>New audience:</b> action, thriller and comics fans targeted with the video, not the song alone.</li>
          <li><b>Comic tie-in:</b> the Killer Queens comic from chapter 01 gives collectors something to buy.</li>
        </ul>
      </div>
      <div class="lv-r">
        <span class="proof-k">The proof</span>
        <div class="pf"><div class="n">No. 1</div><div class="w">"Golden" from KPop Demon Hunters went to <b>No. 1 on the Hot 100</b>, the first by a female K-pop act. The film sold the song and the song sold the film.</div><a class="src" href="https://www.npr.org/2025/08/13/g-s1-82371/golden-huntr-x-k-pop-demon-hunters-billboard-charts" target="_blank" rel="noopener">NPR, Aug 2025</a></div>
        <div class="pf"><div class="n">10 weeks</div><div class="w">"Golden" at No. 1 in the UK. <b>Story drives the replay</b>.</div><a class="src" href="https://www.officialcharts.com/chart-news/huntrx-golden-number-1-single-ten-weeks" target="_blank" rel="noopener">Official Charts, Nov 2025</a></div>
        <div class="pf"><div class="n">Ballroom 20</div><div class="w">Liza was on the Forgotten Island panel at <b>San Diego Comic-Con 2026</b>. Film and fan-convention audiences know her.</div><a class="src" href="https://www.gmanetwork.com/news/lifestyle/hobbiesandactivities/996002/bini-liza-soberano-h-e-r-to-take-part-in-forgotten-island-panel-at-san-diego-comic-con-202/story/" target="_blank" rel="noopener">GMA, Jul 2026</a></div>
      </div>
    </div>
  </section>

  <section class="sec wrap" id="target">
    <div class="sec-head">
      <div class="row"><span class="num">04</span><span class="ln"></span></div>
      <h2>Set the Target</h2>
      <p class="desc">Pick the YouTube goal for the video and the plan scales to it. Liza's channel brings about 1M views on its own; paid and the levers above make up the rest. Budget is sized to the target we agree on.</p>
    </div>
    <div class="tgt">
      <div class="tgt-tabs" id="tgtTabs">
        <button type="button" data-t="0">3M views</button>
        <button type="button" data-t="1" class="on">10M views</button>
        <button type="button" data-t="2">20M views</button>
      </div>
      <div class="tgt-body">
        <div class="tgt-num">
          <div class="v" id="tgtV">10M</div>
          <span class="l" id="tgtL">YouTube views on the video, first 30 days</span>
          <div class="tgt-bar" id="tgtBar"><span class="org"></span><span class="ph"></span><span class="us"></span></div>
          <div class="tgt-leg"><span><i style="background:#fff"></i>Organic</span><span><i style="background:var(--accent)"></i>Paid, Philippines</span><span><i style="background:rgba(253,55,55,.45)"></i>Paid, U.S.</span></div>
        </div>
        <div class="tgt-desc">
          <h4 id="tgtH">A statement</h4>
          <p id="tgtP"></p>
          <ul id="tgtList"></ul>
        </div>
      </div>
    </div>
    <p class="tbl-note">Splits are planning shapes, not forecasts. We agree the goal first, then size media to it, and the stagger gives us a read on streaming before the video spend is committed.</p>
  </section>

  <section class="sec wrap" id="creative">
    <div class="sec-head">
      <div class="row"><span class="num">05</span><span class="ln"></span></div>
      <h2>Example Creative</h2>
      <p class="desc">Generated examples of the formats in this plan, in the KILLSHOT look. They show the direction; final versions use the real song, the official video and real creators.</p>
    </div>
    <p class="disclaim">Examples, directional only</p>
    <div class="cgrid">
      <div class="cr"><div class="media tall"><video src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/c5f100ec-4a23-44b4-a77b-ec10eb16def5.mp4" poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/80a93c0a-ac63-4e07-9630-297a3af572d4.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Clipping / Wave 1</span><h4>The action edit</h4><p>The kind of scene clippers put KILLSHOT over in the first two weeks.</p></div></div>
      <div class="cr"><div class="media tall"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/57e40ad9-bf19-4f3b-ab7c-d4ba5bb41e5c.jpg" alt="Example: wave 1 action edit on TikTok" loading="lazy" /></div><div class="body"><span class="k">Clipping / Wave 1</span><h4>Edit as posted</h4><p>The audio, the drop and a caption that names the song.</p></div></div>
      <div class="cr"><div class="media tall"><video src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/6909602b-9485-4878-a531-49c7258f71e4.mp4" poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/3dd0d81c-6abd-4ce1-9f47-db6f18f4ec96.jpg" muted loop playsinline autoplay preload="none"></video></div><div class="body"><span class="k">Clipping / Wave 2</span><h4>The swap</h4><p>Official-video footage replaces the found scenes. Same story, now hers.</p></div></div>
      <div class="cr"><div class="media tall"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/45eca533-2485-417e-a6dd-303239185173.jpg" alt="Example: wave 2 edit from the official video" loading="lazy" /></div><div class="body"><span class="k">Clipping / Wave 2</span><h4>"She was never the sweet one"</h4><p>The contrast line every edit can lead with.</p></div></div>
      <div class="cr"><div class="media tall"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/a57ec9c1-ad0f-4b88-ae96-1a776f1c948d.jpg" alt="Example: Filipino creator lip-sync" loading="lazy" /></div><div class="body"><span class="k">PH Creators</span><h4>"Liza said KILLSHOT??"</h4><p>A Manila creator on the hook, in the Taglish the format lives in.</p></div></div>
      <div class="cr"><div class="media tall"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/1b6f5f66-db2c-4e47-83b2-396e8f3d8f02.jpg" alt="Example: creator stitching the film announcement" loading="lazy" /></div><div class="body"><span class="k">The Film</span><h4>React to the news</h4><p>Creators stitch the Killer Queens announcement.</p></div></div>
      <div class="cr wide"><div class="media wide169"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/f061fd08-af31-4a4d-b60a-ae0c8abdf5ce.jpg" alt="Example: YouTube reaction thumbnail" loading="lazy" /></div><div class="body"><span class="k">Reactions</span><h4>The tier-one reaction</h4><p>The thumbnail that sells the contrast in one look.</p></div></div>
      <div class="cr"><div class="media"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/755675b8-7f0f-4f89-b1eb-30ef07c973aa.jpg" alt="Example: Meta feed ad" loading="lazy" /></div><div class="body"><span class="k">Paid / Meta</span><h4>Out-now feed ad</h4><p>Liza and the title, no weapon in frame, one button to Spotify.</p></div></div>
      <div class="cr wide"><div class="media wide169"><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_38XpmZPtLEvhHvtskUSttPA3nUB/dbc5d4b4-abcf-415f-b3b5-c3d0a3f48e2d.jpg" alt="Example: YouTube premiere page" loading="lazy" /></div><div class="body"><span class="k">YouTube</span><h4>The Premiere page</h4><p>Live a week out with the reminder button, so the count builds before Nov 18.</p></div></div>
    </div>
  </section>

  <section class="sec wrap" id="receipts">
    <div class="sec-head">
      <div class="row"><span class="num">06</span><span class="ln"></span></div>
      <h2>The Receipts</h2>
      <p class="desc">Every claim on this page, with its source.</p>
    </div>
    <div class="tablewrap">
      <table class="data">
        <thead><tr><th>Example</th><th>What happened</th><th>Why it matters for KILLSHOT</th><th>Source</th></tr></thead>
        <tbody>
          <tr><td class="h">"Bloody Mary"</td><td>Wednesday fan edits; nearly 4M TikToks; Hot 100 debut 12 years after release</td><td>Audio over a film scene can carry a song</td><td><a href="https://www.billboard.com/music/chart-beat/lady-gaga-bloody-mary-hot-100-wednesday-1235196057/" target="_blank" rel="noopener">Billboard</a></td></tr>
          <tr><td class="h">"Running Up That Hill"</td><td>Stranger Things scene; streams up 8,700% in a day; No. 8 Hot 100</td><td>The scene sells the song</td><td><a href="https://www.billboard.com/music/chart-beat/harry-styles-kate-bush-hot-100-top-10-1235082217/" target="_blank" rel="noopener">Billboard</a></td></tr>
          <tr><td class="h">"Murder on the Dancefloor"</td><td>Saltburn scene; 200K+ TikToks; first Hot 100 entry after 22 years</td><td>Film moments spill into edit culture</td><td><a href="https://officialcharts.com/chart-news/sophie-ellis-bextor-murder-on-the-dancefloor-saltburn-billboard" target="_blank" rel="noopener">Official Charts</a></td></tr>
          <tr><td class="h">Clipping market</td><td>Creators paid per thousand verified views, with payout caps</td><td>Pay for results, not posts</td><td><a href="https://digiday.com/media/wtf-is-clipping/" target="_blank" rel="noopener">Digiday</a></td></tr>
          <tr><td class="h">"Pantropiko"</td><td>No. 173 to No. 1 on Spotify PH; 200K to 3M+ monthly listeners</td><td>Filipino audiences can take a song all the way</td><td><a href="https://www.rappler.com/entertainment/music/summer-pantropiko-the-bini-craze-continues/" target="_blank" rel="noopener">Rappler</a></td></tr>
          <tr><td class="h">"GENTO"</td><td>Dance challenge picked up by 15+ K-pop and J-pop idols</td><td>A Filipino trend can travel across Asia</td><td><a href="https://rappler.com/entertainment/music/gento-international-celebs-sb19-dance-challenge" target="_blank" rel="noopener">Rappler</a></td></tr>
          <tr><td class="h">Digital Philippines</td><td>64M TikTok and 59.6M YouTube ad reach; 54 hours a week online</td><td>Scale and attention at a lower cost</td><td><a href="https://datareportal.com/reports/digital-2026-philippines" target="_blank" rel="noopener">DataReportal</a></td></tr>
          <tr><td class="h">Filipino Americans</td><td>4.6M in the U.S.; about 500K in Los Angeles</td><td>The diaspora bridges both markets</td><td><a href="https://www.pewresearch.org/race-and-ethnicity/fact-sheet/asian-americans-filipinos-in-the-u-s/" target="_blank" rel="noopener">Pew Research</a></td></tr>
          <tr><td class="h">Forgotten Island</td><td>&#8369;97.2M PH opening, DreamWorks Animation's biggest there</td><td>Liza's home audience turns out</td><td><a href="https://interaksyon.philstar.com/hobbies-interests/2026/09/29/319853/forgotten-island-scores-biggest-dreamworks-animation-opening-in-philippines/" target="_blank" rel="noopener">Philstar</a></td></tr>
          <tr><td class="h">"In the Air Tonight"</td><td>Sales up 1,100% after one reaction video</td><td>Reactions create attention; pair them with retargeting</td><td><a href="https://www.rollingstone.com/pro/news/phil-collins-in-air-tonight-sales-1042139/" target="_blank" rel="noopener">Rolling Stone</a></td></tr>
          <tr><td class="h">"APT."</td><td>400K+ TikToks and 114M YouTube views in about a week</td><td>Fan explainers and reactions compound</td><td><a href="https://www.koreajoongangdaily.com/entertainment/rose-and-bruno-mars-apt-tops-spotify-global-chart-hits-114-million-views-on-youtube/12459130" target="_blank" rel="noopener">JoongAng Daily</a></td></tr>
          <tr><td class="h">"Not Like Us"</td><td>Video two months after the song; back to No. 1 on 53.8M streams</td><td>A staggered video can be a second launch</td><td><a href="https://hypebeast.com/2024/7/kendrick-lamar-not-like-us-returns-no-1-billboard-hot-100" target="_blank" rel="noopener">Hypebeast</a></td></tr>
          <tr><td class="h">Black Friday ad prices</td><td>Median Meta CPM up about 45% in Black Friday week 2025</td><td>Premiere before the holiday spike</td><td><a href="https://ppc.land/cost-per-order-drops-18-in-2025-black-friday-week-billy-grace-finds/" target="_blank" rel="noopener">PPC Land</a></td></tr>
          <tr><td class="h">"Golden"</td><td>No. 1 on the Hot 100; 10 weeks at No. 1 in the UK</td><td>Film and song lift each other</td><td><a href="https://www.npr.org/2025/08/13/g-s1-82371/golden-huntr-x-k-pop-demon-hunters-billboard-charts" target="_blank" rel="noopener">NPR</a></td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec wrap" id="measure">
    <div class="sec-head">
      <div class="row"><span class="num">07</span><span class="ln"></span></div>
      <h2>Measurement</h2>
      <p class="desc">One live report page from launch day, refreshed daily, so everyone reads the same numbers.</p>
    </div>
    <div class="kpis">
      <div class="mech"><span class="k">Moment 01</span><h4>The single</h4><p>Streams and saves by market, uses of the KILLSHOT sound, clip posts and views, creator posts, and cost per stream on Meta.</p></div>
      <div class="mech"><span class="k">Moment 02</span><h4>The video</h4><p>YouTube views against the target, premiere attendance, watch time, reaction posts, and the lift in streams the week of the video.</p></div>
      <div class="mech"><span class="k">Moment 03</span><h4>The film</h4><p>Reach and reactions on the announcement, new audiences reached, and video views from film audiences.</p></div>
    </div>
  </section>

  <section class="sec wrap" id="next">
    <div class="sec-head">
      <div class="row"><span class="num">08</span><span class="ln"></span></div>
      <h2>Next Steps</h2>
      <p class="desc">What we need this week to start Friday. Tap an item to mark it done.</p>
    </div>
    <div class="needs" id="needs-list">
      <div class="nd"><span class="bx"></span><div><h4>The target</h4><p>Agree the YouTube goal for the video (3M, 10M or 20M) and the media budget that goes with it.</p><span class="due">This week</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Video date</h4><p>Confirm Wednesday, November 18, or the Dec 1 fallback, and the final delivery date for the cut.</p><span class="due">This week</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Ad access</h4><p>Partner access to Liza's Meta, TikTok and YouTube accounts, plus Spark codes on the posts we boost.</p><span class="due">By Oct 29</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>The sound</h4><p>KILLSHOT live as the official sound on TikTok and Instagram from Friday, cleared for clipping and creators.</p><span class="due">By Oct 30</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Visualizer</h4><p>The animated cover uploaded to YouTube as the official visualizer for release day.</p><span class="due">By Oct 30</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Creators and reactors</h4><p>Approve the Philippines creator shortlist, the reactor list and the tier-one YouTuber outreach.</p><span class="due">By Nov 2</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Video selects for clippers</h4><p>Approved clips from the video a week early, under embargo, so Wave 2 posts minutes after the premiere.</p><span class="due">By Nov 11</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>YouTube support</h4><p>gamma's ask to YouTube for premiere placement, and access to Liza's channel for the Premiere page.</p><span class="due">By Nov 11</span></div></div>
      <div class="nd"><span class="bx"></span><div><h4>Film announcement</h4><p>The date and what we can say, so phase 05 can be built around it.</p><span class="due">When set</span></div></div>
    </div>
  </section>

  <footer class="wrap">
    <p class="fn"><b>Notes.</b> Instagram follower count is from a third-party tracker, October 2026. Philippine audience figures are from DataReportal's Digital 2026 report and GMA News; diaspora figures from Pew Research Center. The Black Friday CPM figure is vendor data reported by PPC Land. The tier-one reactor named is an example of scale, not a confirmed booking. View targets and splits are planning shapes, not guarantees. Creative on this page is generated for direction only.</p>
  </footer>
</div>

<div class="lb" id="lb"><img id="lbimg" alt="" /></div>

<script>
(function(){
  var PASS="HOPE";
  var body=document.body, gate=document.getElementById('gate');
  var form=document.getElementById('gateForm'), input=document.getElementById('gateInput'), err=document.getElementById('gateErr');
  function unlock(){gate.classList.add('open');body.classList.remove('locked');body.classList.add('unlocked');setTimeout(function(){gate.style.display='none';},650);
    document.querySelectorAll('video').forEach(function(v){v.preload='auto';var p=v.play();if(p&&p.catch)p.catch(function(){});});}
  try{if(sessionStorage.getItem('lk2-unlocked')==='1')unlock();}catch(e){}
  form.addEventListener('submit',function(e){e.preventDefault();if((input.value||'').trim().toUpperCase()===PASS){try{sessionStorage.setItem('lk2-unlocked','1');}catch(x){}unlock();}else{err.classList.add('show');input.value='';setTimeout(function(){err.classList.remove('show');},1800);}});
  var lb=document.getElementById('lb'), lbimg=document.getElementById('lbimg');
  document.querySelectorAll('.cr .media img').forEach(function(im){im.addEventListener('click',function(){lbimg.src=im.src;lb.classList.add('show');});});
  lb.addEventListener('click',function(){lb.classList.remove('show');});
  document.querySelectorAll('#needs-list .nd').forEach(function(nd,i){
    var key='lk2-need-'+i;
    try{if(localStorage.getItem(key)==='1'){nd.classList.add('done');nd.querySelector('.bx').textContent='\\u2713';}}catch(e){}
    nd.addEventListener('click',function(){var on=!nd.classList.contains('done');nd.classList.toggle('done',on);nd.querySelector('.bx').textContent=on?'\\u2713':'';try{localStorage.setItem(key,on?'1':'0');}catch(e){}});
  });
  var T=[
    {v:'3M',h:'Proof of concept',org:33,ph:45,us:22,p:'Liza\\'s own audience plus a focused Philippines flight. Right if the goal is a clean, credible premiere and keeping powder dry for the film moment.',li:['<b>Organic:</b> about a third of the goal from Liza\\'s channel and fans','<b>Paid:</b> YouTube concentrated in the Philippines, Meta retargeting to Spotify','<b>Reactions:</b> the Filipino reactor round, no tier-one YouTuber','<b>Clipping:</b> Wave 2 swap at a smaller scale']},
    {v:'10M',h:'A statement',org:10,ph:60,us:30,p:'The number that makes the video news in the Philippines and gets noticed in the U.S. The plan as written on this page.',li:['<b>Organic:</b> about 1M from Liza\\'s channel and fans','<b>Paid:</b> the full YouTube flight, two-thirds Philippines and one-third U.S.','<b>Reactions:</b> one tier-one YouTuber plus the coordinated Filipino round','<b>Clipping:</b> Waves 1 and 2 at full scale']},
    {v:'20M',h:'An event',org:5,ph:60,us:35,p:'Built for a chart run and trade headlines. Everything on this page, pushed harder in the U.S., and carried into the film announcement.',li:['<b>Organic:</b> about 1M, plus the reaction wave','<b>Paid:</b> a longer YouTube flight with a heavier U.S. share','<b>Reactions:</b> two or three tier-one YouTubers across the video and the film news','<b>Clipping:</b> all three waves, film included']}
  ];
  var tabs=document.querySelectorAll('#tgtTabs button');
  function setT(i){var t=T[i];tabs.forEach(function(b,j){b.classList.toggle('on',j===i);});
    document.getElementById('tgtV').textContent=t.v;document.getElementById('tgtH').textContent=t.h;document.getElementById('tgtP').textContent=t.p;
    var bar=document.getElementById('tgtBar').children;bar[0].style.width=t.org+'%';bar[1].style.width=t.ph+'%';bar[2].style.width=t.us+'%';
    document.getElementById('tgtList').innerHTML=t.li.map(function(x){return '<li>'+x+'</li>';}).join('');}
  tabs.forEach(function(b,i){b.addEventListener('click',function(){setT(i);});});
  setT(1);
})();
</script>
</body>
</html>`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
