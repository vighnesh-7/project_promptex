/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")

const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === 'development',
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    disable: false,
  })
}


module.exports = (nextConfig)
