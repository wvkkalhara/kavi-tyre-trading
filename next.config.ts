import type { NextConfig } from "next";

/**
 * Two build modes:
 *  - Default (this preview): normal Next server build.
 *  - STATIC_EXPORT=1 (+ NEXT_PUBLIC_BASE_PATH=/repo-name): produces a fully
 *    static site in ./out for GitHub Pages. No server, no database —
 *    the app runs entirely in the browser as an offline-first PWA.
 */
const isExport = process.env.STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      basePath,
      assetPrefix: basePath ? `${basePath}/` : undefined,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
