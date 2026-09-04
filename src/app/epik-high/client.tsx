"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import type en from "@/lib/epik-high/en.json";
import tourData from "@/lib/epik-high/tour.json";
import research from "@/lib/epik-high/research.json";
import styles from "./proposal.module.css";
import InteractiveWave from "./InteractiveWave";
import creators from "@/lib/epik-high/creators.json";

type Copy = typeof en;
type Key = keyof Copy;
const base = "/images/epik-high/";
const money = (n: number) => "$" + n.toLocaleString("en-US");
const sourceLinks = [
  "https://www.epikhighshop.com/na2026",
  "https://music.apple.com/us/album/epikase-song-battle-single/6807254179",
  "https://linktr.ee/EpikaseSongBattle",
  "https://www.youtube.com/watch?v=fggT2PB2wgI",
  "https://app.chartmetric.com/artist/206554",
  "https://apidocs.chartmetric.com/reference/tag/artist/get/api/artist/id/where-people-listen",
  "https://thekrazemag.com/press-releases/2026/8/9/epik-high-expands-tour-with-new-seattle-show-and-vip-giveaway-for-hey-tablo-live-podcast-experience",
  "https://www.stgpresents.org/events/epik-high/",
  "https://www.joinswsh.com/pricing", "https://www.joinswsh.com/terms", "https://www.joinswsh.com/policy",
  "https://apps.apple.com/us/app/swsh-shared-photo-albums/id6476418833",
];
function Out({ href, children, className }: {href: string; children: ReactNode; className?: string}) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}<span aria-hidden="true"> ↗</span></a>;
}
export default function EpikHighClient({ copy, locale = "en" }: {copy: Copy; locale?: "en" | "ko"}) {
  const [tier, setTier] = useState<10 | 15>(15);
  const t = (key: Key) => copy[key];
  const day = (value: string) => new Date(value + "T12:00:00Z").toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {month: "short", day: "numeric", timeZone: "UTC"});
  const range = (start: string, end: string) => `${day(start)} – ${day(end)}`;
  const mail = (budget: 10000 | 15000) => {
    const subject = locale === "ko" ? `Epik High | ${money(budget)} 캠페인 상담` : `Epik High | ${money(budget)} campaign discussion`;
    const body = locale === "ko"
      ? `Crowd Control Digital 팀께,\n\n${money(budget)} 규모의 Epik High 음원 및 투어 캠페인에 대해 논의하고 싶습니다.\n\n제안서: https://proposal.crowdcontroldigital.com/epik-high-ko\n\n대상 음원: EPIKASE SONG BATTLE (2026년 9월 4일 발매).\n\n최종 업무 범위, 비용, 티켓 잔여 수량 및 캠페인 시작 요건을 함께 확인 부탁드립니다.\n\n이름 / 소속:\n희망하는 다음 단계:\n`
      : `Hello Crowd Control Digital,\n\nWe would like to discuss the ${money(budget)} Epik High release and tour campaign.\n\nProposal: https://proposal.crowdcontroldigital.com/epik-high\n\nRelease: EPIKASE SONG BATTLE (September 4, 2026).\n\nPlease confirm the final scope, fees, ticket inventory and launch requirements with us.\n\nName / team:\nPreferred next step:\n`;
    return `mailto:geoff@crowdcontroldigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const head = (number: string, key: Key, intro?: Key) => <header className={styles.sectionHead}><span className={styles.number}>{number}</span><div><h2>{t(key)}</h2>{intro && <p className={styles.lead}>{t(intro)}</p>}</div></header>;
  return <main className={styles.page} lang={locale} id="top">
    <a className={styles.skip} href="#opportunity">{t('skip')}</a>
    <header className={styles.topbar}>
      <a href="#top" aria-label="Crowd Control Digital"><Image unoptimized src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width="208" height="36" /></a>
      <span>{t('proposal')}</span>
      <div className={styles.language} aria-label="Language"><Link lang="en" aria-current={locale==='en'?'page':undefined} href="/epik-high">EN</Link><Link lang="ko" aria-current={locale==='ko'?'page':undefined} href="/epik-high-ko">KO</Link></div>
    </header>
    <section className={styles.hero}>
      <div className={styles.heroTitle}><p className={styles.eyebrow}>{t('heroKicker')}</p><h1>EPIK HIGH<span className={styles.star} aria-hidden="true">✳</span></h1></div>
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}><h2>{t('heroTitle')}</h2><p>{t('heroBody')}</p><div className={styles.recommendation}><b>{t('heroRec')}</b><span>{t('heroRecBody')}</span></div><a className={styles.button} href="#investment">{t('compare')} <span aria-hidden="true">↗</span></a><a className={styles.textLink} href="#markets">{t('tourLink')} ↓</a></div>
        <figure className={styles.cover}><Image unoptimized src={base+'epikase-cover.jpg'} alt="EPIKASE SONG BATTLE official release artwork" width="640" height="640" fetchPriority="high" /><figcaption>{t('artCaption')}</figcaption></figure>
      </div>
      <div className={styles.heroFooter}><span>{t('confidential')}</span><span>{t('date')}</span></div>
    </section>
    <nav className={styles.nav} aria-label={t('proposal')}>{['opportunity','music','waves','markets','creative','swsh','investment','measurement'].map((id,i)=><a href={'#'+id} key={id}><small>{String(i+1).padStart(2,'0')}</small>{t(('nav'+(i+1)) as Key)}</a>)}</nav>
    <section className={styles.section} id="opportunity">
      {head('01','opportunityTitle','opportunityIntro')}
      <p className={styles.bodyLarge}>{t('opportunityBody')}</p>
      <div className={styles.insights}>{[1,2,3].map((i)=><article key={i}><span className={styles.eyebrow}>0{i}</span><h3>{t(('insight'+i+'Title') as Key)}</h3><p>{t(('insight'+i) as Key)}</p></article>)}</div>
      <div className={styles.baseline}><p className={styles.eyebrow}>{t('baselineTitle')}</p><div className={styles.stats}><div><span>{t('listenerLabel')}</span><strong>1,335,229</strong><b>↗ {t('listenerChange')}</b></div><div><span>{t('followerLabel')}</span><strong>897,343</strong><b>↗ {t('followerChange')}</b></div></div><p className={styles.note}>{t('baselineNote')} <Out href={sourceLinks[4]}>Chartmetric</Out></p></div>
    </section>
    <section className={styles.section} id="music">
      {head('02','releaseTitle','releaseIntro')}
      <div className={styles.trackList}>{tourData.release.tracks.map((track,i)=><article key={track.title} className={styles.track}><span className={styles.trackNumber}>0{i+1}</span><div><span className={styles.eyebrow}>{track.artist} · {track.duration}</span><h3>{track.title}</h3><span className={styles.role}>{t(('track'+(i+1)+'Role') as Key)}</span><p>{t(('track'+(i+1)+'Body') as Key)}</p><div className={styles.trackLinks}><Out href={research.tracks[i].spotifyUrl}>Spotify</Out><Out href={track.apple}>Apple Music</Out><Out href={`https://www.youtube.com/watch?v=fggT2PB2wgI&t=${[2493,651,1682][i]}s`}>{t('watch')}</Out></div></div></article>)}</div>
      <p className={styles.note}>{t('videoNote')} <Out href={sourceLinks[2]}>{t('smartLink')}</Out></p>
      <div className={styles.channel}><h3>{t('channelTitle')}</h3><p>{t('channelBody')}</p><p>{t('channelBody2')}</p><div className={styles.destinations}>{[1,2].map(i=><div key={i}><span className={styles.eyebrow}>{t(('destination'+i) as Key)}</span><p>{t(('destination'+i+'Body') as Key)}</p></div>)}</div></div>
    </section>
    <section className={styles.section} id="waves">
      {head('03','waveTitle','waveIntro')}
      <InteractiveWave labels={{eyebrow:t('waveEyebrow'),caption:t('waveCaption'),play:t('wavePlay'),pause:t('wavePause'),scrub:t('waveScrub'),selectPhase:t('waveSelectPhase'),reducedMotion:t('waveReducedMotion'),phases:[{name:t('waveBefore'),action:t('waveBeforeAction'),detail:t('waveBeforeDetail')},{name:t('waveLive'),action:t('waveLiveAction'),detail:t('waveLiveDetail')},{name:t('waveAfter'),action:t('waveAfterAction'),detail:t('waveAfterDetail')}]}}/>
      <div className={styles.wavePhases}>{['Before','Live','After'].map((phase,i)=><article key={phase}><div className={styles.phaseTop}><span>0{i+1}</span><b>{t(('wave'+phase+'Time') as Key)}</b></div><h3>{t(('wave'+phase) as Key)}</h3><p>{t(('wave'+phase+'Body') as Key)}</p></article>)}</div><p className={styles.rule}>{t('waveRule')}</p>
    </section>
    <figure className={styles.photoBreak}><Image unoptimized src={base+'epik-high-press.jpg'} alt="Epik High official 2026 tour press photograph" width="800" height="600" loading="lazy"/><div><Image unoptimized src={base+'epik-high-tour.png'} alt="Epik High 3.0 Tour 2026 North America" width="690" height="390" loading="lazy"/><p>{t('photoCaption')}</p></div></figure>
    <section className={styles.section} id="markets">
      {head('04','marketsTitle','marketsIntro')}
      <div className={styles.geography}><div><h3>{t('geoTitle')}</h3><p>{t('geoSubtitle')}</p><p className={styles.note}>{t('geoNote')} <Out href={sourceLinks[5]}>Chartmetric</Out></p></div><div >{[...research.cities].sort((a,b)=>b.listeners!-a.listeners!).map(city=><div className={styles.barRow} key={city.city}><div><b>{city.city}</b><span>{city.listeners?.toLocaleString('en-US')}</span></div><div className={styles.barTrack}><span style={{width:`${city.listeners!/16940*100}%`}}/></div></div>)}</div></div>
      <div className={styles.scheduleHeader}><div><h3>{t('scheduleTitle')}</h3><p className={styles.note}>{t('scheduleNote')}</p></div><div className={styles.tierToggle} role="group" aria-label={t('investmentTitle')}>{([10,15] as const).map(n=><button type="button" aria-pressed={tier===n} key={n} onClick={()=>setTier(n)}>${n}K</button>)}</div></div>
      <div className={styles.tourTable}>
        <div className={styles.tableHeader}><span>{t('show')}</span><span>{tier===10?t('support10'):t('support15')}</span><span>{t('flight')}</span></div>
        {tourData.tour.map((show)=>{const support=tier===10?show.support10:show.support15;const amount=tier===10?show.budget10:show.budget15;return <article className={styles.showRow} key={show.date+show.city}>
          <div className={styles.showIdentity}><time dateTime={show.date}>{day(show.date)}</time><div><h4>{show.city}</h4><span>{show.venue}</span><Out href={show.url}>{t('tickets')}</Out></div></div>
          <div className={styles.showSupport}><b className={styles[support]}>{t(support as Key)}</b><span>{amount?money(amount):t('noTicket')}</span><small>{support==='soldout'?'':t('inventory')}</small></div>
          <div className={styles.showWindow}><span>{amount?range(show.flightStart,show.flightEnd):t('noFlight')}</span><small>{show.sharedRecap?t('sharedRecap'):<>{t('recap')}: {range(show.recapStart,tier===10?show.recapEnd10:show.recapEnd15)} · {money(tier===10?show.recapBudget10:show.recapBudget15)}</>}</small></div>
        </article>})}
      </div>
      <p className={styles.note}>{t('soldoutNote')} <Out href={sourceLinks[6]}>{t('source7')}</Out></p><p className={styles.rule}>{t('priorityRule')}</p>
    </section>
    <section className={styles.section} id="creative">
      {head('05','creativeTitle','creativeIntro')}
      <div className={styles.creatives}>{[1,2,3,4].map(i=><article key={i} className={styles.concept}><div className={styles.conceptIndex}>0{i}</div><div><h3>{t(('concept'+i+'Title') as Key)}</h3><p>{t(('concept'+i+'Hook') as Key)}</p><span className={styles.conceptMeta}>{t(('concept'+i+'Meta') as Key)}</span><blockquote>{t(('concept'+i+'Copy') as Key)}</blockquote><span className={styles.conceptCta}>↗ {t(('concept'+i+'Cta') as Key)}</span><p className={styles.note}>{t(('concept'+i+'Asset') as Key)}</p></div></article>)}</div><p className={styles.note}>{t('creativeFoot')}</p>
      <div className={styles.creatorSection} id="creators"><span className={styles.eyebrow}>13 {locale==='en'?'markets':'개 도시'} · {locale==='en'?'Ticket exchange':'티켓 교환'}</span><h3>{t('creatorTitle')}</h3><p className={styles.creatorIntro}>{t('creatorIntro')}</p>
        <div className={styles.creatorPlan}>{['Offer','Audio'].map(key=><div key={key}><h4>{t(('creator'+key) as Key)}</h4><p>{t(('creator'+key+'Body') as Key)}</p></div>)}</div>
        <div className={styles.creatorTable} role="table" aria-label={t('creatorTitle')}><div className={styles.creatorHeader} role="row"><span role="columnheader">{t('creatorCity')}</span><span role="columnheader">{t('creatorName')}</span><span role="columnheader">{t('creatorFit')}</span></div>{creators.map(creator=><div className={styles.creatorRow} role="row" key={creator.city}><b role="cell">{creator.city}</b><div role="cell"><Out href={creator.profileUrl}>{creator.name}</Out><small>{creator.handle}</small></div><div role="cell"><p>{locale==='ko'?creator.fitKo:creator.fitEn}</p><Out href={creator.evidenceUrl}>{t('creatorEvidence')}</Out></div></div>)}</div>
        <p className={styles.note}>{t('creatorScope')}</p><p className={styles.note}>{t('creatorRights')} <Out href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking">FTC</Out> · <Out href="https://competition-bureau.canada.ca/en/deceptive-marketing-practices/types-deceptive-marketing-practices/influencer-marketing-and-competition-act">{locale==='en'?'Competition Bureau Canada':'캐나다 경쟁국'}</Out></p><p className={styles.note}>{t('creatorMeasure')}</p>
      </div>
    </section>
    <section className={styles.section} id="swsh">
      {head('06','swshTitle','swshIntro')}<span className={styles.optional}>{t('swshTag')}</span>
      <ol className={styles.journey}>{[1,2,3,4].map(i=><li key={i}><span>0{i}</span>{t(('swshJourney'+i) as Key)}</li>)}</ol>
      <div className={styles.swshColumns}><div><p>{t('swshVerified')} <Out href="https://www.joinswsh.com/">swsh</Out></p><p>{t('swshScope')}</p></div><div><p>{t('swshRights')} <Out href={sourceLinks[9]}>{locale==='en'?'Terms':'이용약관'}</Out></p><p>{t('swshNoPromise')}</p></div></div><p className={styles.rule}>{t('swshCost')} <Out href={sourceLinks[8]}>{locale==='en'?'Current pricing':'현재 요금'}</Out></p>
    </section>
    <section className={styles.section} id="investment">
      {head('07','investmentTitle','investmentIntro')}
      <div className={styles.packages}>{[10,15].map((n)=>{const higher=n===15;const name=higher?'expanded':'focused';const rows=[{key:'media',amount:higher?13250:8500},{key:'adaptation',amount:0},{key:'management',amount:higher?1750:1500},{key:'vendors',amount:0}];return <article key={n} className={`${styles.package} ${higher?styles.packageRecommended:''}`}>
        <div className={styles.packageLabel}><span>{t(name)}</span>{higher&&<b>↗ {t('recommended')}</b>}</div><h3>{money(n*1000)}<small>USD</small></h3><p className={styles.packageDesc}>{t((name+'Desc') as Key)}</p><p>{t((name+'Duration') as Key)}</p><p>{t((name+'Geo') as Key)}</p>
        <dl className={styles.costs}>{rows.map(row=><div key={row.key}><dt>{t(row.key as Key)}</dt><dd>{money(row.amount)}<small>{(row.amount/(n*1000)*100).toLocaleString('en-US',{maximumFractionDigits:2})}%</small></dd></div>)}</dl><div className={styles.total}><b>{t('total')}</b><b>{money(n*1000)}</b></div><p className={styles.deliverables}>{t((name+'Deliverables') as Key)}</p><a className={higher?styles.button:styles.outlineButton} href={mail(higher?15000:10000)}>{t(higher?'choose15':'choose10')} ↗</a>
      </article>})}</div>
      <p className={styles.note}>{t('masterNote')}</p><div className={styles.delta}><h3>{t('deltaTitle')}</h3>{['Media','Creative','Mgmt'].map(key=><div key={key}><b>{t(('delta'+key) as Key)}</b><p>{t(('delta'+key+'Body') as Key)}</p></div>)}</div>
      <h3 className={styles.allocationTitle}>{t('allocationTitle')}</h3><div className={styles.allocationWrap}><table className={styles.allocation}><thead><tr><th>{t('line')}</th><th>$10,000</th><th>$15,000</th></tr></thead><tbody>{[{key:'ticketCore',a:5100,b:5400},{key:'ticketExtra',a:0,b:2200},{key:'ticketLight',a:0,b:600},{key:'ongoing',a:2100,b:2450},{key:'post',a:1300,b:2600},{key:'mediaTotal',a:8500,b:13250}].map(row=><tr key={row.key}><th>{t(row.key as Key)}</th><td>{money(row.a)}</td><td>{money(row.b)}</td></tr>)}</tbody></table></div><p className={styles.note}>{t('mediaNote')}</p><p className={styles.note}>{t('poolNote')}</p><p className={styles.assumption}>{t('calendarAssumption')}</p><details className={styles.details}><summary>{locale==='en'?'Scope boundaries + team inputs':'업무 범위 및 팀 제공 사항'}</summary><p>{t('exclusions')}</p></details>
    </section>
    <section className={styles.section} id="measurement">
      {head('08','measureTitle','measureIntro')}<div className={styles.measurements}>{['Ticket','Music','Swsh'].map(key=><article key={key}><h3>{t(('measure'+key+'Title') as Key)}</h3><p>{t(('measure'+key) as Key)}</p></article>)}</div>
      <h3 className={styles.optimizationTitle}>{t('optTitle')}</h3><ol className={styles.optimization}>{[1,2,3,4].map(i=><li key={i}><span>0{i}</span><p>{t(('opt'+i) as Key)}</p></li>)}</ol>
    </section>
    <section className={`${styles.section} ${styles.next}`} id="next">
      {head('09','nextTitle','nextIntro')}<ol>{[1,2,3,4].map(i=><li key={i}>{t(('next'+i) as Key)}</li>)}</ol><div className={styles.ctas}><a className={styles.button} href={mail(15000)}>{t('choose15')} ↗</a><a className={styles.outlineButton} href={mail(10000)}>{t('choose10')} ↗</a></div><p className={styles.note}>{t('emailNote')}</p>
    </section>
    <section className={styles.sources} id="sources"><details className={styles.details}><summary>{t('sourcesTitle')}</summary><p>{t('sourcesIntro')}</p><ol>{sourceLinks.map((url,i)=><li key={url}><Out href={url}>{t(('source'+(i+1)) as Key)}</Out></li>)}</ol><p className={styles.note}>{t('integrationNote')}</p></details></section>
    <footer className={styles.footer}><Image unoptimized src="/brand/CC-LOGO-2024-WHITE.png" alt="Crowd Control Digital" width="208" height="36"/><span>{t('footer')}</span><a href="#top">{t('backTop')} ↑</a></footer>
  </main>;
}
