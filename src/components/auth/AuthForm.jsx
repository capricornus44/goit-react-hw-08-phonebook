import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, signup } from '../../redux/auth/auth-operations';
import './AuthForm.scss';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    isSignupForm()
      ? dispatch(signup({ email, password }))
      : dispatch(signin({ email, password }));

    setEmail('');
    setPassword('');
  };

  const isSignupForm = () => {
    return location.pathname === '/signup';
  };

  return (
    <>
      <h1 className="auth-page_desc">
        {isSignupForm() ? 'Registration form' : 'Authorization form'}
      </h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-form_label">
          Email:
          <input
            type="email"
            name="email"
            value={email}
            // autoComplete="off"
            onChange={handleChange}
            className="auth-form_input"
          />
        </label>
        <label className="auth-form_label">
          Password:
          <input
            type="text"
            name="password"
            value={password}
            // autoComplete="off"
            onChange={handleChange}
            className="auth-form_input"
          />
        </label>
        <button type="submit" className="auth-form_button">
          {isSignupForm() ? 'sign up' : 'sign in'}
        </button>

        {isSignupForm() ? (
          <p className="auth-form_info">
            If you already have an account, please
            <NavLink to="/signin" className="auth-form_redirect">
              Sign in
            </NavLink>
          </p>
        ) : (
          <p className="auth-form_info">
            If you havn't got an account yet, please
            <NavLink to="/signup" className="auth-form_redirect">
              Sign up
            </NavLink>
          </p>
        )}
      </form>
    </>
  );
};

export default AuthForm;
