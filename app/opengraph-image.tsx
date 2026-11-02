import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { t } from "@/lib/i18n";

export const alt = `${profile.name} — ${t(profile.role)}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Void Neutral: background #111110, card #161614, text #E8E8E4 / #888884, gold #C9A96E.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#111110",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            alignSelf: "flex-start",
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(201,169,110,0.22)",
            background: "rgba(201,169,110,0.08)",
            color: "#C9A96E",
            fontSize: 24,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#C9A96E" }} />
          {t(profile.availability)}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#E8E8E4",
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 20, fontSize: 34, color: "#888884" }}>{t(profile.role)}</div>
        <div style={{ marginTop: 56, fontSize: 24, color: "#555550" }}>
          {t(profile.location)}
        </div>
      </div>
    ),
    size
  );
}
