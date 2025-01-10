import React, { useState, memo } from "react";

// Child Component
const ChildComponent = memo(({ count }) => {
  console.log("Child Component Rendered");
  return <p>Count from Parent: {count}</p>;
});

// Parent Component
const  Usememo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>React.memo Example</h1>
      <button onClick={incrementCount}>Increment Count</button>
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type something..."
      />
      <ChildComponent count={count} />
    </div>
  );
};

export default Usememo;
