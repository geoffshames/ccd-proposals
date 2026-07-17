import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FKD UP! — a cultural comedy movement from Laff Mobb Studios and Crowd Control Digital";
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
            "radial-gradient(60% 55% at 78% 22%, rgba(253,55,55,0.22), transparent 68%), linear-gradient(rgba(51,51,51,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(51,51,51,.16) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 80px 80px, 80px 80px",
          color: "#ffffff",
          padding: "54px 64px",
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
            right: -170,
            top: -190,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 17,
            letterSpacing: 3.5,
            textTransform: "uppercase",
          }}
        >
          <img
            src="https://proposal.crowdcontroldigital.com/brand/CC-LOGO-2024-WHITE.png"
            alt="Crowd Control Digital"
            width="300"
            height="42"
            style={{ objectFit: "contain" }}
          />
          <span style={{ color: "rgba(255,255,255,.55)" }}>For brand partners · 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1040 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "rgba(255,255,255,.72)",
            }}
          >
            Laff Mobb Studios × Crowd Control Digital
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 168,
              lineHeight: 0.9,
              fontWeight: 800,
              letterSpacing: -6,
              textTransform: "uppercase",
            }}
          >
            <span>FKD&nbsp;</span>
            <span style={{ color: "#FD3737" }}>UP!</span>
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 34, lineHeight: 1.2, color: "rgba(255,255,255,.82)" }}>
            Not a film. A movement.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(255,255,255,.18)",
            paddingTop: 22,
          }}
        >
          <span style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,.72)", maxWidth: 720 }}>
            The cultural comedy movement built for brand partners.
          </span>
          <span style={{ display: "flex", fontSize: 17, color: "#FD3737", letterSpacing: 1 }}>Q4 2026 · Theatrical</span>
        </div>
      </div>
    ),
    size,
  );
}
