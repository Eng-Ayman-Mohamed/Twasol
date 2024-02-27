const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (err, res) => {
  res.send("Hello in twasol server!");
});

app.listen(port, (err, res) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
});
