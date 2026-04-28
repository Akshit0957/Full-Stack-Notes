import { useEffect, useState } from "react";

function PatchExample() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/user")
      .then(res => res.json())
      .then(data => {
        console.log("✅ User fetched:", data);
        setUser(data);
      });
  }, []);

  function updateWithPatch() {
    console.log("✏️ Sending PATCH request");

    fetch("http://localhost:5001/api/user", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Manish Updated"
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log("✅ PATCH response:", data);
        setUser(data.user);
      });
  }

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>PATCH Example</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Role: {user.role}</p>

      <button onClick={updateWithPatch}>
        Update Name using PATCH
      </button>
    </div>
  );
}

export default PatchExample;
