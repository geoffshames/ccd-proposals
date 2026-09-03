import type { StrategyPlanData } from "../plan-context";

export const keyvitupPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/keyvitup/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "keyvitup", label: "English", code: "EN" }],

  cover: {
    label: "브랜드 감사 및 성장 전략",
    title: "KEYVITUP",
    subtitle: "프로모션이 전혀 이루어지지 않은 시장에서 유입된 론칭 초기 팬덤을 전환하기 위한 계획과 함께, 지난 5개월간의 감사 결과를 담고 있습니다.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "2026년 9월",
    backgroundImage: "/images/keyvitup/keyvitup-group.jpg",
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
      subtitle: "데뷔는 성공적이었습니다. 데뷔를 통해 확보된 팬덤은 프로모션이 전혀 이루어지지 않은 네 개 국가에서 유입되었으며, 이들은 여전히 접근 가능합니다.",
      body: [
        "KEYVITUP debuted on April 8, 2026 with a self-titled EP and moved 84,882 copies in the first week, which placed 83rd across every release of the year by any artist at any career stage, and reached No. 5 on the Circle weekly album chart. The title track has passed a million Spotify streams, the three music videos have passed 13 million YouTube views between them, and the group closed August with the highest median TikTok engagement rate of the six peers analysed here, at 28.96 percent.",
        "흥미로운 점은 청취가 어디에서 발생했는지입니다. 월간 리스너는 5월 9일에 전 세계적으로 265,562명으로 최고치를 기록했습니다. 각 시장별 최고치 기록일을 기준으로 측정했을 때, 인도네시아는 140,221명, 말레이시아는 102,330명, 대만은 31,994명, 태국은 22,477명이었으며, 한국에서의 최고치는 11,665명이었습니다. 본 감사에서 검토된 어떤 자료에서도 해당 네 개 시장에서의 공연, 팬 이벤트, 쇼케이스 또는 미디어 데이 기록은 발견되지 않았습니다. 팬덤은 스스로 모였습니다.",
        "It then dispersed, because nothing was built to hold it. Spotify playlist support was concentrated in the launch window and the two largest placements both ended inside seven weeks. Monthly listeners fell 72.3 percent over the hundred days that followed. There is no email list, no SMS list, no membership, no fan club to join, no store and no lightstick. The fandom has a name, KEYPER, and nowhere to register it.",
        "본 문서는 해당 격차를 상세히 감사하고 이를 해소하는 방안을 제시합니다. 작업 순서는 의도된 것으로, 가장 저렴하고 지속 가능한 방식인 팬덤 확보를 먼저 진행하고, 이미 관심을 보인 시장을 공략하며, 도달률을 재방문으로 전환하는 콘텐츠 시스템을 구축하는 순서입니다. 본 문서의 어떤 내용도 그룹이 현재의 모습을 바꾸도록 요구하지 않습니다. 모든 권장 사항은 그룹이 이미 수행할 수 있음을 증명한 것에 기반합니다.",
      ],
      supports: {
        heading: "본 문서의 내용",
        items: [
          "13개 동종 아티스트 대비 계층별 시장 포지션 (평판이 아닌 실제 소비량 기준)",
          "편집 의존성 분석: 무엇이 추가되었고, 언제 제거되었으며, 비용은 얼마였는지",
          "스트리밍, 숏폼, 조직화된 팬덤 전반에 걸쳐 실제 팬덤이 어디에 있는지",
          "비디오 AI를 통한 123개 영상의 프레임별 분석, 모든 영상에 대한 성과 데이터 통합",
          "모든 소유 자산에 대한 표면별 인프라 감사, 추정이 아닌 검증",
          "4개의 실행 영역 및 12주 타임라인",
        ],
      },
      goals: {
        heading: "12개월 목표",
        items: [
          "기존 수요가 있는 시장에서 확보된, 0부터 시작하는 자체 보유 연락처 기반의 퍼스트 파티 잠재고객",
          "Spotify followers to 120,000, against an unaided trajectory of roughly 87,000, with at least half of net adds attributable to owned capture rather than to playlist traffic",
          "월간 리스너 150,000명 이상 기준 0.40 이상의 팔로워-리스너 비율 유지 (이탈로 인한 수치 달성 불가)",
          "월간 리스너를 기준선 대비 주간 추적 및 약속이 아닌 보고, 5월 최고치 265,562를 기준선으로 설정",
          "동남아시아 첫 프로모션 시장 진출 및 두 번째 EP 첫 주 판매량 160,000장 이상",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Monthly Listeners Since Debut",
          subtitle: "The full daily series from the first tracked day. The two markers are the dates Spotify removed the group from its two largest editorial playlists.",
          unit: "월간 리스너",
          series: [
            {
              name: "월간 리스너",
              points: [
                { x: "4월 12일", y: 28347 },
                { x: "4월 20일", y: 110587 },
                { x: "4월 26일", y: 158978 },
                { x: "5월 3일", y: 223389 },
                { x: "5월 9일", y: 265562 },
                { x: "5월 17일", y: 256506 },
                { x: "5월 27일", y: 248207 },
                { x: "5월 31일", y: 242953 },
                { x: "6월 7일", y: 223208 },
                { x: "6월 14일", y: 209261 },
                { x: "6월 21일", y: 180898 },
                { x: "6월 28일", y: 149018 },
                { x: "7월 5일", y: 123055 },
                { x: "7월 12일", y: 97548 },
                { x: "7월 19일", y: 90047 },
                { x: "7월 26일", y: 81986 },
                { x: "8월 2일", y: 76343 },
                { x: "8월 9일", y: 74967 },
                { x: "8월 17일", y: 73638 },
                { x: "8월 23일", y: 77715 },
                { x: "8월 31일", y: 83749 },
              ],
            },
          ],
          markers: [
            { x: "4월 20일", label: "BIASBOYS 종료" },
            { x: "5월 27일", label: "K-Pop Rising 종료" },
          ],
          note: "5월 9일 265,562 최고치를 기록했으며, 8월 17일 73,638까지 하락하여 100일 동안 72.3% 감소했습니다. 최저점 이후 13.7% 상승하였는데, 이는 KCON LA 효과가 도래했음을 의미합니다.",
          source: "Chartmetric, 2026년 9월 3일",
        },
      ],
      footnote: "본 문서의 모든 스트리밍 수치는 별도 명시가 없는 한 2026년 9월 3일 Chartmetric에서 추출되었습니다. 판매량 수치는 Hanteo 및 Circle 기준입니다. 영상 관련 자료는 본 감사 작업을 위해 구축된 전용 123-video intelligence store에서 가져왔습니다.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "시장",
      title: "시장 내 위치",
      philosophy: "라이브 소비량에 따른 등급 분류가 이루어질 때만 위치는 방어 가능합니다. 14개의 동종 그룹, 하나의 핵심 지표, 세 개의 등급, 그리고 정직한 배치입니다.",
      intro: "The comparison set runs from the class ceiling down to the groups that debuted in the same ninety-day window. Spotify monthly listeners is the spine and the follower-to-listener ratio is the second axis, because at this stage of a career the second number predicts the first. The placement is straightforward: KEYVITUP sits at the bottom of the set on scale and at the top of its own debut cohort on conversion.",
      subBlocks: [
        {
          label: "A",
          title: "등급 지도",
          featureTiersHeading: "비교 대상 그룹, 규모 및 전환율별 등급 분류",
          featureTiers: [
            {
              label: "등급 1 / 최상위",
              artists: [
                {
                  name: "CORTIS",
                  monthlyListeners: "12.9M 월간 리스너",
                  instagram: "5.4M Spotify Followers",
                  reference: "비율 0.422, 2025년 8월 데뷔",
                  note: "그룹별 분류 및 콘텐츠 벤치마크입니다. 해당 카탈로그 전반의 해시태그 데이터는 8개의 별도로 명명된 콘텐츠 시리즈가 병행하여 운영되고 있음을 보여주며, 각 시리즈는 팬이 자체적으로 따라갈 수 있는 프랜차이즈입니다. 신인 그룹이 실제로 복제할 수 있는 것은 레이블이 아니라 바로 그 시스템입니다.",
                },
                {
                  name: "BOYNEXTDOOR",
                  monthlyListeners: "3.3M 월간 리스너",
                  instagram: "2.6M Spotify Followers",
                  reference: "비율 0.798, 2023년 5월 데뷔",
                  note: "이 형식에 대한 전환 모델: 거의 비슷한 규모의 팔로워 기반을 가진 중간 규모의 리스너 기반입니다. 0.798과 0.362 사이의 격차가 실제로 측정하는 것은 3년간의 꾸준한 확보입니다.",
                },
                {
                  name: "RIIZE",
                  monthlyListeners: "2.8M 월간 리스너",
                  instagram: "1.8M Spotify Followers",
                  reference: "비율 0.663, 2023년 9월 데뷔",
                  note: "2년이 채 안 되는 기간 동안 유사한 데뷔 규모를 바탕으로 글로벌 투어 사업을 구축했습니다. 이 분야에서 5인조 그룹의 상한선이 한국 국내에 국한되지 않는다는 증거입니다.",
                },
                {
                  name: "TWS",
                  monthlyListeners: "2.4M 월간 리스너",
                  instagram: "1.4M Spotify Followers",
                  reference: "비율 0.582, 2024년 1월 데뷔",
                  note: "밝고 접근하기 쉬운 팝 정체성을 통해 견고한 스트리밍 기반을 구축했습니다. 안무가 없는 콘텐츠에서 KEYVITUP이 잘하는 것과 가장 가까운 톤적 이웃입니다.",
                },
              ],
            },
            {
              label: "티어 2 / 전환된 팬덤",
              artists: [
                {
                  name: "KickFlip",
                  monthlyListeners: "월간 리스너 457천 명",
                  instagram: "570K Spotify Followers",
                  reference: "비율 1.246, 2025년 1월 데뷔",
                  note: "팔로워 수가 리스너 수보다 많으며, 이는 이 지표에서 완전히 포착된 팬덤의 모습입니다. 도달 범위는 그들의 열린 문제이며, 유지율은 해결되었습니다. KEYVITUP의 거울 이미지입니다.",
                },
                {
                  name: "ZEROBASEONE",
                  monthlyListeners: "월간 리스너 120만 명",
                  instagram: "1.5M Spotify Followers",
                  reference: "비율 1.237, 2023년 7월 데뷔",
                  note: "서바이벌 쇼 팬덤이 거의 완전히 전환되었습니다. 포착이 이루어지면 팔로워 기반이 단일 사이클을 능가한다는 것을 보여줍니다.",
                },
                {
                  name: "NCT WISH",
                  monthlyListeners: "월간 리스너 763천 명",
                  instagram: "918K Spotify Followers",
                  reference: "비율 1.203, 2024년 2월 데뷔",
                  note: "현재 청취량을 초과한 두 번째 팔로워 기반입니다. 차트에서 1.0 이상의 비율이 올바르게 읽히도록 포함되었습니다. 이는 5개월 된 그룹이 측정되어야 하는 벤치마크가 아니라 확립된 팬덤에 속합니다.",
                },
                {
                  name: "AHOF",
                  monthlyListeners: "월간 리스너 191천 명",
                  instagram: "154K Spotify Followers",
                  reference: "비율 0.808, 2025년 7월 데뷔",
                  note: "본 세트에서 가장 교훈적인 비교입니다. 중견 에이전시에서 1년 더 진행된 KEYVITUP의 약 두 배의 리스너와 두 배 이상의 전환율을 보입니다. 이는 현실적인 12개월 목표 지점입니다.",
                },
                {
                  name: "IDID",
                  monthlyListeners: "월간 리스너 142,000명",
                  instagram: "110K Spotify Followers",
                  reference: "비율 0.776, 2025년 2월 데뷔",
                  note: "KEYVITUP과 거의 동일한 규모에 19개월 동안 두 배 이상의 전환율을 보입니다. 두 그룹 간의 차이는 청중 규모가 아니라, 청중을 사로잡기 위해 무엇인가를 구축했는지 여부입니다.",
                },
              ],
            },
            {
              label: "티어 3 / 2026년 데뷔 필드",
              artists: [
                {
                  name: "ALPHA DRIVE ONE",
                  monthlyListeners: "월간 리스너 737,000명",
                  instagram: "334K Spotify Followers",
                  reference: "비율 0.453, 첫 주 144만 명",
                  note: "모든 축에서 코호트의 아웃라이어입니다. 직접적인 비교보다는 클래스 상한선으로 유용합니다.",
                },
                {
                  name: "MODYSSEY",
                  monthlyListeners: "월간 리스너 140,000명",
                  instagram: "53K Spotify Followers",
                  reference: "비율 0.379, 첫 주 302,000명",
                  note: "KEYVITUP 데뷔 5일 후 데뷔했으며 코호트 중 가장 강력한 한국 언론 보도를 이끌어냈습니다. KEYVITUP은 운영하지 않는 두 개의 명명된 콘텐츠 프랜차이즈를 운영하며, 이는 전환율보다는 도달 범위에서 나타납니다.",
                },
                {
                  name: "hrtz.wav",
                  monthlyListeners: "월간 리스너 121,000명",
                  instagram: "30K Spotify Followers",
                  reference: "비율 0.246, 첫 주 27,000명",
                  note: "4월 8일 같은 날 데뷔했습니다. KEYVITUP 첫 주 판매량의 3분의 1을 판매했으며, 거의 동일한 팔로워 수로 현재 45% 더 많은 리스너를 보유하고 있습니다. 도달 범위와 전환율은 분리 가능하며, 이 두 그룹은 반대 방향으로 이를 분리합니다.",
                },
                {
                  name: "VAYONN",
                  monthlyListeners: "월간 리스너 91,000명",
                  instagram: "12K Spotify Followers",
                  reference: "비율 0.138, 첫 주 161,000건",
                  note: "동일 레이블에서 세 달 후, 첫 주 판매량은 거의 두 배 증가했으나 전환율은 절반 이하로 감소했습니다. 가장 중요한 내부 벤치마크이며, 본 계획이 직접적으로 활용하는 기준입니다.",
                },
                {
                  name: "KEYVITUP",
                  monthlyListeners: "월간 리스너 84,000명",
                  instagram: "30K Spotify Followers",
                  reference: "비율 0.362, 첫 주 85,000건",
                  note: "리스너 수에서는 세트 내 최하위, 전환율에서는 데뷔 코호트 내 최상위를 기록했습니다. 전략적 판단은 사람들을 유지하는 시스템이 사람들에게 도달하는 시스템보다 더 잘 작동하며, 이 두 시스템 중 하나만 수정하는 데 비용이 많이 든다는 것입니다.",
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
                    { x: "CORTIS", y: 12873814 },
                    { x: "BOYNEXTDOOR", y: 3255897 },
                    { x: "RIIZE", y: 2751835 },
                    { x: "TWS", y: 2398217 },
                    { x: "ZEROBASEONE", y: 1200784 },
                    { x: "NCT WISH", y: 763292 },
                    { x: "ALPHA DRIVE ONE", y: 737023 },
                    { x: "KickFlip", y: 457320 },
                    { x: "AHOF", y: 190640 },
                    { x: "IDID", y: 141541 },
                    { x: "MODYSSEY", y: 140297 },
                    { x: "hrtz.wav", y: 121468 },
                    { x: "VAYONN", y: 90708 },
                    { x: "KEYVITUP", y: 83811 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "규모가 명확한 약점입니다. KEYVITUP은 14개 아티스트 세트에서 최하위이며, 다음으로 낮은 2025년 데뷔 아티스트보다 1.7배 낮습니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "hbars",
              title: "Fandom Conversion: Spotify Followers per Monthly Listener",
              subtitle: "두 번째 축이며, 초기 단계에서 더 예측 가능한 지표입니다. 0.75 이상은 릴리즈 사이클을 넘어서는 팬덤을 의미합니다. KEYVITUP은 자체 데뷔 코호트에서 선두를 차지하지만, 1년 앞선 그룹들보다는 뒤처져 있습니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "KickFlip", y: 1.246 },
                    { x: "ZEROBASEONE", y: 1.237 },
                    { x: "NCT WISH", y: 1.203 },
                    { x: "AHOF", y: 0.808 },
                    { x: "BOYNEXTDOOR", y: 0.798 },
                    { x: "IDID", y: 0.776 },
                    { x: "RIIZE", y: 0.663 },
                    { x: "TWS", y: 0.582 },
                    { x: "ALPHA DRIVE ONE", y: 0.453 },
                    { x: "CORTIS", y: 0.422 },
                    { x: "MODYSSEY", y: 0.379 },
                    { x: "KEYVITUP", y: 0.362 },
                    { x: "hrtz.wav", y: 0.246 },
                    { x: "VAYONN", y: 0.138 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "grouped",
              title: "2026년 데뷔 코호트, 리스너 대 팔로워",
              subtitle: "서로 90일 이내에 데뷔한 네 그룹입니다. KEYVITUP은 그룹 내에서 가장 작은 리스너 기반과 두 번째로 큰 팔로워 기반을 보유하고 있습니다.",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "MODYSSEY", y: 140297 },
                    { x: "hrtz.wav", y: 121468 },
                    { x: "VAYONN", y: 90708 },
                    { x: "KEYVITUP", y: 83811 },
                  ],
                },
                {
                  name: "Spotify followers",
                  points: [
                    { x: "MODYSSEY", y: 53154 },
                    { x: "hrtz.wav", y: 29890 },
                    { x: "VAYONN", y: 12486 },
                    { x: "KEYVITUP", y: 30304 },
                  ],
                },
              ],
              note: "KEYVITUP은 31% 더 적은 리스너로 hrtz.wav보다 더 많은 팔로워를 보유하고 있으며, 비슷한 기반에서 VAYONN의 2.4배에 달하는 팔로워를 보유하고 있습니다. 유입된 사람들은 남아있습니다. 유입되는 사람이 너무 적습니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "bars",
              title: "첫 주 앨범 판매량, 2026년 데뷔 클래스",
              subtitle: "2026년 보이그룹 데뷔 중 연간 첫 주 Top 100에 진입한 그룹들의 한터차트 첫 주 판매량입니다. KEYVITUP의 84,882장은 모든 경력 단계의 어떤 아티스트의 어떤 발매와 비교해도 연간 83위를 기록했습니다.",
              unit: "첫 주 판매량",
              series: [
                {
                  name: "첫 주",
                  points: [
                    { x: "ALPHA DRIVE ONE", y: 1441270 },
                    { x: "AND2BLE", y: 731673 },
                    { x: "MODYSSEY", y: 302064 },
                    { x: "FLARE U", y: 186825 },
                    { x: "VAYONN", y: 160872 },
                    { x: "NAZE", y: 130427 },
                    { x: "KEYVITUP", y: 84882 },
                    { x: "TUNEXX", y: 73865 },
                    { x: "hrtz.wav", y: 26622 },
                  ],
                },
              ],
              highlightX: ["KEYVITUP"],
              note: "매우 견고한 데뷔 수치입니다. 좁혀야 할 격차는 내부적인 것으로, VAYONN의 첫날 판매량 104,019장이 KEYVITUP의 첫 주 전체 판매량을 초과했습니다.",
              source: "한터, 2026",
            },
          ],
        },
        {
          label: "B",
          title: "포지션 분석",
          strategy: "두 가지 수치가 전체 문제를 설명하며, 서로 반대 방향을 가리킵니다. 도달(reach) 측면에서 KEYVITUP은 14개 아티스트 중 최하위이며, 함께 데뷔한 모든 그룹보다 뒤처져 있습니다. 전환(conversion) 측면에서는 동일한 데뷔 그룹 중 선두를 차지하고 있으며, ALPHA DRIVE ONE 이후 해당 그룹에서 가장 많이 판매된 데뷔 그룹인 MODYSSEY와 0.04%p 차이로 근접해 있습니다. 도달하는 사람 중 더 높은 비율을 유지하지만, 도달하는 사람이 가장 적은 그룹은 매력도 문제보다는 유통(distribution) 문제입니다. 유통은 두 문제 중 해결 비용이 더 저렴하며, 외부 파트너가 실제로 개선할 수 있는 부분입니다.",
          components: {
            heading: "좁혀야 할 세 가지 격차, 비용 순서대로",
            items: [
              "자체적인 확보(owned capture)가 없습니다. 현재까지 확보된 모든 리스너는 플랫폼으로부터 임대한 것입니다. 이를 해결하는 데는 예산이 아닌, 형식과 결정이 필요합니다.",
              "론칭 초기 관객을 생성한 네 개 시장에서 홍보 활동이 부재합니다. 이를 해결하는 데는 투어가 아닌, 타겟 미디어 프로그램이 필요합니다.",
              "동료 그룹들이 각각 1개에서 8개씩 보유하고 있는 것과 달리, 반복 가능한 콘텐츠 프랜차이즈가 없습니다. 이를 해결하는 데는 제작비가 아닌, 포맷 결정과 일관성이 필요합니다.",
            ],
          },
          kpis: [
            "월간 리스너가 증가할 때 0.40 이상 비율 유지, 감소 시에는 해당되지 않음",
            "12개월 내 월간 리스너 265,562명 5월 최고치 초과 달성",
            "두 번째 EP 첫 주 판매량 160,000장 이상 달성 (내부 VAYONN 벤치마크)",
            "다음 사이클까지 MODYSSEY와 동등하거나 그 이상의 전환율 순위 유지",
          ],
        },
      ],
      footnote: "월간 리스너, 팔로워 및 비율: Chartmetric, 2026년 9월 3일. 첫 주 판매량: 한터. 데뷔일은 공식 그룹 데뷔일 기준이며, 가장 빠른 카탈로그 발매일이 아닙니다. 비율은 분자와 분모 모두에 따라 변동하므로, 섹션 03에서는 이 수치에서 결론을 도출하기 전에 두 가지를 분리하여 분석합니다.",
    },

    // ===================================================================
    // 03. Editorial Dependency Analysis
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "의존성",
      title: "에디토리얼 의존성 분석",
      philosophy: "지금까지 확보된 모든 리스너는 임대된 것입니다. 임대 기간은 7주였으며, 그룹은 그 기간 이후에도 유지되는 것을 아무것도 소유하지 못했습니다.",
      intro: "This section separates the two numbers that get read as one. Spotify placed KEYVITUP on two of its largest programmed K-pop playlists in the release window, carrying a combined 1.73 million followers, and removed the group from both inside seven weeks. Monthly listeners tracked that support almost exactly. Followers did not move with it in either direction, which is the finding that reframes the whole audit: the group has never lost a follower, and has never had a way to gain one that did not depend on a playlist.",
      subBlocks: [
        {
          label: "A",
          title: "플레이리스트 지원 타임라인",
          objective: "존재했던 에디토리얼 지원이 무엇인지, 얼마나 오래 지속되었는지, 그리고 그 가치가 어떠했는지 규명합니다.",
          strategy: "The EP entered BIASBOYS on release day and K-Pop Rising the following day, two Spotify-programmed playlists carrying 844,268 and 883,640 followers, peaking at positions 1 and 5 respectively. BIASBOYS dropped the group after twelve days, on April 20. K-Pop Rising held for forty-eight and dropped it on May 27. A third placement, Boy in the Moon at 78,689 followers, ran to August 11. Alongside those, large third-party playlists that had picked the record up at launch also cycled it out, including TikTok Music 2026 at 1.49 million followers and a Filtr Indonesia trending list at 350,192. The May 9 listener peak falls between the two removals, nineteen days after the first and eighteen days before the second.",
          components: {
            heading: "그룹이 현재 보유하고 있는 것과 그 가치",
            items: [
              "206 current Spotify playlists carrying 602,175 followers of combined reach, against 2.17 million across Spotify-owned playlists alone in the launch window",
              "Eight of those 206 are Spotify-owned and account for 498,745 of the reach, which is 83 percent of everything",
              "나머지 198개의 플레이리스트는 총 103,430명의 팔로워를 보유하고 있으며, 이 중 194개는 1,000명 미만의 팔로워를 가지고 있습니다.",
              "Only one Apple Music placement exists, added on release day, now sitting at position 101 after peaking at 1",
              "Four of the eight Spotify-owned placements are algorithmic artist radio lists rather than programmed editorial, which means they can vanish without a human decision",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Spotify-Programmed Playlist Reach Held, by Week Since Debut",
              subtitle: "Combined follower reach of every Spotify-owned playlist carrying the record. The two largest placements both ended inside seven weeks.",
              unit: "도달 팔로워 수",
              series: [
                {
                  name: "유지된 도달 범위",
                  points: [
                    { x: "W1", y: 2165621 },
                    { x: "W2", y: 1441290 },
                    { x: "W3", y: 1441290 },
                    { x: "W5", y: 1441290 },
                    { x: "W7", y: 1441290 },
                    { x: "W8", y: 557650 },
                    { x: "W12", y: 557650 },
                    { x: "W16", y: 557650 },
                    { x: "W18", y: 480579 },
                    { x: "W21", y: 498745 },
                  ],
                },
              ],
              note: "도달 범위는 출시 기간 동안 217만 명에서 오늘날 498,745명으로 77퍼센트 감소했습니다. 남은 수치 중 359,024명은 단일 플레이리스트에 포함되어 있습니다.",
              source: "Chartmetric 플레이리스트 기록, 2026년 9월 3일",
            },
            {
              kind: "line",
              title: "리스너 대 팔로워, 전체 시리즈",
              subtitle: "두 시리즈를 하나의 축에 실제 스케일로 표시. 리스너 선은 에디토리얼 지원을 추적합니다. 팔로워 선은 하락한 날이 없으며 급등한 날도 없었습니다.",
              series: [
                {
                  name: "월간 리스너",
                  points: [
                    { x: "4월 12일", y: 28347 },
                    { x: "4월 26일", y: 158978 },
                    { x: "5월 9일", y: 265562 },
                    { x: "5월 24일", y: 252186 },
                    { x: "6월 7일", y: 223208 },
                    { x: "6월 21일", y: 180898 },
                    { x: "7월 5일", y: 123055 },
                    { x: "7월 19일", y: 90047 },
                    { x: "8월 2일", y: 76343 },
                    { x: "8월 17일", y: 73638 },
                    { x: "8월 31일", y: 83749 },
                  ],
                },
                {
                  name: "Spotify followers",
                  points: [
                    { x: "4월 12일", y: 8336 },
                    { x: "4월 26일", y: 14024 },
                    { x: "5월 9일", y: 16802 },
                    { x: "5월 24일", y: 19370 },
                    { x: "6월 7일", y: 21049 },
                    { x: "6월 21일", y: 22363 },
                    { x: "7월 5일", y: 23641 },
                    { x: "7월 19일", y: 25005 },
                    { x: "8월 2일", y: 26482 },
                    { x: "8월 17일", y: 28126 },
                    { x: "8월 31일", y: 30142 },
                  ],
                },
              ],
              note: "팔로워는 해당 기간 동안 8,336명에서 30,142명으로 261퍼센트 증가했으며, 단 하루도 감소하지 않았습니다. 전환 엔진은 작동합니다. 단순히 플레이리스트 트래픽 외에는 아무것도 공급되지 않았습니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "line",
              title: "팔로워 대 리스너 비율, 주간",
              subtitle: "이 선은 0.065에서 0.362로 상승하며, 이 상승의 대부분은 분자가 증가하기보다는 분모가 감소한 결과입니다.",
              series: [
                {
                  name: "비율",
                  points: [
                    { x: "4월 19일", y: 0.107 },
                    { x: "4월 26일", y: 0.088 },
                    { x: "5월 3일", y: 0.071 },
                    { x: "5월 10일", y: 0.065 },
                    { x: "5월 17일", y: 0.071 },
                    { x: "5월 24일", y: 0.077 },
                    { x: "5월 31일", y: 0.083 },
                    { x: "6월 7일", y: 0.094 },
                    { x: "6월 14일", y: 0.103 },
                    { x: "6월 21일", y: 0.124 },
                    { x: "6월 28일", y: 0.155 },
                    { x: "7월 5일", y: 0.192 },
                    { x: "7월 12일", y: 0.249 },
                    { x: "7월 19일", y: 0.278 },
                    { x: "7월 26일", y: 0.315 },
                    { x: "8월 2일", y: 0.347 },
                    { x: "8월 9일", y: 0.361 },
                    { x: "8월 16일", y: 0.379 },
                    { x: "8월 23일", y: 0.374 },
                    { x: "8월 30일", y: 0.359 },
                  ],
                },
              ],
              note: "정직한 산술: 해당 기간 동안 순 팔로워 증가는 약 22,000명이었으며, 월간 리스너 최고치는 265,562명으로, 이는 약 8%의 내재된 상한선을 의미합니다. 본 계획의 목표는 리스너가 증가하는 동안 0.40 이상의 비율을 달성하는 것이며, 이는 이 수치가 보여주는 결과와는 다르고 훨씬 더 어려운 결과입니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "B",
          title: "국가별 리스닝 현황",
          objective: "잠재 고객의 지리적 위치를 파악하십시오. 그 이유는 답변이 계획의 지출 우선순위를 결정하기 때문입니다.",
          strategy: "4월과 5월 동안 해당 음반은 동남아시아에서 히트를 기록했습니다. 각 시장의 자체 최고치를 기준으로 측정했을 때, 인도네시아는 월간 리스너 140,221명, 말레이시아 102,330명, 대만 31,994명, 태국 22,477명에 도달했습니다. 한국은 11,665명으로 최고치를 기록했으며, 본국 시장은 현재 추적 대상 28개국 중 20위를 차지하고 있습니다. 이 네 시장 중 어느 곳에서도 본 감사에서 검토된 자료에 등장하는 출연, 팬 이벤트, 쇼케이스 또는 미디어 데이는 없습니다. 전체 해외 프로모션 예산은 미국과 일본에 투입되었으며, 당시 두 시장 모두 말레이시아 단독 시장보다 작았습니다. 해당 잠재 고객은 이제 93%에서 95%까지 감소했으며, 이메일 주소를 요청받은 적도 없이 감소했습니다.",
          components: {
            heading: "프로모션 활동 범위 대 리스닝 활동 범위",
            items: [
              "데뷔 이후 실제 방문 국가: 한국, 일본, 미국, 중국 4개국",
              "8월 14일 및 15일 KCON LA, 8월 13일 팬 미팅, 8월 12일 hello82 이벤트 (현재까지 단일 최대 규모의 해외 투자)",
              "5월 8일 및 10일 KCON Japan, 7월 4일 상하이 팬 사인회 (참석자 100명)",
              "동남아시아: 레이블 지원 보도 자료 2건 (서면 1건, 원격 영상 1건) 외에는 없음",
              "라틴 아메리카: 본 검토에서 보도 자료, 인터뷰 또는 스페인어 보도 내용은 발견되지 않았으며, 리마는 전체 리스너 도시 중 5위를 기록했습니다.",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "시장별 월간 리스너 최고치 대 현재치",
              subtitle: "데뷔 이후 추적된 6개 시장으로, 각 시장은 단일 공유 시점이 아닌 자체 최고치 날짜로 표시됩니다. 어느 시장에도 프로모션 활동이 없습니다.",
              series: [
                {
                  name: "최고치, 2026년 4월~5월",
                  points: [
                    { x: "인도네시아", y: 140221 },
                    { x: "말레이시아", y: 102330 },
                    { x: "대만", y: 31994 },
                    { x: "태국", y: 22477 },
                    { x: "대한민국", y: 11665 },
                    { x: "싱가포르", y: 6904 },
                  ],
                },
                {
                  name: "현재",
                  points: [
                    { x: "인도네시아", y: 7011 },
                    { x: "말레이시아", y: 7421 },
                    { x: "대만", y: 1825 },
                    { x: "태국", y: 1327 },
                    { x: "대한민국", y: 1377 },
                    { x: "싱가포르", y: 1015 },
                  ],
                },
              ],
              note: "인도네시아는 95%, 말레이시아는 93% 하락했습니다. 두 시장 모두 최고치 기준으로 그룹이 지금까지 프로모션했던 어떤 시장보다도 컸습니다.",
              source: "Chartmetric, 2026년 9월 3일",
            },
            {
              kind: "hbars",
              title: "Current Playlist Reach, Spotify-Owned against Everything Else",
              subtitle: "Eight Spotify-owned playlists out of 206 carry 83 percent of the reach, grouped into four bars below. The long tail is 198 lists averaging 522 followers each.",
              series: [
                {
                  name: "도달 범위 팔로워",
                  points: [
                    { x: "All New K-Pop", y: 359024 },
                    { x: "K-Pop Dance Driving", y: 119937 },
                    { x: "기타 198개 리스트", y: 103430 },
                    { x: "MU:CON 2026", y: 10668 },
                    { x: "아티스트 라디오 (5)", y: 9116 },
                  ],
                },
              ],
              source: "Chartmetric, 2026년 9월 3일",
            },
          ],
        },
        {
          label: "C",
          title: "카탈로그 성과",
          objective: "곡들이 주변 프로모션과 독립적으로 어떤 성과를 내고 있는지 파악합니다.",
          strategy: "Five tracks, 2.39 million cumulative Spotify streams, and a run rate that has flattened rather than continued falling. The last seven days and the last twenty-eight days now imply almost exactly the same daily rate, which means the decay has bottomed. The title track carries 43 percent of EP streams and has fallen 87 percent from its launch week, from 156,271 streams in the week to April 21 down to 20,410 now. The most interesting line is the least promoted one: POLAROID, an album track with no video and no campaign, is running 24 percent above its own twenty-eight-day rate after an algorithmic playlist picked it up in late August, the clearest acceleration on the record.",
          components: {
            heading: "다음 릴리스에 대한 시사점",
            items: [
              "카탈로그는 바닥을 가지고 있으며, 그 바닥은 실재합니다. 활발한 프로모션 없이 EP 전체에서 하루 약 7,900회의 스트림을 기록하고 있습니다.",
              "타이틀 트랙은 타이틀 트랙으로서 해야 할 일을 했지만, 그로 인해 발생한 트래픽을 잡기 위한 후속 조치는 없었습니다.",
              "POLAROID가 알고리즘 배치만으로 가속화되는 것은 캠페인 없이도 음악이 전달된다는 증거입니다.",
              "하나의 EP와 하나의 시대는 아직 비교할 만한 하락 곡선이 없다는 것을 의미하며, 이는 본 감사에서 가장 큰 분석적 격차이며 두 번째 릴리스로 해소될 것입니다.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "EP Tracks by Cumulative Spotify Streams",
              unit: "누적 스트림 수",
              series: [
                {
                  name: "누적 스트림 수",
                  points: [
                    { x: "KEYVITUP", y: 1034621 },
                    { x: "LEGENDARY", y: 501037 },
                    { x: "BEST ONE", y: 399694 },
                    { x: "SHOW ME SOMETHING", y: 228696 },
                    { x: "POLAROID", y: 224901 },
                  ],
                },
              ],
              source: "Chartmetric, 2026년 9월 2일",
            },
            {
              kind: "grouped",
              title: "최근 월간 대비 일일 스트림 비율",
              subtitle: "7일 막대가 28일 막대를 초과하는 경우 해당 트랙은 가속화되고 있음을 의미합니다. 세 곡이 해당하며, POLAROID가 압도적인 격차로 가장 큰 수치를 보이며, 이는 프로모션이 전혀 붙지 않은 트랙입니다.",
              unit: "일일 스트림 수",
              series: [
                {
                  name: "최근 7일",
                  points: [
                    { x: "KEYVITUP", y: 2916 },
                    { x: "BEST ONE", y: 1687 },
                    { x: "POLAROID", y: 1558 },
                    { x: "SHOW ME SOMETHING", y: 1000 },
                    { x: "LEGENDARY", y: 860 },
                  ],
                },
                {
                  name: "최근 28일",
                  points: [
                    { x: "KEYVITUP", y: 2814 },
                    { x: "BEST ONE", y: 1570 },
                    { x: "POLAROID", y: 1259 },
                    { x: "SHOW ME SOMETHING", y: 1095 },
                    { x: "LEGENDARY", y: 1138 },
                  ],
                },
              ],
              source: "Chartmetric 일일 스트림 시리즈, 2026년 9월 2일",
            },
          ],
        },
      ],
      footnote: "플레이리스트 추가 및 삭제 날짜, 팔로워 도달 범위 및 최고 순위: Chartmetric 플레이리스트 기록. 리스너 및 팔로워 시리즈: Chartmetric 일일 시리즈 (일부 데이터 포인트는 보간됨). 5월 9일 최고치와 8월 17일 최저치는 모두 직접 측정값입니다. 국가별 수치는 Chartmetric 추정치입니다. 6개 시장은 4월까지의 기록을 보유하고 있습니다. 미국을 포함한 나머지 추적 대상 국가는 8월 26일에 추적 세트에 포함되었으므로 해당 국가들에 대한 최고치 비교는 불가능합니다.",
    },

    // ===================================================================
    // 04. Audience & Market Fit
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "오디언스",
      title: "오디언스 및 시장 적합성",
      intro: "두 개의 오디언스가 존재하며, 그 형태는 동일하지 않습니다. 스트리밍 오디언스는 출시 당시 동남아시아에서 형성되었으나 대부분 흩어졌습니다. 숏폼 오디언스는 더 젊고, 더 크며, 여전히 온전한 상태이며, 미국과 라틴 아메리카에 집중되어 있습니다. 아래 계획은 숏폼을 확보 채널로, 스트리밍을 목적지로 간주하는데, 이는 데이터가 이미 그러한 방향으로 흐르고 있기 때문입니다.",
      thesis: "172,000명의 강력한 숏폼 오디언스가 있으며, 이 중 10명 중 7명은 18세에서 24세 사이이며, 이전에 판매가 이루어진 적 없는 시장에 분포되어 있습니다. 타겟팅 질문은 '누구'가 아니라 '세 그룹 중 어느 그룹을 먼저 구매할 것인가'입니다.",
      metrosLabel: "주요 리스너 도시",
      metros: [
        { name: "쿠알라룸푸르, MY" },
        { name: "방콕, TH" },
        { name: "싱가포르, SG" },
        { name: "반둥, ID" },
        { name: "리마, PE" },
        { name: "자카르타, ID" },
        { name: "타이베이, TW", tier: "secondary" },
        { name: "케손시티, PH", tier: "secondary" },
        { name: "멕시코시티, MX", tier: "secondary" },
        { name: "로스앤젤레스, US", tier: "secondary" },
        { name: "상파울루, BR", tier: "secondary" },
        { name: "마닐라, PH", tier: "secondary" },
      ],
      ageDistribution: [
        { bracket: "13-17", weight: 10 },
        { bracket: "18-24", weight: 71 },
        { bracket: "25-34", weight: 18 },
        { bracket: "35+", weight: 1 },
      ],
      genderDistribution: { female: 67, male: 33 },
      personas: [
        {
          name: "동남아시아 디스커버리 코어",
          label: "인도네시아, 말레이시아, 필리핀, 태국, 싱가포르",
          priority: "primary",
          profile: "출시를 성공시킨 핵심 타겟층입니다. 최고치 달성 시 네 개국에서 월간 리스너 270,000명 이상을 기록했으며, 어떠한 홍보 활동 없이 전적으로 플레이리스트 배치와 숏폼 콘텐츠 유통을 통해 유입되었습니다. 이후 90% 이상 감소했지만, 동일한 사람들이 여전히 TikTok을 이용하고 있으며, 인도네시아는 11.08%로 두 번째로 큰 팔로워 국가입니다.",
          psychographics: [
            "그룹이 데뷔하기 전에 그룹을 발견하는 얼리 어답터 K팝 리스너",
            "높은 플레이리스트 및 알고리즘 의존도, 낮은 레이블 관계 의존도",
            "다중 팬덤, 여러 그룹을 동시에 소비하는 데 익숙함",
            "한국 레이블에게는 항상 마지막에 연락받는 것에 익숙하며, 먼저 연락하는 사람에게는 빠르게 보상하는 경향이 있습니다.",
          ],
          motivations: [
            "선점되기 전에 그룹에 일찍 접근하는 것",
            "신인 그룹은 거의 제공하지 않는 직접적인 접근성",
            "한국어가 아니어도 즐길 수 있는 콘텐츠",
          ],
          behaviors: [
            "Streams on Spotify free tier, discovers on TikTok",
            "공식 플랫폼보다는 X(구 트위터)에서 조직화합니다.",
            "현지 소매점이나 공동 구매가 있을 때만 실물 앨범을 구매하며, 그 외의 경우는 드뭅니다.",
          ],
          platforms: [
            { name: "TikTok", role: "발견 및 주요 획득 채널" },
            { name: "Spotify", role: "소비, 현재 유일하게 집계되는 곳" },
            { name: "X", role: "팬덤이 자체적으로 조직화되는 곳이며, 현재 전혀 지원되지 않습니다." },
          ],
          barriers: [
            "동남아시아 언어로 된 공식 계정, 포착 채널 또는 콘텐츠가 없습니다.",
            "인도네시아 팬 계정 두 개가 생성되었으나 게시물 없이 방치되었습니다.",
          ],
          triggers: [
            "그룹이 이 잠재 고객의 존재를 인지하고 있다는 첫 번째 신호",
            "아무리 작더라도 현지 언어 콘텐츠 비트",
          ],
          conversionGoal: "Move from anonymous listener to owned contact, then to Spotify follower, in that order.",
        },
        {
          name: "라틴 아메리카 숏폼 시청자층",
          label: "멕시코, 브라질, 페루, 콜롬비아, 아르헨티나, 칠레",
          priority: "expansion",
          profile: "멕시코와 브라질만으로도 TikTok 팔로워의 11.3%를 차지하며 각각 6.11%와 5.19%이며, 리마는 전 세계 청취 도시 중 5위를 차지합니다. 이 시청자층은 아무것도 받지 못했습니다. 언론 보도, 인터뷰, 스페인어 보도 등 지구상 어디에서도 접한 적이 없으며, 그들이 사용하는 언어로 된 공식 계정도 없습니다.",
          psychographics: [
            "숏폼 네이티브, 매우 높은 저장 및 공유 행동",
            "번역 계정 및 그룹 채팅을 중심으로 조직된 팬덤 문화",
            "시장 소득 대비 강력한 라이브 이벤트 수요, K팝 투어링으로 역사적으로 소외됨",
          ],
          motivations: [
            "해당 지역을 전혀 인정한 적 없는 그룹으로부터의 인정",
            "현재 전체 미충족 수요인 번역 콘텐츠",
          ],
          behaviors: [
            "Discovers through TikTok and YouTube Shorts, converts on Spotify",
            "레이블 개입 없이 X 및 Instagram에서 팬 프로젝트 조직",
          ],
          platforms: [
            { name: "TikTok", role: "오늘날의 전체 관계" },
            { name: "YouTube Shorts", role: "2차 발견, KCON 이후 이미 결과 도출 중" },
          ],
          barriers: [
            "504개 자체 게시물에 스페인어 또는 포르투갈어 콘텐츠 없음",
            "팔로워 119명의 비활성 브라질 팬 계정 하나가 유일한 조직화된 존재입니다.",
          ],
          triggers: [
            "기존 콘텐츠에 스페인어 및 포르투갈어 자막 추가, 제작 비용 없음",
            "가장 저렴한 시장 진입 신호인 단일 인정 게시물",
          ],
          conversionGoal: "경쟁자가 해당 지역을 차지하기 전에 기존 숏폼 도달 범위를 스트리밍 및 자체 연락처로 전환하십시오.",
        },
        {
          name: "미국 K팝 네이티브",
          label: "Los Angeles, New York, Chicago, Dallas, Atlanta",
          priority: "secondary",
          profile: "프로모션 투자를 받은 시장입니다. KCON LA, 팬 미팅, hello82 활성화 및 8월의 전체 미디어 활동은 측정 가능한 결과를 낳았습니다. 미국은 현재 18,777명으로 가장 큰 단일 추적 청취자 시장이며, Top 20 YouTube Shorts에 올랐고, 22.56%로 가장 큰 TikTok 팔로워 국가입니다. 이곳은 지출과 결과가 연결된 유일한 시장이며, 이것이 우선순위가 아닌 증명 사례가 되는 이유입니다.",
          psychographics: [
            "깊은 K팝 이해도, 여러 그룹 팔로우, 컨벤션 참석",
            "실물 앨범 구매, 포토카드 수집, 스트리밍 프로젝트 참여",
            "안무보다는 멤버 개개인의 개성에 훨씬 더 반응함",
          ],
          motivations: [
            "첫 대면 미팅 후 접근 및 반복적인 연락",
            "그룹의 스토리에 영향력을 행사할 수 있을 만큼 충분히 일찍 참여하는 것",
          ],
          behaviors: [
            "8월에 직접 전환되었으나 그 이후 후속 연락이 없었음",
            "퍼스트 파티 리테일이 존재하지 않아 서드 파티 리셀러를 통해 구매함",
          ],
          platforms: [
            { name: "TikTok", role: "단일 국가 최대 팔로워 비율 22.56%" },
            { name: "Instagram", role: "동일한 콘텐츠에서 TikTok보다 꾸준히 높은 성과를 보임" },
            { name: "YouTube", role: "KCON 이후 Shorts 노출이 이미 입증됨" },
          ],
          barriers: [
            "8월 프로모션 참가자 전원이 연락처를 제공하지 않고 떠났는데, 이는 수집할 수 있는 것이 아무것도 없었기 때문임",
            "퍼스트 파티 리테일 없음, 멤버십 없음, 가입할 수 있는 것이 없음",
          ],
          triggers: [
            "알고리즘이 아닌 받은 편지함으로 도착하는 재방문 이유",
          ],
          conversionGoal: "8월의 잠재 고객을 소급 적용하여 다음 릴리스까지 유지함.",
        },
      ],
      behaviorSignals: [
        {
          behavior: "분석된 6개 동종 업체 중 중간 참여율이 28.96%로 가장 높음",
          platforms: ["TikTok"],
          implication: "콘텐츠를 접하는 사람들이 경쟁사보다 더 강하게 반응합니다. 유지력은 문제가 아닙니다. 도달 범위가 문제입니다.",
        },
        {
          behavior: "동일한 날짜에 게시된 동일한 콘텐츠의 경우, 33쌍 중 28쌍에서 Instagram이 TikTok보다 더 많은 수익을 창출함",
          platforms: ["Instagram", "TikTok"],
          implication: "Instagram은 팔로워가 19% 적음에도 불구하고 1.56배의 중간 이점을 제공하며, 현재 관리되지 않고 있습니다. 이는 테이블 위에 놓인 무료 도달 범위입니다.",
        },
        {
          behavior: "조직화된 팬 네트워크는 12개의 핸들을 통해 총 약 2,350개의 계정으로 구성됨",
          platforms: ["X"],
          implication: "이는 TikTok 팔로워의 1.4%에 해당합니다. 팬덤은 거의 완전히 조직화되지 않았으며, 이는 오늘날 위험 요소이자 가장 먼저 조직하는 사람에게는 기회가 될 것입니다.",
        },
        {
          behavior: "그룹의 가장 큰 플랫폼인 틱톡에는 팬이 운영하는 계정이 단 하나도 존재하지 않습니다.",
          platforms: ["TikTok"],
          implication: "가장 많은 사람이 모인 오디언스는 구조화가 가장 부족합니다. 이미 구축된 팬 페이지 네트워크는 경쟁할 상대가 없습니다.",
        },
      ],
      barriers: [
        {
          barrier: "팬덤의 이름은 KEYPER이며, 팬으로 등록할 수 있는 곳이 없습니다.",
          response: "미디어 집행 전에 멤버십을 구축하여 기반을 먼저 확보해야, 이후에 구매하는 모든 것이 안착할 수 있는 공간이 마련됩니다.",
        },
        {
          barrier: "현재 사용 중인 유일한 팬 플랫폼은 멤버십, 메시징, 라이브, 투표 및 번역 기능이 모두 꺼져 있습니다.",
          response: "새로운 것을 구축하기 전에 기존 기능을 활성화하십시오. 해당 플랫폼은 이미 비용이 지불되었고 활성화된 상태입니다.",
        },
        {
          barrier: "그룹의 4대 주요 론칭 시장에서 사용되는 언어로 된 콘텐츠가 존재하지 않습니다.",
          response: "새로운 콘텐츠를 촬영하는 대신 기존 라이브러리에 자막을 추가하십시오. 라이브러리의 4분의 3은 이미 한국어 없이도 작동합니다.",
        },
        {
          barrier: "한국 외 시장에서는 어떠한 물리적 소매 관계도 없습니다.",
          response: "다음 릴리스는 최소한 한 곳의 동남아시아 시장과 한 곳의 미국 계정에서 리테일 파트너를 통해 진행하며, 사전 주문 접수를 포함해야 합니다.",
        },
      ],
      triggers: [
        {
          trigger: "LA에서 8월에 진행되어 효과가 입증된 오프라인 이벤트",
          implication: "그룹이 진행했던 단 한 번의 활성화 활동이 현재 가장 큰 리스너 시장을 만들어냈습니다. 오디언스가 이미 있는 곳에서 이를 반복하십시오.",
        },
        {
          trigger: "8월 말 POLAROID를 통해 입증된 알고리즘 플레이리스트 편입",
          implication: "음악이 캠페인 없이도 확산된다는 것은, 유료 디스커버리가 임대보다는 복리의 기회를 가질 수 있음을 의미합니다.",
        },
        {
          trigger: "릴리스 주기 콘텐츠로, 다른 모든 것을 2.9배 능가합니다.",
          implication: "해당 계정은 캠페인 에셋 없이 110개의 연속적인 비디오를 게시했습니다. 가장 성과가 좋은 채널이 단순히 꺼져 있습니다.",
        },
      ],
      similarArtists: ["VAYONN", "MODYSSEY", "hrtz.wav", "IDID", "AHOF", "KickFlip", "TWS", "CORTIS"],
      genres: ["K-Pop", "Hip-Hop", "Dance-Pop", "Trap", "R&B"],
      platformSignals: [
        {
          platform: "TikTok",
          note: "172,600 followers, 3.4 million likes across 199 videos. Ranks 16,513 globally against a Spotify listener rank of 112,215, which is roughly a sevenfold gap and the clearest signal in the audit that the short-form audience is far ahead of the streaming audience. Followers are 22.56 percent United States, 11.08 percent Indonesia, 6.72 percent Cambodia, 6.11 percent Mexico and 5.19 percent Brazil.",
        },
        {
          platform: "Instagram",
          note: "139,970명의 팔로워를 보유하고 있습니다. 조용하지만 뛰어난 성과를 내고 있으며, 분석된 50개의 릴 중 33개가 틱톡(TikTok) 게시물과 동일한 날짜에 게시된 영상이며, 이 중 28개를 인스타그램이 확보했습니다. 이는 팔로워 수가 19% 적음에도 불구하고, 평균적으로 1.56배의 우위를 보인 결과입니다. 개별 영상 쌍 비교가 아닌 계정 평균을 비교했을 때, 인스타그램은 51,379건을 기록한 반면 틱톡은 40,100건을 기록했습니다.",
        },
        {
          platform: "Spotify",
          note: "83,811 monthly listeners and 30,304 followers. Artist Pick is set and the biography is complete, which confirms the profile is claimed and actively managed. Eight Spotify-owned playlists carry 83 percent of all current reach.",
        },
        {
          platform: "YouTube",
          note: "공식 아티스트 채널, 라이브 쇼츠 탭, 활성 커뮤니티 탭을 갖춘 272개의 영상에 43,000명의 구독자를 보유하고 있습니다. 채널 멤버십은 활성화되어 있지 않습니다. 세 개의 뮤직비디오는 총 1,300만 뷰를 기록했으며, 이는 구독자 수의 약 300배에 달하는 수치로, 그룹이 보유한 가장 큰 미전환 자산입니다.",
        },
      ],
      footnote: "연령, 성별 및 팔로워 국가별 분포: Chartmetric 제공 틱톡(TikTok) 오디언스 통계, 2026년 9월 3일 기준. 틱톡(TikTok), 인스타그램, 유튜브, X의 팔로워 수는 2026년 9월 3일 라이브 프로필에서 확인되었으며, Chartmetric 플랫폼 순위 역시 동일 날짜 기준입니다. 상위 5개 도시를 제외한 리스너 도시별 수치는 좁은 범위 내에 분포하므로, 상기 언급된 차순위 도시들은 방향성을 제시하며 첫 유료 캠페인 집행 시 픽셀 데이터를 통해 검증되어야 합니다.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "콘텐츠",
      title: "영상 인텔리전스 / 123개 영상, 프레임별 분석",
      intro: "Crowd Control Digital은 TwelveLabs 비디오 AI의 전용 KEYVITUP 인텔리전스 스토어에 123개의 영상을 색인화했습니다. 여기에는 틱톡(TikTok), 유튜브, 인스타그램의 그룹 자체 게시물 73개(세 개의 뮤직비디오 포함)와 VAYONN, MODYSSEY, CORTIS, AHOF, IDID의 게시물 50개가 포함됩니다. 9개 계정의 총 3,860개 게시물 전체를 열거하여 상위 및 하위 성과를 모두 대표하도록 계층화했으며, 각 항목에 실제 성과 데이터를 연결했습니다. 아래의 모든 결과는 해당 결과가 속한 성과 구간과 연결되며, 이에 반하는 증거도 함께 제시합니다.",
      clientQuestion: {
        attribution: "본 분석이 답하는 질문",
        question: "본 분석 대상 6개 그룹 중 해당 그룹은 가장 높은 참여율을 기록했지만, 가장 적은 오디언스를 보유하고 있습니다. 콘텐츠 내에서 사람들을 사로잡는 요소는 무엇이며, 더 많은 사람들을 유입시키기 위해 부족한 요소는 무엇일까요?",
      },
      methodology: [
        {
          label: "코퍼스(Corpus) 추출",
          value: "자체 보유 영상 73개: 틱톡(TikTok) 38개, 유튜브 23개(세 개의 뮤직비디오 포함), 인스타그램 릴 12개(영상으로 색인화). 인스타그램 플랫폼 비교는 참여 데이터를 열거한 50개의 릴을 더 넓은 범위로 활용합니다. 상위 대비 하위 질문이 양쪽 끝을 진정성 있게 대표하도록 네 가지 성과 구간으로 계층화했습니다. 경쟁사 세트: VAYONN, MODYSSEY, CORTIS, AHOF, IDID의 영상 50개(모든 핸들은 추출 전 공식 계정으로 확인됨).",
        },
        {
          label: "영상 인텔리전스",
          value: "모든 123개 영상은 시청 가능한 영상으로 전용 KEYVITUP 지식 스토어에 색인화되었으며, 총 70.9분 분량의 영상에서 후킹 요소, 화면 텍스트, 등장인원 수, 무대 연출, 언어, 반복되는 형식 등을 전체 코퍼스에서 한 번에 조회할 수 있습니다.",
        },
        {
          label: "성과 연결",
          value: "모든 항목은 추출 시점의 조회수, 좋아요 수, 댓글 수, 공유 수, 참여율을 포함하며, 해당 계정 내에서의 성과 구간도 함께 표시됩니다. 본 섹션의 어떠한 주장도 해당 성과 등급 없이는 이루어지지 않습니다.",
        },
        {
          label: "적대적 교차 검증",
          value: "각 결론은 독립적인 범위에서 재실행되었으며, 가능한 경우 캡션만 사용한 분석과 원본 화면 텍스트만 사용한 분석을 통해 테스트되었습니다. 캡션 기반 판독은 두 번 번복되었으며, 수정 사항은 결과에 명시되어 있습니다.",
        },
        {
          label: "솔직한 한계",
          value: "개인별 주장은 모델이 개별 식별을 신뢰성 있게 수행하지 못하고 요청 시 잘못된 이름을 반환했기 때문에 이루어지지 않았습니다. 경쟁사 코퍼스는 더 강력한 게시물을 포함하므로, 경쟁사 중앙값은 계정 평균보다는 승자 벤치마크로 사용됩니다. 한 프랜차이즈 비교는 비디오 콘텐츠보다는 881개 게시물에 걸친 해시태그 메타데이터에 기반합니다.",
        },
      ],
      corpusStats: [
        {
          label: "분석된 비디오",
          value: "123",
          detail: "자체 73개 및 경쟁사 50개, 총 70.9분, 9개 계정의 총 3,860개 게시물에서 선정",
        },
        {
          label: "발견된 행동 유도 문구",
          value: "73개 중 2개",
          detail: "상위 10%에 제로. 전체 코퍼스에 URL 제로",
        },
        {
          label: "중앙값 참여율",
          value: "28.96%",
          detail: "분석된 6개 동종 업체 중 가장 높으며, IDID의 24.95% 및 CORTIS의 23.06%보다 앞섭니다.",
        },
        {
          label: "마지막 캠페인 에셋 이후 게시물",
          value: "110",
          detail: "4월 28일 이후 출시 콘텐츠가 없는 연속적인 TikTok 게시물, 2.9배 더 높은 성과를 내는 분야",
        },
      ],
      mixColumnLabel: "오늘의 KEYVITUP",
      benchmarkColumnLabel: "동종 업체 벤치마크",
      mixHeading: "무엇에 지출되는가 대비 무엇이 수익을 창출하는가",
      mixIntro: "볼륨이나 품질의 문제가 아닙니다. 코퍼스는 특별한 목표 없이 운영되는 잘 만들어진 계정을 보여줍니다. 아래 각 행은 그룹 자체 성과 데이터가 이미 나아가야 할 방향을 제시하는 분야입니다.",
      mixRows: [
        {
          metric: "한국 외부의 잠재고객을 대상으로 하는 콘텐츠",
          lolaAmour: "73개 중 1개 비디오, 미국 대상",
          benchmark: "504개 자체 게시물에서 인도네시아, 말레이시아, 대만 또는 태국에 대한 언급 제로",
          read: "behind",
          note: "출시 당시 잠재고객을 확보했던 4개 시장이 그룹 자체 콘텐츠에는 전혀 나타나지 않습니다. 인사말, 캡션, 화면 텍스트 모두 없습니다.",
        },
        {
          metric: "행동 유도 문구",
          lolaAmour: "73개 영상 중 2개, 198개 TikTok 캡션 중 1개",
          benchmark: "상위 10% 내 CTA 0건; 전체 코퍼스 내 URL 0건",
          read: "behind",
          note: "감사에서 가장 저렴하게 개선할 수 있는 부분입니다. 도달 범위는 존재하지만 현재 아무 곳도 향하고 있지 않습니다.",
        },
        {
          metric: "최상위권 콘텐츠 내 전체 그룹 출연 영상",
          lolaAmour: "최상위권 영상 32개 중 14개에 5명 이상 멤버 출연",
          benchmark: "하위권 영상 24개 중 3개에 해당하며, 24개 중 12개는 솔로 영상입니다.",
          read: "ahead",
          note: "계정 자체 데이터가 이미 형식에 대한 질문에 답했습니다. 성공적인 형식은 스튜디오 벽을 배경으로 한 멤버 1명이 아니라 실제 장소에 있는 전체 그룹입니다.",
        },
        {
          metric: "개성 중심 콘텐츠",
          lolaAmour: "최상위권 외 영상 42개 중 2개, 약 5퍼센트",
          benchmark: "VAYONN은 31~38%를 차지하며, 이들의 상위 11개 영상 중 8개가 개성 중심 콘텐츠입니다.",
          read: "behind",
          note: "KEYVITUP의 중간, 하위 및 Instagram 콘텐츠만으로 측정했을 때, 상위 성과를 제외해도 격차는 유지됩니다.",
        },
        {
          metric: "명명된 반복 가능한 콘텐츠 시리즈",
          lolaAmour: "0",
          benchmark: "CORTIS 8개, MODYSSEY 2개, VAYONN 1개",
          read: "behind",
          note: "계정에서 유일하게 반복되는 태그는 릴리스 제목입니다. 신규 팔로워가 따라갈 만한 것이 없습니다.",
        },
        {
          metric: "릴리스 주기 콘텐츠",
          lolaAmour: "4월 28일 이후 110개의 연속 게시물 동안 없음",
          benchmark: "캠페인 콘텐츠는 계정 자체의 다른 콘텐츠보다 2.9배 더 뛰어납니다.",
          read: "behind",
          note: "신인 그룹의 경우 오가닉이 캠페인보다 우수하다는 일반적인 가정을 뒤집습니다. 여기서는 그렇지 않으며, 근접하지도 않습니다.",
        },
        {
          metric: "TikTok의 플랫폼 네이티브 메커니즘",
          lolaAmour: "듀엣, 스티치, 네이티브 텍스트 처리, 필터 또는 트렌딩 오디오가 제로로 확인됨",
          benchmark: "동종 업계 전반의 표준 관행",
          read: "behind",
          note: "가장 큰 자체 보유 오디언스에게는 어떤 플랫폼에서도 동일하게 작동할 콘텐츠가 제공되고 있습니다.",
        },
        {
          metric: "번역을 견뎌내는 콘텐츠",
          lolaAmour: "73개 중 55개가 한국어 없이 완전히 가능",
          benchmark: "강력하며, 대부분의 신인 계정보다 우수함",
          read: "ahead",
          note: "진정한 자산입니다. 6개를 찾는 데 있어 난관은 댄스 분야는 인기를 얻지만, 그룹이 가장 구축해야 할 퍼스널리티 콘텐츠 분야는 그렇지 않다는 점입니다.",
        },
      ],
      charts: [
        {
          kind: "grouped",
          title: "차선별 평균 조회수, TikTok",
          subtitle: "게시물이 릴리스 콘텐츠를 포함했는지 여부에 따라 분할된 계정 자체 성과 데이터",
          unit: "평균 조회수",
          series: [
            {
              name: "캠페인 콘텐츠",
              points: [
                { x: "전체 계정", y: 114300 },
                { x: "4월 한정", y: 115200 },
              ],
            },
            {
              name: "오가닉 콘텐츠",
              points: [
                { x: "전체 계정", y: 40100 },
                { x: "4월 한정", y: 46900 },
              ],
            },
          ],
          note: "4월 한정 열은 데뷔의 새로움 효과를 통제하며, 그 격차는 2.5배를 유지합니다. 이는 출시 창구 효과가 아닙니다.",
          source: "CREATIVE CONTROL 코퍼스, 2026년 9월",
        },
        {
          kind: "grouped",
          title: "상위 밴드와 하위 밴드의 구성",
          subtitle: "각 밴드에서 각 속성을 포함하는 동영상의 비율. 두 가지 변수가 계정의 최고 콘텐츠와 최악의 콘텐츠를 분리하며, 둘 다 제작 품질은 아닙니다.",
          unit: "밴드 비율",
          series: [
            {
              name: "상위 밴드",
              points: [
                { x: "솔로 멤버", y: 6 },
                { x: "5인 이상 멤버", y: 44 },
                { x: "스튜디오 외부 촬영", y: 50 },
              ],
            },
            {
              name: "하위 구간",
              points: [
                { x: "솔로 멤버", y: 50 },
                { x: "5인 이상 멤버", y: 13 },
                { x: "스튜디오 외부 촬영", y: 29 },
              ],
            },
          ],
          note: "상위 구간 중앙값 216,900회, 하위 구간 중앙값 17,400회. 영상 길이는 두 구간을 1초 차이로 구분하며 변수로 간주되지 않았습니다.",
          source: "CREATIVE CONTROL 코퍼스, 2026년 9월",
        },
        {
          kind: "bars",
          title: "월별 TikTok 조회수 중앙값",
          subtitle: "계정은 피로도를 보이지 않습니다. 8월은 올해 두 번째로 높은 실적을 기록한 달입니다.",
          unit: "평균 조회수",
          series: [
            {
              name: "중앙값 조회수",
              points: [
                { x: "3월", y: 34500 },
                { x: "4월", y: 50000 },
                { x: "5월", y: 41800 },
                { x: "6월", y: 35600 },
                { x: "7월", y: 32600 },
                { x: "8월", y: 43200 },
              ],
            },
          ],
          highlightX: ["8월"],
          source: "CREATIVE CONTROL 코퍼스, 2026년 9월",
        },
        {
          kind: "hbars",
          title: "TikTok 참여율 중앙값, 동종 업계",
          subtitle: "본 계획이 창의성보다는 도달 범위에 초점을 맞추는 이유입니다.",
          unit: "percent",
          series: [
            {
              name: "참여율",
              points: [
                { x: "KEYVITUP", y: 28.96 },
                { x: "IDID", y: 24.95 },
                { x: "MODYSSEY", y: 24.56 },
                { x: "AHOF", y: 24.3 },
                { x: "CORTIS", y: 23.06 },
                { x: "VAYONN", y: 18.69 },
              ],
            },
          ],
          highlightX: ["KEYVITUP"],
          source: "CREATIVE CONTROL 코퍼스, 2026년 9월",
        },
      ],
      findingsHeading: "일곱 가지 분석 결과",
      findingsIntro: "각 분석 결과는 주장, 그 근거, 해당 결과가 속하는 성과 구간, 그리고 시사하는 변화를 명시합니다. 반증은 해당 주장을 한정하는 내용과 함께 기재됩니다.",
      findings: [
        {
          id: "f1",
          title: "콘텐츠는 해외 시장 하나를 언급하며, 해당 시장은 그룹의 주요 시장 중 하나가 아닙니다.",
          verdict: "confirmed",
          confidence: "5회의 독립적인 검토를 거쳐 만장일치로 높은 수준을 달성함",
          summary: "전체 73개의 자체 제작 영상 중 단 하나만이 한국 외 지역 시청자를 직접적으로 대상으로 하며, 해당 시청자는 미국에 있습니다. 한국어, 영어, 일본어 외 다른 언어로 팬들에게 인사하거나 감사함을 표현하는 영상은 없습니다. 전체 504개의 자체 제작 게시물로 범위를 넓혀보면, 캡션은 한국어 267개, 일본어 9개, 중국어 단독 1개로 구성되어 있으며, 태국어, 스페인어, 포르투갈어, 인도네시아어, 타갈로그어는 전혀 없습니다. 인도네시아, 말레이시아, 대만, 태국은 언급되지 않았습니다.",
          evidence: [
            "73개의 영상 중 1개가 해외 시청자를 대상으로 하며, 해당 영상은 약 57,597회의 조회수를 기록하여 인스타그램 평균 수준과 유사합니다.",
            "전체 자료에서 한국어, 영어, 일본어 외 의사소통 콘텐츠는 전혀 없습니다.",
            "집계된 504개의 자체 제작 게시물 중 4개의 출시 시장에 대한 언급은 전혀 없습니다.",
            "이 게시물들이 게시된 기간 동안 인도네시아는 월간 리스너 140,221명, 말레이시아는 102,330명으로 최고치를 기록했습니다.",
          ],
          counterEvidence: [
            "초기 자동 분석에서 포르투갈어, 베트남어, 힌디어, 러시아어 오디오가 감지되었습니다. 원본 화면 텍스트 분석 결과, 이는 노래 및 랩 오디오에 대한 음성 인식 오류로 밝혀졌습니다. 이러한 수정은 발견 사항을 약화시키기보다는 강화합니다.",
          ],
          pivot: {
            title: "이미 반응을 보인 시장을 대상으로 소통하십시오.",
            actions: [
              "새로운 콘텐츠 제작 전에 기존 라이브러리에 인도네시아어, 태국어, 스페인어 자막을 추가하십시오. 기존 콘텐츠의 75%는 한국어 없이도 이미 활용 가능합니다.",
              "각 시장별로 한 번의 감사 표시를 진행하십시오. 이는 가장 저렴한 시장 진입 신호입니다.",
              "현재 꺼져 있는 팬 플랫폼의 번역 기능을 활성화하십시오.",
              "현재 중국어까지만 지원되는 플랫폼 언어 목록에 인도네시아어, 태국어, 말레이어, 스페인어를 추가하십시오.",
            ],
          },
        },
        {
          id: "f2",
          title: "73개의 영상 중 2개의 행동 유도 문구가 포함되어 있으며, 둘 다 상위 10%에 속하지 않습니다.",
          verdict: "confirmed",
          confidence: "독립적인 원본 텍스트 검토를 통해 교차 확인되었으며, 높은 수준을 달성했습니다.",
          summary: "엄격하게 집계한 결과 두 개가 발견되었습니다. 하나는 hello82 로스앤젤레스 발표 영상으로, 영어로 된 세 개의 별도 음성 및 화면 지침이 포함되어 있습니다. 다른 하나는 유튜브 아웃트로입니다. 세 번째 후보는 시청자 지침이 아닌 멤버 간의 콘텐츠 내 대화였기 때문에 제외되었습니다. 전체 자료에 URL은 전혀 없으며, 계정에서 가장 성과가 좋은 콘텐츠에는 행동 유도 문구가 전혀 없습니다.",
          evidence: [
            "73개의 영상에 걸쳐 명시적인 행동 유도 문구 2개가 있습니다.",
            "본 분석을 위해 집계된 198개의 틱톡 캡션 중 1개, 그리고 50개의 인스타그램 캡션 중 1개에 지침이 포함되어 있습니다.",
            "전체 자료에 URL은 전혀 없습니다.",
            "상위 10%에 해당하는 약 216,900회의 평균 조회수를 기록하는 구간에는 행동 유도 문구가 전혀 없습니다.",
          ],
          pivot: {
            title: "도달 범위를 특정 방향으로 집중하십시오.",
            actions: [
              "릴리스 관련 모든 게시물에 제목, 날짜 및 목적지를 포함하는 1초 길이의 엔드 카드를 추가하십시오.",
              "현재 아무것도 포함되어 있지 않은 최고 성과 콘텐츠의 모든 프로필 및 모든 캡션에 참여 링크를 포함시키십시오.",
              "상위 10%를 재고로 취급하십시오. 해당 게시물은 이미 계획이 전환해야 하는 잠재 고객에게 도달하고 있습니다.",
            ],
          },
        },
        {
          id: "f3",
          title: "승자는 실제 장소에 있는 전체 그룹이며, 패자는 연습실에 있는 멤버 한 명입니다.",
          verdict: "confirmed",
          confidence: "56개 이상의 비디오에 대한 인원 및 설정 감사 결과, 높음.",
          summary: "두 가지 변수가 계정의 최고 콘텐츠와 최악의 콘텐츠를 구분하며, 둘 다 제작 가치나 길이가 아닙니다. 상위 그룹에서는 비디오의 44%가 5명 이상의 멤버를 보여주고 6%만이 솔로입니다. 하위 그룹에서는 50%가 솔로이고 13%만이 전체 그룹을 보여줍니다. 상위 그룹의 절반은 연습실이 아닌 다른 곳에서 촬영되었으며, 하위 그룹의 71%는 그렇지 않았습니다.",
          evidence: [
            "상위 그룹: 32개 중 2개 솔로, 32개 중 14개 5명 이상 멤버 포함, 32개 중 16개 현장 촬영",
            "하위 그룹: 24개 중 12개 솔로, 24개 중 3개 5명 이상 멤버 포함, 24개 중 17개 연습실 또는 일반 스튜디오에서 촬영",
            "상위 그룹 중앙값 216,900회 조회수 대 하위 그룹 중앙값 17,400회 조회수",
            "최고 성과에는 445,000회의 전체 그룹 영상과 TikTok에서 272,400회, Instagram에서 310,900회를 기록한 로스앤젤레스 공연 클립이 포함됩니다.",
          ],
          counterEvidence: [
            "캡션만으로 분석한 결과 멤버 수는 거의 중요하지 않았으며 9%의 격차를 보였습니다. 화면상으로는 그 격차가 12배 이상입니다. 해시태그는 보이는 사람이 아닌 등장하는 사람을 표시하며, 캡션 판독이 잘못되었습니다.",
          ],
          pivot: {
            title: "승리하는 형태를 예외가 아닌 기본값으로 만드십시오.",
            actions: [
              "주간 콘텐츠 생산량에서 전체 그룹 콘텐츠의 비율에 대한 하한선을 설정하십시오.",
              "카메라를 연습실 밖으로 옮기십시오. 장소가 측정된 어떤 제작 변수보다 더 큰 역할을 하고 있습니다.",
              "솔로 콘텐츠는 유지하되, 개별적으로 게시하는 대신 명명된 시리즈에 첨부하십시오.",
            ],
          },
        },
        {
          id: "f4",
          title: "해당 레이블의 다른 그룹은 멤버를 판매하지만, 이 그룹은 안무를 판매합니다.",
          verdict: "confirmed",
          confidence: "높음, 샘플링 편향에 대해 스트레스 테스트 완료.",
          summary: "최고 성과를 기준으로 비교했을 때, VAYONN은 11개 중 8개의 개성 중심 게시물을 선보인 반면 KEYVITUP은 9개 중 0개로 모두 안무 중심이었습니다. KEYVITUP의 중간, 하위 및 Instagram 콘텐츠만 대상으로 최고 성과를 의도적으로 제외하고 재분류한 결과, 팬 서비스 제스처가 주요 콘텐츠인 비율은 42개 중 2개, 즉 5%로 VAYONN의 31%~38%에 비해 낮았습니다. 또한 VAYONN은 7월과 8월 동안 50개 대비 199개의 TikTok 게시물을 올리며 훨씬 더 많은 콘텐츠를 게시했습니다.",
          evidence: [
            "VAYONN 최고 성과: 11개 중 8개 개성 중심; KEYVITUP: 9개 중 0개",
            "KEYVITUP 팬 서비스 중심 콘텐츠: 42개 중 2개, 의도적으로 불리한 샘플로 테스트됨",
            "카메라를 직접 보며 팬과 소통하는 형식은 VAYONN의 가장 큰 고정 콘텐츠로, 16개 중 6개를 차지합니다.",
            "게시물 수: 7월 VAYONN 틱톡 게시물 134개 대 28개",
          ],
          counterEvidence: [
            "335개 게시물 기준 VAYONN의 틱톡 평균 도달 수는 36,900회로, 여기에 명시된 198개 게시물 기준 KEYVITUP의 40,100회보다 낮습니다. VAYONN의 강점은 분야와 게시물 수이지, 게시물당 성과가 아닙니다. 두 그룹 간의 앨범 판매량 격차는 콘텐츠 성과 격차가 아닙니다.",
          ],
          pivot: {
            title: "잘 작동하는 분야를 대체하기보다는 새로운 분야를 추가하십시오.",
            actions: [
              "카메라를 직접 보며 팬과 소통하는 형식을 구축하고 고정적인 주간 슬롯을 활용하십시오.",
              "동일한 로스터에 설정된 내부 벤치마크를 향해 게시물 수를 늘리십시오.",
              "안무 콘텐츠는 그대로 유지하십시오. 이는 이미 언어를 넘어 전달되는 절반입니다.",
            ],
          },
        },
        {
          id: "f5",
          title: "반복 가능한 콘텐츠 프랜차이즈가 없는데, 상위 모든 경쟁 그룹은 최소 하나 이상을 운영하고 있습니다.",
          verdict: "confirmed",
          confidence: "다섯 번의 독립적인 검토 결과 모두 동일한 결론에 도달했습니다.",
          summary: "보유한 총 73개 영상에 대해 다섯 번에 걸쳐 별도로 질문한 결과, 모든 검토에서 동일한 답변이 나왔습니다: 반복 가능한 시리즈명 없음, 반복되는 타이틀 카드 없음, 세 개 이상의 영상에 걸쳐 나타나는 인트로 그래픽 없음. 해당 자료에서 유일한 브랜딩은 KEYVITUP 및 iNKODE 워드마크입니다. 해시태그 데이터도 이를 뒷받침합니다: 반복되는 멤버 외 태그는 출시 타이틀뿐입니다.",
          evidence: [
            "73개 영상에서 명명된 시리즈는 없으며, 이는 다섯 번의 독립적인 검증을 통해 확인되었습니다.",
            "반복되는 태그는 출시 타이틀뿐이며, 각각 10회와 5회 사용되었습니다.",
            "CORTIS는 8개의 별도 명칭 시리즈를 운영하며, 가장 큰 시리즈는 74개의 게시물을 보유하고 있습니다.",
            "MODYSSEY는 두 개, VAYONN은 한 개를 운영합니다.",
          ],
          counterEvidence: [
            "CORTIS의 프랜차이즈 수는 스토어에 보유된 8개의 CORTIS 영상이 아닌, 881개 게시물의 해시태그 메타데이터에 기반합니다. 이는 직접적인 반복을 관찰하기에는 너무 적은 표본입니다.",
          ],
          pivot: {
            title: "두 개의 프랜차이즈를 구축하고 고정적인 주기(cadence)로 운영하십시오.",
            actions: [
              "카메라를 직접 보며 팬과 소통하는 하나의 퍼스널리티 프랜차이즈로, 4번 항목의 격차를 해소하십시오.",
              "안무 강점을 반복 가능하고 따라 하기 쉬운 형태로 만드는 하나의 퍼포먼스 프랜차이즈를 구축하십시오.",
              "두 프랜차이즈 모두 이름을 붙이고 해시태그를 사용하며, 홍보할 콘텐츠가 없는 주에도 해당 슬롯을 유지하십시오.",
            ],
          },
        },
        {
          id: "f6",
          title: "해당 계정의 가장 효과적인 분야는 4월 이후로 중단되었습니다.",
          verdict: "confirmed",
          confidence: "높음, 근본적인 가정이 검증되고 뒤집혔음",
          summary: "4월 28일 마지막 릴리스 에셋은 LEGENDARY 뮤직비디오가 TikTok에 게시되었습니다. 이후 캠페인 콘텐츠 없이 110개의 연속 게시물이 올라왔습니다. 캠페인 콘텐츠는 해당 계정에서 압도적으로 가장 강력한 영역으로, 오가닉 40,100 대비 114,300의 중앙값이며, 4월 한 달 동안 데뷔 신인 효과를 감안하더라도 46,900 대비 115,200입니다. 이는 신인 그룹에게 오가닉 콘텐츠가 캠페인 콘텐츠보다 우수하다는 일반적인 가정을 뒤집는 결과입니다.",
          evidence: [
            "4월 28일 이후 캠페인 콘텐츠 없이 110개의 연속 TikTok 게시물",
            "캠페인 중앙값 114,300 대 오가닉 40,100, 2.9배 차이",
            "4월 단독 비교 시에도 2.5배의 격차가 유지되므로, 이는 출시 기간 효과가 아닙니다.",
            "Instagram의 뮤직비디오 릴은 51,379의 Instagram 중앙값 대비 9,437,858을 기록했습니다.",
          ],
          counterEvidence: [
            "계정은 쇠퇴하고 있지 않으며, 이러한 결과는 피로도로 해석되어서는 안 됩니다. 월별 중앙값은 3월 34,500, 4월 50,000, 5월 41,800, 6월 35,600, 7월 32,600, 8월 43,200으로, 8월은 올해 두 번째로 좋은 달입니다.",
          ],
          pivot: {
            title: "이처럼 긴 공백은 다시는 발생하지 않도록 하십시오.",
            actions: [
              "릴리스 일정을 콘텐츠 일정으로 간주하고, 캠페인 에셋을 4주간의 집중 기간이 아닌 지속적으로 운영하십시오.",
              "릴리스 간의 공백 기간 동안 기존 릴리스 에셋을 재편집하여 새로운 캠페인 콘텐츠를 만드십시오.",
              "홍보할 콘텐츠가 없는 상황에서도 계정이 잘 운영되고 있으므로, 다음 사이클을 앞당기십시오.",
            ],
          },
        },
        {
          id: "f7",
          title: "콘텐츠는 이미 확산되고 있지만, 확산되는 영역이 구축이 필요한 영역은 아닙니다.",
          verdict: "partial",
          confidence: "중간에서 높음, 내부에 실제적인 긴장감이 존재함",
          summary: "73개의 영상 중 55개, 즉 75%는 한국어 없이도 번역이 완전히 가능합니다. 이는 매우 강력하며 대부분의 신인 계정보다 뛰어납니다. 문제는 각 그룹에 속하는 내용입니다. 성공적으로 번역된 그룹은 거의 전적으로 댄스이며, 실패한 그룹은 정확히 성격 관련 콘텐츠로, 그중 5개는 전제를 설명하기 위해 한국어 자막에 의존합니다. 따라서 동료 비교에서 구축해야 한다고 말하는 한 가지 영역은 현재 국경을 넘을 수 없는 형태로 제작되고 있습니다.",
          evidence: [
            "73개 중 55개는 번역이 완전히 가능하고, 15개는 부분적으로 가능하며, 3개는 전혀 불가능합니다.",
            "댄스는 5번의 모든 검토에서 가장 흔하게 번역이 완전히 가능했던 형식입니다.",
            "실패한 콘텐츠는 지하철 게임, 성격 테스트, 대화 소재, 프로필 인터뷰, 소품 개그입니다.",
            "분석된 6개 동료 중 가장 높은 28.96%의 중앙값 참여율은 유지력이 제약이 아님을 시사합니다.",
          ],
          pivot: {
            title: "성격 관련 영역은 번역 우선으로 구축하십시오.",
            actions: [
              "모든 새로운 성격 관련 형식은 전제가 시각적이고 한국어가 필수적이기보다는 장식적인 요소가 되도록 디자인하십시오.",
              "기존 5개의 퍼스널리티 콘텐츠에 자막을 추가하여 출시 시장에 테스트용으로 재배포합니다.",
              "댄스 콘텐츠는 팬 확보(acquisition) 레이어로, 퍼스널리티 콘텐츠는 팬 유지(retention) 레이어로 활용하며, 이를 하나의 피드로 간주하지 않습니다.",
            ],
          },
        },
      ],
      footnote: "스토어는 2026년 9월에 구축되었으며, 123개 아이템, 70.9분 분량으로 모두 인덱싱되고 성과와 연계되었습니다. 영상 길이는 변수로 테스트되었으나 성과 구간 간에 차이를 보이지 않았습니다. 코퍼스가 이를 뒷받침하지 못하므로 멤버별 성과 주장은 하지 않습니다.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "인프라",
      title: "인프라 감사",
      philosophy: "모든 표면을 가정 대신 확인했으며, 각 표면에 대해 작동하는 컨트롤을 테스트했습니다. 좋은 소식은 필요한 것의 대부분이 이미 존재하지만 꺼져 있다는 것입니다.",
      intro: "이는 웹사이트, 링크인바이오, 팬 플랫폼, 팬덤, 커머스, 리테일, 라이트스틱 및 DSP 프로필 등 모든 소유 자산에 대한 표면별 검증입니다. 핵심은 아무것도 구축되지 않았다는 것이 아닙니다. 핵심은 레이블이 이미 자체 로스터의 다른 그룹을 위해 성공적으로 사용하고 있는 플랫폼에 수집 프로그램이 프로비저닝되었으나 게시되지 않은 상태로 남겨졌다는 것입니다.",
      subBlocks: [
        {
          label: "A",
          title: "자체 데이터 수집 (First-Party Data Capture)",
          objective: "모든 소유 표면에서 자체 데이터 수집이 존재하는지 증거를 통해 확립합니다.",
          strategy: "해당 릴리스의 공식 스마트 링크는 배포업체의 CRM 플랫폼에 있는 팬 데이터 캠페인을 출발점 URL로 선언합니다. 해당 캠페인 주소는 플랫폼에서 확인 및 인식되며, 이는 생성되지 않은 주소와 구별되며, 더 이상 존재하지 않는다는 메시지와 함께 입력 필드가 전혀 없는 페이지를 렌더링합니다. 동일한 레이블 로스터의 다른 그룹에 대한 해당 주소는 메일링 리스트 할당, 트리거 발송, 뉴스레터 옵트인 및 사전 저장(pre-save)을 포함한 15개의 입력 필드를 가진 라이브 수집 양식을 반환합니다. KEYVITUP을 위해 프로비저닝된 것은 레이블이 이미 다른 곳에서 성공적으로 운영 중인 툴링에서 수집되지 않고 있습니다.",
          components: {
            heading: "모든 소유 표면에서 부재 확인됨",
            items: [
              "작동하는 이메일 또는 SMS 수집 기능 (어디든). 프로비저닝된 캠페인은 15개의 필드를 렌더링하는 컨트롤에 대해 0개의 입력 필드를 렌더링합니다.",
              "레이블 웹 속성의 CRM 스크립트. 7개 플랫폼을 스캔했으나 존재하지 않습니다.",
              "레이블 사이트의 분석 또는 광고 픽셀. Google Analytics, Tag Manager, Meta 픽셀 없음",
              "실제 공식 웹사이트. 등록된 그룹 도메인은 인스타그램 프로필의 497바이트 프레임을 제공하며, 보안되지 않은 HTTP로만 응답합니다.",
              "모든 플랫폼의 유료 멤버십 및 가입 가능한 팬 클럽",
              "공식 라이트스틱 (데뷔 후 148일 경과)",
              "공식 스토어 및 앨범 변형 외 모든 상품 (약 17개 리테일 표면에서 확인)",
            ],
          },
          tactics: [
            "이미 작동하는 로스터 템플릿을 사용하여 프로비저닝된 수집 캠페인을 재게시합니다. 이는 빌드 작업이 아닌 구성 작업입니다.",
            "링크인바이오에 수집 블록을 추가합니다. 이는 이메일 및 SMS를 네이티브로 지원하지만 현재 둘 다 사용하지 않습니다.",
            "모든 자체 보유 채널에 미디어 집행 전에 픽셀을 설치하여, 첫 번째 캠페인이 단순히 노출 구매에 그치지 않고 팬덤을 구축하도록 합니다.",
            "결제 페이지로 바로 연결하기보다는 다음 사전 예약 시점에 팬 확보 기능을 연동합니다.",
          ],
        },
        {
          label: "B",
          title: "팬 플랫폼 구성",
          objective: "현재 존재하는 팬 소통 인프라와 그 기능을 파악합니다.",
          strategy: "해당 그룹은 하나의 팬 플랫폼을 보유하고 있으며, 현재 활성화되어 있습니다. 해당 플랫폼의 자체 설정은 다음과 같은 기능을 허용하지 않습니다: 멤버십 비활성화, 기부 비활성화, 전화번호 인증 비활성화, 개인 메시지 숨김, 그룹 메시지 숨김, 라이브 쇼 숨김, 리스닝 파티 숨김, 랭킹 투표 비활성화, 번역 서비스 비활성화. 지원 언어 목록은 한국어, 영어, 일본어 및 두 가지 중국어 변형으로 구성되어 있어, 론칭 타겟 시장에서 사용되는 모든 언어를 제외하고 있습니다. 팬덤명 KEYPER는 이 플랫폼에서 공식적으로 발표되었습니다. KEYPER에 가입하려는 팬은 가입할 방법이 없습니다.",
          components: {
            heading: "이번 분기에 활성화할 수 있는 비활성화된 기능은 무엇인가?",
            items: [
              "멤버십 (현재 팬덤명에 대한 공식적인 팬클럽 활동 공간이 없는 상태)",
              "전화번호 인증 (현재 플랫폼에서 사용 가능한 유일한 SMS 연계 팬 확보 수단)",
              "개인 및 그룹 메시징 (경쟁 그룹들이 운영하는 팬 유지 기능)",
              "라이브 쇼 및 리스닝 파티 (신인 그룹이 운영할 수 있는 가장 저렴한 정기적인 소통 수단)",
              "랭킹 투표 (수동적인 팔로워를 집계 및 관리 가능한 팬덤으로 전환)",
              "번역 기능 (그룹의 주요 시장 언어를 이미 제외한 플랫폼의 번역 기능)",
            ],
          },
          kpis: [
            "1분기 말까지 멤버십 활성화 및 등록 회원 수 확보",
            "측정 가능한 첫 자체 팬 접점 확보 (0부터 시작)",
            "번역 기능 활성화 및 론칭 시장 언어 추가",
          ],
        },
        {
          label: "C",
          title: "커머스 및 리테일",
          objective: "한국 외 팬이 실제로 상품을 구매할 수 있는 경로를 파악하고, 구매 시 누가 데이터를 확보하는지 확인합니다.",
          strategy: "물리적 유통은 한국 내 리테일, 미국에 기반을 둔 두 곳의 전문 리테일러, 그리고 주요 미국 플랫폼의 제3자 마켓플레이스 리스팅을 통해 광범위하게 이루어지고 있습니다. 하지만 어느 곳에서도 퍼스트 파티 관계는 존재하지 않습니다. 검토된 모든 미국 내 판매 채널은 리셀러이며, 한 전국 체인점은 리테일러 독점 상품을 판매하는 동종 상품들과 함께 카탈로그 항목을 나열하고 있고, 다른 주요 전국 체인점에서는 해당 음반에 대한 검색 결과가 나오지 않았습니다. 공식 스마트 링크는 15개의 스트리밍 목적지를 나열하고 있지만, 실물 음반 구매처는 단 한 곳도 없습니다. 공식 스토어는 존재하지 않으며, 어떠한 종류의 상품 라인도 없습니다.",
          components: {
            heading: "수요와 거래 간의 격차",
            items: [
              "모든 캠페인이 연결하는 유일한 자산인 공식 스마트 링크에 구매 링크가 없습니다.",
              "동종 업계 경쟁사들이 동일 계정에서 리테일 독점권을 보유하고 있는 것과 달리, 어떠한 리테일 독점권도 없음",
              "동일 로스터의 다른 그룹이 이미 등재되어 있는 해당 카테고리 내 최대 팬덤 커머스 플랫폼에 입점하지 않음",
              "약 17개 채널에 걸쳐 앨범 버전 변형 외에는 추가 상품이 없음",
              "표준적인 2차 팬덤 구매 시점인 출시 4.9개월이 지나도록 응원봉이 없음",
            ],
          },
          tactics: [
            "다음 릴리즈 전에 스마트 링크에 실물 앨범 구매 링크를 추가하여, 비용 없이 기존 트래픽을 확보할 것",
            "두 번째 EP의 우선순위 시장별로 사전 예약 판매를 연계한 리테일 독점권을 협상할 것",
            "로스터가 이미 관계를 맺고 있는 팬덤 커머스 판매 페이지를 개설할 것",
            "응원봉 출시 시점을 3차 팬덤 활동 주기가 아닌 2차 팬덤 활동 주기에 맞출 것",
          ],
        },
        {
          label: "D",
          title: "이미 확보된 자산",
          objective: "부족한 부분과 이미 존재하지만 활용되지 않는 부분을 분리해야 하며, 두 가지는 다른 대응 방안이 필요함.",
          strategy: "The audit found real, well-maintained assets. The Spotify profile is claimed and actively managed, with the Artist Pick set and a complete biography, which proves the tooling is in the label's hands and is being used. The YouTube presence is an Official Artist Channel with 272 videos, a live Shorts tab and an active Community tab. Physical distribution reaches globally. Eight official social accounts are live. Two of them, on Chinese platforms with roughly 15,700 combined followers, are label-run and verified and are linked from nowhere at all, which is free audience sitting behind a door with no handle.",
          components: {
            heading: "존재하지만 활용도가 낮은 자산",
            items: [
              "Spotify profile actively managed, Artist Pick set, biography complete",
              "YouTube 공식 아티스트 채널 운영 중 (Shorts 및 커뮤니티 탭 활성), 멤버십 기능은 아직 미활성화",
              "총 약 1,300만 뷰를 기록한 뮤직비디오 3편, 구독자 수의 약 300배에 달함",
              "인증된 중국 플랫폼 계정 2개, 팔로워 약 15,700명, 다른 어떤 자산과도 연결되지 않음",
              "An Apple Music profile live since release day, carrying no editorial biography prose",
              "필리핀 팬 계정과 브라질 팬 계정이 이미 지원 없이 자체적으로 활동 중",
            ],
          },
          kpis: [
            "모든 소유 자산 간 상호 링크, 하루 작업으로 완료 가능하나 현재 미처리 상태",
            "YouTube 멤버십 기능 활성화",
            "Apple Music editorial biography submitted",
          ],
        },
      ],
      footnote: "Every surface above was checked on September 3, 2026 against a working control. Two items remain unverified in either direction and are not counted above: Spotify Canvas, which renders only in the mobile app, and Instagram fan-account presence, which sits behind a login wall.",
    },

    // ===================================================================
    // 07. Core Strategy & Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "07",
      navLabel: "철학",
      title: "핵심 전략 및 철학",
      thesis: "청중을 임대하는 것을 중단하십시오. 해당 그룹은 이미 데뷔 동료들보다 도달하는 사람들의 점유율이 더 높습니다. 그들을 수용할 공간을 마련한 후, 가장 먼저 호응한 네 개 국가에서 더 많은 청중을 확보하십시오.",
      hierarchy: [
        {
          label: "기반 / 자체 확보",
          description: "그 외 모든 것은 이에 기반하여 복합적으로 작용하거나 전혀 작용하지 않습니다. 프로비저닝된 확보 캠페인을 재게시하고, 이미 비용이 지불된 팬 플랫폼 기능을 활성화하며, 모든 표면에 픽셀을 설치하고, KEYPER가 등록할 수 있는 공간을 제공하십시오. 이것이 본 계획에서 가장 저렴한 작업이며, 다음 릴리스를 이번 릴리스보다 더 가치 있게 만드는 유일한 작업입니다. 이것이 존재하기 전까지 모든 청취자는 플레이리스트에서 임대되며, 지출되는 모든 달러는 임대료를 구매하는 것입니다.",
        },
        {
          label: "증폭기 1 / 이미 응답한 시장",
          description: "인도네시아, 말레이시아, 태국, 필리핀 및 라틴 아메리카는 홍보 지원 없이 론칭 청중을 확보했으며 그 이후로 아무것도 받지 못했습니다. 이들을 제대로 공략하십시오: 번역된 콘텐츠를 먼저 제공하십시오. 비용이 거의 들지 않기 때문입니다. 그런 다음 아직 건재한 숏폼 청중을 대상으로 타겟 유료 광고를 진행하고, 팬덤이 이미 두 번이나 스스로 조직하려 했으나 가입할 곳을 찾지 못한 곳에 팬 페이지 네트워크를 구축하십시오.",
        },
        {
          label: "증폭기 2 / 콘텐츠 시스템",
          description: "계정은 잘 만들어졌으나 방향성이 없습니다. 두 개의 명명된 프랜차이즈, 하나의 개성, 하나의 퍼포먼스가 고정된 주간 슬롯에 배치됩니다. 전체 그룹은 예외가 아닌 기본 형태로 현장에 배치됩니다. 이미 사람들에게 도달하는 콘텐츠에 대한 행동 유도 문구를 포함하십시오. 4주간의 집중적인 배포 대신 지속적으로 실행되는 에셋을 출시하십시오. 이 중 어느 것도 더 큰 제작 예산을 필요로 하지 않습니다. 모든 것은 결정이 필요합니다.",
        },
        {
          label: "증폭기 3 / 전환 순간",
          description: "스마트 링크에 실물 구매 링크, 사전 주문 확보가 포함된 우선순위 시장별 소매 독점 상품, 두 번째 사이클에 맞춰진 응원봉, 그리고 업계가 모이는 장소뿐만 아니라 청중이 실제로 있는 곳에서 반복되는 오프라인 활동을 포함하십시오. 지난 8월 로스앤젤레스에서의 활동은 이것이 효과가 있음을 증명했습니다. 해당 활동은 현재 그룹이 보유한 가장 큰 리스너 시장을 창출했지만, 단 하나의 연락처 정보도 확보하지 못했습니다.",
        },
      ],
      messaging: [
        "분명히 말하자면, 데뷔는 성공했지만, 그 성과를 유지할 시스템은 전혀 가동되지 않았습니다.",
        "규모가 아닌 전환을 우선하십시오. 이 그룹은 함께 데뷔한 모든 아티스트보다 사람들을 더 잘 유지하며, 이것이 스토리를 구축할 가치가 있는 사실입니다.",
        "스트리밍 숫자를 약속하지 마십시오. 스트림은 도달 및 확보에서 파생되며 이 규모에서는 정직하게 예측할 수 없으므로, 여기서 약속된 지표는 자체 보유 연락처, 팔로워 및 판매량입니다.",
        "론칭 시장을 우연이 아닌 이점으로 대하십시오. 도움 없이 스스로 모인 청중은 누구에게나 가장 저렴한 판매 대상입니다.",
      ],
      footnote: "순서는 개별 항목보다 더 중요합니다. 확보 후 도달, 도달 후 전환 순간. 이들을 병렬로 실행하는 것이 첫 번째 사이클이 끝난 방식입니다: 잠시 동안 많은 청중이 있었지만 남은 것은 아무것도 없었습니다.",
    },

    // ===================================================================
    // 08. Vertical 1 / Fandom & Conversion Infrastructure
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "팬덤",
      title: "세로 1 / 팬덤 및 전환 인프라",
      philosophy: "기반. 이 버티컬의 모든 것은 0에서 시작하여 임대된 리스너를 보유 고객으로 전환하기 위해 존재합니다.",
      intro: "이 버티컬은 처음 3주 동안 먼저 그리고 단독으로 실행됩니다. 계획의 다른 모든 항목은 일단 존재하면 더 큰 가치를 갖기 때문입니다. 여기에는 새로운 도구가 필요하지 않습니다. 캡처 플랫폼은 이미 프로비저닝되었고, 팬 플랫폼은 이미 활성화되었으며, 레이블은 이미 다른 그룹을 위해 성공적으로 운영하고 있습니다.",
      subBlocks: [
        {
          label: "A",
          title: "캡처 프로그램 재발행",
          objective: "3주 이내에 모든 시장에서 실시간으로 작동하는 퍼스트 파티 이메일 및 SMS 캡처 기능.",
          strategy: "유통사의 CRM 플랫폼에 프로비저닝된 팬 데이터 캠페인은 처음부터 구축하는 대신 이미 로스터의 다른 그룹에서 실행 중인 템플릿을 사용하여 재발행됩니다. 한국의 데이터 법은 가입을 다른 것과 묶는 것을 금지하고 한국어 고지 및 명시적 옵트아웃을 요구하므로, 동의 언어는 시장별로 작성되어 한국어 및 비한국어 흐름이 분리됩니다. 비한국 팬은 직접 캡처되며, 한국 팬은 법에 따라 팬 플랫폼을 통해 계속 진행됩니다.",
          components: {
            heading: "구축 순서",
            items: [
              "로스터 템플릿, 시장별 분리된 동의로 프로비저닝된 캠페인 재발행",
              "이메일 및 SMS를 기본적으로 지원하지만 현재는 사용하지 않는 링크인바이오에 캡처 블록 추가",
              "모든 미디어 실행 전에 모든 소유 표면에 픽셀 배포",
              "결제로 바로 연결하는 대신 다음 사전 주문에 캡처 연결",
              "버티컬 2의 콘텐츠가 실제로 가리킬 수 있는 단일 대상 페이지",
            ],
          },
          kpis: [
            "0에서 시작하여 첫 보유 고객 기록",
            "바하사 인도네시아어, 태국어, 스페인어를 포함한 5개 언어로 캡처 기능 라이브",
            "첫 유료 광고 전에 모든 소유 표면에서 픽셀 발동",
            "총합이 아닌 시장별로 측정된 옵트인 비율",
          ],
          timeline: "1주차 ~ 3주차",
        },
        {
          label: "B",
          title: "팬 플랫폼 활성화",
          objective: "이미 유료로 구매되었지만 현재 비활성화된 기능을 사용하여 KEYPER가 존재할 공간 제공",
          strategy: "기존 팬 플랫폼 공간에는 멤버십, 기부, 전화 인증, 개인 및 그룹 메시징, 라이브 쇼, 리스닝 파티, 랭킹 투표 및 번역 기능이 모두 꺼져 있습니다. 각 기능은 빌드가 아닌 구성 변경입니다. 팬덤은 이미 이름은 있지만 거주지가 없으므로 멤버십이 먼저 진행됩니다. 한국어, 영어, 일본어, 중국어만 지원하는 멤버십은 출시 관객을 생산한 모든 시장을 배제하므로, 번역 및 누락된 4개 출시 시장 언어가 함께 제공됩니다.",
          components: {
            heading: "순서",
            items: [
              "무료 등급을 포함하여 멤버십을 활성화하고 가격을 책정하여 첫 번째 코호트를 측정 가능하게 함",
              "번역 기능을 활성화하고 언어 목록에 인도네시아어, 태국어, 말레이어, 스페인어를 추가함",
              "동종 업계에서 운영하는 유지 제품으로서 비공개 메시징 기능 활성화",
              "순위 투표 기능을 활성화하여 수동적인 팔로워를 계산 가능하고 접근 가능한 팬덤으로 전환함",
              "신인 그룹에게 가장 저렴한 반복 접촉 수단인 정기 라이브 슬롯",
            ],
          },
          kpis: [
            "등록 회원 수 (0명부터 시작)",
            "등록 회원 주간 활성 비율",
            "비한국인 멤버십 비율 (시장 가설을 증명하는 수치)",
          ],
          timeline: "2주차부터 6주차까지",
        },
        {
          label: "C",
          title: "팬 페이지 네트워크 시딩",
          objective: "이미 형성 시도를 보인 시장에서 조직화된 팬덤이 결집할 수 있는 구심점을 제공함.",
          strategy: "전체 조직화된 팬 네트워크는 12개의 핸들을 통해 약 2,350개의 계정으로 구성되며, 이는 TikTok 팔로워의 1.4%에 해당합니다. 그룹의 가장 큰 플랫폼인 TikTok에는 팬이 운영하는 계정이 전혀 없습니다. 인도네시아 팬베이스 계정 두 개가 생성되었으나 게시물 없이 방치되었으며, 이는 참여할 무언가를 찾고 있지만 아무것도 찾지 못한 수요를 보여줍니다. 네트워크는 출시 시장에 우선적으로 현지 언어로 시딩되며, 블록 A에 구축된 캡처 표면과 연결됩니다.",
          components: {
            heading: "우선순위 시장 (순서대로)",
            items: [
              "인도네시아 (계정 두 개가 생성되었으나 방치되었고, 최고 청취자 수는 140,221명)",
              "말레이시아 (최고 102,330명으로, 조직화된 활동은 전혀 없음)",
              "필리핀 (지원 없이 이미 팬 계정이 존재하며 활발하게 활동 중)",
              "스페인어 사용 라틴 아메리카 (현재 어떠한 계정도 없으며, 리마는 청취 도시 중 4위)",
              "태국 (최고 22,477명으로, 활동 없음)",
            ],
          },
          kpis: [
            "현재 2,350개의 기준선 대비 네트워크 도달 범위 배수",
            "첫 TikTok 팬 활동 (현재 기준 0명 대비)",
            "네트워크 게시물을 통한 연락처 확보 (자체 게시물 대비)",
          ],
          timeline: "4주차 ~ 12주차",
        },
      ],
      footnote: "한국 데이터 법률은 다른 활동과 가입을 묶는 것을 금지하며, 한국어 고지 및 명시적 거부권 행사를 요구합니다. 또한, 이중 동의 절차는 한국 휴대폰 번호에서 안정적으로 완료되지 않습니다. 상기 설계는 비한국 팬을 직접 확보하며, 한국 팬은 의도적으로 팬 플랫폼에 남도록 하여 누락으로 인한 것이 아님을 명확히 합니다.",
    },

    // ===================================================================
    // 09. Vertical 2 / Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "디지털",
      title: "세로 2 / 디지털 마케팅",
      philosophy: "제약은 도달 범위이지 크리에이티브가 아닙니다. 해당 콘텐츠는 이미 동종 최고 수준의 참여율을 기록하고 있으나, 너무 적은 사람들에게 도달하며 아무런 방향도 제시하지 못하고 있습니다.",
      intro: "유료 광고는 세로 1의 확보 표면이 활성화된 후에만 시작되어, 구매한 잠재고객이 영구적인 곳에 안착하도록 합니다. 이곳의 모든 것은 작고 의도적으로 시작되며, 시장 수준의 기준선과 비교 측정되고, 움직임이 있는 곳에서만 확장됩니다. 이 세로 항목의 어떤 부분도 스트리밍 수치를 약속하지 않습니다.",
      subBlocks: [
        {
          label: "A",
          title: "유료 소셜, 시장별 단계적 진행",
          objective: "이미 수요를 입증한 시장에서 팔로워당 비용이 확장을 정당화하는 수준으로 도달 범위를 재구축합니다.",
          strategy: "시장은 한 번에 모두 진입하는 대신 순차적으로 진입하여, 평균화된 결과 대신 각 시장별로 읽을 수 있는 결과를 도출합니다. 인도네시아와 말레이시아가 먼저 시작되는 이유는 가장 큰 출시 시장이었고 해당 세트에서 가장 저렴한 미디어이기 때문입니다. 스페인어 사용 라틴 아메리카가 그 뒤를 잇는데, 숏폼 잠재고객이 이미 존재하며 경쟁자가 선점하지 않았기 때문입니다. 미국은 가장 마지막에 가장 작게 진행되는데, 프로모션 투자가 이미 이루어졌고 후속 조치가 신규 확보가 아닌 리타겟팅 작업이기 때문입니다. 크리에이티브는 계정에서 입증된 형태, 즉 전체 그룹, 현장 촬영, 엔드 카드 포함을 활용합니다.",
          components: {
            heading: "테스트 구조",
            items: [
              "한 번에 한 시장만 활성화하고 나머지는 비활성화하여, 기여도를 혼합되지 않고 읽을 수 있도록 합니다.",
              "최상위 10%에 해당하는 형태의 콘텐츠로만 크리에이티브 제작: 전체 그룹, 현장 촬영, 목적지 포함",
              "모든 광고는 스트리밍 링크가 아닌 확보 표면을 가리킵니다.",
              "시장별 주간 확장 또는 중단 규칙을 적용하며, 해당 기준점 이하의 지출은 노이즈만 구매하게 됩니다.",
              "8월 오프라인 잠재고객 및 기존 숏폼 참여자를 기반으로 리타겟팅 풀 구축",
            ],
          },
          kpis: [
            "시장별 확보 연락처당 비용, 이곳에서 유일하게 약속된 효율성 지표입니다.",
            "Cost per Spotify follower by market",
            "청취자 증가 시 팔로워 대 청취자 비율 0.40 이상 유지",
            "캠페인 수준이 아닌 시장별로 실제 측정된 주간 데이터를 기준으로 기준선 설정",
          ],
          timeline: "4주차 ~ 12주차",
        },
        {
          label: "B",
          title: "고정 슬롯 2개의 콘텐츠 프랜차이즈",
          objective: "영상 분석에서 발견된 가장 큰 구조적 격차인 신규 팔로워에게 팔로우할 거리를 제공합니다.",
          strategy: "각각 명명되고, 해시태그가 붙으며, 홍보할 콘텐츠가 없는 주간에도 고정된 주간 슬롯에서 운영되는 하나의 퍼스널리티 프랜차이즈와 하나의 퍼포먼스 프랜차이즈입니다. 퍼스널리티 포맷은 번역 우선으로 설계되었으므로, 전제는 시각적이며 한국어는 하중을 지탱하기보다는 장식적인 역할을 하여 7번 항목에서 확인된 긴장감을 해소합니다. 퍼포먼스 프랜차이즈는 그룹이 이미 보유한 안무 강점을 반복되는 형태로 가져갑니다. 비교 대상은 레이블 자체 로스터이며, 다른 그룹은 퍼스널리티 분야를 약 7배의 속도로 운영하고 있습니다.",
          components: {
            heading: "계정 자체 데이터에서 도출된 포맷 규칙",
            items: [
              "전체 그룹을 기본 형태로, 상위 밴드의 44%가 5명 이상 멤버를 보여주는 반면 하위 밴드는 13%에 불과합니다.",
              "기본적으로 현장 촬영을 하며, 상위 밴드의 절반이 그랬고 하위 밴드의 71%는 그렇지 않았습니다.",
              "모든 릴리스 관련 게시물은 제목, 날짜 및 목적지가 포함된 1초 길이의 엔드 카드로 마무리됩니다.",
              "솔로 콘텐츠는 계속되지만, 개별적으로 게시되는 대신 명명된 시리즈에 첨부됩니다.",
              "현재 코퍼스에 전혀 보이지 않는 TikTok에 플랫폼 네이티브 메커니즘을 도입합니다.",
            ],
          },
          kpis: [
            "40,100 계정 기준 대비 프랜차이즈 게시물당 평균 조회수",
            "약 1%의 기준에서 행동 촉구(call to action)를 포함하는 주간 콘텐츠 비율",
            "프랜차이즈 슬롯에 기인하는 팔로워 성장",
          ],
          timeline: "3주차부터 12주차까지, 진행 중",
        },
        {
          label: "C",
          title: "관리되지 않는 도달 범위",
          objective: "계정이 이미 얻고 있지만 현재 관리하지 않고 있는 도달 범위를 확보합니다.",
          strategy: "미디어 지출 전에 수행할 가치가 있는 무료 항목 세 가지입니다. Instagram은 33개의 동일한 당일 게시물 중 28개에서 TikTok을 능가하며, 팔로워는 19% 적지만 중간 쌍별 이점은 1.56배입니다. 현재 Instagram은 채널이라기보다는 거울로 취급되고 있습니다. 약 15,700명의 팔로워를 보유한 두 개의 검증된 중국 플랫폼 계정은 어디에서도 링크되지 않았습니다. 그리고 세 개의 뮤직 비디오는 43,000명의 YouTube 구독자에 비해 약 1,300만 조회수를 기록하고 있으며, 이는 구독자당 약 300회의 조회수로 그룹이 소유한 가장 큰 미전환 자산입니다.",
          components: {
            heading: "즉각적이고 비용이 들지 않는 항목",
            items: [
              "Instagram을 TikTok의 거울이 아닌 자체 게시물 결정 권한을 가진 주요 채널로 취급합니다.",
              "연결되지 않은 두 개의 중국 플랫폼 계정을 포함하여 소유한 모든 표면을 교차 연결합니다.",
              "YouTube 채널 멤버십을 활성화하고 세 개의 뮤직 비디오에 엔드 스크린을 추가합니다.",
              "기존 라이브러리에 한국어 자막을 추가하며, 이 중 75%는 이미 한국어 없이도 작동합니다.",
              "한국어 의존도가 높은 다섯 곡을 자막과 함께 재발매하여 출시 시장 테스트를 진행합니다.",
            ],
          },
          kpis: [
            "뮤직비디오 조회수 대비 YouTube 구독자 전환율",
            "Instagram을 주요 플랫폼으로 간주하며, 미러링되지 않은 게시물 공유율로 측정합니다.",
            "자막이 추가된 라이브러리 점유율 (기반 0에서 시작)",
          ],
          timeline: "1주차부터 5주차까지",
        },
      ],
      footnote: "모든 시장 라인에는 최악, 예상, 최상의 시나리오와 테스트 후 확장 규칙이 적용됩니다. 스트리밍 볼륨은 주간 기준으로 보고되며, 이 규모에서는 정직하게 예측할 수 없으므로 약정된 지표가 아니며, 이에 대한 수치를 제시하는 모든 대행사는 추측하는 것입니다.",
    },

    // ===================================================================
    // 10. Vertical 3 / DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "DSP",
      title: "세로 3 / DSP 전략",
      philosophy: "첫 번째 사이클은 그룹의 배치가 가능하다는 것을 증명했습니다. 또한, 포착 없는 배치는 임대일 뿐이라는 것도 증명했습니다. 이 세로축은 에디토리얼을 계획이 아닌 가속기로 취급합니다.",
      intro: "두 가지 사실이 이 작업을 구성합니다. 173만 명의 팔로워를 보유한 에디토리얼 지원은 출시 시점에 제공되었으나 7주 이내에 철회되었으며, 월간 리스너 수는 거의 정확하게 이를 추적했습니다. 별도로, 영상이나 캠페인 없이 발매된 앨범 트랙이 8월 말 알고리즘 리스트에 포함된 후 현재 유일하게 가속화되고 있는 곡입니다. 음악은 스스로 나아갑니다. 우리의 임무는 다음 에디토리얼 결정이 의존이 아닌 보너스가 될 만큼 충분한 자체 수요를 구축하는 것입니다.",
      subBlocks: [
        {
          label: "A",
          title: "다음 릴리스를 위한 배치 사례",
          objective: "데뷔 때보다 더 강력한 에디토리얼 논거를 가지고 다음 사이클에 진입하며, 이는 참신함이 아닌 증거에 기반합니다.",
          strategy: "A debut gets placed on potential. A second release gets placed on evidence. The evidence a Spotify editor responds to is save rate, completion, follower conversion and market-level traction, all of which the plan generates in verticals 1 and 2 before the pitch is made. The pitch is prepared per market rather than centrally, because the group's strongest markets are not the ones a Korean-centred pitch would lead with. Malaysian, Indonesian and Latin American editorial teams are approached with their own market data, which is a materially different conversation from the one the debut had.",
          components: {
            heading: "먼저 구축할 피치 입력값",
            items: [
              "팔로워 전환 증거 (데뷔 사이클에서는 아무것도 포착하지 못했기 때문에 생성되지 않음)",
              "인도네시아, 말레이시아, 필리핀, 라틴 아메리카의 시장별 트랙션 데이터",
              "활발한 프로모션 없이 하루 약 7,900회의 스트리밍을 기록하는 카탈로그 기본치",
              "캠페인 없이도 음악이 유지된다는 증거로서의 비싱글 트랙에 대한 알고리즘적 선택",
              "분석된 6개 동종 그룹 중 가장 높은 참여율로, 피치에서 진정한 차별화 요소입니다.",
            ],
          },
          kpis: [
            "다음 릴리스 후 1일이 아닌 30일 및 60일에 유지되는 에디토리얼 배치",
            "Share of total playlist reach that is not Spotify-owned, from a current 17 percent",
            "데뷔 사이클 대비 저장률 및 완료율",
          ],
          timeline: "5주차부터 12주차까지, 다음 사이클로",
        },
        {
          label: "B",
          title: "집중 위험 감소",
          objective: "그룹이 통제하지 않는 8개 리스트에 집중된 플레이리스트 도달 범위의 83%를 중단",
          strategy: "Of 206 current Spotify playlists, eight are Spotify-owned and carry 498,745 of the 602,175 total reach. Four of those eight are algorithmic artist radio lists that can disappear without a human decision. The remaining 198 lists carry 103,430 between them and 194 of them have fewer than 1,000 followers. The counterweight is a deliberate independent and curator programme in the launch markets, plus the owned surfaces from vertical 1, so that the next removal costs the group a smaller share of its reach than the last one did.",
          components: {
            heading: "다각화",
            items: [
              "인도네시아, 말레이시아 및 라틴 아메리카의 독립적이고 시장 현지화된 큐레이터 프로그램",
              "Apple Music editorial biography submitted, which is currently absent",
              "두 번째로 큰 DSP 관계를 한국과 미국뿐만 아니라 출시 시장에서도 구축",
              "사전 저장 및 팔로우 프롬프트를 포함하는 자체 플랫폼을 통해 도달 범위를 월간 리스너가 아닌 영구 팔로워로 전환",
            ],
          },
          kpis: [
            "Non-Spotify-owned share of reach, from 17 percent today",
            "오늘날 83%에서 상위 8개 리스트의 플레이리스트 도달 범위 집중도",
            "다음 릴리스에서 확보된 사전 저장 수 (기본값 0)",
          ],
          timeline: "6주차부터 12주차까지",
        },
      ],
      footnote: "플레이리스트 기록, 팔로워 도달 범위 및 최고 순위: Chartmetric, 2026년 9월 3일. 이 버티컬에서는 어떠한 편집 결과도 보장되지 않으며, 편집은 자체 수요를 촉진하는 것으로 간주됩니다. 이것이 또 다른 제거를 견딜 수 있는 유일한 자세입니다.",
    },

    // ===================================================================
    // 11. Vertical 4 / PR & Market Entry
    // ===================================================================
    {
      type: "vertical",
      number: "11",
      navLabel: "PR",
      title: "버티컬 4 / PR 및 시장 진출",
      philosophy: "프레스 프로그램은 잘 실행되었으며 한 시장을 목표로 했습니다. 기회는 이미 반응한 시장에 동일한 시스템을 적용하는 것입니다.",
      intro: "그룹은 실제 국제 프레스 프로그램을 진행했습니다: 11건의 영어 인터뷰, KCON Los Angeles 주변의 미국 현지 활동, 팬 미팅, 파트너 활동 등이 포함되었으며, 한국 시간 자정에 인터뷰를 예약하여 미국 비즈니스 시간에 맞춰 진행했습니다. 이러한 노력은 측정 가능한 결과를 낳았고 미국은 이제 가장 큰 단일 추적 리스너 시장이 되었습니다. 문제는 이러한 노력이 동남아시아 또는 라틴 아메리카에는 전혀 적용되지 않았다는 것입니다. 이 지역에서는 현재까지 두 개의 레이블 서비스 플레이스먼트가 전체 프로그램을 대표하고 있습니다.",
      subBlocks: [
        {
          label: "A",
          title: "시장 진출 순서",
          objective: "출시 청중을 생산한 시장에서의 첫 홍보 활동.",
          strategy: "진입은 단계적으로 이루어지며, 쇼케이스보다는 가능한 가장 저렴한 신호로 시작합니다. 번역된 콘텐츠와 현지 언어의 감사 메시지가 먼저 제공되는데, 이는 비용이 거의 들지 않으며 항공편 예약 전에 잠재 청중이 반응하는지 테스트하기 때문입니다. 현지 언론 및 크리에이터 관계는 반응이 있는 시장에서 후속적으로 진행됩니다. 그런 후에야 현장 활동이 계획되며, 이는 업계 일정에 맞춰지는 것이 아니라 반응이 가장 강했던 곳에서 계획됩니다.",
          components: {
            heading: "시장별 진입 순서",
            items: [
              "번역된 콘텐츠 및 감사 메시지 1건, 거의 제로 비용으로",
              "이 시장들에서 그룹이 한 번도 접근한 적 없는 현지 음악 및 청소년 언론",
              "캡처 표면과 연결된 크리에이터 및 팬 네트워크 시딩",
              "자체 시장 데이터로 접근한 라디오 및 DSP 시장 팀",
              "이전 단계에서 측정 가능한 반응을 보인 곳에서만 계획된 현장 활동",
            ],
          },
          kpis: [
            "5개 시장에서 제로 기반으로 시작한 시장별 첫 현지 언어 보도",
            "시장별 확보된 연락처",
            "5월 최고치 대비 시장별 청취자 이동, 약정보다는 보고",
          ],
          timeline: "3주차 ~ 12주차",
        },
        {
          label: "B",
          title: "이미 완료된 작업 전환",
          objective: "8월 활동으로 생성되었으나 수집되지 않은 청중을 소급하여 확보합니다.",
          strategy: "8월에 로스앤젤레스에서 4일간 세 차례의 활동이 진행되었으며, 이는 Top 20 YouTube Shorts 노출과 측정 가능한 청취자 결과를 낳았지만, 수집할 것이 없어 연락처 정보를 전혀 확보하지 못했습니다. 해당 청중은 리타겟팅과 참여했던 플랫폼을 통해 여전히 도달 가능합니다. 이는 모든 뮤직 비디오 시청자에게도 마찬가지입니다. 약 1,300만 조회수에 43,000명의 구독자입니다. 이 섹션은 지난 5개월간의 작업을 역사가 아닌 재고로 취급합니다.",
          components: {
            heading: "회수 항목",
            items: [
              "8월 참여 풀을 캡처 표면으로 리타겟팅",
              "세 개의 뮤직 비디오에 현재 누락된 엔드 스크린 및 구독 프롬프트",
              "현장에 참석한 모든 사람에게 후속 연락, 이는 캡처 표면이 먼저 존재해야 함",
              "일관된 대중 서사, 현재 그룹명은 레이블 성명, 멤버 인터뷰, 앨범 카피 전반에 걸쳐 네 가지 다른 공식적 의미를 지니고 있음",
            ],
          },
          kpis: [
            "기존 참여 풀에서 확보된 연락처",
            "뮤직비디오 트래픽에서의 구독자 전환",
            "그룹명 및 스토리에 대한 합의된 단일 공개 계정",
          ],
          timeline: "1주차부터 6주차까지",
        },
      ],
      footnote: "2026년 9월, 11건의 영어 인터뷰 및 한국 무역 언론 전반의 보도 검토. 블록 B의 브랜드 일관성 항목은 해결하는 데 비용이 들지 않으며 이 페이지의 다른 모든 항목에 영향을 미칩니다.",
    },

    // ===================================================================
    // 12. Partner-Led Workstreams
    // ===================================================================
    {
      type: "vertical",
      number: "12",
      navLabel: "파트너",
      title: "파트너 주도 워크스트림",
      philosophy: "아래 업무는 레이블 및 파트너와 함께 진행됩니다. Crowd Control Digital은 전략, 데이터 및 조정을 제공하며, 이 항목들을 직접 실행하지는 않습니다.",
      intro: "이 계획에서 가장 가치 있는 항목 중 일부는 캠페인이 아닌 의사결정이며, 이미 관계를 맺고 있는 사람들에게 속합니다. 소유권을 명확히 하고 양측 간에 누락되는 부분이 없도록 여기에 명시되어 있습니다.",
      subBlocks: [
        {
          label: "A",
          title: "레이블 소유 의사결정",
          objective: "계획의 나머지 부분을 가능하게 하며 구매할 수 없는 항목들",
          components: {
            heading: "iNKODE 보유",
            items: [
              "배포자 관계로부터의 의사결정이 필요한 프로비저닝된 캡처 캠페인 재게시 (구축이 아닌)",
              "비활성화된 팬 플랫폼 기능 활성화 (이미 활성화된 공간의 구성 변경)",
              "본 문서의 모든 타임라인이 작성된 두 번째 EP의 릴리스 캘린더",
              "라이트스틱 범위 설정 및 상품 라인 (두 가지 모두 4.9개월 시점에 부재)",
              "그룹명 및 기원 스토리에 대한 합의된 단일 공개 계정",
            ],
          },
        },
        {
          label: "B",
          title: "유통 및 소매",
          objective: "수요를 단위 및 데이터로 전환하는 상업적 표면",
          components: {
            heading: "유통사 및 소매 파트너 보유",
            items: [
              "현재 15개의 스트리밍 목적지와 소매처가 없는 공식 스마트 링크에 실물 앨범 구매 링크를 추가했습니다.",
              "두 번째 EP의 우선순위 시장별 소매 독점 상품 1개와 사전 주문 확보를 포함합니다.",
              "같은 로스터에 있는 다른 그룹이 이미 관계를 맺고 있는 팬덤 커머스 리스팅입니다.",
              "한국과 미국뿐만 아니라 출시 시장에서의 지역별 DSP 관계를 구축합니다.",
            ],
          },
        },
        {
          label: "C",
          title: "Transparent Arts",
          objective: "한국 외 지역에서의 관계 구축, 포지셔닝 및 시장 접근성 확보.",
          components: {
            heading: "Transparent Arts가 보유",
            items: [
              "미국 시장 진출 관계 및 소매/쇼케이스 경로 확보.",
              "동남아시아 및 라틴 아메리카 지역 파트너 소개.",
              "한국 외 지역에서의 언론 홍보 및 크리에이티브 포지셔닝.",
              "수직 4에서 계획된 모든 대면 활동에 대한 현장 조정.",
            ],
          },
        },
      ],
      footnote: "Crowd Control Digital은 세 가지 블록 전반에 걸쳐 전략, 측정 및 조정을 제공하며, 실행은 하지 않습니다. 수직 1부터 4까지의 항목이 상위 항목에 의존하는 경우, 해당 의존성은 타임라인에 명시됩니다.",
    },

    // ===================================================================
    // 13. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "13",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "12주간 진행되며, 미디어 구매 전에 확보가 이루어지고 유료 집행 전에 무료 도달 범위를 고정하도록 순서가 정해집니다. 첫 3주 동안은 지출이 전혀 없습니다. 시장 진출은 병렬 방식이 아닌 순차적으로 한 번에 하나씩 이루어지므로 각 시장에서 명확한 결과를 도출할 수 있습니다. 본 표는 10주차에 두 번째 릴리스가 예정되어 있다고 가정하며, 주변 셀은 예시이며 실제 날짜에 따라 이동합니다.",
      weeks: [
        { index: 1, label: "W1", dates: "1주차" },
        { index: 2, label: "W2", dates: "2주차" },
        { index: 3, label: "W3", dates: "3주차" },
        { index: 4, label: "W4", dates: "4주차" },
        { index: 5, label: "W5", dates: "5주차" },
        { index: 6, label: "W6", dates: "6주차" },
        { index: 7, label: "W7", dates: "7주차" },
        { index: 8, label: "W8", dates: "8주차" },
        { index: 9, label: "W9", dates: "9주차" },
        { index: 10, label: "W10", dates: "10주차", highlight: true, note: "발매 (미정)" },
        { index: 11, label: "W11", dates: "11주차" },
        { index: 12, label: "W12", dates: "12주차" },
      ],
      workstreams: [
        {
          name: "자체 확보",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "high", label: "LAUNCH" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "PRESAVE" },
            { weekIndex: 10, intensity: "high", label: "PEAK" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "팬 플랫폼",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "SETUP" },
            { weekIndex: 3, intensity: "high", label: "MEMBER" },
            { weekIndex: 4, intensity: "high", label: "LANG" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high", label: "LIVE" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "LIVE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "무료 도달 개선",
          cells: [
            { weekIndex: 1, intensity: "high", label: "AUDIT" },
            { weekIndex: 2, intensity: "high", label: "LINKS" },
            { weekIndex: 3, intensity: "high", label: "SUBS" },
            { weekIndex: 4, intensity: "medium", label: "SUBS" },
            { weekIndex: 5, intensity: "medium", label: "DONE" },
          ],
        },
        {
          name: "콘텐츠 프랜차이즈",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "DESIGN" },
            { weekIndex: 4, intensity: "high", label: "LAUNCH" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "유료 소셜",
          cells: [
            { weekIndex: 4, intensity: "low", label: "TEST" },
            { weekIndex: 5, intensity: "medium", label: "인도네시아/말레이시아" },
            { weekIndex: 6, intensity: "medium", label: "인도네시아/말레이시아" },
            { weekIndex: 7, intensity: "medium", label: "LATAM" },
            { weekIndex: 8, intensity: "medium", label: "LATAM" },
            { weekIndex: 9, intensity: "high", label: "SCALE" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high", label: "SCALE" },
            { weekIndex: 12, intensity: "medium", label: "READ" },
          ],
        },
        {
          name: "팬 페이지 네트워크",
          cells: [
            { weekIndex: 4, intensity: "medium", label: "SEED" },
            { weekIndex: 5, intensity: "medium", label: "SEED" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "DSP 및 플레이리스트",
          cells: [
            { weekIndex: 5, intensity: "low", label: "BUILD" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium", label: "CURATE" },
            { weekIndex: 8, intensity: "high", label: "PITCH" },
            { weekIndex: 9, intensity: "high", label: "PITCH" },
            { weekIndex: 10, intensity: "high", label: "LIVE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium", label: "HOLD" },
          ],
        },
        {
          name: "PR 및 시장 진출",
          cells: [
            { weekIndex: 3, intensity: "low", label: "PREP" },
            { weekIndex: 4, intensity: "medium", label: "SEA" },
            { weekIndex: 5, intensity: "medium", label: "SEA" },
            { weekIndex: 6, intensity: "medium", label: "LATAM" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "high", label: "ANNCE" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low" },
          ],
        },
        {
          name: "리테일 및 실물",
          cells: [
            { weekIndex: 6, intensity: "low", label: "SCOPE" },
            { weekIndex: 7, intensity: "medium", label: "DEALS" },
            { weekIndex: 8, intensity: "medium", label: "DEALS" },
            { weekIndex: 9, intensity: "high", label: "PREORD" },
            { weekIndex: 10, intensity: "high", label: "ONSALE" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "감사 종료 및 확보 구축, 지출 없음",
          items: [
            "시장별 동의 문구가 포함된 프로비저닝된 확보 캠페인에 대한 재게시 요청 제출됨",
            "모든 자체 보유 채널에 픽셀을 배포하여, 향후 광고 집행 시 노출 구매에만 그치지 않고 잠재 고객층을 구축하도록 합니다.",
            "현재 아무 곳에서도 연결되지 않은 두 개의 인증된 중국 플랫폼 계정을 포함하여, 모든 자체 보유 채널을 상호 연결합니다.",
            "YouTube 멤버십을 활성화하고 세 개의 뮤직 비디오에 엔드 스크린을 추가합니다.",
          ],
        },
        {
          weekIndex: 3,
          title: "캡처 기능이 출시되고 프랜차이즈가 설계됩니다.",
          items: [
            "캡처 기능이 다섯 가지 언어로 출시되며, 초기 보유 고객 연락처는 제로 베이스에서 기록됩니다.",
            "KEYPER가 등록할 수 있도록 팬 플랫폼 멤버십을 활성화합니다.",
            "자막이 포함된 라이브러리를 출시하며, 한국어 의존도가 높은 다섯 개의 개성 있는 콘텐츠부터 시작합니다.",
            "두 콘텐츠 프랜차이즈 모두 설계, 명명 및 배치되며, 구축 시 번역을 우선으로 합니다.",
          ],
        },
        {
          weekIndex: 5,
          title: "첫 번째 시장이 출시되고, 나머지 모든 시장은 비활성화 상태를 유지합니다.",
          items: [
            "인도네시아와 말레이시아 시장의 유료 광고가 출시되며, 다른 모든 시장은 속성 추적이 가능하도록 비활성화 상태를 유지합니다.",
            "인도네시아에 팬 페이지 네트워크를 구축하며, 두 개의 계정이 생성되었다가 방치되었습니다.",
            "팬 플랫폼 번역이 활성화되며, 인도네시아어, 태국어, 말레이어, 스페인어가 추가됩니다.",
            "시장별로 첫 주간 기준 대비 실제 성과 분석 결과가 발행됩니다.",
          ],
        },
        {
          weekIndex: 8,
          title: "두 번째 시장이 출시되고, 편집 제안이 발송됩니다.",
          items: [
            "스페인어권 라틴 아메리카 시장이 출시되며, 그룹 최초의 스페인어 콘텐츠가 발행됩니다.",
            "중앙 집중식이 아닌 시장별로 편집 제안이 준비되며, 시장별 트랙션 데이터를 포함합니다.",
            "주요 시장별로 사전 주문 접수가 포함된 독점 상품에 대한 리테일 협의가 시작됩니다.",
            "명시된 기준치 대비 인도네시아와 말레이시아 시장에 대한 확장 또는 중단 결정이 내려집니다.",
          ],
        },
        {
          weekIndex: 10,
          title: "트래픽이 착륙할 수 있는 공간을 확보한 출시 주간입니다.",
          items: [
            "모든 시장이 처음으로 동시에 출시되며, 이제 존재하는 캡처 기능으로 트래픽이 유입됩니다.",
            "스마트 링크에 실물 앨범 구매 링크를 게시하며, 데뷔 활동 전체 기간 동안에는 해당 링크가 없었습니다.",
            "팬 플랫폼 라이브 세션 및 랭킹 투표를 통해 팔로워를 집계 가능한 팬덤으로 전환합니다.",
            "릴리스 에셋을 4주간 집중적으로 운영하는 대신 지속적으로 운영하여, 110개 게시물 분량의 격차를 해소합니다.",
          ],
        },
        {
          weekIndex: 12,
          title: "이번 활동 주기를 솔직하게 평가합니다.",
          items: [
            "확보된 연락처, 팔로워 및 판매량은 확정된 지표로 보고됩니다.",
            "청취자 수와 스트리밍 수는 주간 기준치 대비 보고되며, 약속으로 간주되지 않습니다.",
            "팔로워 대 청취자 비율을 증가하는 청취자 기반 대비 측정하며, 이것이 진정한 시험대입니다.",
            "시장별 접촉당 비용을 공개하고, 다음 활동 주기는 실제 성과를 기반으로만 계획합니다.",
          ],
        },
      ],
      footnote: "10주차의 릴리스 날짜는 임시이며, 해당 날짜를 기준으로 주변의 모든 일정이 조정됩니다. 첫 3주간은 의도적으로 미디어 집행 비용이 없습니다. 이는 수용 능력이 없는 플랫폼에 도달 범위를 구매하는 것이 이미 데뷔 활동에서 검증되었기 때문입니다.",
    },
  ],
};
