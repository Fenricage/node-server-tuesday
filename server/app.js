const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const gridfs = require('gridfs-stream');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const cloudinary = require('cloudinary');
const path = require('path');
const routes = require('./routes/');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const type = req.params.type || 'trash';
//     const path = `./static/${type}`;
//     if (!fs.existsSync(path)) {
//       fs.mkdirSync(path);
//     }
//     cb(null, path);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${new Date().toISOString()}_${file.originalname}`);
//   },
// });
//
// const fileFilter = (req, file, cb) => {
//   if ('image/jpeg' === file.mimetype || 'image/png' === file.mimetype) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
//
// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5, //  5mb
//   },
//   fileFilter,
// });

const config = require('./config');
const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || config.db;


/** configure cloudinary */
// cloudinary.config({
//   cloud_name: 'chidumennamdi',
//   api_key: '',
//   api_secret: '',
// });

/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    // useMongoClient: true
    useNewUrlParser: true,
  });
} catch (error) {
  console.error(error);
}


// TEST GFS
// gridfs.mongo = mongoose.mongo;
// const connection = mongoose.connection;
//
// const db_filename = 'demo.jpg';
// const local_file = './image.jpg';
//
// connection.once('open', () => {
//   const gfs = gridfs(connection.db);
//   app.post('/api/write', (req, res) => {
//     const writestream = gfs.createWriteStream({ filename: db_filename });
//     fs.createReadStream(local_file).pipe(writestream);
//     writestream.on('close', (file) => {
//       res.send(`File Created : ${file.filename}`);
//     });
//   });
//
//   app.get('/api/read', (req, res) => {
//     gfs.exist({ filename: db_filename }, (err, file) => {
//       if (err || !file) {
//         res.send('File Not Found');
//       } else {
//         res.writeHead(200, {'Content-Type': 'image/jpeg'});
//         const readstream = gfs.createReadStream({ filename: db_filename });
//         readstream.pipe(res)
//       }
//     });
//   });
//
//   app.delete('/api/delete', (req, res) => {
//     gfs.exist({ filename: db_filename }, (err, file) => {
//       if (err || !file) {
//         res.send('File Not Found');
//       } else {
//         gfs.remove({ filename: db_filename }, (err) => {
//           if (err) res.send(err);
//           res.send('File Deleted');
//         });
//       }
//     });
//   });
//
// });
// TEST GFS

// TEST IMG
// const db_filename = 'demo.jpg';
// const local_file = './image.jpg';
// var schema = new mongoose.Schema({
//   img: { data: Buffer, contentType: String }
// });
//
// var A = mongoose.model('A', schema);
//
// const connection = mongoose.connection;
//
// connection.once('open', () => {
//   var a = new A;
//
//   app.post('/api/imgwrite', (req, res) => {
//     a.img.data = fs.readFileSync(local_file);
//     a.img.contentType = 'image/jpeg';
//     a.save(function (err, a) {
//       if (err) throw err;
//       console.log("a", a)
//       res.send({
//         status: true
//       })
//     })
//   });
//
//   app.get('/api/imgread', (req, res) => {
//     A.findById("5cbdcb189e630ece68bf2733", (err, doc) => {
//       console.log("doc", doc)
//       if(err) return next(err)
//       res.contentType("image/jpeg")
//       console.log("doc.img.data", doc.img.data)
//       const buffer = Buffer.from(doc.img.data, 'base64').toString('binary')
//       res.send(buffer)
//     })
//   });
// });

// TEST IMG


// TEST MULTER
// mongoose.connection.once('open', () => {
//   app.post('/api/writeimg/:type', multerStorage.single('image'), (req, res) => {
//     // console.log("req", req)
//     res.send({
//       path: `http://localhost:5000/${req.file.path}`,
//     });
//   });
// });
// TEST MULTER


const port = 5000 || process.env.PORT;

/** set up routes {API Endpoints} */
routes(router);

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get(/^(?!.*api|.*static).*$/, (req, res, next) => { // send static to all, but not to api route and static folder
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});


/** set up middlewares */
app.use(cors());
app.use(bodyParser.json());
app.use(expressValidator());
app.use(helmet());

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/api', router);

/** start server */
app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
