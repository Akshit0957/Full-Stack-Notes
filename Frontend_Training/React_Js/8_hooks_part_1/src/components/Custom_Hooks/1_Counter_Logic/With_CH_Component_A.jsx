import useCounter from "./useCounter";

function ComponentA() {
  const { count, increment } = useCounter(0);
  console.log("ComponentA count:", count);

  return (
    <div>
      <h3>Component A</h3>
      <p>{count}</p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ComponentA;
