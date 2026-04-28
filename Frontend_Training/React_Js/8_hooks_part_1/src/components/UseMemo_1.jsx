import { useState, useMemo } from "react";

function UseMemo_1() {
  const [count, setCount] = useState(0);
  const [items] = useState([50, 100, 200, 50]);

  console.log("🔥 Component Rendered");

  const total = useMemo(() => {
    console.log("🧮 Re-calculating TOTAL...");
    return items.reduce((acc, n) => acc + n, 0);
  }, [items]);

  return (
    <div>
      <h2>useMemo Example</h2>

      <p>Total Sum: {total}</p>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default UseMemo_1;
