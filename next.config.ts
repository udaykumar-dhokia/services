import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/udthedeveloper",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
