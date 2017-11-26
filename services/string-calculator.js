let stringCalculator = {}
stringCalculator.addDelimitedString = function (string) {
  if (string.length == 0) {
    return 0
  }
  let numArray = string.replace(/\n/g, ",").split(",");

  let result =  numArray.reduce((sum, numString) => {
    return parseInt(sum) + parseInt(numString);
  }, 0);

  if(typeof result === 'number' && !isNaN(result)){
    return result
  } else{
    return new Error('Wrong string format')
  }
}

module.exports = stringCalculator
