// import React, { useState } from 'react'

// function Conditionals() {
//     const [vendor,setName] = useState(null)
//   return (
//     <div>
//         {
//       vendor && <h1>{`Hiii! ${vendor}`}</h1>
//       }
//       <button className='button' onClick={()=>setName('React')}>Click me</button>
//     </div>
//   )
// }

// export default Conditionals

import React from 'react'

function Conditionals() {

    // If else method : JS
    const admin = true
    let result = null

    if(admin === true){
        result = <h1>Updated</h1>
    }
    else{
        result = <h1>No Updated</h1>
    }

    //  Conditional rendering: Using ? Operator
    let a = 20
    let b = a === 13 ? <h1>Available Number</h1> : <h1>Not Available Number</h1>

       //  Conditional rendering: Using && Operator
    let c = a === 20 && <h1>React Application</h1>  

  return (
    <div>
      {result}
      {b}
      {c}
    </div>
  )
}

export default Conditionals 