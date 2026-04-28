// import React from "react";
// import Student from "./Student";

// function App() {
//   return (
//     <div>
//       <h1>Props Example</h1>

//       <Student name="Manish" age={25}  />
//       <Student name="Aisha" age={24} />
//     </div>
//   );
// }

// export default App;


// //props children example
// import Note from "./Note";
// import Student from "./Student";
// function App() {
//   return (
//     <div>
//       <h1>Props Children Example</h1>

//       <Note content="This is the React.">
       
//       </Note>

//       <Note>
//         <h3>Another Note Block</h3>
//         <p>More info passed as children.</p>
//         <button>Click Me</button>
//         <p>Additional content inside the Note component.</p>
        
//       </Note>
//       <Note>
//          <Student name="Manish" age={25} />

//       </Note>
//     </div>
//   );
// }

// export default App;

// //Child → Parent (Callback Method)

// import StudentItem from "./StudentItem";

// function App() {

//   function receiveFeedback(message) {
//     console.log("📩 Message Received From Child:", message);
//   }

//   return (
//     <div>
//       <h1>Task 3: Child to Parent</h1>
//       <StudentItem sendFeedback={receiveFeedback} />
//     </div>
//   );
// }

// export default App;

//Sibling → Sibling (Indirect via Parent)

import { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState(["Manish", "Rahul"]);

  function addNewStudent(name) {
    console.log("New student received from AddStudent:", name);
    setStudents([...students, name]);
  }

  return (
    <div>
      <h1>Task 4: Sibling to Sibling</h1>

      <AddStudent sendStudentToParent={addNewStudent} />

      <StudentList students={students} />
    </div>
  );
}

export default App;


// // //Grandchild → Parent (Pass Function Downwards)
// // import StudentList from "./StudentList";

// // function App() {

// //   function getRating(rating) {
// //     console.log("🌟 Rating received from Grandchild:", rating);
// //   }

// //   return (
// //     <div>
// //       <h1>Task 6: Grandchild to Parent</h1>
// //       <StudentList getRating={getRating} />
// //     </div>
// //   );
// // }

// // export default App;
