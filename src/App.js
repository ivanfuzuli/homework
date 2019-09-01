import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PlanningContainer from './containers/PlanningContainer';
import MasterContainer from './containers/MasterContainer';
import VoterContainer from './containers/VoterContainer';

import NoMatch from './components/NoMatch'

import 'normalize.css';
import styled from 'styled-components';
const S = {};

S.Container = styled.div`
  width: 960px;
  margin: 0 auto;
`;

function App() {
  return (
    <S.Container>
      <Router>
        <Switch>
          <Route path="/" exact component={PlanningContainer} />
          <Route path="/master/:id" component={MasterContainer} />
          <Route path="/voter/:id" component={VoterContainer} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </S.Container>
  );
}

export default App;
