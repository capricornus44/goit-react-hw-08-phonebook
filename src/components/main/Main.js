import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import { authRoutes } from '../../routes/authRoutes';
import NavigationRoutes from '../navigation/NavigationRoutes';
import AuthRoutes from '../authMenu/AuthRoutes';

const Main = () => {
  return (
    <main>
      <NavigationRoutes routes={mainRoutes} />
      <AuthRoutes routes={authRoutes} />
    </main>
  );
};

export default Main;
