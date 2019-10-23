const multipleImageConverter = require('./multipleImageConverter');

const testParamsList = [
  {
    resize: {
      width: 1500,
      height: 788,
      fit: 'contain',
      background: 'rgba(100, 8, 40, 1)',
    },
    format: {
      value: 'png',
      options: {
        quality: 70,
      },
    },
    mainImg: true,
  },
  {
    resize: {
      width: 700,
      height: 514,
      fit: 'contain',
      background: 'rgba(100, 8, 40, 1)',
    },
    format: {
      value: 'png',
      options: {
        quality: 70,
      },
    },
  },
];

const sharpImageTransformer = async (req) => {
  // тип изображения, флаг для того чтобы понять чо это и откуда
  const { type } = req.params;

  let convertedAttachments;

  switch (type) {
    case 'articlePreview':
      convertedAttachments = await multipleImageConverter(req, testParamsList);
      return {
        ...convertedAttachments,
      };
    default:
      convertedAttachments = await multipleImageConverter(req, testParamsList);
      return {
        ...convertedAttachments,
        isLinked: false,
      };
  }


};

module.exports = sharpImageTransformer;
