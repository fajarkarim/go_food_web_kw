import React from 'react'
import './Header.css';

const Header = (props) => {
  return (
      <header className="header sticky">
        {props.children}
      </header>
  )
};

export default Header;