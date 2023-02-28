const express = require("express");
const app = express();

const POST = process.env.POST || 5050;

app.use("/test", (req, res, next) => {
  console.log("oke");
  res.send({ result: true });
});

app.listen(POST);
