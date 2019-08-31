import React from 'react';
import { Component } from 'react';

import database from '../database';

import Header from '../components/Header';
import StoryList from '../components/StoryList';
import ActiveStory from '../components/ActiveStory';

import '../components/scrum-master.css';

class PlannigContainer extends Component {
  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;

    this.state = {
      done: false,
      data: null
    };

    this.getState();
  }
  getState() {
    var docRef = database.collection("pokers").doc(this.id);
    
    docRef.get().then((doc) => {
        if (doc.exists) {
            this.setState({
              data: doc.data(),
              done: true
            });
        } else {
            // doc.data() will be undefined in this case
            alert("No such document!");
        }
    }).catch(function(error) {
        alert("Error getting document:", error);
    });
  }

  render() {
    return (
      <div>
        {!this.state.done ? (
          <span>Loading...</span>
        ) : (
          <>
          <Header />
          <div className="ty-scrum-container">
            <StoryList stories={this.state.data.stories} />
            <ActiveStory />
          </div>
        </>
        )}
      </div>
    )
  }
}

export default PlannigContainer;