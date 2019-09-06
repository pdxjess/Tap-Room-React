import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Header';
import ReactDOM from 'react-dom';
import Beer from './Beer';
import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

function App() {
  return (
    <div className='App'>
    <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
