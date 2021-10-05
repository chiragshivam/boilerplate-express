var express = require('express');
var app = express();

console.log(__dirname);
var absolutePath = __dirname + "/views/index.html";
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});

app.get("/json", (req, res) => {
  res.json({"message": "Hello json"});
});

























 module.exports = app;
