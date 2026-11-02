import type { StrategyPlanData } from "../plan-context";

export const fiftyFiftyExecutionPlanKorean: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/fifty-fifty/og-plan.png",
  language: "ko",
  languageAlternates: [{ slug: "fifty-fifty-plan", label: "English", code: "EN" }],

  cover: {
    label: "미국 실행 계획",
    title: "FIFTY FIFTY",
    subtitle: "2월 EP를 위한 90일 프로그램: 팬 데이터, 미국 성장, 피지컬 앨범 판매, Top 40 라디오. 모든 예산, 일정, 목표를 항목별로 정리했습니다.",
    partnership: "Transparent Arts와 Crowd Control Digital의 공동 제안",
    prepared: "Transparent Arts 및 Crowd Control Digital",
    date: "2026년 11월",
    backgroundImage: "/images/fifty-fifty/fifty-fifty-group.jpg",
    partnerLogos: [
      { src: "/brand/TA-LOGO-WHITE.png", alt: "Transparent Arts", height: 36 },
      { src: "/brand/CC-LOGO-2024-WHITE.png", alt: "Crowd Control Digital", height: 22 },
    ],
  },

  footerCredit: "Transparent Arts × Crowd Control Digital",

  approveCta: {
    label: "승인",
    sentLabel: "전송되었습니다. 저희 팀이 곧 연락드리겠습니다.",
    caption: "승인 시 TRANSPARENT ARTS와 CROWD CONTROL DIGITAL에 통보됩니다",
  },

  sections: [
    // ===================================================================
    // 01. Plan Overview
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "개요",
      title: "계획 개요",
      subtitle: "12월 초부터 2월 EP 발매까지 90일간 진행되는 $87,500 규모의 핵심 프로그램과, 이와 병행하는 별도 $100,000 규모의 Top 40 라디오 캠페인입니다.",
      body: [
        "본 문서는 미국 성장 계획을 실행 일정으로 구체화한 것입니다. 대상은 첫 번째 발매 사이클인 2월 EP에 한정됩니다. 신곡 두 곡의 유로팝 댄스 트랙을 앞세운 4곡 구성이며, 피지컬 앨범과 포토북 2종이 함께 발매됩니다. 작업은 2026년 12월 7일 주간에 시작하여, 첫 싱글이 미국 리스너에게 도달하기 전에 팬 리스트, 광고 계정, 콘텐츠 운영 리듬이 이미 가동되도록 합니다. 발매 주간은 잠정적으로 2월 8일 주간으로 설정했으며, ATTRAKT가 확정하는 날짜에 맞춰 조정됩니다.",
        "핵심 프로그램은 $87,500입니다. 3개월간의 팀 리테이너 $30,000, 실비로 집행되는 $50,000의 실집행 매체비, 그리고 해당 매체비의 15%인 $7,500의 매체 운영 수수료로 구성됩니다. 이 예산은 하나의 팀이 운영하는 세 가지 워크스트림에 투입됩니다. 퍼스트파티 팬 데이터는 ATTRAKT가 소유하는 미국 팬 리스트를 구축합니다. 미국 성장은 그룹 자체 데이터로 검증된 콘텐츠 포맷에 유료 매체를 집중합니다. 발매 및 피지컬은 EP에 대한 미국 수요를 하나의 차트 집계 주간에 집중시킵니다. Top 40 라디오는 네 번째 워크스트림으로, 초기 3개월 캠페인에 대해 $100,000가 별도 책정되며 Transparent Arts가 69개 방송국을 커버하는 독립 프로모터 네트워크를 통해 주도합니다.",
        "모든 항목에는 목표가 있고, 모든 목표에는 하위, 기대, 상위 시나리오가 있습니다. 기간 중 두 차례의 체크포인트에서 다음 예산 배분을 결정합니다. 이번 사이클은 다음 발매의 차트 공략을 위한 기반 작업입니다. 실제 미국 팬 1인당 확보 비용, 현 라인업의 미국 판매 기준치, 그리고 다음 싱글이 이어받을 라디오 기반을 확립합니다.",
      ],
      supports: {
        heading: "이번 사이클의 성과물",
        items: [
          "3월 초까지 약 15,000명의 식별된 미국 팬 리스트 구축, ATTRAKT가 소유하며 언제든 내보내기 가능",
          "첫 주에 고정한 기준치 대비 Spotify 팔로워, Instagram, YouTube 성장",
          "일반 판매 전 팬 리스트 대상 선주문 오픈, 미국 판매량을 하나의 집계 주간에 집중",
          "69개 방송국의 Top 40 편성 추가 및 주간 방송 횟수, 편성 추가일부터 매주 추적",
          "다음 발매 규모 산정을 위한 미국 팬 1인당 비용, 팔로워 1인당 비용, 판매 기준치 측정",
        ],
      },
      goals: {
        heading: "예산 배분 구조",
        items: [
          "핵심 프로그램, $87,500: 팬 데이터, 미국 성장, 발매 및 피지컬, 팀 수수료",
          "미국 라디오, $100,000: Top 40 프로모션, 방송국 커버리지, 라디오 캠페인 관리",
          "레이블 담당: 음악, A&R, 제작, 발매 일정, 아티스트 이동 및 모든 아티스트 관련 결정",
        ],
      },
      charts: [
        {
          kind: "hbars",
          title: "$87,500 핵심 프로그램 예산 배분",
          subtitle: "핵심 예산 중 $50,000가 시장에 직접 집행되는 매체비입니다.",
          series: [
            {
              name: "USD",
              points: [
                { x: "팀 리테이너", y: 30000 },
                { x: "매체 운영 수수료", y: 7500 },
                { x: "팬 확보 매체비", y: 16000 },
                { x: "미국 성장 매체비", y: 12500 },
                { x: "발매 기간 매체비", y: 10000 },
                { x: "선주문 및 리테일", y: 4000 },
                { x: "클리핑 및 시딩", y: 7500 },
              ],
            },
          ],
          highlightX: ["팬 확보 매체비", "미국 성장 매체비"],
          source: "Transparent Arts 및 Crowd Control Digital 프로그램 예산, 2026년 11월",
        },
      ],
      footnote: "모든 일정은 2월 발매 주간을 전제로 합니다. ATTRAKT가 날짜를 확정하면 전체 일정이 함께 이동합니다. 이후의 각 발매 사이클은 이번 사이클의 측정 결과를 바탕으로 동일한 구조의 별도 예산으로 승인됩니다.",
    },

    // ===================================================================
    // 02. Program Structure
    // ===================================================================
    {
      type: "structure",
      number: "02",
      navLabel: "구조",
      title: "프로그램 구조",
      intro: "두 개의 예산, 하나의 팀, 하나의 주간 리포트. 핵심 프로그램과 라디오 캠페인은 각각의 성과에 따라 독립적으로 확대할 수 있도록 별도로 승인 및 청구됩니다.",
      tiers: [
        {
          label: "핵심 프로그램",
          budget: "$87,500",
          name: "90일, 12월 7일 ~ 3월 6일",
          goal: "미국 팬 리스트를 구축하고, 미국 오디언스를 성장시키며, 이를 하나의 집계 주간 내 EP 판매로 전환합니다.",
          includes: [
            "퍼스트파티 팬 데이터: 캡처 스택, 링크 경로 정비, 유료 확보",
            "Instagram, TikTok, YouTube 미국 유료 성장 캠페인",
            "2월 EP 발매 기간: 프리세이브, 선주문, 집계 주간 매체 집행",
            "선주문 및 미국 리테일 활성화",
            "싱글 발매 시점에 집중한 클리핑 및 크리에이터 시딩",
            "전략, 콘텐츠 계획, 크리에이티브 테스트, 매체 운영, 실시간 대시보드, 주간 리포트",
          ],
          deployable: "$50,000 실집행 매체비",
        },
        {
          label: "미국 라디오",
          budget: "$100,000",
          name: "프리런치부터 3개월",
          goal: "리드 싱글의 Top 40 편성 추가와 주간 방송 횟수를 확보하고, 다음 싱글이 이어받을 방송국 관계를 구축합니다.",
          includes: [
            "라디오 전략, 방송국 타겟팅, 편성 추가 일정",
            "69개 방송국의 프로그램 디렉터, 뮤직 디렉터, DJ 대상 프로모션",
            "믹스쇼 프로모션 및 라디오 리믹스",
            "편성 추가 및 방송 횟수 추적, 주간 리포트",
            "아티스트 프로모션: 인터뷰, 어쿠스틱 세션, 방송국 방문, 맞춤형 스테이션 ID",
          ],
          deployable: "$75,000 방송국 프로모션",
        },
      ],
    },

    // ===================================================================
    // 03. Workstream 1: Fan Data
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "팬 데이터",
      title: "워크스트림 1 / 퍼스트파티 팬 데이터",
      philosophy: "레이블이 팬에게 직접 닿을 수 있게 되면 다른 모든 워크스트림의 비용이 낮아집니다. 이 워크스트림이 가장 먼저 시작되며 기간 내 매주 운영됩니다.",
      intro: "예산: 핵심 프로그램 내 $16,000의 팬 확보 매체비, 셋업 및 운영은 리테이너에 포함. 목표는 3월 초까지 미국 동의 규정 내에서 약 15,000명의 식별된 미국 팬을 확보하는 것입니다.",
      subBlocks: [
        {
          label: "A",
          title: "1~2주차: 링크 경로 정비",
          objective: "그룹의 트래픽이 가장 많은 자산이 팬을 다음 목적지로 보내기 전에 먼저 정보를 확보하는 곳을 가리키도록 합니다.",
          strategy: "최근 TikTok 게시물 1,006개 중 시청자를 팔로우, 가입, 구매할 수 있는 곳으로 안내하는 게시물은 5개뿐입니다. 첫 2주 동안 매체비 없이 이를 바로잡습니다. 모든 자체 링크 지점을 하나의 FIFTY FIFTY 미국 목적지로 재지정하여, 먼저 이메일이나 전화번호를 확보한 뒤 팬이 원래 가려던 곳(신곡, 선주문, 스토어, 영상)으로 연결합니다. 이후 그룹이 얻는 모든 오가닉 화제성이 ATTRAKT가 소유하는 리스트로 쌓입니다.",
          components: {
            heading: "1주차 재지정 대상",
            items: [
              "Instagram, TikTok, YouTube, X 프로필 링크",
              "현재 트래픽 기준 상위 25개 YouTube 영상의 설명란과 고정 댓글, Cupid 버전 우선",
              "Linktree 또는 유사 서비스를 자체 캡처 목적지로 대체",
              "발매 기간 동안 모든 계정에 가입 링크가 포함된 고정 게시물 유지",
              "피지컬 앨범 인서트, 포토북, 미국 리테일 진열용 QR 코드 및 단축 URL",
            ],
          },
          timeline: "12월 7일 주간 ~ 12월 14일 주간",
        },
        {
          label: "B",
          title: "캡처 스택",
          objective: "이메일, SMS, Instagram DM을 위한 하나의 자체 시스템. 모든 단계에 가입할 이유를 제공합니다.",
          strategy: "캡처 스택은 이메일과 미국 SMS를 수집하며, 댓글 기반 DM 자동화를 통해 Instagram DM 수신 동의도 확보합니다. 이는 그룹이 가장 효율적인 플랫폼에서 팬에게 닿는 방법입니다. 가입 혜택은 시점에 맞춰 제공됩니다. 12월에는 싱글 선공개, 1월에는 선주문 우선 접근, 발매 시에는 리스트 회원 전용 사인 앨범 추첨입니다. 모든 기록은 유입 경로별로, 이후에는 행동별로 태그되어 레이블이 일반 팔로워와 반복 구매자를 구분할 수 있습니다.",
          components: {
            heading: "구축 항목",
            items: [
              "이메일, 미국 SMS, Instagram DM 수신 동의를 위한 캡처 플랫폼 설정",
              "영어와 한국어 이중 언어 가입 페이지, 양 언어로 된 동의 문구",
              "웰컴 시퀀스: 10일간 3회 발송, 멤버 콘텐츠 우선, 요청은 그다음",
              "싱글, 선주문, 발매를 위한 Instagram 댓글 기반 DM 키워드 플로우",
              "모든 기록에 유입 경로 태그: 오가닉 링크, 유료 광고, DM 키워드, QR 인서트, 라디오 시장",
              "행동 태그: 프리세이브, 선주문, 직접 구매, 최근 3회 발송 열람",
            ],
          },
          kpis: [
            "식별된 미국 팬 수, 매주 보고",
            "유료 확보 팬 1인당 비용, 목표 $2.00 미만",
            "구매 또는 프리세이브 행동이 1회 이상 기록된 비율",
          ],
        },
        {
          label: "C",
          title: "유료 확보",
          budget: "기간 전체 $16,000",
          objective: "도달이 아닌 팬 1인당 비용으로 측정하는, 가입 전용 광고로 리스트를 확대합니다.",
          strategy: "캡처 광고는 미국 한정으로 Instagram을 먼저, 이어서 TikTok에 집행하며, 초기 오가닉 가입자를 기반으로 유사 타겟을 구성합니다. 연말 광고 수요로 비용이 연중 최고치에 이르기 때문에 12월 테스트는 의도적으로 작게 운영합니다. 1월에는 링크 경로 정비와 오가닉 가입이 역할을 하도록 집행을 최소화하고, 캡처 예산의 절반 이상은 가입 동기가 가장 강한 싱글 발매 이후 기간을 위해 남겨둡니다. 현재 저희가 운영 중인 레퍼런스 K-pop 캠페인은 유료 가입 1건당 $1.97, 전체 유입 경로 평균 $1.15에 팬을 확보했습니다.",
          charts: [
            {
              kind: "bars",
              title: "3월 초 미국 팬 리스트 규모",
              subtitle: "90일 기간의 하위, 기대, 상위 시나리오.",
              series: [
                {
                  name: "확보 팬 수",
                  points: [
                    { x: "하위", y: 7000 },
                    { x: "기대", y: 15000 },
                    { x: "상위", y: 25000 },
                  ],
                },
              ],
              highlightX: ["기대"],
              note: "하위는 팬 1인당 약 $2.00의 유료 확보만 가정합니다. 기대는 링크 경로 정비와 선주문 수요를 더합니다. 상위는 강력한 싱글과 라디오 시장 가입자를 추가로 가정합니다.",
              source: "레퍼런스 캠페인 팬 1인당 비용 기반 Crowd Control Digital 추정",
            },
          ],
        },
        {
          label: "D",
          title: "한국 개인정보 규정 준수",
          objective: "허용되고 오디언스가 이미 있는 곳에서 정보를 확보하고, 한국 팬은 이미 잘 서비스되고 있는 곳에 그대로 둡니다.",
          strategy: "유료 캡처는 미국 거주자를 대상으로 미국 동의 기준에 따라 진행됩니다. 동의는 다른 어떤 것과도 묶이지 않으며 모든 메시지에 수신 거부 옵션이 포함됩니다. 한국 팬은 그룹의 기존 팬 플랫폼에 그대로 머뭅니다. Instagram DM 수신 동의는 한국 번호로는 사실상 완료되지 않는 전화번호 기반 캡처 없이도, 미국 외 팬들이 그룹과 가깝게 지낼 수 있는 방법을 제공합니다.",
        },
      ],
      footnote: "팬 리스트는 ATTRAKT가 소유한 계정에 보관되며 언제든 전체 내보내기가 가능합니다.",
    },

    // ===================================================================
    // 04. Workstream 2: U.S. Growth and Content
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "미국 성장",
      title: "워크스트림 2 / 미국 성장 및 콘텐츠",
      philosophy: "그룹 자체 데이터로 검증된 포맷에, 리스너가 이미 있는 시장에서 유료 매체를 집중합니다.",
      intro: "예산: 핵심 프로그램 내 $12,500의 미국 유료 성장 매체비와 $7,500의 클리핑 및 시딩, 대부분 싱글 발매 이후 집행. Spotify 팔로워, Instagram 및 YouTube 성장, 게시물당 중간 조회수로 측정합니다.",
      subBlocks: [
        {
          label: "A",
          title: "유료 성장 구조",
          budget: "기간 전체 $12,500",
          objective: "12월 테스트로 설정한 팔로워 1인당 비용으로 미국 팔로워, 구독자, 참여 팬을 늘립니다.",
          strategy: "동일한 FIFTY FIFTY 영상이 대부분의 비교 사례에서 TikTok보다 Instagram에서 더 높은 성과를 내고, Instagram이 팔로워당 약 3배 많은 조회수를 기록하기 때문에 Instagram을 우선합니다. 12월 테스트는 2주간 소규모 예산을 세 플랫폼에 나눠 실제 데이터로 팔로워당, 구독자당, 스트리밍 클릭당 비용을 측정합니다. 첫 체크포인트부터 성과당 비용이 가장 낮은 플랫폼으로 예산을 이동하고, 최소 효율 기준에 미달하는 항목은 중단합니다.",
          components: {
            heading: "캠페인 구성",
            items: [
              "Instagram: 릴스 팔로워 성장 캠페인, 영상 시청자 및 프로필 방문자 리타겟팅",
              "TikTok: 그룹 자체 상위 오가닉 게시물 대상 Spark Ads, 미국 한정",
              "YouTube: 구독자와 공식 음원으로 유도하는 인피드 및 Shorts 광고",
              "캡처 링크를 통한 Spotify 팔로우 및 프리세이브 연결로, 모든 클릭이 팬 데이터로 전환될 수 있도록 구성",
              "초기 배분 Instagram 50%, TikTok 25%, YouTube 25%, 체크포인트마다 재조정",
            ],
          },
          kpis: [
            "플랫폼별 팔로워당 비용 및 구독자당 비용",
            "일일 1,048명 기준치 대비 Spotify 일일 순증 팔로워",
            "1주차 기준치 대비 미국 Instagram 및 YouTube 성장",
          ],
        },
        {
          label: "B",
          title: "콘텐츠 계획",
          objective: "이미 효과가 검증된 방향으로 콘텐츠 구성을 바꿉니다. 새로운 제작 방식은 필요하지 않습니다.",
          strategy: "콘텐츠 계획은 1주차에 전달되며 2주마다 업데이트됩니다. 새로운 촬영을 요청하기보다 그룹이 이미 제작하는 콘텐츠의 비중을 재조정합니다. 게이밍 및 e스포츠 콘텐츠는 중간 조회수 584,750회로 계정의 다른 포맷보다 5배 이상 높지만 현재 전체 게시물의 4% 미만이므로, 매주 고정 슬롯을 배정합니다. 비교 아티스트들은 FIFTY FIFTY보다 두 배 자주 첫 3초 안에 핵심 장면을 보여주므로, 모든 편집은 이미 움직임이 시작된 장면으로 시작합니다.",
          components: {
            heading: "주간 운영 리듬",
            items: [
              "주 1회 게이밍 또는 e스포츠 게시물, 게스트를 초대하기보다 멤버가 크리에이터나 선수의 세계에 들어가는 방식",
              "Instagram과 TikTok 동시 게시, KST와 EST 모두에 맞춘 시간대",
              "모든 게시물에 영어와 한국어 이중 언어 캡션",
              "선주문 기간 매일 멤버별 순환 게시물, 각 멤버의 팬들이 응원할 날을 갖도록 구성",
              "모든 게시물에 다음 행동 안내: 팔로우, 가입, 프리세이브, 선주문",
              "유료 광고 크리에이티브는 매주 오가닉 성과 상위 게시물에서 선정",
            ],
          },
        },
        {
          label: "C",
          title: "클리핑 및 시딩",
          budget: "$7,500",
          objective: "크리에이터 물량을 발매 전이 아닌, 싱글이 나온 기간에 집중합니다.",
          strategy: "클리핑 및 시딩은 거의 전부 발매 기간에 집행하여, 모든 조회가 싱글을 스트리밍하고 저장하고 구매할 수 있는 시점에 발생하도록 합니다. 1월 말 소규모 시딩으로 발매 전 멤버들을 미국 게이밍 및 스트리밍 크리에이터의 콘텐츠 안에 등장시키며, 이는 그룹의 다른 콘텐츠보다 5배 이상 높은 성과를 내는 포맷입니다. 발매 주간부터는 예산이 클리핑으로 이동합니다. 싱글, 퍼포먼스, 멤버 장면을 클리퍼 네트워크가 짧게 편집하여 TikTok, Instagram, YouTube Shorts에 대량으로 게시합니다. Crowd Control Digital은 일반 에이전시 시장에서는 접근할 수 없는 단가로 이 물량을 구매하며, 레퍼런스 캠페인 단가 기준 $7,500로 약 150만~200만 조회를 확보합니다. 클리핑은 규모에 따라 효과가 누적되므로, 이번 사이클에서는 하나의 순간에 집중된 집행으로 운영하고 그 결과로 다음 발매의 예산을 설정합니다.",
          components: {
            heading: "$7,500 집행 계획",
            items: [
              "1월 말: 발매 전 게이밍 및 스트리밍 크리에이터 시딩, $1,000",
              "발매 주간부터 3주차까지: 싱글, 퍼포먼스, 멤버 장면 클리핑, $6,500",
              "모든 클립에 싱글 음원을 사용하고 캡처 링크로 연결",
            ],
          },
          kpis: ["확보 조회수 및 1,000회 조회당 비용", "TikTok 및 Instagram에서 싱글 음원 사용 수", "크리에이터 및 클립 링크를 통해 확보한 팬 수"],
        },
      ],
      footnote: "콘텐츠 분석 결과는 게시물별 성과 데이터가 결합된 FIFTY FIFTY 및 경쟁 아티스트 영상 105개 분석에 기반합니다.",
    },

    // ===================================================================
    // 05. Workstream 3: Release and Physical
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "EP 발매",
      title: "워크스트림 3 / 2월 EP 발매 및 피지컬",
      philosophy: "앨범 1장 판매는 차트 1유닛입니다. 같은 1유닛을 만들려면 프리미엄 스트리밍 1,000회가 필요합니다. 발매 계획은 이 비율을 중심으로 설계되었습니다.",
      intro: "예산: 핵심 프로그램 내 $10,000의 발매 기간 매체비와 $4,000의 선주문 및 리테일 활성화. 이번 EP는 기반 구축 발매로, 현 라인업의 미국 판매 기준치를 설정하고 선주문 운영을 처음으로 실행합니다.",
      subBlocks: [
        {
          label: "A",
          title: "발매 시퀀스",
          objective: "차트가 보상하는 순서대로 팬을 발견에서 프리세이브, 선주문, 구매로 이동시킵니다.",
          strategy: "첫 싱글은 리스트를 늘리는 데 활용합니다. 선주문은 공개 발표 전에 리스트에 먼저 오픈되어, 공급을 조정할 시간이 있을 때 수요를 측정합니다. 이후 일반 선주문이 이어집니다. 발매 주간에는 미국 내 모든 구매를 금요일부터 목요일까지인 하나의 Billboard 집계 주간에 집중시키므로, 발매일과 유료 매체 일정을 함께 설정합니다.",
          components: {
            heading: "시퀀스",
            items: [
              "싱글 티저 및 프리세이브, 캡처 링크를 목적지로 설정",
              "일반 판매 48시간 전 팬 리스트에 선주문 우선 오픈",
              "매일 멤버별 순환 게시물과 함께 일반 선주문 진행",
              "발매 주간: 첫째 날과 넷째 날 리스트 발송, 유료 매체는 집계 주간에 집중",
              "발매 이후: 리스트 구매자 대상 사인 앨범 추첨, 다음 행동을 요청하는 감사 메시지 발송",
            ],
          },
          timeline: "1월 중순부터 프리세이브, 1월 말 리스트 선주문, 2월 8일 주간 발매(확정 예정)",
        },
        {
          label: "B",
          title: "선주문 및 리테일",
          budget: "$4,000",
          objective: "미국에서 EP를 쉽게 구매할 수 있게 하고, 모든 미국 판매가 집계되도록 합니다.",
          strategy: "선주문은 ATTRAKT의 D2C 스토어와 유통사를 통해 진행되어 모든 시장의 팬이 구매할 수 있습니다. 미국 차트에는 자격 요건을 충족한 판매만 집계되므로, 배송 및 리포팅 규칙을 사전에 유통사와 합의하여 미국 판매량을 보호합니다. 활성화 예산은 스토어 프로모션, 미국 리테일 입점 지원, 사인 앨범 판매 마케팅에 사용됩니다.",
          components: {
            heading: "12월 18일까지 ATTRAKT의 결정이 필요한 사항",
            items: [
              "미국 SKU: 일반 버전, 포토북 버전, 그리고 바이닐 등 한정판의 이번 발매 포함 여부",
              "미국 D2C 스토어용 사인 앨범 배정 수량",
              "미국 리테일 및 차트 리포팅을 위한 유통사 담당자",
              "선주문 오픈일 및 가격",
            ],
          },
        },
        {
          label: "C",
          title: "발매 기간 매체비",
          budget: "$10,000",
          objective: "전환이 일어나는 곳에 유료 매체를 집중합니다: 프리세이브, 선주문, 집계 주간.",
          strategy: "발매 기간 매체는 두 차례에 걸쳐 집행됩니다. 첫 번째는 12월과 1월에 구축한 리타겟팅 오디언스를 대상으로 프리세이브와 리스트 선주문을 유도합니다. 두 번째는 집계 주간 자체에 집행되며, 참여했지만 아직 구매하지 않은 팬과 함께 라디오 방송국이 싱글을 편성한 시장에 지역 가중 지원을 합니다.",
          charts: [
            {
              kind: "bars",
              title: "2월 EP 발매 주간 미국 앨범 판매량",
              subtitle: "기반 구축 발매의 하위, 기대, 상위 시나리오.",
              series: [
                {
                  name: "미국 판매량",
                  points: [
                    { x: "하위", y: 1500 },
                    { x: "기대", y: 3000 },
                    { x: "상위", y: 5000 },
                  ],
                },
              ],
              highlightX: ["기대"],
              note: "기대 시나리오는 EP를 Billboard Top Album Sales 차트에 진입시킵니다. Billboard 200은 이번 발매가 구축하는 리스트와 기준치를 바탕으로 다음 발매의 목표입니다.",
              source: "2026년 Billboard 차트 결과 기반 Crowd Control Digital 및 Transparent Arts 계획 범위",
            },
          ],
        },
      ],
      footnote: "차트 계산은 2026년 1주차부터 적용된 Luminate의 앨범 환산 가중치를 따릅니다. 제작, 버전 구성, 발매 일정은 ATTRAKT가 결정합니다.",
    },

    // ===================================================================
    // 06. Workstream 4: U.S. Radio
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "라디오",
      title: "워크스트림 4 / 미국 Top 40 라디오",
      philosophy: "라디오는 스트리밍 곡선이 완만해진 이후에도 오랫동안 곡을 사람들 앞에 노출시킵니다. 리드 싱글은 라디오를 위해 만들어진 곡이므로, 첫날부터 완전한 Top 40 캠페인을 진행합니다.",
      intro: "예산: 초기 3개월 캠페인 $100,000, 핵심 프로그램과 별도. Transparent Arts가 독립 프로모터 네트워크를 통해 주도하며, Crowd Control Digital은 모든 방송국 시장을 팬 리스트 및 유료 매체 계획과 연결합니다.",
      subBlocks: [
        {
          label: "A",
          title: "캠페인 범위",
          objective: "전국 Top 40 방송국에서 리드 싱글의 편성 추가와 주간 방송 횟수를 확보합니다.",
          strategy: "캠페인은 네 부분으로 진행됩니다. 프리런치 단계에서는 라디오 전략을 수립하고, 프로모션 자료를 준비하며, 타겟 방송국을 선정하고, 발매에 맞춘 편성 추가 일정을 설정합니다. 프로모션 단계에서는 방송국별로 프로그램 디렉터, 뮤직 디렉터, DJ를 대상으로 편성 추가를 확보하고 주간 방송 횟수를 늘립니다. 트래킹 단계에서는 매주 편성 추가와 방송 횟수를 보고하고 반응하는 방송국에 역량을 집중합니다. 아티스트 프로모션은 인터뷰, 어쿠스틱 공연, 방송국 방문, 맞춤형 스테이션 ID, 소셜 콘텐츠를 통해 방송을 관계로 전환하며, 영어가 가능한 두 멤버가 방송 출연을 주도합니다.",
          components: {
            heading: "네 가지 구성",
            items: [
              "프리런치: 라디오 전략, 프로모션 자료, 방송국 타겟팅, 편성 추가 일정",
              "라디오 프로모션: 전국 프로그램 디렉터, 뮤직 디렉터, DJ",
              "트래킹 및 리포팅: 방송국 편성 추가, 주간 방송 횟수, 전략 조정",
              "아티스트 프로모션: 인터뷰, 어쿠스틱 세션, 방송국 방문, 맞춤형 스테이션 ID, 소셜 콘텐츠",
            ],
          },
          timeline: "1월 중순부터 프리런치, 발매 주간에 편성 추가, 4월 중순까지 프로모션",
        },
        {
          label: "B",
          title: "1단계: 프로모터 및 방송국 네트워크",
          budget: "$68,000",
          objective: "69개 방송국 커버리지. 각 항목은 확정된 편성 추가 또는 정해진 주간 방송 횟수를 기준으로 책정됩니다.",
          strategy: "1단계는 전체 프로모터 로스터를 동시에 가동하여, 싱글이 동일한 편성 추가 기간 내에 모든 타겟 방송국에 도달하도록 합니다. 13명의 독립 프로모터가 방송국당 약 $1,000~$1,200로 41개 방송국을 담당합니다. Cumulus Media가 추가로 28개 방송국을 커버합니다. 전국 프로모션, All Access 업계 이메일 발송, Suraci의 믹스쇼 및 리믹스 작업이 방송국 항목과 함께 진행됩니다.",
          components: {
            heading: "1단계 항목별 내역",
            items: [
              "All Access 업계 이메일 발송: $500",
              "Danny Cooper: $3,000",
              "Tommy Nappi: $6,000",
              "Jeff Deane, 10개 방송국: $12,000",
              "Greg Lawley, 6개 방송국: $7,000",
              "Chuck Field, 6개 방송국: $7,000",
              "Joe Hecht, 4개 방송국: $6,000",
              "Joanne Grande, 3개 방송국: $4,000",
              "Paula Tuggey, 2개 방송국: $3,000",
              "Steve Zap, 2개 방송국: $2,000",
              "Bill Rusch, 2개 방송국: $2,000",
              "Jason McFadden, 2개 방송국: $2,000",
              "Andy Arnold, 1개 방송국: $1,000",
              "Gary Triozzi, 1개 방송국: $1,000",
              "Ralph Carrol, 1개 방송국: $1,000",
              "Rick Salvador, 1개 방송국: $1,000",
              "Cumulus Media, 28개 방송국: $3,000",
              "Suraci, 믹스쇼 프로모션 및 리믹스: $6,500",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "프로모터별 커버 방송국 수",
              subtitle: "1단계 69개 방송국.",
              series: [
                {
                  name: "방송국 수",
                  points: [
                    { x: "Cumulus Media", y: 28 },
                    { x: "Jeff Deane", y: 10 },
                    { x: "Greg Lawley", y: 6 },
                    { x: "Chuck Field", y: 6 },
                    { x: "Joe Hecht", y: 4 },
                    { x: "Joanne Grande", y: 3 },
                    { x: "Paula Tuggey", y: 2 },
                    { x: "Steve Zap", y: 2 },
                    { x: "Bill Rusch", y: 2 },
                    { x: "Jason McFadden", y: 2 },
                    { x: "Andy Arnold", y: 1 },
                    { x: "Gary Triozzi", y: 1 },
                    { x: "Ralph Carrol", y: 1 },
                    { x: "Rick Salvador", y: 1 },
                  ],
                },
              ],
              highlightX: ["Cumulus Media"],
              source: "Transparent Arts 라디오 계획, 2026년 11월",
            },
          ],
        },
        {
          label: "C",
          title: "전체 캠페인 예산",
          budget: "$100,000",
          objective: "1단계 커버리지, 2~3개월차 후속 프로모션, 전체 기간 캠페인 관리.",
          strategy: "$68,000는 위 1단계 네트워크에 사용됩니다. $7,000는 2~3개월차에 사용되며, 편성한 방송국 대상 후속 프로모션, 믹스쇼 로테이션 유지, 뒤늦게 편성하는 방송국 대상 프로모션을 포함합니다. $25,000는 3개월 전체 기간의 라디오 전략, 캠페인 관리 및 리포팅에 사용되며, 편성 추가 일정, 모든 프로모터 간 조율, 아티스트 프로모션 일정 관리, 방송 횟수 추적, 주간 라디오 리포트를 포함합니다. 로스터 확보를 위해 프리런치 시작 시 $60,000가 필요하며, 나머지 $40,000는 6주차 리뷰 시점에 지급됩니다.",
          components: {
            heading: "예산",
            items: [
              "1단계 프로모터 및 방송국 네트워크: $68,000",
              "2~3개월차 후속 프로모션 및 추가 편성: $7,000",
              "라디오 전략, 캠페인 관리 및 리포팅, 3개월: $25,000",
              "합계: $100,000",
            ],
          },
        },
        {
          label: "D",
          title: "라디오와 전체 계획의 연결",
          objective: "모든 라디오 시장이 팬 리스트와 발매 주간으로 이어지도록 합니다.",
          strategy: "싱글을 편성한 각 방송국은 유료 매체 계획의 타겟 시장이 됩니다. 편성 추가 이후 몇 주간 미국 성장 및 발매 기간 매체는 해당 시장에 가중 집행되며, 해당 시장의 캡처 광고에는 라디오 전용 가입 혜택이 포함됩니다. 방송국 인터뷰와 스테이션 ID는 숏폼 게시물로 편집됩니다. Shazam 활동은 방송이 발견으로 이어지고 있는지를 가장 먼저 보여주는 지표로서 시장별로 추적됩니다.",
          kpis: [
            "편성 추가 일정 대비 방송국 편성 추가",
            "주간 방송 횟수 및 도달 청취자",
            "Mediabase Top 40 및 Billboard Pop Airplay 차트 순위",
            "라디오 시장의 Shazam 검색 수 및 팬 리스트 가입",
          ],
        },
      ],
      footnote: "방송국 방문을 위한 아티스트 이동, 숙박, 프로모션 식사 비용은 별도로 책정됩니다. 싱글이 반응을 얻으면 방송국 커버리지를 확대하고 모멘텀을 유지하기 위한 추가 예산을 동일한 구조로 승인할 수 있습니다.",
    },

    // ===================================================================
    // 07. Media Flight
    // ===================================================================
    {
      type: "flight",
      number: "07",
      navLabel: "매체 집행",
      title: "핵심 프로그램 매체 집행 계획",
      intro: "$50,000의 실집행 매체비를 세 단계로 운영합니다. 12월과 1월은 최소한으로 운영하며 테스트, 리스트 구축, 발매 준비에 집중합니다. 매체비의 70% 이상은 싱글이 나와 모든 예산이 스트리밍, 팔로우, 가입, 구매로 이어질 수 있는 발매 기간에 집행됩니다.",
      totalBudget: "$50,000",
      phases: [
        {
          label: "1단계 / 기반 구축 및 테스트",
          window: "12월 7일 ~ 1월 3일 / 4주",
          focus: "링크 경로 정비, 캡처 스택 가동, 기준치 고정. 확대 전에 세 플랫폼에서 소규모 테스트로 실제 팬당, 팔로워당 비용을 측정합니다.",
          budget: "$4,500",
          tactics: [
            "팬 데이터 확보 테스트 광고: $2,000",
            "Instagram, TikTok, YouTube 미국 유료 성장 테스트: $2,500",
          ],
        },
        {
          label: "2단계 / 발매 전 준비",
          window: "1월 4일 ~ 2월 7일 / 5주",
          focus: "의도적으로 최소한으로 운영합니다. 첫 체크포인트에서 목표를 달성한 항목만 확대하고, 발매 시 활용할 리타겟팅 오디언스를 구축하며, 프리세이브와 리스트 선주문을 오픈하고, 발매 전 크리에이터 시딩을 진행합니다.",
          budget: "$10,000",
          tactics: [
            "팬 데이터 확보, 프리세이브 및 리스트 선주문: $5,000",
            "성과 상위 플랫폼 미국 유료 성장: $3,000",
            "게이밍 및 스트리밍 크리에이터 시딩: $1,000",
            "선주문 스토어 프로모션: $1,000",
          ],
        },
        {
          label: "3단계 / 발매 기간",
          window: "2월 8일 ~ 3월 6일 / 4주",
          focus: "싱글이 나오고 예산 대부분이 집행됩니다. 유료 매체, 클리핑, 캡처를 집계 주간에 집중한 뒤 새로운 리스너를 유지합니다. 편성 추가 이후 라디오 시장에 유료 매체를 가중 집행합니다.",
          budget: "$35,500",
          tactics: [
            "발매 기간 매체, 선주문 및 집계 주간: $10,000",
            "발매 주간 가입 혜택을 활용한 팬 데이터 확보: $9,000",
            "라디오 시장 가중 미국 유료 성장: $7,000",
            "싱글, 퍼포먼스, 멤버 장면 클리핑: $6,500",
            "미국 리테일 및 사인 앨범 활성화: $3,000",
          ],
        },
      ],
      footnote: "단계별 예산은 방향성을 제시하는 수치입니다. 팀은 $50,000 총액 내에서 성과에 따라 매주 항목과 단계 간 예산을 재배분합니다.",
    },

    // ===================================================================
    // 08. Execution Timeline
    // ===================================================================
    {
      type: "timeline",
      number: "08",
      navLabel: "타임라인",
      title: "실행 타임라인",
      intro: "12월 7일부터 3월 6일까지 13주. 발매 주간은 잠정적으로 2월 8일 주간이며 확정 날짜에 따라 전체 일정이 이동합니다. 5주차와 9주차는 예산을 이동하거나 중단할 권한이 있는 체크포인트입니다.",
      weeks: [
        { index: 1, label: "W1", dates: "12월 7일" },
        { index: 2, label: "W2", dates: "12월 14일" },
        { index: 3, label: "W3", dates: "12월 21일" },
        { index: 4, label: "W4", dates: "12월 28일" },
        { index: 5, label: "W5", dates: "1월 4일", highlight: true, note: "CHECKPOINT" },
        { index: 6, label: "W6", dates: "1월 11일" },
        { index: 7, label: "W7", dates: "1월 18일" },
        { index: 8, label: "W8", dates: "1월 25일" },
        { index: 9, label: "W9", dates: "2월 1일", highlight: true, note: "CHECKPOINT" },
        { index: 10, label: "W10", dates: "2월 8일", highlight: true, note: "RELEASE (TBD)" },
        { index: 11, label: "W11", dates: "2월 15일" },
        { index: 12, label: "W12", dates: "2월 22일" },
        { index: 13, label: "W13", dates: "3월 1일", highlight: true, note: "REVIEW" },
      ],
      workstreams: [
        {
          name: "팬 데이터",
          cells: [
            { weekIndex: 1, intensity: "high", label: "FIX" },
            { weekIndex: 2, intensity: "high", label: "BUILD" },
            { weekIndex: 3, intensity: "medium", label: "TEST" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "PREORD" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "LAUNCH" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
            { weekIndex: 13, intensity: "medium", label: "EXPORT" },
          ],
        },
        {
          name: "미국 유료",
          cells: [
            { weekIndex: 2, intensity: "low", label: "TEST" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 5, intensity: "low", label: "SCALE" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "high", label: "FULL" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "medium" },
          ],
        },
        {
          name: "클리핑",
          cells: [
            { weekIndex: 8, intensity: "low", label: "SEED" },
            { weekIndex: 9, intensity: "low" },
            { weekIndex: 10, intensity: "high", label: "CLIP" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "medium" },
          ],
        },
        {
          name: "콘텐츠",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "PLAN" },
            { weekIndex: 2, intensity: "high", label: "GAMING" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high", label: "TEASER" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high", label: "MEMBER" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "RELEASE" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "medium" },
          ],
        },
        {
          name: "피지컬",
          cells: [
            { weekIndex: 2, intensity: "low", label: "SKUS" },
            { weekIndex: 3, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "RETAIL" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "high", label: "LIST" },
            { weekIndex: 9, intensity: "high", label: "PUBLIC" },
            { weekIndex: 10, intensity: "high", label: "COUNT" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "low", label: "SIGNED" },
          ],
        },
        {
          name: "라디오",
          cells: [
            { weekIndex: 6, intensity: "medium", label: "PREP" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "high", label: "SERVICE" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "ADDS" },
            { weekIndex: 11, intensity: "high", label: "PROMO" },
            { weekIndex: 12, intensity: "high" },
            { weekIndex: 13, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "킥오프 및 링크 경로 정비",
          items: [
            "ATTRAKT와 킥오프 미팅, 계정 접근 권한 확인, 실시간 대시보드 구축.",
            "모든 자체 링크 지점을 캡처 목적지로 재지정.",
            "기준치 고정: Spotify 팔로워, 미국 Instagram 및 YouTube, 게시물당 중간 조회수.",
            "주간 게이밍 슬롯을 포함한 콘텐츠 계획 전달.",
          ],
        },
        {
          weekIndex: 2,
          title: "캡처 스택 가동 및 유료 테스트 시작",
          items: [
            "이중 언어 가입 페이지와 웰컴 시퀀스를 포함한 이메일, SMS, Instagram DM 캡처 가동.",
            "Instagram, TikTok, YouTube에서 소규모 유료 테스트 시작.",
            "ATTRAKT와 미국 SKU 및 선주문 관련 결정 확정.",
          ],
        },
        {
          weekIndex: 4,
          title: "연말 휴지기",
          items: [
            "광고 비용이 최고치이고 관심도가 떨어지는 연휴 주간에는 집행을 낮게 유지.",
            "오가닉 콘텐츠와 캡처는 계속 운영.",
            "첫 체크포인트를 위한 테스트 결과 취합.",
          ],
        },
        {
          weekIndex: 5,
          title: "체크포인트 1: 확대 또는 중단",
          items: [
            "플랫폼별 팬당 비용 및 팔로워당 비용을 목표 대비 검토.",
            "목표를 달성한 항목으로 예산 이동. 최소 기준에 미달하는 항목은 중단.",
            "발매일 및 싱글 전달 일정 확정. 유통사와 미국 리테일 계획 착수.",
          ],
        },
        {
          weekIndex: 6,
          title: "싱글 티저 및 라디오 프리런치",
          items: [
            "캡처 링크를 목적지로 한 싱글 티저 및 프리세이브 오픈.",
            "라디오 프리런치 시작: 방송국 타겟팅, 자료 준비, 편성 추가 일정. 라디오 착수금 $60,000.",
          ],
        },
        {
          weekIndex: 8,
          title: "리스트 대상 선주문 오픈",
          items: [
            "리스트 회원에게 EP 선주문 48시간 우선 접근 제공.",
            "매일 멤버별 순환 게시물 시작, 발매까지 지속.",
            "편성 추가일에 앞서 라디오에 싱글 서비스.",
          ],
        },
        {
          weekIndex: 9,
          title: "체크포인트 2: 발매 확정",
          items: [
            "일반 선주문 오픈. 선주문 수량을 발매 주간 목표와 비교 검토.",
            "확정된 발매일 기준으로 집계 주간 매체 계획 확정.",
            "방송국별 라디오 편성 추가 일정 확정.",
          ],
        },
        {
          weekIndex: 10,
          title: "발매 주간",
          items: [
            "EP 발매. 매체 예산 대부분 집행: 첫째 날과 넷째 날 리스트 발송, 유료 매체와 클리핑은 집계 주간에 집중.",
            "라디오 편성 추가일: 1단계 방송국 싱글 편성.",
            "편성한 각 방송국의 시장에 유료 매체 가중 집행.",
          ],
        },
        {
          weekIndex: 11,
          title: "새로운 리스너 유지",
          items: [
            "발매 주간 리스너를 팔로우 및 리스트 가입으로 리타겟팅.",
            "방송국 인터뷰, 스테이션 ID, 어쿠스틱 세션 일정 수립 및 소셜용 편집.",
            "라디오 6주차 리뷰 및 라디오 잔금 $40,000.",
          ],
        },
        {
          weekIndex: 13,
          title: "사이클 리뷰",
          items: [
            "모든 목표 대비 전체 리포트, 기여도는 명확하게 제시.",
            "보강 및 태그된 팬 리스트를 ATTRAKT에 전달.",
            "미국 판매 기준치와 팬당 비용을 바탕으로 다음 발매와 차트 공략 규모 및 필요 예산 산정.",
            "라디오는 자체 3개월 일정에 따라 4월 중순까지 지속.",
          ],
        },
      ],
      footnote: "발매 주간, 싱글 전달일, 라디오 편성 추가일은 ATTRAKT 확정 전까지 계획상의 날짜입니다. 라디오 캠페인은 프리런치부터 3개월간 진행되며 본 기간 이후에도 계속됩니다.",
    },

    // ===================================================================
    // 09. Targets
    // ===================================================================
    {
      type: "targets",
      number: "09",
      navLabel: "목표",
      title: "90일 목표",
      intro: "이번 사이클의 측정 기준입니다. 기준치는 1주차에 고정되며 모든 목표는 실시간 대시보드에서 매주 보고됩니다.",
      targets: [
        {
          metric: "미국 팬 리스트",
          baseline: "자체 미국 리스트 없음",
          target: "식별된 팬 15,000명 (하위 8,000, 상위 25,000)",
          window: "3월 6일까지",
          measurement: "레이블 소유 캡처 계정 내 확보 기록 수",
          featured: true,
        },
        {
          metric: "유료 확보 팬 1인당 비용",
          baseline: "12월 테스트로 설정",
          target: "$2.00 미만",
          window: "체크포인트 1부터",
          measurement: "캡처 매체비를 유료 가입 수로 나눈 값",
        },
        {
          metric: "Spotify 팔로워",
          baseline: "일일 순증 약 1,048명",
          target: "순증 115,000명 (하위 90,000, 상위 140,000)",
          window: "90일",
          measurement: "Chartmetric 일일 팔로워 데이터",
          featured: true,
        },
        {
          metric: "Instagram 팔로워",
          baseline: "962,000",
          target: "+45,000 (하위 +15,000, 상위 +80,000)",
          window: "90일",
          measurement: "플랫폼 분석, 미국 비중 별도 보고",
        },
        {
          metric: "게시물당 중간 조회수",
          baseline: "94,100",
          target: "125,000 (상위 150,000)",
          window: "마지막 4주",
          measurement: "기간 내 Instagram 및 TikTok 게시물의 중간값",
        },
        {
          metric: "발매 주간 미국 앨범 판매량",
          baseline: "현 라인업의 미국 기준치 없음",
          target: "3,000 (하위 1,500, 상위 5,000)",
          window: "집계 주간",
          measurement: "Luminate 미국 앨범 판매",
          featured: true,
        },
        {
          metric: "라디오 방송국 편성 추가",
          baseline: "타겟 방송국 69개",
          target: "1단계 네트워크 전체 편성 추가, 편성 추가 일정 대비 보고",
          window: "편성 추가일부터",
          measurement: "Mediabase 방송국 리포트",
        },
        {
          metric: "주간 라디오 방송 횟수",
          baseline: "편성 추가일에 설정",
          target: "2개월차까지 주간 증가",
          window: "3개월 라디오 캠페인",
          measurement: "Mediabase 방송 횟수 및 Pop Airplay 차트 순위",
        },
      ],
      measurementPrinciples: [
        "모든 목표에는 출시 전에 합의한 하위, 기대, 상위 시나리오가 있습니다.",
        "스트리밍은 매주 관리하고 보고하되, 약속하지 않습니다.",
        "기여도는 측정할 수 없는 부분까지 포함하여 명확하게 제시합니다.",
      ],
      footnote: "Billboard 200 공략을 포함한 다음 발매의 목표는 이번 사이클의 측정 결과를 바탕으로 설정됩니다.",
    },

    // ===================================================================
    // 10. Inputs and Reporting
    // ===================================================================
    {
      type: "vertical",
      number: "10",
      navLabel: "협업 방식",
      title: "필요 사항, 역할 및 리포팅",
      philosophy: "하나의 팀, 하나의 주간 미팅, 하나의 리포트.",
      subBlocks: [
        {
          label: "A",
          title: "ATTRAKT에 요청드리는 사항",
          objective: "일정을 지키기 위해 필요한 항목과 각 항목의 필요 시점입니다.",
          components: {
            heading: "필요 항목 및 일정",
            items: [
              "Instagram, TikTok, YouTube, Spotify for Artists 관리자 또는 광고주 권한: 12월 4일까지",
              "링크 지점 변경 및 캡처 목적지 문구 승인: 12월 7일까지",
              "미국 SKU, 포토북 버전, 사인 앨범 배정, 선주문 일정: 12월 18일까지",
              "미국 리테일 및 차트 리포팅을 위한 유통사 담당자: 12월 18일까지",
              "발매일 및 리드 싱글 제목 확정: 1월 4일까지",
              "라디오 서비스용 리드 싱글 최종 마스터, 클린 에디트, 라디오 에디트: 1월 11일까지",
              "선주문 기간용 티저, 아트워크, 멤버 콘텐츠: 1월 18일까지",
              "발매 기간 중 영어가 가능한 두 멤버의 인터뷰 및 세션 일정",
            ],
          },
        },
        {
          label: "B",
          title: "역할",
          objective: "담당 영역.",
          components: {
            items: [
              "Transparent Arts: 관계 구축, 미국 라디오, 언론, 파트너십, 업계 대응",
              "Crowd Control Digital: 팬 데이터, 유료 매체, 콘텐츠 계획, 크리에이티브 테스트, 데이터 및 리포팅",
              "ATTRAKT: 음악, A&R, 제작, 발매 일정, 아티스트 스케줄 및 모든 아티스트 관련 결정",
            ],
          },
        },
        {
          label: "C",
          title: "리포팅 및 체크포인트",
          objective: "ATTRAKT가 확인하는 내용과 시점.",
          components: {
            items: [
              "매일 업데이트되는 실시간 대시보드: 팬 리스트, 팬당 비용, 팔로워, 항목별 집행액, 라디오 편성 추가 및 방송 횟수",
              "주간 미팅 및 영어와 한국어로 작성된 요약",
              "5주차와 9주차 체크포인트 리뷰, 모든 항목에 대한 확대 또는 중단 결정",
              "13주차 전체 사이클 리뷰, 다음 발매 계획 및 예산 포함",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // 11. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "11",
      navLabel: "투자",
      title: "투자",
      intro: "2월 사이클의 두 가지 예산: 핵심 프로그램과 미국 라디오 캠페인. 각 예산에서 시장에 집행되는 금액과 팀에 지급되는 금액을 명확히 보여드립니다.",
      ccdNote: "팀 수수료는 3개월간 월 $10,000의 리테이너와 팀이 운영하는 매체비의 15%로 구성됩니다. 리테이너는 전략, 캡처 구축, 콘텐츠 계획, 크리에이티브 테스트, 실시간 대시보드, 주간 리포팅을 포함합니다. 핵심 프로그램 매체비 $50,000는 실비로 청구됩니다. 그룹 링크 지점 정비는 리테이너에 포함되며 매체 예산을 사용하지 않습니다.",
      breakdownLabel: "예산 배분",
      deployableLabel: "시장 집행액",
      tiers: [
        {
          label: "핵심 프로그램",
          budget: "$87,500",
          name: "90일, 12월 7일 ~ 3월 6일",
          tagline: "팬 데이터, 미국 성장, 2월 EP 발매 기간 및 피지컬.",
          deployable: "$50,000",
          breakdown: [
            { vertical: "팬 데이터 확보 매체비", amount: "$16,000" },
            { vertical: "미국 유료 성장 매체비", amount: "$12,500" },
            { vertical: "발매 기간 매체비", amount: "$10,000" },
            { vertical: "선주문 및 리테일 활성화", amount: "$4,000" },
            { vertical: "클리핑 및 시딩", amount: "$7,500" },
            { vertical: "팀 리테이너, 3개월", amount: "$30,000" },
            { vertical: "매체 운영 수수료, 15%", amount: "$7,500" },
          ],
          feeBreakdown: {
            retainer: "$30,000",
            retainerDetail: "90일 프로그램 기간 월 $10,000.",
            retainerLabel: "리테이너",
            mediaManagement: "$7,500",
            mediaManagementDetail: "운영 매체비 $50,000의 15%.",
            mediaManagementLabel: "매체 운영 수수료",
          },
        },
        {
          label: "미국 라디오",
          budget: "$100,000",
          name: "프리런치부터 3개월",
          tagline: "69개 방송국 Top 40 프로모션, 캠페인 관리 및 주간 리포팅 포함.",
          deployable: "$75,000",
          breakdown: [
            { vertical: "1단계 프로모터 및 방송국 네트워크", amount: "$68,000" },
            { vertical: "2~3개월차 후속 프로모션", amount: "$7,000" },
            { vertical: "라디오 전략, 관리 및 리포팅", amount: "$25,000" },
          ],
        },
      ],
      footnote: "핵심 프로그램 합계: $87,500. 라디오 합계: $100,000 (프리런치 시 $60,000, 6주차 리뷰 시 $40,000). 2월 사이클 전체: $187,500. 제작, 아티스트 이동, 숙박, 프로모션 식사 비용은 두 예산에 포함되지 않습니다. 이후의 각 발매 사이클은 동일한 구조의 별도 예산으로 승인됩니다.",
    },
  ],
};
