// // ❌ Code (WITHOUT useDeferredValue)
// import { useState } from "react";

// function WithoutDeferredValue() {
//   const [input, setInput] = useState("");

//   console.log("❌ Input:", input);

//   // Heavy rendering happens on every keystroke
//   const list = Array(5000).fill(input);

//   return (
//     <div>
//       <h2>❌ Without useDeferredValue</h2>

//       <input
//         placeholder="Type here..."
//         onChange={(e) => setInput(e.target.value)}
//       />

//       {list.map((item, index) => (
//         <p key={index}>{item}</p>
//       ))}
//     </div>
//   );
// }

// export default WithoutDeferredValue;


// ✅ Code (WITH useDeferredValue)

import { useState, useDeferredValue } from "react";

function WithDeferredValue() {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);

  console.log("✅ Input:", input);
  console.log("🐢 Deferred:", deferredInput);

  // Heavy rendering uses deferred value
  const list = Array(5000).fill(deferredInput);

  return (
    <div>
      <h2>✅ With useDeferredValue</h2>

      <input
        placeholder="Type here..."
        onChange={(e) => setInput(e.target.value)}
      />

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default WithDeferredValue;

