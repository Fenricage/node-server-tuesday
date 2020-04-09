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
      <main className="auth-layout">
        <img
          className="auth-layout__bg"
          src="https://assets.website-files.com/5bfd1275cc56e15ce750b18e/5c289afb9a15758bde893a75_44.%20Green%20Yellow.jpg"
          alt=""
        />
        {children}
      </main>
    );
  }

}

export default AuthLayout;
