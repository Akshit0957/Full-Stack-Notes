import React from "react";

function Note(props) {
  console.log("Children Passed:", props.children);

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        border: "2px solid green"
      }}
    >
      <h1>Note Box</h1>
      {props.children}
      {props.content}

      {}
    </div>
  );
}

export default Note;
