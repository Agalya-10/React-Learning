import React, { useState } from 'react';


const ChildComponent = React.memo(({ count }) => {
  console.log("Child Component Rendered");
  return <h2>Child Count: {count}</h2>;
});

// const ParentComponent = React.memo(({ count }) => {
//     console.log("Parent Component Rendered");
//     return <h2>Parent Count: {count}</h2>;
//   });
const Memo = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React.memo Example</h1>
      <h2>Parent Count: {parentCount}</h2>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent Count
      </button>
      <button onClick={() => setChildCount(childCount + 1)}>
        Increment Child Count
      </button>
   
      <ChildComponent count={childCount} />
      {/* <ParentComponent count={parentCount} /> */}

    </div>
  );
};

export default Memo;
