import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePublic = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} />
    )}
  />
);

RoutePublic.propTypes = {
  component: PropTypes.func.isRequired,
  to: PropTypes.string,
};

RoutePublic.defaultProps = {
  to: '/request',
};

export default RoutePublic;
