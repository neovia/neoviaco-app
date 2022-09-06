/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/neovia',
  trailingSlash: true,
  images: {
    domains: ['m.media-amazon.com', 'thumbs.dreamstime.com'],
  },
  experimental: {
        images: {
          allowFutureImage: true
        }
    },
}

module.exports = nextConfig
