/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['@splinetool/react-spline'],
  images: { unoptimized: true },
};

export default nextConfig;
