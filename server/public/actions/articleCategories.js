import { List, Map, fromJS } from 'immutable';
import {
  ARTICLE_CATEGORIES_GET_ALL_FETCH,
  ARTICLE_CATEGORIES_GET_ALL_FAILURE,
  ARTICLE_CATEGORIES_GET_ALL_SUCCESS,
  ARTICLE_CATEGORIES_DELETE_ARTICLE,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS,
} from '../shared/constants/articleCategories';
import api from '../shared/api/index'

// import { store } from '../index';

const getAllArticleCategoriesFetch = () => ({
  type: ARTICLE_CATEGORIES_GET_ALL_FETCH,
});

const getAllArticleCategoriesSuccess = data => ({
  type: ARTICLE_CATEGORIES_GET_ALL_SUCCESS,
  payload: data,
});

const getAllArticleCategoriesFailure = e => ({
  type: ARTICLE_CATEGORIES_GET_ALL_FAILURE,
  payload: e,
});

export const getAllArticleCategories = () => (dispatch) => {
  dispatch(getAllArticleCategoriesFetch());
  return api.articeCategories.getAll()
    .then((categories) => {
      dispatch(getAllArticleCategoriesSuccess(fromJS(categories)));
    })
    .catch((e) => {
      console.error('Get All Article Categories is Failure', { ...e });
      dispatch(getAllArticleCategoriesFailure(e));
    });
};


const reqSetDeletingStatus = (id) => {
  // const isDeleting = store.getState()
  //   .getIn(['articleCategories', 'isDeleting'])
  //   .push(id);
  return {
    type: ARTICLE_CATEGORIES_DELETE_ARTICLE,
    // payload: isDeleting,
    payload: [],
  };
};

const reqDeleteArticleCategorySuccess = (id) => {

  const isDeleting = store.getState()
    .getIn(['articleCategories', 'isDeleting'])
    .push(id)
    .filter(item => item !== id);


  const updatedArticleCategories = store.getState()
    .getIn(['articleCategories', 'data'])
    .filter(article => article.get('_id') !== id);


  return {
    type: ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS,
    payload: {
      isDeleting,
      updatedArticleCategories,
    },
  };
};

const reqDeleteArticleCategoryFailure = (id, e) => {
  // const isDeleting = store.getState()
  //   .getIn(['articleCategories', 'isDeleting'])
  //   .push(id)
  //   .filter(item => item !== id);
  return {
    type: ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE,
    payload: {
      // isDeleting,
      isDeleting: [],
      e,
    },
  };
};


export const reqDeleteArticleCategory = id => (dispatch) => {
  dispatch(reqSetDeletingStatus(id));
  return api.articeCategories.deleteOne(id)
    .then((articleCategory) => {
      dispatch(reqDeleteArticleCategorySuccess(id));
    })
    .catch((e) => {
      dispatch(reqDeleteArticleCategoryFailure(id, e));
      console.error('Failed to delete article category', { ...e });
    });
};
