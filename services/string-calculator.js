let stringCalculator = {}
stringCalculator.addDelimitedString = function (string) {
  if (string.length == 0) {
    return 0
  }
  let numArray = string.replace(/\n/g, ",").split(",");

  let negativeNumbers = [];
  let result = numArray.reduce((sum, numString) => {
    let num = parseInt(numString);
    if (num < 0) {
      negativeNumbers.push(num);
    }
    return parseInt(sum) + num;
  }, 0);

  if (negativeNumbers.length > 0) {
    return new Error('Negative numbers are not allowed, the string contains: ' + negativeNumbers.toString())
  }

  if (typeof result === 'number' && !isNaN(result)) {
    return result
  }

  return new Error('Wrong string format')
}

module.exports = stringCalculator
