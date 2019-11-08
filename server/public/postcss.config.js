const url = require('postcss-url')
const imports = require('postcss-import')
const nested = require('postcss-nested')
const postCSSPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

// const variables = 'styles/variables.css'

module.exports = () => ({
  plugins: [
    url,
    imports,
    nested,
    postCSSPresetEnv({
      stage: 1,
      preserve: false,
      // importFrom: variables,
    }),
    cssnano({
      preset: 'default',
    }),
  ],
})
