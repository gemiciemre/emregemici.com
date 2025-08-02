import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata = {
  title: "Emre Gemici - iOS Developer",
  description: "Professional iOS Developer specializing in Swift, SwiftUI, and mobile app development. Explore my portfolio, experience, and insights in iOS development.",
  keywords: "iOS Developer, Swift, SwiftUI, Mobile App Development, iOS Apps, Apple Developer",
  author: "Emre Gemici",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body
        className="antialiased"
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
