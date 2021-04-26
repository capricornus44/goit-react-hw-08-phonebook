import React from 'react';
// import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
// import { logoutSuccess } from '../../redux/auth/auth-actions';
import NavigationListItem from './NavigationListItem';
import UserMenu from '../userMenu/UserMenu';
import './NavigationList.scss';

const NavigationList = ({ routes, isAuth }) => {
  return (
    <ul className="navigation_list">
      {routes.map(route => (
        <NavigationListItem isAuth={isAuth} {...route} key={route.path} />
      ))}
      {isAuth && <UserMenu />}
    </ul>
  );
};

const mstp = state => ({
  isAuth: state.auth.user.idToken,
});

export default connect(mstp)(NavigationList);
