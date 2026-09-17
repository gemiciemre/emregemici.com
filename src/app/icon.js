import { ImageResponse } from "next/og";
import { Monogram, loadMonogramFont } from "@/components/Monogram";

// Browser tab icon (served at /icon, linked automatically by Next.js).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<Monogram size={size.width} radius={14} />, {
    ...size,
    fonts: [await loadMonogramFont()],
  });
}
