module.exports = {
  // Set the base path to your project's GitHub Pages subdirectory
  basePath: '/public-figure',
  // Ensure that asset references include the subdirectory
  assetPrefix: '/public-figure/',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
};
