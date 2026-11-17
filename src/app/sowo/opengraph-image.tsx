import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";
export const alt = "SOWØ × Transparent Arts × Crowd Control Digital. From Ø to the wave. A debut growth plan for OD UNIVERSE.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [font, art, logo, ta] = await Promise.all([
    readFile(path.join(process.cwd(), "public/brand/N27-Bold.otf")),
    readFile(path.join(process.cwd(), "public/images/sowo/hero-og.jpg")),
    readFile(path.join(process.cwd(), "public/brand/CC-LOGO-2024-WHITE.png")),
    readFile(path.join(process.cwd(), "public/brand/TA-LOGO-WHITE.png")),
  ]);
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#000", color: "#fafafa", fontFamily: "N27" }}>
      <img src={"data:image/jpeg;base64," + art.toString("base64")} width={1200} height={672} style={{ position: "absolute", top: -21, left: 0, objectFit: "cover" }} alt="" />
      <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.7) 45%, rgba(0,0,0,.15) 100%)" }} />
      <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 56px", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}><img src={"data:image/png;base64," + ta.toString("base64")} width={200} height={54} alt="" /><div style={{ fontSize: 26, color: "#bbb", display: "flex" }}>×</div><img src={"data:image/png;base64," + logo.toString("base64")} width={215} height={30} alt="" /></div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, color: "#fd3737" }}>SOWØ × OD UNIVERSE</div>
          <div style={{ fontSize: 112, lineHeight: 0.95, letterSpacing: -3, marginTop: 14 }}>FROM Ø</div>
          <div style={{ fontSize: 112, lineHeight: 0.95, letterSpacing: -3, color: "#fd3737" }}>TO THE WAVE.</div>
        </div>
        <div style={{ fontSize: 22, color: "#d4d4d4", display: "flex" }}>A JOINT DEBUT GROWTH PLAN · DEC 2026 TO THE EP</div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "N27", data: font, weight: 700, style: "normal" }] }
  );
}
