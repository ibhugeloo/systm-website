import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SYSTM.RE — Agence Web Premium à La Réunion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0f0f",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(247,115,49,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Title */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 4,
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#FFF9EB",
              letterSpacing: "-2px",
            }}
          >
            SYSTM
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#F77331",
              letterSpacing: "-2px",
            }}
          >
            .RE
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: 28,
            color: "rgba(255,249,235,0.6)",
            maxWidth: 700,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Agence Web Premium — La Réunion
        </span>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          {["Branding", "Landing Pages", "MVP", "SaaS"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,249,235,0.15)",
                color: "rgba(255,249,235,0.5)",
                fontSize: 18,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
