import React from 'react';
import Home from './Home';
import Beer from './Beer';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/beer" component={Beer} />
  </Switch>
);

export default Routes;
