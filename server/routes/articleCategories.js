const verifyToken = require('../controllers/auth/verifyToken');
const articleCategoryController = require('./../controllers/articleCategory.ctrl')

module.exports = (router) => {
  router
    .route('/articles/categories')
    .get(articleCategoryController.getAllArticleCategories);
  router
    .route('/articles/categories/:id')
    .delete(verifyToken, articleCategoryController.deleteArticleCategory);
  router
    .route('/articles/categories/:id')
    .get(articleCategoryController.getArticleCategory);
  router
    .route('/articles/categories/:id')
    .patch(verifyToken, articleCategoryController.patchArticleCategory);
  //
  // router
  //   .route('/users')
  //   .get(usercontroller.getAll);
  //
  // router
  //   .route('/user/:id')
  //   .get(usercontroller.getUser);
  //
  // router
  //   .route('/user/:id')
  //   .delete(usercontroller.deleteUser);
  //
  // router
  //   .route('/user/:id')
  //   .put(usercontroller.updateUser);
};
