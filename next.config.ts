import type { NextConfig } from "next";

// Set at build time for GitHub Pages project-site deploys (served from /<repo>/).
// Empty by default so local dev and root-domain hosting work unchanged.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
