let storedYear;

const leapYears = function (storedYear) {
  if (storedYear % 4 === 0) {
    if (storedYear % 400 === 0 || storedYear % 4 === 0) {
      if ((storedYear % 400 === 0 && storedYear % 4 === 0) || (storedYear % 100 !== 0 && storedYear % 4 === 0)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
