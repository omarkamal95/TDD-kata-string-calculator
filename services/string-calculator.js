let stringCalculator = {}
stringCalculator.addDelimitedString = function (string) {
  if (string.length == 0) {
    return 0
  }
  let numArray = string.split(",");
  if (numArray.length == 1) {
    return parseInt(numArray[0]);
  }
  return parseInt(numArray[0]) + parseInt(numArray[1]);
}

module.exports = stringCalculator
