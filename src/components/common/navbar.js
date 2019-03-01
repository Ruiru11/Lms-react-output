import React from 'react';
import { Link } from 'react-router-dom'
 function Navbar(){
     return (
         <header style={headerStyle}>
             <h1>TodoList</h1>
             <Link  style={linkStyle} to="/">Home</Link> | | <Link style={linkStyle}  to="/about">About</Link>
         </header>
     )
 }

 const headerStyle = {
    color:'black',
    textAlign:'center',
    background:'grey',
    padding:"5px",
    borderRadius:"8px"
  }

  const linkStyle = {
      color:"white"
  }
 export default Navbar;