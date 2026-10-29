import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // stock photos used across the site
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
