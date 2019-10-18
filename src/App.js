import React from 'react';
import './App.css';
import Assets from './components/Assets';
import { Switch, Route } from "react-router-dom";
import Entities from './components/Entities';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={['/', '/assets']} component={Assets}></Route>
        <Route path ={'/entities/:id'} component={Entities}></Route>
      </Switch>
    </div>
  );
}

export default App;
