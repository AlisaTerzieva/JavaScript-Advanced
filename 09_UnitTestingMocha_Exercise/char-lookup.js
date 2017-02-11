let expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("Char lookup test", function () {
    it("should return undefined for (1,1)", function () {
        expect(lookupChar(1,1)).to.equal(undefined)
    });
    it("should return undefined for ('', '')", function () {
        expect(lookupChar('', '')).to.equal(undefined)
    });
    it("should return undefined for ()", function () {
        expect(lookupChar()).to.equal(undefined)
    });
    it("should return undefined for ('1',0, 2)", function () {
        expect(lookupChar('1', 0, 2)).to.equal('1')
    });
    it("should return undefined for ('greshka', 2.4)", function () {
        expect(lookupChar('greshka', 2.4)).to.equal(undefined)
    });
    it("should return 'Incorrect index' for ('cat', 3)", function () {
        expect(lookupChar('cat', 3)).to.equal("Incorrect index")
    });
    it("should return 'Incorrect index' for ('pesho', -1)", function () {
        expect(lookupChar('pesho', -1)).to.equal("Incorrect index")
    });
    it("should return 'Incorrect index' for ('greshka', 15)", function () {
        expect(lookupChar('greshka', 15)).to.equal("Incorrect index")
    });
    it("should return 'r' for ('pear', 3)", function () {
        expect(lookupChar('pear', 3)).to.equal('r')
    })
});