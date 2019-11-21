const express = require('express');
const next = require('next');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const path = require('path');
const routes = require('./routes/index');
const config = require('./config');

const nextRoutes = require('./public/routes');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || config.db;


// next




// nут раньше был NODE_DEV лол (почему?)
const dev = process.env.NODE_ENV !== 'production';
console.log('dev IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII((((((((((((((((((((((((((((((', dev, process.env.NODE_ENV)
// dir показывает гже искать pages
const nextApp = next({ dir: './public', dev });
const handler = nextRoutes.getRequestHandler(nextApp); // part of next config
// TODO: это рудимент от прошлой конфигурации, удалить если выживет верхнее решение
const handle = nextApp.getRequestHandler(); // part of next config


/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    // useMongoClient: true
    useNewUrlParser: true,
  });
} catch (error) {
  console.error(error);
}


nextApp.prepare().then(() => {
  const port = process.env.PORT || 5000;

  /** set up routes {API Endpoints} */
  routes(router);


  // кажется эта часть для SPA
  // app.use('/', express.static(path.resolve(__dirname, '../dist')));
  //
  // app.get(/^(?!.*api|.*static).*$/, (req, res) => { // отправляем index.html на все кроме запросов которые начинаются со static и api
  //   res.sendFile(path.resolve(__dirname, '../dist/index.html'));
  // });

  // здесь тогда будет для SSR








  /** set up middlewares */
  app.use(cors());
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(helmet());

  app.use('/static', express.static(path.join(__dirname, 'static')));
  app.use('/api', router);
  // тоже самое что и с SPA, обходим api и static
  // убрать static. сделать проверки напрямую по path, отменить то что начинается со /static
  // разрешить /_next

  // app.use(handler)



  app.get(/^(?!.*api).*$/, (req, res) => {
    if (!req.originalUrl.match(/^\/static/)) {
      return handler(req, res);
    }
  });


  /** start server */
  app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
  });

});
