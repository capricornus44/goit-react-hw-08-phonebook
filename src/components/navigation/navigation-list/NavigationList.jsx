import React from 'react';
import { useSelector } from 'react-redux';
import NavigationListItem from '../navigation-list-item/NavigationListItem';
import UserMenu from '../../user-menu/UserMenu';
import { isAuthSelector } from '../../../redux/auth/auth-selectors';
import './NavigationList.scss';

const NavigationList = ({ routes }) => {
  const isAuth = useSelector(isAuthSelector);

  return (
    <ul className="navigation_list">
      {routes.map(route => (
        <NavigationListItem isAuth={isAuth} {...route} key={route.path} />
      ))}
      {isAuth && <UserMenu />}
    </ul>
  );
};

export default NavigationList;
