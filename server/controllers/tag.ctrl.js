const mongoose = require('mongoose');
const Tag = require('./../models/Tag');

const db = mongoose.connection;
const CLIENT_SEPARATOR = ':';

module.exports = {
  addTag: async (req, res, next) => {
    const { tags } = req.body;
    // TODO сделать провеку на типа данных и отправлятьь код ошибки и ошибку
    // TODO сделать проверку регуляркой на формат
    // TODO Вкати валидатор

    if (typeof tags !== 'string') {
      res
        .status(400)
        .send({
          error: 'Bad Request',
        });
      return;
    }


    // создаем неймспейсы и объекты тьегов
    const formattedTags = tags
      .split(',')
      .map((formattedTag) => {
        const trimmedTag = formattedTag.trim();
        const splittedTag = trimmedTag.split(CLIENT_SEPARATOR);

        const namespaces = splittedTag.reduce((accumulator, splitChunkTag) => {
          if (!accumulator.length) {
            return [splitChunkTag];
          }
          const lastNamespaceAccumulator = accumulator[accumulator.length - 1];
          const joinedWithPrevNamespace = lastNamespaceAccumulator.concat('--', splitChunkTag);
          return [...accumulator, joinedWithPrevNamespace];

        }, []);

        return {
          code: trimmedTag,
          namespaces,
        };

      });


    // опции для навального апдейта/создания
    const bulkOptions = formattedTags.map(tag => ({
      updateOne: {
        filter: {
          code: tag.code,
        },
        update: {
          $set: tag,
        },
        upsert: true,
      },
    }));


    // создание/апдейт тегов
    try {
      const result = await db.collection('tags')
        .bulkWrite(bulkOptions, { ordered: false });

      res.status(200).send(result);
    } catch (e) {
      res
        .status(400)
        .send({
          error: 'Couldnt update/create tags',
        });
    }

  },
  getAll: async (req, res, next) => {

    const total = await Tag.count();

    Tag.find({}, { __v: 0 })
      .exec((err, tags) => {
        if (err) res.send(err);
        else if (!tags) res.send(404);
        else {
          res.send({
            records: tags,
            total,
          });
        }
        next();
      });
  },
};
