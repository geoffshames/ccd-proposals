import type { StrategyPlanData } from "../plan-context";

export const miyaviPlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/miyavi/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "miyavi-ja", label: "日本語", code: "JA" }],

  cover: {
    label: "U.S. Growth Plan",
    title: "MIYAVI",
    subtitle: "Four workstreams to turn the people who already know MIYAVI in the United States into fans he can reach directly: U.S. fan data, sync audience conversion, a short-form restart, and a data-led West Coast return.",
    partnership: "A joint offering from Transparent Arts and Crowd Control Digital",
    prepared: "Transparent Arts and Crowd Control Digital",
    date: "October 2026",
    backgroundImage: "/images/miyavi/miyavi-hero.jpg",
    partnerLogos: [
      { src: "/images/kiiikiii/ta-logo-white.png", alt: "Transparent Arts", height: 36 },
      { src: "/brand/CC-LOGO-2024-WHITE.png", alt: "Crowd Control Digital", height: 22 },
    ],
  },

  approveCta: {
    label: "Approve",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY TRANSPARENT ARTS AND CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. The Opportunity
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Opportunity",
      title: "The Opportunity",
      subtitle: "The United States is MIYAVI's largest listening market, and his profile there has never been broader: Arcane, Prime Video, Fender, Gucci, UNHCR. What is missing is a direct line from that attention to him.",
      body: [
        "MIYAVI reaches roughly 709,000 Spotify listeners a month, and the U.S. is his No. 1 market at 123,000. Around him sits a mainstream profile few guitarists have: \"Snakes\" with PVRIS from Arcane, past 116 million Spotify streams; the opening theme of the anime Ninja vs. Gokudo, streaming worldwide on Prime Video; a featured role opposite Jason Momoa and Dave Bautista in The Wrecking Crew on Prime Video this year; a Fender signature Telecaster; campaigns for Gucci, Moncler and BMW; and UNHCR Goodwill Ambassador since 2017. Instagram, at 952,000 followers, is the size of an arena act.",
        "The opportunity is conversion. Each of those moments sends new people toward MIYAVI, and today there is no U.S. fan list to catch them, no active short-form channel aimed at them, and no ask that turns a viewer into someone he can reach on release day or tour day. This document proposes four workstreams to build that machine, each with a test budget, a success metric, and a rule for when to scale and when to stop.",
      ],
      supports: {
        heading: "The Four Workstreams",
        items: [
          "U.S. fan data: an owned email and SMS list, built city by city, that MIYAVI's team holds outright",
          "Sync audience conversion: paid and creator work aimed at the Arcane, anime, gaming and Prime Video audiences that already found him",
          "Short-form restart: TikTok back in his own voice, with native formats built for U.S. discovery and clipping behind them",
          "West Coast return: a city-level demand map, so the next U.S. dates are booked into rooms the data says will sell",
        ],
      },
      goals: {
        heading: "What We Commit To",
        items: [
          "A U.S. fan list with a stated cost per fan and a 90-day size target",
          "Spotify follower growth, measured against a set baseline in a set window",
          "U.S. audience growth on Instagram and TikTok, with TikTok publishing restored",
          "A West Coast demand map with sign-ups by city, ready for routing and a promoter conversation",
          "Streaming performance is reported and worked, never promised. Nobody can honestly forecast it",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Spotify Listeners and Followers, Last Two Years",
          subtitle: "Arcane Season 2 took listeners from 861K to 2.1M in seven weeks. The wave passed without a capture mechanism in place, and only about 5,000 followers were added during it.",
          series: [
            {
              name: "Monthly listeners",
              points: [
                { x: "10/1/24", y: 861267 }, { x: "11/1/24", y: 859893 }, { x: "12/1/24", y: 1672614 }, { x: "12/20/24", y: 2098683 }, { x: "1/1/25", y: 1865730 }, { x: "2/1/25", y: 1493280 }, { x: "3/1/25", y: 1247176 }, { x: "4/1/25", y: 1096940 }, { x: "5/1/25", y: 1079345 }, { x: "6/1/25", y: 1022517 }, { x: "7/1/25", y: 944264 }, { x: "8/1/25", y: 906267 }, { x: "9/1/25", y: 918097 }, { x: "10/1/25", y: 904588 }, { x: "11/1/25", y: 919773 }, { x: "12/1/25", y: 944511 }, { x: "1/1/26", y: 885948 }, { x: "2/1/26", y: 867727 }, { x: "3/1/26", y: 837765 }, { x: "4/1/26", y: 797953 }, { x: "5/1/26", y: 775412 }, { x: "6/1/26", y: 755281 }, { x: "7/1/26", y: 720559 }, { x: "8/1/26", y: 713579 }, { x: "9/1/26", y: 699202 }, { x: "10/14/26", y: 709361 },
              ],
            },
            {
              name: "Followers",
              points: [
                { x: "10/1/24", y: 306674 }, { x: "11/1/24", y: 308835 }, { x: "12/1/24", y: 310721 }, { x: "12/20/24", y: 312030 }, { x: "1/1/25", y: 312732 }, { x: "2/1/25", y: 314248 }, { x: "3/1/25", y: 315218 }, { x: "4/1/25", y: 316883 }, { x: "5/1/25", y: 318250 }, { x: "6/1/25", y: 319645 }, { x: "7/1/25", y: 320647 }, { x: "8/1/25", y: 321701 }, { x: "9/1/25", y: 322612 }, { x: "10/1/25", y: 323344 }, { x: "11/1/25", y: 323987 }, { x: "12/1/25", y: 324858 }, { x: "1/1/26", y: 326186 }, { x: "2/1/26", y: 327197 }, { x: "3/1/26", y: 328314 }, { x: "4/1/26", y: 329404 }, { x: "5/1/26", y: 330465 }, { x: "6/1/26", y: 331859 }, { x: "7/1/26", y: 333018 }, { x: "8/1/26", y: 334186 }, { x: "9/1/26", y: 335348 }, { x: "10/14/26", y: 336805 },
              ],
            },
          ],
          markers: [
            { x: "12/20/24", label: "ARCANE S2" },
            { x: "1/1/26", label: "SWEET DISASTER" },
          ],
          tall: true,
          source: "Chartmetric, Oct 2024 to Oct 14 2026",
        },
      ],
      footnote: "Data pulled October 14 and 15, 2026 unless dated otherwise. Sources: Chartmetric and public platform data.",
    },

    // ===================================================================
    // 02. Where MIYAVI Stands
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Position",
      title: "Where MIYAVI Stands",
      philosophy: "Four findings from the data, and what each one opens up.",
      intro: "Everything below comes from consumption and audience data pulled October 15, 2026. The comparison set is the Japanese rock and guitar-led acts with real international audiences, plus the U.S. guitar acts whose fans overlap with his.",
      subBlocks: [
        {
          label: "A",
          title: "One Sync Carries the Catalog",
          objective: "\"Snakes\" is the front door for most new listeners. The rest of the catalog has never been put in front of the people who come through it.",
          strategy: "\"Snakes\" has 116.8 million Spotify streams, almost three times the next track, and it still does about a million a month five years after release. When Arcane Season 2 premiered in November 2024, \"Snakes\" jumped from 1.6 million monthly streams to 4.4 million and then 6.4 million, and monthly listeners went from 861,000 to 2.1 million. Every other track in the top fifteen stayed flat through the same weeks, and a new album released that October did not pick up the traffic. That is the clearest possible proof of demand: millions of people actively chose a MIYAVI song in a single quarter. It is also the clearest case for a capture layer, because the next sync moment, whether an anime opening, a Prime Video role or a game, will send the same kind of wave.",
          charts: [
            {
              kind: "bars",
              title: "\"Snakes\": Monthly Spotify Streams",
              subtitle: "The Arcane Season 2 premiere roughly quadrupled monthly streams. The track has settled near one million a month.",
              unit: "M",
              series: [
                {
                  name: "Monthly streams (M)",
                  points: [
                    { x: "Oct 24", y: 1.59 }, { x: "Nov 24", y: 4.4 }, { x: "Dec 24", y: 6.44 }, { x: "Jan 25", y: 4.5 }, { x: "Feb 25", y: 2.8 }, { x: "Apr 25", y: 2.2 }, { x: "Oct 25", y: 1.65 }, { x: "Oct 26", y: 1.04 },
                  ],
                },
              ],
              highlightX: ["Dec 24"],
              source: "Chartmetric track data, Oct 2024 to Oct 2026",
            },
            {
              kind: "hbars",
              title: "Top Tracks by All-Time Spotify Streams",
              unit: "M",
              series: [
                {
                  name: "Streams (M)",
                  points: [
                    { x: "Snakes (Arcane)", y: 116.8 },
                    { x: "Flashback", y: 40.9 },
                    { x: "Bliss on Mushrooms", y: 10.6 },
                    { x: "Other Side", y: 8.7 },
                    { x: "Butterfly", y: 5.8 },
                    { x: "I'm So", y: 5.5 },
                    { x: "Samurai 45", y: 5.4 },
                    { x: "Running In My Head", y: 3.4 },
                  ],
                },
              ],
              highlightX: ["Snakes (Arcane)"],
              source: "Chartmetric, Oct 15 2026",
            },
          ],
        },
        {
          label: "B",
          title: "The U.S. Is the Largest Market",
          objective: "One listener in six is American, and the U.S. carries more listeners than Japan. It is also the market with the least working on it today.",
          strategy: "The U.S. leads every other country on Spotify with 122,900 monthly listeners, ahead of Japan at 74,700, and it is 16 to 17 percent of his TikTok and YouTube audiences. Los Angeles is a top-three Instagram city for him. Over the last year the U.S. also moved the most: down 32 percent as the Arcane wave faded, while Brazil grew 23 percent on its own. Nothing about that decline is a verdict on demand. It is what happens to a sync audience when no U.S. release, tour date or capture campaign follows it, and it is the most recoverable number on this page.",
          charts: [
            {
              kind: "hbars",
              title: "Top Markets by Monthly Listeners",
              series: [
                {
                  name: "Listeners",
                  points: [
                    { x: "United States", y: 122931 },
                    { x: "Japan", y: 74681 },
                    { x: "Mexico", y: 68100 },
                    { x: "Philippines", y: 65187 },
                    { x: "United Kingdom", y: 60771 },
                    { x: "Brazil", y: 43652 },
                    { x: "Indonesia", y: 37335 },
                    { x: "Germany", y: 37320 },
                  ],
                },
              ],
              highlightX: ["United States"],
              source: "Chartmetric, Oct 15 2026",
            },
            {
              kind: "hbars",
              title: "U.S. Share of Audience by Platform",
              unit: "%",
              series: [
                {
                  name: "U.S. share",
                  points: [
                    { x: "Spotify", y: 17.3 },
                    { x: "TikTok", y: 16.5 },
                    { x: "YouTube", y: 16.0 },
                    { x: "Instagram", y: 11.2 },
                  ],
                },
              ],
              note: "Instagram's 11.2 percent is still about 106,000 U.S. followers, the largest U.S. audience he has on any single platform.",
              source: "Chartmetric audience data, Oct 15 2026",
            },
          ],
        },
        {
          label: "C",
          title: "An Arena-Size Instagram, an Unused TikTok",
          objective: "MIYAVI's platform mix is lopsided in a way his peers' is not, and the lopsided part is the U.S. discovery channel.",
          strategy: "On Spotify, MIYAVI sits in the middle band of his comparison set, between ATARASHII GAKKO! and coldrain. On Instagram he is arena-sized: 952,000 followers, more than Polyphia, HYDE or Ichika Nito. On TikTok, where non-followers in the U.S. find guitar music, he has 120,000 followers and his account has not posted since May 2025. The acts that built U.S. audiences in this lane did it on short-form video: Ichika Nito has 708,000 TikTok followers on a fraction of MIYAVI's streaming audience, Tim Henson 782,000, ATARASHII GAKKO! 7 million. His follower-to-listener ratio of 0.47 tells the same story from the other side: about half his listeners arrive through syncs and playlists and have not yet chosen to follow.",
          charts: [
            {
              kind: "grouped",
              title: "Instagram vs. TikTok Followers",
              subtitle: "Thousands of followers. MIYAVI's Instagram is top-tier; his TikTok is the smallest in this group.",
              unit: "K",
              series: [
                {
                  name: "Instagram (K)",
                  points: [
                    { x: "MIYAVI", y: 952 }, { x: "ATARASHII\nGAKKO!", y: 1367 }, { x: "Ichika\nNito", y: 1163 }, { x: "Tim\nHenson", y: 1001 }, { x: "Polyphia", y: 758 }, { x: "BABYMETAL", y: 2447 },
                  ],
                },
                {
                  name: "TikTok (K)",
                  points: [
                    { x: "MIYAVI", y: 120 }, { x: "ATARASHII\nGAKKO!", y: 7030 }, { x: "Ichika\nNito", y: 708 }, { x: "Tim\nHenson", y: 782 }, { x: "Polyphia", y: 155 }, { x: "BABYMETAL", y: 2321 },
                  ],
                },
              ],
              highlightX: ["MIYAVI"],
              source: "Chartmetric, Oct 15 2026",
              tall: true,
            },
            {
              kind: "hbars",
              title: "Spotify Monthly Listeners, Comparison Set",
              subtitle: "Three bands: global arena acts above 1.1M, the international middle at 500K to 900K, and online-native guitar acts below 350K.",
              unit: "K",
              series: [
                {
                  name: "Listeners (K)",
                  points: [
                    { x: "ONE OK ROCK", y: 3694 },
                    { x: "BABYMETAL", y: 3364 },
                    { x: "MAN WITH A MISSION", y: 1614 },
                    { x: "HYDE", y: 1390 },
                    { x: "Polyphia", y: 1276 },
                    { x: "YOSHIKI", y: 1113 },
                    { x: "ATARASHII GAKKO!", y: 821 },
                    { x: "MIYAVI", y: 709 },
                    { x: "coldrain", y: 628 },
                    { x: "Ichika Nito", y: 259 },
                    { x: "Tim Henson", y: 201 },
                  ],
                },
              ],
              highlightX: ["MIYAVI"],
              note: "MIYAVI reached 2.1M in December 2024, inside the top band, which shows the ceiling is reachable when demand is pointed at him.",
              source: "Chartmetric, Oct 15 2026",
            },
          ],
        },
        {
          label: "D",
          title: "A Young, Female, Fandom-Native Audience",
          objective: "The audience is not the stereotype of a guitar audience, and the targeting should not be either.",
          strategy: "Across Instagram, TikTok and YouTube, 82 to 88 percent of MIYAVI's audience is 18 to 34, and 61 to 81 percent is female. The strongest brand affinities on Instagram are Pokémon, Star Wars, Disney and Marvel, which are fandom and franchise signals, not gear signals. Spotify's related-artist graph places him next to League of Legends, VALORANT and anime acts rather than guitar acts. That shapes everything downstream: paid targeting built around anime, gaming and streaming-series fandoms; creators drawn from those communities; and creative that leads with personality and story, with the guitar as the payoff.",
          components: {
            heading: "Audience Profile",
            items: [
              "18 to 34: 82.8% on Instagram, 87.6% on TikTok, 82.3% on YouTube",
              "Female: 71.4% on Instagram, 80.7% on TikTok, 61.0% on YouTube",
              "Instagram brand affinity index: Pokémon 5.1x, Starbucks 2.7x, Star Wars 2.5x, Disney 2.0x, Marvel 2.0x",
              "Algorithmic neighbors: League of Legends, VALORANT, QUEEN BEE, SiM, HYDE",
            ],
          },
        },
      ],
      footnote: "Audience and consumption data: Chartmetric, October 15, 2026. Comparison set chosen from Japanese rock and guitar-led acts with international audiences and the U.S. guitar acts with the largest audience overlap.",
    },

    // ===================================================================
    // 03. What His Channels Say
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Content",
      title: "What His Own Channels Say",
      philosophy: "An audit of the last 89 Instagram reels, 67 Instagram posts and 61 TikToks. The answer to what works is already in his own numbers.",
      intro: "Each post was pulled with public view, like and comment counts and sorted by theme. The pattern is consistent across both platforms and is good news, because the formats that win cost almost nothing to make.",
      subBlocks: [
        {
          label: "A",
          title: "MIYAVI in His Own Voice Beats Everything Else",
          objective: "Phone-shot, first-person moments are his best content by a wide margin. Label-voice promotion is his weakest.",
          strategy: "His median Instagram reel reaches about 195,000 views. His three best reels of the last year, all phone-shot, unscripted and funny, reached between 2.5 and 3.2 million, thirteen to seventeen times the median. Big-name live moments come next (1.85 million for a Global Citizen stage collaboration, 720,000 with YOSHIKI), then guitar moments framed as a performance (777,000 for a Fender clip, 685,000 for an acoustic TV spot). At the bottom sit lyric cards, tracklists and \"out now\" posts, which ran 6,000 to 15,000 plays on TikTok and about 124,000 on Instagram. On TikTok, the year he appeared on camera himself more often, his median plays rose 2.6 times. The guidance is simple: more of him, less of the campaign.",
          charts: [
            {
              kind: "hbars",
              title: "Instagram Reel Views by Content Type",
              subtitle: "Representative top results per theme against the account median.",
              unit: "K",
              series: [
                {
                  name: "Views (K)",
                  points: [
                    { x: "First-person humor", y: 3220 },
                    { x: "Big-name live collab", y: 1850 },
                    { x: "Guitar as performance", y: 777 },
                    { x: "Family moment", y: 769 },
                    { x: "Origin story", y: 514 },
                    { x: "Account median", y: 195 },
                    { x: "Gear launch", y: 195 },
                    { x: "Rehearsal clip", y: 177 },
                    { x: "Label promo", y: 124 },
                  ],
                },
              ],
              highlightX: ["Account median"],
              source: "Instagram public metrics, Mar 2025 to Oct 2026",
            },
          ],
        },
        {
          label: "B",
          title: "TikTok Works Per Follower. It Just Stopped",
          objective: "TikTok was never failing. It was small, promotional, and then dormant.",
          strategy: "On the same assets in spring 2025, Instagram out-reached TikTok by 1.6 to 8.9 times, but per follower the two platforms performed almost identically: roughly 27 percent of followers reached on Instagram and 23 percent on TikTok. The gap was account size and content mix, not the platform. TikTok's best post was a reaction to his own visual-kei era photos (328,000 plays), and its second was a slap-guitar close-up (282,000). Every caption on the account was written in the third person, in a label voice. The account has not posted since May 24, 2025, and its bio still promotes the 2024 album. Two of his strongest Instagram themes, humor and family, never appeared on TikTok at all.",
          charts: [
            {
              kind: "grouped",
              title: "Same Asset, Two Platforms",
              subtitle: "Views and plays for the same content posted to both accounts in spring 2025.",
              unit: "K",
              series: [
                {
                  name: "Instagram (K)",
                  points: [
                    { x: "Visual-kei\nold photos", y: 514 }, { x: "Album\ntracklist", y: 124 }, { x: "Album out +\ntour dates", y: 157 },
                  ],
                },
                {
                  name: "TikTok (K)",
                  points: [
                    { x: "Visual-kei\nold photos", y: 328 }, { x: "Album\ntracklist", y: 14 }, { x: "Album out +\ntour dates", y: 60 },
                  ],
                },
              ],
              note: "Personality content travelled on both platforms. Promotion only travelled where the existing fanbase was already following.",
              source: "Instagram and TikTok public metrics, Mar to May 2025",
            },
          ],
        },
        {
          label: "C",
          title: "Nothing Asks the Audience to Act",
          objective: "The reach is there. The next step for the viewer is not.",
          strategy: "About five of his last 67 Instagram posts carry even a soft call to action. The Instagram link in bio still points to the May 2025 deluxe album. miyavi.com is a working U.S.-priced store, but it has no email or SMS sign-up and no tour page, and the fan club is built for Japan. A viewer in Los Angeles who loves a reel today has no way to hear about the next U.S. date except to keep scrolling. That is the gap Workstream 1 closes, and it is the cheapest gap on this page to close.",
          components: {
            heading: "U.S. Capture Surfaces Today",
            items: [
              "Instagram link in bio: May 2025 deluxe album, no capture",
              "TikTok bio: 2024 album, no link",
              "miyavi.com: U.S. store, no email or SMS sign-up, no tour page",
              "Fan club: paid and Japan-centric, with English guides for ticket lotteries",
              "Bandsintown: 137,000 followers, a platform-owned audience rather than an owned list",
            ],
          },
        },
      ],
      footnote: "Public platform metrics pulled October 15, 2026. Themes assigned from captions and content. Representative values shown; full post-level data available on request.",
    },

    // ===================================================================
    // 04. Track Record
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Track Record",
      title: "The Same Workstreams, Run Before",
      philosophy: "A current K-pop engagement, under NDA. The label and artist cannot be named, but every figure below is from that campaign's own reporting.",
      intro: "Crowd Control Digital, which leads media and data in this partnership, runs an active U.S. campaign for a K-pop act on a major Korean label, entering at week seven of a single's release cycle with U.S. and Canada targeting only. The numbers below cover June 15 to September 2, 2026. They are included because the fan-data and U.S. paid workstreams proposed here are the same two that produced these results.",
      subBlocks: [
        {
          label: "A",
          title: "First-Party Fan Data, Built From Zero",
          objective: "A fan database the label owns, standing at nothing on day one.",
          strategy: "The engagement began with no email or SMS list of any kind. Eight weeks later the label owned 2,805 identified fans, of whom 1,467 came through a single paid acquisition flight at $1.97 per signup and a blended cost of $1.15 per fan across all sources. The list was then enriched against behavior: 1,092 identified as ticket buyers, 576 on recurring pre-save, 383 as merchandise buyers. That last part is the difference between a mailing list and a sales asset, because it tells the label which fans to talk to about a tour, a comeback, or an album.",
          charts: [
            {
              kind: "bars",
              title: "Fan List Growth From a Standing Start",
              subtitle: "Owned first-party fan records, reference campaign.",
              series: [
                {
                  name: "Fans on file",
                  points: [
                    { x: "Day 1\nJun 2026", y: 0 },
                    { x: "Week 4\nAug 2026", y: 1338 },
                    { x: "Week 8\nSep 2026", y: 2805 },
                  ],
                },
              ],
              highlightX: ["Week 8\nSep 2026"],
              note: "$1.97 cost per signup on the paid flight; $1.15 blended across all capture sources.",
              source: "Reference campaign reporting, Jul 6 to Sep 3 2026",
            },
          ],
        },
        {
          label: "B",
          title: "U.S. Market Lift, Against the Trend",
          objective: "Move the United States up the market table while spending only in the United States.",
          strategy: "At the start of the engagement the U.S. was the artist's second market, behind Malaysia. Thirty days after the paid flights launched, the U.S. was first, and it held first place for the rest of the window. The more useful number is the comparison: over the same period the U.S. grew 13.3 percent while every other significant market declined between 31 and 42 percent as the release cycle aged. Media ran in the U.S. and Canada only, which is what makes the attribution clean.",
          charts: [
            {
              kind: "bars",
              title: "Market Growth Over the Campaign Window",
              subtitle: "Percent change in monthly listeners by market, June 15 to August 31, 2026. Paid media ran in North America only.",
              unit: "%",
              series: [
                {
                  name: "Change",
                  points: [
                    { x: "United States", y: 13.3 },
                    { x: "Indonesia", y: -32.8 },
                    { x: "South Korea", y: -31 },
                    { x: "Malaysia", y: -40.3 },
                    { x: "Japan", y: -41.6 },
                    { x: "Thailand", y: -41.6 },
                  ],
                },
              ],
              highlightX: ["United States"],
              note: "The U.S. was the only major market to grow. It moved from the No. 2 market to No. 1 within 30 days of launch.",
              source: "Reference campaign reporting, Jun 15 to Aug 31 2026",
            },
          ],
        },
        {
          label: "C",
          title: "Media Efficiency",
          objective: "What the spend bought, and how the cost moved over ten weeks.",
          strategy: "Roughly $28,000 of working media returned 4.13 million impressions and 316,191 clicks at a 7.69 percent click-through rate and an $0.08 blended cost per click. The trend matters more than the total: cost per click on the primary flight fell from $0.114 in week one to $0.032 by week ten, a 72 percent reduction, because the account was rebuilt and optimized continuously rather than set and left. Creator and clipping work in the same engagement returned about 2.27 million views on $10,000, roughly four tenths of a cent per view.",
          charts: [
            {
              kind: "line",
              title: "Cost Per Click Over Ten Weeks",
              subtitle: "Primary traffic flight, reference campaign. Same creative strategy, continuously optimized.",
              series: [
                {
                  name: "Cost per click (USD)",
                  points: [
                    { x: "Wk 1", y: 0.114 }, { x: "Wk 2", y: 0.098 }, { x: "Wk 4", y: 0.071 }, { x: "Wk 6", y: 0.058 }, { x: "Wk 8", y: 0.044 }, { x: "Wk 10", y: 0.032 },
                  ],
                },
              ],
              note: "72 percent reduction. Best single day $0.030; best click-through rate 28.66 percent.",
              source: "Reference campaign reporting, Jun 22 to Aug 30 2026",
            },
          ],
        },
      ],
      footnote: "All figures from the reference engagement's own campaign reporting, June to September 2026. The artist and label are covered by a non-disclosure agreement and are not identified. Streaming outcomes are deliberately excluded from this section, for the reason set out under How We Work.",
    },

    // ===================================================================
    // 05. Workstream 1
    // ===================================================================
    {
      type: "vertical",
      number: "05",
      navLabel: "Fan Data",
      title: "Workstream 1 / U.S. Fan Data",
      philosophy: "Build a U.S. email and SMS list MIYAVI's team owns outright, organized by city, so every future release and tour date has a direct audience on day one.",
      intro: "This workstream comes first because the other three feed it. Every sync moment, every short-form hit and every tour announcement ends in the same place: a sign-up.",
      subBlocks: [
        {
          label: "A",
          title: "What Gets Built",
          objective: "A U.S.-resident fan list with contact permission, city data, and behavioral enrichment.",
          strategy: "Capture runs on an SMS and email platform built for artists, wired into every surface he already has: the Instagram link in bio, a comment-to-DM flow on reels (the fan comments one word, receives a sign-up link by DM, and never leaves the app), miyavi.com, Bandsintown, and paid units built specifically for sign-up. Every record is tagged with the fan's city, so the list doubles as tour data. Records are enriched over time against real behavior, so the team can separate a passing viewer from a ticket buyer or a merch buyer. The list stays with MIYAVI's team, exportable at all times, and does not depend on any platform's algorithm.",
          components: {
            heading: "Components",
            items: [
              "SMS and email capture platform, set up and branded in week one",
              "Comment-to-DM sign-up flow on Instagram reels",
              "Link in bio, miyavi.com and Bandsintown rebuilt around one sign-up",
              "Paid acquisition units measured on cost per fan, not impressions",
              "City tagging on every record, feeding the West Coast demand map",
              "Behavioral enrichment: ticket buyers, pre-savers, merchandise buyers",
            ],
          },
          kpis: [
            "Cost per fan, held under a target agreed before launch",
            "List size at 90 days, with a stated floor",
            "Share of records in the priority West Coast markets",
          ],
        },
        {
          label: "B",
          title: "The First Ask",
          objective: "Open the list with a reason to join that is specific, local, and only available there.",
          strategy: "The opening offer is first access in your city: fans who join get presale access and first notice of U.S. dates before anyone else. It is honest, it costs nothing to deliver, and it produces exactly the data the West Coast workstream needs. Later offers rotate through the assets MIYAVI already has: signed vinyl and store drops, early access to new music, and behind-the-scenes content from Japan and the road.",
        },
      ],
      footnote: "Capture is scoped to U.S. residents under U.S. consent standards, with a documented consent trail and easy opt-out on every surface.",
    },

    // ===================================================================
    // 06. Workstream 2
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Sync Audience",
      title: "Workstream 2 / Sync Audience Conversion",
      philosophy: "Arcane, anime and Prime Video already introduce MIYAVI to new U.S. audiences. This workstream makes sure they find him, follow him, and join the list.",
      intro: "Sync audiences are the most efficient audiences an artist can buy into, because they already have an emotional connection to the song. They are also the fastest to drift away if nothing follows the moment.",
      subBlocks: [
        {
          label: "A",
          title: "Three Live Doors",
          objective: "Work every sync asset he has, in the order of the size of the audience behind it.",
          strategy: "\"Snakes\" is the largest: still about a million Spotify streams a month and the song Arcane fans know. \"Sweet Disaster\" opens Ninja vs. Gokudo, which streams worldwide on Prime Video with an English dub. The Wrecking Crew put him on screen for a mainstream Prime Video action audience in January. Each one gets its own paid and creator program aimed at the fans of that franchise, with creative that makes the connection explicit (\"the guitarist behind the Arcane song\") and points to one place: a follow, a sign-up, or the right song.",
          components: {
            heading: "Components",
            items: [
              "Paid social in the U.S. aimed at Arcane, League of Legends, anime and Prime Video audiences",
              "Creator seeding inside anime, gaming and guitar communities",
              "Sync-specific creative: performance cuts, reactions, \"you know this song\" hooks",
              "Retargeting of engaged viewers into the fan list",
              "A playbook ready for the next sync, so the next wave is captured from day one",
            ],
          },
          kpis: [
            "Cost per Spotify follower in the U.S.",
            "Cost per fan-list sign-up from sync audiences",
            "U.S. follower growth on Instagram and TikTok",
          ],
        },
        {
          label: "B",
          title: "Ready for the Next Wave",
          objective: "Treat each future sync as a planned campaign, not a surprise.",
          strategy: "In late 2024, a single season of Arcane added more than a million monthly listeners in seven weeks. The next anime opening, game soundtrack or screen role can do the same. With the fan list, retargeting audiences and creative templates already in place, the team can switch a campaign on the week a sync lands and turn a spike into followers and contacts that stay.",
        },
      ],
      footnote: "Any use of franchise footage or artwork in creative is cleared with the rights holder before it runs.",
    },

    // ===================================================================
    // 07. Workstream 3
    // ===================================================================
    {
      type: "vertical",
      number: "07",
      navLabel: "Short-Form",
      title: "Workstream 3 / Short-Form Restart",
      philosophy: "Put TikTok back to work as the U.S. discovery channel, in MIYAVI's own voice, with clipping behind the best of it.",
      intro: "The formats already exist in his own numbers. The work is restarting the account, cutting native versions instead of reposts, and adding enough volume for the platform to find U.S. audiences.",
      subBlocks: [
        {
          label: "A",
          title: "Four Native Formats",
          objective: "Build a weekly rhythm from the formats his audience has already proven.",
          strategy: "Each format is phone-shot, low-cost, and built for viewers who have never heard of him. The guitar is the payoff, not the premise.",
          components: {
            heading: "The Formats",
            items: [
              "Technique moments: POV slap-guitar clips on riffs U.S. viewers already know, from game and anime themes to the songs of artists he admires",
              "Origin story: a short series on the visual-kei years, his No. 1 TikTok theme, built as \"who is this guy\" episodes",
              "First-person life: the humor and everyday moments that are his strongest Instagram content, cut natively for TikTok",
              "Sync tie-ins: \"Snakes\", \"Sweet Disaster\" and screen-role moments, framed for the fans of each franchise",
            ],
          },
          kpis: [
            "Publishing cadence held at three to five native posts a week",
            "TikTok follower growth and U.S. share of new followers",
            "Median plays per post against the 2025 baseline of 28,000",
          ],
        },
        {
          label: "B",
          title: "Clipping and Creators",
          objective: "Put enough volume behind the best performers to move a U.S. audience, not just a feed.",
          strategy: "Clipping networks re-cut his best live, interview and short-form moments across many accounts, and creators in anime, gaming and guitar communities build their own content around his songs. Clipping has a floor of efficacy: a few hundred thousand impressions moves nothing measurable, and it starts to matter in the tens of millions. The recommended first window budgets for that range and is cut at the first checkpoint if it is not working.",
        },
      ],
      footnote: "MIYAVI's team approves every format and every post. Production load on him is kept to short, batched phone sessions.",
    },

    // ===================================================================
    // 08. Workstream 4
    // ===================================================================
    {
      type: "vertical",
      number: "08",
      navLabel: "West Coast",
      title: "Workstream 4 / West Coast Return",
      philosophy: "Book the next U.S. run on evidence: sign-ups by city, collected before a date is announced.",
      intro: "The West Coast is the core U.S. market for Japanese rock and the home of his largest U.S. city audience, Los Angeles. A data-led return turns the fan list into the routing.",
      subBlocks: [
        {
          label: "A",
          title: "The Demand Map",
          objective: "Know which cities will sell, and how big the rooms should be, before the run is booked.",
          strategy: "Every sign-up from Workstream 1 carries a city. Paid tests in the priority markets (Los Angeles, San Francisco, Seattle, San Diego, Portland, and Phoenix as a reach market) measure the cost of a sign-up in each. Within 90 days that becomes a ranked demand map: sign-ups per city, cost per sign-up, and the share of fans who have previously bought tickets. The map gives MIYAVI's team and agent a promoter-ready case for each market and a defensible room size.",
          components: {
            heading: "Components",
            items: [
              "City-tagged sign-ups from the fan list",
              "Market-level paid tests in the priority West Coast cities",
              "A ranked demand report by city, refreshed through the window",
              "Presale access reserved for the fan list when dates go live",
            ],
          },
        },
        {
          label: "B",
          title: "Start Intimate, Add Nights",
          objective: "Let demand add the dates, so every announcement is a good one.",
          strategy: "The model that has worked for Japanese artists in the U.S. is to open with a small number of rooms sized just under demand, then add second nights and bigger rooms as presales prove the market. Each added date becomes its own announcement and its own content moment. When dates go live, the fan list gets first access and the paid program shifts from sign-up to ticket sales, with per-market spend set by pacing.",
          kpis: [
            "Sign-ups per priority city at 90 days",
            "Presale conversion from the fan list when dates are announced",
            "Sell-through by market against the demand map",
          ],
        },
      ],
      footnote: "Routing, holds and booking remain with MIYAVI's team and agent. This workstream supplies the demand data and runs the on-sale marketing.",
    },

    // ===================================================================
    // 09. Creative Examples
    // ===================================================================
    {
      type: "showcase",
      number: "09",
      navLabel: "Examples",
      title: "Creative Examples",
      philosophy: "Four posts by other artists, one per workstream, each showing a mechanic that maps to MIYAVI.",
      intro: "Each example below is a public post with a sourced result. The format and mechanics are broken down beat by beat, followed by how we would adapt it for MIYAVI.",
      items: [
        {
          platform: "instagram",
          platformLabel: "Instagram reel",
          id: "DMAqK-7sRT3",
          url: "https://www.instagram.com/reel/DMAqK-7sRT3/",
          poster: "/images/miyavi/examples/all-time-low.jpg",
          artist: "All Time Low",
          title: "Tour trailer with a comment-for-presale ask",
          date: "Jul 12, 2025",
          tag: "Workstream 1 / Fan Data",
          stats: [
            { label: "Views", value: "353K" },
            { label: "Likes", value: "16.5K" },
            { label: "Comments", value: "883" },
            { label: "Comments vs. avg", value: "~4x" },
          ],
          format: "A 43-second live montage that opens on the band's biggest hit, names the tour, sells the package act by act, and ends on a full date card. The caption asks fans to comment for presale access, which triggers an automatic DM with a sign-up link.",
          beats: [
            { t: "0-3s", d: "Wide shot to a huge crowd with the biggest hit playing. Lapsed fans recognize it instantly." },
            { t: "3-10s", d: "Title cards name the world tour over live footage before any ask is made." },
            { t: "10-21s", d: "One card per support act over that band's own footage. The night out is sold, not a date list." },
            { t: "21-38s", d: "Fast live montage moves into new singles, then a plain card with the ticket site." },
            { t: "38-43s", d: "The full date card, built to be screenshotted." },
            { t: "Caption", d: "\"Comment below and we'll send you presale ticket access.\" One word from the fan starts the sign-up." },
          ],
          mechanics: [
            "The ask costs the fan one comment, instead of a link in bio and a page load.",
            "Every comment lifts the reel's distribution and creates a contact record with a location.",
            "Sign-ups were tracked by city during the presale window, so ad spend moved to the markets that responded.",
          ],
          outcome: "More than 3,000 Instagram presale sign-ups in one day, more than 17,000 Spotify pre-saves, the band's best on-sale day in 22 years, and second nights added in Boston and New York because of demand.",
          outcomeSource: "Laylo case study, All Time Low, 2025",
          adapt: {
            title: "Open the U.S. fan list with one reel",
            actions: [
              "Cut a 40-second reel from his best live slap moments with \"Snakes\" as the opening audio.",
              "Caption it with one word to comment for first access to West Coast dates in your city.",
              "Use the city data from the replies to rank markets before a single date is announced.",
            ],
          },
        },
        {
          platform: "tiktok",
          platformLabel: "TikTok",
          id: "7325411487822957831",
          url: "https://www.tiktok.com/@creepy_nuts_/video/7325411487822957831",
          poster: "/images/miyavi/examples/creepy-nuts.jpg",
          artist: "Creepy Nuts",
          title: "The anime opening, posted from the artist's own account",
          date: "Jan 18, 2024",
          tag: "Workstream 2 / Sync Audience",
          stats: [
            { label: "Plays", value: "5.94M" },
            { label: "Likes", value: "274K" },
            { label: "Saves", value: "27.7K" },
            { label: "Vs. prior posts", value: "~30-60x" },
          ],
          format: "A 13-second cut of the MASHLE season 2 opening, posted twelve days after the premiere, with lyrics burned in in Japanese, Korean and English and the song credit on every frame.",
          beats: [
            { t: "0-1s", d: "Hard open on the anime's most iconic shot. Fans recognize the opening before the first lyric." },
            { t: "1-4s", d: "The cast in silhouette, with lyrics in three languages at once, so overseas viewers can read a Japanese song." },
            { t: "4-6s", d: "The full cast line-up, with the artist credit visible bottom right." },
            { t: "6-11s", d: "The chant section, the part viewers loop." },
            { t: "11-13s", d: "A closing line card, then a clean loop back to the start." },
          ],
          mechanics: [
            "Fans were already searching for the opening. Posting it from the artist account made that account the place they found it.",
            "English subtitles made the song readable to the overseas audience that picked it up first.",
            "The team kept feeding the moment with a dance prompt, a live performance and a collaboration video.",
          ],
          outcome: "Billboard Global 200 peak of No. 8, 19 weeks at No. 1 in Japan and RIAA Gold in the U.S. Videos using the sound grew from about 45,000 to more than 3 million in a year, and the duo played its first North American tour, including Coachella, in 2026.",
          outcomeSource: "Billboard, RIAA and Real Sound, 2024 to 2026",
          adapt: {
            title: "Make his accounts the home of his sync moments",
            actions: [
              "Post the \"Sweet Disaster\" opening from his own accounts with English subtitles, once cleared with the rights holders.",
              "Follow it with him playing the opening riff in slap style and reacting to the scene where it lands.",
              "Run the same play for \"Snakes\" and Arcane fans, and for his role in The Wrecking Crew.",
            ],
          },
        },
        {
          platform: "tiktok",
          platformLabel: "TikTok",
          id: "7377759070842866952",
          url: "https://www.tiktok.com/@ichikanito/video/7377759070842866952",
          poster: "/images/miyavi/examples/ichika-nito.jpg",
          artist: "Ichika Nito",
          title: "\"Playing God @Polyphia\", a wordless POV guitar clip",
          date: "Jun 7, 2024",
          tag: "Workstream 3 / Short-Form",
          stats: [
            { label: "Plays", value: "4.25M" },
            { label: "Likes", value: "366K" },
            { label: "Saves", value: "40.1K" },
            { label: "Vs. median", value: "~150x" },
          ],
          format: "Thirty seconds, phone at chest height looking down the neck, no talking and no on-screen text. A Japanese guitarist plays the signature riff of the most viral U.S. guitar band of the moment, and tags them.",
          beats: [
            { t: "0s", d: "No intro. The first frame is already the riff, seen from the player's seat." },
            { t: "0-8s", d: "The famous opening pattern, played clean. Guitarists recognize it in two notes." },
            { t: "8-20s", d: "The hand climbs through the hardest run. Nothing cuts away from the technique." },
            { t: "Setting", d: "Tatami and shoji behind the guitar. It reads as Japan without a word." },
            { t: "20-30s", d: "The run resolves and loops cleanly into its own start, which drives rewatches." },
          ],
          mechanics: [
            "The POV makes the viewer the guitarist, the guitar version of a \"watch me\" hook.",
            "The crossover name is the hook and the technique is the payoff.",
            "With no words, the clip travels to any market, and the tag does the English-language work.",
          ],
          outcome: "His biggest post in three years, about 150 times his recent median. His TikTok following grew from about 250,000 in early 2023 to 708,000, and he now has a signature guitar sold in U.S. retail.",
          outcomeSource: "TikTok public metrics, Guitar Player, Sweetwater, 2023 to 2026",
          adapt: {
            title: "Restart TikTok with wordless slap-guitar POV clips",
            actions: [
              "Play riffs U.S. viewers already know, from game and anime themes to the \"Snakes\" hook, in his slap style.",
              "Tag the original artist or franchise, and let his own voice come in from the second or third clip.",
              "Shoot on his Fender, in batches, so the cadence holds without studio time.",
            ],
          },
        },
        {
          platform: "instagram",
          platformLabel: "Instagram carousel",
          id: "DP6qBgEkuCH",
          url: "https://www.instagram.com/p/DP6qBgEkuCH/",
          poster: "/images/miyavi/examples/fujii-kaze.jpg",
          embeddable: false,
          artist: "Fujii Kaze",
          title: "North America tour recap, the payoff of a demand-led build",
          date: "Oct 17, 2025",
          tag: "Workstream 4 / West Coast",
          stats: [
            { label: "Likes", value: "328K" },
            { label: "2024 rooms", value: "LA + NYC" },
            { label: "2025", value: "Greek Theatre" },
            { label: "2026", value: "Coachella" },
          ],
          format: "A plain tour-recap carousel with a two-word caption. The post is the last step of a two-year build in which every U.S. date was added on proven demand.",
          beats: [
            { t: "2024", d: "A small test: one night in Los Angeles and one in New York, solo piano." },
            { t: "Demand", d: "Both cities added a second night to meet demand." },
            { t: "2025", d: "Rooms upgraded: the Greek Theatre in Los Angeles, plus Lollapalooza and Outside Lands." },
            { t: "Club date", d: "A Chicago club show added later, sold out." },
            { t: "Recap", d: "The tour itself becomes the content, 328,000 likes." },
            { t: "2026", d: "Coachella." },
          ],
          mechanics: [
            "The first footprint was the smallest viable one, in the two markets where the data said the fans were.",
            "No room was ever bigger than demand, so every announcement was a sell-out or an upgrade.",
            "Each step up gave a non-English-speaking artist a new reason to be in U.S. music news between releases.",
          ],
          outcome: "From one night each in Los Angeles and New York in 2024 to the Greek Theatre, two major U.S. festivals, and Coachella in 2026.",
          outcomeSource: "Artist and press announcements, 2024 to 2026",
          adapt: {
            title: "Return to the West Coast the same way",
            actions: [
              "Open with two intimate nights, in Los Angeles and San Francisco, offered first to the fan list.",
              "Add second nights only where the demand map says so, and announce each one as news.",
              "Step up room sizes on the next run, using the sell-through as the case.",
            ],
          },
        },
      ],
      footnote: "Public posts by third-party artists, shown as examples of format and mechanics. Metrics are the platforms' public counts as of October 15, 2026. Results are as reported by the sources named on each example.",
    },

    // ===================================================================
    // 10. Example Creative
    // ===================================================================
    {
      type: "mockups",
      number: "10",
      navLabel: "Example Creative",
      title: "Example Creative",
      philosophy: "Five pieces in MIYAVI's visual world, one for each workstream. They are examples to react to, not final creative.",
      intro: "Each piece was generated with AI image and video tools to show direction: layout, tone, hook and call to action. Final creative would be produced with MIYAVI's team, using his own footage and photography.",
      items: [
        {
          kind: "image",
          src: "/images/miyavi/creative/presale-story.webp",
          aspect: "9:16",
          tag: "Workstream 1 / Fan Data",
          title: "\"Text Me Your City\"",
          caption: "An Instagram Story and Reels unit that opens the fan list. One message, one button, and a clear reason to join: first access in your city.",
          notes: [
            "Paid unit for U.S. sign-up campaigns, measured on cost per fan",
            "Organic Story placement with a link sticker on announcement days",
          ],
        },
        {
          kind: "image",
          src: "/images/miyavi/creative/arcane-pov.webp",
          aspect: "9:16",
          tag: "Workstream 2 / Sync Audience",
          title: "\"pov: you found me from Arcane\"",
          caption: "A phone-shot TikTok that speaks directly to the Arcane audience: the song they know, played his way, with the connection named on screen.",
          notes: [
            "Native TikTok post, then whitelisted as a paid unit to Arcane and League of Legends audiences",
            "Template repeats for every future sync",
          ],
        },
        {
          kind: "video",
          src: "/images/miyavi/creative/slap-pov.mp4",
          poster: "/images/miyavi/creative/slap-pov.jpg",
          aspect: "9:16",
          tag: "Workstream 3 / Short-Form",
          title: "Slap-Guitar POV",
          caption: "The wordless technique clip, shot from the player's seat on a white Fender. No intro, no text, the riff in the first frame.",
          notes: [
            "Weekly technique slot on TikTok, Reels and Shorts",
            "Source clips for the clipping network",
          ],
        },
        {
          kind: "image",
          src: "/images/miyavi/creative/origin-series.webp",
          aspect: "4:5",
          tag: "Workstream 3 / Short-Form",
          title: "\"Before the Samurai\"",
          caption: "Episode one of a short origin series on the visual-kei years, built as the \"who is this guy\" introduction for viewers meeting him for the first time.",
          notes: [
            "Carousel cover for Instagram, with a matching TikTok episode",
            "Archive photos and his own voiceover in the final version",
          ],
        },
        {
          kind: "image",
          src: "/images/miyavi/creative/west-coast-poster.webp",
          aspect: "2:3",
          tag: "Workstream 4 / West Coast",
          title: "West Coast Presale Poster",
          caption: "A screen-print style admat for the West Coast return, with presale reserved for the fan list. Cities shown are the priority markets in the demand map.",
          notes: [
            "Announcement asset once dates are confirmed",
            "Variants per city for local paid and promoter use",
          ],
        },
      ],
      footnote: "AI-generated examples, directional only. Not final creative and not approved by the artist.",
    },

    // ===================================================================
    // 11. How We Work
    // ===================================================================
    {
      type: "philosophy",
      number: "11",
      navLabel: "How We Work",
      title: "How We Work",
      thesis: "There is a floor of efficacy for everything. Every channel has a spend level below which the money buys noise, and we would rather tell you that before taking the budget than after spending it.",
      hierarchy: [
        {
          label: "Every Line Has a Worst, Expected, and Best Case",
          description: "Nothing is presented as a single number. Each workstream comes with three scenarios and the assumptions behind them, so the downside is visible before the budget is committed rather than explained afterward.",
        },
        {
          label: "Start Low Everywhere, Scale What Moves",
          description: "On a new engagement we deliberately start below capacity across every channel, read the results, and move budget toward what works. Scale-or-stop decisions happen on a set schedule against a set baseline, not on instinct at the end of a quarter.",
        },
        {
          label: "Streaming Is Worked, Not Promised",
          description: "We do not put a number on streaming lift, because nobody can predict it honestly. We report streaming weekly and work it hard through the tactics above. What we commit to is followers, audience growth, fan data and city-level demand, which are all measurable and attributable.",
        },
        {
          label: "Light on the Artist",
          description: "MIYAVI's time is the scarcest resource in this plan. Content is captured in short, batched phone sessions, most formats reuse footage he already has, and his team approves everything before it runs.",
        },
        {
          label: "One Team, Two Specialties",
          description: "This is a single joint offering. Transparent Arts leads U.S. go-to-market, artist and industry relationships, and press. Crowd Control Digital leads media, data, fan capture and creative testing. MIYAVI's team gets one team, one weekly call and one report.",
        },
      ],
      messaging: [
        "The audience already found him. This plan is about keeping it.",
        "Everything proposed here is measured against a baseline set before launch.",
        "The magic bullet is not telling anyone there is a magic bullet.",
      ],
      footnote: "Every recommendation in this document traces to data pulled October 15, 2026, to public platform metrics, or to results from a live campaign run on the same workstreams.",
    },

    // ===================================================================
    // 12. First 90 Days
    // ===================================================================
    {
      type: "timeline",
      number: "12",
      navLabel: "First 90 Days",
      title: "First 90 Days",
      intro: "A test-first rhythm. Fan capture and the TikTok restart stand up in the first two weeks because everything else feeds them. Paid begins small and scales only on evidence. The demand map builds across the whole window and is delivered at week twelve. The week-four checkpoint is a real scale-or-stop decision, not a status update.",
      weeks: [
        { index: 1, label: "W1", dates: "Week 1" },
        { index: 2, label: "W2", dates: "Week 2" },
        { index: 3, label: "W3", dates: "Week 3" },
        { index: 4, label: "W4", dates: "Week 4", highlight: true, note: "CHECKPOINT" },
        { index: 5, label: "W5", dates: "Week 5" },
        { index: 6, label: "W6", dates: "Week 6" },
        { index: 7, label: "W7", dates: "Week 7" },
        { index: 8, label: "W8", dates: "Week 8", highlight: true, note: "CHECKPOINT" },
        { index: 9, label: "W9", dates: "Week 9" },
        { index: 10, label: "W10", dates: "Week 10" },
        { index: 11, label: "W11", dates: "Week 11" },
        { index: 12, label: "W12", dates: "Week 12", highlight: true, note: "REVIEW" },
      ],
      workstreams: [
        {
          name: "Fan Data",
          cells: [
            { weekIndex: 1, intensity: "high", label: "BUILD" },
            { weekIndex: 2, intensity: "high", label: "LAUNCH" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "Sync Paid",
          cells: [
            { weekIndex: 2, intensity: "medium", label: "TEST" },
            { weekIndex: 3, intensity: "medium" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "TikTok",
          cells: [
            { weekIndex: 1, intensity: "medium", label: "SHOOT" },
            { weekIndex: 2, intensity: "high", label: "RESTART" },
            { weekIndex: 3, intensity: "high" },
            { weekIndex: 4, intensity: "high" },
            { weekIndex: 5, intensity: "high" },
            { weekIndex: 6, intensity: "high", label: "SHOOT" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high", label: "SHOOT" },
            { weekIndex: 11, intensity: "high" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
        {
          name: "Clipping",
          cells: [
            { weekIndex: 3, intensity: "medium", label: "TEST" },
            { weekIndex: 4, intensity: "medium" },
            { weekIndex: 5, intensity: "high", label: "SCALE" },
            { weekIndex: 6, intensity: "high" },
            { weekIndex: 7, intensity: "high" },
            { weekIndex: 8, intensity: "high" },
            { weekIndex: 9, intensity: "high" },
            { weekIndex: 10, intensity: "high" },
            { weekIndex: 11, intensity: "medium" },
            { weekIndex: 12, intensity: "medium" },
          ],
        },
        {
          name: "West Coast",
          cells: [
            { weekIndex: 3, intensity: "low", label: "TEST" },
            { weekIndex: 4, intensity: "low" },
            { weekIndex: 5, intensity: "medium", label: "MAP" },
            { weekIndex: 6, intensity: "medium" },
            { weekIndex: 7, intensity: "medium" },
            { weekIndex: 8, intensity: "medium" },
            { weekIndex: 9, intensity: "medium" },
            { weekIndex: 10, intensity: "medium" },
            { weekIndex: 11, intensity: "high", label: "REPORT" },
            { weekIndex: 12, intensity: "high" },
          ],
        },
      ],
      weekBreakdowns: [
        {
          weekIndex: 1,
          title: "Build the capture layer",
          items: [
            "SMS and email platform live, with consent flows and a welcome sequence.",
            "Link in bio, miyavi.com and Bandsintown pointed at one sign-up.",
            "Baselines locked on every metric this plan is measured against.",
            "First batched content session: two to three weeks of native TikTok formats.",
          ],
        },
        {
          weekIndex: 2,
          title: "TikTok restarts, paid goes live in test mode",
          items: [
            "TikTok bio and profile refreshed, three to five native posts a week begin.",
            "Comment-to-DM sign-up reel goes live on Instagram.",
            "U.S. paid launches small against the Arcane, anime and Prime Video audiences.",
          ],
        },
        {
          weekIndex: 4,
          title: "Checkpoint: scale or stop",
          items: [
            "Full read on cost per fan and cost per follower against the targets agreed at kickoff.",
            "Budget moves to what is working. Anything below its floor of efficacy is stopped.",
            "Clipping scaled or cut on its first three weeks of results.",
          ],
        },
        {
          weekIndex: 8,
          title: "Checkpoint: mid-window review",
          items: [
            "List size, follower growth and U.S. audience growth against the 90-day targets.",
            "First read of the demand map: sign-ups and cost per sign-up by city.",
            "Creative refreshed from the current organic winners.",
          ],
        },
        {
          weekIndex: 12,
          title: "Review and next cycle",
          items: [
            "Full reporting against every committed metric, with attribution stated plainly.",
            "Fan list handed over enriched and exportable, owned by MIYAVI's team.",
            "West Coast demand map delivered: ranked cities, recommended room sizes, presale plan.",
            "Recommendations for the next cycle, sized on what this window proved.",
          ],
        },
      ],
      footnote: "When West Coast dates are confirmed, the on-sale campaign is scoped and budgeted separately on the same structure. Checkpoints are real decision points with the authority to stop a channel.",
    },

    // ===================================================================
    // 13. Investment
    // ===================================================================
    {
      type: "pricing",
      number: "13",
      navLabel: "Investment",
      title: "Investment",
      intro: "One joint monthly retainer from Transparent Arts and Crowd Control Digital for strategy, execution and reporting across all four workstreams, with working media billed separately at cost plus management. The first 90 days are the test window: media starts deliberately small, and the week-four and week-eight checkpoints decide where it scales. MIYAVI's team approves every dollar of working media before it is committed.",
      breakdownLabel: "Commercial Structure",
      deployableLabel: "Term",
      tiers: [
        {
          label: "Retainer",
          budget: "$10,000 / month",
          name: "Joint Four-Workstream U.S. Retainer",
          tagline: "U.S. strategy, fan-data build, paid and creator campaigns, TikTok restart and content direction, West Coast demand mapping, industry and press coordination, weekly reporting, and a weekly call.",
          featured: true,
          deployable: "90-day initial window, then month to month",
          breakdown: [
            { vertical: "Monthly retainer", amount: "$10,000" },
            { vertical: "Initial window", amount: "90 days / $30,000" },
            { vertical: "Working media and creators", amount: "Client-approved" },
            { vertical: "Management on working media", amount: "15% of spend" },
          ],
        },
        {
          label: "Illustrative 90 Days",
          budget: "$99,000",
          name: "Recommended Starting Budget",
          tagline: "One way to fund the first window. Media lines are starting points that move at each checkpoint toward whatever is working.",
          deployable: "$60,000 working media in market",
          breakdown: [
            { vertical: "Retainer, 3 months", amount: "$30,000" },
            { vertical: "U.S. paid social (sync audiences, followers, retargeting)", amount: "$25,000" },
            { vertical: "Clipping and creator seeding", amount: "$20,000" },
            { vertical: "Fan-data acquisition and city tests", amount: "$15,000" },
            { vertical: "Management, 15% of $60,000", amount: "$9,000" },
          ],
        },
      ],
      addOns: [
        {
          name: "Lighter Start",
          subtitle: "Same structure, smaller pool",
          budget: "$64,500",
          description: "Retainer for 90 days ($30,000) plus $30,000 of working media split between U.S. paid and fan-data acquisition, and $4,500 management. Clipping is added at the first checkpoint if the early read supports it.",
        },
        {
          name: "West Coast On-Sale Campaign",
          subtitle: "When dates are confirmed",
          budget: "Scoped",
          description: "Presale to the fan list, then per-market paid and creator activity paced against ticket sales, budgeted from the demand map. Billed as working media at cost plus 15%.",
        },
      ],
      footnote: "Working media is approved before commitment and billed at cost plus 15%. Term and notice details are set in the statement of work.",
    },
  ],
};
