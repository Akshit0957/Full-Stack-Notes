import { useEffect, useState } from "react";

function BackendDemo() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("🌐 Frontend: Sending request to backend...");

    fetch("http://localhost:5000/api/message")
      .then((res) => {
        console.log("📥 Frontend: Response received", res.status);
        return res.json();
      })
      .then((result) => {
        console.log("✅ Frontend: Data received:", result);
        setData(result);
      })
      .catch((err) => {
        console.error("❌ Frontend Error:", err);
        setError("Failed to fetch data");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Backend Black Box Demo</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!data && !error && <p>Loading data from backend...</p>}

      {data && (
        <>
          <p><b>Message:</b> {data.message}</p>
          <p><b>Time:</b> {data.time}</p>
        </>
      )}
    </div>
  );
}

export default BackendDemo;
