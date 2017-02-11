(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function (n) {
        let count = Number(n);
        return this.slice(count, this.length);
    }
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum;
    }
    Array.prototype.take = function (n) {
        let count = Number(n);
        return this.slice(0, count);
    }
    Array.prototype.average = function () {
        return this.sum() / this.length;
    }
})()

let arr = [1,2,3,4,5,6,7,8];
console.log(arr.average());




