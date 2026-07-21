import type { StrategyPlanData } from "../plan-context";

export const temporexDeliverables: StrategyPlanData = {
  accentColor: "#E8A33D",
  ogImage: "/images/temporex-deliverables/og-image.png",
  language: "en",

  cover: {
    label: "Album Rollout / Deliverables + Content Calendar",
    title: "TEMPOREX",
    subtitle: "The standing hub for the Fantastic Machines rollout: the paid-ad asset checklist we need per release, plus a day-by-day content calendar from Water Holes through the album, so every post can be built and scheduled ahead.",
    partnership: "Independent Co. × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "July 2026",
    backgroundImage: "/images/temporex-deliverables/temporex-hero.jpg",
  },

  approveCta: {
    label: "Approve Asset List",
    sentLabel: "Sent. Our team will be in touch.",
    caption: "APPROVALS NOTIFY CROWD CONTROL DIGITAL",
  },

  sections: [
    // ===================================================================
    // 01. Overview
    // ===================================================================
    {
      type: "overview",
      number: "01",
      navLabel: "Overview",
      title: "Overview & Context",
      subtitle: "Water Holes is out and reading healthy on organics. Real Time is the next drop (release 8/14), and its paid creative needs to be approved and in edit now so the pre-save window opens 8/1 with assets live, not in production. The content calendar in the next section maps every post across the full cycle.",
      body: [
        "This page is the standing production hub for CCD-driven paid-ad creative across the Fantastic Machines cycle. It covers paid units only: the animated presenter and Fantastic Machine assets are produced through the animation partner's pipeline, and the physical campaign (wheatpaste, El Cid, the Animation Booth) is scoped separately. What this list does is turn the source material from both of those tracks into ad-ready cuts with spend behind them.",
        "Two rules from the artist side govern everything here and are treated as binding: no generative AI anywhere in the creative, and Joseph never appears on camera as the promoter. Neither is a limitation in this lane. Hand-made is currently a headline marketing angle (Gorillaz led their 2026 album campaign with a fully hand-drawn film), and the single most shareable post in our peer analysis contains no artist face at all.",
        "Every video concept ships as a 9:16 vertical master plus a 1:1 square so one approval covers TikTok, Reels, Shorts, and Meta feed placements. Each line item carries the reasoning: what the hook is, what the CTA is, and a playable reference example from a peer artist showing the format working in the U.S. market, grounded in frame-level video-AI analysis of ten top-performing peer posts plus current platform documentation.",
        "Checking items on this page marks them for production. The Approve button at the bottom sends the selected state to our team and greenlights the build.",
      ],
      supports: {
        heading: "Where These Assets Run",
        items: [
          "TikTok: Spark Ads on official posts + In-Feed for discovery testing",
          "Instagram: Reels ads + 1:1 feed placements for retargeting",
          "YouTube Shorts: vertical cutdowns against indie and bedroom-pop viewers",
          "Meta retargeting pools built from engaged TikTok and Reels viewers",
        ],
      },
      goals: {
        heading: "What Good Looks Like",
        items: [
          "Every cut opens on the single's catchiest vocal moment inside the first second",
          "Two distinct creative tracks: world-and-fan targeted and discovery targeted, never blended",
          "Pre-save is a serialized countdown, not a single post; every CTA flips to listen-now on release day",
          "Enough hook variants per concept to let the platforms pick winners, not us",
        ],
      },
      footnote: "Scope: the full Fantastic Machines cycle. The asset checklist below is built on Single One as the control; the content calendar covers every release from Water Holes through the album, and each new single refines the list off the prior single\u2019s actuals.",
    },

    // ===================================================================
    // 02. Content Calendar
    // ===================================================================
    {
      type: "calendar",
      number: "02",
      navLabel: "Calendar",
      title: "The Content Calendar",
      intro:
        "Every post, asset drop and paid moment across the Fantastic Machines cycle, laid out by day so the whole rollout can be built and scheduled ahead. Water Holes is done and reading healthy; Real Time is the next live push. Release dates are locked off the plan we walked through together; the near term is day-by-day and the later singles hold the same 14-day cadence.",
      cadenceNote:
        "Every single runs the same 14-day arc: T-14 pre-save + single-art announce, then a teaser a couple of days later, then a harder pre-save hit, then release-day out-now hero plus Spotify Marquee, then paid amplifies the winners a couple of days after (run dark), then a live clip points back around a week later, then straight into the next single. The album is the exception: its tail keeps pushing 4 to 8 weeks, not two.",
      postingRules: [
        "Cap organic at 1 to 2 posts a week. Paid carries the frequency, so you never have to over-post.",
        "Post midday-ish, 1 to 2 hours before your Instagram-reported peak, so social proof builds into the peak window. Skip early-morning slots while U.S. fans are asleep.",
        "On every release day, all pre-save CTAs flip to listen-now / stream-now.",
        "Boost the organic winners to your existing followers to convert the ~90% the post did not reach (Water Holes’ organic announce did ~900 likes and ~300 pre-saves on its own).",
      ],
      channelNote:
        "Meta is heaviest overall. The non-video singles (Water Holes, Somewhere I’m Better Now) carry the higher Meta budget; the music-video singles (Real Time, Fantastic Machine) shift spend to YouTube. Spotify Marquee + Showcase are held for release moments. Strive FM rideshare (~$1.6K / ~150K streams) sits on the album as the passive streaming backbone. TikTok runs top-funnel. ~$2K is held in reserve to double down on whatever overperforms.",
      legend: [
        { kind: "release", label: "Release day" },
        { kind: "presave", label: "Pre-save / announce" },
        { kind: "content", label: "Organic post" },
        { kind: "paid", label: "Paid / boost" },
        { kind: "asset", label: "Asset deadline" },
        { kind: "live", label: "Live-shoot content" },
        { kind: "milestone", label: "Milestone" },
      ],
      phases: [
        {
          key: "water-holes",
          title: "Single 1 · Water Holes",
          window: "Jul 6 – Jul 17",
          releaseDate: "Fri Jul 10",
          format: "Visualizer single (no MV)",
          status: "done",
          summary:
            "Out now and holding ~1,200 streams/day on pure organics: a 10–15% save rate, ~1.5 streams per listener, 757 playlist adds. Ads were held the first days to read decay, then relaunched 7/14.",
          entries: [
            { date: "Mon Jul 6", kind: "asset", label: "Water Holes release assets due", detail: "ababa + Luis deliver the release asset package (per the 6/29 delivery schedule).", status: "done" },
            { date: "Mon Jul 6", kind: "content", channel: ["Instagram", "TikTok"], time: "Midday", label: "Organic pre-save announce", detail: "Fully organic announce post. Landed ~900 likes, ~70 comments and ~300 pre-saves (+13,000%).", cta: "Pre-save", status: "done" },
            { date: "Wed Jul 8", kind: "asset", label: "Spotify Canvas delivered", detail: "6-second, no-text Canvas delivered to Spotify.", status: "done" },
            { date: "Thu Jul 9", kind: "asset", label: "Visualizer + Out-Now asset", detail: "Full-length 16:9 visualizer and the out-now asset built and loaded.", status: "done" },
            { date: "Fri Jul 10", kind: "release", channel: ["Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY — Water Holes out", detail: "Out-now post; pre-save flips to listen-now. Light paid launches the same day as a cold-start demand read.", cta: "Out now — stream", status: "done" },
            { date: "Jul 10–13", kind: "paid", label: "Ads held to read decay", detail: "Paid deliberately held the first days to measure organic decay against a no-ads baseline.", status: "done" },
            { date: "Mon Jul 13", kind: "content", channel: ["Instagram", "TikTok"], label: "Condensed visualizer cutdown", detail: "Short condensed cut of the visualizer posted organically.", status: "done" },
            { date: "Tue Jul 14", kind: "paid", channel: ["Meta", "YouTube"], label: "Relaunch paid on the visualizer", detail: "Meta traffic + YouTube against the live visualizer; boost the organic winner to existing followers.", status: "done" },
            { date: "Fri Jul 17", kind: "milestone", label: "Week 1 read", detail: "Spotify Indie brandneu add (#17), Apple New in Indie (#13); ~1,200 streams/day holding near-flat.", status: "done" },
          ],
        },
        {
          key: "real-time",
          title: "Single 2 · Real Time",
          window: "Jul 30 – Aug 21",
          releaseDate: "Fri Aug 14",
          format: "Music-video single",
          status: "next",
          summary:
            "The music-video single, and the control for the deliverables list. MV done 7/30, pre-save opens 8/1, video premieres on release day 8/14. The standalone album pre-save opens 8/17.",
          entries: [
            { date: "Wed Jul 30", kind: "asset", label: "Real Time MV delivered", detail: "Full music video fully delivered by Joseph + Luis, with cutdowns, ahead of the pre-save window.", status: "upcoming" },
            { date: "Fri Aug 1", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Pre-save + single art — ‘Real Time is coming’", detail: "T-14 announce: single artwork + pre-save go live. Platform, Facade and Engine-parts assets also due today; Real Time live cutdowns delivered to CCD (minimum).", cta: "Pre-save", status: "upcoming" },
            { date: "~Mon Aug 4", kind: "content", channel: ["Instagram", "TikTok"], label: "Music-video teaser", detail: "A couple of days after the announce: tease that a music video is coming.", cta: "Pre-save", status: "upcoming" },
            { date: "~Wed Aug 6", kind: "paid", channel: ["Meta", "TikTok"], label: "Aggressive pre-save hit", detail: "Second push: another animated clip / ababa snippet with a harder pre-save ask on warm audiences.", cta: "Pre-save", status: "upcoming" },
            { date: "Aug 1–13", kind: "paid", channel: ["Meta", "YouTube", "TikTok"], label: "Promo snippets run", detail: "ababa animated snippets + teasers in rotation; boost the winners. Music-video single, so spend leans YouTube.", status: "upcoming" },
            { date: "Fri Aug 14", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY — Real Time + music video", detail: "Video premieres on YouTube; out-now hero asset; CTAs flip to stream-now; Spotify Marquee fires. Paid amplifies the winners a couple of days later, run dark.", cta: "Out now — stream", status: "upcoming" },
            { date: "Thu Aug 14", kind: "asset", label: "All live-shoot deliverables in", detail: "Everything from the 7/19 live shoot delivered to CCD: a full-length performance + two ~30s teasers per track.", status: "upcoming" },
            { date: "Sat Aug 16", kind: "asset", label: "Album artwork due", detail: "Final square album artwork delivered for the 8/17 album pre-save launch.", status: "upcoming" },
            { date: "Mon Aug 17", kind: "presave", channel: ["Instagram", "TikTok"], label: "ALBUM pre-save opens", detail: "Standalone, splashy album pre-save announce (Fantastic Machines), decoupled from any single CTA so ‘stream single’ and ‘pre-save album’ never compete.", cta: "Pre-save the album", status: "upcoming" },
            { date: "~Fri Aug 21", kind: "live", channel: ["YouTube", "Instagram", "TikTok"], label: "Real Time live clip (T+7)", detail: "Deploy the Real Time live-performance clip pointing back to the single; full live performance video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "sibn",
          title: "Single 3 · Somewhere I’m Better Now",
          window: "Sep 4 – Sep 25",
          releaseDate: "Fri Sep 18",
          format: "Non-video single",
          status: "upcoming",
          summary:
            "Non-video single, with the deliverables list refined off Real Time’s actuals. The album is already on pre-save, so this push drives the whole-album countdown, not just the single.",
          entries: [
            { date: "Fri Aug 15", kind: "asset", label: "SIBN release assets due", detail: "ababa delivers the Somewhere I’m Better Now asset package.", status: "upcoming" },
            { date: "Thu Sep 4", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Pre-save + single art announce (T-14)", detail: "Single artwork + pre-save go live. Because the album is already on pre-save, the CTA leans on the whole-album countdown.", cta: "Pre-save", status: "upcoming" },
            { date: "Sep 4–17", kind: "paid", channel: ["Meta", "TikTok"], label: "ababa snippets + teasers", detail: "Snippets in rotation, boost the winners. Non-video single, so the higher Meta budget sits here. Skip Labor Day (Mon Sep 7) for posting.", status: "upcoming" },
            { date: "Fri Sep 18", kind: "release", channel: ["Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY — Somewhere I’m Better Now", detail: "Out-now + stream-now; Spotify Marquee. The push continues into the album countdown.", cta: "Out now — stream", status: "upcoming" },
            { date: "~Fri Sep 25", kind: "live", channel: ["YouTube", "Instagram"], label: "SIBN live clip (T+7)", detail: "Live-performance clip points back to the single; full live video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "fantastic-machine",
          title: "Single 4 · Fantastic Machine (title track)",
          window: "Oct 9 – Oct 30",
          releaseDate: "Fri Oct 23",
          format: "Music-video single · hero",
          status: "upcoming",
          summary:
            "The title-track hero. Its music video is delivered super-early (8/20) and held to ship with the single, then run all month as the album’s lead magnet. This kicks the final 30-day pre-save punch into the album.",
          entries: [
            { date: "Wed Aug 20", kind: "asset", label: "Fantastic Machine MV delivered (early)", detail: "Music video delivered super-early by the directors (David + Joe). Held to premiere with the single.", status: "upcoming" },
            { date: "Thu Oct 9", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Announce + pre-save + single art (T-14)", detail: "Hero announce; single artwork + pre-save go live. Starts the final ~30-day hard push on the album pre-save.", cta: "Pre-save", status: "upcoming" },
            { date: "Oct 9–22", kind: "paid", channel: ["Meta", "YouTube", "TikTok"], label: "MV teasers + album push", detail: "Music-video teasers + ababa snippets; hammer the album pre-save. Music-video single, so spend leans YouTube.", status: "upcoming" },
            { date: "Fri Oct 23", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY — Fantastic Machine + music video", detail: "Single out; music video premieres on release day and runs all month as the album lead magnet. Marquee fires.", cta: "Out now — stream", status: "upcoming" },
            { date: "~Fri Oct 30", kind: "live", channel: ["YouTube", "Instagram"], label: "Fantastic Machine live clip (T+7)", detail: "Live clip points back to the title track; full live video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "album",
          title: "Album · Fantastic Machines",
          window: "Aug 17 pre-save → release + 4–8 wks",
          releaseDate: "~mid–late Nov (TBC)",
          format: "Album",
          status: "upcoming",
          summary:
            "Pre-save opens 8/17 and runs the whole cycle as a standalone countdown, with a 30-day hard push into release. Unlike the singles, the album tail keeps pushing 4 to 8 weeks after it lands.",
          entries: [
            { date: "Fri Aug 15", kind: "asset", label: "Fantastic Machine single + album assets due", detail: "ababa delivers the title-track single and album asset package.", status: "upcoming" },
            { date: "Mon Aug 17", kind: "presave", channel: ["Instagram", "TikTok"], label: "Album pre-save opens", detail: "The standalone album pre-save countdown begins and runs underneath every single push through release.", cta: "Pre-save the album", status: "upcoming" },
            { date: "Sep – Nov", kind: "paid", channel: ["Meta", "TikTok"], label: "Album countdown backdrop", detail: "Every single’s push doubles as an album-countdown push. The final ~30 days before release is the hardest pre-save punch of the cycle.", status: "upcoming" },
            { date: "Release week", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], label: "ALBUM out — Fantastic Machines", detail: "Album release. Full-length live performance videos roll out as the second creative wave (long-form YouTube). Spotify Marquee + Showcase; Strive FM rideshare (~150K streams) as the passive streaming backbone.", cta: "Out now — stream", status: "upcoming" },
            { date: "Release +4–8 wks", kind: "milestone", label: "Sustained album tail", detail: "Keep pushing the album for 4 to 8 weeks: boost the winners, and revisit live cutdowns to point back to the full body of work.", status: "upcoming" },
          ],
        },
      ],
      footnote:
        "Release dates are locked off the plan; the album date is roughly four weeks after the Fantastic Machine single and still to be confirmed. Dates marked ~ are derived from the fixed 14-day cadence and may shift a day or two around weekends and holidays. Physical / activation plays (the Machine Room web game, fan-sourced assembly, a Heavy Manners workshop) are scoped separately and not shown here.",
    },

    // ===================================================================
    // 03. Creative Principles
    // ===================================================================
    {
      type: "vertical",
      number: "03",
      navLabel: "Principles",
      title: "Creative Principles",
      intro: "Five rules govern every asset on this list. They come from frame-level analysis of the highest-performing posts by U.S. bedroom pop and indie peers (Malcolm Todd, sombr, The Marias, Ginger Root, Wallows) plus the no-face ceiling case (Gorillaz), and from current platform guidance.",
      subBlocks: [
        {
          label: "A",
          title: "The song hooks in the first second",
          objective: "Win the scroll with audio before the viewer registers this is an ad.",
          strategy: "Every top peer post we analyzed opens on the track's catchiest vocal moment at second zero. Malcolm Todd's single teaser loops his hook line from the first frame with no intro; sombr's announcement cold-opens on the sung question line over a tight close-up. None of the ten analyzed posts use intro cards. For the July single we identify the most repeatable vocal moment and cold-open every paid cut on it.",
          components: {
            heading: "Hard Guidelines",
            items: [
              "No intro cards, no fade-ins, no dead frames before the hook",
              "Artist name or presenter character identifiable inside the first 3 seconds, kept in safe zones",
              "On-screen text hook within the first second where the cut needs context",
              "6-12s cuts for prospecting; 12-25s for retargeting and world content",
            ],
          },
        },
        {
          label: "B",
          title: "Hand-made beats polish, and we say so",
          objective: "Make the binding no-AI rule a positioning asset, not a footnote.",
          strategy: "The bedroom pop lane actively rewards visible craft and punishes label-ad gloss: the lane's top posts are phone-shot, DIY, and textured (sombr's film grain, Malcolm Todd's street corner, Ginger Root's VHS world). Gorillaz made 'entirely hand-drawn' the headline of their 2026 album campaign and shipped the making-of as its own content. Temporex's no-AI rule and the hand-built animation pipeline are the same kind of asset: every unit can carry a quiet 'drawn and built by hand' credit.",
          components: {
            heading: "Implications",
            items: [
              "Boost real organic posts (Spark Ads) instead of dark-posting: identical creative runs meaningfully higher engagement with the social proof attached (practitioner-reported 20-40%)",
              "Animation process footage is a first-class ad unit, not leftovers",
              "Phone-shot texture is a feature; do not over-grade the lo-fi out of the assets",
            ],
          },
        },
        {
          label: "C",
          title: "The artist never has to appear",
          objective: "Build the paid system around the presenter and the Machine, not around Joseph.",
          strategy: "The single most shareable post in our analysis is The Marias' lyric-on-a-cake post (7.5M views, the only statistical outlier in the set) and it contains no band member: a hand-made object carries the lyric while the song plays. Gorillaz have run a virtual band for 25 years. Ginger Root's skit persona delivers tour dates without the artist ever pitching. Temporex's recurring presenter and the Fantastic Machine give us the same move: identity lives in the world, and the paid units are built so no cut ever depends on Joseph promoting to camera.",
        },
        {
          label: "D",
          title: "The Heads and New Ears are different assets",
          objective: "Stop averaging two audiences into creative that converts neither.",
          strategy: "Warm creative (The Heads: existing Temporex fans and lore-followers) leans on the world: presenter episodes, Machine reveals, process content, countdown beats. Cold creative (New Ears: bedroom-pop discovery audiences) assumes zero lore: lyric-first, aesthetic-first, trend-literate cuts that read as native posts in the lane before they read as Temporex. Every item below is tagged to one track, and spend never blends them in one ad set.",
        },
        {
          label: "E",
          title: "The pre-save window is a countdown series",
          objective: "Treat the weeks before the drop as serialized content with dates on it.",
          strategy: "sombr ran a four-beat arc on one song: 'drops 3/21' (5.1M views, the highest engagement rate we measured at 18%), 'out next week, u ready?', then two release-day posts. Malcolm Todd's teaser put the exact drop time on screen while the hook looped, then re-ran the identical creative with OUT NOW text on release day (889K views teaser, 3.3M release). The July single gets the same arc: date-stamped presenter announcements pre-release, the same cuts re-shipped with listen-now text on release day. Pre-save CTAs run on warm audiences only; cold units stay soft until the song is out.",
        },
      ],
      footnote: "Engagement and cost benchmarks are practitioner-reported industry figures; platform specs in the next section come from platform documentation.",
    },

    // ===================================================================
    // 04. Formats & Specs
    // ===================================================================
    {
      type: "vertical",
      number: "04",
      navLabel: "Specs",
      title: "Master Formats & Specs",
      intro: "Two master formats cover every placement. Vertical 9:16 is the primary deliverable; the 1:1 square is derived from it where framing allows, or re-framed where it does not.",
      subBlocks: [
        {
          label: "A",
          title: "Vertical master / 9:16",
          objective: "One 1080x1920 master per concept, framed center-safe so the same file clears TikTok, Reels, Stories, and Shorts.",
          components: {
            heading: "Platform Requirements",
            items: [
              "TikTok In-Feed: 9:16, 720x1280+ recommended, up to 60s with a 9-15s sweet spot, max 500MB",
              "IG Reels / Stories ads: 1080x1920 required; keep top ~14%, bottom 20-35%, sides ~6% clear of text and logos",
              "YouTube Shorts ads: 1080x1920; avoid top 10%, bottom 25%, right 10%",
              "Burned-in captions on everything; sound-on mix. Animation frames composed center-safe from the storyboard stage",
            ],
          },
        },
        {
          label: "B",
          title: "Square feed master / 1:1",
          objective: "Meta feed placements and retargeting units.",
          components: {
            heading: "Platform Requirements",
            items: [
              "1:1 at 1080x1080: the universal square master; covers Meta feed, Right Column, and Marketplace from one file",
              "Static units (single art, date cards, poster photography) ship in both 1:1 and 9:16 story sizes",
            ],
          },
        },
        {
          label: "C",
          title: "Naming + versioning",
          objective: "Keep the test matrix legible when multiple concepts, ratios, and hooks are live at once.",
          components: {
            heading: "Convention",
            items: [
              "TPX-S1-[concept]-[track: HEADS/NEW]-[ratio: 916/11]-[hook: H1/H2/H3]-[v#]",
              "Every hero concept ships minimum: 9:16 master + 1:1, with 2-3 hook variants on the 9:16",
              "Winning hooks get back-ported to the other ratio before scale spend",
            ],
          },
        },
      ],
    },

    // ===================================================================
    // 05. The Deliverables Checklist
    // ===================================================================
    {
      type: "deliverables",
      number: "05",
      navLabel: "Checklist",
      title: "The Asset Checklist",
      intro: "Thirteen deliverables across four groups. Each card carries the hook and CTA logic plus playable peer references. Check the items to approve; the button at the bottom sends the list to our team.",
      storageKey: "temporex-single1-deliverables",
      groups: [
        {
          heading: "Music & Performance Assets",
          description: "The performance-lean track: units that name the single and carry the direct CTA. Source material: the single master, the music video or animated visual, and any studio or rehearsal footage that exists. This track is what keeps the world-building accountable to streams.",
          items: [
            {
              id: "chorus-cutdowns",
              title: "Hook-open single cutdowns",
              priority: "P1 / Pre-save window",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "6-15s",
              platforms: ["TikTok In-Feed", "IG Reels", "YouTube Shorts"],
              variants: "3 hook variants",
              hook: "Cold-open on the single's catchiest vocal moment, first frame, no setup. Peer data is unanimous: Malcolm Todd's release unit loops one hook line from second zero and out-performed his own teaser nearly 4-to-1 (3.3M views), and sombr's announcement opens mid-line on the sung question hook over a tight close-up. The edit's only job is to make the first second of audio unskippable.",
              cta: "Pre-release: pre-save end card on warm audiences only; cold cuts run caption-title only. On release day the identical cuts re-ship with 'out now' text and a listen-now end card, which is exactly the teaser-to-release pairing Malcolm Todd ran.",
              notes: [
                "Edit-only deliverable from the single's visual assets; no new shoot",
                "Center-safe framing so the 1:1 crop survives without re-edit",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7444711206423776543",
                  artist: "Malcolm Todd",
                  label: "'Chest Pain out now' release unit / 3.3M views",
                  takeaway: "Same hook loop as his teaser, OUT NOW text added; the release-day re-ship is the whole strategy.",
                },
                {
                  platform: "tiktok",
                  id: "7488846214595710239",
                  artist: "sombr",
                  label: "'back to friends' MV announcement / 2.4M views",
                  takeaway: "Cold-opens on the sung hook at a tight close-up; energy spike via jump cut at 0:14.",
                },
              ],
            },
            {
              id: "lyric-prop",
              title: "Faceless lyric-prop unit",
              priority: "P1 / Pre-save window",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "8-12s",
              platforms: ["TikTok Spark", "IG Reels", "Meta Feed"],
              variants: "2 props x 2 hooks",
              hook: "A hand-made physical object carries the single's best lyric while the line plays: shot top-down or static, phone texture, no people. The Marias' 'COME BACK TO ME' cake (7.5M views, 926K likes, the only statistical outlier in our analyzed set) proves the format's ceiling, and our analysis is explicit that the DIY metaphor out-shares high production. For Temporex the prop comes from the Machine's world: a stamped brass plate, a workshop tag, a hand-painted component. The no-face constraint is the format.",
              cta: "Pre-release: caption carries the date and the pre-save link on warm audiences. Post-release: lyric prop + 'out now' caption. This unit is also the most natural Spark boost on the artist's own page.",
              notes: [
                "Build the props for real and photograph the build: the making-of footage feeds the process unit below",
                "On-screen lyric text must be the exact line being sung at that moment, peer analysis shows the read-along effect is the retention mechanism",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7482436668515978539",
                  artist: "The Marias",
                  label: "'COME BACK TO ME' cake post / 7.5M views",
                  takeaway: "No band member in frame; a DIY prop carries the lyric and out-performs everything polished.",
                },
                {
                  platform: "tiktok",
                  id: "7478466490832899359",
                  artist: "sombr",
                  label: "'undressed drops 3/21' lyric reframe / 5.1M views",
                  takeaway: "Text overlay reframes the lyric before the line lands; 18% engagement, the highest in our set.",
                },
              ],
            },
            {
              id: "visualizer-alt",
              title: "Official visualizer + alt-texture audio",
              priority: "P2 / Week 2-3 of window",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "15-30s cuts (full visualizer up to 60s)",
              platforms: ["YouTube", "TikTok sound page", "IG Reels"],
              variants: "Visualizer + sped-up version",
              hook: "A designed visualizer (single art + kinetic lyric type + Machine textures, animated by hand per the no-AI rule) gives the song an official, embeddable home and a library of cheap cuts. Malcolm Todd's 'Earrings' visualizer is the model: when the song resurged into a top-40 U.S. hit in 2026 off TikTok edits and sped-up versions, the official visualizer was the asset that caught the traffic. An official sped-up upload gives editors a second sound that still routes streams home.",
              cta: "Visualizer end-frame: title + 'out everywhere' + DSP marks after release; pre-release cuts end on the date. The sped-up sound page is the CTA for creators; we seed it with 2-3 official clips so it is not an empty room.",
              notes: [
                "Design deliverable, not a shoot; ships from the single art + type system",
                "Upload the sped-up version through official channels for fingerprinting before any seeding",
              ],
              examples: [
                {
                  platform: "youtube",
                  id: "a4tdS3IB294",
                  artist: "Malcolm Todd",
                  label: "Earrings (Official Visualizer)",
                  takeaway: "The official visualizer is the evergreen home that catches edit-driven and sped-up traffic.",
                },
              ],
            },
          ],
        },
        {
          heading: "Fantastic Machine Assets (The Heads)",
          description: "The warm track, run as Spark Ads on official posts against existing fans and lore-followers. The presenter and the Machine are the product; Joseph stays off camera by design.",
          items: [
            {
              id: "presenter-announce",
              title: "Presenter date-drop announcement",
              priority: "P1 / Opens the window",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "8-15s",
              platforms: ["TikTok Spark", "IG Reels"],
              variants: "2 hooks",
              hook: "The animated presenter announces the date the way Malcolm Todd's teaser did: the song's hook looping from second zero, the exact drop date and time as the on-screen text hook, nothing else. Our analysis of that teaser found the repetition programs the earworm and the date together, and flagged one fixable miss: it never named the song on screen. The presenter version fixes that, and turns a date card into a character beat the fandom screenshots.",
              cta: "Pre-save link in caption, warm audiences only. The announcement is beat one of the countdown arc; the same character re-appears for 'this week', 'tomorrow', and 'out now' beats.",
              notes: [
                "First paid use of the recurring presenter format; the template amortizes across every later drop, which is the entire economic argument for it",
                "Mostly animation-pipeline output; CCD scope is the cutdown, text system, and trafficking",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7443926422911044894",
                  artist: "Malcolm Todd",
                  label: "'Chest Pain drops 12/4 7pm est' teaser / 889K views",
                  takeaway: "Hook loop from second zero + exact drop time as the text hook; date and earworm learned together.",
                },
                {
                  platform: "tiktok",
                  id: "7478466490832899359",
                  artist: "sombr",
                  label: "'undressed drops 3/21' / 5.1M views",
                  takeaway: "A date-stamped teaser posted 16 days out can be the single's biggest post, not a formality.",
                },
              ],
            },
            {
              id: "presenter-episode",
              title: "Presenter world episode cutdowns",
              priority: "P2 / Week 2-3 of window",
              formats: ["9:16 1080x1920"],
              duration: "12-25s",
              platforms: ["TikTok Spark", "IG Reels", "YouTube Shorts"],
              variants: "2 cutdowns per episode",
              hook: "Cutdowns of the recurring presenter episodes: the Machine world doing what it does, with the single underneath. Ginger Root is the one-man proof that a self-contained retro skit world reads as entertainment first and promotion second, and Gorillaz' 2026 hand-drawn film is the ceiling case for an animated world carrying an entire album campaign with the artist invisible. The hook is the world itself, cut to put a visual reveal inside the first second.",
              cta: "Soft CTA only: title persistent in safe zone, pre-save or listen-now in caption by release status. These units build recognition and retargeting pools more than direct clicks, and they are the creative that makes the rest of the list cheaper.",
              notes: [
                "Respect the world's no-song-titles stance inside the narrative; the title lives in caption and end-frame, not in the character's mouth",
                "Every episode cutdown feeds the retargeting pool the conversion units fire at",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7387921458074291486",
                  artist: "Ginger Root",
                  label: "Self-scored music video meta skit",
                  takeaway: "A one-man VHS skit world: performance plus narrative vignettes, promotion disguised as an episode.",
                },
                {
                  platform: "youtube",
                  id: "ucRulNQsuYQ",
                  artist: "Gorillaz",
                  label: "The Mountain hand-drawn film (2026)",
                  takeaway: "The ceiling: an entirely hand-drawn world carries the campaign, artist never on camera.",
                },
              ],
            },
            {
              id: "process-bts",
              title: "Hand-made process unit",
              priority: "P1 / Pre-save window",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "10-20s",
              platforms: ["TikTok Spark", "IG Reels"],
              variants: "2-3 cuts per batch of process footage",
              hook: "Timelapses and close-ups of the animation actually being made: Blender viewport scrubs, pencil tests, the Machine assembling shot by shot. Gorillaz shipped a making-of alongside their hand-drawn film because 'made entirely by hand' was the campaign's headline claim, and the bedroom-pop lane's bias toward visible craft makes process content native here. For an artist with a binding no-AI rule, the process footage is the proof, and the proof is the hook.",
              cta: "Caption-led: 'drawn and built by hand for the new single' + pre-save link on warm audiences. Post-release, the same units retarget with listen-now.",
              notes: [
                "Source footage requested from the animation partner as a standing weekly drop; CCD cuts it",
                "The lyric-prop builds from the item above feed this unit too",
              ],
              examples: [
                {
                  platform: "youtube",
                  id: "wLTcubTNIl4",
                  artist: "Gorillaz",
                  label: "The Mountain film: A Making Of",
                  takeaway: "The process film is its own campaign asset; hand-made is the marketing claim.",
                },
              ],
            },
            {
              id: "presave-countdown",
              title: "Pre-save countdown series",
              priority: "P1 / Serialized to the drop",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "6-12s",
              platforms: ["TikTok Spark", "IG Stories", "IG Reels"],
              variants: "4-beat arc: announce / next week / tomorrow / out now",
              hook: "The countdown as a content series, not a single post. sombr's arc on 'undressed' ran 'drops 3/21', then 'out next week, u ready?', then two release-day posts, and the first beat was the biggest post of the campaign. Malcolm Todd's 'blow this up' post shows the warm-track variant: a direct, vulnerable ask that turns the fandom into participants in the launch. Each beat is a light re-skin of existing assets (presenter frames, prop shots, process clips) with the date moved forward.",
              cta: "Pre-save, explicitly, every beat, warm audiences only. The ask is framed as a community event ('be there when it switches on'), which is what current pre-save practice says converts. Final beat flips to listen-now.",
              notes: [
                "Cheapest items on the list: text-and-date re-skins, not new creative",
                "Stories placements carry a native link sticker; the only placement where the link is one tap away",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7479918519287614751",
                  artist: "sombr",
                  label: "'undressed out next week 3/21. u ready?'",
                  takeaway: "Beat two of a four-beat countdown arc on one song; the window is a series.",
                },
                {
                  platform: "tiktok",
                  id: "7457323965569125662",
                  artist: "Malcolm Todd",
                  label: "'Hashtag blow this up' / 275K views",
                  takeaway: "The direct community ask: fans become participants in the launch, not spectators.",
                },
              ],
            },
          ],
        },
        {
          heading: "Discovery Assets (New Ears)",
          description: "Built for cold U.S. bedroom-pop and indie audiences with zero Temporex context. Lyric-first, aesthetic-first, trend-literate; these read as native posts in the lane before they read as Temporex.",
          items: [
            {
              id: "vibe-loop",
              title: "Aesthetic vibe loop",
              priority: "P2 / Rolling",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "8-15s",
              platforms: ["TikTok In-Feed", "IG Reels"],
              variants: "2-3 scenes",
              hook: "A composed, movement-led visual synced to the song's tempo with zero text and zero explanation: the lane's pure-vibe unit. The Marias' 'the freak don't stop' (12.6M views) is the benchmark our analysis broke down: symmetrical framing, low angle, first movement on the first beat, and the conclusion that a dramatic setting plus rhythmic precision creates a runway feel anywhere. Temporex's version is Machine-world scenes and found-location loops graded to the album's palette.",
              cta: "None in the unit. Caption carries the title; the unit optimizes for completion rate and sound-page visits. Discovery stays soft until release day, then captions add 'out now'.",
              notes: [
                "Completion rate is the success metric; treat 40%+ completion as the scale signal per current practitioner guidance",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7409049293098667306",
                  artist: "The Marias",
                  label: "'the freak don't stop' / 12.6M views",
                  takeaway: "Zero text, movement synced to tempo, architecture as set: the pure vibe unit at its ceiling.",
                },
              ],
            },
            {
              id: "trend-meme",
              title: "Trend / meme-caption formats",
              priority: "P2 / Rolling, refreshed biweekly",
              formats: ["9:16 1080x1920"],
              duration: "8-15s",
              platforms: ["TikTok In-Feed", "IG Reels"],
              variants: "2-3 concepts per refresh",
              hook: "Relatable-caption and meme formats where the single is the soundtrack, not the subject. Ginger Root's 'I can't escape the brain rot' tour promo is the proof the persona survives contact with meme culture: a staged comedic fail in current internet language, hard-cut into the actual product, with the anti-FOMO gag 'tix selling at a normal rate' doing the selling. The presenter character gives Temporex a built-in meme mouthpiece that never requires Joseph.",
              cta: "No hard CTA; caption carries the title and, post-release, 'out now'. Concepts are sourced weekly from what is trending in U.S. indie and music TikTok, not from the lore.",
              notes: [
                "This is the only item where speed beats polish; 48-hour turnaround per concept or the trend is gone",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7429050235378273566",
                  artist: "Ginger Root",
                  label: "'brain rot' tour promo / 189K views",
                  takeaway: "Comedic fail into montage; the persona delivers logistics without breaking character.",
                },
              ],
            },
            {
              id: "live-capture",
              title: "Live capture cutdowns (El Cid)",
              priority: "P2 / With the show",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "10-20s",
              platforms: ["TikTok In-Feed", "IG Reels", "YouTube Shorts"],
              variants: "Performance cut + room-tone recap cut",
              hook: "The El Cid performance, already being captured for the campaign, cut two ways: a straight vertical performance clip (the Vevo DSCVR format: one artist, one room, the song doing the work) and a release-week-style recap (the Wallows model: street, crowd, room, stage, caption carrying the news). Live proof answers the one question cold audiences have about a studio-built world: is the music real.",
              cta: "Performance cut: title + listen-now or pre-save by release status, caption-led. Recap cut: soft CTA, runs as retargeting against engaged viewers of the world units.",
              notes: [
                "Zero net-new production: the capture is already scoped under the physical campaign; this line item is the edit",
                "Crowd and venue shots clear faster than member close-ups; Joseph appears as performer, never as pitchman, consistent with the rule",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7488717011653053718",
                  artist: "Malcolm Todd (Vevo DSCVR)",
                  label: "'Five to five million people' vertical live set",
                  takeaway: "Native-vertical staged live performance; the format the El Cid cutdowns land in.",
                },
                {
                  platform: "tiktok",
                  id: "7371988915240193322",
                  artist: "Wallows",
                  label: "Release-week London recap / 'MODEL out tomorrow'",
                  takeaway: "Street-to-stage recap arc with the release CTA riding the caption.",
                },
              ],
            },
          ],
        },
        {
          heading: "Square, Static & Support",
          description: "The unglamorous units that make the paid system work: feed crops, statics, and the caption system.",
          items: [
            {
              id: "square-crops",
              title: "Square crops of all hero videos",
              priority: "P1 / With each hero",
              formats: ["1:1 1080x1080"],
              duration: "Matches source",
              platforms: ["Meta Feed", "Meta Right Column", "Marketplace"],
              variants: "Per hero concept",
              hook: "Same hooks as the 9:16 masters, re-framed not letterboxed. Feed viewers scroll faster than Reels viewers, so the burned-in text hook carries more weight here; animation frames are re-composed from the storyboard rather than cropped blind.",
              cta: "Meta-native button on every feed unit: pre-save pre-release, listen-now after. These are the conversion-layer placements the TikTok engagement pools retarget into.",
              notes: [
                "1:1 covers all Meta feed, Right Column, and Marketplace placements from one file",
              ],
            },
            {
              id: "static-cards",
              title: "Single art, date cards + poster statics",
              priority: "P1 / Pre-save window",
              formats: ["1:1 1080x1080", "9:16 1080x1920"],
              platforms: ["Meta Feed", "IG Stories", "Retargeting"],
              variants: "3 layouts",
              hook: "Single art, a hand-set date card in the Machine's type system, and photography of the real wheatpaste posters in the wild. The physical campaign is itself creative: a photographed wall of hand-pasted posters is a static no other artist in the lane can run, and it carries the hand-made claim without a word of copy.",
              cta: "Single button per static: pre-save pre-release, Listen on Spotify / Apple Music after. One message per static, no stacked CTAs. Statics are the cheapest recognition-frequency layer against warm pools.",
              notes: [
                "Design-only deliverable plus one photo pass on the postered walls; ships within 48h of approval",
              ],
            },
            {
              id: "caption-kit",
              title: "Caption + CTA kit",
              priority: "P1 / Pre-save window",
              formats: ["Copy doc"],
              platforms: ["All placements"],
              variants: "Heads + New Ears sets, pre and post release",
              hook: "Two caption systems, written once, reused everywhere. The Heads captions assume context: presenter voice, world references, countdown language. New Ears captions assume none: lyric line, lane framing, zero lore vocabulary. Both exist in pre-release (date + pre-save) and post-release (out now + listen) variants so release day is a find-and-replace, not a rewrite.",
              cta: "Pre-save on warm pre-release, listen-now everywhere after; the CTA always arrives after the hook establishes fit, never before. Warm audiences need repeated exposures before converting, so the kit stages frequency variants rather than repeating one line.",
              notes: [
                "Includes the hashtag spec: one campaign hashtag plus the lyric-line hashtag, nothing else",
              ],
            },
          ],
        },
      ],
      footnote: "Reference examples are live embeds from peer artists' and platform channels' public accounts, selected from verified top-performing posts and analyzed frame-by-frame for hook timing, structure, and audio-visual alignment. View counts are as of June 9, 2026 and will drift.",
    },

    // ===================================================================
    // 06. Production Notes
    // ===================================================================
    {
      type: "vertical",
      number: "06",
      navLabel: "Production",
      title: "Production Notes & Dependencies",
      intro: "What we need, what it produces, and how spend follows the winners.",
      subBlocks: [
        {
          label: "A",
          title: "Source material requested",
          objective: "Everything on this list is edit-only or design-only; nothing requires Joseph on camera and nothing requires a net-new shoot beyond the El Cid capture already scoped.",
          components: {
            heading: "From The Artist / Label / Animation Partner",
            items: [
              "Single master + final title, art, and DSP links as soon as locked",
              "Presenter episode files and Machine renders as they clear, plus a standing weekly drop of process footage (viewport scrubs, pencil tests, assembly shots)",
              "Lyric sheet with Joseph's pick of the two or three signature lines",
              "Layered single-art files for the visualizer and static builds",
              "Approval on an official sped-up upload for fingerprinting",
              "El Cid capture files within 48h of the show",
            ],
          },
        },
        {
          label: "B",
          title: "Volume at full approval",
          objective: "Approving the full checklist produces roughly 35-45 final files: 13 concepts, two ratios on heroes, 2-3 hook variants where tagged, plus the 4-beat countdown re-skins.",
          strategy: "Editing begins on approval. Window-priority (P1) units ship within one week of source material arriving so the pre-save window opens fully armed. P2 units roll through the window; the live capture rides the El Cid date. The same structure re-runs for singles two through four and the album, with every proven winner carried forward.",
        },
        {
          label: "C",
          title: "How spend follows the winners",
          objective: "The checklist feeds a test-then-scale loop sized to the campaign's monthly paid budget.",
          components: {
            heading: "Loop",
            items: [
              "Window open: all P1 units live at flat test budgets on TikTok + Reels, Heads and New Ears in separate ad sets",
              "72h reads: completion rate and engagement decide which hooks survive; 40%+ completion is the scale signal",
              "Winners get Spark-boosted on official posts and back-ported to the other ratio",
              "Engaged-viewer pools retargeted on Meta with feed + static units; pre-save buttons flip to listen-now on release day",
            ],
          },
        },
      ],
      footnote: "This list covers CCD-driven paid-ad creative only. Animation production runs through the animation partner's pipeline; the physical campaign and its activations are scoped separately. Where their outputs appear here, the deliverable is the cut, not the source.",
    },
  ],
};
