import React from 'react';
import { connect } from 'react-redux';
import NavigationList from '../navigation/NavigationList';
import AuthMenu from '../authMenu/AuthMenu';
import UserMenu from '../userMenu/UserMenu';
import { mainRoutes } from '../../routes/mainRoutes';
import { authRoutes } from '../../routes/authRoutes';
import './Header.scss';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Header = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavigationList routes={mainRoutes} />
      </nav>
      {isAuthenticated ? <UserMenu /> : <AuthMenu routes={authRoutes} />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
