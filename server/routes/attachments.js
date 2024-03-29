const attachmentcontroller = require('../controllers/attachments.ctrl');
const multerStorage = require('../utils/multerStorage');

module.exports = (router) => {
  router
    .route('/attachments')
    .get(
      attachmentcontroller.getAll,
    );

  router
    .route('/attachments/:type')
    .post(
      multerStorage.single('image'),
      attachmentcontroller.addAttachment,
    );

  router
    .route('/attachments/:id')
    .get(
      attachmentcontroller.getAttachment,
    );

  router
    .route('/attachments/:id')
    .delete(
      attachmentcontroller.deleteAttachment,
    );
};
