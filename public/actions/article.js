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
import { API_BROWSER } from '../shared/constants/api';

export const getOneArticle = (id) => api.get(API_BROWSER).articles.getOne(id);
export const getOneArticleUniversal = (id, computedApi) => computedApi.articles.getOne(id);

export const initArticle = () => ({
  type: ARTICLE_INIT,
});


export const fetchOneArticlesSuccess = (article) => ({
  type: ARTICLE_FETCH_SUCCESS,
  payload: article,
});

export const fetchOneArticlesFailure = (e) => ({
  type: ARTICLE_FETCH_FAILURE,
  payload: e,
});

export const reqArticleAndSet = (id) => (dispatch) => {
  dispatch(initArticle());
  return getOneArticle(id)
    .then((article) => {
      dispatch(fetchOneArticlesSuccess(fromJS(article)));
    })
    .catch((e) => {
      dispatch(fetchOneArticlesFailure(e));
    });
};

export const reqArticleAndSetUniversal = (id, computedApi) => (dispatch) => {
  dispatch(initArticle());
  return getOneArticleUniversal(id, computedApi)
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

export const createArticle = (articleData) => (dispatch) => {
  dispatch(fetchCreateArticle());
  return api.get(API_BROWSER).articles.create(articleData)
    .then((res) => {
      dispatch(createArticleSuccess());
    })
    .catch((e) => {
      dispatch(createArticleFailure());
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
  return api.get(API_BROWSER).articles.patch(id, articleData)
    .then((res) => {
      dispatch(patchArticleSuccess());
    })
    .catch((e) => {
      dispatch(patchArticleFailure());
      console.error('Failure patch Article!', e);
    });
};
