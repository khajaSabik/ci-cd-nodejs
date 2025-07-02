const express = require("express");
const path = require("path");
const sum = require("./src/sum"); // Make sure sum.js is inside 'src' folder

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// POST route to calculate sum
app.post("/sum", (req, res) => {
  const { a, b } = req.body;
  const numA = parseInt(a);
  const numB = parseInt(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Both a and b must be numbers" });
  }

  const result = sum(numA, numB);
  res.json({ result });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
