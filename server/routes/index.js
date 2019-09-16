const user = require('./user');
const article = require('./article');
const auth = require('./auth');
const attachments = require('./attachments');
const articleCategories = require('./articleCategories');
const tag = require('./tag');

module.exports = (router) => {
  user(router);
  article(router);
  auth(router);
  attachments(router);
  articleCategories(router);
  tag(router);
};
