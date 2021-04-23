import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import NavigationRoutes from '../navigation/NavigationRoutes';

const Main = () => {
  return (
    <main>
      <NavigationRoutes routes={mainRoutes} />
    </main>
  );
};

export default Main;
