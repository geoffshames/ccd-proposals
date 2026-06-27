"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */

type Creator = {
  handle: string;
  followers: string;
  avgViews: string;
  url: string;
};

// Links are the exact share URLs from the campaign roster. Handles match the
// link destination so the card label and the channel it opens always agree.
const CREATORS: Creator[] = [
  { handle: "sldancesl", followers: "1M", avgViews: "25K", url: "https://www.tiktok.com/@sldancesl?_r=1&_t=ZP-97Xm1Tidv8Y" },
  { handle: "emilykelavos", followers: "676K", avgViews: "100K", url: "https://www.tiktok.com/@emilykelavos" },
  { handle: "emily.112056", followers: "647K", avgViews: "100K", url: "https://www.tiktok.com/@emily.112056?_r=1&_t=ZP-97Xli24aIIQ" },
  { handle: "kinarileyy", followers: "560K", avgViews: "200K", url: "https://www.tiktok.com/@kinarileyy?_r=1&_t=ZP-97XmDON8uS7" },
  { handle: "karinaavx__", followers: "419K", avgViews: "50K", url: "https://www.tiktok.com/@karinaavx__?_r=1&_t=ZP-97XmOsZJaiE" },
  { handle: "jeremy.dreyer", followers: "391K", avgViews: "95K", url: "https://www.tiktok.com/@jeremy.dreyer?_r=1&_t=ZP-97Xma9i9csQ" },
  { handle: "ianbesanceney", followers: "200K", avgViews: "80K", url: "https://www.tiktok.com/@ianbesanceney?_r=1&_t=ZP-97XmZF2Lo46" },
  { handle: "erikthurza", followers: "185K", avgViews: "5K", url: "https://www.tiktok.com/@erikthurza?_r=1&_t=ZP-97XmdO4gSb9" },
  { handle: "ty_drizzy20", followers: "97K", avgViews: "50K", url: "https://www.tiktok.com/@ty_drizzy20?_r=1&_t=ZP-97Xmbbsw6zH" },
  { handle: "frl.vaeh", followers: "40K", avgViews: "200K", url: "https://www.tiktok.com/@frl.vaeh?_r=1&_t=ZP-97XmErUgV0o" },
];

const SIGN_DANCE_URL =
  "https://www.tiktok.com/@82major_official/video/7637085163121380609?_r=1&_t=ZP-97XnKbbn063";

type Lang = "en" | "ko";

const COPY = {
  en: {
    eyebrow: "82MAJOR × CROWD CONTROL DIGITAL",
    kicker: "Creator Campaign",
    tagline: "U.S. dancer activation on TikTok.",
    chipChannel: "Influencer Marketing · TikTok",
    chipBudget: "$5K",
    statBudget: "Initial Budget",
    statCreators: "Creators",
    statReach: "Combined followers",
    statViews: "Combined avg views",
    briefLabel: "The Creative",
    briefBody:
      "Activate U.S. dancers to recreate 82MAJOR's viral “Sign” dance, tagging @82major_official in every caption.",
    briefCta: "Watch the Sign dance",
    rosterLabel: "The Creators",
    rosterSub: "Ten dancers activated across TikTok.",
    cardFollowers: "Followers",
    cardViews: "Avg views",
    cardCta: "View channel",
    footer: "Crowd Control Digital",
  },
  ko: {
    eyebrow: "82MAJOR × CROWD CONTROL DIGITAL",
    kicker: "크리에이터 캠페인",
    tagline: "틱톡 미국 댄서 활성화 캠페인.",
    chipChannel: "인플루언서 마케팅 · TikTok",
    chipBudget: "$5K",
    statBudget: "초기 예산",
    statCreators: "크리에이터",
    statReach: "총 팔로워",
    statViews: "총 평균 조회수",
    briefLabel: "크리에이티브",
    briefBody:
      "미국 댄서들이 82MAJOR의 바이럴 “Sign” 챌린지를 재현하고, 모든 캡션에 @82major_official를 태그합니다.",
    briefCta: "Sign 챌린지 영상 보기",
    rosterLabel: "크리에이터 라인업",
    rosterSub: "틱톡에서 활성화된 댄서 10명.",
    cardFollowers: "팔로워",
    cardViews: "평균 조회수",
    cardCta: "채널 보기",
    footer: "Crowd Control Digital",
  },
} satisfies Record<Lang, Record<string, string>>;

/* ------------------------------------------------------------------ */
/* Small TikTok glyph                                                 */
/* ------------------------------------------------------------------ */

function TikTokGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.5 3c.3 2.1 1.6 3.7 3.7 4v2.4c-1.3.1-2.5-.3-3.7-1v6.8c0 3.3-2.4 5.8-5.6 5.8C7.6 21 5.2 18.8 5.2 15.7c0-3 2.3-5.3 5.3-5.3.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.8 0 1.6 1.1 2.8 2.6 2.8 1.5 0 2.7-1.2 2.7-3V3h2.9z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

export function CreatorsClient() {
  const [lang, setLang] = useState<Lang>("en");
  const t = COPY[lang];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-text-primary overflow-hidden">
      {/* Reveal animation — pure CSS so the final state is always visible,
          even if the tab loads throttled in the background. */}
      <style>{`
        @keyframes rvUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .rv { animation: rvUp .7s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .rv { animation: none; } }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="https://crowdcontroldigital.com" className="flex-shrink-0">
            <Image
              src="/brand/CC-LOGO-2024-WHITE.png"
              alt="Crowd Control Digital"
              width={2198}
              height={307}
              priority
              className="h-6 w-auto"
            />
          </Link>
          <div className="flex items-center gap-1 border border-border">
            {(["en", "ko"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-[12px] font-mono uppercase tracking-wider transition-colors ${
                  lang === l ? "bg-accent text-white" : "text-text-muted hover:text-text-primary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/82major/82major-group.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/[0.74]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
          <p className="rv font-mono text-[12px] md:text-[13px] tracking-[0.3em] text-accent uppercase mb-5">
            {t.eyebrow}
          </p>

          <h1 className="rv text-[clamp(4.5rem,16vw,12rem)] leading-[0.82] tracking-[-0.04em] mb-4" style={{ animationDelay: ".05s" }}>
            SIGN
          </h1>

          <p className="rv display text-[clamp(1.1rem,3.2vw,1.9rem)] text-white/90 mb-7" style={{ animationDelay: ".1s" }}>
            {t.kicker}
          </p>

          <div className="rv flex flex-wrap items-center gap-3 mb-10" style={{ animationDelay: ".15s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-[#1A1A1A]/70 backdrop-blur text-[13px] text-text-primary">
              <TikTokGlyph className="w-4 h-4 text-accent" />
              {t.chipChannel}
            </span>
            <span className="text-[13px] text-white/60 max-w-xs leading-snug">{t.tagline}</span>
          </div>

          {/* STAT ROW — $5K leads as the emphasized metric */}
          <div className="rv grid grid-cols-2 sm:grid-cols-4 max-w-2xl gap-px bg-[#2a2a2a] border border-[#2a2a2a]" style={{ animationDelay: ".2s" }}>
            <div className="bg-accent px-4 py-5 text-center">
              <div className="display text-[clamp(2rem,5.5vw,3rem)] text-[#0A0A0A] leading-none">{t.chipBudget}</div>
              <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-black/75 mt-1.5">
                {t.statBudget}
              </div>
            </div>
            {[
              { v: "10", l: t.statCreators },
              { v: "4.2M", l: t.statReach },
              { v: "905K", l: t.statViews },
            ].map((s) => (
              <div key={s.l} className="bg-[#0d0d0d] px-4 py-5 text-center">
                <div className="display text-[clamp(1.8rem,5vw,2.6rem)] text-accent leading-none">{s.v}</div>
                <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest text-text-muted mt-1.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE BRIEF */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="ccd-card frame-full p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-mono text-[12px] uppercase tracking-[0.25em] text-text-muted">
              {t.briefLabel}
            </span>
          </div>
          <p className="text-[clamp(1.4rem,3.6vw,2.4rem)] leading-[1.2] font-light text-text-primary max-w-4xl">
            {t.briefBody.split("@82major_official")[0]}
            <span className="text-accent font-normal">@82major_official</span>
            {t.briefBody.split("@82major_official")[1]}
          </p>

          <a
            href={SIGN_DANCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 mt-9 px-6 py-3.5 bg-accent text-white text-[14px] font-semibold tracking-wide hover:bg-[#e02d2d] transition-colors"
          >
            <TikTokGlyph className="w-4 h-4" />
            {t.briefCta}
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </section>

      {/* CREATOR ROSTER */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-[clamp(2rem,6vw,3.4rem)] leading-none">{t.rosterLabel}</h2>
            <p className="text-[14px] text-text-muted mt-3">{t.rosterSub}</p>
          </div>
          <div className="font-mono text-[12px] uppercase tracking-widest text-text-muted">01 — 10</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CREATORS.map((c, i) => (
            <a
              key={c.handle}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ccd-card rv group relative p-6 flex flex-col"
              style={{ animationDelay: `${(i % 3) * 0.06 + 0.05}s` }}
            >
              <span className="absolute top-4 right-5 font-mono text-[11px] text-text-muted/70 group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 flex items-center justify-center bg-[#0A0A0A] border border-[#2a2a2a] group-hover:border-accent/60 transition-colors">
                  <TikTokGlyph className="w-5 h-5 text-text-primary group-hover:text-accent transition-colors" />
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-semibold text-text-primary truncate">@{c.handle}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-text-muted">TikTok</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-px bg-[#2a2a2a] border border-[#2a2a2a] mb-5">
                <div className="bg-[#1A1A1A] px-3 py-3">
                  <div className="display text-[1.5rem] text-text-primary leading-none">{c.followers}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted mt-1.5">
                    {t.cardFollowers}
                  </div>
                </div>
                <div className="bg-[#1A1A1A] px-3 py-3">
                  <div className="display text-[1.5rem] text-accent leading-none">{c.avgViews}</div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-text-muted mt-1.5">
                    {t.cardViews}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-[13px] text-text-muted group-hover:text-text-primary transition-colors">
                <span>{t.cardCta}</span>
                <span className="text-accent transition-transform group-hover:translate-x-1">&#8599;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent" />
            <span className="text-[13px] text-text-muted">&copy; {t.footer}</span>
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-text-muted">82MAJOR · SIGN</div>
        </div>
      </footer>
    </div>
  );
}
