import React, { useRef } from 'react';

function Useref() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus(); 
        inputRef.current.style.border = "2px solid red";
        inputRef.current.style.backgroundColor = "yellow";
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Type here..."/> 
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default Useref;
