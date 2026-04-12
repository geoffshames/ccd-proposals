import { ImageResponse } from "next/og";
import { getProject } from "@/lib/projects";

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

  // Load N27 Bold font via fetch (works in both local and Vercel)
  const n27BoldRes = await fetch(
    new URL("../../../public/brand/N27-Bold.otf", import.meta.url)
  );
  const n27Bold = await n27BoldRes.arrayBuffer();

  const fonts = [
    { name: "N27Bold", data: n27Bold, style: "normal" as const, weight: 700 as const },
  ];

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
      { ...size, fonts }
    );
  }

  const accent = project.accentColor;
  const tagline =
    project.project.tagline.length > 100
      ? project.project.tagline.slice(0, 100).trim() + "..."
      : project.project.tagline;

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
        }}
      >
        {/* Accent stripe — top edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1200px",
            height: "5px",
            background: accent,
          }}
        />

        {/* Top — project type label */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              background: accent,
            }}
          />
          <span
            style={{
              fontSize: 16,
              color: "#555555",
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
            }}
          >
            {project.project.type}
          </span>
        </div>

        {/* Center — client name */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              textTransform: "uppercase" as const,
            }}
          >
            {project.client.name}
          </div>
          <div
            style={{
              fontSize: 21,
              color: "#444444",
              lineHeight: 1.4,
              maxWidth: "750px",
            }}
          >
            {tagline}
          </div>
        </div>

        {/* Bottom — CCD text wordmark + details */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Text-based CCD wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "8px",
                height: "8px",
                background: accent,
              }}
            />
            <span
              style={{
                fontSize: 14,
                color: "#666666",
                letterSpacing: "4px",
                textTransform: "uppercase" as const,
              }}
            >
              Crowd Control Digital
            </span>
          </div>

          {/* Duration + start */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: 14,
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
    { ...size, fonts }
  );
}
