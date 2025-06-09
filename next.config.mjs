/** @type {import('next').Config} */

const repo = 'aurtho-store'; // This is the name of your repository
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}/`;

const config = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default config;