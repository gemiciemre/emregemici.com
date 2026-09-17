import { NextResponse } from "next/server";
import { defaultLocale, isLocale, LOCALE_COOKIE } from "@/lib/i18n";

// Routing model:
//   /      → English (served from the statically generated /en page via rewrite)
//   /tr    → Turkish
//   /en    → redirected to / so there is a single canonical English URL
//
// On "/" a visitor is sent to /tr when they previously chose Turkish (cookie)
// or, on a first visit, when their browser prefers Turkish.

function preferredLocale(request) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;

  // Browsers list languages in preference order, e.g. "tr-TR,tr;q=0.9,en;q=0.8"
  const first = request.headers.get("accept-language")?.split(",")[0]?.trim().toLowerCase() ?? "";
  return first.startsWith("tr") ? "tr" : defaultLocale;
}

export function middleware(request) {
  const url = request.nextUrl.clone();

  if (url.pathname === `/${defaultLocale}`) {
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  const locale = preferredLocale(request);
  if (locale !== defaultLocale) {
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url, 307);
  }

  url.pathname = `/${defaultLocale}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/", "/en"],
};
