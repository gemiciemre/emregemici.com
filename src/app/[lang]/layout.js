import { Analytics } from "@vercel/analytics/next";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { site } from "@/lib/site";
import { getDictionary, isLocale, localePath, locales, ogLocale } from "@/lib/i18n";

// Self-hosted by next/font at build time (no request to Google at runtime).
// latin-ext is required for Turkish characters (ş, ğ, İ, …).
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getDictionary(lang);
  const path = localePath(lang);

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: path,
      languages: {
        en: localePath("en"),
        tr: localePath("tr"),
        "x-default": localePath("en"),
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale(lang),
      alternateLocale: locales.filter((l) => l !== lang).map(ogLocale),
      url: path,
      siteName: site.name,
      title: meta.title,
      description: meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    verification: {
      google: "9eWlrCoaqpZvZBo4sC00Rzka6xCSyufucBADBkG8lzE",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1115" },
  ],
};

// Runs before first paint so a saved/preferred dark theme never flashes light.
const themeInitScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    var dark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
    if (dark) document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        {children}
        {/* Vercel Web Analytics: cookieless page-view stats, enable it once in the Vercel dashboard */}
        <Analytics />
      </body>
    </html>
  );
}
