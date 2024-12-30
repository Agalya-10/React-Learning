// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function Registerform() {
  
 
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     mobile: '',
//     password: '',
//     confirmPassword: '',
//     address: '',
//     state: '',
//     country: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); 

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch('https://67286ba3270bd0b975555c01.mockapi.io/loginpage/useEffect', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Registration successful!');
//         navigate('/FormTask'); 
//         console.log("Agal")
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while registering. Please try again.');
//     }
//   };




//   const navigate = useNavigate();
//   const LoginForm = () =>{
//     navigate("/FormTask")
//   }
//   return (
//     <form className='form2' onSubmit={handleSubmit}>
//     <h1 className='head1'>Register form</h1>
//     <div style={{display:'flex'}}>
//       <label className='label1'>
//       Firstname
//         <input className='box2'  type="text" name="name" placeholder="Firstname"   value={formData.firstname} onChange={handleChange}/>
//         </label>
//       <label  className='label1'>
//         Lastname
//         <input  className='box2' type="text" name="lastname" placeholder="Lastname"  value={formData.lastname} onChange={handleChange}/>
//       </label>
//       </div>
//       <label  className='label2'>
//       Email
//         <input  className='box3' type="text" name="Email" placeholder="Email"  value={formData.email} onChange={handleChange}/>
//       </label>
//       <br/>
//        <label  className='label2'>
//        Mobile Number
//         <input  className='box3' type="number" name="phno" placeholder="Mobile Number"  value={formData.phno} onChange={handleChange}/>
//       </label>
//       <div style={{display:'flex'}}>
//       <label className='label1'>
//       Password
//         <input className='box2'  type="password" name="password" placeholder="Password"  value={formData.password} onChange={handleChange}/>
//         </label>
//       <label  className='label1' id='cpassword'>
//       Confirm Password
//         <input  className='box2'   type="password" name="cpassword" placeholder="Confirm Password"  value={formData.cpassword} onChange={handleChange}/>
//       </label>
//       </div>
//       <label  className='label2'>
//      Address
//         <input  className='box3' type="text" name="Address" placeholder="Address"  value={formData.address} onChange={handleChange}/>
//       </label>
    
//       <label className='label2' For="Title">State </label>
//         <select className='box4'  name='state' value={formData.state} onChange={handleChange}>
//           <option value="" selected disabled>Select State</option>
//           <option value="">Tamilnadu</option>
//           <option value="">Andhra Pradhesh</option>
//           <option value="">kerala</option>
//           <option value="">uthra pradesh</option>
//           <option value="">Karnataka</option>
//           <option value="">Assam</option>
//           <option value="">Delhi</option>
//         </select>

//         <label className='label2'  For="Title">Country</label>
//         <select className='box4' name='country' value={formData.country} onChange={handleChange}> 
//           <option value="" selected disabled>Select Country</option>
//           <option value="">India</option>
//           <option value="">Singapore</option>
//           <option value="">malasiya</option>
//           <option value="">latvia</option>
//           <option value="">Uk</option>
//           <option value="">USA</option>
//           <option value="">Dubai</option>
//         </select>
  
//       <div className='submit'>
//       <button className='button2' type="submit">Rigister</button>
//       </div>
//       <p className='para1'>Already have an Account?<a className='link' href='' onClick={LoginForm}>Login</a></p>
//     </form>
//   )
// }

// export default Registerform


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Registerform() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    address: '',
    state: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch(
        'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/useEffect',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert('Registration successful!');
        console.log('Submitted Data:', formData); 
        navigate('/FormTask');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering. Please try again.');
    }
  };

  const navigate = useNavigate();
  const LoginForm = () => {
    navigate('/FormTask');
  };

  return (
    <form className="form2" onSubmit={handleSubmit}>
      <h1 className="head1">Register form</h1>
      <div style={{ display: 'flex' }}>
        <label className="label1">
          Firstname
          <input
            className="box2"
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <label className="label1">
          Lastname
          <input
            className="box2"
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="label2">
        Email
        <input
          className="box3"
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label2">
        Mobile Number
        <input
          className="box3"
          type="number"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
      </label>
      <div style={{ display: 'flex' }}>
        <label className="label1">
          Password
          <input
            className="box2"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label className="label1" id="cpassword">
          Confirm Password
          <input
            className="box2"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="label2">
        Address
        <input
          className="box3"
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label className="label2" htmlFor="state">
        State
      </label>
      <select
        className="box4"
        name="state"
        value={formData.state}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select State
        </option>
        <option value="Tamilnadu">Tamilnadu</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Kerala">Kerala</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Assam">Assam</option>
        <option value="Delhi">Delhi</option>
      </select>
      <label className="label2" htmlFor="country">
        Country
      </label>
      <select
        className="box4"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select Country
        </option>
        <option value="India">India</option>
        <option value="Singapore">Singapore</option>
        <option value="Malaysia">Malaysia</option>
        <option value="Latvia">Latvia</option>
        <option value="UK">UK</option>
        <option value="USA">USA</option>
        <option value="Dubai">Dubai</option>
      </select>
      <div className="submit">
        <button className="button2" type="submit">
          Register
        </button>
      </div>
      <p className="para1">
        Already have an Account?
        <a className="link" href="" onClick={LoginForm}>
          Login
        </a>
      </p>
    </form>
  );
}

export default Registerform;
