import { fromJS } from 'immutable';
import {
  ARTICLES_FETCH,
  ARTICLES_FETCH_FAILURE,
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_DELETE_ARTICLE,
  ARTICLES_DELETE_ARTICLE_FAILURE,
  ARTICLES_DELETE_ARTICLE_SUCCESS,
} from '../shared/constants/articles';
// import { store } from '../index';
import { API_BROWSER, API_SERVER } from '../shared/constants/api';
import api from '../shared/api/index';

export const getAllArticles = queryParams => api.get(API_BROWSER).articles.getAll(queryParams);
export const getAllArticlesServer = queryParams => api.get(API_SERVER).articles.getAll(queryParams);

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
  return api.get(API_BROWSER).articles.delete(id)
    .then((article) => {
      dispatch(reqDeleteArticleSuccess(id));
    })
    .catch((e) => {
      dispatch(reqDeleteArticleFailure(id, e));
      console.error('Failed to delete article', e, { ...e });
    });
};


export const searchArticles = (query) => {
  console.log('query', query);
  return api.get(API_BROWSER).articles.search(query);
};
