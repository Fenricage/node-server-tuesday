const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const config = require('../../config'); // get our config file

const verifyToken = (req, res, next) => {
  // check header or url parameters or post parameters for token
  const token = req.headers['x-access-token'];
  if (!token) {
    return res
      .status(403)
      .send({ auth: false, message: 'No token provided.' });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.secret, (err, decoded) => {
    console.log('\x1b[36m', 'decoded', decoded, '\x1b[0m');

    if (!decoded) {
      return res
        .status(403)
        // .status(403)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    }

    if (err) {
      return res
        .status(500)
        // .status(403)
        .send({ auth: false, message: 'Failed to authenticate token.' });
    }
    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
};

module.exports = verifyToken;
