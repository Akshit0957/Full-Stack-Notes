import { useState } from "react";
import LifecycleDemo from "./components/LifecycleDemo.jsx";
import About from "./components/About.jsx";

export default function App() {
   const [show, setShow] = useState(true);

   console.log("App Rendered");

  return (
    <>
    <div>
      <h1>React Lifecycle Demo</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <LifecycleDemo />}
    </div>
    <About></About>
    </>
  );
}
