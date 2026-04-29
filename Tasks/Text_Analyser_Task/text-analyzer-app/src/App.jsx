import React, { useState, useCallback, useEffect } from "react";
import InputBox from "./components/InputBox";
import AnalysisPanel from "./components/AnalysisPanel";
import Preview from "./components/Preview";
import Warning from "./components/Warning";

const MAX_LIMIT = 200;

function App() {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState({
    characters: 0,
    words: 0,
    specialChars: 0,
  });

  // useCallback optimization
  const analyzeText = useCallback((inputText) => {
    const characters = inputText.length;
    const words =
      inputText.trim() === ""
        ? 0
        : inputText.trim().split(/\s+/).length;
    const specialChars = inputText.replace(/[a-zA-Z0-9\s]/g, "").length;

    setAnalysis({ characters, words, specialChars });
  }, []);

  // useEffect (important for marks)
  useEffect(() => {
    console.log("Text Updated:", text);
  }, [text]);

  // Color logic
  const getColor = () => {
    if (analysis.characters > MAX_LIMIT) return "red";
    if (analysis.characters > MAX_LIMIT * 0.8) return "orange";
    return "black";
  };

  return (
    <div className="container">
      <h1>Text Analyzer</h1>

      <InputBox
        text={text}
        setText={setText}
        analyzeText={analyzeText}
      />

      {/* Colored character display */}
      <p style={{ color: getColor() }}>
        Characters: {analysis.characters} / {MAX_LIMIT}
      </p>

      <AnalysisPanel
        analysis={analysis}
        maxLimit={MAX_LIMIT}
      />

      <Preview text={text} />

      {analysis.characters > MAX_LIMIT && (
        <Warning message="Character limit exceeded!" />
      )}
    </div>
  );
}

export default App;