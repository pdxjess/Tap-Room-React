import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import Beer from './components/Beer';
import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

// const App = () => (
//   <BrowserRouter>
//
//     <Header />
//     <Beer />
//   </BrowserRouter>
// );
//
// export default App;

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/newkeg' component={Beer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
