/** @type {import('next').Config} */

const config = {
  output: 'export',
  // The basePath and assetPrefix are no longer needed for a custom domain
  images: {
    unoptimized: true,
  },
};

export default config;