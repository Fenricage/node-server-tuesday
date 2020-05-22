const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

const dotEnvPath = path.resolve(__dirname, '..', '.env');
const dotEnvResult = require('dotenv').config({ path: dotEnvPath });

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = withCSS(
  withFonts(
    withSass({
      exportPathMap: () => ({
        '/': { page: '/' },
      }),
      env: {
        REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
        REACT_APP_CLIENT_URL: process.env.REACT_APP_CLIENT_URL,
      },
      // убирает роутинг по файлам из директории pages (зачем?)
      useFileSystemPublicRoutes: false,
    }),
  ),
);
