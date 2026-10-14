"use client";
import { usePlan } from "@/lib/plan-context";

const UI = {
  en: {
    partnership: "Partnership",
    preparedBy: "Prepared By",
    approve: "Approve",
    objective: "Objective",
    strategy: "Strategy",
    components: "Components",
    tactics: "Tactics",
    examples: "Examples",
    kpis: "KPIs",
    featureArtists: "Feature Artist Candidates",
    references: "References",
    swipeTimeline: "Swipe to see full timeline",
    light: "Light",
    active: "Active",
    heavy: "Heavy",
    weekBreakdown: "Week-by-week breakdown",
    recommended: "Recommended",
    retainer: "Crowd Control Retainer",
    mediaMgmt: "Media Mgmt",
    breakdown: "Breakdown By Vertical",
    deployable: "Deployable Net of Agency Fee",
    addOns: "Optional Add-Ons (Outside The Tier)",
    sending: "Sending...",
    sendError: "Couldn't send. Try again.",
    openInstagram: "Open on Instagram ↗",
    loadTikTok: "Load TikTok",
    loadInstagram: "Load Instagram post",
    viewOriginal: "View original post ↗",
    format: "Format",
    beatByBeat: "Beat by Beat",
    whyItWorks: "Why It Works",
    result: "Result",
    forArtist: "For {artist}",
  },
  ko: {
    partnership: "파트너십",
    preparedBy: "작성",
    approve: "승인",
    objective: "목표",
    strategy: "전략",
    components: "구성 요소",
    tactics: "실행 전술",
    examples: "사례",
    kpis: "핵심 지표",
    featureArtists: "피처링 아티스트 후보",
    references: "참고 자료",
    swipeTimeline: "옆으로 밀어 전체 일정 보기",
    light: "낮음",
    active: "보통",
    heavy: "높음",
    weekBreakdown: "주차별 세부 계획",
    recommended: "추천",
    retainer: "리테이너",
    mediaMgmt: "미디어 관리",
    breakdown: "항목별 내역",
    deployable: "에이전시 수수료 제외 집행 예산",
    addOns: "선택 추가 항목 (티어 외)",
    sending: "전송 중...",
    sendError: "전송하지 못했습니다. 다시 시도해 주세요.",
    openInstagram: "Instagram에서 보기 ↗",
    loadTikTok: "TikTok 불러오기",
    loadInstagram: "Instagram 게시물 불러오기",
    viewOriginal: "원본 게시물 보기 ↗",
    format: "포맷",
    beatByBeat: "구간별 분석",
    whyItWorks: "효과 요인",
    result: "성과",
    forArtist: "{artist} 적용 방안",
  },
} as const;

export type UIKey = keyof typeof UI.en;

export function useT() {
  const plan = usePlan();
  const lang = plan.language === "ko" ? "ko" : "en";
  return (key: UIKey, vars?: Record<string, string>) => {
    let s: string = UI[lang][key] ?? UI.en[key];
    vars = { artist: plan.cover.title, ...(vars ?? {}) };
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, v);
    return s;
  };
}
