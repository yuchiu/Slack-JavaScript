const express = require("express");
const path = require("path");

const app = express();

app.set("port", process.env.SERVER_PORT || 3030);

app.use(express.static(path.join(__dirname, "..", "dist")));

app.all("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
