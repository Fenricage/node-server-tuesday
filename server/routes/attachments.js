const attachmentcontroller = require('../controllers/attachments.ctrl');
const multerStorage = require('../utils/multerStorage');

module.exports = (router) => {

  /**
   * set images
   */
  // TODO мб стоит обработвать и научить добавлять любые файлы?
  router
    .route('/writeimg/:type')
    .post(multerStorage.single('image'), attachmentcontroller.addAttachment);
  //
  // /**
  //  * add an article
  //  */
  // router
  //   .route('/article')
  //   .post(multipartWare, articlecontroller.addArticle);
  //
  // /**
  //  * clap on an article
  //  */
  // router
  //   .route('/article/clap')
  //   .post(articlecontroller.clapArticle);
  //
  // /**
  //  * comment on an article
  //  */
  // router
  //   .route('/article/comment')
  //   .post(articlecontroller.commentArticle);
  //
  // /**
  //  * get a particlular article to view
  //  */
  // router
  //   .route('/article/:id')
  //   .get(articlecontroller.getArticle);
  //
  // router
  //   .route('/article/:id')
  //   .delete(articlecontroller.deleteArticle);
  //
  // router
  //   .route('/article/:id')
  //   .patch(articlecontroller.patchArticle);
  //
  // router
  //   .route('/upload')
  //   .post(async (req, res, next) => {
  //
  //   });
};
