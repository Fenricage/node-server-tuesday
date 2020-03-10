const authcontroller = require('../controllers/auth/auth.ctrl');
const verifyToken = require('../controllers/auth/verifyToken');

module.exports = (router) => {
  router
    .route('/register')
    .post(
      authcontroller.validate('registerUser'),
      authcontroller.registerUser,
    );

  router
    .route('/me')
    .get(verifyToken, authcontroller.getCurrentUser);

  router
    .route('/logout')
    .get(verifyToken, authcontroller.logout);

  router
    .route('/login')
    .post(authcontroller.loginUser);
};
