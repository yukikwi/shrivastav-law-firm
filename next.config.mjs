/** @type {import('next').NextConfig} */
const nextConfig = {
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
