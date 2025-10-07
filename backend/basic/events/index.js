const entEmitter = require("./evnetEmitter");
const fs = require("fs");
const http = require("http");

function fibinoci(len) {
  let a = 0;
  let b = 1;
  let str = " ";
  if (len == 1) return a;
  if (len == 2) return b;
  str = a + " " + b + " ";
  for (i = 3; i <= len; i++) {
    str = str + b + " ";
    c = b;
    b = a + b;
    a = c;
  }
  entEmitter.emit("fib", str);
}

function writeFile(fileName, content) {
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      console.log("Error", error);
    } else {
      entEmitter.emit("data", "file created");
    }
  });
}

function readFile(fileName) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log("Error could not read file", error);
    } else {
      if (toString(data).includes("apple")) {
        entEmitter.emit("data", "string found");
      }
    }
  });
}

http
  .createServer(function (req, res) {
    entEmitter.emit("log", req.url + "\n");
    if (req.url == "/heloo") {
      res.write("<h1>Hellow</h1>");
      entEmitter.emit("data", "PATH CALLED");
    } else if (req.url.includes("/greeting")) {
      let string = req.url.split("=")[1];
      entEmitter.emit("append", " " + string);
    } else {
      res.write("<h2>No such url</h2>");
    }

    res.end();
  })
  .listen(3000);

fibinoci(3);
writeFile("one.txt", "file one created");
readFile("appendFile.txt");
evntEmit.emit("cleanTemp");
evntEmit.emit("checkNewFiles");
