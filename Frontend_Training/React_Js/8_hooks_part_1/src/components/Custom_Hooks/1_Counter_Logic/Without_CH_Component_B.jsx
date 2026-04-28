import { useState } from "react";

function ComponentB() {
  const [count, setCount] = useState(10);
  console.log("ComponentB count:", count);

  return (
    <div>
      <h3>Component B</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default ComponentB;
