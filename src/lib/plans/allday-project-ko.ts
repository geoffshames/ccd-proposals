import type { StrategyPlanData } from "../plan-context";

export const alldayProjectPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/allday-project/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "allday-project", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "ALLDAY PROJECT",
    subtitle: "2025년 신인 그룹 중 가장 헌신적인 팬덤에 대한 감사, 이를 지원하기 위해 이미 구축된 인프라, 그리고 이 둘을 연결하는 계획.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, Crowd Control Digital",
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
      subtitle: "ALLDAY PROJECT는 동급 최고의 아티스트들보다 청취자를 팬으로 전환시키는 능력이 뛰어납니다. 현재 시스템은 이러한 팬들이 다음 단계로 나아갈 수 있도록 거의 아무것도 허용하지 않는다는 점이 기회입니다.",
      body: [
        "Fourteen months after debut, ALLDAY PROJECT holds a follower-to-listener ratio of 0.468, the highest of any active group in the 2024 to 2026 rookie cohort. Spotify followers stand at 908,927 and have never declined in a single reading since debut, still adding roughly 509 a day at the date of this audit with no new music in market since December. On the format the industry said could not sell albums, the first EP moved 250,071 copies in its opening week. The commitment is real, it is measurable, and it is compounding on its own.",
        "이러한 팬들의 헌신을 지원하기 위한 인프라는 이미 존재하며 비용이 지불되었습니다. DAY ONE은 데뷔 당일에 명명되었습니다. DAY OFF 앱은 156개국에서 첫 24시간 동안 40,000건의 가입을 기록했습니다. 유료 멤버십이 출시되어 매진되었습니다. 아직 구축되지 않은 것은 이 둘을 연결하는 계층입니다. 자체 채널은 아무 곳으로도 연결되지 않고, 멤버십은 아무것도 차단하지 않으며, 응원봉도 없고, 그룹은 아직 어떤 시장에서도 헤드라인 공연을 하지 않았습니다. 본 문서의 감사 부분은 소비, 이탈 행동, 잠재 고객, 비디오 및 인프라 전반에 걸쳐 이러한 각 격차를 정확하게 측정합니다. 전략 부분은 이미 구축된 것을 연결하고, 이 그룹의 최대 청취 시장이며 아직 공략되지 않은 미국을 목표로 합니다.",
      ],
      supports: {
        heading: "본 문서에서 다루는 내용",
        items: [
          "2024-2026년 신인 그룹 대비 시장 포지션 및 남녀공학 포맷 선례, 실시간 소비 데이터 기반 등급 분류",
          "소비 및 이탈 분석: 릴리즈별 유지 곡선, 출시일 지수, 상한 및 하한 경제성",
          "미국 잠재 고객 및 타겟팅, 세 개의 자체 채널 전반의 플랫폼 잠재 고객 데이터 기반 구축",
          "비디오 인텔리전스: 성과 데이터가 결합된 자체 및 경쟁사 게시물 106개 비디오 코퍼스",
          "인프라 감사: CRM부터 리테일, 티켓팅까지 34개의 자체 보유 채널을 개별적으로 점검",
          "성장 전략: 4개의 실행 버티컬, 파트너 주도 워크스트림, 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "Spotify monthly listeners recovering from 1.94M toward the 4M+ range the group already reached in December 2025",
          "편집 도달 범위를 146,835건에서 카탈로그가 이전에 보유했던 1,380만 건으로 재구축",
          "미국 내 이메일 및 SMS 전반에 걸쳐 측정 가능한 자체 리스트를 구축하기 위해 제로에서 퍼스트파티 데이터 확보 시작",
          "숏폼 콘텐츠 주 4회 이상 지속적으로 게시 재개, 경쟁 그룹들이 모두 따르는 빈도",
          "첫 헤드라인 이슈와 응원봉을 통해 매진된 팬클럽 회원들에게 실질적인 소유감을 부여",
          "그룹의 최대 시장을 공략하기 위한 첫 미국 리테일 프로그램 및 명명된 미국 파트너 구조 구축",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "14 Months of Spotify Consumption",
          subtitle: "데뷔 이후 월간 리스너 및 팔로워 수치. 두 지표는 반대 방향으로 움직입니다: 팔로워 수는 단 한 번도 감소한 적이 없으나, 리스너 수는 2025년 12월에 최고치를 기록한 이후 매달 감소하고 있습니다.",
          series: [
            {
              name: "월간 리스너",
              points: [
                { x: "25/6/25", y: 156612 }, { x: "1/7/25", y: 881795 }, { x: "1/8/25", y: 3558809 }, { x: "1/9/25", y: 3048881 }, { x: "1/10/25", y: 2731824 }, { x: "1/11/25", y: 2341639 }, { x: "1/12/25", y: 3263035 }, { x: "26/1/1", y: 4036593 }, { x: "2026년 2월 1일", y: 3690893 }, { x: "2026년 3월 1일", y: 3076390 }, { x: "2026년 4월 1일", y: 3012497 }, { x: "2026년 5월 1일", y: 2581395 }, { x: "2026년 6월 1일", y: 2553854 }, { x: "2026년 7월 1일", y: 2204568 }, { x: "2026년 8월 1일", y: 1990176 }, { x: "2026년 8월 31일", y: 1951884 },
              ],
            },
            {
              name: "팔로워",
              points: [
                { x: "25/6/25", y: 46559 }, { x: "1/7/25", y: 125931 }, { x: "1/8/25", y: 270952 }, { x: "1/9/25", y: 369070 }, { x: "1/10/25", y: 424242 }, { x: "1/11/25", y: 461394 }, { x: "1/12/25", y: 516130 }, { x: "26/1/1", y: 596469 }, { x: "2026년 2월 1일", y: 672386 }, { x: "2026년 3월 1일", y: 723276 }, { x: "2026년 4월 1일", y: 773837 }, { x: "2026년 5월 1일", y: 814269 }, { x: "2026년 6월 1일", y: 849748 }, { x: "2026년 7월 1일", y: 873859 }, { x: "2026년 8월 1일", y: 892294 }, { x: "2026년 8월 31일", y: 907611 },
              ],
            },
          ],
          markers: [
            { x: "25/6/25", label: "DEBUT" },
            { x: "1/12/25", label: "첫 번째 EP" },
            { x: "2026년 3월 1일", label: "PUBG" },
          ],
          tall: true,
          source: "Chartmetric, 2025년 6월 25일부터 2026년 8월 31일까지",
        },
      ],
      footnote: "All data in this document was pulled September 3, 2026 unless dated otherwise. Sources: Chartmetric, Spotify daily and weekly chart archives, Hanteo and Circle published tallies, platform audience data, a 34-surface owned-infrastructure audit, and a dedicated ALLDAY PROJECT video intelligence store. Cover photograph: 티비텐 TV10, CC BY 3.0, via Wikimedia Commons.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 내 위치",
      philosophy: "포지셔닝은 평판이 아닌 실시간 소비량에 따라 계층화될 때만 방어 가능합니다. 11명의 아티스트, 하나의 메트릭 기준선, 세 개의 티어.",
      intro: "The comparison set spans the acts ALLDAY PROJECT is measured against commercially and creatively: the 2024-2025 rookie class, the established fourth-generation groups, the global-format outlier, and the one co-ed precedent with a full career behind it. Spotify monthly listeners (Chartmetric, September 2026) is the spine. The notes carry what each peer does well and what ALLDAY PROJECT can take from the contrast.",
      subBlocks: [
        {
          label: "A",
          title: "티어 맵",
          strategy: "두 개의 명확한 구분선이 티어를 정의합니다: 12.87M에서 7.96M까지, 그리고 4.18M에서 1.94M까지. ALLDAY PROJECT는 3티어의 최상단에 위치합니다. 2티어와의 격차는 KiiiKiii의 4,179,465명으로, 현재 기준치의 2.15배입니다. 이 수치는 계획이 달성하고자 하는 목표이며, 그 아래의 팔로워 기반은 이미 상위 티어에 맞춰져 있습니다.",
          components: {
            heading: "1티어 / 글로벌 스케일, 월간 리스너 12M+",
            items: [
              "KATSEYE, 월간 리스너 37.7M. 해당 그룹 중 미국을 수출 시장이 아닌 내수 시장으로 성공시킨 유일한 아티스트: 미국 리스너 8.62M, 미국 내 순위 1위. K팝 프로덕션으로 글로벌 팝 아티스트로 구축되어 누구도 전환시킬 필요가 없었습니다. 그들의 규모가 ALLDAY PROJECT가 채택할 필요가 없는 광범위한 포지셔닝을 강요하기 때문에, 이러한 대비는 낙담시키기보다는 교훈적입니다.",
              "ILLIT, 월간 리스너 2,140만 명. 해당 그룹 내 가장 강력한 발견 엔진입니다. 2,140만 명의 리스너 대비 0.359의 비율은 끊임없이 채워지는 막대한 캐주얼 팬층을 의미합니다. 이들의 음악적 색깔은 의도적으로 편안하게 듣기 좋은 음악이며, 이는 ALLDAY PROJECT가 선택하지 않은 영역입니다.",
              "CORTIS, 월간 리스너 1,290만 명. 1월에 ALLDAY PROJECT와 골든디스크 신인상을 공동 수상했으며, 현재 그들의 6.63배 규모입니다. 동일한 수상, 동일한 주기에서 두 궤적의 차이는 포맷이나 재능이 아닌, 발매 주기입니다.",
            ],
          },
          kpis: [
            "2티어, 확립된 규모, 400만~800만: Hearts2Hearts 796만 명, BABYMONSTER 769만 명, MEOVV 496만 명, KiiiKiii 418만 명",
            "3티어, 200만 미만: ALLDAY PROJECT 194만 명 (티어 최상단), JEON SOMI 182만 명, izna 156만 명, KARD 103만 명",
            "2티어와의 격차: KiiiKiii 대비 2,238,576명 증가, 또는 2.15배",
            "1티어와의 격차: CORTIS 대비 1,090만 명 증가, 또는 6.63배",
          ],
          charts: [
            {
              kind: "hbars",
              title: "The Set by Spotify Monthly Listeners",
              subtitle: "11개 아티스트, 1가지 지표. ALLDAY PROJECT는 3티어 최상단에 위치하며, 상위 티어에 걸맞은 팬 기반을 보유하고 있습니다.",
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
              subtitle: "활동 중인 신인 그룹 중, ALLDAY PROJECT는 해당 그룹 내에서 리스너를 충성도 높은 팔로워로 전환하는 비율이 가장 높습니다. 그들 위에 있는 세 그룹은 누적된 팔로워가 현재의 리스닝 활동을 넘어선 성숙하거나 레거시 아티스트입니다.",
              series: [
                {
                  name: "팔로워 대 리스너 비율",
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
              note: "Ratio is Spotify followers divided by monthly listeners. A high ratio means a large share of the listening audience has chosen to commit.",
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "B",
          title: "그룹별 분석",
          strategy: "그룹은 각 아티스트의 팬 기반이 구축된 지역에 따라 나뉘며, ALLDAY PROJECT는 동종 그룹 중 누구도 명확하게 차지하지 않는 분기점에 속합니다. 이들의 소비는 아시아에 치중되어 있고 팬 기반은 미국에 치중되어 있는데, 이는 이례적이며 이 섹션에서 가장 활용 가능한 사실입니다.",
          components: {
            heading: "세 가지 분석",
            items: [
              "미국 중심 경로: KATSEYE, ILLIT, CORTIS 모두 미국을 최우선 국가로 순위 매기며, ALLDAY PROJECT의 전체 글로벌 팬 기반보다 큰 미국 리스너 기반을 보유하고 있습니다. ALLDAY PROJECT 역시 384,259명으로 미국이 1위이며, 해당 경로에서 미국 중심의 구조적 지원이 전혀 없는 유일한 아티스트입니다.",
              "국내 및 지역별 시장: Hearts2Hearts는 인도네시아에서, MEOVV는 말레이시아에서, BABYMONSTER는 팬덤 우선 전환에서 선두를 달리고 있습니다. 이들은 시장별로 깊이를 더해가는 아티스트들입니다. ALLDAY PROJECT의 한국 시장 규모는 93,271로 작지만, 지난 6개월간 성장한 상위 20개 시장 중 유일한 시장입니다.",
              "남녀공학 그룹의 선례: KARD는 10년간 지속된 남녀공학 투어 경력을 가진 유일한 그룹이며, 10년간 정규 앨범 한 장으로 약 2,000석 규모의 공연장에서 활동했습니다. ALLDAY PROJECT의 단일 EP 주간 판매량은 이미 KARD의 커리어 최고 앨범 주간 판매량을 12.1배 초과했으며, 이는 KARD가 도달한 포맷 상한선이 잠재 고객의 상한선이 아닌 유통의 상한선이었음을 의미합니다.",
            ],
          },
          kpis: [
            "ALLDAY PROJECT는 월간 리스너의 46%를 보유한 상태에서 KiiiKiii 팔로워 수의 91%를 차지합니다.",
            "인스타그램 오디언스는 26.8%가 미국, 18.3%가 한국으로, 해당 티어에서 가장 미국 비중이 높은 팔로잉입니다.",
            "한국은 93,271명의 리스너를 보유하며, 지난 6개월간 성장한 상위 20개 시장 중 유일한 시장입니다.",
            "명품 소비층과의 친밀도는 7.2x 인덱스에서 59.7%로, 비교 대상 그룹 내에서 가장 강력한 브랜드 신호입니다.",
          ],
        },
      ],
      footnote: "모든 비교 수치는 2026년 9월 3일 Chartmetric API에서 추출되었으므로, 단일 날짜를 기준으로 측정되어 직접 비교가 가능합니다. 남녀공학 그룹의 커리어 및 투어 이력은 공개된 투어 경로 및 한터 집계 자료를 기반으로 합니다.",
    },

    // ===================================================================
    // 03. Consumption & Decay Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "소비",
      title: "소비 및 감소 분석",
      philosophy: "최고 순위는 릴리즈가 어떻게 시작되었는지를 보여줍니다. 유지율은 아무도 홍보하지 않을 때 오디언스가 무엇을 하는지를 보여줍니다. 이 섹션은 후자를 분석합니다.",
      intro: "Every figure below is built from Spotify daily and weekly chart archives, indexed from each release date and normalized for the fact that a debut chart week contains four days while every subsequent week contains seven. Chart-coverage gaps are treated as gaps, never as zeros: when a track falls below the top-200 cutoff it is recorded as below cutoff, because the catalog is still doing 229,340 streams a day globally.",
      subBlocks: [
        {
          label: "A",
          title: "팬덤 전환, 월별",
          strategy: "이 비율은 2025년 8월부터 매달 0.076에서 0.465로 상승하여 6.1배 개선되었습니다. 이를 분해하는 것이 중요합니다. 해당 기간 동안 팔로워는 59.7% 증가했으며 단 한 번도 감소하지 않은 반면, 리스너는 12월 최고치에서 하락했습니다. 두 부분 모두 비율에 영향을 미쳤으며, 팔로워 부분은 지속 가능한 부분입니다. 이는 신곡이 발매되지 않은 9개월 동안에도 계속 성장한 팬덤입니다.",
          charts: [
            {
              kind: "line",
              title: "월별 팔로워 대 리스너 비율",
              subtitle: "2025년 8월 0.076에서 2026년 8월 말 0.465까지. 모든 측정값은 이전 측정값보다 개선된 것입니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "25년 7월", y: 0.143 }, { x: "25년 8월", y: 0.076 }, { x: "25년 9월", y: 0.121 }, { x: "25년 10월", y: 0.155 }, { x: "11월 25일", y: 0.197 }, { x: "12월 25일", y: 0.158 }, { x: "1월 26일", y: 0.148 }, { x: "2월 26일", y: 0.182 }, { x: "3월 26일", y: 0.235 }, { x: "4월 26일", y: 0.257 }, { x: "5월 26일", y: 0.315 }, { x: "6월 26일", y: 0.333 }, { x: "7월 26일", y: 0.396 }, { x: "8월 26일", y: 0.448 }, { x: "8월 31일 26", y: 0.465 },
                  ],
                },
              ],
              note: "Ratio is Spotify followers divided by monthly listeners, read at each month start.",
              source: "Chartmetric 일별 시리즈, 2025년 6월 ~ 2026년 8월",
            },
          ],
          kpis: [
            "12월 리스너 최고치 이후 팔로워 339,633명 증가, 59.7% 상승했으며 감소 추세는 전혀 없었습니다.",
            "신규 음반 출시 없이도 하루 약 509명의 팔로워가 꾸준히 증가하고 있습니다.",
            "9월 3일 기준 비율 0.468로, 활동 중인 신인 그룹 중 가장 높습니다.",
            "월간 리스너 감소세 둔화: 7월 -16.3%, 이후 -4.3%, -1.4%, 8월 말에는 -0.4%를 기록했습니다.",
          ],
        },
        {
          label: "B",
          title: "카탈로그 건전성과 리텐션 승자",
          strategy: "The catalog carries roughly 1.60M Spotify streams a week fourteen months after debut, and the composition of that number contains the most actionable finding in this section. Read the third column, not the first: the track holding the highest share of its own peak is LOOK AT ME, an EP cut, at 15.1%. It is now out-streaming both the lead single that preceded it and the debut B-side globally. The audience returns to a song the promotion never centered.",
          charts: [
            {
              kind: "bars",
              title: "트랙별 현재 주간 스트림 비율",
              subtitle: "Seven-day Spotify rate as of September 3 2026. FAMOUS is a genuine evergreen at 484K a week, fourteen months out.",
              unit: "주간 스트리밍 수",
              series: [
                {
                  name: "7일간 스트리밍 수",
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
              subtitle: "유지율 순위는 프로모션 순위가 아닙니다. EP 수록곡인 LOOK AT ME는 타이틀 곡보다 자체 최고 기록 대비 높은 비율을 유지하고 있습니다.",
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
            "LOOK AT ME는 프로모션 중심곡이 아니었음에도 불구하고 현재 글로벌적으로 ONE MORE TIME과 WICKED보다 더 많은 스트리밍 수를 기록하고 있습니다.",
            "현재까지 카탈로그 총 스트리밍 수: 10개 트랙 합산 2억 4,550만 건",
          ],
        },
        {
          label: "C",
          title: "출시 곡선 및 소비 패턴 분석",
          strategy: "일별 정규화 기준, ALLDAY PROJECT의 어떤 발매곡도 자체 출시율의 1.21배를 초과한 적이 없으나, 모든 비교 대상 아티스트는 1.9배를 초과하며 최고 기록은 3.38배에 달합니다. 비교 대상 아티스트들의 발매곡은 2~4일 내에 일일 최고 스트리밍 수에 도달한 후 안정화됩니다. 이는 출시 중심의 패턴으로, 출시 첫날의 동원력은 뛰어나지만 출시 후 4주차까지 곡을 이끄는 후속 발견 단계가 구축되지 않았습니다. 이는 음악적 문제가 아닌 마케팅의 격차이며, 섹션 08부터 11까지는 이 문제를 해결하기 위해 설계되었습니다.",
          charts: [
            {
              kind: "bars",
              title: "최고 주간 스트리밍 수 대비 출시 주간 스트리밍 수 배수",
              subtitle: "일별 정규화 기준이므로, 4일간의 데뷔 차트 주간은 7일간의 주간과 공정하게 비교됩니다. 비교 대상 아티스트들은 출시 이후 스트리밍 수가 증가합니다. ALLDAY PROJECT의 발매곡은 출시 시점에 최고점을 기록합니다.",
              unit: "x",
              series: [
                {
                  name: "최고 / 출시 주차, 일별",
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
              note: "모든 발매곡이 금요일-목요일 차트 주간 내 월요일에 발매되었기 때문에, 출시 주차를 일별 비율로 정규화했습니다.",
              source: "Spotify Korea weekly chart archives, indexed from each release date",
            },
            {
              kind: "bars",
              title: "발매별 한국 주간 차트 주차",
              subtitle: "발매 순서별 차트 지속력. 데뷔 싱글은 1년 내내 유지되었습니다.",
              unit: "weeks",
              series: [
                {
                  name: "차트 기록 주차",
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
            "모든 발매곡은 2일차와 4일차 사이에 일별 최고치에 도달합니다.",
            "현재까지 달성된 출시 후 최고 배수: 1.21배, LOOK AT ME에서",
            "신인 그룹 전체 비교 범위: 1.92배에서 3.38배",
            "FAMOUS는 한국에서 51주 연속 차트인하여 카탈로그에서 가장 긴 기록을 세웠습니다.",
          ],
        },
        {
          label: "D",
          title: "천장, 바닥, 그리고 그것을 움직이는 것들",
          strategy: "두 개의 숫자가 전체 기회를 보여줍니다. 아티스트 레벨 주간 최고치는 데뷔 시대에 932,447명이었고 EP 시대에는 935,330명으로, 차트 인벤토리의 세 배에 걸쳐 0.31%의 변화를 보였으며, 이는 카탈로그 추가만으로는 최고치를 높일 수 없음을 의미합니다. 그러나 시대 간의 감소율은 급격히 둔화되어 주당 -6.96%에서 주당 -1.01%로 감소했으며, 카탈로그는 진정한 정체기에 도달했습니다. 수치를 움직이는 레버는 실제 컴백입니다: 2025년 11월 발매는 데뷔 카탈로그를 2주 만에 42.0% 상승시켰습니다. 3월 브랜드 싱글은 -9.8%를 기록했습니다. 발매는 카탈로그를 상승시키지만, 브랜드 제휴는 그렇지 않습니다.",
          charts: [
            {
              kind: "bars",
              title: "발매 간 주간 리스너 감소율",
              subtitle: "조용한 기간 동안의 감소율은 시대가 지날수록 둔화되고 있으며, 이는 남아있는 청중을 잃기 점점 더 어려워지고 있음을 의미합니다.",
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
              subtitle: "각 이벤트 후 2주간 데뷔 싱글의 주간 한국 스트림 변화량",
              unit: "%",
              series: [
                {
                  name: "카탈로그 변화",
                  points: [
                    { x: "2025년 11월 컴백", y: 42.0 },
                    { x: "2026년 3월 브랜드 싱글", y: -9.8 },
                  ],
                },
              ],
              note: "정식 발매는 백 카탈로그를 동반 상승시키지만, 브랜드 협업은 그렇지 못했습니다.",
              source: "Spotify Korea weekly archives, Nov 2025 and Mar 2026 windows",
            },
          ],
          kpis: [
            "아티스트 주간 최고치: 데뷔 시대 932,447, EP 시대 935,330 (차트 트랙 3배 기준)",
            "트랙당 효율성은 같은 두 시대에 걸쳐 466,224에서 155,888로 하락했습니다.",
            "시대 간 감소율은 주당 -6.96%에서 -1.01%로 개선되었습니다.",
            "카탈로그는 마지막 10주간 주간 84,921에서 94,543 사이의 고원 상태를 유지했습니다.",
          ],
        },
        {
          label: "E",
          title: "에디토리얼 도달 및 실물 판매",
          strategy: "섹션을 마무리하는 두 가지 추가적인 발견은 상반된 방향을 가리킵니다. 에디토리얼 지원은 거의 완전히 중단되었습니다: 역사적으로 38개 플레이리스트에 걸쳐 1,377만 건의 도달 범위를 기록했지만, 현재 라이브는 146,835건입니다. 이는 리스너 곡선의 가장 명확한 단일 설명이며, 해당 플레이스먼트는 과거에 획득한 것이므로 복구 가능합니다. 실물 판매는 반대 방향으로 움직입니다. EP는 스트리밍이 감소한 같은 기간에 데뷔 싱글의 5.2배인 250,071장을 1주차에 판매했습니다. 이 청중의 두 부분은 완전히 다르게 행동하며, 그중 하나만이 제대로 판매된 적이 있습니다.",
          charts: [
            {
              kind: "grouped",
              title: "에디토리얼 플레이리스트 도달 범위, 과거 vs 현재",
              subtitle: "과거 포함되었던 플레이스먼트로는 K-Pop ON! (6.13M 도달, 최고 순위 3위), Hot Hits Korea (최고 순위 1위), K-Pop Rising (최고 순위 3위)이 있습니다.",
              unit: "reach",
              series: [
                {
                  name: "도달",
                  points: [
                    { x: "과거 보유", y: 13771453 },
                    { x: "현재 라이브", y: 146835 },
                  ],
                },
              ],
              note: "과거 도달분의 약 1.4M은 K-Pop이 아닌 에디토리얼 플레이리스트에서 발생했으며, 여기에는 최고 순위 6위를 기록한 팝 무드 리스트와 최고 순위 18위를 기록한 힙합 및 R&B 리스트가 포함됩니다.",
              source: "Chartmetric 플레이리스트 엔드포인트, 2026년 9월 3일",
            },
            {
              kind: "grouped",
              title: "발매별 첫 주 실물 판매량",
              subtitle: "해당 EP는 데뷔 싱글 대비 첫 주 판매량의 5.2배, 그리고 유일하게 비교 가능한 혼성 그룹의 커리어 최고 판매 주 대비 12.1배를 기록했습니다.",
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
            "과거 38개 에디토리얼 플레이리스트 보유, 현재 4개 라이브",
            "K-Pop이 아닌 에디토리얼 플레이리스트는 비정상적으로 높은 최고 순위를 기록했으며 현재 활용되지 않고 있습니다.",
            "EP 첫 주 판매량 250,071건으로, 스트리밍 규모가 2배에서 4배에 달하는 동료 아티스트와 유사한 범위입니다.",
            "EP 판매 첫날만 85,531건으로, 데뷔 싱글 전체 첫 주 판매량을 상회합니다.",
          ],
        },
      ],
      footnote: "방법론: 발매일 기준으로 데이터를 색인화하고, 출시 첫 주를 일별 비율로 정규화하며, 차트 노출 공백은 0이 아닌 공백으로 기록합니다. 비교 대상 아티스트의 배수는 동일한 기준으로 계산되어 직접 비교가 가능합니다.",
    },

    // ===================================================================
    // 04. U.S. Audience & Targeting
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "잠재 고객",
      title: "미국 잠재 고객 및 타겟팅",
      intro: "아래 프로필은 2026년 9월 3일에 추출된 세 개의 자체 채널 전반의 Chartmetric 플랫폼 잠재 고객 데이터를 기반으로 구축되었습니다. 이는 미국 자체 채널의 초기 유료 타겟팅 및 포지셔닝을 설정합니다. 유료 활동 첫 주에 픽셀 데이터가 축적되면 세분화가 정제될 것입니다.",
      thesis: "하나의 아티스트 아래 두 개의 뚜렷한 잠재 고객층이 존재합니다. 인스타그램은 미국과 한국을 기반으로 하며, 연령대는 25~34세, 성별은 균형 잡혀 있고 패션에 관심이 많습니다. 틱톡은 동남아시아와 라틴 아메리카를 기반으로 하며, 연령대는 18~24세, 여성 비율은 77%입니다. 이들은 동일한 집단이 아니므로, 하나의 캠페인으로 평균화하기보다는 별도로 타겟팅할 계획입니다.",
      metros: [
        { name: "캘리포니아주 로스앤젤레스" },
        { name: "뉴욕주 뉴욕" },
        { name: "일리노이주 시카고" },
        { name: "샌프란시스코 베이 에어리어" },
        { name: "텍사스주 댈러스-포트워스", tier: "secondary" },
        { name: "워싱턴주 시애틀", tier: "secondary" },
        { name: "조지아주 애틀랜타", tier: "secondary" },
        { name: "텍사스주 휴스턴", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17세", weight: 7 },
        { bracket: "18-24세", weight: 30 },
        { bracket: "25-34세", weight: 49 },
        { bracket: "35세 이상", weight: 14 },
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
        "지올팍",
        "hannah bahng",
      ],
      genres: ["K-Pop", "한국 팝", "한국 힙합", "댄스 팝", "팝"],
      psychographics: [
        {
          label: "이 오디언스가 구매하는 것",
          items: [
            "명품 선호도는 7.2배 지수로 59.7%를 기록하며, 경쟁 그룹 내 가장 강력한 브랜드 신호입니다.",
            "주요 브랜드 선호도: Dior 24.7%, Louis Vuitton 21.9%, Prada 20.6%, Chanel 20.6%",
            "관심사: 의류 및 액세서리 64.9%, 음악 54.6%, 뷰티 51.9%",
            "스트리밍 및 엔터테인먼트 선호도는 Netflix가 27.4%로 가장 높습니다.",
          ],
        },
        {
          label: "성별 균형이 중요한 이유",
          items: [
            "52 대 48의 Instagram 비율은 동종 업계에서 이례적인 것으로, 경쟁 그룹은 70% 이상이 여성입니다.",
            "팔로워의 남성 절반은 단순한 반올림 오차가 아닌 실제 공략 가능한 오디언스입니다.",
            "이는 뷰티 및 패션을 넘어 기술, 오디오, 스포츠, 게임까지 가능한 브랜드 카테고리 목록을 확장합니다.",
            "이는 또한 첫 헤드라인 공연에 중요한 잠재적 라이브 오디언스를 확장합니다.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "카탈로그를 소비하지 않고 아티스트를 팔로우하는 것",
          platforms: ["Spotify", "Instagram"],
          implication: "신곡 발매 없이 59.7%의 팔로워 증가를 기록했습니다. 이는 발매에 의존하지 않는 팬덤으로, 활동 기간 중에만 활성화되는 것이 아니라 활동 기간 사이에 활용될 수 있습니다.",
        },
        {
          behavior: "프로모션 싱글 대신 앨범 수록곡으로 회귀",
          platforms: ["Spotify"],
          implication: "LOOK AT ME는 리드 싱글의 6.1%에 비해 피크 주간 대비 15.1%를 유지하고 있습니다. 오디언스는 프로모션된 표면적인 것보다 깊이를 선택하고 있으며, 이는 다음 프로모션 전략에 반영되어야 합니다.",
        },
        {
          behavior: "동일한 콘텐츠에 대해 TikTok보다 Instagram에서 더 높은 참여율을 보임",
          platforms: ["Instagram", "TikTok"],
          implication: "Instagram은 21개의 비교 게시물 중 18개에서 우위를 보였습니다. 현재 놓치고 있는 도달 범위는 추가적인 제작 없이 무료로 얻을 수 있습니다.",
        },
        {
          behavior: "유튜브에서 숏폼을 시청하지 않고 구독하는 것",
          platforms: ["YouTube"],
          implication: "팔로워 4.31M명으로, 이는 TikTok 팔로워의 2.7배이며 동일 영상에서 중간값 0.27배로 전환됩니다. 이는 잠재고객 규모와 잠재고객 활용도 간의 가장 큰 단일 격차입니다.",
        },
      ],
      platformSignals: [
        {
          platform: "Spotify",
          note: "월간 리스너 194만 명으로, 미국이 384,259명으로 1위이며 인도네시아, 필리핀, 대만, 말레이시아보다 앞섭니다. 팔로워 기반은 908,927명이며 증가 추세입니다. 미국 내 영향력은 특정 도시 집중보다는 광범위하고 평탄한 형태로, 이는 현장에서 전혀 활용되지 않은 알고리즘적 도달 범위를 의미합니다.",
        },
        {
          platform: "Instagram",
          note: "팔로워 169만 명, 참여율 3.52%, 평균 좋아요 약 59.7K개입니다. 잠재고객은 미국 26.8%, 한국 18.3%이며, 상위 도시로는 로스앤젤레스 16.9%, 서울 15.5%입니다. 연령대는 25~34세가 49.2%이며, 성별은 여성 51.5%, 남성 48.5%입니다. 이는 미국 시장을 겨냥한 채널이며, 유료 광고 집행 시 중점적으로 활용해야 합니다.",
        },
        {
          platform: "TikTok",
          note: "팔로워 163만 명, 참여율 10.49%로 세 채널 중 가장 높습니다. 잠재고객은 여성 77.2%, 18~24세 70.5%이며, 미국 10.4%, 브라질 9.8%, 동남아시아 비중이 높습니다. 팔로워 증가는 2026년 4월 이후 정체 상태입니다.",
        },
        {
          platform: "YouTube",
          note: "구독자 431만 명, 채널 조회수 7억 5,600만 회입니다. 잠재고객은 여성 71.7%, 25~34세 56.4%이며, 구독자는 한국 23.9%, 미국 10.0%가 이끌고 있습니다. 댓글 작성자의 핵심은 한국인 43.1%로, 이는 활동적인 잠재고객과 구독 잠재고객이 다른 집단임을 시사합니다.",
        },
      ],
      footnote: "Age and gender shown are Instagram audience statistics via Chartmetric, September 3, 2026, chosen because Instagram is the most U.S.-weighted of the three channels and the one initial paid targeting would key on. TikTok's distribution differs materially and is described in the platform notes. U.S. metros are ordered on Spotify city listener data, with the remainder standard U.S. demand centers to be validated against pixel data in the first paid flight.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "콘텐츠",
      title: "비디오 인텔리전스 / 106개 영상",
      intro: "Crowd Control Digital은 TwelveLabs 비디오 AI에 ALLDAY PROJECT 전용 인텔리전스 스토어를 구축했습니다. 여기에는 그룹 자체의 TikTok, Instagram, YouTube 게시물 48개와 7개 비교 대상 그룹의 상위 게시물 58개가 포함됩니다. 모든 영상은 자체 성과 데이터를 포함합니다. 이 스토어는 영구적이며 새로고침할 때마다 성장하므로, 아래 분석은 일회성 스캔이 아닌 복리 효과를 내는 자산에 대한 초기 판독값입니다.",
      clientQuestion: {
        attribution: "본 분석이 답하는 질문",
        question: "침묵기에도 지속적으로 성장한 것은 무엇인가? 콘텐츠가 이를 달성하기 위해 무엇을 했으며, 채널을 다시 활성화하는 가장 빠른 방법은 무엇인가?",
      },
      methodology: [
        {
          label: "코퍼스 추출",
          value: "자체 게시물 48개(TikTok 34개, Instagram 11개, YouTube 3개)로, 전체 참여 데이터를 포함하여 조회수 기준 상위 5분위로 선정되었습니다. 비교 대상 세트: MEOVV, CORTIS, KiiiKiii, KATSEYE, Hearts2Hearts, BABYMONSTER, izna의 조회수 기준 상위 게시물, 총 58개 영상입니다.",
        },
        {
          label: "비디오 인텔리전스 스토어",
          value: "총 106개 영상이 ALLDAY PROJECT 전용 영구 지식 스토어에 색인화되어, 훅, 화면 텍스트, 연출, 반복되는 형식 등을 전체 코퍼스에서 한 번에 조회할 수 있습니다. 각 파일은 자체 이름에 성과 등급을 포함하므로, 스토어는 외부 레지스트리에 독립적으로 읽을 수 있습니다.",
        },
        {
          label: "성과 결합",
          value: "모든 항목은 조회수, 좋아요, 댓글, 공유, 참여율, 게시일, 계정 내 백분위수 등 플랫폼 지표에 연결됩니다. 콘텐츠는 개별적으로가 아닌 결과에 대비하여 분석됩니다.",
        },
        {
          label: "리듬 측정",
          value: "모든 계정 세트의 게시 빈도는 2026년 6월 1일부터 9월 3일까지 동일한 기간 동안 측정되었으므로, 게시 주기 비교는 동일 조건 하에 이루어집니다.",
        },
        {
          label: "솔직한 한계점",
          value: "아래 결과는 전체 106개 항목에 대한 코퍼스 열거 및 통합 성과 데이터를 기반으로 합니다. 스토어에 대한 프레임 수준 쿼리 결과는 이 분석을 확장하며 후속 작업에서 보고될 예정입니다. 비교 코퍼스는 각 아티스트의 최고 성과 게시물이므로, 경쟁사 중앙값은 계정 평균이 아닌 승자 벤치마크로 구성됩니다. 멤버 수준 분석은 얼굴 인식이 아닌 캡션 및 공식 태그를 기반으로 합니다.",
        },
      ],
      corpusStats: [
        {
          label: "분석된 동영상",
          value: "106",
          detail: "자체 48개 + 경쟁사 58개, 모든 항목에 대한 성과 데이터 통합",
        },
        {
          label: "자체 TikTok 중앙값, 데뷔 시대",
          value: "3.01M",
          detail: "2025년 6월 및 7월의 76개 게시물 기준. 역대 단일 게시물 최고 기록은 14.47M입니다.",
        },
        {
          label: "자체 TikTok 중앙값, 가장 최근 시대",
          value: "822K",
          detail: "2026년 5월 및 6월의 8개 게시물 기준, 계정이 비활성화되기 전",
        },
        {
          label: "마지막 게시물로부터 경과 일수",
          value: "72 / 55 / 45",
          detail: "각각 TikTok, YouTube 및 Instagram 기준, 2026년 9월 3일 기준",
        },
      ],
      mixColumnLabel: "ALLDAY PROJECT 오늘",
      benchmarkColumnLabel: "비교 세트",
      mixHeading: "출력 현황 대 비교 세트 운영 현황",
      mixIntro: "아래 행들은 동일한 기간 동안 측정된 현재 관행과 7개의 비교 계정이 수행하는 활동을 비교합니다. 게시 주기가 다른 행들을 이끌어갑니다.",
      mixRows: [
        {
          metric: "게시 주기, 2026년 6월 1일 ~ 9월 3일",
          lolaAmour: "기간의 마지막 72일 동안 TikTok 게시물 0건",
          benchmark: "KiiiKiii ~주 21회, Hearts2Hearts ~주 21회, CORTIS ~주 20회, izna ~주 13회, KATSEYE ~주 6.8회, MEOVV ~주 4.5회, BABYMONSTER ~주 2.5회",
          read: "behind",
          note: "7개의 비교 계정 모두 9월 3일에 게시했습니다. 이는 감사에서 가장 크고 비용 효율적인 격차입니다.",
        },
        {
          metric: "실행 요청 (Calls to action)",
          lolaAmour: "48개 게시물에 걸쳐 명시적인 실행 요청 5건이 있었으며, 2026년에는 단 한 건도 없었습니다.",
          benchmark: "전체 세트의 표준 관행은 반복되는 엔드 카드 또는 릴리스 에셋에 대한 캡션 요청입니다.",
          read: "behind",
          note: "가장 최근의 실행 요청은 271일 전이었습니다. 미국이 청취 시장 1위인 점을 감안할 때, 이는 본 문서에서 가장 저렴한 해결책입니다.",
        },
        {
          metric: "플랫폼 할당",
          lolaAmour: "틱톡은 주요 플랫폼으로, 인스타그램은 미러링으로, 유튜브 쇼츠는 부차적인 것으로 취급되었습니다.",
          benchmark: "경쟁사들은 자체 데이터가 보상하는 플랫폼에 비중을 두며, 교차 활용을 의도적으로 관리합니다.",
          read: "behind",
          note: "인스타그램은 21개의 페어링된 게시물 중 18개에서 1.47배의 중간값을 기록하며 틱톡을 능가했지만, 431만 구독자를 보유한 유튜브 채널은 0.27배의 성과를 보였습니다. 할당은 증거에 반하여 역전되었습니다.",
        },
        {
          metric: "멤버 이름 콘텐츠",
          lolaAmour: "48개 게시물 중 12개(25%)가 멤버의 이름을 언급했습니다.",
          benchmark: "MEOVV는 수집된 캡션의 42%에서 멤버의 이름을 언급합니다.",
          read: "behind",
          note: "두 명 이상의 멤버를 언급하는 게시물은 중간값 874만 건을 기록한 반면, 멤버를 언급하지 않는 게시물은 292만 건을 기록했습니다. 이 형식은 효과적이며 공급이 부족합니다.",
        },
        {
          metric: "미국 대상 콘텐츠",
          lolaAmour: "거의 모든 게시물에 한국어 해시태그가 사용되었으며, 영어는 가사 조각으로 나타납니다.",
          benchmark: "KATSEYE는 미국식 관용구, 미국 브랜드 파트너, 영어 팬덤 이름을 사용하여 100% 영어 캡션을 운영합니다.",
          read: "behind",
          note: "청취자 수 1위 시장인 384,259명의 미국 청취자에 비해, 본 자료에는 미국 시청자를 대상으로 한 콘텐츠가 전혀 포함되어 있지 않습니다.",
        },
        {
          metric: "참여도 품질",
          lolaAmour: "틱톡 참여율 10.49%; 중단 전 마지막 게시물은 17.7%의 좋아요율을 기록했습니다.",
          benchmark: "게시물당 기준으로 세트의 기준치와 같거나 그 이상입니다.",
          read: "ahead",
          note: "이것은 콘텐츠 자체에 문제가 없음을 나타내는 행입니다. 결과물 생산이 중단된 바로 그 시점에 효율성은 상승하고 있었습니다.",
        },
      ],
      mixFootnote: "분석된 48개 영상 코퍼스와 6월부터 9월까지의 전체 게시 기간에 걸쳐 측정된 자체 콘텐츠 믹스. 비교 열은 각 계정의 최고 인기 게시물과 동일 기간의 게시 빈도를 설명합니다.",
      charts: [
        {
          kind: "bars",
          title: "시대별 틱톡 평균 조회수",
          subtitle: "하락세는 계정이 잠잠해지기 4개월 전인 2026년 2월과 3월의 브랜드 싱글 기간에 시작됩니다.",
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
          source: "자체 틱톡 코퍼스, 게시일별 게시물당 조회수",
        },
        {
          kind: "bars",
          title: "주간 게시 빈도, 2026년 6월 1일 - 9월 3일",
          subtitle: "세트 내 모든 계정에 대해 동일한 기간에 걸쳐 측정되었습니다.",
          unit: "주당 게시물 수",
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
                { x: "ALLDAY PROJECT", y: 0 },
              ],
            },
          ],
          highlightX: ["ALLDAY PROJECT"],
          tall: true,
          source: "2026년 9월 3일 기준, 8개 전체 핸들에 걸친 계정 열거",
        },
        {
          kind: "grouped",
          title: "동일 게시물, 세 가지 플랫폼",
          subtitle: "세 가지 자체 채널에 게시된 동일한 영상의 평균 성과 (틱톡 수치 기준)",
          unit: "틱톡 대비",
          series: [
            {
              name: "상대적 성과",
              points: [
                { x: "TikTok", y: 1.0 },
                { x: "Instagram", y: 1.47 },
                { x: "YouTube Shorts", y: 0.27 },
              ],
            },
          ],
          note: "Instagram은 21개의 페어링된 게시물 중 18개에서 우위를 보였습니다. YouTube Shorts는 팔로워 수가 2.7배 많은 채널에서 틱톡 수치의 약 1/4에 해당하는 성과를 보였습니다.",
          source: "자체 보유 코퍼스 내 21개의 페어드 포스트와 15개의 쓰리웨이 트윈스",
        },
      ],
      findingsHeading: "일곱 가지 발견 사항",
      findingsIntro: "각 카드는 판결, 실제 포스트와 그 수치를 포함한 증거, 존재하는 경우 반론, 그리고 전환점을 담고 있습니다.",
      findings: [
        {
          id: "stopped-at-strength",
          title: "채널은 참여 효율성이 최고조에 달했을 때 침묵했습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "틱톡은 72일, 유튜브는 55일 동안 게시물이 없었으며, 인스타그램의 마지막 오가닉 릴은 45일 전입니다. 중단 전 마지막 틱톡 게시물은 839,797개의 좋아요 대비 4,745,315회의 조회수를 기록했으며, 이는 17.7%의 좋아요 비율로 계정 데뷔 주 이후 기록된 가장 강력한 비율입니다. 콘텐츠가 게시물당 가장 큰 효과를 발휘하던 시점에서 출력이 중단되었습니다.",
          evidence: [
            "마지막 틱톡 게시물, 2026년 6월 23일: 4,745,315회 조회수, 839,797회 좋아요, 17.7% 좋아요 비율",
            "해당 좋아요 비율은 계정 데뷔 기간 이후 최고치이며, 도달 기준 약 293개 중 30위에 해당하는 게시물입니다.",
            "인스타그램의 마지막 오가닉 릴, 2026년 7월 3일, 홍보 없이 934,654회의 조회수를 기록했습니다.",
            "Spotify followers continued adding roughly 509 a day through the entire quiet window",
          ],
          counterEvidence: [
            "마지막 게시물은 계정의 도달 최고치가 아닙니다. 도달 최고치는 2025년 7월 게시물로 14,472,560회의 조회수를 기록했으며, 따라서 중단은 최고 도달이 아닌 최고 효율 시점에 이루어졌습니다.",
          ],
          pivot: {
            title: "재건 전에 재시작하십시오.",
            actions: [
              "새로운 제작을 의뢰하기 전에 고정된 주간 주기에 맞춰 게시를 재개하십시오.",
              "새로운 창의적인 방향보다는 코퍼스에서 이미 가장 높은 순위를 기록한 형식으로 시작하십시오.",
              "침묵 기간 동안의 팔로워 증가는 잠재 고객이 여전히 존재하며 기다리고 있다는 증거로 간주하십시오.",
            ],
          },
        },
        {
          id: "brand-single-dip",
          title: "도달률 하락은 중단 4개월 전 브랜드 싱글과 함께 시작됩니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "데뷔 시대의 틱톡 평균 조회수는 3,014,982회였으나, 2026년 2월과 3월 브랜드 협업 기간 동안 381,812회로 87% 감소했습니다. 전체 코퍼스에서 성과가 가장 낮은 상위 10개 게시물 중 6개가 브랜드 협업 태그를 포함하고 있습니다. 카탈로그도 동의했습니다: 동일한 릴리스는 백 카탈로그 스트림을 -9.8% 감소시킨 반면, 11월 컴백은 +42.0% 증가시켰습니다.",
          evidence: [
            "데뷔 시대 평균 3,014,982회 (76개 게시물); 브랜드 싱글 시대 평균 381,812회 (10개 게시물)",
            "브랜드 싱글 뮤직 비디오 자체는 368,717회로, 코퍼스의 2.2번째 백분위수에 해당합니다.",
            "코퍼스에서 성과가 가장 낮은 10개 게시물 중 6개가 브랜드 협업 태그가 지정되었습니다.",
            "브랜드 싱글은 11월 컴백의 +42.0% 대비 카탈로그 응답률 -9.8%를 기록했습니다.",
          ],
          counterEvidence: [
            "2026년 5월과 6월 게시물은 822,954건의 중앙값으로 회복되었으므로, 해당 효과는 계정의 영구적인 초기화보다는 캠페인에 연관되어 있습니다.",
          ],
          pivot: {
            title: "브랜드 채널과 아티스트 채널을 분리하십시오.",
            actions: [
              "파트너 캠페인은 메인 릴리즈 문법을 통하지 않고 자체 콘텐츠 스트림으로 운영하십시오.",
              "아티스트 자체 포맷을 위해 메인 피드를 유지하여, 파트너 작업이 계정의 중앙값을 설정하지 않도록 하십시오.",
              "모든 파트너 활동을 아티스트 릴리즈에 연결하여 카탈로그도 함께 성장하도록 하십시오.",
            ],
          },
        },
        {
          id: "platform-allocation",
          title: "플랫폼 할당은 그룹 자체 데이터와 반대로 되어 있습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "동일한 영상은 21건의 페어링된 사례 중 18건에서 인스타그램이 틱톡보다 더 나은 성과를 보였으며, 중앙값은 1.47배였습니다. YouTube Shorts는 431만 명의 구독자를 보유한 채널에서 0.27배의 중앙값을 기록했는데, 이는 틱톡 팔로워의 2.7배에 달합니다. 가장 큰 자체 보유 오디언스에게는 가장 적은 노출이 제공되고 있으며, 성과가 좋은 플랫폼은 거울처럼 취급되고 있습니다.",
          evidence: [
            "인스타그램은 21건의 페어링된 게시물 중 18건에서 틱톡을 능가했으며, 중앙값은 1.47배, 평균은 1.90배였습니다.",
            "가장 큰 차이를 보인 세 가지 사례 모두 브랜드 캠페인 콘텐츠에서 나타났으며, 각각 3.81배, 4.02배, 4.22배였습니다.",
            "YouTube Shorts는 15개의 3자 비교 트윈에서 0.27배의 중앙값을 기록했으며, 마지막 게시물은 틱톡 4,745,315회, 인스타그램 5,395,176회, 유튜브 741,000회로 나타났습니다.",
            "유튜브 채널은 431만 명의 구독자와 7억 5,600만 회의 누적 조회수를 보유하고 있습니다.",
          ],
          counterEvidence: [
            "한 개의 유튜브 쇼츠가 틱톡 트윈보다 1.20배 더 나은 성과를 보였으므로, 해당 포맷이 채널에 적합할 경우 채널은 충분히 역량을 발휘할 수 있습니다.",
          ],
          pivot: {
            title: "반복하는 대신 크로스오버를 관리하십시오.",
            actions: [
              "인스타그램을 복제 피드가 아닌 자체 게시물 결정이 필요한 주요 플랫폼으로 취급하십시오.",
              "채널 오디언스가 이미 구독하고 있는 포맷을 중심으로 유튜브 쇼츠를 구축한 후, 60일 후에 다시 측정하십시오.",
              "교차되지 않았던 성공적인 콘텐츠를 교차 게시하십시오. 해당 콘텐츠는 이미 존재하며 배포 비용이 들지 않습니다.",
            ],
          },
        },
        {
          id: "cta-desert",
          title: "48개의 게시물 중 5개의 CTA가 있었으며, 2026년에는 전혀 없었습니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "자체 보유 콘텐츠 전체에 걸쳐 5개의 명시적인 CTA가 있으며, 모두 2025년 6월과 12월 사이에 포함됩니다. 중단 전 마지막 기간의 13개를 포함하여 2026년 날짜가 기재된 모든 게시물에는 CTA가 없습니다. 가장 최근의 요청은 271일 전이었으며, 현재 인스타그램 바이오 링크는 3월의 뮤직비디오를 가리키고 있습니다.",
          evidence: [
            "총 5개의 CTA가 48개의 게시물에서 나왔으며, 이는 10%의 비율입니다.",
            "마지막 기록된 CTA: 2025년 12월 6일, EP에 대한 사전 저장 및 사전 주문 요청",
            "2026년 날짜의 모든 24개 코퍼스 게시물에는 어떠한 종류의 요청도 포함되어 있지 않습니다.",
            "1.69M 인스타그램 팔로워의 프로필 링크는 3월에 게시된 뮤직비디오로 연결됩니다.",
          ],
          pivot: {
            title: "도달 범위를 특정 지점으로 향하게 하십시오.",
            actions: [
              "제목과 날짜가 포함된 모든 릴리스 에셋에 1~2초 길이의 엔드 카드를 표준화하십시오.",
              "현재 우선순위에 따라 고정된 일정으로 프로필 링크를 교체하십시오.",
              "이름과 이메일을 수집하는 단일 반복 목적지를 추가하여 도달 범위를 리스트로 만드십시오.",
            ],
          },
        },
        {
          id: "cadence-gap",
          title: "크리에이티브가 아닌, 꾸준함이 레이블메이트와의 거리를 결정하는 전부입니다.",
          verdict: "confirmed",
          confidence: "높음",
          summary: "MEOVV는 6월 1일부터 9월 3일까지 60회 게시했으며, 이는 주당 약 4.5회에 해당하며, 감사 당일에도 다시 게시했습니다. ALLDAY PROJECT는 같은 기간 마지막 72일 동안 단 한 번도 게시하지 않았습니다. MEOVV는 현재 ALLDAY PROJECT의 1.6M 팔로워에 비해 3.2M의 TikTok 팔로워를 보유하고 있으며, 게시물당 참여율은 ALLDAY PROJECT가 더 높습니다.",
          evidence: [
            "MEOVV: 해당 기간 60회 게시, 총 811회 게시, 2026년 9월 3일 활동 중",
            "ALLDAY PROJECT: 같은 기간 마지막 72일 동안 0회 게시",
            "비교 대상 7개 계정 모두 2026년 9월 3일에 게시했습니다.",
            "MEOVV는 캡션의 42%에서 멤버를 언급하는 반면, ALLDAY PROJECT는 25%입니다.",
          ],
          counterEvidence: [
            "ALLDAY PROJECT의 10.49% TikTok 참여율은 상위권에 속하므로, 게시물당 결과물은 경쟁력이 있습니다. 격차는 빈도가 아닌 품질입니다.",
          ],
          pivot: {
            title: "최저치를 설정하고 유지하십시오.",
            actions: [
              "릴리스 일정과 관계없이 주당 최소 4회 게시를 유지하십시오.",
              "새로운 음악이 없어도 꾸준함을 유지할 수 있도록, 활동 기간 사이에 활용할 포맷 뱅크를 구축하십시오.",
              "레이블메이트처럼 외부 크리에이터와 트렌드를 활용하십시오. 아이돌 중심의 협업에만 국한되지 마십시오.",
            ],
          },
        },
        {
          id: "member-pairs",
          title: "멤버 페어링은 가장 신뢰할 수 있는 포맷이며 가장 공급이 부족합니다.",
          verdict: "partial",
          confidence: "중간",
          summary: "두 명 이상 멤버를 언급한 게시물은 중앙값이 8,744,382건으로, 멤버를 언급하지 않은 게시물은 2,923,775건, 단일 멤버 게시물은 1,367,382건을 기록했습니다. 전체 48개 게시물 중 단 12개만이 멤버를 언급했습니다. 솔로 콘텐츠는 이봉형적 특성을 보입니다. 계정 내 역대 세 번째로 높은 성과를 기록한 게시물은 단일 멤버 클립으로 13,133,176건을 기록했지만, 솔로 게시물의 중앙값은 계정 평균보다 훨씬 낮습니다.",
          evidence: [
            "두 명 이상 멤버 언급: 중앙값 8,744,382건 (6개 게시물)",
            "한 명의 멤버 언급: 중앙값 1,367,382건 (6개 게시물)",
            "멤버 미언급: 중앙값 2,923,775건 (36개 게시물)",
            "카탈로그 내 단일 멤버 게시물 중 가장 높은 성과를 기록한 게시물은 13,133,176건을 기록했습니다.",
          ],
          counterEvidence: [
            "분석 대상은 구성상 최상위 20%에 해당하므로, 이 중앙값들은 전체 계정 평균이라기보다는 방향성을 나타냅니다. 솔로 콘텐츠의 편차가 크므로, 이 증거만으로는 확장보다는 테스트가 필요한 형식입니다.",
          ],
          pivot: {
            title: "페어링 프랜차이즈를 구축하고, 솔로 콘텐츠를 테스트하십시오.",
            actions: [
              "페어링을 우연에 맡기기보다는, 정기적인 두 멤버 형식의 이름을 정하고 일정을 수립하십시오.",
              "솔로 콘텐츠를 다섯 멤버 전체에 걸쳐 정의된 로테이션을 갖춘 테스트된 영역으로 운영하십시오.",
              "남녀공학 로스터를 의도적으로 활용하십시오. 혼성 페어링은 해당 세트 내에서 비교 대상이 될 수 없는 형식입니다.",
            ],
          },
        },
        {
          id: "no-us-address",
          title: "분석 대상에는 미국 시청자를 대상으로 한 콘텐츠가 전혀 없습니다.",
          verdict: "confirmed",
          confidence: "중간",
          summary: "자체 게시물의 거의 모든 게시물에 한국어 해시태그가 사용되었으며, 등장하는 영어는 시청자를 대상으로 하기보다는 곡의 가사 일부입니다. 비교를 위해 수집된 64개의 KATSEYE 게시물 전체에서 캡션은 미국식 관용구, 미국 브랜드 파트너, 영어 팬덤 이름을 포함한 100% 영어로 작성되었습니다. 미국 청취자 수 384,259명으로 1위인 청취 시장을 고려할 때, 해당 시청자를 위한 콘텐츠가 전혀 없습니다.",
          evidence: [
            "자체 캡션은 분석 대상의 거의 모든 게시물에 한국어 해시태그를 포함하고 있습니다.",
            "KATSEYE 비교 세트: 64개 게시물 전체에 100% 영어 캡션, 한국어 문자 없음, 한국어 해시태그 없음",
            "U.S. is the No. 1 Spotify market at 384,259 listeners and 19.7% of the global total",
            "Instagram 팔로워의 26.8%가 미국 출신이며, 로스앤젤레스는 16.9%로 1위 도시입니다.",
          ],
          counterEvidence: [
            "카탈로그에서 미국 시청자에게 가장 적합한 콘텐츠인 5,374,230건을 기록한 미국 댄스 크루 협업과 2,069,143건을 기록한 웨스턴 리믹스는 한국 자체 댄스 콘텐츠보다 성과가 좋지 않았습니다. 단순히 영어를 추가하는 것은 해결책이 아닙니다. 해결책은 우선 콘텐츠를 게시하는 채널을 확보한 후, 그 위에 미국 시장을 위한 레이어를 추가하는 것입니다.",
          ],
          pivot: {
            title: "기존 스타일을 대체하지 말고, 미국 시장을 위한 레이어를 추가하십시오.",
            actions: [
              "릴리스 에셋에 영어 캡션과 영어 화면 텍스트를 병렬 레이어로 운영하십시오.",
              "모든 것을 번역하기보다는 소수의 형식을 미국 맥락에 맞추십시오.",
              "리듬이 복구된 후에 이를 순차적으로 진행하여, 미국 시장 대상의 레이어가 활성화된 채널에 안착하도록 합니다.",
            ],
          },
        },
      ],
      footnote: "비디오 인텔리전스 스토어는 영구적이며 모든 새로고침 시마다 성장하므로, 코퍼스와 그 결과는 재설정되는 대신 참여 전반에 걸쳐 누적됩니다. 비교 코퍼스는 각 계정의 조회수 기준 상위 게시물이며, 구축 방식에 따라 승자들의 벤치마크 역할을 합니다.",
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
      intro: "2026년 9월 3일, 레이블 사이트, 스토어 및 해당 페이지 소스, 모든 바이오의 모든 링크, 앱 랜딩 페이지, 멤버십 상품, 5개의 미국 소매업체, 4개의 미국 전문 소매업체, 티켓팅 카테고리, 그리고 모든 6개 릴리스의 저작권 표시 등 34개의 자체 소유 표면을 개별적으로 점검했습니다. 결과는 표면별로 기록됩니다. 나타나는 패턴은 일관적입니다. 수집 레이어는 잘 구축되었고 초기에 완성되었으나, 이와 관객 사이의 전환 레이어는 전혀 연결되지 않았습니다.",
      subBlocks: [
        {
          label: "A",
          title: "이미 구축된 것",
          strategy: "이 그룹은 해당 단계의 대부분의 아티스트보다 빠르게 자체 팬 인프라에 투자했으며, 그 결과는 이러한 결정을 정당화했습니다. 본 문서의 처방은 구축을 시작하는 것이 아닙니다. 이미 비용을 지불한 것을 연결하는 것입니다.",
          components: {
            heading: "보유 자산",
            items: [
              "공식 팬덤명 DAY ONE, 수개월 후가 아닌 데뷔 당일에 발표",
              "2025년 7월 7일에 출시된 독점 레이블 팬 앱 DAY OFF는 출시 후 24시간 동안 156개국에서 40,000건의 가입을 기록했으며, 한국 iOS 소셜 네트워킹 부문에서 1위를 차지했습니다.",
              "2025년 11월 24일에 20.83 USD로 출시된 유료 멤버십 상품, 현재 매진됨",
              "앱 내 두 번째 유료 계층, 월 3.99달러에서 17.99달러의 멤버 직접 메시징 기능, 2026년 6월 추가됨",
              "미국으로 배송되며 USD로 가격이 책정되고 약 25개 품목을 취급하는 공식 스토어",
              "5개 수입업체를 통한 광범위한 미국 전문 소매 유통, 모두 적극적으로 재고 보충 중",
              "YouTube 4.31M, Instagram 1.69M, TikTok 1.63M의 자체 보유 관객",
            ],
          },
          kpis: [
            "24시간 동안 156개국에서 40,000건의 앱 가입",
            "현재 가격으로 멤버십 매진",
            "이 관객층에서 이미 검증된 두 개의 유료 계층",
            "그룹 존재 첫날 팬덤명 확정",
          ],
        },
        {
          label: "B",
          title: "자체 데이터 확보",
          strategy: "모든 자체 보유 채널에서 페이지 소스를 포함하여 이메일 또는 SMS 수집 여부를 확인했습니다. 아티스트별 목록은 존재하지 않습니다. 스토어는 레이블 수준 계정 등록의 부수적인 결과로만 주소를 수집하므로, 해당 데이터는 레이블 수준에 있으며 특정 타겟에게 직접적으로 연결되지 않습니다. 이는 문서에서 가장 높은 레버리지를 가진 격차이며, 해결 비용이 저렴하고 다른 모든 수정 사항을 제어하기 때문입니다.",
          components: {
            heading: "채널별 분석",
            items: [
              "예상 도메인에 독립적인 아티스트 웹사이트가 존재한 적이 없으며, 레이블 사이트에는 아티스트 페이지가 없습니다.",
              "스토어 페이지 소스에는 제품 검색 및 계정 로그인이라는 두 가지 양식이 포함되어 있습니다. 소스 어디에서도 제3자 이메일 플랫폼은 나타나지 않습니다.",
              "팔로워 1.69M의 인스타그램 프로필 링크는 2026년 3월에 게시된 뮤직비디오로 연결됩니다.",
              "구독자 4.31M의 유튜브 채널은 여섯 개의 다른 소셜 플랫폼으로 연결될 뿐, 스토어, 앱, 사이트, 데이터 수집 기능은 전혀 없습니다.",
              "앱 랜딩 페이지는 다운로드 전에 이메일 또는 SMS 수집 없이 스토어 버튼만 제공합니다.",
              "어떤 채널에서도 SMS 프로그램은 발견되지 않았습니다.",
            ],
          },
          kpis: [
            "확인된 모든 자체 보유 채널에서 아티스트 수준의 이메일 수집은 전혀 이루어지지 않았습니다.",
            "SMS 수집은 전혀 없습니다.",
            "자체 보유 소셜 채널에서 커머스, 앱 또는 데이터 수집 목적지로 연결되는 링크는 전혀 없습니다.",
            "샘플링된 콘텐츠에서 2026년 3월에 앱 다운로드 콜 투 액션이 한 건 기록되었습니다.",
          ],
        },
        {
          label: "C",
          title: "라이브 비즈니스 및 멤버십 게이팅 대상",
          strategy: "멤버십은 티켓팅 권한이 부여되지 않은 채 매진되었으며, 이는 아직 게이팅할 대상이 없기 때문입니다. 해당 그룹은 세 개의 독립적인 출처를 통해 확인된 바, 어떤 시장에서도 콘서트, 팬 미팅 또는 쇼케이스의 헤드라이너로 참여한 적이 없습니다. 세 개의 제3자 페스티벌 예약이 가을 일정에 잡혀 있지만, 그룹 자체의 행사는 없습니다. 한편, 레이블은 다른 아티스트를 위해 동일한 스토어프론트에서 작동하는 직접 티켓 판매 카테고리를 운영하고 있으므로, 시스템은 존재하지만 아직 이 그룹에 적용되지 않았습니다.",
          components: {
            heading: "현재 상황",
            items: [
              "현재까지 어떤 시장에서도 헤드라인 쇼, 팬 미팅 또는 쇼케이스는 없습니다.",
              "2026년 가을 일정에는 세 개의 제3자 예약이 포함되어 있습니다: 9월의 음악 시상식과 10월의 두 개의 페스티벌입니다.",
              "현재까지 두 번의 미국 출연이 있었으며, 두 번 모두 같은 장소에서 공동 출연하는 페스티벌 무대였습니다.",
              "레이블의 스토어프론트는 다른 아티스트를 위해 약 18개의 항목이 있는 라이브 직접 티켓 판매 카테고리를 운영하고 있으며, 이 그룹을 위한 항목은 없습니다.",
              "데뷔 14개월이 지나도록 응원봉 출시 또는 발표가 없었으며, 같은 판매처에서 세 명의 레이블 동료는 응원봉을 판매 중입니다.",
              "일본 데뷔, 쇼케이스 또는 일본어 릴리스 없음",
            ],
          },
          kpis: [
            "첫 헤드라인 공연과 첫 응원봉은 현재 매진된 멤버십이 연결할 수 있는 두 가지 상품입니다.",
            "티켓 판매 시스템은 이미 레이블 수준에 존재하며 구축이 아닌 연결만 필요합니다.",
            "현재까지 두 번의 미국 공연이 있었으며, 모두 공동 페스티벌 라인업에 참여했습니다.",
          ],
        },
        {
          label: "D",
          title: "미국 시장 구조 및 리테일",
          strategy: "미국은 이 그룹의 1위 청취 시장이며 전적으로 수입 채널을 통해 서비스됩니다. 실물 음반은 5개의 전문 수입업체와 일반 마켓플레이스 목록을 통해 미국 구매자에게 전달되며, 맞춤형 미국 리테일 프로그램, 독점 에디션, 미국 팝업 스토어는 없습니다. 구조적인 측면도 마찬가지입니다. 모든 6개 릴리스의 저작권 표기에는 레이블만 명시되어 있으며, 레이블 동료들은 명명된 미국 파트너를 포함합니다.",
          components: {
            heading: "조사 결과",
            items: [
              "미국 대중 리테일: 수입업체를 통해 두 개의 일반 마켓플레이스에 입점; 레이블 동료가 세 가지 리테일 독점 에디션을 판매하는 두 개의 전문 음악 리테일러에는 입점하지 않음",
              "카탈로그 어디에도 미국 독점 버전, 리테일러 독점, 또는 사인 에디션 없음",
              "현재까지 세 번의 팝업 행사가 실행되었으며, 두 번은 서울, 한 번은 도쿄에서 진행되었습니다. 미국에서는 진행된 바 없습니다.",
              "모든 6개 릴리스의 저작권 표기에는 레이블만 명시되어 있습니다. 레이블 동료들은 릴리스에 명명된 미국 레이블 파트너를 포함합니다.",
              "미국 예약 에이전트, 홍보 담당자 또는 관리 구조가 확인되지 않음",
              "미국 라디오, 싱크 배치 또는 텔레비전 출연 기록 없음",
            ],
          },
          kpis: [
            "수입 채널만으로 384,259명의 미국 월간 청취자에게 서비스됨",
            "단일 리테일러에서 레이블 동료의 세 가지 독점 상품에 비해 미국 리테일 독점 상품 제로",
            "아시아에서 세 번 실행된 팝업에 비해 미국 팝업 제로",
            "레이블의 미국 인지도는 사상 최고치를 기록하고 있으며 아직 이 그룹에게는 확장되지 않았습니다.",
          ],
        },
      ],
      footnote: "2026년 9월 3일에 34개의 플랫폼을 개별적으로 확인하고 플랫폼별로 기록했습니다. 플랫폼에 접근할 수 없는 경우 추론 대신 미확인으로 기록됩니다. 다섯 개의 플랫폼은 확인할 수 없었으며 위의 모든 주장에서 제외됩니다.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "철학",
      title: "핵심 전략 및 철학",
      thesis: "이 비즈니스에서 가장 어려운 부분은 이미 완료되었습니다. 이 팬덤은 동종 최고 수준의 전환율을 보이며, 시장에 제품이 없는 9개월 동안에도 계속 성장했습니다. 본 계획의 어떤 부분도 음악이나 아티스트의 정체성 변화를 요구하지 않습니다. 기존 채널을 재가동하고, 이미 존재하는 인프라를 연결하며, 매진된 멤버십에 게이트 역할을 부여하고, 이미 지도상에서 1위인 시장을 향하도록 모든 것을 집중시킵니다.",
      hierarchy: [
        {
          label: "채널 재시작 (기반, 즉시)",
          description: "본 문서에서 가장 저렴하고 빠른 레버리지입니다. 주간 고정적인 운영, 이미 코퍼스에서 가장 높은 순위를 기록하는 포맷 조합, 그리고 모든 릴리스 에셋에 대한 반복적인 행동 촉구. 이는 새로운 전략이나 새로운 제작 예산을 요구하지 않으며, 지연되는 매주마다 경쟁 그룹은 복리 효과를 누리게 됩니다.",
        },
        {
          label: "전환 인프라 (기반, 상시 운영)",
          description: "수집 레이어를 팬덤과 연결합니다: 미국 내 퍼스트 파티 이메일 및 SMS 수집, 모든 소유 채널에 걸친 라이브 링크 그래프, 그리고 가장 큰 팬덤을 보유한 플랫폼에서 연결되는 앱. 이는 곡과 무관합니다. 다음 컴백, 첫 투어, 그리고 이후의 모든 릴리스를 지원합니다.",
        },
        {
          label: "DSP 복구 (증폭기)",
          description: "이전 카탈로그가 보유했던 에디토리얼 영향력을 재구축합니다. 여기에는 비정상적으로 높은 피크 포지션을 달성했던 K-팝 외의 배치도 포함되며, 론칭 커브에서 누락된 것으로 나타난 2주차부터 6주차까지의 지속 메커니즘을 구축합니다. 이곳에서 리스너 수가 회복됩니다.",
        },
        {
          label: "라이브 비즈니스 및 미국 구조 (증폭기, 최고 천장)",
          description: "첫 헤드라인 공연, 응원봉, 사전 판매를 게이트하는 멤버십, 그리고 이 세 가지를 모두 지원하는 미국 내 구조. 아직 천장이 설정되지 않은 레이어이며, 팬덤이 이미 기꺼이 비용을 지불할 것임을 증명한 레이어입니다.",
        },
      ],
      messaging: [
        "처방 전 감사: 08항부터 11항까지의 모든 권장 사항은 02항부터 06항까지의 측정된 격차로 추적됩니다.",
        "먼저 재시작하고, 두 번째로 재구축합니다. 운영 주기는 그 이후의 모든 것의 전제 조건입니다.",
        "구축하기 전에 연결합니다. 본 계획에 필요한 대부분은 이미 비용이 지불되었고 준비되어 있습니다.",
        "미국은 미래의 확장 시장이 아니라 이미 존재하는 1위 시장처럼 홍보됩니다.",
        "모든 항목은 최악, 예상, 최상의 경우를 포함하며, 모든 전술은 확장 전에 테스트됩니다.",
      ],
      footnote: "기반 작업 흐름은 릴리스 일정과 관계없이 매주 실행됩니다. 증폭기 강도는 릴리스 및 라이브 일정에 따라 달라집니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fan Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "전환",
      title: "수직 1 / 팬 전환 인프라",
      philosophy: "새로운 것을 구축하기 전에 이미 존재하는 레이어를 연결합니다.",
      intro: "06항에서는 강력한 수집 레이어를 발견했지만, 그것과 팬덤 간의 연결이 없었습니다. 본 수직은 그 격차를 해소합니다. 이는 본 계획에서 가장 저렴한 작업이며, 릴리스 일정과 관계없이 매주 실행되고, 이후의 모든 수직은 이것이 제자리에 있는 것에 의존합니다.",
      subBlocks: [
        {
          label: "A",
          title: "미국 내 퍼스트 파티 데이터 확보",
          objective: "현재 존재하지 않는, 그룹의 최대 청취 시장을 위한 주소 지정 가능한 자체 리스트 구축",
          strategy: "실질적인 인센티브를 통해 이메일과 휴대폰 번호를 수집하고, 기존 앱과 경쟁하기보다는 앱으로 연결하는 단일 미국 내 목적지 구축. 한국의 동의 법규는 번들 가입을 제한하므로, 미국 리스트는 국내 흐름의 확장이 아닌 자체 규정 준수 프로그램으로 구축됩니다. 한국 번호에서 실패하는 이중 동의(double opt-in) 흐름은 처음부터 SMS 프로그램을 미국 번호로 범위 지정하여 피합니다.",
          components: {
            heading: "구축",
            items: [
              "이메일 및 SMS 수집을 위한 미국 내 목적지, 변경되지 않는 안정적인 URL에서 라이브 운영",
              "청중이 이미 원한다고 입증된 것과 연계된 인센티브: 사전 판매 접근 권한, 드롭 알림, 실물 상품 선공개",
              "수집 후 DAY OFF 앱으로 연결하여 앱 설치를 유도하고 리스트를 자체 소유로 유지",
              "동의 및 선호도 처리는 미국 번호로 범위 지정하고 국내 흐름과 분리하여 관리",
              "첫 주부터 리스트 성장, 소스 기여도, 다운스트림 전환에 대한 보고",
            ],
          },
          kpis: [
            "현재 기준선이 제로인 측정 가능한 자체 미국 리스트",
            "채널별 및 캠페인별 추적되는, 도달 1천명당 확보율",
            "확보 흐름에서의 앱 설치 기여도",
            "첫 번째 플라이트에서 벤치마크로 설정된, 확보된 연락처당 비용",
          ],
        },
        {
          label: "B",
          title: "링크 그래프",
          objective: "모든 자체 채널이 측정 가능한 곳으로 연결되도록 함",
          strategy: "감사 결과, 4.31백만 명의 구독자를 보유한 채널이 다른 소셜 플랫폼으로만 연결되고, 1.69백만 명의 팔로워를 가진 계정의 바이오 링크가 몇 달 전 영상으로 연결되는 것을 발견했습니다. 이는 현재 막다른 길로 끝나는 무료 도달입니다. 이를 수정하는 데는 제작 예산이나 채널 접근 권한 외의 승인이 필요하지 않습니다.",
          components: {
            heading: "실행",
            items: [
              "모든 바이오에 배포되고 현재 우선순위에 따라 고정된 일정으로 업데이트되는 단일 관리형 허브 링크",
              "스토어, 앱, 확보 목적지를 소셜 세트와 함께 포함하도록 YouTube 채널 링크 재구축",
              "스토어, 멤버십, 앱을 서로로부터가 아닌 가장 큰 잠재고객을 보유한 채널에서 노출",
              "릴리스 에셋에 제목과 날짜를 포함하는 반복적인 엔드 카드, 1~2초로 표준화",
              "첫 링크부터 UTM 및 속성 추적을 적용하여 트래픽을 가독성 있게 만듦",
            ],
          },
          kpis: [
            "각 자체 채널에서 자체 목적지로의 클릭률, 현재 측정 불가",
            "릴리스 에셋에서 행동 촉구(call to action)를 포함하는 게시물 비율, 현재 10%에서 지속적인 다수로 향상",
            "소셜에서 스토어 및 앱으로의 트래픽, 출처별 속성 추적",
          ],
        },
        {
          label: "C",
          title: "멤버십, 상품 및 해당 상품이 제공하는 혜택",
          objective: "매진된 멤버십에 갱신 이유와 다음 단계로 나아갈 수 있는 사다리를 제공하십시오.",
          strategy: "혜택이 부착되지 않은 채 매진된 멤버십은 수요 신호이지 완성된 제품이 아닙니다. 해야 할 일은 이미 구매 의사를 보인 가치를 부착하고, 카탈로그에서 가장 눈에 띄는 단일 제품 공백을 메우는 것입니다.",
          components: {
            heading: "프로그램",
            items: [
              "멤버십에 부착된 사전 판매 혜택, 라이브 날짜가 존재하는 순간 활성화",
              "이 그룹에는 아직 없지만 세 명의 레이블메이트는 보유하고 있는 표준 팬덤 상품인 응원봉 프로그램",
              "공개된 멤버십 기간 및 갱신 경로를 통해 제품이 단일 판매가 아닌 라이프사이클을 갖도록 함",
              "무작위가 아닌 릴리스 및 라이브 순간에 맞춰진 회원 전용 드롭",
              "미국 내 잠재 고객 비율에 맞춰 미국 배송 및 가격 검토",
            ],
          },
          kpis: [
            "멤버십 갱신율, 현재 미확립",
            "멤버십과 실물 상품 간의 결합률",
            "멤버십, 다이렉트 메시징 등급 및 상품 전반에 걸친 회원당 수익",
          ],
        },
      ],
      footnote: "이 세로축은 지속적으로 운영되며 릴리스 기간에 묶이지 않습니다. 이는 09항부터 11항까지의 유료, DSP 및 라이브 작업의 전제 조건입니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / Short-Form Restart
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "숏폼",
      title: "세로축 2 / 숏폼 재시작",
      philosophy: "가장 높은 순위를 기록한 코퍼스 포맷으로 재개. 프로덕션 전 재할당.",
      intro: "섹션 05는 비교 세트 상단에서 10.49%의 TikTok 참여율을 기록했으며 72일 동안 게시물은 0건이었습니다. 게시물당 제품은 경쟁력이 있습니다. 격차는 빈도와 할당이며, 둘 다 새로운 크리에이티브 방향이나 추가 프로덕션 비용 없이 수정 가능합니다.",
      subBlocks: [
        {
          label: "A",
          title: "게시 빈도 하한선",
          objective: "신곡 유무에 관계없이 유지되는 주간 게시 리듬으로 복귀.",
          strategy: "모든 비교 계정은 이 감사 당일에 게시되었으며, 주당 2.5회에서 21회까지의 빈도로 게시되었습니다. 첫 번째 단계는 활동이 뜸한 기간에도 유지되는 하한선이며, 활동 기간 사이를 위한 포맷 뱅크로 공급됩니다.",
          components: {
            heading: "구축",
            items: [
              "릴리스 일정에 관계없이 주당 최소 4회 게시 하한선 유지",
              "활동 기간 사이를 위한 포맷 뱅크로, 컴백이 시장에 있을 때 게시 빈도가 의존하지 않도록 함",
              "새로운 방향보다는 코퍼스가 이미 가장 높은 순위를 기록한 분야에 가중치를 둔 오프닝 믹스",
              "가장 높은 중앙값을 반환하고 현재 가장 공급이 부족한 포맷인 명명된 2인조 페어링 프랜차이즈",
              "현재 증거에 기반한 확장보다는 실험으로 운영되는 5명의 멤버 전체에 걸친 테스트된 솔로 로테이션",
            ],
          },
          kpis: [
            "주당 게시물 수, 0회부터 지속적으로 4회 이상",
            "계정 자체의 일시 중단 전 기준 대비 게시물당 중앙값 조회수",
            "현재 10.49% 이상으로 유지되는 참여율",
            "명명된 멤버가 포함된 출력 점유율, 25% 이상",
          ],
        },
        {
          label: "B",
          title: "플랫폼 재할당",
          objective: "가장 적은 대상이 아닌 가장 큰 소유 고객에게 가장 많이 제공.",
          strategy: "Instagram은 21개의 페어링된 게시물 중 18개를 1.47배 중앙값으로 획득했으며, YouTube Shorts는 TikTok 팔로워의 2.7배를 보유한 채널에서 0.27배를 반환합니다. 재할당은 이미 존재하는 도달 범위를 포착하며 추가적인 프로덕션이 필요하지 않습니다.",
          components: {
            heading: "실행",
            items: [
              "Instagram은 미러 피드가 아닌 자체 게시 결정으로 기본 플랫폼으로 관리",
              "해당 채널의 구독자 기반을 위해 구축된 YouTube Shorts 포맷 테스트, 확장 결정 전 60일 동안 측정",
              "플랫폼을 넘나들지 못했던 백카탈로그 히트작을 보지 못했던 플랫폼으로 이동",
              "하우스 스타일에 미국 시장을 겨냥한 콘텐츠 레이어를 추가하되, 이는 기존 방식이 복구된 후에 적용되며 절대 대체하지 않습니다.",
            ],
          },
          kpis: [
            "Instagram 대비 TikTok 성과 비율 (쌍으로 게시된 게시물별 추적)",
            "YouTube Shorts의 자체 기준선 0.27배 대비 중앙값",
            "기존 콘텐츠의 교차 게시를 통해 회수된 도달 범위 (추가 제작 비용 없음)",
          ],
        },
        {
          label: "C",
          title: "유료 소셜, 미국 집행",
          objective: "유기적 데이터에서 이미 효과가 있다고 파악된 콘텐츠에 측정된 지출을 집중합니다.",
          strategy: "유료 집행은 기존 방식이 복구되고 캡처가 활성화된 후에만 진행되므로, 지출이 활성 채널에 도달하여 단순 조회수를 넘어 자체 리스트로 전환됩니다. 타겟팅은 미국 시장 비중이 높은 Instagram 오디언스 프로필에 기반합니다. 모든 라인은 확장 전에 낮은 지출로 테스트되며, 최악, 예상, 최상의 시나리오가 사전에 명시됩니다.",
          components: {
            heading: "프로그램",
            items: [
              "첫 번째 집행에서는 목적에 맞게 제작된 광고 대신, 유기적으로 검증된 성과가 좋은 콘텐츠를 활용합니다.",
              "Instagram 오디언스 프로필 기반 타겟팅: 미국 주요 도시, 25-34세 중심, 성별 균형",
              "동남아시아 및 라틴 아메리카를 위한 TikTok 프로필 기반의 두 번째 오디언스를 별도로 운영합니다.",
              "전환 목표는 프로필 방문이 아닌 캡처 대상지로 설정합니다.",
              "모든 라인에 대해 테스트 후 확장 원칙을 적용하며, 결과는 사전에 명시된 시나리오와 비교하여 보고합니다.",
            ],
          },
          kpis: [
            "연락처당 획득 비용",
            "시장별 및 콘텐츠별 도달 1천 건당 비용",
            "유료 집행으로 인한 팔로워 및 리스트 성장 (유기적 성장과 분리)",
          ],
        },
      ],
      footnote: "이 세로 부문의 유료 활동은 기존 방식과 캡처 대상지가 활성화된 후에 의도적으로 순차적으로 진행됩니다. 활성화되지 않은 채널에 지출하는 것은 이 섹션에서 피하고자 하는 유일한 것입니다.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Recovery
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "세로 부문 3 / DSP 회복",
      philosophy: "편집 영향력은 이미 확보된 바 있습니다. 이를 재건하는 것은 검증된 경로이지, 추측에 기반한 것이 아닙니다.",
      intro: "03 섹션은 과거에 확보했던 1,377만 건의 편집 도달 범위를 현재 활성 상태인 146,835건과 비교 측정했으며, 4일 이내에 최고점을 찍고 절대 배가 되지 않는 출시 곡선을 보였습니다. 이는 서로 다른 두 가지 문제이며 각각 다른 해결책이 필요하지만, 현재 카탈로그로 모두 해결 가능합니다.",
      subBlocks: [
        {
          label: "A",
          title: "편집 영향력 재건",
          objective: "과거에 해당 카탈로그가 확보했던 플레이스먼트를 회복합니다.",
          strategy: "과거 38개의 에디토리얼 플레이리스트가 이 카탈로그를 지원했으며, 여기에는 최고 순위 1위 및 3위를 기록한 플래그십 K-pop 리스트도 포함됩니다. 현재 4개가 활성화되어 있습니다. 플레이스먼트가 목표가 아닌 선례이며, 리텐션 데이터가 에디토리얼 팀에게 재추가할 이유를 제공하기 때문에 피치 제안의 근거가 매우 강력합니다.",
          components: {
            heading: "프로그램",
            items: [
              "과거 카탈로그가 보유했던 플래그십 리스트를 대상으로 한 구조화된 피치 사이클",
              "모든 피치에서 리텐션 데이터가 주도적이었습니다. 해당 카탈로그는 프로모션 없이도 주당 약 1.60M 스트림을 유지하고 있습니다.",
              "프로모션 싱글이 아닌 앨범 수록곡이 최고 순위의 15.1%를 차지하며 우선순위 트랙으로 자리매김했습니다.",
              "플레이리스트 성과를 주간 단위로 추적하여 추가 및 삭제를 늦게 발견하는 대신 가시적으로 확인할 수 있습니다.",
            ],
          },
          kpis: [
            "현재 활성화된 에디토리얼 도달 범위: 146,835에서 과거 보유했던 13.8M을 향해",
            "에디토리얼 플레이리스트 수: 현재 4개에서 증가",
            "에디토리얼 플레이스먼트에 기인하는 주간 스트림 점유율",
          ],
        },
        {
          label: "B",
          title: "비(非) K-Pop 에디토리얼 확장",
          objective: "카탈로그의 최고 순위를 기록했던 크로스오버 채널을 재개방합니다.",
          strategy: "과거 에디토리얼 도달 범위 약 1.4M은 K-pop 외 팝 무드 리스트, 힙합 및 R&B, 일반 팝 리스트, 게이밍 버티컬에 분포되어 있었습니다. 해당 플레이스먼트들은 K-pop 플레이스먼트보다 우수한 최고 순위 5, 6, 8, 9, 18위를 기록했습니다. 이 채널은 검증되었으나 현재 사용되지 않고 있습니다.",
          components: {
            heading: "목표",
            items: [
              "팝 및 무드 리스트: 과거 카탈로그가 6위로 최고 순위를 기록했던 곳",
              "힙합 및 R&B 버티컬: 과거 딥컷이 18위로 최고 순위를 기록했던 곳",
              "게이밍 버티컬: 음악 발견 영역 밖에 있는 완전히 새로운 잠재 고객에게 도달",
              "과거 카탈로그를 지원했던 8개 지역의 New Music Friday",
              "장르 분류가 아닌 그룹의 프로덕션 정체성에 기반한 에디토리얼 프레이밍",
            ],
          },
          kpis: [
            "확보된 비(非) K-pop 플레이스먼트: 현재 기준 1개 대비",
            "과거 크로스오버 플레이스먼트가 도달했던 시장에서의 리스너 성장",
            "비장르 차트 최고 순위 달성",
          ],
        },
        {
          label: "C",
          title: "출시 후 지속",
          objective: "출시 4일 이후에도 신곡이 계속 발견될 수 있는 기간 연장",
          strategy: "현재까지 모든 발매곡은 2일차에서 4일차 사이에 최고 순위를 기록하고 안정화됩니다. 비교 대상 아티스트들은 2주차부터 9주차 사이에 최고 순위를 기록하며 1.9배에서 3.4배까지 증가합니다. 이 차이는 2주차부터 시작되는 지속 레이어인데, 이 그룹은 아직 어떤 발매곡에도 이를 적용한 적이 없습니다.",
          components: {
            heading: "실행 방안",
            items: [
              "모든 발매 전에 확정되는 2주차부터 6주차까지의 콘텐츠 및 유료 지속 계획",
              "매주 484,056회의 스트리밍을 기록하는 스테디셀러 데뷔곡을 활용한 발매 관련 카탈로그 활성화",
              "자체 보유 리스트가 생성되면 해당 리스트를 대상으로 사전 저장 및 사전 추가 프로그램 실행",
              "라이브 및 리테일 일정과 발매 시기를 조율하여 세 가지가 경쟁하기보다는 서로 강화되도록 함",
            ],
          },
          kpis: [
            "현재 최고치인 1.21배에서 업계 평균 범위로의 최고 주차 대비 출시 주차 배수",
            "현재 하락 추세에 대비한 발매곡당 차트 주차 수",
            "11월 컴백이 기록한 +42.0%를 기준으로 발매 후 2주간 카탈로그 성장률",
          ],
        },
      ],
      footnote: "본 계획에서는 스트리밍 성과를 보장하지 않습니다. 본 항목의 모든 내용은 실행 전에 최악, 예상, 최상의 시나리오가 명시된 검증된 프로그램으로 범위가 설정됩니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / Live Business & U.S. Structure
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "라이브 & 미국",
      title: "세로 4 / 라이브 비즈니스 & 미국 구조",
      philosophy: "아직 상한선이 설정되지 않은 레이어로, 이미 1위인 시장을 공략합니다.",
      intro: "이것은 본 문서에서 가장 높은 잠재력을 지녔지만 가장 탐구되지 않은 영역입니다. 해당 그룹은 아직 헤드라이너 공연을 한 적이 없으며, 미국은 가장 큰 청취 시장임에도 불구하고 이를 지원할 구조가 없습니다. 팬덤은 이미 접근 권한에 대해 비용을 지불할 의사가 있음을 보여주었습니다. 여기서 언급된 수요는 추측이 아닙니다. 이는 아무런 권리도 부여되지 않은 멤버십을 구매한 팬덤입니다.",
      subBlocks: [
        {
          label: "A",
          title: "첫 헤드라이너 순간",
          objective: "야망이 아닌 검증된 수요에 맞춰 규모를 조절하여 그룹 자체 라이브 상품 구축",
          strategy: "첫 헤드라이너 순간은 의도적으로 소규모로 기획되어 매진되는 것을 목표로 하며, 대규모로 진행되어 티켓이 남는 것을 지양합니다. 적절한 규모의 미국 쇼케이스는 가장 큰 청취 시장을 확보하고, 멤버십 회원에게 사전 판매 우선권을 부여하며, 이후 모든 투어 결정의 기반이 되는 수요 데이터를 생성합니다. 페스티벌 참여는 도달 범위를 넓히기 위해 병행되지만, 자체 공연장을 대체할 수는 없습니다.",
          components: {
            heading: "순서",
            items: [
              "A first U.S. showcase in Los Angeles, the group's largest U.S. city on both Spotify and Instagram",
              "멤버십이 최초로 제공하는 혜택으로서의 멤버십 사전 판매",
              "모든 티켓 거래에서 실행되는 수집 기능으로, 라이브 관객이 자체 보유 리스트가 되도록 함",
              "추측에 기반한 경로 설정 대신, 첫 번째 공연장의 수요 데이터를 사용하여 두 번째 공연장의 규모를 산정함",
              "기존 가을 페스티벌 예약 건을 라이브 계획으로 취급하는 대신, 자체 보유 날짜 홍보에 활용함",
            ],
          },
          kpis: [
            "첫 자체 보유 날짜의 판매율 및 매진 소요 시간",
            "멤버 대상 사전 판매 전환율",
            "티켓당 확보된 연락처 수",
            "티켓 구매자 데이터를 기반으로 한 지역별 수요 지도, 다음 경로 결정에 활용",
          ],
        },
        {
          label: "B",
          title: "미국 리테일 및 실물 음반",
          objective: "Convert a 250,071-copy opening week into a U.S. retail program.",
          strategy: "실물 음반은 이 그룹의 입증된 강점이며, 데뷔 시대 업계 논평에서 갖지 못할 것이라고 예측했던 부분입니다. 현재 미국 구매자에게는 수입업체를 통해서만 도달합니다. 독점 에디션이 포함된 전담 미국 리테일 프로그램은 해당 그룹이 입점하지 않은 리테일러에서 이미 레이블 동료가 성공적으로 운영 중인 표준적이고 저위험 전략입니다.",
          components: {
            heading: "프로그램",
            items: [
              "현재 카탈로그가 없는 두 음악 리테일러에서의 전담 미국 리테일 입점",
              "현재 카탈로그에 없는 미국 독점 및 사인 에디션",
              "아시아에서 이미 세 차례 실행된 모델을 따라 쇼케이스 시점에 맞춰 첫 미국 팝업 스토어 운영",
              "자체 보유 리스트를 대상으로 진행되는 사전 주문 프로그램, 구매 시점에 수집",
            ],
          },
          kpis: [
            "현재 수입업체 채널만을 기반으로 확보된 미국 리테일 판매처",
            "자체 보유 리스트에 기인한 사전 주문 물량",
            "실물 음반 판매량의 첫 주 미국 점유율, 현재 미측정",
          ],
        },
        {
          label: "C",
          title: "보도 및 내러티브",
          objective: "이례적으로 강력한 수상 기록을 미국 내 언론 보도로 연결하십시오.",
          strategy: "수상 기록은 상당하지만 미국 내 언론 노출은 미미합니다. 주목받는 내러티브는 포맷 스토리입니다. 8년 만의 첫 진지한 혼성 그룹으로, 성별 균형이 잘 잡힌 팬덤과 해당 포맷이 예상했던 것보다 뛰어난 실물 음반 판매 실적을 보유하고 있습니다. 이는 미국 시장에서 자연스럽게 통할 수 있는 스토리이며 아직 그곳에서 다뤄지지 않았습니다.",
          components: {
            heading: "각도",
            items: [
              "비교 대상 그룹이 갖지 못한 52대 48의 팬덤 비율에 기반한 혼성 그룹 포맷 스토리",
              "포맷 예측 대비 실물 음반 판매 실적, 구체적이고 검증 가능한 반박 내러티브",
              "프로덕션 정체성과 현재 최고조에 달한 레이블의 미국 내 인지도",
              "지속적인 보도보다는 쇼케이스 시점에 맞춰진 미국 내 장기 보도 음악 및 문화 언론",
            ],
          },
          kpis: [
            "확보된 미국 최상위 및 차상위 매체 노출",
            "출시 요약보다는 포맷 내러티브를 전달하는 보도 점유율",
            "각 매체 노출 주변의 미국 내 검색 및 소셜 반응 상승",
          ],
        },
      ],
      footnote: "라이브 공연 규모는 의도적으로 보수적으로 책정됩니다. 첫 번째 공연장은 검증된 수요에 맞춰 매진될 수 있도록 규모를 정하며, 이후 모든 공연 경로 결정은 이전 공연장의 데이터를 기반으로 이루어집니다.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 워크스트림",
      philosophy: "명확한 업무 분담. Crowd Control Digital은 A&R, 아티스트 관계, 또는 크리에이티브 디렉션에 관여하지 않습니다.",
      intro: "아래 워크스트림은 레이블 및 파트너와 함께 진행됩니다. 이들은 08항부터 11항까지의 계획이 이에 의존하고 순서가 중요하기 때문에 나열된 것이지, Crowd Control Digital의 범위에 포함되기 때문은 아닙니다.",
      subBlocks: [
        {
          label: "A",
          title: "릴리스 캘린더",
          strategy: "이 문서의 모든 것은 릴리스를 기준으로 더 나은 성과를 보입니다. 소비 데이터는 명확합니다. 제대로 된 컴백은 백 카탈로그를 42.0% 상승시킨 반면, 브랜드 지원 싱글은 -9.8%를 기록했습니다. 가장 가치 있는 결정은 확정된 릴리스 날짜이며, 이는 기반 작업을 유지 보수에서 출시로 전환시키기 때문입니다.",
          components: {
            heading: "레이블 보유",
            items: [
              "다음 시대의 릴리스 날짜 및 캠페인 범위",
              "트랙 선정 (제 3절의 리텐션 데이터 활용)",
              "자산 전달 시점 (제 13절의 타임라인 설정)",
            ],
          },
        },
        {
          label: "B",
          title: "팬 플랫폼 및 상품",
          strategy: "앱, 멤버십 및 상품군은 레이블 소유이며 이미 운영 중입니다. 제 8절의 작업은 이를 대체하는 것이 아니라 연결됩니다.",
          components: {
            heading: "레이블 보유",
            items: [
              "앱 로드맵 및 멤버십 등급 구조",
              "응원봉 개발 및 생산 타임라인",
              "상품군, 가격 책정 및 해외 이행",
            ],
          },
        },
        {
          label: "C",
          title: "브랜드 파트너십",
          strategy: "기존 파트너십 명단은 상당하며, 7.2배 지수로 운영되는 명품 선호도를 고려할 때 잠재 고객 데이터는 확장을 지지합니다. 제 5절에서는 파트너 콘텐츠를 메인 릴리스 문법을 통하는 것이 아니라 자체 스트림으로 운영할 것을 권고합니다.",
          components: {
            heading: "레이블 및 Transparent Arts 보유",
            items: [
              "파트너 선정, 협상 및 계약",
              "캠페인 크리에이티브 디렉션 및 승인",
              "Transparent Arts가 관계를 보유한 미국 브랜드 소개",
            ],
          },
        },
        {
          label: "D",
          title: "미국 구조 및 관계",
          strategy: "Transparent Arts는 미국 내 매니지먼트, 홍보 및 관계 인프라를 보유합니다. Crowd Control Digital은 퍼포먼스 마케팅, 측정 및 지출 규율에 기여합니다. 두 주체는 상호 보완적이며 중복되는 부분이 없습니다.",
          components: {
            heading: "Transparent Arts 보유",
            items: [
              "미국 내 매니지먼트 및 현장 대행",
              "미국 내 홍보 관계 및 장기 홍보",
              "라이브 예약, 공연장 관계 및 프로모터 소개",
              "미국 내 실물 프로그램 관련 소매 관계",
            ],
          },
        },
      ],
      footnote: "Crowd Control Digital은 A&R 업무를 수행하지 않으며 창작을 지시하지 않습니다. 상기 부서는 파트너십이 기존 참여에 어떻게 작용하는지를 반영합니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "12주간의 오프닝 윈도우입니다. 채널 재시작 및 캡처 대상이 먼저 오는 이유는 모든 다운스트림이 활성 채널 및 자체 리스트에서 더 잘 작동하기 때문입니다. 유료 광고는 비활성 피드로 진입하지 않습니다. 라이브 규모 산정은 실제 수요 데이터를 기다립니다. 주차는 잠정적이며, 확정된 출시일이 존재하면 해당 날짜에 다시 고정됩니다.",
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
        { index: 11, label: "W11", dates: "11월 23일", highlight: true, note: "쇼케이스 (미정)" },
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
          name: "전환 인프라",
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
          name: "유료 소셜 광고",
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
          name: "DSP 수익 회복",
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
            "모든 세 개의 자체 채널에 주간 최소 게시 횟수를 정하여 게시물을 올립니다.",
            "링크 그래프 재구축: 모든 채널에서 프로필, YouTube 채널 링크, 스토어 및 앱을 노출시킵니다.",
            "트래픽 발생 전에 기여도 및 UTM 규정을 적용합니다.",
            "본 계획의 모든 평가 지표에 대한 기준 측정을 확보합니다.",
          ],
        },
        {
          weekIndex: 2,
          title: "캡처 빌드 및 에디토리얼 피치",
          items: [
            "이메일 및 SMS를 포함하고 기존 앱으로 연결되는 미국 캡처 목적지를 구축합니다.",
            "가장 높은 순위를 기록한 코퍼스 레인에서 포맷 뱅크를 조립하여 신곡 없이도 일정한 발행 주기를 유지합니다.",
            "이전에 카탈로그가 보유했던 플래그십 리스트를 대상으로 에디토리얼 피치 주기가 시작됩니다.",
            "2인조 페어링 프랜차이즈의 명칭을 정하고 일정을 수립합니다.",
          ],
        },
        {
          weekIndex: 3,
          title: "캡처 라이브 시작",
          items: [
            "안정적인 URL에서 미국 캡처 목적지가 라이브되며, 모든 자체 채널에서 링크됩니다.",
            "릴리스 에셋을 기반으로 1~2초 길이의 엔드 카드를 표준화하여 타이틀과 날짜를 표시합니다.",
            "첫 테스트 전에 유료 계정 구조 및 픽셀 검증을 완료합니다.",
            "Instagram을 미러링 대신 주요 표면 관리로 전환합니다.",
          ],
        },
        {
          weekIndex: 4,
          title: "유료 테스트 시작",
          items: [
            "테스트 지출로 첫 유료 광고 집행 시작, 검증된 오가닉 성과 기반 크리에이티브 활용",
            "두 개의 타겟 오디언스를 별도로 운영: 미국 중심의 인스타그램 프로필과 동남아시아 및 라틴 아메리카 중심의 틱톡 프로필",
            "전환 목표는 프로필 방문이 아닌 캡처 대상지로 설정합니다.",
            "티켓 수요 신호 및 오디언스 지리 정보에 기반한 실시간 규모 측정 작업 시작",
          ],
        },
        {
          weekIndex: 5,
          title: "편집 콘텐츠 추가 및 실시간 규모 측정",
          items: [
            "첫 편집 콘텐츠 추가 건 추적 및 보고, 비(非) K-pop 타겟 포함",
            "유튜브 쇼츠 포맷 테스트 출시, 60일 측정 기간 개시",
            "쇼케이스 장소 옵션은 야심보다는 검증된 수요 데이터에 기반하여 규모 측정",
            "획득된 연락처당 비용을 실무 벤치마크로 설정",
          ],
        },
        {
          weekIndex: 6,
          title: "중간 검토",
          items: [
            "1주차에 확보된 모든 기준선에 대한 전체 검토",
            "예상치를 달성한 유료 광고 라인은 유지하고, 달성하지 못한 라인은 축소하지 않고 중단",
            "집행 주기 하한선 감사: 유지 또는 미유지 여부 및 그 사유 확인",
            "쇼케이스 날짜에 맞춰 장기 보도자료 계획 시작",
          ],
        },
        {
          weekIndex: 7,
          title: "유료 광고 확대, 사전 판매 시작",
          items: [
            "테스트를 통과한 광고 라인에 대한 유료 광고 확대 집행, 최악, 예상, 최상의 시나리오 재진술",
            "멤버십 사전 판매 시작, 멤버십이 제공하는 첫 번째 혜택",
            "포맷 서사에 기반한 장기 미국 언론 홍보 시작",
            "응원봉 프로그램 타임라인 레이블과 확정",
          ],
        },
        {
          weekIndex: 8,
          title: "일반 판매 시작",
          items: [
            "일반 판매 시작, 모든 티켓 거래에 대한 정보 수집 진행",
            "사전 판매 벤치마크 대비 판매량 및 매진 소요 시간 추적",
            "미국 리테일 채널과 독점 및 사인반 에디션 관련 논의 개시",
            "실제 상품을 대상으로 최초로 자체 보유 리스트 활용",
          ],
        },
        {
          weekIndex: 9,
          title: "언론 홍보 강화",
          items: [
            "미국 언론 홍보 강화가 쇼케이스 및 포맷 서사와 맞물려 진행",
            "지속적인 콘텐츠 계획은 확정된 릴리스 기간에 맞춰 실행",
            "티켓 구매자 데이터를 기반으로 지역별 수요 지도 작성",
            "1차 결과에 기반한 2차 편집부 제안 진행",
          ],
        },
        {
          weekIndex: 10,
          title: "리테일 및 팝업 스토어",
          items: [
            "미국 리테일 프로그램 확정, 판매처 확보 시 독점 에디션 제공",
            "최초의 미국 팝업 스토어, 쇼케이스 날짜에 맞춰 준비",
            "사전 예약 프로그램은 3주차부터 9주차까지 구축된 자체 보유 리스트를 활용하여 진행",
            "라이브 및 리테일 전환 기간에 맞춰 유료 광고 비중 조정",
          ],
        },
        {
          weekIndex: 11,
          title: "쇼케이스 기간",
          items: [
            "최초의 자체 보유 미국 라이브 이벤트, 모든 접점에서 콘텐츠 확보",
            "팝업 스토어는 병행 운영되며, 방문객을 리스트 및 실물 판매로 전환",
            "현장에서 확보된 콘텐츠는 다음 분기의 포맷 자료로 활용",
            "유료 노출부터 티켓 및 실물 구매까지 전체 퍼널 측정",
          ],
        },
        {
          weekIndex: 12,
          title: "마무리 및 다음 주기",
          items: [
            "모든 기준선 및 사전 명시된 사례에 대한 전체 기간 보고",
            "첫 번째 룸의 수요 데이터를 활용하여 두 번째 룸의 규모를 산정하고 라우팅에 대한 정보를 제공합니다.",
            "분기별 콘텐츠로 비디오 인텔리전스 스토어가 갱신되어 코퍼스가 축적됩니다.",
            "확정된 출시일을 기준으로 다음 사이클 범위를 제안합니다.",
          ],
        },
      ],
      footnote: "주차는 잠정적이며, 확정된 출시일이 존재하면 해당 출시일에 다시 기준을 설정합니다. 쇼케이스 주차는 장소 가용성 및 레이블 승인에 따라 달라지므로 잠정적으로 표시되며, 이 두 가지 모두 본 범위 외부에 있습니다.",
    },
  ],
};
