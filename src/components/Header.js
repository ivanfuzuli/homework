import React from 'react';
import styled from 'styled-components';

const S = {};

S.HeaderContainer = styled.div`
  margin: 15px;
`;
S.Logo = styled.a`
  width: 60px;
  font-size: 15px;
  border: 2px solid darkblue;
  text-align: center;
  display: inline-block;
  text-decoration: none;
`;

S.Url = styled.span`
  float: right;
`
function Header(props) {
  const url = props.url;
  return (
    <S.HeaderContainer>
      { url && <S.Url className="ty-url">
        Please share this url with teammates <a href={url}>{url}</a></S.Url> }
      <S.Logo href="/">Scrum Poker</S.Logo>
    </S.HeaderContainer>
  )
}

export default Header;