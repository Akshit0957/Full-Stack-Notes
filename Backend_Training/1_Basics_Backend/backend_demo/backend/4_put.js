const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Existing user
let user = {
  id: 1,
  name: "Manish",
  age: 25,
  role: "Developer",
};

// GET user
app.get("/api/user", (req, res) => {
  console.log("📩 GET /api/user");
  res.json(user);
});

// PUT → Replace ENTIRE user
app.put("/api/user", (req, res) => {
  console.log("📩 PUT /api/user");
  console.log("📦 Full data received:", req.body);

  // ❌ ENTIRE OBJECT REPLACED
  user = req.body;

  res.json({
    message: "User replaced using PUT",
    user,
  });
});

app.listen(5000, () => {
  console.log("🚀 PUT Server running on http://localhost:5000");
});
