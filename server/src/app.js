const express = require("express");

const app = express();

app.set("port", process.env.SERVER_PORT || 3030);

module.exports = app;
