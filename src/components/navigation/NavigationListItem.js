import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationListItem.scss';
import { useHistory } from 'react-router-dom';

const NavigationListItem = ({
  isAuth,
  isPrivate,
  isRestricted,
  path,
  exact,
  name,
}) => {
  const history = useHistory();

  return (
    <>
      {!isPrivate && !isRestricted && (
        <li key={path} className="navigation_item">
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
        <li key={path} className="navigation_item">
          <NavLink
            exact={exact}
            to={path}
            className="navigation_link"
            activeClassName="navigation_link--active"
            onClick={() => {
              history.push('/contacts');
              console.log('NavLink');
            }}
          >
            {name}
          </NavLink>
        </li>
      )}

      {!isAuth && !isPrivate && isRestricted && (
        <li key={path} className="navigation_item">
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
