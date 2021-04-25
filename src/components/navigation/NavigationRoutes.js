import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const NavigationRoutes = ({ routes }) => {
  const isAuthenticated = useSelector(getIsAuthenticated); //

  return (
    <Suspense fallback={<h2 className="loader">...loading</h2>}>
      <Switch>
        {isAuthenticated
          ? routes.map(({ component, path, exact }) => (
              <Route
                exact={exact}
                path={path}
                component={component}
                key={path}
              />
            ))
          : routes
              .filter(route => !route.private)
              .map(({ component, path, exact }) => (
                <Route
                  exact={exact}
                  path={path}
                  component={component}
                  key={path}
                />
              ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;

// {
//   routes.map(({ exact, path, component }) => (
//     <Route exact={exact} path={path} component={component} key={path} />
//   ));
// }
