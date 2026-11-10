import type { L } from "./content";

export type DossierId = "data" | "rates" | "rules";

type Block =
  | { kind: "p"; text: L }
  | { kind: "h"; text: L }
  | { kind: "list"; items: L[] }
  | { kind: "table"; head: L[]; rows: (L | string)[][] }
  | { kind: "links"; items: { label: L; url: string }[] };

export const DOSSIERS: Record<DossierId, { no: string; title: L; strap: L; blocks: Block[] }> = {
  data: {
    no: "A",
    title: { en: "Data and Method", ja: "データと算出方法" },
    strap: {
      en: "Every social figure on the page is a public count scraped on November 9, 2026. Nothing is estimated.",
      ja: "本ページのSNS数値はすべて、2026年11月9日に取得した公開データです。推計値は含みません。",
    },
    blocks: [
      { kind: "h", text: { en: "What was pulled", ja: "取得したデータ" } },
      {
        kind: "table",
        head: [
          { en: "Set", ja: "対象" },
          { en: "Sample", ja: "サンプル" },
          { en: "Used for", ja: "用途" },
        ],
        rows: [
          [{ en: "Official TikTok", ja: "公式TikTok" }, { en: "100 latest posts, 88 in the last 90 days", ja: "直近100投稿（うち直近90日は88本）" }, { en: "Medians, content types, top posts", ja: "中央値、コンテンツ種別、上位投稿" }],
          [{ en: "Official Instagram Reels", ja: "公式Instagram Reels" }, { en: "80 latest Reels, 79 in the last 90 days", ja: "直近80本（うち直近90日は79本）" }, { en: "Medians, top Reels", ja: "中央値、上位Reels" }],
          [{ en: "Official YouTube Shorts", ja: "公式YouTube Shorts" }, { en: "80 latest Shorts, 45 in the last 90 days", ja: "直近80本（うち直近90日は45本）" }, { en: "Medians, top Shorts", ja: "中央値、上位Shorts" }],
          [{ en: "Fan and creator layer", ja: "ファン／クリエイター層" }, { en: "1,098 TikTok posts from six hashtags, two searches and six sound pages; 430 outside posts in the last 60 days", ja: "6つのハッシュタグ、2つの検索、6つの音源ページから1,098投稿。直近60日の外部投稿は430本" }, { en: "Creator counts, reach, caption language", ja: "クリエイター数、リーチ、キャプション言語" }],
          [{ en: "Official sounds", ja: "公式音源" }, { en: "Video counts on six sound pages", ja: "6つの音源ページの動画数" }, { en: "Sound use", ja: "音源の使用状況" }],
          [{ en: "Comments", ja: "コメント" }, { en: "500 comments across the five most-viewed recent posts", ja: "直近の再生数上位5投稿から500件" }, { en: "Comment language", ja: "コメントの言語" }],
          [{ en: "Peer accounts", ja: "比較アカウント" }, { en: "50 latest posts each, seven official TikTok accounts", ja: "公式TikTok 7アカウント、各直近50投稿" }, { en: "Median views", ja: "再生数の中央値" }],
        ],
      },
      { kind: "h", text: { en: "How to read it", ja: "数値の読み方" } },
      {
        kind: "list",
        items: [
          { en: "TikTok rounds follower counts and any view count above 10,000, so those figures are platform-rounded.", ja: "TikTokはフォロワー数および1万を超える再生数を丸めて表示するため、該当する数値はプラットフォーム側で丸められた値です。" },
          { en: "The fan layer is a capped sample. 298 creators is a floor, not a census.", ja: "ファン層のデータは上限つきのサンプルです。298人は最低値であり、全数ではありません。" },
          { en: "Languages are detected from the script of the text. It shows that an English layer exists; it is not a country split.", ja: "言語は文字種から判定しています。英語圏の層が存在することを示すもので、国別の内訳ではありません。" },
          { en: "The seven song-only videos were confirmed from each post's cover frame and caption.", ja: "楽曲のみを使用した7本の動画は、各投稿のカバー画像とキャプションで確認しています。" },
          { en: "Sound counts are per official cut. A song's total across all cuts is higher.", ja: "音源の動画数は公式カットごとの数値です。曲全体の合計はこれより多くなります。" },
          { en: "The Instagram ranking covers Reels from July 31, 2026 onward.", ja: "Instagramのランキングは2026年7月31日以降のReelsが対象です。" },
          { en: "Peer samples span different periods because the accounts post at different rates.", ja: "比較アカウントは投稿頻度が異なるため、サンプルの対象期間も異なります。" },
        ],
      },
      { kind: "h", text: { en: "Sources for the facts", ja: "事実関係の出典" } },
      {
        kind: "links",
        items: [
          { label: { en: "BE:4U first week, Billboard Japan", ja: "『BE:4U』初週売上（Billboard JAPAN）" }, url: "https://www.billboard-japan.com/d_news/detail/167295" },
          { label: { en: "BE:4U, official release page", ja: "『BE:4U』公式ページ" }, url: "https://befirst.tokyo/en/music/befrist_be4u/" },
          { label: { en: "WATCH ME US chart results, THE FIRST TIMES", ja: "『WATCH ME』米国チャート成績（THE FIRST TIMES）" }, url: "https://www.thefirsttimes.jp/news/0000890702/" },
          { label: { en: "5th Anniversary DOME TOUR 2027 dates, BARKS", ja: "5th Anniversary DOME TOUR 2027 日程（BARKS）" }, url: "https://barks.jp/news/1100345/" },
          { label: { en: "2026 US dates, HITS Daily Double", ja: "2026年の米国での活動（HITS Daily Double）" }, url: "https://www.hitsdailydouble.com/news/new-and-developing-artists/be-first-bmsg-2026-08-10" },
          { label: { en: "82WORLD LA, Billboard via Yahoo", ja: "82WORLD LA（Billboard記事、Yahoo掲載）" }, url: "https://www.yahoo.com/entertainment/music/articles/82world-la-best-moments-ateez-060051995.html" },
          { label: { en: "World Showcase 2026 dates", ja: "WORLD SHOWCASE 2026 日程" }, url: "https://electricbloomwebzine.com/tours/befirst-world-showcase-2026-watch-me" },
          { label: { en: "Recording Academy membership, KAI-YOU", ja: "Recording Academy会員選出（KAI-YOU）" }, url: "https://kai-you.net/article/95976" },
        ],
      },
    ],
  },
  rates: {
    no: "B",
    title: { en: "Rates and Evidence", ja: "単価と根拠" },
    strap: {
      en: "What clipping costs in music, what it has returned, and how this program is priced.",
      ja: "音楽におけるクリッピングの相場、これまでの実績、そして本プログラムの料金設計。",
    },
    blocks: [
      { kind: "h", text: { en: "The market rate", ja: "市場の単価" } },
      {
        kind: "table",
        head: [
          { en: "Measure", ja: "指標" },
          { en: "Per 1,000 views", ja: "1,000再生あたり" },
          { en: "Basis", ja: "根拠" },
        ],
        rows: [
          [{ en: "Median, all campaigns", ja: "中央値（全施策）" }, "$1.00", { en: "719 live campaigns on one marketplace, October 17, 2026", ja: "大手マーケットプレイス上の719施策（2026年10月17日時点）" }],
          [{ en: "Middle half of campaigns", ja: "中央50%の範囲" }, "$1.00 to $2.00", { en: "Same data set", ja: "同データ" }],
          [{ en: "Median, music campaigns", ja: "中央値（音楽）" }, "$1.00", { en: "100 music campaigns in the same set", ja: "同データ内の音楽100施策" }],
          [{ en: "This program", ja: "本プログラム" }, "$3.00 to $5.00", { en: "Footage-led, a recruited US roster, every post reviewed before it is paid", ja: "映像主導型。米国クリエイターを個別に募集し、支払い前に全投稿を審査" }],
        ],
      },
      { kind: "h", text: { en: "Campaigns on record", ja: "実績のある施策" } },
      {
        kind: "table",
        head: [
          { en: "Campaign", ja: "施策" },
          { en: "Spend", ja: "費用" },
          { en: "Result", ja: "結果" },
        ],
        rows: [
          [{ en: "K-pop boy group single, run by Crowd Control, September 2026", ja: "K-POPボーイズグループのシングル（当社実施、2026年9月）" }, { en: "Client confidential", ja: "非公開" }, { en: "63 posts, 5.4M views", ja: "63投稿、540万再生" }],
          [{ en: "John Summit, Lights Go Out, as reported", ja: "John Summit「Lights Go Out」（報道ベース）" }, "$1,050", { en: "32.4M views in 8 days, 29 approved clips from 13 creators", ja: "8日間で3,240万再生。13名による承認済みクリップ29本" }],
          [{ en: "Russ, MOVIN, as reported", ja: "Russ「MOVIN」（報道ベース）" }, { en: "About $20,000", ja: "約2万ドル" }, { en: "50M+ views in one month", ja: "1か月で5,000万再生超" }],
        ],
      },
      {
        kind: "p",
        text: {
          en: "Marketplace rates and the reported cases are song-led and open to anyone: creators set the track under any footage, which is the cheapest way to buy a view. This program is footage-led, so the group is in every approved clip, the creators are recruited by name for their US audience, and every post is reviewed before it is paid. That is what the $3.00 to $5.00 rate buys.",
          ja: "マーケットプレイスの単価や報道されている事例は「楽曲主導型」で、誰でも参加できる形式です。クリエイターが任意の映像に曲を乗せるため、再生単価は最も安くなります。本プログラムは「映像主導型」です。承認されるすべてのクリップにBE:FIRSTが映り、クリエイターは米国の視聴者を持つ人を個別に募集し、支払い前に全投稿を審査します。3.00〜5.00ドルという単価は、その対価です。",
        },
      },
      { kind: "h", text: { en: "How this program is priced", ja: "本プログラムの料金設計" } },
      {
        kind: "list",
        items: [
          { en: "The creator pool pays only for approved views. It is committed once paid and runs until it is spent.", ja: "クリエイター報酬プールは承認済み再生数に対してのみ支払われます。お支払い時点で確定し、使い切るまで運用します。" },
          { en: "The program fee is 20% of the pool, stated on top of it and never taken from inside it.", ja: "運営費はプールの20%です。プールとは別に明示し、プール内から差し引くことはありません。" },
          { en: "Each post has a payout cap, so one runaway clip cannot empty a pool.", ja: "投稿ごとに報酬の上限を設け、1本の動画が突出してもプールが枯渇しないようにします。" },
          { en: "Views, streams and chart positions are not guaranteed. A pool divided by its rate is a ceiling.", ja: "再生数、ストリーミング数、チャート順位は保証しません。プールを単価で割った数は上限値です。" },
        ],
      },
      {
        kind: "links",
        items: [
          { label: { en: "Marketplace rate data, October 2026", ja: "マーケットプレイスの単価データ（2026年10月）" }, url: "https://clippingcollective.com/guides/clipping-campaign-data-2026" },
          { label: { en: "John Summit case", ja: "John Summitの事例" }, url: "https://www.listenfirstmedia.com/what-marketers-need-to-know-about-the-clipping-economy/" },
          { label: { en: "Russ case", ja: "Russの事例" }, url: "https://www.theblackhoody.com/p/whop-will-change-music-marketing" },
        ],
      },
    ],
  },
  rules: {
    no: "C",
    title: { en: "Rights and Rules", ja: "権利とルール" },
    strap: {
      en: "Paid creators sit outside BMSG's fan guidelines, so the program runs on a written licence.",
      ja: "報酬を受け取るクリエイターはBMSGのファン向けガイドラインの対象外です。そのため、本プログラムは書面によるライセンスに基づいて運用します。",
    },
    blocks: [
      { kind: "h", text: { en: "The licence", ja: "ライセンス" } },
      {
        kind: "list",
        items: [
          { en: "BMSG's notice to supporters, updated February 4, 2026, permits posting artist photos and logos to social media in support of the artist, and bars using an artist's likeness to advertise a product or service. It does not address video, re-editing or paid posts.", ja: "BMSGのお知らせ「BMSG所属アーティスト、トレーニーを応援してくださる皆様へ」（2026年2月4日更新）は、応援目的でのアーティスト写真やロゴのSNS投稿を認め、商品やサービスの広告への肖像使用を禁じています。動画、再編集、有償投稿については定めがありません。" },
          { en: "The agreement therefore states in writing that named creators may re-edit and post the folder, on the platforms and dates listed.", ja: "そのため契約書には、指名されたクリエイターが、記載されたプラットフォームと期間において、フォルダ内の映像を再編集して投稿できることを明記します。" },
          { en: "Only footage BMSG places in the folder is clipped. Broadcast and third-party footage stays out unless BMSG holds the rights.", ja: "編集対象は、BMSGがフォルダに入れた映像のみです。放送映像や第三者の映像は、BMSGが権利を保有している場合を除き使用しません。" },
          { en: "Edit-bed clips use the creator's usual sources with the official BE:FIRST sound. BMSG licenses only its own folder and sound.", ja: "「編集音源」型のクリップは、クリエイターが普段使っている素材にBE:FIRSTの公式音源を合わせたものです。BMSGがライセンスするのは自社のフォルダと音源のみです。" },
        ],
      },
      { kind: "h", text: { en: "The veto", ja: "拒否権" } },
      {
        kind: "list",
        items: [
          { en: "Crowd Control checks every post against BMSG's rules sheet within 48 hours of it going live.", ja: "Crowd Controlは、すべての投稿を公開から48時間以内にBMSGのルールシートと照合します。" },
          { en: "BMSG holds a veto every day. A takedown request goes to the creator the same day, with the platform's report route if the post stays up.", ja: "BMSGは毎日、拒否権を行使できます。削除依頼は当日中にクリエイターへ伝え、削除されない場合はプラットフォームの報告手続きを取ります。" },
          { en: "A vetoed post earns nothing from the pool.", ja: "拒否された投稿にはプールからの報酬は支払われません。" },
        ],
      },
      { kind: "h", text: { en: "Disclosure", ja: "広告表記" } },
      {
        kind: "list",
        items: [
          { en: "Every paid post carries the platform's paid-partnership label and a plain disclosure. US rules require a clear disclosure of any material connection, made with the post itself.", ja: "すべての有償投稿に、プラットフォームのタイアップ表示と明確な広告表記を付けます。米国の規則では、金銭的関係をその投稿自体で明確に開示することが求められます。" },
          { en: "US accounts first. Posts aimed at Japan fall under Japan's stealth marketing rule, in force since October 1, 2023, where a post a business asks a third party to make counts as the business's own advertising. That is a separate window with its own review.", ja: "まず米国のアカウントから始めます。日本向けの投稿は、2023年10月1日施行のステルスマーケティング規制の対象となり、事業者が第三者に依頼した投稿は事業者自身の広告とみなされます。日本向けは別枠とし、個別に審査します。" },
          { en: "Crowd Control checks each post's disclosure before it is paid.", ja: "Crowd Controlは、報酬の支払い前に各投稿の広告表記を確認します。" },
        ],
      },
      { kind: "h", text: { en: "Creators", ja: "クリエイター" } },
      {
        kind: "list",
        items: [
          { en: "Their own accounts only, one per platform. No account made for the campaign.", ja: "自身のアカウントのみ、プラットフォームごとに1つ。施策のために作成したアカウントは対象外です。" },
          { en: "Invalid and purchased views are excluded daily.", ja: "無効な再生や購入された再生は、毎日除外します。" },
          { en: "No generated likeness or voice of any member, in any clip.", ja: "いかなるクリップでも、メンバーの肖像や声の生成は行いません。" },
        ],
      },
      {
        kind: "links",
        items: [
          { label: { en: "BMSG notice to supporters", ja: "BMSG「BMSG所属アーティスト、トレーニーを応援してくださる皆様へ」" }, url: "https://bmsg.tokyo/topic/announcement/" },
          { label: { en: "FTC, Disclosures 101 for social media influencers", ja: "米連邦取引委員会：インフルエンサー向け開示ガイド" }, url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
          { label: { en: "Consumer Affairs Agency, stealth marketing rule", ja: "消費者庁：ステルスマーケティング規制" }, url: "https://www.caa.go.jp/policies/policy/representation/fair_labeling/stealth_marketing/" },
        ],
      },
    ],
  },
};
