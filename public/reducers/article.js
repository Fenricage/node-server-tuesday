import { fromJS } from 'immutable';
import {
  ARTICLE_INIT,
  ARTICLE_FETCH_FAILURE,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_CREATE_FETCH_SUCCESS,
  ARTICLE_CREATE_FETCH_FAILURE,
  ARTICLE_CREATE_FETCH,
  ARTICLE_PATCH_FETCH_SUCCESS,
  ARTICLE_PATCH_FETCH_FAILURE,
  ARTICLE_PATCH_FETCH,
} from '../shared/constants/article';

const initialState = fromJS({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case ARTICLE_INIT:
      return initialState;
    case ARTICLE_FETCH_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      })
    case ARTICLE_FETCH_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      })
    case ARTICLE_CREATE_FETCH:
      return state.set('isCreating', true);
    case ARTICLE_CREATE_FETCH_SUCCESS:
      return state.set('isCreating', false);
    case ARTICLE_CREATE_FETCH_FAILURE:
      return state.set('isCreating', false);
    case ARTICLE_PATCH_FETCH:
      return state.set('isPatching', true)
    case ARTICLE_PATCH_FETCH_SUCCESS:
      return state.set('isPatching', false)
    case ARTICLE_PATCH_FETCH_FAILURE:
      return state.set('isPatching', false)
    default:
      return state;
  }
};
