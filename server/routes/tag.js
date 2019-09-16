const tagcontroller = require('./../controllers/tag.ctrl');

module.exports = (router) => {

  router
    .route('/tags')
    .post(tagcontroller.addTag);

  router
    .route('/tags')
    .get(tagcontroller.getAll);
};
