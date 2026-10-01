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
    date: "2026년 10월",
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
      subtitle: "KiiiKiii now has more than 1.09 million Spotify followers, and the United States is its largest listening market. That is a strong base to build a U.S. campaign on.",
      body: [
        "KiiiKiii reached a career-high 4.41M Spotify monthly listeners in September and sits at 3.97M today, with the U.S. as its largest market. Followers grew 9 percent in the last month alone, to 1.09 million. \"404 (New Era)\" is still charting in Korea 252 days after release and has passed ten million streams there. \"Pop Off Pop Off\" reached No. 1 on Spotify Korea within ten days, peaked at No. 3 on the weekly chart, and is still in the top 20 seven weeks in. It also won Best Song of the Year at the SPOTV K-Pop Awards in September. The audience is real, it is growing, and a large share of it is already in the market Starship wants to grow.",
        "기회는 해당 청중에게 레이블로 직접 연결되는 통로와 행동할 이유를 제공하는 것입니다. 즉, 레이블이 소유한 미국 팬 리스트, 다음 미국 차트 주간에 맞춰 준비된 실물 앨범 발매 계획, 그리고 리스너들이 이미 존재하는 시장에서의 지속적인 유료 지원입니다. 본 문서는 이를 달성하기 위한 세 가지 실행 과제를 제안합니다. 각 과제에는 테스트 예산, 정의된 성공 지표, 그리고 언제 확장하고 언제 중단할지에 대한 규칙이 포함됩니다.",
      ],
      supports: {
        heading: "세 가지 실행 과제",
        items: [
          "퍼스트 파티 팬 데이터: 한국 개인정보보호법 내에서 구축된, 레이블이 완전히 소유하는 미국 팬 데이터베이스",
          "실물 앨범 판매: 캠페인 기간 동안 구축되어 다음 발매 시 실행 준비가 된 미국 차트 계획",
          "U.S. market lift: growth in Spotify followers, Instagram, and YouTube in the top market",
        ],
      },
      goals: {
        heading: "우리의 약속",
        items: [
          "Spotify follower growth, measured against a set baseline in a set window",
          "미국에 집중된 Instagram 및 YouTube 성장",
          "팬당 비용과 목표 규모가 명시된 자체 팬 리스트",
          "소유한 팬 리스트를 기반으로 사전 주문 수요를 측정한, 발매 준비 완료된 미국 실물 앨범 계획",
          "스트리밍 성과는 보고되고 관리되며, 절대 약속되지 않습니다. 누구도 이를 정직하게 예측할 수 없습니다.",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Listeners and Followers Since Debut",
          subtitle: "팔로워는 데뷔 이후 매주 꾸준히 증가하여 2026년 10월까지 109만 명을 넘어섰습니다. 각 발매 주기는 이전보다 더 높은 리스너 기반을 남깁니다.",
          series: [
            {
              name: "월간 리스너 수",
              points: [
                { x: "2/26/25", y: 42075 }, { x: "3/12/25", y: 709813 }, { x: "3/26/25", y: 1394572 }, { x: "4/9/25", y: 1800939 }, { x: "4/23/25", y: 1773572 }, { x: "5/7/25", y: 1496555 }, { x: "5/21/25", y: 1394789 }, { x: "6/4/25", y: 1230975 }, { x: "6/18/25", y: 1041609 }, { x: "7/2/25", y: 997039 }, { x: "7/16/25", y: 957721 }, { x: "7/30/25", y: 812380 }, { x: "2025년 8월 13일", y: 865993 }, { x: "2025년 8월 27일", y: 1257338 }, { x: "2025년 9월 10일", y: 1381161 }, { x: "2025년 9월 24일", y: 1190848 }, { x: "2025년 10월 8일", y: 1058594 }, { x: "2025년 10월 22일", y: 926214 }, { x: "2025년 11월 5일", y: 820899 }, { x: "2025년 11월 19일", y: 893196 }, { x: "2025년 12월 3일", y: 927667 }, { x: "2025년 12월 17일", y: 857681 }, { x: "2025년 12월 31일", y: 831721 }, { x: "2026년 1월 14일", y: 841397 }, { x: "2026년 1월 28일", y: 914832 }, { x: "2026년 2월 11일", y: 2110587 }, { x: "2026년 2월 25일", y: 3209569 }, { x: "2026년 3월 11일", y: 3647896 }, { x: "2026년 3월 25일", y: 3723676 }, { x: "2026년 4월 8일", y: 3793821 }, { x: "2026년 4월 22일", y: 3819436 }, { x: "2026년 5월 6일", y: 3786215 }, { x: "26년 5월 20일", y: 3686434 }, { x: "26년 6월 3일", y: 3691572 }, { x: "26년 6월 17일", y: 3687714 }, { x: "26년 7월 1일", y: 3537890 }, { x: "26년 7월 15일", y: 3346487 }, { x: "26년 7월 29일", y: 3232246 }, { x: "26년 8월 12일", y: 3234105 }, { x: "26년 8월 26일", y: 3980695 }, { x: "26년 8월 31일", y: 4137130 }, { x: "2026/10/1", y: 3971878 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "2/26/25", y: 16158 }, { x: "3/12/25", y: 59917 }, { x: "3/26/25", y: 84666 }, { x: "4/9/25", y: 109584 }, { x: "4/23/25", y: 125179 }, { x: "5/7/25", y: 141541 }, { x: "5/21/25", y: 154121 }, { x: "6/4/25", y: 165037 }, { x: "6/18/25", y: 176263 }, { x: "7/2/25", y: 185506 }, { x: "7/16/25", y: 194902 }, { x: "7/30/25", y: 204291 }, { x: "2025년 8월 13일", y: 219269 }, { x: "2025년 8월 27일", y: 233343 }, { x: "2025년 9월 10일", y: 243369 }, { x: "2025년 9월 24일", y: 254488 }, { x: "2025년 10월 8일", y: 264792 }, { x: "2025년 10월 22일", y: 274744 }, { x: "2025년 11월 5일", y: 284526 }, { x: "2025년 11월 19일", y: 295210 }, { x: "2025년 12월 3일", y: 307750 }, { x: "2025년 12월 17일", y: 322149 }, { x: "2025년 12월 31일", y: 335502 }, { x: "2026년 1월 14일", y: 350353 }, { x: "2026년 1월 28일", y: 375502 }, { x: "2026년 2월 11일", y: 414802 }, { x: "2026년 2월 25일", y: 452981 }, { x: "2026년 3월 11일", y: 494508 }, { x: "2026년 3월 25일", y: 538285 }, { x: "2026년 4월 8일", y: 582755 }, { x: "2026년 4월 22일", y: 624096 }, { x: "2026년 5월 6일", y: 664489 }, { x: "26년 5월 20일", y: 700695 }, { x: "26년 6월 3일", y: 736458 }, { x: "26년 6월 17일", y: 771708 }, { x: "26년 7월 1일", y: 805011 }, { x: "26년 7월 15일", y: 839117 }, { x: "26년 7월 29일", y: 876272 }, { x: "26년 8월 12일", y: 918742 }, { x: "26년 8월 26일", y: 976747 }, { x: "26년 8월 31일", y: 993822 }, { x: "2026/10/1", y: 1094240 },
              ],
            },
          ],
          markers: [
            { x: "3/26/25", label: "DEBUT" },
            { x: "2026년 1월 28일", label: "404" },
            { x: "26년 8월 12일", label: "POP OFF" },
          ],
          tall: true,
          source: "Chartmetric weekly readings through Aug 31 2026; Spotify, Oct 1 2026",
        },
      ],
      footnote: "Data refreshed October 1, 2026 unless dated otherwise. Sources: Chartmetric, Spotify, Spotify weekly and daily South Korea chart archives, and platform data.",
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
      intro: "Everything below comes from live consumption data refreshed October 1, 2026: Spotify and Chartmetric for audience metrics, the Spotify South Korea chart archives for stream-level detail. The comparison set is the girl-group class KiiiKiii is measured against commercially.",
      subBlocks: [
        {
          label: "A",
          title: "노래의 지속력이 카테고리 평균보다 우수함",
          objective: "KiiiKiii의 히트곡은 다른 그룹들과 달리 발매 첫 주 이후에도 성장하며 지속됩니다.",
          strategy: "Most K-pop singles peak in week one and decline from there. \"404 (New Era)\" ran at 4.8 times its launch week by week four, was still at 1.8 times launch at week 24, and in week 35 is still pulling 232K streams a week in Korea, having passed ten million there. Against the same chart source, the class's biggest recent hits retained between 16 and 63 percent of launch week at that age. \"Pop Off Pop Off\" is following the same shape: No. 1 on Spotify Korea by day nine, a No. 3 weekly peak, and still in the weekly top 20 seven weeks in with 302K streams that week. This is the single most valuable thing about the catalog, because it means audience acquired for a KiiiKiii song does not evaporate the following month.",
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
                    { x: "W1", y: 1.0 }, { x: "W4", y: 4.83 }, { x: "W8", y: 3.01 }, { x: "W12", y: 2.13 }, { x: "W16", y: 1.79 }, { x: "W20", y: 2.25 }, { x: "W24", y: 1.84 }, { x: "W35", y: 1.73 },
                  ],
                },
                {
                  name: "비교 대상 A",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 1.21 }, { x: "W8", y: 0.85 }, { x: "W12", y: 0.75 }, { x: "W16", y: 0.71 }, { x: "W20", y: 0.65 }, { x: "W24", y: 0.63 }, { x: "W35", y: null },
                  ],
                },
                {
                  name: "비교 대상 B",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.75 }, { x: "W8", y: 0.56 }, { x: "W12", y: 0.53 }, { x: "W16", y: 0.41 }, { x: "W20", y: 0.35 }, { x: "W24", y: null }, { x: "W35", y: null },
                  ],
                },
                {
                  name: "비교 대상 C",
                  points: [
                    { x: "W1", y: 1.0 }, { x: "W4", y: 0.68 }, { x: "W8", y: 0.38 }, { x: "W12", y: 0.34 }, { x: "W16", y: 0.23 }, { x: "W20", y: 0.2 }, { x: "W24", y: 0.16 }, { x: "W35", y: null },
                  ],
                },
              ],
              note: "비교 대상은 같은 기간 동안 가장 높은 인지도를 가진 세 개의 걸그룹 싱글이며, 예의상 이름은 생략합니다. 두 곡은 24주차 이전에 차트에서 이탈했습니다.",
              source: "Spotify weekly South Korea chart archives, pulled Oct 1 2026",
              tall: true,
            },
            {
              kind: "bars",
              title: "404 (New Era): 한국 주간 스트림, 35주차",
              subtitle: "발매 첫 주 13만 4천. 4주차 최고 64만 7천. 8개월이 지난 35주차에도 23만 2천으로, 발매 첫 주보다 훨씬 높은 수치를 기록하고 있습니다.",
              unit: "K",
              series: [
                {
                  name: "주간 스트림 (K)",
                  points: [
                    { x: "W1", y: 134 }, { x: "W4", y: 647 }, { x: "W8", y: 404 }, { x: "W12", y: 286 }, { x: "W16", y: 240 }, { x: "W20", y: 301 }, { x: "W24", y: 246 }, { x: "W28", y: 245 }, { x: "W31", y: 227 }, { x: "W35", y: 232 },
                  ],
                },
              ],
              source: "Spotify weekly South Korea chart archive, Jan to Sep 2026",
            },
          ],
        },
        {
          label: "B",
          title: "109만 팔로워, 400만 리스너",
          objective: "청취와 팬 활동 사이의 격차는 가장 큰 잠재적 성장 기회이며, 이미 좁혀지기 시작했습니다.",
          strategy: "KiiiKiii's Spotify follower-to-listener ratio is 0.275, up from 0.239 a month ago, because followers grew 9 percent while listeners eased off the September peak. That movement is the good news: the conversion is happening on its own. The headroom is the bigger news: roughly 2.9 million people listened to KiiiKiii this month without yet taking the one free action that puts every future release in front of them automatically, and every group in the comparison set converts at a higher rate. A follower is the cheapest, most durable growth available to the group, and it is the first metric the U.S. workstream is measured against.",
          charts: [
            {
              kind: "hbars",
              title: "월간 리스너당 팔로워 수",
              subtitle: "수치가 높을수록 더 깊이 몰입된 팬층을 의미합니다. 성숙한 팬덤을 가진 아티스트들은 1.0 이상입니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "KiiiKiii", y: 0.275 },
                    { x: "Hearts2Hearts", y: 0.352 },
                    { x: "KATSEYE", y: 0.396 },
                    { x: "ILLIT", y: 0.41 },
                    { x: "MEOVV", y: 0.421 },
                    { x: "izna", y: 0.459 },
                    { x: "LE SSERAFIM", y: 0.585 },
                    { x: "NewJeans", y: 1.002 },
                    { x: "aespa", y: 1.091 },
                    { x: "BABYMONSTER", y: 1.241 },
                    { x: "IVE", y: 1.34 },
                  ],
                },
              ],
              highlightX: ["KiiiKiii"],
              note: "ILLIT의 0.41 비율을 적용하면, KiiiKiii의 현재 리스너 기반은 약 163만 명의 팔로워를 보유할 수 있으며, 이는 현재보다 약 54만 명 더 많은 수치입니다.",
              source: "Spotify, Oct 1 2026",
            },
          ],
        },
        {
          label: "C",
          title: "미국은 최상위 시장이며, 자체적으로 성장했습니다",
          objective: "가장 큰 잠재 고객층은 미국에 있으며, 지금까지의 성장은 거의 전적으로 유기적으로 이루어졌습니다. 이는 앞으로 추가될 모든 요소가 추가적인 이익이 될 것임을 의미합니다.",
          strategy: "미국은 KiiiKiii의 제1 청취 시장으로, 한국의 거의 두 배에 달하는 규모입니다. 이는 유기적으로 달성되었습니다. 8월 Rose Bowl에서의 강력한 페스티벌 데뷔와 지속적으로 음악을 발굴해주는 편집 지원이 있었습니다. \"Pop Off Pop Off\"는 K-pop 섹션뿐만 아니라 일반 팝 플레이리스트에도 포함되었는데, 이는 얻기 가장 어려운 배치이며 한국 아티스트가 성공적으로 진출할 수 있음을 나타내는 일반적인 신호입니다. 이번 주에는 Stargirl vibes에서 4위를 기록하며 다시 순위에 올랐습니다. 아직 미국 유료 홍보, 미국 팬 확보, 미국 리테일 모멘텀이 추가되지 않았으므로, 이 시장은 이미 수요를 입증했으며 모든 주요 성장 동력이 여전히 활용 가능합니다.",
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
              source: "Chartmetric 시장 분석, 2026년 9월 3일 (최신 자료)",
            },
          ],
        },
      ],
      footnote: "Audience data: Spotify, Oct 1, 2026; market breakdown from Chartmetric, Sep 3, 2026. Stream data: Spotify South Korea weekly and daily chart archives. Comparison set is the 2024 to 2026 girl-group class.",
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
                    { x: "1일차\n2026년 6월", y: 0 },
                    { x: "4주차\n2026년 8월", y: 1338 },
                    { x: "8주차\n2026년 9월", y: 2805 },
                  ],
                },
              ],
              highlightX: ["8주차\n2026년 9월"],
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
      intro: "레이블이 플랫폼을 거치지 않고 미국 잠재 고객에게 직접 연결될 수 있기 때문에, 이것이 존재하면 다른 모든 업무 흐름이 더욱 효율적이 됩니다.",
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
      philosophy: "캠페인 기간 동안 구축되었으며, 차트 진입이 필요한 발매를 위해 준비되었습니다. Billboard 200에서 앨범 1장 판매는 1,000건의 유료 스트리밍과 동일하게 계산됩니다.",
      intro: "실물 앨범은 필요한 주에 즉시 실행할 수 없는 유일한 요소입니다. 다양한 버전, 미국 내 유통 배분, 사전 주문 흐름, 그리고 판매량으로 전환되는 팬 리스트 모두 준비하는 데 수개월이 걸립니다. 따라서 이 업무 흐름은 캠페인 기간 동안 백그라운드에서 진행됩니다. 업무 흐름 1과 3이 미국 잠재 고객을 늘리는 동안, 우리는 실물 앨범 계획을 수립하고 다음 KiiiKiii 발매가 미국 차트에 진입하기 위해 준비, 규모 조정 및 대기 상태로 유지합니다.",
      subBlocks: [
        {
          label: "A",
          title: "앨범 1장 판매의 가치",
          objective: "EP가 실제로 경쟁하는 차트에서 판매와 스트리밍 간의 환산율을 설정하십시오.",
          strategy: "EP는 앨범 등가 유닛을 집계하는 Billboard 200에서 경쟁합니다. Billboard 차트의 데이터 제공업체인 Luminate는 다음과 같은 공식을 발표했습니다. 2026년 첫 차트 주 기준으로 앨범 1장 구매는 1 유닛, 트랙 10회 다운로드는 1 유닛, 프리미엄 스트림 1,000회는 1 유닛, 광고 지원 스트림 2,500회는 1 유닛으로 계산됩니다. 따라서 발매 주에 앨범 10,000장 판매는 1,000만 회의 프리미엄 스트림과 동일한 차트 가중치를 갖습니다. 미국 잠재 고객이 실존하지만 아직 어린 아티스트에게는 이것이 차트 진입을 위한 가장 효율적인 경로이며, 섹션 C의 모든 K-pop 아티스트가 택한 경로입니다.",
          charts: [
            {
              kind: "bars",
              title: "10,000건의 팬 활동으로 생산된 Billboard 200 유닛",
              subtitle: "Luminate가 발표한 2026년 앨범 등가 비율에 따른 앨범 차트에서 동일한 수의 팬 활동이 갖는 가치.",
              series: [
                {
                  name: "앨범 유닛",
                  points: [
                    { x: "10,000\n앨범 구매", y: 10000 },
                    { x: "10,000\n트랙 다운로드", y: 1000 },
                    { x: "10,000 프리미엄\n스트리밍", y: 10 },
                    { x: "10,000 광고 지원\n스트리밍", y: 4 },
                  ],
                },
              ],
              highlightX: ["10,000\n앨범 구매"],
              note: "앨범 1장 판매는 1 유닛과 같습니다. 동일한 유닛을 생산하려면 프리미엄 스트림 1,000회 또는 광고 지원 스트림 2,500회가 필요합니다. 프로그래밍된 스트림은 앨범 차트에 전혀 포함되지 않습니다.",
              source: "Luminate, 발표된 앨범 등가 가중치, 2026년 1주차부터 적용",
            },
          ],
        },
        {
          label: "B",
          title: "2026년 차트 진입을 위한 요건",
          objective: "올해 K-pop 발매가 실제로 필요했던 것을 바탕으로 현실적인 목표를 설정하십시오.",
          strategy: "Billboard는 마감일을 발표하지 않으므로, 아래 목표는 올해 보고된 결과를 바탕으로 산출되었습니다. 적당한 U.S. 스트리밍을 동반한 K-pop 발매의 경우, 약 8,000~12,000건의 주로 실물 U.S. 판매량으로 Billboard 200 진입이 가능했습니다. 26,000건의 판매량은 K-pop 아티스트를 No. 16으로 이끌었습니다. 2026년 상위 10위권은 33,000~41,000 유닛이 소요되었으며, 상위 10위권에 진입한 K-pop 아티스트들은 약 34,000건의 순수 판매량으로 이를 달성했습니다. 판매량만 집계하는 Top Album Sales 차트에서는 약 8,000장의 판매량으로 상위 10위권에 진입할 수 있었습니다. 계획 수립에 중요한 한 가지 세부 사항은, 올해 여러 K-pop 발매작이 Top Album Sales 상위 10위권에 들었음에도 불구하고 Billboard 200에는 진입하지 못했다는 점입니다. 이는 판매량이 충분한 유닛을 뒷받침하지 못했기 때문입니다. 이것이 바로 자체 리스트와 U.S. 스트리밍 기반을 먼저 구축하는 이유입니다. KiiiKiii는 아직 U.S. Billboard 차트에 등장한 적이 없으므로, 첫 Billboard 200 진입은 다음 발매를 위한 명확하고 달성 가능한 헤드라인이 될 것입니다.",
          charts: [
            {
              kind: "hbars",
              title: "2026년 U.S. 첫 주 판매량 및 Billboard 200 순위",
              subtitle: "K-pop 발매 첫 주 순수 앨범 판매량 및 각 발매의 Billboard 200 순위",
              series: [
                {
                  name: "순수 U.S. 판매량",
                  points: [
                    { x: "ENHYPEN No. 1", y: 92000 },
                    { x: "BLACKPINK No. 8", y: 41000 },
                    { x: "aespa No. 9", y: 34500 },
                    { x: "LE SSERAFIM No. 10", y: 34000 },
                    { x: "BOYNEXTDOOR No. 16", y: 26000 },
                    { x: "PLAVE No. 145", y: 12000 },
                    { x: "ILLIT No. 171", y: 8000 },
                  ],
                },
              ],
              highlightX: ["PLAVE No. 145", "ILLIT No. 171"],
              note: "진입 범위 강조. ILLIT의 수치는 이전 비율에 따른 2025년 7월 기준입니다. KATSEYE (145,000) 및 BTS (532,000)는 규모 비교를 위해 이 차트에서 제외되었습니다.",
              source: "Luminate 데이터 기반 Billboard 차트 보고, 2025년 7월 ~ 2026년 9월",
            },
            {
              kind: "bars",
              title: "다음 KiiiKiii 발매를 위한 제안 목표",
              subtitle: "결과별 U.S. 첫 주 유닛. 첫 번째 목표는 Billboard 200 데뷔입니다.",
              series: [
                {
                  name: "U.S. 유닛",
                  points: [
                    { x: "Top Album Sales 상위 10", y: 8000 },
                    { x: "Billboard 200 진입", y: 12000 },
                    { x: "Billboard 200 상위 20", y: 26000 },
                    { x: "Billboard 200 상위 10", y: 35000 },
                  ],
                },
              ],
              highlightX: ["Billboard 200 진입"],
              note: "상기 2026년 결과에 따른 계획 범위입니다. 차트 집계 주마다 필드가 다르므로 릴리스 날짜가 확정된 후에 최종 목표가 설정됩니다.",
              source: "Crowd Control Digital의 2026년 Billboard 결과 분석",
            },
          ],
        },
        {
          label: "C",
          title: "K-Pop에 특히 효과적인 이유",
          objective: "미국 차트에 진입하는 동료 아티스트들은 판매량을 통해 이를 달성하고 있으며, K-Pop 덕분에 미국 음반 시장이 성장하고 있습니다.",
          strategy: "올해 K-Pop의 미국 차트 성공은 판매량에 의해 주도되었습니다. ENHYPEN은 9월에 98,000 유닛(순수 판매량 92,000)으로 Billboard 200 차트 1위를 기록했습니다. KATSEYE는 8월에 170,000 유닛(판매량 145,000)으로 1위를 기록했으며, 이는 30가지가 넘는 CD 및 바이닐 변형 상품에 걸쳐 분산되었습니다. LE SSERAFIM과 aespa는 각각 약 34,000장의 판매량으로 6월에 상위 10위권에 진입했습니다. 이들 릴리스에서 차트 유닛의 약 5개 중 4개는 앨범을 구매한 팬들로부터 나왔습니다. 시장은 같은 방향으로 움직이고 있습니다: 2026년 상반기 미국 CD 판매량은 16% 성장했으며, Luminate의 중간 보고서에 따르면 K-Pop이 없었다면 성장률은 6.7%였을 것입니다. 첫 번째 미국 전용 KiiiKiii 릴리스는 이러한 종류의 팬을 중심으로 적극적으로 성장하고 있는 시장에 진입하게 될 것입니다.",
          charts: [
            {
              kind: "grouped",
              title: "K-Pop 아티스트의 Billboard 200 차트 진입 방식",
              subtitle: "2026년 첫 주 미국 앨범 등가 유닛 대 순수 앨범 판매량.",
              series: [
                {
                  name: "총 유닛",
                  points: [
                    { x: "KATSEYE\n1위", y: 170000 },
                    { x: "ENHYPEN\nNo. 1", y: 98000 },
                    { x: "BLACKPINK\n8위", y: 52000 },
                    { x: "aespa\nNo. 9", y: 41000 },
                    { x: "LE SSERAFIM\nNo. 10", y: 41000 },
                  ],
                },
                {
                  name: "순수 판매량",
                  points: [
                    { x: "KATSEYE\n1위", y: 145000 },
                    { x: "ENHYPEN\nNo. 1", y: 92000 },
                    { x: "BLACKPINK\n8위", y: 41000 },
                    { x: "aespa\nNo. 9", y: 34500 },
                    { x: "LE SSERAFIM\nNo. 10", y: 34000 },
                  ],
                },
              ],
              note: "표시된 모든 아티스트의 경우 순수 판매량이 차트 유닛의 79%에서 94%를 차지합니다.",
              source: "Billboard 차트, Luminate 데이터 기반 보고 (2026년 3월-9월)",
            },
          ],
        },
        {
          label: "D",
          title: "캠페인 기간 중 준비 완료, 릴리스 준비 완료",
          objective: "릴리스 날짜 발표 전에 전체 실물 앨범 계획을 수립하고 대기열에 올려놓으십시오.",
          strategy: "캠페인 기간 동안 리드 타임이 필요한 실물 앨범 계획의 모든 요소를 구축하여, Starship이 차트 진입이 필요한 다음 릴리스를 확정했을 때 계획이 시작 준비가 아닌 실행 준비 상태가 되도록 합니다. 이는 보유 팬 목록과 미국 스트리밍 기반에서 목표 규모를 설정하고, 변형 상품 조합 및 미국 전용 버전을 추천하며, 미국 K-Pop 리테일 할당 및 리테일 또는 팝업 이벤트를 조율하고, 팬 목록에 먼저 공개되도록 사전 주문 흐름을 구축하는 것을 의미합니다. 날짜가 확정되면 모든 것이 하나의 집계 주에 집중됩니다. 여러 주에 걸쳐 분산된 판매량은 한 주에 동일한 판매량보다 차트 순위에 훨씬 적은 영향을 미치기 때문입니다.",
          components: {
            heading: "릴리스 날짜 이전에 준비되는 사항",
            items: [
              "보유 미국 팬 목록 및 스트리밍 기반에서 산출된 유닛 목표",
              "레이블 제품 팀을 위한 변형 상품 및 미국 전용 버전 추천",
              "미국 K-Pop 리테일 할당 및 리테일 또는 팝업 이벤트 (범위 및 비용 산정 완료)",
              "팬 목록에 먼저 공개되어 수요를 조기에 파악하는 사전 주문 흐름",
              "단 한 주에 유료 광고, 콘텐츠 및 팬 활동을 집중시키는 카운팅 위크 플랜",
            ],
          },
          kpis: [
            "첫 90일 이내에 완료되는 릴리스 준비 플랜",
            "공개 판매 전 확정된 선주문 유닛",
            "합의된 목표 대비 카운팅 위크 내 총 미국 유닛 판매량",
          ],
        },
      ],
      footnote: "비율: 2026년 1주차부터 적용되는 Luminate 발표 앨범 등가 가중치. Hot 100은 자체 공식이 있는 별도의 곡 차트이며, 앨범 구매는 이에 포함되지 않습니다. 본 워크스트림은 EP가 경쟁하는 Billboard 200 및 Top Album Sales를 목표로 합니다. 동종 업계 수치: Luminate 데이터를 기반으로 한 Billboard 차트 보고. 제품 결정, 제조 및 출시 시기는 Starship이 담당하며, Crowd Control Digital은 이를 중심으로 미국 마케팅을 계획하고 실행합니다.",
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
          strategy: "기존 카탈로그는 이미 전환율이 높은 콘텐츠를 증명했습니다. \"404 (New Era)\"는 출시 8개월이 지난 지금도 스트리밍을 견인하고 있으며, 현재 싱글은 자체적인 추진력으로 한국에서 1위를 달성했습니다. 유료 광고 지원은 이러한 검증된 트랙을 중심으로 미국 우선으로 진행되며, 팔로워 및 구독자 증가에서 팬 데이터 확보로 이어지고, 비디오 시청자 및 프로필 방문자로부터 리타겟팅 풀을 구축합니다. 광고 소재는 맞춤 제작 광고 빌드가 아닌, 이미 유기적으로 성과를 내고 있는 콘텐츠를 중심으로 매주 교체되며, 이는 참조 캠페인에서 클릭당 비용을 72% 절감한 접근 방식입니다.",
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
          strategy: "KiiiKiii 자체 데이터는 어떤 포맷이 효과적인지를 이미 보여줍니다. KiiiKiii 및 경쟁사 영상 113개를 각각 실제 성과 데이터와 함께 분석한 결과, 멤버 중심 게시물, 소품 및 개그 포맷, 무대 영상이 계정 평균을 꾸준히 상회했으며, 동일한 게시물이 인스타그램에서 틱톡보다 몇 배 더 높은 성과를 내는 경우가 많았습니다. 이는 시작하기에 유리한 위치입니다. 이미 성공적인 포맷이 제작되고 있으므로, 새로운 콘텐츠 전략을 개발하는 것이 아니라 이를 더 많이 제작하고 미디어를 지원하는 것이 과제입니다. 주요 콘텐츠에 짧은 출시일 엔드 카드를 삽입하면 해당 도달 범위를 팔로워 및 사전 저장으로 전환할 수 있습니다.",
          components: {
            heading: "미디어 집행 방안",
            items: [
              "멤버 중심 게시물: 계정 중간값의 약 두 배에 달하므로, 볼륨과 지출을 늘릴 첫 번째 대상입니다.",
              "소품, 개그 및 무대 포맷: 검증된 고성과 콘텐츠로, 확장이 가능합니다.",
              "인스타그램을 선도 플랫폼으로 활용: 동일한 게시물이 틱톡 조회수의 최대 5배를 기록했습니다.",
              "주요 콘텐츠에 출시일 엔드 카드 삽입: 강력한 도달 범위를 통해 팬들이 팔로우, 사전 저장 및 사전 주문하도록 유도합니다.",
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
                    { x: "게스트 챌린지 게시물", y: 246 },
                    { x: "계정\n평균", y: 590 },
                    { x: "소품 및 개그\n게시물", y: 939 },
                    { x: "멤버 중심\n게시물", y: 1220 },
                  ],
                },
              ],
              highlightX: ["멤버 중심\n게시물"],
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
                    { x: "측정 불가\n효과 없음 250K", y: 250000 },
                    { x: "최소 실행\n~1,250만", y: 12500000 },
                    { x: "시작 예산\n2,500만", y: 25000000 },
                  ],
                },
              ],
              highlightX: ["시작 예산\n2,500만"],
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
          description: "스트리밍 증가량에 대한 수치는 정직하게 예측할 수 없으므로 제시하지 않습니다. 스트리밍은 주간 단위로 보고하며, 위에서 언급한 전술을 통해 적극적으로 관리합니다. 저희가 약속드리는 것은 측정 가능하고 귀속 가능한 팔로워, 잠재고객 성장, 팬 데이터 및 유닛 판매량입니다.",
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
      footnote: "본 문서의 모든 권장 사항은 2026년 10월 1일에 업데이트된 소비 데이터, 발표된 Luminate 방법론 또는 동일한 워크스트림에서 실행된 라이브 캠페인 결과에 근거합니다.",
    },

    // ===================================================================
    // 08. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "첫 90일",
      title: "첫 90일",
      intro: "테스트 우선 리듬을 따릅니다. 팬 데이터 확보는 첫 주부터 시작되며, 다른 모든 활동이 이를 지원합니다. 유료 광고는 소규모로 시작하여 증거에 기반하여 확장됩니다. 실물 앨범 플랜은 해당 기간 동안 병렬적으로 구축되어, 다음 출시일이 정해지는 즉시 실행될 준비가 됩니다. 4주차의 첫 번째 체크포인트는 상태 업데이트가 아닌, 실제 확장 또는 중단 여부를 결정하는 시점입니다.",
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
            { weekIndex: 3, intensity: "low", label: "SIZE" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "RETAIL" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", label: "PREORD" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high", label: "READY" },
            { weekIndex: 12, intensity: "high" },
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
            "실물 앨범: 리스트 성장 및 스트리밍 데이터의 첫 4주를 기반으로 미국 유닛 판매 목표를 설정합니다.",
          ],
        },
        {
          weekIndex: 8,
          title: "점검: 중간 검토",
          items: [
            "90일 목표 대비 리스트 규모, 팔로워 증가, 오디언스 증가 측정.",
            "실물 앨범: 소매 유통 할당 범위를 설정하고 자체 리스트를 기반으로 사전 주문 흐름을 구축합니다.",
            "현재 오가닉 콘텐츠 히트작 기반으로 크리에이티브 업데이트.",
          ],
        },
        {
          weekIndex: 12,
          title: "검토 및 다음 주기",
          items: [
            "모든 약정 지표에 대한 전체 보고, 기여도 명확히 명시.",
            "레이블이 소유한, 풍부하고 내보내기 가능한 팬 리스트가 전달되었습니다.",
            "릴리스 준비 완료된 실물 앨범 플랜: 유닛 목표, 다양한 버전 및 미국 독점 추천, 소매 유통 계획, 사전 주문 흐름, 카운팅 위크 플랜.",
            "이번 기간 동안 실제로 증명된 것을 바탕으로 규모가 조정된 다음 릴리스 주기에 대한 권장 사항입니다.",
          ],
        },
      ],
      footnote: "실물 앨범 플랜은 Starship이 이 기간 내 또는 이후에 다음 출시일을 설정할 때 실행됩니다. 체크포인트는 채널을 중단할 권한이 있는 실제 의사 결정 지점입니다.",
    },

    // ===================================================================
    // 09. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "09",
      navLabel: "투자",
      title: "투자",
      intro: "전략, 실행 및 보고를 위한 월간 리테이너가 세 가지 워크스트림 전반에 걸쳐 적용되며, 워킹 미디어는 별도로 실비에 관리비를 더하여 청구됩니다. 첫 90일은 테스트 기간으로, 미디어 집행은 의도적으로 소규모로 시작하며, 4주차 및 8주차 점검 시점에서 규모 확대를 결정합니다. Starship은 워킹 미디어에 대한 모든 지출을 약정 전에 승인합니다.",
      breakdownLabel: "상업 구조",
      deployableLabel: "기간",
      tiers: [
        {
          label: "리테이너",
          budget: "$5,000 / month",
          name: "3개 워크스트림 미국 리테이너",
          tagline: "전략, 캠페인 실행, 팬 데이터 구축, 실물 기획, 크리에이티브 디렉션, 주간 보고, 그리고 Starship 및 Transparent Arts와의 주간 통화.",
          featured: true,
          deployable: "90일 초기 기간, 이후 월별 계약",
          breakdown: [
            { vertical: "월간 리테이너", amount: "$5,000" },
            { vertical: "초기 기간", amount: "90일 / $15,000" },
            { vertical: "워킹 미디어 및 크리에이터", amount: "Starship 승인" },
            { vertical: "워킹 미디어 관리", amount: "지출의 15%" },
            { vertical: "실물 제품 및 제조", amount: "레이블 측" },
          ],
        },
        {
          label: "90일 예시",
          budget: "$84,000",
          name: "권장 시작 예산",
          tagline: "첫 기간 자금 조달 방법 중 하나입니다. 미디어 라인은 각 점검 시점에서 효과적인 부분으로 이동하는 시작점입니다.",
          deployable: "$60,000 working media in market",
          breakdown: [
            { vertical: "리테이너, 3개월", amount: "$15,000" },
            { vertical: "미국 유료 소셜 (팔로워, 오디언스, 리타겟팅)", amount: "$25,000" },
            { vertical: "클리핑 및 크리에이터 시딩", amount: "$25,000" },
            { vertical: "팬 데이터 확보", amount: "$10,000" },
            { vertical: "매니지먼트, $60,000의 15%", amount: "$9,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "가벼운 시작",
          subtitle: "동일한 구조, 더 작은 풀",
          budget: "$43,750",
          description: "90일간의 리테이너($15,000)와 미국 유료 및 팬 데이터 확보에 분배될 워킹 미디어 $25,000, 그리고 매니지먼트 $3,750. 초기 분석 결과가 뒷받침할 경우 첫 번째 체크포인트에서 클리핑이 추가됩니다.",
        },
        {
          name: "발매 주간 실물 앨범 푸시",
          subtitle: "다음 발매일이 확정되면",
          budget: "범위가 정해진",
          description: "유료, 크리에이터 및 팬 리스트 활동은 집계 주간에 집중되며, 발매 준비 계획의 유닛 목표에 맞춰 예산이 책정됩니다. 워킹 미디어 비용에 15%를 가산하여 청구됩니다.",
        },
      ],
      footnote: "워킹 미디어는 계약 전에 Starship의 승인을 받아야 하며, 원가에 15%를 가산하여 청구됩니다. 실물 앨범의 제품, 제조 및 유통 비용은 레이블에서 부담합니다. 계약 기간 및 통지 세부 사항은 작업 명세서에 명시됩니다.",
    },
  ],
};
