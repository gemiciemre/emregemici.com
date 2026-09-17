import { locales, localePath } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();
  const languages = Object.fromEntries(locales.map((lang) => [lang, `${site.url}${localePath(lang)}`]));

  return locales.map((lang) => ({
    url: `${site.url}${localePath(lang)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: lang === "en" ? 1 : 0.9,
    alternates: { languages },
  }));
}
