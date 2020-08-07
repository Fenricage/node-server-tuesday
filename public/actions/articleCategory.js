import { fromJS } from 'immutable';
import {
  ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS,
  ARTICLE_CATEGORY_PATCH_FETCH_FAILURE,
  ARTICLE_CATEGORY_PATCH_FETCH,
  ARTICLE_CATEGORY_INIT,
  ARTICLE_CATEGORY_FETCH_SUCCESS,
  ARTICLE_CATEGORY_FETCH_FAILURE,
  ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS,
  ARTICLE_CATEGORY_CREATE_FETCH_FAILURE,
  ARTICLE_CATEGORY_CREATE_FETCH,
} from '../shared/constants/articleCategory';
import { API_BROWSER } from '../shared/constants/api';
import api from '../shared/api';


export const getOneArticleCategory = id => api.get(API_BROWSER).articeCategories.getOne(id);

export const initArticleCategory = () => ({
  type: ARTICLE_CATEGORY_INIT,
});


export const fetchOneArticleCategorySuccess = articleCategory => ({
  type: ARTICLE_CATEGORY_FETCH_SUCCESS,
  payload: articleCategory,
});

export const fetchOneArticleCategoryFailure = e => ({
  type: ARTICLE_CATEGORY_FETCH_FAILURE,
  payload: e,
});

export const reqArticleCategoryAndSet = id => (dispatch) => {
  dispatch(initArticleCategory());
  return getOneArticleCategory(id)
    .then((articleCategory) => {
      dispatch(fetchOneArticleCategorySuccess(fromJS(articleCategory)));
    })
    .catch((e) => {
      dispatch(fetchOneArticleCategoryFailure(e));
    });
};


const fetchPatchArticleCategory = () => ({
  type: ARTICLE_CATEGORY_PATCH_FETCH,
});

const patchArticleCategoryFailure = () => ({
  type: ARTICLE_CATEGORY_PATCH_FETCH_FAILURE,
});

const patchArticleCategorySuccess = () => ({
  type: ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS,
});

export const patchArticleCategory = (id, articleCategoryData) => (dispatch) => {
  dispatch(fetchPatchArticleCategory());
  return api.get(API_BROWSER).articeCategories.patch(id, articleCategoryData)
    .then((res) => {
      dispatch(patchArticleCategorySuccess());
    })
    .catch((e) => {
      dispatch(patchArticleCategoryFailure());
    });
};
