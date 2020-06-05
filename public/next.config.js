const path = require('path');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');
const { withPlugins, optional } = require('next-compose-plugins');

const dotEnvPath = path.resolve(__dirname, '..', '.env');
const dotEnvResult = require('dotenv').config({ path: dotEnvPath });

if (dotEnvResult.error) {
  throw dotEnvResult.error;
}

module.exports = withPlugins([
  [ withCSS, {} ],
  [ withFonts, {} ],
  [ withSass, {} ],
], {
  exportPathMap: () => ({
    '/': { page: '/' },
  }),
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {

    if (dev) {
      config.plugins.push(new FilterWarningsPlugin({
        exclude: /^chunk styles/,
      }));
    }

    return config;
  },
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    REACT_APP_CLIENT_URL: process.env.REACT_APP_CLIENT_URL,
  },
  // убирает роутинг по файлам из директории pages (зачем?) (вроде нужно для next-router)
  useFileSystemPublicRoutes: false,
});
