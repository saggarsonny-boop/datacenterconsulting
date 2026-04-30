/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "8mb"
    }
  }
  ,
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contribute",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
