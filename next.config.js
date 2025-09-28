/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "urban-wheels.rajputhemant.me",
      },
      {
        protocol: "https",
        hostname: "urban-wheels.vercel.app",
      },
      {
        protocol: "https",
        hostname: "urban-wheels.netlify.app",
      },
    ],
  },
  experimental: {},
  // ...
};

export default nextConfig;
