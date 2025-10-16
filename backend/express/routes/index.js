const express = require("express");
const app = express();
const bodyparser = require("body-parser");
let router = require("./routes/index.route");

app.use(bodyparser.json());

app.use("/", router);

app.listen(3000);
