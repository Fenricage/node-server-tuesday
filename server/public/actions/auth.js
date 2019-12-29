import Router from 'next/router';
import Cookies from 'js-cookie';
import { API_BROWSER, API_SERVER } from '../shared/constants/api';
import api from '../shared/api/index';
import getApiDependingOnContext from '../shared/api/getApiDependingOnContext';

import {
  SET_STATUS_TEXT,
  SET_REGISTER_LOADING_STATUS,
  SET_AUTH_LOADING_STATUS,
  SET_TOKEN,
  AUTH_LOGIN_USER_SUCCESS,
  AUTH_LOGIN_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_SUCCESS,
  LOGOUT,
} from '../shared/constants/auth';

export const setStatusText = text => ({
  type: SET_STATUS_TEXT,
  payload: text,
});

export const logout = () => {
  localStorage.removeItem('token');
  Cookies.remove('Token');
  return {
    type: LOGOUT,
  };
};

export const setRegisteringLoader = status => ({
  type: SET_REGISTER_LOADING_STATUS,
  payload: status,
});

export const getCurrentUserServer = (extra, context) => getApiDependingOnContext(context).auth.currentUser(extra, context)
  .then((user) => {
    console.log('res', user);
    return user;
  })
  .catch((e) => {
    console.error('error getCurrenUser', { ...e });
    return e.response.data;
  });

export const getCurrentUser = () => api.get(API_BROWSER).auth.currentUser()
  .then((res) => {
    console.log('res', res);
  })
  .catch((e) => {
    console.error('error getCurrenUser', { ...e });
  });

export const checkAuthSuccess = () => ({
  type: CHECK_AUTH_SUCCESS,
});

export const checkAuthFailure = () => ({
  type: CHECK_AUTH_FAILURE,
});

export const checkAuth = () => (dispatch) => {
  const token = localStorage.getItem('token');

  return api.get(API_BROWSER).auth.currentUser() // check that token is verificate
    .then((res) => { //
      dispatch(checkAuthSuccess());
    })
    .catch((e) => { // to login page
      console.error('Auth error', { ...e });
      dispatch(checkAuthFailure());
    });
};

export const authLoginUserSuccess = (token) => {
  localStorage.setItem('token', token);
  return {
    type: AUTH_LOGIN_USER_SUCCESS,
    payload: token,
  };
};

export const authLoginUserFailure = (status, text) => {
  localStorage.removeItem('token');
  return {
    type: AUTH_LOGIN_USER_FAILURE,
    payload: {
      status,
      text,
    },
  };
};

export const setAuthLoader = status => ({
  type: SET_AUTH_LOADING_STATUS,
  payload: status,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUser = values => (dispatch) => {
  dispatch(setRegisteringLoader(true));
  return api.get(API_BROWSER).auth.register(values)
    .then((res) => {
      // dispatch(setRegisteringLoader(false))
      // dispatch(setStatusText({
      //     statusText: 'Register is success',
      //     statusType: 'success'
      // }))
      dispatch(registerUserSuccess());
      return true;
    });
};

export const loginUser = values => (dispatch) => {
  dispatch(setAuthLoader(true));
  return api.get(API_BROWSER).auth.login(values)
    .then((res) => {
      dispatch(authLoginUserSuccess(res.token));
      // dispatch(push('/admin'));
      Router.push('/admin');
    })
    .catch((e) => {
      dispatch(authLoginUserFailure('error', 'Failed login'));
    });
};
