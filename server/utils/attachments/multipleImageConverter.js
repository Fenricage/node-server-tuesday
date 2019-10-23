const fs = require('fs');
const uuid = require('uuid');
const mime = require('mime-types');
const sharp = require('sharp');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const path = require('path');
const createDirPathFromFileName = require('../createDirPathFromFileName');


const testParamsList = [
  {
    resize: {
      width: 1500,
      height: 788,
      fit: 'contain',
      background: 'rgba(100, 8, 40, 1)',
    },
    format: {
      value: 'png',
      options: {
        quality: 70,
      },
    },
  },
  {
    resize: {
      width: 700,
      height: 514,
      fit: 'contain',
      background: 'rgba(100, 8, 40, 1)',
    },
    format: {
      value: 'png',
      options: {
        quality: 70,
      },
    },
  },
];

const multipleImageConverter = async (req, paramsList = testParamsList) => {
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
  // TODO: добавить размеры в виде _200x300

  return Promise.all(
    paramsList.map(async (item, index) => {
      const image = await sharp(req.file.path)
        .resize({
          ...item.resize,
        })
        [item.format.value]({ ...item.format.value.options })
        .toBuffer();

      const imagePath = path.join(fullDirPath, `${uniqFileName}__${item.resize.width}x${item.resize.height}.${extension}`);
      console.log('imagePath', imagePath);
      await fs.writeFile(imagePath, image, (err) => {
        if (err) {
          console.log('err to write file', err);
        }
      });

      return 'done';

    }),
  );
};


module.exports = multipleImageConverter
