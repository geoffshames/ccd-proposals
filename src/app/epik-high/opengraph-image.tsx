import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
export const runtime = "nodejs";
export const alt = "Epik High × Crowd Control Digital. New music. Next night. $10,000 and $15,000 release + tour campaign options.";
export const size = {width:1200,height:630};
export const contentType = "image/png";
export default async function Image() {
  const [font,art,logo]=await Promise.all([
    readFile(path.join(process.cwd(),"public/brand/N27-Bold.otf")),
    readFile(path.join(process.cwd(),"public/images/epik-high/epikase-cover.jpg")),
    readFile(path.join(process.cwd(),"public/brand/CC-LOGO-2024-WHITE.png")),
  ]);
  return new ImageResponse(<div style={{width:'100%',height:'100%',background:'#0a0a0a',color:'#fafafa',display:'flex',fontFamily:'N27'}}>
    <div style={{width:700,display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'42px 44px'}}>
      <img src={'data:image/png;base64,'+logo.toString('base64')} width={250} height={38} style={{objectFit:'contain'}} alt="CCD"/>
      <div style={{display:'flex',flexDirection:'column'}}><div style={{fontSize:105,letterSpacing:-3,lineHeight:1}}>EPIK HIGH</div><div style={{fontSize:60,lineHeight:1.07,color:'#fd3737',marginTop:20}}>NEW MUSIC.</div><div style={{fontSize:60,lineHeight:1.07}}>NEXT NIGHT.</div></div>
      <div style={{fontSize:21,display:'flex',flexDirection:'column',gap:8}}><span>RELEASE + TOUR CAMPAIGN</span><span style={{color:'#ccc',fontSize:18}}>$10,000 / $15,000 · SEPTEMBER 2026</span></div>
    </div><div style={{width:500,display:'flex',flexDirection:'column',justifyContent:'center',background:'#fd3737'}}><img alt="EPIKASE SONG BATTLE" width={500} height={500} src={'data:image/jpeg;base64,'+art.toString('base64')}/></div>
  </div>,{...size,fonts:[{name:'N27',data:font,weight:700,style:'normal'}]});
}
