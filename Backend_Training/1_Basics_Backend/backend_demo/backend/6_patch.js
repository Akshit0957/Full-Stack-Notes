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

// PATCH → Partial update
app.patch("/api/user", (req, res) => {
  console.log("📩 PATCH /api/user");
  console.log("📦 Partial data received:", req.body);

  // ✅ ONLY UPDATE PROVIDED FIELDS
  user = { ...user, ...req.body };

  res.json({
    message: "User updated partially using PATCH",
    user,
  });
});

app.listen(5001, () => {
  console.log("🚀 PATCH Server running on http://localhost:5001");
});
