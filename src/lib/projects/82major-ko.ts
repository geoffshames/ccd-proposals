import type { ProjectData } from "../project-context";

export const eightyTwoMajorKorean: ProjectData = {
  accentColor: "#FD3737",
  language: "ko",
  languageAlternates: [{ slug: "82major", label: "English", code: "EN" }],

  client: {
    name: "82MAJOR",
    logo: "",
    contactName: "Kevin Nishimura",
    contactRole: "Kakao Entertainment Group / SM US",
    contactEmail: "",
    industry: "K-Pop / 보이그룹 / 카카오 유통",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "작성자: Geoff Shames / 공동 창립자",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "미국 성장 전략 (2027년 상반기까지)",
    tagline:
      "82MAJOR를 위한 장기적인 미국 성장 프레임워크. SIGN / TROPHY 앨범 주기, 9월 컴백, 11월 미국 투어, 2027년 상반기 일본 및 서구 시장 확장을 중심으로 구축. 팬덤 우선, 곡과 무관, 확장 가능.",
    type: "미국 성장 전략 및 지출 배분",
    startDate: "2026년 5월",
    endDate: "2027년 6월",
    duration: "12개월 (순환)",
    status: "Awaiting Approval" as const,
  },

  overview: {
    heading: "전략",
    summary:
      "82MAJOR는 최상위 인프라(SM Entertainment 지분 구조 파트너십, HoriPro Japan 매니지먼트, 검증된 8개 도시 미국 투어, FEELM 커리어 하이 12만 장 초동 판매량)를 보유하고 있으나, 스트리밍 성과는 3티어 수준입니다 (Spotify 월간 리스너 30.9만 명 vs. TWS 290만 명, RIIZE 260만 명, BOYNEXTDOOR 270만 명). 팬덤 구축은 완료되었으나, 발견(Discovery) 단계는 미흡합니다. 향후 12개월 내에 이 격차를 해소하거나, 현재 인프라에 걸맞지 않는 3티어에 안주하게 될 것입니다. 본 제안서는 이 격차를 해소하기 위한 프레임워크를 제시합니다: SIGN / TROPHY 앨범 주기부터 11월 미국 투어, 2027년 상반기 일본 론칭까지 확장 가능한, 팬덤 우선, 곡과 무관한 2단계 지출 배분 전략입니다.",
    objectives: [
      "현재 SIGN / TROPHY 활동 지원, 9월 컴백 론칭, 11월 미국 투어, 그리고 2027년 상반기 일본 및 서구 시장 확장 아크를 뒷받침하는 확장 가능한 미국 시장 진출 계획 수립.",
      "릴리즈 공백기에도 지속되며 앨범 주기 전반에 걸쳐 시너지를 창출하는 상시 팬덤 인프라 구축 (미국 팬 페이지 네트워크, CRM, Laylo를 통한 이메일 및 SMS, 팬 참여 메커니즘).",
      "바이럴 모멘텀에 의존하지 않는 디지털 마케팅을 통해 발견 단계의 격차 해소: 크리에이터 참여, DSP 파트너십, 유료 광고 집행, 스토리텔링 구축.",
      "검증된 미국 투어 수요를 릴리즈 시점에 맞춰 기획된 오프라인 활동(리스닝 이벤트, 팝업 스토어, 옥외 광고, 특화 굿즈)을 통해 지속적인 미국 내 채널로 전환.",
      "PR은 최상위 발견 엔진이 아닌, 팬덤, 디지털, 오프라인 모멘텀을 증폭시키는 수단으로 활용. PR은 보고할 만한 성과가 있을 때 가치를 발휘합니다.",
    ],
    subtitle:
      "2단계 모델. 1단계(5만 달러)는 기반 구축에 집중. 2단계(10만 달러)는 팬덤 성장 가속화 및 경험적 요소 추가. 양 단계 모두 CCD 실행 비용 포함 총액 기준.",
    imageCaption: "12개월 미국 성장 프레임워크",
    stats: [
      { value: 5, label: "영역", description: "팬덤, 디지털, 경험, PR, 선택적 추가 항목. 미국 시장에 맞춰 조정되었으며, 릴리즈 주기 전반에 걸쳐 확장 가능, 곡과 무관." },
      { value: 2, label: "단계" },
      { value: 12, label: "월별 전망" },
      { value: 309, suffix: "K → 100만+", label: "Spotify 월간 리스너" },
    ],
  },

  discovery: {
    heading: "데이터 분석 결과",
    summary:
      "본 발표 자료의 모든 지출 권고 사항은 세 가지 핵심 인사이트를 기반으로 합니다. 이 인사이트는 Chartmetric, Luminate, Hanteo, Circle 및 직접적인 플랫폼 데이터를 2026년 5월 기준으로 종합한 것입니다.",
    insights: [
      {
        label: "핵심 지표",
        finding:
          "Spotify 팔로워 대 월간 리스너 비율은 0.439입니다. 규모는 TWS의 1/10이지만 더 건강한 수치입니다. 발견(discovery)이 작동하면 전환(conversion) 기계도 작동합니다. 격차는 동기 부여가 아닙니다. 격차는 도달 범위(reach)입니다.",
        source: "Chartmetric, 2026년 5월",
      },
      {
        label: "전략적 긴장감",
        finding:
          "카탈로그 내 최대 스트리밍 트랙은 멜로딕 R&B B-사이드인 Sure Thing(370만 스트림)입니다. 같은 릴리즈의 힙합 타이틀 트랙은 150만 스트림에 그칩니다. 브랜드는 힙합을 마케팅하지만, 대중은 멜로딕한 음악을 소비합니다. 이는 창의적인 재설정이 아닌 포지셔닝의 문제입니다.",
        source: "Spotify ATD, 2026년 5월",
      },
      {
        label: "인프라 격차",
        finding:
          "SM Entertainment는 2025년 5월 지분 투자를 단행했습니다. HoriPro는 2025년 9월 일본 매니지먼트 계약을 체결했습니다. 8개 도시 미국 투어는 서구 시장의 수요를 입증했습니다. 현재 인프라에는 팬 운영(fan-ops) 레이어가 전혀 없습니다. 그룹은 최상위 티어(tier one)를 목표로 구축되었으나, 3티어(tier three) 수준의 기반에서 운영되고 있습니다.",
        source: "Soompi / Allkpop / Starnews",
      },
      {
        label: "현실 포착",
        finding:
          "팬 데이터는 Kakao 유통 채널, Hello82 거래 데이터 캡처, 일회성 사전 저장(pre-save) 흐름에 분산되어 있습니다. 통합된 데이터는 없습니다. 82MAJOR의 시스템에는 미국 기반의 이메일 또는 SMS 목록이 존재하지 않습니다. 목록은 존재하지만, 소유권은 없습니다.",
        source: "폐쇄형 생태계(walled-garden) 감사, 2026년 5월",
      },
      {
        label: "투어를 통한 카탈로그 활성화",
        finding:
          "2025년 6월-7월 투어 기간 동안, 기존 카탈로그가 재활성화되었습니다: ON은 발매 2년 후 미국 주간 최고 2만 5천 스트림을 기록했습니다. Beat By 82는 3만 7천, Silence Syndrome은 5만 7천 이상을 유지했습니다. 투어는 카탈로그 마케팅 역할을 하고 있습니다. 11월 미국 투어는 단순한 수익원이 아닌 스트리밍 증대 수단입니다.",
        source: "투어 기간 스트리밍 분석, 2025년 6월-7월",
      },
    ],
    marketContext:
      "5세대 K팝 보이그룹은 등급화되어 있습니다. 1티어(TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE)는 Spotify 월간 리스너 250만 명 이상, 초동 한터차트 15만 장 이상입니다. 3티어(82MAJOR, EVNNE, n.SSign)는 월간 리스너 50만 명 미만입니다. 중간 티어는 빠르게 붕괴합니다. 그룹은 18개월 내 1티어로 성장하거나 정체됩니다. 82MAJOR는 향후 12개월 동안 1티어 그룹의 인프라와 3티어 그룹의 스트리밍 역량을 갖추고 진입합니다. 이 격차가 자산이자 위험 요소입니다.",
  },

  philosophy: {
    sectionNumber: "02",
    heading: "팬덤이 모든 것을 이끌고, 나머지는 이를 증폭시킵니다.",
    thesis:
      "PR은 아티스트를 성공시키지 못합니다. 강력한 팬덤과 참여가 보도할 가치가 있는 순간을 만듭니다. 오프라인(IRL) 활동은 디지털 대화를 촉진합니다. 디지털 모멘텀은 미디어 및 파트너십 기회를 강화합니다. 아래 계층 구조는 순서가 아닙니다. 이는 기반(foundation)과 세 개의 증폭기(amplifiers)입니다. 기반은 협상 불가능하며, 지속적이고, 곡과 무관합니다. 증폭기는 릴리즈 시점에 맞춰 작동합니다.",
    hierarchy: [
      {
        label: "팬덤 (기반, 상시 운영)",
        description:
          "복합적인 레이어입니다. 미국 팬 페이지 네트워크, Laylo를 통한 CRM 및 SMS, 자체 보유 고객 확보, 팬 참여 메커니즘입니다. 릴리즈 일정과 관계없이 매주 운영됩니다. 이 레이어 없이는 다른 모든 비용이 누수됩니다.",
      },
      {
        label: "디지털 (증폭기)",
        description:
          "도달 범위가 발생하는 곳입니다. 플랫폼 전략, 내러티브 포지셔닝, 크리에이터 참여, 유료 증폭, DSP 및 에디토리얼 파트너십입니다. 하위 팬덤 레이어에 맞춰 조정됩니다. 릴리즈 시점에는 지출이 증가하지만, 팀 규모는 동일하게 유지됩니다.",
      },
      {
        label: "경험 (증폭기)",
        description:
          "사회적 증거가 생성되는 곳입니다. 리스닝 이벤트, 팝업 스토어, 옥외 광고(OOH), 특별 굿즈, 게임 및 XR 통합입니다. 오프라인 활동은 콘텐츠를 만듭니다. 콘텐츠는 디지털 대화를 만듭니다. 디지털 대화는 PR로 이어집니다. 이 레이어를 건너뛰면 브랜드는 보도할 가치가 있는 순간을 결코 갖지 못합니다.",
      },
      {
        label: "PR (증폭기)",
        description:
          "신뢰도 및 내러티브 확장입니다. 최상위 퍼널 성장 엔진이 아닙니다. PR은 팬덤, 디지털, 오프라인 활동이 이미 주목할 만한 것을 만들어내고 있을 때 효과가 있습니다. 너무 일찍 제안하면 관계가 손상됩니다. 적절한 시점에 제안하면 이전의 모든 투자를 확장시킵니다.",
      },
    ],
    principles: [
      "팬덤 및 디지털 인프라는 곡과 무관합니다. SIGN / TROPHY, 9월 컴백 및 이후 모든 릴리즈를 지원합니다.",
      "기반에는 지속적인 지출을, 증폭기에는 릴리즈 시점 및 투어 일정에 맞춰 간헐적인 지출을 합니다.",
      "장기적인 미국 시장 구축입니다. 최소 12개월이며, 캠페인별 재구축은 없습니다.",
      "인상적인 순위보다는 등급 프레임워크를 사용합니다. 모든 권장 사항은 82MAJOR가 1티어 경쟁 그룹(TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE) 대비 어느 위치에 있는지, 그리고 그 격차를 좁히기 위해 무엇이 필요한지를 참조합니다.",
    ],
    footnote:
      "이것은 크리에이티브 제안서가 아닙니다. 캠페인별 전술 문서도 아닙니다. 이는 여러 분야와 12개월의 기간에 걸쳐 예산이 어떻게 배분되는지를 관리하는 전략적 프레임워크입니다.",
  },

  audience: {
    heading: "주요 타겟층 분석",
    summary:
      "82MAJOR의 미국 내 팬층은 네 가지 세그먼트로 나뉩니다. 각 세그먼트는 서로 다른 유입 채널, 언어, 콘텐츠 발행 주기를 요구합니다. 일반적인 K-pop 팬 유입 전략은 이를 하나의 동질적인 구매로 단순화하여 성과를 저하시킵니다.",
    demographics:
      "핵심 타겟층은 16-28세 여성 중심(65/35)이며, LA, NYC, 시카고, 댈러스, 애틀랜타 등 도시 및 대학가에 집중되어 있습니다. 특히 미국 내 한인 교포층과의 높은 교차점을 보입니다. 또한, K-pop 팬덤과 겹치지만 영어 콘텐츠를 우선적으로 소비하는 동남아시아 및 라틴 아메리카의 3차 해외 팬덤이 존재합니다.",
    demographicCards: [
      { label: "연령대", value: "16-28 핵심", detail: "18-22 최다 참여" },
      { label: "성별 분포", value: "65/35 여성", detail: "5세대 K-pop 보이그룹의 일반적인 분포와 일치" },
      { label: "미국 주요 도시 Top 5", value: "LA, NYC, 시카고, 댈러스, 애틀랜타", detail: "Spotify 도시별 차트에서 NYC가 누락된 것은 편집 기반이 아닌 투어 기반의 영향으로 해석됩니다." },
      { label: "Spotify ML (2026년 5월)", value: "309K", detail: "3티어. 1티어는 2.5M+." },
    ],
    personas: [
      {
        name: "초창기 팬",
        ageRange: "18-26세",
        description:
          "데뷔 초부터 82MAJOR를 팔로우해왔습니다. 한국 팬 트위터, K-pop 서브레딧, 디스코드 서버를 중심으로 활동합니다. 실물 앨범을 구매하고, 미국 투어의 모든 공연에 참석하며, 팬 계정을 운영합니다. LTV(고객 생애 가치)가 높으며, 추가적인 팬 확보 필요성은 낮습니다.",
        traits: ["실물 앨범 구매자", "투어 재참석자", "팬 계정 운영자", "이중 언어 사용자"],
      },
      {
        name: "미국 투어 전환 팬",
        ageRange: "16-24세",
        description:
          "미국 투어에 친구와 함께 오거나 라이브 공연의 틱톡 클립을 통해 처음 접했습니다. 아직 Spotify 팔로워는 아닙니다. 11월 투어가 전환의 계기가 될 것입니다. 미국 내 자체 채널을 통해 접근해야 합니다.",
        traits: ["틱톡 우선 사용자", "가볍게 스트리밍", "아직 CRM 기록 없음", "알고리즘 외부 활동"],
      },
      {
        name: "K-힙합 크로스오버 팬",
        ageRange: "18-28세",
        description:
          "82MAJOR는 프로덕션 크레딧 서사 또는 힙합 피처링(Beenzino / BIG Naughty 타겟)을 통해 유입됩니다. HipHop LE와 Crash를 구독하며, K-pop 프레임에는 회의적입니다. 브랜드가 그 가치를 증명할 경우에만 따를 것입니다.",
        traits: ["장르 우선", "아이돌 프레임에 대한 회의론", "음악 전문 언론 구독", "Spotify 파워 유저"],
      },
    ],
    psychographics: [
      "진정성을 보상하고, 음악과 일치하지 않는 포지셔닝 재설정은 처벌할 것입니다.",
      "아이돌 팬덤 행동(팬덤 군집, 실물 앨범 판매)과 장르 팬덤 행동(DSP 탐색, 음악 전문 언론 구독) 사이를 오갑니다.",
      "이중 언어 콘텐츠에 대한 수용도가 높습니다. 미국 팬 페이지 네트워크는 영문화(Anglicize)가 아닌 자막(subtitle)을 제공해야 합니다.",
      "오프라인 참여는 지위의 신호입니다. 리스닝 이벤트, 팝업 스토어, 투어 일정은 디지털만으로는 얻을 수 없는 브랜드 가치를 증폭시킵니다.",
    ],
    painPoints: [
      "미국 팬 커뮤니케이션은 한국 우선 채널을 통해 이루어집니다. 대부분의 미국 팬들은 발매일 시점, 팝업 공지, 사전 저장(pre-save) 기회를 놓칩니다.",
      "투어 사이에 지속적인 미국 팬 운영 계층이 없습니다. 11월 투어는 그룹이 재타겟팅할 수 없는 팬들을 생성할 것입니다.",
      "편집 언론은 그룹을 힙합 아티스트로 포지셔닝하지만, 스트리밍 청취자들은 멜로딕한 B-사이드 트랙을 소비합니다. 서사와 데이터가 불일치합니다.",
      "실물 앨범 발매는 한국 우선 채널을 통해 진행됩니다. 미국 팬들은 구매 의사가 가장 높을 때 수입 마찰을 겪습니다.",
    ],
    purchaseTriggers: [
      "미국 투어 일정 및 리스닝 이벤트 초대. 캐주얼 팬을 핵심 팬으로 전환시키는 가장 높은 전환율 트리거입니다.",
      "발매 시점과 연계된 한정판 실물 앨범 (컬러 베리에이션, 사인 인서트, 포토카드).",
      "코사인 프레스와 크로스오버 플레이리스트 커버리지를 확보하는 한국 힙합 피처링.",
      "Hello82 분기별 발매 및 파트너 스토어 생태계. 미국 K-pop 팬의 기본 구매 경로입니다.",
    ],
    platforms: [
      { name: "TikTok", description: "미국 투어 전환을 위한 발견 계층. 댄스 챌린지와 라이브 클립 편집본이 확산되는 곳입니다. 82MAJOR가 가장 부족하게 구축된 플랫폼입니다." },
      { name: "Spotify", description: "전환 계층. 0.439의 팔로워 대비 월간 청취자 비율은 건강합니다. 첫 번째 기둥(Pillar 1)은 이 깔때기(funnel)로의 발견을 촉진합니다." },
      { name: "Instagram", description: "브랜드 계층. Hello82 공지, OOH 영수증, 편집 보도가 게재되는 곳입니다. 발매 공백기 동안 그룹을 추적하는 미국 팬들의 주요 피드입니다." },
      { name: "YouTube", description: "장편 계층. 스튜디오 브이로그, 프로덕션 크레딧 콘텐츠, 미국 투어 다이어리. 프로덕션-브랜드(production-as-brand) 테제의 네이티브 홈입니다." },
      { name: "Discord / Geneva", description: "주권 계층. 아직 존재하지 않습니다. 이 덱(deck)이 구축하고 있는 미국 팬 운영 계층입니다." },
    ],
    quotes: [
      { text: "Sure Thing은 지난 3년간 최고의 K-R&B 트랙 중 하나이지만, K-pop만 듣는 사람은 아무도 들어본 적이 없습니다.", source: "r/kpop, 2026년 3월" },
      { text: "애틀랜타 투어에 친구 한 명과 갔는데, 공연장이 매진되었음에도 불구하고 관객 중에 누구인지 전혀 몰랐습니다. 이 사람들은 온라인에서 어디서 찾을 수 있나요?", source: "트위터 / X, 2025년 7월" },
      { text: "6인 전원 프로듀싱 참여 사실이 아티스트 페이지에 너무 깊숙이 묻혀 있어 한국 팬 블로그를 찾아봐야 했습니다.", source: "HipHop LE 댓글 스레드" },
    ],
  },

  targets: [
    { metric: "스포티파이 월간 리스너", value: "100만+", context: "2027년 5월까지 티어 2 진입. 현재 30.9만 명. 팔로워 대비 리스너 비율은 이미 티어 1 수준으로 건강합니다." },
    { metric: "한터 초동 (7th Mini)", value: "20만+", context: "FEELM 커리어 하이 12만 장 대비 상승. SM 및 HoriPro 인프라 투자를 입증합니다." },
    { metric: "일본 초동 (오리콘)", value: "3만+", context: "2027년 1분기 일본어 데뷔. HoriPro 관리 론칭의 기준은 오리콘 Top 10 진입입니다." },
    { metric: "미국 투어 총 동원 관객 수", value: "8K", context: "2025년 8월 4천 명 규모의 총 동원 관객 수를 두 배로 늘립니다. 11월 복귀 시에는 도시 수는 줄이고 공연장 규모는 확대합니다." },
    { metric: "미국 보유 CRM 리스트", value: "이메일 1만 개 이상 / SMS 5천 개 이상", context: "6개월 내 Laylo로 1차 파티 데이터 수집 및 도시, 투어 스탑, 참여 등급별 세분화." },
    { metric: "에디토리얼 노출", value: "주요 플레이리스트 3개 + 힙합 언론 5곳", context: "필러 1 달성. Spotify Equal Asia, Apple Music K-Hits, 그리고 Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea." },
  ],

  competitive: {
    summary:
      "3개 티어에 속한 8개의 5세대 동료 그룹. 82MAJOR는 스트리밍에서 티어 3 최상위권, 인프라에서는 티어 1에 위치합니다. 티어 2(NCT WISH, NEXZ)와의 격차는 단 한 번의 고효율 캠페인 주기로 극복 가능합니다. 티어 1(TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE)과의 격차는 본 덱에서 다루는 12개월의 시간 범위 내 목표입니다.",
    competitors: [
      { name: "TWS. 월간 리스너 290만 명", strength: "늦은 데뷔에도 불구하고 깔끔한 티어 1 스트리밍 성과 구축. 팬덤과 신규 팬 유입의 건강한 균형.", gap: "82MAJOR 대비 내러티브 차별성이 부족합니다. 프로듀싱 참여 스토리나 활용할 만한 장르 포지셔닝 각도가 없습니다." },
      { name: "BOYNEXTDOOR. 월간 리스너 270만 명", strength: "초기부터 강력한 미국 주요 도시 입지와 서구권 언론 관계 구축.", gap: "콘셉트 중심적이나 곡 구성의 집중도가 취약합니다. 82MAJOR의 카탈로그 깊이가 반박 근거가 됩니다." },
      { name: "RIIZE. 월간 리스너 260만 명", strength: "SM의 직접적인 지원, 전폭적인 레이블 서포트, 압도적인 국내 음반 판매량.", gap: "82MAJOR의 신규 팬 유입 레이어 구축은 SM의 운영적 제약 없이 SM의 지분 구조 관계를 활용할 수 있습니다." },
      { name: "ZEROBASEONE. 월간 리스너 4.8M", strength: "서바이벌 쇼 팬덤, 확정된 실물 앨범 사전 예약, 최상위권 언론 노출.", gap: "그룹 포맷 의존성. 82MAJOR의 6인조 멤버 프로듀서 프레이밍은 ZB1이 진입할 수 없는 영역입니다." },
      { name: "NCT WISH. 월간 리스너 1.4M", strength: "다국어 전략, J-POP 크로스오버 지원.", gap: "82MAJOR의 HoriPro 매니지먼트 파트너십은 지속적인 일본 론칭에 있어 NCT WISH의 일본 내 입지보다 구조적으로 더 강력합니다." },
      { name: "NEXZ. 월간 리스너 800K", strength: "JYP 스타일의 미국 팬 참여 플레이북.", gap: "프로덕션 크레딧 정체성 부재. 82MAJOR의 성인 음악 언론 영역(Pitchfork 인접, NME Asia, Complex, Mass Appeal Korea)은 NEXZ에게는 닫혀 있습니다." },
      { name: "EVNNE. 월간 리스너 420K", strength: "탄탄한 비주얼 아이덴티티, 건강하고 활동적인 팬덤.", gap: "상대적으로 작은 인프라 지원. 82MAJOR가 3티어 탈출을 방어하기 위해 가장 신속하게 돌파해야 할 경쟁 상대입니다." },
      { name: "n.SSign. 월간 리스너 280K", strength: "F&F Entertainment를 통한 서브 레이블 지원.", gap: "82MAJOR는 이미 앞서 있습니다. 경쟁 세트는 티어 계층화의 엄격성을 위해 포함되었으며, 적극적인 경쟁 위협으로서가 아닙니다." },
    ],
  },

  tiers: {
    sectionNumber: "06",
    heading: "두 개의 티어. 하나의 기반. 하나의 가속.",
    subheading:
      "티어 1은 상시적인 기반을 구축합니다: 미국 팬 페이지 네트워크, Laylo를 통한 CRM 및 SMS, 가벼운 디지털, 기본 PR. 티어 2는 기반을 유지하며 공격적인 디지털, 인플루언서 지원, 체험형 액티베이션 및 광범위한 OOH를 추가합니다. 두 티어 모두 CCD 실행 비용(월 2,500달러 리테이너 및 15% 미디어 관리 수수료)을 포함한 올인 비용입니다. 선택적 추가 사항(라디오, A&R, 추가 체험, 추가 콘텐츠 제작)은 두 티어 외부에 있으며 별도로 범위가 정해집니다.",
    footnote:
      "티어는 9월 컴백 롤아웃 및 11월 미국 투어에 맞춰 6개월 단위로 실행됩니다. 재승인은 연 2회, 3월과 9월에 이루어집니다.",
    tiers: [
      {
        label: "티어 01: 기반",
        name: "50,000 달러",
        tagline: "올인. 6개월. 미국 팬 생태계를 구축하고 릴리즈 공백기 동안 참여를 유지합니다.",
        price: "50,000 달러",
        priceSuffix: "올인 / 6개월",
        priceContext: "CCD: 15,000달러 리테이너(월 2,500달러 x 6) + 23,000달러 관리 미디어에 대한 15% 미디어 관리 수수료(3,500달러). 공급업체 및 지출에 순수 배포 가능 금액: 31,500달러.",
        includes: [
          "상시 운영 미국 팬 페이지 네트워크 (3개 채널, Infinitize 또는 Beautiful Digital을 통한 K-Pop-Nara 스타일 운영)",
          "Laylo 기반 CRM 및 SMS 인프라 구축. 자체 미국 고객 확보",
          "팬 참여 메커니즘: 콘테스트, 독점 잠금 해제, VIP 티어(라이트)",
          "Meta, TikTok, YouTube에 대한 기본 디지털 지출. 내러티브 시딩(narrative seeding)에 한함",
          "9월 컴백 기간 동안 DSP 피칭 및 플레이리스트 지원",
          "PR 증폭: 주요 이벤트(컴백, 미국 투어)에 대한 미디어 관계",
          "CCD 전략적 감독, 월간 보고, 공급업체 조정",
        ],
        excludes: [
          "체험형 / 오프라인 활동 (리스닝 이벤트, 팝업 스토어, OOH)",
          "인플루언서 / 크리에이터 마케팅 비용",
          "스페셜티 실물 앨범 / D2C 상품",
          "라디오 프로모션 (25,000달러 추가)",
          "A&R / 피처링 전략",
          "추가 콘텐츠 제작",
        ],
        footerNote: "Tier 2 재승인 전 6개월간의 성과 검증 기간을 권장합니다.",
        featured: false,
      },
      {
        label: "Tier 02: 확장",
        name: "100,000달러",
        tagline: "총액 100,000달러. 6개월간. 펀더멘털 구축에 공격적인 디지털, 체험형, 인플루언서 지원을 더합니다. 11월 투어와 2027년 상반기 일본 시장 준비를 위한 구성입니다.",
        price: "100,000달러",
        priceSuffix: "올인 / 6개월",
        priceContext: "CCD: 월 2,500달러 × 6개월 = 15,000달러 리테이너 + 74,000달러 관리 미디어에 대한 15% 미디어 관리 수수료 (11,100달러). 순수 집행 가능 금액 (벤더 및 지출): 73,900달러.",
        includes: [
          "Tier 1의 모든 항목 포함",
          "미국 팬 커뮤니티 네트워크 확장 (채널 4-5개) 및 현지화 데스크 운영",
          "Meta, TikTok, YouTube, Spotify 광고에 공격적인 디지털 예산 집행. 풀 퍼널 전략.",
          "TikTok 및 Instagram 전반의 인플루언서 / 크리에이터 활동 (Flighthouse 스타일 및 테이스트메이커 등급)",
          "DSP 파트너십 캠페인 (Spotify Equal Asia, Apple Music K-Hits) 및 플랫폼 통합",
          "체험형 활동: 각 티어 기간별 리스닝 이벤트 1회 (Polygon / L-Acoustics 스타일)",
          "11월 미국 투어 일정에 맞춘 팝업 스토어 운영",
          "발매 시점에 맞춘 전략적 OOH (LA + NYC)",
          "프로덕션 크레딧 및 힙합 크로스오버 서사에 대한 언론 홍보 강화",
          "CCD 전략적 관리, 격주 보고, 전체 벤더 관리",
        ],
        excludes: [
          "라디오 프로모션 (25,000달러 추가)",
          "A&R / 피처링 전략 (별도 범위)",
          "티어 내 이벤트 외 추가 체험형 활동 (별도 범위)",
          "추가 콘텐츠 제작 (별도 범위)",
        ],
        footerNote: "9월 컴백부터 11월 미국 투어까지의 권장 기본 계획입니다.",
        featured: true,
      },
    ],
  },

  timelineHeading: "12개월 로드맵",
  timelineSubheading:
    "현재 시장에 출시된 SIGN / TROPHY 활동 주기, 9월 컴백, 11월 미국 투어, 2027년 상반기 일본 론칭에 맞춰 조정되었습니다. 상시 운영 워크스트림은 모든 단계에 걸쳐 진행되며, 에피소드 워크스트림은 발매 시점에 맞춰 가동됩니다.",
  timelineImageCaption: "12개월 / 4단계 / 1가지 전략",
  timeline: [
    {
      phase: "1단계: 기반 구축",
      week: "2026년 5월 - 8월",
      date: "컴백 이전",
      status: "in-progress",
      tasks: [
        "미국 팬 페이지 네트워크 구축 (Infinitize 또는 Beautiful Digital). 최소 3개 채널",
        "Laylo 기반 CRM 및 SMS 인프라 구축, 도시 및 참여 등급별 세분화",
        "SIGN / TROPHY 후속 지원: DSP 피칭, 라이트 디지털, 내러티브 시딩",
        "Hello82, 사전 저장 흐름, 파트너 스토어 전반의 팬 데이터 감사 및 통합",
        "컴백 내러티브 아키텍처 확정: 타이틀곡 포지셔닝 + B사이드 앵글 해결",
      ],
      ongoing: false,
    },
    {
      phase: "2단계: 9월 컴백",
      week: "2026년 9월 - 10월",
      date: "7번째 미니 앨범 발매",
      status: "upcoming",
      tasks: [
        "사전 저장 캠페인 (TikTok / IG) 시작 (4주 전부터)",
        "크리에이터 참여 캠페인 (Tier 2 한정): TikTok 및 Instagram 전반 8-15명의 크리에이터",
        "편집부 피치 확보: Spotify Equal Asia, Apple Music K-Hits, 힙합 매체 (Crash, HipHop LE)",
        "Meta, TikTok, YouTube, Spotify 전반의 유료 디지털 광고 확대",
        "Tier 2 한정: 리스닝 이벤트 (Polygon / L-Acoustics 또는 동급), LA 또는 NYC",
        "한터 초동 목표: 200K+",
      ],
      ongoing: false,
    },
    {
      phase: "3단계: 11월 미국 투어",
      week: "2026년 11월 - 12월",
      date: "미국 재투어",
      status: "upcoming",
      tasks: [
        "미국 투어 활성화: 도시별 CRM 수집, 파트너 스토어 연계, Hello82 통합",
        "주요 시장 (LA, NYC, Chicago) 시점에 맞춘 팝업 스토어",
        "발매 주간 LA 및 NYC 옥외 광고 (Tier 2)",
        "투어 기간 카탈로그 재활성화: 비활성 카탈로그 (Sure Thing, Stuck, ON) 유료 홍보 강화",
        "언론 활용: 투어 사진 콘텐츠 + 미국 매체 멤버 특집",
        "미국 투어 총 관객 목표: 8K",
      ],
      ongoing: false,
    },
    {
      phase: "4단계. 2027년 상반기 확장",
      week: "2027년 1월 - 6월",
      date: "일본 + 카탈로그",
      status: "upcoming",
      tasks: [
        "일본 출시 단계적 진행: 2027년 1분기 일본어 싱글 발매, 오리콘 톱 10 목표",
        "J-Wave 라디오, CD-Japan / Tower Records / HMV 리테일 관련 HoriPro 협력",
        "카탈로그 재활성화 캠페인: 상위 10개 카탈로그 트랙용 Canvas 비디오, Spotify 메타데이터 수정",
        "미국 팬 운영은 팬 페이지 네트워크와 CRM을 통해 지속적으로 성장하고 있습니다.",
        "1-3단계 KPI 달성률에 따라 2027년 3분기 사이클에 대한 티어를 재승인합니다.",
      ],
      ongoing: false,
    },
  ],

  deliverables: [
    {
      category: "세부 영역 1: 팬덤 (상시 기반)",
      icon: "01",
      items: [
        { name: "미국 팬 페이지 네트워크", quantity: "3-5개 채널", description: "Infinitize, Beautiful Digital 또는 이에 준하는 플랫폼을 통해 운영되는 미국 중심의 전담 팬덤 생태계. 한국 콘텐츠를 자막, 미국 특화 편집, 그리고 에이전시와의 콘텐츠 요청 레이어를 통해 재가공합니다. 티어 1에는 3개 채널, 티어 2에는 4-5개 채널을 운영합니다." },
        { name: "Laylo CRM + SMS", quantity: "자체 보유", description: "이메일 수집, SMS 리스트 확보, 팬 세분화, 리텐션 플로우 구축. 알고리즘 외부에서의 관계를 자체적으로 관리합니다. 6개월 내 이메일 10,000건 이상, SMS 5,000건 이상 확보를 목표로 합니다." },
        { name: "팬 참여 메커니즘", quantity: "지속적", description: "콘테스트, 증정 이벤트, 독점 콘텐츠 공개, 팬 보상, VIP 티어 운영. 팬덤 우선 그룹으로서의 대외적 신뢰도를 구축합니다." },
      ],
    },
    {
      category: "세부 영역 2: 디지털 마케팅",
      icon: "02",
      items: [
        { name: "플랫폼 지출 배분", quantity: "계층별", description: "Meta, TikTok, YouTube, Spotify 광고. 티어 1에서는 내러티브 확산, 티어 2에서는 풀 퍼널 전략을 사용합니다. 픽셀 데이터를 Meta 및 TikTok에 수집하여 다음 사이클에 재활용합니다." },
        { name: "크리에이터/인플루언서 마케팅", quantity: "티어 2", description: "테이스트메이커 티어와 Flighthouse 스타일의 확산 전략. 릴리즈 기간당 TikTok 및 Instagram에서 8-15명의 크리에이터를 활용하며, 오가닉 및 유료 크리에이터 지원을 병행합니다." },
        { name: "DSP + 스트리밍 지원", quantity: "사이클별", description: "플레이리스트 피칭, Spotify Equal Asia, Apple Music K-Hits, 플랫폼 파트너십. 브랜드 전략의 핵심 1단계 디스커버리 레이어 활성화입니다." },
        { name: "내러티브 포지셔닝", quantity: "상시", description: "타이틀곡 vs. B사이드 곡 구도 해소: 프로덕션 크레딧 콘텐츠, 멤버 프로듀서 각도, 힙합 크로스오버 내러티브를 미국 언론 및 DSP에 확산시킵니다." },
      ],
    },
    {
      category: "세부 영역 3: 체험형 (티어 2)",
      icon: "03",
      items: [
        { name: "리스닝 이벤트", quantity: "사이클당 1회", description: "Polygon / L-Acoustics 스타일의 고급 리스닝 경험을 LA 또는 NYC에서 제공합니다. 브랜드 또는 DSP와 파트너십을 맺어 교차 프로모션 및 비용 절감을 도모합니다." },
        { name: "팝업 스토어", quantity: "투어 연계", description: "Hello82 활동과 독립적으로 또는 연계하여 진행. 포토, 커스텀 컵홀더, 팬사인회 형식. 11월 미국 투어와 연계." },
        { name: "OOH", quantity: "LA + NYC", description: "포스터, QR 코드 캠페인, 빌보드, 스트릿 스니프. BDC-deck 참조 기하학에 따라 Spotify (DTLA) 및 PMC / Billboard (Westwood) 인근 가시성 확보 전략." },
        { name: "스페셜티 실물 앨범", quantity: "드롭스", description: "친환경 바이닐 변형, 컬러 독점 카세트, 수집용 포토카드 세트. 비용 효율성이 뒷받침되는 경우 현지 생산, 그렇지 않은 경우 수입." },
      ],
    },
    {
      category: "세부 전략 4: PR (홍보 강화)",
      icon: "04",
      items: [
        { name: "미디어 관계", quantity: "전체 과정", description: "미국 성장 스토리, 컴백 서사, 투어 커버리지, 주요 성과 보도. PR은 성장 엔진이 아닌 홍보 강화 수단으로 활용." },
        { name: "편집부 집중 홍보", quantity: "단계별 타겟", description: "1티어: BUZZ, Front Row Live, Soompi, Allkpop. 2티어: EARMILK, Consequence, NME, Pigeons & Planes. 3티어: Billboard, Rolling Stone, Pitchfork. 팬덤 및 디지털 모멘텀이 보고 가능한 순간을 만들어내는 12개월 동안 획득." },
        { name: "힙합 전문 매체", quantity: "주기적 발동", description: "Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea. 한국 힙합 피처링 또는 프로덕션 크레딧 콘텐츠 공개 시 발동." },
        { name: "주요 이벤트 물류 지원", quantity: "필요시", description: "현지 프로모션 지원, 프레스 정크, 인터뷰 조율. 위기 모니터링 포함; 위기 관리는 추가 비용 발생." },
      ],
    },
    {
      category: "세부 전략 5: 선택적 추가 사항",
      icon: "05",
      items: [
        { name: "라디오 전략", quantity: "+25,000달러", description: "1티어 또는 2티어 미포함: 미국 라디오 집중 홍보(재생 횟수 목표, 방송국 관계, 온에어 프리미어)를 위한 별도 25,000달러 추가." },
        { name: "A&R / 피처링 전략", quantity: "범위 지정", description: "피처링 전략, 아티스트 호환성 분석, 미국 협업 소개. Beenzino, BIG Naughty, OLNL, Sik-K를 통한 한국 힙합 신뢰도 확보." },
        { name: "추가 체험형 콘텐츠", quantity: "범위 지정", description: "다회차 체험형 콘텐츠, 게임 및 XR 통합, 앨범 감상 이벤트 외 스폰서십 파트너십 실행." },
        { name: "추가 콘텐츠 제작", quantity: "범위 지정", description: "유튜브용 월간 스튜디오 브이로그 시리즈, 제작 크레딧 콘텐츠, 라이브 공연 녹화, 에피소드별 투어 다이어리 콘텐츠." },
      ],
    },
  ],

  scope: {
    included: [
      "상시 운영되는 미국 팬 페이지 네트워크 (Tier 1: 채널 3개, Tier 2: 채널 4-5개)",
      "Laylo CRM 및 SMS 인프라 (세분화 및 미국 소유)",
      "Meta, TikTok, YouTube, Spotify Ads 전반의 플랫폼 디지털 광고비 배분",
      "DSP 제안 및 에디토리얼 관계 관리",
      "주요 이벤트(컴백, 미국 투어, 일본 론칭) 시 PR 증폭",
      "전략적 관리 감독, 공급업체 조정, 월간(Tier 1) 또는 격주(Tier 2) 보고",
      "Tier 2: 크리에이터 마케팅, 리스닝 이벤트, 팝업 스토어, OOH(옥외 광고)",
    ],
    excluded: [
      "라디오 프로모션 ($25,000 추가 옵션)",
      "A&R / 피처링 전략 (추가 옵션, 별도 범위 설정 및 견적)",
      "인-티어 리스닝 이벤트 외 추가 체험형 이벤트 (추가 옵션)",
      "표준 주기 자산 외 추가 콘텐츠 제작 (추가 옵션)",
      "위기 관리 (모니터링 포함, 적극적인 위기 관리는 추가 요금)",
      "상세한 크리에이티브 디렉션 또는 캠페인별 전술 계획. 본 제안서는 실행 브리프가 아닌 전략적 프레임워크입니다.",
    ],
    subheading:
      "2개의 티어, 5개의 버티컬, 12개월의 실행 기간. 추가 옵션은 티어 외이며 요청 시 범위 설정됩니다.",
  },

  quote: {
    model: "retainer",
    currency: "USD",
    lineItems: [
      {
        name: "CCD 전략 리테이너",
        description: "$2,500/월 실행 수수료. 전략적 관리 감독, 공급업체 조정, 보고 및 CCD 직접 인력 포함. 올인 티어 예산 내 포함.",
        price: 2500,
        priceLabel: "/월",
        recurring: true,
      },
      {
        name: "미디어 관리 수수료",
        description: "관리 미디어 집행 비용의 15%. 집행된 금액에 대해서만 청구. 유료 미디어 기획, 구매, 최적화 및 픽셀 데이터 아키텍처 포함. 올인 티어 예산 내 포함.",
        price: 0,
        priceLabel: "관리 미디어의 15%",
      },
      {
        name: "Tier 1: 기초",
        description: "$50,000 올인, 6개월. CCD 리테이너 + 내부 관리 미디어 $23K의 15%; 공급업체 및 집행 가능한 순수 금액은 $31.5K.",
        price: 50000,
        priceLabel: "올인 / 6개월",
      },
      {
        name: "Tier 2: 확장 (권장)",
        description: "$100,000 올인, 6개월. CCD 리테이너 + 내부 관리 미디어 $74K의 15%; 공급업체 및 집행 가능한 순수 금액은 $73.9K.",
        price: 100000,
        priceLabel: "올인 / 6개월",
      },
      {
        name: "선택 사항. 라디오 전략",
        description: "티어 외. 미국 라디오 집중 홍보 (방송 횟수, 방송국 관계, 온에어 최초 공개).",
        price: 25000,
        priceLabel: "add-on",
      },
    ],
    subtotal: 100000,
    discount: { label: "", percentage: 0, amount: 0 },
    total: 100000,
    paymentSchedule: [
      { milestone: "1개월 차. 기초 구축 시작", percentage: 17, amount: 16667, due: "계약 체결 시" },
      { milestone: "2개월 차", percentage: 17, amount: 16667, due: "30일차" },
      { milestone: "3개월차. 컴백 론칭", percentage: 17, amount: 16667, due: "60일차" },
      { milestone: "4개월차", percentage: 17, amount: 16667, due: "90일차" },
      { milestone: "5개월차. 미국 투어", percentage: 17, amount: 16666, due: "120일차" },
      { milestone: "6개월차", percentage: 16, amount: 16666, due: "150일차" },
    ],
    paymentTerms: "송장 발행 후 7일 이내 지급. Crowd Control Digital, LLC에 지급. Tier 2 예시이며, Tier 1은 동일 구조 시 월 $8,333로 비례 조정됩니다.",
    paymentLink: "#approve",
  },

  nextSteps: [
    { step: 1, title: "검토", description: "Kev Nish 및 Kakao 팀과 본 제안서를 검토하며, 철학, 티어별 산정 방식, 12개월 로드맵에 대한 심층 논의를 진행해 주십시오." },
    { step: 2, title: "티어 선정", description: "Tier 1 (기반 구축) 또는 Tier 2 (확장)을 확정하십시오. 재승인은 연 2회 진행됩니다." },
    { step: 3, title: "MSA + SOW", description: "Kakao-CCD MSA를 통해 6개월 SOW로 계약을 체결합니다. 선택적 추가 사항은 별도로 범위가 정해집니다." },
    { step: 4, title: "기반 구축", description: "1단계는 계약 체결 후 2주 이내 시작: 팬 페이지 네트워크 구축, Laylo CRM 구축, 스토리텔링 아키텍처 확정." },
    { step: 5, title: "9월 컴백", description: "2단계는 7번째 미니 앨범 발매와 함께 시작됩니다. Hanteo 초동 목표: 200K+. 3단계 종료 시점 Spotify ML 목표: 600K+." },
  ],

  cta: {
    headline: "12개월. 단 한 번의 결정.",
    body: "82MAJOR는 최고 수준의 인프라를 갖추고 있습니다. 스트리밍 레이어가 현재 격차입니다. 본 제안은 이를 메우는 프레임워크입니다. 착수 회의 시작을 승인해 주십시오. 24시간 내 후속 조치하겠습니다.",
    email: "geoff@crowdcontroldigital.com",
  },

  images: {
    hero1: "/images/82major/hero1.png",
    hero2: "/images/82major/hero2.png",
    product: "/images/82major/product.png",
    editorial: "/images/82major/editorial.png",
    texture: "/images/82major/texture.png",
    brutalist: "/images/82major/brutalist.png",
    hero1Caption: "미국 성장 전략 / 12개월 로드맵",
    brutalistCaption: "82MAJOR × Kakao × Crowd Control Digital",
  },

  caseStudies: [
    { client: "MONSTA X", metric: "120K+", description: "TICKETS SOLD" },
    { client: "BBNO$", metric: "1.6B+", description: "SPOTIFY STREAMS" },
    { client: "PESO PLUMA", metric: "40M+", description: "TIKTOK CREATES" },
    { client: "ILLENIUM", metric: "8x", description: "PLATINUM" },
  ],
};
