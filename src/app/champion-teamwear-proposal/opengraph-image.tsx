import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt =
  "Champion Teamwear growth partnership proposal by Crowd Control Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pub = (file: string) => path.join(process.cwd(), "public", file);

export default async function OpenGraphImage() {
  const [n27, logo, texture] = await Promise.all([
    readFile(pub("brand/N27-Bold.otf")),
    readFile(pub("champion-proposal/og-logo.png")),
    readFile(pub("champion-proposal/og-texture.jpg")),
  ]);

  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const textureSrc = `data:image/jpeg;base64,${texture.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          color: "#f4f2ed",
          background: "#070707",
          fontFamily: "N27",
        }}
      >
        {/* Texture panel, right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 470,
            height: 630,
            display: "flex",
            borderLeft: "1px solid rgba(244,242,237,0.14)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={textureSrc}
            alt=""
            width={470}
            height={630}
            style={{ objectFit: "cover", width: 470, height: 630 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(90deg, #070707 0%, rgba(7,7,7,0) 42%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background:
                "linear-gradient(0deg, rgba(7,7,7,0.6) 0%, rgba(7,7,7,0) 30%)",
            }}
          />
        </div>

        {/* Copy column */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 760,
            padding: "48px 0 44px 60px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" width={216} height={30} />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 30,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 3,
                  display: "flex",
                  background: "#fd3737",
                }}
              />
              <span
                style={{
                  fontSize: 16,
                  letterSpacing: 3,
                  color: "rgba(244,242,237,0.66)",
                }}
              >
                CHAMPION TEAMWEAR × CROWD CONTROL
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 78,
                lineHeight: 0.94,
                letterSpacing: -2,
              }}
            >
              <span>TURN BRAND</span>
              <span>PERMISSION</span>
              <span style={{ display: "flex" }}>
                INTO&nbsp;<span style={{ color: "#fd3737" }}>MOMENTUM.</span>
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 640,
              paddingTop: 18,
              borderTop: "1px solid rgba(244,242,237,0.16)",
              fontSize: 14,
              letterSpacing: 2.5,
              color: "rgba(244,242,237,0.56)",
            }}
          >
            <span>GROWTH PARTNERSHIP PROPOSAL</span>
            <span>PRIVATE + CONFIDENTIAL / 2026</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "N27",
          data: n27,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
