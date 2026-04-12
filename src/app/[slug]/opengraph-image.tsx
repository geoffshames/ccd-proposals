import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt = "Crowd Control Digital — Project Proposal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  // Load N27 Bold font
  const n27Bold = await readFile(
    join(process.cwd(), "public/brand/N27-Bold.otf")
  );

  // Load CCD wordmark as base64 data URI
  const wordmarkBuf = await readFile(
    join(process.cwd(), "public/brand/CC-LOGO-2024-WHITE.png")
  );
  const wordmarkBase64 = `data:image/png;base64,${wordmarkBuf.toString("base64")}`;

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: "#0A0A0A",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8e8e8",
            fontFamily: "N27Bold",
          }}
        >
          Project Not Found
        </div>
      ),
      {
        ...size,
        fonts: [{ name: "N27Bold", data: n27Bold, style: "normal", weight: 700 }],
      }
    );
  }

  const accent = project.accentColor;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 70px",
          fontFamily: "N27Bold",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Accent stripe — top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: accent,
            display: "flex",
          }}
        />

        {/* Subtle accent glow */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: accent,
            opacity: 0.06,
            display: "flex",
          }}
        />

        {/* Top section — type label */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                background: accent,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "#666666",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}
            >
              {project.project.type}
            </span>
          </div>
        </div>

        {/* Center — project name large */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "-40px",
          }}
        >
          <h1
            style={{
              fontSize: 82,
              fontWeight: 700,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-2px",
              textTransform: "uppercase",
            }}
          >
            {project.client.name}
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "#555555",
              margin: 0,
              maxWidth: "700px",
              lineHeight: 1.3,
            }}
          >
            {project.project.tagline.length > 100
              ? project.project.tagline.slice(0, 100).trim() + "..."
              : project.project.tagline}
          </p>
        </div>

        {/* Bottom bar — CCD wordmark + project details */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          {/* CCD Wordmark */}
          <img
            src={wordmarkBase64}
            width={160}
            height={22}
            style={{ opacity: 0.7 }}
          />

          {/* Duration + start date */}
          <div
            style={{
              display: "flex",
              gap: "30px",
              fontSize: 15,
              color: "#444444",
              letterSpacing: "1px",
            }}
          >
            <span>{project.project.duration}</span>
            <span style={{ color: "#333333" }}>|</span>
            <span>{project.project.startDate}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "N27Bold",
          data: n27Bold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
