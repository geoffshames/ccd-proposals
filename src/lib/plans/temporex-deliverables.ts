import type { StrategyPlanData } from "../plan-context";

export const temporexDeliverables: StrategyPlanData = {
  accentColor: "#E8A33D",
  ogImage: "/images/temporex-deliverables/og-image.png",
  language: "en",

  cover: {
    label: "Single One / Paid Social Deliverables",
    title: "TEMPOREX",
    subtitle: "The paid-ad creative checklist for the July single push: every asset in vertical and square masters, grounded in what is working for bedroom pop and indie artists in the U.S. right now.",
    partnership: "Independent Co. × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "June 2026",
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
      subtitle: "The first single of the album cycle drops in July. Paid creative needs to be approved and in edit now so the pre-save window opens with assets live, not in production.",
      body: [
        "This page is the production checklist for CCD-driven paid-ad creative on the July single. It covers paid units only: the animated presenter and Fantastic Machine assets are produced through the animation partner's pipeline, and the physical campaign (wheatpaste, El Cid, the Animation Booth) is scoped separately. What this list does is turn the source material from both of those tracks into ad-ready cuts with spend behind them.",
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
      footnote: "Scope: the July single only. Singles two through four and the November album each authorize a fresh list on the same structure, so the formats proven here compound across the cycle.",
    },

    // ===================================================================
    // 02. Creative Principles
    // ===================================================================
    {
      type: "vertical",
      number: "02",
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
    // 03. Formats & Specs
    // ===================================================================
    {
      type: "vertical",
      number: "03",
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
    // 04. The Deliverables Checklist
    // ===================================================================
    {
      type: "deliverables",
      number: "04",
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
    // 05. Production Notes
    // ===================================================================
    {
      type: "vertical",
      number: "05",
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
