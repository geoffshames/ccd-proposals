import type { StrategyPlanData } from "../plan-context";

export const kiiikiiiPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/kiiikiii/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "kiiikiii", label: "English", code: "EN" }],

  cover: {
    label: "미국 성장 계획",
    title: "KiiiKiii",
    subtitle: "KiiiKiii가 미국에서 이미 확보한 팬층을 전환하기 위한 세 가지 실행 과제: 퍼스트 파티 팬 데이터, 실물 음반 판매, 미국 시장 성장.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/kiiikiii/kiiikiii-group.jpg",
  },

  approveCta: {
    label: "승인",
    sentLabel: "전송되었습니다. 저희 팀에서 연락드리겠습니다.",
    caption: "승인 알림 CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. The Opportunity
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "기회",
      title: "기회",
      subtitle: "KiiiKiii crossed one million Spotify followers this week, and the United States is already its largest listening market. Neither of those has been built on yet.",
      body: [
        "KiiiKiii is at its highest point ever on the metrics that matter most in the U.S.: 4.18M Spotify monthly listeners, 696K of them American, and a follower count that passed one million in early September. \"404 (New Era)\" is still charting in Korea 219 days after release and has crossed ten million streams there. \"Pop Off Pop Off\" reached No. 1 on Spotify Korea within ten days and is still holding the daily top ten a month later. The audience is real, it is growing, and a large share of it is already in the market Starship wants to grow.",
        "아직 갖춰지지 않은 것은 해당 팬층을 레이블이 소유하고 측정할 수 있는 것으로 전환하는 단계입니다: 미국 내 퍼스트 파티 팬 리스트, 미국 차트 진입을 목표로 하는 실물 음반 판매 운영, 그리고 리스너들이 이미 존재하는 시장에서의 지속적인 유료 지원입니다. 본 문서는 정확히 이 세 가지 격차를 해소하기 위한 세 가지 실행 과제를 제안하며, 각 과제는 테스트 예산, 정의된 성공 지표, 그리고 확장 또는 중단 시점을 결정하는 규칙을 포함합니다.",
      ],
      supports: {
        heading: "세 가지 실행 과제",
        items: [
          "퍼스트 파티 팬 데이터: 한국 개인정보보호법 내에서 구축된, 레이블이 완전히 소유하는 미국 팬 데이터베이스",
          "실물 음반 판매: 사전 주문과 충성 팬 기반 계산에 기반한 미국 차트 전략",
          "U.S. market lift: growth in Spotify followers, Instagram, and YouTube in the top market",
        ],
      },
      goals: {
        heading: "우리의 약속",
        items: [
          "Spotify follower growth, measured against a set baseline in a set window",
          "미국에 집중된 Instagram 및 YouTube 성장",
          "팬당 비용과 목표 규모가 명시된 자체 팬 리스트",
          "미국 리테일 및 팬 직접 판매 채널을 통해 판매된 실물 앨범 수량",
          "스트리밍 성과는 보고되고 관리되며, 절대 약속되지 않습니다. 누구도 이를 정직하게 예측할 수 없습니다.",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Listeners and Followers Since Debut",
          subtitle: "팔로워 수는 데뷔 이후 매주 증가했으며 2026년 9월에 100만 명을 돌파했습니다. 각 릴리즈 사이클은 이전보다 리스너 기반을 더 높게 만듭니다.",
          series: [
            {
              name: "월간 리스너 수",
              points: [
                { x: "2/26/25", y: 42075 }, { x: "3/12/25", y: 709813 }, { x: "3/26/25", y: 1394572 }, { x: "4/9/25", y: 1800939 }, { x: "4/23/25", y: 1773572 }, { x: "5/7/25", y: 1496555 }, { x: "5/21/25", y: 1394789 }, { x: "6/4/25", y: 1230975 }, { x: "6/18/25", y: 1041609 }, { x: "7/2/25", y: 997039 }, { x: "7/16/25", y: 957721 }, { x: "7/30/25", y: 812380 }, { x: "2025년 8월 13일", y: 865993 }, { x: "2025년 8월 27일", y: 1257338 }, { x: "2025년 9월 10일", y: 1381161 }, { x: "2025년 9월 24일", y: 1190848 }, { x: "2025년 10월 8일", y: 1058594 }, { x: "2025년 10월 22일", y: 926214 }, { x: "2025년 11월 5일", y: 820899 }, { x: "2025년 11월 19일", y: 893196 }, { x: "2025년 12월 3일", y: 927667 }, { x: "2025년 12월 17일", y: 857681 }, { x: "2025년 12월 31일", y: 831721 }, { x: "2026년 1월 14일", y: 841397 }, { x: "2026년 1월 28일", y: 914832 }, { x: "2026년 2월 11일", y: 2110587 }, { x: "2026년 2월 25일", y: 3209569 }, { x: "2026년 3월 11일", y: 3647896 }, { x: "2026년 3월 25일", y: 3723676 }, { x: "2026년 4월 8일", y: 3793821 }, { x: "2026년 4월 22일", y: 3819436 }, { x: "2026년 5월 6일", y: 3786215 }, { x: "26년 5월 20일", y: 3686434 }, { x: "26년 6월 3일", y: 3691572 }, { x: "26년 6월 17일", y: 3687714 }, { x: "26년 7월 1일", y: 3537890 }, { x: "26년 7월 15일", y: 3346487 }, { x: "26년 7월 29일", y: 3232246 }, { x: "26년 8월 12일", y: 3234105 }, { x: "26년 8월 26일", y: 3980695 }, { x: "26년 8월 31일", y: 4137130 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "2/26/25", y: 16158 }, { x: "3/12/25", y: 59917 }, { x: "3/26/25", y: 84666 }, { x: "4/9/25", y: 109584 }, { x: "4/23/25", y: 125179 }, { x: "5/7/25", y: 141541 }, { x: "5/21/25", y: 154121 }, { x: "6/4/25", y: 165037 }, { x: "6/18/25", y: 176263 }, { x: "7/2/25", y: 185506 }, { x: "7/16/25", y: 194902 }, { x: "7/30/25", y: 204291 }, { x: "2025년 8월 13일", y: 219269 }, { x: "2025년 8월 27일", y: 233343 }, { x: "2025년 9월 10일", y: 243369 }, { x: "2025년 9월 24일", y: 254488 }, { x: "2025년 10월 8일", y: 264792 }, { x: "2025년 10월 22일", y: 274744 }, { x: "2025년 11월 5일", y: 284526 }, { x: "2025년 11월 19일", y: 295210 }, { x: "2025년 12월 3일", y: 307750 }, { x: "2025년 12월 17일", y: 322149 }, { x: "2025년 12월 31일", y: 335502 }, { x: "2026년 1월 14일", y: 350353 }, { x: "2026년 1월 28일", y: 375502 }, { x: "2026년 2월 11일", y: 414802 }, { x: "2026년 2월 25일", y: 452981 }, { x: "2026년 3월 11일", y: 494508 }, { x: "2026년 3월 25일", y: 538285 }, { x: "2026년 4월 8일", y: 582755 }, { x: "2026년 4월 22일", y: 624096 }, { x: "2026년 5월 6일", y: 664489 }, { x: "26년 5월 20일", y: 700695 }, { x: "26년 6월 3일", y: 736458 }, { x: "26년 6월 17일", y: 771708 }, { x: "26년 7월 1일", y: 805011 }, { x: "26년 7월 15일", y: 839117 }, { x: "26년 7월 29일", y: 876272 }, { x: "26년 8월 12일", y: 918742 }, { x: "26년 8월 26일", y: 976747 }, { x: "26년 8월 31일", y: 993822 },
              ],
            },
          ],
          markers: [
            { x: "3/26/25", label: "DEBUT" },
            { x: "2026년 1월 28일", label: "404" },
            { x: "26년 8월 12일", label: "POP OFF" },
          ],
          tall: true,
          source: "Chartmetric, 2026년 8월 31일까지 주간 데이터",
        },
      ],
      footnote: "Data pulled September 3, 2026. Sources: Chartmetric, Spotify weekly and daily South Korea chart archives, and platform data.",
    },

    // ===================================================================
    // 02. Where KiiiKiii Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "순위",
      title: "KiiiKiii의 현황",
      philosophy: "데이터에서 도출된 세 가지 주요 발견점과 각 발견점이 열어주는 기회.",
      intro: "Everything below comes from live consumption data pulled September 3, 2026: Chartmetric for audience metrics, the Spotify South Korea chart archives for stream-level detail. The comparison set is the girl-group class KiiiKiii is measured against commercially.",
      subBlocks: [
        {
          label: "A",
          title: "노래의 지속력이 카테고리 평균보다 우수함",
          objective: "KiiiKiii의 히트곡은 다른 그룹들과 달리 발매 첫 주 이후에도 성장하며 지속됩니다.",
          strategy: "Most K-pop singles peak in week one and decline from there. \"404 (New Era)\" ran at 4.8 times its launch week by week four, was still at 1.8 times launch at week 24, and is charting in Korea 219 days later having crossed ten million streams there. Against the same chart source, the class's biggest recent hits retained between 16 and 63 percent of launch week at that age. \"Pop Off Pop Off\" is following the same shape: No. 1 on Spotify Korea by day nine, still top ten daily at day 23, and its week-over-week decline has flattened to under two percent. This is the single most valuable thing about the catalog, because it means audience acquired for a KiiiKiii song does not evaporate the following month.",
          charts: [
            {
              kind: "line",
              title: "주간 스트림 유지율 vs 출시 주차",
              subtitle: "각 트랙의 첫 번째 전체 차트 주차에 맞춰 한국 주간 스트림을 지수화함. 네 곡 모두 동일한 차트 소스 사용.",
              unit: "x",
              series: [
                {
                  name: "404 (New Era)",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 4.83 }, { x: "W8", y: 3.01 }, { x: "W12", y: 2.13 }, { x: "W16", y: 1.79 }, { x: "W20", y: 2.25 }, { x: "W24", y: 1.84 }, { x: "W31", y: 1.69 },
                  ],
                },
                {
                  name: "비교 대상 A",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 1.21 }, { x: "W8", y: 0.85 }, { x: "W12", y: 0.75 }, { x: "W16", y: 0.71 }, { x: "W20", y: 0.65 }, { x: "W24", y: 0.63 }, { x: "W31", y: null },
                  ],
                },
                {
                  name: "비교 대상 B",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.75 }, { x: "W8", y: 0.56 }, { x: "W12", y: 0.53 }, { x: "W16", y: 0.41 }, { x: "W20", y: 0.35 }, { x: "W24", y: null }, { x: "W31", y: null },
                  ],
                },
                {
                  name: "비교 대상 C",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.68 }, { x: "W8", y: 0.38 }, { x: "W12", y: 0.34 }, { x: "W16", y: 0.23 }, { x: "W20", y: 0.2 }, { x: "W24", y: 0.16 }, { x: "W31", y: null },
                  ],
                },
              ],
              note: "비교 대상은 같은 기간 동안 가장 높은 인지도를 가진 세 개의 걸그룹 싱글이며, 예의상 이름은 생략합니다. 두 곡은 24주차 이전에 차트에서 이탈했습니다.",
              source: "Spotify weekly South Korea chart archives, pulled Sep 3 2026",
              tall: true,
            },
            {
              kind: "bars",
              title: "404 (New Era): 한국 주간 스트림, 31주차",
              subtitle: "출시 첫 주 134K. 4주차에 647K로 최고치 기록. 출시 7개월 후인 31주차에도 227K로 출시 주차보다 높은 수치를 유지하고 있습니다.",
              unit: "K",
              series: [
                {
                  name: "주간 스트림 (K)",
                  points: [
                    { x: "W1", y: 134 }, { x: "W4", y: 647 }, { x: "W8", y: 404 }, { x: "W12", y: 286 }, { x: "W16", y: 240 }, { x: "W20", y: 301 }, { x: "W24", y: 246 }, { x: "W28", y: 245 }, { x: "W31", y: 227 },
                  ],
                },
              ],
              source: "Spotify weekly South Korea chart archive, Jan to Sep 2026",
            },
          ],
        },
        {
          label: "B",
          title: "팔로워 100만 명, 리스너 400만 명",
          objective: "청취와 구독 간의 격차가 비교 대상 그룹 내에서 가장 크며, 이는 가장 큰 잠재적 성장 가능성을 의미합니다.",
          strategy: "KiiiKiii's Spotify follower-to-listener ratio is 0.239. Every group in the comparison set converts at a higher rate, and the mature acts sit above 1.0. Read positively: roughly 3.2 million people listened to KiiiKiii this month without taking the one free action that puts every future release in front of them automatically. Followers have grown every week since debut, so the mechanism works. It has simply never had dedicated support behind it. This is the cheapest, most durable growth available to the group, and it is the first metric the U.S. workstream is measured against.",
          charts: [
            {
              kind: "hbars",
              title: "월간 리스너당 팔로워 수",
              subtitle: "수치가 높을수록 더 깊이 몰입된 팬층을 의미합니다. 성숙한 팬덤을 가진 아티스트들은 1.0 이상입니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "KiiiKiii", y: 0.239 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "izna", y: 0.423 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "aespa", y: 1.052 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "IVE", y: 1.332 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              note: "동종 업계 중간값인 약 0.42를 기준으로 할 때, KiiiKiii의 현재 리스너 기반은 약 175만 명의 팔로워를 보유하게 될 것입니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "C",
          title: "미국은 최상위 시장이자 가장 적게 공략된 시장입니다.",
          objective: "가장 큰 잠재 고객층이 가장 적은 활동이 이루어지고 있는 시장에 존재하며, 크로스오버 기회가 막 열렸다가 닫히기 시작했습니다.",
          strategy: "미국은 KiiiKiii의 월간 리스너 69만 6천 명으로 한국을 앞서는 제1의 청취 시장이며, 지난주에도 다시 성장했습니다. 미국 내 유료 캠페인, 미국 팬 데이터 수집, 미국 리테일 활동, 미국 라이브 공연은 단 한 차례도 없었습니다. 또한 주목할 만한 시점 신호가 있습니다. 여름 동안 \"Pop Off Pop Off\"는 K-pop 섹션뿐만 아니라 일반 팝 에디토리얼 플레이리스트에도 포함되었는데, 이는 얻기 가장 어려운 것이며 일반적으로 한국 아티스트가 성공할 수 있다는 신호입니다. 해당 플레이리스트 포함은 이후 종료되었고, 총 플레이리스트 도달 범위는 일주일 만에 약 24% 감소했습니다. 기회는 저절로 열렸습니다. 이를 유지하기 위한 노력은 없었으며, 이것이 세 번째 워크스트림이 존재하는 이유입니다.",
          charts: [
            {
              kind: "hbars",
              title: "월간 리스너 기준 상위 시장",
              series: [
                {
                  name: "리스너",
                  points: [
                    { x: "미국", y: 696451 },
                    { x: "대한민국", y: 392734 },
                    { x: "인도네시아", y: 386086 },
                    { x: "필리핀", y: 334056 },
                    { x: "말레이시아", y: 332419 },
                    { x: "대만", y: 223855 },
                    { x: "호주", y: 140881 },
                    { x: "영국", y: 108243 },
                  ],
                },
              ],
              highlightX: ["미국"],
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
      ],
      footnote: "Audience data: Chartmetric, pulled Sep 3, 2026. Stream data: Spotify South Korea weekly and daily chart archives. Comparison set is the 2024 to 2026 girl-group class.",
    },

    // ===================================================================
    // 03. Proven Approach
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "실적",
      title: "이전에 실행된 동일한 세 가지 워크스트림",
      philosophy: "현재 K-pop 관련 활동으로, NDA(비밀 유지 협약) 하에 있습니다. 레이블과 아티스트는 이름을 밝힐 수 없지만, 아래 모든 수치는 해당 캠페인의 자체 보고서에서 나온 것입니다.",
      intro: "Crowd Control Digital은 주요 한국 레이블 소속 K팝 아티스트를 대상으로 미국 캠페인을 활발히 진행 중이며, 싱글 발매 7주차에 미국과 캐나다만을 타겟으로 진입했습니다. 아래 수치는 2026년 6월 15일부터 9월 2일까지의 기간을 다룹니다. 본 수치가 포함된 이유는 여기에 제안된 세 가지 워크스트림 중 두 가지가 이러한 결과를 도출한 것과 동일하기 때문입니다.",
      subBlocks: [
        {
          label: "A",
          title: "자체 팬 데이터, 제로에서 구축",
          objective: "레이블이 소유한 팬 데이터베이스로, 첫날에는 아무것도 없는 상태였습니다.",
          strategy: "이 캠페인은 어떠한 이메일 또는 SMS 리스트도 없이 시작되었습니다. 8주 후 레이블은 2,805명의 식별된 팬을 확보했으며, 이 중 1,467명은 단일 유료 광고 캠페인을 통해 가입했으며, 가입당 비용은 1.97달러였고 모든 소스를 포함한 팬당 통합 비용은 1.15달러였습니다. 이후 행동 기반으로 리스트가 강화되었습니다: 1,092명은 티켓 구매자로 식별되었고, 576명은 반복적인 사전 저장(pre-save) 대상이었으며, 383명은 상품 구매자였습니다. 이 마지막 부분이 메일링 리스트와 판매 자산의 차이점인데, 이는 레이블이 투어, 컴백 또는 앨범에 대해 어떤 팬들과 소통해야 하는지를 알려주기 때문입니다.",
          charts: [
            {
              kind: "bars",
              title: "무에서 시작한 팬 리스트 성장",
              subtitle: "자체 보유 팬 기록, 참조 캠페인.",
              series: [
                {
                  name: "보유 팬 수",
                  points: [
                    { x: "1일차\\n2026년 6월", y: 0 },
                    { x: "4주차\\n2026년 8월", y: 1338 },
                    { x: "8주차\\n2026년 9월", y: 2805 },
                  ],
                },
              ],
              highlightX: ["8주차\\n2026년 9월"],
              note: "$1.97 cost per signup on the paid flight; $1.15 blended across all capture sources.",
              source: "참조 캠페인 보고, 2026년 7월 6일 - 9월 3일",
            },
          ],
        },
        {
          label: "B",
          title: "미국 시장 상승세, 추세에 역행",
          objective: "미국 내에서만 지출하면서 미국을 시장 순위표에서 상승시켰습니다.",
          strategy: "캠페인 시작 시점에 미국은 말레이시아에 이어 아티스트의 두 번째 시장이었습니다. 유료 광고 캠페인이 시작된 지 30일 후 미국이 1위로 올라섰으며, 해당 기간 동안 1위를 유지했습니다. 더 유용한 수치는 비교인데, 같은 기간 동안 미국은 13.3% 성장한 반면, 다른 모든 주요 시장은 발매 주기가 진행됨에 따라 31%에서 42% 사이로 하락했습니다. 광고는 미국과 캐나다에서만 진행되었으며, 이는 기여도 분석을 명확하게 만듭니다.",
          charts: [
            {
              kind: "bars",
              title: "캠페인 기간 동안의 시장 성장",
              subtitle: "시장별 월간 리스너 변화율, 2026년 6월 15일 - 8월 31일. 유료 광고는 북미에서만 진행되었습니다.",
              unit: "%",
              series: [
                {
                  name: "변화율",
                  points: [
                    { x: "미국", y: 13.3 },
                    { x: "인도네시아", y: -32.8 },
                    { x: "대한민국", y: -31 },
                    { x: "말레이시아", y: -40.3 },
                    { x: "일본", y: -41.6 },
                    { x: "태국", y: -41.6 },
                  ],
                },
              ],
              highlightX: ["미국"],
              note: "미국은 유일하게 성장한 주요 시장이었습니다. 출시 30일 이내에 2위 시장에서 1위로 올라섰습니다.",
              source: "참고 캠페인 보고서, 2026년 6월 15일 ~ 8월 31일",
            },
          ],
        },
        {
          label: "C",
          title: "미디어 효율성",
          objective: "지출 대비 성과 및 10주간 비용 변동 추이.",
          strategy: "약 28,000달러의 워킹 미디어는 413만 회의 노출과 316,191회의 클릭을 7.69%의 클릭률 및 0.08달러의 통합 클릭당 비용으로 달성했습니다. 총액보다 추세가 더 중요합니다. 주요 집행 기간의 클릭당 비용은 첫째 주 0.114달러에서 열째 주 0.032달러로 72% 감소했는데, 이는 계정이 설정 후 방치된 것이 아니라 지속적으로 재구축 및 최적화되었기 때문입니다. 동일한 캠페인 내 크리에이터 및 클리핑 작업은 10,000달러로 약 227만 회의 조회수를 기록했으며, 조회수당 약 0.4센트였습니다.",
          charts: [
            {
              kind: "line",
              title: "10주간 클릭당 비용",
              subtitle: "주요 트래픽 집행, 참고 캠페인. 동일한 크리에이티브 전략, 지속적인 최적화.",
              series: [
                {
                  name: "클릭당 비용 (USD)",
                  points: [
                    { x: "1주차", y: 0.114 }, { x: "2주차", y: 0.098 }, { x: "4주차", y: 0.071 }, { x: "6주차", y: 0.058 }, { x: "8주차", y: 0.044 }, { x: "10주차", y: 0.032 },
                  ],
                },
              ],
              note: "72% 감소. 최고 일일 비용 0.030달러; 최고 클릭률 28.66%.",
              source: "참고 캠페인 보고서, 2026년 6월 22일 ~ 8월 30일",
            },
          ],
        },
      ],
      footnote: "모든 수치는 참고 캠페인의 자체 캠페인 보고서(2026년 6월~9월)에서 발췌했습니다. 아티스트와 레이블은 기밀 유지 계약에 따라 비공개 처리되며 신원이 밝혀지지 않습니다. 스트리밍 성과는 워크스트림 3에 명시된 이유로 이 섹션에서 의도적으로 제외되었습니다.",
    },

    // ===================================================================
    // 04. Workstream 1
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "팬 데이터",
      title: "워크스트림 1 / 퍼스트 파티 팬 데이터",
      philosophy: "한국 개인정보보호법이 허용하는 범위 내에서 Starship이 완전 소유하는 미국 팬 데이터베이스 구축.",
      intro: "이 데이터베이스가 존재하면 다른 모든 워크스트림의 효율성이 향상됩니다. 레이블이 자체 팬층에 대한 접근 권한을 임대하는 대신 소유하게 되기 때문입니다.",
      subBlocks: [
        {
          label: "A",
          title: "구축되는 것",
          objective: "연락처 사용 동의, 행동 데이터 분석, 직접적인 상업적 활용이 가능한 미국 거주 팬 명단",
          strategy: "릴리스 공개, 사전 저장 캠페인, 티켓 및 리테일 이벤트, 그리고 콘텐츠 광고의 부가적인 요소가 아닌 가입을 위해 특별히 제작된 유료 확보 유닛을 통해 미국 팬을 대상으로 확보를 진행합니다. 기록은 실제 행동 데이터를 기반으로 시간이 지남에 따라 분석되므로, 레이블은 단순 팔로워와 반복적인 티켓 구매자를 구분할 수 있습니다. 결과물은 Starship이 직접 보유하며 컴백 발표, 투어 티켓 판매, 앨범 사전 주문, 리테일 상품 출시 등에 활용 가능한 자산이며, 특정 플랫폼의 알고리즘이나 특정 대행사의 계정 접근 권한에 의존하지 않습니다.",
          components: {
            heading: "구성 요소",
            items: [
              "소셜, 사전 저장, 리테일, 라이브 이벤트 전반에 걸친 미국 팬 확보 채널",
              "노출 수(impressions)가 아닌 팬 1인당 비용(cost per fan)으로 구축 및 측정되는 유료 확보 유닛",
              "행동 데이터 분석: 티켓 구매자, 반복적인 사전 저장 참여자, 상품 구매자",
              "컴백, 판매 개시, 사전 주문 시점을 위한 세분화된 흐름",
              "항상 레이블 측에서의 완전한 데이터 소유권 및 내보내기 기능",
            ],
          },
          kpis: [
            "출시 전 합의된 목표치 하에 관리되는 팬 1인당 비용",
            "명시된 최소치를 포함한 90일 기준 명단 규모",
            "최소 1회 이상의 구매 행동으로 데이터가 분석된 기록의 비율",
          ],
        },
        {
          label: "B",
          title: "한국 개인정보 보호법 준수",
          objective: "규제가 허용되고 대상 고객이 이미 존재하는 미국으로 확보 범위를 제한하여 규정 준수를 유지합니다.",
          strategy: "한국의 개인정보 규정은 엄격하고 구체적입니다: 동의는 다른 어떤 것과도 결합될 수 없으며, 고지는 한국어로 제공되어야 하고, 선택 해지(opt-out)는 가능하고 쉬워야 합니다. 한국에서의 전화 기반 확보는 서구 플랫폼에서 요구하는 이중 동의(double opt-in) 절차를 한국 전화번호로는 완료할 수 없기 때문에 실제적으로 사용이 불가능합니다. 본 계획은 이러한 문제에 대응하지 않습니다. 한국 팬들은 레이블의 기존 팬 플랫폼에 그대로 머무르며, 이는 해당 시장에 잘 부합합니다. 확보는 미국 규정에 따라 미국 거주자로 범위가 제한되며, 이는 완전히 규정을 준수하고 본 계획이 목표로 하는 시장을 대상으로 합니다. 참고 캠페인 역시 동일한 방식으로 구축되었습니다.",
          components: {
            heading: "규정 준수 현황",
            items: [
              "미국 거주자 확보만 진행하며, 미국 동의 기준을 따름",
              "동의 사항을 묶지 않으며, 다른 어떤 조건으로도 가입을 강요하지 않음",
              "한국 시장 팬들은 기존 레이블 팬 플랫폼에 그대로 유지",
              "모든 채널에서 기록된 동의 내역 및 선택 해지 기능 제공",
            ],
          },
        },
      ],
      footnote: "미국 시장을 대상으로 하는 것은 제한이 아니라 의도적인 규정 준수 결정입니다. 미국은 해당 그룹의 가장 큰 청취 시장입니다.",
    },

    // ===================================================================
    // 05. Workstream 2
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "실물 음반",
      title: "워크스트림 2 / 실물 음반 판매",
      philosophy: "구매 1건은 차트 유닛 1개로 집계됩니다. 유료 스트리밍 100회 분량이 동일한 유닛 1개로 집계됩니다. 이 비율이 바로 이 워크스트림이 존재하는 이유입니다.",
      intro: "미국 차트 집계는 산술적이며, 그 산술 방식은 공개되어 있습니다. 본 섹션에서는 판매량이 차트 순위로 어떻게 전환되는지, 2026년 동안 실제 진입 지점은 어떠했는지, 그리고 K팝 아티스트에게 물리적 판매량이 왜 가장 높은 레버리지를 제공하는지 정확히 설명합니다.",
      subBlocks: [
        {
          label: "A",
          title: "판매 1건의 실제 가치",
          objective: "공개된 공식을 바탕으로 판매와 스트리밍 간의 환산율을 설정하십시오.",
          strategy: "Billboard 차트의 데이터 제공업체인 Luminate는 곡당 환산 공식을 명확하게 공개합니다. 2026년 첫 차트 주 기준으로, 구매 1건은 유닛 1개, 프리미엄 스트리밍 100회는 유닛 1개, 광고 지원 스트리밍 250회는 유닛 1개, 프로그래밍 스트리밍 400회는 유닛 1개로 집계됩니다. 2026년에 비율이 이전의 125회 및 375회에서 더 타이트해져 스트리밍의 가치가 약간 더 높아지고 판매량의 가치는 상대적으로 낮아졌지만, 핵심은 변하지 않았습니다. 즉, 판매 1건은 유료 스트리밍 100회와 같습니다. 이것이 바로 물리적 판매 워크스트림의 근거입니다. 집계 주간에 1만 유닛이 판매되면 이는 프리미엄 스트리밍 100만 회와 동일한 차트 가치를 가지며, 낯선 사람들로부터 백만 건의 추가 스트리밍을 확보하는 것보다 알려진 팬 목록에서 만 건의 확정적인 구매를 유도하는 것이 훨씬 쉽습니다.",
          charts: [
            {
              kind: "bars",
              title: "1만 팬 활동으로 생산된 차트 유닛",
              subtitle: "공개된 2026 Luminate 곡당 환산 비율에 따라 동일한 수의 팬 활동이 차트 유닛으로 얼마의 가치를 가지는지.",
              series: [
                {
                  name: "차트 유닛",
                  points: [
                    { x: "10,000\\n구매", y: 10000 },
                    { x: "10,000 프리미엄\\n스트리밍", y: 100 },
                    { x: "10,000 광고 지원\\n스트리밍", y: 40 },
                    { x: "10,000 프로그래밍\\n스트리밍", y: 25 },
                  ],
                },
              ],
              highlightX: ["10,000\\n구매"],
              note: "구매 1건은 유닛 1개와 같습니다. 동일한 단일 유닛을 생산하기 위해 프리미엄 스트리밍 100회가 필요합니다. 이 비율 때문에 K팝은 판매량으로 차트화됩니다.",
              source: "Luminate, 공개된 곡당 환산 가중치, 2026년 1주차 기준",
            },
          ],
        },
        {
          label: "B",
          title: "실제로 차트 진입에 필요한 것",
          objective: "경험적 규칙을 차트 자체의 측정된 진입 지점으로 대체하십시오.",
          strategy: "Billboard는 진입 임계값을 공개하지 않으며, 그 기준은 매주 경쟁 상황의 강도에 따라 변동합니다. Crowd Control Digital은 자체 기록을 유지하고 있습니다. 이는 Luminate에서 매주 캡처한 순위 1, 10, 25, 50, 75, 100위에 있는 곡들이 획득한 실제 차트 포인트입니다. 2026년 1월부터 6월까지 21개 차트 주 동안 Hot 100 차트 100위로 진입하는 데는 평균 34,853 포인트가 소요되었으며, 가장 약했던 주에는 29,087 포인트에서 가장 강했던 주에는 49,806 포인트까지 분포했습니다. 6월 11일로 끝나는 주의 구체적인 예시를 들면, 100위 곡은 37,432 포인트로 364만 프리미엄 스트리밍, 67만 광고 지원 스트리밍, 86,500의 라디오 청취자 수, 그리고 880건의 판매량으로 해당 순위에 올랐습니다. 위 비율과 비교했을 때, 1만 유닛은 그 자체로 전체 차트 순위의 4분의 1 이상을 차지했을 것입니다.",
          charts: [
            {
              kind: "hbars",
              title: "Hot 100 순위별 필요 평균 차트 포인트",
              subtitle: "각 순위에서 곡이 획득한 관찰된 포인트, 2026년 1월부터 6월까지 21개 차트 주의 중앙값.",
              series: [
                {
                  name: "차트 포인트",
                  points: [
                    { x: "1위", y: 299949 },
                    { x: "10위", y: 146157 },
                    { x: "25위", y: 99732 },
                    { x: "50위", y: 62817 },
                    { x: "75위", y: 44643 },
                    { x: "100위", y: 34853 },
                  ],
                },
              ],
              highlightX: ["100위"],
              note: "진입 지점은 현실적인 첫 번째 목표입니다. 동일 기간 범위: 100위는 29,087에서 49,806까지, 25위는 70,199에서 148,295까지 기록했습니다.",
              source: "Crowd Control Digital 차트 데이터셋, Luminate 주간 상세 분석, 21주",
            },
            {
              kind: "line",
              title: "Hot 100 진입 지점, 주별 추이",
              subtitle: "2026년 1월부터 6월까지 매주 차트별 100위권 유지를 위해 필요한 포인트. 목표치는 변동하므로 집계 주차가 중요합니다.",
              series: [
                {
                  name: "100위권 포인트",
                  points: [
                    { x: "1/15", y: 38603 }, { x: "1/22", y: 33305 }, { x: "1/29", y: 29087 }, { x: "2/5", y: 35215 }, { x: "2/12", y: 46524 }, { x: "2/19", y: 36484 }, { x: "2/26", y: 35862 }, { x: "3/5", y: 34999 }, { x: "3/12", y: 34332 }, { x: "3/19", y: 33012 }, { x: "3/26", y: 33859 }, { x: "4/2", y: 35330 }, { x: "4/9", y: 31079 }, { x: "4/16", y: 32883 }, { x: "4/23", y: 31309 }, { x: "4/30", y: 34515 }, { x: "5/7", y: 34853 }, { x: "5/14", y: 32203 }, { x: "5/21", y: 49806 }, { x: "5/28", y: 38227 }, { x: "6/11", y: 37432 },
                  ],
                },
              ],
              note: "해당 기간 중 가장 수월한 주와 가장 어려운 주 사이에 71%의 편차가 존재합니다. 발매 시점은 수천 유닛만큼의 가치를 지닙니다.",
              source: "Crowd Control Digital 차트 데이터셋, Luminate 주간 상세 분석",
            },
          ],
        },
        {
          label: "C",
          title: "이 전략이 특히 K-Pop에 효과적인 이유",
          objective: "미국 차트에 진입하는 동료 아티스트들이 판매량을 통해 이를 달성하고 있으며, 미국 실물 시장 역시 같은 방향으로 움직이고 있음을 보여줍니다.",
          strategy: "올해 미국 차트에서 K-Pop의 주요 성공 사례는 스트리밍보다는 판매량에 의한 것이었습니다. KATSEYE는 2026년 8월, 17만 유닛으로 빌보드 200 차트 1위에 올랐으며, 이 중 14만 5천 유닛은 30가지 이상의 CD 및 바이닐 에디션을 통해 발생한 순수 앨범 판매량이었습니다. BTS는 3월, 64만 3천 유닛으로 1위에 올랐으며 이 중 53만 2천 유닛이 순수 판매량이었습니다. BLACKPINK는 3월, 5만 2천 유닛으로 8위에 올랐으며 이 중 4만 1천 유닛이 순수 판매량이었습니다. 각 사례에서 차트 유닛의 약 5분의 4는 무언가를 구매한 팬들로부터 나왔습니다. 시장 상황 역시 같은 방향을 가리키고 있습니다. 2026년 상반기 미국 CD 판매량은 16% 증가했으며, Luminate는 자체 중간 보고서에서 K-Pop이 없었다면 해당 성장률은 6.7%에 그쳤을 것이라고 밝혔습니다. K-Pop 팬덤은 미국 실물 시장 성장의 원동력이며, KiiiKiii는 아직 미국 전용 유닛을 판매한 적이 없습니다.",
          charts: [
            {
              kind: "grouped",
              title: "K-Pop 아티스트들이 실제로 미국 차트에서 순위를 올리는 방법",
              subtitle: "첫 주 미국 환산 앨범 유닛 대 순수 앨범 판매량, 2026 빌보드 200 진입 기록.",
              series: [
                {
                  name: "총 유닛",
                  points: [
                    { x: "BTS\\n1위", y: 643000 },
                    { x: "Stray Kids\\n1위", y: 369000 },
                    { x: "KATSEYE\\n1위", y: 170000 },
                    { x: "BLACKPINK\\n8위", y: 52000 },
                  ],
                },
                {
                  name: "순수 판매량",
                  points: [
                    { x: "BTS\\n1위", y: 532000 },
                    { x: "Stray Kids\\n1위", y: null },
                    { x: "KATSEYE\\n1위", y: 145000 },
                    { x: "BLACKPINK\\n8위", y: 41000 },
                  ],
                },
              ],
              note: "순수 판매량은 차트 유닛의 79%에서 85%를 차지합니다. Stray Kids의 판매량 분할은 공개되지 않았으며, 369,000 유닛은 17개의 실물 및 8개의 디지털 버전과 함께 판매되었습니다.",
              source: "Billboard 차트 Luminate 데이터 보고 (2026년 3월 - 8월)",
            },
          ],
        },
        {
          label: "D",
          title: "실행 방안",
          objective: "보유 팬 리스트를 단일 집계 주간 내 유닛으로 전환하십시오.",
          strategy: "공개 발표 전에 자체 리스트에 사전 주문을 개방하여 리스트에 대한 보상을 제공하고, 아직 조치를 취할 시간이 있을 때 수요를 조기에 파악할 수 있도록 합니다. 기존 미국 K-pop 유통망을 통한 미국 전용 버전은 수입 대신 현지 구매 이유를 만들며, 다양한 버전 전략은 위 차트의 모든 아티스트가 팬당 유닛 수를 늘리기 위해 사용한 것입니다. 리테일 또는 팝업 이벤트는 캠페인에 사진 촬영거리를, 언론에는 보도거리를 제공합니다. 모든 것은 단일 집계 주간 내에 완료되도록 시기 조절되어야 합니다. 잘못된 주간에 판매된 유닛은 차트 순위에 아무런 영향을 미치지 않기 때문입니다.",
          components: {
            heading: "구성 요소",
            items: [
              "선주문 기간을 자체 리스트에 먼저 공개",
              "미국 K-pop 유통망을 통한 미국 전용 버전 및 다양한 버전 전략",
              "판매 시점과 연계된 리테일 또는 팝업 이벤트",
              "모든 수요를 한 주간 집계",
              "차트 집계 가능 리테일 판매에 더한 마진을 위한 팬 직접 판매 채널",
            ],
          },
          kpis: [
            "공개 판매 전 확정된 선주문 유닛",
            "집계 주간 총 유닛 수",
            "자체 리스트에서 추적된 유닛 비율",
          ],
        },
      ],
      footnote: "비율: Luminate 발표 곡 환산 가중치 (2026년 1주차 적용). 기준 데이터: Crowd Control Digital 자체 차트 데이터셋 (2026년 1월 - 6월, 21개 차트 주간 Luminate 주간 상세 분석 기반). 동종 업계 수치: Billboard 차트 Luminate 데이터 보고. 앨범 차트 및 곡 차트 비율은 다르며, 둘 다 각 차트에 적용되는 조건에 따라 위에 명시되어 있습니다. 출시일이 확정되면 목표치가 설정됩니다. 경쟁 주간에 따라 진입 시점이 달라지기 때문입니다.",
    },

    // ===================================================================
    // 06. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "미국 시장 성장",
      title: "워크스트림 3 / 미국 시장 성장",
      philosophy: "청취자들이 이미 활동하는 시장에서 팔로워, 구독자, 참여도를 높입니다.",
      intro: "This workstream is measured on Spotify followers, Instagram, and YouTube growth in the United States. Streaming is worked hard and reported honestly, but it is not a promised number, and Section 07 explains why.",
      subBlocks: [
        {
          label: "A",
          title: "주요 시장 유료 광고 집행",
          objective: "이미 청취 중인 잠재 고객을 대상으로 그룹의 첫 미국 전용 유료 프로그램을 실행합니다.",
          strategy: "카탈로그는 이미 전환율을 입증했습니다: \"404 (New Era)\"는 출시 7개월 후에도 여전히 스트리밍을 견인하고 있으며, 현재 싱글은 자체적인 추진력으로 한국에서 1위를 달성했습니다. 유료 광고 지원은 이미 검증된 트랙을 대상으로 미국 우선으로 진행되며, 팔로워 및 구독자 성장부터 팬 데이터 확보까지 단계적으로 진행되고, 비디오 시청자 및 프로필 방문자로부터 리타겟팅 풀을 구축합니다. 광고 소재는 맞춤형 광고 제작이 아닌, 이미 유기적으로 성과를 내고 있는 콘텐츠를 주간 단위로 교체하여 사용하며, 이는 참조 캠페인에서 클릭당 비용을 72% 절감한 접근 방식입니다.",
          components: {
            heading: "구성 요소",
            items: [
              "팔로워 및 구독자 성장 캠페인, 미국 타겟",
              "워크스트림 1에 활용될 팬 데이터 확보 유닛",
              "비디오 시청자, 참여자, 프로필 방문자 대상 리타겟팅",
              "유기적 성과 기반의 주간 광고 소재 교체",
              "고정된 기준선 대비 주간 보고, 각 체크포인트에서 확장 또는 중단 결정",
            ],
          },
          kpis: [
            "Spotify follower growth against baseline",
            "기준선 대비 미국 Instagram 및 YouTube 성장",
            "팔로워당 비용 및 확보된 팬당 비용",
          ],
        },
        {
          label: "B",
          title: "확장 가능한 콘텐츠 및 크리에이터 작업",
          objective: "그룹 자체 데이터로 이미 입증된 콘텐츠 형식에 실제 유의미한 볼륨으로 유료 광고를 집중하십시오.",
          strategy: "KiiiKiii 및 경쟁사 영상 113개를 분석한 결과, 각 영상의 실제 성과 데이터를 첨부하여 명확한 패턴을 발견했습니다. 그룹에서 가장 많이 제작된 형식은 성과가 가장 낮은 반면, 멤버 중심 게시물, 소품 및 개그 형식, 무대 영상은 꾸준히 높은 성과를 보였습니다. 동일한 분석 결과, 동일한 게시물이 Instagram에서 TikTok보다 정기적으로 몇 배 더 많은 수익을 올리며, 그룹 콘텐츠의 거의 대부분이 시청자를 다른 곳으로 유도하지 못했습니다. 이 중 어느 것도 새로운 제작을 필요로 하지 않습니다. 이미 제작되고 있는 것을 재할당하고 수익을 창출하는 형식 뒤에 미디어를 배치하는 것이 필요합니다.",
          components: {
            heading: "콘텐츠 분석 결과",
            items: [
              "멤버 중심 게시물은 계정 평균 대비 약 2배의 성과를 내며, 전체 제작량의 7%를 차지합니다.",
              "가장 많이 제작된 형식은 전체 게시물의 약 절반을 차지하며 상위 성과 게시물의 1/7에 해당합니다.",
              "동일한 게시물이 Instagram에서 TikTok보다 최대 5배 더 많은 수익을 올리며, 어느 플랫폼에도 최적화된 버전은 없습니다.",
              "분석된 68개의 게시물에 명시적인 행동 유도 문구가 한 번 나타났습니다.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "콘텐츠 형식별 평균 조회수",
              subtitle: "KiiiKiii 자체 게시물, TikTok 평균 (단위: 천)",
              unit: "K",
              series: [
                {
                  name: "평균 조회수 (천)",
                  points: [
                    { x: "가장 많이\\n제작된 형식", y: 246 },
                    { x: "계정\\n평균", y: 590 },
                    { x: "소품 및 개그\\n게시물", y: 939 },
                    { x: "멤버 중심\\n게시물", y: 1220 },
                  ],
                },
              ],
              highlightX: ["멤버 중심\\n게시물"],
              source: "성과 데이터 첨부 영상 113개 분석, 2026년 8월",
            },
          ],
        },
        {
          label: "C",
          title: "클리핑 및 시딩, 합리적인 규모로",
          objective: "효과가 있는 곳에서는 크리에이터 볼륨을 활용하고, 효과가 없는 곳은 명확히 말씀드리겠습니다.",
          strategy: "클리핑은 규모를 통해서만, 오직 규모를 통해서만 효과를 발휘합니다. 25만 회의 노출은 측정 가능한 변화를 전혀 일으키지 못합니다. 2,500만 회의 노출은 아티스트를 움직일 수 있으며, 대략 1달러의 CPM 기준으로 약 2만 5천 달러가 소요되는데, 이는 시작하기에 합리적인 지점입니다. Crowd Control Digital은 시장에서 가장 큰 클리핑 플랫폼 중 하나의 백엔드를 구축했으며, 에이전시 시장에서는 접근할 수 없는 요율로 구매하므로 동일한 예산으로 다른 어떤 곳보다 실질적으로 더 많은 볼륨을 제공합니다. 클리핑을 통해 제작된 콘텐츠는 유료 광고로도 라이선스되어 계획의 나머지 부분에 대한 크리에이티브 비용을 절감합니다.",
          charts: [
            {
              kind: "bars",
              title: "클리핑: 효과의 하한선",
              subtitle: "제공된 노출 수와 각 수준별 현실적인 성과.",
              series: [
                {
                  name: "노출 수",
                  points: [
                    { x: "측정 불가\\n효과 없음 250K", y: 250000 },
                    { x: "최소 실행\\n~1,250만", y: 12500000 },
                    { x: "시작 예산\\n2,500만", y: 25000000 },
                  ],
                },
              ],
              highlightX: ["시작 예산\\n2,500만"],
              note: "대략 1달러의 CPM 기준으로 2,500만 회의 노출은 약 2만 5천 달러로, 이는 최소한의 약정이라기보다는 현실적인 진입점입니다. 이 기준 이하의 지출은 노이즈만 발생시키므로, 소규모로 실행하기보다는 아예 실행하지 않는 것이 낫습니다.",
              source: "Crowd Control Digital 클리핑 벤치마크, 2026",
            },
          ],
        },
      ],
      footnote: "콘텐츠 분석 결과는 2026년 8월에 완료된, 게시물별 성과 데이터가 첨부된 KiiiKiii 및 경쟁사 영상 113개 분석에서 도출되었습니다.",
    },

    // ===================================================================
    // 07. How We Work
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "업무 방식",
      title: "업무 방식",
      thesis: "모든 것에는 효과의 하한선이 있습니다. 모든 채널에는 지출 수준 이하에서는 예산이 노이즈만 발생시키는 지점이 있으며, 저희는 예산을 집행하기 전에 이를 알려드리는 것을 선호합니다.",
      hierarchy: [
        {
          label: "모든 항목에는 최악, 예상, 최상의 경우가 있습니다.",
          description: "단일 수치로 제시되는 것은 없습니다. 각 업무 흐름에는 세 가지 시나리오와 그에 따른 가정이 포함되어 있어, 예산이 확정된 후에 설명하기보다는 사전에 단점을 파악할 수 있습니다.",
        },
        {
          label: "모든 곳에서 낮게 시작하고, 움직이는 것을 확장하십시오.",
          description: "새로운 계약 시, 저희는 의도적으로 모든 채널에서 역량 이하로 시작하여 결과를 분석하고, 효과가 있는 곳으로 예산을 이동시킵니다. 확장 또는 중단 결정은 분기 말의 직감이 아닌, 정해진 일정에 따라 정해진 기준선에 맞춰 이루어집니다.",
        },
        {
          label: "스트리밍은 노력하는 것이지 약속하는 것이 아닙니다.",
          description: "스트리밍 증가는 솔직하게 예측할 수 없기 때문에 수치를 제시하지 않습니다. 최근 다른 아티스트를 대상으로 진행된 테스트에서 트랙에 실제 예산을 투입했으나, 해당 트랙의 일반적인 일일 변동폭보다 작은 움직임을 보여 측정 불가능했습니다. 저희는 스트리밍을 주간 단위로 보고하며, 위에 언급된 전략들을 통해 적극적으로 노력합니다. 저희는 팔로워, 잠재고객 성장, 팬 데이터, 유닛 판매에 대해 약속드리며, 이 모든 것은 측정 가능하고 귀속 가능합니다.",
        },
        {
          label: "업무 분담 명확화",
          description: "Crowd Control Digital은 수치, 미디어, 데이터 및 크리에이티브 테스트를 담당합니다. Transparent Arts는 A&R, 언론 및 관계 관리를 담당합니다. 양측은 서로의 전문성을 침범하지 않으며, 매주 같은 회의에 참석합니다.",
        },
      ],
      messaging: [
        "잠재 고객은 이미 존재합니다. 본 계획은 잠재 고객을 창출하는 것이 아니라 전환하는 데 초점을 맞춥니다.",
        "본 문서에서 제안된 모든 사항은 출시 전 설정된 기준선과 비교하여 측정됩니다.",
        "마법의 총알은 마법의 총알이 있다고 누구에게도 말하지 않는 것입니다.",
      ],
      footnote: "본 문서의 모든 권장 사항은 2026년 9월 3일에 추출된 소비 데이터 또는 동일한 세 가지 워크스트림에서 실행된 라이브 캠페인 결과에 근거합니다.",
    },

    // ===================================================================
    // 08. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "첫 90일",
      title: "첫 90일",
      intro: "테스트 우선 방식입니다. 팬 데이터 수집은 첫 주에 구축되며, 다른 모든 활동은 이를 지원합니다. 유료 광고는 소규모로 시작하여 증거에 기반하여 확장됩니다. 실물 앨범 기획은 발매일이 확정되는 즉시 시작되며, 4주차의 첫 번째 점검 회의는 단순한 진행 상황 보고가 아닌 실제 확장 또는 중단 여부를 결정하는 회의가 될 것입니다.",
      weeks: [
        { index: 1, label: "W1", dates: "1주차" },
        { index: 2, label: "W2", dates: "2주차" },
        { index: 3, label: "W3", dates: "3주차" },
        { index: 4, label: "W4", dates: "4주차", highlight: true, note: "CHECKPOINT" },
        { index: 5, label: "W5", dates: "5주차" },
        { index: 6, label: "W6", dates: "6주차" },
        { index: 7, label: "W7", dates: "7주차" },
        { index: 8, label: "W8", dates: "8주차", highlight: true, note: "CHECKPOINT" },
        { index: 9, label: "W9", dates: "9주차" },
        { index: 10, label: "W10", dates: "10주차" },
        { index: 11, label: "W11", dates: "11주차" },
        { index: 12, label: "W12", dates: "12주차", highlight: true, note: "REVIEW" },
      ],
      workstreams: [
        {
          name: "팬 데이터",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
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
          name: "미국 유료 광고",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
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
          name: "콘텐츠 믹스",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "REBAL" },
            { weekIndex: 3, intensity: "high" },
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
          name: "실물 음반",
          cells: [
            { weekIndex: 3, intensity: "low", label: "PLAN" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "RETAIL" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", label: "ONSALE" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "팬 데이터 확보 시스템 구축",
          items: [
            "팬 데이터 플랫폼 가동: 데이터 수집 채널, 동의 절차, 환영 시퀀스 설정 완료.",
            "본 계획의 모든 측정 지표에 대한 기준선이 확정되어, 4주차에 비교 분석이 가능합니다.",
            "콘텐츠 감사 완료: 증량할 포맷, 축소할 포맷 결정, 신규 제작 불필요.",
          ],
        },
        {
          weekIndex: 2,
          title: "유료 광고 테스트 모드 시작",
          items: [
            "미국 유료 광고, 검증된 카탈로그를 대상으로 소규모 집행 시작, 팔로워당 비용 및 팬당 비용 측정.",
            "분석 결과 확인된 포맷 중심으로 콘텐츠 믹스 재조정.",
            "첫 데이터 확보 캠페인 가동, 리스트 확보 시작.",
          ],
        },
        {
          weekIndex: 4,
          title: "점검: 확장 또는 중단",
          items: [
            "착수 시 합의된 목표 대비 팬당 비용 및 팔로워당 비용에 대한 종합 분석.",
            "성과가 좋은 항목에 예산 집중. 효율성 하한선 이하의 항목은 유지하지 않고 즉시 중단.",
            "발매일 확정 시 실물 앨범 기획 착수.",
          ],
        },
        {
          weekIndex: 8,
          title: "점검: 중간 검토",
          items: [
            "90일 목표 대비 리스트 규모, 팔로워 증가, 오디언스 증가 측정.",
            "집계 주간에 대한 리테일 및 사전 예약 계획 확정.",
            "현재 오가닉 콘텐츠 히트작 기반으로 크리에이티브 업데이트.",
          ],
        },
        {
          weekIndex: 12,
          title: "검토 및 다음 주기",
          items: [
            "모든 약정 지표에 대한 전체 보고, 기여도 명확히 명시.",
            "레이블이 소유한, 풍부하고 내보내기 가능한 팬 리스트가 전달되었습니다.",
            "이번 기간 동안 실제로 증명된 것을 바탕으로 규모가 조정된 다음 릴리스 주기에 대한 권장 사항입니다.",
          ],
        },
      ],
      footnote: "타이밍은 실물 상품 작업 흐름에 대한 확정된 출시일을 가정합니다. 체크포인트는 채널을 중단할 권한이 있는 실제 의사 결정 지점입니다.",
    },
  ],
};
