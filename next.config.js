/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'upload.wikimedia.org',
      'unavatar.io'
    ],
  },
}

module.exports = nextConfig
