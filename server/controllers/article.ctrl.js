const Article = require('./../models/Article');
const Attachment = require('./../models/Attachment');
const ArticleCategory = require('./../models/ArticleCategory');

const saveArticle = (req, res, next) => {
  new Article(req.body).save((err, newArticle) => {
    if (err) {
      res.send(err);
    } else if (!newArticle) {
      res.send('There was a problem adding the information to the database');
    } else {
      /**
       * получаем articles_meta и достаем все attachments
       * устанавливаем моделям аттачментов знаечение isLinked: true
       * для тоого чтобы обозначить что аттачмент используется в системе
       */
      const articlesMeta = newArticle.articles_meta;
      const attachments = articlesMeta.filter(metaItem => 'attachment' === metaItem.type);
      attachments.forEach((attachment) => {
        Attachment.findByIdAndUpdate(
          attachment.value._id,
          { isLinked: true },
          { new: true },
          (err, attachment) => {
            if (err) {
              res.status(500).send(err);
            }
          },
        );
      });
      res
        .status(201)
        .send(newArticle);
    }

    next();

  });
};

module.exports = {
  addArticle: (req, res, next) => {
    /**
     * проверям на наличие поле req.body.category
     */
    if (req.body.category) {
      /**
       * ищем существует ли уже данная категория
       */
      ArticleCategory.findById(req.body.category, (err, articleCategory) => {
        if (err) {
          res.send('Article category err');
        }
        if (!articleCategory) {
          /**
           * если нет то создаем новую
           */
          new ArticleCategory({ _id: req.body.category }).save((err, newArticleCategory) => {
            saveArticle(req, res, next);
          });
        } else {
          /**
           * если есть то просто сохраняем
           */
          saveArticle(req, res, next);
        }
      });
    }

  },
  // addArticle: (req, res, next) => {
  //     let {text, title, claps, description} = req.body
  //     //let obj = { text, title, claps, description, feature_img: _feature_img != null ? `/uploads/${_filename}` : '' }
  //     if (req.files.image) {
  //
  //         cloudinary.uploader.upload(req.files.image.path, (result) => {
  //             let obj = {text, title, claps, description, feature_img: result.url != null ? result.url : ''}
  //             saveArticle(obj)
  //         }, {
  //             resource_type: 'image',
  //             eager: [
  //                 {effect: 'sepia'}
  //             ]
  //         })
  //     } else {
  //         saveArticle({text, title, claps, description, feature_img: ''})
  //     }
  //
  //     function saveArticle(obj) {
  //         new Article(obj).save((err, article) => {
  //             if (err)
  //                 res.send(err)
  //             else if (!article)
  //                 res.send(400)
  //             else {
  //                 return article.addAuthor(req.body.author_id).then((_article) => {
  //                     return res.send(_article)
  //                 })
  //             }
  //             next()
  //         })
  //     }
  // },
  getAll: (req, res, next) => {
    Article.find(req.params.id)
      .populate('author')
      .populate('comments.author').exec((err, article) => {
        if (err) res.send(err);
        else if (!article) res.send(404);
        else res.send(article);
        next();
      });
  },

  /**
     * article_id
     */
  clapArticle: (req, res, next) => {
    Article.findById(req.body.article_id).then(article => article.clap().then(() => res.json({ msg: 'Done' }))).catch(next);
  },

  /**
     * comment, author_id, article_id
     */
  commentArticle: (req, res, next) => {
    Article.findById(req.body.article_id).then(article => article.comment({
      author: req.body.author_id,
      text: req.body.comment,
    }).then(() => res.json({ msg: 'Done' }))).catch(next);
  },

  /**
     * article_id
     */
  getArticle: (req, res, next) => {
    Article.findById(req.params.id)
      .populate('author')
      .populate('comments.author').exec((err, article) => {
        if (err) res.send(err);
        else if (!article) res.send(404);
        else res.send(article);
        next();
      });
  },
  deleteArticle: async (req, res, next) => {
    const deletingArticle = await Article.findById(req.params.id);
    Article.deleteOne({ _id: req.params.id }, (err, article) => {
      if (err) {
        res.send(err);
      } else {
        res.send(deletingArticle);
      }
      next();
    });
  },
  patchArticle: async (req, res, next) => {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, article) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(article);
    });
  },
};
