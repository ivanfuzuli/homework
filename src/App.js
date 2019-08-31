import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import PlanningContainer from './containers/PlanningContainer';
import MasterContainer from './containers/MasterContainer';
import VoterContainer from './containers/VoterContainer';

import NoMatch from './components/NoMatch'

function App() {
  return (
    <div className="ty-container">
      <Router>
        <Switch>
          <Route path="/" exact component={PlanningContainer} />
          <Route path="/master/:id" component={MasterContainer} />
          <Route path="/voter/:id" component={VoterContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
