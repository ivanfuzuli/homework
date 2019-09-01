import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const S = {};
S.ActiveStoryContainer = styled.div`
  border: 1px solid #000;
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 240px;
  flex-wrap: wrap;
`;

S.StoryBox = styled.a`
  width: 20px;
  padding: 15px;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: center;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }

  ${props =>
    props.active &&
    css`
      background-color: burlywood;
    `};
`;
const points = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 134, '?'];

function ActiveStory() {
  const [value, setValue] = useState(null);

  const selectStory = (item) => {
    setValue(item);
  }
  return (
    <div>
      <h3>Active Story</h3>
      <S.ActiveStoryContainer>
        {
          points.map(item => (
            <S.StoryBox href active={value === item} onClick={() => selectStory(item)}  key={item}>{item}
            </S.StoryBox>
          ))
        }
      </S.ActiveStoryContainer>
    </div>
  )
}

export default ActiveStory;