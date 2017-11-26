let stringCalculator = {}
stringCalculator.addDelimitedString = function (string) {
  if (string.length == 0) {
    return 0
  }
  let numArray = string.split(",");

  return numArray.reduce((sum, numString) => {
    return parseInt(sum) + parseInt(numString);
  }, 0)
}

module.exports = stringCalculator
