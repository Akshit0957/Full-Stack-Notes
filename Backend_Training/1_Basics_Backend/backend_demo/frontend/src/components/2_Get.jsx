import { useEffect, useState } from "react";

function GetExample() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("🌐 Frontend: Sending GET request...");

    fetch("http://localhost:5000/api/user")
      .then((res) => {
        console.log("📥 Frontend: Response received");
        return res.json();
      })
      .then((data) => {
        console.log("✅ Frontend: Data received:", data);
        setUsers(data.users);
      });
  }, []);

  return (
    <div>
      <h2>GET Example</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </div>
  );
}

export default GetExample;
