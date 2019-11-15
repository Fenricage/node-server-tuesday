const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(withFonts(withSass({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  // убирает роутинг по файлам из директории pages (нахуя?)
  useFileSystemPublicRoutes: false,
})));
