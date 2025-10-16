const express = require("express");
const router = express.Router();

let students = [
  { name: "arjun", age: 22, mark: 30 },
  { name: "varun", age: 21, mark: 45 },
];

router.route("/getStudents").get((req, res) => {
  res.json(students);
});

module.exports = router;
