const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({

  // выполняется первым
  destination: (req, file, cb) => {
    // определяем в какую папку класть по типу
    const type = req.params.type || 'trash';

    const path = `./static/${type}`;

    // создаем если папки еще нет
    if (!fs.existsSync(path)) {
      fs.mkdirSync(
        path,
        { recursive: true },
        err => console.error('mkdirSync couldnot create new directories', err),
      );
    }

    cb(null, path);
  },
  // выполняется вторым
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if ('image/jpeg' === file.mimetype || 'image/png' === file.mimetype || 'image/gif' === file.mimetype) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 10, //  5mb
  },
  fileFilter,
});

module.exports = upload;
