import type { StrategyPlanData } from "../plan-context";

export const eightyTwoMajorDeliverables: StrategyPlanData = {
  accentColor: "#FD3737",
  ogImage: "/images/82major-deliverables/og-image.png",
  language: "en",
  languageAlternates: [{ slug: "82major-deliverables-ko", label: "한국어", code: "KO" }],

  cover: {
    label: "SIGN / Paid Social Deliverables",
    title: "82MAJOR",
    subtitle: "The paid-ad creative wish list for the SIGN front-load: every asset, in square and vertical masters, grounded in what is working for peers in the U.S. right now.",
    partnership: "Kakao Entertainment Group × Crowd Control Digital",
    prepared: "Geoff Shames / Co-Founder, CCD",
    date: "June 2026",
    backgroundImage: "/images/82major/82major-group.jpg",
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
      subtitle: "SIGN is already out. There is no tent-pole date to work backward from, so paid creative fires as soon as assets clear, and spend layers onto whatever wins.",
      body: [
        "This page is the production checklist for CCD-driven paid-ad creative on SIGN. Per the agreed creative split, CCD owns the paid-ad wish list, grounded in competitor creative and hard guidelines; UGC and organic content is ideated separately once we see the group's existing content and social calendar. Nothing here requires new band availability beyond what is already requested in the asset question list.",
        "Every video concept ships as a 9:16 vertical master plus a 1:1 square (and 4:5 feed crop) so a single approval covers TikTok, Reels, Shorts, and Meta feed placements. Each line item below carries the reasoning: what the hook is, what the CTA is, and a playable reference example from a peer artist showing the format working in the U.S. market. Reference reasoning is grounded in frame-level video-AI analysis of nine top-performing peer posts plus current platform documentation.",
        "Checking items on this page marks them for production. The Approve button at the bottom sends the selected state to our team and greenlights the build.",
      ],
      supports: {
        heading: "Where These Assets Run",
        items: [
          "TikTok: Spark Ads on official posts + In-Feed for discovery testing",
          "Instagram: Reels ads + 1:1/4:5 feed placements for retargeting",
          "YouTube Shorts: vertical cutdowns against K-pop and R&B viewers",
          "Meta retargeting pools built from engaged TikTok-style viewers",
        ],
      },
      goals: {
        heading: "What Good Looks Like",
        items: [
          "Every cut opens on the most English-legible vocal hook of SIGN within the first second",
          "Two distinct creative tracks: fandom-targeted and discovery-targeted, never blended",
          "Logo or artist identification inside the first 3 seconds on every paid unit",
          "Enough hook variants per concept to let the platforms pick winners, not us",
        ],
      },
      footnote: "Scope: the current SIGN cycle only. The September comeback and November tour authorize fresh creative lists on the same structure.",
    },

    // ===================================================================
    // 02. Creative Principles
    // ===================================================================
    {
      type: "vertical",
      number: "02",
      navLabel: "Principles",
      title: "Creative Principles",
      intro: "Four rules govern every asset on this list. They come from frame-level analysis of the highest-performing peer posts (TWS, BOYNEXTDOOR, RIIZE, ZEROBASEONE, Stray Kids, ATEEZ, LE SSERAFIM, KATSEYE, Tommy Richman) and current U.S. platform guidance.",
      subBlocks: [
        {
          label: "A",
          title: "Hook in the first second",
          objective: "Win the scroll before the viewer registers this is a music ad.",
          strategy: "Every top peer post we analyzed syncs the first physical movement to the first beat of audio: RIIZE's dancers hit their first power move at 0:00, Stray Kids cuts members on the 'Boom!' onomatopoeia, KATSEYE opens cold on the 'Hands off Gabriela' chorus line. None of them use intro cards. For SIGN, we identify the single most repeatable English-legible vocal moment and cold-open every paid cut on it, with the first visual peak locked to the first beat.",
          components: {
            heading: "Hard Guidelines (Per Agreed Spec)",
            items: [
              "Logo or artist ID inside the first 3 seconds, kept inside safe zones",
              "No intro cards, no fade-ins, no dead frames before the hook",
              "On-screen text hook within the first second where the cut needs context",
              "6-12s cuts for prospecting; 12-20s for retargeting",
            ],
          },
        },
        {
          label: "B",
          title: "Lo-fi beats polish in paid",
          objective: "Spend behind creative that reads native, not like a label ad.",
          strategy: "Practice-room and selfie-style content consistently outperforms polished creative in paid placements. Stray Kids' dance-practice highlight (14.6M views, 17% engagement) and Tommy Richman's handheld studio clips outperform their own polished MV cuts in feed environments. The MV is the source library; the winning paid units will mostly look like they were shot on a phone.",
          components: {
            heading: "Implications",
            items: [
              "Boost real organic posts (Spark Ads) instead of dark-posting: identical creative runs 20-40% higher engagement with the social proof attached",
              "Practice-room and behind-scenes footage requested from the label feeds this track",
              "Polished assets (MV cutdowns, studio verticals) still ship, but as the minority of the mix",
            ],
          },
        },
        {
          label: "C",
          title: "Fandom and discovery are different assets",
          objective: "Stop averaging two audiences into creative that converts neither.",
          strategy: "Fandom-targeted creative leans on member identity: fancam edits, member-pair content, challenge collabs. Discovery-targeted creative assumes zero K-pop context: English meme captions, trend formats, U.S. creator dance credits, R&B-lane styling. RIIZE's 'us at 3AM' post works on cold audiences because it is a relatable-caption trend post first and a K-pop post second; their member-pair edits work on warm audiences for the opposite reason. Every item below is tagged to one track.",
        },
        {
          label: "D",
          title: "TikTok discovers, Meta converts",
          objective: "Sequence the spend so each platform does the job it is priced for.",
          strategy: "TikTok delivers volume and creative signal cheaply but converts to streams poorly; Meta delivers roughly 4-5x cheaper cost-per-stream on optimized campaigns. The flow: test hooks on TikTok, Spark-boost the winners, build engaged-viewer pools, retarget those pools on Meta with listen-now units. Since SIGN is already released, every CTA on this page is listen-now; pre-save logic returns for the September comeback.",
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
      intro: "Two master formats cover every placement. Vertical 9:16 is the primary deliverable; square and 4:5 crops are derived from it where framing allows, or re-framed where it does not.",
      subBlocks: [
        {
          label: "A",
          title: "Vertical master / 9:16",
          objective: "One 1080x1920 master per concept, framed center-safe so the same file clears TikTok, Reels, Stories, and Shorts.",
          components: {
            heading: "Platform Requirements",
            items: [
              "TikTok In-Feed: 9:16, min 540x960 (720x1280+ recommended), up to 60s, 9-15s sweet spot, max 500MB",
              "IG Reels / Stories ads: 1080x1920 required; keep top ~14%, bottom 20-35%, sides ~6% clear of text and logos",
              "YouTube Shorts ads: 1080x1920; only the first 60s plays in the Shorts feed; avoid top 10%, bottom 25%, right 10%",
              "Burned-in captions on everything; sound-on mix (sound lifts Shorts conversions 20%+)",
            ],
          },
        },
        {
          label: "B",
          title: "Square + feed crops / 1:1 and 4:5",
          objective: "Meta feed placements and catalog-style retargeting units.",
          components: {
            heading: "Platform Requirements",
            items: [
              "1:1 at 1080x1080: required for Meta Right Column and Marketplace; the universal square master",
              "4:5 at 1080x1350: the preferred feed ratio (max vertical real estate in feed); derive from the 9:16 master where the choreo framing survives the crop",
              "Static units (cover art, CTA cards) ship in both 1:1 and 9:16 story sizes",
            ],
          },
        },
        {
          label: "C",
          title: "Naming + versioning",
          objective: "Keep the test matrix legible when 12 concepts x 3 ratios x 2-3 hooks are live at once.",
          components: {
            heading: "Convention",
            items: [
              "82M-SIGN-[concept]-[track: FAN/DISC]-[ratio: 916/11/45]-[hook: H1/H2/H3]-[v#]",
              "Every hero concept ships minimum: 9:16 master + 1:1 + 4:5, with 2-3 hook variants on the 9:16",
              "Winning hooks get back-ported to the other ratios before scale spend",
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
      intro: "Twelve deliverables across four groups. Each card carries the hook and CTA logic plus playable peer references. Check the items to approve; the button at the bottom sends the list to our team.",
      storageKey: "82major-sign-deliverables",
      groups: [
        {
          heading: "Performance & Music Assets",
          description: "The polished minority of the mix. Source material: the SIGN MV, official choreography video, and any studio footage the label can clear.",
          items: [
            {
              id: "perf-cutdown",
              title: "Chorus-open MV cutdowns",
              priority: "P1 / Launch",
              formats: ["9:16 1080x1920", "1:1 1080x1080", "4:5 1080x1350"],
              duration: "6-15s",
              platforms: ["TikTok In-Feed", "IG Reels", "YouTube Shorts"],
              variants: "3 hook variants",
              hook: "Cold-open mid-chorus on SIGN's most English-legible vocal moment, first visual peak on the first beat. Peer data is unanimous here: Stray Kids cuts on the 'Boom!' onomatopoeia, RIIZE opens exactly on 'woah woah woah'. No build-up, no intro card; the chorus IS the first frame.",
              cta: "Listen-now end card in the final 2 seconds (track title + DSP logos) plus caption link. Discovery cuts add an on-screen text hook in second 1 ('the R&B song K-pop wasn't supposed to make') to frame the lane for cold viewers.",
              notes: [
                "Logo watermark from frame 1 satisfies the 3-second ID guideline without eating the hook",
                "Center-safe framing so the 1:1 and 4:5 crops survive without re-edit",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7395802425455545621",
                  artist: "Stray Kids",
                  label: "Dance practice highlight / 14.6M views",
                  takeaway: "Member match-cuts land exactly on the 'Boom!' audio hit; the edit is the hook.",
                },
                {
                  platform: "tiktok",
                  id: "7513933432599235841",
                  artist: "RIIZE",
                  label: "Point-choreo clip / ~970K likes",
                  takeaway: "Opens on the song's most English-legible vocal moment, zero setup.",
                },
              ],
            },
            {
              id: "native-vertical",
              title: "Native-vertical studio performance",
              priority: "P2 / Week 2-3",
              formats: ["9:16 1080x1920"],
              duration: "15-25s",
              platforms: ["YouTube Shorts", "IG Reels", "TikTok"],
              variants: "1 hero + 2 cutdowns",
              hook: "Shot natively 9:16 (not cropped): single-color studio, full-body framing, point choreo. The ZEROBASEONE 'Color Code' format proves a visual constraint (one color, one take) reads premium on small screens and gives the series a recognizable wrapper. A meta-narrative ('shot in one take', 'the SIGN red room') gamifies a straight performance.",
              cta: "Soft CTA: artist + track title persistent in safe zone; caption carries the listen-now link. This unit builds recognition and retargeting pools more than direct clicks.",
              notes: [
                "This is the one net-new shoot on the list; everything else is edit-only",
                "Wide single take preferred: a steady wide shot is 'visual proof' of skill and survives re-watches",
              ],
              examples: [
                {
                  platform: "youtube-short",
                  id: "U76xNilTMx8",
                  artist: "ZEROBASEONE",
                  label: "Color Code vertical performance",
                  takeaway: "Native 9:16, one-color constraint, top-frame color bar as series wrapper.",
                },
                {
                  platform: "tiktok",
                  id: "7516438087426116882",
                  artist: "RIIZE",
                  label: "Studio wide-shot choreo / 2M views",
                  takeaway: "Static low wide shot; synchronization is the spectacle, no cuts needed.",
                },
              ],
            },
            {
              id: "alt-audio",
              title: "Sped-up variant + lyric visualizer",
              priority: "P2 / Week 2-3",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "15-30s (visualizer up to 60s)",
              platforms: ["TikTok sound page", "YouTube", "IG Reels"],
              variants: "Sped-up + slowed + visualizer",
              hook: "Alt-texture audio is its own discovery surface: Tommy Richman's lo-fi VHS version out-created the original sound roughly 7-to-1 on TikTok while streams accrued to the original on DSPs. A SIGN sped-up version with a textured visualizer gives editors and fan accounts a second sound to create on, and gives us cheap ad units from the visualizer.",
              cta: "Visualizer end-frame: 'SIGN, out everywhere' + DSP logos. The sped-up sound page itself is the CTA for creators; we seed it with 2-3 official clips so it is not an empty room.",
              notes: [
                "Visualizer is a design deliverable, not a shoot: cover art + kinetic lyric type + texture",
                "Upload alt versions through official channels for fingerprinting before any seeding",
              ],
              examples: [
                {
                  platform: "youtube",
                  id: "qvF5iq_s01Q",
                  artist: "Tommy Richman",
                  label: "MILLION DOLLAR BABY (VHS) visualizer",
                  takeaway: "The alt-version visualizer gives the second sound an official, embeddable home.",
                },
                {
                  platform: "tiktok",
                  id: "7363826325108411690",
                  artist: "Tommy Richman",
                  label: "Handheld studio snippet",
                  takeaway: "Raw studio energy, falsetto hook in second 1; the anti-polish benchmark.",
                },
              ],
            },
          ],
        },
        {
          heading: "Fandom-Targeted Assets (Spark Track)",
          description: "Run as Spark Ads on official posts against K-pop and 82MAJOR-fandom audiences. Member identity is the product; social proof stays attached.",
          items: [
            {
              id: "fancam-edits",
              title: "Member fancam + pair edits",
              priority: "P1 / Launch",
              formats: ["9:16 1080x1920"],
              duration: "8-12s",
              platforms: ["TikTok Spark", "IG Reels"],
              variants: "Per-member x 2 hooks",
              hook: "Same 10-second SIGN cut, one member (or pair) per version. Member-pair content adds a shippable dynamic: BOYNEXTDOOR's 'Ctrl C, Ctrl V' mirrored-duo gag makes the relationship the hook, with an English meme caption that needs no translation. The pair edits double as an A/B test of which faces convert for which audience segments.",
              cta: "Caption CTA only ('SIGN out now' + link); fancam viewers do not need convincing, they need a destination. Spend follows whichever member edits clear the engagement bar.",
              notes: [
                "Edit-only deliverable from MV + practice footage",
                "Run all member variants at equal budget for 72h, then concentrate on top 2",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7508233147453066503",
                  artist: "BOYNEXTDOOR",
                  label: "'Ctrl C, Ctrl V' member-pair gag",
                  takeaway: "English meme caption + duo dynamic; fandom-shippable and translation-free.",
                },
                {
                  platform: "tiktok",
                  id: "7487864496195702071",
                  artist: "RIIZE",
                  label: "Two-member B-side edit / ~668K likes",
                  takeaway: "Per-member variants of one cut = creative testing disguised as fan service.",
                },
              ],
            },
            {
              id: "challenge-seed",
              title: "Dance challenge seed + tutorial",
              priority: "P2 / With creators (~10 days)",
              formats: ["9:16 1080x1920"],
              duration: "10-20s",
              platforms: ["TikTok Spark", "YouTube Shorts"],
              variants: "Seed + tutorial + casual-clothes version",
              hook: "The challenge seed needs a self-teaching point move on SIGN's catchiest bar. TWS's seed works because the first physical action lands on the first beat and the lyric doubles as the dance instruction; the 'Who can do?' caption is the participation CTA. The slowed, mirrored tutorial (NCT WISH model) is the conversion layer that turns viewers into participants and fills the sound page with UGC.",
              cta: "Participation CTA, not a streaming CTA: challenge hashtag + 'show us yours'. Streams follow sound-page volume. Creator partners (in selection now) post on the same sound within 48h of the seed.",
              notes: [
                "Casual-clothes version reads native; stage-outfit version reads promo. Ship the casual one first",
                "Coordinate hashtag with Kakao before seeding: one hashtag, no variants",
              ],
              examples: [
                {
                  platform: "youtube-short",
                  id: "vewwzp4LSiw",
                  artist: "TWS",
                  label: "Challenge seed / office cold-open",
                  takeaway: "Bored-office skit into choreo: relatable setup, first move on first beat, 'Who can do?' CTA.",
                },
                {
                  platform: "tiktok",
                  id: "7496446169082580231",
                  artist: "NCT WISH",
                  label: "Slowed + mirrored tutorial / ~310K likes",
                  takeaway: "The tutorial converts viewers into participants; standard challenge line item.",
                },
              ],
            },
            {
              id: "release-announce",
              title: "'Streaming now' announcement unit",
              priority: "P1 / Launch",
              formats: ["9:16 1080x1920", "1:1 1080x1080"],
              duration: "8-15s",
              platforms: ["TikTok Spark", "IG Reels", "Meta Feed"],
              variants: "2 hooks",
              hook: "Member close-up into the chorus, caption carrying the availability message. BOYNEXTDOOR's 'short ver OUT NOW 📢' post is the template: hook, availability CTA, and challenge hashtag in one organic-looking unit (1.6M views, 19% engagement). KATSEYE's release-day post stacks the same structure with the lyric hook repeated as caption text.",
              cta: "Hard listen-now: 'SIGN streaming everywhere' + DSP end card + link. This is the most direct-response unit on the fandom track; it runs continuously as the always-on Spark layer.",
              notes: [
                "Since SIGN is already out, this unit replaces a traditional release-day countdown: frame it as 'the song your FYP keeps almost playing'",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7537242835859361042",
                  artist: "BOYNEXTDOOR",
                  label: "'OUT NOW 📢' announcement / 1.6M views",
                  takeaway: "Hook + availability CTA + challenge hashtag in one unit; organic post that works as an ad.",
                },
                {
                  platform: "tiktok",
                  id: "7517878442147286285",
                  artist: "KATSEYE",
                  label: "Release-day post / 34M views, 5.9x outlier",
                  takeaway: "Chorus-first open, lyric repeated as caption, 'out now' in plain English.",
                },
              ],
            },
          ],
        },
        {
          heading: "Discovery-Targeted Assets",
          description: "Built for cold U.S. audiences with zero K-pop context. English-first, trend-literate, styled to the R&B lane SIGN actually lives in.",
          items: [
            {
              id: "trend-format",
              title: "Trend / meme-caption formats",
              priority: "P2 / Rolling",
              formats: ["9:16 1080x1920"],
              duration: "8-15s",
              platforms: ["TikTok In-Feed", "IG Reels"],
              variants: "2-3 concepts, refreshed biweekly",
              hook: "Relatable-caption formats where SIGN is the soundtrack, not the subject. RIIZE's 'us at 3AM' reads as a trend post first and a K-pop post second, which is why it works on cold audiences; crediting a Western creator's choreo ('dc @nianaguerrero') plugs it into the U.S. trend graph. LE SSERAFIM's move: the English lyric hook IS the caption and the hashtag, so the viewer and the algorithm learn the same four words.",
              cta: "No hard CTA in the unit; caption carries the title. Discovery units optimize for completion and sound-page visits. Whatever SIGN's most repeatable English lyric is becomes the hashtag, the caption, and second 1 of audio in every cut.",
              notes: [
                "Concepts sourced weekly from what is trending in U.S. music TikTok, not from the K-pop tab",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7516438087426116882",
                  artist: "RIIZE",
                  label: "'us at 3AM' trend post / 2M views",
                  takeaway: "Trend format first, K-pop second; Western dance credit plugs into the U.S. graph.",
                },
                {
                  platform: "tiktok",
                  id: "7565088545011010824",
                  artist: "LE SSERAFIM",
                  label: "'EAT IT UP' lyric-caption post / 19.3M views",
                  takeaway: "The English lyric hook is the caption, the hashtag, and the first beat.",
                },
              ],
            },
            {
              id: "collab-moment",
              title: "Collab / cameo moment",
              priority: "P3 / Opportunistic",
              formats: ["9:16 1080x1920"],
              duration: "10-20s",
              platforms: ["TikTok Spark"],
              variants: "Per partner",
              hook: "A recognizable face inside the frame collapses the cold-audience barrier instantly. ATEEZ x j-hope is the ceiling case (26.5M views by stacking two fandoms); KATSEYE x Jessica Alba shows the U.S.-celebrity version for non-K-pop audiences. At 82MAJOR's scale the play is K-pop-adjacent creators, label-mates, or the creator partners already being selected, doing the SIGN challenge on their own pages.",
              cta: "Participation + profile-visit CTA. Each collab is also a Spark-boostable asset on the partner's handle, which buys their audience graph, not just their face.",
              notes: [
                "No new budget line: routes through the creator program already in motion",
                "Hold celebrity-tier swings for the September comeback when there is a date to anchor",
              ],
              examples: [
                {
                  platform: "tiktok",
                  id: "7517966340511059218",
                  artist: "ATEEZ x j-hope",
                  label: "Lemon Drop collab / 26.5M views",
                  takeaway: "Two fandoms in one frame; the apex asset of the saturation-collab playbook.",
                },
                {
                  platform: "tiktok",
                  id: "7481880809624882440",
                  artist: "LE SSERAFIM x GFRIEND",
                  label: "Senior-junior collab challenge",
                  takeaway: "Guest name leads the caption; value legible with sound off.",
                },
              ],
            },
            {
              id: "rnb-lane",
              title: "R&B-lane choreo cut",
              priority: "P2 / Week 2-3",
              formats: ["9:16 1080x1920", "4:5 1080x1350"],
              duration: "10-15s",
              platforms: ["IG Reels", "TikTok In-Feed", "Meta Feed"],
              variants: "2 hooks",
              hook: "SIGN's lane is melodic R&B with real choreo: the Usher / Chris Brown inheritance. Destin Conrad's choreo-in-public format proves U.S. R&B audiences respond to dance-led creative when it is styled as culture (streetwear, golden hour, handheld) rather than idol polish. This cut re-grades and re-frames 82MAJOR's choreo into that visual language for R&B interest stacks.",
              cta: "Listen-now with lane framing: 'if Usher and K-pop had a group' style text hook, DSP end card. Targets Destin Conrad, Brent Faiyaz, Kehlani, Chris Brown interest audiences on Meta.",
              notes: [
                "This is the asset that tests whether the R&B positioning converts outside the K-pop graph; protect it from K-pop styling notes",
              ],
              examples: [
                {
                  platform: "youtube",
                  id: "8j3xtd78Lxw",
                  artist: "Destin Conrad",
                  label: "KISSING IN PUBLIC / choreo-forward R&B video",
                  takeaway: "Dance-led R&B styled as culture, not idol polish; the U.S. visual language for SIGN's lane.",
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
              title: "Square + 4:5 crops of all hero videos",
              priority: "P1 / With each hero",
              formats: ["1:1 1080x1080", "4:5 1080x1350"],
              duration: "Matches source",
              platforms: ["Meta Feed", "Meta Right Column", "Marketplace"],
              variants: "Per hero concept",
              hook: "Same hooks as the 9:16 masters, re-framed not letterboxed. Feed viewers scroll faster than Reels viewers, so the burned-in text hook carries more weight here.",
              cta: "Listen-now button (Meta native CTA) on every feed unit. These are the conversion-layer placements the TikTok engagement pools retarget into.",
              notes: [
                "4:5 preferred over 1:1 wherever the choreo framing survives: more screen real estate in feed",
              ],
            },
            {
              id: "static-cards",
              title: "Cover art + streaming CTA statics",
              priority: "P1 / Launch",
              formats: ["1:1 1080x1080", "9:16 1080x1920"],
              platforms: ["Meta Feed", "IG Stories", "Retargeting"],
              variants: "3 layouts",
              hook: "SIGN cover art, member group shot, and a lyric-line layout. Statics are the cheapest retargeting impressions in the system; their job is recognition frequency against warm pools, not stopping power.",
              cta: "Single button: Listen on Spotify / Apple Music. One message per static, no stacked CTAs.",
              notes: [
                "Design-only deliverable; ships within 48h of approval",
              ],
            },
            {
              id: "caption-kit",
              title: "Caption + CTA kit",
              priority: "P1 / Launch",
              formats: ["Copy doc"],
              platforms: ["All placements"],
              variants: "Fandom + discovery sets",
              hook: "Two caption systems, written once, reused everywhere. Fandom captions assume context (member names, fandom language, challenge hashtag). Discovery captions assume none (English lyric hook, lane framing, zero K-pop vocabulary).",
              cta: "Listen-now everywhere (the track is out); CTA asked after the hook establishes fit, never before. Warm audiences need 3-5 exposures before converting, so the kit includes frequency-staged variants rather than one line repeated.",
              notes: [
                "Includes the hashtag spec: one challenge hashtag, the English lyric hook hashtag, nothing else",
              ],
            },
          ],
        },
      ],
      footnote: "Reference examples are live embeds from peer artists' official accounts, selected from verified top-performing posts and analyzed frame-by-frame for hook timing, structure, and audio-visual alignment. View counts are as-of June 9, 2026 and will drift.",
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
          objective: "Everything on this list except the native-vertical shoot is edit-only, gated on receiving source assets.",
          components: {
            heading: "From The Label / Band Team",
            items: [
              "SIGN MV clean export (highest-res master available; project files if clearable)",
              "Official choreography / dance practice footage, full takes",
              "Member close-up and behind-scenes footage already shot, any quality",
              "Cover art layered files for the static and visualizer builds",
              "Approval on the sped-up version being uploaded officially for fingerprinting",
            ],
          },
        },
        {
          label: "B",
          title: "Volume at full approval",
          objective: "Approving the full checklist produces roughly 45-55 final files: 12 concepts, 2-3 ratios each, 2-3 hook variants on heroes.",
          strategy: "Editing begins on approval; the launch-priority (P1) units ship within one week of source material arriving, matching the committed one-week execution ramp. P2 units follow inside the next two weeks; P3 rides the creator program timeline.",
        },
        {
          label: "C",
          title: "How spend follows the winners",
          objective: "The checklist feeds the test-then-scale loop already agreed: paid social layers onto whatever wins.",
          components: {
            heading: "Loop",
            items: [
              "Week 1: all P1 units live at flat test budgets on TikTok + Reels",
              "72h reads: completion rate and engagement decide which hooks survive",
              "Winners get Spark-boosted on official posts and back-ported to all ratios",
              "Engaged-viewer pools retargeted on Meta with feed + static units at conversion budgets",
            ],
          },
        },
      ],
      footnote: "This list covers CCD-driven paid-ad creative only. UGC and organic content is scoped separately once the group's existing content and social calendar are shared, per the agreed creative split.",
    },
  ],
};
