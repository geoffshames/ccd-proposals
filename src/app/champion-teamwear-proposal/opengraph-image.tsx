import { ImageResponse } from "next/og";

export const alt = "Champion Teamwear growth partnership proposal by Crowd Control Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: "54px 62px",
          color: "#fafafa",
          background: "#080808",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "76px 76px",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-170px",
            top: "-250px",
            width: "650px",
            height: "650px",
            display: "flex",
            border: "2px solid #FD3737",
            borderRadius: "50%",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-40px",
            bottom: "80px",
            width: "520px",
            height: "2px",
            display: "flex",
            background: "#FD3737",
            transform: "rotate(-18deg)",
          }}
        />

        <div style={{ zIndex: 2, display: "flex", justifyContent: "space-between", fontSize: 18, letterSpacing: 4 }}>
          <span>[ CROWD CONTROL ]</span>
          <span style={{ color: "#FD3737" }}>CONFIDENTIAL / 2026</span>
        </div>

        <div style={{ zIndex: 2, display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ color: "#FD3737", fontSize: 20, letterSpacing: 5 }}>GROWTH PARTNERSHIP PROPOSAL</span>
          <div style={{ display: "flex", flexDirection: "column", fontWeight: 900, fontSize: 92, lineHeight: 0.86, letterSpacing: -5 }}>
            <span>CHAMPION</span>
            <span style={{ color: "#FD3737" }}>TEAMWEAR</span>
          </div>
        </div>

        <div style={{ zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 18 }}>
          <span style={{ maxWidth: 650, color: "rgba(255,255,255,.7)", lineHeight: 1.4 }}>
            Build the brand, growth, channel, and activation system for the next phase.
          </span>
          <span style={{ letterSpacing: 3 }}>CTW / CCD</span>
        </div>
      </div>
    ),
    size,
  );
}
