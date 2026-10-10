import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@splinetool/react-spline$': path.resolve(
        __dirname,
        'node_modules/@splinetool/react-spline/dist/react-spline.js'
      ),
    };
    return config;
  },
};

export default nextConfig;
