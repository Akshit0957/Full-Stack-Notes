import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered. Count is:", count);

  return (
    <div>
      <h2>useState Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 10)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseState;
