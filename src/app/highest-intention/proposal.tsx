'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  albums, cadence, clients, comps, fanWords, mailto, payment, platformSplit, quotes,
  sentiment, src, teardown, themes, youtube,
} from './data';
import './style.css';

const A = '/images/highest-intention/';
const usd = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
const k = (n: number) => (n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + 'M' : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e5 ? 0 : 1) + 'K' : String(n));

const chapters = [
  ['audit', '01', 'Audit'],
  ['teardown', '02', 'Teardown'],
  ['sentiment', '03', 'Sentiment'],
  ['field', '04', 'The Field'],
  ['strategy', '05', 'Strategy'],
  ['creative', '06', 'Creative'],
  ['roadmap', '07', 'Roadmap'],
  ['investment', '08', 'Investment'],
] as const;

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="hi-cite" href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function SectionHead({ n, title, strap, children }: { n: string; title: string; strap: React.ReactNode; children?: React.ReactNode }) {
  return (
    <div className="hi-head" data-reveal>
      <div className="hi-head-num"><span className="hi-mono">{n}</span><i className="hi-tri" /></div>
      <div>
        <h2>{title}</h2>
        <p className="hi-strap">{strap}</p>
        {children && <div className="hi-head-copy">{children}</div>}
      </div>
    </div>
  );
}

function Rays({ className = '' }: { className?: string }) {
  const rays = Array.from({ length: 48 });
  return (
    <svg className={'hi-rays ' + className} viewBox="-100 -100 200 200" aria-hidden="true">
      {rays.map((_, i) => {
        const a = (i / rays.length) * Math.PI * 2;
        const r1 = i % 2 ? 38 : 30;
        return <line key={i} x1={Math.cos(a) * r1} y1={Math.sin(a) * r1} x2={Math.cos(a) * 98} y2={Math.sin(a) * 98} />;
      })}
    </svg>
  );
}

/* ---------- charts ---------- */

function AlbumChart() {
  const max = 280000;
  return (
    <div className="hi-albums">
      {albums.map((a, i) => (
        <article key={a.title} data-reveal style={{ transitionDelay: i * 70 + 'ms' }}>
          <img src={A + a.img} alt={`${a.title} album cover`} loading="lazy" />
          <div className="hi-album-body">
            <div className="hi-album-top"><h4>{a.title}</h4><span className="hi-mono">{a.year}</span></div>
            <div className="hi-bar"><span style={{ width: Math.max(3, (a.plays / max) * 100) + '%' }} className={a.plays < 20000 ? 'is-low' : ''} /></div>
            <div className="hi-album-foot"><strong>{a.label}</strong><span className="hi-mono">SPOTIFY PLAYS</span></div>
            <p>{a.note}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function CadenceGrid() {
  return (
    <div className="hi-cadence">
      <div className="hi-cadence-grid">
        {cadence.map(([m, n], i) => (
          <div key={i} className={'hi-cell n' + Math.min(n, 4)} title={`${n} posts`}>
            <span className="hi-cell-n">{n}</span>
            <span className="hi-cell-m">{m}</span>
          </div>
        ))}
      </div>
      <div className="hi-cadence-axis hi-mono"><span>OCT 2024</span><span>OCT 2025</span><span>SEP 2026</span></div>
    </div>
  );
}

function ThemeBars() {
  return (
    <div className="hi-themes">
      {themes.map(t => (
        <div key={t.name} className="hi-theme">
          <div className="hi-theme-name">{t.name}</div>
          <div className="hi-theme-track"><span style={{ width: t.share * 2.2 + '%' }} /></div>
          <div className="hi-theme-val hi-mono">{t.share}% of posts{t.er ? `, ${t.er}% ER` : ''}</div>
        </div>
      ))}
    </div>
  );
}

function YouTubeScatter() {
  const [hover, setHover] = useState<number | null>(null);
  const W = 760, H = 360, P = { l: 56, r: 24, t: 24, b: 44 };
  const xs = (v: number) => P.l + ((Math.log10(v) - 4.3) / (6.1 - 4.3)) * (W - P.l - P.r);
  const ys = (lr: number) => H - P.b - (lr / 3) * (H - P.t - P.b);
  const baseline = 2.42;
  return (
    <div className="hi-scatter">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="YouTube views versus like rate for the eight biggest uploads">
        {[0, 1, 2, 3].map(g => (
          <g key={g}>
            <line x1={P.l} x2={W - P.r} y1={ys(g)} y2={ys(g)} className="hi-grid" />
            <text x={P.l - 10} y={ys(g) + 4} textAnchor="end" className="hi-axis">{g}%</text>
          </g>
        ))}
        {[20000, 50000, 100000, 300000, 1000000].map(v => (
          <text key={v} x={xs(v)} y={H - 16} textAnchor="middle" className="hi-axis">{k(v)}</text>
        ))}
        <line x1={P.l} x2={W - P.r} y1={ys(baseline)} y2={ys(baseline)} className="hi-baseline" />
        <text x={W - P.r} y={ys(baseline) - 8} textAnchor="end" className="hi-axis hi-axis-gold">CHANNEL BASELINE 2.42% LIKES PER VIEW</text>
        {youtube.map((d, i) => (
          <g key={d.t} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={0} className="hi-dot-g">
            <circle cx={xs(d.v)} cy={ys(d.lr)} r={d.kind === 'earned' ? 11 : 8} className={d.kind === 'earned' ? 'hi-dot earned' : 'hi-dot paid'} />
          </g>
        ))}
        <text x={W / 2} y={H - 1} textAnchor="middle" className="hi-axis">VIEWS (LOG SCALE)</text>
      </svg>
      <div className="hi-scatter-read">
        {hover === null ? (
          <p className="hi-mono">HOVER A DOT. GOLD IS THE SHORT, RED IS LONG FORM.</p>
        ) : (
          <p><strong>{youtube[hover].t}</strong><br /><span className="hi-mono">{youtube[hover].v.toLocaleString()} VIEWS / {youtube[hover].lr}% LIKE RATE</span></p>
        )}
      </div>
    </div>
  );
}

function Donut() {
  let acc = 0;
  const R = 70, C = 2 * Math.PI * R;
  return (
    <svg viewBox="0 0 200 200" className="hi-donut" role="img" aria-label="Comment categories">
      {sentiment.map(s => {
        const len = (s.v / 100) * C;
        const el = <circle key={s.k} r={R} cx="100" cy="100" fill="none" stroke={s.c} strokeWidth="26" strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-acc} transform="rotate(-90 100 100)" />;
        acc += len;
        return el;
      })}
      <text x="100" y="96" textAnchor="middle" className="hi-donut-big">597</text>
      <text x="100" y="116" textAnchor="middle" className="hi-donut-small">COMMENTS SCORED</text>
    </svg>
  );
}

function Ladder() {
  const [metric, setMetric] = useState<'ig' | 'ml'>('ig');
  const vals = comps.map(c => c[metric]);
  const min = Math.log10(Math.min(...vals) * 0.8), max = Math.log10(Math.max(...vals));
  return (
    <div className="hi-ladder">
      <div className="hi-toggle" role="tablist" aria-label="Metric">
        <button role="tab" aria-selected={metric === 'ig'} onClick={() => setMetric('ig')}>Instagram followers</button>
        <button role="tab" aria-selected={metric === 'ml'} onClick={() => setMetric('ml')}>Spotify monthly listeners</button>
      </div>
      <div className="hi-ladder-rows">
        {comps.map(c => {
          const w = ((Math.log10(c[metric]) - min) / (max - min)) * 100;
          return (
            <div key={c.name} className={'hi-rung t-' + c.tier}>
              <div className="hi-rung-name">{c.name}<span className="hi-mono">{c.note}</span></div>
              <div className="hi-rung-track"><span style={{ width: Math.max(4, w) + '%' }} /></div>
              <div className="hi-rung-val">{k(c[metric])}</div>
            </div>
          );
        })}
      </div>
      <p className="hi-small">Log scale. Pulled live on September 29, 2026 from Spotify and Instagram profiles.</p>
    </div>
  );
}

/* ---------- creative ---------- */

const creative = [
  { id: 'version', tab: 'Reggae Version', img: 'creative/reggae-version.jpg', ratio: 'tall', title: 'The front door: a covers series with a number on it.', body: 'Your best-performing ad ever is the Water cover cut as a Short: 328K views at a normal like rate. We turn that into a franchise. A numbered series of under-60-second reggae versions of songs people already love, filmed in one look, each pointing to the full version and to your originals. Here Without You becomes the flagship episode.', spec: '9:16 / UNDER 60s / WEEKLY' },
  { id: 'visualizer', tab: 'Owned Visualizer', img: 'creative/visualizer.jpg', video: 'creative/visualizer.mp4', ratio: 'tall', title: 'Your emblem, your type, every lyric clip.', body: 'The Universal Light eye is the strongest mark you own and it barely appears. One template, fixed palette, fixed type, the lyric people quote back set large. Partner channels keep premiering; your grid stays unmistakably yours.', spec: '9:16 / TEMPLATE / EVERY RELEASE' },
  { id: 'city', tab: 'City Drop', img: 'creative/city-drop.jpg', ratio: 'four', title: 'Three hundred numbers in San Diego.', body: 'A paid unit built to collect phone numbers, not views. One creative per priority market, geo-fenced, pointing to a Laylo drop. When a promoter asks how many you can bring, the answer is a real list of people in that city who asked to be told.', spec: '4:5 / META / PER MARKET' },
  { id: 'unplugged', tab: 'Unplugged', img: 'creative/unplugged.jpg', inset: 'creative/unplugged.mp4', ratio: 'square', title: 'The acoustic record, under your name.', body: 'Twelve songs, stripped. Released as Highest Intention Unplugged rather than a new project, the model Rebelution and Iya Terra use. It opens the Jack Johnson lane without splitting an audience you are still building.', spec: '1:1 / DSP ART / SERIES WORLD' },
  { id: 'sessions', tab: 'The Sessions', img: 'creative/sessions.jpg', ratio: 'wide', title: 'The footage bookers ask for.', body: 'A quarterly live-in-the-room session with the full band, shot properly once and cut into a month of verticals. It fixes the gap you named: great players, not enough footage of the band killing it.', spec: '16:9 + 9:16 CUTDOWNS / QUARTERLY' },
];

/* ---------- main ---------- */

export default function Proposal() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState('audit');
  const [td, setTd] = useState<number | null>(null);
  const [cIdx, setCIdx] = useState(0);
  const [tier, setTier] = useState<'full' | 'consult'>('full');
  const [spend, setSpend] = useState(2000);
  const [hours, setHours] = useState(10);
  const [q, setQ] = useState(0);

  const retainer = tier === 'full' ? 5000 : 3000;
  const fee = spend * 0.15;
  const creativeCost = hours * 100;
  const agency = retainer + fee + creativeCost;
  const allIn = agency + spend;

  const cur = creative[cIdx];

  useEffect(() => {
    const el = root.current; if (!el) return;
    const reveal = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); reveal.unobserve(e.target); } }), { threshold: 0.08 });
    el.querySelectorAll('[data-reveal]').forEach(n => reveal.observe(n));
    const ch = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: '-30% 0px -60% 0px' });
    el.querySelectorAll('[data-chapter]').forEach(n => ch.observe(n));
    let f = 0;
    const onScroll = () => {
      cancelAnimationFrame(f);
      f = requestAnimationFrame(() => {
        const d = document.documentElement.scrollHeight - window.innerHeight;
        el.style.setProperty('--p', String(d > 0 ? Math.min(1, window.scrollY / d) : 0));
        el.style.setProperty('--y', String(window.scrollY));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const t = setInterval(() => setQ(x => (x + 1) % quotes.length), 5200);
    return () => { reveal.disconnect(); ch.disconnect(); window.removeEventListener('scroll', onScroll); clearInterval(t); };
  }, []);

  useEffect(() => {
    if (td === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setTd(null);
      if (e.key === 'ArrowRight') setTd(x => (x === null ? x : (x + 1) % teardown.length));
      if (e.key === 'ArrowLeft') setTd(x => (x === null ? x : (x + teardown.length - 1) % teardown.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [td]);

  const words = useMemo(() => { const m = Math.max(...fanWords.map(w => w[1])); return fanWords.map(([w, n]) => ({ w, s: 0.9 + (n / m) * 2.6 })); }, []);

  const approveHref = (t: 'full' | 'consult') => payment[t] || mailto(t === 'full' ? 'Full Service' : 'Consulting');

  return (
    <div className="hi" ref={root}>
      <div className="hi-progress" aria-hidden="true" />
      <a className="hi-skip" href="#audit">Skip to proposal</a>

      <header className="hi-header">
        <a href="#top" aria-label="Crowd Control Digital"><img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width="112" height="31" /></a>
        <span className="hi-mono hi-header-mid">HIGHEST INTENTION<br /><span className="hi-dim">PROPOSAL / SEPTEMBER 29, 2026</span></span>
        <a className="hi-header-cta" href="#investment">Investment</a>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hi-hero">
          <div className="hi-hero-img" style={{ backgroundImage: `url(${A}hero.jpg)` }} role="img" aria-label="Ben Lowe performing live with a blue electric guitar, photographed by Louis Barr" />
          <div className="hi-hero-shade" />
          <Rays className="hi-hero-rays" />
          <div className="hi-hero-top hi-mono">
            <span><i className="hi-dot" /> AUDIENCE GROWTH AND TOUR READINESS PROPOSAL</span>
            <span className="hi-right">LOS ANGELES, CALIFORNIA<br />PROPOSED START OCTOBER 15, 2026</span>
          </div>
          <div className="hi-hero-body">
            <p className="hi-mono hi-kicker">A PROPOSAL BY CROWD CONTROL DIGITAL</p>
            <h1>Highest<br />Intention<span className="hi-period">.</span></h1>
            <div className="hi-hero-row">
              <p className="hi-hero-strap">Five albums. A headliner’s band on the credits.<br /><em>Now the audience catches up to the songs.</em></p>
              <div className="hi-hero-meta hi-mono">
                <span>SCOPE<br /><strong>AUDIT, STRATEGY, EXECUTION</strong></span>
                <span>OPTIONS<br /><strong>FULL SERVICE OR CONSULTING</strong></span>
                <a className="hi-btn" href="#audit">Read the audit</a>
              </div>
            </div>
          </div>
          <div className="hi-hero-foot hi-mono"><span>PREPARED BY GEOFF SHAMES / CO-FOUNDER</span><span>PHOTO: LOUIS BARR</span></div>
          <div className="hi-stripe" />
        </section>

        <nav className="hi-chapters" aria-label="Chapters">
          {chapters.map(([id, n, l]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined}><span>{n}</span>{l}</a>)}
        </nav>

        {/* INTRO */}
        <section className="hi-intro hi-wrap" data-reveal>
          <p className="hi-mono">WHERE THIS STARTS</p>
          <p className="hi-intro-big">You said the music is the part you have down. <span>The numbers agree.</span> The debut still pulls plays three years on, fans quote your lyrics back, and the people on your records are reggae royalty. What is missing is the system around the songs: a clear brand, a steady voice, real fans you can reach directly, and footage that makes you an easy yes for a headliner.</p>
          <div className="hi-intro-stats">
            {[['5', 'Studio albums'], ['540K', 'Lifetime Spotify plays'], ['2.4M', 'YouTube views'], ['4,254', 'Instagram followers'], ['0', 'Fans you can text today']].map(([n, l]) => (
              <div key={l}><strong>{n}</strong><span className="hi-mono">{l}</span></div>
            ))}
          </div>
        </section>

        {/* 01 AUDIT */}
        <section id="audit" data-chapter className="hi-section">
          <div className="hi-wrap">
            <SectionHead n="01" title="The Audit" strap="Catalog, credentials and the infrastructure around them.">
              <p>We pulled every release, every platform and every public mention. Here is the honest picture.</p>
            </SectionHead>

            <h3 className="hi-sub" data-reveal>The catalog</h3>
            <AlbumChart />
            <div className="hi-callout" data-reveal>
              <span className="hi-mono">FINDING</span>
              <p><strong>The first two albums carry about 83% of all visible Spotify plays.</strong> The three records since have barely been heard, including the one with Tony Chin. The songs did not get weaker. The launch system never existed. And the third record, a devotional worldbeat album, told a young audience something different from what the first two had.</p>
            </div>

            <h3 className="hi-sub" data-reveal>The credentials</h3>
            <div className="hi-creds" data-reveal>
              {[
                ['Pato Banton', 'Lead guitar and harmony vocals in the Now Generation Band. Pato features on Cannot Keep Me Down.'],
                ['Tony Chin', 'Soul Syndicate legend and Big Mountain’s guitarist on Baby I Love Your Way. A full album together, May 2026.'],
                ['E.N Young', 'Ex-Tribal Seeds. Mixed and mastered your last three albums at Imperial Sound.'],
                ['David Rodigan', 'Premiered Sky on BBC 1Xtra. Reggae Vibes scored Universal Light 97%.'],
                ['IRIE Magazine', 'Summer 2026 feature on Highest Intention Meets Tony Chin.'],
                ['The Players', 'Credits across the catalog include members of Slightly Stoopid, Stick Figure, Arise Roots and Michael Franti’s band.'],
              ].map(([t, b]) => <article key={t}><h4>{t}</h4><p>{b}</p></article>)}
            </div>
            <p className="hi-small" data-reveal>Sources: <Cite href={src.irie}>IRIE Magazine</Cite>, <Cite href={src.reggaeVibes}>Reggae Vibes</Cite>, <Cite href={src.idc}>IDC Distro</Cite>, <Cite href={src.topShelf}>Top Shelf Music</Cite>, album credits on Spotify and Apple Music.</p>

            <h3 className="hi-sub" data-reveal>Where the listeners are</h3>
            <div className="hi-cities" data-reveal>
              {[['São Paulo', 79], ['Los Angeles', 70], ['Auckland', 51], ['Santiago', 48], ['San Diego', 42]].map(([c, n], i) => (
                <div key={c as string}><span className="hi-mono">0{i + 1}</span><strong>{c}</strong><div className="hi-bar thin"><span style={{ width: ((n as number) / 79) * 100 + '%' }} /></div></div>
              ))}
              <p className="hi-small">Top listener cities on Spotify, relative. 5,587 monthly listeners today. Brazil found you on its own through Fat One; Los Angeles and San Diego are the home base to build first.</p>
            </div>

            <h3 className="hi-sub" data-reveal>The infrastructure</h3>
            <div className="hi-checks" data-reveal>
              {[
                ['No fan capture', 'No Laylo, no SMS, no email list. Every listener is anonymous after the song ends.'],
                ['No show calendar', 'No Bandsintown or Songkick listing, so no alerts go out when you play.'],
                ['No merch store', 'Track sales only. No bundles, no tour items.'],
                ['Profile cleanup', 'The TikTok link on your site is broken, a duplicate empty Spotify profile exists, and the Instagram display name uses small-caps characters that hurt search.'],
                ['EPK', 'A Google Drive PDF and a contact form. It needs live metrics, live footage and a one-page version a booker can read in thirty seconds.'],
              ].map(([t, b]) => <article key={t}><span className="hi-x" aria-hidden="true" /><div><h4>{t}</h4><p>{b}</p></div></article>)}
            </div>
          </div>
        </section>

        {/* photo break */}
        <section className="hi-break">
          <img src={A + 'stage-crowd.jpg'} alt="A packed room with hands in the air as Ben plays a blue guitar on stage" loading="lazy" />
          <div className="hi-break-copy">
            <p className="hi-mono">THE ROOM ALREADY WORKS</p>
            <p className="hi-display">Now build the list<br />behind the room.</p>
          </div>
        </section>

        {/* 02 TEARDOWN */}
        <section id="teardown" data-chapter className="hi-section hi-alt">
          <div className="hi-wrap">
            <SectionHead n="02" title="Social Teardown" strap="47 Instagram posts, 74 YouTube uploads, 17 TikToks, scored one by one." />

            <div className="hi-kpis" data-reveal>
              {[
                ['13 of 24', 'months with zero Instagram posts', 'Posting happens in release bursts, then goes quiet. The fourth album got one post.'],
                ['159 days', 'longest recent silence', 'May to October 2025. Another 157-day gap followed from November to April.'],
                ['1.32%', 'median engagement, last 12 months', 'Down from 2.34% across the prior 24 months.'],
                ['922', 'median Reel views in 2026', 'Down from 2,360 in 2023 and 2024.'],
              ].map(([n, l, b]) => <article key={l}><strong>{n}</strong><span className="hi-mono">{l}</span><p>{b}</p></article>)}
            </div>

            <div className="hi-two" data-reveal>
              <div>
                <h3 className="hi-sub">Instagram cadence</h3>
                <p className="hi-lede">Posts per month, October 2024 to September 2026. Grey means nothing went out.</p>
                <CadenceGrid />
              </div>
              <div>
                <h3 className="hi-sub">What the grid is made of</h3>
                <p className="hi-lede">Last 24 months by theme, with median engagement rate.</p>
                <ThemeBars />
                <p className="hi-small">Ben has never spoken directly to camera on the grid. It is the single biggest missing format.</p>
              </div>
            </div>

            <h3 className="hi-sub" data-reveal>Post by post</h3>
            <p className="hi-lede" data-reveal>Twelve posts that explain the account. Open any card for the read.</p>
            <div className="hi-td-grid" data-reveal>
              {teardown.map((t, i) => (
                <button key={t.f} className={'hi-td v-' + t.verdict} onClick={() => setTd(i)} aria-label={`Open teardown: ${t.title}`}>
                  <img src={`${A}teardown/${t.f}.jpg`} alt="" loading="lazy" />
                  <span className="hi-td-tag hi-mono">{t.verdict === 'worked' ? 'WORKED' : 'FIX'}</span>
                  <span className="hi-td-meta hi-mono">{t.date}<br />{t.views}</span>
                </button>
              ))}
            </div>

            <div className="hi-lessons" data-reveal>
              {[
                ['The winners are music first.', 'Every top Reel puts the song in the first second over a strong visual bed: ocean, family, art. Keep that instinct.'],
                ['The brand on the grid is borrowed.', 'At least nine visualizers carry a partner channel’s mascot. High Stereo Love has been a real discovery engine; on your own page, your mark should lead.'],
                ['Captions are written for search, not people.', 'Recent posts open with YouTube-style titles like “New Reggae 2025 / Cali Reggae / Lyric Video.” All sit in the bottom half. Lead with one line from Ben.'],
                ['Collabs are the engine.', 'Stephanie Nicole and Tony Chin posts drove the four best engagement rates of the year, 2.6% to 5.6%. Every feature should be an Instagram Collab post.'],
              ].map(([h, b]) => <article key={h}><h4>{h}</h4><p>{b}</p></article>)}
            </div>

            <h3 className="hi-sub" data-reveal>YouTube: same song, two formats</h3>
            <div className="hi-two hi-two-yt" data-reveal>
              <YouTubeScatter />
              <div className="hi-yt-copy">
                <p className="hi-yt-big"><strong>1,035,589</strong> views.<br /><strong>727</strong> likes.</p>
                <p>The long-form Water cover is the channel’s biggest upload, and its like rate is 3% of your normal. Viewers even say how they found it: <em>“YouTube nunca promociona algo bueno.”</em> Last year’s ad push bought views in the cheapest markets, where listeners do not follow, stream or buy tickets.</p>
                <p><strong>The same cover, promoted as a Short, did 328,503 views at a perfectly normal 2.37% like rate, about 34 times the long form.</strong> That is the most important data point in this proposal: put spend behind a reggae version of a song people already love, vertical and under a minute, and it reaches people who actually respond.</p>
                <p className="hi-small">Eight uploads over 20K views make up 97.9% of lifetime channel views. Sources: <Cite href={src.waterLong}>Water, long form</Cite>, <Cite href={src.waterShort}>Water, Short</Cite>, <Cite href={src.fatOne}>Fat One</Cite>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 03 SENTIMENT */}
        <section id="sentiment" data-chapter className="hi-section">
          <div className="hi-wrap">
            <SectionHead n="03" title="Sentiment Analysis" strap="597 comments across Instagram and YouTube, classified by hand and by model.">
              <p>We read every comment we could pull, removed the band’s own replies, then scored the remaining 570 for sentiment, author type and language.</p>
            </SectionHead>

            <div className="hi-sent" data-reveal>
              <div className="hi-sent-donut">
                <Donut />
                <ul className="hi-legend">
                  {sentiment.map(s => <li key={s.k}><i style={{ background: s.c }} />{s.k}<span className="hi-mono">{s.v}%</span></li>)}
                </ul>
              </div>
              <div className="hi-sent-side">
                <div className="hi-sent-score">
                  <strong>82.6%</strong><span className="hi-mono">POSITIVE</span>
                  <strong className="neg">1.4%</strong><span className="hi-mono">NEGATIVE</span>
                </div>
                <p>People who hear the music like it. The problem is volume and quality of the conversation, not tone. Only about 180 comments in the entire history of both platforms are genuine fans talking about the music.</p>
                <div className="hi-split">
                  {platformSplit.map(p => (
                    <div key={p.p}>
                      <div className="hi-split-head"><strong>{p.p}</strong><span className="hi-mono">{p.n} COMMENTS</span></div>
                      <div className="hi-split-bar">
                        <span style={{ width: p.fan + '%', background: 'var(--gold)' }} title="Genuine fans" />
                        <span style={{ width: p.peer + '%', background: 'var(--green)' }} title="Peers" />
                        <span style={{ width: p.emoji + '%', background: '#8a8373' }} title="Emoji only" />
                        <span style={{ width: p.spam + '%', background: 'var(--red)' }} title="Spam" />
                      </div>
                      <p className="hi-small">{p.p === 'YouTube' ? 'Half of the YouTube comment layer is spam, much of it concentrated under two videos. It is the first thing a booker sees under your biggest uploads.' : 'Nearly a third of Instagram commenters are fellow musicians and collaborators. Real respect, but a small circle.'}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hi-voice" data-reveal>
              <div className="hi-words">
                <p className="hi-mono">THE WORDS FANS USE</p>
                <div>{words.map(({ w, s }) => <span key={w} style={{ fontSize: s + 'rem' }}>{w}</span>)}</div>
                <p className="hi-small">Recurring themes: calm and stress relief, easy to move to, positive lyrics, bonfire and beach moments. Language outside emoji: 92% English, 4% Portuguese, 3% Spanish.</p>
              </div>
              <div className="hi-quote">
                <p className="hi-mono">IN THEIR WORDS</p>
                <blockquote key={q}>“{quotes[q].q}”</blockquote>
                <p className="hi-mono hi-dim">{quotes[q].s}</p>
                <div className="hi-quote-dots">{quotes.map((_, i) => <button key={i} aria-label={`Quote ${i + 1}`} aria-pressed={i === q} onClick={() => setQ(i)} />)}</div>
              </div>
            </div>
            <div className="hi-callout" data-reveal>
              <span className="hi-mono">FINDING</span>
              <p><strong>Fans describe a feeling, not a genre:</strong> calm, sunlight, a bonfire with friends, lyrics that lift you. That is the brand. It is also exactly where the acoustic record lives, which is why Unplugged extends the band instead of competing with it.</p>
            </div>
          </div>
        </section>

        {/* 04 FIELD */}
        <section id="field" data-chapter className="hi-section hi-alt">
          <div className="hi-wrap">
            <SectionHead n="04" title="The Field" strap="Twenty-six Cali roots acts benchmarked. The gap to a support slot is smaller than it looks.">
              <p>Headliners are the goal. The acts getting support slots right now are the benchmark.</p>
            </SectionHead>
            <div data-reveal><Ladder /></div>

            <div className="hi-proof" data-reveal>
              {[
                ['2.7x', 'For Peace Band has about 2.7 times your Instagram audience and is on Tribal Seeds’ fall 2026 tour.', src.tribalTour],
                ['4.5x', 'SensaMotion played Cali Roots 2026 with about 19K Instagram followers.', src.caliRoots],
                ['6', 'Cali Roots Wild Card puts six independent bands on the OG Stage by fan vote. A mobilized list wins it. The 2027 festival runs May 28 to 30.', src.wildCard],
                ['SMS', 'Stick Figure asked fans by text who should open their 2027 tour. Headliners are literally polling phone lists.', src.stickFigureSms],
              ].map(([n, b, h]) => <article key={n}><strong>{n}</strong><p>{b}</p><Cite href={h}>Source</Cite></article>)}
            </div>

            <div className="hi-two" data-reveal>
              <div className="hi-note">
                <p className="hi-mono">HOW SUPPORT SLOTS MOVE</p>
                <h4>A small circle, rotating across a few bills.</h4>
                <p>The same names appear on multiple headliners’ tours in 2026: Bumpin Uglies on Iration and Slightly Stoopid, Tribal Seeds on Iration. Openers get in three ways: through the headliner’s camp, through shared management or label relationships, or by proving draw at festivals. You already have the camp relationships through the players on your records. What you need is draw a buyer can verify.</p>
              </div>
              <div className="hi-note">
                <p className="hi-mono">THE COVER PRECEDENT</p>
                <h4>Big Mountain still lives on one cover.</h4>
                <p>Baby I Love Your Way has 573M Spotify streams, and Tony Chin played on it. A reggae Here Without You carries that lineage. A version already exists from Conkarah (2018), so yours has to be unmistakably yours: the band, the arrangement, the players, the story of who is on it. We build the rollout around that story.</p>
                <p className="hi-small"><Cite href={src.bigMountain}>Big Mountain</Cite> / <Cite href={src.conkarah}>Conkarah version</Cite></p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 STRATEGY */}
        <section id="strategy" data-chapter className="hi-section">
          <div className="hi-wrap">
            <SectionHead n="05" title="The Strategy" strap="One band. Three doors in. One list that makes you bookable." />

            <div className="hi-thesis" data-reveal>
              <Rays className="hi-thesis-rays" />
              <p className="hi-mono">POSITIONING</p>
              <p className="hi-thesis-line">The songwriter’s<br /><span>roots band.</span></p>
              <p className="hi-thesis-copy">Serious lyrics over deep roots grooves, played by the people who built the sound. Everything we publish should make that sentence more true.</p>
            </div>

            <div className="hi-doors" data-reveal>
              {[
                ['DOOR 01', 'Reggae Version', 'Discovery. Numbered covers of songs people already love, under a minute, one look. The door with the widest frame.'],
                ['DOOR 02', 'The Catalog', 'Conviction. Originals, lyric-first visualizers in your own mark, stories from Ben about why each song exists.'],
                ['DOOR 03', 'Unplugged', 'Intimacy. The acoustic record as an edition of the band, the Jack Johnson lane without a new name to build.'],
              ].map(([n, t, b]) => <article key={t}><span className="hi-mono">{n}</span><h3>{t}</h3><p>{b}</p></article>)}
              <div className="hi-doors-arrow hi-mono">ALL THREE POINT TO ONE PLACE: A CITY SMS LIST</div>
            </div>

            <div className="hi-pillars" data-reveal>
              {[
                ['01', 'Define the brand', 'One identity system built from the Universal Light emblem. One palette, one type system, one voice. Profiles cleaned up across every platform. Off-genre work lives on its own shelf.'],
                ['02', 'Publish like a band on tour', 'Four posts a week between releases, never five months of silence. Ben on camera weekly. Live clips reframed for vertical and captioned for sound off. Every feature posted as a Collab.'],
                ['03', 'Buy fans, never views', 'Paid media geo-fenced to the US West Coast and Hawaii, built on audiences who follow Stick Figure, Iration, Rebelution and Tribal Seeds. Optimized to SMS sign-ups and profile visits. No worldwide targeting, ever.'],
                ['04', 'Own the list', 'Laylo for SMS and email. City drops in five priority markets: Los Angeles, San Diego, Orange County, Santa Cruz and the Bay Area. Show alerts, release alerts, presale codes.'],
                ['05', 'Become an easy yes', 'A quarterly live session shoot. A rebuilt EPK with real metrics. A one-page booker sheet. A support-slot target list. A Wild Card campaign for Cali Roots 2027.'],
              ].map(([n, t, b]) => <article key={n}><span className="hi-pillar-n">{n}</span><div><h4>{t}</h4><p>{b}</p></div></article>)}
            </div>

            <h3 className="hi-sub" data-reveal>Six-month targets</h3>
            <div className="hi-targets" data-reveal>
              {[
                ['Instagram', '4.3K', '10K', 'Real followers from the West Coast, not a growth service.'],
                ['Engagement rate', '1.3%', '4%+', 'Median across posts, measured monthly.'],
                ['Fans you can text', '0', '1,500', 'Across five priority markets, about 300 per city.'],
                ['Spotify monthly listeners', '5.6K', '15K', 'Driven by covers, catalog and the Here Without You release.'],
              ].map(([m, a, b, c]) => <article key={m}><span className="hi-mono">{m}</span><div className="hi-target-row"><span className="from">{a}</span><span className="arr" aria-hidden="true" /><strong>{b}</strong></div><p>{c}</p></article>)}
            </div>
            <p className="hi-small" data-reveal>Directional targets, not guarantees. Final targets are set after onboarding with full account access and a confirmed media budget.</p>
          </div>
        </section>

        {/* 06 CREATIVE */}
        <section id="creative" data-chapter className="hi-section hi-alt">
          <div className="hi-wrap">
            <SectionHead n="06" title="Example Creative" strap="Five formats, built in your world. Examples and directional only.">
              <p>These were generated for this proposal to show the direction. Final creative uses your real footage, your players and your approval.</p>
            </SectionHead>
            <div className="hi-ctabs" role="tablist" aria-label="Creative examples" data-reveal>
              {creative.map((c, i) => (
                <button key={c.id} role="tab" aria-selected={i === cIdx} onClick={() => setCIdx(i)}><span className="hi-mono">0{i + 1}</span>{c.tab}</button>
              ))}
            </div>
            <div className="hi-cpanel" role="tabpanel" data-reveal>
              <div className={'hi-cframe r-' + cur.ratio}>
                {cur.video ? (
                  <video key={cur.id} src={A + cur.video} poster={A + cur.img} autoPlay muted loop playsInline />
                ) : (
                  <img key={cur.id} src={A + cur.img} alt={`Example creative: ${cur.tab}`} />
                )}
                {'inset' in cur && cur.inset && <video className="hi-cframe-inset" key={cur.id + '-inset'} src={A + cur.inset} autoPlay muted loop playsInline aria-label="Unplugged motion loop example" />}
                <span className="hi-cframe-tag hi-mono">EXAMPLE / DIRECTIONAL</span>
              </div>
              <div className="hi-ccopy">
                <p className="hi-mono">{cur.spec}</p>
                <h3>{cur.title}</h3>
                <p>{cur.body}</p>
                {cur.id === 'unplugged' && <p className="hi-small">Precedent: <Cite href={src.rachmany}>Eric Rachmany’s solo acoustic runs</Cite> kept Rebelution’s identity intact.</p>}
                <div className="hi-cnav">
                  <button onClick={() => setCIdx((cIdx + creative.length - 1) % creative.length)} aria-label="Previous example">Prev</button>
                  <span className="hi-mono">{String(cIdx + 1).padStart(2, '0')} / 0{creative.length}</span>
                  <button onClick={() => setCIdx((cIdx + 1) % creative.length)} aria-label="Next example">Next</button>
                </div>
              </div>
            </div>

            <h3 className="hi-sub" data-reveal>A normal week</h3>
            <div className="hi-week" data-reveal>
              {[
                ['MON', 'Reggae Version', 'A new numbered cover Short across Reels, TikTok and Shorts.'],
                ['WED', 'Live', 'A reframed, captioned live moment. One clip, one caption per platform.'],
                ['FRI', 'Ben, to camera', 'Thirty seconds on a lyric, a session with Tony Chin, a lesson from the Pato years.'],
                ['SUN', 'Catalog or Collab', 'An owned visualizer, or a Collab post with a featured artist.'],
                ['DAILY', 'Stories', 'Studio, rehearsal, fan replies, city drop reminders.'],
              ].map(([d, t, b]) => <article key={d}><span className="hi-mono">{d}</span><h4>{t}</h4><p>{b}</p></article>)}
            </div>
          </div>
        </section>

        {/* 07 ROADMAP */}
        <section id="roadmap" data-chapter className="hi-section">
          <div className="hi-wrap">
            <SectionHead n="07" title="The Roadmap" strap="Six months, from cleanup to a Cali Roots-ready band." />
            <div className="hi-road" data-reveal>
              {[
                ['DAYS 1 TO 30', 'OCT 15 TO NOV 14', 'Foundation', ['Brand system and owned visualizer template', 'Profile cleanup: YouTube spam, duplicate uploads, orphan Spotify, TikTok link, Instagram name', 'Laylo live with five city drops', 'Content bank from the archive, first Reggae Version episodes filmed', 'Here Without You rollout plan and license cleared']],
                ['DAYS 31 TO 60', 'NOV 15 TO DEC 14', 'Ignite', ['Four-a-week publishing rhythm locked', 'Paid tests live: covers, catalog, city drops', 'First city SMS pushes in Los Angeles and San Diego', 'Universal Light Sessions episode one shot and cut']],
                ['DAYS 61 TO 90', 'DEC 15 TO JAN 14', 'Prove', ['Here Without You release', 'Rebuilt EPK and booker one-sheet with live metrics', 'Support-slot target list and outreach support', 'Quarter review: what to scale, what to cut']],
                ['MONTHS 4 TO 6', 'JAN 15 TO APR 14', 'Scale', ['Unplugged release as an edition of the band', 'Cali Roots Wild Card campaign to the full list', 'Expand city drops to routing markets', 'Session two, and a spring run pitched on real numbers']],
              ].map(([w, d, t, items]) => (
                <article key={t as string}>
                  <div className="hi-road-head"><span className="hi-mono">{w}</span><span className="hi-mono hi-dim">{d}</span></div>
                  <h3>{t}</h3>
                  <ul>{(items as string[]).map(x => <li key={x}>{x}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 08 INVESTMENT */}
        <section id="investment" data-chapter className="hi-section hi-invest">
          <div className="hi-wrap">
            <SectionHead n="08" title="Investment" strap="Two ways to work together. Same strategy, different hands on the wheel." />

            <div className="hi-tiers" data-reveal>
              {([
                { id: 'full', name: 'Full Service', price: 5000, tag: 'We run it with you', lead: 'A bolt-on marketing team. We plan, make, publish, advertise and report. You approve, show up on camera and play.', inc: ['Brand system, positioning and profile cleanup', 'Social management across Instagram, TikTok, YouTube and Facebook: calendar, captions, publishing and community management', 'Content direction for Reggae Version, Sessions and Unplugged', 'Paid media strategy, builds, daily management and optimization', 'Laylo SMS and email: city drops, show alerts, release campaigns', 'Release rollouts, playlist curator and reggae radio outreach', 'EPK rebuild, booker one-sheet, support-slot targeting and promoter email support', 'Weekly call and monthly report'] },
                { id: 'consult', name: 'Consulting', price: 3000, tag: 'You run it with us', lead: 'A strategist in your corner. We set the plan, build the systems and run the ads. You and the band handle day-to-day posting.', inc: ['Brand system, positioning and profile cleanup', 'Weekly strategy call with a written plan for the week: what to post, hooks, captions', 'Monthly content review with specific notes', 'Paid media strategy, builds and management', 'Laylo setup and campaign plans; the band sends', 'Release rollout plans and EPK and one-sheet templates', 'Monthly report'] },
              ] as const).map(t => (
                <article key={t.id} className={'hi-tier ' + (tier === t.id ? 'is-on' : '')} onClick={() => setTier(t.id)}>
                  {t.id === 'full' && <span className="hi-tier-flag hi-mono">RECOMMENDED</span>}
                  <p className="hi-mono">{t.tag}</p>
                  <h3>{t.name}</h3>
                  <div className="hi-price"><strong>{usd(t.price)}</strong><span>/mo</span></div>
                  <p className="hi-tier-plus hi-mono">+ 15% OF MEDIA AND CREATOR SPEND<br />+ CREATIVE AT $100 / HOUR</p>
                  <p className="hi-tier-lead">{t.lead}</p>
                  <ul>{t.inc.map(x => <li key={x}>{x}</li>)}</ul>
                  <a className="hi-btn full" href={approveHref(t.id)} onClick={e => e.stopPropagation()}>{payment[t.id] ? `Approve and pay first month` : `Approve ${t.name}`}</a>
                </article>
              ))}
            </div>

            <div className="hi-calc" data-reveal>
              <div className="hi-calc-in">
                <p className="hi-mono">BUILD YOUR MONTH</p>
                <div className="hi-toggle">
                  <button aria-pressed={tier === 'full'} onClick={() => setTier('full')}>Full Service</button>
                  <button aria-pressed={tier === 'consult'} onClick={() => setTier('consult')}>Consulting</button>
                </div>
                <label>
                  <span>Media spend <strong>{usd(spend)}</strong></span>
                  <input type="range" min={0} max={10000} step={250} value={spend} onChange={e => setSpend(+e.target.value)} />
                  <span className="hi-small">Recommended start: $1,500 to $3,000 a month, paid directly to Meta and Google.</span>
                </label>
                <label>
                  <span>Creative hours <strong>{hours} hrs</strong></span>
                  <input type="range" min={0} max={40} step={1} value={hours} onChange={e => setHours(+e.target.value)} />
                  <span className="hi-small">Editing, design, motion and visualizers. Estimated and approved before work starts.</span>
                </label>
              </div>
              <div className="hi-calc-out">
                {[
                  [`${tier === 'full' ? 'Full Service' : 'Consulting'} retainer`, usd(retainer)],
                  ['Media management, 15%', usd(fee)],
                  ['Creative, ' + hours + ' hrs at $100', usd(creativeCost)],
                ].map(([l, v]) => <div key={l} className="hi-calc-row"><span>{l}</span><span>{v}</span></div>)}
                <div className="hi-calc-row total"><span>Paid to CCD</span><strong>{usd(agency)}</strong></div>
                <div className="hi-calc-row"><span>Media, paid to platforms</span><span>{usd(spend)}</span></div>
                <div className="hi-calc-row grand"><span>All-in monthly</span><strong>{usd(allIn)}</strong></div>
              </div>
            </div>

            <div className="hi-terms" data-reveal>
              <div>
                <h4>Terms</h4>
                <ul>
                  <li>Three-month initial term, then month to month with 30 days notice.</li>
                  <li>Retainer invoiced monthly in advance. First month due at signing.</li>
                  <li>Media billed directly to your ad accounts. The 15% management fee is invoiced monthly on actual spend.</li>
                  <li>Creative billed at $100 an hour against estimates you approve.</li>
                  <li>Switch between tiers at any month boundary.</li>
                </ul>
              </div>
              <div>
                <h4>Not included</h4>
                <ul>
                  <li>Music production, mixing and mastering.</li>
                  <li>Booking agency representation or commission. We build the case; agents and buyers make the offer.</li>
                  <li>Traditional PR campaigns.</li>
                  <li>Film crews, venues and travel for shoots, quoted separately when needed.</li>
                  <li>Media spend itself and third-party tools such as Laylo.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEXT */}
        <section className="hi-section hi-next">
          <div className="hi-wrap">
            <SectionHead n="09" title="Next Steps" strap="From yes to first post in two weeks." />
            <div className="hi-steps" data-reveal>
              {[
                ['Pick a tier', 'Approve Full Service or Consulting below and we send the agreement and first invoice.'],
                ['Kickoff call', 'Ninety minutes on the brand, the catalog, the Here Without You plan and who is on it.'],
                ['Access and archive', 'Admin access to socials and ad accounts, plus every live clip, stem and photo you have.'],
                ['Onboarding questionnaire', 'Past ad history, show history, relationships and goals. Sent after approval.'],
                ['First two weeks', 'Cleanup, brand kit, Laylo live, first Reggae Version episodes in the can.'],
              ].map(([t, b], i) => <article key={t}><span className="hi-step-n">{String(i + 1).padStart(2, '0')}</span><div><h4>{t}</h4><p>{b}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="hi-close">
          <img src={A + 'band-banner.jpg'} alt="Highest Intention on stage in gold light" loading="lazy" />
          <div className="hi-close-shade" />
          <div className="hi-close-body hi-wrap">
            <p className="hi-mono">LET’S GET THE BAND OUT OF THE STUDIO</p>
            <h2>Every night,<br /><span>in front of the right room.</span></h2>
            <div className="hi-close-ctas">
              <a className="hi-btn" href={approveHref('full')}>Approve Full Service, $5,000/mo</a>
              <a className="hi-btn ghost" href={approveHref('consult')}>Approve Consulting, $3,000/mo</a>
            </div>
            <p className="hi-small">Questions first? geoff@crowdcontroldigital.com</p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="hi-about">
          <div className="hi-wrap hi-about-in">
            <div>
              <p className="hi-mono">ABOUT CROWD CONTROL</p>
              <h3>Ten years of breaking through the noise.</h3>
              <p>A 15-person marketing and creative team in Los Angeles, working under the Crowd Control name since 2015. Strategy through execution: social, paid media, email and SMS, creator marketing and creative production. In this genre we have worked with Iration, Dirty Heads and Sublime with Rome. On the booking side, we build the tools agents use to find artists, so we know exactly which numbers they check.</p>
            </div>
            <div className="hi-marquee" aria-label="Select clients">
              <p className="hi-mono">SELECT CLIENTS</p>
              <div className="hi-marquee-track"><div>{[...clients, ...clients].map((c, i) => <span key={i}>{c}</span>)}</div></div>
            </div>
          </div>
          <footer className="hi-foot hi-wrap hi-mono">
            <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width="96" height="27" />
            <span>PREPARED FOR BEN LOWE, HIGHEST INTENTION</span>
            <span>DATA PULLED SEPTEMBER 29, 2026</span>
          </footer>
        </section>
      </main>

      {td !== null && (
        <div className="hi-modal" role="dialog" aria-modal="true" aria-label={teardown[td].title} onClick={() => setTd(null)}>
          <div className="hi-modal-in" onClick={e => e.stopPropagation()}>
            <img src={`${A}teardown/${teardown[td].f}.jpg`} alt="" />
            <div>
              <p className={'hi-mono verdict v-' + teardown[td].verdict}>{teardown[td].verdict === 'worked' ? 'WORKED' : 'FIX'} / {teardown[td].date} / {teardown[td].views}</p>
              <h3>{teardown[td].title}</h3>
              <p>{teardown[td].note}</p>
              <div className="hi-cnav">
                <button onClick={() => setTd((td + teardown.length - 1) % teardown.length)}>Prev</button>
                <span className="hi-mono">{teardown[td].f} / 12</span>
                <button onClick={() => setTd((td + 1) % teardown.length)}>Next</button>
              </div>
              <button className="hi-modal-x" onClick={() => setTd(null)} aria-label="Close">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
