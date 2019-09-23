import React from 'react';
import Home from './Home';
import Beer from './Keg';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/keg" component={Keg} />
  </Switch>
);

export default Routes;
