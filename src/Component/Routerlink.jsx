import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function Routerlink() {

  return (
   <div>
 <h1>Agalya</h1>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
       
   </div>
  );
}

export default Routerlink;
