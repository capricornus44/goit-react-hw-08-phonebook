import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationListItem.scss';

const NavigationListItem = ({
  isAuth,
  isPrivate,
  isRestricted,
  path,
  exact,
  name,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li key={path} className="navigation_item home-item">
          <NavLink
            exact={exact}
            to={path}
            className="navigation_link"
            activeClassName="navigation_link--active"
          >
            {name}
          </NavLink>
        </li>
      )}

      {isAuth && isPrivate && !isRestricted && (
        <li key={path} className="navigation_item contacts-item">
          <NavLink
            exact={exact}
            to={path}
            className="navigation_link"
            activeClassName="navigation_link--active"
          >
            {name}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && isRestricted && (
        <li key={path} className="navigation_item auth-item">
          <NavLink
            exact={exact}
            to={path}
            className="navigation_link"
            activeClassName="navigation_link--active"
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
