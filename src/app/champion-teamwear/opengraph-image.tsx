import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Champion Teamwear brand and sentiment decision dossier";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          backgroundImage:
            "linear-gradient(rgba(51,51,51,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(51,51,51,.16) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          color: "#ffffff",
          padding: "56px 66px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 520,
            border: "110px solid rgba(253, 55, 55, 0.16)",
            right: -150,
            top: -175,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 17, letterSpacing: 3.5, textTransform: "uppercase" }}>
          <img
            src="https://proposal.crowdcontroldigital.com/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width="312"
            height="44"
            style={{ objectFit: "contain" }}
          />
          <span style={{ color: "rgba(255,255,255,.55)" }}>Confidential · July 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div style={{ display: "flex", fontSize: 82, lineHeight: 0.94, fontWeight: 800, letterSpacing: -4, textTransform: "uppercase" }}>
            Champion
          </div>
          <div style={{ display: "flex", fontSize: 82, lineHeight: 0.94, fontWeight: 800, letterSpacing: -4, color: "#FD3737", textTransform: "uppercase" }}>
            Teamwear
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 28, lineHeight: 1.25, color: "rgba(255,255,255,.74)" }}>
            Brand &amp; Sentiment Decision Dossier
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(255,255,255,.18)", paddingTop: 22 }}>
          <span style={{ fontSize: 19, color: "rgba(255,255,255,.72)" }}>
            Good product-market permission. Inconsistent trust delivery.
          </span>
          <span style={{ fontSize: 16, color: "rgba(255,255,255,.42)" }}>CTW / 2026-07</span>
        </div>
      </div>
    ),
    size,
  );
}
