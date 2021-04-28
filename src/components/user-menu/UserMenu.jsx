import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logoutSuccess } from '../../redux/auth/auth-actions';
import avatar from './avatar.png';
import './UserMenu.scss';

const UserMenu = () => {
  const email = useSelector(getUsername);
  const dispatch = useDispatch();

  const onLogoutSuccess = () => {
    dispatch(logoutSuccess());
  };

  return (
    <div className="user">
      <img src={avatar} alt="" width="32px" className="user_avatar" />
      <span className="user_greeting">{email}</span>
      <button
        type="button"
        onClick={onLogoutSuccess}
        className="user_logout-btn"
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
