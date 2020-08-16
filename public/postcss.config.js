const url = require('postcss-url');
const imports = require('postcss-import');
const nested = require('postcss-nested');
const postCSSPresetEnv = require('postcss-preset-env');

module.exports = () => ({
  plugins: [
    url,
    imports,
    nested,
    postCSSPresetEnv({
      stage: 1,
      features: {
        'custom-media-queries': {
          importFrom: [
            {
              customMedia: {
                '--md-viewport': '(width >= 768px)',
                '--lg-viewport': '(width >= 1024px)',
              },
            },
          ],
        },
      },
    }),
  ],
});
