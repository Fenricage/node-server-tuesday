const usercontroller = require('./../controllers/users.ctrl');

module.exports = (router) => {
  router
    .route('/user')
    .post(usercontroller.addUser);

  router
    .route('/users')
    .get(usercontroller.getAll);

  router
    .route('/user/:id')
    .get(usercontroller.getUser);

  router
    .route('/user/:id')
    .delete(usercontroller.deleteUser);

  router
    .route('/user/:id')
    .put(usercontroller.updateUser);
};
