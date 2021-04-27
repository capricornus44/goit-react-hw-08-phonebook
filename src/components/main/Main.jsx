import React from 'react';
import { mainRoutes } from '../../routes/main-routes';
import NavigationRoutes from '../navigation/navigation-routes/NavigationRoutes';

const Main = () => {
  return (
    <main>
      <NavigationRoutes routes={mainRoutes} />
    </main>
  );
};

export default Main;
