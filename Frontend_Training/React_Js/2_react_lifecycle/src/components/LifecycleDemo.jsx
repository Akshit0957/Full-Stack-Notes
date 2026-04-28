import React, { useEffect, useState } from "react";

export default function LifecycleDemo() {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  // Mounting
  useEffect(() => {
    console.log("👉 Component Mounted (First time)");

    const timer = setInterval(() => {
      console.log("⏳ Timer running...");
    }, 2000);

    // Cleanup / Unmounting
    return () => {
      clearInterval(timer);
      console.log("❌ Component Unmounted (Cleanup Timer)");
    };
  }, []);


  // // Updating - every render
  // useEffect(() => {
  //   console.log("🔄 Component Updated");
  // });

  // Updating - specific state change
  useEffect(() => {
    console.log("🟡 Count updated:", count);
  }, [count]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Lifecycle Component</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
 );
}
