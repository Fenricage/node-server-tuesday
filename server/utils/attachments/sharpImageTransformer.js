const multipleImageConverter = require('./multipleImageConverter');

// configs, its basis for resize images
const configArticlePreview = require('./attachmentTypeConfigurations/articlePreview');
const configArticlePreviewBlog = require('./attachmentTypeConfigurations/articlePreviewBlog');


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
    case 'articlePreviewBlog':
      convertedAttachments = await multipleImageConverter(req, configArticlePreviewBlog);
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
