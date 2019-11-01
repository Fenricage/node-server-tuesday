import { fromJS } from 'immutable';
import {
  ARTICLE_CATEGORIES_GET_ALL_SUCCESS,
  ARTICLE_CATEGORIES_GET_ALL_FAILURE,
  ARTICLE_CATEGORIES_GET_ALL_FETCH,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS,
  ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE,
  ARTICLE_CATEGORIES_DELETE_ARTICLE,
} from '../shared/constants/articleCategories';

const initialState = fromJS({
  data: [],
  error: null,
  isDeleting: [],
  isLoaded: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_CATEGORIES_GET_ALL_FETCH:
      return initialState;

    case ARTICLE_CATEGORIES_GET_ALL_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      });
    case ARTICLE_CATEGORIES_GET_ALL_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      });
    case ARTICLE_CATEGORIES_DELETE_ARTICLE:
      return state.set('isDeleting', action.payload);
    case ARTICLE_CATEGORIES_DELETE_ARTICLE_SUCCESS:
      return state.merge({
        isDeleting: action.payload.isDeleting,
        data: action.payload.updatedArticleCategories,
      });
    case ARTICLE_CATEGORIES_DELETE_ARTICLE_FAILURE:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting,
      });
    default:
      return state;
  }
};
