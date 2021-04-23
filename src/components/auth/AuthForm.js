import React, { Component } from 'react';
import './AuthForm.scss';

class AuthForm extends Component {
  state = {
    email: '',
    password: '',
    name: '',
  };

  render() {
    return (
      <>
        <form className="auth-form">
          <label className="auth-form_label">
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              autoComplete="off"
              onChange={this.onHandleChange}
              className="auth-form_input"
            />
          </label>

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
            Push
          </button>
        </form>
      </>
    );
  }
}

export default AuthForm;
