const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // VERY IMPORTANT for POST

app.post("/api/login", (req, res) => {
  console.log("📩 POST request received at /api/login");
  console.log("📦 Data received:", req.body);

  const { username, age, password } = req.body;

  res.json({
    message: `Welcome, ${username}!`,
    age: age,
    password: password,
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
