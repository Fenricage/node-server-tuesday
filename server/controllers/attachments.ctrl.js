const Attachment = require('../models/Attachment');

module.exports = {
  addAttachment: (req, res, next) => {

    const attachmentData = {
      type: req.file.mimetype,
      url: `http://localhost:5000/${req.file.path}`,
      isLinked: false,
    };

    new Attachment(attachmentData)
      .save((err, newAttachment) => {
        if (err) {
          res.send(err);
        } else if (!newAttachment) {
          res.send('There was a problem adding the information to the database');
        } else {
          res
            .status(201)
            .send(newAttachment);
        }
        next();
      });
  },
};
