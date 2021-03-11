import { fromJS } from 'immutable';
import {
  ARTICLE_CATEGORIES_GET_ALL_FETCH,
  ARTICLE_CATEGORIES_GET_ALL_FAILURE,
  ARTICLE_CATEGORIES_GET_ALL_SUCCESS,
  ARTICLE_CATEGORIES_DELETE_ARTICLE,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS,
} from '../shared/constants/articleCategories';
import { API_BROWSER } from '../shared/constants/api';
import api from '../shared/api';


const getAllArticleCategoriesFetch = () => ({
  type: ARTICLE_CATEGORIES_GET_ALL_FETCH,
});

const getAllArticleCategoriesSuccess = (data) => ({
  type: ARTICLE_CATEGORIES_GET_ALL_SUCCESS,
  payload: data,
});

const getAllArticleCategoriesFailure = (e) => ({
  type: ARTICLE_CATEGORIES_GET_ALL_FAILURE,
  payload: e,
});

export const getAllArticleCategories = (queryParams) => (dispatch) => {
  dispatch(getAllArticleCategoriesFetch());
  return api.get(API_BROWSER).articeCategories.getAll(queryParams)
    .then((categories) => {
      dispatch(getAllArticleCategoriesSuccess(fromJS(categories)));
    })
    .catch((e) => {
      console.error('Get All Article Categories is Failure', { ...e });
      dispatch(getAllArticleCategoriesFailure(e));
    });
};

export const getAllArticleCategoriesUniversal = (queryParams, computedApi) => (dispatch) => {
  return computedApi.articeCategories.getAll(queryParams)
    .then((categories) => {
      dispatch(getAllArticleCategoriesSuccess(fromJS(categories)));
    })
    .catch((e) => {
      console.error('Get All Article Categories is Failure', { ...e });
      dispatch(getAllArticleCategoriesFailure(e));
    });
};


const reqSetDeletingStatus = (id) => ({
  type: ARTICLE_CATEGORIES_DELETE_ARTICLE,
  payload: [],
});

const reqDeleteArticleCategorySuccess = (id) => {
  return {
    type: ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS,
    payload: {
      isDeleting: [],
      // updatedArticleCategories,
    },
  };
};

const reqDeleteArticleCategoryFailure = (id, e) => ({
  type: ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE,
  payload: {
    isDeleting: [],
    e,
  },
});
export const reqDeleteArticleCategory = id => (dispatch) => {
  dispatch(reqSetDeletingStatus(id));
  return api.get(API_BROWSER).articeCategories.deleteOne(id)
    .then((articleCategory) => {
      dispatch(reqDeleteArticleCategorySuccess(id));
    })
    .catch((e) => {
      dispatch(reqDeleteArticleCategoryFailure(id, e));
      console.error('Failed to delete article category', { ...e });
    });
};
