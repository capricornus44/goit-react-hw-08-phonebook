import React from 'react';
// import { connect } from 'react-redux';
import NavigationList from '../navigation/NavigationList';
// import AuthMenu from '../authMenu/AuthMenu';
// import UserMenu from '../userMenu/UserMenu';
import { mainRoutes } from '../../routes/mainRoutes';
// import { authRoutes } from '../../routes/authRoutes';
import './Header.scss';
// import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavigationList routes={mainRoutes} />
      </nav>
      {/* {isAuth ? <UserMenu /> : <AuthMenu routes={authRoutes} />} */}
    </header>
  );
};

// const mstp = state => ({
//   isAuth: state.auth.idToken,
// });

export default Header;
