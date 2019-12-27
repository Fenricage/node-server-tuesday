const verifyToken = require('../controllers/auth/verifyToken');
const tagcontroller = require('./../controllers/tag.ctrl');

module.exports = (router) => {

  router
    .route('/tags')
    .post(verifyToken, tagcontroller.addTag);

  router
    .route('/tags')
    .get(tagcontroller.getAll);

  router
    .route('/tags/:id')
    .delete(verifyToken, tagcontroller.deleteOne);

  router
    .route('/tags/:id')
    .get(tagcontroller.getOne);

  router
    .route('/tags/:id')
    .patch(verifyToken, tagcontroller.updateOne);
};
