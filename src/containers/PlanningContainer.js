import React from 'react';
import { Component } from 'react';
import Header from '../components/Header';
import Planning from '../components/Planning';

class PlannigContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Header />
        <Planning />
      </>
    )
  }
}

export default PlannigContainer;