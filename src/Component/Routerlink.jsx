import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';




function Routerlink() {
    function Home() {
        return <h1>Welcome to Home Page</h1>;
      }
      function About() {
        return <h1>About Us Page</h1>;
      }
      function Contact() {
        return <h1>Contact Page</h1>;
      }
  return (
   <div>
    {Home}
    {About}
    {Contact}
   </div>
  );
}

export default Routerlink;
