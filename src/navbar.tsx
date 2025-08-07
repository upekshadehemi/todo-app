import React from 'react'
import { Link } from 'react-router-dom';

function navbar  ()  {
  return (
    <div>
      <div className="p-2">
    <Link to="/input" >todo input</Link>
  </div>
  
  <div className="p-2">
    <Link to="/randomname" >todo randomname</Link>
  </div>
  
    </div>
  )
}

export default navbar
