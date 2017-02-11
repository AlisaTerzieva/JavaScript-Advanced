let expect = require("chai").expect;
let isTrue = require("../03_RGB-to-HEX").rgbToHexColor;

describe("rgbToHex", function () {
   it("should return #FF9EAA for (255, 158, 170)", function () {
       let isTrue = rgbToHexColor(255, 158, 170);
       expect(isTrue).to.be.equal('#FF9EAA');
   });
    it("should return #000000 for (0,0,0)", function () {
        let isTrue = rgbToHexColor(0,0,0);
        expect(isTrue).to.be.equal('#000000');
    });
    it("should return #0C0D0E for (12,13,14)", function () {
        let isTrue = rgbToHexColor(12,13,14);
        expect(isTrue).to.be.equal('#0C0D0E');
    });
    it("should return #FFFFFF for (255,255,255)", function () {
        let isTrue = rgbToHexColor(255,255,255);
        expect(isTrue).to.be.equal('#FFFFFF');
    });
    it("should return undefined for (-1, 0, 0)", function () {
        let isTrue = rgbToHexColor(-1, 0, 0);
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for (0, -1, 0)", function () {
        let isTrue = rgbToHexColor(0, -1, 0);
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for (256, 0, 0)", function () {
        let isTrue = rgbToHexColor(256, 0, 0);
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for (3.14, 0, 0)", function () {
        let isTrue = rgbToHexColor(3.14, 0, 0);
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for ('5', [3], {8:9})", function () {
        let isTrue = rgbToHexColor('5', [3], {8:9});
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for (0, 0, 256)", function () {
        let isTrue = rgbToHexColor(0, 0, 256);
        expect(isTrue).to.be.equal(undefined);
    });
    it("should return undefined for ()", function () {
        let isTrue = rgbToHexColor();
        expect(isTrue).to.be.equal(undefined);
    });
});