// Twitter/X falls back to og:image, but an explicit twitter:image is more reliable.
// Segment config must be a literal here (Next.js parses it statically).
export const dynamic = "force-static";
export { default, size, contentType, alt, generateStaticParams } from "./opengraph-image";
