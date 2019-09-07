import React from 'react';
import Beer from './Beer';
import { Route, Switch } from 'react-router-dom';


const Routes = () => (
  <Switch>
    <Route path="/" component={Beer} />
  </Switch>
);

export default Routes;
