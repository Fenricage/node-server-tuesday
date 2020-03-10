const verifyToken = require('../controllers/auth/verifyToken');
const articleCategoryController = require('./../controllers/articleCategory.ctrl');

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
};
