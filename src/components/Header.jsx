
import React from "react"
   
   
function Header() {
 return (
   <header style={{ backgroundColor: '#4CAF50', padding: '10px', color: 'white', textAlign: 'center' }}>
     <h1>My Simple React App</h1>
     <nav>
       <a href="#home" style={{ margin: '0 10px', color: 'white' }}>Home</a>
       <a href="#about" style={{ margin: '0 10px', color: 'white' }}>About</a>
       <a href="#contact" style={{ margin: '0 10px', color: 'white' }}>Contact</a>
     </nav>
     <button style={{ marginTop: '10px', padding: '5px 15px', backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5px' }}>
       Sign Up
     </button>
   </header>
 );
}


//export default Header