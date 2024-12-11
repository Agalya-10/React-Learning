import React, { useState } from 'react'

function Conditionals() {
    const [vendor,setName] = useState(null)
  return (
    <div>
        {
      vendor && <h1>{`Hiii! ${vendor}`}</h1>
      }
      <button className='button' onClick={()=>setName('React')}>Click me</button>
    </div>
  )
}

export default Conditionals
