import React from 'react';
import NavigationList from '../navigation/NavigationList';
import { mainRoutes } from '../../routes/mainRoutes';
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
