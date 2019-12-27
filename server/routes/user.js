const verifyToken = require('../controllers/auth/verifyToken');
const usercontroller = require('./../controllers/users.ctrl');

module.exports = (router) => {
  router
    .route('/user')
    .post(verifyToken, usercontroller.addUser);

  router
    .route('/users')
    .get(usercontroller.getAll);

  router
    .route('/user/:id')
    .get(usercontroller.getUser);

  router
    .route('/user/:id')
    .delete(verifyToken, usercontroller.deleteUser);

  router
    .route('/user/:id')
    .put(verifyToken, usercontroller.updateUser);
};
