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
      <h1>gjsgf</h1>
    </header>
  );
};

export default Header;
