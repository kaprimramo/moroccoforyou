/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // `output: 'export'` produces a static `out/` directory that Vercel
  // serves as a pure static site. Dynamic [slug] routes are pre-rendered
  // at build time via `generateStaticParams()` + `dynamicParams = false`,
  // so destination and blog pages resolve correctly without any server.
};

module.exports = nextConfig;
