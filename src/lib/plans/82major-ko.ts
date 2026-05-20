import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major/og-image.png",
  language: "ko",
  languageAlternates: [{ slug: "82major", label: "English", code: "EN" }],

  cover: {
    label: "미국 성장 전략",
    title: "82MAJOR",
    subtitle: "2027년 상반기까지의 장기적인 미국 확장 프레임워크. 팬덤 우선. 곡과 무관. 확장 가능.",
    partnership: "Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / 공동 창립자, CCD",
    date: "2026년 5월",
    backgroundImage: "/images/82major/82major-group.jpg",
  },

  approveCta: {
    label: "승인",
    sentLabel: "전송되었습니다. 저희 팀에서 연락드리겠습니다.",
    caption: "승인 알림 Crowd Control Digital",
  },

  sections: [
    // ===================================================================
    // 01. Overview / Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "개요",
      title: "개요 및 목표",
      subtitle: "팬덤 인프라를 우선 구축하고 릴리즈 시점을 중심으로 디지털, 체험형, PR을 통해 증폭시키는 확장 가능한 미국 확장 전략.",
      body: [
        "본 자료는 82MAJOR의 장기적인 미국 성장 프레임워크를 제시합니다. 현재 SIGN 프로모션 사이클, 9월 컴백 롤아웃, 11월 미국 투어, 그리고 2027년 상반기까지의 팬덤 및 잠재 고객 성장을 지원합니다.",
        "이는 상세한 크리에이티브 자료가 아니며, 캠페인별 전술 문서도 아닙니다. 예산이 여러 분야에 어떻게 배분되고 다음 릴리스 사이클로 어떻게 확장되는지를 관리하는 전략적 프레임워크입니다. 여기에 제시된 $50K 및 $100K 티어는 현재 SIGN 싱글 사이클에 맞춰져 있습니다. 9월 컴백은 동일한 구조에 새로운 티어를 승인하며, 11월 투어 및 2027년 상반기 일본 론칭에도 동일하게 적용됩니다. 권장 지출 배분, 확장 가능한 미국 시장 구축, 그리고 모든 사이클에 걸쳐 적용되는 협상 불가능한 기반 레이어를 포함합니다.",
      ],
      supports: {
        heading: "본 전략이 지원하는 사항",
        items: [
          "현재 SIGN 싱글 프로모션 추진",
          "9월 컴백 롤아웃 (7번째 미니 앨범)",
          "11월 미국 투어 (재개)",
          "2027년 상반기 HoriPro 산하 일본 론칭",
          "2027년 상반기 및 그 이후까지의 장기적인 팬덤 성장",
        ],
      },
      goals: {
        heading: "주요 목표",
        items: [
          "팬덤 성장: 사이클 전반에 걸쳐 복리 효과를 창출하는 미국 기반 채널 및 CRM",
          "디지털 마케팅: 기존 전환율에 맞춰 조정된 발견 계층(discovery-layer) 확보",
          "체험형 마케팅: 사회적 증거와 언론 노출을 생성하는 오프라인 이벤트",
          "PR 증폭: 하위 계층 위에 신뢰도와 스토리텔링 확장",
          "DSP 및 파트너십 기회: 편집 관계 및 플랫폼 통합",
          "선택 사항: A&R / 피처링 전략 및 별도 25,000달러 라디오 계획",
        ],
      },
      footnote: "본 프레젠테이션은 전략적 척추 역할을 합니다. 캠페인별 크리에이티브 및 전술 계획은 그 아래에 위치합니다.",
    },

    // ===================================================================
    // 02. Core Strategy + Philosophy
    // ===================================================================
    {
      type: "philosophy",
      number: "02",
      navLabel: "철학",
      title: "핵심 전략 및 철학",
      thesis: "팬덤이 모든 것을 주도합니다. PR만으로는 아티스트를 성공시킬 수 없습니다. 강력한 팬덤과 참여는 보도할 가치가 있는 순간을 만듭니다. 오프라인 활동은 디지털 대화를 촉진합니다. 디지털 모멘텀은 미디어 및 파트너십 기회를 강화합니다.",
      hierarchy: [
        {
          label: "팬덤 (기반, 상시 운영)",
          description: "축적층. Laylo를 통한 미국 팬 페이지 네트워크, CRM 및 SMS, 자체 팬덤 확보, 팬 참여 메커니즘. 릴리스 일정과 관계없이 매주 운영됩니다. 협상 불가능한 기본 지출입니다. 이 레이어가 없으면 다른 모든 지출은 누수됩니다.",
        },
        {
          label: "디지털 (증폭기)",
          description: "도달이 발생하는 곳. 플랫폼 전략, 내러티브 포지셔닝, 크리에이터 참여, 유료 증폭, DSP 및 편집 파트너십. 하위 팬덤 레이어에 맞춰 조정됩니다. 릴리스 기간 동안 지출이 증가하지만 팀은 동일하게 유지됩니다.",
        },
        {
          label: "경험 (증폭기)",
          description: "사회적 증거가 생성되는 곳. 리스닝 이벤트, 팝업, OOH, 특수 실물, 게임 및 XR 통합. IRL은 콘텐츠를 만듭니다. 콘텐츠는 디지털 대화를 생성합니다. 디지털 대화는 PR로 이어집니다. 이 레이어를 건너뛰면 브랜드는 다룰 만한 순간을 결코 갖지 못합니다.",
        },
        {
          label: "PR (증폭기)",
          description: "신뢰도 및 내러티브 확장. 퍼널 상단 성장 엔진이 아닙니다. PR은 팬덤, 디지털, IRL이 이미 가리킬 만한 것을 생산하고 있을 때 작동합니다. 너무 일찍 제안하면 관계가 소진됩니다. 적시에 제안하면 이전의 모든 지출을 확장합니다.",
        },
      ],
      messaging: [
        "팬덤 및 디지털 인프라는 곡과 무관합니다. SIGN, 9월 컴백, 그리고 이후 모든 릴리스를 지원합니다.",
        "기반에 대한 지속적인 지출. 릴리스 창 및 투어 날짜에 맞춰 조정된 증폭기에 대한 간헐적 지출.",
        "최소 12개월의 기간. 캠페인별 재구축은 없습니다.",
        "인상적인 순위보다 티어 프레이밍. 모든 추천은 82MAJOR가 티어 1 경쟁사에 비해 어디에 있는지, 그리고 그 격차를 좁히기 위해 무엇이 필요한지를 참조합니다.",
      ],
      footnote: "기본 지출은 협상 불가능합니다. 증폭기 지출은 일정에 맞춰 조정됩니다.",
    },

    // ===================================================================
    // 03. Proposal Structure
    // ===================================================================
    {
      type: "structure",
      number: "03",
      navLabel: "구조",
      title: "제안 구조",
      intro: "두 가지 티어가 있습니다. 두 티어 모두 현재 SIGN 싱글 사이클(2026년 5월 - 8월, 약 12주간의 적극적인 푸시)에 대한 올인 예산입니다. 9월 컴백은 새로운 티어 승인을 유발하며, 11월 미국 투어는 컴백 사이클에 포함됩니다. CCD 실행 수수료($2,500/월 리테이너 + 관리 미디어 15% 관리)는 티어 예산 내에 포함되며, 별도가 아닙니다.",
      tiers: [
        {
          label: "Tier 01",
          budget: "기반 계획",
          name: "올인 상한선. SIGN 사이클(약 12주). 기반 구축만 해당.",
          goal: "SIGN 푸시를 통해 기초적인 미국 팬 생태계를 구축하고 지속적인 참여를 확보합니다.",
          includes: [
            "상시 팬덤 인프라 (미국 팬 페이지 네트워크)",
            "팬 HQ 소셜 전략",
            "Laylo에서의 CRM 및 SMS 수집",
            "DSP 플레이리스트 피칭 및 에디토리얼",
            "기본 PR 지원",
            "가벼운 콘텐츠 및 내러티브 지출",
          ],
        },
        {
          label: "Tier 02",
          budget: "확장 성장 계획",
          name: "총액 상한선. SIGN 사이클 (~12주). 기본 구성 및 증폭 기능 포함.",
          goal: "SIGN 사이클에서 잠재 고객 성장을 가속화하고, 9월 컴백으로 모멘텀을 복합적으로 이어갈 화력을 확보합니다.",
          featured: true,
          includes: [
            "티어 1의 모든 것",
            "디지털 지출 증가 (풀 퍼널)",
            "인플루언서 / 크리에이터 지원",
            "더 공격적인 마케팅 캠페인",
            "경험적 활동 (리스닝 이벤트, 팝업)",
            "OOH, 릴리즈 시점에 맞춰 집행",
            "확장된 DSP 전략 (라이브 프로그램 + 아티스트 투 워치)",
            "대규모 팬덤 성장 이니셔티브",
            "콘텐츠 생태계 확장",
          ],
        },
      ],
    },

    // ===================================================================
    // 04. Vertical 1: Fandom / Always-On Digital
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "팬덤",
      title: "버티컬 1 / 팬덤 & 상시 디지털",
      philosophy: "복리 효과를 창출하는 기반. 지속적인 지출. 곡과 무관함. 다른 모든 지출의 근간이 되는 레이어.",
      subBlocks: [
        {
          label: "A",
          title: "미국 중심 HQ 팬 페이지",
          budget: "$3,500/월 (채널당 1000만 뷰 기준, 변동 가능)",
          timeline: "최소 3-6개월 계약; 캠페인 시작 약 1개월 전부터 워밍업 시작",
          objective: "한국 팬 채널의 기본 틀을 벗어나, 미국 팬덤 생태계를 구축하고 미국 내 관심을 미국 소유의 오디언스로 전환합니다.",
          strategy: "Beautiful Digital 또는 INFINITIZE와 같은 에이전시와 협력하여 미국 시장에 포지셔닝된 채널 네트워크를 운영합니다. 한국 콘텐츠에 자막 및 현지화를 적용하여 재가공합니다. 미국 시장에 특화된 편집본을 제작합니다. 채널이 팬 계정의 추측이 아닌 아티스트 팀의 확장으로 운영될 수 있도록 사전에 샷 리스트와 콘텐츠 요청 사항을 제공합니다. 비용은 변동 가능하며 채널당 1000만 뷰당 월 $3,500로 상한선이 정해져 있습니다. 트래픽이 적으면 비용이 낮아지며, 상한선은 변동되지 않습니다.",
          components: {
            heading: "네트워크 운영 내용",
            items: [
              "한국 콘텐츠를 영어 자막 및 미국 편집본과 함께 재가공",
              "미국 우선 편집본 제작 (라이브 클립 순간, 멤버 스포트라이트, 투어 영상)",
              "미국 특성에 맞는 속도로 진정성 있는 팬덤 참여 구축",
              "CCD 및 아티스트 팀이 통제하는 채널로 미국 팬 확보",
              "Hello82, Kpop-Nara 및 파트너 생태계와 협력하여 활동 조율",
            ],
          },
          kpis: [
            "점진적인 팔로워 증가",
            "참여도 증가 (저장, 공유, 댓글)",
            "팬 참여율",
            "UGC 증폭",
            "커뮤니티 유지",
          ],
        },
        {
          label: "B",
          title: "이메일 CRM + SMS 전략",
          budget: "미정 (티어 내)",
          objective: "일반 오디언스를 아티스트 팀이 플랫폼 알고리즘 외부에서 소유하는 유지 가능한 팬덤 생태계로 전환합니다.",
          strategy: "Laylo를 미국 CRM 및 SMS 플랫폼으로 구축합니다. 모든 접점(Hello82 드롭, 투어 현장, 콘텐츠 언락, 소셜 DM 퍼널)에서 이메일 및 SMS를 수집합니다. 도시, 참여 등급, 구매 이력별로 세분화합니다. 릴리즈 시점에 맞춰 유지 관리 플로우를 실행합니다.",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "이메일 수집 플로우 (웹, 소셜, 투어)",
              "Laylo SMS 스택 (드롭 알림, 티켓팅, 투어 커뮤니케이션)",
              "도시, 등급, 행동별 팬 세분화",
              "릴리즈 시점에 맞춰 진행되는 유지 캠페인",
              "리스트 성장을 견인하는 팬 인센티브 (사전 저장 언락, 포토카드 제공)",
            ],
          },
          kpis: [
            "이메일 리스트: 6개월 내 10,000명 이상 확보",
            "SMS 리스트: 6개월 내 5,000명 이상 확보",
            "오픈율: 40% 이상 (Laylo, 활성 팬덤 대상 업계 평균)",
            "발매일 플로우 클릭률: 15% 이상",
          ],
        },
        {
          label: "C",
          title: "팬 참여 메커니즘",
          objective: "바이럴 팬덤 인식 조성: '이 그룹은 팬들을 위해 더 많은 것을 한다'는 정서와 크리에이터, 언론, 파트너가 인지할 수 있는 공개적인 사회적 증거 구축",
          tactics: [
            "콘테스트 (UGC 챌린지, 사진 콘테스트, 작사 챌린지)",
            "증정 이벤트 (친필 사인 포토카드, 투어 티켓, 멤버 큐레이션 번들)",
            "독점 콘텐츠 언락 (MV 선공개, 비하인드 영상)",
            "스트리밍, 사전 저장, 구매와 연계된 팬 보상",
            "VIP 참여 (최상위 팬 인정, 멤버별 감사 메시지)",
            "참여 캠페인 (멤버 주도 챌린지, 댄스 커버)",
          ],
        },
      ],
      footnote: "기반 활동은 발매 일정과 무관하게 매월 진행됩니다. 이는 복리 효과를 창출하는 핵심 요소입니다.",
    },

    // ===================================================================
    // 05. Vertical 2: Digital Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "디지털",
      title: "세부 영역 2 / 디지털 마케팅",
      philosophy: "유료, 오가닉, 크리에이터 전반에 걸친 전반적인 지출 할당. 팬덤 기반을 도달로 전환하는 증폭기입니다. (DSP 전략은 아래 별도 항목으로 분리됩니다.)",
      subBlocks: [
        {
          label: "A",
          title: "콘텐츠 내러티브 + 곡 포지셔닝",
          objective: "브랜드와 리스너 간의 간극 해소. 브랜드는 힙합을 마케팅하지만, 청중은 멜로디컬한 B-사이드 곡을 소비합니다. 내러티브 구조는 이를 창의적인 리셋이 아닌 멤버들의 자체 작업물로 다루어야 합니다.",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "타이틀곡 포지셔닝 (힙합 프레임)",
              "B-사이드곡 포지셔닝 (멜로디컬 프레임)",
              "프로덕션 크레딧 콘텐츠 (멤버 프로듀서 참여, 활용되지 않은 자산)",
              "바이럴 스토리텔링 (조작된 것이 아닌 실제 카탈로그 순간에 기반)",
              "타이틀곡 및 B-사이드 주기와 연계된 UGC 캠페인",
            ],
          },
        },
        {
          label: "B",
          title: "틱톡 증폭 + 크리에이터 참여",
          budget: "티어 2 대상",
          objective: "82MAJOR가 가장 취약한 플랫폼인 틱톡을, 미국 투어 전환 팬 및 K-힙합 크로스오버 팬을 팔로워 및 스트리머로 전환시키는 발견 엔진으로 발전시킵니다.",
          tactics: [
            "인플루언서 크리에이터 활성화 (릴리즈 기간당 8-15개)",
            "타이틀곡 순간에 대한 Flighthouse 스타일 증폭",
            "B-사이드 곡 주변의 오가닉 크리에이터 참여",
            "유료 크리에이터 지원 (스폰서 게시물, 댄스 챌린지)",
            "릴리즈 시점에 맞춘 트렌드 편승",
          ],
        },
        {
          label: "C",
          title: "인플루언서 마케팅",
          budget: "티어 2 대상",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "테이스메이커 계층 (중간 영향력, 높은 신뢰도의 크리에이터)",
              "Flighthouse 스타일 증폭 (대규모 배포 네트워크)",
              "오가닉 및 유료 크리에이터 지원",
              "한국 힙합 크로스오버 크리에이터 (신뢰도 확보 계층)",
              "릴리즈 미학에 연계된 미국 댄스 및 스타일링 크리에이터",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // 06. Vertical 3: Experiential Marketing
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "경험",
      title: "버티컬 3 / 체험 마케팅",
      philosophy: "오프라인이 온라인을 견인합니다. 실제 세계의 순간들이 소셜 공유, 팬덤 신뢰도, 언론 노출, 바이럴 콘텐츠 기회를 창출합니다.",
      subBlocks: [
        {
          label: "A",
          title: "리스닝 이벤트",
          budget: "주기당 Tier 2 / 1회",
          objective: "팬, 크리에이터, 언론이 참여하고 싶어하는 릴리즈 당일의 순간을 만드십시오. 이후의 디지털 담론을 위한 앵커 역할을 할 것입니다.",
          tactics: [
            "향상된 리스닝 경험 (Polygon / L-Acoustics 스타일)",
            "파트너 장소 (Cosm, Little Cinema, 문화 기관)",
            "비용 상쇄 및 교차 홍보를 위한 브랜드 또는 DSP 파트너십",
            "가능한 경우 라이브 공연 통합",
            "개최 도시 외 팬들을 위한 온라인 허브",
          ],
        },
        {
          label: "B",
          title: "팝업 스토어",
          budget: "Tier 2 / 투어 시점에 맞춰",
          objective: "미국 투어 일정 및 Hello82 분기별 드롭을 다일간의 사진, 콘텐츠, 판매 이벤트로 전환합니다.",
          tactics: [
            "LA 및 NYC 단독 팝업 스토어",
            "2선 도시 Hello82 분기별 드롭에 추가 적용",
            "커피 파트너사와의 컵홀더 이벤트",
            "파트너 음반 매장과의 팬사인회 연계",
            "현장 포토카드 및 한정판 실물 앨범 발매",
          ],
        },
        {
          label: "C",
          title: "OOH",
          budget: "2선 도시 / 발매 시점",
          objective: "팬들이 공유하는 영수증을 생성하십시오. OOH는 인지도가 아니라, 미국 팬 생태계가 증폭시킬 콘텐츠입니다.",
          examples: [
            "LA + NYC 투어 거점 지역 포스터 및 스나이프 광고",
            "Laylo 가입으로 연결되는 QR / 전화번호 캠페인",
            "유동 인구가 많은 K팝 팬 집결지 연계 스트리트 마케팅",
            "인터랙티브 빌보드 (멤버 초상화, 컴백 티저)",
            "Spotify (DTLA) 및 PMC / Billboard (Westwood) 인근 가시성 높은 배치",
          ],
        },
        {
          label: "D",
          title: "스페셜티 굿즈 및 실물 앨범",
          objective: "수익성이 뒷받침되는 경우 미국 현지 생산, 그렇지 않은 경우 수입. 단위 마진뿐만 아니라 실물 앨범 드롭의 주권이 더 중요합니다.",
          examples: [
            "친환경 바이닐 에디션 (Good Neighbor 스타일 파트너)",
            "멤버별 카세트 테이프 (Y2K 코드 수집품)",
            "미국 투어 도시 연계 포토카드 세트",
            "파트너 음반 매장을 통한 한정판 사인 앨범",
            "Hello82 D2C 독점 상품",
          ],
        },
        {
          label: "E",
          title: "XR / VR / 게이밍 통합",
          objective: "미국 투어-전환 데모에 도달하여 그들이 이미 여가 시간을 보내는 곳에 접근하십시오.",
          examples: [
            "Roblox 또는 Fortnite 스킨 / 경험 통합",
            "Twitch 퍼포먼스 파트너십",
            "출시 시점에 맞춰 Discord 서버 활성화",
            "게이밍 브랜드 스폰서십 (Riot, Razer, Logitech)",
          ],
        },
      ],
      footnote: "IRL은 PR에 보도할 거리를 제공합니다. 이것이 없다면 언론 사이클은 굶주릴 것입니다.",
    },

    // ===================================================================
    // 07. Vertical 4: DSP Strategy
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "DSP",
      title: "버티컬 4 / DSP 전략",
      philosophy: "The discovery layer. Where 82MAJOR's healthy follower-to-listener ratio gets the reach it has been missing.",
      intro: "82MAJOR는 도달하는 것을 전환시킵니다. 병목 현상은 팬 동기 부여가 아닌, 에디토리얼 및 플랫폼 도달 범위에 있습니다. 이 버티컬은 해당 격차를 해소하기 위해 자체적인 전담 관계, 일정 및 콘텐츠 생산이 필요하기 때문에 존재합니다.",
      subBlocks: [
        {
          label: "A",
          title: "피처링 아티스트 전략 (SIGN)",
          objective: "82MAJOR를 글로벌 스케일의 퍼포먼스 중심 보이그룹으로 포지셔닝하기 위해, 각 싱글을 피처링 아티스트와 전략적으로 협업하여 DSP 도달 범위를 핵심 K-pop 팬층을 넘어 확장하고, 바이럴 및 소셜 크로스오버 모멘트를 창출하며, 에디토리얼 플레이리스트 내 입지를 강화하고, 서구권 팝, 댄스, 힙합, 얼터너티브 분야에서의 신뢰도를 높이며, 싱크, 리믹스, 페스티벌 기회를 지원하고, 테이스티메이커 아티스트들과의 장기적인 연관성을 구축합니다.",
          strategy: "SIGN은 절제된 퍼커션, 몽환적인 멜로디, 감정 조절된 보컬 딜리버리가 특징인 90년대 스타일의 R&B 질감에 사운드적으로 집중합니다. 이 곡은 그룹의 보다 강렬한 퍼포먼스 곡들과는 달리, 분위기 있고 미니멀하며 성숙한 느낌을 줍니다. 피처링 아티스트 선정은 이러한 무드에 맞춰 얼터너티브 R&B 신뢰도, 패션/테이스티메이커 포지셔닝, K-pop 외 문화적 도달 범위를 고려해야 합니다.",
          components: {
            heading: "전략적 목표",
            items: [
              "DSP 도달 범위를 핵심 K-pop 팬층을 넘어 확장",
              "바이럴 및 소셜 크로스오버 모멘트 창출",
              "에디토리얼 플레이리스트 내 입지 강화",
              "서구권 팝, 댄스, 힙합, 얼터너티브 분야에서의 신뢰도 확보",
              "싱크, 리믹스, 페스티벌 기회 지원",
              "테이스티메이커 및 문화적으로 관련성 높은 아티스트들과의 장기적인 연관성 구축",
            ],
          },
          featureTiersHeading: "SIGN - 피처링 아티스트 후보",
          featureTiers: [
            {
              label: "티어 1",
              artists: [
                {
                  name: "TOMMY RICHMAN",
                  monthlyListeners: "월간 청취자 12.3M",
                  instagram: "IG 팔로워 334K",
                  reference: "Changes - Tommy Richman",
                  referenceUrl: "https://open.spotify.com/track/32VOsoPR0N9dEZNbogPIeZ",
                  note: "지난 한 해 동안 가장 큰 주목을 받은 아티스트 중 한 명으로, 막대한 스트리밍 모멘텀을 보여주고 있습니다. 레트로풍의 보컬과 그루브 넘치는 프로덕션은 SIGN의 90년대 영향을 잘 담아내고 있으며, 전통적인 팝 팬층을 넘어선 강력한 문화적 관심과 폭넓은 크로스오버 매력을 지니고 있습니다.",
                },
                {
                  name: "BAKAR",
                  monthlyListeners: "월간 청취자 9.3M",
                  instagram: "IG 팔로워 341K",
                  reference: "Don't Wanna - Justin Bieber, Bakar",
                  referenceUrl: "https://open.spotify.com/track/5hplO2Sk1SaZgSaR05m6Nn",
                  note: "최근 Justin Bieber의 SWAG 프로젝트에 참여하여 상당한 문화적 인지도를 얻었습니다. 인디, 얼터너티브, R&B의 영향을 SIGN의 무드와 자연스럽게 조화시키며, 전통적인 팝 시장을 넘어 패션, 테이스트메이커, 해외 투어링 분야에서도 강력한 신뢰도를 구축하고 있습니다.",
                },
              ],
            },
            {
              label: "티어 2",
              artists: [
                {
                  name: "AMBER MARK",
                  monthlyListeners: "월간 청취자 2.8M",
                  instagram: "IG 팔로워 389K",
                  reference: "Sweet Serotonin - Amber Mark",
                  referenceUrl: "https://open.spotify.com/track/5pzCNVV0gcW92gF73DmhOa",
                  note: "최근 Sabrina Carpenter의 오프닝 무대를 장식하며 주류 노출을 크게 늘렸습니다. 소울풀한 R&B와 얼터너티브 팝을 SIGN의 성숙한 분위기와 일치하는 방식으로 결합했으며, 패션 선도적인 브랜딩과 DSP 플레이리스트에서의 매력을 갖추고 있습니다.",
                },
                {
                  name: "charlieonafriday",
                  monthlyListeners: "월간 청취자 2.1M",
                  instagram: "IG 팔로워 814K",
                  reference: "That's What I Get - charlieonafriday",
                  referenceUrl: "https://open.spotify.com/track/1JXoYzZXVW7H829mHfiWRm",
                  note: "Gen Z 팬들과의 강력한 참여와 꾸준한 스트리밍 성과를 보여주고 있습니다. 감성적인 팝 작곡은 SIGN의 멜로딕한 친밀감과 잘 어울리며, 넓은 소셜 네트워크는 숏폼 콘텐츠 및 크로스오버 잠재력을 강화합니다.",
                },
              ],
            },
            {
              label: "티어 3",
              artists: [
                {
                  name: "DESTIN CONRAD",
                  monthlyListeners: "월간 청취자 1.1M",
                  instagram: "IG 팔로워 418K",
                  reference: "Bad - DESTIN CONRAD",
                  referenceUrl: "https://open.spotify.com/track/48pi6NxVvt4npqDnLBi0iK",
                  note: "현재 현대 남성 R&B 씬에서 가장 강력한 신예 중 한 명입니다. 부드러운 보컬 톤과 감정 조절이 뛰어난 전달력은 SIGN에 자연스럽게 어울리며, 강력한 투어링 모멘텀과 얼터너티브 R&B 분야에서의 신뢰도를 높여가고 있습니다.",
                },
              ],
            },
          ],
        },
        {
          label: "B",
          title: "음악과 일치하는 레인에서 중요한 플레이리스트에 82MAJOR를 안착시키십시오. 그룹이 K-팝 범주에 기본적으로 포함되도록 두는 대신, 주요 DSP의 alt 및 pop 에디터에게 피칭하십시오.",
          objective: "주요 DSP 중 하나가 사이클 챔피언으로 참여합니다. Spotify, Apple 또는 YouTube Music이 해당 사이클에서 82MAJOR를 360도로 지원합니다. 나머지 두 곳은 기본 플레이리스트 및 에디토리얼을 운영합니다.",
          strategy: "구성 요소",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "Alt + pop 에디터 포지셔닝 (K-팝 범주 제외)",
              "Spotify Equal Asia / Apple Music K-Hits 앵커 플레이스먼트",
              "에디토리얼 관계 개발 (DSP별 담당자 1명 지정)",
              "현지화된 U.S. 맥락을 담은 사이클별 피치 패킷",
              "B",
            ],
          },
        },
        {
          label: "C",
          title: "DSP 브랜드 라이브 콘텐츠를 통해 U.S. 관객에게 82MAJOR의 퍼포먼스 아이덴티티를 선보입니다. 멤버들의 프로듀서로서의 면모는 이러한 형식에서 자연스럽게 드러납니다.",
          objective: "Spotify Outside (유연한 장소)",
          examples: [
            "VEVO DSCVR (LA / NY 촬영)",
            "Amazon Music City Sessions (Twitch 라이브 스트리밍을 통한 홍보)",
            "Amazon Music Presents (LA 기반)",
            "Spotify Singles / Amazon Music Original (미국 곡 커버 형식)",
            "C",
          ],
        },
        {
          label: "D",
          title: "미국 에디토리얼 및 레이블 서비스 파트너에게 '라이징' 신호를 보내는 플래그십 개발 프로그램에 선정",
          objective: "Spotify RADAR",
          examples: [
            "Amazon Music Breakthrough",
            "Apple Up Next (프로그램 상태 미정)",
            "YouTube On The Rise",
            "VEVO DSCVR 주목할 만한 아티스트",
            "TIDAL Rising",
            "Pandora 개발 트랙",
            "D",
          ],
        },
        {
          label: "E",
          title: "발매 주간 동안 휴면 상태인 스트리밍 카탈로그(Sure Thing, Stuck, ON)를 재활성화합니다. Stationhead 리스닝 파티를 활용하여 팬덤 에너지를 측정 가능한 스트림 증가로 전환합니다.",
          objective: "구성 요소",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "팬 계정 호스트와 함께하는 Stationhead 발매 주간 리스닝 파티",
              "발매 서사와 연계된 큐레이션된 U.S. 팬 플레이리스트",
              "크로스 플랫폼 리스닝 파티 증폭 (YouTube, Discord)",
              "스트리밍 알고리즘 신호 전달을 위한 메타데이터 정리",
              "DSP는 나머지 전략을 측정 가능한 스트림으로 전환하는 발견 계층입니다.",
            ],
          },
        },
      ],
      footnote: "vertical",
    },

    // 08. Vertical 5: PR
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "PR",
      title: "증폭, 내러티브 확장, 신뢰성. 주요 성장 동력은 아닙니다. PR은 강력한 팬덤 참여, 디지털 모멘텀, 경험적 순간, 스트리밍 트랙션에 의해 지원될 때 가장 효과적입니다.",
      philosophy: "A",
      subBlocks: [
        {
          label: "A",
          title: "PR의 작동 방식",
          components: {
            heading: "미국 성장 스토리를 중심으로 한 미디어 내러티브",
            items: [
              "문화적 모멘텀 프레이밍 (그룹의 위상 상승)",
              "팬 참여 성공을 뉴스 소재로 활용",
              "최초 및 주요 성과 (첫 미국 투어, 첫 일본 출시, 차트 벤치마크)",
              "12개월 로드맵 기반의 장기적인 아티스트 프로필 구축",
              "B",
            ],
          },
        },
        {
          label: "B",
          title: "CCD가 제안하는 내용",
          components: {
            heading: "인터뷰 (아티스트 및 멤버 개별)",
            items: [
              "심층 프로필 기사",
              "캠페인 및 발매 발표",
              "미국 매체 투어 취재",
              "주요 이벤트 (컴백, 일본 데뷔, 주요 성과)",
              "C",
            ],
          },
        },
        {
          label: "C",
          title: "Tier 1 (내러티브 형성): Billboard, Rolling Stone, Pitchfork, Pigeons & Planes, SPIN, NYT",
          tactics: [
            "Tier 2 (대중문화/청소년 미디어): Teen Vogue, Paper, Nylon, HYPEBAE, i-D",
            "Tier 3 (디지털 트렌드세터): EARMILK, Consequence, NME, DORK, The Line of Best Fit",
            "Tier 4 (K팝 및 음악 블로그): Soompi, Allkpop, KPOPWORLD, Just Jared",
            "힙합 전문 매체: Crash, HipHop LE, HipHop Playa, HipHop DX, Mass Appeal Korea",
            "D",
          ],
        },
        {
          label: "D",
          title: "운영 범위",
          components: {
            heading: "주요 이벤트 및 행사",
            items: [
              "현지 프로모션 및 물류 지원",
              "미국 투어 도시 프레스 정킷 조율",
              "리스크 모니터링 (위기 관리, 추가 비용 발생)",
              "Tier 구분은 방향성을 제시하며, 시간 순서를 의미하지 않습니다. 언론 노출은 계층 구조가 아닌, 보도 준비 상태에 따라 진행됩니다.",
            ],
          },
        },
      ],
      footnote: "vertical",
    },

    // ===================================================================
    // 09. Vertical 6: Optional Add-Ons
    // ===================================================================
    {
      type: "vertical",
      number: "09",
      navLabel: "추가",
      title: "Tier 외 영역. 별도 범위 설정 및 견적. 전략적 시점에 따라 비용 지출이 정당화될 때 실행됩니다.",
      philosophy: "A",
      subBlocks: [
        {
          label: "A",
          title: "범위 지정",
          objective: "구성 요소",
          components: {
            heading: "방송국 관계 구축 (얼터너티브, 탑-40, AAA, 대학 방송)",
            items: [
              "아티스트 적합성 분석 (음악적, 타겟층, 서사)",
              "미국 협업 소개",
              "한국 힙합 신뢰도 강화 요소 (Beenzino, BIG Naughty, OLNL, Sik-K)",
              "협업 주기별 전략적 크리에이티브 디렉션",
              "B",
            ],
          },
        },
        {
          label: "B",
          title: "$25,000",
          budget: "Phase 1: $15-20K (Tier 1 또는 Tier 2에 포함되지 않음)",
          timeline: "Phase 1 / 2-3개월",
          objective: "팝 라디오에서 곡을 히트시키고, 차트 순위를 올리며, 더 중요하게는 그룹을 팝 라디오에 소개하여 더 큰 규모로 경쟁할 수 있도록 합니다.",
          strategy: "전국 팝 라디오 방송국에 서비스를 제공합니다. Sirius를 포함하여 전국에 200개 이상의 팝 라디오 방송국이 있습니다. 이미 아시아 팝을 지원하는 방송국에 집중하여 방송 및 콘텐츠 시작을 강조합니다. 스파이크, 테스트 스핀을 찾고 선두에 설 의향이 있는 챔피언을 식별합니다. 이미 지원을 시작한 iHeartradio 쇼 KPOP w JOJO에 집중합니다. 그가 계속 지원하도록 하고 다른 iHeart 방송국과 이 레버리지를 활용하도록 합니다.",
          components: {
            heading: "주요 라디오 방송국 집중 조명",
            items: [
              "KMVQ 샌프란시스코",
              "WILD 94.9 샌프란시스코",
              "KISS 시카고",
              "Q99 애틀랜타",
              "Z100 뉴욕",
              "KISS 보스턴",
              "KLUC 라스베이거스",
              "KALV 피닉스",
              "시간이 허락하는 대로 추가 방송국",
            ],
          },
          tactics: [
            "신곡을 최초 공개하거나 지원하는 라디오 소셜 게시물에 대한 아티스트 참여 (리트윗, IG 스토리, 리포스트)",
            "Most Requested Live 'Ask Anything Chat' (3주 프로모션). 팬들이 질문을 트윗하면 아티스트가 답변을 촬영하고, 최종 편집된 영상은 MRL 소셜 채널 및 YouTube에 게시됩니다.",
            "MRL은 현재 100개 이상의 팝 라디오 방송국에서 송출되는 가장 크고 중요한 팝 라디오 신디케이션 쇼입니다.",
            "주요 라디오 프로그래머 및 콘텐츠 크리에이터에게 상품을 제공합니다.",
          ],
          examples: [
            "과거 Ask Anything Chat 참여 아티스트: Jackson Wang, (G)I-DLE, P1Harmony, LISA, NMIXX, JO1",
          ],
          linksHeading: "참고",
          links: [
            { label: "askanythingchat.com. Most Requested Live", url: "https://askanythingchat.com" },
          ],
        },
        {
          label: "C",
          title: "범위 지정",
          objective: "D",
        },
        {
          label: "D",
          title: "범위 지정",
          objective: "pricing",
        },
      ],
    },

    // ===================================================================
    // 10. Final Pricing Sheets
    // ===================================================================
    {
      type: "pricing",
      number: "10",
      navLabel: "가격",
      title: "두 개의 티어가 있으며, 둘 다 현재 SIGN 단일 주기(2026년 5월 - 8월, 약 12주)에 맞춰져 있습니다. 9월 복귀 시 동일한 구조의 새로운 티어가 승인됩니다. CCD 실행 수수료는 각 티어 내에 포함되어 있으며, 계산은 각 카드에 포함되어 있습니다.",
      intro: "Tier 01",
      tiers: [
        {
          label: "Tier 01",
          budget: "기반 계획",
          name: "올인 상한선. SIGN 사이클(약 12주). 기반 구축만 해당.",
          tagline: "$39,000",
          deployable: "$7,500",
          feeBreakdown: {
            retainer: "3 mo × $2,500",
            retainerDetail: "~$6,500",
            mediaManagement: "관리되는 미디어 지출 약 $22.5K에 대해 15%",
            mediaManagementDetail: "미국 본사 스타일 팬 페이지",
          },
          breakdown: [
            { vertical: "$12,000", amount: "유료 소셜 광고 (IG + TikTok + X)" },
            { vertical: "$24,000", amount: "Strive.fm" },
            { vertical: "$4,500", amount: "YouTube 광고" },
            { vertical: "$13,500", amount: "Tier 02" },
          ],
        },
        {
          label: "Tier 02",
          budget: "확장 성장 계획",
          name: "총액 상한선. SIGN 사이클 (~12주). 기본 구성 및 증폭 기능 포함.",
          tagline: "$86,500",
          featured: true,
          deployable: "$7,500",
          feeBreakdown: {
            retainer: "3 mo × $2,500",
            retainerDetail: "~$6,500",
            mediaManagement: "관리되는 미디어 지출 약 $42K에 대해 15%",
            mediaManagementDetail: "미국 본사 스타일 팬 페이지",
          },
          breakdown: [
            { vertical: "$12,000", amount: "유료 소셜 광고 (IG + TikTok + X)" },
            { vertical: "$24,000", amount: "인플루언서" },
            { vertical: "$13,000", amount: "클리핑 / 시딩" },
            { vertical: "$8,000", amount: "Spotify 플레이리스트 등록" },
            { vertical: "$10,000", amount: "CCD 리테이너 + 관리 수수료" },
            { vertical: "$4,500", amount: "YouTube 광고" },
            { vertical: "$5,000", amount: "체험형 / OOH" },
            { vertical: "$10,000", amount: "CCD 리테이너 + 관리 수수료" },
            { vertical: "$13,500", amount: "라디오 전략" },
          ],
        },
      ],
      addOns: [
        { name: "$25,000", budget: "Phase 1: $15-20K", description: "Phase 1 (2-3개월) 팝 라디오 푸시: 200개 이상의 팝 방송국 + Sirius, KPOP w JOJO 지원, 주요 방송국 Zooms, Most Requested Live와의 Ask Anything Chat 서비스 제공." },
        { name: "범위 지정", budget: "월간 스튜디오 브이로그 시리즈, 프로덕션 크레딧 콘텐츠, 라이브 녹음, 에피소드별 투어 다이어리 콘텐츠.", description: "추가 체험형 콘텐츠" },
        { name: "범위 지정", budget: "월간 스튜디오 브이로그 시리즈, 프로덕션 크레딧 콘텐츠, 라이브 녹음, 에피소드별 투어 다이어리 콘텐츠.", description: "추가 콘텐츠 제작" },
        { name: "범위 지정", budget: "월간 스튜디오 브이로그 시리즈, 프로덕션 크레딧 콘텐츠, 라이브 녹음, 에피소드별 투어 다이어리 콘텐츠.", description: "각 릴리스 사이클마다 자체 등급 승인이 부여됩니다. 9월 컴백은 사이클 2를 발동시킵니다 (동일한 구조, 사이클 1 성과 기반의 새로운 예산 요청). 추가 기능은 독립적인 SOW에 따라 릴리스 사이클별로 발동됩니다." },
      ],
      footnote: "각 릴리스 주기는 자체적인 티어 승인을 받습니다. 9월 컴백은 Cycle 2를 발동시킵니다 (동일한 구조, Cycle 1 성과 기반의 새로운 예산 요청). 추가 기능은 독립적인 SOW에 따라 릴리스 주기별로 발동됩니다.",
    },
  ],
};
