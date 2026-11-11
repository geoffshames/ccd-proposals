"use client";

/**
 * BE:FIRST US clipping proposal, prepared for BMSG.
 * One idea: the songs crossed the Pacific before the group did. The page is that
 * flight, Tokyo to the American feed, and the route is the table of contents.
 * CCD brand system: black, white, red #FD3737. N27 display, Work Sans, Geist Mono.
 * Artwork is original and faceless; no member likeness is generated anywhere.
 */

import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import s from "./be.module.css";
import { AGENCY, CROSSING, FEED, FOOT, HERO, MENU, META, MOMENTS, NEXT, PROGRAM, STOPS, TOKYO, type L, type Lang } from "@/lib/be-first/content";
import { DOSSIERS, type DossierId } from "@/lib/be-first/dossiers";

const IMG = "/images/be-first";
const F1 = 73;
const TOTAL = 146;

/* ------------------------------------------------------------------ utils */

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const compact = (n: number) => (n >= 1e6 ? `${(n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.?0+$/, "")}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1).replace(/\.0$/, "")}K` : `${n}`);
const full = (n: number) => n.toLocaleString("en-US");
const yen = (n: number) => `¥${n.toLocaleString("en-US")}`;
const usd = (n: number) => `$${Math.round(n).toLocaleString("en-US")}`;

function useInView<T extends HTMLElement>(margin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, seen]);
  return [ref, seen] as const;
}

function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: "div" | "section" | "li" }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={`${s.reveal} ${seen ? s.in : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

type Cur = "JPY" | "USD";
type Post = { id: string; h: string; v: number };
const vid = (u: string) => u.match(/video\/(\d+)/)?.[1] ?? "";

function PostThumb({ post, onPlay, lang, wide = false }: { post: Post; onPlay: (p: Post) => void; lang: Lang; wide?: boolean }) {
  return (
    <button type="button" className={`${s.post} ${wide ? s.postWide : ""}`} onClick={() => onPlay(post)} aria-label={`${lang === "ja" ? "再生" : "Play"} ${post.h}`}>
      <span className={s.postImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/posts/${post.id}.webp`} alt="" loading="lazy" />
        <i aria-hidden />
      </span>
      <span className={s.postMeta}>
        <b>{compact(post.v)}</b>
        <em>{post.h}</em>
      </span>
    </button>
  );
}

function PostBox({ post, lang, onClose }: { post: Post; lang: Lang; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
  const href = `https://www.tiktok.com/${post.h}/video/${post.id}`;
  return (
    <div className={s.postBox} role="dialog" aria-modal="true" aria-label={post.h} onClick={onClose}>
      <div className={s.postBoxInner} onClick={(e) => e.stopPropagation()}>
        <div className={s.postBoxBar}>
          <span>
            {post.h} <b>{compact(post.v)}</b>
          </span>
          <button ref={closeRef} type="button" className={s.postBoxClose} onClick={onClose}>
            {lang === "ja" ? "閉じる" : "Close"} <span aria-hidden>×</span>
          </button>
        </div>
        <div className={s.postBoxFrame} style={{ backgroundImage: `url(${IMG}/posts/${post.id}.webp)` }}>
          <iframe
            src={`https://www.tiktok.com/player/v1/${post.id}?autoplay=1&rel=0&description=1&music_info=1&native_context_menu=0`}
            title={`${post.h} on TikTok`}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <a className={s.postBoxLink} href={href} target="_blank" rel="noreferrer noopener">
          {lang === "ja" ? "TikTokで開く" : "Open on TikTok"} <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ scroll film */

function frameSrc(i: number, portrait: boolean) {
  const first = i < F1;
  const n = String(first ? i + 1 : i - F1 + 1).padStart(3, "0");
  return `${IMG}/${first ? "f1" : "f2"}${portrait ? "p" : ""}/${n}.webp`;
}

function ScrollFilm({ from, to, vh, poster, children, id }: { from: number; to: number; vh: number; poster: string; children: (p: number) => ReactNode; id?: string }) {
  const wrap = useRef<HTMLDivElement | null>(null);
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const frames = useRef<(HTMLImageElement | null)[]>([]);
  const drawn = useRef(-1);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = wrap.current;
    const cv = canvas.current;
    if (!el || !cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const portrait = window.matchMedia("(max-aspect-ratio: 4/5)").matches;
    const count = to - from + 1;
    frames.current = new Array(count).fill(null);
    let alive = true;
    let started = false;
    let raf = 0;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = cv.getBoundingClientRect();
      cv.width = Math.round(r.width * dpr);
      cv.height = Math.round(r.height * dpr);
      drawn.current = -1;
    };

    const draw = (target: number) => {
      let i = target;
      while (i >= 0 && !frames.current[i]) i--;
      if (i < 0) {
        i = target;
        while (i < count && !frames.current[i]) i++;
        if (i >= count) return;
      }
      if (i === drawn.current) return;
      const im = frames.current[i]!;
      const cw = cv.width;
      const ch = cv.height;
      const k = Math.max(cw / im.naturalWidth, ch / im.naturalHeight);
      const w = im.naturalWidth * k;
      const h = im.naturalHeight * k;
      ctx.drawImage(im, (cw - w) / 2, (ch - h) / 2, w, h);
      drawn.current = i;
    };

    const progress = () => {
      const r = el.getBoundingClientRect();
      const span = r.height - window.innerHeight;
      return span > 0 ? clamp(-r.top / span) : 0;
    };

    const tick = () => {
      raf = 0;
      const pr = progress();
      setP((old) => (Math.abs(old - pr) > 0.004 || pr === 0 || pr === 1 ? pr : old));
      draw(Math.round(pr * (count - 1)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const load = () => {
      if (started) return;
      started = true;
      // load a sparse pass first so any scroll position has something close, then fill in
      const order: number[] = [];
      for (const step of [8, 4, 2, 1]) for (let i = 0; i < count; i += step) if (!order.includes(i)) order.push(i);
      let next = 0;
      const pump = () => {
        if (!alive || next >= order.length) return;
        const i = order[next++];
        const im = new Image();
        im.decoding = "async";
        im.onload = () => {
          if (!alive) return;
          frames.current[i] = im;
          drawn.current = -1;
          draw(Math.round(progress() * (count - 1)));
          pump();
        };
        im.onerror = pump;
        im.src = frameSrc(from + i, portrait);
      };
      for (let c = 0; c < 4; c++) pump();
    };

    size();
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) load();
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => {
      size();
      onScroll();
    };
    window.addEventListener("resize", onResize);
    tick();
    return () => {
      alive = false;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [from, to]);

  return (
    <div ref={wrap} id={id} className={s.film} style={{ height: `${vh}svh` }}>
      <div className={s.filmStage}>
        <div className={s.filmPoster} style={{ backgroundImage: `url(${poster})` }} />
        <canvas ref={canvas} className={s.filmCanvas} aria-hidden />
        <div className={s.filmShade} />
        {children(p)}
      </div>
    </div>
  );
}

const band = (p: number, a: number, b: number, edge = 0.035) => clamp(Math.min((p - a) / edge, (b - p) / edge));

/* ----------------------------------------------------------------- pieces */

function Head({ n, stop, title, strap }: { n: string; stop: string; title: string; strap: string }) {
  return (
    <Reveal className={s.head}>
      <div className={s.kicker}>
        <span className={s.kn}>{n}</span>
        <span className={s.kline} />
        <span>{stop}</span>
      </div>
      <h2 className={s.h2}>{title}</h2>
      <p className={s.strap}>{strap}</p>
    </Reveal>
  );
}

function Bar({ pct, tone = "white", label }: { pct: number; tone?: "white" | "red" | "dim" | "outline"; label?: string }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={s.barTrack} role="img" aria-label={label}>
      <div className={`${s.barFill} ${s[`tone_${tone}`]}`} style={{ width: seen ? `${Math.max(pct, 1.5)}%` : "0%" }} />
    </div>
  );
}

function PortalButton({ label, onOpen }: { label: string; onOpen: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  return (
    <button type="button" className={s.portalBtn} onClick={onOpen}>
      <span className={s.portalDot} aria-hidden />
      <span>{label}</span>
      <span className={s.portalArrow} aria-hidden>
        →
      </span>
    </button>
  );
}

/** Six beams stand in for the six members in every mockup. No likeness, ever. */
function Beams({ dim = false }: { dim?: boolean }) {
  return (
    <div className={`${s.beams} ${dim ? s.beamsDim : ""}`} aria-hidden>
      {Array.from({ length: 6 }).map((_, i) => (
        <i key={i} />
      ))}
    </div>
  );
}

function PhoneMock({ id, caption }: { id: string; caption: string }) {
  return (
    <div className={s.phone} data-kind={id}>
      <div className={s.phoneScreen}>
        {id === "vertical" && <Beams />}
        {id === "ranking" && (
          <div className={s.mockRank}>
            {[1, 2, 3].map((r) => (
              <div key={r}>
                <b>{r}</b>
                <span>
                  <i />
                  <i className={s.guest} />
                </span>
              </div>
            ))}
          </div>
        )}
        {id === "pov" && (
          <>
            <Beams dim />
            <div className={s.mockCrowd} />
          </>
        )}
        {id === "dance" && (
          <>
            <Beams />
            <div className={s.mockCounts}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <b key={n} className={n === 3 ? s.mockCountOn : ""}>
                  {n}
                </b>
              ))}
            </div>
          </>
        )}
        {id === "edit" && (
          <div className={s.mockEdit}>
            <span />
            <span />
            <span />
            <span className={s.mockEditLast}>
              <Beams />
            </span>
          </div>
        )}
        {id === "vocal" && (
          <>
            <div className={s.mockOne} />
            <div className={s.mockWave}>
              {Array.from({ length: 22 }).map((_, i) => (
                <i key={i} style={{ height: `${18 + Math.abs(Math.sin(i * 1.3)) * 70}%` }} />
              ))}
            </div>
          </>
        )}
        <div className={s.phoneCaption}>{caption}</div>
        <div className={s.phoneSound}>
          <span className={s.phoneDisc} />
          BE:FIRST
        </div>
        <div className={s.phoneAd}>#ad</div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- dossier */

function Dossier({ id, origin, lang, onClose }: { id: DossierId; origin: { x: number; y: number }; lang: Lang; onClose: () => void }) {
  const d = DOSSIERS[id];
  const t = (l: L) => l[lang];
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const r = requestAnimationFrame(() => setOpen(true));
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      cancelAnimationFrame(r);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className={`${s.dossier} ${open ? s.dossierOpen : ""} ${lang === "ja" ? s.ja : ""}`}
      style={{ "--ox": `${origin.x}px`, "--oy": `${origin.y}px` } as CSSProperties}
      role="dialog"
      aria-modal="true"
      aria-label={t(d.title)}
    >
      <div className={s.dossierBar}>
        <span className={s.dossierTag}>
          {lang === "ja" ? "資料" : "Dossier"} {d.no}
        </span>
        <button ref={closeRef} type="button" className={s.dossierClose} onClick={onClose}>
          {lang === "ja" ? "閉じる" : "Back to the flight"} <span aria-hidden>×</span>
        </button>
      </div>
      <div className={s.dossierBody}>
        <h2 className={s.dossierTitle}>{t(d.title)}</h2>
        <p className={s.dossierStrap}>{t(d.strap)}</p>
        {d.blocks.map((b, i) => {
          if (b.kind === "h") return <h3 key={i}>{t(b.text)}</h3>;
          if (b.kind === "p") return <p key={i}>{t(b.text)}</p>;
          if (b.kind === "list")
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{t(it)}</li>
                ))}
              </ul>
            );
          if (b.kind === "table")
            return (
              <div key={i} className={s.dTable}>
                <div className={s.dRow} data-head>
                  {b.head.map((h, j) => (
                    <span key={j}>{t(h)}</span>
                  ))}
                </div>
                {b.rows.map((r, j) => (
                  <div key={j} className={s.dRow}>
                    {r.map((c, k) => (
                      <span key={k} data-label={t(b.head[k])}>
                        {typeof c === "string" ? c : t(c)}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            );
          return (
            <div key={i} className={s.dLinks}>
              {b.items.map((it) => (
                <a key={it.url} href={it.url} target="_blank" rel="noreferrer noopener">
                  {t(it.label)} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- page */

export default function BeFirstClient({ initialLang }: { initialLang: Lang | null }) {
  const [lang, setLang] = useState<Lang>(initialLang ?? "en");
  const t = useCallback((l: L) => l[lang], [lang]);
  const [active, setActive] = useState(0);
  const [scrollP, setScrollP] = useState(0);
  const [dossier, setDossier] = useState<{ id: DossierId; origin: { x: number; y: number } } | null>(null);
  const [cur, setCur] = useState<Cur>("JPY");
  const [post, setPost] = useState<Post | null>(null);
  const closePost = useCallback(() => setPost(null), []);
  const money = (n: number) => (cur === "JPY" ? yen(n) : usd(n / META.fx));
  const alt = (n: number) => (cur === "JPY" ? usd(n / META.fx) : yen(n));

  useEffect(() => {
    if (!initialLang && typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("ja")) setLang("ja");
  }, [initialLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const pick = (l: Lang) => {
    setLang(l);
    try {
      const u = new URL(window.location.href);
      u.searchParams.set("lang", l);
      window.history.replaceState(null, "", u.toString());
    } catch {}
  };

  useEffect(() => {
    let raf = 0;
    const run = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollP(max > 0 ? clamp(window.scrollY / max) : 0);
      let cur = 0;
      STOPS.forEach((st, i) => {
        const el = document.getElementById(st.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = i;
      });
      setActive(cur);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(run);
    };
    run();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const openDossier = (id: DossierId) => (e: React.MouseEvent<HTMLButtonElement>) => setDossier({ id, origin: { x: e.clientX, y: e.clientY } });
  const closeDossier = useCallback(() => setDossier(null), []);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className={`${s.root} ${lang === "ja" ? s.ja : ""}`}>
      {/* ---------------------------------------------------------- nav */}
      <header className={s.nav}>
        <a className={s.navLogo} href="https://crowdcontroldigital.com" target="_blank" rel="noreferrer noopener" aria-label="Crowd Control Digital">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
        </a>
        <nav className={s.route} aria-label={lang === "ja" ? "目次" : "Route"}>
          {STOPS.map((st, i) => (
            <button key={st.id} type="button" className={`${s.stop} ${i === active ? s.stopOn : ""} ${i < active ? s.stopDone : ""}`} onClick={() => go(st.id)}>
              <i aria-hidden />
              <span>{t(st.label)}</span>
            </button>
          ))}
        </nav>
        <div className={s.navNow} aria-hidden>
          <i />
          {t(STOPS[active].label)}
        </div>
        <div className={s.lang} role="group" aria-label="Language">
          <button type="button" className={lang === "en" ? s.langOn : ""} onClick={() => pick("en")} aria-pressed={lang === "en"}>
            EN
          </button>
          <button type="button" className={lang === "ja" ? s.langOn : ""} onClick={() => pick("ja")} aria-pressed={lang === "ja"}>
            日本語
          </button>
        </div>
        <div className={s.navProgress} style={{ transform: `scaleX(${scrollP})` }} />
      </header>

      {/* --------------------------------------------------------- hero */}
      <section className={s.heroStage}>
        <div className={s.heroBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/k1.jpg`} alt="" />
        </div>
        <div className={s.filmShade} />
        <div className={s.hero}>
          <div className={s.heroTop}>
            <span>{t(HERO.eyebrow)}</span>
            <span>{t(HERO.forWhom)}</span>
            <span>{t(META.date)}</span>
          </div>
          <h1 className={s.heroTitle}>BE:FIRST</h1>
          <p className={s.heroStrap}>{t(HERO.strap)}</p>
          <div className={s.heroBy}>{t(HERO.by)}</div>
          <div className={s.heroScroll}>
            <i aria-hidden />
            {t(HERO.scroll)}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- tokyo */}
      <section className={s.section} id="tokyo">
        <Head n="01" stop={t(STOPS[0].label)} title={t(TOKYO.title)} strap={t(TOKYO.strap)} />
        <div className={s.statGrid}>
          {TOKYO.stats.map((st, i) => (
            <Reveal key={i} delay={i * 70} className={`${s.stat} ${i === 0 ? s.statLead : ""}`}>
              <div className={s.statValue}>{st.value}</div>
              <div className={s.statLabel}>{t(st.label)}</div>
              <div className={s.statNote}>{t(st.note)}</div>
            </Reveal>
          ))}
        </div>

        <Reveal className={s.figure}>
          <div className={s.figTitle}>{t(TOKYO.platformTitle)}</div>
          <div className={s.platforms}>
            {TOKYO.platforms.map((pf, i) => (
              <div key={pf.name} className={s.platform}>
                <div className={s.platformName}>
                  <b>{pf.name}</b>
                  <span>{pf.handle}</span>
                </div>
                <div className={s.platformBar}>
                  <Bar pct={(pf.median / TOKYO.platforms[0].median) * 100} tone={i === 1 ? "red" : "white"} label={`${pf.name} ${full(pf.median)}`} />
                  <div className={s.platformValue}>{full(pf.median)}</div>
                </div>
                <div className={s.platformMeta}>
                  <span>
                    <b>{pf.posts}</b> {t(TOKYO.platformCols.posts)}
                  </span>
                  <span>
                    <b>{pf.over1m}</b> {t(TOKYO.platformCols.over)}
                  </span>
                  <span>
                    <b>{pf.followers}</b> {t(TOKYO.platformCols.followers)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className={s.read}>{t(TOKYO.platformRead)}</p>
        </Reveal>
      </section>

      {/* ----------------------------------------------------- crossing */}
      <ScrollFilm id="crossing" from={0} to={TOTAL - 1} vh={620} poster={`${IMG}/k1.jpg`}>
        {(p) => (
          <>
            <div className={s.beat} style={{ opacity: band(p, -0.1, 0.13), pointerEvents: "none" }}>
              <div className={s.kicker}>
                <span className={s.kn}>02</span>
                <span className={s.kline} />
                <span>{t(STOPS[1].label)}</span>
              </div>
              <h2 className={s.h2}>{t(CROSSING.title)}</h2>
              <p className={s.strap}>{t(CROSSING.strap)}</p>
            </div>
            {CROSSING.beats.map((b, i) => {
              const a = 0.16 + i * 0.2;
              return (
                <div key={i} className={`${s.beat} ${s.beatStat}`} style={{ opacity: band(p, a, a + 0.17), transform: `translateY(${(a + 0.085 - p) * 120}px)` }} aria-hidden={band(p, a, a + 0.17) < 0.5}>
                  <div className={s.beatBig}>{b.big}</div>
                  <p>{t(b.line)}</p>
                </div>
              );
            })}
          </>
        )}
      </ScrollFilm>

      <section className={`${s.section} ${s.afterFilm}`}>
        <WhoFigure lang={lang} onPlay={setPost} />
        <Reveal className={s.layer}>
          <div className={s.figTitle}>{t(CROSSING.layerTitle)}</div>
          <div className={s.layerGrid}>
            {CROSSING.layer.map((l, i) => (
              <div key={i}>
                <b>{l.value}</b>
                <span>{t(l.label)}</span>
              </div>
            ))}
          </div>
          <p className={s.read}>{t(CROSSING.read)}</p>
          <PortalButton label={t(CROSSING.portal)} onOpen={openDossier("data")} />
        </Reveal>
      </section>

      {/* --------------------------------------------------------- feed */}
      <div className={s.bandImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/k3.jpg`} alt="" loading="lazy" />
      </div>
      <section className={s.section} id="feed">
        <Head n="03" stop={t(STOPS[2].label)} title={t(FEED.title)} strap={t(FEED.strap)} />
        <TrendBoard lang={lang} onPlay={setPost} />

        <div className={s.two}>
          <Reveal className={s.figure}>
            <div className={s.figTitle}>{t(FEED.indexTitle)}</div>
            <div className={s.indexRows}>
              <div className={s.indexHead}>
                <span />
                <span>{t(FEED.indexCols.share)}</span>
                <span>{t(FEED.indexCols.idx)}</span>
              </div>
              {FEED.index.map((r, i) => (
                <div key={i} className={s.indexRow}>
                  <b>{t(r.t)}</b>
                  <div>
                    <Bar pct={(r.share / 52.3) * 100} tone="dim" />
                    <em>{r.share}%</em>
                  </div>
                  <div>
                    <Bar pct={(r.idx / 1.61) * 100} tone={r.idx >= 1.2 ? "red" : "white"} />
                    <em>{r.idx.toFixed(2)}×</em>
                  </div>
                </div>
              ))}
            </div>
            <p className={s.figNote}>{t(FEED.indexNote)}</p>
            <p className={s.read}>{t(FEED.indexRead)}</p>
          </Reveal>

          <Reveal className={s.figure} delay={90}>
            <div className={s.figTitle}>{t(FEED.peersTitle)}</div>
            <div className={s.peers}>
              {FEED.peers.map((pr) => (
                <div key={pr.name} className={`${s.peer} ${pr.self ? s.peerSelf : ""}`}>
                  <b>{pr.name}</b>
                  <Bar pct={(pr.median / FEED.peers[0].median) * 100} tone={pr.self ? "red" : "white"} label={`${pr.name} ${full(pr.median)}`} />
                  <em>{full(pr.median)}</em>
                </div>
              ))}
            </div>
            <p className={s.figNote}>{t(FEED.peersNote)}</p>
            <p className={s.read}>{t(FEED.peersRead)}</p>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ moments */}
      <div className={s.bandImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/s4.jpg`} alt="" loading="lazy" />
      </div>
      <section className={s.section} id="moments">
        <Head n="04" stop={t(STOPS[3].label)} title={t(MOMENTS.title)} strap={t(MOMENTS.strap)} />
        <Calendar lang={lang} />
        <Reveal className={s.lag}>
          <div className={s.figTitle}>{t(MOMENTS.lagTitle)}</div>
          <div className={s.lagGrid}>
            {MOMENTS.lag.map((l, i) => (
              <div key={i}>
                <b>{t(l.k)}</b>
                <p>{t(l.v)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ------------------------------------------------------ program */}
      <div className={s.bandImg}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/s5.jpg`} alt="" loading="lazy" style={{ objectPosition: "50% 40%" }} />
      </div>
      <section className={s.section} id="program">
        <Head n="05" stop={t(STOPS[4].label)} title={t(PROGRAM.title)} strap={t(PROGRAM.strap)} />
        <Formats lang={lang} />

        <Reveal className={s.sub}>
          <h3 className={s.h3}>{t(PROGRAM.stepsTitle)}</h3>
        </Reveal>
        <ol className={s.steps}>
          {PROGRAM.steps.map((st, i) => (
            <Reveal as="li" key={i} delay={i * 50}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{t(st.h)}</b>
              <p>{t(st.b)}</p>
            </Reveal>
          ))}
        </ol>

        <div className={s.control}>
          {PROGRAM.control.map((c, i) => (
            <Reveal key={i} delay={i * 80} className={`${s.controlCol} ${i === 2 ? s.controlWide : ""}`}>
              <h4>{t(c.h)}</h4>
              <ul>
                {c.items.map((it, j) => (
                  <li key={j}>{t(it)}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className={s.never}>
          <b>{t(PROGRAM.never.h)}</b>
          <ul>
            {PROGRAM.never.items.map((it, i) => (
              <li key={i}>{t(it)}</li>
            ))}
          </ul>
        </Reveal>
        <PortalButton label={t(PROGRAM.portal)} onOpen={openDossier("rules")} />
      </section>

      {/* --------------------------------------------------------- menu */}
      <section className={s.section} id="menu">
        <Head n="06" stop={t(STOPS[5].label)} title={t(MENU.title)} strap={t(MENU.strap)} />
        <div className={s.curBar}>
          <span>{t(MENU.currency)}</span>
          <div className={s.curToggle} role="group" aria-label={t(MENU.currency)}>
            <button type="button" className={cur === "JPY" ? s.curOn : ""} onClick={() => setCur("JPY")} aria-pressed={cur === "JPY"}>
              JPY ¥
            </button>
            <button type="button" className={cur === "USD" ? s.curOn : ""} onClick={() => setCur("USD")} aria-pressed={cur === "USD"}>
              USD $
            </button>
          </div>
        </div>
        <div className={s.tiers}>
          {MENU.tiers.map((tr, i) => {
            const fee = tr.pool * 0.2;
            const total = tr.pool + fee + tr.desk;
            const ceiling = (tr.pool / META.fx / 3.0) * 1000;
            const subject = encodeURIComponent(`BE:FIRST clipping: approve ${tr.name.en}`);
            const body = encodeURIComponent(`We would like to go ahead with the ${tr.name.en} option (${yen(total)}).\n\nName:\nCompany:\n`);
            return (
              <Reveal key={tr.id} delay={i * 90} className={`${s.tier} ${i === 2 ? s.tierTop : ""}`}>
                <div className={s.tierHead}>
                  <span>{tr.n}</span>
                  <h3>{t(tr.name)}</h3>
                </div>
                <div className={s.tierWindow}>{t(tr.window)}</div>
                <p className={s.tierLine}>{t(tr.line)}</p>
                <div className={s.tierPrice}>
                  <b>{money(total)}</b>
                  <span>≈ {alt(total)}</span>
                </div>
                <dl className={s.tierRows}>
                  <div>
                    <dt>{t(MENU.rows.pool)}</dt>
                    <dd>{money(tr.pool)}</dd>
                  </div>
                  <div>
                    <dt>{t(MENU.rows.fee)}</dt>
                    <dd>{money(fee)}</dd>
                  </div>
                  {tr.desk > 0 && (
                    <div>
                      <dt>{t(MENU.rows.desk)}</dt>
                      <dd>{money(tr.desk)}</dd>
                    </div>
                  )}
                  <div data-ceiling>
                    <dt>{t(MENU.rows.ceiling)}</dt>
                    <dd>
                      {compact(Math.floor(ceiling / 1e5) * 1e5)} {t(MENU.rows.approved)}
                    </dd>
                  </div>
                </dl>
                <ul className={s.tierList}>
                  {tr.includes.map((it, j) => (
                    <li key={j}>{t(it)}</li>
                  ))}
                </ul>
                <p className={s.tierStop}>{t(tr.stop)}</p>
                <a className={s.cta} href={`mailto:${META.email}?subject=${subject}&body=${body}`}>
                  {lang === "ja" ? `${tr.name.ja}を承認する` : `Approve ${tr.name.en}`}
                </a>
              </Reveal>
            );
          })}
        </div>
        <p className={s.fx}>{t(MENU.fxNote)}</p>

        <Calculator lang={lang} cur={cur} />
        <PortalButton label={t(MENU.portal)} onOpen={openDossier("rates")} />
      </section>

      {/* ------------------------------------------------------- agency */}
      <section className={`${s.section} ${s.agency}`} id="agency">
        <Reveal className={s.agencyHead}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
          <p>{t(AGENCY.body)}</p>
        </Reveal>
        <Reveal className={s.servicesHead}>
          <span>{t(AGENCY.servicesLabel)}</span>
          <em>
            <i aria-hidden />
            {t(AGENCY.inPlan)}
          </em>
        </Reveal>
        <ol className={s.services}>
          {AGENCY.services.map((sv, i) => (
            <Reveal as="li" key={i} delay={(i % 4) * 50} className={sv.on ? s.serviceOn : ""}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <b>{t(sv.h)}</b>
              <p>{t(sv.b)}</p>
            </Reveal>
          ))}
        </ol>
        <Reveal className={s.clients}>
          {AGENCY.clientGroups.map((g) => (
            <div key={g.label.en} className={s.clientGroup}>
              <div className={s.figTitle}>{t(g.label)}</div>
              <div>
                {g.names.map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      {/* -------------------------------------------------------- close */}
      <section className={s.close} id="next">
        <div className={s.closeBg}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${IMG}/s6.jpg`} alt="" loading="lazy" />
        </div>
        <div className={s.closeInner}>
          <Reveal>
            <div className={s.kicker}>
              <span className={s.kn}>07</span>
              <span className={s.kline} />
              <span>{lang === "ja" ? "スタート" : "Start"}</span>
            </div>
            <h2 className={s.h2}>{t(NEXT.title)}</h2>
          </Reveal>
          <ol className={s.nextSteps}>
            {NEXT.steps.map((st, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{t(st.h)}</b>
                  <p>{t(st.b)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className={s.closeLine}>
            <p>{t(NEXT.close)}</p>
            <a className={s.cta} href={`mailto:${META.email}?subject=${encodeURIComponent("BE:FIRST US clipping proposal")}`}>
              {t(NEXT.cta)}
            </a>
            <div className={s.closeContact}>{META.email}</div>
          </Reveal>
        </div>
        <footer className={s.footer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control" />
          <p>{t(FOOT.disclaimer)}</p>
        </footer>
      </section>

      {post && <PostBox post={post} lang={lang} onClose={closePost} />}
      {dossier && <Dossier id={dossier.id} origin={dossier.origin} lang={lang} onClose={closeDossier} />}
    </div>
  );
}

/* ---------------------------------------------------------------- figures */

function WhoFigure({ lang, onPlay }: { lang: Lang; onPlay: (p: Post) => void }) {
  const t = (l: L) => l[lang];
  const [sel, setSel] = useState(5);
  const [filter, setFilter] = useState<string | null>(null);
  const max = CROSSING.who[0].v;
  const tone = (k: string) => (k === "sound" ? "red" : k === "artist" ? "white" : k === "fan" ? "outline" : "dim");
  const cur = CROSSING.who[sel];
  const kinds = Object.keys(CROSSING.kinds) as (keyof typeof CROSSING.kinds)[];
  return (
    <Reveal className={s.figure}>
      <div className={s.figTitle}>{t(CROSSING.whoTitle)}</div>
      <p className={s.figStrap}>{t(CROSSING.whoStrap)}</p>
      <div className={s.legend}>
        {kinds.map((k) => (
          <button key={k} type="button" className={`${s.chip} ${filter === k ? s.chipOn : ""}`} onClick={() => setFilter(filter === k ? null : k)} aria-pressed={filter === k}>
            <i className={s[`tone_${tone(k)}`]} />
            {t(CROSSING.kinds[k])}
          </button>
        ))}
      </div>
      <div className={s.who}>
        <div className={s.whoList}>
          {CROSSING.who.map((w, i) => (
            <button key={i} type="button" className={`${s.whoRow} ${i === sel ? s.whoOn : ""} ${filter && filter !== w.k ? s.whoFade : ""}`} onClick={() => setSel(i)} aria-pressed={i === sel}>
              <span className={s.whoHandle}>{w.h}</span>
              <span className={s.whoBar}>
                <span className={`${s.whoFill} ${s[`tone_${tone(w.k)}`]}`} style={{ width: `${(w.v / max) * 100}%` }} />
              </span>
              <span className={s.whoViews}>{compact(w.v)}</span>
            </button>
          ))}
        </div>
        <aside className={s.whoCard} aria-live="polite">
          <div className={s.whoKind}>
            <i className={s[`tone_${tone(cur.k)}`]} />
            {t(CROSSING.kinds[cur.k as keyof typeof CROSSING.kinds])}
          </div>
          <div className={s.whoBig}>{full(cur.v)}</div>
          <div className={s.whoSmall}>{lang === "ja" ? "再生" : "views"}</div>
          <p>{t(cur.t)}</p>
          <dl>
            <div>
              <dt>{lang === "ja" ? "アカウント" : "Account"}</dt>
              <dd>{cur.h}</dd>
            </div>
            <div>
              <dt>{lang === "ja" ? "フォロワー" : "Followers"}</dt>
              <dd>{cur.f}</dd>
            </div>
            <div>
              <dt>{lang === "ja" ? "投稿日" : "Posted"}</dt>
              <dd>{cur.d}</dd>
            </div>
          </dl>
          <PostThumb post={{ id: vid(cur.u), h: cur.h, v: cur.v }} onPlay={onPlay} lang={lang} wide />
        </aside>
      </div>
    </Reveal>
  );
}

function TrendBoard({ lang, onPlay }: { lang: Lang; onPlay: (p: Post) => void }) {
  const t = (l: L) => l[lang];
  const [sel, setSel] = useState(0);
  const c = FEED.cards[sel];
  return (
    <Reveal className={s.board}>
      <div className={s.boardRecord}>
        <span className={s.live} aria-hidden />
        {t(FEED.record)}
      </div>
      <div className={s.boardGrid}>
        <div className={s.boardTabs} role="tablist">
          {FEED.cards.map((cd, i) => (
            <button key={cd.n} type="button" role="tab" aria-selected={i === sel} className={`${s.boardTab} ${i === sel ? s.boardTabOn : ""}`} onClick={() => setSel(i)}>
              <span>{cd.n}</span>
              <b>{t(cd.name)}</b>
              <em data-stage={cd.stage}>{t(FEED.stages[cd.stage as keyof typeof FEED.stages])}</em>
            </button>
          ))}
        </div>
        <div className={s.boardCard} role="tabpanel" key={sel}>
          <div className={s.boardRef}>
            <em data-stage={c.stage}>{t(FEED.stages[c.stage as keyof typeof FEED.stages])}</em>
            <span>{c.ref}</span>
          </div>
          <h3>{t(c.name)}</h3>
          <div className={s.boardData}>{t(c.data)}</div>
          <div className={s.boardCols}>
            <div>
              <h4>{t(FEED.labels.why)}</h4>
              <p>{t(c.why)}</p>
            </div>
            <div>
              <h4>{t(FEED.labels.proof)}</h4>
              <p>{t(c.proof)}</p>
            </div>
          </div>
          <div className={s.yours}>
            <h4>{t(FEED.labels.yours)}</h4>
            <p>{t(c.yours)}</p>
          </div>
          <h4 className={s.postsLabel}>{t(FEED.labels.example)}</h4>
          <div className={s.posts}>
            {c.posts.map((ps) => (
              <PostThumb key={ps.id} post={ps} onPlay={onPlay} lang={lang} />
            ))}
          </div>
        </div>
      </div>
      <div className={s.skip}>
        <b>{t(FEED.labels.skip)}</b>
        {FEED.skip.map((sk, i) => (
          <p key={i}>{t(sk)}</p>
        ))}
      </div>
    </Reveal>
  );
}

function Calendar({ lang }: { lang: Lang }) {
  const t = (l: L) => l[lang];
  const [sel, setSel] = useState("test");
  const cur = MOMENTS.items.find((m) => m.id === sel)!;
  const A = -12; // Oct 20
  const B = 151; // Mar 31
  const x = (d: number) => ((d - A) / (B - A)) * 100;
  const monthStarts = [0, 30, 61, 92, 120];
  return (
    <Reveal className={s.cal}>
      <div className={s.calTrack} aria-hidden>
        {monthStarts.map((d, i) => (
          <div key={i} className={s.calMonth} style={{ left: `${x(d)}%` }}>
            <span>{t(MOMENTS.months[i])}</span>
          </div>
        ))}
        {MOMENTS.items.map((m) => (
          <button key={m.id} type="button" tabIndex={-1} className={`${s.calBar} ${m.id === sel ? s.calBarOn : ""}`} data-kind={m.kind} style={{ left: `${x(m.s)}%`, width: `${Math.max(x(m.e + 1) - x(m.s), 1.4)}%` }} onClick={() => setSel(m.id)} />
        ))}
      </div>
      <div className={s.calBody}>
        <div className={s.calList}>
          {MOMENTS.items.map((m) => (
            <button key={m.id} type="button" className={`${s.calItem} ${m.id === sel ? s.calItemOn : ""}`} onClick={() => setSel(m.id)} aria-pressed={m.id === sel}>
              <i data-kind={m.kind} />
              <span>
                <b>{t(m.name)}</b>
                <em>{t(MOMENTS.kinds[m.kind as keyof typeof MOMENTS.kinds])}</em>
              </span>
            </button>
          ))}
        </div>
        <div className={s.calCard} aria-live="polite" key={sel}>
          <div className={s.calKind}>
            <i data-kind={cur.kind} />
            {t(MOMENTS.kinds[cur.kind as keyof typeof MOMENTS.kinds])}
          </div>
          <h3>{t(cur.name)}</h3>
          <div className={s.calWhen}>{t(cur.when)}</div>
          <p>{t(cur.body)}</p>
        </div>
      </div>
    </Reveal>
  );
}

function Formats({ lang }: { lang: Lang }) {
  const t = (l: L) => l[lang];
  const [sel, setSel] = useState(0);
  const f = PROGRAM.formats[sel];
  return (
    <Reveal className={s.formats}>
      <h3 className={s.h3}>{t(PROGRAM.formatsTitle)}</h3>
      <p className={s.figStrap}>{t(PROGRAM.formatsStrap)}</p>
      <div className={s.formatsGrid}>
        <div className={s.formatTabs} role="tablist">
          {PROGRAM.formats.map((fm, i) => (
            <button key={fm.id} type="button" role="tab" aria-selected={i === sel} className={`${s.formatTab} ${i === sel ? s.formatTabOn : ""}`} onClick={() => setSel(i)}>
              <span>{fm.n}</span>
              <b>{t(fm.name)}</b>
            </button>
          ))}
        </div>
        <div className={s.formatStage} key={sel}>
          <PhoneMock id={f.id} caption={t(f.caption)} />
          <div className={s.formatText}>
            <div className={s.formatNo}>{f.n}</div>
            <h4>{t(f.name)}</h4>
            <div className={s.formatBlock}>
              <span>{t(PROGRAM.labels.what)}</span>
              <p>{t(f.what)}</p>
            </div>
            <div className={s.formatBlock}>
              <span>{t(PROGRAM.labels.proof)}</span>
              <p>{t(f.proof)}</p>
            </div>
            <p className={s.figNote}>{t(PROGRAM.labels.mock)}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Calculator({ lang, cur }: { lang: Lang; cur: Cur }) {
  const money = (n: number) => (cur === "JPY" ? yen(n) : usd(n / META.fx));
  const alt = (n: number) => (cur === "JPY" ? usd(n / META.fx) : yen(n));
  const t = (l: L) => l[lang];
  const [pool, setPool] = useState(3000000);
  const [rate, setRate] = useState(3);
  const rates = [3, 4, 5];
  const out = useMemo(() => {
    const ceiling = (pool / META.fx / rate) * 1000;
    const fee = pool * 0.2;
    return { ceiling, fee, total: pool + fee };
  }, [pool, rate]);
  const pct = ((pool - 500000) / (10000000 - 500000)) * 100;
  return (
    <Reveal className={s.calc}>
      <div>
        <h3 className={s.h3}>{t(MENU.calcTitle)}</h3>
        <p className={s.figStrap}>{t(MENU.calcStrap)}</p>
        <label className={s.calcLabel} htmlFor="pool">
          <span>{t(MENU.calc.pool)}</span>
          <b>{money(pool)}</b>
        </label>
        <input id="pool" className={s.range} type="range" min={500000} max={10000000} step={100000} value={pool} onChange={(e) => setPool(Number(e.target.value))} style={{ "--pct": `${pct}%` } as CSSProperties} />
        <div className={s.calcPresets}>
          {MENU.tiers.map((tr) => (
            <button key={tr.id} type="button" className={pool === tr.pool ? s.presetOn : ""} onClick={() => setPool(tr.pool)}>
              {t(tr.name)}
            </button>
          ))}
        </div>
        <div className={s.calcLabel}>
          <span>{t(MENU.calc.rate)}</span>
        </div>
        <div className={s.rates} role="group">
          {rates.map((r) => (
            <button key={r} type="button" className={rate === r ? s.rateOn : ""} onClick={() => setRate(r)} aria-pressed={rate === r}>
              ${r.toFixed(2)}
            </button>
          ))}
        </div>
      </div>
      <div className={s.calcOut} aria-live="polite">
        <div className={s.calcBig}>{compact(Math.floor(out.ceiling / 1e4) * 1e4)}</div>
        <div className={s.calcBigLabel}>{t(MENU.calc.ceiling)}</div>
        <dl>
          <div>
            <dt>{t(MENU.calc.pool)}</dt>
            <dd>{money(pool)}</dd>
          </div>
          <div>
            <dt>{t(MENU.calc.fee)}</dt>
            <dd>{money(out.fee)}</dd>
          </div>
          <div data-total>
            <dt>{t(MENU.calc.total)}</dt>
            <dd>
              {money(out.total)} <em>≈ {alt(out.total)}</em>
            </dd>
          </div>
        </dl>
        <p className={s.figNote}>{t(MENU.calc.note)}</p>
      </div>
    </Reveal>
  );
}
