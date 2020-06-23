const mongoose = require('mongoose');

const AttachmentSchema = new mongoose.Schema(
  {
    type: String,
    img_url: String,
    img_urls: Object,
    isLinked: Boolean,
    originalName: String,
    original: String,
    meta: Object,
  },
);

module.exports = mongoose.model('Attachment', AttachmentSchema);
