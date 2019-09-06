import React from "react";
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
      <div className="header-top">
        <h1>Lucy</h1>
        <ul className="nav-bar">
          <li><Link to="/Header">Beers</Link></li>
          <li><Link to="/Header">About</Link></li>
          <li><Link to="/Header">Location</Link></li>
          <li><Link to="/Header">Sign up</Link></li>
          <li><Link to="/Header">Log in</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
