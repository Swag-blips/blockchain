let express = require("express");

let app = express();

app.get("/blockchain", function (req, res) {});

app.post("/transaction", function (req, res) {});

app.get("/mine", function (req, res) {});
app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
