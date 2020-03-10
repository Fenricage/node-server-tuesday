const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    code: String,
    namespaces: Array,
  },
);

module.exports = mongoose.model('Tag', TagSchema);
