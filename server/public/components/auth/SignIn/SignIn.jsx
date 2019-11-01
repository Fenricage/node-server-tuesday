import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import './SignIn.scss';
import Link from 'next/link';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import login from './dispatchControllers/login';


class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const {
      handleSubmit,
      pristine,
      submitting,
      valid,
      invalid,
      isAuthenticating,
      statusAuth: {
        statusText,
        statusType,
      },
    } = this.props;

    return (
      <section className="b-signin">
        <h2>Sign in</h2>
        {statusText ? (
          <p className={statusType}>{statusText}</p>
        ) : null}
        <form onSubmit={handleSubmit(login)}>
          <Field
            placeholder="Enter your login e-mail"
            autofocus
            title="E-mail"
            name="email"
            component={Input}
            type="email"
          />
          <Field
            placeholder="Enter your password"
            title="Password"
            name="password"
            component={Input}
            type="password"
          />
          <section className="b-signin__box-button">
            <Button
              type="submit"
              className="btn"
              isLoading={false}
            >
              Log in
            </Button>
          </section>
          <section className="b-signin__switch">
            <Link href="/auth/register">
              <a>Switch To Sign up</a>
            </Link>
          </section>
        </form>
      </section>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  statusAuth: state.getIn(['auth', 'statusAuth']),
  isAuthenticating: state.getIn(['auth', 'isAuthenticating']),
});

const mapDispatchToProps = dispatch => ({

});


const SignIn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInForm);

const formConfiguration = {
  form: 'signin-form',
};

export default reduxForm(formConfiguration)(SignIn);
