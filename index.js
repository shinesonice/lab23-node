const express = require("express");
const app = express();

const POST = process.env.POST || 5050;

app.use("/", (req, res, next) => {
  console.log("oke");
});

app.listen(POST);
