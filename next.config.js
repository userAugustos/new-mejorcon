/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mejorconsalud.as.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.atomik.vip'
      },
      {
        protocol: 'https',
        hostname: 'beta.mejorconsalud.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.dribbble.com'
      }
    ],
  },
}

module.exports = nextConfig
