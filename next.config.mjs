/** @type {import('next').Config} */

const repo = 'aurtho-store';
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const config = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  // Add this images object to disable optimization
  images: {
    unoptimized: true,
  },
};
devIndicators: false
export default config;