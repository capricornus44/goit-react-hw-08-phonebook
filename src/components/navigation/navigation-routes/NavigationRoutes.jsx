import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../../routes/PrivateRoute';
import PublicRoute from '../../routes/PublicRoute';
import { useSelector } from 'react-redux';
import Spinner from '../../spinner/Spinner';
import { isAuthSelector } from '../../../redux/auth/auth-selectors';

const NavigationRoutes = ({ routes }) => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes.map(route =>
          route.isPrivate ? (
            <PrivateRoute {...route} isAuth={isAuth} key={route.path} />
          ) : (
            <PublicRoute {...route} isAuth={isAuth} key={route.path} />
          ),
        )}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
