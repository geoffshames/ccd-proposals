import { ImageResponse } from "next/og";

export const alt = "EDC China 2027 60-Second Announce Video proposal: one master creative, three sizes, delivered September 25 for a fixed $6,500, from Crowd Control";
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
          padding: "54px 62px",
          background: "#07080b",
          color: "#f2f1ec",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 330,
            height: 630,
            display: "flex",
            background: "#fd3737",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 116,
            right: 58,
            display: "flex",
            flexDirection: "column",
            color: "#090909",
          }}
        >
          <span style={{ display: "flex", fontSize: 18, letterSpacing: 3, textTransform: "uppercase" }}>Runtime</span>
          <strong style={{ display: "flex", fontSize: 150, lineHeight: 0.82 }}>60</strong>
          <span style={{ display: "flex", justifyContent: "flex-end", fontSize: 22, fontWeight: 700, textTransform: "uppercase" }}>Seconds</span>
        </div>
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
          <span style={{ display: "flex", marginRight: 360, color: "#a8a7a2" }}>Creative production proposal</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 770 }}>
          <span
            style={{
              display: "flex",
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#aaa9a4",
              marginBottom: 18,
            }}
          >
            Prepared for Insomniac
          </span>
          <strong
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 78,
              lineHeight: 0.91,
              letterSpacing: -3,
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex" }}>EDC China 2027</span>
            <span style={{ display: "flex", color: "#fd3737" }}>60-Second</span>
            <span style={{ display: "flex" }}>Announce Video</span>
          </strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 760,
            paddingTop: 18,
            borderTop: "1px solid #3a3a39",
            fontSize: 18,
            color: "#c1c0ba",
          }}
        >
          <span style={{ display: "flex" }}>Three sizes / Two rounds</span>
          <span style={{ display: "flex", color: "#fd3737" }}>$6,500 fixed / Delivered September 25</span>
        </div>
      </div>
    ),
    size,
  );
}
