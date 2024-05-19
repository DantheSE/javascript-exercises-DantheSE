let celsiusValue;
let fahrenheitValue;

const convertToCelsius = function (fahrenheitValue) {
  let convertedCelsius = ((fahrenheitValue - 32) * 5) / 9;
  let roundedCelsius = Math.round(convertedCelsius * 10) / 10;
  return roundedCelsius;
};

const convertToFahrenheit = function (celsiusValue) {
  let convertedFahrenheit = (celsiusValue * 9) / 5 + 32;
  let roundedFahrenheit = Math.round(convertedFahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
