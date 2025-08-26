import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'output: export' to enable API routes
  images: { unoptimized: true },
  basePath: "/myportfolio",
  assetPrefix: "/myportfolio/",
  async redirects() {
    return [
      {
        source: "/myportfolio",
        destination: "/myportfolio/profile", // 👈 your new landing page
        permanent: true,
      },
    ];
  },
};

export default nextConfig;