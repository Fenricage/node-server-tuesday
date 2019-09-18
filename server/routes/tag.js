const tagcontroller = require('./../controllers/tag.ctrl');

module.exports = (router) => {

  router
    .route('/tags')
    .post(tagcontroller.addTag);

  router
    .route('/tags')
    .get(tagcontroller.getAll);

  router
    .route('/tags/:id')
    .delete(tagcontroller.deleteOne);

  router
    .route('/tags/:id')
    .get(tagcontroller.getOne);

  router
    .route('/tags/:id')
    .patch(tagcontroller.updateOne);
};
