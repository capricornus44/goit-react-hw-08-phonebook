import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import './NavigationList.scss';

const NavigationList = ({ routes }) => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <ul className="navigation_list">
      {isAuthenticated
        ? routes.map(({ name, path, exact }) => (
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
          ))
        : routes
            .filter(route => !route.private)
            .map(({ name, path, exact }) => (
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
            ))}
    </ul>
  );
};

export default NavigationList;
