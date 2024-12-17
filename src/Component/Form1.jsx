import React from 'react'

function Form1() {
  return (
    <div>
       <form>
      <label>Enter your Name:
        <input type="text" />
      </label>
      <label>Enter your Age:
        <input type="number" />
      </label>
      <label>Enter your DOB:
        <input type="date" />
      </label>
      <label>Enter your phoneNumber:
        <input type="number" />
      </label>
      <label>Enter your gender:
        <input type="checkbox" />
        <li>Female</li>
        <li>Male</li>
      </label>
    </form>
    </div>
  )
}

export default Form1
