const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/api/message", (req, res) => {
  console.log("📩 Backend: Request received from frontend");

  res.json({
    message: "Hello from Backend!",
    time: new Date().toLocaleTimeString(),
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
