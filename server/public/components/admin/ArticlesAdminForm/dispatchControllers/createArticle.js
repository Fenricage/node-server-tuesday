import {
  createArticle as createArticleAction,
} from 'Actions/article';

const createArticle = async (values, dispatch) => {
  try {
    await dispatch(createArticleAction(values));
  } catch (e) {
    console.error('Create article is failed', { ...e });
  }
};

export default createArticle;
