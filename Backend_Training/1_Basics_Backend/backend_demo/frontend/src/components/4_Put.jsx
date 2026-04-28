import { useEffect, useState } from "react";

function PutExample() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then(res => res.json())
      .then(data => {
        console.log("✅ User fetched:", data);
        setUser(data);
      });
  }, []);

  function updateWithPut() {
    console.log("🚨 Sending PUT request");

    fetch("http://localhost:5000/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Manish Updated" // ❌ ONLY NAME SENT
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("⚠️ PUT response:", data);
        setUser(data.user);
      });
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>PUT Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>

      <button onClick={updateWithPut}>
        Update Name using PUT
      </button>
    </div>
  );
}

export default PutExample;
