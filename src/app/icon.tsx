import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0f0f",
          borderRadius: "6px",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: 800,
            color: "#F77331",
            lineHeight: 1,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size }
  );
}
