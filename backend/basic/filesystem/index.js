const { error } = require("console");
const fs = require("fs");
const path = require("path");

fileName1 = "abc.txt";
fileName2 = "abcd.txt";
content1 = "hello file is created";
content2 = "hello file2 is created";
content3 = "appended text";

// fs.watchFile(fileName2, content2, resp(err));

function resp(error) {
  console.log("Error", error);
}

function handleRead(err, data) {}

function writeFile(fileName, content) {
  fs.writeFile(fileName, content, function (error) {
    if (error) {
      console.log("Error", error);
    } else {
      console.log("file write successfully");
    }
  });
}

function readFile(fileName) {
  fs.readFile(fileName, function (err, data) {
    if (err) {
      console.log("Error could not read file", error);
    } else {
      console.log("file data", data.toString());
    }
  });
}

function deleteFile(fileName) {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error("Error deleting file:", err.message);
    } else {
      console.log(`File "${fileName}" deleted successfully`);
    }
  });
}

function renameFile(oldName, newName) {
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error("Error renaming file:", err.message);
    } else {
      console.log(`File renamed from "${oldName}" to "${newName}"`);
    }
  });
}

function appendAndRead(fileName, newContent) {
  fs.appendFile(fileName, newContent, (err) => {
    if (err) {
      console.error("Error appending to file:", err.message);
    } else {
      console.log("Content appended. Reading updated file:");
      readFile(fileName);
    }
  });
}

function checkFileExists(fileName) {
  fs.access(fileName, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File "${fileName}" does NOT exist`);
    } else {
      console.log(`File "${fileName}" exists`);
    }
  });
}

function listFilesInDir(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err.message);
    } else {
      console.log("Files in directory:");
      files.forEach((file) => console.log(file));
    }
  });
}

function copyFile(sourceFile, destinationFile) {
  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error("Error copying file:", err.message);
    } else {
      console.log(`File copied from "${sourceFile}" to "${destinationFile}"`);
    }
  });
}

function moveFile(oldPath, newPath) {
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      console.error("Error moving file:", err.message);
    } else {
      console.log(`File moved from "${oldPath}" to "${newPath}"`);
    }
  });
}

function createDirectory(dirPath) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error creating directory:", err.message);
    } else {
      console.log(`Directory "${dirPath}" created`);
    }
  });
}

function removeDirectory(dirPath) {
  fs.rmdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error("Error removing directory:", err.message);
    } else {
      console.log(`Directory "${dirPath}" removed`);
    }
  });
}

function watchFile(fileName) {
  fs.watchFile(fileName, (curr, prev) => {
    console.log(`File "${fileName}" was modified`);
    console.log(`Previous size: ${prev.size}, Current size: ${curr.size}`);
  });
}

function getFileStats(fileName) {
  fs.stat(fileName, (err, stats) => {
    if (err) {
      console.error("Error getting file stats:", err.message);
    } else {
      console.log(`Stats for "${fileName}":`);
      console.log(`Size: ${stats.size} bytes`);
      console.log(`Created: ${stats.birthtime}`);
      console.log(`Last Modified: ${stats.mtime}`);
    }
  });
}

// writeFile("file.txt", "hellow this is file one");

// deleteFile("file.txt");

// renameFile("file.txt", "file2.txt ");

// appendAndRead("file2.txt", " newtext");

// checkFileExists("file2.txt");
// checkFileExists("dd.txt")

// listFilesInDir("../../../");

watchFile("file2.txt");
getFileStats("file2.txt");
