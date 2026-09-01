import { ImageResponse } from "next/og";

export const alt = "EDCCN27 60-Second Announce Video creative production proposal from Crowd Control";
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
          padding: "58px 64px",
          background: "#080808",
          color: "#f6f6f2",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -90,
            top: -120,
            width: 510,
            height: 510,
            display: "flex",
            border: "96px solid rgba(253, 55, 55, 0.17)",
            borderRadius: 510,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <strong style={{ display: "flex", color: "#fd3737" }}>Crowd Control</strong>
          <span style={{ display: "flex", color: "#a0a0a0" }}>Creative production proposal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <span
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#aaa",
              marginBottom: 22,
            }}
          >
            Prepared for Insomniac
          </span>
          <strong
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              lineHeight: 0.94,
              letterSpacing: -4,
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex" }}>EDCCN27 60-Second</span>
            <span style={{ display: "flex", color: "#fd3737" }}>Announce Video</span>
          </strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 20,
            borderTop: "1px solid #383838",
            fontSize: 19,
            color: "#c0c0c0",
          }}
        >
          <span style={{ display: "flex" }}>60 seconds / Three sizes / Two rounds</span>
          <span style={{ display: "flex", color: "#fd3737" }}>Final delivery October 1, 2026</span>
        </div>
      </div>
    ),
    size,
  );
}
