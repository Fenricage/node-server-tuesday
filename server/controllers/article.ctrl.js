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
  getAll: async (req, res, next) => {


    let {
      orderBy, extra, offset, limit,
    } = req.query;

    // Приводим строчные числа к нормальным числам
    offset = Number(offset);
    limit = Number(limit);
    // если  не undefined то парсим JSON и сразу присваиваем той же переменной
    if (orderBy) {
      orderBy = JSON.parse(orderBy);
    }

    if (extra) {
      extra = JSON.parse(extra);
    }

    // доп параметры - возможно стоит вынести все жэто вычиесение в миддлвар
    // читай мануал в закладках
    const extraFindParams = {};
    if (extra) {
      if (extra.category) {
        // устанавливаем выборку по категории
        extraFindParams['category.name'] = extra.category;
      }
    }

    // высчитываем количество исходя из заданных параметров
    const total = await Article.countDocuments(extraFindParams);
    Article.find(extraFindParams, { __v: 0 })
      .sort(orderBy || {})
      .skip(offset)
      .limit(limit)
      .exec((err, articles) => {
        if (err) res.send(err);
        else if (!articles) res.send(404);
        else {
          res.send({
            records: articles,
            offset,
            limit: limit,
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
      } else if (!article.deletedCount) {
        res
          .status(404)
          .send({ error: 'Article not found' });
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
  searchArticles: (req, res, next) => {

    const { body: { search } } = req;

    const regex = new RegExp(search, 'i');


    // ищем совпадения по превью, тайтлу и всем маркдаунам
    Article.aggregate([
      {
        $match: {
          $or: [
            { preview_text: regex },
            { title: regex },
            {
              articles_meta: {
                $elemMatch: {
                  $and: [
                    { type: 'markdown' },
                    { value: regex },
                  ],
                },
              },
            },
          ],
        },
      },
    ], (err, articles) => {
      // Extract the original doc from each item
      // persons = persons.map(item => item.doc);
      res.send(articles);
    });

  },
};
