const http = require("http");
const fun = require("./functions");

http
  .createServer(function (req, res) {
    if (req.url == "/heloo") {
      res.write("<h1>Hellow</h1>");
    } else if (req.url == "/time") {
      const date = new Date();
      const timeNow = date.toLocaleString("en-US", {
        hour: "numeric",
        hour12: true,
        minute: "numeric",
      });
      res.write(`Current time: ${timeNow}`);
    } else if (req.url.includes("/square")) {
      let num = parseInt(req.url.split("=")[1]);
      res.write(`Square of number: ${num * num}`);
    } else if (req.url.includes("/prime")) {
      let num = parseInt(req.url.split("=")[1]);
      res.write(`${num} is ${fun.prime(num)}`);
    } else if (req.url.includes("/sumofthree")) {
      let temp = req.url.split("?")[1].split("&");
      num1 = parseInt(temp[0]?.split("=")[1]) | null;
      num2 = parseInt(temp[1]?.split("=")[1]) | null;
      num3 = parseInt(temp[2]?.split("=")[1]) | null;
      if (!num1 || !num2 || !num3) {
        res.write("invalid input");
      } else
        res.write(
          `sum of three numbers is ${fun.sumofThree(num1, num2, num3)}`
        );
    } else if (req.url.includes("/reverse")) {
      let string = req.url.split("=")[1];
      res.write(`Reverse of ${string} is ${fun.strReverse(string)}`);
    } else if (req.url.includes("/greeting")) {
      let string = req.url.split("=")[1];
      console.log({ message: `hello ${string}` });
    } else if (req.url.includes("/factorial")) {
      let num = parseInt(req.url.split("=")[1]);
      res.write(`factorial of ${num} is ${fun.factorial(num)}`);
    } else if (req.url.includes("/multiply")) {
      let temp = req.url.split("?")[1].split("&");
      num1 = parseInt(temp[0]?.split("=")[1]) | null;
      num2 = parseInt(temp[1]?.split("=")[1]) | null;
      res.write(`Multy Result is ${num1 * num2}`);
    } else if (req.url.includes("/fibinocci")) {
      let num = parseInt(req.url.split("=")[1]);
      res.write(`Fibinocci  is ${fun.fibinoci(num)}`);
    } else if (req.url.includes("/stringLength")) {
      let string = req.url.split("=")[1];
      res.write(`Length of ${string} is ${string.length}`);
    } else {
      res.write("<h2>No such url</h2>");
    }

    res.end();
  })
  .listen(3000);
