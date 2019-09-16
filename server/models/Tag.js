const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema(
  {
    code: String,
    namespaces: Array,
    // title: String,
    // category: {
    //   _id: mongoose.Schema.Types.ObjectId,
    //   name: String,
    // },
    // preview_img: Object,
    // preview_text: String,
    // articles_meta: Array,
    // created_at: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
);

module.exports = mongoose.model('Tag', TagSchema);
