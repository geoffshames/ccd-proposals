import type { StrategyPlanData } from "../plan-context";

export const zerobaseonePlan: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/zerobaseone/og-image.png",
  partSwitch: {
    currentCode: "AUDIT",
    slug: "zerobaseone-plan",
    code: "PLAN",
    label: "the growth plan",
    eyebrow: "Part Two",
    endTitle: "The Growth Plan",
    endBlurb: "Three workstreams built on these findings: a first-party capture layer for the United States, a comeback-ready paid and creator system that can be dropped onto whatever date WAKEONE sets, and a Japan defence against a first week that has fallen 65 percent across three EPs.",
    endCta: "Read the growth plan",
  },

  cover: {
    label: "Part One / Brand Audit",
    title: "ZEROBASEONE",
    subtitle: "Where ZEROBASEONE stands entering the five-member era, measured across market position, consumption, audience, video and infrastructure. The growth plan built on these findings sits in Part Two.",
    partnership: "Transparent Arts × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, Crowd Control Digital",
    date: "September 2026",
    backgroundImage: "/images/zerobaseone/zerobaseone-hero.jpg",
  },

  sections: [
    // ===================================================================
    // 01. Overview and Objective
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview and Objective",
      subtitle: "The fandom stayed. The album machine did not. And the largest listening market has never been sold anything.",
      body: [
        "ZEROBASEONE entered a new configuration on 15 March 2026. Five members continued under WAKEONE and the group released Ascend- on 18 May, its first record as a quintet. The commercial read on that release has been written almost entirely through one number: a 514,784 Hanteo first week against 1,514,370 for Never Say Never, a fall of 66.0 percent, reproduced to the decimal on Circle. That number is real and this audit does not soften it.",
        "It is also not the whole picture, and the rest of the picture is more interesting. Across the same period the Spotify follower base rose 25.8 percent to an all-time high of 1,485,177 and has never once fallen. Followers first crossed above monthly listeners in December 2025, moved back and forth through the first half of 2026, and have held above since mid-July, taking the follower-to-listener ratio from 0.547 at the October 2025 peak to 1.232 today. Ascend- then produced a 1.93x listener multiple off its pre-release base, the largest response to any release in this two-year window, ahead of Never Say Never at 1.57x with nine members and a full promotional cycle behind it. The audience that was going to leave has largely left, and what remains is committing harder and responding to new music more strongly than the larger audience did.",
        "The gap this audit is built around sits somewhere else entirely. The United States is ZEROBASEONE's number one Spotify market at 182,833 monthly listeners, 15.2 percent of the total, and South Korea does not appear in the country table at all. There is no US-owned email address, no pixel on their own membership and merchandise checkout, no YouTube membership tier on 2.12 million subscribers, and the group has never sold a ticket in the United States itself, so no buyer file exists. Every free path a US listener can take routes to a platform somebody else owns. Part One measures that across five dimensions. Part Two is what gets built on it.",
      ],
      supports: {
        heading: "What Part One Covers",
        items: [
          "Market position against fourteen third, fourth and fifth-generation boy-group peers, tiered on live consumption data rather than reputation",
          "Consumption and decay: era-by-era listener curves, the follower crossover, the response to Ascend-, and the floor between releases",
          "Audience: the market and city distribution behind the streaming, and what it says about where the demand actually sits",
          "Video intelligence: a frame-level analysis of 169 ZEROBASEONE, AND2BLE, CORTIS and BOYNEXTDOOR videos with performance data joined",
          "Infrastructure: every owned surface inspected live for capture, tracking, membership and commerce",
        ],
      },
      goals: {
        heading: "What the Audit Found",
        items: [
          "Followers hit an all-time high of 1,485,177 and have risen without interruption through the roster change. The ratio moved 0.547 to 1.232",
          "Ascend- returned a 1.93x listener multiple, the strongest of any release in two years, off the lowest base in two years",
          "The United States is the number one listening market at 182,833. South Korea does not appear in the country table",
          "Eight Korean releases, six of them million-sellers, and not one top-ten Korean digital single. The best Circle Digital peak on record is No. 14",
          "The only email capture reachable from the official socials writes to a distribution partner's list, not to the artist",
          "Their own membership and merchandise checkout carries no advertising pixel of any kind, so every paying member is unusable as an audience",
        ],
      },
      charts: [
        {
          kind: "area",
          title: "Two Years of Spotify Consumption",
          subtitle: "Weekly monthly-listener and follower readings since September 2024. Listeners move with each release. Followers only go up, including straight through the March 2026 roster change.",
          series: [
            {
              name: "Monthly listeners",
              points: [{ x: "9/4/24", y: 1465376 }, { x: "9/11/24", y: 1623589 }, { x: "9/18/24", y: 1732861 }, { x: "9/25/24", y: 1813592 }, { x: "10/2/24", y: 1736171 }, { x: "10/9/24", y: 1624620 }, { x: "10/16/24", y: 1577523 }, { x: "10/23/24", y: 1526424 }, { x: "10/30/24", y: 1445746 }, { x: "11/6/24", y: 1378364 }, { x: "11/13/24", y: 1296833 }, { x: "11/20/24", y: 1218583 }, { x: "11/27/24", y: 1197443 }, { x: "12/4/24", y: 1277732 }, { x: "12/11/24", y: 1324863 }, { x: "12/18/24", y: 1326317 }, { x: "12/25/24", y: 1315451 }, { x: "1/1/25", y: 1241363 }, { x: "1/8/25", y: 1156670 }, { x: "1/15/25", y: 1135289 }, { x: "1/22/25", y: 1194218 }, { x: "1/29/25", y: 1491803 }, { x: "2/5/25", y: 1792841 }, { x: "2/12/25", y: 1972633 }, { x: "2/19/25", y: 2044563 }, { x: "2/26/25", y: 1958115 }, { x: "3/5/25", y: 1889237 }, { x: "3/12/25", y: 1837502 }, { x: "3/19/25", y: 1824644 }, { x: "3/26/25", y: 1809141 }, { x: "4/2/25", y: 1686739 }, { x: "4/9/25", y: 1582932 }, { x: "4/16/25", y: 1501124 }, { x: "4/23/25", y: 1438868 }, { x: "4/30/25", y: 1406769 }, { x: "5/7/25", y: 1392385 }, { x: "5/14/25", y: 1370110 }, { x: "5/21/25", y: 1345769 }, { x: "5/28/25", y: 1313856 }, { x: "6/4/25", y: 1269918 }, { x: "6/11/25", y: 1218439 }, { x: "6/18/25", y: 1154785 }, { x: "6/25/25", y: 1110092 }, { x: "7/2/25", y: 1091808 }, { x: "7/9/25", y: 1093725 }, { x: "7/16/25", y: 1095606 }, { x: "7/23/25", y: 1092767 }, { x: "7/30/25", y: 1190676 }, { x: "8/6/25", y: 1271437 }, { x: "8/13/25", y: 1367250 }, { x: "8/20/25", y: 1433450 }, { x: "8/27/25", y: 1410041 }, { x: "9/3/25", y: 1388574 }, { x: "9/10/25", y: 1613563 }, { x: "9/17/25", y: 1868765 }, { x: "9/24/25", y: 2048968 }, { x: "10/1/25", y: 2157590 }, { x: "10/8/25", y: 2110222 }, { x: "10/15/25", y: 1938459 }, { x: "10/22/25", y: 1787007 }, { x: "10/29/25", y: 1673129 }, { x: "11/5/25", y: 1581605 }, { x: "11/12/25", y: 1487463 }, { x: "11/19/25", y: 1425176 }, { x: "11/26/25", y: 1343568 }, { x: "12/3/25", y: 1212945 }, { x: "12/10/25", y: 1144280 }, { x: "12/17/25", y: 1093805 }, { x: "12/24/25", y: 1076423 }, { x: "12/31/25", y: 1084819 }, { x: "1/7/26", y: 1080637 }, { x: "1/14/26", y: 1159149 }, { x: "1/21/26", y: 1292708 }, { x: "1/28/26", y: 1387673 }, { x: "2/4/26", y: 1434084 }, { x: "2/11/26", y: 1447675 }, { x: "2/18/26", y: 1422089 }, { x: "2/25/26", y: 1390201 }, { x: "3/4/26", y: 1371519 }, { x: "3/11/26", y: 1328777 }, { x: "3/18/26", y: 1283682 }, { x: "3/25/26", y: 1260289 }, { x: "4/1/26", y: 1249973 }, { x: "4/8/26", y: 1194880 }, { x: "4/15/26", y: 1144209 }, { x: "4/22/26", y: 1103953 }, { x: "4/29/26", y: 1020296 }, { x: "5/6/26", y: 1030038 }, { x: "5/13/26", y: 1032362 }, { x: "5/20/26", y: 1058134 }, { x: "5/27/26", y: 1282092 }, { x: "6/3/26", y: 1648119 }, { x: "6/10/26", y: 1851358 }, { x: "6/17/26", y: 1980507 }, { x: "6/24/26", y: 1928019 }, { x: "7/1/26", y: 1682453 }, { x: "7/8/26", y: 1531737 }, { x: "7/15/26", y: 1423472 }, { x: "7/22/26", y: 1390299 }, { x: "7/29/26", y: 1355620 }, { x: "8/5/26", y: 1320833 }, { x: "8/12/26", y: 1264543 }, { x: "8/19/26", y: 1234136 }, { x: "8/26/26", y: 1226315 }],
            },
            {
              name: "Followers",
              points: [{ x: "9/4/24", y: 715089 }, { x: "9/11/24", y: 721290 }, { x: "9/18/24", y: 728103 }, { x: "9/25/24", y: 735838 }, { x: "10/2/24", y: 742996 }, { x: "10/9/24", y: 749709 }, { x: "10/16/24", y: 758343 }, { x: "10/23/24", y: 766569 }, { x: "10/30/24", y: 774348 }, { x: "11/6/24", y: 782243 }, { x: "11/13/24", y: 789596 }, { x: "11/20/24", y: 796582 }, { x: "11/27/24", y: 803334 }, { x: "12/4/24", y: 815839 }, { x: "12/11/24", y: 829706 }, { x: "12/18/24", y: 839542 }, { x: "12/25/24", y: 847810 }, { x: "1/1/25", y: 857009 }, { x: "1/8/25", y: 865970 }, { x: "1/15/25", y: 874303 }, { x: "1/22/25", y: 884601 }, { x: "1/29/25", y: 897436 }, { x: "2/5/25", y: 908261 }, { x: "2/12/25", y: 917283 }, { x: "2/19/25", y: 925468 }, { x: "2/26/25", y: 936013 }, { x: "3/5/25", y: 946057 }, { x: "3/12/25", y: 954270 }, { x: "3/19/25", y: 961151 }, { x: "3/26/25", y: 968392 }, { x: "4/2/25", y: 975592 }, { x: "4/9/25", y: 982736 }, { x: "4/16/25", y: 989546 }, { x: "4/23/25", y: 996641 }, { x: "4/30/25", y: 1003064 }, { x: "5/7/25", y: 1009542 }, { x: "5/14/25", y: 1015682 }, { x: "5/21/25", y: 1022835 }, { x: "5/28/25", y: 1029361 }, { x: "6/4/25", y: 1035682 }, { x: "6/11/25", y: 1043558 }, { x: "6/18/25", y: 1050957 }, { x: "6/25/25", y: 1056312 }, { x: "7/2/25", y: 1062113 }, { x: "7/9/25", y: 1068333 }, { x: "7/16/25", y: 1075289 }, { x: "7/23/25", y: 1082137 }, { x: "7/30/25", y: 1091431 }, { x: "8/6/25", y: 1100040 }, { x: "8/13/25", y: 1109306 }, { x: "8/20/25", y: 1118860 }, { x: "8/27/25", y: 1129238 }, { x: "9/3/25", y: 1139489 }, { x: "9/10/25", y: 1151443 }, { x: "9/17/25", y: 1163409 }, { x: "9/24/25", y: 1172913 }, { x: "10/1/25", y: 1180204 }, { x: "10/8/25", y: 1189260 }, { x: "10/15/25", y: 1196565 }, { x: "10/22/25", y: 1203477 }, { x: "10/29/25", y: 1210380 }, { x: "11/5/25", y: 1216569 }, { x: "11/12/25", y: 1223675 }, { x: "11/19/25", y: 1229913 }, { x: "11/26/25", y: 1236800 }, { x: "12/3/25", y: 1244579 }, { x: "12/10/25", y: 1258092 }, { x: "12/17/25", y: 1263852 }, { x: "12/24/25", y: 1270712 }, { x: "12/31/25", y: 1280067 }, { x: "1/7/26", y: 1288382 }, { x: "1/14/26", y: 1297373 }, { x: "1/21/26", y: 1306605 }, { x: "1/28/26", y: 1313936 }, { x: "2/4/26", y: 1320662 }, { x: "2/11/26", y: 1326596 }, { x: "2/18/26", y: 1332759 }, { x: "2/25/26", y: 1338699 }, { x: "3/4/26", y: 1344467 }, { x: "3/11/26", y: 1349696 }, { x: "3/18/26", y: 1357030 }, { x: "3/25/26", y: 1365250 }, { x: "4/1/26", y: 1371909 }, { x: "4/8/26", y: 1377620 }, { x: "4/15/26", y: 1382805 }, { x: "4/22/26", y: 1387766 }, { x: "4/29/26", y: 1392452 }, { x: "5/6/26", y: 1397125 }, { x: "5/13/26", y: 1401530 }, { x: "5/20/26", y: 1409036 }, { x: "5/27/26", y: 1417382 }, { x: "6/3/26", y: 1425925 }, { x: "6/10/26", y: 1431894 }, { x: "6/17/26", y: 1437949 }, { x: "6/24/26", y: 1443258 }, { x: "7/1/26", y: 1447550 }, { x: "7/8/26", y: 1452020 }, { x: "7/15/26", y: 1456943 }, { x: "7/22/26", y: 1461444 }, { x: "7/29/26", y: 1466277 }, { x: "8/5/26", y: 1470291 }, { x: "8/12/26", y: 1474347 }, { x: "8/19/26", y: 1478258 }, { x: "8/26/26", y: 1481705 }],
            },
          ],
          markers: [
            { x: "2/26/25", label: "BLUE PARADISE" },
            { x: "9/3/25", label: "NEVER SAY NEVER" },
            { x: "3/11/26", label: "FIVE MEMBERS" },
            { x: "5/20/26", label: "ASCEND-" },
          ],
          tall: true,
          source: "Chartmetric, weekly readings, Sep 4 2024 to Aug 26 2026",
        },
      ],
      footnote: "All data in this document was pulled 3 September 2026 unless dated otherwise. Sources: Chartmetric, Spotify platform data, Hanteo and Circle published tallies, Oricon weekly archives, Billboard chart archives, platform audience statistics, live inspection of every owned web surface, and a dedicated ZEROBASEONE video intelligence store built for this audit. The growth plan built on these findings is in Part Two.",
    },

    // ===================================================================
    // 02. Market Position
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Market",
      title: "Market Position",
      philosophy: "Positioning is only defensible when it is tiered on live consumption. Fifteen groups, one metric spine, three tiers, and a second column that tells a different story from the first.",
      intro: "The comparison set spans the third, fourth and fifth-generation boy-group market: the acts ZEROBASEONE shares release windows, retail shelves and chart weeks with. Spotify monthly listeners (Chartmetric, 31 August 2026) is the spine. The follower-to-listener ratio is the second column, and it is where the read changes: on scale ZEROBASEONE sits eleventh of fifteen, on conversion it sits eighth, dead in the middle of a field that includes every major-label act in the lane.",
      subBlocks: [
        {
          label: "A",
          title: "The Tier Map",
          featureTiersHeading: "The Comparison Set, Tiered by Monthly Listeners",
          featureTiers: [
            {
              label: "Tier 1 / Global Streaming Engines",
              artists: [
                {
                  name: "CORTIS",
                  monthlyListeners: "12.9M Monthly Listeners",
                  instagram: "5.41M Spotify Followers / ratio 0.419",
                  reference: "HYBE, debuted August 2025. Billboard 200 No. 3 within nine months",
                  note: "The lowest ratio in the set and the highest listener count, which is what a discovery engine running at full speed looks like. Every North American date on their first run sold out. They are the clearest evidence that a rookie can build a US business inside twelve months, and the clearest measure of the distance.",
                },
                {
                  name: "Stray Kids",
                  monthlyListeners: "11.0M Monthly Listeners",
                  instagram: "24.4M Spotify Followers / ratio 2.210",
                  reference: "JYP with Republic in the US. Nine Billboard 200 No. 1s from nine albums",
                  note: "The ceiling of the category and not a realistic near-term comparison. Included because their US stadium run is the volume proof that the American demand for this genre is arena-scale when it is actually sold to.",
                },
                {
                  name: "ENHYPEN",
                  monthlyListeners: "9.88M Monthly Listeners",
                  instagram: "15.7M Spotify Followers / ratio 1.593",
                  reference: "HYBE with Geffen in the US. First Billboard 200 No. 1 in September 2026",
                  note: "Reached a US No. 1 on 98,000 units and has never entered the Hot 100, which is the shape of an album-driven fandom rather than a streaming one. The nearest structural analogue in the set to ZEROBASEONE's own profile, several years further along.",
                },
              ],
            },
            {
              label: "Tier 2 / Established Mid-Scale",
              artists: [
                {
                  name: "ATEEZ",
                  monthlyListeners: "7.25M Monthly Listeners",
                  instagram: "6.30M Spotify Followers / ratio 0.870",
                  reference: "KQ with RCA-Legacy in the US. Three Billboard 200 No. 1s, eight US stadium shows",
                  note: "Built the US business on touring first and charting second, on a multi-year promoter partnership rather than one-off festival slots. The template for converting an Asian arena act into an American one.",
                },
                {
                  name: "TOMORROW X TOGETHER",
                  monthlyListeners: "6.37M Monthly Listeners",
                  instagram: "13.2M Spotify Followers / ratio 2.078",
                  reference: "HYBE with Republic in the US. Madison Square Garden headline, Lollapalooza headline",
                  note: "Shares the KCON LA 2026 headline bill with ZEROBASEONE and sits five times ahead on listeners, which is a useful measure of what a festival slot does and does not signal about market position.",
                },
                {
                  name: "BOYNEXTDOOR",
                  monthlyListeners: "3.26M Monthly Listeners",
                  instagram: "2.60M Spotify Followers / ratio 0.797",
                  reference: "KOZ under HYBE. Six consecutive Billboard 200 entries, trending 162 to 16",
                  note: "The most instructive peer in the set. A 1,085,715 first week against 514,784, roughly 2.7 times the monthly listeners, a rising Billboard 200 trend and a first North American theatre run on sale for October 2026. They are running the play this audit recommends, from a position ZEROBASEONE held eighteen months ago.",
                },
                {
                  name: "RIIZE",
                  monthlyListeners: "2.76M Monthly Listeners",
                  instagram: "1.82M Spotify Followers / ratio 0.661",
                  reference: "SM. Four million-selling albums and no Billboard 200 entry",
                  note: "A four-time million-seller with no American chart presence of any kind. A cancelled US arena date in November 2025 is the cautionary version of a live-first strategy attempted without an owned audience underneath it.",
                },
                {
                  name: "TWS",
                  monthlyListeners: "2.40M Monthly Listeners",
                  instagram: "1.39M Spotify Followers / ratio 0.579",
                  reference: "Pledis under HYBE. No US headline tour, no Billboard 200 entry",
                  note: "Twice ZEROBASEONE's listener base and no US chart presence at all, which is the cleanest illustration in the set that streaming reach and chart conversion are separate problems.",
                },
                {
                  name: "NCT DREAM",
                  monthlyListeners: "2.02M Monthly Listeners",
                  instagram: "8.45M Spotify Followers / ratio 4.181",
                  reference: "SM. The second-highest ratio in the set",
                  note: "Four followers for every monthly listener, the profile of a deep legacy fandom with a quiet catalogue. The direction ZEROBASEONE's ratio is currently travelling if listener recovery stalls.",
                },
              ],
            },
            {
              label: "Tier 3 / Where ZEROBASEONE Sits",
              artists: [
                {
                  name: "ZEROBASEONE",
                  monthlyListeners: "1.21M Monthly Listeners",
                  instagram: "1.49M Spotify Followers / ratio 1.232",
                  reference: "WAKEONE under CJ ENM. Eleventh of fifteen on listeners, eighth on ratio",
                  note: "One of nine groups in the set whose follower count exceeds its monthly listener count, and one of the eight of those still adding followers every day. On scale they sit in the lower third. On the health of the audience they already hold, they sit at the median of a field containing HYBE, SM and JYP acts several times their size.",
                },
                {
                  name: "NCT WISH",
                  monthlyListeners: "769K Monthly Listeners",
                  instagram: "916K Spotify Followers / ratio 1.192",
                  reference: "SM with Avex in Japan. 1.83M first week and no Billboard chart entry of any kind",
                  note: "Almost the identical ratio to ZEROBASEONE on 64 percent of the listeners, and a first week three and a half times larger. The clearest illustration in the set that Korean physical sales and international streaming are separate businesses.",
                },
                {
                  name: "PLAVE",
                  monthlyListeners: "525K Monthly Listeners",
                  instagram: "442K Spotify Followers / ratio 0.841",
                  reference: "VLAST. Virtual group, Billboard 200 No. 145, one US date ever",
                  note: "A million-selling virtual act with a lower listener base than ZEROBASEONE, included to show how wide the gap between Korean sales rank and global streaming rank has become across the whole category.",
                },
                {
                  name: "xikers",
                  monthlyListeners: "389K Monthly Listeners",
                  instagram: "594K Spotify Followers / ratio 1.526",
                  reference: "KQ. Two US theatre tours, Billboard 200 peak No. 73",
                  note: "A third of ZEROBASEONE's listener base and two completed American tours, which is the cleanest evidence in the set that a US live business is not gated on streaming scale.",
                },
              ],
            },
          ],
        },
        {
          label: "B",
          title: "Where the Gap Actually Is",
          objective: "Separate the scale problem from the conversion problem, because they need different money.",
          strategy: "Read across the two columns and the field splits in a way that a single ranking hides. On monthly listeners, ZEROBASEONE is eleventh of fifteen and the distance to the tier above is large. On the follower-to-listener ratio, the same group sits eighth of fifteen, ahead of ATEEZ, BOYNEXTDOOR, RIIZE and TWS, all of whom hold two to six times the listener base. The conversion machine is working. What is not working is the top of the funnel, and the top of the funnel is the cheaper of the two problems to attack.",
          components: {
            heading: "The Three Numbers That Frame Part Two",
            items: [
              "Listeners 1,205,605, eleventh of fifteen. This is a reach problem and reach is buyable.",
              "Ratio 1.232, eighth of fifteen and rising. This is not a motivation problem. Anyone who arrives converts.",
              "United States 182,833 listeners, the largest single market, with no owned capture and no ticket ever sold into it.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Monthly Listeners, Fifteen-Group Comparison Set",
              subtitle: "Chartmetric, 31 August 2026. ATEEZ and BOYNEXTDOOR carry through 1 September.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Monthly listeners",
                  points: [
                    { x: "CORTIS", y: 12905186 },
                    { x: "Stray Kids", y: 11049887 },
                    { x: "ENHYPEN", y: 9880422 },
                    { x: "ATEEZ", y: 7247467 },
                    { x: "TOMORROW X TOGETHER", y: 6373110 },
                    { x: "SEVENTEEN", y: 4700776 },
                    { x: "BOYNEXTDOOR", y: 3257053 },
                    { x: "RIIZE", y: 2758151 },
                    { x: "TWS", y: 2404838 },
                    { x: "NCT DREAM", y: 2020543 },
                    { x: "ZEROBASEONE", y: 1205605 },
                    { x: "NCT WISH", y: 768609 },
                    { x: "PLAVE", y: 524802 },
                    { x: "THE BOYZ", y: 471629 },
                    { x: "xikers", y: 389047 },
                  ],
                },
              ],
              highlightX: ["ZEROBASEONE"],
              source: "Chartmetric",
            },
            {
              kind: "hbars",
              title: "Follower-to-Listener Ratio, Same Fifteen Groups",
              subtitle: "Spotify followers divided by monthly listeners. Higher means more of the audience that arrives commits. ZEROBASEONE sits at the exact midpoint of the field.",
              unit: "followers per listener",
              series: [
                {
                  name: "Ratio",
                  points: [
                    { x: "THE BOYZ", y: 6.24 },
                    { x: "NCT DREAM", y: 4.181 },
                    { x: "SEVENTEEN", y: 3.011 },
                    { x: "Stray Kids", y: 2.21 },
                    { x: "TOMORROW X TOGETHER", y: 2.078 },
                    { x: "ENHYPEN", y: 1.593 },
                    { x: "xikers", y: 1.526 },
                    { x: "ZEROBASEONE", y: 1.232 },
                    { x: "NCT WISH", y: 1.192 },
                    { x: "ATEEZ", y: 0.87 },
                    { x: "PLAVE", y: 0.841 },
                    { x: "BOYNEXTDOOR", y: 0.797 },
                    { x: "RIIZE", y: 0.661 },
                    { x: "TWS", y: 0.579 },
                    { x: "CORTIS", y: 0.419 },
                  ],
                },
              ],
              highlightX: ["ZEROBASEONE"],
              note: "A high ratio is a healthy fandom and a quiet discovery engine. A low ratio is the reverse. CORTIS at 0.419 and THE BOYZ at 6.24 are the two ends of that trade.",
              source: "Chartmetric, 31 August 2026",
            },
          ],
        },
      ],
      footnote: "SEVENTEEN resolves to two Chartmetric records. The Pledis group record (cm 4787) is used throughout; on the alternate record ZEROBASEONE would rank seventh of fifteen on ratio rather than eighth, so the median placement is robust and the exact rank is not. THE BOYZ is included for completeness of the lane but is in an unresolved label transition following an April 2026 contract ruling, so their figures are a snapshot of an act in flux rather than a stable comparison.",
    },

    // ===================================================================
    // 03. Consumption and Decay
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Consumption",
      title: "Consumption and Decay",
      philosophy: "A first-week number is one day of demand. A decay curve is the business. Read across four release cycles and the five-member era is the strongest streaming performer of the four.",
      intro: "This section separates the two things that happened in 2026 and are usually reported as one. Korean physical sales fell hard. Global streaming did not. The evidence for both sits below, drawn from the daily Chartmetric series and published Hanteo, Circle and Oricon tallies.",
      subBlocks: [
        {
          label: "A",
          title: "The Follower Crossover",
          objective: "Establish what the audience did through the roster change, using the one metric a fan has to actively choose.",
          strategy: "A monthly listener is a passive count. A Spotify follower is a deliberate act, and it is the closest free proxy the platform gives for intent. Across the two years to 31 August 2026 the follower count moved from 712,485 to 1,485,177 and never declined. It rose 25.8 percent in the eleven months after the October 2025 listener peak, through the December contract-extension announcement, through the January departure confirmation, through the March final show and through the May release. The line does not register the event at all.",
          components: {
            heading: "What the Crossover Means",
            items: [
              "Followers first exceeded monthly listeners on a daily reading in December 2025, crossed back and forth through the first half of 2026, and have held above since 15 July 2026. The ratio is 1.232 today against 0.547 at the listener peak.",
              "This is not a good number on its own. A rising ratio driven by falling listeners is a warning, and half of this move is exactly that.",
              "It is a good number in combination with the next block, because the same audience then delivered the largest release response in the window.",
            ],
          },
          charts: [
            {
              kind: "line",
              title: "Follower-to-Listener Ratio by Month",
              subtitle: "Followers divided by monthly listeners, first of each month. On this monthly sampling the line first clears 1.0 in January 2026; on the daily series it holds above 1.0 continuously from 15 July.",
              series: [
                {
                  name: "Ratio",
                  points: [{ x: "Sep 24", y: 0.518 }, { x: "Oct 24", y: 0.424 }, { x: "Nov 24", y: 0.547 }, { x: "Dec 24", y: 0.654 }, { x: "Jan 25", y: 0.690 }, { x: "Feb 25", y: 0.554 }, { x: "Mar 25", y: 0.491 }, { x: "Apr 25", y: 0.572 }, { x: "May 25", y: 0.714 }, { x: "Jun 25", y: 0.796 }, { x: "Jul 25", y: 0.971 }, { x: "Aug 25", y: 0.902 }, { x: "Sep 25", y: 0.824 }, { x: "Oct 25", y: 0.547 }, { x: "Nov 25", y: 0.734 }, { x: "Dec 25", y: 0.986 }, { x: "Jan 26", y: 1.180 }, { x: "Feb 26", y: 0.929 }, { x: "Mar 26", y: 0.972 }, { x: "Apr 26", y: 1.098 }, { x: "May 26", y: 1.367 }, { x: "Jun 26", y: 0.897 }, { x: "Jul 26", y: 0.860 }, { x: "Aug 26", y: 1.088 }],
                },
              ],
              markers: [
                { x: "Oct 25", label: "LISTENER PEAK" },
                { x: "Mar 26", label: "FIVE MEMBERS" },
                { x: "May 26", label: "ASCEND-" },
              ],
              source: "Chartmetric daily series, computed monthly",
            },
          ],
        },
        {
          label: "B",
          title: "The Response to Ascend-",
          objective: "Measure what the five-member record actually did, against the three releases before it.",
          strategy: "Each release is measured the same way: the monthly-listener reading on release day, the peak reading in the cycle that followed, and the multiple between them. On that measure Ascend- is the strongest release in the window. It lifted a 1,033,771 base to 1,995,324 inside 32 days, a 1.93x multiple. Never Say Never, released with nine members, a full Korean promotional cycle and a 1,514,370 first week behind it, managed 1.57x. Blue Paradise and Re-Flow returned almost nothing at 1.00x and 1.03x. The record that sold a third as many copies produced the largest streaming response of the four.",
          components: {
            heading: "Read With the Caveats Attached",
            items: [
              "The Ascend- base was the lowest of the four, and a low base flatters a multiple. The absolute peak of 1,995,324 still landed within eight percent of the all-time high set with nine members.",
              "The post-peak decay is real: 4.72 percent a week, the second-steepest of the four cycles.",
              "The floor is what matters. Listeners bottomed at 1,018,904 on 30 April 2026, immediately before the release. The current reading of 1,205,605 sits 18.3 percent above that floor four months later.",
            ],
          },
          charts: [
            {
              kind: "grouped",
              title: "Release Response by Era",
              subtitle: "Monthly-listener reading on release day against the peak reading in the cycle that followed.",
              unit: "monthly listeners",
              series: [
                {
                  name: "Base at release",
                  points: [
                    { x: "Blue Paradise", y: 1977046 },
                    { x: "Never Say Never", y: 1378004 },
                    { x: "Re-Flow", y: 1422699 },
                    { x: "Ascend- (five)", y: 1033771 },
                  ],
                },
                {
                  name: "Cycle peak",
                  points: [
                    { x: "Blue Paradise", y: 1977046 },
                    { x: "Never Say Never", y: 2157590 },
                    { x: "Re-Flow", y: 1466737 },
                    { x: "Ascend- (five)", y: 1995324 },
                  ],
                },
              ],
              note: "Multiples: Blue Paradise 1.00x, Never Say Never 1.57x, Re-Flow 1.03x, Ascend- 1.93x.",
              source: "Chartmetric daily series",
            },
            {
              kind: "bars",
              title: "Weekly Decay Rate, Peak to Floor",
              subtitle: "Compound weekly rate of decline from each cycle's listener peak to its subsequent floor.",
              unit: "percent per week",
              series: [
                {
                  name: "Weekly decay",
                  points: [
                    { x: "Blue Paradise", y: 3.13 },
                    { x: "Never Say Never", y: 5.7 },
                    { x: "Re-Flow", y: 3.1 },
                    { x: "Ascend- (five)", y: 4.72 },
                  ],
                },
              ],
              note: "Lower is better. The nine-member Never Say Never cycle decayed fastest of the four despite the largest promotional footprint.",
              source: "Chartmetric daily series",
            },
          ],
        },
        {
          label: "C",
          title: "The Physical Correction",
          objective: "State the album fall accurately, and locate it.",
          strategy: "Six consecutive releases sold over one million copies in their first week, from the July 2023 debut to Never Say Never in September 2025. That streak ended in February 2026 with Re-Flow at 66,921, a single album released in a different format and at a different scale. Ascend-, the first record as five, returned 514,784 on Hanteo against 1,514,370 for Never Say Never, a fall of 66.0 percent. Circle records the same cycle as 1,459,415 to 495,980, a fall of 66.0 percent to the decimal. Two independent charts telling the same story is strong evidence that the figure is the real demand signal and not a reporting artefact.",
          components: {
            heading: "Three Things the Album Numbers Do Not Say",
            items: [
              "They do not say the audience left. The follower series rose without interruption across the same months.",
              "They do not say the music underperformed. The same record produced the largest streaming multiple in the window.",
              "They do say that a first week built on a nine-member photocard economy does not survive a five-member lineup, which is arithmetic rather than a marketing failure.",
            ],
          },
          charts: [
            {
              kind: "bars",
              title: "Hanteo First-Week Album Sales",
              subtitle: "Every Korean release from debut to the present. Re-Flow is a single album and sits outside the mini-album comparison.",
              unit: "copies, first week",
              series: [
                {
                  name: "First week",
                  points: [
                    { x: "Youth in the Shade", y: 1822028 },
                    { x: "Melting Point", y: 2131352 },
                    { x: "You Had Me at Hello", y: 1353109 },
                    { x: "Cinema Paradise", y: 1112444 },
                    { x: "Blue Paradise", y: 1252315 },
                    { x: "Never Say Never", y: 1514370 },
                    { x: "Re-Flow", y: 66921 },
                    { x: "Ascend-", y: 514784 },
                  ],
                },
              ],
              highlightX: ["Ascend-"],
              note: "Cumulative album sales across Korea and Japan passed ten million on 25 May 2026.",
              source: "Hanteo published tallies. Three figures carry contemporaneous editorial sourcing; five, including Never Say Never, come from a fan sales tracker cross-checked against Circle and are second-tier.",
            },
            {
              kind: "bars",
              title: "Oricon First-Week Sales, Japanese Releases",
              subtitle: "Three Japanese EPs and the debut single. A 65 percent fall in nineteen months, on a curve that started before the roster change.",
              unit: "copies, first week",
              series: [
                {
                  name: "Oricon first week",
                  points: [
                    { x: "Yura Yura (Mar 24)", y: 302315 },
                    { x: "Prezent (Jan 25)", y: 257157 },
                    { x: "Iconik (Oct 25)", y: 179648 },
                    { x: "KaikiLove (Aug 26)", y: 90640 },
                  ],
                },
              ],
              note: "KaikiLove took the Oricon weekly No. 1 on 90,640. Iconik lost the No. 1 while selling nearly twice that. Chart position and demand have decoupled in this market.",
              source: "Oricon weekly album archives",
            },
          ],
        },
        {
          label: "D",
          title: "The Catalogue and the Editorial Position",
          objective: "Establish what the catalogue does between releases, and how much of it is reaching a programmed audience.",
          strategy: "Eighty-one catalogue rows carry 831,113,707 cumulative Spotify streams across roughly 75 distinct songs. The current rate tells a different story from the cumulative total: TOP 5, the Ascend- title track, sits twentieth on cumulative streams and leads every track with a current weekly rate at 276,476, with the highest track popularity in the catalogue at 67. The debut single In Bloom, three years old, still pulls 122,148 a week. That is catalogue behaviour rather than promotion, and it is worth investing behind. What is not there is programming. Current Spotify editorial support runs to eight placement rows across five distinct playlists reaching 236,366 people, and every one of the five is a K-pop playlist. The artist-level counter reports a wider historic editorial footprint on a different scope; the current-placement endpoint is the one that describes what is programmed today. There is no general-pop editorial placement anywhere in the catalogue.",
          components: {
            heading: "The Structural Fact Under All of It",
            items: [
              "Eight Korean releases and no top-ten Korean digital single. The highest Circle Digital peak on record is Iconik at No. 14, followed by TOP 5 at No. 15.",
              "In Bloom, the debut, peaked at No. 38. Feel the Pop at No. 82. Crush at No. 88. Doctor! Doctor! at No. 107.",
              "A group that sells millions of albums and does not chart digitally at home is a group whose business runs on fandom rather than on songs reaching the general public. That is the whole strategic problem in one line, and it is also why the US market matters more here than it would for a peer.",
            ],
          },
          charts: [
            {
              kind: "hbars",
              title: "Current Weekly Stream Rate, Top Catalogue Tracks",
              subtitle: "Weekly Spotify streams as of the pull, not cumulative totals. The newest record is doing the most work.",
              unit: "streams per week",
              series: [
                {
                  name: "Weekly streams",
                  points: [
                    { x: "TOP 5 (2026)", y: 276476 },
                    { x: "Doctor! Doctor! (2025)", y: 139690 },
                    { x: "In Bloom (2023)", y: 122148 },
                    { x: "ICONIK (2025)", y: 95731 },
                    { x: "BLUE (2025)", y: 56232 },
                    { x: "GOOD SO BAD (2024)", y: 54777 },
                    { x: "Feel the POP (2024)", y: 54304 },
                    { x: "SWEAT (2024)", y: 50101 },
                    { x: "CRUSH (2023)", y: 32183 },
                    { x: "Always (2023)", y: 13361 },
                  ],
                },
              ],
              highlightX: ["TOP 5 (2026)"],
              source: "Chartmetric track statistics",
            },
          ],
        },
      ],
      footnote: "Chart-coverage gaps in the daily series are treated as gaps and never as zeros. 208 of 730 daily points in the listener series and 237 of 730 in the follower series are interpolated by the provider. Every release peak and cycle floor cited above falls on a non-interpolated reading; the two current readings, 1,205,605 listeners and 1,485,177 followers, are the provider's interpolated values for 31 August 2026. Multiples and decay rates are arithmetic on the sourced figures rather than reported figures.",
    },

    // ===================================================================
    // 04. Audience
    // ===================================================================
    {
      type: "audience",
      number: "04",
      navLabel: "Audience",
      title: "Audience and Markets",
      thesis: "The United States is the number one listening market and South Korea does not appear in the table at all. That single fact reorders the whole plan.",
      intro: "Spotify market distribution, Chartmetric, 3 September 2026. The eleven countries the platform reports account for 825,219 listeners, roughly 68 percent of the 1.21 million total, so this is the visible majority rather than the complete picture. Every country figure is a platform estimate.",
      metrosLabel: "Top Listening Cities",
      metros: [
        { name: "Singapore", tier: "primary" },
        { name: "Kuala Lumpur", tier: "primary" },
        { name: "Taipei", tier: "primary" },
        { name: "Bangkok", tier: "primary" },
        { name: "Tokyo", tier: "secondary" },
        { name: "Jakarta", tier: "secondary" },
        { name: "Quezon City", tier: "secondary" },
        { name: "Bandung", tier: "secondary" },
        { name: "Sydney", tier: "secondary" },
        { name: "Los Angeles", tier: "secondary" },
      ],
      psychographics: [
        {
          label: "What the Country Table Says",
          items: [
            "United States 182,833 listeners, 15.2 percent of the total and the largest single market by a wide margin over Malaysia at 150,466.",
            "Southeast Asia in aggregate is larger than the United States: Malaysia, Indonesia, the Philippines, Thailand and Singapore total 426,949 listeners across five markets.",
            "Japan sits seventh at 40,956 despite being the second commercial market by revenue, four Japanese releases deep and RIAJ certified.",
            "South Korea does not appear in the reported country list at all, which is consistent with a Korean audience that consumes on domestic platforms rather than Spotify.",
          ],
        },
        {
          label: "What the City Table Says",
          items: [
            "No Seoul, and no Los Angeles above ninth. The top four cities are Singapore, Kuala Lumpur, Taipei and Bangkok.",
            "The United States is the largest country and its largest city ranks tenth at 9,870, which means American listening is dispersed rather than concentrated in one metro.",
            "A dispersed national audience is harder to reach with live and easier to reach with paid media and owned channels. That is a direct argument for the sequencing in Part Two.",
          ],
        },
      ],
      behaviorSignals: [
        {
          behavior: "13.2 million followers across Instagram, TikTok, X and YouTube sit on top of a funnel with no artist-owned capture point",
          platforms: ["Instagram 4.64M", "TikTok 5.3M", "YouTube 2.12M", "X 1.1M"],
          implication: "Reach is not the constraint. Ownership is. Every free path from these accounts leads to a platform somebody else controls.",
        },
        {
          behavior: "One billion cumulative YouTube views across 3,023 videos with channel memberships switched off",
          platforms: ["YouTube"],
          implication: "A revenue and identity surface that is already built, already populated and currently returning nothing.",
        },
        {
          behavior: "The global fan club is paid, priced at 22 US dollars, and sits behind a Korean application",
          platforms: ["Mnet Plus"],
          implication: "There is no free tier anywhere. The only way a US fan can identify themselves to this artist is to pay 22 dollars and install a Korean app first.",
        },
      ],
      barriers: [
        {
          barrier: "No US-owned email or phone list exists. The only capture reachable from the official socials is a release smart link that collects into a distribution partner's list.",
          response: "A free, US-only capture tier is the cheapest single fix available and does not require WAKEONE to change any Korean-side practice.",
        },
        {
          barrier: "Korean privacy practice constrains bundled signups and pushes Korean labels toward fan platforms rather than direct lists, which is why the Korean side is structured the way it is.",
          response: "Build the capture for US fans only and leave the Korean audience on the platforms it already uses. The two do not have to share a system.",
        },
        {
          barrier: "The group has never sold a ticket in the United States. All six US appearances across three years were third-party festival or showcase slots in Southern California.",
          response: "No US buyer file exists to build a lookalike audience from, which makes the owned-capture work a prerequisite rather than a parallel track.",
        },
      ],
      triggers: [
        {
          trigger: "KCON LA 2026 headline slot on 15 August, Day 2 of a 14 to 16 August run, with a member serving as festival ambassador and MC",
          implication: "The most recent and most visible US moment the group has ever had, and no owned capture surface existed to catch it.",
        },
        {
          trigger: "Ascend- reached US retail at Target, Walmart and Barnes & Noble on 26 June 2026",
          implication: "US physical distribution is already in place. The buyer files sit with the retailers.",
        },
        {
          trigger: "Never Say Never reached No. 23 and Blue Paradise No. 28 on the Billboard 200",
          implication: "Two top-thirty American album entries show the ceiling is real. Both arrived weeks after the Korean release, and every US chart entry on record has debuted at its peak and fallen.",
        },
      ],
      genres: ["K-pop", "Dance pop", "Korean boy group"],
      platformSignals: [
        { platform: "Spotify editorial", note: "Eight placement rows across five distinct playlists, 236,366 distinct reach. All five are K-pop playlists. No general-pop editorial placement in the catalogue." },
        { platform: "Instagram", note: "Median reel views 783,540 across the last 250 posts. Roughly twice the TikTok median on the same content." },
        { platform: "TikTok", note: "Median views 427,826 across the last 250 posts, on 1,754 videos and 420.8 million cumulative likes." },
        { platform: "YouTube", note: "2.12 million subscribers, 1,093,406,213 views, 3,023 videos. Recurring named formats across 28 playlists. Memberships disabled." },
      ],
      footnote: "Country and city figures are Spotify platform estimates surfaced through Chartmetric and carry an estimate flag. Social medians are computed on the most recent 250 posts per handle and use medians rather than means because several view counts on both owned and competitor accounts are extreme outliers relative to their like counts.",
    },

    // ===================================================================
    // 05. Video Intelligence
    // ===================================================================
    {
      type: "contentAnalysis",
      number: "05",
      navLabel: "Video",
      title: "Video Intelligence",
      intro: "169 videos were downloaded, transcribed, scene-detected and entity-tagged inside a dedicated ZEROBASEONE knowledge store, then joined to the real view, like, comment and share counts for every post. The comparison set was chosen to answer three specific questions: what the four departed members are doing now, what a HYBE rookie with thirteen times the reach does differently, and what a peer with comparable Korean sales and a first US tour on sale does differently.",
      clientQuestion: {
        attribution: "The question this section answers",
        question: "The audience held. The music is landing. So what is the content actually doing, and where is it leaving money on the table?",
      },
      methodology: [
        { label: "Corpus", value: "169 videos, 69.2 minutes, four accounts across TikTok and Instagram" },
        { label: "Owned", value: "59 ZEROBASEONE posts, February to September 2026, spanning both the nine-member and five-member eras" },
        { label: "Comparison", value: "AND2BLE 50, CORTIS 35, BOYNEXTDOOR 25" },
        { label: "Selection", value: "Top performers by views within each account, so every finding is a comparison of best work against best work" },
        { label: "Performance join", value: "Views, likes, comments and shares bound to every item and compared within platform only" },
      ],
      corpusStats: [
        { label: "Videos analysed", value: "169", detail: "69.2 minutes across four accounts" },
        { label: "Owned posts", value: "59", detail: "Both eras, February to September 2026" },
        { label: "Inventory behind it", value: "1,874", detail: "Full post inventory the selection was drawn from" },
        { label: "Findings", value: "6", detail: "Two of them refuted a widely held assumption" },
      ],
      mixColumnLabel: "ZEROBASEONE",
      benchmarkColumnLabel: "Comparison set",
      mixHeading: "The Content Mix, Measured",
      mixIntro: "Every row below is computed from the corpus and the performance join rather than from captions or from impression. Instagram share counts are not published by the platform, so engagement rates are compared within platform only and never across.",
      mixRows: [
        { metric: "Posts carrying an explicit ask", lolaAmour: "11 of 59 (19%)", benchmark: "4 of 110 (4%)", read: "behind", note: "CORTIS TikTok and BOYNEXTDOOR ask for nothing across 45 posts between them." },
        { metric: "Median TikTok views, top band", lolaAmour: "1,459,310", benchmark: "1,454,514 (AND2BLE)", read: "inline", note: "A ratio of 1.00x against a group that debuted in May 2026." },
        { metric: "Median TikTok engagement rate", lolaAmour: "0.1890", benchmark: "0.1979 (AND2BLE)", read: "behind", note: "AND2BLE also leads on Instagram at 0.1166 against 0.1033." },
        { metric: "Posts with any Japan signal", lolaAmour: "1 of 59", benchmark: "3 of 25 (BOYNEXTDOOR)", read: "behind", note: "The single ZEROBASEONE instance is a Korean transliteration, not Japanese." },
        { metric: "Release or promo assets as a share of output", lolaAmour: "8 of 59 (14%)", benchmark: "n/a", read: "neutral", note: "86 percent of output is self-generated, and that is where the winners are." },
        { metric: "Instagram over TikTok, same account", lolaAmour: "1.83x inventory, 2.09x top band", benchmark: "n/a", read: "ahead", note: "1.83x across the full post inventory and 2.09x within the top-performing band. The gap holds on every post, not only on cross-posted ones." },
        { metric: "Median post duration, TikTok", lolaAmour: "18.3s", benchmark: "15.3s (CORTIS)", read: "neutral", note: "Duration does not explain a thirteen-fold reach gap in either direction." },
      ],
      mixFootnote: "Percentages are computed on the analysed corpus, which is the top performing band of each account. Absolute view figures in this section are therefore higher than each account's full-inventory median and are used only for comparison between accounts, never as a description of typical performance.",
      charts: [
        {
          kind: "grouped",
          title: "Median Views by Account and Platform",
          subtitle: "Full 1,874-post inventory. Medians rather than means, because several view counts are extreme outliers. Windows differ by handle: ZEROBASEONE covers February to September 2026, CORTIS and BOYNEXTDOOR are capped samples starting May and June, and AND2BLE is a complete catalogue.",
          unit: "median views",
          series: [
            {
              name: "TikTok",
              points: [
                { x: "ZEROBASEONE", y: 427826 },
                { x: "AND2BLE", y: 375978 },
                { x: "BOYNEXTDOOR", y: 491878 },
                { x: "CORTIS", y: 5616366 },
              ],
            },
            {
              name: "Instagram",
              points: [
                { x: "ZEROBASEONE", y: 783540 },
                { x: "AND2BLE", y: 656596 },
                { x: "BOYNEXTDOOR", y: 1405696 },
                { x: "CORTIS", y: 8470424 },
              ],
            },
          ],
          note: "CORTIS runs roughly thirteen times ZEROBASEONE on TikTok and eleven times on Instagram. AND2BLE, four members and three months old, runs at 88 percent of ZEROBASEONE on TikTok and 84 percent on Instagram.",
          source: "Platform data via TokScript, 3 September 2026",
        },
        {
          kind: "bars",
          title: "View Index by Cast Size, ZEROBASEONE Posts",
          subtitle: "Median view index against the account's own platform median. Three or more members on screen is the only configuration that beats the baseline.",
          unit: "index vs account median",
          series: [
            {
              name: "View index",
              points: [
                { x: "Three or more on screen", y: 1.22 },
                { x: "Solo member", y: 0.99 },
                { x: "Two members", y: 0.88 },
              ],
            },
          ],
          note: "Member-solo posts are the only format negative on engagement on both platforms, at minus 23 percent on TikTok and minus 24 percent on Instagram. The account makes 25 solo posts against 20 group posts.",
          source: "Video intelligence store joined to platform performance data",
        },
      ],
      findingsHeading: "Six Findings",
      findingsIntro: "Each finding states what the corpus shows, what the number is, and what changes as a result. Where the data overturned an expectation, the finding says so and shows the evidence on both sides.",
      findings: [
        {
          id: "f1",
          title: "AND2BLE has already drawn level on TikTok",
          verdict: "confirmed",
          confidence: "High. Two independent measures agree on direction.",
          summary: "Within the top-performing band of each account, the four departed members post a median 1,454,514 TikTok views against 1,459,310 for the five who kept the name. A ratio of 1.00x, three months after their debut. They also lead on engagement rate on both platforms, and their post-debut engagement is rising while their views settle, which is the shape of a real audience rather than a curiosity spike.",
          evidence: [
            "Median TikTok views in the analysed band: ZEROBASEONE 1,459,310, AND2BLE 1,454,514. Ratio 1.00x.",
            "Median engagement rate, TikTok: AND2BLE 0.1979 against ZEROBASEONE 0.1890. Instagram: 0.1166 against 0.1033.",
            "AND2BLE post-debut engagement moved from 0.1972 to 0.2295 while median views fell from 1,613,359 to 1,122,029.",
            "AND2BLE talks to camera as a standing format: 18 of 50 posts classified as member-address, 15 of those addressing the lens directly. ZEROBASEONE has no equivalent recurring format.",
            "English is detected spoken or sung in 24 of 50 AND2BLE posts and burned into the picture in 11 of 50.",
          ],
          counterEvidence: [
            "Across the full 1,874-post inventory rather than the top band, ZEROBASEONE still leads on medians: 427,826 against 375,978 on TikTok and 783,540 against 656,596 on Instagram. The typical ZEROBASEONE post is still ahead.",
            "ZEROBASEONE is out-producing them by a wide margin. 15 of 59 posts were classified as polished performance, cinematic or event production against 8 of 50 for AND2BLE.",
          ],
          examples: [
            { platform: "tiktok", id: "7627856110334037266", label: "AND2BLE, top TikTok post", stat: "5,803,372 views" },
            { platform: "instagram", id: "DXQjj7eCYER", label: "ZEROBASEONE, hanbok courtyard, top group-scale post", stat: "7,423,168 views, index 2.44" },
            { platform: "tiktok", id: "7677519313493970196", label: "AND2BLE, highest engagement post in their set", stat: "engagement rate 0.3444" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "Stop treating the roster change as a completed event. The fandom is being actively contested on a weekly basis and the contest is close.",
              "Build one recurring member-address format. It is the single clearest structural thing the other side has and this side does not.",
              "Scale is not the differentiator it looks like. The bigger production budget is producing parity, not separation.",
            ],
          },
        },
        {
          id: "f2",
          title: "ZEROBASEONE is the only account that asks for anything, and it buys nothing",
          verdict: "confirmed",
          confidence: "High on the counts. Medium on the effect, because the sample of CTA-carrying posts is small.",
          summary: "Eleven of 59 ZEROBASEONE posts carry an explicit ask. Across the three comparison accounts it is four of 110. CORTIS on TikTok and BOYNEXTDOOR across both platforms ask for nothing at all, across 45 posts between them. The asks return no additional reach and cost engagement on TikTok specifically.",
          evidence: [
            "ZEROBASEONE 19 percent of posts carry an ask. The comparison set combined is 4 percent.",
            "Instagram 7 of 30, TikTok 4 of 29. CORTIS TikTok 0 of 20. BOYNEXTDOOR 0 of 25.",
            "Posts with an ask return a median view index of 1.00 against 0.99 for posts without. No measurable reach effect in either direction.",
            "On TikTok, posts carrying an ask run 30 percent below the account's own engagement baseline at 0.1328 against 0.1890.",
          ],
          counterEvidence: [
            "On Instagram the same posts run 6 percent above the engagement baseline, so the effect is platform-specific rather than universal.",
            "Both sub-samples are small, at four TikTok posts and six Instagram posts. Direction is clear, magnitude is not.",
          ],
          examples: [
            { platform: "tiktok", id: "7640875917383879956", label: "ZEROBASEONE post carrying an explicit ask", stat: "2,547,135 views" },
            { platform: "tiktok", id: "7633810617371020565", label: "Second example, same pattern" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "The asks are not the problem. What they ask for is. The asks that were itemised all point at a platform the artist does not own.",
              "Redirect the same nineteen percent of posts at an owned destination and the identical behaviour starts producing an asset instead of a referral.",
              "Move the asks to Instagram, where they cost nothing, and drop them from TikTok, where they cost 30 percent of engagement.",
            ],
          },
        },
        {
          id: "f3",
          title: "Zero Japanese across 59 posts, while the Japanese first week falls 65 percent",
          verdict: "confirmed",
          confidence: "High. Caption-level counts are unambiguous.",
          summary: "Exactly one of 59 owned posts carries any Japan signal, and it is a Korean transliteration rather than Japanese. Not one kana character appears across five months of captions. Over the same period Oricon first weeks fell from 257,157 to 179,648 to 90,640 across three EPs, and Japan is the second-largest commercial market for the group.",
          evidence: [
            "1 of 59 owned posts carries a Japan signal. Zero kana characters across 59 captions spanning February to September 2026.",
            "Oricon first weeks: Prezent 257,157 in January 2025, Iconik 179,648 in October 2025, KaikiLove 90,640 in August 2026. A 65 percent fall in nineteen months.",
            "BOYNEXTDOOR runs Japanese on 3 of 25 analysed posts, including a Japanese platform partnership at 31.2 million views and a Japanese arena tour announcement.",
            "Japan sits seventh in the Spotify country table at 40,956 listeners, well below its commercial weight.",
          ],
          counterEvidence: [
            "A separate Japanese-language account exists on X with 337,800 followers, and zerobaseone.jp carries a full Japanese fan club. The Japan work is real, it is simply firewalled off the main global accounts.",
            "KaikiLove still took the Oricon weekly No. 1, so the fall is in absolute demand rather than in competitive position.",
          ],
          examples: [
            { platform: "instagram", id: "DZzbgsSE1yj", label: "BOYNEXTDOOR, Japanese platform partnership", stat: "31,241,930 views" },
            { platform: "tiktok", id: "7652930012026260756", label: "BOYNEXTDOOR, Japanese arena tour announcement", stat: "4,183,967 views" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "The Japan decline is not a Japan-content problem, it is a Japan-distribution problem. The content exists and the global accounts never carry it.",
              "Japanese-language posting on the main accounts costs nothing and reaches an audience that is already buying.",
              "Treat Japan as a defence line in Part Two rather than a growth line. The first week is falling faster than Korea.",
            ],
          },
        },
        {
          id: "f4",
          title: "The release lane is the weakest lane the account runs",
          verdict: "refuted",
          confidence: "High. The corpus overturned the caption-based reading.",
          summary: "A caption search would classify eleven of 59 posts as release or promo assets. The corpus says eight. Those eight return a view index of 0.83 and sit 21 percent below the TikTok engagement baseline. Eighty-six percent of output is self-generated, and that is where the winners live.",
          evidence: [
            "8 of 59 posts classified as release or promo assets by the corpus, against 11 by caption search.",
            "Release-tied posts return a 0.83 median view index against the account's own median.",
            "The same posts run 21 percent below the TikTok engagement baseline.",
            "86 percent of output is self-generated and contains the top-performing posts in the set.",
          ],
          counterEvidence: [
            "The analysed window covers a period with only one release in it, so the release lane is thinly sampled at eight posts.",
            "A release asset serves a purpose beyond reach, which this measure does not capture.",
          ],
          examples: [
            { platform: "instagram", id: "DYcaOLxJO0h", label: "Release-tied post, low band", stat: "2,451,277 views" },
            { platform: "tiktok", id: "7640875917383879956", label: "Release-tied post", stat: "2,547,135 views" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "Do not build the comeback plan around release assets. They are the weakest performing content the account makes.",
              "The self-generated 86 percent is the asset. Fund it as a standing production line rather than as filler between campaigns.",
              "Content lanes here are classified frame by frame rather than from captions, because on this corpus the caption read overstated release dependence by more than a third.",
            ],
          },
        },
        {
          id: "f5",
          title: "There is no member effect. Cast size is the lever",
          verdict: "confirmed",
          confidence: "Medium to high. Clear on cast size, clear on the absence of a member effect.",
          summary: "No individual member drives performance. The most-featured member appears in 27 percent of output and returns a 1.07 index, which is noise. What does move the number is how many people are on screen: three or more indexes 1.22, a solo member 0.99, and two members 0.88. Member-solo is also the only format negative on engagement on both platforms. The account currently makes more solo posts than group posts.",
          evidence: [
            "Most-featured member: 16 of 59 posts, 1.07 view index. Any member-tagged post: 0.99. Untagged: 1.00.",
            "Three or more members on screen: 1.22 index. Solo: 0.99. Duo: 0.88.",
            "Member-solo engagement runs minus 23 percent on TikTok and minus 24 percent on Instagram against the account's own baselines.",
            "Output split: 25 solo posts against 20 group posts.",
          ],
          counterEvidence: [
            "Solo posts serve a fandom-maintenance purpose that a reach index does not measure, and in a five-member group each member carries a larger share of the whole.",
            "The duo figure at 0.88 rests on a small sample and is a direction rather than a rule.",
          ],
          examples: [
            { platform: "instagram", id: "DXQjj7eCYER", label: "Full group on screen, top of the set", stat: "7,423,168 views, index 2.44" },
            { platform: "tiktok", id: "7608576504078798100", label: "Group configuration, second example", stat: "2,878,276 views, index 1.97" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "Invert the current ratio. The account makes 25 solo posts to 20 group posts and the group posts index 23 percent higher.",
              "Stop looking for a breakout member to lead the content. The data says there is not one, and looking for one has cost output.",
              "Three or more on screen is the most reliably performing configuration the group owns, and a five-member lineup can field it more often and at larger scale than a four-member one can.",
            ],
          },
        },
        {
          id: "f6",
          title: "Instagram is worth twice TikTok on every post, and the cross-posting arbitrage does not exist",
          verdict: "refuted",
          confidence: "High on the platform gap. High on the refutation.",
          summary: "Cross-posting the same video to Instagram is widely assumed to multiply reach four to five times. On this corpus it is 1.84x, and the account's ordinary Instagram-over-TikTok gap in the same band is already 2.09x, so cross-posted twins actually land below the normal platform difference. The real and more useful finding is the platform gap itself, 1.83x across the full inventory, which applies to every post whether it is twinned or not.",
          evidence: [
            "Eight twin pairs identified. Median Instagram over TikTok ratio 1.84x.",
            "Account-level Instagram over TikTok baseline: 2.09x within the analysed band, 1.83x across the full 1,874-post inventory.",
            "One twin runs backwards at 0.91x, so the effect is not even directionally reliable at the post level.",
            "Twins do beat their own platform baselines, at 1.29x on TikTok and 1.21x on Instagram, because they are simply better posts.",
          ],
          counterEvidence: [
            "Eight pairs is a small sample and twin identification depends on matching content across platforms, which is imperfect.",
            "Instagram does not publish share counts, so engagement rates on the two platforms are not directly comparable and only the view comparison is clean.",
          ],
          examples: [
            { platform: "instagram", id: "DXQjj7eCYER", label: "Twin pair, best case at 4.19x" },
            { platform: "tiktok", id: "7639269192474070293", label: "Twin pair, worst case at 0.91x" },
          ],
          pivot: {
            title: "What this changes",
            actions: [
              "Weight Instagram at roughly twice TikTok when planning paid support and creative volume, on all content rather than only on cross-posts. The measured gap is 1.83x across the full inventory.",
              "Cross-post everything anyway. It costs nothing and the downside case observed here is a single post at parity.",
              "Plan Instagram weight on the measured platform gap rather than on a cross-posting premium.",
            ],
          },
        },
      ],
      footnote: "Method note, stated so the findings can be weighed properly. The knowledge store holds the top performing band of each account, so comparisons are best against best and every effect size is measured against a high baseline rather than against typical output. Two Jockey passes over the same 59 videos disagreed on direct-address counts, at eight against fourteen, so that specific field is directionally reliable and numerically unsettled. Two claims produced during this analysis, on gag-format engagement and on point-of-view framing, were withdrawn when recomputing within platform reduced them to noise; both are recorded rather than removed. In-video call-to-action timing and a full second-source cross-check remain open and are scheduled for the next pass.",
    },

    // ===================================================================
    // 06. Infrastructure Audit
    // ===================================================================
    {
      type: "brandAudit",
      number: "06",
      navLabel: "Infrastructure",
      title: "Infrastructure Audit",
      intro: "Every owned surface was loaded and inspected on 3 September 2026: page source, form endpoints, checkout configuration objects, client-side tracking globals and link destinations. An absence is only recorded below where the surface was actually reached and the thing was verifiably not present.",
      verdict: "The problem is not awareness, it is ownership. Roughly 13.2 million followers and a billion YouTube views sit on top of a funnel whose only artist-controlled capture point costs 22 dollars and lives behind a Korean application. Every free path a United States fan can take routes to a platform somebody else owns.",
      scorecard: [
        { dimension: "Owned email capture, global funnel", status: "Absent", evidence: "The WAKEONE artist page carries zero form and zero input elements. The global link-in-bio carries nine links, all to other social platforms. The one email capture reachable from the official socials sits on a release smart link and collects into a distribution partner's list." },
        { dimension: "SMS capture", status: "Absent", evidence: "No phone capture on any owned surface in any market." },
        { dimension: "Advertising pixels, artist-owned properties", status: "Absent", evidence: "The WAKEONE page and the Japanese site carry analytics only. The membership and merchandise platform returns undefined for every advertising global and an empty data layer. The global store's own configuration object carries a null pixel and a null tag-manager id." },
        { dimension: "Retargeting stack", status: "Present, not owned", evidence: "Three Meta pixels, two Google Ads tags, two analytics properties and a Snapchat pixel, all on the release smart link, which belongs to the distribution partner rather than the artist." },
        { dimension: "Paid membership", status: "Present", evidence: "A global fan club open to United States fans at 22 dollars, capturing name, date of birth and a contact field, with a term running to 30 April 2027. A separate paid direct-message product runs at roughly 4,400 won a month." },
        { dimension: "Free membership tier", status: "Absent", evidence: "There is no free way for any fan anywhere to identify themselves to this artist." },
        { dimension: "YouTube channel memberships", status: "Disabled", evidence: "Checked against the channel's initial data for every membership marker on both the main and about surfaces. All absent, on 2.12 million subscribers and 1.09 billion views." },
        { dimension: "Merchandise and commerce", status: "Present, not owned", evidence: "The global store is United States dollar priced with fulfilment and buyer email held by a third-party service. The Weverse listing resolves to a generic bucket rather than a dedicated community." },
        { dimension: "Lightstick and physical fandom goods", status: "Present", evidence: "Official lightstick since 24 October 2023. Heavy album version strategy including platform album formats and retailer-exclusive photocard variants." },
        { dimension: "United States retail", status: "Present", evidence: "Target, Walmart and Barnes & Noble carried Ascend- from 26 June 2026, five and a half weeks after the Korean release. Never Say Never had a Target exclusive from July 2025." },
        { dimension: "United States ticketing and buyer file", status: "Absent", evidence: "No headline United States show has ever been sold. All six United States appearances across three years were third-party festival or showcase slots in Southern California, so the promoter holds every buyer record." },
        { dimension: "Japan infrastructure", status: "Present", evidence: "A full Japanese fan club and store on a Japanese membership platform, reachable directly from the Japanese social account. This is the one market where the capture layer is built." },
      ],
      foundations: [
        { label: "Followers across four global platforms", value: "13.2M", note: "Instagram 4.64M, TikTok 5.3M, YouTube 2.12M, X 1.1M" },
        { label: "Cumulative YouTube views", value: "1,093,406,213", note: "Across 3,023 videos, memberships disabled" },
        { label: "Global fan club price", value: "$22", note: "The only owned identity surface, and it is paid" },
        { label: "Advertising pixels on owned commerce", value: "0", note: "Every paying member is currently unusable as a seed audience" },
        { label: "US-owned email addresses", value: "0", note: "In the largest listening market" },
        { label: "Months since debut", value: "38", note: "Lightstick shipped at month 3. The capture layer has not shipped" },
      ],
      strengths: [
        {
          title: "The commerce and community layer already exists and already takes money",
          detail: "The membership platform runs a global fan club, a paid direct-message product and a merchandise shop, priced in three currencies with live-show commerce enabled. This is not a build from zero. It is a working system with the measurement layer missing.",
        },
        {
          title: "United States physical distribution is in place",
          detail: "Target, Walmart and Barnes & Noble all carried the most recent release. Two nine-member-era albums reached the Billboard 200 top thirty, which shows the ceiling is real. The most recent release had the widest retail footprint and did not chart at all, which shows availability alone does not carry it. The stated label intent is to keep expanding United States local releases.",
        },
        {
          title: "Japan proves the group can run a proper capture stack",
          detail: "The Japanese side has a dedicated site, a fan club on a real membership platform, a store, and a Japanese social account whose bio links to the capture surface rather than to another social platform. The template exists inside the organisation.",
        },
        {
          title: "A mature content system with named recurring formats",
          detail: "Twenty-eight playlists carrying recurring franchise formats, heavy short-form use, and 3,023 videos. The production capability is not the constraint anywhere in this audit.",
        },
      ],
      gaps: [
        {
          title: "The only email capture in the global funnel belongs to somebody else",
          finding: "The release smart link collects an email address and a country, and the consent notice names a distribution partner as the sender. That list sits label-side and outside the artist's control.",
          opportunity: "A United States capture surface on an artist-controlled destination, running alongside rather than replacing the existing link, converts the same traffic into an owned asset. This is the single highest-value fix in the audit and it requires no change to any Korean-side practice.",
        },
        {
          title: "Paying members cannot be used as an audience",
          finding: "The membership and merchandise checkout carries no advertising or analytics tracking of any kind. Verified client-side after render: every advertising global is undefined and the data layer is empty.",
          opportunity: "A pixel on the checkout turns every existing paying member into a seed audience for lookalike targeting. It is a one-line change that retroactively values an audience the group already paid to acquire.",
        },
        {
          title: "The link-in-bio asks for nothing",
          finding: "Nine links, all pointing at other social platforms. The link-in-bio service used natively offers contact capture with direct sync into standard email platforms, and it is switched off.",
          opportunity: "Turning on a capture tile is a settings change with no development cost, sitting under 13.2 million followers.",
        },
        {
          title: "Channel memberships are off on 2.12 million subscribers",
          finding: "No membership tier is enabled on a channel with over a billion cumulative views and a mature recurring-format library that is exactly what a membership tier is designed to monetise.",
          opportunity: "A free or low-tier membership creates an identified audience inside a platform the group already dominates, without asking a fan to install anything.",
        },
        {
          title: "No United States buyer file exists in any form",
          finding: "No headline United States show has ever been sold, so no ticketing record exists. United States album buyers are held by the retailers. Store buyers are held by the fulfilment service. Smart-link signups are held by the distribution partner.",
          opportunity: "Every one of those relationships is recoverable at the margin through an owned capture layer running in parallel. None of them requires renegotiating an existing agreement.",
        },
        {
          title: "The primary domain is not an artist property",
          finding: "The obvious dot-com for the group name resolves to a parked page rather than to anything the artist controls.",
          opportunity: "A single owned destination that the capture layer, the release links and the United States campaign can all point at. Everything else in this section becomes easier once it exists.",
        },
      ],
      tensions: [
        {
          label: "Scale against ownership",
          brandSignal: "13.2 million followers, a billion YouTube views, a top-thirty Billboard 200 entry and full United States big-box retail distribution.",
          audienceTruth: "Zero owned United States contact records, zero advertising pixels on owned commerce, and no way for a fan to identify themselves without paying 22 dollars and installing a Korean application.",
          direction: "Treat the audience as already acquired and the capture layer as the only missing component. This is a plumbing project, not a marketing campaign.",
        },
        {
          label: "The Korean rulebook applied to a United States audience",
          brandSignal: "Korean privacy practice constrains bundled signups and pushes labels toward fan platforms instead of direct lists.",
          audienceTruth: "The largest listening market is the United States, where none of those constraints apply, and it is being run under Korean rules by default.",
          direction: "Build the capture for United States fans only. Leave the Korean audience on the platforms it already uses. The two systems do not have to be the same system.",
        },
        {
          label: "Physical sales against digital charting",
          brandSignal: "Eight Korean releases, six consecutive million-sellers to September 2025, ten million cumulative albums sold across Korea and Japan.",
          audienceTruth: "Not one top-ten Korean digital single across the entire catalogue. The best Circle Digital peak on record is No. 14.",
          direction: "The business runs on fandom rather than on songs reaching the general public. That makes the international streaming markets more important here than they would be for a peer, not less.",
        },
      ],
      footnote: "One absence is inferred rather than directly proven. The dedicated community platform used by several peers returns an identical response for real, invalid and nonsense identifiers, so a null result there cannot distinguish absence from a gated response. It is recorded as strongly indicated rather than verified. Every other absence in this section was confirmed by loading the surface and inspecting it.",
    },
  ],

  language: "en",
  languageAlternates: [
    { slug: "zerobaseone", label: "English", code: "EN" },
    { slug: "zerobaseone-ko", label: "한국어", code: "KO" },
  ],
};
