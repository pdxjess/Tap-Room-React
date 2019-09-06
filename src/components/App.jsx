import React from "react";
import BeerList from './BeerList';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>
    <h3>A tap room in NE</h3>
    <hr/>
      <Switch>
        <Route exact path='/' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
