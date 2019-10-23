const fs = require('fs');
const uuid = require('uuid');
const mime = require('mime-types');
const sharp = require('sharp');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const path = require('path');

const multipleImageConverter = require('./multipleImageConverter');
const createDirPathFromFileName = require('../createDirPathFromFileName');

const sharpImageTransformer = async (req) => {
  // тип изображения, флаг для того чтобы понять чо это и откуда
  const { type } = req.params;
  const { destination } = req.file;

  // достаем ext
  const extension = mime.extension(req.file.mimetype); // без точки - пример: jpeg
  // создаем уникальное имя
  const uniqFileName = uuid.v4();
  //  формируем 3 папки из нового имени
  const extraDirPath = createDirPathFromFileName(uniqFileName, 6, 2);


  const fullDirPath = path.join(destination, extraDirPath);
  // проверяем что директория существует
  const isDirExist = fs.existsSync(fullDirPath);

  if (!isDirExist) {
    await mkdir(path.join(destination, extraDirPath), { recursive: true });
  }

  // путь в который сохранится преобразованное изображение
  const imagePath = path.join(fullDirPath, `${uniqFileName}.${extension}`);

  // по умолчанию тут fit === cover, обрезается чтобы соответствовать
  const image = await sharp(req.file.path)
    .resize({
      width: 1500,
      height: 788,
      fit: 'contain',
      background: 'rgba(100, 8, 40, 1)',
    })
    .png({ quality: 70 })
    .toBuffer();


  await fs.writeFile(imagePath, image, (err) => {
    if (err) {
      console.log('err to write file', err);
    }
  });


  const testTEST = await multipleImageConverter(req);
  console.log('testTEST', testTEST);
  // эта хуйня удаляет файл указанный в пути - оригинальное непреобразованное изображение
  // юзать строго после сохранения всех преобразованных атачментов
  fs.unlinkSync(req.file.path);


  if ('articlePreview' === type) {
    return {
      type: req.file.mimetype,
      url: `/${imagePath}`,
      img_urls: {
        _300: 'https://test_300',
        _700: 'https://test_700',
      },
    };
  }

  return {
    type: req.file.mimetype,
    url: `/${imagePath}`,
    isLinked: false,
  };
};

module.exports = sharpImageTransformer;
