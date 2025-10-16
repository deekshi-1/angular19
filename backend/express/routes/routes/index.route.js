const express = require("express");
const router = express.Router();
const studentRouter = require("./student..route");

router.get("/", (req, res) => {
  res.send("Index works");
});

router.use("/student", studentRouter);

module.exports = router;
