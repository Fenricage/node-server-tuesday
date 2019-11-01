const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = withFonts(withSass({
  env: {
    REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
}));
