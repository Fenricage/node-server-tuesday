const multipart = require('connect-multiparty');
const articlecontroller = require('./../controllers/article.ctrl');
const verifyToken = require('../controllers/auth/verifyToken');

const multipartWare = multipart();

module.exports = (router) => {
  router
    .route('/articles')
    .get(articlecontroller.getAll);

  router
    .route('/article')
    .post(verifyToken, multipartWare, articlecontroller.addArticle);

  router
    .route('/article/clap')
    .post(verifyToken, articlecontroller.clapArticle);

  router
    .route('/article/comment')
    .post(verifyToken, articlecontroller.commentArticle);

  router
    .route('/article/search')
    .post(articlecontroller.searchArticles);

  router
    .route('/article/:id')
    .get(articlecontroller.getArticle);

  router
    .route('/article/:id')
    .delete(verifyToken, articlecontroller.deleteArticle);

  router
    .route('/article/:id')
    .patch(verifyToken, articlecontroller.patchArticle);
};
