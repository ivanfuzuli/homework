import React from 'react';
import { Component } from 'react';
import Header from '../components/Header';
import Planning from '../components/Planning';
import database from '../database';

class PlannigContainer extends Component {
    saveToDB(obj) {
      return database.collection("pokers").add(obj);

  }
  render() {
    return (
      <>
        <Header />
        <Planning saveToDB={this.saveToDB} />
      </>
    )
  }
}

export default PlannigContainer;