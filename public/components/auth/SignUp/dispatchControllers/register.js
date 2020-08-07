// import { history } from '../../../../index';
import Router from 'next/router';
import {
  setStatusText,
  setRegisteringLoader,
  registerUser,
} from '../../../../actions/auth';

const register = async (values, dispatch) => {
  try {
    const registerData = await dispatch(registerUser(values));
    if (registerData) {
      // history.push('/auth/login');
      Router.push({pathname: '/auth/login'})
    }
  } catch (e) {
    console.error('Register is Failed', { ...e });
    dispatch(setRegisteringLoader(false));
    dispatch(setStatusText({
      statusText: 'Register is failed',
      statusType: 'error',
    }));
  }
};

export default register;
