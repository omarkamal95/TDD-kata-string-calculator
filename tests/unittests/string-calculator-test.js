var chai = require("chai");
var expect = chai.expect;
var stringCalculator = require("../../services/string-calculator")

describe("String Calculator", function () {
  describe("Delimited String Addition", function () {
    it("should return 0 when string is empty", function () {
      expect(stringCalculator.addDelimitedString("")).to.be.equal(0);
    });
    it("should return same number when string has only one number", function () {
      expect(stringCalculator.addDelimitedString("1")).to.be.equal(1);
      expect(stringCalculator.addDelimitedString("121")).to.be.equal(121);
    });
    it("should return correct sum of two numbers", function () {
      expect(stringCalculator.addDelimitedString("1,2")).to.be.equal(3);
      expect(stringCalculator.addDelimitedString("121,4")).to.be.equal(125);
    });
    it("should return correct sum of any ammount of numbers in the string", function () {
      expect(stringCalculator.addDelimitedString("1,2,3,4,5,6,7,8,9,10")).to.be.equal(55);
      expect(stringCalculator.addDelimitedString("121,4,80")).to.be.equal(205);
    });
    it("should return correct sum only if strings are seperated by ',' or '\\n'", function () {
      expect(stringCalculator.addDelimitedString("1\n2,3")).to.be.equal(6);
      expect(stringCalculator.addDelimitedString("121,4,\n")).to.be.an('error');
    });
    it("should reject any string with negative numbers and return an error with the numbers'", function () {
      expect(stringCalculator.addDelimitedString("1\n2,3,-4,-5"))
        .to.be.an("error")
        .to.have.property("message", "Negative numbers are not allowed, the string contains: -4,-5");
      expect(stringCalculator.addDelimitedString("121,4,\n-4,-11,-100,80"))
        .to.be.an('error')
        .to.have.property('message', "Negative numbers are not allowed, the string contains: -4,-11,-100");
    });
  });
});
