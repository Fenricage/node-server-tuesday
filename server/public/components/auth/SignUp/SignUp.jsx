import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form/immutable';
import Link from 'next/link';
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
        <section className="b-signup">
          <h2>Sign up</h2>
          <p className={statusType}>{statusText}</p>
          <form onSubmit={handleSubmit(register)}>
            <Field
              placeholder="Enter your e-mail"
              title="E-mail"
              name="email"
              component={Input}
              type="text"
            />
            <Field
              placeholder="Enter your username"
              autofocus
              title="Username"
              name="username"
              component={Input}
              type="text"
            />
            <Field
              placeholder="Enter your password"
              title="Password"
              name="password"
              component={Input}
              type="text"
            />
            <section className="b-signup__box-button">
              <Button
                type="submit"
                className="btn"
                isLoading={isRegistering}
              >
                Register
              </Button>
            </section>
            <section className="b-signup__switch">
              <Link href="/auth/login">
                <a>
                  Switch To Sign in
                </a>
              </Link>
            </section>
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
