import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
      <div className="header-top">
        <h1>Lucy</h1>
        <ul className="nav-bar">
          <li><Link to="/beer">Beer</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/location">Location</Link></li>
          <li><Link to="/sign_up">Sign up</Link></li>
          <li><Link to="/log_in">Log in</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
