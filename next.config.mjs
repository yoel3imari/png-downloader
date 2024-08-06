/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'banner2.cleanpng.com',
    }]
  }
};

export default nextConfig;
