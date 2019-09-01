import React from 'react';
import styled from 'styled-components';

const S = {};
S.Panel = styled.div`
  flex-grow: 1;
  margin: 5px;

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

function Panel(props) {
  return (
    <S.Panel>
      <h3>Scrum MasterPanel</h3>
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
    </S.Panel>
  );
}

export default Panel;