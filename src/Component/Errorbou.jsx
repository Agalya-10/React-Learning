import React from 'react';

function Errorbou() {
  const createError = () => {
    throw new Error("This is an error!");  // Error throw panna
  };

  return (
    <div>
      <button onClick={createError}>Create Error</button>
    </div>
  );
}

export default Errorbou;
