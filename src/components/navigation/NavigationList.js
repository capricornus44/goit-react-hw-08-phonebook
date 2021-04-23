import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationList.scss';

const NavigationList = ({ routes }) => {
  return (
    <ul className="navigation_list">
      {routes.map(({ name, path, exact }) => (
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
