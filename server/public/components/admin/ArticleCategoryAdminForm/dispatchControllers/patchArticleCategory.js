import {
  patchArticleCategory as patchArticleCategoryAction
} from '../../../../actions/articleCategory';

const patchArticleCategory = (id) => async (values, dispatch) => {
  try {
    console.log('values', values);
    await dispatch(patchArticleCategoryAction(id, values));
  } catch (e) {
    console.error('Patch article is failed', { ...e });
  }
};

export default patchArticleCategory;
