import { fromJS } from 'immutable';
import {
  TAGS_INIT,
  TAGS_FETCH_FAILURE,
  TAGS_FETCH_SUCCESS,
  TAGS_DELETE_TAG,
  TAGS_DELETE_TAG_FAILURE,
  TAGS_DELETE_TAG_SUCCESS,
  TAGS_CREATE_FETCH,
  TAGS_CREATE_FETCH_FAILURE,
  TAGS_CREATE_FETCH_SUCCESS,
  TAGS_PATCH_FETCH,
  TAGS_PATCH_FETCH_FAILURE,
  TAGS_PATCH_FETCH_SUCCESS,
} from '../shared/constants/tags';

const initialState = fromJS({
  data: {},
  error: null,
  isLoaded: false,
  isCreating: false,
  isPatching: false,
  isDeleting: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TAGS_INIT:
      return initialState;

    case TAGS_FETCH_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      });
    case TAGS_FETCH_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      });
    case TAGS_CREATE_FETCH:
      return state.set('isCreating', true);
    case TAGS_CREATE_FETCH_SUCCESS:
      return state.set('isCreating', false);
    //  TODO передать объект ошибки и засетить
    case TAGS_CREATE_FETCH_FAILURE:
      return state.set('isCreating', false);
    case TAGS_PATCH_FETCH:
      return state.set('isPatching', true);
    case TAGS_PATCH_FETCH_SUCCESS:
      return state.set('isPatching', false);
    case TAGS_PATCH_FETCH_FAILURE:
      return state.set('isPatching', false);
    case TAGS_DELETE_TAG:
      return state.set('isDeleting', action.payload);
    case TAGS_DELETE_TAG_SUCCESS:
      return state.set('isDeleting', action.payload);
    case TAGS_DELETE_TAG_FAILURE:
      return state.set('isDeleting', action.payload);
    default:
      return state;
  }
};
