// Highest Intention proposal data. All figures pulled from public sources on 2026-09-29.

export const payment = {
  full: '',
  consult: '',
};

export const mailto = (tier: string) =>
  `mailto:geoff@crowdcontroldigital.com?subject=${encodeURIComponent(`Highest Intention: approving ${tier}`)}&body=${encodeURIComponent(`Hi Geoff,\n\nWe'd like to move forward with the ${tier} tier. Send over the agreement and first invoice.\n\nBen`)}`;

export const src = {
  site: 'https://highestintention.com',
  spotify: 'https://open.spotify.com/artist/6Z61wbVMPLxrJGXHODCl7Q',
  instagram: 'https://www.instagram.com/highestintention/',
  youtube: 'https://www.youtube.com/@HighestIntention',
  tiktok: 'https://www.tiktok.com/@highestintention',
  facebook: 'https://www.facebook.com/HighestIntention/',
  reggaeVibes: 'https://www.reggae-vibes.com/reviews/2019/04/highest-intention-universal-light/',
  irie: 'https://www.iriemag.com/magazine/summer-2026/highest-intention-meets-tony-chin/',
  idc: 'https://idcdistro.wordpress.com/tag/ben-down-lowe/',
  topShelf: 'https://topshelfmusicmag.com/news/talking-universal-light-with-highest-intention-more-for-2024/',
  waterLong: 'https://www.youtube.com/watch?v=e4oLB4utwZY',
  waterShort: 'https://www.youtube.com/watch?v=G3sKkzGzaC4',
  fatOne: 'https://www.youtube.com/watch?v=DDYWHiygZiQ',
  caliRoots: 'https://en.wikipedia.org/wiki/California_Roots_Music_and_Arts_Festival',
  wildCard: 'https://thepier.org/cali-roots-festival-wild-card-contest/',
  stickFigureSms: 'https://www.instagram.com/p/DdZW8PrBsqS/',
  tribalTour: 'https://thepier.org/tribal-seeds-new-lineup-tour/',
  bigMountain: 'https://en.wikipedia.org/wiki/Big_Mountain_(band)',
  conkarah: 'https://www.youtube.com/watch?v=f_z5Mtqu2ig',
  rachmany: 'https://www.billboard.com/pro/rebelution-eric-rachmany-solo-acoustic-tour-dates-cannabis-advocacy/',
};

export const albums = [
  { title: 'Universal Light', year: '2023', img: 'album-universal-light.jpg', plays: 280000, label: '280K', note: 'The debut. Riverside (102K) and Fat One (80K) still lead the catalog.' },
  { title: 'Green Love', year: '2024', img: 'album-green-love.jpg', plays: 170000, label: '170K', note: 'Feeling Good, Green Love and the Pato Banton feature carry it.' },
  { title: 'Ecstatic', year: '2025', img: 'album-ecstatic.jpg', plays: 9000, label: 'Under 12K', note: 'A devotional worldbeat record. Filed outside reggae; every track sits under 1K plays.' },
  { title: 'Grow Into Your Soul', year: '2025', img: 'album-grow-into-your-soul.jpg', plays: 49000, label: '49K', note: 'Back to roots. Move Into The Sun is the current most-popular track.' },
  { title: 'Meets Tony Chin', year: '2026', img: 'album-meets-tony-chin.jpg', plays: 9000, label: 'Under 12K', note: 'The strongest credential in the catalog. IRIE Magazine feature. Barely heard yet.' },
];

export const cadence: [string, number][] = [
  ['O', 3], ['N', 0], ['D', 0], ['J', 1], ['F', 0], ['M', 2], ['A', 1], ['M', 1], ['J', 0], ['J', 0], ['A', 0], ['S', 0],
  ['O', 1], ['N', 1], ['D', 0], ['J', 0], ['F', 0], ['M', 0], ['A', 1], ['M', 4], ['J', 2], ['J', 0], ['A', 1], ['S', 2],
];

export const themes = [
  { name: 'Collab and feature', share: 40, er: 3.09 },
  { name: 'Lyric visualizer and video', share: 35, er: 3.12 },
  { name: 'Live performance', share: 15, er: 1.97 },
  { name: 'Show flyers and promo', share: 10, er: 1.5 },
  { name: 'Ben talking to camera', share: 0, er: 0 },
];

export const youtube = [
  { t: 'Water (Tyla cover), long form', v: 1035589, lr: 0.07, kind: 'paid' },
  { t: 'Fat One, official audio', v: 520093, lr: 0.62, kind: 'paid' },
  { t: 'Water (Tyla cover), Short', v: 328503, lr: 2.37, kind: 'earned' },
  { t: 'IRIE feat. Karim Israel, re-upload', v: 104590, lr: 0.46, kind: 'paid' },
  { t: 'Riverside, official audio', v: 48581, lr: 0.1, kind: 'paid' },
  { t: 'IRIE, official audio', v: 34289, lr: 0.17, kind: 'paid' },
  { t: 'Ocean, official audio', v: 30663, lr: 0.23, kind: 'paid' },
  { t: 'Cannot Keep Me Down feat. Pato Banton', v: 25588, lr: 0.29, kind: 'paid' },
];

export const teardown = [
  { f: '01', date: 'NOV 2023', views: '98.4K views', verdict: 'worked', title: 'Visualizer, music first', note: 'Song hits in the first second over strong art. Big reach, only 13 comments. Reach without conversation.' },
  { f: '02', date: 'FEB 2024', views: '57.9K views', verdict: 'worked', title: 'Riverside with family', note: 'Nature, family, the song. The most human of the early winners and the template for the Unplugged world.' },
  { f: '03', date: 'JUL 2024', views: '40.3K views', verdict: 'worked', title: 'Fat One lyric clip', note: 'Your best-known song and a lyric people quote back. It found Brazil and Colombia on its own.' },
  { f: '04', date: 'FEB 2023', views: '37.3K views', verdict: 'worked', title: 'Pavones drone', note: 'Ocean footage and Ocean the song. Place-driven visuals are a natural fit for this music.' },
  { f: '05', date: 'OCT 2024', views: '5.4% ER', verdict: 'worked', title: 'Owned emblem, Portuguese lyric', note: 'The only post using the Universal Light mark as the hero. Speaks directly to the Brazil pocket.' },
  { f: '06', date: 'MAY 2026', views: '65 comments', verdict: 'worked', title: 'Garden collab with Stephanie Nicole', note: 'Most comments of any post. Collabs are the current engagement engine at 2.6% to 5.6% ER.' },
  { f: '07', date: 'MAY 2026', views: '3.8% ER', verdict: 'worked', title: 'Tony Chin album drop', note: 'A real person, a named legend, a clear message: drops at midnight. The best recent owned post.' },
  { f: '08', date: 'SEP 2026', views: '458 views', verdict: 'fix', title: 'Labor Day with Soul Syndicate', note: 'An incredible moment with no caption and a thin overlay across the performers. The story never gets told.' },
  { f: '09', date: 'SEP 2026', views: '619 views', verdict: 'fix', title: 'Peter Tosh cover, live', note: 'Landscape phone footage letterboxed into vertical with blur bars. Posted as near duplicates across platforms.' },
  { f: '10', date: 'AUG 2026', views: '676 views', verdict: 'fix', title: 'Endless Night visualizer', note: 'Partner template branding on your grid and a YouTube search title as the caption.' },
  { f: '11', date: 'JUN 2026', views: '583 views', verdict: 'fix', title: 'Ghetto Life feat. Tony Chin', note: 'A Tony Chin feature presented like a catalog upload. The legend is on the track and nowhere in the frame.' },
  { f: '12', date: 'FEB 2024', views: '5.5% ER', verdict: 'fix', title: "Moe's Alley flyer", note: 'Venue-made art that works for the venue. Every show should ship with band-owned creative and a city SMS drop.' },
];

export const sentiment = [
  { k: 'Genuine fans', v: 31.2, c: '#fafafa' },
  { k: 'Spam and generic', v: 26.8, c: 'var(--red)' },
  { k: 'Emoji only', v: 17.7, c: '#5c5c5c' },
  { k: 'Peers and industry', v: 15.6, c: '#a3a3a3' },
  { k: 'Promo channels', v: 5.8, c: '#3a3a3a' },
  { k: 'Other', v: 2.9, c: '#262626' },
];

export const platformSplit = [
  { p: 'Instagram', n: 267, fan: 33.7, spam: 0.7, peer: 29.2, emoji: 32.2 },
  { p: 'YouTube', n: 303, fan: 29.0, spam: 49.8, peer: 3.6, emoji: 5.0 },
];

export const fanWords = [
  ['love', 34], ['song', 21], ['vibes', 19], ['amazing', 9], ['great', 8], ['beautiful', 7], ['tune', 6], ['lyrics', 5], ['respect', 4], ['blazing', 4], ['heart', 4], ['irie', 3],
] as [string, number][];

export const quotes = [
  { q: 'This song is my favorite song for last three years!! Such good vibes!', s: 'YouTube, Fat One' },
  { q: 'This is a great song to dance around a bonfire too, relaxing times with friends.', s: 'YouTube, Fat One' },
  { q: 'Such a smooth vibe for this song and always has positive lyrics.', s: 'YouTube, Fat One' },
  { q: 'Heard this on Rodigan’s set. What an amazing tune!', s: 'YouTube, Sky' },
  { q: 'Come and play at Saint Andrew’s Hall in Detroit Michigan, we’d love to see you!', s: 'Instagram, Fat One' },
  { q: 'Não vejo a hora de você vir para Brasil.', s: 'YouTube, IRIE. “I can’t wait for you to come to Brazil.”' },
  { q: 'Im so glad i found this channel. Perfect music to let go all the stress.', s: 'YouTube, Survival' },
  { q: 'new fan here. so stoked to stumble on some new jammy stuff', s: 'Instagram, Voice Within' },
];

export type Comp = { name: string; ig: number; ml: number; tier: 'you' | 'step' | 'mid' | 'head'; note: string };
export const comps: Comp[] = [
  { name: 'Highest Intention', ig: 4254, ml: 5587, tier: 'you', note: 'Today' },
  { name: 'For Peace Band', ig: 11275, ml: 29400, tier: 'step', note: 'On Tribal Seeds’ fall 2026 tour' },
  { name: 'SensaMotion', ig: 19136, ml: 268700, tier: 'step', note: 'Played Cali Roots 2026' },
  { name: 'Pacific Dub', ig: 31631, ml: 148000, tier: 'step', note: 'Feature-driven singles' },
  { name: 'Artikal Sound System', ig: 52783, ml: 117198, tier: 'step', note: 'RV-life band identity' },
  { name: 'Through The Roots', ig: 58158, ml: 144200, tier: 'step', note: 'Played Cali Roots 2026' },
  { name: 'KBong', ig: 103261, ml: 406900, tier: 'mid', note: 'Opening Stick Figure’s 2027 run' },
  { name: 'Tribal Seeds', ig: 253703, ml: 703300, tier: 'mid', note: 'Direct support on Iration 2026' },
  { name: 'Iration', ig: 315943, ml: 1300000, tier: 'head', note: 'Headliner' },
  { name: 'Slightly Stoopid', ig: 479941, ml: 3419588, tier: 'head', note: 'Headliner' },
  { name: 'Stick Figure', ig: 664630, ml: 7021540, tier: 'head', note: 'Headliner' },
];

export const clients = ['Edition Hotels', 'Foot Locker', 'Golden State Warriors', 'NBA', 'Malbon Golf', 'Monster Energy', 'Porsche', 'Polymarket', 'Barker Wellness', 'Warner Bros', 'Weedmaps', 'Amazon', 'Apple', 'Beats By Dre', 'Aplós', 'Prima'];
