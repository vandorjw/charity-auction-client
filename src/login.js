import React, { Component } from 'react';
import logo from './logo.svg';
import './login.css';

class Login extends Component {

  render() {
    return (
      <div className="wrapper">
        <section className="login-wrapper">
          <div className="logo-title">
            {/* logo image goes here */}
          </div>
          <div className="sign-in-container">
          <span className="inputs email">
            <input type="email" name="GALE email"  placeholder="GALE email" />
          </span>
          <span className="inputs password">
            <input type="password" name="GALE password"  placeholder="Password" />
          </span>
          <span className="submit-button">
            <input type="submit" value="Sign in"/>
          </span>
          </div>
        </section>
      </div>
    );
  }

}

export default Login;