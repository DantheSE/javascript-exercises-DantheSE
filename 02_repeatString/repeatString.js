let inputString;
let numberOfReps;
let stringStorage = "";
let errorMessage;
const repeatString = function (inputString, numberOfReps) {
  stringStorage = "";
  if (numberOfReps < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= numberOfReps; i++) {
    stringStorage += inputString;
  }
  return stringStorage;
};

// Do not edit below this line
module.exports = repeatString;
