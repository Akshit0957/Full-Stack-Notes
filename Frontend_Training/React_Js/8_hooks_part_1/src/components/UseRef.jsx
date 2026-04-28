import { useState, useRef } from "react";

function UseRef() {
  console.log("🔥 Component Rendered");

  // useState (causes re-render)
  const [stateCount, setStateCount] = useState(0);

  // useRef (does not cause re-render)
  const refCount = useRef(0);

  console.log("📌 Current stateCount:", stateCount);
  console.log("📌 Current refCount:", refCount.current);

  function increaseState() {
    console.log("🟢 Button (useState) clicked!");
    setStateCount(stateCount + 1);
    console.log("⏳ stateCount update scheduled…");
  }

  function increaseRef() {
    console.log("🔵 Button (useRef) clicked!");
    refCount.current = refCount.current + 1;
    console.log("✔ refCount updated to:", refCount.current);
    console.log("❗ No re-render triggered!");
  }

  return (
    <div>
      <h2>useState vs useRef Difference</h2>

      <p>State Count (useState): {stateCount}</p>
      <p>Ref Count (useRef): {refCount.current}</p>

      <button onClick={increaseState}>Increase State Count</button>
      <button onClick={increaseRef} style={{ marginLeft: "10px" }}>
        Increase Ref Count
      </button>
    </div>
  );
}

export default UseRef;
