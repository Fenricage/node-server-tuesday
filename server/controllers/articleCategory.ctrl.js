const ArticleCategory = require('./../models/ArticleCategory');

module.exports = {
  getAllArticleCategories: (req, res, next) => {
    ArticleCategory.find({}, (err, articleCategories) => {
      if (err) {
        res.status(500).send('Error on article Categories');
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
  patchArticleCategory: (req, res, next) => {
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
