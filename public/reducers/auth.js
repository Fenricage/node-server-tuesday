import { Map, fromJS } from 'immutable';
import {
  AUTH_LOGIN_USER_FAILURE,
  AUTH_LOGIN_USER_SUCCESS,
  CHECK_AUTH_FAILURE,
  CHECK_AUTH_SUCCESS,
  LOGOUT,
  REGISTER_USER_SUCCESS,
  SET_AUTH_LOADING_STATUS,
  SET_REGISTER_LOADING_STATUS,
  SET_STATUS_TEXT,
  SET_TOKEN,
} from '../shared/constants/auth';

const initialState = fromJS({
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  isRegistrering: false,
  isRegistred: false,
  statusAuth: {
    statusText: '',
    statusType: '',
  },
  currentUserInfo: null,
});

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_AUTH_LOADING_STATUS:
      return state.setIn(['isAuthenticating'], action.payload);
    case SET_REGISTER_LOADING_STATUS:
      return state.setIn(['isRegistrering'], action.payload);
    case SET_STATUS_TEXT:
      return state.setIn(['statusAuth'], action.payload);
    case SET_TOKEN:
      return state.setIn(['token'], action.payload);
    case AUTH_LOGIN_USER_SUCCESS:
      return state.merge({
        token: action.payload,
        isAuthenticated: true,
        isAuthenticating: false,
        statusAuth: new Map({
          statusText: '',
          statusType: '',
        }),
      });
    case AUTH_LOGIN_USER_FAILURE:
      return state.merge({
        token: null,
        isAuthenticated: false,
        isAuthenticating: false,
        statusAuth: new Map({
          statusText: action.payload.text,
          statusType: action.payload.status,
        }),
      });
    case REGISTER_USER_SUCCESS:
      return state.merge({
        isRegistrering: false,
        statusAuth: new Map({
          statusText: 'Register is success',
          statusType: 'success',
        }),
      });
    case CHECK_AUTH_SUCCESS:
      return state.setIn(['isAuthenticated'], true);
    case CHECK_AUTH_FAILURE:
      return state.merge({
        token: null,
        isAuthenticated: false,
      });
    case LOGOUT:
      return state.merge({
        token: null,
        isAuthenticated: false,
        currentUserInfo: null,
      });
    default:
      return state;
  }
};

export default AuthReducer;
