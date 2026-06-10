import { ImageResponse } from "next/og";

export const alt =
  "Alexandra Philibert · Product Manager & Builder no-code / IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "linear-gradient(135deg, #16140E 0%, #1E1B14 50%, #16140E 100%)",
          color: "#FFFFFF",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(43,91,240,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -50,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,61,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Title label */}
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#FF6B3D",
            marginBottom: 32,
            display: "flex",
          }}
        >
          Product Manager & Builder no-code / IA
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 28,
          }}
        >
          <span>Alexandra</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 32,
          }}
        >
          <span>Philibert</span>
          <span style={{ color: "#FF6B3D" }}>.</span>
        </div>


        {/* Color bar at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            height: 6,
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#FF6B3D" }} />
          <div style={{ flex: 1, backgroundColor: "#2B5BF0" }} />
          <div style={{ flex: 1, backgroundColor: "#FF3D8B" }} />
          <div style={{ flex: 1, backgroundColor: "#FFD23F" }} />
          <div style={{ flex: 1, backgroundColor: "#B6F000" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
