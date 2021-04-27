import React from 'react';
import { connect } from 'react-redux';
import NavigationListItem from '../navigation-list-item/NavigationListItem';
import UserMenu from '../../user-menu/UserMenu';
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

const mapStateToProps = state => ({
  isAuth: state.auth.user.idToken,
});

export default connect(mapStateToProps)(NavigationList);