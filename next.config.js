/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/scalepoint-site',
  assetPrefix: '/scalepoint-site',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
