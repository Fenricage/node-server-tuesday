import { fromJS } from 'immutable';
import {
  ARTICLES_FETCH,
  ARTICLES_FETCH_FAILURE,
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_DELETE_ARTICLE,
  ARTICLES_DELETE_ARTICLE_FAILURE,
  ARTICLES_DELETE_ARTICLE_SUCCESS,
  ARTICLES_LOADED_MORE_FAILURE,
  ARTICLES_LOADED_MORE_SUCCESS,
} from '../shared/constants/articles';

import { API_BROWSER, API_SERVER } from '../shared/constants/api';
import api from '../shared/api/index';

export const getAllArticles = queryParams => api.get(API_BROWSER).articles.getAll(queryParams);
export const getAllArticlesServer = queryParams => api.get(API_SERVER).articles.getAll(queryParams);
export const getAllArticlesUniversal = (queryParams, isServer) => {
  const API = isServer ? API_SERVER : API_BROWSER;
  return api.get(API).articles.getAll(queryParams);
};


export const fetchAllArticles = () => ({
  type: ARTICLES_FETCH,
});

export const fetchAllArticlesSuccess = articles => ({
  type: ARTICLES_FETCH_SUCCESS,
  payload: articles,
});

export const fetchAllArticlesFailure = e => ({
  type: ARTICLES_FETCH_FAILURE,
  payload: e,
});

export const getAllArticlesAndSet = queryParams => (dispatch) => {
  dispatch(fetchAllArticles());
  return getAllArticles(queryParams)
    .then((articles) => {
      dispatch(fetchAllArticlesSuccess(fromJS(articles)));
    })
    .catch((e) => {
      dispatch(fetchAllArticlesFailure(e));
    });
};

const loadMoreArticlesSuccess = articles => ({
  type: ARTICLES_LOADED_MORE_SUCCESS,
  payload: articles,
});

export const loadMoreArticlesFailure = e => ({
  type: ARTICLES_LOADED_MORE_FAILURE,
  payload: e,
});

export const loadMoreArticles = queryParams => async (dispatch) => {
  dispatch(fetchAllArticles());
  try {
    const articles = await getAllArticles(queryParams);
    return dispatch(loadMoreArticlesSuccess(fromJS(articles)));
  } catch (e) {
    return dispatch(loadMoreArticlesFailure(e));
  }
};

export const getAllArticlesAndSetServer = queryParams => (dispatch) => {
  dispatch(fetchAllArticles());
  return getAllArticlesServer(queryParams)
    .then((articles) => {
      dispatch(fetchAllArticlesSuccess(fromJS(articles)));
    })
    .catch((e) => {
      dispatch(fetchAllArticlesFailure(e));
    });
};

export const getAllArticlesAndSetUniversal = (queryParams, isServer) => (dispatch) => {
  dispatch(fetchAllArticles());
  return getAllArticlesUniversal(queryParams, isServer)
    .then((articles) => {
      dispatch(fetchAllArticlesSuccess(fromJS(articles)));
    })
    .catch((e) => {
      dispatch(fetchAllArticlesFailure(e));
    });
};

export const reqSetDeletingStatus = id => ({
  type: ARTICLES_DELETE_ARTICLE,
  // payload: isDeleting,
  payload: [],
});
export const reqDeleteArticleSuccess = id => ({
  type: ARTICLES_DELETE_ARTICLE_SUCCESS,
  payload: {
    isDeleting: [],
    // updatedArticles:[]
  },
});
export const reqDeleteArticleFailure = (id, e) => ({
  type: ARTICLES_DELETE_ARTICLE_FAILURE,
  payload: {
    // isDeleting,
    isDeleting: [],
    e,
  },
});
export const reqDeleteArticle = id => (dispatch) => {
  dispatch(reqSetDeletingStatus(id));
  return api
    .get(API_BROWSER)
    .articles.delete(id)
    .then((article) => {
      dispatch(reqDeleteArticleSuccess(id));
    })
    .catch((e) => {
      dispatch(reqDeleteArticleFailure(id, e));
      console.error('Failed to delete article', e, { ...e });
    });
};

export const searchArticles = query => api.get(API_BROWSER).articles.search(query);
