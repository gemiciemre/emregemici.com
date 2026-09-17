/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first (smaller), WebP fallback; both keep the hero photo's transparency.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
