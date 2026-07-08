import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/IlustPortfolio",
  images: {
    qualities: [75],
    unoptimized: true,
  },
}

export default nextConfig
