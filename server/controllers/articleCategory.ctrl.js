const _set = require('lodash/set');
const ArticleCategory = require('./../models/ArticleCategory');
const Article = require('./../models/Article');

module.exports = {
  getAllArticleCategories: (req, res, next) => {

    const { extra } = req.query;


    let extraParams = null;
    const extraFindParams = {};

    if (extra) {
      extraParams = JSON.parse(extra);
    }

    if (extraParams) {

      /**
       * exclude categories by field 'code' (comma-separated)
       */

      if (extraParams.exclude) {

        _set(extraFindParams, 'code.$nin', extraParams.exclude);

        extraFindParams.code.$nin = extraParams.exclude
          .split(',')
          .map(code => code.trim());

      }

    }

    ArticleCategory.find(extraFindParams, (err, articleCategories) => {
      if (err) {
        res.status(500).send('Error on article Categor' +
          'ies');
      }
      res.status(200).send(articleCategories);
      next();
    });
  },
  deleteArticleCategory: (req, res, next) => {
    ArticleCategory.deleteOne({ _id: req.params.id }, (err, articleCategories) => {
      if (err) {
        res.status(500).send('Error on article Categories');
      }
      res.status(200).send(articleCategories);
      next();
    });
  },
  getArticleCategory: (req, res, next) => {
    ArticleCategory.findById(req.params.id)
      .exec((err, articleCategory) => {
        if (err) res.send(err);
        else if (!articleCategory) res.send(404);
        else res.send(articleCategory);
        next();
      });
  },
  patchArticleCategory: async (req, res, next) => {

    // TODO (@fenricage) баг, при первом создании и патче категории оно не отрабатывает
    // кажется мангуст не может $set полян которых нет в схеме, name и _id из объекта category

    /**
     * здесь мы апдейтим все статьи с id этой категории, заменяем name, чтобы все совпадало
     */
    await Article.updateMany(
      { 'category._id': req.body._id },
      { $set: { 'category.name': req.body.name } },
      (err, result) => {
        // console.log('result', result);
      },
    );
    /**
     * обновляем категорию
     */

    ArticleCategory.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, article) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(article);
    });
  },
  // addUser: (req, res, next) => {
  //   new User(req.body).save((err, newUser) => {
  //     if (err) res.send(err);
  //     else if (!newUser) res.send('There was a problem adding the information to the database');
  //     else {
  //       res
  //         .status(201)
  //         .send(newUser);
  //     }
  //     next();
  //   });
  // },
  // getAll: (req, res, next) => {
  //   User.find({}, (err, users) => {
  //     if (err) {
  //       return res.status(500).send('There was a problem finding the users.');
  //     }
  //     return res.status(200).send(users);
  //
  //   });
  // },
  // getUser: (req, res, next) => {
  //   User.findById(req.params.id, (err, user) => {
  //     if (err) {
  //       return res.status(500).send('There was a problem finding the user.');
  //     } if (!user) {
  //       return res.status(404).send('No user found.');
  //     }
  //     return res.status(200).send(user);
  //
  //   });
  // },
  // deleteUser: (req, res, next) => {
  //   User.findByIdAndRemove(req.params.id, (err, user) => {
  //     if (err) {
  //       return res.status(500).send('There was a problem finding the user.');
  //     } if (!user) {
  //       return res.status(404).send('No user found.');
  //     }
  //     return res.status(200).send(user);
  //
  //   });
  // },
  // updateUser: (req, res, next) => {
  //   User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
  //     if (err) {
  //       return res.status(500).send('There was a problem finding the user.');
  //     }
  //     return res.status(200).send(user);
  //
  //   });
  // },
};
