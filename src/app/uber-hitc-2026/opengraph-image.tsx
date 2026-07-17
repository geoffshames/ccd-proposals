import { ImageResponse } from "next/og";

export const alt = "The First Stage Is The Ride. Uber × Head In The Clouds 2026.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 62px",
          color: "#fafafa",
          background:
            "radial-gradient(circle at 83% 17%, rgba(137, 180, 255, .34), transparent 28%), linear-gradient(145deg, #111a26 0%, #080b10 50%, #050505 100%)",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            border: "2px solid rgba(255,255,255,.14)",
            transform: "rotate(-19deg)",
            right: -170,
            top: -300,
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 4 }}>
          <span>UBER × HEAD IN THE CLOUDS</span>
          <span style={{ color: "#fd3737" }}>08.08.26</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -5, lineHeight: 0.86 }}>
            THE FIRST STAGE
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ width: 90, height: 12, background: "#fd3737" }} />
            <div style={{ fontSize: 92, fontWeight: 900, letterSpacing: -5, lineHeight: 0.86 }}>IS THE RIDE.</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span style={{ fontSize: 21, color: "rgba(255,255,255,.68)" }}>BROOKSIDE AT THE ROSE BOWL · PASADENA</span>
          <span style={{ fontSize: 17, letterSpacing: 3 }}>CROWD CONTROL DIGITAL</span>
        </div>
      </div>
    ),
    size,
  );
}
