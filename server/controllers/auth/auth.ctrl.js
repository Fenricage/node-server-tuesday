const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator/check');
const config = require('../../config');

const User = require('../../models/User');
const validate = require('./validate');

module.exports = {
  registerUser: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })
      .save((err, user) => {
        if (err) {
          return res.status(500).send('There was a problem registering the user');
        }
        const token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 10, // expires in 10 seconds
        });
        res.status(200).send({ auth: true, token });
      });
  },

  getCurrentUser: (req, res, next) => {
    User.findById(req.userId, { password: 0 }, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem finding the user.');
      } if (!user) {
        return res.status(404).send('No user found.');
      }

      res
        .status(200)
        .send({
          user,
          auth: true,
        });
    });
  },

  logout: (req, res, next) => {
    res.status(200).send({ auth: false, token: null });
  },

  loginUser: (req, res, next) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        return res
          .status(500)
          .send('Error on the server.');
      }

      if (!user) {
        return res
          .status(404)
          .send('No user found.');
      }

      // проверяем что пароль валидный
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res
          .status(401)
          .send({ auth: false, token: null });
      }

      // если юзер найден и пароль норм то создаем токен
      // и устанавливаем ему время жизни
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400, // expires in 24 hours
      });

      // отдаем ок респонс, отправляем токен
      res
        .status(200)
        .set({
          'Set-Cookie': `Token=${token}; Path=/; `,
        })
        .send({ auth: true, token });
    });
  },
  validate,
};
