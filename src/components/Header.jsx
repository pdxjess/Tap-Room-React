import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className="container">
      <div className="header-top">
        <h1>FITGERS</h1>
        <h2> A Tap Room in Hood River</h2>
        <ul className="nav-bar">
          <Link to="/">Home</Link> | <Link to="/newkeg">Add Keg</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
