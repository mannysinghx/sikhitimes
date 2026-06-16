import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.sgpc.net" },
      { protocol: "https", hostname: "**.sikhnet.com" },
      { protocol: "https", hostname: "**.sikh24.com" },
      { protocol: "https", hostname: "**.tribuneindia.com" },
      { protocol: "https", hostname: "newsapi.org" },
      { protocol: "https", hostname: "**.googleapis.com" },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
