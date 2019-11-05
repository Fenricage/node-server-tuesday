import {
  patchArticle as patchArticleAction,
} from 'Actions/article';

const patchArticle = (id) => async (values, dispatch) => {
  try {
    await dispatch(patchArticleAction(id, values));
  } catch (e) {
    console.error('Patch article is failed', { ...e });
  }
};


export default patchArticle;
