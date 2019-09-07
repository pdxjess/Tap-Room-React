import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from './App.jsx';
import Tagline from './Tagline';


function Header(){
  return (
    <div className="container">
      <div className="header-top">
        <h1>Lucy</h1>
        <Tagline />
        <ul className="nav-bar">
          <li><Link to="./Beer">Beers</Link></li>
          <li><Link to="./Header">About</Link></li>
          <li><Link to="./Header">Location</Link></li>
          <li><Link to="./Header">Sign up</Link></li>
          <li><Link to="./Header">Log in</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
