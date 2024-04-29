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
    domains: ['website.ers.org.sz'],
  },
};


module.exports = nextConfig;
