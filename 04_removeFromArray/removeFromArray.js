let inputArray;

const removeFromArray = function (inputArray, ...args) {
  return inputArray.filter((excludedNum) => !args.includes(excludedNum));
};

// Do not edit below this line
module.exports = removeFromArray;
