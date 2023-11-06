/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, //!
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tick-time.ru',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
