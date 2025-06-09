/** @type {import('next').Config} */

const repo = 'aurtho-store'; // This is the name of your repository
const assetPrefix = `/${repo}/`; // assetPrefix needs the trailing slash
const basePath = `/${repo}`;    // basePath must NOT have a trailing slash

const config = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default config;