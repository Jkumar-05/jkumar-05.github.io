import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,  // Keep this if you want to disable Next.js image optimization
  },
  output: 'export',  // This ensures your site is built for static export
};

export default nextConfig;
