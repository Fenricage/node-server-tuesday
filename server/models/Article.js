const mongoose = require('mongoose');
const TagSchema = require('./Tag').schema;

const ArticleSchema = new mongoose.Schema(
  {
    title: String,
    category: {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
    preview_img: Object,
    preview_text: String,
    articles_meta: Array,
    tags: [ TagSchema ],
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
);

ArticleSchema.methods.saveArticle = function (cb) {
  console.log('this', this);
};


// let ArticleSchema = new mongoose.Schema(
//     {
//         text: String,
//         title: String,
//         description: String,
//         feature_img: String,
//         claps: Number,
//         author: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User'
//         },
//         comments: [
//             {
//                 author: {
//                     type: mongoose.Schema.Types.ObjectId,
//                     ref: 'User'
//                 },
//                 text: String
//             }
//         ]
//     }
// );

// ArticleSchema.methods.clap = function () {
//     this.claps++
//     return this.save()
// }
//
// ArticleSchema.methods.comment = function (c) {
//     this.comments.push(c)
//     return this.save()
// }
//
// ArticleSchema.methods.addAuthor = function (author_id) {
//     this.author = author_id
//     return this.save()
// }
//
// ArticleSchema.methods.getUserArticle = function (_id) {
//     Article.find({'author': _id}).then((article) => {
//         return article
//     })
// }

module.exports = mongoose.model('Article', ArticleSchema);
