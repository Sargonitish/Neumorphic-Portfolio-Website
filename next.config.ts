import type { NextConfig } from "next";

const nextConfig: NextConfig & { turbopack?: { root: string } } = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
