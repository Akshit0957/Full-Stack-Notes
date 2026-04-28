import { useState } from "react";

function ComponentA() {
  const [count, setCount] = useState(0);
  console.log("ComponentA count:", count);

  return (
    <div>
      <h3>Component A</h3>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default ComponentA;
