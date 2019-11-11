import { fromJS } from 'immutable';
import {
  ARTICLE_INIT,
  ARTICLE_FETCH_FAILURE,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_CREATE_FETCH,
  ARTICLE_CREATE_FETCH_FAILURE,
  ARTICLE_CREATE_FETCH_SUCCESS,
  ARTICLE_PATCH_FETCH,
  ARTICLE_PATCH_FETCH_FAILURE,
  ARTICLE_PATCH_FETCH_SUCCESS,
} from '../shared/constants/article';
import api from '../shared/api/index';

export const getOneArticle = id => api.articles.getOne(id);

export const initArticle = () => ({
  type: ARTICLE_INIT,
});


export const fetchOneArticlesSuccess = article => ({
  type: ARTICLE_FETCH_SUCCESS,
  payload: article,
});

export const fetchOneArticlesFailure = e => ({
  type: ARTICLE_FETCH_FAILURE,
  payload: e,
});

export const reqArticleAndSet = id => (dispatch) => {
  dispatch(initArticle());
  return getOneArticle(id)
    .then((article) => {
      dispatch(fetchOneArticlesSuccess(fromJS(article)));
    })
    .catch((e) => {
      dispatch(fetchOneArticlesFailure(e));
    });
};

export const fetchCreateArticle = () => ({
  type: ARTICLE_CREATE_FETCH,
});

export const createArticleFailure = () => ({
  type: ARTICLE_CREATE_FETCH_FAILURE,
});

export const createArticleSuccess = () => ({
  type: ARTICLE_CREATE_FETCH_SUCCESS,
});

export const createArticle = articleData => (dispatch) => {
  dispatch(fetchCreateArticle());
  return api.articles.create(articleData)
    .then((res) => {
      dispatch(createArticleSuccess());
      console.log('res', res);
    })
    .catch((e) => {
      dispatch(createArticleFailure());
      console.log('e', e);
    });
};


const fetchPatchArticle = () => ({
  type: ARTICLE_PATCH_FETCH,
});

const patchArticleFailure = () => ({
  type: ARTICLE_PATCH_FETCH_FAILURE,
});

const patchArticleSuccess = () => ({
  type: ARTICLE_PATCH_FETCH_SUCCESS,
});

export const patchArticle = (id, articleData) => (dispatch) => {
  dispatch(fetchPatchArticle());
  return api.articles.patch(id, articleData)
    .then((res) => {
      dispatch(patchArticleSuccess());
    })
    .catch((e) => {
      dispatch(patchArticleFailure());
      console.error('Failure patch Article!', e);
    });
};