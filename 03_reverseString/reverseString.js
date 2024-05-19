let userInputString;

const reverseString = function (userInputString) {
  let returnedString = "";
  for (i = userInputString.length - 1; i >= 0; i--) {
    returnedString += userInputString[i];
  } 
  return returnedString;
};

// Do not edit below this line
module.exports = reverseString;
