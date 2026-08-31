import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Placeholder mark — replace with the real logo when there is one. */
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
          background: "#0b2545",
          color: "#ffffff",
          fontSize: 34,
          fontFamily: "Georgia, serif",
          letterSpacing: -1,
        }}
      >
        Be
      </div>
    ),
    size,
  );
}
