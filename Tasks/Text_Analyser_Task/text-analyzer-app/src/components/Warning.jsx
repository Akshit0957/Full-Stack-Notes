function Warning({ message }) {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "red",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        animation: "fadeIn 0.5s ease-in"
      }}
    >
      {message}
    </div>
  );
}

export default Warning;