import React from 'react'
import './MainContent.css'

const MainContent = (props) => {
  return (
      <main className='content mr-med ml-med'>
        {props.children}
      </main>
  )
};

export default MainContent;