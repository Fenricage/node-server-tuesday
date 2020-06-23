const fs = require('fs');
const multer = require('multer');
const uuid = require('uuid');

const storage = multer.diskStorage({

  // run first
  destination: (req, file, cb) => {
    // определяем в какую папку класть по типу
    const type = req.params.type || 'trash';

    const originalDestination = `./static/${type}/originals`;

    // destination for resized files
    file.destinationPath = `./static/${type}`;


    // создаем если папки еще нет
    if (!fs.existsSync(originalDestination)) {
      fs.mkdirSync(
        originalDestination,
        { recursive: true },
        err => console.error('mkdirSync couldnot create new directories', err),
      );
    }

    cb(null, originalDestination);
  },
  // run second
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
