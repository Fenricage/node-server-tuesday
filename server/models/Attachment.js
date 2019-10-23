const mongoose = require('mongoose');

const AttachmentSchema = new mongoose.Schema(
  {
    type: String,
    url: String,
    img_urls: Object,
    isLinked: Boolean,
  },
);
module.exports = mongoose.model('Attachment', AttachmentSchema);
