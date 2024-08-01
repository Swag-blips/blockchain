const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/blockchain", function (req, res) {});

app.post("/transaction", function (req, res) {
  console.log(req.body);
  res.send(`The amount of the transaction ${req.body.amount} bitcoin`);
});

app.get("/mine", function (req, res) {});
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
