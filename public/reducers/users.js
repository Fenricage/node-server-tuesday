import { fromJS } from 'immutable';
import {
  USERS_FETCH_FAILURE,
  USERS_FETCH_SUCCESS,
  USERS_INIT,
  USERS_DELETE_USER_SUCCESS,
  USERS_DELETE_USER_FAILURE,
  USERS_DELETE_USER,
} from '../shared/constants/users';

const initialState = fromJS({
  data: [],
  error: null,
  isDeleting: [],
  isLoaded: false,
});

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_INIT:
      return initialState;
    case USERS_FETCH_SUCCESS:
      return state.merge({
        data: action.payload,
        isLoaded: true,
      });
    case USERS_FETCH_FAILURE:
      return state.merge({
        error: action.payload,
        isLoaded: true,
      });
    case USERS_DELETE_USER:
      return state.set('isDeleting', action.payload);
    case USERS_DELETE_USER_SUCCESS:
      return state.merge({
        isDeleting: action.payload.isDeleting,
        data: action.payload.updatedUsers,
      });
    case USERS_DELETE_USER_FAILURE:
      return state.merge({
        error: action.payload.e,
        isDeleting: action.payload.isDeleting,
      });
    default:
      return state;
  }
};

export default UsersReducer;
