const path = require('path');
const url = require('postcss-url');
const imports = require('postcss-import');
const nested = require('postcss-nested');
const postCSSPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssCustomMedia = require('postcss-custom-media');

// console.log('__dirname', __dirname)
// const media = path.join(__dirname, 'shared/css/helpers/_media.scss')
// console.log('\x1b[36m', 'media' , media, '\x1b[0m');
module.exports = () => ({
  plugins: [
    url,
    imports,
    nested,
    postcssCustomMedia({
      importFrom: [
        {
          customMedia: {
            '--md-viewport': '(width >= 768px)',
            '--lg-viewport': '(width >= 1024px)',
          },
        },
      ],
    }),
    postCSSPresetEnv({
      // stage: 1,
      // preserve: false,
      // importFrom: './shared/css/helpers/_variables.scss',
    }),
    // cssnano({
    //   preset: 'default',
    // }),
  ],
});
