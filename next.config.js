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
        destination: `${process.env.SERVER_SERVICE_BASE_URL}/products`,
      },
      {
        source: '/auth/login',
        destination: `${process.env.SERVER_SERVICE_BASE_URL}/auth/login`,
      },
      {
        source: '/auth/users',
        
        destination: `${process.env.SERVER_SERVICE_BASE_URL}/auth/users`,
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
