function PostExample() {
  function handleLogin() {
    console.log("🌐 Frontend: Sending POST request...");

    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Manish",
        age: 25,
        password: "Manish@123",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Frontend: Response received:", data);

        alert(
          `Message: ${data.message}\nAge: ${data.age}\nPassword: ${data.password}`
        );
      });
  }

  return (
    <div>
      <h2>POST Example</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default PostExample;
