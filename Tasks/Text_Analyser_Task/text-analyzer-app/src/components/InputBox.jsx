import React, { useEffect, useRef } from "react";

function InputBox({ text, setText, analyzeText }) {
  const inputRef = useRef();

  // Auto-focus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Analyze text when it changes
  useEffect(() => {
    analyzeText(text);
  }, [text, analyzeText]);

  return (
    <div>
      <textarea
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px"
        }}
      />

      <button
        onClick={() => {
          setText("");
          inputRef.current.focus();
        }}
        style={{ marginTop: "10px" }}
      >
        Clear
      </button>
    </div>
  );
}

export default InputBox;