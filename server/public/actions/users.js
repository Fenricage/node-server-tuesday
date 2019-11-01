import api from '../shared/api/index';
import {
  USERS_FETCH_FAILURE,
  USERS_FETCH_SUCCESS,
  USERS_INIT,
  USERS_DELETE_USER,
  USERS_DELETE_USER_FAILURE,
  USERS_DELETE_USER_SUCCESS,
} from '../shared/constants/users';
import { fromJS, Map } from 'immutable';
import { store } from '../index';


const reqUsersFetchInit = () => ({
  type: USERS_INIT,
});

const reqUsersFetchSuccess = users => ({
  type: USERS_FETCH_SUCCESS,
  payload: users,
});

const reqUsersFetchFailure = e => ({
  type: USERS_FETCH_FAILURE,
  payload: e,
});

export const reqUsersFetch = () => (dispatch) => {
  dispatch(reqUsersFetchInit);
  return api.users.getAll()
    .then((users) => {
      dispatch(reqUsersFetchSuccess(fromJS(users)));
    })
    .catch((e) => {
      dispatch(reqUsersFetchFailure(e));
    });
};


export const reqSetDeletingStatus = (id) => {

  const isDeleting = store.getState()
    .getIn(['users', 'isDeleting'])
    .push(id);

  return {
    type: USERS_DELETE_USER,
    payload: isDeleting,
  };
};

export const reqDeleteUserSuccess = (id) => {

  const isDeleting = store.getState()
    .getIn(['users', 'isDeleting'])
    .filter(item => item !== id);

  const updatedUsers = store.getState()
    .getIn(['users', 'data'])
    .filter(user => user.get('_id') !== id);

  return {
    type: USERS_DELETE_USER_SUCCESS,
    payload: {
      isDeleting,
      updatedUsers,
    },
  };
};

export const reqDeleteUserFailure = (id, e) => {
  const isDeleting = store.getState()
    .getIn(['users', 'isDeleting'])
    .filter(item => item !== id);
  return {
    type: USERS_DELETE_USER_FAILURE,
    payload: {
      isDeleting,
      e,
    },
  };
};


export const reqDeleteUser = id => (dispatch) => {
  dispatch(reqSetDeletingStatus(id));
  return api.articles.delete(id)
    .then((user) => {
      dispatch(reqDeleteUserSuccess(id));
    })
    .catch((e) => {
      dispatch(reqDeleteUserFailure(id, e));
      console.error('Failed to delete user', { ...e });
    });
};
