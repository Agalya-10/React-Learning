
import React from 'react';

function  FormTask() {
  return (
    <div className='formtask'>
     
      <form className='form1'>
      <h1>Login form</h1>
        <label>
         Username
          </label>
          <input type="text" name="name" placeholder="Username" />
       
        <br/>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default FormTask;
