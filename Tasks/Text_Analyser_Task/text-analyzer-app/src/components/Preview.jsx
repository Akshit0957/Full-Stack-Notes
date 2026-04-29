function Preview({ text }) {
  return (
    <div>
      <h3>Live Preview</h3>

      {text ? (
        <p>{text}</p>
      ) : (
        <p style={{ color: "gray" }}>Nothing to preview...</p>
      )}
    </div>
  );
}

export default Preview;