import React from 'react';
import './loginForm.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src="logo.png" alt="Logo" className="login-logo" />
        <h2 className="login-title">Admin Login</h2>
      </div>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
