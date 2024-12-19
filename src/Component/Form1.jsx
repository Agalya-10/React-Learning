// import React from 'react'

// function Form1() {
//   return (
//     <div>
//        <form>
//       <label>Enter your Name:
//         <input type="text" />
//       </label>
//       <label>Enter your Age:
//         <input type="number" />
//       </label>
//       <label>Enter your DOB:
//         <input type="date" />
//       </label>
//       <label>Enter your phoneNumber:
//         <input type="number" />
//       </label>
//       <label>Enter your gender:
//         <input type="checkbox" />
//         <li>Female</li>
//         <li>Male</li>
//       </label>
//     </form>
//     </div>
//   )
// }

// export default Form1


import React from 'react';

function Form1() {
  return (
    <div>
      <form>
        
        <label>
          Enter your Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <br />

       
        <label>
          Enter your Age:
          <input type="number" name="age" placeholder="Your Age" min="0" required />
        </label>
        <br />

        <label>
          Enter your DOB:
          <input type="date" name="dob" required />
        </label>
        <br/>
        <label>
          Enter your Phone Number:
          <input type="number" name="phoneNumber" placeholder="123-456-7890"/>
        </label>
        <br />
          <label>
          Enter your Gender:
            <input type="radio" name="gender" value="Female" required /> Female
          </label>
          <label>
            <input type="radio" name="gender" value="Male" required /> Male
          </label>
       <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form1;
