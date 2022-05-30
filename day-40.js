//https://www.codewars.com/kata/542106e2dda52658bf00001a

const { exec } = require("child_process");

function execute(command, callback) {
  exec(command, function (error, stdout) {
    if (error) {
      callback(error);
    } else {
      callback(null, stdout);
    }
  });
}
