/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/elga',
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
