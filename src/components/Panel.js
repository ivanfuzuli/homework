import React from 'react';
import './panel.css';

function Panel(props) {
  return (
    <div className="ty-panel">
      <h5>Scrum MasterPanel</h5>
      <div>
        <span>Story 1 is active</span>
        <table>
          <thead>
            <tr>
              <th>Voter</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array(parseInt(props.voterCount)).fill(0).map((item, index) => (
              <tr key={index}>
                <td>Voter {index + 1}</td>
                <td>Unvoted</td>
              </tr>              
            ))}
          </tbody>
        </table>

        <span>You cannot end voting till each teammate vote.</span>
      </div>
    </div>
  );
}

export default Panel;