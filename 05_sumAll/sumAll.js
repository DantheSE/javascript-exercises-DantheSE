let rangeStart;
let rangeEnd;

const sumAll = function (rangeStart, rangeEnd) {
  let sum = 0;

  if (
    rangeStart < rangeEnd &&
    !(rangeStart < 0 || rangeEnd < 0) &&
    !(typeof rangeStart === "string" || typeof rangeEnd === "string")
  ) {
    for (let i = rangeStart; i <= rangeEnd; i++) {
      if (i <= rangeEnd) {
        sum += i;
      }
    }
  } else if (
    rangeStart > rangeEnd &&
    !(typeof rangeStart === "string" || typeof rangeEnd === "string")
  ) {
    for (let i = rangeStart; i >= rangeEnd; i--) {
      if (i >= rangeEnd) {
        sum += i;
      }
    }
  } else if (
    rangeStart < 0 ||
    rangeEnd < 0 ||
    typeof rangeStart === "string" ||
    typeof rangeEnd === "string" ||
    typeof rangeStart != "number" ||
    typeof rangeEnd != "number"
  ) {
    return "ERROR";
  } else {
    console.log("error");
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
