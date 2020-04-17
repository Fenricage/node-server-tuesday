import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import Link from 'next/link';
import cs from 'classnames';
import Input from '../../../shared/components/Input/Input';
import Button from '../../../shared/components/Button/Button';
import register from './dispatchControllers/register';
import './SignUp.scss';


class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

    static propTypes = {
      statusAuth: PropTypes.shape({
        statusText: PropTypes.string,
        statusType: PropTypes.string,
      }),
    }

    render() {

      const {
        handleSubmit,
        pristine,
        submitting,
        valid,
        invalid,
        statusAuth: {
          statusText,
          statusType,
        },
        isRegistering,
      } = this.props;

      return (
        <section className="signup">
          <h2 className="signup__title">Sign up</h2>
          {statusText ? (
            <p className={cs({
              'signup__status-text': true,
              [`${statusType}`]: statusType,
            })}>
              {statusText}
            </p>
          ) : null}
          <form
            onSubmit={handleSubmit(register)}
          >
            <Field
              placeholder="Enter your e-mail"
              title="E-mail"
              name="email"
              className="signup__input-row"
              component={Input}
              type="text"
            />
            <Field
              placeholder="Enter your username"
              autofocus
              title="Username"
              name="username"
              className="signup__input-row"
              component={Input}
              type="text"
            />
            <Field
              placeholder="Enter your password"
              title="Password"
              name="password"
              className="signup__input-row"
              component={Input}
              type="text"
            />
            <section className="signup__box-button">
              <Button
                type="submit"
                className="signup__register-button"
                isLoading={isRegistering}
              >
                Register
              </Button>
            </section>
            <p className="signup__switch">
              Have not account yet?&#160;
              <Link href="/auth/login">
                <a className="signup__switch-link">
                  Sign in
                </a>
              </Link>
            </p>
          </form>
        </section>
      );
    }

}

const mapStateToProps = (state, ownProps) => ({
  statusAuth: state.getIn(['auth', 'statusAuth']),
  isRegistering: state.getIn(['auth', 'isRegistrering']),
});

const mapDispatchToProps = dispatch => ({});


const SignUp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpForm);

const formConfiguration = {
  form: 'signup-form',
};

export default reduxForm(formConfiguration)(SignUp);
