import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to enable API routes
  images: { unoptimized: true },
  basePath: '/myportfolio',
  assetPrefix: '/myportfolio/',
};

export default nextConfig;