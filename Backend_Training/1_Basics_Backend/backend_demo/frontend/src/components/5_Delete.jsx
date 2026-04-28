import { useEffect, useState } from "react";

function DeleteExample() {
  const [user, setUser] = useState(null);

  // 1️⃣ Fetch existing data
  useEffect(() => {
    console.log("🌐 Fetching existing user data...");

    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ User data received:", data);
        setUser(data);
      });
  }, []);

  // 2️⃣ Delete data
  function deleteUser() {
    console.log("🌐 Sending DELETE request...");

    fetch("http://localhost:5000/api/user", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Delete response:", data);
        alert(data.message);
        setUser(null); // update UI
      });
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>DELETE Example (Remove Existing Data)</h2>

      {user ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Age:</b> {user.age}</p>

          <button
            onClick={deleteUser}
            style={{ background: "red", color: "white" }}
          >
            Delete User
          </button>
        </>
      ) : (
        <p>User has been deleted ❌</p>
      )}
    </div>
  );
}

export default DeleteExample;
