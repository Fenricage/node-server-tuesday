const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.params.type || 'trash';
    const path = `./static/${type}`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if ('image/jpeg' === file.mimetype || 'image/png' === file.mimetype) {
    console.log("req.params", req.params)
    console.log("file", file)
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5, //  5mb
  },
  fileFilter,
});

module.exports = upload;
