// SOWØ proposal data. Numbers are shared by the EN and KO pages.
// Sources: Hanteo / Circle (via KOREAN SALES aggregation), Korea Herald, allkpop, TopStarNews,
// Spotify for Artists, and 2025–26 paid-media benchmark publications. Model figures are CCD estimates.

export type Kpi = {
  id: string;
  en: string;
  ko: string;
  unit: "k" | "n";
  feb?: { target: [number, number]; organic: [number, number]; plan: [number, number] };
  may: { target: [number, number]; organic: [number, number]; plan: [number, number] };
};

// values in thousands unless unit is "n"
export const KPIS: Kpi[] = [
  { id: "ig", en: "Instagram followers", ko: "인스타그램 팔로워", unit: "k",
    feb: { target: [10, 20], organic: [2, 5], plan: [12, 18] },
    may: { target: [40, 80], organic: [8, 15], plan: [45, 60] } },
  { id: "tt", en: "TikTok followers", ko: "틱톡 팔로워", unit: "k",
    feb: { target: [10, 30], organic: [1, 10], plan: [15, 25] },
    may: { target: [50, 100], organic: [10, 25], plan: [60, 80] } },
  { id: "yt", en: "YouTube subscribers", ko: "유튜브 구독자", unit: "k",
    feb: { target: [3, 8], organic: [0.5, 2], plan: [3, 6] },
    may: { target: [20, 40], organic: [4, 8], plan: [20, 28] } },
  { id: "fc", en: "Fan community members", ko: "팬 커뮤니티 회원", unit: "k",
    feb: { target: [2, 3], organic: [0.5, 1], plan: [2, 3] },
    may: { target: [8, 15], organic: [2, 4], plan: [9, 12] } },
  { id: "ps", en: "Pre-saves (Feb 21) / single streams, first month (May)", ko: "프리세이브 (2월 21일) / 싱글 첫 달 스트리밍 (5월)", unit: "k",
    feb: { target: [3, 5], organic: [0.5, 1.5], plan: [4, 6] },
    may: { target: [500, 1000], organic: [100, 250], plan: [600, 850] } },
  { id: "ep", en: "EP first-week physical sales", ko: "EP 초동 음반 판매량", unit: "n",
    may: { target: [3000, 8000], organic: [1000, 13000], plan: [4000, 6000] } },
];

export type Comp = { name: string; label: string; date: string; sales: number; tag: "survival" | "big" | "celebrity" | "small"; note: { en: string; ko: string } };

export const COMPS: Comp[] = [
  { name: "ALPHA DRIVE ONE", label: "Survival show", date: "2026", sales: 1441270, tag: "survival", note: { en: "Top 2026 debut", ko: "2026년 최고 데뷔 기록" } },
  { name: "AND2BLE", label: "YH Entertainment", date: "May 2026", sales: 731673, tag: "survival", note: { en: "Boys Planet alumni, first win in 8 days", ko: "Boys Planet 출신, 데뷔 8일 만에 첫 1위" } },
  { name: "CORTIS", label: "BigHit / HYBE", date: "Aug 2025", sales: 436367, tag: "big", note: { en: "Billboard 200 #15", ko: "Billboard 200 15위" } },
  { name: "AHOF", label: "F&F Entertainment", date: "Jul 2025", sales: 369850, tag: "survival", note: { en: "SBS Universe League", ko: "SBS Universe League 출신" } },
  { name: "idntt", label: "MODHAUS", date: "2025", sales: 336152, tag: "big", note: { en: "Fan-participation model", ko: "팬 참여형 모델" } },
  { name: "CLOSE YOUR EYES", label: "Uncore", date: "Apr 2025", sales: 316047, tag: "survival", note: { en: "JTBC Project 7, first win in 6 days", ko: "JTBC Project 7 출신, 6일 만에 첫 1위" } },
  { name: "KickFlip", label: "JYP", date: "Jan 2025", sales: 276881, tag: "big", note: { en: "Big-4 label", ko: "4대 기획사" } },
  { name: "NAZE", label: "Small / mid agency", date: "May 2026", sales: 130427, tag: "small", note: { en: "Best non-survival small-label debut of 2026. Japan first", ko: "2026년 비서바이벌 중소 기획사 최고 기록. 일본 선행" } },
  { name: "KEYVITUP", label: "iNKODE", date: "Apr 2026", sales: 84882, tag: "celebrity", note: { en: "Produced by Kim Jaejoong", ko: "김재중 프로듀싱" } },
  { name: "LNGSHOT", label: "MORE VISION", date: "Jan 2026", sales: 48016, tag: "celebrity", note: { en: "5.9M monthly listeners by day 59", ko: "데뷔 59일 만에 월간 리스너 590만" } },
  { name: "Daily:Direction", label: "ODDWAVE (first act)", date: "Feb 2026", sales: 29672, tag: "small", note: { en: "First-time label, six-day count", ko: "신생 레이블, 6일 집계" } },
  { name: "XLOV", label: "NaturallyMusic", date: "Jan 2025", sales: 12944, tag: "small", note: { en: "Grew to 224K by second mini", ko: "두 번째 미니앨범에서 22.4만 장으로 성장" } },
  { name: "In A Minute", label: "M.O.M Ent.", date: "Mar 2025", sales: 9587, tag: "small", note: { en: "Self-producing trio", ko: "자체 프로듀싱 3인조" } },
  { name: "NEWBEAT", label: "Beat Interactive", date: "Mar 2025", sales: 8394, tag: "small", note: { en: "Day one: 388", ko: "첫날 388장" } },
  { name: "1VERSE", label: "Singing Beetle", date: "2025", sales: 2928, tag: "small", note: { en: "BBC / WSJ press did not convert", ko: "BBC / WSJ 보도가 판매로 이어지지 않음" } },
];

export type Tier = {
  id: "lean" | "rec" | "agg";
  total: number;
  monthly: number;
  lines: { media: number; creators: number; offline: number; fee: number };
  out: Record<string, [number, number]>; // thousands except ep (copies)
};

// Budget covers one cycle: Dec 1, 2026 to the EP week in early May 2027 (six months).
// The CCD fee sits inside each total.
export const TIERS: Tier[] = [
  { id: "lean", total: 105000, monthly: 5000, lines: { media: 60000, creators: 10000, offline: 5000, fee: 30000 },
    out: { ig: [25, 35], tt: [30, 50], yt: [10, 15], fc: [5, 8], ps: [350, 550], ep: [2500, 4000] } },
  { id: "rec", total: 225000, monthly: 7500, lines: { media: 135000, creators: 30000, offline: 15000, fee: 45000 },
    out: { ig: [45, 60], tt: [60, 80], yt: [20, 28], fc: [9, 12], ps: [600, 850], ep: [4000, 6000] } },
  { id: "agg", total: 410000, monthly: 10000, lines: { media: 260000, creators: 55000, offline: 35000, fee: 60000 },
    out: { ig: [70, 90], tt: [100, 130], yt: [35, 45], fc: [14, 18], ps: [1000, 1400], ep: [6000, 9000] } },
];

export const PHASES = [
  { id: "p0", share: 7, media: 9500, from: "2026-12-01", to: "2026-12-31" },
  { id: "p1", share: 33, media: 44500, from: "2027-01-01", to: "2027-02-21" },
  { id: "p2", share: 35, media: 47000, from: "2027-02-22", to: "2027-03-15" },
  { id: "p3", share: 25, media: 34000, from: "2027-03-16", to: "2027-05-08" },
];

export const REGIONS = [
  { id: "kr", share: 25 }, { id: "eu", share: 30 }, { id: "jp", share: 15 }, { id: "us", share: 10 }, { id: "sea", share: 20 },
];

export const PLATFORMS = [
  { id: "TikTok", share: 30 }, { id: "Meta / Instagram", share: 30 }, { id: "YouTube", share: 20 },
  { id: "Naver / Kakao / Seoul OOH", share: 10 }, { id: "Spotify Marquee / Showcase", share: 5 }, { id: "X", share: 5 },
];

export const SOURCES = [
  "Hanteo and Circle Chart first-week figures via KOREAN SALES aggregation (2025–2026)",
  "Korea Herald: debut spend by label tier; CORTIS debut-week follower gains vs K-pop averages; 2025 K-pop market data",
  "allkpop: LNGSHOT passes 100M Spotify streams 59 days after debut (Feb 2026)",
  "TopStarNews: LNGSHOT S.W.I.S.H. day-one sales, Kakao Entertainment × Atlantic project (Nov 2026)",
  "Spotify for Artists: Countdown Pages (pre-save lift and week-one streaming behavior)",
  "Spotify Newsroom and Euronews: K-pop discovery by country; Spotify Wrapped 2025 K-pop markets",
  "Playbill, OD Company, Deadline, Kyunghyang Shinmun, eToday: OD COMPANY and Shin Choon-soo background",
  "Adligator, TransparencyAds (Pantheon), Stackmatix: Meta and TikTok CPM by country, 2026",
  "Dynamoi: music campaign CPMs, cost per Spotify save, YouTube CPV and cost per subscriber (2025–26)",
  "Sonikit 2026 and a MeansMGMT case study: cost per pre-save",
  "Kolect, InfluencerFee, Insense: TikTok creator rates for music and dance",
  "iNews24, Dukplace, Kmong: Seoul subway and LED fan-ad pricing",
  "Variety, TicketNews and tour listings: spring and summer 2027 European K-pop calendar",
];
