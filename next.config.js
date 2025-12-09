/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        permanent: true,
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://passwordgens.online/:path*',
      },
      {
        source: '/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.passwordgens.online',
          },
        ],
        destination: 'https://passwordgens.online/:path*',
      },
    ]
  },
}

module.exports = nextConfig

