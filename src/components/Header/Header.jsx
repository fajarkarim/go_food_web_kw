import React from 'react'
import './Header.css';

const Header = (props) => {
  return (
      <header className="header sticky shadow-sm">
        {props.children}
      </header>
  )
};

export default Header;