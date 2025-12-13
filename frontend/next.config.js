/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'beastique.art',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Enable if using server actions
    // serverActions: true,
  },
}

module.exports = nextConfig
