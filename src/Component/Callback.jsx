import React, { useState, useCallback } from 'react';

function Callback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        console.log("Increment called");
        setCount((prevCount) => prevCount + 1);
    }, []); 

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Callback;
