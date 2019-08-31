import React from 'react';
import './active-story.css';

const points = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?'];

function ActiveStory() {
  return (
    <div>
      <h3>Active Story</h3>
      <div className="ty-active-story">
        {
          points.map(item => <div className="ty-active-story__box" key={item}>{item}</div>)
        }
      </div>
    </div>
  )
}

export default ActiveStory;