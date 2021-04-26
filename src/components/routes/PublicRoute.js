import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAuth, exact, path, component, isRestricted }) => {
  return isAuth && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route exact={exact} path={path} component={component} key={path} />
  );
};

export default PublicRoute;
