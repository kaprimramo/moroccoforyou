/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // عطلنا هادي
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;