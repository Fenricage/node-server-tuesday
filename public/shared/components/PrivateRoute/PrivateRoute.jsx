import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';


const PrivateRoute = (props) => {
  const { isAuthenticated, location: { pathname } } = props;

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  const target = '/login';

  return (
    <Redirect
      to={{
        pathname: target,
        state: { from: props.location.pathname },
      }}
    />
  );
};

PrivateRoute.propTypes = {
  location: PropTypes.shape(),
  isAuthenticated: PropTypes.bool.isRequired,
};

PrivateRoute.defaultProps = {
  location: {},
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
