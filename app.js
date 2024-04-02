const express = require("express");
const app = express();
const port = 3000;
var birds = require("./birds");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/page", (req, res) => {
  res.send("Hello Wordsafld!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
