import { useState } from "react";

function useCounter(initialValue) {
  console.log("🧰 useCounter hook running");

  const [count, setCount] = useState(initialValue);

  function increment() {
    console.log("➕ increment called");
    setCount((prev) => prev + 1);
  }

  return { count, increment };
}

export default useCounter;
