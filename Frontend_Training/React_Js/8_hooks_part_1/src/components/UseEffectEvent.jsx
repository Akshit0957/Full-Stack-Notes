//Broken useEffect Example

import { useState, useEffect } from "react";

function UseEffectEvent() {
  const [count, setCount] = useState(0);

  console.log("🔥 Component Rendered");

  useEffect(() => {
    console.log("▶ Starting Timer...");

    const id = setInterval(() => {
      console.log("⏳ Timer Log (stale):", count);
    }, 2000);
  
    return () => clearInterval(id);
  }, []); // runs once → captures count = 0

  return (
    <div>
      <h2>Broken useEffect Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      
    </div>
  );
}

export default UseEffectEvent;


// // // UseEffectEvent Hook Example

// import { useState, useEffect, useEffectEvent } from "react";

// function UseEffectEvent() {
//   const [count, setCount] = useState(0);

//   console.log("🔥 Component Rendered");

//   // This function ALWAYS sees the latest count
//   const logLatestCount = useEffectEvent(() => {
//     console.log("⏳ Timer Log (fresh):", count);
//   });

//   useEffect(() => {
//     console.log("▶ Starting Timer...");

//     const id = setInterval(() => {
//       logLatestCount(); // always fresh count!
//     }, 1000);

//     return () => clearInterval(id);
//   }, []); // timer only starts once

//   return (
//     <div>
//       <h2>Fixed useEffectEvent Example</h2>
//       <p>Count: {count}</p>

//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//     </div>
//   );
// }

// export default UseEffectEvent;
