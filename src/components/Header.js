import React from 'react';
import './header.css';

function Header(props) {
  const url = props.url;
  return (
    <div>
      { url && <span className="ty-url">
        Please share this url with teammates <a href={url}>{url}</a></span> }
      <h1 className="ty-logo">Scrum Poker</h1>
    </div>
  )
}

export default Header;