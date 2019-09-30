import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import NewKegForm from './NewKegForm';

class App extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      masterKegList: [],
    };

    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
  }

  handleAddingNewKeg(newKeg) {
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({ masterKegList: newMasterKegList });
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/newkeg' render={()=><NewKegForm onAddingNewKeg={this.handleAddingNewKeg} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
