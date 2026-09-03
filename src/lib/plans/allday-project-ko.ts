import type { StrategyPlanData } from "../plan-context";

export const alldayProjectPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/allday-project/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "allday-project", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "ALLDAY PROJECT",
    subtitle: "지속적으로 성장해 온 팬덤에 대한 감사, 이를 지원하기 위해 이미 구축된 인프라, 그리고 이 둘을 연결하는 계획.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/allday-project/allday-project-group.jpg",
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
      subtitle: "ALLDAY PROJECT has added Spotify followers every single week since debut, including through nine months without a comeback. The opportunity is that almost nothing in the current setup lets those followers do anything next.",
      body: [
        "Fourteen months after debut, ALLDAY PROJECT holds a follower-to-listener ratio of 0.468, the highest of the 2025 rookie class. Spotify followers stand at 908,927 and have never declined in a single reading since debut, still adding roughly 509 a day at the date of this audit and through nine months with no comeback in market. On the format the industry said could not sell albums, the first EP moved 250,071 copies in its opening week. The commitment is real, it is measurable, and it is compounding on its own.",
        "이러한 팬덤의 헌신을 지원하기 위한 인프라는 이미 존재하며 비용이 지불되었습니다. DAY ONE은 데뷔 전날 이름이 지어졌습니다. DAY OFF 앱은 156개국에서 첫 24시간 동안 40,000건의 가입을 기록했습니다. 유료 멤버십이 출시되어 매진되었습니다. 아직 구축되지 않은 것은 이 둘을 연결하는 계층입니다. 자체 채널은 아무 곳으로도 연결되지 않고, 멤버십은 아무것도 통제하지 못하며, 응원봉도 없고, 그룹은 아직 어떤 시장에서도 헤드라인 공연을 하지 못했습니다. 본 문서의 감사 부분은 소비, 이탈 행동, 잠재 고객, 영상, 인프라 전반에 걸쳐 이러한 각 격차를 정밀하게 측정합니다. 전략 부분은 이미 구축된 것을 연결하고, 이 그룹의 최대 청취 시장이며 아직 공략되지 않은 미국을 향하도록 합니다.",
      ],
      supports: {
        heading: "본 문서의 범위",
        items: [
          "2024-2026년 신인 그룹과의 시장 포지션 및 남녀공학 포맷 선례, 라이브 소비 데이터 기반 계층화",
          "소비 및 이탈 분석: 릴리즈별 유지 곡선, 출시일 지수, 상한 및 하한 경제성",
          "3개의 자체 채널 전반의 플랫폼 잠재 고객 데이터를 기반으로 구축된 미국 잠재 고객 및 타겟팅",
          "영상 인텔리전스: 성과 데이터가 결합된 자체 및 경쟁사 게시물 106개 영상 코퍼스",
          "인프라 감사: CRM부터 리테일, 티켓팅까지 34개의 자체 보유 채널을 일일이 점검",
          "성장 전략: 4개의 실행 버티컬, 파트너 주도 워크스트림, 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "Spotify monthly listeners recovering from 1.94M toward the 4.20M the group reached in December 2025",
          "편집 도달 범위를 146,625건 라이브에서 2026년 3월까지만 해도 카탈로그가 보유했던 12.45M으로 재건",
          "미국 내 이메일 및 SMS 전반에 걸쳐 측정 가능한 자체 보유 리스트를 구축하기 위해 제로에서 퍼스트파티 데이터 확보 시작",
          "숏폼 콘텐츠 주 4회 이상 지속적으로 게시 재개, 경쟁 그룹 모두가 따르는 빈도",
          "최초의 헤드라인 룸과 응원봉 제공으로 매진된 멤버십 회원들에게 실질적인 독점 콘텐츠 제공",
          "최초의 미국 리테일 프로그램 및 명명된 미국 파트너 구조 구축, 그룹의 최대 시장 전환",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "14 Months of Spotify Consumption",
          subtitle: "데뷔 이후 월간 리스너 및 팔로워 수치. 두 지표는 반대 방향으로 움직입니다: 팔로워 수는 단 한 번도 감소한 적이 없으며, 리스너 수는 2025년 12월 20일 4.20M으로 정점을 찍은 후 약 54% 하락했습니다.",
          series: [
            {
              name: "월간 리스너",
              points: [
                { x: "25/6/25", y: 156612 }, { x: "25/7/1", y: 881795 }, { x: "25/8/1", y: 3558809 }, { x: "25/9/1", y: 3048881 }, { x: "25/10/1", y: 2731824 }, { x: "25/11/1", y: 2341639 }, { x: "25/12/1", y: 3263035 }, { x: "25/12/20", y: 4195113 }, { x: "26년 1월 1일", y: 4036593 }, { x: "26년 2월 1일", y: 3690893 }, { x: "26년 3월 1일", y: 3076390 }, { x: "26년 4월 1일", y: 3012497 }, { x: "26년 5월 1일", y: 2581395 }, { x: "26년 6월 1일", y: 2553854 }, { x: "26년 7월 1일", y: 2204568 }, { x: "26년 8월 1일", y: 1990176 }, { x: "26년 8월 31일", y: 1951884 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "25/6/25", y: 46559 }, { x: "25/7/1", y: 125931 }, { x: "25/8/1", y: 270952 }, { x: "25/9/1", y: 369070 }, { x: "25/10/1", y: 424242 }, { x: "25/11/1", y: 461394 }, { x: "25/12/1", y: 516130 }, { x: "25/12/20", y: 569294 }, { x: "26년 1월 1일", y: 596469 }, { x: "26년 2월 1일", y: 672386 }, { x: "26년 3월 1일", y: 723276 }, { x: "26년 4월 1일", y: 773837 }, { x: "26년 5월 1일", y: 814269 }, { x: "26년 6월 1일", y: 849748 }, { x: "26년 7월 1일", y: 873859 }, { x: "26년 8월 1일", y: 892294 }, { x: "26년 8월 31일", y: 907611 },
              ],
            },
          ],
          markers: [
            { x: "25/6/25", label: "DEBUT" },
            { x: "25/12/20", label: "PEAK" },
            { x: "26년 3월 1일", label: "PUBG" },
          ],
          tall: true,
          source: "Chartmetric, 2025년 6월 25일 ~ 2026년 8월 31일",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify daily and weekly chart archives, Hanteo and Circle published tallies, platform audience data, a 34-surface owned-infrastructure audit, and a dedicated ALLDAY PROJECT video intelligence store. Instagram audience geography, age, gender and affinity figures are platform-panel estimates built on a sample of roughly 72 to 78 profiles and are labelled as estimates wherever they appear. Cover photograph: 티비텐 TV10, CC BY 3.0, via Wikimedia Commons.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 포지션",
      philosophy: "포지셔닝은 평판이 아닌 라이브 소비에 따라 계층화될 때만 방어 가능합니다. 11명의 아티스트, 하나의 메트릭 기준선, 세 개의 티어.",
      intro: "The comparison set spans the acts ALLDAY PROJECT is measured against commercially and creatively: the 2024-2025 rookie class, the established fourth-generation groups, the global-format outlier, and the one co-ed precedent with a full career behind it. Spotify monthly listeners (Chartmetric, September 2026) is the spine. The notes carry what each peer does well and what ALLDAY PROJECT can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "티어 맵",
          strategy: "두 개의 명확한 구분선이 티어를 정의합니다: 12.87M에서 7.96M까지, 그리고 4.18M에서 1.94M까지. ALLDAY PROJECT는 3티어의 최상단에 위치합니다. 2티어와의 격차는 KiiiKiii의 4,179,465명으로, 현재 기준치의 2.15배입니다. 이것이 본 계획이 달성하고자 하는 수치이며, 그 아래의 팔로워 기반은 이미 상위 티어에 맞춰져 있습니다.",
          components: {
            heading: "티어 원 / 글로벌 스케일, 월간 리스너 12M+ 명",
            items: [
              "KATSEYE, 월간 리스너 37.7M 명. 미국을 수출 시장이 아닌 홈 마켓으로 성공시킨 유일한 그룹: 미국 리스너 8.62M 명, 미국 내 순위 1위. K-팝 프로덕션으로 글로벌 팝 액트로서 구축되었기에 누구도 전환시킬 필요가 없었습니다. 그들의 규모가 ALLDAY PROJECT가 채택할 필요가 없는 광범위한 포지셔닝을 강요하기 때문에, 이러한 대비는 낙담시키기보다는 교훈적입니다.",
              "ILLIT, 월간 리스너 2,140만 명. 해당 그룹 내 가장 강력한 발견 엔진입니다. 2,140만 명의 리스너 대비 0.359의 비율은 끊임없이 채워지는 방대한 캐주얼 팬층을 의미합니다. 이들의 음악적 성향은 의도적으로 편안하게 듣기 좋은 음악으로, 이는 ALLDAY PROJECT가 선택하지 않은 영역입니다.",
              "CORTIS, 월간 리스너 1,290만 명. 1월에 ALLDAY PROJECT와 골든디스크 신인상을 공동 수상했으며, 현재는 6.63배의 규모입니다. 동일한 수상, 동일한 주기임에도 불구하고 두 아티스트의 성장 궤적 차이는 릴리즈 주기 때문이지, 음악 형식이나 재능 때문이 아닙니다.",
            ],
          },
          kpis: [
            "2티어, 확고한 규모, 400만~800만: Hearts2Hearts 796만 명, BABYMONSTER 769만 명, MEOVV 496만 명, KiiiKiii 418만 명",
            "3티어, 200만 미만: ALLDAY PROJECT 194만 명 (티어 최상단), JEON SOMI 182만 명, izna 156만 명, KARD 103만 명",
            "2티어와의 격차: KiiiKiii 대비 2,238,576명 증가, 또는 2.15배",
            "비율 0.468은 2025년 신인 그룹 중 최고이며, 기존 아티스트들이 도달하는 1.14에서 2.05 범위보다는 낮습니다.",
            "1티어와의 격차: CORTIS 대비 1,090만 명 증가, 또는 6.63배",
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              subtitle: "11개 그룹, 하나의 지표. ALLDAY PROJECT는 3티어 최상단에 위치하며, 상위 티어에 걸맞은 팬덤 규모를 보유하고 있습니다.",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "KATSEYE", y: 37714478 },
                    { x: "ILLIT", y: 21357175 },
                    { x: "CORTIS", y: 12873814 },
                    { x: "Hearts2Hearts", y: 7960326 },
                    { x: "BABYMONSTER", y: 7685700 },
                    { x: "MEOVV", y: 4962135 },
                    { x: "KiiiKiii", y: 4179465 },
                    { x: "ALLDAY PROJECT", y: 1940889 },
                    { x: "JEON SOMI", y: 1817500 },
                    { x: "izna", y: 1559098 },
                    { x: "KARD", y: 1032993 },
                  ],
                },
              ],
              highlightX: ["ALLDAY PROJECT"],
              tall: true,
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "hbars",
              title: "팬덤 전환율: 월간 리스너당 팔로워 수",
              subtitle: "ALLDAY PROJECT ranks 4th of 11 and first among the 2025 rookie class. The three acts above them carry more Spotify followers than monthly listeners, a signature of an established fandom rather than a rookie one, and mark the range this plan is aiming at.",
              series: [
                {
                  name: "팔로워-리스너 비율",
                  points: [
                    { x: "KARD", y: 2.046 },
                    { x: "JEON SOMI", y: 1.825 },
                    { x: "BABYMONSTER", y: 1.141 },
                    { x: "ALLDAY PROJECT", y: 0.468 },
                    { x: "izna", y: 0.423 },
                    { x: "CORTIS", y: 0.422 },
                    { x: "MEOVV", y: 0.408 },
                    { x: "ILLIT", y: 0.359 },
                    { x: "KATSEYE", y: 0.337 },
                    { x: "Hearts2Hearts", y: 0.313 },
                    { x: "KiiiKiii", y: 0.239 },
                  ],
                },
              ],
              highlightX: ["ALLDAY PROJECT"],
              tall: true,
              note: "Ratio is Spotify followers divided by monthly listeners. BABYMONSTER at 1.14, JEON SOMI at 1.83 and KARD at 2.05 all carry more followers than listeners, which is the range an established fandom reaches and the direction this plan is pointed.",
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "B",
          title: "그룹별 분석 방식",
          strategy: "그룹은 각 아티스트의 팬층이 구축된 지역에 따라 나뉘며, ALLDAY PROJECT는 동종 그룹 중 어느 곳에도 명확히 속하지 않는 분류에 해당합니다. 이들의 음악 소비는 아시아에 치중되어 있고 팬층은 미국에 치중되어 있는데, 이는 이례적인 현상이며 본 섹션에서 가장 활용 가능한 사실입니다.",
          components: {
            heading: "세 가지 분석",
            items: [
              "미국 우선 전략: KATSEYE, ILLIT, CORTIS 모두 미국을 최우선 국가로 선정했으며, ALLDAY PROJECT의 전체 글로벌 팬덤보다 큰 미국 리스너 기반을 보유하고 있습니다. ALLDAY PROJECT 역시 미국에서 384,259명으로 1위를 차지했으며, 해당 전략에서 미국 시장을 직접 겨냥한 구조가 없는 유일한 아티스트입니다.",
              "국내 및 지역 전략: Hearts2Hearts는 인도네시아, MEOVV는 말레이시아, BABYMONSTER는 팬덤 우선 전환에서 선두를 달리고 있습니다. 이들은 시장별로 깊이를 구축하는 아티스트들입니다. ALLDAY PROJECT의 한국 시장 규모는 93,271명으로 작지만, 상위 20개 시장 중 지난 6개월간 성장한 유일한 시장입니다.",
              "기존 팬덤 그룹: BABYMONSTER, JEON SOMI, KARD 모두 리스너보다 팔로워 수가 많습니다. KARD는 또한 10년간의 남녀공학 투어 경력을 유지한 유일한 아티스트이며, 10년간 정규 앨범 1장으로 약 2,000석 규모의 공연장을 채웠습니다. ALLDAY PROJECT의 단일 EP 발매 주간 판매량은 KARD의 커리어 최고 앨범 발매 주간 판매량을 이미 12.1배 초과했으며, 이는 KARD가 도달한 포맷 상한선이 청중의 상한선이 아닌 유통의 상한선이었음을 의미합니다.",
            ],
          },
          kpis: [
            "ALLDAY PROJECT는 KiiiKiii 월간 리스너의 46%를 보유한 상태에서 KiiiKiii 팔로워 수의 91%를 차지하고 있습니다.",
            "Instagram 팔로워 패널은 미국을 26%, 한국을 18%로 추정하며, 이는 해당 티어에서 가장 미국 비중이 높은 팔로워 추정치입니다.",
            "한국은 93,271명의 리스너로, 상위 20개 시장 중 지난 6개월간 성장한 유일한 시장입니다.",
            "명품 소비층과의 친밀도 지수는 7.2배로, 비교 대상 그룹 내에서 가장 강력한 브랜드 신호입니다.",
          ],
        },
      ],
      footnote: "모든 비교 수치는 2026년 9월 3일 Chartmetric API에서 추출되었으므로, 단일 날짜를 기준으로 측정되어 직접 비교가 가능합니다. 남녀공학 선례의 경력 및 투어 이력은 공개된 투어 경로 및 한터 집계 자료를 기반으로 합니다.",
    },

    // ===================================================================
    // 03. Consumption & Decay Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비 및 감소 분석",
      philosophy: "최고 순위는 발매 초반의 성과를 보여줍니다. 유지율은 홍보가 없을 때 팬들이 어떻게 반응하는지를 보여줍니다. 본 섹션은 후자를 분석합니다.",
      intro: "Every figure below is built from Spotify daily and weekly chart archives, indexed from each release date and normalized for the fact that a debut chart week contains four days while every subsequent week contains seven. Chart-coverage gaps are treated as gaps, never as zeros: when a track falls below the top-200 cutoff it is recorded as below cutoff, because the catalog is still doing 229,340 streams a day globally.",
      subBlocks: [
        {
          label: "A",
          title: "팬덤 전환율, 월별",
          strategy: "해당 비율은 2025년 8월 0.076에서 0.465로 6.1배 향상되었으며, 그 과정에서 세 번의 보합 또는 하락 월이 있었고 2026년 1월부터는 꾸준히 상승세를 이어왔습니다. 이 두 가지 요소의 기여도를 분해하는 것이 중요한데, 두 부분의 지속 가능성이 동일하지 않기 때문입니다. 리스너 감소는 팔로워 증가보다 약 두 배의 기여를 합니다. 팔로워 증가는 지속 가능한 부분이며 그 자체로도 주목할 만합니다. 팔로워는 12월 최고치 대비 59.7% 증가했으며, 시장 복귀 없이 9개월 동안 단 한 번도 감소하지 않았습니다.",
          charts: [
            {
              kind: "line",
              title: "월별 팔로워-리스너 비율",
              subtitle: "2025년 8월 0.076에서 2026년 8월 말 0.465까지. 그 과정에서 세 번의 하락이 있었으며, 2026년 1월 이후 매월 이전 달보다 개선되었습니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "25년 7월", y: 0.143 }, { x: "25년 8월", y: 0.076 }, { x: "25년 9월", y: 0.121 }, { x: "10월 25일", y: 0.155 }, { x: "11월 25일", y: 0.197 }, { x: "12월 25일", y: 0.158 }, { x: "1월 26일", y: 0.148 }, { x: "2월 26일", y: 0.182 }, { x: "3월 26일", y: 0.235 }, { x: "4월 26일", y: 0.257 }, { x: "5월 26일", y: 0.315 }, { x: "6월 26일", y: 0.333 }, { x: "7월 26일", y: 0.396 }, { x: "8월 26일", y: 0.448 }, { x: "8월 31일 26", y: 0.465 },
                  ],
                },
              ],
              note: "Ratio is Spotify followers divided by monthly listeners, read at each month start.",
              source: "Chartmetric 일별 시리즈, 2025년 6월 ~ 2026년 8월",
            },
          ],
          kpis: [
            "12월 리스너 최고치 이후 팔로워 339,633명 증가, 59.7% 상승했으며 감소 추세는 전혀 없었습니다.",
            "현재 시장에 신규 음반이 없음에도 불구하고 하루 약 509명의 팔로워가 꾸준히 증가하고 있습니다.",
            "9월 3일 기준 비율 0.468로, 2025년 신인 그룹 중 1위이며 총 11개 그룹 중 4위에 해당합니다.",
            "월간 리스너 감소는 완만한 하락이 아닌 톱니 모양으로 나타납니다: 3월 -2.7%, 4월 -13.8%, 5월 -2.0%, 6월 -11.7%, 7월 -11.3%, 8월 -2.1% (월말 대비 월말 기준)",
          ],
        },
        {
          label: "B",
          title: "카탈로그 건전성과 리텐션 승자",
          strategy: "The catalog carries roughly 1.60M Spotify streams a week fourteen months after debut, and the composition of that number contains the most actionable finding in this section. Read the third column, not the first: the track holding the highest share of its own peak is LOOK AT ME, an EP cut, at 15.1%. It is now out-streaming both the lead single that preceded it and the debut B-side globally. The audience returns to a song the promotion never centered.",
          charts: [
            {
              kind: "bars",
              title: "트랙별 주간 스트리밍 현황",
              subtitle: "Seven-day Spotify rate as of September 3 2026. FAMOUS is a genuine evergreen at 484K a week, fourteen months out.",
              unit: "주간 스트리밍 수",
              series: [
                {
                  name: "7일간 수치",
                  points: [
                    { x: "FAMOUS", y: 484056 },
                    { x: "LOOK AT ME", y: 325997 },
                    { x: "ONE MORE TIME", y: 280138 },
                    { x: "WICKED", y: 213960 },
                    { x: "WHERE YOU AT", y: 105283 },
                    { x: "I DON'T BARGAIN", y: 67824 },
                    { x: "HOT", y: 52526 },
                    { x: "YOU AND I", y: 47073 },
                    { x: "MEDUSA", y: 15236 },
                  ],
                },
              ],
              source: "Chartmetric 트랙 통계, 2026년 9월 3일",
            },
            {
              kind: "bars",
              title: "유지율: 현재 스트리밍 수 대비 최고 주간 스트리밍 수 비율",
              subtitle: "유지율 순위는 프로모션 순위와 다릅니다. EP 수록곡인 LOOK AT ME는 타이틀곡보다 자체 최고 주간 스트리밍 수 대비 높은 비율을 유지하고 있습니다.",
              unit: "%",
              series: [
                {
                  name: "최고 주간 스트리밍 수 대비 비율",
                  points: [
                    { x: "LOOK AT ME", y: 15.1 },
                    { x: "WHERE YOU AT", y: 12.6 },
                    { x: "HOT", y: 12.5 },
                    { x: "I DON'T BARGAIN", y: 11.4 },
                    { x: "FAMOUS", y: 8.7 },
                    { x: "YOU AND I", y: 6.8 },
                    { x: "ONE MORE TIME", y: 6.1 },
                    { x: "WICKED", y: 5.8 },
                    { x: "MEDUSA", y: 5.0 },
                  ],
                },
              ],
              highlightX: ["LOOK AT ME"],
              source: "Chartmetric 트랙 통계, 2026년 9월 3일",
            },
          ],
          kpis: [
            "Total current catalog rate: roughly 1.60M Spotify streams per week, 229,340 per day globally",
            "FAMOUS는 출시 14개월 차에 주간 484,056건을 기록하며, 전체 주간 카탈로그 스트리밍의 약 30%를 차지합니다.",
            "LOOK AT ME는 프로모션의 중심이 아니었음에도 불구하고 현재 글로벌 차트에서 ONE MORE TIME과 WICKED의 스트리밍 수를 앞서고 있습니다.",
            "현재까지 카탈로그 총 스트리밍 수: 10개 트랙에서 2억 4,550만 건, 이 중 9개 트랙이 상위 차트에 올랐습니다.",
          ],
        },
        {
          label: "C",
          title: "출시 곡선 및 소비 패턴 분석",
          strategy: "일일 기준으로 환산 시, ALLDAY PROJECT의 어떤 발매곡도 자체 출시 초기 스트리밍 수의 1.21배를 넘지 못했습니다. 반면, 비교 대상 아티스트들은 모두 1.9배를 초과했으며 최고 기록은 3.38배에 달합니다. 이들의 발매곡은 2~4일 내에 일일 최고 스트리밍 수에 도달한 후 안정화됩니다. 이는 출시 중심의 패턴으로, 출시 첫날의 동원력은 뛰어나지만 출시 4주차까지 곡을 이끌어가는 출시 후 발견 단계가 구축되지 않았음을 의미합니다. 이는 음악적 문제가 아닌 마케팅의 격차이며, 섹션 08부터 11까지는 이 문제를 해결하기 위해 설계되었습니다.",
          charts: [
            {
              kind: "bars",
              title: "최고 주간 스트리밍 수 대비 출시 주간 스트리밍 수 배율",
              subtitle: "일별 정규화되어, 4일간의 데뷔 차트 주간이 7일간의 주간과 공정하게 비교됩니다. 비교 대상 아티스트는 출시 후 배가 됩니다. ALLDAY PROJECT의 발매는 출시 시점에 최고치를 기록합니다.",
              unit: "x",
              series: [
                {
                  name: "최고점 / 출시 주간, 일별",
                  points: [
                    { x: "CORTIS REDRED", y: 3.38 },
                    { x: "KiiiKiii 404", y: 2.75 },
                    { x: "H2H The Chase", y: 2.24 },
                    { x: "BABYMONSTER SHEESH", y: 2.19 },
                    { x: "ILLIT Magnetic", y: 1.92 },
                    { x: "LOOK AT ME", y: 1.21 },
                    { x: "WICKED", y: 1.16 },
                    { x: "ONE MORE TIME", y: 1.03 },
                    { x: "FAMOUS", y: 1.00 },
                  ],
                },
              ],
              highlightX: ["LOOK AT ME", "WICKED", "ONE MORE TIME", "FAMOUS"],
              tall: true,
              note: "모든 발매가 금요일-목요일 차트 주간 내 월요일에 출시되었기 때문에, 출시 주간을 일별 비율로 정규화했습니다.",
              source: "Spotify Korea weekly chart archives, indexed from each release date",
            },
            {
              kind: "bars",
              title: "발매별 한국 주간 차트 주간 수",
              subtitle: "발매 순서별 차트 지속성. 데뷔 싱글은 51주 연속 유지되었습니다.",
              unit: "weeks",
              series: [
                {
                  name: "차트 진입 주간 수",
                  points: [
                    { x: "FAMOUS", y: 51 },
                    { x: "WICKED", y: 31 },
                    { x: "ONE MORE TIME", y: 20 },
                    { x: "LOOK AT ME", y: 12 },
                    { x: "WHERE YOU AT", y: 6 },
                    { x: "YOU AND I", y: 1 },
                    { x: "I DON'T BARGAIN", y: 1 },
                  ],
                },
              ],
              source: "Spotify Korea weekly chart archives, September 3 2026",
            },
          ],
          kpis: [
            "모든 발매는 2일차와 4일차 사이에 최대 일별 비율에 도달합니다.",
            "현재까지 달성된 최고 출시 후 배수: 1.21배, LOOK AT ME에서",
            "신인 그룹 전체 비교 범위: 1.92배에서 3.38배",
            "FAMOUS는 2025년 6월부터 2026년 6월까지 한국에서 51주 연속 차트인을 기록했으며, 이는 카탈로그 내 최장 기록입니다.",
          ],
        },
        {
          label: "D",
          title: "천장과 바닥 경제학",
          strategy: "두 개의 숫자가 전체 기회를 구성합니다. 아티스트 레벨 주간 최고치는 데뷔 시대에 932,447명이었고 EP 시대에는 935,330명으로, 차트 인벤토리의 세 배에 걸쳐 0.31%의 변화를 보였으며, 이는 추가된 카탈로그만으로는 최고치를 끌어올리지 못한다는 것을 의미합니다. 시대 간 데뷔 트랙의 감소세는 2025년 11월까지 15주 동안 주당 -6.96%에서 최종 안정기에 접어들면서 주당 약 -1%로 둔화되었으며, 그 안정기는 실질적인 것이었습니다. 전체 월간 청취자 수는 안정화되지 않았으며, 섹션 03A에서 명확히 명시하고 있습니다. 수치를 움직이는 동인은 실제 컴백입니다: 2025년 11월 발매는 이후 두 주 동안 데뷔 카탈로그를 42.0% 상승시켰습니다. 3월 브랜드 싱글은 같은 두 주 동안 -13.8%의 영향을 미쳤습니다. 발매는 카탈로그를 상승시킵니다. 브랜드 제휴는 그렇지 않습니다.",
          charts: [
            {
              kind: "bars",
              title: "발매 간 주간 청취자 감소율",
              subtitle: "신규 발매 사이의 각 공백 기간 동안 데뷔 싱글의 주간 스트림 감소 추이. 해당 트랙 자체는 점차 잊히기 어려워졌습니다. 전체 카탈로그의 월간 리스너 수는 동일한 경로를 따르지 않았습니다.",
              unit: "%/wk",
              series: [
                {
                  name: "주간 감소율",
                  points: [
                    { x: "시대 1 간격", y: 6.96 },
                    { x: "시대 2 간격", y: 4.03 },
                    { x: "시대 3 간격", y: 1.01 },
                  ],
                },
              ],
              source: "Spotify Korea weekly archives, measured on the debut single across 51 charting weeks",
            },
            {
              kind: "grouped",
              title: "카탈로그 반응: 컴백 vs 브랜드 싱글",
              subtitle: "각 이벤트 후 2주간 데뷔 싱글의 한국 주간 스트림 변화량",
              unit: "%",
              series: [
                {
                  name: "카탈로그 변화",
                  points: [
                    { x: "Nov 2025 컴백", y: 42.0 },
                    { x: "Mar 2026 브랜드 싱글", y: -13.8 },
                  ],
                },
              ],
              note: "정식 발매는 백 카탈로그를 함께 견인합니다. 브랜드 협업은 그렇지 못했습니다.",
              source: "Spotify Korea weekly archives, Nov 2025 and Mar 2026 windows",
            },
          ],
          kpis: [
            "아티스트 주간 최고치: 데뷔 시대 932,447, EP 시대 935,330 (차트 트랙 3배 기준)",
            "트랙당 효율성은 동일한 두 시대에 걸쳐 466,224에서 155,888로 하락했습니다.",
            "데뷔 트랙 감소율은 주당 -6.96% (2025년 7월~11월)에서 주당 약 -1% (2026년 4월~6월)로 개선되었습니다.",
            "카탈로그 정체 구간은 마지막 10주간 차트 기록 동안 주당 84,921에서 94,543 사이를 유지했습니다.",
          ],
        },
        {
          label: "E",
          title: "에디토리얼 도달 및 실물 판매",
          strategy: "두 가지 추가적인 발견이 섹션을 마무리하며, 이는 상반된 방향을 가리킵니다. 에디토리얼 지원은 거의 완전히 중단되었으며, 시점은 정확합니다. 최고 지원 시점은 2026년 3월 12일에 27개의 에디토리얼 플레이리스트가 동시에 활성화되어 총 12.45M 팔로워에 도달했습니다. 현재 5개가 활성화되어 있으며 146,625명에 도달합니다. 3월과 8월 사이의 98.8% 감소는 같은 기간 동안 리스너 곡선의 가장 명확한 단일 설명이며, 해당 플레이스먼트 42개 모두 이미 한 번 획득했기 때문에 회복 가능합니다. 실물 판매는 반대 방향으로 움직입니다. EP는 스트리밍이 감소한 같은 기간 동안 첫 주에 250,071장을 판매했으며, 이는 데뷔 싱글의 5.2배입니다. 이 두 청중 그룹은 완전히 다르게 행동하며, 그중 하나만이 제대로 판매된 적이 있습니다.",
          charts: [
            {
              kind: "grouped",
              title: "에디토리얼 플레이리스트 도달 범위, 과거 vs. 현재",
              subtitle: "2026년 3월 12일 기준 최대 27개의 에디토리얼 플레이리스트 동시 지원을 기록했습니다. K-Pop ON!(팔로워 6.13M)은 4월 8일, K-Pop Rising은 4월 14일, KimBops!는 5월 13일, Hot Hits Korea는 6월 24일에 제외되었습니다.",
              unit: "reach",
              series: [
                {
                  name: "도달 범위",
                  points: [
                    { x: "최고점, 2026년 3월 12일", y: 12451383 },
                    { x: "현재 진행 중", y: 146625 },
                  ],
                },
              ],
              note: "총 42개의 개별 에디토리얼 플레이리스트가 카탈로그를 지원했으며, 총 13.80M명의 팔로워에게 도달했습니다. 이 중 약 1.4M은 K-Pop이 아닌 에디토리얼에 포함되었으며, 여기에는 6위로 최고점을 기록한 팝 무드 리스트와 18위로 최고점을 기록한 힙합 및 R&B 리스트가 포함됩니다.",
              source: "Chartmetric 플레이리스트 엔드포인트, 2026년 9월 3일",
            },
            {
              kind: "grouped",
              title: "발매별 첫 주 실물 앨범 판매량",
              subtitle: "해당 EP는 데뷔 싱글의 첫 주 판매량 대비 5.2배, 비교 가능한 유일한 혼성 그룹의 커리어 최고 판매량 대비 12.1배를 기록했습니다.",
              unit: "copies",
              series: [
                {
                  name: "첫 주",
                  points: [
                    { x: "FAMOUS", y: 48468 },
                    { x: "첫 번째 EP", y: 250071 },
                  ],
                },
              ],
              source: "한터 첫 주 집계",
            },
          ],
          kpis: [
            "총 42개의 에디토리얼 플레이리스트가 지원되었으며, 2026년 3월 최고점 당시 27개가 동시 진행되었고, 현재 5개가 진행 중입니다.",
            "K-Pop이 아닌 에디토리얼은 이례적으로 높은 최고 순위를 기록했으며 현재 활용되지 않고 있습니다.",
            "EP 첫 주 판매량 250,071장은 스트리밍 규모의 2배에서 4배에 달하는 동종 업계 경쟁자들과 유사한 수준입니다.",
            "EP 판매 첫날만 85,531장으로, 데뷔 싱글의 전체 첫 주 판매량을 상회합니다.",
          ],
        },
      ],
      footnote: "방법론: 발매일 기준으로 인덱싱되며, 출시 첫 주는 일별 비율로 정규화되고, 차트 커버리지 공백은 0이 아닌 공백으로 기록됩니다. 비교 대상 그룹의 배수는 동일한 기준으로 계산되어 해당 세트는 직접 비교 가능합니다.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "청중",
      title: "미국 청중 및 타겟팅",
      intro: "The profile below is built from Chartmetric platform audience data across all three owned channels, pulled September 3, 2026. Two source types sit underneath it and they are not equally strong. Spotify listener geography is measured. Instagram follower demographics are panel estimates on a sample of roughly 72 to 78 profiles and are treated as directional only. Instagram engagement geography, computed on actual like volume across 156 cities, is the strongest signal available and is reported alongside the others because it disagrees with them.",
      thesis: "Where this group is streamed and where it is engaged are two different maps. Spotify listening is United States first at 384,259. Instagram engagement, measured on real like volume, is Greater China first: Taiwan 22.4%, then Indonesia, Korea, Japan and China, with the United States sixth at 5.7%. Neither map is wrong. The plan treats the U.S. as the streaming, retail and paid priority, and treats Asia as where live demand is already demonstrable.",
      metrosLabel: "미국 유료 시장 개척",
      metros: [
        { name: "로스앤젤레스, CA" },
        { name: "뉴욕, NY" },
        { name: "시카고, IL" },
        { name: "샌프란시스코 베이 에어리어", tier: "secondary" },
        { name: "댈러스-포트워스, TX", tier: "secondary" },
        { name: "시애틀, WA", tier: "secondary" },
        { name: "애틀랜타, GA", tier: "secondary" },
        { name: "휴스턴, TX", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 7 },
        { bracket: "18-24", weight: 30 },
        { bracket: "25-34", weight: 49 },
        { bracket: "35+", weight: 14 },
      ],
      genderDistribution: { female: 52, male: 48 },
      similarArtists: [
        "MEOVV",
        "KISS OF LIFE",
        "BADVILLAIN",
        "VVUP",
        "ZICO",
        "이영지",
        "KATSEYE",
        "izna",
        "Zior Park",
        "hannah bahng",
      ],
      genres: ["K-Pop", "한국 팝", "한국 힙합", "댄스 팝", "팝"],
      psychographics: [
        {
          label: "이 오디언스가 구매하는 것",
          items: [
            "명품 브랜드 지수는 플랫폼 기준 대비 7.2배로, 경쟁사 중 가장 강력한 브랜드 신호를 보입니다.",
            "크리스찬 디올은 12.7배, 샤넬은 12.9배, 프라다는 12.7배, 루이비통은 11.3배입니다.",
            "의류 및 액세서리, 음악, 뷰티가 가장 높은 관심사 세 가지로 나타났습니다.",
            "선호도 지수는 약 74~78명의 패널 샘플에서 추출되었으며, 이는 추세 지표이지 실제 인원수가 아닙니다.",
          ],
        },
        {
          label: "두 지표가 불일치하는 지점",
          items: [
            "Spotify listening ranks the United States first at 384,259, ahead of Indonesia, the Philippines, Taiwan and Malaysia",
            "실제 좋아요 수를 기준으로 측정한 Instagram 참여도는 대만이 22.4%로 1위이며, 미국은 5.7%로 6위를 기록했습니다.",
            "도시별 참여도는 홍콩, 타이베이, 서울이 선두를 차지했으며, 로스앤젤레스는 같은 기준으로 22위를 기록했습니다.",
            "실질적인 분석: 미국 오디언스는 스트리밍은 하지만 아직 상호작용은 적은 반면, 아시아 오디언스는 적극적으로 상호작용합니다. 두 가지 모두 현실이며, 이에 따라 다른 전략이 필요합니다.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "카탈로그를 소비하지 않고 아티스트만 따라가는 현상",
          platforms: ["Spotify", "Instagram"],
          implication: "신곡 발매 없이 59.7%의 팔로워 증가를 보였습니다. 이러한 참여는 발매 시기에 의존하지 않으므로, 활동 기간 중에만 집중하는 것이 아니라 활동 기간 사이에도 활성화될 수 있습니다.",
        },
        {
          behavior: "프로모션 싱글 대신 앨범 수록곡을 다시 듣는 현상",
          platforms: ["Spotify"],
          implication: "LOOK AT ME는 리드 싱글의 6.1% 대비 피크 주간의 15.1%를 유지하고 있습니다. 오디언스는 프로모션된 표면적인 것보다 깊이 있는 콘텐츠를 선택하고 있으며, 이는 향후 무엇을 푸시할지에 대한 정보를 제공해야 합니다.",
        },
        {
          behavior: "동일한 콘텐츠에 대해 TikTok보다 Instagram에서 더 높은 참여도를 보임",
          platforms: ["Instagram", "틱톡"],
          implication: "인스타그램은 21개의 페어링된 게시물 중 18개에서 우위를 점했습니다. 현재 활용되지 않고 있는 도달 범위는 무료이며 추가적인 제작이 필요하지 않습니다.",
        },
        {
          behavior: "유튜브에서 숏폼을 시청하지 않고 구독하는 것",
          platforms: ["유튜브"],
          implication: "4.31백만 명의 구독자로, 이는 틱톡 팔로워의 2.6배이며 동일한 영상에서 중앙값 0.27배로 전환됩니다. 잠재 고객 규모와 잠재 고객 활용도 간의 가장 큰 단일 격차입니다.",
        },
        {
          behavior: "미국에서 스트리밍을 집중적으로 하는 동안 아시아에서 적극적으로 참여하는 것",
          platforms: ["Instagram", "Spotify"],
          implication: "Taiwan drives 22.4% of Instagram like volume against 5.7% from the United States, while the U.S. leads Spotify listening. Live demand is provable in Asia today; the U.S. is a streaming and retail market that has not been asked to do anything yet.",
        },
      ],
      platformSignals: [
        {
          platform: "Spotify",
          note: "월간 리스너 1.94백만 명으로 미국이 384,259명(전체의 19.8%)으로 1위를 차지했으며, 인도네시아, 필리핀, 대만, 말레이시아가 그 뒤를 이었습니다. 팔로워 기반은 908,927명이며 증가 추세입니다. 미국은 메트로 지역 집중보다는 광범위하고 평탄한 분포를 보이는데, 이는 현장에서 전혀 활용되지 않은 알고리즘적 도달 범위로 해석됩니다.",
        },
        {
          platform: "Instagram",
          note: "팔로워 1.69백만 명, 참여율 3.52%, 평균 좋아요 약 59.7천 개. 팔로워 패널 추정치는 미국과 한국에 치우쳐 있으며, 연령대는 25~34세, 성별은 거의 균등하게 분포되어 있어 이 등급에서는 이례적입니다. 실제 좋아요 볼륨으로 측정된 참여율은 다른 이야기를 들려줍니다: 대만 22.4%, 인도네시아 8.3%, 한국 8.0%, 일본 6.9%, 중국 6.5%, 미국 5.7%. 패널은 방향성을 나타내는 것으로, 좋아요 볼륨은 신뢰할 수 있는 지표로 간주하십시오.",
        },
        {
          platform: "틱톡",
          note: "팔로워 1.63백만 명, 참여율 10.49%로 세 채널 중 가장 높습니다. 잠재 고객은 여성 77.2%, 18~24세 70.5%이며, 미국 10.4%, 브라질 9.8%, 동남아시아에 가중치가 부여됩니다. 팔로워 성장은 2026년 4월 이후로 정체되어 있습니다.",
        },
        {
          platform: "유튜브",
          note: "구독자 4.31백만 명, 채널 조회수 756백만 회. 잠재 고객은 여성 71.7%, 25~34세 56.4%이며, 구독자는 한국 23.9%, 미국 10.0%가 이끌고 있습니다. 댓글 작성 핵심층은 한국인 43.1%이므로, 목소리를 내는 잠재 고객과 구독하는 잠재 고객은 다른 집단입니다.",
        },
      ],
      footnote: "Age and gender shown are Instagram audience panel estimates via Chartmetric, September 3, 2026, computed on a sample of roughly 72 to 78 profiles. They are directional and should not be read as a headcount. Instagram engagement geography is computed on actual like volume across 156 cities and is the stronger measure. TikTok's distribution differs materially from both and is described in the platform notes. U.S. metros are ordered on Spotify city listener data and are the opening paid set, to be validated against pixel data in the first flight rather than treated as settled.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "콘텐츠",
      title: "비디오 인텔리전스 / 106개 동영상",
      intro: "Crowd Control Digital은 TwelveLabs 비디오 AI에 ALLDAY PROJECT 전용 인텔리전스 스토어를 구축했습니다: 틱톡, 인스타그램, 유튜브 전반에 걸친 그룹 자체 게시물 48개와 7개 비교 대상 그룹의 상위 게시물 58개가 포함됩니다. 모든 동영상에는 자체 성과 데이터가 포함됩니다. 이 스토어는 영구적이며 새로고침할 때마다 성장하므로, 아래 분석은 일회성 스캔이 아닌 복리 효과를 내는 자산에 대한 초기 판독값입니다.",
      clientQuestion: {
        attribution: "이 분석이 답하는 질문",
        question: "침묵기 동안에도 다음은 계속 성장했습니다. 콘텐츠가 이를 얻기 위해 무엇을 했으며, 채널을 다시 활용하는 가장 빠른 방법은 무엇입니까?",
      },
      methodology: [
        {
          label: "코퍼스 추출",
          value: "두 가지 계층입니다. 모든 소유 계정의 전체 카탈로그는 게시물별 참여율과 함께 열거되었으며, 틱톡 게시물 293개와 인스타그램 및 유튜브 게시물이 포함되며, 모든 중앙값 및 빈도 수치는 해당 전체 열거를 기반으로 계산됩니다. 그런 다음 106개 동영상 하위 집합이 비디오 스토어에 인덱싱되었습니다: 자체 소유 48개(틱톡 34개, 인스타그램 11개, 유튜브 3개) 및 경쟁사 58개로, MEOVV, CORTIS, KiiiKiii, KATSEYE, Hearts2Hearts, BABYMONSTER, izna의 상위 성과자들 중에서 추출되었습니다.",
        },
        {
          label: "비디오 인텔리전스 스토어",
          value: "106개의 서브셋 영상 모두가 전용의 영구적인 ALLDAY PROJECT 지식 저장소에 인덱싱되어, 훅, 화면 내 텍스트, 무대 연출 및 반복되는 포맷을 전체 코퍼스에 걸쳐 한 번에 조회할 수 있게 합니다. 각 파일은 자체 이름에 성과 등급을 포함하고 있어, 외부 레지스트리에 독립적으로 저장소를 읽을 수 있습니다.",
        },
        {
          label: "성과 통합 분석",
          value: "모든 항목은 조회수, 좋아요, 댓글, 공유, 참여율, 게시일 및 계정 내 백분위수와 같은 플랫폼 지표에 연결됩니다. 콘텐츠는 개별적으로가 아닌 결과에 대비하여 분석됩니다.",
        },
        {
          label: "게시 빈도 측정",
          value: "2026년 6월 1일부터 9월 3일까지 동일한 기간 동안 세트 내 모든 계정의 게시 빈도를 측정하여, 게시 빈도 비교가 동등하게 이루어지도록 합니다.",
        },
        {
          label: "정직한 한계점",
          value: "아래 결과는 전체 카탈로그 열거 및 통합 성과 데이터를 기반으로 하며, 106개 영상의 인덱싱된 서브셋이 포맷 및 콘텐츠 분석의 근간을 이룹니다. 저장소에 대한 프레임 단위 조회 결과는 이 분석을 확장하며 후속 검토에서 보고될 예정입니다. 비교 코퍼스는 각 아티스트의 최고 성과 게시물로 구성되므로, 경쟁사 중앙값은 구성상 승자의 벤치마크이지 계정 평균이 아닙니다. 멤버 단위 분석은 얼굴 인식 기반이 아닌 캡션 및 공식 태그를 기반으로 합니다.",
        },
      ],
      corpusStats: [
        {
          label: "분석된 영상",
          value: "106",
          detail: "293개의 자체 보유 TikTok 게시물 전체 카탈로그에서 추출된 48개의 자체 보유 + 58개의 경쟁사 인덱싱 영상",
        },
        {
          label: "자체 보유 TikTok 중앙값, 데뷔 시대",
          value: "3.01M",
          detail: "2025년 6월 및 7월의 전체 카탈로그 열거 기준 76개 게시물. 역대 단일 게시물 최고 기록은 14.47M입니다.",
        },
        {
          label: "자체 보유 TikTok 중앙값, 가장 최근 시대",
          value: "822K",
          detail: "2026년 5월 및 6월의 8개 게시물, 계정이 비활성화되기 전 마지막 게시물",
        },
        {
          label: "마지막 게시물로부터 경과 일수",
          value: "72 / 55 / 45",
          detail: "각각 TikTok, YouTube, Instagram 기준, 2026년 9월 3일 현재. Instagram의 마지막 오가닉 게시물은 62일 전이며, 더 최근 게시물은 브랜드 캠페인 게시물입니다.",
        },
      ],
      mixColumnLabel: "오늘의 ALLDAY PROJECT",
      benchmarkColumnLabel: "비교 세트",
      mixHeading: "출력 현황 대비 세트 운영 현황",
      mixIntro: "아래 행들은 동일한 기간 동안 측정된 현재 관행과 7개의 비교 계정이 수행하는 활동을 비교합니다. 게시 빈도가 다른 행들을 포괄합니다.",
      mixRows: [
        {
          metric: "게시물 게시 주기, 2026년 6월 1일부터 9월 3일까지",
          subject: "6월 중 하루에 8개의 TikTok 게시물, 이후 해당 기간의 마지막 72일 동안 0개",
          benchmark: "KiiiKiii ~주 21회, Hearts2Hearts ~주 21회, CORTIS ~주 20회, izna ~주 13회, KATSEYE ~주 6.8회, MEOVV ~주 4.5회, BABYMONSTER ~주 2.5회",
          read: "behind",
          note: "비교 대상 7개 계정 모두 9월 3일에 게시했습니다. 이는 감사에서 가장 크고 비용 효율적인 격차입니다.",
        },
        {
          metric: "행동 촉구",
          subject: "48개 게시물에 걸쳐 5개의 명시적인 행동 촉구, 2026년에는 없음",
          benchmark: "전체 세트의 표준 관행은 반복되는 엔드 카드 또는 릴리스 에셋에 대한 캡션 요청입니다.",
          read: "behind",
          note: "가장 최근의 행동 촉구는 271일 전이었습니다. 미국이 청취 시장 1위인 점을 감안할 때, 이는 본 문서에서 가장 비용 효율적인 해결책입니다.",
        },
        {
          metric: "플랫폼 할당",
          subject: "TikTok은 주요 플랫폼으로, Instagram은 보조 플랫폼으로, YouTube Shorts는 부차적인 것으로 간주",
          benchmark: "경쟁사들은 자체 데이터가 보상하는 플랫폼에 비중을 두며, 교차 활용을 의도적으로 관리합니다.",
          read: "behind",
          note: "Instagram은 21개의 페어링된 게시물 중 18개에서 1.47배의 중간값으로 TikTok을 능가하는 반면, 431만 구독자를 보유한 YouTube 채널은 0.27배의 성과를 냅니다. 할당은 증거에 반하여 역전되었습니다.",
        },
        {
          metric: "멤버 이름 콘텐츠",
          subject: "48개 게시물 중 12개(25%)가 멤버 이름을 언급",
          benchmark: "MEOVV는 수집된 캡션의 42%에서 멤버 이름을 언급합니다.",
          read: "behind",
          note: "두 명 이상의 멤버를 언급하는 게시물은 언급하지 않는 게시물의 292만 건에 비해 중간값 874만 건을 기록합니다. 이 형식은 효과적이며 공급이 부족합니다.",
        },
        {
          metric: "미국 대상 콘텐츠",
          subject: "거의 모든 게시물에 한국어 해시태그 사용; 영어는 가사 조각으로 나타남",
          benchmark: "KATSEYE는 미국식 관용구, 미국 브랜드 파트너 및 영어 팬덤 이름을 사용하여 100% 영어 캡션을 운영합니다.",
          read: "behind",
          note: "청취자 수 1위 시장인 384,259명의 미국 청취자에 비해, 본 자료에는 미국 시청자를 대상으로 한 에셋이 포함되어 있지 않습니다.",
        },
        {
          metric: "콘텐츠 참여도 품질",
          subject: "틱톡 참여율 10.49%; 중단 전 마지막 게시물은 17.7%의 좋아요율 기록",
          benchmark: "게시물당 기준치 이상을 무난히 달성",
          read: "ahead",
          note: "이는 콘텐츠 자체에는 문제가 없음을 나타내는 행입니다. 생산이 중단된 정확한 시점에 효율성은 상승하고 있었습니다.",
        },
      ],
      mixFootnote: "분석된 48개 영상 코퍼스와 6월부터 9월까지의 전체 게시 기간을 기준으로 측정된 자체 보유 콘텐츠 믹스입니다. 비교 열에는 각 계정의 최고 인기 게시물과 동일 기간의 게시 빈도가 설명되어 있습니다.",
      charts: [
        {
          kind: "bars",
          title: "시대별 틱톡 평균 조회수",
          subtitle: "하락세는 계정이 활동을 중단하기 4개월 전인 2026년 2월과 3월의 브랜드 싱글 기간부터 시작됩니다.",
          unit: "views",
          series: [
            {
              name: "평균 조회수",
              points: [
                { x: "데뷔, 25년 6-7월", y: 3014982 },
                { x: "컴백, 25년 11-12월", y: 2752716 },
                { x: "1월 26일", y: 2281674 },
                { x: "브랜드 싱글, 26년 2-3월", y: 381812 },
                { x: "26년 5-6월", y: 822954 },
              ],
            },
          ],
          source: "자체 보유 틱톡 코퍼스, 게시일별 게시물당 조회수",
        },
        {
          kind: "bars",
          title: "주간 게시 빈도, 2026년 6월 1일 ~ 9월 3일",
          subtitle: "해당 세트의 모든 계정에 대해 동일한 기간 동안 측정되었습니다. ALLDAY PROJECT는 6월 23일에 게시했으며 이후 72일 동안 한 번도 게시하지 않았습니다.",
          unit: "posts/wk",
          series: [
            {
              name: "주당 게시물 수",
              points: [
                { x: "KiiiKiii", y: 21 },
                { x: "Hearts2Hearts", y: 21 },
                { x: "CORTIS", y: 20 },
                { x: "izna", y: 13 },
                { x: "KATSEYE", y: 6.8 },
                { x: "MEOVV", y: 4.5 },
                { x: "BABYMONSTER", y: 2.5 },
                { x: "ALLDAY PROJECT", y: 0.6 },
              ],
            },
          ],
          highlightX: ["ALLDAY PROJECT"],
          tall: true,
          source: "2026년 9월 3일 기준, 8개 전체 핸들에 걸친 계정 열거",
        },
        {
          kind: "grouped",
          title: "동일 게시물, 세 개 플랫폼",
          subtitle: "세 개 자체 채널에 게시된 동일 영상의 평균 성과 (틱톡 수치 기준)",
          unit: "x TikTok",
          series: [
            {
              name: "상대적 성과",
              points: [
                { x: "틱톡", y: 1.0 },
                { x: "Instagram", y: 1.47 },
                { x: "YouTube Shorts", y: 0.27 },
              ],
            },
          ],
          note: "Instagram은 21개의 페어드 게시물 중 18개를 차지했습니다. YouTube Shorts는 팔로워 수가 2.6배 많은 채널에서 TikTok 수치의 약 1/4을 반환합니다.",
          source: "자체 코퍼스 전반에 걸쳐 21개의 페어드 게시물과 15개의 3-웨이 트윈",
        },
      ],
      findingsHeading: "일곱 가지 발견",
      findingsIntro: "각 카드는 판결, 실제 게시물과 그 수치를 포함한 증거, 존재하는 경우 반론, 그리고 전환점을 담고 있습니다.",
      findings: [
        {
          id: "stopped-at-strength",
          title: "채널은 참여 효율성이 최고조에 달했을 때 침묵했습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "TikTok은 72일, YouTube는 55일 동안 게시하지 않았으며, Instagram의 마지막 오가닉 릴은 45일 전입니다. 중단 전 마지막 TikTok은 4,745,315회의 조회수와 839,797개의 좋아요를 기록했으며, 이는 17.7%의 좋아요율로 계정 데뷔 주 이후 기록된 가장 강력한 비율입니다. 콘텐츠가 게시물당 가장 효과적이었던 시점에서 출력이 중단되었습니다.",
          evidence: [
            "마지막 TikTok 게시물, 2026년 6월 23일: 4,745,315회 조회수, 839,797개 좋아요, 17.7% 좋아요율",
            "해당 좋아요율은 계정 데뷔 기간 이후 최고치이며, 도달 기준 약 293개 중 30위에 랭크된 게시물입니다.",
            "Instagram의 마지막 오가닉 릴, 2026년 7월 3일은 홍보 없이 934,654회의 조회수를 기록했습니다. 이후 유일한 게시물은 7월 20일의 브랜드 캠페인 릴입니다.",
            "Spotify followers continued adding roughly 509 a day through the entire quiet window",
          ],
          counterEvidence: [
            "마지막 게시물은 계정의 도달 최고치가 아닙니다. 도달 최고치는 2025년 7월 게시물로 14,472,560회의 조회수를 기록했으며, 따라서 중단은 최고 도달이 아닌 최고 효율 시점에 이루어졌습니다.",
          ],
          pivot: {
            title: "재건 전에 재시작하십시오.",
            actions: [
              "새로운 제작을 의뢰하기 전에 고정된 주간 주기에 맞춰 게시를 재개하십시오.",
              "새로운 크리에이티브 방향보다는 코퍼스에서 이미 가장 높은 순위를 기록한 형식으로 시작하십시오.",
              "침묵 기간 동안의 팔로워 증가는 잠재고객이 여전히 존재하며 기다리고 있다는 증거로 간주하십시오.",
            ],
          },
        },
        {
          id: "brand-single-dip",
          title: "도달 하락은 중단 4개월 전 브랜드 싱글과 함께 시작됩니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "데뷔 당시 틱톡(TikTok) 조회수 중앙값은 3,014,982회였으나, 2026년 2월 및 3월 브랜드 협업 기간 동안 381,812회로 감소하여 87% 하락했습니다. 전체 코퍼스에서 성과가 가장 낮았던 상위 10개 게시물 중 6개가 브랜드 협업 태그를 포함하고 있습니다. 카탈로그는 이에 동의했습니다. 동일한 릴리스는 백카탈로그 스트림을 -9.8% 감소시킨 반면, 11월 컴백은 +42.0% 증가시켰습니다.",
          evidence: [
            "데뷔 시대 중앙값 3,014,982회 (76개 게시물); 브랜드 싱글 시대 중앙값 381,812회 (10개 게시물)",
            "브랜드 싱글 뮤직비디오 자체는 368,717회로, 코퍼스 내 2.2번째 백분위수에 해당합니다.",
            "코퍼스 내 성과가 가장 저조한 상위 10개 게시물 중 6개가 브랜드 협업 태그가 지정되었습니다.",
            "카탈로그 반응: 브랜드 싱글 -9.8% 대 11월 컴백 +42.0%",
          ],
          counterEvidence: [
            "2026년 5월 및 6월 게시물은 822,954회의 중앙값으로 회복되었으므로, 해당 효과는 계정의 영구적인 재설정보다는 캠페인에 국한된 것입니다.",
          ],
          pivot: {
            title: "브랜드 채널과 아티스트 채널을 분리하십시오.",
            actions: [
              "파트너 캠페인을 메인 릴리스 문법을 통하지 않고 자체 콘텐츠 스트림으로 운영하십시오.",
              "메인 피드는 아티스트 소유 포맷을 위해 유지하여, 파트너 작업이 계정의 중앙값을 설정하지 않도록 하십시오.",
              "모든 파트너 활동을 아티스트 릴리스에 연결하여 카탈로그도 함께 상승 효과를 얻도록 하십시오.",
            ],
          },
        },
        {
          id: "platform-allocation",
          title: "플랫폼 할당이 그룹 자체 데이터와 반대로 되어 있습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "동일한 영상은 21건의 페어링된 사례 중 18건에서 틱톡(TikTok)보다 인스타그램(Instagram)에서 더 나은 성과를 보였으며, 중앙값은 1.47배였습니다. 유튜브 쇼츠(YouTube Shorts)는 431만 명의 구독자를 보유한 채널에서 0.27배의 중앙값을 기록했는데, 이는 틱톡(TikTok) 팔로워의 2.6배에 해당합니다. 가장 큰 자체 보유 오디언스에게는 가장 적은 노출이 제공되고 있으며, 가장 성과가 좋은 플랫폼은 거울처럼 취급되고 있습니다.",
          evidence: [
            "인스타그램(Instagram)은 21건의 페어링된 게시물 중 18건에서 틱톡(TikTok)보다 우수했으며, 중앙값 1.47배, 평균 1.90배였습니다.",
            "가장 큰 차이를 보인 세 건 모두 브랜드 캠페인 콘텐츠에서 발생했으며, 각각 3.81배, 4.02배, 4.22배였습니다.",
            "유튜브 쇼츠(YouTube Shorts)는 15건의 3자 트윈에서 0.27배의 중앙값을 기록했으며, 마지막 게시물은 틱톡(TikTok) 4,745,315회, 인스타그램(Instagram) 5,395,176회, 유튜브(YouTube) 741,000회를 기록했습니다.",
            "유튜브(YouTube) 채널은 431만 명의 구독자와 7억 5,600만 회의 누적 조회수를 보유하고 있으며, 이는 모든 플랫폼 중 가장 큰 자체 보유 오디언스입니다.",
          ],
          counterEvidence: [
            "한 건의 유튜브 쇼츠(YouTube Short)가 틱톡(TikTok) 트윈보다 1.20배 더 나은 성과를 보였으므로, 해당 포맷이 채널에 적합할 경우 채널은 역량을 발휘할 수 있습니다.",
          ],
          pivot: {
            title: "미러링하는 대신 크로스오버를 관리하십시오.",
            actions: [
              "인스타그램(Instagram)을 자체 게시물 결정이 있는 주요 플랫폼으로 취급하고, 중복 피드로 간주하지 마십시오.",
              "채널의 오디언스가 이미 구독하고 있는 포맷을 중심으로 유튜브 쇼츠(YouTube Shorts)를 구축한 후, 60일 후에 다시 측정하십시오.",
              "교차 홍보에 성공하지 못한 기존의 콘텐츠를 활용하십시오. 해당 재고는 이미 존재하며 배송 비용이 들지 않습니다.",
            ],
          },
        },
        {
          id: "cta-desert",
          title: "2025년에 총 다섯 건의 릴리스 콜투액션이 있었으며, 그 이후 앱 프롬프트는 한 건 있었습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "보유 콘텐츠 내에서 2025년 6월부터 12월 사이에 총 다섯 건의 명시적인 릴리스 콜투액션이 있었으며, 이는 10%의 비율입니다. 그 이후로 어떠한 요청도 단 한 건뿐이었습니다. 2026년 3월 TikTok에 게시된 단일 앱 다운로드 프롬프트로, 이는 샘플 세트에서 가장 낮은 성과를 보인 게시물입니다. 지난 9개월 이상 릴리스, 티켓, 멤버십 또는 정보 수집 요청은 실행되지 않았습니다.",
          evidence: [
            "총 48개의 게시물 중 릴리스 콜투액션은 다섯 건으로, 10%의 비율입니다.",
            "마지막 릴리스 요청: 2025년 12월 6일, EP에 대한 사전 저장 및 사전 주문 프롬프트.",
            "2026년 3월의 앱 다운로드 프롬프트 한 건은 샘플 세트에서 가장 낮은 성과를 기록했으며, 4.75M의 최대치 대비 318K의 재생 수를 기록했습니다.",
            "1.69M 인스타그램 팔로워의 프로필 링크는 3월에 게시된 뮤직비디오로 연결됩니다.",
          ],
          pivot: {
            title: "도달 범위를 특정 지점으로 집중시키십시오.",
            actions: [
              "타이틀과 날짜가 포함된 모든 릴리스 콘텐츠에 1~2초 길이의 엔드 카드를 표준화하십시오.",
              "현재 우선순위에 따라 고정된 일정으로 프로필 링크를 교체하십시오.",
              "이름과 이메일을 수집하는 단일의 반복적인 목적지를 추가하여 도달 범위를 리스트로 만드십시오.",
            ],
          },
        },
        {
          id: "cadence-gap",
          title: "창의성이 아닌 게시 빈도가 동료 아티스트와의 관계를 결정짓는 전부입니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "MEOVV는 6월 1일부터 9월 3일까지 약 주 4.5회, 총 60회 게시했으며, 감사 당일에도 게시했습니다. ALLDAY PROJECT는 같은 기간 마지막 72일 동안 단 한 번도 게시하지 않았습니다. MEOVV는 현재 ALLDAY PROJECT의 1.6M 팔로워에 비해 3.2M의 TikTok 팔로워를 보유하고 있으며, 게시물당 참여율은 ALLDAY PROJECT가 더 높습니다.",
          evidence: [
            "MEOVV: 해당 기간 60회 게시, 누적 811회, 2026년 9월 3일 활동.",
            "ALLDAY PROJECT: 같은 기간 마지막 72일 동안 0회 게시.",
            "비교 대상인 7개 계정 모두 2026년 9월 3일에 게시했습니다.",
            "MEOVV는 캡션의 42%에서 멤버를 언급하는 반면, ALLDAY PROJECT는 25%입니다.",
          ],
          counterEvidence: [
            "ALLDAY PROJECT의 10.49% TikTok 참여율은 해당 세트에서 최고 수준이므로, 게시물당 성과는 경쟁력이 있습니다. 격차는 품질이 아닌 빈도에 있습니다.",
          ],
          pivot: {
            title: "최저치를 설정하고 유지하십시오.",
            actions: [
              "릴리스 일정에 관계없이 주당 최소 4회 게시를 유지하십시오.",
              "신곡 발매 여부와 관계없이 콘텐츠 발행 주기를 유지할 수 있도록, 활동 공백기용 포맷 뱅크를 구축합니다.",
              "아이돌 중심의 협업에만 국한하지 않고, 레이블 동료 아티스트처럼 외부 크리에이터 및 트렌드를 활용합니다.",
            ],
          },
        },
        {
          id: "member-pairs",
          title: "멤버 조합은 가장 신뢰할 수 있는 포맷이며 가장 공급이 부족한 형태입니다.",
          verdict: "partial",
          confidence: "중간",
          summary: "두 명 이상의 멤버를 언급한 게시물은 평균 8,744,382건의 조회수를 기록한 반면, 멤버를 언급하지 않은 게시물은 2,923,775건, 단일 멤버 게시물은 1,367,382건을 기록했습니다. 전체 48개 게시물 중 멤버를 언급한 게시물은 12개에 불과합니다. 솔로 콘텐츠는 이중 모드를 보입니다. 해당 계정에서 역대 세 번째로 높은 조회수를 기록한 게시물은 단일 멤버 영상으로 13,133,176건이었으나, 솔로 게시물의 중앙값은 계정 평균보다 훨씬 낮습니다.",
          evidence: [
            "두 명 이상 멤버 언급: 6개 게시물 평균 8,744,382건",
            "한 명의 멤버 언급: 6개 게시물 평균 1,367,382건",
            "멤버 미언급: 36개 게시물 평균 2,923,775건",
            "해당 카탈로그에서 가장 높은 조회수를 기록한 단일 멤버 게시물은 13,133,176건을 기록했습니다.",
          ],
          counterEvidence: [
            "분석 대상은 구성상 최상위 20%에 해당하므로, 이 중앙값은 전체 계정 평균이 아닌 방향성을 나타냅니다. 솔로 콘텐츠의 편차가 크기 때문에 이 증거만으로는 확장을 고려하기보다 테스트가 필요합니다.",
          ],
          pivot: {
            title: "멤버 조합 콘텐츠를 프랜차이즈화하고, 솔로 콘텐츠는 테스트합니다.",
            actions: [
              "멤버 조합을 우연에 맡기지 않고, 고정적인 2인 멤버 포맷을 명명하고 정기적으로 운영합니다.",
              "솔로 콘텐츠는 테스트된 영역으로 간주하고, 다섯 멤버 모두에게 정의된 로테이션을 적용하여 운영합니다.",
              "남녀 혼성 멤버 구성을 의도적으로 활용합니다. 혼성 멤버 조합은 비교 대상 그룹에서는 운영할 수 없는 포맷입니다.",
            ],
          },
        },
        {
          id: "no-us-address",
          title: "분석 대상 콘텐츠 중 미국 시청자를 대상으로 한 것은 없습니다.",
          verdict: "confirmed",
          confidence: "중간",
          summary: "자체 게시물에는 거의 모든 게시물에 한국어 해시태그가 사용되었으며, 영어 문구는 시청자를 대상으로 하기보다는 곡의 가사 일부를 발췌한 것입니다. 비교를 위해 수집된 KATSEYE 게시물 64개를 분석한 결과, 캡션은 100% 영어로 작성되었으며 미국식 표현, 미국 브랜드 파트너, 영어 팬덤명을 사용했습니다. 미국은 384,259명의 청취자를 보유한 1위 리스닝 시장임에도 불구하고, 해당 시장을 위한 콘텐츠는 전혀 제작되지 않았습니다.",
          evidence: [
            "자체 게시물의 캡션에는 분석 대상 게시물의 거의 모든 게시물에 한국어 해시태그가 포함되어 있습니다.",
            "KATSEYE 비교 세트: 64개 게시물 모두 100% 영어 캡션, 한국어 문자 및 해시태그 없음",
            "U.S. is the No. 1 Spotify market at 384,259 listeners and 19.8% of the global total",
            "실제 좋아요 수를 기준으로 측정한 Instagram 참여율에서 미국은 5.7%로 6위를 차지하므로, 미국 청취자들은 콘텐츠 소비(스트리밍)에 비해 상호작용(참여)이 훨씬 적습니다.",
          ],
          counterEvidence: [
            "카탈로그 내에서 가장 미국 시장에 적합한 에셋, 즉 5,374,230건의 미국 댄스 크루 협업과 2,069,143건의 서구권 리믹스는 한국 토종 댄스 콘텐츠를 능가하지 못했습니다. 영어만 추가하는 것은 해결책이 아닙니다. 해결책은 일단 게시물을 올리는 채널을 확보한 후, 그 위에 미국 시장을 위한 레이어를 덧씌우는 것입니다.",
          ],
          pivot: {
            title: "기존 스타일을 대체하지 말고 미국 시장을 위한 레이어를 추가하십시오.",
            actions: [
              "릴리스 에셋에 영어 자막과 영어 온스크린 텍스트를 병렬 레이어로 운영하십시오.",
              "모든 것을 번역하기보다는 소수의 포맷을 미국 시장 맥락에 고정하십시오.",
              "미국 시장 레이어가 활성 채널에 안착할 수 있도록, 기존의 활동 주기가 복원된 후에 이 작업을 진행하십시오.",
            ],
          },
        },
      ],
      footnote: "비디오 인텔리전스 스토어는 영구적이며 새로고침할 때마다 성장하므로, 코퍼스와 그 결과는 재설정되는 대신 참여 전반에 걸쳐 누적됩니다. 비교 코퍼스는 각 계정의 조회수 기준 상위 게시물이며, 구조적으로 승자들의 벤치마크 역할을 합니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      philosophy: "인프라가 존재하는지 여부가 문제가 아닙니다. 존재하며, 일부는 실제로 강력합니다. 문제는 무엇이 무엇과 연결되는가입니다.",
      intro: "2026년 9월 3일, 34개의 자체 운영 표면(자체 레이블 사이트, 스토어 및 해당 페이지 소스, 모든 바이오의 모든 링크, 앱 랜딩 페이지, 멤버십 상품, 5개의 미국 리테일러, 4개의 미국 전문 리테일러, 티켓팅 카테고리, 그리고 모든 6개 릴리스의 저작권 표시)을 개별적으로 점검했습니다. 결과는 표면별로 기록되었습니다. 나타나는 패턴은 일관적입니다. 수집 레이어는 잘 구축되었고 초기에 구축되었지만, 그것과 잠재 고객 간의 전환 레이어는 전혀 구축되지 않았습니다.",
      subBlocks: [
        {
          label: "A",
          title: "이미 구축된 것",
          strategy: "이 그룹은 해당 단계의 대부분의 아티스트보다 더 빠르게 자체 팬 인프라에 투자했으며, 그 결과는 이러한 결정을 입증했습니다. 본 문서의 처방은 구축을 시작하는 것이 아닙니다. 이미 비용을 지불한 것을 연결하는 것입니다.",
          components: {
            heading: "기존 자산",
            items: [
              "공식 팬덤명 DAY ONE은 데뷔 수개월 후가 아닌, 데뷔 전날인 2025년 6월 22일에 발표되었습니다.",
              "자체 레이블 팬 앱 DAY OFF는 2025년 7월 7일에 출시되었으며, 출시 후 24시간 동안 156개국에서 40,000건의 가입을 기록했고 한국 iOS 소셜 네트워킹 부문에서 1위를 차지했습니다.",
              "유료 멤버십 상품은 2025년 11월 24일에 20.83 USD로 출시되었으며, 현재 매진되었습니다.",
              "앱 내 두 번째 유료 계층인 멤버 직접 메시징 서비스는 월 3.99~17.99 USD로 2026년 6월에 추가되었습니다.",
              "미국으로 배송되며 USD로 가격이 책정되고 세 페이지에 걸쳐 30개 이상의 상품을 판매하는 공식 스토어",
              "5개 수입업체를 통한 광범위한 미국 전문 리테일 유통망, 모두 활발하게 재고를 보충 중",
              "YouTube 4.31M, Instagram 1.69M, TikTok 1.63M의 자체 보유 팬층",
            ],
          },
          kpis: [
            "24시간 만에 156개국에서 40,000건의 앱 가입",
            "현재 가격으로 멤버십이 매진되었습니다.",
            "이 오디언스에게 이미 검증된 두 개의 유료 티어",
            "데뷔 전날, 첫 번째 릴리스에 앞서 팬덤 이름 지정",
          ],
        },
        {
          label: "B",
          title: "퍼스트 파티 데이터 수집",
          strategy: "페이지 소스를 포함하여 모든 자체 채널에서 이메일 또는 SMS 수집 여부를 확인했습니다. 아티스트별 목록은 없습니다. 레이블 스토어는 뉴스레터 가입 및 계정 등록을 운영하지만, 둘 다 전체 로스터에 걸쳐 레이블 수준에서 수집되므로 결과 데이터는 이 오디언스에 특정하여 주소 지정이 불가능합니다. 이는 닫는 데 비용이 적게 들고 다른 모든 수정 사항을 제한하기 때문에 문서에서 가장 높은 레버리지 격차입니다.",
          components: {
            heading: "채널별 분석",
            items: [
              "예상 도메인에 독립적인 아티스트 웹사이트가 존재한 적이 없으며, 레이블 사이트에는 아티스트 페이지가 없습니다.",
              "레이블 스토어는 로스터 전체 뉴스레터 가입 및 계정 등록을 운영합니다. 둘 다 아티스트별이 아니며, 페이지 소스에는 제3자 이메일 플랫폼이 나타나지 않습니다.",
              "169만 팔로워의 인스타그램 프로필 링크는 2026년 3월에 게시된 뮤직비디오로 연결됩니다.",
              "431만 구독자를 보유한 YouTube 채널에는 7개의 링크가 있습니다. 6개의 소셜 플랫폼과 1개의 관리형 스마트 링크입니다. 스마트 링크는 스트리밍 서비스로만 연결되므로, 가장 큰 자체 오디언스에게는 스토어, 앱 또는 어떠한 수집 기능도 제공되지 않습니다.",
              "앱 랜딩 페이지는 다운로드 전에 이메일 또는 SMS 수집 없이 스토어 버튼만 제공합니다.",
              "모든 채널에서 SMS 프로그램이 발견되지 않았습니다.",
            ],
          },
          kpis: [
            "확인된 모든 자체 채널에서 아티스트 수준의 이메일 수집이 전혀 없습니다.",
            "SMS 수집 제로",
            "자체 소셜 채널에서 스토어, 앱 또는 어떠한 수집 목적지로도 연결되는 링크가 없습니다.",
            "샘플링된 콘텐츠에서 2026년 3월에 앱 다운로드 프롬프트가 한 번 기록되었으며, 그 이후로는 없습니다.",
          ],
        },
        {
          label: "C",
          title: "라이브 비즈니스 및 멤버십이 제공하는 혜택",
          strategy: "멤버십은 아직 제공할 혜택이 없기 때문에 티켓팅 권한 없이 매진되었습니다. 해당 그룹은 세 개의 독립적인 출처를 통해 확인된 바와 같이, 어떤 시장에서도 티켓팅 콘서트나 단독 쇼케이스의 헤드라이너로 공연한 적이 없습니다. 데뷔 싱글 발매 시기에 홍보 팬 사인회가 진행되었지만, 헤드라인 공연을 위한 장소는 판매되지 않았습니다. 세 개의 제3자 페스티벌 예약이 가을 일정에 잡혀 있지만, 그룹 자체의 공연은 없습니다. 한편, 레이블은 동일한 스토어프론트에서 다른 아티스트를 위해 운영 중인 직접 티켓 판매 카테고리를 보유하고 있으므로, 시스템은 존재하지만 이쪽으로 연결된 적이 없을 뿐입니다.",
          components: {
            heading: "현재 상황",
            items: [
              "현재까지 어떠한 시장에서도 헤드라인 티켓 콘서트나 단독 쇼케이스를 진행한 바 없음",
              "2026년 가을 일정에는 세 건의 제3자 예약이 포함되어 있으며, 9월에는 음악 시상식, 10월에는 두 개의 페스티벌이 예정되어 있음",
              "현재까지 두 차례 미국에 출연했으며, 모두 같은 장소에서 공동 출연한 페스티벌 무대였음",
              "레이블 스토어프론트에는 현재 운영 중인 직접 예약 카테고리가 있으며, 현재 다른 아티스트의 앨범 전시회를 위한 14개의 시간 지정 입장 슬롯이 있으나 본 그룹을 위한 슬롯은 없음",
              "데뷔 14개월이 지났음에도 불구하고 응원봉이 출시되거나 발표되지 않았으며, 같은 스토어에서 세 명의 레이블메이트는 응원봉을 판매 중임",
              "일본 데뷔, 쇼케이스 또는 일본어 릴리스 없음",
            ],
          },
          kpis: [
            "매진된 멤버십은 현재 첫 헤드라인 공연장과 첫 응원봉이라는 두 가지 상품에 연결할 수 있는 것이 없음",
            "직접 예약 시스템은 이미 레이블 차원에서 존재하며, 구축이 아닌 확장이 필요함",
            "현재까지 두 차례 미국에 출연했으며, 모두 공동 출연 페스티벌 무대였음",
          ],
        },
        {
          label: "D",
          title: "미국 시장 구조 및 리테일",
          strategy: "미국은 본 그룹의 최상위 청취 시장이며, 전적으로 수입 채널을 통해 서비스되고 있습니다. 실물 음반은 다섯 개의 전문 수입업체와 일반 마켓플레이스 리스팅을 통해 미국 구매자에게 전달되며, 맞춤형 미국 리테일 프로그램, 독점 에디션, 미국 팝업 스토어는 없습니다. 구조적인 측면도 마찬가지입니다. 유통은 레이블 자체 스마트 링크 및 유통망을 통해 미국으로 이루어지지만, 여섯 개 릴리스 모두의 저작권 표시는 레이블 단독으로 되어 있으며, 레이블메이트들은 릴리스에 명시된 미국 레이블 서비스 파트너를 포함하고 있습니다.",
          components: {
            heading: "조사 결과",
            items: [
              "미국 대중 리테일: 수입업체를 통해 두 개의 일반 마켓플레이스에 입점; 레이블메이트가 세 개의 리테일 독점 에디션을 판매하는 두 개의 전문 음악 리테일러에는 입점하지 않음",
              "카탈로그 어디에도 미국 독점 버전, 리테일러 독점, 또는 사인 에디션 없음",
              "현재까지 세 차례 팝업 행사가 실행되었으며, 서울 두 차례, 도쿄 한 차례입니다. 미국에서는 없음",
              "여섯 개 릴리스 모두의 저작권 표시는 레이블만 명시되어 있습니다. 미국으로의 유통은 레이블의 기존 체인을 통해 이루어지지만, 어떠한 릴리스에도 미국 레이블 서비스 파트너가 명시되어 있지 않으며, 레이블메이트들은 Capitol, Atlantic, Interscope를 포함하고 있습니다.",
              "미국 예약 에이전트, 홍보 담당자, 또는 매니지먼트 구조가 확인되지 않음",
              "미국 라디오, 싱크 플레이스먼트, 또는 TV 출연 기록 없음",
            ],
          },
          kpis: [
            "수입 채널만으로 384,259명의 미국 월간 리스너에게 서비스됨",
            "단일 리테일러에서 레이블메이트의 세 가지 독점 상품과 비교하여 미국 리테일 독점 상품 제로",
            "아시아에서 실행된 3건에 비해 미국 팝업 0건",
            "레이블의 미국 내 인지도는 사상 최고치를 기록하고 있으나, 명명된 미국 서비스 파트너의 형태로 이 그룹에 아직 확장되지 않았습니다.",
          ],
        },
      ],
      footnote: "2026년 9월 3일에 34개의 플랫폼을 개별적으로 확인하고 플랫폼별로 기록했습니다. 플랫폼에 도달할 수 없는 경우, 추론 대신 '확인 불가'로 기록됩니다. 5개의 플랫폼은 확인되지 않아 위의 모든 주장에서 제외됩니다.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "철학",
      title: "핵심 전략 및 철학",
      thesis: "이 비즈니스에서 가장 어려운 일은 이미 완료되었습니다. 이 팬덤은 동급 최고 전환율을 보이며, 시장에 제품이 없는 상태에서도 9개월 동안 계속 성장했습니다. 이 계획은 음악이나 정체성의 변화를 요구하지 않습니다. 기존 채널을 재가동하고, 이미 존재하는 인프라를 연결하며, 매진된 멤버십에 게이트 역할을 부여하고, 이를 모두 지도상에서 이미 1위인 시장으로 향하게 합니다.",
      hierarchy: [
        {
          label: "채널 재시작 (기반, 즉시)",
          description: "이 문서에서 가장 저렴하고 빠른 레버입니다. 주간 고정 일정, 이미 최고 순위를 기록하고 있는 코퍼스 포맷 믹스, 모든 릴리스 에셋에 대한 반복적인 행동 촉구. 이는 새로운 전략이나 새로운 제작 예산을 요구하지 않으며, 지연되는 매주마다 경쟁 그룹이 복리 효과를 누리는 주가 됩니다.",
        },
        {
          label: "전환 인프라 (기반, 상시)",
          description: "수집 계층을 팬덤과 연결합니다: 미국 내 퍼스트 파티 이메일 및 SMS 수집, 모든 소유 채널에 걸친 라이브 링크 그래프, 가장 큰 팬덤을 보유한 플랫폼에서 연결되는 앱. 이는 곡과 무관합니다. 다음 컴백, 첫 투어, 그리고 이후의 모든 릴리스를 지원합니다.",
        },
        {
          label: "DSP 복구 (증폭기)",
          description: "카탈로그가 이전에 보유했던 편집 영향력을 재구축하고, 비정상적인 최고 순위를 기록했던 K-pop 외 노출을 포함하며, 론칭 곡선에서 누락된 것으로 나타난 2주차부터 6주차까지의 지속 메커니즘을 구축합니다. 이곳에서 리스너 수가 다시 돌아옵니다.",
        },
        {
          label: "라이브 비즈니스 및 미국 구조 (증폭기, 최고 천장)",
          description: "첫 헤드라인 순간, 응원봉, 사전 판매를 게이트하는 멤버십, 그리고 이 세 가지를 모두 지원하는 미국 구조. 이는 아직 천장이 설정되지 않은 계층이며, 팬덤이 기꺼이 비용을 지불할 것임을 이미 증명한 계층입니다.",
        },
      ],
      messaging: [
        "처방 전 감사: 08항부터 11항까지의 모든 권장 사항은 02항부터 06항까지의 측정된 격차로 추적됩니다.",
        "먼저 재시작하고, 두 번째로 재구축합니다. 일정은 그 이후의 모든 것의 전제 조건입니다.",
        "구축하기 전에 연결합니다. 이 계획에 필요한 대부분은 이미 비용이 지불되었고 준비되어 있습니다.",
        "미국은 미래의 확장 시장이 아니라 이미 1위 시장으로서 홍보됩니다.",
        "모든 라인은 최악, 예상, 최상의 경우를 담고 있으며, 모든 전술은 확장 전에 테스트됩니다.",
      ],
      footnote: "기반 워크스트림은 릴리스 일정에 관계없이 매주 실행됩니다. 증폭기 강도는 릴리스 및 라이브 일정에 따릅니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fan Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "전환",
      title: "버티컬 1 / 팬 전환 인프라",
      philosophy: "새로운 것을 구축하기 전에 이미 존재하는 레이어를 연결하십시오.",
      intro: "섹션 06은 강력한 수집 레이어를 발견했지만, 이와 청중 간의 연결이 없었습니다. 본 버티컬은 해당 격차를 해소합니다. 이는 본 계획에서 가장 비용 효율적인 작업이며, 릴리스 일정에 관계없이 매주 실행되며, 이후 모든 버티컬은 본 버티컬이 제자리에 있는 것에 의존합니다.",
      subBlocks: [
        {
          label: "A",
          title: "미국 내 퍼스트 파티 캡처",
          objective: "현재 존재하지 않는 그룹의 최대 청취 시장을 위한 주소 지정 가능한 자체 리스트를 구축하십시오.",
          strategy: "실질적인 인센티브에 대해 이메일과 휴대폰 번호를 수집한 후, 기존 앱과 경쟁하기보다는 앱으로 라우팅하는 단일 미국 목적지입니다. 한국의 동의 법규는 번들 가입을 제한하므로, 미국 리스트는 국내 흐름의 확장이 아닌 자체 규정 준수 프로그램으로 구축됩니다. 한국 번호에서 실패하는 이중 동의 흐름은 처음부터 SMS 프로그램을 미국 번호로 범위 지정하여 피합니다.",
          components: {
            heading: "구축",
            items: [
              "이메일 및 SMS를 포함한 미국 캡처 목적지로, 절대 변경되지 않는 안정적인 URL에서 라이브로 제공",
              "청중이 이미 원한다고 입증한 것에 연결된 인센티브: 사전 판매 액세스, 드롭 알림, 실물 제품 우선 확인",
              "캡처 후 DAY OFF 앱으로 라우팅하여 앱 설치를 늘리고 리스트를 자체 소유로 유지",
              "미국 번호로 범위 지정된 동의 및 선호도 처리, 국내 흐름과 분리하여 유지",
              "첫 주부터 리스트 성장, 소스 기여도, 다운스트림 전환에 대한 보고",
            ],
          },
          kpis: [
            "현재 기준선이 제로인 측정 가능한 자체 미국 리스트",
            "채널 및 캠페인별로 추적되는 천 명당 도달률당 캡처율",
            "캡처 흐름에서의 앱 설치 기여도",
            "첫 번째 플라이트에서 벤치마크로 설정된 캡처된 연락처당 비용",
          ],
        },
        {
          label: "B",
          title: "링크 그래프",
          objective: "모든 자체 표면이 측정 가능한 곳으로 라우팅되도록 하십시오.",
          strategy: "관리되는 스마트 링크가 이미 존재하며 YouTube 채널에 있지만, 스트리밍 서비스로만 라우팅되며, 1.69M 팔로워의 Instagram 바이오는 몇 달 된 뮤직 비디오를 가리킵니다. 작업은 허브를 구축하는 것이 아닙니다. 기존 허브를 스토어, 앱 및 캡처 목적지도 포함하도록 재지정하고, 트래픽을 읽을 수 있도록 계측하는 것입니다. 제작 예산이 없으며, 채널 액세스 이상의 승인이 필요 없습니다.",
          components: {
            heading: "실행",
            items: [
              "기존 관리형 스마트 링크는 스트리밍을 넘어 스토어, 앱, 캡처 대상까지 확장되었으며, 모든 바이오에 배포되고 고정된 일정에 따라 업데이트되었습니다.",
              "YouTube 링크 패널을 재구축하여 가장 큰 자체 보유 오디언스에게 여섯 개 이상의 소셜 플랫폼을 제공합니다.",
              "스토어, 멤버십, 앱은 서로에게서만 나오는 것이 아니라 가장 큰 오디언스를 보유한 채널에서 노출됩니다.",
              "릴리스 에셋에 제목과 날짜를 포함하는 반복적인 엔드 카드를 1~2초로 표준화합니다.",
              "첫 번째 링크부터 UTM 및 기여도 관리를 적용하여 트래픽을 가독성 있게 만듭니다.",
            ],
          },
          kpis: [
            "각 자체 채널에서 자체 대상으로의 클릭률, 현재 측정 불가",
            "릴리스 에셋에 대한 행동 유도 문구가 포함된 게시물 비율을 현재 10%에서 지속적인 다수로 높입니다.",
            "소셜에서 스토어 및 앱으로의 트래픽, 출처별 기여도 분석",
          ],
        },
        {
          label: "C",
          title: "멤버십, 상품 및 제공 혜택",
          objective: "매진된 멤버십에 갱신 이유와 다음 단계로 나아갈 기회를 제공합니다.",
          strategy: "권한이 부여되지 않은 채 매진된 멤버십은 완성된 제품이 아닌 수요 신호입니다. 이제는 오디언스가 기꺼이 비용을 지불할 의사가 있음을 보여준 가치를 부여하고, 카탈로그에서 가장 눈에 띄는 단일 제품 공백을 메우는 작업이 필요합니다.",
          components: {
            heading: "프로그램",
            items: [
              "멤버십에 사전 판매 혜택을 부여하며, 라이브 날짜가 확정되는 즉시 활성화됩니다.",
              "이 그룹은 아직 보유하지 못했지만 세 명의 레이블 동료는 보유하고 있는 표준 팬덤 상품인 응원봉 프로그램을 도입합니다.",
              "공개된 멤버십 기간 및 갱신 경로를 통해 단일 판매가 아닌 제품 수명 주기를 갖도록 합니다.",
              "무작위가 아닌 릴리스 및 라이브 순간에 맞춰진 회원 전용 상품 출시",
              "미국 내 오디언스 점유율 대비 미국 배송 및 가격 검토",
            ],
          },
          kpis: [
            "멤버십 갱신율, 현재 미확립",
            "멤버십과 실물 상품 간의 결합률",
            "멤버십, 다이렉트 메시징 티어 및 상품 전반에 걸친 멤버별 수익",
          ],
        },
      ],
      footnote: "이 버티컬은 지속적으로 운영되며 릴리스 기간에 구속되지 않습니다. 이는 09항부터 11항까지의 유료, DSP 및 라이브 활동의 전제 조건입니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / Short-Form Restart
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "숏폼",
      title: "버티컬 2 / 숏폼 재개",
      philosophy: "코퍼스가 이미 가장 높은 순위를 기록한 포맷으로 재개합니다. 프로덕션 전 재할당.",
      intro: "05항은 비교 세트 상단에서 10.49%의 TikTok 참여율을 측정했으며 72일 동안 게시물이 없었습니다. 게시물당 제품은 경쟁력이 있습니다. 격차는 빈도와 할당이며, 둘 다 새로운 크리에이티브 방향이나 추가 프로덕션 지출 없이 수정 가능합니다.",
      subBlocks: [
        {
          label: "A",
          title: "게시 주기 최저선",
          objective: "신곡 유무에 관계없이 유지되는 주간 게시 리듬으로 복귀합니다.",
          strategy: "모든 비교 계정은 감사 당일에 게시되었으며, 주당 2.5회에서 21회까지의 게시 주기를 보였습니다. 첫 번째 단계는 비활동 기간 동안 유지되는 최저선이며, 이는 활동 기간 사이의 사용을 위해 구축된 포맷 뱅크에서 제공됩니다.",
          components: {
            heading: "구축",
            items: [
              "릴리스 일정에 관계없이 주당 최소 4회 게시 유지",
              "활동 기간 사이의 포맷 뱅크를 통해 컴백 시장 출시 여부에 게시 주기가 영향을 받지 않도록 합니다.",
              "새로운 방향보다는 코퍼스가 이미 가장 높은 순위를 기록한 분야에 가중치를 둔 초기 믹스",
              "가장 높은 중앙값을 반환하고 현재 가장 공급이 부족한 포맷인 명명된 2인조 페어링 프랜차이즈",
              "현재 증거에 기반한 확장이 아닌 실험으로 운영되는 5명 전 멤버의 테스트된 솔로 로테이션",
            ],
          },
          kpis: [
            "주당 게시물 수, 0회부터 지속적인 4회 이상",
            "계정 자체의 일시 중단 이전 기준선 대비 게시물당 중앙값 조회수",
            "현재 10.49% 이상으로 유지되는 참여율",
            "명명된 멤버가 포함된 콘텐츠의 비율, 25% 이상",
          ],
        },
        {
          label: "B",
          title: "플랫폼 재할당",
          objective: "가장 적은 대상이 아닌 가장 큰 자체 보유 오디언스에게 가장 많이 제공합니다.",
          strategy: "Instagram은 21개의 페어링된 게시물 중 18개에서 1.47배의 중앙값을 기록했으며, YouTube Shorts는 2.6배의 TikTok 팔로워를 보유한 채널에서 0.27배의 수익을 올렸습니다. 재할당은 이미 존재하는 도달 범위를 포착하며 추가적인 제작이 필요하지 않습니다.",
          components: {
            heading: "실행",
            items: [
              "Instagram은 미러 피드가 아닌 자체 게시 결정에 따라 주요 플랫폼으로 관리되었습니다.",
              "해당 채널의 구독자 기반을 위해 구축된 YouTube Shorts 형식 테스트로, 규모 확장 결정 전에 60일 동안 측정되었습니다.",
              "플랫폼을 넘나들지 못했던 백 카탈로그의 히트작들을 해당 콘텐츠를 접하지 못했던 플랫폼으로 전달했습니다.",
              "리듬이 복원된 후에는 하우스 스타일에 추가되는 미국 대상 콘텐츠 레이어로, 대체하는 것이 아니라 추가하는 것입니다.",
            ],
          },
          kpis: [
            "Instagram 대 TikTok 성과 비율, 페어링된 게시물당 추적",
            "자체 기준선 0.27배 대비 YouTube Shorts 중앙값",
            "기존 재고의 교차 게시를 통해 회수된 도달 범위, 제작 비용 제로",
          ],
        },
        {
          label: "C",
          title: "유료 소셜, 미국 플라이트",
          objective: "유기적 데이터가 이미 효과가 있다고 식별한 콘텐츠에 측정된 지출을 투입하십시오.",
          strategy: "유료 캠페인은 리듬이 복원되고 캡처가 활성화된 후에만 실행되므로, 지출은 활성 채널에 도달하여 단순히 조회수뿐만 아니라 자체 보유 목록으로 전환됩니다. 타겟팅은 미국 가중치가 적용된 Instagram 잠재고객 프로필에 맞춰집니다. 모든 라인은 규모 확장 전에 저비용으로 테스트되며, 최악, 예상, 최상의 시나리오가 사전에 명시됩니다.",
          components: {
            heading: "프로그램",
            items: [
              "첫 번째 플라이트에서는 목적에 맞게 제작된 광고가 아닌, 검증된 유기적 성과를 낸 크리에이티브를 활용했습니다.",
              "Instagram 잠재고객 프로필 기반 타겟팅: 미국 주요 도시, 25-34세 중심, 성별 균형",
              "동남아시아 및 라틴 아메리카를 위한 TikTok 프로필 기반의 두 번째 잠재고객, 별도 운영",
              "프로필 방문이 아닌 캡처 대상으로 지정된 전환 목표",
              "모든 라인에 대해 테스트 후 규모 확장 원칙을 적용하며, 사전 명시된 사례 대비 결과 보고",
            ],
          },
          kpis: [
            "캡처된 연락처당 비용",
            "시장 및 크리에이티브별 도달 1천명당 비용",
            "유료 캠페인에 기인한 팔로워 및 목록 성장, 유기적 성장과 분리",
          ],
        },
      ],
      footnote: "이 수직적 분야의 유료 활동은 의도적으로 리듬 기준선과 캡처 대상이 활성화된 후에 순차적으로 진행됩니다. 비활성 채널에 지출하는 것은 이 섹션이 피하고자 하는 유일한 것입니다.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Recovery
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "세로 3 / DSP 회복",
      philosophy: "에디토리얼 영향력은 이미 확보된 바 있습니다. 이를 재건하는 것은 추측이 아닌, 알려진 경로입니다.",
      intro: "섹션 03은 2026년 3월 기준 12.45M의 에디토리얼 도달 범위를 기록했으나 현재는 146,625에 불과하며, 출시 곡선은 4일 이내에 정점을 찍고 더 이상 확대되지 않습니다. 이는 두 가지 다른 문제이며 각각 다른 해결책이 필요하지만, 현재 카탈로그로 모두 해결 가능합니다.",
      subBlocks: [
        {
          label: "A",
          title: "에디토리얼 재건",
          objective: "카탈로그가 이미 보유할 수 있음을 입증한 플레이스먼트를 회복하십시오.",
          strategy: "42개의 에디토리얼 플레이리스트가 이 카탈로그를 지원했으며, 여기에는 2026년 3월 기준 최대 1위 및 3위의 플래그십 K-pop 리스트가 포함되어 27개가 동시에 활성화되었습니다. 현재는 5개가 활성화되어 있습니다. 플레이스먼트가 열망이 아닌 선례이며, 리텐션 데이터가 에디토리얼에 재추가할 이유를 제공하기 때문에 피치 케이스는 이례적으로 강력합니다.",
          components: {
            heading: "프로그램",
            items: [
              "카탈로그가 이전에 보유했던 플래그십 리스트를 대상으로 한 구조화된 피치 주기",
              "모든 피치에서 리텐션 데이터가 주도했습니다: 카탈로그는 프로모션 없이도 주당 약 1.60M의 스트림을 유지합니다.",
              "프로모션 싱글 대신 우선순위 트랙으로 포지셔닝된 앨범 커트가 피크의 15.1%를 차지",
              "플레이리스트 성과를 주간 단위로 추적하여 추가 및 삭제를 늦게 발견하는 대신 가시화합니다.",
            ],
          },
          kpis: [
            "라이브 에디토리얼 도달 범위, 146,625에서 2026년 3월에 기록된 12.45M으로",
            "에디토리얼 플레이리스트 수, 현재 5개에서 2026년 3월 최고치인 27개로",
            "에디토리얼 플레이스먼트에 기인하는 주간 스트림 점유율",
          ],
        },
        {
          label: "B",
          title: "비(非) K-Pop 에디토리얼 확장",
          objective: "카탈로그의 가장 강력한 최고 순위를 제공했던 크로스오버 경로를 재개하십시오.",
          strategy: "역사적 에디토리얼 도달 범위 약 1.4M이 K-pop 섹션을 벗어나 팝 무드 리스트, 힙합 및 R&B 세로, 일반 팝 리스트 및 게이밍 세로에 있었습니다. 해당 플레이스먼트는 K-pop 플레이스먼트의 대부분보다 나은 5, 6, 8, 9, 18위의 최고 순위를 기록했습니다. 이 경로는 입증되었으며 현재 사용되지 않고 있습니다.",
          components: {
            heading: "목표",
            items: [
              "팝 및 무드 리스트, 카탈로그가 이전에 6위로 최고 순위를 기록했던 곳",
              "힙합 및 R&B 세로, 딥컷이 이전에 18위로 최고 순위를 기록했던 곳",
              "게이밍 세로, 음악 발견 영역 밖에 있는 완전히 새로운 잠재고객에게 도달",
              "이전 카탈로그를 보유했던 8개 지역 전반의 New Music Friday",
              "장르 범주가 아닌 그룹의 프로덕션 정체성에 기반한 에디토리얼 프레이밍",
            ],
          },
          kpis: [
            "현재 라이브 플레이스먼트 1건을 기준으로 비K-pop 플레이스먼트 확보",
            "이전에 크로스오버 플레이스먼트가 이루어졌던 시장에서의 리스너 성장",
            "비장르 리스트에서의 최고 순위 달성",
          ],
        },
        {
          label: "C",
          title: "출시 후 지속",
          objective: "출시 4일 이후에도 신곡이 발견될 수 있는 기간 연장",
          strategy: "현재까지 모든 릴리스는 2일차에서 4일차 사이에 최고점을 찍고 안정화됩니다. 비교 대상 아티스트들은 2주차부터 9주차 사이에 최고점을 찍고 1.9배에서 3.4배까지 증가합니다. 그 차이는 2주차부터 시작되는 지속 레이어인데, 이 그룹은 어떤 릴리스에서도 아직 이를 운영하지 않았습니다.",
          components: {
            heading: "메커니즘",
            items: [
              "모든 릴리스 출시 전에 확정되는 2주차부터 6주차까지의 콘텐츠 및 유료 지속 계획",
              "주당 484,056회의 스트리밍을 기록하는 스테디셀러 데뷔 트랙을 활용한 릴리스 관련 카탈로그 활성화",
              "소유 리스트가 생성되면 해당 리스트를 대상으로 사전 저장 및 사전 추가 프로그램 실행",
              "라이브 및 리테일 일정과 릴리스 시점을 조율하여 세 가지가 경쟁하기보다는 서로 강화되도록 함",
            ],
          },
          kpis: [
            "현재 최고치인 1.21배에서 클래스 범위로의 최고 주차 대비 출시 주차 배수",
            "현재 하락 추세에 대한 릴리스당 차트 주차",
            "11월 컴백이 달성한 +42.0%를 기준으로 릴리스 후 2주간의 카탈로그 상승률",
          ],
        },
      ],
      footnote: "본 계획에서는 스트리밍 결과가 보장되지 않습니다. 이 세로 항목의 모든 라인은 실행 전에 최악, 예상, 최상의 시나리오가 명시된 테스트 프로그램으로 범위가 지정됩니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / Live Business & U.S. Structure
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "라이브 & 미국",
      title: "세로 4 / 라이브 비즈니스 & 미국 구조",
      philosophy: "아직 상한선이 설정되지 않은 레이어로, 이미 1위인 시장에 서비스를 제공합니다.",
      intro: "본 문건에서 가장 높은 잠재력을 지녔으나 가장 탐구되지 않은 영역입니다. 해당 그룹은 단독 헤드라이너 공연 경험이 전무하며, 가장 큰 리스닝 시장은 체계적인 지원이 부재한 상황입니다. 또한 팬덤은 이미 유료 접근권을 구매할 의사가 있음을 입증했습니다. 이는 추측성 수요가 아닌, 어떠한 권리도 부여되지 않은 멤버십을 구매한 팬층의 행동입니다.",
      subBlocks: [
        {
          label: "A",
          title: "첫 헤드라이너 공연",
          objective: "야심이 아닌 검증된 수요에 맞춰 규모를 책정한 그룹 자체 라이브 상품을 구축합니다.",
          strategy: "The first headline moment is deliberately scoped small and sold out rather than large and papered, and it goes where demand is already demonstrable. Engagement data puts that in Asia: Taiwan drives 22.4% of Instagram like volume, with Hong Kong, Taipei and Seoul the top three cities, while the United States sits sixth on the same measure. Seoul and Taipei are therefore the low-risk first rooms. The United States is the streaming, retail and paid priority in parallel, and earns its own room once the owned list built in section 08 produces real ticket-demand data rather than an inference. Festival slots continue as reach; they are not a substitute for an owned room.",
          components: {
            heading: "순서",
            items: [
              "참여 데이터가 이미 수요를 입증하고 있는 두 시장, 서울 또는 타이베이에서의 첫 헤드라이너 공연",
              "멤버십이 최초로 갖는 혜택으로서의 멤버십 선예매, 그리고 매진된 멤버십의 가치를 가장 명확하게 시험할 수 있는 기회",
              "모든 티켓 거래에서 실행되는 정보 수집을 통해 라이브 관객을 자체 리스트로 확보합니다.",
              "리스트가 확보된 후, 팔로워 패널 추정치가 아닌 해당 자체 리스트를 기반으로 규모를 책정한 미국 공연",
              "기존 가을 페스티벌 예약은 라이브 계획으로 간주하기보다 자체 공연 홍보 수단으로 활용합니다.",
            ],
          },
          kpis: [
            "첫 자체 공연의 판매율 및 매진 소요 시간",
            "멤버 대상 선예매 전환율",
            "티켓 판매당 확보된 연락처 수",
            "티켓 구매자 데이터를 기반으로 한 지역별 수요 지도, 이는 미국 투어 계획의 근거로서 패널 추정치를 대체합니다.",
          ],
        },
        {
          label: "B",
          title: "미국 리테일 및 실물 앨범",
          objective: "250,071장의 첫 주 판매량을 미국 리테일 프로그램으로 전환합니다.",
          strategy: "실물 앨범은 이 그룹의 입증된 강점이며, 데뷔 초 업계 논평에서 갖지 못할 것이라고 예측했던 부분입니다. 현재 미국 구매자에게는 수입 업체를 통해서만 도달하고 있습니다. 독점 에디션이 포함된 전담 미국 리테일 프로그램은 해당 그룹이 입점하지 않은 리테일러에서 이미 레이블메이트가 성공적으로 운영 중인 표준적이고 저위험 전략입니다.",
          components: {
            heading: "프로그램",
            items: [
              "현재 카탈로그가 입점하지 않은 두 음반 리테일러에서의 전담 미국 리테일 입점",
              "현재 카탈로그에 없는 미국 독점 및 사인 에디션",
              "아시아에서 이미 세 차례 실행된 모델을 따라 리테일 프로그램과 시기를 맞춰 진행하는 첫 미국 팝업 스토어",
              "사전 예약 프로그램은 자체 보유 리스트를 대상으로 진행되며, 구매 시점에 포착됩니다.",
            ],
          },
          kpis: [
            "현재 수입 채널만을 기반으로 하던 것에서 벗어나, 미국 내 소매 유통망을 확보했습니다.",
            "자체 보유 리스트에서 발생한 사전 예약 물량",
            "첫 주 미국 내 실물 앨범 판매 점유율 (현재 측정 불가)",
          ],
        },
        {
          label: "C",
          title: "언론 홍보 및 스토리텔링",
          objective: "이례적으로 강력한 수상 기록을 미국 내 언론 보도로 전환합니다.",
          strategy: "수상 기록은 상당하지만, 미국 내 언론 노출은 미미합니다. 현재 통용되는 스토리는 포맷 스토리입니다: 8년 만의 첫 본격적인 혼성 그룹으로, 성별 균형이 잘 잡힌 팬덤을 보유하고 있으며, 포맷 예측치를 뛰어넘는 실물 앨범 판매량을 기록하고 있습니다. 이는 미국 시장에서 자연스러운 흥미를 유발할 수 있는 이야기이며, 아직 그곳에서 다뤄지지 않았습니다.",
          components: {
            heading: "접근 방식",
            items: [
              "비교 대상 그룹에 비해 여성 팬 비중이 현저히 낮은 팬덤을 기반으로 한 혼성 그룹 포맷 스토리",
              "포맷 예측치 대비 실물 앨범 판매 결과, 구체적이고 검증 가능한 반박 스토리",
              "프로덕션 정체성 및 현재 역대 최고치를 기록 중인 레이블의 미국 내 인지도",
              "미국 내 음악 및 문화 분야의 장기 기획 보도를 지속적으로 진행하기보다, 유통 및 라이브 일정에 맞춰 진행",
            ],
          },
          kpis: [
            "미국 내 최상위 및 차상위 매체 노출 확보",
            "출시 요약 보도보다 포맷 스토리를 다루는 보도 점유율",
            "각 매체 노출에 따른 미국 내 검색량 및 소셜 미디어 반응 증대",
          ],
        },
      ],
      footnote: "라이브 공연 규모는 의도적으로 보수적으로 책정됩니다. 첫 공연장은 검증된 수요에 맞춰 매진될 수 있도록 규모를 정하며, 이후 모든 공연 일정 결정은 이전 공연장의 데이터를 기반으로 이루어집니다.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 업무 흐름",
      philosophy: "명확한 업무 분담. Crowd Control Digital은 A&R, 아티스트 관계, 또는 크리에이티브 디렉션 업무를 담당하지 않습니다.",
      intro: "아래 업무 흐름은 레이블 및 파트너사와 함께 진행됩니다. 이는 08항부터 11항까지의 계획이 해당 업무 흐름에 의존하며, 순서가 중요하기 때문에 명시된 것이지 Crowd Control Digital의 업무 범위에 포함되기 때문은 아닙니다.",
      subBlocks: [
        {
          label: "A",
          title: "발매 일정",
          strategy: "본 문서의 모든 내용은 발매를 기준으로 더 나은 성과를 보입니다. 소비 데이터는 명확합니다: 제대로 된 컴백은 기존 카탈로그를 42.0% 상승시켰고, 브랜드 지원 싱글은 -9.8%를 기록했습니다. 현재 가능한 가장 가치 있는 결정은 확정된 발매일이며, 이는 기반 작업을 유지보수에서 출시로 전환시키기 때문입니다.",
          components: {
            heading: "레이블 보유",
            items: [
              "차기 에라의 발매일 및 캠페인 범위",
              "트랙 선정 (03절의 잔존율 데이터 활용)",
              "에셋 전달 기간 (13절의 타임라인 설정)",
            ],
          },
        },
        {
          label: "B",
          title: "팬 플랫폼 및 상품",
          strategy: "앱, 멤버십 및 상품 라인은 레이블 소유이며 이미 운영 중입니다. 08절의 작업은 이를 대체하기보다는 연결하는 역할을 합니다.",
          components: {
            heading: "레이블 보유",
            items: [
              "앱 로드맵 및 멤버십 등급 구조",
              "응원봉 개발 및 생산 타임라인",
              "상품 범위, 가격 책정 및 해외 이행",
            ],
          },
        },
        {
          label: "C",
          title: "브랜드 파트너십",
          strategy: "기존 파트너 명단은 상당하며, 특히 7.2배 지수로 나타나는 명품 선호도를 고려할 때, 잠재 고객 데이터는 확장을 지지합니다. 05절은 파트너 콘텐츠가 주요 발매 문법을 통하지 않고 자체적인 스트림으로 운영될 것을 권고합니다.",
          components: {
            heading: "레이블 및 Transparent Arts 보유",
            items: [
              "파트너 선정, 협상 및 계약",
              "캠페인 크리에이티브 디렉션 및 승인",
              "미국 브랜드 소개 (Transparent Arts가 관계 보유)",
            ],
          },
        },
        {
          label: "D",
          title: "미국 구조 및 관계",
          strategy: "Transparent Arts는 미국 내 매니지먼트, 홍보 및 관계 인프라를 보유합니다. Crowd Control Digital은 퍼포먼스 마케팅, 측정 및 지출 규율을 제공합니다. 두 주체는 상호 보완적이며 중복되는 부분이 없습니다.",
          components: {
            heading: "Transparent Arts 보유",
            items: [
              "미국 현지 매니지먼트 및 현장 지원",
              "미국 언론 관계 구축 및 장기 홍보",
              "라이브 공연 부킹, 공연장 관계 구축 및 프로모터 소개",
              "미국 음반 발매를 위한 유통사 관계 구축",
            ],
          },
        },
      ],
      footnote: "Crowd Control Digital은 A&R 업무를 수행하지 않으며 창의적인 방향을 지시하지 않습니다. 상기 부서는 파트너십이 기존 계약에 따라 운영되는 방식을 반영합니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "12주간의 오프닝 기간입니다. 채널 재개 및 수집 대상 확보가 우선시되는 의도적인 순서이며, 이는 모든 후속 작업이 활성 채널 및 자체 보유 리스트에서 더 잘 작동하기 때문입니다. 유료 광고는 비활성 피드로 진행되지 않습니다. 라이브 규모 산정은 실제 수요 데이터를 기다립니다. 주차는 잠정적이며, 확정된 발매일이 정해지면 해당 날짜를 기준으로 재조정됩니다.",
      weeks: [
        { index: 1, label: "W1", dates: "9월 14일" },
        { index: 2, label: "W2", dates: "9월 21일" },
        { index: 3, label: "W3", dates: "9월 28일" },
        { index: 4, label: "W4", dates: "10월 5일" },
        { index: 5, label: "W5", dates: "10월 12일" },
        { index: 6, label: "W6", dates: "10월 19일", highlight: true, note: "중간 검토" },
        { index: 7, label: "W7", dates: "10월 26일" },
        { index: 8, label: "W8", dates: "11월 2일" },
        { index: 9, label: "W9", dates: "11월 9일" },
        { index: 10, label: "W10", dates: "11월 16일" },
        { index: 11, label: "W11", dates: "11월 23일", highlight: true, note: "FIRST HEADLINE ROOM (TBD)" },
        { index: 12, label: "W12", dates: "11월 30일" },
      ],
      workstreams: [
        {
          name: "채널 재시작",
          cells: [
            { weekIndex: 1, intensity: "high", label: "RESTART" },
            { weekIndex: 2, intensity: "high", label: "FLOOR" },
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
          name: "전환 레이어",
          cells: [
            { weekIndex: 1, intensity: "high", label: "WIRE" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "high", label: "LIVE" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "유료 소셜",
          cells: [
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 4, intensity: "medium", label: "TEST" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "SCALE" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "DSP 회복",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "PITCH" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high", label: "ADDS" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "라이브 및 리테일",
          cells: [
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "SIZING" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high", label: "PRESALE" },
            { weekIndex: 8, intensity: "high", label: "ONSALE" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "RETAIL" },
            { weekIndex: 11, intensity: "high", label: "SHOW" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "언론 홍보",
          cells: [
            { weekIndex: 6, intensity: "low" },
            { weekIndex: 7, intensity: "medium", label: "LONG" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "PUSH" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "재시작 및 재정비",
          items: [
            "약속된 주간 최소치를 기준으로 세 개의 모든 자체 채널에 게시물을 올립니다.",
            "링크 그래프 재구축: 모든 채널에서 프로필, YouTube 채널 링크, 스토어 및 앱을 노출합니다.",
            "트래픽이 발생하기 전에 기여도 및 UTM 규율을 적용합니다.",
            "본 계획이 평가될 모든 지표에 대한 기준선 측정을 확보합니다.",
          ],
        },
        {
          weekIndex: 2,
          title: "캡처 빌드 및 에디토리얼 피치",
          items: [
            "이메일 및 SMS를 포함하고 기존 앱으로 라우팅되는 미국 캡처 목적지를 구축합니다.",
            "가장 높은 순위를 기록한 코퍼스 레인을 기반으로 포맷 뱅크를 조립하여 신곡 없이도 콘텐츠 흐름을 유지합니다.",
            "과거 카탈로그가 보유했던 플래그십 리스트를 대상으로 에디토리얼 피치 사이클을 개시합니다.",
            "2인조 페어링 프랜차이즈를 명명하고 일정을 잡습니다.",
          ],
        },
        {
          weekIndex: 3,
          title: "캡처 개시",
          items: [
            "안정적인 URL에서 미국 캡처 목적지가 라이브되며, 모든 자체 채널에서 링크됩니다.",
            "릴리스 에셋에 맞춰 1~2초 길이의 엔드 카드 표준화, 타이틀 및 날짜 포함",
            "첫 테스트에 앞서 유료 계정 구조 및 픽셀 검증 완료",
            "인스타그램을 미러링 방식 대신 주요 표면 관리 방식으로 전환",
          ],
        },
        {
          weekIndex: 4,
          title: "유료 테스트 오픈",
          items: [
            "테스트 지출로 첫 유료 캠페인 오픈, 검증된 오가닉 성과 크리에이티브 활용",
            "두 개의 오디언스 별도 운영: 미국 중심의 인스타그램 프로필과 동남아시아 및 라틴 아메리카의 틱톡 프로필",
            "프로필 방문이 아닌 캡처 대상으로 지정된 전환 목표",
            "티켓 수요 신호 및 오디언스 지리 정보에 맞춰 라이브 규모 조정 작업 시작",
          ],
        },
        {
          weekIndex: 5,
          title: "편집본 추가 및 라이브 규모 조정",
          items: [
            "첫 편집본 추가 추적 및 보고, 비(非) K-pop 타겟 포함",
            "유튜브 쇼츠 포맷 테스트 출시, 60일 측정 기간 개시",
            "서울 및 타이베이 공연장 옵션, 야심보다는 검증된 참여도 및 티켓 수요에 맞춰 규모 조정",
            "포착된 연락처당 비용을 실무 벤치마크로 설정",
          ],
        },
        {
          weekIndex: 6,
          title: "중간 검토",
          items: [
            "1주차에 포착된 모든 기준선에 대한 전체 검토",
            "예상치를 달성한 유료 라인은 유지, 달성하지 못한 라인은 축소하지 않고 컷오프",
            "리듬 플로어 감사: 유지 또는 미유지 여부 및 그 사유",
            "리테일 및 라이브 캘린더에 맞춰 보도자료 장기 계획 개시",
          ],
        },
        {
          weekIndex: 7,
          title: "유료 캠페인 확장, 사전 판매 오픈",
          items: [
            "테스트를 통과한 라인에 유료 캠페인 확장, 최악, 예상, 최상의 시나리오 재진술",
            "멤버십 사전 판매 오픈, 멤버십이 제공하는 첫 번째 혜택",
            "장기적인 미국 언론 홍보 활동은 리테일 프로그램에 맞춰 포맷 내러티브를 중심으로 시작됩니다.",
            "응원봉 프로그램 타임라인이 레이블과 함께 확정되었습니다.",
          ],
        },
        {
          weekIndex: 8,
          title: "일반 판매 시작",
          items: [
            "일반 판매 시작, 모든 티켓 거래에 대한 정보 수집이 진행됩니다.",
            "판매율 및 매진 소요 시간은 사전 판매 벤치마크와 비교하여 추적됩니다.",
            "독점 및 사인 에디션에 대한 미국 리테일 논의가 시작되었습니다.",
            "실제 상품을 대상으로 자체 보유 리스트가 처음으로 활성화됩니다.",
          ],
        },
        {
          weekIndex: 9,
          title: "언론 홍보 강화",
          items: [
            "미국 언론 홍보 강화는 리테일 프로그램 및 포맷 내러티브와 연계하여 진행됩니다.",
            "지속 콘텐츠 계획은 확정된 릴리스 기간에 맞춰 실행됩니다.",
            "티켓 구매자 데이터를 기반으로 지역별 수요 지도가 작성됩니다.",
            "첫 번째 웨이브 결과에 기반한 두 번째 에디토리얼 제안 웨이브가 진행됩니다.",
          ],
        },
        {
          weekIndex: 10,
          title: "리테일 및 팝업 스토어",
          items: [
            "미국 리테일 프로그램이 확정되었으며, 판매처가 확보된 곳에서는 독점 에디션이 제공됩니다.",
            "첫 번째 미국 팝업 스토어가 미국 리테일 프로그램에 맞춰 준비됩니다.",
            "사전 예약 프로그램은 3주차부터 9주차까지 구축된 자체 보유 리스트를 대상으로 진행됩니다.",
            "유료 광고는 라이브 및 리테일 전환 기간에 집중됩니다.",
          ],
        },
        {
          weekIndex: 11,
          title: "첫 번째 헤드라인 공연장",
          items: [
            "첫 번째 자체 헤드라인 공연장, 모든 접점에서 정보 수집이 이루어집니다.",
            "팝업 스토어는 병행 운영되며, 방문객을 리스트 및 실물 판매로 전환시킵니다.",
            "현장에서 포착된 콘텐츠는 다음 분기의 포맷 뱅크 역할을 합니다.",
            "유료 노출부터 티켓 및 실물 구매까지 전체 퍼널 측정",
          ],
        },
        {
          weekIndex: 12,
          title: "마감 및 다음 주기",
          items: [
            "모든 기준선 및 사전에 명시된 모든 사례에 대한 전체 기간 보고",
            "첫 번째 방의 수요 데이터를 사용하여 두 번째 방의 규모를 산정하고 라우팅에 대한 정보를 제공합니다.",
            "분기별 콘텐츠로 비디오 인텔리전스 스토어가 갱신되어 코퍼스가 축적됩니다.",
            "확정된 출시일을 기준으로 다음 주기 범위를 제안합니다.",
          ],
        },
      ],
      footnote: "주차는 잠정적이며, 확정된 출시일이 존재하면 해당 출시일에 다시 고정됩니다. 쇼케이스 주차는 장소 이용 가능 여부 및 레이블 승인에 따라 달라지므로 잠정적으로 표시되며, 이 두 가지는 본 범위 외에 있습니다.",
    },
  ],
};
