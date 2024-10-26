/** @type {import('next').NextConfig} */

const basePath = process.env.BASE_PATH || ''
console.log(`Base path: ${basePath}`)
const nextConfig = {
  basePath: basePath,
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
