import type { StrategyPlanData } from "../plan-context";

export const irationPlan: StrategyPlanData = {
  accentColor: "#fd3737",
  ogImage: "/images/iration/og-image.png",
  language: "en",
  noIndex: true,

  cover: {
    label: "Social Media Management",
    title: "IRATION",
    subtitle:
      "A social media management engagement covering Instagram, TikTok, and short-form video, with an optional email and SMS layer built on the Hive account Iration already owns.",
    partnership: "Iration × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "August 2026",
    logo: "/brand/CC-LOGO-2024-WHITE.png",
  },

  approveCta: {
    label: "Approve This Scope",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVAL NOTIFIES CROWD CONTROL DIGITAL. NO PAYMENT IS COLLECTED.",
  },

  sections: [
    {
      type: "overview",
      number: "01",
      navLabel: "Scope",
      title: "Scope",
      subtitle:
        "The output is already there. What is missing is a format discipline and a place for the attention to land.",
      body: [
        "Iration is twenty-two years in, independent, and self-released through Three Prong Records. The band posts constantly. Effort is not the constraint.",
        "We pulled the last fifty posts from each platform and coded every one by format, timing, length, and call to action. Two things came out of it: the formats that work are a small and identifiable subset of what gets posted, and almost nothing that gets posted asks the audience for anything.",
        "The second one is the expensive one. Iration already runs a real email and SMS operation on Hive and runs it well. Social is simply not pointed at it, so the reach the band earns every week never reaches the list.",
      ],
      charts: [
        {
          kind: "hbars",
          title: "Where The Last 100 Posts Point",
          subtitle: "Calls to action across the last 50 TikTok and 50 Instagram posts",
          unit: "posts",
          yMax: 100,
          series: [
            {
              name: "Posts",
              points: [
                { x: "Nothing asked", y: 79 },
                { x: "Ticket or show link", y: 18 },
                { x: "Owned destination", y: 3 },
                { x: "Email signup", y: 0 },
                { x: "SMS keyword", y: 0 },
                { x: "Fan club link", y: 0 },
              ],
            },
          ],
          highlightX: ["Email signup", "SMS keyword", "Fan club link"],
          note: "The three owned-destination posts all point to the Shopify store. Nothing on the calendar feeds the email, SMS, or membership layer.",
          source: "Corpus coded August 27, 2026",
        },
      ],
      supports: {
        heading: "What This Engagement Covers",
        items: [
          "Social media management across every channel the band runs, plus community management",
          "Short-form editing and format development from footage the band already shoots",
          "Community management and comment response, within one business day",
          "A fan-capture layer built into the formats that already perform",
          "Monthly reporting against the baselines set in this document",
          "Optional email and SMS on the existing Hive account, priced separately",
        ],
      },
      goals: {
        heading: "What The First 90 Days Establish",
        items: [
          "A repeatable recap production line that survives the end of a tour cycle",
          "A tested replacement for the third of the TikTok calendar spent on static photos",
          "A measured baseline for how much audience capture social can actually drive",
          "A social calendar that feeds the email and SMS list instead of running beside it",
          "Whether TikTok can be moved off the genre floor, answered with data",
        ],
      },
      footnote:
        "Corpus pulled August 27, 2026: last 50 TikTok posts (May 2 to August 26) and last 50 Instagram posts (June 24 to August 25). Streaming figures from Chartmetric, August 27, 2026. Platform baselines current as of the same date.",
    },

    {
      type: "brandAudit",
      number: "02",
      navLabel: "Brand Audit",
      title: "Brand Audit",
      intro:
        "Where the band is strong, where the channel work is not keeping up, and which gaps are cheap to close.",
      verdict:
        "A live-first catalog band with unusually high ticket-buying intent per listener, running a social calendar that documents the shows rather than recruiting for them.",
      scorecard: [
        {
          dimension: "Live Demand",
          status: "Primary strength",
          evidence:
            "523,000 Bandsintown followers, ahead of Stick Figure's 438,000 despite Stick Figure carrying roughly 4.5 times the Spotify monthly listeners. A self-headlined run across 34 cities in 2026 with a two-night Denver stand, both nights sold out.",
        },
        {
          dimension: "Audience Quality",
          status: "Above genre average",
          evidence:
            "466,037 Spotify followers against 1,539,087 monthly listeners, a 30.3 percent ratio. Higher than Stick Figure (14.4 percent), Dirty Heads (26.1 percent), and Slightly Stoopid (26.6 percent). This is a loyalty and depth proxy, not a conversion rate.",
        },
        {
          dimension: "Geographic Coherence",
          status: "Defensible advantage",
          evidence:
            "All ten top listening cities are US touring markets: Los Angeles, San Diego, Honolulu, Denver, Phoenix, Sacramento, Seattle, Chicago, Dallas, New York. Listener geography and tour routing describe the same map, which is not true of every act in the genre.",
        },
        {
          dimension: "Instagram Performance",
          status: "Genuine relative strength",
          evidence:
            "Measured on the same window and method as the peer set, median 1,858 likes against 314,901 followers, a 0.590 percent rate that ranks third of seven and runs at 1.54 times the genre median of 0.384 percent. Across the wider 50-post corpus the median is 1,575 likes, or 0.50 percent. Instagram is working harder than it is being credited for on either measure.",
        },
        {
          dimension: "TikTok Performance",
          status: "Below genre floor",
          evidence:
            "Median 2,707 plays excluding the single viral outlier, against 61,700 followers, a 4.4 percent rate that ranks sixth of seven and runs at 0.66 times the genre median of 6.7 percent. Including the outlier the median is 2,764. Only Slightly Stoopid performs worse per follower.",
        },
        {
          dimension: "Format Discipline",
          status: "The addressable gap",
          evidence:
            "30 percent of TikTok output is static photo posts, the highest share in the peer set, where comparable acts sit between zero and four percent. A further 22 percent goes to lyric and song clips, the weakest video format in the corpus at 0.77 times the account median.",
        },
        {
          dimension: "Owned-Audience Capture",
          status: "Built but disconnected",
          evidence:
            "Three of the last hundred posts carry a call to action pointing to a destination Iration owns. Zero carry an email signup, an SMS keyword, or a fan club link. The band already routes its own tour-page ticket links through iration.fm, but social captions point at venue domains instead, so the reach social generates lands outside that tracked layer.",
        },
        {
          dimension: "Fan Data Infrastructure",
          status: "Already strong",
          evidence:
            "A working email and SMS operation on Hive, running 31 city-level tour sweepstakes plus an album listening-party contest, alongside a paid IRATORS VIP tier on The Chorus, a Shopify store, ToneDen smart links, and a live SMS consent flow. This is a well-run stack, not a gap.",
        },
      ],
      foundations: [
        { label: "Spotify Monthly Listeners", value: "1,539,087", note: "Chartmetric, August 27, 2026" },
        { label: "Spotify Followers", value: "466,037", note: "30.3 percent follower-to-listener ratio" },
        { label: "Instagram", value: "314,901", note: "@iration, verified, 5,107 posts" },
        { label: "TikTok", value: "61,700", note: "@iration, 813 videos" },
        { label: "Bandsintown", value: "523,000", note: "Fourth in the peer set, ahead of Stick Figure" },
        { label: "Top Listening City", value: "Los Angeles", note: "51,924 listeners, followed by San Diego at 34,065" },
        { label: "Follower-To-Listener", value: "30.3%", note: "Ahead of Stick Figure, Dirty Heads, and Slightly Stoopid" },
        { label: "Posts Per Month", value: "37", note: "Roughly 25 on Instagram, 12 on TikTok" },
      ],
      strengths: [
        {
          title: "The recap format already works and nobody else in the genre owns it",
          detail:
            "Post-show recap posts are the top-performing format on both platforms. In August, TikTok recaps ran a median of 8,070 plays against 1,262 for everything else, a 6.4x separation. On Instagram the same month, 3,808 against 1,268. The band found a format that fits who they are. It is not being treated as a production line.",
        },
        {
          title: "One shoot is already producing two platform wins",
          detail:
            "The Super Girl Pro recap ran as the same creative on both channels and placed near the top of each: 8,877 plays on TikTok with the highest share rate in the corpus outside the single viral post, and 8,160 likes on Instagram, near the top of the window. The cross-posting instinct is right and under-exploited.",
        },
        {
          title: "The audience answers when asked a real question",
          detail:
            "A four-word Instagram post reading \"I miss my dog\" produced the highest comment rate in the entire corpus at 178 comments per thousand likes. A setlist question ahead of the Ventura show drew 195 comments on 1,482 likes. The band does not need a bigger audience to get a response. It needs to ask more often.",
        },
        {
          title: "Listener geography and tour routing already agree",
          detail:
            "Honolulu ranks third and Denver fourth among listening cities, corroborating both the origin story and the sold-out second Denver night. Every top-ten city is a market the band can play. Comparable acts carry large passive listener bases in cities they never route through.",
        },
      ],
      gaps: [
        {
          title: "Nothing on the calendar asks for anything",
          finding:
            "79 of the last 100 posts carry no call to action at all. Three point to an owned destination. Zero point to email, SMS, or the fan club. The recap format that earns three to six times normal reach currently asks the audience for nothing.",
          opportunity:
            "Attach a single owned-destination call to action to the recap format and the highest-reach asset on the calendar starts feeding the list. The fan club presale is referenced in captions twice without ever being linked.",
        },
        {
          title: "Static photo posts are consuming a third of the TikTok calendar",
          finding:
            "30 percent of TikTok output is photo or slideshow, running at 0.98 times the account median while video formats carry the account. Peer accounts run this format at zero to four percent.",
          opportunity:
            "Reallocating that share to the formats that already outperform is a scheduling decision, not a production cost. It is the cheapest available lift on the weakest channel.",
        },
        {
          title: "The email operation and the social calendar run as two separate businesses",
          finding:
            "The Hive side is well run. The social side never points at it. Across the last hundred posts there is no email signup, no SMS keyword, and no fan club link, so the two highest-reach channels the band owns are not connected to each other.",
          opportunity:
            "Connecting them is a content decision, not a platform migration. The recap format already earns three to six times normal reach, and it is the natural place to put the ask.",
        },
        {
          title: "The paid membership has no free tier above it",
          finding:
            "Presale access sits behind a $6.99 per month paid fan club with no free capture layer feeding it. Pepper charges $10 per month on the same platform, with venue early-entry and an annual shirt Iration does not bundle, and still runs a free list capture on top of it because the free list is what feeds the paid tier.",
          opportunity:
            "A free capture step between social reach and the paid tier converts attention the band is already earning into a list it can address for nothing.",
        },
      ],
      tensions: [
        {
          label: "Volume against format",
          brandSignal:
            "Twelve TikToks and twenty-five Instagram posts in thirty days. The band is publishing at genuine professional cadence.",
          audienceTruth:
            "TikTok per-follower engagement sits sixth of seven in the peer set. Output is not the variable that moves it.",
          direction:
            "Hold cadence, change allocation. Move the static-photo and lyric-clip share into formats the corpus already shows performing.",
        },
        {
          label: "Short-form orthodoxy against this account's data",
          brandSignal:
            "Standard short-form advice is to cut everything under fifteen seconds.",
          audienceTruth:
            "In this corpus the opposite holds. TikTok posts over sixty seconds run 1.33 times the account median. Posts under fifteen seconds run 0.56 times, the worst bucket on the platform. The effect survives removing the single viral outlier.",
          direction:
            "Build for length where the footage supports it. Do not cut the recap format down to fit a convention this account's own data contradicts.",
        },
        {
          label: "Documenting the show against recruiting for it",
          brandSignal:
            "The calendar reads as a tour diary: thank-yous, live clips, and announcements.",
          audienceTruth:
            "The tour diary is the strongest thing on the account. It is also the thing that stops working the moment the tour does.",
          direction:
            "Treat the recap as a format rather than a byproduct, so it can be produced in months without shows. That is the difference between a format and a byproduct.",
        },
      ],
      footnote:
        "Peer figures from Chartmetric, August 27, 2026. Social baselines pulled the same date. Bandsintown follower counts are publicly rendered and were read directly.",
    },

    {
      type: "contentAnalysis",
      number: "03",
      navLabel: "Content",
      title: "Content Analysis",
      intro:
        "One hundred posts, coded by format, timing, length, and call to action, then tested against every alternative explanation we could construct.",
      clientQuestion: {
        attribution: "The question this section answers",
        question:
          "The band is posting more than most of its peers. Why is TikTok still running below the genre floor, and what should change first?",
      },
      methodology: [
        { label: "Corpus", value: "Last 50 TikTok posts (May 2 to August 26, 2026) and last 50 Instagram posts (June 24 to August 25, 2026)" },
        { label: "Coding", value: "Every post classified by format, show timing, length bucket, and call-to-action type" },
        { label: "Transcription", value: "70 videos submitted for transcription, 70 returned" },
        { label: "Testing", value: "Every finding checked against recency, seasonality, tour-window, outlier, and confounding explanations" },
        { label: "Benchmark", value: "Last 25 TikTok and last 12 Instagram posts each from Rebelution, Stick Figure, Slightly Stoopid, Dirty Heads, Pepper, and The Movement" },
        { label: "Known limits", value: "Four, set out beneath this section" },
      ],
      corpusStats: [
        { label: "Posts Coded", value: "100", detail: "50 TikTok, 50 Instagram" },
        { label: "TikTok Median", value: "2,707", detail: "plays excluding the outlier, 4.4 percent of followers" },
        { label: "Instagram Median", value: "1,575", detail: "likes across the 50-post corpus, 0.50 percent" },
        { label: "Owned-Destination CTAs", value: "3 of 100", detail: "zero email, SMS, or fan club" },
        { label: "Posts With No CTA", value: "79 of 100", detail: "across both platforms" },
        { label: "Videos With Spoken Audio", value: "3 of 20", detail: "captions carry the narrative" },
        { label: "Videos Transcribed", value: "70", detail: "of 70 submitted" },
        { label: "Peer Accounts Benchmarked", value: "6", detail: "same window, same method" },
      ],
      mixHeading: "Format Mix Against The Peer Set",
      mixIntro:
        "How the TikTok calendar is allocated, measured against the same window for six reggae-rock peers.",
      mixColumnLabel: "Iration",
      mixRows: [
        {
          metric: "Static photo share of TikTok calendar",
          lolaAmour: "30%",
          benchmark: "0% to 4%",
          read: "behind",
          note: "Highest in the peer set by a wide margin. Rebelution, Dirty Heads, and Slightly Stoopid are effectively at zero.",
        },
        {
          metric: "Personality and behind-the-scenes share",
          lolaAmour: "9%",
          benchmark: "12% to 48%",
          read: "behind",
          note: "Lowest in the peer set. Slightly Stoopid runs 48 percent, Pepper 44 percent.",
        },
        {
          metric: "Live and recap share",
          lolaAmour: "35%",
          benchmark: "0% to 68%",
          read: "ahead",
          note: "Second only to Rebelution. This is the band's strongest allocation decision.",
        },
        {
          metric: "TikTok median plays per follower",
          lolaAmour: "4.4%",
          benchmark: "6.7% genre median",
          read: "behind",
          note: "Sixth of seven. Only Slightly Stoopid ranks lower.",
        },
        {
          metric: "Instagram median likes per follower",
          lolaAmour: "0.590%",
          benchmark: "0.384% genre median",
          read: "ahead",
          note: "Third of seven, at 1.54 times the genre median.",
        },
        {
          metric: "TikTok followers as share of Instagram followers",
          lolaAmour: "19.6%",
          benchmark: "19.6% genre median",
          read: "inline",
          note: "Exactly the genre median. Audience size is not the TikTok problem.",
        },
        {
          metric: "TikTok posts per 30 days",
          lolaAmour: "12",
          benchmark: "6 to 25",
          read: "inline",
          note: "Mid-pack cadence. Rebelution runs roughly double.",
        },
      ],
      mixFootnote:
        "Peer corpora pulled August 27, 2026. Instagram pagination limited peer samples to twelve posts each, so Instagram peer figures carry wider error bars than the TikTok figures.",
      findingsHeading: "Verdicts",
      findingsIntro:
        "Six findings, each tested against the sample and against the most plausible alternative explanation. One did not survive contact with the data and is published here with the correction rather than removed.",
      findings: [
        {
          id: "recap",
          title: "The post-show recap is the strongest repeatable format",
          verdict: "confirmed",
          confidence: "High on direction, moderate on magnitude",
          summary:
            "Post-show recaps are the top format on Instagram likes and the top format on TikTok among any with a meaningful sample. The separation is clearest after the tour ended, which is the opposite of what a tour-window artifact would produce.",
          evidence: [
            "August TikTok: recap median 8,070 plays against 1,262 for everything else, a 6.4x separation. The top four TikTok posts of the month are all recaps.",
            "August Instagram: recap median 3,808 likes against 1,268, a 3.0x separation.",
            "Pooled across the full window, recaps lead on Instagram likes at 2,108 (1.34x the account median) and on TikTok plays at 3,532 (1.28x).",
            "Recaps rose while everything else fell. TikTok non-recap median moved 4,578 to 2,135 to 3,068 to 1,262 across May through August. Recaps moved 10,464 to 2,390 to 6,000 to 8,070.",
          ],
          counterEvidence: [
            "Pooled TikTok lift drops to 1.14x once the single viral post is removed. The honest pooled number is modest.",
            "In June the effect disappears entirely: 1.12x on TikTok and 0.84x on Instagram, where recaps actually lost.",
            "In a matched two-week window, band-personality content beat recaps on both platforms.",
            "Monthly sample sizes are small, between two and eight posts.",
          ],
          examples: [
            { platform: "tiktok", id: "7669076452469460238", label: "THANK YOU VENTURA", date: "August 2026", stat: "13,464 plays, 4.9x account median", note: "A county fair, not an amphitheater. The format carries small rooms." },
            { platform: "tiktok", id: "7677095374665813261", label: "THANK YOU Super Girl Pro", date: "August 2026", stat: "8,877 plays, 88 shares", note: "Highest share rate in the corpus outside the single viral post." },
            { platform: "instagram", id: "DcXibnoCDre", label: "THANK YOU Super Girl Pro", date: "August 2026", stat: "8,160 likes, 154 comments", note: "Same creative as the TikTok above. One shoot, two platform wins." },
          ],
          pivot: {
            title: "Make the recap a production line rather than a byproduct",
            actions: [
              "Build a fixed recap template: capture list, edit structure, caption pattern, and turnaround window, so the format ships within 24 hours of every show",
              "Extend the format to non-show months using archive footage, rehearsal, and studio material, so the channel does not go quiet between tours",
              "Cut one recap per show for both platforms from a single shoot, which the Super Girl Pro pair already proves out",
              "Attach the owned-destination call to action here first, because this is the highest-reach asset on the calendar",
            ],
          },
        },
        {
          id: "capture",
          title: "The calendar does not feed the fan-data stack the band already pays for",
          verdict: "confirmed",
          confidence: "High",
          summary:
            "Three posts out of a hundred point to a destination Iration owns. None of them point to email, SMS, or the fan club. The email operation is already there and running well. Social just never sends anyone to it.",
          evidence: [
            "Owned-destination calls to action: 1 of 50 on TikTok, 2 of 50 on Instagram. All three point to the Shopify store.",
            "Email signups: zero. SMS keywords: zero. Fan club join links: zero.",
            "79 of 100 posts carry no call to action of any kind.",
            "Ticket calls to action in social captions point at venue domains, even though the band already routes its own tour-page links through iration.fm, which carries a Meta pixel.",
            "The IRATORS VIP presale is referenced in two captions as a password gate without ever being linked.",
          ],
          counterEvidence: [
            "Link-in-bio traffic is invisible to this method and may be carrying more load than the post-level data shows.",
            "The audience does punish selling with no framing around it. The one hard-sell merch post is the worst-performing Instagram post in the sample at 442 likes, 0.28 times the median.",
          ],
          examples: [
            { platform: "instagram", id: "DbBwrHfSbD7", label: "Merch post", date: "July 2026", stat: "442 likes, 0.28x median", note: "The cost of a hard sell with no framing. Worst post in the Instagram sample." },
            { platform: "instagram", id: "DaG549JvTQU", label: "Announce with a personal story", date: "July 2026", stat: "9,104 likes, 197 comments", note: "Top Instagram post in the window, and it is an announcement. Framing is the variable, not the ask." },
          ],
          pivot: {
            title: "Put the ask inside the formats that already earn reach",
            actions: [
              "Attach one owned-destination call to action to every recap post, routed through iration.fm so it is tracked and retargetable",
              "Run an SMS keyword in-caption on high-reach posts, the single tactic with proven results elsewhere in this genre",
              "Link the fan club rather than referencing it, and put a free capture step in front of the paid tier",
              "Keep the ask attached to a moment the audience already wants, which is what separates the 9,104-like announcement from the 442-like merch post",
            ],
          },
        },
        {
          id: "photo",
          title: "Static photo posts are the cheapest available lift on TikTok",
          verdict: "confirmed",
          confidence: "High",
          summary:
            "Just over half the TikTok calendar goes to two formats that never beat the account median, one of which the rest of the genre has abandoned.",
          evidence: [
            "Static photo and slideshow posts make up 30 percent of TikTok output, running at 0.98 times the account median and never above it.",
            "Peer accounts run this format between zero and four percent. Rebelution, Dirty Heads, and Slightly Stoopid post effectively none.",
            "A further 22 percent goes to lyric and song clips, the weakest video format at 0.77 times the account median.",
            "Together those two formats consume 52 percent of the TikTok calendar and neither beats the median.",
          ],
          counterEvidence: [
            "Photo posts are close to the account median rather than far below it, so this is reallocation upside rather than damage being done.",
            "Photo mode is cheap to produce, and the analysis cannot see whether it is serving a purpose that does not show up in plays.",
          ],
          pivot: {
            title: "Reallocate half the calendar without spending more on production",
            actions: [
              "Move the static-photo share into recap and live formats, which already outperform inside this account",
              "Test scenery and location footage with a lyric caption, the format carrying the highest-performing account in the genre",
              "Keep lyric clips but cut their share, and package them over live or location footage rather than static frames",
              "Hold cadence at twelve to fifteen TikToks per month while the allocation changes, so the variable being tested is format rather than volume",
            ],
          },
        },
        {
          id: "length",
          title: "Longer posts outperform shorter ones on this account",
          verdict: "confirmed",
          confidence: "Moderate",
          summary:
            "The standard short-form instruction to cut everything tight is contradicted by this account's own data, in both directions and after outlier removal.",
          evidence: [
            "TikTok posts over 60 seconds run at 1.33 times the account median.",
            "Posts under 15 seconds run at 0.56 times, the worst length bucket on the platform.",
            "The effect survives removing the single viral post: over-60s moves to 1.36x, under-15s to 0.57x.",
            "The 15-to-30 and 30-to-60 buckets sit close to the median at 1.06x and 1.08x.",
          ],
          counterEvidence: [
            "Length correlates with format. Recaps tend to be long and photo posts have no duration, so part of this is a format effect wearing a length costume.",
            "The under-15s bucket has only five posts, so that end of the finding is thin.",
            "Instagram durations were unavailable, so this holds for TikTok only.",
          ],
          examples: [
            { platform: "tiktok", id: "7644349485929237773", label: "Our favorite part is YOU", date: "June 2026", stat: "17,396 plays, 12.24 percent engagement rate", note: "Second-biggest post in the corpus, and it names no city. The emotional beat travels without the venue." },
          ],
          pivot: {
            title: "Build to the length the footage earns",
            actions: [
              "Stop trimming recaps to fit a fifteen-second convention this account's data contradicts",
              "Treat 30 to 90 seconds as the working range for recap and live content",
              "Reserve short cuts for formats that genuinely need them rather than applying the rule across the calendar",
            ],
          },
        },
        {
          id: "platform",
          title: "TikTok outperforms Instagram on this account",
          verdict: "refuted",
          confidence: "High",
          summary:
            "The apparent gap compared TikTok plays, an impression metric, against Instagram likes, an engagement metric. Instagram exposes no view count through this method, so no true like-for-like correction is available. Measured against each platform's own genre baseline, Instagram is the stronger relative performer.",
          evidence: [
            "The apparent 9x TikTok advantage compares plays to likes. It is not a valid comparison and should not be used.",
            "On likes per follower, the one metric both platforms report, TikTok runs 0.353 percent against Instagram's 0.500 percent.",
            "In absolute volume Instagram delivers 7.2 times more likes per post: 1,575 against 218.",
            "Against the peer set, Instagram ranks third of seven at 1.54 times the genre median while TikTok ranks sixth of seven at 0.66 times.",
          ],
          counterEvidence: [
            "TikTok converts the viewers it does reach at a high rate, with a median 7.9 percent of viewers liking a post.",
            "The genre as a whole does run better on TikTok, with a median 1.3x advantage on likes per follower. Iration is one of only two acts in the set where Instagram wins, and the only one where that is because TikTok is weak rather than because Instagram is exceptional.",
            "TikTok median plays sit at 4.5 percent of followers, so the platform is not functioning as a discovery engine on this account either. Neither channel is currently reaching much beyond the core.",
          ],
          pivot: {
            title: "Weight the work toward Instagram while fixing TikTok's allocation",
            actions: [
              "Treat Instagram as the primary channel for the first 90 days, because it is where the account already beats its genre",
              "Fix TikTok through format reallocation rather than volume or spend, since the follower count sits at exactly the genre median",
              "Report both platforms on per-follower rates rather than raw counts, so the comparison stays honest",
            ],
          },
        },
        {
          id: "outlier",
          title: "One post is distorting every TikTok number",
          verdict: "partial",
          confidence: "High on TikTok, refuted on Instagram",
          summary:
            "A single May post accounts for nearly half of all TikTok plays in the corpus. Instagram carries no equivalent single-post distortion, though it has its own limits: no view metric, and eight of fifty posts excluded for missing likes.",
          evidence: [
            "One TikTok post carries 190,151 plays, which is 48.2 percent of every play across all 50 posts and 59.8 percent of all likes.",
            "The top five TikTok posts account for 61.2 percent of plays. The TikTok mean of 7,894 is 2.9 times the median of 2,764, so the mean should never be quoted.",
            "Removing it drops the recap format lift from 1.28x to 1.14x.",
            "On Instagram the top post is 10.3 percent of corpus likes. Removing it moves the median from 1,575 to 1,485 and changes no format's rank.",
          ],
          counterEvidence: [
            "Removing the outlier barely moves the TikTok account median itself, from 2,764 to 2,707, so the baseline is stable even though the format lifts are not.",
            "The album released May 1 and May posts run 2.1 times the June-onward median, so release-week attention inflated the corpus ceiling. The Instagram window begins June 24 and contains no release-month posts, and the recap effect still holds there.",
          ],
          examples: [
            { platform: "tiktok", id: "7635188585888615694", label: "Huntington Beach", date: "May 2026", stat: "190,151 plays, 2,669 shares", note: "The ceiling case, landed in album release week. Useful as proof of what is possible, never as a baseline." },
          ],
          pivot: {
            title: "Report medians, publish both figures, and never plan against the outlier",
            actions: [
              "Quote median rather than mean on TikTok for the duration of the engagement",
              "Publish every TikTok format lift with its outlier-excluded figure alongside it",
              "Set targets against the outlier-excluded baseline so progress is measured against something reproducible",
            ],
          },
        },
      ],
      footnote:
        "Known limits. Instagram does not expose view counts, so likes are the Instagram proxy and no true like-for-like cross-platform comparison exists. Instagram durations were unavailable, so length analysis is TikTok only. Eight of fifty Instagram posts returned null likes and are excluded from likes math. The two windows are not matched: the TikTok window spans the whole tour, the Instagram window sits almost entirely after it. Findings the data did not support are published with the correction rather than removed.",
    },

    {
      type: "competitive",
      number: "04",
      navLabel: "Benchmark",
      title: "Competitive Benchmark",
      intro:
        "Six reggae-rock peers, measured on the same window and the same metrics, so the comparison is like for like.",
      thesis:
        "Iration sits mid-pack on audience size and above the genre on Instagram, but sixth of seven on TikTok per-follower engagement. The gap is format allocation, not audience size, because the TikTok-to-Instagram follower ratio is exactly the genre median.",
      competitors: [
        {
          name: "Stick Figure",
          metric: "6,988,882 monthly listeners",
          stats: [
            { label: "TikTok", value: "251.2K" },
            { label: "Instagram", value: "660.4K" },
            { label: "Plays / follower", value: "13.6%" },
            { label: "IG likes / follower", value: "2.33%" },
          ],
          lane: "The genre ceiling",
          strength:
            "The only act in the genre with a signature visual format. Forty percent of output is scenery and travel footage with a lyric caption and no band members on camera. His highest-performing posts are personal rather than musical.",
          gap: "No membership product and no owned data asset. The reach lands in a Facebook Group and a presale that leaks codes to aggregator sites.",
          implication:
            "The scenery-and-lyric format is the cheapest content in the genre to produce and it carries the best-performing account. It is directly testable for Iration at near-zero production cost.",
        },
        {
          name: "Rebelution",
          metric: "2,164,051 monthly listeners",
          stats: [
            { label: "Spotify followers", value: "984.4K" },
            { label: "Follower ratio", value: "45.5%" },
            { label: "TikTok", value: "183.7K" },
            { label: "Plays / follower", value: "7.0%" },
          ],
          lane: "Best fanbase quality",
          strength:
            "Discipline and saturation. Short live clips of seven to twenty-four seconds beat their own long recaps of the same show by eleven to twenty-six times, and they run eight posts around a single event in six days.",
          gap: "The right tactics land in a Mailchimp list. No membership layer, no fan club, no artist-run presale.",
          implication:
            "Their event-saturation model maps directly onto Iration's recap strength. Iration posts one recap per show where Rebelution posts several.",
        },
        {
          name: "Dirty Heads",
          metric: "3,599,079 monthly listeners",
          stats: [
            { label: "TikTok", value: "129.0K" },
            { label: "Instagram", value: "436.6K" },
            { label: "Top post", value: "332.3K plays" },
            { label: "Vs their median", value: "~50x" },
          ],
          lane: "Owned identity graph",
          strength:
            "The only first-party identity graph in the genre. A native fan-club app owned by the band entity, collecting email, phone, and device identity. Also the only act running true curiosity-gap hooks.",
          gap: "The infrastructure is ahead of the audience. The app carries nine ratings six months after launch, and 129,000 TikTok followers produce a median around 6,700 plays.",
          implication:
            "Proof that owned infrastructure without a top-of-funnel does not fill itself. Iration's paid fan club has the same shape and the same problem.",
        },
        {
          name: "Slightly Stoopid",
          metric: "3,329,480 monthly listeners",
          stats: [
            { label: "TikTok", value: "83.4K" },
            { label: "Plays / follower", value: "2.6%" },
            { label: "Rank in set", value: "7th of 7" },
            { label: "Destination events", value: "2" },
          ],
          lane: "Largest touring equity",
          strength:
            "Deepest touring equity in the genre and the highest personality content share at 48 percent. The formats they are running are the right ones.",
          gap: "Correct formats, dead distribution. A default newsletter block on the website and no SMS anywhere on the band's own site.",
          implication:
            "The cautionary case. Personality content alone does not fix a channel, and 3.3 million listeners feeding a default signup box is the same disconnect Iration has, at larger scale.",
        },
        {
          name: "Pepper",
          metric: "1,376,243 monthly listeners",
          stats: [
            { label: "TikTok", value: "26.4K" },
            { label: "Instagram", value: "208.8K" },
            { label: "Fan club", value: "$10/mo" },
            { label: "TikTok videos", value: "649" },
          ],
          lane: "Best capture funnel",
          strength:
            "The only act running a free-list capture and a paid membership together. A discount traded for a phone number at the top, a $10 per month fan club at the bottom, on the same platform Iration uses.",
          gap: "The smallest audience in the core set, and the funnel is doing more work than the reach behind it.",
          implication:
            "Pepper charges 43 percent more than Iration on the same platform, bundling venue early entry and an annual shirt, and still runs a free capture above it because the free list is what feeds the paid tier.",
        },
        {
          name: "The Movement",
          metric: "1,265,129 monthly listeners",
          stats: [
            { label: "TikTok", value: "7.5K" },
            { label: "Plays / follower", value: "22.3%" },
            { label: "Rank in set", value: "1st of 7" },
            { label: "Live-clip share", value: "60%" },
          ],
          lane: "Best capture UX, smallest reach",
          strength:
            "Cleanest email and SMS capture UX in the genre, and 60 percent live-clip output with a credited videographer on every post. Their top post is a fan brought on stage.",
          gap: "No membership, no presale gate, and an audience too small to move the genre.",
          implication:
            "Proof that cadence and craft alone do not scale in this genre. It also shows fan-as-subject content outperforming band-as-subject content, which Iration currently runs only as thank-you recaps.",
        },
      ],
      whitespace: [
        {
          title: "Nobody runs the free list into the paid membership",
          description:
            "The genre splits cleanly. Stick Figure, Rebelution, and The Movement have proper capture and nothing to join. Iration and Dirty Heads have real memberships and almost no top of funnel. Only Pepper runs both, at a fraction of everyone's scale.",
        },
        {
          title: "Almost nobody uses short-form to drive list signup",
          description:
            "One clear example exists in the entire peer set: a reel reading \"Text ENJOYTHERIDE to 619-202-8190 for early access\" that pulled 241,712 views. Two screenshot-gated ticket mechanics are the only other instances, and neither has anywhere permanent to bank the result.",
        },
        {
          title: "Nobody has a signature format except one act",
          description:
            "Six of seven accounts post interchangeable live clips and city thank-yous. No recurring bit, series, or character anywhere in the genre, and nobody is drawing on archive. Iration has twenty-two years of it.",
        },
      ],
      principles: [
        "Compare on per-follower rates rather than raw counts, because the accounts differ by an order of magnitude in size",
        "Treat Instagram as the channel where this account already beats its genre, and TikTok as the channel where allocation is the fixable variable",
        "Copy formats that are cheap to produce before formats that require new production budget",
        "Do not plan against a TikTok breakout. No act in this genre has produced one in the last three years, and the largest recent listener gain in the set came from a crossover feature rather than a platform moment",
      ],
      footnote:
        "Streaming figures from Chartmetric, August 27, 2026. Social figures pulled the same date from the last 25 TikTok and last 12 Instagram posts per act. Instagram pagination limited peer samples, so those figures carry wider error bars.",
    },

    {
      type: "audience",
      number: "05",
      navLabel: "Audience",
      title: "Audience",
      intro:
        "Who is actually on the other end of these channels, and what that means for where the work should go. The age framing is an inference from genre cohort timing, and it is the first thing to check against native analytics.",
      thesis:
        "A live-first audience in its thirties that never left Instagram and Facebook, and converts on access rather than discovery. Planning this around reaching teenagers on TikTok would be planning against the evidence.",
      metrosLabel: "Top Listening Markets",
      metros: [
        { name: "Los Angeles", tier: "primary" },
        { name: "San Diego", tier: "primary" },
        { name: "Honolulu", tier: "primary" },
        { name: "Denver", tier: "primary" },
        { name: "Phoenix", tier: "primary" },
        { name: "Sacramento", tier: "secondary" },
        { name: "Seattle", tier: "secondary" },
        { name: "Chicago", tier: "secondary" },
        { name: "Dallas", tier: "secondary" },
        { name: "New York", tier: "secondary" },
      ],
      personas: [
        {
          name: "The Tenured Irator",
          label: "Core",
          priority: "primary",
          profile:
            "Found the band between 2007 and 2012, likely in a California college town or through a friend's playlist. Most likely in their thirties now, and buys tickets the day they go on sale. Uses the music for mood rather than for taste signalling.",
          psychographics: [
            "Treats the catalog as personal history rather than current listening",
            "Values the band's consistency over reinvention",
            "Spends on experience, less on merch volume",
          ],
          motivations: [
            "Being first to a ticket, ahead of the general public",
            "Proof the band still knows who showed up early",
            "A night that reliably delivers what they came for",
          ],
          platforms: [
            { name: "Instagram", role: "Primary daily surface. Where they see and engage with the band." },
            { name: "Facebook", role: "Still active, unusually so for a music audience. Group and event surfaces matter here." },
            { name: "Email", role: "Opens it. This cohort is the reason an email list is worth building." },
          ],
          barriers: ["Ticket cost and fees", "Show timing against family schedules"],
          triggers: ["Presale access", "A hometown or nearby date announced", "Anniversary and archive content"],
          conversionGoal: "Onto the owned list, then into the presale, then into a repeat ticket buy",
        },
        {
          name: "The Festival Regular",
          label: "Growth",
          priority: "secondary",
          profile:
            "Buys the weekend rather than the band. Attends California Roots, Reggae Rise Up, or a destination event, and treats the lineup as a bundle. Knows three or four Iration songs and would know more with one good live moment.",
          psychographics: [
            "Loyal to the scene rather than to any single act",
            "Plans travel around one or two events a year",
            "Discovers new acts almost entirely through live exposure",
          ],
          motivations: [
            "The weekend as a whole, not any one headliner",
            "Being part of a scene rather than a fanbase",
            "A set worth telling people about afterwards",
          ],
          platforms: [
            { name: "Instagram", role: "Follows festivals and photographers more than bands. Reachable through tagged and reposted content." },
            { name: "TikTok", role: "Present but passive for this genre. Not where they discover reggae-rock." },
          ],
          barriers: ["Sees Iration as one of several similar acts", "No reason to follow directly after the set"],
          triggers: ["A standout live moment that circulates", "Being tagged or featured in a recap", "A destination or experience offer"],
          conversionGoal: "From festival attendee to a direct follow, then onto the owned list",
        },
        {
          name: "The Catalog Listener",
          label: "Latent",
          priority: "expansion",
          profile:
            "Reaches the band through playlists rather than through the band. Sits inside the gap between 1.5 million monthly listeners and 466,000 followers. Has never been asked for anything and does not know when the band is playing nearby.",
          psychographics: [
            "Passive listening, largely seasonal and weather-linked",
            "No relationship with the band as an entity",
            "Would attend a show if they knew about one",
          ],
          motivations: [
            "A song they already like, attached to something happening nearby",
            "Low-friction discovery that does not feel like marketing",
            "A reason to move from a playlist to a room",
          ],
          platforms: [
            { name: "Spotify", role: "Where the relationship currently begins and ends." },
            { name: "Instagram", role: "Not currently following. The addressable conversion." },
          ],
          barriers: ["Does not know the band tours", "No trigger has ever reached them"],
          triggers: ["A local date surfaced at the right moment", "A song they already know attached to a live clip"],
          conversionGoal: "From passive listener to follower, which is the cheapest audience growth available",
        },
      ],
      psychographics: [
        {
          label: "What the music is for",
          items: [
            "Mood regulation rather than genre connoisseurship. The scene describes itself as music for a good day or a bad day.",
            "Escape is the core function, and a meaningful minority of the community has started to question that.",
            "Consumption is seasonal and warm-weather linked, which the genre counter-programs with winter destination events.",
          ],
        },
        {
          label: "How they relate to the band",
          items: [
            "Personal and low-distance. Multiple acts in this genre run open question-and-answer sessions directly with fans.",
            "Consistency is rewarded over reinvention, which is the opposite of most genre marketing advice.",
            "Core fans resent support slots and want the band headlining.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "Answers direct questions at a far higher rate than they engage with promotion",
          platforms: ["Instagram"],
          implication:
            "The highest comment rate in the corpus came from a four-word personal post. A setlist question drew 195 comments. Conversation is cheap to generate here and is not being generated.",
        },
        {
          behavior: "Engages with post-show content more than pre-show content",
          platforms: ["Instagram", "TikTok"],
          implication:
            "The audience responds to having been there rather than to being sold a ticket. The commercial ask has to ride inside the recap, not replace it.",
        },
        {
          behavior: "Still resident on Facebook at a rate unusual for a music audience",
          platforms: ["Facebook", "Instagram"],
          implication:
            "Instagram and Facebook follower counts sit close together at roughly 315,000 and 314,000, which is unusual. Follower counts alone do not prove the audience is active there, so this is the second thing to check against native analytics, and it is the strongest available signal that an email and SMS list would be worth building.",
        },
      ],
      barriers: [
        {
          barrier: "Ticket cost is the most frequently stated barrier to attendance in this genre",
          response:
            "Lead with access and scarcity rather than discounting. Presale and early access are what this audience actually values.",
        },
        {
          barrier: "The genre carries reputational baggage the audience is aware of and jokes about",
          response:
            "Personality and craft content travels where scene-signalling content does not. Keep the humor self-aware rather than earnest.",
        },
        {
          barrier: "Sameness fatigue across the genre",
          response:
            "A signature format is the answer, and the format space in this genre is genuinely open. Nobody but Stick Figure owns one.",
        },
        {
          barrier: "No trigger currently reaches the passive catalog listener",
          response:
            "This is the owned-channel argument. A list is the only way to reach someone who is not following.",
        },
      ],
      triggers: [
        {
          trigger: "Presale and early access",
          implication:
            "The band already gates presales behind a paid tier. Adding a free capture step in front of it converts reach into an addressable list.",
        },
        {
          trigger: "A live moment they can see themselves in",
          implication:
            "The Movement's single best post in the window was a fan brought on stage, which makes fan-as-subject worth testing. Iration currently runs it only as thank-you recaps.",
        },
        {
          trigger: "Anniversary and archive material",
          implication:
            "Twenty-two years of touring history is unused inventory. Worth testing rather than assuming, which is why it is scoped as one of three sequential format tests.",
        },
        {
          trigger: "A nearby date surfaced at the right moment",
          implication:
            "Requires knowing who is near which market, which is a list problem rather than a content problem.",
        },
      ],
      fanQuotes: [
        {
          quote:
            "Iration never disappoints. They play what the fans want and they surprise you with concert versions that don't take away from the original.",
          source: "Bandsintown fan review, Costa Mesa CA, June 2026",
          insight: "Consistency is the thing being praised, not novelty.",
        },
        {
          quote:
            "I won a VIP giveaway. I was able to attend their sound check, meet the band, and got some cool swag.",
          source: "Bandsintown fan review, Houston TX, May 2026",
          insight:
            "Direct evidence that the existing Hive sweepstakes machine converts and produces goodwill. It is running without a content layer feeding it.",
        },
        {
          quote:
            "Iration is in my top three of all time. The only thing I would have changed is Iration being the headliner.",
          source: "Bandsintown fan review, Nampa ID, July 2025",
          insight: "Core fans want the band framed as the main event.",
        },
        {
          quote:
            "A big part of Cali reggae's popularity is tied to how it simplifies or repackages reggae through a coastal, easy to digest lens.",
          source: "Reddit, r/reggae genre discussion, 2026",
          insight:
            "The genre's critics and its fans agree on the diagnosis. Self-aware content lands better than earnest scene-signalling.",
        },
      ],
      fanQuotesLabel: "What Fans Actually Say",
      similarArtists: [
        "Rebelution",
        "Stick Figure",
        "Slightly Stoopid",
        "Dirty Heads",
        "Pepper",
        "Tribal Seeds",
        "The Movement",
      ],
      genres: ["Reggae Rock", "Cali Reggae", "Reggae Fusion", "Surf Rock"],
      platformSignals: [
        { platform: "Instagram", note: "314,901 followers. Ranks third of seven in the peer set on per-follower engagement. The primary channel." },
        { platform: "TikTok", note: "61,700 followers. Sixth of seven on per-follower engagement, but the follower ratio is exactly the genre median. Allocation problem." },
        { platform: "Facebook", note: "Roughly 314,000 followers, unusually close to Instagram. Indicates an older core that never left." },
        { platform: "Spotify", note: "1,539,087 monthly listeners against 466,037 followers. Roughly a million listeners the band cannot currently address." },
      ],
      footnote:
        "Listening market data from Chartmetric, June to August 2026. Age framing is an inference from genre cohort timing rather than published demographic data, and should be validated against the band's own platform analytics in the first thirty days. No gender split is published for this genre and none is asserted here.",
    },

    {
      type: "vertical",
      number: "06",
      navLabel: "The Work",
      title: "Social Media Management",
      philosophy:
        "Hold the cadence the band already sustains. Change what fills it, and give the reach somewhere to go.",
      intro:
        "Four workstreams. The first three are the social retainer. The fourth is the email and SMS module, scoped here and priced separately so it can be approved on its own timing.",
      subBlocks: [
        {
          label: "Workstream 01",
          title: "Channel Management",
          objective:
            "Run the band's social channels as one managed operation: a planned calendar, consistent packaging, and same-week responsiveness.",
          strategy:
            "Instagram leads the effort because it is where the account already beats its genre. TikTok runs in parallel on a reallocated calendar rather than a higher volume. Cadence holds at what the band already sustains.",
          components: {
            heading: "What we run",
            items: [
              "Monthly content calendar built against the format findings in section 03, approved by the band before the month starts",
              "Editing and packaging of footage the band and its videographers already capture",
              "Publishing and scheduling across every managed channel, including Reels and Stories",
              "Community management and comment response on managed channels within one business day",
              "Caption and hook writing, which carried the narrative in 17 of the 20 videos sampled for speech",
              "Asset library and archive organization, so twenty-two years of footage becomes usable inventory",
            ],
          },
          kpis: [
            "TikTok median plays per follower moving off the 4.4 percent genre-floor baseline",
            "Instagram median likes per follower holding above the 0.590 percent baseline",
            "Static photo share of the TikTok calendar reduced from 30 percent",
            "Response rate and time on managed channels",
          ],
          timeline: "Calendar live from week 3, then continuous.",
        },
        {
          label: "Workstream 02",
          title: "Format Development",
          objective:
            "Turn the recap from a byproduct of touring into a repeatable production line, and find one signature format that is Iration's rather than the genre's.",
          strategy:
            "The recap is the proven asset and the priority. Three further formats are worth testing, each cheap to produce and each already working somewhere in the peer set.",
          tactics: [
            "Build and document a fixed recap template: capture list, edit structure, caption pattern, and a 24-hour turnaround",
            "Extend the recap to non-show months so the channel does not go quiet between tours",
            "Cut one shoot into assets for both platforms, which the Super Girl Pro pair already proves",
            "Test event saturation on major dates, running several posts across a few days rather than one recap",
            "Raise personality content from 9 percent, the lowest share in the peer set, toward the genre range",
            "Run a structured test of the scenery-and-lyric format, the archive format, and the fan-as-subject format, one at a time with a clean read on each",
          ],
          examples: [
            "The Ventura County Fair recap reached 4.9 times the account median from a small room, which is the case for the format traveling beyond marquee shows",
            "A four-word personal Instagram post produced the highest comment rate in the corpus, which is the case for personality content",
            "The single non-recap post that beat recaps in a matched window was a sound-check bit at 8,151 plays, three times the June median, and it was never repeated",
          ],
          timeline: "Recap template in weeks 1 to 4. Format tests run sequentially from week 5.",
        },
        {
          label: "Workstream 03",
          title: "Fan Capture Layer",
          objective:
            "Give the reach somewhere to land. Move owned-destination calls to action from three posts in a hundred to a standing part of the highest-performing formats.",
          strategy:
            "The ask rides inside content the audience already wants rather than replacing it. An announcement framed with a personal story is the top Instagram post in the window at 9,104 likes. A merch post with no framing is the worst at 442. Routing runs through iration.fm, which the band already controls, so social traffic is tracked and retargetable.",
          components: {
            heading: "What gets built",
            items: [
              "One owned-destination call to action attached to every recap post, routed through iration.fm",
              "An SMS keyword run in-caption on high-reach posts, the one tactic with demonstrated results elsewhere in this genre",
              "A free capture step placed in front of the paid fan club, so the paid tier has a funnel above it",
              "Social ticket links routed through iration.fm, matching what the tour page already does, so social traffic lands in the same tracked layer",
              "A monthly read on how much capture social is actually driving, which nothing currently measures",
            ],
          },
          kpis: [
            "Owned-destination CTA coverage on recap posts, from a 0 percent baseline",
            "New captures per month attributable to social",
            "Click-through rate on iration.fm routed links",
            "Free-tier to paid-tier conversion once the free step exists",
          ],
          timeline: "Routing live week 3. CTA on every recap from week 4.",
        },
        {
          label: "Module",
          title: "Email And SMS On Hive",
          budget: "$2,000/mo",
          objective:
            "Take the weekly running of the email and SMS channel off the band's plate, without changing how it works.",
          strategy:
            "Iration already runs Hive well. The flows are built, the sweepstakes machine works, and the list is real. This is not a rebuild and not a migration. It is Crowd Control absorbing the execution: building and sending campaigns, keeping segments and flows current, and running presale and announce sends against the calendar the band sets. We work directly with Hive's leadership, which helps when something needs escalating.",
          components: {
            heading: "What the module covers",
            items: [
              "Campaign build, copy, scheduling, and send",
              "Segment and flow upkeep against the structure already in place",
              "Presale, announce, and on-sale sends timed to the tour calendar",
              "The SMS keyword the social capture layer points at",
              "List hygiene and deliverability monitoring",
              "Monthly reporting on list growth, engagement, and revenue",
            ],
          },
          kpis: [
            "Sends shipped on schedule without band-side production time",
            "List growth attributable to the social capture layer",
            "Presale conversion by market",
            "Revenue per send, tracked against the current baseline",
          ],
          timeline: "Access and handover in weeks 1 to 2. Crowd Control running sends from week 3.",
        },
      ],
      footnote:
        "Content creation beyond packaging existing footage is billed hourly. Media spend and creator fees are separate and carry a 15 percent management fee where Crowd Control administers them.",
    },

    {
      type: "targets",
      number: "07",
      navLabel: "Targets",
      title: "Targets And Measurement",
      intro:
        "Baselines measured from the corpus in section 03, with directional targets for the first 90 days. Every baseline here is reproducible from the same method.",
      targets: [
        {
          metric: "Owned-destination CTA coverage on recap posts",
          baseline: "0%",
          target: "100%",
          window: "By day 30",
          rationale:
            "The recap format earns three to six times normal reach and currently asks for nothing. This is the single highest-leverage change available and it costs nothing to make.",
          measurement: "Manual audit of every recap post published in the month",
          featured: true,
        },
        {
          metric: "TikTok static photo share of calendar",
          baseline: "30%",
          target: "Under 10%",
          window: "By day 60",
          rationale:
            "Peer accounts run this format between zero and four percent. Reallocation is a scheduling decision rather than a production cost.",
          measurement: "Format coding of the published calendar, same method as section 03",
        },
        {
          metric: "TikTok median plays per follower",
          baseline: "4.4%",
          target: "6.7%",
          window: "By day 90",
          rationale:
            "Moving toward the 6.7 percent genre median. Sixth of seven in the peer set today, and the follower ratio is exactly the genre median, so this is an allocation problem rather than an audience-size problem.",
          measurement: "Rolling 30-post median, outlier-excluded, reported monthly",
        },
        {
          metric: "Instagram median likes per follower",
          baseline: "0.590%",
          target: "Hold 0.590%",
          window: "Ongoing",
          rationale:
            "Hold the current rate while the TikTok calendar changes underneath it. Already 1.54 times the genre median and third of seven, so the job here is protecting a strength rather than growing it.",
          measurement: "Rolling 30-post median, reported monthly",
        },
        {
          metric: "List signups attributable to social",
          baseline: "0",
          target: "Tracked",
          window: "Baseline by day 30",
          rationale:
            "Establish the number, then grow against it. None exists today because nothing on the calendar points at an owned destination, so the first job is making it measurable.",
          measurement: "iration.fm click-through and Hive capture attribution",
        },
        {
          metric: "Personality and behind-the-scenes share of TikTok calendar",
          baseline: "9%",
          target: "20 to 30%",
          window: "By day 90",
          rationale:
            "The lowest share in the peer set, where comparable acts run between 12 and 48 percent. Iration's one sound-check bit reached 8,151 plays, three times the June median, and was never repeated.",
          measurement: "Format coding of the published calendar",
        },
      ],
      measurementPrinciples: [
        "Report medians rather than means, because one TikTok post carries 48 percent of the corpus and the mean is not meaningful",
        "Report every TikTok figure with its outlier-excluded value alongside it from month one, since one post carries 48 percent of the sample used to set these baselines",
        "Compare on per-follower rates rather than raw counts, so peer comparison stays valid across accounts of different sizes",
        "Re-run the section 03 coding method monthly, so progress is measured against the same instrument that set the baseline",
        "Treat any claim the data cannot support as unproven and say so, including in the monthly report",
      ],
      disclaimer:
        "These are directional targets used to focus the work and to make progress measurable. They are not guarantees of outcome. Platform distribution, release timing, and touring activity all move these numbers independently of the work.",
      footnote:
        "Baselines are drawn from the corpus described in section 03 and will be re-established against the band's own native analytics once access is granted, which will be more accurate than public post metrics.",
    },

    {
      type: "timeline",
      number: "08",
      navLabel: "Timeline",
      title: "First 90 Days",
      intro:
        "Four phases. Access and baseline first, because the public-data baselines in this document are a starting point rather than the real thing.",
      weeks: [
        { index: 1, label: "W1", dates: "Sep 8" },
        { index: 2, label: "W2", dates: "Sep 15" },
        { index: 3, label: "W3", dates: "Sep 22" },
        { index: 4, label: "W4", dates: "Sep 29", highlight: true, note: "Template live" },
        { index: 5, label: "W5", dates: "Oct 6" },
        { index: 6, label: "W6", dates: "Oct 13", highlight: true, note: "4 shows, Oct 14-18" },
        { index: 7, label: "W7", dates: "Oct 20" },
        { index: 8, label: "W8", dates: "Oct 27" },
        { index: 9, label: "W9", dates: "Nov 3" },
        { index: 10, label: "W10", dates: "Nov 10" },
        { index: 11, label: "W11", dates: "Nov 17" },
        { index: 12, label: "W12", dates: "Nov 24", highlight: true, note: "90-day review" },
      ],
      workstreams: [
        {
          name: "Access and Baseline",
          cells: [
            { weekIndex: 1, intensity: "high", milestone: true, label: "Kickoff" },
            { weekIndex: 2, intensity: "high" },
            { weekIndex: 3, intensity: "medium", milestone: true, label: "Baseline set" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 8, intensity: "low" },
            { weekIndex: 12, intensity: "medium", milestone: true, label: "Review" },
          ],
        },
        {
          name: "Channel Management",
          cells: [
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "high", milestone: true, label: "Calendar live" },
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
          name: "Recap Production Line",
          cells: [
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "Template" },
            { weekIndex: 6, intensity: "high", milestone: true, label: "October run" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Format Testing",
          cells: [
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", milestone: true, label: "Test 1" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium", milestone: true, label: "Test 2" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium", milestone: true, label: "Test 3" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high", milestone: true, label: "Read-out" },
          ],
        },
        {
          name: "Fan Capture Layer",
          cells: [
            { weekIndex: 2, intensity: "medium" },
            { weekIndex: 3, intensity: "high", milestone: true, label: "Link routing" },
            { weekIndex: 4, intensity: "high", milestone: true, label: "Recap CTAs" },
            { weekIndex: 5, intensity: "medium" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "high", milestone: true, label: "Free tier live" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Reporting",
          cells: [
            { weekIndex: 4, intensity: "medium", milestone: true, label: "Month 1" },
            { weekIndex: 8, intensity: "medium", milestone: true, label: "Month 2" },
            { weekIndex: 12, intensity: "high", milestone: true, label: "Month 3" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Phase 1. Access and baseline",
          items: [
            "Kickoff with the band and the digital vendor, confirming who owns and administers each of the six fan-data accounts",
            "Access to Instagram, TikTok, native analytics, iration.fm, and read access to Hive",
            "Asset and archive inventory: what footage exists, where it lives, and who shoots it",
            "Re-establish the section 03 baselines against native analytics, which will be more accurate than public metrics",
          ],
        },
        {
          weekIndex: 4,
          title: "Phase 2. Format discipline",
          items: [
            "Recap template documented and shipped, with a 24-hour turnaround standard",
            "First managed calendar live, with static photo share cut and the reallocation made explicit",
            "Owned-destination call to action attached to every recap post, routed through iration.fm",
            "The October 14 to 18 run, four shows in five days, worked as the first event-saturation block",
            "Month 1 report against the baselines in section 07",
          ],
        },
        {
          weekIndex: 8,
          title: "Phase 3. Testing and capture",
          items: [
            "Format tests running sequentially, one at a time, so each gets a clean read",
            "Free capture step live in front of the paid fan club",
            "SMS keyword running in-caption on high-reach posts",
            "Read-out on what the October block produced against the recap baseline",
          ],
        },
        {
          weekIndex: 12,
          title: "Phase 4. Read-out and next quarter",
          items: [
            "Format test read-out: which of the three tested formats earned a place on the calendar",
            "90-day report against every baseline set in section 07",
            "Recommendation on whether the email and SMS module should be activated, based on what capture the social layer actually produced",
            "Quarter two plan, built on measured results rather than on the assumptions in this document",
          ],
        },
      ],
      footnote:
        "Dates assume a September 8, 2026 start and shift with the actual start date. Four shows fall inside the window across five days: Big Fresno Fair on October 14, Hollywood Palladium on October 15, Flagstaff on October 17, and Tucson on October 18. That cluster is the first full test of the event-saturation model.",
    },

    {
      type: "pricing",
      number: "09",
      navLabel: "Investment",
      title: "Investment",
      intro:
        "Crowd Control's standard rate card. Social management is one retainer covering every channel the band runs. Email and SMS is a separate monthly module, and content creation is hourly so it only costs what it is used for.",
      ccdNote:
        "Retainers cover Crowd Control's management time. Content creation is billed hourly against approved briefs. Any managed media spend or creator fee carries a 15 percent management fee and is billed at cost on top of it.",
      breakdownLabel: "What the retainer covers",
      deployableLabel: "Monthly output",
      tiers: [
        {
          label: "Retainer",
          budget: "$5,000/mo",
          name: "SOCIAL MANAGEMENT",
          tagline: "Every channel the band runs, plus community management.",
          deployable:
            "Managed calendar, editing and packaging from footage the band already has, publishing, community management, and a monthly report against the baselines in section 07.",
          featured: true,
          breakdown: [
            { vertical: "Channel management, calendar, and publishing", amount: "Included" },
            { vertical: "Editing and packaging of existing footage", amount: "Included" },
            { vertical: "Community management and comment response", amount: "Included" },
            { vertical: "Monthly reporting", amount: "Included" },
          ],
          feeBreakdown: {
            retainer: "$5,000",
            retainerDetail: "Per month, covering social media management and community management across all channels.",
            mediaManagement: "15%",
            mediaManagementDetail: "On any media spend or creator fee Crowd Control manages, billed at cost plus the fee.",
            mediaManagementLabel: "Managed spend fee",
          },
        },
        {
          label: "Module",
          budget: "$2,000/mo",
          name: "EMAIL AND SMS",
          tagline: "We run the Hive account the band already runs well.",
          deployable:
            "Campaign build and send, segment maintenance, flow upkeep, presale and announce sends, and a monthly report on list growth and revenue.",
          breakdown: [
            { vertical: "Campaign build, scheduling, and send", amount: "Included" },
            { vertical: "Segment and flow upkeep", amount: "Included" },
            { vertical: "Presale and announce sends", amount: "Included" },
            { vertical: "Monthly reporting", amount: "Included" },
          ],
          feeBreakdown: {
            retainer: "$2,000",
            retainerDetail: "Per month, on top of the social retainer. Hive platform fees are billed directly by Hive.",
            mediaManagement: "15%",
            mediaManagementDetail: "On any media spend or creator fee Crowd Control manages.",
            mediaManagementLabel: "Managed spend fee",
          },
        },
      ],
      addOns: [
        {
          name: "Content creation",
          subtitle: "Billed hourly against approved briefs",
          budget: "$100/hr",
          description:
            "Original creative produced by Crowd Control rather than packaged from what the band already shoots. Quoted per brief before any work starts, so it stays a decision rather than a standing cost.",
        },
        {
          name: "Managed spend and creator fees",
          subtitle: "Applied to spend Crowd Control administers",
          budget: "15%",
          description:
            "Paid media budget and creator fees are billed at cost with a 15 percent management fee. No spend is required for either retainer to work.",
        },
      ],
      footnote:
        "Billed monthly with a three-month initial term, then month to month with 30 days notice. Not included: paid media budget, creator and influencer fees, PR, DSP editorial pitching, tour marketing, release strategy, merchandise, and web development. Final invoicing and termination terms move into the signed agreement.",
    },
  ],
};
