import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['cdn-icons-png.flaticon.com'], 
  },
  api: {
    bodyParser: true,
  },
};

export default nextConfig;
