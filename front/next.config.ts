import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {root: __dirname },
  async rewrites() {
      return[
          {
              source: "/api/:path*",
              destination: "https://javareact.onrender.com/:path*",
              },
          ];
      },
      output:"export",
      images:{
          domains: ["javareact.onrender.com"],
          unoptimized: true,
      },
};

export default nextConfig;
