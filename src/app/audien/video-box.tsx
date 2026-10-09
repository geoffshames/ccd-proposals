"use client";

/**
 * Shadowbox for every social post the AUDIEN audit references.
 * Shows the original post through the platform's own embed (YouTube, TikTok
 * player v1, Instagram, Reddit), so views and attribution stay with the creator.
 * Portaled to <body> so pinned/transformed sections can't trap `position: fixed`.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import s from "./audien.module.css";
import type { Teardown } from "@/lib/audien/teardowns";

const EASE = [0.16, 1, 0.3, 1] as const;

export type VideoItem = {
  href: string;
  title: string;
  views?: string;
  platform: string;
  /** A fan quote this post is the source for. */
  quote?: string;
  metric?: string;
  context?: string;
  poster?: string;
  low?: boolean;
  /** Rights holder blocks off-platform playback (e.g. Vevo). Skips the embed. */
  noEmbed?: boolean;
  /** Full video teardown, shown beside the player. */
  teardown?: Teardown;
};

type Group = { label: string; items: VideoItem[] };
type OpenFn = (group: Group, index: number) => void;

type Embed = { kind: "youtube" | "tiktok" | "instagram" | "reddit"; name: string; src: string; poster?: string };

export function embedFor(href: string): Embed | null {
  const yt = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/);
  if (yt)
    return {
      kind: "youtube",
      name: "YouTube",
      src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&playsinline=1&modestbranding=1`,
      poster: `https://i.ytimg.com/vi/${yt[1]}/hqdefault.jpg`,
    };
  const tt = href.match(/tiktok\.com\/@[^/]+\/video\/(\d+)/);
  if (tt)
    return {
      kind: "tiktok",
      name: "TikTok",
      src: `https://www.tiktok.com/player/v1/${tt[1]}?autoplay=1&rel=0&description=1&music_info=1&native_context_menu=0`,
    };
  const ig = href.match(/instagram\.com\/(?:reel|reels|p)\/([\w-]+)/);
  if (ig) return { kind: "instagram", name: "Instagram", src: `https://www.instagram.com/reel/${ig[1]}/embed/` };
  const rd = href.match(/reddit\.com\/r\/([\w-]+)\/comments\/([a-z0-9]+)(?:\/([\w-]+))?/i);
  if (rd)
    return {
      kind: "reddit",
      name: "Reddit",
      src: `https://embed.reddit.com/r/${rd[1]}/comments/${rd[2]}/${rd[3] ? rd[3] + "/" : ""}?embed=true&theme=dark&showmedia=true&showtitle=true`,
    };
  return null;
}

const Ctx = createContext<OpenFn>(() => {});
const noopSubscribe = () => () => {};

/** Returns an onClick for an <a href> trigger: plain clicks open the shadowbox, modified clicks still open the platform. */
export function useVideoBox() {
  const open = useContext(Ctx);
  return useCallback(
    (group: Group, index: number) => (e: MouseEvent<HTMLAnchorElement>) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (!embedFor(group.items[index]?.href ?? "")) return;
      e.preventDefault();
      open(group, index);
    },
    [open],
  );
}

export function VideoBoxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<{ group: Group; index: number } | null>(null);
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback<OpenFn>((group, index) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setState({ group, index });
  }, []);
  const close = useCallback(() => setState(null), []);
  const step = useCallback(
    (d: number) =>
      setState((st) => (st ? { ...st, index: (st.index + d + st.group.items.length) % st.group.items.length } : st)),
    [],
  );

  return (
    <Ctx.Provider value={open}>
      {children}
      {mounted &&
        createPortal(
          <AnimatePresence onExitComplete={() => returnFocus.current?.focus?.({ preventScroll: true })}>
            {state && <Box key="vbox" group={state.group} index={state.index} onClose={close} onStep={step} />}
          </AnimatePresence>,
          document.body,
        )}
    </Ctx.Provider>
  );
}

function Box({ group, index, onClose, onStep }: { group: Group; index: number; onClose: () => void; onStep: (d: number) => void }) {
  const reduce = !!useReducedMotion();
  const item = group.items[index];
  const embed = useMemo(() => embedFor(item.href), [item.href]);
  const total = group.items.length;
  const multi = total > 1;
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      onStep(d);
    },
    [onStep],
  );

  // Scroll lock + initial focus.
  useEffect(() => {
    const html = document.documentElement;
    const gap = window.innerWidth - html.clientWidth;
    const prev = { overflow: html.style.overflow, pad: document.body.style.paddingRight };
    html.style.overflow = "hidden";
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      html.style.overflow = prev.overflow;
      document.body.style.paddingRight = prev.pad;
    };
  }, []);

  // Keyboard: Esc closes, arrows step, Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (multi && e.key === "ArrowRight") go(1);
      else if (multi && e.key === "ArrowLeft") go(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const f = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, a[href], iframe")).filter((el) => el.offsetParent !== null);
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, multi, onClose]);

  const orient = embed?.kind === "youtube" ? "landscape" : "portrait";
  const metric = item.metric ?? "views";
  const counter = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  const titleId = "vbox-title";

  return (
    <motion.div
      ref={dialogRef}
      className={`${s.page} ${s.vbox}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0.15 : 0.35, ease: "easeOut" }}
    >
      <div className={s.vboxBackdrop} onClick={onClose} aria-hidden="true" />

      <div className={s.vboxBar}>
        <span className={s.mono}>
          <b>{group.label}</b>
          {multi && <span className={s.vboxCount}>{counter}</span>}
        </span>
        <button ref={closeRef} type="button" className={s.vboxClose} onClick={onClose} aria-label="Close">
          <span className={s.mono}>Close</span>
          <kbd className={s.mono}>Esc</kbd>
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      {multi && (
        <>
          <button type="button" className={`${s.vboxArrow} ${s.vboxPrev}`} onClick={() => go(-1)} aria-label="Previous post">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 4l-8 8 8 8" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>
          <button type="button" className={`${s.vboxArrow} ${s.vboxNext}`} onClick={() => go(1)} aria-label="Next post">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 4l8 8-8 8" stroke="currentColor" strokeWidth="1.6" fill="none" />
            </svg>
          </button>
        </>
      )}

      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={`${index}-${item.href}`}
          className={s.vboxBody}
          data-orient={orient}
          data-kind={embed?.kind}
          data-td={item.teardown ? "" : undefined}
          custom={dir}
          variants={{
            enter: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: 48 * d, scale: 0.97 }),
            center: { opacity: 1, x: 0, scale: 1 },
            exit: (d: number) => (reduce ? { opacity: 0 } : { opacity: 0, x: -48 * d, scale: 0.97 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: reduce ? 0.15 : 0.5, ease: EASE }}
        >
          <Player item={item} embed={embed} />

          <aside className={s.vboxInfo}>
            {item.views ? (
              <div className={s.vboxStat}>
                <strong>{item.views}</strong>
                <span className={s.mono}>
                  {metric} on {item.platform}
                </span>
              </div>
            ) : (
              <span className={`${s.mono} ${s.rust}`}>{item.platform}</span>
            )}
            {item.quote && <blockquote className={s.vboxQuote}>“{item.quote}”</blockquote>}
            <div className={s.vboxText}>
              {item.low && <span className={`${s.mono} ${s.vboxLow}`}>Low performer, shown for contrast</span>}
              <h3 id={titleId}>{item.title}</h3>
              {item.context && !item.teardown && <p>{item.context}</p>}
            </div>
            {item.teardown && <TeardownPanel td={item.teardown} />}
            <div className={s.vboxActions}>
              {multi && (
                <div className={s.vboxSteps}>
                  <button type="button" onClick={() => go(-1)} aria-label="Previous post">
                    ←
                  </button>
                  <span className={s.mono}>{counter}</span>
                  <button type="button" onClick={() => go(1)} aria-label="Next post">
                    →
                  </button>
                </div>
              )}
              <a className={s.vboxOut} href={item.href} target="_blank" rel="noreferrer">
                <span className={s.mono}>Open on {embed?.name ?? item.platform}</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </aside>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const n = (v: number | null) => (v == null ? null : v.toLocaleString("en-US"));

function TeardownPanel({ td }: { td: Teardown }) {
  const m = td.metrics;
  const stats = [
    ["likes", n(m.likes)],
    ["comments", n(m.comments)],
    ["shares", n(m.shares)],
    ["saves", n(m.saves)],
  ].filter((x) => x[1]) as [string, string][];
  return (
    <div className={s.td}>
      <div className={`${s.tdTag} ${s.mono}`}>
        <i />
        Video teardown, TwelveLabs Pegasus
      </div>
      <p className={s.tdVerdict}>{td.verdict}</p>
      <div className={`${s.tdStats} ${s.mono}`}>
        <span>{td.date}</span>
        <span>{Math.round(td.duration_s)}s</span>
        {stats.map(([k, v]) => (
          <span key={k}>
            {v} {k}
          </span>
        ))}
      </div>

      <section>
        <h4 className={s.mono}>Hook, {td.hook.window}</h4>
        <p>{td.hook.what_we_see}</p>
        {td.hook.on_screen_text && <p className={s.tdText}>&ldquo;{td.hook.on_screen_text}&rdquo;</p>}
        <p className={s.tdRead}>{td.hook.read}</p>
      </section>

      <section>
        <h4 className={s.mono}>Beat by beat</h4>
        <ol className={s.tdBeats}>
          {td.beats.map((b) => (
            <li key={b.t + b.what}>
              <b className={s.mono}>{b.t}</b>
              <span>{b.what}</span>
            </li>
          ))}
        </ol>
      </section>

      {td.on_screen_text.length > 0 && (
        <section>
          <h4 className={s.mono}>On-screen text</h4>
          <ul className={s.tdList}>
            {td.on_screen_text.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      )}

      <dl className={s.tdGrid}>
        <div>
          <dt className={s.mono}>Audio</dt>
          <dd>{td.audio}</dd>
        </div>
        <div>
          <dt className={s.mono}>On camera</dt>
          <dd>{td.artist_on_camera}</dd>
        </div>
        <div>
          <dt className={s.mono}>Brand cues</dt>
          <dd>{td.brand_cues}</dd>
        </div>
        <div>
          <dt className={s.mono}>Pacing</dt>
          <dd>{td.pacing}</dd>
        </div>
        <div>
          <dt className={s.mono}>Call to action</dt>
          <dd>{td.cta}</dd>
        </div>
      </dl>

      <section>
        <h4 className={s.mono}>What worked</h4>
        <ul className={s.tdList}>
          {td.what_worked.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <section>
        <h4 className={`${s.mono} ${s.tdRed}`}>{td.artist === "AUDIEN" ? "What to repeat or change" : "What AUDIEN can borrow"}</h4>
        <ul className={s.tdList} data-red="">
          {td.what_to_change.map((t) => (
            <li key={t}>{t.replace(/^For AUDIEN: /, "")}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function Player({ item, embed }: { item: VideoItem; embed: Embed | null }) {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(!!item.noEmbed || !embed);
  const [embedHeight, setEmbedHeight] = useState(0);
  const poster = item.poster ?? embed?.poster;
  const kind = embed?.kind;
  const src = useMemo(() => {
    if (!embed) return "";
    return kind === "youtube" ? `${embed.src}&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}` : embed.src;
  }, [embed, kind]);

  // Platform messages: Instagram reports its height; YouTube reports ready/error
  // (101/150 = the rights holder blocks embedded playback, e.g. Vevo).
  useEffect(() => {
    if (!kind || blocked) return;
    let reveal: ReturnType<typeof setTimeout> | undefined;
    const fallback = kind === "youtube" ? setTimeout(() => setLoaded(true), 6000) : undefined;
    const onMsg = (e: MessageEvent) => {
      if (e.source !== frameRef.current?.contentWindow) return;
      try {
        const host = new URL(e.origin).hostname;
        const d = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        if (kind === "instagram" && /(^|\.)instagram\.com$/.test(host)) {
          if (d?.type === "MEASURE" && d.details?.height) setEmbedHeight(Math.round(d.details.height));
        } else if (kind === "reddit" && /(^|\.)reddit\.com$/.test(host)) {
          if (d?.type === "resize.embed" && Number(d.data) > 0) {
            setEmbedHeight(Math.round(Number(d.data)));
            setLoaded(true);
          }
        } else if (kind === "youtube" && /(^|\.)youtube(-nocookie)?\.com$/.test(host)) {
          if (d?.event === "onReady") reveal = setTimeout(() => setLoaded(true), 400);
          if (d?.event === "onError" && [2, 5, 100, 101, 150, 152, 153].includes(Number(d.info))) {
            clearTimeout(reveal);
            setBlocked(true);
          }
        }
      } catch {
        /* not ours */
      }
    };
    window.addEventListener("message", onMsg);
    return () => {
      window.removeEventListener("message", onMsg);
      clearTimeout(reveal);
      clearTimeout(fallback);
    };
  }, [kind, blocked]);

  const onFrameLoad = () => {
    if (kind === "youtube") {
      frameRef.current?.contentWindow?.postMessage(JSON.stringify({ event: "listening", id: "vbox", channel: "widget" }), "*");
    } else if (kind === "reddit") {
      setTimeout(() => setLoaded(true), 1500);
    } else {
      setLoaded(true);
    }
  };

  const platform = embed?.name ?? item.platform;

  return (
    <div
      className={`${s.vboxStage} ${blocked ? s.vboxStageBlocked : ""}`}
      style={(kind === "instagram" || kind === "reddit") && embedHeight && !blocked ? ({ "--embh": `${embedHeight}px` } as CSSProperties) : undefined}
    >
      {blocked ? (
        <div className={s.vboxBlocked}>
          {poster && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={poster} alt="" />
          )}
          <div className={s.vboxBlockedText}>
            <span className={`${s.mono} ${s.rust}`}>Plays on {platform} only</span>
            <p>The rights holder doesn&apos;t allow this video to play outside {platform}.</p>
            <a className={s.btn} href={item.href} target="_blank" rel="noreferrer">
              Watch on {platform} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className={`${s.vboxLoading} ${loaded ? s.vboxLoaded : ""}`} aria-hidden="true">
            {poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={poster} alt="" />
            )}
            <span className={s.vboxSweep} />
            <span className={s.mono}>Loading from {platform}</span>
          </div>
          {embed && (
            <iframe
              ref={frameRef}
              src={src}
              title={`${item.title} on ${embed.name}`}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture; clipboard-write"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={onFrameLoad}
            />
          )}
        </>
      )}
    </div>
  );
}
