# emregemici.com

Personal portfolio of Emre Gemici, iOS Developer. Single-page site built with
Next.js 15 (App Router), React 19 and Tailwind CSS 4, deployed on Vercel.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also generates OG images, icons, sitemap)
npm start
```

## Structure

```
src/
  app/
    [lang]/            # one static page per locale: / (en) and /tr
      layout.js        # fonts (next/font), metadata, hreflang, theme bootstrap
      page.js          # the page itself (server component)
      opengraph-image.js / twitter-image.js   # generated social preview per locale
    icon.js, apple-icon.js                    # generated "EG" favicon / touch icon
    robots.js, sitemap.js
    globals.css        # design tokens (light/dark) and component styles
  components/
    SiteNav.js         # client component: menu, theme toggle, language switch
    Monogram.js        # shared favicon artwork
  lib/
    translations.js    # all copy, per locale
    site.js            # locale-independent data: URLs, socials, projects, tech stack
    i18n.js            # locale list and helpers
    assets.js          # reads build-time assets (fonts, OG photo)
  middleware.js        # locale detection for "/" (cookie → Accept-Language)
  assets/
    fonts/             # subset TTFs used only by the generated images
    profile-og.png     # grayscale photo used only by the OG image
public/images/         # hero photo and project logos
```

## Localisation

- English is served at `/`, Turkish at `/tr` (both statically generated).
- A first visit to `/` from a browser that prefers Turkish is redirected to `/tr`.
  Choosing a language in the header stores a `NEXT_LOCALE` cookie that wins over
  the browser preference. `/en` permanently redirects to `/`.
- `<html lang>` is set per locale, so CSS `text-transform: uppercase` follows
  Turkish casing rules (İ/ı). Tech names are wrapped in `lang="en"` to keep
  English casing.
- To change copy, edit `src/lib/translations.js`; non-text project data lives in
  `src/lib/site.js`.

## Generated images

`opengraph-image.js`, `icon.js` and `apple-icon.js` render with `next/og` at
build time. They use the subset fonts in `src/assets/fonts` (Basic Latin +
Turkish letters, fetched from the Google Fonts CSS API with a `text=` parameter).
If new characters are needed in the OG image, re-fetch the fonts with a wider
character set.

## Analytics

Visitor statistics come from [Vercel Web Analytics](https://vercel.com/docs/analytics)
(`<Analytics />` in the root layout). It is cookieless, so no consent banner is
needed. Enable it once for the project in the Vercel dashboard (Analytics tab);
until then the script is a no-op.

## Theme

Light/dark follows `prefers-color-scheme`; a manual choice is stored in
`localStorage` (`theme`) and applied by an inline script in the root layout
before first paint, so there is no flash of the wrong theme.
