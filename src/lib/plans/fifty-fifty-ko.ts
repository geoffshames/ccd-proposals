import type { StrategyPlanData } from "../plan-context";

export const fiftyFiftyPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/fifty-fifty/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "fifty-fifty", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "FIFTY FIFTY",
    subtitle: "FIFTY FIFTY가 조용히 재건해 온 것에 대한 팬덤 우선 감사와 이를 비즈니스로 전환하는 전환 전략.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/fifty-fifty/fifty-fifty-group.jpg",
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
      subtitle: "팬덤은 4개 분기 연속 재건되어 왔습니다. 비즈니스 내에서 이를 수용할 수 있도록 구축된 것은 거의 없습니다.",
      body: [
        "There is a number in FIFTY FIFTY's data that does not appear in the press coverage, and it is the reason for this document. Spotify followers have not posted a down month in forty-five months. Not one. Follower acquisition bottomed at 496 a day in Q3 2025 and has risen every quarter since, to 1,079 a day now, the highest rate in almost two years, while listener volume held flat. The follower-to-listener ratio set its all-time high five days before this audit was written. Physical shipments went from 39,373 on the Cupid-era release to 108,313 on Day & Night, with a confirmed Hanteo first week of 100,121. The listener floor between eras fell 24.3 percent, then 4.3 percent, and then rose 1.5 percent. It stopped falling.",
        "이 모든 수치는 같은 것을 설명합니다. 즉, 시장이 여전히 2023년의 한 곡을 통해 만나는 카탈로그 아래에 실제 팬덤이 축적되고 있다는 것입니다. 본 문서의 감사 부분은 소비, 카탈로그 행동, 미국 관객, 105개 영상의 프레임 단위 분석, 팬이 전환할 수 있는 모든 소유 표면을 가로질러 그 격차의 양면을 정확하게 측정합니다. 전략 부분은 누락된 레이어를 구축합니다. 이 중 어느 것도 또 다른 글로벌 히트를 기록하는 데 의존하지 않습니다. 이것이 요점입니다. 이미 도달하고 있는 팬덤은 갈 곳이 없으며, 이는 알려진 타임라인에서 해결 가능한 문제입니다.",
      ],
      supports: {
        heading: "본 문서에서 다루는 내용",
        items: [
          "K-pop 동료, 바이럴 히트 생존자, 라인업 변경 후 재건된 그룹을 포함하는 13개 액트 비교 세트에 대한 시장 포지션",
          "소비 및 카탈로그 분석: 집중도, 감소율, 리스너 하한선, 그리고 이 모든 것에 반하는 팔로워 곡선",
          "미국 관객 및 타겟팅, 미국이 측정된 모든 플랫폼에서 1위 시장이라는 사실에 기반함",
          "영상 인텔리전스: 실제 성과 데이터가 각 영상에 연결된 105개의 FIFTY FIFTY 및 경쟁사 영상에 대한 프레임 단위 분석",
          "인프라 감사: 팬이 리스트에 가입하거나, 상품을 구매하거나, 전환할 수 있는지 여부를 확인하기 위해 41개의 자체 플랫폼을 하나씩 점검",
          "전환 전략: 4개의 실행 버티컬, 파트너 주도 워크스트림, 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "퍼스트 파티 데이터: 사실상 0명의 팬 확보에서 10만 명 이상의 미국 리스트 확보로, 다른 모든 항목의 비용을 절감하는 자산",
          "실물 앨범: 다음 전체 사이클에서 88,247장에서 15만 장 이상으로, 발매 후 추격이 아닌 사전 예약 판매에 집중",
          "팬덤 전환: 전체 발매 사이클 동안 하루 순증 1,000명 이상의 팔로워 증가세 유지",
          "숏폼: 재조정된 믹스에서 게시물당 평균 조회수 3배 증가, 더 적은 게시물로 더 많은 성과 달성",
          "미국: 최대 리스너 시장을 첫 매진 헤드라인 쇼케이스 및 첫 리테일 모멘트로 전환",
          "Instagram: 95만 6천 명에서 2백만 명 이상으로, 데이터상 이미 가장 효율적인 플랫폼 활용",
        ],
      },
      charts: [
        {
          kind: "line",
          title: "The Divergence: 리스너와 팔로워, 45개월",
          subtitle: "월간 리스너는 바닥을 찾았고, 팔로워는 계속 상승했습니다.",
          unit: "people",
          series: [
            {
              name: "Spotify monthly listeners",
              color: "#8A8A8A",
              points: [
                { x: "2023-07", y: 32462136 },
                { x: "2023-10", y: 17146264 },
                { x: "2024-01", y: 15229180 },
                { x: "2024-04", y: 10206053 },
                { x: "2024-07", y: 8550555 },
                { x: "2024-10", y: 8708701 },
                { x: "2025-01", y: 6971187 },
                { x: "2025-04", y: 6613312 },
                { x: "2025년 7월", y: 6649361 },
                { x: "2025년 10월", y: 6144798 },
                { x: "2026년 1월", y: 6053938 },
                { x: "2026년 4월", y: 6282531 },
                { x: "2026년 8월", y: 6126303 },
              ],
            },
            {
              name: "Spotify followers",
              color: "#FD3737",
              points: [
                { x: "2023-07", y: 1063075 },
                { x: "2023-10", y: 1326767 },
                { x: "2024-01", y: 1473517 },
                { x: "2024-04", y: 1564092 },
                { x: "2024-07", y: 1635287 },
                { x: "2024-10", y: 1722644 },
                { x: "2025-01", y: 1834518 },
                { x: "2025-04", y: 1882244 },
                { x: "2025년 7월", y: 1935897 },
                { x: "2025년 10월", y: 1989684 },
                { x: "2026년 1월", y: 2071980 },
                { x: "2026년 4월", y: 2155778 },
                { x: "2026년 8월", y: 2282596 },
              ],
            },
          ],
          markers: [{ x: "2024-10", label: "현 멤버 구성" }],
          note: "두 선은 가치보다는 행동에서 교차합니다. 리스너는 2023년 6월 최고치에서 83.7% 하락한 후 약 6.1M에서 안정화되었습니다. 팔로워는 지난 12개월 동안 리스너 수가 정체된 가운데 329,398명이 추가되었으며, 이는 감소 산술이 아닌 팬 축적입니다.",
          source: "Chartmetric 일일 시리즈, 아티스트 9966037, n=1,364개 포인트, 2026-09-03일 기준",
        },
      ],
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 내 위치",
      philosophy: "소비와 팬덤은 별개의 사업입니다. FIFTY FIFTY는 한쪽에서는 중간 순위에, 다른 한쪽에서는 하위권에 있으며, 그 사이의 격차가 전체 기회입니다.",
      intro: "Thirteen acts, chosen rather than listed, spanning three questions. The K-pop peers say what a girl group at this scale should be converting. The viral-hit survivors say what an audience acquired the way FIFTY FIFTY's was is worth years later. The rebuild cases say what is actually achievable after a lineup change. Spotify monthly listeners is the tiering spine, pulled 2026-09-03.",
      subBlocks: [
        {
          label: "A",
          title: "등급 지도",
          strategy: "등급은 월간 리스너 2,000만 명과 1,000만 명에서 나뉩니다. 두 절단 지점 모두 간격 분포에서 가져온 것이지 강요된 것이 아니며, 거부된 두 개의 절단 지점은 출처 메모에 명시되어 있어 추론을 확인할 수 있습니다.",
          featureTiersHeading: "월간 리스너별 등급 비교 세트",
          featureTiers: [
            {
              label: "등급 1 / 글로벌 소비 규모, 2,000만 명 이상",
              artists: [
                {
                  name: "KATSEYE",
                  monthlyListeners: "월간 리스너 3,770만 명",
                  instagram: "12.7M Spotify Followers",
                  reference: "WILD, 2026년 8월",
                  note: "미국 팝 시장에서 활동하는 한국 시스템 걸그룹으로, Cupid가 확보한 정확한 타겟층의 직접적인 경쟁자입니다. 해당 그룹 중 미국 내 리스너 기반이 6배 더 큽니다. K팝 걸그룹이 미국 시장에서 성공할 수 있는지에 대한 솔직한 척도입니다.",
                },
                {
                  name: "ILLIT",
                  monthlyListeners: "월간 리스너 2,140만 명",
                  instagram: "7.7M Spotify Followers",
                  reference: "마미라피나타파이, 2026년 4월",
                  note: "가장 중요한 축에서 가장 근접한 현존하는 유사 사례입니다. 바이럴 기록으로 돌파했으며, 팬덤보다 앞선 서구권 스트리밍 발자국을 가지고 있고, FIFTY FIFTY의 4% 이내의 비율을 기록하고 있습니다. 이는 3.5배 규모에서의 동일한 프로필이 어떻게 보이는지를 보여줍니다.",
                },
                {
                  name: "LE SSERAFIM",
                  monthlyListeners: "월간 리스너 2,040만 명",
                  instagram: "11.2M Spotify Followers",
                  reference: "PUREFLOW pt.1, 2026년 5월",
                  note: "진정한 규모를 갖춘 4세대 그룹으로, 데뷔 11주 만에 멤버 교체가 있었으나 그룹이 완전히 회복한 기록이 있습니다. 이는 시장 선두에서 멤버 교체가 생존 가능하다는 증거입니다.",
                },
                {
                  name: "Glass Animals",
                  monthlyListeners: "월간 리스너 2,460만 명",
                  instagram: "4.9M Spotify Followers",
                  reference: "Heat Waves, 지연된 바이럴 상승",
                  note: "팬덤 없이 바이럴로 확보한 청중이 얼마나 오래 지속될 수 있는지에 대한 최고 사례입니다. 여전히 0.197의 비율로 수년 후에도 2,460만 명의 리스너를 보유하고 있습니다.",
                },
              ],
            },
            {
              label: "티어 2 / 1,000만 명 ~ 2,000만 명",
              artists: [
                {
                  name: "NewJeans",
                  monthlyListeners: "월간 리스너 1,370만 명",
                  instagram: "13.4M Spotify Followers",
                  reference: "Supernatural, 2024년 6월",
                  note: "분쟁이 해결되지 않았을 때 발생하는 비용입니다. 27개월 동안 신곡이 나오지 않았음에도 불구하고 0.981이라는 수치는 활동이 없음에도 충성도를 유지하는 팬덤의 모습을 보여줍니다. 목표가 아닌 경고로 받아들여야 합니다.",
                },
                {
                  name: "Little Mix",
                  monthlyListeners: "월간 리스너 1,440만 명",
                  instagram: "12.4M Spotify Followers",
                  reference: "Sweet Melody, 영국 1위, 2021",
                  note: "멤버 이탈 후에도 그룹이 성장하며 지속된 유일한 서구권 선례입니다. 3인조로 영국 1위와 베스트 브리티시 그룹 상을 수상했습니다. 2022년부터 활동 중단 상태이므로 현재 수치는 쇠퇴 곡선을 나타내며, 이는 그 자체로 교훈을 줍니다.",
                },
                {
                  name: "CKay",
                  monthlyListeners: "월간 리스너 1,120만 명",
                  instagram: "2.2M Spotify Followers",
                  reference: "Love Nwantiti",
                  note: "앵글로 시장 외부에서 스피드업된 틱톡 오디오를 통해 서구권 DSP로 전 세계적으로 확산되었으며, 이는 Cupid가 사용한 것과 기계적으로 동일한 획득 경로입니다. 이와 같이 팬층이 실제로 구축된 방식과 가장 유사한 비(非) K팝 사례입니다.",
                },
              ],
            },
            {
              label: "Tier 3 / 1,000만 명 미만, FIFTY FIFTY가 속한 구간",
              artists: [
                {
                  name: "Hearts2Hearts",
                  monthlyListeners: "월간 리스너 796만 명",
                  instagram: "2.5M Spotify Followers",
                  reference: "Lemon Tang, 2026년 6월",
                  note: "2025년 데뷔했으므로, 현재 시장에서 자원이 풍부한 신인 걸그룹이 제로에서 시작했을 때의 모습을 보여줍니다. 발매 첫 주에 618,994장이 판매되었습니다. 재출범한 FIFTY FIFTY는 원하든 원하지 않든 신인으로서 경쟁하고 있으며, 이것이 신인 그룹의 기준점입니다.",
                },
                {
                  name: "i-dle",
                  monthlyListeners: "월간 리스너 703만 명",
                  instagram: "11.8M Spotify Followers",
                  reference: "We Made, 2026년 7월",
                  note: "재건 사례 중 최상의 경우입니다. 멤버 한 명이 대중적 논란으로 이탈했으나 레이블과 카탈로그를 유지하며 발매 첫 주 앨범 판매량을 약 8배 성장시켰습니다. FIFTY FIFTY보다 적은 리스너 수에도 불구하고 1.672의 비율을 기록했습니다. 이는 재건이 달성할 수 있는 최대치를 보여줍니다.",
                },
                {
                  name: "FIFTY FIFTY",
                  monthlyListeners: "6.15M 월간 리스너",
                  instagram: "2.29M Spotify Followers",
                  reference: "Imperfect-I'mperfect, 2026년 6월",
                  note: "KATSEYE를 제외한 본 세트 내 모든 한국 시스템 아티스트 중 미국 시장 점유율 1위(21.5%)를 기록했습니다. 소비량은 중간 수준이나 전환율은 하위권에 머물러 있습니다. 이 두 위치 간의 격차가 본 문서의 핵심입니다.",
                },
                {
                  name: "IVE",
                  monthlyListeners: "5.76M 월간 리스너",
                  instagram: "7.7M Spotify Followers",
                  reference: "REVIVE+, 2026년 2월",
                  note: "본 자료에서 가장 중요한 행입니다. IVE는 FIFTY FIFTY보다 월간 리스너 수가 적지만 앨범 판매량은 13.6배 많습니다. 이는 소비와 팬덤이 별개의 사업이며, 후자가 수익을 창출한다는 것을 증명하는 기준점 역할을 합니다.",
                },
                {
                  name: "ARTMS",
                  monthlyListeners: "0.59M 월간 리스너",
                  instagram: "0.29M Spotify Followers",
                  reference: "Hyper-Ego, 2026년 8월",
                  note: "K팝에서 가장 유사한 법적 사례이며, 본 세트에서 가장 주목할 만한 수치입니다. ARTMS는 FIFTY FIFTY의 70,650장 대비 69,498장의 발매 첫 주 판매량을 기록했으며, 도달 범위는 1/10에 불과했습니다.",
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
                    { x: "KATSEYE", y: 37714478 },
                    { x: "Glass Animals", y: 24578064 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "LE SSERAFIM", y: 20445854 },
                    { x: "Little Mix", y: 14395254 },
                    { x: "NewJeans", y: 13713434 },
                    { x: "CKay", y: 11211558 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "PSY", y: 7323394 },
                    { x: "i-dle", y: 7030049 },
                    { x: "FIFTY FIFTY", y: 6151601 },
                    { x: "IVE", y: 5758044 },
                    { x: "ARTMS", y: 589277 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "이 차트와 다음 차트를 함께 보십시오. 판매량 면에서는 FIFTY FIFTY가 IVE보다 높고 i-dle보다는 약간 낮습니다. 그러나 그 판매량의 가치를 따지면 순서가 완전히 뒤바뀝니다.",
              source: "Chartmetric, 2026-09-03 기준",
            },
            {
              kind: "hbars",
              title: "팬덤 전환율: 월간 리스너당 팔로워 수",
              subtitle: "0.372의 FIFTY FIFTY는 바이럴 생존자 밴드 그룹에 속하며 K팝 팬덤 밴드 그룹에는 속하지 않습니다. 본 세트 내 모든 한국 아티스트가 이보다 높은 수치를 기록했으며, 일부는 4배 이상 차이가 납니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "Glass Animals", y: 0.197 },
                    { x: "CKay", y: 0.2 },
                    { x: "PSY", y: 0.272 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "FIFTY FIFTY", y: 0.372 },
                    { x: "ARTMS", y: 0.499 },
                    { x: "LE SSERAFIM", y: 0.547 },
                    { x: "Little Mix", y: 0.863 },
                    { x: "NewJeans", y: 0.981 },
                    { x: "IVE", y: 1.332 },
                    { x: "i-dle", y: 1.672 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "FIFTY FIFTY 아래 세 팀은 모두 서구권 바이럴 히트 생존자들입니다. 현재 이 비율이 속한 그룹이며, 그럼에도 불구하고 자체 최고치를 기록하고 있다는 점은 긍정적인 측면입니다.",
              source: "Chartmetric, 2026-09-03 기준",
            },
          ],
        },
        {
          label: "B",
          title: "세트를 재정의하는 수치",
          strategy: "월간 천 명당 앨범 출하량은 도달 범위 단위의 실제 가치를 나타내는 가장 명확한 대리 지표입니다. 이는 비교에서 규모를 완전히 제거하고 아티스트가 얼마나 잘 주목도를 유료 거래로 전환하는지만을 묻습니다.",
          components: {
            heading: "아티스트별 천 명의 가치",
            items: [
              "IVE는 월간 천 명당 166.5장의 앨범으로 전환하며, 이는 FIFTY FIFTY보다 적은 리스너 수입니다.",
              "ARTMS는 117.9, (G)I-DLE은 79.1, Hearts2Hearts는 77.8, LE SSERAFIM은 30.5, ILLIT은 20.6으로 전환합니다.",
              "FIFTY FIFTY는 11.5로 전환하며, 이는 IVE보다 14.5배 낮고 스트리밍 프로필이 가장 유사한 ILLIT의 절반 수준입니다.",
              "ARTMS는 발매 첫 주에 69,498장을 출하한 반면, FIFTY FIFTY는 월간 리스너의 1/10 수준으로 70,650장을 출하했습니다. 현재 FIFTY FIFTY가 ARTMS에 비해 가지고 있는 모든 것은 1,152장의 앨범 가치에 해당합니다.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "월간 천 명당 앨범 출하량",
              subtitle: "전환 격차를 하나의 숫자로 나타냅니다. 한국 음반 사업에만 해당하므로, 세 서구권 아티스트는 추정 대신 제외되었습니다.",
              series: [
                {
                  name: "월간 천 명당 앨범 수",
                  points: [
                    { x: "IVE", y: 166.5 },
                    { x: "ARTMS", y: 117.9 },
                    { x: "i-dle", y: 79.1 },
                    { x: "Hearts2Hearts", y: 77.8 },
                    { x: "NewJeans", y: 71.4 },
                    { x: "LE SSERAFIM", y: 30.5 },
                    { x: "ILLIT", y: 20.6 },
                    { x: "FIFTY FIFTY", y: 11.5 },
                    { x: "KATSEYE", y: 3.2 },
                  ],
                },
              ],
              highlightX: ["FIFTY FIFTY"],
              note: "KATSEYE의 3.2는 실패가 아니라 다른 비즈니스입니다. 즉, 한국 음반이 아닌 투어링과 브랜드를 통해 경제가 운영되는 미국 중심의 아티스트입니다. NewJeans는 2024년 6월 출하량을 2026년 9월 리스너 수로 나누었으며, 이는 방향성만을 나타냅니다.",
              source: "Circle Chart 발매 첫 주 출하량 및 Chartmetric 리스너 수 (모두 2026-09-03 기준)",
            },
          ],
        },
        {
          label: "C",
          title: "세트 구성 방식",
          strategy: "표에서 세 가지 해석이 나오며, 각 해석은 계획의 다른 부분을 가리킵니다.",
          components: {
            heading: "비교를 통해 확립되는 것",
            items: [
              "FIFTY FIFTY의 소비량은 해당 티어 배치보다 건강합니다. 월간 리스너 수에서 IVE의 1.07배, 특히 미국 리스너 수에서는 IVE의 1.52배입니다.",
              "해당 전환율은 한국 아티스트보다는 서구권 바이럴 생존자들과 함께하며, 이는 수정이 창의적인 것이 아니라 구조적인 문제임을 의미합니다.",
              "청취량의 미국 점유율은 21.5%로, KATSEYE 다음으로 해당 세트 내 한국 시스템 아티스트 중 두 번째로 높습니다. 이는 현재 아무도 활용하지 않는 자산입니다.",
              "재건 선례에 따르면 음반 사업이 먼저 회복되고 대중 시장은 느리게 또는 전혀 회복되지 않습니다. 첫 번째에 맞춰 계획하고 두 번째는 추가적인 이익으로 간주하십시오.",
            ],
          },
        },
      ],
      footnote: "비교 대상 세트 선정, 거부된 두 개의 티어 구분점, 그리고 아티스트별 근거는 연구 부록에 전체적으로 문서화되어 있습니다. 지리적 발자국은 차별화 요소로 테스트되었으나 폐기되었습니다. FIFTY FIFTY, ILLIT, IVE 및 (G)I-DLE은 동남아시아 및 라틴 아메리카 도시 프로필이 거의 동일하게 나타나며, KATSEYE를 포함한 해당 세트의 어떤 아티스트에게도 미국 도시가 상위 10위 안에 들지 않습니다. 발자국은 공유되지만 전환율은 그렇지 않습니다.",
    },

    // ===================================================================
    // 03. Consumption & Catalog Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비 및 카탈로그 분석",
      philosophy: "이 데이터셋의 한 라인만이 복리로 증가합니다. 나머지 모든 것은 고정되거나 서서히 상각됩니다. 전체 전략은 복리로 증가하는 라인을 보호하고 육성하는 데서 비롯됩니다.",
      intro: "Built from kworb Spotify chart archives and a 1,364-point Chartmetric daily series covering 2022-11-30 to 2026-08-31. Chart-coverage gaps are treated as gaps throughout and never as zero-stream weeks, because averaging a chart exit as a zero manufactures a collapse that did not happen.",
      subBlocks: [
        {
          label: "A",
          title: "팬덤 전환율, 월별",
          strategy: "이 비율은 두 가지 뚜렷한 단계로 나뉘며, 두 번째 단계만이 의미 있는 증거입니다. 2025년 초까지는 수동적인 카탈로그 청취자들이 이탈하면서 분모가 감소했기 때문에 상승했습니다. 2025년 3월부터 분모는 6.1M에서 6.8M 사이로 안정화되었고 비율은 어쨌든 계속 상승했는데, 이는 분자가 역할을 하기 시작했음을 의미합니다.",
          components: {
            heading: "현재 비율이 말하는 것",
            items: [
              "현재 스냅샷 필드에서 37.15%, 마지막 전체 월말에서 37.26%, 그리고 2026-08-29에 기록된 역대 일일 최고치 37.30%",
              "12개월간 31.93%에서 37.26%로 5.33포인트 상승, 상대적 이득 16.7%",
              "팔로워는 12개월 동안 약 329,000명 증가했으며, 청취자 수는 변동이 없었습니다.",
              "약 20% 이상이면 플레이리스트 주도보다는 팬덤 주도로 읽힙니다. FIFTY FIFTY는 이제 그 기준치의 거의 두 배에 달합니다.",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "월별 팔로워 대 청취자 비율",
              subtitle: "45개월. 역대 최고치는 이 감사 5일 전에 설정되었습니다.",
              unit: "ratio",
              series: [
                {
                  name: "월간 청취자당 팔로워 수",
                  color: "#FD3737",
                  points: [
                    { x: "2023-07", y: 0.033 },
                    { x: "2023-10", y: 0.077 },
                    { x: "2024-01", y: 0.097 },
                    { x: "2024-04", y: 0.153 },
                    { x: "2024-07", y: 0.191 },
                    { x: "2024-10", y: 0.198 },
                    { x: "2025-01", y: 0.263 },
                    { x: "2025-04", y: 0.285 },
                    { x: "2025년 7월", y: 0.291 },
                    { x: "2025년 10월", y: 0.324 },
                    { x: "2026년 1월", y: 0.342 },
                    { x: "2026년 4월", y: 0.343 },
                    { x: "2026년 8월", y: 0.373 },
                  ],
                },
              ],
              markers: [{ x: "2025-04", label: "분모 안정화" }],
              note: "마커의 왼쪽은 감소 연산이며, 오른쪽은 고정된 청취자 기반에서의 팬 축적이며, 이것이 중요한 부분입니다.",
              source: "Chartmetric 일일 시리즈, 아티스트 9966037, 2026-09-03에 추출",
            },
            {
              kind: "bars",
              title: "Spotify Follower Net Adds per Day, by Quarter",
              subtitle: "데이터셋에서 유일하게 복리로 증가하는 라인입니다. 고정된 청취자 볼륨에 대한 4분기 연속 가속화.",
              unit: "followers/day",
              series: [
                {
                  name: "일일 순수 신규 구독자 수",
                  points: [
                    { x: "2024년 3분기", y: 725 },
                    { x: "2024년 4분기", y: 1294 },
                    { x: "2025년 1분기", y: 802 },
                    { x: "2025년 2분기", y: 583 },
                    { x: "2025년 3분기", y: 496 },
                    { x: "2025년 4분기", y: 836 },
                    { x: "2026년 1분기", y: 902 },
                    { x: "2026년 2분기", y: 965 },
                    { x: "2026년 3분기", y: 1079 },
                  ],
                },
              ],
              highlightX: ["2025년 3분기", "2026년 3분기"],
              note: "일일 순수 신규 구독자 수는 비율과 달리 청취자 수 감소로 인해 부풀려질 수 없는 1차 차이입니다. 신규 구독자 수는 2025년 3분기에 일일 496명으로 최저치를 기록한 이후 매 분기 상승하여 1,079명에 도달했으며, 이는 2024년 4분기 이후 최고치입니다. 2026년 3분기는 부분 분기입니다.",
              source: "Chartmetric 일일 팔로워 시리즈, 2026-09-03 기준",
            },
          ],
        },
        {
          label: "B",
          title: "카탈로그 집중도",
          strategy: "카탈로그는 2023년 발매 음반 하나에 크게 집중되어 있습니다. 이것이 솔직한 시작점입니다. 더 유용한 분석은 두 번째 열에 있습니다. 현재 라인업의 결과물이 카탈로그에서 차지하는 비중 대비 현재 얼마나 수익을 올리고 있는가입니다.",
          components: {
            heading: "중요한 두 개의 열",
            items: [
              "8개 버전의 'Cupid' 프랜차이즈는 역대 스트리밍의 84.22%와 현재 일일 스트리밍의 74.90%를 차지합니다.",
              "오리지널 라인업의 'Cupid' 외 7개 트랙은 역대 스트리밍의 9.96%, 현재 일일 스트리밍의 6.29%를 차지합니다.",
              "라인업 변경 후 40개 트랙의 결과물은 역대 스트리밍의 5.82%를 차지하지만, 현재 일일 스트리밍의 18.81%를 차지하며 이는 카탈로그 비중의 3.2배입니다.",
              "두 개의 앨범 수록곡이 활발하게 성장하고 있습니다. 'Gravity'는 자체 일일 평균 대비 119%의 성과를 내고 있으며 'Cupid' 외 최대 수익원으로 하루 18,108건을 기록하고 있고, 'Genie Magic'은 자체 EP의 타이틀곡보다 110% 더 많은 스트리밍을 기록하고 있습니다.",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "카탈로그 점유율 대 현재 수익 점유율",
              subtitle: "현재 라인업의 결과물은 카탈로그에서 차지하는 비중은 작지만, 현재 일일 스트리밍에서는 훨씬 더 큰 비중을 차지합니다.",
              unit: "% 점유율",
              series: [
                {
                  name: "역대 스트리밍 점유율",
                  color: "#8A8A8A",
                  points: [
                    { x: "Cupid 프랜차이즈", y: 84.22 },
                    { x: "Cupid 외 오리지널", y: 9.96 },
                    { x: "현 멤버 구성", y: 5.82 },
                  ],
                },
                {
                  name: "현재 일일 점유율",
                  color: "#FD3737",
                  points: [
                    { x: "Cupid 프랜차이즈", y: 74.9 },
                    { x: "Cupid 외 오리지널", y: 6.29 },
                    { x: "현 멤버 구성", y: 18.81 },
                  ],
                },
              ],
              note: "카탈로그의 5.82%를 차지하는 40개의 트랙이 일일 스트리밍의 18.81%를 생산하고 있습니다. 현재 라인업의 콘텐츠는 카탈로그 점유율이 시사하는 바보다 훨씬 높은 비율로 소비되고 있습니다. 이 격차는 품질 문제가 아니라 발견 및 홍보 문제입니다.",
              source: "kworb.net 노래 페이지, 55개 트랙, 2026-09-02 기준. 트랙 총계는 kworb의 명시된 아티스트 총계와 0.01% 이내로 일치합니다.",
            },
          ],
        },
        {
          label: "C",
          title: "리스너 플로어",
          strategy: "플로어는 발매 사이에 월간 리스너 수의 최저치를 의미합니다. 이는 모든 발매 스파이크를 제거하기 때문에, 아티스트가 유지하는 것을 가장 정직하게 측정하는 지표입니다. 플로어가 상승한다는 것은 팬 확보가 효과적임을 의미합니다.",
          components: {
            heading: "플로어 추이, 시대별 비교",
            items: [
              "2024년 8월 플로어 8.34M, 2025년 4월 플로어 6.31M, 24.3% 하락",
              "2025년 12월 플로어 6.04M, 4.3% 하락, 하락세가 뚜렷하게 둔화됨",
              "2026년 8월 플로어 6.12M, 1.5% 상승, 해당 시리즈에서 첫 증가",
              "시대 간 복합 주간 감소율이 단계적으로 둔화되었습니다: 2.49%, 1.51%, 0.57%",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "리스너 플로어, 시대별 비교",
              subtitle: "발매 사이의 최저치가 하락을 멈추고 상승했습니다.",
              unit: "월간 리스너",
              series: [
                {
                  name: "플로어",
                  points: [
                    { x: "2024년 8월", y: 8335862 },
                    { x: "2025년 4월", y: 6306990 },
                    { x: "2025년 12월", y: 6035209 },
                    { x: "2026년 8월", y: 6123844 },
                  ],
                },
              ],
              highlightX: ["2026년 8월"],
              note: "각 에라별 주간 2.49%에서 1.51%로, 그리고 0.57%로 감소한 이탈률과 함께 살펴보십시오. 청중은 매 주기마다 더 느리게 이탈하고 있으며, 가장 최근 기간에는 이탈이 멈췄습니다.",
              source: "Chartmetric 월간 리스너, 릴리즈 간 최저점 기준 30일 이동 평균, 2026-09-03 기준",
            },
            {
              kind: "bars",
              title: "릴리즈 간 복합 주간 리스너 이탈률",
              unit: "%/주",
              series: [
                {
                  name: "주간 이탈률",
                  points: [
                    { x: "에라 1에서 2", y: 2.49 },
                    { x: "에라 2에서 3", y: 1.51 },
                    { x: "에라 3에서 4", y: 0.57 },
                  ],
                },
              ],
              source: "Chartmetric 일간 시리즈, 2026-09-03 기준",
            },
          ],
        },
        {
          label: "D",
          title: "실물 음반 판매량, 올바른 방향으로 추세 상승",
          strategy: "실물 음반은 라인업 변경을 거치면서 성장한 유일한 사업 부문이며, 히트곡의 지원 없이도 성장했습니다. 이는 진정한 팬덤이 존재하며 거래할 의사가 있다는 가장 명확한 증거입니다.",
          components: {
            heading: "실물 음반 판매 추세가 보여주는 것",
            items: [
              "Circle 누적 판매량은 The Beginning: Cupid 39,373장, Love Tune 38,455장, Day & Night 108,313장, Imperfect-I'mperfect 88,247장을 기록했습니다.",
              "Day & Night의 확인된 Hanteo 초동 판매량은 100,121장이며, 첫날 판매량은 46,000장을 넘었습니다.",
              "해당 Hanteo 초동 판매량은 Circle의 전체 발매 주간 출하량 26,359장의 약 네 배에 달했으며, Circle은 7월 말 버전 재발매를 통해 겨우 따라잡았습니다.",
              "수요와 출하량 간의 격차는 공급 및 버전 시점 문제이며, 이는 본 문서에서 가장 해결 가능한 문제 유형입니다.",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "앨범 발매별 출하량",
              subtitle: "현 라인업의 정규 앨범 두 개를 오른쪽으로 표시한 릴리즈별 써클 누적량입니다.",
              unit: "units",
              series: [
                {
                  name: "써클 누적량",
                  color: "#FD3737",
                  points: [
                    { x: "The Beginning: Cupid", y: 39373 },
                    { x: "Love Tune", y: 38455 },
                    { x: "Day & Night", y: 108313 },
                    { x: "Imperfect-I'mperfect", y: 88247 },
                  ],
                },
                {
                  name: "발매 첫 주 출하량",
                  color: "#8A8A8A",
                  points: [
                    { x: "The Beginning: Cupid", y: 14069 },
                    { x: "Love Tune", y: 14525 },
                    { x: "Day & Night", y: 26359 },
                    { x: "Imperfect-I'mperfect", y: 70650 },
                  ],
                },
              ],
              note: "오른쪽에서 두 개의 막대가 수렴하는 것이 핵심입니다. 발매 첫 주 출하량은 Day & Night 앨범의 경우 최종 누적량의 19%에서 Imperfect-I'mperfect 앨범의 경우 80%로 증가했으며, 이는 수요가 발생할 때 공급이 마침내 도달하고 있음을 의미합니다. Imperfect 앨범의 현재까지 누적량은 2026이며, 앞으로 더 증가할 것입니다.",
              source: "Circle Chart, 실시간 기준 2026-09-03. Day & Night은 두 가지 버전 라인을 합산한 수치입니다. Hanteo 첫 주 기록은 Soompi를 통해 확인되었습니다.",
            },
          ],
        },
        {
          label: "E",
          title: "시장 및 카탈로그 규모",
          strategy: "지리적 분포는 본 감사에서 가장 덜 활용된 사실입니다. FIFTY FIFTY는 소비 측면에서는 미국 아티스트이며 프로모션 측면에서는 한국 아티스트인데, 현재 운영 방식은 이 문장의 앞부분에 맞춰져 있지 않습니다.",
          components: {
            heading: "실제 청취가 이루어지는 곳",
            items: [
              "The United States is the number one market on Spotify at 1,319,600 listeners, 21.45 percent of global",
              "대한민국은 115,029명의 리스너로 18위를 차지하며, 1.87%를 기록했습니다. 미국은 본국 시장의 11.5배 규모입니다.",
              "미국은 또한 Instagram에서 팔로워의 27.99%로 1위, TikTok에서 17.00%, YouTube에서 17.27%로 1위를 차지하고 있습니다.",
              "동남아시아가 다음 네 자리를 차지합니다: 인도네시아 682,061명, 필리핀 653,540명, 말레이시아 497,717명, 대만 292,381명입니다.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Spotify Monthly Listeners",
              subtitle: "한국은 18위입니다. K팝 아티스트의 국내 프로모션에 자금을 지원하는 시장은 이 아티스트의 음악을 듣는 시장이 아닙니다.",
              unit: "월간 리스너",
              series: [
                {
                  name: "리스너",
                  points: [
                    { x: "미국", y: 1319600 },
                    { x: "인도네시아", y: 682061 },
                    { x: "필리핀", y: 653540 },
                    { x: "말레이시아", y: 497717 },
                    { x: "독일", y: 449011 },
                    { x: "폴란드", y: 422723 },
                    { x: "대만", y: 292381 },
                    { x: "호주", y: 260388 },
                    { x: "브라질", y: 224759 },
                    { x: "멕시코", y: 216504 },
                    { x: "영국", y: 215039 },
                    { x: "일본", y: 157054 },
                    { x: "대한민국", y: 115029 },
                  ],
                },
              ],
              highlightX: ["미국", "대한민국"],
              note: "국가별 행은 Chartmetric 자체 추정 플래그를 포함하며, 정확한 수치보다는 비율로 해석해야 합니다. 비율이 순위에 의심의 여지가 없을 정도로 가깝지는 않습니다.",
              source: "Chartmetric where-people-listen, 2026-09-03 기준",
            },
          ],
        },
      ],
      footnote: "조사에서 가져온 방법론 참고: 1,364명의 리스너 포인트 중 230개는 Chartmetric에서 보간된 것으로 플래그가 지정되었으며, 2025년에 집중되고 2023년에는 누락되었으므로 2023년 시대는 완전히 측정되었고 2025년 저점은 방향성을 가집니다. 차트 커버리지 공백은 전체에 걸쳐 공백으로 표시되며 절대 0으로 채워지지 않습니다.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "오디언스",
      title: "미국 오디언스 및 타겟팅",
      intro: "미국은 측정된 네 가지 플랫폼 모두에서 FIFTY FIFTY의 가장 큰 시장이며, 가장 적게 구축된 시장입니다. 이 섹션에서는 실제로 누가 존재하며 그들에게 어떻게 도달할 수 있는지 정의합니다.",
      thesis: "오디언스는 명확하게 두 개로 나뉘며, 이 분할은 팔로워 데이터보다는 참여 데이터에서 더 잘 보입니다. 미국은 규모가 있는 곳이며 수동적으로 행동합니다. 아시아는 강도가 있는 곳이며 적극적으로 행동합니다. 팔로워 수만 읽는 계획은 조용한 시장을 작은 시장으로 착각할 것입니다.",
      metrosLabel: "주요 미국 도시",
      metros: [
        { name: "로스앤젤레스", tier: "primary" },
        { name: "뉴욕", tier: "primary" },
        { name: "시카고", tier: "primary" },
        { name: "댈러스", tier: "primary" },
        { name: "애틀랜타", tier: "secondary" },
        { name: "휴스턴", tier: "secondary" },
        { name: "시애틀", tier: "secondary" },
        { name: "샌프란시스코 베이 에어리어", tier: "secondary" },
        { name: "워싱턴 D.C.", tier: "secondary" },
        { name: "호놀룰루", tier: "secondary" },
      ],
      genderDistribution: { female: 77, male: 23 },
      psychographics: [
        {
          label: "미국 내 수동적 다수층",
          items: [
            "1,319,600 Spotify monthly listeners, 21.45 percent of global and rank one of twenty-three countries",
            "인스타그램 팔로워의 27.99%로 1위, 틱톡 17.00%, 유튜브 17.27%로 1위 기록",
            "2023년 크로스오버 모멘트를 통해 주로 획득되었으며, 수동적인 카탈로그 플레이를 통해 유지됨",
            "접근 가능하고 타겟팅 가능하며 거의 완전히 포착되지 않은 상태인데, 이는 현재 어떠한 자체 플랫폼에서도 이들에게 어떠한 요청도 하지 않기 때문입니다.",
          ],
        },
        {
          label: "아시아 내 활동적 소수층",
          items: [
            "인스타그램 팔로워는 여성 비율이 77%로 치우쳐 있지만, 실제 게시물에 좋아요를 누르는 계정은 인도네시아와 한국을 중심으로 남성 비율이 59.6%, 아시아 비율이 66.3%입니다.",
            "유튜브에서 한국은 구독자의 6.9%를 차지하며, 댓글 볼륨의 47.5%를 차지합니다.",
            "Indonesia, the Philippines, Malaysia and Taiwan together carry more Spotify listeners than the United States",
            "이들은 팬콘에 참여하고, 앨범 버전을 구매하며, 댓글 섹션을 활성화하는 그룹입니다.",
          ],
        },
        {
          label: "What Spotify Already Believes",
          items: [
            "Half of current Spotify editorial reach is non-K-pop: BILLIONS CLUB at 949,966 followers, This is Sabrina Carpenter at 778,007, skincare at 98,873",
            "이는 K-pop 측 1,762,781명에 비해 일반 팝 도달 범위에서 1,826,846명이며, K-pop 측의 96%는 단일 드라마 사운드트랙 배치입니다.",
            "Spotify is not programming this act as K-pop, it is programming it as pop",
            "에디토리얼에 대한 제안은 플랫폼 자체의 해석을 따르는 것이지, 이에 맞서는 것이 아니어야 합니다.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "TikTok에서 가장 많이 사용되는 FIFTY FIFTY의 에셋은 레이블이 통제하지 않는 제3자의 스피드업 업로드입니다.",
          platforms: ["TikTok"],
          implication: "That upload carries 14,311,597 videos against the official version's 3,002,121, roughly 4.8x, and still drives 112,129 Spotify streams a week. Reclaiming or partnering around that audio is a free distribution asset sitting in plain sight.",
        },
        {
          behavior: "Instagram은 동일한 크리에이티브에 대해 TikTok보다 팔로워당 3.2배 더 많은 조회수를 제공합니다.",
          platforms: ["Instagram", "TikTok"],
          implication: "현재 보조적으로 취급되는 플랫폼이 더 효율적입니다. 미국의 유료 및 유기적 비중은 팔로워 수가 아닌 효율성을 따라야 합니다.",
        },
        {
          behavior: "5.6M 팔로워에 걸친 모든 바이오 링크는 캡처 필드 없이 동일한 제3자 스마트 링크로 연결됩니다.",
          platforms: ["Instagram", "TikTok", "YouTube"],
          implication: "현재 업계에서 가장 큰 잠재 고객에게는 레이블이 소유한 리스트로의 경로가 없습니다.",
        },
      ],
      barriers: [
        {
          barrier: "구매를 원하는 미국 팬은 아무것도 연결되지 않은 매장을 찾아야 합니다.",
          response: "모든 바이오 링크와 모든 비디오 엔드 카드를 먼저 캡처하고 판매하는 자체 목적지로 연결하십시오.",
        },
        {
          barrier: "가입을 원하는 미국 팬은 가입할 것이 없습니다. 멤버십도, 리스트도, SMS도 없습니다.",
          response: "한국 데이터 법률이 미국 표면에서 미국 거주자에게 허용하는 미국 법률에 따른 제1자 캡처 레이어를 구축하십시오.",
        },
        {
          barrier: "참석을 원하는 미국 팬은 2024년 이후 한 번의 극장 상영만 있었고 발표된 날짜는 없습니다.",
          response: "직접 도달할 수 없는 잠재 고객에게 발표하는 대신, 단일 앵커 미국 이벤트를 구축하여 리스트에 판매하십시오.",
        },
        {
          barrier: "미국 팬이 명확한 핸들을 검색했을 때 채널이 비어 있는 경우",
          response: "도용된 핸들을 복구하거나 리디렉션하고 모든 플랫폼에서 명칭을 통일하십시오.",
        },
      ],
      triggers: [
        {
          trigger: "게임 및 e스포츠 크로스오버 콘텐츠",
          implication: "전체 계정에서 5배 높은 성과를 내는 가장 높은 성과를 보이는 채널이며, 미국 플랫폼 문화에 가장 잘 맞는 채널입니다.",
        },
        {
          trigger: "잠재 고객이 이미 팔로우하고 있는 인지도 있는 게스트",
          implication: "다른 팬덤으로 확장되는 게스트 주도 게시물은 FIFTY FIFTY 형식으로 게스트를 초대하는 게스트 주도 게시물보다 13.6배 더 높은 성과를 보입니다.",
        },
        {
          trigger: "하나 이상 구매할 만한 확실한 이유가 있는 실물 상품",
          implication: "미국 내 소매 인프라가 거의 없음에도 불구하고 단 한 번의 Hanteo 주간 판매량으로 100,121건의 수요가 확인되었습니다.",
        },
      ],
      similarArtists: ["ILLIT", "KATSEYE", "Hearts2Hearts", "i-dle", "IVE", "LE SSERAFIM"],
      genres: ["K-pop", "Pop", "Dance", "East Asia pop"],
      platformSignals: [
        { platform: "Spotify", note: "월간 리스너 6,151,601명, 팔로워 2,285,356명, 미국 내 순위 1위 (21.45%)" },
        { platform: "TikTok", note: "팔로워 2,422,487명, 좋아요 49,169,006개, 미국 내 순위 1위 (17.00%)" },
        { platform: "Instagram", note: "팔로워 955,707명이며 모든 자체 플랫폼 중 팔로워당 최고 조회수를 기록했습니다." },
        { platform: "YouTube", note: "구독자 2,230,000명, 채널 조회수 1,249,962,723회, 월간 동영상 조회수 24,919,966회" },
      ],
      footnote: "Spotify age and gender demographics are not exposed at the current Chartmetric API tier and are recorded as unavailable rather than estimated. The gender split shown is Instagram follower data. U.S. metro priorities are drawn from platform-level country share and standard K-pop U.S. touring geography, not from Spotify city data, because no U.S. city appears in the top ten for any act in the comp set including those with far larger U.S. bases.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Video AI",
      title: "Video Intelligence / 105개 동영상, 프레임별 분석",
      intro: "본 섹션의 모든 FIFTY FIFTY 및 경쟁사 영상은 영구적인 비디오 AI 지식 저장소에 수집되어 프레임별로 분석되었으며 실제 성과 데이터와 결합되었습니다. 샘플이 아닌 5,460개의 전체 게시물 목록을 대상으로 선택이 진행되었습니다. 아래 결과는 자체 초기 가정을 뒤엎는 결과 하나를 포함하여 교차 검증을 거쳐 살아남은 것들입니다.",
      methodology: [
        { label: "코퍼스", value: "영상 105개, FIFTY FIFTY 60개, 경쟁사 45개" },
        { label: "열거됨", value: "선택 전 6개 계정의 게시물 5,460개" },
        { label: "경쟁사 세트", value: "KATSEYE, i-dle, Hearts2Hearts, 각 15개" },
        { label: "포함된 시대", value: "오리지널 라인업 및 현재 라인업, 모두 계층화됨" },
        { label: "성과 결합", value: "각 항목별 조회수, 좋아요, 댓글, 공유 및 참여율" },
        { label: "교차 검증", value: "소유한 모든 TikTok 게시물 1,006개에 대한 독립적인 캡션 스캔" },
      ],
      corpusStats: [
        { label: "분석된 영상", value: "105", detail: "자체 제작 60개, 경쟁사 45개, 수집 실패 0건" },
        { label: "CTA가 포함된 게시물", value: "60개 중 3개", detail: "전체 1,006개 게시물 캡션 스캔에 걸쳐 0.5%" },
        { label: "최고 성과 차선", value: "584,750", detail: "2026년 게임 및 e스포츠 콘텐츠 평균 조회수" },
        { label: "전체 결과물에서 차지하는 비중", value: "3.7%", detail: "2026년 272개 중 10개 게시물" },
      ],
      mixColumnLabel: "FIFTY FIFTY",
      benchmarkColumnLabel: "경쟁사 세트",
      mixHeading: "경쟁사 세트 대비 결과물",
      mixIntro: "게시물 수는 전체 세트에서 유사하나, 게시물당 결과물은 그렇지 않으며 이것이 유용한 부분입니다. 무엇이 잘못되었든 노력 부족은 아닙니다.",
      mixRows: [
        {
          metric: "2026년 게시물 수",
          lolaAmour: "272",
          benchmark: "280개 ~ 551개",
          read: "inline",
          note: "KATSEYE 280개, i-dle 356개, Hearts2Hearts 551개. 양은 차별점이 아닙니다.",
        },
        {
          metric: "2026년 게시물당 평균 조회수",
          lolaAmour: "94,100",
          benchmark: "431,000회 ~ 7,900,000회",
          read: "behind",
          note: "i-dle 4.6배, Hearts2Hearts 28.7배, KATSEYE 84.0배.",
        },
        {
          metric: "행동 유도 문구가 포함된 게시물",
          lolaAmour: "0.5%",
          benchmark: "표준 관행",
          read: "behind",
          note: "자체 보유 TikTok 게시물 1,006개 중 5개. 스토어, 위버스, 프로필 링크 또는 사전 저장으로 연결되는 지점은 없습니다.",
        },
        {
          metric: "팔로워당 조회수, Instagram",
          lolaAmour: "0.186",
          benchmark: "TikTok 0.058",
          read: "ahead",
          note: "차선으로 취급되는 플랫폼은 팔로워당 3.2배 더 효율적입니다.",
        },
        {
          metric: "참여율, TikTok",
          lolaAmour: "10.7%",
          benchmark: "Instagram 8.4%",
          read: "ahead",
          note: "TikTok은 깊이를 제공하고 Instagram은 도달 범위를 제공합니다. 둘 다 다른 목적에 사용할 수 있습니다.",
        },
        {
          metric: "최고 성과를 내는 분야의 결과물 점유율",
          lolaAmour: "3.7%",
          benchmark: "해당 없음",
          read: "behind",
          note: "게이밍 분야는 다른 모든 분야보다 5.7배 더 높은 성과를 내고 있으며, 자체 결과 대비 생산량이 부족합니다.",
        },
      ],
      mixFootnote: "경쟁사 중앙값은 2026년 9월 3일에 조회된 2026개의 게시물뿐입니다. 이 비교는 목표라기보다는 맥락이며, KATSEYE는 다른 예산 및 배포 계층에서 운영되므로 벤치마크가 아닌 상한선으로 포함됩니다.",
      charts: [
        {
          kind: "bars",
          title: "콘텐츠 분야별 중앙값 조회수, 2026",
          subtitle: "10개의 게이밍 게시물이 217개의 퍼스널리티 게시물보다 5.7배 더 높은 성과를 냅니다.",
          unit: "중앙값 조회수",
          series: [
            {
              name: "중앙값 조회수",
              points: [
                { x: "게이밍 및 e스포츠", y: 584750 },
                { x: "퍼스널리티", y: 103200 },
                { x: "이벤트 및 팬콘", y: 91200 },
                { x: "릴리스 프로모션", y: 66550 },
              ],
            },
          ],
          highlightX: ["게이밍 및 e스포츠"],
          note: "결과물 점유율은 성과와 거의 정반대로 나타납니다: 게이밍 3.7%, 퍼스널리티 79.8%, 팬콘 4.0%, 릴리스 프로모션 12.5%. 가장 성과가 낮은 분야가 제품을 판매하는 분야입니다.",
          source: "272개의 자체 TikTok 게시물, 2026, 성과 결합 2026-09-03",
        },
        {
          kind: "bars",
          title: "게이밍 분야의 진행 방향",
          subtitle: "타사 플랫폼으로 진출하는 것이 자사 플랫폼으로 유입시키는 것보다 13.6배 더 효과적입니다.",
          unit: "중앙값 조회수",
          series: [
            {
              name: "중앙값 조회수",
              points: [
                { x: "FIFTY FIFTY, 게이밍 문화에 진출", y: 707850 },
                { x: "게이밍 인플루언서를 챌린지 형식에 참여시킴", y: 52200 },
              ],
            },
          ],
          highlightX: ["FIFTY FIFTY, 게이밍 문화에 진출"],
          note: "8개의 게시물 대 4개. 표본 수는 적지만, 무시하기보다는 테스트로 활용할 만큼 격차가 충분히 크고 일관적입니다.",
          source: "자체 보유 TikTok 데이터, 2026-09-03 성과 합산",
        },
        {
          kind: "grouped",
          title: "노출량은 증가했으나 도달률은 하락했습니다.",
          subtitle: "연령대가 일치하는 기간으로, 오래된 게시물이 축적될 시간이 더 많았던 것이 아닙니다.",
          series: [
            {
              name: "중앙값 조회수",
              color: "#FD3737",
              points: [
                { x: "오리지널 라인업, 2022년 11월 ~ 2023년 6월", y: 834800 },
                { x: "재출시, 2024년 9월 ~ 2025년 6월", y: 157100 },
                { x: "현재, 2026년", y: 94100 },
              ],
            },
            {
              name: "월별 게시물 수 (단위: 천 개)",
              color: "#8A8A8A",
              points: [
                { x: "오리지널 라인업, 2022년 11월 ~ 2023년 6월", y: 9900 },
                { x: "재출시, 2024년 9월 ~ 2025년 6월", y: 32900 },
                { x: "현재, 2026년", y: 34000 },
              ],
            },
          ],
          note: "계정의 게시 빈도는 3배 증가했지만, 게시물당 도달률은 약 5배 감소했습니다. 월별 게시물 수는 1천 개 단위로 조정되어 두 데이터 시리즈가 동일한 축에서 표시됩니다. 이는 양적 문제가 아닌, 질적(더 적은 수의 더 큰 영향력) 문제입니다.",
          source: "자체 보유 TikTok 게시물 1,006개 (2026-09-03 기준)",
        },
        {
          kind: "grouped",
          title: "동일한 콘텐츠, 두 개의 플랫폼",
          subtitle: "19개의 동일 날짜 교차 게시 쌍. 동일한 영상이 Instagram에서 더 나은 성과를 보였습니다.",
          unit: "views",
          series: [
            {
              name: "Instagram",
              color: "#FD3737",
              points: [
                { x: "FC Bayern 챌린지", y: 2304569 },
                { x: "TenZ 협업", y: 1432469 },
                { x: "대기실", y: 177673 },
              ],
            },
            {
              name: "TikTok",
              color: "#8A8A8A",
              points: [
                { x: "FC Bayern 챌린지", y: 108100 },
                { x: "TenZ 협업", y: 573100 },
                { x: "대기실", y: 521700 },
              ],
            },
          ],
          note: "19개 쌍 전체의 중간값 TikTok 대 Instagram 비율은 0.75x입니다. 두 쌍은 반대 경향을 보였으며, 대기실 게시물이 예외 사례 중 하나로 표시되어 예외 사항이 숨겨지지 않고 드러납니다.",
          source: "60개의 Instagram 릴 영상 샘플에서 확인된 19개의 동일 날짜 교차 게시 쌍",
        },
      ],
      findingsHeading: "결론",
      findingsIntro: "각각의 근거가 되는 수치와 게시물을 포함한 8가지 결론입니다. 단일 출처의 결론은 그렇게 명시했으며, 분석 대상이 우리의 초기 가설과 상반되는 경우도 마찬가지로 명시했습니다.",
      findings: [
        {
          id: "no-conversion-path",
          title: "콘텐츠 내에 전환 경로가 없습니다. 1,006개의 게시물 중 5개만이 무언가를 요청합니다.",
          verdict: "confirmed",
          confidence: "높음, 두 독립적인 출처가 일치함",
          summary: "영상 AI 분석 결과 60개의 영상에서 3개의 CTA(Call to Action)를 발견했으며, 그중 2개만이 팬이 실제로 전환할 수 있는 곳을 가리켰습니다. 1,006개의 자체 보유 TikTok 게시물 전체에 대한 독립적인 캡션 스캔 결과, 전환 관련 문구를 포함한 게시물은 5개, 즉 0.5%에 불과했습니다. 스토어로는 0, Weverse로는 0, 프로필 링크로는 0, 사전 저장으로는 0입니다.",
          evidence: [
            "분석된 60개 영상 중 3개에 CTA가 포함되어 있으며, 그중 2개는 팬콘 티켓 언급입니다.",
            "자체 보유 TikTok 게시물 1,006개 중 5개(0.5%)가 캡션에 전환 관련 문구를 포함하고 있습니다.",
            "분석 대상 영상 중 CTA가 포함된 두 영상 모두 91,900회 및 91,200회의 조회수로 저조한 성과를 보였습니다.",
            "두 출처는 독립적으로 도출되었으며 일치하므로, 이 섹션에서 가장 높은 신뢰도를 가진 결론입니다.",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7677513885024308498",
              label: "Athena Valorant 게시물",
              date: "2026-08-24",
              stat: "2,042,890회 조회",
              note: "올해 가장 큰 성과를 낸 단일 게시물이 아무런 목적지로 연결되지 않습니다.",
            },
            {
              platform: "tiktok",
              id: "7674654244569402644",
              label: "we so bad",
              date: "2026-08-17",
              stat: "965,828회 조회",
              note: "두 번째로 큰 성과. CTA 없음, 링크 없음, 목적지 없음.",
            },
          ],
          pivot: {
            title: "이미 존재하는 도달 범위에 목적지를 설정하십시오.",
            actions: [
              "설정된 조회수 임계값 이상의 모든 게시물에 2초 길이의 엔드 카드를 표준화하여 자체 보유 목적지 하나를 가리키도록 하십시오.",
              "모든 프로필 링크를 DSP 또는 스토어로 전달하기 전에 이메일을 수집하는 자체 보유 페이지로 이동시키십시오.",
              "매월 상위 10개 게시물을 유료 미디어 인벤토리로 간주하고 시청한 모든 사용자에게 리타겟팅하십시오.",
              "캠페인별 결정이 아닌, 측정된 주당 최소 1개의 전환 발생 게시물을 설정하십시오.",
            ],
          },
        },
        {
          id: "gaming-format-effect",
          title: "게이밍 레인은 멤버 효과가 아닌 포맷 효과입니다.",
          verdict: "confirmed",
          confidence: "높음, 격리 테스트는 깨끗합니다.",
          summary: "게이밍 및 e스포츠 콘텐츠는 계정 내에서 압도적으로 최고의 성과를 내는 레인이며, 한 멤버가 우연히 게이머라는 명백한 설명은 통하지 않습니다. 멤버를 고정하고 콘텐츠 유형을 변경하면 3.29배의 격차가 발생합니다. 콘텐츠 유형을 고정하고 멤버를 변경하면 1.23배가 발생합니다. 레인이 주도적이며 멤버는 그 안으로 들어가는 접근 경로입니다.",
          evidence: [
            "Athena 태그가 지정된 게이밍 게시물 중앙값은 344,300으로, Athena 태그가 지정된 비게이밍 게시물 104,550에 비해 3.29배의 포맷 효과를 보입니다.",
            "Athena 태그가 지정된 비게이밍 104,550은 다른 멤버의 비게이밍 84,700에 비해 1.23배의 멤버 효과를 보입니다.",
            "게이밍 및 e스포츠 중앙값은 2026년 전체 584,750으로, 계정 전체 94,100에 비해 높습니다.",
            "해당 레인은 전체 결과물의 3.7%를 차지하지만 성과 분포의 최상단을 생산합니다.",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7674211603474091284",
              label: "Valorant 하이라이트",
              date: "2026-08-15",
              stat: "596,155회 조회",
            },
            {
              platform: "tiktok",
              id: "7674081606616763668",
              label: "TenZ 협업",
              date: "2026-08-15",
              stat: "573,059회 조회",
            },
          ],
          pivot: {
            title: "해당 레인을 우연이 아닌 프랜차이즈로 구축하십시오.",
            actions: [
              "기회주의적으로 게시하는 대신 고정된 슬롯을 가진 정기적인 게이밍 속성을 명명하고 일정을 잡으십시오.",
              "데이터에 따르면 결과는 사람이 아닌 포맷이 이끌기 때문에 네 명의 멤버 모두를 순환시키십시오.",
              "이 콘텐츠가 문화적으로 고유하고 청취자 기반이 가장 큰 미국과 e스포츠 시청자를 구체적으로 타겟팅하십시오.",
              "e스포츠 파트너십을 일회성 콘텐츠 협업이 아닌 자체적인 잠재고객을 가진 유통 채널로 취급하십시오.",
            ],
          },
        },
        {
          id: "direction-of-travel",
          title: "다른 세계로 들어가는 것이 그 세계를 당신의 세계로 가져오는 것보다 13.6배 더 뛰어납니다.",
          verdict: "confirmed",
          confidence: "중간에서 높음, 적은 n값 및 매우 큰 격차",
          summary: "게임 관련 게시물은 기계적으로 두 가지 다른 종류로 나뉩니다. FIFTY FIFTY가 게임 문화 속으로 들어가 그들의 공간과 조건에 맞춰 등장할 때, 중앙값은 707,850입니다. 게임 인물이 FIFTY FIFTY 챌린지 형식으로 초대될 때, 중앙값은 52,200입니다. 같은 채널, 같은 멤버, 같은 기간 동안 13.6배의 차이가 납니다.",
          evidence: [
            "FIFTY FIFTY가 게임 문화 속으로 진입, 8개 게시물, 중앙값 707,850회 조회",
            "챌린지 형식으로 초대된 게임 게스트, 4개 게시물, 중앙값 52,200회 조회",
            "이 패턴은 단일 이상치에 의해 주도되기보다는 세트 내 모든 쌍에 걸쳐 일관됩니다.",
            "양측 모두 표본 수가 적으므로, 이는 확정된 법칙이라기보다는 테스트해야 할 강력한 신호로 간주됩니다.",
          ],
          pivot: {
            title: "게스트를 섭외하기보다는 그룹을 외부로 보내십시오.",
            actions: [
              "협업의 기본 설정을 뒤집으십시오: 파트너의 형식 안에 등장하도록 제안하고, 우리 채널에서 그들을 호스트하지 마십시오.",
              "스튜디오 기반 게스트 촬영보다는 여행 및 출연에 예산을 책정하십시오.",
              "게임 외의 분야에서도 인접한 팬덤이 자체적인 네이티브 형식을 가지고 있는 곳이라면 어디든 동일한 원칙을 적용하십시오.",
              "모든 협업은 우리 채널에서 실행되는 게시물이 아닌, 파트너의 잠재고객에서 얻은 조회수로 측정하십시오.",
            ],
          },
        },
        {
          id: "personality-not-the-driver",
          title: "개인 콘텐츠는 성장 동력이 아닙니다. 이미 전체 계정을 차지하고 있습니다.",
          verdict: "refuted",
          confidence: "높음, 이는 우리의 초기 가설을 뒤집었습니다.",
          summary: "우리는 이 분석에서 개인 및 멤버 주도 콘텐츠가 음반 홍보보다 훨씬 뛰어나고, 따라서 더 많이 제작해야 한다는 처방이 나올 것이라고 예상했습니다. 그러나 코퍼스는 이를 반박했습니다. 개인 콘텐츠는 음반 홍보보다 1.55배 뛰어나며, 이는 실질적이지만 미미한 수준이며 이미 전체 콘텐츠의 79.8%를 차지합니다. 계정이 거의 전적으로 이미 하고 있는 것을 더 많이 하는 데는 여지가 없습니다.",
          evidence: [
            "2026년 중앙값: 게임 584,750, 개인 103,200, 이벤트 및 팬콘 91,200, 음반 홍보 66,550",
            "2026년 개인 콘텐츠는 272개 게시물 중 217개로, 발행된 모든 것의 79.8%를 차지합니다.",
            "게임은 개인 콘텐츠보다 5.7배 앞서며, 개인 콘텐츠는 음반 홍보보다 단 1.55배 앞섭니다.",
            "진정한 발견은 개인 콘텐츠가 이긴다는 것이 아니라, 음반 홍보가 지고 가장 작은 분야가 가장 크게 이긴다는 것입니다.",
          ],
          counterEvidence: [
            "초기 시대에는 그 반대였습니다. 음반 홍보가 개인 콘텐츠를 1,100,000 대 588,900으로 앞섰고, 전체 콘텐츠의 31.6%를 차지했습니다.",
            "이후 음반 홍보는 전체의 12.5%로 감소하여 가장 성과가 낮은 카테고리가 되었으며, 이는 형식에 대한 법칙이라기보다는 제작 방식의 변화입니다.",
          ],
          pivot: {
            title: "더 많은 개인 클립을 만드는 대신 음반 홍보를 개선하십시오.",
            actions: [
              "릴리스 프로모션을 이전 시대와 동일한 제작 등급의 이벤트 콘텐츠로 재구성하고, 단순한 방 안에서의 영상이 아닌 형태로 제작",
              "릴리스 에셋을 사전 예약 기간과 연계된, 더 적고 큰 규모의 모먼트로 집중",
              "게이밍 분야의 비중을 3.7%에서 계획된 15~20%로 확대",
              "전체 볼륨은 현 상태를 유지하거나 축소하고, 확보된 역량을 스케줄에 추가하는 대신 다른 용도로 전환",
            ],
          },
        },
        {
          id: "volume-not-the-lever",
          title: "해당 계정은 게시 빈도를 세 배로 늘렸으나 게시물당 도달률은 다섯 배 감소했습니다.",
          verdict: "confirmed",
          confidence: "높은 연령 일치 구간",
          summary: "이전 게시물이 더 긴 축적 기간의 이점을 누리지 못하도록 동일한 기간을 비교했을 때, 초기 라인업은 월 9.9회 게시하여 중간값 834,800회의 조회수를 기록했습니다. 리런칭 기간에는 월 32.9회 게시하여 157,100회의 조회수를 기록했습니다. 2026년에는 월 34회 게시하여 94,100회의 조회수를 기록하고 있습니다. 더 많은 콘텐츠 발행이 더 많은 도달을 만들어내지 못했으며, 연간 추세는 이것이 축적 효과가 아님을 확인시켜 줍니다.",
          evidence: [
            "초기 라인업, 2022-11 ~ 2023-06: 79개 게시물, 월 9.9회, 중간값 834,800회",
            "리런칭, 2024-09 ~ 2025-06: 329개 게시물, 월 32.9회, 중간값 157,100회",
            "현재, 2026년: 272개 게시물, 월 34.0회, 중간값 94,100회",
            "연도별 중간값 조회수는 186,400회, 1,300,000회, 192,700회, 103,600회, 94,100회로, 가장 최근 기간의 추세는 여전히 하락세입니다.",
          ],
          counterEvidence: [
            "초기 시대의 비교는 어떤 볼륨 결정으로도 재현할 수 없는 글로벌 바이럴 모멘트 안에 존재하므로, 5.3배는 순전히 자체적인 문제로 해석해서는 안 됩니다.",
            "영상 AI는 초기 시대를 레이블 제작 및 높은 제작 등급으로, 현재 시대를 평범한 방에서의 저예산 클립으로 묘사하며, 이는 게시물 수뿐만 아니라 제작 투자에 초점을 맞추고 있습니다.",
          ],
          pivot: {
            title: "더 적게, 더 크게, 그리고 제작된",
            actions: [
              "계획된 발행량을 약 3분의 1로 줄이고 절약된 역량을 남은 콘텐츠의 제작 가치에 투입",
              "릴리스와 관련된 모든 콘텐츠에 대해 최소 제작 등급 설정",
              "동일한 예산을 30개의 클립으로 분산하는 대신, 사이클당 두 개의 텐트폴 촬영을 보호",
              "계정은 발행된 게시물 수가 아닌 게시물당 중간값 조회수로 측정",
            ],
          },
        },
        {
          id: "instagram-outperforms",
          title: "Instagram은 동일한 에셋으로 TikTok을 능가하며, 팔로워당 3.2배의 성과를 보입니다.",
          verdict: "confirmed",
          confidence: "지표는 높음, 에셋 매칭은 중간",
          summary: "동일한 날짜에 교차 게시된 19개의 쌍이 확인되었습니다. 동일한 영상의 틱톡 대 인스타그램 조회수 비율 중앙값은 0.75배로, 이는 동일한 콘텐츠가 인스타그램에서 더 나은 성과를 낸다는 것을 의미합니다. 팔로워당 격차는 훨씬 더 큽니다. 인스타그램은 팔로워 수의 40%에도 불구하고 팔로워당 0.186회의 조회수를 기록하는 반면, 틱톡은 0.058회를 기록합니다.",
          evidence: [
            "동일한 날짜의 동일한 콘텐츠에 대한 틱톡 대 인스타그램 조회수 비율 중앙값: 0.75배",
            "팔로워당 조회수: 인스타그램 956K 팔로워에 0.186회, 틱톡 2.4M 팔로워에 0.058회",
            "FC Bayern 챌린지 게시물은 인스타그램에서 2,304,569회, 틱톡에서 108,100회를 기록하여 동일한 크리에이티브로 21배의 차이를 보였습니다.",
            "참여율은 반대로 틱톡에서 10.7%, 인스타그램에서 8.4%로, 틱톡은 깊이를 제공하고 인스타그램은 도달 범위를 제공합니다.",
          ],
          counterEvidence: [
            "해당 교차 확인 쿼리가 실행되지 않았기 때문에 시각적으로 확인하는 대신 캡션과 동일한 날짜 게시물을 기준으로 콘텐츠의 동일성을 일치시켰습니다.",
            "19개의 쌍 중 두 개는 반대로 나타났으며, 대기실 게시물은 인스타그램에서 177,673회, 틱톡에서 521,700회를 기록했습니다.",
          ],
          examples: [
            {
              platform: "tiktok",
              id: "7679357400234691858",
              label: "대기실, 반례",
              date: "2026-08-29",
              stat: "틱톡 521,679회 대 인스타그램 177,673회",
              note: "결론에 반하기 때문에 제시되었습니다.",
            },
          ],
          pivot: {
            title: "이미 성과가 좋은 플랫폼으로 가중치를 재조정하십시오.",
            actions: [
              "인스타그램은 도달 범위를 위한 주요 채널로, 틱톡은 커뮤니티 깊이를 위한 주요 채널로 취급하십시오.",
              "인스타그램 수치가 나오기 전까지 틱톡에서의 부진을 실패한 크리에이티브로 간주하지 마십시오.",
              "가장 큰 잠재 고객층과 가장 높은 유기적 효율성을 가진 인스타그램에 먼저 미국 유료 광고 비중을 집중하십시오.",
              "가장 작은 자체 플랫폼이자 가장 효율적인 플랫폼인 인스타그램을 의도적으로 2백만 팔로워를 향해 성장시키십시오.",
            ],
          },
        },
        {
          id: "hooks-not-the-differentiator",
          title: "훅(Hook) 제작 방식이 여기서 성공과 실패를 구분하지는 않습니다.",
          verdict: "partial",
          confidence: "낮고, 단일 출처이며, 교차 확인되지 않음",
          summary: "비디오 AI는 최상위 10% 게시물과 하위 절반 게시물을 두 번 별도로 분석했으며 구조적으로 거의 동일한 오프닝을 반환했습니다. 두 세트 모두 프레임 안에 이미 있는 사람이 제스처를 취하거나 안무를 시작하는 것으로 시작하며, 처음 3초 동안 읽을 수 있는 화면 텍스트가 없고, 약속이 명시되지 않았으며, 정보 격차도 없습니다. 하위 절반에 대한 요약은 최상위 10%에도 거의 그대로 적용됩니다.",
          evidence: [
            "최상위 10% 게시물 20개 중 14개, 하위 절반 게시물 16개 중 11개에서 읽을 수 있는 오프닝 텍스트가 없었습니다.",
            "어떤 세트도 첫 3초 안에 성과를 선제적으로 제시하거나 약속을 명시하지 않습니다.",
            "이 코퍼스에서 성공을 가르는 요소는 오프닝 기법이 아니라 주제와 플랫폼입니다.",
          ],
          counterEvidence: [
            "이는 단일 출처이며 교차 확인이 불가능했습니다. 의도된 두 번째 출처에서 소유한 샘플에 대한 전사본이 반환되지 않아, 무엇이 언제 발언되었는지에 대한 독립적인 판독이 불가능합니다.",
            "이는 확정된 결과라기보다는 검증해야 할 가설로 취급되어야 하며, 테스트 없이 실행하지 않을 유일한 결과입니다.",
          ],
          pivot: {
            title: "이에 지출하기 전에 테스트하십시오.",
            actions: [
              "훅 중심의 처방을 확정하기 전에 단일 분야의 20개 게시물에 대해 통제된 훅 테스트를 실행하십시오.",
              "그동안에는 입증된 주제와 플랫폼 비중을 입증되지 않은 오프닝 기법보다 우선시하십시오.",
              "비디오 스토어의 전체 쿼리 배터리가 완료되면 경쟁사 세트와의 비교를 다시 실행하십시오.",
            ],
          },
        },
        {
          id: "peer-challenge-overhead",
          title: "동료 아티스트 챌린지 형식은 계정에서 복구 가능한 가장 큰 용량 블록입니다.",
          verdict: "confirmed",
          confidence: "양측 모두 높은, 큰 n.",
          summary: "다른 한국 아티스트가 참여하는 동료 협업 챌린지 게시물은 2025년 이후 103개의 게시물과 전체 결과물의 13.7%를 차지합니다. 이들은 다른 모든 게시물에 대한 98,450건에 비해 중앙값 106,100건의 조회수를 기록했으며, 이는 7.8%의 차이입니다. 각 게시물은 일정 관리, 여행 및 레이블 조정을 필요로 하며, 계정이 어쨌든 벌었을 것과 거의 동일한 수익을 올립니다.",
          evidence: [
            "동료 협업 챌린지 게시물: 103개 게시물, 중앙값 106,100 조회수",
            "기타 모든 것: 648개 게시물, 중앙값 98,450 조회수",
            "계정당 단위당 가장 높은 조정 비용을 가진 형식에 대한 7.8%의 중앙값 차이",
            "게임 분야에 투입된 동일한 조정 노력은 584,750을 반환합니다.",
          ],
          pivot: {
            title: "용량을 줄이기보다는 재지정하십시오.",
            actions: [
              "동료 아티스트 챌린지 결과물을 대폭 줄이고 진정으로 도달 범위가 높은 소수의 파트너를 유지하십시오.",
              "해제된 일정 및 조정 용량을 게임 분야와 릴리스 순간 제작으로 이동하십시오.",
              "컷을 통과하는 모든 협업에 대해 방향 규칙을 적용하십시오.",
            ],
          },
        },
      ],
      footnote: "코퍼스는 2026-09-03에 영구 비디오 지식 저장소에 구축되었으며, 105개 항목, 수집 실패 0건입니다. 두 가지 제한 사항이 해결되지 않고 명시되어 있습니다. 12개의 계획된 쿼리 중 4개는 일일 요청 할당량에 도달하기 전에 저장소에서 실행되지 않았으며, 이것이 경쟁 콘텐츠 비교가 비디오에서 읽는 대신 성능 데이터를 기반으로 측정되는 이유입니다. 또한 비디오 AI의 얼굴 및 이름 속성 지정이 이 코퍼스에서 신뢰할 수 없음이 입증되었으므로, 여기의 모든 멤버 수준 분석은 얼굴 인식 대신 캡션 태그에서 파생됩니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      philosophy: "41개의 자체 보유 플랫폼을 페이지 소스에서 렌더링된 페이지가 아닌, 하나씩 확인하며 다음과 같은 단일 질문에 대한 답을 찾았습니다: 팬이 이 그룹에게 돈이나 이메일 주소를 제공하고 싶을 때 어떤 일이 발생하는가.",
      intro: "The headline is better than it looks. This is not an act with no infrastructure. The store works, ships internationally, and is correctly wired into YouTube and Spotify. Weverse is live and active. A working email capture form already exists. The problem is that almost none of the audience is ever pointed at any of it, which makes this a routing problem rather than a build problem.",
      subBlocks: [
        {
          label: "A",
          title: "이미 작동하는 것들",
          strategy: "전환 시스템의 네 가지 구성 요소가 구축되어 작동 중입니다. 다만, 트래픽이 부족한 상태입니다.",
          components: {
            heading: "확인되었으며 존재하고 작동함",
            items: [
              "Shopify 플랫폼의 공식 스토어 fiftyfifty.rosecityworks.com은 6가지 CD SKU를 22.98달러에서 29.98달러 사이에 판매 중이며, 모든 상품이 재고 보유 상태이고 미국 및 해외로 배송 가능합니다.",
              "스토어에 이미 설치된, 작동하는 가입 양식이 있는 라이브 Klaviyo 이메일 수집 기능",
              "위버스(Weverse)는 2026-09-02 날짜의 아티스트 게시물이 있으며, 미국으로 달러 결제 배송이 가능하고, 2026-07-20에 업데이트된 공지사항이 있습니다.",
              "The store is correctly wired to the YouTube Store tab and to the Spotify artist merch module, so two major surfaces already resolve to commerce",
              "실제 미국 리테일 채널이 존재합니다: Prime 자격이 있는 Amazon, Walmart 전용 에디션을 포함한 Walmart, 그리고 KTOWN4U, Music Plaza, Choice Music LA가 있습니다.",
            ],
          },
        },
        {
          label: "B",
          title: "라우팅 격차",
          strategy: "이것은 감사에서 발견된 가장 크고 수정 비용이 가장 적게 드는 문제입니다. 수집 레이어는 존재하지만, 팬들은 결코 그곳에 도달하지 못합니다.",
          components: {
            heading: "현재 5.6백만 팔로워가 이동하는 곳",
            items: [
              "Instagram, TikTok, YouTube의 프로필 링크는 모두 동일한 제3자 스마트 링크로 연결되며, 이 링크에는 이메일 입력란과 SMS 옵션이 없습니다.",
              "해당 스마트 링크는 자체 자산이 아니므로, 세 플랫폼의 트래픽은 레이블이 통제할 수 없고 리마케팅에 활용할 수 없는 곳으로 연결됩니다.",
              "작동하는 유일한 이메일 양식은 해당 프로필 링크 중 어느 곳에서도 연결되지 않는 스토어에 있습니다.",
              "결과적으로 약 5.6백만 명의 팔로워가 자체 리스트로 유입될 경로가 없으며, 이들을 수집하기 위한 인프라는 이미 비용이 지불되고 운영 중입니다.",
            ],
          },
          kpis: [
            "자체 보유 및 수집 가능한 프로필 링크 목적지: 현재 3개 중 0개",
            "자체 보유 리스트 규모: 잠재 고객 5.6백만 명 대비 실질적으로 0명",
            "수정 소요 시간: 분기가 아닌 일 단위",
          ],
        },
        {
          label: "C",
          title: "업계 최고 트래픽의 깨진 링크",
          strategy: "하나의 자산은 트래픽 규모와 오랫동안 아무것도 가리키지 않았다는 점 때문에 별도로 언급할 가치가 있습니다.",
          components: {
            heading: "The Cupid 뮤직비디오 최종 지점",
            items: [
              "The Cupid 뮤직비디오는 2억 4,800만 뷰를 기록하고 있으며, 여전히 팬들을 2022년 11월에 구축된 링크 페이지로 안내하고 있습니다.",
              "해당 앨범 사전 예약 목적지는 2023-03-21 출시 예정인 상품에 대해 품절로 표시되는 리테일 페이지로 연결됩니다.",
              "해당 레이블 링크는 서드파티 개발 호스트의 오류 페이지로 리디렉션됩니다.",
              "이것은 카탈로그 내에서 가장 트래픽이 많은 자체 소유 표면이며, 여기서 파생되는 모든 경로는 막혀 있습니다.",
            ],
          },
          kpis: [
            "2022년 링크 페이지 뒤에 2억 4,800만 뷰가 있습니다.",
            "세 곳의 목적지를 확인했으며, 세 곳 모두 작동하지 않습니다.",
            "교체는 설명 수정과 새로운 랜딩 페이지로 이루어집니다.",
          ],
        },
        {
          label: "D",
          title: "아직 존재하지 않는 것",
          strategy: "네 가지 부재는 추정 대신 확인되었으며, 각각 기록 전에 여러 표면에서 확인되었습니다.",
          components: {
            heading: "확인된 부재",
            items: [
              "응원봉 없음, 그룹 활동 약 3년 10개월 차에 20개 이상의 경쟁 그룹 공식 응원봉을 표시하는 네 개의 별도 커머스 표면에서 확인되었습니다.",
              "유료 멤버십 등급 없음. 유일한 팬클럽은 6,002명의 회원을 보유한 무료 포럼이며, 공지는 2023년 2월이 마지막이고, 아티스트 게시판에는 2023년에 탈퇴한 회원들의 게시물이 여전히 남아 있습니다.",
              "어떤 표면에서도 SMS 또는 메시지 캡처 기능이 없습니다.",
              "전용 아티스트 웹사이트 없음. 그룹의 레이블 페이지는 제목, 2024년 8월에 마지막으로 수정된 이미지 하나, 뒤로 가기 버튼으로 구성되어 있으며, 분석 도구나 캡처 태그가 없습니다.",
            ],
          },
          kpis: [
            "응원봉: 활동 3년 10개월 차에 부재",
            "유료 멤버십: 없음, 확인 당일 무료 포럼 방문 4회 기록",
            "자체 웹 자산: 없음",
          ],
        },
        {
          label: "E",
          title: "라이브 비즈니스 및 리테일 현황",
          strategy: "라이브 활동 범위는 운영상 가장 취약한 부분이며, 이는 누락된 목록과 직접적으로 일치하는 방식으로 취약합니다. 연락할 수 없는 팬들에게 효율적으로 티켓을 판매할 수 없습니다.",
          components: {
            heading: "현재 현황",
            items: [
              "현재까지 헤드라이너 투어 1회 진행, 2024년 11월 및 12월 미국 내 8개 극장, 총 수용 인원 약 13,700석",
              "첫 팬미팅은 데뷔 3년 후 360석 규모의 공연장에서 개최되었습니다.",
              "2026년 아시아 팬콘 투어는 진행 중 중단되었으며, 한 시장은 취소되고 다른 한 시장은 연기되었습니다.",
              "일본 공연은 4년간 4번의 접점이 있었으며, 그중 3번은 타 기관 행사 내에서 진행되었습니다.",
              "동일 검색 시 다른 그룹의 16개 독점 에디션을 취급하는 경쟁업체들이 있는 주요 미국 리테일러 한 곳에 입점하지 못했습니다.",
            ],
          },
          kpis: [
            "데뷔 이후 미국 헤드라이너 공연 횟수: 8회",
            "확인된 자체 공연장 최대 수용 인원: 극장 규모",
            "발표된 2026년 미국 공연 일정: 없음",
          ],
        },
      ],
      footnote: "2026-09-03 기준 41개의 표면을 확인했으며, 각 항목에 대해 URL과 상태 증거를 기록했습니다. 두 항목은 주장 대신 미확인으로 기록되었습니다. 티켓 판매 플랫폼의 경우 두 개의 애그리게이터가 접근을 차단했기 때문이며, 유료 Weverse 멤버십 등급 존재 여부는 로그인을 통해 확인해야 하는데, 이를 확인하려면 계정을 생성해야 하기 때문입니다. 과거 이메일 가입 기록의 부재는 아카이브 기록을 통해 확인되었으며, 이는 휴면 상태의 리스트가 어디에도 존재하지 않음을 의미합니다. 리스트는 제로에서 구축되며, 이는 기존 리스트를 상속하는 것보다 더 깔끔합니다.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "전략",
      title: "핵심 전략 및 철학",
      thesis: "FIFTY FIFTY는 팬덤 문제가 아닙니다. 라우팅 문제입니다. 매달 6백만 명이 음악을 듣고, 5백5십만 명이 팔로우하지만, 그들에게 무언가를 요청받은 사람은 거의 없습니다.",
      hierarchy: [
        {
          label: "1. 확보",
          description: "기존 도달 범위를 자체 리스트로 전환합니다. 모든 바이오 링크, 모든 영상 마지막 카드, 레이블이 통제하는 목적지에서의 모든 리테일 접점에서, 해당 목적지가 전달하기 전에 정보를 확보합니다. 이는 다른 어떤 것도 이를 기반으로 복리 효과를 내지 못하기 때문에 첫 번째이며, 또한 이 계획에서 다른 모든 항목의 비용을 절감시키는 유일한 항목이기 때문입니다.",
        },
        {
          label: "2. 전환",
          description: "알고리즘이 아닌 리스트를 대상으로 판매하십시오. 물리적 앨범, 멤버십, 라이브 공연은 판매할 리스트가 확보되면 모두 직접 반응 비즈니스가 됩니다. 수요는 이미 미국 내 소매 인프라 지원이 거의 없는 상태에서 단 한 번의 확인된 첫 주 판매량 100,121건으로 입증되었습니다.",
        },
        {
          label: "3. 집중",
          description: "적게, 더 크게, 더 잘 제작하십시오. 해당 계정은 콘텐츠 생산량을 세 배로 늘렸지만 게시물당 도달률은 다섯 배 감소했으므로, 양은 중요한 요소가 아닙니다. 역량은 아무런 성과를 내지 못하는 형식에서 벗어나 5.7배의 성과를 내는 분야와 진정한 제작이 필요한 릴리스 순간으로 이동해야 합니다.",
        },
        {
          label: "4. 미국 시장 확보",
          description: "모든 플랫폼에서 가장 큰 리스너 시장이 주요 시장으로 취급된 적이 없습니다. 이미 편집팀은 이 아티스트를 K-팝이 아닌 팝으로 분류하고 있으며, 이는 플랫폼이 기회가 어디에 있는지 알려주는 것입니다. 이를 따르십시오.",
        },
      ],
      messaging: [
        "팬덤은 이미 재건되고 있습니다. 리스너 수는 변동이 없는데도 팔로워 확보가 네 분기 연속 가속화되고 있다는 사실은 아무도 이야기하지 않지만, 비즈니스에서 가장 중요한 사실입니다.",
        "이 계획에는 또 다른 글로벌 히트가 필요하지 않습니다. 모든 목표는 이미 존재하는 잠재 고객을 확보하고 전환함으로써 달성 가능합니다.",
        "미국은 소비 측면에서 본토 시장입니다. 운영 측면에서도 본토 시장으로 취급되어야 합니다.",
        "물리적 앨범 판매는 생존의 증거입니다. 히트곡 없이 라인업 변경을 거치면서도 성장했으며, 이는 실제 팬덤이 존재하고 거래할 의사가 있다는 가장 명확한 증거입니다.",
        "이 문서의 모든 약속에는 최악, 예상, 최상의 시나리오, 테스트 지출, 그리고 확장 또는 중단 규칙이 포함됩니다. 스트리밍 증가는 정직하게 예측할 수 없기 때문에 의도적으로 약속하지 않습니다.",
      ],
      footnote: "네 가지 원칙의 순서는 실행 순서입니다. 팬 확보가 첫 번째인 이유는 확보된 팬에게는 거의 제로에 가까운 한계 비용으로 반복적으로 판매할 수 있으며, 이 계획의 모든 후속 단계는 일단 존재하면 비용이 절감되기 때문입니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "수직 1",
      title: "수직 1 / 팬덤 및 전환 인프라",
      philosophy: "리스너를 연락 가능한 팬으로 전환하는 계층을 구축하십시오. 이 계획의 다른 모든 것은 존재함과 동시에 비용이 절감됩니다.",
      intro: "이 수직은 제약 조건이기 때문에 첫 번째입니다. FIFTY FIFTY는 현재 약 560만 명의 팔로워에게 도달하지만 직접 연락할 수는 없습니다. 해결책은 건설보다는 주로 라우팅에 있으며, 이는 신속하게 진행되고 출시되는 날부터 복리 효과를 발휘합니다.",
      subBlocks: [
        {
          label: "A",
          title: "자체 데이터 확보, 미국",
          objective: "기존 도달 범위를 미국 팬들의 소유 가능하고 연락 가능한 리스트로 전환하십시오.",
          strategy: "한국의 데이터 법률은 한국 거주자로부터 수집할 수 있는 정보를 제약합니다: 가입은 어떤 것과도 번들로 묶일 수 없으며, 공지는 한국어로 작성되어야 하고, 옵트아웃은 의무이며, 이중 동의가 한국 번호에서는 완료되지 않기 때문에 전화번호 확보는 사실상 불가능합니다. 이 중 어느 것도 미국 플랫폼의 미국 거주자에게는 적용되지 않습니다. 리스트는 의도적이고 합법적으로 미국 우선으로 구축되며, 한국 팬들은 기존 팬 플랫폼을 통해 계속 서비스됩니다.",
          components: {
            heading: "구축",
            items: [
              "DSP, 스토어 또는 위버스(Weverse)로 전달하기 전에 이메일을 수집하는 자체 소유 랜딩 페이지",
              "Instagram, TikTok, YouTube의 모든 바이오 링크를 제3자 스마트 링크로 교체하여 해당 링크로 재지정했습니다.",
              "기존 Klaviyo 인스턴스를 스토어 전용에서 전체 잠재고객으로 확장하여 신규 공급업체나 도구에 대한 추가 지출이 발생하지 않았습니다.",
              "미국 번호에만 SMS를 추가했으며, 한국 번호 제한 사항은 나중에 발견되는 대신 문서화되었습니다.",
              "2억 4,800만 뷰를 기록한 Cupid 뮤직비디오 뒤에 재구축된 목적지로, 모든 경로가 현재 유효하지 않은 2022년 링크 페이지를 대체했습니다.",
            ],
          },
          kpis: [
            "12개월 동안 10만 명 이상의 미국 팬을 확보했습니다.",
            "소유 및 확보된 바이오 링크 목적지: 첫 달 내 3개 중 3개.",
            "랜딩 트래픽의 이메일 확보율이 15%를 초과했습니다.",
            "확보된 팬당 비용을 첫 주부터 추적하여 유료 예산을 설정하는 데 사용했습니다.",
          ],
          timeline: "1주차부터 4주차까지는 라우팅 및 랜딩 레이어에 사용되었으며, 이후에는 지속적으로 진행됩니다.",
        },
        {
          label: "B",
          title: "멤버십 및 누락된 상품 계층 구조.",
          objective: "가장 헌신적인 팬들에게 CD가 아닌 구매할 수 있는 무언가를 제공하십시오.",
          strategy: "현재 계층 구조에는 실물 앨범이라는 하나의 단계만 있습니다. 그 아래에는 무료이고 체계적인 것이 없고, 그 위에는 프리미엄이 없습니다. 양 끝단 모두 수익과 팬 유지에 기여합니다.",
          components: {
            heading: "구축",
            items: [
              "정의된 혜택 세트를 갖춘 유료 멤버십 등급으로, 미국 시장에 맞춰 가격이 책정되었으며 미국 팬이 마찰 없이 구매할 수 있습니다.",
              "그룹 활동 4년차에 접어들었음에도 불구하고, 같은 판매 페이지의 경쟁사들은 모두 라이트스틱을 판매하고 있지만 이는 부재합니다.",
              "현재 이전 라인업의 게시물이 여전히 올라오는 회원 전용 게시판을 보여주는 휴면 상태의 무료 포럼을 폐기하거나 교체해야 합니다.",
              "무료 리스트부터 멤버십, 실물 앨범, 프리미엄 에디션까지 정의된 상품 계층 구조를 통해 항상 다음 구매가 가능하도록 합니다.",
            ],
          },
          kpis: [
            "첫 번째 사이클 내에 멤버십을 출시하고 판매했습니다.",
            "라이브 이벤트에 맞춰 라이트스틱을 발표하고 사전 판매를 진행했습니다.",
            "리스트에서 멤버십으로의 전환율이 5%를 초과했습니다.",
          ],
          timeline: "4주차부터 12주차까지 리스트 뒤에 순차적으로 배치되었습니다.",
        },
        {
          label: "C",
          title: "직접 반응형 비즈니스로서의 실물 앨범 판매",
          objective: "실물 앨범 판매를 출시 후 따라잡기에서 사전 예약 수요 확보로 전환합니다.",
          strategy: "수요는 입증되었습니다. 'Day & Night' 앨범의 첫 주 판매량은 100,121장으로 확인되었으며, 이는 해당 앨범의 전체 출시 주간 출하량을 거의 네 배 초과한 수치입니다. 공급은 몇 달 후 버전 재발매를 통해 겨우 따라잡을 수 있었습니다. 이는 예측 및 시기 문제이며, 해결 시 상당한 금전적 가치가 있습니다.",
          components: {
            heading: "실행",
            items: [
              "사전 예약 기간은 일반 발표 전에 팬 리스트에 먼저 공개되어, 공급이 확정되기 전에 수요를 측정합니다.",
              "미국 소매 판매는 현재 부재한 주요 소매업체 한 곳으로 확장되었으며, 경쟁사들이 이미 사용하고 있는 독점 에디션 판매 방식을 병행합니다.",
              "버전 전략은 중간 단계 회복책으로 배포되기보다 사이클 시작 시점에 계획됩니다.",
              "서명 및 넘버링 에디션은 확보된 팬 리스트에 직접 정가로 판매하여 최대 마진을 확보합니다.",
            ],
          },
          kpis: [
            "다음 전체 사이클에서는 150,000장 이상, 가장 최근 사이클에서는 88,247장을 기록합니다.",
            "출시 주간 출하량이 최종 누적량의 80% 이상을 기록하여 이미 달성한 성과를 유지합니다.",
            "총 판매량 중 팬 직접 판매 비중이 15% 이상입니다.",
          ],
          timeline: "다음 릴리스 주기에 맞춰 조정됩니다.",
        },
      ],
      footnote: "여기서 제시된 실물 앨범 판매 목표는 현재의 릴리스 주기와 창의적인 방향의 변화가 없다는 가정 하에 설정되었습니다. 이는 신규 잠재 고객 예측이 아닌 수요 확보 목표입니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "버티컬 2",
      title: "버티컬 2 / 디지털 마케팅",
      philosophy: "데이터상 효과가 입증된 플랫폼에 데이터를 기반으로 지출하고, 아무런 성과를 내지 못하는 곳에는 지출을 중단합니다.",
      intro: "비디오 인텔리전스 섹션에서 즉시 실행 가능한 네 가지 지침이 도출되었습니다. 이 버티컬은 이를 운영 계획 및 유료 구조로 전환합니다.",
      subBlocks: [
        {
          label: "A",
          title: "콘텐츠 재조정",
          objective: "성과가 없는 포맷에서 역량을 빼내어 5.7배의 수익을 내는 분야로 전환합니다.",
          strategy: "해당 계정은 월 34회 게시하며 평균 조회수는 94,100회입니다. 게임 및 e스포츠 분야는 전체 게시물의 3.7%를 차지하며 평균 584,750회의 조회수를 기록합니다. 릴리스 홍보는 게시물의 12.5%를 차지하며 평균 66,550회의 조회수를 기록하여, 제품 판매와 관련된 분야가 해당 계정에서 가장 성과가 낮은 분야가 됩니다.",
          components: {
            heading: "재할당",
            items: [
              "게임 및 e스포츠 비중을 기존 3.7%에서 계획된 15~20%로 확대하며, 고정된 슬롯을 가진 명명된 정기 프랜차이즈로 구축",
              "동료 아티스트 챌린지 게시물은 대폭 감소시켜, 계정 내에서 가장 높은 협업 비용이 드는 블록을 해제",
              "릴리스 프로모션은 초기 시대에 사용했던 프로덕션 티어로 재구축하여, 더 적고 큰 모먼트로 집중",
              "총 아웃풋은 보합 또는 약 1/3 감소시키고, 절약된 역량은 프로덕션 가치로 이동",
              "네 명의 멤버 모두 게임 분야를 순환 배치하였는데, 이는 멤버가 아닌 포맷이 결과를 견인한다는 증거에 기반함",
            ],
          },
          kpis: [
            "재조정된 믹스에서 게시물당 평균 조회수 3배 증가",
            "12주차까지 게임 분야 비중을 아웃풋의 15% 이상으로 달성",
            "릴리스 프로모션 평균을 계정 평균 이상으로 끌어올려 현재 위치 반전",
          ],
        },
        {
          label: "B",
          title: "플랫폼 비중",
          objective: "팔로워 수보다는 효율성을 따르십시오.",
          strategy: "인스타그램은 팔로워 기반의 40%에서 팔로워당 0.186의 조회수를 기록하는 반면, 틱톡은 0.058을 기록하며, 동일한 에셋이 테스트된 당일 비교에서 대다수 경우 인스타그램에서 더 나은 성과를 보였습니다. 보조적으로 취급되는 플랫폼이 더 효율적인 플랫폼입니다.",
          components: {
            heading: "실행",
            items: [
              "인스타그램을 주요 도달 채널로 취급하고, 미국 유료 광고 비중을 우선적으로 투입",
              "틱톡은 참여율이 더 높은 주요 커뮤니티 및 심층 채널로 유지",
              "인스타그램 수치가 확인되기 전까지는 틱톡에서의 부진을 실패한 크리에이티브로 간주하지 않음",
              "인스타그램은 가장 작은 자체 보유 플랫폼이자 가장 효율적인 플랫폼이므로, 의도적으로 2백만 팔로워를 향해 성장시킴",
            ],
          },
          kpis: [
            "인스타그램 956K에서 2백만+ 팔로워로 성장",
            "대규모 운영 시 인스타그램 팔로워당 조회수 0.15 이상 유지",
            "유료 광고 효율성을 통합하여 보고하는 대신 플랫폼별로 보고",
          ],
        },
        {
          label: "C",
          title: "유료 광고 구조",
          objective: "노출이 아닌 전환을 구매하십시오.",
          strategy: "모든 항목은 소규모로 시작하여 효능의 정의된 기준에 따라 측정되며, 증거에 의해서만 확장됩니다. 각 채널이 결과보다는 노이즈를 구매하는 최소 지출액이 있으며, 그 이하로 시작하는 것이 이 예산이 낭비되는 가장 일반적인 방법입니다.",
          components: {
            heading: "구조",
            items: [
              "매월 상위 10개 오가닉 게시물에 대한 리타겟팅, 높은 도달 범위를 가진 오가닉을 유료 인벤토리로 취급",
              "청취자 기반이 가장 크고 콘텐츠가 네이티브인 미국 및 e스포츠 잠재 고객을 대상으로 탐색",
              "먼저 리스트 확보, 그 다음 사전 주문 및 멤버십을 목표로 하는 전환 캠페인",
              "모든 항목에 대해 최악, 예상, 최상의 경우를 명시하고, 테스트 지출 및 명시적인 확장 또는 중단 규칙을 적용합니다.",
            ],
          },
          kpis: [
            "첫 주에 확립되고 분기별로 개선되는 팬당 비용",
            "주요 커머스 지표로 추적되는 사전 주문당 비용",
            "효능 기준 이하의 채널에는 자금을 지원하지 않습니다.",
          ],
        },
      ],
      footnote: "이 수직에서는 스트리밍 리프트가 의도적으로 목표에서 제외됩니다. 유료 미디어는 조회수, 팔로워, 리스트 가입 및 유닛을 안정적으로 이동시키며, 이 규모에서 지출과 스트림 간의 관계는 정직하게 예측할 수 없습니다.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "수직 3",
      title: "수직 3 / DSP 전략",
      philosophy: "Spotify already programs this act as pop rather than K-pop. The strategy is to follow the platform's own read rather than fight it.",
      intro: "DSP에서는 두 가지 일이 동시에 일어나고 있습니다. 지난 분기에 에디토리얼 지원이 급격히 감소했으며, 남은 지원은 K-pop보다는 일반 팝에 치우쳐 있습니다. 첫 번째는 시급한 문제입니다. 두 번째는 기회입니다.",
      subBlocks: [
        {
          label: "A",
          title: "에디토리얼 지원 재구축",
          objective: "지난 90일 동안 잃어버린 배치(placement)를 복구하고 알고리즘 표면을 안정화합니다.",
          strategy: "2026-09-01까지 90일 동안 13,673,665명의 총 팔로워 도달 범위를 나타내는 34개의 에디토리얼 배치가 사라졌으며, 모든 알고리즘 및 개인화된 표면이 9주 이내에 꺼졌습니다. 이 시점은 2026년 발매와 일치하며, 그렇지 않았다면 복합적으로 작용했을 것입니다.",
          components: {
            heading: "실행",
            items: [
              "배치 제거를 배경 메모가 아닌 우선순위 항목으로 취급하여 배급 파트너와 전체 에디토리얼 재설정 대화",
              "프로모션이 현재 사용하는 K-pop 프레이밍이 아닌, 플랫폼이 이미 적용하는 일반 팝 프레이밍을 중심으로 구축된 피치",
              "카탈로그 분석에서 확인된 두 개의 복합 앨범 곡은 알고리즘이 이미 지원 없이 해당 곡들을 선택하고 있었기 때문에 의도적으로 작동했습니다.",
              "사후 요청이 아닌, 사이클에 내장된 발매일 표면 계획",
            ],
          },
          kpis: [
            "한 사이클 내에 알고리즘 및 개인화된 플레이스먼트가 제로 이상으로 복귀",
            "편집 도달 범위가 축소 이전 수준으로 회복됨",
            "최소한 하나의 일반 팝 편집 플레이스먼트가 전체 사이클 동안 유지됨",
          ],
        },
        {
          label: "B",
          title: "팝 레인",
          objective: "플랫폼이 이미 이 아티스트를 배치한 레인으로 피치하십시오.",
          strategy: "현재 실제 편집 플레이스먼트 6개 중 3개는 K-팝이 아닌 일반 팝이며, 일반 팝 쪽이 K-팝 쪽보다 약간 더 많은 총 도달 범위를 가집니다. K-팝 쪽의 96%는 단일 드라마 사운드트랙 플레이스먼트에 집중되어 있어, K-팝 프로그래밍이 보이는 것보다 좁다는 것을 의미합니다.",
          components: {
            heading: "실행",
            items: [
              "편집 피칭은 K-팝 카테고리보다는 팝 및 크로스오버 프로필을 중심으로 진행되었습니다.",
              "카탈로그는 한국 동료뿐만 아니라 서구 팝 비교 포인트를 기준으로 포지셔닝되었습니다.",
              "청중이 이미 존재하는 K-팝 생태계 외부의 싱크 및 플레이리스트 타겟",
              "동남아시아 편집은 상위 7개 시장 중 4개가 해당 지역에 위치하므로 별도의 우선순위로 작용했습니다.",
            ],
          },
          kpis: [
            "추적 가능하고 성장하는 라인으로서의 비(非) K-팝 편집 도달 범위",
            "단일 총계가 아닌 레인별로 보고된 플레이스먼트 믹스",
          ],
        },
        {
          label: "C",
          title: "통제되지 않는 오디오 자산",
          objective: "TikTok에서 가장 많이 사용되는 FIFTY FIFTY 사운드를 복구하거나 파트너십을 맺으십시오.",
          strategy: "카탈로그의 가장 큰 음원의 제3자 스피드업 업로드는 공식 버전의 3,002,121개에 비해 14,311,597개의 TikTok 동영상을 보유하고 있으며, 이는 약 4.8배에 달하며 여전히 측정 가능한 주간 스트리밍을 유도합니다. 이는 아티스트와 관련된 단일 최대 배포 자산이며 레이블은 이를 통제하지 않습니다.",
          components: {
            heading: "실행",
            items: [
              "제3자 업로드에 대한 권리 입장을 확립하고 유통업체를 통해 통합 또는 클레임을 진행하십시오.",
              "병행하여, 공식 스피드업 버전이 존재하고 올바르게 크레딧되어 새로운 크리에이트가 소유 자산으로 연결되도록 하십시오.",
              "복구가 추정되는 것이 아니라 측정 가능하도록 두 자산 모두에 대해 크리에이트를 추적하십시오.",
            ],
          },
          kpis: [
            "월별 추적되는, 자체 보유 오디오 자산에 대한 총 크리에이트 점유율",
            "첫 번째 사이클 내에 권리 상태를 확립하고 문서화함",
          ],
        },
      ],
      footnote: "본 계획의 어느 부분에서도 스트리밍 성과를 보장하지 않습니다. 편집 및 알고리즘 배치는 영향력 있고 보고 가능하며, 그 결과로 발생하는 스트림 볼륨은 어떤 파트너도 정직하게 예측할 수 없는 것입니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Cultural Moments
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "버티컬 4",
      title: "버티컬 4 / PR 및 문화적 순간",
      philosophy: "언론은 이미 지나갔습니다. 하지만 대중은 그렇지 않습니다. 우리의 임무는 언론에게 2023년이 아닌 '지금'에 대한 이유를 제공하는 것입니다.",
      intro: "지난 4개 분기 연속으로 기반 청중 지표가 개선되었음에도 불구하고, 보도는 신규 발매 공지에 그치고 있습니다. 이 간극이 바로 이야기이며, 아무도 이 이야기를 하지 않았습니다.",
      subBlocks: [
        {
          label: "A",
          title: "아무도 말하지 않는 이야기",
          objective: "2023년에 일어났던 일에서 현재 일어나고 있는 일로 내러티브를 재구성하십시오.",
          strategy: "현재까지 확보된 모든 데이터 포인트는 아직 쓰여지지 않은 재건 스토리를 뒷받침합니다: 팔로워 수 감소 없이 45개월, 4개 분기 연속 가속화되는 신규 팬 확보, 라인업 변경 후 피지컬 앨범 판매량 거의 3배 증가, 그리고 하락세를 멈춘 청취자 수치. 이는 기록된 컴백이지만 현재 눈에 보이지 않습니다.",
          components: {
            heading: "실행",
            items: [
              "팔로워 및 피지컬 앨범 판매량 추세를 기반으로 한 데이터 중심 내러티브를 K팝 팬 미디어뿐만 아니라 음악 비즈니스 언론에 제안",
              "이전 라인업을 참조하는 것이 아니라 현재 라인업 자체의 관점에서 확립하는 멤버별 프로필",
              "그룹의 가장 독특한 현재 영역이기 때문에 게임 및 e스포츠 분야는 진정한 문화적 각도로 작용했습니다.",
              "미국은 가장 큰 시장이자 가장 적게 다뤄진 시장이므로 미국 매체를 우선적으로 고려",
            ],
          },
          kpis: [
            "첫 번째 사이클 내 미국 음악 비즈니스 언론 보도",
            "신규 발매가 아닌 재건 데이터에 기반한 최소 1개의 특집 기사",
          ],
        },
        {
          label: "B",
          title: "미국 앵커 모먼트",
          objective: "팬 리스트와 언론에 판매할 수 있을 만큼 큰 단 한 번의 라이브 모먼트를 만드십시오.",
          strategy: "데뷔 이후 미국 헤드라인 공연은 8회 있었으나 2026년 공연은 발표되지 않았으며, 미국 청취자 기반은 132만 명입니다. 잘 구축된 단 한 번의 앵커 모먼트를 먼저 확보된 팬 리스트에 판매하는 것은 광범위한 투어 계획보다 가치가 있으며 버티컬 1의 모든 것을 입증하는 자연스러운 증거가 될 것입니다.",
          components: {
            heading: "실행",
            items: [
              "가장 강력한 도시에서 단 한 번의 미국 헤드라인 쇼케이스를 개최하며, 규모보다는 매진을 목표로 함",
              "일반 판매 전에 확보된 리스트를 대상으로 사전 판매를 진행하여, 공연장 매진과 리스트의 가치를 동시에 증명합니다.",
              "티켓 수익 이상의 상업적 가치를 지니도록 날짜를 중심으로 리테일 및 콘텐츠를 구축합니다.",
              "구매자 데이터가 프로모터에게만 국한되지 않고 레이블에 귀속되도록 티켓팅을 구조화합니다.",
            ],
          },
          kpis: [
            "미국 헤드라인 공연 1회 매진",
            "총 티켓 판매량 중 사전 판매 비중 40% 이상",
            "구매자 데이터를 확보하여 자체 리스트에 통합합니다.",
          ],
        },
        {
          label: "C",
          title: "브랜드 및 파트너십 영역",
          objective: "게이밍 분야를 콘텐츠에서 상업적 파트너십으로 전환합니다.",
          strategy: "e스포츠와 게이밍의 크로스오버는 이미 계정 내에서 가장 높은 성과를 내는 콘텐츠이며, 가장 큰 시장에 문화적으로 깊숙이 뿌리내리고 있습니다. 또한, 이 그룹이 경쟁적인 위치가 아닌 독보적인 위치를 차지하는 유일한 영역이기도 합니다.",
          components: {
            heading: "실행",
            items: [
              "e스포츠 단체 및 관련 게이밍 브랜드를 일회성 콘텐츠 게스트가 아닌 파트너로 접근합니다.",
              "파트너의 포맷 내에서 협력하며, 파트너를 초청하는 방식이 아닌 파트너의 방향성에 맞춰 파트너십을 구조화합니다.",
              "파트너의 잠재 고객을 브랜딩 활동이 아닌 측정 가능한 도달 범위를 가진 유통 채널로 활용합니다.",
            ],
          },
          kpis: [
            "사이클당 최소 1건의 구조화된 게이밍 또는 e스포츠 파트너십 체결",
            "파트너 측 도달 범위를 자체 보유 도달 범위와 분리하여 측정 및 보고합니다.",
          ],
        },
      ],
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 워크스트림",
      philosophy: "레이블과 파트너가 이미 잘 운영하고 있는 부분과 이번 협력을 통해 추가되는 부분 간의 명확한 구분.",
      intro: "여기서 중요한 여러 워크스트림은 레이블과 기존 파트너가 담당하고 있으며, 앞으로도 그렇게 유지되어야 합니다. 이 섹션에서는 아무것도 가정하거나 중복되지 않도록 역할을 명확하게 구분하여 명시합니다.",
      subBlocks: [
        {
          label: "A",
          title: "레이블 주도",
          strategy: "이들은 ATTRAKT와 기존 파트너가 계속 담당하며, Crowd Control Digital은 실행보다는 데이터 및 측정 지원에 집중합니다.",
          components: {
            heading: "레이블 보유 업무",
            items: [
              "A&R, 발매 기획 및 음반 자체의 크리에이티브 디렉션",
              "국내 프로모션, 방송 및 뮤직쇼 전략",
              "국내 팬 플랫폼 운영 (현지 데이터 법규 준수를 고려할 때 한국 거주 팬 데이터의 적합한 관리처)",
              "음반 제작, 버전 기획 및 국내 유통사 관계",
              "아티스트 스케줄링, 매니지먼트 및 모든 멤버 관련 의사 결정",
            ],
          },
        },
        {
          label: "B",
          title: "파트너 주도",
          strategy: "Transparent Arts는 관계 구축, 포지셔닝 및 미국 시장 내 활동을 주도합니다.",
          components: {
            heading: "Transparent Arts 주도",
            items: [
              "미국 시장 내 관계 구축 및 소개",
              "미국 시장 내 언론 포지셔닝 및 에디토리얼 관계",
              "파트너십 및 브랜드 관련 논의 (게이밍 및 e스포츠 영역 포함)",
              "미국 시장 내 주요 활동을 위한 라이브 및 쇼케이스 관계",
            ],
          },
        },
        {
          label: "C",
          title: "Crowd Control Digital",
          strategy: "수치 및 지출. 본 문서 내 측정 가능하고 구축 가능하며 보고 가능한 모든 항목.",
          components: {
            heading: "Crowd Control Digital 실행",
            items: [
              "자체 데이터 수집 인프라, 리스트 구축 및 라이프사이클 마케팅",
              "모든 플랫폼에서의 유료 광고 집행 (테스트 집행 및 규모 확장/중단 규칙 적용)",
              "콘텐츠 전략, 포맷 재조정 및 지속적인 코퍼스에 대한 비디오 인텔리전스",
              "DSP 및 에디토리얼 전략 지원 (유통 파트너와 협력)",
              "모든 측정, 보고 및 분기별 재예측",
            ],
          },
        },
      ],
      footnote: "본 문서에서는 상업적 조건에 대해 의도적으로 다루지 않습니다. 이는 전략 산출물이며, 방향이 확정된 후 범위와 수수료는 별도로 합의될 것입니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "총 12주간 진행되며, 캡처 레이어가 먼저 출시되고 모든 다운스트림이 이를 상속하도록 순서가 정해집니다. 1주차부터 4주차까지는 누락된 인프라를 구축하며 비용이 가장 적게 듭니다. 5주차부터 8주차까지는 이를 활성화합니다. 9주차부터 12주차까지는 릴리스 시점에 맞춰 전환을 유도하고 운영 리듬을 설정합니다.",
      weeks: [
        { index: 1, label: "W1", dates: "1주차", highlight: true, note: "감사 인수인계 및 라우팅 수정 시작" },
        { index: 2, label: "W2", dates: "2주차" },
        { index: 3, label: "W3", dates: "3주차" },
        { index: 4, label: "W4", dates: "4주차", highlight: true, note: "모든 표면에서 캡처 레이어 라이브" },
        { index: 5, label: "W5", dates: "5주차" },
        { index: 6, label: "W6", dates: "6주차" },
        { index: 7, label: "W7", dates: "7주차" },
        { index: 8, label: "W8", dates: "8주차", highlight: true, note: "팬당 획득 비용 첫 분석" },
        { index: 9, label: "W9", dates: "9주차" },
        { index: 10, label: "W10", dates: "10주차" },
        { index: 11, label: "W11", dates: "11주차" },
        { index: 12, label: "W12", dates: "12주차", highlight: true, note: "주기 검토 및 재예측" },
      ],
      workstreams: [
        {
          name: "퍼스트 파티 데이터 확보",
          cells: [
            { weekIndex: 1, intensity: "high", milestone: true, label: "바이오 링크 재지정" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "high", label: "랜딩 페이지 활성화" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "데이터 확보 활성화" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium", milestone: true, label: "최초 1만 명 확보" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "콘텐츠 재조정",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "믹스 감사" },
            { weekIndex: 2, intensity: "high", label: "게임 프랜차이즈 정의" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "새로운 믹스 활성화" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "주요 이벤트 촬영" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "유료 미디어",
          cells: [
            { weekIndex: 1, intensity: "low", label: "계정 설정" },
            { weekIndex: 2, intensity: "low" },
            { weekIndex: 3, intensity: "medium", label: "테스트 실행" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", milestone: true, label: "데이터 확보 캠페인" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", milestone: true, label: "확대 또는 중단" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "DSP 및 에디토리얼",
          cells: [
            { weekIndex: 1, intensity: "high", milestone: true, label: "배치 재설정" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium", label: "팝 라인 피치" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "오디오 에셋 클레임" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "릴리스 서피스" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "음반 및 상품",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "medium", label: "리테일 격차 검토" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "버전 계획 확정" },
            { weekIndex: 6, intensity: "high", milestone: true, label: "멤버십 론칭" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "응원봉 제작 승인" },
            { weekIndex: 9, intensity: "high", milestone: true, label: "사전 예약 시작" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "PR 및 라이브",
          cells: [
            { weekIndex: 1, intensity: "low" },
            { weekIndex: 2, intensity: "low" },
            { weekIndex: 3, intensity: "medium", label: "서사 구축" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "언론 홍보" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", milestone: true, label: "미국 날짜 발표" },
            { weekIndex: 11, intensity: "high", label: "리스트 사전 판매" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "1주차 ~ 2주차 / 정보 유출 방지",
          items: [
            "Instagram, TikTok, YouTube의 모든 프로필 링크를 서드파티 스마트 링크에서 다른 곳으로 재지정",
            "현재 세 개의 경로 모두 막힌 Cupid 영상의 248백만 뷰 뒤의 목적지를 교체",
            "우선순위 항목으로 간주되는 34개의 삭제된 배치에 대한 에디토리얼 논의 개시",
            "현재 콘텐츠 믹스를 해당 분야의 중간값과 비교 감사하고 게이밍 프랜차이즈 정의",
            "선점된 플랫폼 핸들 해결 또는 리디렉션",
          ],
        },
        {
          weekIndex: 3,
          title: "3주차 ~ 4주차 / 캡처 레이어 구축",
          items: [
            "자체 랜딩 목적지 론칭, DSP, 스토어 또는 Weverse로 전달하기 전 이메일 수집",
            "기존 Klaviyo 인스턴스를 스토어 전용에서 전체 오디언스로 확장",
            "미국 SMS 캡처 기능이 추가되었으며, 한국 번호 제한 사항은 사전에 문서화되었습니다.",
            "콘텐츠 믹스가 재조정되어 적용되며, 게이밍 콘텐츠 비중은 15%로 조정될 예정입니다.",
            "초기 비용 산정을 위해 의도적으로 소규모 예산으로 유료 테스트를 시작합니다.",
          ],
        },
        {
          weekIndex: 5,
          title: "5주차 ~ 8주차 / 실행 및 측정",
          items: [
            "팔로워 수보다는 효율성 데이터를 우선적으로 고려하여 인스타그램에서 캡처 캠페인을 우선적으로 확장합니다.",
            "매월 상위 10개 오가닉 게시물을 대상으로 리타겟팅을 진행합니다.",
            "정의된 혜택 세트가 포함된 멤버십 티어가 출시되어 판매되며, 미국에서 구매 가능합니다.",
            "팬 1명당 캡처 비용에 대한 첫 번째 정확한 분석을 통해 이후 모든 예산이 설정됩니다.",
            "모든 유료 항목은 명시된 최소 기준 대비 확장 또는 중단 여부를 결정합니다.",
          ],
        },
        {
          weekIndex: 9,
          title: "9주차 ~ 12주차 / 특정 시점에 맞춰 전환 유도",
          items: [
            "일반 발표 전에 캡처된 리스트를 대상으로 사전 예약을 진행하여, 공급 확정 전에 수요를 측정합니다.",
            "주요 캠페인 촬영을 통해 오리지널 시대와 동일한 제작 수준의 릴리스 에셋을 제공합니다.",
            "미국 헤드라인 날짜가 발표되었으며, 리스트를 대상으로 우선 사전 판매합니다.",
            "전체 주기 검토: 캡처 비용, 전환율, 게시물별 중간값, 실물 판매율",
            "본 문서의 가정보다는 측정된 수치를 기반으로 향후 12주간의 계획을 재예측합니다.",
          ],
        },
      ],
      footnote: "여기에 명시된 모든 날짜 기반 항목은 신규 릴리스 없이 실행 가능합니다. 릴리스 의존적인 항목은 9주차에서 12주차 사이에 배치되며, 실제 릴리스 일정이 확정되면 해당 일정에 맞춰 조정될 것입니다.",
    },
  ],
};
