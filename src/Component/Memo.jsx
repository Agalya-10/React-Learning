// import React, { useState } from 'react';


// const ChildComponent = React.memo(({ count }) => {
//   console.log("Child Component Rendered");
//   return <h2>Child Count: {count}</h2>;
// });

// // const ParentComponent = React.memo(({ count }) => {
// //     console.log("Parent Component Rendered");
// //     return <h2>Parent Count: {count}</h2>;
// //   });
// const Memo = () => {
//   const [parentCount, setParentCount] = useState(0);
//   const [childCount, setChildCount] = useState(0);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>React.memo Example</h1>
//       <h2>Parent Count: {parentCount}</h2>
//       <button onClick={() => setParentCount(parentCount + 1)}>
//         Increment Parent Count
//       </button>
//       <button onClick={() => setChildCount(childCount + 1)}>
//         Increment Child Count
//       </button>
   
//       <ChildComponent count={childCount} />
//       {/* <ParentComponent count={parentCount} /> */}

//     </div>
//   );
// };

// export default Memo;

import React, { useState } from 'react'
import Memo1 from './Memo1'
import Memo2 from './Memo2'

function Memo() {

  const [memo1Val, setmemo1] = useState(5)
  const [memo2Val, setmemo2] = useState(10)
  
  function changememo1(){
    setmemo1(memo1Val + 1)
  }
  function changememo2(){
    setmemo2(memo2Val + 1)
  }
  // console.log("mainmemo")

  return (
    <div>
      <h1>Learning React.memo()</h1>
      <button onClick={changememo1}>Memo1 Button</button>
      <button onClick={changememo2}>Memo2 Button</button>
      <Memo1 val={memo1Val}/>
      <Memo2 val={memo2Val}/>
    </div>
  )
}
export default Memo
