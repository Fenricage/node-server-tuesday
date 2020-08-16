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

const rules = {
  ...functionalRules,
  ...stylesRules,
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
    // TODO(@fenricage): замедляет работу eslint, ведет к ошибке - "20 sec no results from eslint"
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
  ],
  parserOptions: {
    // TODO(@fenricage): замедляет работу eslint, ведет к ошибке - "20 sec no results from eslint"
    // project: ['tsconfig.server.json'],
    // tsconfigRootDir: '.',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  // adds and overrides rules
  rules: {
    ...rules,
  },
};
