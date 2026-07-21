import type { StrategyPlanData } from "../plan-context";

export const temporexDeliverables: StrategyPlanData = {
  accentColor: "#E8A33D",
  ogImage: "/images/temporex-deliverables/og-image.png",
  language: "en",

  cover: {
    label: "Album Rollout / Deliverables + Content Calendar",
    title: "TEMPOREX",
    subtitle:
      "The standing hub for the Fantastic Machines rollout: a day-by-day content calendar from Water Holes through the album, plus the actual asset checklist we need per release, mapped to who makes each piece.",
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
      subtitle:
        "Water Holes is out and reading healthy on organics. Real Time is next (release 8/14). This page is the operating hub for the rest of the cycle: the day-by-day calendar and the per-release asset checklist.",
      body: [
        "Two sections do the work. The Content Calendar maps every post, asset drop and paid moment across the cycle so the whole rollout can be built and scheduled ahead. The Asset Checklist is the actual list of files we need per release, tagged to who makes each one (Joseph + Luis, Ababa, or CCD) and checkable as it lands so everyone sees live status.",
        "Two rules from the artist side are binding and shape everything: no generative AI anywhere in the creative, and Joseph never appears on camera as the promoter. Neither is a limitation here. Hand-made is the positioning, and the world and presenter carry the campaign, so no post depends on Joseph pitching to camera.",
        "Format rule for every paid asset: build it in 9:16 and 1:1, or vertical with a center-aligned safe box so one file crops clean across TikTok, Reels, Shorts and Meta feed. Every release gets the same core set, with the music video covering the full-length visualizer where one exists.",
      ],
      supports: {
        heading: "Where These Assets Run",
        items: [
          "TikTok: Spark Ads on official posts + In-Feed for discovery",
          "Instagram: Reels ads + 1:1 feed placements for retargeting",
          "YouTube: full-length videos + Shorts cutdowns",
          "Meta retargeting pools built from engaged TikTok and Reels viewers",
        ],
      },
      goals: {
        heading: "What Good Looks Like",
        items: [
          "Every cut opens on the single's catchiest vocal moment inside the first second",
          "Pre-save is a serialized countdown, not a single post; every CTA flips to listen-now on release day",
          "Each single compounds the last; the album pre-save runs standalone underneath all of it",
          "Assets built and scheduled ahead of each promo week, never the week-of",
        ],
      },
      footnote:
        "Scope: the full Fantastic Machines cycle, Water Holes through the album. Water Holes is delivered; the calendar and checklist below carry the rest, and each new single refines the list off the prior single's actuals.",
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
        "Every post, asset drop and paid moment across the Fantastic Machines cycle, laid out by day so the whole rollout can be built and scheduled ahead. Water Holes is done; Real Time is the next live push. Every release date is locked off the plan we walked through together, and each single runs the same 14-day cadence around it.",
      cadenceNote:
        "Every single runs the same 14-day arc: T-14 pre-save + single-art announce, then a teaser a couple of days later, then a harder pre-save hit, then release-day out-now hero plus Spotify Marquee, then paid amplifies the winners a couple of days after (run dark), then a live clip points back two weeks after release, then straight into the next single. The album is the exception: its tail keeps pushing 4 to 8 weeks, not two.",
      postingRules: [
        "Cap organic at 1 to 2 posts a week. Paid carries the frequency, so you never have to over-post.",
        "Post midday-ish, 1 to 2 hours before your Instagram-reported peak, so social proof builds into the peak window. Skip early-morning slots while U.S. fans are asleep.",
        "On every release day, all pre-save CTAs flip to listen-now / stream-now.",
        "Boost the organic winners to your existing followers to convert the ~90% the post did not reach (Water Holes' organic announce did ~900 likes and ~300 pre-saves on its own).",
      ],
      channelNote:
        "Meta is heaviest overall. The non-video singles (Water Holes, Somewhere I'm Better Now) carry the higher Meta budget; the music-video singles (Real Time, Fantastic Machine) shift spend to YouTube. Spotify Marquee + Showcase are held for release moments. Strive FM rideshare (~$1.6K / ~150K streams) sits on the album as the passive streaming backbone. TikTok runs top-funnel. ~$2K is held in reserve to double down on whatever overperforms.",
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
            { date: "Mon Jul 6", kind: "asset", label: "Water Holes release assets due", detail: "Ababa + Luis deliver the release asset package (per the 6/29 delivery schedule).", status: "done" },
            { date: "Mon Jul 6", kind: "content", channel: ["Instagram", "TikTok"], time: "Midday", label: "Organic pre-save announce", detail: "Fully organic announce post. Landed ~900 likes, ~70 comments and ~300 pre-saves (+13,000%).", cta: "Pre-save", status: "done" },
            { date: "Wed Jul 8", kind: "asset", label: "Spotify Canvas delivered", detail: "6-second, no-text Canvas delivered to Spotify.", status: "done" },
            { date: "Thu Jul 9", kind: "asset", label: "Visualizer + out-now asset", detail: "Full-length 16:9 visualizer and the out-now asset built and loaded.", status: "done" },
            { date: "Fri Jul 10", kind: "release", channel: ["Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY: Water Holes out", detail: "Out-now post; pre-save flips to listen-now. Light paid launches the same day as a cold-start demand read.", cta: "Out now, stream", status: "done" },
            { date: "Jul 10–13", kind: "paid", label: "Ads held to read decay", detail: "Paid deliberately held the first days to measure organic decay against a no-ads baseline.", status: "done" },
            { date: "Mon Jul 13", kind: "content", channel: ["Instagram", "TikTok"], label: "Condensed visualizer cutdown", detail: "Short condensed cut of the visualizer posted organically.", status: "done" },
            { date: "Tue Jul 14", kind: "paid", channel: ["Meta", "YouTube"], label: "Relaunch paid on the visualizer", detail: "Meta traffic + YouTube against the live visualizer; boost the organic winner to existing followers.", status: "done" },
            { date: "Fri Jul 17", kind: "milestone", label: "Week 1 read", detail: "Spotify Indie brandneu add (#17), Apple New in Indie (#13); ~1,200 streams/day holding near-flat.", status: "done" },
          ],
        },
        {
          key: "real-time",
          title: "Single 2 · Real Time",
          window: "Jul 30 – Aug 28",
          releaseDate: "Fri Aug 14",
          format: "Music-video single",
          status: "next",
          summary:
            "The music-video single, and the control for the deliverables list. MV done 7/30, pre-save opens 8/1, the video premieres on release day 8/14, and the standalone album pre-save opens 8/17.",
          entries: [
            { date: "Thu Jul 30", kind: "asset", label: "Real Time MV delivered", detail: "Full music video delivered by Joseph + Luis, with cutdowns, ahead of the pre-save window.", status: "upcoming" },
            { date: "Sat Aug 1", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Pre-save + single art: 'Real Time is coming'", detail: "T-14 announce: single artwork + pre-save go live. Platform, Facade and Engine-parts assets also due today; Real Time live cutdowns delivered to CCD (minimum).", cta: "Pre-save", status: "upcoming" },
            { date: "Aug 1–14", kind: "content", channel: ["Instagram", "TikTok", "Meta", "YouTube"], label: "Promo-snippets window (teaser then pre-save hits)", detail: "Locked 8/1–8/14 window: a music-video teaser a couple of days after the announce, then escalating pre-save pushes on warm audiences with MV and live snippets in rotation; boost the winners. Music-video single, so paid leans YouTube.", cta: "Pre-save", status: "upcoming" },
            { date: "Fri Aug 14", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY: Real Time + music video", detail: "Video premieres on YouTube; out-now hero asset; CTAs flip to stream-now; Spotify Marquee fires. Paid amplifies the winners a couple of days later, run dark.", cta: "Out now, stream", status: "upcoming" },
            { date: "Fri Aug 14", kind: "asset", label: "All live-shoot deliverables in", detail: "Everything from the 7/19 live shoot delivered to CCD: a full-length performance + two ~30s teasers per track.", status: "upcoming" },
            { date: "Sun Aug 16", kind: "asset", label: "Album artwork due", detail: "Final square album artwork delivered for the 8/17 album pre-save launch.", status: "upcoming" },
            { date: "Mon Aug 17", kind: "presave", channel: ["Instagram", "TikTok"], label: "ALBUM pre-save opens", detail: "Standalone, splashy album pre-save announce (Fantastic Machines), decoupled from any single CTA so 'stream single' and 'pre-save album' never compete.", cta: "Pre-save the album", status: "upcoming" },
            { date: "Fri Aug 28", kind: "live", channel: ["YouTube", "Instagram", "TikTok"], label: "Real Time live clip (2 wks post)", detail: "Deploy the Real Time live-performance clip pointing back to the single; full live performance video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "sibn",
          title: "Single 3 · Somewhere I'm Better Now",
          window: "Sep 4 – Oct 2",
          releaseDate: "Fri Sep 18",
          format: "Non-video single",
          status: "upcoming",
          summary:
            "Non-video single, with the deliverables list refined off Real Time's actuals. The album is already on pre-save, so this push drives the whole-album countdown, not just the single.",
          entries: [
            { date: "Sat Aug 15", kind: "asset", label: "SIBN release assets due", detail: "Ababa delivers the Somewhere I'm Better Now asset package.", status: "upcoming" },
            { date: "Fri Sep 4", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Pre-save + single art announce (T-14)", detail: "Single artwork + pre-save go live. Because the album is already on pre-save, the CTA leans on the whole-album countdown.", cta: "Pre-save", status: "upcoming" },
            { date: "Sep 4–17", kind: "paid", channel: ["Meta", "TikTok"], label: "Ababa snippets + teasers", detail: "Snippets in rotation, boost the winners. Non-video single, so the higher Meta budget sits here. Skip Labor Day (Mon Sep 7) for posting.", status: "upcoming" },
            { date: "Fri Sep 18", kind: "release", channel: ["Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY: Somewhere I'm Better Now", detail: "Out-now + stream-now; Spotify Marquee. The push continues into the album countdown.", cta: "Out now, stream", status: "upcoming" },
            { date: "Fri Oct 2", kind: "live", channel: ["YouTube", "Instagram"], label: "SIBN live clip (2 wks post)", detail: "Live-performance clip points back to the single; full live video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "fantastic-machine",
          title: "Single 4 · Fantastic Machine (title track)",
          window: "Oct 9 – Nov 6",
          releaseDate: "Fri Oct 23",
          format: "Music-video single · hero",
          status: "upcoming",
          summary:
            "The title-track hero. Its music video is delivered super-early (8/20) and held to ship with the single, then runs all month as the album's lead magnet. This kicks the final 30-day pre-save punch into the album.",
          entries: [
            { date: "Thu Aug 20", kind: "asset", label: "Fantastic Machine MV delivered (early)", detail: "Music video delivered super-early by the directors (David + Joe). Held to premiere with the single.", status: "upcoming" },
            { date: "Fri Oct 9", kind: "presave", channel: ["Instagram", "TikTok"], time: "Midday", label: "Announce + pre-save + single art (T-14)", detail: "Hero announce; single artwork + pre-save go live. Starts the final ~30-day hard push on the album pre-save.", cta: "Pre-save", status: "upcoming" },
            { date: "Oct 9–22", kind: "paid", channel: ["Meta", "YouTube", "TikTok"], label: "MV teasers + album push", detail: "Music-video teasers + Ababa snippets; hammer the album pre-save. Music-video single, so spend leans YouTube.", status: "upcoming" },
            { date: "Fri Oct 23", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], time: "Midday", label: "RELEASE DAY: Fantastic Machine + music video", detail: "Single out; music video premieres on release day and runs all month as the album lead magnet. Marquee fires.", cta: "Out now, stream", status: "upcoming" },
            { date: "Fri Nov 6", kind: "live", channel: ["YouTube", "Instagram"], label: "Fantastic Machine live clip (2 wks post)", detail: "Live clip points back to the title track; full live video long-form on YouTube.", status: "upcoming" },
          ],
        },
        {
          key: "album",
          title: "Album · Fantastic Machines",
          window: "Aug 17 pre-save → Nov 20",
          releaseDate: "Fri Nov 20",
          format: "Album",
          status: "upcoming",
          summary:
            "Pre-save opens 8/17 and runs the whole cycle as a standalone countdown, with a 30-day hard push into the 11/20 release. Unlike the singles, the album tail keeps pushing 4 to 8 weeks after it lands.",
          entries: [
            { date: "Sat Aug 15", kind: "asset", label: "Fantastic Machine single + album assets due", detail: "Ababa delivers the title-track single and album asset package.", status: "upcoming" },
            { date: "Mon Aug 17", kind: "presave", channel: ["Instagram", "TikTok"], label: "Album pre-save opens", detail: "The standalone album pre-save countdown begins and runs underneath every single push through release.", cta: "Pre-save the album", status: "upcoming" },
            { date: "Aug 17 – Nov 20", kind: "paid", channel: ["Meta", "TikTok"], label: "Album countdown backdrop", detail: "Every single's push doubles as an album-countdown push. The final ~30 days before release is the hardest pre-save punch of the cycle.", status: "upcoming" },
            { date: "Fri Nov 20", kind: "release", channel: ["YouTube", "Instagram", "TikTok"], label: "ALBUM out: Fantastic Machines", detail: "Album release. Full-length live performance videos roll out as the second creative wave (long-form YouTube). Spotify Marquee + Showcase; Strive FM rideshare (~150K streams) as the passive streaming backbone.", cta: "Out now, stream", status: "upcoming" },
            { date: "Nov 20 +4–8 wks", kind: "milestone", label: "Sustained album tail", detail: "Keep pushing the album for 4 to 8 weeks: boost the winners, and revisit live cutdowns to point back to the full body of work.", status: "upcoming" },
          ],
        },
      ],
      footnote:
        "Every release date is locked: Water Holes 7/10, Real Time 8/14 (MV), album pre-save 8/17, Somewhere I'm Better Now 9/18, Fantastic Machine 10/23 (MV), album 11/20. Promo and live-clip beats follow the fixed cadence around those anchors (announce 14 days out, live clip 2 weeks after each single). Physical / activation plays (the Machine Room web game, fan-sourced assembly, a Heavy Manners workshop) are scoped separately and not shown here.",
    },

    // ===================================================================
    // 03. Asset Checklist
    // ===================================================================
    {
      type: "assetChecklist",
      number: "03",
      navLabel: "Checklist",
      title: "The Asset Checklist",
      intro:
        "The actual asset list for the rollout, per release, mapped to who makes each piece. Check items off as they land so the whole team sees live status. Water Holes is fully delivered; everything else maps to the calendar above.",
      storageKey: "temporex-asset-checklist",
      standardNote:
        "Every release needs the same core: single artwork (1:1), a no-text Spotify Canvas, a full-length 16:9 visualizer (the music video covers this on Real Time and Fantastic Machine), and one paid CTA set (Coming Soon / Release Date / Out Now / Stream Now), each built in 1:1 and 9:16 with a static, 15s and 30s cut. Then as many extra out-now cuts as we can make (studio, animated, live, iPhone-speaker classic) plus the live-shoot cutdowns (a full performance and two ~30s teasers per track). Ababa’s animated assets cover Waterhole, Somewhere I’m Better Now and the album; Real Time and Fantastic Machine lead with music videos (DIY and full-production).",
      ownerLegend: [
        { owner: "Joseph + Luis", label: "artist team: MV + live edits" },
        { owner: "Ababa", label: "animation: canvas, visualizers, 3D" },
        { owner: "CCD", label: "paid cutdowns, resizing, trafficking" },
        { owner: "Label", label: "single / album art, DSP motion" },
      ],
      groups: [
        {
          heading: "Single 1 · Water Holes",
          release: "Fri Jul 10",
          format: "Delivered",
          status: "done",
          description: "Shipped. Kept here as the template every later release copies.",
          items: [
            { id: "wh-art", label: "Single artwork (1:1)", formats: ["1:1"], owner: "Label", status: "have" },
            { id: "wh-canvas", label: "Spotify Canvas (no text)", formats: ["9:16 · 6s"], owner: "Ababa", status: "have" },
            { id: "wh-viz", label: "Full-length visualizer (16:9)", formats: ["16:9"], owner: "Ababa", status: "have" },
            { id: "wh-paid", label: "Paid CTA set: Out Now / Stream Now", formats: ["1:1 + 9:16", "static/15s/30s"], owner: "CCD", status: "have" },
            { id: "wh-condensed", label: "Condensed visualizer cutdown", formats: ["9:16"], owner: "Joseph + Luis", status: "have" },
          ],
        },
        {
          heading: "Single 2 · Real Time",
          release: "Fri Aug 14",
          format: "Music-video single · the control",
          status: "next",
          description: "The music video covers the full-length visualizer. This is the control set; refine the list off its actuals for the singles after.",
          items: [
            { id: "rt-mv", label: "Music video (DIY), full-length (16:9) + cutdowns", formats: ["16:9", "cutdowns"], owner: "Joseph + Luis", status: "in-progress", note: "Due 7/30 (Joseph + Luis DIY video). Satisfies the full-length visualizer; cutdowns feed the paid units." },
            { id: "rt-art", label: "Single artwork (1:1)", formats: ["1:1"], owner: "Label", status: "needed" },
            { id: "rt-canvas", label: "Spotify Canvas (no text)", formats: ["9:16 · 6s"], owner: "Joseph + Luis", status: "needed", note: "Cut from the DIY video (Real Time is not an Ababa animated release)." },
            { id: "rt-paid", label: "Paid CTA set: Coming Soon / Release Date 8/14 / Out Now / Stream Now", formats: ["1:1 + 9:16", "static/15s/30s"], owner: "CCD", status: "needed", note: "Cut from the MV + Ababa assets + single art. Vertical with a center-safe box." },
            { id: "rt-live", label: "Live-shoot cutdowns: full performance + two ~30s teasers", formats: ["16:9 + 9:16"], owner: "Joseph + Luis", status: "needed", note: "From the 7/19 shoot. Real Time cut min by 8/1; all tracks by 8/14. Deploys 2 weeks after release (8/28)." },
            { id: "rt-extra", label: "Extra out-now cuts (studio / animated / live / iPhone-speaker)", formats: ["9:16 · 15–30s"], owner: "CCD + Joseph", status: "needed", note: "As many as we can make; whatever format overperforms gets 3 varied versions." },
          ],
        },
        {
          heading: "Single 3 · Somewhere I'm Better Now",
          release: "Fri Sep 18",
          format: "Non-video single",
          status: "upcoming",
          description: "No music video, so Ababa builds the full-length visualizer. Assets due 8/15.",
          items: [
            { id: "sibn-art", label: "Single artwork (1:1)", formats: ["1:1"], owner: "Label", status: "needed" },
            { id: "sibn-canvas", label: "Spotify Canvas (no text)", formats: ["9:16 · 6s"], owner: "Ababa", status: "needed" },
            { id: "sibn-viz", label: "Full-length visualizer (16:9)", formats: ["16:9"], owner: "Ababa", status: "in-progress", note: "Ababa building SIBN 2D (pending the contract extension)." },
            { id: "sibn-paid", label: "Paid CTA set: Coming Soon / Release Date 9/18 / Out Now / Stream Now", formats: ["1:1 + 9:16", "static/15s/30s"], owner: "CCD", status: "needed" },
            { id: "sibn-snippets", label: "Ababa animated snippets", formats: ["9:16"], owner: "Ababa", status: "in-progress" },
            { id: "sibn-live", label: "Live-shoot cutdowns: full performance + two ~30s teasers", formats: ["16:9 + 9:16"], owner: "Joseph + Luis", status: "needed" },
          ],
        },
        {
          heading: "Single 4 · Fantastic Machine (title track)",
          release: "Fri Oct 23",
          format: "Music-video single · hero",
          status: "upcoming",
          description: "The hero. MV delivered super-early (8/20) and held to ship with the single, then run all month as the album lead magnet.",
          items: [
            { id: "fm-mv", label: "Music video (full production, 16:9) + cutdowns", formats: ["16:9", "cutdowns"], owner: "Directors / Luis", status: "in-progress", note: "Full-production video by directors David + Joe; delivered 8/20, ships with the single 10/23. Satisfies the full-length." },
            { id: "fm-art", label: "Single artwork (1:1)", formats: ["1:1"], owner: "Label", status: "needed" },
            { id: "fm-canvas", label: "Spotify Canvas (no text)", formats: ["9:16 · 6s"], owner: "Joseph + Luis", status: "needed", note: "Cut from the full-production video." },
            { id: "fm-paid", label: "Paid CTA set: Coming Soon / Release Date 10/23 / Out Now / Stream Now", formats: ["1:1 + 9:16", "static/15s/30s"], owner: "CCD", status: "needed" },
            { id: "fm-live", label: "Live-shoot cutdowns: full performance + two ~30s teasers", formats: ["16:9 + 9:16"], owner: "Joseph + Luis", status: "needed" },
          ],
        },
        {
          heading: "Album · Fantastic Machines",
          release: "Fri Nov 20",
          format: "Album",
          status: "upcoming",
          description: "Pre-save opens 8/17. The second creative wave (full live videos) rolls out here, plus the album-specific assets.",
          items: [
            { id: "alb-art", label: "Album artwork (1:1)", formats: ["1:1"], owner: "Label", status: "needed", note: "Due 8/16 for the 8/17 pre-save launch." },
            { id: "alb-presave", label: "Pre-save motion assets (Apple / Spotify)", formats: ["9:16 + 1:1"], owner: "Label", status: "needed", note: "Apple builds the motion graphic from the art we provide; needs a lead time." },
            { id: "alb-live", label: "Full live performance videos (long-form)", formats: ["16:9"], owner: "Joseph + Luis", status: "needed", note: "Second creative wave, long-form YouTube; one per single track." },
            { id: "alb-3d", label: "Ababa 3D album components / POV theme-park-ride", formats: ["16:9 + 9:16"], owner: "Ababa", status: "in-progress", note: "In build now; leaves room for CTAs and visualizers." },
            { id: "alb-paid", label: "Paid CTA set: Out Now / Stream Now (album)", formats: ["1:1 + 9:16", "static/15s/30s"], owner: "CCD", status: "needed" },
            { id: "alb-strive", label: "Strive FM rideshare assets", formats: ["audio + tile"], owner: "CCD", status: "needed", note: "~$1.6K / ~150K streams as the passive streaming backbone." },
          ],
        },
      ],
      footnote:
        "Built from the deliverables spec we locked (the 6/29 asset list) and what each release actually needs. The music video covers the full-length visualizer on Real Time and Fantastic Machine, so those releases do not need a separate one. Ababa is contracted through 8/15, with a possible extension for the Somewhere I'm Better Now 2D and album work.",
    },
  ],
};
