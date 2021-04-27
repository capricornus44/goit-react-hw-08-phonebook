import React from 'react';
import NavigationList from '../navigation/navigation-list/NavigationList';
import { mainRoutes } from '../../routes/main-routes';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavigationList routes={mainRoutes} />
      </nav>
    </header>
  );
};

export default Header;
