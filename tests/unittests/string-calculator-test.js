var chai = require("chai");
var expect = chai.expect;
var stringCalculator = require("../../services/string-calculator")

describe("String Calculator", function() {
  describe("Delimited String Addition", function() {
    it("should return 0 when string is empty", function() {
      expect(stringCalculator.addDelimitedString("")).to.equal(0);
    });
    it("should return same number when string has only one number", function() {
      expect(stringCalculator.addDelimitedString("1")).to.equal(1);
      expect(stringCalculator.addDelimitedString("121")).to.equal(121);
    });
    it("should return correct sum of two numbers", function() {
      expect(stringCalculator.addDelimitedString("1,2")).to.equal(3);
      expect(stringCalculator.addDelimitedString("121,4")).to.equal(125);
    });
    it("should return correct sum of any ammount of numbers in the string", function() {
      expect(stringCalculator.addDelimitedString("1,2,3,4,5,6,7,8,9,10")).to.equal(55);
      expect(stringCalculator.addDelimitedString("121,4,80")).to.equal(205);
    });
  });
});
