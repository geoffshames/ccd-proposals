import type { StrategyPlanData } from "../plan-context";

export const kiiikiiiPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/kiiikiii/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "kiiikiii", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "KiiiKiii",
    subtitle: "KiiiKiii가 동종 업계 내에서 어느 위치에 있는지 소비 우선 감사와 함께, 대중적 인기를 팬덤으로 전환하는 전략을 제시합니다.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, Crowd Control Digital",
    date: "2026년 8월",
    backgroundImage: "/images/kiiikiii/kiiikiii-group.jpg",
  },

  approveCta: {
    label: "승인",
    sentLabel: "전송되었습니다. 저희 팀에서 연락드리겠습니다.",
    caption: "승인 시 CROWD CONTROL DIGITAL에 알림",
  },

  sections: [
    // ===================================================================
    // 01. Overview & Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "개요",
      title: "개요 및 목표",
      subtitle: "대중이 KiiiKiii를 먼저 발견했으며, 팬덤은 그 이후에 발견했습니다. 본 문서는 해당 격차를 상세히 감사하고 이를 해소하는 방안을 제시합니다.",
      body: [
        "Eighteen months after debut, KiiiKiii has the consumption profile of a group a tier above its infrastructure. \"404 (New Era)\" reached No. 1 on Melon through a 16-day climb and became Billboard's top-ranked K-pop song of 2026 at the year's midpoint. \"Pop Off Pop Off\" is repeating the same pattern now: No. 1 on Spotify Korea within ten days of release, all six album tracks charting, and Spotify monthly listeners at an all-time high of 3.96M and still climbing at the date of this audit. Critics, editorial playlists, and the Korean general public have all arrived.",
        "아직 구축되지 않은 것은 그 관심을 포착하고 전환하는 레이어입니다: CRM, 미국 소유 채널 네트워크, 멤버십 및 리테일 순간, 멤버 수준의 콘텐츠 프랜차이즈, 그리고 유사한 열기를 가진 경쟁사들이 이미 운영하고 있는 라이브 발자취입니다. 본 문서의 감사 부분은 스트리밍, 이탈 행동, 소셜, 비디오 인텔리전스 및 인프라 전반에 걸쳐 이러한 격차를 정확하게 측정합니다. 전략 부분은 현재의 Pop Off Pop Off 사이클과 병행하여 실행되고 그 이후의 모든 릴리스에 누적되도록 범위가 지정된 전환 기계를 처방합니다.",
      ],
      supports: {
        heading: "본 문서의 범위",
        items: [
          "2024-2026년 걸그룹 클래스와의 시장 포지션 (실시간 소비 데이터 기반 계층화)",
          "Spotify consumption and decay analysis: track-level retention curves, era-aligned launch curves, listener-floor economics",
          "비디오 인텔리전스: 성과 데이터와 결합된 KiiiKiii 및 경쟁사 영상 113개에 대한 프레임 단위 분석",
          "인프라 감사: 팬 플랫폼 스택, CRM 검증, 라이브 비즈니스, 리테일, 일본 기반 작업",
          "전환 전략: 네 가지 실행 버티컬, 파트너 주도 워크스트림, 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "Spotify monthly listeners: 3.96M to 8M+ during active cycles, entering the tier the group's consumption already points at",
          "팬덤 전환: 팔로워-리스너 비율 0.246에서 0.40+로, 동종 업계가 안정적으로 수익을 창출하는 범위",
          "실물 앨범: 다음 전체 주기에서 첫 주 판매량 150K 이상으로 회복, 데뷔 최고치의 절반 이상 회복",
          "숏폼: TikTok 팔로워 2.2M에서 5M으로, 재조정된 포맷 믹스에서 게시물당 중간값 3배 증가",
          "첫 미국 매진 쇼케이스와 첫 미국 리테일 드롭으로 그룹의 가장 큰 리스너 시장 전환",
          "일본: 디지털 지원 하에 정식 데뷔, 이미 구축된 기반 전환",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "18 Months of Spotify Consumption",
          subtitle: "데뷔 이후 주간 월간 리스너 및 팔로워 수치. 팔로워는 단 한 주도 감소한 적이 없으며, 각 시대마다 리스너 바닥을 더 높게 재설정합니다.",
          series: [
            {
              name: "월간 리스너",
              points: [
                { x: "2/26/25", y: 42075 }, { x: "3/5/25", y: 303137 }, { x: "3/12/25", y: 709813 }, { x: "3/19/25", y: 1030302 }, { x: "3/26/25", y: 1394572 }, { x: "4/2/25", y: 1690844 }, { x: "4/9/25", y: 1800939 }, { x: "4/16/25", y: 1816555 }, { x: "4/23/25", y: 1773572 }, { x: "4/30/25", y: 1622513 }, { x: "5/7/25", y: 1496555 }, { x: "5/14/25", y: 1429595 }, { x: "25. 5. 21.", y: 1394789 }, { x: "25. 5. 28.", y: 1316870 }, { x: "25. 6. 4.", y: 1230975 }, { x: "25. 6. 11.", y: 1142456 }, { x: "25. 6. 18.", y: 1041609 }, { x: "25. 6. 25.", y: 1021772 }, { x: "25. 7. 2.", y: 997039 }, { x: "25. 7. 9.", y: 980630 }, { x: "25. 7. 16.", y: 957721 }, { x: "25. 7. 23.", y: 880930 }, { x: "25. 7. 30.", y: 812380 }, { x: "25. 8. 6.", y: 750756 }, { x: "25. 8. 13.", y: 865993 }, { x: "25. 8. 20.", y: 1070541 }, { x: "25. 8. 27.", y: 1257338 }, { x: "25. 9. 3.", y: 1377135 }, { x: "25. 9. 10.", y: 1381161 }, { x: "25. 9. 17.", y: 1317092 }, { x: "25. 9. 24.", y: 1190848 }, { x: "25. 10. 1.", y: 1113362 }, { x: "2025년 10월 8일", y: 1058594 }, { x: "2025년 10월 15일", y: 1001243 }, { x: "2025년 10월 22일", y: 926214 }, { x: "2025년 10월 29일", y: 866735 }, { x: "2025년 11월 5일", y: 820899 }, { x: "2025년 11월 12일", y: 833001 }, { x: "2025년 11월 19일", y: 893196 }, { x: "2025년 11월 26일", y: 905834 }, { x: "2025년 12월 3일", y: 927667 }, { x: "2025년 12월 10일", y: 887948 }, { x: "2025년 12월 17일", y: 857681 }, { x: "2025년 12월 24일", y: 842081 }, { x: "2025년 12월 31일", y: 831721 }, { x: "2026년 1월 7일", y: 824649 }, { x: "2026년 1월 14일", y: 841397 }, { x: "2026년 1월 21일", y: 867873 }, { x: "2026년 1월 28일", y: 914832 }, { x: "2026년 2월 4일", y: 1588505 }, { x: "2026년 2월 11일", y: 2110587 }, { x: "2026년 2월 18일", y: 2721359 }, { x: "2026년 2월 25일", y: 3209569 }, { x: "2026년 3월 4일", y: 3503311 }, { x: "2026년 3월 11일", y: 3647896 }, { x: "2026년 3월 18일", y: 3718365 }, { x: "2026년 3월 25일", y: 3723676 }, { x: "2026년 4월 1일", y: 3746821 }, { x: "2026년 4월 8일", y: 3793821 }, { x: "2026년 4월 15일", y: 3822040 }, { x: "2026년 4월 22일", y: 3819436 }, { x: "2026년 4월 29일", y: 3800789 }, { x: "2026년 5월 6일", y: 3786215 }, { x: "2026년 5월 13일", y: 3757944 }, { x: "2026년 5월 20일", y: 3686434 }, { x: "2026년 5월 27일", y: 3686581 }, { x: "2026년 6월 3일", y: 3691572 }, { x: "2026년 6월 10일", y: 3681357 }, { x: "2026년 6월 17일", y: 3687714 }, { x: "2026년 6월 24일", y: 3617541 }, { x: "2026년 7월 1일", y: 3537890 }, { x: "2026년 7월 8일", y: 3447737 }, { x: "26년 7월 15일", y: 3346487 }, { x: "26년 7월 22일", y: 3291450 }, { x: "26년 7월 29일", y: 3232246 }, { x: "26년 8월 5일", y: 3226604 }, { x: "26년 8월 12일", y: 3234105 }, { x: "26년 8월 19일", y: 3525926 }, { x: "26년 8월 26일", y: 3960609 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "2/26/25", y: 16158 }, { x: "3/5/25", y: 44281 }, { x: "3/12/25", y: 59917 }, { x: "3/19/25", y: 71360 }, { x: "3/26/25", y: 84666 }, { x: "4/2/25", y: 98878 }, { x: "4/9/25", y: 109584 }, { x: "4/16/25", y: 117936 }, { x: "4/23/25", y: 125179 }, { x: "4/30/25", y: 133975 }, { x: "5/7/25", y: 141541 }, { x: "5/14/25", y: 148227 }, { x: "25. 5. 21.", y: 154121 }, { x: "25. 5. 28.", y: 159259 }, { x: "25. 6. 4.", y: 165037 }, { x: "25. 6. 11.", y: 170615 }, { x: "25. 6. 18.", y: 176263 }, { x: "25. 6. 25.", y: 181143 }, { x: "25. 7. 2.", y: 185506 }, { x: "25. 7. 9.", y: 189862 }, { x: "25. 7. 16.", y: 194902 }, { x: "25. 7. 23.", y: 199644 }, { x: "25. 7. 30.", y: 204291 }, { x: "25. 8. 6.", y: 210694 }, { x: "25. 8. 13.", y: 219269 }, { x: "25. 8. 20.", y: 226242 }, { x: "25. 8. 27.", y: 233343 }, { x: "25. 9. 3.", y: 238914 }, { x: "25. 9. 10.", y: 243369 }, { x: "25. 9. 17.", y: 249136 }, { x: "25. 9. 24.", y: 254488 }, { x: "25. 10. 1.", y: 259829 }, { x: "2025년 10월 8일", y: 264792 }, { x: "2025년 10월 15일", y: 269834 }, { x: "2025년 10월 22일", y: 274744 }, { x: "2025년 10월 29일", y: 279911 }, { x: "2025년 11월 5일", y: 284526 }, { x: "2025년 11월 12일", y: 290233 }, { x: "2025년 11월 19일", y: 295210 }, { x: "2025년 11월 26일", y: 301912 }, { x: "2025년 12월 3일", y: 307750 }, { x: "2025년 12월 10일", y: 316882 }, { x: "2025년 12월 17일", y: 322149 }, { x: "2025년 12월 24일", y: 328364 }, { x: "2025년 12월 31일", y: 335502 }, { x: "2026년 1월 7일", y: 342836 }, { x: "2026년 1월 14일", y: 350353 }, { x: "2026년 1월 21일", y: 362144 }, { x: "2026년 1월 28일", y: 375502 }, { x: "2026년 2월 4일", y: 396989 }, { x: "2026년 2월 11일", y: 414802 }, { x: "2026년 2월 18일", y: 433293 }, { x: "2026년 2월 25일", y: 452981 }, { x: "2026년 3월 4일", y: 472884 }, { x: "2026년 3월 11일", y: 494508 }, { x: "2026년 3월 18일", y: 515583 }, { x: "2026년 3월 25일", y: 538285 }, { x: "2026년 4월 1일", y: 560361 }, { x: "2026년 4월 8일", y: 582755 }, { x: "2026년 4월 15일", y: 602358 }, { x: "2026년 4월 22일", y: 624096 }, { x: "2026년 4월 29일", y: 644971 }, { x: "2026년 5월 6일", y: 664489 }, { x: "2026년 5월 13일", y: 682384 }, { x: "2026년 5월 20일", y: 700695 }, { x: "2026년 5월 27일", y: 718797 }, { x: "2026년 6월 3일", y: 736458 }, { x: "2026년 6월 10일", y: 754557 }, { x: "2026년 6월 17일", y: 771708 }, { x: "2026년 6월 24일", y: 788641 }, { x: "2026년 7월 1일", y: 805011 }, { x: "2026년 7월 8일", y: 819365 }, { x: "26년 7월 15일", y: 839117 }, { x: "26년 7월 22일", y: 855740 }, { x: "26년 7월 29일", y: 876272 }, { x: "26년 8월 5일", y: 893075 }, { x: "26년 8월 12일", y: 918742 }, { x: "26년 8월 19일", y: 948394 }, { x: "26년 8월 26일", y: 973161 },
              ],
            },
          ],
          markers: [
            { x: "3/26/25", label: "DEBUT" },
            { x: "25. 8. 6.", label: "DANCING ALONE" },
            { x: "2026년 1월 21일", label: "404" },
            { x: "26년 8월 12일", label: "POP OFF" },
          ],
          tall: true,
          source: "Chartmetric, 주간 리딩, 2025년 2월 26일부터 2026년 8월 26일까지",
        },
      ],
      footnote: "All data in this document was pulled August 26, 2026 unless dated otherwise. Sources: Chartmetric, Spotify weekly and daily chart archives, Hanteo and Circle published tallies, platform data, and a dedicated KiiiKiii video intelligence store.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 지위",
      philosophy: "포지셔닝은 평판이 아닌 실시간 소비량에 따라 계층화될 때만 방어 가능합니다. 11명의 아티스트, 1개의 메트릭 스파인, 3개의 티어.",
      intro: "The comparison set spans the groups KiiiKiii is measured against commercially and creatively: the direct 2024-2025 rookie class, the established fourth-generation acts, and the global-format outlier. Spotify monthly listeners (Chartmetric, Aug 2026) is the spine; the notes carry what each peer does well and what KiiiKiii can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "티어 맵",
          featureTiersHeading: "월간 리스너별 티어링된 비교 세트",
          featureTiers: [
            {
              label: "티어 1 / 글로벌 엔진",
              artists: [
                {
                  name: "KATSEYE",
                  monthlyListeners: "38.5M 월간 리스너",
                  instagram: "12.5M Spotify Followers",
                  reference: "WILD, Billboard 200 No. 1, 2026년 8월",
                  note: "이 카테고리의 미국 최고 수준 설정자: 팝 라디오 Top 10, 그래미 신인상 후보 지명, 매진된 아레나 투어. 이 클래스의 걸그룹이 미국 주류 아티스트가 될 수 있다는 증거이자, 이를 위해 얼마나 많은 인프라가 필요한지에 대한 증거입니다.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "월간 리스너 2,150만 명",
                  instagram: "7.6M Spotify Followers",
                  reference: "MAMIHLAPINATAPAI, 커리어 하이 첫 주 412K, 2026년 4월",
                  note: "숏폼 네이티브 벤치마크: 하나의 챌린지 프랜차이즈를 끊임없이 순환시키며, 안정적인 40만 장의 물리적 판매량 하한선과 일본 우선 국제적 구축을 특징으로 합니다. 2024년 이후 미국 스트리밍 영향력이 약화되어 미국 시장 진출 기회가 열려 있습니다.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "월간 리스너 2,060만 명",
                  instagram: "11.1M Spotify Followers",
                  reference: "SPAGHETTI, 빌보드 핫 100 50위, 2025년 11월",
                  note: "이 세트의 서구 스트리밍 전략: 영어 중심 싱글, 빌보드 200 톱 10 5회 연속 진입, 그리고 미국 아레나 투어를 포함한 34회 월드 투어. 퍼포먼스 정체성을 미국 투어 수익으로 전환하는 모델입니다.",
                },
              ],
            },
            {
              label: "티어 2 / 팬덤 규모",
              artists: [
                {
                  name: "NewJeans",
                  monthlyListeners: "월간 리스너 1,380만 명",
                  instagram: "13.4M Spotify Followers",
                  reference: "2024년 이후 신규 발매 없이 1,300만 명 이상의 리스너를 유지하는 카탈로그",
                  note: "휴면 상태이지만 교훈적입니다. 이처럼 견고한 카탈로그 강점은 명확한 사운드 정체성이 구매하는 것입니다. 이들의 재활성화 시점은 2026년 말의 경쟁 변수입니다.",
                },
                {
                  name: "aespa",
                  monthlyListeners: "월간 리스너 1,140만 명",
                  instagram: "11.8M Spotify Followers",
                  reference: "확고한 4세대 아티스트",
                  note: "1.0 이상의 비율: 월간 리스너보다 팔로워 수가 많으며, 성숙한 팬덤 아티스트의 특징입니다. 이것이 전환 곡선의 끝단이 보이는 모습입니다.",
                },
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "월간 리스너 810만 명",
                  instagram: "2.4M Spotify Followers",
                  reference: "Lemon Tang, 첫 주 59만 2천 장, 2026년 6월",
                  note: "직접적인 경쟁자. 같은 시즌 데뷔하여 2025년 신인 타이틀을 휩쓸었으며, 피지컬과 디지털을 동시에 성장시키고 있는 유일한 그룹입니다. 현재까지 미국 내 인프라가 전혀 없어 KiiiKiii가 여전히 우위를 점할 수 있는 부분입니다.",
                },
                {
                  name: "BABYMONSTER",
                  monthlyListeners: "월간 리스너 780만 명",
                  instagram: "8.7M Spotify Followers",
                  reference: "CHOOM, 첫 주 약 75만 장, 2026년 5월",
                  note: "아시아 피지컬 강자: 돔 규모 투어링과 해당 그룹 내 최대 첫 주 판매량을 기록했으며, 미국은 여전히 부차적입니다. 그들의 모델은 팬덤 우선이며, KiiiKiii는 그 반대입니다.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "월간 리스너 580만 명",
                  instagram: "7.6M Spotify Followers",
                  reference: "2026년까지 6회의 퍼펙트 올킬 달성; 걸그룹 브랜드 평판 1위",
                  note: "KiiiKiii 자체 레이블의 내부 선례는 다음과 같습니다: 첫째, 대중적인 디지털 히트, 둘째, 팬덤 대상 실물 앨범, 셋째, 멤버별 브랜드 가치, 넷째, 투어링입니다. KiiiKiii는 동일한 순서에서 두 단계를 진행했습니다.",
                },
              ],
            },
            {
              label: "Tier 3 / 경쟁 그룹",
              artists: [
                {
                  name: "MEOVV",
                  monthlyListeners: "월간 리스너 500만 명",
                  instagram: "2.0M Spotify Followers",
                  reference: "BITE NOW, 2026년 6월",
                  note: "돌파 이전 규모에서의 하이디자인 브랜딩. 현재 순수 리스너 수에서는 KiiiKiii보다 앞서 있으나, 차트, 수상, 문화적 영향력에서는 뒤처져 있습니다.",
                },
                {
                  name: "KiiiKiii",
                  monthlyListeners: "월간 리스너 396만 명",
                  instagram: "973K Spotify Followers",
                  reference: "404 (New Era), 멜론 1위 및 2026년 상반기 빌보드 선정 최고 K팝 송",
                  note: "본 문서의 대상: 리스너 부문 Tier 3 최상위, 2026년 곡 영향력 부문 Tier 1 최상위, 전환율 부문 전체 최하위. 이 격차가 전략입니다.",
                },
                {
                  name: "izna",
                  monthlyListeners: "월간 리스너 150만 명",
                  instagram: "652K Spotify Followers",
                  reference: "SET THE TEMPO, 2026년 6월",
                  note: "미국 유통 파트너십을 갖춘 서바이벌 쇼 그룹. 현재 이 클래스 주변에서 구조적인 미국 투자가 이루어지고 있음을 상기시켜 드립니다.",
                },
              ],
            },
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "KATSEYE", y: 38493596 },
                    { x: "ILLIT", y: 21538086 },
                    { x: "LE SSERAFIM", y: 20649268 },
                    { x: "NewJeans", y: 13792357 },
                    { x: "aespa", y: 11376735 },
                    { x: "Hearts2Hearts", y: 8080148 },
                    { x: "BABYMONSTER", y: 7790398 },
                    { x: "IVE", y: 5809149 },
                    { x: "MEOVV", y: 4975284 },
                    { x: "KiiiKiii", y: 3960609 },
                    { x: "izna", y: 1532470 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              source: "Chartmetric, 2026년 8월 26일",
            },
            {
              kind: "hbars",
              title: "팬덤 전환율: 월간 리스너당 팔로워 수",
              subtitle: "본 감사 보고서의 핵심 격차입니다. 0.40 이상 아티스트들은 팬덤을 안정적으로 수익화하고 있으며, 기성 아티스트들은 1.0 이상입니다. KiiiKiii는 리스너 수가 역대 최고치를 기록하는 동안 이 세트에서 최하위에 있습니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "KiiiKiii", y: 0.246 },
                    { x: "Hearts2Hearts", y: 0.301 },
                    { x: "KATSEYE", y: 0.325 },
                    { x: "ILLIT", y: 0.351 },
                    { x: "MEOVV", y: 0.4 },
                    { x: "izna", y: 0.425 },
                    { x: "LE SSERAFIM", y: 0.538 },
                    { x: "NewJeans", y: 0.972 },
                    { x: "aespa", y: 1.035 },
                    { x: "BABYMONSTER", y: 1.117 },
                    { x: "IVE", y: 1.315 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              source: "Chartmetric, 2026년 8월 26일",
            },
          ],
        },
        {
          label: "B",
          title: "세트 분할 방식",
          objective: "이 클래스를 관통하는 두 개의 경로가 있으며, KiiiKiii는 현재 그 사이에 위치해 있습니다.",
          strategy: "본 세트는 미국 스트리밍 시장(KATSEYE가 선두, LE SSERAFIM이 확고, ILLIT이 주춤)과 한국 및 아시아 실물 앨범 시장(Hearts2Hearts가 가장 빠른 상승세를 보이며 BABYMONSTER가 규모를 이끕니다)으로 나뉩니다. KiiiKiii의 소비 패턴은 미국 스트리밍 시장과 일치하며, 현재까지의 프로모션 활동은 거의 전적으로 한국 시장에 집중되었습니다. 미국은 그룹에 대한 프로모션이 전혀 이루어지지 않았음에도 불구하고 이미 가장 큰 리스너 시장입니다. 이러한 불일치는 본 감사에서 가장 큰 미개척 자산입니다.",
          components: {
            heading: "티어링이 말하는 것",
            items: [
              "티어 2와의 리스너 격차는 한 번의 강력한 활동 주기만큼 넓습니다. KiiiKiii는 Pop Off Pop Off 발매 후 16일 동안 월간 리스너 72만 8천 명을 추가했습니다.",
              "전환 격차가 실제 거리입니다. KiiiKiii보다 위에 있는 모든 그룹은 더 높은 비율로 리스너를 팔로워로 전환합니다.",
              "Hearts2Hearts는 신인왕과 첫 주 판매량 6배를 보유하고 있지만 미국에서의 입지는 없습니다. KiiiKiii는 이미 미국 주요 무대에 섰습니다.",
              "성공적인 신인 활동의 현재 기준은 초동 40만~60만 장과 써클 디지털 차트 TOP 10 진입입니다. KiiiKiii는 디지털 기준은 달성했으나 아직 물리 음반 기준은 달성하지 못했습니다.",
            ],
          },
        },
      ],
      footnote: "리스너 및 팔로워 수치: Chartmetric, 2026년 8월 26일 기준. 판매량 수치: Hanteo 및 Circle 발표 집계. 티어 라벨은 품질이 아닌 소비 규모를 설명합니다.",
    },

    // ===================================================================
    // 03. Consumption & Decay Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비 및 하락세 분석",
      philosophy: "활동 초기부터 하락세가 나타납니다. KiiiKiii의 히트곡은 한 달간 상승세를 보였고, 발매 7개월이 지난 지금도 발매 첫 주의 두 배에 달하는 수치를 유지하고 있습니다. 이러한 추세가 단일 차트 최고 순위보다 이 전략이 투자하는 핵심 자산입니다.",
      intro: "This section reads KiiiKiii's Spotify consumption at three depths: the fandom-conversion ratio, track-level weekly decay against the class's biggest recent hits, and the listener-floor economics between eras. Stream series come from the Spotify weekly and daily South Korea chart archives; listener series from Chartmetric daily data.",
      subBlocks: [
        {
          label: "A",
          title: "팬덤 전환율",
          objective: "동종 그룹 및 KiiiKiii 자체 기록 대비 팬덤 확보를 측정하십시오.",
          strategy: "전환율은 0.246으로, 이번 달 청취자 4명 중 1명 미만이 팔로워로 전환했음을 의미합니다. 이는 11개 아티스트 중 가장 낮은 수치이며, 리스너 수는 역대 최고치를 기록하고 있습니다. 하지만 내부 추세는 건강합니다: 팔로워 수는 데뷔 이후 매주 꾸준히 증가했으며(16K에서 973K까지), 전환율은 활동 시기 사이에 회복되었다가 히트곡이 유입 속도보다 포착 속도가 느릴 때마다 하락하는 경향을 보입니다. 시스템은 작동하고 있으며, 전담 전환 인프라로 지원된 적은 없습니다.",
          charts: [
            {
              kind: "line",
              title: "월별 팔로워-리스너 비율",
              subtitle: "각 발견 웨이브(404, Pop Off)는 비율을 하락시키지만, 이후 전환을 통해 다시 상승합니다. 본 전략의 목표는 이러한 지연 시간을 단축하는 것입니다.",
              unit: "",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "4/25", y: 0.058 }, { x: "5/25", y: 0.084 }, { x: "6/25", y: 0.129 }, { x: "7/25", y: 0.185 }, { x: "8/25", y: 0.261 }, { x: "9/25", y: 0.176 }, { x: "10/25", y: 0.233 }, { x: "11/25", y: 0.334 }, { x: "12/25", y: 0.33 }, { x: "1/26", y: 0.405 }, { x: "2/26", y: 0.328 }, { x: "3/26", y: 0.136 }, { x: "4/26", y: 0.15 }, { x: "5/26", y: 0.172 }, { x: "6/26", y: 0.198 }, { x: "7/26", y: 0.228 }, { x: "8/26", y: 0.246 },
                  ],
                },
              ],
              markers: [
                { x: "3/26", label: "404 WAVE" },
                { x: "8/26", label: "POP OFF" },
              ],
              note: "목표: 12개월 내 0.40 이상, 약 3백만 팔로워 대 8백만 활성 사이클 리스너.",
              source: "Chartmetric 월별 데이터, 2025년 4월 ~ 2026년 8월",
            },
          ],
        },
        {
          label: "B",
          title: "트랙 소멸 분석",
          objective: "KiiiKiii의 히트곡이 동일한 차트 데이터를 기준으로, 해당 클래스의 대표적인 최근 히트곡들과 비교했을 때 주간 스트림 유지율을 어떻게 보이는지 비교하십시오.",
          strategy: "네 곡의 벤치마크 히트곡 중 세 곡은 첫 달 안에 출시 주 수치를 넘어섭니다. 반년 뒤까지 그 수준을 유지하는 곡은 하나뿐입니다. \"404 (New Era)\"는 4주차에 출시 주 대비 4.8배를 기록했고, 24주차에도 여전히 1.8배를 유지하며 출시 7개월 후 한국에서만 하루 평균 35.6K 스트림을 기록했습니다. Magnetic은 4주차에 2.7배까지 올랐다가 24주차에는 출시 주 대비 59%로 내려왔고, 후반 유지율에서 가장 강력한 비교 대상인 RUDE!는 1.2배로 정점을 찍은 뒤 63%를 유지했습니다. 404는 표시된 모든 주차에서 가장 높은 배수를 기록하며, 출시 시점 아래로 한 번도 떨어지지 않은 유일한 곡입니다. 이는 해당 클래스가 지속하지 못하는 종류의 카탈로그 행동이며, 본 감사에서 가장 강력한 단일 논거입니다: 곡이 연결될 때 이 그룹 주변으로 관심이 복리로 증가합니다. 전략의 임무는 향후 모든 출시가 이러한 복리 효과를 포착하는 인프라에 안착하도록 하는 것입니다.",
          charts: [
            {
              kind: "line",
              title: "주간 스트림 유지율 대 출시 주",
              subtitle: "각 트랙의 첫 차트 주차를 기준으로 지수화한 주간 한국 스트림. 대부분의 클래스는 초반에 상승한 뒤 출시 주 아래로 안착합니다. 404는 그렇지 않습니다.",
              unit: "x",
              series: [
                {
                  name: "404 (New Era)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 4.83 }, { x: "W8", y: 3.01 }, { x: "W12", y: 2.13 }, { x: "W16", y: 1.79 }, { x: "W20", y: 2.25 }, { x: "W24", y: 1.84 },
                  ],
                },
                {
                  name: "RUDE! (Hearts2Hearts)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 1.21 }, { x: "W8", y: 0.85 }, { x: "W12", y: 0.75 }, { x: "W16", y: 0.71 }, { x: "W20", y: 0.65 }, { x: "W24", y: 0.63 },
                  ],
                },
                {
                  name: "SPAGHETTI (LSF)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.75 }, { x: "W8", y: 0.56 }, { x: "W12", y: 0.53 }, { x: "W16", y: 0.41 }, { x: "W20", y: 0.35 }, { x: "W24", y: null },
                  ],
                },
                {
                  name: "Magnetic (ILLIT)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 2.72 }, { x: "W8", y: 1.36 }, { x: "W12", y: 1.22 }, { x: "W16", y: 0.83 }, { x: "W20", y: 0.7 }, { x: "W24", y: 0.59 },
                  ],
                },
              ],
              note: "SPAGHETTI는 23주차 이후 대한민국 주간 차트 집계 기준 아래로 내려갔습니다. 해당 지점은 스트림이 0이라는 뜻이 아니라 차트 미집계 구간입니다. 네 트랙 모두 동일한 차트 소스로 측정했으며 각자의 첫 차트 주간을 기준으로 지수화했습니다. 404와 Magnetic은 월요일에 발매되어 첫 차트 주간이 4일인 반면, RUDE!와 SPAGHETTI는 7일입니다.",
              source: "Spotify weekly South Korea chart archives, pulled Aug 26 2026",
              tall: true,
            },
            {
              kind: "bars",
              title: "404 (New Era): 한국 스트림 26주차",
              subtitle: "주간 대한민국 스트리밍 수 (천 단위). 출시 첫 주 134K; 4주차 최고 647K; 26주차에도 252K로, 출시 첫 주 대비 1.9배.",
              unit: "K",
              series: [
                {
                  name: "주간 스트리밍 수 (천 단위)",
                  points: [
                    { x: "W1", y: 134 }, { x: "W2", y: 419 }, { x: "W3", y: 566 }, { x: "W4", y: 647 }, { x: "W5", y: 586 }, { x: "W6", y: 485 }, { x: "W7", y: 445 }, { x: "W8", y: 404 }, { x: "W9", y: 367 }, { x: "W10", y: 323 }, { x: "W11", y: 291 }, { x: "W12", y: 286 }, { x: "W13", y: 265 }, { x: "W14", y: 253 }, { x: "W15", y: 241 }, { x: "W16", y: 240 }, { x: "W17", y: 262 }, { x: "W18", y: 304 }, { x: "W19", y: 303 }, { x: "W20", y: 301 }, { x: "W21", y: 296 }, { x: "W22", y: 284 }, { x: "W23", y: 273 }, { x: "W24", y: 246 }, { x: "W25", y: 254 }, { x: "W26", y: 252 },
                  ],
                },
              ],
              note: "17-21주차 재상승은 프로모션이 아닌 오가닉 카탈로그 재진입이며, 해당 기간에는 별도의 발매 또는 방송 이벤트가 없습니다.",
              source: "Spotify weekly South Korea chart archive, Jan 2026 to Aug 2026",
              tall: true,
            },
          ],
        },
        {
          label: "C",
          title: "출시 곡선, 에라별 비교",
          objective: "슬리퍼 클라임 패턴이 일회성인지, 혹은 그룹의 반복 가능한 소비 시그니처인지 테스트합니다.",
          strategy: "It repeats, faster. \"404\" reached No. 1 on the Spotify Korea daily chart on day 15 and was still setting new daily-stream highs on day 29. \"Pop Off Pop Off\" hit No. 1 on day 9 and is tracking at or above 404's same-day-index streams through day 16, the date of this pull. Slow entry, general-public adoption, sustained climb: this is now a twice-proven signature, and it is the rarest consumption pattern in the market because it does not depend on fandom bulk-streaming or challenge spikes. Weeks 2 through 6, not release day, are where this group's hits are made, and the DSP vertical operationalizes exactly that window.",
          charts: [
            {
              kind: "line",
              title: "일별 출시 후 한국 스트리밍 수",
              subtitle: "\"404\" (2026년 1월) vs \"Pop Off Pop Off\" (2026년 8월), 일자별 인덱스 기준 비교 (천 단위)",
              unit: "K",
              series: [
                {
                  name: "Pop Off Pop Off",
                  points: [
                    { x: "D1", y: 29.8 }, { x: "D2", y: 52.5 }, { x: "D3", y: 54.6 }, { x: "D4", y: 58.2 }, { x: "D5", y: 64.7 }, { x: "D6", y: 66.1 }, { x: "D7", y: 63.1 }, { x: "D8", y: 73.5 }, { x: "D9", y: 77.6 }, { x: "D10", y: 71.1 }, { x: "D11", y: 67.8 }, { x: "D12", y: 61.0 }, { x: "D13", y: 62.9 }, { x: "D14", y: 67.1 }, { x: "D15", y: 67.7 }, { x: "D16", y: 64.3 }, { x: "D17", y: null }, { x: "D18", y: null }, { x: "D19", y: null }, { x: "D20", y: null }, { x: "D21", y: null }, { x: "D22", y: null }, { x: "D23", y: null }, { x: "D24", y: null }, { x: "D25", y: null }, { x: "D26", y: null }, { x: "D27", y: null }, { x: "D28", y: null }, { x: "D29", y: null }, { x: "D30", y: null },
                  ],
                },
                {
                  name: "404 (New Era)",
                  points: [
                    { x: "D1", y: null }, { x: "D2", y: null }, { x: "D3", y: null }, { x: "D4", y: null }, { x: "D5", y: null }, { x: "D6", y: null }, { x: "D7", y: null }, { x: "D8", y: null }, { x: "D9", y: null }, { x: "D10", y: null }, { x: "D11", y: 54.6 }, { x: "D12", y: 59.6 }, { x: "D13", y: 60.2 }, { x: "D14", y: 68.1 }, { x: "D15", y: 71.5 }, { x: "D16", y: 73.6 }, { x: "D17", y: 70.6 }, { x: "D18", y: 69.2 }, { x: "D19", y: 78.5 }, { x: "D20", y: 79.3 }, { x: "D21", y: 96.6 }, { x: "D22", y: 98.7 }, { x: "D23", y: 102.8 }, { x: "D24", y: 93.6 }, { x: "D25", y: 89.1 }, { x: "D26", y: 83.5 }, { x: "D27", y: 82.7 }, { x: "D28", y: 91.3 }, { x: "D29", y: 104.3 }, { x: "D30", y: 99.4 },
                  ],
                },
              ],
              markers: [
                { x: "D9", label: "POP OFF KR No. 1" },
                { x: "D15", label: "404 KR No. 1" },
              ],
              note: "\"404\"의 1-10일차는 일간 차트 아카이브 보존 기간 외에 해당하므로, 최초 확인 시 이미 TOP 3였습니다. \"Pop Off\" 데이터는 8월 25일, 16일차까지 포함됩니다.",
              source: "Spotify daily South Korea chart archive, pulled Aug 26 2026",
              tall: true,
            },
          ],
        },
        {
          label: "D",
          title: "에라별 리스너 플로어 비교",
          objective: "각 에라의 프로모션 기간이 끝난 후 남는 잔존율과 플로어를 측정합니다.",
          strategy: "첫 해, KiiiKiii의 월간 리스너 수는 발매 간 주당 5~6% 감소하여 824K까지 하락했습니다. \"404\" 이후, 감소율은 주당 1.1%로 급감했으며 플로어는 3.22M으로 상승했습니다: 5배 더 완만한 곡선으로 3.9배 상승한 것입니다. \"404\"가 구축한 청취자층은 일시적인 것이 아니라 유지되었습니다. 이는 그룹이 프로모션 중심의 리스닝에서 유지되는 카탈로그 리스닝으로 전환했음을 보여주는 정량적 근거이며, 12개월 리스너 목표(활성 사이클 기준 8백만 명 이상)가 희망이 아닌 측정된 행동에 기반한 예측인 이유입니다.",
          charts: [
            {
              kind: "bars",
              title: "발매 간 주간 평균 리스너 감소율",
              subtitle: "각 에라의 최고점 대비 최저점까지 주간 월간 리스너 손실 비율.",
              unit: "%",
              series: [
                {
                  name: "주간 감소율",
                  points: [
                    { x: "데뷔 이후\\n2025년 4월-8월", y: 5.31 },
                    { x: "Dancing Alone 이후\\n2025년 9월-2026년 1월", y: 6.01 },
                    { x: "404 이후\\n2026년 4월-8월", y: 1.09 },
                  ],
                },
              ],
              highlightX: ["404 이후\\n2026년 4월-8월"],
              note: "404 이후 공백기는 15.7주로 가장 길었으며, 이는 첫 해의 1/5 수준의 감소율을 보였습니다.",
              source: "Chartmetric 일간 리스너 시리즈, 각 윈도우별 최고치 대비 최저치 계산",
            },
            {
              kind: "bars",
              title: "리스너 최저치, 에라별 비교",
              subtitle: "에라 간 월간 리스너 최저치. 404 에라는 최저치를 3.9배 높였습니다.",
              series: [
                {
                  name: "최저치",
                  points: [
                    { x: "404 이전 최저치\\n2026년 1월 5일", y: 823571 },
                    { x: "404 이후 최저치\\n2026년 7월 31일", y: 3220632 },
                  ],
                },
              ],
              highlightX: ["404 이후 최저치\\n2026년 7월 31일"],
              source: "Chartmetric 일간 리스너 시리즈",
            },
          ],
        },
        {
          label: "E",
          title: "실물 앨범 vs 디지털 앨범",
          objective: "정확히 차이점을 명시하자면, 대중 청취자는 증가한 반면 구매 팬덤은 감소했다가 회복세를 보이기 시작했습니다.",
          strategy: "첫 주 실물 앨범 판매량은 세 개의 EP에 걸쳐 각각 206.7K, 41.1K, 81.9K를 기록한 반면, 디지털 판매량은 내내 반대 방향으로 움직였습니다. WhyKiiiKiii의 첫 주 판매량 두 배 증가는 첫날 팬덤의 집중 구매가 아닌, 주 전체에 걸친 지속적인 수요에서 비롯되었습니다. 이는 창의적인 요인이 아닌 구조적인 문제입니다. 이 시장에서 앨범 판매량은 팬덤 인프라(멤버십, 버전, 리테일 이벤트, 응원봉 투어 등)에 의해 만들어지는데, 이러한 시스템이 이 그룹 주변에는 구축되지 않았습니다. No. 1 곡을 스트리밍하는 청취자들에게는 리스너를 구매자로 전환시키는 상품과 순간들이 제공된 적이 없습니다.",
          charts: [
            {
              kind: "grouped",
              title: "발매 앨범 판매량",
              subtitle: "EP별 첫 주 및 누적 실물 앨범 판매량.",
              series: [
                {
                  name: "첫 주 (한터차트)",
                  points: [
                    { x: "Uncut Gem\\n2025년 3월", y: 206712 },
                    { x: "Delulu Pack\\n2026년 1월", y: 41125 },
                    { x: "WhyKiiiKiii\\n2026년 8월", y: 81881 },
                  ],
                },
                {
                  name: "누적 (써클)",
                  points: [
                    { x: "Uncut Gem\\n2025년 3월", y: 210484 },
                    { x: "Delulu Pack\\n2026년 1월", y: 121674 },
                    { x: "WhyKiiiKiii\\n2026년 8월", y: 93318 },
                  ],
                },
              ],
              note: "WhyKiiiKiii 누적 집계는 16일차이며 계속 증가 중입니다. 목표: 다음 전체 사이클에서 첫 주 15만 장 이상 판매, 현재 팬덤에게 더 많은 구매를 요청하는 대신 전환 인프라를 통해 달성.",
              source: "한터 및 써클 집계 발표, 2026년 8월",
            },
          ],
        },
        {
          label: "F",
          title: "시장, 플레이리스트, 카탈로그 규모",
          objective: "소비가 지리적으로 어디에 집중되는지, 에디토리얼이 그룹을 어디에 배치했는지, 성장 동력이 활용할 수 있는 카탈로그 규모가 어느 정도인지 파악합니다.",
          strategy: "The U.S. is the largest listener market at 677K and has never been directly promoted to. Editorial is ahead of the promo footprint: 66 current placements across 33 Spotify playlists with 10.3M reach, including non-K-pop editorial (It's a Hit! at 2.2M followers, poses, Stargirl vibes) that treats Pop Off Pop Off as a pop record rather than a K-pop-shelf record. The catalog itself is young: 213M total artist streams across 27 tracks against 683M for Hearts2Hearts and multi-billion catalogs for the HYBE comps, which means catalog-scale gaps close through exactly the kind of hit-retention behavior section B documents.",
          charts: [
            {
              kind: "hbars",
              title: "월간 리스너 기준 상위 시장",
              series: [
                {
                  name: "리스너",
                  points: [
                    { x: "미국", y: 677615 },
                    { x: "인도네시아", y: 375644 },
                    { x: "대한민국", y: 357262 },
                    { x: "필리핀", y: 325021 },
                    { x: "말레이시아", y: 323429 },
                    { x: "대만", y: 223855 },
                    { x: "호주", y: 140881 },
                    { x: "영국", y: 108243 },
                    { x: "브라질", y: 96718 },
                  ],
                },
              ],
              highlightX: ["미국"],
              note: "가장 큰 시장은 전담 인프라가 전혀 없는 곳입니다. 주요 도시: 서울, 타이베이, 싱가포르, 쿠알라룸푸르, 자카르타, 방콕, 도쿄, 시드니, 로스앤젤레스.",
              source: "Chartmetric, 2026년 8월 26일",
            },
            {
              kind: "bars",
              title: "전체 카탈로그 스트림 대 심층 비교 대상",
              subtitle: "All-time Spotify streams across each artist's full catalog.",
              series: [
                {
                  name: "카탈로그 스트림",
                  points: [
                    { x: "KiiiKiii\\n27곡", y: 213492629 },
                    { x: "Hearts2Hearts\\n22곡", y: 682846489 },
                    { x: "ILLIT\\n64곡", y: 2925619629 },
                    { x: "LE SSERAFIM\\n145곡", y: 6513250053 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii\\n27곡"],
              note: "해당 카탈로그 내 싱글 히트 규모: 404가 76M인 반면 RUDE!는 162M, SPAGHETTI는 296M, Magnetic은 870M입니다. 섹션 B의 리텐션 곡선은 이러한 격차가 어떻게 좁혀지는지를 보여줍니다.",
              source: "Spotify catalog totals via public chart archives, Aug 23-26 2026",
            },
          ],
        },
      ],
      footnote: "Stream series: Spotify weekly and daily South Korea top 200 chart archives (chart-coverage gaps treated as gaps, never zeros). Listener and follower series: Chartmetric daily data. Sales: Hanteo and Circle published tallies. All pulled Aug 26, 2026.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "잠재 고객",
      title: "미국 잠재 고객 및 타겟팅",
      intro: "아래 잠재 고객 프로필은 Chartmetric 플랫폼 데이터와 그룹의 인스타그램 잠재 고객 통계(2026년 8월 25일 업데이트)를 기반으로 구축되었습니다. 이는 초기 유료 타겟팅 및 미국 팬 페이지 네트워크의 콘텐츠 포지션을 설정하며, 유료 활동 첫 주에 픽셀 데이터가 축적되면 세분화가 정교해질 것입니다.",
      thesis: "팬덤 파이프라인이 아닌 노래를 통해 KiiiKiii를 발견한 젊고 여성 다수의 밈 네이티브 팝 잠재 고객입니다. K팝 툴킷을 갖춘 팝 아티스트처럼 타겟팅하십시오. 그 반대가 아닙니다.",
      metros: [
        { name: "로스앤젤레스, CA" },
        { name: "뉴욕, NY" },
        { name: "샌프란시스코 베이 에어리어" },
        { name: "시카고, IL" },
        { name: "댈러스-포트워스, TX" },
        { name: "시애틀, WA", tier: "secondary" },
        { name: "애틀랜타, GA", tier: "secondary" },
        { name: "휴스턴, 텍사스", tier: "secondary" },
        { name: "워싱턴 D.C.", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17세", weight: 11 },
        { bracket: "18-24세", weight: 49 },
        { bracket: "25-34세", weight: 36 },
        { bracket: "35세 이상", weight: 4 },
      ],
      genderDistribution: { female: 74, male: 26 },
      similarArtists: [
        "ILLIT",
        "Hearts2Hearts",
        "LE SSERAFIM",
        "KATSEYE",
        "IVE",
        "aespa",
        "NewJeans",
        "BABYMONSTER",
        "MEOVV",
        "izna",
      ],
      genres: ["K팝", "한국 팝", "댄스 팝", "팝"],
      platformSignals: [
        {
          platform: "Spotify",
          note: "월간 리스너 396만 명으로 역대 최고치를 기록했으며, 미국 시장이 67만 7천 명으로 1위입니다. 팔로워 대비 리스너 비율 0.246은 감사 보고서의 핵심 격차입니다. K팝이 아닌 편집자 추천 배치는 팝 장르로의 크로스오버 허가를 시사합니다.",
        },
        {
          platform: "TikTok",
          note: "팔로워 220만 명으로, 경쟁사 대비 가장 저평가된 채널입니다(경쟁사들은 800만-1600만 명 수준). 게시물당 도달률은 Instagram보다 낮습니다. 비디오 인텔리전스 섹션에서 그 이유와 개선 방안을 상세히 설명합니다.",
        },
        {
          platform: "Instagram",
          note: "팔로워 158만 명, 참여율 5.4%, 게시물당 평균 좋아요 8만 3천 개입니다. 잠재 고객층: 여성 73.7%, 18-24세 48.7%, 상위 국가 한국 26%, 일본 16%, 인도네시아 9.5%, 미국 8.1%입니다. 조용한 강자: 동일한 콘텐츠가 TikTok보다 이곳에서 꾸준히 더 높은 성과를 내고 있습니다.",
        },
        {
          platform: "YouTube",
          note: "구독자 54만 6천 명, 총 조회수 3억 9백만 회입니다. 2026년 3월 '404' 활동 기간 동안 월간 조회수는 4,100만 회 이상으로 정점을 찍었습니다. 채널은 각 활동 시기를 조회수로 전환시키고 있으나, 아직 조회수를 팬덤 규모의 구독자로 전환시키지는 못했습니다.",
        },
      ],
      footnote: "연령 및 성별: Chartmetric 제공 Instagram 잠재 고객 통계, 2026년 8월 25일. 미국 도시 목록: 로스앤젤레스는 현재 그룹의 글로벌 상위 10개 도시 중 유일한 미국 도시입니다. 나머지 도시들은 일반적인 미국 K팝 수요 중심지이며, 첫 유료 캠페인의 픽셀 데이터를 통해 검증될 예정입니다.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "콘텐츠",
      title: "영상 인텔리전스 / 113개 영상, 프레임별 분석",
      intro: "Crowd Control Digital은 TwelveLabs 비디오 AI의 전용 KiiiKiii 인텔리전스 스토어에 113개의 영상을 색인화했습니다. 여기에는 그룹 자체의 최근 TikTok 및 Instagram 게시물 68개와 Hearts2Hearts, ILLIT, LE SSERAFIM 각각의 상위 15개 게시물이 포함됩니다. 모든 프레임, 오버레이, 형식은 쿼리 가능해졌으며, 각 영상의 실제 성과 데이터가 결합되었습니다. 아래 결과는 독립적인 통계 분석과 교차 확인되었으며, 두 결과가 불일치하는 경우 해당 페이지에 명시되어 있습니다.",
      clientQuestion: {
        attribution: "본 분석이 답하는 질문",
        question: "KiiiKiii는 동급에서 거의 누구보다 더 많이 게시합니다. 왜 중앙값 게시물이 동료들의 도달률의 일부에 불과하며, 실제로 성과를 견인하는 것은 무엇인가?",
      },
      methodology: [
        {
          label: "코퍼스 추출",
          value: "TikTok 게시물 58개(@kiiikiii_official, 2026년 4월 22일~8월 26일) 및 Instagram 릴 10개(@kiiikiii.official, 8월 10일~25일)를 계정의 최고 성과 게시물과 최신 게시물의 합집합으로 선정했으며, 전체 참여 데이터를 포함합니다. 경쟁사 세트: 비교 그룹별 TikTok 조회수 상위 15개 게시물.",
        },
        {
          label: "영상 인텔리전스",
          value: "모든 113개 영상은 전용 KiiiKiii 지식 스토어에 시청 가능한 영상으로 색인화되었으며, 39.1분의 분량으로 후킹 요소, 화면 텍스트, 소품, 무대 연출, 반복되는 형식 등을 전체 코퍼스에서 한 번에 쿼리할 수 있게 되었습니다.",
        },
        {
          label: "성과 결합",
          value: "모든 영상에는 자체 플랫폼 지표(조회수, 좋아요, 댓글, 공유, 참여율, 계정 내 백분위수)가 포함됩니다. 콘텐츠 결과는 고립적으로가 아닌 성과를 기준으로 해석됩니다.",
        },
        {
          label: "적대적 교차 검증",
          value: "영상 분석 결과는 동일 계정에 대한 독립적인 통계 전용 분석과 비교하여 테스트되었습니다. 이 과정에서 이전 주장 하나가 번복되었으며, 아래에 정직하게 보고됩니다.",
        },
        {
          label: "솔직한 한계",
          value: "멤버별 주장은 얼굴 인식 기반이 아닌 캡션 및 공식 태그에 근거합니다. 경쟁사 코퍼스는 그들의 최고 게시물이므로, 경쟁사 중앙값은 계정 평균이 아닌 승자들의 벤치마크입니다. 형식 수는 수동 코딩 집계가 아닌 분석적 판독입니다.",
        },
      ],
      corpusStats: [
        {
          label: "분석된 영상",
          value: "113",
          detail: "자체 68개 + 경쟁사 45개, 39.1분, 모든 항목에 성과 데이터 결합",
        },
        {
          label: "자체 중앙값 조회수",
          value: "590K TikTok / 959K Instagram",
          detail: "분석된 코퍼스 전체에서. 동일한 게시물이 Instagram에서 일상적으로 더 많은 수익을 올립니다.",
        },
        {
          label: "경쟁사 최고 게시물 중앙값",
          value: "320만 ~ 530만",
          detail: "Hearts2Hearts 316만, LE SSERAFIM 321만, ILLIT 530만 (상위 15개 세트 기준)",
        },
        {
          label: "8월 게시물 비율",
          value: "주 15.2개 게시물",
          detail: "컴백 주기 볼륨. 본 조사 결과는 볼륨이 아닌 콘텐츠 믹스를 목표로 합니다.",
        },
      ],
      mixColumnLabel: "KiiiKiii 오늘",
      mixHeading: "게시물 믹스 대 성공 문법",
      mixIntro: "게시 빈도는 문제가 아닙니다: KiiiKiii는 해당 세트의 모든 그룹보다 더 많은 게시물을 올립니다. 아래 행들은 볼륨이 어디에 사용되는지, 그리고 실제 도달을 얻는다고 코퍼스가 말하는 것이 무엇인지 비교합니다.",
      mixRows: [
        {
          metric: "게스트 협업 콘텐츠 비율",
          lolaAmour: "분석된 코퍼스의 37%; 8월 전체 게시물의 절반",
          benchmark: "Hearts2Hearts 상위 15개 게시물 중 0개; ILLIT 약 27%; LE SSERAFIM 약 7%",
          read: "behind",
          note: "시그니처 형식은 또한 가장 과잉 공급되는 형식입니다. 템플릿 게스트 게시물의 중앙값은 246K로, 해당 계정 자체의 중앙값보다 훨씬 낮습니다.",
        },
        {
          metric: "멤버 솔로 콘텐츠 비율",
          lolaAmour: "68개 게시물 중 5개 (7%)",
          benchmark: "Hearts2Hearts: 상위 게시물의 73%가 멤버 솔로 형식입니다.",
          read: "behind",
          note: "해당 세트에서 가장 빠르게 성장하는 그룹은 KiiiKiii가 구축하지 않은 멤버 솔로 엔진으로 운영되고 있으며, 이는 수요가 입증되었음에도 불구하고 (조사 결과 3 참조) 그렇습니다.",
        },
        {
          metric: "형식 믹스 대 성공 요인",
          lolaAmour: "카메라를 향한 챌린지 클립은 게시물의 약 50%를 차지하지만, 상위 10% 중에서는 약 14%에 불과합니다.",
          benchmark: "상위 10%는 무대 연출, 릴리즈 에셋, 개그, 그리고 템플릿을 벗어난 게스트에 치우치는 경향이 있습니다.",
          read: "behind",
          note: "해당 계정 자체의 데이터는 이미 어떤 분야가 초과 수익을 내는지 보여주고 있으며, 믹스는 아직 이를 따라가지 못하고 있습니다.",
        },
        {
          metric: "전환 요청",
          lolaAmour: "68개 게시물 중 1개의 명시적 CTA, 하위권 게시물 내 포함",
          benchmark: "LE SSERAFIM은 댄스 클립을 1-2초 분량의 제목 및 날짜 엔드 카드로 마무리합니다.",
          read: "behind",
          note: "Reach is never pointed anywhere. With the U.S. as Spotify market No. 1, this is the cheapest fix in the audit.",
        },
        {
          metric: "인스타그램 전략",
          lolaAmour: "분석된 10개의 릴은 모두 동일한 편집, 동일한 텍스트를 가진 틱톡 영상과 똑같습니다.",
          benchmark: "미러링은 표준 관행입니다. 다만, IG 영상이 틱톡 원본보다 반복적으로 더 높은 수익을 창출하며, 때로는 4-5배에 달합니다.",
          read: "neutral",
          note: "무료 도달률은 현재 관리되지 않고 있습니다. 크로스오버에 성공하지 못한 인기 영상들이 재고로 남아있습니다.",
        },
        {
          metric: "영어 접근 계층",
          lolaAmour: "캡션은 비한국어로 제공되며, 게시물의 10-20%에 오버레이가 표시되고, 표시될 경우 영어로 제공됩니다.",
          benchmark: "경쟁 그룹들도 마찬가지로 희소하며, LE SSERAFIM은 가장 많은 스타일화된 텍스트 레이어를 사용합니다.",
          read: "inline",
          note: "대부분의 K팝 계정과 달리 접근성은 문제가 되지 않습니다. 문제는 텍스트의 언어가 아니라 텍스트가 사용되는 방식입니다.",
        },
      ],
      mixFootnote: "자체 콘텐츠 조합은 분석된 68개 영상 코퍼스와 8월 전체 게시 기간을 기준으로 측정되었습니다. 경쟁사 열은 각 그룹의 상위 15개 세트를 설명하며, 구성상 승자 벤치마크입니다.",
      charts: [
        {
          kind: "grouped",
          title: "포맷 점유율: 결과물 대비 상위 10% 비율",
          subtitle: "계정이 게시하는 콘텐츠와 실제 코퍼스의 상위 10%에 도달하는 콘텐츠의 비교",
          unit: "%",
          series: [
            {
              name: "결과물 점유율",
              points: [
                { x: "챌린지 클립", y: 50 },
                { x: "무대 + 발매", y: 16 },
                { x: "기타 모든 것", y: 34 },
              ],
            },
            {
              name: "상위 10% 점유율",
              points: [
                { x: "챌린지 클립", y: 14 },
                { x: "무대 + 발매", y: 57 },
                { x: "기타 모든 것", y: 29 },
              ],
            },
          ],
          source: "KiiiKiii 비디오 인텔리전스 코퍼스, 2026년 8월",
        },
        {
          kind: "bars",
          title: "콘텐츠 유형별 평균 조회수",
          subtitle: "분석된 코퍼스 전반의 TikTok 평균 (천 단위)",
          unit: "K",
          series: [
            {
              name: "평균 조회수 (천)",
              points: [
                { x: "템플릿\\n게스트 게시물", y: 246 },
                { x: "계정\\n중앙값", y: 590 },
                { x: "개그\\n채널", y: 939 },
                { x: "멤버\\n개별 게시물", y: 1220 },
              ],
            },
          ],
          highlightX: ["멤버\\n개별 게시물"],
          note: "가장 많이 생산된 채널이 가장 적은 수익을 얻고, 가장 적게 생산된 채널이 가장 많은 수익을 얻습니다.",
          source: "KiiiKiii 비디오 인텔리전스 코퍼스, 성과 결합, 2026년 8월",
        },
        {
          kind: "grouped",
          title: "동일 게시물, 두 플랫폼",
          subtitle: "동일한 편집본을 두 플랫폼에 게시, 조회수(천 단위).",
          unit: "K",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "게스트 트리오 비트", y: 307 },
                { x: "버라이어티 게스트 비트", y: 246 },
                { x: "9초 개그", y: 535 },
                { x: "LED 스니커즈 개그", y: 1016 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "게스트 트리오 비트", y: 1530 },
                { x: "버라이어티 게스트 비트", y: 1010 },
                { x: "9초 개그", y: 856 },
                { x: "LED 스니커즈 개그", y: 1066 },
              ],
            },
          ],
          note: "인스타그램은 검증된 동일 쌍 4쌍 중 3쌍에서 틱톡보다 더 많은 수익을 올렸으며, 팔로워 기반은 동종 업계의 1/4 규모입니다.",
          source: "플랫폼 지표, 검증된 동일 편집본, 2026년 8월",
        },
        {
          kind: "grouped",
          title: "플랫폼별 90일 팔로워 성장률",
          subtitle: "2026년 5월 28일부터 8월 26일까지. 양호하지만 아직 승률로 복리 증가하지는 않습니다.",
          unit: "%",
          series: [
            {
              name: "KiiiKiii",
              color: "#FD3737",
              points: [
                { x: "YouTube 구독자", y: 17.8 },
                { x: "TikTok", y: 17.7 },
                { x: "Instagram", y: 18.0 },
              ],
            },
            {
              name: "ILLIT",
              points: [
                { x: "YouTube 구독자", y: 48.2 },
                { x: "TikTok", y: 29.2 },
                { x: "Instagram", y: 17.6 },
              ],
            },
            {
              name: "Hearts2Hearts",
              points: [
                { x: "YouTube 구독자", y: 42.6 },
                { x: "TikTok", y: 26.8 },
                { x: "Instagram", y: 17.1 },
              ],
            },
            {
              name: "LE SSERAFIM",
              points: [
                { x: "YouTube 구독자", y: 16.0 },
                { x: "TikTok", y: 9.1 },
                { x: "Instagram", y: 6.3 },
              ],
            },
          ],
          source: "Chartmetric, 90일 변화량, 2026년 8월 26일",
        },
      ],
      findingsHeading: "여섯 가지 검증된 결과",
      findingsIntro: "각 카드는 판결, 실제 게시물과 그 수치를 포함한 증거, 존재하는 경우 반론, 그리고 전환점을 담고 있습니다. 해당 카드에 포함된 예시 게시물을 보려면 카드를 여십시오.",
      findings: [
        {
          id: "payload-not-hook",
          title: "첫 3초는 문제가 아닙니다. 그 뒤에 오는 내용이 문제입니다.",
          verdict: "partial",
          confidence: "높음",
          summary: "성공한 영상과 실패한 영상은 동일한 방식으로 시작합니다: 카메라에 가까운 얼굴, 이미 진행 중인 움직임, 높은 에너지. 상위 20%를 구분하는 것은 다음 단계입니다: 성공한 영상은 볼거리, 참신함, 또는 재미 요소로 고조되는 반면, 실패한 영상은 전체 러닝타임 동안 포즈를 취하는 귀여운 수준에 머무릅니다.",
          evidence: [
            "최상위 성과 영상은 시각적으로 밀도가 높게 시작합니다: 렌즈를 향해 던져진 마스크 얼굴에 떠다니는 소품과 방송 날짜 텍스트 (166만 뷰), 첫 프레임부터 소품으로 가득 찬 표범 가면 클로즈업 (121만 뷰)",
            "하위권 게시물은 성공한 영상과 동일한 방식으로 시작합니다: 이미 중앙에 위치한 듀오 또는 트리오가 동기화된 귀여운 제스처를 취하지만, 그 이상으로 발전하지 못합니다 (포즈 영상 10만 9천 뷰)",
            "두 그룹 모두 도입부 초반에 화면 자막이 거의 등장하지 않으므로, 자막이 구분점이 되지 않습니다.",
            "분석 대상 중 해당 계정의 가장 큰 성과를 낸 게시물은 4.96M의 '불타는 무대 직캠'으로, 순수한 고조(escalation)를 보여줍니다.",
          ],
          counterEvidence: [
            "도입부는 문자 그대로 동일하지 않습니다. 상위 게시물은 더 강렬하고 스타일리시하게 시작하는 경향이 있습니다. 분석 결과, 도입부의 질만으로는 기본적인 콘텐츠(baseline payload)를 살릴 수 없습니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7669727756359372040", label: "분석 대상의 최고 기록인 '불타는 무대 직캠'", stat: "4.96M 조회수" },
            { platform: "tiktok", id: "7665599279779581204", label: "첫 프레임부터 밀도 높은 '가면 쓴 얼굴 티저'", stat: "1.66M 조회수" },
            { platform: "tiktok", id: "7676438110787390740", label: "기본 패턴인 '포즈 취한 귀여운 모습'", stat: "109K 조회수" },
          ],
          pivot: {
            title: "도입부가 아닌 콘텐츠 본연의 내용(payload)을 고조시키십시오.",
            actions: [
              "얼굴을 먼저 보여주는 도입부 구성은 유지하십시오. 이는 저희의 스타일이며 효과적입니다.",
              "포즈를 취한 귀여운 모습의 기본 콘텐츠는 소품 개그, 변신, 혹은 볼거리(spectacle beat)와 같은 두 번째 아이디어를 포함하지 않는 한 성과를 내지 못합니다.",
              "모든 게시물은 '스크롤하는 사람이 이 그룹에게서 한 번도 본 적 없는 첫 프레임 이미지는 무엇인가?'라는 질문을 중심으로 스토리보드를 작성하십시오.",
            ],
          },
        },
        {
          id: "guest-conveyor",
          title: "게스트 협업 콘텐츠는 정체되어 있습니다. 틀을 깬 콘텐츠만이 주목받습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "68개의 자체 제작 게시물 중 25개는 '[게스트]와 함께하는 팝 오프 팝 오프' 형식으로, 고정 카메라, 연습실, 렌즈를 향해 정면으로 선 게스트와 멤버라는 하나의 템플릿으로 촬영되었습니다. 이들의 TikTok 평균 조회수는 246K로, 계정 전체 평균의 절반도 되지 않습니다. 주목받은 모든 게스트 게시물은 먼저 템플릿을 깼습니다.",
          evidence: [
            "Stray Kids의 리노 (1.91M): 태도를 먼저 보여주는 도입부, 춤이 카메라를 향해 이동하도록 복도에서 연출, 더 강렬한 안무",
            "Hearts2Hearts의 지우 (1.80M): 카메라가 줌인하고 재구도를 잡아, 고정된 투샷 대신 각 멤버에게 미니 솔로 스포트라이트를 제공합니다.",
            "우연히 팝 오프 형식을 사용한 코스튬 캐릭터 콘텐츠 (1.12M): 코스튬이 게스트가 아닌 흥미를 끄는 요소입니다.",
            "분석 대상의 최저 기록은 템플릿화된 게스트 게시물로, 세 개의 게시물이 각각 72K, 78K, 106K의 조회수를 기록했습니다.",
          ],
          counterEvidence: [
            "게스트 콘텐츠는 분석 대상 중 가장 높은 참여율(최대 38.5%)을 기록하므로, 도달률이 정체될 때에도 기존 팬덤을 심화시킵니다. 결론은 삭제가 아닌 배분(rationing)에 관한 것입니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7675340320241945877", label: "템플릿 파괴: 무대 연출 및 태도", stat: "191만 회 조회" },
            { platform: "tiktok", id: "7671258530099318037", label: "템플릿 파괴: 카메라 리프레임, 솔로 스포트라이트", stat: "180만 회 조회" },
            { platform: "tiktok", id: "7676345354169634068", label: "코퍼스 내 템플릿 게스트 게시물", stat: "7만 2천 회 조회" },
          ],
          pivot: {
            title: "콘베이어를 조절하다",
            actions: [
              "템플릿 게스트 비중을 주당 2-3개로 제한하십시오. 현재 비율은 이의 약 두 배입니다.",
              "모든 게스트 게시물은 무대 연출 깊이, 카메라 움직임, 캐릭터 개그 또는 게스트의 개성 표현 중 하나를 반드시 추가해야 합니다.",
              "가장 큰 게스트는 파손된 템플릿에 사용하십시오. 일반 템플릿은 누가 출연하든 동일하게 24만 6천 회의 중간값을 얻습니다.",
            ],
          },
        },
        {
          id: "member-franchise",
          title: "검증된 솔로 앵커는 존재합니다. 그녀를 둘러싼 프랜차이즈는 그렇지 않습니다.",
          verdict: "partial",
          confidence: "중간",
          summary: "68개의 게시물 중 5개만이 단독 멤버 게시물이며, 이는 기대치를 훨씬 뛰어넘습니다. 그중 세 개는 Jiyu가 주도했으며, 코퍼스에서 두 번째로 큰 447만 회 조회수를 기록한 게시물도 포함됩니다. 이러한 수요를 충족할 정기적인 멤버 솔로 시리즈가 존재하지 않으며, 두 명의 멤버는 솔로 캡션이 전혀 없습니다.",
          evidence: [
            "447만 회 조회수의 Jiyu 솔로 태그 게시물은 분석된 코퍼스에서 가장 큰 비무대 게시물입니다.",
            "추가적인 Jiyu 솔로 게시물 두 개(109만 회 및 96만 3천 회) 모두 계정 중간값을 상회합니다.",
            "Kya(131만 회)와 Haum(122만 회)의 솔로 게시물도 이를 상회합니다. 수요는 한 명의 멤버에 국한되지 않습니다.",
            "해당 세트에서 가장 빠르게 상승하는 경쟁작은 멤버 솔로를 핵심 엔진으로 운영합니다. Hearts2Hearts의 상위 15개 게시물 중 11개가 깔끔한 설정 하나와 스타일링 또는 변신 결과 하나를 특징으로 하는 솔로 형식입니다.",
          ],
          counterEvidence: [
            "다섯 개의 게시물은 기반이 얇으며, 멤버 수준의 분석은 얼굴 확인보다는 캡션에 근거하므로 순위는 방향성을 가진 것으로 간주하십시오.",
          ],
          examples: [
            { platform: "tiktok", id: "7632264277952335124", label: "Jiyu 솔로, 코퍼스 내 두 번째로 큰 게시물", stat: "447만 회 조회" },
            { platform: "tiktok", id: "7655285768209845520", label: "하움 솔로가 계정 중앙값을 돌파했습니다", stat: "122만 회 조회수" },
            { platform: "tiktok", id: "7631537583415201045", label: "캬 솔로가 계정 중앙값을 돌파했습니다", stat: "131만 회 조회수" },
          ],
          pivot: {
            title: "프랜차이즈를 명명하고 다섯 멤버 모두를 순환시키십시오",
            actions: [
              "반복 가능한 구조: 멤버 한 명, 설정 한 번, 결과 한 번으로 주간 멤버 솔로 슬롯을 만드십시오",
              "검증된 앵커로 시작하고, 아직 솔로 활동이 없는 두 멤버를 육성하는 데 이 슬롯을 활용하십시오",
              "이것은 또한 멤버 수준의 브랜드 자산으로 가는 가장 빠른 경로이며, 이는 레이블 자체의 선례가 가장 많이 수익화한 자산입니다.",
            ],
          },
        },
        {
          id: "cta-desert",
          title: "68개의 게시물 중 단 하나의 행동 유도 문구. 도달률이 어디에도 집중되지 않습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "The owned corpus asks for nothing: one explicit call to action total, and it sits in a bottom-half post. The group's winners carry none. With the U.S. as the largest Spotify market, on-platform reach currently converts to exactly nothing by design.",
          evidence: [
            "콘텐츠 내 유일한 행동 유도 문구는 투어 발표 카드(19만 8천 회 조회수)이며, 처음부터 끝까지 텍스트로 구성되어 있습니다.",
            "상위 20% 세트에는 팔로우, 스트리밍, 앨범, 멤버십 등 어떠한 명시적인 요청도 포함되어 있지 않습니다.",
            "비교 대상 세트 역시 요청이 적은 편이지만, 한 가지 주목할 만한 예외가 있습니다: LE SSERAFIM은 댄스 클립을 1-2초 분량의 제목 및 날짜 슬레이트로 마무리하며, 엔터테인먼트 안에 프로모션을 삽입합니다.",
          ],
          counterEvidence: [
            "요청 없는 콘텐츠는 장르적으로 일반적이며 동종 업계에서도 팔로우 요청 없이 성공하므로, 해결책은 인플루언서 스타일의 간청이 아닌 출시 순간의 슬레이트입니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7678271262971514132", label: "콘텐츠 내 유일한 행동 유도 문구", stat: "19만 8천 회 조회수" },
            { platform: "instagram", id: "Db2pT2CxiGz", label: "MV 애셋, 요청 없음", stat: "163만 회 조회수" },
          ],
          pivot: {
            title: "엔드 카드를 채택하고, 간청은 생략하십시오",
            actions: [
              "릴리스 에셋 및 티저에만 1~2초 길이의 제목 및 날짜 슬레이트를 삽입하고, 밈(gag) 및 챌린지 영역은 깔끔하게 유지하십시오.",
              "미국 시장을 겨냥한 영어 텍스트 릴리스 에셋에 스트리밍 및 사전 저장 슬레이트를 테스트하십시오.",
              "링크인바이오 및 고정 댓글을 버티컬 1의 CRM 캡처 흐름으로 라우팅하여 전환된 관심을 자체 소유 채널로 유도하십시오.",
            ],
          },
        },
        {
          id: "format-monoculture",
          title: "콘텐츠의 절반은 챌린지 클립입니다. 최상위 10%는 스펙터클, 릴리스 에셋, 밈(gag)입니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "카메라를 향한 챌린지 콘텐츠는 전체 게시물의 약 절반을 차지하지만 최상위 10% 중에서는 약 7개 중 1개에 불과합니다. 무대 스펙터클 및 릴리스 에셋은 전체 게시물의 16%를 차지하며 최상위 10%의 절반 이상을 차지합니다. 밈(gag) 영역은 작지만 효율적입니다. 계정 자체의 성과가 이미 올바른 조합을 보여주고 있으며, 콘텐츠 생산이 이를 따라가지 못하고 있습니다.",
          evidence: [
            "가장 인기 있는 게시물은 전체 데이터에서 단 두 개뿐인 무대 클립 중 하나로 4.96M의 조회수를 기록했습니다.",
            "릴리스 에셋은 꾸준히 높은 성과를 내고 있습니다. 방송 티저는 1.66M, 뮤직비디오 컷은 인스타그램에서 1.63M, 틱톡에서 1.21M의 조회수를 기록했습니다.",
            "밈(gag) 영역은 두 개의 게시물로 구성되었으며 둘 다 성공했습니다. LED 스니커즈 소품은 틱톡에서 1.02M, 인스타그램에서 1.07M의 조회수를 기록했으며, 9초 길이의 밈(gag)은 856K의 조회수를 기록했습니다.",
            "모든 멤버가 참여한 플래그십 버전의 챌린지 자체가 3.09M의 조회수를 기록하며, 주변의 일반적인 콘텐츠가 100~300K에 머무르는 와중에도 전체 구성원 규모에서 해당 포맷이 효과적임을 보여주었습니다.",
          ],
          counterEvidence: [
            "챌린지 단일 문화는 캠페인 전달 수단이기도 하므로, 포맷 금지가 아닌 주당 15개 게시물 내에서의 재분배가 전환점입니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7671582730341059858", label: "모든 멤버가 참여한 플래그십 챌린지, 최고의 포맷입니다.", stat: "3.09M 조회수" },
            { platform: "tiktok", id: "7676376147285806357", label: "LED 스니커즈 밈(gag), 효율적인 영역", stat: "1.02M 조회수" },
            { platform: "instagram", id: "DcSwF4mBFf4", label: "틱톡 버전보다 더 높은 성과를 내는 동일한 밈(gag)", stat: "1.07M 조회수" },
          ],
          pivot: {
            title: "최상위 10%를 향해 재조정하십시오.",
            actions: [
              "주간 조합: 스펙터클 또는 무대 수준의 게시물 1개, 밈(gag) 또는 소품 관련 콘텐츠 2~3개, 게스트 콘텐츠는 발견 2에 따라 배분하십시오.",
              "포즈를 취한 귀여운 일반 콘텐츠는 완전히 제거하십시오. 이는 성과 없는 양일 뿐입니다.",
              "물량은 현 수준을 유지합니다. 이는 재분배이지, 생산량 증대가 아닙니다.",
            ],
          },
        },
        {
          id: "ig-mirror",
          title: "인스타그램은 틱톡의 완벽한 미러링이며, 어차피 틱톡보다 더 높은 수익을 창출합니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "분석된 모든 인스타그램 릴은 틱톡과 정확히 일치하는 쌍둥이입니다. 동일한 촬영, 동일한 길이, 동일한 텍스트입니다. 그러나 인스타그램의 중앙값(959K)은 훨씬 낮은 볼륨으로 틱톡의(590K)를 능가하며, 개별 쌍둥이는 틱톡 원본보다 4-5배 더 높은 수익을 올립니다. 그룹이 가장 크게 성공하는 플랫폼은 전담 전략이 전혀 투입되지 않는 곳입니다.",
          evidence: [
            "샘플링된 쌍에서 편집이 동일함을 확인했습니다: 동일한 설정, 동일한 길이, 분석된 세트 어디에도 플랫폼별 버전은 없습니다.",
            "게스트 트리오 영상은 인스타그램에서 1.53M을 기록한 반면 틱톡에서는 307K에 그쳤습니다. 버라이어티 레전드 게스트 영상은 1.01M을 기록한 반면 246K에 그쳤습니다.",
            "개그 콘텐츠는 모든 쌍에서 동등하거나 더 나은 성과를 보였습니다.",
            "인스타그램 팔로워 기반은 동종 업계의 1/4 크기임에도 불구하고, 게시물당 평균 83K의 좋아요를 기록하며 5.4%의 참여율을 보입니다.",
          ],
          counterEvidence: [
            "15일 동안의 10개 릴은 적은 샘플이며, 인스타그램의 게시물당 참여율은 틱톡보다 낮게 나타납니다. 따라서 인스타그램은 도달 범위를, 틱톡은 깊이를 구매하는 셈입니다. 그룹은 둘 다 필요합니다.",
          ],
          examples: [
            { platform: "instagram", id: "DcVATdtBT9h", label: "게스트 트리오 영상, 틱톡 쌍둥이 영상 대비 5배 성과", stat: "1.53M 조회수" },
            { platform: "tiktok", id: "7676700800927796500", label: "틱톡에서의 동일한 게시물", stat: "307K 조회수" },
          ],
          pivot: {
            title: "그대로 두지 말고 미러링을 관리하십시오.",
            actions: [
              "미러링을 기본값으로 유지하십시오. 이는 무료 도달 범위입니다.",
              "넘어오지 못한 검증된 틱톡 성공작들로 인스타그램을 채우십시오.",
              "매주 하나의 인스타그램 우선 포맷을 테스트하십시오. 게스트 영상부터 시작하십시오. 이는 체계적으로 해당 플랫폼에서 더 높은 성과를 보입니다.",
            ],
          },
        },
      ],
      footnote: "본 분석은 2026년 8월 26일 Crowd Control Digital이 TwelveLabs 비디오 인텔리전스를 사용하여 수행했으며, 게시물별 성과 데이터가 결합된 전용 KiiiKiii 지식 저장소를 통해 독립적인 통계 검증을 거쳤습니다. 예시 게시물은 라이브 플랫폼에서 임베드되었습니다. 최근 모든 게시물이 캠페인 태그가 붙었다는 이전의 관찰적 주장은 본 분석에 의해 번복되었습니다. 8월 기간의 42%는 비캠페인 콘텐츠이며, 해당 영역에 계정의 자체 생성 최고 성과자들이 포함되어 있습니다. 계정 접근이 시작되면 첫 번째 분석 결과는 자체 분석에 맞춰 재조정됩니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      philosophy: "소비는 2티어입니다. 그 아래의 전환 스택은 한 단계 아래입니다. 이 섹션은 항목별 격차이며, 표면별로 검증되었습니다.",
      intro: "아래 모든 것은 팬덤이 수익을 창출하는 수단입니다. 비슷한 인기를 가진 경쟁 그룹들은 이 목록의 대부분을 운영하고 있지만, KiiiKiii는 거의 운영하지 않습니다. 각 항목은 베팅이 아니라 소비 데이터를 통해 이미 확보된 기회입니다.",
      subBlocks: [
        {
          label: "A",
          title: "팬 플랫폼 및 CRM 스택",
          objective: "팬 관계가 현재 어디에 있는지 파악하고, 소유한 확보가 누락된 부분을 추정하지 말고 검증하십시오.",
          strategy: "KiiiKiii는 그룹 및 멤버 프로필, 데뷔일, 팬클럽 전용 라이브, 쇼핑몰을 갖춘 그룹의 글로벌 팬 커뮤니티 플랫폼인 Berriz에 기반을 두고 있습니다. TiiiKiii 유료 멤버십은 2026년 3월에 개설되었으며, Weverse 팬클럽은 2026년 8월에 일본 멤버십만을 수용하기 위해 개설되었습니다. 현재 시스템이 갖추지 못한 것은 직접 반응(direct-response) 레이어이며, 이러한 부재는 추측이 아닌 검증을 통해 확인되었습니다. 2026년 8월 26일, Crowd Control Digital은 모든 자체 보유 채널(공식 웹사이트 및 코드, 레이블 쇼핑몰, 링크인바이오, YouTube 채널 링크, 팬 플랫폼, 미국 리테일)을 점검한 결과, 이메일 또는 SMS 수집 기능이 활성화된 곳이 전혀 없음을 확인했습니다. 한 가지 역사적 예외가 이 점을 명확히 합니다. 2025년 말 약 3개월 동안 공식 웹사이트에서 파트너 레이블의 팬 CRM 시스템으로 연결되는 이메일 가입 양식을 운영했으나, 해당 양식은 2026년 1월에 제거되었고 그 결과로 생성된 리스트는 아티스트 팀의 직접적인 통제 밖에 있습니다. 오늘날, 최상위 아티스트의 자체 보유 직접 반응 리스트는 사실상 제로입니다.",
          components: {
            heading: "검증된 현황 (2026년 8월 26일)",
            items: [
              "Berriz: 그룹 + 멤버 프로필 (데뷔일 기준), 멤버십, 쇼핑몰. 플랫폼 소유 관계",
              "TiiiKiii 유료 멤버십 (2026년 3월부터); Weverse Japan 팬클럽 (2026년 8월부터). 둘 다 플랫폼 계정이며, 자체 보유 리스트가 아님",
              "공식 웹사이트: 어떠한 종류의 가입 양식도 없음; 티켓 신청 페이지는 연락처 필드를 수집하지 않음",
              "링크인바이오, YouTube 링크, 미국 리테일: 아티스트 레벨의 수집 기능 없음; 스토어 뉴스레터는 스토어 소유",
              "과거: 웹사이트 이메일 양식이 2025년 8월-11월경 파트너 레이블의 CRM으로 운영되었으며, 이후 중단됨",
            ],
          },
        },
        {
          label: "B",
          title: "라이브 비즈니스",
          objective: "라이브 활동 규모를 솔직하게 측정하십시오. 이는 감사에서 가장 두드러진 수치이기 때문입니다.",
          strategy: "첫 번째 팬 콘서트인 KiiiKiii FesTiiiVAL (서울, 2026년 5월)은 121,000 KRW 단일 가격으로 양일간 약 2,470장의 티켓과 스트리밍 패스를 판매했습니다. 이는 그룹의 유일한 헤드라인 라이브 상품이며, 투어는 발표되지 않았습니다. 대조적으로, 신인 경쟁 그룹은 이미 올림픽홀 공연과 뉴욕 및 로스앤젤레스에서의 미국 쇼케이스를 진행했으며, 그룹 자체의 미국 데뷔인 2026년 8월 로즈볼에서의 페스티벌 메인 스테이지 공연은 전국적인 언론 보도와 함께 미국 수요가 규모 있게 존재함을 증명했습니다. FesTiiiVAL의 일본 에디션이 확정되었습니다. 라이브 분야는 실패하고 있는 것이 아니라, 단순히 구축되지 않았을 뿐이며, 미국은 논리적인 다음 단계입니다.",
          kpis: [
            "목표: 향후 12개월 내 미국 쇼케이스 또는 팬미팅 1회 개최, 매진 규모(1,800~2,300석)로 기획, 페스티벌에서의 증명을 헤드라인 증명으로 전환",
          ],
        },
        {
          label: "C",
          title: "리테일 및 실물 상품",
          objective: "이처럼 큰 규모의 팬덤에 비해 실물 상품 라인이 왜 저조한 성과를 내는지 파악합니다.",
          strategy: "EP 3개 발매 후, K팝 실물 앨범 생산을 위한 상품화 시스템은 미흡합니다. 데뷔 17개월 후에도 정식 응원봉이 없고(팬 콘서트 상품으로 아크릴 스틱 배송), 미국 전용 앨범 버전이 없으며, 미국 내 리테일 기회가 없는 반면, 다중 버전 재고는 일반적인 한국 채널을 통해 유통됩니다. 경쟁 그룹들은 이러한 도구들, 즉 상품화된 앨범, 독점 버전의 리테일 팝업 스토어, 응원봉 시대의 투어를 통해 부진한 시장을 전환했습니다. 이러한 순간들을 가능하게 하는 미국 K팝 리테일 네트워크는 성숙했으며, 소비 섹션에서 자세히 설명하는 입증된 스트리밍 수요를 가진 아티스트를 적극적으로 찾고 있습니다.",
          components: {
            heading: "기존 경쟁 그룹 플레이북과의 격차",
            items: [
              "라이브 및 팬덤 정체성의 핵심인 정식 응원봉 출시가 아직 보류 중입니다.",
              "현재까지 미국 전용 버전 또는 미국 리테일 출시가 없습니다.",
              "아직 어떤 시장에서도 팝업 또는 체험형 리테일 이벤트가 없습니다.",
              "멤버십 구매 메커니즘이 아직 CRM과 연동되지 않았습니다.",
            ],
          },
        },
        {
          label: "D",
          title: "일본 시장 기반 구축",
          objective: "시장이 인지하는 것보다 더 진척된, 이미 구축된 조용한 기반을 문서화하십시오.",
          strategy: "정식 일본 데뷔 없이도 그룹은 다음과 같은 성과를 축적했습니다: 2025년 도쿄돔 페스티벌 이벤트의 유일한 K팝 걸그룹 출연 기회, 도쿄 아이돌 페스티벌 인플라이트 에디션(2026년 7월)에 최초로 섭외된 K팝 아티스트, 일본 패션 브랜드 모델 계약, 메이저 레이블 일본 아티스트 페이지 개설, 위버스 재팬 팬클럽 개설, 그리고 확정된 일본 팬 콘서트 에디션. 일본은 또한 그룹의 인스타그램 팔로워의 16%를 차지하는 두 번째로 큰 시장입니다. 기반 구축은 완료되었으며, 남은 것은 공식 데뷔 순간과 그 주변의 디지털 앰플리케이션입니다.",
        },
        {
          label: "E",
          title: "브랜드 및 IP 파이프라인",
          objective: "이미 흐르고 있는 상업적 검증을 읽어내십시오. 이는 브랜드의 궤적을 가격으로 책정하기 때문입니다.",
          strategy: "협찬의 빈도가 꾸준히 중요도를 높여왔습니다: 데뷔 시 최초의 은행 홍보대사, 2025년까지의 패스트푸드 및 패션 캠페인, 그리고 2026년에는 그룹의 히트곡 Pandora를 활용한 New Era 컬렉션, Coach 홍보대사, 그리고 2년간의 서울 지역 홍보대사 활동. IP 측면에서는 멤버들이 출연한 53부작 웹소설이 한국 최대 스토리 플랫폼에서 OST 및 오디오북과 함께 공개되었으며, 그룹은 2025년 주요 숏폼 플랫폼의 라이징 아티스트 상을 수상했습니다. 상업 파트너들은 이미 KiiiKiii를 떠오르는 주류 브랜드로 평가하고 있으며, 본 계획에서 구축하는 팬덤 인프라는 그룹이 단순히 가치를 검증하는 것을 넘어 그 가치를 포착할 수 있도록 합니다.",
        },
      ],
      footnote: "인프라 관련 사실은 라이브 사이트, 사이트 코드, 아카이브 캡처, 플랫폼 공지, 티켓팅 리스팅, 공개된 보도 자료를 통해 2026년 8월 26일에 검증되었습니다.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "철학",
      title: "핵심 전략 및 철학",
      thesis: "디스커버리 엔진은 이미 작동하고 있습니다: 두 개의 숨겨진 히트곡과 시간이 지날수록 가치가 떨어지는 일반적인 카탈로그와 달리 가치가 상승하는 카탈로그가 있습니다. 본 계획의 모든 예산은 이러한 디스커버리를 확장하거나 팀이 소유하는 팬덤으로 전환하는 데 사용될 것입니다. 이 계획은 음악의 변화를 요구하지 않습니다. 본 전략은 이미 곡들이 얻은 성과를 바탕으로 시스템을 구축합니다.",
      hierarchy: [
        {
          label: "전환 인프라 (기반, 상시 운영)",
          description: "이 그룹이 특별히 부족한 복합적인 레이어: 이메일 및 SMS를 포함한 CRM, 미국 팬 페이지 네트워크, 멤버십 및 리테일 이벤트, 멤버 프랜차이즈. 출시 일정과 관계없이 매주 실행됩니다. 이 레이어가 없으면, 미래의 모든 히트곡은 여전히 포착하지 못하는 퍼널로 쏟아질 것입니다.",
        },
        {
          label: "숏폼 엔진 (앰플리파이어)",
          description: "비디오 인텔리전스 결과에 따른 재조정된 콘텐츠 시스템: 스펙터클 및 개그 채널 강화, 게스트 컨베이어 제한, 멤버 솔로 프랜차이즈 활성화, 미러링 대신 인스타그램 관리. 도달 범위는 더 많은 생산이 아닌 재할당으로 증가합니다.",
        },
        {
          label: "DSP 복합화 (앰플리파이어)",
          description: "숨겨진 히트곡 패턴을 방어하고 확장합니다: K팝 섹션을 넘어선 팝-에디토리얼 확장, 2주차부터 6주차까지의 지속력 강화 메커니즘, 그리고 돌파 히트곡을 중심으로 한 카탈로그 활성화. 본 그룹이 이미 동급 최고 수준을 뛰어넘는 디스커버리 레이어입니다.",
        },
        {
          label: "PR 및 문화적 순간 (앰플리파이어)",
          description: "아래 레이어 위에 신뢰도 확장을 더합니다. 언론은 이미 곡을 극찬했으며, 이제 내러티브 작업은 비평적 열기를 주류 미국 시장의 순간과 시상식 시즌 포지셔닝으로 전환하는 것입니다. 적절한 시점에 제안하면, 이는 이전의 모든 달러를 확장시킵니다.",
        },
      ],
      messaging: [
        "처방 전 감사: 각 버티컬의 모든 권장 사항은 02절부터 06절까지의 측정된 격차로 추적됩니다.",
        "이 인프라는 곡에 구애받지 않습니다. 현재 사이클, 다음 컴백, 일본 데뷔 및 그 이후의 모든 릴리스를 지원합니다.",
        "기반에는 지속적인 지출을, 앰프에는 릴리스 시점에 맞춰 조정된 간헐적인 지출을 합니다.",
        "미국은 미래의 확장 시장이 아닌, 이미 존재하는 1위 시장처럼 홍보됩니다.",
      ],
      footnote: "기반 워크스트림은 매월 실행됩니다. 앰프 강도는 릴리스 달력을 따릅니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "팬덤",
      title: "버티컬 1 / 팬덤 및 전환 인프라",
      philosophy: "기반입니다. 이 버티컬의 모든 것은 하나의 수치를 달성하기 위해 존재합니다: 역대 최고 청취자 수치에서의 0.246 전환율입니다.",
      subBlocks: [
        {
          label: "A",
          title: "드롭 CRM: 이메일 + SMS",
          objective: "바이럴 순간들을 팀이 통제하는 리스트로 전환하는 자체 보유 오디언스 레이어를 구축하여, 기존 팬 플랫폼과 경쟁하기보다는 상호 보완합니다.",
          strategy: "미국 및 글로벌 수집 레이어로서 드롭 기반 CRM을 구축합니다: 출시 시점의 드롭, 콘텐츠 언락, 리테일 및 라이브 이벤트에 대한 우선 접근 메커니즘. 수집은 모든 접점에서 이루어집니다: 링크인바이오 및 고정 댓글(숏폼 엔진에 연동), 페스티벌 및 팝업 스토어 방문객, 사전 저장 캠페인. 지역, 참여 등급, 구매 행동별로 세분화하고, 출시 일정과 연계된 유지 관리 흐름을 실행합니다. 시작점은 가정이 아닌 검증을 통해 제로입니다: 과거에 구축된 유일한 리스트는 2025년 말 약 3개월 동안 파트너 레이블의 CRM을 통해 운영되었으며 이후 중단되었는데, 이는 요청이 있었을 때 가입 수요가 존재했음을 증명합니다. Berriz는 팬 커뮤니티의 중심지로 남을 것이며, CRM은 현재 플랫폼 시스템이 제공하지 못하는 직접 반응 자산이 될 것입니다.",
          components: {
            heading: "구성 요소",
            items: [
              "모든 릴리스 순간에 대한 드롭 캠페인, 전화번호 캡처 우선",
              "시장별로 세분화된 환영 및 유지 관리 흐름, 미국 리스트를 우선 자산으로",
              "우선 접근 메커니즘: 리테일 드롭, 쇼케이스 티켓, 멤버십 순간은 리스트를 통해 먼저 진행",
              "소셜, 스트리밍 사전 저장, 라이브 활동 전반에 걸쳐 연결된 캡처 표면",
            ],
          },
          kpis: [
            "미국 주도 이메일 리스트: 6개월 내 25,000명 이상",
            "SMS 리스트: 6개월 내 10,000명 이상",
            "릴리스 당일 흐름 클릭률: 15% 이상",
          ],
        },
        {
          label: "B",
          title: "미국 본사 팬 페이지 네트워크",
          objective: "미국 시장에 특화된 팬 생태계를 구축하여, 이미 최대 청취자 그룹인 미국의 관심을 미국 내 자체 팬덤으로 전환합니다.",
          strategy: "현지화된 편집, 영어 우선 프레이밍, 미국 시간대에 맞춘 게시 빈도를 갖춘 미국 시장 중심의 팬 채널 네트워크를 운영합니다. 영상 분석 결과는 회원 중심 편집, 재미 위주의 클립, 템플릿 반복보다는 무대 연출에 초점을 맞춘 콘텐츠 믹스에 직접 반영됩니다. 이 네트워크는 리테일 및 라이브 이벤트와 연계하여 팬덤을 CRM으로 축적하며, 감사 결과에서 얻은 플랫폼 교훈을 적용합니다: 동일한 콘텐츠라도 틱톡보다 더 높은 성과를 내는 인스타그램을 전략적으로 관리해야 합니다.",
          components: {
            heading: "네트워크의 역할",
            items: [
              "영어 자막 및 미국 시장 맞춤 편집을 통해 공식 콘텐츠를 재가공합니다.",
              "미국 시간대에 맞춰 멤버 집중 조명 및 시대별 콘텐츠를 운영합니다.",
              "신규 발매 기간 및 역주행 주간에 사용자 생성 콘텐츠(UGC) 확산을 증폭시킵니다.",
              "포착된 팬들의 관심을 CRM 및 리테일 이벤트로 유입시킵니다.",
            ],
          },
          kpis: [
            "채널별 네트워크 팔로워 성장률 및 참여율",
            "CRM 확보 흐름으로의 추천 트래픽",
            "활동 기간 중 미국 청취자 성장 점유율",
          ],
        },
        {
          label: "C",
          title: "멤버십, 리테일 및 상품 관련 이벤트",
          objective: "팬들에게 이제껏 제공되지 않았던 팬덤 상품과 순간들을 레이블의 제품 일정과 연계하여 제공합니다.",
          strategy: "감사에서 지적된 팬덤 인프라 관련 순간들을 조율합니다: 예정된 시점에 응원봉 출시를 전체 캠페인 순간으로 지원하고, 기존 미국 K팝 리테일 네트워크를 통해 독점 버전의 첫 미국 리테일 드롭을 구축하며, 멤버십 혜택을 CRM에 연동하여 모든 구매가 자체 보유 관계를 심화시키도록 합니다. 두 시대의 증거(데뷔 앨범과 현재의 회복세)는 구매력 있는 팬층이 존재함을 보여줍니다. 그들은 부재한 것이 아니라, 서비스가 부족했던 것입니다.",
          components: {
            heading: "구성 요소",
            items: [
              "첫 미국 리테일 상품 출시: 독점 버전, 팝업 이벤트, CRM 우선 접근권",
              "응원봉 출시 기간 캠페인 지원: 일정에 맞춰 콘텐츠, 상품 출시, 라이브 연계",
              "선접근 및 독점 콘텐츠와 연계된 멤버십 성장 메커니즘",
              "이 팬덤의 밈 정체성에 맞는 팬 참여 메커니즘: 챌린지, 잠금 해제, 회원 추천 보상",
            ],
          },
        },
      ],
      footnote: "기반 워크스트림은 출시 일정과 관계없이 매월 실행됩니다. 이것이 복리 효과를 창출하는 계층입니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "디지털",
      title: "버티컬 2 / 디지털 마케팅",
      philosophy: "영상 인텔리전스가 입증한 바를 중심으로 재구축된 앰플리파이어: 볼륨보다 재할당이 우수하며, 미국은 최고 시장으로서 타겟팅됩니다.",
      subBlocks: [
        {
          label: "A",
          title: "숏폼 엔진 재조정",
          objective: "그룹의 자체 채널을 위한 단일 운영 체제로서 여섯 가지 영상 인텔리전스 피벗을 실행합니다.",
          strategy: "계정은 이미 성공적인 볼륨으로 게시하고 있으며, 본 계획은 이를 재할당합니다. 주간 믹스: 1개의 스펙터클 또는 무대급 게시물, 2~3개의 밈 또는 소품 비트, 템플릿 중단이 필수인 게스트 비트 2~3개, 5명의 멤버가 순환하는 명명된 주간 멤버 솔로 프랜차이즈, 그리고 명시적인 요청만 담은 릴리스 에셋 엔드 카드. 인스타그램은 자체적인 표면으로 관리됩니다: 검증된 TikTok 성공작을 백필링하고, 주당 1개의 인스타그램 우선 테스트를 진행합니다. 모든 피벗은 섹션 05의 측정된 결과로 추적됩니다.",
          kpis: [
            "TikTok 평균 조회수: 재조정된 믹스로 6개월 내 3배 증가",
            "TikTok 팔로워: 12개월 내 2.2M에서 5M으로 증가",
            "멤버 솔로 프랜차이즈: 3주 내 라이브, 8주 내 5명 멤버 순환",
          ],
        },
        {
          label: "B",
          title: "유료 소셜: 미국 플라이트",
          objective: "유기적 데이터가 이미 자격을 부여한 잠재고객을 대상으로 그룹의 첫 전담 미국 유료 프로그램을 실행합니다.",
          strategy: "돌파 히트곡과 현재 싱글, 그리고 코퍼스가 초과 수익을 낸다고 말하는 밈 및 스펙터클 크리에이티브를 포함하여 카탈로그의 검증된 전환율에 대한 미국 타겟 유료 광고를 출시합니다. 목표는 스트리밍 전환(저장 및 플레이리스트 추가 최적화)부터 잠재고객 구축(CRM 캡처 및 팔로워 성장)까지 계단식으로 구성되며, 영상 시청자, 프로필 방문자, 팬 페이지 트래픽에서 구축된 리타겟팅 풀을 활용합니다. 크리에이티브는 숏폼 엔진의 성공작에서 매주 순환되며, 잠재고객 분할은 섹션 04 타겟팅 스택에서 시작하여 픽셀 데이터로 재조정됩니다.",
          components: {
            heading: "구성 요소",
            items: [
              "히트 카탈로그 기반 스트리밍 전환 캠페인, 저장 메커니즘을 통한 미국 우선 진행",
              "CRM 및 자체 채널을 위한 잠재고객 구축 캠페인",
              "영상 시청자, 참여자, 팬 페이지 트래픽 전반의 리타겟팅 아키텍처",
              "맞춤형 광고 크리에이티브가 아닌 유기적 성공작에서 소싱된 주간 크리에이티브 순환",
            ],
          },
        },
        {
          label: "C",
          title: "크리에이터 및 인플루언서 프로그램",
          objective: "포화된 일반 챌린지 볼륨을 구매하지 않고, 미국 크리에이터 생태계에 유기적으로 이미 작동하는 사운드와 형식을 심습니다.",
          strategy: "그룹의 소비 패턴은 노래 중심이므로 크리에이터 지출은 노래를 따릅니다: 현재 싱글의 셔플 안무에 참여하는 미국 댄스 및 팝 컬처 크리에이터, 브랜드가 이미 자리 잡은 밈 및 델룰루 관련 영역에 참여하는 밈 네이티브 크리에이터, 알고리즘이 이미 유리하게 작용하는 슬리퍼 클라임 기간 동안의 팬 편집 증폭. 항상 켜져 있는 백그라운드 지출이 아닌, 릴리스 순간에 맞춰진 웨이브 형태로 구성됩니다.",
          tactics: [
            "릴리스 시 테이스트메이커 웨이브: 댄스 및 코멘터리 분야의 10-15명의 미국 중견 크리에이터",
            "코퍼스가 입증한 형식에 대한 밈 레인 시딩: 소품, 밈, 캐릭터 비트",
            "슬리퍼 클라임 증폭: 달력이 아닌 차트 모멘텀에 의해 트리거되는 두 번째 크리에이터 웨이브",
            "주요 오가닉 크리에이터 게시물의 유료 광고 집행을 통한 선별적 부스팅",
          ],
        },
      ],
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "버티컬 3 / DSP 전략",
      philosophy: "KiiiKiii가 이미 동급 대비 뛰어난 성과를 보이는 디스커버리 레이어입니다. 편집자들이 이미 신호를 보낸 이점을 더욱 강화하는 것이 목표입니다.",
      intro: "K-pop DSP 전략에서 K-pop 외 장르의 에디토리얼 배치는 일반적으로 가장 어려운 과제입니다. KiiiKiii는 이미 이를 달성했습니다: 현재 싱글은 일반 팝 및 에스테틱 플레이리스트를 통해 확산되고 있습니다. 이 버티컬은 오가닉 신호를 의도적인 프로그램으로 전환합니다.",
      subBlocks: [
        {
          label: "A",
          title: "팝-에디토리얼 확장",
          objective: "KiiiKiii를 K-pop 인프라를 갖춘 팝 아티스트로 팝 에디터들에게 포지셔닝하여, K-pop 섹션을 넘어선 배치를 확장합니다.",
          strategy: "문서화된 크로스오버 증거를 중심으로 주기별 피치 패킷을 구축합니다: 이미 확보된 비(非) K팝 에디토리얼 노출, 미국 우선 리스너 기반, 그리고 편집자들이 지속 가능성으로 인식하는 섹션 03의 유지율 곡선. 주요 DSP마다 명명된 에디토리얼 관계를 개발하고, 각 주기마다 하나의 플랫폼을 전면적인 프로그램으로 지원합니다. K팝 섹션 노출을 천장이 아닌 바닥으로 삼습니다.",
          components: {
            heading: "구성 요소",
            items: [
              "크로스오버 증거 패킷을 활용한 팝 에디터 포지셔닝",
              "매 주기 K-pop 에디토리얼 기반을 유지 및 확장",
              "매 주기 사전 출시 도구의 정상 작동: 카운트다운 페이지, CRM 연동 사전 저장 기능",
              "카탈로그 전반의 메타데이터 및 피치 관리",
            ],
          },
        },
        {
          label: "B",
          title: "슬리퍼-클라임 방어",
          objective: "이 그룹의 히트곡이 실제로 만들어지는 2주차부터 6주차까지의 지속 기간을 제도화합니다.",
          strategy: "두 히트곡 모두 발매 첫 주 이후 돌파했습니다: '404'는 15일차에 일간 1위를 기록했고 29일차에 최고 스트리밍을 달성했으며, 'Pop Off'는 9일차에 1위를 기록하며 여전히 상승 중입니다. 지출과 노력이 집중되는 곳은 발매일이 아닌 지속 기간입니다. 상승 기간 동안 팬 호스트와 함께하는 리스닝 파티를 진행하고, 차트 모멘텀 트리거에 맞춰 UGC 및 크리에이터 활동 시점을 조절하며, 발매 시점에 소진하기보다는 상승 기간을 위해 유료 스트리밍 지원을 비축해 둡니다. 이 패턴은 이제 두 번 증명되었으며, 본 계획은 이를 실행합니다.",
          tactics: [
            "상승 주간 동안 팬 계정과 함께 Stationhead 스타일 리스닝 파티 개최",
            "모멘텀 기반 크리에이터 및 UGC 확산 (차트 순위, 일일 스트림 임계값)",
            "유료 스트리밍 지원은 1주차가 아닌 2주차부터 6주차에 집중",
            "데이터 기반 트리거 발동을 위한 주간 차트 및 소비 보고",
          ],
        },
        {
          label: "C",
          title: "카탈로그 활성화",
          objective: "돌파구 히트곡을 영구적인 관문으로 활용하고, 그 뒤에 있는 B-사이드 생태계를 끌어올립니다.",
          strategy: "'404'는 26주차에 여전히 주간 252,000건의 KR 스트림을 기록하며 출시 주차 대비 1.9배 증가했고, 프로모션 이벤트 없이 17-21주차에 유기적인 재상승을 보였습니다. 이는 신규 리스너들이 유입되는 경로입니다. (Canvas 영상, 클립 업데이트, 플레이리스트 배치 등) 지속적으로 관리하고 리스너들을 더 깊이 유도합니다: B-사이드 생태계 플레이리스트, OST 및 협업 카탈로그, 그리고 곡 리스너를 그룹 팬으로 전환시키는 시대별 콘텐츠. 카탈로그의 활동은 이미 스트리밍 데이터에 나타나 있으며, 활성화를 통해 이를 증폭시킬 수 있습니다.",
        },
        {
          label: "D",
          title: "플랫폼 개발 프로그램",
          objective: "미국 에디토리얼 및 파트너에게 상승세를 알리는 아티스트 개발 플래그를 확보하십시오.",
          examples: [
            "Spotify RADAR and equivalent rising-artist programs",
            "그룹의 무대 연출 강점이 자연스럽게 드러나는 DSP 브랜드 라이브 세션 포맷",
            "이미 수상한 라이징 아티스트 상을 확장하는 YouTube 및 숏폼 플랫폼 아티스트 프로그램",
          ],
        },
      ],
      footnote: "DSP는 나머지 전략을 측정 가능한 스트림으로 전환하는 발견 계층입니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Cultural Moments
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "PR",
      title: "세로 4 / PR 및 문화적 순간",
      philosophy: "언론은 이미 이 곡을 극찬했습니다. PR 업무는 비평적 찬사를 대중적인 순간으로 전환하는 것이며, 이는 시기적절하게 복합적인 효과를 창출할 것입니다.",
      subBlocks: [
        {
          label: "A",
          title: "내러티브",
          objective: "하나의 스토리를 일관되게 전달합니다: 대중이 먼저 발견한 그룹이 이제 모든 곳에서 주목받고 있습니다.",
          components: {
            heading: "이미 확보된 내러티브 자산",
            items: [
              "2026년 상반기 빌보드 최고 K팝 곡, 16일간의 숨겨진 상승세로 1위 달성",
              "전국적인 보도를 동반한 로즈볼에서의 미국 페스티벌 메인 스테이지 데뷔",
              "신인상 13관왕 석권 및 주요 서구 음악 언론에서의 1년차 프로필",
              "2026년 매월 한국 걸그룹 브랜드 평판 상위 10위권 유지, 그룹 판매 등급 상회",
            ],
          },
        },
        {
          label: "B",
          title: "미국 프레스 프로그램",
          objective: "크로스오버 스토리를 강점으로 K팝 전문 매체에서 주류 음악 및 문화 언론으로 보도 범위를 확장하십시오.",
          tactics: [
            "1티어 내러티브 형성자: Billboard, Rolling Stone, The Fader, NME, Paper",
            "청소년 및 문화 분야: Teen Vogue, Nylon, i-D, Dazed",
            "K팝 언론 노출 기반 유지: Soompi, allkpop 및 팬 커뮤니티 생태계",
            "멤버 프랜차이즈가 자산을 구축함에 따라 멤버별 프로필을 구축합니다.",
          ],
        },
        {
          label: "C",
          title: "문화 및 라이브 모먼트",
          objective: "12개월 내 페스티벌에서의 성과를 미국 내 주요 모먼트로 전환합니다.",
          strategy: "순서: 페스티벌 참가(완료), 다음 릴리즈 시점의 미국 언론 홍보, 매진 규모의 첫 미국 쇼케이스 또는 팬미팅 개최. CRM을 통해 먼저 발표하여 자체 보유 리스트에 혜택을 제공합니다. 각 모먼트는 언론 홍보 프로그램이 증폭하고 유료 프로그램이 리타겟팅하는 스토리입니다.",
        },
        {
          label: "D",
          title: "시상식 시즌 포지셔닝",
          objective: "신인 카테고리가 아닌 곡 카테고리에서 히트곡이 경쟁하는 연말 캠페인을 지원합니다.",
          strategy: "히트곡의 차트 기록과 Billboard의 연중 중간 순위는 한국 연말 시상식에서 올해의 곡 논의를 위한 발판을 마련합니다. PR, CRM 및 팬 페이지 네트워크를 통한 팬 동원, 콘텐츠 모먼트는 4분기 투표 및 방송 일정에 맞춰 진행됩니다.",
        },
      ],
      footnote: "티어 레이블은 시간 순서가 아닌 방향성을 가집니다. 홍보는 스토리 준비 상태에 따라 진행됩니다.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 워크스트림",
      philosophy: "워크스트림은 Starship Entertainment와 Transparent Arts가 직접 소유합니다. Crowd Control Digital은 조율하고 증폭하며, 파트너가 주도합니다.",
      intro: "본 계획은 레이블과 미국 파트너가 이미 운영 중인 인프라에 통합되도록 설계되었으며, 이를 복제하지 않습니다. 미국 측 조정은 Transparent Arts를 통해 진행되며, 레이블 측 업무 흐름은 Starship Entertainment에 유지됩니다. 아래의 각 업무 흐름은 파트너 주도로 유지되며, CCD 버티컬은 이를 증폭하도록 연결됩니다.",
      subBlocks: [
        {
          label: "A",
          title: "팬 플랫폼, 멤버십 및 상품 캘린더",
          objective: "플랫폼, 멤버십, 응원봉 및 앨범 상품은 레이블 일정에 따라 진행되며, 본 계획은 CRM, 리테일 및 콘텐츠 순간들을 해당 캘린더에 연결합니다.",
          strategy: "CCD의 전환 인프라는 Berriz를 팬덤의 중심지로 취급하고 가장 높은 의도를 가진 팬들을 해당 방향으로 안내하며, 드롭 CRM은 플랫폼 스택이 다루지 않는 직접 응답 캡처를 처리합니다. 상품 순간들(응원봉, 버전, 멤버십 푸시)은 예약될 때마다 버티컬 전반에 걸쳐 전체 캠페인 지원을 받습니다.",
        },
        {
          label: "B",
          title: "일본 데뷔",
          objective: "공식 일본 데뷔, 레이블 파트너 선정 및 출시 시기는 레이블 주도로 진행되며, 본 계획은 디지털 방식으로 기반 작업을 증폭합니다.",
          strategy: "일본은 그룹의 두 번째로 큰 소셜 팬덤이며 가장 독특한 라이브 기반을 다진 곳입니다. 데뷔가 예정되면 팬 페이지 네트워크는 일본으로 확장되고, CRM은 일본을 네이티브로 세분화하며, 유료 프로그램은 일본 광고를 추가합니다. 그때까지 일본 팬클럽 및 팬 콘서트 모먼트는 콘텐츠 및 드롭 지원을 받습니다.",
        },
        {
          label: "C",
          title: "브랜드 파트너십",
          objective: "광고 계약 흐름은 파트너에게 유지되며, 본 계획은 각 파트너십의 잠재 고객 가치를 극대화합니다.",
          strategy: "각 브랜드 순간은 콘텐츠 및 확보 기회가 됩니다: 파트너십 발표는 CRM 후크를 통해 자체 채널로 전달되고, 멤버별 캠페인은 멤버 프랜차이즈를 지원하며, 미국 관련 파트너는 미국 언론 프로그램으로 증폭됩니다. 증가하는 딜 빈도는 PR 부서에서 활용하는 자체적인 내러티브 자산입니다.",
        },
        {
          label: "D",
          title: "A&R 및 릴리스 캘린더",
          objective: "음악, 컴백 시기 및 크리에이티브 디렉션은 전적으로 레이블의 소관입니다. 본 계획은 의도적으로 곡에 구애받지 않습니다.",
          strategy: "본 문서의 모든 워크스트림은 다음 싱글의 사운드와 관계없이 진행됩니다. 인프라는 시대에 걸쳐 축적되며, 릴리스 창은 앰플리파이어 캘린더를 설정하고, 각 새로운 사이클은 동일한 기반 위에 자체 캠페인 계획을 승인합니다.",
        },
      ],
      footnote: "Crowd Control Digital은 버티컬 내에서 전략, 조정 및 실행을 제공하며, Starship Entertainment와 Transparent Arts는 파트너 측 업무 흐름을 실행하고 승인합니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "9월 7일에 시작하여 연말 시상식 시즌까지 Pop Off Pop Off 지속 단계를 진행하는 12주간의 배포 기간입니다. CRM은 항상 켜져 있는 확보 계층으로 먼저 구축되며, 팬 페이지 네트워크와 숏폼 리밸런스는 2주 이내에 출시됩니다. 유료 광고는 테스트 모드로 시작하여 데이터를 기반으로 확장됩니다. 미국 리테일 시점은 리테일 파트너 일정에 따라 창 중간에 도착하며, 4분기는 시상식 포지셔닝 및 다음 사이클 계획으로 마무리됩니다. 향후 릴리스 사이클은 이와 동일한 구조에 새로운 캠페인 창을 승인합니다.",
      weeks: [
        { index: 1, label: "W1", dates: "9월 7일" },
        { index: 2, label: "W2", dates: "9월 14일" },
        { index: 3, label: "W3", dates: "9월 21일" },
        { index: 4, label: "W4", dates: "9월 28일" },
        { index: 5, label: "W5", dates: "10월 5일" },
        { index: 6, label: "W6", dates: "10월 12일", note: "RETAIL (TBD)" },
        { index: 7, label: "W7", dates: "10월 19일" },
        { index: 8, label: "W8", dates: "10월 26일" },
        { index: 9, label: "W9", dates: "11월 2일" },
        { index: 10, label: "W10", dates: "11월 9일" },
        { index: 11, label: "W11", dates: "11월 16일", highlight: true, note: "AWARDS SZN" },
        { index: 12, label: "W12", dates: "11월 23일" },
      ],
      workstreams: [
        {
          name: "Drop CRM",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "DROP" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "미국 팬 페이지",
          cells: [
            { weekIndex: 2, intensity: "high", label: "LAUNCH" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "숏폼 엔진",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "REBAL" },
            { weekIndex: 3, intensity: "high", label: "SOLO" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "유료 소셜",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", label: "SCALE" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "DSP 프로그램",
          cells: [
            { weekIndex: 1, intensity: "high", label: "SUSTAIN" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "PR 프로그램",
          cells: [
            { weekIndex: 1, intensity: "medium" },
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "PUSH" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "AWARDS" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "기반 구축 + 유지 기간",
          items: [
            "Drop CRM 구축: 수집 플로우, 환영 시퀀스, 첫 드롭 템플릿화. 자체 채널에서 링크인바이오 및 고정 댓글 라우팅 라이브.",
            "Pop Off Pop Off가 상승세를 유지하는 동안 DSP 유지 프로그램이 최대 강도로 운영됩니다: 리스닝 파티 순간이 예정되고, 모멘텀 트리거가 정의되며, 주간 차트 보고가 시작됩니다.",
            "숏폼 감사 주간: 재조정된 주간 믹스, 멤버 프랜차이즈 형식 및 엔드 카드 템플릿을 콘텐츠 팀과 함께 확정합니다.",
            "미국 팬 페이지 운영진 브리핑 완료; W2 출시를 위한 콘텐츠 소싱 및 주기 확정.",
          ],
        },
        {
          weekIndex: 2,
          title: "팬 페이지 출시 + 유료 테스트",
          items: [
            "미국 팬 페이지 네트워크가 Instagram 및 TikTok 전반에 걸쳐 출시 콘텐츠와 함께 라이브됩니다.",
            "유료 소셜이 테스트 모드로 출시됩니다: 섹션 04 타겟팅 스택 대비 검증된 오가닉 우수 사례를 바탕으로 CPV 및 수집당 비용 기준선 설정.",
            "숏폼 재조정 배포: 게스트 컨베이어 제한, 개그 및 스펙터클 레인 예정.",
            "첫 CRM 드롭: 리스트 성장을 위한 시대별 콘텐츠 언락.",
          ],
        },
        {
          weekIndex: 3,
          title: "멤버 프랜차이즈 출시",
          items: [
            "주간 멤버 솔로 프랜차이즈 데뷔, 검증된 앵커 그룹 선도.",
            "유료 소셜, 첫 주 데이터 분석; 크리에이티브 로테이션 시작.",
            "팝-에디토리얼 피치 패킷, 크로스오버 증거 포함 최종 확정; DSP 관계 미팅 예정.",
            "PR: 미국 언론 홍보, 크로스오버 내러티브 기반 시작.",
          ],
        },
        {
          weekIndex: 4,
          title: "유료 광고 확장",
          items: [
            "유료 소셜, 성공적인 크리에이티브 및 타겟 오디언스 기반 확장; 리타겟팅 풀 활성화.",
            "팬 페이지 네트워크 최대 가동; 참여 및 추천 확보에 대한 첫 주간 보고.",
            "멤버 프랜차이즈, 첫 5인 멤버 로테이션 주기 계획 완료.",
            "CRM: 두 번째 드롭, 시장별 세분화.",
          ],
        },
        {
          weekIndex: 5,
          title: "언론 홍보 강화 + 리테일 준비",
          items: [
            "PR 강화 주간: 리테일 이벤트 사전 크로스오버 스토리 노출 시점 조율.",
            "미국 리테일 드롭, 리테일 파트너와 확정: 독점 버전, 날짜, 팝업 범위.",
            "유료 소셜 지속; 인스타그램 우선 포맷 테스트 시작.",
            "DSP: 싱글의 상승세가 성숙함에 따라 지속 프로그램이 카탈로그 활성화 중심으로 전환.",
          ],
        },
        {
          weekIndex: 6,
          title: "미국 리테일 이벤트 (기간)",
          items: [
            "첫 미국 리테일 드롭, 예정된 기간 내 실행: CRM 우선 접근, 팬 페이지 증폭, 참여 오디언스 대상 유료 리타겟팅.",
            "리테일 이벤트, 수집 이벤트 역할 겸함: 모든 구매 및 RSVP는 CRM으로 수집.",
            "리테일 이벤트 PR 보도, 미국 내러티브 강화.",
          ],
        },
        {
          weekIndex: 8,
          title: "중간 기간 검토",
          items: [
            "풀 퍼널 보고: 비율 변동, 리스트 성장, 유료 효율, 3배 목표 궤적 대비 숏폼 중간값.",
            "크리에이티브 학습 내용은 주간 믹스와 유료 로테이션에 반영됩니다.",
            "시상식 시즌 캘린더 확정: 투표 기간, 방송 날짜, 팬 동원 계획.",
          ],
        },
        {
          weekIndex: 9,
          title: "시상식 시즌 개막",
          items: [
            "시상식 포지셔닝 시작: CRM 및 팬 페이지를 통한 팬 동원, 연말 시상식 연계 PR.",
            "콘텐츠 모먼트가 캠페인을 지원합니다: 시대별 회고, 멤버별 프랜차이즈를 통한 스토리텔링.",
            "유료 소셜은 유지 단계로 지속되며, 예산은 시상식 기간 증폭을 위해 보류됩니다.",
          ],
        },
        {
          weekIndex: 11,
          title: "시상식 기간",
          items: [
            "시상식 시즌 최고 주간: 팬 동원 조정, 라이브 모먼트 증폭, 언론 보도.",
            "CRM은 방송 시점에 맞춰 배포됩니다.",
            "주요 퍼포먼스 및 수상에 대한 유료 증폭.",
          ],
        },
        {
          weekIndex: 12,
          title: "마무리 + 다음 주기",
          items: [
            "모든 워크스트림에 대한 전체 기간 성과 검토: 비율, 리스트, 중앙값, 리테일, 프레스, 시상식 결과.",
            "컴백 캠페인 계획 및 일본 데뷔 지원 범위 조사를 포함한 다음 주기 권장 사항 전달.",
            "인프라는 주기 간 '항시 운영' 태세로 전환되며, 기반은 계속 축적됩니다.",
          ],
        },
      ],
      footnote: "스프린트는 주간 보고와 함께 1주 주기 스프린트로 진행됩니다. 리테일 기간 및 일본 관련 모먼트는 파트너 일정에 따릅니다. 다음 컴백은 이와 동일한 구조에서 새로운 캠페인 기간을 승인합니다.",
    },
  ],
};
