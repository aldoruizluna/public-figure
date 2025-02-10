// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
  },
  trailingSlash: true,
  // This tells Next.js to generate a static export during build.
  output: 'export',
};