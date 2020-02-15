const mongoose = require('mongoose');

const ArticleCategorySchema = new mongoose.Schema(
  {
    name: String,
    code: String,
  },
);

module.exports = mongoose.model('ArticleCategory', ArticleCategorySchema);
