import { Map, fromJS, List } from 'immutable';
import {
  ARTICLES_FETCH,
  ARTICLES_FETCH_FAILURE,
  ARTICLES_FETCH_SUCCESS,
  ARTICLES_DELETE_ARTICLE_SUCCESS,
  ARTICLES_DELETE_ARTICLE_FAILURE,
  ARTICLES_DELETE_ARTICLE,
} from '../shared/constants/articles';

// fromJS преобразует весь нижний обхект в immutable объекты
// массивы в List
// объекты в Map
export const initialState = fromJS({
  data: {},
  error: null,
  isDeleting: [],
  isLoaded: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLES_FETCH:
      return state.set('isLoaded', false);
    case ARTICLES_FETCH_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      });
    case ARTICLES_FETCH_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      });
    case ARTICLES_DELETE_ARTICLE:
      return state.set('isDeleting', action.payload);
    case ARTICLES_DELETE_ARTICLE_SUCCESS:
      return state
        .set('isDeleting', action.payload.isDeleting)
        // .setIn(['data', 'records'], action.payload.updatedArticles);
    case ARTICLES_DELETE_ARTICLE_FAILURE:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting,
      });
    default:
      return state;
  }
};
