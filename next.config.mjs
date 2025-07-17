/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/elga',
  assetPrefix: '/elga',
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
