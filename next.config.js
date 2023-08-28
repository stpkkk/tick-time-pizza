/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //!
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tick-time.ru",
      },
    ],
  },
};

module.exports = nextConfig;
