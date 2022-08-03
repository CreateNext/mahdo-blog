const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const { PORT } = process.env;
const port = 7017 || PORT;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
