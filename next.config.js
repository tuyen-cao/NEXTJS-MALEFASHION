/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  experimental: {
    appDir: true
  },
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return process.env.NODE_ENV === "development" ?
     [
      {
        source: '/products',
        destination: 'https://dummyjson.com/products/1',
      },
    ] : []
  },
}

module.exports = nextConfig
