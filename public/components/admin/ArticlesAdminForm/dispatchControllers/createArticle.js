import {
  createArticle as createArticleAction,
} from '../../../../actions/article';

const createArticle = async (values, dispatch) => {
  try {
    await dispatch(createArticleAction(values));
  } catch (e) {
    console.error('Create article is failed', { ...e });
  }
};

export default createArticle;
