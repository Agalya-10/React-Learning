import React from 'react'

function Events() {
    const shoot = () => {
        alert("Great Shot!");
      }
      const click = (agalya) => {
        alert(agalya);
      }
  return (
    <div>
        <h2>Onclick function</h2>
          <button className='button' onClick={shoot}>Take the shot!</button>    
          <h2>Passing Arguments</h2>   
          <button className='button' onClick={(agalya) => click("Agalya Muruganantham")}>click me</button>             

    </div>
  )
}

export default Events
