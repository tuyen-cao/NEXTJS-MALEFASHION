/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return process.env.NODE_ENV === "development" ?
     [
      {
        source: '/products',
        destination: 'https://dummyjson.com/products',
      },
    ] : []
  },
  images: {
    remotePatterns: [
      { hostname: 'i.dummyjson.com' },
    ],
  },
}

module.exports = nextConfig
