import { fromJS } from 'immutable';
import {
  ARTICLE_CATEGORY_CREATE_FETCH,
  ARTICLE_CATEGORY_CREATE_FETCH_FAILURE,
  ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS,
  ARTICLE_CATEGORY_FETCH_FAILURE,
  ARTICLE_CATEGORY_FETCH_SUCCESS,
  ARTICLE_CATEGORY_INIT,
  ARTICLE_CATEGORY_PATCH_FETCH,
  ARTICLE_CATEGORY_PATCH_FETCH_FAILURE,
  ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS,
} from '../shared/constants/articleCategory';

const initialState = fromJS({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false,
});

const ArticleCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_CATEGORY_INIT:
      return initialState;
    case ARTICLE_CATEGORY_FETCH_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      });
    case ARTICLE_CATEGORY_FETCH_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      });
    case ARTICLE_CATEGORY_CREATE_FETCH:
      return state.set('isCreating', true);
    case ARTICLE_CATEGORY_CREATE_FETCH_SUCCESS:
      return state.set('isCreating', false);
    case ARTICLE_CATEGORY_CREATE_FETCH_FAILURE:
      return state.set('isCreating', false);
    case ARTICLE_CATEGORY_PATCH_FETCH:
      return state.set('isPatching', true);
    case ARTICLE_CATEGORY_PATCH_FETCH_SUCCESS:
      return state.set('isPatching', false);
    case ARTICLE_CATEGORY_PATCH_FETCH_FAILURE:
      return state.set('isPatching', false);
    default:
      return state;
  }
};

export default ArticleCategoryReducer;
