import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  var myStyledComponentStyles = {
    backgroundColor: '#484848',
    color: 'white',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    textAlign: 'center',
    letterSpacing: '3px',
  }

  return (
    <div style={myStyledComponentStyles}>
      <div className="container">
        <div className="header-top">
          <h1>FITGERS</h1>
          <h2> A Tap Room in Hood River</h2>
          <ul className="nav-bar">
          <Link to="/">Kegs</Link> | <Link to="/newkeg">Add Keg</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
