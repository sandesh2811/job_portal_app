import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:slug*",
  //       destination: "http://localhost:5000/api/:slug*",
  //     },
  //   ];
  // },
};

export default nextConfig;
