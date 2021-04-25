import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const AuthRoutes = ({ routes }) => {
  return (
    <Suspense fallback={<h2 className="loader">...loading</h2>}>
      <Switch>
        {routes.map(({ exact, path, component }) => (
          <Route exact={exact} path={path} component={component} key={path} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default AuthRoutes;
