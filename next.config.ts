import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output:"export" removed — API routes require a server runtime.
  // Pages still SSG automatically (no dynamic deps). Vercel deploys natively.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
