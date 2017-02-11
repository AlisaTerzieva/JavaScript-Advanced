let expect = require('chai').expect;


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


describe('SortedList Tests', function () {
    let list = [];
    beforeEach(function () {
        list = new SortedList();
    });
    it('SortedList should have a construcor', function () {
       expect(SortedList.prototype).to.have.constructor;
    });
    describe('Test existence of all methods', function () {
        it('should have method add()', function () {
            expect(SortedList.prototype.hasOwnProperty('add')).to.be.true;
        });
        it('sgould have method remove()', function () {
            expect(SortedList.prototype.hasOwnProperty('remove')).to.be.true;
            });
        it('should have method vrfyRange()', function () {
            expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.true;
        });
        it('should have method sort()', function () {
            expect(SortedList.prototype.hasOwnProperty('sort')).to.be.true;
        });
        it('should have a getter size()', function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.be.true;
        })
    });
    describe('Test add() method', function () {
        it('should return undefined with an empty string', function () {
            expect(list.add('')).to.equal(undefined)
        });
        it('should return undefined without an argument', function () {
            expect(list.add()).to.equal(undefined)
        });
        it('should return undefined with 1 argument', function () {
            expect(list.add(1)).to.equal(undefined)
        });
        it('should add only the first argument to the list if more than one are passed', function () {
            list.add(3,4,5,7);
            expect(list.get(0)).to.equal(3);
        });
        it('should add the element with one argument add("gosho")', function () {
            list.add('gosho');
            expect(list.get(0)).to.equal('gosho');
        });
        it('should add an object if passed as an argument add({gosho:"edno", pesho:"dve")', function () {
            let obj = {gosho:'edno', pesho:'dve'};
            list.add(obj);
            expect(list.get(0)).to.equal(obj);
        });
        it('should sort the elements in the list after adding new elements', function () {
            list.add(5);
            list.add(3);
            list.add(10);
            list.add(99);
            list.add(-5);
            expect(list.get(0)).to.equal(-5)
        });
        it('should sort the elements in the list after adding new elements', function () {
            list.add(5);
            list.add(3);
            list.add(10);
            list.add(99);
            list.add(-5);
            expect(list.get(4)).to.equal(99)
        });
        it('should sort the elements in the list after adding new elements', function () {
            list.add(5);
            list.add(3);
            list.add(10);
            list.add(99);
            list.add(-5);
            expect(list.get(2)).to.equal(5)
        });
        it('should not sort NaN elements', function () {
            list.add('zoo');
            list.add('alisa');
            expect(list.get(0)).to.equal('zoo');
        })
    });
    describe('Test remove() Method', function () {
        it('should throw an error if the given index is outside the collection', function () {
            list.add(4);
            list.add(2);
            expect(()=>list.remove(4)).to.throw(Error)
        });
        it('should throw an error if the given index is negative', function () {
            list.add(4);
            list.add(2);
            expect(()=>list.remove(-2)).to.throw(Error)
        });
        it('should throw an error if the collection is empty', function () {
            list.list.length = 0;
            expect(()=>list.remove(0)).to.throw(Error)
        });
        it('should remove element with valid index', function () {
            list.add(2);
            list.add(1);
            list.add(99);
            list.remove(0);
            expect(list.get(0)).to.equal(2);
        });
    });
    describe('Test vrfyRange() method', function () {
        it('should throw an Error with empty collection', function () {
            expect(()=> list.vrfyRange(0)).to.throw(Error);
        });
        it('should throw an Error with negative index', function () {
            list.add(3);
            list.add(2);
            expect(()=> list.vrfyRange(-90)).to.throw(Error);
        });
        it('should throw an Error with index out of range', function () {
            list.add(874.543);
            list.add(4.5);
            list.add(87);
            expect(()=> list.vrfyRange(4)).to.throw(Error);
        });
        it('should pass valid index', function () {
            list.add(2);
            expect(list.vrfyRange(0)).to.equal(undefined)
        })
    });
    describe('Test sort() method', function () {
        it('should sort numeric elements', function () {
            list.add(99);
            list.add(-432);
            list.add(-65);
            list.add(2);
            expect(list.get(0)).to.equal(-432);
        });
        it('should sort numeric elements', function () {
            list.add(99);
            list.add(-432);
            list.add(-65);
            list.add(2.543);
            expect(list.get(2)).to.equal(2.543);
        });
    });
    describe('Test get size() method', function () {
        it('should return 5 for length by adding 5 elements', function () {
            list.add(1);
            list.add(243);
            list.add(6);
            list.add(365);
            list.add(-54);
            expect(list.size).to.equal(5);
        });it('should return 3 for length by adding 6 elements and removing 3', function () {
            list.add(1);
            list.remove(0);
            list.add(243);
            list.add(6);
            list.remove(0);
            list.add(365);
            list.add(-0.5);
            list.add(-54);
            list.remove(2);
            expect(list.size).to.equal(3);
        });
    })
});
