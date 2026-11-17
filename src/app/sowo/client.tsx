"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import type { Copy } from "@/lib/sowo/copy";
import { KPIS, COMPS, TIERS, PHASES, REGIONS, PLATFORMS, SOURCES, type Tier } from "@/lib/sowo/data";
import s from "./sowo.module.css";

const KO_LABEL: Record<string, string> = { "Survival show": "서바이벌 프로그램", "Small / mid agency": "중소 기획사", "ODDWAVE (first act)": "ODDWAVE (첫 그룹)" };
const IMG = (k: string) => `/images/sowo/${k}.webp`;
const usd = (n: number) => "$" + n.toLocaleString("en-US");
const kfmt = (v: number, unit: "k" | "n", ko: boolean) => {
  if (unit === "n") return v.toLocaleString("en-US");
  if (v >= 1000) return ko ? `${(v / 1000).toFixed(v % 1000 ? 1 : 0)}M` : `${(v / 1000).toFixed(v % 1000 ? 1 : 0)}M`;
  return `${v % 1 ? v.toFixed(1) : v}K`;
};
const range = (r: [number, number], unit: "k" | "n", ko: boolean) => `${kfmt(r[0], unit, ko)}–${kfmt(r[1], unit, ko)}`;

/* Fades a block in once it scrolls into view. */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-r]"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add(s.in)); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(s.in); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

function Head({ n, k, title, lead }: { n: string; k: string; title: string; lead?: string }) {
  return (
    <header className={s.head} data-r>
      <div className={s.eyebrow}><b>{n}</b><span>{k}</span></div>
      <h2 className={s.h2}>{title}</h2>
      {lead && <p className={s.lead}>{lead}</p>}
    </header>
  );
}

function Nav({ c }: { c: Copy }) {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState("");
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setProg(Math.min(1, h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)));
      let id = "";
      for (const [sid] of c.nav.items) { const el = document.getElementById(sid); if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) id = sid; }
      setCur(id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [c]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [open]);
  const curLabel = c.nav.items.find(([i]) => i === cur)?.[1];
  const curIdx = c.nav.items.findIndex(([i]) => i === cur);
  return (
    <>
      <nav className={s.nav}>
        <a href="#top" className={s.navMark} aria-label="Transparent Arts and Crowd Control">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.taLogo} src="/brand/TA-LOGO-WHITE.png" alt="Transparent Arts" />
          <i className={s.lockX} aria-hidden="true">×</i>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        </a>
        <button className={s.navProg} onClick={() => setOpen(true)} aria-label={c.cover.program}>
          <span className={s.navNum}>{curIdx >= 0 ? String(curIdx + 1).padStart(2, "0") : "00"}</span>
          <span className={s.navCur}>{curLabel || c.cover.program}</span>
          <span className={s.navBurger} aria-hidden="true"><i /><i /></span>
        </button>
        <div className={s.navRight}>
          <a href={c.altHref} className={s.lang}>{c.altLabel}</a>
          <a href="#close" className={s.navTalk}>{c.nav.talk}</a>
        </div>
        <span className={s.navBar} style={{ transform: `scaleX(${prog})` }} />
      </nav>
      {open && (
        <div className={s.menu} role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className={s.menuIn} onClick={(e) => e.stopPropagation()}>
            <div className={s.menuTop}><span>{c.cover.program}</span><button onClick={() => setOpen(false)} aria-label="Close">×</button></div>
            <ol>
              {c.nav.items.map(([id, label], i) => (
                <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className={id === cur ? s.menuOn : ""}><b>{String(i + 1).padStart(2, "0")}</b>{label}</a></li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}

function Cover({ c }: { c: Copy }) {
  return (
    <section className={s.cover} id="top">
      <div className={s.coverImg}><Image src={IMG("hero")} alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "50% 45%" }} /></div>
      <div className={s.coverShade} />
      <div className={s.coverIn}>
        <div className={s.coverLock}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.coverTa} src="/brand/TA-LOGO-WHITE.png" alt="Transparent Arts" />
          <i aria-hidden="true">×</i>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.coverCc} src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        </div>
        <div className={s.coverEy}>{c.cover.eyebrow}</div>
        <h1 className={s.h1}><span>{c.cover.title1}</span><span className={s.red}>{c.cover.title2}</span></h1>
        <p className={s.coverSub}>{c.cover.sub}</p>
        <dl className={s.coverMeta}>
          {c.cover.meta.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
      <a href="#read" className={s.scrollCue}>{c.cover.scroll}<span aria-hidden="true">↓</span></a>
    </section>
  );
}

function Read({ c }: { c: Copy }) {
  const r = c.read;
  return (
    <section className={s.section} id="read">
      <Head n={r.n} k={r.k} title={r.title} lead={r.lead} />
      <div className={s.three}>
        {r.pts.map(([h, b], i) => (
          <article key={h} data-r className={i === 2 ? s.thesis : ""}>
            <span className={s.mono}>{String(i + 1).padStart(2, "0")}</span>
            <h3>{h}</h3><p>{b}</p>
          </article>
        ))}
      </div>
      <blockquote className={s.quote} data-r>{r.quote}</blockquote>
      <div className={s.team} data-r>
        <div className={s.teamHead}><h3 className={s.h3}>{r.team.k}</h3><p>{r.team.lead}</p></div>
        <div className={s.teamCols}>
          {[r.team.ta, r.team.ccd].map(([h, items], i) => (
            <div key={h as string} className={s.teamCol}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={i === 0 ? s.teamTa : s.teamCc} src={i === 0 ? "/brand/TA-LOGO-WHITE.png" : "/brand/CC-LOGO-2024-WHITE.png"} alt={i === 0 ? "Transparent Arts" : "Crowd Control"} />
              <b>{h as string}</b>
              <ul>{(items as string[]).map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className={s.kpiBill} data-r>
        <div className={s.kpiBillHead}><span>{r.kpiTitle}</span><span>{r.kpiFeb}</span><span>{r.kpiMay}</span></div>
        {KPIS.map((k) => (
          <div key={k.id} className={s.kpiBillRow}>
            <span>{c.locale === "ko" ? k.ko : k.en}</span>
            <span>{k.feb ? range(k.feb.target, k.unit, c.locale === "ko") : "–"}</span>
            <span>{range(k.may.target, k.unit, c.locale === "ko")}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gap({ c }: { c: Copy }) {
  const g = c.gap;
  const [t, setT] = useState<0 | 1>(1);
  const ko = c.locale === "ko";
  return (
    <section className={s.section} id="gap">
      <Head n={g.n} k={g.k} title={g.title} lead={g.lead} />
      <div className={s.tabs} role="tablist" data-r>
        {g.tabs.map((x, i) => <button key={x} role="tab" aria-selected={t === i} className={t === i ? s.tabOn : ""} onClick={() => setT(i as 0 | 1)}>{x}</button>)}
      </div>
      <div className={s.legend} data-r>
        <span><i className={s.lgO} />{g.legend[0]}</span><span><i className={s.lgT} />{g.legend[1]}</span><span><i className={s.lgP} />{g.legend[2]}</span>
      </div>
      <div className={s.gapRows} data-r>
        {KPIS.filter((k) => (t === 0 ? !!k.feb : true)).map((k) => {
          const d = t === 0 ? k.feb! : k.may;
          const max = Math.max(d.target[1], d.organic[1], d.plan[1]) * 1.08;
          const pct = (v: number) => `${(v / max) * 100}%`;
          return (
            <div key={k.id + t} className={s.gapRow}>
              <div className={s.gapLabel}>
                <b>{ko ? k.ko : k.en}</b>
                <span>{range(d.organic, k.unit, ko)} <em>→</em> <strong>{range(d.target, k.unit, ko)}</strong></span>
              </div>
              <div className={s.track}>
                <span className={s.barO} style={{ left: 0, width: pct(d.organic[1]) }}><span style={{ width: `${(d.organic[0] / d.organic[1]) * 100}%` }} /></span>
                <span className={s.barT} style={{ left: pct(d.target[0]), width: `calc(${pct(d.target[1])} - ${pct(d.target[0])})` }} />
                <span className={s.barP} style={{ left: pct(d.plan[0]), width: `calc(${pct(d.plan[1])} - ${pct(d.plan[0])})` }} />
              </div>
              <div className={s.gapPlan}>{g.legend[2]}: <b>{range(d.plan, k.unit, ko)}</b></div>
            </div>
          );
        })}
      </div>
      <p className={s.verdict} data-r>{g.verdict}</p>
      <p className={s.note} data-r>{g.note}</p>
    </section>
  );
}

function Dossier({ d, tone }: { d: Copy["cast"]["lng"]; tone: "a" | "b" }) {
  return (
    <article className={`${s.dossier} ${tone === "b" ? s.dossierB : ""}`} data-r>
      <div className={s.dosHead}><h3>{d.name}</h3><span>{d.label}</span></div>
      <div className={s.dosStats}>{d.stats.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
      <p>{d.body}</p>
      <div className={s.dosCopy}><span className={s.ok}>{d.copy}</span><span className={s.no}>{d.cant}</span></div>
    </article>
  );
}

function Cast({ c }: { c: Copy }) {
  const k = c.cast;
  const [f, setF] = useState("all");
  const ko = c.locale === "ko";
  const lmin = Math.log10(1000), lmax = Math.log10(2000000);
  const pos = (v: number) => ((Math.log10(Math.max(v, 1000)) - lmin) / (lmax - lmin)) * 100;
  const list = COMPS.filter((x) => f === "all" || x.tag === f);
  return (
    <section className={s.section} id="cast">
      <Head n={k.n} k={k.k} title={k.title} lead={k.lead} />
      <div className={s.two}><Dossier d={k.lng} tone="a" /><Dossier d={k.cor} tone="b" /></div>
      <div className={s.chart} data-r>
        <div className={s.chartHead}><h3>{k.chartTitle}</h3><p>{k.chartSub}</p></div>
        <div className={s.chips}>{k.filters.map(([id, l]) => <button key={id} onClick={() => setF(id)} className={f === id ? s.chipOn : ""}>{l}</button>)}</div>
        <div className={s.logWrap}>
          <div className={s.bandLayer}><div className={s.band} style={{ left: `${pos(3000)}%`, width: `${pos(8000) - pos(3000)}%` }}><span>{k.band}</span></div></div>
          {list.map((x) => (
            <div key={x.name} className={`${s.logRow} ${x.name === "LNGSHOT" || x.name === "CORTIS" ? s.logHi : ""}`}>
              <div className={s.logName}><b>{x.name}</b><span>{ko ? (KO_LABEL[x.label] ?? x.label) : x.label} · {x.date}</span></div>
              <div className={s.logTrack}><span style={{ width: `${pos(x.sales)}%` }} /></div>
              <div className={s.logVal}>{x.sales.toLocaleString("en-US")}<em>{ko ? x.note.ko : x.note.en}</em></div>
            </div>
          ))}
          <div className={s.logAxis}>{[1000, 10000, 100000, 1000000].map((v) => <span key={v} style={{ left: `${pos(v)}%` }}>{v >= 1000000 ? "1M" : v / 1000 + "K"}</span>)}</div>
        </div>
      </div>
      <p className={s.verdict} data-r>{k.takeaway}</p>
    </section>
  );
}

function Spine({ c }: { c: Copy }) {
  const p = c.spine;
  return (
    <section className={s.spine} id="spine">
      <div className={s.spineImg}><Image src={IMG("instruments")} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "45% 50%" }} /></div>
      <div className={s.spineShade} />
      <div className={s.section}>
        <Head n={p.n} k={p.k} title={p.title} lead={p.lead} />
        <div className={s.members}>
          {p.members.map(([n, inst, d], i) => (
            <div key={n} className={s.member} data-r>
              <span className={s.mono}>{String(i + 1).padStart(2, "0")}</span>
              <b>{n}</b><em>{inst}</em><p>{d}</p>
            </div>
          ))}
        </div>
        <div className={s.pillars}>
          {p.pillars.map(([h, b]) => <div key={h} data-r><h3>{h}</h3><p>{b}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function Acts({ c }: { c: Copy }) {
  const a = c.acts;
  const [open, setOpen] = useState("p1");
  const total = PHASES.reduce((x, p) => x + p.media, 0);
  return (
    <section className={s.section} id="acts">
      <Head n={a.n} k={a.k} title={a.title} lead={a.lead} />
      <div className={s.strip} data-r>
        {a.list.map((act) => {
          const ph = PHASES.find((p) => p.id === act.id)!;
          const days = (new Date(ph.to).getTime() - new Date(ph.from).getTime()) / 864e5 + 1;
          return (
            <button key={act.id} style={{ flexGrow: days }} className={`${s.stripSeg} ${open === act.id ? s.stripOn : ""}`} onClick={() => setOpen(act.id)}>
              <b>{act.t.split(" · ")[0]}</b><span>{act.d}</span><em>{usd(ph.media)}</em>
            </button>
          );
        })}
      </div>
      <p className={s.stripNote} data-r>{a.media}: <b>{usd(total)}</b></p>
      <div className={s.acts}>
        {a.list.map((act) => (
          <div key={act.id} className={`${s.act} ${open === act.id ? s.actOpen : ""}`} data-r>
            <button className={s.actHead} onClick={() => setOpen(open === act.id ? "" : act.id)} aria-expanded={open === act.id}>
              <span className={s.actT}>{act.t}</span><span className={s.actD}>{act.d}</span><span className={s.actX} aria-hidden="true">{open === act.id ? "−" : "+"}</span>
            </button>
            {open === act.id && (
              <div className={s.actBody}>
                <p className={s.actGoal}>{act.goal}</p>
                <div className={s.actGrid}>
                  <div className={s.actGridHead}><span>{a.head[0]}</span><span>{a.head[1]}</span></div>
                  {act.rows.map(([m, w]) => <div key={m} className={s.actRow}><span>{m}</span><span>{w}</span></div>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Moves({ c }: { c: Copy }) {
  const m = c.moves;
  return (
    <section className={s.section} id="moves">
      <Head n={m.n} k={m.k} title={m.title} lead={m.lead} />
      <ol className={s.moves}>
        {m.list.map(([h, b], i) => (
          <li key={h} data-r><span className={s.moveN}>{i + 1}</span><div><h3>{h}</h3><p>{b}</p></div></li>
        ))}
      </ol>
    </section>
  );
}

function MathSec({ c }: { c: Copy }) {
  const m = c.math;
  return (
    <section className={s.section} id="math">
      <Head n={m.n} k={m.k} title={m.title} lead={m.lead} />
      <h3 className={s.h3} data-r>{m.benchTitle}</h3>
      <div className={s.bench}>
        {m.bench.map(([l, v, n]) => <div key={l} data-r><span>{l}</span><b>{v}</b><em>{n}</em></div>)}
      </div>
      <h3 className={s.h3} data-r>{m.tableTitle}</h3>
      <div className={s.table} data-r>
        <div className={`${s.tr} ${s.th}`}>{m.th.map((h) => <span key={h}>{h}</span>)}</div>
        {m.rows.map((r) => (
          <div key={r[0]} className={s.tr}>{r.map((v, i) => <span key={i} data-l={m.th[i]} className={!v ? s.empty : ""}>{v}</span>)}</div>
        ))}
        <div className={`${s.tr} ${s.tot}`}>{m.total.map((v, i) => <span key={i} data-l={m.th[i]} className={!v ? s.empty : ""}>{v}</span>)}</div>
      </div>
      <p className={s.note} data-r>{m.assumptions}</p>
      <div className={s.epMath} data-r>
        <h3 className={s.h3}>{m.epTitle}</h3>
        <div className={s.epRow}>{m.ep.map((x, i) => <span key={x} className={i === m.ep.length - 1 ? s.epEnd : ""}>{x}</span>)}</div>
        <p>{m.epNote}</p>
      </div>
    </section>
  );
}

function World({ c }: { c: Copy }) {
  const w = c.world;
  const [r, setR] = useState<keyof typeof w.regions>("eu");
  return (
    <section className={s.section} id="world">
      <Head n={w.n} k={w.k} title={w.title} lead={w.lead} />
      <div className={s.regionBar} data-r>
        {REGIONS.map((x) => (
          <button key={x.id} style={{ flexGrow: x.share }} onClick={() => setR(x.id as keyof typeof w.regions)} className={`${s.reg} ${r === x.id ? s.regOn : ""}`}>
            <b>{x.share}%</b><span>{w.regions[x.id as keyof typeof w.regions]}</span>
          </button>
        ))}
      </div>
      <div className={s.regNote} data-r><b>{w.regions[r]}</b><p>{w.regionNotes[r]}</p></div>
      <div className={s.worldGrid}>
        <div data-r>
          <h3 className={s.h3}>{w.platTitle}</h3>
          <div className={s.plats}>
            {PLATFORMS.map((p) => <div key={p.id}><span>{p.id}</span><i><em style={{ width: `${(p.share / 30) * 100}%` }} /></i><b>{p.share}%</b></div>)}
          </div>
        </div>
        <div data-r>
          <h3 className={s.h3}>{w.euTitle}</h3>
          <ol className={s.euSteps}>{w.eu.map(([h, b], i) => <li key={h}><span>{String(i + 1).padStart(2, "0")}</span><div><b>{h}</b><p>{b}</p></div></li>)}</ol>
        </div>
      </div>
      <figure className={s.london} data-r>
        <Image src={IMG("london")} alt="" fill sizes="(max-width: 900px) 100vw, 1200px" style={{ objectFit: "cover", objectPosition: "30% 50%" }} />
        <figcaption>{w.pressHook}</figcaption>
      </figure>
    </section>
  );
}

function Creative({ c }: { c: Copy }) {
  const k = c.creative;
  const [box, setBox] = useState<number | null>(null);
  useEffect(() => {
    if (box === null) return;
    document.body.style.overflow = "hidden";
    const f = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBox(null);
      if (e.key === "ArrowRight") setBox((b) => (b === null ? b : (b + 1) % k.items.length));
      if (e.key === "ArrowLeft") setBox((b) => (b === null ? b : (b - 1 + k.items.length) % k.items.length));
    };
    window.addEventListener("keydown", f);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", f); };
  }, [box, k.items.length]);
  const order = ["countdown", "subway", "london", "phone", "desk", "corridor"];
  const span: Record<string, string> = { countdown: s.g2, subway: s.g4, london: s.g4, phone: s.g2, desk: s.g3, corridor: s.g3 };
  const tall = (id: string) => id === "countdown" || id === "phone";
  const items = order.map((id) => k.items.findIndex((x) => x[0] === id));
  return (
    <section className={s.section} id="creative">
      <Head n={k.n} k={k.k} title={k.title} lead={k.lead} />
      <div className={s.gallery}>
        {items.map((i) => {
          const [id, t, d] = k.items[i];
          return (
            <button key={id} className={`${s.tile} ${span[id]} ${s["o_" + id] ?? ""}`} onClick={() => setBox(i)} data-r>
              <span className={`${s.tileImg} ${tall(id) ? s.tileTall : s.tileWide}`}>
                <Image src={IMG(id)} alt={t} fill sizes="(max-width: 700px) 100vw, 60vw" style={{ objectFit: "cover" }} />
                <span className={s.tileTag}>{k.label}</span>
              </span>
              <span className={s.tileCap}><b>{t}</b><em>{d}</em></span>
            </button>
          );
        })}
      </div>
      {box !== null && (
        <div className={s.lightbox} role="dialog" aria-modal="true" onClick={() => setBox(null)}>
          <button className={s.lbClose} onClick={() => setBox(null)}>{k.close} ×</button>
          <div className={s.lbImg} onClick={(e) => e.stopPropagation()}>
            <Image src={IMG(k.items[box][0])} alt={k.items[box][1]} fill sizes="100vw" style={{ objectFit: "contain" }} />
          </div>
          <div className={s.lbCap} onClick={(e) => e.stopPropagation()}>
            <b>{k.items[box][1]}</b><span>{k.items[box][2]}</span>
            <div className={s.lbNav}>
              <button onClick={() => setBox((box - 1 + k.items.length) % k.items.length)} aria-label="Previous">←</button>
              <span>{box + 1} / {k.items.length}</span>
              <button onClick={() => setBox((box + 1) % k.items.length)} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function verdict(out: [number, number], target: [number, number]): "below" | "low" | "mid" | "high" {
  const mid = (out[0] + out[1]) / 2;
  if (mid < target[0]) return "below";
  if (mid >= target[1]) return "high";
  if (mid < target[0] + (target[1] - target[0]) / 3) return "low";
  return "mid";
}

function Invest({ c }: { c: Copy }) {
  const v = c.invest;
  const [id, setId] = useState<Tier["id"]>("rec");
  const tier = TIERS.find((x) => x.id === id)!;
  const ko = c.locale === "ko";
  const lineKeys = ["media", "creators", "offline", "mgmt", "retainer"] as const;
  const mail = useMemo(() => {
    const name = v.names[id];
    const subj = ko ? `SOWØ | ${name} 투자안 (${usd(tier.total)}) 승인` : `SOWØ | Approve ${name} (${usd(tier.total)})`;
    const body = ko
      ? `Crowd Control Digital 팀께,\n\nSOWØ 데뷔 플랜의 ${name} 투자안(${usd(tier.total)}, 12월 1일 ~ EP 발매 주)을 진행하고자 합니다.\n\n제안서: https://proposal.crowdcontroldigital.com/sowo-ko\n\n계약, 광고 계정 세팅, 12월 테스트 일정에 대해 안내 부탁드립니다.\n\n이름 / 소속:\n`
      : `Hello Crowd Control Digital,\n\nWe'd like to move forward with the ${name} plan for the SOWØ debut (${usd(tier.total)} all-in, Dec 1 to the EP week).\n\nProposal: https://proposal.crowdcontroldigital.com/sowo\n\nPlease send the agreement, the ad account setup list and the December test plan.\n\nName / team:\n`;
    return `mailto:hello@crowdcontroldigital.com?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
  }, [id, ko, tier.total, v.names]);
  return (
    <section className={s.section} id="invest">
      <Head n={v.n} k={v.k} title={v.title} lead={v.lead} />
      <div className={s.tiers} data-r>
        {TIERS.map((t) => (
          <button key={t.id} onClick={() => setId(t.id)} className={`${s.tierBtn} ${id === t.id ? s.tierOn : ""}`}>
            <span>{v.names[t.id]}</span><b>{usd(t.total)}</b><em>{v.tags[t.id]}</em>
          </button>
        ))}
      </div>
      <div className={s.investGrid}>
        <div className={s.breakdown} data-r>
          <div className={s.stack}>{lineKeys.map((k) => <span key={k} className={s["st_" + k]} style={{ width: `${(tier.lines[k] / tier.total) * 100}%` }} />)}</div>
          {lineKeys.map((k) => (
            <div key={k} className={s.line}>
              <i className={s["st_" + k]} />
              <span>{v.lines[k]}{k === "retainer" && <em>{v.feeNote}</em>}{k === "mgmt" && <em>{v.mgmtNote}</em>}</span>
              <b>{usd(tier.lines[k])}</b>
            </div>
          ))}
          <div className={`${s.line} ${s.lineTot}`}><span>{v.allIn}</span><b>{usd(tier.total)}</b></div>
          <a className={s.btn} href={mail}>{v.approve} <span aria-hidden="true">→</span></a>
          <p className={s.small}>{v.approveNote}</p>
        </div>
        <div className={s.outs} data-r>
          <div className={`${s.outRow} ${s.outHead}`}>{v.th.map((h, i) => <span key={i}>{h}</span>)}</div>
          {KPIS.map((k) => {
            const out = tier.out[k.id];
            const vd = verdict(out, k.may.target);
            return (
              <div key={k.id} className={s.outRow}>
                <span>{k.id === "ps" ? (ko ? "싱글 첫 달 스트리밍" : "Single streams, month 1") : ko ? k.ko : k.en}</span>
                <span>{range(k.may.target, k.unit, ko)}</span>
                <span><b>{range(out, k.unit, ko)}</b></span>
                <span className={`${s.pill} ${s["v_" + vd]}`}>{v.verdicts[vd]}</span>
              </div>
            );
          })}
        </div>
      </div>
      <ul className={s.terms} data-r>{v.terms.map((t) => <li key={t}>{t}</li>)}</ul>
    </section>
  );
}

function Guard({ c }: { c: Copy }) {
  const g = c.guard;
  return (
    <section className={s.section} id="guard">
      <Head n={g.n} k={g.k} title={g.title} lead={g.lead} />
      <div className={s.guards}>{g.list.map(([h, b], i) => <div key={h} data-r><span className={s.mono}>{String(i + 1).padStart(2, "0")}</span><h3>{h}</h3><p>{b}</p></div>)}</div>
      <div className={s.asks} data-r>
        <h3 className={s.h3}>{g.ask}</h3>
        <ol>{g.asks.map((a) => <li key={a}>{a}</li>)}</ol>
      </div>
    </section>
  );
}

function Us({ c }: { c: Copy }) {
  const u = c.us;
  return (
    <section className={s.section} id="us">
      <div className={s.eyebrow} data-r><b>{u.n}</b><span>{u.k}</span></div>
      <div className={s.usPair}>
        <div data-r>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.usTa} src="/brand/TA-LOGO-WHITE.png" alt="Transparent Arts" />
          <p className={s.usLine}>{u.ta}</p>
        </div>
        <div data-r>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.usMark} src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
          <p className={s.usLine}>{u.line}</p>
        </div>
      </div>
      <div className={s.usK} data-r>{u.ccdK} · {u.servicesK}</div>
      <ol className={s.services}>{u.services.map(([t, d], i) => <li key={t} data-r><span>{String(i + 1).padStart(2, "0")}</span><b>{t}</b><p>{d}</p></li>)}</ol>
      <div className={s.clients} data-r>
        <div><div className={s.usK}>{u.ccdK} · {u.musicK}</div><p>{u.music.join(" · ")}</p></div>
        <div><div className={s.usK}>{u.eventsK}</div><p>{u.events.join(" · ")}</p></div>
        <div><div className={s.usK}>{u.brandsK}</div><p>{u.brands.join(" · ")}</p></div>
      </div>
    </section>
  );
}

function Close({ c }: { c: Copy }) {
  const k = c.close;
  return (
    <section className={s.close} id="close">
      <div className={s.closeImg}><Image src={IMG("corridor")} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "50% 40%" }} /></div>
      <div className={s.closeShade} />
      <div className={s.closeIn}>
        <div className={s.eyebrow}><b>Ø</b><span>{k.k}</span></div>
        <h2 className={s.closeTitle}>{k.title}</h2>
        <p>{k.body}</p>
        <a className={s.btn} href={`mailto:${k.email}?subject=${encodeURIComponent("SOWØ × Crowd Control Digital")}`}>{k.cta} <span aria-hidden="true">→</span></a>
        <a className={s.closeMail} href={`mailto:${k.email}`}>{k.email}</a>
      </div>
    </section>
  );
}

export default function SowoClient({ c }: { c: Copy }) {
  useReveal();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className={s.page} ref={ref} lang={c.locale}>
      <Nav c={c} />
      <Cover c={c} />
      <Read c={c} />
      <Gap c={c} />
      <Cast c={c} />
      <Spine c={c} />
      <Acts c={c} />
      <Moves c={c} />
      <MathSec c={c} />
      <World c={c} />
      <Creative c={c} />
      <Invest c={c} />
      <Guard c={c} />
      <Us c={c} />
      <Close c={c} />
      <footer className={s.foot}>
        <details className={s.sources}>
          <summary>{c.foot.sources}</summary>
          <ol>{SOURCES.map((x) => <li key={x}>{x}</li>)}</ol>
          <p>{c.foot.note}</p>
        </details>
        <div className={s.footRow}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={s.footTa} src="/brand/TA-LOGO-WHITE.png" alt="Transparent Arts" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
          <span>{c.foot.prepared}</span><span>{c.foot.date}</span>
        </div>
      </footer>
    </div>
  );
}
