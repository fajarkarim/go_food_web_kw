import React from 'react'
import './MainContent.css'

const MainContent = (props) => {
  return (
      <main className='content'>
        {props.children}
      </main>
  )
};

export default MainContent;