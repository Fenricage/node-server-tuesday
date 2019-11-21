const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const dotEnvResult = require('dotenv').config()

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW----------->>>>>>>>', process.env.REACT_APP_SERVER_URL)

module.exports = withCSS(withFonts(withSass({
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    REACT_APP_CLIENT_URL: process.env.REACT_APP_CLIENT_URL,
  },
  // убирает роутинг по файлам из директории pages (нахуя?)
  useFileSystemPublicRoutes: false,
})));
