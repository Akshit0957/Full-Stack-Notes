// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(cors());

// app.get("/api/users", (req, res) => {
//   console.log("📩 GET request received at /api/users");

//   res.json({
//     users: ["Manish", "Ansh", "Agrim"]
//   });
// });

// app.listen(5000, () => {
//   console.log("🚀 Backend running on http://localhost:5000");
// });
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ GET route EXISTS
app.get("/api/user", (req, res) => {
  console.log("📩 GET /api/user called");

  res.json({
    name: "Manish",
    age: 25,
    role: "Developer",
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
