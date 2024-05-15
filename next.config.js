/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/html/index.html",
      },
    ];
  },
  images: {
    domains: ['102.36.181.16'],
  },
};


module.exports = nextConfig;
