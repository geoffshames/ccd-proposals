export type ConceptCategory = "Guerilla" | "Digital" | "Social" | "Experiential" | "Merch" | "Interactive";

export type MarketingConcept = {
  number: string;
  title: string;
  category: ConceptCategory;
  image: string;
  tagline: string;
  description: string;
  executionNotes: string[];
  referenceUrl?: string;
};

export type HellbillyData = {
  client: {
    name: string;
    contactName: string;
    contactEmail: string;
    industry: string;
  };
  studio: {
    name: string;
    role: string;
    email: string;
  };
  project: {
    name: string;
    tagline: string;
    type: string;
  };
  intro: string;
  concepts: MarketingConcept[];
  closingStatement: string;
  cta: {
    headline: string;
    body: string;
    email: string;
  };
};

export const hellbillyHollow: HellbillyData = {
  client: {
    name: "Hellbilly Hollow",
    contactName: "Jason Hradil",
    contactEmail: "jason@regimemusicgroup.com",
    industry: "Horror Film / Haunted Attraction",
  },
  studio: {
    name: "Crowd Control Digital",
    role: "Prepared By: Geoff Shames / Co-Founder",
    email: "geoff@crowdcontroldigital.com",
  },
  project: {
    name: "Creative Marketing Campaign",
    tagline: "16 concepts designed to terrify, captivate, and make Hellbilly Hollow impossible to ignore.",
    type: "Creative Marketing + Guerrilla Strategy",
  },
  intro: "Hellbilly Hollow isn't just a horror film — it's a real haunted attraction in Vincent, Alabama where the fiction bleeds into reality. That dual identity is the most powerful marketing asset any horror property could ask for. The audience doesn't have to suspend disbelief; they can visit the actual place. These 16 concepts are designed to weaponize that blurring of lines between story and reality, using guerrilla tactics, digital immersion, and experiential horror to build a campaign that makes fans feel like they're already inside the movie before they ever buy a ticket.",
  concepts: [
    {
      number: "01",
      title: "Toll-Free Numbers",
      category: "Interactive",
      image: "/images/hellbilly-hollow/concept-01-toll-free.png",
      tagline: "Call if you dare.",
      description: "Launch a dedicated phone number fans can call for early access, ticket giveaways, or a chance to meet the cast. The number itself becomes a marketing artifact — shared on posters, social, and whispered in trailers. Each call delivers a different creepy greeting, static, whispering, or a voice begging for help before cutting to silence. The phone number is the hook.",
      executionNotes: [
        "Set up a Twilio number with rotating audio messages that escalate in intensity weekly",
        "Promote the number on all poster art, social, and trailer end cards",
        "Callers who stay on the line longest win VIP premiere tickets",
        "Track call volume and geographic data to measure market penetration",
      ],
      referenceUrl: "https://www.wikihow.com/Creepy-Numbers-to-Call",
    },
    {
      number: "02",
      title: "Carnival AI Scary Images",
      category: "Digital",
      image: "/images/hellbilly-hollow/concept-02-carnival-ai.png",
      tagline: "Your face in the funhouse mirror.",
      description: "Create a series of AI-generated images using characters from the film as carnival-themed horror art. Use illusion diffusion and style transfer to transform fan-submitted photos into twisted carnival portraits. Fans share their 'carnival doppelgänger' across social platforms, each image watermarked with the Hellbilly Hollow branding and release date.",
      executionNotes: [
        "Build a web-based tool where fans upload selfies and receive a horror carnival portrait",
        "Each generated image includes the film's title, release date, and hashtag",
        "Create a gallery of the best submissions on the official site",
        "Seed the campaign with character portraits from the film's cast",
      ],
      referenceUrl: "https://huggingface.co/spaces/AP123/IllusionDiffusion",
    },
    {
      number: "03",
      title: "Website Prompt Questionnaire",
      category: "Interactive",
      image: "/images/hellbilly-hollow/concept-03-website.png",
      tagline: "Answer the questions. Don't look behind you.",
      description: "Build a splash page that presents visitors with a series of increasingly unsettling questions — starting normal, escalating to disturbing. Each answer unlocks the next question. Completing the questionnaire grants access to exclusive content (trailer, behind-the-scenes, ticket pre-sale). Every response captures email and phone number for the marketing database.",
      executionNotes: [
        "Design 7-10 questions that start casual and escalate to horror-themed prompts",
        "Reference the Goosebumps 'choose your own scare' format for inspiration",
        "Gate the trailer and ticket pre-sale behind questionnaire completion",
        "Capture email + phone at the final step for retargeting",
      ],
    },
    {
      number: "04",
      title: "Custom Movie Popcorn Bucket",
      category: "Merch",
      image: "/images/hellbilly-hollow/concept-04-popcorn.png",
      tagline: "The popcorn bleeds.",
      description: "Design a limited-edition custom popcorn bucket for theater partners. The bucket is black with the Hellbilly Hollow logo and includes a red food-coloring spray bottle so fans can make their popcorn 'bleed.' This becomes a collectible and social media moment — fans film themselves spraying the popcorn and posting it. The bucket itself is the content engine.",
      executionNotes: [
        "Partner with theater chains (AMC, Regal) for exclusive premiere-week buckets",
        "Include a QR code on the bucket linking to exclusive content",
        "Sell limited buckets online for fans who can't attend in theaters",
        "Create a hashtag challenge around the 'bleeding popcorn' reveal",
      ],
      referenceUrl: "https://store.fandango.com/collections/popcorn-buckets-collection",
    },
    {
      number: "05",
      title: "Missing Person Poster",
      category: "Guerilla",
      image: "/images/hellbilly-hollow/concept-05-missing.png",
      tagline: "Last seen at Hellbilly Hollow.",
      description: "Plant weathered missing-person posters around theaters and high-traffic urban areas featuring a character from the film. The posters include a real phone number and QR code. Social media accounts for the 'missing' character are created weeks in advance, posting normal content that becomes progressively more disturbed — 'Someone keeps knocking at 3:17am,' 'Anyone else hear singing outside?' — until the final post is interrupted mid-upload. Days of silence. Then the trailer drops.",
      executionNotes: [
        "Create a character social account 4-6 weeks before the campaign launches",
        "Post escalating unsettling content: knocking at 3:17am, singing outside, interrupted uploads",
        "Go completely silent for 7-14 days before the trailer drops",
        "Physical posters placed at theaters, college campuses, and urban centers",
      ],
      referenceUrl: "https://designwiz.com/flyer/templates/missing-person/missing-person-reward-notice-flyer-template",
    },
    {
      number: "06",
      title: "Promo Teaser — VHS Aesthetic",
      category: "Digital",
      image: "/images/hellbilly-hollow/concept-06-teaser.png",
      tagline: "Tracking... tracking... tracking...",
      description: "Release a promo teaser styled as degraded VHS footage with a 90s feel. Tracking lines, static bursts, time stamps, and distorted audio. The teaser shows flashes of the attraction and characters between static interruptions. The aesthetic taps into the analog horror trend that dominates YouTube and TikTok, creating instant shareability among horror communities.",
      executionNotes: [
        "Shoot or grade footage to look like degraded VHS with tracking artifacts",
        "Keep total runtime under 60 seconds for social media optimization",
        "Upload to YouTube with no description, just a date",
        "Let the analog horror community discover and amplify it organically",
      ],
      referenceUrl: "https://www.youtube.com/watch?v=6b2G8ySKNgA",
    },
    {
      number: "07",
      title: "Fake News Reporter Campaign",
      category: "Social",
      image: "/images/hellbilly-hollow/concept-07-reporter.png",
      tagline: "Breaking news from a place that doesn't exist.",
      description: "Produce a series of fake on-scene news reports covering 'disturbances' at the Hellbilly Hollow attraction. A reporter in a press jacket stands outside the real location, describing escalating supernatural events as if they're real breaking news. The reports are uploaded to social media as raw footage, blurring the line between fiction and reality. Each report ends with the reporter going dark.",
      executionNotes: [
        "Produce 3-5 short-form news reports escalating in intensity",
        "Use realistic news graphics, lower thirds, and field-reporting style",
        "Each report ends with signal loss or the reporter reacting to something off-screen",
        "Release on TikTok and Instagram Reels for maximum viral potential",
      ],
      referenceUrl: "https://www.youtube.com/watch?v=EM-O2AVrNBg",
    },
    {
      number: "08",
      title: "Sensitive Content Marketing",
      category: "Social",
      image: "/images/hellbilly-hollow/concept-08-sensitive.png",
      tagline: "Viewer discretion advised.",
      description: "Create content that triggers social media 'sensitive content' warnings — not through gore, but through psychological unease. Videos that seem normal until a detail is wrong. Faces that don't blink. Audio that glitches. The sensitive content warning itself becomes a marketing tool — fans share it specifically because it's flagged, and the warning label functions as a curiosity hook.",
      executionNotes: [
        "Design content that earns the sensitive warning through psychological dread, not gore",
        "Leverage Instagram and TikTok's content warning system as a curiosity driver",
        "Fans will seek out and share 'warned' content specifically because it's flagged",
        "Create a series of escalating clips, each slightly more disturbing than the last",
      ],
      referenceUrl: "https://www.instagram.com/reels/DWnE9y9gZrs/",
    },
    {
      number: "09",
      title: "Clown Marketing",
      category: "Guerilla",
      image: "/images/hellbilly-hollow/concept-09-clown.png",
      tagline: "They're already here.",
      description: "Deploy actors in full clown makeup and tattered costumes to public events, festivals, and high-traffic urban areas. They don't speak, don't interact — they just stand, stare, and occasionally hold up a sign with a phone number or QR code. The clowns are filmed by bystanders and the footage goes viral organically. Each appearance is documented on social media with location tags.",
      executionNotes: [
        "Deploy 2-4 clown actors at concerts, festivals, and sporting events",
        "Actors must remain completely in character — no speaking, only staring",
        "Each clown carries a sign with the Hollow Hotline number or QR code",
        "Film reactions from a distance for social content",
      ],
      referenceUrl: "https://www.youtube.com/shorts/EpLVcoKco5k",
    },
    {
      number: "10",
      title: "24-Hour Live Stream",
      category: "Interactive",
      image: "/images/hellbilly-hollow/concept-10-livestream.png",
      tagline: "Something moves at 3:17am.",
      description: "Set up a 24-hour live stream on the website showing a static camera pointed at the Hellbilly Hollow attraction. During the day, it looks boring. At night, things change — figures appear, lights flicker, sounds emerge. The stream is cryptic and unexplained. Fans tune in at specific hours trying to catch something. The live chat becomes a community event. Clips of 'what people saw' spread across social.",
      executionNotes: [
        "Install a permanent camera at the real attraction location",
        "Pre-program timed 'events' at specific hours (3:17am being the anchor)",
        "No explanation, no narration — just raw surveillance feed",
        "Enable live chat and let the community theorize in real-time",
      ],
      referenceUrl: "https://www.youtube.com/shorts/1JPdTKE_VbE",
    },
    {
      number: "11",
      title: "Something Is Wrong",
      category: "Social",
      image: "/images/hellbilly-hollow/concept-11-wrong.png",
      tagline: "Find the detail. Wish you hadn't.",
      description: "Release a series of seemingly normal videos where one small detail is progressively more disturbing. A family dinner where one person never blinks. Security footage with someone standing in the same spot every night. A podcast clip where audio glitches reveal whispers. A livestream where a figure appears for one frame. Fans begin connecting clues before realizing the videos are related — none of them ever mention the movie title.",
      executionNotes: [
        "Produce 4-6 videos that each appear normal at first glance",
        "Each contains ONE disturbing detail that rewards repeat viewing",
        "Release across different platforms and accounts with no obvious connection",
        "Let fans discover the connection and build the mystery organically",
        "After peak engagement, reveal all videos link to Hellbilly Hollow",
      ],
    },
    {
      number: "12",
      title: "Don't Watch Alone",
      category: "Social",
      image: "/images/hellbilly-hollow/concept-12-alone.png",
      tagline: "No trailer. Only reactions.",
      description: "Instead of showing footage, ask creators — or Kurt to start — to film themselves reacting to something. No trailer, no context. Only expressions: confusion, panic, turning off lights, looking behind them. The campaign builds purely on reaction content. Eventually reveal they were watching the Hellbilly Hollow trailer. The restraint of not showing footage creates more anticipation than any trailer could.",
      executionNotes: [
        "Distribute the trailer privately to select creators under NDA",
        "Film their genuine first-time reactions",
        "Release reaction clips with no context about what they're watching",
        "Build to a reveal that connects all reactions to the same source",
        "The trailer itself drops only after the reaction campaign peaks",
      ],
    },
    {
      number: "13",
      title: "The Hollow Is Closed",
      category: "Guerilla",
      image: "/images/hellbilly-hollow/concept-13-closed.png",
      tagline: "Due to unforeseen circumstances.",
      description: "Announce that Hellbilly Hollow has unexpectedly closed for 'maintenance.' Post official-sounding statements: 'Due to unforeseen circumstances, portions of the Hollow are currently inaccessible.' No explanation. Fans immediately speculate. Over the next week, post security camera screenshots, torn fencing, blood trails, empty costumes, and missing employee reports. Then silence.",
      executionNotes: [
        "Post closure announcement on the real attraction's social channels",
        "Use the official Hellbilly Hollow accounts to maintain authenticity",
        "Escalate over 7 days: screenshots, torn fencing, blood trails, empty costumes",
        "End with complete silence — no posts, no responses, no explanation",
        "Break silence only when the trailer or film drops",
      ],
    },
    {
      number: "14",
      title: "Employee Exit Interviews",
      category: "Social",
      image: "/images/hellbilly-hollow/concept-14-interview.png",
      tagline: "Everyone thinks it's part of the attraction.",
      description: "Release TikTok-style interviews with 'former actors' who worked at the attraction. They begin normal — 'Yeah, I worked there for three seasons' — then become unsettling: 'We were told never to go past Gate 7.' 'One actor never clocked out.' 'Everyone thinks that's just part of the attraction.' Then cut to black. Each interview is a standalone piece that works as horror content even if you've never heard of the film.",
      executionNotes: [
        "Cast actors to play former Hellbilly Hollow employees",
        "Script interviews that start mundane and escalate to disturbing revelations",
        "Each interview ends with a cut to black at the peak of unease",
        "Release as standalone TikTok videos — no film branding until the final reveal",
      ],
    },
    {
      number: "15",
      title: "Lost Security Footage",
      category: "Digital",
      image: "/images/hellbilly-hollow/concept-15-footage.png",
      tagline: "Recovered footage. Review at your own risk.",
      description: "Upload 'recovered' security footage to YouTube and social platforms. Chains moving by themselves. Guests leaving while one never returns. A figure standing perfectly still for eight minutes. Someone entering the hotel but nobody exiting. Film everything to look like authentic surveillance footage — grainy, timestamped, low frame rate. Each clip is a standalone mystery that functions as both marketing and content.",
      executionNotes: [
        "Film at the actual attraction with real security camera aesthetics",
        "Use low resolution, time stamps, and degraded quality for authenticity",
        "Each clip should be 30-90 seconds with no narration or music",
        "Upload as 'found footage' with no film branding in the description",
      ],
    },
    {
      number: "16",
      title: "The Hollow Hotline",
      category: "Interactive",
      image: "/images/hellbilly-hollow/concept-16-hotline.png",
      tagline: "The number is real. The voice on the other end is not.",
      description: "Launch a phone number that callers can reach weekly. Each week, the message changes and escalates: Week 1 — normal greeting. Week 2 — static. Week 3 — whispering. Week 4 — someone begging for help. Week 5 — coordinates of Hellbilly Hollow. The hotline becomes a weekly ritual for fans, building toward the film's release. Each week's message is discussed, dissected, and theorized about across social.",
      executionNotes: [
        "Set up a dedicated number via Twilio with weekly message rotation",
        "Messages escalate: greeting → static → whispering → begging → coordinates",
        "Promote the number across all campaign touchpoints",
        "The coordinates in the final week point to the real attraction in Vincent, AL",
        "Fans who visit the coordinates find a physical installation or clue",
      ],
    },
  ],
  closingStatement: "These 16 concepts aren't a menu — they're an ecosystem. Each one feeds the others. The phone number from Concept 1 leads to the hotline in Concept 16. The missing person from Concept 5 is the actor from Concept 14. The security footage in Concept 15 comes from the closed attraction in Concept 13. Together, they create an immersive horror experience that doesn't just promote a film — it makes the audience feel like they're already living inside it.",
  cta: {
    headline: "Let's make something they can't look away from.",
    body: "Crowd Control Digital specializes in campaigns that blur the line between content and reality. Hellbilly Hollow is a once-in-a-generation property — a real place where the fiction lives. Let's build the campaign that matches it.",
    email: "geoff@crowdcontroldigital.com",
  },
};
