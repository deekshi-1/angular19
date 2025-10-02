const http = require("http");

http
  .createServer(function (req, res) {
    console.log("Welcome", req.url);
  })
  .listen(3000);
