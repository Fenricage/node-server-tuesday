import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import './AuthLayout.scss';
// import { SignIn, SignUp } from 'Components';

class AuthLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, location } = this.props;
    return (
      <main className="l-auth">
        {children}
      </main>
    );
  }

}

export default AuthLayout;
