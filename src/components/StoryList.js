import React from 'react';
import styled from 'styled-components';

const S = {};
S.StoryList = styled.div`
  flex-grow: 2;
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

function StoryList(props) {
  return (
    <S.StoryList>
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
    </S.StoryList>

  )
};

export default StoryList;