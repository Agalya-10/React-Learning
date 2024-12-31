
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function  FormTask() {
//   const [form,setForm] = useState({Username :'',Password :''})

//   useEffect(()=>{
//     console.log (form)
//   })

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   if (form.Username === '' || form.Password === '') {
//   //     alert('Please fill out both Username and Password!');
//   //   } else {
//   //     console.log('Submitted Data:', form);
//   //   }
   
//   // };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://67286ba3270bd0b975555c01.mockapi.io/loginpage/LoginForm', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         alert('Login successful!');
//         navigate('/RegisterForm'); 
//         // console.log("Agal")
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
//   const RegisterForm = () => { 
//     navigate("/Registerform");
//   };
//   return (
//       <form className='form1' onSubmit={handleSubmit} >
//       <h1 className='head1'>Login form</h1>
//         <label className='label'>
//          Username
//           <input className='box1'  type="text" name="name" placeholder="Username" value={form.Username} onChange={handleInput}/>
//           </label>
//         <br/>
//         <label  className='label'>
//           Password
//           <input  className='box1' type="password" name="password" placeholder="Password" value={form.Password} onChange={handleInput}/>
//         </label>
//         <a className='password' href=''>Forgot Password?</a>
//         <br/>
//         <div className='submit'>
//         <button className='button2' type="submit">Login</button>
//         </div>
//         <p className='para1'>Don't have an Account?<a className='link' href='' onClick={RegisterForm}>Signup</a></p>
//       </form>
//   );
// }

// export default FormTask;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function FormTask() {
  const [form, setForm] = useState({ Username: '', Password: '' });
  const [errors, setErrors] = useState({ Username: '', Password: '' });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (form.Username === '') validationErrors.Username = 'Username is Required';
    if (form.Password === '') validationErrors.Password = ' Password is Required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); 
      return;
    }

    try {
      const response = await fetch(
        'https://67286ba3270bd0b975555c01.mockapi.io/loginpage/LoginForm',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        console.log('Submitted Data:', form); 
        navigate('/Registerform');
        navigate('/Loginformdata');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while logging in. Please try again.');
    }
  };

  const navigate = useNavigate();
  const RegisterForm = () => {
    navigate('/Registerform');
  };

  return (
    <form className="form1" onSubmit={handleSubmit}>
      <h1 className="head1 mt-2">Login form</h1>
      
      <label className="label mt-4" > Username </label>
        <input className="box1" type="text" name="Username" placeholder="Username" value={form.Username} onChange={handleInput}/>
<br/>
        {errors.Username && (
          <span style={{ color: 'red', fontSize: '13px', paddingLeft:'14px' }}>{errors.Username}</span>
        )}

     <div>
      <label className="label mt-2"> Password  </label>
        <input
          className="box1"
          type="password"
          name="Password"
          placeholder="Password"
          value={form.Password}
          onChange={handleInput}
        />
        <br/>
         {errors.Password && (
          <span style={{ color: 'red', fontSize: '13px' , paddingLeft:'14px' }}>{errors.Password}</span>
        )}
    </div>
      <div className='pass'>
      <a className="password" href="">
        Forgot Password?
      </a>
      </div>
      <br />
      <div className="submit">
        <button className="button2 mb-2" type="submit">
          Login
        </button>
      </div>
      <p className="para1">
        Don't have an Account?
        <a className="link" href="" onClick={RegisterForm}>
          Signup
        </a>
      </p>
    </form>
  );
}

export default FormTask;
