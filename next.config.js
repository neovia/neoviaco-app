/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/neovia',
  trailingSlash: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
}

module.exports = nextConfig
