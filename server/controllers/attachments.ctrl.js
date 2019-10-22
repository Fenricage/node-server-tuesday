const fs = require('fs');
const uuid = require('uuid');
const mime = require('mime-types');
const sharp = require('sharp');
const { promisify } = require('util');
// const mkdirp = require('mkdirp');
const mkdir = promisify(fs.mkdir);
const path = require('path');
const Attachment = require('../models/Attachment');
const createDirPathFromFileName = require('../utils/createDirPathFromFileName');


module.exports = {
  addAttachment: async (req, res, next) => {

    // тип изображения, флаг для того чтобы понять чо это и откуда
    const { type } = req.params;
    const { destination } = req.file;

    console.log('destination', destination);
    // достаем ext, создаем уникальное имя, формируем 3 папки из нового имени
    const extension = mime.extension(req.file.mimetype); // без точки - пример: jpeg
    const uniqFileName = uuid.v4();
    const extraDirPath = createDirPathFromFileName(uniqFileName, 6, 2);


    const fullDirPath = path.join(destination, extraDirPath);
    console.log('fullDirPath', fullDirPath);
    const isDirExist = fs.existsSync(fullDirPath);
    if (!isDirExist) {
      await mkdir(path.join(destination, extraDirPath), { recursive: true });
    }


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

    const imagePath = path.join(fullDirPath, `${uniqFileName}.${extension}`);


    await fs.writeFile(imagePath, image, (err) => {
      if (err) {
        console.log('err to write file', err);
      }
    });

    // эта хуйня удаляет файл указанный в пути
    // юзать строго после сохранения всех преобразованных атачментов
    fs.unlinkSync(req.file.path);


    const attachmentData = {
      type: req.file.mimetype,
      url: `/${imagePath}`,
      isLinked: false,
    };


    await new Attachment(attachmentData)
      .save((err, newAttachment) => {
        if (err) {
          res.send(err);
        } else if (!newAttachment) {
          res.send('There was a problem adding the information to the database');
        } else {
          console.log('INSIDE SEND');
          res
            .status(201)
            .send(newAttachment);
        }
        next();
      });


  },
  getAttachment: async (req, res, next) => {
    const { id } = req.params;
    Attachment.findById(id)
      .exec((err, attachment) => {
        if (err) {
          res
            .status(500)
            .send({ error: 'couldnt find attachment' });
        }
        res.send(attachment);
      });
  },
};
