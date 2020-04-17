import React, { Component } from 'react';
import AuthLayout from '../../shared/layouts/AuthLayout/AuthLayout';
import SignUp from '../../components/auth/SignUp/SignUp';

class Login extends Component {

  render() {
    return (
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    );
  }

}

export default Login;
