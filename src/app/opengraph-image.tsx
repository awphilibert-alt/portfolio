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
          background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 50%, #1A1A2E 100%)",
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
            background: "radial-gradient(circle, rgba(123,97,255,0.15) 0%, transparent 70%)",
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
            background: "radial-gradient(circle, rgba(255,92,0,0.1) 0%, transparent 70%)",
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
            color: "#FF5C00",
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
          <span style={{ color: "#FF5C00" }}>.</span>
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
          <div style={{ flex: 1, backgroundColor: "#FF5C00" }} />
          <div style={{ flex: 1, backgroundColor: "#7B61FF" }} />
          <div style={{ flex: 1, backgroundColor: "#FF3CAC" }} />
          <div style={{ flex: 1, backgroundColor: "#00C2FF" }} />
          <div style={{ flex: 1, backgroundColor: "#BFFF0A" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
