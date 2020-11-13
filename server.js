const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.use(express.static(__dirname + "/client"));

app.listen(port, function () {
  console.log("Dang chay server tren port:", port);
});
