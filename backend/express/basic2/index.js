const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fs = require("fs").promises;

app.use(bodyparser.json());

async function writeFile(content) {
  try {
    await fs.writeFile("student.txt", content);
    return { status: true, response: "Data saved" };
  } catch (error) {
    return { status: false, response: error.message };
  }
}

async function readFile(fileName) {
  try {
    const data = await fs.readFile(fileName);
    return { status: true, response: JSON.parse(data.toString()) };
  } catch (error) {
    return { status: false, response: error.message };
  }
}

app.get("/getStudent", async (req, res) => {
  const data = await readFile("student.txt");

  if (data.status) {
    res.send(data.response);
  } else {
    res.status(500).send({ error: data.response });
  }
});

app.post("/addStudent", async (req, res) => {
  const data = await readFile("student.txt");
  if (data.status) {
    let newStd = req.body;
    newStd.name = newStd.name.trim();
    let filt = data.response.filter(
      (stud) => stud.name.toLowerCase() === newStd.name.toLowerCase()
    );
    if (filt.length > 0) {
      res.send("User already exists");
    } else {
      data.response.push(newStd);
      await writeFile(JSON.stringify(data.response));
      res.send("user Added");
    }
  } else {
    res.status(500).send({ error: data.response });
  }
});

app.delete("/deleteStudent", async (req, res) => {
  const data = await readFile("student.txt");
  if (data.status) {
    let name = req.query.name.trim();
    let index = data.response.findIndex(
      (stud) => stud.name.toLowerCase() === name.toLowerCase()
    );
    if (index == -1) {
      res.send("User doesnot exists");
    } else {
      data.response.splice(index, 1);
      await writeFile(JSON.stringify(data.response));
      res.send("Item removed");
    }
  } else {
    res.status(500).send({ error: data.response });
  }
});

app.post("/editStudent", async (req, res) => {
  const data = await readFile("student.txt");
  if (data.status) {
    let name = req.query.name.trim();
    let newStd = req.body;
    newStd.name = newStd.name.trim();

    let index = data.response.findIndex(
      (stud) => stud.name.toLowerCase() === name.toLowerCase()
    );
    if (index == -1) {
      res.send("User doesnot exists");
    } else {
      data.response[index] = newStd;
      await writeFile(JSON.stringify(data.response));
      res.send("Item removed");
    }
  } else {
    res.status(500).send({ error: data.response });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
