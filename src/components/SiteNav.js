'use client';

import { useEffect, useState } from "react";
import { LOCALE_COOKIE, locales, localePath } from "@/lib/i18n";

const SECTIONS = ["about", "experience", "projects", "contact"];
const THEME_COLORS = { light: "#FAFAFA", dark: "#0F1115" };

function rememberLocale(lang) {
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

export default function SiteNav({ lang, nav, a11y }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // The inline script in the root layout has already applied the theme class;
    // just sync React state with it.
    setIsDark(document.documentElement.classList.contains("dark"));

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMobileMenuOpen]);

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    // Keep the browser chrome (mobile address bar) in sync with the chosen theme.
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", next ? THEME_COLORS.dark : THEME_COLORS.light);
    });
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  const scrollToTop = (event) => {
    event.preventDefault();
    closeMenu();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", localePath(lang));
  };

  const themeButton = (className) => (
    <button
      type="button"
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all hover:opacity-70 ${className}`}
      aria-label={isDark ? a11y.switchToLight : a11y.switchToDark}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );

  const languageSwitch = (buttonPadding) => (
    <div className="flex items-center gap-1 text-sm" role="group" aria-label={a11y.language}>
      {locales.map((locale, index) => (
        <span key={locale} className="flex items-center gap-1">
          {index > 0 && <span style={{ color: "var(--color-text-tertiary)" }} aria-hidden="true">/</span>}
          <a
            href={localePath(locale)}
            hrefLang={locale}
            lang={locale}
            onClick={() => rememberLocale(locale)}
            aria-current={locale === lang ? "page" : undefined}
            className={`${buttonPadding} py-1 rounded transition-all ${locale === lang ? "font-medium" : "opacity-50 hover:opacity-100"}`}
          >
            {locale.toUpperCase()}
          </a>
        </span>
      ))}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${isScrolled ? "py-4" : "py-6"}`}
      style={{
        background: (isScrolled || isMobileMenuOpen) ? "var(--color-bg)" : "transparent",
        boxShadow: (isScrolled || isMobileMenuOpen) ? "0 1px 0 var(--color-border-light)" : "none",
        transition: "padding 500ms ease",
      }}
      aria-label={a11y.mainNavigation}
    >
      <div className="container-main">
        <div className="flex justify-between items-center">
          <a href={localePath(lang)} onClick={scrollToTop} className="text-lg font-medium" aria-label={a11y.backToTop}>
            Emre Gemici
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-10">
            {SECTIONS.map((section) => (
              <a key={section} href={`#${section}`} className="nav-link">
                {nav[section]}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {languageSwitch("px-2")}
            {themeButton("theme-button")}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? a11y.closeMenu : a11y.openMenu}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu — `inert` keeps the collapsed panel out of the tab order */}
        <div
          id="mobile-menu"
          className={`md:hidden mobile-menu-panel ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
          style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border-light)" }}
          inert={!isMobileMenuOpen}
        >
          <div className="flex flex-col gap-4 py-4">
            {SECTIONS.map((section) => (
              <a key={section} href={`#${section}`} onClick={closeMenu} className="nav-link text-left text-lg">
                {nav[section]}
              </a>
            ))}

            <div className="pt-4" style={{ borderTop: "1px solid var(--color-border-light)" }}>
              <div className="flex items-center justify-between">
                {languageSwitch("px-3")}
                {themeButton("theme-button theme-button-outline")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
