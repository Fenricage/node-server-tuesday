const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const expressValidator = require('express-validator');
const path = require('path');
const routes = require('./routes/');

const config = require('./config');

const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || config.db;


/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
    // useMongoClient: true
    useNewUrlParser: true,
  });
} catch (error) {
  console.error(error);
}


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
