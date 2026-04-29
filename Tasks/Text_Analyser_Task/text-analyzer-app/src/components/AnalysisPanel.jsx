function AnalysisPanel({ analysis, maxLimit }) {
  const remaining = maxLimit - analysis.characters;

  return (
    <div>
      <p>Characters: {analysis.characters}</p>
      <p>Words: {analysis.words}</p>
      <p>Special Characters: {analysis.specialChars}</p>

      <p>Remaining: {remaining}</p>

      {remaining < 0 && (
        <p style={{ color: "red" }}>Limit exceeded!</p>
      )}
    </div>
  );
}

export default AnalysisPanel;