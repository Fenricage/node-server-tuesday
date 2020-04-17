import React, { Component } from 'react';
import AuthLayout from '../../shared/layouts/AuthLayout/AuthLayout';
import Signin from '../../components/auth/SignIn/SignIn';

class Login extends Component {

  render() {
    return (
      <AuthLayout>
        <Signin />
      </AuthLayout>
    );
  }

}

export default Login;
