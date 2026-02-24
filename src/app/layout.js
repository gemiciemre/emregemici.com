import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata = {
  metadataBase: new URL('https://emregemici.com'),
  title: {
    default: "Emre Gemici | iOS Developer",
    template: "%s | Emre Gemici"
  },
  description: "Senior iOS Developer specializing in Swift, SwiftUI, and Clean Architecture. Building high-performance mobile applications with 40+ screens redesigned and 15% user retention improvement.",
  keywords: ["iOS Developer", "Swift", "SwiftUI", "UIKit", "MVVM", "VIPER", "Clean Architecture", "Mobile App Development", "Apple Developer", "Istanbul", "Turkey"],
  authors: [{ name: "Emre Gemici", url: "https://emregemici.com" }],
  creator: "Emre Gemici",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: "https://emregemici.com",
    siteName: "Emre Gemici",
    title: "Emre Gemici | Senior iOS Developer",
    description: "Senior iOS Developer specializing in Swift, SwiftUI, and Clean Architecture. Building high-performance mobile applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Emre Gemici - Senior iOS Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Gemici | Senior iOS Developer",
    description: "Senior iOS Developer specializing in Swift, SwiftUI, and Clean Architecture.",
    images: ["/og-image.png"],
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
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
