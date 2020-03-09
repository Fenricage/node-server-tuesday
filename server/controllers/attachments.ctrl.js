const fs = require('fs');
const path = require('path');
const Attachment = require('../models/Attachment');
const sharpImageTransformer = require('../utils/attachments/sharpImageTransformer');


module.exports = {
  addAttachment: async (req, res, next) => {
    // возвращает объект который мы оправим на клиент
    // данный трансформер решает какой тип передан и возвращает соответствующий объект
    const attachment = await sharpImageTransformer(req);

    await new Attachment(attachment)
      .save((err, newAttachment) => {
        if (err) {
          res.send(err);
        } else if (!newAttachment) {
          res.send('There was a problem adding the information to the database');
        } else {
          console.log('INSIDE SEND');
          res
            .status(201)
            .send(newAttachment);
        }
        next();
      });
  },
  getAll: async (req, res, next) => {
    const total = await Attachment.count({});
    Attachment.find({}, { __v: 0 })
      .exec((err, attachments) => {
        if (err) res.send(err);
        else if (!attachments) res.send(404);
        else {
          res.send({
            total,
            records: attachments,
          });
        }
        next();
      });
  },
  getAttachment: async (req, res, next) => {
    const { id } = req.params;
    Attachment.findById(id)
      .exec((err, attachment) => {
        if (err) {
          res
            .status(500)
            .send({ error: 'couldnt find attachment' });
        }
        res.send(attachment);
      });
  },
  deleteAttachment: async (req, res, next) => {
    const deletingAttachment = await Attachment.findById(req.params.id);

    const deletingAttachmentDir = path.join(
      process.cwd(),
      path.dirname(deletingAttachment.img_url),
    );


    // console.log('\x1b[36m', 'fs.existsSync(deletingAttachment.img_url)' , fs.existsSync(deletingAttachment.img_url), '\x1b[0m');
    // Attachment.deleteOne({ _id: req.params.id }, (err, attachment) => {
    //   if (err) {
    //     res.send(err);
    //   } else if (!attachment.deletedCount) {
    //     res
    //       .status(404)
    //       .send({ error: 'Article not found' });
    //   } else {
    //     res.send(deletingAttachment);
    //   }
    //   next();
    // });
  },
};
