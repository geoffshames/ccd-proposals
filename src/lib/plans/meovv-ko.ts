import type { StrategyPlanData } from "../plan-context";

export const meovvPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/meovv/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "meovv", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "MEOVV",
    subtitle: "이미 형성된 팬덤에 대한 감사와, 아직 그 주변에 구축되지 않은 비즈니스에 대한 감사입니다.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/meovv/meovv-group.jpg",
  },

  approveCta: {
    label: "승인",
    sentLabel: "전송되었습니다. 저희 팀에서 연락드리겠습니다.",
    caption: "승인 알림 CROWD CONTROL DIGITAL",
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
      subtitle: "출시 2년차인 MEOVV는 구축하기 가장 어렵고 수익화하기 가장 쉬운 것을 구축했습니다. 아직 수익화할 장소는 구축하지 못했습니다.",
      body: [
        "MEOVV converts attention into commitment better than any act of comparable scale in its debut class. The Spotify follower-to-listener ratio, the cleanest available measure of how much of a passing audience actually signs up, sits at 0.408 against 4.95M monthly listeners. KiiiKiii runs 0.239 at a similar listener count. Hearts2Hearts runs 0.313 at 60% more listeners. KATSEYE, at nearly eight times the scale, runs 0.337. Two smaller acts in the set do convert faster, ALLDAY PROJECT at 0.468 and izna at 0.423, at 39% and 31% of MEOVV's listener scale. The ratio has climbed almost every month since debut, from 0.066 in September 2024, and across 720 daily transitions the follower count has not fallen once.",
        "팬들의 참여는 실질적이며 팬들이 지출할 수 있는 모든 곳에 가격이 책정되어 있습니다. 응원봉은 매진되었습니다. 유료 멤버십도 매진되었습니다. 첫 주 음반 판매량은 두 개의 EP 사이에서 255,005장에서 301,725장으로 증가하여 그룹 신기록을 세웠습니다. 존재하지 않는 것은 이러한 모든 것을 반복 가능한 비즈니스로 전환시키는 표면입니다. 727일 동안 콘서트나 팬 미팅이 없었고, 티켓팅 가능한 헤드라인 쇼도 없었으며, 2년이 지났음에도 공식 웹사이트는 여전히 임시 페이지 상태이고, 자체 플랫폼에서 연결되지 않는 미국 스토어가 있으며, 존재하는 유일한 이메일 수집 기능은 아티스트의 동의가 아닌 유통사의 동의로 운영됩니다. 본 감사는 이러한 각 격차를 정확하게 측정하고, 이를 해소할 수 있는 수집 계층을 처방합니다.",
      ],
      supports: {
        heading: "본 문서의 범위",
        items: [
          "2024-2026년 걸그룹 시장 내 포지션 (라이브 소비 및 전환 데이터 기반 계층화)",
          "소비 분석: 카탈로그 집중도, 론칭 행동, 축소되는 릴리스 후광 효과, 그리고 스트림의 실제 출처",
          "콘텐츠 인텔리전스: 자체 게시물 362개 및 경쟁사 게시물 566개 분류 및 성과 대비 분석",
          "인프라 감사: 팬에게 직접 도달할 수 있는 능력에 대해 모든 자체 플랫폼을 하나씩 점검",
          "수집 전략: 네 가지 실행 영역, 파트너 주도 워크스트림, 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "청취가 이미 이루어지고 있는 시장에서의 첫 티켓 판매 MEOVV 헤드라이너 쇼 및 첫 팬 콘서트 개최",
          "A first-party audience list the artist controls, sized against the 2.02M Spotify followers who have already opted in once",
          "팬덤 전환율: 0.408에서 0.60 이상으로 향상 (해당 클래스의 기성 아티스트들이 차지하는 비율)",
          "Spotify monthly listeners from 4.95M to 8M+ during active cycles, with the release halo restored above 1.5x",
          "숏폼: 재조정된 믹스와 일일 리듬에 맞춰 게시물당 평균 도달 범위를 63만 3천 건에서 150만 건으로 향상",
          "실물 앨범: 다음 사이클에서 첫 주 판매량 35만 장 이상 달성, 자체 채널에서 연계된 미국 소매 유통망 확보",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "24 Months of Spotify Consumption",
          subtitle: "데뷔 이후 주간 월간 리스너 및 팔로워 수치 기록. 리스너는 릴리즈에 따라 변동하나, 팔로워는 720일간의 일일 전환율 동안 감소하지 않음.",
          series: [
            {
              name: "월간 리스너",
              points: [
                { x: "24년 9월 9일", y: 217960 }, { x: "24년 9월 16일", y: 703629 }, { x: "24년 9월 23일", y: 1246800 }, { x: "24년 9월 30일", y: 1788362 }, { x: "24년 10월 7일", y: 2152165 }, { x: "24년 10월 14일", y: 2381651 }, { x: "24년 10월 21일", y: 2556147 }, { x: "24년 10월 28일", y: 2689598 }, { x: "24년 11월 4일", y: 2785452 }, { x: "24년 11월 11일", y: 2799307 }, { x: "24년 11월 18일", y: 2733450 }, { x: "24년 11월 25일", y: 2853628 }, { x: "24년 12월 2일", y: 3213184 }, { x: "24년 12월 9일", y: 3502815 }, { x: "24년 12월 16일", y: 3718219 }, { x: "24년 12월 23일", y: 3752618 }, { x: "24년 12월 30일", y: 3492139 }, { x: "25년 1월 6일", y: 3239925 }, { x: "25년 1월 13일", y: 2970267 }, { x: "25년 1월 20일", y: 2786585 }, { x: "25년 1월 27일", y: 2686839 }, { x: "25년 2월 3일", y: 2616836 }, { x: "25년 2월 10일", y: 2604065 }, { x: "25년 2월 17일", y: 2591788 }, { x: "25년 2월 24일", y: 2527331 }, { x: "25년 3월 3일", y: 2447443 }, { x: "25년 3월 10일", y: 2335767 }, { x: "25년 3월 17일", y: 2188725 }, { x: "25년 3월 24일", y: 2073510 }, { x: "25년 3월 31일", y: 1938500 }, { x: "2025년 4월 7일", y: 1799442 }, { x: "2025년 4월 14일", y: 1732838 }, { x: "2025년 4월 21일", y: 1698155 }, { x: "2025년 4월 28일", y: 1701621 }, { x: "2025년 5월 5일", y: 2108743 }, { x: "2025년 5월 12일", y: 2951543 }, { x: "2025년 5월 19일", y: 3755810 }, { x: "2025년 5월 26일", y: 4453188 }, { x: "2025년 6월 2일", y: 4781282 }, { x: "2025년 6월 9일", y: 4838678 }, { x: "2025년 6월 16일", y: 4644113 }, { x: "2025년 6월 23일", y: 4393306 }, { x: "2025년 6월 30일", y: 4246440 }, { x: "2025년 7월 7일", y: 4265915 }, { x: "2025년 7월 14일", y: 4226303 }, { x: "2025년 7월 21일", y: 4204865 }, { x: "2025년 7월 28일", y: 4101026 }, { x: "2025년 8월 4일", y: 3955719 }, { x: "2025년 8월 11일", y: 3947955 }, { x: "2025년 8월 18일", y: 3862807 }, { x: "25년 8월 25일", y: 3841736 }, { x: "25년 9월 1일", y: 3778893 }, { x: "25년 9월 8일", y: 3651072 }, { x: "25년 9월 15일", y: 3552052 }, { x: "25년 9월 22일", y: 3421607 }, { x: "25년 9월 29일", y: 3287516 }, { x: "25년 10월 6일", y: 3157628 }, { x: "25년 10월 13일", y: 3099075 }, { x: "25년 10월 20일", y: 3354231 }, { x: "25년 10월 27일", y: 3752196 }, { x: "25년 11월 3일", y: 4052434 }, { x: "25년 11월 10일", y: 4238706 }, { x: "25년 11월 17일", y: 4172693 }, { x: "25년 11월 24일", y: 3920454 }, { x: "25년 12월 1일", y: 3708486 }, { x: "25년 12월 8일", y: 3580688 }, { x: "25년 12월 15일", y: 3547125 }, { x: "25년 12월 22일", y: 3484897 }, { x: "25년 12월 29일", y: 3480882 }, { x: "26년 1월 5일", y: 3477998 }, { x: "2026년 1월 12일", y: 3544918 }, { x: "2026년 1월 19일", y: 3558542 }, { x: "2026년 1월 26일", y: 3543818 }, { x: "2026년 2월 2일", y: 3478561 }, { x: "2026년 2월 9일", y: 3358846 }, { x: "2026년 2월 16일", y: 3268647 }, { x: "2026년 2월 23일", y: 3161923 }, { x: "2026년 3월 2일", y: 3142815 }, { x: "2026년 3월 9일", y: 3132952 }, { x: "2026년 3월 16일", y: 3063034 }, { x: "2026년 3월 23일", y: 2989645 }, { x: "2026년 3월 30일", y: 2885506 }, { x: "2026년 4월 6일", y: 2780579 }, { x: "2026년 4월 13일", y: 2754423 }, { x: "2026년 4월 20일", y: 2712239 }, { x: "2026년 4월 27일", y: 2699172 }, { x: "2026년 5월 4일", y: 2731190 }, { x: "2026년 5월 11일", y: 2802043 }, { x: "2026년 5월 18일", y: 2911772 }, { x: "2026년 5월 25일", y: 2995123 }, { x: "2026년 6월 1일", y: 3069585 }, { x: "2026년 6월 8일", y: 3431564 }, { x: "2026년 6월 15일", y: 4182476 }, { x: "2026년 6월 22일", y: 4656649 }, { x: "2026년 6월 29일", y: 4992457 }, { x: "2026년 7월 6일", y: 5137923 }, { x: "2026년 7월 13일", y: 5010947 }, { x: "2026년 7월 20일", y: 5024583 }, { x: "2026년 7월 27일", y: 5072081 }, { x: "2026년 8월 3일", y: 5165601 }, { x: "2026년 8월 10일", y: 5079926 }, { x: "2026년 8월 17일", y: 5025037 }, { x: "2026년 8월 24일", y: 5001928 }, { x: "2026년 8월 31일", y: 4950004 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "24년 9월 9일", y: 43583 }, { x: "24년 9월 16일", y: 79114 }, { x: "24년 9월 23일", y: 99757 }, { x: "24년 9월 30일", y: 118605 }, { x: "24년 10월 7일", y: 137976 }, { x: "24년 10월 14일", y: 155863 }, { x: "24년 10월 21일", y: 171639 }, { x: "24년 10월 28일", y: 189642 }, { x: "24년 11월 4일", y: 205610 }, { x: "24년 11월 11일", y: 221268 }, { x: "24년 11월 18일", y: 236447 }, { x: "24년 11월 25일", y: 265961 }, { x: "24년 12월 2일", y: 294413 }, { x: "24년 12월 9일", y: 319521 }, { x: "24년 12월 16일", y: 342590 }, { x: "24년 12월 23일", y: 362055 }, { x: "24년 12월 30일", y: 377528 }, { x: "25년 1월 6일", y: 395121 }, { x: "25년 1월 13일", y: 410394 }, { x: "25년 1월 20일", y: 422660 }, { x: "25년 1월 27일", y: 437383 }, { x: "25년 2월 3일", y: 451049 }, { x: "25년 2월 10일", y: 463407 }, { x: "25년 2월 17일", y: 476326 }, { x: "25년 2월 24일", y: 488515 }, { x: "25년 3월 3일", y: 501008 }, { x: "25년 3월 10일", y: 513340 }, { x: "25년 3월 17일", y: 523928 }, { x: "25년 3월 24일", y: 534585 }, { x: "25년 3월 31일", y: 544298 }, { x: "2025년 4월 7일", y: 553761 }, { x: "2025년 4월 14일", y: 563469 }, { x: "2025년 4월 21일", y: 574064 }, { x: "2025년 4월 28일", y: 584954 }, { x: "2025년 5월 5일", y: 610014 }, { x: "2025년 5월 12일", y: 638119 }, { x: "2025년 5월 19일", y: 666732 }, { x: "2025년 5월 26일", y: 689779 }, { x: "2025년 6월 2일", y: 711276 }, { x: "2025년 6월 9일", y: 733364 }, { x: "2025년 6월 16일", y: 753453 }, { x: "2025년 6월 23일", y: 773323 }, { x: "2025년 6월 30일", y: 791726 }, { x: "2025년 7월 7일", y: 808778 }, { x: "2025년 7월 14일", y: 824768 }, { x: "2025년 7월 21일", y: 844887 }, { x: "2025년 7월 28일", y: 859010 }, { x: "2025년 8월 4일", y: 879914 }, { x: "2025년 8월 11일", y: 898088 }, { x: "2025년 8월 18일", y: 916174 }, { x: "25년 8월 25일", y: 934617 }, { x: "25년 9월 1일", y: 954197 }, { x: "25년 9월 8일", y: 966176 }, { x: "25년 9월 15일", y: 981474 }, { x: "25년 9월 22일", y: 996776 }, { x: "25년 9월 29일", y: 1010428 }, { x: "25년 10월 6일", y: 1024611 }, { x: "25년 10월 13일", y: 1039793 }, { x: "25년 10월 20일", y: 1061486 }, { x: "25년 10월 27일", y: 1080022 }, { x: "25년 11월 3일", y: 1101064 }, { x: "25년 11월 10일", y: 1117317 }, { x: "25년 11월 17일", y: 1134492 }, { x: "25년 11월 24일", y: 1152681 }, { x: "25년 12월 1일", y: 1171144 }, { x: "25년 12월 8일", y: 1199614 }, { x: "25년 12월 15일", y: 1221932 }, { x: "25년 12월 22일", y: 1240862 }, { x: "25년 12월 29일", y: 1264004 }, { x: "26년 1월 5일", y: 1286658 }, { x: "2026년 1월 12일", y: 1307846 }, { x: "2026년 1월 19일", y: 1327744 }, { x: "2026년 1월 26일", y: 1348556 }, { x: "2026년 2월 2일", y: 1365914 }, { x: "2026년 2월 9일", y: 1383645 }, { x: "2026년 2월 16일", y: 1401025 }, { x: "2026년 2월 23일", y: 1418293 }, { x: "2026년 3월 2일", y: 1436776 }, { x: "2026년 3월 9일", y: 1454020 }, { x: "2026년 3월 16일", y: 1470644 }, { x: "2026년 3월 23일", y: 1492383 }, { x: "2026년 3월 30일", y: 1509501 }, { x: "2026년 4월 6일", y: 1527681 }, { x: "2026년 4월 13일", y: 1545054 }, { x: "2026년 4월 20일", y: 1563292 }, { x: "2026년 4월 27일", y: 1580013 }, { x: "2026년 5월 4일", y: 1594893 }, { x: "2026년 5월 11일", y: 1612150 }, { x: "2026년 5월 18일", y: 1630484 }, { x: "2026년 5월 25일", y: 1650307 }, { x: "2026년 6월 1일", y: 1668898 }, { x: "2026년 6월 8일", y: 1695468 }, { x: "2026년 6월 15일", y: 1716862 }, { x: "2026년 6월 22일", y: 1743919 }, { x: "2026년 6월 29일", y: 1767850 }, { x: "2026년 7월 6일", y: 1788916 }, { x: "2026년 7월 13일", y: 1816682 }, { x: "2026년 7월 20일", y: 1844407 }, { x: "2026년 7월 27일", y: 1875007 }, { x: "2026년 8월 3일", y: 1900159 }, { x: "2026년 8월 10일", y: 1926364 }, { x: "2026년 8월 17일", y: 1956112 }, { x: "2026년 8월 24일", y: 1986390 }, { x: "2026년 8월 31일", y: 2018947 },
              ],
            },
          ],
          markers: [
            { x: "24년 9월 9일", label: "MEOW" },
            { x: "2025년 4월 28일", label: "HANDS UP" },
            { x: "25년 10월 13일", label: "BURNING UP" },
            { x: "2026년 6월 1일", label: "BITE NOW" },
          ],
          tall: true,
          source: "Chartmetric, 주간 리딩, 2024년 9월 9일부터 2026년 8월 31일까지",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify daily and weekly chart archives, Hanteo and Circle published tallies, platform data, and a dedicated analysis of 1,129 short-form posts.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 내 위치",
      philosophy: "두 가지 숫자가 아티스트를 규정합니다: 얼마나 많은 사람이 듣는지, 그리고 그중 얼마나 많은 사람이 계속 듣는지입니다. MEOVV는 첫 번째 지표에서는 중간 순위에, 두 번째 지표에서는 해당 클래스에서 최상위권에 속합니다.",
      intro: "The comparison set spans the acts MEOVV is measured against commercially and creatively: the 2024-2026 debut class it competes with directly, the established fourth-generation groups that set the ceiling, and the global-format outlier. Spotify monthly listeners and the follower-to-listener ratio (Chartmetric, September 2026) are the spine. The notes carry what each peer does well and what MEOVV can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "티어 맵",
          featureTiersHeading: "월간 리스너 수 기준 티어별 비교 대상군",
          featureTiers: [
            {
              label: "티어 1 / 글로벌 엔진",
              artists: [
                {
                  name: "KATSEYE",
                  monthlyListeners: "37.7M 월간 리스너",
                  instagram: "비율 0.337",
                  reference: "4.67B career Spotify streams",
                  note: "해당 카테고리의 미국 내 최고치 설정자이며, 한국 시간대가 아닌 미국 시간대에 맞춰 콘텐츠를 게시하는 유일한 경쟁 대상입니다. 이 클래스의 그룹이 미국 주류 아티스트가 될 수 있다는 증거이며, 이를 위해 얼마나 많은 인프라가 필요한지에 대한 증거이기도 합니다.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "21.4M 월간 리스너",
                  instagram: "비율 0.359",
                  reference: "2.97B career Spotify streams",
                  note: "지속적인 릴리즈 행태의 클래스 벤치마크입니다. 그들의 2026년 타이틀곡은 발매 12주 후에도 발매 첫 주 대비 1.04배의 성과를 유지했으며, 이는 MEOVV가 한 번 달성했지만 반복하지 못한 성과입니다.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "20.4M 월간 리스너",
                  instagram: "비율 0.547",
                  reference: "기성 4세대 아티스트",
                  note: "규모와 전환율의 결합입니다. MEOVV가 향후 12개월 동안 목표해야 할 비율 범위이며, 이는 포괄적인 투어링 및 리테일 시스템을 통해 달성될 수 있습니다.",
                },
              ],
            },
            {
              label: "Tier 2 / 경쟁이 치열한 중간층",
              artists: [
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "월간 리스너 7.96M",
                  instagram: "비율 0.313",
                  reference: "699M career Spotify streams",
                  note: "MEOVV 이후 데뷔했으며 총 스트림 수에서 이미 MEOVV를 넘어섰습니다. MEOVV의 33% 대비 96%의 날짜에 게시물을 올립니다. 해당 데이터 세트에서 활동 빈도가 복리 효과를 낸다는 가장 명확한 증거입니다.",
                },
                {
                  name: "BABYMONSTER",
                  monthlyListeners: "월간 리스너 7.69M",
                  instagram: "비율 1.141",
                  reference: "YG 계열, 월드 투어 완료",
                  note: "같은 기업 계열 내에서 가장 유사한 구조적 비교 대상이며, 유사한 팬층을 투어 비즈니스로 전환시킨 사례입니다. 1.0 이상의 비율은 라이브 활동 주기가 팬덤에 미치는 영향을 보여줍니다.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "월간 리스너 5.76M",
                  instagram: "비율 1.332",
                  reference: "아레나 규모 투어 아티스트",
                  note: "MEOVV보다 월간 리스너가 16% 많고 팔로워는 3.8배입니다. 이 모든 차이는 수년간의 유료 공연을 통해 리스너를 충성도 높은 팬층으로 전환시킨 결과입니다.",
                },
                {
                  name: "MEOVV",
                  monthlyListeners: "월간 리스너 4.95M",
                  instagram: "비율 0.408",
                  reference: "480M career Spotify streams",
                  note: "데뷔 클래스에서 2백만 명 이상의 리스너를 보유한 모든 아티스트 중 가장 높은 전환율을 기록했으며, 데뷔 이후 거의 매달 비율이 상승했습니다. 리스너 수는 중간 수준이지만, 그 뒤에 숨겨진 팬들의 헌신도는 그렇지 않습니다.",
                },
                {
                  name: "KISS OF LIFE",
                  monthlyListeners: "월간 리스너 4.39M",
                  instagram: "비율 0.671",
                  reference: "4세대, 투어링",
                  note: "MEOVV와 거의 동일한 리스너 규모에 64% 더 높은 전환율을 보이며, MEOVV는 아직 시작하지 않은 라이브 스케줄과 팬 이벤트 일정에 기반합니다.",
                },
                {
                  name: "KiiiKiii",
                  monthlyListeners: "월간 리스너 4.18M",
                  instagram: "비율 0.239",
                  reference: "225M career Spotify streams",
                  note: "반대의 경우입니다. 카탈로그의 절반 미만으로 유사한 리스너 수를 보유하고 있으며, 팬덤보다는 대중적인 히트에 의해 주도된 세트 내에서 가장 낮은 전환율을 보입니다. MEOVV는 KiiiKiii가 놓치고 있는 것을 가지고 있습니다.",
                },
              ],
            },
            {
              label: "티어 3 / 신인 필드",
              artists: [
                {
                  name: "ALLDAY PROJECT",
                  monthlyListeners: "월간 리스너 1.94M",
                  instagram: "비율 0.468",
                  reference: "2025년 데뷔",
                  note: "0.468의 비율로 세트 내에서 가장 빠르게 전환되는 아티스트이며, MEOVV 리스너 규모의 39% 수준에서 더 짧은 기간 내에 도달했습니다. 해당 기수의 다음 전환 벤치마크로 주목할 가치가 있습니다.",
                },
                {
                  name: "izna",
                  monthlyListeners: "월간 리스너 1.56M",
                  instagram: "비율 0.423",
                  reference: "서바이벌 쇼 출신",
                  note: "서바이벌 쇼 팬덤은 구조적으로 효율적으로 전환됩니다. 리스너 규모가 뒷받침되지 않은 전환 자체의 가치에 대한 하한선으로 유용합니다.",
                },
              ],
            },
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              subtitle: "MEOVV는 경쟁 밴드 중간에 위치하며, KISS OF LIFE, KiiiKiii, NMIXX보다 앞서고 Hearts2Hearts, BABYMONSTER, IVE보다 뒤처져 있습니다.",
              unit: "월간 리스너 수",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "KATSEYE", y: 37714478 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "LE SSERAFIM", y: 20445854 },
                    { x: "NewJeans", y: 13713434 },
                    { x: "aespa", y: 11249284 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "BABYMONSTER", y: 7685700 },
                    { x: "IVE", y: 5758044 },
                    { x: "MEOVV", y: 4962135 },
                    { x: "KISS OF LIFE", y: 4386542 },
                    { x: "KiiiKiii", y: 4179465 },
                    { x: "NMIXX", y: 4115271 },
                    { x: "ALLDAY PROJECT", y: 1940889 },
                    { x: "izna", y: 1559098 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "hbars",
              title: "팬덤 전환율: 월간 리스너당 팔로워 수",
              subtitle: "MEOVV는 비슷한 규모의 어떤 아티스트보다도 전환율이 높습니다. 함께 데뷔한 상위 두 아티스트는 MEOVV의 1/3 규모이며, 그보다 위에 있는 모든 아티스트는 더 오래되었고 규모가 크며 투어링을 하고 있습니다.",
              unit: "리스너당 팔로워 수",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "IVE", y: 1.332 },
                    { x: "NMIXX", y: 1.154 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "aespa", y: 1.052 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "KISS OF LIFE", y: 0.671 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "ALLDAY PROJECT", y: 0.468 },
                    { x: "izna", y: 0.423 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KiiiKiii", y: 0.239 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              note: "1.0 이상의 비율은 수년간의 투어링 경험을 가진 기성 아티스트에게 해당됩니다. 2024-2026년 데뷔 그룹 내에서 MEOVV는 2백만 명 이상의 월간 리스너를 보유한 모든 그룹을 앞섭니다. ALLDAY PROJECT와 izna는 각각 1.94M 및 1.56M 리스너로 더 빠르게 전환됩니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "B",
          title: "세트 구성 방식",
          strategy: "세트는 한 가지 기준으로 나뉩니다: 해당 아티스트가 라이브 비즈니스를 가지고 있는지 여부입니다. 0.5 이상으로 전환되는 모든 그룹은 투어링을 했습니다. 0.4 미만으로 전환되는 모든 그룹은 투어링을 하지 않았거나 이제 막 시작했습니다. MEOVV는 해당 기준선에서 불리한 쪽에 속하지만 가장 높은 전환율을 보이는 아티스트이며, 이는 전체 지도에서 가장 유리한 위치입니다. 왜냐하면 격차가 복구보다는 구축에 해당하기 때문입니다.",
          components: {
            heading: "티어링 분석 결과",
            items: [
              "리스너 규모는 카탈로그 크기와 발매 빈도의 함수입니다. MEOVV는 14곡을 보유하고 있습니다. KATSEYE는 38곡, ILLIT은 64곡입니다. 리스너 격차는 실질적으로 카탈로그 격차이며, 결과물로 인해 좁혀집니다.",
              "전환율은 팬이 청취 후 무엇을 제공받는지에 따른 함수입니다. MEOVV는 해당 클래스에서 2백만 명 이상의 월간 리스너를 보유한 모든 아티스트를 제치고 거의 아무것도 제공하지 않음에도 불구하고 선두를 달리고 있으며, 이는 수요가 캠페인 주도가 아닌 진정한 것임을 보여주는 가장 강력한 증거입니다.",
              "Hearts2Hearts는 MEOVV보다 늦게 데뷔했지만 커리어 스트림에서 앞질렀습니다. 그 차이는 창의적인 품질이 아닙니다. 그들은 96%의 날짜에 게시물을 올리고 MEOVV는 33%의 날짜에 게시물을 올린다는 것입니다.",
              "KiiiKiii는 MEOVV(1.04M)보다 절반 이하의 카탈로그로 더 높은 일일 스트림(1.15M)을 기록하고 있습니다. 두 아티스트 모두 창의적으로는 뒤처지지 않고 있으며, MEOVV는 발매 빈도에서 뒤처지고 있습니다.",
            ],
          },
        },
      ],
      footnote: "Monthly listeners and follower counts: Chartmetric, September 3, 2026. Career stream totals: Spotify catalog aggregates, September 2026. Ratio is Spotify followers divided by Spotify monthly listeners on the same date.",
    },

    // ===================================================================
    // 03. Consumption & Conversion Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비 및 전환 분석",
      philosophy: "스트리밍 비즈니스는 어떤 차트에도 나타나지 않는 방식으로 건강하며, 나타나는 한 가지 방식으로는 취약합니다. 이 두 가지 사실은 향후 12개월 동안 무엇에 집중해야 할지를 변화시킵니다.",
      intro: "This section reads the catalog from four angles: how conversion has moved over 24 months, where the 480M career streams actually come from, how each release behaves after launch, and what the audience picks when left alone. Sources are Chartmetric daily series and Spotify daily and weekly chart archives. Where chart coverage has gaps, they are treated as gaps and labeled, never as zeros.",
      subBlocks: [
        {
          label: "A",
          title: "모든 사이클마다 전환율이 상승했습니다",
          strategy: "팔로워 대비 리스너 비율은 지나가는 청중 중 얼마나 많은 비율이 팬으로 전환되는지를 측정합니다. MEOVV의 경우 데뷔 당시 0.066에서 0.408로 상승했으며, 모든 사이클에서 동일한 패턴을 보입니다. 신곡 발매 시 신규 리스너가 대거 유입되어 비율이 일시적으로 하락하지만, 해당 리스너들이 팬으로 전환되면서 이전보다 더 높은 수준으로 다시 상승합니다. 2026년 4월, 활동 공백기 사이의 조용한 시점에 기록된 0.584는 신규 트래픽이 없을 때 기준 전환율을 나타냅니다.",
          components: {
            heading: "곡선이 증명하는 것",
            items: [
              "지난 720일간의 일일 전환 중 팔로워 수가 감소한 날은 단 하루도 없었습니다. 2년 동안 하락한 날이 없었으며, 보간된 수치를 제외해도 결과는 동일합니다.",
              "각 활동 공백기 사이의 최고점은 이전보다 높습니다: 0.339 (2025년 4월), 0.584 (2026년 4월). 팬덤의 기반은 단순히 성장하는 것이 아니라, 증가하는 비율로 팬으로 전환되고 있습니다.",
              "비율 하락은 이탈이 아닌 신곡 발매 효과입니다. 2026년 6월에는 리스너 유입 속도가 팬 전환 속도보다 빨랐기 때문에 0.348로 하락했으며, 이는 바람직한 문제입니다.",
              "At 2.02M Spotify followers on 4.95M listeners, MEOVV holds twice KiiiKiii's follower count at a comparable listener scale, and more followers than KiiiKiii and ALLDAY PROJECT hold between them.",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "월별 팔로워 대비 리스너 비율",
              subtitle: "모든 신곡 발매는 비율을 하락시키지만, 모든 회복은 더 높은 지점에서 끝납니다. 추세선은 대중 속에서 형성되는 팬덤입니다.",
              unit: "리스너당 팔로워 수",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "9/24", y: 0.066 }, { x: "10/24", y: 0.071 }, { x: "11/24", y: 0.093 }, { x: "12/24", y: 0.11 }, { x: "1/25", y: 0.169 }, { x: "2/25", y: 0.201 }, { x: "3/25", y: 0.281 }, { x: "4/25", y: 0.339 }, { x: "5/25", y: 0.149 }, { x: "6/25", y: 0.186 }, { x: "7/25", y: 0.218 }, { x: "8/25", y: 0.25 }, { x: "9/25", y: 0.311 }, { x: "10/25", y: 0.278 }, { x: "11/25", y: 0.313 }, { x: "12/25", y: 0.365 }, { x: "1/26", y: 0.388 }, { x: "2/26", y: 0.456 }, { x: "3/26", y: 0.526 }, { x: "4/26", y: 0.584 }, { x: "5/26", y: 0.544 }, { x: "6/26", y: 0.348 }, { x: "7/26", y: 0.366 }, { x: "8/26", y: 0.408 },
                  ],
                },
              ],
              markers: [
                { x: "4/25", label: "HANDS UP" },
                { x: "10/25", label: "BURNING UP" },
                { x: "6/26", label: "BITE NOW" },
              ],
              source: "Chartmetric 일별 시리즈, 월말 수치, 2024년 9월 ~ 2026년 8월",
            },
          ],
        },
        {
          label: "B",
          title: "청중이 다른 싱글을 선택함",
          strategy: "BITE NOW EP가 발매 3개월 후 현재 전체 일일 스트리밍의 52.7%를 차지하고 있습니다. 그 안에서 청중은 캠페인에서 선택하지 않은 트랙을 선택했습니다. B-사이드 곡인 \"Hit 'Em\"은 타이틀 곡 \"DDI RO RI\"의 일일 261,977회 스트리밍에 비해 196,280회 스트리밍을 기록하며 33.5%의 격차를 보이고 있으며, 이 격차는 벌어지고 있습니다. 누적 총계에서 두 곡은 501,091회의 스트리밍 차이를 보이며 해당 속도로 좁혀지고 있어, B-사이드 곡은 본 문서 작성 며칠 내에 함께 발매된 싱글을 추월할 것입니다. \"Hit 'Em\"은 또한 카탈로그에서 가장 큰 곡인 \"HANDS UP\"보다 81% 앞서고 있습니다.",
          components: {
            heading: "이것이 바꾸는 것",
            items: [
              "다음 사이클의 타이틀 곡 선정은 스트리밍 행동에 맞춰 테스트되어야 하며, 그보다 앞서 선정되어서는 안 됩니다. 청중은 이제 두 번이나 선호도를 보여주었습니다.",
              "\"Hit 'Em\"은 또한 계정의 숏폼 퍼포먼스를 견인하며, 최상위 10% 게시물에 반복적으로 등장하고 있습니다. 콘텐츠와 DSP는 서로 일치하고 있으며 계획과는 불일치합니다.",
              "비디오 예산, 프로모션 사이클, 라디오 지원 없이 사실상의 싱글로 운영되는 B-사이드 곡은 첫 2주간의 데이터가 선택하는 어떤 트랙으로든 다음 발매의 지출을 재할당해야 한다는 주장을 뒷받침합니다.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Daily Spotify Streams by Track",
              subtitle: "B-사이드가 카탈로그를 이끌고 있습니다. BITE NOW 싱글 두 곡이 합쳐 일일 총 볼륨의 43.9%를 차지합니다.",
              unit: "일일 스트림 수",
              series: [
                {
                  name: "일일 스트림",
                  points: [
                    { x: "Hit 'Em", y: 261977 },
                    { x: "DDI RO RI", y: 196280 },
                    { x: "HANDS UP", y: 144386 },
                    { x: "BURNING UP", y: 105339 },
                    { x: "MEOW", y: 88038 },
                    { x: "IN MY HANDS", y: 56146 },
                    { x: "BODY", y: 48647 },
                    { x: "TOXIC", y: 37329 },
                    { x: "DROP TOP", y: 35101 },
                  ],
                },
              ],
              highlightX: ["Hit 'Em"],
              note: "가독성을 위해 일일 스트림 수 20,000 미만의 카탈로그 트랙 다섯 개는 생략되었습니다. 이 곡들은 합쳐서 일일 볼륨의 6.7%를 차지합니다.",
              source: "Spotify catalog aggregates, Aug 31 2026",
            },
          ],
        },
        {
          label: "C",
          title: "릴리스 헤일로가 축소되고 있습니다",
          strategy: "릴리스는 백 카탈로그를 함께 끌어올릴 경우 자체 스트림 수 이상의 가치를 지닙니다. HANDS UP 사이클에서는 기존 카탈로그 전체가 19일 내에 2.28배 상승했으며, MEOW는 92%, TOXIC은 165%, BODY는 177% 상승했습니다. BURNING UP은 1.12배 상승했습니다. 현재까지 가장 큰 상업적 릴리스인 BITE NOW는 1.07배 상승했습니다. EP 전체의 아티스트 레벨 일일 스트림 수는 1.04M으로 증가했지만, 그 상승분의 약 95%는 카탈로그 재활성화가 아닌 신곡 자체에서 비롯되었습니다.",
          components: {
            heading: "왜 릴리스보다 헤일로가 더 중요한가",
            items: [
              "카탈로그 재활성화는 릴리스의 복리 효과 부분입니다. 2.28배의 헤일로는 모든 향후 릴리스의 가치를 높이지만, 1.07배의 헤일로는 각 사이클이 거의 평탄한 상태에서 시작됨을 의미합니다.",
              "2025년 헤일로를 만들어낸 메커니즘은 릴리스 후 19일 동안 자체적으로 확산된 곡이었습니다. 2026년 사이클에서는 그러한 여유가 전혀 주어지지 않았습니다.",
              "헤일로를 복원하는 것이 새로운 히트를 만드는 것보다 저렴합니다. 이는 릴리스 시점을 신곡에만 집중하는 것이 아니라 카탈로그를 향하도록 하는 것을 의미합니다.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "릴리스 사이클별 백 카탈로그 상승률",
              subtitle: "각 릴리스 기간 동안 기존 카탈로그가 얼마나 상승했는지. 추세가 곧 발견입니다.",
              unit: "사전 릴리스 카탈로그 비율의 배수",
              series: [
                {
                  name: "카탈로그 상승률",
                  points: [
                    { x: "HANDS UP (2025년 4월)", y: 2.28 },
                    { x: "BURNING UP (2025년 10월)", y: 1.12 },
                    { x: "BITE NOW (2026년 6월)", y: 1.07 },
                  ],
                },
              ],
              highlightX: ["HANDS UP (2025년 4월)"],
              source: "Spotify catalog aggregates. Release windows differ in length, so the multiples are directional rather than strictly like-for-like.",
            },
            {
              kind: "line",
              title: "출시 주 대비 주간 스트림 수 배수",
              subtitle: "출시 후 1.0 이상인 곡은 계속 확산되고 있습니다. HANDS UP이 한 번 해냈고, 동료 아티스트들이 현재 이를 따르고 있습니다.",
              unit: "1주차 배수",
              series: [
                {
                  name: "MEOVV / HANDS UP",
                  points: [
                    { x: "1주차", y: 1.0 }, { x: "4주차", y: 1.18 }, { x: "8주차", y: 0.55 }, { x: "12주차", y: 0.55 },
                  ],
                },
                {
                  name: "ILLIT / It's Me",
                  points: [
                    { x: "1주차", y: 1.0 }, { x: "4주차", y: 1.1 }, { x: "8주차", y: 1.08 }, { x: "12주차", y: 1.04 },
                  ],
                },
                {
                  name: "KiiiKiii / 404",
                  points: [
                    { x: "1주차", y: 1.0 }, { x: "4주차", y: 1.51 }, { x: "8주차", y: 1.41 }, { x: "12주차", y: 0.95 },
                  ],
                },
                {
                  name: "KATSEYE / PINKY UP",
                  points: [
                    { x: "1주차", y: 1.0 }, { x: "4주차", y: 0.62 }, { x: "8주차", y: 0.48 }, { x: "12주차", y: 0.39 },
                  ],
                },
              ],
              note: "HANDS UP은 19일차에 일일 827,555 스트림으로 정점을 찍었고, 출시 주 대비 1.18배수로 4주차까지 이어졌습니다. 이는 현재까지 출시 후 성장한 유일한 MEOVV 곡입니다.",
              source: "Spotify catalog archives, weekly reconstruction. Intervals wider than 30 days are interpolated and treated as directional.",
            },
          ],
        },
        {
          label: "D",
          title: "이 아티스트는 차트에 오르지 않습니다",
          strategy: "As of September 1, 2026, MEOVV appears on zero Spotify daily charts anywhere in the world, and has done since a single Taiwan entry on August 14. On the same days the catalog is streaming 1.04M times daily. Across the group's entire history, charted territory streams account for 29.4M of 480.4M career streams, or 6.11%. Almost 94% of everything MEOVV has ever streamed happened outside any chart.",
          components: {
            heading: "운영상의 해석",
            items: [
              "본 아티스트에게 차트 순위는 유용한 KPI가 아니므로 캠페인 성과를 판단하는 데 사용해서는 안 됩니다. 대신 스트림 수, 팔로워 수, 자체 플랫폼 가입자 수를 기준으로 해야 합니다.",
              "Where MEOVV does chart, it charts well and it charts long: HANDS UP reached No. 3 on the Korean Spotify daily chart on two separate occasions, spent 225 days on that chart and 21 days inside the top ten, and reached No. 7 in Taiwan across 201 days. The Korean audience is real and the chart record proves it.",
              "MEOVV는 인도네시아, 필리핀, 태국, 미국, 호주에서 차트에 진입한 적이 없으나, 이 다섯 시장은 합쳐서 약 200만 명의 월간 리스너를 보유하고 있습니다. 이러한 리스닝은 프로모션 활동이 전혀 없는 지역에서 차트 외적으로 발생하고 있습니다.",
              "차트 지원 없이 성장하는 아티스트는 디스커버리 서페이스와 소셜 미디어를 통해 성장합니다. 이것이 바로 이미 작동하고 있는 시스템이므로 투자할 가치가 있습니다.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "시장별 월간 리스너 수",
              subtitle: "말레이시아가 선두를 차지하고 미국이 2위이며, 상위 8개 시장 중 5곳에서는 MEOVV의 라이브 또는 프로모션 활동이 전혀 이루어지지 않고 있습니다.",
              unit: "월간 리스너 수",
              series: [
                {
                  name: "리스너",
                  points: [
                    { x: "말레이시아", y: 778210 },
                    { x: "미국", y: 687252 },
                    { x: "인도네시아", y: 488423 },
                    { x: "필리핀", y: 383868 },
                    { x: "호주", y: 254581 },
                    { x: "대만", y: 197482 },
                    { x: "일본", y: 162268 },
                    { x: "태국", y: 147888 },
                    { x: "영국", y: 126761 },
                    { x: "폴란드", y: 126149 },
                    { x: "싱가포르", y: 106382 },
                  ],
                },
              ],
              highlightX: ["말레이시아", "미국"],
              note: "Spotify under-represents Korea, where domestic listening runs through Melon, Genie and FLO. The Korean audience is measured on the domestic charts instead, where HANDS UP reached No. 3 and held 225 days.",
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "bars",
              title: "Career Spotify Streams vs the Class",
              subtitle: "MEOVV는 KiiiKiii의 커리어 카탈로그 대비 2.1배의 규모를 보유하고 있으나, 현재 일일 볼륨에서는 KiiiKiii에게 추월당하고 있습니다.",
              unit: "커리어 스트림",
              series: [
                {
                  name: "커리어 스트림",
                  points: [
                    { x: "KATSEYE", y: 4669738668 },
                    { x: "ILLIT", y: 2971011552 },
                    { x: "Hearts2Hearts", y: 698941244 },
                    { x: "MEOVV", y: 480365748 },
                    { x: "KiiiKiii", y: 224958442 },
                  ],
                },
              ],
              highlightX: ["MEOVV"],
              source: "Spotify catalog aggregates, Aug 31 2026 for MEOVV, Sep 2 2026 for peers",
            },
          ],
        },
      ],
      footnote: "방법론: 일일 스트림 수치는 관측 시점의 측정값입니다. 주간 잔존율 배수는 누적 카탈로그 총계로부터 재구성되며 관측치 간에 보간됩니다. 30일보다 넓은 간격은 방향성으로 표시됩니다. 차트-지역별 스트림 총계는 노래가 국가 일일 차트에 포함된 기간만을 다루므로 실제 볼륨을 과소평가하며, 이는 블록 D에서 설명하는 요점입니다.",
    },

    // ===================================================================
    // 04. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "타겟층",
      title: "타겟층 및 타겟팅",
      intro: "아래 프로필은 Chartmetric 플랫폼 데이터와 MEOVV의 인스타그램 타겟층 통계를 기반으로 작성되었으며, 2026년 9월 3일에 추출되었습니다. 이는 초기 유료 타겟팅, 자체 채널 게시 일정, 라이브 빌드를 위한 시장 순서를 설정합니다. 픽셀 데이터가 유료 활동 초기 몇 주 동안 축적되면 분할이 정제됩니다.",
      thesis: "젊고 여성 중심이며 아시아 태평양 지역에 집중된 타겟층과, 아직 공략되지 않은 거대한 미국 제2 시장을 보유하고 있습니다. 아시아 태평양 기반을 핵심으로, 미국을 확장 대상으로 삼고, 이들을 동일한 일정으로 동일한 타겟층으로 취급하는 것을 중단하십시오.",
      metrosLabel: "주요 시장",
      metros: [
        { name: "쿠알라룸푸르" },
        { name: "타이베이" },
        { name: "방콕" },
        { name: "싱가포르" },
        { name: "자카르타" },
        { name: "마닐라 / 케손 시티", tier: "secondary" },
        { name: "로스앤젤레스", tier: "secondary" },
        { name: "시드니", tier: "secondary" },
        { name: "도쿄", tier: "secondary" },
        { name: "서울", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 12 },
        { bracket: "18-24세", weight: 51 },
        { bracket: "25-34세", weight: 33 },
        { bracket: "35세 이상", weight: 4 },
      ],
      genderDistribution: { female: 72, male: 28 },
      similarArtists: [
        "KiiiKiii",
        "Hearts2Hearts",
        "ILLIT",
        "KATSEYE",
        "BABYMONSTER",
        "ALLDAY PROJECT",
        "KISS OF LIFE",
        "izna",
      ],
      genres: ["K-Pop", "동아시아 팝", "댄스 팝", "팝"],
      psychographics: [
        {
          label: "이 타겟층이 이미 하고 있는 것",
          items: [
            "Follows on Spotify at a higher rate than any peer that debuted alongside them, without being asked to",
            "두 번의 릴리즈 사이클에 걸쳐 물리적 앨범 구매량이 증가하고 있으며, 미국과 연계된 구매 경로는 없습니다.",
            "제공된 유일한 두 가지 참여형 상품인 응원봉과 유료 멤버십 모두 매진되었습니다.",
            "캠페인에서 홍보하지 않은 앨범 트랙을 두 번이나 찾아내고 인기를 끌게 했습니다.",
          ],
        },
        {
          label: "이 타겟층에게 제공되지 않은 것",
          items: [
            "2년 내 어디든 갈 수 있는 티켓",
            "소유한 채널에서 링크되지 않은 매장의 팝업 스토어를 제외한 그룹과 직접 소통할 수 있는 모든 방법",
            "리셀러 없이 미국 주소에서 구매 가능한 상품 라인, 응원봉 또는 멤버십",
            "컴백 사이에 소유한 플랫폼을 다시 방문할 이유",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "소비는 아시아 태평양 지역에 집중되어 있으며, 게시 시간대도 이미 이를 반영하고 있습니다.",
          platforms: ["TikTok", "Instagram"],
          implication: "게시물은 한국 시간 오후 6시에서 8시 사이에 업로드되며, 이는 말레이시아, 인도네시아, 필리핀, 호주 전역의 이른 저녁 시간입니다. 이 전략은 효과가 있으므로 유지해야 합니다.",
        },
        {
          behavior: "미국은 687K 리스너로 2위 시장이며, 태평양 시간 기준 새벽 2시에서 4시에 서비스됩니다.",
          platforms: ["TikTok", "Instagram", "YouTube"],
          implication: "미국 시간대에 하루 두 번 게시하는 것은 가장 저렴하게 도달 범위를 넓힐 수 있는 유일한 방법입니다. 해당 클래스의 미국 리더인 KATSEYE는 태평양 시간을 기준으로 일정을 잡으며, 다른 멤버들은 그렇지 않습니다.",
        },
        {
          behavior: "동일한 게시물이 119개의 매칭된 쌍에서 TikTok보다 Instagram에서 약 1.6배 더 많은 수익을 창출합니다.",
          platforms: ["Instagram"],
          implication: "Instagram은 TikTok의 미러로 간주됩니다. 미러로서의 역할은 뛰어나지만, 이는 주요 채널로서의 자원 투입이 부족하다는 것을 의미합니다.",
        },
        {
          behavior: "상위 8개 청취 시장 중 5곳은 라이브 공연이나 프로모션 활동이 전혀 없습니다.",
          platforms: ["Spotify"],
          implication: "말레이시아, 인도네시아, 필리핀, 태국, 호주는 합쳐서 약 205만 명의 월간 리스너를 보유하고 있지만, 공연, 팬 이벤트, 또는 리테일 프로모션 기회를 전혀 얻지 못했습니다.",
        },
      ],
      platformSignals: [
        {
          platform: "Spotify",
          note: "월간 리스너 495만 명 대 팔로워 202만 명으로, 데뷔 클래스에서 200만 명 이상의 리스너를 보유한 모든 아티스트 중 1위를 차지하는 0.408의 비율입니다. 말레이시아는 778K로 1위 시장이며, 미국은 687K로 2위입니다. 전 세계 차트 순위는 없으며, 경력 스트림의 94%가 비차트에서 발생했습니다.",
        },
        {
          platform: "TikTok",
          note: "팔로워 320만 명, 동영상 811개, 좋아요 1억 4950만 개. 게시물 평균 조회수 63만 3천 회. 해당 계정은 연간 약 절반 동안 활동이 없다가, 거의 매일 게시하는 경쟁자들과 달리 최대 10개씩 일괄적으로 게시합니다.",
        },
        {
          platform: "Instagram",
          note: "팔로워 312만 명. 릴 평균 조회수 115만 회로, 거의 동일한 콘텐츠와 거의 동일한 팔로워 기반으로 TikTok 평균의 약 1.8배입니다. 오디언스는 여성 72.2%이며, 18세에서 34세가 83%, 13세에서 17세가 12.5%입니다.",
        },
        {
          platform: "YouTube",
          note: "구독자 157만 명, 채널 조회수 7억 9400만 회, 월간 조회수 2990만 회. 해당 카탈로그의 동영상 라이브러리는 상당하며, 미국 시간대 릴리스 순간을 가장 잘 전달할 수 있는 표면입니다.",
        },
      ],
      footnote: "Age and gender: Instagram audience statistics via Chartmetric, September 3, 2026. Markets are drawn from the current Spotify top-ten listening cities, with Los Angeles carried up as the United States entry point and Bandung folded into the Indonesian market. Seoul is included as a priority market on the strength of the domestic chart record rather than Spotify share, since Korean listening runs primarily through domestic platforms.",
    },

    // ===================================================================
    // 05. Content Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "콘텐츠",
      title: "콘텐츠 인텔리전스 / 1,129개 게시물, 자체 결과와 비교 분석",
      intro: "Crowd Control Digital은 1,129개의 숏폼 게시물을 분류하고 각 게시물을 자체 성과와 비교 분석했습니다. MEOVV TikTok 게시물 362개와 Instagram 릴 200개, 그리고 KATSEYE, ILLIT, Hearts2Hearts, KiiiKiii의 최근 게시물 567개를 동일한 방식으로 계산하여 수치를 비교 가능하게 했습니다. 두 가지 가설을 테스트했으나 실패했으며, 두 가설 모두 아래에 성공한 여섯 가지 가설과 함께 보고됩니다.",
      clientQuestion: {
        attribution: "이 분석이 답하는 질문",
        question: "MEOVV의 게시물 평균은 해당 클래스의 도달 범위에 비해 극히 일부에 불과합니다. 이는 오디언스 규모 때문인지, 아니면 수정 가능한 운영 패턴 때문인지 그 정도는 어느 정도입니까?",
      },
      methodology: [
        {
          label: "코퍼스 추출",
          value: "2025년 5월 28일부터 2026년 9월 3일까지 @meovv_official의 TikTok 게시물 362건과 2026년 3월 21일부터 9월 3일까지 @meovv의 Instagram 릴스 200건에 대한 전체 참여 데이터를 포함합니다. 경쟁사 세트는 KATSEYE, ILLIT, Hearts2Hearts 및 KiiiKiii 각 사의 최신 TikTok 게시물 150건이며, 이 중 567건에서 사용 가능한 조회수 데이터를 확보했습니다.",
        },
        {
          label: "분류",
          value: "모든 게시물은 캡션 텍스트, 해시태그, 멘션 및 길이에 대한 우선순위 계단식 분류를 통해 콘텐츠 레인(content lane)이 할당되었습니다. 어떤 규칙에도 일치하지 않는 게시물은 강제로 특정 레인에 포함시키기보다는 분류되지 않음(unclassified)으로 보고되며, 이는 TikTok 코퍼스의 23.2%에 해당합니다.",
        },
        {
          label: "성과 통합",
          value: "각 게시물은 자체 플랫폼 지표(조회수, 좋아요, 댓글, 공유, 저장 및 계정 내 백분위수)를 포함합니다. 결과는 고립적으로가 아닌 성과와 대조하여 분석되며, 모든 중심 경향치는 중앙값(median)입니다.",
        },
        {
          label: "검증 및 기각된 가설",
          value: "두 가지 사전 가정은 데이터와 일치하지 않아 본 문서의 어느 곳에서도 사용되지 않습니다: 캡션 언어가 성과를 예측한다는 가정과 MEOVV가 한국 국내 팬층이 부족하다는 가정입니다. 두 가정 모두 아래에서 직접적으로 다룹니다.",
        },
        {
          label: "솔직한 한계점",
          value: "멤버별 주장은 얼굴 인식보다는 공식 태그에 기반하며, 멤버별 샘플 크기는 10~19건의 게시물입니다. 경쟁사 코퍼스는 전체 기록이 아닌 최근 기간 샘플입니다. YouTube Shorts는 집계할 수 없어 제외되었습니다.",
        },
      ],
      corpusStats: [
        {
          label: "분석된 게시물",
          value: "1,129",
          detail: "MEOVV TikTok 362건, MEOVV Instagram 200건, 경쟁사 567건, 모두 성과 통합",
        },
        {
          label: "MEOVV 중앙값 게시물",
          value: "633K TikTok / 1.15M Instagram",
          detail: "Instagram은 TikTok 팔로워 기반의 약 3% 이내에서 약 1.8배의 수익을 올립니다.",
        },
        {
          label: "클래스 중앙값 게시물",
          value: "321K ~ 7.5M",
          detail: "KiiiKiii 321K, Hearts2Hearts 1.81M, ILLIT 3.75M, KATSEYE 7.52M",
        },
        {
          label: "게시물이 있었던 날",
          value: "53%",
          detail: "최근 유사 기간 대비 Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74%",
        },
      ],
      mixColumnLabel: "MEOVV 오늘",
      benchmarkColumnLabel: "클래스",
      mixHeading: "클래스 대비 운영 패턴",
      mixIntro: "팔로워 수를 기준으로 정규화했을 때, MEOVV의 게시물당 도달률은 중간 수준이며 주목할 만하지 않습니다. 아래의 격차는 잠재고객 규모 효과가 아닙니다. 이는 분기 내에 변경 가능한 운영 선택 사항입니다.",
      mixRows: [
        {
          metric: "게시 빈도",
          subject: "53%의 날에 활동, 활동일당 2.37개의 게시물, 하루 최대 10개",
          benchmark: "활동일 기준 Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74%",
          read: "behind",
          note: "MEOVV는 3일 중 2일은 활동이 없다가 일괄적으로 게시합니다. 해당 그룹들은 거의 매일 활동을 유지하고 있으며, MEOVV보다 나중에 데뷔한 그룹은 이미 커리어 스트리밍에서 그들을 추월했습니다.",
        },
        {
          metric: "릴리스 및 홍보 에셋",
          subject: "출력의 13.5%, 중앙값 314K 조회수, 상위 10% 내 인덱스 0.41배",
          benchmark: "Instagram은 동일한 패턴을 보입니다: 출력의 12.5%가 0.40배의 인덱스를 기록합니다.",
          read: "behind",
          note: "계정에서 두 번째로 큰 의도적인 카테고리는 또한 독립적으로 두 플랫폼 모두에서 어떤 규모로든 가장 성과가 낮은 영역입니다.",
        },
        {
          metric: "전환 요청",
          subject: "362개 게시물 중 47개에 요청이 포함되어 있으며, 상위 36개 게시물 중 3개만이 포함되어 있습니다.",
          benchmark: "KATSEYE는 게시물의 13%에 요청을 실행하며, ILLIT과 KiiiKiii는 최근 150개 게시물 중 어느 것에도 실행하지 않습니다.",
          read: "behind",
          note: "거의 모든 요청은 가장 낮은 도달률의 에셋 유형에 첨부된 동일한 사전 주문 템플릿입니다. 4백만 조회수의 게시물은 누구에게도 보낼 곳이 없습니다.",
        },
        {
          metric: "반복 가능한 형식",
          subject: "반복되는 모든 태그는 릴리스 주기입니다: DDIRORI 102개 게시물, BITENOW 78개, BURNINGUP 45개",
          benchmark: "ILLIT은 76개 게시물에 걸쳐 두 개의 명명된 시리즈를 운영하며, KiiiKiii는 90개 게시물에 걸쳐 하나의 시리즈를 운영합니다.",
          read: "behind",
          note: "캠페인 태그는 캠페인 종료 시 함께 만료됩니다. 컴백 사이에 시청자가 구독할 수 있는 계정 내 콘텐츠는 없습니다.",
        },
        {
          metric: "플랫폼 할당",
          subject: "119개의 매칭된 쌍 중 인스타그램이 95개를 중앙값 1.58배로 승리했습니다.",
          benchmark: "미러링은 해당 클래스 전반에 걸쳐 표준적인 관행입니다.",
          read: "neutral",
          note: "팔로워 기반은 서로 3% 이내이므로 이는 통제된 테스트에 가깝습니다. 더 나은 성과를 보이는 플랫폼이 보조적인 것으로 간주됩니다.",
        },
        {
          metric: "게시 시간",
          subject: "모달 창 오후 6시부터 8시까지 한국 시간 기준, 게시물의 37%",
          benchmark: "KATSEYE는 게시물의 61%를 미국 태평양 시간 오전 시간에 집중합니다.",
          read: "inline",
          note: "이 시간대는 말레이시아, 인도네시아, 필리핀, 호주에 잘 맞습니다. 미국(2위 시장)에는 태평양 시간 오전 2시부터 4시까지 도달합니다.",
        },
        {
          metric: "해시태그 수",
          subject: "게시물당 5.5개의 해시태그, 97.5%가 미러링된 한국어 및 라틴어 쌍을 포함합니다.",
          benchmark: "KATSEYE 게시물당 1.4개",
          read: "neutral",
          note: "대부분 기계적인 중복입니다. 수정 비용이 낮고 예상되는 이득도 낮아 우선순위보다는 완전성을 위해 기재되었습니다.",
        },
      ],
      mixFootnote: "모든 중앙값은 명시된 기간 동안 각 계정 자체의 코퍼스 내에서 계산되었습니다. 상위 10%는 각 코퍼스 내에서 조회수 기준 상위 10%입니다.",
      charts: [
        {
          kind: "bars",
          title: "콘텐츠 유형별 중앙값 조회수",
          subtitle: "계정 자체 데이터는 이미 최상의 콘텐츠 유형과 최악의 콘텐츠 유형을 명시하고 있습니다. 릴리스 및 프로모션 에셋은 코퍼스 중앙값의 절반 수준입니다.",
          unit: "중앙값 조회수",
          series: [
            {
              name: "중앙값 조회수",
              points: [
                { x: "성과", y: 2868988 },
                { x: "다인원", y: 848918 },
                { x: "과제", y: 818156 },
                { x: "브랜드 협업", y: 782817 },
                { x: "멤버 솔로", y: 729389 },
                { x: "솔직한", y: 505012 },
                { x: "릴리스 에셋", y: 314464 },
                { x: "팬 이벤트", y: 147622 },
              ],
            },
          ],
          highlightX: ["퍼포먼스 비디오", "릴리스 / 프로모션"],
          note: "전체 코퍼스 중앙값은 633,163입니다. 퍼포먼스 비디오는 4개 게시물의 샘플이며, 검증된 방식이 아닌 테스트 신호로 보고됩니다.",
          source: "362개의 TikTok 게시물, 2025년 5월 ~ 2026년 9월",
        },
        {
          kind: "grouped",
          title: "동일 게시물, 두 플랫폼",
          subtitle: "48시간 이내에 두 채널 모두에 게시된 119개의 게시물 중, 80%의 경우 Instagram이 우세했습니다.",
          unit: "중앙값 조회수",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "매칭된 쌍", y: 545246 },
                { x: "전체 코퍼스", y: 633163 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "매칭된 쌍", y: 1000568 },
                { x: "전체 코퍼스", y: 1152012 },
              ],
            },
          ],
          note: "TikTok 3.17M 팔로워, Instagram 3.12M 팔로워. 동일한 콘텐츠, 동일한 기간, 거의 동일한 잠재고객 규모.",
          source: "캡션 유사성 매칭 0.80 임계값, 48시간 창",
        },
        {
          kind: "bars",
          title: "전체 클래스별 팔로워당 도달률",
          subtitle: "잠재고객 규모에 맞춰 정규화했을 때, MEOVV는 중간 수준입니다. KATSEYE와의 도달률 격차는 주로 팔로워 수 격차입니다. 게시 빈도 격차는 그렇지 않습니다.",
          unit: "팔로워당 중앙값 조회수",
          series: [
            {
              name: "팔로워당 조회수",
              points: [
                { x: "KATSEYE", y: 0.36 },
                { x: "ILLIT", y: 0.291 },
                { x: "Hearts2Hearts", y: 0.228 },
                { x: "MEOVV", y: 0.2 },
                { x: "KiiiKiii", y: 0.146 },
              ],
            },
          ],
          highlightX: ["MEOVV"],
          source: "경쟁사별 최근 150개 TikTok 게시물, MEOVV는 362개",
        },
        {
          kind: "grouped",
          title: "컴백 후 결과 대비 성과",
          subtitle: "2026년 6월 컴백 시 발행량이 2.5배 증가했습니다. 중간 도달률은 14% 상승했습니다.",
          unit: "indexed",
          series: [
            {
              name: "월별 게시물 수",
              points: [
                { x: "2026년 6월 이전", y: 22.4 },
                { x: "2026년 6월 이후", y: 56.1 },
              ],
            },
          ],
          note: "동일 분할 기준 중간 조회수: 이전 596,990회, 이후 678,182회. 상위 10% 중간값은 3.17M에서 3.35M으로 상승했습니다. 컴백 전 수치는 데이터 제공업체가 제공할 수 없었던 114일의 기간을 제외한 것입니다. 더 많은 게시가 비례적으로 더 많은 도달을 생성하지 않았으며, 볼륨에 따라 믹스가 변경되지 않았습니다.",
          source: "2026년 6월 1일 기준 분할된 TikTok 게시물 362개",
        },
      ],
      findingsHeading: "8가지 결과",
      findingsIntro: "6개는 검토 대상이었고 2개는 실패했습니다. 두 실패 사례 모두 먼저 보고되는데, 이는 해당 사례에 기반한 전략은 잘못되었을 것이기 때문입니다.",
      findings: [
        {
          id: "f1",
          title: "캡션 언어는 성과를 예측하지 못합니다. 이는 테스트되었으며 기각되었습니다.",
          verdict: "refuted",
          confidence: "높음. n=362 TikTok, n=200 Instagram.",
          summary: "가설은 MEOVV가 한국 청중을 위해 작성하고 글로벌 청중이 이를 듣는다는 것이었으며, 따라서 영어 또는 이중 언어 게시물이 한국어 전용 게시물보다 더 나은 성과를 낼 것이라는 것이었습니다. 데이터는 그 반대를 말합니다. 영어 전용 캡션은 이미 TikTok 자료의 53.6%를 차지하며, 가장 높은 성과를 내는 언어 클래스가 아니라 가장 낮은 성과를 내는 언어 클래스입니다.",
          evidence: [
            "캡션 언어별 TikTok 중간값: 이중 언어 774K (n=35), 이모티콘 또는 태그만 사용 741K (n=81), 한국어 전용 698K (n=52), 영어 전용 578K (n=194)",
            "영어 릴리스 보일러플레이트를 통제하면 각 클래스 내 약 4배의 사분위수 범위에 대해 네 가지 클래스 전체의 스프레드가 11%로 축소됩니다.",
            "Instagram은 독립적으로 동일한 약한 패턴을 보여줍니다: 25에서 78까지의 표본 크기에서 네 가지 클래스에 걸쳐 23%의 스프레드를 보입니다.",
          ],
          counterEvidence: [
            "라틴어 전용 해시태그를 사용한 게시물은 827K의 더 높은 중간값을 보이지만, n=8이며 평균은 단일 42.9M 조회수 아웃라이어에 의해 좌우됩니다.",
          ],
          pivot: {
            title: "번역하지 마십시오. 재배포하십시오.",
            actions: [
              "캡션 언어는 그대로 두십시오. 여기서 얻을 수 있는 이득이 없으며 여기에 투입되는 노력은 빈도와 포착에 투입되지 않는 노력입니다.",
              "접근 문제는 언어가 아니라 타이밍과 도달 가능성입니다. 둘 다 결과 5와 6에서 다루어집니다.",
            ],
          },
        },
        {
          id: "f2",
          title: "MEOVV has a real Korean audience. The Spotify geography is a platform artifact, not a verdict.",
          verdict: "refuted",
          confidence: "높음. 전국 일간 차트 기록과 대조하여 검증됨.",
          summary: "South Korea does not appear in MEOVV's top eleven Spotify markets, which invited the conclusion that the group has no domestic base. That conclusion is wrong. Korean listening runs through domestic platforms rather than Spotify, and on the Korean chart record MEOVV performs well.",
          evidence: [
            "HANDS UP reached No. 3 on the Korean Spotify daily chart on two separate occasions, held 225 days on that chart and 21 days inside the top ten",
            "\"MEOW\"는 한국 차트에서 132일간 8위를 기록했으며, 추가로 여섯 곡이 국내 차트에 올랐습니다.",
            "누적 차트 스트리밍 기준으로 한국은 대만에 이어 MEOVV의 두 번째로 강력한 차트 시장입니다.",
          ],
          pivot: {
            title: "한국을 놓친 시장이 아닌, 확보된 시장으로 간주하십시오.",
            actions: [
              "국내 시장을 위한 수정 전략은 필요하지 않으며, 본 문서에서도 제안하지 않습니다.",
              "확장 전략은 존재하지 않는 한국 시장의 약점이 아닌, (해외) 팬덤이 형성되지 않은 시장에 대한 분석에 근거합니다.",
            ],
          },
        },
        {
          id: "f3",
          title: "해당 계정은 3일 중 2일은 비활성 상태였다가, 갑자기 열 개의 게시물을 한 번에 게시합니다.",
          verdict: "confirmed",
          confidence: "높음. 경쟁사 게시물 567건 대비 362건.",
          summary: "MEOVV는 최근 동일 기간 동안 경쟁 그룹들이 74%에서 93%의 빈도로 게시물을 올린 것에 비해 53%의 날짜에만 게시물을 올립니다. 모든 경쟁 그룹은 거의 매일 팬들의 피드에 노출됩니다. 이러한 몰아 올리기 방식은 각 게시물이 같은 날 같은 팬을 대상으로 그룹 내 다른 게시물과 경쟁하게 만들고, 이후 이틀간의 공백을 남깁니다.",
          evidence: [
            "각 계정의 최근 활동 기간 동안의 게시일 점유율: Hearts2Hearts 93%, KATSEYE 88%, ILLIT 80%, KiiiKiii 74%, MEOVV 53%",
            "MEOVV는 활동일당 평균 2.37개의 게시물을 게시하며 최대 10개까지 올릴 수 있습니다. KATSEYE는 활동일당 평균 1.49개의 게시물을 게시하며 최대 6개까지 올릴 수 있습니다.",
            "Hearts2Hearts debuted after MEOVV, posts on 96% of days, and has already passed them on career Spotify streams",
          ],
          examples: [
            { platform: "tiktok", id: "7678711963534249236", label: "8월 28일 배치, 해당일 첫 번째 게시물 (3개 중)", stat: "2.34M 조회수" },
            { platform: "tiktok", id: "7678711277841091861", label: "8월 28일 배치, 해당일 두 번째 게시물 (3개 중)", stat: "316K 조회수" },
          ],
          pivot: {
            title: "매일 최소한의 게시물을 올리고, 몰아 올리기를 분산하십시오.",
            actions: [
              "틱톡과 인스타그램에서 일일 최소 1회 게시를 설정하고, 컴백 기간뿐만 아니라 컴백 사이에 유지해야 합니다.",
              "기존 일괄 게시일을 큐로 나누십시오. 자료는 이미 존재하며, 한 번에 세 개씩 사용되고 있습니다.",
              "미국 태평양 시간대에 두 번째 일일 게시 시간을 추가하며, 이는 6가지 사이즈를 찾는 것입니다.",
            ],
          },
        },
        {
          id: "f4",
          title: "인스타그램은 동일한 게시물에서 틱톡보다 1.58배의 수익을 올리며, 보조 채널로 활용됩니다.",
          verdict: "confirmed",
          confidence: "높음. 119개의 매칭된 쌍.",
          summary: "48시간 내 두 플랫폼에 게시된 119개의 게시물에서 인스타그램은 95개를 차지했으며, 중앙값 조회 비율은 1.58배였습니다. 두 팔로워 기반은 서로 3% 이내로 유사하여 통제된 실험에 가깝습니다. 전체 코퍼스에서는 그 격차가 1.82배로 더욱 벌어집니다.",
          evidence: [
            "매칭된 쌍 중앙값: 틱톡 545,246, 인스타그램 1,000,568",
            "인스타그램은 119쌍 중 95쌍, 즉 80%를 차지했습니다.",
            "전체 코퍼스 중앙값: 틱톡 362개 게시물에 633,163개, 인스타그램 200개 게시물에 1,152,012개",
          ],
          counterEvidence: [
            "인스타그램의 코퍼스는 2026년 3월부터 9월까지의 더 짧고 최근 기간을 포함하며, 이는 컴백 기간과 겹쳐 결과가 더 좋게 보일 수 있습니다.",
          ],
          pivot: {
            title: "인스타그램을 주요 채널로 홍보하십시오.",
            actions: [
              "인스타그램을 단순히 복제하는 것이 아니라, 인스타그램에 먼저 게시하고 틱톡에 두 번째로 게시하십시오.",
              "틱톡에 맞춰 편집된 것을 재게시하는 대신 인스타그램에 맞게 네이티브로 포맷하고, 2025년 릴리스까지 인스타그램 코퍼스를 확장하여 컴백 기간 외에도 효과가 유지되는지 확인하십시오.",
            ],
          },
        },
        {
          id: "f5",
          title: "요청이 포함된 게시물은 해당 계정에서 가장 성과가 낮은 게시물뿐입니다.",
          verdict: "confirmed",
          confidence: "높음. 362개 게시물에서 47개의 요청이 확인되었습니다.",
          summary: "틱톡 게시물의 13%에 명시적인 요청이 포함되어 있으며, 상위 36개 게시물 중 3개만이 그렇습니다. 거의 모든 요청은 릴리스 에셋에 부착된 동일한 사전 주문 템플릿이며, 릴리스 에셋은 633K 코퍼스 중앙값 대비 314K 중앙값으로 계정에서 가장 도달률이 낮은 영역입니다. 4백만 조회수의 게시물은 아무런 효과가 없습니다.",
          evidence: [
            "362개의 틱톡 게시물 중 47개에 요청이 포함되어 있으며, 상위 10%에 해당하는 36개 게시물 중 3개가 그렇습니다. 인스타그램은 200개 중 19개, 20개 중 1개입니다.",
            "릴리스 및 프로모션 에셋은 전체의 13.5%를 차지하며, 중앙값은 314,464이고 상위 10% 대비 0.41배입니다.",
            "성과가 가장 낮은 네 가지 요청은 모두 한국 시장 라이브스트림 앱 또는 사전 주문 페이지로 연결되며, 그중 세 가지는 움직임이 전혀 없는 정적 그래픽입니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7642251178654321941", label: "사인 앨범 사전 주문", stat: "117천 회 조회수", note: "가장 도달률이 낮은 경로에 요청을 연결" },
            { platform: "tiktok", id: "7562391447236955399", label: "팬 앱 라이브 주간 발표", stat: "77천 회 조회수", note: "전체 자료의 하단" },
            { platform: "tiktok", id: "7608150631328632072", label: "해당 계정의 역대 최대 게시물", stat: "4290만 회 조회수", note: "어떠한 요청도 없음" },
          ],
          pivot: {
            title: "발표가 아닌 도달률에 요청을 집중",
            actions: [
              "도달률이 낮은 게시물에 대한 긴 캡션 문단 대신, 도달률이 높은 게시물에는 단일 목적지를 포함하는 1초 길이의 엔드 카드를 채택하십시오.",
              "각 세로축별로 자체 캡처 페이지를 목적지로 지정하여, 도달률이 사라지지 않고 리스트로 축적되도록 하십시오.",
              "정적 그래픽을 게시물로 발행하는 것을 중단하십시오. 해당 계정에서 성과가 가장 저조한 게시물 6개 중 4개가 움직임 없는 카드입니다.",
            ],
          },
        },
        {
          id: "f6",
          title: "게시 시간대는 상위 5개 시장 중 4곳에 서비스를 제공하며 나머지 1곳은 놓치고 있습니다.",
          verdict: "partial",
          confidence: "중상. 362개 게시물의 게시 시간 분포 기준.",
          summary: "MEOVV의 주요 게시 시간대는 한국 시간 오후 6시부터 8시까지이며, 전체 게시물의 37%를 차지합니다. 이는 말레이시아, 인도네시아, 필리핀, 호주에서의 이른 저녁 시간으로, 올바르며 유지되어야 합니다. 태평양 시간 기준으로는 오전 2시부터 4시까지로, 이곳에 월간 리스너 687천 명이 거주합니다. KATSEYE는 미국 시간을 기준으로 일정을 잡는 유일한 아티스트이며, 미국 사업을 운영하는 유일한 아티스트입니다.",
          evidence: [
            "MEOVV의 상위 세 게시 시간대는 UTC 기준 09시, 10시, 11시이며, 전체 게시물의 36%를 차지합니다.",
            "KATSEYE의 상위 세 시간대는 UTC 기준 15시, 16시, 19시이며, 전체 게시물의 61%를 차지합니다. 이는 태평양 시간 기준 오전 8시부터 오후 12시까지입니다.",
            "한국의 저녁 시간대는 말레이시아와 필리핀에서는 오후 5시부터 7시, 인도네시아에서는 오후 4시부터 6시, 호주에서는 오후 7시부터 9시에 해당합니다.",
          ],
          pivot: {
            title: "아시아 태평양 시간대를 유지하고 미국 시간대를 추가하십시오.",
            actions: [
              "새로운 자료를 요구하기보다는 동일한 콘텐츠 풀에서 가져와 태평양 시간 기준 오전 8시부터 11시까지 일일 두 번째 게시를 추가하십시오.",
              "아시아 태평양 지역은 순수 조회수에서 계속 우위를 점할 것이므로, 미국 지역의 팔로워 성장 및 프로필 방문 수치를 기준으로 미국 시장의 성과를 측정해야 합니다.",
            ],
          },
        },
        {
          id: "f7",
          title: "컴백 사이에 시청자가 구독할 만한 콘텐츠가 계정에 없습니다.",
          verdict: "confirmed",
          confidence: "높음. 362개의 자체 게시물 및 567개의 경쟁사 게시물 전반에 걸친 태그 빈도.",
          summary: "MEOVV 계정의 모든 반복 해시태그는 캠페인과 함께 종료되는 릴리스 주기입니다. 경쟁사들은 이름이 지정되고 반복 가능한 시리즈를 운영하여 시대에 걸쳐 지속되며, 홍보할 싱글이 없을 때 시청자가 다시 방문할 이유를 제공합니다.",
          evidence: [
            "MEOVV의 반복적인 비표준 태그는 모두 캠페인입니다: DDIRORI 102개 게시물, BITENOW 78개, BURNINGUP 45개",
            "ILLIT은 멤버별 태그와 함께 76개 게시물에 걸쳐 두 개의 이름이 지정된 반복 형식을 유지하고 있으며, KiiiKiii는 90개 게시물에 걸쳐 하나의 형식을 운영합니다.",
            "멤버 태그가 전혀 없는 게시물은 165개이며, 전체 633,163개 게시물 중앙값 대비 479,323개의 중앙값을 기록했습니다. 멤버를 태그하는 것이 어떤 멤버가 태그되는지보다 더 가치가 있습니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7650125447795068181", label: "퍼포먼스 비디오, 가장 높은 지수 차선을 기록했습니다.", stat: "5.26M 조회수" },
            { platform: "tiktok", id: "7541403331151826194", label: "멤버 솔로 게시물", stat: "5.01M 조회수" },
          ],
          pivot: {
            title: "두 개의 이름이 지정된 프랜차이즈를 구축하고 매주 운영하십시오.",
            actions: [
              "릴리스 일정과 무관하게 운영되는 고정된 이름, 고정된 슬롯 및 고정된 형식의 퍼포먼스 중심 시리즈 하나와 멤버 중심 시리즈 하나를 의뢰하십시오.",
              "멤버 프랜차이즈를 특정 멤버에게 집중시키기보다는 다섯 멤버 모두를 순환시키십시오. 솔로 태그가 지정된 10~19개 게시물의 샘플 크기는 한 멤버를 선호하는 것을 정당화하기에는 너무 적으며, 신뢰할 수 있는 신호는 단순히 태그가 지정된 게시물이 태그되지 않은 게시물보다 우수하다는 것입니다.",
            ],
          },
        },
        {
          id: "f8",
          title: "계정 역사상 가장 큰 성과를 낸 게시물에 대한 후속 조치가 전혀 이루어지지 않았습니다.",
          verdict: "confirmed",
          confidence: "높음. 단일 게시물 아웃라이어, 확인됨.",
          summary: "2026년 2월 게시물은 4,290만 조회수를 기록했습니다. 계정에서 두 번째로 큰 성과를 낸 게시물은 780만 조회수를 기록했습니다. 격차는 5.5배이며, 362개 게시물 전체에서 후속 조치와 유사한 것은 아무것도 없습니다. 해당 게시물은 캠페인 기간 외에 제작된 네 개의 해시태그와 한국어 태그가 없는 영어 인터넷 문화 형식의 게시물이었습니다.",
          evidence: [
            "조회수 기준 362개 게시물 중 1위: 42,881,800. 2위: 7,824,059. 최고 게시물 하나만으로 분석된 전체 게시물 조회수의 18%를 차지합니다.",
            "릴리스 연관성, 요청 사항, 캠페인 해시태그가 없습니다.",
            "다음으로 높은 네 개의 게시물은 모두 2026년 6월의 단 하루 동안의 릴리스 당일 에셋이었습니다. 이는 계정의 도달 기록이 하나의 우연과 하나의 릴리스로 구성되어 있음을 의미합니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7608150631328632072", label: "4,290만 뷰 아웃라이어", date: "2026년 2월 18일", stat: "4290만 회 조회수", note: "해당 계정의 두 번째로 큰 게시물의 5.5배" },
            { platform: "tiktok", id: "7647112873163885845", label: "크로스 팬덤 협업", stat: "486만 뷰" },
            { platform: "tiktok", id: "7563597916540128519", label: "또래 그룹 협업", stat: "401만 뷰" },
          ],
          pivot: {
            title: "인터넷 문화 포맷을 상시 운영하는 채널로 간주하십시오.",
            actions: [
              "매주 한 개의 멤버 대상 슬롯을 캠페인 외 인터넷 포맷에 할당하되, 분기별 계획이 아닌 해당 주에 라이브인 것을 선택하십시오.",
              "낮은 히트율을 수용하십시오. 해당 채널의 기대값은 최고치로 설정되며, 여기서는 63만 건의 중앙값 대비 4,290만 건이 최고치입니다.",
              "크로스 팬덤 협업은 동일 효과의 신뢰할 수 있는 버전이며 이미 상위 10위 안에 있습니다. 기다리지 말고 일정을 잡으십시오.",
            ],
          },
        },
      ],
      footnote: "데이터셋 및 방법론: MEOVV 공식 계정의 틱톡(TikTok) 게시물 362개와 인스타그램 릴스(Instagram reels) 200개, 그리고 활용 가능한 조회수 데이터를 가진 경쟁사 게시물 567개를 모두 포함하여 참여 데이터를 결합했습니다. 유튜브 쇼츠(YouTube Shorts)는 데이터 제공업체가 집계할 수 없어 모든 수치에서 제외되었습니다. 틱톡(TikTok) 커버리지는 해당 계정의 전체 영상 811개 중 45%이며, 가장 최근 기간에 가중치를 두었습니다. 제공업체가 페이지네이션 방향에서 제공할 수 없었던 2025년 10월과 2026년 2월 사이의 공백이 있습니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      philosophy: "모든 자체 보유 채널은 추정 대신 직접 확인되었습니다. 각 채널에 던져진 질문은 간단했습니다: MEOVV가 중간 플랫폼 없이 이를 통해 팬에게 도달할 수 있는가, 그리고 팬이 이를 통해 돈을 지출할 수 있는가.",
      intro: "이 섹션은 섹션 03의 전환율과 그 아래의 비즈니스 결과 간의 격차를 설명합니다. 2026년 9월 3일, 6개의 채널을 브라우저에서 로드하고 라이브 문서를 검사하여 감사했으며, 이를 통해 블록 B의 캡처 단위가 발견되었습니다. 이는 로드 후 렌더링되며 페이지 소스에는 나타나지 않습니다.",
      subBlocks: [
        {
          label: "A",
          title: "공식 웹사이트는 임시 페이지입니다",
          strategy: "MEOVV는 한국 도메인에 공식 웹사이트를 운영하고 있으며, 이는 단일 임시 페이지입니다. 저작권 표시줄과 여섯 개의 소셜 아이콘만 있을 뿐, 스토어 링크, 출시 정보, 캡처, 두 번째 페이지는 없습니다. 해당 도메인의 모든 경로는 동일한 쉘을 제공합니다. 자체 공유 이미지는 플레이스홀더 이름으로 명명되어 있습니다. 존재하는 유일한 자체 정문은 모든 방문자를 플랫폼으로 바로 되돌려 보냅니다.",
          components: {
            heading: "발견된 내용",
            items: [
              "공식 웹사이트는 레이블에서 운영하며, 한국어 및 영어 로케일 태그를 포함하고, 한 줄의 텍스트인 저작권 공지를 표시합니다.",
              "YouTube, Instagram, X, TikTok, Facebook 및 Threads로 연결되는 6개의 외부 링크가 있습니다. 스토어, 팬 앱 또는 출시로 연결되는 링크는 없습니다.",
              "14개의 후보 경로(shop, store, news, notice, members, join, music, media, contact, newsletter 등)가 요청되었습니다. 14개 모두 동일한 홀딩 페이지를 반환하므로 도달할 두 번째 페이지는 없습니다.",
              "도메인 전체에 양식이나 이메일 입력란이 전혀 없습니다.",
              "정확히 일치하는 .com 도메인은 도메인 리셀러가 별도로 보유하고 있으며, 그룹 이름을 기반으로 한 검색 트래픽을 수익화하는 파킹 페이지 역할을 합니다.",
            ],
          },
        },
        {
          label: "B",
          title: "이메일 목록은 존재하며 MEOVV의 것이 아닙니다.",
          strategy: "이메일 캡처는 단 한 곳, 즉 미국 스토어의 팝업에서 실행됩니다. 제시되는 세 개의 동의함 중 하나만 MEOVV에 해당하므로 주의 깊게 읽을 가치가 있습니다. 나머지 두 개는 유통사와 그 모회사입니다. 동의 문구에는 유통사의 주소에서 유통사를 대신하여 메일이 발송된다고 명시되어 있습니다. 따라서 MEOVV의 트래픽을 기반으로 다른 사람의 시스템 내에서 다른 사람의 동의 하에 목록이 구축되고 있습니다. 다른 모든 자체 소유 표면에서는 아무것도 캡처하지 않습니다.",
          components: {
            heading: "표면별 검증",
            items: [
              "캡처는 미국 스토어의 팝업 유닛으로, 이메일 주소와 국가를 수집하며, MEOVV, 유통사의 레이블 그룹, 모회사를 위한 세 개의 별도 옵트인 체크박스가 있습니다.",
              "동의 문구에는 캘리포니아 주소지의 유통 회사가 발신자로 명시되어 있으며, 해당 회사의 개인정보처리방침이 적용됩니다. 결과 목록은 아티스트나 레이블이 아닌 해당 곳에서 관리됩니다.",
              "사이트 추적 및 장바구니 복구 스크립트가 활성화된 엔터프라이즈 이메일 플랫폼이 함께 운영되므로, 발송 인프라, 계약 및 통합은 이미 모두 존재합니다.",
              "해당 유닛은 영구적인 요소가 아닌 팝업이기 때문에 페이지 본문에는 나타나지 않습니다. 스토어의 정적 마크업을 스캔하면 이메일 필드가 전혀 발견되지 않습니다. 캡처는 실제적이지만 놓치기 쉽습니다.",
              "공식 사이트, 팬 앱 퍼널, 링크 허브, 스트리밍 링크 페이지 또는 소셜 바이오 목적지에는 이메일 또는 SMS 캡처 기능이 존재하지 않습니다.",
              "스트리밍 링크 페이지에는 리타겟팅 픽셀과 분석 태그가 포함되어 있으며, 이는 광고 데이터이지 자체 데이터가 아닙니다. 내보내거나, 메일로 보내거나, 다른 플랫폼으로 가져갈 수 없습니다.",
            ],
          },
        },
        {
          label: "C",
          title: "아무도 링크하지 않는 스토어",
          strategy: "두 개의 스토어가 존재하지만, 잠재 고객이 있는 곳에서는 어느 곳으로도 접근할 수 없습니다. 글로벌 레이블 파트너가 운영하는 미국 스토어는 어떤 플랫폼의 단일 바이오에서도 링크되지 않습니다. 모든 소셜 바이오는 스트리밍 링크 또는 한국 레이블 샵으로 연결됩니다. 또한 미국 스토어는 CD만 판매합니다. 10개의 제품 모두 앨범이며, 의류, 액세서리, 응원봉은 판매하지 않습니다.",
          components: {
            heading: "커머스 격차",
            items: [
              "Instagram의 4개 바이오 링크 슬롯에는 2개의 출시 링크, 소셜 디렉토리 및 무드보드가 포함되어 있습니다. 스토어는 없습니다.",
              "공식 사이트는 어느 스토어도 링크하지 않으므로, 존재하는 유일한 자체 페이지는 커머스와 전혀 연결되지 않습니다.",
              "TikTok, X, YouTube 바이오는 각각 단일 스트리밍 링크만 포함하고 다른 것은 없습니다.",
              "소셜 디렉토리 허브는 10개의 목적지를 나열합니다. 미국 스토어는 포함되어 있지 않으며, 한국 샵은 포함되어 있습니다.",
              "미국 스토어의 전체 상품 카탈로그는 10개 품목이며, 100% CD입니다. 앨범 주기 간 반복 구매를 유도할 만한 이유는 없습니다.",
              "응원봉은 한국 샵에서만 판매되므로, 그룹의 핵심 팬 상품을 구매하려는 미국 팬은 한국 사이트나 리셀러를 이용해야 합니다.",
              "과거 미국 리테일 입점 경험이 있습니다. 첫 EP는 두 개의 미국 전국 리테일러를 통해 독점 버전을 판매했습니다. 해당 경로는 존재하지만 이어지지 못했습니다.",
            ],
          },
        },
        {
          label: "D",
          title: "멤버십 및 팬 플랫폼",
          strategy: "MEOVV는 업계 표준 팬 플랫폼을 사용하지 않습니다. 레이블은 자체 앱을 구축하여 2025년 9월 유료 멤버십을 출시하고 매진시켰으며, 2026년에는 해당 멤버십의 유료 장벽을 해제하는 데 집중했습니다. 현재 사용자 수는 소셜 미디어 팔로워 수 대비 극히 일부에 불과합니다.",
          components: {
            heading: "앱 데이터 분석 결과",
            items: [
              "멤버십은 현재 레이블 스토어에서 판매 중단되었으며, 12개월 기준 약 21달러로 책정되어 있습니다.",
              "앱 설치 수는 인스타그램, 틱톡, 유튜브 총 790만 팔로워 대비 10만 건 이상 수준으로, 가장 후하게 평가하더라도 소셜 미디어 전체 팔로워의 2% 미만에 해당합니다.",
              "2026년 두 차례의 릴리즈를 통해 유료 장벽이 해제되었습니다. 6월에는 신규 가입자를 위한 무료 체험 기간이 제공되었고, 8월에는 라이브 채팅 및 게시 기능이 모든 사용자에게 개방되었습니다.",
              "앱은 이메일 주소를 수집하지만, 이는 한국 시장용 애플리케이션 내에 존재하며 미국 레이블이나 마케팅 파트너에게는 제공되지 않습니다.",
              "팬 앱 홍보는 계정 내 콘텐츠 중 가장 성과가 저조하며, 633K의 전체 콘텐츠 중앙값 대비 86K의 중앙값을 기록했습니다. 팬들은 그룹을 따라 앱으로 유입되지 않고 있습니다.",
            ],
          },
        },
        {
          label: "E",
          title: "라이브 사업은 존재하지 않습니다",
          strategy: "데뷔 이후 727일 동안 MEOVV는 콘서트, 팬 미팅, 또는 전 세계 어디에서도 유료 단독 공연을 개최한 적이 없습니다. 주요 라이브 공연 데이터베이스 두 곳 모두 예정된 공연이 없으며 투어 중이 아닌 것으로 표시됩니다. 그룹이 참여한 모든 무대는 페스티벌, 시상식, 대학 축제, 브랜드 행사 또는 타인이 티켓을 판매한 다수 아티스트 참여 컨벤션이었습니다.",
          components: {
            heading: "기록",
            items: [
              "2년간 서울에서 두 차례의 레이블 쇼케이스가 열렸으며, 모두 프레스 행사였습니다.",
              "2025년과 2026년에 걸쳐 동일한 다수 아티스트 참여 컨벤션에서 세 차례 미국에 출연했으며, 이는 그룹이 아닌 행사가 티켓을 판매한 무대였습니다.",
              "말레이시아, 인도네시아, 필리핀, 태국, 호주에서는 라이브 공연이 전혀 없었으며, 이들 지역의 월간 리스너 수는 총 약 205만 명입니다.",
              "2025년 싱가포르의 팝업 스토어 하나가 동남아시아 전체의 물리적 거점이며, 이는 2023년부터 태국 합작 투자를 진행해 온 모기업 레이블과 대조됩니다.",
              "약 25,000명의 팬들이 라이브 이벤트 플랫폼에서 그룹을 팔로우하며, 아직 오지 않은 공연 날짜 알림을 기다리고 있습니다.",
              "그룹은 공개적으로 팬덤을 위한 아레나 공연을 목표로 하고 있다고 밝혔으며, 이는 공연 부재가 수요 부족이 아닌 일정 및 인프라 구축의 문제임을 시사합니다.",
            ],
          },
        },
        {
          label: "F",
          title: "격차의 총합",
          strategy: "3개 플랫폼에서 7.9백만 명의 팔로워를 보유하고 있으며, 팔로우가 아무런 효용이 없는 스트리밍 서비스에서 2.02백만 명이 더 기꺼이 팔로우하고 있습니다. 이러한 관계의 거의 대부분은 플랫폼을 통해서만 접근 가능하며, 직접 접근할 수 있는 유일한 채널은 소유한 어떤 표면에서도 링크되지 않는 스토어에 있으며, 아티스트의 리스트가 아닌 유통사의 리스트로 수집됩니다. 두 가지의 커밋먼트 상품이 제공되었으며 둘 다 매진되었습니다. 감사 결과, 수요는 반복적으로 입증되었으나 이를 충족할 장치는 구축되지 않았습니다.",
          components: {
            heading: "마감 비용별 순위",
            items: [
              "MEOVV 명의로 리스트를 구축하십시오. 스토어 팝업은 잠재 고객이 옵트인함을 증명하지만, 해당 리스트는 유통사의 것이며 아티스트는 보유하지 못할 것입니다.",
              "각 플랫폼의 바이오 링크 중 최소 하나를 전환 전에 캡처하는 퍼스트 파티 페이지로 연결하십시오.",
              "공식 웹사이트를 임시 페이지에서 캡처가 이루어지는 목적지로 전환하십시오.",
              "미국 스토어를 CD 이상으로 확장하고 라이트스틱과 상품을 판매하십시오.",
              "음원 소비가 이미 이루어지고 있는 시장에서 첫 유료 티켓 행사를 발표하십시오.",
              "앱 기능보다는 라이브 비즈니스 접근성을 중심으로 멤버십 제안을 재구축하십시오.",
            ],
          },
        },
      ],
      footnote: "이 섹션의 모든 표면은 2026년 9월 3일에 브라우저에서 페이지를 로드하고, 정적 마크업이 아닌 라이브 문서를 검사하며, 관련 공개 API를 쿼리하여 직접 검증되었습니다. 캡처 결과는 렌더링된 양식 필드, 동의 문구 및 리스트 식별자에 기반합니다. 부재 주장은 동일한 검사와 함께 예정된 이벤트가 없음을 반환하는 라이브 이벤트 데이터베이스 쿼리에 기반합니다. 팔로워 수는 동일 날짜에 플랫폼에서 보고된 수치입니다.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "전략",
      title: "핵심 전략 및 철학",
      thesis: "MEOVV는 수요 문제가 없습니다. 캡처 문제입니다. 그룹이 확보한 모든 팬은 현재 플랫폼에 의해 관리되고 있으며, 그들 모두는 지금까지 제공된 단 두 가지 제안에 모두 '예'라고 답했습니다.",
      hierarchy: [
        {
          label: "1. 캡처",
          description: "플랫폼 팔로워를 그룹이 실제로 소유하는 퍼스트 파티 연락처로 전환하십시오. MEOVV의 현재 트래픽에서 유통사 명의로, 아무것도 링크되지 않는 스토어에 리스트가 이미 구축되고 있으며, 아티스트는 이를 보유하지 못합니다. 아티스트 측 리스트를 구축하고 자체 트래픽을 해당 리스트로 연결하는 것이 가장 빠르고 저렴한 조치입니다. 그 이후의 모든 것은 이에 달려 있습니다.",
        },
        {
          label: "2. 라이브",
          description: "팬덤에게 티켓을 구매할 수 있는 무언가를 제공하십시오. 2년간 입증된 수요, 매진된 라이트스틱, 매진된 멤버십, 그리고 한 번도 발송되지 않은 이벤트 알림에 구독한 25,000명의 사람들이 있습니다. 명성이 있는 시장보다는 음원 소비가 이미 이루어지고 있는 시장에서 시작하십시오.",
        },
        {
          label: "3. 콘텐츠 시스템",
          description: "폭발적인 발행 대신 일일 기본 콘텐츠와 컴백 사이에 진행되는 두 개의 명명된 프랜차이즈로 대체하십시오. 계정이 이미 생성하는 도달 범위를 공지사항에 사용하고 있으며, 이를 캡처 계층으로 재지정하고 홍보할 것이 없을 때 존재감을 유지하십시오.",
        },
        {
          label: "4. 카탈로그",
          description: "2025년 사이클은 백 카탈로그를 2.28배로 끌어올렸고, 2026년 사이클은 1.07배를 기록했습니다. 릴리즈 모먼트를 전체 카탈로그에 집중시키고, 첫 2주간의 스트리밍 데이터를 통해 스펜드를 집중할 트랙을 선정하십시오.",
        },
      ],
      messaging: [
        "전환율은 자산입니다. 데뷔 클래스의 유사한 규모의 모든 아티스트를 앞서고 있으며, 지난 2년간 거의 매달 상승했고, 거의 아무것도 제공하지 않고도 얻었습니다. 다른 어떤 것을 최적화하기 전에 이를 보호하십시오.",
        "차트는 이 아티스트의 스코어보드가 아닙니다. MEOVV가 스트리밍한 모든 것의 94%는 어떤 차트 밖에서 발생했으며, 이 그룹은 현재 지구상 어디에서도 차트에 오르지 못하면서 하루에 백만 스트림 이상을 기록하고 있습니다.",
        "청중은 이미 두 번이나 자체적으로 싱글을 선택했습니다. 이를 무시하기보다는 청중의 선택에 귀 기울이는 릴리즈 프로세스를 구축하십시오.",
        "이 계획에는 창의적인 재설정이 필요한 부분이 없습니다. 현재 창의성은 4,200만 뷰의 아웃라이어와 그 규모에 가까운 모든 아티스트를 앞서는 전환율을 생산하고 있습니다. 부족한 것은 그 아래에 있어야 할 비즈니스입니다.",
      ],
      footnote: "이어지는 네 가지 버티컬은 이 계층 구조에 따라 순서대로 실행됩니다. 다른 모든 워크스트림이 이를 통해 복합적으로 작용하기 때문에 캡처가 가장 먼저입니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Owned-Audience Capture
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "캡처",
      title: "버티컬 1 / 자체 보유 오디언스 캡처",
      philosophy: "MEOVV가 팬에게 직접 도달할 수 있도록 하는 레이어를 구축하십시오. 이 버티컬이 첫 번째인 이유는 감사 결과 도구가 이미 구매, 설치 및 실행 중이며 앞에 아무것도 없었기 때문입니다.",
      intro: "목표는 그룹이 통제하는 퍼스트 파티 오디언스입니다. 플랫폼에서 임대한 것이 아니라 MEOVV가 보유한 이메일 주소와 전화번호로, 시장별로 세분화되어 티켓 판매, 리테일 드롭 또는 재정 없이 리리스에 사용할 수 있습니다.",
      subBlocks: [
        {
          label: "A",
          title: "MEOVV가 실제로 보유한 리스트 구축",
          objective: "아티스트가 통제하고 자체 일정에 따라 메일을 보낼 수 있는 퍼스트 파티 오디언스로, 첫 4주 안에 활성화됩니다.",
          strategy: "캡처는 이미 미국 스토어에서 실행되고 있지만 MEOVV의 소유는 아닙니다. 세 개의 동의함 중 두 개는 유통사와 그 모회사의 소유이며, 메일은 그들의 이름과 개인정보처리방침 하에 발송되고, 실제로는 아티스트가 해당 리스트에 직접 접근할 수 없습니다. 이를 있는 그대로 받아들이십시오. 청중이 옵트인할 것이라는 증거이며, 어떤 경우에도 계속 실행될 채널입니다. 작업은 전용 팬 CRM 플랫폼에 별도의 아티스트 보유 리스트를 구축하여, 이를 병행하고 모든 자체 채널에서 공급받아 MEOVV가 누구에게도 묻지 않고 도달할 수 있는 오디언스를 보유하도록 하는 것입니다.",
          components: {
            heading: "구축",
            items: [
              "유통사와 독립적인 아티스트 측 리스트를 보유하는 전용 팬 CRM 플랫폼, Laylo 또는 이에 상응하는 플랫폼",
              "자체 트래픽이 발생하는 모든 곳에 MEOVV 자체 이름으로 캡처 유닛을 설치하여, 유통사의 스토어 팝업을 대체하는 대신 나란히 배치",
              "모든 바이오 링크와 엔드 카드가 가리키는 단일 목적지로서 독립적인 퍼스트 파티 랜딩 페이지",
              "법적으로 문제가 없는 시장에 대해 이메일 캡처와 함께 SMS 캡처를 제공하며, 동의 유형별로 이메일 흐름과 분리하여 관리",
              "가입 시 트리거되는 영어 환영 시퀀스로, 시장별로 신규 연락처를 라우팅",
              "첫 번째 기록부터 세분화: 시장, 획득 소스, 구매 내역, 그리고 연락처가 릴리즈 모먼트에서 왔는지 라이브 모먼트에서 왔는지 여부",
            ],
          },
          kpis: [
            "아티스트 보유 연락처 확보, 주간 보고 및 전체 확보량에서 차지하는 비율",
            "플랫폼별, 바이오 슬롯별 프로필 방문 1천회당 확보율",
            "한국 외 지역 연락처 비율, 상위 5개 청취 시장 타겟팅",
            "첫 발송부터 업계 표준 내에서의 전달률 및 옵트아웃 비율",
          ],
        },
        {
          label: "B",
          title: "프론트 도어 완성",
          objective: "공식 웹사이트를 단순 정보 제공 페이지에서 캠페인 트래픽을 유도하고 팬들이 다시 방문할 수 있는 목적지로 전환",
          strategy: "도메인과 웹사이트는 이미 존재하며 레이블에서 운영 중이므로 가장 어려운 부분은 제거되었습니다. 현재 해당 페이지는 저작권 표시와 플랫폼으로 연결되는 6개의 링크만 있는 임시 페이지입니다. 이를 구축하는 것은 가장 저렴하게 확보할 수 있는 자체 미디어 이득입니다. 페이지의 크기는 중요하지 않으며, 릴리스 허브, 스토어 링크, 투어 모듈 및 연락처 확보 기능이 1단계의 전체 요구 사항입니다.",
          components: {
            heading: "구축",
            items: [
              "레이블이 이미 보유한 도메인 뒤에 임시 페이지를 대체할 실제 홈페이지 구축",
              "그룹의 검색 트래픽을 리셀러에게 수익화하고 있는 정확히 일치하는 .com 도메인 확보",
              "첫 공연 날짜가 확정되기 전에 공지사항을 게시할 수 있는 투어 모듈 마련",
              "미국 트래픽은 미국 스토어프론트로, 그 외 모든 트래픽은 레이블 샵으로 보내는 스토어 라우팅 구축 (현재 아무도 이를 수행하지 않음)",
              "네 개 플랫폼 모두에 일관된 바이오 링크 구조 적용, 최소한 하나의 슬롯은 자체 페이지에 영구적으로 할당",
            ],
          },
          kpis: [
            "자체 웹사이트 세션 및 재방문자 비율 (임시 페이지 기준으로는 사실상 제로)",
            "전체 바이오 링크 클릭 중 제3자 링크 페이지가 아닌 자체 소유 자산에 도달하는 비율",
            "자체 채널에 기인하는 스토어 세션",
          ],
        },
        {
          label: "C",
          title: "팬들이 구매할 수 있는 상품 확장",
          objective: "팬들에게 하나 이상의 상품과 재방문할 수 있는 하나 이상의 이유 제공",
          strategy: "지난 2년간 두 가지 한정판 상품을 제공했으며 모두 매진되었습니다. 미국 스토어프론트에는 10개의 상품이 있지만 모두 CD이며, 이는 앨범 발매 주기 사이에 구매할 상품이 없다는 것을 의미합니다. 수요 신호는 명확하며 재고는 거의 바닥입니다.",
          components: {
            heading: "구축",
            items: [
              "미국 스토어프론트에 응원봉 및 의류를 포함한 상품 라인 구축 (앨범만 판매하는 것이 아님)",
              "매진된 응원봉 및 멤버십 재입고, 품절 기간 동안 두 상품 모두 대기자 명단 확보",
              "다음 사이클에 미국 리테일 모멘텀을 구축하여, 첫 EP에서 이미 진행했던 전국 단위 리테일 독점 판매를 기반으로 합니다.",
              "앱 기능 중심이 아닌, 두 번째 버티컬의 라이브 비즈니스 접근성을 중심으로 재구축된 멤버십 제안입니다.",
            ],
          },
          kpis: [
            "스토어 매출 및 주문 (미국 및 해외 분할)",
            "반복 구매율 (현재 구조적으로 불가능함)",
            "재고 부족 시 대기자 명단 등록",
            "라이브 프로포지션이 결합된 후의 멤버십 갱신",
          ],
        },
      ],
      footnote: "이 버티컬이 가장 먼저 시퀀싱되는 이유는 이후 모든 워크스트림이 이를 통해 복합적인 효과를 발휘하기 때문입니다. 티켓 판매, 리테일 드롭, 음반 발매 모두 유료 도달 범위에 비해 자체 보유 리스트를 활용하는 것이 훨씬 경제적입니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / The Live Business
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "라이브",
      title: "버티컬 2 / 라이브 비즈니스",
      philosophy: "감사에서 가장 큰 미수익 자산입니다. 그룹을 한 번도 본 적 없는 시장에서 2년간 티켓 구매할 상품 없이 수요만 존재했습니다.",
      intro: "비교 대상 그룹 중 리스너당 팔로워 전환율이 0.5 이상인 모든 아티스트는 투어링 이력이 있습니다. 0.4 미만인 모든 아티스트는 그렇지 않습니다. MEOVV는 이 기준선에서 벗어난 그룹 중 가장 높은 전환율을 보이고 있으며, 이는 현재 전환율 지표의 상한선이 팬덤의 강점보다는 라이브 비즈니스의 부재에 의해 설정됨을 의미합니다.",
      subBlocks: [
        {
          label: "A",
          title: "이미 리스닝이 발생하고 있는 곳으로의 경로",
          objective: "이미 수요가 입증된 시장에서의 첫 MEOVV 헤드라인 티켓팅 공연입니다.",
          strategy: "동남아시아는 말레이시아, 인도네시아, 필리핀, 태국, 싱가포르에 걸쳐 약 190만 명의 월간 리스너를 보유하고 있으며, 2년간 팝업 스토어는 단 한 곳만 운영되었습니다. 쿠알라룸푸르는 그룹의 세계 최대 리스닝 도시입니다. 이 시장들은 미국보다 진입 비용이 낮고, 기존 프로모션 활동 범위와 가까우며, 모회사가 2023년부터 합작 투자를 진행해 온 지역 내에 위치합니다.",
          components: {
            heading: "라우팅 사례",
            items: [
              "쿠알라룸푸르는 117,536명의 리스너로 MEOVV의 1위 도시이며, 말레이시아는 778,210명으로 1위 국가입니다.",
              "타이베이, 방콕, 싱가포르, 자카르타가 그 뒤를 잇고 있으며, 그룹은 타이베이에서 팬사인회 및 팝업 스토어 운영 이력이 있습니다.",
              "호주는 어떠한 활동 기반도 없이 254,581명의 리스너를 보유하고 있으며, 시드니는 상위 10위 도시입니다.",
              "로스앤젤레스는 41,635명으로 미국 내 최대 도시이며, 그룹은 자체 명의로 티켓을 판매한 적 없이 같은 LA 컨벤션에 세 번 참가했습니다.",
            ],
          },
          tactics: [
            "1단계: 쿠알라룸푸르 또는 타이베이에서 팬 콘서트 규모의 티켓팅 공연을 진행하며, 인상적인 규모보다는 매진을 목표로 합니다.",
            "2단계: 방콕, 싱가포르, 자카르타, 마닐라를 추가하는 동남아시아 투어",
            "3단계: 1단계와 2단계에서 축적된 픽셀 및 퍼스트 파티 데이터에 기반하여, 추측이 아닌 방식으로 첫 미국 공연 일정을 확정",
            "사전 판매는 퍼스트 파티 리스트와 멤버십을 통해 제한적으로 진행하며, 이는 두 가지 모두 존재 이유를 부여합니다.",
          ],
          kpis: [
            "최초 판매 시 판매율 및 매진 소요 시간",
            "퍼스트 파티 리스트를 통한 티켓 판매 점유율 대 일반 판매 점유율",
            "투어 진행 시장별 팔로워 대 리스너 비율 변화와 투어 미진행 통제 시장과의 비교",
            "사전 판매 접근 권한에 대한 멤버십 전환율",
          ],
        },
        {
          label: "B",
          title: "기존 대기자 명단을 전환시키십시오.",
          objective: "현재 서드파티 이벤트 플랫폼에 존재하는 수요를 확보하십시오.",
          strategy: "대략 25,000명의 사람들이 MEOVV가 공연 날짜를 발표할 때 알림을 받기 위해 라이브 이벤트 플랫폼에 등록했습니다. 이는 제3자에 의해 전적으로 보유되고 있으며, 단 한 번의 알림도 받지 못한, 구매 의사를 가진 자발적이고 잠재력 있는 잠재 고객입니다. 이는 현재 이용 가능한 가장 높은 구매 의사를 가진 세그먼트이며, 접근하는 데 비용이 전혀 들지 않습니다.",
          components: {
            heading: "구축",
            items: [
              "주요 라이브 이벤트 플랫폼 두 곳 모두에서 그룹의 프로필을 확보하고 완성하십시오.",
              "첫 번째 발표는 자체 리스트와 동시에 이들을 통해 진행하십시오.",
              "구매를 완료하지 않은 사람들을 포함하여 티켓 판매 퍼널의 모든 단계에서 퍼스트 파티 리스트로 확보하십시오.",
              "2단계 라우팅 전에 등록 지리 정보를 바탕으로 시장별 수요 지도를 구축하십시오.",
            ],
          },
          kpis: [
            "이벤트 플랫폼 트래커를 퍼스트 파티 연락처로 전환",
            "시장별 발표 대비 구매 전환율",
            "도시별 등록 밀도, 다음 단계를 위한 라우팅 입력으로 사용",
          ],
        },
        {
          label: "C",
          title: "라이브 비즈니스를 가입 이유로 만드십시오.",
          objective: "멤버십과 팬덤 정체성에 기능을 부여하십시오.",
          strategy: "멤버십은 매진되었고 현재 무료로 점진적으로 개방되고 있는데, 이는 제품이 제 역할을 찾지 못했을 때 나타나는 패턴입니다. 사전 판매 접근 권한, 티켓 우선권, 회원 전용 라이브 순간들이 그 역할을 부여합니다. 팬덤 이름, 응원봉, 앱 모두 독립적인 제품이 아닌 라이브 비즈니스의 도구가 됩니다.",
          components: {
            heading: "구축",
            items: [
              "주요 회원 혜택으로서의 회원 사전 예매 기간 및 티켓 우선권",
              "각 공연 날짜별 회원 전용 사운드체크, 팬사인회 또는 라이브스트림 제공",
              "각 시장별 판매 개시와 연계된 응원봉 판매, 미국 내 배송 경로 포함",
              "모든 공연 종료 후 현장에서 참석자를 즉시 연락처로 전환하는 활동",
            ],
          },
          kpis: [
            "판매 개시별 회원 가입 수",
            "라이브 시작 전 기준 대비 재등록률",
            "공연별 참석자-연락처 확보율",
          ],
        },
      ],
      footnote: "Market ordering is set by current Spotify monthly listeners by city and country, Chartmetric, September 3, 2026. No touring commitment is implied by this document; the routing above is the analytic case for where a first date should land.",
    },

    // ===================================================================
    // 10. Vertical 3 / Content System
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "시스템",
      title: "버티컬 3 / 콘텐츠 시스템",
      philosophy: "크리에이티브 자체는 문제가 아닙니다. 4,290만 회 조회수의 게시물과 해당 규모의 다른 모든 아티스트보다 앞서는 전환율은 콘텐츠의 약점을 보여주는 지표가 아닙니다. 문제는 계정이 간헐적으로 게시물을 발행하고, 도달 범위를 공지사항에 소진하며, 컴백 사이에 후속 콘텐츠를 제공하지 않는다는 점입니다.",
      intro: "이 버티컬은 섹션 05의 8가지 조사 결과를 운영 시스템으로 전환합니다: 최소 게시 빈도, 두 개의 명명된 프랜차이즈, 미국 시간대 기준 두 번째 일일 게시 슬롯, 그리고 버티컬 1에 구축된 확보 레이어로 도달 범위를 유도하는 엔드 카드 표준입니다.",
      subBlocks: [
        {
          label: "A",
          title: "일괄 게시 대신 일일 최소 게시",
          objective: "활동일 기준 53%에서 TikTok 및 Instagram 전반에 걸친 일일 활동으로 전환",
          strategy: "경쟁자들은 74%에서 93%의 날짜에 게시합니다. MEOVV는 53%의 날짜에 최대 10개까지 일괄 게시한 후 활동을 중단합니다. 일괄 게시 방식은 그룹의 게시물들이 같은 날 같은 잠재고객을 두고 서로 경쟁하게 만들고, 이후 이틀 동안은 게시물을 올리지 못하게 합니다. 이를 개선할 자료는 이미 존재하며, 현재 세 개씩 한 번에 사용되고 있습니다.",
          components: {
            heading: "운영 변경 사항",
            items: [
              "TikTok과 Instagram 각각 하루 최소 한 개의 게시물, 컴백 기간뿐만 아니라 컴백 사이에 게시",
              "기존 일괄 게시일을 함께 발행하는 대신 예약된 큐로 분할",
              "현재 기본 설정과 반대로 Instagram을 먼저 게시하고 TikTok을 두 번째로 게시",
              "동일한 콘텐츠 풀에서 가져온 미국 태평양 시간 오전 8시부터 11시까지의 두 번째 일일 게시 슬롯",
            ],
          },
          kpis: [
            "게시물 1개 이상을 올린 날의 비율, 53%에서 85% 이상으로",
            "게시물당 평균 조회수, 633K에서 1.5M으로",
            "플랫폼별 팔로워 성장률 및 신규 슬롯에서의 미국 지역 프로필 방문 수",
          ],
        },
        {
          label: "B",
          title: "캠페인을 넘어 지속되는 두 가지 프랜차이즈",
          objective: "싱글을 홍보할 것이 없을 때 시청자에게 구독할 만한 것을 제공하십시오.",
          strategy: "계정의 모든 반복 태그는 만료되는 릴리스 주기입니다: 한 캠페인에 102개 게시물, 다른 캠페인에 78개, 또 다른 캠페인에 45개. 경쟁사들은 시대를 초월하는 명명된 시리즈를 운영합니다. 해당 데이터는 구축할 두 가지 프랜차이즈를 알려줍니다: 퍼포먼스 콘텐츠는 두 플랫폼 모두에서 상위 10%에 가장 높게 색인되며, 멤버 태그가 지정된 게시물은 태그가 없는 게시물보다 70% 더 뛰어납니다.",
          components: {
            heading: "구축",
            items: [
              "고정된 이름, 고정된 주간 슬롯 및 고정된 형식을 갖춘 퍼포먼스 중심 프랜차이즈",
              "멤버별 샘플이 어느 한쪽을 선호하기에는 너무 적기 때문에 한 명에게 집중하기보다 다섯 명의 멤버를 모두 순환시키는 멤버 중심 프랜차이즈",
              "분기별 사전 계획이 아닌 해당 주에 라이브인 콘텐츠 중에서 선택하는 주 1회 인터넷 문화 슬롯",
              "기회주의적인 협업이 아닌 예정된 크로스 팬덤 협업; 이미 계정 상위 10개에 포함되어 있습니다.",
            ],
          },
          kpis: [
            "계정 평균 대비 프랜차이즈 게시물 평균",
            "프랜차이즈 콘텐츠의 재방문율",
            "월간 비캠페인 콘텐츠 비율, 현재 주기 사이에 거의 제로에 가까움",
          ],
        },
        {
          label: "C",
          title: "도달 범위를 특정 지점으로 향하게 하십시오.",
          objective: "계정의 기존 도달 범위를 자체 연락처로 전환하십시오.",
          strategy: "게시물의 13%만이 요청 사항을 포함하고, 상위 36개 게시물 중 3개만이 그렇습니다. 거의 모든 요청 사항은 계정의 가장 낮은 도달 범위에 연결된 사전 주문 템플릿입니다. 해결책은 더 많은 요청 사항이 아닙니다. 요청 사항을 발표에서 도달 범위로 옮기고, 판매만 하는 페이지가 아닌 수집하는 페이지로 향하게 하는 것입니다.",
          components: {
            heading: "표준",
            items: [
              "도달률이 높은 게시물에 단일 목적지를 전달하는 1초 길이의 엔드 카드, 도달률이 낮은 게시물의 캡션 문단 대체",
              "해당 목적지는 스트리밍 링크가 아닌, 첫 번째 버티컬의 자체 수집 페이지입니다.",
              "정적 그래픽은 게시물 형식에서 제외됨; 계정에서 가장 좋지 않은 게시물 6개 중 4개가 움직이지 않는 카드입니다.",
              "릴리스 및 프로모션 에셋을 결과물 대비 비율로 조정하고, 발표 업무는 스토리 및 고정 게시물로 이동",
            ],
          },
          kpis: [
            "백만 뷰당 확보된 연락처, 주간 보고",
            "최종 화면이 포함된 게시물의 클릭률 대 캡션 요청률",
            "릴리스 에셋의 결과물 대비 비율, 13.5%에서 하향 조정, 중앙값 도달률 유지",
          ],
        },
      ],
      footnote: "이 세로 섹션의 모든 권장 사항은 일반적인 플랫폼 관행이 아닌 섹션 05의 계정 자체 성과 데이터에서 파생됩니다. 표본 크기 제한은 해당 섹션에 명시되어 있으며 여기에 적용됩니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / DSP & Catalog
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "DSP",
      title: "세로 섹션 4 / DSP & 카탈로그",
      philosophy: "하루 백만 스트림 이상을 기록하지만 전 세계 차트 어디에도 오르지 못하는 아티스트는 해결해야 할 차트 문제가 아닙니다. 이는 자금을 지원해야 할 발견 엔진입니다.",
      intro: "MEOVV의 경력 스트림 480M 중 94%는 어떤 국가 차트에서도 발생하지 않았습니다. 카탈로그는 14개 트랙으로 적으며, 최신 릴리스에 집중되어 있고, 릴리스 후 효과는 세 번의 사이클 동안 2.28배에서 1.07배로 하락했습니다. 이 세로 섹션은 효과적인 것을 보호하고 하락한 것을 복원합니다.",
      subBlocks: [
        {
          label: "A",
          title: "데이터가 싱글을 선택하게 하십시오",
          objective: "이제 두 번이나 올바르게 선택한 청중의 의견을 무시하는 것을 중단하십시오.",
          strategy: "B-사이드 트랙은 타이틀 트랙보다 일일 스트림에서 33.5% 앞서고 있으며 누적 스트림에서도 곧 추월할 것입니다. 또한 비디오 예산, 프로모션 사이클, 라디오 지원 없이 카탈로그에서 가장 큰 곡보다 81% 앞서고 있습니다. 동일한 트랙이 계정의 최상위 10% 단기 성과를 기록하고 있습니다. 콘텐츠와 스트리밍은 서로 일치하고 캠페인 계획과는 불일치합니다.",
          components: {
            heading: "프로세스 변경",
            items: [
              "향후 모든 릴리스에 대해 릴리스 후 14일간 데이터를 분석하고, 예산은 데이터가 선택하는 트랙으로 재지정하기 위해 보류",
              "단기 및 유료 비중을 기획 시점에 타이틀 트랙에 고정하는 대신 우승 트랙으로 재할당",
              "사전에 선정된 싱글뿐만 아니라 사후에 우승자를 위해 의뢰된 비디오 또는 퍼포먼스 에셋",
            ],
          },
          kpis: [
            "캠페인의 의도된 집중 트랙 대 청중의 선택 트랙이 보유한 일일 스트림 점유율",
            "재지정된 지출의 천 스트림당 비용 대 원래 계획",
          ],
        },
        {
          label: "B",
          title: "릴리스 후 효과 복원",
          objective: "각 릴리스가 자체 스트림 이상의 가치를 다시 갖도록 하십시오.",
          strategy: "2025년 사이클은 19일 만에 전체 백 카탈로그를 2.28배로 끌어올렸으며, 개별 오래된 트랙은 92%에서 177%까지 상승했습니다. 2026년 사이클은 1.07배를 기록했습니다. 첫 번째 결과를 가져온 메커니즘은 릴리스 후 19일 동안 확산될 공간을 부여받은 곡이었으며, 당시 카탈로그가 더 작았기 때문에 그 차이는 카탈로그 크기가 아닙니다.",
          components: {
            heading: "구축",
            items: [
              "신규 싱글뿐만 아니라 플레이리스트 시퀀싱을 통해 전체 카탈로그를 겨냥한 릴리즈 모먼트",
              "현재 사라지는 사이클 간의 숏폼 프랜차이즈에 활용된 카탈로그 트랙",
              "이미 스트림의 94%를 견인하는 디스커버리 행동을 중심으로 구성된 에디토리얼 및 알고리즘 피칭",
              "일본 싱글과 국제 포맷 트랙은 카탈로그로 남겨두기보다는 별도의 시장 진입으로 활용",
            ],
          },
          kpis: [
            "릴리즈 사이클당 백카탈로그 리프트 배수, 1.07배에서 2.0배 이상으로",
            "출시 주차 대비 4주차, 8주차, 12주차의 주간 스트림 유지율 배수",
            "12개월 이상 된 트랙에서 발생하는 일일 스트림 점유율",
          ],
        },
        {
          label: "C",
          title: "카탈로그 확장",
          objective: "실질적으로 카탈로그 격차인 리스너 격차 해소",
          strategy: "MEOVV는 14개의 트랙을 보유하고 있습니다. 티어 맵에서 그 위에 있는 두 아티스트는 각각 38개와 64개의 트랙을 보유하고 있습니다. 월간 리스너 수는 발견 가능한 카탈로그의 양에 따라 결정되며, MEOVV의 리스너 수는 전환율이 낮아서가 아니라 카탈로그가 적기 때문에 감소한 것입니다. 전환율 면에서는 비슷한 규모의 모든 아티스트보다 뛰어납니다.",
          components: {
            heading: "사례",
            items: [
              "MEOVV는 트랙당 평균 3,430만 커리어 스트림을 기록하고 있습니다. 티어 맵에서 그 위에 있는 두 아티스트는 3~4배 더 큰 카탈로그를 보유하고 있으며 평균적으로 더 많은 스트림을 기록하고 있는데, 이는 릴리즈 속도가 따라잡아야 할 규모입니다.",
              "가장 가까운 비교 그룹은 더 늦게 데뷔하고 더 높은 릴리즈 빈도로 MEOVV의 커리어 스트림을 넘어섰습니다.",
              "현재 14개 트랙으로 하루 100만 스트림 이상을 기록하는 그룹은 더 많은 트랙을 확보할 수 있는 가장 명확한 근거를 가지고 있습니다.",
            ],
          },
          kpis: [
            "클래스 중앙값 대비 12개월당 릴리즈 트랙 수",
            "활성 사이클 동안의 월간 리스너 수, 496만에서 800만 이상으로",
          ],
        },
      ],
      footnote: "Stream figures are Spotify catalog aggregates as of August 31, 2026 for MEOVV and September 2, 2026 for peers. Chart data covers national Spotify daily charts across 74 live territories, checked September 1, 2026.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 워크스트림",
      philosophy: "본 문서는 퍼포먼스 마케팅 파트너가 실행하는 내용을 범위로 합니다. 이 문서에 포함된 가장 가치 있는 몇 가지 움직임은 다른 곳에서 담당하고 있으며, 여기서는 추정하는 대신 순서가 명확하도록 명시했습니다.",
      intro: "MEOVV는 본 계획이 의존하는 역량을 이미 보유하고 있는 레이블, 글로벌 유통 파트너, 그리고 지역 합작 투자 회사를 통해 운영됩니다. 아래 내용은 신규 인력 충원을 제안하는 것이 아닙니다.",
      subBlocks: [
        {
          label: "A",
          title: "레이블 보유 사항",
          strategy: "발매 일정, A&R 및 타이틀 곡 선정, 실물 앨범 및 패키징, 팬 애플리케이션 및 멤버십 상품, 국내 프로모션 및 방송, 그리고 버티컬 2의 라이브 투어링에 따른 아티스트 스케줄링. 버티컬 4의 카탈로그 성장 논의는 마케팅이 아닌 레이블의 결정 사항입니다.",
          components: {
            heading: "본 계획이 수반하는 의존 사항",
            items: [
              "첫 티켓 판매일의 가용 기간으로, 이는 버티컬 2의 전체 타임라인을 설정합니다.",
              "사전 판매 및 티켓 우선권을 부여하기 위한 멤버십 상품 변경 사항",
              "매진된 응원봉 재입고 및 상품 라인 확장 승인",
              "발매 후 14일간의 성과 분석을 위한 발매 비용 재분배 의향",
            ],
          },
        },
        {
          label: "B",
          title: "글로벌 유통 파트너 보유 사항",
          strategy: "미국 스토어프론트, 이메일 서비스 제공업체, 그리고 미국 소매 관계는 모두 유통 측면에서 운영됩니다. 본 감사에서 가장 빠르게 해결될 수 있는 두 가지 사항은 이미 설치된 ESP에 대한 캡처 활성화, 그리고 스토어를 CD 이상으로 확장하는 것입니다.",
          components: {
            heading: "본 계획이 수반하는 의존 사항",
            items: [
              "기존 ESP에 대한 캡처 유닛 추가를 위한 스토어 접근 권한",
              "미국 스토어프론트의 상품 확장, 그리고 미국으로 배송 가능한 응원봉 경로 확보",
              "첫 EP가 이미 진행했던 전국 단위 독점 판매를 기반으로 다음 사이클의 미국 소매점 입점",
              "미국 소매 계획 확정 전 현행 유통 계약 확인",
            ],
          },
        },
        {
          label: "C",
          title: "Transparent Arts 보유 사항",
          strategy: "미국 및 지역별 시장 출시 전략, 프로모터 및 공연장 관계, 소매 및 팝업 스토어 실행, 라이브 투어링이 목표하는 시장에서의 언론 및 관계 관리, 그리고 MEOVV가 현재 입지가 없는 지역에서의 현장 관리.",
          components: {
            heading: "가장 중요한 부분",
            items: [
              "그룹이 전혀 라이브 경험이 없는 동남아시아 및 호주에서의 프로모터 소개",
              "버티컬 2가 경유하는 시장에서의 소매 및 팝업 스토어 실행",
              "청취는 존재하지만 발자취(영향력)는 없는 미국에서의 언론 및 파트너 관계",
            ],
          },
        },
        {
          label: "D",
          title: "Crowd Control Digital에서 주관",
          strategy: "모든 시장에서의 유료 미디어 집행, 자체 데이터 확보 구축 및 지속적인 운영, 콘텐츠 시스템 및 측정, 본 감사 보고서의 기반이 된 영상 및 성과 분석, 그리고 모든 업무 흐름을 자체 연락처, 티켓 판매 및 스트리밍과 연결하는 보고 계층.",
          components: {
            heading: "운영 범위",
            items: [
              "데이터 확보 인프라, 세분화 및 라이프사이클 메시징",
              "라우팅 계획에 따른 모든 시장에서의 유료 소셜 및 DSP 대상 미디어 집행",
              "콘텐츠 측정, 프랜차이즈 성과 및 발매 후 14일간의 성과 분석",
              "스트리밍, 소셜, 커머스 및 티켓 판매 전반에 걸친 단일 보고 표면",
            ],
          },
        },
      ],
      footnote: "책임 분담은 합의가 아닌 제안 사항입니다. 상업적 조건은 별도로 범위가 정해지며 본 문서에는 포함되지 않습니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "총 12주로 구성되며, 데이터 확보 계층이 먼저 활성화된 후 다른 모든 작업이 진행되도록 순서가 정해집니다. 주차별 날짜는 잠정적이며 레이블의 발매 및 가용성 일정에 따라 조정됩니다. 첫 4주는 의도적으로 화려하지 않은 기간으로, 이후 모든 주의 성과를 축적하는 구성 작업에 할애됩니다.",
      weeks: [
        { index: 1, label: "W1", dates: "9월 14일" },
        { index: 2, label: "W2", dates: "9월 21일" },
        { index: 3, label: "W3", dates: "9월 28일" },
        { index: 4, label: "W4", dates: "10월 5일", highlight: true, note: "데이터 확보 라이브" },
        { index: 5, label: "W5", dates: "10월 12일" },
        { index: 6, label: "W6", dates: "10월 19일" },
        { index: 7, label: "W7", dates: "10월 26일" },
        { index: 8, label: "W8", dates: "11월 2일", highlight: true, note: "운영 중인 프랜차이즈" },
        { index: 9, label: "W9", dates: "11월 9일" },
        { index: 10, label: "W10", dates: "11월 16일" },
        { index: 11, label: "W11", dates: "11월 23일" },
        { index: 12, label: "W12", dates: "11월 30일", highlight: true, note: "1차 판매 준비 완료" },
      ],
      workstreams: [
        {
          name: "자체 보유 오디언스 확보",
          cells: [
            { weekIndex: 1, intensity: "high", label: "감사 접근 권한" },
            { weekIndex: 2, intensity: "high", label: "단위 구축" },
            { weekIndex: 3, intensity: "high", label: "랜딩 페이지" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "데이터 확보 라이브" },
            { weekIndex: 5, intensity: "medium", label: "웰컴 플로우" },
            { weekIndex: 6, intensity: "medium", label: "웰컴 플로우" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", label: "SMS 레이어" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "medium", label: "세분화" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "사전 판매 준비 완료" },
          ],
        },
        {
          name: "라이브 비즈니스 구축",
          cells: [
            { weekIndex: 1, intensity: "low", label: "수요 지도" },
            { weekIndex: 2, intensity: "medium", label: "프로필 등록" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium", label: "시장 후보 목록" },
            { weekIndex: 5, intensity: "high", label: "프로모터 소개" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high", milestone: true, label: "시장 선정" },
            { weekIndex: 8, intensity: "medium", label: "장소 및 날짜" },
            { weekIndex: 9, intensity: "high", label: "티켓팅 설정" },
            { weekIndex: 10, intensity: "high", label: "멤버십 연계" },
            { weekIndex: 11, intensity: "high", label: "발표 준비" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "판매 계획" },
          ],
        },
        {
          name: "콘텐츠 시스템",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "대기열 감사" },
            { weekIndex: 2, intensity: "high", label: "일일 최소치" },
            { weekIndex: 3, intensity: "high", label: "미국 슬롯 온" },
            { weekIndex: 4, intensity: "high", label: "엔드 카드 표준" },
            { weekIndex: 5, intensity: "high", label: "프랜차이즈 1 빌드" },
            { weekIndex: 6, intensity: "high", label: "프랜차이즈 1 라이브" },
            { weekIndex: 7, intensity: "high", label: "프랜차이즈 2 빌드" },
            { weekIndex: 8, intensity: "high", milestone: true, label: "둘 다 실행 중" },
            { weekIndex: 9, intensity: "medium", label: "IG 우선 전환" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium", label: "믹스 재조정" },
            { weekIndex: 12, intensity: "high", label: "발표 에셋" },
          ],
        },
        {
          name: "DSP 및 카탈로그",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "medium", label: "기준선 설정" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 4, intensity: "medium", label: "플레이리스트 매핑" },
            { weekIndex: 5, intensity: "medium", label: "카탈로그를 콘텐츠로 전환" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "Halo 계획" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium", label: "14일 검토 프로세스" },
            { weekIndex: 10, intensity: "low" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium", label: "차기 주기 브리핑" },
          ],
        },
        {
          name: "측정 및 보고",
          cells: [
            { weekIndex: 1, intensity: "high", label: "기준선 고정 완료" },
            { weekIndex: 2, intensity: "medium", label: "추적 시스템 구축" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "대시보드 활성화" },
            { weekIndex: 5, intensity: "low" },
            { weekIndex: 6, intensity: "medium", label: "1차 보고" },
            { weekIndex: 7, intensity: "low" },
            { weekIndex: 8, intensity: "medium", label: "중간 검토" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "low" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "분기 검토" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "접근 권한, 기준선 및 수요 지도",
          items: [
            "미국 스토어프론트, 이메일 서비스 제공업체, 모든 소셜 및 링크 관리 계정에 대한 접근 권한 확보",
            "본 계획이 측정되는 모든 지표에 대한 기준선을 고정하며, 여기에는 첫 번째 파티 연락처에 대한 제로 기준선 포함",
            "청취 지역 및 라이브 이벤트 등록 밀도를 기반으로 시장 수요 지도 구축",
            "기존 콘텐츠 큐를 감사하여 즉시 채울 수 있는 일일 최소 콘텐츠 양 확인",
          ],
        },
        {
          weekIndex: 2,
          title: "캡처 시스템 구축 및 주기 전환",
          items: [
            "스토어에 이미 설치된 ESP에 대해 캡처 유닛을 구축하고, 시장별 동의 처리 적용",
            "TikTok 및 Instagram 전반에 걸쳐 일일 게시물 1개 최소 기준으로 전환하고, 기존 배치들을 큐로 분할",
            "주요 라이브 이벤트 플랫폼 두 곳 모두에서 그룹의 프로필을 확보하고 완성하십시오.",
            "초기부터 캡처, 콘텐츠 및 커머스가 한 곳에서 보고될 수 있도록 추적 시스템 구축",
          ],
        },
        {
          weekIndex: 4,
          title: "캡처 라이브 시작",
          items: [
            "웰컴 시퀀스가 트리거되면서 스토어 및 랜딩 페이지에서 퍼스트 파티 캡처가 라이브됩니다.",
            "모든 신규 고도달 게시물에 엔드 카드 표준을 적용하여 캡처 페이지를 가리킵니다.",
            "4개 플랫폼 전반에 걸쳐 바이오 링크를 재배선하여 각 플랫폼의 최소 한 개의 슬롯에 자체 소유 목적지가 포함되도록 합니다.",
            "리포팅 대시보드가 라이브이며, 첫 주 기준치 대비 주간 리포팅을 진행합니다.",
          ],
        },
        {
          weekIndex: 7,
          title: "시장 선정",
          items: [
            "첫 라이브 시장은 편의성보다는 수요 데이터를 기반으로 선정되었으며, 프로모터와의 대화가 진행 중입니다.",
            "두 번째 콘텐츠 프랜차이즈 구축 중이며, 첫 번째 프랜차이즈는 2주간의 성과 데이터를 기반으로 운영 중입니다.",
            "다음 사이클을 앞두고 레이블과 릴리스 헤일로 계획에 합의했습니다.",
            "캡처 볼륨 및 소스 믹스를 검토했으며, 실적이 저조한 인수 슬롯을 재할당했습니다.",
          ],
        },
        {
          weekIndex: 8,
          title: "두 프랜차이즈 모두 운영 중",
          items: [
            "두 명명된 프랜차이즈가 고정 주간 슬롯에서 라이브되며, 중앙값은 계정 기준치 대비 측정됩니다.",
            "첫 티켓 판매 쇼의 장소 및 날짜가 논의 중입니다.",
            "동의가 명확한 시장에서는 이메일과 함께 SMS 레이어가 추가되었습니다.",
            "모든 KPI에 대한 중간 검토를 실시했으며, 증거에 따라 콘텐츠 믹스를 재조정했습니다.",
          ],
        },
        {
          weekIndex: 12,
          title: "판매 준비 완료",
          items: [
            "퍼스트 파티 리스트가 크기 조정되고 시장별로 세분화되어 사전 판매를 진행할 준비가 되었습니다.",
            "멤버십 사전 판매 메커니즘이 구축 및 엔드 투 엔드로 테스트되었습니다.",
            "공지 에셋이 제작되어 자체 채널 및 라이브 이벤트 플랫폼 전반에 걸쳐 예약되었습니다.",
            "분기 검토: 전환율 변동, 캡처된 연락처, 중앙값 게시물 도달 범위 및 다음 사이클 릴리스 헤일로 계획",
          ],
        },
      ],
      footnote: "날짜는 잠정적이며, 레이블의 발매 및 아티스트 가용성 일정에 따라 조정됩니다. 시퀀싱은 그렇지 않습니다: 도달 범위를 설정하기 전에 콘텐츠가 구축되며, 라이브 시장은 어떠한 약속도 이루어지기 전에 온디맨드 데이터를 기반으로 선정됩니다.",
    },
  ],
};
