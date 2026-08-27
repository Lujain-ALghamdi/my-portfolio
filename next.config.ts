import type { NextConfig } from "next";

// Set GITHUB_PAGES=true (done automatically by the deploy workflow) to build
// for the GitHub Pages project site at /my-portfolio/.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "my-portfolio";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
