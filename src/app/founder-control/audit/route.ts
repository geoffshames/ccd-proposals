export const dynamic = "force-static";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>FOUNDER CONTROL · Sample Attention Audit · Jordan Pike / Crestline</title>
<meta name="description" content="Sample Founder Attention Audit. Illustrative data. By Crowd Control Digital." />
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700,800&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  :root {
    --paper: #F4EFE6;
    --card: #FFFCF5;
    --ink: #16140F;
    --soft: #5A554A;
    --faint: rgba(22, 20, 15, 0.12);
    --hair: rgba(22, 20, 15, 0.08);
    --coral: #E0502E;
    --cobalt: #2742F5;
    --green: #1E7A4F;
    --fd: "Satoshi", sans-serif;
    --fs: "Cabinet Grotesk", sans-serif;
    --fm: "JetBrains Mono", monospace;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: var(--paper); color: var(--ink); font-family: var(--fd); -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--coral); color: var(--paper); }
  .num { font-family: var(--fm); font-variant-numeric: tabular-nums; }
  .wrap { max-width: 1080px; margin: 0 auto; padding: 0 28px; }

  .ribbon { background: var(--ink); color: var(--paper); text-align: center; font-family: var(--fm); font-size: 10px; font-weight: 500; letter-spacing: 0.3em; text-transform: uppercase; padding: 8px 12px; }
  .ribbon b { color: var(--coral); font-weight: 500; }

  .topbar { border-bottom: 1px solid var(--faint); background: rgba(244,239,230,0.92); position: sticky; top: 0; z-index: 40; backdrop-filter: blur(10px); }
  .topbar-inner { max-width: 1080px; margin: 0 auto; padding: 0 28px; height: 62px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .wordmark { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--ink); }
  .wordmark .star { color: var(--coral); font-size: 14px; }
  .wordmark .name { font-family: var(--fm); font-weight: 600; font-size: 13px; letter-spacing: 0.2em; }
  .topbar a.back { font-family: var(--fm); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); text-decoration: none; border: 1px solid var(--ink); padding: 8px 16px; border-radius: 999px; transition: background 0.2s, color 0.2s; }
  .topbar a.back:hover { background: var(--ink); color: var(--paper); }

  .doc-head { padding: 64px 0 44px; border-bottom: 1px solid var(--faint); }
  .doc-meta { display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap; font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--soft); margin-bottom: 30px; }
  .doc-meta b { color: var(--coral); font-weight: 500; }
  h1 { font-family: var(--fs); font-size: clamp(38px, 5.4vw, 62px); font-weight: 800; letter-spacing: -0.03em; line-height: 1.0; }
  h1 .serif { font-family: var(--fs); font-style: normal; font-weight: 500; color: var(--coral); }
  .subject { margin-top: 22px; font-size: 17px; color: var(--soft); }
  .subject b { color: var(--ink); font-weight: 700; }

  .verdict { margin: 44px 0 0; display: grid; grid-template-columns: 280px 1fr; gap: 24px; align-items: stretch; }
  .score-card { background: var(--ink); color: var(--paper); border-radius: 20px; padding: 38px 36px; text-align: center; display: flex; flex-direction: column; justify-content: center; }
  .score-card .lab { font-family: var(--fm); font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: #FF9377; }
  .score-card .big { font-family: var(--fs); font-style: normal; font-weight: 800; font-size: 92px; line-height: 1; margin-top: 14px; }
  .score-card .of { font-family: var(--fm); font-size: 12px; color: rgba(244,239,230,0.6); margin-top: 8px; }
  .score-card .rank { margin-top: 18px; font-family: var(--fm); font-size: 11px; letter-spacing: 0.1em; color: var(--paper); border-top: 1px solid rgba(244,239,230,0.16); padding-top: 16px; }
  .verdict-copy { background: var(--card); border: 1px solid var(--hair); border-radius: 20px; padding: 40px 42px; display: flex; flex-direction: column; justify-content: center; }
  .verdict-copy .line { font-family: var(--fs); font-style: normal; font-weight: 700; font-size: clamp(22px, 2.8vw, 30px); line-height: 1.35; letter-spacing: -0.01em; }
  .verdict-copy .line em { color: var(--coral); font-style: normal; font-weight: 500; }
  .verdict-copy p { margin-top: 18px; font-size: 14.5px; line-height: 1.65; color: var(--soft); }

  section { padding: 84px 0; border-bottom: 1px solid var(--faint); }
  .sec-label { font-family: var(--fm); font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--soft); margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
  .sec-label .s { color: var(--coral); }
  h2 { font-family: var(--fs); font-size: clamp(26px, 3.4vw, 40px); font-weight: 700; letter-spacing: -0.02em; line-height: 1.08; }
  h2 .serif { font-family: var(--fs); font-style: normal; font-weight: 500; color: var(--coral); }

  .comps { margin-top: 48px; display: flex; flex-direction: column; gap: 14px; }
  .comp { display: grid; grid-template-columns: 230px 1fr 60px; gap: 18px; align-items: center; }
  .comp .who { font-family: var(--fm); font-size: 12.5px; letter-spacing: 0.02em; }
  .comp .who small { display: block; color: var(--soft); font-size: 10.5px; margin-top: 2px; }
  .comp .track { background: rgba(22,20,15,0.06); border-radius: 999px; height: 14px; overflow: hidden; }
  .comp .fill { height: 100%; border-radius: 999px; background: var(--ink); width: 0; transition: width 1.1s cubic-bezier(0.2, 0.6, 0.2, 1); }
  .comp.subject-row .fill { background: var(--coral); }
  .comp.subject-row .who { color: var(--coral); font-weight: 600; }
  .comp .sc { font-family: var(--fm); font-size: 14px; font-weight: 600; text-align: right; }
  .comp-note { margin-top: 26px; font-size: 13px; color: var(--soft); line-height: 1.6; max-width: 640px; }

  .dims { margin-top: 48px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .dim { background: var(--card); border: 1px solid var(--hair); border-radius: 16px; padding: 24px 26px; display: grid; grid-template-columns: 1fr auto; gap: 8px 18px; align-items: start; transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .dim:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(22,20,15,0.08); }
  .dim h3 { font-size: 15.5px; font-weight: 700; }
  .dim .ds { font-family: var(--fs); font-style: normal; font-weight: 800; font-size: 28px; line-height: 1; }
  .dim .ds small { font-family: var(--fm); font-size: 10px; font-weight: 400; color: var(--soft); }
  .dim .ds.bad { color: var(--coral); }
  .dim .ds.mid { color: var(--ink); }
  .dim p { grid-column: 1 / -1; font-size: 13px; line-height: 1.6; color: var(--soft); }

  .opps { margin-top: 48px; display: flex; flex-direction: column; }
  .opp { display: grid; grid-template-columns: 56px 1fr auto; gap: 22px; padding: 26px 0; border-top: 1px solid var(--hair); align-items: start; }
  .opp:last-child { border-bottom: 1px solid var(--hair); }
  .opp .rank { font-family: var(--fs); font-style: normal; font-weight: 800; font-size: 34px; color: var(--coral); line-height: 1; }
  .opp h3 { font-size: 17px; font-weight: 700; line-height: 1.35; }
  .opp p { margin-top: 8px; font-size: 13.5px; line-height: 1.65; color: var(--soft); max-width: 600px; }
  .opp p b { color: var(--ink); font-weight: 700; }
  .opp .est { text-align: right; white-space: nowrap; font-family: var(--fm); font-size: 11px; color: var(--soft); }
  .opp .est b { display: block; font-size: 16px; color: var(--green); font-weight: 600; margin-bottom: 4px; }

  .plan { margin-top: 48px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .phase { background: var(--card); border: 1px solid var(--hair); border-radius: 18px; padding: 32px 30px; transition: transform 0.2s ease, box-shadow 0.2s ease; }
  .phase:hover { transform: translateY(-4px); box-shadow: 0 16px 38px rgba(22,20,15,0.09); }
  .phase .days { font-family: var(--fm); font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--coral); }
  .phase h3 { margin-top: 14px; font-size: 18px; font-weight: 700; }
  .phase ul { margin-top: 16px; list-style: none; }
  .phase li { padding: 9px 0; border-top: 1px solid var(--hair); font-size: 13px; color: var(--soft); line-height: 1.5; display: flex; gap: 10px; }
  .phase li::before { content: "✦"; color: var(--coral); font-size: 10px; padding-top: 3px; }

  .cta-sec { border-bottom: none; text-align: center; }
  .cta-sec .line { font-family: var(--fs); font-style: normal; font-weight: 700; font-size: clamp(28px, 4.4vw, 52px); line-height: 1.12; max-width: 820px; margin: 0 auto; letter-spacing: -0.02em; }
  .cta-sec .line em { color: var(--coral); font-style: normal; font-weight: 500; }
  .cta-sec p { margin: 24px auto 0; max-width: 520px; color: var(--soft); font-size: 15.5px; line-height: 1.7; }
  .btns { margin-top: 34px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; font-family: var(--fm); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; padding: 13px 26px; border-radius: 999px; transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s; border: 1px solid var(--ink); }
  .btn:active { transform: translateY(0) scale(0.97); }
  .btn-coral { background: var(--coral); color: var(--paper); border-color: var(--coral); }
  .btn-coral:hover { transform: translateY(-2px); box-shadow: 0 10px 26px rgba(224,80,46,0.35); }
  .btn-line { background: transparent; color: var(--ink); }
  .btn-line:hover { background: var(--ink); color: var(--paper); }
  .price-tag { margin-top: 30px; font-family: var(--fm); font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--coral); }

  footer { padding: 40px 0 56px; }
  .foot { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; font-family: var(--fm); font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--soft); }
  .foot a { color: var(--ink); text-decoration: none; }
  .foot a:hover { color: var(--coral); }

  .reveal { opacity: 0; transform: translateY(20px); transition: opacity 0.65s ease, transform 0.65s ease; }
  .reveal.in { opacity: 1; transform: none; }

  @media (max-width: 880px) {
    .verdict, .dims, .plan { grid-template-columns: 1fr; }
    .comp { grid-template-columns: 150px 1fr 48px; }
    .opp { grid-template-columns: 1fr; }
    .opp .est { text-align: left; }
  }
</style>
</head>
<body>

<div class="ribbon">Sample audit · Illustrative data · <b>✦</b> Founder Control by Crowd Control Digital</div>

<div class="topbar">
  <div class="topbar-inner">
    <a class="wordmark" href="/founder-control"><span class="star">✦</span><span class="name">FOUNDER CONTROL</span></a>
    <a class="back" href="/founder-control">About the Board Room</a>
  </div>
</div>

<div class="wrap">

  <div class="doc-head">
    <div class="doc-meta">
      <span>Document <b>FC-AUD-014</b></span>
      <span>Prepared by Crowd Control Digital</span>
      <span>June 2026 · Confidential</span>
    </div>
    <h1>Founder Attention <span class="serif">Audit.</span></h1>
    <p class="subject">Subject: <b>Jordan Pike</b>, co-founder &amp; CEO, <b>Crestline</b> (B2B logistics SaaS, Series B). Comp set: five founders competing for the same buyers, talent, and capital.</p>

    <div class="verdict reveal">
      <div class="score-card">
        <div class="lab">Attention Index</div>
        <div class="big">41</div>
        <div class="of">/ 100 · weighted across 10 dimensions</div>
        <div class="rank">Rank #5 of 6 in comp set</div>
      </div>
      <div class="verdict-copy">
        <div class="line">Jordan is the best-kept secret in freight tech. <em>Secrets don't win categories.</em></div>
        <p>The raw material is unusually good: clear convictions, a contrarian read on freight payments, and real stage presence. What's missing is everything around it: no owned territory, no short-form presence, no amplification, no capture. The good news is uncomfortable: the category's attention is sitting unclaimed, and the comp set's content is weak enough to take share fast.</p>
      </div>
    </div>
  </div>

  <section>
    <div class="sec-label"><span class="s">✦</span> 01 / The Comp Set</div>
    <h2>Where the category's attention <span class="serif">actually sits.</span></h2>
    <div class="comps reveal">
      <div class="comp"><div class="who">M. Okafor <small>Flexline · CEO</small></div><div class="track"><div class="fill" data-w="78"></div></div><div class="sc num">78</div></div>
      <div class="comp"><div class="who">D. Brandt <small>Haulport · CEO</small></div><div class="track"><div class="fill" data-w="71"></div></div><div class="sc num">71</div></div>
      <div class="comp"><div class="who">S. Veras <small>Cartage · founder</small></div><div class="track"><div class="fill" data-w="63"></div></div><div class="sc num">63</div></div>
      <div class="comp"><div class="who">A. Kim <small>Loadstar · CEO</small></div><div class="track"><div class="fill" data-w="55"></div></div><div class="sc num">55</div></div>
      <div class="comp subject-row"><div class="who">Jordan Pike <small>Crestline · CEO</small></div><div class="track"><div class="fill" data-w="41"></div></div><div class="sc num">41</div></div>
      <div class="comp"><div class="who">R. Whitfield <small>Palletiq · CEO</small></div><div class="track"><div class="fill" data-w="38"></div></div><div class="sc num">38</div></div>
    </div>
    <p class="comp-note">Index is a weighted composite of reach, engaged view-through, search volume, qualified inbound signals, and access surface across the trailing 180 days. The gap to #1 is 37 points; in this comp set, roughly 30 of those points are claimable within two quarters because the leaders' content systems are shallow.</p>
  </section>

  <section>
    <div class="sec-label"><span class="s">✦</span> 02 / Scorecard</div>
    <h2>Ten dimensions. <span class="serif">Few survivors.</span></h2>
    <div class="dims reveal">
      <div class="dim"><h3>Voice clarity</h3><div class="ds mid">6<small>/10</small></div><p>Strong and specific in person; diluted in print. Current posts read like a comms team wrote them, because one did.</p></div>
      <div class="dim"><h3>POV ownership</h3><div class="ds bad">3<small>/10</small></div><p>No claimed territory. "Freight payments are broken" is sitting unowned across the entire comp set.</p></div>
      <div class="dim"><h3>Watchability</h3><div class="ds bad">3<small>/10</small></div><p>Effectively zero short-form presence. Comp set averages 18 clips a month; the lane is empty and the bar is low.</p></div>
      <div class="dim"><h3>Velocity</h3><div class="ds bad">4<small>/10</small></div><p>Three posts a month, episodic. Momentum resets after every gap; the algorithm forgets faster than buyers do.</p></div>
      <div class="dim"><h3>Format fitness</h3><div class="ds bad">4<small>/10</small></div><p>Text-only on LinkedIn. No video system, no carousel system, no formats engineered for completion.</p></div>
      <div class="dim"><h3>Platform mix</h3><div class="ds bad">4<small>/10</small></div><p>LinkedIn only. Absent on TikTok and Shorts, where exactly zero credible freight-tech founders currently operate.</p></div>
      <div class="dim"><h3>Distribution</h3><div class="ds bad">2<small>/10</small></div><p>No amplification system: no creator seeding, no cross-promos, no paid behind winners. Every post starts cold and relies on the feed's mercy.</p></div>
      <div class="dim"><h3>Capture</h3><div class="ds bad">3<small>/10</small></div><p>No newsletter, no CTA system, no DM funnel. The attention that does land evaporates with nothing to hold it.</p></div>
      <div class="dim"><h3>Access surface</h3><div class="ds mid">6<small>/10</small></div><p>Two podcast appearances ever, both low-fit. Seven high-fit shows identified, none pitched. Warm paths exist via two investors.</p></div>
      <div class="dim"><h3>Momentum</h3><div class="ds mid">6<small>/10</small></div><p>The Series B announcement spiked attention; nothing followed it. Spikes without systems are donations to the feed.</p></div>
    </div>
  </section>

  <section>
    <div class="sec-label"><span class="s">✦</span> 03 / Alpha Opportunities</div>
    <h2>Ranked by value, <span class="serif">not by ease.</span></h2>
    <div class="opps reveal">
      <div class="opp">
        <div class="rank">01</div>
        <div>
          <h3>Claim the "freight payments" POV vacuum outright</h3>
          <p>Nobody in the comp set owns the category's most contentious money conversation, and Jordan already holds the contrarian position privately. A weekly POV series claims the territory; <b>first-mover here resets the comp set ranking.</b></p>
        </div>
        <div class="est"><b>#5 → #2</b>category SOV, 2 qtrs</div>
      </div>
      <div class="opp">
        <div class="rank">02</div>
        <div>
          <h3>Enter short-form while the lane is empty</h3>
          <p>The comp set's video is corporate and skippable. Entertainment-grade cuts (cold-open POV, caption-forward talking head) against weak competition is the single highest-leverage move available.</p>
        </div>
        <div class="est"><b>1M+ views/mo</b>by day 60</div>
      </div>
      <div class="opp">
        <div class="rank">03</div>
        <div>
          <h3>Run the podcast circuit that's already mapped</h3>
          <p>Seven shows with fit scores above 85, audiences heavy in enterprise logistics buyers and growth-stage investors. Two warm intro paths exist today. Package, pitch, prep, repeat.</p>
        </div>
        <div class="est"><b>Pipeline halo</b>per appearance</div>
      </div>
      <div class="opp">
        <div class="rank">04</div>
        <div>
          <h3>Build the capture system before scaling reach</h3>
          <p>Newsletter plus a DM capture flow on every POV piece. The comp set averages 22k owned subscribers; Jordan has zero. <b>Reach without capture is rented attention.</b></p>
        </div>
        <div class="est"><b>6k subs</b>per quarter, owned</div>
      </div>
      <div class="opp">
        <div class="rank">05</div>
        <div>
          <h3>Make the hiring war public</h3>
          <p>Crestline is hiring 40 engineers against better-known logos and saying nothing about it. A founder-led hiring narrative converts attention directly into the talent funnel.</p>
        </div>
        <div class="est"><b>80+ senior applicants</b>per series</div>
      </div>
      <div class="opp">
        <div class="rank">06</div>
        <div>
          <h3>Turn the Series B spike pattern into a system</h3>
          <p>The funding announcement proved the audience shows up when given a reason. Manufactured reasons (product POVs, customer stories, newsjacks) replace the wait for the next raise.</p>
        </div>
        <div class="est"><b>Qualified inbound</b>4-6/mo immediate</div>
      </div>
    </div>
  </section>

  <section>
    <div class="sec-label"><span class="s">✦</span> 04 / The 90-Day Plan</div>
    <h2>From secret <span class="serif">to programming.</span></h2>
    <div class="plan reveal">
      <div class="phase">
        <div class="days">Days 0-30</div>
        <h3>Voice + territory</h3>
        <ul>
          <li>Voice system and POV map built with editorial lead</li>
          <li>"Freight payments" territory claimed: first 4 POV pieces</li>
          <li>Baseline locked: index, SOV, inbound, comp tracking live</li>
          <li>Capture flows installed before reach scales</li>
        </ul>
      </div>
      <div class="phase">
        <div class="days">Days 31-60</div>
        <h3>Studio + amplification</h3>
        <ul>
          <li>Short-form cadence: 8-10 cuts/mo through the studio</li>
          <li>Amplification live: creator seeding + paid on every release</li>
          <li>First 3 podcast pitches out via warm paths</li>
          <li>Hiring narrative series begins</li>
        </ul>
      </div>
      <div class="phase">
        <div class="days">Days 61-90</div>
        <h3>Capture + compound</h3>
        <ul>
          <li>Newsletter launch, seeded through cross-promos</li>
          <li>Paid amplification on proven winners only</li>
          <li>First quarterly attention statement delivered</li>
          <li>Board Room decision: graduate or walk with the system</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="cta-sec">
    <div class="line">This audit is a sample. <em>Yours will be less comfortable.</em></div>
    <p>Ten dimensions, five comps, every gap priced. Twenty minutes after reading it, you'll know exactly where the attention in your category is sitting unclaimed.</p>
    <div class="btns">
      <a href="mailto:geoff@crowdcontroldigital.com?subject=FOUNDER%20CONTROL%20Attention%20Audit&body=Name%3A%0ACompany%20%2F%20fund%3A%0AWhat%27s%20at%20stake%20this%20year%3A%0A" class="btn btn-coral">Request your audit</a>
      <a href="/founder-control/demo" class="btn btn-line">Tour the attention P&amp;L</a>
    </div>
    <div class="price-tag">$7,500 · Credited in full against your first month</div>
  </section>
</div>

<footer>
  <div class="wrap foot">
    <span>✦ Founder Control · A Crowd Control Digital Product · Sample data is illustrative</span>
    <a href="mailto:geoff@crowdcontroldigital.com">geoff@crowdcontroldigital.com</a>
  </div>
</footer>

<script>
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        e.target.querySelectorAll(".fill").forEach(function (f) { f.style.width = f.getAttribute("data-w") + "%"; });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
</script>
</body>
</html>
`;

export function GET() {
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
