import { ImageResponse } from "next/og";

export const alt =
  "Alexandra Philibert — Product Manager & Builder no-code / IA";
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
          justifyContent: "space-between",
          backgroundColor: "#FFF8F0",
          color: "#1A1A2E",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#00C2FF",
          }}
        >
          Product Manager &amp; Builder no-code / IA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, lineHeight: 1 }}>
            <span>Alexandra Philibert</span>
            <span style={{ color: "#FF5C00" }}>.</span>
          </div>
          <div
            style={{
              fontSize: 32,
              marginTop: 24,
              color: "#1A1A2E",
              opacity: 0.6,
              maxWidth: 900,
            }}
          >
            Ex-fondatrice 9 ans · exit 2025. Discovery, priorisation, delivery —
            et capable de builder.
          </div>
        </div>

        <div style={{ display: "flex", height: 14, width: "100%" }}>
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
