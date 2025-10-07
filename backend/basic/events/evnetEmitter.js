import cron from "node-cron";
const evnt = require("events");
const mail = require("./mailSending");
const path = require("path");
const evntEmit = new evnt.EventEmitter();
let previousFiles = new Set();

evntEmit.on("checkNewFiles", function () {
  const watchDir = path.join(__dirname, "watch");

  cron.schedule("* * * * *", () => {
    fs.readdir(watchDir, (err, files) => {
      if (err) {
        console.error("Error reading watch directory:", err.message);
        return;
      }

      const currentFiles = new Set(files);
      const newFiles = [...currentFiles].filter((f) => !previousFiles.has(f));

      if (newFiles.length > 0) {
        console.log("New files found:", newFiles);
        evntEmit.emit("data", `New files found: ${newFiles.join(", ")}`);
      }

      previousFiles = currentFiles;
    });
  });
});

evntEmit.on("cleanTemp", function () {
  cron.schedule("0 * * * *", () => {
    const tempDir = path.join(__dirname, "temp");

    fs.readdir(tempDir, (err, files) => {
      if (err) {
        console.error("Error reading temp directory:", err.message);
        return;
      }

      files.forEach((file) => {
        const filePath = path.join(tempDir, file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err.message);
          } else {
            console.log("Deleted temp file:", filePath);
          }
        });
      });
    });
  });
});

evntEmit.on("incom", function () {
  console.log("package recieved");
});

evntEmit.on("data", function (data) {
  console.log(data);
});

evntEmit.on("fib", function (data) {
  console.log("fib is", data);
});
evntEmit.on("crone", function () {
  cron.schedule("* * 5 * *", () => {});
});
evntEmit.on("croneMonth", function () {
  cron.schedule("* * * * *", () => {
    mail();
  });
});
evntEmit.on("append", function (data) {
  fs.appendFile("appendFile.txt", data, (err) => {
    if (err) {
      console.error("Error appending to file:", err.message);
    } else {
      console.log("Content appended. Reading updated file:");
    }
  });
});

evntEmit.on("logs", function (data) {
  fs.appendFile("logs.txt", data, (err) => {
    if (err) {
      console.error("Error appending to file:", err.message);
    } else {
      console.log("Content appended. Reading updated file:");
      fs.stat("logs.txt", (err, stats) => {
        if (err) {
          console.error("Error getting file stats:", err.message);
        } else {
          if (stats.size > 1222) evntEmit.emit("data", "size exeded");
        }
      });
    }
  });
});

evntEmit.emit("incom");

evntEmit.emit("data", "hellow");

module.exports = evntEmit;
