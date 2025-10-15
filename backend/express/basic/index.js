const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

let names = ["Arjun", "Rahul", "Varun"];

let students = [
  { name: "arjun", age: 22, mark: 30 },
  { name: "varun", age: 21, mark: 45 },
];

app.get("/sum", (req, res) => {
  console.log(req.query);
  let sum = parseInt(req.query.a) + parseInt(req.query.b);
  console.log(sum);
  res.send(`Sum is ${sum}`);
});

app.get("/reverse", (req, res) => {
  let str = req.query.string.trim().split("").reverse().join("");
  res.send(str);
});

app.get("/sumofnumbers", (req, res) => {
  let num = parseInt(req.query.num);
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  res.send("Sum is" + sum);
});

app.get("/getNames", (req, res) => {
  console.log(names);
  res.json(names);
});

app.post("/addName", (req, res) => {
  let name = req.query.name;
  console.log(name);

  if (names.includes(name)) {
    res.send("Name already exist");
  } else {
    names.push(name);
    console.log(names);
    res.json(names);
  }
});

app.delete("/deleteName", (req, res) => {
  let name = req.query.name;
  if (names.includes(name)) {
    let index = names.indexOf(name);
    names.splice(index, 1);
    res.json(names);
  } else {
    res.send("Name doesn't exist");
  }
});

app.put("/updateName", (req, res) => {
  let name = req.query.name;
  let rename = req.query.name2;
  if (names.includes(name)) {
    index = names.indexOf(name);
    names[index] = rename;
    res.json(names);
  } else {
    res.send("Name doesnt exist");
  }
});

app.post("/addStudent", (req, res) => {
  const newStd = req.body;
  newStd.name = newStd.name.trim();
  let filt = students.filter(
    (stud) => stud.name.toLowerCase() === newStd.name.toLowerCase()
  );
  if (filt.length > 0) {
    res.send("User already exists");
  } else {
    students.push(newStd);
    res.send("user Added");
  }
});

app.get("/getStudents", (req, res) => {
  res.json(students);
});

app.delete("/removeStudent", (req, res) => {
  let stdName = req.query.name.trim();
  console.log(stdName.toLowerCase());

  let index = students.findIndex(
    (item) => item.name.toLowerCase() == stdName.toLowerCase()
  );
  console.log(index);
  if (index != -1) {
    students.splice(index, 1);
    res.send("Item removed");
  } else res.send("Not found");
});

app.listen(3000);
