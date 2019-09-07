import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import ReactDOM from 'react-dom';
import Beer from './Beer';
import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

function App() {
  return (
    <Router>
    <div className='App'>
      <Header />
          <Routes />
    </div>
    </Router>
  );
}

export default App;
