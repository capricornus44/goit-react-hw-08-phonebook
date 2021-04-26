import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { connect } from 'react-redux';

const NavigationRoutes = ({ routes, isAuth }) => {
  return (
    <Suspense fallback={<h2 className="loader">...loading</h2>}>
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

const mapStateToProps = state => ({ isAuth: state.auth.user.idToken });

export default connect(mapStateToProps)(NavigationRoutes);
