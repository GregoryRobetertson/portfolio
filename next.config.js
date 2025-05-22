// next.config.js

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    formats: ["image/webp"],
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(nextConfig);
