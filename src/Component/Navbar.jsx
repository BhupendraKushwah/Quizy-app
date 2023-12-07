import React from 'react'
import { useLocation } from 'react-router-dom';

const Navbar = ({score}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header>
      <div className="nav-name">
        <h1>Quizy</h1>
        {console.log(currentPath)}
      </div>
      {currentPath!=='/admin/'&&<div className="user-score">
    
        <h3>Score:</h3><span>{score}</span>
      </div>}

    </header>
  )
}

export default Navbar
