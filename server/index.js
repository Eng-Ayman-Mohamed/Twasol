const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/hello", (req, res) => {
  res.send("Hello in my server");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
