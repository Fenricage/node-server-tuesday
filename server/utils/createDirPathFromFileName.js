// функция для создания директорий из имени файла
const createDirPathFromFileName = (fileName, symbolsCount, step) => {

  if (fileName.length < symbolsCount || fileName.length < step) {
    // eslint-disable-next-line no-console
    console.warn('fileName is less than symbolCount or step');
    return fileName;
  }

  if (symbolsCount < step) {
    // eslint-disable-next-line no-console
    console.warn('symbolCount less than step');
    return fileName;
  }

  const firstSymbols = fileName
    .substring(0, symbolsCount)
    .split('');

  const arrWithSlashes = [];

  let i = 0;
  for (i; i < firstSymbols.length; i++) {
    arrWithSlashes.push(firstSymbols[i]);
    // индекс совпадает с размером шага?
    const isMatchStep = 0 === ((i + 1) % step);
    if (isMatchStep && ((i + 1) !== firstSymbols.length)) {
      arrWithSlashes.push('/');
    }
  }


  return arrWithSlashes.join('');

};

module.exports = createDirPathFromFileName;
