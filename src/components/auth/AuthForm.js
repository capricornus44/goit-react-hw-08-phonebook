import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from '../../redux/auth/auth-operations';
import './AuthForm.scss';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { email, password, name } = this.state;

    this.isSignupForm()
      ? this.props.signup({ email, password, name })
      : this.props.signin({ email, password });

    this.setState({
      email: '',
      password: '',
    });
  };

  isSignupForm = () => {
    return this.props.match.url === '/signup';
  };

  render() {
    return (
      <>
        <h1 className="auth-page_desc">
          {this.isSignupForm() ? 'Registration form' : 'Authorization form'}
        </h1>

        <form className="auth-form" onSubmit={this.onHandleSubmit}>
          {this.isSignupForm() && (
            <label className="auth-form_label">
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onHandleChange}
                className="auth-form_input"
              />
            </label>
          )}

          <label className="auth-form_label">
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email}
              // autoComplete="off"
              onChange={this.onHandleChange}
              className="auth-form_input"
            />
          </label>
          <label className="auth-form_label">
            Password:
            <input
              type="text"
              name="password"
              value={this.state.password}
              // autoComplete="off"
              onChange={this.onHandleChange}
              className="auth-form_input"
            />
          </label>
          <button type="submit" className="auth-form_button">
            {this.isSignupForm() ? 'sign up' : 'sign in'}
          </button>

          {this.isSignupForm() ? (
            <p className="auth-form_info">
              * If you already have an account, please
              <NavLink to="/signin" className="auth-form_redirect">
                Sign in
              </NavLink>
            </p>
          ) : (
            <p className="auth-form_info">
              * If you havn't got an account yet, please
              <NavLink to="/signup" className="auth-form_redirect">
                Sign up
              </NavLink>
            </p>
          )}
        </form>
      </>
    );
  }
}

export default connect(null, { signup, signin })(withRouter(AuthForm));
