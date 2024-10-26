/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH || '',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yurucamp.jp",
        port: "",
      },
    ],
  },
};

export default nextConfig;
