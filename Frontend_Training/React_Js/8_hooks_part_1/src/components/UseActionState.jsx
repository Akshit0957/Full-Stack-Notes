//Old Method of handling async actions with useState

import { useState } from "react";

async function fakeLogin(username) {
  console.log("📡 Sending login request...");
  await new Promise((r) => setTimeout(r, 1500));

  if (username === "") throw new Error("Name required");

  return `🎉 Welcome, ${username}!`;
}

function UseActionState() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("👉 Submitting:", username);

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result = await fakeLogin(username);
      setMessage(result);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Old Method Login</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <button disabled={loading}>
        {loading ? "Logging In..." : "Login"}
      </button>

      <p style={{ color: "green" }}>{message}</p>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
}

export default UseActionState;


// //New Method of handling async actions with useActionState

// import { useActionState } from "react";

// async function fakeLogin(username) {
//   console.log("📡 Sending login request...");
//   await new Promise((r) => setTimeout(r, 1500));

//   if (username === "") throw new Error("Name required");

//   return `🎉 Welcome, ${username}!`;
// }

// function UseActionState() {
//   const [message, submitAction, isPending] = useActionState(
//     async (prevState, formData) => {
//       const username = formData.get("username");
//       console.log("👉 Submitting with:", username);

//       const result = await fakeLogin(username);
//       return result;
//     },
//     ""
//   );

//   return (
//     <form action={submitAction}>
//       <h2>New Method Login (useActionState)</h2>

//       <input name="username" placeholder="Enter username" />

//       <button disabled={isPending}>
//         {isPending ? "Logging In..." : "Login"}
//       </button>

//       <p>{message}</p>
//     </form>
//   );
// }

// export default UseActionState;
