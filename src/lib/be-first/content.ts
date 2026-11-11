/**
 * BE:FIRST US clipping proposal, prepared for BMSG.
 * Every number on the page lives here. Social figures are scraped values
 * (pulled November 9, 2026); facts carry a source in SOURCES.
 */

export type L = { en: string; ja: string };
export type Lang = "en" | "ja";

export const META = {
  slug: "be-first",
  date: { en: "November 2026", ja: "2026年11月" } as L,
  pulled: { en: "Social data pulled November 9, 2026", ja: "SNSデータ取得日：2026年11月9日" } as L,
  fx: 158,
  email: "hello@crowdcontroldigital.com",
  name: "Geoff Shames",
};

export const STOPS: { id: string; label: L }[] = [
  { id: "tokyo", label: { en: "Tokyo", ja: "東京" } },
  { id: "crossing", label: { en: "Crossing", ja: "太平洋" } },
  { id: "feed", label: { en: "Feed", ja: "フィード" } },
  { id: "moments", label: { en: "Moments", ja: "モーメント" } },
  { id: "program", label: { en: "Program", ja: "プログラム" } },
  { id: "menu", label: { en: "Menu", ja: "メニュー" } },
];

export const HERO = {
  eyebrow: { en: "US clipping proposal", ja: "米国クリッピング施策のご提案" } as L,
  forWhom: { en: "Prepared for BMSG", ja: "BMSG御中" } as L,
  by: { en: "A proposal by Crowd Control Digital", ja: "Crowd Control Digital" } as L,
  strap: {
    en: "The songs have already reached American feeds. This program puts the six of them in the frame.",
    ja: "楽曲はすでに米国のフィードに届いています。次は、6人の姿を届ける番です。",
  } as L,
  scroll: { en: "Scroll to take off", ja: "スクロールして出発" } as L,
};

/* ------------------------------------------------------------------ TOKYO */

export const TOKYO = {
  title: { en: "Where BE:FIRST Stands", ja: "BE:FIRSTの現在地" } as L,
  strap: {
    en: "A No. 1 album at home, a charting US debut and four domes on sale. The base is built.",
    ja: "国内では1位のアルバム、米国ではチャート入りしたデビュー作、そして4つのドーム公演。土台はすでにできています。",
  } as L,
  stats: [
    {
      value: "96,027",
      label: { en: "First-week copies of BE:4U", ja: "『BE:4U』初週売上枚数" } as L,
      note: { en: "No. 1 on Billboard Japan Top Albums Sales, week of November 2 to 8, 2026", ja: "Billboard JAPAN Top Albums Sales 1位（2026年11月2日〜8日集計）" } as L,
    },
    {
      value: "No. 130",
      label: { en: "WATCH ME on the Billboard 200", ja: "『WATCH ME』Billboard 200" } as L,
      note: { en: "The US debut EP also reached No. 3 on World Albums", ja: "米国デビューEP。World Albumsでは3位" } as L,
    },
    {
      value: "5",
      label: { en: "US stages in 2026", ja: "2026年の米国ステージ" } as L,
      note: { en: "HHI World Finals, Head in the Clouds LA, 82WORLD LA and two New York showcases", ja: "HHI World Finals、Head in the Clouds LA、82WORLD LA、ニューヨークのショーケース2公演" } as L,
    },
    {
      value: "4",
      label: { en: "Domes dated for 2027", ja: "2027年に日程が決まっているドーム" } as L,
      note: { en: "Tokyo, Osaka, Fukuoka and Belluna, with Nagoya still to be dated", ja: "東京、大阪、福岡、ベルーナ。名古屋は日程未発表" } as L,
    },
  ],
  platformTitle: { en: "Median views per post, official accounts, last 90 days", ja: "公式アカウントの投稿1本あたり再生数（中央値、直近90日）" } as L,
  platforms: [
    { name: "Instagram Reels", handle: "@befirst__official", median: 899083, posts: 79, over1m: 27, followers: "1,091,755" },
    { name: "TikTok", handle: "@befirst_official", median: 216350, posts: 88, over1m: 2, followers: "1.4M" },
    { name: "YouTube Shorts", handle: "@BEFIRSTOfficial", median: 145545, posts: 45, over1m: 0, followers: "1.34M" },
  ],
  platformCols: {
    posts: { en: "posts", ja: "投稿" } as L,
    over: { en: "over 1M views", ja: "100万再生超" } as L,
    followers: { en: "followers", ja: "フォロワー" } as L,
  },
  platformRead: {
    en: "Reels runs about four times TikTok for the group today: 27 Reels passed one million views in 90 days against 2 TikToks. The same footage has more room on TikTok than it is getting.",
    ja: "現在、ReelsはTikTokの約4倍の再生を得ています。直近90日で100万再生を超えたReelsは27本、TikTokは2本。同じ映像でも、TikTokにはまだ大きな伸びしろがあります。",
  } as L,
};

/* --------------------------------------------------------------- CROSSING */

export const CROSSING = {
  title: { en: "The US Gap", ja: "米国とのギャップ" } as L,
  strap: {
    en: "American creators picked up the songs. Most of their videos never show the group.",
    ja: "米国のクリエイターは楽曲を使い始めています。ただ、その動画の多くにBE:FIRSTの姿はありません。",
  } as L,
  beats: [
    {
      big: "5,157",
      line: { en: "TikTok videos use the WATCH ME hook. Another 3,456 use BRUCE WAYNE.", ja: "「WATCH ME」のフック音源を使ったTikTok動画の数。「BRUCE WAYNE」も3,456本。" } as L,
    },
    {
      big: "8.4M",
      line: {
        en: "views on seven creator videos that play the songs over something else: a TV edit, an outfit video, a meme. None of the six is on screen.",
        ja: "楽曲を別の映像に乗せた7本のクリエイター動画の合計再生数。ドラマの編集動画、コーディネート動画、ミーム。6人は誰も映っていません。",
      } as L,
    },
    {
      big: "92%",
      line: { en: "of sampled comments on the official TikTok are written in Japanese.", ja: "公式TikTokのコメント（サンプル）のうち、日本語で書かれた割合。" } as L,
    },
    {
      big: "817,500",
      line: {
        en: "views on one edit from a fan account with 262 followers. The appetite exists. The supply does not.",
        ja: "フォロワー262人のファンアカウントが投稿した編集動画1本の再生数。需要はあります。足りないのは供給です。",
      } as L,
    },
  ],
  whoTitle: { en: "The 15 most-viewed outside posts of 2026", ja: "2026年に最も再生された外部投稿15本" } as L,
  whoStrap: {
    en: "Posts on other accounts that feature BE:FIRST or use an official BE:FIRST sound. Tap a bar for the detail and to play the post.",
    ja: "BE:FIRSTが登場する、または公式音源を使った他アカウントの投稿。バーをタップすると詳細を表示し、投稿を再生できます。",
  } as L,
  kinds: {
    artist: { en: "Another artist's official account", ja: "他アーティストの公式アカウント" } as L,
    sound: { en: "Creator using the song, group not shown", ja: "楽曲のみ使用（BE:FIRSTは映っていない）" } as L,
    creator: { en: "Dance creator", ja: "ダンスクリエイター" } as L,
    fan: { en: "Fan edit", ja: "ファンによる編集動画" } as L,
  },
  who: [
    { h: "@hana_brave_official", f: "1.5M", v: 5100000, d: "2026-01-02", k: "artist", u: "https://www.tiktok.com/@hana_brave_official/video/7590593737072495892", t: { en: "HANA's MOMOKA with SHUNTO", ja: "HANA MOMOKA × SHUNTO" } as L },
    { h: "@illit_official", f: "14.2M", v: 4200000, d: "2026-07-20", k: "artist", u: "https://www.tiktok.com/@illit_official/video/7664496173629050133", t: { en: "ILLIT's WONHEE with MANATO", ja: "ILLIT WONHEE × MANATO" } as L },
    { h: "@hana_brave_official", f: "1.5M", v: 4000000, d: "2026-03-13", k: "artist", u: "https://www.tiktok.com/@hana_brave_official/video/7616721717792230677", t: { en: "HANA's CHIKA with SHUNTO", ja: "HANA CHIKA × SHUNTO" } as L },
    { h: "@carlhoos_", f: "22.8M", v: 3800000, d: "2026-08-02", k: "creator", u: "https://www.tiktok.com/@carlhoos_/video/7669537667628977421", t: { en: "Dance video on the BRUCE WAYNE sound", ja: "「BRUCE WAYNE」音源のダンス動画" } as L },
    { h: "@txt.bighitent", f: "29.3M", v: 1900000, d: "2026-05-13", k: "artist", u: "https://www.tiktok.com/@txt.bighitent/video/7639274171071073557", t: { en: "TXT challenge with JUNON", ja: "TXTのチャレンジ × JUNON" } as L },
    { h: "@immnotcami", f: "63.6K", v: 1900000, d: "2026-08-02", k: "sound", u: "https://www.tiktok.com/@immnotcami/video/7669486691022949653", t: { en: "TV character edit on BRUCE WAYNE", ja: "海外ドラマのキャラクター編集動画（BRUCE WAYNE）" } as L },
    { h: "@itsjunelimbu", f: "190.5K", v: 1800000, d: "2026-08-14", k: "sound", u: "https://www.tiktok.com/@itsjunelimbu/video/7673714975692573974", t: { en: "Outfit video on BRUCE WAYNE", ja: "コーディネート動画（BRUCE WAYNE）" } as L },
    { h: "@kimoratewkrazy", f: "92.3K", v: 1500000, d: "2026-07-30", k: "sound", u: "https://www.tiktok.com/@kimoratewkrazy/video/7668386645556628766", t: { en: "Creator video on BRUCE WAYNE", ja: "クリエイター動画（BRUCE WAYNE）" } as L },
    { h: "@kimoratewkrazy", f: "92.3K", v: 935800, d: "2026-07-30", k: "sound", u: "https://www.tiktok.com/@kimoratewkrazy/video/7668381391956004126", t: { en: "Creator video on BRUCE WAYNE", ja: "クリエイター動画（BRUCE WAYNE）" } as L },
    { h: "@ailetheshota", f: "89.2K", v: 830200, d: "2026-03-14", k: "artist", u: "https://www.tiktok.com/@ailetheshota/video/7617102491783728404", t: { en: "Aile The Shota with BE:FIRST", ja: "Aile The Shota × BE:FIRST" } as L },
    { h: "@whywhyfirst", f: "262", v: 817500, d: "2026-07-21", k: "fan", u: "https://www.tiktok.com/@whywhyfirst/video/7665099366448794910", t: { en: "BE:FIRST and KATSEYE crossover edit", ja: "BE:FIRST × KATSEYE クロスオーバー編集" } as L },
    { h: "@heyitstarah", f: "123.7K", v: 781100, d: "2026-09-11", k: "sound", u: "https://www.tiktok.com/@heyitstarah/video/7684358595990850847", t: { en: "Creator video on WATCH ME", ja: "クリエイター動画（WATCH ME）" } as L },
    { h: "@iammedina.t", f: "7.0M", v: 726600, d: "2026-10-07", k: "sound", u: "https://www.tiktok.com/@iammedina.t/video/7693778649232755975", t: { en: "Couple video on WATCH ME", ja: "カップル動画（WATCH ME）" } as L },
    { h: "@freezyoutside", f: "19.7K", v: 711000, d: "2026-07-29", k: "sound", u: "https://www.tiktok.com/@freezyoutside/video/7668102327382838550", t: { en: "Game-footage meme on BRUCE WAYNE", ja: "ゲーム映像のミーム（BRUCE WAYNE）" } as L },
    { h: "@ellianawalmsley", f: "8.4M", v: 672600, d: "2026-09-06", k: "creator", u: "https://www.tiktok.com/@ellianawalmsley/video/7682552105751694606", t: { en: "Elliana Walmsley dancing with SOTA", ja: "Elliana Walmsley × SOTA" } as L },
  ],
  layerTitle: { en: "The fan clip layer today, 60-day sample", ja: "現在のファン投稿層（直近60日サンプル）" } as L,
  layer: [
    { value: "298", label: { en: "creators posting BE:FIRST", ja: "BE:FIRSTを投稿したクリエイター" } as L },
    { value: "635", label: { en: "median followers per creator", ja: "クリエイターのフォロワー数（中央値）" } as L },
    { value: "5,310", label: { en: "median views per post", ja: "投稿1本あたり再生数（中央値）" } as L },
    { value: "59%", label: { en: "of captions in Japanese", ja: "キャプションが日本語の割合" } as L },
  ],
  read: {
    en: "The biggest outside posts come from two places: other artists' official accounts, and American creators who took the song and left the group out. Funded US creators cutting BMSG's own footage on TikTok fill the space between them.",
    ja: "外部の大きな投稿は2種類に分かれます。他アーティストの公式アカウントと、楽曲だけを使いBE:FIRSTを映していない米国クリエイターです。BMSGの公式映像をTikTok向けに編集する米国クリエイターに報酬を用意することで、この間を埋めます。",
  } as L,
  portal: { en: "Open the data and method", ja: "データと算出方法を見る" } as L,
};

/* ------------------------------------------------------------------- FEED */

export const FEED = {
  title: { en: "What Works in the Feed This Week", ja: "今週フィードで伸びている型" } as L,
  strap: {
    en: "Our trend desk reads TikTok every morning and writes each call for the artist. This is the board from November 9, written for BE:FIRST.",
    ja: "当社のトレンドデスクは毎朝TikTokを計測し、アーティストごとに打ち手を書き起こします。以下は11月9日のボードをBE:FIRST向けに書いたものです。",
  } as L,
  record: {
    en: "Every call is logged the day it is made and graded at 7 and 14 days, misses included. Last 7 days: 17 of 21 calls held or spread.",
    ja: "すべての予測は当日に記録し、7日後と14日後に答え合わせをします（外れも含む）。直近7日間：21件中17件が継続または拡大。",
  } as L,
  stages: {
    EARLY: { en: "Early", ja: "初期" } as L,
    MID: { en: "Mid", ja: "中盤" } as L,
    LATE: { en: "Late", ja: "終盤" } as L,
  },
  labels: {
    why: { en: "Why it catches", ja: "伸びる理由" } as L,
    proof: { en: "BE:FIRST already has proof", ja: "BE:FIRSTでの実績" } as L,
    yours: { en: "Make it yours, BE:FIRST", ja: "BE:FIRSTならこう作る" } as L,
    example: { en: "Logged example posts. Tap to play.", ja: "記録済みの参考投稿（タップで再生）" } as L,
    skip: { en: "Skip these", ja: "見送るトレンド" } as L,
  },
  cards: [
    {
      n: "01",
      stage: "EARLY",
      name: { en: "Guest pairing clips", ja: "ゲストとのペア動画" } as L,
      ref: "JISOO, ADDICTED",
      data: { en: "Videos using the sound: 20.1K to 28K in 3 days (+39%)", ja: "音源使用動画：3日間で2.01万本→2.8万本（+39%）" } as L,
      why: { en: "Each guest pulls a second fandom into the same clip.", ja: "ゲストが変わるたびに、別のファン層が同じ動画に流れ込みます。" } as L,
      proof: {
        en: "The group's own best posts are pairings: KATSEYE's YOONCHAE (2.4M on Reels), IVE's REI (1.7M), &TEAM's K (1.4M on TikTok).",
        ja: "BE:FIRSTの上位投稿もペア動画です。KATSEYEのYOONCHAE（Reels 240万）、IVEのREI（170万）、&TEAMのK（TikTok 140万）。",
      } as L,
      yours: {
        en: "Creators cut every WATCH ME and NOW U KNOW guest pairing into one ranked clip. The ranking starts the argument in the comments.",
        ja: "「WATCH ME」と「NOW U KNOW」のゲストペアを1本にまとめたランキング動画。順位づけがコメント欄の議論を生みます。",
      } as L,
      posts: [{ h: "@roses_are_rosie", id: "7702676777834925319", v: 24800000 }, { h: "@jisoo", id: "7705807095454600449", v: 8200000 }, { h: "@jisoo", id: "7702359917029608725", v: 7200000 }],
    },
    {
      n: "02",
      stage: "EARLY",
      name: { en: "One simple move", ja: "真似しやすいワンムーブ" } as L,
      ref: "ILLIT, Pop",
      data: { en: "Videos using the sound: 9.3K to 11.5K in 3 days (+24%)", ja: "音源使用動画：3日間で9,300本→1.15万本（+24%）" } as L,
      why: { en: "A hand move anyone can copy in one take, so fans cover it within days.", ja: "誰でも一発撮りで真似できる手の動き。数日でファンのカバーが広がります。" } as L,
      proof: {
        en: "The NOW U KNOW hook sound is six days old and already has 67 videos, nearly all from fans.",
        ja: "「NOW U KNOW」のフック音源は公開6日で67本。ほぼすべてファンによる投稿です。",
      } as L,
      yours: {
        en: "Isolate one eight-count of the NOW U KNOW hook. US dance creators learn it and post beside the group's clip.",
        ja: "「NOW U KNOW」のフックから8カウントを切り出し、米国のダンスクリエイターがBE:FIRSTの映像と並べて投稿します。",
      } as L,
      posts: [{ h: "@enhypen", id: "7702096992058625281", v: 7000000 }, { h: "@illit_official", id: "7703057299048238388", v: 3800000 }, { h: "@mai_linhi", id: "7703297629907586336", v: 445600 }],
    },
    {
      n: "03",
      stage: "MID",
      name: { en: "Vocal clips", ja: "ボーカルクリップ" } as L,
      ref: "BABYMONSTER, DESERVE",
      data: { en: "Videos using the sound: 29.5K to 31.8K in 3 days (+8%)", ja: "音源使用動画：3日間で2.95万本→3.18万本（+8%）" } as L,
      why: { en: "Vocal formats travel past dance fans to people who just like singing.", ja: "ボーカル動画は、ダンスファン以外の「歌が好きな層」にも届きます。" } as L,
      proof: {
        en: "JUNON's cover of Melody reached 1.59M on Reels, and a fan clip of his voice passed 372,000 on TikTok.",
        ja: "JUNONの「メロディー」カバーはReelsで159万再生。歌声を取り上げたファン投稿もTikTokで37万再生を超えました。",
      } as L,
      yours: {
        en: "One-take vocal moments from the New York showcases, captioned for people hearing the group for the first time.",
        ja: "ニューヨーク公演のワンテイクのボーカル場面を、初めてBE:FIRSTを聴く人に向けたキャプションで。",
      } as L,
      posts: [{ h: "@babymonster_yg_tiktok", id: "7701602152598523156", v: 6000000 }, { h: "@babymonster_yg_tiktok", id: "7701594346881125653", v: 5800000 }, { h: "@yg_treasure_tiktok", id: "7702707810118782216", v: 2500000 }],
    },
    {
      n: "04",
      stage: "MID",
      name: { en: "Two-person dance", ja: "2人組ダンス" } as L,
      ref: "Can I Ride",
      data: { en: "Videos using the sound: 372K to 431K in 3 days (+16%). US Popular No. 17", ja: "音源使用動画：3日間で37.2万本→43.1万本（+16%）。US Popular 17位" } as L,
      why: { en: "The joke is the mismatch: one dancer nails it, the other barely keeps up.", ja: "面白さは「差」にあります。1人は完璧、もう1人はついていくのがやっと。" } as L,
      proof: {
        en: "Elliana Walmsley's video with SOTA reached 672,600, and BRUCE WAYNE challenge covers from US dancers passed 380,000.",
        ja: "Elliana WalmsleyとSOTAの動画は67万再生。米国ダンサーによる「BRUCE WAYNE」チャレンジも38万再生を超えています。",
      } as L,
      yours: {
        en: "Split screen: the group's dance practice on one side, a US creator trying to keep up on the other.",
        ja: "画面を2分割。片側にダンスプラクティス映像、もう片側に必死についていく米国クリエイター。",
      } as L,
      posts: [{ h: "@minicaseoh6741", id: "7701089862232984846", v: 15600000 }, { h: "@sierraandlaineydance", id: "7696597924414852365", v: 11500000 }, { h: "@minicaseoh6741", id: "7702201239408266509", v: 11400000 }],
    },
    {
      n: "05",
      stage: "LATE",
      name: { en: "Character edits", ja: "キャラクター編集動画" } as L,
      ref: "Rochelle Jordan, Follow Me",
      data: { en: "Videos using the sound: 34.7K to 36.1K in 3 days (+4%)", ja: "音源使用動画：3日間で3.47万本→3.61万本（+4%）" } as L,
      why: { en: "Editors need a track that hits on the cut. Any fandom can use it.", ja: "編集クリエイターが求めるのは、カットに合わせて決まる曲。どのファンダムでも使えます。" } as L,
      proof: {
        en: "A TV character edit on BRUCE WAYNE reached 1.9M views. The song already works as an edit bed.",
        ja: "「BRUCE WAYNE」を使った海外ドラマの編集動画が190万再生。この曲はすでに編集用の音源として機能しています。",
      } as L,
      yours: {
        en: "Editors keep their own footage and close on two seconds of the group performing the hook. The song finally gets a face.",
        ja: "編集クリエイターは自分の素材を使い、最後の2秒にBE:FIRSTのパフォーマンスを入れます。曲に「顔」がつきます。",
      } as L,
      posts: [{ h: "@kziev", id: "7681478135782690062", v: 9100000 }, { h: "@ddvelos", id: "7696974677620591886", v: 6400000 }, { h: "@3nocten", id: "7687206097882565910", v: 4800000 }],
    },
  ],
  skip: [
    { en: "Housewife reveal (Tate McRae): over 578K videos and slowing to about 10% growth.", ja: "Housewife reveal（Tate McRae）：57.8万本を超え、伸び率は約10%まで鈍化。" } as L,
    { en: "Peli De Terror lip sync: over a million videos, growth down to 6%.", ja: "Peli De Terror リップシンク：100万本超、伸び率は6%まで低下。" } as L,
  ],
  indexTitle: { en: "Official TikTok by content type, last 90 days", ja: "公式TikTokのコンテンツ種別（直近90日）" } as L,
  indexNote: { en: "Index 1.00 is the account median of 216,350 views.", ja: "指数1.00＝アカウント中央値（216,350再生）。" } as L,
  index: [
    { t: { en: "Trend or outside sound", ja: "トレンド／他アーティスト音源" } as L, share: 4.5, idx: 1.61 },
    { t: { en: "Teaser or MV cut", ja: "ティザー／MVカット" } as L, share: 5.7, idx: 1.22 },
    { t: { en: "Members-only choreography", ja: "メンバーのみの振付動画" } as L, share: 52.3, idx: 1.02 },
    { t: { en: "Guest collab", ja: "ゲストコラボ" } as L, share: 17.0, idx: 0.91 },
    { t: { en: "Live or stage cut", ja: "ライブ／ステージ映像" } as L, share: 13.6, idx: 0.64 },
  ],
  indexCols: { share: { en: "share of posts", ja: "投稿に占める割合" } as L, idx: { en: "views index", ja: "再生指数" } as L },
  indexRead: {
    en: "Half the feed is one format, and the formats that outperform are the ones posted least. Raw stage cuts trail the median, which is the footage creators are best at re-framing.",
    ja: "投稿の半分が同じ型で、最も伸びる型ほど投稿数が少ない状態です。ライブ映像はそのままでは中央値を下回りますが、クリエイターが最も得意とするのがこの素材の再編集です。",
  } as L,
  peersTitle: { en: "Median TikTok views per post, official accounts", ja: "公式TikTokの投稿1本あたり再生数（中央値）" } as L,
  peers: [
    { name: "HANA", followers: "1.5M", median: 892700 },
    { name: "BOYNEXTDOOR", followers: "5.7M", median: 412050 },
    { name: "&TEAM", followers: "5.1M", median: 405150 },
    { name: "XG", followers: "5.7M", median: 274800 },
    { name: "BE:FIRST", followers: "1.4M", median: 184350, self: true },
    { name: "Number_i", followers: "622K", median: 165800 },
    { name: "JO1", followers: "1.2M", median: 71700 },
  ],
  peersNote: { en: "Latest 50 posts per account. Sample periods differ by posting pace.", ja: "各アカウント直近50投稿。投稿頻度により対象期間は異なります。" } as L,
  peersRead: {
    en: "HANA shows what a BMSG act reaches on TikTok with a similar following. The ceiling is inside the building.",
    ja: "HANAは、同規模のフォロワー数でBMSGのアーティストがTikTokでどこまで届くかを示しています。天井の高さは、社内ですでに証明されています。",
  } as L,
};

/* ---------------------------------------------------------------- MOMENTS */

export const MOMENTS = {
  title: { en: "The Moments Calendar", ja: "モーメントカレンダー" } as L,
  strap: {
    en: "A clipping pool spends for about a week and keeps earning views for two. So each pool sits on a moment.",
    ja: "クリッピングの報酬プールは約1週間で消化され、その後2週間ほど再生が伸び続けます。そのため、各プールは「モーメント」に合わせて配置します。",
  } as L,
  tap: { en: "Tap a moment", ja: "モーメントをタップ" } as L,
  kinds: {
    done: { en: "Footage in hand", ja: "素材あり" } as L,
    test: { en: "Test", ja: "テスト" } as L,
    pool: { en: "Moment pool", ja: "モーメントプール" } as L,
    standby: { en: "Standby", ja: "待機" } as L,
  },
  months: [
    { en: "Nov", ja: "11月" },
    { en: "Dec", ja: "12月" },
    { en: "Jan", ja: "1月" },
    { en: "Feb", ja: "2月" },
    { en: "Mar", ja: "3月" },
  ] as L[],
  // start/end as day offsets from Nov 1, 2026 (151-day axis to Mar 31, 2027)
  items: [
    {
      id: "ny",
      kind: "done",
      s: -10,
      e: -8,
      name: { en: "New York showcases", ja: "ニューヨーク ショーケース" } as L,
      when: { en: "October 22 and 23, 2026", ja: "2026年10月22日、23日" } as L,
      body: {
        en: "Racket NYC and Gramercy Theatre. The only BE:FIRST footage shot in front of an American crowd this season, and the base of the test folder.",
        ja: "Racket NYCとGramercy Theatre。今季、米国の観客の前で撮影された唯一のBE:FIRST映像であり、テスト用素材フォルダの核になります。",
      } as L,
    },
    {
      id: "be4u",
      kind: "done",
      s: 2,
      e: 4,
      name: { en: "BE:4U release", ja: "『BE:4U』リリース" } as L,
      when: { en: "November 3, 2026", ja: "2026年11月3日" } as L,
      body: {
        en: "Fourth album, lead track NOW U KNOW. The hook sound is still small on TikTok, which is when a brief can still shape how it gets used.",
        ja: "4thアルバム。リード曲は「NOW U KNOW」。フック音源はTikTokでまだ小規模で、使われ方をブリーフで方向づけられる段階です。",
      } as L,
    },
    {
      id: "test",
      kind: "test",
      s: 30,
      e: 43,
      name: { en: "NOW U KNOW test", ja: "「NOW U KNOW」テスト" } as L,
      when: { en: "December 1 to 14, 2026", ja: "2026年12月1日〜14日" } as L,
      body: {
        en: "Fourteen days on the New York footage and the NOW U KNOW sound. Read on December 8, report on December 21, three weeks before Tokyo Dome.",
        ja: "ニューヨーク公演の映像と「NOW U KNOW」の音源で14日間。12月8日に中間判定、12月21日に報告。東京ドームの3週間前です。",
      } as L,
    },
    {
      id: "tokyo",
      kind: "pool",
      s: 68,
      e: 88,
      name: { en: "Tokyo Dome and Kyocera Dome", ja: "東京ドーム／京セラドーム" } as L,
      when: { en: "Pool January 8 to 28. Shows January 11, 12, 16 and 17, 2027", ja: "プール期間：1月8日〜28日。公演：2027年1月11日、12日、16日、17日" } as L,
      body: {
        en: "Four dome nights in seven days. For an American viewer the hook is scale: the group from their feed, in a baseball stadium.",
        ja: "7日間でドーム4公演。米国の視聴者に刺さるのは「規模」です。フィードで見たあのグループが、野球場を埋めている。",
      } as L,
    },
    {
      id: "grammys",
      kind: "standby",
      s: 98,
      e: 99,
      name: { en: "Grammys week", ja: "グラミー賞ウィーク" } as L,
      when: { en: "February 7, 2027", ja: "2027年2月7日" } as L,
      body: {
        en: "SKY-HI and all six members joined the Recording Academy in 2026. A pool opens here only if attendance is announced.",
        ja: "SKY-HIとメンバー6人は2026年にRecording Academy会員となりました。出席が発表された場合のみ、プールを開きます。",
      } as L,
    },
    {
      id: "fukuoka",
      kind: "pool",
      s: 101,
      e: 121,
      name: { en: "Fukuoka", ja: "福岡" } as L,
      when: { en: "Pool February 10 to March 2. Shows February 13 and 14, 2027", ja: "プール期間：2月10日〜3月2日。公演：2027年2月13日、14日" } as L,
      body: {
        en: "The second dome pool carries forward the cuts and creators that won in January, so the money starts on proven formats.",
        ja: "2つ目のドームプール。1月に成果を出したカットとクリエイターを引き継ぎ、実績のある型から予算を投下します。",
      } as L,
    },
    {
      id: "belluna",
      kind: "pool",
      s: 122,
      e: 142,
      name: { en: "Belluna Dome", ja: "ベルーナドーム" } as L,
      when: { en: "Pool March 3 to 23. Shows March 6 and 7, 2027", ja: "プール期間：3月3日〜23日。公演：2027年3月6日、7日" } as L,
      body: {
        en: "The third pool. By now the creators know the footage, and the season report compares all three moments on one page.",
        ja: "3つ目のプール。この時点でクリエイターは素材を熟知しています。シーズン報告書で3つのモーメントを1枚で比較します。",
      } as L,
    },
    {
      id: "nagoya",
      kind: "standby",
      s: 146,
      e: 150,
      name: { en: "Nagoya", ja: "名古屋" } as L,
      when: { en: "Spring 2027, date to be announced", ja: "2027年春（日程未発表）" } as L,
      body: {
        en: "Vantelin Dome Nagoya is announced without a date. It joins the calendar when the date does.",
        ja: "バンテリンドーム ナゴヤは日程未発表です。発表され次第、カレンダーに加えます。",
      } as L,
    },
  ],
  lagTitle: { en: "How a pool reads", ja: "プールの読み方" } as L,
  lag: [
    { k: { en: "Days 1 to 7", ja: "1〜7日目" } as L, v: { en: "Posts go live and the pool pays out on approved views.", ja: "投稿が公開され、承認済み再生数に応じて報酬が支払われます。" } as L },
    { k: { en: "Days 3 to 5", ja: "3〜5日目" } as L, v: { en: "The earliest honest read. Saves move before streams do.", ja: "最初に信頼できる判定ができる時期。ストリーミングより先に「保存」が動きます。" } as L },
    { k: { en: "Days 7 to 21", ja: "7〜21日目" } as L, v: { en: "Views keep arriving after the money stops. One or two clips usually carry the campaign.", ja: "予算消化後も再生は伸び続けます。多くの場合、1〜2本の動画が全体を牽引します。" } as L },
  ],
};

/* ---------------------------------------------------------------- PROGRAM */

export const PROGRAM = {
  title: { en: "How the Program Runs", ja: "プログラムの進め方" } as L,
  strap: {
    en: "BMSG controls the footage, the rules and the money. Creators control the cut.",
    ja: "映像、ルール、予算はBMSGが管理します。編集はクリエイターに委ねます。",
  } as L,
  formatsTitle: { en: "The clip menu", ja: "クリップメニュー" } as L,
  formatsStrap: {
    en: "Six formats in the brief, each tied to a post that already worked. Creators choose; nothing is assigned.",
    ja: "ブリーフに載せる6つの型。いずれも実績のある投稿に基づいています。選ぶのはクリエイターで、割り当ては行いません。",
  } as L,
  formats: [
    {
      n: "01",
      id: "vertical",
      name: { en: "Official vertical cut", ja: "公式映像の縦型カット" } as L,
      what: { en: "The group's performance cropped to vertical, one phrase on screen, the official sound.", ja: "パフォーマンス映像を縦型に切り出し、画面に一言だけ。音源は公式のもの。" } as L,
      proof: { en: "The BRUCE WAYNE video cut reached 5.78M on Reels.", ja: "「BRUCE WAYNE」MVカットはReelsで578万再生。" } as L,
      caption: { en: "this is a JAPANESE group??", ja: "this is a JAPANESE group??" } as L,
    },
    {
      n: "02",
      id: "ranking",
      name: { en: "Guest pairing ranking", ja: "ゲストペアのランキング" } as L,
      what: { en: "Every guest pairing on one song, ranked by the creator. The ranking is the hook.", ja: "1曲のゲストペアをすべて並べ、クリエイターが順位づけ。順位そのものがフックになります。" } as L,
      proof: { en: "Pairings with KATSEYE, IVE and &TEAM are the group's top posts of 2026.", ja: "KATSEYE、IVE、&TEAMとのペア動画は2026年の上位投稿です。" } as L,
      caption: { en: "ranking every WATCH ME collab", ja: "ranking every WATCH ME collab" } as L,
    },
    {
      n: "03",
      id: "pov",
      name: { en: "Fan POV edit", ja: "ファン目線の編集" } as L,
      what: { en: "The creator's own frame around the footage: a reaction, a first listen, a front-row caption.", ja: "映像にクリエイター自身の視点を重ねます。リアクション、初見の感想、最前列のキャプション。" } as L,
      proof: { en: "A 262-follower account reached 817,500 with a crossover edit.", ja: "フォロワー262人のアカウントが、クロスオーバー編集で81.7万再生。" } as L,
      caption: { en: "POV: front row at Tokyo Dome", ja: "POV: front row at Tokyo Dome" } as L,
    },
    {
      n: "04",
      id: "dance",
      name: { en: "Dance creator take", ja: "ダンスクリエイターの挑戦" } as L,
      what: { en: "A US dance account learns eight counts and posts beside the group's clip.", ja: "米国のダンスアカウントが8カウントを覚え、BE:FIRSTの映像と並べて投稿します。" } as L,
      proof: { en: "Elliana Walmsley with SOTA: 672,600. BRUCE WAYNE covers from US dancers: up to 389,000.", ja: "Elliana Walmsley × SOTA：67.2万再生。米国ダンサーの「BRUCE WAYNE」カバー：最大38.9万再生。" } as L,
      caption: { en: "trying the NOW U KNOW hook", ja: "trying the NOW U KNOW hook" } as L,
    },
    {
      n: "05",
      id: "edit",
      name: { en: "Edit bed with a face", ja: "「顔」のある編集音源" } as L,
      what: { en: "Editors cut their own fandom to the song and close on two seconds of the group.", ja: "編集クリエイターが自分のファンダムの映像を曲に合わせ、最後の2秒でBE:FIRSTを映します。" } as L,
      proof: { en: "A TV character edit on BRUCE WAYNE reached 1.9M without showing the group.", ja: "「BRUCE WAYNE」を使ったドラマ編集動画は、BE:FIRSTを映さずに190万再生。" } as L,
      caption: { en: "song: BRUCE WAYNE by BE:FIRST", ja: "song: BRUCE WAYNE by BE:FIRST" } as L,
    },
    {
      n: "06",
      id: "vocal",
      name: { en: "Vocal moment", ja: "ボーカルの瞬間" } as L,
      what: { en: "One held note or one live line, uncut, captioned for a first-time listener.", ja: "ロングトーンや生歌の1フレーズをノーカットで。初めて聴く人に向けたキャプションを添えます。" } as L,
      proof: { en: "JUNON's Melody cover reached 1.59M on Reels.", ja: "JUNONの「メロディー」カバーはReelsで159万再生。" } as L,
      caption: { en: "wait for the live vocals", ja: "wait for the live vocals" } as L,
    },
  ],
  labels: { what: { en: "The cut", ja: "内容" } as L, proof: { en: "Already worked", ja: "実績" } as L, mock: { en: "Illustrative layout. No member likeness is generated.", ja: "レイアウトのイメージです。メンバーの肖像は生成していません。" } as L },
  stepsTitle: { en: "Seven steps, one clock", ja: "7つのステップ" } as L,
  steps: [
    { h: { en: "Folder", ja: "素材フォルダ" } as L, b: { en: "BMSG approves a footage folder once: stage cameras, dance practice, behind the scenes.", ja: "BMSGが素材フォルダを一度だけ承認します。ステージ映像、ダンスプラクティス、舞台裏など。" } as L },
    { h: { en: "Brief", ja: "ブリーフ" } as L, b: { en: "The six formats, the facts, the handles, the off-limits list and this week's trend board.", ja: "6つの型、基本情報、アカウント名、禁止事項、今週のトレンドボードをまとめます。" } as L },
    { h: { en: "Creators", ja: "クリエイター" } as L, b: { en: "US creators are recruited for the brief through our clipping network.", ja: "当社のクリッピングネットワークを通じて、ブリーフに合う米国クリエイターを募集します。" } as L },
    { h: { en: "Posting", ja: "投稿" } as L, b: { en: "Creators post on TikTok, from their own accounts.", ja: "クリエイターは自身のTikTokアカウントで投稿します。" } as L },
    { h: { en: "Review", ja: "審査" } as L, b: { en: "Every post is checked within 48 hours. Only approved views are paid.", ja: "すべての投稿を48時間以内に確認します。報酬の対象は承認済み再生数のみです。" } as L },
    { h: { en: "Read", ja: "判定" } as L, b: { en: "A day-7 read against a line set before launch, then money moves to the winning cuts.", ja: "開始前に決めた基準で7日目に判定し、成果の出ているカットへ予算を寄せます。" } as L },
    { h: { en: "Close", ja: "終了" } as L, b: { en: "A performance report with the cuts, creators and rates to carry forward.", ja: "成果報告書を提出します。次に引き継ぐカット、クリエイター、単価をまとめます。" } as L },
  ],
  control: [
    {
      h: { en: "BMSG decides", ja: "BMSGが決めること" } as L,
      items: [
        { en: "Which footage goes in the folder", ja: "フォルダに入れる映像" },
        { en: "The rules sheet and the off-limits list", ja: "ルールシートと禁止事項" },
        { en: "The rates and the size of each pool", ja: "単価と各プールの規模" },
        { en: "Where the money moves after each day-7 read", ja: "7日目判定の後、予算をどこへ寄せるか" },
      ] as L[],
    },
    {
      h: { en: "Creators decide", ja: "クリエイターが決めること" } as L,
      items: [
        { en: "The story and the cut, inside the rules", ja: "ルールの範囲内での構成と編集" },
        { en: "Which format from the menu", ja: "メニューのどの型を使うか" },
        { en: "When and how often they post, on their own TikTok accounts", ja: "自身のTikTokアカウントで、いつ、どの頻度で投稿するか" },
      ] as L[],
    },
    {
      h: { en: "Plan for this", ja: "想定しておくこと" } as L,
      items: [
        { en: "Approval happens once, on the folder and the rules. Creators do not wait on each video.", ja: "承認はフォルダとルールに対して一度だけ。動画1本ごとの事前承認は行いません。" },
        { en: "Paid posts bring unpaid ones. On a recent K-pop campaign we ran, 10 paid posts were followed by about 40 organic ones.", ja: "有償投稿は無償の投稿を呼びます。当社が最近実施したK-POPの施策では、有償10本に対し約40本の自然発生的な投稿が続きました。" },
        { en: "No views, streams or chart positions are guaranteed. Streams are reported beside the dates.", ja: "再生数、ストリーミング数、チャート順位の保証はありません。ストリーミングは日付とともに報告します。" },
      ] as L[],
    },
  ],
  never: {
    h: { en: "Never", ja: "行わないこと" } as L,
    items: [
      { en: "A generated likeness or voice of any member", ja: "メンバーの肖像や声の生成" },
      { en: "Bought followers or views", ja: "フォロワーや再生数の購入" },
      { en: "An undisclosed paid post", ja: "広告表記のない有償投稿" },
      { en: "A format assigned to a creator", ja: "クリエイターへの型の割り当て" },
    ] as L[],
  },
  portal: { en: "Open rights and rules", ja: "権利とルールを見る" } as L,
};

/* ------------------------------------------------------------------- MENU */

export const MENU = {
  title: { en: "The Menu", ja: "メニュー" } as L,
  strap: {
    en: "Three ways in. The test is built to decide the rest.",
    ja: "3つの始め方。テストは、その先を判断するために設計しています。",
  } as L,
  currency: { en: "Currency", ja: "通貨" } as L,
  fxNote: { en: "Dollar figures are approximate at ¥158 to the dollar.", ja: "ドル表記は1ドル＝158円換算の概算です。" } as L,
  rows: {
    pool: { en: "Creator pool", ja: "クリエイター報酬プール" } as L,
    fee: { en: "Program fee, 20%", ja: "運営費（20%）" } as L,
    desk: { en: "Daily BE:FIRST trend brief", ja: "BE:FIRST専用デイリートレンドブリーフ" } as L,
    total: { en: "Total", ja: "合計" } as L,
    ceiling: { en: "Pool ceiling at $3.00 per 1,000", ja: "プール上限（1,000再生あたり3ドルの場合）" } as L,
    approve: { en: "Approve", ja: "承認する" } as L,
    approved: { en: "approved views", ja: "承認済み再生" } as L,
  },
  tiers: [
    {
      id: "test",
      n: "01",
      name: { en: "Test", ja: "テスト" } as L,
      window: { en: "14 days. December 1 to 14, 2026", ja: "14日間（2026年12月1日〜14日）" } as L,
      line: { en: "One pool on the New York footage and the NOW U KNOW sound, with a read on day 7.", ja: "ニューヨーク公演の映像と「NOW U KNOW」の音源でプール1本。7日目に中間判定を行います。" } as L,
      pool: 800000,
      desk: 0,
      includes: [
        { en: "Folder setup, rules sheet and brief", ja: "素材フォルダの整備、ルールシート、ブリーフ" },
        { en: "Three sample clips before any money moves", ja: "予算投下前にサンプルクリップ3本" },
        { en: "US creators recruited for the brief, posting on TikTok", ja: "ブリーフに合わせて募集した米国クリエイターがTikTokに投稿" },
        { en: "Every post reviewed within 48 hours, before it is paid", ja: "すべての投稿を48時間以内に審査し、その後に報酬を支払い" },
        { en: "Day-7 read on December 8, report on December 21", ja: "12月8日に7日目判定、12月21日に報告書" },
      ] as L[],
      stop: {
        en: "Day-7 read: under 30 approved posts and 350,000 approved views, the rate steps up and the brief is recut. The pool is committed once paid and runs until it is spent.",
        ja: "7日目判定：承認済み投稿30本未満かつ承認済み再生35万回未満の場合は、単価を引き上げ、ブリーフを組み直します。プールはお支払い時点で確定し、使い切るまで運用します。",
      } as L,
    },
    {
      id: "moment",
      n: "02",
      name: { en: "Moment", ja: "モーメント" } as L,
      window: { en: "21 days. January 8 to 28, 2027", ja: "21日間（2027年1月8日〜28日）" } as L,
      line: { en: "One pool around Tokyo Dome and Kyocera Dome, with the winning cuts scaled in week two.", ja: "東京ドームと京セラドームに合わせたプール1本。2週目に成果の出たカットへ予算を寄せます。" } as L,
      pool: 3000000,
      desk: 0,
      includes: [
        { en: "Everything in the test", ja: "テストの内容すべて" },
        { en: "More creators, recruited by format", ja: "型ごとに募集する、より多くのクリエイター" },
        { en: "The daily trend board for the length of the pool", ja: "プール期間中のデイリートレンドボード" },
        { en: "Weekly report and a moment report", ja: "週次レポートとモーメント報告書" },
      ] as L[],
      stop: {
        en: "A day-7 line is set with BMSG before launch. The pool is committed once paid and runs until it is spent.",
        ja: "7日目の判定基準は開始前にBMSGと決定します。プールはお支払い時点で確定し、使い切るまで運用します。",
      } as L,
    },
    {
      id: "season",
      n: "03",
      name: { en: "Season", ja: "シーズン" } as L,
      window: { en: "January to March 2027", ja: "2027年1月〜3月" } as L,
      line: { en: "Three dome pools and a daily BE:FIRST brief for the group's own team. Winning cuts and creators carry from pool to pool.", ja: "ドーム3公演分のプールと、運営チーム向けのBE:FIRST専用デイリーブリーフ。成果の出たカットとクリエイターを次のプールへ引き継ぎます。" } as L,
      pool: 9000000,
      desk: 2250000,
      includes: [
        { en: "Three moment pools: Tokyo and Osaka, Fukuoka, Belluna", ja: "モーメントプール3本：東京と大阪、福岡、ベルーナ" },
        { en: "Daily BE:FIRST brief, January to March: each trend call with a script for the group's own channels", ja: "BE:FIRST専用デイリーブリーフ（1月〜3月）：トレンドごとに公式チャンネル向けの台本つき" },
        { en: "Winning cuts and creators carried from pool to pool", ja: "成果の出たカットとクリエイターを次のプールへ引き継ぎ" },
        { en: "Standby pools for Grammys week and Nagoya, opened only on an announcement", ja: "グラミー賞ウィークと名古屋の待機プール（発表時のみ開始）" },
        { en: "One season report comparing every moment", ja: "全モーメントを比較するシーズン報告書" },
      ] as L[],
      stop: {
        en: "The season is one commitment across three pools. Any balance left in one pool carries into the next.",
        ja: "シーズンは3つのプールをまとめた1つの契約です。あるプールに残った予算は次のプールへ繰り越します。",
      } as L,
    },
  ],
  calcTitle: { en: "Pool calculator", ja: "プール計算ツール" } as L,
  calcStrap: {
    en: "A pool divided by the rate is the most views it can pay for. It is a ceiling, never a forecast.",
    ja: "プールを単価で割った数が、支払える再生数の上限です。上限であり、予測ではありません。",
  } as L,
  calc: {
    pool: { en: "Creator pool", ja: "クリエイター報酬プール" } as L,
    rate: { en: "Rate per 1,000 approved views", ja: "承認済み1,000再生あたりの単価" } as L,
    ceiling: { en: "Most approved views the pool can pay for", ja: "プールで支払える承認済み再生数の上限" } as L,
    fee: { en: "Program fee, 20% on top", ja: "運営費（プールの20%を別途）" } as L,
    total: { en: "Total", ja: "合計" } as L,
    note: {
      en: "Pools open at $3.00 per 1,000 approved views. The rate steps to $4.00 or $5.00 when a format needs larger creators or creators are slow to take the footage. Any platform fee is itemised before launch.",
      ja: "プールは承認済み1,000再生あたり3.00ドルで開始します。より大きなクリエイターが必要な型や、クリエイターの参加が鈍い場合は、4.00ドルまたは5.00ドルに引き上げます。プラットフォーム手数料がある場合は開始前に明示します。",
    } as L,
  },
  portal: { en: "Open rates and evidence", ja: "単価と根拠を見る" } as L,
};

/* ------------------------------------------------------------------ CLOSE */

export const NEXT = {
  title: { en: "Next Steps", ja: "次のステップ" } as L,
  steps: [
    { h: { en: "Pick a way in", ja: "始め方を選ぶ" } as L, b: { en: "Test, Moment or Season. Approve here or reply to us.", ja: "テスト、モーメント、シーズンから選択。このページで承認、またはメールでご連絡ください。" } as L },
    { h: { en: "Share the folder", ja: "素材フォルダを共有" } as L, b: { en: "The New York footage and any dance practice video, with a note on what is cleared.", ja: "ニューヨーク公演の映像とダンスプラクティス動画を、使用可能範囲のメモとともに。" } as L },
    { h: { en: "See three sample clips", ja: "サンプルクリップ3本を確認" } as L, b: { en: "Cut from the folder within five working days, before any money moves.", ja: "フォルダ受領から5営業日以内に制作。予算投下の前にご確認いただきます。" } as L },
    { h: { en: "Sign off the brief", ja: "ブリーフを承認" } as L, b: { en: "The formats, the rules sheet and the rates, approved once.", ja: "型、ルールシート、単価をまとめて一度で承認いただきます。" } as L },
    { h: { en: "Open the pool", ja: "プールを開始" } as L, b: { en: "December 1, three weeks before Tokyo Dome.", ja: "12月1日開始。東京ドームの3週間前です。" } as L },
  ],
  cta: { en: "Talk To Us", ja: "お問い合わせ" } as L,
  close: {
    en: "The domes are booked. Let the American feed see them.",
    ja: "ドームはもう決まっています。その景色を、米国のフィードへ。",
  } as L,
};

export const AGENCY = {
  title: { en: "Crowd Control Digital", ja: "Crowd Control Digitalについて" } as L,
  body: {
    en: "A culture-first marketing agency for brands, artists and platforms since 2015. Strategy, creative and paid media under one roof, measured in attention, sales, streams and fans.",
    ja: "2015年創業。ブランド、アーティスト、プラットフォームのための、カルチャーを起点としたマーケティングエージェンシーです。戦略、クリエイティブ、広告運用を一つの体制で担い、注目、売上、ストリーミング、ファンの数で成果を測ります。",
  } as L,
  servicesLabel: { en: "What we do", ja: "サービス" } as L,
  inPlan: { en: "In this program", ja: "本プログラムで活用" } as L,
  services: [
    { h: { en: "Strategy & Consulting", ja: "戦略／コンサルティング" } as L, b: { en: "Release, launch and growth strategy built on real data, from a single drop to a twelve-month plan.", ja: "実データに基づくリリース、ローンチ、成長戦略。単発のリリースから12か月計画まで。" } as L, on: true },
    { h: { en: "Social Listening", ja: "ソーシャルリスニング" } as L, b: { en: "Daily sentiment and share-of-voice dashboards across every platform.", ja: "全プラットフォームの反応と言及シェアを毎日可視化するダッシュボード。" } as L, on: true },
    { h: { en: "Creative Services", ja: "クリエイティブ制作" } as L, b: { en: "Campaign creative, content and edits made for the feed they will run in.", ja: "配信されるフィードに合わせて制作するキャンペーンクリエイティブ、コンテンツ、編集。" } as L, on: false },
    { h: { en: "Social Media Management", ja: "SNS運用" } as L, b: { en: "Channels run day to day: the calendar, the posts, the replies and the read on what is working.", ja: "日々のチャンネル運用。投稿計画、投稿、返信、そして何が効いているかの分析。" } as L, on: false },
    { h: { en: "Creator Marketing & Clipping", ja: "クリエイター施策／クリッピング" } as L, b: { en: "Creators, clippers and UGC that reach people who would never follow your account.", ja: "公式アカウントをフォローしない層に届く、クリエイター、クリッパー、UGC。" } as L, on: true },
    { h: { en: "Paid Media", ja: "広告運用" } as L, b: { en: "Paid social, search and video bought against outcomes: streams, tickets and sales.", ja: "SNS広告、検索広告、動画広告を、ストリーミング、チケット、売上という成果に対して運用。" } as L, on: false },
    { h: { en: "Email & SMS", ja: "メール／SMS" } as L, b: { en: "Programs that turn followers into a list you own, and the list into tickets and streams.", ja: "フォロワーを自社のリストに変え、リストをチケットとストリーミングにつなげる施策。" } as L, on: false },
    { h: { en: "Billboards & OOH", ja: "屋外広告（OOH）" } as L, b: { en: "Out-of-home placements, from a single board to a city takeover.", ja: "1枚のビルボードから街全体のジャックまで。" } as L, on: false },
    { h: { en: "Event Production", ja: "イベント制作" } as L, b: { en: "Launch events, activations and fan experiences.", ja: "ローンチイベント、アクティベーション、ファン体験。" } as L, on: false },
    { h: { en: "World Building & Tech", ja: "ワールドビルディング／テック" } as L, b: { en: "Custom sites, games and member systems, built and run in house.", ja: "特設サイト、ゲーム、会員システムを社内で開発、運用。" } as L, on: false },
    { h: { en: "AI-Enablement", ja: "AI活用支援" } as L, b: { en: "Custom AI agents and tools for marketing teams, and getting named when people ask AI.", ja: "マーケティングチーム向けのAIエージェントやツールの開発。AIに尋ねられたときに名前が挙がるための施策。" } as L, on: true },
  ],
  clientGroups: [
    { label: { en: "Music", ja: "音楽" } as L, names: ["bbno$", "Peso Pluma", "KSI", "ILLENIUM", "Miguel", "82MAJOR", "FIFTY FIFTY", "Liza Soberano", "Emotional Oranges", "ATLiens", "Habstrakt", "Bad Tuner"] },
    { label: { en: "Live", ja: "ライブ" } as L, names: ["Live Nation", "AEG", "Insomniac Events", "Vibra Urbana", "Brooklyn Mirage", "Avant Gardner"] },
    { label: { en: "Brands", ja: "ブランド" } as L, names: ["NBA", "Golden State Warriors", "Apple", "Amazon", "Beats By Dre", "Warner Bros", "Monster Energy", "Foot Locker", "Porsche"] },
  ],
};

export const FOOT = {
  disclaimer: {
    en: "BE:FIRST and BMSG are trademarks of BMSG Inc. All artwork on this page is original and illustrative, made for this proposal. No likeness or voice of any member has been generated. Post thumbnails belong to their creators and play through TikTok. Social figures are public counts as scraped on November 9, 2026.",
    ja: "BE:FIRSTおよびBMSGは株式会社BMSGの商標です。本ページのアートワークはすべて本提案のために制作したオリジナルのイメージです。メンバーの肖像および声は一切生成していません。投稿のサムネイルは各投稿者に帰属し、TikTokのプレーヤーで再生されます。SNSの数値は2026年11月9日時点で取得した公開データです。",
  } as L,
};
