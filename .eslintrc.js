module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  // наследует eslint конфиг от airbnb
  extends: 'airbnb',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
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
    'indent': 'off', // отключаем правило индентации, это ответственность prettier
    'semi': 'off', // отключаем правило точки с запятой, это ответственность prettier
    'comma-dangle': 'off', // отключаем правило запятой, это ответственность prettier
    'jsx-quotes': 'off', // отключаем правило кавычек в jsx, это ответственность prettier
    'object-curly-spacing': 'off', // отключаем правило расстояний между в скобках литералов объектов, это ответственность prettier
    'max-len': 'off', // отключаем макс длину, это ответственность prettier
  },
};
