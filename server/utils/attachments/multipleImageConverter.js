const fs = require('fs');
const uuid = require('uuid');
const mime = require('mime-types');
const sharp = require('sharp');
const { promisify } = require('util');

const mkdir = promisify(fs.mkdir);
const path = require('path');
const createDirPathFromFileName = require('../createDirPathFromFileName');


// TODO написать дефолт paramsList - вынести в отдельный модуль как обхект просто
const multipleImageConverter = async (req, paramsList) => {
  const { destination } = req.file;

  console.log('\x1b[36m', 'req.file' , req.file, '\x1b[0m');
  // достаем ext
  const extension = mime.extension(req.file.mimetype); // без точки - пример: jpeg
  // создаем уникальное имя
  const uniqFileName = uuid.v4();
  //  формируем 3 папки из нового имени
  const extraDirPath = createDirPathFromFileName(uniqFileName, 6, 2);
  console.log('\x1b[36m', 'destination' , destination, '\x1b[0m');
  const fullDirPath = path.join(destination, extraDirPath);
  // проверяем что директория существует
    console.log('\x1b[36m', 'extraDirPath' , extraDirPath, '\x1b[0m');
    console.log('\x1b[36m', 'fullDirPath' , fullDirPath, '\x1b[0m');
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
        //  TODO нужно переключение форматов
        })[`${item.format.value}`]({ progressive: true })
        .toBuffer();

      const imagePath = path.join(fullDirPath, `${uniqFileName}_${item.resize.width}x${item.resize.height}.${extension}`);

      await fs.writeFile(imagePath, image, (err) => {
        if (err) {
          console.log('err to write file', err);
        }
      });


      // метим главное изображение для того чтобы поместить данное свойство в модель
      // ширина понадобится для именования свойств
      return {
        mainImg: item.mainImg || false,
        url: imagePath,
        width: item.resize.width,
      };

    }),
  )
    .then((allAttachmentsData) => {

      // гововим итоговый обхект со ссылкой на главное изображениеё
      // и также со всем другими разрешениями данной пикчи
      const resultImgData = {
        img_url: '',
        img_urls: {},
      };

      allAttachmentsData.forEach((attachmentData, index, arr) => {
        // проверяем не главное ли это изображение
        // нужно по сути просто для удобства
        // если длина массива равна 1 то при любом раскладе пишем url в главное поле
        // WARNING: слеш тут обязателен!!
        if (1 === arr.length) {
          resultImgData.img_url = `/${attachmentData.url}`;
        } else if (attachmentData.mainImg) {
          resultImgData.img_url = `/${attachmentData.url}`;
        }


        // именуем добавочынй изображения в зависимости от их ширины
        resultImgData.img_urls[`_${attachmentData.width}`] = `/${attachmentData.url}`;
      });

      // эта хуйня удаляет файл указанный в пути - оригинальное непреобразованное изображение
      // юзать строго после сохранения всех преобразованных атачментов
      fs.unlinkSync(req.file.path);
      return resultImgData;
    });
};


module.exports = multipleImageConverter;
