import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" }
    ]
  },
  transpilePackages: ['recharts', 'react-is'],
  // Allows Next.js HMR websocket connection from your local network IP
  allowedDevOrigins: ['192.168.1.91', 'localhost'],
};

export default nextConfig;
