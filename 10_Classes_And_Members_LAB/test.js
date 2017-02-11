class SortedList {
    constructor() {
        this.list = [];
    }

    add(element) {
        this.list.push(element);
        this.sort();
    }

    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }

    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }

    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }

    sort() {
        this.list.sort((a, b) => a - b);
    }

    get size() {
        return this.list.length;
    }

}
//dostapvam faila za test
let expect = require('chai').expect;

describe("SortedList", function(){

    let myList = {};

    beforeEach(function(){
        myList = new SortedList();
    });

    it('should have constructor', function(){
        expect(typeof SortedList).to.equal('function');

        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true,"Didn't find add function");
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true,"Didn't find add function");
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true,"Didn't find add function");
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true,"Didn't find add function");
    });


});