let list = (function(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
})();


let expect = require('chai').expect;

describe('Unit testing List', function () {
    beforeEach(function () {
        let result = list.toString().split(',');
        for(let element of result){
            list.delete(0);
        }
    });
    it('should return "pesho" for .add("pesho")', function () {
        list.add('pesho');
        expect(list.toString()).to.equal('pesho');
    });
    it('should return "pesho, gosho, 3" for .add("pesho"), .add("gosho"), .add(3)', function () {
        list.add('pesho');
        list.add('gosho');
        list.add(3);
        expect(list.toString()).to.equal('pesho, gosho, 3');
    });
    it('should return "" for list.toString()', function () {
        expect(list.toString()).to.equal('');
    });
    it('should return deleted: two', function () {
        list.add('two');
        expect(list.delete(0)).to.equal('two');
    });
    it('should return undefined for empty array', function () {
        expect(list.delete(0)).to.equal(undefined)
    });
    it('should return undefined for invalid index', function () {
        expect(list.delete(-1)).to.equal(undefined)
    });
    it('should return undefined for invalid index', function () {
        expect(list.delete(90)).to.equal(undefined)
    });
    it('should return undefined for index which is not integer', function () {
        expect(list.delete(2.4)).to.equal(undefined)
    });
    it('should return list = []', function () {
        expect(console.log(`list = [${list}]`)).to.equal(undefined);
    });
    it('should return array ', function () {
        list.add('gosho');
        list.add(3);
        list.delete(3);
        list.add('pesho');
        list.add(-4);
        list.delete(0);
        expect(list.toString()).to.equal('3, pesho, -4');
    });
    it('should make no changes if delete index is a string', function () {
        list.add('gosho');
        list.delete('');
        expect(list.toString()).to.equal('gosho');
    });
    it('should return undefined if no delete has no index', function () {
        expect(list.delete()).to.equal(undefined)
    });
    it('should return undefined if .add is called without argument', function () {
        expect(list.add()).to.equal(undefined)
    })
});
