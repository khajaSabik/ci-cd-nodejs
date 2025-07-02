const express = require("express");
const sum = require("./sum");

const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("Dhaka world!");
});

// New route: /sum?a=2&b=3
app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Both a and b must be numbers" });
  }

  const result = sum(a, b);
  res.json({ result });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
