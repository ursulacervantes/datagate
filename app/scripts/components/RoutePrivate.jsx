import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const RoutePrivate = ({ component: Component, isAuthenticated, to, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} />
    )}
  />
);

RoutePrivate.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  to: PropTypes.string,
};

RoutePrivate.defaultProps = {
  to: '/request',
};

export default RoutePrivate;
