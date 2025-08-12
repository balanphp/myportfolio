import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // tells Next.js to export static HTML
  images: { unoptimized: true }, // needed if you use next/image
  basePath: '/myportfolio', // replace with your GitHub repo name
  assetPrefix: '/myportfolio/',
};


export default nextConfig;
