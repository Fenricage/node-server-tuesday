module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
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
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "linebreak-style": 0,
    quotes: [
      "error",
      "single"
    ],
    semi: [
      "error",
      "always"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    yoda: [
      "error",
      "always",
      {
        onlyEquality: true
      }
    ],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "import/no-unresolved": "off",
    "padded-blocks": ["error", {"classes": "always"}],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
