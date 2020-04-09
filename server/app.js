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

const nextRoutes = require('../public/routes');

const app = express();
const router = express.Router();

const url = process.env.MONGODB_URI || config.db;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dir: '../public', dev }); // dir - indicate where pages
const handler = nextRoutes.getRequestHandler(nextApp); // part of next config


// connect to MongoDB datastore
try {
  mongoose.connect(url, {
    useNewUrlParser: true,
  });
} catch (error) {
  console.error(error);
}


nextApp.prepare().then(() => {
  const port = process.env.PORT || 5000;

  // set up routes {API Endpoints}
  routes(router);
  // set up middlewares
  app.use(cors());
  app.use(bodyParser.json());
  app.use(expressValidator());
  app.use(helmet());
  app.use('/static', express.static(path.join(__dirname, 'static')));
  app.use('/api', router);

  app.get(/^(?!.*api).*$/, (req, res) => {
    if (!req.originalUrl.match(/^\/static/)) {
      return handler(req, res);
    }
  });

  // start server
  app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
  });
});
