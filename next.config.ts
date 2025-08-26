import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/",          // when user hits root
        destination: "/profile", // redirect to /profile
        permanent: true,
      },
    ];
  },
};

export default nextConfig;