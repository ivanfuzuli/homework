import React, { useState } from 'react';
import className from 'classnames';

import './active-story.css';

const points = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?'];

function ActiveStory() {
  const [value, setValue] = useState(null);

  const selectStory = (item) => {
    setValue(item);
  }
  return (
    <div>
      <h3>Active Story</h3>
      <div className="ty-active-story">
        {
          points.map(item => (
            <a href className={className({
              'ty-active-story__box': true,
              'ty-active-story__box--active': value === item
            })} onClick={() => selectStory(item)}  key={item}>{item}</a>
          ))
        }
      </div>
    </div>
  )
}

export default ActiveStory;