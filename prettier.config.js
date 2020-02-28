module.exports = {
  trailingComma: 'all', // везде где возможно ставим завершающие запятые
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  quoteProps: 'consistent', // если хоть одно свойство в объекте требует кавычек то заключить все свойства в кавычки
  jsxSingleQuote: false, // в jsx используем двойные кавычки
  bracketSpacing: true, // { foo: bar } расстояние между сколбками
  jsxBracketSameLine: false, // автоматически выставляет закрывающую > в jsx-компонентах в новую строку
  arrowParens: 'always', // всегда (x) => x, не x => x,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.tsx', '*.ts'],
      options: {

      },
    }
  ],
};
