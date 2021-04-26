import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAuth, exact, path, component }) => {
  return isAuth ? (
    <Route exact={exact} path={path} component={component} key={path} />
  ) : (
    <Redirect to="/signin" />
  );
};

export default PrivateRoute;
