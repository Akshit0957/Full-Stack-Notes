import { useState } from "react";

function AddStudent({ sendStudentToParent }) {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Add Student</h2>

      <input
        placeholder="Enter Student Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => sendStudentToParent(name)}>
        Add
      </button>
    </div>
  );
}

export default AddStudent;
