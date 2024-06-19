/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tick-time.ru',
      },
    ],
  },
};

module.exports = nextConfig;
