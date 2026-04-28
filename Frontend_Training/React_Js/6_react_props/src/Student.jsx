import React from "react";

// Passing props from App component to Student component
function Student(props) {
  console.log("Props Received in Student Component:", props);

  return (
    <div>
      <h2>Student Component</h2>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;


//Destructuring props in the function parameter


// function Student({ name, age }) {
//   console.log("Destructured Props:", { name, age });

//   return (
//     <div>
//       <h2>Student Component</h2>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// }

// export default Student;
