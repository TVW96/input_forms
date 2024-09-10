import React from 'react';
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
        <img />
        <ul
            style={{
                listStyle:"none", 
                display:"flex", 
                flexDirection:"row-reverse",
                width:"100%",
                justifyContent:"space-evenly"}}>
            <li><Link to="./Form1">Form 1</Link></li>
            <li><Link to="./Form2"> Form 2</Link></li>
            <li><Link to="./PopUpWindows"> Pop Up Windows</Link></li>
        </ul>
    </nav>
  )
}

export default Nav