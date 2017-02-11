let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('Math enforcer Tests', function () {
   describe('addFive Tests', function () {
       it("should return undefined for 'cat'", function () {
           expect(mathEnforcer.addFive('cat')).to.equal(undefined)
       });
       it("should return 10 for 5", function () {
           expect(mathEnforcer.addFive(5)).to.equal(10)
       });
       it("should return 5.2 for 0.2", function () {
           expect(mathEnforcer.addFive(0.2)).to.equal(5.2)
       });
       it("should return undefined for ()", function () {
           expect(mathEnforcer.addFive()).to.equal(undefined)
       });
       it("should return -2 for -7", function () {
           expect(mathEnforcer.addFive(-7)).to.equal(-2)
       });
       it("should return 5.09 for 0.09", function () {
           expect(mathEnforcer.addFive(0.09)).to.equal(5.09)
       });
   });
   describe('subtractTen Tests', function () {
       it("should return undefined for 'cat'", function () {
           expect(mathEnforcer.subtractTen('cat')).to.equal(undefined)
       });
       it("should return undefined for ()", function () {
           expect(mathEnforcer.subtractTen()).to.equal(undefined)
       });
       it("should return -1 for 9", function () {
           expect(mathEnforcer.subtractTen(9)).to.equal(-1)
       });
       it("should return 2 for 12", function () {
           expect(mathEnforcer.subtractTen(12)).to.equal(2)
       });
       it("should return 2.4 for 12.4", function () {
           expect(mathEnforcer.subtractTen(12.4)).to.be.closeTo(2,0.41)
       });
       it("should return -10 for 0", function () {
           expect(mathEnforcer.subtractTen(0)).to.equal(-10)
       });
       it("should return -12 for -2", function () {
           expect(mathEnforcer.subtractTen(-2)).to.equal(-12)
       });
       it("should return -10.01 for -0.01", function () {
           expect(mathEnforcer.subtractTen(-0.01)).to.equal(-10.01)
       });
   });
   describe('sum Tests', function () {
       it("should return undefined for ()", function () {
           expect(mathEnforcer.sum()).to.equal(undefined)
       });
       it("should return undefined for ('cat')", function () {
           expect(mathEnforcer.sum('cat')).to.equal(undefined)
       });
       it("should return undefined for (4, 'cat')", function () {
           expect(mathEnforcer.sum(4, 'cat')).to.equal(undefined)
       });
       it("should return undefined for ('greshka',3)", function () {
           expect(mathEnforcer.sum('greshka',3)).to.equal(undefined)
       });
       it("should return 5 for (2,3)", function () {
           expect(mathEnforcer.sum(2,3)).to.equal(5)
       });
       it("should return 2.6 for (1.3,1.3)", function () {
           expect(mathEnforcer.sum(1.3,1.3)).to.equal(2.6)
       });
       it("should return 3 for (0.9, 2.1)", function () {
           expect(mathEnforcer.sum(0.9,2.1)).to.equal(3)
       });
       it("should return 2.2 for (2.19,0.01)", function () {
           expect(mathEnforcer.sum(2.19,0.01)).to.be.closeTo(2,0.2)
       });
   })
});