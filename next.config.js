/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'frontend-test-assignment-api.abz.agency',
  //       port: '',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
  images: { unoptimized: true },
}
module.exports = nextConfig
