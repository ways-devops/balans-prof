import { ImageResponse } from "next/og";

import { homeDescription, homeTitle, siteName } from "@/lib/seo";

export const alt = homeTitle;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 54%, #fff8eb 100%)",
          color: "#0f172a",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "1px solid #e2e8f0",
            borderRadius: "36px",
            boxShadow: "0 30px 90px rgba(15, 23, 42, 0.13)",
            display: "flex",
            gap: "48px",
            height: "100%",
            padding: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#0f172a",
              borderRadius: "34px",
              color: "#D4A24C",
              display: "flex",
              flexShrink: 0,
              fontSize: 112,
              fontWeight: 500,
              height: 178,
              justifyContent: "center",
              lineHeight: 1,
              width: 178,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ color: "#D4A24C", fontSize: 30, fontWeight: 700 }}>{siteName}</div>
            <div style={{ color: "#0f172a", fontSize: 60, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.08 }}>
              Бухгалтерские услуги для ИП и ООО
            </div>
            <div style={{ color: "#475569", fontSize: 30, lineHeight: 1.45, maxWidth: 760 }}>{homeDescription}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
