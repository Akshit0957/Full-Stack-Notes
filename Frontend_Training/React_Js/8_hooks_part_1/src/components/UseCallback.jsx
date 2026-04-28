import { useState, useCallback } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);

  console.log("🔥 Component Rendered!");

  const handleClick = useCallback(() => {
    console.log("👉 Button clicked inside callback!");
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <button onClick={handleClick}>Click Callback Function</button>
    </div>
  );
}

export default UseCallback;
