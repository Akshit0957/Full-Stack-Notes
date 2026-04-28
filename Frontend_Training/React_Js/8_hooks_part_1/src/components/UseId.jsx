// function WithoutUseId({ label }) {
//   const id = "name"; // hard-coded ID

//   console.log(`❌ ${label} → ID:`, id);

//   return (
//     <div style={{ marginBottom: "20px" }}>
//       <h3>{label}</h3>

//       <label htmlFor={id}>Name:</label>
//       <input id={id} />
//     </div>
//   );
// }

// export default WithoutUseId;





// ✅ Code (WITH useId)

import { useId } from "react";

function UseId() {
  
  const id = useId();

  console.log("🆔 Generated ID:", id);

  return (
    <div>
      <h2>useId Example</h2>

      <label htmlFor={id}>Name:</label>
      <input id={id} />
    </div>
  );
}

export default UseId;
