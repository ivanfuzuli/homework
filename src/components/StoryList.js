import React from 'react';
import './story-list.css';

function StoryList(props) {
  return (
    <div className="story-list">
      <h3>Story List</h3>
      <table>
        <thead>
          <tr>
            <th>Story</th>
            <th>Story Point</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>

          {props.stories.map(item => (
            <tr key={item}>
              <td>{item}</td>
              <td></td>
              <td>Active</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  )
};

export default StoryList;