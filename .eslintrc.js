module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // наследует eslint конфиг от airbnb
  // prettier/* отменяют правила eslint которые могут конфликтовать с prettier (ВАЖНО - подключать всегда последними, для переопределения)
  extends: [
    'airbnb',
    'plugin:prettier/recommended', // связывает конфиг prettier и плагин, а ТАКЖЕ дублирует правила prettier в eslint, возволяя тем самым при помощи команды Fix Eslint Problems устранять заодно и Prettier Problems
    'prettier', // отключает конфликтующтие правила eslint js с prettier
    'prettier/react', // отключает конфликтующтие правила eslint react с prettier
    'prettier/standard', // отключает конфликтующтие правила eslint js с prettier
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  // добавление и переопределение правил
  rules: {
    // штука для next-овских ссылок, проверяет атрибуты
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
      },
    ],
    // буквальное значение условия идет первым, а переменная - вторым
    // if ("red" === color) {}
    'yoda': [
      'error',
      'always',
      {
        onlyEquality: true,
      },
    ],
    'no-underscore-dangle': 'error', // регулирует подобные "висячие"  названия в идентификаторах _foo
    'no-plusplus': 'off', // регулирует унарные опреаторы -- и ++
    'react-hooks/rules-of-hooks': 'error', // правила хуков для заполнения deps в эффектах
    'react-hooks/exhaustive-deps': 'warn', // правила хуков для заполнения deps в эффектах
  },
};
