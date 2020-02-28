import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import cs from 'classnames';
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
      statusAuth: { statusText, statusType },
    } = this.props;

    return (
      <section className="signin">
        <h2 className="signin__title">Sign in</h2>
        {statusText ? (
          <p
            className={cs({
              'signin__status-text': true,
              [`${statusType}`]: statusType,
            })}
          >
            {statusText}
          </p>
        ) : null}
        <form onSubmit={handleSubmit(login)} className="signin__form">
          <Field
            placeholder="Enter your login e-mail"
            autofocus
            title="E-mail"
            name="email"
            className="signin__input-row"
            component={Input}
            type="email"
          />
          <Field
            placeholder="Enter your password"
            title="Password"
            name="password"
            className="signin__input-row"
            component={Input}
            type="password"
          />
          <section className="signin__box-button">
            <Button
              type="submit"
              className="signin__login-button"
              isLoading={false}
            >
              Log in
            </Button>
          </section>
          <p className="signin__switch">
            Already has account?&#160;
            <Link href="/auth/register">
              <a className="signin__switch-link">Sign up</a>
            </Link>
          </p>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  statusAuth: state.getIn(['auth', 'statusAuth']),
  isAuthenticating: state.getIn(['auth', 'isAuthenticating']),
});

const mapDispatchToProps = dispatch => ({});

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInForm);

const formConfiguration = {
  form: 'signin-form',
};

export default reduxForm(formConfiguration)(SignIn);
