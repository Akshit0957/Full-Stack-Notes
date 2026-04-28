import useCounter from "./useCounter";

function ComponentB() {
  const { count, increment } = useCounter(10);
  console.log("ComponentB count:", count);

  return (
    <div>
      <h3>Component B</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ComponentB;
