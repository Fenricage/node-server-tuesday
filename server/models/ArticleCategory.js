const mongoose = require('mongoose');

const ArticleCategorySchema = new mongoose.Schema(
  {
    _id: String,
  },
);

module.exports = mongoose.model('ArticleCategory', ArticleCategorySchema);
