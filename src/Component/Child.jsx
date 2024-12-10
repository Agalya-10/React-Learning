import React from "react";

function Child(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1> 
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default Child;