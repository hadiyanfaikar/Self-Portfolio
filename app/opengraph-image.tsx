import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #172554 100%)",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 24,
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            marginBottom: 32,
            fontSize: 48,
            fontWeight: 700,
            color: "white",
          }}
        >
          {initials}
        </div>
        <h1
          style={{
            fontSize: 60,
            fontWeight: 700,
            background: "linear-gradient(135deg, #60A5FA, #A78BFA)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 8,
          }}
        >
          {siteConfig.name}
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          {siteConfig.title}
        </p>
      </div>
    ),
    { ...size }
  );
}
