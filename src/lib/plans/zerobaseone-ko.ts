import type { StrategyPlanData } from "../plan-context";

export const zerobaseonePlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/zerobaseone/og-image.png",
  partSwitch: {
    currentCode: "AUDIT",
    slug: "zerobaseone-plan-ko",
    code: "PLAN",
    label: "성장 계획",
    eyebrow: "파트 2",
    endTitle: "성장 계획",
    endBlurb: "이러한 조사 결과를 바탕으로 구축된 세 가지 실행 과제: 미국을 위한 자체 데이터 확보 레이어, WAKEONE이 설정하는 날짜에 맞춰 적용 가능한 컴백 준비 완료된 유료 및 크리에이터 시스템, 그리고 세 개의 EP에 걸쳐 첫 주 판매량이 65% 하락한 것에 대한 일본 방어 전략입니다.",
    endCta: "성장 계획 읽기",
  },

  cover: {
    label: "파트 1 / 브랜드 진단",
    title: "ZEROBASEONE",
    subtitle: "제로베이스원이 5인조 시대를 맞이하며 시장 지위, 소비, 팬덤, 영상 및 인프라 측면에서 어디에 서 있는지 측정합니다. 이러한 조사 결과를 바탕으로 구축된 성장 계획은 파트 2에 담겨 있습니다.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/zerobaseone/zerobaseone-hero.jpg",
  },

  sections: [
    // ===================================================================
    // 01. Overview and Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "개요",
      title: "개요 및 목표",
      subtitle: "팬덤은 남았습니다. 앨범 판매 시스템은 그렇지 못했습니다. 그리고 가장 큰 리스닝 시장은 아무것도 판매되지 않았습니다.",
      body: [
        "제로베이스원은 2026년 3월 15일에 새로운 구성으로 재편되었습니다. 다섯 명의 멤버는 WAKEONE 하에서 활동을 이어갔고, 그룹은 5인조로서 첫 번째 기록인 'Ascend-'를 5월 18일에 발매했습니다. 해당 발매의 상업적 성과는 거의 전적으로 하나의 수치로 요약됩니다: 'Never Say Never'의 1,514,370에 비해 514,784의 한터 초동 판매량으로, 66.0% 하락했으며 이는 써클 차트에서도 소수점까지 동일하게 나타납니다. 이 수치는 실제이며 본 진단는 이를 완화하지 않습니다.",
        "It is also not the whole picture, and the rest of the picture is more interesting. Across the same period the Spotify follower base rose 25.8 percent to an all-time high of 1,485,177 and has never once fallen. Followers first crossed above monthly listeners in December 2025, moved back and forth through the first half of 2026, and have held above since mid-July, taking the follower-to-listener ratio from 0.547 at the October 2025 peak to 1.232 today. Ascend- then produced a 1.93x listener multiple off its pre-release base, the largest response to any release in this two-year window, ahead of Never Say Never at 1.57x with nine members and a full promotional cycle behind it. The audience that was going to leave has largely left, and what remains is committing harder and responding to new music more strongly than the larger audience did.",
        "The gap this audit is built around sits somewhere else entirely. The United States is ZEROBASEONE's number one Spotify market at 182,833 monthly listeners, 15.2 percent of the total, and South Korea does not appear in the country table at all. There is no US-owned email address, no pixel on their own membership and merchandise checkout, no YouTube membership tier on 2.12 million subscribers, and the group has never sold a ticket in the United States itself, so no buyer file exists. Every free path a US listener can take routes to a platform somebody else owns. Part One measures that across five dimensions. Part Two is what gets built on it.",
      ],
      supports: {
        heading: "파트 1에서 다루는 내용",
        items: [
          "평판이 아닌 실시간 소비 데이터를 기반으로 계층화된 14개 3, 4, 5세대 보이그룹 동료 그룹과의 시장 지위",
          "소비 및 감소: 시대별 리스너 곡선, 팔로워 전환, 'Ascend-'에 대한 반응, 그리고 발매 간의 최저점",
          "팬덤: 스트리밍 뒤에 있는 시장 및 도시 분포, 그리고 실제 수요가 어디에 있는지에 대한 시사점",
          "영상 인텔리전스: ZEROBASEONE, AND2BLE, CORTIS, BOYNEXTDOOR 영상 169개에 대한 프레임 단위 분석 및 성과 데이터 결합",
          "인프라: 소유한 모든 표면을 실시간으로 검사하여 수집, 추적, 멤버십 및 커머스 진행",
        ],
      },
      goals: {
        heading: "진단 결과",
        items: [
          "팔로워 수가 1,485,177명으로 역대 최고치를 기록했으며, 로스터 변경에도 불구하고 중단 없이 상승했습니다. 비율은 0.547에서 1.232로 이동했습니다.",
          "Ascend-은 2년 내 최저치를 기반으로 1.93배의 리스너 배수를 기록했으며, 이는 지난 2년간 모든 발매작 중 가장 강력한 수치입니다.",
          "미국이 182,833명으로 1위 리스닝 시장입니다. 대한민국은 국가별 테이블에 나타나지 않습니다.",
          "한국 발매작 8개 중 6개가 밀리언셀러였음에도 불구하고, 한국 디지털 싱글 톱텐은 하나도 없었습니다. 기록상 최고의 Circle Digital 순위는 14위입니다.",
          "공식 소셜 미디어에서 접근 가능한 유일한 이메일 수집은 아티스트가 아닌 배포 파트너의 리스트로 작성됩니다.",
          "자체 멤버십 및 상품 결제에는 어떠한 광고 픽셀도 포함되어 있지 않아, 결제하는 모든 멤버는 잠재 고객으로 활용할 수 없습니다.",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Two Years of Spotify Consumption",
          subtitle: "2024년 9월부터의 주간 월간 리스너 및 팔로워 수치. 리스너 수는 각 발매마다 변동합니다. 팔로워 수는 2026년 3월 로스터 변경 기간에도 꾸준히 상승하기만 합니다.",
          series: [
            {
              name: "월간 리스너",
              points: [{ x: "9/4/24", y: 1465376 }, { x: "9/11/24", y: 1623589 }, { x: "9/18/24", y: 1732861 }, { x: "9/25/24", y: 1813592 }, { x: "10/2/24", y: 1736171 }, { x: "10/9/24", y: 1624620 }, { x: "10/16/24", y: 1577523 }, { x: "10/23/24", y: 1526424 }, { x: "2024년 10월 30일", y: 1445746 }, { x: "2024년 11월 6일", y: 1378364 }, { x: "2024년 11월 13일", y: 1296833 }, { x: "2024년 11월 20일", y: 1218583 }, { x: "2024년 11월 27일", y: 1197443 }, { x: "2024년 12월 4일", y: 1277732 }, { x: "2024년 12월 11일", y: 1324863 }, { x: "2024년 12월 18일", y: 1326317 }, { x: "2024년 12월 25일", y: 1315451 }, { x: "2025년 1월 1일", y: 1241363 }, { x: "2025년 1월 8일", y: 1156670 }, { x: "2025년 1월 15일", y: 1135289 }, { x: "2025년 1월 22일", y: 1194218 }, { x: "2025년 1월 29일", y: 1491803 }, { x: "2025년 2월 5일", y: 1792841 }, { x: "2025년 2월 12일", y: 1972633 }, { x: "2025년 2월 19일", y: 2044563 }, { x: "2025년 2월 26일", y: 1958115 }, { x: "2025년 3월 5일", y: 1889237 }, { x: "2025년 3월 12일", y: 1837502 }, { x: "2025년 3월 19일", y: 1824644 }, { x: "2025년 3월 26일", y: 1809141 }, { x: "2025년 4월 2일", y: 1686739 }, { x: "2025년 4월 9일", y: 1582932 }, { x: "2025년 4월 16일", y: 1501124 }, { x: "2025년 4월 23일", y: 1438868 }, { x: "2025년 4월 30일", y: 1406769 }, { x: "2025년 5월 7일", y: 1392385 }, { x: "2025년 5월 14일", y: 1370110 }, { x: "2025년 5월 21일", y: 1345769 }, { x: "2025년 5월 28일", y: 1313856 }, { x: "2025년 6월 4일", y: 1269918 }, { x: "2025년 6월 11일", y: 1218439 }, { x: "2025년 6월 18일", y: 1154785 }, { x: "2025년 6월 25일", y: 1110092 }, { x: "2025년 7월 2일", y: 1091808 }, { x: "2025년 7월 9일", y: 1093725 }, { x: "2025년 7월 16일", y: 1095606 }, { x: "2025년 7월 23일", y: 1092767 }, { x: "2025년 7월 30일", y: 1190676 }, { x: "2025년 8월 6일", y: 1271437 }, { x: "2025년 8월 13일", y: 1367250 }, { x: "2025년 8월 20일", y: 1433450 }, { x: "2025년 8월 27일", y: 1410041 }, { x: "2025년 9월 3일", y: 1388574 }, { x: "2025년 9월 10일", y: 1613563 }, { x: "2025년 9월 17일", y: 1868765 }, { x: "2025년 9월 24일", y: 2048968 }, { x: "2025년 10월 1일", y: 2157590 }, { x: "2025년 10월 8일", y: 2110222 }, { x: "2025년 10월 15일", y: 1938459 }, { x: "2025년 10월 22일", y: 1787007 }, { x: "2025년 10월 29일", y: 1673129 }, { x: "2025년 11월 5일", y: 1581605 }, { x: "2025년 11월 12일", y: 1487463 }, { x: "2025년 11월 19일", y: 1425176 }, { x: "2025년 11월 26일", y: 1343568 }, { x: "2025년 12월 3일", y: 1212945 }, { x: "2025년 12월 10일", y: 1144280 }, { x: "2025년 12월 17일", y: 1093805 }, { x: "2025년 12월 24일", y: 1076423 }, { x: "2025년 12월 31일", y: 1084819 }, { x: "2026년 1월 7일", y: 1080637 }, { x: "2026년 1월 14일", y: 1159149 }, { x: "2026년 1월 21일", y: 1292708 }, { x: "2026년 1월 28일", y: 1387673 }, { x: "2026년 2월 4일", y: 1434084 }, { x: "2026년 2월 11일", y: 1447675 }, { x: "2026년 2월 18일", y: 1422089 }, { x: "2026년 2월 25일", y: 1390201 }, { x: "2026년 3월 4일", y: 1371519 }, { x: "2026년 3월 11일", y: 1328777 }, { x: "2026년 3월 18일", y: 1283682 }, { x: "2026년 3월 25일", y: 1260289 }, { x: "2026년 4월 1일", y: 1249973 }, { x: "2026년 4월 8일", y: 1194880 }, { x: "2026년 4월 15일", y: 1144209 }, { x: "2026년 4월 22일", y: 1103953 }, { x: "2026년 4월 29일", y: 1020296 }, { x: "2026년 5월 6일", y: 1030038 }, { x: "2026년 5월 13일", y: 1032362 }, { x: "2026년 5월 20일", y: 1058134 }, { x: "2026년 5월 27일", y: 1282092 }, { x: "2026년 6월 3일", y: 1648119 }, { x: "2026년 6월 10일", y: 1851358 }, { x: "2026년 6월 17일", y: 1980507 }, { x: "2026년 6월 24일", y: 1928019 }, { x: "2026년 7월 1일", y: 1682453 }, { x: "2026년 7월 8일", y: 1531737 }, { x: "2026년 7월 15일", y: 1423472 }, { x: "2026년 7월 22일", y: 1390299 }, { x: "2026년 7월 29일", y: 1355620 }, { x: "2026년 8월 5일", y: 1320833 }, { x: "2026년 8월 12일", y: 1264543 }, { x: "2026년 8월 19일", y: 1234136 }, { x: "2026년 8월 26일", y: 1226315 }],
            },
            {
              name: "팔로워",
              points: [{ x: "9/4/24", y: 715089 }, { x: "9/11/24", y: 721290 }, { x: "9/18/24", y: 728103 }, { x: "9/25/24", y: 735838 }, { x: "10/2/24", y: 742996 }, { x: "10/9/24", y: 749709 }, { x: "10/16/24", y: 758343 }, { x: "10/23/24", y: 766569 }, { x: "2024년 10월 30일", y: 774348 }, { x: "2024년 11월 6일", y: 782243 }, { x: "2024년 11월 13일", y: 789596 }, { x: "2024년 11월 20일", y: 796582 }, { x: "2024년 11월 27일", y: 803334 }, { x: "2024년 12월 4일", y: 815839 }, { x: "2024년 12월 11일", y: 829706 }, { x: "2024년 12월 18일", y: 839542 }, { x: "2024년 12월 25일", y: 847810 }, { x: "2025년 1월 1일", y: 857009 }, { x: "2025년 1월 8일", y: 865970 }, { x: "2025년 1월 15일", y: 874303 }, { x: "2025년 1월 22일", y: 884601 }, { x: "2025년 1월 29일", y: 897436 }, { x: "2025년 2월 5일", y: 908261 }, { x: "2025년 2월 12일", y: 917283 }, { x: "2025년 2월 19일", y: 925468 }, { x: "2025년 2월 26일", y: 936013 }, { x: "2025년 3월 5일", y: 946057 }, { x: "2025년 3월 12일", y: 954270 }, { x: "2025년 3월 19일", y: 961151 }, { x: "2025년 3월 26일", y: 968392 }, { x: "2025년 4월 2일", y: 975592 }, { x: "2025년 4월 9일", y: 982736 }, { x: "2025년 4월 16일", y: 989546 }, { x: "2025년 4월 23일", y: 996641 }, { x: "2025년 4월 30일", y: 1003064 }, { x: "2025년 5월 7일", y: 1009542 }, { x: "2025년 5월 14일", y: 1015682 }, { x: "2025년 5월 21일", y: 1022835 }, { x: "2025년 5월 28일", y: 1029361 }, { x: "2025년 6월 4일", y: 1035682 }, { x: "2025년 6월 11일", y: 1043558 }, { x: "2025년 6월 18일", y: 1050957 }, { x: "2025년 6월 25일", y: 1056312 }, { x: "2025년 7월 2일", y: 1062113 }, { x: "2025년 7월 9일", y: 1068333 }, { x: "2025년 7월 16일", y: 1075289 }, { x: "2025년 7월 23일", y: 1082137 }, { x: "2025년 7월 30일", y: 1091431 }, { x: "2025년 8월 6일", y: 1100040 }, { x: "2025년 8월 13일", y: 1109306 }, { x: "2025년 8월 20일", y: 1118860 }, { x: "2025년 8월 27일", y: 1129238 }, { x: "2025년 9월 3일", y: 1139489 }, { x: "2025년 9월 10일", y: 1151443 }, { x: "2025년 9월 17일", y: 1163409 }, { x: "2025년 9월 24일", y: 1172913 }, { x: "2025년 10월 1일", y: 1180204 }, { x: "2025년 10월 8일", y: 1189260 }, { x: "2025년 10월 15일", y: 1196565 }, { x: "2025년 10월 22일", y: 1203477 }, { x: "2025년 10월 29일", y: 1210380 }, { x: "2025년 11월 5일", y: 1216569 }, { x: "2025년 11월 12일", y: 1223675 }, { x: "2025년 11월 19일", y: 1229913 }, { x: "2025년 11월 26일", y: 1236800 }, { x: "2025년 12월 3일", y: 1244579 }, { x: "2025년 12월 10일", y: 1258092 }, { x: "2025년 12월 17일", y: 1263852 }, { x: "2025년 12월 24일", y: 1270712 }, { x: "2025년 12월 31일", y: 1280067 }, { x: "2026년 1월 7일", y: 1288382 }, { x: "2026년 1월 14일", y: 1297373 }, { x: "2026년 1월 21일", y: 1306605 }, { x: "2026년 1월 28일", y: 1313936 }, { x: "2026년 2월 4일", y: 1320662 }, { x: "2026년 2월 11일", y: 1326596 }, { x: "2026년 2월 18일", y: 1332759 }, { x: "2026년 2월 25일", y: 1338699 }, { x: "2026년 3월 4일", y: 1344467 }, { x: "2026년 3월 11일", y: 1349696 }, { x: "2026년 3월 18일", y: 1357030 }, { x: "2026년 3월 25일", y: 1365250 }, { x: "2026년 4월 1일", y: 1371909 }, { x: "2026년 4월 8일", y: 1377620 }, { x: "2026년 4월 15일", y: 1382805 }, { x: "2026년 4월 22일", y: 1387766 }, { x: "2026년 4월 29일", y: 1392452 }, { x: "2026년 5월 6일", y: 1397125 }, { x: "2026년 5월 13일", y: 1401530 }, { x: "2026년 5월 20일", y: 1409036 }, { x: "2026년 5월 27일", y: 1417382 }, { x: "2026년 6월 3일", y: 1425925 }, { x: "2026년 6월 10일", y: 1431894 }, { x: "2026년 6월 17일", y: 1437949 }, { x: "2026년 6월 24일", y: 1443258 }, { x: "2026년 7월 1일", y: 1447550 }, { x: "2026년 7월 8일", y: 1452020 }, { x: "2026년 7월 15일", y: 1456943 }, { x: "2026년 7월 22일", y: 1461444 }, { x: "2026년 7월 29일", y: 1466277 }, { x: "2026년 8월 5일", y: 1470291 }, { x: "2026년 8월 12일", y: 1474347 }, { x: "2026년 8월 19일", y: 1478258 }, { x: "2026년 8월 26일", y: 1481705 }],
            },
          ],
          markers: [
            { x: "2025년 2월 26일", label: "BLUE PARADISE" },
            { x: "2025년 9월 3일", label: "NEVER SAY NEVER" },
            { x: "2026년 3월 11일", label: "FIVE MEMBERS" },
            { x: "2026년 5월 20일", label: "ASCEND-" },
          ],
          tall: true,
          source: "Chartmetric, 주간 리딩, 2024년 9월 4일부터 2026년 8월 26일까지",
        },
      ],
      footnote: "All data in this document was pulled 3 September 2026 unless dated otherwise. Sources: Chartmetric, Spotify platform data, Hanteo and Circle published tallies, Oricon weekly archives, Billboard chart archives, platform audience statistics, live inspection of every owned web surface, and a dedicated ZEROBASEONE video intelligence store built for this audit. The growth plan built on these findings is in Part Two.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 내 위치",
      philosophy: "포지셔닝은 실시간 소비량에 기반한 계층화가 이루어질 때만 방어 가능합니다. 15개 그룹, 하나의 핵심 지표, 3개의 계층, 그리고 첫 번째와는 다른 이야기를 들려주는 두 번째 열로 구성됩니다.",
      intro: "The comparison set spans the third, fourth and fifth-generation boy-group market: the acts ZEROBASEONE shares release windows, retail shelves and chart weeks with. Spotify monthly listeners (Chartmetric, 31 August 2026) is the spine. The follower-to-listener ratio is the second column, and it is where the read changes: on scale ZEROBASEONE sits eleventh of fifteen, on conversion it sits eighth, dead in the middle of a field that includes every major-label act in the lane.",
      subBlocks: [
        {
          label: "A",
          title: "계층 지도",
          featureTiersHeading: "월간 리스너 수 기준 계층화된 비교 대상군",
          featureTiers: [
            {
              label: "Tier 1 / 글로벌 스트리밍 엔진",
              artists: [
                {
                  name: "CORTIS",
                  monthlyListeners: "12.9M 월간 리스너",
                  instagram: "5.41M Spotify Followers / ratio 0.419",
                  reference: "HYBE, 2025년 8월 데뷔. 9개월 내 Billboard 200 3위 기록",
                  note: "해당 세트에서 가장 낮은 비율과 가장 높은 리스너 수를 기록하며, 이는 최고 속도로 작동하는 발견 엔진의 모습을 보여줍니다. 첫 북미 투어의 모든 공연이 매진되었습니다. 이들은 신인 아티스트가 12개월 안에 미국 내 사업을 구축할 수 있다는 가장 명확한 증거이며, 그 격차를 가장 분명하게 보여주는 척도입니다.",
                },
                {
                  name: "Stray Kids",
                  monthlyListeners: "11.0M 월간 리스너",
                  instagram: "24.4M Spotify Followers / ratio 2.210",
                  reference: "JYP와 미국 내 Republic 파트너십. 9개 앨범으로 Billboard 200 1위 9회 달성",
                  note: "해당 카테고리의 최고 수준이며 현실적인 단기 비교 대상은 아닙니다. 이들을 포함시킨 이유는 미국 내 스타디움 투어가 이 장르에 대한 미국 내 수요가 제대로 판매될 경우 아레나 규모임을 입증하는 물량 증거이기 때문입니다.",
                },
                {
                  name: "ENHYPEN",
                  monthlyListeners: "9.88M 월간 리스너",
                  instagram: "15.7M Spotify Followers / ratio 1.593",
                  reference: "HYBE와 Geffen의 미국 파트너십. 2026년 9월 첫 빌보드 200 1위 달성",
                  note: "98,000 유닛으로 미국 1위를 달성했으나 핫 100에는 진입한 적이 없으며, 이는 스트리밍 중심보다는 앨범 중심 팬덤의 특성을 보여줍니다. 본 세트에서 ZEROBASEONE의 프로필과 가장 유사한 구조적 유사성을 보이며, 몇 년 앞선 상태입니다.",
                },
              ],
            },
            {
              label: "티어 2 / 중견 규모 확립",
              artists: [
                {
                  name: "ATEEZ",
                  monthlyListeners: "월간 리스너 725만 명",
                  instagram: "6.30M Spotify Followers / ratio 0.870",
                  reference: "KQ와 RCA-Legacy의 미국 파트너십. 빌보드 200 1위 3회, 미국 스타디움 공연 8회",
                  note: "투어링을 우선하고 차트 성적을 두 번째로 삼아 미국 사업을 구축했으며, 일회성 페스티벌 출연보다는 다년간의 프로모터 파트너십을 통해 이루어졌습니다. 아시아 아레나급 아티스트를 미국 아티스트로 전환하는 템플릿입니다.",
                },
                {
                  name: "TOMORROW X TOGETHER",
                  monthlyListeners: "월간 리스너 637만 명",
                  instagram: "13.2M Spotify Followers / ratio 2.078",
                  reference: "HYBE와 Republic의 미국 파트너십. 매디슨 스퀘어 가든 헤드라이너, 롤라팔루자 헤드라이너",
                  note: "ZEROBASEONE과 함께 KCON LA 2026 헤드라이너 라인업을 공유하며 리스너 수에서 5배 앞서 있는데, 이는 페스티벌 출연이 시장 지위에 대해 무엇을 시사하고 시사하지 않는지를 보여주는 유용한 척도입니다.",
                },
                {
                  name: "BOYNEXTDOOR",
                  monthlyListeners: "월간 리스너 326만 명",
                  instagram: "2.60M Spotify Followers / ratio 0.797",
                  reference: "HYBE 산하 KOZ. 빌보드 200 연속 6회 진입, 162위에서 16위로 상승 추세",
                  note: "본 세트에서 가장 교훈적인 동료입니다. 첫 주 판매량 1,085,715건 대 514,784건으로 월간 리스너의 약 2.7배이며, 빌보드 200 상승 추세와 2026년 10월 판매 개시 예정인 첫 북미 극장 투어를 진행 중입니다. 이들은 본 진단에서 권장하는 전략을, ZEROBASEONE이 18개월 전에 보유했던 위치에서 실행하고 있습니다.",
                },
                {
                  name: "RIIZE",
                  monthlyListeners: "월간 리스너 276만 명",
                  instagram: "1.82M Spotify Followers / ratio 0.661",
                  reference: "SM. 400만 장 이상 판매된 앨범 다수 보유, 빌보드 200 진입 기록 없음",
                  note: "미국 차트에서의 어떠한 존재감도 없이 4번의 밀리언셀러를 기록했습니다. 2025년 11월 취소된 미국 아레나 공연은 자체적인 팬덤 없이 라이브 중심 전략을 시도했을 때 발생할 수 있는 경고 사례입니다.",
                },
                {
                  name: "TWS",
                  monthlyListeners: "월간 리스너 240만 명",
                  instagram: "1.39M Spotify Followers / ratio 0.579",
                  reference: "HYBE 산하 Pledis. 미국 헤드라인 투어 없음, 빌보드 200 진입 없음",
                  note: "ZEROBASEONE의 리스너 기반과 비교했을 때 미국 차트에서의 전혀 존재감이 없다는 점은, 스트리밍 도달 범위와 차트 전환율이 별개의 문제임을 가장 명확하게 보여주는 사례입니다.",
                },
                {
                  name: "NCT DREAM",
                  monthlyListeners: "월간 리스너 202만 명",
                  instagram: "8.45M Spotify Followers / ratio 4.181",
                  reference: "SM. 해당 세트에서 두 번째로 높은 비율",
                  note: "월간 리스너 1명당 4명의 팔로워는 깊은 역사와 조용한 카탈로그를 가진 팬덤의 특징입니다. 리스너 회복이 정체될 경우 ZEROBASEONE의 현재 비율이 향하는 방향입니다.",
                },
              ],
            },
            {
              label: "티어 3 / ZEROBASEONE의 위치",
              artists: [
                {
                  name: "ZEROBASEONE",
                  monthlyListeners: "월간 리스너 121만 명",
                  instagram: "1.49M Spotify Followers / ratio 1.232",
                  reference: "CJ ENM 산하 WAKEONE. 리스너 수 15개 중 11위, 비율 8위",
                  note: "해당 세트에서 팔로워 수가 월간 리스너 수를 초과하는 9개 그룹 중 하나이며, 매일 팔로워를 추가하고 있는 8개 그룹 중 하나입니다. 규모 면에서는 하위 3분의 1에 속합니다. 이미 보유하고 있는 팬덤의 건전성 측면에서는, 자신들보다 몇 배나 큰 HYBE, SM, JYP 소속 아티스트들을 포함하는 분야에서 중간 수준에 위치합니다.",
                },
                {
                  name: "NCT WISH",
                  monthlyListeners: "월간 리스너 76만 9천 명",
                  instagram: "916K Spotify Followers / ratio 1.192",
                  reference: "일본 Avex와 함께하는 SM. 첫 주 183만 장 판매 및 어떠한 빌보드 차트 진입도 없음",
                  note: "리스너의 64% 수준에서 ZEROBASEONE과 거의 동일한 비율을 보이며, 첫 주 판매량은 3.5배 더 많습니다. 한국 음반 판매량과 해외 스트리밍이 별개의 사업임을 해당 세트에서 가장 명확하게 보여주는 사례입니다.",
                },
                {
                  name: "PLAVE",
                  monthlyListeners: "월간 리스너 525천 명",
                  instagram: "442K Spotify Followers / ratio 0.841",
                  reference: "VLAST. 가상 그룹, 빌보드 200 145위, 미국 공연 1회 개최",
                  note: "ZEROBASEONE보다 낮은 리스너 기반을 가진 백만 장 판매 가상 아티스트로, 전체 카테고리에 걸쳐 한국 판매 순위와 글로벌 스트리밍 순위 간의 격차가 얼마나 커졌는지 보여주기 위해 포함되었습니다.",
                },
                {
                  name: "xikers",
                  monthlyListeners: "월간 리스너 389천 명",
                  instagram: "594K Spotify Followers / ratio 1.526",
                  reference: "KQ. 미국 극장 투어 2회, 빌보드 200 최고 73위",
                  note: "ZEROBASEONE 리스너 기반의 1/3 규모와 완료된 미국 투어 2회로, 미국 라이브 비즈니스가 스트리밍 규모에 의해 제한되지 않는다는 것을 가장 명확하게 보여주는 증거입니다.",
                },
              ],
            },
          ],
        },
        {
          label: "B",
          title: "실제 격차는 어디에 있는가",
          objective: "규모의 문제와 전환의 문제를 분리해야 합니다. 왜냐하면 각각 다른 자금이 필요하기 때문입니다.",
          strategy: "단일 순위로는 숨겨지는 방식을 두 열과 필드 분할을 통해 읽어보십시오. 월간 리스너 수에서 ZEROBASEONE은 15개 그룹 중 11위이며, 상위 티어와의 거리가 큽니다. 팔로워 대비 리스너 비율에서는 같은 그룹이 15개 그룹 중 8위를 차지하며, 리스너 기반이 2배에서 6배에 달하는 ATEEZ, BOYNEXTDOOR, RIIZE, TWS보다 앞서 있습니다. 전환 메커니즘은 작동하고 있습니다. 작동하지 않는 것은 퍼널의 상단이며, 퍼널의 상단은 두 문제 중 공격하기에 더 저렴한 문제입니다.",
          components: {
            heading: "파트 2를 구성하는 세 가지 숫자",
            items: [
              "리스너 1,205,605명, 15개 중 11위. 이는 도달 범위 문제이며, 도달 범위는 구매 가능합니다.",
              "비율 1.232, 15개 중 8위이며 상승세입니다. 이는 동기 부여 문제가 아닙니다. 도달하는 누구든 전환됩니다.",
              "미국 182,833명의 리스너로, 가장 큰 단일 시장이며, 자체적인 확보 수단이 없고 티켓 판매도 이루어진 적이 없습니다.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "월간 리스너, 15개 그룹 비교 세트",
              subtitle: "Chartmetric, 2026년 8월 31일. ATEEZ와 BOYNEXTDOOR는 9월 1일까지 이어집니다.",
              unit: "월간 리스너",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "CORTIS", y: 12905186 },
                    { x: "Stray Kids", y: 11049887 },
                    { x: "ENHYPEN", y: 9880422 },
                    { x: "ATEEZ", y: 7247467 },
                    { x: "TOMORROW X TOGETHER", y: 6373110 },
                    { x: "SEVENTEEN", y: 4700776 },
                    { x: "BOYNEXTDOOR", y: 3257053 },
                    { x: "RIIZE", y: 2758151 },
                    { x: "TWS", y: 2404838 },
                    { x: "NCT DREAM", y: 2020543 },
                    { x: "ZEROBASEONE", y: 1205605 },
                    { x: "NCT WISH", y: 768609 },
                    { x: "PLAVE", y: 524802 },
                    { x: "THE BOYZ", y: 471629 },
                    { x: "xikers", y: 389047 },
                  ],
                },
              ],
              highlightX: ["ZEROBASEONE"],
              source: "Chartmetric",
            },
            {
              kind: "hbars",
              title: "팔로워 대 월간 리스너 비율, 동일 15개 그룹",
              subtitle: "Spotify followers divided by monthly listeners. Higher means more of the audience that arrives commits. ZEROBASEONE sits at the exact midpoint of the field.",
              unit: "리스너당 팔로워 수",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "THE BOYZ", y: 6.24 },
                    { x: "NCT DREAM", y: 4.181 },
                    { x: "SEVENTEEN", y: 3.011 },
                    { x: "Stray Kids", y: 2.21 },
                    { x: "TOMORROW X TOGETHER", y: 2.078 },
                    { x: "ENHYPEN", y: 1.593 },
                    { x: "xikers", y: 1.526 },
                    { x: "ZEROBASEONE", y: 1.232 },
                    { x: "NCT WISH", y: 1.192 },
                    { x: "ATEEZ", y: 0.87 },
                    { x: "PLAVE", y: 0.841 },
                    { x: "BOYNEXTDOOR", y: 0.797 },
                    { x: "RIIZE", y: 0.661 },
                    { x: "TWS", y: 0.579 },
                    { x: "CORTIS", y: 0.419 },
                  ],
                },
              ],
              highlightX: ["ZEROBASEONE"],
              note: "높은 비율은 건강한 팬덤과 조용한 발견 엔진을 의미합니다. 낮은 비율은 그 반대입니다. 0.419의 CORTIS와 6.24의 THE BOYZ가 해당 지표의 양극단을 보여줍니다.",
              source: "Chartmetric, 2026년 8월 31일",
            },
          ],
        },
      ],
      footnote: "SEVENTEEN은 두 개의 Chartmetric 기록으로 해결됩니다. Pledis 그룹 기록(cm 4787)이 전체에 사용됩니다. 대체 기록에서는 ZEROBASEONE이 비율에서 15개 그룹 중 8위가 아닌 7위로 순위가 매겨지므로, 중앙값 배치는 견고하며 정확한 순위는 중요하지 않습니다. THE BOYZ는 해당 분야의 완전성을 위해 포함되었지만, 2026년 4월 계약 판결에 따른 해결되지 않은 레이블 전환 중에 있어, 그들의 수치는 안정적인 비교보다는 변화 중인 아티스트의 스냅샷입니다.",
    },

    // ===================================================================
    // 03. Consumption and Decay
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비와 감소",
      philosophy: "첫 주 수치는 하루치 수요입니다. 감소 곡선이 비즈니스입니다. 네 번의 릴리스 주기를 살펴보면, 5인조 시대가 네 번의 주기 중 가장 강력한 스트리밍 성과를 보였습니다.",
      intro: "이 섹션은 2026년에 발생했으며 일반적으로 하나로 보고되는 두 가지를 분리합니다. 한국 음반 판매량은 크게 하락했습니다. 글로벌 스트리밍은 그렇지 않았습니다. 두 가지에 대한 증거는 일일 Chartmetric 시리즈와 발표된 Hanteo, Circle 및 Oricon 집계에서 발췌하여 아래에 제시합니다.",
      subBlocks: [
        {
          label: "A",
          title: "팔로워 전환",
          objective: "팬이 능동적으로 선택해야 하는 단일 지표를 사용하여 로스터 변경을 통해 청중이 어떻게 행동했는지 파악합니다.",
          strategy: "A monthly listener is a passive count. A Spotify follower is a deliberate act, and it is the closest free proxy the platform gives for intent. Across the two years to 31 August 2026 the follower count moved from 712,485 to 1,485,177 and never declined. It rose 25.8 percent in the eleven months after the October 2025 listener peak, through the December contract-extension announcement, through the January departure confirmation, through the March final show and through the May release. The line does not register the event at all.",
          components: {
            heading: "전환의 의미",
            items: [
              "팔로워 수는 2025년 12월 일일 집계에서 처음으로 월간 리스너 수를 초과했으며, 2026년 상반기 동안 오르내리다가 2026년 7월 15일부터 계속해서 그 위를 유지하고 있습니다. 현재 비율은 1.232이며, 리스너 최고치 당시에는 0.547이었습니다.",
              "이것만으로는 좋은 수치가 아닙니다. 리스너 감소로 인한 비율 상승은 경고 신호이며, 이 움직임의 절반이 정확히 그렇습니다.",
              "다음 블록과 결합하면 좋은 수치인데, 이는 동일한 청중이 해당 기간 동안 가장 큰 릴리스 반응을 보였기 때문입니다.",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "월별 팔로워 대 월간 리스너 비율",
              subtitle: "매월 1일 기준 팔로워 수를 월간 리스너 수로 나눈 값입니다. 이 월별 샘플링에서는 2026년 1월에 처음으로 1.0을 돌파하며, 일일 시리즈에서는 7월 15일부터 지속적으로 1.0 이상을 유지하고 있습니다.",
              series: [
                {
                  name: "비율",
                  points: [{ x: "24년 9월", y: 0.518 }, { x: "24년 10월", y: 0.424 }, { x: "24년 11월", y: 0.547 }, { x: "24년 12월", y: 0.654 }, { x: "25년 1월", y: 0.690 }, { x: "25년 2월", y: 0.554 }, { x: "25년 3월", y: 0.491 }, { x: "25년 4월", y: 0.572 }, { x: "25년 5월", y: 0.714 }, { x: "25년 6월", y: 0.796 }, { x: "25년 7월", y: 0.971 }, { x: "25년 8월", y: 0.902 }, { x: "25년 9월", y: 0.824 }, { x: "25년 10월", y: 0.547 }, { x: "25년 11월", y: 0.734 }, { x: "25년 12월", y: 0.986 }, { x: "26년 1월", y: 1.180 }, { x: "26년 2월", y: 0.929 }, { x: "26년 3월", y: 0.972 }, { x: "26년 4월", y: 1.098 }, { x: "5월 26일", y: 1.367 }, { x: "6월 26일", y: 0.897 }, { x: "7월 26일", y: 0.860 }, { x: "8월 26일", y: 1.088 }],
                },
              ],
              markers: [
                { x: "25년 10월", label: "청취자 최고치" },
                { x: "26년 3월", label: "FIVE MEMBERS" },
                { x: "5월 26일", label: "ASCEND-" },
              ],
              source: "Chartmetric 일별 시리즈, 월별 집계",
            },
          ],
        },
        {
          label: "B",
          title: "Ascend-에 대한 반응",
          objective: "5인조 앨범이 실제로 기록한 성과를 이전 세 번의 발매와 비교하여 측정하십시오.",
          strategy: "각 발매는 동일한 방식으로 측정됩니다: 발매일의 월간 청취자 수, 이후 사이클에서의 최고치, 그리고 그 사이의 배수입니다. 이 측정 기준에 따르면 Ascend-는 해당 기간 동안 가장 강력한 발매입니다. 32일 만에 1,033,771명의 기본 청취자 수를 1,995,324명으로 끌어올렸으며, 이는 1.93배의 배수입니다. 9인조로 발매되어 완전한 한국 프로모션 사이클과 1,514,370명의 첫 주 기록을 뒤로하고 발매된 Never Say Never는 1.57배를 기록했습니다. Blue Paradise와 Re-Flow는 각각 1.00배와 1.03배로 거의 성과를 내지 못했습니다. 판매량의 3분의 1을 기록한 앨범이 네 개 중 가장 큰 스트리밍 반응을 이끌어냈습니다.",
          components: {
            heading: "주의사항을 첨부하여 읽으십시오",
            items: [
              "Ascend-의 기본 청취자 수는 네 개 중 가장 낮았으며, 낮은 기본 수치는 배수를 돋보이게 합니다. 1,995,324명의 절대적인 최고치는 여전히 9인조로 기록된 역대 최고치에 8% 이내로 근접했습니다.",
              "정점 이후의 감소세는 현실입니다: 주당 4.72%로, 네 개 사이클 중 두 번째로 가파른 감소세입니다.",
              "중요한 것은 바닥입니다. 청취자 수는 2026년 4월 30일, 발매 직전에 1,018,904명으로 최저치를 기록했습니다. 현재 1,205,605명은 네 달 후인 현재 시점에서 해당 바닥보다 18.3% 높은 수치입니다.",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "시대별 발매 반응",
              subtitle: "발매일의 월간 청취자 수와 이후 사이클에서의 최고치 비교.",
              unit: "월간 리스너",
              series: [
                {
                  name: "발매 시점 기준 청취자 수",
                  points: [
                    { x: "Blue Paradise", y: 1977046 },
                    { x: "Never Say Never", y: 1378004 },
                    { x: "Re-Flow", y: 1422699 },
                    { x: "Ascend- (5인조)", y: 1033771 },
                  ],
                },
                {
                  name: "사이클 정점",
                  points: [
                    { x: "Blue Paradise", y: 1977046 },
                    { x: "Never Say Never", y: 2157590 },
                    { x: "Re-Flow", y: 1466737 },
                    { x: "Ascend- (5인조)", y: 1995324 },
                  ],
                },
              ],
              note: "배수: Blue Paradise 1.00배, Never Say Never 1.57배, Re-Flow 1.03배, Ascend- 1.93배.",
              source: "Chartmetric 일간 시리즈",
            },
            {
              kind: "bars",
              title: "주간 하락률, 정점에서 바닥까지",
              subtitle: "각 사이클의 리스너 정점에서 다음 바닥까지의 복합 주간 하락률.",
              unit: "주당 퍼센트",
              series: [
                {
                  name: "주간 하락",
                  points: [
                    { x: "Blue Paradise", y: 3.13 },
                    { x: "Never Say Never", y: 5.7 },
                    { x: "Re-Flow", y: 3.1 },
                    { x: "Ascend- (5인조)", y: 4.72 },
                  ],
                },
              ],
              note: "낮을수록 좋습니다. 9인조 Never Say Never 사이클은 가장 큰 홍보 규모에도 불구하고 네 가지 중 가장 빠르게 하락했습니다.",
              source: "Chartmetric 일간 시리즈",
            },
          ],
        },
        {
          label: "C",
          title: "실물 음반 판매량 조정",
          objective: "앨범 하락세를 정확히 명시하고 위치를 파악하십시오.",
          strategy: "2023년 7월 데뷔부터 2025년 9월 Never Say Never까지 6개의 연속 앨범이 첫 주에 백만 장 이상 판매되었습니다. 이 기록은 2026년 2월 Re-Flow에서 66,921장으로 종료되었으며, 이는 다른 형식과 규모로 발매된 단일 앨범입니다. 5인조 체제 첫 앨범인 Ascend-는 Hanteo에서 514,784장을 기록한 반면 Never Say Never는 1,514,370장을 기록하여 66.0% 하락했습니다. Circle은 동일한 사이클을 1,459,415장에서 495,980장으로 기록했으며, 이는 소수점까지 66.0% 하락한 수치입니다. 두 개의 독립적인 차트가 동일한 이야기를 전달한다는 것은 해당 수치가 보고상의 오류가 아닌 실제 수요 신호임을 강력하게 시사합니다.",
          components: {
            heading: "앨범 수치가 말해주지 않는 세 가지",
            items: [
              "팬들이 떠났다는 것을 말해주지 않습니다. 팔로워 시리즈는 같은 기간 동안 중단 없이 증가했습니다.",
              "음악이 기대 이하의 성과를 냈다는 것을 말해주지 않습니다. 동일한 음반이 해당 기간 동안 가장 높은 스트리밍 배수를 기록했습니다.",
              "9인조 포토카드 경제에 기반한 첫 주 판매량이 5인조 체제에서는 유지되지 않는다는 것을 말해주며, 이는 마케팅 실패라기보다는 산술적인 결과입니다.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Hanteo 초동 앨범 판매량",
              subtitle: "데뷔부터 현재까지 모든 한국 발매 음반. Re-Flow는 단일 앨범이며 미니 앨범 비교 대상에서 제외됩니다.",
              unit: "장, 초동",
              series: [
                {
                  name: "첫 주",
                  points: [
                    { x: "Youth in the Shade", y: 1822028 },
                    { x: "멜팅 포인트", y: 2131352 },
                    { x: "유 해드 미 앳 헬로", y: 1353109 },
                    { x: "시네마 파라다이스", y: 1112444 },
                    { x: "Blue Paradise", y: 1252315 },
                    { x: "Never Say Never", y: 1514370 },
                    { x: "Re-Flow", y: 66921 },
                    { x: "어센드-", y: 514784 },
                  ],
                },
              ],
              highlightX: ["어센드-"],
              note: "2026년 5월 25일 기준 한국과 일본의 누적 앨범 판매량이 천만 장을 돌파했습니다.",
              source: "한터차트에서 집계한 수치입니다. 세 건의 수치는 동시대의 편집 소스를 포함하며, 네버 세이 네버를 포함한 다섯 건은 써클차트와 교차 확인된 팬 판매 추적기에서 나온 것으로 2차 자료에 해당합니다.",
            },
            {
              kind: "bars",
              title: "오리콘 주간 초동 판매량, 일본 발매반",
              subtitle: "일본 EP 3개와 데뷔 싱글입니다. 로스터 변경 이전에 시작된 추세에서 19개월 동안 65% 하락했습니다.",
              unit: "장, 초동",
              series: [
                {
                  name: "오리콘 주간 초동",
                  points: [
                    { x: "유라 유라 (3월 24일)", y: 302315 },
                    { x: "프레젠트 (1월 25일)", y: 257157 },
                    { x: "아이코닉 (10월 25일)", y: 179648 },
                    { x: "카이키러브 (8월 26일)", y: 90640 },
                  ],
                },
              ],
              note: "카이키러브는 90,640장으로 오리콘 주간 1위를 차지했습니다. 아이코닉은 그보다 두 배 가까이 판매했음에도 1위를 놓쳤습니다. 이 시장에서는 차트 순위와 수요가 분리되었습니다.",
              source: "오리콘 주간 앨범 아카이브",
            },
          ],
        },
        {
          label: "D",
          title: "카탈로그와 에디토리얼 포지션",
          objective: "릴리즈 사이에 카탈로그가 어떤 역할을 하는지, 그리고 얼마나 많은 양이 프로그래밍된 청중에게 도달하는지 파악해야 합니다.",
          strategy: "Eighty-one catalogue rows carry 831,113,707 cumulative Spotify streams across roughly 75 distinct songs. The current rate tells a different story from the cumulative total: TOP 5, the Ascend- title track, sits twentieth on cumulative streams and leads every track with a current weekly rate at 276,476, with the highest track popularity in the catalogue at 67. The debut single In Bloom, three years old, still pulls 122,148 a week. That is catalogue behaviour rather than promotion, and it is worth investing behind. What is not there is programming. Current Spotify editorial support runs to eight placement rows across five distinct playlists reaching 236,366 people, and every one of the five is a K-pop playlist. The artist-level counter reports a wider historic editorial footprint on a different scope; the current-placement endpoint is the one that describes what is programmed today. There is no general-pop editorial placement anywhere in the catalogue.",
          components: {
            heading: "그 모든 것의 근간이 되는 구조적 사실",
            items: [
              "한국 발매 8건과 톱 10 한국 디지털 싱글은 없습니다. 기록상 가장 높은 써클 디지털 순위는 아이코닉의 14위이며, 그 뒤를 이어 TOP 5가 15위를 기록했습니다.",
              "데뷔곡인 In Bloom은 38위, Feel the Pop은 82위, Crush는 88위, Doctor! Doctor!는 107위를 기록했습니다.",
              "수백만 장의 앨범을 판매하지만 국내 디지털 차트에서 순위를 기록하지 못하는 그룹은 대중에게 노래가 도달하는 것보다 팬덤에 의존하는 비즈니스 구조를 가진 그룹입니다. 이것이 바로 한 줄로 요약되는 전략적 문제이며, 동료 그룹에 비해 미국 시장이 더 중요한 이유이기도 합니다.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "현재 주간 스트리밍 비율, 인기 카탈로그 트랙",
              subtitle: "Weekly Spotify streams as of the pull, not cumulative totals. The newest record is doing the most work.",
              unit: "주당 스트리밍 수",
              series: [
                {
                  name: "주간 스트리밍 수",
                  points: [
                    { x: "TOP 5 (2026)", y: 276476 },
                    { x: "Doctor! Doctor! (2025)", y: 139690 },
                    { x: "In Bloom (2023)", y: 122148 },
                    { x: "ICONIK (2025)", y: 95731 },
                    { x: "BLUE (2025)", y: 56232 },
                    { x: "GOOD SO BAD (2024)", y: 54777 },
                    { x: "Feel the POP (2024)", y: 54304 },
                    { x: "SWEAT (2024)", y: 50101 },
                    { x: "CRUSH (2023)", y: 32183 },
                    { x: "Always (2023)", y: 13361 },
                  ],
                },
              ],
              highlightX: ["TOP 5 (2026)"],
              source: "Chartmetric 트랙 통계",
            },
          ],
        },
      ],
      footnote: "일별 데이터의 차트 적용 범위 공백은 0이 아닌 공백으로 처리됩니다. 리스너 시리즈의 730개 일별 데이터 중 208개와 팔로워 시리즈의 730개 중 237개는 제공업체에서 보간되었습니다. 위에 언급된 모든 발매 최고점 및 주기 최저점은 보간되지 않은 수치이며; 현재 두 개의 수치인 1,205,605명의 리스너와 1,485,177명의 팔로워는 2026년 8월 31일에 대한 제공업체의 보간된 값입니다. 배수 및 감소율은 보고된 수치가 아닌 출처 데이터에 대한 산술 계산입니다.",
    },

    // ===================================================================
    // 04. Audience
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "오디언스",
      title: "오디언스 및 시장",
      thesis: "미국은 청취 시장 1위이며, 한국은 해당 표에 전혀 나타나지 않습니다. 이 단 하나의 사실만으로도 전체 계획을 재편해야 합니다.",
      intro: "Spotify market distribution, Chartmetric, 3 September 2026. The eleven countries the platform reports account for 825,219 listeners, roughly 68 percent of the 1.21 million total, so this is the visible majority rather than the complete picture. Every country figure is a platform estimate.",
      metrosLabel: "주요 청취 도시",
      metros: [
        { name: "싱가포르", tier: "primary" },
        { name: "쿠알라룸푸르", tier: "primary" },
        { name: "타이베이", tier: "primary" },
        { name: "방콕", tier: "primary" },
        { name: "도쿄", tier: "secondary" },
        { name: "자카르타", tier: "secondary" },
        { name: "케손 시티", tier: "secondary" },
        { name: "반둥", tier: "secondary" },
        { name: "시드니", tier: "secondary" },
        { name: "로스앤젤레스", tier: "secondary" },
      ],
      psychographics: [
        {
          label: "국가별 표가 말하는 것",
          items: [
            "미국 182,833명, 전체의 15.2%로, 150,466명의 말레이시아를 훨씬 앞서는 최대 단일 시장입니다.",
            "동남아시아를 합하면 미국보다 큽니다: 말레이시아, 인도네시아, 필리핀, 태국, 싱가포르 5개 시장의 총 청취자는 426,949명입니다.",
            "일본은 매출 기준 두 번째 상업 시장임에도 불구하고 40,956명으로 7위를 차지했으며, 일본 내 4개 릴리스와 RIAJ 인증을 보유하고 있습니다.",
            "South Korea does not appear in the reported country list at all, which is consistent with a Korean audience that consumes on domestic platforms rather than Spotify.",
          ],
        },
        {
          label: "도시별 표가 말하는 것",
          items: [
            "서울은 없으며, 로스앤젤레스는 9위 위에 없습니다. 상위 4개 도시는 싱가포르, 쿠알라룸푸르, 타이베이, 방콕입니다.",
            "미국은 가장 큰 나라이며, 그 최대 도시는 9,870개로 10위를 차지합니다. 이는 미국 내 청취가 한 도시권에 집중되기보다는 분산되어 있음을 의미합니다.",
            "분산된 전국 단위의 팬층은 라이브 공연으로 도달하기는 어렵지만, 유료 미디어와 자체 채널로는 더 쉽게 도달할 수 있습니다. 이는 파트 투의 순서 구성에 대한 직접적인 근거가 됩니다.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "인스타그램, 틱톡, X, 유튜브에 걸쳐 1,320만 명의 팔로워가 아티스트가 소유한 별도의 수집 지점 없이 퍼널 상단에 위치해 있습니다.",
          platforms: ["인스타그램 464만 명", "틱톡 530만 명", "유튜브 212만 명", "X 110만 명"],
          implication: "도달 범위가 제약이 아닙니다. 소유권이 제약입니다. 이 계정들로부터의 모든 무료 경로는 다른 누군가가 통제하는 플랫폼으로 이어집니다.",
        },
        {
          behavior: "채널 멤버십이 비활성화된 상태에서 3,023개의 영상에 걸쳐 누적 10억 회의 유튜브 조회수를 기록했습니다.",
          platforms: ["유튜브"],
          implication: "이미 구축되고, 이미 채워졌으며, 현재 아무런 수익을 창출하지 못하고 있는 수익 및 신원 확인 표면입니다.",
        },
        {
          behavior: "글로벌 팬클럽은 유료이며, 가격은 22 미국 달러이고, 한국 애플리케이션 뒤에 위치합니다.",
          platforms: ["Mnet Plus"],
          implication: "무료 등급은 어디에도 존재하지 않습니다. 미국 팬이 이 아티스트에게 자신을 알릴 수 있는 유일한 방법은 22달러를 지불하고 한국 앱을 먼저 설치하는 것입니다.",
        },
      ],
      barriers: [
        {
          barrier: "미국 소유의 이메일 또는 전화번호 목록은 존재하지 않습니다. 공식 소셜 미디어에서 도달 가능한 유일한 수집 경로는 배포 파트너의 목록으로 수집되는 릴리스 스마트 링크입니다.",
          response: "무료이며 미국 전용 수집 등급은 가장 저렴하게 이용 가능한 단일 해결책이며, WAKEONE이 한국 측의 어떠한 관행도 변경할 필요가 없습니다.",
        },
        {
          barrier: "한국의 개인정보 보호 관행은 번들 가입을 제약하고 한국 레이블이 직접 목록보다는 팬 플랫폼으로 향하도록 유도하기 때문에, 한국 측이 현재와 같이 구성된 것입니다.",
          response: "미국 팬만을 위한 수집 시스템을 구축하고, 한국 팬들은 이미 사용 중인 플랫폼에 그대로 두십시오. 두 그룹이 시스템을 공유할 필요는 없습니다.",
        },
        {
          barrier: "이 그룹은 미국에서 티켓을 판매한 적이 없습니다. 3년간의 미국 내 6번의 모든 등장은 남부 캘리포니아에서 열린 제3자 주최 페스티벌 또는 쇼케이스 무대였습니다.",
          response: "유사 타겟 오디언스를 구축할 수 있는 미국 구매자 파일이 존재하지 않으므로, 자체 수집 작업이 병행 트랙이 아닌 선행 조건이 됩니다.",
        },
      ],
      triggers: [
        {
          trigger: "KCON LA 2026 헤드라인 슬롯 (8월 15일, 8월 14일부터 16일까지 진행되는 일정의 2일차)이며, 멤버 한 명이 페스티벌 앰버서더 및 MC를 맡습니다.",
          implication: "그룹이 가진 가장 최근이자 가장 가시적인 미국 활동이었으나, 이를 포착할 수 있는 자체적인 기록 수단이 존재하지 않았습니다.",
        },
        {
          trigger: "Ascend-은 2026년 6월 26일 Target, Walmart, Barnes & Noble 등 미국 소매점에 입점했습니다.",
          implication: "미국 내 음반 유통망은 이미 구축되어 있으며, 구매자 파일은 소매업체에 보관되어 있습니다.",
        },
        {
          trigger: "Never Say Never는 빌보드 200 차트에서 23위, Blue Paradise는 28위를 기록했습니다.",
          implication: "두 개의 톱 30 미국 앨범 차트 진입 기록은 현실적인 상한선을 보여줍니다. 두 앨범 모두 한국 발매 몇 주 후에 도달했으며, 기록된 모든 미국 차트 진입은 최고점에서 데뷔한 후 하락했습니다.",
        },
      ],
      genres: ["K-pop", "Dance pop", "한국 보이그룹"],
      platformSignals: [
        { platform: "Spotify editorial", note: "다섯 개의 개별 플레이리스트에 걸쳐 8개의 배치 행이 있었으며, 236,366명의 고유 도달 범위를 기록했습니다. 다섯 개 모두 K-pop 플레이리스트이며, 카탈로그 내 일반 팝 에디토리얼 배치는 없었습니다." },
        { platform: "Instagram", note: "최근 250개 게시물의 평균 릴 조회수는 783,540회이며, 동일 콘텐츠의 TikTok 평균보다 약 두 배 높습니다." },
        { platform: "TikTok", note: "최근 250개 게시물의 평균 조회수는 427,826회이며, 1,754개의 영상과 누적 4억 2,080만 개의 좋아요를 기록했습니다." },
        { platform: "유튜브", note: "구독자 212만 명, 조회수 10억 9,340만 6,213회, 영상 3,023개. 28개의 플레이리스트에 걸쳐 반복되는 명명된 형식들이 있습니다. 멤버십 기능은 비활성화되었습니다." },
      ],
      footnote: "Country and city figures are Spotify platform estimates surfaced through Chartmetric and carry an estimate flag. Social medians are computed on the most recent 250 posts per handle and use medians rather than means because several view counts on both owned and competitor accounts are extreme outliers relative to their like counts.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "영상",
      title: "Video Intelligence",
      intro: "169개의 영상이 다운로드, 전사, 장면 감지 및 개체 태깅되어 전용 ZEROBASEONE 지식 저장소에 저장되었으며, 이후 모든 게시물의 실제 조회수, 좋아요, 댓글 및 공유 수와 결합되었습니다. 비교 세트는 세 가지 특정 질문에 답하기 위해 선택되었습니다: 현재 탈퇴한 네 명의 멤버가 무엇을 하고 있는지, 13배의 도달 범위를 가진 HYBE 신인 아티스트가 무엇을 다르게 하는지, 그리고 유사한 한국 판매량과 첫 미국 투어 판매 중인 동료 아티스트가 무엇을 다르게 하는지.",
      clientQuestion: {
        attribution: "본 섹션에서 답하는 질문",
        question: "청중은 확보되었고 음악은 성공적으로 안착했습니다. 그렇다면 콘텐츠는 실제로 어떤 성과를 내고 있으며, 어디에서 수익 창출 기회를 놓치고 있을까요?",
      },
      methodology: [
        { label: "코퍼스", value: "TikTok 및 Instagram 4개 계정에서 169개의 영상, 총 69.2분 분량" },
        { label: "자체 보유", value: "ZEROBASEONE 59개 게시물, 2026년 2월부터 9월까지, 9인조 및 5인조 활동 시기 모두 포함" },
        { label: "비교", value: "AND2BLE 50, CORTIS 35, BOYNEXTDOOR 25" },
        { label: "선정 기준", value: "각 계정 내 조회수 기준 상위 성과 게시물, 따라서 모든 결과는 최고의 성과와 최고의 성과를 비교한 것입니다." },
        { label: "성과 통합", value: "각 항목에 연결된 조회수, 좋아요, 댓글, 공유 수를 플랫폼 내에서만 비교" },
      ],
      corpusStats: [
        { label: "분석된 영상", value: "169", detail: "4개 계정에서 총 69.2분" },
        { label: "자체 보유 게시물", value: "59", detail: "두 활동 시기 모두, 2026년 2월부터 9월까지" },
        { label: "배후 재고", value: "1,874", detail: "선정 기준이 된 전체 게시물 재고" },
        { label: "결과", value: "6", detail: "그들 중 두 명은 널리 퍼진 가정을 반박했습니다." },
      ],
      mixColumnLabel: "ZEROBASEONE",
      benchmarkColumnLabel: "비교 대상 그룹",
      mixHeading: "콘텐츠 믹스 측정 결과",
      mixIntro: "아래 모든 행은 캡션이나 노출 수가 아닌 코퍼스와 성과 데이터를 결합하여 계산됩니다. Instagram 공유 수는 플랫폼에서 공개하지 않으므로 참여율은 플랫폼 내에서만 비교되며 플랫폼 간 비교는 절대 하지 않습니다.",
      mixRows: [
        { metric: "명시적인 요청이 포함된 게시물", subject: "59건 중 11건 (19%)", benchmark: "110건 중 4건 (4%)", read: "behind", note: "CORTIS TikTok과 BOYNEXTDOOR은 총 45개의 게시물에서 어떠한 요청도 하지 않았습니다." },
        { metric: "상위 그룹의 중앙값 TikTok 조회수", subject: "1,459,310", benchmark: "1,454,514 (AND2BLE)", read: "inline", note: "2026년 5월에 데뷔한 그룹 대비 1.00배의 비율입니다." },
        { metric: "중앙값 TikTok 참여율", subject: "0.1890", benchmark: "0.1979 (AND2BLE)", read: "behind", note: "AND2BLE은 Instagram에서도 0.1166으로 0.1033 대비 선두를 차지했습니다." },
        { metric: "일본 관련 신호가 있는 게시물", subject: "59건 중 1건", benchmark: "25건 중 3건 (BOYNEXTDOOR)", read: "behind", note: "ZEROBASEONE의 단일 사례는 일본어가 아닌 한국어 음역입니다." },
        { metric: "출시 또는 홍보 에셋이 전체 결과물에서 차지하는 비중", subject: "59개 중 8개 (14%)", benchmark: "해당 없음", read: "neutral", note: "콘텐츠의 86%가 자체 생성이며, 여기서 성공 사례가 나옵니다." },
        { metric: "틱톡보다 인스타그램, 동일 계정", subject: "인벤토리 1.83배, 상위 밴드 2.09배", benchmark: "해당 없음", read: "ahead", note: "전체 게시물 인벤토리 대비 1.83배, 상위 성과 밴드 내에서는 2.09배입니다. 이 격차는 교차 게시물뿐만 아니라 모든 게시물에서 유지됩니다." },
        { metric: "틱톡 게시물 평균 지속 시간", subject: "18.3초", benchmark: "15.3초 (CORTIS)", read: "neutral", note: "지속 시간으로는 어느 방향으로든 13배의 도달 격차를 설명할 수 없습니다." },
      ],
      mixFootnote: "비율은 각 계정의 상위 성과 밴드인 분석된 코퍼스를 기준으로 계산됩니다. 따라서 이 섹션의 절대 조회수는 각 계정의 전체 인벤토리 중앙값보다 높으며, 계정 간 비교에만 사용되고 일반적인 성과를 설명하는 데는 사용되지 않습니다.",
      charts: [
        {
          kind: "grouped",
          title: "계정 및 플랫폼별 평균 조회수",
          subtitle: "총 1,874개 게시물 인벤토리입니다. 여러 조회수가 극단적인 이상치이므로 평균 대신 중앙값을 사용했습니다. 핸들별 기간은 다릅니다: ZEROBASEONE은 2026년 2월부터 9월까지, CORTIS와 BOYNEXTDOOR는 5월과 6월부터 시작하는 샘플이 제한적이며, AND2BLE은 전체 카탈로그입니다.",
          unit: "평균 조회수",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "ZEROBASEONE", y: 427826 },
                { x: "AND2BLE", y: 375978 },
                { x: "BOYNEXTDOOR", y: 491878 },
                { x: "CORTIS", y: 5616366 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "ZEROBASEONE", y: 783540 },
                { x: "AND2BLE", y: 656596 },
                { x: "BOYNEXTDOOR", y: 1405696 },
                { x: "CORTIS", y: 8470424 },
              ],
            },
          ],
          note: "CORTIS는 틱톡에서 ZEROBASEONE의 약 13배, 인스타그램에서는 11배의 성과를 보입니다. 4명의 멤버로 구성된 지 3개월 된 AND2BLE은 틱톡에서 ZEROBASEONE의 88%, 인스타그램에서 84%의 성과를 보입니다.",
          source: "TokScript를 통한 플랫폼 데이터, 2026년 9월 3일",
        },
        {
          kind: "bars",
          title: "출연진 규모별 조회수 지수, ZEROBASEONE 게시물",
          subtitle: "계정 자체 플랫폼 중앙값 대비 평균 조회수 지수입니다. 화면에 3명 이상의 멤버가 등장하는 것이 기준치를 초과하는 유일한 구성입니다.",
          unit: "계정 중앙값 대비 지수",
          series: [
            {
              name: "조회수 지수",
              points: [
                { x: "화면 속 3인 이상", y: 1.22 },
                { x: "멤버 솔로", y: 0.99 },
                { x: "2인 멤버", y: 0.88 },
              ],
            },
          ],
          note: "멤버 솔로 게시물은 두 플랫폼 모두에서 유일하게 부정적인 참여도를 보이며, 틱톡에서 -23%, 인스타그램에서 -24%를 기록했습니다. 해당 계정은 그룹 게시물 20개 대비 솔로 게시물 25개를 올렸습니다.",
          source: "비디오 인텔리전스 스토어가 플랫폼 성과 데이터에 통합되었습니다.",
        },
      ],
      findingsHeading: "여섯 가지 조사 결과",
      findingsIntro: "각 조사 결과는 코퍼스가 보여주는 내용, 수치, 그리고 그 결과로 발생하는 변화를 명시합니다. 데이터가 예상치를 뒤엎는 경우, 해당 조사 결과는 이를 명시하고 양측의 증거를 제시합니다.",
      findings: [
        {
          id: "f1",
          title: "AND2BLE은 이미 틱톡에서 동등한 수준에 도달했습니다.",
          verdict: "confirmed",
          confidence: "높음. 두 개의 독립적인 측정치가 방향성에 동의합니다.",
          summary: "각 계정의 상위 성과 그룹 내에서, 탈퇴한 네 명의 멤버는 데뷔 3개월 후 1.00x의 비율로 1,454,514건의 틱톡 조회수를 기록한 반면, 팀명을 유지한 다섯 명의 멤버는 1,459,310건을 기록했습니다. 또한 이들은 두 플랫폼 모두에서 참여율을 선도하고 있으며, 데뷔 후 참여율은 상승하는 반면 조회수는 안정화되고 있는데, 이는 단순한 호기심 급증이 아닌 실제 팬덤의 형태를 보여줍니다.",
          evidence: [
            "분석된 그룹 내 틱톡 평균 조회수: ZEROBASEONE 1,459,310, AND2BLE 1,454,514. 비율 1.00x.",
            "평균 참여율, 틱톡: AND2BLE 0.1979 대 ZEROBASEONE 0.1890. 인스타그램: 0.1166 대 0.1033.",
            "AND2BLE의 데뷔 후 참여율은 0.1972에서 0.2295로 상승한 반면, 평균 조회수는 1,613,359에서 1,122,029로 하락했습니다.",
            "AND2BLE은 서서 카메라를 응시하는 형식으로 소통합니다. 50개 게시물 중 18개가 멤버가 직접 소통하는 것으로 분류되었으며, 그중 15개는 렌즈를 직접적으로 응시합니다. ZEROBASEONE은 이에 상응하는 반복적인 형식이 없습니다.",
            "AND2BLE 게시물 50개 중 24개에서 영어 대화 또는 노래가 감지되었으며, 11개에서는 자막으로 포함되었습니다.",
          ],
          counterEvidence: [
            "상위 그룹이 아닌 전체 1,874개 게시물을 기준으로 볼 때, ZEROBASEONE은 여전히 평균치에서 앞서고 있습니다. 틱톡에서는 427,826 대 375,978, 인스타그램에서는 783,540 대 656,596으로, 일반적인 ZEROBASEONE 게시물이 여전히 우위에 있습니다.",
            "ZEROBASEONE이 압도적인 차이로 더 많은 콘텐츠를 생산하고 있습니다. 59개 게시물 중 15개가 세련된 퍼포먼스, 시네마틱 또는 이벤트 프로덕션으로 분류된 반면, AND2BLE은 50개 중 8개였습니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7627856110334037266", label: "AND2BLE, 틱톡 최고 인기 게시물", stat: "5,803,372 조회수" },
            { platform: "instagram", id: "DXQjj7eCYER", label: "제로베이스원, 한복 마당, 최상위 그룹 규모의 후속 게시물", stat: "7,423,168회 조회, 지수 2.44" },
            { platform: "tiktok", id: "7677519313493970196", label: "AND2BLE, 해당 세트 내 최고 참여율 게시물", stat: "참여율 0.3444" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "로스터 변경을 완료된 사건으로 취급하는 것을 중단하십시오. 팬덤은 매주 적극적으로 경쟁 중이며, 그 경쟁은 치열합니다.",
              "하나의 반복적인 멤버 주소 형식을 구축하십시오. 이는 상대방은 가지고 있지만 우리 측은 가지고 있지 않은 가장 명확한 구조적 요소입니다.",
              "규모는 보이는 것만큼 차별화 요소가 아닙니다. 더 큰 제작 예산은 분리가 아닌 동등함을 만들어내고 있습니다.",
            ],
          },
        },
        {
          id: "f2",
          title: "제로베이스원은 무언가를 요구하는 유일한 계정이며, 아무것도 구매하지 않습니다.",
          verdict: "confirmed",
          confidence: "횟수에서는 높음. 효과에서는 중간, CTA를 포함하는 게시물의 표본이 작기 때문입니다.",
          summary: "제로베이스원 게시물 59개 중 11개가 명시적인 요청을 포함합니다. 비교 대상 세 계정 전체에서는 110개 중 4개입니다. TikTok의 CORTIS와 양 플랫폼의 BOYNEXTDOOR는 총 45개의 게시물에서 아무런 요청도 하지 않습니다. 이러한 요청은 추가적인 도달 범위를 반환하지 않으며, 특히 TikTok에서는 참여율을 감소시킵니다.",
          evidence: [
            "제로베이스원은 게시물의 19%가 요청을 포함합니다. 비교 대상 세트 전체는 4%입니다.",
            "인스타그램 30개 중 7개, 틱톡 29개 중 4개. CORTIS 틱톡 20개 중 0개. BOYNEXTDOOR 25개 중 0개.",
            "요청이 포함된 게시물은 요청이 없는 게시물의 0.99에 비해 1.00의 중간 조회수 지수를 반환합니다. 어느 방향으로도 측정 가능한 도달 효과는 없습니다.",
            "TikTok에서는 요청을 포함하는 게시물이 0.1328로, 0.1890인 계정 자체 참여율 기준선보다 30% 낮습니다.",
          ],
          counterEvidence: [
            "인스타그램에서는 동일한 게시물이 참여율 기준선보다 6% 높으므로, 그 효과는 보편적이라기보다는 플랫폼별로 다릅니다.",
            "두 하위 표본 모두 틱톡 게시물 4개와 인스타그램 게시물 6개로 작습니다. 방향은 명확하지만, 규모는 그렇지 않습니다.",
          ],
          examples: [
            { platform: "tiktok", id: "7640875917383879956", label: "제로베이스원 명시적 요청 포함 게시물", stat: "2,547,135회 조회" },
            { platform: "tiktok", id: "7633810617371020565", label: "두 번째 예시, 동일한 패턴" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "요청 사항 자체는 문제가 아닙니다. 문제는 그들이 요청하는 내용입니다. 항목별로 나열된 요청 사항들은 모두 아티스트가 소유하지 않은 플랫폼을 가리킵니다.",
              "동일한 19%의 게시물을 소유한 목적지로 전환하면 동일한 행동이 추천 대신 자산을 생성하기 시작합니다.",
              "요청 사항을 비용이 들지 않는 Instagram으로 옮기고, 참여율의 30%를 차지하는 TikTok에서는 중단하십시오.",
            ],
          },
        },
        {
          id: "f3",
          title: "59개의 게시물에 일본어 콘텐츠가 전혀 없으며, 일본 첫 주 판매량은 65% 하락했습니다.",
          verdict: "confirmed",
          confidence: "높음. 캡션 수준의 수치는 명확합니다.",
          summary: "59개의 소유한 게시물 중 단 하나만이 일본 관련 신호를 가지고 있으며, 이는 일본어가 아닌 한국어 음역입니다. 5개월간의 캡션에는 한자도 등장하지 않습니다. 같은 기간 동안 세 개의 EP에 걸쳐 Oricon 첫 주 판매량은 257,157에서 179,648, 그리고 90,640으로 하락했으며, 일본은 이 그룹의 두 번째로 큰 상업 시장입니다.",
          evidence: [
            "59개의 소유한 게시물 중 1개가 일본 관련 신호를 가지고 있습니다. 2026년 2월부터 9월까지 59개의 캡션에 한자는 전혀 없습니다.",
            "Oricon 첫 주 판매량: Prezent 2025년 1월 257,157, Iconik 2025년 10월 179,648, KaikiLove 2026년 8월 90,640. 19개월 동안 65% 하락했습니다.",
            "BOYNEXTDOOR은 분석된 25개의 게시물 중 3개에서 일본어 콘텐츠를 사용했으며, 여기에는 3,120만 뷰의 일본 플랫폼 파트너십과 일본 아레나 투어 발표가 포함됩니다.",
            "Japan sits seventh in the Spotify country table at 40,956 listeners, well below its commercial weight.",
          ],
          counterEvidence: [
            "X에는 337,800명의 팔로워를 보유한 별도의 일본어 계정이 있으며, zerobaseone.jp은 완전한 일본 팬클럽을 운영하고 있습니다. 일본 관련 활동은 실재하지만, 주요 글로벌 계정과는 분리되어 있습니다.",
            "KaikiLove는 여전히 Oricon 주간 1위를 차지했으므로, 하락은 경쟁적 위치보다는 절대적인 수요의 감소입니다.",
          ],
          examples: [
            { platform: "instagram", id: "DZzbgsSE1yj", label: "BOYNEXTDOOR, 일본 플랫폼 파트너십", stat: "31,241,930 views" },
            { platform: "tiktok", id: "7652930012026260756", label: "BOYNEXTDOOR, 일본 아레나 투어 발표", stat: "4,183,967 views" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "일본 시장의 하락은 일본 콘텐츠 자체의 문제가 아니라 일본 배포의 문제입니다. 콘텐츠는 존재하지만 글로벌 계정에서는 이를 전혀 다루지 않습니다.",
              "주요 계정에 일본어 게시물을 올리는 것은 비용이 들지 않으며 이미 구매하고 있는 잠재 고객에게 도달합니다.",
              "일본을 파트 2에서는 성장 라인이 아닌 방어 라인으로 간주하십시오. 첫 주 판매량은 한국보다 더 빠르게 하락하고 있습니다.",
            ],
          },
        },
        {
          id: "f4",
          title: "릴리즈 관련 콘텐츠 채널은 해당 계정에서 운영하는 채널 중 가장 약한 채널입니다.",
          verdict: "refuted",
          confidence: "높음. 코퍼스가 캡션 기반 분석 결과를 뒤집었습니다.",
          summary: "캡션 검색 시 59개 게시물 중 11개가 릴리즈 또는 홍보용 에셋으로 분류되었으나, 코퍼스는 8개로 판단했습니다. 해당 8개 게시물의 조회수 지수는 0.83이며, TikTok 참여 기준선보다 21% 낮습니다. 결과물의 86%는 자체 생성 콘텐츠이며, 여기서 성공 사례가 나옵니다.",
          evidence: [
            "코퍼스 기준 릴리즈 또는 홍보용 에셋으로 분류된 게시물은 8개(59개 중), 캡션 검색 기준으로는 11개입니다.",
            "릴리즈 관련 게시물은 해당 계정 자체 중간값 대비 0.83의 중간 조회수 지수를 기록했습니다.",
            "해당 게시물은 TikTok 참여 기준선보다 21% 낮습니다.",
            "결과물의 86%는 자체 생성 콘텐츠이며, 해당 세트 내 최고 성과를 기록한 게시물들을 포함합니다.",
          ],
          counterEvidence: [
            "분석 기간에 릴리즈가 단 한 번만 포함되어 있어, 릴리즈 관련 채널은 8개 게시물로 표본이 적습니다.",
            "릴리즈 에셋은 도달 범위를 넘어선 목적을 가지지만, 본 측정 지표로는 포착되지 않습니다.",
          ],
          examples: [
            { platform: "instagram", id: "DYcaOLxJO0h", label: "릴리즈 관련 게시물, 저성과 구간", stat: "2,451,277 views" },
            { platform: "tiktok", id: "7640875917383879956", label: "릴리즈 관련 게시물", stat: "2,547,135회 조회" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "릴리즈 에셋을 중심으로 컴백 계획을 수립하지 마십시오. 해당 에셋은 계정에서 가장 성과가 낮은 콘텐츠입니다.",
              "자체 생성된 86%가 핵심 자산입니다. 이를 캠페인 간의 공백을 채우는 용도가 아닌, 상시 운영되는 제작 라인으로 지원하십시오.",
              "본 코퍼스에서 캡션 분석이 릴리즈 의존도를 1/3 이상 과대평가했기 때문에, 콘텐츠 채널은 캡션이 아닌 프레임별로 분류되었습니다.",
            ],
          },
        },
        {
          id: "f5",
          title: "멤버별 효과는 없습니다. 출연진 규모가 영향 요인입니다.",
          verdict: "confirmed",
          confidence: "중간에서 높음. 출연진 규모는 명확하며, 멤버별 효과 부재 또한 명확합니다.",
          summary: "개별 멤버가 성과를 견인하지는 않습니다. 가장 많이 등장한 멤버는 결과물의 27%에 출연하며 1.07의 지수를 기록했는데, 이는 노이즈에 불과합니다. 수치를 움직이는 것은 화면에 몇 명이 등장하는지입니다: 3명 이상은 1.22, 솔로 멤버는 0.99, 2명의 멤버는 0.88입니다. 멤버 솔로 포맷은 두 플랫폼 모두에서 참여도에 부정적인 영향을 미치는 유일한 포맷입니다. 현재 해당 계정은 그룹 게시물보다 솔로 게시물을 더 많이 제작하고 있습니다.",
          evidence: [
            "가장 많이 등장한 멤버: 16개 게시물(59개 중), 1.07 조회수 지수. 멤버 태그 게시물: 0.99. 태그 없음: 1.00.",
            "화면 내 세 명 이상 출연 시: 1.22 인덱스. 솔로: 0.99. 듀오: 0.88.",
            "멤버 솔로 참여도는 자체 기준 대비 TikTok에서 23% 감소, Instagram에서 24% 감소했습니다.",
            "콘텐츠 분할: 솔로 게시물 25개 대 그룹 게시물 20개.",
          ],
          counterEvidence: [
            "솔로 게시물은 도달 지수가 측정하지 못하는 팬덤 유지 목적을 수행하며, 다섯 명으로 구성된 그룹에서는 각 멤버가 전체에서 더 큰 비중을 차지합니다.",
            "0.88의 듀오 수치는 적은 표본에 기반하며 규칙이라기보다는 방향성을 나타냅니다.",
          ],
          examples: [
            { platform: "instagram", id: "DXQjj7eCYER", label: "화면 전체 그룹, 세트 상단", stat: "7,423,168회 조회, 지수 2.44" },
            { platform: "tiktok", id: "7608576504078798100", label: "그룹 구성, 두 번째 예시", stat: "2,878,276 조회수, 인덱스 1.97" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "현재 비율을 반전시키십시오. 해당 계정은 솔로 게시물 25개 대 그룹 게시물 20개를 게시하며, 그룹 게시물의 인덱스가 23% 더 높습니다.",
              "콘텐츠를 이끌어갈 특정 멤버를 찾는 것을 중단하십시오. 데이터에 따르면 그런 멤버는 없으며, 그러한 멤버를 찾는 데는 콘텐츠 생산 비용이 발생했습니다.",
              "화면 내 세 명 이상 출연이 그룹에서 가장 안정적으로 성과를 내는 구성이며, 다섯 명의 멤버로 구성된 라인업은 네 명의 멤버로 구성된 라인업보다 이를 더 자주, 더 큰 규모로 구현할 수 있습니다.",
            ],
          },
        },
        {
          id: "f6",
          title: "Instagram은 모든 게시물에서 TikTok의 두 배의 가치를 가지며, 크로스 포스팅 차익 거래는 존재하지 않습니다.",
          verdict: "refuted",
          confidence: "플랫폼 간 격차가 높음. 반박이 높음.",
          summary: "동일한 영상을 Instagram에 크로스 포스팅하면 도달률이 4~5배 증가한다고 널리 알려져 있습니다. 본 분석에서는 1.84배이며, 해당 계정의 일반적인 Instagram 대 TikTok 격차는 동일한 범위에서 이미 2.09배이므로, 크로스 포스팅된 동일 영상은 실제로는 일반적인 플랫폼 차이보다 낮게 나타납니다. 실제적이고 더 유용한 발견은 1.83배의 플랫폼 격차 자체이며, 이는 트윈 게시물이든 아니든 모든 게시물에 적용됩니다.",
          evidence: [
            "8개의 트윈 쌍이 확인되었습니다. Instagram 대 TikTok의 중앙값 비율은 1.84배입니다.",
            "계정 수준 Instagram 대 TikTok 기준선: 분석된 범위 내에서는 2.09배, 전체 1,874개 게시물 재고에서는 1.83배입니다.",
            "한 트윈은 0.91배로 역행하므로, 게시물 수준에서는 방향성조차 신뢰할 수 없습니다.",
            "트윈 게시물은 TikTok에서 1.29배, Instagram에서 1.21배로 자체 플랫폼 기준선을 능가하는데, 이는 단순히 더 나은 게시물이기 때문입니다.",
          ],
          counterEvidence: [
            "8쌍은 적은 표본이며, 트윈 식별은 플랫폼 간 콘텐츠 일치에 의존하는데 이는 완벽하지 않습니다.",
            "Instagram은 공유 수를 공개하지 않으므로 두 플랫폼의 참여율을 직접 비교할 수 없으며, 조회수 비교만이 명확합니다.",
          ],
          examples: [
            { platform: "instagram", id: "DXQjj7eCYER", label: "Twin pair, 최상의 경우 4.19배" },
            { platform: "tiktok", id: "7639269192474070293", label: "Twin pair, 최악의 경우 0.91배" },
          ],
          pivot: {
            title: "이것이 변화시키는 것",
            actions: [
              "유료 지원 및 크리에이티브 볼륨 계획 시 인스타그램 비중을 틱톡의 약 두 배로 설정하며, 이는 크로스 포스트뿐만 아니라 모든 콘텐츠에 적용됩니다. 측정된 격차는 전체 인벤토리에 걸쳐 1.83배입니다.",
              "어쨌든 모든 것을 크로스 포스트하십시오. 비용이 들지 않으며 여기서 관찰된 최악의 경우는 단일 게시물이 동등한 성과를 내는 것입니다.",
              "크로스 포스팅 프리미엄이 아닌 측정된 플랫폼 격차에 따라 인스타그램 비중을 계획하십시오.",
            ],
          },
        },
      ],
      footnote: "방법론 참고 사항: 결과를 적절히 평가할 수 있도록 명시합니다. 지식 저장소에는 각 계정의 최고 성과 밴드가 보관되어 있으므로 비교는 최고 대 최고로 이루어지며 모든 효과 크기는 일반적인 결과가 아닌 높은 기준선에 대해 측정됩니다. 동일한 59개 영상에 대한 두 번의 Jockey 패스에서 직접 주소 카운트가 8건 대 14건으로 불일치했으므로 해당 특정 필드는 방향적으로는 신뢰할 수 있으나 수치적으로는 불안정합니다. 이 분석 중에 생성된 두 가지 주장, 즉 개그 형식 참여 및 관점 프레이밍에 대한 주장은 플랫폼 내 재계산 시 노이즈로 축소되어 철회되었습니다. 둘 다 제거되지 않고 기록됩니다. 영상 내 콜투액션 타이밍 및 전체 2차 소스 교차 확인은 열려 있으며 다음 패스에 예정되어 있습니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "brandAudit",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      intro: "모든 소유 표면은 2026년 9월 3일에 로드 및 검사되었습니다: 페이지 소스, 양식 엔드포인트, 결제 구성 객체, 클라이언트 측 추적 전역 변수 및 링크 대상. 부재는 표면이 실제로 도달되었고 해당 항목이 검증 가능하게 존재하지 않는 경우에만 아래에 기록됩니다.",
      verdict: "문제는 인지도가 아니라 소유권입니다. 약 1,320만 명의 팔로워와 10억 뷰의 YouTube 조회수는 아티스트가 제어하는 유일한 수집 지점이 22달러의 비용이 들고 한국 애플리케이션 뒤에 있는 퍼널 위에 있습니다. 미국 팬이 취할 수 있는 모든 무료 경로는 다른 사람이 소유한 플랫폼으로 연결됩니다.",
      scorecard: [
        { dimension: "소유한 이메일 수집, 글로벌 퍼널", status: "부재", evidence: "WAKEONE 아티스트 페이지에는 양식과 입력 요소가 전혀 없습니다. 글로벌 링크인바이오에는 9개의 링크가 있으며 모두 다른 소셜 플랫폼으로 연결됩니다. 공식 소셜에서 접근 가능한 유일한 이메일 수집은 릴리스 스마트 링크에 있으며 배포 파트너의 목록으로 수집됩니다." },
        { dimension: "SMS 수집", status: "부재", evidence: "어떤 시장에서도 소유한 표면에서 전화번호 수집이 이루어지지 않습니다." },
        { dimension: "광고 픽셀, 아티스트 소유 속성", status: "부재", evidence: "WAKEONE 페이지와 일본 사이트에는 분석만 포함됩니다. 멤버십 및 상품 플랫폼은 모든 광고 전역 변수에 대해 undefined를 반환하고 데이터 레이어는 비어 있습니다. 글로벌 스토어 자체의 구성 객체에는 null 픽셀과 null 태그 관리자 ID가 포함됩니다." },
        { dimension: "리타겟팅 스택", status: "존재하지만 소유하지 않음", evidence: "세 개의 Meta 픽셀, 두 개의 Google Ads 태그, 두 개의 분석 속성 및 Snapchat 픽셀이 모두 릴리스 스마트 링크에 있으며, 이는 아티스트가 아닌 배포 파트너에게 속합니다." },
        { dimension: "유료 멤버십", status: "현재", evidence: "미국 팬을 대상으로 하는 글로벌 팬클럽으로, 이름, 생년월일, 연락처 정보를 수집하며 2027년 4월 30일까지 유효합니다. 별도의 유료 다이렉트 메시지 상품은 월 약 4,400원에 운영됩니다." },
        { dimension: "무료 멤버십 등급", status: "부재", evidence: "어떤 팬도 이 아티스트에게 자신을 무료로 알릴 방법이 없습니다." },
        { dimension: "YouTube 채널 멤버십", status: "비활성화됨", evidence: "메인 및 정보 탭의 모든 멤버십 마커에 대해 채널의 초기 데이터와 대조했습니다. 212만 명의 구독자와 10.9억 뷰에서 모두 누락되었습니다." },
        { dimension: "상품 및 커머스", status: "존재하지만 소유하지 않음", evidence: "글로벌 스토어는 미국 달러로 가격이 책정되며, 주문 처리 및 구매자 이메일은 제3자 서비스에서 관리합니다. 위버스(Weverse)의 상품 목록은 전용 커뮤니티가 아닌 일반적인 항목으로 연결됩니다." },
        { dimension: "응원봉 및 실물 팬 상품", status: "현재", evidence: "2023년 10월 24일 공식 응원봉 출시. 플랫폼별 앨범 포맷 및 소매점 독점 포토카드 포함한 앨범 버전 전략." },
        { dimension: "미국 리테일", status: "현재", evidence: "Target, Walmart, Barnes & Noble에서 2026년 6월 26일부터 한국 발매 5주 반 후에 Ascend-를 판매했습니다. Never Say Never는 2025년 7월부터 Target 독점 상품으로 판매되었습니다." },
        { dimension: "미국 티켓팅 및 구매자 파일", status: "부재", evidence: "미국 단독 공연 티켓 판매 기록은 없습니다. 3년간의 미국 내 6번의 출연은 모두 남부 캘리포니아의 제3자 페스티벌 또는 쇼케이스 무대였으므로, 모든 구매자 기록은 프로모터가 보유하고 있습니다." },
        { dimension: "일본 인프라", status: "현재", evidence: "일본어 멤버십 플랫폼 내 일본 팬클럽 및 스토어가 있으며, 일본어 소셜 계정에서 직접 접근 가능합니다. 이곳은 정보 수집 레이어가 구축된 유일한 시장입니다." },
      ],
      foundations: [
        { label: "4개 글로벌 플랫폼 팔로워", value: "13.2M", note: "Instagram 464만, TikTok 530만, YouTube 212만, X 110만" },
        { label: "누적 YouTube 조회수", value: "1,093,406,213", note: "3,023개의 영상에 걸쳐 멤버십 비활성화" },
        { label: "글로벌 팬클럽 가격", value: "$22", note: "유일하게 소유한 신원 정보 표면이며, 유료입니다." },
        { label: "자체 커머스에 광고 픽셀 적용", value: "0", note: "모든 유료 회원은 현재 시드 오디언스로 사용할 수 없습니다." },
        { label: "미국 소유 이메일 주소", value: "0", note: "가장 큰 청취 시장에서" },
        { label: "데뷔 후 경과 월수", value: "38", note: "3개월 차에 응원봉 배송 완료. 캡처 레이어는 아직 배송되지 않았습니다." },
      ],
      strengths: [
        {
          title: "커머스와 커뮤니티 레이어는 이미 존재하며 이미 수익을 창출하고 있습니다.",
          detail: "멤버십 플랫폼은 글로벌 팬클럽, 유료 다이렉트 메시지 상품, 상품 판매점을 운영하며, 세 가지 통화로 가격이 책정되고 라이브 쇼 커머스가 활성화되어 있습니다. 이는 제로에서 구축하는 것이 아닙니다. 측정 레이어가 누락된 작동 시스템입니다.",
        },
        {
          title: "미국 내 물리적 유통망이 구축되어 있습니다.",
          detail: "Target, Walmart, Barnes & Noble 모두 최근 발매 앨범을 취급했습니다. 9인조 시절 앨범 두 장이 빌보드 200 차트 상위 30위권에 진입한 것은 잠재력이 실재함을 보여줍니다. 가장 최근 발매 앨범은 가장 넓은 소매 유통망을 확보했음에도 불구하고 차트에 전혀 오르지 못했는데, 이는 단순히 유통망만으로는 성공할 수 없음을 보여줍니다. 레이블의 명시된 의도는 미국 내 로컬 발매를 지속적으로 확장하는 것입니다.",
        },
        {
          title: "일본은 그룹이 제대로 된 캡처 스택을 운영할 수 있음을 증명합니다.",
          detail: "일본 측은 전용 사이트, 실제 멤버십 플랫폼 기반 팬클럽, 스토어, 그리고 다른 소셜 플랫폼이 아닌 캡처 표면으로 연결되는 프로필 링크를 가진 일본 소셜 계정을 보유하고 있습니다. 해당 템플릿은 조직 내에 존재합니다.",
        },
        {
          title: "명명된 반복 형식의 성숙한 콘텐츠 시스템",
          detail: "반복되는 프랜차이즈 형식, 집중적인 숏폼 활용, 3,023개의 영상으로 구성된 28개의 플레이리스트. 본 진단에서 생산 능력은 제약 요인이 아닙니다.",
        },
      ],
      gaps: [
        {
          title: "글로벌 퍼널 내 유일한 이메일 수집은 타사에서 관리합니다.",
          finding: "릴리스 스마트 링크는 이메일 주소와 국가를 수집하며, 동의 알림은 배포 파트너를 발신자로 명시합니다. 해당 목록은 레이블 측에 있으며 아티스트의 통제 밖에 있습니다.",
          opportunity: "아티스트가 통제하는 목적지에 미국 대상 캡처 표면을 기존 링크를 대체하는 대신 병행하여 운영함으로써 동일한 트래픽을 자체 자산으로 전환합니다. 이는 감사에서 가장 가치가 높은 단일 수정 사항이며 한국 측 관행에는 어떠한 변경도 필요하지 않습니다.",
        },
        {
          title: "유료 회원은 잠재 고객으로 활용될 수 없습니다.",
          finding: "멤버십 및 상품 결제에는 어떠한 종류의 광고 또는 분석 추적도 포함되지 않습니다. 렌더링 후 클라이언트 측에서 확인됨: 모든 광고 전역 변수는 정의되지 않았으며 데이터 레이어는 비어 있습니다.",
          opportunity: "결제 시 픽셀은 기존 유료 회원 모두를 유사 타겟팅을 위한 시드 잠재 고객으로 전환합니다. 이는 그룹이 이미 확보하기 위해 비용을 지불한 잠재 고객의 가치를 소급하여 부여하는 한 줄 변경 사항입니다.",
        },
        {
          title: "링크인바이오는 아무것도 요구하지 않습니다.",
          finding: "아홉 개의 링크 모두 다른 소셜 플랫폼을 가리킵니다. 네이티브로 사용되는 링크인바이오 서비스는 표준 이메일 플랫폼과의 직접 동기화를 통해 연락처 수집 기능을 제공하지만, 현재 비활성화되어 있습니다.",
          opportunity: "캡처 타일을 활성화하는 것은 개발 비용 없이 설정 변경만으로 가능하며, 1,320만 명 미만의 팔로워를 보유하고 있습니다.",
        },
        {
          title: "212만 명의 구독자를 보유한 채널에서 채널 멤버십이 비활성화되어 있습니다.",
          finding: "누적 조회수 10억 회 이상 및 멤버십 티어가 수익 창출하도록 설계된 성숙한 반복 형식 라이브러리를 보유한 채널에 어떠한 멤버십 티어도 활성화되어 있지 않습니다.",
          opportunity: "무료 또는 저가형 멤버십은 팬에게 아무것도 설치하도록 요청하지 않고도 그룹이 이미 장악하고 있는 플랫폼 내에서 식별된 잠재 고객을 생성합니다.",
        },
        {
          title: "미국 구매자 파일은 어떠한 형태로도 존재하지 않습니다.",
          finding: "주요 미국 공연 티켓 판매 기록이 없어 티켓팅 기록이 존재하지 않습니다. 미국 앨범 구매자 정보는 리테일러가 보유하고 있으며, 스토어 구매자 정보는 이행 서비스가 보유하고 있습니다. 스마트 링크 가입 정보는 배포 파트너가 보유하고 있습니다.",
          opportunity: "이러한 관계들은 모두 병행하여 운영되는 자체 캡처 레이어를 통해 추가적으로 복구 가능합니다. 기존 계약을 재협상할 필요는 없습니다.",
        },
        {
          title: "주요 도메인은 아티스트 소유가 아닙니다.",
          finding: "그룹 이름에 해당하는 명백한닷컴 주소는 아티스트가 통제하는 것이 아닌, 주차된 페이지로 연결됩니다.",
          opportunity: "캡처 레이어, 릴리스 링크 및 미국 캠페인이 모두 가리킬 수 있는 단일 자체 목적지입니다. 이것이 존재하면 이 섹션의 나머지 모든 것이 더 쉬워집니다.",
        },
      ],
      tensions: [
        {
          label: "소유권 대비 규모",
          brandSignal: "1,320만 명의 팔로워, 10억 회의 YouTube 조회수, 빌보드 200 차트 상위 30위 진입 및 미국 전역 대형 유통망을 통한 유통.",
          audienceTruth: "자체 보유한 미국 연락처 기록은 제로이며, 자체 커머스에 광고 픽셀은 없으며, 팬이 22달러를 지불하고 한국 애플리케이션을 설치하지 않고는 자신을 식별할 방법이 없습니다.",
          direction: "잠재 고객은 이미 확보된 것으로 간주하고, 캡처 레이어만이 유일하게 누락된 구성 요소라고 보아야 합니다. 이는 마케팅 캠페인이 아닌, 시스템 구축 프로젝트입니다.",
        },
        {
          label: "미국 시장에 적용되는 한국식 운영 방식",
          brandSignal: "한국의 개인정보 보호 관행은 번들 가입을 제약하며, 레이블이 직접적인 리스트 대신 팬 플랫폼으로 나아가도록 유도합니다.",
          audienceTruth: "가장 큰 음원 시장은 미국이며, 이곳에는 그러한 제약이 적용되지 않음에도 불구하고 기본적으로 한국의 규칙에 따라 운영되고 있습니다.",
          direction: "미국 팬만을 위한 캡처 시스템을 구축하십시오. 한국 팬들은 이미 사용 중인 플랫폼에 그대로 두십시오. 두 시스템이 반드시 동일할 필요는 없습니다.",
        },
        {
          label: "실물 음반 판매량과 디지털 차트 성적 비교",
          brandSignal: "한국 발매 8개, 2025년 9월까지 연속 밀리언셀러 6개, 한국 및 일본 누적 앨범 판매량 1천만 장.",
          audienceTruth: "전체 카탈로그에서 한국 디지털 싱글 톱텐 진입은 단 한 건도 없었습니다. 기록상 최고의 써클 디지털 차트 최고 순위는 14위입니다.",
          direction: "본 사업은 대중에게 곡이 도달하는 것보다 팬덤에 의해 운영됩니다. 따라서 동종 업계의 다른 회사보다 국제 스트리밍 시장이 더 중요합니다.",
        },
      ],
      footnote: "하나의 부재는 직접적으로 증명되기보다는 추론되었습니다. 여러 동종 업계에서 사용하는 전용 커뮤니티 플랫폼은 실제, 유효하지 않은, 그리고 무의미한 식별자에 대해 동일한 응답을 반환하므로, 해당 플랫폼에서의 null 결과는 부재와 제한된 응답을 구별할 수 없습니다. 이는 검증된 것이 아니라 강력하게 시사된 것으로 기록됩니다. 본 섹션의 다른 모든 부재는 해당 표면을 로드하고 검사함으로써 확인되었습니다.",
    },
  ],

  language: "ko",
  languageAlternates: [
    { slug: "zerobaseone", label: "English", code: "EN" },
    { slug: "zerobaseone-ko", label: "한국어", code: "KO" },
  ],
};
