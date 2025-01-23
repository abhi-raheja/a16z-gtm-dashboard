/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    domains: [
      'pbs.twimg.com',
      'images.unsplash.com',
      'a16z.com',
      'upload.wikimedia.org',
      'unavatar.io'
    ],
    unoptimized: true
  },
}

module.exports = nextConfig
