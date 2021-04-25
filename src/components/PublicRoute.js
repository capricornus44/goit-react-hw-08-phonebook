import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  restricted,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated && restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(PublicRoute);
