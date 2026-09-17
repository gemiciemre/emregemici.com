import { ImageResponse } from "next/og";
import { readAsset } from "@/lib/assets";
import { getDictionary, locales } from "@/lib/i18n";
import { site } from "@/lib/site";

// Rendered once per locale at build time (see generateStaticParams in layout.js).
// Fonts are subsetted TTFs (Basic Latin + Turkish) kept in src/assets/fonts.

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Emre Gemici — iOS Developer";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function OpenGraphImage({ params }) {
  const { lang } = await params;
  const t = getDictionary(lang);

  const [interRegular, interSemiBold, playfair, photo] = await Promise.all([
    readAsset("fonts", "Inter-Regular.ttf"),
    readAsset("fonts", "Inter-SemiBold.ttf"),
    readAsset("fonts", "PlayfairDisplay-Regular.ttf"),
    readAsset("profile-og.png"),
  ]);

  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;
  // "iOS" keeps its casing, the rest is upper-cased with locale rules (İ for Turkish).
  const caption = `${t.hero.captionPrefix} ${t.hero.captionSuffix.toLocaleUpperCase(lang)}`;
  const domain = site.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#FAFAFA",
          color: "#1A1A1A",
          fontFamily: "Inter",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Photo, anchored bottom-right, fading into the background like the hero */}
        <img
          src={photoSrc}
          width={620}
          height={496}
          style={{ position: "absolute", right: 24, bottom: -6, objectFit: "contain" }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 700,
            height: 260,
            background: "linear-gradient(180deg, rgba(250,250,250,0) 0%, rgba(250,250,250,0.9) 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: 760,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 10, height: 10, borderRadius: 999, background: "#E85D04" }} />
              <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: "0.12em", color: "#6F6F6F" }}>
                {caption}
              </span>
            </div>

            <span
              style={{
                marginTop: 56,
                fontFamily: "Playfair Display",
                fontSize: 108,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              {t.hero.name}
            </span>

            <span style={{ marginTop: 32, fontSize: 30, lineHeight: 1.4, color: "#555555", maxWidth: 620 }}>
              {t.hero.subtitle}
            </span>
          </div>

          <span style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em" }}>{domain}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interSemiBold, weight: 600, style: "normal" },
        { name: "Playfair Display", data: playfair, weight: 400, style: "normal" },
      ],
    },
  );
}
