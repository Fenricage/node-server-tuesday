const Attachment = require('../models/Attachment');
const sharpImageTransformer = require('../utils/attachments/sharpImageTransformer');


module.exports = {
  addAttachment: async (req, res, next) => {

    // возвращает объект который мы оправим на клиент
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
};
