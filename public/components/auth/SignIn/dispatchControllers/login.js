import {
  setStatusText,
  loginUser,
} from '../../../../actions/auth';


const login = async (values, dispatch) => {
  try {
    dispatch(loginUser(values));
  } catch (e) {
    console.error('Login is failed', { ...e });
  }
};

export default login;
