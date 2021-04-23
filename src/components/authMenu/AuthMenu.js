import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthMenu.scss';

const AuthMenu = ({ routes }) => {
  return (
    <ul className="auth-menu_list">
      {routes.map(({ name, path, exact }) => (
        <li key={path} className="auth-menu_item">
          <NavLink
            exact={exact}
            to={path}
            className="auth-menu_link"
            activeClassName="auth-menu_link--active"
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AuthMenu;
