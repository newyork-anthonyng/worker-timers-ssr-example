const express = require("express");
const app = express();
const path = require("path");

// This file is compiled by webpack
const indexRoute = require("./dist/indexRoute").default;

app.use(express.static(path.join(__dirname, "dist")));

app.use(indexRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
