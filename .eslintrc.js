module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  // наследует eslint конфиг от airbnb
  extends: "airbnb",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks"
  ],
  rules: {
    // штука для nextовских ссылок, проверяет атрибуты
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: [
          "Link"
        ],
        specialLink: [
          "to"
        ]
      }
    ],
    // буквальное значение условия идет первым, а переменная - вторым
    // if ("red" === color) {}
    yoda: [
      "error",
      "always",
      {
        onlyEquality: true
      }
    ],
    "no-underscore-dangle": "error", // регулирует подобные "висячие"  названия в идентификаторах _foo
    "no-plusplus": "off", // регулирует унарные опреаторы -- и ++
    "react-hooks/rules-of-hooks": "error", // правила хуков для заполнения deps в эффектах
    "react-hooks/exhaustive-deps": "warn", // правила хуков для заполнения deps в эффектах
  }
};
