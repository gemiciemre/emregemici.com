import { translations } from "./translations";

export const locales = ["en", "tr"];
export const defaultLocale = "en";

// Name of the cookie that remembers an explicit language choice (read by middleware).
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const isLocale = (value) => locales.includes(value);

// English lives at "/", every other locale under its own prefix.
export const localePath = (lang) => (lang === defaultLocale ? "/" : `/${lang}`);

export const getDictionary = (lang) => translations[lang] ?? translations[defaultLocale];

export const ogLocale = (lang) => (lang === "tr" ? "tr_TR" : "en_US");
