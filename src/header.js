import React, { Component } from 'react';
import logo from './logo.svg';
import './header.css';

class Header extends Component {

  render() {
    return (
      <div className="main-menu">
        <div className="menu-logo-container">
          <a href="/listing" title="GALE">
            {/* logo image will go here}*/}GALE
          </a>
        </div>
        <div className="menu-links-container">
          <a href="/">
            <span>home</span> 
          </a>
          <a href="/">
            <span>sign out</span> 
          </a>
        </div>
      </div>
    );
  }

}

export default Header;