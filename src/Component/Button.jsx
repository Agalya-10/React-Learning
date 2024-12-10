import React, { useState } from 'react'

function Button() {
    const [user,setUser] = useState ('Javascript')

    const changeButton = () =>{
        setUser('React')
        console.log(user)
    }

    const [counter,setCounter] = useState (200)

    const increment = () =>{
        setCounter((prev) =>prev + 5) 
    }

    const decrement = () =>{
        setCounter((prev) =>prev - 5) 
    }
  return (
    <div>
      <h2>{user}</h2>
      <button className='button' onClick={changeButton}>Click me</button>

      <h3> {`The counter value is:${counter}`}</h3>
      <button className='button' onClick={increment}>+5</button>
      <button className='button' onClick={decrement}>-5</button>

    </div>

  )
}

export default Button
