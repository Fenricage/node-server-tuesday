const multipleImageConverter = require('./multipleImageConverter');

const configArticlePreview = require('./attachmentTypeConfigurations/articlePreview')


const sharpImageTransformer = async (req) => {
  // тип изображения, флаг для того чтобы понять чо это и откуда
  const { type } = req.params;

  let convertedAttachments;

  switch (type) {
    case 'articlePreview':
      convertedAttachments = await multipleImageConverter(req, configArticlePreview);
      return {
        ...convertedAttachments,
      };
    default:
      convertedAttachments = await multipleImageConverter(req, configArticlePreview);
      return {
        ...convertedAttachments,
        isLinked: false,
      };
  }


};

module.exports = sharpImageTransformer;
