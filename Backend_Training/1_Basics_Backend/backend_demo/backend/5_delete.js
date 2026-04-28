const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🧠 Existing data (acting like database)
let user = {
  id: 1,
  name: "Manish",
  age: 25,
};

// GET → Fetch existing user
app.get("/api/user", (req, res) => {
  console.log("📩 GET /api/user called");
  res.json(user);
});

// DELETE → Remove existing user
app.delete("/api/user", (req, res) => {
  console.log("📩 DELETE /api/user called");

  if (!user) {
    return res.json({
      message: "User already deleted",
    });
  }

  user = null; // ❌ remove data

  res.json({
    message: "User deleted successfully",
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
