let expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


describe("Odd or even string length Tests", function () {
   it("should return undefined", function () {
       expect(isOddOrEven(1)).to.equal(undefined)
   });
   it("should return undefined", function () {
       expect(isOddOrEven()).to.equal(undefined)
   });
    it("should return undefined", function () {
        expect(isOddOrEven('')).to.equal("even")
    });
   it("should return even", function () {
       expect(isOddOrEven("Pesh")).to.equal("even");
   });
   it("should return odd", function () {
       expect(isOddOrEven("Pesho")).to.equal("odd")
   })
});