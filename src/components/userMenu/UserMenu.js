import React from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logoutSuccess } from '../../redux/auth/auth-actions';
import avatar from './avatar.png';
import './UserMenu.scss';

const UserMenu = ({ email, avatar, logoutSuccess }) => (
  <div className="user">
    <img src={avatar} alt="" width="32px" className="user_avatar" />
    <span className="user_greeting">{email}</span>
    <button type="button" onClick={logoutSuccess} className="user_logout-btn">
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: getUsername(state),
  avatar: avatar,
});

// const mapDispatchToProps = {
//   // onLogout: logout,
// };

export default connect(mapStateToProps, { logoutSuccess })(UserMenu);
