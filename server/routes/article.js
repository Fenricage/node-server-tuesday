const multipart = require('connect-multiparty');
const articlecontroller = require('./../controllers/article.ctrl');
const verifyToken = require('../controllers/auth/verifyToken');

const multipartWare = multipart();

module.exports = (router) => {

  /**
     * get all articles
     */
  router
    .route('/articles')
    .get(articlecontroller.getAll);

  /**
     * add an article
     */
  router
    .route('/article')
    .post(verifyToken, multipartWare, articlecontroller.addArticle);

  /**
     * clap on an article
     */
  router
    .route('/article/clap')
    .post(verifyToken, articlecontroller.clapArticle);

  /**
     * comment on an article
     */
  router
    .route('/article/comment')
    .post(verifyToken, articlecontroller.commentArticle);

  /**
     * get a particlular article to view
     */

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
