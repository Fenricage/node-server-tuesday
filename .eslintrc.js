const functionalRules = {
  // FUNCTIONAL RULES
  // check nextjs's link, for attributes href, to
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      components: ['Link'],
      specialLink: ['to'],
    },
  ],
  // checks that condition's value is first, then variable
  // if ("red" === color) {}
  'yoda': [
    'error',
    'always',
    {
      onlyEquality: true,
    },
  ],
  'no-underscore-dangle': 'error', // regulates underscore symbol before var, methods names (like a _foo, _tmp)
  'no-plusplus': 'off', // regulates unary operators -- and  ++
  'react-hooks/rules-of-hooks': 'error', // hook's rules for fill effect dep
  'react-hooks/exhaustive-deps': 'warn', // hook's rules for fill effect dep
  'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx'] }],
}

const stylesRules = {
  'array-bracket-spacing': ['error', 'always'],
  'arrow-body-style': 'off',
  'padded-blocks': 'off',
}

module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // inherits eslint config from airbnb
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
  ],
  parserOptions: {
    project: ['tsconfig.server.json', './public/tsconfig.json'],
    tsconfigRootDir: '.',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  // adds and overrides rules
  rules: {
    ...functionalRules,
    ...stylesRules
  },
};
