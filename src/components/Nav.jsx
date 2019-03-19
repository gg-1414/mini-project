import React from 'react';
import '../stylesheets/Nav.scss';

const Nav = ( showSettings ) => (
  <nav className="top-nav">
    <h1>MyWebNow</h1>
    <div className="nav-bar">
      <button>Home</button>
      <button>Why Us</button>
      <button>Contact Us</button>
      <button>Login</button>
      <button>Support</button>
    </div>
  </nav>
);

export default Nav;
