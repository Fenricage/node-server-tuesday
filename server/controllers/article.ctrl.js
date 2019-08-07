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
      const findArticleCategoryQuery = { name: req.body.category };
      const createArticleCategoryQuery = { name: req.body.category };
      /**
       * в зависимости от типа данных category выполняем сохранение статьи с
       * проверкой на существование
       * если строка то есть шанс что такой категории еще нет
       * в случае же с объектом мы уверены что категория уже существует
       * (TODO: существует ли? стоит ли делать проверку?)
       */
      if ('string' === typeof req.body.category) {
        /**
         * ищем существует ли уже данная категория
         */
        ArticleCategory.findOne(findArticleCategoryQuery, (err, articleCategory) => {
          if (err) {
            res.send('Article category err');
          }
          if (!articleCategory) {
            /**
             * если нет то создаем новую
             * и линкуем объект категории
             */
            new ArticleCategory(createArticleCategoryQuery).save((err, newArticleCategory) => {
              req.body.category = newArticleCategory;
              saveArticle(req, res, next);
            });
          } else {
            /**
             * если есть то просто сохраняем
             * и линкуем объект категории
             * TODO: версию __v убери епты
             */
            req.body.category = articleCategory;
            saveArticle(req, res, next);
          }
        });
      } else if ('object' === typeof req.body.category) {
        saveArticle(req, res, next);
      }
    } else {
      saveArticle(req, res, next);
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
  getAll: async (req, res, next) => {

    let { page, size, orderBy } = req.query;

    // Приводим строчные числа к нормальным числам
    page = Number(page);
    size = Number(size);
    //если  не undefined то парсим JSON и сразу присваиваем той же переменной
    if (orderBy) {
      orderBy = JSON.parse(orderBy);
    }

    const offset = size * page - size;
    const total = await Article.count();
    Article.find({}, { __v: 0 })
      .sort(orderBy || {})
      .skip(offset)
      .limit(size)
      .exec((err, articles) => {
        if (err) res.send(err);
        else if (!articles) res.send(404);
        else {
          res.send({
            records: articles,
            offset,
            limit: size,
            total,
          });
        }
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
  patchArticle: (req, res, next) => {
    Article.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, article) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(article);
    });
  },
};
