import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

    this.isRegistrationForm()
      ? this.props.registrationOperation({ email, password, name })
      : this.props.loginOperation({ email, password });
  };

  isRegistrationForm = () => {
    return this.props.location.pathname === '/signup';
  };

  render() {
    return (
      <>
        <h1 className="auth-page_desc">
          Please, &ensp;
          {this.isRegistrationForm() ? 'sign up' : 'sign in'}!
        </h1>
        <form className="auth-form">
          {this.isRegistrationForm() && (
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
              type="text"
              name="email"
              value={this.state.email}
              autoComplete="off"
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
              autoComplete="off"
              onChange={this.onHandleChange}
              className="auth-form_input"
            />
          </label>

          <button type="submit" className="auth-form_button">
            {this.isRegistrationForm() ? 'sign up' : 'sign in'}
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(AuthForm);
