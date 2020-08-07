const mongoose = require('mongoose');
const Tag = require('./../models/Tag');

const db = mongoose.connection;
const CLIENT_SEPARATOR = ':';

const formatTagsFromCommonSeparated = (tags, separator) => tags
  .split(',')
  .map((formattedTag) => {
    const trimmedTag = formattedTag.trim();
    const splittedTag = trimmedTag.split(separator);

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
    const formattedTags = formatTagsFromCommonSeparated(tags, CLIENT_SEPARATOR);


    // опции для навального апдейта/создания
    const bulkOptions = formattedTags.map(tag => ({
      updateOne: {
        filter: {
          code: tag.code,
        },
        update: {
          $setOnInsert: tag,
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

    const total = await Tag.estimatedDocumentCount();

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
  deleteOne: async (req, res, next) => {
    const { id } = req.params;
    const deletingTag = await Tag.findById(id);

    Tag.deleteOne({ _id: id }, (err, tag) => {
      if (err) {
        res.send(err);
      } else if (!tag.deletedCount) {

        res
          .status(404)
          .send({ error: 'Tag not found' });
      } else {
        res.send(deletingTag);
      }
      next();
    });
    // return res.send(deletingTag)
    // try {
    //   await Tag.findOneAndDelete({ _id: id }, (err, tag) => {
    //     if (err) {
    //       return res
    //         .status(400)
    //         .send({ error: 'Couldnt delete tag' });
    //     }
    //     if (!tag) {
    //       console.log('\x1b[36m', 'ERR' , tag, '\x1b[0m');
    //       return res
    //         .status(404)
    //         .send({
    //           tag,
    //           error: 'Couldn found tag',
    //         });
    //     }
    //     return res
    //       .status(200)
    //       .send(tag);
    //   });
    // } catch (e) {
    //   return res
    //     .status(400)
    //     .send({ error: 'Couldnt delete tag ERROR ' });
    // }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Tag.findOne({ _id: id }, (err, tag) => {
        if (err) {
          res.status(400).send({ error: 'Couldnt find tag' });
        }
        if (!tag) {
          res
            .status(404)
            .send({});
        }
        res
          .status(200)
          .send(tag);
      });
    } catch (e) {
      res.status(400).send({ error: 'Couldnt delete tag ERROR ' });
    }
  },
  updateOne: async (req, res, next) => {
    const { id } = req.params;
    const { code } = req.body;

    // TODO привести к функции для одного тега, сделать проверку мб внутри функции?
    const formattedTagTest = formatTagsFromCommonSeparated(code, CLIENT_SEPARATOR);
    const formattedTag = formatTagsFromCommonSeparated(code, CLIENT_SEPARATOR)[0];
    // FIXME заменить на useFindAndModify
    Tag.findOneAndUpdate({ _id: id }, formattedTag, { new: false }, (err, tag) => {
      if (err) {
        return res.status(500).send(err);
      }
      // отсылает предыдущее состояние, типа до изменения хз нужно ли это
      return res.send(tag);
    });
  },
};
